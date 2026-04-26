#!/usr/bin/env node
/**
 * Danish manifest refresh — fill in the last 5 locale-specific entries.
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
	"da.json",
);

const T = {
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"Engelske „Bitcoin modtages her“-klistermærkefiler",
	"bitcoin-vs-visa::bitcoin_point_3": "Gennemsigtigt system",
	"buy::buy_platform_feature_dca":
		"Dollar-cost averaging (gradvist køb)",
	"common::common_sticker_files_mission_3": "inflation",
	"common::common_stickers_type": "Type:",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(`fix-remaining (da): filled ${filled}, already-done ${skipped}`);
}

main();
