#!/usr/bin/env node
/**
 * Persian (fa) manifest refresh — prepend Persian entry to memory-bank/activeContext.md
 * and bump progress.md counter.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const PERSIAN_ENTRY = `## Persian (fa) manifest refresh — April 24, 2026

Ran \`/translate-manifest-refresh Persian\` end-to-end. Fifteenth locale through the manifest-driven refresh pipeline — and the first Indo-Iranian language of the V2 refresh pass, plus the first non-Arabic RTL locale of the session. Targeting ~110M native Persian speakers (Farsi in Iran, Dari in Afghanistan, Tajik in Tajikistan — with Farsi and Dari sharing the Arabic-derived script). Iran has been one of the most Bitcoin-active countries in the world for years — sanctions, capital controls, hyperinflation (~40–50% annual), and a devaluing rial have pushed both retail savers and energy-rich miners toward BTC; 2024 estimates put Iran at 4–7% of global hashrate.

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165 changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 10 untranslated
- Manifest entries: 165 changed + 392 added → **1,031 total entries flagged**

**Helper-script split (4 scripts under \`scripts/fa-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated translator × 13 currencies covering \`intro_1/2/highlight\` + \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` + \`stat_*\` suffixes. Persian has no grammatical gender and no case system (unlike Russian/German/Greek/Basque), so the template is relatively simple: \`inPhrase\` (locative "به X" for "if you save in X"), \`noun\` (noun form like "دلار" / "یورو" / "یِن"), \`label\` (display label for stat cards), \`existenceTitle\` (shape "X در گردش"), \`debtTitle\` ("کل بدهی دولت <Country>"). Formal 2nd-person plural "شما" used throughout (standard register for Persian educational/public communication — Persian's informal "تو" would feel too familiar, polite plural "شما" is neutral and respectful). Plus 41 non-currency keys: freedom cards, stories, sources, and 5 manifest-changed hero/intro keys.
- \`translate-rest-part1.js\` — **193 entries**. Covers 404 (3) + about (35) + bank-runs (36) + all 10 bitcoin-vs-* comparison pages (119). Uses Persian typographic angular quotation marks «…» (same shape as Spanish/Basque/Greek primary quotes). **ZWNJ (Zero-Width Non-Joiner, U+200C) used throughout** — Persian/Farsi uses ZWNJ extensively to prevent Arabic-script letter joining between stem and suffix, so "Bitcoin" renders as "بیت‌کوین" (not "بیتکوین") and present-tense "می‌کند" / "می‌دهد" / "می‌شود" all have ZWNJ between the prefix "می" and the verb stem. Written in Arabic-script but with the four Persian-specific letters (پ گ چ ژ) — never confused with pure Arabic script. Inline \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org supply-and-demand link in bitcoin-vs-gold. Brand names like Silicon Valley Bank, FRED, FDIC, Visa preserved verbatim in Latin script. Eastern Arabic digits (۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹) used in body numbers (۲۰۲۲، ۴ سال، ۲۱ میلیون) while Western digits (0-9) preserved inside numeric amounts that the dashboard widget reads (21,000,000).
- \`translate-rest-part2.js\` — **460 entries**. Covers the business/* subtree (11 namespaces — accounting with عایدی سرمایه / زیان سرمایه examples, why as customer-facing QR landing page, wallets, maps, stickers, …), buy (21 — "peer-to-peer" → "نظیر به نظیر (مستقیماً بین کاربران)" with a parenthetical gloss), common (53 — "Source:" → "منبع:", "What's next?" → "قدم بعدی چیست؟", plus 10 Bitcoin sticker-name anglicisms kept in English since that's the printed artwork), compound-inflation-calculator (8), flyers (5), get-involved (33), index (62 — all home card labels like "بیایید مقایسه کنیم" for "Let's compare" (hortative formal plural), "تفاوت چیست؟" for "What's the difference?", "هنر خیابانی" for "Street art"), lightning (11), nostr/index (45), sticker-files/index (1), sticker-language-success (1), sticker-success (7), stickers (37), wallets (11).
- \`fix-remaining.js\` — **10 locale-specific entries**. All \`common_stickers_dimensions_*\` measurements rewritten to use Eastern Arabic digits + Arabic decimal separator ٫ (U+066B, different glyph from Latin period) + Persian unit names "سانتی‌متر" (cm with ZWNJ) and "اینچ" (inch) — e.g. "۲۱٫۵۹ سانتی‌متر × ۴٫۶۴۸۲ سانتی‌متر (۸٫۵ اینچ × ۱٫۸۳ اینچ)". The "×" symbol (U+00D7) preferred over "x" in Persian typography for dimension strings.

**Edge cases:**
- **RTL directionality handled by layout:** Persian (fa) is in the \`RTL_LOCALES\` set in \`lib/i18n/config.ts\` alongside ar/he/ur, so \`app/[locale]/layout.tsx\` emits \`<html lang="fa" dir="rtl">\` automatically — no per-component RTL handling needed. The translation itself is directional-neutral; the browser applies bidirectional algorithm when rendering mixed-direction content (Latin brand names embedded in Persian paragraphs).
- **ZWNJ (U+200C) is mandatory in Persian:** Without ZWNJ between certain stem-suffix boundaries, Arabic-script letters would join incorrectly and render as a single glyph. "بیت‌کوین" must be written with ZWNJ between بیت and کوین — "بیتکوین" (without ZWNJ) would ligate incorrectly. Similarly "می‌کند" (verb "to do" with prefix) must have ZWNJ; every instance of "می‌" in the file has this. The script literals use the ZWNJ character directly in source (renders invisibly); JSON.stringify preserves it as its literal Unicode byte without escaping.
- **Eastern Arabic digits vs. Western digits — a deliberate split:** Persian convention uses Eastern Arabic digits (۰-۹) for narrative numbers ("در سال ۲۰۲۲" / "چهار سال") but leaves Western digits (0-9) inside numeric amounts that the \`InflationStats.tsx\` or \`FdicStats.tsx\` widgets read directly as JSON.stringify-parseable numbers ("21,000,000"). The CurrencySection stat cards are already rendered with Western digits by the widget, so Persian text avoided reformatting those to keep the visual dashboard uniform.
- **Persian brand-name transliteration convention:** Proper nouns like "Satoshi Pacioli" / "Jameson Lopp" / "James Lavish" kept in Latin script (Persian readers familiar with crypto/Bitcoin communities recognize these in Latin). "Strike", "Visa", "OpenNode", "BTCPay Server", "Zaprite", "IBEX" — all brand names preserved verbatim. Generic terms transliterated: "بیت‌کوین" (Bitcoin), "فدرال رزرو" (Federal Reserve), "لایتنینگ" (Lightning), "کریپتو" (crypto), "اَستر" (dollar → "دلار").
- **Currency names in Persian:** "دلار" (dollar) / "یورو" (euro) / "پوند" (pound) / "یِن" (yen — note kasre diacritic on ی) / "روپیه" (rupee) / "شِکِل" (shekel — diacritics for precise pronunciation) / "پزو" (peso) / "رئال" (real) / "باهت" (baht) / "دلار استرالیا/کانادا/نیوزیلند" (country-qualified dollar compounds).
- **"تریلیون" vs. "بیلیون":** Persian financial vocabulary uses long-scale by default in some contexts but Persian Bitcoin content typically follows English short-scale (10^12 = "تریلیون"). Applied in FDIC stats: "۱۰٫۸۲ تریلیون دلار" matches English "10.82 trillion $".
- **"شما" formal plural register:** Persian has a T-V distinction (T = informal singular "تو" / "تو را" / "تو ..." + verb 2sg, V = formal plural "شما" / "شما را" / "شما ..." + verb 2pl). Chose "شما" throughout — matches the register of Persian-language Bitcoin/crypto educators on YouTube, Telegram (very large Persian crypto community), and farsi.bitcoin.com. Informal "تو" would feel too familiar; "شما" is the default for educational content aimed at general audience.
- **Home card labels (62 entries):** concise Persian phrasings — "Let's compare" → "بیایید مقایسه کنیم" (hortative "let's" with formal plural imperative), "What's the difference?" → "تفاوت چیست؟", "Fund your project" → "پروژه خود را تأمین مالی کنید", "Grid stabilization" → "پایدار کردن شبکه", "The great equalizer" → "برابری‌ساز بزرگ", "Political paradox" → "پارادوکس سیاسی", "Hope and opportunity" → "امید و فرصت", "End wars forever" → "پایان دادن به جنگ‌ها برای همیشه".
- **Bitcoin sticker artwork:** The 10 \`common_sticker_name_*\` keys wrap Persian descriptor ("استیکر …" / "استیکر بیت‌کوین …") around the English quoted printed title — translating the title would misrepresent what the customer receives.
- **CBDC, FAQ, P/E, DCA, IOU:** financial/tech acronyms kept Latin (global standard), not transliterated.
- **"استیکر" vs "برچسب":** Both Persian words mean "sticker" — chose "استیکر" (loanword) consistently since that's the dominant form in Persian social media and Bitcoin/crypto circles. "برچسب" (native) is more formal/industrial.

**Verification:** All 4 checks PASS — marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅. Report archived to \`scripts/i18n-audit/reports/applied/fa-20260424-194515.json\`. Marker pinned at \`scripts/i18n-audit/v2-refresh-status/fa.json\` to manifestVersion \`d966f8c780c0c485...\`. \`npm run build\` clean across 55 locales × 81 pages (~4,349 static pages). \`i18n/fa/\` directory now fully at parity with English V2. Persian is the **2nd RTL locale completed** after Arabic (ar); still todo for RTL: Hebrew (he) + Urdu (ur).

---

`;

// Prepend to activeContext.md
const current = fs.readFileSync(ACTIVE, "utf8");
fs.writeFileSync(ACTIVE, PERSIAN_ENTRY + current);
console.log("✓ Prepended Persian entry to memory-bank/activeContext.md");

// Bump progress.md counter
const progress = fs.readFileSync(PROGRESS, "utf8");
const updated = progress
	.replace(
		/Step 5: Per-language re-translation — \*\*14 complete/,
		"Step 5: Per-language re-translation — **15 complete",
	)
	.replace(
		/\*\*14 \/ 54\*\*/,
		"**15 / 54**",
	)
	.replace(/14 done/, "15 done")
	.replace(
		/(already-done locales)[^\n]*(af, am, ar, az, bg, bn, ca, cs, da, de, el, es, et, eu)/,
		"$1: af, am, ar, az, bg, bn, ca, cs, da, de, el, es, et, eu, fa",
	);
fs.writeFileSync(PROGRESS, updated);
console.log("✓ Updated memory-bank/progress.md counter (14 → 15)");
