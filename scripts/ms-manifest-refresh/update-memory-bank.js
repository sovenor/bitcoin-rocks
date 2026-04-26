#!/usr/bin/env node
/**
 * Prepends an entry for the Malay (ms) manifest refresh to
 * memory-bank/activeContext.md and updates the Step-5 counter in
 * memory-bank/progress.md.
 *
 * Idempotent — re-running is safe (string-anchored).
 */
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const ENTRY = `## Malay (ms) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Malay\` end-to-end. Twenty-ninth locale through the manifest-driven refresh pipeline. Malay (Bahasa Malaysia / Bahasa Melayu) is the official language of Malaysia (~33M speakers in Malaysia + ~5M in Brunei + sizable diaspora in Singapore) and a regional lingua franca alongside Indonesian — the two are mutually intelligible but use distinct vocabulary registers (Malay leans toward British-English borrowings and native Malay coinages; Indonesian leans toward Dutch-era borrowings and Sanskrit/Javanese roots). Malaysia has a small but growing Bitcoin community (Bitcoin Malaysia association, MyEG payment integration, Luno KL exchange) and uses the Malaysian ringgit (MYR — pegged-then-floated currency that has weakened against USD since 1997). The Securities Commission Malaysia regulates digital asset exchanges (DAX); Bank Negara Malaysia has historically been crypto-cautious without outright banning.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 10 untranslated (the 10 are dimension strings — \`common_stickers_dimensions_*\` measurements that the prior \`ms\` translation had left byte-identical to English)
- Manifest entries: 165 changed + 392 added → **1,031 total entries flagged**

**Helper-script split (4 scripts under \`scripts/ms-manifest-refresh/\`):**

1. **\`translate-inflation.js\`** (368 entries) — per-currency templated translator × 13 currencies using Malay noun forms (\`inIn\` "dalam X" prepositional phrase for "saving in X" — Malay uses preposition "dalam" rather than instrumental case, \`noun\`/\`nounPl\` (Malay has no plural inflection so they're identical, e.g. "dolar AS" both singular and plural), \`label\` for stat-card label, \`existenceTitle\` "X dalam edaran" for "currency in circulation", \`debtTitle\` "Jumlah hutang kerajaan X" for "Total X government debt"). Formal "anda" register throughout — the standard register for Bahasa Malaysia educational copy. **Critical Malay vs. Indonesian vocabulary swaps applied throughout** to keep \`ms\` byte-distinct from \`id\`: "wang"/"mata wang" (not "uang"/"mata uang"), "kerajaan" (not "pemerintah"), "akaun" (not "rekening"), "syarikat" (not "perusahaan"), "perniagaan" (not "bisnis"), "yuran"/"kos" (not "biaya"), "kad" (not "kartu"), "percuma" (not "gratis"), "simpanan" (not "tabungan"), "bekalan" (not "pasokan"), "pekerja" (not "karyawan"), "kerana" (not "karena"), "selepas" (not "setelah"), "berlaku" (not "terjadi"), "Amerika Syarikat" (not "Amerika Serikat"), "Jepun" (not "Jepang"), "British" (not "Inggris"), "Mexico" (not "Meksiko"), "Brazil" (not "Brasil"), "New Zealand" (not "Selandia Baru"), "bilion/trilion" short scale (not Indonesian "miliar/triliun"). Currency adjective+root pattern: "Dolar AS"/"Euro"/"Dolar Australia"/"Real Brazil"/"Dolar Kanada"/"Paun British"/"Shekel Israel"/"Rupee India"/"Yen Jepun"/"Peso Mexico"/"Dolar New Zealand"/"Peso Filipina"/"Baht Thailand". Freedom cards: Langka (scarce) / Tidak Berpusat (decentralized) / Tanpa Kebenaran (without permission) / Berdaulat (sovereign). 5 manifest-changed hero/intro keys including new \`inflation_h1_orange\` → "Bitcoin tiada inflasi, tetapi wang anda ada."

2. **\`translate-rest-part1.js\`** (193 entries) — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with straight ASCII quotes (standard Malay digital convention), no diacritics needed (Latin script), inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Malay terminology — "Bitcoin" preserved as-is (universal), "dompet" (wallet — same as Indonesian since both languages share this Sanskrit-derived root), "inflasi" (inflation — same as Indonesian, Latin loanword), "capital gain"/"capital loss" (kept as English borrowings, standard in Malaysian financial press alongside native "keuntungan modal"/"kerugian modal"), "bank run" (kept as English — standard in Malaysian banking discourse), "self-custody" (kept as English borrowing), "blockchain" (kept as anglicism), "rizab penuh"/"rizab pecahan" (full reserve / fractional reserve — Malaysian banking terminology), "hutang kerajaan" (government debt). Numeric format with period decimal + comma thousands per Malaysian convention — e.g. "$153.9 bilion" / "$10.82 trilion" / "1.42%" / "$250,000"; "juta/bilion/trilion" on short scale matching English. Comparison page hero titles use \`<span class="orange">Bitcoin</span>\` and \`<span class="asset">Asset</span>\` with "Perbezaan antara" instead of Indonesian "Perbedaan antara" — the standalone vocabulary swap that most clearly distinguishes \`ms\` from \`id\` in display copy.

3. **\`translate-rest-part2.js\`** (398 entries) — business/* subtree across all 11 namespaces: \`business/accounting\` with "harga kos" (cost basis) tracking + capital gain/loss examples, "Bitcoin diterima di sini" customer-facing QR landing on \`business/why\` (matches Malaysian merchant signage convention), \`business/wallets\` with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, \`business/maps\` (BTC Map listing form), \`business/stickers\`, \`business/faq\`, \`business/index\` ("Bitcoin untuk perniagaan" navigation labels: PERAKAUNAN / SOALAN LAZIM / PETA PENIAGA / GANJARAN / PELEKAT / DOMPET), success pages, and \`business/sticker-files/english/index\`. Plus \`buy\`, \`common\` with "Sumber:" for "Source:" and "Apa seterusnya?" for "What's next?", \`compound-inflation-calculator\`, \`flyers\`, \`get-involved\`, \`lightning\`, \`nostr/index\`, \`sticker-files/index\`, \`sticker-language-success\`, \`sticker-success\`, \`stickers\`, \`wallets\`. Note "pelekat" used for "sticker" (not Indonesian "stiker") — Malay coinage from "lekat" (to stick).

4. **\`translate-locale-specific.js\`** (72 entries) — combines the \`index\` namespace 62 missing home card labels with the remaining locale-specific gaps across other namespaces (about brand-identical fields, bank-runs FDIC value, business/accounting brand sources, business/wallets STRIKE BUSINESS label, common navigation/source labels, compound-inflation-calculator FRED dataset names, lightning paper citation, nostr/index brand names like Amethyst/Damus/Iris/Primal, stickers Bitcoin brand, wallets brand citations). Index home card labels include: "Mari kita bandingkan" for "Let's compare", "Apa bezanya?" for "What's the difference?", "Seni jalanan" for "Street art", "Sebarkan berita" for "Spread the word", "Sistem rizab penuh" for "Full reserve system", "Tutorial interaktif" for "Interactive tutorial", "Bina perkakasan" for "Build hardware", "Wang yang tidak dapat dihalang" for "Unstoppable money", "Penstabilan grid" for "Grid stabilization", "Pengelektrikan luar bandar" for "Rural electrification", "Pengurangan metana" for "Methane reduction", "Industri terhijau" for "Greenest industry", "Harapan & peluang" for "Hope and opportunity", "Pengubah permainan" for "A game changer", "Rejim autoritarian" for "Authoritarian regimes", "Asas pemula" for "Beginner basics", "Penguatkuasaan hak asasi manusia" for "Human rights enforcement", "Bitcoin adalah wang yang lebih baik" for "Bitcoin is better money", "Pandangan rangkaian langsung" for "Live network view", "Kiriman wang" for "Remittances", "Paradoks politik" for "Political paradox", "Pemilikan sebenar" for "True ownership", "Lindungi gaji anda" for "Protect your salary", "Wang berdaulat" for "Sovereign money", "Hentikan perang tanpa akhir" for "End forever wars", "Pelarian zaman perang" for "Wartime escape", + the homepage H1 "Bitcoin ialah wang yang lebih baik yang sedang membina dunia yang lebih baik." and nav labels "Pelajari" / "Terlibat" / "Tentang". The 10 \`common_stickers_dimensions_*\` measurements were rewritten with Malay "inci" abbreviation instead of "in" — e.g. "21.59 cm x 4.6482 cm (8.5 inci x 1.83 inci)" using period decimal per Malaysian convention.

**Edge cases:**
- Locale was already on V1 with all locale-specific gaps under 100 keys — relatively complete pre-V2, primarily missing the V2 \`index\` home card labels (62 of the 75 locale-specific missing keys) plus brand/source citations added during Step 3.5.
- Malay vs. Indonesian byte-distinctness: every namespace was reviewed line-by-line to apply the Malay vocabulary register systematically rather than copy-paste from \`id\`. Key examples in display copy: "Sila ambil perhatian" (please note) vs Indonesian "Harap diperhatikan", "Sentiasa" (always) vs "Selalu", "Mengelakkan" (avoid) vs "Menghindari". This avoided the \`untranslated\` audit flagging \`ms\` as byte-identical-to-\`id\` (the audit scripts only check vs. English, but a future Malay-vs-Indonesian byte-distinctness check could leverage this work).
- "Pelekat" for "sticker" — chosen over "stiker" (which exists in Malay but is the Indonesian preference). The Malay Dewan Bahasa dan Pustaka (DBP) prescribes "pelekat" as the preferred form.
- "Perniagaan" for "business" — chosen over "bisnis" (the Indonesian preference, which is also accepted in informal Malay but reads as anglicism). DBP prescribes "perniagaan" for formal/educational copy.
- Comparison page hero title pattern: "Perbezaan antara <Bitcoin> dan <Asset>" (Malay) vs "Perbedaan antara <Bitcoin> dan <Asset>" (Indonesian) — the single-letter "z/d" swap is the most consistent visual marker that distinguishes the two languages on display copy.
- Schema.org compatibility kept verbatim: dataset citations like "Federal Reserve Economic Data (FRED) — Money Supply (Indeks Kategori)" replace the parenthetical "Category Index" with Malay "Indeks Kategori" but keep the upstream proper-noun chain to maintain schema.org \`citations[].name\` relevance.
- All 4 verification checks passed on first apply — marker, locale-specific coverage, manifest coverage, stale pre-V2 English cross-check.
- \`npm run build\` clean across 55 locales × 81 pages.

**Tooling refinements (none).** \`language-diff.js\` + \`apply-translations.js\` + \`verify-language.js\` used as-is. The marker at \`scripts/i18n-audit/v2-refresh-status/ms.json\` now pins \`d966f8c780c0c485...\` (current manifestVersion).

---

`;

function prependActiveContext() {
	const cur = fs.readFileSync(ACTIVE, "utf8");
	if (cur.includes("Malay (ms) manifest refresh")) {
		console.log("activeContext.md already contains the Malay entry — skipping.");
		return;
	}
	fs.writeFileSync(ACTIVE, ENTRY + cur);
	console.log("Prepended Malay entry to memory-bank/activeContext.md.");
}

function bumpProgressCounter() {
	const cur = fs.readFileSync(PROGRESS, "utf8");
	// Try to replace "28 / 54" or "28/54" with "29 / 54" / "29/54".
	let next = cur.replace(/\b28\s*\/\s*54\b/g, (m) =>
		m.replace("28", "29"),
	);
	if (next === cur) {
		console.log(
			"progress.md: no '28/54' counter found to bump — leaving file unchanged. (Manual review may be needed.)",
		);
		return;
	}
	fs.writeFileSync(PROGRESS, next);
	console.log("Bumped Step-5 counter 28 → 29 in memory-bank/progress.md.");
}

prependActiveContext();
bumpProgressCounter();
