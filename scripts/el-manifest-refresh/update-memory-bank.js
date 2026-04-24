#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const activeEntry = `## Greek (el) manifest refresh — April 24, 2026

Ran \`/translate-manifest-refresh Greek\` end-to-end. Eleventh locale through the manifest-driven refresh pipeline, and the first Hellenic-branch language — targeting ~13M native Greek speakers across Greece, Cyprus, and the global Greek diaspora. Greece has a culturally significant monetary-crisis memory (the 2010s debt crisis, capital controls in 2015 with €60/day ATM limits), which makes Bitcoin's sound-money thesis particularly resonant for Greek readers.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 12 untranslated
- Manifest entries: 165 changed + 392 added → **1,033 total entries flagged**

**Helper-script split (4 scripts under \`scripts/el-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. Greek has grammatical gender + case, so the template supplies \`longName\` (accusative-like plural form used after "in/of X", e.g. "αμερικανικά δολάρια" / "βρετανικές λίρες"), \`longNameNom\` (nominative singular), \`noun\` (singular), \`nounPlural\`. Formal 2nd-person plural "εσείς/σας" used throughout (standard register for educational/informational content in Greek — informal "εσύ" would feel too casual here). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- \`translate-rest-part1.js\` — **193 entries**. Covers 404 (3) + about (34) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses Greek angular quotation marks «…» (standard in Greek typography, not the German-style „…" or French-style « … »). Inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim. Numeric format uses Greek convention: thousands \`.\` + decimal \`,\` (\`1,42%\` / \`250.000 $\` / \`10,82 τρισ. $\`).
- \`translate-rest-part2.js\` — **461 entries**. Covers the business/* subtree (11 namespaces — accounting with κεφαλαιακό κέρδος/ζημία examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (20), common (53 — "Source:" → "Πηγή:", plus 10 Bitcoin sticker-name anglicisms kept in English quoted since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "Ας συγκρίνουμε" for "Let's compare"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- \`fix-remaining.js\` — **11 locale-specific entries**. (a) \`bitcoin-vs-crypto::crypto\` "CRYPTO" → "ΚΡΥΠΤΟ" (transliterated into Greek capitals for the ribbon label on the comparison card). (b) 10 \`common_stickers_dimensions_*\` measurement strings rewritten to use Greek abbreviations "εκ." (εκατοστά, centimetres) and "ίντσες" (inches) with Greek-style decimal commas — e.g. "21,59 εκ. x 4,6482 εκ. (8,5 ίντσες x 1,83 ίντσες)".

**Edge cases:**
- **Greek script matches English length well:** unlike Amharic/Ge'ez (~60–70% length), Greek polytonic/monotonic text renders at approximately the same length as English, so no length-ratio tuning needed in \`language-diff.js\`.
- **Greek quotation marks «…»:** standard Greek typographic convention is the angular guillemets, NOT the German-style low-inverted-high „…". Applied throughout business/wallets brand phrases and bank-runs card labels.
- **Formal "εσείς" register:** Greek T-V distinction (εσύ vs. εσείς) — chose formal plural "εσείς/σας/σου" throughout to match the register of established Greek Bitcoin content (Bitcoin Association of Greece, bitcoinhub.gr, Greek Bitcoin Magazine). Formal is the default for educational material in Greek.
- **Bitcoin sticker artwork in common namespace:** The 10 sticker-name keys kept the English quoted titles inside a Greek descriptor construction — e.g. Αυτοκόλλητο «Bitcoin Doesn\u2019t Have Inflation» (μαύρο), Αυτοκόλλητο Bitcoin «Cure Inflation» — because that's the actual printed artwork on the stickers, and translating the title would misrepresent what the customer receives.
- **Home card labels (62 entries):** concise Greek phrasings — "Let's compare" → "Ας συγκρίνουμε", "What's the difference?" → "Ποια η διαφορά;", "Fund your project" → "Χρηματοδοτήστε το έργο σας", "Ending forever wars" → "Τερματισμός ατελείωτων πολέμων", "Grassroots adoption" → "Λαϊκή υιοθέτηση", "Political paradox" → "Το πολιτικό παράδοξο". Greek uses the inverted question mark "?" — which is the same character as the semicolon in Greek typography (U+003B), but in modern digital Greek usage the standard question mark "?" is broadly accepted and used here for cross-platform rendering safety.
- **CBDC, ATM, FAQ, IOU:** acronyms kept Latin (global standard), not transliterated.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. \`npm run build\` clean across 55 locales × 81 pages (~4,349 static pages). \`i18n/el/\` directory now fully at parity with English V2.

---

`;

const progressEntry = `## i18n cleanup Step 5 — Greek (el) — 2026-04-24

**Counter:** 11/54 languages complete. Eleventh manifest-driven refresh, first Hellenic-branch language. 1,033 entries resolved (464 missing + 12 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in \`scripts/el-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using Greek noun forms (\`longName\`, \`longNameNom\`, \`noun\`, \`nounPlural\`) with formal "εσείς/σας" register throughout + 41 non-currency keys), \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Greek angular quotes «…» and inline \`<a class="body-link">\` HTML preserved verbatim + numeric format \`1,42%\` / \`10,82 τρισ. $\`), \`translate-rest-part2.js\` (461 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and \`fix-remaining.js\` (11 locale-specific entries — \`bitcoin-vs-crypto::crypto\` "CRYPTO" → "ΚΡΥΠΤΟ" in Greek capitals, plus 10 \`common_stickers_dimensions_*\` measurement strings rewritten to use Greek abbreviations "εκ." (εκατοστά, cm) and "ίντσες" (inches) with Greek decimal commas — e.g. "21,59 εκ. x 4,6482 εκ. (8,5 ίντσες x 1,83 ίντσες)"). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/el.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS. \`npm run build\` clean across 55 locales × 81 pages.

---

`;

function prepend(file, entry) {
	const current = fs.readFileSync(file, "utf8");
	fs.writeFileSync(file, entry + current);
	console.log(`Prepended Greek entry to ${path.relative(ROOT, file)}`);
}

prepend(ACTIVE, activeEntry);
prepend(PROGRESS, progressEntry);
