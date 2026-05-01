#!/usr/bin/env node
/**
 * Replace untranslated "brain wallet" strings in the Sinhala memorize-seed
 * translation with proper Sinhala rendering. The cited research paper title
 * is left as-is (proper nouns + original publication title).
 */

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const filePath = path.join(REPO_ROOT, "i18n/si/memorize-your-seed-phrase_si.json");
const obj = JSON.parse(fs.readFileSync(filePath, "utf8"));

// "Brain wallet" — callout label and the inline-link target.
// Use "මොළ පසුම්බිය" (literal: brain wallet) — matches the existing Sinhala
// convention where "wallet" = "පසුම්බිය".
obj.memorize_seed_callout_bad_label = "මොළ පසුම්බිය";

// Inline-link triple: "_b" carries the comma in English. Keep the comma.
obj.memorize_seed_not_brain_wallet_p1_b = "මොළ පසුම්බියක්,";

// Heading still reads naturally with the Sinhala phrase.
obj.memorize_seed_not_brain_wallet_heading = "මෙය \"මොළ පසුම්බියක්\" නොවේ";

obj["@metadata"]["last-updated"] = "2026-04-30";

fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
console.log("Fixed:", filePath);
