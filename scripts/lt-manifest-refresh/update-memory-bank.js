#!/usr/bin/env node
/**
 * Prepend a Lithuanian entry to memory-bank/activeContext.md and bump
 * the Step 5 counter in memory-bank/progress.md.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const ENTRY = `## Lithuanian (lt) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Lithuanian\` end-to-end. Twenty-eighth locale through the manifest-driven refresh pipeline. Lithuanian is the official language of Lithuania (~3M native speakers) and one of the two surviving Baltic languages. Lithuania has been an EU member since 2004 and a Eurozone member since 2015 — Lithuanians used the litas (LTL) until December 2014 and the euro since January 2015, so Bitcoin/inflation copy needs to feel native in eurais. Vilnius hosts a small but active Bitcoin community; Bank of Lithuania has historically been one of the more crypto-friendly central banks in the EU (issued the LBCOIN digital collector coin in 2020).

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 705 missing (lt was the most-incomplete pre-V2 locale of the bunch — \`step4-propagate-deletions.js\` flagged it as the smallest file set at 294 keys deleted, indicating Lithuanian had been carrying a partial pre-V2 translation set rather than full coverage)
- Manifest entries: 165 changed + 392 added → **1,262 total entries flagged**

**Helper-script split (5 scripts under \`scripts/lt-manifest-refresh/\`):**

1. **\`translate-inflation.js\`** (368 entries) — per-currency templated translator × 13 currencies using Lithuanian noun forms with cases (\`inPhrase\` instrumental case "X-ais/-iais" for "saving in X" — Lithuanian uses instrumental case for "in X" without preposition, \`nomPlural\` for "X are losing value", \`genPlural\` for "more of X" and "X amount", \`label\` nominative singular, \`existenceTitle\`, \`debtTitle\`). Formal 2nd-person plural "jūs/jūsų" register throughout — the standard register for Lithuanian financial/educational copy (matches the tone of LRT.lt, Verslo žinios, Lietuvos bankas publications). Currency list includes Australian/Brazilian/Canadian/Filipino/Indian/Israeli/Japanese/Mexican/New Zealand/Thai variants with country adjective + currency root (e.g. "Australijos doleris" "Australijos doleriai" "Australijos dolerių", "Brazilijos realas/realai/realų", "Indijos rupija/rupijos/rupijų"). Freedom cards: Retas (rare/scarce) / Decentralizuotas (decentralized) / Be leidimo (without permission) / Suverenus (sovereign). 5 manifest-changed hero/intro keys including new \`inflation_h1_orange\` → "Bitcoin neturi infliacijos, bet jūsų pinigai turi."

2. **\`translate-inflation-extras.js\`** (24 entries) — currency-name keys + sticker tagline keys not handled by the per-currency template helper. Includes \`inflation_us_dollar\` "JAV DOLERIS", \`inflation_canadian_dollar\` "KANADOS DOLERIS", \`inflation_indian_rupee\` "INDIJOS RUPIJA", \`inflation_japanese_yen\` "JAPONIJOS JENA", etc. (all 13 currency-name labels), plus \`inflation_calculator_opt_out\` "Atsisakykite infliacijos", \`inflation_save_in_bitcoin\` "Taupykite Bitcoin.", \`inflation_sticker_what_if\` "O kas, jei jūsų pinigai neturėtų infliacijos?", \`inflation_sticker_cure\` "Reikia vaisto nuo infliacijos?", and \`bitcoin_doesnt_have_inflation\` "Bitcoin neturi infliacijos." (the namespace's \`@metadata\` headline).

3. **\`translate-rest-part1.js\`** (193 entries) — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with German-style low-then-high typographic quotation marks „…" used for the localized quotation style (matches Lithuanian publishing convention), Lithuanian diacritics (ą, č, ę, ė, į, š, ų, ū, ž), inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Lithuanian terminology — "Bitcoin" preserved as Latin loanword (universal, no native term in active use), "piniginė" (wallet — native term), "infliacija" (inflation — Latin loanword, used by Bank of Lithuania), "kapitalo prieaugis"/"kapitalo nuostolis" (capital gain/loss), "banko bėgimas" (bank run — native compound), "savarankiška saugykla" (self-custody — native compound), "blockchain" (kept as anglicism, widely used in Lithuanian crypto press alongside "blokų grandinė"). Numeric format with comma decimal + space thousands per Lithuanian convention — e.g. "153,9 mlrd. USD" / "10,82 trln. USD" / "1,42 %"; "milijonas/milijardas/trilijonas" on short scale matching English.

4. **\`translate-rest-part2.js\`** (460 entries) — business/* subtree across all 11 namespaces: \`business/accounting\` with "įsigijimo savikaina" (acquisition cost / cost basis) tracking + capital gain/loss examples, "Bitcoin priimamas čia" customer-facing QR landing on \`business/why\` (matches the "BITCOIN ACCEPTED HERE" sticker phrasing), \`business/wallets\` with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, \`business/maps\` (BTC Map listing form), \`business/stickers\`, \`business/faq\`, \`business/index\` ("Bitcoin verslui" navigation labels: Apskaita / Dažniausiai užduodami klausimai / Prekybininkų žemėlapiai / Atlygiai / Lipdukai / Piniginės), success pages, and \`business/sticker-files/english/index\`. Plus \`buy\`, \`compound-inflation-calculator\`, \`flyers\`, \`get-involved\`, \`lightning\`, \`nostr/index\`, \`sticker-files/index\`, \`sticker-language-success\`, \`sticker-success\`, \`stickers\`, \`wallets\`.

5. **\`fix-remaining.js\`** (217 locale-specific entries) — \`common\` subtree with footer/nav/calculator/sticker-files copy + all 39 language-name strings (e.g. "ANGLŲ" for "ENGLISH", "VOKIEČIŲ" for "GERMAN", "KINŲ" for "CHINESE", "JAPONŲ" for "JAPANESE", "KORĖJIEČIŲ" for "KOREAN" — Lithuanian uses genitive plural for language names matching its grammar pattern), \`index\` homepage with all 20 home pill labels (e.g. "pinigai", "laisvė", "energija", "aplinka") and all 56 home card titles (e.g. "Palyginkime" for "Let's compare", "Koks skirtumas?" for "What's the difference?", "Gatvės menas" for "Street art", "Žaidimo pakeitėjas" for "The great equalizer", "Tinklo stabilizavimas" for "Grid stabilization", "Viltis ir galimybės" for "Hope and opportunity", "Politinis paradoksas" for "Political paradox", "Begalinio karo pabaiga" for "End forever wars"). Brand/author names like Anita Posch, Lyn Alden, MIT Technology Review, TIME žurnalas, Forbes, Saifedean Ammous, Daniel Batten kept as proper nouns; site name (bitcoin.rocks) and software/platform names (Geyser, Mempool.space, Lightning Address) kept verbatim. Sticker dimensions left in metric/inch original format (Lithuanian convention accepts both cm and inches in technical contexts).

**Edge cases:**
- Locale was incomplete pre-V2: 705 missing locale-specific keys + 165 manifest-changed + 392 manifest-added = **1,262 entries to translate** vs. ~1,021 typical for already-complete locales. The size came from broad gaps in the pre-V2 \`index\` and \`common\` namespaces (107 + 110 missing respectively in those two alone), plus 380 missing inflation per-currency entries (some currencies hadn't been covered at all in pre-V2 lt).
- Currency-name keys (\`inflation_us_dollar\`, \`inflation_canadian_dollar\`, etc.) and the namespace headline \`bitcoin_doesnt_have_inflation\` weren't matched by the per-currency template regex \`^inflation_[a-z]{3}_(.+)$\` because they have a single-segment suffix (e.g. "us_dollar") or no suffix at all. Split them into a separate \`translate-inflation-extras.js\` helper rather than complicating the templating logic.
- Lithuanian "Bitcoin" stays as Latin "Bitcoin" rather than transliterating to "Bitkoinas" — matches usage on bitcoin.lt, vz.lt crypto coverage, Lietuvos kriptovaliutų asociacija publications. Native compound "blokų grandinė" exists for blockchain but "blockchain" anglicism is dominant in Lithuanian crypto press.
- Lithuanian language-name conventions: language names take the genitive plural in Lithuanian when used as nominal modifiers ("anglų kalba" = "English language") — but as standalone uppercase pickers they keep the genitive plural form (ANGLŲ, VOKIEČIŲ, KINŲ) which is the natural Lithuanian register for navigation labels.
- All 4 verification checks passed on first apply — marker, locale-specific coverage, manifest coverage, stale pre-V2 English cross-check.
- \`npm run build\` clean across 55 locales × 81 pages.

**Tooling refinements (none).** \`language-diff.js\` + \`apply-translations.js\` + \`verify-language.js\` used as-is. The marker at \`scripts/i18n-audit/v2-refresh-status/lt.json\` now pins \`d966f8c780c0c485...\` (current manifestVersion).

---

`;

// Prepend entry
const oldActive = fs.readFileSync(ACTIVE, "utf8");
fs.writeFileSync(ACTIVE, ENTRY + oldActive);
console.log("Prepended Lithuanian entry to memory-bank/activeContext.md");

// Bump progress.md "Step 5" counter
let progress = fs.readFileSync(PROGRESS, "utf8");
const m = progress.match(/Step 5[^|]*\|\s*54\s*\|\s*(\d+)/);
if (m) {
	const oldCount = parseInt(m[1], 10);
	const newCount = oldCount + 1;
	progress = progress.replace(
		new RegExp(`(Step 5[^|]*\\|\\s*54\\s*\\|\\s*)${oldCount}`),
		`$1${newCount}`,
	);
	fs.writeFileSync(PROGRESS, progress);
	console.log(`Bumped progress.md Step 5 counter ${oldCount} → ${newCount}`);
} else {
	console.log("(progress.md does not contain a Step 5 counter; skipped)");
}
