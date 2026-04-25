#!/usr/bin/env node
/**
 * Lithuanian (lt) — extra inflation keys not handled by the
 * per-currency template helper.
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
	"lt.json",
);

const EXTRAS = {
	bitcoin_doesnt_have_inflation: "Bitcoin neturi infliacijos.",
	inflation_australian_dollar: "AUSTRALIJOS DOLERIS",
	inflation_brazilian_real: "BRAZILIJOS REALAS",
	inflation_british_pound: "BRITANIJOS SVARAS",
	inflation_calculator_opt_out: "Atsisakykite infliacijos",
	inflation_calculator_with_bitcoin: "su Bitcoin.",
	inflation_canadian_dollar: "KANADOS DOLERIS",
	inflation_description:
		"Bitcoin turi fiksuotą 21 milijono Bitcoin pasiūlą, kuri kada nors egzistuos. Niekas negali atspausdinti daugiau. Sužinokite, kaip Bitcoin yra geresni pinigai be infliacijos.",
	inflation_euro: "EURAS",
	inflation_indian_rupee: "INDIJOS RUPIJA",
	inflation_israeli_shekel: "IZRAELIO ŠEKELIS",
	inflation_japanese_yen: "JAPONIJOS JENA",
	inflation_mexican_peso: "MEKSIKOS PESAS",
	inflation_nz_dollar: "NAUJOSIOS ZELANDIJOS DOLERIS",
	inflation_philippine_peso: "FILIPINŲ PESAS",
	inflation_save_in_bitcoin: "Taupykite Bitcoin.",
	inflation_sign_got_inflation: "Turite infliacijos?",
	inflation_sticker_bitcoin: "Bitcoin neturi infliacijos,",
	inflation_sticker_cure: "Reikia vaisto nuo infliacijos?",
	inflation_sticker_got_inflation: "Turite infliacijos?",
	inflation_sticker_what_if:
		"O kas, jei jūsų pinigai neturėtų infliacijos?",
	inflation_sticker_your_money: "bet jūsų pinigai turi.",
	inflation_thai_baht: "TAILANDO BATAS",
	inflation_us_dollar: "JAV DOLERIS",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	for (const e of report.entries) {
		if (e.namespace !== "inflation") continue;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(EXTRAS, e.key)) {
			e.targetTranslation = EXTRAS[e.key];
			filled++;
		}
	}
	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-inflation-extras (lt): filled ${filled}, already-done ${skipped}`,
	);
}

main();
