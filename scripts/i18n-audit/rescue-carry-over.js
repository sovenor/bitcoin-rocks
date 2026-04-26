#!/usr/bin/env node
/**
 * rescue-carry-over.js <lang> [--trust-changed]
 *
 * One-off rescue helper used during the pre-manifest → post-manifest
 * migration. Fills `targetTranslation` in the current report with the
 * existing `currentValue` for entries where we trust the existing
 * translation to be correct.
 *
 * Modes (per entry):
 *   - reason: "manifest-added"
 *       If currentValue is non-null AND differs from englishValue,
 *       accept it. The translator previously produced a translation
 *       for this key; there's no reason to discard it. When
 *       currentValue is null or identical to English, leave
 *       targetTranslation null so a human translates.
 *
 *   - reason: "manifest-changed"
 *       Without `--trust-changed` (default): leave targetTranslation
 *       null. These entries need a fresh translation of the NEW
 *       `englishValue`. We can't verify whether `currentValue`
 *       translates the old or new English without backtranslating.
 *
 *       With `--trust-changed`: accept currentValue when it's
 *       non-null and differs from both `englishValueBefore` and
 *       `englishValue`. Use this only when you know the locale was
 *       already re-translated against the NEW English (e.g. the
 *       Afrikaans locale, which had `retranslate-english-changed.js`
 *       run against it explicitly).
 *
 *   - reason: "missing" / "untranslated": left untouched (those
 *     aren't what this script solves).
 *
 * Safe to re-run. Rewrites the report in place with tab indentation.
 *
 * Usage:
 *   node scripts/i18n-audit/rescue-carry-over.js af --trust-changed
 *   node scripts/i18n-audit/rescue-carry-over.js am
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const lang = process.argv[2];
const trustChanged = process.argv.includes("--trust-changed");

if (!lang) {
	console.error(
		"Usage: node scripts/i18n-audit/rescue-carry-over.js <lang> [--trust-changed]",
	);
	process.exit(2);
}

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const reportPath = path.join(__dirname, "reports", `${lang}.json`);

if (!fs.existsSync(reportPath)) {
	console.error(
		`Report not found: ${path.relative(REPO_ROOT, reportPath)}`,
	);
	console.error(`Run: node scripts/i18n-audit/language-diff.js ${lang}`);
	process.exit(2);
}

const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
const entries = report.entries || [];

let addedCarried = 0;
let addedSkipped = 0;
let changedCarried = 0;
let changedSkipped = 0;

for (const entry of entries) {
	if (typeof entry.targetTranslation === "string") continue;

	if (entry.reason === "manifest-added") {
		const cv = entry.currentValue;
		if (typeof cv === "string" && cv.length > 0 && cv !== entry.englishValue) {
			entry.targetTranslation = cv;
			addedCarried++;
		} else {
			addedSkipped++;
		}
	} else if (entry.reason === "manifest-changed") {
		const cv = entry.currentValue;
		if (
			trustChanged &&
			typeof cv === "string" &&
			cv.length > 0 &&
			cv !== entry.englishValue &&
			cv !== entry.englishValueBefore
		) {
			entry.targetTranslation = cv;
			changedCarried++;
		} else {
			changedSkipped++;
		}
	}
}

fs.writeFileSync(reportPath, JSON.stringify(report, null, "\t") + "\n");

console.log(`rescue-carry-over (${lang}):`);
console.log(`  manifest-added carried: ${addedCarried}`);
console.log(`  manifest-added skipped: ${addedSkipped}  (null or = English; needs translator)`);
if (trustChanged) {
	console.log(`  manifest-changed carried (--trust-changed): ${changedCarried}`);
	console.log(`  manifest-changed skipped: ${changedSkipped}`);
} else {
	console.log(
		`  manifest-changed left unresolved: ${changedSkipped}  (pass --trust-changed to carry over)`,
	);
}
