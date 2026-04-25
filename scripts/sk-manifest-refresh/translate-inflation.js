#!/usr/bin/env node
/**
 * Slovak manifest refresh — inflation namespace translator.
 *
 * Handles the per-currency keys (13 currencies × ~25 suffixes) plus the
 * shared non-currency labels / stories / sources / manifest-changed keys.
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
	"sk.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "amerických dolároch",
		longNameNom: "americký dolár",
		longNameGen: "amerického dolára",
		noun: "dolár",
		nounPlural: "dolárov",
		nounAccPlural: "dolárov",
		label: "Americký dolár",
		existenceTitle: "Americké doláre v obehu",
		debtTitle: "Celkový federálny dlh",
	},
	eur: {
		longName: "eurách",
		longNameNom: "euro",
		longNameGen: "eura",
		noun: "euro",
		nounPlural: "eur",
		nounAccPlural: "eur",
		label: "Euro",
		existenceTitle: "Eurá v obehu",
		debtTitle: "Verejný dlh eurozóny",
	},
	aud: {
		longName: "austrálskych dolároch",
		longNameNom: "austrálsky dolár",
		longNameGen: "austrálskeho dolára",
		noun: "austrálsky dolár",
		nounPlural: "austrálskych dolárov",
		nounAccPlural: "austrálskych dolárov",
		label: "Austrálsky dolár",
		existenceTitle: "Austrálske doláre v obehu",
		debtTitle: "Verejný dlh Austrálie",
	},
	brl: {
		longName: "brazílskych realoch",
		longNameNom: "brazílsky real",
		longNameGen: "brazílskeho realu",
		noun: "real",
		nounPlural: "realov",
		nounAccPlural: "realov",
		label: "Brazílsky real",
		existenceTitle: "Realy v obehu",
		debtTitle: "Verejný dlh Brazílie",
	},
	cad: {
		longName: "kanadských dolároch",
		longNameNom: "kanadský dolár",
		longNameGen: "kanadského dolára",
		noun: "kanadský dolár",
		nounPlural: "kanadských dolárov",
		nounAccPlural: "kanadských dolárov",
		label: "Kanadský dolár",
		existenceTitle: "Kanadské doláre v obehu",
		debtTitle: "Verejný dlh Kanady",
	},
	gbp: {
		longName: "britských librách",
		longNameNom: "britská libra",
		longNameGen: "britskej libry",
		noun: "libra",
		nounPlural: "libier",
		nounAccPlural: "libier",
		label: "Britská libra",
		existenceTitle: "Libry v obehu",
		debtTitle: "Verejný dlh Spojeného kráľovstva",
	},
	ils: {
		longName: "izraelských šekloch",
		longNameNom: "izraelský šekel",
		longNameGen: "izraelského šekla",
		noun: "šekel",
		nounPlural: "šeklov",
		nounAccPlural: "šeklov",
		label: "Izraelský šekel",
		existenceTitle: "Šekly v obehu",
		debtTitle: "Verejný dlh Izraela",
	},
	inr: {
		longName: "indických rupiách",
		longNameNom: "indická rupia",
		longNameGen: "indickej rupie",
		noun: "rupia",
		nounPlural: "rupií",
		nounAccPlural: "rupií",
		label: "Indická rupia",
		existenceTitle: "Rupie v obehu",
		debtTitle: "Verejný dlh Indie",
	},
	jpy: {
		longName: "japonských jenoch",
		longNameNom: "japonský jen",
		longNameGen: "japonského jenu",
		noun: "jen",
		nounPlural: "jenov",
		nounAccPlural: "jenov",
		label: "Japonský jen",
		existenceTitle: "Jeny v obehu",
		debtTitle: "Verejný dlh Japonska",
	},
	mxn: {
		longName: "mexických pesoch",
		longNameNom: "mexické peso",
		longNameGen: "mexického pesa",
		noun: "peso",
		nounPlural: "pes",
		nounAccPlural: "pes",
		label: "Mexické peso",
		existenceTitle: "Pesá v obehu",
		debtTitle: "Verejný dlh Mexika",
	},
	nzd: {
		longName: "novozélandských dolároch",
		longNameNom: "novozélandský dolár",
		longNameGen: "novozélandského dolára",
		noun: "novozélandský dolár",
		nounPlural: "novozélandských dolárov",
		nounAccPlural: "novozélandských dolárov",
		label: "Novozélandský dolár",
		existenceTitle: "Novozélandské doláre v obehu",
		debtTitle: "Verejný dlh Nového Zélandu",
	},
	php: {
		longName: "filipínskych pesoch",
		longNameNom: "filipínske peso",
		longNameGen: "filipínskeho pesa",
		noun: "peso",
		nounPlural: "pes",
		nounAccPlural: "pes",
		label: "Filipínske peso",
		existenceTitle: "Pesá v obehu",
		debtTitle: "Verejný dlh Filipín",
	},
	thb: {
		longName: "thajských bahtoch",
		longNameNom: "thajský baht",
		longNameGen: "thajského bahtu",
		noun: "baht",
		nounPlural: "bahtov",
		nounAccPlural: "bahtov",
		label: "Thajský baht",
		existenceTitle: "Bahty v obehu",
		debtTitle: "Verejný dlh Thajska",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Ak si sporíte v ${c.longName}, určite ste si všimli, že si každý rok môžete kúpiť menej. Potrebujete viac ${c.nounPlural}, aby ste si kúpili rovnaké množstvo tovaru. Potrebujete viac ${c.nounPlural}, aby ste si udržali životnú úroveň.`;
		case "intro_2":
			return `Ale tak to byť nemusí.`;
		case "intro_highlight":
			return `Za posledné štyri roky tí, ktorí si sporia v Bitcoine, vidia, že život sa stáva lacnejším.`;
		case "proof_h2":
			return `Tu je dôkaz: vaše peniaze strácajú hodnotu`;
		case "proof_p1":
			return `Každý ${c.noun} na vašom bankovom účte si každý rok kúpi menej. Deje sa to preto, že neexistuje žiadny pevný strop pre množstvo ${c.nounPlural}, ktoré možno vytvoriť.`;
		case "proof_p2":
			return `Táto neobmedzená ponuka je hlavnou príčinou inflácie. Za posledných niekoľko rokov množstvo ${c.nounPlural} v obehu dramaticky narástlo.`;
		case "proof_p3":
			return `Keď sa z ničoho vytvorí viac peňazí, ceny všetkého rastú. To zahŕňa suroviny, ktoré firmy nakupujú na výrobu produktov — čo vedie k vyšším cenám pre vás.`;
		case "proof_p4":
			return `Keď sa vládny dlh stále zvyšuje, tlačí sa viac peňazí, pretože stále menej ľudí chce vláde požičiavať.`;
		case "proof_p5_before":
			return `Ak si nemôžete požičať peniaze, nemôžete míňať. Ale keď si vláda`;
		case "proof_p5_link":
			return `nemôže požičať`;
		case "proof_p5_after":
			return `, jednoducho ich natlačí viac.`;
		case "proof_p6":
			return `Viac vládneho dlhu znamená viac tlačenia peňazí. Viac tlačenia peňazí znamená viac inflácie. A nič nenasvedčuje tomu, že by sa to malo zastaviť.`;
		case "btc_h2":
			return `Bitcoin nemá infláciu`;
		case "btc_p1":
			return `Inflácia znamená, že si vaše peniaze časom kúpia menej. Bitcoin sú dobré peniaze, pretože nemá infláciu.`;
		case "btc_p2_before":
			return `Ponuka ${c.longNameGen} je neobmedzená, čo znamená, že sa ich kedykoľvek môže natlačiť viac.`;
		case "btc_p2_link":
			return `Bitcoin je vzácny`;
		case "btc_p2_after":
			return `, s pevným stropom 21 miliónov bitcoinov. Nikto nemôže vytvoriť viac.`;
		case "btc_p3":
			return `Historicky Bitcoin v priebehu času získaval kúpnu silu, zatiaľ čo ${c.longNameNom} ju strácal. Mnoho ľudí používa Bitcoin ako dlhodobý sporiaci účet — peniaze, ktoré nechávajú roky rásť bez toho, aby sa ich dotkli.`;
		case "btc_p4":
			return `Radšej si sporíte v ${c.longName}, ktoré si časom kúpia menej? Alebo v Bitcoine, ktorý si historicky časom kúpil viac?`;
		case "freedom_h2":
			return `Bitcoin je tiež nástrojom slobody`;
		case "freedom_p1":
			return `Sieť Bitcoin nikto neovláda. Neriadi ju žiadna vláda ani firma. Je vytvorená preto, aby chránila vašu slobodu a vaše peniaze.`;
		case "freedom_p2":
			return `Ľudia po celom svete už používajú Bitcoin na obranu svojej slobody — aj keď im ich vlády odmietajú pomôcť alebo sa ich snažia zastaviť.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Kúpna sila stratená za 4 roky";
		case "stat_source_bpr":
			return "Zdroj: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Zistiť viac →",
	inflation_freedom_scarce_title: "Vzácny",
	inflation_freedom_scarce_desc:
		"Naveky bude existovať iba 21 miliónov bitcoinov. Nikto nemôže natlačiť viac.",
	inflation_freedom_decentralized_title: "Decentralizovaný",
	inflation_freedom_decentralized_desc:
		"Bitcoin neovláda žiadny jednotlivý subjekt — žiadna vláda ani firma.",
	inflation_freedom_permissionless_title: "Bez povolenia",
	inflation_freedom_permissionless_desc:
		"Ktokoľvek odkiaľkoľvek sa môže pripojiť k sieti. Nikto vás nemôže zastaviť.",
	inflation_freedom_sovereign_title: "Suverénny",
	inflation_freedom_sovereign_desc:
		"Nový systém nezávislý od politikov a ich nedodržaných sľubov.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 miliónov",
	inflation_stat_bitcoin_numeric: "(21 000 000)",
	inflation_stat_bitcoin_detail: "Pevne dané navždy",
	inflation_stat_bitcoin_source: "Zdroj: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Dnes",
	inflation_stat_currency_counting: "a stále rastie...",
	inflation_stat_currency_detail_4yr_lost:
		"Kúpna sila stratená za 4 roky",
	inflation_stat_currency_source_cpi: "Zdroj: FRED CPI →",
	inflation_stat_currency_source_debt: "Zdroj: FRED vládny dlh →",
	inflation_stat_currency_source_m1: "Zdroj: FRED peňažná zásoba M1 →",
	inflation_stat_currency_source_m1_short: "Zdroj: FRED →",

	// Bitcoin "gained" stat detail (used on Bitcoin stat column)
	inflation_stat_btc_detail_4yr: "Kúpna sila získaná za 4 roky",
	inflation_stat_btc_source_bpr: "Zdroj: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Pracovníci získali prístup k svojim peniazom pomocou Bitcoinu po tom, čo im boli zmrazené bankové účty.",
	inflation_story_nigeria_title: "Nigéria",
	inflation_story_nigeria_desc:
		"Protestujúci použili Bitcoin na financovanie svojho hnutia po tom, čo banky odmietli s nimi spolupracovať.",
	inflation_story_pennsylvania_title: "Pensylvánia",
	inflation_story_pennsylvania_desc:
		"Ťažba Bitcoinu vyčistila uhoľný odpad, ktorý vláda odmietla riešiť.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Ťažba Bitcoinu pomohla udržať elektrickú sieť v prevádzke počas veľkej búrky.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — graf 4-ročného výnosu (všetky meny)",
	sources_bitcoin_source_code:
		"Zdrojový kód Bitcoinu — strop ponuky 21 miliónov",
	sources_canadian_trucker:
		"Protest kanadských kamionistov — Bitcoin použitý na obídenie zmrazených bankových účtov (YouTube)",
	sources_mempool_space:
		"Mempool.space — údaje o ponuke a ťažbe Bitcoinu",
	sources_nigeria_endsars:
		"Quartz Africa — ako Bitcoin poháňa protesty EndSARS v Nigérii",
	sources_pennsylvania_mining:
		"Ťažba Bitcoinu v Pensylvánii zachraňuje metán z uhoľného odpadu (YouTube)",
	sources_texas_mining:
		"Ťažba Bitcoinu a elektrická sieť Texasu (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin nemá infláciu, ale vaše peniaze áno.",
	inflation_choose: "Vyberte si svoju menu a uvidíte dôkaz",
	inflation_choose_another: "← Vybrať inú menu",
	inflation_sticker_learn: "Zistite, ako môže Bitcoin pomôcť.",
	inflation_sticker_lets_find_out: "Poďme to zistiť.",
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

		// Direct non-currency keys
		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		// Per-currency keys: inflation_stat_<code>_<suffix>
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

		// Per-currency keys: inflation_<code>_<suffix>
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
		`translate-inflation (sk): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
