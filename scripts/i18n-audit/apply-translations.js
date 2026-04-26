#!/usr/bin/env node
/**
 * apply-translations.js <lang> [--report=<path>] [--partial] [--dry-run]
 *                              [--skip-verify] [--verify-only]
 *
 * Reads a completed per-language translation report (by default
 * `scripts/i18n-audit/reports/<lang>.json`) and merges every filled-in
 * `targetTranslation` value back into the corresponding
 * `i18n/<lang>/<namespace>_<lang>.json` file. Bumps
 * `@metadata.last-updated` on every file that actually changed.
 *
 * Behavior rules:
 *   - For entries with `reason === "missing"` or `"manifest-added"`,
 *     the key is inserted into the target file (reordered at the end
 *     of the run to match English's canonical key order).
 *   - For entries with `reason === "untranslated"` or
 *     `"manifest-changed"`, the existing value is overwritten.
 *   - Entries with `targetTranslation === null` are ignored (you can
 *     leave some entries unresolved and run the script again later).
 *   - Refuses to run if ANY entry has a null `targetTranslation`,
 *     unless `--partial` is passed.
 *   - Never touches a file the report doesn't mention.
 *   - After a successful full-apply where EVERY manifest entry in the
 *     report was resolved, writes
 *     `scripts/i18n-audit/v2-refresh-status/<lang>.json` pinning the
 *     manifestVersion. This "marker" tells `language-diff.js` that
 *     the manifest is done for this locale.
 *   - After a successful run, the report is archived to
 *     `scripts/i18n-audit/reports/applied/<lang>-<timestamp>.json`.
 *
 * Post-apply verification (runs by default, skip with `--skip-verify`):
 *   - Runs `scripts/i18n-audit/verify-language.js <lang>` — the single
 *     unified check covering: marker version, locale-specific
 *     missing/untranslated, outstanding manifest entries, and stale
 *     pre-V2 English values.
 *
 * `--verify-only` skips the apply step entirely and runs just the
 * audit.
 *
 * Usage:
 *   node scripts/i18n-audit/apply-translations.js af
 *   node scripts/i18n-audit/apply-translations.js de --partial
 *   node scripts/i18n-audit/apply-translations.js af --verify-only
 *   node scripts/i18n-audit/apply-translations.js af --skip-verify
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_ROOT = path.join(REPO_ROOT, "i18n");
const I18N_EN_ROOT = path.join(I18N_ROOT, "en");
const REPORTS_DIR = path.join(__dirname, "reports");
const REPORTS_APPLIED_DIR = path.join(REPORTS_DIR, "applied");
const MANIFEST_PATH = path.join(__dirname, "v2-manifest.json");
const STATUS_DIR = path.join(__dirname, "v2-refresh-status");
const MANIFEST_REASONS = new Set(["manifest-changed", "manifest-added"]);

function parseArgs(argv) {
	const positional = [];
	const flags = {
		reportPath: null,
		partial: false,
		dryRun: false,
		skipVerify: false,
		verifyOnly: false,
	};
	for (const a of argv.slice(2)) {
		if (a.startsWith("--report=")) {
			flags.reportPath = a.slice("--report=".length);
		} else if (a === "--partial") {
			flags.partial = true;
		} else if (a === "--dry-run" || a === "-n") {
			flags.dryRun = true;
		} else if (a === "--skip-verify") {
			flags.skipVerify = true;
		} else if (a === "--verify-only") {
			flags.verifyOnly = true;
		} else if (a === "--help" || a === "-h") {
			flags.help = true;
		} else if (a.startsWith("-")) {
			console.error(`Unknown flag: ${a}`);
			process.exit(2);
		} else {
			positional.push(a);
		}
	}
	return { positional, flags };
}

function printHelpAndExit() {
	console.log(
		[
			"Usage: node scripts/i18n-audit/apply-translations.js <lang> [options]",
			"",
			"Options:",
			"  --report=<path>  Path to the translated report. Default: scripts/i18n-audit/reports/<lang>.json",
			"  --partial        Allow the run to proceed with some entries still un-translated.",
			"  --dry-run        Show what would change without writing.",
			"  --skip-verify    Skip the post-apply verification step.",
			"  --verify-only    Skip the apply step entirely; just run verify-language.js.",
			"  -h, --help       Show this help.",
		].join("\n"),
	);
	process.exit(0);
}

function todayIso() {
	const d = new Date();
	const y = d.getUTCFullYear();
	const m = String(d.getUTCMonth() + 1).padStart(2, "0");
	const day = String(d.getUTCDate()).padStart(2, "0");
	return `${y}-${m}-${day}`;
}

function nowFilenameTimestamp() {
	const d = new Date();
	const y = d.getUTCFullYear();
	const m = String(d.getUTCMonth() + 1).padStart(2, "0");
	const day = String(d.getUTCDate()).padStart(2, "0");
	const hh = String(d.getUTCHours()).padStart(2, "0");
	const mm = String(d.getUTCMinutes()).padStart(2, "0");
	const ss = String(d.getUTCSeconds()).padStart(2, "0");
	return `${y}${m}${day}-${hh}${mm}${ss}`;
}

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	const serialized = JSON.stringify(obj, null, "\t") + "\n";
	JSON.parse(serialized); // round-trip verify
	fs.writeFileSync(p, serialized);
}

function jsonPathFor(namespace, lang) {
	const root = path.join(I18N_ROOT, lang);
	const parts = namespace.split("/");
	const filename = `${parts[parts.length - 1]}_${lang}.json`;
	const dir = parts.length === 1 ? root : path.join(root, ...parts.slice(0, -1));
	return path.join(dir, filename);
}

function englishPathFor(namespace) {
	const parts = namespace.split("/");
	const filename = `${parts[parts.length - 1]}_en.json`;
	const dir =
		parts.length === 1 ? I18N_EN_ROOT : path.join(I18N_EN_ROOT, ...parts.slice(0, -1));
	return path.join(dir, filename);
}

function loadOrInitFile(absPath, lang) {
	if (fs.existsSync(absPath)) {
		const parsed = readJson(absPath);
		if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
			throw new Error(`Existing file is not a JSON object: ${absPath}`);
		}
		return { parsed, existed: true };
	}
	const skeleton = {
		"@metadata": {
			authors: ["Satoshi"],
			"last-updated": todayIso(),
			locale: lang,
		},
	};
	return { parsed: skeleton, existed: false };
}

function reorderToMatchEnglish(obj, namespace) {
	const enPath = englishPathFor(namespace);
	let enKeys;
	try {
		const enParsed = readJson(enPath);
		enKeys = Object.keys(enParsed).filter((k) => k !== "@metadata");
	} catch {
		return obj;
	}
	const out = {};
	if ("@metadata" in obj) out["@metadata"] = obj["@metadata"];
	for (const k of enKeys) {
		if (k in obj) out[k] = obj[k];
	}
	for (const [k, v] of Object.entries(obj)) {
		if (k === "@metadata") continue;
		if (!(k in out)) out[k] = v;
	}
	return out;
}

/**
 * Run verify-language.js synchronously. Forwards stdio so the full
 * check output is visible to the user. Returns true on exit code 0.
 */
