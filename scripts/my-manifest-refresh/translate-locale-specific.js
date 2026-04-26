#!/usr/bin/env node
/**
 * Burmese (my) manifest refresh — locale-specific gaps.
 * Covers: 62 missing entries in `index` (home_card_label_*, home nav, etc.)
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

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "စုဆောင်းခြင်း",
	"index::home_card_label_art_1": "နှိုင်းယှဉ်ကြည့်ကြရအောင်",
	"index::home_card_label_art_2": "သတင်းပျံ့ပါ",
	"index::home_card_label_art_3": "လမ်းမအနုပညာ",
	"index::home_card_label_bank_runs": "အပြည့်အဝ ရံပုံငွေသိမ်းဆည်းမှု စနစ်",
	"index::home_card_label_bonds": "နှိုင်းယှဉ်ကြည့်ကြရအောင်",
	"index::home_card_label_business_1": "ဘာကွာသနည်း?",
	"index::home_card_label_business_2": "Bitcoin ငွေပေးချေမှု လက်ခံပါ",
	"index::home_card_label_cash": "နှိုင်းယှဉ်ကြည့်ကြရအောင်",
	"index::home_card_label_cbdc": "ပွင့်လင်း သို့မဟုတ် ပိတ်ထား?",
	"index::home_card_label_coding_1": "အပြန်အလှန် သင်ခန်းစာများ",
	"index::home_card_label_coding_2": "Hardware တည်ဆောက်ပါ",
	"index::home_card_label_coding_3": "ပရိုဂရမ်မင်း ပဟေဠိများ",
	"index::home_card_label_crowdfunding_1": "EndSARS ဆန္ဒပြပွဲ",
	"index::home_card_label_crowdfunding_2": "မတားနိုင်သော ငွေ",
	"index::home_card_label_crowdfunding_3": "သင့်စီမံကိန်းကို ထောက်ပံ့ပါ",
	"index::home_card_label_crypto": "ဘာကွာသနည်း?",
	"index::home_card_label_energy_1": "ဓာတ်အားကွန်ရက် တည်ငြိမ်စေခြင်း",
	"index::home_card_label_energy_4": "လိုအပ်ချက် တုံ့ပြန်မှု",
	"index::home_card_label_energy_5": "ကျေးလက်လျှပ်စစ်ဓာတ်အားပေးခြင်း",
	"index::home_card_label_energy_6": "ပြန်ပြည့်မြဲ မက်လုံး",
	"index::home_card_label_environment_1": "မီသိန်း လျှော့ချခြင်း",
	"index::home_card_label_environment_2": "အမျိုးသားဥယျာဉ်များ ကယ်တင်ခြင်း",
	"index::home_card_label_environment_3": "အစိမ်းရောင်ဆုံး စက်မှု",
	"index::home_card_label_environment_4": "အလောင်းမီး လျှော့ချခြင်း",
	"index::home_card_label_equality_1": "မျှော်လင့်ချက် နှင့် အခွင့်အလမ်း",
	"index::home_card_label_equality_2": "ပြောင်းလဲစေသူ",
	"index::home_card_label_food_1": "အစားအသောက် ဈေးနှုန်း",
	"index::home_card_label_food_2": "လယ်ယာ နှင့် မြေ",
	"index::home_card_label_freedom_1": "အာဏာရှင် အုပ်ချုပ်ရေးများ",
	"index::home_card_label_freedom_2": "ထူးခြားသော ကိရိယာ",
	"index::home_card_label_get_started_1": "အခြေခံ မိတ်ဆက်",
	"index::home_card_label_get_started_2": "သင့်ပထမဆုံး ပိုက်ဆံအိတ်",
	"index::home_card_label_get_started_3": "Bitcoin ဝယ်ပါ",
	"index::home_card_label_gold": "မည်သည်က ပိုကောင်းသနည်း?",
	"index::home_card_label_housing_1": "တတ်နိုင်သော အိမ်ရာ",
	"index::home_card_label_human_rights_1":
		"လူ့အခွင့်အရေး ထိန်းသိမ်းခြင်း",
	"index::home_card_label_human_rights_2": "အောက်ခြေမှ လက်ခံအသုံးပြုမှု",
	"index::home_card_label_human_rights_3": "ကမ္ဘာ့ ထိရောက်မှု",
	"index::home_card_label_inflation": "Bitcoin သည် ပိုကောင်းသော ငွေဖြစ်သည်",
	"index::home_card_label_networks_1": "တိုက်ရိုက် ကွန်ရက် မြင်ကွင်း",
	"index::home_card_label_networks_2": "နှိုင်းယှဉ်ကြည့်ကြရအောင်",
	"index::home_card_label_payments_1": "ဘာကွာသနည်း?",
	"index::home_card_label_payments_2": "မြန်ဆန်ပြီး သက်သာသော ငွေပေးချေမှု",
	"index::home_card_label_payments_3": "ငွေလွှဲခြင်းများ",
	"index::home_card_label_payments_4": "ငွေပေးချေမှု လက်ခံပါ",
	"index::home_card_label_politics_1": "နိုင်ငံရေး ဆန့်ကျင်ဘက်",
	"index::home_card_label_politics_2": "လုပ်ဆောင်ပါ",
	"index::home_card_label_property_rights_1": "နှိုင်းယှဉ်ကြည့်ကြရအောင်",
	"index::home_card_label_property_rights_2": "စစ်မှန်သော ပိုင်ဆိုင်မှု",
	"index::home_card_label_salary": "သင့်လစာကို ကာကွယ်ပါ",
	"index::home_card_label_self_custody_1": "Bitcoin ပိုက်ဆံအိတ် လမ်းညွှန်",
	"index::home_card_label_self_custody_2": "အရေးကြီးဆုံး အဆင့်",
	"index::home_card_label_self_custody_3": "ကိုယ်ပိုင်အုပ်ချုပ်သော ငွေ",
	"index::home_card_label_war_1": "မဆုံးနိုင်သော စစ်များကို ရပ်ပါ",
	"index::home_card_label_war_2": "စစ်မှုထမ်းဟောင်းများကို ကူညီခြင်း",
	"index::home_card_label_war_3": "စစ်ကာလ ဒုက္ခသည်များ",
	"index::home_h1":
		"Bitcoin သည် ပိုကောင်းသော ကမ္ဘာကို တည်ဆောက်နေသော ပိုကောင်းသော ငွေဖြစ်သည်။",
	"index::home_nav_about": "အကြောင်း",
	"index::home_nav_get_involved": "ပါဝင်ပါ",
	"index::home_nav_learn": "လေ့လာပါ",
	"index::home_source_prefix": "အရင်းအမြစ်—",
});

/* ─────────────── about (untranslated brand-identical) ─────────────── */
Object.assign(T, {
	"about::about_open_source_header": "Open Source",
});

/* ─────────────── bitcoin-vs-crypto (untranslated) ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::bitcoin_point_7": "Antifragile",
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
		`translate-locale-specific (my): filled ${filled}, already-done ${skipped}`,
	);
}

main();
