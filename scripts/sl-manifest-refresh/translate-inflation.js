#!/usr/bin/env node
/**
 * Slovenian manifest refresh — inflation namespace translator.
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
	"sl.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "ameriških dolarjih",
		longNameNom: "ameriški dolar",
		nounPlural: "dolarjev",
		label: "Ameriški dolar",
		existenceTitle: "Ameriški dolarji v obtoku",
		debtTitle: "Skupni zvezni dolg",
	},
	eur: {
		longName: "evrih",
		longNameNom: "evro",
		nounPlural: "evrov",
		label: "Evro",
		existenceTitle: "Evri v obtoku",
		debtTitle: "Javni dolg evroobmočja",
	},
	aud: {
		longName: "avstralskih dolarjih",
		longNameNom: "avstralski dolar",
		nounPlural: "avstralskih dolarjev",
		label: "Avstralski dolar",
		existenceTitle: "Avstralski dolarji v obtoku",
		debtTitle: "Javni dolg Avstralije",
	},
	brl: {
		longName: "brazilskih realih",
		longNameNom: "brazilski real",
		nounPlural: "realov",
		label: "Brazilski real",
		existenceTitle: "Reali v obtoku",
		debtTitle: "Javni dolg Brazilije",
	},
	cad: {
		longName: "kanadskih dolarjih",
		longNameNom: "kanadski dolar",
		nounPlural: "kanadskih dolarjev",
		label: "Kanadski dolar",
		existenceTitle: "Kanadski dolarji v obtoku",
		debtTitle: "Javni dolg Kanade",
	},
	gbp: {
		longName: "britanskih funtih",
		longNameNom: "britanski funt",
		nounPlural: "funtov",
		label: "Britanski funt",
		existenceTitle: "Funti v obtoku",
		debtTitle: "Javni dolg Združenega kraljestva",
	},
	ils: {
		longName: "izraelskih šeklih",
		longNameNom: "izraelski šekel",
		nounPlural: "šeklov",
		label: "Izraelski šekel",
		existenceTitle: "Šekli v obtoku",
		debtTitle: "Javni dolg Izraela",
	},
	inr: {
		longName: "indijskih rupijah",
		longNameNom: "indijska rupija",
		nounPlural: "rupij",
		label: "Indijska rupija",
		existenceTitle: "Rupije v obtoku",
		debtTitle: "Javni dolg Indije",
	},
	jpy: {
		longName: "japonskih jenih",
		longNameNom: "japonski jen",
		nounPlural: "jenov",
		label: "Japonski jen",
		existenceTitle: "Jeni v obtoku",
		debtTitle: "Javni dolg Japonske",
	},
	mxn: {
		longName: "mehiških pesih",
		longNameNom: "mehiški peso",
		nounPlural: "pesov",
		label: "Mehiški peso",
		existenceTitle: "Pesi v obtoku",
		debtTitle: "Javni dolg Mehike",
	},
	nzd: {
		longName: "novozelandskih dolarjih",
		longNameNom: "novozelandski dolar",
		nounPlural: "novozelandskih dolarjev",
		label: "Novozelandski dolar",
		existenceTitle: "Novozelandski dolarji v obtoku",
		debtTitle: "Javni dolg Nove Zelandije",
	},
	php: {
		longName: "filipinskih pesih",
		longNameNom: "filipinski peso",
		nounPlural: "pesov",
		label: "Filipinski peso",
		existenceTitle: "Pesi v obtoku",
		debtTitle: "Javni dolg Filipinov",
	},
	thb: {
		longName: "tajskih bahtih",
		longNameNom: "tajski baht",
		nounPlural: "bahtov",
		label: "Tajski baht",
		existenceTitle: "Bahti v obtoku",
		debtTitle: "Javni dolg Tajske",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Če varčujete v ${c.longName}, ste verjetno opazili, da si vsako leto lahko kupite manj. Potrebujete več ${c.nounPlural}, da kupite enako količino blaga. Potrebujete več ${c.nounPlural}, da ohranite svoj življenjski standard.`;
		case "intro_2":
			return `Toda ni nujno, da je tako.`;
		case "intro_highlight":
			return `V zadnjih štirih letih tisti, ki varčujejo v Bitcoinu, opažajo, da življenje postaja cenejše.`;
		case "proof_h2":
			return `Tu je dokaz: vaš denar izgublja vrednost`;
		case "proof_p1":
			return `Vsak ${c.longNameNom} na vašem bančnem računu vsako leto kupi manj. To se dogaja zato, ker za količino ${c.nounPlural}, ki jih je mogoče ustvariti, ni nobene fiksne meje.`;
		case "proof_p2":
			return `Ta neomejena ponudba je glavni vzrok inflacije. V zadnjih nekaj letih je količina ${c.nounPlural} v obtoku dramatično narasla.`;
		case "proof_p3":
			return `Ko se iz nič ustvari več denarja, cene vsega rastejo. To vključuje surovine, ki jih podjetja kupujejo za izdelavo izdelkov — kar vodi do višjih cen za vas.`;
		case "proof_p4":
			return `Ko državni dolg še naprej narašča, se tiska več denarja, ker je vse manj ljudi, ki so vladi pripravljeni posojati.`;
		case "proof_p5_before":
			return `Če si denarja ne morete sposoditi, ne morete trošiti. Ko pa si vlada`;
		case "proof_p5_link":
			return `ne more sposoditi`;
		case "proof_p5_after":
			return `, ga preprosto natisne še več.`;
		case "proof_p6":
			return `Več državnega dolga pomeni več tiskanja denarja. Več tiskanja denarja pomeni več inflacije. In nič ne kaže, da bi se to ustavilo.`;
		case "btc_h2":
			return `Bitcoin nima inflacije`;
		case "btc_p1":
			return `Inflacija pomeni, da vaš denar sčasoma kupi manj. Bitcoin je dober denar, ker nima inflacije.`;
		case "btc_p2_before":
			return `Ponudba ${c.longNameNom}ja je neomejena, kar pomeni, da se ga lahko kadar koli natisne še več.`;
		case "btc_p2_link":
			return `Bitcoin je redek`;
		case "btc_p2_after":
			return `, s trdo zgornjo mejo 21 milijonov bitcoinov. Nihče ne more ustvariti več.`;
		case "btc_p3":
			return `Zgodovinsko je Bitcoin sčasoma pridobival kupno moč, medtem ko jo je ${c.longNameNom} izgubljal. Mnogi uporabljajo Bitcoin kot dolgoročni varčevalni račun — denar, ki ga puščajo rasti leta, ne da bi se ga dotaknili.`;
		case "btc_p4":
			return `Bi raje varčevali v ${c.longName}, ki sčasoma kupijo manj? Ali v Bitcoinu, ki je sčasoma kupil več?`;
		case "freedom_h2":
			return `Bitcoin je tudi orodje svobode`;
		case "freedom_p1":
			return `Omrežja Bitcoin nihče ne nadzoruje. Ne upravlja ga nobena vlada ali podjetje. Zgrajen je tako, da ščiti vašo svobodo in vaš denar.`;
		case "freedom_p2":
			return `Ljudje po vsem svetu že uporabljajo Bitcoin za zaščito svoje svobode — tudi ko jim njihove vlade nočejo pomagati ali jih poskušajo ustaviti.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Izgubljena kupna moč v 4 letih";
		case "stat_source_bpr":
			return "Vir: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Več o tem →",
	inflation_freedom_scarce_title: "Redek",
	inflation_freedom_scarce_desc:
		"Za vedno bo obstajalo le 21 milijonov bitcoinov. Nihče ne more natisniti več.",
	inflation_freedom_decentralized_title: "Decentraliziran",
	inflation_freedom_decentralized_desc:
		"Bitcoina ne nadzoruje nobeno posamezno telo — niti vlada niti podjetje.",
	inflation_freedom_permissionless_title: "Brez dovoljenja",
	inflation_freedom_permissionless_desc:
		"Vsakdo se lahko od koder koli pridruži omrežju. Nihče vas ne more ustaviti.",
	inflation_freedom_sovereign_title: "Suveren",
	inflation_freedom_sovereign_desc:
		"Nov sistem, neodvisen od politikov in njihovih neizpolnjenih obljub.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milijonov",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Trdno določeno za vselej",
	inflation_stat_bitcoin_source: "Vir: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Danes",
	inflation_stat_currency_counting: "in še naprej raste …",
	inflation_stat_currency_detail_4yr_lost:
		"Izgubljena kupna moč v 4 letih",
	inflation_stat_currency_source_cpi: "Vir: FRED CPI →",
	inflation_stat_currency_source_debt: "Vir: FRED državni dolg →",
	inflation_stat_currency_source_m1: "Vir: FRED denarna masa M1 →",
	inflation_stat_currency_source_m1_short: "Vir: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Pridobljena kupna moč v 4 letih",
	inflation_stat_btc_source_bpr: "Vir: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Delavci so prek Bitcoina dobili dostop do svojega denarja, potem ko so jim zamrznili bančne račune.",
	inflation_story_nigeria_title: "Nigerija",
	inflation_story_nigeria_desc:
		"Protestniki so z Bitcoinom financirali svoje gibanje, potem ko jih banke niso hotele podpirati.",
	inflation_story_pennsylvania_title: "Pensilvanija",
	inflation_story_pennsylvania_desc:
		"Rudarjenje Bitcoina je očistilo premogovne odpadke, ki se jim vlada ni hotela posvetiti.",
	inflation_story_texas_title: "Teksas",
	inflation_story_texas_desc:
		"Rudarjenje Bitcoina je pomagalo ohraniti delovanje električnega omrežja med velikim neurjem.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — graf 4-letnega donosa (vse valute)",
	sources_bitcoin_source_code:
		"Izvorna koda Bitcoina — meja ponudbe 21 milijonov",
	sources_canadian_trucker:
		"Protest kanadskih kamionarjev — Bitcoin uporabljen za obhod zamrznjenih bančnih računov (YouTube)",
	sources_mempool_space:
		"Mempool.space — podatki o ponudbi in rudarjenju Bitcoina",
	sources_nigeria_endsars:
		"Quartz Africa — kako Bitcoin poganja proteste EndSARS v Nigeriji",
	sources_pennsylvania_mining:
		"Rudarjenje Bitcoina v Pensilvaniji rešuje metan iz premogovnih odpadkov (YouTube)",
	sources_texas_mining:
		"Rudarjenje Bitcoina in električno omrežje Teksasa (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin nima inflacije, vaš denar pa.",
	inflation_choose: "Izberite svojo valuto in si oglejte dokaz",
	inflation_choose_another: "← Izberite drugo valuto",
	inflation_sticker_learn: "Spoznajte, kako lahko Bitcoin pomaga.",
	inflation_sticker_lets_find_out: "Pa poglejmo.",
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
		`translate-inflation (sl): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
