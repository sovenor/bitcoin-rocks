#!/usr/bin/env node
/**
 * 06-fix-about.js
 *
 * Re-translate Danish-contaminated values in i18n/nb/about_nb.json into
 * proper Norwegian Bokmål.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "about_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

const fixes = {
	"about_page_description": "bitcoin.rocks er en gratis, åpen kildekode-utdanningsnettside om Bitcoin, grunnlagt i 2022. Vårt oppdrag er å akselerere Bitcoin-adopsjon gjennom utdanning.",
	"about_mission_1a": "bitcoin.rocks ble grunnlagt av brukeren",
	"about_mission_1b": "i 2022 med et enkelt oppdrag: å akselerere Bitcoin-adopsjon gjennom utdanning.",
	"about_mission_2": "Vi eksisterer for å være den første lenken du deler med noen som er nysgjerrig på Bitcoin. Et vennlig, tilgjengelig utgangspunkt som forklarer hvordan Bitcoin bygger en bedre verden.",
	"about_stickers_blurb": "Vi sender gratis Bitcoin-klistremerker direkte til døren din, slik at du kan hjelpe med å spre Bitcoin-bevissthet i lokalsamfunnet ditt. Hver måned skanner hundrevis av mennesker QR-kodene på disse klistremerkene for å lære mer om Bitcoin.",
	"about_card_stickers_label": "Gratis klistremerker",
	"about_card_stickers_title": "Få gratis Bitcoin-klistremerker levert til døren din",
	"about_flyers_blurb": "Vi designer flygeblader som kan skrives ut, til å dele ut på meetups, henge opp på oppslagstavler eller legge i postkasser — en enkel måte å skape nysgjerrighet på og lede folk til bitcoin.rocks for å lære mer.",
	"about_card_flyers_label": "Flygeblader til utskrift",
	"about_card_flyers_title": "Last ned og skriv ut Bitcoin-flygeblader for lokalsamfunnet ditt",
	"about_business_blurb": "Vi tilbyr gratis bedriftsressurser som gjør det enkelt for lokale bedrifter å begynne å ta imot Bitcoin. Vår Bitcoin for bedrifter-side forklarer hvorfor Bitcoin er bra for bedrifter, hvordan du velger en lommebok og betalingsterminal, og tilbyr gratis «Bitcoin mottas her»-klistremerker.",
	"about_card_business_label": "Bedriftsressurser",
	"about_card_business_title": "Alt en bedrift trenger for å begynne å ta imot Bitcoin-betalinger",
	"about_editorial_2": "Vi henviser til pålitelige kilder som Federal Reserve (FRED), det amerikanske Bureau of Labor Statistics, FDIC, FN, World Gold Council, Forbes, MIT Technology Review, Lyn Alden og James Lavish. Vi mener at når faktaene presenteres tydelig, taler Bitcoin for seg selv.",
	"about_open_source_2": "bitcoin.rocks er et gratis, åpen kildekode-prosjekt under MIT-lisensen. Alle er velkomne til å bidra. Vi ønsker spesielt oversettere velkommen, som hjelper med å gjøre innholdet vårt tilgjengelig for mennesker over hele verden.",
	"about_card_email_label": "E-post",
	"about_card_email_source": "Kilde: e-post →",
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
console.log(`about_nb.json: re-translated ${changed} keys, last-updated → 2026-04-26`);
