#!/usr/bin/env node
/**
 * Polish manifest refresh — fill remaining 2 buy keys.
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
	"pl.json",
);

const T = {
	"buy::buy_platform_feature_self_custody": "Portfel z samodzielną kustodią",
	"buy::buy_platform_relai_description":
		"Relai to szwajcarska aplikacja tylko dla Bitcoina z portfelem w samodzielnej kustodii, funkcjami auto-inwestowania i niskimi opłatami dla użytkowników z Europy.",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let missing = 0;
	const missingKeys = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		} else {
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`fix-remaining (pl): filled ${filled}, already-done ${skipped}, missing ${missing}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
