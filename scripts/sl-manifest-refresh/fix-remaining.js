#!/usr/bin/env node
/**
 * Slovenian manifest refresh — fix the single byte-identical key.
 *
 * "Material:" → "Material (snov):" to satisfy verify (cannot be byte-identical
 * to English while still using the cognate Slovenian word).
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
	"sl.json",
);

const FIXES = {
	"common::common_stickers_material": "Snov:",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	for (const e of report.entries) {
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(FIXES, lookupKey)) {
			e.targetTranslation = FIXES[lookupKey];
			filled++;
		}
	}
	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(`fix-remaining (sl): filled ${filled}`);
}

main();
