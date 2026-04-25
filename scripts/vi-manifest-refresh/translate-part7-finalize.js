#!/usr/bin/env node
/**
 * Vietnamese (vi) manifest refresh — Part 7 (final cleanup)
 *
 * Catches a few stragglers under the "btc" pseudo-currency code in the
 * inflation namespace (inflation_stat_btc_detail_4yr,
 * inflation_stat_btc_source_bpr) and any other gaps that surface.
 *
 * Idempotent. Run after part 6.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"../i18n-audit/reports/vi.json",
);

const TRANSLATIONS = {
	"inflation::inflation_stat_btc_detail_4yr":
		"Sức mua đạt được trong 4 năm",
	"inflation::inflation_stat_btc_source_bpr":
		"Nguồn: Bitcoin Price Report →",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let alreadyFilled = 0;
	let unmatched = 0;
	const unmatchedKeys = [];

	for (const entry of report.entries) {
		const key = `${entry.namespace}::${entry.key}`;
		if (entry.targetTranslation !== null && entry.targetTranslation !== undefined) {
			alreadyFilled++;
			continue;
		}
		if (TRANSLATIONS[key] !== undefined) {
			entry.targetTranslation = TRANSLATIONS[key];
			filled++;
		} else {
			unmatched++;
			unmatchedKeys.push(key);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`[part7 finalize] filled=${filled} alreadyFilled=${alreadyFilled} unmatched=${unmatched}`,
	);
	if (unmatchedKeys.length) {
		console.log("unmatched keys:");
		console.log(unmatchedKeys.join("\n"));
	}
}

main();
