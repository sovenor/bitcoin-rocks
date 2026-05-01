#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-30";

function readJson(file) {
	return JSON.parse(fs.readFileSync(file, "utf8"));
}

function writeJson(file, obj) {
	fs.writeFileSync(file, JSON.stringify(obj, null, "\t") + "\n", "utf8");
}

function bumpMetadata(obj) {
	if (!obj["@metadata"]) obj["@metadata"] = {};
	obj["@metadata"]["last-updated"] = TODAY;
}

// --- index_ur.json ---
const indexPath = path.join(REPO_ROOT, "i18n", "ur", "index_ur.json");
const indexObj = readJson(indexPath);

const indexAdditions = {
	home_card_label_self_custody_4: "آخری حربے کا بیک اپ",
	home_link_title_self_custody_4: "اپنا Bitcoin اپنے دماغ میں کیسے محفوظ کریں",
};

for (const [k, v] of Object.entries(indexAdditions)) {
	indexObj[k] = v;
}
bumpMetadata(indexObj);
writeJson(indexPath, indexObj);
console.log(`Updated ${indexPath}`);

// --- wallets_ur.json ---
const walletsPath = path.join(REPO_ROOT, "i18n", "ur", "wallets_ur.json");
const walletsObj = readJson(walletsPath);

const walletsAdditions = {
	wallets_s6_c4b_a: "ایک اضافی تہہ کی لچک کے لیے، آپ",
	wallets_s6_c4b_b: "اپنا سیڈ فقرہ یاد بھی کر سکتے ہیں",
	wallets_s6_c4b_c: "ایک پوشیدہ بیک اپ کے طور پر جو آپ کے ساتھ سفر کرتا ہے۔",
};

for (const [k, v] of Object.entries(walletsAdditions)) {
	walletsObj[k] = v;
}
bumpMetadata(walletsObj);
writeJson(walletsPath, walletsObj);
console.log(`Updated ${walletsPath}`);

console.log("Done.");
