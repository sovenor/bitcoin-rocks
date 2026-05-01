#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Polish files.
 *  - i18n/pl/index_pl.json   : 2 home-card keys
 *  - i18n/pl/wallets_pl.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_pl.json
patchFile("i18n/pl/index_pl.json", {
	home_card_label_self_custody_4: "Kopia zapasowa ostatniej szansy",
	home_link_title_self_custody_4: "Jak przechowywać Bitcoina w swoim umyśle",
});

// wallets_pl.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Polish rendering keeps the same word order: _b is the verb-phrase that gets the link.
patchFile("i18n/pl/wallets_pl.json", {
	wallets_s6_c4b_a: "Dla jeszcze jednej warstwy odporności możesz także",
	wallets_s6_c4b_b: "zapamiętać swoją frazę odzyskiwania",
	wallets_s6_c4b_c: "jako niewidzialną kopię zapasową, która towarzyszy ci wszędzie.",
});

console.log("Done.");
