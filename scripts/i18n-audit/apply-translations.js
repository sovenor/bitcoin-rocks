#!/usr/bin/env node
/**
 * apply-translations.js <lang> [--report=<path>] [--partial] [--dry-run]
 *                              [--no-archive] [--skip-verify] [--verify-only]
 *
 * Reads a completed per-language translation report (by default
 * `scripts/i18n-audit/reports/<lang>.json`) and merges every filled-in
 * `targetTranslation` value back into the corresponding
 * `i18n/<lang>/<namespace>_<lang>.json` file. Bumps
 * `@metadata.last-updated` on every file that actually changed.
 *
 * Behavior rules:
 *   - For entries with `reason === "missing"`, the key is *inserted*
 *     into the target file at the same relative position as the
 *     English file's key order (best-effort: we append to the end of
 *     the target's existing key list, then re-order at the end of the
 *     run to match English's canonical order for any namespace we
 *     touched).
 *   - For entries with `reason === "untranslated"` or `"likely-stale"`,
 *     the existing value is overwritten.
 *   - Entries with `targetTranslation === null` are ignored (you can
 *     leave some entries unresolved and run the script again later).
 *   - Refuses to run if ANY entry has a null `targetTranslation`, unless
 *     `--partial` is passed. With `--partial`, ignored entries stay in
 *     the report for the next pass.
 *   - Never touches a file the report doesn't mention.
 *   - After a successful run, the report is archived to
 *     `scripts/i18n-audit/reports/applied/<lang>-<timestamp>.json` so
 *     the next session starts from a clean slate. Skip with
 *     `--no-archive`.
 *
 * Post-apply verification (runs by default, skip with `--skip-verify`):
 *   - Runs `scripts/audit-translation.js <lang>` to flag any keys that
 *     are still missing or byte-identical to English (after brand-name
 *     allow-list). Uses the older, more permissive allow-list.
 *   - Runs this dir's `language-diff.js <lang> --dry-run` to flag
 *     missing / untranslated / likely-stale entries. Uses the newer,
 *     tighter allow-list.
 *   - Prints a combined "✅ Verification passed" or "⚠ Verification
 *     flagged N issues" summary. Exits non-zero on failure so CI / the
 *     session can't claim the language is done when issues remain.
 *
 * `--verify-only` skips the apply step entirely and runs just the two
 * audits — useful for re-checking a previously-completed language or
 * spot-checking before kicking off a full PR.
 *
 * Safety:
 *   - `--dry-run` shows what would change without writing.
 *   - JSON parse/write uses tab indentation (`JSON.stringify(obj, null, "\t")`)
 *     + trailing newline, matching every other script in this dir.
 *   - Every write round-trips through `JSON.parse()` to verify the
 *     written file is still valid JSON.
 *
 * Usage:
 *   node scripts/i18n-audit/apply-translations.js af
 *   node scripts/i18n-audit/apply-translations.js de --partial
 *   node scripts/i18n-audit/apply-translations.js zh --dry-run
 *   node scripts/i18n-audit/apply-translations.js ar --report=scripts/i18n-audit/reports/ar.json
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

function parseArgs(argv) {
	const positional = [];
	const flags = {
		reportPath: null,
		partial: false,
		dryRun: false,
		noArchive: false,
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
		} else if (a === "--no-archive") {
			flags.noArchive = true;
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
			"  --no-archive     Skip archiving the report after a successful run.",
			"  --skip-verify    Skip the post-apply verification step (audit + diff).",
			"  --verify-only    Skip the apply step entirely; run audits only against the current i18n/<lang>/ state.",
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
	// Verify round-trip parses cleanly before writing.
	JSON.parse(serialized);
	fs.writeFileSync(p, serialized);
}

/**
 * Given a namespace like "business/wallets" and a language, return the
 * absolute path of the corresponding i18n JSON file.
 */
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
	const dir = parts.length === 1 ? I18N_EN_ROOT : path.join(I18N_EN_ROOT, ...parts.slice(0, -1));
	return path.join(dir, filename);
}

/**
 * Load an i18n file, tolerating missing files. If the file doesn't
 * exist, returns a skeleton with a fresh `@metadata` block so we can
 * seed it below.
 */
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

/**
 * Reorder `obj`'s keys to match English's key order (putting
 * `@metadata` first, then following the English file's declaration
 * order). Any keys present in `obj` but NOT in English are appended at
 * the end (shouldn't happen if Step 4 propagation is current, but we
 * handle it defensively).
 */
