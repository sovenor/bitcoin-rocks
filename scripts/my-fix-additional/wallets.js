#!/usr/bin/env node
/**
 * Replace Bengali-script values in i18n/my/wallets_my.json with Burmese.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "my", "wallets_my.json");
const BENGALI_RE = /[ঀ-৿]/;

// Source: i18n/en/wallets_en.json
const REPLACEMENTS = {
	wallets_s4_c1:
		"Cold ပိုက်ဆံအိတ်များသည် သင့် Bitcoin ၏ သော့ချက်များကို အင်တာနက်နှင့် ဘယ်တော့မှ မထိတွေ့စေသော နည်းလမ်းဖြင့် သိမ်းဆည်းပါသည်။",
	wallets_s4_c2:
		"၎င်းသည် သူခိုးတစ်ဦးက သင့် Bitcoin ခိုးယူရန် အသုံးပြုနိုင်သော တိုက်ခိုက်မှုနည်းလမ်းများကို သိသိသာသာ ကန့်သတ်ပေးပြီး မကြာခဏ မလွှဲပြောင်းရန်မလိုသော Bitcoin ပမာဏကြီးများအတွက် အသင့်တော်ဆုံးဖြစ်သည်။",
	wallets_s4_c3:
		"Cold ပိုက်ဆံအိတ်ကို cold storage ဟုလည်း လူသိများသော ရေရှည် စုဆောင်းငွေ အကောင့်တစ်ခုအဖြစ် မှတ်ယူနိုင်သည်။",
	wallets_s5_c1:
		"Hot ပိုက်ဆံအိတ်များသည် သင့် Bitcoin ၏ သော့ချက်များကို သင့်ဖုန်းကဲ့သို့ အင်တာနက်နှင့် ချိတ်ဆက်ထားသော စက်တစ်ခုပေါ်တွင် သိမ်းဆည်းပါသည်။",
	wallets_s5_c2:
		"Hot ပိုက်ဆံအိတ်များသည် ယေဘုယျအားဖြင့် ဘေးကင်းသည်ဟု ယူဆရသော်လည်း cold ပိုက်ဆံအိတ်များထက် လုံခြုံရေး အားနည်းချက် ပိုများနိုင်သည်။",
	wallets_s5_c3:
		"Hot ပိုက်ဆံအိတ်ကို သင့်ရုပ်ပိုင်းဆိုင်ရာ ပိုက်ဆံအိတ်ကဲ့သို့ မှတ်ယူနိုင်သည်။ သင့်စုဆောင်းငွေ တစ်ခုလုံးကို ပိုက်ဆံအိတ်ထဲ မထည့်သော်လည်း သုံးစရာ ငွေအနည်းငယ်ကို ထည့်ထားနိုင်သည်။",
	wallets_s5_c4:
		"Hot ပိုက်ဆံအိတ်များက cold storage မှ စုဆောင်းငွေ တစ်ခုလုံး မထုတ်ဘဲ Bitcoin သုံးစွဲခြင်းကို ပိုလွယ်ကူစေသည်။",
	wallets_s6_c1:
		"သင့် Bitcoin ပိုက်ဆံအိတ်ကို စတင်တပ်ဆင်သောအခါ သင့်စက်က recovery phrase တစ်ခု ဖန်တီးပေးပါမည်။ ဤ recovery phrase (seed phrase ဟုလည်း ခေါ်သည်) တွင် စကားလုံး ၁၂ လုံး သို့မဟုတ် ၂၄ လုံး ပါဝင်သည်။",
	wallets_s6_c2:
		"သင့်ပိုက်ဆံအိတ်ကို ဝင်ရောက်ခွင့် ဆုံးရှုံးခဲ့လျှင် သို့မဟုတ် သင့်စက် အလုပ်မလုပ်တော့လျှင် ဤ recovery phrase ကို ပိုက်ဆံအိတ် အသစ်တစ်ခုထဲ ထည့်ပြီး သင့် Bitcoin ကို ပြန်လည် ဝင်ရောက်နိုင်ပါသည်။",
	wallets_s6_c3:
		"ပိုက်ဆံအိတ် အများစုတွင် recovery phrase ရေးချရန် စာရွက်တစ်ရွက် ပါဝင်သော်လည်း လူများစွာက ဤစကားစုကို သံပြားပေါ်တွင် backup လုပ်ရန် ပိုနှစ်သက်ကြသည်။ ၎င်းသည် မီး သို့မဟုတ် ရေကြီးခြင်းကဲ့သို့ သဘာဝဘေးအန္တရာယ်ဖြစ်ပွားသောအခါ recovery phrase ပျောက်ဆုံးရန် အလားအလာကို သိသာစွာ လျှော့ချပေးသည်။",
	wallets_s6_c4:
		"Jameson Lopp က သင့်အတွက် မှန်ကန်သော တစ်ခုကို ရွေးချယ်နိုင်ရန် steel backup kit ၇၀ ခုကို စမ်းသပ်ထားသည်။",
	wallets_s6_c5: "Jameson ၏ metal Bitcoin backup လမ်းညွှန်ကို ဤနေရာတွင် ကြည့်ပါ။",
	wallets_s6_c6: "သို့မဟုတ် Bitcoin ပိုက်ဆံအိတ် ရွေးချယ်စရာများကို ဆက်လက် လေ့လာရန် scroll ဆက်လုပ်ပါ။",
	wallets_cta_lightning: "ကျွန်ုပ်တို့၏ Lightning ပိုက်ဆံအိတ် လမ်းညွှန်ကို ရှာနေပါသလား?",
	wallets_starter_wallet: "အကောင်းဆုံး စတင်သုံးနိုင်သော ပိုက်ဆံအိတ်",
	wallets_mobile_app: "မိုဘိုင်း app",
	wallets_2fa_support: "2FA အထောက်အပံ့",
	wallets_air_gap_mode: "Air-gap mode",
	wallets_air_gap_camera: "Air-gap mode + ကင်မရာ",
	wallets_bitcoin_only: "Bitcoin သာ",
	wallets_security_features: "လုံခြုံရေး အင်္ဂါရပ်များစွာ",
	wallets_free: "၁၀၀% အခမဲ့",
	wallets_coldcard_mk5_costs: "စျေးနှုန်း $189",
	wallets_coldcard_q_costs: "စျေးနှုန်း $289",
	wallets_blockstream_jade_costs: "စျေးနှုန်း $79",
	wallets_foundation_passport_costs: "စျေးနှုန်း $199",
	wallets_seedsigner_costs: "အပိုင်း ကုန်ကျစရိတ် $50",
	wallets_very_affordable: "အလွန် တတ်နိုင်သော",
	wallets_pair_with_phone: "သင့်ဖုန်းနှင့် တွဲပါ",
	wallets_battery: "ပြန်လည်အားသွင်းနိုင်သော ဘက်ထရီ",
	wallets_build_your_own: "ကိုယ်တိုင် တည်ဆောက်ပါ",
	wallets_qwerty_keyboard: "QWERTY ကီးဘုတ် အပြည့်",
	wallets_qr_scanner: "QR ကုဒ် scanner",
};

function main() {
	const obj = JSON.parse(fs.readFileSync(FILE, "utf8"));
	let n = 0;
	for (const [k, v] of Object.entries(obj)) {
		if (k === "@metadata") continue;
		if (typeof v !== "string") continue;
		if (!BENGALI_RE.test(v)) continue;
		if (!(k in REPLACEMENTS)) {
			console.error(`Missing replacement for key: ${k}\n  current: ${v}`);
			process.exit(1);
		}
		obj[k] = REPLACEMENTS[k];
		n++;
	}
	if (!obj["@metadata"]) obj["@metadata"] = {};
	obj["@metadata"]["last-updated"] = "2026-04-26";
	fs.writeFileSync(FILE, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	const after = fs.readFileSync(FILE, "utf8");
	const remaining = (after.match(/[ঀ-৿]/g) || []).length;
	console.log(`wallets_my.json: replaced ${n} keys, residual Bengali codepoints: ${remaining}`);
	if (remaining > 0) process.exit(1);
}

main();
