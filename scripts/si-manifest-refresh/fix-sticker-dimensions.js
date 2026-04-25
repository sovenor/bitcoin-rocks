#!/usr/bin/env node
/**
 * Sinhala manifest refresh — sticker dimension localization.
 *
 * The verifier flags 10 sticker dimension strings as untranslated
 * because they're byte-identical to English. Sinhala uses "අඟල්"
 * for "inch" — replace `in` with `අඟල්` in those strings to localize
 * them properly.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const COMMON_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"i18n",
	"si",
	"common_si.json",
);

const KEYS = [
	"common_stickers_dimensions_bdhi",
	"common_stickers_dimensions_bitcoin_accepted_here",
	"common_stickers_dimensions_caution",
	"common_stickers_dimensions_cure_v2",
	"common_stickers_dimensions_danger",
	"common_stickers_dimensions_fix",
	"common_stickers_dimensions_got_inflation",
	"common_stickers_dimensions_study",
	"common_stickers_dimensions_warning",
	"common_stickers_dimensions_what_if",
];

function localize(value) {
	// Replace "in" (the inch abbreviation, only in the parenthetical) with
	// the Sinhala word අඟල් (= inches). Match only `<digit> in` to avoid
	// hitting any other "in" tokens.
	return value.replace(/(\d) in\b/g, "$1 අඟල්");
}

function main() {
	const obj = JSON.parse(fs.readFileSync(COMMON_PATH, "utf8"));
	let changed = 0;
	for (const k of KEYS) {
		if (typeof obj[k] === "string") {
			const next = localize(obj[k]);
			if (next !== obj[k]) {
				obj[k] = next;
				changed++;
			}
		}
	}
	if (obj["@metadata"]) {
		const today = new Date().toISOString().slice(0, 10);
		obj["@metadata"]["last-updated"] = today;
	}
	fs.writeFileSync(COMMON_PATH, JSON.stringify(obj, null, "\t") + "\n");
	console.log(`fix-sticker-dimensions (si): localized ${changed} keys`);
}

main();
