#!/usr/bin/env node
/**
 * Croatian (hr) manifest refresh — inflation namespace translator.
 *
 * Croatian conventions:
 * - Latin script with diacritics (č, ć, š, ž, đ).
 * - Formal 2nd-person plural "vi/vaš" — standard register for Croatian
 *   educational/financial copy.
 * - "Bitcoin" stays as "Bitcoin" (matches existing hr translations).
 * - Decimal: comma (Croatian convention). Thousands: full stop or
 *   non-breaking space; we keep US-formatted dataset values
 *   (commas as thousand separators) where the cards display raw FRED
 *   figures, since they are already formatted that way at render time.
 * - Numbers: "milijun" (1), "milijuna" (genitive plural / many),
 *   "milijardi" (billion gen.), "bilijuna" (trillion gen.).
 *   For technical short scale: 21 milijun (one), 21 milijuna BTC.
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
	"hr.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		inPhrase: "u američkim dolarima",
		noun: "dolar",
		nounPlural: "dolara",
		label: "Američki dolar",
		existenceTitle: "Američki dolari u optjecaju",
		debtTitle: "Ukupni dug američke vlade",
	},
	eur: {
		inPhrase: "u eurima",
		noun: "euro",
		nounPlural: "eura",
		label: "Euro",
		existenceTitle: "Euri u optjecaju",
		debtTitle: "Ukupni dug vlada eurozone",
	},
	aud: {
		inPhrase: "u australskim dolarima",
		noun: "australski dolar",
		nounPlural: "australskih dolara",
		label: "Australski dolar",
		existenceTitle: "Australski dolari u optjecaju",
		debtTitle: "Ukupni dug australske vlade",
	},
	brl: {
		inPhrase: "u brazilskim realima",
		noun: "real",
		nounPlural: "reala",
		label: "Brazilski real",
		existenceTitle: "Brazilski reali u optjecaju",
		debtTitle: "Ukupni dug brazilske vlade",
	},
	cad: {
		inPhrase: "u kanadskim dolarima",
		noun: "kanadski dolar",
		nounPlural: "kanadskih dolara",
		label: "Kanadski dolar",
		existenceTitle: "Kanadski dolari u optjecaju",
		debtTitle: "Ukupni dug kanadske vlade",
	},
	gbp: {
		inPhrase: "u britanskim funtama",
		noun: "funta",
		nounPlural: "funti",
		label: "Britanska funta",
		existenceTitle: "Britanske funte u optjecaju",
		debtTitle: "Ukupni dug britanske vlade",
	},
	ils: {
		inPhrase: "u izraelskim šekelima",
		noun: "šekel",
		nounPlural: "šekela",
		label: "Izraelski šekel",
		existenceTitle: "Izraelski šekeli u optjecaju",
		debtTitle: "Ukupni dug izraelske vlade",
	},
	inr: {
		inPhrase: "u indijskim rupijama",
		noun: "rupija",
		nounPlural: "rupija",
		label: "Indijska rupija",
		existenceTitle: "Indijske rupije u optjecaju",
		debtTitle: "Ukupni dug indijske vlade",
	},
	jpy: {
		inPhrase: "u japanskim jenima",
		noun: "jen",
		nounPlural: "jena",
		label: "Japanski jen",
		existenceTitle: "Japanski jeni u optjecaju",
		debtTitle: "Ukupni dug japanske vlade",
	},
	mxn: {
		inPhrase: "u meksičkim pesosima",
		noun: "peso",
		nounPlural: "pesosa",
		label: "Meksički peso",
		existenceTitle: "Meksički pesosi u optjecaju",
		debtTitle: "Ukupni dug meksičke vlade",
	},
	nzd: {
		inPhrase: "u novozelandskim dolarima",
		noun: "novozelandski dolar",
		nounPlural: "novozelandskih dolara",
		label: "Novozelandski dolar",
		existenceTitle: "Novozelandski dolari u optjecaju",
		debtTitle: "Ukupni dug novozelandske vlade",
	},
	php: {
		inPhrase: "u filipinskim pesosima",
		noun: "peso",
		nounPlural: "pesosa",
		label: "Filipinski peso",
		existenceTitle: "Filipinski pesosi u optjecaju",
		debtTitle: "Ukupni dug filipinske vlade",
	},
	thb: {
		inPhrase: "u tajlandskim bahtima",
		noun: "baht",
		nounPlural: "bahta",
		label: "Tajlandski baht",
		existenceTitle: "Tajlandski bahti u optjecaju",
		debtTitle: "Ukupni dug tajlandske vlade",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Ako štedite ${c.inPhrase}, vjerojatno ste primijetili da vaš novac kupuje sve manje. Trebate više ${c.nounPlural} da kupite iste stvari. Trebate više ${c.nounPlural} da održite isti životni standard.`;
		case "intro_2":
			return `Ali ne mora tako biti.`;
		case "intro_highlight":
			return `Život je postao jeftiniji za ljude koji su posljednje 4 godine štedjeli u Bitcoinu.`;
		case "proof_h2":
			return `Evo dokaza: vaš novac gubi vrijednost`;
		case "proof_p1":
			return `Svaki ${c.noun} na vašem bankovnom računu svake godine kupuje sve manje. To se događa jer ne postoji ograničenje za broj ${c.nounPlural} koji se mogu stvoriti.`;
		case "proof_p2":
			return `Ova neograničena ponuda glavni je uzrok inflacije. Posljednjih godina količina ${c.nounPlural} u optjecaju dramatično je porasla.`;
		case "proof_p3":
			return `Kad se stvara više novca ni iz čega, sve poskupljuje. Uključujući sirovine koje tvrtke kupuju za izradu proizvoda — što za vas znači više cijene.`;
		case "proof_p4":
			return `Kako državni dug raste, tiska se sve više novca jer je sve manje ljudi voljno posuđivati novac vladi.`;
		case "proof_p5_before":
			return `Ako ne možete posuditi, ne možete ni potrošiti. Ali kad vlada`;
		case "proof_p5_link":
			return `ne može posuditi`;
		case "proof_p5_after":
			return `, jednostavno tiska više novca.`;
		case "proof_p6":
			return `Više državnog duga znači više tiskanja novca. Više tiskanja novca znači više inflacije. I tome se ne nazire kraj.`;
		case "btc_h2":
			return `Bitcoin nema inflaciju`;
		case "btc_p1":
			return `Inflacija znači da vaš novac s vremenom kupuje sve manje. Bitcoin je bolji novac jer nema inflaciju.`;
		case "btc_p2_before":
			return `${c.label} ima neograničenu ponudu, što znači da se uvijek može tiskati još.`;
		case "btc_p2_link":
			return `Bitcoin je rijedak`;
		case "btc_p2_after":
			return `, jer ima maksimalnu ponudu od 21 milijuna Bitcoina. Nitko ne može stvoriti više.`;
		case "btc_p3":
			return `Povijesno gledano, Bitcoin je s vremenom povećavao kupovnu moć, dok je ${c.label} svoju gubio. Mnogi ljudi koriste Bitcoin kao dugoročni štedni račun — novac koji ostaje netaknut godinama dok mu vrijednost raste.`;
		case "btc_p4":
			return `Što biste radije: štedjeli ${c.inPhrase} — ${c.nounPlural} koji s vremenom kupuju sve manje — ili štedjeli u Bitcoinu koji povijesno kupuje sve više?`;
		case "freedom_h2":
			return `Bitcoin je također alat slobode`;
		case "freedom_p1":
			return `Bitcoin mreža nije ničije vlasništvo. Niti ju jedna vlada niti ijedna tvrtka ne kontrolira. Izgrađena je da štiti vašu slobodu i vaš novac.`;
		case "freedom_p2":
			return `Ljudi širom svijeta upravo sada koriste Bitcoin za zaštitu svoje slobode — čak i kad im vlade ne žele pomoći ili ih pokušavaju zaustaviti.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Kupovne moći izgubljeno u 4 godine";
		case "stat_source_bpr":
			return "Izvor: Bitcoin Price Report ←";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Saznajte više ←",
	inflation_freedom_scarce_title: "Rijedak",
	inflation_freedom_scarce_desc:
		"Nikada neće biti više od 21 milijuna Bitcoina. Nitko ne može tiskati još.",
	inflation_freedom_decentralized_title: "Decentraliziran",
	inflation_freedom_decentralized_desc:
		"Bitcoin ne kontrolira jedna strana — ni vlada ni tvrtka.",
	inflation_freedom_permissionless_title: "Bez dozvole",
	inflation_freedom_permissionless_desc:
		"Bilo tko, bilo gdje, može se pridružiti mreži. Nitko vas ne može zaustaviti.",
	inflation_freedom_sovereign_title: "Suveren",
	inflation_freedom_sovereign_desc:
		"Novi sustav slobodan od političara i njihovih prekršenih obećanja.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milijuna",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Fiksno zauvijek",
	inflation_stat_bitcoin_source: "Izvor: Bitcoin whitepaper ←",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Danas",
	inflation_stat_currency_counting: "I još raste...",
	inflation_stat_currency_detail_4yr_lost:
		"Kupovne moći izgubljeno u 4 godine",
	inflation_stat_currency_source_cpi: "Izvor: FRED CPI ←",
	inflation_stat_currency_source_debt: "Izvor: FRED državni dug ←",
	inflation_stat_currency_source_m1: "Izvor: FRED ponuda novca M1 ←",
	inflation_stat_currency_source_m1_short: "Izvor: FRED ←",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Kupovne moći stečeno u 4 godine",
	inflation_stat_btc_source_bpr: "Izvor: Bitcoin Price Report ←",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Radnici su preko Bitcoina vratili pristup svom novcu nakon što su im bankovni računi zamrznuti.",
	inflation_story_nigeria_title: "Nigerija",
	inflation_story_nigeria_desc:
		"Prosvjednici su koristili Bitcoin za financiranje svog pokreta nakon što su banke odbile poslovati.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Rudarenje Bitcoina očistilo je otpad od ugljena koji vlada nije bila spremna očistiti.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Rudarenje Bitcoina pomoglo je održati električnu mrežu uspravnom tijekom velike oluje.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — grafikon prinosa za 4 godine (sve valute)",
	sources_bitcoin_source_code:
		"Izvorni kod Bitcoina — limit ponude od 21 milijun",
	sources_canadian_trucker:
		"Prosvjed kanadskih kamiondžija — Bitcoin za zaobilaženje zamrznutih bankovnih računa (YouTube)",
	sources_mempool_space:
		"Mempool.space — podaci o ponudi i rudarenju Bitcoina",
	sources_nigeria_endsars:
		"Quartz Africa — kako je Bitcoin financirao nigerijski pokret EndSARS",
	sources_pennsylvania_mining:
		"Rudarenje Bitcoina spašava metan iz otpada od ugljena u Pennsylvaniji (YouTube)",
	sources_texas_mining:
		"Rudarenje Bitcoina i električna mreža Texasa (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin nema inflaciju, ali vaš novac ima.",
	inflation_choose: "Odaberite svoju valutu i pogledajte dokaze",
	inflation_choose_another: "← Odaberite drugu valutu",
	inflation_sticker_learn: "Naučite kako Bitcoin može pomoći.",
	inflation_sticker_lets_find_out: "Saznajmo.",
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
		`translate-inflation (hr): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
