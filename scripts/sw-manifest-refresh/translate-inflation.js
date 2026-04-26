#!/usr/bin/env node
/**
 * Swahili manifest refresh — inflation namespace translator.
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
	"sw.json",
);

/* ─────────────── Per-currency labels & terms (Swahili) ─────────────── */
//
// Strategy: Swahili commonly transliterates currency names (dola, yuro, paundi,
// peso, rupia, yeni, n.k.). For each currency we provide:
//   longName       — locative/savings phrasing (e.g. "kwa dola za Marekani")
//   longNameNom    — nominative singular (e.g. "dola ya Marekani")
//   nounPlural     — generic noun used in counting/genitive contexts
//   label          — display label
//   existenceTitle — "X in circulation"
//   debtTitle      — "Total federal/public debt of …"

const CURRENCY = {
	usd: {
		longName: "kwa dola za Marekani",
		longNameNom: "dola ya Marekani",
		nounPlural: "dola",
		label: "Dola ya Marekani",
		existenceTitle: "Dola za Marekani zinazozunguka",
		debtTitle: "Jumla ya deni la shirikisho la Marekani",
	},
	eur: {
		longName: "kwa yuro",
		longNameNom: "yuro",
		nounPlural: "yuro",
		label: "Yuro",
		existenceTitle: "Yuro zinazozunguka",
		debtTitle: "Deni la umma la eneo la yuro",
	},
	aud: {
		longName: "kwa dola za Australia",
		longNameNom: "dola ya Australia",
		nounPlural: "dola za Australia",
		label: "Dola ya Australia",
		existenceTitle: "Dola za Australia zinazozunguka",
		debtTitle: "Deni la umma la Australia",
	},
	brl: {
		longName: "kwa reali za Brazili",
		longNameNom: "reali ya Brazili",
		nounPlural: "reali",
		label: "Reali ya Brazili",
		existenceTitle: "Reali zinazozunguka",
		debtTitle: "Deni la umma la Brazili",
	},
	cad: {
		longName: "kwa dola za Kanada",
		longNameNom: "dola ya Kanada",
		nounPlural: "dola za Kanada",
		label: "Dola ya Kanada",
		existenceTitle: "Dola za Kanada zinazozunguka",
		debtTitle: "Deni la umma la Kanada",
	},
	gbp: {
		longName: "kwa paundi za Uingereza",
		longNameNom: "paundi ya Uingereza",
		nounPlural: "paundi",
		label: "Paundi ya Uingereza",
		existenceTitle: "Paundi zinazozunguka",
		debtTitle: "Deni la umma la Uingereza",
	},
	ils: {
		longName: "kwa shekeli za Israeli",
		longNameNom: "shekeli ya Israeli",
		nounPlural: "shekeli",
		label: "Shekeli ya Israeli",
		existenceTitle: "Shekeli zinazozunguka",
		debtTitle: "Deni la umma la Israeli",
	},
	inr: {
		longName: "kwa rupia za India",
		longNameNom: "rupia ya India",
		nounPlural: "rupia",
		label: "Rupia ya India",
		existenceTitle: "Rupia zinazozunguka",
		debtTitle: "Deni la umma la India",
	},
	jpy: {
		longName: "kwa yeni za Japani",
		longNameNom: "yeni ya Japani",
		nounPlural: "yeni",
		label: "Yeni ya Japani",
		existenceTitle: "Yeni zinazozunguka",
		debtTitle: "Deni la umma la Japani",
	},
	mxn: {
		longName: "kwa peso za Mexico",
		longNameNom: "peso ya Mexico",
		nounPlural: "peso",
		label: "Peso ya Mexico",
		existenceTitle: "Peso zinazozunguka",
		debtTitle: "Deni la umma la Mexico",
	},
	nzd: {
		longName: "kwa dola za New Zealand",
		longNameNom: "dola ya New Zealand",
		nounPlural: "dola za New Zealand",
		label: "Dola ya New Zealand",
		existenceTitle: "Dola za New Zealand zinazozunguka",
		debtTitle: "Deni la umma la New Zealand",
	},
	php: {
		longName: "kwa peso za Ufilipino",
		longNameNom: "peso ya Ufilipino",
		nounPlural: "peso",
		label: "Peso ya Ufilipino",
		existenceTitle: "Peso zinazozunguka",
		debtTitle: "Deni la umma la Ufilipino",
	},
	thb: {
		longName: "kwa baht za Thailand",
		longNameNom: "baht ya Thailand",
		nounPlural: "baht",
		label: "Baht ya Thailand",
		existenceTitle: "Baht zinazozunguka",
		debtTitle: "Deni la umma la Thailand",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) return null;
	switch (suffix) {
		case "intro_1":
			return `Ikiwa unaweka akiba ${c.longName}, pengine umegundua kwamba kila mwaka unaweza kununua kidogo. Unahitaji ${c.nounPlural} zaidi ili kununua kiasi kile kile cha bidhaa. Unahitaji ${c.nounPlural} zaidi ili kudumisha hali yako ya maisha.`;
		case "intro_2":
			return `Lakini si lazima iwe hivyo.`;
		case "intro_highlight":
			return `Katika miaka minne iliyopita, watu wanaoweka akiba katika Bitcoin wameona maisha yakizidi kuwa nafuu.`;
		case "proof_h2":
			return `Hapa kuna ushahidi: pesa zako zinapoteza thamani`;
		case "proof_p1":
			return `Kila ${c.longNameNom} iliyo kwenye akaunti yako ya benki inanunua kidogo kila mwaka. Hii hutokea kwa sababu hakuna kikomo cha kiasi cha ${c.nounPlural} kinachoweza kuundwa.`;
		case "proof_p2":
			return `Ugavi huu usio na kikomo ndio sababu kuu ya mfumuko wa bei. Katika miaka michache iliyopita, kiasi cha ${c.nounPlural} kinachozunguka kimeongezeka kwa kiwango kikubwa.`;
		case "proof_p3":
			return `Wakati pesa zaidi zinaundwa kutoka mahali popote, bei za vitu vyote hupanda. Hii inajumuisha malighafi ambayo biashara hununua ili kutengeneza bidhaa — jambo linalosababisha bei za juu kwako.`;
		case "proof_p4":
			return `Wakati deni la serikali linaendelea kuongezeka, pesa zaidi huchapishwa kwa sababu watu wachache wako tayari kuiazima serikali.`;
		case "proof_p5_before":
			return `Ikiwa huwezi kukopa pesa, huwezi kutumia. Lakini wakati serikali`;
		case "proof_p5_link":
			return `haiwezi kukopa`;
		case "proof_p5_after":
			return `, huchapisha tu zaidi.`;
		case "proof_p6":
			return `Deni zaidi la serikali humaanisha uchapishaji zaidi wa pesa. Uchapishaji zaidi wa pesa humaanisha mfumuko mkubwa wa bei. Na hakuna ishara ya kukoma.`;
		case "btc_h2":
			return `Bitcoin haina mfumuko wa bei`;
		case "btc_p1":
			return `Mfumuko wa bei humaanisha pesa zako hununua kidogo kadri muda unavyopita. Bitcoin ni pesa nzuri kwa sababu haina mfumuko wa bei.`;
		case "btc_p2_before":
			return `Ugavi wa ${c.longNameNom} hauna kikomo, jambo linalomaanisha kwamba zaidi inaweza kuchapishwa wakati wowote.`;
		case "btc_p2_link":
			return `Bitcoin ni adimu`;
		case "btc_p2_after":
			return `, ikiwa na kikomo kigumu cha bitcoin milioni 21. Hakuna mtu anayeweza kuunda zaidi.`;
		case "btc_p3":
			return `Kihistoria, Bitcoin imepata nguvu ya kununua kadri muda unavyopita, huku ${c.longNameNom} imeipoteza. Wengi hutumia Bitcoin kama akaunti ya akiba ya muda mrefu — pesa wanazoiacha ikue kwa miaka bila kuigusa.`;
		case "btc_p4":
			return `Je, ungependa kuweka akiba ${c.longName} ambazo zinanunua kidogo kadri muda unavyopita? Au katika Bitcoin, ambayo imekuwa ikinunua zaidi?`;
		case "freedom_h2":
			return `Bitcoin pia ni chombo cha uhuru`;
		case "freedom_p1":
			return `Hakuna mtu anayedhibiti mtandao wa Bitcoin. Hauendeshwi na serikali yoyote au kampuni yoyote. Umejengwa ili kulinda uhuru wako na pesa zako.`;
		case "freedom_p2":
			return `Watu duniani kote tayari wanatumia Bitcoin kulinda uhuru wao — hata pale serikali zao zinapokataa kuwasaidia au kujaribu kuwasimamisha.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Nguvu ya kununua iliyopotea katika miaka 4";
		case "stat_source_bpr":
			return "Chanzo: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Jifunze zaidi →",
	inflation_freedom_scarce_title: "Adimu",
	inflation_freedom_scarce_desc:
		"Bitcoin milioni 21 tu zitawahi kuwepo. Hakuna mtu anayeweza kuchapisha zaidi.",
	inflation_freedom_decentralized_title: "Imegatuliwa",
	inflation_freedom_decentralized_desc:
		"Bitcoin haidhibitiwi na chombo chochote kimoja — wala serikali, wala kampuni.",
	inflation_freedom_permissionless_title: "Bila ruhusa",
	inflation_freedom_permissionless_desc:
		"Mtu yeyote anaweza kujiunga na mtandao kutoka popote. Hakuna mtu anayeweza kukusimamisha.",
	inflation_freedom_sovereign_title: "Huru",
	inflation_freedom_sovereign_desc:
		"Mfumo mpya, ulio huru kutoka kwa wanasiasa na ahadi zao zisizotekelezwa.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "Milioni 21",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Imewekwa imara milele",
	inflation_stat_bitcoin_source: "Chanzo: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Leo",
	inflation_stat_currency_counting: "na inaendelea kuongezeka …",
	inflation_stat_currency_detail_4yr_lost:
		"Nguvu ya kununua iliyopotea katika miaka 4",
	inflation_stat_currency_source_cpi: "Chanzo: FRED CPI →",
	inflation_stat_currency_source_debt: "Chanzo: deni la serikali la FRED →",
	inflation_stat_currency_source_m1: "Chanzo: ugavi wa pesa M1 wa FRED →",
	inflation_stat_currency_source_m1_short: "Chanzo: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Nguvu ya kununua iliyopatikana katika miaka 4",
	inflation_stat_btc_source_bpr: "Chanzo: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Wafanyakazi walipata pesa zao kupitia Bitcoin baada ya akaunti zao za benki kufungwa.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Waandamanaji walifadhili harakati zao kwa Bitcoin baada ya benki kukataa kuwasaidia.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Uchimbaji wa Bitcoin ulisafisha taka za makaa ya mawe ambazo serikali ilipuuza.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Uchimbaji wa Bitcoin ulisaidia kuweka gridi ya umeme ikifanya kazi wakati wa dhoruba kubwa.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — chati ya mapato ya miaka 4 (sarafu zote)",
	sources_bitcoin_source_code:
		"Msimbo wa chanzo wa Bitcoin — kikomo cha ugavi cha milioni 21",
	sources_canadian_trucker:
		"Maandamano ya madereva wa malori wa Kanada — Bitcoin ilitumika kupita akaunti za benki zilizofungwa (YouTube)",
	sources_mempool_space:
		"Mempool.space — data ya ugavi na uchimbaji wa Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — jinsi Bitcoin inavyoendesha maandamano ya EndSARS nchini Nigeria",
	sources_pennsylvania_mining:
		"Uchimbaji wa Bitcoin huko Pennsylvania unasafisha methane kutoka taka za makaa ya mawe (YouTube)",
	sources_texas_mining:
		"Uchimbaji wa Bitcoin na gridi ya umeme ya Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin haina mfumuko wa bei, lakini pesa zako zinao.",
	inflation_choose: "Chagua sarafu yako na uone ushahidi",
	inflation_choose_another: "← Chagua sarafu nyingine",
	inflation_sticker_learn: "Jifunze jinsi Bitcoin inavyoweza kusaidia.",
	inflation_sticker_lets_find_out: "Hebu tuone.",
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
		`translate-inflation (sw): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
