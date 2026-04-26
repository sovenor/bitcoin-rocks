#!/usr/bin/env node
/**
 * Slovak — fix the lone "Peer-to-peer" untranslated entry by giving it
 * a Slovak qualifier. Idempotent.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const file = path.resolve(__dirname, "..", "..", "i18n", "sk", "buy_sk.json");
const obj = JSON.parse(fs.readFileSync(file, "utf8"));
if (obj.buy_platform_feature_p2p === "Peer-to-peer") {
	obj.buy_platform_feature_p2p = "Priamo medzi účastníkmi (peer-to-peer)";
}
const today = new Date().toISOString().slice(0, 10);
if (obj["@metadata"]) obj["@metadata"]["last-updated"] = today;
fs.writeFileSync(file, JSON.stringify(obj, null, "\t") + "\n");
console.log("Updated", file);
