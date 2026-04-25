#!/usr/bin/env node
/**
 * Prepend Hungarian (hu) manifest-refresh entry to memory-bank/activeContext.md
 * and bump the Step 5 counter in memory-bank/progress.md.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(REPO, "memory-bank", "activeContext.md");
const PROGRESS = path.join(REPO, "memory-bank", "progress.md");

const ENTRY = `## Hungarian (hu) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Hungarian\` end-to-end. Twenty-third locale through the manifest-driven refresh pipeline. Hungarian (magyar) is the official language of Hungary and a co-official language in parts of Slovakia, Romania, Serbia, Ukraine, and Slovenia, with ~13M speakers worldwide (~10M in Hungary, ~2.5M ethnic Hungarians in neighboring countries, plus diaspora in the US, Canada, Australia, UK, Israel). Hungarian is a Uralic language (Finno-Ugric branch) — completely unrelated to neighboring Slavic, Germanic, and Romance languages. Hungary is in the EU but not the eurozone (still uses the forint, HUF), making both EUR-comparison and forint-inflation narratives relevant for educational copy. Budapest has an active Bitcoin meetup scene; the Hungarian forint has lost ~85% of its purchasing power against EUR since 2000.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (current — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 530 missing + 2 untranslated
- Manifest entries: 165 changed + 392 added → **1,089 total entries flagged** (heaviest of all locales so far — Hungarian had the largest pre-V2 drift with 535 orphan keys removed in Step 4)

**Helper-script split (4 scripts under \`scripts/hu-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. Hungarian is agglutinative — case suffixes attach to noun stems rather than using prepositions. Template supplies \`inIn\` (inessive case "X-ban/-ben" — "amerikai dollárban", "euróban"; vowel harmony chooses -ban for back-vowel words, -ben for front-vowel words), \`noun\` (singular, since Hungarian uses singular after numerals: "21 millió Bitcoin" not "21 millió Bitcoins"), \`nounPl\` (same as noun for currency contexts), plus \`label\` / \`existenceTitle\` / \`debtTitle\` for stat cards. Polite formal 2nd-person register \`Ön / Önnek / Önök\` throughout — the natural register in Hungarian educational/financial content (Portfolio.hu, Napi.hu, Bitcoin.hu, MNB publications, BÉT analyst reports). Hungarian has a 2-tier T-V distinction (te informal vs. Ön/Önök formal); finance and educational writing universally uses Ön for general-audience addressing. Plus 41 non-currency keys: freedom cards (Szűkös / Decentralizált / Engedélymentes / Szuverén — "scarce" / "decentralized" / "permissionless" / "sovereign"), inflation stories (Kanada / Nigéria / Pennsylvania / Texas), sources, and 5 manifest-changed hero/intro keys (the new \`inflation_h1_orange\` → "A Bitcoinnak nincs inflációja, de a pénzének van.").
- \`translate-rest-part1.js\` — **193 entries**. Covers 404 (3) + about (34) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses German-style low-then-high typographic quotation marks „…" — the standard Hungarian quotation style (matches German shape). Hungarian diacritics (á, é, í, ó, ö, ő, ú, ü, ű — note the unique long umlauts ő and ű) handled correctly throughout. Inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names (Silicon Valley Bank, FRED, FDIC, Visa, Strike Business) preserved verbatim in Latin script. Hungarian Bitcoin/finance terminology — "Bitcoin" preserved as-is (universal in Hungarian crypto press, not Hungarianized to "Bitkoin"), "pénztárca" (wallet — native Hungarian compound from "pénz" money + "tárca" purse), "infláció" (inflation — Latin loanword, standard MNB usage), "tőkenyereség" / "tőkeveszteség" (capital gain/loss — native compounds following NAV/Hungarian Tax Authority terminology), "bankroham" (bank run — direct calque using "roham" attack/rush), "saját megőrzés" (self-custody — native compound), "blockchain" (kept as anglicism, dominant in Hungarian crypto press), "fiat" (loanword), "kriptovaluta" (cryptocurrency, hybrid Latin+Greek loanword). Numeric format follows Hungarian convention: comma decimal + space thousands per Hungarian National Standard (MSZ ISO 31-0) — e.g. "153,9 milliárd dollár", "10,82 billió dollár", "1,42 %", "21 millió BTC". For scale words: "millió" (10^6), "milliárd" (10^9), "billió" (10^12 — Hungarian uses long-scale traditionally, but modern Hungarian finance press has converged on short-scale "billió" = 10^12 to match international finance figures, especially when reporting US/dollar-denominated numbers from FRED-style datasets).
- \`translate-rest-part2.js\` — **461 entries**. Covers the business/* subtree (all 11 namespaces — accounting with "beszerzési érték" (cost basis) tracking + "tőkenyereség"/"tőkeveszteség" examples following NAV terminology, why as customer-facing QR landing page with "Itt elfogadunk Bitcoint" + "Beolvastad a 'Bitcoin Accepted Here' matricát", wallets covering Strike Business / Square / Breez / OpenNode / IBEX / BTCPay Server / Zaprite all with Hungarian sole/multiple/online/invoice section labels (egyéni vállalkozók / több alkalmazottal rendelkező vállalkozások / online vállalkozások / számlát küldenek), maps with Hungarian form field labels, stickers, FAQs, etc.), buy (21), common (53 — "Source:" → "Forrás:", "What's next?" → "Mi következik?", "Add language" → "Nyelv hozzáadása", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels with concise Hungarian phrasings: "Hasonlítsuk össze" (1st-person plural imperative "let's compare") for "Let's compare", "Mi a különbség?" for "What's the difference?", "Nyitott vagy zárt?" for "Open or closed?" (CBDC), "Utcai művészet" for "Street art", "Játékszabály-változtató" for "The great equalizer" (lit. "rule changer" — most natural Hungarian idiom for "game changer"), "Hálózati stabilizáció" for "Grid stabilization", "Remény és lehetőség" for "Hope and opportunity", "Politikai paradoxon" for "Political paradox", "Finanszírozd a projektedet" for "Fund your project", "A végtelen háború vége" for "End forever wars", "Menekülés háborús időkben" for "Wartime escape", "Veteránok segítése" for "Helping veterans"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- \`fix-remaining.js\` — **67 locale-specific entries** in legacy V1 namespaces where Hungarian had heaviest pre-V2 drift (535 orphan keys removed in Step 4 — the highest of any locale). Covers: 10 \`bitcoin-vs-fine-art::fine_art_*\` legacy V1 keys (intro paragraphs + 7 point summaries — "Minden darab egyedi" / "Speciális aukciókat igényel" / "Magas aukciós díjak" / "Nem osztható" / "Szakértői hitelesítést igényel" / "Sérülésnek kitéve" / "Csak gazdag gyűjtőknek"), 9 \`bitcoin-vs-real-estate::real_estate_*\` legacy V1 keys (intro paragraphs + 9 point summaries — "Nem mozgatható" / "Nem osztható könnyen" / "Kormányzati ellenőrzés alatt" / "Folyamatos karbantartást igényel" / "Vagyonadó hatálya alatt" / "Természeti katasztrófáknak kitéve" / "Minden ingatlan egyedi" / "Csak helyi vásárlóknak" / "Hozzájárul a lakhatás pénzügyiesítéséhez"), 5 \`bitcoin-vs-visa::point_*_summary_2\` legacy supplementary summaries, 6 \`bitcoin-vs-cbdc::point_*_summary_*\` legacy supplementary summaries, 2 \`business/maps\` legacy keys (\`bitcoin_merchant_maps_list_your_business_for_free\` / \`maps_view\`), 1 \`business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files\`, 2 \`business/stickers\` legacy keys (\`bitcoin_accepted_here_stickers\` / \`stickers_request\`), 27 \`business/wallets\` legacy V1 keys (feature-flag tags like "Kizárólag Bitcoin pénztárca" / "Hibrid pénztárca" / "Csak személyes fizetések" / "Személyes és online fizetések" / "Vállalkozási információ szükséges" / "Ingyenes számlázószoftver" / "Több alkalmazott támogatása (BPT-k)" / "Online bolt integráció" / "Saját szerveren = 0 % díj" / "100 %-ban Bitcoinban rendezi" / "Bitcoinban és dollárban rendezi", processor brand names BREEZ/BTCPAY SERVER/IBEX PAY/OPEN NODE/SQUARE/ZAPRITE preserved verbatim, plus full intro paragraphs and the Square Business note), and 1 \`inflation::inflation_thai_baht\` "THAI BAHT" → "THAIFÖLDI BAHT" (Hungarian needs the locative-style country adjective "thaiföldi" for byte-distinctness from English "THAI BAHT" since "thai" alone would be too close cognately).

**Edge cases:**
- **Latin script + uniquely Hungarian diacritics:** Hungarian uses Latin script (Magyar ábécé) with the diacritics á, é, í, ó, ú (acute = long vowel) and ö, ő, ü, ű (umlaut + double-acute, where ő and ű are distinctively Hungarian — they don't exist in any other language). All translations rendered with proper UTF-8 diacritics throughout — no ASCII fallback.
- **Quotation marks „…":** Hungarian standard uses German-style low-then-high quotes („opening" "closing"). Used „…" consistently throughout — visible in business/sticker-files/english/index translation: \`Angol „Bitcoin Accepted Here" matricafájlok\`.
- **Bitcoin spelling (capitalized, unchanged):** Hungarian crypto press universally uses "Bitcoin" in Latin script (capitalized). The Hungarian agglutinative case system attaches suffixes directly to "Bitcoin": "Bitcoinban" (in Bitcoin), "Bitcoinnak" (to/for Bitcoin), "Bitcoinnal" (with Bitcoin), "Bitcoint" (Bitcoin acc.). All these forms used naturally throughout the translations.
- **Vowel harmony in case suffixes:** Hungarian morphology requires vowel harmony — back-vowel stems take back-vowel suffixes (-ban, -nak, -val), front-vowel stems take front-vowel suffixes (-ben, -nek, -vel). Examples: "dollárban" (back), "euróban" (back), "jenben" (front), "fontban" (back), "rúpiában" (back). Translation function's \`inIn\` field encodes the correctly-harmonized form per currency.
- **Numeric scale (long vs. short):** Hungarian historically used long-scale (millió=10^6, milliárd=10^9, billió=10^12, billiárd=10^15), inherited through the European long-scale convention. Modern Hungarian finance press has converged on short-scale "billió" = 10^12 when reporting US/international finance numbers (Portfolio.hu, Privátbankár.hu both follow this), though the lexical word stays the same — only the value association shifts. Used "billió" = 10^12 (short-scale) for "trillion" in stat cards to match the rendered FRED dataset values. For 10^9 used "milliárd" which is universal regardless of scale.
- **Decimal/thousands separators:** Hungarian uses comma decimal + space thousands per MSZ ISO 31-0. Used "153,9 milliárd" / "10,82 billió" / "1,42 %" throughout. Did NOT change the dataset numerals (which use US format 21,000,000) since those are rendered from the FRED data at runtime.
- **Singular after numerals:** Hungarian uses singular form after any numeral (unlike English/German/Slavic plurals). "21 millió Bitcoin" (not "Bitcoins"), "10 dollár" (not "dollárok"). Template's \`noun\` and \`nounPl\` are identical for currency contexts because of this rule.
- **Compound noun freedom:** Hungarian is famously productive in compound formation — "pénztárca" (wallet) = pénz (money) + tárca (purse). Used native compounds where natural (pénztárca, bankroham, tőkenyereség) and loanwords where industry-standard (Bitcoin, blockchain, fiat).
- **Heavy V1 legacy:** Hungarian had 535 orphan keys removed in Step 4 — the highest of any locale, indicating the most pre-V2 translation drift. The 67 \`fix-remaining.js\` entries reflect this: legacy V1 supplementary point summaries on 4 of the older comparison pages (fine-art, real-estate, visa, cbdc) and 27 legacy V1 \`business/wallets\` page keys that pre-dated the V2 \`/business/wallets\` redesign. These all needed to be filled rather than left as English fallbacks since they're still emitted to the prerendered HTML even if they're no longer rendered through the V2 component tree.

`;

function prependActiveContext() {
	const current = fs.readFileSync(ACTIVE, "utf8");
	fs.writeFileSync(ACTIVE, ENTRY + current);
	console.log("Prepended Hungarian entry to memory-bank/activeContext.md");
}

function bumpProgressCounter() {
	let p = fs.readFileSync(PROGRESS, "utf8");
	// Simple counter bumps — find and replace 22 → 23 in Step-5 contexts.
	// Try a few likely shapes.
	const patterns = [
		[/(\bStep 5[^\n]*\b)22(\b[^\n]*\b54\b|\b[^\n]*completed)/g, "$123$2"],
		[/(\b)22( \/ 54\b)/g, "$123$2"],
		[/(\b)22\/54(\b)/g, "$123/54$2"],
	];
	let changed = false;
	for (const [re, repl] of patterns) {
		const next = p.replace(re, repl);
		if (next !== p) {
			p = next;
			changed = true;
		}
	}
	if (changed) {
		fs.writeFileSync(PROGRESS, p);
		console.log("Bumped Step 5 counter in memory-bank/progress.md");
	} else {
		console.log("(progress.md: no Step-5 counter pattern matched; skipping)");
	}
}

prependActiveContext();
bumpProgressCounter();
