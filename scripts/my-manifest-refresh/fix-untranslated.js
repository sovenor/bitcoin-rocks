#!/usr/bin/env node
/**
 * Burmese (my) — directly translate the two remaining untranslated entries
 * by editing the i18n JSON files in place.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");

function patch(file, key, value) {
	const full = path.join(REPO_ROOT, file);
	const data = JSON.parse(fs.readFileSync(full, "utf8"));
	data[key] = value;
	if (data["@metadata"]) data["@metadata"]["last-updated"] = "2026-04-25";
	fs.writeFileSync(full, JSON.stringify(data, null, "\t") + "\n");
	console.log("Patched", file, key);
}

patch(
	"i18n/my/about_my.json",
	"about_open_source_header",
	"အခမဲ့နှင့် Open Source",
);
patch(
	"i18n/my/bitcoin-vs-crypto_my.json",
	"bitcoin_point_7",
	"အကျပ်အတည်းတွင် ပိုခိုင်မာ",
);
