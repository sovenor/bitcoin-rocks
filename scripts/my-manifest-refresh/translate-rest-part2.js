#!/usr/bin/env node
/**
 * Burmese (my) manifest refresh — non-inflation namespaces, part 2.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 * get-involved, lightning, nostr/index, sticker-files/index,
 * sticker-language-success, sticker-success, stickers, wallets.
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

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "BITCOIN ဈေးနှုန်း",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Bitcoin ၏ လက်ရှိ သို့မဟုတ် သမိုင်းဝင် ဒေါ်လာ ဈေးနှုန်းကို ရှာပါ",
	"business/accounting::accounting_card_pacioli_label":
		"BITCOIN စာရင်းကိုင်",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli စာရင်းကိုင် ဝန်ဆောင်မှုများ",
	"business/accounting::accounting_card_spreadsheet_label": "EXCEL သို့ ထည့်ရန်",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Bitcoin ဈေးနှုန်းများကို Excel သို့ အလိုအလျောက် ဆွဲထည့်ပါ",
	"business/accounting::accounting_card_wallets_label":
		"ပေါင်းစပ် ပိုက်ဆံအိတ်များ",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"ကျွန်ုပ်တို့ အကြံပြုသော လုပ်ငန်း ပိုက်ဆံအိတ်များကို ကြည့်ပါ",
	"business/accounting::accounting_description":
		"သင့်စာရင်းတွင် Bitcoin ကို လက်ခံရန် အလွယ်တကူ လမ်းညွှန်— ပေါင်းစပ်ပိုက်ဆံအိတ်များ၊ ကုန်ကျစရိတ်အခြေခံ၊ မြတ်စွန်းငွေနှင့် မည်သည့်အခါ စာရင်းကိုင်ကို ခေါ်ရမည်ကို ဖော်ပြသည်။",
	"business/accounting::accounting_disclaimer":
		"ဤလမ်းညွှန်သည် သတင်းအချက်အလက်ရည်ရွယ်ချက်အတွက်သာ ဖြစ်ပြီး အခွန်အကြံဉာဏ် မဟုတ်ပါ။ သင့်အခြေအနေနှင့် သက်ဆိုင်သော အခွန်အကြံဉာဏ်အတွက် အရည်အချင်းရှိ စာရင်းကိုင်နှင့် တိုင်ပင်ပါ။",
	"business/accounting::accounting_disclaimer_label": "သတိပြုပါ",
	"business/accounting::accounting_example_feb_1": "ဖေဖော်ဝါရီ ၁",
	"business/accounting::accounting_example_gain_badge": "မြတ်စွန်းငွေ",
	"business/accounting::accounting_example_gain_explain":
		"သင်သည် ဒေါ်လာ ၁၀ မြတ်စွန်းငွေ မှတ်တမ်းတင်သည်။",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_jan_1": "ဇန်နဝါရီ ၁",
	"business/accounting::accounting_example_loss_badge": "ဆုံးရှုံးငွေ",
	"business/accounting::accounting_example_loss_explain":
		"သင်သည် ဒေါ်လာ ၁၀ ဆုံးရှုံးငွေ မှတ်တမ်းတင်သည်။",
	"business/accounting::accounting_example_loss_result": "\u2212$10",
	"business/accounting::accounting_example_received_label": "လက်ခံရရှိ",
	"business/accounting::accounting_example_sold_label":
		"ရောင်းချ သို့မဟုတ် သုံးစွဲ",
	"business/accounting::accounting_hero_subtitle":
		"သင့်လုပ်ငန်းတွင် Bitcoin ကို လက်ခံခြင်းသည် သင့်စာရင်းကိုင်ကို ရှုပ်ထွေးစရာ မလိုပါ။ ဤသည်မှာ ရိုးရှင်းသော ဗားရှင်းနှင့် ၎င်းကို စိတ်ချရစေသော ကိရိယာများနှင့် ပညာရှင်များ ဖြစ်သည်။",
	"business/accounting::accounting_intro_c1":
		"သင်သည် ငွေသား သို့မဟုတ် ကတ်များကို လက်ခံနေပြီးသားဆိုလျှင် Bitcoin ကို သင့်စာရင်းတွင် ထည့်ခြင်းသည် ထင်ထားသည်ထက် ပိုလွယ်ပါသည်။ နည်းလမ်းနှစ်ခု ရှိသည်— Bitcoin ငွေပေးချေမှု အလိုအလျောက် ဒေါ်လာသို့ ပြောင်းပါ (စာရင်းကိုင်အသစ် မလို)၊ သို့မဟုတ် Bitcoin အဖြစ် တချို့ သိမ်းထားပါ (နံပါတ်အနည်းငယ် ထပ်တွဲတွဲရန်)။",
	"business/accounting::accounting_intro_c2":
		"ဤလမ်းညွှန်က နည်းလမ်းနှစ်ခုလုံးကို လမ်းပြပေးပါသည်— သင့်လုပ်ငန်းနှင့် သင့်တော်သော နည်းလမ်းကို ရွေးပြီး Bitcoin လက်ခံစတင်နိုင်ပါသည်။",
	"business/accounting::accounting_s1": "လွယ်ကူသော နည်းလမ်း— အလိုအလျောက် ဒေါ်လာသို့ ပြောင်းခြင်း",
	"business/accounting::accounting_s1_c1":
		"Bitcoin ကို လက်ခံရန် အလွယ်ကူဆုံးနည်းမှာ ငွေပေးချေမှု ဝင်လာသည်နှင့် ၎င်းတို့ ၁၀၀% ကို ဒေါ်လာ (သို့မဟုတ် သင့်ဒေသခံငွေ) သို့ အလိုအလျောက် ရောင်းသော ပေါင်းစပ်ပိုက်ဆံအိတ်ဖြစ်သည်။",
	"business/accounting::accounting_s1_c2":
		"ဤဆက်တင်ဖြင့် သင့်စာရင်းသည် ယနေ့ ဖြစ်နေသည်နှင့် တူညီနေသည်— ဒေါ်လာဖြင့် နောက်ဆုံး ဂဏန်းများ၊ အချိန်တိုင်း။ ကုန်ကျစရိတ်အခြေခံ မရှိ၊ မြတ်စွန်းငွေ မရှိ၊ စာရွက်အသစ် မရှိ။",
	"business/accounting::accounting_s2":
		"Bitcoin အချို့ သိမ်းထားပါက— သင့်ကုန်ကျစရိတ်အခြေခံကို မှတ်တမ်းတင်ခြင်း",
	"business/accounting::accounting_s2_c1":
		"လုပ်ငန်းအချို့သည် လက်ခံရရှိသော Bitcoin အားလုံးကို အလိုအလျောက် မပြောင်းဘဲ တချို့ သိမ်းထားရန် ရွေးချယ်သည်။ ထိုသူသင့်ဆိုလျှင် အဓိက အပိုအဆင့်မှာ သင့်ကုန်ကျစရိတ်အခြေခံကို မှတ်တမ်းတင်ခြင်းဖြစ်သည်— Bitcoin ငွေပေးချေမှု လက်ခံရရှိသည့်နေ့၏ ဒေါ်လာတန်ဖိုးဖြစ်သည်။",
	"business/accounting::accounting_s2_c2":
		"သင့်လုပ်ငန်းကို Bitcoin ဖြင့်သာ ထင်နေသော်လည်း အခွန်အာဏာပိုင်အများစုသည် ဒေါ်လာတန်ဖိုးကို သိချင်နေဆဲဖြစ်သည်။ သတင်းကောင်းမှာ— အရောင်းအဝယ်တစ်ခုလျှင် နံပါတ်နှစ်ခုသာ— လက်ခံရရှိသော Bitcoin ပမာဏနှင့် ၎င်းနေ့၏ ဒေါ်လာတန်ဖိုး။",
	"business/accounting::accounting_s2_c3":
		"အောက်ပါ ကိရိယာများကို သုံးပြီး ရှာဖွေမှုကို အလိုအလျောက်ပြုလုပ်ပါ— သင်နေ့စဉ် ဈေးမစစ်ဆေးရအောင်။",
	"business/accounting::accounting_s3":
		"သင်သိမ်းထားသော Bitcoin ကို သုံးခြင်း သို့မဟုတ် ရောင်းခြင်း",
	"business/accounting::accounting_s3_c1":
		"ငွေပေးချေမှုတိုင်းကို အလိုအလျောက် ဒေါ်လာသို့ ပြောင်းပါက ဤအပိုင်းကို ကျော်ပါ— သင့်အတွက် မသက်ဆိုင်ပါ။",
	"business/accounting::accounting_s3_c2":
		"Bitcoin အချို့ သိမ်းထားပြီး နောက်မှ သုံးရန် သို့မဟုတ် ရောင်းရန် ဆုံးဖြတ်ပါက— ရောင်းဈေးကို တူညီသော ကုန်ကျစရိတ်အခြေခံ စာရွက်တွင် ထပ်ထည့်ပါ။ Bitcoin လက်ခံချိန်တန်ဖိုးနှင့် သုံး/ရောင်းချိန် တန်ဖိုးခြားနားချက်သည် မြတ်စွန်းငွေ သို့မဟုတ် ဆုံးရှုံးငွေဖြစ်သည်။",
	"business/accounting::accounting_s3_c3": "ဥပမာ နှစ်ခု—",
	"business/accounting::accounting_s3_c6":
		"ထိုမျှသာ။ အခြေခံ သင်္ချာသည် တန်ဖိုးတိုး သို့မဟုတ် တန်ဖိုးကျသော ပိုင်ဆိုင်မှုတစ်ခုခုကို မှတ်တမ်းတင်သည်နှင့် တူညီသည်။",
	"business/accounting::accounting_s4": "Bitcoin သိသော ပညာရှင်တစ်ဦး လိုအပ်ပါသလား?",
	"business/accounting::accounting_s4_c1":
		"ဤအလုပ်ကို ပေးအပ်ချင်ပါက— သို့မဟုတ် သင့် Bitcoin စာရင်းကိုင်သည် ပေါင်းစပ်ပိုက်ဆံအိတ်က ကိုင်တွယ်နိုင်သည်ထက် ရှုပ်ထွေးပါက— လုပ်ငန်းများအတွက် Bitcoin စာရင်းကိုင်ကို အထူးပြုသော Satoshi Pacioli စာရင်းကိုင် ဝန်ဆောင်မှုများကို ကျွန်ုပ်တို့ အလေးအနက် အကြံပြုပါသည်။",
	"business/accounting::bitcoin_business_accounting_guide":
		"သင့်လုပ်ငန်းအတွက် Bitcoin စာရင်းကိုင်",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — လက်ရှိနှင့် သမိုင်းဝင် Bitcoin ဒေါ်လာ ဈေးနှုန်း",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli စာရင်းကိုင် ဝန်ဆောင်မှုများ — လုပ်ငန်းများအတွက် Bitcoin စာရင်းကိုင်",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — cryptocurrency ဈေးနှုန်းများကို Excel သို့ ထည့်ပါ",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"ကုန်သည်များ Bitcoin လက်ခံစတင်ခြင်းမတိုင်မီ မေးလေ့ရှိသော မေးခွန်းများအတွက် ရိုးရှင်းသော အဖြေများ— အခကြေးငွေ၊ ဖြေရှင်းမှု၊ ပိုက်ဆံအိတ်၊ chargeback၊ ကုန်ကျစရိတ်နှင့် အခြားအရာများ။",
	"business/faq::faq_intro_c1":
		"အောက်ပါ မေးခွန်းတိုင်းကို တို့လိုက်ပြီး အဖြေကို ဖွင့်ကြည့်ပါ။ Bitcoin လက်ခံရန် အသင့်ဖြစ်လျှင် စာမျက်နှာ၏ အောက်ဆုံးရှိ လုပ်ငန်းအရင်းအမြစ်များက သင့်ကို အဆင့်တိုင်း လမ်းညွှန်ပေးပါမည်။",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "စာရင်းကိုင်",
	"business/index::biz_label_faq": "မေးလေ့ရှိသော မေးခွန်းများ",
	"business/index::biz_label_maps": "ကုန်သည်မြေပုံ",
	"business/index::biz_label_rewards": "ဆုလာဘ်များ",
	"business/index::biz_label_stickers": "စတစ်ကာများ",
	"business/index::biz_label_wallets": "ပိုက်ဆံအိတ်များ",
	"business/index::biz_meta_description":
		"ပိုနည်းသော အခကြေးငွေ၊ ချက်ချင်းဖြေရှင်းမှု၊ chargeback မရှိနှင့် ဖောက်သည်ပိုများရရှိရန် သင့်လုပ်ငန်းတွင် Bitcoin ကို လက်ခံပါ။",
	"business/index::business_hero_subtitle":
		"ပိုနည်းသော အခကြေးငွေဖြင့် ငွေပေးချေမှု လက်ခံ၊ ချက်ချင်း ငွေလက်ခံရရှိ၊ ဖောက်သည်အသစ် သန်းပေါင်းများစွာ ရရှိ— စာချုပ်မလို၊ ဖုံးကွယ်ထားသော ကုန်ကျစရိတ်လည်း မရှိ။",
	"business/index::business_intro_c1":
		"Bitcoin သည် သင့်လုပ်ငန်းကို ပိုမြန်၊ ပိုသက်သာပြီး ပိုကိုယ်ရေးကိုယ်တာ ငွေလက်ခံနိုင်သော နည်းလမ်း ပေးသည်။ ကြားခံများ မရှိ။ chargeback များ မရှိ။ စာချုပ်များ မရှိ။ ဖောက်သည်ထံမှ သင့်ထံ စက္ကန့်အနည်းငယ်အတွင်း ဖြေရှင်းသော ငွေသာ ဖြစ်သည်။",
	"business/index::business_intro_c2":
		"အောက်တွင် Bitcoin သည် လုပ်ငန်းအတွက် အဘယ်ကြောင့် ကောင်းသနည်းကို ရိုးရှင်းသော ဗားရှင်း— ထို့နောက် ယနေ့ Bitcoin လက်ခံစတင်ရန် လိုအပ်သော အရင်းအမြစ်အားလုံး။",
	"business/index::business_resources_heading":
		"Bitcoin လက်ခံရန် လိုအပ်သော အရာအားလုံး",
	"business/index::business_resources_intro":
		"ဤအရင်းအမြစ်များကို သင့်အလျင်အမြန်နှင့် လေ့လာပါ။ တစ်ခုစီသည် တိုတောင်းသော လက်တွေ့လမ်းညွှန်တစ်ခု ဖြစ်သည်။",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"သင့်လုပ်ငန်းအကြောင်း ပြောပြပါ",
	"business/maps::biz_maps_form_intro":
		"သင့်ကို မှတ်ပုံတင်ရန် အသေးစိတ်အချို့သာ လိုအပ်ပါသည်။ လိပ်စာဒေတာကို သင့်လုပ်ငန်းကို မြေပုံသို့ တင်သွင်းရန် လုံလောက်သော အချိန်အထိသာ သိမ်းထားပါသည်။",
	"business/maps::biz_maps_hero_subtitle":
		"BTC Map တွင် သင့်လုပ်ငန်းကို အခမဲ့ မှတ်ပုံတင်ပါ— ကမ္ဘာအနှံ့ Bitcoin လက်ခံသော ကုန်သည်များ၏ ပွင့်လင်းသော လိပ်စာစာရင်း— အနီးတွင်းရှိ Bitcoin အသုံးပြုသူများက သင့်ကို ရှာတွေ့ပြီး သင့်လုပ်ငန်းတွင် Bitcoin သုံးနိုင်ရန်။",
	"business/maps::biz_maps_hero_title":
		"Bitcoin ကုန်သည်မြေပုံတွင် သင့်လုပ်ငန်းကို မှတ်ပုံတင်ပါ",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin အသုံးပြုသူများသည် သုံးစွဲရန်နေရာများကို တက်ကြွစွာ ရှာဖွေနေကြသည်။ သင့်လုပ်ငန်းကို မြေပုံပေါ်တွင် ထည့်ခြင်းသည် နီးနီးကပ်ကပ် စားသောက်ရန်၊ ဈေးဝယ်ရန်၊ သို့မဟုတ် တည်းခိုရန် နေရာ ရှာနေသော Bitcoin အသုံးပြုသူတိုင်းရှေ့တွင် သင့်ကို တင်ပေးသည်— သင့်အတွက် ကုန်ကျစရိတ် မရှိ။",
	"business/maps::biz_maps_intro_c2":
		"အောက်ပါ ရိုးရှင်းသော ပုံစံကို ဖြည့်ရုံဖြင့် သင့်လုပ်ငန်းကို BTC Map နှင့် အခြား Bitcoin ကုန်သည်မြေပုံများသို့ ကျွန်ုပ်တို့ တင်ပေးပါမည်။",
	"business/maps::biz_maps_meta_description":
		"အနီးဝန်းကျင်ရှိ Bitcoin အသုံးပြုသူများက သင့်ကို ရှာတွေ့နိုင်ရန် BTC Map နှင့် အခြား Bitcoin ကုန်သည်မြေပုံများတွင် သင့်လုပ်ငန်းကို အခမဲ့ မှတ်ပုံတင်ပါ။",
	"business/maps::biz_maps_placeholder_address": "လမ်းလိပ်စာ",
	"business/maps::biz_maps_placeholder_category":
		"အမျိုးအစား (ဥပမာ— စားသောက်ဆိုင်၊ ကော်ဖီဆိုင်၊ ဟိုတယ်)",
	"business/maps::biz_maps_placeholder_city": "မြို့",
	"business/maps::biz_maps_placeholder_country": "နိုင်ငံ",
	"business/maps::biz_maps_placeholder_name": "လုပ်ငန်းအမည်",
	"business/maps::biz_maps_placeholder_region": "ပြည်နယ် / ဒေသ",
	"business/maps::biz_maps_placeholder_website": "ဝက်ဘ်ဆိုက် (ရွေးချယ်နိုင်)",
	"business/maps::biz_maps_view_map_cta": "BTC Map ကို ကြည့်ပါ",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "BTC Map ကို ကြည့်ပါ",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"သင့်လုပ်ငန်းကို တင်သွင်းပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်။ မကြာမီ Bitcoin ကုန်သည်မြေပုံများတွင် သင့်ကို မှတ်ပုံတင်ပေးပါမည်။",
	"business/maps-success::biz_maps_success_hero_title":
		"တောင်းဆိုမှု လက်ခံရရှိပါပြီ 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"သင့်လုပ်ငန်းကို ၁ မှ ၂ ပတ်အတွင်း BTC Map နှင့် အခြား Bitcoin ကုန်သည် လိပ်စာစာရင်းများတွင် မှတ်ပုံတင်ပေးပါမည်။ မြေပုံ၏ တိကျမှုကို ထိန်းသိမ်းရန် တင်သွင်းမှုတိုင်းကို လက်ဖြင့် စစ်ဆေးပါသည်။",
	"business/maps-success::biz_maps_success_timeline_c2":
		"သင့်စာရင်းသွင်းမှု အသက်ဝင်လာသည်နှင့် အနီးဝန်းကျင်ရှိ Bitcoin အသုံးပြုသူများသည် သင့်လုပ်ငန်းကို ရှာတွေ့ပြီး Bitcoin သုံးရန် လာနိုင်ပါပြီ။",
	"business/maps-success::biz_maps_success_timeline_header":
		"နောက်တွင် ဘာဖြစ်မည်နည်း",
	"business/maps-success::biz_maps_success_view_c1":
		"စောင့်နေစဉ် ကမ္ဘာအနှံ့ Bitcoin လက်ခံသော လုပ်ငန်းများ၏ ကြီးထွားနေသော ကွန်ရက်ကို ကြည့်ရန် BTC Map ကို လည်ပတ်ပါ။",
	"business/maps-success::biz_maps_success_view_header":
		"သင် ပေါ်လာမည့်နေရာကို ကြည့်ပါ",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"ကိုယ်ပိုင် 'Bitcoin လက်ခံသည်' စတစ်ကာများ ပုံနှိပ်ရန် အင်္ဂလိပ်ဘာသာ စတစ်ကာဖိုင်များကို ဒေါင်းလုဒ်ဆွဲပါ။",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"ဖောက်သည်များကို Bitcoin လက်ခံကြောင်း ပြောရန် အင်္ဂလိပ်ဘာသာ 'Bitcoin လက်ခံသည်' စတစ်ကာများကို ကိုယ်တိုင် ပုံနှိပ်ပါ။",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"အင်္ဂလိပ်ဘာသာ 'Bitcoin လက်ခံသည်' စတစ်ကာဖိုင်များကို ဒေါင်းလုဒ်ဆွဲပါ",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"သင့်ဘာသာစကားဖြင့် 'Bitcoin လက်ခံသည်' စတစ်ကာဖိုင်များကို တောင်းဆိုသည့်အတွက် ကျေးဇူးတင်ပါသည်။",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"တောင်းဆိုမှု လက်ခံရရှိပါပြီ 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"သင့်စတစ်ကာဖိုင်များကို ၃ မှ ၄ ပတ်အတွင်း ဖန်တီးထုတ်ပြန်ပေးပါမည်။ ပြီးသွားသည်နှင့် ကျွန်ုပ်တို့၏ စတစ်ကာဖိုင်စာမျက်နှာမှ အခမဲ့ ဒေါင်းလုဒ်ဆွဲပြီး ပုံနှိပ်နိုင်ပါမည်။",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"စတစ်ကာဖိုင်များကို အပိုင်းလိုက် ထုတ်ပြန်ပါသည်— သင့်ဘာသာစကား အသက်ဝင်ရန် ရက်သတ္တပတ်အနည်းငယ်ကြာနိုင်သည်။ စိတ်ရှည်စွာ စောင့်ဆိုင်းပေးသည့်အတွက် ကျေးဇူးတင်ပါသည်။",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"နောက်တွင် ဘာဖြစ်မည်နည်း",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"အစုလိုက် မှာယူပါ",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"အခမဲ့ ထပ်တောင်းပါ",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"အခမဲ့ 'Bitcoin လက်ခံသည်' စတစ်ကာများကို ၂ မှ ၄ ပတ်အတွင်း လက်ခံရရှိပါမည်— စတစ်ကာ ၃ ခုပါသော အဖြူရောင် စာအိတ်အတွင်း။",
	"business/sticker-success::biz_sticker_success_hero_title":
		"သင့်စတစ်ကာများ လမ်းခရီးပေါ်တွင် 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"စတစ်ကာ ၃ ခုသည် သင့်လုပ်ငန်းအတွက် မလုံလောက်ပါက အခမဲ့ ထပ်တောင်းပါ— သို့မဟုတ် ကျွန်ုပ်တို့ သုံးသော တူညီသော ပုံနှိပ်စက်ဆရာထံမှ အစုလိုက် မှာယူပါ။",
	"business/sticker-success::biz_sticker_success_more_header":
		"စတစ်ကာ ပိုလိုအပ်ပါသလား?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"ဖောက်သည်များ မဝင်မီ မြင်နိုင်ရန် သင့်ရှေ့တံခါး သို့မဟုတ် ပြတင်းပေါက်တွင်",
	"business/sticker-success::biz_sticker_success_tip_2":
		"သင့်ငွေတောင်ခုံ၊ POS ဖန်သားပြင် သို့မဟုတ် ငွေပေးချေသည့် နေရာအနီးတွင်",
	"business/sticker-success::biz_sticker_success_tip_3":
		"မီနူး၊ ဈေးနှုန်းစာရင်း သို့မဟုတ် တစ်ပွင့်တိပ်အိုးပေါ်တွင်",
	"business/sticker-success::biz_sticker_success_tip_4":
		"သင်မပိုင်သော သို့မဟုတ် ခွင့်ပြုချက်မရှိသော နေရာများတွင် မကပ်ပါနှင့်",
	"business/sticker-success::biz_sticker_success_tips_header":
		"စတစ်ကာ ကပ်ရန် ကောင်းသော နေရာများ",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"သင့်ဖောက်သည်များကို Bitcoin လက်ခံကြောင်း ပြောပြပါ။ သင့်လုပ်ငန်းတွင် ထုတ်ထားရန် အခမဲ့ 'Bitcoin လက်ခံသည်' စတစ်ကာ အထုပ်တစ်ထုပ် မှာယူပါ။",
	"business/stickers::biz_stickers_hero_title":
		"အခမဲ့ 'Bitcoin လက်ခံသည်' စတစ်ကာများ",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoin လက်ခံခြင်းသည် အလုပ်တစ်ဝက်သာ ဖြစ်သည်— သင့်ဖောက်သည်များက သင်လက်ခံကြောင်း သိရှိရန်လည်း လိုအပ်သည်။ ဤ 'Bitcoin လက်ခံသည်' စတစ်ကာများကို ရှေ့တံခါး၊ ငွေတောင်ခုံ၊ မီနူး သို့မဟုတ် ဖောက်သည်များ ငွေမပေးမီ မြင်နိုင်သည့် နေရာတိုင်းတွင် ကပ်ရန် ဒီဇိုင်းဆွဲထားပါသည်။",
	"business/stickers::biz_stickers_intro_c2":
		"အမေရိကန် သို့မဟုတ် ကနေဒါ မည်သည့်နေရာသို့မဆို အခမဲ့ ပို့ဆောင်ပေးပါမည်— သို့မဟုတ် ကမ္ဘာ့မည်သည့်နေရာတွင်မဆို ကိုယ်တိုင် ပုံနှိပ်နိုင်ပါသည်။",
	"business/stickers::biz_stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 ကနေဒါ — စာတိုက်မှ အခမဲ့",
	"business/stickers::biz_stickers_option_print":
		"\ud83c\udf0d ကမ္ဘာ့အနှံ့ — ကိုယ်တိုင် ပုံနှိပ်ပါ",
	"business/stickers::biz_stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 အမေရိကန် — စာတိုက်မှ အခမဲ့",
	"business/stickers::biz_stickers_placeholder_translation1":
		"'Bitcoin လက်ခံသည်' ၏ ဘာသာပြန်",
	"business/stickers::biz_stickers_placeholder_translation2":
		"'Bitcoin သည် လုပ်ငန်းအတွက် အဘယ်ကြောင့် ကောင်းသနည်းကို သိရန် စကန်ဖတ်ပါ' ၏ ဘာသာပြန်",
	"business/stickers::biz_stickers_print_c1":
		"သင်နေထိုင်သော နေရာမည်သို့ပင်ဖြစ်စေ ကိုယ်တိုင် 'Bitcoin လက်ခံသည်' စတစ်ကာများ ပုံနှိပ်နိုင်ပါသည်။ စတစ်ကာဖိုင်များနှင့် ပုံနှိပ်ညွှန်ကြားချက်များကို ဒေါင်းလုဒ်ဆွဲရန် အောက်ပါ သင့်ဘာသာစကားကို နှိပ်ပါ။",
	"business/stickers::biz_stickers_print_header":
		"စတစ်ကာဖိုင်များကို ကိုယ်တိုင် ပုံနှိပ်ပါ",
	"business/stickers::biz_stickers_request_c1":
		"သင့်ဒေသခံဘာသာစကားဖြင့် 'Bitcoin လက်ခံသည်' စတစ်ကာဖိုင်များ တောင်းဆိုရန် အောက်ပါ ပုံစံကို ဖြည့်ပါ။ အသင့်ဖြစ်လျှင် အကြောင်းကြားပါမည်။",
	"business/stickers::biz_stickers_request_header":
		"သင့်ဘာသာစကား မမြင်ပါသလား?",
	"business/stickers::biz_stickers_step_description":
		"အမေရိကန်နှင့် ကနေဒါ လိပ်စာများသို့ အခမဲ့ ပို့ဆောင်ပေးပါမည်။ ကမ္ဘာ့မည်သည့်နေရာမှမဆို ကိုယ်တိုင် ပုံနှိပ်နိုင်ပါသည်။",
	"business/stickers::biz_stickers_step_header":
		"စတစ်ကာများ မည်သို့ ရရှိချင်ပါသနည်း?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Bitcoin ပိုက်ဆံအိတ်အားလုံး အပြန်အလှန် ချိတ်ဆက်နိုင်သည်— သင့်လုပ်ငန်းနှင့် သင့်တော်သည်ကို ရွေးပါ။ အခမဲ့၊ ချက်ချင်းဖြေရှင်းမှု၊ chargeback မရှိ။",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin အထူးပြု Lightning ပိုက်ဆံအိတ်",
	"business/wallets::sources_ibex":
		"IBEX — Lightning ငွေပေးချေမှု အခြေခံအဆောက်အအုံ",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin ငွေပေးချေမှု ပြုပြင်သူ",
	"business/wallets::sources_square":
		"Square — Bitcoin ငွေပေးချေမှုများ လက်ခံပါ",
	"business/wallets::sources_zaprite":
		"Zaprite — လုပ်ငန်းများအတွက် Bitcoin ပြေစာများ",
	"business/wallets::wallets_hero_subtitle":
		"အခမဲ့ Bitcoin ပိုက်ဆံအိတ်များ။ သင့်လုပ်ငန်းနှင့် သင့်တော်သည်ကို ရွေးပါ— ကိုယ်တိုင်၊ အွန်လိုင်း၊ သို့မဟုတ် ပြေစာအခြေခံ— မိနစ်အနည်းငယ်အတွင်း Bitcoin လက်ခံစတင်ပါ။",
	"business/wallets::wallets_section_invoice":
		"ပြေစာအခြေခံ လုပ်ငန်းများအတွက် ပိုက်ဆံအိတ်များ",
	"business/wallets::wallets_section_invoice_intro":
		"အကြံပေး၊ လွတ်လပ်အလုပ်၊ B2B ဝန်ဆောင်မှုများ ပြေစာထုတ်ပါက ပြေစာထုတ်ခြင်းအတွက် ဒီဇိုင်းပြုထားသော ပိုက်ဆံအိတ်ကို သုံးပါ။ ဖောက်သည်က Bitcoin ပြေစာကို ကလစ်အနည်းငယ်ဖြင့် ပေးချေနိုင်သည်။",
	"business/wallets::wallets_section_multiple":
		"ဝန်ထမ်းများစွာရှိ လုပ်ငန်းများအတွက် ပိုက်ဆံအိတ်များ",
	"business/wallets::wallets_section_multiple_intro":
		"ငွေတောင်ခုံတွင် ငွေလက်ခံသော အဖွဲ့ရှိပါက ဝန်ထမ်းများစွာ ဝင်ရောက်ခွင့်ရှိသော ပိုက်ဆံအိတ်ကို ရွေးပါ— ဝန်ထမ်းတိုင်း ကိုယ်ပိုင် PIN ရရှိပြီး မည်သူက မည်သည့် ငွေကို လက်ခံသည်ကို သန့်ရှင်းသော စစ်ဆေးမှု လမ်းကြောင်းရှိစေပါမည်။",
	"business/wallets::wallets_section_online": "အွန်လိုင်းလုပ်ငန်းများအတွက် ပိုက်ဆံအိတ်များ",
	"business/wallets::wallets_section_online_intro":
		"ဝက်ဘ်ဆိုက်တွင် ရောင်းနေပါသလား? ဤပိုက်ဆံအိတ်များက သင့်အွန်လိုင်းဆိုင်နှင့် ချိတ်ဆက်ပြီး ကမ္ဘာ့မည်သည့်နေရာမှမဆို ဖောက်သည်ထံမှ Bitcoin လက်ခံသည်— chargeback မရှိ၊ ကုန်သည် အကောင့်လည်း မလို။",
	"business/wallets::wallets_section_sole":
		"တစ်ဦးချင်း လုပ်ငန်းများအတွက် ပိုက်ဆံအိတ်များ",
	"business/wallets::wallets_section_sole_intro":
		"ဆိုင်၊ ကော်ဖီဆိုင်၊ စတူဒီယို သို့မဟုတ် ဝန်ဆောင်မှုကို ကိုယ်တိုင် လုပ်ဆောင်ပါက ဤပိုက်ဆံအိတ်များ အလုပ်လုပ်ပါမည်။ ငွေပေးချေမှုကို Bitcoin အဖြစ် သိမ်းချင်သည် သို့မဟုတ် တချို့ကို ဒေသခံငွေသို့ အလိုအလျောက် ပြောင်းချင်သည်အပေါ် မူတည်၍ ရွေးပါ။",
	"business/wallets::wallets_strike_note":
		"Strike Business က သင့်ကို Bitcoin နှင့် Lightning ငွေပေးချေမှုများကို အခကြေးငွေ သုညဖြင့် ချက်ချင်း ဖြေရှင်း လက်ခံခွင့်ပေးသည်။ ကိုယ်တိုင်၊ အွန်လိုင်းနှင့် ပြေစာအခြေခံ ငွေပေးချေမှုများကို သင့်ဒေသခံငွေသို့ အလိုအလျောက် ပြောင်းရန် ရွေးချယ်နိုင်စွမ်းဖြင့် ပံ့ပိုးပေးသည်။",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin လက်ခံသည်",
	"business/why::why_biz_s1": "ပိုနည်းသော အခကြေးငွေ၊ လုပ်ငန်းအတွက် ပိုရရှိ",
	"business/why::why_biz_s1_c1":
		"Bitcoin ငွေပေးချေမှုများသည် အရောင်းတိုင်း၏ ၂-၃% ယူသော ဘဏ်နှင့် ခရက်ဒစ်ကတ် ကုမ္ပဏီများကို ကျော်ဖြတ်သည်။ လုပ်ငန်းသည် သင်ပေးသမျှ ပိုပိုသိမ်းရရှိသည်— ဆိုလိုသည်မှာ သင့်အတွက် ပိုကောင်းသော ဈေးနှုန်းနှင့် ပိုကောင်းသော ဝန်ဆောင်မှုဖြစ်သည်။",
	"business/why::why_biz_s2": "ချက်ချင်းဖြေရှင်းမှု၊ chargeback မရှိ",
	"business/why::why_biz_s2_c1":
		"Bitcoin ငွေပေးချေမှုများသည် သင့်ပိုက်ဆံအိတ်မှ လုပ်ငန်းသို့ စက္ကန့်အနည်းငယ်အတွင်း တိုက်ရိုက် ဖြေရှင်းသည်။ ဘဏ်က ငွေထုတ်ပေးရန် ရက်များ စောင့်ဆိုင်းရန် မလိုအပ်၊ chargeback အငြင်းပွားမှု ကုန်ကျမှု မရှိ— လုပ်ငန်းများက လိမ်လည်မှုကို တိုက်ခိုက်မယ့်အစား ဖောက်သည်များကို ဝန်ဆောင်မှုပေးနိုင်သည်။",
	"business/why::why_biz_s3":
		"အခမဲ့ လက်ခံ၊ လူတိုင်းအတွက် ပွင့်လင်း",
	"business/why::why_biz_s3_c1":
		"လုပ်ငန်းများက Bitcoin လက်ခံရန် စာချုပ်၊ လစဉ်အခကြေးငွေ၊ စတင်စရိတ်များ မရှိပါ။ ကမ္ဘာ့အနှံ့ Bitcoin အသုံးပြုသူ သန်းပေါင်းများစွာသည် လက်ခံသော ကုန်သည်များကို တက်ကြွစွာ ရှာဖွေနေသည်— ဤလုပ်ငန်းများကို ဖောက်သည်အသစ်များအတွက် အခမဲ့ ထင်ရှားမှု ပေးသည်။",
	"business/why::why_business_cta_intro":
		"လုပ်ငန်းလုပ်နေပြီး Bitcoin လက်ခံစတင်ချင်ပါသလား?",
	"business/why::why_business_cta_link": "ဘယ်လိုလုပ်ဆောင်သည်ကို ကြည့်ပါ \u2192",
	"business/why::why_for_business":
		"Bitcoin သည် ဤလုပ်ငန်းအတွက် အဘယ်ကြောင့် ကောင်းမွန်သနည်း",
	"business/why::why_for_business_intro":
		"Bitcoin လက်ခံခြင်းက လုပ်ငန်းများကို အရောင်းတိုင်း ပိုပိုသိမ်းနိုင်စေ၊ chargeback မရှိဘဲ ချက်ချင်းပေးရရှိစေ၊ Bitcoin အသုံးပြုသူများ၏ ကမ္ဘာ့ပရိသတ်သို့ ရောက်ရှိစေသည်— စာချုပ်များမရှိ၊ လစဉ်အခကြေးငွေမရှိ။",
	"business/why::why_good_for_you":
		"Bitcoin သည် သင့်အတွက်လည်း ကောင်းမွန်ပါသည်",
	"business/why::why_good_for_you_intro":
		"Bitcoin သည် ငွေတောင်ခုံတွင်သာ အသုံးဝင်သည် မဟုတ်ပါ— ၎င်းသည် သင့်စုငွေ၊ ကိုယ်ရေးကိုယ်တာနှင့် အရောင်းအဝယ်ပြုလုပ်နိုင်သော လွတ်လပ်ခွင့်ကို ကာကွယ်ပေးသော ပိုကောင်းသော ငွေပုံစံတစ်ခုဖြစ်သည်။ ဤသည်မှာ ရိုးရှင်းသော ခြုံငုံ။",
	"business/why::why_hero_subtitle":
		"သင်က Bitcoin လက်ခံသည် စတစ်ကာကို ခုနှိပ်ထား စကန်ဖတ်လိုက်ပြီ။ ဤသတင်းကောင်း ဖြစ်ရသည့် အကြောင်းရင်းမှာ— ဤလုပ်ငန်းအတွက်နှင့် သင့်အတွက်ပင်။",
	"business/why::why_intro_c1":
		"သင်ရှိနေသော လုပ်ငန်းသည် Bitcoin ကို လက်ခံနေပါသည်— ဘဏ် သို့မဟုတ် ကြားခံများ မယူဘဲ ကမ္ဘာ့မည်သည့်နေရာမှ မည်သူမဆို သုံးနိုင်သော ခေတ်မီ open-source ငွေပေးချေမှု ကွန်ရက်တစ်ခုဖြစ်သည်။",
	"business/why::why_intro_c2":
		"အောက်တွင် Bitcoin လက်ခံခြင်းသည် ဤလုပ်ငန်းအတွက် အဘယ်ကြောင့် ကောင်းမွန်သနည်းနှင့် Bitcoin သုံးခြင်းသည် သင်ဖောက်သည်အဖြစ် အဘယ်ကြောင့် ကောင်းမွန်သနည်းကို ရိုးရှင်းသော ဗားရှင်း ရှိသည်။",
	"business/why::why_learn_more_lowercase": "ပိုမိုလေ့လာရန် \u2192",
	"business/why::why_next_business_label": "BITCOIN လက်ခံပါ",
	"business/why::why_next_business_title":
		"သင့်လုပ်ငန်းတွင် Bitcoin ကို လက်ခံပါ",
	"business/why::why_next_buy_label": "BITCOIN ဝယ်ပါ",
	"business/why::why_next_buy_title": "သင့်ပထမဆုံး Bitcoin ကို ဝယ်ပါ",
	"business/why::why_next_learn_label": "ပိုမို လေ့လာပါ",
	"business/why::why_next_learn_title":
		"Bitcoin အကြောင်း ပိုမို လေ့လာပါ",
	"business/why::why_next_wallet_label": "ပိုက်ဆံအိတ် ရယူပါ",
	"business/why::why_next_wallet_title":
		"ကိုယ်ပိုင် Bitcoin ပိုက်ဆံအိတ် ရယူပါ",
	"business/why::why_s1_c1":
		"ငွေကြေးဖောင်းပွမှုသည် ငွေပိုပုံနှိပ်ခြင်း သို့မဟုတ် ငွေအလေးမရှိ ဖန်တီးခြင်းကြောင့် ဖြစ်သည်။ ၎င်းက သင့်အိတ်ထဲရှိ ငွေကို အချိန်ကြာလာသည်နှင့်အမျှ တန်ဖိုးနည်းသွားစေသည်— ၎င်းကြောင့် ဈေးနှုန်းများ နှစ်စဉ်တက်နေသည်။",
	"business/why::why_s1_c2":
		"Bitcoin တွင် သကြားလုံး ၂၁ သန်း ပုံသေထောက်ပံ့မှုရှိသည်။ မည်သည့်အစိုးရ၊ ဘဏ် သို့မဟုတ် ကုမ္ပဏီကမျှ ပိုပုံနှိပ်၍ မရပါ။ သင့် Bitcoin စုငွေသည် တန်ဖိုးကို လျှို့ဝှက်စွာ ဆုံးရှုံးသွားစေမည့်အစား အချိန်ကြာလာသည်နှင့်အမျှ ထိန်းသိမ်းထားပါသည်။",
	"business/why::why_s2_c1":
		"အမေရိကန် ဘဏ်အချို့သည် မကြာသေးခင်နှစ်များတွင် ဘဏ်ငွေထုတ်တိုးမှု ကြောင့် ပြိုလဲခဲ့ကြသည်။ ဖောက်သည်များ တစ်ပြိုင်နက်တည်း ငွေထုတ်ယူရန် ကြိုးစားပါက ဘဏ်တွင် လူတိုင်းကို ပြန်ပေးနိုင်သော ငွေသား မရှိပါ။",
	"business/why::why_s2_c2":
		"သင့်ငွေကို သိမ်းထားရမည့်အစား ဘဏ်များက အများစုကို ချေးပေးပြီး ရင်းနှီးမြှုပ်နှံကြသည်။ ထိုရင်းနှီးမြှုပ်နှံမှုများ ပျက်စီးပါက သို့မဟုတ် အပ်နှံသူများက ယုံကြည်မှု ဆုံးရှုံးသွားပါက ဘဏ်ပျက်ပြီး သင့်အပ်နှံငွေ ပိတ်ထား သို့မဟုတ် ဆုံးရှုံးသွားနိုင်သည်။",
	"business/why::why_s2_c3":
		"Bitcoin ဖြင့် ကိုယ်ပိုင်ပိုက်ဆံအိတ်တွင် ကိုယ်ပိုင်ငွေကို တိုက်ရိုက် သိမ်းနိုင်သည်။ ဘဏ်မရှိ။ ကြားခံ မရှိ။ ဘဏ်ငွေထုတ်တိုးမှု မရှိ။",
	"business/why::why_s3_c1":
		"ခရက်ဒစ်ကတ်များ၊ PayPal သို့မဟုတ် ရိုးရိုး ဘဏ်အကောင့်များနှင့်မတူ Bitcoin ကို သုံးရန် မည်သူ၏ ခွင့်ပြုချက်ကိုမျှ မလိုပါ။",
	"business/why::why_s3_c2":
		"မည်သူမျှ သင့်အကောင့်ကို ပိတ်ထား၍မရ၊ ငွေပေးချေမှုကို တားဆီး၍မရ၊ သို့မဟုတ် ကွန်ရက်မှ ဖြတ်တောက်၍မရပါ။ ၎င်းသည် ဆင်ဆာဖြတ်ခြင်း သို့မဟုတ် သိမ်းဆည်းခြင်းကို မကြောက်ဘဲ လွတ်လပ်စွာ သုံးနိုင်သော ပထမဆုံး ဘဏ္ဍာရေး စနစ်ဖြစ်သည်။",
	"business/why::why_s4_c1":
		"Bitcoin ကို မကြာခဏ နားလည်မှုလွဲကြသည်၊ သို့သော် ကမ္ဘာတွင် ကောင်းသော အရာများစွာကို တိတ်တိတ်ဆိတ်ဆိတ် လုပ်ဆောင်နေသည်။",
	"business/why::why_s4_c2":
		"Bitcoin သည် လူ့အခွင့်အရေး လှုပ်ရှားသူများကို လွတ်လပ်ခွင့်အတွက် တိုက်ပွဲဝင်ရာတွင် ကူညီခဲ့သည်၊ အမှိုက်ပုံများနှင့် ရေနံကွက်များမှ ကမ္ဘာ့ မီသိန်းထုတ်လွှတ်မှုကို လျှော့ချခဲ့သည်၊ လျှပ်စစ်ဓာတ်အားကွန်ရက်ကို တည်ငြိမ်စေခဲ့သည်၊ အမျိုးသားဥယျာဉ်များကဲ့သို့ အများပြည်သူ ကုန်ပစ္စည်းများကို ထောက်ပံ့ခဲ့သည်။",
	"business/why::why_whats_next_heading": "နောက် ဘယ်သွားမည်နည်း?",
	"business/why::why_whats_next_intro":
		"ဤသည် သင့် ပထမဆုံးအကြိမ် Bitcoin စတစ်ကာ စကန်ဖတ်ခြင်းဖြစ်ပါက ဤနေရာမှ စတင်ရန် အသုံးဝင်ဆုံး နေရာများ ဖြစ်သည်။",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Bitcoin ဝယ်ယူနည်း",
	"buy::buy_step_1_header": "သင့်နိုင်ငံကို ရွေးပါ",
	"buy::buy_step_2_header": "သင့်ငွေပေးချေမှုနည်းကို ရွေးပါ",
	"buy::buy_step_3_header": "သင့်ဝယ်ယူမှုရွေးချယ်စရာများ",
	"buy::buy_step_4_header": "သင့် Bitcoin ကို လုံခြုံစွာ သိမ်းပါ",
	"buy::buy_header_subtitle":
		"သင့်ပထမဆုံး Bitcoin ဝယ်ယူရန် ရိုးရှင်းသော အဆင့်ဆင့် လမ်းညွှန်။",
	"buy::buy_howto_name": "Bitcoin ဝယ်ယူနည်း",
	"buy::buy_meta_description":
		"ကျွန်ုပ်တို့၏ အဆင့်ဆင့်လမ်းညွှန်ဖြင့် Bitcoin ကို လုံခြုံစွာ ဝယ်ယူနည်းကို လေ့လာပါ။ သင့်အတွက် အကောင်းဆုံး Bitcoin ဝယ်ယူမှု ရွေးချယ်စရာများ ရှာရန် နိုင်ငံနှင့် ငွေပေးချေမှုနည်း ရွေးချယ်ပါ။",
	"buy::buy_step_1_eyebrow": "အဆင့် ၁",
	"buy::buy_step_2_eyebrow": "အဆင့် ၂",
	"buy::buy_step_3_eyebrow": "အဆင့် ၃",
	"buy::buy_step_4_eyebrow": "အဆင့် ၄",
	"buy::buy_storage_cta_label": "နောက်တစ်ဆင့်",
	"buy::sources_bisq":
		"Bisq — ဗဟိုချုပ်ကိုင်မှုမရှိသော peer-to-peer Bitcoin အပြန်အလှန်ဖလှယ်ရေး",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — ကမ္ဘာ့အနှံ့ Bitcoin ATM လိပ်စာစာရင်း",
	"buy::sources_kraken": "Kraken — ခိုင်မာသော Bitcoin အပြန်အလှန်ဖလှယ်ရေး",
	"buy::sources_relai":
		"Relai — ဆွစ်ဇာလန်မှ Bitcoin အထူးပြု self-custody application",
	"buy::sources_river":
		"River — Bitcoin အထူးပြု ဝယ်ယူမှု၊ တူးဖော်မှုနှင့် ထိန်းသိမ်းမှု",
	"buy::sources_strike_lightning":
		"Strike — Lightning Network ပံ့ပိုးမှုဖြင့် Bitcoin ဝယ်ပါ",
	"buy::sources_swan":
		"Swan Bitcoin — Bitcoin အထူးပြု dollar-cost averaging",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "ဘာသာစကား ထည့်ပါ",
	"common::common_next_buy_bitcoin": "Bitcoin ဝယ်ပါ",
	"common::common_next_buy_bitcoin_desc":
		"Bitcoin ကို လုံခြုံစွာ ဝယ်ယူနည်းကို လေ့လာပါ",
	"common::common_next_calculate": "သင့်ငွေကြေးဖောင်းပွမှုကို တွက်ချက်ပါ",
	"common::common_next_calculate_desc":
		"အချိန်ကြာလာသည်နှင့်အမျှ ငွေကြေးဖောင်းပွမှုက သင့်လစာကို မည်ကဲ့သို့ ထိခိုက်စေသည်ကို ကြည့်ပါ",
	"common::common_next_get_wallet": "ပိုက်ဆံအိတ် ရယူပါ",
	"common::common_next_get_wallet_desc":
		"သင့်ပထမဆုံး Bitcoin ပိုက်ဆံအိတ်ကို ရယူပါ — အခမဲ့",
	"common::common_next_keep_learning": "ဆက်လက် လေ့လာပါ",
	"common::common_next_keep_learning_desc":
		"Bitcoin သည် ကမ္ဘာကို မည်ကဲ့သို့ ပိုကောင်းအောင် လုပ်ပေးသည်ကို ကြည့်ပါ",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — Consumer Price Index (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — ငွေထောက်ပံ့မှု (အမျိုးအစားမှတ်တမ်း)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — \"Can a Treasury Auction Fail?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "နောက်ဘာလုပ်မည်နည်း?",
	"common::common_sticker_files_mission_5": "အထုပ်တောင်းပါ",
	"common::common_site_tagline": "လူတိုင်းအတွက် Bitcoin ပညာရေး။",
	"common::common_source_btc_map":
		"BTC Map — ကမ္ဘာ့အနှံ့ Bitcoin လက်ခံသော ကုန်သည်လိပ်စာစာရင်း",
	"common::common_source_btcpayserver":
		"BTCPay Server — အခမဲ့၊ open source၊ ကိုယ်ပိုင်လည်ပတ်နိုင်သော Bitcoin ငွေပေးချေမှု ပြုပြင်သူ",
	"common::common_source_oshi":
		"Oshi — ကုန်သည်များအတွက် Bitcoin ဆုလာဘ် ပလက်ဖောင်း",
	"common::common_source_strike_business":
		"Strike — လုပ်ငန်းများအတွက် Bitcoin နှင့် Lightning ငွေပေးချေမှုများ",
	"common::common_sources_group_bitcoin": "Bitcoin ဒေတာ",
	"common::common_sources_group_cpi":
		"ငွေကြေးဖောင်းပွမှု / စားသုံးသူဈေးနှုန်းညွှန်း",
	"common::common_sources_group_debt": "အစိုးရကြွေးမြီ",
	"common::common_sources_group_money": "ငွေထောက်ပံ့မှု ဒေတာ",
	"common::common_sources_group_stories": "လက်တွေ့ ဥပမာများ",
	"common::common_sticker_files_mission_6":
		"အင်္ဂလိပ်ဘာသာ စတစ်ကာများ အခမဲ့။",
	"common::common_sticker_files_next_flyers_label": "လက်ကမ်းစာစောင်များ",
	"common::common_sticker_files_next_flyers_title":
		"Bitcoin လက်ကမ်းစာစောင်များ ပုံနှိပ်ပါ",
	"common::common_sticker_files_next_languages_label": "စတစ်ကာဖိုင်များ",
	"common::common_sticker_files_next_languages_title":
		"အခြားဘာသာစကားများဖြင့် စတစ်ကာဖိုင်များကို ကြည့်ပါ",
	"common::common_sticker_files_print_these": "၎င်းတို့ကို ကလစ် ၁ ချက်ဖြင့် ပုံနှိပ်ပါ",
	"common::common_sticker_name_bdhi_black":
		'"Bitcoin တွင် ငွေကြေးဖောင်းပွမှုမရှိ" စတစ်ကာ (အနက်ရောင်)',
	"common::common_sticker_name_bdhi_orange":
		'"Bitcoin တွင် ငွေကြေးဖောင်းပွမှုမရှိ" စတစ်ကာ (လိမ္မော်ရောင်)',
	"common::common_sticker_name_caution":
		'"သတိပြုပါ! ရေခဲ အရည်ပျော်နေသည်" Bitcoin စတစ်ကာ',
	"common::common_sticker_name_cure_inflation":
		'"ငွေကြေးဖောင်းပွမှုကို ကုသပါ" Bitcoin စတစ်ကာ',
	"common::common_sticker_name_danger":
		'"အန္တရာယ်! ငွေကြေးဖောင်းပွမှု ရှေ့တွင်" Bitcoin စတစ်ကာ',
	"common::common_sticker_name_fix":
		'"ငွေကို ပြင်ပါ၊ ကမ္ဘာကို ပြင်ပါ" Bitcoin စတစ်ကာ',
	"common::common_sticker_name_got_inflation":
		'"ငွေကြေးဖောင်းပွမှု ရှိသလား?" Bitcoin စတစ်ကာ',
	"common::common_sticker_name_study": '"Bitcoin လေ့လာပါ" စတစ်ကာ',
	"common::common_sticker_name_warning":
		'"သတိပေးချက်! ငွေကြေးဖောင်းပွမှုက သင့်စုငွေကို ခိုးနေသည်" Bitcoin စတစ်ကာ',
	"common::common_sticker_name_what_if":
		'"သင့်ငွေတွင် ငွေကြေးဖောင်းပွမှုမရှိပါက?" Bitcoin စတစ်ကာ',
	"common::common_sticker_tips_heading": "စတစ်ကာ အကြံဉာဏ်များ",
	"common::common_sticker_tips_intro":
		"စတစ်ကာများ ပုံနှိပ်ပြီးနောက် မြင်နိုင်သည့် နေရာများတွင် ကပ်ပါ။ ကောင်းသော စတစ်ကာ ကပ်ရန်နေရာများမှာ—",
	"common::common_sticker_tips_list_1":
		"လူများ မြင်နိုင်သော အများပြည်သူ နေရာများတွင်",
	"common::common_sticker_tips_list_2":
		"အမြန်ခွာထုတ်ခြင်းခံရဖို့ မဖြစ်နိုင်သော နေရာများတွင် (စတစ်ကာက အမြဲတမ်း ပျက်စီးမှု မဖြစ်စေပါ)",
	"common::common_sticker_tips_list_3":
		"လွယ်ကူစွာ ကပ်နိုင်သော မျက်နှာပြင်များတွင် (သတ္တု၊ ပလတ်စတစ်၊ ဖန်)",
	"common::common_sticker_tips_list_4":
		"ပုဂ္ဂလိကပိုင်ဆိုင်မှု၊ လက္ခဏာပြ၊ ATM သို့မဟုတ် ဆီစက်များ မဖုံးအပ်ပါ",
	"common::common_stickers_printer_prefix": "ကျွန်ုပ်တို့ သုံးသည်",
	"common::common_stickers_printer_suffix":
		"သို့သော် မည်သည့် စတစ်ကာ ကုမ္ပဏီကိုမဆို သုံးနိုင်ပါသည်။",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Consumer Price Index for All Urban Consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 Money Supply",
	"compound-inflation-calculator::cic_calculator_heading":
		"သင့်ငွေကြေးဖောင်းပွမှု ကွာဟချက်ကို တွက်ချက်ပါ",
	"compound-inflation-calculator::cic_cta_label": "နောက်တစ်ဆင့်",
	"compound-inflation-calculator::cic_hero_subtitle":
		"ငွေကြေးဖောင်းပွမှုနှင့် ရင်ဘောင်တန်းရန် သင့်လစာ မည်မျှ တိုးရမည်ကို ကြည့်ပါ။",
	"compound-inflation-calculator::cic_next_explore_topics":
		"အခြေခံ ခေါင်းစဉ်များ ပိုလေ့လာပါ",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Bitcoin သည် ငွေ၊ လွတ်လပ်ခွင့်၊ စွမ်းအင်နှင့် အခြားအရာများနှင့် မည်သို့ ဆက်စပ်နေသည်ကို ကြည့်ပါ။",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"ငွေကြေးဖောင်းပွမှု အလုပ်လုပ်ပုံကို လေ့လာပါ",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"ဤ Bitcoin လက်ကမ်းစာစောင်များကို ပုံနှိပ်ပြီး ပိုစတာအဖြစ် ကပ်နည်း",
	"flyers::flyers_hero_subtitle":
		"အခမဲ့၊ ပုံနှိပ်နိုင်သော Bitcoin လက်ကမ်းစာစောင်များ။ လူပိုများက Bitcoin အကြောင်း လေ့လာနိုင်ရန် အများပြည်သူ နေရာများတွင် ကပ်ပါ။",
	"flyers::flyers_hero_title": "Bitcoin လက်ကမ်းစာစောင်များ ပုံနှိပ်ပြီး ကပ်ပါ",
	"flyers::flyers_next_get_stickers": "သတင်းပျံ့ပါ",
	"flyers::flyers_next_get_stickers_desc":
		"အခမဲ့ Bitcoin စတစ်ကာ အထုပ်ကို မှာယူပါ",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"ပါဝင်ပြီး Bitcoin ကို ပျံ့နှံ့ပါ",
	"get-involved::get_involved_business_content_1":
		"Bitcoin စားပွဲဝန်း ဈေးကွက်ကို တည်ဆောက်ရန် ကူညီချင်ပါသလား? အလွယ်ဆုံးနည်းမှာ ဒေသခံ လုပ်ငန်းများကို Bitcoin ငွေပေးချေမှု လက်ခံစတင်စေရန် ကူညီခြင်းဖြစ်သည်။",
	"get-involved::get_involved_business_content_2":
		"ဖွင့်လှစ်ထားနိုင်သော လုပ်ငန်းကို သိပါသလား? ပိုင်ရှင်ကို",
	"get-involved::get_involved_business_content_3":
		"ကျွန်ုပ်တို့၏ Bitcoin လုပ်ငန်းစာမျက်နှာသို့ ပို့ပါ။",
	"get-involved::get_involved_description":
		"ကျွန်ုပ်တို့၏ အခမဲ့ အရင်းအမြစ်များက Bitcoin လက်ခံအသုံးပြုမှုကို ပျံ့နှံ့စေရန် လွယ်ကူစေသည်။ စတစ်ကာများ၊ လက်ကမ်းစာစောင်များ၊ လုပ်ငန်းများအတွက် 'Bitcoin လက်ခံသည်' စတစ်ကာများနှင့် မည်သူမဆို ပါဝင်ပံ့ပိုးနိုင်သော open source ကုဒ်အခြေခံ။",
	"get-involved::get_involved_header":
		"ပါဝင်ပြီး Bitcoin ကို ပျံ့နှံ့ပါ။",
	"get-involved::get_involved_intro_5":
		"သင်က ၎င်းကို ပြောင်းလဲရန် ကူညီနိုင်ပါသည်။ Bitcoin ယူဆောင်လာသော မျှော်လင့်ချက်ကို သင့်ပတ်ဝန်းကျင်ရှိ လူများထံ ပျံ့နှံ့စေရန် လွယ်ကူစေသော အခမဲ့ အရင်းအမြစ်များကို ကျွန်ုပ်တို့ ဖန်တီးထားပါသည်။",
	"get-involved::get_involved_biz_stickers_note":
		"Bitcoin လက်ခံနေပြီးသားဆိုလျှင်— ကျွန်ုပ်တို့၏ အခမဲ့ 'Bitcoin လက်ခံသည်' စတစ်ကာများဖြင့် ဖောက်သည်များကို ပြောပြပါ။ အမေရိကန် သို့မဟုတ် ကနေဒါ မည်သည့်လိပ်စာသို့မဆို အထုပ်တစ်ထုပ် ပို့ဆောင်ပေးပါမည်— သို့မဟုတ် ကမ္ဘာ့မည်သည့်နေရာတွင်မဆို ကိုယ်တိုင် ပုံနှိပ်နိုင်ပါသည်။",
	"get-involved::get_involved_card_biz_stickers_label":
		"လက်ခံသည် စတစ်ကာများ",
	"get-involved::get_involved_card_biz_stickers_source":
		"အရင်းအမြစ်— bitcoin.rocks \u2192",
	"get-involved::get_involved_card_biz_stickers_title":
		"သင့်လုပ်ငန်းအတွက် အခမဲ့ 'Bitcoin လက်ခံသည်' စတစ်ကာများ",
	"get-involved::get_involved_card_business_label":
		"လုပ်ငန်းအတွက် Bitcoin",
	"get-involved::get_involved_card_business_source":
		"အရင်းအမြစ်— bitcoin.rocks \u2192",
	"get-involved::get_involved_card_business_title":
		"လုပ်ငန်းတစ်ခု Bitcoin ငွေပေးချေမှု လက်ခံစတင်ရန် လိုအပ်သော အရာအားလုံး",
	"get-involved::get_involved_card_flyers_label": "ပုံနှိပ်လက်ကမ်းစာစောင်များ",
	"get-involved::get_involved_card_flyers_source":
		"အရင်းအမြစ်— bitcoin.rocks \u2192",
	"get-involved::get_involved_card_flyers_title":
		"အခမဲ့ Bitcoin လက်ကမ်းစာစောင်များကို ဒေါင်းလုဒ်ဆွဲပြီး ပုံနှိပ်ပါ",
	"get-involved::get_involved_card_github_label": "Open source",
	"get-involved::get_involved_card_github_source":
		"အရင်းအမြစ်— GitHub \u2192",
	"get-involved::get_involved_card_github_title":
		"GitHub တွင် bitcoin.rocks ကို ပါဝင်ပံ့ပိုးပါ",
	"get-involved::get_involved_card_stickers_label": "အခမဲ့စတစ်ကာများ",
	"get-involved::get_involved_card_stickers_source":
		"အရင်းအမြစ်— bitcoin.rocks \u2192",
	"get-involved::get_involved_card_stickers_title":
		"အခမဲ့ Bitcoin စတစ်ကာ အထုပ်ကို သင့်အိမ်တံခါးသို့ တောင်းပါ",
	"get-involved::get_involved_flyers_content_1":
		"လက်ကမ်းစာစောင်များသည် သင့်ရပ်ရွာသို့ Bitcoin ကို မိတ်ဆက်ရန် အလွယ်ကူဆုံးနည်းတစ်ခု ဖြစ်သည်။ အခမဲ့ ပုံနှိပ်နိုင်သော Bitcoin လက်ကမ်းစာစောင်များကို ဒေါင်းလုဒ်ဆွဲပြီး လိုသလောက် ပုံနှိပ်ကာ ရပ်ရွာ သတင်းဘုတ်များ၊ ကော်ဖီဆိုင်များ၊ တွေ့ဆုံပွဲများ သို့မဟုတ် လူများ စုဝေးသည့် မည်သည့်နေရာတွင်မဆို ကပ်ပါ။",
	"get-involved::get_involved_flyers_content_2":
		"လက်ကမ်းစာစောင်တိုင်းတွင် ဆွဲဆောင်သော ခေါင်းစဉ်နှင့် QR ကုဒ်ပါဝင်ပြီး စိတ်ဝင်စားသော စာဖတ်သူများကို ပိုလေ့လာရန် bitcoin.rocks သို့ ပို့သည်။",
	"get-involved::get_involved_flyers_content_3":
		"စတစ်ကာများနှင့်မတူ လက်ကမ်းစာစောင်များကို ကမ္ဘာ့မည်သည့်နေရာမှမဆို တောင်းဆိုသလို ပုံနှိပ်နိုင်သည်— ပုံနှိပ်စက်တစ်ခုနှင့် မိနစ်အနည်းငယ်သာ လိုသည်။",
	"get-involved::get_involved_flyers_header":
		"လက်ကမ်းစာစောင်များ ပုံနှိပ်ပြီး ကပ်ပါ",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks မှ အခမဲ့ ပုံနှိပ်နိုင်သော Bitcoin လက်ကမ်းစာစောင် ကြိုကြည့်",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks သည် MIT လိုင်စင်ပေးထားသော အခမဲ့နှင့် open source စီမံကိန်းဖြစ်သည်။ ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်မှာ ပညာရေးမှတဆင့် Bitcoin လက်ခံအသုံးပြုမှုကို အရှိန်မြှင့်တင်ရန်ဖြစ်ပြီး— တစ်ဦးတည်း မလုပ်နိုင်ပါ။",
	"get-involved::get_involved_github_content_2":
		"developer၊ ဒီဇိုင်နာ၊ ရေးသားသူ သို့မဟုတ် ဘာသာပြန်သူ ဖြစ်ပါစေ၊ ကူညီနိုင်သော နည်းလမ်းရှိပါသည်။ ကမ္ဘာ့အနှံ့ လူပိုများက ၎င်းတို့၏ မိခင်ဘာသာစကားဖြင့် Bitcoin အကြောင်း လေ့လာနိုင်ရန် ကျွန်ုပ်တို့၏ အကြောင်းအရာကို ဘာသာပြန်ပေးနိုင်သော ပါဝင်ပံ့ပိုးသူများကို အထူး ကြိုဆိုပါသည်။",
	"get-involved::get_involved_github_content_3":
		"repository ကို fork လုပ်၊ pull request ဖွင့်၊ issue တင်ပြ၊ သို့မဟုတ် ပံ့ပိုးမှုကို ပြရန် project ကို ကြယ်ပွင့်ပေးပါ။ ပါဝင်ပံ့ပိုးမှုတိုင်းသည် Bitcoin ကို လူပိုများထံ ရောက်ရှိစေရန် ကူညီသည်။",
	"get-involved::get_involved_github_header":
		"GitHub တွင် ပါဝင်ပံ့ပိုးပါ",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks မှ အခမဲ့ Bitcoin စာသား စတစ်ကာ အထုပ်",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "ကြည့်ပါ",
	"lightning::lightning_grid_heading": "လူကြိုက်များသော Lightning ပိုက်ဆံအိတ်များ",
	"lightning::lightning_hardware_cta_label": "Hardware ပိုက်ဆံအိတ်",
	"lightning::lightning_header_subtitle":
		"Lightning သည် တစ်ပြားအောက် အခကြေးငွေဖြင့် Bitcoin ကို စက္ကန့်အနည်းငယ်အတွင်း ပို့ခွင့်ပေးသည်— သင်သုံးချင်သော Bitcoin ပမာဏနှင့် သင့်တော်သော အလျော့အပေးရှိသည့် ပိုက်ဆံအိတ်ကို ရွေးပါ။",
	"lightning::lightning_s1_c4_end": "ပိုမို သိရှိရန်။",
	"lightning::lightning_s1_c4_link": "Bitcoin Hardware ပိုက်ဆံအိတ် လမ်းညွှန်",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning ပိုက်ဆံအိတ်",
	"lightning::sources_breez_lightning":
		"Breez — self-custodial Lightning ပိုက်ဆံအိတ်",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning Network မှတ်တမ်း",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — custodial Lightning ပိုက်ဆံအိတ်",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone၊ Android & web",
	"nostr/index::nostr_platform_web": "ဝက်ဘ် ဘရောက်ဇာ",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr သည် အွန်လိုင်း ဆက်သွယ်ရေးအတွက် ဗဟိုချုပ်ကိုင်မှုမရှိသော ပရိုတိုကောအသစ်တစ်ခု ဖြစ်သည်— မည်သည့်ကုမ္ပဏီတစ်ခုတည်းကမျှ မထိန်းချုပ်နိုင်၊ Bitcoin zap များ သဘာဝအတိုင်း ပါဝင်ပြီး၊ ပျက်ရှသူများ မဆုံးရှုံးဘဲ client များကြား လွှဲပြောင်းနိုင်သည်။",
	"nostr/index::nostr_amethyst_f1": "လုပ်ဆောင်ချက်များနှင့် စိတ်ကြိုက်များ ပြင်ဆင်နိုင်",
	"nostr/index::nostr_amethyst_f2":
		"Bitcoin ပိုက်ဆံအိတ် သီးခြား လိုအပ်",
	"nostr/index::nostr_amethyst_f3": "၁၀၀% အခမဲ့",
	"nostr/index::nostr_damus_f1": "Twitter ကဲ့သို့ ရင်းနှီးသော အင်တာဖေ့စ်",
	"nostr/index::nostr_damus_f2": "Bitcoin ပိုက်ဆံအိတ် သီးခြား လိုအပ်",
	"nostr/index::nostr_damus_f3": "၁၀၀% အခမဲ့",
	"nostr/index::nostr_download_heading":
		"အခမဲ့ Nostr client များကို ဒေါင်းလုဒ်ဆွဲပါ",
	"nostr/index::nostr_download_intro":
		"Nostr client များသည် Nostr ကွန်ရက်တွင် ဖတ်ရှုပြီး တင်ထုတ်နိုင်စေသော အခမဲ့ application များ ဖြစ်သည်။ အားလုံး အပြန်အလှန် ချိတ်ဆက်ထားသည်— မည်သည့်အချိန်တွင်မဆို client ကို ပြောင်းနိုင်ပြီး ပျက်ရှသူများနှင့် အကြောင်းအရာကို ပိုင်ဆိုင်နေဆဲဖြစ်သည်။",
	"nostr/index::nostr_hero_subtitle":
		"Nostr သည် အွန်လိုင်း ဆက်သွယ်ရန် ဗဟိုချုပ်ကိုင်မှုမရှိသော ပရိုတိုကောအသစ်တစ်ခုဖြစ်သည်— မည်သည့်ကုမ္ပဏီတစ်ခုတည်းကမျှ မထိန်းချုပ်နိုင်၊ Bitcoin zap များ ပါဝင်ပြီး၊ ပျက်ရှသူများ မဆုံးရှုံးဘဲ application များကြား လွှဲပြောင်းနိုင်သည်။",
	"nostr/index::nostr_hero_title": "Nostr ဆိုသည်မှာ?",
	"nostr/index::nostr_intro_c1":
		"Nostr သည် အီးမေးလ်နှင့် တူသည်— ပရိုတိုကောကို မည်သူမျှ မပိုင်ဆိုင်၊ မည်သူမဆို application တည်ဆောက်နိုင်ပြီး၊ သင်အကြိုက်ဆုံး application ကို ရွေးနိုင်သည်။ Twitter သို့မဟုတ် Facebook နှင့်မတူ ဗဟိုကုမ္ပဏီက ဆင်ဆာဖြတ်နိုင်၊ deplatform လုပ်နိုင် သို့မဟုတ် ရောက်ရှိမှုကို လျှော့ချနိုင်ခြင်း မရှိပါ။",
	"nostr/index::nostr_intro_c2":
		"အောက်တွင် Nostr သည် အဘယ်ကြောင့် အရေးကြီးသည်ကို ရိုးရှင်းသော ဗားရှင်း— ထို့နောက် ယနေ့ စတင်ရန် လိုအပ်သော အခမဲ့ Nostr client အားလုံး ရှိပါသည်။",
	"nostr/index::nostr_iris_f1":
		"အလွန်လွယ်— ထည့်သွင်းရန် မလို",
	"nostr/index::nostr_iris_f2":
		"စမ်းသပ် အကောင့်ဖြင့် Nostr ကို စမ်းသုံးရန် လွယ်ကူသောနည်း",
	"nostr/index::nostr_iris_f3": "၁၀၀% အခမဲ့",
	"nostr/index::nostr_learn_more_label": "ပိုနက်နက်ရှိုင်းရှိုင်း လေ့လာပါ",
	"nostr/index::nostr_learn_more_title":
		"nostr.how တွင် Nostr အကြောင်း ပိုမို လေ့လာပါ",
	"nostr/index::nostr_primal_f1": "ပထမဆုံး အကြံပြုသော client",
	"nostr/index::nostr_primal_f2": "Bitcoin zap ပိုက်ဆံအိတ် ပါဝင်",
	"nostr/index::nostr_primal_f3": "၁၀၀% အခမဲ့",
	"nostr/index::nostr_s1": "ပရိုတိုကောတစ်ခု၊ ပလက်ဖောင်းတစ်ခု မဟုတ်",
	"nostr/index::nostr_s1_c1":
		"Nostr သည် ဆင်ဆာဖြတ်ခြင်း၊ deplatform လုပ်ခြင်း သို့မဟုတ် ရောက်ရှိမှုကို လျှော့ချခြင်းကို မကြောက်ဘဲ အွန်လိုင်းတွင် ဆက်သွယ်နိုင်စေသော ပရိုတိုကောအသစ်တစ်ခုဖြစ်သည်။",
	"nostr/index::nostr_s1_c2":
		"Twitter နှင့် Facebook ကဲ့သို့သော ပလက်ဖောင်းများကို ကုမ္ပဏီတစ်ခုတည်းက ထိန်းချုပ်ထားသော်လည်း Nostr ပရိုတိုကောကို မည်သူမျှ မထိန်းချုပ်နိုင်ပါ။",
	"nostr/index::nostr_s2": "လွှဲပြောင်းရန် လွတ်လပ်ခွင့်",
	"nostr/index::nostr_s2_c1":
		"Nostr သည် အီးမေးလ်နှင့် တူသည်။ မည်သူမျှ အီးမေးလ် ပရိုတိုကောကို မထိန်းချုပ်နိုင်၊ မည်သူမဆို client (Gmail၊ Hotmail စသည်) ကို ၎င်းအပေါ် တည်ဆောက်နိုင်သည်။",
	"nostr/index::nostr_s2_c2":
		"မည်သူမျှ Nostr ပရိုတိုကောကို မထိန်းချုပ်နိုင်၊ မည်သူမဆို client (Damus၊ Amethyst စသည်) ကို ၎င်းအပေါ် တည်ဆောက်နိုင်သည်။",
	"nostr/index::nostr_s2_c3":
		"client တစ်ခု၏ အလုပ်လုပ်ပုံ မကြိုက်ပါက သင့် Nostr အကောင့်ကို ပျက်ရှသူ သို့မဟုတ် အကြောင်းအရာ မဆုံးရှုံးဘဲ အခြား client သို့ ချောမွေ့စွာ ပြောင်းနိုင်သည်။",
	"nostr/index::nostr_s3": "Bitcoin ပါဝင်",
	"nostr/index::nostr_s3_c1":
		"Bitcoin ကို Nostr ပရိုတိုကောထဲတွင် သဘာဝအတိုင်း ပေါင်းစပ်ထားသည်။ သင်ကြိုက်သော အကြောင်းအရာတွေ့လျှင် ကျေးဇူးတင်စကားအဖြစ် တစ်စုံတစ်ဦးကို Bitcoin zap လွယ်ကူစွာ ပို့နိုင်သည်။",
	"nostr/index::nostr_s3_c2":
		"Twitter နှင့် Facebook ကဲ့သို့ ဗဟိုပလက်ဖောင်းများတွင် ဗဟိုကုမ္ပဏီက သင့်အကြောင်းအရာမှ ငွေရရှိသည်။ သို့သော် Nostr ကဲ့သို့ ပွင့်လင်းသော ပရိုတိုကောတွင် သင်က သင့်အကြောင်းအရာမှ ငွေရရှိသည်။",
	"nostr/index::sources_damus": "Damus — iPhone အတွက် Nostr client",
	"nostr/index::sources_iris":
		"Iris — ဘရောက်ဇာအခြေပြု Nostr client",
	"nostr/index::sources_nostr_how": "nostr.how — Nostr ဆိုသည်မှာ?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — open source သတ်မှတ်ချက်",
	"nostr/index::sources_primal":
		"Primal — Bitcoin zap ပိုက်ဆံအိတ် ပါဝင်သော Nostr client",
	"nostr/index::what_is_nostr": "Nostr ဆိုသည်မှာ?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"ဤ Bitcoin စတစ်ကာဖိုင်များဖြင့် ကိုယ်ပိုင် Bitcoin စတစ်ကာများကို ပုံနှိပ်ပါ။",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"တောင်းဆိုမှု လက်ခံရရှိပါပြီ 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"အစုလိုက် မှာယူပါ",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Nostr တွင် မျှဝေပါ",
	"sticker-success::sticker_success_btn_what_is_nostr": "Nostr ဆိုသည်မှာ?",
	"sticker-success::sticker_success_bulk_header":
		"စတစ်ကာ ပိုလိုချင်ပါသလား?",
	"sticker-success::sticker_success_hero_title":
		"သင့်စတစ်ကာများ လမ်းခရီးပေါ်တွင် 🎉",
	"sticker-success::sticker_success_share_header":
		"စတစ်ကာများ ကပ်ထားသောနေရာကို မျှဝေပါ",
	"sticker-success::sticker_success_tips_header":
		"စတစ်ကာ ကပ်ရန် ကောင်းသော နေရာများ",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"ထိုကိစ္စတွင် ကိုယ်တိုင် ပုံနှိပ်ပြီး ကပ်လည်း လုပ်ပါ",
	"stickers::stickers_instructions_1":
		"စာတိုက်လိပ်စာ ထည့်ပါ။ အခမဲ့ Bitcoin စတစ်ကာအထုပ်ကို စာတိုက်မှ ပို့ဆောင်ပေးပါမည်။ စတစ်ကာများကို အဖြူရောင် စာအိတ်အတွင်း ပို့ပေးပါမည်။",
	"stickers::stickers_btn_choose_pack": "ဤအထုပ်ကို ရွေးပါ",
	"stickers::stickers_bulk_c1":
		"စတစ်ကာ နည်းနည်းထက်ပိုလိုချင်ပါသလား?",
	"stickers::stickers_bulk_c2":
		"ကျွန်ုပ်တို့ သုံးသော တူညီသော ပုံနှိပ်စက်ဆရာထံမှ အစုလိုက် မှာယူပါ",
	"stickers::stickers_bulk_c3":
		"— ပိုဝယ်လျှင် တစ်ခုလျှင် ပိုသက်သာသည်။",
	"stickers::stickers_bulk_cta": "အစုလိုက် စတစ်ကာ ဈေးဝယ်ပါ",
	"stickers::stickers_bulk_header":
		"အစုလိုက် စတစ်ကာ မှာယူပါ",
	"stickers::stickers_hero_subtitle":
		"အခမဲ့ Bitcoin စတစ်ကာအထုပ် မှာယူပြီး လူပိုများက Bitcoin လေ့လာနိုင်ရန် အများပြည်သူ နေရာများတွင် ကပ်ပါ။",
	"stickers::stickers_hero_title": "အခမဲ့ Bitcoin စတစ်ကာများ",
	"stickers::stickers_intro_c1":
		"ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်မှာ Bitcoin စတစ်ကာများကို အများပြည်သူနေရာများတွင် ကပ်ခြင်းဖြင့် လူပိုများကို orange-pill ပေးနိုင်ရန် ကူညီရန်ဖြစ်သည်။ ကျွန်ုပ်တို့၏ စတစ်ကာအားလုံးတွင် QR ကုဒ်များ ပါဝင်ပြီး",
	"stickers::stickers_intro_c3": "ငွေကြေးဖောင်းပွမှု",
	"stickers::stickers_intro_c4":
		"အကြောင်း ပညာရေးဆိုင်ရာ စာမျက်နှာများသို့ ချိတ်ဆက်သည်။ အောက်ပါ စတစ်ကာအထုပ်များမှ ရွေးပြီး မည်သို့ ရရှိချင်သည်ကို ရွေးပါ— အမေရိကန် သို့မဟုတ် ကနေဒါ မည်သူမဆို အခမဲ့ ပို့ဆောင်ပေးပါမည် သို့မဟုတ် ကမ္ဘာ့မည်သည့်နေရာတွင်မဆို ကိုယ်တိုင် ပုံနှိပ်နိုင်ပါသည်။",
	"stickers::stickers_mail_header":
		"အခမဲ့ စတစ်ကာများ ပို့ပေးပါမည်",
	"stickers::stickers_next_print_flyers": "ဆက်လက် ပျံ့နှံ့ပါ",
	"stickers::stickers_next_print_flyers_desc":
		"အများပြည်သူ နေရာများတွင် ကပ်ရန် အခမဲ့ Bitcoin လက်ကမ်းစာစောင်များ ပုံနှိပ်ပါ",
	"stickers::stickers_option_bulk":
		"\ud83d\udce6 ကမ္ဘာ့အနှံ့ — အစုလိုက် မှာယူပါ",
	"stickers::stickers_option_canada":
		"\ud83c\udde8\ud83c\udde6 ကနေဒါ — စာတိုက်မှ အခမဲ့",
	"stickers::stickers_option_print":
		"\ud83c\udf0d ကမ္ဘာ့အနှံ့ — ကိုယ်တိုင် ပုံနှိပ်ပါ",
	"stickers::stickers_option_usa":
		"\ud83c\uddfa\ud83c\uddf8 အမေရိကန် — စာတိုက်မှ အခမဲ့",
	"stickers::stickers_print_c1":
		"သင်နေထိုင်သော နေရာ မည်သို့ပင်ဖြစ်စေ ကိုယ်ပိုင် စတစ်ကာများ ပုံနှိပ်ခြင်းဖြင့် ပါဝင်နိုင်သည်။ စတစ်ကာဖိုင်များနှင့် ပုံနှိပ်ညွှန်ကြားချက်များကို ဒေါင်းလုဒ်ဆွဲရန် အောက်ပါ သင့်ဘာသာစကားကို နှိပ်ပါ။",
	"stickers::stickers_print_c2":
		"စတစ်ကာတိုင်း ဘာသာစကားတိုင်းတွင် မရရှိပါ။",
	"stickers::stickers_print_header":
		"ကိုယ်ပိုင် စတစ်ကာဖိုင်များ ပုံနှိပ်ပါ",
	"stickers::stickers_request_c1":
		"သင့်ဒေသခံဘာသာစကားဖြင့် စတစ်ကာဖိုင်များ တောင်းဆိုရန် အောက်ပါ ပုံစံကို ဖြည့်ပါ။ အသင့်ဖြစ်လျှင် အကြောင်းကြားပါမည်။",
	"stickers::stickers_request_header": "သင့်ဘာသာစကား မမြင်ပါသလား?",
	"stickers::stickers_share_c2": "Nostr တွင် ကျွန်ုပ်တို့ကို follow ရန် ရှာပါ",
	"stickers::stickers_share_c3": "မည်သည့် Nostr client တွင်မဆို။",
	"stickers::stickers_signs_pack_description":
		"Bitcoin သတင်းစကားများပါ သတိပေးချက်၊ အန္တရာယ်နှင့် သတိပြုပါ ဆိုင်းဘုတ်များ— အာရုံစိုက်စေပြီး လူများ ရပ်ပြီး ဖတ်စေရန် ဒီဇိုင်းပြုထားသည်။",
	"stickers::stickers_step_1_description":
		"အထုပ်တိုင်းတွင် Bitcoin အကြောင်း လူများကို သင်ပေးသော QR ကုဒ်များပါသော Bitcoin စတစ်ကာများ ကွဲပြားသည့် စုစည်းမှု ပါရှိသည်။",
	"stickers::stickers_step_1_eyebrow": "အဆင့် ၁",
	"stickers::stickers_step_1_header": "သင့်စတစ်ကာအထုပ်ကို ရွေးပါ",
	"stickers::stickers_step_2_description":
		"အမေရိကန်နှင့် ကနေဒါ လိပ်စာများသို့ အခမဲ့ ပို့ဆောင်ပေးပါမည်။ ကမ္ဘာ့မည်သည့်နေရာမှမဆို ကိုယ်တိုင် ပုံနှိပ်နိုင် သို့မဟုတ် အစုလိုက် မှာယူနိုင်သည်။",
	"stickers::stickers_step_2_eyebrow": "အဆင့် ၂",
	"stickers::stickers_step_2_header":
		"စတစ်ကာများ မည်သို့ ရရှိချင်ပါသနည်း?",
	"stickers::stickers_text_pack_description":
		"အများပြည်သူနေရာများတွင် စိတ်ဝင်စားမှုဖြစ်စေရန် ဒီဇိုင်းပြုထားသော Bitcoin slogans နှင့် one-liners များ ရောစုထား။",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — သင့်ပိုက်ဆံအိတ်ကို ရွေးပါ",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Metal Bitcoin Seed Storage Reviews",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — self-custody Bitcoin ပိုက်ဆံအိတ်",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin hardware ပိုက်ဆံအိတ်",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 hardware ပိုက်ဆံအိတ်",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q hardware ပိုက်ဆံအိတ်",
	"wallets::sources_passport":
		"Foundation Devices — Passport hardware ပိုက်ဆံအိတ်",
	"wallets::sources_seedsigner":
		"SeedSigner — open source DIY Bitcoin လက်မှတ်ထိုးကိရိယာ",
	"wallets::wallets_grid_heading": "လူကြိုက်များသော Bitcoin ပိုက်ဆံအိတ်များ",
	"wallets::wallets_header_subtitle":
		"ပိုက်ဆံအိတ် ရွေးချယ်ခြင်း၊ သော့ချက်များကို ကာကွယ်ခြင်းနှင့် သင့် Bitcoin အပေါ် အပြည့်အဝ ထိန်းချုပ်ခြင်းအတွက် အဆင့်ဆင့် လမ်းညွှန်။",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, composite)) {
			e.targetTranslation = T[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (my): filled ${filled}, already-done ${skipped}`,
	);
}

main();
