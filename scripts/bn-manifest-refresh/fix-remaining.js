#!/usr/bin/env node
/**
 * Bengali — fill remaining untranslated sticker dimension strings.
 * Replace English "cm" → "সেমি" and "in" → "ইঞ্চি".
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
	"bn.json",
);

const T = {
	"common::common_stickers_dimensions_bdhi":
		"২১.৫৯ সেমি x ৪.৬৪৮২ সেমি (৮.৫ ইঞ্চি x ১.৮৩ ইঞ্চি)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"২০.৯৯৫ সেমি x ৬.৩৫ সেমি (৮.২৫ ইঞ্চি x ২.৫ ইঞ্চি)",
	"common::common_stickers_dimensions_caution":
		"১২.০১৪২ সেমি x ৭.৯৫০২ সেমি (৪.৭৩ ইঞ্চি x ৩.১৩ ইঞ্চি)",
	"common::common_stickers_dimensions_cure_v2":
		"৬.৩৫ সেমি x ১২.৭ সেমি (২.৫ ইঞ্চি x ৫ ইঞ্চি)",
	"common::common_stickers_dimensions_danger":
		"১১.৪৫৪৪ সেমি x ৮.৩৮২ সেমি (৪.৫১ ইঞ্চি x ৩.৩ ইঞ্চি)",
	"common::common_stickers_dimensions_fix":
		"১১.৩৭৯২ সেমি x ৬.৮০৭২ সেমি (৪.৪৮ ইঞ্চি x ২.৬৮ ইঞ্চি)",
	"common::common_stickers_dimensions_got_inflation":
		"৭.৯২৪৮ সেমি x ১৪.৬০৫ সেমি (৩.১২ ইঞ্চি x ৫.৭৫ ইঞ্চি)",
	"common::common_stickers_dimensions_study":
		"১৪.৬০৫ সেমি x ৫.১৩০৮ সেমি (৫.৭৫ ইঞ্চি x ২.০২ ইঞ্চি)",
	"common::common_stickers_dimensions_warning":
		"১০.৪১৪ সেমি x ৯.২২০২ সেমি (৪.১ ইঞ্চি x ৩.৬৩ ইঞ্চি)",
	"common::common_stickers_dimensions_what_if":
		"২১.৭৯৩২ সেমি x ৭.৬২ সেমি (৮.৫৮ ইঞ্চি x ৩ ইঞ্চি)",
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
	console.log(`fix-remaining (bn): filled ${filled}`);
}

main();
