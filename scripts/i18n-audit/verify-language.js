#!/usr/bin/env node
/**
 * verify-language.js <lang>
 *
 * One-stop post-apply audit for a single locale. Replaces the older
 * `scripts/audit-translation.js` + `language-diff.js --dry-run` dance
 * with a single manifest-aware check:
 *
 *   1. Locale-specific coverage — no `missing` or `untranslated`
 *      entries in `language-diff.js <lang> --dry-run`.
 *   2. V2 manifest coverage — the per-language marker at
 *      `v2-refresh-status/<lang>.json` exists and points at the
 *      current `manifestVersion`.
 *   3. Stale-value cross-check — for every `changed` manifest entry,
 *      the current target value is NOT equal to `englishValueBefore`
 *      (the pre-V2 English). That would mean the translator is still
 *      translating the old copy — unambiguous stale.
 *
 * Prints a combined `✅ PASS` / `⚠ ISSUES` verdict and exits non-zero
 * if any check fails.
 *
 * Usage:
 *   node scripts/i18n-audit/verify-language.js af
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_ROOT = path.join(REPO_ROOT, "i18n");
const MANIFEST_PATH = path.join(__dirname, "v2-manifest.json");
const STATUS_DIR = path.join(__dirname, "v2-refresh-status");

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function resolveLocale(lang) {
	const candidate = path.join(I18N_ROOT, lang);
	if (!fs.existsSync(candidate) || !fs.statSync(candidate).isDirectory()) {
		console.error(`Unknown locale "${lang}".`);
		process.exit(2);
	}
}

function loadTargetFile(lang, namespace) {
	const parts = namespace.split("/");
	const filename = `${parts[parts.length - 1]}_${lang}.json`;
	const dir =
		parts.length === 1
			? path.join(I18N_ROOT, lang)
			: path.join(I18N_ROOT, lang, ...parts.slice(0, -1));
	const full = path.join(dir, filename);
	if (!fs.existsSync(full)) return null;
	try {
		return readJson(full);
	} catch {
		return null;
	}
}

function runLanguageDiff(lang) {
	const scriptPath = path.join(__dirname, "language-diff.js");
	const result = spawnSync("node", [scriptPath, lang, "--dry-run"], {
		cwd: REPO_ROOT,
		encoding: "utf8",
		stdio: ["ignore", "pipe", "pipe"],
	});
	const stdout = result.stdout || "";
	const stderr = result.stderr || "";
	const combined = stdout + "\n" + stderr;

	const reMissing = /Missing:\s+(\d+)/;
	const reUntranslated = /Untranslated:\s+(\d+)/;
	const reManifestChanged = /Manifest changed:\s+(\d+)/;
	const reManifestAdded = /Manifest added:\s+(\d+)/;

	const parseNum = (re) => {
		const m = combined.match(re);
		return m ? Number(m[1]) : 0;
	};

	return {
		missing: parseNum(reMissing),
		untranslated: parseNum(reUntranslated),
		manifestChanged: parseNum(reManifestChanged),
		manifestAdded: parseNum(reManifestAdded),
		stdout,
		stderr,
	};
}

function main() {
	const lang = process.argv[2];
	if (!lang) {
		console.error("Usage: node scripts/i18n-audit/verify-language.js <lang>");
		process.exit(2);
	}
	if (lang === "en") {
		console.error("Cannot verify English against itself.");
		process.exit(2);
	}
	resolveLocale(lang);

	console.log(`\nVerifying ${lang}...\n`);

	// ---- Check 1: V2 manifest marker ----
	if (!fs.existsSync(MANIFEST_PATH)) {
		console.error(`  ✗ Missing V2 manifest at ${path.relative(REPO_ROOT, MANIFEST_PATH)}`);
		console.error("    Build it with: node scripts/i18n-audit/build-v2-manifest.js");
		process.exit(2);
	}
	const manifest = readJson(MANIFEST_PATH);
	const markerPath = path.join(STATUS_DIR, `${lang}.json`);
	const marker = fs.existsSync(markerPath) ? readJson(markerPath) : null;

	const markerCurrent =
		marker && marker.manifestVersion === manifest.manifestVersion;

	console.log("  ──── Check 1: V2 manifest marker ────");
	if (markerCurrent) {
		console.log(
			`  ✓ Marker at v2-refresh-status/${lang}.json matches current manifestVersion (applied ${marker.appliedAt}).`,
		);
	} else if (marker) {
		console.log(
			`  ✗ Marker is STALE — points at manifestVersion ${marker.manifestVersion.slice(0, 16)}... ` +
				`but current is ${manifest.manifestVersion.slice(0, 16)}...`,
		);
	} else {
		console.log(
			`  ✗ No marker at v2-refresh-status/${lang}.json — locale hasn't been refreshed against the current manifest.`,
		);
	}
	console.log("");

	// ---- Check 2: Locale-specific diff ----
	console.log("  ──── Check 2: Locale-specific coverage ────");
	const diff = runLanguageDiff(lang);
	console.log(
		`  diff: missing=${diff.missing}, untranslated=${diff.untranslated}, ` +
			`manifestChanged=${diff.manifestChanged}, manifestAdded=${diff.manifestAdded}`,
	);
	const localeOk = diff.missing === 0 && diff.untranslated === 0;
	const manifestDiffOk =
		diff.manifestChanged === 0 && diff.manifestAdded === 0;
	if (!localeOk || !manifestDiffOk) {
		console.log("");
		console.log("  Full diff output:");
		console.log(diff.stdout);
	} else {
		console.log(`  ✓ No locale-specific gaps, no outstanding manifest entries.`);
	}
	console.log("");

	// ---- Check 3: Stale-value cross-check ----
	console.log("  ──── Check 3: Stale pre-V2 English cross-check ────");
	const staleEntries = [];
	for (const entry of manifest.changed) {
		const targetData = loadTargetFile(lang, entry.namespace);
		if (!targetData || typeof targetData !== "object") continue;
		const currentValue = targetData[entry.key];
		if (typeof currentValue !== "string") continue;
		// If the target value is byte-identical to the pre-V2 English,
		// the translator is translating old copy. Unambiguously stale.
		if (currentValue === entry.englishValueBefore) {
			staleEntries.push({ ...entry, currentValue });
		}
	}
	if (staleEntries.length === 0) {
		console.log(`  ✓ No target values match pre-V2 English (${manifest.changed.length} changed entries scanned).`);
	} else {
		console.log(
			`  ✗ ${staleEntries.length} target value(s) still match pre-V2 English:`,
		);
		for (const e of staleEntries.slice(0, 10)) {
			const preview =
				e.englishValueBefore.length > 70
					? e.englishValueBefore.slice(0, 70) + "..."
					: e.englishValueBefore;
			console.log(`    - ${e.namespace} / ${e.key}: "${preview}"`);
		}
		if (staleEntries.length > 10) {
			console.log(`    (${staleEntries.length - 10} more)`);
		}
	}
	console.log("");

	// ---- Final verdict ----
	console.log("  ──── Summary ────");
	console.log(`  Marker:              ${markerCurrent ? "✅ PASS" : "⚠ ISSUES"}`);
	console.log(`  Locale-specific:     ${localeOk ? "✅ PASS" : "⚠ ISSUES"}`);
	console.log(`  Manifest coverage:   ${manifestDiffOk ? "✅ PASS" : "⚠ ISSUES"}`);
	console.log(
		`  Stale English:       ${staleEntries.length === 0 ? "✅ PASS" : "⚠ ISSUES"}`,
	);

	const ok = markerCurrent && localeOk && manifestDiffOk && staleEntries.length === 0;
	console.log("");
	if (ok) {
		console.log(`✅ ${lang} verification passed. Ready for build + PR.`);
		process.exit(0);
	} else {
		console.log(
			`⚠ ${lang} verification flagged issues. Review the output above, translate any flagged entries, and re-run:`,
		);
		console.log(`    node scripts/i18n-audit/apply-translations.js ${lang}`);
		console.log(`    node scripts/i18n-audit/verify-language.js ${lang}`);
		process.exit(1);
	}
}

main();
