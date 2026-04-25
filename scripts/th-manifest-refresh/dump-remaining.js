#!/usr/bin/env node
/**
 * Dump all entries that still need translation (after inflation pass)
 * grouped by namespace, into a single text file for review.
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT = path.resolve(__dirname, "..", "i18n-audit", "reports", "th.json");
const OUT = path.resolve(__dirname, "remaining.txt");

const report = JSON.parse(fs.readFileSync(REPORT, "utf-8"));
const remaining = report.entries.filter((e) => e.targetTranslation === null);

const byNs = {};
for (const e of remaining) {
	(byNs[e.namespace] = byNs[e.namespace] || []).push(e);
}

let out = "";
for (const ns of Object.keys(byNs).sort()) {
	out += `\n========== ${ns} (${byNs[ns].length}) ==========\n\n`;
	for (const e of byNs[ns]) {
		out += `[${e.reason}] ${e.key}\n  EN: ${e.englishValue}\n\n`;
	}
}
fs.writeFileSync(OUT, out);
console.log(`Wrote ${remaining.length} remaining entries (${(out.length / 1024).toFixed(1)} KB) to ${OUT}`);
