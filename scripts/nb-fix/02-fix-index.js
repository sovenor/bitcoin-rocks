#!/usr/bin/env node
/**
 * 02-fix-index.js
 *
 * Re-translate Danish-contaminated values in i18n/nb/index_nb.json into
 * proper Norwegian Bokmål.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "index_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

const fixes = {
	"home_card_label_inflation": "Bitcoin er bedre penger",
	"home_card_label_bank_runs": "Fullt reservesystem",
	"home_card_label_crypto": "Hva er forskjellen?",
	"home_card_label_cash": "La oss sammenligne",
	"home_card_label_bonds": "La oss sammenligne",
	"home_card_label_cbdc": "Åpent eller lukket?",
	"home_card_label_salary": "Beskytt lønnen din",
	"home_card_label_human_rights_1": "Håndhevelse av menneskerettigheter",
	"home_card_label_human_rights_2": "Grasrotadopsjon",
	"home_card_label_human_rights_3": "Globalt avtrykk",
	"home_card_label_equality_1": "Håp og muligheter",
	"home_card_label_equality_2": "Den store utjevneren",
	"home_card_label_property_rights_1": "La oss sammenligne",
	"home_card_label_business_1": "Hva er forskjellen?",
	"home_card_label_business_2": "Ta imot Bitcoin-betalinger",
	"home_card_label_crowdfunding_2": "Penger som ikke kan stoppes",
	"home_card_label_crowdfunding_3": "Finansier prosjektet ditt",
	"home_card_label_energy_1": "Stabilisering av strømnett",
	"home_card_label_energy_4": "Styring av etterspørsel",
	"home_card_label_energy_5": "Elektrifisering av landdistrikter",
	"home_card_label_energy_6": "Insentiver for fornybar energi",
	"home_card_label_environment_1": "Reduksjon av metan",
	"home_card_label_environment_2": "Reddet en nasjonalpark",
	"home_card_label_environment_3": "Den grønneste industrien",
	"home_card_label_environment_4": "Reduserer fakling av gass",
	"home_card_label_food_1": "Matvarepriser",
	"home_card_label_food_2": "Gårder og jord",
	"home_card_label_art_1": "La oss sammenligne",
	"home_card_label_art_2": "Spre budskapet",
	"home_card_label_art_3": "Gatekunst",
	"home_card_label_politics_1": "Det politiske paradokset",
	"home_card_label_politics_2": "Gå all in",
	"home_card_label_war_1": "Avslutter evige kriger",
	"home_card_label_war_2": "Hjelper veteraner",
	"home_card_label_war_3": "Flykter fra krig",
	"home_card_label_coding_1": "Interaktiv veiledning",
	"home_card_label_coding_2": "Bygg maskinvare",
	"home_card_label_coding_3": "Programmeringsoppgaver",
	"home_card_label_networks_1": "Live nettverksvisning",
	"home_card_label_networks_2": "La oss sammenligne",
	"home_card_label_payments_1": "Hva er forskjellen?",
	"home_card_label_payments_2": "Raske og billige betalinger",
	"home_card_label_payments_3": "Overføringer til utlandet",
	"home_card_label_payments_4": "Ta imot betalinger",
	"home_card_label_self_custody_1": "Guide til Bitcoin-lommebøker",
	"home_card_label_self_custody_2": "Det viktigste trinnet",
	"home_card_label_self_custody_3": "Suverene penger",
	"home_card_label_get_started_1": "Nybegynnergrunnlaget",
	"home_card_label_get_started_2": "Din første lommebok",
	"home_card_label_get_started_3": "Kjøp Bitcoin",
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
console.log(`index_nb.json: re-translated ${changed} keys, last-updated → 2026-04-26`);
