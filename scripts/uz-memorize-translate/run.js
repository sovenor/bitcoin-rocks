#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Uzbek files.
 *  - i18n/uz/index_uz.json   : 2 home-card keys
 *  - i18n/uz/wallets_uz.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_uz.json
patchFile("i18n/uz/index_uz.json", {
	home_card_label_self_custody_4: "Eng oxirgi zaxira",
	home_link_title_self_custody_4: "Bitcoinni miyangizda qanday saqlash",
});

// wallets_uz.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Uzbek rendering: _b is the noun phrase that gets the link.
patchFile("i18n/uz/wallets_uz.json", {
	wallets_s6_c4b_a: "Yana bir qatlam mustahkamlik uchun siz",
	wallets_s6_c4b_b: "urugʻ iborangizni yodlashingiz",
	wallets_s6_c4b_c: "ham mumkin — siz bilan birga yuradigan koʻrinmas zaxira sifatida.",
});

console.log("Done.");
