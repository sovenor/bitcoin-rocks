#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Burmese files.
 *  - i18n/my/index_my.json   : 2 home-card keys
 *  - i18n/my/wallets_my.json : 3 wallets_s6_c4b_a/b/c keys
 * Bumps @metadata.last-updated to 2026-04-30 in both.
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function patchFile(relPath, additions) {
	const filePath = path.join(REPO_ROOT, relPath);
	const raw = fs.readFileSync(filePath, "utf8");
	const obj = JSON.parse(raw);

	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = TODAY;
	}

	for (const [key, value] of Object.entries(additions)) {
		obj[key] = value;
	}

	fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
	console.log(`Updated ${relPath} (+${Object.keys(additions).length} keys)`);
}

// index_my.json
patchFile("i18n/my/index_my.json", {
	home_card_label_self_custody_4: "နောက်ဆုံး အားကိုးရာ backup",
	home_link_title_self_custody_4: "သင့် Bitcoin ကို ဦးနှောက်ထဲ မည်ကဲ့သို့ သိမ်းဆည်းမည်နည်း",
});

// wallets_my.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Burmese rendering: "နောက်ထပ် ခံနိုင်ရည်ရှိမှု အလွှာတစ်ခုအတွက် သင်သည် [သင့် seed phrase ကို မှတ်ဉာဏ်ဖြင့် မှတ်သားခြင်း] ကိုလည်း သင်နှင့်အတူ လိုက်ပါသွားသော မမြင်နိုင်သည့် backup တစ်ခုအဖြစ် ပြုလုပ်နိုင်သည်။"
// _b is the noun phrase that becomes the link target.
patchFile("i18n/my/wallets_my.json", {
	wallets_s6_c4b_a: "နောက်ထပ် ခံနိုင်ရည်ရှိမှု အလွှာတစ်ခုအတွက် သင်သည်",
	wallets_s6_c4b_b: "သင့် seed phrase ကို မှတ်ဉာဏ်ဖြင့် မှတ်သားခြင်း",
	wallets_s6_c4b_c: "ကိုလည်း သင်နှင့်အတူ လိုက်ပါသွားသော မမြင်နိုင်သည့် backup တစ်ခုအဖြစ် ပြုလုပ်နိုင်သည်။",
});

console.log("Done.");
