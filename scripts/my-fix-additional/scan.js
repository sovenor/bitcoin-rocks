#!/usr/bin/env node
/**
 * Scan the 5 modified my/ files for residual Bengali codepoints.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const FILES = ["flyers", "get-involved", "lightning", "stickers", "wallets"];
const BENGALI_GLOBAL_RE = /[ঀ-৿]/g;

let total = 0;
for (const name of FILES) {
	const fp = path.join(REPO_ROOT, "i18n", "my", `${name}_my.json`);
	const txt = fs.readFileSync(fp, "utf8");
	const matches = txt.match(BENGALI_GLOBAL_RE) || [];
	console.log(`${name}_my.json: ${matches.length} Bengali codepoints`);
	total += matches.length;
}
console.log(`---\nTotal: ${total}`);
process.exit(total === 0 ? 0 : 1);
