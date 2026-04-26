#!/usr/bin/env node
/**
 * Urdu manifest refresh — inflation namespace translator.
 *
 * Handles the per-currency keys (13 currencies × ~25 suffixes) plus the
 * shared non-currency labels / stories / sources / manifest-changed keys.
 *
 * Idempotent. Urdu is RTL; we keep "Bitcoin" in Latin script (matches
 * BBC Urdu / Dawn / Geo crypto coverage). Western Arabic numerals (0-9).
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
	"ur.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
/*
 * Urdu currency conventions (BBC Urdu / Dawn News / Geo financial coverage):
 *   USD = ڈالر (dollar)
 *   EUR = یورو (euro)
 *   AUD = آسٹریلوی ڈالر
 *   BRL = برازیلی ریئل
 *   CAD = کینیڈین ڈالر
 *   GBP = پاؤنڈ
 *   ILS = اسرائیلی شیکل
 *   INR = بھارتی روپیہ
 *   JPY = جاپانی ین
 *   MXN = میکسیکن پیسو
 *   NZD = نیوزی لینڈ ڈالر
 *   PHP = فلپائنی پیسو
 *   THB = تھائی باہت
 */

const CURRENCY = {
	usd: {
		name: "ڈالر",
		nameWith: "ڈالرز میں",
		nounPlural: "ڈالرز",
		label: "امریکی ڈالر",
		existenceTitle: "گردش میں امریکی ڈالرز",
		debtTitle: "وفاقی قرضہ کل",
	},
	eur: {
		name: "یورو",
		nameWith: "یورو میں",
		nounPlural: "یورو",
		label: "یورو",
		existenceTitle: "گردش میں یورو",
		debtTitle: "یورو زون کا حکومتی قرضہ",
	},
	aud: {
		name: "آسٹریلوی ڈالر",
		nameWith: "آسٹریلوی ڈالرز میں",
		nounPlural: "آسٹریلوی ڈالرز",
		label: "آسٹریلوی ڈالر",
		existenceTitle: "گردش میں آسٹریلوی ڈالرز",
		debtTitle: "آسٹریلیا کا حکومتی قرضہ",
	},
	brl: {
		name: "برازیلی ریئل",
		nameWith: "برازیلی ریئل میں",
		nounPlural: "ریئل",
		label: "برازیلی ریئل",
		existenceTitle: "گردش میں ریئل",
		debtTitle: "برازیل کا حکومتی قرضہ",
	},
	cad: {
		name: "کینیڈین ڈالر",
		nameWith: "کینیڈین ڈالرز میں",
		nounPlural: "کینیڈین ڈالرز",
		label: "کینیڈین ڈالر",
		existenceTitle: "گردش میں کینیڈین ڈالرز",
		debtTitle: "کینیڈا کا حکومتی قرضہ",
	},
	gbp: {
		name: "برطانوی پاؤنڈ",
		nameWith: "برطانوی پاؤنڈز میں",
		nounPlural: "پاؤنڈز",
		label: "برطانوی پاؤنڈ",
		existenceTitle: "گردش میں پاؤنڈز",
		debtTitle: "برطانیہ کا حکومتی قرضہ",
	},
	ils: {
		name: "اسرائیلی شیکل",
		nameWith: "اسرائیلی شیکل میں",
		nounPlural: "شیکل",
		label: "اسرائیلی شیکل",
		existenceTitle: "گردش میں شیکل",
		debtTitle: "اسرائیل کا حکومتی قرضہ",
	},
	inr: {
		name: "بھارتی روپیہ",
		nameWith: "بھارتی روپوں میں",
		nounPlural: "روپے",
		label: "بھارتی روپیہ",
		existenceTitle: "گردش میں بھارتی روپے",
		debtTitle: "بھارت کا حکومتی قرضہ",
	},
	jpy: {
		name: "جاپانی ین",
		nameWith: "جاپانی ین میں",
		nounPlural: "ین",
		label: "جاپانی ین",
		existenceTitle: "گردش میں ین",
		debtTitle: "جاپان کا حکومتی قرضہ",
	},
	mxn: {
		name: "میکسیکن پیسو",
		nameWith: "میکسیکن پیسو میں",
		nounPlural: "پیسو",
		label: "میکسیکن پیسو",
		existenceTitle: "گردش میں پیسو",
		debtTitle: "میکسیکو کا حکومتی قرضہ",
	},
	nzd: {
		name: "نیوزی لینڈ ڈالر",
		nameWith: "نیوزی لینڈ ڈالرز میں",
		nounPlural: "نیوزی لینڈ ڈالرز",
		label: "نیوزی لینڈ ڈالر",
		existenceTitle: "گردش میں نیوزی لینڈ ڈالرز",
		debtTitle: "نیوزی لینڈ کا حکومتی قرضہ",
	},
	php: {
		name: "فلپائنی پیسو",
		nameWith: "فلپائنی پیسو میں",
		nounPlural: "پیسو",
		label: "فلپائنی پیسو",
		existenceTitle: "گردش میں پیسو",
		debtTitle: "فلپائن کا حکومتی قرضہ",
	},
	thb: {
		name: "تھائی باہت",
		nameWith: "تھائی باہت میں",
		nounPlural: "باہت",
		label: "تھائی باہت",
		existenceTitle: "گردش میں باہت",
		debtTitle: "تھائی لینڈ کا حکومتی قرضہ",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `اگر آپ ${c.nameWith} بچت کرتے ہیں تو شاید آپ نے دیکھا ہو گا کہ ہر سال آپ ان سے کم چیزیں خرید سکتے ہیں۔ آپ کو وہی سامان خریدنے کے لیے زیادہ ${c.nounPlural} درکار ہوتے ہیں۔ آپ کو اپنا معیارِ زندگی برقرار رکھنے کے لیے زیادہ ${c.nounPlural} درکار ہوتے ہیں۔`;
		case "intro_2":
			return `لیکن ایسا ہونا ضروری نہیں ہے۔`;
		case "intro_highlight":
			return `پچھلے چار سالوں میں جو لوگ Bitcoin میں بچت کر رہے ہیں، ان کے لیے زندگی سستی ہوتی جا رہی ہے۔`;
		case "proof_h2":
			return `یہ رہا ثبوت: آپ کا پیسہ اپنی قدر کھو رہا ہے`;
		case "proof_p1":
			return `آپ کے بینک اکاؤنٹ میں موجود ہر ${c.name} ہر سال کم چیزیں خریدتا ہے۔ ایسا اس لیے ہو رہا ہے کیونکہ ${c.nounPlural} کی تخلیق پر کوئی مقررہ حد نہیں ہے۔`;
		case "proof_p2":
			return `یہ لامحدود سپلائی مہنگائی کی بنیادی وجہ ہے۔ پچھلے چند سالوں میں گردش میں موجود ${c.nounPlural} کی مقدار میں ڈرامائی اضافہ ہوا ہے۔`;
		case "proof_p3":
			return `جب صفر سے زیادہ پیسہ بنایا جاتا ہے تو ہر چیز کی قیمتیں بڑھ جاتی ہیں۔ اس میں وہ خام مال شامل ہے جو کاروبار اپنی مصنوعات بنانے کے لیے خریدتے ہیں — جس کا نتیجہ آپ کے لیے زیادہ قیمتوں کی صورت میں نکلتا ہے۔`;
		case "proof_p4":
			return `جوں جوں قومی قرضہ بڑھتا جاتا ہے، زیادہ پیسہ چھاپا جاتا ہے کیونکہ کم لوگ حکومت کو قرض دینے کے لیے تیار ہوتے ہیں۔`;
		case "proof_p5_before":
			return `اگر آپ پیسہ اُدھار نہ لے سکیں تو آپ خرچ نہیں کر سکتے۔ لیکن جب حکومت`;
		case "proof_p5_link":
			return `اُدھار نہیں لے سکتی`;
		case "proof_p5_after":
			return `، تو وہ بس مزید پیسہ چھاپ لیتی ہے۔`;
		case "proof_p6":
			return `زیادہ قومی قرضے کا مطلب ہے زیادہ پیسہ چھاپنا۔ زیادہ پیسہ چھاپنے کا مطلب ہے زیادہ مہنگائی۔ اور اس کے رکنے کا کوئی نشان نظر نہیں آتا۔`;
		case "btc_h2":
			return `Bitcoin میں مہنگائی نہیں ہوتی`;
		case "btc_p1":
			return `مہنگائی کا مطلب ہے کہ وقت کے ساتھ آپ کا پیسہ کم چیزیں خریدتا ہے۔ Bitcoin بہتر پیسہ ہے کیونکہ اس میں مہنگائی نہیں ہوتی۔`;
		case "btc_p2_before":
			return `${c.name} کی سپلائی لامحدود ہے، یعنی کسی بھی وقت مزید چھاپا جا سکتا ہے۔`;
		case "btc_p2_link":
			return `Bitcoin نایاب ہے`;
		case "btc_p2_after":
			return `، جس کی سخت حد 21 ملین Bitcoin ہے۔ کوئی مزید نہیں بنا سکتا۔`;
		case "btc_p3":
			return `تاریخی طور پر Bitcoin نے وقت کے ساتھ خریداری کی طاقت حاصل کی ہے، جبکہ ${c.name} نے اسے کھویا ہے۔ بہت سے لوگ Bitcoin کو طویل مدتی بچت کھاتے کے طور پر استعمال کرتے ہیں — ایسا پیسہ جسے وہ سالوں تک بغیر چھوئے بڑھنے دیتے ہیں۔`;
		case "btc_p4":
			return `کیا آپ ${c.nameWith} بچت کرنا چاہیں گے، جو وقت کے ساتھ کم چیزیں خریدتا ہے؟ یا Bitcoin میں، جو وقت کے ساتھ زیادہ چیزیں خریدتا رہا ہے؟`;
		case "freedom_h2":
			return `Bitcoin آزادی کا ایک ذریعہ بھی ہے`;
		case "freedom_p1":
			return `Bitcoin نیٹ ورک کو کوئی کنٹرول نہیں کرتا۔ کوئی حکومت یا کمپنی اسے نہیں چلاتی۔ یہ آپ کی آزادی اور آپ کے پیسے کی حفاظت کے لیے بنایا گیا ہے۔`;
		case "freedom_p2":
			return `دنیا بھر کے لوگ پہلے سے ہی Bitcoin کو اپنی آزادی کے تحفظ کے لیے استعمال کر رہے ہیں — تب بھی جب ان کی حکومتیں ان کی مدد نہیں کریں گی یا انہیں روکنے کی کوشش کرتی ہیں۔`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "4 سال میں کھوئی گئی خریداری کی طاقت";
		case "stat_source_bpr":
			return "ماخذ: Bitcoin Price Report ←";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "مزید جانیں ←",
	inflation_freedom_scarce_title: "نایاب",
	inflation_freedom_scarce_desc:
		"ہمیشہ کے لیے صرف 21 ملین Bitcoin ہوں گے۔ کوئی مزید نہیں چھاپ سکتا۔",
	inflation_freedom_decentralized_title: "غیر مرکوز",
	inflation_freedom_decentralized_desc:
		"Bitcoin کو کوئی ایک ادارہ کنٹرول نہیں کرتا — نہ حکومت، نہ کمپنی۔",
	inflation_freedom_permissionless_title: "بغیر اجازت",
	inflation_freedom_permissionless_desc:
		"کوئی بھی، کہیں سے بھی، نیٹ ورک میں شامل ہو سکتا ہے۔ کوئی آپ کو نہیں روک سکتا۔",
	inflation_freedom_sovereign_title: "خود مختار",
	inflation_freedom_sovereign_desc:
		"ایک نیا نظام، سیاستدانوں اور ان کے ٹوٹے ہوئے وعدوں سے آزاد۔",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 ملین",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "ہمیشہ کے لیے سختی سے مقرر",
	inflation_stat_bitcoin_source: "ماخذ: Bitcoin وائٹ پیپر ←",

	// Shared currency stat labels
	inflation_stat_comparison_today: "آج",
	inflation_stat_currency_counting: "اور بڑھتا جا رہا ہے …",
	inflation_stat_currency_detail_4yr_lost: "4 سال میں کھوئی گئی خریداری کی طاقت",
	inflation_stat_currency_source_cpi: "ماخذ: FRED CPI ←",
	inflation_stat_currency_source_debt: "ماخذ: FRED قومی قرضہ ←",
	inflation_stat_currency_source_m1: "ماخذ: FRED زرِ کثیر M1 ←",
	inflation_stat_currency_source_m1_short: "ماخذ: FRED ←",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "4 سال میں حاصل کی گئی خریداری کی طاقت",
	inflation_stat_btc_source_bpr: "ماخذ: Bitcoin Price Report ←",

	// Freedom stories
	inflation_story_canada_title: "کینیڈا",
	inflation_story_canada_desc:
		"بینک اکاؤنٹس منجمد کیے جانے کے بعد کارکنوں نے Bitcoin کے ذریعے اپنے پیسے تک رسائی حاصل کی۔",
	inflation_story_nigeria_title: "نائجیریا",
	inflation_story_nigeria_desc:
		"بینکوں کی جانب سے ساتھ دینے سے انکار کے بعد مظاہرین نے اپنی تحریک کو Bitcoin سے فنڈ کیا۔",
	inflation_story_pennsylvania_title: "پینسلوینیا",
	inflation_story_pennsylvania_desc:
		"Bitcoin کان کنی نے کوئلے کے اس فضلے کو صاف کیا جس کی صفائی حکومت نہیں کرنا چاہتی تھی۔",
	inflation_story_texas_title: "ٹیکساس",
	inflation_story_texas_desc:
		"Bitcoin کان کنی نے بڑے طوفان کے دوران بجلی کے گرڈ کو چالو رکھنے میں مدد کی۔",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 سالہ منافع کا چارٹ (تمام کرنسیاں)",
	sources_bitcoin_source_code:
		"Bitcoin سورس کوڈ — 21 ملین کی سپلائی کی حد",
	sources_canadian_trucker:
		"کینیڈین ٹرک ڈرائیوروں کا احتجاج — منجمد بینک اکاؤنٹس کو نظرانداز کرنے کے لیے Bitcoin کا استعمال (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin سپلائی اور کان کنی کا ڈیٹا",
	sources_nigeria_endsars:
		"Quartz Africa — Bitcoin نائجیریا میں EndSARS مظاہروں کو کیسے فنڈ کر رہا ہے",
	sources_pennsylvania_mining:
		"پینسلوینیا میں Bitcoin کان کنی کوئلے کے فضلے سے میتھین کو بچا رہی ہے (YouTube)",
	sources_texas_mining:
		"Bitcoin کان کنی اور ٹیکساس کا بجلی کا گرڈ (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin میں مہنگائی نہیں ہوتی، آپ کے پیسے میں ہوتی ہے۔",
	inflation_choose: "اپنی کرنسی منتخب کریں اور ثبوت دیکھیں",
	inflation_choose_another: "← دوسری کرنسی منتخب کریں",
	inflation_sticker_learn: "جانیں Bitcoin کیسے مدد کر سکتا ہے۔",
	inflation_sticker_lets_find_out: "آئیے جانتے ہیں۔",
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
		`translate-inflation (ur): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
