#!/usr/bin/env node
/**
 * Spanish manifest refresh — inflation namespace translator.
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
	"es.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "dólares estadounidenses",
		noun: "dólar",
		nounPlural: "dólares",
		label: "Dólar estadounidense",
		existenceTitle: "Dólares estadounidenses en circulación",
		debtTitle: "Deuda pública federal total",
	},
	eur: {
		longName: "euros",
		noun: "euro",
		nounPlural: "euros",
		label: "Euro",
		existenceTitle: "Euros en circulación",
		debtTitle: "Deuda pública de la eurozona",
	},
	aud: {
		longName: "dólares australianos",
		noun: "dólar australiano",
		nounPlural: "dólares australianos",
		label: "Dólar australiano",
		existenceTitle: "Dólares australianos en circulación",
		debtTitle: "Deuda pública de Australia",
	},
	brl: {
		longName: "reales brasileños",
		noun: "real",
		nounPlural: "reales",
		label: "Real brasileño",
		existenceTitle: "Reales en circulación",
		debtTitle: "Deuda pública de Brasil",
	},
	cad: {
		longName: "dólares canadienses",
		noun: "dólar canadiense",
		nounPlural: "dólares canadienses",
		label: "Dólar canadiense",
		existenceTitle: "Dólares canadienses en circulación",
		debtTitle: "Deuda pública de Canadá",
	},
	gbp: {
		longName: "libras esterlinas",
		noun: "libra",
		nounPlural: "libras",
		label: "Libra esterlina",
		existenceTitle: "Libras en circulación",
		debtTitle: "Deuda pública del Reino Unido",
	},
	ils: {
		longName: "séqueles israelíes",
		noun: "séquel",
		nounPlural: "séqueles",
		label: "Séquel israelí",
		existenceTitle: "Séqueles en circulación",
		debtTitle: "Deuda pública de Israel",
	},
	inr: {
		longName: "rupias indias",
		noun: "rupia",
		nounPlural: "rupias",
		label: "Rupia india",
		existenceTitle: "Rupias en circulación",
		debtTitle: "Deuda pública de la India",
	},
	jpy: {
		longName: "yenes japoneses",
		noun: "yen",
		nounPlural: "yenes",
		label: "Yen japonés",
		existenceTitle: "Yenes en circulación",
		debtTitle: "Deuda pública de Japón",
	},
	mxn: {
		longName: "pesos mexicanos",
		noun: "peso",
		nounPlural: "pesos",
		label: "Peso mexicano",
		existenceTitle: "Pesos mexicanos en circulación",
		debtTitle: "Deuda pública de México",
	},
	nzd: {
		longName: "dólares neozelandeses",
		noun: "dólar neozelandés",
		nounPlural: "dólares neozelandeses",
		label: "Dólar neozelandés",
		existenceTitle: "Dólares neozelandeses en circulación",
		debtTitle: "Deuda pública de Nueva Zelanda",
	},
	php: {
		longName: "pesos filipinos",
		noun: "peso",
		nounPlural: "pesos",
		label: "Peso filipino",
		existenceTitle: "Pesos filipinos en circulación",
		debtTitle: "Deuda pública de Filipinas",
	},
	thb: {
		longName: "bahts tailandeses",
		noun: "baht",
		nounPlural: "bahts",
		label: "Baht tailandés",
		existenceTitle: "Bahts en circulación",
		debtTitle: "Deuda pública de Tailandia",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Si ahorras en ${c.longName}, probablemente hayas notado que tu dinero alcanza para menos cada año. Necesitas más ${c.nounPlural} para comprar la misma cantidad de cosas. Necesitas más ${c.nounPlural} para mantener tu nivel de vida.`;
		case "intro_2":
			return `Pero no tiene por qué ser así.`;
		case "intro_highlight":
			return `En los últimos cuatro años, quienes ahorran en Bitcoin ven cómo su vida se vuelve más barata.`;
		case "proof_h2":
			return `Aquí tienes la prueba: tu dinero está perdiendo valor`;
		case "proof_p1":
			return `Cada ${c.noun} en tu cuenta bancaria puede comprar menos cada año. Esto se debe a que no existe un límite fijo en la cantidad de ${c.nounPlural} que pueden crearse.`;
		case "proof_p2":
			return `Esa oferta ilimitada es la principal causa de la inflación. En los últimos años, la cantidad de ${c.nounPlural} en circulación ha aumentado drásticamente.`;
		case "proof_p3":
			return `Cuando se crea más dinero de la nada, los precios de todo suben. Esto incluye las materias primas que las empresas compran para fabricar productos, lo que se traduce en precios más altos para ti.`;
		case "proof_p4":
			return `A medida que la deuda pública sigue aumentando, se imprime más dinero porque cada vez menos personas quieren prestar al gobierno.`;
		case "proof_p5_before":
			return `Si no puedes pedir dinero prestado, no puedes gastarlo. Pero cuando el gobierno`;
		case "proof_p5_link":
			return `no puede pedir prestado`;
		case "proof_p5_after":
			return `, simplemente imprime más.`;
		case "proof_p6":
			return `Más deuda pública significa más impresión de dinero. Más impresión de dinero significa más inflación. Y no hay señales de que vaya a detenerse.`;
		case "btc_h2":
			return `Bitcoin no tiene inflación`;
		case "btc_p1":
			return `Inflación significa que tu dinero compra menos con el tiempo. Bitcoin es mejor dinero porque no tiene inflación.`;
		case "btc_p2_before":
			return `Los ${c.longName} tienen una oferta ilimitada, lo que significa que pueden imprimirse más en cualquier momento.`;
		case "btc_p2_link":
			return `Bitcoin es escaso`;
		case "btc_p2_after":
			return `, con un tope fijo de 21 millones de bitcoin. Nadie puede crear más.`;
		case "btc_p3":
			return `Históricamente, Bitcoin ha ganado poder adquisitivo con el tiempo, mientras que los ${c.longName} lo han perdido. Muchas personas usan Bitcoin como cuenta de ahorro a largo plazo — dinero que dejan crecer durante años sin tocar.`;
		case "btc_p4":
			return `¿Prefieres ahorrar en ${c.longName}, que compran menos con el tiempo? ¿O en Bitcoin, que históricamente compra más con el tiempo?`;
		case "freedom_h2":
			return `Bitcoin también es una herramienta de libertad`;
		case "freedom_p1":
			return `Nadie controla la red Bitcoin. Ningún gobierno ni empresa la administra. Está diseñada para proteger tu libertad y tu dinero.`;
		case "freedom_p2":
			return `Personas de todo el mundo ya están usando Bitcoin para defender su libertad — incluso cuando sus gobiernos se niegan a ayudarles o intentan detenerlos.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Poder adquisitivo perdido en 4 años";
		case "stat_source_bpr":
			return "Fuente: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Más información →",
	inflation_freedom_scarce_title: "Escaso",
	inflation_freedom_scarce_desc:
		"Solo habrá 21 millones de bitcoin. Nadie puede imprimir más.",
	inflation_freedom_decentralized_title: "Descentralizado",
	inflation_freedom_decentralized_desc:
		"Bitcoin no está controlado por ninguna entidad — ni gobierno ni empresa.",
	inflation_freedom_permissionless_title: "Sin permisos",
	inflation_freedom_permissionless_desc:
		"Cualquiera, desde cualquier lugar, puede conectarse a la red. Nadie puede detenerte.",
	inflation_freedom_sovereign_title: "Soberano",
	inflation_freedom_sovereign_desc:
		"Un sistema nuevo, independiente de los políticos y sus promesas rotas.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 millones",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Fijo para siempre",
	inflation_stat_bitcoin_source: "Fuente: libro blanco de Bitcoin →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Hoy",
	inflation_stat_currency_counting: "y sigue aumentando...",
	inflation_stat_currency_detail_4yr_lost:
		"Poder adquisitivo perdido en 4 años",
	inflation_stat_currency_source_cpi: "Fuente: FRED CPI →",
	inflation_stat_currency_source_debt: "Fuente: FRED deuda pública →",
	inflation_stat_currency_source_m1: "Fuente: FRED oferta monetaria M1 →",
	inflation_stat_currency_source_m1_short: "Fuente: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Poder adquisitivo ganado en 4 años",
	inflation_stat_btc_source_bpr: "Fuente: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Canadá",
	inflation_story_canada_desc:
		"Los trabajadores recuperaron el acceso a su dinero usando Bitcoin, después de que sus cuentas bancarias fueran congeladas.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Manifestantes usaron Bitcoin para financiar su movimiento, después de que los bancos se negaran a trabajar con ellos.",
	inflation_story_pennsylvania_title: "Pensilvania",
	inflation_story_pennsylvania_desc:
		"La minería de Bitcoin limpió residuos de carbón que el gobierno se negaba a abordar.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"La minería de Bitcoin ayudó a mantener funcionando la red eléctrica durante una gran tormenta.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — gráfica de rendimiento a 4 años (todas las monedas)",
	sources_bitcoin_source_code:
		"Código fuente de Bitcoin — el tope de suministro de 21 millones",
	sources_canadian_trucker:
		"Protesta de camioneros canadienses — Bitcoin se usó para eludir cuentas bancarias congeladas (YouTube)",
	sources_mempool_space:
		"Mempool.space — datos de suministro y minería de Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — cómo Bitcoin está impulsando las protestas EndSARS en Nigeria",
	sources_pennsylvania_mining:
		"La minería de Bitcoin en Pensilvania rescata metano de residuos de carbón (YouTube)",
	sources_texas_mining:
		"La minería de Bitcoin y la red eléctrica de Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin no tiene inflación, pero tu dinero sí.",
	inflation_choose: "Elige tu moneda y mira la prueba",
	inflation_choose_another: "← Elige otra moneda",
	inflation_sticker_learn: "Aprende cómo Bitcoin puede ayudar.",
	inflation_sticker_lets_find_out: "Vamos a descubrirlo.",
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
		`translate-inflation (es): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
