#!/usr/bin/env node
/**
 * Basque (Euskara) manifest refresh — inflation namespace translator.
 *
 * Handles the per-currency keys (13 currencies × ~25 suffixes) plus the
 * shared non-currency labels / stories / sources / manifest-changed keys.
 *
 * Basque is a language isolate (ergative-absolutive, agglutinative, 0
 * gender). We use the standard 2nd-person singular "zu / zuk / zure"
 * throughout — widely understood in formal/educational contexts and
 * matches Basque Bitcoin community norms. Numbers use comma decimals +
 * period thousands.
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
	"eu.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
/*
 * longNameSeesIn  — "X-etan" inessive plural ("X-etan aurrezten baduzu").
 * noun            — absolutive singular.
 * nounPlural      — absolutive plural.
 * nounPartPl      — partitive plural ("X gehiagorik").
 * label           — display label (absolutive singular, capitalised).
 * existenceTitle  — "Zirkulazioan dauden X-ak".
 * debtTitle       — country-specific "<Country>-ko gobernuaren zor totala".
 */

const CURRENCY = {
	usd: {
		longNameSeesIn: "AEBko dolarretan",
		noun: "dolarra",
		nounPlural: "dolarrak",
		nounPartPl: "dolar",
		label: "AEBko dolarra",
		existenceTitle: "Zirkulazioan dauden AEBko dolarrak",
		debtTitle: "AEBko gobernu federalaren zor totala",
	},
	eur: {
		longNameSeesIn: "euroetan",
		noun: "euroa",
		nounPlural: "euroak",
		nounPartPl: "euro",
		label: "Euroa",
		existenceTitle: "Zirkulazioan dauden euroak",
		debtTitle: "Eurogunearen gobernuen zor totala",
	},
	aud: {
		longNameSeesIn: "Australiako dolarretan",
		noun: "Australiako dolarra",
		nounPlural: "Australiako dolarrak",
		nounPartPl: "Australiako dolar",
		label: "Australiako dolarra",
		existenceTitle: "Zirkulazioan dauden Australiako dolarrak",
		debtTitle: "Australiako gobernuaren zor totala",
	},
	brl: {
		longNameSeesIn: "Brasilgo errealetan",
		noun: "erreala",
		nounPlural: "errealak",
		nounPartPl: "erreal",
		label: "Brasilgo erreala",
		existenceTitle: "Zirkulazioan dauden errealak",
		debtTitle: "Brasilgo gobernuaren zor totala",
	},
	cad: {
		longNameSeesIn: "Kanadako dolarretan",
		noun: "Kanadako dolarra",
		nounPlural: "Kanadako dolarrak",
		nounPartPl: "Kanadako dolar",
		label: "Kanadako dolarra",
		existenceTitle: "Zirkulazioan dauden Kanadako dolarrak",
		debtTitle: "Kanadako gobernuaren zor totala",
	},
	gbp: {
		longNameSeesIn: "libera britainiarretan",
		noun: "libera",
		nounPlural: "liberak",
		nounPartPl: "libera",
		label: "Libera britainiarra",
		existenceTitle: "Zirkulazioan dauden liberak",
		debtTitle: "Erresuma Batuko gobernuaren zor totala",
	},
	ils: {
		longNameSeesIn: "Israelgo shekeletan",
		noun: "shekela",
		nounPlural: "shekelak",
		nounPartPl: "shekel",
		label: "Israelgo shekela",
		existenceTitle: "Zirkulazioan dauden shekelak",
		debtTitle: "Israelgo gobernuaren zor totala",
	},
	inr: {
		longNameSeesIn: "Indiako rupietan",
		noun: "rupia",
		nounPlural: "rupiak",
		nounPartPl: "rupia",
		label: "Indiako rupia",
		existenceTitle: "Zirkulazioan dauden rupiak",
		debtTitle: "Indiako gobernuaren zor totala",
	},
	jpy: {
		longNameSeesIn: "Japoniako yenetan",
		noun: "yena",
		nounPlural: "yenak",
		nounPartPl: "yen",
		label: "Japoniako yena",
		existenceTitle: "Zirkulazioan dauden yenak",
		debtTitle: "Japoniako gobernuaren zor totala",
	},
	mxn: {
		longNameSeesIn: "Mexikoko pesoetan",
		noun: "pesoa",
		nounPlural: "pesoak",
		nounPartPl: "peso",
		label: "Mexikoko pesoa",
		existenceTitle: "Zirkulazioan dauden pesoak",
		debtTitle: "Mexikoko gobernuaren zor totala",
	},
	nzd: {
		longNameSeesIn: "Zeelanda Berriko dolarretan",
		noun: "Zeelanda Berriko dolarra",
		nounPlural: "Zeelanda Berriko dolarrak",
		nounPartPl: "Zeelanda Berriko dolar",
		label: "Zeelanda Berriko dolarra",
		existenceTitle: "Zirkulazioan dauden Zeelanda Berriko dolarrak",
		debtTitle: "Zeelanda Berriko gobernuaren zor totala",
	},
	php: {
		longNameSeesIn: "Filipinetako pesoetan",
		noun: "pesoa",
		nounPlural: "pesoak",
		nounPartPl: "peso",
		label: "Filipinetako pesoa",
		existenceTitle: "Zirkulazioan dauden pesoak",
		debtTitle: "Filipinetako gobernuaren zor totala",
	},
	thb: {
		longNameSeesIn: "Thailandiako bahtetan",
		noun: "bahta",
		nounPlural: "bahtak",
		nounPartPl: "baht",
		label: "Thailandiako bahta",
		existenceTitle: "Zirkulazioan dauden bahtak",
		debtTitle: "Thailandiako gobernuaren zor totala",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `${c.longNameSeesIn} aurrezten baduzu, seguru asko ohartu zara zure diruak gero eta gutxiago ematen dizula. ${c.nounPartPl} gehiago behar dituzu gauza berberak erosteko. ${c.nounPartPl} gehiago behar dituzu zure bizi-maila mantentzeko.`;
		case "intro_2":
			return `Baina ez du horrela izan behar.`;
		case "intro_highlight":
			return `Azken lau urteotan, Bitcoinen aurrezten dutenek ikusi dute nola ari den beren bizitza merkatzen.`;
		case "proof_h2":
			return `Hona hemen froga: zure diruak balioa galtzen du`;
		case "proof_p1":
			return `Zure banku-kontuan duzun ${c.noun} bakoitzak gero eta gutxiago erosten du urtetik urtera. Horrela gertatzen da sortzen diren ${c.nounPlural.toLowerCase()} kopuruari ez zaiolako goiko mugarik jartzen.`;
		case "proof_p2":
			return `Eskaintza mugagabe hori da inflazioaren arrazoi nagusia. Azken urteotan zirkulazioan dauden ${c.nounPlural.toLowerCase()} kopurua nabarmen hazi da.`;
		case "proof_p3":
			return `Hutsetik diru gehiago sortzen denean, gauza guztien prezioak igotzen dira. Horrek enpresek produktuak egiteko erosten dituzten lehengaiak ere biltzen ditu — eta horrek, aldi berean, prezio altuagoak esan nahi ditu zuretzat.`;
		case "proof_p4":
			return `Gobernuaren zorra handitzen doan heinean, diru gehiago inprimatzen da, gero eta jende gutxiagok nahi duelako gobernuari mailegatu.`;
		case "proof_p5_before":
			return `Mailegurik lortu ezin baduzu, ezin duzu gastatu. Baina gobernuak`;
		case "proof_p5_link":
			return `ezin badu mailegatu`;
		case "proof_p5_after":
			return `, besterik gabe diru gehiago inprimatzen du.`;
		case "proof_p6":
			return `Gobernu-zor gehiago diru inprimaketa gehiago da. Diru inprimaketa gehiago inflazio gehiago da. Eta ez dago geldituko denaren zantzurik.`;
		case "btc_h2":
			return `Bitcoinek ez du inflaziorik`;
		case "btc_p1":
			return `Inflazioa zure diruak denborarekin gutxiago erostea esan nahi du. Bitcoin diru hobea da, ez duelako inflaziorik.`;
		case "btc_p2_before":
			return `${c.longNameSeesIn.charAt(0).toUpperCase() + c.longNameSeesIn.slice(1)}k eskaintza mugagabea dute, hau da, edozein unetan gehiago inprima daitezke.`;
		case "btc_p2_link":
			return `Bitcoin urria da`;
		case "btc_p2_after":
			return `, 21 milioi Bitcoineko gehienezko eskaintza duelako. Inork ezin du Bitcoin gehiago sortu.`;
		case "btc_p3":
			return `Historikoki, Bitcoinek erosteko ahalmena irabazi du denborarekin, ${c.longNameSeesIn.replace(/etan$/, "ek")} galdu duen bitartean. Jende askok Bitcoin epe luzeko aurrezki-kontu gisa erabiltzen du — urteetan hazten uzten duten dirua, ukitu gabe.`;
		case "btc_p4":
			return `Zer nahiago zenuke: ${c.longNameSeesIn} aurreztu, denborarekin gutxiago erosten duten ${c.nounPlural.toLowerCase()}, ala Bitcoinetan aurreztu, historikoki gehiago erosi duena?`;
		case "freedom_h2":
			return `Bitcoin askatasunerako tresna ere bada`;
		case "freedom_p1":
			return `Bitcoin sarea ez da inorena. Ez du gobernu edo korporaziorik kontrolatzen. Zure askatasuna eta zure dirua babesteko diseinatuta dago.`;
		case "freedom_p2":
			return `Mundu osoko jendea jada erabiltzen ari da Bitcoin beren askatasuna babesteko — baita beren gobernuek lagundu nahi ez dietenean edo gelditzen saiatzen direnean ere.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "4 urtetan galdutako erosteko ahalmena";
		case "stat_source_bpr":
			return "Iturria: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Jakin gehiago →",
	inflation_freedom_scarce_title: "Urria",
	inflation_freedom_scarce_desc:
		"21 milioi Bitcoin baino ez dira egongo inoiz. Inork ezin du gehiago inprimatu.",
	inflation_freedom_decentralized_title: "Deszentralizatua",
	inflation_freedom_decentralized_desc:
		"Ez da erakunde bakar batek kontrolatzen Bitcoin — ez gobernu ez enpresak.",
	inflation_freedom_permissionless_title: "Baimenik gabekoa",
	inflation_freedom_permissionless_desc:
		"Edonork, edonondik, sareara konekta daiteke. Inork ezin zaitu gelditu.",
	inflation_freedom_sovereign_title: "Subiranoa",
	inflation_freedom_sovereign_desc:
		"Politikari eta beren promesa hautsitik aske dagoen sistema berria.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milioi",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Betirako finkatua",
	inflation_stat_bitcoin_source: "Iturria: Bitcoinen txosten zuria →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Gaur",
	inflation_stat_currency_counting: "eta hazten jarraitzen du...",
	inflation_stat_currency_detail_4yr_lost:
		"4 urtetan galdutako erosteko ahalmena",
	inflation_stat_currency_source_cpi: "Iturria: FRED CPI →",
	inflation_stat_currency_source_debt: "Iturria: FRED gobernu-zorra →",
	inflation_stat_currency_source_m1: "Iturria: FRED diru-eskaintza M1 →",
	inflation_stat_currency_source_m1_short: "Iturria: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "4 urtetan irabazitako erosteko ahalmena",
	inflation_stat_btc_source_bpr: "Iturria: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Langileek Bitcoin erabili zuten beren diruaren sarbidea berreskuratzeko, banku-kontuak izoztu ondoren.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Manifestariek beren mugimendua finantzatzeko Bitcoin erabili zuten, bankuek haiekin lan egiteari uko egin ondoren.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Bitcoin meatzaritzak ikatz-hondakinak garbitu zituen, gobernuak konpondu nahi ez zituenak.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Bitcoin meatzaritzak sare elektrikoa martxan mantentzen lagundu zuen ekaitz handi batean.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 urteko errentagarritasun-grafikoa (moneta guztiak)",
	sources_bitcoin_source_code:
		"Bitcoinen iturburu-kodea — 21 milioiko eskaintza-muga",
	sources_canadian_trucker:
		"Kanadako kamioilarien protesta — Bitcoin erabili zen banku-kontu izoztuak saihesteko (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoinen eskaintzaren eta meatzaritzaren datuak",
	sources_nigeria_endsars:
		"Quartz Africa — Nola elikatzen duen Bitcoinek Nigeriako EndSARS protesta",
	sources_pennsylvania_mining:
		"Bitcoin meatzaritzak metanoa salbatzen du Pennsylvaniako ikatz-hondakinetatik (YouTube)",
	sources_texas_mining:
		"Bitcoin meatzaritza eta Texasko sare elektrikoa (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoinek ez du inflaziorik, baina zure diruak bai.",
	inflation_choose: "Aukeratu zure moneta eta ikusi froga",
	inflation_choose_another: "← Aukeratu beste moneta bat",
	inflation_sticker_learn: "Ikasi nola lagun dezakeen Bitcoinek.",
	inflation_sticker_lets_find_out: "Dezagun jakin.",
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
		`translate-inflation (eu): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
