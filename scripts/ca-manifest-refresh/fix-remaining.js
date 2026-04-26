#!/usr/bin/env node
/**
 * Catalan — fill remaining locale-specific untranslated keys.
 *
 * "Dimensions:" and "Material:" happen to be spelled identically in
 * Catalan and English, so the byte-level diff flags them as
 * untranslated. Provide Catalan equivalents that differ from English.
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
	"ca.json",
);

const T = {
	"common::common_stickers_dimensions": "Mides:",
	"common::common_stickers_material": "Material de l'adhesiu:",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") continue;
		const k = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, k)) {
			e.targetTranslation = T[k];
			filled++;
		}
	}
	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(`fix-remaining (ca): filled ${filled}`);
}

main();
