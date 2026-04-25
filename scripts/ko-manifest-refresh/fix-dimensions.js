#!/usr/bin/env node
/**
 * Korean (ko) manifest refresh — localize the 10 sticker-dimensions
 * strings in i18n/ko/common_ko.json so they no longer byte-match English.
 *
 * Korean convention: use 인치 instead of "in" for inches; cm stays as cm.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const COMMON = path.resolve(
	__dirname,
	"..",
	"..",
	"i18n",
	"ko",
	"common_ko.json",
);

const DIMS = {
	common_stickers_dimensions_bdhi:
		"21.59cm × 4.6482cm (8.5인치 × 1.83인치)",
	common_stickers_dimensions_bitcoin_accepted_here:
		"20.995cm × 6.35cm (8.25인치 × 2.5인치)",
	common_stickers_dimensions_caution:
		"12.0142cm × 7.9502cm (4.73인치 × 3.13인치)",
	common_stickers_dimensions_cure_v2:
		"6.35cm × 12.7cm (2.5인치 × 5인치)",
	common_stickers_dimensions_danger:
		"11.4544cm × 8.382cm (4.51인치 × 3.3인치)",
	common_stickers_dimensions_fix:
		"11.3792cm × 6.8072cm (4.48인치 × 2.68인치)",
	common_stickers_dimensions_got_inflation:
		"7.9248cm × 14.605cm (3.12인치 × 5.75인치)",
	common_stickers_dimensions_study:
		"14.605cm × 5.1308cm (5.75인치 × 2.02인치)",
	common_stickers_dimensions_warning:
		"10.414cm × 9.2202cm (4.1인치 × 3.63인치)",
	common_stickers_dimensions_what_if:
		"21.7932cm × 7.62cm (8.58인치 × 3인치)",
};

function main() {
	const obj = JSON.parse(fs.readFileSync(COMMON, "utf8"));
	let touched = 0;
	for (const [k, v] of Object.entries(DIMS)) {
		if (obj[k] !== v) {
			obj[k] = v;
			touched++;
		}
	}
	if (obj["@metadata"]) {
		obj["@metadata"]["last-updated"] = new Date()
			.toISOString()
			.slice(0, 10);
	}
	fs.writeFileSync(COMMON, JSON.stringify(obj, null, "\t") + "\n");
	console.log(`fix-dimensions (ko): updated ${touched} keys`);
}

main();
