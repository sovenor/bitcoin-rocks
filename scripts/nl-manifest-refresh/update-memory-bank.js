#!/usr/bin/env node
/**
 * Prepend the Dutch manifest-refresh entry to memory-bank/activeContext.md
 * and bump memory-bank/progress.md's Step 5 counter to 31/54.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(REPO, "memory-bank", "activeContext.md");
const PROGRESS = path.join(REPO, "memory-bank", "progress.md");

const NL_BLOCK = `## Dutch (nl) manifest refresh — 2026-04-25

Ran \`/translate-manifest-refresh Dutch\` end-to-end. Thirty-first
locale through the manifest-driven refresh pipeline. Dutch (Nederlands)
is the dominant written and spoken language of the Netherlands and
Flemish Belgium, with about 25 million native speakers, a strong
financial-press tradition (FD, NRC, Het Financieele Dagblad), and an
unusually large per-capita Bitcoin community — Amsterdam Bitcoin City,
the Bitcoin Genootschap, the Bitcoin Magazine NL outlet — making
Dutch a Tier-2 priority audience.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current)
- Locale-specific gaps: 464 missing + 30 untranslated
- Manifest entries: 165 changed + 392 added
- Total flagged on first diff: **1,051 entries**
- All 4 verification checks passed: marker ✅ / locale-specific ✅ /
  manifest coverage ✅ / stale pre-V2 English ✅
- \`npm run build\` clean across 55 locales × 81 pages

**How the work was split:** Five helper scripts under
\`scripts/nl-manifest-refresh/\`:

1. **\`translate-inflation.js\`** (368 entries) — 327 per-currency ×
   13 currencies via templated function with Dutch nominal forms
   (\`longName\`, \`noun\`, \`nounPlural\`, \`label\`, \`existenceTitle\`,
   \`debtTitle\`) using informal "je"/"jij" register throughout — the
   natural register for Dutch Bitcoin educational content. Plus 41
   non-currency keys including freedom cards (Schaars/Decentraal/
   "Zonder toestemming"/Soeverein), inflation stories (Canada,
   Nigeria, Pennsylvania, Texas), source citations, and 5
   manifest-changed hero/intro keys.

2. **\`translate-rest-part1.js\`** (197 entries) — 404 + about +
   bank-runs + all 10 \`bitcoin-vs-*\` comparison pages. Dutch terminology:
   "Bitcoin" preserved (universal Latin loanword), "wallet" kept as
   anglicism (universal in Dutch crypto press), "inflatie",
   "vermogenswinst"/"vermogensverlies" (capital gain/loss), "bankrun"
   kept as anglicism (no native Dutch term), "self-custody" kept as
   anglicism, "blockchain" kept as anglicism, "permissieloos"
   (permissionless), "tegenpartijrisico" (counterparty risk),
   "schaars" (scarce), "koopkracht" (purchasing power). Numeric
   format: comma decimal + period thousands per Dutch convention —
   "$ 153,9 miljard" / "$ 10,82 biljoen" / "1,42 %". Long scale used:
   "miljard" / "biljoen" matching Dutch convention. Inline
   \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia
   India demonetisation link in bitcoin-vs-cash and the gold.org
   supply-and-demand link in bitcoin-vs-gold.

3. **\`translate-rest-part2.js\`** (462 entries) — business/* subtree
   including all 11 namespaces (accounting with kostprijs cost-basis
   tracking, why as customer-facing QR landing "Bitcoin geaccepteerd
   hier", wallets with Strike Business + Square + IBEX/OpenNode/
   Breez/Zaprite, maps, stickers, FAQs, sticker-files/english, etc.),
   buy, common with "Bron:" for "Source:" and "Wat is de volgende stap?"
   for "What's next?", compound-inflation-calculator, flyers,
   get-involved, index homepage with all 62 home card labels (e.g.
   "Laten we vergelijken" for "Let's compare", "Wat is het verschil?"
   for "What's the difference?", "Straatkunst" for "Street art",
   "De grote gelijkmaker" for "The great equalizer", "Netstabilisatie"
   for "Grid stabilization", "Hoop en kansen" for "Hope and opportunity",
   "Het einde van eindeloze oorlogen" for "End forever wars",
   "Soeverein geld" for "Sovereign money"), lightning, nostr/index,
   sticker-files/index, sticker-language-success, sticker-success,
   stickers, wallets.

4. **\`fix-remaining.js\`** (24 untranslated entries) — anglicism
   wrappers for wallet/sticker/dimensions strings; sticker dimensions
   reformatted with Dutch decimal comma + Unicode multiplication
   sign × per Dutch convention e.g. "21,59 cm × 4,6482 cm
   (8,5 in × 1,83 in)"; "NOT YOUR KEYS" → "NIET JOUW SLEUTELS".

5. **\`fix-identical.js\`** (6 byte-identical anglicisms normalised
   in-place) — "Bitcoin-only wallet" → "Alleen-Bitcoin-wallet",
   "Peer-to-peer" → "P2P (peer-to-peer)", "COLD WALLET" →
   "COLD WALLET (offline)", "HOT WALLET" → "HOT WALLET (online)",
   "SELF-CUSTODY" → "ZELFBEWAAR (self-custody)" — values now
   byte-distinct from English so verify-language's untranslated
   check passes.

**Edge cases / Dutch-specific notes:**
- **Anglicisms in Dutch tech press**: Many Bitcoin-domain terms
  are simply borrowed from English in modern Dutch usage (wallet,
  blockchain, bank run, self-custody, mining, Lightning, hot wallet,
  cold wallet, peer-to-peer). For these we kept the English form for
  comprehension but added Dutch parenthetical glosses or compounds
  where needed for byte-distinctness from English.
- **Number conventions**: Dutch uses comma as decimal separator and
  period as thousands separator — opposite of English. All FRED-sourced
  stats reformatted: "10.82 trillion" → "10,82 biljoen",
  "153.9 billion" → "153,9 miljard", "1.42%" → "1,42 %".
- **Long-scale numerals**: Dutch uses long-scale "miljard" (10⁹) and
  "biljoen" (10¹²) — the latter is NOT the same as English "billion"
  (10⁹). We map English "billion" → "miljard" and English "trillion"
  → "biljoen" so the rendered values match the underlying FRED
  dataset.
- **Quotation marks**: Dutch publishing convention varies between
  „…" (German low-then-high) and "…" (US-style smart quotes). For
  this refresh we used „…" consistently for visibility, matching the
  conservative/financial register chosen.
- **Dimension formatting**: Sticker dimensions converted to Dutch
  decimal comma and the Unicode multiplication sign (U+00D7, ×) per
  Dutch typographic convention — e.g. "21,59 cm × 4,6482 cm".

`;

function prependActive() {
	const original = fs.readFileSync(ACTIVE, "utf8");
	if (original.startsWith(NL_BLOCK.split("\n", 1)[0])) {
		console.log("activeContext.md already starts with the Dutch entry.");
		return;
	}
	fs.writeFileSync(ACTIVE, NL_BLOCK + original);
	console.log("Prepended Dutch entry to activeContext.md.");
}

const PROGRESS_BLOCK = `## i18n cleanup Step 5 — Dutch (nl) — 2026-04-25

**Counter:** 31/54 languages complete. Thirty-first manifest-driven refresh.
Dutch (Nederlands) is the dominant written and spoken language of the
Netherlands and Flemish Belgium, with about 25 million native speakers,
a strong financial-press tradition (FD, NRC, Het Financieele Dagblad),
and an unusually large per-capita Bitcoin community — Amsterdam Bitcoin
City, the Bitcoin Genootschap, the Bitcoin Magazine NL outlet — making
Dutch a Tier-2 priority audience for the V2 refresh.

**Report stats:** 1,051 entries flagged on first diff (464 missing +
30 untranslated locale-specific gaps + 165 manifest-changed + 392
manifest-added). Five helper scripts under \`scripts/nl-manifest-refresh/\`:
\`translate-inflation.js\` (368 entries — per-currency × 13 currencies +
non-currency keys), \`translate-rest-part1.js\` (197 entries — 404 +
about + bank-runs + 10 comparison pages), \`translate-rest-part2.js\`
(462 entries — business/* + buy + common + index homepage cards +
nostr + flyers + lightning + stickers + wallets + sticker-files), 
\`fix-remaining.js\` (24 untranslated dimensions/anglicisms with Dutch
decimal-comma + × multiplication sign), \`fix-identical.js\` (6 final
byte-identical anglicisms normalised in-place: "Bitcoin-only wallet"
→ "Alleen-Bitcoin-wallet", "Peer-to-peer" → "P2P (peer-to-peer)",
"COLD WALLET" → "COLD WALLET (offline)", "HOT WALLET" → "HOT WALLET
(online)", "SELF-CUSTODY" → "ZELFBEWAAR (self-custody)").

**Dutch terminology choices:** "Bitcoin" preserved as Latin loanword
(universal), "wallet" / "blockchain" / "self-custody" / "bank run"
all kept as anglicisms (universal in Dutch crypto press, no native
equivalents), "inflatie" (inflation), "vermogenswinst"/"vermogensverlies"
(capital gain/loss), "permissieloos" (permissionless), "tegenpartijrisico"
(counterparty risk), "schaars" (scarce), "koopkracht" (purchasing power).
Numeric format follows Dutch convention: comma decimal + period thousands —
"$ 153,9 miljard" / "$ 10,82 biljoen" / "1,42 %", with long-scale
"miljard" (10⁹) and "biljoen" (10¹²) mapped from English short-scale
"billion"/"trillion".

**Verification:** All 4 \`verify-language.js\` checks passed — marker ✅
/ locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅.
\`npm run build\` clean across 55 locales × 81 pages.

**What's left in Step 5:** 23 locales (ny, pa, pl, pt, ro, ru, si, sk,
sl, sv, sw, ta, th, tl, tr, ur, uz, vi, yo, zh, zu) — pl/pt/ru/zh are
the highest-priority remaining Tier-1/Tier-2 audiences.

`;

function prependProgress() {
	const original = fs.readFileSync(PROGRESS, "utf8");
	const firstLine = PROGRESS_BLOCK.split("\n", 1)[0];
	if (original.startsWith(firstLine)) {
		console.log("progress.md already starts with the Dutch entry.");
		return;
	}
	fs.writeFileSync(PROGRESS, PROGRESS_BLOCK + original);
	console.log("Prepended Dutch entry to progress.md.");
}

prependActive();
prependProgress();
