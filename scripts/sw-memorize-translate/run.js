#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Swahili files.
 *  - i18n/sw/index_sw.json   : 2 home-card keys
 *  - i18n/sw/wallets_sw.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_sw.json
patchFile("i18n/sw/index_sw.json", {
	home_card_label_self_custody_4: "Nakala ya akiba ya hatua ya mwisho",
	home_link_title_self_custody_4: "Jinsi ya kuhifadhi Bitcoin ndani ya akili yako",
});

// wallets_sw.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Swahili rendering keeps the same word order: _b is the noun phrase that gets the link.
patchFile("i18n/sw/wallets_sw.json", {
	wallets_s6_c4b_a: "Kwa safu moja zaidi ya uthabiti, unaweza pia",
	wallets_s6_c4b_b: "kukariri maneno yako ya urejeshaji",
	wallets_s6_c4b_c: "kama nakala ya akiba isiyoonekana inayosafiri pamoja nawe.",
});

console.log("Done.");
