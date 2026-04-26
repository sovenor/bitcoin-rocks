#!/usr/bin/env node
/**
 * Replace Bengali-script values in i18n/my/lightning_my.json with Burmese.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "my", "lightning_my.json");
const BENGALI_RE = /[ঀ-৿]/;

// Source: i18n/en/lightning_en.json
const REPLACEMENTS = {
	bitcoin_lightning_wallet_guide: "Bitcoin Lightning ပိုက်ဆံအိတ် လမ်းညွှန်",
	lightning_description:
		"Lightning ပိုက်ဆံအိတ်များက သင့် ကိုယ်ပိုင် အချုပ်အခြာအာဏာကို ထိန်းသိမ်းထားရင်း Bitcoin ကို မြန်မြန်ဆန်ဆန်နှင့် သက်သာစွာ ပို့နိုင်စေသည်။",
	lightning_header: "LIGHTNING ပိုက်ဆံအိတ် လမ်းညွှန်",
	lightning_s1_c1: "Lightning က Bitcoin ငွေပေးချေမှုများကို မြန်မြန်ဆန်ဆန်နှင့် သက်သာစွာ ပို့နိုင်စေသည်။",
	lightning_s1_c2:
		"Lightning ကို သုံးခြင်းတွင် အလျော့အပေး ရှိသည်ကို သိရန် အရေးကြီးသည်။ ပိုမြန်ပြီး ပိုသက်သာသော Bitcoin ငွေပေးချေမှုများ အစား လုံခြုံရေး အချို့ကို မကြာခဏ စွန့်လွှတ်ရသည်။",
	lightning_s1_c3:
		"ယေဘုယျအားဖြင့် Lightning ကို bitcoin ပမာဏ အနည်းငယ်နှင့်သာ သုံးသင့်သည်။ bitcoin ပမာဏကြီးများကို hardware ပိုက်ဆံအိတ်တွင်သာ သိမ်းဆည်းသင့်သည်။",
	lightning_s1_c5:
		"Lightning ပိုက်ဆံအိတ် အားလုံးသည် တူညီသည် မဟုတ်ပါ။ ဤရိုးရှင်းသော မေးခွန်းတစ်ခု မေးခြင်းဖြင့် မည်သည့်ပိုက်ဆံအိတ်တွင် သင့်အတွက် မှန်ကန်သော အလျော့အပေးဟန်ချက် ရှိသည်ကို သိနိုင်သည်။",
	lightning_question_1: "ကျွန်ုပ်အတွက် မည်သည့် အလျော့အပေးဟန်ချက်က မှန်ကန်သနည်း?",
	lightning_s2_c1:
		"Bitcoin ၏ ဆန်းသစ်တီထွင်မှုတစ်ခုမှာ ဘဏ်ကဲ့သို့ ထိန်းသိမ်းသူအပေါ် မမှီခိုဘဲ သိမ်းဆည်းနိုင်ခြင်းဖြစ်သည်။ ကိုယ်ပိုင်ထိန်းသိမ်းသော ပိုက်ဆံအိတ်များက Bitcoin ၏ စွမ်းအား အပြည့်အဝကို ဖွင့်ပေးသည်။",
	lightning_s2_c2:
		"ကိုယ်ပိုင်ထိန်းသိမ်းသော ပိုက်ဆံအိတ်တွင် သင့်ငွေကို သုံးစွဲ သို့မဟုတ် လွှဲပြောင်းနိုင်သူမှာ သင်တစ်ဦးတည်းသာ ဖြစ်သည်။ ကိုယ်ပိုင်ထိန်းသိမ်းသော ပိုက်ဆံအိတ်ကို သုံးနေချိန်တွင် မည်သူမျှ သင့်ကို ရပ်တန့်စေ၊ စိစစ်ဖြတ်တောက်၊ သို့မဟုတ် ခိုးယူနိုင်မည်မဟုတ်ပါ။ ဤပိုက်ဆံအိတ်များကို non-custodial ပိုက်ဆံအိတ်များဟုလည်း ခေါ်သည်။",
	lightning_s2_c3: "Lightning ကို သုံးရန် အချုပ်အခြာအာဏာ အပြည့်ဆုံးနည်းမှာ ကိုယ်ပိုင် node ကို တည်ဆောက်အသုံးပြုခြင်းဖြစ်သည်။",
	lightning_s2_c4:
		"ဤလမ်းညွှန်သည် ကိုယ်ပိုင် node မလိုသော ရိုးရှင်းသော Lightning ပိုက်ဆံအိတ်များအပေါ်တွင် အာရုံစိုက်ထားသည်။",
	lightning_s2_c5:
		"non-custodial Lightning ပိုက်ဆံအိတ်ကို သုံးနေပင်လျှင် ပိုက်ဆံအိတ် ဖန်တီးသူက အန္တရာယ်ရှိသော app update တင်ပြီး သင့်ရန်ပုံငွေ ခိုးယူမည်မဟုတ်ဟု ယုံကြည်နေရဆဲဖြစ်ကြောင်း သိရန် အရေးကြီးသည်။",
	lightning_s3_c1: "Custodial ပိုက်ဆံအိတ်များသည် သင့်ငွေကို သင် မထိန်းချုပ်ရသော ပိုက်ဆံအိတ်များဖြစ်သည်။",
	lightning_s3_c2:
		"ဤပိုက်ဆံအိတ်များသည် ဘဏ်စနစ်နှင့် ပိုဆင်တူပြီး သင့်ငွေသို့ ဝင်ရောက်ခွင့် ရရှိရန် တတိယပါတီကို ယုံကြည်ရသည်။ သင့် Bitcoin ကို exchange တွင် ထားပါက custodial ပိုက်ဆံအိတ်ကို သုံးနေခြင်းဖြစ်သည်။",
	lightning_s3_c3:
		"Custodial ပိုက်ဆံအိတ်များသည် အဆင်ပြေသည်ဟု ထင်ရနိုင်သော်လည်း ထိန်းသိမ်းသူတွင် အသုံးပြုသူ၏ ရန်ပုံငွေ အားလုံးကို မည်သည့်အချိန်တွင်မဆို ခိုးယူနိုင်သော နည်းပညာစွမ်းရည် ရှိသည်။",
	lightning_s3_c4:
		"အချို့ လူများသည် အသုံးပြုရ လွယ်ကူသောကြောင့် bitcoin ပမာဏ အနည်းငယ်အတွက် custodial Lightning ပိုက်ဆံအိတ်များကို ပိုနှစ်သက်ကြသည်။ မှတ်ထားပါ— သင့်သော့ မဟုတ်လျှင် သင့်ဒင်္ဂါး မဟုတ်!",
	lightning_features: "အင်္ဂါရပ်များစွာ",
	lightning_mobile_app: "မိုဘိုင်း app",
	lightning_free: "၁၀၀% အခမဲ့",
	lightning_merchants: "ကုန်သည်များအတွက် အလွန်ကောင်း",
	lightning_custodial: "လုံးဝ custodial ပိုက်ဆံအိတ်",
	lightning_cta_hardware: "ကျွန်ုပ်တို့၏ Bitcoin Hardware ပိုက်ဆံအိတ် လမ်းညွှန်ကို ရှာနေပါသလား?",
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
	console.log(`lightning_my.json: replaced ${n} keys, residual Bengali codepoints: ${remaining}`);
	if (remaining > 0) process.exit(1);
}

main();
