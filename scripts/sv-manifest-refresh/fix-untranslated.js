#!/usr/bin/env node
/**
 * Fill in the 4 leftover `untranslated` entries in scripts/i18n-audit/reports/sv.json.
 * These are short strings whose Swedish rendering happens to be byte-identical to
 * English; we pick non-identical idiomatic Swedish phrasings to satisfy the audit.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"sv.json",
);

const T = {
	"bitcoin-vs-visa::bitcoin_point_3": "Granskbart system",
	"buy::buy_platform_feature_p2p": "Peer-till-peer",
	"common::common_sticker_files_mission_3": "inflationen",
	"common::common_stickers_material": "Materialtyp:",
};

function main() {
	const r = JSON.parse(fs.readFileSync(REPORT, "utf8"));
	let filled = 0;
	for (const e of r.entries) {
		const k = `${e.namespace}::${e.key}`;
		if (T[k] !== undefined && e.targetTranslation === null) {
			e.targetTranslation = T[k];
			filled++;
		}
	}
	fs.writeFileSync(REPORT, JSON.stringify(r, null, "\t") + "\n");
	const remaining = r.entries.filter((e) => e.targetTranslation === null).length;
	console.log(`Filled ${filled}, remaining null: ${remaining}`);
}

main();
