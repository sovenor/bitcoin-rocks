#!/usr/bin/env node
/**
 * Finnish manifest refresh — update V2-REDESIGN-CHECKLIST + memory-bank files.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");

/* ─────────────── 1. V2-REDESIGN-CHECKLIST.md ─────────────── */
{
	const p = path.join(ROOT, "V2-REDESIGN-CHECKLIST.md");
	let content = fs.readFileSync(p, "utf8");
	const oldLine = "- [ ] `fi` — Finnish";
	const newLine =
		"- [x] `fi` — Finnish ✅ 2026-04-24 — manifest refresh (1,022 entries; 4 helper scripts in scripts/fi-manifest-refresh/)";
	if (!content.includes(oldLine)) {
		throw new Error("Could not find Finnish checklist line");
	}
	content = content.replace(oldLine, newLine);
	fs.writeFileSync(p, content);
	console.log("✓ V2-REDESIGN-CHECKLIST.md updated");
}

/* ─────────────── 2. memory-bank/activeContext.md — prepend entry ─────────────── */
{
	const p = path.join(ROOT, "memory-bank", "activeContext.md");
	const existing = fs.readFileSync(p, "utf8");
	const entry = `## Finnish (fi) manifest refresh — April 24, 2026

Ran \`/translate-manifest-refresh Finnish\` end-to-end. Sixteenth locale through the manifest-driven refresh pipeline — second Finno-Ugric language (after Estonian). Targeting ~5.5M native Finnish speakers in Finland plus the global Finnish diaspora. Finland has a strong Bitcoin community (konsensus.fi, bittiraha.fi, Helsinki Bitcoin meetups) and a relatively high per-capita adoption rate compared to other Nordic countries.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 465 missing + 0 untranslated
- Manifest entries: 165 changed + 392 added → **1,022 total entries flagged**

**Helper-script split (4 scripts under \`scripts/fi-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. Finnish is Finno-Ugric with 15 grammatical cases and no gender (same family as Estonian), so the template supplies \`longNameSeesIn\` (inessive plural, "in X-issa/eissa" — the shape used after "jos säästät X-issa" / "jos säästät euroissa"), \`noun\` (nominative singular), \`nounPlural\` (nominative plural), and \`nounPartPl\` (partitive plural, "enemmän X-eja"). Informal 2nd-person singular "sinä/sä/sinun" used throughout — matches the register of Finnish Bitcoin community content (konsensus.fi, bittiraha, Finnish crypto Twitter/Nostr). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- \`translate-rest-part1.js\` — **193 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (119). Uses Finnish typographic \`”…”\` quotation marks (both high — the standard Finnish convention, shared with Swedish, distinct from German's low-opening \`„…"\` shape). Inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, Visa preserved verbatim. Numeric format uses Finnish convention: decimal comma + space thousand separators (\`1,42 %\` / \`250 000 $\` / \`10,82 biljoonaa $\`, where "biljoona" = 10^12 since Finnish uses **long scale** natively — matches English "trillion" in value but uses the long-scale name).
- \`translate-rest-part2.js\` — **460 entries**. Covers the business/* subtree (11 namespaces — accounting with myyntivoitto / myyntitappio examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" → "vertaisverkko (suoraan käyttäjien välillä)" with parenthetical gloss), common (53 — "Source:" → "Lähde:", "What's next?" → "Mitä seuraavaksi?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Vertaillaan" for "Let's compare" (passive 1st plural, the natural Finnish hortative), "Mikä on ero?" for "What's the difference?", "Katutaide" for "Street art"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- \`fix-remaining.js\` — **3 locale-specific entries**. (a) \`english_bitcoin_accepted_here_sticker_files\` → "Englanninkieliset ”Bitcoin Accepted Here” -tarratiedostot" (mixes Finnish descriptor wrap with English quoted title since the sticker artwork itself is in English; note the Finnish hyphenated compound \`-tarratiedostot\`). (b) \`bitcoin-vs-visa::bitcoin_point_3\` "Transparent system" → "Läpinäkyvä järjestelmä" (card label). (c) \`buy_platform_feature_dca\` "Dollar-cost averaging" → "Dollarikeskiarvoistus (DCA)" — calqued native Finnish form with the English acronym in parentheses for byte-distinctness (DCA is widely understood in Finnish crypto communities).

**Edge cases:**
- **Finnish grammatical cases (15 total):** the inflation corpus needs careful case selection per sentence shape — "jos säästät X-issa" (inessive), "enemmän X-eja" (partitive), "jokainen X" (nominative singular), "X-ien tarjonta" (genitive plural). Built the translator with 4 case forms per currency (longNameSeesIn, noun, nounPlural, nounPartPl) and used hand-crafted sentence templates so the grammar flows naturally without forced calques from English word order. The Finnish vowel harmony (back-vowel vs front-vowel endings) is handled per-currency in the templated forms — e.g. "dollareissa" (back harmony), "euroissa" (front harmony on "e"), "jeneissä" (front harmony on "e").
- **"biljoona" = 10^12 — Finnish uses long scale natively.** Unlike English short-scale ("trillion" = 10^12) or American-style billion/trillion, Finnish native long-scale uses "miljardi" (10^9) and "biljoona" (10^12). Applied in FDIC stats: "10,82 biljoonaa $" matches the numeric value of English "10.82 trillion $". This is the single largest lexical divergence from Swedish/Danish (both use short-scale in informal Nordic English-influenced contexts).
- **\`”…”\` high-high typographic quotes:** Standard Finnish follows Swedish convention of both opening AND closing quote marks being high (Unicode U+201D on both sides) — distinct from German/Czech/Estonian/Polish low-opening \`„\` + high-closing \`"\`. Applied throughout sticker name wraps and FAQ titles.
- **Informal "sinä/sä" register:** Finnish has a T-V distinction (T = "sinä/sinun" informal, V = "Te/Teidän" formal plural). Chose informal "sinä" throughout — Finnish Bitcoin educators (konsensus.fi, bitcoinkeskus.fi) universally use informal register for general audience. The capitalized formal "Te" would feel stuffy and out-of-place for young-skewing crypto audiences.
- **Hyphenated compounds:** Finnish is agglutinative and productively forms compounds. For English brand+common-noun phrases, Finnish uses a hyphen when the first element is a foreign proper noun: "bitcoin-tarra" (bitcoin sticker), "bitcoin-maksu" (bitcoin payment), "Lightning-verkko" (Lightning network), "bitcoin-lompakko" (bitcoin wallet). Applied consistently throughout.
- **Home card labels (62 entries):** concise Finnish phrasings — "Let's compare" → "Vertaillaan" (passive 1st plural, the Finnish hortative), "What's the difference?" → "Mikä on ero?", "Fund your project" → "Rahoita projektisi", "Grid stabilization" → "Sähköverkon vakauttaminen", "The great equalizer" → "Suuri tasoittaja", "Hope and opportunity" → "Toivoa ja mahdollisuuksia", "End wars forever" → "Lopeta ikuiset sodat", "Street art" → "Katutaide".
- **Currency names in Finnish:** "dollari" (dollar) / "euro" (euro) / "punta" (pound) / "jeni" (yen) / "rupia" (rupee) / "sekeli" (shekel) / "peso" (peso, used for both Mexican and Filipino peso) / "real" (Brazilian real) / "bahti" (baht) / country-qualified compounds like "Kanadan dollari" (Canadian dollar).
- **Bitcoin sticker artwork:** The 10 \`common_sticker_name_*\` keys wrap Finnish descriptor ("Tarra …" / "Bitcoin-tarra …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **CBDC, FAQ, P/E, DCA, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated. Finnish productively uses Latin acronyms directly.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to \`scripts/i18n-audit/reports/applied/fi-20260424-211938.json\`. Marker pinned at \`scripts/i18n-audit/v2-refresh-status/fi.json\` to manifestVersion \`d966f8c780c0c485...\`. \`npm run build\` clean across 55 locales × 81 pages (~4,349 static pages). \`i18n/fi/\` directory now fully at parity with English V2. Finland is the **2nd Finno-Ugric locale completed** (after Estonian); still pending Finno-Ugric: Hungarian (hu).

---

`;
	fs.writeFileSync(p, entry + existing);
	console.log("✓ memory-bank/activeContext.md prepended");
}

