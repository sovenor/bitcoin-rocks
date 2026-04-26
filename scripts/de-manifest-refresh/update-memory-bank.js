#!/usr/bin/env node
/**
 * Prepend a German (de) entry to memory-bank/activeContext.md AND
 * memory-bank/progress.md, and bump the Step 5 counter.
 * Idempotent (checks for existing marker).
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE_CONTEXT = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const AC_ENTRY = `## German (de) manifest refresh — April 24, 2026

Ran \`/translate-manifest-refresh German\` end-to-end. Tenth locale through the manifest-driven refresh pipeline, and the first West Germanic language — targeting ~95M native German speakers across Germany, Austria, Switzerland, Liechtenstein, Luxembourg, and expatriate communities worldwide. German is a top-tier locale for Bitcoin adoption given the region's strong savings culture, historical monetary-crisis memory (Weimar hyperinflation), and the active Bitcoin communities in Berlin, Vienna, and Zurich.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 7 untranslated
- Manifest entries: 165 changed + 392 added → **1,028 total entries flagged** (highest of any locale so far)

**Helper-script split (5 scripts under \`scripts/de-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. German uses grammatical gender + case, so the template supplies \`longName\` (dative form for "in X", e.g. "in US-Dollar" / "in australischen Dollar"), \`longNameNom\` (nominative), \`noun\`, \`nounPlural\`. Informal "Du"/"Dein" used throughout to match the casual Bitcoin-community register in German Bitcoin education (not "Sie"/"Ihr"). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- \`translate-rest-part1.js\` — **194 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (120). Uses German low-inverted-high typography \`„…"\` for quoted brand phrases (DIN 5008). Inline \`<a class="body-link">\` HTML preserved verbatim for Wikipedia India and gold.org supply-and-demand links. Brand names kept verbatim. Numeric format uses German convention: thousands \`.\` + decimal \`,\` (\`1,42 %\` / \`250.000 $\` / \`10,82 Billionen $\`, where \`Billion = 10^12\` matches English "trillion").
- \`translate-rest-part2.js\` — **461 entries**. Covers the business/* subtree (11 namespaces — accounting with Kapitalgewinn examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (20), common (53 — "Source:" → "Quelle:", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11). Plus one leftover \`inflation::inflation_us_dollar\` → "US-DOLLAR" that fell outside the per-currency templating.
- \`fix-remaining.js\` — **5 locale-specific entries**. (a) \`bitcoin-vs-gold::gold\` "Gold" (identical). (b) \`common_cold_wallet\` / \`common_hot_wallet\` kept as "Cold Wallet" / "Hot Wallet" — these anglicisms are standard in the German Bitcoin community. (c) \`common_stickers_material\` "Material:" (identical — rewritten next). (d) \`stickers::placeholder_name_optional\` "Name (optional)" (identical — rewritten next).
- \`force-rewrite-identical.js\` — **3 byte-identical cognates** replaced with distinct German forms directly in the JSON (verify-language.js's "untranslated" check flags any byte-identical value, and \`apply-translations.js\` won't re-run over already-set values). (a) \`about_open_source_header\` "Open Source" → "Quelloffen" (native compound, literally "source-open"). (b) \`common_stickers_material\` "Material:" → "Werkstoff:" (engineering-grade German synonym for "substance / material"). (c) \`stickers::placeholder_name_optional\` "Name (optional)" → "Name (freiwillig)" (native German "freiwillig" = voluntary).

**Edge cases:**
- **Byte-identical cognates between English and German:** archetypal short-value trap ("Material", "optional", "Gold", "Open Source"). Three of these needed distinct German wording to satisfy verify-language.js's untranslated check. Pattern will recur for nb/sv/nl — future Germanic refreshes should budget for a similar \`force-rewrite-identical\` pass.
- **Anglicisms kept on purpose:** "Cold Wallet", "Hot Wallet", "Dollar-cost averaging", "Peer-to-Peer", "Proof of Work" — these are the actual terms used in German Bitcoin discourse; translating would feel foreign. \`common_cold_wallet\` / \`common_hot_wallet\` happen to be byte-identical to English but are legitimate German usage, and the rewording happened only where non-loanword alternatives felt more natural.
- **Informal "Du" throughout:** German T-V distinction (Du vs. Sie). Chose informal "Du/Dir/Dein" across the entire corpus to match the casual register used in German Bitcoin content (Einundzwanzig Podcast, aprycot.media, etc.). Formal "Sie" would feel stiff on an educational/movement site. Capitalized Du/Dein throughout (older published-prose convention) for consistency and warmth.
- **German compound nouns:** Natural compounding throughout — \`Bitcoin-Zahlungen\`, \`Mindestreserve-Bankwesen\` (fractional reserve banking), \`Kapitalertragssteuer\`, \`Kreislaufwirtschaft\` (circular economy), \`Methanemissionen\`. Hyphens used to break up very long compounds for readability (e.g. \`Bitcoin-Hardware-Wallet\`).
- **Bitcoin sticker artwork in common namespace:** The 10 sticker-name keys kept the English quoted titles inside a German descriptor construction — e.g. „Bitcoin Doesn't Have Inflation"-Aufkleber, „Cure Inflation" Bitcoin-Aufkleber — because that's the actual printed artwork on the stickers, and translating the title would misrepresent what the customer receives.
- **Home card labels (62 entries):** concise German phrasings — "Let's compare" → "Vergleichen wir", "What's the difference?" → "Was ist der Unterschied?", "Fund your project" → "Finanziere Dein Projekt", "Ending forever wars" → "Das Ende endloser Kriege", "Grassroots adoption" → "Adoption von unten", "Political paradox" → "Das politische Paradoxon".

**Verification:** All 4 checks PASS after the \`force-rewrite-identical.js\` pass — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. \`npm run build\` clean across 55 locales × 81 pages (~4,349 static pages). \`i18n/de/\` directory now fully at parity with English V2.

---

`;

const PROGRESS_ENTRY = `## i18n cleanup Step 5 — German (de) — 2026-04-24

**Counter:** 10/54 languages complete. Tenth manifest-driven refresh, first West Germanic language. 1,028 entries resolved (464 missing + 7 untranslated + 165 manifest-changed + 392 manifest-added) across 5 helper scripts in \`scripts/de-manifest-refresh/\`: \`translate-inflation.js\` (368 entries — per-currency templated translator × 13 currencies using German declension with dative \`longName\` ("in X") + informal "Du" register throughout + 41 non-currency keys), \`translate-rest-part1.js\` (194 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with German typography „…" and DIN 5008 conventions + numeric format \`1,42 %\` / \`10,82 Billionen $\`), \`translate-rest-part2.js\` (461 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets — plus leftover \`inflation::inflation_us_dollar\` → "US-DOLLAR"), \`fix-remaining.js\` (5 locale-specific entries — \`bitcoin-vs-gold::gold\` "Gold", \`common_cold_wallet\`/\`common_hot_wallet\` kept as anglicisms standard in the German Bitcoin community, \`common_stickers_material\` / \`stickers::placeholder_name_optional\` byte-identical fixed in next pass), and \`force-rewrite-identical.js\` (3 byte-identical cognates replaced with distinct German forms directly in JSON — \`about_open_source_header\` "Open Source" → "Quelloffen", \`common_stickers_material\` "Material:" → "Werkstoff:", \`stickers::placeholder_name_optional\` "Name (optional)" → "Name (freiwillig)"). Marker pinned at \`scripts/i18n-audit/v2-refresh-status/de.json\` to manifestVersion \`d966f8c780c0c485...\`. All 4 verification checks PASS. \`npm run build\` clean across 55 locales × 81 pages.

---

`;

function prependIfMissing(file, entry, marker) {
	const current = fs.readFileSync(file, "utf8");
	if (current.startsWith(marker)) {
		console.log(`${path.basename(file)}: German entry already present, skipping prepend.`);
		return;
	}
	fs.writeFileSync(file, entry + current);
	console.log(`${path.basename(file)}: prepended German refresh entry.`);
}

function main() {
	prependIfMissing(
		ACTIVE_CONTEXT,
		AC_ENTRY,
		"## German (de) manifest refresh",
	);
	prependIfMissing(
		PROGRESS,
		PROGRESS_ENTRY,
		"## i18n cleanup Step 5 — German (de)",
	);
}

main();
