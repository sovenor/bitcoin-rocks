#!/usr/bin/env node
/**
 * Estonian manifest refresh — inflation namespace translator.
 *
 * Handles the per-currency keys (13 currencies × ~25 suffixes) plus the
 * shared non-currency labels / stories / sources / manifest-changed keys.
 *
 * Estonian is Finno-Ugric (no grammatical gender, 14 cases). We use
 * informal 2nd-person singular "sa/sina" throughout, matching Estonian
 * Bitcoin community norms. Numbers use comma decimals + space thousands.
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
	"et.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
/*
 * longName        — partitive-plural or nominative descriptor (used after "kui
 *                    hoiustad X-is" / "X on kaotanud"). Nominative plural used.
 * longNameSeesIn  — "in X-es" inessive plural ("kui hoiustad X-es"). Used with
 *                    the preposition shape the sentences need.
 * longNamePartSg  — partitive singular (used after numerals).
 * noun            — nominative singular.
 * nounPlural      — nominative plural.
 * nounPartPl      — partitive plural ("rohkem X-e").
 * label           — display label (nominative singular, capitalised).
 * existenceTitle  — "X-id ringluses".
 * debtTitle       — country-specific "<Country> valitsuse koguvõlg".
 */

const CURRENCY = {
	usd: {
		longNameSeesIn: "USA dollarites",
		noun: "dollar",
		nounPlural: "dollarid",
		nounPartPl: "dollareid",
		label: "USA dollar",
		existenceTitle: "USA dollarit ringluses",
		debtTitle: "USA föderaalvalitsuse koguvõlg",
	},
	eur: {
		longNameSeesIn: "eurodes",
		noun: "euro",
		nounPlural: "eurod",
		nounPartPl: "eurosid",
		label: "Euro",
		existenceTitle: "Eurot ringluses",
		debtTitle: "Eurotsooni valitsuste koguvõlg",
	},
	aud: {
		longNameSeesIn: "Austraalia dollarites",
		noun: "Austraalia dollar",
		nounPlural: "Austraalia dollarid",
		nounPartPl: "Austraalia dollareid",
		label: "Austraalia dollar",
		existenceTitle: "Austraalia dollarit ringluses",
		debtTitle: "Austraalia valitsuse koguvõlg",
	},
	brl: {
		longNameSeesIn: "Brasiilia reaalides",
		noun: "reaal",
		nounPlural: "reaalid",
		nounPartPl: "reaale",
		label: "Brasiilia reaal",
		existenceTitle: "Reaali ringluses",
		debtTitle: "Brasiilia valitsuse koguvõlg",
	},
	cad: {
		longNameSeesIn: "Kanada dollarites",
		noun: "Kanada dollar",
		nounPlural: "Kanada dollarid",
		nounPartPl: "Kanada dollareid",
		label: "Kanada dollar",
		existenceTitle: "Kanada dollarit ringluses",
		debtTitle: "Kanada valitsuse koguvõlg",
	},
	gbp: {
		longNameSeesIn: "Briti naelades",
		noun: "nael",
		nounPlural: "naelad",
		nounPartPl: "naelu",
		label: "Briti nael",
		existenceTitle: "Naela ringluses",
		debtTitle: "Ühendkuningriigi valitsuse koguvõlg",
	},
	ils: {
		longNameSeesIn: "Iisraeli seeklites",
		noun: "seekel",
		nounPlural: "seeklid",
		nounPartPl: "seekleid",
		label: "Iisraeli seekel",
		existenceTitle: "Seeklit ringluses",
		debtTitle: "Iisraeli valitsuse koguvõlg",
	},
	inr: {
		longNameSeesIn: "India ruupiates",
		noun: "ruupia",
		nounPlural: "ruupiad",
		nounPartPl: "ruupiaid",
		label: "India ruupia",
		existenceTitle: "Ruupiat ringluses",
		debtTitle: "India valitsuse koguvõlg",
	},
	jpy: {
		longNameSeesIn: "Jaapani jeenides",
		noun: "jeen",
		nounPlural: "jeenid",
		nounPartPl: "jeene",
		label: "Jaapani jeen",
		existenceTitle: "Jeeni ringluses",
		debtTitle: "Jaapani valitsuse koguvõlg",
	},
	mxn: {
		longNameSeesIn: "Mehhiko peesodes",
		noun: "peeso",
		nounPlural: "peesod",
		nounPartPl: "peesosid",
		label: "Mehhiko peeso",
		existenceTitle: "Peesot ringluses",
		debtTitle: "Mehhiko valitsuse koguvõlg",
	},
	nzd: {
		longNameSeesIn: "Uus-Meremaa dollarites",
		noun: "Uus-Meremaa dollar",
		nounPlural: "Uus-Meremaa dollarid",
		nounPartPl: "Uus-Meremaa dollareid",
		label: "Uus-Meremaa dollar",
		existenceTitle: "Uus-Meremaa dollarit ringluses",
		debtTitle: "Uus-Meremaa valitsuse koguvõlg",
	},
	php: {
		longNameSeesIn: "Filipiinide peesodes",
		noun: "peeso",
		nounPlural: "peesod",
		nounPartPl: "peesosid",
		label: "Filipiinide peeso",
		existenceTitle: "Peesot ringluses",
		debtTitle: "Filipiinide valitsuse koguvõlg",
	},
	thb: {
		longNameSeesIn: "Tai bahtides",
		noun: "baht",
		nounPlural: "bahid",
		nounPartPl: "bahte",
		label: "Tai baht",
		existenceTitle: "Bahti ringluses",
		debtTitle: "Tai valitsuse koguvõlg",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Kui sa hoiustad ${c.longNameSeesIn}, oled ilmselt märganud, et sinu raha eest saab iga aastaga vähem. Sul on vaja rohkem ${c.nounPartPl}, et osta sama palju asju. Sul on vaja rohkem ${c.nounPartPl}, et säilitada oma elatustaset.`;
		case "intro_2":
			return `Aga see ei pea nii olema.`;
		case "intro_highlight":
			return `Viimase nelja aasta jooksul näevad need, kes hoiustavad bitcoinis, kuidas nende elu muutub odavamaks.`;
		case "proof_h2":
			return `Siin on tõestus: sinu raha kaotab väärtust`;
		case "proof_p1":
			return `Iga ${c.noun} sinu pangakontol saab iga aastaga osta vähem. See on nii, sest loodud ${c.nounPlural.toLowerCase()} kogusele ei ole kindlat ülempiiri.`;
		case "proof_p2":
			return `See piiramatu pakkumine on inflatsiooni peamine põhjus. Viimastel aastatel on ringluses olevate ${c.nounPlural.toLowerCase()} hulk järsult kasvanud.`;
		case "proof_p3":
			return `Kui tühjast kohast luuakse rohkem raha, tõusevad kõikide asjade hinnad. See hõlmab ka tooraineid, mida ettevõtted ostavad toodete valmistamiseks — mis omakorda tähendab sulle kõrgemaid hindu.`;
		case "proof_p4":
			return `Kuna valitsuse võlg kasvab aina edasi, trükitakse rohkem raha, sest üha vähem inimesi soovib valitsusele laenata.`;
		case "proof_p5_before":
			return `Kui sa ei saa laenata, ei saa sa kulutada. Aga kui valitsus`;
		case "proof_p5_link":
			return `ei suuda laenata`;
		case "proof_p5_after":
			return `, trükib ta lihtsalt juurde.`;
		case "proof_p6":
			return `Rohkem riigivõlga tähendab rohkem rahatrükki. Rohkem rahatrükki tähendab rohkem inflatsiooni. Ja ühtegi märki ei ole, et see peatuks.`;
		case "btc_h2":
			return `Bitcoinil ei ole inflatsiooni`;
		case "btc_p1":
			return `Inflatsioon tähendab, et sinu raha eest saab aja jooksul vähem. Bitcoin on parem raha, sest sellel ei ole inflatsiooni.`;
		case "btc_p2_before":
			return `${c.longNameSeesIn.replace(/es$/, "del").replace(/tes$/, "tel")} on piiramatu pakkumine, mis tähendab, et neid saab igal ajal juurde trükkida.`;
		case "btc_p2_link":
			return `Bitcoin on napp`;
		case "btc_p2_after":
			return `, fikseeritud ülempiiriga 21 miljonit bitcoini. Keegi ei saa rohkem luua.`;
		case "btc_p3":
			return `Ajalooliselt on bitcoin ajaga ostujõudu juurde võitnud, samal ajal kui ${c.longNameSeesIn.replace(/es$/, "d").replace(/tes$/, "d")} on seda kaotanud. Paljud inimesed kasutavad bitcoini pikaajalise hoiukontona — rahana, mida nad lasevad aastaid kasvada ilma seda puutumata.`;
		case "btc_p4":
			return `Kas sa eelistad hoiustada ${c.longNameSeesIn}, mille eest saab aja jooksul vähem? Või bitcoinis, mille eest on ajalooliselt aja jooksul rohkem saanud?`;
		case "freedom_h2":
			return `Bitcoin on ka vabaduse tööriist`;
		case "freedom_p1":
			return `Bitcoini võrku ei kontrolli keegi. Ükski valitsus ega ettevõte seda ei halda. See on loodud kaitsma sinu vabadust ja sinu raha.`;
		case "freedom_p2":
			return `Inimesed üle maailma kasutavad bitcoini juba praegu oma vabaduse kaitsmiseks — ka siis, kui nende valitsused keelduvad neid aitamast või üritavad neid peatada.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Ostujõudu kaotatud 4 aastaga";
		case "stat_source_bpr":
			return "Allikas: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Loe edasi →",
	inflation_freedom_scarce_title: "Napp",
	inflation_freedom_scarce_desc:
		"Bitcoine saab olema ainult 21 miljonit. Keegi ei saa rohkem trükkida.",
	inflation_freedom_decentralized_title: "Detsentraliseeritud",
	inflation_freedom_decentralized_desc:
		"Bitcoini ei kontrolli ükski üksus — ei valitsus ega ettevõte.",
	inflation_freedom_permissionless_title: "Loata kasutatav",
	inflation_freedom_permissionless_desc:
		"Igaüks, kust tahes, saab võrguga ühendust luua. Keegi ei saa sind peatada.",
	inflation_freedom_sovereign_title: "Suveräänne",
	inflation_freedom_sovereign_desc:
		"Uus süsteem, mis on sõltumatu poliitikutest ja nende murtud lubadustest.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 miljonit",
	inflation_stat_bitcoin_numeric: "(21 000 000)",
	inflation_stat_bitcoin_detail: "Fikseeritud igaveseks",
	inflation_stat_bitcoin_source: "Allikas: Bitcoini valge raamat →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Täna",
	inflation_stat_currency_counting: "ja kasvab edasi...",
	inflation_stat_currency_detail_4yr_lost:
		"Ostujõudu kaotatud 4 aastaga",
	inflation_stat_currency_source_cpi: "Allikas: FRED CPI →",
	inflation_stat_currency_source_debt: "Allikas: FRED riigivõlg →",
	inflation_stat_currency_source_m1: "Allikas: FRED rahapakkumine M1 →",
	inflation_stat_currency_source_m1_short: "Allikas: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Ostujõudu juurde saanud 4 aastaga",
	inflation_stat_btc_source_bpr: "Allikas: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Töölised said bitcoini abil oma rahale ligipääsu tagasi, pärast seda kui nende pangakontod külmutati.",
	inflation_story_nigeria_title: "Nigeeria",
	inflation_story_nigeria_desc:
		"Meeleavaldajad kasutasid oma liikumise rahastamiseks bitcoini, pärast seda kui pangad keeldusid nendega koostööd tegemast.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Bitcoini kaevandamine puhastas söejäätmeid, millega valitsus ei soovinud tegeleda.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Bitcoini kaevandamine aitas suure tormi ajal elektrivõrku töös hoida.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 aasta tootlikkuse graafik (kõik valuutad)",
	sources_bitcoin_source_code:
		"Bitcoini lähtekood — 21 miljoni pakkumise ülempiir",
	sources_canadian_trucker:
		"Kanada veoautojuhtide protest — bitcoini kasutati külmutatud pangakontodest mööda minekuks (YouTube)",
	sources_mempool_space:
		"Mempool.space — bitcoini pakkumise ja kaevandamise andmed",
	sources_nigeria_endsars:
		"Quartz Africa — kuidas bitcoin toidab Nigeeria EndSARS-i proteste",
	sources_pennsylvania_mining:
		"Bitcoini kaevandamine Pennsylvanias päästab söejääkidest metaani (YouTube)",
	sources_texas_mining:
		"Bitcoini kaevandamine ja Texase elektrivõrk (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoinil ei ole inflatsiooni, kuid sinu rahal on.",
	inflation_choose: "Vali oma valuuta ja vaata tõestust",
	inflation_choose_another: "← Vali teine valuuta",
	inflation_sticker_learn: "Õpi, kuidas bitcoin saab aidata.",
	inflation_sticker_lets_find_out: "Uurime välja.",
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
		`translate-inflation (et): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
