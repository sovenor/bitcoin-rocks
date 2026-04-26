#!/usr/bin/env node
/**
 * 08-fix-bank-runs.js
 *
 * Re-translate Danish-contaminated values in i18n/nb/bank-runs_nb.json
 * into proper Norwegian Bokmål.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "bank-runs_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

const fixes = {
	"bank_runs_page_description": "Banker låner ut innskuddene dine under brøkreservebankvirksomhet. Hvis for mange tar ut samtidig, kan banker kollapse. Bitcoin er et fullt reservesystem — bankpanikker er umulige.",
	"bank_runs_what": "HVA ER EN BANKPANIKK?",
	"bank_runs_what_p1": "Banker oppbevarer ikke innskuddene dine i et hvelv. De låner ut pengene dine og investerer dem — det kalles brøkreservebankvirksomhet.",
	"bank_runs_what_p2": "Hvis for mange prøver å ta ut samtidig, har banken ikke nok kontanter til å betale alle. Det er en bankpanikk — og den kan få banker til å kollapse fullstendig.",
	"bank_runs_card_bank_reserve_detail": "Fra og med 26. mars 2020 er ikke amerikanske banker lenger pålagt å holde noen lovpliktige reserver.",
	"bank_runs_card_btc_reserve_detail": "Hver bitcoin finnes på blokkjeden — ingenting lånes ut.",
	"bank_runs_svb_heading": "Silicon Valley Bank: et virkelig eksempel",
	"bank_runs_svb_p1_a": "I mars 2023 kollapset Silicon Valley Bank etter å ha investert kunders innskudd i langsiktige",
	"bank_runs_svb_p1_b": "Da disse obligasjonene mistet verdi, kunne SVB ikke dekke uttak. Banken ble insolvent.",
	"bank_runs_svb_p2": "Tusenvis av bedrifter kunne ikke betale sine ansatte. FDIC grep inn — men et større spørsmål dukket opp: er pengene dine virkelig trygge?",
	"bank_runs_card_svb_label": "Casestudie",
	"bank_runs_card_svb_title": "Se hvordan bankpanikken i Silicon Valley Bank skjedde",
	"bank_runs_fdic_heading": "FDIC-forsikringen dekker omtrent 1 % av innskuddene",
	"bank_runs_fdic_p1": "FDIC-forsikringen beskytter innskudd opp til 250 000 USD per innskyter. Men forsikringsfondet er lite sammenlignet med de samlede innskuddene det skal beskytte.",
	"bank_runs_fdic_p2_a": "Ved et bredt banksammenbrudd ville regjeringen sannsynligvis trykke penger for å dekke forskjellen — noe som fører til mer",
	"bank_runs_card_fdic_label": "FDIC-dekning",
	"bank_runs_card_fdic_detail": "153,9 mrd. USD forsikringsfond mot 10,82 billioner USD i forsikrede innskudd (des. 2025).",
	"bank_runs_card_fdic_source": "Kilde: FDIC Statistics at a Glance →",
	"bank_runs_card_btc_fdic_label": "Bitcoin-dekning",
	"bank_runs_card_btc_fdic_detail": "Fullt reservesystem — innskytergaranti er ikke nødvendig.",
	"bank_runs_bitcoin_heading": "Bitcoin har ingen bankpanikker",
	"bank_runs_bitcoin_p1": "Bitcoin er et fullt reservesystem. Du setter ikke pengene dine i en bank. Du er din egen bank. Pengene dine lånes ikke ut uten din viten, for den eneste som har tilgang til dem, er deg.",
	"bank_runs_bitcoin_p2": "Så lenge du oppbevarer din bitcoin i din egen lommebok — ikke på en børs eller pakket inn i en ETF — er bankpanikker umulige.",
	"bank_runs_bitcoin_p3": "Med Bitcoin har du ekte kontroll over pengene dine.",
	"bank_runs_card_wallet_label": "Neste trinn",
	"bank_runs_card_wallet_title": "Lær hvordan du får din egen Bitcoin-lommebok",
};

let changed = 0;
for (const [k, v] of Object.entries(fixes)) {
	if (!(k in data)) {
		console.warn(`! key not found in file: ${k}`);
		continue;
	}
	if (data[k] !== v) {
		data[k] = v;
		changed++;
	}
}

data["@metadata"] = data["@metadata"] || {};
data["@metadata"]["last-updated"] = "2026-04-26";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log(`bank-runs_nb.json: re-translated ${changed} keys, last-updated → 2026-04-26`);
