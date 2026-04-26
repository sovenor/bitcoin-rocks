#!/usr/bin/env node
/**
 * Finnish manifest refresh — inflation namespace translator.
 *
 * Finnish is Finno-Ugric (like Estonian) with 15 cases and no gender.
 * We use informal 2nd-person singular "sinä/sä/sinun" throughout —
 * matches Finnish Bitcoin community norms (e.g. konsensus.fi, bittiraha).
 * Numbers use comma decimals + space thousand separators. "biljoona" = 10^12
 * (Finnish natively uses long scale: miljardi=10^9, biljoona=10^12).
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
	"fi.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
/*
 * longNameSeesIn  — plural inessive "in X" ("jos säästät X:ssa" shape).
 * noun            — nominative singular.
 * nounPlural      — nominative plural.
 * nounPartPl      — partitive plural ("enemmän X:ja").
 * label           — display label.
 * existenceTitle  — "X:a liikkeellä".
 * debtTitle       — "<Country> hallituksen kokonaisvelka".
 */

const CURRENCY = {
	usd: {
		longNameSeesIn: "Yhdysvaltain dollareissa",
		noun: "dollari",
		nounPlural: "dollarit",
		nounPartPl: "dollareita",
		label: "Yhdysvaltain dollari",
		existenceTitle: "Yhdysvaltain dollareita liikkeellä",
		debtTitle: "Yhdysvaltain liittovaltion kokonaisvelka",
	},
	eur: {
		longNameSeesIn: "euroissa",
		noun: "euro",
		nounPlural: "eurot",
		nounPartPl: "euroja",
		label: "Euro",
		existenceTitle: "Euroja liikkeellä",
		debtTitle: "Euroalueen hallitusten kokonaisvelka",
	},
	aud: {
		longNameSeesIn: "Australian dollareissa",
		noun: "Australian dollari",
		nounPlural: "Australian dollarit",
		nounPartPl: "Australian dollareita",
		label: "Australian dollari",
		existenceTitle: "Australian dollareita liikkeellä",
		debtTitle: "Australian hallituksen kokonaisvelka",
	},
	brl: {
		longNameSeesIn: "Brasilian realeissa",
		noun: "real",
		nounPlural: "realit",
		nounPartPl: "realeja",
		label: "Brasilian real",
		existenceTitle: "Realeja liikkeellä",
		debtTitle: "Brasilian hallituksen kokonaisvelka",
	},
	cad: {
		longNameSeesIn: "Kanadan dollareissa",
		noun: "Kanadan dollari",
		nounPlural: "Kanadan dollarit",
		nounPartPl: "Kanadan dollareita",
		label: "Kanadan dollari",
		existenceTitle: "Kanadan dollareita liikkeellä",
		debtTitle: "Kanadan hallituksen kokonaisvelka",
	},
	gbp: {
		longNameSeesIn: "Englannin punnissa",
		noun: "punta",
		nounPlural: "punnat",
		nounPartPl: "puntia",
		label: "Englannin punta",
		existenceTitle: "Puntia liikkeellä",
		debtTitle: "Yhdistyneen kuningaskunnan hallituksen kokonaisvelka",
	},
	ils: {
		longNameSeesIn: "Israelin sekeleissä",
		noun: "sekeli",
		nounPlural: "sekelit",
		nounPartPl: "sekeleitä",
		label: "Israelin sekeli",
		existenceTitle: "Sekeleitä liikkeellä",
		debtTitle: "Israelin hallituksen kokonaisvelka",
	},
	inr: {
		longNameSeesIn: "Intian rupioissa",
		noun: "rupia",
		nounPlural: "rupiat",
		nounPartPl: "rupioita",
		label: "Intian rupia",
		existenceTitle: "Rupioita liikkeellä",
		debtTitle: "Intian hallituksen kokonaisvelka",
	},
	jpy: {
		longNameSeesIn: "Japanin jeneissä",
		noun: "jeni",
		nounPlural: "jenit",
		nounPartPl: "jenejä",
		label: "Japanin jeni",
		existenceTitle: "Jenejä liikkeellä",
		debtTitle: "Japanin hallituksen kokonaisvelka",
	},
	mxn: {
		longNameSeesIn: "Meksikon pesoissa",
		noun: "peso",
		nounPlural: "pesot",
		nounPartPl: "pesoja",
		label: "Meksikon peso",
		existenceTitle: "Pesoja liikkeellä",
		debtTitle: "Meksikon hallituksen kokonaisvelka",
	},
	nzd: {
		longNameSeesIn: "Uuden-Seelannin dollareissa",
		noun: "Uuden-Seelannin dollari",
		nounPlural: "Uuden-Seelannin dollarit",
		nounPartPl: "Uuden-Seelannin dollareita",
		label: "Uuden-Seelannin dollari",
		existenceTitle: "Uuden-Seelannin dollareita liikkeellä",
		debtTitle: "Uuden-Seelannin hallituksen kokonaisvelka",
	},
	php: {
		longNameSeesIn: "Filippiinien pesoissa",
		noun: "peso",
		nounPlural: "pesot",
		nounPartPl: "pesoja",
		label: "Filippiinien peso",
		existenceTitle: "Pesoja liikkeellä",
		debtTitle: "Filippiinien hallituksen kokonaisvelka",
	},
	thb: {
		longNameSeesIn: "Thaimaan bahteissa",
		noun: "bahti",
		nounPlural: "bahtit",
		nounPartPl: "bahteja",
		label: "Thaimaan bahti",
		existenceTitle: "Bahteja liikkeellä",
		debtTitle: "Thaimaan hallituksen kokonaisvelka",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Jos säästät ${c.longNameSeesIn}, olet varmaan huomannut, että rahallasi saa joka vuosi vähemmän. Tarvitset enemmän ${c.nounPartPl} ostaaksesi saman verran tavaroita. Tarvitset enemmän ${c.nounPartPl} elintasosi ylläpitämiseen.`;
		case "intro_2":
			return `Mutta näin ei tarvitse olla.`;
		case "intro_highlight":
			return `Viimeisen neljän vuoden aikana bitcoinissa säästävät ovat nähneet elämänsä tulevan halvemmaksi.`;
		case "proof_h2":
			return `Tässä todiste: rahasi menettää arvoaan`;
		case "proof_p1":
			return `Pankkitilisi jokainen ${c.noun} saa vuosi vuodelta vähemmän aikaan. Näin tapahtuu, koska luotaville ${c.nounPlural.toLowerCase()} ei ole asetettu kiinteää ylärajaa.`;
		case "proof_p2":
			return `Tämä rajaton tarjonta on inflaation pääasiallinen syy. Viime vuosina liikkeellä olevien ${c.nounPlural.toLowerCase()} määrä on kasvanut jyrkästi.`;
		case "proof_p3":
			return `Kun tyhjästä luodaan lisää rahaa, kaikkien asioiden hinnat nousevat. Tämä koskee myös raaka-aineita, joita yritykset ostavat tuotteidensa valmistamiseen — mikä tarkoittaa sinulle korkeampia hintoja.`;
		case "proof_p4":
			return `Koska hallituksen velka jatkaa kasvuaan, rahaa painetaan lisää, sillä yhä harvemmat haluavat lainata hallitukselle.`;
		case "proof_p5_before":
			return `Jos sinä et voi lainata, et voi kuluttaa. Mutta kun hallitus`;
		case "proof_p5_link":
			return `ei pysty lainaamaan`;
		case "proof_p5_after":
			return `, se vain painaa lisää rahaa.`;
		case "proof_p6":
			return `Enemmän valtionvelkaa tarkoittaa enemmän rahanpainatusta. Enemmän rahanpainatusta tarkoittaa enemmän inflaatiota. Eikä pysähtymisestä ole merkkiäkään.`;
		case "btc_h2":
			return `Bitcoinissa ei ole inflaatiota`;
		case "btc_p1":
			return `Inflaatio tarkoittaa, että rahallasi saa ajan myötä vähemmän. Bitcoin on parempi raha, koska siinä ei ole inflaatiota.`;
		case "btc_p2_before":
			return `${c.label.replace(/^./, (ch) => ch.toLowerCase()) + "lla"} on rajaton tarjonta, mikä tarkoittaa, että sitä voidaan painaa lisää milloin tahansa.`;
		case "btc_p2_link":
			return `Bitcoin on niukkaa`;
		case "btc_p2_after":
			return `, ja sillä on kiinteä yläraja 21 miljoonaa bitcoinia. Kukaan ei voi luoda niitä lisää.`;
		case "btc_p3":
			return `Historiallisesti bitcoin on saanut ostovoimaa ajan myötä, kun taas ${c.nounPlural.toLowerCase()} on menettänyt sitä. Monet käyttävät bitcoinia pitkäaikaisena säästötilinä — rahana, jonka he antavat kasvaa vuosikausia koskematta siihen.`;
		case "btc_p4":
			return `Mieluumminko säästät ${c.longNameSeesIn}, joilla saa ajan myötä vähemmän? Vai bitcoinissa, jolla on historiallisesti saanut ajan myötä enemmän?`;
		case "freedom_h2":
			return `Bitcoin on myös vapauden työkalu`;
		case "freedom_p1":
			return `Kukaan ei hallitse bitcoin-verkkoa. Mikään hallitus tai yritys ei johda sitä. Se on suunniteltu suojaamaan sinun vapauttasi ja sinun rahaasi.`;
		case "freedom_p2":
			return `Ihmiset ympäri maailmaa käyttävät bitcoinia jo nyt vapautensa suojelemiseen — silloinkin, kun heidän hallituksensa kieltäytyvät auttamasta heitä tai yrittävät pysäyttää heidät.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Ostovoimaa menetetty 4 vuodessa";
		case "stat_source_bpr":
			return "Lähde: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Lue lisää →",
	inflation_freedom_scarce_title: "Niukka",
	inflation_freedom_scarce_desc:
		"Bitcoineja tulee olemaan vain 21 miljoonaa. Kukaan ei voi painaa niitä lisää.",
	inflation_freedom_decentralized_title: "Hajautettu",
	inflation_freedom_decentralized_desc:
		"Bitcoinia ei hallitse mikään yksittäinen taho — ei hallitus eikä yritys.",
	inflation_freedom_permissionless_title: "Lupaa vaatimaton",
	inflation_freedom_permissionless_desc:
		"Kuka tahansa, mistä tahansa, voi liittyä verkkoon. Kukaan ei voi pysäyttää sinua.",
	inflation_freedom_sovereign_title: "Suvereeni",
	inflation_freedom_sovereign_desc:
		"Uusi järjestelmä, joka on riippumaton poliitikoista ja heidän rikotuista lupauksistaan.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 miljoonaa",
	inflation_stat_bitcoin_numeric: "(21 000 000)",
	inflation_stat_bitcoin_detail: "Kiinteä ikuisesti",
	inflation_stat_bitcoin_source: "Lähde: Bitcoinin julkaisuteksti →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Tänään",
	inflation_stat_currency_counting: "ja kasvaa edelleen...",
	inflation_stat_currency_detail_4yr_lost:
		"Ostovoimaa menetetty 4 vuodessa",
	inflation_stat_currency_source_cpi: "Lähde: FRED CPI →",
	inflation_stat_currency_source_debt: "Lähde: FRED valtionvelka →",
	inflation_stat_currency_source_m1: "Lähde: FRED rahan tarjonta M1 →",
	inflation_stat_currency_source_m1_short: "Lähde: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Ostovoimaa saatu 4 vuodessa",
	inflation_stat_btc_source_bpr: "Lähde: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Työntekijät saivat bitcoinin avulla rahansa takaisin käyttöönsä, kun heidän pankkitilinsä jäädytettiin.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Mielenosoittajat käyttivät bitcoinia liikkeensä rahoittamiseen, kun pankit kieltäytyivät tekemästä yhteistyötä heidän kanssaan.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Bitcoin-louhinta puhdisti kivihiilijätettä, jota hallitus ei halunnut käsitellä.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Bitcoin-louhinta auttoi pitämään sähköverkkoa käynnissä suuren myrskyn aikana.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 vuoden tuottokäyrä (kaikki valuutat)",
	sources_bitcoin_source_code:
		"Bitcoinin lähdekoodi — 21 miljoonan tarjonnan yläraja",
	sources_canadian_trucker:
		"Kanadan rekkakuskien protesti — bitcoinia käytettiin jäädytettyjen pankkitilien kiertämiseen (YouTube)",
	sources_mempool_space:
		"Mempool.space — bitcoinin tarjonta- ja louhintatiedot",
	sources_nigeria_endsars:
		"Quartz Africa — miten bitcoin tukee Nigerian EndSARS-protesteja",
	sources_pennsylvania_mining:
		"Bitcoin-louhinta Pennsylvaniassa pelastaa metaania kivihiilijätteestä (YouTube)",
	sources_texas_mining:
		"Bitcoin-louhinta ja Texasin sähköverkko (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoinissa ei ole inflaatiota, mutta rahassasi on.",
	inflation_choose: "Valitse valuuttasi ja katso todisteet",
	inflation_choose_another: "← Valitse toinen valuutta",
	inflation_sticker_learn: "Opi, miten bitcoin voi auttaa.",
	inflation_sticker_lets_find_out: "Otetaan selvää.",
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
		`translate-inflation (fi): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
