#!/usr/bin/env node
/* eslint-disable no-console */

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

// --- index_bg.json -------------------------------------------------------
const indexPath = path.join(REPO_ROOT, "i18n", "bg", "index_bg.json");
const indexObj = readJson(indexPath);

indexObj["home_card_label_self_custody_4"] = "Архивиране в краен случай";
indexObj["home_link_title_self_custody_4"] = "Как да съхранявате Биткойн в мозъка си";

bumpMetadata(indexObj);
writeJson(indexPath, indexObj);
console.log("Updated:", path.relative(REPO_ROOT, indexPath));

// --- wallets_bg.json -----------------------------------------------------
const walletsPath = path.join(REPO_ROOT, "i18n", "bg", "wallets_bg.json");
const walletsObj = readJson(walletsPath);

// Inline-link triple: "_b" must read as a coherent noun phrase that fits
// naturally between "_a" and "_c" when joined with spaces.
//
// Joined sentence (Bulgarian):
//   "За още един слой устойчивост можете също да запаметите вашата seed
//    фраза като невидимо архивиране, което пътува с вас."
walletsObj["wallets_s6_c4b_a"] = "За още един слой устойчивост можете също да";
walletsObj["wallets_s6_c4b_b"] = "запаметите вашата seed фраза";
walletsObj["wallets_s6_c4b_c"] = "като невидимо архивиране, което пътува с вас.";

bumpMetadata(walletsObj);
writeJson(walletsPath, walletsObj);
console.log("Updated:", path.relative(REPO_ROOT, walletsPath));
