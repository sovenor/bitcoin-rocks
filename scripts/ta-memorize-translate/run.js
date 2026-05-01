#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Tamil files.
 *  - i18n/ta/index_ta.json   : 2 home-card keys
 *  - i18n/ta/wallets_ta.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_ta.json
patchFile("i18n/ta/index_ta.json", {
	home_card_label_self_custody_4: "கடைசி வழி காப்புப் பிரதி",
	home_link_title_self_custody_4: "உங்கள் மூளையில் Bitcoin-ஐ எவ்வாறு சேமிப்பது",
});

// wallets_ta.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Tamil rendering keeps the same word order: _b is the noun phrase that gets the link.
patchFile("i18n/ta/wallets_ta.json", {
	wallets_s6_c4b_a: "மேலும் ஒரு அடுக்கான தாக்குப்பிடிக்கும் தன்மைக்கு, நீங்கள்",
	wallets_s6_c4b_b: "உங்கள் விதை சொற்றொடரை மனப்பாடம் செய்யலாம்",
	wallets_s6_c4b_c: "அது உங்களுடன் பயணிக்கும் ஒரு கண்ணுக்குத் தெரியாத காப்புப் பிரதியாக.",
});

console.log("Done.");
