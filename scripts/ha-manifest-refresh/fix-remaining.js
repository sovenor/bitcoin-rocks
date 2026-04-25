#!/usr/bin/env node
/**
 * Hausa manifest refresh — fill remaining locale-specific entries.
 * Sticker dimension strings (we localize "in" inches abbreviation to "in"
 * which matches Hausa usage), plus a couple of straggler keys.
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
	"ha.json",
);

const T = {
	// Stragglers from rest-part1
	"bitcoin-vs-banks::point_3_summary_2":
		"Bankuna suna aiki da litattafan asusu na sirri da hanyoyin ciki na duhu waɗanda abokan ciniki ba za su iya tabbatarwa ba da kansu.",
	"bitcoin-vs-crypto::crypto": "CRYPTO",

	// Other stragglers
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"Fayilolin Labaru na 'Bitcoin Accepted Here' a Turanci",
	"compound-inflation-calculator::cic_header":
		"Na'urar Lissafin Hauhawar Farashi ta Tara",
	"compound-inflation-calculator::cic_inflation_cta":
		"Fita daga hauhawar farashi tare da Bitcoin",
	"sticker-files/index::bitcoin_sticker_files_all_languages":
		"Fayilolin Labaru na Bitcoin: Duk Harsuna",
	"sticker-language-success::sticker_language_success_1":
		"Mun karɓi buƙatarka cikin nasara.",
	"sticker-language-success::sticker_language_success_2":
		"Muna buga sabbin fayiloli a rukuni-rukuni, don haka zai iya ɗaukar makonni kafin waɗannan fayilolin su kasance a shirye don saukarwa. Duba nan ba da daɗewa ba!",
	"sticker-success::sticker_success_list_4":
		"BA akan kayan masarufi na sirri ba, alamomin da ke rufewa, ATM ko famfunan mai",


	// Sticker dimensions — keep "inci" (Hausa for inches)
	"common::common_stickers_dimensions_bdhi":
		"21.59 cm x 4.6482 cm (inci 8.5 x inci 1.83)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 cm x 6.35 cm (inci 8.25 x inci 2.5)",
	"common::common_stickers_dimensions_caution":
		"12.0142 cm x 7.9502 cm (inci 4.73 x inci 3.13)",
	"common::common_stickers_dimensions_cure_v2":
		"6.35 cm x 12.7 cm (inci 2.5 x inci 5)",
	"common::common_stickers_dimensions_danger":
		"11.4544 cm x 8.382 cm (inci 4.51 x inci 3.3)",
	"common::common_stickers_dimensions_fix":
		"11.3792 cm x 6.8072 cm (inci 4.48 x inci 2.68)",
	"common::common_stickers_dimensions_got_inflation":
		"7.9248 cm x 14.605 cm (inci 3.12 x inci 5.75)",
	"common::common_stickers_dimensions_study":
		"14.605 cm x 5.1308 cm (inci 5.75 x inci 2.02)",
	"common::common_stickers_dimensions_warning":
		"10.414 cm x 9.2202 cm (inci 4.1 x inci 3.63)",
	"common::common_stickers_dimensions_what_if":
		"21.7932 cm x 7.62 cm (inci 8.58 x inci 3)",
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
	console.log(`fix-remaining (ha): filled ${filled}`);
}

main();
