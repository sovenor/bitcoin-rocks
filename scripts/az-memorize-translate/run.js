#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Azerbaijani files.
 *  - i18n/az/index_az.json   : 2 home-card keys
 *  - i18n/az/wallets_az.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_az.json
patchFile("i18n/az/index_az.json", {
	home_card_label_self_custody_4: "Son çarə ehtiyat nüsxə",
	home_link_title_self_custody_4: "Bitcoin-i beyninizdə necə saxlamaq olar",
});

// wallets_az.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Azerbaijani rendering: _b is the noun phrase that gets the link.
patchFile("i18n/az/wallets_az.json", {
	wallets_s6_c4b_a: "Daha bir möhkəmlik təbəqəsi üçün siz həmçinin",
	wallets_s6_c4b_b: "bərpa ifadənizi yadda saxlaya",
	wallets_s6_c4b_c: "bilərsiniz — sizinlə birgə səyahət edən görünməz ehtiyat nüsxə kimi.",
});

console.log("Done.");