/* ─────────────── 3. memory-bank/progress.md — prepend entry ─────────────── */
{
	const p = path.join(ROOT, "memory-bank", "progress.md");
	const existing = fs.readFileSync(p, "utf8");
	const entry = `## i18n cleanup Step 5 — Finnish (fi) — 2026-04-24

**Counter:** 16/54 languages complete. Sixteenth manifest-driven refresh — second Finno-Ugric language (after Estonian). Targeting ~5.5M native Finnish speakers in Finland plus the global Finnish diaspora. Finland has a strong Bitcoin community (konsensus.fi, bittiraha.fi, Helsinki Bitcoin meetups) and relatively high per-capita adoption. 1,022 entries resolved (465 missing + 0 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in \`scripts/fi-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using Finnish Finno-Ugric noun forms (\`longNameSeesIn\` inessive plural, \`noun\`, \`nounPlural\`, \`nounPartPl\` partitive plural) with informal "sinä/sä" register throughout + 41 non-currency keys), \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Finnish high-high typographic quotes \`”…”\` (matches Swedish convention, distinct from German/Estonian/Czech \`„…"\`) and brand names preserved verbatim; numbers use Finnish convention decimal comma + space thousands with "biljoona" = 10^12 since Finnish uses **long scale** natively), \`translate-rest-part2.js\` (460 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Vertaillaan" for "Let's compare" (passive 1st plural hortative) and "Mikä on ero?" for "What's the difference?", lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and \`fix-remaining.js\` (3 locale-specific entries — \`english_bitcoin_accepted_here_sticker_files\` → "Englanninkieliset ”Bitcoin Accepted Here” -tarratiedostot", \`bitcoin-vs-visa::bitcoin_point_3\` "Transparent system" → "Läpinäkyvä järjestelmä", \`buy_platform_feature_dca\` "Dollar-cost averaging" → "Dollarikeskiarvoistus (DCA)"). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/fi.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS. \`npm run build\` clean across 55 locales × 81 pages.

---

`;
	fs.writeFileSync(p, entry + existing);
	console.log("✓ memory-bank/progress.md prepended");
}

console.log("\nAll 3 files updated.");
