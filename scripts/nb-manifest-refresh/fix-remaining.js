#!/usr/bin/env node
/**
 * Norwegian (Bokmål) manifest refresh — fix the small set of entries that
 * remain flagged after the bulk apply.
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
	"nb.json",
);

const FIXES = {
	// "Type:" in English maps to "Sort:" in Norwegian which is the
	// more idiomatic word for "kind / type / sort" in this context
	// (sticker variant labels). "Type" exists in Norwegian too but
	// would be byte-identical to English, so we use "Sort:".
	"common::common_stickers_type": "Sort:",
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
	console.log(`fix-remaining (nb): filled ${filled}`);
}

main();
