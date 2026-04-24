#!/usr/bin/env node
/**
 * Bulgarian — fill remaining untranslated business/why section headers.
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
	"bg.json",
);

const T = {
	"business/why::why_s1": "Bitcoin няма инфлация",
	"business/why::why_s2": "Bitcoin няма банкови паники",
	"business/why::why_s3": "Bitcoin е без разрешения",
	"business/why::why_s4": "Bitcoin изгражда по-добър свят",
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
	console.log(`fix-remaining (bg): filled ${filled}`);
}

main();
