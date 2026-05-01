#!/usr/bin/env node
"use strict";

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

function bumpMetadata(obj) {
	if (!obj["@metadata"]) obj["@metadata"] = {};
	obj["@metadata"]["last-updated"] = TODAY;
}

// --- index_fi.json: add 2 keys ---
const indexPath = path.join(REPO_ROOT, "i18n", "fi", "index_fi.json");
const indexObj = readJson(indexPath);
indexObj["home_card_label_self_custody_4"] = "Viimeinen varmuuskopio";
indexObj["home_link_title_self_custody_4"] = "Miten säilyttää Bitcoin aivoissasi";
bumpMetadata(indexObj);
writeJson(indexPath, indexObj);
console.log("Updated " + path.relative(REPO_ROOT, indexPath));

// --- wallets_fi.json: add 3 keys (the inline-link a/b/c set) ---
const walletsPath = path.join(REPO_ROOT, "i18n", "fi", "wallets_fi.json");
const walletsObj = readJson(walletsPath);
walletsObj["wallets_s6_c4b_a"] = "Yhden lisäkerroksen kestävyyttä saat, kun voit myös";
walletsObj["wallets_s6_c4b_b"] = "painaa palautuslauseesi muistiin";
walletsObj["wallets_s6_c4b_c"] = "näkymättömäksi varmuuskopioksi, joka kulkee mukanasi.";
bumpMetadata(walletsObj);
writeJson(walletsPath, walletsObj);
console.log("Updated " + path.relative(REPO_ROOT, walletsPath));

console.log("Done.");
