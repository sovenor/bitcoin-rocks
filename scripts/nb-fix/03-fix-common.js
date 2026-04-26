#!/usr/bin/env node
/**
 * 03-fix-common.js
 *
 * Re-translate Danish-contaminated values in i18n/nb/common_nb.json into
 * proper Norwegian Bokmål. Only the contaminated keys are touched; the
 * already-correct Bokmål keys are left as-is.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "common_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

const fixes = {
	"common_sources_group_money": "Pengemengde-data",
	"common_sources_group_cpi": "Inflasjon / konsumprisindeks",
	"common_sources_group_debt": "Statsgjeld",
	"common_sources_group_stories": "Eksempler fra virkeligheten",
	"common_sources_treasury_auction": "James Lavish — «Kan en Treasury-auksjon mislykkes?»",
	"common_whats_next": "Hva er det neste?",
	"common_next_keep_learning": "Fortsett å lære",
	"common_next_keep_learning_desc": "Se hvordan Bitcoin gjør verden bedre",
	"common_next_get_wallet": "Få en lommebok",
	"common_next_get_wallet_desc": "Få din første Bitcoin-lommebok — det er gratis",
	"common_next_buy_bitcoin": "Kjøp Bitcoin",
	"common_next_buy_bitcoin_desc": "Lær hvordan du kjøper Bitcoin trygt",
	"common_next_calculate": "Beregn inflasjonen din",
	"common_next_calculate_desc": "Se hvordan inflasjon påvirker lønnen din over tid",
	"common_sticker_tips_heading": "Klistremerke-tips",
	"common_sticker_tips_intro": "Når du har skrevet ut klistremerkene dine, sett dem på steder der folk vil se dem! Gode steder inkluderer:",
	"common_sticker_tips_list_1": "offentlige steder, der folk vil legge merke til dem",
	"common_sticker_tips_list_2": "steder der de sannsynligvis ikke fjernes med det samme (klistremerkene forårsaker ingen varig skade)",
	"common_sticker_tips_list_3": "overflater der de sitter godt fast (metall, plast, glass)",
	"common_sticker_tips_list_4": "IKKE på privat eiendom, over trafikkskilt, minibanker eller bensinpumper",
	"common_sticker_files_next_languages_label": "Klistremerkefiler",
	"common_sticker_files_next_languages_title": "Se klistremerkefiler på andre språk",
	"common_sticker_files_next_flyers_label": "Flygeblader",
	"common_sticker_files_next_flyers_title": "Skriv ut et Bitcoin-flygeblad",
	"common_stickers_printer_prefix": "Vi bruker",
	"common_stickers_printer_suffix": "men du kan bruke et hvilket som helst klistremerke-trykkeri.",
	"common_sticker_files_mission_6": "gratis engelske klistremerker.",
	"common_sticker_name_danger": "Bitcoin «Danger! Inflation Ahead»-klistremerke",
	"common_sticker_name_warning": "Bitcoin «Warning! Inflation is Stealing Your Savings»-klistremerke",
	"common_sticker_name_caution": "Bitcoin «Caution! Melting Ice Cube»-klistremerke",
	"common_sticker_name_fix": "Bitcoin «Fix The Money, Fix The World»-klistremerke",
	"common_sticker_name_study": "«Study Bitcoin»-klistremerke",
	"common_sticker_name_bdhi_orange": "«Bitcoin Doesn’t Have Inflation»-klistremerke (oransje)",
	"common_sticker_name_bdhi_black": "«Bitcoin Doesn’t Have Inflation»-klistremerke (sort)",
	"common_sticker_name_cure_inflation": "Bitcoin «Cure Inflation»-klistremerke",
	"common_sticker_name_got_inflation": "Bitcoin «Got Inflation?»-klistremerke",
	"common_sticker_name_what_if": "Bitcoin «What if your money didn’t have inflation?»-klistremerke",
	"common_source_btcpayserver": "BTCPay Server — gratis, åpen kildekode, selvhostet Bitcoin-betalingsbehandler",
	"common_source_btc_map": "BTC Map — verdensomspennende katalog over forhandlere som tar imot Bitcoin",
	"common_source_strike_business": "Strike — Bitcoin- og Lightning-betalinger for bedrifter",
	"common_source_oshi": "Oshi — Bitcoin-belønningsplattform for forhandlere",
	"common_source_fred_money_supply_index": "Federal Reserve Economic Data (FRED) — pengemengde (kategoriindeks)",
	"common_source_bls_cpi": "U.S. Bureau of Labor Statistics — konsumprisindeks (KPI)",
	"common_language_switcher_add_language": "Legg til et språk",
	"common_site_tagline": "Bitcoin-utdanning for alle.",
	"common_sticker_files_print_these": "SKRIV UT DISSE MED ETT KLIKK",
	"common_sticker_files_mission_5": "be om en pakke",
	"common_stickers_bulk_store": "Bestill klistremerker i bulk fra det samme trykkeriet vi bruker.",
	"common_stickers_type": "Type:",
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
console.log(`common_nb.json: re-translated ${changed} keys, last-updated → 2026-04-26`);
