#!/usr/bin/env node
/**
 * Amharic V2 refresh — retranslate english-changed entries.
 *
 * Fills `targetTranslation` for every entry in
 * scripts/i18n-audit/reports/am.json whose `reason === "english-changed"`.
 *
 * The V2 redesign rewrote many English values in place — same keys,
 * new copy. Existing Amharic translations still reflect the old
 * English; this script provides fresh Amharic translations of the
 * NEW English value for every flagged entry.
 *
 * Safe to re-run: writes only `targetTranslation` (leaves other fields
 * alone), preserves tab indentation, and skips entries whose
 * targetTranslation is already a non-null string.
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
	"am.json",
);

// Amharic translations keyed by `<namespace>|<key>`.
// Every entry in the am.json report's english-changed category is
// present here (8 entries).
const TRANSLATIONS = {
	// 404
	"404|404_home": "ወደ መነሻ ተመለስ",
	"404|404_message":
		"ቢትኮይን ድንቅ ነው፣ ይህ የተሰበረ ገጽ ግን አይደለም።",

	// buy
	"buy|buy_bitcoin_guide": "ቢትኮይን እንዴት መግዛት እንደሚቻል",
	"buy|buy_step_1_header": "አገርዎን ይምረጡ",
	"buy|buy_step_2_header": "የክፍያ ዘዴዎን ይምረጡ",
	"buy|buy_step_3_header": "የግዢ አማራጮችዎ",
	"buy|buy_step_4_header": "ቢትኮይንዎን በደህንነት ያከማቹ",

	// sticker-files/index
	"sticker-files/index|sticker_files_header":
		"በእነዚህ የቢትኮይን ስቲከር ፋይሎች የራስዎን የቢትኮይን ስቲከሮች ያትሙ።",
};

function main() {
	const raw = fs.readFileSync(REPORT_PATH, "utf8");
	const report = JSON.parse(raw);

	let applied = 0;
	let skipped = 0;
	const missing = [];

	for (const entry of report.entries) {
		if (entry.reason !== "english-changed") continue;
		const lookupKey = `${entry.namespace}|${entry.key}`;
		if (typeof entry.targetTranslation === "string") {
			skipped++;
			continue;
		}
		if (!(lookupKey in TRANSLATIONS)) {
			missing.push(lookupKey);
			continue;
		}
		entry.targetTranslation = TRANSLATIONS[lookupKey];
		applied++;
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");

	console.log(
		`retranslate-english-changed: applied ${applied}, skipped ${skipped} already-resolved entries.`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing) console.log(`  - ${k}`);
		process.exitCode = 1;
	}
}

main();
