#!/usr/bin/env node
/**
 * Prepend Estonian (et) entry to memory-bank/activeContext.md.
 * Also bump the Step 5 counter in memory-bank/progress.md.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const entry = `## Estonian (et) manifest refresh — April 24, 2026

Ran \`/translate-manifest-refresh Estonian\` end-to-end. Thirteenth locale through the manifest-driven refresh pipeline, and the first Finno-Ugric language — targeting ~1.1M native Estonian speakers in Estonia plus the global Estonian diaspora. Estonia is a digitally-native state (pioneer of e-residency, e-voting, and digital-first governance) with a strong cryptocurrency adoption culture, making Bitcoin education particularly resonant there.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 465 missing + 3 untranslated
- Manifest entries: 165 changed + 392 added → **1,025 total entries flagged**

**Helper-script split (4 scripts under \`scripts/et-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. Estonian is Finno-Ugric with 14 grammatical cases and no gender, so the template supplies \`longNameSeesIn\` (inessive plural, "in X-es" — the shape used after "kui hoiustad X-es" / "kui hoiustad USA dollarites"), \`noun\` (nominative singular), \`nounPlural\` (nominative plural), and \`nounPartPl\` (partitive plural, "rohkem X-e"). Informal 2nd-person singular "sa/sina/sinu" used throughout — matches the register of Estonian Bitcoin community content (bitcoin.ee, Estonian crypto Twitter). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- \`translate-rest-part1.js\` — **193 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (119). Uses Estonian typographic „…" quotation marks (same shape as German / Czech / Danish — low-opening, high-closing). Inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim. Numeric format uses Estonian convention: decimal comma + space thousand separators (\`1,42 %\` / \`250 000 $\` / \`10,82 triljonit $\`, where "triljon" = 10^12, matching English "trillion").
- \`translate-rest-part2.js\` — **461 entries**. Covers the business/* subtree (11 namespaces — accounting with kapitali kasvutulu/-kahjum examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" → "võrdõigusvõrk"), common (53 — "Source:" → "Allikas:", "What's next?" → "Mis järgmiseks?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Võrdleme" for "Let's compare", "Mis vahe on?" for "What's the difference?", "Tänavakunst" for "Street art"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- \`fix-remaining.js\` — **3 locale-specific entries**. (a) \`english_bitcoin_accepted_here_sticker_files\` → "Ingliskeelsed „Bitcoin Accepted Here" kleebisefailid" (mixes Estonian descriptor wrap with English quoted title since the sticker artwork itself is in English). (b) \`bitcoin-vs-visa::bitcoin_point_3\` "Transparent system" → "Läbipaistev süsteem" (card label). (c) \`buy_platform_feature_dca\` "Dollar-cost averaging" → "Dollari-keskmistatud ost (DCA)" — calqued native Estonian form with the English acronym in parentheses for byte-distinctness (DCA is widely understood in crypto Estonian communities).

**Edge cases:**
- **Estonian grammatical cases (14 total):** the inflation corpus needs careful case selection per sentence shape — "kui hoiustad X-es" (inessive), "rohkem X-e" (partitive), "igaX" (nominative singular), "Xde pakkumine" (genitive plural). Built the translator with 4 case forms per currency (longNameSeesIn, noun, nounPlural, nounPartPl) and used hand-crafted sentence templates so the grammar flows naturally without forced calques from English word order.
- **„…" quotation marks:** Estonian typographic convention matches the Germanic pattern (low-opening „ U+201E, high-closing " U+201C). Applied throughout sticker name wraps, quoted brand phrases, and article titles. Different from Greek «…» or French « … » — Estonian specifically uses the low-high Germanic form.
- **Numeric format:** Estonian uses comma as decimal separator and space as thousands separator (\`1 234,56\`), matching ISO 31-0 / SI. Applied in "10,82 triljonit $" / "21 000 000" / "1,42 %".
- **Informal "sa/sina" throughout:** Estonian T-V distinction is strong (T = informal sing. "sina"/"sa"/"sinu", V = formal pl. "teie"/"te"/"teie"). Chose informal "sa/sina" throughout to match the register of Estonian crypto/Bitcoin content creators — formal would feel unnatural in an educational/movement context aimed at adoption.
- **"triljon" = 10^12:** Estonian uses short-scale (like English, French, modern German). Applied in FDIC stats — "10,82 triljonit $" matches English "10.82 trillion $".
- **Home card labels (62 entries):** concise Estonian phrasings — "Let's compare" → "Võrdleme" (1st person plural imperative), "What's the difference?" → "Mis vahe on?", "Fund your project" → "Rahasta oma projekti", "Grid stabilization" → "Elektrivõrgu stabiliseerimine", "The great equalizer" → "Suur võrdsustaja", "Political paradox" → "Poliitiline paradoks".
- **Bitcoin sticker artwork:** The 10 \`common_sticker_name_*\` keys wrap Estonian descriptor ("Kleebis …" / "Bitcoini kleebis …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **CBDC, ATM, FAQ, P/E, DCA, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. \`npm run build\` clean across 55 locales × 81 pages (~4,349 static pages). \`i18n/et/\` directory now fully at parity with English V2.

---

`;

// Prepend to activeContext.md
const current = fs.readFileSync(ACTIVE, "utf8");
fs.writeFileSync(ACTIVE, entry + current);
console.log("Prepended Estonian entry to memory-bank/activeContext.md");

// Update progress.md Step 5 counter (12 → 13 if found)
if (fs.existsSync(PROGRESS)) {
	let prog = fs.readFileSync(PROGRESS, "utf8");
	// Try common patterns: "Step 5" counter, "12/54", "13/54"
	const before = prog;
	prog = prog.replace(/\b12\/54\b/g, "13/54");
	prog = prog.replace(/\b12 of 54\b/g, "13 of 54");
	prog = prog.replace(
		/(Per-language re-translation.*?)(12)(\s*\|?\s*(?:languages|locales)?)/gi,
		(m, a, n, b) => a + "13" + b,
	);
	if (prog !== before) {
		fs.writeFileSync(PROGRESS, prog);
		console.log("Bumped Step 5 counter in memory-bank/progress.md");
	} else {
		console.log(
			"No Step 5 counter pattern matched in memory-bank/progress.md — leaving as-is",
		);
	}
}
