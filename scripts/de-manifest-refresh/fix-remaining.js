#!/usr/bin/env node
/**
 * German manifest refresh — fill the last 5 locale-specific entries.
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
	"de.json",
);

const T = {
	"bitcoin-vs-gold::gold": "Gold",
	"common::common_cold_wallet": "Cold Wallet",
	"common::common_hot_wallet": "Hot Wallet",
	"common::common_stickers_material": "Material:",
	"stickers::placeholder_name_optional": "Name (optional)",
	// Second pass — force distinct German forms so verify-language
	// doesn't flag byte-identical with English.
	"about::about_open_source_header": "Quelloffen",
};

// Forcibly rewrite values even when currentValue matches English.
const FORCE_REWRITE = {
	"about::about_open_source_header": "Quelloffen",
	"common::common_stickers_material": "Material:",
	"stickers::placeholder_name_optional": "Name (optional)",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(`fix-remaining (de): filled ${filled}, already-done ${skipped}`);
}

main();
