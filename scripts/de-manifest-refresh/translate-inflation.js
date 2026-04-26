#!/usr/bin/env node
/**
 * German manifest refresh — inflation namespace translator.
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
	"de.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "US-Dollar",
		longNameNom: "US-Dollar",
		noun: "Dollar",
		nounPlural: "Dollar",
		label: "US-Dollar",
		existenceTitle: "Im Umlauf befindliche US-Dollar",
		debtTitle: "Staatsverschuldung der USA",
	},
	eur: {
		longName: "Euro",
		longNameNom: "Euro",
		noun: "Euro",
		nounPlural: "Euro",
		label: "Euro",
		existenceTitle: "Im Umlauf befindliche Euro",
		debtTitle: "Staatsverschuldung der Eurozone",
	},
	aud: {
		longName: "australischen Dollar",
		longNameNom: "australische Dollar",
		noun: "australische Dollar",
		nounPlural: "australische Dollar",
		label: "Australischer Dollar",
		existenceTitle: "Im Umlauf befindliche australische Dollar",
		debtTitle: "Staatsverschuldung Australiens",
	},
	brl: {
		longName: "brasilianischen Real",
		longNameNom: "brasilianische Real",
		noun: "brasilianische Real",
		nounPlural: "brasilianische Real",
		label: "Brasilianischer Real",
		existenceTitle: "Im Umlauf befindliche brasilianische Real",
		debtTitle: "Staatsverschuldung Brasiliens",
	},
	cad: {
		longName: "kanadischen Dollar",
		longNameNom: "kanadische Dollar",
		noun: "kanadische Dollar",
		nounPlural: "kanadische Dollar",
		label: "Kanadischer Dollar",
		existenceTitle: "Im Umlauf befindliche kanadische Dollar",
		debtTitle: "Staatsverschuldung Kanadas",
	},
	gbp: {
		longName: "britischen Pfund",
		longNameNom: "britische Pfund",
		noun: "Pfund",
		nounPlural: "Pfund",
		label: "Britisches Pfund",
		existenceTitle: "Im Umlauf befindliche britische Pfund",
		debtTitle: "Staatsverschuldung des Vereinigten Königreichs",
	},
	ils: {
		longName: "israelischen Schekel",
		longNameNom: "israelische Schekel",
		noun: "Schekel",
		nounPlural: "Schekel",
		label: "Israelischer Schekel",
		existenceTitle: "Im Umlauf befindliche Schekel",
		debtTitle: "Staatsverschuldung Israels",
	},
	inr: {
		longName: "indischen Rupien",
		longNameNom: "indische Rupien",
		noun: "Rupien",
		nounPlural: "Rupien",
		label: "Indische Rupie",
		existenceTitle: "Im Umlauf befindliche Rupien",
		debtTitle: "Staatsverschuldung Indiens",
	},
	jpy: {
		longName: "japanischen Yen",
		longNameNom: "japanische Yen",
		noun: "Yen",
		nounPlural: "Yen",
		label: "Japanischer Yen",
		existenceTitle: "Im Umlauf befindliche Yen",
		debtTitle: "Staatsverschuldung Japans",
	},
	mxn: {
		longName: "mexikanischen Pesos",
		longNameNom: "mexikanische Pesos",
		noun: "Pesos",
		nounPlural: "Pesos",
		label: "Mexikanischer Peso",
		existenceTitle: "Im Umlauf befindliche Pesos",
		debtTitle: "Staatsverschuldung Mexikos",
	},
	nzd: {
		longName: "neuseeländischen Dollar",
		longNameNom: "neuseeländische Dollar",
		noun: "neuseeländische Dollar",
		nounPlural: "neuseeländische Dollar",
		label: "Neuseeländischer Dollar",
		existenceTitle: "Im Umlauf befindliche neuseeländische Dollar",
		debtTitle: "Staatsverschuldung Neuseelands",
	},
	php: {
		longName: "philippinischen Pesos",
		longNameNom: "philippinische Pesos",
		noun: "Pesos",
		nounPlural: "Pesos",
		label: "Philippinischer Peso",
		existenceTitle: "Im Umlauf befindliche Pesos",
		debtTitle: "Staatsverschuldung der Philippinen",
	},
	thb: {
		longName: "thailändischen Baht",
		longNameNom: "thailändische Baht",
		noun: "Baht",
		nounPlural: "Baht",
		label: "Thailändischer Baht",
		existenceTitle: "Im Umlauf befindliche Baht",
		debtTitle: "Staatsverschuldung Thailands",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Wenn Du in ${c.longName} sparst, ist Dir sicher aufgefallen, dass Du jedes Jahr weniger kaufen kannst. Du brauchst mehr ${c.nounPlural}, um die gleiche Menge an Waren zu kaufen. Du brauchst mehr ${c.nounPlural}, um Deinen Lebensstandard zu halten.`;
		case "intro_2":
			return `Aber so muss es nicht sein.`;
		case "intro_highlight":
			return `In den letzten vier Jahren haben Menschen, die in Bitcoin sparen, erlebt, dass das Leben günstiger wird.`;
		case "proof_h2":
			return `Hier ist der Beweis: Dein Geld verliert an Wert`;
		case "proof_p1":
			return `Jeder ${c.noun} auf Deinem Bankkonto kauft jedes Jahr weniger. Das liegt daran, dass es keine feste Obergrenze für die Menge an ${c.nounPlural} gibt, die geschaffen werden können.`;
		case "proof_p2":
			return `Dieses unbegrenzte Angebot ist die Hauptursache für Inflation. In den letzten Jahren ist die im Umlauf befindliche Menge an ${c.nounPlural} dramatisch gestiegen.`;
		case "proof_p3":
			return `Wenn mehr Geld aus dem Nichts geschaffen wird, steigen die Preise für alles. Das betrifft auch die Rohstoffe, die Unternehmen zur Herstellung von Produkten kaufen — was zu höheren Preisen für Dich führt.`;
		case "proof_p4":
			return `Da die Staatsverschuldung immer weiter steigt, wird mehr Geld gedruckt, weil immer weniger Menschen dem Staat Geld leihen wollen.`;
		case "proof_p5_before":
			return `Wenn Du Dir kein Geld leihen kannst, kannst Du nichts ausgeben. Aber wenn der Staat sich`;
		case "proof_p5_link":
			return `kein Geld leihen kann`;
		case "proof_p5_after":
			return `, druckt er einfach mehr davon.`;
		case "proof_p6":
			return `Mehr Staatsverschuldung bedeutet mehr Gelddrucken. Mehr Gelddrucken bedeutet mehr Inflation. Und es gibt keine Anzeichen dafür, dass dies aufhören wird.`;
		case "btc_h2":
			return `Bitcoin hat keine Inflation`;
		case "btc_p1":
			return `Inflation bedeutet, dass Dein Geld mit der Zeit weniger kauft. Bitcoin ist gutes Geld, weil er keine Inflation hat.`;
		case "btc_p2_before":
			return `Das Angebot an ${c.longNameNom} ist unbegrenzt, was bedeutet, dass jederzeit mehr gedruckt werden kann.`;
		case "btc_p2_link":
			return `Bitcoin ist knapp`;
		case "btc_p2_after":
			return `, mit einer festen Obergrenze von 21 Millionen Bitcoin. Niemand kann mehr erschaffen.`;
		case "btc_p3":
			return `Historisch hat Bitcoin im Laufe der Zeit Kaufkraft gewonnen, während der ${c.longNameNom} sie verloren hat. Viele Menschen nutzen Bitcoin als langfristiges Sparkonto — Geld, das sie jahrelang wachsen lassen, ohne es anzurühren.`;
		case "btc_p4":
			return `Sparst Du lieber in ${c.longName}, die im Laufe der Zeit weniger kaufen? Oder in Bitcoin, der historisch im Laufe der Zeit mehr gekauft hat?`;
		case "freedom_h2":
			return `Bitcoin ist auch ein Werkzeug der Freiheit`;
		case "freedom_p1":
			return `Niemand kontrolliert das Bitcoin-Netzwerk. Keine Regierung und kein Unternehmen leitet es. Es wurde entwickelt, um Deine Freiheit und Dein Geld zu schützen.`;
		case "freedom_p2":
			return `Menschen auf der ganzen Welt nutzen Bitcoin bereits, um ihre Freiheit zu verteidigen — auch wenn ihre Regierungen sich weigern, ihnen zu helfen, oder versuchen, sie aufzuhalten.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Kaufkraftverlust in 4 Jahren";
		case "stat_source_bpr":
			return "Quelle: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Mehr erfahren →",
	inflation_freedom_scarce_title: "Knapp",
	inflation_freedom_scarce_desc:
		"Es wird jemals nur 21 Millionen Bitcoin geben. Niemand kann mehr drucken.",
	inflation_freedom_decentralized_title: "Dezentralisiert",
	inflation_freedom_decentralized_desc:
		"Bitcoin wird von keiner einzelnen Instanz kontrolliert — keine Regierung, kein Unternehmen.",
	inflation_freedom_permissionless_title: "Ohne Erlaubnis",
	inflation_freedom_permissionless_desc:
		"Jeder, überall, kann dem Netzwerk beitreten. Niemand kann Dich aufhalten.",
	inflation_freedom_sovereign_title: "Souverän",
	inflation_freedom_sovereign_desc:
		"Ein neues System, unabhängig von Politikern und ihren gebrochenen Versprechen.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 Millionen",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Für immer festgelegt",
	inflation_stat_bitcoin_source: "Quelle: Bitcoin-Whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Heute",
	inflation_stat_currency_counting: "und es werden immer mehr...",
	inflation_stat_currency_detail_4yr_lost:
		"Kaufkraftverlust in 4 Jahren",
	inflation_stat_currency_source_cpi: "Quelle: FRED CPI →",
	inflation_stat_currency_source_debt:
		"Quelle: FRED Staatsverschuldung →",
	inflation_stat_currency_source_m1:
		"Quelle: FRED Geldmenge M1 →",
	inflation_stat_currency_source_m1_short: "Quelle: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Kaufkraftgewinn in 4 Jahren",
	inflation_stat_btc_source_bpr: "Quelle: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Arbeiter erhielten mit Bitcoin wieder Zugriff auf ihr Geld, nachdem ihre Bankkonten eingefroren worden waren.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Demonstranten finanzierten ihre Bewegung mit Bitcoin, nachdem Banken die Zusammenarbeit verweigert hatten.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Bitcoin-Mining beseitigte Kohleabfälle, deren Beseitigung die Regierung verweigert hatte.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Bitcoin-Mining half, das Stromnetz während eines schweren Sturms am Laufen zu halten.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4-Jahres-Rendite-Grafik (alle Währungen)",
	sources_bitcoin_source_code:
		"Bitcoin-Quellcode — 21-Millionen-Angebotsobergrenze",
	sources_canadian_trucker:
		"Protest der kanadischen Trucker — Bitcoin wurde zur Umgehung eingefrorener Bankkonten genutzt (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin-Angebots- und Mining-Daten",
	sources_nigeria_endsars:
		"Quartz Africa — wie Bitcoin die EndSARS-Proteste in Nigeria antreibt",
	sources_pennsylvania_mining:
		"Bitcoin-Mining in Pennsylvania rettet Methan aus Kohleabfällen (YouTube)",
	sources_texas_mining:
		"Bitcoin-Mining und das texanische Stromnetz (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin hat keine Inflation, aber Dein Geld schon.",
	inflation_choose: "Wähle Deine Währung und sieh Dir den Beweis an",
	inflation_choose_another: "← Eine andere Währung wählen",
	inflation_sticker_learn: "Erfahre, wie Bitcoin helfen kann.",
	inflation_sticker_lets_find_out: "Lass es uns herausfinden.",
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
		`translate-inflation (de): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
