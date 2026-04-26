#!/usr/bin/env node
/**
 * Burmese (my / မြန်မာ) manifest refresh — inflation namespace translator.
 *
 * Burmese conventions:
 * - Bitcoin → "Bitcoin" (Latin script, widely recognized)
 * - government → "အစိုးရ"
 * - money / currency → "ငွေ" / "ငွေကြေး"
 * - inflation → "ငွေကြေးဖောင်းပွမှု"
 * - dollar / dolar / etc → "ဒေါ်လာ"
 * - supply / bekalan → "ထောက်ပံ့မှု"
 * - bank account → "ဘဏ်အကောင့်"
 * - print money → "ငွေပုံနှိပ်"
 * - debt → "အကြွေး" (or "ကြွေးမြီ")
 * - business → "လုပ်ငန်း"
 * - employee / worker → "လုပ်သား" / "အလုပ်သမား"
 * - protester → "ဆန္ဒပြသူ"
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
	"my.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		inIn: "အမေရိကန်ဒေါ်လာဖြင့်",
		noun: "အမေရိကန်ဒေါ်လာ",
		nounPl: "အမေရိကန်ဒေါ်လာ",
		label: "အမေရိကန်ဒေါ်လာ",
		labelLower: "အမေရိကန်ဒေါ်လာ",
		existenceTitle: "လည်ပတ်နေသော အမေရိကန်ဒေါ်လာ",
		debtTitle: "အမေရိကန်ပြည်ထောင်စု အစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	eur: {
		inIn: "ယူရိုဖြင့်",
		noun: "ယူရို",
		nounPl: "ယူရို",
		label: "ယူရို",
		labelLower: "ယူရို",
		existenceTitle: "လည်ပတ်နေသော ယူရို",
		debtTitle: "ယူရိုဇုန် အစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	aud: {
		inIn: "ဩစတေးလျဒေါ်လာဖြင့်",
		noun: "ဩစတေးလျဒေါ်လာ",
		nounPl: "ဩစတေးလျဒေါ်လာ",
		label: "ဩစတေးလျဒေါ်လာ",
		labelLower: "ဩစတေးလျဒေါ်လာ",
		existenceTitle: "လည်ပတ်နေသော ဩစတေးလျဒေါ်လာ",
		debtTitle: "ဩစတေးလျအစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	brl: {
		inIn: "ဘရာဇီးရီးယယ်ဖြင့်",
		noun: "ဘရာဇီးရီးယယ်",
		nounPl: "ဘရာဇီးရီးယယ်",
		label: "ဘရာဇီးရီးယယ်",
		labelLower: "ဘရာဇီးရီးယယ်",
		existenceTitle: "လည်ပတ်နေသော ဘရာဇီးရီးယယ်",
		debtTitle: "ဘရာဇီးအစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	cad: {
		inIn: "ကနေဒါဒေါ်လာဖြင့်",
		noun: "ကနေဒါဒေါ်လာ",
		nounPl: "ကနေဒါဒေါ်လာ",
		label: "ကနေဒါဒေါ်လာ",
		labelLower: "ကနေဒါဒေါ်လာ",
		existenceTitle: "လည်ပတ်နေသော ကနေဒါဒေါ်လာ",
		debtTitle: "ကနေဒါအစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	gbp: {
		inIn: "ဗြိတိသျှပေါင်ဖြင့်",
		noun: "ဗြိတိသျှပေါင်",
		nounPl: "ဗြိတိသျှပေါင်",
		label: "ဗြိတိသျှပေါင်",
		labelLower: "ဗြိတိသျှပေါင်",
		existenceTitle: "လည်ပတ်နေသော ဗြိတိသျှပေါင်",
		debtTitle: "United Kingdom အစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	ils: {
		inIn: "အစ္စရေးရှဲကယ်ဖြင့်",
		noun: "ရှဲကယ်",
		nounPl: "ရှဲကယ်",
		label: "အစ္စရေးရှဲကယ်",
		labelLower: "အစ္စရေးရှဲကယ်",
		existenceTitle: "လည်ပတ်နေသော အစ္စရေးရှဲကယ်",
		debtTitle: "အစ္စရေးအစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	inr: {
		inIn: "အိန္ဒိယရူပီးဖြင့်",
		noun: "ရူပီး",
		nounPl: "ရူပီး",
		label: "အိန္ဒိယရူပီး",
		labelLower: "အိန္ဒိယရူပီး",
		existenceTitle: "လည်ပတ်နေသော အိန္ဒိယရူပီး",
		debtTitle: "အိန္ဒိယအစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	jpy: {
		inIn: "ဂျပန်ယန်းဖြင့်",
		noun: "ယန်း",
		nounPl: "ယန်း",
		label: "ဂျပန်ယန်း",
		labelLower: "ဂျပန်ယန်း",
		existenceTitle: "လည်ပတ်နေသော ဂျပန်ယန်း",
		debtTitle: "ဂျပန်အစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	mxn: {
		inIn: "မက္ကစီကန်ပီဆိုဖြင့်",
		noun: "မက္ကစီကန်ပီဆို",
		nounPl: "မက္ကစီကန်ပီဆို",
		label: "မက္ကစီကန်ပီဆို",
		labelLower: "မက္ကစီကန်ပီဆို",
		existenceTitle: "လည်ပတ်နေသော မက္ကစီကန်ပီဆို",
		debtTitle: "မက္ကစီကိုအစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	nzd: {
		inIn: "နယူးဇီလန်ဒေါ်လာဖြင့်",
		noun: "နယူးဇီလန်ဒေါ်လာ",
		nounPl: "နယူးဇီလန်ဒေါ်လာ",
		label: "နယူးဇီလန်ဒေါ်လာ",
		labelLower: "နယူးဇီလန်ဒေါ်လာ",
		existenceTitle: "လည်ပတ်နေသော နယူးဇီလန်ဒေါ်လာ",
		debtTitle: "နယူးဇီလန်အစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	php: {
		inIn: "ဖိလစ်ပိုင်ပီဆိုဖြင့်",
		noun: "ဖိလစ်ပိုင်ပီဆို",
		nounPl: "ဖိလစ်ပိုင်ပီဆို",
		label: "ဖိလစ်ပိုင်ပီဆို",
		labelLower: "ဖိလစ်ပိုင်ပီဆို",
		existenceTitle: "လည်ပတ်နေသော ဖိလစ်ပိုင်ပီဆို",
		debtTitle: "ဖိလစ်ပိုင်အစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
	thb: {
		inIn: "ထိုင်းဘတ်ဖြင့်",
		noun: "ဘတ်",
		nounPl: "ဘတ်",
		label: "ထိုင်းဘတ်",
		labelLower: "ထိုင်းဘတ်",
		existenceTitle: "လည်ပတ်နေသော ထိုင်းဘတ်",
		debtTitle: "ထိုင်းအစိုးရ၏ စုစုပေါင်း ကြွေးမြီ",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `သင် ${c.inIn} ငွေစုဆောင်းနေပါက၊ သင့်ငွေနဲ့ ဝယ်နိုင်တာ နည်းသွားတာကို သတိထားမိပေမည်။ ယခင်ဝယ်ခဲ့သော အရာများကိုပင် ဝယ်ရန် ${c.nounPl} ပိုလိုအပ်ပါသည်။ ယခင်ကဲ့သို့ နေထိုင်မှုအဆင့်အတန်းကို ထိန်းသိမ်းရန်ပင် ${c.nounPl} ပိုလိုအပ်ပါသည်။`;
		case "intro_2":
			return `သို့သော် ဤသို့ဖြစ်ရန် မလိုအပ်ပါ။`;
		case "intro_highlight":
			return `လွန်ခဲ့သည့် ၄ နှစ်တာတွင် Bitcoin ဖြင့် ငွေစုသူများအတွက် ဘဝက ပိုသက်သာခဲ့သည်။`;
		case "proof_h2":
			return `ဤသည်မှာ သက်သေဖြစ်သည်— သင့်ငွေမှာ ဆက်တိုက် တန်ဖိုးကျနေသည်`;
		case "proof_p1":
			return `သင့်ဘဏ်အကောင့်ထဲတွင် သိမ်းထားသည့် ${c.noun} တိုင်းသည် တစ်နှစ်ပြီးတစ်နှစ် တန်ဖိုးကျနေပါသည်။ ယင်းမှာ ${c.nounPl} မည်မျှပုံနှိပ်နိုင်သည်ဟူသော အကန့်အသတ်မရှိသောကြောင့် ဖြစ်ပါသည်။`;
		case "proof_p2":
			return `ဤအကန့်အသတ်မရှိသော ထောက်ပံ့မှုသည် ငွေကြေးဖောင်းပွမှု၏ အဓိကအကြောင်းရင်းဖြစ်သည်။ မကြာသေးခင်နှစ်များတွင် လည်ပတ်နေသော ${c.nounPl} စုစုပေါင်းပမာဏသည် သိသိသာသာ တိုးလာခဲ့သည်။`;
		case "proof_p3":
			return `ငွေအလေးကင်းမှ ပိုပုံနှိပ်လိုက်လျှင် အရာရာသည် ပိုမိုစျေးကြီးလာသည်။ ၎င်းတွင် ကုမ္ပဏီများက ထုတ်ကုန်ထုတ်လုပ်ရန် ဝယ်ယူရသော ကုန်ကြမ်းများလည်း ပါဝင်သည်— ဆိုလိုသည်မှာ သင့်အတွက် ပိုစျေးကြီးသည်ဟု ဖြစ်သည်။`;
		case "proof_p4":
			return `အစိုးရ၏ ကြွေးမြီ တိုးလာသည်နှင့်အမျှ၊ အစိုးရအား ငွေချေးပေးလိုသော အဖွဲ့အစည်းများ နည်းလာသောကြောင့် အစိုးရက ငွေပိုပုံနှိပ်ရပါသည်။`;
		case "proof_p5_before":
			return `သင်ငွေချေးမရပါက အသုံးပြုနိုင်မည် မဟုတ်ပါ။ သို့သော် အစိုးရ`;
		case "proof_p5_link":
			return `ငွေချေးမရပါက`;
		case "proof_p5_after":
			return `၊ ၎င်းတို့သည် ငွေပိုပုံနှိပ်လိုက်ရုံပင်။`;
		case "proof_p6":
			return `အစိုးရ၏ ကြွေးမြီ ပိုများလာခြင်း ဆိုသည်မှာ ငွေပိုပုံနှိပ်ခြင်းပင်ဖြစ်သည်။ ငွေပိုပုံနှိပ်ခြင်းဆိုသည်မှာ ငွေကြေးဖောင်းပွမှု ပိုမိုဖြစ်လာခြင်းပင်ဖြစ်သည်။ အဆုံးသတ် မမြင်ရသေးပါ။`;
		case "btc_h2":
			return `Bitcoin တွင် ငွေကြေးဖောင်းပွမှု မရှိပါ`;
		case "btc_p1":
			return `ငွေကြေးဖောင်းပွမှု ဆိုသည်မှာ အချိန်ကြာသည်နှင့်အမျှ သင့်ငွေသည် ပိုနည်းသော အရာများကိုသာ ဝယ်နိုင်ခြင်းကို ဆိုလိုသည်။ Bitcoin သည် ငွေကြေးဖောင်းပွမှု မရှိသောကြောင့် ပိုကောင်းသော ငွေဖြစ်သည်။`;
		case "btc_p2_before":
			return `${c.label} တွင် အကန့်အသတ်မရှိသော ထောက်ပံ့မှုရှိပြီး၊ ဆိုလိုသည်မှာ အမြဲတစေ ထပ်မံပုံနှိပ်နိုင်ခြင်းဖြစ်သည်။`;
		case "btc_p2_link":
			return `Bitcoin သည် ရှားပါးသည်`;
		case "btc_p2_after":
			return `၊ အကြောင်းမှာ ၎င်း၏ အများဆုံးထောက်ပံ့မှုသည် Bitcoin ၂၁ သန်းသာ ဖြစ်သည်။ မည်သူမျှ Bitcoin ပိုပုံနှိပ်၍ မရပါ။`;
		case "btc_p3":
			return `သမိုင်းတစ်လျှောက် Bitcoin သည် အချိန်ကြာလာသည်နှင့်အမျှ ဝယ်ယူနိုင်စွမ်း တိုးတက်ခဲ့ပြီး၊ ${c.labelLower} သည် ဝယ်ယူနိုင်စွမ်း ဆုံးရှုံးခဲ့သည်။ လူအများစုသည် Bitcoin ကို ရေရှည်ငွေစုစရာ အကောင့်အဖြစ် အသုံးပြုကြသည်— နှစ်ပေါင်းများစွာ မထိမခိုက်ဘဲ သိမ်းထားပြီး တန်ဖိုးကြီးထွားအောင် ထားကြသည်။`;
		case "btc_p4":
			return `မည်သည်ကို သင် ပိုနှစ်သက်သနည်း— ${c.inIn} ငွေစုဆောင်းခြင်း— အချိန်ကြာလာသည်နှင့်အမျှ ပိုနည်းသော အရာများကိုသာ ဝယ်နိုင်သော ${c.nounPl}— သို့မဟုတ် သမိုင်းအရ အချိန်ကြာလာသည်နှင့်အမျှ ပိုများသော အရာများကို ဝယ်နိုင်သော Bitcoin ဖြင့် ငွေစုဆောင်းခြင်း?`;
		case "freedom_h2":
			return `Bitcoin သည် လွတ်လပ်မှု၏ ကိရိယာတစ်ခုလည်း ဖြစ်သည်`;
		case "freedom_p1":
			return `Bitcoin ကွန်ရက်ကို မည်သူမျှ မပိုင်ဆိုင်ပါ။ မည်သည့် အစိုးရ သို့မဟုတ် ကုမ္ပဏီကမျှ မထိန်းချုပ်နိုင်ပါ။ ၎င်းကို သင့်လွတ်လပ်မှုနှင့် သင့်ငွေကို ကာကွယ်ရန် တည်ဆောက်ထားသည်။`;
		case "freedom_p2":
			return `ယနေ့ ကမ္ဘာတစ်ဝှမ်းရှိ လူများသည် ၎င်းတို့၏ လွတ်လပ်မှုကို ကာကွယ်ရန် Bitcoin ကို အသုံးပြုနေကြသည်— ၎င်းတို့၏ အစိုးရက အကူအညီပေးလိုခြင်း မရှိသည့်အခါ သို့မဟုတ် ၎င်းတို့ကို တားဆီးရန် ကြိုးစားသည့်အခါပင်။`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "၄ နှစ်အတွင်း ဆုံးရှုံးသွားသော ဝယ်ယူနိုင်စွမ်း";
		case "stat_source_bpr":
			return "အရင်းအမြစ်— Bitcoin Price Report \u2192";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "ပိုမိုသိရှိရန် \u2192",
	inflation_freedom_scarce_title: "ရှားပါး",
	inflation_freedom_scarce_desc:
		"Bitcoin သည် ၂၁ သန်းထက် ပိုလာတော့မည် မဟုတ်ပါ။ မည်သူမျှ ပိုပုံနှိပ်၍ မရပါ။",
	inflation_freedom_decentralized_title: "ဗဟိုချုပ်ကိုင်မှု မရှိ",
	inflation_freedom_decentralized_desc:
		"မည်သည့်အဖွဲ့အစည်းတစ်ခုတည်းကမျှ— အစိုးရ မရှိ၊ ကုမ္ပဏီ မရှိ— Bitcoin ကို မထိန်းချုပ်နိုင်ပါ။",
	inflation_freedom_permissionless_title: "ခွင့်ပြုချက် မလို",
	inflation_freedom_permissionless_desc:
		"မည်သူမဆို၊ မည်သည့်နေရာတွင်မဆို ကွန်ရက်တွင် ပါဝင်နိုင်သည်။ မည်သူမျှ သင့်ကို မတားဆီးနိုင်ပါ။",
	inflation_freedom_sovereign_title: "ကိုယ်ပိုင်အုပ်ချုပ်မှု",
	inflation_freedom_sovereign_desc:
		"နိုင်ငံရေးသမားများနှင့် ၎င်းတို့ ကတိမတည်ခဲ့သော ကတိများမှ ကင်းလွတ်သော စနစ်အသစ်တစ်ခု။",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "၂၁ သန်း",
	inflation_stat_bitcoin_numeric: "(၂၁,၀၀၀,၀၀၀)",
	inflation_stat_bitcoin_detail: "ထာဝရ ပုံသေ",
	inflation_stat_bitcoin_source: "အရင်းအမြစ်— Bitcoin Whitepaper \u2192",

	// Shared currency stat labels
	inflation_stat_comparison_today: "ယနေ့",
	inflation_stat_currency_counting: "ဆက်တိုးနေဆဲ...",
	inflation_stat_currency_detail_4yr_lost:
		"၄ နှစ်အတွင်း ဆုံးရှုံးသွားသော ဝယ်ယူနိုင်စွမ်း",
	inflation_stat_currency_source_cpi: "အရင်းအမြစ်— FRED CPI \u2192",
	inflation_stat_currency_source_debt:
		"အရင်းအမြစ်— FRED အစိုးရကြွေးမြီ \u2192",
	inflation_stat_currency_source_m1:
		"အရင်းအမြစ်— FRED ကျဉ်းမြောင်းသော ငွေထောက်ပံ့မှု \u2192",
	inflation_stat_currency_source_m1_short: "အရင်းအမြစ်— FRED \u2192",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "၄ နှစ်အတွင်း တိုးလာသော ဝယ်ယူနိုင်စွမ်း",
	inflation_stat_btc_source_bpr: "အရင်းအမြစ်— Bitcoin Price Report \u2192",

	// Freedom stories
	inflation_story_canada_title: "ကနေဒါ",
	inflation_story_canada_desc:
		"အလုပ်သမားများသည် ၎င်းတို့၏ ဘဏ်အကောင့်များ ပိတ်ခံရပြီးနောက် ငွေရယူရန် Bitcoin ကို အသုံးပြုခဲ့သည်။",
	inflation_story_nigeria_title: "နိုင်ဂျီးရီးယား",
	inflation_story_nigeria_desc:
		"ဆန္ဒပြသူများသည် ဘဏ်များက ၎င်းတို့၏ အသုံးပြုခွင့်ကို ဖြတ်ပြီးနောက် ၎င်းတို့၏ လှုပ်ရှားမှုအတွက် ရန်ပုံငွေရှာရန် Bitcoin ကို အသုံးပြုခဲ့သည်။",
	inflation_story_pennsylvania_title: "ပင်ဆယ်ဗေးနီးယား",
	inflation_story_pennsylvania_desc:
		"Bitcoin တူးဖော်ခြင်းသည် အစိုးရက ကိုင်တွယ်ရန် ငြင်းဆိုခဲ့သော ကျောက်မီးသွေးအညစ်အကြေးများကို သန့်ရှင်းပေးသည်။",
	inflation_story_texas_title: "တက်ဆက်ဇ်",
	inflation_story_texas_desc:
		"Bitcoin တူးဖော်ခြင်းသည် ကြီးမားသော မုန်တိုင်းများအတွင်း လျှပ်စစ်ဓာတ်အား မပြတ်ဘဲ ဆက်လက်ရရှိစေရန် ကူညီခဲ့သည်။",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — ၄ နှစ်တာ စွမ်းဆောင်ရည် ဇယားများ (ငွေကြေးအားလုံး)",
	sources_bitcoin_source_code:
		"Bitcoin Source Code — ၂၁ သန်း ထောက်ပံ့မှု ကန့်သတ်",
	sources_canadian_trucker:
		"ကနေဒါ ကုန်တင်ကားမောင်း ဆန္ဒပြပွဲ — ပိတ်ထားသော ဘဏ်အကောင့်များကို ကျော်လွှားရန် Bitcoin ကို အသုံးပြုခဲ့သည် (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin ထောက်ပံ့မှုနှင့် တူးဖော်ခြင်း ဒေတာ",
	sources_nigeria_endsars:
		"Quartz Africa — Bitcoin သည် နိုင်ဂျီးရီးယား၏ EndSARS ဆန္ဒပြပွဲကို မည်ကဲ့သို့ ထောက်ပံ့ခဲ့သည်",
	sources_pennsylvania_mining:
		"ပင်ဆယ်ဗေးနီးယား Bitcoin တူးဖော်ခြင်းသည် မီသိန်းအညစ်အကြေးကို ပြန်လည်အသုံးချသည် (YouTube)",
	sources_texas_mining:
		"တက်ဆက်ဇ် Bitcoin တူးဖော်ခြင်းနှင့် လျှပ်စစ်ဓာတ်အားကွန်ရက် (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin တွင် ငွေကြေးဖောင်းပွမှု မရှိ၊ သို့သော် သင့်ငွေတွင်တော့ ရှိပါသည်။",
	inflation_choose: "သက်သေအထောက်အထား မြင်ရန် သင့်ငွေကြေးကို ရွေးချယ်ပါ",
	inflation_choose_another: "\u2190 အခြားငွေကြေးတစ်ခု ရွေးချယ်ပါ",
	inflation_sticker_learn:
		"Bitcoin က ဘယ်လိုကူညီနိုင်သည်ကို သိရှိပါ။",
	inflation_sticker_lets_find_out: "ရှာဖွေကြည့်ကြပါစို့။",
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
		`translate-inflation (my): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
