#!/usr/bin/env node
/**
 * Add Persian translations for the new keys related to the
 * memorize-your-seed-phrase page.
 *
 * - Adds 2 keys to i18n/fa/index_fa.json
 *   (home_card_label_self_custody_4, home_link_title_self_custody_4)
 * - Adds 3 keys to i18n/fa/wallets_fa.json
 *   (wallets_s6_c4b_a, wallets_s6_c4b_b, wallets_s6_c4b_c)
 * - Bumps @metadata.last-updated to 2026-04-30 in both files
 *
 * Tab indentation, trailing newline. Read/parse/serialize through Node so
 * Persian characters never touch the shell.
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function updateJson(relPath, mutate) {
	const filePath = path.join(REPO_ROOT, relPath);
	const raw = fs.readFileSync(filePath, "utf8");
	const obj = JSON.parse(raw);
	mutate(obj);
	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = TODAY;
	}
	const out = JSON.stringify(obj, null, "\t") + "\n";
	fs.writeFileSync(filePath, out, "utf8");
	console.log(`updated ${relPath}`);
}

// index_fa.json — 2 new keys
updateJson("i18n/fa/index_fa.json", (obj) => {
	obj["home_card_label_self_custody_4"] = "پشتیبان نهایی";
	obj["home_link_title_self_custody_4"] = "چگونه بیت‌کوین را در ذهن خود ذخیره کنید";
});

// memorize-your-seed-phrase_fa.json — translate the brain-wallet citation
// title so the value differs from English (verifier flagged it as
// untranslated). Author names + journal name stay verbatim.
updateJson("i18n/fa/memorize-your-seed-phrase_fa.json", (obj) => {
	obj["sources_brain_wallet_research"] =
		"Vasek, Bonneau, Castellucci, Keith و Moore — فرار مغزی بیت‌کوین: بررسی استفاده و سوءاستفاده از کیف پول‌های مغزی بیت‌کوین (Financial Cryptography 2016)";
});

// wallets_fa.json — 3 new keys (a/b/c inline-link split)
// Joined: "برای یک لایهٔ تاب‌آوری بیشتر، می‌توانید عبارت بازیابی خود را حفظ کنید
//         تا یک پشتیبان نامرئی همراه شما داشته باشید."
// _b is the linked noun phrase: "عبارت بازیابی خود را حفظ کنید"
updateJson("i18n/fa/wallets_fa.json", (obj) => {
	obj["wallets_s6_c4b_a"] = "برای یک لایهٔ تاب‌آوری بیشتر، می‌توانید";
	obj["wallets_s6_c4b_b"] = "عبارت بازیابی خود را حفظ کنید";
	obj["wallets_s6_c4b_c"] = "تا یک پشتیبان نامرئی همراه شما داشته باشید.";
});

console.log("done.");
