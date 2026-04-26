#!/usr/bin/env node
/**
 * Slovak — prepend a Step-5 entry to memory-bank/progress.md.
 * Idempotent.
 */
"use strict";
const fs = require("node:fs");
const path = require("node:path");

const file = path.resolve(__dirname, "..", "..", "memory-bank", "progress.md");

const entry = `## i18n cleanup Step 5 — Slovak (sk) — 2026-04-25

Ran \`/translate-manifest-refresh Slovak\`. Slovak (\`Slovenčina\`) is the
official language of Slovakia, ~5M native speakers; West Slavic, very
close to Czech. **Counter:** 41/54 languages complete. 1,023 entries
flagged (464 missing locale-specific + 2 untranslated + 165
manifest-changed + 392 manifest-added).

**4 helper scripts under \`scripts/sk-manifest-refresh/\`:**
1. \`translate-inflation.js\` (368 entries — 327 per-currency × 13
   currencies via templated function with Slovak noun forms (\`longName\`
   locative "in X" e.g. "amerických dolároch", \`longNameNom\`,
   \`longNameGen\`, \`noun\`, \`nounPlural\`, \`label\`, \`existenceTitle\`,
   \`debtTitle\`) and formal "vy/váš" register + 41 non-currency keys:
   freedom cards (Vzácny / Decentralizovaný / Bez povolenia /
   Suverénny), stories (Kanada/Nigéria/Pensylvánia/Texas), sources, 5
   manifest-changed hero/intro keys).
2. \`translate-rest-part1.js\` (194 entries — 404 + about + bank-runs +
   all 10 bitcoin-vs-* comparison pages with German-style typographic
   quotation marks „…", Slovak diacritics (á, ä, č, ď, é, í, ĺ, ľ, ň,
   ó, ô, ŕ, š, ť, ú, ý, ž), inline \`<a class="body-link">\` HTML
   preserved for Wikipedia India and gold.org links; Slovak
   terminology — "Bitcoin" Latin loanword, "peňaženka" wallet,
   "inflácia" inflation, "bankový run" bank run, "samoúschova"
   self-custody, "blockchain" loanword, "riziko protistrany"
   counterparty risk; numeric format with comma decimal + space
   thousands "153,9 mld. USD" / "10,82 bilióna USD" / "1,42 %").
3. \`translate-rest-part2.js\` (461 entries — full business/* subtree
   (accounting "nákladová základňa" cost-basis, why "Tu prijímame
   Bitcoin" QR landing, wallets/maps/stickers/FAQs/sticker-files/
   english), buy, common with "Zdroj:" / "Čo bude ďalej?",
   compound-inflation-calculator, flyers, get-involved, index homepage
   with all 62 home card labels (e.g. "Porovnajme" / "V čom je
   rozdiel?" / "Pouličné umenie" / "Veľký zlom" / "Stabilizácia siete"
   / "Nádej a príležitosť" / "Koniec nekonečnej vojny" / "Suverénne
   peniaze"), lightning, nostr/index, sticker-files/index,
   sticker-language-success, sticker-success, stickers, wallets).
4. \`fix-untranslated.js\` (1 byte-identical entry: \`buy_platform_feature_p2p\`
   "Peer-to-peer" → "Priamo medzi účastníkmi (peer-to-peer)" so the
   Slovak value is byte-distinct from English while retaining the
   universal "P2P" anglicism).

**Verification:** All 4 checks PASS — marker, locale-specific
coverage, manifest coverage, stale pre-V2 English cross-check. Marker
\`v2-refresh-status/sk.json\` pinned to current manifestVersion
\`d966f8c780c0c485...\`. \`npm run build\` clean across 55 locales × 81
pages.

**What's left in Step 5:** 13 locales (sl, sv, sw, ta, th, tl, tr, ur,
uz, vi, yo, zh, zu).

`;

let content = fs.readFileSync(file, "utf8");
if (!content.includes("## i18n cleanup Step 5 — Slovak (sk) — 2026-04-25")) {
	content = entry + content;
	fs.writeFileSync(file, content);
	console.log("Prepended Slovak Step-5 entry to progress.md");
} else {
	console.log("Slovak Step-5 entry already present");
}
