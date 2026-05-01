#!/usr/bin/env node
/**
 * Adds the new "memorize your seed phrase" related keys to existing Irish (ga) JSON files:
 *   - i18n/ga/index_ga.json   (2 new keys: home_card_label_self_custody_4, home_link_title_self_custody_4)
 *   - i18n/ga/wallets_ga.json (3 new keys: wallets_s6_c4b_a, _b, _c)
 *
 * Bumps @metadata.last-updated to 2026-04-30 in both files.
 * Uses tab indentation. Trailing newline preserved.
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n", "utf8");
}

// ---------- memorize-your-seed-phrase_ga.json ----------
// Patch the academic-source citation so verify-language.js does not flag it
// as identical to the English value.
const memorizePath = path.join(REPO_ROOT, "i18n", "ga", "memorize-your-seed-phrase_ga.json");
const memorize = readJson(memorizePath);
memorize["@metadata"]["last-updated"] = TODAY;
memorize["sources_brain_wallet_research"] =
	"Vasek, Bonneau, Castellucci, Keith & Moore — taighde acadúil ar úsáid agus mí-úsáid sparán inchinne Bitcoin (Financial Cryptography 2016)";
writeJson(memorizePath, memorize);
console.log(`Updated ${memorizePath}`);

// ---------- index_ga.json ----------
const indexPath = path.join(REPO_ROOT, "i18n", "ga", "index_ga.json");
const index = readJson(indexPath);

index["@metadata"]["last-updated"] = TODAY;
index["home_card_label_self_custody_4"] = "Cúltaca mar rogha dheireanach";
index["home_link_title_self_custody_4"] = "Conas Bitcoin a Stóráil i d'Inchinn";

writeJson(indexPath, index);
console.log(`Updated ${indexPath}`);

// ---------- wallets_ga.json ----------
const walletsPath = path.join(REPO_ROOT, "i18n", "ga", "wallets_ga.json");
const wallets = readJson(walletsPath);

wallets["@metadata"]["last-updated"] = TODAY;
wallets["wallets_s6_c4b_a"] = "Mar shraith bhreise athléimneachta, is féidir leat";
wallets["wallets_s6_c4b_b"] = "d'fhrása aisghabhála a chur de ghlanmheabhair";
wallets["wallets_s6_c4b_c"] = "mar chúltaca dofheicthe a théann leat.";

writeJson(walletsPath, wallets);
console.log(`Updated ${walletsPath}`);

console.log("Done.");