function reorderToMatchEnglish(obj, namespace) {
	const enPath = englishPathFor(namespace);
	let enKeys;
	try {
		const enParsed = readJson(enPath);
		enKeys = Object.keys(enParsed).filter((k) => k !== "@metadata");
	} catch {
		return obj; // can't reorder without an English counterpart
	}

	const out = {};
	if ("@metadata" in obj) out["@metadata"] = obj["@metadata"];
	for (const k of enKeys) {
		if (k in obj) out[k] = obj[k];
	}
	// Defensive: append any stragglers.
	for (const [k, v] of Object.entries(obj)) {
		if (k === "@metadata") continue;
		if (!(k in out)) out[k] = v;
	}
	return out;
}

// ===== Post-apply verification =====

/**
 * Run `node scripts/audit-translation.js <lang>` synchronously,
 * capture stdout, and parse the SUMMARY block for the three counts we
 * care about. Returns `{ ok, missingFiles, missingKeys, identical, stdout }`.
 *
 * The audit script exits 0 even when it finds issues (it's
 * informational, not gating), so we parse stdout to decide whether
 * verification passed.
 */
function runAuditTranslation(lang) {
	const scriptPath = path.join(REPO_ROOT, "scripts", "audit-translation.js");
	const result = spawnSync("node", [scriptPath, lang], {
		cwd: REPO_ROOT,
		encoding: "utf8",
		stdio: ["ignore", "pipe", "pipe"],
	});

	const stdout = result.stdout || "";
	const stderr = result.stderr || "";
	const combined = stdout + "\n" + stderr;

	// Parse "Missing files: N", "Missing keys: N", "Identical to English: N",
	// "English changed: N" from the SUMMARY block. Spaces may vary.
	const reMissingFiles = /Missing files:\s+(\d+)/;
	const reMissingKeys = /Missing keys:\s+(\d+)/;
	const reIdentical = /Identical to English:\s+(\d+)/;
	const reEnglishChanged = /English changed:\s+(\d+)/;

	const missingFiles = Number((combined.match(reMissingFiles) || [])[1] ?? -1);
	const missingKeys = Number((combined.match(reMissingKeys) || [])[1] ?? -1);
	const identical = Number((combined.match(reIdentical) || [])[1] ?? -1);
	// englishChanged is emitted only when the audit found a pre-V2 snapshot.
	// Default to 0 so tools that predate the snapshot still parse cleanly.
	const englishChanged = Number(
		(combined.match(reEnglishChanged) || [])[1] ?? 0,
	);

	// If any regex failed we couldn't parse the output — treat as error
	// so the caller at least surfaces the full stdout.
	const parsedOk =
		Number.isFinite(missingFiles) &&
		missingFiles >= 0 &&
		Number.isFinite(missingKeys) &&
		missingKeys >= 0 &&
		Number.isFinite(identical) &&
		identical >= 0;

	return {
		ok:
			parsedOk &&
			missingFiles === 0 &&
			missingKeys === 0 &&
			identical === 0 &&
			(!Number.isFinite(englishChanged) || englishChanged === 0),
		parsedOk,
		missingFiles,
		missingKeys,
		identical,
		englishChanged,
		stdout,
		stderr,
		exitCode: result.status ?? 0,
	};
}

/**
 * Run `node scripts/i18n-audit/language-diff.js <lang> --dry-run`
 * synchronously, capture stdout, and parse the three reason counts.
 * Returns `{ ok, missing, untranslated, likelyStale, stdout }`.
 *
 * The diff script always exits 0. We return `ok: true` only if all
 * three counts are zero.
 */
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
	const reEnglishChanged = /English changed:\s*(\d+)/;
	const reLikelyStale = /Likely stale:\s+(\d+)/;

	const missing = Number((combined.match(reMissing) || [])[1] ?? -1);
	const untranslated = Number((combined.match(reUntranslated) || [])[1] ?? -1);
	const englishChanged = Number(
		(combined.match(reEnglishChanged) || [])[1] ?? 0,
	); // defaults 0 when the pre-V2 snapshot is unavailable (line is suppressed)
	const likelyStale = Number((combined.match(reLikelyStale) || [])[1] ?? 0); // defaults 0 when --no-flag-likely-stale was used

	const parsedOk =
		Number.isFinite(missing) &&
		missing >= 0 &&
		Number.isFinite(untranslated) &&
		untranslated >= 0;

	return {
		ok:
			parsedOk &&
			missing === 0 &&
			untranslated === 0 &&
			(!Number.isFinite(englishChanged) || englishChanged === 0) &&
			(!Number.isFinite(likelyStale) || likelyStale === 0),
		parsedOk,
		missing,
		untranslated,
		englishChanged,
		likelyStale,
		stdout,
		stderr,
		exitCode: result.status ?? 0,
	};
}

