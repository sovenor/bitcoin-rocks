#!/usr/bin/env node
/**
 * Replace Bengali-script values in i18n/my/get-involved_my.json with Burmese.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "my", "get-involved_my.json");
const BENGALI_RE = /[ঀ-৿]/;

// Source: i18n/en/get-involved_en.json
const REPLACEMENTS = {
	get_involved_intro_1: "ကျွန်ုပ်တို့၏ ကမ္ဘာ၏ လက်ရှိ အခြေအနေတွင် နေထိုင်ရခြင်းသည် စိတ်ဓာတ်ကျစရာ ဖြစ်နိုင်သည်။",
	get_involved_intro_2:
		"ကျွန်ုပ်တို့၏ ငွေသည် ပျက်စီးနေသည်။ ထို့ကြောင့် လူ့အဖွဲ့အစည်း၏ အခြေခံ အစိတ်အပိုင်းများလည်း ပျက်စီးနေသည်။",
	get_involved_intro_3:
		"သင်သည် Bitcoin ထဲ ဝင်ရောက်ပြီးသား ဖြစ်ပါက Bitcoin ယူဆောင်လာနိုင်သော မျှော်လင့်ချက် ခံစားမှုကို သိပါသည်။ ပိုကောင်းသော ငွေက ဖြစ်နိုင်စေသော ပိုထွန်းတောက်သော အနာဂတ်အတွက် မျှော်လင့်ချက်။",
	get_involved_intro_4:
		"သို့သော် သင့်ပတ်ဝန်းကျင်ရှိ လူများစွာသည် Bitcoin အကြောင်း မသိကြပါ။ သူတို့သည် သင်နှင့် တူညီသော ပျက်စီးနေသော ကမ္ဘာတွင် နေထိုင်နေကြသော်လည်း မှောင်မိုက်ထဲမှ သူတို့ကို ဖြတ်ကျော်စေနိုင်ရန် မျှော်လင့်ချက် မီးအိမ် မရှိပါ။",
	get_involved_sticker_header: "အများပြည်သူ နေရာတွင် စတစ်ကာတစ်ခု ကပ်ပါ",
	get_involved_sticker_content_1:
		"မည်သူ့ကိုမှ စကားပြောစရာမလို သင့်ပတ်ဝန်းကျင်ရှိ လူများကို Bitcoin အကြောင်း သင်ကြားပေးနိုင်သည်။ ကျွန်ုပ်တို့၏ အခမဲ့ Bitcoin စတစ်ကာများထဲမှ တစ်ခုကို အများပြည်သူ နေရာတွင် ကပ်ရုံပင်။",
	get_involved_sticker_content_2:
		"လစဉ် လူရာနှင့်ချီ၍ ဤစတစ်ကာများပေါ်ရှိ QR ကုဒ်များကို ဖတ်ကြသည်။ ငွေကြေးဖောင်းပွမှု စတစ်ကာများသည် အောက်ပါ စာမျက်နှာသို့ ချိတ်ဆက်သည်",
	get_involved_sticker_content_3: "ငွေကြေးဖောင်းပွမှုအတွက် ဖြေရှင်းချက်အဖြစ် Bitcoin။",
	get_involved_sticker_content_4:
		"အခြားစတစ်ကာများသည် မည်သို့ လူများကို ပြသပေးသည့် ကျွန်ုပ်တို့၏ ပညာရေးဆိုင်ရာ မူလစာမျက်နှာသို့ ချိတ်ဆက်သည်",
	get_involved_sticker_content_5: "Bitcoin သည် ပိုကောင်းသော ကမ္ဘာတစ်ခုကို တည်ဆောက်နေသည်။",
	get_involved_sticker_content_6:
		"လူများ မြင်နိုင်သော နေရာများတွင် သင့်ရပ်ရွာအတွင်း ဤစတစ်ကာများကို ကပ်ခြင်းဖြင့် သင့်ပတ်ဝန်းကျင်ရှိ လူများကို Bitcoin ယုန်တွင်းအတွင်းသို့ ပထမခြေလှမ်းများ လှမ်းနိုင်ရန် ကူညီနိုင်သည်။",
	get_involved_business_header: "လုပ်ငန်းတစ်ခုကို မိတ်ဆက်ပေးပါ",
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
	console.log(`get-involved_my.json: replaced ${n} keys, residual Bengali codepoints: ${remaining}`);
	if (remaining > 0) process.exit(1);
}

main();
