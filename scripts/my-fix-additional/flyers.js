#!/usr/bin/env node
/**
 * Replace Bengali-script values in i18n/my/flyers_my.json with Burmese.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "my", "flyers_my.json");
const BENGALI_RE = /[ঀ-৿]/;

// Source: i18n/en/flyers_en.json
const REPLACEMENTS = {
	free_bitcoin_flyers: "bitcoin.rocks မှ အခမဲ့ Bitcoin လက်ကမ်းစာစောင်များ",
	flyers_description:
		"Bitcoin လက်ကမ်းစာစောင်ကို အိမ်မှာ ပုံနှိပ်ပြီး သင့်ပတ်ဝန်းကျင်ရှိ လူများကို orange-pill ပေးရန် အများပြည်သူ နေရာတွင် ကပ်ပါ။",
	flyers_intro_c1:
		"ကျွန်ုပ်တို့၏ ရည်ရွယ်ချက်မှာ Bitcoin လက်ကမ်းစာစောင်များကို အများပြည်သူ နေရာများတွင် ကပ်ခြင်းဖြင့် လူပိုများကို orange-pill ပေးနိုင်ရန် ကူညီရန်ဖြစ်သည်။ ဤလက်ကမ်းစာစောင်တွင် ကျွန်ုပ်တို့၏",
	flyers_intro_c2: "ပညာရေးဆိုင်ရာ Bitcoin ဝက်ဘ်ဆိုက်သို့ ချိတ်ဆက်ပေးသော QR ကုဒ် ပါရှိသည်။",
	flyers_intro_c4:
		"ဤလက်ကမ်းစာစောင်ကို အိမ်မှာ သို့မဟုတ် ပုံနှိပ်ဆိုင်တွင် ပုံနှိပ်ပါ။ ထို့နောက် မြို့ထဲရှိ ကြေငြာဘုတ်များ၊ တယ်လီဖုန်းတိုင်များနှင့် လူများ မြင်နိုင်ပြီး Bitcoin အကြောင်း သင်ယူနိုင်သော အခြား အများပြည်သူ နေရာများတွင် ကပ်ထားပါ။",
	flyers_intro_c5: "ထိုကိစ္စတွင် ကျွန်ုပ်တို့၏",
	flyers_intro_c6: "အခမဲ့ Bitcoin စတစ်ကာများ",
	flyers_intro_c7: "အထုပ်ကို တောင်းဆိုပြီး ပိုများသော လူများကို orange-pill ပေးနိုင်ရန် ကူညီပါ။",
	flyers_btn_download: "လက်ကမ်းစာစောင် ဒေါင်းလုဒ်ဆွဲပါ",
	flyers_btn_print: "လက်ကမ်းစာစောင် ပုံနှိပ်ပါ",
	flyers_share_header: "သင့်လက်ကမ်းစာစောင် ကပ်ထားသော နေရာများ မျှဝေပါ",
	flyers_share_c1:
		"Nostr ပေါ်တွင် ကျွန်ုပ်တို့နှင့် သင့်လက်ကမ်းစာစောင် ကပ်ထားသော နေရာများ မျှဝေပြီး အခြားသူများ သူတို့၏ လက်ကမ်းစာစောင်များ မည်သည့်နေရာတွင် ကပ်နေသည်ကို ကြည့်ပါ။",
	flyers_btn_share_on_nostr: "Nostr တွင် မျှဝေပါ",
	flyers_btn_what_is_nostr: "Nostr ဆိုသည်မှာ အဘယ်နည်း?",
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
	console.log(`flyers_my.json: replaced ${n} keys, residual Bengali codepoints: ${remaining}`);
	if (remaining > 0) process.exit(1);
}

main();
