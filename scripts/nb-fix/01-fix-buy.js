#!/usr/bin/env node
/**
 * 01-fix-buy.js
 *
 * Re-translate Danish-contaminated values in i18n/nb/buy_nb.json into
 * proper Norwegian Bokmål. Reads + writes the JSON file with tab
 * indentation. Sets @metadata.last-updated = 2026-04-26.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "buy_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

// Re-translated values (Danish → Bokmål)
const fixes = {
	"buy_bitcoin_guide": "Slik kjøper du Bitcoin",
	"buy_step_1_header": "Velg ditt land",
	"buy_step_2_header": "Velg betalingsmetoden din",
	"buy_platform_feature_dca": "Dollar-cost averaging (gradvise kjøp)",
	"buy_platform_feature_p2p": "Peer-to-peer (direkte mellom brukere)",
	"buy_step_4_header": "Oppbevar din Bitcoin trygt",
	"buy_meta_description": "Lær hvordan du kjøper Bitcoin trygt med vår trinn-for-trinn-guide. Velg ditt land og betalingsmetode for å finne de beste Bitcoin-kjøpsmulighetene for deg.",
	"buy_header_subtitle": "En enkel trinn-for-trinn-guide til å kjøpe din første Bitcoin.",
	"buy_howto_name": "Slik kjøper du Bitcoin",
	"buy_step_1_eyebrow": "Trinn 1",
	"buy_step_2_eyebrow": "Trinn 2",
	"buy_step_3_eyebrow": "Trinn 3",
	"buy_step_4_eyebrow": "Trinn 4",
	"buy_storage_cta_label": "Neste trinn",
	"sources_strike_lightning": "Strike — kjøp Bitcoin med støtte for Lightning Network",
	"sources_kraken": "Kraken — etablert Bitcoin-børs",
	"sources_relai": "Relai — sveitsisk app for Bitcoin-selvforvaring",
	"sources_swan": "Swan Bitcoin — Bitcoin-only dollar-cost averaging",
	"sources_river": "River — Bitcoin-only kjøp, mining og oppbevaring",
	"sources_coinatmradar": "Coin ATM Radar — verdensomspennende katalog over Bitcoin-minibanker",
	"sources_bisq": "Bisq — desentralisert peer-to-peer Bitcoin-børs",
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
console.log(`buy_nb.json: re-translated ${changed} keys, last-updated → 2026-04-26`);
