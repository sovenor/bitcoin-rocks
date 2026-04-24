#!/usr/bin/env node
/**
 * Persian (Farsi) manifest refresh — fix remaining sticker dimensions.
 *
 * Persian uses Western digits + "اینچ" for "in".
 * Decimal comma changed to "٫" (Arabic decimal separator U+066B) per Persian convention.
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
	"fa.json",
);

const T = {
	"common::common_stickers_dimensions_bdhi":
		"۲۱٫۵۹ سانتی‌متر × ۴٫۶۴۸۲ سانتی‌متر (۸٫۵ اینچ × ۱٫۸۳ اینچ)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"۲۰٫۹۹۵ سانتی‌متر × ۶٫۳۵ سانتی‌متر (۸٫۲۵ اینچ × ۲٫۵ اینچ)",
	"common::common_stickers_dimensions_caution":
		"۱۲٫۰۱۴۲ سانتی‌متر × ۷٫۹۵۰۲ سانتی‌متر (۴٫۷۳ اینچ × ۳٫۱۳ اینچ)",
	"common::common_stickers_dimensions_cure_v2":
		"۶٫۳۵ سانتی‌متر × ۱۲٫۷ سانتی‌متر (۲٫۵ اینچ × ۵ اینچ)",
	"common::common_stickers_dimensions_danger":
		"۱۱٫۴۵۴۴ سانتی‌متر × ۸٫۳۸۲ سانتی‌متر (۴٫۵۱ اینچ × ۳٫۳ اینچ)",
	"common::common_stickers_dimensions_fix":
		"۱۱٫۳۷۹۲ سانتی‌متر × ۶٫۸۰۷۲ سانتی‌متر (۴٫۴۸ اینچ × ۲٫۶۸ اینچ)",
	"common::common_stickers_dimensions_got_inflation":
		"۷٫۹۲۴۸ سانتی‌متر × ۱۴٫۶۰۵ سانتی‌متر (۳٫۱۲ اینچ × ۵٫۷۵ اینچ)",
	"common::common_stickers_dimensions_study":
		"۱۴٫۶۰۵ سانتی‌متر × ۵٫۱۳۰۸ سانتی‌متر (۵٫۷۵ اینچ × ۲٫۰۲ اینچ)",
	"common::common_stickers_dimensions_warning":
		"۱۰٫۴۱۴ سانتی‌متر × ۹٫۲۲۰۲ سانتی‌متر (۴٫۱ اینچ × ۳٫۶۳ اینچ)",
	"common::common_stickers_dimensions_what_if":
		"۲۱٫۷۹۳۲ سانتی‌متر × ۷٫۶۲ سانتی‌متر (۸٫۵۸ اینچ × ۳ اینچ)",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missing = [];

	for (const e of report.entries) {
		const lookupKey = `${e.namespace}::${e.key}`;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
			continue;
		}
		missing.push(lookupKey);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`fix-remaining (fa): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length) {
		console.log(`\nStill missing (${missing.length}):`);
		for (const k of missing) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
