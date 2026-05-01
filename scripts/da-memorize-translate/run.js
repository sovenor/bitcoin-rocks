#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Danish files.
 *  - i18n/da/index_da.json   : 2 home-card keys
 *  - i18n/da/wallets_da.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_da.json
patchFile("i18n/da/index_da.json", {
	home_card_label_self_custody_4: "Sikkerhedskopi som sidste udvej",
	home_link_title_self_custody_4: "Sådan opbevarer du Bitcoin i din hjerne",
});

// wallets_da.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Danish rendering keeps the same word order: _b is the linkable noun phrase.
patchFile("i18n/da/wallets_da.json", {
	wallets_s6_c4b_a: "For et ekstra lag af modstandsdygtighed kan du også",
	wallets_s6_c4b_b: "memorere din gendannelsesfrase",
	wallets_s6_c4b_c: "som en usynlig sikkerhedskopi, der følger dig overalt.",
});

console.log("Done.");
