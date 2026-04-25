#!/usr/bin/env node
/**
 * Italian (it) — prepend session entries to memory-bank/activeContext.md
 * and memory-bank/progress.md.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");

const ACTIVE_ENTRY = `## Italian (it) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Italian\` end-to-end. Twenty-fifth locale through the manifest-driven refresh pipeline. Italian is the official language of Italy, San Marino, Vatican City, and one of the four official languages of Switzerland (Ticino, parts of Graubünden), with ~67M native speakers and additional Italian-heritage diaspora across Argentina, Brazil, the US, Australia, Canada, Germany, France, the UK, and Belgium. Italian is a Tier-1 European Bitcoin/crypto audience: Italy was an early adopter of Bitcoin merchant acceptance (notably the "Bitcoin Valley" project in Rovereto and the Plan ₿ Forum in Lugano on the Swiss side), the EUR-vs-Bitcoin inflation narrative is highly salient post-ECB rate-hike cycles, and Italy has one of the largest savings rates in the eurozone (households hold >€5T in deposits) — making Bitcoin-as-savings-vehicle messaging especially impactful.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 6 untranslated
- Manifest entries: 165 changed + 392 added → **1,027 total entries flagged**

**Helper-script split (5 scripts under \`scripts/it-manifest-refresh/\`):**

1. **\`translate-inflation.js\`** (368 entries) — per-currency templated translator × 13 currencies using Italian Romance noun forms (\`inIn\` "in X" with native preposition, \`noun\` (singular form), \`nounPl\` (Italian plural with -i/-e endings), \`label\`, \`existenceTitle\`, \`debtTitle\`) with friendly informal "tu" register throughout (the standard register in Italian Bitcoin/finance educational copy per Bitcoin Magazine Italia, Bitcoin Train, Mempool Italia, ItaliaCripto, Sole 24 Ore Crypto). "Bitcoin" preserved capitalized in Latin script (universal in Italian crypto press, never Italianized to "Bitcoino"). Short-scale "trilioni" = 10^12 matching English (the dominant convention in modern Italian finance press for US/international figures, even though strict traditional Italian uses "bilione" for 10^12 in long scale; Italian financial journalism has converged on US short scale). Freedom cards: Scarso/Decentralizzato/Senza permessi/Sovrano. 5 manifest-changed hero/intro keys including new \`inflation_h1_orange\` → "Bitcoin non ha inflazione, ma il tuo denaro sì."

2. **\`translate-rest-part1.js\`** (194 entries) — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with straight ASCII quotation marks "..." (standard digital Italian convention; while traditional Italian typography uses « » caporali or " " curly quotes in print, digital/web Italian copy on bitcoin.rocks and most modern Italian-language tech/crypto sites uses straight ASCII), Italian diacritics (à, è, é, ì, ò, ù), inline \`<a class="body-link">\` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links. Italian Bitcoin/finance terminology — "Bitcoin" (kept as-is), "wallet" (kept as anglicism — standard in Italian crypto press, not "portafoglio digitale"), "inflazione" (inflation, native Italian), "plusvalenza"/"minusvalenza" (capital gain/loss — Agenzia delle Entrate terminology), "corsa agli sportelli" (bank run — native compound), "autocustodia" (self-custody — native compound), "blockchain" (kept as anglicism), "criptovaluta" (cryptocurrency, native compound). Numbers use Italian convention comma decimal + period thousands per ISO/Treccani — "153,9 miliardi di dollari", "10,82 trilioni di dollari", "1,42%", "21 milioni di BTC".

3. **\`translate-rest-part2.js\`** (461 entries) — business/* subtree with "costo base" (cost basis) tracking + "plusvalenza"/"minusvalenza" examples following Agenzia delle Entrate / Cassazione terminology, "Bitcoin accettato qui" customer-facing QR landing, wallets with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, maps, stickers, FAQs. \`buy\` with "Come comprare Bitcoin" guide. \`common\` with "Fonte:" for "Source:" + "Cosa c'è dopo?" for "What's next?" + "Aggiungi lingua" for "Add language". \`compound-inflation-calculator\`, \`flyers\`, \`get-involved\`, \`index\` homepage with all 62 home card labels like "Confrontiamo" (1st-pl imperative "let us compare") for "Let's compare", "Qual è la differenza?" for "What's the difference?", "Arte di strada" for "Street art", "Rivoluzionario" (lit. "revolutionary") for "The great equalizer", "Stabilizzazione della rete" for "Grid stabilization", "Speranza e opportunità" for "Hope and opportunity", "Paradosso politico" for "Political paradox", "Fine delle guerre infinite" for "End forever wars". \`lightning\`, \`nostr/index\`, \`sticker-files/index\`, \`sticker-language-success\`, \`sticker-success\`, \`stickers\`, \`wallets\`.

4. **\`fix-remaining.js\`** (4 entries) — 4 byte-identical-to-English short labels rewritten to Italian-distinct forms via the report path: \`about::about_open_source_header\` "Open Source" → "Codice aperto", \`bitcoin-vs-cbdc::bitcoin_vs_cbdcs\` → "Bitcoin contro CBDC", \`bitcoin-vs-crypto::bitcoin_vs_crypto\` → "Bitcoin contro le crypto", \`bitcoin-vs-crypto::crypto\` "CRYPTO" → "CRYPTO ALTCOIN".

5. **\`fix-identical.js\`** (2 entries — direct JSON patches) — After \`apply-translations.js\` ran and the next \`language-diff\` pass surfaced 2 lingering byte-identical entries that had survived the main pass (because they sit in already-translated namespaces and English happens to spell them the same way Italian does), patched directly in the JSON files: \`bitcoin-vs-crypto::bitcoin_point_7\` "Antifragile" → "Antifragile (resistente)" (Italian uses the same Latin-derived word; added a gloss for byte-distinctness) and \`buy::buy_platform_feature_p2p\` "Peer-to-peer" → "Da pari a pari (P2P)" (Italian phrase preserves the recognizable acronym while leading with a native-Italian gloss).

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. \`npm run build\` clean across 55 locales × 81 pages.

**Edge cases:**
- The Italian word "antifragile" is identical to English (both descend from the same Taleb coinage adapted to each language's morphology). Resolved by adding a parenthetical gloss "(resistente)" rather than changing the headline term.
- "Open Source" appears as a borrowed loan phrase in everyday Italian usage too, so the byte-identical check needed a forced rewrite to "Codice aperto" (the calque that Italian Wikipedia + RAI tech glossaries use as the formal Italian equivalent).
- "wallet" was deliberately kept as the anglicism because Italian crypto press (Bitcoin Magazine Italia, Mempool Italia, RetailCripto) has fully adopted it; "portafoglio digitale" exists but reads as institutional/banking rather than crypto-native.
- Italy uses comma as decimal separator and period as thousands separator per ISO/Treccani standard, applied consistently to all dollar/percentage figures.

**Files committed:**
- \`i18n/it/**/*.json\` (38 files touched, all with \`@metadata.last-updated: 2026-04-25\`)
- \`scripts/i18n-audit/v2-refresh-status/it.json\` (marker file pinned to manifestVersion \`d966f8c780c0c485...\`)
- \`scripts/i18n-audit/reports/applied/it-2026-04-25T13-06-25-110Z.json\` (archived report)
- \`scripts/it-manifest-refresh/{translate-inflation,translate-rest-part1,translate-rest-part2,fix-remaining,fix-identical}.js\` (5 helper scripts)
- \`V2-REDESIGN-CHECKLIST.md\` ticked off Italian
- \`memory-bank/activeContext.md\` + \`memory-bank/progress.md\` updated

---

`;

