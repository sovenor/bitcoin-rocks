#!/usr/bin/env node
/**
 * Bulgarian manifest refresh — inflation namespace translator.
 *
 * Fills `targetTranslation` for the ~368 entries in the `inflation`
 * namespace of scripts/i18n-audit/reports/bg.json.
 *
 * Handles both:
 *   - 327 per-currency keys (13 currencies × ~25 suffixes each)
 *   - 41 non-currency keys (shared labels, stories, sources, etc.)
 *
 * Bulgarian uses Cyrillic script. Brand names, URLs, numeric values,
 * and currency codes remain in Latin script.
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
	"bg.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "щатския долар",
		longNameNom: "Щатски долар",
		noun: "долар",
		nounPlural: "долара",
		label: "Щатски долар",
		existenceTitle: "Долари в обращение",
		debtTitle: "Общ федерален дълг",
	},
	eur: {
		longName: "еврото",
		longNameNom: "Евро",
		noun: "евро",
		nounPlural: "евро",
		label: "Евро",
		existenceTitle: "Евро в обращение",
		debtTitle: "Държавен дълг на еврозоната",
	},
	aud: {
		longName: "австралийския долар",
		longNameNom: "Австралийски долар",
		noun: "австралийски долар",
		nounPlural: "австралийски долара",
		label: "Австралийски долар",
		existenceTitle: "Австралийски долари в обращение",
		debtTitle: "Държавен дълг на Австралия",
	},
	brl: {
		longName: "бразилския реал",
		longNameNom: "Бразилски реал",
		noun: "реал",
		nounPlural: "реала",
		label: "Бразилски реал",
		existenceTitle: "Реали в обращение",
		debtTitle: "Държавен дълг на Бразилия",
	},
	cad: {
		longName: "канадския долар",
		longNameNom: "Канадски долар",
		noun: "канадски долар",
		nounPlural: "канадски долара",
		label: "Канадски долар",
		existenceTitle: "Канадски долари в обращение",
		debtTitle: "Държавен дълг на Канада",
	},
	gbp: {
		longName: "британската лира",
		longNameNom: "Британска лира",
		noun: "лира",
		nounPlural: "лири",
		label: "Британска лира",
		existenceTitle: "Лири в обращение",
		debtTitle: "Държавен дълг на Обединеното кралство",
	},
	ils: {
		longName: "израелския шекел",
		longNameNom: "Израелски шекел",
		noun: "шекел",
		nounPlural: "шекела",
		label: "Израелски шекел",
		existenceTitle: "Шекели в обращение",
		debtTitle: "Държавен дълг на Израел",
	},
	inr: {
		longName: "индийската рупия",
		longNameNom: "Индийска рупия",
		noun: "рупия",
		nounPlural: "рупии",
		label: "Индийска рупия",
		existenceTitle: "Рупии в обращение",
		debtTitle: "Държавен дълг на Индия",
	},
	jpy: {
		longName: "японската йена",
		longNameNom: "Японска йена",
		noun: "йена",
		nounPlural: "йени",
		label: "Японска йена",
		existenceTitle: "Йени в обращение",
		debtTitle: "Държавен дълг на Япония",
	},
	mxn: {
		longName: "мексиканското песо",
		longNameNom: "Мексиканско песо",
		noun: "песо",
		nounPlural: "песо",
		label: "Мексиканско песо",
		existenceTitle: "Песо в обращение",
		debtTitle: "Държавен дълг на Мексико",
	},
	nzd: {
		longName: "новозеландския долар",
		longNameNom: "Новозеландски долар",
		noun: "новозеландски долар",
		nounPlural: "новозеландски долара",
		label: "Новозеландски долар",
		existenceTitle: "Новозеландски долари в обращение",
		debtTitle: "Държавен дълг на Нова Зеландия",
	},
	php: {
		longName: "филипинското песо",
		longNameNom: "Филипинско песо",
		noun: "песо",
		nounPlural: "песо",
		label: "Филипинско песо",
		existenceTitle: "Песо в обращение",
		debtTitle: "Държавен дълг на Филипините",
	},
	thb: {
		longName: "тайландския бат",
		longNameNom: "Тайландски бат",
		noun: "бат",
		nounPlural: "бата",
		label: "Тайландски бат",
		existenceTitle: "Бата в обращение",
		debtTitle: "Държавен дълг на Тайланд",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Ако спестявате в ${c.longName}, забелязали сте, че можете да купите по-малко с всяка изминала година. Нужни са ви все повече ${c.nounPlural}, за да купите същото количество продукти. Нужни са ви все повече ${c.nounPlural}, за да поддържате жизнения си стандарт.`;
		case "intro_2":
			return `Но това не е задължително да е така.`;
		case "intro_highlight":
			return `През последните четири години хората, които спестяват в Bitcoin, видяха как животът става все по-евтин.`;
		case "proof_h2":
			return `Ето доказателството: парите ви губят стойност`;
		case "proof_p1":
			return `Всеки ${c.noun} в банковата ви сметка купува по-малко всяка година. Това се случва, защото няма фиксиран лимит за количеството ${c.nounPlural}, които могат да бъдат създадени.`;
		case "proof_p2":
			return `Тази неограничена емисия е основната причина за инфлацията. През последните няколко години количеството ${c.nounPlural} в обращение се увеличи драстично.`;
		case "proof_p3":
			return `Когато се създават повече пари от нищото, цените на всичко се покачват. Това включва суровините, които компаниите купуват, за да произвеждат стоки — което води до по-високи цени за вас.`;
		case "proof_p4":
			return `Тъй като правителството продължава да увеличава дълга си, се отпечатват все повече пари, защото все по-малко хора искат да заемат на правителството.`;
		case "proof_p5_before":
			return `Ако не можете да заемете пари, не можете да харчите. Но когато правителството`;
		case "proof_p5_link":
			return `не може да заеме пари`;
		case "proof_p5_after":
			return `, то просто отпечатва повече.`;
		case "proof_p6":
			return `Повече държавен дълг означава повече отпечатване на пари. Повече отпечатване на пари означава повече инфлация. И няма признак това да спре.`;
		case "btc_h2":
			return `Bitcoin няма инфлация`;
		case "btc_p1":
			return `Инфлацията означава, че парите ви купуват по-малко с течение на времето. Bitcoin е по-добри пари, защото няма инфлация.`;
		case "btc_p2_before":
			return `Емисията на ${c.longName} е неограничена, което означава, че може да се отпечатват още по всяко време.`;
		case "btc_p2_link":
			return `Bitcoin е рядък`;
		case "btc_p2_after":
			return `, защото има максимален лимит от 21 милиона Bitcoin. Никой не може да създаде повече Bitcoin.`;
		case "btc_p3":
			return `Исторически Bitcoin е натрупвал покупателна способност с времето, докато ${c.longNameNom} губи покупателна способност. Много хора използват Bitcoin като дългосрочна спестовна сметка: пари, които оставят да растат с години, без да ги пипат.`;
		case "btc_p4":
			return `Бихте ли предпочели да спестявате в ${c.nounPlural}, които ще купуват по-малко с времето? Или в Bitcoin, който исторически купува повече с времето?`;
		case "freedom_h2":
			return `Bitcoin е също инструмент за свобода`;
		case "freedom_p1":
			return `Никой не контролира Bitcoin мрежата. Тя не се управлява от правителство или компания. Създадена е да защитава вашата свобода и вашите пари.`;
		case "freedom_p2":
			return `Хора по цял свят вече използват Bitcoin, за да защитят свободите си — дори когато правителствата им отказват да им помогнат или се опитват да ги спрат.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Изгубена покупателна способност за 4 години";
		case "stat_source_bpr":
			return "Източник: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Научете повече →",
	inflation_freedom_scarce_title: "Оскъден",
	inflation_freedom_scarce_desc:
		"Ще има само 21 милиона Bitcoin завинаги. Никой не може да отпечата повече.",
	inflation_freedom_decentralized_title: "Децентрализиран",
	inflation_freedom_decentralized_desc:
		"Нито едно отделно образувание — нито правителство, нито компания — не контролира Bitcoin.",
	inflation_freedom_permissionless_title: "Без разрешения",
	inflation_freedom_permissionless_desc:
		"Всеки, навсякъде, може да се свърже с мрежата. Никой не може да ви спре.",
	inflation_freedom_sovereign_title: "Суверенен",
	inflation_freedom_sovereign_desc:
		"Нова система, независима от политиците и техните нарушени обещания.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 милиона",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Фиксирано завинаги",
	inflation_stat_bitcoin_source: "Източник: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Днес",
	inflation_stat_currency_counting: "и продължава да расте...",
	inflation_stat_currency_detail_4yr_lost:
		"Изгубена покупателна способност за 4 години",
	inflation_stat_currency_source_cpi: "Източник: FRED CPI →",
	inflation_stat_currency_source_debt: "Източник: FRED Държавен дълг →",
	inflation_stat_currency_source_m1: "Източник: FRED Парична маса M1 →",
	inflation_stat_currency_source_m1_short: "Източник: FRED →",

	// Bitcoin price report "gained" stat
	inflation_stat_btc_detail_4yr:
		"Натрупана покупателна способност за 4 години",
	inflation_stat_btc_source_bpr: "Източник: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Канада",
	inflation_story_canada_desc:
		"Работници използваха Bitcoin за достъп до парите си, след като банковите им сметки бяха замразени.",
	inflation_story_nigeria_title: "Нигерия",
	inflation_story_nigeria_desc:
		"Протестиращи използваха Bitcoin за финансиране на движението си, след като банките отказаха да работят с тях.",
	inflation_story_pennsylvania_title: "Пенсилвания",
	inflation_story_pennsylvania_desc:
		"Bitcoin добивът почисти въглищни отпадъци, с които правителството отказа да се справи.",
	inflation_story_texas_title: "Тексас",
	inflation_story_texas_desc:
		"Bitcoin добивът помогна да се поддържа електрическата мрежа по време на голяма буря.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4-годишни графики на представянето (всички валути)",
	sources_bitcoin_source_code:
		"Изходен код на Bitcoin — лимит на емисията от 21 милиона",
	sources_canadian_trucker:
		"Протест на канадските камионисти — Bitcoin беше използван за заобикаляне на замразени банкови сметки (YouTube)",
	sources_mempool_space:
		"Mempool.space — данни за емисията и добива на Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — Как Bitcoin захранва протестите EndSARS в Нигерия",
	sources_pennsylvania_mining:
		"Добивът на Bitcoin в Пенсилвания възстановява отпадъчен метан (YouTube)",
	sources_texas_mining:
		"Добивът на Bitcoin и електрическата мрежа в Тексас (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin няма инфлация, но парите ви имат.",
	inflation_choose: "Изберете валутата си, за да видите доказателството",
	inflation_choose_another: "← Изберете друга валута",
	inflation_sticker_learn: "Научете как Bitcoin може да помогне.",
	inflation_sticker_lets_find_out: "Нека разберем.",
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
		`translate-inflation (bg): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
