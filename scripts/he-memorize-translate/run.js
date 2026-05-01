#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Hebrew files.
 *  - i18n/he/index_he.json   : 2 home-card keys
 *  - i18n/he/wallets_he.json : 3 wallets_s6_c4b_a/b/c keys
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

// index_he.json
patchFile("i18n/he/index_he.json", {
	home_card_label_self_custody_4: "גיבוי כמוצא אחרון",
	home_link_title_self_custody_4: "איך לאחסן ביטקוין במוח שלך",
});

// wallets_he.json — 3-key inline-link sentence:
//   "For one more layer of resilience, you can also [memorize your seed phrase] as an invisible backup that travels with you."
// Hebrew rendering keeps the same flow: _b is the noun phrase that gets the link.
patchFile("i18n/he/wallets_he.json", {
	wallets_s6_c4b_a: "לקבלת שכבה נוספת של חוסן, אתם יכולים גם",
	wallets_s6_c4b_b: "לשנן את צירוף השחזור שלכם",
	wallets_s6_c4b_c: "כגיבוי בלתי נראה שמלווה אתכם לכל מקום.",
});

console.log("Done.");
