#!/usr/bin/env node
/**
 * Polish manifest refresh — inflation namespace translator.
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
	"pl.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
/*
 * locName    — locative case ("If you save in <X>")
 * nomName    — nominative case
 * genName    — genitive case ("supply of <X>")
 * noun       — base noun for "every <X>"
 * nounPlural — plural for "more <X> are needed"
 * existence  — title for "X in circulation"
 * debtTitle  — title for the country's public debt
 * label      — short label
 */

const CURRENCY = {
	usd: {
		locName: "dolarach amerykańskich",
		nomName: "dolar amerykański",
		genName: "dolara amerykańskiego",
		noun: "dolar",
		nounPlural: "dolarów",
		label: "Dolar amerykański",
		existence: "Dolary amerykańskie w obiegu",
		debtTitle: "Łączny dług federalny",
	},
	eur: {
		locName: "euro",
		nomName: "euro",
		genName: "euro",
		noun: "euro",
		nounPlural: "euro",
		label: "Euro",
		existence: "Euro w obiegu",
		debtTitle: "Dług publiczny strefy euro",
	},
	aud: {
		locName: "dolarach australijskich",
		nomName: "dolar australijski",
		genName: "dolara australijskiego",
		noun: "dolar australijski",
		nounPlural: "dolarów australijskich",
		label: "Dolar australijski",
		existence: "Dolary australijskie w obiegu",
		debtTitle: "Dług publiczny Australii",
	},
	brl: {
		locName: "realach brazylijskich",
		nomName: "real brazylijski",
		genName: "reala brazylijskiego",
		noun: "real",
		nounPlural: "reali",
		label: "Real brazylijski",
		existence: "Reale w obiegu",
		debtTitle: "Dług publiczny Brazylii",
	},
	cad: {
		locName: "dolarach kanadyjskich",
		nomName: "dolar kanadyjski",
		genName: "dolara kanadyjskiego",
		noun: "dolar kanadyjski",
		nounPlural: "dolarów kanadyjskich",
		label: "Dolar kanadyjski",
		existence: "Dolary kanadyjskie w obiegu",
		debtTitle: "Dług publiczny Kanady",
	},
	gbp: {
		locName: "funtach brytyjskich",
		nomName: "funt brytyjski",
		genName: "funta brytyjskiego",
		noun: "funt",
		nounPlural: "funtów",
		label: "Funt brytyjski",
		existence: "Funty w obiegu",
		debtTitle: "Dług publiczny Wielkiej Brytanii",
	},
	ils: {
		locName: "szeklach izraelskich",
		nomName: "szekel izraelski",
		genName: "szekla izraelskiego",
		noun: "szekel",
		nounPlural: "szekli",
		label: "Szekel izraelski",
		existence: "Szekle w obiegu",
		debtTitle: "Dług publiczny Izraela",
	},
	inr: {
		locName: "rupiach indyjskich",
		nomName: "rupia indyjska",
		genName: "rupii indyjskiej",
		noun: "rupia",
		nounPlural: "rupii",
		label: "Rupia indyjska",
		existence: "Rupie w obiegu",
		debtTitle: "Dług publiczny Indii",
	},
	jpy: {
		locName: "jenach japońskich",
		nomName: "jen japoński",
		genName: "jena japońskiego",
		noun: "jen",
		nounPlural: "jenów",
		label: "Jen japoński",
		existence: "Jeny w obiegu",
		debtTitle: "Dług publiczny Japonii",
	},
	mxn: {
		locName: "peso meksykańskim",
		nomName: "peso meksykańskie",
		genName: "peso meksykańskiego",
		noun: "peso",
		nounPlural: "peso",
		label: "Peso meksykańskie",
		existence: "Peso w obiegu",
		debtTitle: "Dług publiczny Meksyku",
	},
	nzd: {
		locName: "dolarach nowozelandzkich",
		nomName: "dolar nowozelandzki",
		genName: "dolara nowozelandzkiego",
		noun: "dolar nowozelandzki",
		nounPlural: "dolarów nowozelandzkich",
		label: "Dolar nowozelandzki",
		existence: "Dolary nowozelandzkie w obiegu",
		debtTitle: "Dług publiczny Nowej Zelandii",
	},
	php: {
		locName: "peso filipińskim",
		nomName: "peso filipińskie",
		genName: "peso filipińskiego",
		noun: "peso",
		nounPlural: "peso",
		label: "Peso filipińskie",
		existence: "Peso w obiegu",
		debtTitle: "Dług publiczny Filipin",
	},
	thb: {
		locName: "bahtach tajskich",
		nomName: "baht tajski",
		genName: "bahta tajskiego",
		noun: "baht",
		nounPlural: "bahtów",
		label: "Baht tajski",
		existence: "Bahty w obiegu",
		debtTitle: "Dług publiczny Tajlandii",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Jeśli oszczędzasz w ${c.locName}, na pewno zauważyłeś, że co roku możesz kupić mniej. Potrzebujesz więcej ${c.nounPlural}, aby kupić te same rzeczy. Potrzebujesz więcej ${c.nounPlural}, aby utrzymać dotychczasowy poziom życia.`;
		case "intro_2":
			return `Ale wcale tak być nie musi.`;
		case "intro_highlight":
			return `Przez ostatnie cztery lata osoby oszczędzające w Bitcoinie widzą, jak życie staje się tańsze.`;
		case "proof_h2":
			return `Oto dowód: twoje pieniądze tracą wartość`;
		case "proof_p1":
			return `Każdy ${c.noun} na twoim koncie bankowym co roku kupuje mniej. Dzieje się tak, ponieważ nie ma żadnego twardego limitu liczby ${c.nounPlural}, które można wyemitować.`;
		case "proof_p2":
			return `Ta nieograniczona podaż jest główną przyczyną inflacji. W ostatnich latach liczba ${c.nounPlural} w obiegu drastycznie wzrosła.`;
		case "proof_p3":
			return `Gdy z powietrza tworzy się więcej pieniądza, ceny wszystkiego rosną. Dotyczy to także surowców, które firmy kupują, żeby produkować — co prowadzi do wyższych cen dla ciebie.`;
		case "proof_p4":
			return `W miarę jak dług publiczny rośnie, drukuje się coraz więcej pieniędzy, ponieważ coraz mniej osób chce pożyczać rządowi.`;
		case "proof_p5_before":
			return `Jeśli nie możesz pożyczyć pieniędzy, nie możesz wydawać. Ale gdy rząd`;
		case "proof_p5_link":
			return `nie może pożyczyć`;
		case "proof_p5_after":
			return `, po prostu drukuje ich więcej.`;
		case "proof_p6":
			return `Większy dług rządowy oznacza więcej druku pieniądza. Więcej druku pieniądza oznacza większą inflację. I nic nie wskazuje, by miało się to skończyć.`;
		case "btc_h2":
			return `Bitcoin nie ma inflacji`;
		case "btc_p1":
			return `Inflacja sprawia, że twoje pieniądze z czasem kupują mniej. Bitcoin to dobry pieniądz, ponieważ nie ma inflacji.`;
		case "btc_p2_before":
			return `Podaż ${c.genName} jest nieograniczona, co oznacza, że w każdej chwili można wyemitować więcej.`;
		case "btc_p2_link":
			return `Bitcoin jest rzadki`;
		case "btc_p2_after":
			return `, z twardym limitem 21 milionów bitcoinów. Nikt nie może stworzyć więcej.`;
		case "btc_p3":
			return `Historycznie Bitcoin z czasem zyskiwał siłę nabywczą, podczas gdy ${c.nomName} ją tracił. Wiele osób używa Bitcoina jak długoterminowego konta oszczędnościowego — pieniędzy, które zostawiają na lata, by rosły, nie ruszając ich.`;
		case "btc_p4":
			return `Wolisz oszczędzać w ${c.locName}, które z czasem kupują mniej? Czy w Bitcoinie, który historycznie z czasem kupuje więcej?`;
		case "freedom_h2":
			return `Bitcoin to także narzędzie wolności`;
		case "freedom_p1":
			return `Sieć Bitcoin nie jest przez nikogo kontrolowana. Nie zarządza nią żaden rząd ani firma. Została zbudowana po to, aby chronić twoją wolność i twoje pieniądze.`;
		case "freedom_p2":
			return `Ludzie na całym świecie używają już Bitcoina, aby bronić swojej wolności — nawet wtedy, gdy ich rządy odmawiają pomocy lub starają się ich powstrzymać.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existence;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Siła nabywcza utracona w ciągu 4 lat";
		case "stat_source_bpr":
			return "Źródło: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Dowiedz się więcej →",
	inflation_freedom_scarce_title: "Rzadki",
	inflation_freedom_scarce_desc:
		"Na zawsze będzie istnieć tylko 21 milionów bitcoinów. Nikt nie może wydrukować ich więcej.",
	inflation_freedom_decentralized_title: "Zdecentralizowany",
	inflation_freedom_decentralized_desc:
		"Bitcoinem nie steruje żaden pojedynczy podmiot — żaden rząd ani firma.",
	inflation_freedom_permissionless_title: "Bez pozwoleń",
	inflation_freedom_permissionless_desc:
		"Każdy, z dowolnego miejsca, może dołączyć do sieci. Nikt nie może cię powstrzymać.",
	inflation_freedom_sovereign_title: "Suwerenny",
	inflation_freedom_sovereign_desc:
		"Nowy system, niezależny od polityków i ich niedotrzymanych obietnic.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milionów",
	inflation_stat_bitcoin_numeric: "(21 000 000)",
	inflation_stat_bitcoin_detail: "Ustalone na zawsze",
	inflation_stat_bitcoin_source: "Źródło: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Dziś",
	inflation_stat_currency_counting: "i ciągle rośnie...",
	inflation_stat_currency_detail_4yr_lost:
		"Siła nabywcza utracona w ciągu 4 lat",
	inflation_stat_currency_source_cpi: "Źródło: FRED CPI →",
	inflation_stat_currency_source_debt: "Źródło: FRED dług publiczny →",
	inflation_stat_currency_source_m1: "Źródło: FRED podaż pieniądza M1 →",
	inflation_stat_currency_source_m1_short: "Źródło: FRED →",

	// Bitcoin "gained" stat detail (used on Bitcoin stat column)
	inflation_stat_btc_detail_4yr: "Siła nabywcza zyskana w ciągu 4 lat",
	inflation_stat_btc_source_bpr: "Źródło: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Pracownicy odzyskali dostęp do swoich pieniędzy dzięki Bitcoinowi po tym, jak zamrożono im konta bankowe.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Protestujący wykorzystali Bitcoina do sfinansowania swojego ruchu, gdy banki odmówiły z nimi współpracować.",
	inflation_story_pennsylvania_title: "Pensylwania",
	inflation_story_pennsylvania_desc:
		"Wydobywanie Bitcoina oczyściło odpady węglowe, którymi rząd nie chciał się zająć.",
	inflation_story_texas_title: "Teksas",
	inflation_story_texas_desc:
		"Wydobywanie Bitcoina pomogło utrzymać sieć energetyczną podczas wielkiej burzy.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — wykres 4-letniej stopy zwrotu (wszystkie waluty)",
	sources_bitcoin_source_code:
		"Kod źródłowy Bitcoina — limit podaży 21 milionów",
	sources_canadian_trucker:
		"Protest kanadyjskich kierowców — Bitcoin użyty do obejścia zamrożonych kont (YouTube)",
	sources_mempool_space:
		"Mempool.space — dane o podaży i wydobyciu Bitcoina",
	sources_nigeria_endsars:
		"Quartz Africa — jak Bitcoin napędza protesty EndSARS w Nigerii",
	sources_pennsylvania_mining:
		"Wydobywanie Bitcoina w Pensylwanii ratuje metan z odpadów węglowych (YouTube)",
	sources_texas_mining:
		"Wydobywanie Bitcoina i sieć energetyczna Teksasu (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin nie ma inflacji, ale twoje pieniądze tak.",
	inflation_choose: "Wybierz swoją walutę i zobacz dowód",
	inflation_choose_another: "← Wybierz inną walutę",
	inflation_sticker_learn: "Dowiedz się, jak Bitcoin może pomóc.",
	inflation_sticker_lets_find_out: "Sprawdźmy.",
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
		`translate-inflation (pl): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
