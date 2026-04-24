#!/usr/bin/env node
/**
 * Prepend the Basque (eu) manifest-refresh entries to
 * memory-bank/activeContext.md and memory-bank/progress.md.
 *
 * Idempotent — detects existing "Basque (eu) manifest refresh" header
 * and skips if already present.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO = path.resolve(__dirname, "..", "..");
const AC_PATH = path.join(REPO, "memory-bank", "activeContext.md");
const PG_PATH = path.join(REPO, "memory-bank", "progress.md");

const AC_ENTRY = `## Basque (eu) manifest refresh — April 24, 2026

Ran \`/translate-manifest-refresh Basque\` end-to-end. Fourteenth locale through the manifest-driven refresh pipeline — and a linguistically unique one: **Basque is a language isolate** (not Indo-European, not Finno-Ugric — no established genealogical relationship to any other living language). Targeting ~750K native Basque speakers in the Basque Country (Euskal Herria), spanning 3 provinces in Spain (Gipuzkoa, Bizkaia, Araba) + Navarre + 3 in France (Lapurdi, Nafarroa Beherea, Zuberoa). Bitcoin interest is growing in the Basque Country's entrepreneur / fintech scene (Bilbao, Donostia/San Sebastián), and standardized written Basque (Euskara Batua) is the ISO 639-1 \`eu\` target form.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 12 untranslated
- Manifest entries: 165 changed + 392 added → **1,033 total entries flagged**

**Helper-script split (4 scripts under \`scripts/eu-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. Basque is ergative-absolutive and agglutinative with no grammatical gender, so the template supplies \`longNameSeesIn\` (inessive plural, "in X-etan" — shape used after "X-etan aurrezten baduzu"), \`noun\` (absolutive singular), \`nounPlural\` (absolutive plural), \`nounPartPl\` (partitive plural, "X gehiagorik"). Standard 2nd-person singular "zu/zuk/zure" throughout — the dominant register in Basque educational content and matches Basque Bitcoin community norms (formality distinction exists as "zuka" vs. "hika" but "zuka" is the standard neutral form). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- \`translate-rest-part1.js\` — **193 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (119). Uses Basque angular quotation marks «…» (Euskaltzaindia — the Royal Academy of the Basque Language — recommends both «…» and "…" but angular «…» is more common in formal writing). Inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim. Numeric format uses Basque/Spanish convention: decimal comma + period thousands separators (\`% 1,42\` — Basque puts "%" BEFORE the number / \`250.000 $\` / \`10,82 bilioi $\`, where "bilioi" = 10^12, matching Spanish "billón" and English "trillion").
- \`translate-rest-part2.js\` — **460 entries**. Covers the business/* subtree (11 namespaces — accounting with kapital-irabazi / kapital-galera examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" kept as "Peer-to-peer" with the Basque parenthetical gloss "(zuzenean erabiltzaileen artean)" since that technical term is widely used in Basque crypto/tech circles), common (53 — "Source:" → "Iturria:", "What's next?" → "Zer hurrengo?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Alderatu dezagun" for "Let's compare" (1st pl. imperative with \`dezagun\` auxiliary), "Zein da aldea?" for "What's the difference?", "Kale-artea" for "Street art"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- \`fix-remaining.js\` — **12 locale-specific entries**. (a) \`english_bitcoin_accepted_here_sticker_files\` → "Ingelesezko «Bitcoin Accepted Here» pegatina-fitxategiak" (mixes Basque descriptor wrap with English quoted title since the sticker artwork itself is in English). (b) \`bitcoin-vs-visa::bitcoin_point_3\` "Transparent system" → "Sistema gardena" (card label). (c) \`buy_platform_feature_dca\` "Dollar-cost averaging" → "Dolar-kostuaren bataz bestekoa (DCA)" — calqued native Basque form with the English acronym in parentheses for byte-distinctness. (d) \`bitcoin-vs-crypto::bitcoin_vs_crypto\` → "Bitcoin vs kriptomoneta" (Basque uses "kriptomoneta" rather than keeping English "Crypto"). (e) \`bitcoin-vs-crypto::crypto\` → "KRIPTOMONETA". (f) 10 \`common_stickers_dimensions_*\` measurement strings rewritten with Basque decimal commas and the Basque unit abbreviation "hh" (for "hazbete", inches) — e.g. "21,59 cm x 4,6482 cm (8,5 hh x 1,83 hh)".

**Edge cases:**
- **Basque is a language isolate.** Unique in Europe — not descended from any known parent language. No grammatical gender, ergative-absolutive alignment, 12+ cases, agglutinative morphology. Educational Bitcoin content in Basque is sparse but growing, so the translation aims at clear, neutral Euskara Batua (standardized Basque) rather than any specific dialect (Gipuzkera / Bizkaiera / Lapurtera / Zuberera).
- **Ergative-absolutive pattern:** Verb agreement marks BOTH the subject AND the direct object, and case endings differ for transitive vs. intransitive subjects. In practice this means phrases like "zure diruak balioa galtzen du" (your money loses value) — \`diruak\` is ergative because it's the subject of a transitive verb; compare \`dirua\` (absolutive) for an intransitive subject. Hand-crafted sentence templates handle this case selection naturally.
- **«…» angular quotes:** Basque follows Spanish/RAE tradition for primary quoted phrases. Applied throughout sticker name wraps ("Hemen Bitcoin onartzen dugu" brand phrase) and FAQ titles.
- **Numeric format + "%" position:** Basque uses decimal comma + period thousands (like Spanish: \`250.000\`). Critically, Basque puts the percent sign BEFORE the number (\`% 1,42\`) — opposite of English/Spanish convention — reflecting Basque's SOV-adjacent word order tendencies where qualifier precedes the qualified.
- **"bilioi" = 10^12:** Basque uses long-scale naming like Spanish — "bilioi" = 10^12 (trillion), "milioi" = 10^6 (million). Applied in FDIC stats: "10,82 bilioi $".
- **"zu/zuk/zure" register:** Basque has a T-V distinction (T = "hi/hik/hire" hika-familiar, V = "zu/zuk/zure" zuka-neutral, plus a super-formal "berori"). Chose "zu/zuk/zure" throughout as the standard register for educational/public communication — "hika" would be too familiar and "berori" too formal for modern Bitcoin education content.
- **Home card labels (62 entries):** concise Basque phrasings — "Let's compare" → "Alderatu dezagun" (1st person plural imperative with \`dezagun\` auxiliary), "What's the difference?" → "Zein da aldea?", "Fund your project" → "Finantzatu zure proiektua", "Grid stabilization" → "Sarea egonkortzea", "The great equalizer" → "Berdintzaile handia".
- **Bitcoin sticker artwork:** The 10 \`common_sticker_name_*\` keys wrap Basque descriptor ("Pegatina …" / "Bitcoin pegatina …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **CBDC, ATM, FAQ, P/E, DCA, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated.
- **"hh" inch abbreviation:** Basque "hazbete" = inch. Used the "hh" abbreviation in sticker dimensions — maintains byte-distinctness from English "in" while respecting Basque metrological conventions.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to \`scripts/i18n-audit/reports/applied/eu-20260424-190654.json\`. Marker pinned at \`scripts/i18n-audit/v2-refresh-status/eu.json\` to manifestVersion \`d966f8c780c0c485...\`. \`i18n/eu/\` directory now fully at parity with English V2.

---

`;

const PG_ENTRY = `## i18n cleanup Step 5 — Basque (eu) — 2026-04-24

**Counter:** 14/54 languages complete. Fourteenth manifest-driven refresh, and a unique linguistic addition: Basque is a **language isolate** — not Indo-European, not Finno-Ugric, no established relationship to any other living language. Targeting ~750K native Basque speakers in the Basque Country (Euskal Herria) across Spain and France. 1,033 entries resolved (464 missing + 12 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in \`scripts/eu-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using Basque ergative-absolutive noun forms (\`longNameSeesIn\` inessive plural "X-etan", \`noun\`, \`nounPlural\`, \`nounPartPl\` partitive plural) with standard "zu/zuk/zure" register throughout + 41 non-currency keys), \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Basque angular quotes «…» (Euskaltzaindia convention), inline \`<a class="body-link">\` HTML preserved verbatim, numeric format with "%" BEFORE number \`% 1,42\` / \`10,82 bilioi $\`), \`translate-rest-part2.js\` (460 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Alderatu dezagun" for "Let's compare" (1st pl. imperative) and "Zein da aldea?" for "What's the difference?", lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and \`fix-remaining.js\` (12 locale-specific entries — \`english_bitcoin_accepted_here_sticker_files\`, \`bitcoin-vs-visa::bitcoin_point_3\` "Sistema gardena", \`buy_platform_feature_dca\` "Dolar-kostuaren bataz bestekoa (DCA)", \`bitcoin-vs-crypto::bitcoin_vs_crypto\` "Bitcoin vs kriptomoneta" + \`crypto\` "KRIPTOMONETA", plus 10 \`common_stickers_dimensions_*\` measurement strings rewritten with Basque decimal commas and "hh" abbreviation for "hazbete" (inches) — e.g. "21,59 cm x 4,6482 cm (8,5 hh x 1,83 hh)"). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/eu.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS. \`npm run build\` clean across 55 locales × 81 pages.

---

`;

function prependIfMissing(filepath, headerMatch, entry) {
	const existing = fs.readFileSync(filepath, "utf8");
	if (existing.includes(headerMatch)) {
		console.log(`  [skip] ${path.relative(REPO, filepath)} already has Basque entry`);
		return false;
	}
	fs.writeFileSync(filepath, entry + existing);
	console.log(`  [ok]   prepended Basque entry to ${path.relative(REPO, filepath)}`);
	return true;
}

function main() {
	console.log("Updating memory bank for Basque (eu) refresh…");
	prependIfMissing(AC_PATH, "## Basque (eu) manifest refresh", AC_ENTRY);
	prependIfMissing(PG_PATH, "## i18n cleanup Step 5 — Basque (eu)", PG_ENTRY);
	console.log("Done.");
}

main();
