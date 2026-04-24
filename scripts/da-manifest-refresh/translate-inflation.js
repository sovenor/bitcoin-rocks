#!/usr/bin/env node
/**
 * Danish manifest refresh — inflation namespace translator.
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
	"da.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
// Danish uses common gender (-en) plurals like -e/-er. We use the plural noun for
// "in X" (i X-erne) constructions where appropriate and simple forms otherwise.

const CURRENCY = {
	usd: {
		longName: "amerikanske dollars",
		longNameNom: "amerikanske dollar",
		noun: "dollar",
		nounPlural: "dollars",
		label: "Amerikansk dollar",
		existenceTitle: "Amerikanske dollars i omløb",
		debtTitle: "Samlet føderal gæld",
	},
	eur: {
		longName: "euro",
		longNameNom: "euro",
		noun: "euro",
		nounPlural: "euro",
		label: "Euro",
		existenceTitle: "Euro i omløb",
		debtTitle: "Eurozonens offentlige gæld",
	},
	aud: {
		longName: "australske dollars",
		longNameNom: "australske dollar",
		noun: "australske dollar",
		nounPlural: "australske dollars",
		label: "Australsk dollar",
		existenceTitle: "Australske dollars i omløb",
		debtTitle: "Australiens offentlige gæld",
	},
	brl: {
		longName: "brasilianske real",
		longNameNom: "brasilianske real",
		noun: "real",
		nounPlural: "real",
		label: "Brasiliansk real",
		existenceTitle: "Real i omløb",
		debtTitle: "Brasiliens offentlige gæld",
	},
	cad: {
		longName: "canadiske dollars",
		longNameNom: "canadiske dollar",
		noun: "canadiske dollar",
		nounPlural: "canadiske dollars",
		label: "Canadisk dollar",
		existenceTitle: "Canadiske dollars i omløb",
		debtTitle: "Canadas offentlige gæld",
	},
	gbp: {
		longName: "britiske pund",
		longNameNom: "britiske pund",
		noun: "pund",
		nounPlural: "pund",
		label: "Britisk pund",
		existenceTitle: "Pund i omløb",
		debtTitle: "Storbritanniens offentlige gæld",
	},
	ils: {
		longName: "israelske shekel",
		longNameNom: "israelske shekel",
		noun: "shekel",
		nounPlural: "shekel",
		label: "Israelsk shekel",
		existenceTitle: "Shekel i omløb",
		debtTitle: "Israels offentlige gæld",
	},
	inr: {
		longName: "indiske rupees",
		longNameNom: "indiske rupee",
		noun: "rupee",
		nounPlural: "rupees",
		label: "Indisk rupee",
		existenceTitle: "Rupees i omløb",
		debtTitle: "Indiens offentlige gæld",
	},
	jpy: {
		longName: "japanske yen",
		longNameNom: "japanske yen",
		noun: "yen",
		nounPlural: "yen",
		label: "Japansk yen",
		existenceTitle: "Yen i omløb",
		debtTitle: "Japans offentlige gæld",
	},
	mxn: {
		longName: "mexicanske peso",
		longNameNom: "mexicanske peso",
		noun: "peso",
		nounPlural: "peso",
		label: "Mexicansk peso",
		existenceTitle: "Peso i omløb",
		debtTitle: "Mexicos offentlige gæld",
	},
	nzd: {
		longName: "newzealandske dollars",
		longNameNom: "newzealandske dollar",
		noun: "newzealandske dollar",
		nounPlural: "newzealandske dollars",
		label: "Newzealandsk dollar",
		existenceTitle: "Newzealandske dollars i omløb",
		debtTitle: "New Zealands offentlige gæld",
	},
	php: {
		longName: "filippinske peso",
		longNameNom: "filippinske peso",
		noun: "peso",
		nounPlural: "peso",
		label: "Filippinsk peso",
		existenceTitle: "Peso i omløb",
		debtTitle: "Filippinernes offentlige gæld",
	},
	thb: {
		longName: "thailandske baht",
		longNameNom: "thailandske baht",
		noun: "baht",
		nounPlural: "baht",
		label: "Thailandsk baht",
		existenceTitle: "Baht i omløb",
		debtTitle: "Thailands offentlige gæld",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Hvis du sparer op i ${c.longName}, har du sikkert bemærket, at du kan købe mindre for dine penge hvert år. Du har brug for flere ${c.nounPlural} for at købe samme mængde varer. Du har brug for flere ${c.nounPlural} for at opretholde din levestandard.`;
		case "intro_2":
			return `Men sådan behøver det ikke være.`;
		case "intro_highlight":
			return `I løbet af de seneste fire år har de, der sparer op i Bitcoin, oplevet, at livet bliver billigere.`;
		case "proof_h2":
			return `Her er beviset: dine penge mister værdi`;
		case "proof_p1":
			return `Hver ${c.noun} på din bankkonto kan købe mindre hvert år. Det sker, fordi der ikke er nogen fast grænse for, hvor mange ${c.nounPlural} der kan skabes.`;
		case "proof_p2":
			return `Denne ubegrænsede forsyning er hovedårsagen til inflation. I løbet af de seneste år er antallet af ${c.nounPlural} i omløb steget dramatisk.`;
		case "proof_p3":
			return `Når der skabes flere penge ud af den blå luft, stiger priserne på alt. Det gælder også de råvarer, virksomheder køber for at fremstille produkter — hvilket fører til højere priser for dig.`;
		case "proof_p4":
			return `Efterhånden som statsgælden bliver ved med at vokse, trykkes der flere penge, fordi færre og færre mennesker vil låne staten penge.`;
		case "proof_p5_before":
			return `Hvis du ikke kan låne penge, kan du ikke bruge penge. Men når staten`;
		case "proof_p5_link":
			return `ikke kan låne`;
		case "proof_p5_after":
			return `, trykker den bare flere.`;
		case "proof_p6":
			return `Mere statsgæld betyder mere pengeudskrivning. Mere pengeudskrivning betyder mere inflation. Og intet tyder på, at det vil stoppe.`;
		case "btc_h2":
			return `Bitcoin har ingen inflation`;
		case "btc_p1":
			return `Inflation betyder, at dine penge kan købe mindre over tid. Bitcoin er gode penge, fordi det ikke har inflation.`;
		case "btc_p2_before":
			return `Udbuddet af ${c.longNameNom} er ubegrænset, hvilket betyder, at der kan udskrives flere når som helst.`;
		case "btc_p2_link":
			return `Bitcoin er knappe`;
		case "btc_p2_after":
			return `, med en fast grænse på 21 millioner bitcoin. Ingen kan skabe flere.`;
		case "btc_p3":
			return `Historisk set har Bitcoin fået købekraft over tid, mens ${c.longNameNom} har mistet købekraft. Mange bruger Bitcoin som en langsigtet opsparingskonto — penge, som de lader vokse i årevis uden at røre dem.`;
		case "btc_p4":
			return `Vil du hellere spare op i ${c.longName}, der køber mindre over tid? Eller i Bitcoin, som historisk har købt mere over tid?`;
		case "freedom_h2":
			return `Bitcoin er også et frihedsværktøj`;
		case "freedom_p1":
			return `Ingen kontrollerer Bitcoin-netværket. Ingen regering eller virksomhed driver det. Det er bygget til at beskytte din frihed og dine penge.`;
		case "freedom_p2":
			return `Mennesker verden over bruger allerede Bitcoin til at forsvare deres frihed — selv når deres regeringer nægter at hjælpe dem eller forsøger at stoppe dem.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Købekraft tabt over 4 år";
		case "stat_source_bpr":
			return "Kilde: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Lær mere →",
	inflation_freedom_scarce_title: "Knap",
	inflation_freedom_scarce_desc:
		"Der vil kun nogensinde eksistere 21 millioner bitcoin. Ingen kan udskrive flere.",
	inflation_freedom_decentralized_title: "Decentraliseret",
	inflation_freedom_decentralized_desc:
		"Bitcoin kontrolleres ikke af nogen enkelt enhed — ingen regering eller virksomhed.",
	inflation_freedom_permissionless_title: "Uden tilladelse",
	inflation_freedom_permissionless_desc:
		"Enhver, fra hvor som helst, kan tilslutte sig netværket. Ingen kan stoppe dig.",
	inflation_freedom_sovereign_title: "Suverænt",
	inflation_freedom_sovereign_desc:
		"Et nyt system uafhængigt af politikere og deres brudte løfter.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 millioner",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Fastsat for evigt",
	inflation_stat_bitcoin_source: "Kilde: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "I dag",
	inflation_stat_currency_counting: "og stadig stigende...",
	inflation_stat_currency_detail_4yr_lost: "Købekraft tabt over 4 år",
	inflation_stat_currency_source_cpi: "Kilde: FRED CPI →",
	inflation_stat_currency_source_debt: "Kilde: FRED statsgæld →",
	inflation_stat_currency_source_m1: "Kilde: FRED M1-pengemængde →",
	inflation_stat_currency_source_m1_short: "Kilde: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Købekraft vundet over 4 år",
	inflation_stat_btc_source_bpr: "Kilde: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Canada",
	inflation_story_canada_desc:
		"Arbejdere fik adgang til deres penge ved hjælp af Bitcoin, efter at deres bankkonti var blevet frosset.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Demonstranter brugte Bitcoin til at finansiere deres bevægelse, efter at bankerne nægtede at samarbejde med dem.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Bitcoin-mining ryddede op i kulaffald, som regeringen nægtede at tage sig af.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Bitcoin-mining hjalp med at holde elnettet kørende under en stor storm.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — graf over 4-års afkast (alle valutaer)",
	sources_bitcoin_source_code:
		"Bitcoins kildekode — forsyningsloftet på 21 millioner",
	sources_canadian_trucker:
		"Canadiske lastbilchaufførers protest — Bitcoin brugt til at omgå frosne bankkonti (YouTube)",
	sources_mempool_space:
		"Mempool.space — data om Bitcoins forsyning og mining",
	sources_nigeria_endsars:
		"Quartz Africa — hvordan Bitcoin driver Nigerias EndSARS-protester",
	sources_pennsylvania_mining:
		"Bitcoin-mining i Pennsylvania redder metan fra kulaffald (YouTube)",
	sources_texas_mining:
		"Bitcoin-mining og Texas' elnet (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin har ingen inflation, men det har dine penge.",
	inflation_choose: "Vælg din valuta og se beviset",
	inflation_choose_another: "← Vælg en anden valuta",
	inflation_sticker_learn: "Lær, hvordan Bitcoin kan hjælpe.",
	inflation_sticker_lets_find_out: "Lad os finde ud af det.",
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
		`translate-inflation (da): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
