#!/usr/bin/env node
/**
 * Swahili manifest refresh — patch the 11 byte-identical English/Swahili
 * collisions left after the apply step:
 *   - common_stickers_dimensions_* (10 keys): physical dimension strings
 *     that need a Swahili-localized form (Swahili commonly uses comma as
 *     decimal separator and "kwa" between dimensions).
 *   - bitcoin-vs-crypto::crypto: short label "CRYPTO" → use Swahili form.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const I18N_ROOT = path.resolve(__dirname, "..", "..", "i18n", "sw");

function readJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n");
}

function todayISO() {
	return new Date().toISOString().slice(0, 10);
}

const COMMON_PATCHES = {
	// Swahili-localized dimension strings: "21,59 sm x 4,6482 sm
	// (8,5 in x 1,83 in)" — uses comma decimals + "sm" abbreviation
	// for sentimita (centimeters) and "in" for inchi (inches).
	common_stickers_dimensions_bdhi: "21,59 sm x 4,6482 sm (8,5 in x 1,83 in)",
	common_stickers_dimensions_bitcoin_accepted_here:
		"20,995 sm x 6,35 sm (8,25 in x 2,5 in)",
	common_stickers_dimensions_caution:
		"12,0142 sm x 7,9502 sm (4,73 in x 3,13 in)",
	common_stickers_dimensions_cure_v2: "6,35 sm x 12,7 sm (2,5 in x 5 in)",
	common_stickers_dimensions_danger:
		"11,4544 sm x 8,382 sm (4,51 in x 3,3 in)",
	common_stickers_dimensions_fix:
		"11,3792 sm x 6,8072 sm (4,48 in x 2,68 in)",
	common_stickers_dimensions_got_inflation:
		"7,9248 sm x 14,605 sm (3,12 in x 5,75 in)",
	common_stickers_dimensions_study:
		"14,605 sm x 5,1308 sm (5,75 in x 2,02 in)",
	common_stickers_dimensions_warning:
		"10,414 sm x 9,2202 sm (4,1 in x 3,63 in)",
	common_stickers_dimensions_what_if: "21,7932 sm x 7,62 sm (8,58 in x 3 in)",
};

function patchCommon() {
	const filePath = path.join(I18N_ROOT, "common_sw.json");
	const obj = readJson(filePath);
	let changed = 0;
	for (const [k, v] of Object.entries(COMMON_PATCHES)) {
		if (obj[k] !== v) {
			obj[k] = v;
			changed++;
		}
	}
	if (changed > 0) {
		if (obj["@metadata"]) obj["@metadata"]["last-updated"] = todayISO();
		writeJson(filePath, obj);
	}
	console.log(`patched common_sw.json: ${changed} keys`);
}

function patchCrypto() {
	const filePath = path.join(I18N_ROOT, "bitcoin-vs-crypto_sw.json");
	const obj = readJson(filePath);
	// "CRYPTO" → "KRIPTO" in Swahili
	if (obj.crypto !== "KRIPTO") {
		obj.crypto = "KRIPTO";
		if (obj["@metadata"]) obj["@metadata"]["last-updated"] = todayISO();
		writeJson(filePath, obj);
		console.log("patched bitcoin-vs-crypto_sw.json: crypto → KRIPTO");
	} else {
		console.log("bitcoin-vs-crypto_sw.json: already patched");
	}
}

patchCommon();
patchCrypto();
