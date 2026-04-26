#!/usr/bin/env node
/**
 * step4-propagate-deletions.js — Propagate English deletions to all 54
 * non-English locales.
 *
 * Step 4 of the i18n cleanup workflow. After Step 2 stripped 423 dead
 * keys from the English JSON files, the other 54 locales still carry
 * those same orphan keys (plus any other drift accumulated over time).
 * This script brings every non-English locale back to parity with
 * English by:
 *
 *   1. Walking every `i18n/<lang>/**\/*.json` file for every non-English
 *      locale under `i18n/` (i.e. every top-level dir except `en`).
 *   2. Loading the corresponding English file (same relative path, with
 *      the `_<lang>.json` suffix swapped for `_en.json`).
 *   3. Filtering the non-English file down to the key set present in
 *      English — any key NOT in English is deleted.
 *   4. Re-serializing the result with `JSON.stringify(obj, null, '\t') + '\n'`,
 *      which naturally collapses any stray blank lines (Step 3 formatter
 *      behavior) and preserves key order.
 *   5. Only bumping `@metadata.last-updated` when the content actually
 *      changed (so files that were already in sync with English stay on
 *      their historical date for translator bookkeeping).
 *
 * Files that only exist in the non-English locale (no English
 * counterpart) are left untouched with a warning — these are usually
 * translator artifacts or work-in-progress files.
 *
 * Usage:
 *   node scripts/i18n-audit/step4-propagate-deletions.js
 *   node scripts/i18n-audit/step4-propagate-deletions.js --dry-run
 *   node scripts/i18n-audit/step4-propagate-deletions.js --only=de,fr
 *
 * `--only=<csv>` scopes the run to a comma-separated list of locale
 * codes (handy for spot-checking one language before the big run).
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_ROOT = path.join(REPO_ROOT, "i18n");
const I18N_EN_ROOT = path.join(I18N_ROOT, "en");

const DRY_RUN = process.argv.includes("--dry-run") || process.argv.includes("-n");
const ONLY_ARG = process.argv.find((a) => a.startsWith("--only="));
const ONLY_LOCALES = ONLY_ARG
	? new Set(
			ONLY_ARG.slice("--only=".length)
				.split(",")
				.map((s) => s.trim())
				.filter(Boolean),
		)
	: null;

function todayIso() {
	const d = new Date();
	const y = d.getUTCFullYear();
	const m = String(d.getUTCMonth() + 1).padStart(2, "0");
	const day = String(d.getUTCDate()).padStart(2, "0");
	return `${y}-${m}-${day}`;
}

/** Recursively walk `dir`, returning every `.json` file path. */
function walkJson(dir) {
	const out = [];
	const stack = [dir];
	while (stack.length > 0) {
		const current = stack.pop();
		let entries;
		try {
			entries = fs.readdirSync(current, { withFileTypes: true });
		} catch {
			continue;
		}
		for (const entry of entries) {
			if (entry.name.startsWith(".")) continue;
			if (entry.name === "node_modules") continue;
			const full = path.join(current, entry.name);
			if (entry.isDirectory()) {
				stack.push(full);
			} else if (entry.isFile() && entry.name.endsWith(".json")) {
				out.push(full);
			}
		}
	}
	return out;
}

/** List every non-English locale dir under `i18n/`. */
function listNonEnglishLocales() {
	const entries = fs.readdirSync(I18N_ROOT, { withFileTypes: true });
	const locales = [];
	for (const e of entries) {
		if (!e.isDirectory()) continue;
		if (e.name.startsWith(".")) continue;
		if (e.name === "en") continue;
		locales.push(e.name);
	}
	locales.sort();
	return locales;
}

/**
 * For a non-English file path like /repo/i18n/de/common_de.json, return
 * the matching English path /repo/i18n/en/common_en.json. Works for
 * nested namespaces too (e.g. business/wallets_de.json).
 */
function englishCounterpartFor(nonEnPath, lang) {
	const rel = path.relative(path.join(I18N_ROOT, lang), nonEnPath);
	const suffix = `_${lang}.json`;
	if (!rel.endsWith(suffix)) return null;
	const withoutLangSuffix = rel.slice(0, -suffix.length);
	return path.join(I18N_EN_ROOT, `${withoutLangSuffix}_en.json`);
}

function readJson(p) {
	const raw = fs.readFileSync(p, "utf8");
	return JSON.parse(raw);
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n");
}

/**
 * Build the set of keys present in the English file (excluding the
 * `@metadata` block). Returns `null` if the English file can't be
 * read/parsed.
 */
