#!/usr/bin/env node
/**
 * Catalan manifest refresh — inflation namespace translator.
 *
 * Handles:
 *   - 327 per-currency keys (13 currencies × ~25 suffixes each)
 *   - non-currency keys (shared labels, stories, sources, etc.)
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
	"ca.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "dòlars dels EUA",
		longNameNom: "el dòlar dels EUA",
		noun: "dòlar",
		nounPlural: "dòlars",
		label: "Dòlars dels EUA",
		existenceTitle: "Dòlars en circulació",
		debtTitle: "Deute federal total",
	},
	eur: {
		longName: "euros",
		longNameNom: "l'euro",
		noun: "euro",
		nounPlural: "euros",
		label: "Euros",
		existenceTitle: "Euros en circulació",
		debtTitle: "Deute públic de la zona euro",
	},
	aud: {
		longName: "dòlars australians",
		longNameNom: "el dòlar australià",
		noun: "dòlar australià",
		nounPlural: "dòlars australians",
		label: "Dòlars australians",
		existenceTitle: "Dòlars australians en circulació",
		debtTitle: "Deute públic d'Austràlia",
	},
	brl: {
		longName: "reals brasilers",
		longNameNom: "el real brasiler",
		noun: "real",
		nounPlural: "reals",
		label: "Reals brasilers",
		existenceTitle: "Reals en circulació",
		debtTitle: "Deute públic del Brasil",
	},
	cad: {
		longName: "dòlars canadencs",
		longNameNom: "el dòlar canadenc",
		noun: "dòlar canadenc",
		nounPlural: "dòlars canadencs",
		label: "Dòlars canadencs",
		existenceTitle: "Dòlars canadencs en circulació",
		debtTitle: "Deute públic del Canadà",
	},
	gbp: {
		longName: "lliures esterlines",
		longNameNom: "la lliura esterlina",
		noun: "lliura",
		nounPlural: "lliures",
		label: "Lliures esterlines",
		existenceTitle: "Lliures en circulació",
		debtTitle: "Deute públic del Regne Unit",
	},
	ils: {
		longName: "xéquels israelians",
		longNameNom: "el xéquel israelià",
		noun: "xéquel",
		nounPlural: "xéquels",
		label: "Xéquels israelians",
		existenceTitle: "Xéquels en circulació",
		debtTitle: "Deute públic d'Israel",
	},
	inr: {
		longName: "rupies índies",
		longNameNom: "la rupia índia",
		noun: "rupia",
		nounPlural: "rupies",
		label: "Rupies índies",
		existenceTitle: "Rupies en circulació",
		debtTitle: "Deute públic de l'Índia",
	},
	jpy: {
		longName: "iens japonesos",
		longNameNom: "el ien japonès",
		noun: "ien",
		nounPlural: "iens",
		label: "Iens japonesos",
		existenceTitle: "Iens en circulació",
		debtTitle: "Deute públic del Japó",
	},
	mxn: {
		longName: "pesos mexicans",
		longNameNom: "el peso mexicà",
		noun: "peso",
		nounPlural: "pesos",
		label: "Pesos mexicans",
		existenceTitle: "Pesos en circulació",
		debtTitle: "Deute públic de Mèxic",
	},
	nzd: {
		longName: "dòlars neozelandesos",
		longNameNom: "el dòlar neozelandès",
		noun: "dòlar neozelandès",
		nounPlural: "dòlars neozelandesos",
		label: "Dòlars neozelandesos",
		existenceTitle: "Dòlars neozelandesos en circulació",
		debtTitle: "Deute públic de Nova Zelanda",
	},
	php: {
		longName: "pesos filipins",
		longNameNom: "el peso filipí",
		noun: "peso",
		nounPlural: "pesos",
		label: "Pesos filipins",
		existenceTitle: "Pesos en circulació",
		debtTitle: "Deute públic de les Filipines",
	},
	thb: {
		longName: "bahts tailandesos",
		longNameNom: "el baht tailandès",
		noun: "baht",
		nounPlural: "bahts",
		label: "Bahts tailandesos",
		existenceTitle: "Bahts en circulació",
		debtTitle: "Deute públic de Tailàndia",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Si estalvies en ${c.longName}, hauràs notat que cada any pots comprar menys. Necessites més ${c.nounPlural} per comprar la mateixa quantitat de béns. Necessites més ${c.nounPlural} per mantenir el teu nivell de vida.`;
		case "intro_2":
			return `Però no ha de ser així.`;
		case "intro_highlight":
			return `Durant els últims quatre anys, els qui estalvien en Bitcoin han vist que la vida es fa més barata.`;
		case "proof_h2":
			return `Aquí tens la prova: els teus diners estan perdent valor`;
		case "proof_p1":
			return `Cada ${c.noun} del teu compte bancari compra menys cada any. Això passa perquè no hi ha cap límit estricte sobre quants ${c.nounPlural} es poden crear.`;
		case "proof_p2":
			return `Aquesta oferta il·limitada és la causa principal de la inflació. Durant els últims anys, la quantitat de ${c.nounPlural} en circulació ha augmentat espectacularment.`;
		case "proof_p3":
			return `Quan es creen més diners del no-res, el preu de tot puja. Això inclou les matèries primeres que les empreses compren per fer productes — fet que comporta preus més alts per a tu.`;
		case "proof_p4":
			return `Com que el govern continua augmentant el seu deute, s'imprimeixen més diners perquè cada vegada menys gent vol prestar diners al govern.`;
		case "proof_p5_before":
			return `Si no pots demanar diners prestats, no pots gastar. Però quan el govern`;
		case "proof_p5_link":
			return `no pot demanar diners prestats`;
		case "proof_p5_after":
			return `, simplement n'imprimeix més.`;
		case "proof_p6":
			return `Més deute públic significa més impressió de diners. Més impressió de diners significa més inflació. I no hi ha cap senyal que es vagi a aturar.`;
		case "btc_h2":
			return `Bitcoin no té inflació`;
		case "btc_p1":
			return `La inflació significa que els teus diners compren menys amb el temps. Bitcoin són bons diners perquè no té inflació.`;
		case "btc_p2_before":
			return `L'oferta ${c.longNameNom !== "l'euro" ? "de " + c.longName : "d'" + c.longName} és il·limitada, fet que significa que se'n poden imprimir més en qualsevol moment.`;
		case "btc_p2_link":
			return `Bitcoin és escàs`;
		case "btc_p2_after":
			return `, amb un límit estricte de 21 milions de Bitcoin. Ningú no en pot crear més.`;
		case "btc_p3":
			return `Històricament, Bitcoin ha guanyat poder adquisitiu amb el temps, mentre que ${c.longNameNom} n'ha perdut. Molta gent utilitza Bitcoin com un compte d'estalvi a llarg termini: diners que deixen créixer durant anys sense tocar-los.`;
		case "btc_p4":
			return `Prefereixes estalviar en ${c.nounPlural} que compraran menys amb el temps? O en Bitcoin, que històricament ha comprat més amb el temps?`;
		case "freedom_h2":
			return `Bitcoin també és una eina de llibertat`;
		case "freedom_p1":
			return `Ningú no controla la xarxa Bitcoin. No la gestiona cap govern ni cap empresa. Està feta per protegir la teva llibertat i els teus diners.`;
		case "freedom_p2":
			return `Gent d'arreu del món ja utilitza Bitcoin per defensar la seva llibertat — fins i tot quan els seus governs es neguen a ajudar-los o intenten aturar-los.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Poder adquisitiu perdut en 4 anys";
		case "stat_source_bpr":
			return "Font: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Més informació →",
	inflation_freedom_scarce_title: "Escàs",
	inflation_freedom_scarce_desc:
		"Només existiran 21 milions de Bitcoin, per sempre. Ningú no en pot imprimir més.",
	inflation_freedom_decentralized_title: "Descentralitzat",
	inflation_freedom_decentralized_desc:
		"Cap entitat única — cap govern ni empresa — controla Bitcoin.",
	inflation_freedom_permissionless_title: "Sense permisos",
	inflation_freedom_permissionless_desc:
		"Qualsevol persona, des de qualsevol lloc, es pot connectar a la xarxa. Ningú no et pot aturar.",
	inflation_freedom_sovereign_title: "Sobirà",
	inflation_freedom_sovereign_desc:
		"Un nou sistema independent dels polítics i les seves promeses trencades.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milions",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Fix per sempre",
	inflation_stat_bitcoin_source: "Font: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Avui",
	inflation_stat_currency_counting: "i continua pujant...",
	inflation_stat_currency_detail_4yr_lost:
		"Poder adquisitiu perdut en 4 anys",
	inflation_stat_currency_source_cpi: "Font: FRED CPI →",
	inflation_stat_currency_source_debt: "Font: FRED deute públic →",
	inflation_stat_currency_source_m1: "Font: FRED M1 massa monetària →",
	inflation_stat_currency_source_m1_short: "Font: FRED →",

	// Bitcoin price report "gained" stat
	inflation_stat_btc_detail_4yr:
		"Poder adquisitiu guanyat en 4 anys",
	inflation_stat_btc_source_bpr: "Font: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Canadà",
	inflation_story_canada_desc:
		"Els treballadors van accedir als seus diners utilitzant Bitcoin després que els seus comptes bancaris fossin congelats.",
	inflation_story_nigeria_title: "Nigèria",
	inflation_story_nigeria_desc:
		"Els manifestants van utilitzar Bitcoin per finançar el seu moviment després que els bancs es neguessin a treballar amb ells.",
	inflation_story_pennsylvania_title: "Pennsilvània",
	inflation_story_pennsylvania_desc:
		"La mineria de Bitcoin va netejar residus de carbó que el govern es va negar a afrontar.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"La mineria de Bitcoin va ajudar a mantenir la xarxa elèctrica en funcionament durant una gran tempesta.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — gràfic de rendiment a 4 anys (totes les divises)",
	sources_bitcoin_source_code:
		"Codi font de Bitcoin — límit d'oferta de 21 milions",
	sources_canadian_trucker:
		"Protesta dels camioners canadencs — es va utilitzar Bitcoin per evitar comptes bancaris congelats (YouTube)",
	sources_mempool_space:
		"Mempool.space — dades d'oferta i mineria de Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — com Bitcoin està impulsant les protestes EndSARS a Nigèria",
	sources_pennsylvania_mining:
		"La mineria de Bitcoin a Pennsilvània recupera metà dels residus (YouTube)",
	sources_texas_mining:
		"Mineria de Bitcoin i la xarxa elèctrica de Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin no té inflació, però els teus diners sí.",
	inflation_choose: "Tria la teva divisa per veure'n la prova",
	inflation_choose_another: "← Tria una altra divisa",
	inflation_sticker_learn: "Descobreix com Bitcoin pot ajudar.",
	inflation_sticker_lets_find_out: "Anem a descobrir-ho.",
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
		`translate-inflation (ca): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
