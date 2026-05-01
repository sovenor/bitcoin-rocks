#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const file = path.join(REPO_ROOT, "i18n", "ur", "memorize-your-seed-phrase_ur.json");
const obj = JSON.parse(fs.readFileSync(file, "utf8"));

obj["sources_brain_wallet_research"] =
	"Vasek, Bonneau, Castellucci, Keith & Moore — Bitcoin برین ڈرین: Bitcoin برین والٹس کے استعمال اور غلط استعمال کا جائزہ (فنانشل کرپٹوگرافی 2016)";

fs.writeFileSync(file, JSON.stringify(obj, null, "\t") + "\n", "utf8");
console.log("Updated sources_brain_wallet_research");
