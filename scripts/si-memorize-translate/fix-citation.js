#!/usr/bin/env node
/**
 * Translate the descriptive portion of the brain-wallet research citation,
 * keeping author names and the verbatim paper title preserved (Vasek,
 * Bonneau, Castellucci, Keith & Moore — proper nouns; "The Bitcoin Brain
 * Drain..." is the published title).
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const filePath = path.join(REPO_ROOT, "i18n/si/memorize-your-seed-phrase_si.json");
const obj = JSON.parse(fs.readFileSync(filePath, "utf8"));

// Pattern matches existing sources_jameson_lopp etc.: author/org in English,
// descriptive text translated. Paper title kept as published.
obj.sources_brain_wallet_research =
	"Vasek, Bonneau, Castellucci, Keith & Moore — Bitcoin මොළ පසුම්බිවල භාවිතය හා අපයෝජනය පිළිබඳ පර්යේෂණය (Financial Cryptography 2016)";

obj["@metadata"]["last-updated"] = "2026-04-30";

fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
console.log("Fixed:", filePath);
