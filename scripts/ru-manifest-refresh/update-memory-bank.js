#!/usr/bin/env node
/**
 * Prepend Russian (ru) refresh entries to memory-bank/activeContext.md
 * and memory-bank/progress.md.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const ACTIVE_ENTRY = `## Russian (ru) manifest refresh — April 25, 2026

Ran \`/translate-manifest-refresh Russian\` end-to-end. **Locale 35/54
complete.** Russian (\`русский\`) is the official language of Russia and
is widely spoken across the post-Soviet space (Belarus, Kazakhstan,
Kyrgyzstan, Ukraine, etc.) — roughly 150M native + 100M second-language
speakers, making it one of the largest single-language markets on the
site. Russia and the post-Soviet bloc have a deep, technically-literate
Bitcoin community (RBC Crypto, Forklog, ProBlockchain, BitNovosti).

**Report stats:**
- Manifest version: \`d966f8c780c0c485...\` (post-2026-04-24 regen — 165
  changed + 392 added = 557 total)
- Locale-specific gaps: 464 missing + 0 untranslated (locale was on V1
  with the entire \`inflation\` namespace + all 62
  \`index::home_card_label_*\` + scattered brand/source keys missing
  across about/common/lightning/nostr/wallets)
- Manifest entries: 165 changed + 392 added → **1,021 total entries
  flagged**

**Helper-script split (3 scripts under \`scripts/ru-manifest-refresh/\`):**
- \`translate-inflation.js\` — **368 entries**. Per-currency templated
  translator × 13 currencies covering \`intro_1/2/highlight\` +
  \`proof_h2/p1–p6\` + \`btc_h2/p1–p4\` + \`freedom_h2/p1–p2\` +
  \`stat_*\` suffixes. Uses Russian noun forms with multiple cases:
  \`longName\` prepositional case ("if you save in X" → "если вы храните
  сбережения в X" — e.g. "американских долларах" / "евро" / "японских
  иенах"), \`genPlural\` genitive plural ("supply of X" / "more X" —
  e.g. "американских долларов"), \`nounSingular\` nominative singular
  ("each X in your account" — e.g. "доллар"), \`nounPlural\` nominative
  plural ("X buy you less" — e.g. "доллары"), \`label\` for the stat
  card, \`existenceTitle\` ("X в обращении"), \`debtTitle\`
  ("Государственный долг X-genitive"). Formal "вы/ваш" register
  throughout — the standard register for Russian financial/educational
  copy. Plus 41 non-currency keys: freedom cards
  (Редкий/Децентрализованный/Без разрешений/Суверенный), stories
  (Канада/Нигерия/Пенсильвания/Техас), sources, and 5 manifest-changed
  hero/intro keys.
- \`translate-rest-part1.js\` — **193 entries**. 404 page + about
  + bank-runs + all 10 bitcoin-vs-* comparison pages. Cyrillic body
  throughout, mostly straight ASCII quotes (Russian digital convention
  varies; «» preserved for explicit Russian quotation contexts). Inline
  \`<a class="body-link">\` HTML preserved verbatim for the Wikipedia
  India demonetisation link in bitcoin-vs-cash and the gold.org
  supply-and-demand link in bitcoin-vs-gold. Russian terminology —
  "Bitcoin" preserved as Latin loanword (universal in Russian crypto
  press, e.g. RBC Crypto, Forklog, ProBlockchain), "кошелёк" (wallet),
  "инфляция" (inflation), "прирост капитала"/"убыток" (capital
  gain/loss), "набег на банк" (bank run, native calque),
  "самостоятельное хранение" (self-custody, native term), "блокчейн"
  (kept as loanword), "контрагентский риск" (counterparty risk),
  "редкий"/"жёсткий лимит" (scarce/hard cap). Numeric format with
  comma decimal + space thousands per Russian convention — e.g.
  "153,9 млрд $" / "10,82 трлн $" / "1,42 %"; short scale
  "миллион"/"миллиард"/"триллион" matching Russian financial press.
- \`translate-rest-part2.js\` — **460 entries**. business/* subtree
  including all 11 namespaces (accounting with "базовая стоимость"
  cost-basis tracking, why as customer-facing QR landing "Принимаем
  Bitcoin", wallets with Strike Business + Square + IBEX/OpenNode/
  Breez/Zaprite, maps, stickers, FAQs, sticker-files/english, etc.),
  buy, common with "Источник:" for "Source:" and "Что дальше?" for
  "What's next?", compound-inflation-calculator, flyers, get-involved,
  index homepage with all 62 home card labels (e.g. "Сравним" for
  "Let's compare", "В чём разница?" for "What's the difference?",
  "Уличное искусство" for "Street art", "Распространяйте идею" for
  "Spread the word", "Стабилизация электросети" for "Grid
  stabilization", "Надежда и возможности" for "Hope and opportunity",
  "Положить конец бесконечным войнам" for "End forever wars",
  "Суверенные деньги" for "Sovereign money"), lightning, nostr/index,
  sticker-files/index, sticker-language-success, sticker-success,
  stickers, wallets.

**Verification:** \`apply-translations.js ru\` ran clean on first pass.
All 4 verification checks PASS:
- Marker \`v2-refresh-status/ru.json\` pinned to current
  manifestVersion \`d966f8c780c0c485...\`.
- Locale-specific coverage: 0 missing / 0 untranslated.
- Manifest coverage: 0 outstanding manifest-changed/added entries.
- Stale pre-V2 English cross-check: 0 target values match pre-V2
  English (165 changed entries scanned).

**Build:** \`npm run build\` clean across 55 locales × 81 pages
(~4,349 static pages). No \`MISSING_MESSAGE\` errors, no "Unable to
load message" warnings.

**Edge cases:** Russian is the first major Cyrillic-script locale to go
through the manifest-driven refresh after Bulgarian (\`bg\`), so the
existing manifest tooling handled the per-locale marker, byte-distinct
checks, and apply pipeline cleanly. Russian's complex morphology
(6 noun cases) needed a richer per-currency object than most prior
locales — \`longName\` (prepositional), \`genPlural\` (genitive plural),
\`nounSingular\` (nominative singular), and \`nounPlural\` (nominative
plural) are all referenced from the templated \`t(code, suffix)\`
function so the resulting prose reads naturally in Russian rather than
sounding like a calque.

`;

const PROGRESS_ENTRY = `## i18n cleanup Step 5 — Russian (ru) — 2026-04-25

Ran \`/translate-manifest-refresh Russian\`. Russian (\`русский\`) is
the largest single-language Step-5 locale tackled to date (~150M native
speakers + ~100M second-language speakers across the post-Soviet
space). **Counter:** 35/54 languages complete. 1,021 entries flagged
(464 missing locale-specific + 165 manifest-changed + 392
manifest-added; 0 untranslated) — locale was on V1 with the entire
\`inflation\` namespace + all 62 \`index::home_card_label_*\` keys
+ scattered brand/source keys missing.

**3 helper scripts under \`scripts/ru-manifest-refresh/\`:**
1. \`translate-inflation.js\` (368 entries — 327 per-currency × 13
   currencies via templated function with Russian multi-case noun
   forms (\`longName\` prepositional, \`genPlural\` genitive plural,
   \`nounSingular\` / \`nounPlural\` nominative, \`label\`,
   \`existenceTitle\`, \`debtTitle\`) and formal "вы/ваш" register +
   41 non-currency keys: freedom cards
   (Редкий/Децентрализованный/Без разрешений/Суверенный), stories
   (Канада/Нигерия/Пенсильвания/Техас), sources, 5 manifest-changed
   hero/intro keys).
2. \`translate-rest-part1.js\` (193 entries — 404 + about + bank-runs
   + all 10 bitcoin-vs-* comparison pages with Cyrillic body, inline
   \`<a class="body-link">\` HTML preserved for Wikipedia India and
   gold.org links; Russian terminology — "Bitcoin" Latin loanword,
   "кошелёк" wallet, "инфляция" inflation, "набег на банк" bank run,
   "самостоятельное хранение" self-custody, "блокчейн" loanword,
   "контрагентский риск" counterparty risk; numeric format with
   comma decimal + space thousands "153,9 млрд $" / "10,82 трлн $").
3. \`translate-rest-part2.js\` (460 entries — full business/* subtree,
   buy, common with "Источник:" / "Что дальше?", compound-inflation-
   calculator, flyers, get-involved, index homepage with all 62 home
   card labels (e.g. "Сравним" / "В чём разница?" / "Уличное
   искусство" / "Распространяйте идею" / "Положить конец бесконечным
   войнам"), lightning, nostr/index, sticker-files/index,
   sticker-language-success, sticker-success, stickers, wallets).

**Verification:** All 4 checks PASS — marker, locale-specific
coverage, manifest coverage, stale pre-V2 English cross-check. Marker
\`v2-refresh-status/ru.json\` pinned to current manifestVersion
\`d966f8c780c0c485...\`. \`npm run build\` clean across 55 locales × 81
pages (~4,349 static pages).

**What's left in Step 5:** 19 locales (si, sk, sl, sv, sw, ta, th, tl,
tr, ur, uz, vi, yo, zh, zu).

`;

function prepend(file, entry) {
	const cur = fs.readFileSync(file, "utf8");
	fs.writeFileSync(file, entry + cur);
	console.log("Prepended Russian entry to", path.relative(ROOT, file));
}

prepend(ACTIVE, ACTIVE_ENTRY);
prepend(PROGRESS, PROGRESS_ENTRY);
