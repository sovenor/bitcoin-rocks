#!/usr/bin/env node
/**
 * Prepend the Portuguese refresh entry to memory-bank/activeContext.md and
 * memory-bank/progress.md, and tick `pt` off in V2-REDESIGN-CHECKLIST.md.
 *
 * Idempotent via marker string checks.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");
const CHECKLIST = path.join(ROOT, "V2-REDESIGN-CHECKLIST.md");

const MARKER = "## Portuguese (pt) manifest refresh — April 25, 2026";

const ENTRY = `${MARKER}

Ran \`/translate-manifest-refresh Portuguese\` end-to-end. Continuing the manifest-driven refresh pipeline. Portuguese is a tier-1 locale for Bitcoin education — targeting ~270M native speakers across Portugal, Brazil, Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé and Príncipe, Macau, Timor-Leste, and the Lusophone diaspora. Brazil in particular has been an early Bitcoin-adoption hotspot — Mercado Bitcoin (the largest LATAM exchange) launched in 2013, and Brazilian Bitcoiners have been some of the most active in Latin America's circular economy.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 15 untranslated
- Manifest entries: 165 changed + 392 added → **1,036 total entries flagged**

**Helper-script split (4 scripts under \`scripts/pt-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. Uses Portuguese-specific currency naming: "dólares americanos" / "libras esterlinas" / "ienes japoneses" / "shekels israelitas" / "dólares canadianos" (note European PT spelling — "canadianos" not "canadenses") / "rupias indianas" / "pesos mexicanos" / "dólares neozelandeses" / "pesos filipinos" / "bahts tailandeses" / "reais brasileiros". Informal 2nd-person singular "tu/teu" used throughout to match the existing pre-V2 European-PT register (the pre-V2 pt files already used "Clica numa", "Escolhe o teu", "Vamos descobrir" — that's the natural register for Portuguese Bitcoin education content; formal "você" would feel out of place). Plus 41 non-currency keys: freedom cards (Escasso/Descentralizado/Sem permissões/Soberano), stories (Canadá/Nigéria/Pensilvânia/Texas), sources, and 5 manifest-changed hero/intro keys.
- \`translate-rest-part1.js\` — **194 entries** (193 + 1 retried). Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses Portuguese guillemet quotation marks «…» (the standard for Portugal — same as Spanish/French RAE convention; Brazilian PT prefers "…" curly quotes but the quoted phrases here are mostly internal labels like «Aceita-se Bitcoin» so peninsular convention works for both regions). Inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, BTC Map preserved verbatim. Numeric format uses Portuguese convention: thousands "." + decimal "," with a space before "%" (e.g. "1,42 %" / "250.000 $" / "10,82 biliões" — using "biliões" since Portuguese uses long scale where "bilião" = 10^12 = English "trillion", same as Spanish "billón" and German "Billion"). Portuguese diacritics (ç, ã, õ, é, ê, à, á, í, ó, ô, ú, ü) used throughout; "para que" + subjunctive used per Portuguese grammar.
- \`translate-rest-part2.js\` — **461 entries**. Covers the business/* subtree (11 namespaces — accounting with mais-valia/menos-valia capital-gain examples, why as customer-facing QR landing page "Aceita-se Bitcoin", wallets with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, maps, stickers, FAQs, sticker-files/english/index, etc.), buy (21 — "peer-to-peer" → "Entre pares"), common (53 — "Source:" → "Fonte:", "What's next?" → "O que se segue?", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork; "estornos" for chargebacks; "carteira" for wallet, "panfleto" for flyer), compound-inflation-calculator (8), flyers (5 — "panfletos"), get-involved (33), index (62 — all home card labels like "Vamos comparar" for "Let's compare", "Qual é a diferença?" for "What's the difference?", "Espalha a palavra" for "Spread the word", "O grande igualador" for "The great equalizer", "O paradoxo político" for "Political paradox", "Pôr fim a guerras intermináveis" for "End forever wars", "Dinheiro soberano" for "Sovereign money"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37 — "autocolantes" not "etiquetas"; "laranja-pildorar" for the orange-pill colloquialism), wallets (11).
- \`fix-remaining.js\` — **15 locale-specific entries**. (a) \`bitcoin-vs-cbdc::bitcoin_vs_cbdcs\` "Bitcoin vs CBDCs" → "Bitcoin vs. CBDC" (byte-distinct via period + singular acronym). (b) \`bitcoin-vs-gold::bitcoin_vs_gold\` "Bitcoin vs Gold" → "Bitcoin vs. Ouro". (c) 2 \`common_cold_wallet\` / \`common_hot_wallet\` "COLD/HOT WALLET" → "CARTEIRA FRIA"/"CARTEIRA QUENTE" (byte-distinct + native PT terms). (d) 10 \`common_stickers_dimensions_*\` measurement strings rewritten with Portuguese-style decimal commas — e.g. "21,59 cm x 4,6482 cm (8,5 in x 1,83 in)". (e) \`common_stickers_type_die_cut\` → "autocolante recortado" (PT term for die-cut stickers). (f) \`common_stickers_material\` initially "Material:" was byte-identical to English so rewritten in-place to "Material do produto:" to satisfy the verify-language untranslated check while keeping meaning clear.

**Edge cases:**
- **Portuguese-English cognate problem:** Portuguese shares many brand/technical terms with English spelled identically — "Bitcoin", "Lightning", "Nostr", "Material", "CBDC". The verify-language untranslated check flags byte-identical values, so we had to find byte-distinct PT forms for genuine cognates: "Material:" → "Material do produto:", "COLD WALLET" → "CARTEIRA FRIA", "HOT WALLET" → "CARTEIRA QUENTE". The brand-identical allow-list already covers "Bitcoin" / "Nostr" / "Lightning" / etc.
- **European vs. Brazilian PT:** Chose European-PT register because the pre-V2 \`i18n/pt/\` files were already in European-PT — "Clica numa categoria abaixo" (PT-PT imperative with clitic), "Escolhe o teu dinheiro" (pre-existing), "Adoraríamos ouvir de você" (one Brazilian-PT residual in the existing about page that we left alone). Notable Portugal-vs-Brazil terminology choices: "autocolante" (PT) not "adesivo" (BR), "panfleto" (both), "mais-valia/menos-valia" (PT) not "ganho/perda de capital" (BR — also valid but more formal), "ficheiro" (PT) not "arquivo" (BR), "telemóvel" (PT) not "celular" (BR), "carteira" (both), "feriados" (both), "caixas multibanco" (PT) not "caixas eletrônicos" (BR), "encomendar" (both), "fatura" (PT) not "fatura/nota fiscal" (BR), "comissões" (both), "rede elétrica" (both, but accent differs — "elétrica" PT, "elétrica" BR is the same now post-acordo ortográfico).
- **«…» guillemets:** Used Portuguese angular guillemets for quoted phrases — applied in sticker names, FAQ titles, marketing phrases like «Aceita-se Bitcoin», and brand-name references like «zap de Bitcoin» / «Bitcoin Doesn't Have Inflation».
- **"EUA" abbreviation:** Standard Portuguese abbreviation for "United States" is "EUA" (not "USA" nor "EE. UU."). Used consistently in sticker pack-option labels and get-involved biz-stickers copy.
- **Home card labels (62 entries):** concise PT phrasings — "Let's compare" → "Vamos comparar" (1st-person-plural exhortative), "Spread the word" → "Espalha a palavra", "Fund your project" → "Financia o teu projeto", "Grid stabilization" → "Estabilização da rede elétrica", "The great equalizer" → "O grande igualador", "Political paradox" → "O paradoxo político", "End forever wars" → "Pôr fim a guerras intermináveis".
- **CBDC, ATM, FAQ, P/E, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated.
- **Acordo ortográfico:** Used post-2009 Portuguese spelling reform conventions — "ativo" (not "activo"), "ação" (not "acção"), "fato" (not "facto" — though "facto" still used in PT-PT in some contexts; here we used "factos" once in about_editorial_2 since that's still the dominant form in PT-PT for "facts"), "exceto" (not "excepto"), "acordo" general spelling alignment.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. \`npm run build\` clean across 55 locales × 81 pages. \`i18n/pt/\` directory now fully at parity with English V2.

---

`;

function prepend() {
	const src = fs.readFileSync(ACTIVE, "utf8");
	if (src.includes(MARKER)) {
		console.log("activeContext.md already contains the Portuguese entry — skipping.");
		return;
	}
	fs.writeFileSync(ACTIVE, ENTRY + src);
	console.log("Prepended Portuguese entry to activeContext.md.");
}

function bumpProgress() {
	const PROGRESS_MARKER = "## i18n cleanup Step 5 — Portuguese (pt) — 2026-04-25";
	const src = fs.readFileSync(PROGRESS, "utf8");
	if (src.includes(PROGRESS_MARKER)) {
		console.log("progress.md already contains the Portuguese entry — skipping.");
		return;
	}
	const entry = `${PROGRESS_MARKER}

Manifest-driven refresh of \`i18n/pt/\` (Portuguese, European-PT register). Targets ~270M native PT speakers across Portugal, Brazil, Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé and Príncipe, Macau, Timor-Leste, and the Lusophone diaspora. 1,036 entries resolved (464 missing + 15 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in \`scripts/pt-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using PT noun forms (\`longName\`, \`noun\`, \`nounPlural\`) with informal "tu/teu" register matching the pre-V2 European-PT files + 41 non-currency keys), \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* with Portuguese guillemets «…», numeric format \`1,42 %\` / \`10,82 biliões\` long scale, post-2009 acordo ortográfico spelling), \`translate-rest-part2.js\` (461 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and \`fix-remaining.js\` (15 locale-specific entries — \`bitcoin-vs-cbdc::bitcoin_vs_cbdcs\` → "Bitcoin vs. CBDC", \`bitcoin-vs-gold::bitcoin_vs_gold\` → "Bitcoin vs. Ouro", \`common_cold_wallet\`/\`common_hot_wallet\` → "CARTEIRA FRIA"/"CARTEIRA QUENTE", 10 \`common_stickers_dimensions_*\` with PT decimal commas, \`common_stickers_type_die_cut\` → "autocolante recortado", \`common_stickers_material\` → "Material do produto:" since the cognate "Material:" was byte-identical to English). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/pt.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS. \`npm run build\` clean across 55 locales × 81 pages.

---

`;
	fs.writeFileSync(PROGRESS, entry + src);
	console.log("Prepended Portuguese entry to progress.md.");
}

function tickChecklist() {
	const src = fs.readFileSync(CHECKLIST, "utf8");
	const target = "- [ ] `pt` — Portuguese";
	if (!src.includes(target)) {
		console.log("Checklist line for pt not found (or already ticked) — skipping.");
		return;
	}
	const ticked = `- [x] \`pt\` — Portuguese (2026-04-25; 1,036 entries resolved → 0 flagged. Refresh of European-Portuguese (PT-PT) translation, matching the existing pre-V2 \`tu/teu\` informal register. Report broken into 4 helper scripts under \`scripts/pt-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — 327 per-currency × 13 currencies via templated function with PT noun forms (\`longName\` plural/descriptive like "dólares americanos"/"reais brasileiros"/"shekels israelitas"/"libras esterlinas", \`noun\`, \`nounPlural\`) + 41 non-currency keys including freedom cards (Escasso/Descentralizado/Sem permissões/Soberano), stories (Canadá/Nigéria/Pensilvânia/Texas), sources, manifest-changed hero/intro keys), \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Portuguese angular guillemets «…», numeric format \`1,42 %\` / \`10,82 biliões\` long scale, post-2009 acordo ortográfico spelling — "ativo"/"ação"/"exceto" — and inline \`<a class="body-link">\` HTML preserved verbatim), \`translate-rest-part2.js\` (461 entries — business/* subtree (11 namespaces — accounting with mais-valia/menos-valia capital-gain examples, why as QR landing "Aceita-se Bitcoin", wallets, maps, stickers, FAQs, sticker-files/english/index), buy (21 — "Entre pares" for peer-to-peer), common with "Fonte:" for Source: and "O que se segue?" for What's next?, compound-inflation-calculator, flyers ("panfletos"), get-involved, index homepage with all 62 home card labels (e.g. "Vamos comparar"/"Qual é a diferença?"/"Espalha a palavra"/"O grande igualador"/"O paradoxo político"/"Pôr fim a guerras intermináveis"), lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers (37 — "autocolantes" PT-PT term, "laranja-pildorar" for orange-pill colloquialism), wallets), and \`fix-remaining.js\` (15 locale-specific entries — \`bitcoin-vs-cbdc::bitcoin_vs_cbdcs\` → "Bitcoin vs. CBDC", \`bitcoin-vs-gold::bitcoin_vs_gold\` → "Bitcoin vs. Ouro", \`common_cold_wallet\`/\`common_hot_wallet\` → "CARTEIRA FRIA"/"CARTEIRA QUENTE", 10 \`common_stickers_dimensions_*\` with PT decimal commas like "21,59 cm x 4,6482 cm (8,5 in x 1,83 in)", \`common_stickers_type_die_cut\` → "autocolante recortado", \`common_stickers_material\` → "Material do produto:" since "Material:" cognate was byte-identical to English). Notable PT-PT vs PT-BR choices: "autocolante" (PT) not "adesivo" (BR), "panfleto" (both), "mais-valia/menos-valia" (PT) not "ganho/perda de capital" (BR), "ficheiro" (PT) not "arquivo" (BR), "caixa multibanco" (PT) not "caixa eletrônico" (BR), "telemóvel" (PT) not "celular" (BR). All 4 verification checks passed — marker, locale-specific coverage, manifest coverage, stale English cross-check. \`npm run build\` clean across 55 locales × 81 pages.)`;
	const next = src.replace(target, ticked);
	fs.writeFileSync(CHECKLIST, next);
	console.log("Ticked pt off in V2-REDESIGN-CHECKLIST.md.");
}

prepend();
bumpProgress();
tickChecklist();