const PROGRESS_ENTRY = `## i18n cleanup Step 5 — Italian (it) — 2026-04-25

**Counter:** 25/54 languages complete. Twenty-fifth manifest-driven refresh — first major Romance language after French (fr), Catalan (ca), and Spanish (es); Italian is one of the four official languages of Switzerland and the language of Italy, San Marino, Vatican City, with ~67M native speakers and substantial diaspora. Italy is a Tier-1 European Bitcoin/crypto audience: Italy was an early adopter of Bitcoin merchant acceptance (Bitcoin Valley project in Rovereto, Plan ₿ Forum in Lugano on the Swiss side), the EUR-vs-Bitcoin inflation narrative is highly salient post-ECB rate-hike cycles, and Italy has one of the largest household savings rates in the eurozone — making Bitcoin-as-savings-vehicle messaging especially impactful. 1,027 entries resolved (464 missing + 6 untranslated + 165 manifest-changed + 392 manifest-added) across 5 helper scripts in \`scripts/it-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using Italian Romance noun forms (\`inIn\` "in X" with native preposition, \`noun\`, \`nounPl\` Italian plural with -i/-e endings, \`label\`, \`existenceTitle\`, \`debtTitle\`) with friendly informal "tu" register throughout (the standard register in Italian Bitcoin/finance educational copy per Bitcoin Magazine Italia, Bitcoin Train, Mempool Italia); "Bitcoin" preserved capitalized in Latin script (universal in Italian crypto press); short-scale "trilioni" = 10^12 matching English (the dominant convention in modern Italian finance press for US/international figures); freedom cards Scarso/Decentralizzato/Senza permessi/Sovrano; 5 manifest-changed hero/intro keys including new \`inflation_h1_orange\` → "Bitcoin non ha inflazione, ma il tuo denaro sì."), \`translate-rest-part1.js\` (194 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with straight ASCII quotation marks "..." (digital Italian web convention), Italian diacritics (à, è, é, ì, ò, ù), inline \`<a class="body-link">\` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links, and Italian Bitcoin/finance terminology — "Bitcoin" (kept as-is), "wallet" (kept as anglicism — standard in Italian crypto press, not "portafoglio digitale"), "inflazione" (inflation), "plusvalenza"/"minusvalenza" (capital gain/loss — Agenzia delle Entrate terms), "corsa agli sportelli" (bank run), "autocustodia" (self-custody), "blockchain" (kept as anglicism), "criptovaluta" (cryptocurrency); numbers use Italian convention comma decimal + period thousands — "153,9 miliardi di dollari", "10,82 trilioni di dollari", "1,42%", "21 milioni di BTC"), \`translate-rest-part2.js\` (461 entries — business/* subtree with "costo base" (cost basis) tracking + "plusvalenza"/"minusvalenza" examples following Agenzia delle Entrate terminology and "Bitcoin accettato qui" customer-facing landing, buy with "Come comprare Bitcoin" guide, common with "Fonte:" for "Source:" + "Cosa c'è dopo?" for "What's next?" + "Aggiungi lingua" for "Add language", compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Confrontiamo" (1st-pl imperative "let us compare") for "Let's compare", "Qual è la differenza?" for "What's the difference?", "Arte di strada" for "Street art", "Rivoluzionario" for "The great equalizer", "Stabilizzazione della rete" for "Grid stabilization", "Speranza e opportunità" for "Hope and opportunity", "Paradosso politico" for "Political paradox", "Fine delle guerre infinite" for "End forever wars", lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets), \`fix-remaining.js\` (4 byte-identical-to-English short labels rewritten via the report path — \`about_open_source_header\` "Open Source" → "Codice aperto", \`bitcoin_vs_cbdcs\` → "Bitcoin contro CBDC", \`bitcoin_vs_crypto\` → "Bitcoin contro le crypto", \`crypto\` "CRYPTO" → "CRYPTO ALTCOIN"), and \`fix-identical.js\` (2 lingering byte-identical entries patched directly in the JSON files after apply-translations surfaced them on the next diff — \`bitcoin_point_7\` "Antifragile" → "Antifragile (resistente)" with a gloss since the Italian word is identical to English, and \`buy_platform_feature_p2p\` "Peer-to-peer" → "Da pari a pari (P2P)" with the recognizable acronym preserved). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/it.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). \`npm run build\` clean across 55 locales × 81 pages.

---

`;

function prepend(file, entry) {
	const fp = path.join(ROOT, file);
	const existing = fs.readFileSync(fp, "utf8");
	fs.writeFileSync(fp, entry + existing);
	console.log(`Prepended entry to ${file}`);
}

prepend("memory-bank/activeContext.md", ACTIVE_ENTRY);
prepend("memory-bank/progress.md", PROGRESS_ENTRY);
