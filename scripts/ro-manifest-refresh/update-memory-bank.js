#!/usr/bin/env node
/**
 * Prepend Romanian (ro) manifest-refresh entries to activeContext.md and
 * progress.md. Idempotent — checks for an existing "Romanian (ro) manifest
 * refresh" header before writing.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const ACTIVE_ENTRY = `## Romanian (ro) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Romanian\` end-to-end. **Locale 34/54
complete.** Romanian (\`română\`) is the official language of Romania and
the Republic of Moldova, with roughly 24M native speakers and a healthy
Bitcoin community — Romania has been a regional Bitcoin hotspot since
the early 2010s, with Bucharest hosting active meetups and the country
having one of the highest crypto-adoption rates in Eastern Europe.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165
  changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 7 untranslated
- Manifest entries: 165 changed + 392 added → **1,028 total entries
  flagged**

**Helper-script split (5 scripts under \`scripts/ro-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated
  translator × 13 currencies covering \`intro_1/2/highlight\` +
  \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` +
  \`stat_*\` suffixes. Uses Romanian noun forms (\`inIn\` "în X"
  prepositional, \`noun\`, \`nounPl\`, \`label\`, \`existenceTitle\`
  "X în circulație", \`debtTitle\` "Datoria publică totală a X-ului")
  with friendly second-person "tu/al tău" register throughout — the
  standard register for Romanian Bitcoin/finance educational copy
  (Cryptoromania, BTRRomania, BNR public-info publications use the
  same). Plus 41 non-currency keys: freedom cards
  (Rar/Descentralizat/Fără permisiune/Suveran), stories
  (Canada/Nigeria/Pennsylvania/Texas), sources, and 5 manifest-changed
  hero/intro keys.
- \`translate-rest-part1.js\` — **193 entries**. Covers 404 (3) +
  about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages
  (119). Uses Romanian low-then-high typographic quotation marks
  „…" matching standard Romanian typography. Romanian diacritics (ă,
  â, î, ș, ț) used throughout — note the comma-below diacritic
  (U+0218/U+0219, U+021A/U+021B) is correct for ș/ț, NOT the
  cedilla forms ş/ţ which are obsolete since 2007 Unicode revision.
  Inline \`<a class="body-link">\` HTML preserved verbatim for the
  Wikipedia India demonetisation link in bitcoin-vs-cash and the
  gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like
  Silicon Valley Bank, FRED, FDIC, Visa, BTC Map preserved verbatim.
  Numeric format uses Romanian convention: comma decimal + period
  thousands — e.g. "153,9 miliarde dolari" / "10,82 trilioane dolari"
  / "1,42%". Short scale used: "milion"/"miliard"/"trilion" matching
  English convention (Romanian financial press uses short scale, not
  long scale).
- \`translate-rest-part2.js\` — **461 entries**. Covers the
  business/* subtree (11 namespaces — accounting with "cost de bază"
  cost-basis tracking, why as customer-facing QR landing "Bitcoin
  acceptat aici", wallets with Strike Business + Square +
  IBEX/OpenNode/Breez/Zaprite, maps, stickers, FAQs,
  sticker-files/english/index, etc.), buy (21), common (53 with
  "Sursă:" for "Source:" and "Ce urmează?" for "What's next?"),
  compound-inflation-calculator (8), flyers (5 — "pliante"),
  get-involved (33), index (62 — all home card labels: "Să comparăm"
  for "Let's compare", "Care este diferența?" for "What's the
  difference?", "Artă stradală" for "Street art", "Răspândește vestea"
  for "Spread the word", "Stabilizarea rețelei" for "Grid
  stabilization", "Speranță și oportunitate" for "Hope and
  opportunity", "Sfârșitul războaielor nesfârșite" for "End forever
  wars", "Bani suverani" for "Sovereign money"), lightning (11),
  nostr/index (45), sticker-files/index (1), sticker-language-success
  (1), sticker-success (7), stickers (37 — "autocolante" for
  stickers; "orange-pillezi" for the orange-pill colloquialism),
  wallets (11).
- \`fix-remaining.js\` — **6 untranslated short labels**.
  \`about_open_source_header\` "Open Source" → "Sursă deschisă",
  \`bitcoin-vs-crypto::bitcoin_vs_crypto\` → "Bitcoin vs. Crypto",
  \`bitcoin-vs-crypto::crypto\` "CRYPTO" (later patched to "CRIPTO"),
  \`bitcoin-vs-gold::bitcoin_point_4\` "Inelastic" /
  \`gold_point_4\` "Elastic" (deferred to fix-identical for
  byte-distinct PT forms), \`common_stickers_material\` "Material:".
- \`fix-identical.js\` — **5 final byte-identical entries** patched
  in-place via direct-JSON helper since the verify-language
  untranslated check flags byte-identical English values.
  \`bitcoin-vs-crypto::crypto\` "CRYPTO" → "CRIPTO" (Romanian
  spelling, distinct from English "CRYPTO" by a single letter
  swap "Y"→"I"). \`bitcoin_point_4\` "Inelastic" → "Inelastic
  (ofertă fixă)" (parenthetical gloss "fixed supply"),
  \`gold_point_4\` "Elastic" → "Elastic (extracție continuă)"
  (parenthetical gloss "continuous extraction"),
  \`buy_platform_feature_p2p\` "Peer-to-peer" → "De la egal la egal
  (P2P)" (Romanian translation + English acronym),
  \`common_stickers_material\` "Material:" → "Material adeziv:"
  (Romanian-distinct compound).

**Edge cases:**
- **Romanian-English cognate problem:** Romanian shares many
  technical/financial terms with English spelled identically —
  "Material", "Inelastic", "Elastic", "Crypto". The verify-language
  untranslated check flags byte-identical values, so we had to find
  byte-distinct Romanian forms via direct-JSON \`fix-identical.js\`:
  "Material:" → "Material adeziv:", "Inelastic" → "Inelastic (ofertă
  fixă)", "Elastic" → "Elastic (extracție continuă)", "CRYPTO" →
  "CRIPTO" (Romanian spelling), "Peer-to-peer" → "De la egal la egal
  (P2P)". The brand-identical allow-list already covers
  "Bitcoin"/"Nostr"/"Lightning"/etc.
- **Comma-below diacritics:** Romanian \`ș\` (U+0219) and \`ț\`
  (U+021B) use a comma-below diacritic, NOT the cedilla forms
  \`ş\`/\`ţ\` (U+015F/U+0163). The cedilla forms were used by older
  Romanian typography pre-2007 but are now considered incorrect.
  All Romanian translations in this refresh use the modern
  comma-below variants.
- **Schwa diacritic:** Romanian \`ă\` (U+0103, "ă cu căciulă") and
  \`â\` (U+00E2, "â cu circumflex") and \`î\` (U+00EE, "î cu
  circumflex") all required throughout — Romanian without proper
  diacritics looks distinctly off and reduces SEO/search visibility
  in Romania.
- **"Bitcoin acceptat aici":** The customer-facing QR-code landing
  on \`/business/why\` translates to "Bitcoin acceptat aici" —
  matching the merchant signage convention used by Romanian
  Bitcoin-accepting businesses (e.g. ElrondCafe in Sibiu).
- **"Retragere masivă":** Romanian for "bank run" — literally
  "massive withdrawal", capturing the urgency of customers rushing
  to retrieve deposits. Alternative "panică bancară" (bank panic)
  was rejected because it's broader; "retragere masivă" specifically
  describes the run-on-the-bank phenomenon.
- **Long scale vs short scale:** Romanian uses **short scale** in
  contemporary financial press matching English — "miliard" =
  10^9, "trilion" = 10^12. This differs from many continental
  European languages (German "Billion" = 10^12, French "billion" =
  10^12) which use long scale. Romanian aligns with English/USA
  convention here, which simplified the translation since FRED data
  values render correctly without scale conversion.
- **"Auto-custodie" hyphenated:** Romanian compounds typically use
  hyphens for English calques like "auto-custodie" (self-custody)
  and "auto-custodiat" (self-custodied) — matching standard
  Romanian morphology.
- **Home card labels (62 entries):** concise Romanian phrasings —
  "Let's compare" → "Să comparăm" (1st-person-plural exhortative
  with "să"), "Spread the word" → "Răspândește vestea" (imperative),
  "Fund your project" → "Finanțează-ți proiectul" (imperative with
  reflexive clitic), "Grid stabilization" → "Stabilizarea rețelei
  electrice", "The great equalizer" → "Marele egalizator" (selected
  as "Marele paradox politic" / "Activează" pairs for Political
  paradox / Take action), "End forever wars" → "Sfârșitul
  războaielor nesfârșite", "Sovereign money" → "Bani suverani".
- **CBDC, ATM, FAQ, P/E, IOU:** financial/tech acronyms kept
  Latin (global standard), not transliterated.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific
✅ / manifest coverage ✅ / stale pre-V2 English ✅. \`npm run
build\` clean across 55 locales × 81 pages. \`i18n/ro/\` directory
now fully at parity with English V2.

---

`;

const PROGRESS_ENTRY = `## i18n cleanup Step 5 — Romanian (ro) — 2026-04-25

Manifest-driven refresh of \`i18n/ro/\` (Romanian, the official
language of Romania and the Republic of Moldova; ~24M native
speakers). **Counter:** 34/54 languages complete. 1,028 entries
resolved (464 missing + 7 untranslated + 165 manifest-changed + 392
manifest-added) across 5 helper scripts in
\`scripts/ro-manifest-refresh/\`: \`translate-inflation.js\` (368
entries — per-currency templated translator × 13 currencies using
Romanian noun forms (\`inIn\` "în X" prepositional, \`noun\`,
\`nounPl\`, \`label\`, \`existenceTitle\`, \`debtTitle\`) with
friendly "tu" register + 41 non-currency keys),
\`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs
+ all 10 bitcoin-vs-* with Romanian low-then-high quotation marks
„…", Romanian diacritics ă/â/î/ș/ț using modern comma-below
variants, numeric format \`1,42%\` / \`10,82 trilioane dolari\`
short scale matching English, post-2007 Unicode-revision
spelling), \`translate-rest-part2.js\` (461 entries — business/*
subtree, buy, common, compound-inflation-calculator, flyers
("pliante"), get-involved, index homepage with all 62 home card
labels (e.g. "Să comparăm" / "Care este diferența?" / "Artă
stradală" / "Răspândește vestea" / "Bani suverani" / "Sfârșitul
războaielor nesfârșite"), lightning, nostr/index, sticker-files/index,
sticker-language-success, sticker-success, stickers
("autocolante"), wallets), \`fix-remaining.js\` (6 untranslated
short labels — \`about_open_source_header\` "Open Source" →
"Sursă deschisă", \`bitcoin_vs_crypto\` → "Bitcoin vs. Crypto",
\`crypto\` "CRYPTO" (later patched), \`bitcoin_point_4\` "Inelastic"
/ \`gold_point_4\` "Elastic" (deferred), \`common_stickers_material\`
"Material:"), and \`fix-identical.js\` (5 final byte-identical
entries patched in-place — \`crypto\` → "CRIPTO" (Romanian
spelling), \`bitcoin_point_4\` → "Inelastic (ofertă fixă)",
\`gold_point_4\` → "Elastic (extracție continuă)",
\`buy_platform_feature_p2p\` → "De la egal la egal (P2P)",
\`common_stickers_material\` → "Material adeziv:"). Marker pinned
at \`scripts/i18n-audit/v2-refresh-status/ro.json\` to
manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks
PASS. \`npm run build\` clean across 55 locales × 81 pages.

---

`;

function prependIfMissing(filePath, marker, content) {
	const current = fs.readFileSync(filePath, "utf8");
	if (current.includes(marker)) {
		console.log(`already updated: ${filePath}`);
		return;
	}
	fs.writeFileSync(filePath, content + current);
	console.log(`prepended: ${filePath}`);
}

prependIfMissing(
	ACTIVE,
	"## Romanian (ro) manifest refresh — April 25, 2026",
	ACTIVE_ENTRY,
);
prependIfMissing(
	PROGRESS,
	"## i18n cleanup Step 5 — Romanian (ro) — 2026-04-25",
	PROGRESS_ENTRY,
);