function runVerification(lang) {
	console.log("");
	console.log("───── Post-apply verification ─────");
	const scriptPath = path.join(__dirname, "verify-language.js");
	const result = spawnSync("node", [scriptPath, lang], {
		cwd: REPO_ROOT,
		stdio: "inherit",
	});
	return (result.status ?? 1) === 0;
}

/**
 * Write the per-language marker pinning the current manifestVersion.
 * Skips silently if the manifest can't be loaded.
 */
function writeMarker(lang) {
	if (!fs.existsSync(MANIFEST_PATH)) {
		console.warn(
			`  ⚠ Manifest missing at ${path.relative(REPO_ROOT, MANIFEST_PATH)}; skipping marker write.`,
		);
		return null;
	}
	const manifest = readJson(MANIFEST_PATH);
	if (!fs.existsSync(STATUS_DIR)) fs.mkdirSync(STATUS_DIR, { recursive: true });
	const markerPath = path.join(STATUS_DIR, `${lang}.json`);
	const marker = {
		manifestVersion: manifest.manifestVersion,
		appliedAt: new Date().toISOString(),
		totals: manifest.totals,
	};
	writeJson(markerPath, marker);
	return { markerPath, manifestVersion: manifest.manifestVersion };
}

function main() {
	const { positional, flags } = parseArgs(process.argv);
	if (flags.help || positional.length === 0) {
		printHelpAndExit();
	}

	const lang = positional[0];
	if (lang === "en") {
		console.error("Refusing to apply translations to English.");
		process.exit(2);
	}

	if (flags.skipVerify && flags.verifyOnly) {
		console.error("Cannot combine --skip-verify and --verify-only.");
		process.exit(2);
	}

	const localeRoot = path.join(I18N_ROOT, lang);
	if (!fs.existsSync(localeRoot) || !fs.statSync(localeRoot).isDirectory()) {
		console.error(`Locale directory i18n/${lang}/ does not exist.`);
		console.error(
			"If this is a brand-new language, follow .clinerules/workflows/translate-new-language.md first.",
		);
		process.exit(2);
	}

	// --verify-only: skip the apply step entirely.
	if (flags.verifyOnly) {
		console.log(`Verify-only mode for "${lang}" — skipping apply step.`);
		const verified = runVerification(lang);
		process.exit(verified ? 0 : 1);
	}

	const reportPath = flags.reportPath
		? path.resolve(REPO_ROOT, flags.reportPath)
		: path.join(REPORTS_DIR, `${lang}.json`);
	if (!fs.existsSync(reportPath)) {
		console.error(`Report not found: ${path.relative(REPO_ROOT, reportPath)}`);
		console.error(
			`Run \`node scripts/i18n-audit/language-diff.js ${lang}\` first to generate one.`,
		);
		process.exit(2);
	}

	const report = readJson(reportPath);
	if (report.lang !== lang) {
		console.error(
			`Report is for "${report.lang}", but you asked to apply it to "${lang}". Aborting.`,
		);
		process.exit(2);
	}

	const entries = report.entries || [];
	const resolved = entries.filter((e) => typeof e.targetTranslation === "string");
	const unresolved = entries.filter(
		(e) => !(typeof e.targetTranslation === "string"),
	);

	console.log(
		`Applying translations for "${lang}" from ${path.relative(REPO_ROOT, reportPath)}`,
	);
	console.log(
		`  ${entries.length} total entries, ${resolved.length} resolved, ${unresolved.length} unresolved.`,
	);

	if (unresolved.length > 0 && !flags.partial) {
		console.error("");
		console.error(
			`Refusing to run: ${unresolved.length} entries still have \`targetTranslation: null\`.`,
		);
		console.error(
			"  Either fill in all translations, or re-run with --partial to apply what's done so far.",
		);
		console.error("");
		console.error("Sample unresolved entries:");
		unresolved.slice(0, 5).forEach((e) =>
			console.error(
				`  ${e.namespace} / ${e.key} (${e.reason}) — "${String(
					e.englishValue,
				).slice(0, 60)}"`,
			),
		);
		process.exit(1);
	}

	if (resolved.length === 0) {
		console.log("Nothing to apply. Exiting.");
		return;
	}

	// Group resolved entries by namespace.
	const byNs = new Map();
	for (const e of resolved) {
		if (!byNs.has(e.namespace)) byNs.set(e.namespace, []);
		byNs.get(e.namespace).push(e);
	}

	let filesTouched = 0;
	let keysWritten = 0;
	let filesCreated = 0;

	for (const [ns, nsEntries] of byNs) {
		const target = jsonPathFor(ns, lang);
		let obj;
		let existed;
		try {
			({ parsed: obj, existed } = loadOrInitFile(target, lang));
		} catch (err) {
			console.error(
				`  Failed to load ${path.relative(REPO_ROOT, target)}: ${err.message}`,
			);
			continue;
		}

		let changedInThisFile = 0;
		for (const e of nsEntries) {
			obj[e.key] = e.targetTranslation;
			changedInThisFile++;
			keysWritten++;
		}

		if (changedInThisFile === 0) continue;

		const existingMeta =
			obj["@metadata"] && typeof obj["@metadata"] === "object"
				? obj["@metadata"]
				: {};
		obj["@metadata"] = {
			authors: Array.isArray(existingMeta.authors)
				? existingMeta.authors
				: ["Satoshi"],
			"last-updated": todayIso(),
			locale:
				typeof existingMeta.locale === "string" ? existingMeta.locale : lang,
		};

		obj = reorderToMatchEnglish(obj, ns);

		if (flags.dryRun) {
			console.log(
				`  (dry-run) ${existed ? "Update" : "CREATE"} ${path.relative(REPO_ROOT, target)} (${changedInThisFile} keys)`,
			);
		} else {
			if (!existed) {
				const dir = path.dirname(target);
				fs.mkdirSync(dir, { recursive: true });
				filesCreated++;
			}
			writeJson(target, obj);
			console.log(
				`  ${existed ? "Updated" : "Created"} ${path.relative(REPO_ROOT, target)} (${changedInThisFile} keys)`,
			);
		}
		filesTouched++;
	}

	console.log("");
	console.log(
		flags.dryRun
			? `(dry-run) Would touch ${filesTouched} file(s), write ${keysWritten} key(s)${filesCreated > 0 ? `, create ${filesCreated} new file(s)` : ""}.`
			: `Touched ${filesTouched} file(s), wrote ${keysWritten} key(s)${filesCreated > 0 ? `, created ${filesCreated} new file(s)` : ""}.`,
	);

	if (flags.dryRun) return;

	// --- Marker write: only if all manifest entries in the report were resolved. ---
	const manifestEntriesInReport = entries.filter((e) =>
		MANIFEST_REASONS.has(e.reason),
	);
	const manifestUnresolved = manifestEntriesInReport.filter(
		(e) => !(typeof e.targetTranslation === "string"),
	);
	let markerInfo = null;
	if (
		manifestEntriesInReport.length > 0 &&
		manifestUnresolved.length === 0
	) {
		markerInfo = writeMarker(lang);
		if (markerInfo) {
			console.log(
				`Marker updated: ${path.relative(REPO_ROOT, markerInfo.markerPath)} → ${markerInfo.manifestVersion.slice(0, 16)}...`,
			);
		}
	} else if (manifestEntriesInReport.length > 0) {
		console.log(
			`Partial manifest coverage (${manifestUnresolved.length}/${manifestEntriesInReport.length} still null) — marker NOT written. Re-run after filling remaining entries.`,
		);
	}

	// --- Archive report ---
	if (!fs.existsSync(REPORTS_APPLIED_DIR)) {
		fs.mkdirSync(REPORTS_APPLIED_DIR, { recursive: true });
	}
	const applied = {
		...report,
		appliedAt: new Date().toISOString(),
		appliedStats: {
			resolved: resolved.length,
			unresolved: unresolved.length,
			filesTouched,
			keysWritten,
			filesCreated,
			markerWritten: Boolean(markerInfo),
		},
	};
	if (flags.partial && unresolved.length > 0) {
		// For partial runs, preserve the unresolved entries in the live
		// report so the next run can pick them up.
		const leftoverReport = {
			...report,
			generatedAt: report.generatedAt,
			entries: unresolved,
		};
		writeJson(reportPath, leftoverReport);
		console.log(
			`Partial run: ${unresolved.length} unresolved entries retained in ${path.relative(REPO_ROOT, reportPath)}.`,
		);
	} else {
		// Full run: remove the live report, archive a copy.
		fs.unlinkSync(reportPath);
	}
	const archivePath = path.join(
		REPORTS_APPLIED_DIR,
		`${lang}-${nowFilenameTimestamp()}.json`,
	);
	writeJson(archivePath, applied);
	console.log(`Archived to ${path.relative(REPO_ROOT, archivePath)}.`);

	// --- Verification ---
	if (flags.skipVerify) {
		console.log("");
		console.log(
			`(--skip-verify) Skipping post-apply audits. Recommend re-running later:`,
		);
		console.log(
			`  node scripts/i18n-audit/apply-translations.js ${lang} --verify-only`,
		);
	} else {
		const verified = runVerification(lang);
		if (!verified) process.exit(1);
	}

	console.log("");
	console.log("Next steps:");
	console.log("  1. npm run build   # confirm clean render across all 55 locales × 81 pages");
	console.log(`  2. Tick ${lang} off in V2-REDESIGN-CHECKLIST.md Step 5 and update memory-bank/.`);
}

main();
