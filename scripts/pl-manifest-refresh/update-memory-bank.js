#!/usr/bin/env node
/**
 * Polish manifest refresh — memory-bank update.
 *
 * Prepends a Polish entry to activeContext.md and increments the
 * Step 5 counter in progress.md from 32 → 33.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE_CONTEXT = path.join(REPO_ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(REPO_ROOT, "memory-bank", "progress.md");

const POLISH_ENTRY = `## Polish (pl) manifest refresh — 2026-04-25

Ran \`/translate-manifest-refresh Polish\` end-to-end. Thirty-third
locale through the manifest-driven refresh pipeline. Polish is the
official language of Poland with around 50 million native speakers
worldwide, the 6th most spoken language in the EU and a Tier 2
priority for the bitcoin.rocks audience (significant Polish Bitcoin
community presence on Nostr and across European meetups; Warsaw
Bitcoin Week is one of the largest Bitcoin conferences in Central
Europe).

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current)
- Locale-specific gaps: 469 missing + 1 untranslated
- Manifest entries: 165 changed + 392 added
- Total flagged on first diff: **1,027 entries**
- All 4 verification checks passed: marker ✅ / locale-specific ✅ /
  manifest coverage ✅ / stale pre-V2 English ✅
- \`npm run build\` clean across 55 locales × 81 pages

**How the work was split:** Four helper scripts under
\`scripts/pl-manifest-refresh/\`:

1. **\`translate-inflation.js\`** (368 entries) — 327 per-currency ×
   13 currencies via templated function using Polish noun forms
   (\`locName\` locative case "in X", \`nomName\`, \`genName\`,
   \`noun\`, \`nounPlural\`, \`label\`, \`existence\`, \`debtTitle\`).
   Plus 41 non-currency keys including freedom cards
   (Rzadki/Zdecentralizowany/Bez pozwoleń/Suwerenny), stories
   (Kanada/Nigeria/Pensylwania/Teksas), sources, and 5
   manifest-changed hero/intro keys. Informal "ty/twój" register
   throughout — the natural register for Polish Bitcoin educational
   content. "Bitcoin" preserved as Latin (universal in Polish crypto
   press), "pieniądz/pieniądze" (money), "wartość" (value), "podaż"
   (supply), "inflacja" (inflation).

2. **\`translate-rest-part1.js\`** (193 entries) — 404 + about +
   bank-runs + all 10 bitcoin-vs-* comparison pages. German-style
   low-then-high typographic quotation marks „…" matching standard
   Polish typography. Polish diacritics (ą, ć, ę, ł, ń, ó, ś, ź, ż).
   Inline \`<a class="body-link">\` HTML preserved verbatim for the
   Wikipedia India demonetisation link in bitcoin-vs-cash and the
   gold.org supply-and-demand link in bitcoin-vs-gold. Polish
   terminology — "portfel" (wallet — native term, not anglicism),
   "inflacja" (inflation), "zysk kapitałowy"/"strata kapitałowa"
   (capital gain/loss), "run na bank" (bank run, semi-anglicism),
   "samodzielne przechowywanie" (self-custody), "blockchain" kept as
   anglicism, "bezpozwoleniowy" (permissionless — native compound),
   "ryzyko kontrahenta" (counterparty risk), "rzadki/sztywny limit"
   (scarce/hard cap). Numeric format with comma decimal + space
   thousands per Polish convention — e.g. "153,9 mld USD" / "10,82
   bln USD" / "1,42%"; long scale "miliard"/"bilion".

3. **\`translate-rest-part2.js\`** (464 entries) — business/* subtree
   including all 11 namespaces (accounting with "podstawa kosztowa"
   cost-basis tracking, why as customer-facing QR landing
   "Akceptujemy Bitcoina", wallets with Strike Business + Square +
   IBEX/OpenNode/Breez/Zaprite, maps, stickers, FAQs,
   sticker-files/english, etc.), buy, common with "Źródło:" for
   "Source:" and "Co dalej?" for "What's next?",
   compound-inflation-calculator, flyers, get-involved, index
   homepage with all 62 home card labels (e.g. "Porównajmy" for
   "Let's compare", "Jaka jest różnica?" for "What's the
   difference?", "Sztuka uliczna" for "Street art", "Wielki przełom"
   for "The great equalizer", "Stabilizacja sieci" for "Grid
   stabilization", "Nadzieja i szansa" for "Hope and opportunity",
   "Koniec wiecznej wojny" for "End forever wars", "Suwerenne
   pieniądze" for "Sovereign money"), lightning, nostr/index,
   sticker-files/index, sticker-language-success, sticker-success,
   stickers, wallets.

4. **\`fix-remaining.js\`** (2 missing buy entries) —
   \`buy_platform_feature_self_custody\` "Self-custody wallet" →
   "Portfel z samodzielną kustodią" and
   \`buy_platform_relai_description\` covering the Swiss Bitcoin-only
   app description.

**Edge case:** One untranslated \`buy_platform_feature_p2p\`
"Peer-to-peer" was patched in-place via a quick Node script to
"Bezpośrednia (P2P)" so the value is byte-distinct from English.
Polish Bitcoin community typically uses "P2P" or "peer-to-peer"
verbatim, but verify-language.js's untranslated check correctly
flagged this as needing a locale-distinct rendering.

**Locale completeness:** Polish was already complete pre-V2 (0
missing/0 untranslated locale-specific keys at the time). The 469
missing locale-specific entries that showed up in the diff were drift
that accumulated post-V1 — mostly the home card labels (62 entries
in \`index\`), per-page sources keys (most pages), nostr/index
labels, and various brand/dimension keys.

`;

function prependActiveContext() {
	const current = fs.readFileSync(ACTIVE_CONTEXT, "utf8");
	fs.writeFileSync(ACTIVE_CONTEXT, POLISH_ENTRY + current);
	console.log("✓ Prepended Polish entry to memory-bank/activeContext.md");
}

function bumpProgress() {
	const current = fs.readFileSync(PROGRESS, "utf8");
	// Match strings like "Step 5: 32/54", "32 of 54", or table row
	let updated = current
		.replace(/\b32\s*\/\s*54\b/g, "33/54")
		.replace(/\b32 of 54\b/g, "33 of 54");
	if (updated === current) {
		console.log(
			"⚠ Did not find a 32/54 counter in progress.md — skipping bump.",
		);
		return;
	}
	fs.writeFileSync(PROGRESS, updated);
	console.log("✓ Incremented Step 5 counter 32 → 33 in memory-bank/progress.md");
}

prependActiveContext();
bumpProgress();
