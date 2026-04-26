#!/usr/bin/env node
/**
 * Norwegian (Bokmål) manifest refresh — inflation namespace translator.
 *
 * Handles the per-currency keys (14 currencies × ~25 suffixes) plus the
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
	"nb.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
// Norwegian Bokmål uses common gender (-en/-et) and plurals -er/-e.

const CURRENCY = {
	usd: {
		longName: "amerikanske dollar",
		longNameNom: "amerikanske dollar",
		noun: "dollar",
		nounPlural: "dollar",
		label: "Amerikanske dollar",
		existenceTitle: "Amerikanske dollar i omløp",
		debtTitle: "Total føderal gjeld",
	},
	eur: {
		longName: "euro",
		longNameNom: "euro",
		noun: "euro",
		nounPlural: "euro",
		label: "Euro",
		existenceTitle: "Euro i omløp",
		debtTitle: "Eurosonens offentlige gjeld",
	},
	aud: {
		longName: "australske dollar",
		longNameNom: "australske dollar",
		noun: "australsk dollar",
		nounPlural: "australske dollar",
		label: "Australske dollar",
		existenceTitle: "Australske dollar i omløp",
		debtTitle: "Australias offentlige gjeld",
	},
	brl: {
		longName: "brasilianske real",
		longNameNom: "brasilianske real",
		noun: "real",
		nounPlural: "real",
		label: "Brasiliansk real",
		existenceTitle: "Real i omløp",
		debtTitle: "Brasils offentlige gjeld",
	},
	cad: {
		longName: "kanadiske dollar",
		longNameNom: "kanadiske dollar",
		noun: "kanadisk dollar",
		nounPlural: "kanadiske dollar",
		label: "Kanadiske dollar",
		existenceTitle: "Kanadiske dollar i omløp",
		debtTitle: "Canadas offentlige gjeld",
	},
	gbp: {
		longName: "britiske pund",
		longNameNom: "britiske pund",
		noun: "pund",
		nounPlural: "pund",
		label: "Britiske pund",
		existenceTitle: "Pund i omløp",
		debtTitle: "Storbritannias offentlige gjeld",
	},
	ils: {
		longName: "israelske shekel",
		longNameNom: "israelske shekel",
		noun: "shekel",
		nounPlural: "shekel",
		label: "Israelsk shekel",
		existenceTitle: "Shekel i omløp",
		debtTitle: "Israels offentlige gjeld",
	},
	inr: {
		longName: "indiske rupi",
		longNameNom: "indiske rupi",
		noun: "rupi",
		nounPlural: "rupi",
		label: "Indisk rupi",
		existenceTitle: "Rupi i omløp",
		debtTitle: "Indias offentlige gjeld",
	},
	jpy: {
		longName: "japanske yen",
		longNameNom: "japanske yen",
		noun: "yen",
		nounPlural: "yen",
		label: "Japansk yen",
		existenceTitle: "Yen i omløp",
		debtTitle: "Japans offentlige gjeld",
	},
	mxn: {
		longName: "meksikanske peso",
		longNameNom: "meksikanske peso",
		noun: "peso",
		nounPlural: "peso",
		label: "Meksikansk peso",
		existenceTitle: "Peso i omløp",
		debtTitle: "Mexicos offentlige gjeld",
	},
	nzd: {
		longName: "new zealandske dollar",
		longNameNom: "new zealandske dollar",
		noun: "new zealandsk dollar",
		nounPlural: "new zealandske dollar",
		label: "New Zealand-dollar",
		existenceTitle: "New Zealand-dollar i omløp",
		debtTitle: "New Zealands offentlige gjeld",
	},
	php: {
		longName: "filippinske peso",
		longNameNom: "filippinske peso",
		noun: "peso",
		nounPlural: "peso",
		label: "Filippinsk peso",
		existenceTitle: "Peso i omløp",
		debtTitle: "Filippinenes offentlige gjeld",
	},
	thb: {
		longName: "thailandske baht",
		longNameNom: "thailandske baht",
		noun: "baht",
		nounPlural: "baht",
		label: "Thailandsk baht",
		existenceTitle: "Baht i omløp",
		debtTitle: "Thailands offentlige gjeld",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Hvis du sparer i ${c.longName}, har du sannsynligvis lagt merke til at du kan kjøpe mindre for pengene dine hvert år. Du trenger flere ${c.nounPlural} for å kjøpe samme mengde varer. Du trenger flere ${c.nounPlural} for å opprettholde levestandarden din.`;
		case "intro_2":
			return `Men slik trenger det ikke være.`;
		case "intro_highlight":
			return `I løpet av de siste fire årene har de som sparer i Bitcoin opplevd at livet blir billigere.`;
		case "proof_h2":
			return `Her er beviset: pengene dine taper verdi`;
		case "proof_p1":
			return `Hver ${c.noun} på bankkontoen din kan kjøpe mindre hvert år. Det skjer fordi det ikke finnes noen fast grense for hvor mange ${c.nounPlural} som kan skapes.`;
		case "proof_p2":
			return `Denne ubegrensede tilførselen er hovedårsaken til inflasjon. I løpet av de siste årene har antallet ${c.nounPlural} i omløp økt dramatisk.`;
		case "proof_p3":
			return `Når flere penger skapes ut av løse luften, stiger prisene på alt. Det gjelder også råvarer som bedrifter kjøper for å lage produkter — noe som fører til høyere priser for deg.`;
		case "proof_p4":
			return `Etter hvert som statsgjelden fortsetter å vokse, trykkes det mer penger fordi færre og færre vil låne penger til staten.`;
		case "proof_p5_before":
			return `Hvis du ikke kan låne penger, kan du ikke bruke penger. Men når staten`;
		case "proof_p5_link":
			return `ikke kan låne`;
		case "proof_p5_after":
			return `, trykker den bare flere.`;
		case "proof_p6":
			return `Mer statsgjeld betyr mer pengetrykking. Mer pengetrykking betyr mer inflasjon. Og det er ingen tegn til at det vil stoppe.`;
		case "btc_h2":
			return `Bitcoin har ikke inflasjon`;
		case "btc_p1":
			return `Inflasjon betyr at pengene dine kjøper mindre over tid. Bitcoin er bedre penger fordi det ikke har inflasjon.`;
		case "btc_p2_before":
			return `Tilførselen av ${c.longNameNom} er ubegrenset, noe som betyr at flere kan trykkes når som helst.`;
		case "btc_p2_link":
			return `Bitcoin er knappe`;
		case "btc_p2_after":
			return `, med en fast grense på 21 millioner bitcoin. Ingen kan skape flere.`;
		case "btc_p3":
			return `Historisk sett har Bitcoin fått kjøpekraft over tid, mens ${c.longNameNom} har tapt kjøpekraft. Mange bruker Bitcoin som en langsiktig sparekonto — penger de lar vokse i årevis uten å røre dem.`;
		case "btc_p4":
			return `Vil du heller spare i ${c.longName} som kjøper mindre over tid? Eller i Bitcoin, som historisk har kjøpt mer over tid?`;
		case "freedom_h2":
			return `Bitcoin er også et frihetsverktøy`;
		case "freedom_p1":
			return `Ingen kontrollerer Bitcoin-nettverket. Ingen regjering eller bedrift driver det. Det er bygget for å beskytte friheten din og pengene dine.`;
		case "freedom_p2":
			return `Mennesker over hele verden bruker allerede Bitcoin til å forsvare friheten sin — selv når regjeringene deres nekter å hjelpe dem eller forsøker å stoppe dem.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Kjøpekraft tapt over 4 år";
		case "stat_source_bpr":
			return "Kilde: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Lær mer →",
	inflation_freedom_scarce_title: "Knapp",
	inflation_freedom_scarce_desc:
		"Det vil bare noen gang eksistere 21 millioner bitcoin. Ingen kan trykke flere.",
	inflation_freedom_decentralized_title: "Desentralisert",
	inflation_freedom_decentralized_desc:
		"Bitcoin kontrolleres ikke av noen enkelt enhet — ingen regjering eller bedrift.",
	inflation_freedom_permissionless_title: "Tillatelsesfri",
	inflation_freedom_permissionless_desc:
		"Hvem som helst, hvor som helst, kan koble seg til nettverket. Ingen kan stoppe deg.",
	inflation_freedom_sovereign_title: "Suveren",
	inflation_freedom_sovereign_desc:
		"Et nytt system uavhengig av politikere og deres brutte løfter.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 millioner",
	inflation_stat_bitcoin_numeric: "(21 000 000)",
	inflation_stat_bitcoin_detail: "Fastsatt for alltid",
	inflation_stat_bitcoin_source: "Kilde: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "I dag",
	inflation_stat_currency_counting: "og fortsatt stigende ...",
	inflation_stat_currency_detail_4yr_lost: "Kjøpekraft tapt over 4 år",
	inflation_stat_currency_source_cpi: "Kilde: FRED KPI →",
	inflation_stat_currency_source_debt: "Kilde: FRED statsgjeld →",
	inflation_stat_currency_source_m1: "Kilde: FRED M1 pengemengde →",
	inflation_stat_currency_source_m1_short: "Kilde: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Kjøpekraft vunnet over 4 år",
	inflation_stat_btc_source_bpr: "Kilde: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Canada",
	inflation_story_canada_desc:
		"Arbeidere fikk tilgang til pengene sine ved hjelp av Bitcoin etter at bankkontoene deres ble fryst.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Demonstranter brukte Bitcoin til å finansiere bevegelsen sin etter at bankene nektet å samarbeide med dem.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Bitcoin-mining ryddet opp i kullavfall som myndighetene nektet å ta seg av.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Bitcoin-mining bidro til å holde strømnettet i gang under en stor storm.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — graf over 4-års avkastning (alle valutaer)",
	sources_bitcoin_source_code:
		"Bitcoins kildekode — tilbudsgrensen på 21 millioner",
	sources_canadian_trucker:
		"Kanadiske trailersjåførers protest — Bitcoin brukt til å omgå frosne bankkontoer (YouTube)",
	sources_mempool_space:
		"Mempool.space — data om Bitcoins tilbud og mining",
	sources_nigeria_endsars:
		"Quartz Africa — hvordan Bitcoin driver Nigerias EndSARS-protester",
	sources_pennsylvania_mining:
		"Bitcoin-mining i Pennsylvania redder metan fra kullavfall (YouTube)",
	sources_texas_mining:
		"Bitcoin-mining og Texas' strømnett (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin har ikke inflasjon, men det har pengene dine.",
	inflation_choose: "Velg valutaen din og se beviset",
	inflation_choose_another: "← Velg en annen valuta",
	inflation_sticker_learn: "Lær hvordan Bitcoin kan hjelpe.",
	inflation_sticker_lets_find_out: "La oss finne ut av det.",
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
		`translate-inflation (nb): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