function englishKeySet(enPath) {
	let parsed;
	try {
		parsed = readJson(enPath);
	} catch {
		return null;
	}
	if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
		return null;
	}
	const keys = new Set();
	for (const k of Object.keys(parsed)) {
		if (k === "@metadata") continue;
		keys.add(k);
	}
	return keys;
}

/**
 * Filter `nonEnObj` so it only contains keys present in `allowedKeys`
 * (plus `@metadata`). Preserves original key order. Returns
 * `{ filtered, removedKeys }`.
 */
function filterToAllowedKeys(nonEnObj, allowedKeys) {
	const out = {};
	const removedKeys = [];
	for (const [k, v] of Object.entries(nonEnObj)) {
		if (k === "@metadata") {
			out[k] = v;
			continue;
		}
		if (allowedKeys.has(k)) {
			out[k] = v;
		} else {
			removedKeys.push(k);
		}
	}
	return { filtered: out, removedKeys };
}

/**
 * Process one non-English file. Returns a result record:
 *   {
 *     relPath,
 *     status: "changed" | "identical" | "no-english-counterpart"
 *             | "parse-error" | "not-object",
 *     removed: number,     // keys deleted
 *     formattingOnly: bool // true iff only whitespace/formatting changed
 *   }
 */
function processFile(nonEnPath, lang) {
	const relPath = path.relative(REPO_ROOT, nonEnPath);
	const enPath = englishCounterpartFor(nonEnPath, lang);
	if (!enPath || !fs.existsSync(enPath)) {
		return { relPath, status: "no-english-counterpart", removed: 0, formattingOnly: false };
	}

	const allowed = englishKeySet(enPath);
	if (!allowed) {
		return { relPath, status: "parse-error", removed: 0, formattingOnly: false };
	}

	let raw;
	try {
		raw = fs.readFileSync(nonEnPath, "utf8");
	} catch {
		return { relPath, status: "parse-error", removed: 0, formattingOnly: false };
	}

	let parsed;
	try {
		parsed = JSON.parse(raw);
	} catch {
		return { relPath, status: "parse-error", removed: 0, formattingOnly: false };
	}

	if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
		return { relPath, status: "not-object", removed: 0, formattingOnly: false };
	}

	const { filtered, removedKeys } = filterToAllowedKeys(parsed, allowed);

	// If we removed any keys, bump @metadata.last-updated.
	if (removedKeys.length > 0) {
		if (filtered["@metadata"] && typeof filtered["@metadata"] === "object") {
			filtered["@metadata"] = { ...filtered["@metadata"], "last-updated": todayIso() };
		}
	}

	// Compare canonical output against raw. If identical → no write.
	// If we didn't remove any keys but the formatting is off (stray blank
	// lines), this is a formatting-only rewrite and we do NOT bump the
	// date (per Step 3's convention of dating only semantic changes; but
	// Step 3 DID bump the date on formatting rewrites. Mirror that here
	// so the behavior is consistent with the English normalizer.).
	const canonicalNoBump = JSON.stringify(parsed, null, "\t") + "\n";
	const canonicalFinal = JSON.stringify(filtered, null, "\t") + "\n";

	if (raw === canonicalFinal) {
		return { relPath, status: "identical", removed: 0, formattingOnly: false };
	}

	// If only formatting differs AND no keys were removed, we still bump
	// the date to match the Step 3 English normalizer's behavior (it also
	// bumped on formatting-only rewrites).
	const formattingOnly = removedKeys.length === 0;
	if (formattingOnly && parsed["@metadata"] && typeof parsed["@metadata"] === "object") {
		filtered["@metadata"] = { ...filtered["@metadata"], "last-updated": todayIso() };
	}
	const canonicalWithBumpedDate = JSON.stringify(filtered, null, "\t") + "\n";

	if (!DRY_RUN) {
		fs.writeFileSync(nonEnPath, canonicalWithBumpedDate);
	}

	return {
		relPath,
		status: "changed",
		removed: removedKeys.length,
		formattingOnly,
		removedKeys,
	};
}

