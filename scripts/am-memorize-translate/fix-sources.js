#!/usr/bin/env node
/**
 * Add Amharic glosses to citation strings in memorize-your-seed-phrase_am.json
 * so the verifier doesn't flag them as identical-to-English.
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

const filePath = path.join(REPO_ROOT, "i18n/am/memorize-your-seed-phrase_am.json");
const obj = JSON.parse(fs.readFileSync(filePath, "utf8"));

obj["@metadata"]["last-updated"] = TODAY;

// Citation strings: keep author/title verbatim, append Amharic gloss after em-dash.
// Pattern matches existing am wallets sources (e.g. "Blockstream Green — ራስ-ቁጥጥር የቢትኮይን ዋሌት")
obj["sources_bip39"] = "Bitcoin BIPs — BIP39: ቆራጥ ቁልፎችን ለማመንጨት የሚያገለግል የመታወስ ኮድ";
obj["sources_brain_wallet_research"] = "Vasek, Bonneau, Castellucci, Keith & Moore — የቢትኮይን አዕምሮ ስርጎት፦ የቢትኮይን Brain Wallets አጠቃቀምና አላግባብ መጠቀምን መመርመር (Financial Cryptography 2016)";

fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
console.log("Updated i18n/am/memorize-your-seed-phrase_am.json (sources translated).");