/**
 * Run both audits and print a combined summary. Returns `true` if
 * verification passed, `false` otherwise.
 */
function runVerification(lang) {
	console.log("");
	console.log("───── Post-apply verification ─────");
	console.log("");

	// 1. audit-translation.js
	console.log(`→ node scripts/audit-translation.js ${lang}`);
	const audit = runAuditTranslation(lang);
	if (!audit.parsedOk) {
		console.error("  ⚠ Could not parse audit-translation.js output. Full stdout:");
		console.error(audit.stdout);
		if (audit.stderr) {
			console.error("  stderr:");
			console.error(audit.stderr);
		}
	} else {
		console.log(
			`  missingFiles=${audit.missingFiles}, missingKeys=${audit.missingKeys}, identical=${audit.identical}`,
		);
		if (!audit.ok) {
			// Re-print the full audit output so the flagged entries are
			// visible. The audit script's own "IDENTICAL TO ENGLISH"
			// section lists the specific keys.
			console.log("");
			console.log(audit.stdout);
		}
	}

	// 2. language-diff.js --dry-run
	console.log("");
	console.log(`→ node scripts/i18n-audit/language-diff.js ${lang} --dry-run`);
	const diff = runLanguageDiff(lang);
	if (!diff.parsedOk) {
		console.error("  ⚠ Could not parse language-diff.js output. Full stdout:");
		console.error(diff.stdout);
		if (diff.stderr) {
			console.error("  stderr:");
			console.error(diff.stderr);
		}
	} else {
		console.log(
			`  missing=${diff.missing}, untranslated=${diff.untranslated}, englishChanged=${diff.englishChanged}, likelyStale=${diff.likelyStale}`,
		);
		if (!diff.ok) {
			console.log("");
			console.log(diff.stdout);
		}
	}

	// 3. Combined verdict
	console.log("");
	console.log("───── Verification summary ─────");
	const auditStatus = audit.ok ? "✅ PASS" : "⚠ ISSUES";
	const diffStatus = diff.ok ? "✅ PASS" : "⚠ ISSUES";
	console.log(`  audit-translation.js: ${auditStatus}`);
	console.log(`  language-diff.js:     ${diffStatus}`);

	const overall = audit.ok && diff.ok;
	if (overall) {
		console.log("");
		console.log(`✅ Verification passed. ${lang} is ready for build + PR.`);
	} else {
		console.log("");
		console.log(
			`⚠ Verification flagged issues. Review the output above, translate any flagged entries, and re-run:`,
		);
		console.log(`    node scripts/i18n-audit/apply-translations.js ${lang} --verify-only`);
	}
	return overall;
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

	// --verify-only: skip the apply step entirely and just run the two
	// audits against whatever's currently on disk. Handy for re-checking
	// a completed language or spot-checking before opening a PR.
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

	// Group resolved entries by namespace so we only rewrite each file
	// once.
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
			console.error(`  Failed to load ${path.relative(REPO_ROOT, target)}: ${err.message}`);
			continue;
		}

		let changedInThisFile = 0;
		for (const e of nsEntries) {
			obj[e.key] = e.targetTranslation;
			changedInThisFile++;
			keysWritten++;
		}

		if (changedInThisFile === 0) continue;

		// Bump @metadata.last-updated. Preserve authors/locale if
		// present; seed them if we created the file.
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

		// Reorder to match English's canonical key order.
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

	// Archive the report.
	if (!flags.noArchive) {
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
			},
		};
		if (flags.partial && unresolved.length > 0) {
			// For partial runs, preserve the unresolved entries in the
			// live report so the next run can pick them up.
			const leftoverReport = {
				...report,
				generatedAt: report.generatedAt, // keep original date
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
	}

	// Post-apply verification. Skippable via --skip-verify for quick
	// iterative partial runs; always on by default so the default
	// "apply → verify" flow runs end-to-end without a separate command.
	if (flags.skipVerify) {
		console.log("");
		console.log(`(--skip-verify) Skipping post-apply audits. Recommend re-running later:`);
		console.log(`  node scripts/i18n-audit/apply-translations.js ${lang} --verify-only`);
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
