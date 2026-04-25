#!/usr/bin/env node
/**
 * Romanian (ro) manifest refresh — fill the last few untranslated entries.
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
	"ro.json",
);

const T = {
	"about::about_open_source_header": "Sursă deschisă",
	"bitcoin-vs-crypto::bitcoin_vs_crypto": "Bitcoin vs. Crypto",
	"bitcoin-vs-crypto::crypto": "CRYPTO",
	"bitcoin-vs-gold::bitcoin_point_4": "Inelastic",
	"bitcoin-vs-gold::gold_point_4": "Elastic",
	"common::common_stickers_material": "Material:",
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
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, composite)) {
			e.targetTranslation = T[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`fix-remaining (ro): filled ${filled}, already-done ${skipped}`,
	);
}

main();
