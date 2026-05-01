#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Dutch files.
 *  - i18n/nl/index_nl.json   : 2 home-card keys
 *  - i18n/nl/wallets_nl.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_nl.json
patchFile("i18n/nl/index_nl.json", {
	home_card_label_self_custody_4: "Back-up als laatste redmiddel",
	home_link_title_self_custody_4: "Hoe je Bitcoin in je hoofd bewaart",
});

// wallets_nl.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Dutch keeps the same word order: _b is the noun phrase that gets the link.
patchFile("i18n/nl/wallets_nl.json", {
	wallets_s6_c4b_a: "Voor nog een extra laag veerkracht kun je ook",
	wallets_s6_c4b_b: "je herstelzin uit je hoofd leren",
	wallets_s6_c4b_c: "als een onzichtbare back-up die altijd met je meereist.",
});

console.log("Done.");
