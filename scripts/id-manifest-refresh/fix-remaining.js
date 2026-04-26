#!/usr/bin/env node
/**
 * Indonesian (id) — fix the 1 untranslated entry left after the main pass.
 *
 * `buy_platform_feature_p2p` — "Peer-to-peer" — translate to a localized form
 * so the byte-identical-with-English check passes.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const FILE = path.resolve(
	__dirname,
	"..",
	"..",
	"i18n",
	"id",
	"buy_id.json",
);

const data = JSON.parse(fs.readFileSync(FILE, "utf8"));
data.buy_platform_feature_p2p = "Antar pengguna (peer-to-peer)";
if (data["@metadata"]) {
	data["@metadata"]["last-updated"] = new Date()
		.toISOString()
		.slice(0, 10);
}
fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n");
console.log("Fixed buy_platform_feature_p2p in", FILE);
