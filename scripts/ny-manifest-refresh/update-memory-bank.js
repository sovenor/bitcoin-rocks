#!/usr/bin/env node
/**
 * Prepend Chichewa (ny) refresh entry to memory-bank/activeContext.md
 * and bump the Step 5 counter in memory-bank/progress.md.
 *
 * Idempotent — safe to re-run.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const ENTRY = `## Chichewa (ny) manifest refresh — 2026-04-25

Ran \`/translate-manifest-refresh Chichewa\` end-to-end. Thirty-second
locale through the manifest-driven refresh pipeline. Chichewa
(also called Chinyanja or Nyanja) is one of the official languages
of Malawi and a recognized regional language in Zambia, Mozambique,
and Zimbabwe, with about 12 million native speakers — making
Chichewa an important Tier-3 audience for Bitcoin adoption in
southern Africa, where Bitcoin remittances and savings tools are
particularly relevant given regional currency instability.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current)
- Locale-specific gaps: 464 missing + 11 untranslated
- Manifest entries: 165 changed + 392 added
- Total flagged on first diff: **1,032 entries**
- All 4 verification checks passed: marker ✅ / locale-specific ✅ /
  manifest coverage ✅ / stale pre-V2 English ✅
- \`npm run build\` clean across 55 locales × 81 pages

**How the work was split:** Five helper scripts under
\`scripts/ny-manifest-refresh/\`:

1. **\`translate-inflation.js\`** (368 entries) — 327 per-currency ×
   13 currencies via templated function with Chichewa nominal forms
   (\`inIn\` "mu X" prepositional, \`noun\`, \`nounPl\` "ma X" Bantu
   plural prefix, \`label\`, \`existenceTitle\` "X omwe akugwiritsidwa
   ntchito", \`debtTitle\` "Ngongole yonse ya boma la X"). Plus 41
   non-currency keys including freedom cards (Yochepa/Yopanda
   Wolamulira Mmodzi/Yopanda Chilolezo/Yodzilamulira), inflation
   stories (Canada, Nigeria, Pennsylvania, Texas), source citations,
   and 5 manifest-changed hero/intro keys. Chichewa terminology —
   "Bitcoin" preserved as Latin (universal in Malawian crypto
   discourse), "ndalama" (money/currency), "boma" (government),
   "akaunti" (account loanword), "kampani" (company loanword),
   "kukwera kwa mitengo" (inflation, lit. "rising of prices"),
   "kuchuluka" (supply), "kusunga" (to save), "kusindikiza" (to
   print), "miliyoni"/"biliyoni" (million/billion).

2. **\`translate-rest-part1.js\`** (194 entries) — 404 + about +
   bank-runs + all 10 bitcoin-vs-* comparison pages. Straight ASCII
   quotes throughout (Chichewa convention). Inline
   \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia
   India demonetisation link in bitcoin-vs-cash and the gold.org
   supply-and-demand link in bitcoin-vs-gold. Comparison hero titles
   use "Kusiyana pakati pa <span class=\\"orange\\">Bitcoin</span> ndi
   <span class=\\"asset\\">Asset</span>" pattern. Key terminology —
   "chikwama" (wallet), "kuthawira ku banki" (bank run, lit. "running
   away to the bank"), "nkhokwe yathunthu" (full reserve), "kusunga
   nokha" (self-custody).

3. **\`translate-rest-part2.js\`** (305 entries) — business/* subtree
   including all 11 namespaces (accounting with "mtengo wapakhomo"
   cost-basis tracking, wallets with Strike Business + Square +
   IBEX/OpenNode/Breez/Zaprite, maps, stickers, FAQs, sticker-files/
   english, sticker-success, sticker-language-success), common with
   "Gwero:" for "Source:" and "Zomwe zikuchitika kenaka?" for
   "What's next?", compound-inflation-calculator, flyers,
   get-involved, lightning, nostr/index, sticker-files/index, and
   wallets.

4. **\`translate-rest-part3.js\`** (165 entries) — index homepage with
   all 62 home card labels (e.g. "Tiyerekezere" for "Let's compare",
   "Kodi kusiyana ndi chiyani?" for "What's the difference?",
   "Zojambula za m'misewu" for "Street art", "Falitsani mawu" for
   "Spread the word", "Kukhazikitsa gridi" for "Grid stabilization",
   "Chiyembekezo & mwayi" for "Hope & opportunity", "Thetsani
   nkhondo zopanda mathero" for "End endless war", "Ndalama
   yodzilamulira" for "Sovereign money"). Plus the remaining common
   keys (sticker names with Chichewa-localized prefix syntax, sticker
   tip text, sources_group labels), business/why customer-facing QR
   landing copy ("Bitcoin imalandiridwa pano"), the remaining buy
   keys (step headers, ATM/exchange/P2P sources), and the remaining
   business/accounting source rows.

5. **\`fix-identical.js\`** (11 byte-identical entries patched
   in-place) — \`bitcoin-vs-crypto::crypto\` "CRYPTO" →
   "CRYPTO (cryptocurrency)" with parenthetical Chichewa gloss, plus
   10 \`common_stickers_dimensions_*\` measurements rewritten with
   Chichewa "mainchi" (inches loanword) word instead of "in" — e.g.
   "21.59 cm x 4.6482 cm (8.5 mainchi x 1.83 mainchi)".

**Edge cases:**

- **464 missing keys is the largest locale-specific gap of any
  manifest refresh so far.** Chichewa was particularly incomplete
  pre-V2 — the entire \`inflation\` namespace (356 keys) was missing,
  along with all 62 \`index::home_card_label_*\` keys, 7 \`about\`
  contact card keys, 8 \`nostr/index\` brand-name keys, 7 \`business/
  accounting\` source-citation keys, 3 \`wallets\` source keys, and
  scattered keys across \`bank-runs\`, \`lightning\`, \`stickers\`,
  \`compound-inflation-calculator\`. The translate-inflation.js +
  translate-rest-part3.js scripts handled the bulk of these gaps via
  templated currency forms + 62 home card labels respectively.

- **Chichewa noun classes use "ma-" plural prefix.** Bantu noun-class
  agreement means most plural forms add "ma-" prefix (e.g. "dola" →
  "madola", "peso" → "ma peso"). Used consistently in \`nounPl\` and
  \`existenceTitle\` fields throughout the templated currency
  function.

- **"Yochepa"/"Yopanda Wolamulira Mmodzi"/"Yopanda Chilolezo"/
  "Yodzilamulira"** — the freedom card titles use the Chichewa
  feminine class-9 prefix "yo-" matching the implied "ndalama" (the
  noun "ndalama" is class 9, and Bitcoin descriptive adjectives
  agree).

- **"Kuthawira ku banki"** for "bank run" is a literal calque
  ("running away to the bank") that's been adopted in Malawian
  financial press for the Silicon Valley Bank coverage cycle. Kept
  as the standard term across bitcoin-vs-banks and bank-runs pages.

- **"Mainchi" for "inches"** is a Chichewa transliteration loanword
  (matches the equivalent Hausa "inci" handling). Used in the
  \`fix-identical.js\` rewrites to make sticker dimensions
  byte-distinct from English while remaining accurate.

`;

function prependActive() {
	const current = fs.readFileSync(ACTIVE, "utf8");
	if (current.includes("Chichewa (ny) manifest refresh — 2026-04-25")) {
		console.log("activeContext.md already contains ny entry — skipping");
		return;
	}
	fs.writeFileSync(ACTIVE, ENTRY + "\n" + current);
	console.log("Prepended ny entry to activeContext.md");
}

function bumpProgress() {
	const current = fs.readFileSync(PROGRESS, "utf8");
	// Match patterns like "31 of 54" / "31/54" and bump to 32/54.
	const patterns = [
		{ from: /\b31 of 54\b/g, to: "32 of 54" },
		{ from: /\b31\/54\b/g, to: "32/54" },
		{ from: /\b31 \/ 54\b/g, to: "32 / 54" },
	];
	let updated = current;
	let hits = 0;
	for (const p of patterns) {
		const before = updated;
		updated = updated.replace(p.from, p.to);
		if (updated !== before) hits++;
	}
	if (hits === 0) {
		console.log(
			"progress.md: no 31/54 counter found — may already be on 32 or use different format",
		);
		return;
	}
	fs.writeFileSync(PROGRESS, updated);
	console.log(`progress.md: bumped Step 5 counter (${hits} replacement[s])`);
}

prependActive();
bumpProgress();
