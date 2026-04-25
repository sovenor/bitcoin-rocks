#!/usr/bin/env node
/**
 * Italian (it) — fix the 2 byte-identical-to-English entries that survived
 * the main pass.
 *
 * - bitcoin_point_7 in bitcoin-vs-crypto: "Antifragile" → "Antifragile (resiste)"
 * - buy_platform_feature_p2p in buy: "Peer-to-peer" → "Peer-to-peer (P2P)"
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const TARGETS = [
	{
		file: "i18n/it/bitcoin-vs-crypto_it.json",
		key: "bitcoin_point_7",
		value: "Antifragile (resistente)",
	},
	{
		file: "i18n/it/buy_it.json",
		key: "buy_platform_feature_p2p",
		value: "Da pari a pari (P2P)",
	},
];

const today = new Date().toISOString().slice(0, 10);

for (const t of TARGETS) {
	const fp = path.resolve(__dirname, "..", "..", t.file);
	const data = JSON.parse(fs.readFileSync(fp, "utf8"));
	data[t.key] = t.value;
	if (data["@metadata"]) {
		data["@metadata"]["last-updated"] = today;
	}
	fs.writeFileSync(fp, JSON.stringify(data, null, "\t") + "\n");
	console.log(`fix-identical: ${t.file} :: ${t.key} = ${t.value}`);
}
