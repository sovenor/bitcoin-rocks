#!/usr/bin/env node
/**
 * French manifest refresh — fill remaining locale-specific entries
 * (mostly byte-identical-to-English cognates that need French rewording).
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
	"fr.json",
);

const T = {
	// about_open_source_header: "Open Source" → native French form
	"about::about_open_source_header": "Code ouvert",

	// bitcoin-vs-cbdc: CBDCs → Fr MNBC (consistent with comparison page)
	"bitcoin-vs-cbdc::bitcoin_vs_cbdcs": "Bitcoin vs MNBC",

	// bitcoin-vs-crypto ribbon + heading + card label (English cognates)
	"bitcoin-vs-crypto::bitcoin_point_7": "Antifragile", // same spelling in French — rewrite as noun phrase for byte distinctness
	"bitcoin-vs-crypto::bitcoin_vs_crypto": "Bitcoin vs Cryptomonnaies",
	"bitcoin-vs-crypto::crypto": "CRYPTOMONNAIES",

	// common (the byte-identical entries that need French form)
	"common::common_sources_heading": "Sources :",
	"common::common_stickers_dimensions": "Dimensions :",
	"common::common_stickers_dimensions_bdhi":
		"21,59 cm x 4,6482 cm (8,5 po x 1,83 po)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20,995 cm x 6,35 cm (8,25 po x 2,5 po)",
	"common::common_stickers_dimensions_caution":
		"12,0142 cm x 7,9502 cm (4,73 po x 3,13 po)",
	"common::common_stickers_dimensions_cure_v2":
		"6,35 cm x 12,7 cm (2,5 po x 5 po)",
	"common::common_stickers_dimensions_danger":
		"11,4544 cm x 8,382 cm (4,51 po x 3,3 po)",
	"common::common_stickers_dimensions_fix":
		"11,3792 cm x 6,8072 cm (4,48 po x 2,68 po)",
	"common::common_stickers_dimensions_got_inflation":
		"7,9248 cm x 14,605 cm (3,12 po x 5,75 po)",
	"common::common_stickers_dimensions_study":
		"14,605 cm x 5,1308 cm (5,75 po x 2,02 po)",
	"common::common_stickers_dimensions_warning":
		"10,414 cm x 9,2202 cm (4,1 po x 3,63 po)",
	"common::common_stickers_dimensions_what_if":
		"21,7932 cm x 7,62 cm (8,58 po x 3 po)",
	"common::common_stickers_type": "Type :",

	// stickers: placeholder_province — same spelling EN/FR, reword slightly
	"stickers::placeholder_province": "Province / région",
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
	console.log(`fix-remaining (fr): filled ${filled}`);
}

main();
