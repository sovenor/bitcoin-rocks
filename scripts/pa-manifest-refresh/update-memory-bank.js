#!/usr/bin/env node
/**
 * Punjabi (pa) — prepend memory-bank/activeContext.md entry and bump
 * memory-bank/progress.md Step 5 counter (32 → 33).
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const ENTRY = `## Punjabi (pa) manifest refresh — 2026-04-25

Ran \`/translate-manifest-refresh Punjabi\` end-to-end. Thirty-third
locale through the manifest-driven refresh pipeline. Punjabi is the
official language of the Indian state of Punjab and one of the
official languages of Pakistan (where it's the most widely spoken
mother tongue), with around 113 million speakers worldwide making it
the 10th most spoken language. The Indian Punjabi diaspora across
Canada, the UK, the US, Australia, and the Gulf states adds
significant Bitcoin-curious audience reach.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current)
- Locale-specific gaps: 537 missing + 0 untranslated
- Manifest entries: 165 changed + 392 added
- Total flagged on first diff: **1,094 entries**
- All 4 verification checks passed: marker ✅ / locale-specific ✅ /
  manifest coverage ✅ / stale pre-V2 English ✅
- \`npm run build\` clean across 55 locales × 81 pages

**How the work was split:** Four helper scripts under
\`scripts/pa-manifest-refresh/\`:

1. **\`translate-inflation.js\`** (368 entries) — 327 per-currency ×
   13 currencies via templated function with Punjabi nominal forms
   (\`inPhrase\` "X ਵਿੱਚ" locative case, \`noun\`, \`nounPlural\`,
   \`label\`, \`existenceTitle\` "ਪ੍ਰਚਲਨ ਵਿੱਚ X", \`debtTitle\` "X
   ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ"). Plus 41 non-currency keys including
   freedom cards (ਦੁਰਲੱਭ/ਵਿਕੇਂਦਰੀਕ੍ਰਿਤ/ਬਿਨਾਂ ਇਜਾਜ਼ਤ/ਪ੍ਰਭੂਸੱਤਾ
   ਸੰਪੰਨ), stories (ਕੈਨੇਡਾ/ਨਾਈਜੀਰੀਆ/ਪੈਨਸਿਲਵੇਨੀਆ/ਟੈਕਸਾਸ),
   sources, and 5 manifest-changed hero/intro keys. Polite 2nd-person
   plural "ਤੁਸੀਂ" register throughout — universal register for
   Punjabi educational content (BBC Punjabi, Punjab Tribune, Jagbani
   all use ਤੁਸੀਂ; informal ਤੂੰ would feel disrespectful in
   finance copy). Western digits (0-9) for numeric figures matching
   modern Punjabi financial press conventions.

2. **\`translate-rest-part1.js\`** (193 entries) — 404 + about +
   bank-runs + all 10 bitcoin-vs-* comparison pages. Straight ASCII
   quotes per Punjabi digital convention. Gurmukhi script throughout.
   Inline \`<a class="body-link">\` HTML preserved verbatim for the
   Wikipedia India demonetisation link in bitcoin-vs-cash and the
   gold.org supply-and-demand link in bitcoin-vs-gold. Punjabi
   terminology — "ਬਿਟਕੌਇਨ" preserved (Gurmukhi transliteration),
   "ਵਾਲਿਟ" (wallet, Gurmukhi loanword), "ਮਹਿੰਗਾਈ" (inflation),
   "ਪੂੰਜੀ ਲਾਭ"/"ਪੂੰਜੀ ਹਾਨੀ" (capital gain/loss), "ਬੈਂਕ ਰਨ"
   (kept as anglicism in Gurmukhi), "ਸੈਲਫ਼-ਕਸਟਡੀ" (kept as
   anglicism), "ਬਲਾਕਚੇਨ" (kept as anglicism, widely used).
   Comparison page hero titles use "<span class=\\"orange\\">ਬਿਟਕੌਇਨ</span>
   ਅਤੇ <span class=\\"asset\\">Asset</span> ਵਿਚਕਾਰ ਫ਼ਰਕ" pattern.
   FDIC stat preserves "$153.9 ਬਿਲੀਅਨ" / "$10.82 ਟ੍ਰਿਲੀਅਨ" /
   "1.42%" with English numerals + Gurmukhi multipliers
   ਮਿਲੀਅਨ/ਬਿਲੀਅਨ/ਟ੍ਰਿਲੀਅਨ on short scale matching English.

3. **\`translate-rest-part2.js\`** (460 entries) — business/* subtree
   including all 11 namespaces (accounting with "ਲਾਗਤ ਆਧਾਰ"
   cost-basis tracking, why as customer-facing QR landing "ਇੱਥੇ
   ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ", wallets with Strike Business +
   Square + IBEX/OpenNode/Breez/Zaprite, maps, stickers, FAQs,
   sticker-files/english, etc.), buy, common with "ਸਰੋਤ:" for
   "Source:" and "ਅੱਗੇ ਕੀ?" for "What's next?",
   compound-inflation-calculator, flyers, get-involved, index
   homepage with all 62 home card labels (e.g. "ਤੁਲਨਾ ਕਰੋ" for
   "Let's compare", "ਕੀ ਫ਼ਰਕ ਹੈ?" for "What's the difference?",
   "ਸਟ੍ਰੀਟ ਆਰਟ" for "Street art", "ਖੇਡ ਬਦਲਣ ਵਾਲਾ" for "The great
   equalizer", "ਗਰਿੱਡ ਸਥਿਰੀਕਰਨ" for "Grid stabilization", "ਉਮੀਦ
   ਅਤੇ ਮੌਕਾ" for "Hope and opportunity", "ਅੰਤਹੀਣ ਜੰਗ ਦਾ ਅੰਤ" for
   "End forever wars", "ਪ੍ਰਭੂਸੱਤਾ ਸੰਪੰਨ ਪੈਸਾ" for "Sovereign
   money"), lightning, nostr/index, sticker-files/index,
   sticker-language-success, sticker-success, stickers, wallets.

4. **\`fix-remaining.js\`** (73 locale-specific entries) — full
   business/faq legacy V1 content (9 sections × Q+A with 2-7
   sub-paragraphs each covering "What is Bitcoin?", "How can Bitcoin
   benefit my business?", "How do I accept Bitcoin payments?",
   local-currency conversion, in-person/online acceptance, sticker
   requests, customer growth, cost) + business/maps +
   business/sticker-files/english/index + business/stickers +
   business/wallets V1 keys (feature flags like "ਸਿਰਫ਼-ਬਿਟਕੌਇਨ
   ਵਾਲਿਟ", "ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ", "ਆਮ੍ਹਣੇ-ਸਾਮ੍ਹਣੇ ਅਤੇ ਆਨਲਾਈਨ
   ਭੁਗਤਾਨ", processor brand names BREEZ/BTCPAY SERVER/IBEX PAY/OPEN
   NODE/SQUARE/ZAPRITE preserved verbatim, intro paragraphs).

**Edge cases / notes:**
- Punjabi locale was on V1 with substantial gaps — entire \`inflation\`
  namespace untranslated (all 368 entries in the per-currency template
  registered as missing) plus 169 non-inflation locale-specific gaps
  scattered across all 38 namespaces.
- The "Open Source" cognate avoided the byte-identical trap because
  the Punjabi \`about_open_source_header\` was already present as a
  proper translation ("ਓਪਨ ਸੋਰਸ" with Gurmukhi script — distinct
  byte sequence from Latin "Open Source").
- All 10 \`common_stickers_dimensions_*\` measurements were already
  Punjabi-translated in the existing locale, so no fix-identical pass
  was needed.
- business/faq is the only remaining V1-shape namespace that hadn't
  yet been redesigned, with 41 distinct legacy keys (description +
  9 sections × 2-7 sub-paragraphs each). These will eventually be
  superseded when business/faq gets its V2 treatment, but for now
  they were translated wholesale to bring Punjabi to manifest parity.

---

`;

function main() {
	// Prepend to activeContext
	const cur = fs.readFileSync(ACTIVE, "utf8");
	fs.writeFileSync(ACTIVE, ENTRY + cur);
	console.log("✓ Prepended Punjabi entry to memory-bank/activeContext.md");

	// Bump progress counter (Step 5 32 → 33)
	let progress = fs.readFileSync(PROGRESS, "utf8");
	const before = progress;
	progress = progress.replace(
		/Per-language re-translation \(Step 5\) \| 54 \| 32/g,
		"Per-language re-translation (Step 5) | 54 | 33",
	);
	progress = progress.replace(/\b32 \/ 54\b/g, "33 / 54");
	progress = progress.replace(/\(32 of 54\b/g, "(33 of 54");
	if (progress !== before) {
		fs.writeFileSync(PROGRESS, progress);
		console.log("✓ Bumped Step 5 counter in memory-bank/progress.md (32 → 33)");
	} else {
		console.log(
			"⚠ progress.md unchanged — counter pattern did not match. Bump manually if needed.",
		);
	}
}

main();
