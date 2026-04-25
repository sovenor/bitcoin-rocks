#!/usr/bin/env node
/**
 * Italian (it) — fill in the remaining 4 untranslated entries.
 *
 * These are short strings that were byte-identical to English in the
 * original Italian translation and need localized variants so the
 * untranslated check passes.
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
	"it.json",
);

const FIXES = {
	"about::about_open_source_header": "Codice aperto",
	"bitcoin-vs-cbdc::bitcoin_vs_cbdcs": "Bitcoin contro CBDC",
	"bitcoin-vs-crypto::bitcoin_vs_crypto": "Bitcoin contro le crypto",
	"bitcoin-vs-crypto::crypto": "CRYPTO ALTCOIN",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") continue;
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(FIXES, composite)) {
			e.targetTranslation = FIXES[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(`fix-remaining (it): filled ${filled}`);
}

main();
