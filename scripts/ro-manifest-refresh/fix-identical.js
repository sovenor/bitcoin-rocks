#!/usr/bin/env node
/**
 * Romanian (ro) — fix the byte-identical-to-English entries that
 * survived the main pass.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const TARGETS = [
	{
		file: "i18n/ro/bitcoin-vs-crypto_ro.json",
		key: "crypto",
		value: "CRIPTO",
	},
	{
		file: "i18n/ro/bitcoin-vs-gold_ro.json",
		key: "bitcoin_point_4",
		value: "Inelastic (ofertă fixă)",
	},
	{
		file: "i18n/ro/bitcoin-vs-gold_ro.json",
		key: "gold_point_4",
		value: "Elastic (extracție continuă)",
	},
	{
		file: "i18n/ro/buy_ro.json",
		key: "buy_platform_feature_p2p",
		value: "De la egal la egal (P2P)",
	},
	{
		file: "i18n/ro/common_ro.json",
		key: "common_stickers_material",
		value: "Material adeziv:",
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
