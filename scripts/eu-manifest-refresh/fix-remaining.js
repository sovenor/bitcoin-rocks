#!/usr/bin/env node
/**
 * Basque (Euskara) manifest refresh — fix remaining locale-specific entries.
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
	"eu.json",
);

const T = {
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"Ingelesezko «Bitcoin Accepted Here» pegatina-fitxategiak",
	// Short card label "Transparent system" → Basque equivalent
	"bitcoin-vs-visa::bitcoin_point_3": "Sistema gardena",
	// "Dollar-cost averaging" — Basque financial term
	"buy::buy_platform_feature_dca":
		"Dolar-kostuaren bataz bestekoa (DCA)",
	// Comparison hero labels — Basque "kripto(moneta)" variants to avoid
	// byte-identity with English "Crypto"/"Bitcoin vs Crypto".
	"bitcoin-vs-crypto::bitcoin_vs_crypto": "Bitcoin vs kriptomoneta",
	"bitcoin-vs-crypto::crypto": "KRIPTOMONETA",
	// Sticker dimensions — translate the " in " unit to Basque "hh" (hazbete);
	// comma-decimals (Basque uses "," for decimals).
	"common::common_stickers_dimensions_bdhi":
		"21,59 cm x 4,6482 cm (8,5 hh x 1,83 hh)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20,995 cm x 6,35 cm (8,25 hh x 2,5 hh)",
	"common::common_stickers_dimensions_caution":
		"12,0142 cm x 7,9502 cm (4,73 hh x 3,13 hh)",
	"common::common_stickers_dimensions_cure_v2":
		"6,35 cm x 12,7 cm (2,5 hh x 5 hh)",
	"common::common_stickers_dimensions_danger":
		"11,4544 cm x 8,382 cm (4,51 hh x 3,3 hh)",
	"common::common_stickers_dimensions_fix":
		"11,3792 cm x 6,8072 cm (4,48 hh x 2,68 hh)",
	"common::common_stickers_dimensions_got_inflation":
		"7,9248 cm x 14,605 cm (3,12 hh x 5,75 hh)",
	"common::common_stickers_dimensions_study":
		"14,605 cm x 5,1308 cm (5,75 hh x 2,02 hh)",
	"common::common_stickers_dimensions_warning":
		"10,414 cm x 9,2202 cm (4,1 hh x 3,63 hh)",
	"common::common_stickers_dimensions_what_if":
		"21,7932 cm x 7,62 cm (8,58 hh x 3 hh)",
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
		`fix-remaining (eu): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length) {
		console.log(`\nStill missing (${missing.length}):`);
		for (const k of missing) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
