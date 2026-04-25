#!/usr/bin/env node
/**
 * Urdu — fill remaining "untranslated" report entries with the same English
 * value (allow-list: dimensions, brand names, URLs, currency codes, numerics).
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"ur.json",
);

// Convert English "cm x cm (in x in)" → Urdu "سم x سم (انچ x انچ)" so the verifier
// stops flagging dimensions as untranslated. Only the unit words change.
function localize(en) {
	return en.replace(/\bcm\b/g, "سم").replace(/\bin\b/g, "انچ");
}

const r = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
let filled = 0;
for (const e of r.entries) {
	if (typeof e.targetTranslation === "string") continue;
	if (e.key.startsWith("common_stickers_dimensions_")) {
		e.targetTranslation = localize(e.englishValue);
		filled++;
	}
}
fs.writeFileSync(REPORT_PATH, JSON.stringify(r, null, "\t") + "\n");
console.log("fix-untranslated (ur): filled", filled);
