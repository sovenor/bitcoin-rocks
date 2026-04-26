#!/usr/bin/env node
/**
 * One-shot: rename wallets_s6_c3..c6 → c4..c7 in every locale's wallets_<lang>.json
 * so we can insert a new c3 warning paragraph between the original c2 and c3.
 *
 * Run from repo root: `node scripts/renumber-wallets-s6.js`
 */
const fs = require("fs");
const path = require("path");

const I18N_ROOT = path.resolve(__dirname, "..", "i18n");
const RENAMES = [
	["wallets_s6_c6", "wallets_s6_c7"],
	["wallets_s6_c5", "wallets_s6_c6"],
	["wallets_s6_c4", "wallets_s6_c5"],
	["wallets_s6_c3", "wallets_s6_c4"],
];

const locales = fs
	.readdirSync(I18N_ROOT, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name)
	.sort();

let touched = 0;
let skipped = 0;
const problems = [];

for (const lang of locales) {
	const file = path.join(I18N_ROOT, lang, `wallets_${lang}.json`);
	if (!fs.existsSync(file)) {
		skipped++;
		continue;
	}
	const raw = fs.readFileSync(file, "utf8");
	const obj = JSON.parse(raw);

	const missing = RENAMES.filter(([from]) => !(from in obj)).map(([f]) => f);
	if (missing.length) {
		problems.push(`${lang}: missing ${missing.join(", ")}`);
		continue;
	}

	const next = {};
	for (const [k, v] of Object.entries(obj)) {
		const rename = RENAMES.find(([from]) => from === k);
		next[rename ? rename[1] : k] = v;
	}

	fs.writeFileSync(file, JSON.stringify(next, null, "\t") + "\n", "utf8");
	touched++;
}

console.log(`Renumbered ${touched} locale files (skipped ${skipped} without wallets_*.json).`);
if (problems.length) {
	console.warn(`\nLocales with missing source keys (left untouched):`);
	for (const p of problems) console.warn(`  - ${p}`);
}
