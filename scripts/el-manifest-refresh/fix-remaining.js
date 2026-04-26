#!/usr/bin/env node
/**
 * Greek manifest refresh — fill remaining untranslated entries.
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
	"el.json",
);

const T = {
	"bitcoin-vs-crypto::crypto": "ΚΡΥΠΤΟ",
	"common::common_stickers_dimensions_bdhi":
		"21,59 εκ. x 4,6482 εκ. (8,5 ίντσες x 1,83 ίντσες)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20,995 εκ. x 6,35 εκ. (8,25 ίντσες x 2,5 ίντσες)",
	"common::common_stickers_dimensions_caution":
		"12,0142 εκ. x 7,9502 εκ. (4,73 ίντσες x 3,13 ίντσες)",
	"common::common_stickers_dimensions_cure_v2":
		"6,35 εκ. x 12,7 εκ. (2,5 ίντσες x 5 ίντσες)",
	"common::common_stickers_dimensions_danger":
		"11,4544 εκ. x 8,382 εκ. (4,51 ίντσες x 3,3 ίντσες)",
	"common::common_stickers_dimensions_fix":
		"11,3792 εκ. x 6,8072 εκ. (4,48 ίντσες x 2,68 ίντσες)",
	"common::common_stickers_dimensions_got_inflation":
		"7,9248 εκ. x 14,605 εκ. (3,12 ίντσες x 5,75 ίντσες)",
	"common::common_stickers_dimensions_study":
		"14,605 εκ. x 5,1308 εκ. (5,75 ίντσες x 2,02 ίντσες)",
	"common::common_stickers_dimensions_warning":
		"10,414 εκ. x 9,2202 εκ. (4,1 ίντσες x 3,63 ίντσες)",
	"common::common_stickers_dimensions_what_if":
		"21,7932 εκ. x 7,62 εκ. (8,58 ίντσες x 3 ίντσες)",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") continue;
		const k = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, k)) {
			e.targetTranslation = T[k];
			filled++;
		}
	}
	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(`fix-remaining (el): filled ${filled}`);
}

main();
