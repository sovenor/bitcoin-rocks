#!/usr/bin/env node
/**
 * Translate the BIP39 source descriptor in af memorize file.
 * The brain wallet academic paper title is left in English (matches the
 * cross-locale bibliographic convention — Spanish, German, French, Dutch
 * all keep the Vasek et al. paper title verbatim).
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const filePath = path.join(REPO_ROOT, "i18n/af/memorize-your-seed-phrase_af.json");

const obj = JSON.parse(fs.readFileSync(filePath, "utf8"));
obj["sources_bip39"] = "Bitcoin BIPs — BIP39: Geheuesteunkode vir die generering van deterministiese sleutels";

fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
console.log("Updated sources_bip39 in af memorize file.");
