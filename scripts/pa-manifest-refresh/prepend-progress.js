#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const PROGRESS = path.resolve(
	__dirname,
	"..",
	"..",
	"memory-bank",
	"progress.md",
);

const ENTRY = `## i18n cleanup Step 5 — Punjabi (pa) — 2026-04-25

**Counter:** 33/54 languages complete. Thirty-third manifest-driven refresh —
first locale of the Indo-Aryan branch's Eastern subgroup (after Hindi covered
the Western/Central subgroup). Punjabi (ਪੰਜਾਬੀ) is written in Gurmukhi
script in India and in Shahmukhi (Perso-Arabic) script in Pakistan; this
locale targets the Gurmukhi version, which is canonical for the Indian state
of Punjab and the Sikh diaspora worldwide. Punjabi reaches ~113M speakers
globally — the 10th most spoken language on Earth — with significant
Bitcoin-curious diaspora reach across Canada, the UK, the US, Australia,
and the Gulf states. India's UPI-driven digital-payments boom plus Pakistan's
PKR inflation context make pa a high-impact reach locale. 1,094 entries
resolved (537 missing + 0 untranslated + 165 manifest-changed + 392
manifest-added) across 4 helper scripts in \`scripts/pa-manifest-refresh/\`:
\`translate-inflation.js\` (368 entries — per-currency templated translator
× 13 currencies using Punjabi nominal forms (\`inPhrase\` "X ਵਿੱਚ" locative
case, \`noun\`, \`nounPlural\`, \`label\`, \`existenceTitle\` "ਪ੍ਰਚਲਨ
ਵਿੱਚ X", \`debtTitle\` "X ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ") with polite 2nd-person
plural "ਤੁਸੀਂ" register throughout (the universal register for Punjabi
educational content per BBC Punjabi, Punjab Tribune, Jagbani; informal ਤੂੰ
would feel disrespectful in finance copy); Western digits (0-9) for numeric
figures matching modern Punjabi financial press conventions; "Bitcoin" →
"ਬਿਟਕੌਇਨ" (Gurmukhi transliteration, standard); plus 41 non-currency keys
including freedom cards (ਦੁਰਲੱਭ/ਵਿਕੇਂਦਰੀਕ੍ਰਿਤ/ਬਿਨਾਂ ਇਜਾਜ਼ਤ/ਪ੍ਰਭੂਸੱਤਾ
ਸੰਪੰਨ), stories (ਕੈਨੇਡਾ/ਨਾਈਜੀਰੀਆ/ਪੈਨਸਿਲਵੇਨੀਆ/ਟੈਕਸਾਸ), sources, and 5
manifest-changed hero/intro keys), \`translate-rest-part1.js\` (193 entries
— 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with
straight ASCII quotes per Punjabi digital convention, Gurmukhi script
throughout, inline \`<a class="body-link">\` HTML preserved verbatim for the
Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org
supply-and-demand link in bitcoin-vs-gold; Punjabi terminology — "ਬਿਟਕੌਇਨ"
preserved (Gurmukhi transliteration), "ਵਾਲਿਟ" (wallet), "ਮਹਿੰਗਾਈ"
(inflation), "ਪੂੰਜੀ ਲਾਭ"/"ਪੂੰਜੀ ਹਾਨੀ" (capital gain/loss), "ਬੈਂਕ ਰਨ"
(kept as anglicism in Gurmukhi), "ਸੈਲਫ਼-ਕਸਟਡੀ" (kept as anglicism),
"ਬਲਾਕਚੇਨ" (kept as anglicism, widely used); FDIC stat preserves
"$153.9 ਬਿਲੀਅਨ" / "$10.82 ਟ੍ਰਿਲੀਅਨ" / "1.42%" with English numerals +
Gurmukhi multipliers ਮਿਲੀਅਨ/ਬਿਲੀਅਨ/ਟ੍ਰਿਲੀਅਨ on short scale matching
English), \`translate-rest-part2.js\` (460 entries — business/* subtree
including all 11 namespaces (accounting with "ਲਾਗਤ ਆਧਾਰ" cost-basis
tracking, why as customer-facing QR landing "ਇੱਥੇ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕੀਤਾ
ਜਾਂਦਾ ਹੈ", wallets with Strike Business + Square +
IBEX/OpenNode/Breez/Zaprite, maps, stickers, sticker-success,
sticker-language-success, sticker-files/english, FAQs, etc.), buy, common
with "ਸਰੋਤ:" for "Source:" and "ਅੱਗੇ ਕੀ?" for "What's next?",
compound-inflation-calculator, flyers, get-involved, index homepage with
all 62 home card labels (e.g. "ਤੁਲਨਾ ਕਰੋ" for "Let's compare", "ਕੀ ਫ਼ਰਕ
ਹੈ?" for "What's the difference?", "ਸਟ੍ਰੀਟ ਆਰਟ" for "Street art", "ਖੇਡ
ਬਦਲਣ ਵਾਲਾ" for "The great equalizer", "ਗਰਿੱਡ ਸਥਿਰੀਕਰਨ" for "Grid
stabilization", "ਉਮੀਦ ਅਤੇ ਮੌਕਾ" for "Hope and opportunity", "ਅੰਤਹੀਣ ਜੰਗ
ਦਾ ਅੰਤ" for "End forever wars", "ਪ੍ਰਭੂਸੱਤਾ ਸੰਪੰਨ ਪੈਸਾ" for "Sovereign
money"), lightning, nostr/index, sticker-files/index, sticker-language-success,
sticker-success, stickers, wallets), and \`fix-remaining.js\` (73
locale-specific entries — full business/faq legacy V1 content (9 sections
× Q+A with 2-7 sub-paragraphs each covering "What is Bitcoin?", "How can
Bitcoin benefit my business?", "How do I accept Bitcoin payments?",
local-currency conversion, in-person/online acceptance, sticker requests,
customer growth, cost) + business/maps + business/sticker-files/english/index
+ business/stickers + business/wallets V1 keys (feature flags like
"ਸਿਰਫ਼-ਬਿਟਕੌਇਨ ਵਾਲਿਟ", "ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ", "ਆਮ੍ਹਣੇ-ਸਾਮ੍ਹਣੇ ਅਤੇ ਆਨਲਾਈਨ
ਭੁਗਤਾਨ", processor brand names BREEZ/BTCPAY SERVER/IBEX PAY/OPEN
NODE/SQUARE/ZAPRITE preserved verbatim, intro paragraphs)). Marker pinned
at \`scripts/i18n-audit/v2-refresh-status/pa.json\` to manifestVersion
\`d966f8c780c0c485...\`. All 4 verification checks PASS (marker ✅ /
locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅).
\`npm run build\` clean across 55 locales × 81 pages.

**What's left in Step 5:** 21 locales (pl, pt, ro, ru, si, sk, sl, sv, sw,
ta, th, tl, tr, ur, uz, vi, yo, zh, zu) — pl/pt/ru/zh are big remaining
audiences in particular. Run \`/translate-manifest-refresh <Language Name>\`
one locale per session (one helper-script bundle per locale under
\`scripts/<lang>-manifest-refresh/\`).

---

`;

const cur = fs.readFileSync(PROGRESS, "utf8");
fs.writeFileSync(PROGRESS, ENTRY + cur);
console.log(
	"✓ Prepended Punjabi entry to memory-bank/progress.md (counter 32 → 33)",
);
