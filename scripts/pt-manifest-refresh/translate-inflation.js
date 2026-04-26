#!/usr/bin/env node
/**
 * Portuguese (European PT) manifest refresh — inflation namespace translator.
 *
 * Per-currency keys (13 currencies × ~25 suffixes) plus shared non-currency
 * labels / stories / sources / manifest-changed keys.
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
	"pt.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "dólares americanos",
		noun: "dólar",
		nounPlural: "dólares",
		label: "Dólar americano",
		existenceTitle: "Dólares americanos em circulação",
		debtTitle: "Dívida pública federal total",
	},
	eur: {
		longName: "euros",
		noun: "euro",
		nounPlural: "euros",
		label: "Euro",
		existenceTitle: "Euros em circulação",
		debtTitle: "Dívida pública da zona euro",
	},
	aud: {
		longName: "dólares australianos",
		noun: "dólar australiano",
		nounPlural: "dólares australianos",
		label: "Dólar australiano",
		existenceTitle: "Dólares australianos em circulação",
		debtTitle: "Dívida pública da Austrália",
	},
	brl: {
		longName: "reais brasileiros",
		noun: "real",
		nounPlural: "reais",
		label: "Real brasileiro",
		existenceTitle: "Reais em circulação",
		debtTitle: "Dívida pública do Brasil",
	},
	cad: {
		longName: "dólares canadianos",
		noun: "dólar canadiano",
		nounPlural: "dólares canadianos",
		label: "Dólar canadiano",
		existenceTitle: "Dólares canadianos em circulação",
		debtTitle: "Dívida pública do Canadá",
	},
	gbp: {
		longName: "libras esterlinas",
		noun: "libra",
		nounPlural: "libras",
		label: "Libra esterlina",
		existenceTitle: "Libras em circulação",
		debtTitle: "Dívida pública do Reino Unido",
	},
	ils: {
		longName: "shekels israelitas",
		noun: "shekel",
		nounPlural: "shekels",
		label: "Shekel israelita",
		existenceTitle: "Shekels em circulação",
		debtTitle: "Dívida pública de Israel",
	},
	inr: {
		longName: "rupias indianas",
		noun: "rupia",
		nounPlural: "rupias",
		label: "Rupia indiana",
		existenceTitle: "Rupias em circulação",
		debtTitle: "Dívida pública da Índia",
	},
	jpy: {
		longName: "ienes japoneses",
		noun: "iene",
		nounPlural: "ienes",
		label: "Iene japonês",
		existenceTitle: "Ienes em circulação",
		debtTitle: "Dívida pública do Japão",
	},
	mxn: {
		longName: "pesos mexicanos",
		noun: "peso",
		nounPlural: "pesos",
		label: "Peso mexicano",
		existenceTitle: "Pesos mexicanos em circulação",
		debtTitle: "Dívida pública do México",
	},
	nzd: {
		longName: "dólares neozelandeses",
		noun: "dólar neozelandês",
		nounPlural: "dólares neozelandeses",
		label: "Dólar neozelandês",
		existenceTitle: "Dólares neozelandeses em circulação",
		debtTitle: "Dívida pública da Nova Zelândia",
	},
	php: {
		longName: "pesos filipinos",
		noun: "peso",
		nounPlural: "pesos",
		label: "Peso filipino",
		existenceTitle: "Pesos filipinos em circulação",
		debtTitle: "Dívida pública das Filipinas",
	},
	thb: {
		longName: "bahts tailandeses",
		noun: "baht",
		nounPlural: "bahts",
		label: "Baht tailandês",
		existenceTitle: "Bahts em circulação",
		debtTitle: "Dívida pública da Tailândia",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Se poupas em ${c.longName}, provavelmente já reparaste que o teu dinheiro chega para menos a cada ano. Precisas de mais ${c.nounPlural} para comprar a mesma quantidade de coisas. Precisas de mais ${c.nounPlural} para manter o teu nível de vida.`;
		case "intro_2":
			return `Mas não tem de ser assim.`;
		case "intro_highlight":
			return `Nos últimos quatro anos, quem poupa em Bitcoin vê a sua vida a ficar mais barata.`;
		case "proof_h2":
			return `Aqui está a prova: o teu dinheiro está a perder valor`;
		case "proof_p1":
			return `Cada ${c.noun} na tua conta bancária consegue comprar menos a cada ano. Isto acontece porque não existe um limite fixo para a quantidade de ${c.nounPlural} que pode ser criada.`;
		case "proof_p2":
			return `Essa oferta ilimitada é a principal causa da inflação. Nos últimos anos, a quantidade de ${c.nounPlural} em circulação aumentou drasticamente.`;
		case "proof_p3":
			return `Quando se cria mais dinheiro do nada, os preços de tudo sobem. Isto inclui as matérias-primas que as empresas compram para fabricar produtos, o que se traduz em preços mais altos para ti.`;
		case "proof_p4":
			return `À medida que a dívida pública continua a aumentar, é impresso mais dinheiro porque cada vez menos pessoas querem emprestar ao governo.`;
		case "proof_p5_before":
			return `Se não consegues pedir dinheiro emprestado, não o podes gastar. Mas quando o governo`;
		case "proof_p5_link":
			return `não consegue pedir emprestado`;
		case "proof_p5_after":
			return `, simplesmente imprime mais.`;
		case "proof_p6":
			return `Mais dívida pública significa mais impressão de dinheiro. Mais impressão de dinheiro significa mais inflação. E não há sinais de que vá parar.`;
		case "btc_h2":
			return `O Bitcoin não tem inflação`;
		case "btc_p1":
			return `Inflação significa que o teu dinheiro compra menos com o tempo. O Bitcoin é melhor dinheiro porque não tem inflação.`;
		case "btc_p2_before":
			return `Os ${c.longName} têm uma oferta ilimitada, o que significa que pode ser impresso mais a qualquer momento.`;
		case "btc_p2_link":
			return `O Bitcoin é escasso`;
		case "btc_p2_after":
			return `, com um limite fixo de 21 milhões de bitcoin. Ninguém pode criar mais.`;
		case "btc_p3":
			return `Historicamente, o Bitcoin ganhou poder de compra ao longo do tempo, enquanto os ${c.longName} o perderam. Muitas pessoas usam o Bitcoin como conta poupança a longo prazo — dinheiro que deixam crescer durante anos sem mexer.`;
		case "btc_p4":
			return `Preferes poupar em ${c.longName}, que compram menos com o tempo? Ou em Bitcoin, que historicamente compra mais com o tempo?`;
		case "freedom_h2":
			return `O Bitcoin também é uma ferramenta de liberdade`;
		case "freedom_p1":
			return `Ninguém controla a rede Bitcoin. Nenhum governo nem empresa a administra. Foi concebida para proteger a tua liberdade e o teu dinheiro.`;
		case "freedom_p2":
			return `Pessoas em todo o mundo já estão a usar o Bitcoin para defender a sua liberdade — mesmo quando os seus governos se recusam a ajudá-las ou tentam impedi-las.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Poder de compra perdido em 4 anos";
		case "stat_source_bpr":
			return "Fonte: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Saber mais →",
	inflation_freedom_scarce_title: "Escasso",
	inflation_freedom_scarce_desc:
		"Apenas existirão 21 milhões de bitcoin. Ninguém pode imprimir mais.",
	inflation_freedom_decentralized_title: "Descentralizado",
	inflation_freedom_decentralized_desc:
		"O Bitcoin não é controlado por nenhuma entidade — nem governo nem empresa.",
	inflation_freedom_permissionless_title: "Sem permissões",
	inflation_freedom_permissionless_desc:
		"Qualquer pessoa, em qualquer lugar, pode ligar-se à rede. Ninguém te pode impedir.",
	inflation_freedom_sovereign_title: "Soberano",
	inflation_freedom_sovereign_desc:
		"Um sistema novo, independente dos políticos e das suas promessas falhadas.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 milhões",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Fixo para sempre",
	inflation_stat_bitcoin_source: "Fonte: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Hoje",
	inflation_stat_currency_counting: "e a aumentar...",
	inflation_stat_currency_detail_4yr_lost:
		"Poder de compra perdido em 4 anos",
	inflation_stat_currency_source_cpi: "Fonte: FRED CPI →",
	inflation_stat_currency_source_debt: "Fonte: FRED dívida pública →",
	inflation_stat_currency_source_m1: "Fonte: FRED oferta monetária M1 →",
	inflation_stat_currency_source_m1_short: "Fonte: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Poder de compra ganho em 4 anos",
	inflation_stat_btc_source_bpr: "Fonte: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Canadá",
	inflation_story_canada_desc:
		"Os trabalhadores recuperaram o acesso ao seu dinheiro através do Bitcoin, depois de as suas contas bancárias terem sido congeladas.",
	inflation_story_nigeria_title: "Nigéria",
	inflation_story_nigeria_desc:
		"Manifestantes usaram Bitcoin para financiar o seu movimento, depois de os bancos se recusarem a colaborar com eles.",
	inflation_story_pennsylvania_title: "Pensilvânia",
	inflation_story_pennsylvania_desc:
		"A mineração de Bitcoin limpou resíduos de carvão que o governo se recusava a tratar.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"A mineração de Bitcoin ajudou a manter a rede elétrica a funcionar durante uma grande tempestade.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — gráfico de desempenho a 4 anos (todas as moedas)",
	sources_bitcoin_source_code:
		"Código-fonte do Bitcoin — o limite de oferta de 21 milhões",
	sources_canadian_trucker:
		"Protesto dos camionistas canadianos — o Bitcoin foi usado para contornar contas bancárias congeladas (YouTube)",
	sources_mempool_space:
		"Mempool.space — dados de oferta e mineração de Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — como o Bitcoin está a impulsionar os protestos EndSARS na Nigéria",
	sources_pennsylvania_mining:
		"Mineração de Bitcoin na Pensilvânia resgata metano de resíduos de carvão (YouTube)",
	sources_texas_mining:
		"Mineração de Bitcoin e a rede elétrica do Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"O Bitcoin não tem inflação, mas o teu dinheiro tem.",
	inflation_choose: "Escolhe o teu dinheiro e vê a prova",
	inflation_choose_another: "← Escolhe outro dinheiro",
	inflation_sticker_learn: "Aprende como é que o Bitcoin pode ajudar.",
	inflation_sticker_lets_find_out: "Vamos descobrir.",
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
		`translate-inflation (pt): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
