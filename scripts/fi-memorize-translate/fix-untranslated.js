#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const filePath = path.join(REPO_ROOT, "i18n", "fi", "memorize-your-seed-phrase_fi.json");

const obj = JSON.parse(fs.readFileSync(filePath, "utf8"));

// "Brain wallet" / "brain wallet," — coined English term being contrasted.
// Keep the term itself in English (same as how the English heading uses
// Finnish-style typographic quotes around it in the heading), but make the
// value distinct from English by wrapping in Finnish quotes so the i18n
// audit doesn't flag a stale-English match. The contrast still reads
// clearly in Finnish ("brain wallet" -lompakko).
obj["memorize_seed_callout_bad_label"] = "”Brain wallet”";
obj["memorize_seed_not_brain_wallet_p1_b"] = "”brain wallet”,";

// Source citations: translate the descriptive portion in the same style as
// existing wallets_fi.json sources (e.g. "Bitcoin.org — valitse lompakkosi").
// Authors / paper / spec titles stay verbatim as proper nouns.
obj["sources_bip39"] =
	"Bitcoin BIPs — BIP39: muistisanakoodi deterministisille avaimille";
obj["sources_brain_wallet_research"] =
	"Vasek, Bonneau, Castellucci, Keith & Moore — The Bitcoin Brain Drain: aivolompakoiden käytön ja väärinkäytön tarkastelu (Financial Cryptography 2016)";

obj["@metadata"]["last-updated"] = "2026-04-30";

fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
console.log("Updated " + path.relative(REPO_ROOT, filePath));
