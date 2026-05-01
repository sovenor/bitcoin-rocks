#!/usr/bin/env node
/**
 * Translate the 4 entries flagged by verify-language.js as untranslated:
 *   - memorize_seed_callout_bad_label  (already fixed via Edit)
 *   - memorize_seed_not_brain_wallet_p1_b
 *   - sources_bip39
 *   - sources_brain_wallet_research (Italianize the "&" between authors)
 */

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const filePath = path.join(REPO_ROOT, "i18n/it/memorize-your-seed-phrase_it.json");

const raw = fs.readFileSync(filePath, "utf8");
const obj = JSON.parse(raw);

obj["memorize_seed_callout_bad_label"] = "Portafoglio mentale";
// Section heading: keep the introduced term in quotes consistent with the
// callout label.
obj["memorize_seed_not_brain_wallet_heading"] = "Questo non è un \"portafoglio mentale\"";
// _p1_b is the linkable noun phrase. Italian: "portafoglio mentale," — comma
// kept inside as in the English source.
obj["memorize_seed_not_brain_wallet_p1_b"] = "portafoglio mentale,";
// BIP39 source descriptor — "Mnemonic code for generating deterministic keys"
obj["sources_bip39"] = "Bitcoin BIPs — BIP39: Codice mnemonico per la generazione di chiavi deterministiche";
// Academic paper: keep authors and original English title (it's a citation,
// not free text). Italianize the "&" between the last two authors to "e".
obj["sources_brain_wallet_research"] = "Vasek, Bonneau, Castellucci, Keith e Moore — The Bitcoin Brain Drain: Examining the Use and Abuse of Bitcoin Brain Wallets (Financial Cryptography 2016)";

fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
console.log("Fixed 4 flagged entries in i18n/it/memorize-your-seed-phrase_it.json");
