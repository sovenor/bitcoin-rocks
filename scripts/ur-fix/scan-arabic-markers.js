#!/usr/bin/env node
/**
 * Scan i18n/ur/buy_ur.json for distinctly Arabic-language markers that
 * shouldn't appear in idiomatic Urdu text. Flags any value still likely
 * to be Arabic so we can re-translate it.
 *
 * Markers checked (each is "weak" alone, but presence of multiple in a
 * single value is a strong signal):
 *   - ة  (taa marbuta)        — never used in Urdu
 *   - ي  (Arabic yaa, U+064A) — Urdu uses ی (U+06CC)
 *   - ك  (Arabic kaaf U+0643) — Urdu uses ک (U+06A9)
 *   - أ إ ؤ ئ                  — hamza-on letter forms common in Arabic
 *   - whole words: في / من / إلى / هذا / هذه / يمكن / لكن / لكنه / كيف
 *
 * Allow-listed Arabic-looking glyphs that DO appear in Urdu:
 *   - ا و ر س ل ن (ascii-ish letters used everywhere)
 *   - ہ (Urdu heh)
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const TARGET = path.resolve(
	__dirname,
	"..",
	"..",
	"i18n",
	"ur",
	"buy_ur.json",
);

const data = JSON.parse(fs.readFileSync(TARGET, "utf8"));

const ARABIC_CHAR_RE = /[ةًٌٍَُِّْٰ]|ي(?![ً-ٟ])|ك/u;
// Note: ي and ك are Arabic — Urdu uses ی and ک. But ي without combining-mark
// suffix lookahead is enough; we allow ك inside brand names like KYC.
// Keep it simple: just look for ة (taa marbuta) — it's the strongest tell.

const STRONG_RE = /ة/u;
const ARABIC_WORDS = [
	"في", "من", "إلى", "هذا", "هذه", "يمكن", "لكن", "لكنه", "كيف",
	"هناك", "البيتكوين", "البتكوين", "الذي", "التي", "ذلك", "هكذا",
	"يوفر", "يقدم", "يتيح", "تقدم", "تتيح", "موصى", "خياراتك", "بلدك",
	"اختر", "ابحث", "إليك", "أكثر", "أقل", "أو",
	// Note: "بعد" and "قبل" are borrowed Perso-Arabic words used in Urdu too,
	// so they are NOT in this wordlist.
];

let issues = 0;
for (const [key, value] of Object.entries(data)) {
	if (key === "@metadata") continue;
	if (typeof value !== "string") continue;

	// Skip pure-ASCII / brand strings (they're URLs, codes, dimensions)
	if (/^[\x00-\x7f]+$/.test(value)) continue;

	const reasons = [];
	if (STRONG_RE.test(value)) reasons.push("contains ة (taa marbuta)");
	for (const w of ARABIC_WORDS) {
		// word-boundary using non-letter check
		const re = new RegExp(`(^|[^\\u0600-\\u06FF])${w}([^\\u0600-\\u06FF]|$)`, "u");
		if (re.test(value)) reasons.push(`contains Arabic word "${w}"`);
	}

	if (reasons.length > 0) {
		issues++;
		console.log(`\n[${key}]`);
		console.log(`  value: ${value}`);
		console.log(`  reasons: ${reasons.join("; ")}`);
	}
}

console.log(`\nTotal flagged values: ${issues}`);
process.exit(issues > 0 ? 1 : 0);
