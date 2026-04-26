#!/usr/bin/env node
/**
 * Urdu (ur) — repair Arabic-language contamination in buy_ur.json.
 *
 * Background: a previous translation pass copy-pasted ~50+ keys from
 * i18n/ar/buy_ar.json into i18n/ur/buy_ur.json. Every value with Arabic
 * markers (taa marbuta ة, Arabic yaa ي, words like في / من / إلى, etc.)
 * is re-translated here into proper, idiomatic Urdu using Nastaliq-style
 * vocabulary (ہے/ہیں/کے/سے/میں, ٹ/ڈ/ڑ/ں/ے/ہ/ی/پ/چ/گ).
 *
 * Already-Urdu keys (buy_step_1_header, buy_step_2_header,
 * buy_step_2_description, buy_step_3_header, buy_step_4_header,
 * buy_meta_description, buy_header_subtitle, buy_howto_name, all
 * buy_step_*_eyebrow, buy_storage_cta_label, all sources_* values, and
 * buy_bitcoin_guide) are preserved as-is.
 *
 * @metadata.last-updated bumped to 2026-04-26.
 *
 * Idempotent — running it twice produces the same file.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const TARGET = path.resolve(
	__dirname,
	"..",
	"..",
	"i18n",
	"ur",
	"buy_ur.json",
);

// Replacement map: every value below replaces the Arabic value currently in
// buy_ur.json for that key. Keys not listed here are left untouched.
const REPLACEMENTS = {
	// Header / intro
	buy_header: "Bitcoin کیسے خریدیں",
	buy_intro_c1:
		"پہلی بار Bitcoin خریدنا پریشان کن لگ سکتا ہے، لیکن جب آپ اسے قدم بہ قدم تقسیم کر دیتے ہیں تو یہ دراصل کافی آسان ہے۔",
	buy_intro_c2:
		"یہ گائیڈ آپ کو محفوظ طریقے سے Bitcoin خریدنے اور اسے اپنے ذاتی والٹ میں رکھنے کے عمل سے گزارے گا۔",

	// Step 1 description
	buy_step_1_description:
		"مختلف ممالک میں Bitcoin خریدنے کے مختلف اختیارات دستیاب ہیں۔ اپنے لیے بہترین اختیارات دیکھنے کے لیے اپنا ملک منتخب کریں۔",
	buy_search_countries: "اپنا ملک تلاش کریں",

	// Country names (Urdu transliterations / standard names)
	buy_country_united_states: "ریاستہائے متحدہ امریکہ",
	buy_country_australia: "آسٹریلیا",
	buy_country_austria: "آسٹریا",
	buy_country_belgium: "بیلجیم",
	buy_country_brazil: "برازیل",
	buy_country_canada: "کینیڈا",
	buy_country_france: "فرانس",
	buy_country_germany: "جرمنی",
	buy_country_ireland: "آئرلینڈ",
	buy_country_italy: "اٹلی",
	buy_country_netherlands: "نیدرلینڈز",
	buy_country_new_zealand: "نیوزی لینڈ",
	buy_country_spain: "اسپین",
	buy_country_united_kingdom: "برطانیہ",
	buy_country_argentina: "ارجنٹائن",
	buy_country_chile: "چلی",
	buy_country_colombia: "کولمبیا",
	buy_country_costa_rica: "کوسٹا ریکا",
	buy_country_czech_republic: "جمہوریہ چیک",
	buy_country_denmark: "ڈنمارک",
	buy_country_el_salvador: "ایل سیلواڈور",
	buy_country_estonia: "ایسٹونیا",
	buy_country_finland: "فن لینڈ",
	buy_country_greece: "یونان",
	buy_country_guatemala: "گوئٹے مالا",
	buy_country_hong_kong: "ہانگ کانگ",
	buy_country_hungary: "ہنگری",
	buy_country_iceland: "آئس لینڈ",
	buy_country_india: "بھارت",
	buy_country_israel: "اسرائیل",
	buy_country_japan: "جاپان",
	buy_country_latvia: "لٹویا",
	buy_country_lithuania: "لتھوانیا",
	buy_country_luxembourg: "لکسمبرگ",
	buy_country_malta: "مالٹا",
	buy_country_mexico: "میکسیکو",
	buy_country_norway: "ناروے",
	buy_country_panama: "پاناما",
	buy_country_poland: "پولینڈ",
	buy_country_portugal: "پرتگال",
	buy_country_romania: "رومانیہ",
	buy_country_singapore: "سنگاپور",
	buy_country_slovakia: "سلوواکیہ",
	buy_country_slovenia: "سلووینیا",
	buy_country_south_africa: "جنوبی افریقہ",
	buy_country_south_korea: "جنوبی کوریا",
	buy_country_sweden: "سویڈن",
	buy_country_switzerland: "سوئٹزرلینڈ",
	buy_country_thailand: "تھائی لینڈ",
	buy_country_turkey: "ترکی",
	buy_country_ukraine: "یوکرین",
	buy_country_uruguay: "یوراگوئے",

	// Step 2 — payment method (header already Urdu; description + callouts + bank/cash blocks below)
	buy_step_2_description:
		"Bitcoin خریدنے کے دو بنیادی طریقے ہیں: بینک ٹرانسفر کے ذریعے یا نقد رقم سے۔ ہر ایک کے مختلف فوائد ہیں۔",
	buy_method_bank_transfer: "بینک ٹرانسفر",
	buy_method_bank_fast: "تیز اور آسان",
	buy_method_bank_less_private: "کم نجی",
	buy_method_bank_description:
		"بینک ٹرانسفر Bitcoin خریدنے کا سب سے عام طریقہ ہے۔ یہ تیز، آسان ہوتے ہیں اور عام طور پر ان کی فیس کم ہوتی ہے۔",
	buy_method_choose_bank: "بینک ٹرانسفر منتخب کریں",
	buy_method_cash: "نقد",
	buy_method_cash_private: "زیادہ نجی",
	buy_method_cash_limited: "محدود اختیارات",
	buy_method_cash_description:
		"نقد خریداری زیادہ پرائیویسی فراہم کرتی ہے لیکن اس کے اختیارات کم ہیں اور آپ کو کسی شخص سے ذاتی طور پر ملنا یا Bitcoin ATM استعمال کرنا پڑ سکتا ہے۔",
	buy_method_choose_cash: "نقد منتخب کریں",

	// Step 3 — buying options
	buy_step_3_description:
		"یہاں آپ کے ملک اور ادائیگی کے طریقے کے لیے بہترین Bitcoin خریداری کے اختیارات ہیں:",
	buy_platform_recommended: "تجویز کردہ",
	buy_platform_strike_description:
		"Strike کم فیس اور فوری Lightning Network سپورٹ کے ساتھ Bitcoin خریدنے کا تیز ترین اور آسان ترین طریقہ ہے۔",
	buy_platform_swan_description:
		"Swan Bitcoin ڈالر کاسٹ ایوریجنگ اور تعلیمی وسائل کے ساتھ صرف Bitcoin پر مبنی خدمات میں مہارت رکھتی ہے۔",
	buy_platform_river_description:
		"River تعلیم اور سیکیورٹی پر زور کے ساتھ Bitcoin کی خریداری، مائننگ اور تحویل کی خدمات پیش کرتی ہے۔",
	buy_platform_coinsquare_description:
		"Coinsquare ایک کینیڈین Bitcoin ایکسچینج ہے جس کا ریگولیٹری تعمیل اور کسٹمر سپورٹ مضبوط ہے۔",
	buy_platform_kraken_description:
		"Kraken ایک قائم شدہ Bitcoin ایکسچینج ہے جس میں جدید ٹریڈنگ خصوصیات اور مضبوط سیکیورٹی موجود ہیں۔",
	buy_platform_atm_description:
		"Bitcoin ATMs آپ کو نقد رقم سے فوری طور پر Bitcoin خریدنے کی سہولت دیتے ہیں۔ Coin ATM Radar استعمال کر کے اپنے قریب کوئی ڈھونڈیں۔",
	buy_platform_bisq_description:
		"Bisq ایک وکندریقرت پیئر ٹو پیئر ایکسچینج ہے جو KYC کے بغیر نجی Bitcoin ٹریڈنگ کی اجازت دیتی ہے۔",
	buy_platform_feature_instant: "فوری خریداری",
	buy_platform_feature_low_fees: "کم فیس",
	buy_platform_feature_lightning: "Lightning Network",
	buy_platform_feature_dca: "ڈالر کاسٹ ایوریجنگ",
	buy_platform_feature_education: "تعلیمی وسائل",
	buy_platform_feature_withdrawal: "آسان نکاسی",
	buy_platform_feature_mining: "Bitcoin مائننگ",
	buy_platform_feature_custody: "تحویلی خدمات",
	buy_platform_feature_canadian: "کینیڈا پر مرکوز",
	buy_platform_feature_regulated: "ریگولیٹڈ ایکسچینج",
	buy_platform_feature_support: "کسٹمر سپورٹ",
	buy_platform_feature_established: "قائم شدہ پلیٹ فارم",
	buy_platform_feature_security: "مضبوط سیکیورٹی",
	buy_platform_feature_advanced: "جدید خصوصیات",
	buy_platform_feature_cash: "نقد خریداری",
	buy_platform_feature_anonymous: "زیادہ گمنام",
	buy_platform_feature_p2p: "پیئر ٹو پیئر",
	buy_platform_feature_private: "نجی ٹریڈنگ",
	buy_platform_feature_decentralized: "وکندریقرت",
	buy_platform_relai_description:
		"Relai ایک سوئس Bitcoin-only ایپ ہے جس میں سیلف کسٹڈی والٹ، آٹو انویسٹ کی خصوصیات اور یورپی صارفین کے لیے کم فیس دستیاب ہیں۔",
	buy_platform_feature_bitcoin_only: "صرف Bitcoin",
	buy_platform_feature_self_custody: "سیلف کسٹڈی والٹ",
	buy_platform_feature_auto_invest: "آٹو انویسٹ پلانز",
	buy_platform_feature_european: "یورپ پر مرکوز",

	// Step 4 — storage
	buy_step_4_c1:
		"Bitcoin خریدنے کے بعد سب سے اہم قدم یہ ہے کہ اسے اپنے ذاتی والٹ میں منتقل کر دیں جہاں آپ خود پرائیویٹ کیز کے کنٹرول میں ہوتے ہیں۔",
	buy_step_4_c2:
		"Bitcoin کو ایکسچینج پر چھوڑنا خطرناک ہے کیونکہ آپ دراصل Bitcoin کے مالک نہیں ہوتے — ایکسچینج مالک ہوتا ہے۔",
	buy_step_4_c3:
		"جب آپ خود اپنی پرائیویٹ کیز پر کنٹرول رکھتے ہیں تو آپ کو اپنے Bitcoin کی حقیقی ملکیت حاصل ہوتی ہے اور کوئی بھی اسے آپ سے نہیں چھین سکتا۔",
	buy_step_4_c4:
		"اپنی ضروریات کے لیے صحیح Bitcoin والٹ منتخب کرنے کا طریقہ سیکھیں:",
	buy_cta_wallets: "ہماری Bitcoin والٹ گائیڈ دیکھیں",
};

const data = JSON.parse(fs.readFileSync(TARGET, "utf8"));

let changed = 0;
for (const [key, value] of Object.entries(REPLACEMENTS)) {
	if (!(key in data)) {
		console.warn(`! key not present in target: ${key}`);
		continue;
	}
	if (data[key] !== value) {
		data[key] = value;
		changed++;
	}
}

// Bump @metadata.last-updated
if (!data["@metadata"] || typeof data["@metadata"] !== "object") {
	data["@metadata"] = {};
}
data["@metadata"]["last-updated"] = "2026-04-26";

// Re-write with tab indentation + trailing newline
fs.writeFileSync(TARGET, JSON.stringify(data, null, "\t") + "\n");

console.log(
	`fix-buy-arabic-contamination (ur): rewrote ${changed} value${changed === 1 ? "" : "s"}; @metadata.last-updated → 2026-04-26`,
);
