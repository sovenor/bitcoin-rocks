#!/usr/bin/env node
/**
 * Translate the descriptive portion of two source citations in
 * memorize-your-seed-phrase_zu.json so they pass the
 * "untranslated (target === English)" verifier check.
 */
const fs = require("fs");
const path = require("path");
const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

const filePath = path.join(REPO_ROOT, "i18n", "zu", "memorize-your-seed-phrase_zu.json");
const obj = JSON.parse(fs.readFileSync(filePath, "utf8"));

obj["sources_bip39"] = "Bitcoin BIPs — BIP39: Ikhodi yokukhumbula yokukhiqiza okhiye abalandelekayo";
obj["sources_brain_wallet_research"] = "Vasek, Bonneau, Castellucci, Keith & Moore — Ucwaningo lwesikhwama sobuchopho: The Bitcoin Brain Drain (Financial Cryptography 2016)";

if (obj["@metadata"]) {
	obj["@metadata"]["last-updated"] = TODAY;
}

fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
console.log("Updated", path.relative(REPO_ROOT, filePath));
