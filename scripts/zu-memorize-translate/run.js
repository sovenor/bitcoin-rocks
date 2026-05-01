#!/usr/bin/env node
/**
 * Add new memorize-your-seed-phrase keys to existing Zulu i18n files.
 * Updates index_zu.json (2 keys) and wallets_zu.json (3 keys).
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

// --- index_zu.json ---
const indexPath = path.join(REPO_ROOT, "i18n", "zu", "index_zu.json");
const indexObj = readJson(indexPath);
indexObj["home_card_label_self_custody_4"] = "Isipele sokugcina";
indexObj["home_link_title_self_custody_4"] = "Indlela Yokugcina I-Bitcoin Ebuchosheni Bakho";
if (indexObj["@metadata"]) {
	indexObj["@metadata"]["last-updated"] = TODAY;
}
writeJson(indexPath, indexObj);
console.log(`Updated ${path.relative(REPO_ROOT, indexPath)}`);

// --- wallets_zu.json ---
const walletsPath = path.join(REPO_ROOT, "i18n", "zu", "wallets_zu.json");
const walletsObj = readJson(walletsPath);
walletsObj["wallets_s6_c4b_a"] = "Ngokwesigaba esengeziwe sokuvikeleka, ungakwazi futhi";
walletsObj["wallets_s6_c4b_b"] = "ukubamba ngenhloko umushwana wakho wokubuyisa";
walletsObj["wallets_s6_c4b_c"] = "njengesipele esingabonakali esihamba nawe.";
if (walletsObj["@metadata"]) {
	walletsObj["@metadata"]["last-updated"] = TODAY;
}
writeJson(walletsPath, walletsObj);
console.log(`Updated ${path.relative(REPO_ROOT, walletsPath)}`);

console.log("Done.");
