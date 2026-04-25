#!/usr/bin/env node
/**
 * Russian manifest refresh — inflation namespace translator.
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
	"ru.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		// prepositional / locative ("save in <currency>")
		longName: "американских долларах",
		// genitive plural ("supply of <currency>")
		genPlural: "американских долларов",
		// accusative plural ("need more <currency>")
		accPlural: "американских долларов",
		// nominative singular ("each <currency> in your account")
		nounSingular: "доллар",
		// nominative plural ("dollars buy you less")
		nounPlural: "доллары",
		// label for the stat card
		label: "Американский доллар",
		existenceTitle: "Американских долларов в обращении",
		debtTitle: "Государственный долг США",
	},
	eur: {
		longName: "евро",
		genPlural: "евро",
		accPlural: "евро",
		nounSingular: "евро",
		nounPlural: "евро",
		label: "Евро",
		existenceTitle: "Евро в обращении",
		debtTitle: "Государственный долг еврозоны",
	},
	aud: {
		longName: "австралийских долларах",
		genPlural: "австралийских долларов",
		accPlural: "австралийских долларов",
		nounSingular: "австралийский доллар",
		nounPlural: "австралийские доллары",
		label: "Австралийский доллар",
		existenceTitle: "Австралийских долларов в обращении",
		debtTitle: "Государственный долг Австралии",
	},
	brl: {
		longName: "бразильских реалах",
		genPlural: "бразильских реалов",
		accPlural: "бразильских реалов",
		nounSingular: "реал",
		nounPlural: "реалы",
		label: "Бразильский реал",
		existenceTitle: "Бразильских реалов в обращении",
		debtTitle: "Государственный долг Бразилии",
	},
	cad: {
		longName: "канадских долларах",
		genPlural: "канадских долларов",
		accPlural: "канадских долларов",
		nounSingular: "канадский доллар",
		nounPlural: "канадские доллары",
		label: "Канадский доллар",
		existenceTitle: "Канадских долларов в обращении",
		debtTitle: "Государственный долг Канады",
	},
	gbp: {
		longName: "фунтах стерлингов",
		genPlural: "фунтов стерлингов",
		accPlural: "фунтов стерлингов",
		nounSingular: "фунт",
		nounPlural: "фунты",
		label: "Фунт стерлингов",
		existenceTitle: "Фунтов стерлингов в обращении",
		debtTitle: "Государственный долг Великобритании",
	},
	ils: {
		longName: "израильских шекелях",
		genPlural: "израильских шекелей",
		accPlural: "израильских шекелей",
		nounSingular: "шекель",
		nounPlural: "шекели",
		label: "Израильский шекель",
		existenceTitle: "Израильских шекелей в обращении",
		debtTitle: "Государственный долг Израиля",
	},
	inr: {
		longName: "индийских рупиях",
		genPlural: "индийских рупий",
		accPlural: "индийских рупий",
		nounSingular: "рупия",
		nounPlural: "рупии",
		label: "Индийская рупия",
		existenceTitle: "Индийских рупий в обращении",
		debtTitle: "Государственный долг Индии",
	},
	jpy: {
		longName: "японских иенах",
		genPlural: "японских иен",
		accPlural: "японских иен",
		nounSingular: "иена",
		nounPlural: "иены",
		label: "Японская иена",
		existenceTitle: "Японских иен в обращении",
		debtTitle: "Государственный долг Японии",
	},
	mxn: {
		longName: "мексиканских песо",
		genPlural: "мексиканских песо",
		accPlural: "мексиканских песо",
		nounSingular: "песо",
		nounPlural: "песо",
		label: "Мексиканское песо",
		existenceTitle: "Мексиканских песо в обращении",
		debtTitle: "Государственный долг Мексики",
	},
	nzd: {
		longName: "новозеландских долларах",
		genPlural: "новозеландских долларов",
		accPlural: "новозеландских долларов",
		nounSingular: "новозеландский доллар",
		nounPlural: "новозеландские доллары",
		label: "Новозеландский доллар",
		existenceTitle: "Новозеландских долларов в обращении",
		debtTitle: "Государственный долг Новой Зеландии",
	},
	php: {
		longName: "филиппинских песо",
		genPlural: "филиппинских песо",
		accPlural: "филиппинских песо",
		nounSingular: "песо",
		nounPlural: "песо",
		label: "Филиппинское песо",
		existenceTitle: "Филиппинских песо в обращении",
		debtTitle: "Государственный долг Филиппин",
	},
	thb: {
		longName: "тайских батах",
		genPlural: "тайских батов",
		accPlural: "тайских батов",
		nounSingular: "бат",
		nounPlural: "баты",
		label: "Тайский бат",
		existenceTitle: "Тайских батов в обращении",
		debtTitle: "Государственный долг Таиланда",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Если вы храните сбережения в ${c.longName}, вы наверняка заметили, что с каждым годом на них можно купить меньше. Чтобы купить тот же набор товаров, нужно больше ${c.genPlural}. Чтобы поддерживать прежний уровень жизни, нужно больше ${c.genPlural}.`;
		case "intro_2":
			return `Но так быть не должно.`;
		case "intro_highlight":
			return `За последние четыре года жизнь тех, кто хранит сбережения в Bitcoin, становится дешевле.`;
		case "proof_h2":
			return `Вот доказательство: ваши деньги теряют ценность`;
		case "proof_p1":
			return `На каждый ${c.nounSingular} на вашем банковском счёте с каждым годом можно купить меньше. Так происходит потому, что нет жёсткого ограничения на количество ${c.genPlural}, которое можно создать.`;
		case "proof_p2":
			return `Эта неограниченная эмиссия — главная причина инфляции. За последние годы количество ${c.genPlural} в обращении резко выросло.`;
		case "proof_p3":
			return `Когда из воздуха создаётся больше денег, цены на всё растут. Это касается и сырья, которое компании покупают для производства товаров, — а значит, и цен для вас.`;
		case "proof_p4":
			return `Поскольку государственный долг продолжает расти, печатается всё больше денег: всё меньше людей готовы давать государству в долг.`;
		case "proof_p5_before":
			return `Если вы не можете занять денег, вы не можете их потратить. Но когда государство`;
		case "proof_p5_link":
			return `не может занять`;
		case "proof_p5_after":
			return `, оно просто печатает ещё.`;
		case "proof_p6":
			return `Больше государственного долга — больше печати денег. Больше печати денег — больше инфляции. И никаких признаков, что это остановится.`;
		case "btc_h2":
			return `У Bitcoin нет инфляции`;
		case "btc_p1":
			return `Инфляция — это когда со временем на ваши деньги можно купить меньше. Bitcoin — это лучшие деньги, потому что у него нет инфляции.`;
		case "btc_p2_before":
			return `Эмиссия ${c.genPlural} ничем не ограничена — это значит, что в любой момент можно напечатать ещё.`;
		case "btc_p2_link":
			return `Bitcoin редок`;
		case "btc_p2_after":
			return `, у него жёсткий лимит — 21 миллион биткоинов. Никто не может создать больше.`;
		case "btc_p3":
			return `Исторически Bitcoin со временем набирал покупательную способность, тогда как ${c.nounPlural} её теряли. Многие люди используют Bitcoin как долгосрочный накопительный счёт — деньги, которые они оставляют на годы и не трогают.`;
		case "btc_p4":
			return `Что вы предпочтёте: копить в ${c.longName}, на которые со временем можно купить меньше? Или в Bitcoin, на который исторически со временем можно купить больше?`;
		case "freedom_h2":
			return `Bitcoin — это ещё и инструмент свободы`;
		case "freedom_p1":
			return `Сетью Bitcoin никто не управляет. Ею не руководит ни одно государство и ни одна компания. Она создана, чтобы защищать вашу свободу и ваши деньги.`;
		case "freedom_p2":
			return `Люди по всему миру уже используют Bitcoin, чтобы отстаивать свою свободу — даже когда их собственные правительства отказываются им помогать или пытаются им помешать.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Покупательная способность, потерянная за 4 года";
		case "stat_source_bpr":
			return "Источник: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Узнать больше →",
	inflation_freedom_scarce_title: "Редкий",
	inflation_freedom_scarce_desc:
		"Будет существовать только 21 миллион биткоинов. Никто не может напечатать больше.",
	inflation_freedom_decentralized_title: "Децентрализованный",
	inflation_freedom_decentralized_desc:
		"Bitcoin не контролируется ни одной отдельной структурой — ни государством, ни компанией.",
	inflation_freedom_permissionless_title: "Без разрешений",
	inflation_freedom_permissionless_desc:
		"Любой человек, где бы он ни был, может подключиться к сети. Никто не может вам помешать.",
	inflation_freedom_sovereign_title: "Суверенный",
	inflation_freedom_sovereign_desc:
		"Новая система, не зависящая от политиков и их невыполненных обещаний.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 миллион",
	inflation_stat_bitcoin_numeric: "(21 000 000)",
	inflation_stat_bitcoin_detail: "Зафиксировано навсегда",
	inflation_stat_bitcoin_source: "Источник: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Сегодня",
	inflation_stat_currency_counting: "и продолжает расти...",
	inflation_stat_currency_detail_4yr_lost:
		"Покупательная способность, потерянная за 4 года",
	inflation_stat_currency_source_cpi: "Источник: FRED CPI →",
	inflation_stat_currency_source_debt:
		"Источник: FRED госдолг →",
	inflation_stat_currency_source_m1:
		"Источник: FRED денежная масса M1 →",
	inflation_stat_currency_source_m1_short: "Источник: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr:
		"Покупательная способность, полученная за 4 года",
	inflation_stat_btc_source_bpr: "Источник: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Канада",
	inflation_story_canada_desc:
		"Работники вернули доступ к своим деньгам через Bitcoin после того, как их банковские счета были заморожены.",
	inflation_story_nigeria_title: "Нигерия",
	inflation_story_nigeria_desc:
		"Протестующие использовали Bitcoin, чтобы финансировать своё движение, после того как банки отказались с ними сотрудничать.",
	inflation_story_pennsylvania_title: "Пенсильвания",
	inflation_story_pennsylvania_desc:
		"Майнинг Bitcoin очистил угольные отходы, которыми государство отказалось заниматься.",
	inflation_story_texas_title: "Техас",
	inflation_story_texas_desc:
		"Майнинг Bitcoin помог сохранить работу электросети во время сильного шторма.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — график 4-летней доходности (все валюты)",
	sources_bitcoin_source_code:
		"Исходный код Bitcoin — лимит эмиссии в 21 миллион",
	sources_canadian_trucker:
		"Протест канадских дальнобойщиков — Bitcoin использовался для обхода замороженных банковских счетов (YouTube)",
	sources_mempool_space:
		"Mempool.space — данные об эмиссии и майнинге Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — как Bitcoin поддерживает протесты EndSARS в Нигерии",
	sources_pennsylvania_mining:
		"Майнинг Bitcoin в Пенсильвании утилизирует метан с угольных отходов (YouTube)",
	sources_texas_mining:
		"Майнинг Bitcoin и электросеть Техаса (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"У Bitcoin нет инфляции, а у ваших денег есть.",
	inflation_choose: "Выберите свою валюту и увидите доказательство",
	inflation_choose_another: "← Выбрать другую валюту",
	inflation_sticker_learn: "Узнайте, как Bitcoin может помочь.",
	inflation_sticker_lets_find_out: "Давайте разберёмся.",
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
		`translate-inflation (ru): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
