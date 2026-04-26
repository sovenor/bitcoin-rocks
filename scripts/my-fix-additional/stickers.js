#!/usr/bin/env node
/**
 * Replace Bengali-script values in i18n/my/stickers_my.json with Burmese.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILE = path.join(REPO_ROOT, "i18n", "my", "stickers_my.json");

const BENGALI_RE = /[ঀ-৿]/;

// Burmese (my) replacements for Bengali-contaminated values.
// Source of truth: i18n/en/stickers_en.json
const REPLACEMENTS = {
	free_bitcoin_stickers: "bitcoin.rocks မှ အခမဲ့ Bitcoin စတစ်ကာများ",
	stickers_description:
		"သင့်ပတ်ဝန်းကျင်ရှိ လူများကို orange-pill ပေးရန် Bitcoin စတစ်ကာတစ်ခုကို အများပြည်သူ နေရာတွင် ကပ်ပါ။",
	stickers_text_pack: "စာသား အထုပ်",
	stickers_signs_pack: "ဆိုင်းဘုတ် အထုပ်",
	stickers_share_header: "သင့်စတစ်ကာ ကပ်ထားသော နေရာများ မျှဝေပါ",
	stickers_share_c1:
		"Nostr ပေါ်တွင် ကျွန်ုပ်တို့နှင့် သင့်စတစ်ကာ ကပ်ထားသော နေရာများ မျှဝေပြီး အခြားသူများ သူတို့၏ စတစ်ကာများ မည်သည့်နေရာတွင် ကပ်နေသည်ကို ကြည့်ပါ။",
	stickers_btn_share_on_nostr: "Nostr တွင် မျှဝေပါ",
	stickers_btn_what_is_nostr: "Nostr ဆိုသည်မှာ အဘယ်နည်း?",
	stickers_flyers_link_text: "Bitcoin လက်ကမ်းစာစောင်များ",
	stickers_flyers_link_after: "ကို ပုံနှိပ်ပြီး ကပ်ပါ။",
	stickers_instructions_2:
		"အခမဲ့ စတစ်ကာများ ပို့ဆောင်ပြီးနောက် လိပ်စာ အချက်အလက်များကို ဖျက်ပစ်ပါသည်။",
	placeholder_name_optional: "အမည် (ရွေးချယ်ခွင့်)",
	placeholder_address_line_1: "လိပ်စာ စာကြောင်း ၁",
	placeholder_address_line_2: "လိပ်စာ စာကြောင်း ၂ (ရွေးချယ်ခွင့်)",
	placeholder_city: "မြို့",
	placeholder_state: "ပြည်နယ်",
	placeholder_province: "ခရိုင်",
	placeholder_zip_code: "ဇစ်ကုဒ်",
	placeholder_postal_code: "စာတိုက်ကုဒ်",
	placeholder_language: "ဘာသာစကား",
	placeholder_which_stickers: "မည်သည့် စတစ်ကာများ?",
	placeholder_email_optional:
		"အကြောင်းကြားရန် သင့်အီးမေးလ်ကို ထည့်ပါ (ရွေးချယ်ခွင့်)",
};

function main() {
	const raw = fs.readFileSync(FILE, "utf8");
	const obj = JSON.parse(raw);

	let replacedCount = 0;
	for (const [key, val] of Object.entries(obj)) {
		if (key === "@metadata") continue;
		if (typeof val !== "string") continue;
		if (!BENGALI_RE.test(val)) continue;
		if (!(key in REPLACEMENTS)) {
			console.error(`Missing replacement for key: ${key}\n  current: ${val}`);
			process.exit(1);
		}
		obj[key] = REPLACEMENTS[key];
		replacedCount++;
	}

	if (!obj["@metadata"]) obj["@metadata"] = {};
	obj["@metadata"]["last-updated"] = "2026-04-26";

	fs.writeFileSync(FILE, JSON.stringify(obj, null, "\t") + "\n", "utf8");

	// Verify no Bengali codepoints remain.
	const after = fs.readFileSync(FILE, "utf8");
	const remaining = (after.match(/[ঀ-৿]/g) || []).length;
	console.log(`stickers_my.json: replaced ${replacedCount} keys, residual Bengali codepoints: ${remaining}`);
	if (remaining > 0) process.exit(1);
}

main();
