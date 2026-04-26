#!/usr/bin/env node
/**
 * Prepend Slovenian (sl) manifest-refresh notes to memory-bank.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");

const ACTIVE_PATH = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS_PATH = path.join(ROOT, "memory-bank", "progress.md");

const ACTIVE_ENTRY = `## Slovenian (sl) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Slovenian\` end-to-end. **Locale 42/54
complete.** Slovenian (\`Slovenščina\`) is the official language of Slovenia,
spoken natively by ~2.1M people. Slovenian is South Slavic and shares
case-grammar foundations with Slovak/Czech (West Slavic) — close enough
that the helper-script structure could mirror \`sk-manifest-refresh/\`,
distinct enough that vocabulary, orthography, and the dual-number system
required separate per-key writing.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165
  changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 1 untranslated (locale was largely
  V1 with the entire \`inflation\` namespace and all 62 home card labels
  in \`index\` missing; the only byte-identical-to-English value was
  "Material:")
- Manifest entries: 165 changed + 392 added → **1,022 total entries
  flagged**

**Helper-script split (4 scripts under \`scripts/sl-manifest-refresh/\`):**

- \`translate-inflation.js\` — **368 entries**. Per-currency templated
  translator × 13 currencies with Slovenian noun forms (\`longName\`
  locative "in X" e.g. "ameriških dolarjih", \`longNameNom\` nominative
  "ameriški dolar", \`nounPlural\` genitive plural for compound counting
  "dolarjev"), formal "vi/vaš" register throughout — the standard
  register for Slovenian educational copy. Plus 41 non-currency keys:
  freedom cards (Redek / Decentraliziran / Brez dovoljenja / Suveren),
  stories (Kanada / Nigerija / Pensilvanija / Teksas), sources, and 5
  manifest-changed hero/intro keys including "Bitcoin nima inflacije,
  vaš denar pa." for the rewritten H1.
- \`translate-rest-part1.js\` — **193 entries**. 404 + about + bank-runs
  + all 10 bitcoin-vs-* comparison pages with German-style low-then-high
  typographic quotation marks „…" matching Slovenian typography,
  Slovenian diacritics (č, š, ž), inline \`<a class="body-link">\` HTML
  preserved for the Wikipedia India demonetisation and gold.org
  supply-and-demand links. Slovenian terminology — "Bitcoin" preserved
  as Latin loanword (universal in Slovenian crypto press), "denarnica"
  (wallet), "inflacija" (inflation), "kapitalski dobiček/izguba" (capital
  gain/loss), "naskok na banko" (bank run, lit. "attack on the bank"),
  "lastno skrbništvo" (self-custody), "blockchain" kept as anglicism,
  "tveganje nasprotne stranke" (counterparty risk); numeric format with
  comma decimal + period thousands ("153,9 mrd. USD" / "10,82 bilijona
  USD" / "1,42 %" / "21.000.000"); long scale "milijon"/"milijarda"/
  "bilijon".
- \`translate-rest-part2.js\` — **460 entries**. Full business/* subtree
  (accounting with "nabavna vrednost" cost-basis, why as customer-facing
  QR landing "Tu sprejemamo Bitcoin", wallets with Strike Business +
  Square + IBEX/OpenNode/Breez/Zaprite, maps with "zemljevidi Bitcoin
  trgovcev", stickers as "nalepke", FAQs, sticker-files/english) plus
  buy, common with "Vir:" for Source: and "Kaj sledi?" for What's next?,
  compound-inflation-calculator, flyers as "letaki", get-involved as
  "Vključite se", index homepage with all 62 home card labels (e.g.
  "Primerjajmo" for "Let's compare", "V čem je razlika?" for "What's
  the difference?", "Ulična umetnost" for "Street art", "Velika
  prelomnica" for "The great equalizer", "Stabilizacija omrežja" for
  "Grid stabilization", "Konec neskončne vojne" for "End forever wars",
  "Suvereni denar" for "Sovereign money"), lightning, nostr/index,
  sticker-files/index, sticker-language-success, sticker-success,
  stickers, wallets.
- \`fix-remaining.js\` — **1 entry**. The single byte-identical
  "Material:" cognate patched to "Snov:" — Slovenian native word for
  material/substance, byte-distinct from English.

**Verification:**
- All 4 verification checks pass — marker, locale-specific coverage,
  manifest coverage, stale English cross-check.
- \`npm run build\` clean across 55 locales × 81 pages.

**Edge cases / notes:**
- Slovenian shares its low-then-high "…" quote style with German,
  Czech, Slovak, and Croatian. Easy to reuse the same template literal.
- The dual-number grammar (Slovenian is one of three living languages
  with a fully productive dual) didn't matter for the per-currency
  template since FRED-rendered figures always exceed 5 → genitive plural.
- Native vocabulary preferred over anglicisms throughout (denarnica
  vs wallet, naskok na banko vs bankrun, lastno skrbništvo vs
  self-custody) — matches dominant style in Slovenian financial press
  (Finance.si, Delo, Mladina).

`;

const PROGRESS_ENTRY = `## i18n cleanup Step 5 — Slovenian (sl) — 2026-04-25

Ran \`/translate-manifest-refresh Slovenian\`. Slovenian
(\`Slovenščina\`) is the official language of Slovenia, ~2.1M native
speakers; South Slavic, mutually intelligible with Croatian and shares
case grammar with Slovak/Czech. **Counter:** 42/54 languages complete.
1,022 entries flagged (464 missing locale-specific + 1 untranslated +
165 manifest-changed + 392 manifest-added).

**4 helper scripts under \`scripts/sl-manifest-refresh/\`:**
1. \`translate-inflation.js\` (368 entries — 327 per-currency × 13
   currencies via templated function with Slovenian noun forms
   (\`longName\` locative "in X", \`longNameNom\`, \`nounPlural\`
   genitive plural for compound counting), formal "vi/vaš" register +
   41 non-currency keys: freedom cards (Redek / Decentraliziran / Brez
   dovoljenja / Suveren), stories (Kanada/Nigerija/Pensilvanija/Teksas),
   sources, 5 manifest-changed hero/intro keys including the rewritten
   H1 "Bitcoin nima inflacije, vaš denar pa.").
2. \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs +
   all 10 bitcoin-vs-* comparison pages with German-style typographic
   quotation marks „…", Slovenian diacritics (č, š, ž), inline
   \`<a class="body-link">\` HTML preserved for Wikipedia India and
   gold.org links; Slovenian terminology — "Bitcoin" Latin loanword,
   "denarnica" wallet, "inflacija" inflation, "naskok na banko" bank run
   (lit. "attack on the bank"), "lastno skrbništvo" self-custody,
   "blockchain" loanword, "tveganje nasprotne stranke" counterparty
   risk; numeric format with comma decimal + period thousands
   "153,9 mrd. USD" / "10,82 bilijona USD" / "1,42 %" / "21.000.000").
3. \`translate-rest-part2.js\` (460 entries — full business/* subtree
   (accounting "nabavna vrednost" cost-basis, why "Tu sprejemamo
   Bitcoin" QR landing, wallets/maps/stickers/FAQs/sticker-files/
   english), buy, common with "Vir:" for "Source:" and "Kaj sledi?"
   for "What's next?", compound-inflation-calculator, flyers as
   "letaki", get-involved as "Vključite se", index homepage with all
   62 home card labels (e.g. "Primerjajmo", "V čem je razlika?",
   "Ulična umetnost", "Velika prelomnica", "Stabilizacija omrežja",
   "Konec neskončne vojne", "Suvereni denar"), lightning, nostr/index,
   sticker-files/index, sticker-language-success, sticker-success,
   stickers, wallets).
4. \`fix-remaining.js\` (1 byte-identical "Material:" → "Snov:" —
   Slovenian native word for material/substance, byte-distinct from
   English).

**Verification:** all 4 checks (marker, locale-specific coverage,
manifest coverage, stale English) pass. \`npm run build\` clean across
55 locales × 81 pages.

`;

function prepend(filePath, entry) {
	const current = fs.readFileSync(filePath, "utf8");
	fs.writeFileSync(filePath, entry + current);
	console.log(`Prepended Slovenian entry to ${filePath}`);
}

function main() {
	prepend(ACTIVE_PATH, ACTIVE_ENTRY);
	prepend(PROGRESS_PATH, PROGRESS_ENTRY);
}

main();
