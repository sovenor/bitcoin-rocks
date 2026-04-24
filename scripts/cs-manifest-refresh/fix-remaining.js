#!/usr/bin/env node
/**
 * Czech manifest refresh — fix the one remaining untranslated entry.
 *
 * buy_platform_feature_p2p: "Peer-to-peer" → Czech.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const FILE = path.resolve(
	__dirname,
	"..",
	"..",
	"i18n",
	"cs",
	"buy_cs.json",
);

const json = JSON.parse(fs.readFileSync(FILE, "utf8"));
json.buy_platform_feature_p2p = "Peer-to-peer (mezi uživateli)";
const today = new Date().toISOString().slice(0, 10);
json["@metadata"].last_updated = today;
json["@metadata"]["last-updated"] = today;

fs.writeFileSync(FILE, JSON.stringify(json, null, "\t") + "\n");
console.log("Fixed buy_platform_feature_p2p in i18n/cs/buy_cs.json");
