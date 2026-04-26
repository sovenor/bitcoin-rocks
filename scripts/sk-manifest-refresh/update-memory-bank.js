#!/usr/bin/env node
/**
 * Slovak — prepend the manifest-refresh log entry to activeContext.md
 * and bump the Step-5 counter in progress.md.
 *
 * Idempotent: re-running is a no-op once the markers are present.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const activePath = path.join(ROOT, "memory-bank", "activeContext.md");
const progressPath = path.join(ROOT, "memory-bank", "progress.md");

const skEntry = `## Slovak (sk) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Slovak\` end-to-end. **Locale 41/54
complete.** Slovak (\`Slovenčina\`) is the official language of Slovakia,
spoken natively by ~5M people. Slovak is West Slavic and very close to
Czech — the two are mutually intelligible, but vocabulary, orthography,
and grammar differ enough that a separate translation pass is required.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165
  changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 2 untranslated (locale was already
  on V1 with all home card labels, common subtree sources, nostr/index
  labels, and parts of the business/* subtree drifted in)
- Manifest entries: 165 changed + 392 added → **1,023 total entries
  flagged**

**Helper-script split (4 scripts under \`scripts/sk-manifest-refresh/\`):**

- \`translate-inflation.js\` — **368 entries**. Per-currency templated
  translator × 13 currencies (USD, EUR, AUD, BRL, CAD, GBP, ILS, INR,
  JPY, MXN, NZD, PHP, THB) with Slovak noun forms (\`longName\` locative
  "in X" e.g. "amerických dolároch", \`longNameNom\` nominative "American
  dollar", \`longNameGen\` genitive "of American dollar", \`noun\`,
  \`nounPlural\`, \`label\`, \`existenceTitle\` "X v obehu", \`debtTitle\`
  "Verejný dlh X-genitive") + formal "vy/váš" register throughout — the
  standard register for Slovak financial/educational copy. Plus 41
  non-currency keys: freedom cards (Vzácny / Decentralizovaný / Bez
  povolenia / Suverénny), stories (Kanada / Nigéria / Pensylvánia /
  Texas), sources, and 5 manifest-changed hero/intro keys.

- \`translate-rest-part1.js\` — **194 entries**. 404 + about + bank-runs +
  all 10 bitcoin-vs-* comparison pages. German-style low-then-high
  typographic quotation marks „…" matching standard Slovak typography.
  Slovak diacritics throughout (á, ä, č, ď, é, í, ĺ, ľ, ň, ó, ô, ŕ, š,
  ť, ú, ý, ž). Inline \`<a class="body-link">\` HTML preserved verbatim
  for the Wikipedia India demonetisation link in bitcoin-vs-cash and the
  gold.org supply-and-demand link in bitcoin-vs-gold. Slovak terminology
  used: "Bitcoin" preserved as Latin loanword (universal in Slovak
  crypto press); "peňaženka" (wallet — native term); "inflácia"
  (inflation); "kapitálový zisk" / "kapitálová strata" (capital
  gain/loss); "bankový run" (bank run, semi-anglicism — common in Slovak
  business press); "samoúschova" (self-custody — native compound);
  "blockchain" kept as anglicism; "bez povolenia" (permissionless —
  native phrase); "riziko protistrany" (counterparty risk); "vzácny" /
  "pevný strop" (scarce/hard cap). Numeric format with comma decimal +
  space thousands per Slovak convention — "153,9 mld. USD" / "10,82
  bilióna USD" / "1,42 %"; long scale "milión" / "miliarda" / "bilión"
  matching Slovak convention.

- \`translate-rest-part2.js\` — **461 entries**. business/* subtree (all
  11 namespaces — accounting with "nákladová základňa" cost-basis
  tracking, why as customer-facing QR landing "Tu prijímame Bitcoin",
  wallets with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite,
  maps, stickers, FAQs, sticker-files/english/index), buy, common with
  "Zdroj:" for "Source:" and "Čo bude ďalej?" for "What's next?",
  compound-inflation-calculator, flyers, get-involved, index homepage
  with all 62 home card labels (e.g. "Porovnajme" for "Let's compare",
  "V čom je rozdiel?" for "What's the difference?", "Pouličné umenie"
  for "Street art", "Veľký zlom" for "The great equalizer",
  "Stabilizácia siete" for "Grid stabilization", "Nádej a príležitosť"
  for "Hope and opportunity", "Koniec nekonečnej vojny" for "End forever
  wars", "Suverénne peniaze" for "Sovereign money"), lightning,
  nostr/index, sticker-files/index, sticker-language-success,
  sticker-success, stickers, wallets.

- \`fix-untranslated.js\` — **1 byte-identical entry** patched in-place:
  \`buy_platform_feature_p2p\` "Peer-to-peer" → "Priamo medzi účastníkmi
  (peer-to-peer)" so the Slovak value is byte-distinct from English
  while still retaining the "P2P" anglicism that's universal in Slovak
  Bitcoin press. Bumps \`@metadata.last-updated\` on the touched file.

**Verification:** All 4 checks pass — marker, locale-specific coverage,
manifest coverage, stale pre-V2 English cross-check.

**Build:** \`npm run build\` clean across 55 locales × 81 pages.

**Edge cases:**
- Slovak helper structure is a near-direct port of \`cs-manifest-refresh/\`
  (Czech) — same script names, same key structure, same currency table
  shape — with full Slovak orthography swapped in across every string.
  Keyword-level differences from Czech: "peňaženka" not "peněženka",
  "mesiac" not "měsíc", "rozdiel" not "rozdíl", "bilióna" not "bilionu"
  (Slovak genitive ends in -a not -u for masculine inanimate),
  "milión/miliarda/bilión" with ó instead of Czech "milion/miliarda/
  bilion".
- Slovak uses formal "vy" plural (capitalized "Vy" in personal letters
  but lowercase in marketing copy) consistently, matching Slovak Bitcoin
  press conventions (Kryptomagazin.sk, Bitcoinista.sk, Trend).
- "1,42 %" with space before %; "153,9 mld. USD" with comma decimal +
  space thousands matches Slovak governmental statistics formatting
  (Štatistický úrad SR, NBS).

**Remaining:** 13 locales — sl, sv, sw, ta, th, tl, tr, ur, uz, vi, yo,
zh, zu.

`;

let active = fs.readFileSync(activePath, "utf8");
if (!active.includes("## Slovak (sk) manifest refresh — April 25, 2026")) {
	active = skEntry + active;
	fs.writeFileSync(activePath, active);
	console.log("Prepended Slovak entry to activeContext.md");
} else {
	console.log("Slovak entry already present in activeContext.md");
}

let progress = fs.readFileSync(progressPath, "utf8");
const before = progress;
progress = progress.replace(/Step 5 \([^)]*\): \*\*40\/54 locales/g, "Step 5 (per-language re-translation): **41/54 locales");
progress = progress.replace(/\*\*40\/54 locales\*\*/g, "**41/54 locales**");
progress = progress.replace(/40\/54 done/g, "41/54 done");
if (progress !== before) {
	fs.writeFileSync(progressPath, progress);
	console.log("Bumped Step 5 counter in progress.md");
} else {
	console.log("progress.md counter not in expected format — manual review");
}
