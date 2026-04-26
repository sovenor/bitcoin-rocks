#!/usr/bin/env node
/**
 * Spanish manifest refresh — fill remaining untranslated entries.
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
	"es.json",
);

const T = {
	"bitcoin-vs-cbdc::bitcoin_vs_cbdcs": "Bitcoin vs. CBDC",
	"common::common_stickers_dimensions_bdhi":
		"21,59 cm x 4,6482 cm (8,5 in x 1,83 in)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20,995 cm x 6,35 cm (8,25 in x 2,5 in)",
	"common::common_stickers_dimensions_caution":
		"12,0142 cm x 7,9502 cm (4,73 in x 3,13 in)",
	"common::common_stickers_dimensions_cure_v2":
		"6,35 cm x 12,7 cm (2,5 in x 5 in)",
	"common::common_stickers_dimensions_danger":
		"11,4544 cm x 8,382 cm (4,51 in x 3,3 in)",
	"common::common_stickers_dimensions_fix":
		"11,3792 cm x 6,8072 cm (4,48 in x 2,68 in)",
	"common::common_stickers_dimensions_got_inflation":
		"7,9248 cm x 14,605 cm (3,12 in x 5,75 in)",
	"common::common_stickers_dimensions_study":
		"14,605 cm x 5,1308 cm (5,75 in x 2,02 in)",
	"common::common_stickers_dimensions_warning":
		"10,414 cm x 9,2202 cm (4,1 in x 3,63 in)",
	"common::common_stickers_dimensions_what_if":
		"21,7932 cm x 7,62 cm (8,58 in x 3 in)",
	"common::common_stickers_material": "Material:",
	"common::common_stickers_type_die_cut": "pegatina troquelada",
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
	console.log(`fix-remaining (es): filled ${filled}`);
}

main();
