#!/usr/bin/env node
/**
 * Romanian (ro) manifest refresh — inflation namespace translator.
 *
 * Romanian conventions:
 * - Latin script with diacritics (ă, â, î, ș, ț).
 * - "Bitcoin" stays as "Bitcoin".
 * - Decimal: comma; thousands: dot/space. Card numerics keep the FRED
 *   US-style formatting because they're rendered raw.
 * - "21 de milioane de Bitcoin", "miliarde", "trilioane".
 * - Style: friendly second-person ("tu") for educational copy.
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
	"ro.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		inIn: "în dolari americani",
		noun: "dolar american",
		nounPl: "dolari americani",
		label: "Dolari americani",
		existenceTitle: "Dolari americani în circulație",
		debtTitle: "Datoria publică totală a Statelor Unite",
	},
	eur: {
		inIn: "în euro",
		noun: "euro",
		nounPl: "euro",
		label: "Euro",
		existenceTitle: "Euro în circulație",
		debtTitle: "Datoria publică totală a zonei euro",
	},
	aud: {
		inIn: "în dolari australieni",
		noun: "dolar australian",
		nounPl: "dolari australieni",
		label: "Dolari australieni",
		existenceTitle: "Dolari australieni în circulație",
		debtTitle: "Datoria publică totală a Australiei",
	},
	brl: {
		inIn: "în reali brazilieni",
		noun: "real brazilian",
		nounPl: "reali brazilieni",
		label: "Reali brazilieni",
		existenceTitle: "Reali brazilieni în circulație",
		debtTitle: "Datoria publică totală a Braziliei",
	},
	cad: {
		inIn: "în dolari canadieni",
		noun: "dolar canadian",
		nounPl: "dolari canadieni",
		label: "Dolari canadieni",
		existenceTitle: "Dolari canadieni în circulație",
		debtTitle: "Datoria publică totală a Canadei",
	},
	gbp: {
		inIn: "în lire sterline",
		noun: "liră sterlină",
		nounPl: "lire sterline",
		label: "Lire sterline",
		existenceTitle: "Lire sterline în circulație",
		debtTitle: "Datoria publică totală a Regatului Unit",
	},
	ils: {
		inIn: "în șekeli israelieni",
		noun: "șekel",
		nounPl: "șekeli",
		label: "Șekeli israelieni",
		existenceTitle: "Șekeli israelieni în circulație",
		debtTitle: "Datoria publică totală a Israelului",
	},
	inr: {
		inIn: "în rupii indiene",
		noun: "rupie",
		nounPl: "rupii",
		label: "Rupii indiene",
		existenceTitle: "Rupii indiene în circulație",
		debtTitle: "Datoria publică totală a Indiei",
	},
	jpy: {
		inIn: "în yeni japonezi",
		noun: "yen",
		nounPl: "yeni",
		label: "Yeni japonezi",
		existenceTitle: "Yeni japonezi în circulație",
		debtTitle: "Datoria publică totală a Japoniei",
	},
	mxn: {
		inIn: "în pesos mexicani",
		noun: "peso mexican",
		nounPl: "pesos mexicani",
		label: "Pesos mexicani",
		existenceTitle: "Pesos mexicani în circulație",
		debtTitle: "Datoria publică totală a Mexicului",
	},
	nzd: {
		inIn: "în dolari neozeelandezi",
		noun: "dolar neozeelandez",
		nounPl: "dolari neozeelandezi",
		label: "Dolari neozeelandezi",
		existenceTitle: "Dolari neozeelandezi în circulație",
		debtTitle: "Datoria publică totală a Noii Zeelande",
	},
	php: {
		inIn: "în pesos filipinezi",
		noun: "peso filipinez",
		nounPl: "pesos filipinezi",
		label: "Pesos filipinezi",
		existenceTitle: "Pesos filipinezi în circulație",
		debtTitle: "Datoria publică totală a Filipinelor",
	},
	thb: {
		inIn: "în bahți thailandezi",
		noun: "baht",
		nounPl: "bahți",
		label: "Bahți thailandezi",
		existenceTitle: "Bahți thailandezi în circulație",
		debtTitle: "Datoria publică totală a Thailandei",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Dacă economisești ${c.inIn}, probabil ai observat că banii tăi cumpără mai puțin. Ai nevoie de mai mulți ${c.nounPl} pentru a cumpăra aceleași lucruri. Ai nevoie de mai mulți ${c.nounPl} doar pentru a-ți menține același nivel de trai.`;
		case "intro_2":
			return `Dar nu trebuie să fie așa.`;
		case "intro_highlight":
			return `Pentru cei care au economisit în Bitcoin în ultimii 4 ani, viața a devenit mai ieftină.`;
		case "proof_h2":
			return `Iată dovada: banii tăi își pierd valoarea`;
		case "proof_p1":
			return `Fiecare ${c.noun} din contul tău bancar își pierde valoarea de la un an la altul. Asta se întâmplă pentru că nu există o limită a câtor ${c.nounPl} pot fi creați.`;
		case "proof_p2":
			return `Această ofertă nelimitată este cauza principală a inflației. În ultimii ani, cantitatea de ${c.nounPl} aflată în circulație a crescut dramatic.`;
		case "proof_p3":
			return `Când se tipăresc mai mulți bani din nimic, totul devine mai scump. Inclusiv materiile prime pe care companiile le cumpără pentru a fabrica produsele, ceea ce înseamnă prețuri mai mari pentru tine.`;
		case "proof_p4":
			return `Pe măsură ce datoria publică crește, guvernele tipăresc tot mai mulți bani, pentru că tot mai puțini oameni sunt dispuși să împrumute statul.`;
		case "proof_p5_before":
			return `Dacă tu nu poți obține un împrumut, nu poți cheltui bani. Dar când guvernul`;
		case "proof_p5_link":
			return `nu poate obține un împrumut`;
		case "proof_p5_after":
			return `, pur și simplu tipărește banii.`;
		case "proof_p6":
			return `Mai multă datorie publică înseamnă mai multă tipărire de bani. Mai multă tipărire de bani înseamnă mai multă inflație. Și nu se vede niciun semn că s-ar opri.`;
		case "btc_h2":
			return `Bitcoin nu are inflație`;
		case "btc_p1":
			return `Inflația înseamnă că banii tăi cumpără mai puțin în timp. Bitcoin este bani mai buni pentru că nu are inflație.`;
		case "btc_p2_before":
			return `${c.label} au o ofertă nelimitată, ceea ce înseamnă că oricând se pot tipări mai mulți.`;
		case "btc_p2_link":
			return `Bitcoin este rar`;
		case "btc_p2_after":
			return `, pentru că are o ofertă maximă de 21 de milioane de Bitcoin. Nimeni nu poate tipări mai mult Bitcoin.`;
		case "btc_p3":
			return `Istoric, Bitcoin și-a crescut puterea de cumpărare în timp, în timp ce ${c.label.toLowerCase()} au pierdut-o. Mulți folosesc Bitcoin ca un cont de economii pe termen lung — bani pe care îi pun deoparte ani de zile, în timp ce valoarea lor crește.`;
		case "btc_p4":
			return `Ce ai prefera: să economisești ${c.inIn} — ${c.nounPl} care cumpără mai puțin în timp — sau să economisești în Bitcoin, care, istoric, a cumpărat mai mult în timp?`;
		case "freedom_h2":
			return `Bitcoin este și un instrument al libertății`;
		case "freedom_p1":
			return `Rețeaua Bitcoin nu aparține nimănui. Nu este controlată de niciun guvern sau corporație. Este construită pentru a-ți proteja libertatea și banii.`;
		case "freedom_p2":
			return `Astăzi, oameni din întreaga lume folosesc Bitcoin pentru a-și proteja libertatea — chiar și atunci când propriile guverne nu îi ajută sau încearcă să îi oprească.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Putere de cumpărare pierdută în 4 ani";
		case "stat_source_bpr":
			return "Sursă: Bitcoin Price Report \u2192";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Află mai multe \u2192",
	inflation_freedom_scarce_title: "Rar",
	inflation_freedom_scarce_desc:
		"Nu vor exista niciodată mai mult de 21 de milioane de Bitcoin. Nimeni nu poate tipări mai mult.",
	inflation_freedom_decentralized_title: "Descentralizat",
	inflation_freedom_decentralized_desc:
		"Nicio entitate — niciun guvern, nicio corporație — nu controlează Bitcoin.",
	inflation_freedom_permissionless_title: "Fără permisiune",
	inflation_freedom_permissionless_desc:
		"Oricine, de oriunde, se poate alătura rețelei. Nimeni nu te poate opri.",
	inflation_freedom_sovereign_title: "Suveran",
	inflation_freedom_sovereign_desc:
		"Un sistem nou, independent de politicieni și de promisiunile lor încălcate.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "21 de milioane",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Fixe pentru totdeauna",
	inflation_stat_bitcoin_source: "Sursă: Bitcoin Whitepaper \u2192",

	// Shared currency stat labels
	inflation_stat_comparison_today: "ASTĂZI",
	inflation_stat_currency_counting: "Și continuă să crească...",
	inflation_stat_currency_detail_4yr_lost:
		"Putere de cumpărare pierdută în 4 ani",
	inflation_stat_currency_source_cpi: "Sursă: FRED CPI \u2192",
	inflation_stat_currency_source_debt:
		"Sursă: Datoria publică FRED \u2192",
	inflation_stat_currency_source_m1:
		"Sursă: Masa monetară restrânsă FRED \u2192",
	inflation_stat_currency_source_m1_short: "Sursă: FRED \u2192",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr:
		"Putere de cumpărare câștigată în 4 ani",
	inflation_stat_btc_source_bpr: "Sursă: Bitcoin Price Report \u2192",

	// Freedom stories
	inflation_story_canada_title: "Canada",
	inflation_story_canada_desc:
		"Muncitorii au folosit Bitcoin pentru a-și accesa banii după ce conturile bancare le-au fost înghețate.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Protestatarii au folosit Bitcoin pentru a-și finanța mișcarea după ce băncile i-au exclus.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Mineritul Bitcoin curăță deșeurile de cărbune pe care guvernul a refuzat să le gestioneze.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Mineritul Bitcoin a ajutat la menținerea luminilor aprinse în timpul furtunilor mari.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — grafic al performanței pe 4 ani (toate monedele)",
	sources_bitcoin_source_code:
		"Codul sursă Bitcoin — Plafonul de ofertă de 21 de milioane",
	sources_canadian_trucker:
		"Protestele camionagiilor canadieni — Bitcoin folosit pentru a ocoli conturile bancare înghețate (YouTube)",
	sources_mempool_space:
		"Mempool.space — Date despre oferta și mineritul Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — Cum a alimentat Bitcoin protestele EndSARS din Nigeria",
	sources_pennsylvania_mining:
		"Mineritul Bitcoin în Pennsylvania reciclează deșeurile de metan (YouTube)",
	sources_texas_mining:
		"Mineritul Bitcoin în Texas și rețeaua electrică (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin nu are inflație, dar banii tăi au.",
	inflation_choose: "Alege moneda ta pentru a vedea dovada",
	inflation_choose_another: "\u2190 Alege altă monedă",
	inflation_sticker_learn:
		"Află cum te poate ajuta Bitcoin.",
	inflation_sticker_lets_find_out: "Hai să aflăm.",
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
		`translate-inflation (ro): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
