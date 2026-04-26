#!/usr/bin/env node
/**
 * 05-fix-business-sticker-success.js
 *
 * Re-translate Danish-contaminated values in
 * i18n/nb/business/sticker-success_nb.json into proper Norwegian Bokmål.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "business", "sticker-success_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

const fixes = {
	"biz_sticker_success_hero_title": "Klistremerkene dine er på vei 🎉",
	"biz_sticker_success_hero_subtitle": "Du mottar dine gratis «Bitcoin mottas her»-klistremerker innen 2 til 4 uker, i en vanlig hvit konvolutt med 3 klistremerker.",
	"biz_sticker_success_tips_header": "Gode steder å sette klistremerkene dine",
	"biz_sticker_success_tip_1": "På inngangsdøren eller vinduet, slik at kundene ser dem før de kommer inn",
	"biz_sticker_success_tip_2": "Nær kassen, betalingsterminalen eller stedet der kundene betaler",
	"biz_sticker_success_tip_3": "På menyer, prislister eller drikkepengeglass",
	"biz_sticker_success_tip_4": "Sett dem ikke på steder du ikke eier eller ikke har tillatelse til å sette klistremerker",
	"biz_sticker_success_more_header": "Trenger du flere klistremerker?",
	"biz_sticker_success_more_c1": "Hvis 3 klistremerker ikke er nok for bedriften din, er du velkommen til å be om en ny gratis pakke — eller bestille i bulk fra det samme trykkeriet vi bruker.",
	"biz_sticker_success_btn_order_bulk": "Bestill i bulk",
	"biz_sticker_success_btn_request_more": "Be om enda en gratis pakke",
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
console.log(`business/sticker-success_nb.json: re-translated ${changed} keys, last-updated → 2026-04-26`);
