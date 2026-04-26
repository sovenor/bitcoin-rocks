#!/usr/bin/env node
/**
 * Yoruba (yo) manifest refresh — fix the 11 byte-identical entries
 * flagged after apply-translations.
 *
 * Two categories:
 *   1. Sticker dimensions — Yoruba uses Latin script + Arabic numerals
 *      but we still localize the unit names: cm → sm (sentimíta), in → ìnṣì.
 *   2. "CRYPTO" label on bitcoin-vs-crypto — translate to "CRYPTO" Yoruba
 *      style. Yoruba press uses "Crypto" loanword in caps consistently.
 *      We render as "ÌTẸ̀NUMỌ́" (no — that's incorrect register).
 *      Better: "OWÓ-ÌKỌ́KỌ̀" (cryptocurrency literal) ALL CAPS.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const I18N_ROOT = path.resolve(__dirname, "..", "..", "i18n", "yo");

// Sticker dimensions: replace " cm" → " sm" and " in" → " ìnṣì"
// Yoruba: "sentimíta" abbreviated "sm", "ìnṣì" (inch loanword)
const DIMENSION_REPLACEMENTS = {
	common_stickers_dimensions_bdhi:
		"21.59 sm x 4.6482 sm (8.5 ìnṣì x 1.83 ìnṣì)",
	common_stickers_dimensions_bitcoin_accepted_here:
		"20.995 sm x 6.35 sm (8.25 ìnṣì x 2.5 ìnṣì)",
	common_stickers_dimensions_caution:
		"12.0142 sm x 7.9502 sm (4.73 ìnṣì x 3.13 ìnṣì)",
	common_stickers_dimensions_cure_v2:
		"6.35 sm x 12.7 sm (2.5 ìnṣì x 5 ìnṣì)",
	common_stickers_dimensions_danger:
		"11.4544 sm x 8.382 sm (4.51 ìnṣì x 3.3 ìnṣì)",
	common_stickers_dimensions_fix:
		"11.3792 sm x 6.8072 sm (4.48 ìnṣì x 2.68 ìnṣì)",
	common_stickers_dimensions_got_inflation:
		"7.9248 sm x 14.605 sm (3.12 ìnṣì x 5.75 ìnṣì)",
	common_stickers_dimensions_study:
		"14.605 sm x 5.1308 sm (5.75 ìnṣì x 2.02 ìnṣì)",
	common_stickers_dimensions_warning:
		"10.414 sm x 9.2202 sm (4.1 ìnṣì x 3.63 ìnṣì)",
	common_stickers_dimensions_what_if:
		"21.7932 sm x 7.62 sm (8.58 ìnṣì x 3 ìnṣì)",
};

// Update common_yo.json
const COMMON_FILE = path.join(I18N_ROOT, "common_yo.json");
{
	const json = JSON.parse(fs.readFileSync(COMMON_FILE, "utf8"));
	let touched = 0;
	for (const [k, v] of Object.entries(DIMENSION_REPLACEMENTS)) {
		if (json[k] !== v) {
			json[k] = v;
			touched++;
		}
	}
	const today = new Date().toISOString().slice(0, 10);
	if (json["@metadata"]) json["@metadata"]["last-updated"] = today;
	fs.writeFileSync(COMMON_FILE, JSON.stringify(json, null, "\t") + "\n");
	console.log(`common_yo.json: touched ${touched} dimension keys`);
}

// Update bitcoin-vs-crypto_yo.json — translate "crypto" key
const CRYPTO_FILE = path.join(I18N_ROOT, "bitcoin-vs-crypto_yo.json");
{
	const json = JSON.parse(fs.readFileSync(CRYPTO_FILE, "utf8"));
	let touched = 0;
	// "CRYPTO" label rendered next to BITCOIN — keep it as a recognizable
	// loanword in Yoruba (Premium Times Yoruba uses "Krípítò" loanform).
	// All caps to match the BITCOIN sibling label.
	const cryptoYo = "KRÍPÍTÒ";
	if (json.crypto !== cryptoYo) {
		json.crypto = cryptoYo;
		touched++;
	}
	const today = new Date().toISOString().slice(0, 10);
	if (json["@metadata"]) json["@metadata"]["last-updated"] = today;
	fs.writeFileSync(CRYPTO_FILE, JSON.stringify(json, null, "\t") + "\n");
	console.log(`bitcoin-vs-crypto_yo.json: touched ${touched} key(s)`);
}
