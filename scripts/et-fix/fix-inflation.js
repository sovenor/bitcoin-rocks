#!/usr/bin/env node
/**
 * Re-translate Danish-contaminated keys in i18n/et/inflation_et.json into
 * Estonian, and clean up Estonian grammatical artifacts that remained from
 * a partial mid-translation pass (e.g. "USA dollaritdel", "eurodd",
 * "naeladdel", "ruupiatdel").
 *
 * Reads the file, JSON.parse, replaces values, JSON.stringify with TAB
 * indentation, writes back. Sets @metadata.last-updated to 2026-04-26.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const FILE = path.resolve(__dirname, "..", "..", "i18n", "et", "inflation_et.json");

const replacements = {
	// Top-of-file Danish contamination
	bitcoin_doesnt_have_inflation: "Bitcoinil ei ole inflatsiooni",
	inflation_description: "Bitcoinil on fikseeritud pakkumine — kunagi saab eksisteerima vaid 21 miljonit bitcoini. Keegi ei saa juurde trükkida ja sellega inflatsiooni põhjustada.",
	inflation_sign_got_inflation: "Inflatsioon kimbutab?",
	inflation_save_in_bitcoin: "Säästa bitcoinis.",
	inflation_sticker_cure: "Vajad ravi inflatsiooni vastu?",
	inflation_sticker_learn: "Õpi, kuidas bitcoin saab aidata.",
	inflation_sticker_got_inflation: "Inflatsioon kimbutab?",
	inflation_sticker_what_if: "Mis siis, kui sinu rahal poleks inflatsiooni?",
	inflation_sticker_lets_find_out: "Uurime välja.",
	inflation_sticker_bitcoin: "Bitcoinil ei ole inflatsiooni,",
	inflation_sticker_your_money: "kuid sinu rahal on.",
	inflation_calculator_opt_out: "Loobu inflatsioonist",
	inflation_calculator_with_bitcoin: "bitcoiniga.",

	// Currency labels (lines 24-36 were Danish: AMERIKANSKE, AUSTRALSKE, etc.)
	inflation_us_dollar: "USA DOLLAR",
	inflation_australian_dollar: "AUSTRAALIA DOLLAR",
	inflation_brazilian_real: "BRASIILIA REAAL",
	inflation_british_pound: "BRITI NAEL",
	inflation_canadian_dollar: "KANADA DOLLAR",
	inflation_euro: "EURO",
	inflation_indian_rupee: "INDIA RUUPIA",
	inflation_israeli_shekel: "IISRAELI SEEKEL",
	inflation_japanese_yen: "JAAPANI JEEN",
	inflation_mexican_peso: "MEHHIKO PEESO",
	inflation_nz_dollar: "UUS-MEREMAA DOLLAR",
	inflation_philippine_peso: "FILIPIINIDE PEESO",
	inflation_thai_baht: "TAI BAHT",

	// Stat labels
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_usd_label: "USA DOLLAR",
	inflation_stat_cad_label: "KANADA DOLLAR",
	inflation_stat_eur_label: "EURO",
	inflation_stat_gbp_label: "BRITI NAEL",
	inflation_stat_brl_label: "BRASIILIA REAAL",
	inflation_stat_php_label: "FILIPIINIDE PEESO",
	inflation_stat_mxn_label: "MEHHIKO PEESO",
	inflation_stat_inr_label: "INDIA RUUPIA",
	inflation_stat_jpy_label: "JAAPANI JEEN",
	inflation_stat_aud_label: "AUSTRAALIA DOLLAR",
	inflation_stat_ils_label: "IISRAELI SEEKEL",
	inflation_stat_thb_label: "TAI BAHT",
	inflation_stat_nzd_label: "UUS-MEREMAA DOLLAR",
	inflation_stat_comparison_today: "TÄNA",

	// Stat existence/debt titles
	inflation_stat_usd_existence_title: "USA DOLLAREID RINGLUSES",
	inflation_stat_usd_debt_title: "USA FÖDERAALVALITSUSE KOGUVÕLG",
	inflation_stat_cad_existence_title: "KANADA DOLLAREID RINGLUSES",
	inflation_stat_cad_debt_title: "KANADA VALITSUSE KOGUVÕLG",
	inflation_stat_eur_existence_title: "EUROSID RINGLUSES",
	inflation_stat_eur_debt_title: "EUROALA VALITSUSTE KOGUVÕLG",
	inflation_stat_gbp_existence_title: "NAELU RINGLUSES",
	inflation_stat_gbp_debt_title: "ÜHENDKUNINGRIIGI VALITSUSE KOGUVÕLG",
	inflation_stat_brl_existence_title: "REAALE RINGLUSES",
	inflation_stat_brl_debt_title: "BRASIILIA VALITSUSE KOGUVÕLG",
	inflation_stat_php_existence_title: "PEESOSID RINGLUSES",
	inflation_stat_php_debt_title: "FILIPIINIDE VALITSUSE KOGUVÕLG",
	inflation_stat_mxn_existence_title: "PEESOSID RINGLUSES",
	inflation_stat_mxn_debt_title: "MEHHIKO VALITSUSE KOGUVÕLG",
	inflation_stat_inr_existence_title: "RUUPIAID RINGLUSES",
	inflation_stat_inr_debt_title: "INDIA VALITSUSE KOGUVÕLG",
	inflation_stat_jpy_existence_title: "JEENE RINGLUSES",
	inflation_stat_jpy_debt_title: "JAAPANI VALITSUSE KOGUVÕLG",
	inflation_stat_aud_existence_title: "AUSTRAALIA DOLLAREID RINGLUSES",
	inflation_stat_aud_debt_title: "AUSTRAALIA VALITSUSE KOGUVÕLG",
	inflation_stat_ils_existence_title: "SEEKLEID RINGLUSES",
	inflation_stat_ils_debt_title: "IISRAELI VALITSUSE KOGUVÕLG",
	inflation_stat_thb_existence_title: "BAHTE RINGLUSES",
	inflation_stat_thb_debt_title: "TAI VALITSUSE KOGUVÕLG",
	inflation_stat_nzd_existence_title: "UUS-MEREMAA DOLLAREID RINGLUSES",
	inflation_stat_nzd_debt_title: "UUS-MEREMAA VALITSUSE KOGUVÕLG",

	// Fix mangled grammar in *_btc_p2_before keys
	inflation_usd_btc_p2_before: "USA dollareid on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_cad_btc_p2_before: "Kanada dollareid on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_eur_btc_p2_before: "Eurosid on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_gbp_btc_p2_before: "Briti naelu on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_brl_btc_p2_before: "Brasiilia reaale on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_php_btc_p2_before: "Filipiinide peesosid on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_mxn_btc_p2_before: "Mehhiko peesosid on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_inr_btc_p2_before: "India ruupiaid on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_jpy_btc_p2_before: "Jaapani jeene on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_aud_btc_p2_before: "Austraalia dollareid on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_ils_btc_p2_before: "Iisraeli seekleid on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_thb_btc_p2_before: "Tai bahte on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",
	inflation_nzd_btc_p2_before: "Uus-Meremaa dollareid on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.",

	// Fix mangled grammar in *_btc_p3 keys ("USA dollaritd", "eurodd", etc.)
	inflation_usd_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui USA dollar on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_cad_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Kanada dollar on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_eur_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui euro on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_gbp_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Briti nael on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_brl_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Brasiilia reaal on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_php_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Filipiinide peeso on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_mxn_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Mehhiko peeso on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_inr_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui India ruupia on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_jpy_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Jaapani jeen on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_aud_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Austraalia dollar on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_ils_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Iisraeli seekel on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_thb_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Tai baht on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",
	inflation_nzd_btc_p3: "Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui Uus-Meremaa dollar on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.",

	// Fix mangled grammar in *_proof_p1 keys (had "loodud X kogusele" pattern)
	inflation_usd_proof_p1: "Iga dollar sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate dollarite kogusele ei ole kindlat ülempiiri.",
	inflation_cad_proof_p1: "Iga Kanada dollar sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate Kanada dollarite kogusele ei ole kindlat ülempiiri.",
	inflation_eur_proof_p1: "Iga euro sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate eurode kogusele ei ole kindlat ülempiiri.",
	inflation_gbp_proof_p1: "Iga nael sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate naelte kogusele ei ole kindlat ülempiiri.",
	inflation_brl_proof_p1: "Iga reaal sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate reaalide kogusele ei ole kindlat ülempiiri.",
	inflation_php_proof_p1: "Iga peeso sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate peesode kogusele ei ole kindlat ülempiiri.",
	inflation_mxn_proof_p1: "Iga peeso sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate peesode kogusele ei ole kindlat ülempiiri.",
	inflation_inr_proof_p1: "Iga ruupia sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate ruupiate kogusele ei ole kindlat ülempiiri.",
	inflation_jpy_proof_p1: "Iga jeen sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate jeenide kogusele ei ole kindlat ülempiiri.",
	inflation_aud_proof_p1: "Iga Austraalia dollar sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate Austraalia dollarite kogusele ei ole kindlat ülempiiri.",
	inflation_ils_proof_p1: "Iga seekel sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate seeklite kogusele ei ole kindlat ülempiiri.",
	inflation_thb_proof_p1: "Iga baht sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate bahtide kogusele ei ole kindlat ülempiiri.",
	inflation_nzd_proof_p1: "Iga Uus-Meremaa dollar sinu pangakontol ostab iga aastaga vähem. See on nii, sest loodavate Uus-Meremaa dollarite kogusele ei ole kindlat ülempiiri.",

	// Fix mangled grammar in *_proof_p2 keys ("ringluses olevate X hulk" pattern)
	inflation_usd_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate dollarite hulk järsult kasvanud.",
	inflation_cad_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate Kanada dollarite hulk järsult kasvanud.",
	inflation_eur_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate eurode hulk järsult kasvanud.",
	inflation_gbp_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate naelte hulk järsult kasvanud.",
	inflation_brl_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate reaalide hulk järsult kasvanud.",
	inflation_php_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate peesode hulk järsult kasvanud.",
	inflation_mxn_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate peesode hulk järsult kasvanud.",
	inflation_inr_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate ruupiate hulk järsult kasvanud.",
	inflation_jpy_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate jeenide hulk järsult kasvanud.",
	inflation_aud_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate Austraalia dollarite hulk järsult kasvanud.",
	inflation_ils_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate seeklite hulk järsult kasvanud.",
	inflation_thb_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate bahtide hulk järsult kasvanud.",
	inflation_nzd_proof_p2: "See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate Uus-Meremaa dollarite hulk järsult kasvanud.",

	// Fix *_btc_p2_after to follow grammatically from corrected p2_before/link
	inflation_usd_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_cad_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_eur_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_gbp_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_brl_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_php_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_mxn_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_inr_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_jpy_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_aud_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_ils_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_thb_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",
	inflation_nzd_btc_p2_after: "sest sellel on maksimaalne pakkumine 21 miljonit bitcoini. Keegi ei saa rohkem bitcoini juurde trükkida.",

	// Fix *_btc_p4 (currently uses "USA dollarites" / "eurodes" / etc. which is fine; just normalise)
	inflation_usd_btc_p4: "Kas sa eelistad hoiustada USA dollarites, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_cad_btc_p4: "Kas sa eelistad hoiustada Kanada dollarites, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_eur_btc_p4: "Kas sa eelistad hoiustada eurodes, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_gbp_btc_p4: "Kas sa eelistad hoiustada Briti naelades, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_brl_btc_p4: "Kas sa eelistad hoiustada Brasiilia reaalides, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_php_btc_p4: "Kas sa eelistad hoiustada Filipiinide peesodes, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_mxn_btc_p4: "Kas sa eelistad hoiustada Mehhiko peesodes, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_inr_btc_p4: "Kas sa eelistad hoiustada India ruupiades, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_jpy_btc_p4: "Kas sa eelistad hoiustada Jaapani jeenides, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_aud_btc_p4: "Kas sa eelistad hoiustada Austraalia dollarites, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_ils_btc_p4: "Kas sa eelistad hoiustada Iisraeli seeklites, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_thb_btc_p4: "Kas sa eelistad hoiustada Tai bahtides, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
	inflation_nzd_btc_p4: "Kas sa eelistad hoiustada Uus-Meremaa dollarites, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?",
};

const raw = fs.readFileSync(FILE, "utf8");
const data = JSON.parse(raw);

let changed = 0;
const missing = [];
for (const [key, value] of Object.entries(replacements)) {
	if (!(key in data)) {
		missing.push(key);
		continue;
	}
	if (data[key] !== value) {
		data[key] = value;
		changed += 1;
	}
}

if (missing.length > 0) {
	console.error(`Keys missing in target file (${missing.length}):`);
	for (const k of missing) console.error("  - " + k);
	process.exit(1);
}

// Update last-updated metadata
data["@metadata"] = data["@metadata"] || {};
data["@metadata"]["last-updated"] = "2026-04-26";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log(`inflation_et.json: replaced ${changed} keys; @metadata.last-updated = 2026-04-26`);
