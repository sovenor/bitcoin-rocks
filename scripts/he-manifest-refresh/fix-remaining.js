#!/usr/bin/env node
/**
 * Hebrew manifest refresh — fix remaining sticker dimension entries.
 *
 * Hebrew uses Western digits + period decimal + Hebrew unit names:
 *   "ס\"מ" (cm — abbreviation of סנטימטר)
 *   "אינץ'" (inch)
 *
 * The "×" symbol (U+00D7) is preferred over "x" in Hebrew typography
 * for dimension strings.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"he.json",
);

const T = {
	"common::common_stickers_dimensions_bdhi":
		"21.59 ס\"מ × 4.6482 ס\"מ (8.5 אינץ' × 1.83 אינץ')",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 ס\"מ × 6.35 ס\"מ (8.25 אינץ' × 2.5 אינץ')",
	"common::common_stickers_dimensions_caution":
		"12.0142 ס\"מ × 7.9502 ס\"מ (4.73 אינץ' × 3.13 אינץ')",
	"common::common_stickers_dimensions_cure_v2":
		"6.35 ס\"מ × 12.7 ס\"מ (2.5 אינץ' × 5 אינץ')",
	"common::common_stickers_dimensions_danger":
		"11.4544 ס\"מ × 8.382 ס\"מ (4.51 אינץ' × 3.3 אינץ')",
	"common::common_stickers_dimensions_fix":
		"11.3792 ס\"מ × 6.8072 ס\"מ (4.48 אינץ' × 2.68 אינץ')",
	"common::common_stickers_dimensions_got_inflation":
		"7.9248 ס\"מ × 14.605 ס\"מ (3.12 אינץ' × 5.75 אינץ')",
	"common::common_stickers_dimensions_study":
		"14.605 ס\"מ × 5.1308 ס\"מ (5.75 אינץ' × 2.02 אינץ')",
	"common::common_stickers_dimensions_warning":
		"10.414 ס\"מ × 9.2202 ס\"מ (4.1 אינץ' × 3.63 אינץ')",
	"common::common_stickers_dimensions_what_if":
		"21.7932 ס\"מ × 7.62 ס\"מ (8.58 אינץ' × 3 אינץ')",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missing = [];

	for (const e of report.entries) {
		const lookupKey = `${e.namespace}::${e.key}`;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
			continue;
		}
		missing.push(lookupKey);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`fix-remaining (he): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length) {
		console.log(`\nStill missing (${missing.length}):`);
		for (const k of missing) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
