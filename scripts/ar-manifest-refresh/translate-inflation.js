#!/usr/bin/env node
/**
 * Arabic manifest refresh — inflation namespace translator.
 *
 * Fills `targetTranslation` for the ~368 entries in the `inflation`
 * namespace of scripts/i18n-audit/reports/ar.json.
 *
 * Handles both:
 *   - 327 per-currency keys (13 currencies × ~25 suffixes each)
 *   - 41 non-currency keys (shared labels, stories, sources, etc.)
 *
 * Arabic uses RTL script. Brand names, URLs, numeric values,
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
	"ar.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "الدولار الأمريكي",
		noun: "دولار",
		nounPlural: "دولارات",
		label: "الدولار الأمريكي",
		existenceTitle: "الدولارات المتداولة",
		debtTitle: "إجمالي الدين الفيدرالي",
	},
	eur: {
		longName: "اليورو",
		noun: "يورو",
		nounPlural: "يورو",
		label: "اليورو",
		existenceTitle: "اليورو المتداول",
		debtTitle: "ديون حكومات منطقة اليورو",
	},
	aud: {
		longName: "الدولار الأسترالي",
		noun: "دولار",
		nounPlural: "دولارات",
		label: "الدولار الأسترالي",
		existenceTitle: "الدولارات الأسترالية المتداولة",
		debtTitle: "ديون الحكومة الأسترالية",
	},
	brl: {
		longName: "الريال البرازيلي",
		noun: "ريال",
		nounPlural: "ريالات",
		label: "الريال البرازيلي",
		existenceTitle: "الريالات المتداولة",
		debtTitle: "ديون الحكومة البرازيلية",
	},
	cad: {
		longName: "الدولار الكندي",
		noun: "دولار",
		nounPlural: "دولارات",
		label: "الدولار الكندي",
		existenceTitle: "الدولارات الكندية المتداولة",
		debtTitle: "ديون الحكومة الكندية",
	},
	gbp: {
		longName: "الجنيه الإسترليني",
		noun: "جنيه",
		nounPlural: "جنيهات",
		label: "الجنيه الإسترليني",
		existenceTitle: "الجنيهات المتداولة",
		debtTitle: "ديون الحكومة البريطانية",
	},
	ils: {
		longName: "الشيكل الإسرائيلي",
		noun: "شيكل",
		nounPlural: "شيكلات",
		label: "الشيكل الإسرائيلي",
		existenceTitle: "الشيكلات المتداولة",
		debtTitle: "ديون الحكومة الإسرائيلية",
	},
	inr: {
		longName: "الروبية الهندية",
		noun: "روبية",
		nounPlural: "روبيات",
		label: "الروبية الهندية",
		existenceTitle: "الروبيات المتداولة",
		debtTitle: "ديون الحكومة الهندية",
	},
	jpy: {
		longName: "الين الياباني",
		noun: "ين",
		nounPlural: "ينات",
		label: "الين الياباني",
		existenceTitle: "الينات المتداولة",
		debtTitle: "ديون الحكومة اليابانية",
	},
	mxn: {
		longName: "البيزو المكسيكي",
		noun: "بيزو",
		nounPlural: "بيزوات",
		label: "البيزو المكسيكي",
		existenceTitle: "البيزوات المتداولة",
		debtTitle: "ديون الحكومة المكسيكية",
	},
	nzd: {
		longName: "الدولار النيوزيلندي",
		noun: "دولار",
		nounPlural: "دولارات",
		label: "الدولار النيوزيلندي",
		existenceTitle: "الدولارات النيوزيلندية المتداولة",
		debtTitle: "ديون الحكومة النيوزيلندية",
	},
	php: {
		longName: "البيزو الفلبيني",
		noun: "بيزو",
		nounPlural: "بيزوات",
		label: "البيزو الفلبيني",
		existenceTitle: "البيزوات المتداولة",
		debtTitle: "ديون الحكومة الفلبينية",
	},
	thb: {
		longName: "البات التايلاندي",
		noun: "بات",
		nounPlural: "بات",
		label: "البات التايلاندي",
		existenceTitle: "البات المتداول",
		debtTitle: "ديون الحكومة التايلاندية",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `إذا كنت توفر بـ${c.longName}، فقد لاحظت أن ما تستطيع شراءه يتناقص عاماً بعد عام. تحتاج إلى ${c.nounPlural} أكثر لشراء نفس كمية الطعام. تحتاج إلى ${c.nounPlural} أكثر للحفاظ على مستوى معيشتك.`;
		case "intro_2":
			return `لكن ليس من الضروري أن يكون الأمر هكذا.`;
		case "intro_highlight":
			return `الذين كانوا يوفرون بالبيتكوين خلال السنوات الأربع الماضية رأوا الحياة تصبح أرخص.`;
		case "proof_h2":
			return `إليك الدليل: أموالك تفقد قيمتها`;
		case "proof_p1":
			return `كل ${c.noun} في حسابك البنكي يشتري أقل كل عام. يحدث هذا لأنه لا يوجد حد ثابت لكمية ${c.nounPlural} التي يمكن إنشاؤها.`;
		case "proof_p2":
			return `هذا العرض غير المحدود هو السبب الجذري للتضخم. في السنوات القليلة الماضية، زاد إجمالي ${c.nounPlural} المتداولة بشكل كبير.`;
		case "proof_p3":
			return `عندما يُنشأ مزيد من المال من العدم، ترتفع أسعار كل شيء. هذا يشمل المواد الخام التي تشتريها الشركات لصنع منتجاتها — مما يؤدي إلى أسعار أعلى عليك.`;
		case "proof_p4":
			return `ومع استمرار الحكومة في تضخيم دينها، يُطبع المزيد من المال لأن عدداً أقل من الناس يريد إقراضها.`;
		case "proof_p5_before":
			return `إذا لم تستطع الحصول على قرض، فلا يمكنك إنفاق المال. لكن عندما لا تستطيع الحكومة`;
		case "proof_p5_link":
			return `الحصول على قرض`;
		case "proof_p5_after":
			return `، فإنها ببساطة تطبع المال.`;
		case "proof_p6":
			return `مزيد من الدين الحكومي يعني مزيداً من طباعة النقود. مزيد من طباعة النقود يعني مزيداً من التضخم. ولا توجد إشارة إلى توقف ذلك.`;
		case "btc_h2":
			return `البيتكوين ليس لديه تضخم`;
		case "btc_p1":
			return `التضخم يعني أن أموالك تشتري أقل بمرور الوقت. البيتكوين نقود أفضل لأنه لا يوجد لديه تضخم.`;
		case "btc_p2_before":
			return `${c.longName} عرضه غير محدود، مما يعني أنه يمكن طباعة المزيد في أي وقت.`;
		case "btc_p2_link":
			return `البيتكوين نادر`;
		case "btc_p2_after":
			return `لأن لديه حداً أقصى للعرض قدره 21 مليون بيتكوين. لا يمكن لأحد أن يطبع المزيد من البيتكوين.`;
		case "btc_p3":
			return `تاريخياً، اكتسب البيتكوين قوة شرائية بمرور الوقت بينما فقد ${c.longName} قوته الشرائية. يستخدم كثير من الناس البيتكوين كحساب توفير طويل الأجل: أموال يتركونها تنمو دون لمس لعدة سنوات.`;
		case "btc_p4":
			return `هل تفضل أن توفر ${c.nounPlural} تشتري أقل بمرور الوقت؟ أم بيتكوين اشترى تاريخياً أكثر بمرور الوقت؟`;
		case "freedom_h2":
			return `البيتكوين أيضاً أداة للحرية`;
		case "freedom_p1":
			return `شبكة البيتكوين لا يملكها أحد. لا تسيطر عليها أي حكومة أو شركة. تم بناؤها لحماية حريتك وحماية أموالك.`;
		case "freedom_p2":
			return `أشخاص حول العالم يستخدمون البيتكوين بالفعل لحماية حريتهم — حتى عندما رفضت حكوماتهم مساعدتهم أو حاولت إيقافهم.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "القوة الشرائية المفقودة خلال 4 سنوات";
		case "stat_source_bpr":
			return "المصدر: تقرير أسعار البيتكوين →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "اعرف المزيد →",
	inflation_freedom_scarce_title: "نادر",
	inflation_freedom_scarce_desc:
		"سيكون هناك 21 مليون بيتكوين فقط إلى الأبد. لا يمكن لأحد طباعة المزيد.",
	inflation_freedom_decentralized_title: "لامركزي",
	inflation_freedom_decentralized_desc:
		"لا يوجد كيان واحد — لا حكومة ولا شركة — يسيطر على البيتكوين.",
	inflation_freedom_permissionless_title: "بلا إذن",
	inflation_freedom_permissionless_desc:
		"يمكن لأي شخص، في أي مكان، الانضمام إلى الشبكة. لا يمكن لأحد إيقافك.",
	inflation_freedom_sovereign_title: "سيادي",
	inflation_freedom_sovereign_desc:
		"نظام جديد، مستقل عن السياسيين ووعودهم المكسورة.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "البيتكوين",
	inflation_stat_bitcoin_value: "21 مليون",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "ثابت إلى الأبد",
	inflation_stat_bitcoin_source: "المصدر: الورقة البيضاء للبيتكوين →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "اليوم",
	inflation_stat_currency_counting: "وما زال العد مستمراً...",
	inflation_stat_currency_detail_4yr_lost:
		"القوة الشرائية المفقودة خلال 4 سنوات",
	inflation_stat_currency_source_cpi: "المصدر: FRED CPI →",
	inflation_stat_currency_source_debt: "المصدر: FRED ديون الحكومة →",
	inflation_stat_currency_source_m1: "المصدر: FRED عرض النقود الضيق →",
	inflation_stat_currency_source_m1_short: "المصدر: FRED →",

	// Bitcoin price report "gained" stat
	inflation_stat_btc_detail_4yr: "القوة الشرائية المكتسبة خلال 4 سنوات",
	inflation_stat_btc_source_bpr: "المصدر: تقرير أسعار البيتكوين →",

	// Freedom stories
	inflation_story_canada_title: "كندا",
	inflation_story_canada_desc:
		"استخدم العمال البيتكوين للوصول إلى أموالهم بعد تجميد حساباتهم البنكية.",
	inflation_story_nigeria_title: "نيجيريا",
	inflation_story_nigeria_desc:
		"استخدم المحتجون البيتكوين لتمويل حركتهم بعد أن قطعت البنوك التعامل معهم.",
	inflation_story_pennsylvania_title: "بنسلفانيا",
	inflation_story_pennsylvania_desc:
		"تعدين البيتكوين نظّف نفايات الفحم التي رفضت الحكومة التعامل معها.",
	inflation_story_texas_title: "تكساس",
	inflation_story_texas_desc:
		"تعدين البيتكوين ساعد في إبقاء الكهرباء مستمرة خلال عاصفة ضخمة.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"تقرير أسعار البيتكوين — مخططات الأداء لمدة 4 سنوات (جميع العملات)",
	sources_bitcoin_source_code:
		"الكود المصدري للبيتكوين — حد العرض 21 مليون",
	sources_canadian_trucker:
		"احتجاج سائقي الشاحنات الكنديين — استُخدم البيتكوين لتجاوز الحسابات البنكية المجمدة (YouTube)",
	sources_mempool_space: "Mempool.space — بيانات عرض البيتكوين والتعدين",
	sources_nigeria_endsars:
		"Quartz Africa — كيف غذّى البيتكوين احتجاجات EndSARS في نيجيريا",
	sources_pennsylvania_mining:
		"تعدين البيتكوين في بنسلفانيا يستصلح غاز الميثان من النفايات (YouTube)",
	sources_texas_mining:
		"تعدين البيتكوين في تكساس والشبكة الكهربائية (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "البيتكوين ليس لديه تضخم، لكن أموالك لديها.",
	inflation_choose: "اختر عملتك لترى الدليل",
	inflation_choose_another: "← اختر عملة أخرى",
	inflation_sticker_learn: "تعلّم كيف يمكن للبيتكوين أن يساعد.",
	inflation_sticker_lets_find_out: "لنكتشف.",
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
		`translate-inflation (ar): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
