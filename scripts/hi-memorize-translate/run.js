#!/usr/bin/env node
/**
 * Adds new keys for the "memorize your seed phrase" page into the existing
 * Hindi index_hi.json and wallets_hi.json files, and bumps their
 * @metadata.last-updated to 2026-04-30.
 */

const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..", "..");
const indexPath = path.join(repoRoot, "i18n", "hi", "index_hi.json");
const walletsPath = path.join(repoRoot, "i18n", "hi", "wallets_hi.json");

const TODAY = "2026-04-30";

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n", "utf8");
}

// --- index_hi.json -----------------------------------------------------------
const indexAdditions = {
	home_card_label_self_custody_4: "अंतिम उपाय का बैकअप",
	home_link_title_self_custody_4: "Bitcoin को अपने दिमाग़ में कैसे स्टोर करें",
};

const indexJson = readJson(indexPath);
indexJson["@metadata"]["last-updated"] = TODAY;
for (const [k, v] of Object.entries(indexAdditions)) {
	indexJson[k] = v;
}
writeJson(indexPath, indexJson);
console.log(`Updated ${path.relative(repoRoot, indexPath)} (+${Object.keys(indexAdditions).length} keys)`);

// --- wallets_hi.json ---------------------------------------------------------
const walletsAdditions = {
	wallets_s6_c4b_a: "अधिक मज़बूती की एक और परत के लिए, आप",
	wallets_s6_c4b_b: "अपने सीड फ़्रेज़ को याद भी कर सकते हैं",
	wallets_s6_c4b_c: "एक अदृश्य बैकअप के रूप में जो आपके साथ हर जगह जाता है।",
};

const walletsJson = readJson(walletsPath);
walletsJson["@metadata"]["last-updated"] = TODAY;
for (const [k, v] of Object.entries(walletsAdditions)) {
	walletsJson[k] = v;
}
writeJson(walletsPath, walletsJson);
console.log(`Updated ${path.relative(repoRoot, walletsPath)} (+${Object.keys(walletsAdditions).length} keys)`);

console.log("Done.");
