#!/usr/bin/env node
/**
 * Tamil manifest refresh — fix the byte-identical sticker-dimension strings.
 *
 * The dimensions strings are visible to verify-language.js as "untranslated"
 * because cm/in are still in Latin script. Tamil uses Western Arabic
 * numerals but localizes the unit names: cm → செமீ, in → அங்குலம்.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const FILE = path.resolve(__dirname, "..", "..", "i18n", "ta", "common_ta.json");

const REPLACEMENTS = {
	common_stickers_dimensions_bdhi:
		"21.59 செமீ x 4.6482 செமீ (8.5 அங்குலம் x 1.83 அங்குலம்)",
	common_stickers_dimensions_bitcoin_accepted_here:
		"20.995 செமீ x 6.35 செமீ (8.25 அங்குலம் x 2.5 அங்குலம்)",
	common_stickers_dimensions_caution:
		"12.0142 செமீ x 7.9502 செமீ (4.73 அங்குலம் x 3.13 அங்குலம்)",
	common_stickers_dimensions_cure_v2:
		"6.35 செமீ x 12.7 செமீ (2.5 அங்குலம் x 5 அங்குலம்)",
	common_stickers_dimensions_danger:
		"11.4544 செமீ x 8.382 செமீ (4.51 அங்குலம் x 3.3 அங்குலம்)",
	common_stickers_dimensions_fix:
		"11.3792 செமீ x 6.8072 செமீ (4.48 அங்குலம் x 2.68 அங்குலம்)",
	common_stickers_dimensions_got_inflation:
		"7.9248 செமீ x 14.605 செமீ (3.12 அங்குலம் x 5.75 அங்குலம்)",
	common_stickers_dimensions_study:
		"14.605 செமீ x 5.1308 செமீ (5.75 அங்குலம் x 2.02 அங்குலம்)",
	common_stickers_dimensions_warning:
		"10.414 செமீ x 9.2202 செமீ (4.1 அங்குலம் x 3.63 அங்குலம்)",
	common_stickers_dimensions_what_if:
		"21.7932 செமீ x 7.62 செமீ (8.58 அங்குலம் x 3 அங்குலம்)",
};

const json = JSON.parse(fs.readFileSync(FILE, "utf8"));
let touched = 0;
for (const [k, v] of Object.entries(REPLACEMENTS)) {
	if (json[k] !== v) {
		json[k] = v;
		touched++;
	}
}
// bump last-updated
const today = new Date().toISOString().slice(0, 10);
if (json["@metadata"]) json["@metadata"]["last-updated"] = today;

fs.writeFileSync(FILE, JSON.stringify(json, null, "\t") + "\n");
console.log(`fix-sticker-dimensions (ta): touched ${touched} keys`);
