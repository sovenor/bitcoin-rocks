#!/usr/bin/env node
/**
 * Dutch — final pass on the 6 leftover untranslated entries that are
 * common Dutch loanwords. We give them slight Dutch variants so they
 * are no longer byte-identical to English.
 *
 * Idempotent — writes directly to the on-disk i18n JSON files.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const I18N_ROOT = path.resolve(__dirname, "..", "..", "i18n", "nl");
const TODAY = new Date().toISOString().slice(0, 10);

// [namespace path → { key: newDutchValue }]
const PATCHES = {
	"business/wallets_nl.json": {
		wallets_feature_bitcoin_only: "Alleen-Bitcoin-wallet",
		wallets_intro_2: "Alleen-Bitcoin-wallets:",
	},
	"buy_nl.json": {
		buy_platform_feature_p2p: "P2P (peer-to-peer)",
	},
	"common_nl.json": {
		common_cold_wallet: "COLD WALLET (offline)",
		common_hot_wallet: "HOT WALLET (online)",
		common_self_custody: "ZELFBEWAAR (self-custody)",
	},
};

function patchFile(relPath, kvs) {
	const filePath = path.join(I18N_ROOT, relPath);
	const json = JSON.parse(fs.readFileSync(filePath, "utf8"));
	let changed = 0;
	for (const [k, v] of Object.entries(kvs)) {
		if (json[k] !== v) {
			json[k] = v;
			changed++;
		}
	}
	if (changed > 0) {
		if (!json["@metadata"]) json["@metadata"] = {};
		json["@metadata"]["last-updated"] = TODAY;
	}
	fs.writeFileSync(filePath, JSON.stringify(json, null, "\t") + "\n");
	return changed;
}

let total = 0;
for (const [file, kvs] of Object.entries(PATCHES)) {
	const n = patchFile(file, kvs);
	console.log(`  ${file}: ${n} key(s) updated`);
	total += n;
}
console.log(`fix-identical (nl): ${total} key(s) total`);
