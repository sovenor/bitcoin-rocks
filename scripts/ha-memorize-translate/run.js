#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Hausa files.
 *  - i18n/ha/index_ha.json   : 2 home-card keys
 *  - i18n/ha/wallets_ha.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_ha.json
patchFile("i18n/ha/index_ha.json", {
	home_card_label_self_custody_4: "Madadi na ƙarshe",
	home_link_title_self_custody_4: "Yadda ake ajiye Bitcoin a cikin kwakwalwarka",
});

// wallets_ha.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Hausa rendering keeps the same word order: _b is the noun phrase that gets the link.
patchFile("i18n/ha/wallets_ha.json", {
	wallets_s6_c4b_a: "Don ƙarin matakin juriya, za ka kuma iya",
	wallets_s6_c4b_b: "haddace kalmar iri taka",
	wallets_s6_c4b_c: "a matsayin madadi marar ganuwa wanda ke tafiya tare da kai.",
});

console.log("Done.");
