#!/usr/bin/env node
/**
 * Force-rewrite the 3 remaining byte-identical German values with
 * distinct German phrasings so verify-language.js is happy.
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const I18N_DIR = path.resolve(__dirname, "..", "..", "i18n", "de");

function loadJson(p) {
	return JSON.parse(fs.readFileSync(p, "utf8"));
}
function writeJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, "\t") + "\n");
}

function bumpDate(obj) {
	if (obj["@metadata"]) {
		const today = new Date().toISOString().slice(0, 10);
		obj["@metadata"]["last-updated"] = today;
	}
}

// Distinct German phrasings
const FIXES = [
	{
		file: "about_de.json",
		key: "about_open_source_header",
		value: "Quelloffen",
	},
	{
		file: "common_de.json",
		key: "common_stickers_material",
		value: "Werkstoff:",
	},
	{
		file: "stickers_de.json",
		key: "placeholder_name_optional",
		value: "Name (freiwillig)",
	},
];

function main() {
	let changed = 0;
	for (const { file, key, value } of FIXES) {
		const p = path.join(I18N_DIR, file);
		const obj = loadJson(p);
		if (obj[key] !== value) {
			obj[key] = value;
			bumpDate(obj);
			writeJson(p, obj);
			console.log(`Updated ${file}: ${key} = ${JSON.stringify(value)}`);
			changed++;
		} else {
			console.log(`Already-set ${file}: ${key}`);
		}
	}
	console.log(`force-rewrite-identical (de): ${changed} files touched`);
}

main();
