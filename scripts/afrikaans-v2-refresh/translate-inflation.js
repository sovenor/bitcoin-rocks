#!/usr/bin/env node
/**
 * Afrikaans V2 refresh — inflation namespace translator.
 *
 * Fills `targetTranslation` for the 365 entries in the `inflation`
 * namespace of scripts/i18n-audit/reports/af.json.
 *
 * Structure:
 *   - 13 currencies × 25 templated keys = 325 per-currency entries.
 *   - 2 inflation_btc_* keys
 *   - 38 non-currency keys (freedom cards, stat cards, stories, sources, inflation_euro).
 *
 * Idempotent: re-running just overwrites targetTranslation on the same
 * entries.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"i18n-audit",
	"reports",
	"af.json"
);

/* ─────────────── Per-currency labels & terms ─────────────── */

// Currency nouns in Afrikaans (singular & plural). Each currency object also
// carries the phrase used for "in <currency>", "<currency> in existence",
// "<currency> government debt" etc.
const CURRENCY = {
	usd: {
		longName: "VS-dollar",          // "US Dollar" (singular, capitalised)
		longNamePlural: "VS-dollar",    // same — Afrikaans doesn't pluralise here
		noun: "dollars",                // lowercase noun used in body copy
		nounArticle: "die dollar",      // "the dollar" — used when referring as a whole
		inflationIntroName: "VS-dollar", // used in "If you save in US Dollars"
		nameIntroSecond: "dollars",     // used in "It takes more dollars to buy …"
		label: "VS-DOLLAR",
		existenceTitle: "DOLLARS IN OMLOOP",
		debtTitle: "TOTALE FEDERALE SKULD",
	},
	eur: {
		longName: "Euro",
		longNamePlural: "Euro",
		noun: "euros",
		nounArticle: "die euro",
		inflationIntroName: "Euro",
		nameIntroSecond: "euros",
		label: "EURO",
		existenceTitle: "EUROS IN OMLOOP",
		debtTitle: "REGERINGSKULD VAN DIE EUROSONE",
	},
	aud: {
		longName: "Australiese dollar",
		longNamePlural: "Australiese dollar",
		noun: "dollars",
		nounArticle: "die dollar",
		inflationIntroName: "Australiese dollar",
		nameIntroSecond: "dollars",
		label: "AUSTRALIESE DOLLAR",
		existenceTitle: "AUSTRALIESE DOLLARS IN OMLOOP",
		debtTitle: "AUSTRALIESE REGERINGSKULD",
	},
	brl: {
		longName: "Brasiliaanse real",
		longNamePlural: "Brasiliaanse real",
		noun: "reais",
		nounArticle: "die real",
		inflationIntroName: "Brasiliaanse real",
		nameIntroSecond: "reais",
		label: "BRASILIAANSE REAL",
		existenceTitle: "REAIS IN OMLOOP",
		debtTitle: "BRASILIAANSE REGERINGSKULD",
	},
	cad: {
		longName: "Kanadese dollar",
		longNamePlural: "Kanadese dollar",
		noun: "dollars",
		nounArticle: "die dollar",
		inflationIntroName: "Kanadese dollar",
		nameIntroSecond: "dollars",
		label: "KANADESE DOLLAR",
		existenceTitle: "KANADESE DOLLARS IN OMLOOP",
		debtTitle: "KANADESE REGERINGSKULD",
	},
	gbp: {
		longName: "Britse pond",
		longNamePlural: "Britse pond",
		noun: "ponde",
		nounArticle: "die pond",
		inflationIntroName: "Britse pond",
		nameIntroSecond: "ponde",
		label: "BRITSE POND",
		existenceTitle: "PONDE IN OMLOOP",
		debtTitle: "BRITSE REGERINGSKULD",
	},
	ils: {
		longName: "Israeliese sjekel",
		longNamePlural: "Israeliese sjekel",
		noun: "sjekels",
		nounArticle: "die sjekel",
		inflationIntroName: "Israeliese sjekel",
		nameIntroSecond: "sjekels",
		label: "ISRAELIESE SJEKEL",
		existenceTitle: "SJEKELS IN OMLOOP",
		debtTitle: "ISRAELIESE REGERINGSKULD",
	},
	inr: {
		longName: "Indiese roepee",
		longNamePlural: "Indiese roepees",
		noun: "roepees",
		nounArticle: "die roepee",
		inflationIntroName: "Indiese roepee",
		nameIntroSecond: "roepees",
		label: "INDIESE ROEPEE",
		existenceTitle: "ROEPEES IN OMLOOP",
		debtTitle: "INDIESE REGERINGSKULD",
	},
	jpy: {
		longName: "Japannese jen",
		longNamePlural: "Japannese jen",
		noun: "jen",
		nounArticle: "die jen",
		inflationIntroName: "Japannese jen",
		nameIntroSecond: "jen",
		label: "JAPANNESE JEN",
		existenceTitle: "JEN IN OMLOOP",
		debtTitle: "JAPANNESE REGERINGSKULD",
	},
	mxn: {
		longName: "Mexikaanse peso",
		longNamePlural: "Mexikaanse peso",
		noun: "peso's",
		nounArticle: "die peso",
		inflationIntroName: "Mexikaanse peso",
		nameIntroSecond: "peso's",
		label: "MEXIKAANSE PESO",
		existenceTitle: "PESO'S IN OMLOOP",
		debtTitle: "MEXIKAANSE REGERINGSKULD",
	},
	nzd: {
		longName: "Nieu-Seelandse dollar",
		longNamePlural: "Nieu-Seelandse dollar",
		noun: "dollars",
		nounArticle: "die dollar",
		inflationIntroName: "Nieu-Seelandse dollar",
		nameIntroSecond: "dollars",
		label: "NIEU-SEELANDSE DOLLAR",
		existenceTitle: "NIEU-SEELANDSE DOLLARS IN OMLOOP",
		debtTitle: "NIEU-SEELANDSE REGERINGSKULD",
	},
	php: {
		longName: "Filippynse peso",
		longNamePlural: "Filippynse peso",
		noun: "peso's",
		nounArticle: "die peso",
		inflationIntroName: "Filippynse peso",
		nameIntroSecond: "peso's",
		label: "FILIPPYNSE PESO",
		existenceTitle: "PESO'S IN OMLOOP",
		debtTitle: "FILIPPYNSE REGERINGSKULD",
	},
	thb: {
		longName: "Thaise baht",
		longNamePlural: "Thaise baht",
		noun: "baht",
		nounArticle: "die baht",
		inflationIntroName: "Thaise baht",
		nameIntroSecond: "baht",
		label: "THAISE BAHT",
		existenceTitle: "BAHT IN OMLOOP",
		debtTitle: "THAISE REGERINGSKULD",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `As jy in ${c.inflationIntroName} spaar, het jy waarskynlik opgelet dat dit jou elke jaar minder koop. Dit verg meer ${c.nameIntroSecond} om dieselfde hoeveelheid kos te koop. Jy het meer ${c.nameIntroSecond} nodig om jou lewensgehalte te handhaaf.`;
		case "intro_2":
			return `Maar dit hoef nie so te wees nie.`;
		case "intro_highlight":
			return `Mense wat die afgelope 4 jaar in Bitcoin gespaar het, het die lewe goedkoper sien raak.`;
		case "proof_h2":
			return `Hier is die bewys: jou geld verloor waarde`;
		case "proof_p1":
			return `Die ${c.noun} in jou bankrekening koop jou elke jaar minder. Dit is omdat daar geen vaste limiet is op hoeveel ${c.noun} geskep kan word nie.`;
		case "proof_p2":
			return `Hierdie onbeperkte aanbod is die grondoorsaak van inflasie. Oor die laaste paar jaar het die totale hoeveelheid ${c.noun} in omloop dramaties toegeneem.`;
		case "proof_p3":
			return `Wanneer meer geld uit niks geskep word nie, styg die prys van alles. Dit sluit die roumateriale in wat maatskappye koop om hul produkte te maak — wat beteken hoër pryse vir jou.`;
		case "proof_p4":
			return `En wanneer die regering hul skuld aanhou verhoog, word nog meer geld gedruk omdat minder mense vir hulle wil leen.`;
		case "proof_p5_before":
			return `As jy nie 'n lening kan kry nie, kan jy nie geld spandeer nie. Maar as die regering`;
		case "proof_p5_link":
			return `nie 'n lening kan kry nie`;
		case "proof_p5_after":
			return `, druk hulle eenvoudig die geld.`;
		case "proof_p6":
			return `Meer regeringskuld beteken meer gelddrukwerk. Meer gelddrukwerk beteken meer inflasie. En daar is geen teken dat dit gaan stop nie.`;
		case "btc_h2":
			return `Bitcoin het nie inflasie nie`;
		case "btc_p1":
			return `Inflasie beteken dat jou geld jou oor tyd minder koop. Bitcoin is beter geld want dit het nie inflasie nie.`;
		case "btc_p2_before": {
			// capitalise noun for start-of-sentence
			const cap = c.noun.charAt(0).toUpperCase() + c.noun.slice(1);
			return `${cap} het 'n onbeperkte aanbod, wat beteken dat meer ten alle tye gedruk kan word.`;
		}
		case "btc_p2_link":
			return `Bitcoin is skaars`;
		case "btc_p2_after":
			return `want dit het 'n maksimum aanbod van 21 miljoen Bitcoin. Niemand kan meer Bitcoin druk nie.`;
		case "btc_p3":
			return `Histories het Bitcoin oor tyd koopkrag gewen terwyl ${c.nounArticle} dit verloor het. Baie mense gebruik Bitcoin as hul langtermyn-spaarrekening: geld wat hulle kan laat staan en vir etlike jare kan laat groei.`;
		case "btc_p4":
			return `Sou jy eerder in ${c.noun} spaar wat jou oor tyd minder koop? Of in Bitcoin spaar wat jou histories oor tyd meer gekoop het?`;
		case "freedom_h2":
			return `Bitcoin is ook 'n instrument vir vryheid`;
		case "freedom_p1":
			return `Die Bitcoin-netwerk word deur niemand besit nie. Dit word nie deur enige regering of korporasie beheer nie. Dit is ontwerp om jou vryheid te handhaaf en jou geld te beskerm.`;
		case "freedom_p2":
			return `Mense regoor die wêreld gebruik reeds Bitcoin om hul vryheid te beskerm — selfs wanneer hul eie regerings geweier het om te help of probeer het om hulle te stop.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// H1 + freedom cards
	inflation_h1_orange: "Bitcoin het nie inflasie nie, maar jou geld wel.",
	inflation_freedom_learn_more: "Leer meer →",
	inflation_freedom_scarce_title: "Skaars",
	inflation_freedom_scarce_desc: "Daar sal ooit net 21 miljoen Bitcoin wees. Niemand kan meer druk nie.",
	inflation_freedom_decentralized_title: "Gedesentraliseerd",
	inflation_freedom_decentralized_desc: "Geen enkele entiteit — geen regering, geen korporasie — beheer Bitcoin nie.",
	inflation_freedom_permissionless_title: "Sonder toestemming",
	inflation_freedom_permissionless_desc: "Enigeen, enige plek, kan by die netwerk aansluit. Niemand kan jou stop nie.",
	inflation_freedom_sovereign_title: "Soewerein",
	inflation_freedom_sovereign_desc: "'n Nuwe stelsel, onafhanklik van politici en hul gebreekte beloftes.",

	// Bitcoin stat card (the one non-fiat card)
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "21 Miljoen",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Vir altyd vas",
	inflation_stat_bitcoin_source: "Bron: Bitcoin-witskrif →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "VANDAG",
	inflation_stat_currency_counting: "En steeds tel...",
	inflation_stat_currency_detail_4yr_lost: "Koopkrag wat oor 4 jaar verloor is",
	inflation_stat_currency_source_cpi: "Bron: FRED CPI →",
	inflation_stat_currency_source_debt: "Bron: FRED Regeringskuld →",
	inflation_stat_currency_source_m1: "Bron: FRED Smal Geldvoorraad →",
	inflation_stat_currency_source_m1_short: "Bron: FRED →",

	// Bitcoin price report "gained" stat
	inflation_stat_btc_detail_4yr: "Koopkrag wat oor 4 jaar verwerf is",
	inflation_stat_btc_source_bpr: "Bron: Bitcoin-prysverslag →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Werkers het Bitcoin gebruik om toegang tot geld te kry nadat hul bankrekeninge gevries is.",
	inflation_story_nigeria_title: "Nigerië",
	inflation_story_nigeria_desc:
		"Betogers het Bitcoin gebruik om hul beweging te finansier nadat banke hulle afgesny het.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Bitcoin-mynbou het steenkoolafval skoongemaak wat die regering geweier het om te hanteer.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Bitcoin-mynbou het gehelp om die ligte aan te hou tydens 'n geweldige storm.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin-prysverslag — prestasiekaarte oor 4 jaar (alle geldeenhede)",
	sources_bitcoin_source_code: "Bitcoin-bronkode — aanbodplafon van 21 miljoen",
	sources_canadian_trucker:
		"Kanadese vragmotorbestuurdersbetoging — Bitcoin gebruik om gevriesde bankrekeninge te omseil (YouTube)",
	sources_mempool_space: "Mempool.space — Bitcoin-aanbod en -mynbou-data",
	sources_nigeria_endsars:
		"Quartz Africa — Hoe Bitcoin Nigerië se EndSARS-betogings aangedryf het",
	sources_pennsylvania_mining:
		"Bitcoin-mynbou in Pennsylvania herwin metaan-afval (YouTube)",
	sources_texas_mining: "Bitcoin-mynbou in Texas en die elektriese netwerk (YouTube)",

	// Legacy
	inflation_euro: "EURO",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (e.namespace !== "inflation") continue;
		if (e.targetTranslation !== null && e.targetTranslation !== undefined) {
			// already filled
			skipped++;
			continue;
		}

		// Direct non-currency keys
		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		// Per-currency keys
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
			// Skip btc here — it's a one-off (not per-currency)
			if (code === "btc") {
				// inflation_btc_* will be handled below
			} else {
				const value = t(code, suffix);
				if (value !== null) {
					e.targetTranslation = value;
					filled++;
					continue;
				}
			}
		}

		// Fallback: inflation_btc_*
		const BTC = {
			inflation_btc_scarce_title: "Bitcoin is skaars",
			inflation_btc_scarce_desc:
				"Daar sal ooit net 21 miljoen Bitcoin wees. Niemand kan meer druk nie.",
		};
		if (Object.prototype.hasOwnProperty.call(BTC, e.key)) {
			e.targetTranslation = BTC[e.key];
			filled++;
			continue;
		}

		console.log("  [UNMATCHED]", e.key, "::", JSON.stringify(e.englishValue).slice(0, 80));
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(`translate-inflation: filled ${filled}, already-done ${skipped}`);
}

main();
