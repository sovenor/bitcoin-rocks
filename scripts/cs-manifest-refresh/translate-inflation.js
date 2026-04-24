#!/usr/bin/env node
/**
 * Czech manifest refresh — inflation namespace translator.
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
	"cs.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "amerických dolarech",
		longNameNom: "americký dolar",
		longNameGen: "amerického dolaru",
		noun: "dolar",
		nounPlural: "dolarů",
		nounAccPlural: "dolarů",
		label: "Americký dolar",
		existenceTitle: "Americké dolary v oběhu",
		debtTitle: "Celkový federální dluh",
	},
	eur: {
		longName: "eurech",
		longNameNom: "euro",
		longNameGen: "eura",
		noun: "euro",
		nounPlural: "eur",
		nounAccPlural: "eur",
		label: "Euro",
		existenceTitle: "Eura v oběhu",
		debtTitle: "Veřejný dluh eurozóny",
	},
	aud: {
		longName: "australských dolarech",
		longNameNom: "australský dolar",
		longNameGen: "australského dolaru",
		noun: "australský dolar",
		nounPlural: "australských dolarů",
		nounAccPlural: "australských dolarů",
		label: "Australský dolar",
		existenceTitle: "Australské dolary v oběhu",
		debtTitle: "Veřejný dluh Austrálie",
	},
	brl: {
		longName: "brazilských realech",
		longNameNom: "brazilský real",
		longNameGen: "brazilského realu",
		noun: "real",
		nounPlural: "realů",
		nounAccPlural: "realů",
		label: "Brazilský real",
		existenceTitle: "Realy v oběhu",
		debtTitle: "Veřejný dluh Brazílie",
	},
	cad: {
		longName: "kanadských dolarech",
		longNameNom: "kanadský dolar",
		longNameGen: "kanadského dolaru",
		noun: "kanadský dolar",
		nounPlural: "kanadských dolarů",
		nounAccPlural: "kanadských dolarů",
		label: "Kanadský dolar",
		existenceTitle: "Kanadské dolary v oběhu",
		debtTitle: "Veřejný dluh Kanady",
	},
	gbp: {
		longName: "britských librách",
		longNameNom: "britská libra",
		longNameGen: "britské libry",
		noun: "libra",
		nounPlural: "liber",
		nounAccPlural: "liber",
		label: "Britská libra",
		existenceTitle: "Libry v oběhu",
		debtTitle: "Veřejný dluh Spojeného království",
	},
	ils: {
		longName: "izraelských šekelech",
		longNameNom: "izraelský šekel",
		longNameGen: "izraelského šekelu",
		noun: "šekel",
		nounPlural: "šekelů",
		nounAccPlural: "šekelů",
		label: "Izraelský šekel",
		existenceTitle: "Šekely v oběhu",
		debtTitle: "Veřejný dluh Izraele",
	},
	inr: {
		longName: "indických rupiích",
		longNameNom: "indická rupie",
		longNameGen: "indické rupie",
		noun: "rupie",
		nounPlural: "rupií",
		nounAccPlural: "rupií",
		label: "Indická rupie",
		existenceTitle: "Rupie v oběhu",
		debtTitle: "Veřejný dluh Indie",
	},
	jpy: {
		longName: "japonských jenech",
		longNameNom: "japonský jen",
		longNameGen: "japonského jenu",
		noun: "jen",
		nounPlural: "jenů",
		nounAccPlural: "jenů",
		label: "Japonský jen",
		existenceTitle: "Jeny v oběhu",
		debtTitle: "Veřejný dluh Japonska",
	},
	mxn: {
		longName: "mexických pesech",
		longNameNom: "mexické peso",
		longNameGen: "mexického pesa",
		noun: "peso",
		nounPlural: "pes",
		nounAccPlural: "pes",
		label: "Mexické peso",
		existenceTitle: "Pesa v oběhu",
		debtTitle: "Veřejný dluh Mexika",
	},
	nzd: {
		longName: "novozélandských dolarech",
		longNameNom: "novozélandský dolar",
		longNameGen: "novozélandského dolaru",
		noun: "novozélandský dolar",
		nounPlural: "novozélandských dolarů",
		nounAccPlural: "novozélandských dolarů",
		label: "Novozélandský dolar",
		existenceTitle: "Novozélandské dolary v oběhu",
		debtTitle: "Veřejný dluh Nového Zélandu",
	},
	php: {
		longName: "filipínských pesech",
		longNameNom: "filipínské peso",
		longNameGen: "filipínského pesa",
		noun: "peso",
		nounPlural: "pes",
		nounAccPlural: "pes",
		label: "Filipínské peso",
		existenceTitle: "Pesa v oběhu",
		debtTitle: "Veřejný dluh Filipín",
	},
	thb: {
		longName: "thajských bahtech",
		longNameNom: "thajský baht",
		longNameGen: "thajského bahtu",
		noun: "baht",
		nounPlural: "bahtů",
		nounAccPlural: "bahtů",
		label: "Thajský baht",
		existenceTitle: "Bahty v oběhu",
		debtTitle: "Veřejný dluh Thajska",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Pokud si spoříte v ${c.longName}, jistě jste si všimli, že si každý rok můžete koupit méně. Potřebujete víc ${c.nounPlural}, abyste si koupili stejné množství zboží. Potřebujete víc ${c.nounPlural}, abyste si udrželi životní úroveň.`;
		case "intro_2":
			return `Ale tak to být nemusí.`;
		case "intro_highlight":
			return `Za poslední čtyři roky ti, kdo si spoří v Bitcoinu, vidí, že život se stává levnějším.`;
		case "proof_h2":
			return `Zde je důkaz: vaše peníze ztrácejí hodnotu`;
		case "proof_p1":
			return `Každý ${c.noun} na vašem bankovním účtu si každý rok koupí méně. Děje se to proto, že neexistuje žádný pevný strop pro množství ${c.nounPlural}, které lze vytvořit.`;
		case "proof_p2":
			return `Tato neomezená nabídka je hlavní příčinou inflace. Za posledních několik let množství ${c.nounPlural} v oběhu dramaticky vzrostlo.`;
		case "proof_p3":
			return `Když se z ničeho vytvoří víc peněz, ceny všeho rostou. To zahrnuje suroviny, které firmy nakupují pro výrobu produktů — což vede k vyšším cenám pro vás.`;
		case "proof_p4":
			return `Jak se vládní dluh stále zvyšuje, tiskne se víc peněz, protože stále méně lidí chce vládě půjčovat.`;
		case "proof_p5_before":
			return `Pokud si nemůžete půjčit peníze, nemůžete utrácet. Ale když si vláda`;
		case "proof_p5_link":
			return `nemůže půjčit`;
		case "proof_p5_after":
			return `, prostě jich natiskne víc.`;
		case "proof_p6":
			return `Víc vládního dluhu znamená víc tisku peněz. Víc tisku peněz znamená víc inflace. A nic nenasvědčuje tomu, že by se to mělo zastavit.`;
		case "btc_h2":
			return `Bitcoin nemá inflaci`;
		case "btc_p1":
			return `Inflace znamená, že si vaše peníze časem koupí méně. Bitcoin jsou dobré peníze, protože nemá inflaci.`;
		case "btc_p2_before":
			return `Nabídka ${c.longNameGen} je neomezená, což znamená, že se jich kdykoli může natisknout víc.`;
		case "btc_p2_link":
			return `Bitcoin je vzácný`;
		case "btc_p2_after":
			return `, s pevným stropem 21 milionů bitcoinů. Nikdo nemůže vytvořit víc.`;
		case "btc_p3":
			return `Historicky Bitcoin v průběhu času získával kupní sílu, zatímco ${c.longNameNom} ji ztrácel. Mnoho lidí používá Bitcoin jako dlouhodobý spořicí účet — peníze, které nechávají roky růst, aniž by se jich dotýkali.`;
		case "btc_p4":
			return `Raději si spoříte v ${c.longName}, které si časem koupí méně? Nebo v Bitcoinu, který si historicky časem koupil víc?`;
		case "freedom_h2":
			return `Bitcoin je také nástroj svobody`;
		case "freedom_p1":
			return `Síť Bitcoin nikdo neovládá. Neřídí ji žádná vláda ani firma. Je vytvořena proto, aby chránila vaši svobodu a vaše peníze.`;
		case "freedom_p2":
			return `Lidé po celém světě již používají Bitcoin k obraně své svobody — i když jim jejich vlády odmítají pomoci nebo se je snaží zastavit.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Kupní síla ztracená za 4 roky";
		case "stat_source_bpr":
			return "Zdroj: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Zjistit víc →",
	inflation_freedom_scarce_title: "Vzácný",
	inflation_freedom_scarce_desc:
		"Kdy navěky bude existovat pouze 21 milionů bitcoinů. Nikdo nemůže natisknout víc.",
	inflation_freedom_decentralized_title: "Decentralizovaný",
	inflation_freedom_decentralized_desc:
		"Bitcoin neovládá žádný jednotlivý subjekt — žádná vláda ani firma.",
	inflation_freedom_permissionless_title: "Bez povolení",
	inflation_freedom_permissionless_desc:
		"Kdokoli, odkudkoli, se může připojit k síti. Nikdo vás nemůže zastavit.",
	inflation_freedom_sovereign_title: "Svrchovaný",
	inflation_freedom_sovereign_desc:
		"Nový systém nezávislý na politicích a jejich nedodržených slibech.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milionů",
	inflation_stat_bitcoin_numeric: "(21 000 000)",
	inflation_stat_bitcoin_detail: "Pevně dáno navždy",
	inflation_stat_bitcoin_source: "Zdroj: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Dnes",
	inflation_stat_currency_counting: "a stále roste...",
	inflation_stat_currency_detail_4yr_lost:
		"Kupní síla ztracená za 4 roky",
	inflation_stat_currency_source_cpi: "Zdroj: FRED CPI →",
	inflation_stat_currency_source_debt: "Zdroj: FRED vládní dluh →",
	inflation_stat_currency_source_m1: "Zdroj: FRED peněžní zásoba M1 →",
	inflation_stat_currency_source_m1_short: "Zdroj: FRED →",

	// Bitcoin "gained" stat detail (used on Bitcoin stat column)
	inflation_stat_btc_detail_4yr: "Kupní síla získaná za 4 roky",
	inflation_stat_btc_source_bpr: "Zdroj: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Pracovníci získali přístup ke svým penězům pomocí Bitcoinu poté, co jim byly zmrazeny bankovní účty.",
	inflation_story_nigeria_title: "Nigérie",
	inflation_story_nigeria_desc:
		"Protestující použili Bitcoin k financování svého hnutí poté, co banky odmítly s nimi spolupracovat.",
	inflation_story_pennsylvania_title: "Pensylvánie",
	inflation_story_pennsylvania_desc:
		"Těžba Bitcoinu vyčistila uhelný odpad, který vláda odmítla řešit.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Těžba Bitcoinu pomohla udržet elektrickou síť v provozu během velké bouře.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — graf 4letého výnosu (všechny měny)",
	sources_bitcoin_source_code:
		"Zdrojový kód Bitcoinu — strop nabídky 21 milionů",
	sources_canadian_trucker:
		"Protest kanadských kamioňáků — Bitcoin použit k obejití zmrazených bankovních účtů (YouTube)",
	sources_mempool_space:
		"Mempool.space — data o nabídce a těžbě Bitcoinu",
	sources_nigeria_endsars:
		"Quartz Africa — jak Bitcoin pohání protesty EndSARS v Nigérii",
	sources_pennsylvania_mining:
		"Těžba Bitcoinu v Pensylvánii zachraňuje metan z uhelného odpadu (YouTube)",
	sources_texas_mining:
		"Těžba Bitcoinu a elektrická síť Texasu (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin nemá inflaci, ale vaše peníze ano.",
	inflation_choose: "Vyberte si svou měnu a uvidíte důkaz",
	inflation_choose_another: "← Vybrat jinou měnu",
	inflation_sticker_learn: "Zjistěte, jak může Bitcoin pomoci.",
	inflation_sticker_lets_find_out: "Pojďme to zjistit.",
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
		`translate-inflation (cs): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
