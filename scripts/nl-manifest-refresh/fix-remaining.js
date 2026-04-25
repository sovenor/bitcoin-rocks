#!/usr/bin/env node
/**
 * Dutch — fix the leftover untranslated entries that part2 didn't catch.
 *
 * Mostly real translations; dimensions strings keep numeric format but
 * use a Dutch "x" / decimal-comma where appropriate.
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
	"nl.json",
);

const T = {
	"business/stickers::bitcoin_accepted_here_stickers":
		"„Bitcoin geaccepteerd hier“-stickers",
	"business/wallets::wallets_feature_bitcoin_only": "Bitcoin-only wallet",
	"business/wallets::wallets_feature_hybrid": "Hybride wallet",
	"business/wallets::wallets_intro_2": "Bitcoin-only wallets:",
	"business/wallets::wallets_intro_4": "Hybride wallets:",
	"buy::buy_platform_feature_dca": "Periodiek inleggen (DCA)",
	"buy::buy_platform_feature_mining": "Bitcoin-mining",
	"common::common_biz_stickers":
		"Gratis „Bitcoin geaccepteerd hier“-stickers",
	"common::common_cold_wallet": "COLD WALLET",
	"common::common_hot_wallet": "HOT WALLET",
	"common::common_not_your_keys": "NIET JOUW SLEUTELS",
	"common::common_publisher_open_source": "Opensourceproject",
	"common::common_self_custody": "SELF-CUSTODY",
	"common::common_stickers_dimensions_bdhi":
		"21,59 cm × 4,6482 cm (8,5 in × 1,83 in)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20,995 cm × 6,35 cm (8,25 in × 2,5 in)",
	"common::common_stickers_dimensions_caution":
		"12,0142 cm × 7,9502 cm (4,73 in × 3,13 in)",
	"common::common_stickers_dimensions_cure_v2":
		"6,35 cm × 12,7 cm (2,5 in × 5 in)",
	"common::common_stickers_dimensions_danger":
		"11,4544 cm × 8,382 cm (4,51 in × 3,3 in)",
	"common::common_stickers_dimensions_fix":
		"11,3792 cm × 6,8072 cm (4,48 in × 2,68 in)",
	"common::common_stickers_dimensions_got_inflation":
		"7,9248 cm × 14,605 cm (3,12 in × 5,75 in)",
	"common::common_stickers_dimensions_study":
		"14,605 cm × 5,1308 cm (5,75 in × 2,02 in)",
	"common::common_stickers_dimensions_warning":
		"10,414 cm × 9,2202 cm (4,1 in × 3,63 in)",
	"common::common_stickers_dimensions_what_if":
		"21,7932 cm × 7,62 cm (8,58 in × 3 in)",
	"common::common_stickers_type": "Soort:",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const stillMissing = [];

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
			stillMissing.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`fix-remaining (nl): filled ${filled}, already-done ${skipped}, still-missing ${stillMissing.length}`,
	);
	if (stillMissing.length) {
		for (const k of stillMissing) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