function main() {
	const locales = listNonEnglishLocales().filter((l) =>
		ONLY_LOCALES ? ONLY_LOCALES.has(l) : true,
	);

	console.log(
		DRY_RUN
			? `(dry-run) Would propagate English deletions + normalize formatting across ${locales.length} non-English locales.`
			: `Propagating English deletions + normalizing formatting across ${locales.length} non-English locales.`,
	);
	if (ONLY_LOCALES) {
		console.log(`  Scoped to: ${[...ONLY_LOCALES].sort().join(", ")}`);
	}
	console.log("");

	let totalFiles = 0;
	let totalChanged = 0;
	let totalIdentical = 0;
	let totalFormattingOnly = 0;
	let totalKeysRemoved = 0;
	let totalMissingCounterpart = 0;
	let totalParseErrors = 0;

	const perLocaleSummary = [];

	for (const lang of locales) {
		const langRoot = path.join(I18N_ROOT, lang);
		const files = walkJson(langRoot);
		let changed = 0;
		let identical = 0;
		let formattingOnly = 0;
		let keysRemoved = 0;
		let missingCounterpart = 0;
		let parseErrors = 0;
		const perNamespaceRemovals = {};

		for (const f of files) {
			totalFiles++;
			const r = processFile(f, lang);
			switch (r.status) {
				case "changed":
					changed++;
					totalChanged++;
					keysRemoved += r.removed;
					totalKeysRemoved += r.removed;
					if (r.formattingOnly) {
						formattingOnly++;
						totalFormattingOnly++;
					}
					if (r.removed > 0) {
						const nsRel = path.relative(langRoot, f).replace(/_[a-z\-]+\.json$/i, "");
						perNamespaceRemovals[nsRel] = (perNamespaceRemovals[nsRel] || 0) + r.removed;
					}
					break;
				case "identical":
					identical++;
					totalIdentical++;
					break;
				case "no-english-counterpart":
					missingCounterpart++;
					totalMissingCounterpart++;
					break;
				case "parse-error":
				case "not-object":
					parseErrors++;
					totalParseErrors++;
					break;
			}
		}

		const summaryLine =
			`  ${lang.padEnd(4, " ")} ` +
			`files=${String(files.length).padStart(3)} ` +
			`changed=${String(changed).padStart(3)} ` +
			`(fmt-only=${String(formattingOnly).padStart(3)}) ` +
			`keys_removed=${String(keysRemoved).padStart(4)} ` +
			`identical=${String(identical).padStart(3)}` +
			(missingCounterpart > 0 ? ` noEn=${missingCounterpart}` : "") +
			(parseErrors > 0 ? ` errs=${parseErrors}` : "");
		console.log(summaryLine);

		perLocaleSummary.push({
			lang,
			files: files.length,
			changed,
			formattingOnly,
			keysRemoved,
			identical,
			missingCounterpart,
			parseErrors,
			perNamespaceRemovals,
		});
	}

	console.log("");
	console.log(
		DRY_RUN
			? `(dry-run) Would touch ${totalChanged} files across ${locales.length} locales, deleting ${totalKeysRemoved} orphan keys + normalizing ${totalFormattingOnly} formatting-only files.`
			: `Touched ${totalChanged} files across ${locales.length} locales, deleting ${totalKeysRemoved} orphan keys + normalizing ${totalFormattingOnly} formatting-only files.`,
	);
	console.log(
		`  Total files scanned: ${totalFiles}. Already canonical: ${totalIdentical}.`,
	);
	if (totalMissingCounterpart > 0) {
		console.log(
			`  ${totalMissingCounterpart} non-English file(s) had no English counterpart (left untouched).`,
		);
	}
	if (totalParseErrors > 0) {
		console.log(
			`  ${totalParseErrors} file(s) could not be parsed (left untouched).`,
		);
	}

	// Write a machine-readable report for the record.
	const report = {
		generatedAt: new Date().toISOString(),
		dryRun: DRY_RUN,
		scope: ONLY_LOCALES ? [...ONLY_LOCALES].sort() : "all-non-english",
		summary: {
			localesProcessed: locales.length,
			totalFilesScanned: totalFiles,
			totalFilesChanged: totalChanged,
			totalFormattingOnly: totalFormattingOnly,
			totalKeysRemoved: totalKeysRemoved,
			totalIdentical: totalIdentical,
			totalMissingCounterpart: totalMissingCounterpart,
			totalParseErrors: totalParseErrors,
		},
		perLocale: perLocaleSummary,
	};
	const reportPath = path.join(__dirname, "step4-propagate-report.json");
	fs.writeFileSync(reportPath, JSON.stringify(report, null, "\t") + "\n");
	console.log("");
	console.log(`Report written to ${path.relative(REPO_ROOT, reportPath)}`);

	if (!DRY_RUN) {
		console.log("");
		console.log(
			"Next: `npm run build` to confirm 55 locales × 81 pages still render cleanly.",
		);
	}
}

main();
