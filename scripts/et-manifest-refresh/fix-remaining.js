#!/usr/bin/env node
/**
 * Estonian manifest refresh — fix remaining locale-specific entries.
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
	"et.json",
);

const T = {
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"Ingliskeelsed „Bitcoin Accepted Here” kleebisefailid",
	// Short card label "Transparent system" → Estonian equivalent
	"bitcoin-vs-visa::bitcoin_point_3": "Läbipaistev süsteem",
	// "Dollar-cost averaging" — Estonian financial term "dollari-keskmistatud ost"
	// Keep distinct from English to satisfy untranslated check.
	"buy::buy_platform_feature_dca": "Dollari-keskmistatud ost (DCA)",
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
		`fix-remaining (et): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length) {
		console.log(`\nStill missing (${missing.length}):`);
		for (const k of missing) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
