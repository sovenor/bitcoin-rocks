#!/usr/bin/env node
/**
 * Sinhala manifest refresh — memory-bank updater.
 * Prepends a new section to memory-bank/activeContext.md and bumps
 * memory-bank/progress.md's Step 5 counter.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const NEW_ENTRY = `## Sinhala (si) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Sinhala\` end-to-end. **Locale 36/54
complete.** Sinhala (\`සිංහල\`) is the majority language of Sri Lanka,
spoken natively by ~16M people. Sri Lanka has a small but active
Bitcoin/crypto community despite restrictive regulation.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165
  changed + 392 added = 557 total)
- Locale-specific gaps: 568 missing + 40 untranslated (locale was
  incomplete pre-V2 — entire business/faq, business/wallets,
  business/index sections + buy platform descriptions + common
  sticker dimensions + get-involved business cards were never
  translated)
- Manifest entries: 165 changed + 392 added → **1,165 total entries
  flagged**

**Helper-script split (6 scripts under \`scripts/si-manifest-refresh/\`):**

- \`translate-inflation.js\` — **368 entries**. Per-currency templated
  translator × 13 currencies (USD, EUR, AUD, BRL, CAD, GBP, ILS, INR,
  JPY, MXN, NZD, PHP, THB) covering \`intro_1/2/highlight\` +
  \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` +
  \`stat_*\` suffixes. Uses Sinhala noun forms with respectful "ඔබ"
  (you, polite) register throughout. Currency labels in Sinhala script:
  ඇමෙරිකානු ඩොලර්, යුරෝ, ඕස්ට්‍රේලියානු ඩොලර්, බ්‍රසීලියානු රියාල්,
  කැනේඩියානු ඩොලර්, බ්‍රිතාන්‍ය පවුම්, ඊශ්‍රායල් ෂෙකල්, ඉන්දියානු රුපියල්,
  ජපන් යෙන්, මෙක්සිකානු පේසෝ, නවසීලන්ත ඩොලර්, පිලිපීන පේසෝ, තායි බාත්.
  Plus 41 non-currency keys: freedom cards
  (දුර්ලභ/විමධ්‍යගත/අවසරයකින් තොර/ස්වෛරී), stories
  (කැනඩාව/නයිජීරියාව/පෙන්සිල්වේනියාව/ටෙක්සාස්), sources, and 5
  manifest-changed hero/intro keys.
- \`translate-rest-part1.js\` — **193 entries**. 404 page + about
  + bank-runs + all 10 bitcoin-vs-* comparison pages. Sinhala script
  body throughout, "Bitcoin"/brand names preserved as Latin loanwords
  (universal in Sinhala crypto press). Sinhala terminology:
  "පසුම්බිය" (wallet), "උද්ධමනය" (inflation),
  "ප්‍රාග්ධන ලාභය"/"ප්‍රාග්ධන පාඩුව" (capital gain/loss),
  "බැංකු දිවීම" (bank run), "ස්වයං-ආරක්ෂණය" (self-custody),
  "බ්ලොක්චේන්" (kept as loanword),
  "සම්පූර්ණ-සංචිත"/"භාගික-සංචිත" (full/fractional reserve).
- \`fix-extra-cbdc-visa.js\` — **13 entries**. Sinhala-specific extras
  in bitcoin-vs-cbdc and bitcoin-vs-visa namespaces (point summaries
  not in the shared part1 mapping).
- \`translate-rest-part2.js\` — **453 entries**. business/* subtree
  (accounting with "පිරිවැය පදනම" cost-basis tracking, why as
  customer-facing QR landing "අපි Bitcoin පිළිගනිමු", wallets with
  Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, maps,
  stickers, sticker-files/english) + buy + common with "මූලාශ්‍රය:" for
  "Source:" and "ඊළඟට කුමක්ද?" for "What's next?" +
  compound-inflation-calculator + flyers ("අත්පත්‍රිකා") + get-involved
  + index homepage with all 62 home card labels (e.g.
  "අපි සංසන්දනය කරමු" for "Let's compare", "වෙනස කුමක්ද?" for "What's
  the difference?", "වීදි කලාව" for "Street art",
  "වචනය ව්‍යාප්ත කරන්න" for "Spread the word",
  "බල පද්ධතිය ස්ථාවර කිරීම" for "Grid stabilization",
  "බලාපොරොත්තුව සහ අවස්ථා" for "Hope and opportunity",
  "අවසන් නොවන යුද්ධ අවසන් කිරීම" for "End forever wars",
  "ස්වෛරී මුදල්" for "Sovereign money") + lightning + nostr/index +
  sticker-files/index + sticker-language-success + sticker-success +
  stickers ("ස්ටිකර") + wallets.
- \`translate-locale-specific.js\` — **138 entries**. Pre-V2
  locale-specific gaps that the previous Sinhala translation pass had
  never covered: entire business/faq section (41 keys — "Bitcoin යනු
  කුමක්ද?", "Bitcoin මගේ ව්‍යාපාරයට ප්‍රයෝජනය වන්නේ කෙසේද?", etc.),
  business/wallets feature flags (28 keys —
  "හයිබ්‍රිඩ් පසුම්බිය"/"ඉන්වොයිස් මෘදුකාංගය"/"බහු සේවක සහාය"/etc.),
  business/index (12), buy platform descriptions for
  ATM/Bisq/Coinsquare/Kraken/Relai/River/Strike/Swan + 21 platform
  feature flags, common sticker dimensions (10), get-involved
  business/sticker cards (7), business/maps + business/why labels.
- \`fix-sticker-dimensions.js\` — **10 entries**. The verifier flagged
  10 \`common_stickers_dimensions_*\` strings as untranslated because
  Sinhala had been left byte-identical to English. Replaced "in" inch
  abbreviation with Sinhala "අඟල්" so values are byte-distinct, e.g.
  "21.59 cm x 4.6482 cm (8.5 අඟල් x 1.83 අඟල්)".

**Edge cases:**
- The locale was substantially incomplete pre-V2 (568 missing
  locale-specific keys, the highest count of any locale done so far in
  this refresh pass). Most of the missing content was in the
  business/* subtree and buy platform descriptions — features that
  hadn't been part of earlier translation passes.
- One \`bitcoin-vs-cbdc::point_3_summary_3\` entry was an empty string
  in English (\`""\`); preserved as empty string in Sinhala too.
- Sinhala has no native "inch" abbreviation, so used the full word
  "අඟල්" (inches) throughout the dimension strings.

**Verification:** All 4 checks passed — marker, locale-specific
coverage (0 missing, 0 untranslated), manifest coverage (0 changed, 0
added), stale pre-V2 English cross-check (0 hits across 165 manifest
changed entries). \`npm run build\` clean across 55 locales × 81
pages.

**Files committed in this PR:**
- \`i18n/si/**/*.json\` (1,165 keys updated across all 38 namespaces).
- \`scripts/i18n-audit/v2-refresh-status/si.json\` — marker pinned to
  manifestVersion \`d966f8c780c0c485...\`.
- \`scripts/i18n-audit/reports/applied/si-<timestamp>.json\` — archived
  report.
- \`scripts/si-manifest-refresh/*.js\` (6 helper scripts).
- \`V2-REDESIGN-CHECKLIST.md\` — locale ticked, summary counter 35→36.
- \`memory-bank/activeContext.md\` + \`memory-bank/progress.md\`
  updated.

---

`;

function main() {
	// 1) Prepend to activeContext.md
	const active = fs.readFileSync(ACTIVE, "utf8");
	if (!active.startsWith("## Sinhala")) {
		fs.writeFileSync(ACTIVE, NEW_ENTRY + active);
		console.log("activeContext.md: prepended Sinhala section");
	} else {
		console.log("activeContext.md: already starts with Sinhala — skipping");
	}

	// 2) Bump progress.md counter (35 → 36)
	let progress = fs.readFileSync(PROGRESS, "utf8");
	const before = progress;
	progress = progress.replace(
		/Per-language re-translation \(Step 5\): 35 \/ 54 done/g,
		"Per-language re-translation (Step 5): 36 / 54 done",
	);
	progress = progress.replace(
		/\*\*35 \/ 54 done\*\*/g,
		"**36 / 54 done**",
	);
	progress = progress.replace(/35\/54/g, "36/54");
	if (progress !== before) {
		fs.writeFileSync(PROGRESS, progress);
		console.log("progress.md: bumped 35→36");
	} else {
		console.log("progress.md: no 35-counter found (maybe already bumped)");
	}
}

main();
