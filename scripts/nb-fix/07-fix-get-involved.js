#!/usr/bin/env node
/**
 * 07-fix-get-involved.js
 *
 * Re-translate Danish-contaminated values in i18n/nb/get-involved_nb.json
 * into proper Norwegian Bokmål.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "nb", "get-involved_nb.json");

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));

const fixes = {
	"get_involved_description": "Våre gratis ressurser gjør det enkelt å spre Bitcoin-adopsjon. Klistremerker, flygeblader, «Bitcoin mottas her»-klistremerker for bedrifter og åpen kildekode som alle kan bidra til.",
	"get_involved_intro_5": "Du kan hjelpe med å endre dette. Vi har laget noen få gratis ressurser som gjør det enkelt å spre håpet Bitcoin bringer til lokalsamfunnet ditt.",
	"get_involved_sticker_image_alt": "En pakke med gratis Bitcoin-tekstklistremerker fra bitcoin.rocks",
	"get_involved_card_stickers_label": "Gratis klistremerker",
	"get_involved_card_stickers_title": "Be om en gratis pakke med Bitcoin-klistremerker levert til døren din",
	"get_involved_flyers_header": "Skriv ut og heng opp et flygeblad",
	"get_involved_flyers_image_alt": "Forhåndsvisning av det gratis Bitcoin-flygebladet til utskrift fra bitcoin.rocks",
	"get_involved_flyers_content_1": "Flygeblader er en av de enkleste måtene å introdusere Bitcoin til lokalsamfunnet ditt. Last ned vårt gratis Bitcoin-flygeblad til utskrift, skriv ut så mange kopier du vil, og heng dem opp på oppslagstavler, i kafeer, på meetups eller hvor som helst folk samles.",
	"get_involved_flyers_content_2": "Hvert flygeblad har en oppmerksomhetsfangende overskrift og en QR-kode som leder nysgjerrige lesere til bitcoin.rocks for å lære mer.",
	"get_involved_flyers_content_3": "I motsetning til klistremerker kan flygeblader skrives ut on demand fra hvor som helst i verden — alt du trenger er en skriver og noen få minutter.",
	"get_involved_card_flyers_label": "Flygeblader til utskrift",
	"get_involved_card_flyers_title": "Last ned og skriv ut et gratis Bitcoin-flygeblad",
	"get_involved_business_header": "Innrullér en bedrift",
	"get_involved_business_content_1": "Vil du hjelpe med å bygge den sirkulære Bitcoin-økonomien? Den enkleste måten er å hjelpe lokale bedrifter med å begynne å ta imot Bitcoin-betalinger.",
	"get_involved_business_content_2": "Kjenner du en bedrift som kunne være åpen for dette? Send eieren til vår",
	"get_involved_business_content_3": "Bitcoin for bedrifter-side.",
	"get_involved_card_business_label": "Bitcoin for bedrifter",
	"get_involved_card_business_title": "Alt en bedrift trenger for å begynne å ta imot Bitcoin-betalinger",
	"get_involved_biz_stickers_note": "Tar du allerede imot Bitcoin? La kundene dine vite det med våre gratis «Bitcoin mottas her»-klistremerker. Vi sender en pakke til enhver adresse i USA eller Canada, eller du kan skrive ut dine egne hvor som helst i verden.",
	"get_involved_card_biz_stickers_label": "«Mottas her»-klistremerker",
	"get_involved_card_biz_stickers_title": "Gratis «Bitcoin mottas her»-klistremerker for bedriften din",
	"get_involved_github_content_1": "bitcoin.rocks er et gratis, åpen kildekode-prosjekt under MIT-lisensen. Vårt oppdrag er å akselerere Bitcoin-adopsjon gjennom utdanning — og vi kan ikke gjøre det alene.",
	"get_involved_github_content_2": "Enten du er utvikler, designer, tekstforfatter eller oversetter, finnes det en måte du kan hjelpe på. Vi ønsker spesielt velkommen bidragsytere som kan oversette innholdet vårt til flere språk, slik at folk over hele verden kan lære om Bitcoin på sitt eget morsmål.",
	"get_involved_github_content_3": "Forke vårt repository, åpne en pull request, opprett et issue eller stjernemarker prosjektet for å vise støtten din. Hvert bidrag hjelper Bitcoin med å nå flere mennesker.",
	"get_involved_card_github_label": "Åpen kildekode",
	"get_involved_card_github_title": "Bidra til bitcoin.rocks på GitHub",
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
console.log(`get-involved_nb.json: re-translated ${changed} keys, last-updated → 2026-04-26`);
