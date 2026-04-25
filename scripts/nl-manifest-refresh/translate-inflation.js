#!/usr/bin/env node
/**
 * Dutch manifest refresh — inflation namespace translator.
 *
 * Per-currency keys (13 currencies × ~25 suffixes) plus shared
 * non-currency labels / stories / sources / manifest-changed keys.
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
	"nl.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
// In Dutch, the long name and noun forms are usually identical (no genitive
// like German), so longName/longNameNom/noun/nounPlural overlap a lot.

const CURRENCY = {
	usd: {
		longName: "Amerikaanse dollar",
		longNameNom: "Amerikaanse dollar",
		noun: "dollar",
		nounPlural: "dollars",
		label: "Amerikaanse dollar",
		existenceTitle: "Amerikaanse dollars in omloop",
		debtTitle: "Staatsschuld van de Verenigde Staten",
	},
	eur: {
		longName: "euro",
		longNameNom: "euro",
		noun: "euro",
		nounPlural: "euro's",
		label: "Euro",
		existenceTitle: "Euro's in omloop",
		debtTitle: "Staatsschuld van de eurozone",
	},
	aud: {
		longName: "Australische dollar",
		longNameNom: "Australische dollar",
		noun: "dollar",
		nounPlural: "Australische dollars",
		label: "Australische dollar",
		existenceTitle: "Australische dollars in omloop",
		debtTitle: "Staatsschuld van Australië",
	},
	brl: {
		longName: "Braziliaanse real",
		longNameNom: "Braziliaanse real",
		noun: "real",
		nounPlural: "Braziliaanse real",
		label: "Braziliaanse real",
		existenceTitle: "Braziliaanse real in omloop",
		debtTitle: "Staatsschuld van Brazilië",
	},
	cad: {
		longName: "Canadese dollar",
		longNameNom: "Canadese dollar",
		noun: "dollar",
		nounPlural: "Canadese dollars",
		label: "Canadese dollar",
		existenceTitle: "Canadese dollars in omloop",
		debtTitle: "Staatsschuld van Canada",
	},
	gbp: {
		longName: "Britse pond",
		longNameNom: "Britse pond",
		noun: "pond",
		nounPlural: "ponden",
		label: "Brits pond",
		existenceTitle: "Britse ponden in omloop",
		debtTitle: "Staatsschuld van het Verenigd Koninkrijk",
	},
	ils: {
		longName: "Israëlische sjekel",
		longNameNom: "Israëlische sjekel",
		noun: "sjekel",
		nounPlural: "sjekels",
		label: "Israëlische sjekel",
		existenceTitle: "Sjekels in omloop",
		debtTitle: "Staatsschuld van Israël",
	},
	inr: {
		longName: "Indiase roepie",
		longNameNom: "Indiase roepie",
		noun: "roepie",
		nounPlural: "roepies",
		label: "Indiase roepie",
		existenceTitle: "Roepies in omloop",
		debtTitle: "Staatsschuld van India",
	},
	jpy: {
		longName: "Japanse yen",
		longNameNom: "Japanse yen",
		noun: "yen",
		nounPlural: "yen",
		label: "Japanse yen",
		existenceTitle: "Yen in omloop",
		debtTitle: "Staatsschuld van Japan",
	},
	mxn: {
		longName: "Mexicaanse peso",
		longNameNom: "Mexicaanse peso",
		noun: "peso",
		nounPlural: "peso's",
		label: "Mexicaanse peso",
		existenceTitle: "Peso's in omloop",
		debtTitle: "Staatsschuld van Mexico",
	},
	nzd: {
		longName: "Nieuw-Zeelandse dollar",
		longNameNom: "Nieuw-Zeelandse dollar",
		noun: "dollar",
		nounPlural: "Nieuw-Zeelandse dollars",
		label: "Nieuw-Zeelandse dollar",
		existenceTitle: "Nieuw-Zeelandse dollars in omloop",
		debtTitle: "Staatsschuld van Nieuw-Zeeland",
	},
	php: {
		longName: "Filipijnse peso",
		longNameNom: "Filipijnse peso",
		noun: "peso",
		nounPlural: "peso's",
		label: "Filipijnse peso",
		existenceTitle: "Peso's in omloop",
		debtTitle: "Staatsschuld van de Filipijnen",
	},
	thb: {
		longName: "Thaise baht",
		longNameNom: "Thaise baht",
		noun: "baht",
		nounPlural: "baht",
		label: "Thaise baht",
		existenceTitle: "Baht in omloop",
		debtTitle: "Staatsschuld van Thailand",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Als je in ${c.longName} spaart, is het je vast opgevallen dat je elk jaar minder kunt kopen. Je hebt meer ${c.nounPlural} nodig om dezelfde hoeveelheid goederen te kopen. Je hebt meer ${c.nounPlural} nodig om je levensstandaard op peil te houden.`;
		case "intro_2":
			return `Maar zo hoeft het niet te zijn.`;
		case "intro_highlight":
			return `In de afgelopen vier jaar hebben mensen die in Bitcoin sparen het leven juist goedkoper zien worden.`;
		case "proof_h2":
			return `Hier is het bewijs: jouw geld verliest waarde`;
		case "proof_p1":
			return `Elke ${c.noun} op je bankrekening koopt elk jaar minder. Dat komt doordat er geen vaste bovengrens bestaat voor het aantal ${c.nounPlural} dat kan worden gecreëerd.`;
		case "proof_p2":
			return `Dit onbeperkte aanbod is de hoofdoorzaak van inflatie. De afgelopen jaren is het aantal ${c.nounPlural} in omloop dramatisch gestegen.`;
		case "proof_p3":
			return `Wanneer er meer geld uit het niets wordt gecreëerd, stijgen de prijzen van alles. Dat geldt ook voor de grondstoffen die bedrijven kopen om producten te maken — wat leidt tot hogere prijzen voor jou.`;
		case "proof_p4":
			return `Naarmate de staatsschuld blijft groeien, wordt er meer geld bijgedrukt, omdat steeds minder mensen geld aan de overheid willen lenen.`;
		case "proof_p5_before":
			return `Als jij geen geld kunt lenen, kun je niets uitgeven. Maar als de overheid`;
		case "proof_p5_link":
			return `geen geld kan lenen`;
		case "proof_p5_after":
			return `, drukt ze er gewoon meer bij.`;
		case "proof_p6":
			return `Meer staatsschuld betekent meer bijgedrukt geld. Meer bijgedrukt geld betekent meer inflatie. En er zijn geen tekenen dat dit gaat stoppen.`;
		case "btc_h2":
			return `Bitcoin heeft geen inflatie`;
		case "btc_p1":
			return `Inflatie betekent dat je geld in de loop van de tijd minder koopt. Bitcoin is goed geld, omdat het geen inflatie kent.`;
		case "btc_p2_before":
			return `Het aanbod van ${c.longNameNom} is onbeperkt, wat betekent dat er altijd meer kan worden bijgedrukt.`;
		case "btc_p2_link":
			return `Bitcoin is schaars`;
		case "btc_p2_after":
			return `, met een vaste bovengrens van 21 miljoen bitcoin. Niemand kan er meer maken.`;
		case "btc_p3":
			return `Historisch gezien heeft Bitcoin in de loop van de tijd koopkracht gewonnen, terwijl ${c.longName} koopkracht heeft verloren. Veel mensen gebruiken Bitcoin als spaarrekening voor de lange termijn — geld dat ze jarenlang laten groeien zonder eraan te komen.`;
		case "btc_p4":
			return `Spaar jij liever in ${c.longName}, die in de loop van de tijd minder koopt? Of in Bitcoin, dat historisch gezien in de loop van de tijd meer is gaan kopen?`;
		case "freedom_h2":
			return `Bitcoin is ook een instrument voor vrijheid`;
		case "freedom_p1":
			return `Niemand controleert het Bitcoin-netwerk. Geen overheid en geen bedrijf runt het. Het is ontworpen om jouw vrijheid en jouw geld te beschermen.`;
		case "freedom_p2":
			return `Mensen over de hele wereld gebruiken Bitcoin nu al om hun vrijheid te verdedigen — zelfs wanneer hun overheden weigeren te helpen of proberen hen tegen te houden.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Koopkrachtverlies in 4 jaar";
		case "stat_source_bpr":
			return "Bron: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Meer informatie →",
	inflation_freedom_scarce_title: "Schaars",
	inflation_freedom_scarce_desc:
		"Er zullen ooit slechts 21 miljoen bitcoins bestaan. Niemand kan er meer drukken.",
	inflation_freedom_decentralized_title: "Decentraal",
	inflation_freedom_decentralized_desc:
		"Bitcoin wordt door geen enkele entiteit gecontroleerd — geen overheid, geen bedrijf.",
	inflation_freedom_permissionless_title: "Zonder toestemming",
	inflation_freedom_permissionless_desc:
		"Iedereen, overal, kan zich bij het netwerk aansluiten. Niemand kan jou tegenhouden.",
	inflation_freedom_sovereign_title: "Soeverein",
	inflation_freedom_sovereign_desc:
		"Een nieuw systeem, onafhankelijk van politici en hun gebroken beloften.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 miljoen",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Voor altijd vastgelegd",
	inflation_stat_bitcoin_source: "Bron: Bitcoin-whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Vandaag",
	inflation_stat_currency_counting: "en steeds meer...",
	inflation_stat_currency_detail_4yr_lost:
		"Koopkrachtverlies in 4 jaar",
	inflation_stat_currency_source_cpi: "Bron: FRED CPI →",
	inflation_stat_currency_source_debt:
		"Bron: FRED staatsschuld →",
	inflation_stat_currency_source_m1:
		"Bron: FRED geldhoeveelheid M1 →",
	inflation_stat_currency_source_m1_short: "Bron: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Koopkrachtwinst in 4 jaar",
	inflation_stat_btc_source_bpr: "Bron: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Canada",
	inflation_story_canada_desc:
		"Werkers kregen via Bitcoin weer toegang tot hun geld nadat hun bankrekeningen waren bevroren.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Demonstranten financierden hun beweging met Bitcoin nadat banken hadden geweigerd mee te werken.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Bitcoin-mining ruimde steenkoolafval op dat de overheid weigerde op te ruimen.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Bitcoin-mining hielp het elektriciteitsnet draaiende te houden tijdens een zware storm.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — grafiek van rendement over 4 jaar (alle valuta's)",
	sources_bitcoin_source_code:
		"Broncode van Bitcoin — bovengrens van 21 miljoen aanbod",
	sources_canadian_trucker:
		"Canadees truckersprotest — Bitcoin werd gebruikt om bevroren bankrekeningen te omzeilen (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin-aanbod- en mining-data",
	sources_nigeria_endsars:
		"Quartz Africa — hoe Bitcoin de EndSARS-protesten in Nigeria aandrijft",
	sources_pennsylvania_mining:
		"Bitcoin-mining in Pennsylvania redt methaan uit steenkoolafval (YouTube)",
	sources_texas_mining:
		"Bitcoin-mining en het elektriciteitsnet van Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin heeft geen inflatie, maar jouw geld wel.",
	inflation_choose: "Kies je valuta en bekijk het bewijs",
	inflation_choose_another: "← Kies een andere valuta",
	inflation_sticker_learn: "Ontdek hoe Bitcoin kan helpen.",
	inflation_sticker_lets_find_out: "Laten we het uitzoeken.",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (e.namespace !== "inflation") continue;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}

		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		let m = e.key.match(/^inflation_stat_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = "stat_" + m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		m = e.key.match(/^inflation_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		unmatched.push(e.key);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-inflation (nl): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
