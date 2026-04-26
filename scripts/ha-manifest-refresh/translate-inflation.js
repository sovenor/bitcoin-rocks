#!/usr/bin/env node
/**
 * Hausa manifest refresh — inflation namespace translator.
 *
 * Per-currency × 13 currencies + shared non-currency labels / stories /
 * sources / manifest-changed keys.
 *
 * Hausa is a Chadic language using Latin script with hooked consonants
 * (ɓ, ɗ, ƙ, ƴ). Currency names follow conventional Hausa naming
 * (dalar Amurka, fam, yen, etc.). Numbers and currency symbols are
 * preserved verbatim.
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
	"ha.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "dalar Amurka",
		noun: "dala",
		nounPlural: "daloli",
		label: "Dalar Amurka",
		existenceTitle: "Dalolin Amurka da ke yawo",
		debtTitle: "Jimillar bashin tarayya na Amurka",
	},
	eur: {
		longName: "euro",
		noun: "euro",
		nounPlural: "euros",
		label: "Euro",
		existenceTitle: "Euros da ke yawo",
		debtTitle: "Bashin gwamnatin yankin Euro",
	},
	aud: {
		longName: "dalar Australia",
		noun: "dalar Australia",
		nounPlural: "dalolin Australia",
		label: "Dalar Australia",
		existenceTitle: "Dalolin Australia da ke yawo",
		debtTitle: "Bashin gwamnatin Australia",
	},
	brl: {
		longName: "real na Brazil",
		noun: "real",
		nounPlural: "reais",
		label: "Real na Brazil",
		existenceTitle: "Reais da ke yawo",
		debtTitle: "Bashin gwamnatin Brazil",
	},
	cad: {
		longName: "dalar Kanada",
		noun: "dalar Kanada",
		nounPlural: "dalolin Kanada",
		label: "Dalar Kanada",
		existenceTitle: "Dalolin Kanada da ke yawo",
		debtTitle: "Bashin gwamnatin Kanada",
	},
	gbp: {
		longName: "fam na Birtaniya",
		noun: "fam",
		nounPlural: "fam",
		label: "Fam na Birtaniya",
		existenceTitle: "Fam da ke yawo",
		debtTitle: "Bashin gwamnatin Birtaniya",
	},
	ils: {
		longName: "shekel na Isra'ila",
		noun: "shekel",
		nounPlural: "shekels",
		label: "Shekel na Isra'ila",
		existenceTitle: "Shekels da ke yawo",
		debtTitle: "Bashin gwamnatin Isra'ila",
	},
	inr: {
		longName: "rufe na Indiya",
		noun: "rufe",
		nounPlural: "rufees",
		label: "Rufe na Indiya",
		existenceTitle: "Rufees da ke yawo",
		debtTitle: "Bashin gwamnatin Indiya",
	},
	jpy: {
		longName: "yen na Japan",
		noun: "yen",
		nounPlural: "yen",
		label: "Yen na Japan",
		existenceTitle: "Yen da ke yawo",
		debtTitle: "Bashin gwamnatin Japan",
	},
	mxn: {
		longName: "peso na Mexico",
		noun: "peso",
		nounPlural: "pesos",
		label: "Peso na Mexico",
		existenceTitle: "Pesos na Mexico da ke yawo",
		debtTitle: "Bashin gwamnatin Mexico",
	},
	nzd: {
		longName: "dalar New Zealand",
		noun: "dalar New Zealand",
		nounPlural: "dalolin New Zealand",
		label: "Dalar New Zealand",
		existenceTitle: "Dalolin New Zealand da ke yawo",
		debtTitle: "Bashin gwamnatin New Zealand",
	},
	php: {
		longName: "peso na Philippines",
		noun: "peso",
		nounPlural: "pesos",
		label: "Peso na Philippines",
		existenceTitle: "Pesos na Philippines da ke yawo",
		debtTitle: "Bashin gwamnatin Philippines",
	},
	thb: {
		longName: "baht na Thailand",
		noun: "baht",
		nounPlural: "baht",
		label: "Baht na Thailand",
		existenceTitle: "Baht da ke yawo",
		debtTitle: "Bashin gwamnatin Thailand",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Idan kana adana kuɗi a ${c.longName}, watakila ka lura cewa kuɗinka yana sayen ƙasa kowace shekara. Kana buƙatar ƙarin ${c.nounPlural} don sayen abubuwa iri ɗaya. Kana buƙatar ƙarin ${c.nounPlural} don kiyaye matsayinka na rayuwa.`;
		case "intro_2":
			return `Amma ba lallai ne ya kasance haka ba.`;
		case "intro_highlight":
			return `A cikin shekaru huɗu da suka gabata, mutanen da suke adana kuɗi a Bitcoin suna jin daɗin rayuwa mai sauƙi.`;
		case "proof_h2":
			return `Ga shaidar: kuɗinka yana rasa darajarsa`;
		case "proof_p1":
			return `Kowane ${c.noun} da ke cikin asusun bankinka yana iya sayen ƙasa kowace shekara. Wannan saboda babu wani daidaitaccen iyaka kan adadin ${c.nounPlural} da ake iya ƙirƙira.`;
		case "proof_p2":
			return `Wannan iyakar da ba ta da iyaka ita ce babban dalilin hauhawar farashi. A cikin shekaru kaɗan da suka gabata, an samu ƙaruwa mai yawa a adadin ${c.nounPlural} da ke yawo.`;
		case "proof_p3":
			return `Lokacin da aka ƙirƙiri ƙarin kuɗi daga komai, farashin komai yana hauhawa. Wannan ya haɗa da kayan da kasuwanci ke saya don ƙera kayansu, abin da ke haifar da farashi mafi girma a gare ku.`;
		case "proof_p4":
			return `Yayin da bashin gwamnati ke ci gaba da ƙaruwa, ana buga ƙarin kuɗi saboda ba a sami isassun mutane masu son ba gwamnati lamuni.`;
		case "proof_p5_before":
			return `Idan ba za ka iya cin lamuni ba, ba za ka iya kashe shi ba. Amma lokacin da gwamnati ba ta iya `;
		case "proof_p5_link":
			return `cin lamuni`;
		case "proof_p5_after":
			return `, sai ta buga ƙarin kuɗi.`;
		case "proof_p6":
			return `Ƙarin bashin gwamnati yana nufin ƙarin ƙirƙirar kuɗi. Ƙarin ƙirƙirar kuɗi yana nufin ƙarin hauhawar farashi. Kuma babu wata alama da ke nuna zai tsaya.`;
		case "btc_h2":
			return `Bitcoin ba shi da hauhawar farashi`;
		case "btc_p1":
			return `Hauhawar farashi tana nufin kuɗinka yana sayen ƙasa da lokaci. Bitcoin kuɗi ne mafi kyau saboda ba shi da hauhawar farashi.`;
		case "btc_p2_before":
			return `${c.longName} yana da iyakar wadata mara iyaka, wanda ke nufin ana iya buga ƙarin a kowane lokaci.`;
		case "btc_p2_link":
			return `Bitcoin yana da ƙarancin wadata`;
		case "btc_p2_after":
			return `, tare da iyakar daidaitacciya na bitcoin miliyan 21. Babu wanda zai iya ƙirƙira ƙarin.`;
		case "btc_p3":
			return `A tarihi, Bitcoin ya samu ikon saye da lokaci, yayin da ${c.longName} ya rasa nasa. Mutane da yawa suna amfani da Bitcoin a matsayin asusun adana kuɗi na dogon lokaci — kuɗi da suke barin yana girma na shekaru ba tare da taɓawa ba.`;
		case "btc_p4":
			return `Shin ka fi son adana kuɗi a ${c.longName}, wanda ke sayen ƙasa da lokaci? Ko kuma a Bitcoin, wanda a tarihi ya samu ƙarin ikon saye da lokaci?`;
		case "freedom_h2":
			return `Bitcoin kuma kayan aiki ne na 'yanci`;
		case "freedom_p1":
			return `Babu wanda ke kula da hanyar sadarwar Bitcoin. Babu gwamnati ko kamfani da ke gudanar da ita. An ƙera ta don kare 'yancinka da kuɗinka.`;
		case "freedom_p2":
			return `A duk faɗin duniya, mutane suna amfani da Bitcoin tuni don kare 'yancinsu — har ma lokacin da gwamnatocinsu suka ƙi taimaka musu ko sun yi ƙoƙarin tsayar da su.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Ikon saye da aka rasa cikin shekaru 4";
		case "stat_source_bpr":
			return "Tushen: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Ƙara koyo →",
	inflation_freedom_scarce_title: "Mai ƙarancin wadata",
	inflation_freedom_scarce_desc:
		"Ba za a taɓa samun fiye da bitcoin miliyan 21 ba. Babu wanda zai iya buga ƙarin.",
	inflation_freedom_decentralized_title: "Mai rarrabuwa",
	inflation_freedom_decentralized_desc:
		"Babu wani ƙungiya guda da ke kula da Bitcoin — gwamnati ko kamfani.",
	inflation_freedom_permissionless_title: "Ba ya buƙatar izini",
	inflation_freedom_permissionless_desc:
		"Kowa, a ko'ina, zai iya haɗawa da hanyar sadarwa. Babu wanda zai iya tsayar da kai.",
	inflation_freedom_sovereign_title: "Mai mulkin kansa",
	inflation_freedom_sovereign_desc:
		"Sabon tsari, mai zaman kansa daga 'yan siyasa da alkawuransu da aka tabaracewa.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "Miliyan 21",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "An gyara har abada",
	inflation_stat_bitcoin_source: "Tushen: takardar fararen Bitcoin →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Yau",
	inflation_stat_currency_counting: "kuma har yanzu yana ƙaruwa…",
	inflation_stat_currency_detail_4yr_lost:
		"Ikon saye da aka rasa cikin shekaru 4",
	inflation_stat_currency_source_cpi: "Tushen: FRED CPI →",
	inflation_stat_currency_source_debt: "Tushen: bashin gwamnatin FRED →",
	inflation_stat_currency_source_m1: "Tushen: wadatar kuɗin M1 ta FRED →",
	inflation_stat_currency_source_m1_short: "Tushen: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Ikon saye da aka samu cikin shekaru 4",
	inflation_stat_btc_source_bpr: "Tushen: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Ma'aikata sun sake samun kuɗinsu ta hanyar Bitcoin, bayan an daskare asusun bankunansu.",
	inflation_story_nigeria_title: "Najeriya",
	inflation_story_nigeria_desc:
		"Masu zanga-zanga sun yi amfani da Bitcoin don tallafa wa motsinsu, bayan bankuna sun ƙi yin aiki da su.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Hakar Bitcoin ta tsabtace sharar gawayi wanda gwamnati ba ta son magancewa.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Hakar Bitcoin ta taimaka wa hanyar wutar lantarki ta ci gaba da aiki yayin babbar guguwa.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — taswirar aikin shekaru 4 (duk kuɗaɗen fiat)",
	sources_bitcoin_source_code:
		"Lambar tushe ta Bitcoin — iyakar wadata na miliyan 21",
	sources_canadian_trucker:
		"Zanga-zangar masu ababen hawa na Kanada — an yi amfani da Bitcoin don kewaye asusun banki da aka daskare (YouTube)",
	sources_mempool_space:
		"Mempool.space — bayanai kan wadata da hakar Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — yadda Bitcoin ke ƙarfafa zanga-zangar EndSARS a Najeriya",
	sources_pennsylvania_mining:
		"Hakar Bitcoin a Pennsylvania na kama methane daga sharar gawayi (YouTube)",
	sources_texas_mining:
		"Hakar Bitcoin da hanyar wutar lantarki ta Texas (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin ba shi da hauhawar farashi, amma kuɗinka yana da ita.",
	inflation_choose: "Zaɓi kuɗinka kuma ka ga shaidar",
	inflation_choose_another: "← Zaɓi wani kuɗi",
	inflation_sticker_learn: "Ka gano yadda Bitcoin zai iya taimaka maka.",
	inflation_sticker_lets_find_out: "Bari mu gano.",
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
		`translate-inflation (ha): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
