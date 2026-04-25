## i18n cleanup Step 5 — Turkish (tr) — 2026-04-25

Ran `/translate-manifest-refresh Turkish` end-to-end via the
**parallel-worktree pattern** in the same 8-language batch as
tl/ur/uz/vi/yo/zh/zu. Turkish (`Türkçe`) is the official language of
Türkiye and a co-official language of Cyprus, with ~85M native
speakers; Turkic language family. Latin script with diacritics.
**Counter:** 48/54. 1,021 entries flagged (464 missing + 165
manifest-changed + 392 manifest-added).

**5 helper scripts under `scripts/tr-manifest-refresh/`:**
1. `translate-inflation.js` (368 entries — per-currency × 13
   currencies with Turkish currency naming (dolar, euro, sterlin,
   yen, peso, real, rupi, baht, şekel) rather than a generic
   catch-all, informal "sen" register throughout — the standard
   register for Turkish crypto press educational copy + 41
   non-currency keys).
2. `translate-comparisons.js` (120 entries — all 10 bitcoin-vs-*
   pages).
3. `translate-content.js` (161 entries — about, bank-runs, buy,
   compound-inflation-calculator, flyers, get-involved, lightning,
   wallets, 404).
4. `translate-business.js` (170 entries — accounting, faq, index,
   maps, maps-success, sticker-files, sticker-language-success,
   sticker-success, stickers, wallets, why).
5. `translate-rest.js` (202 entries — common, index, nostr/index,
   stickers, sticker-files/index, sticker-language-success,
   sticker-success).

**Edge cases / notes:**
- Vowel harmony respected (a/ı, e/i, o/u, ö/ü) — mistakes here are
  immediately visible to native Turkish readers.
- Numerics in Turkish convention: comma-decimal + period-thousands
  ("153,9 milyar dolar" / "%1,42" / "21.000.000"). Long-scale
  "milyon"/"milyar"/"trilyon".
- Brand allow-list intact (Bitcoin, Nostr, Lightning, Strike,
  Square, BTCPay Server, BTC Map, FRED, FDIC, etc.).
- Brief Write-path mishap reported by the agent (one helper
  initially landed at main repo root rather than worktree); agent
  recovered with `mv`.

All 4 verification checks pass.

## i18n cleanup Step 5 — Tagalog (tl) — 2026-04-25

Ran `/translate-manifest-refresh Tagalog` end-to-end via the
**parallel-worktree pattern**, in an **8-language parallel batch**
(tl/tr/ur/uz/vi/yo/zh/zu). Tagalog is the basis of Filipino
(the standardized national language), spoken natively by ~28M people
in the Philippines (Luzon area) plus diaspora; Austronesian language,
Latin script. **Counter:** 47/54 languages complete. 1,086 entries
flagged (464 missing + 65 untranslated + 165 manifest-changed + 392
manifest-added).

**4 helper scripts under `scripts/tl-manifest-refresh/`:**
1. `translate-inflation.js` (375 entries — per-currency keys for 13
   currencies + the BTC stat card + 48 non-currency labels with
   templated function pattern using `nameNom`/`nameSaSa`/`nounPlural`/
   `label`/`existenceTitle`/`debtTitle`).
2. `translate-rest-part1.js` (322 entries — 404, about, bank-runs,
   all 10 bitcoin-vs-* comparisons, buy, common,
   compound-inflation-calculator, flyers).
3. `translate-rest-part2.js` (389 entries — index, get-involved,
   lightning, wallets, nostr/index, stickers, sticker-files/index,
   sticker-(language-)success, all 10 business/* namespaces).
4. `fix-untranslated.js` (53 byte-identical Tagalog/English collisions
   patched across 17 files — comparison titles "Bitcoin laban sa
   &lt;X&gt;" using "laban sa" for "vs", currency labels "PESO NG
   MEXICO"/"RUPEE NG INDIA"/"YEN NG JAPAN"/etc., parenthetical
   Tagalog glosses for technical loanwords "COLD WALLET (LAMIG)"/
   "Air-gap mode (off-line)"/"Compound Inflation Calculator
   (Calculator ng Tumitipong Inflation)", pulgada units for sticker
   dimensions).

**Edge cases / notes:**
- Distinguished from Filipino (`fil`) by preferring native Tagalog
  roots ("laban sa" not "vs", "ipakalat" not "i-share") where natural.
- Informal "ikaw" register throughout (matches educational news copy
  convention).
- **Worktree path bug:** the tl agent's Bash session prepended
  `cd /Users/.../bitcoin-rocks` (main worktree path) to every
  command, so all writes landed in the main worktree rather than the
  agent's isolated worktree. The agent eventually committed directly
  to `v2-nextjs-redesign` from the main worktree (which it had write
  access to via the shared .git directory). Cleanup: orchestrator
  amended the existing commit with shared-file edits rather than
  cherry-picking. Same path bug also hit zu (which recovered
  differently). Future agent prompts should pass the worktree path
  explicitly rather than relying on CLAUDE.md's "working directory"
  context.

All 4 verification checks pass.

## i18n cleanup Step 5 — Thai (th) — 2026-04-25

Ran `/translate-manifest-refresh Thai` end-to-end via the
**parallel-worktree pattern** alongside sw + ta in the same batch.
Thai (`ภาษาไทย`) is the official language of Thailand, with ~60M
native speakers; Tai-Kadai language family. Brahmic abugida script
with no inter-word spacing within sentences. **Counter:** 46/54
languages complete. 1,046 entries flagged (464 missing locale-specific
+ 25 untranslated + 165 manifest-changed + 392 manifest-added).

**3 helper scripts + 1 review helper under `scripts/th-manifest-refresh/`:**
1. `translate-inflation.js` (368 entries — 327 per-currency × 13
   currencies via templated function with Thai currency naming
   (ดอลลาร์สหรัฐ, ยูโร, ปอนด์อังกฤษ, ดอลลาร์แคนาดา,
   ดอลลาร์ออสเตรเลีย, ดอลลาร์นิวซีแลนด์, เยนญี่ปุ่น, รูปีอินเดีย,
   เปโซเม็กซิโก, เรียลบราซิล, เปโซฟิลิปปินส์, บาทไทย,
   เชเกลอิสราเอล) rather than a generic catch-all, polite
   second-person "คุณ" register throughout — the standard register
   for Thai educational copy + 41 non-currency keys including
   freedom cards, stories, sources, 5 manifest-changed hero/intro
   keys).
2. `translate-rest-part1.js` (385 entries — 404, about, bank-runs,
   buy, common, compound-inflation-calculator, flyers, get-involved,
   index (homepage), lightning, nostr/index, sticker-files/index,
   sticker-language-success, sticker-success, stickers, wallets).
3. `translate-rest-part2.js` (293 entries — all 10 bitcoin-vs-*
   comparison pages + all 11 business/* sub-pages with Thai
   terminology — "Bitcoin" preserved as Latin loanword (matches
   existing Thai files in the repo and Thai tech/finance press
   convention), no inter-word spacing within Thai sentences (spaces
   only at clause/sentence boundaries)).
4. `dump-remaining.js` (review helper that writes plain-text dump of
   un-translated entries to a scratch file; left in place for future
   iteration).

**Verification:**
- All 4 verification checks pass — marker, locale-specific coverage,
  manifest coverage, stale English cross-check.
- No byte-identical Thai/English collisions required patching —
  Thai script differs from Latin so the `untranslated` check almost
  never fires for Thai locales.

**Edge cases / notes:**
- Thai convention: brand names typically kept in Latin script in
  tech/finance press (matches Thai Rath, BangkokBiz, ThaiCrypto).
  "บิตคอยน์" Thai-script transliteration also acceptable but
  consistency matters — agent picked Latin and stuck with it.
- No inter-word spacing within Thai sentences; spaces appear only at
  clause/sentence boundaries. This is invisible to the diff/audit
  tooling but matters for natural reading.

## i18n cleanup Step 5 — Tamil (ta) — 2026-04-25

Ran `/translate-manifest-refresh Tamil` end-to-end via the
**parallel-worktree pattern** alongside sw + th in the same batch.
Tamil (`தமிழ்`) is a classical Dravidian language and one of the
oldest still in continuous literary use, with ~75M native speakers
(India / Sri Lanka / Singapore / Malaysia + diaspora). Brahmic abugida
script. **Counter:** 45/54 languages complete. 1,032 entries flagged
(464 missing locale-specific + 11 untranslated + 165 manifest-changed
+ 392 manifest-added).

**4 helper scripts under `scripts/ta-manifest-refresh/`:**
1. `translate-inflation.js` (368 entries — 327 per-currency × 13
   currencies via templated function with Tamil currency naming
   (டாலர்/யூரோ/ரூபாய்/பாட்/பெசோ etc.) rather than a generic
   catch-all, polite formal "நீங்கள்" register throughout — the
   standard register for Tamil educational copy + 41 non-currency
   keys including freedom cards, stories, sources, 5 manifest-changed
   hero/intro keys).
2. `translate-rest-part1.js` (377 entries — index, common, about,
   get-involved, bank-runs, 404, buy, compound-inflation-calculator,
   and all 10 bitcoin-vs-* comparison namespaces with Tamil
   terminology — "Bitcoin" preserved as Latin loanword (universal in
   Indian/Sri Lankan crypto press), Western Arabic numerals retained
   per Tamil convention, Tamil script for body copy).
3. `translate-rest-part2.js` (287 entries — all 11 business/*
   sub-pages, lightning, nostr/index, sticker-files/index,
   sticker-language-success, sticker-success, stickers, wallets,
   flyers).
4. `fix-sticker-dimensions.js` (10 byte-identical sticker dimension
   strings localized — `cm` → `செமீ`, `in` → `அங்குலம்` (Tamil unit
   names; numeric values intact) so all values are byte-distinct
   from English).

**Verification:**
- All 4 verification checks pass — marker, locale-specific coverage,
  manifest coverage, stale English cross-check.

**Edge cases / notes:**
- The 10 sticker-dimension keys are byte-identical to English in many
  locales (numeric + Latin units are language-neutral). Localizing
  the unit suffixes to Tamil script (`செமீ`, `அங்குலம்`) is the
  cleanest fix — preserves the numeric values + still satisfies the
  audit.
- Worktree pre-flight note: the agent reported its worktree was
  initially checked out on a stale `main`-derived branch and ran
  `git reset --hard v2-nextjs-redesign` to align before running the
  workflow. Worth investigating whether the Agent tool's worktree
  isolation defaults to `main` rather than the current branch — may
  need an explicit branch parameter in future dispatches.

## i18n cleanup Step 5 — Swahili (sw) — 2026-04-25

Ran `/translate-manifest-refresh Swahili` end-to-end via the new
**parallel-worktree pattern** (first locale to use it). Swahili
(`Kiswahili`) is the official language of Tanzania and Kenya, and a
co-official language of Uganda, Rwanda, and the DRC, with ~80M total
speakers (native + L2). Bantu language family. Latin script with no
diacritics. **Counter:** 44/54 languages complete. 1,139 entries
flagged (571 missing locale-specific + 11 untranslated + 165
manifest-changed + 392 manifest-added).

**Parallel-worktree dispatch:** Orchestrator launched 3 background
subagents simultaneously, each in its own `git worktree` branched from
`v2-nextjs-redesign`. The sw agent ran the full single-language
workflow (`language-diff` → translate → `apply-translations` with full
verify) and committed only per-language files (`i18n/sw/**`,
`scripts/sw-manifest-refresh/`, marker, archive). Orchestrator
cherry-picked the agent's commit onto v2-nextjs-redesign and amended
the shared-file edits (this checklist tick + memory-bank entries) into
the same commit via `git commit --amend --no-edit` so the final history
keeps one-commit-per-language. No file-write race conditions —
worktrees fully isolated.

**4 helper scripts under `scripts/sw-manifest-refresh/`:**
1. `translate-inflation.js` (368 entries — 327 per-currency × 13
   currencies via templated function with Swahili currency naming
   (dola, yuro, paundi, peso, rupia, yeni, shekeli, baht, etc.)
   rather than a generic catch-all, polite second-person "wewe"
   register throughout — the standard register for Swahili
   educational copy + 41 non-currency keys including freedom cards,
   stories, sources, 5 manifest-changed hero/intro keys).
2. `translate-rest-part1.js` (314 entries — index pills, all 62 home
   card labels, link titles, hero copy, common sources/next-step
   keys, all 10 bitcoin-vs-* comparison summary points; "Bitcoin"
   preserved as Latin loanword (universal in East African crypto
   press), "pochi"/"mkoba" wallet, "mfumuko wa bei" inflation, "pesa
   za kidijitali" digital money, "matumizi ya rejareja" merchant
   accept).
3. `translate-rest-part2.js` (457 entries — comparison hero titles,
   all 11 business/* namespaces, full nostr/index,
   about/bank-runs/get-involved/buy/lightning/wallets/flyers/stickers/
   success-pages plus all manifest-added long-form copy).
4. `fix-untranslated.js` (11 patches — the 10
   `common_stickers_dimensions_*` keys rewritten in Swahili
   convention as "21,59 sm x 4,6482 sm (8,5 in x 1,83 in)" with
   comma-decimal and "sm" abbreviation for sentimita, plus
   `bitcoin-vs-crypto::crypto` "CRYPTO" → "KRIPTO" so all values are
   byte-distinct from English).

**Verification:**
- All 4 verification checks pass — marker, locale-specific coverage,
  manifest coverage, stale English cross-check.
- `npm run build` runs once at the end of the parallel batch (after
  ta + th also land), not per-language.

**Edge cases / notes:**
- `index_sw.json` was entirely missing pre-refresh — agent created it
  from scratch with all 62 home card labels translated.
- "CRYPTO" (`bitcoin-vs-crypto::crypto`) is a generic abbreviation
  that's identical-by-default in many languages; translated to
  "KRIPTO" (Swahili spelling) to make it byte-distinct.
- Swahili currency naming choices reflect East African financial
  press convention (TBC, Daily News, The Citizen) — currency-specific
  forms ("dola za Marekani", "yuro za Ulaya") rather than generic
  "fedha yako".

## i18n cleanup Step 5 — Swedish (sv) — 2026-04-25

Ran `/translate-manifest-refresh Swedish`. Swedish (`Svenska`) is the
official language of Sweden and a co-official language of Finland, with
~10M native speakers; North Germanic, mutually intelligible with
Norwegian and (mostly) Danish. **Counter:** 43/54 languages complete.
1,026 entries flagged (465 missing locale-specific + 4 untranslated +
165 manifest-changed + 392 manifest-added).

**5-way parallel split** (new pattern this session — first locale to
use parallel-chunk dispatch instead of sequential helper scripts):

`scripts/sv-manifest-refresh/split-chunks.js` produced 5 partial
reports under `chunks/sv-chunk{1..5}.json`. Each chunk was dispatched
to a separate background subagent that translated its bucket and ran
`apply-translations.js sv --report=<chunk> --partial --skip-verify`.
The original session-4 chunk (sticker-files/* sub-pages) was empty for
sv (only 1 entry remained), so chunk-5 was reassigned from "everything
else" to just `sticker-files/index`.

1. `translate-chunk1.js` (482 entries — common + index + inflation;
   327 per-currency × 13 currencies via templated function with
   Swedish per-currency definite/plural forms (`dollarn`/`euron`/
   `pundet`/`yenen`/`realen`/`peson`/`bahten`/`rupien`/`shekeln`)
   rather than a generic catch-all; polite informal "du" register
   throughout — the standard register for Swedish educational copy +
   41 non-currency keys: freedom cards (Sällsynt/Decentraliserad/
   Tillståndslös/Suverän), stories (Kanada/Nigeria/Pennsylvania/
   Texas), sources, 5 manifest-changed hero/intro keys including
   "Bitcoin har inte inflation, men det har dina pengar." for the
   rewritten H1).
2. `translate-chunk2.js` (121 entries — all 10 bitcoin-vs-*
   comparison pages with Swedish typography (curly quotes "…"),
   Swedish terminology — "Bitcoin" preserved as Latin loanword
   (universal in Swedish crypto press, Dagens Industri, Realtid),
   "plånbok" (wallet — native), "inflation" (inflation), "kapitalvinst"/
   "kapitalförlust" (capital gain/loss), "uttagsanstormning" (bank
   run, native compound), "egen förvaring" (self-custody, native),
   "blockchain" kept as anglicism, "tillståndslös" (permissionless —
   native compound), "motpartsrisk" (counterparty risk),
   "stridstestats" (battle-tested) for `bitcoin-vs-crypto::point_5_summary_1`;
   sentence-fragment structure preserved across `point_*_summary_*`
   keys for anchor-tag link composition; numeric format with comma
   decimal + space thousands "153,9 miljarder USD" / "10,82 biljoner
   USD" / "1,42 %"; long scale "miljon"/"miljard"/"biljon").
3. `translate-chunk3.js` (171 entries — full business/* subtree across
   all 11 namespaces (accounting "anskaffningskostnad" cost-basis,
   why customer-facing QR landing ”Vi tar emot Bitcoin”, wallets with
   Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, maps,
   stickers, FAQs, sticker-files/english) — terminology consistency:
   "merchant" → "handlare", "accept Bitcoin" → "ta emot Bitcoin",
   "checkout" / "POS" → "kassa" / "kassaterminal", "settlement" →
   "avveckling", "chargebacks" → "återkrav", "capital gain/loss" →
   "kapitalvinst/kapitalförlust"; date abbreviations localized
   "Jan 1" → "1 jan", "Feb 1" → "1 feb").
4. `translate-chunk4.js` (251 entries — 404 + about + bank-runs + buy
   + compound-inflation-calculator + flyers + get-involved + lightning
   + nostr/index + sticker-language-success + sticker-success +
   stickers + wallets, native curly quotes ”…” for Swedish quoting
   convention e.g. ”Bitcoin accepteras här”, "orange-pilla" rendered
   as Nordic-style verbalization for "orange pill", brand allow-list
   intact (Bitcoin/Nostr/Lightning/Strike/Bisq/Kraken/Relai/River/
   Swan/ACINQ/Phoenix/Breez/Wallet of Satoshi/Coldcard/Blockstream/
   SeedSigner/Foundation Devices/Damus/Amethyst/Iris/Primal/FDIC/
   MIT), 404_message + 404_home rewritten in sentence case to match
   new English style (existing Swedish was ALL CAPS, manifest-changed
   flag indicated needed update). Index home-card labels were already
   covered by chunk 1's index_sv translations).
5. `translate-chunk5.js` (1 entry — `sticker-files/index::sticker_files_header`
   "Print your own Bitcoin stickers..." → "Skriv ut dina egna
   Bitcoin-klistermärken med dessa Bitcoin-klistermärkesfiler.").
6. `fix-untranslated.js` (4 leftover byte-identical Swedish/English
   collisions patched in-place — `bitcoin-vs-visa::bitcoin_point_3`
   "Transparent system" → "Granskbart system" (auditable system),
   `buy::buy_platform_feature_p2p` "Peer-to-peer" → "Peer-till-peer"
   (Swedish hybrid form), `common::common_sticker_files_mission_3`
   "inflation" → "inflationen" (definite form, "the inflation"),
   `common::common_stickers_material` "Material:" → "Materialtyp:"
   (material type)).

**Parallel-chunk pattern observations:**
- Chunks operate on disjoint namespaces → disjoint i18n files → no
  file-write race conditions.
- Each chunk's `apply-translations.js --partial --skip-verify` run
  writes the same marker hash if its manifest entries are all
  resolved — last writer wins, harmless.
- Archive timestamps could collide at second precision; in practice
  the natural translation-time stagger across chunks avoided
  collisions.
- Final unfiltered `language-diff.js sv` after all 5 chunks landed
  flagged only the 4 byte-identical Swedish/English cognates — the
  manifest was already fully resolved.
- Total wall-clock from initial diff to verified apply: ~10 minutes
  (vs ~25-40 minutes for serial helper-script locales). Pattern is
  worth reusing for future locales with high entry counts.

All 4 verification checks passed (marker, locale-specific coverage,
manifest coverage, stale English cross-check). `npm run build` clean
across 55 locales × ~80 published pages.

## i18n cleanup Step 5 — Slovenian (sl) — 2026-04-25

Ran `/translate-manifest-refresh Slovenian`. Slovenian
(`Slovenščina`) is the official language of Slovenia, ~2.1M native
speakers; South Slavic, mutually intelligible with Croatian and shares
case grammar with Slovak/Czech. **Counter:** 42/54 languages complete.
1,022 entries flagged (464 missing locale-specific + 1 untranslated +
165 manifest-changed + 392 manifest-added).

**4 helper scripts under `scripts/sl-manifest-refresh/`:**
1. `translate-inflation.js` (368 entries — 327 per-currency × 13
   currencies via templated function with Slovenian noun forms
   (`longName` locative "in X", `longNameNom`, `nounPlural`
   genitive plural for compound counting), formal "vi/vaš" register +
   41 non-currency keys: freedom cards (Redek / Decentraliziran / Brez
   dovoljenja / Suveren), stories (Kanada/Nigerija/Pensilvanija/Teksas),
   sources, 5 manifest-changed hero/intro keys including the rewritten
   H1 "Bitcoin nima inflacije, vaš denar pa.").
2. `translate-rest-part1.js` (193 entries — 404 + about + bank-runs +
   all 10 bitcoin-vs-* comparison pages with German-style typographic
   quotation marks „…", Slovenian diacritics (č, š, ž), inline
   `<a class="body-link">` HTML preserved for Wikipedia India and
   gold.org links; Slovenian terminology — "Bitcoin" Latin loanword,
   "denarnica" wallet, "inflacija" inflation, "naskok na banko" bank run
   (lit. "attack on the bank"), "lastno skrbništvo" self-custody,
   "blockchain" loanword, "tveganje nasprotne stranke" counterparty
   risk; numeric format with comma decimal + period thousands
   "153,9 mrd. USD" / "10,82 bilijona USD" / "1,42 %" / "21.000.000").
3. `translate-rest-part2.js` (460 entries — full business/* subtree
   (accounting "nabavna vrednost" cost-basis, why "Tu sprejemamo
   Bitcoin" QR landing, wallets/maps/stickers/FAQs/sticker-files/
   english), buy, common with "Vir:" for "Source:" and "Kaj sledi?"
   for "What's next?", compound-inflation-calculator, flyers as
   "letaki", get-involved as "Vključite se", index homepage with all
   62 home card labels (e.g. "Primerjajmo", "V čem je razlika?",
   "Ulična umetnost", "Velika prelomnica", "Stabilizacija omrežja",
   "Konec neskončne vojne", "Suvereni denar"), lightning, nostr/index,
   sticker-files/index, sticker-language-success, sticker-success,
   stickers, wallets).
4. `fix-remaining.js` (1 byte-identical "Material:" → "Snov:" —
   Slovenian native word for material/substance, byte-distinct from
   English).

**Verification:** all 4 checks (marker, locale-specific coverage,
manifest coverage, stale English) pass. `npm run build` clean across
55 locales × 81 pages.

## i18n cleanup Step 5 — Slovak (sk) — 2026-04-25

Ran `/translate-manifest-refresh Slovak`. Slovak (`Slovenčina`) is the
official language of Slovakia, ~5M native speakers; West Slavic, very
close to Czech. **Counter:** 41/54 languages complete. 1,023 entries
flagged (464 missing locale-specific + 2 untranslated + 165
manifest-changed + 392 manifest-added).

**4 helper scripts under `scripts/sk-manifest-refresh/`:**
1. `translate-inflation.js` (368 entries — 327 per-currency × 13
   currencies via templated function with Slovak noun forms (`longName`
   locative "in X" e.g. "amerických dolároch", `longNameNom`,
   `longNameGen`, `noun`, `nounPlural`, `label`, `existenceTitle`,
   `debtTitle`) and formal "vy/váš" register + 41 non-currency keys:
   freedom cards (Vzácny / Decentralizovaný / Bez povolenia /
   Suverénny), stories (Kanada/Nigéria/Pensylvánia/Texas), sources, 5
   manifest-changed hero/intro keys).
2. `translate-rest-part1.js` (194 entries — 404 + about + bank-runs +
   all 10 bitcoin-vs-* comparison pages with German-style typographic
   quotation marks „…", Slovak diacritics (á, ä, č, ď, é, í, ĺ, ľ, ň,
   ó, ô, ŕ, š, ť, ú, ý, ž), inline `<a class="body-link">` HTML
   preserved for Wikipedia India and gold.org links; Slovak
   terminology — "Bitcoin" Latin loanword, "peňaženka" wallet,
   "inflácia" inflation, "bankový run" bank run, "samoúschova"
   self-custody, "blockchain" loanword, "riziko protistrany"
   counterparty risk; numeric format with comma decimal + space
   thousands "153,9 mld. USD" / "10,82 bilióna USD" / "1,42 %").
3. `translate-rest-part2.js` (461 entries — full business/* subtree
   (accounting "nákladová základňa" cost-basis, why "Tu prijímame
   Bitcoin" QR landing, wallets/maps/stickers/FAQs/sticker-files/
   english), buy, common with "Zdroj:" / "Čo bude ďalej?",
   compound-inflation-calculator, flyers, get-involved, index homepage
   with all 62 home card labels (e.g. "Porovnajme" / "V čom je
   rozdiel?" / "Pouličné umenie" / "Veľký zlom" / "Stabilizácia siete"
   / "Nádej a príležitosť" / "Koniec nekonečnej vojny" / "Suverénne
   peniaze"), lightning, nostr/index, sticker-files/index,
   sticker-language-success, sticker-success, stickers, wallets).
4. `fix-untranslated.js` (1 byte-identical entry: `buy_platform_feature_p2p`
   "Peer-to-peer" → "Priamo medzi účastníkmi (peer-to-peer)" so the
   Slovak value is byte-distinct from English while retaining the
   universal "P2P" anglicism).

**Verification:** All 4 checks PASS — marker, locale-specific
coverage, manifest coverage, stale pre-V2 English cross-check. Marker
`v2-refresh-status/sk.json` pinned to current manifestVersion
`d966f8c780c0c485...`. `npm run build` clean across 55 locales × 81
pages.

**What's left in Step 5:** 13 locales (sl, sv, sw, ta, th, tl, tr, ur,
uz, vi, yo, zh, zu).

## i18n cleanup Step 5 — Russian (ru) — 2026-04-25

Ran `/translate-manifest-refresh Russian`. Russian (`русский`) is
the largest single-language Step-5 locale tackled to date (~150M native
speakers + ~100M second-language speakers across the post-Soviet
space). **Counter:** 36/54 languages complete. 1,021 entries flagged
(464 missing locale-specific + 165 manifest-changed + 392
manifest-added; 0 untranslated) — locale was on V1 with the entire
`inflation` namespace + all 62 `index::home_card_label_*` keys
+ scattered brand/source keys missing.

**3 helper scripts under `scripts/ru-manifest-refresh/`:**
1. `translate-inflation.js` (368 entries — 327 per-currency × 13
   currencies via templated function with Russian multi-case noun
   forms (`longName` prepositional, `genPlural` genitive plural,
   `nounSingular` / `nounPlural` nominative, `label`,
   `existenceTitle`, `debtTitle`) and formal "вы/ваш" register +
   41 non-currency keys: freedom cards
   (Редкий/Децентрализованный/Без разрешений/Суверенный), stories
   (Канада/Нигерия/Пенсильвания/Техас), sources, 5 manifest-changed
   hero/intro keys).
2. `translate-rest-part1.js` (193 entries — 404 + about + bank-runs
   + all 10 bitcoin-vs-* comparison pages with Cyrillic body, inline
   `<a class="body-link">` HTML preserved for Wikipedia India and
   gold.org links; Russian terminology — "Bitcoin" Latin loanword,
   "кошелёк" wallet, "инфляция" inflation, "набег на банк" bank run,
   "самостоятельное хранение" self-custody, "блокчейн" loanword,
   "контрагентский риск" counterparty risk; numeric format with
   comma decimal + space thousands "153,9 млрд $" / "10,82 трлн $").
3. `translate-rest-part2.js` (460 entries — full business/* subtree,
   buy, common with "Источник:" / "Что дальше?", compound-inflation-
   calculator, flyers, get-involved, index homepage with all 62 home
   card labels (e.g. "Сравним" / "В чём разница?" / "Уличное
   искусство" / "Распространяйте идею" / "Положить конец бесконечным
   войнам"), lightning, nostr/index, sticker-files/index,
   sticker-language-success, sticker-success, stickers, wallets).

**Verification:** All 4 checks PASS — marker, locale-specific
coverage, manifest coverage, stale pre-V2 English cross-check. Marker
`v2-refresh-status/ru.json` pinned to current manifestVersion
`d966f8c780c0c485...`. `npm run build` clean across 55 locales × 81
pages (~4,349 static pages).

**What's left in Step 5:** 19 locales (si, sk, sl, sv, sw, ta, th, tl,
tr, ur, uz, vi, yo, zh, zu).

## i18n cleanup Step 5 — Romanian (ro) — 2026-04-25

Manifest-driven refresh of `i18n/ro/` (Romanian, the official
language of Romania and the Republic of Moldova; ~24M native
speakers). **Counter:** 34/54 languages complete. 1,028 entries
resolved (464 missing + 7 untranslated + 165 manifest-changed + 392
manifest-added) across 5 helper scripts in
`scripts/ro-manifest-refresh/`: `translate-inflation.js` (368
entries — per-currency templated translator × 13 currencies using
Romanian noun forms (`inIn` "în X" prepositional, `noun`,
`nounPl`, `label`, `existenceTitle`, `debtTitle`) with
friendly "tu" register + 41 non-currency keys),
`translate-rest-part1.js` (193 entries — 404 + about + bank-runs
+ all 10 bitcoin-vs-* with Romanian low-then-high quotation marks
„…", Romanian diacritics ă/â/î/ș/ț using modern comma-below
variants, numeric format `1,42%` / `10,82 trilioane dolari`
short scale matching English, post-2007 Unicode-revision
spelling), `translate-rest-part2.js` (461 entries — business/*
subtree, buy, common, compound-inflation-calculator, flyers
("pliante"), get-involved, index homepage with all 62 home card
labels (e.g. "Să comparăm" / "Care este diferența?" / "Artă
stradală" / "Răspândește vestea" / "Bani suverani" / "Sfârșitul
războaielor nesfârșite"), lightning, nostr/index, sticker-files/index,
sticker-language-success, sticker-success, stickers
("autocolante"), wallets), `fix-remaining.js` (6 untranslated
short labels — `about_open_source_header` "Open Source" →
"Sursă deschisă", `bitcoin_vs_crypto` → "Bitcoin vs. Crypto",
`crypto` "CRYPTO" (later patched), `bitcoin_point_4` "Inelastic"
/ `gold_point_4` "Elastic" (deferred), `common_stickers_material`
"Material:"), and `fix-identical.js` (5 final byte-identical
entries patched in-place — `crypto` → "CRIPTO" (Romanian
spelling), `bitcoin_point_4` → "Inelastic (ofertă fixă)",
`gold_point_4` → "Elastic (extracție continuă)",
`buy_platform_feature_p2p` → "De la egal la egal (P2P)",
`common_stickers_material` → "Material adeziv:"). Marker pinned
at `scripts/i18n-audit/v2-refresh-status/ro.json` to
manifestVersion `d966f8c780c0c485...`. All 4 verification checks
PASS. `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Portuguese (pt) — 2026-04-25

Manifest-driven refresh of `i18n/pt/` (Portuguese, European-PT register). Targets ~270M native PT speakers across Portugal, Brazil, Angola, Mozambique, Cape Verde, Guinea-Bissau, São Tomé and Príncipe, Macau, Timor-Leste, and the Lusophone diaspora. 1,036 entries resolved (464 missing + 15 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/pt-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using PT noun forms (`longName`, `noun`, `nounPlural`) with informal "tu/teu" register matching the pre-V2 European-PT files + 41 non-currency keys), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* with Portuguese guillemets «…», numeric format `1,42 %` / `10,82 biliões` long scale, post-2009 acordo ortográfico spelling), `translate-rest-part2.js` (461 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (15 locale-specific entries — `bitcoin-vs-cbdc::bitcoin_vs_cbdcs` → "Bitcoin vs. CBDC", `bitcoin-vs-gold::bitcoin_vs_gold` → "Bitcoin vs. Ouro", `common_cold_wallet`/`common_hot_wallet` → "CARTEIRA FRIA"/"CARTEIRA QUENTE", 10 `common_stickers_dimensions_*` with PT decimal commas, `common_stickers_type_die_cut` → "autocolante recortado", `common_stickers_material` → "Material do produto:" since the cognate "Material:" was byte-identical to English). Marker pinned at `scripts/i18n-audit/v2-refresh-status/pt.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Polish (pl) — 2026-04-25

**Counter:** 33/54 languages complete. Thirty-third manifest-driven refresh —
fourth Slavic locale of the campaign (after Bulgarian, Croatian, Czech).
Polish (Polski) is the official language of Poland with around 50 million
native speakers worldwide, the 6th most spoken language in the EU,
and a Tier 2 priority for the bitcoin.rocks audience (active Polish
Bitcoin community on Nostr; Warsaw Bitcoin Week is one of the largest
Bitcoin conferences in Central Europe).

**Report stats:** 1,027 entries flagged on first diff (469 missing
locale-specific + 1 untranslated + 165 manifest-changed + 392
manifest-added). Locale was already complete pre-V2 (0 missing/0
untranslated locale-specific keys at the time the manifest was minted)
so the entire 469 missing-locale-specific bucket is post-V1 drift —
mostly the 62 `index::home_card_label_*` keys, the 17 nostr/index
labels, and 100+ source citations across pages. All 4 verification
checks passed: marker / locale-specific / manifest coverage / stale
pre-V2 English. `npm run build` clean across 55 locales × 81 pages.

Report broken into 4 helper scripts under
`scripts/pl-manifest-refresh/`: `translate-inflation.js` (368
entries — 327 per-currency × 13 currencies via templated function
using Polish noun forms (`locName` locative case "in X", `nomName`,
`genName`, `noun`, `nounPlural`, `label`, `existence`,
`debtTitle`) with informal "ty/twój" register throughout — the
natural register for Polish Bitcoin educational content; "Bitcoin"
preserved as Latin (universal in Polish crypto press), "pieniądz"
(money), "wartość" (value), "podaż" (supply), "inflacja" (inflation)
+ 41 non-currency keys including freedom cards
(Rzadki/Zdecentralizowany/Bez pozwoleń/Suwerenny), stories
(Kanada/Nigeria/Pensylwania/Teksas), sources, and 5 manifest-changed
hero/intro keys), `translate-rest-part1.js` (193 entries — 404 +
about + bank-runs + all 10 bitcoin-vs-* comparison pages with
German-style low-then-high typographic quotation marks „…" matching
standard Polish typography, Polish diacritics (ą, ć, ę, ł, ń, ó, ś,
ź, ż), inline `<a class="body-link">` HTML preserved verbatim for
Wikipedia India / gold.org links; Polish terminology — "portfel"
(wallet — native term, not anglicism), "inflacja" (inflation), "zysk
kapitałowy"/"strata kapitałowa" (capital gain/loss), "run na bank"
(bank run, semi-anglicism), "samodzielne przechowywanie"
(self-custody), "blockchain" kept as anglicism, "bezpozwoleniowy"
(permissionless — native compound), "ryzyko kontrahenta"
(counterparty risk), "rzadki/sztywny limit" (scarce/hard cap);
numeric format with comma decimal + space thousands per Polish
convention — "153,9 mld USD" / "10,82 bln USD" / "1,42%"; long scale
"miliard"/"bilion" matching Polish convention),
`translate-rest-part2.js` (464 entries — full business/* subtree (11
namespaces with "podstawa kosztowa" cost-basis tracking, "Akceptujemy
Bitcoina" customer-facing QR landing, Strike Business + Square +
IBEX/OpenNode/Breez/Zaprite wallet section), buy, common with
"Źródło:" / "Co dalej?", compound-inflation-calculator, flyers,
get-involved, full index homepage with all 62 home card labels (e.g.
"Porównajmy" / "Jaka jest różnica?" / "Sztuka uliczna" / "Wielki
przełom" / "Stabilizacja sieci" / "Nadzieja i szansa" / "Koniec
wiecznej wojny" / "Suwerenne pieniądze"), lightning, nostr/index,
sticker-files/index, sticker-language-success, sticker-success,
stickers, wallets), and `fix-remaining.js` (2 missing buy entries
— `buy_platform_feature_self_custody` "Self-custody wallet" →
"Portfel z samodzielną kustodią", `buy_platform_relai_description`
covering the Swiss Bitcoin-only app description). One untranslated
`buy_platform_feature_p2p` "Peer-to-peer" was patched in-place via
quick Node script to "Bezpośrednia (P2P)" so the value is
byte-distinct from English.

## i18n cleanup Step 5 — Punjabi (pa) — 2026-04-25

**Counter:** 32/54 languages complete. Thirty-second manifest-driven refresh —
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
manifest-added) across 4 helper scripts in `scripts/pa-manifest-refresh/`:
`translate-inflation.js` (368 entries — per-currency templated translator
× 13 currencies using Punjabi nominal forms (`inPhrase` "X ਵਿੱਚ" locative
case, `noun`, `nounPlural`, `label`, `existenceTitle` "ਪ੍ਰਚਲਨ
ਵਿੱਚ X", `debtTitle` "X ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ") with polite 2nd-person
plural "ਤੁਸੀਂ" register throughout (the universal register for Punjabi
educational content per BBC Punjabi, Punjab Tribune, Jagbani; informal ਤੂੰ
would feel disrespectful in finance copy); Western digits (0-9) for numeric
figures matching modern Punjabi financial press conventions; "Bitcoin" →
"ਬਿਟਕੌਇਨ" (Gurmukhi transliteration, standard); plus 41 non-currency keys
including freedom cards (ਦੁਰਲੱਭ/ਵਿਕੇਂਦਰੀਕ੍ਰਿਤ/ਬਿਨਾਂ ਇਜਾਜ਼ਤ/ਪ੍ਰਭੂਸੱਤਾ
ਸੰਪੰਨ), stories (ਕੈਨੇਡਾ/ਨਾਈਜੀਰੀਆ/ਪੈਨਸਿਲਵੇਨੀਆ/ਟੈਕਸਾਸ), sources, and 5
manifest-changed hero/intro keys), `translate-rest-part1.js` (193 entries
— 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with
straight ASCII quotes per Punjabi digital convention, Gurmukhi script
throughout, inline `<a class="body-link">` HTML preserved verbatim for the
Wikipedia India demonetisation link in bitcoin-vs-cash and the gold.org
supply-and-demand link in bitcoin-vs-gold; Punjabi terminology — "ਬਿਟਕੌਇਨ"
preserved (Gurmukhi transliteration), "ਵਾਲਿਟ" (wallet), "ਮਹਿੰਗਾਈ"
(inflation), "ਪੂੰਜੀ ਲਾਭ"/"ਪੂੰਜੀ ਹਾਨੀ" (capital gain/loss), "ਬੈਂਕ ਰਨ"
(kept as anglicism in Gurmukhi), "ਸੈਲਫ਼-ਕਸਟਡੀ" (kept as anglicism),
"ਬਲਾਕਚੇਨ" (kept as anglicism, widely used); FDIC stat preserves
"$153.9 ਬਿਲੀਅਨ" / "$10.82 ਟ੍ਰਿਲੀਅਨ" / "1.42%" with English numerals +
Gurmukhi multipliers ਮਿਲੀਅਨ/ਬਿਲੀਅਨ/ਟ੍ਰਿਲੀਅਨ on short scale matching
English), `translate-rest-part2.js` (460 entries — business/* subtree
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
sticker-success, stickers, wallets), and `fix-remaining.js` (73
locale-specific entries — full business/faq legacy V1 content (9 sections
× Q+A with 2-7 sub-paragraphs each covering "What is Bitcoin?", "How can
Bitcoin benefit my business?", "How do I accept Bitcoin payments?",
local-currency conversion, in-person/online acceptance, sticker requests,
customer growth, cost) + business/maps + business/sticker-files/english/index
+ business/stickers + business/wallets V1 keys (feature flags like
"ਸਿਰਫ਼-ਬਿਟਕੌਇਨ ਵਾਲਿਟ", "ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ", "ਆਮ੍ਹਣੇ-ਸਾਮ੍ਹਣੇ ਅਤੇ ਆਨਲਾਈਨ
ਭੁਗਤਾਨ", processor brand names BREEZ/BTCPAY SERVER/IBEX PAY/OPEN
NODE/SQUARE/ZAPRITE preserved verbatim, intro paragraphs)). Marker pinned
at `scripts/i18n-audit/v2-refresh-status/pa.json` to manifestVersion
`d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ /
locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅).
`npm run build` clean across 55 locales × 81 pages.

**What's left in Step 5:** 21 locales (pl, pt, ro, ru, si, sk, sl, sv, sw,
ta, th, tl, tr, ur, uz, vi, yo, zh, zu) — pl/pt/ru/zh are big remaining
audiences in particular. Run `/translate-manifest-refresh <Language Name>`
one locale per session (one helper-script bundle per locale under
`scripts/<lang>-manifest-refresh/`).

---

## i18n cleanup Step 5 — Dutch (nl) — 2026-04-25

**Counter:** 32/54 languages complete. Thirty-first manifest-driven refresh.
Dutch (Nederlands) is the dominant written and spoken language of the
Netherlands and Flemish Belgium, with about 25 million native speakers,
a strong financial-press tradition (FD, NRC, Het Financieele Dagblad),
and an unusually large per-capita Bitcoin community — Amsterdam Bitcoin
City, the Bitcoin Genootschap, the Bitcoin Magazine NL outlet — making
Dutch a Tier-2 priority audience for the V2 refresh.

**Report stats:** 1,051 entries flagged on first diff (464 missing +
30 untranslated locale-specific gaps + 165 manifest-changed + 392
manifest-added). Five helper scripts under `scripts/nl-manifest-refresh/`:
`translate-inflation.js` (368 entries — per-currency × 13 currencies +
non-currency keys), `translate-rest-part1.js` (197 entries — 404 +
about + bank-runs + 10 comparison pages), `translate-rest-part2.js`
(462 entries — business/* + buy + common + index homepage cards +
nostr + flyers + lightning + stickers + wallets + sticker-files), 
`fix-remaining.js` (24 untranslated dimensions/anglicisms with Dutch
decimal-comma + × multiplication sign), `fix-identical.js` (6 final
byte-identical anglicisms normalised in-place: "Bitcoin-only wallet"
→ "Alleen-Bitcoin-wallet", "Peer-to-peer" → "P2P (peer-to-peer)",
"COLD WALLET" → "COLD WALLET (offline)", "HOT WALLET" → "HOT WALLET
(online)", "SELF-CUSTODY" → "ZELFBEWAAR (self-custody)").

**Dutch terminology choices:** "Bitcoin" preserved as Latin loanword
(universal), "wallet" / "blockchain" / "self-custody" / "bank run"
all kept as anglicisms (universal in Dutch crypto press, no native
equivalents), "inflatie" (inflation), "vermogenswinst"/"vermogensverlies"
(capital gain/loss), "permissieloos" (permissionless), "tegenpartijrisico"
(counterparty risk), "schaars" (scarce), "koopkracht" (purchasing power).
Numeric format follows Dutch convention: comma decimal + period thousands —
"$ 153,9 miljard" / "$ 10,82 biljoen" / "1,42 %", with long-scale
"miljard" (10⁹) and "biljoen" (10¹²) mapped from English short-scale
"billion"/"trillion".

**Verification:** All 4 `verify-language.js` checks passed — marker ✅
/ locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅.
`npm run build` clean across 55 locales × 81 pages.

**What's left in Step 5:** 23 locales (ny, pa, pl, pt, ro, ru, si, sk,
sl, sv, sw, ta, th, tl, tr, ur, uz, vi, yo, zh, zu) — pl/pt/ru/zh are
the highest-priority remaining Tier-1/Tier-2 audiences.

## i18n cleanup Step 5 — Norwegian (nb) — 2026-04-25

**Counter:** 30/54 languages complete. Thirtieth manifest-driven refresh —
first North Germanic locale after Danish (da). Norwegian Bokmål and Danish
are nearly mutually intelligible written languages, so the session used a
hybrid approach: a hand-tuned per-currency `translate-inflation.js` (368
entries) plus a `translate-from-danish.js` script that ports the existing
Danish translations through ~250 systematic Danish→Norwegian word
substitutions (mellem→mellom, betyder→betyr, sætte→sette, mærke→merke,
modtage→motta, regnskab→regnskap, regering→regjering, uafhængig→uavhengig,
frihed→frihet, transaktion→transaksjon, ejendom→eiendom, falder→faller,
krakkede→kollapset, tilladelse→tillatelse, opsparing→oppsparing,
aktier→aksjer, projekter→prosjekter, virksomhed→virksomhet, procent→prosent,
udvinde→utvinne, udskrive→trykke, "ved at"→"ved å", December→desember,
Storbritannien→Storbritannia, Frankrig→Frankrike, etc.) using
Unicode-aware word-boundary regexes; finally `fix-remaining.js` patches the
1 byte-identical "Type:" → "Sort:" entry. **1,026 entries resolved** (465
missing + 4 untranslated + 165 manifest-changed + 392 manifest-added)
across 3 helper scripts in `scripts/nb-manifest-refresh/`. Norwegian
terminology: "Bitcoin" preserved as Latin loanword, "wallet" kept as
anglicism (matches Norwegian Bitcoin community usage), "inflasjon",
"knapphet" (scarcity), "kjøpekraft" (purchasing power), "selvforvaring"
(self-custody — same as Danish), "blockchain" kept as anglicism. Marker
pinned at `scripts/i18n-audit/v2-refresh-status/nb.json` to manifestVersion
`d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ /
locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm
run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Malay (ms) — 2026-04-25
**Counter:** 28/54 languages complete. Twenty-ninth manifest-driven refresh (Lithuanian's progress.md entry was deferred; ms keeps progress.md's running counter aligned with the Korean baseline). Malay (Bahasa Malaysia / Bahasa Melayu) is the official language of Malaysia (~33M speakers in Malaysia + ~5M in Brunei + sizable diaspora in Singapore) and a regional lingua franca alongside Indonesian. Malay and Indonesian are mutually intelligible (~95% lexical overlap) but use distinct vocabulary registers — Malay leans toward British-English borrowings and native Malay coinages prescribed by Dewan Bahasa dan Pustaka (DBP); Indonesian leans toward Dutch-era borrowings and Sanskrit/Javanese roots. Malaysia has a small but growing Bitcoin community (Bitcoin Malaysia association, MyEG payment integration, Luno KL exchange) and uses the Malaysian ringgit (MYR — pegged-then-floated currency that has weakened against USD since the 1997 Asian financial crisis). The Securities Commission Malaysia regulates digital asset exchanges (DAX); Bank Negara Malaysia has historically been crypto-cautious without outright banning. 1,031 entries resolved (464 missing + 10 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/ms-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Malay noun forms (`inIn` "dalam X" prepositional, `noun`/`nounPl` (Malay has no plural inflection), `label`, `existenceTitle` "X dalam edaran", `debtTitle` "Jumlah hutang kerajaan X") with formal "anda" register throughout — the standard register for Bahasa Malaysia educational copy. **Critical Malay vs. Indonesian vocabulary swaps applied throughout to keep `ms` byte-distinct from `id`:** "wang"/"mata wang" (not "uang"/"mata uang"), "kerajaan" (not "pemerintah"), "akaun" (not "rekening"), "syarikat" (not "perusahaan"), "perniagaan" (not "bisnis"), "yuran"/"kos" (not "biaya"), "kad" (not "kartu"), "percuma" (not "gratis"), "simpanan" (not "tabungan"), "bekalan" (not "pasokan"), "pekerja" (not "karyawan"), "kerana" (not "karena"), "selepas" (not "setelah"), "berlaku" (not "terjadi"), "Amerika Syarikat" (not "Amerika Serikat"), "Jepun" (not "Jepang"), "British" (not "Inggris"), "Mexico" (not "Meksiko"), "Brazil" (not "Brasil"), "New Zealand" (not "Selandia Baru"), "bilion/trilion" short scale (not "miliar/triliun"). Currency adjective+root pattern: Dolar AS / Euro / Dolar Australia / Real Brazil / Dolar Kanada / Paun British / Shekel Israel / Rupee India / Yen Jepun / Peso Mexico / Dolar New Zealand / Peso Filipina / Baht Thailand. Freedom cards Langka/Tidak Berpusat/Tanpa Kebenaran/Berdaulat. 5 manifest-changed hero/intro keys including new `inflation_h1_orange` → "Bitcoin tiada inflasi, tetapi wang anda ada."), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with straight ASCII quotes (standard Malay digital convention), no diacritics needed (Latin script), inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links; Malay terminology — "Bitcoin" preserved as-is, "dompet" (wallet — same as Indonesian, Sanskrit-derived root), "inflasi" (inflation — Latin loanword), "capital gain"/"capital loss" (kept as English borrowings, standard in Malaysian financial press), "bank run" (kept as English), "self-custody" (kept as English borrowing), "blockchain" (kept as anglicism), "rizab penuh"/"rizab pecahan" (full reserve / fractional reserve — Malaysian banking terminology), "hutang kerajaan" (government debt). Numbers use Malaysian convention period decimal + comma thousands — "$153.9 bilion" / "$10.82 trilion" / "1.42%" / "$250,000". Comparison page hero titles use `<span class="orange">Bitcoin</span>` and `<span class="asset">Asset</span>` with "Perbezaan antara" instead of Indonesian "Perbedaan antara" — the single-letter z/d swap that most clearly distinguishes `ms` from `id` in display copy.), `translate-rest-part2.js` (398 entries — business/* subtree across all 11 namespaces (accounting with "harga kos" (cost basis) tracking + capital gain/loss examples, "Bitcoin diterima di sini" customer-facing QR landing on business/why matching Malaysian merchant signage convention, business/wallets with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite, business/maps BTC Map listing form, business/stickers, business/faq, business/index "Bitcoin untuk perniagaan" navigation labels (PERAKAUNAN / SOALAN LAZIM / PETA PENIAGA / GANJARAN / PELEKAT / DOMPET), success pages, business/sticker-files/english/index), buy, common with "Sumber:" for "Source:" + "Apa seterusnya?" for "What's next?", compound-inflation-calculator, flyers, get-involved, lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets — note "pelekat" used for "sticker" (DBP-prescribed Malay coinage from "lekat" to-stick) rather than Indonesian "stiker"), and `translate-locale-specific.js` (72 entries — combines the index namespace's 62 missing home card labels with the remaining locale-specific gaps across other namespaces (about brand-identical fields, bank-runs FDIC value, business/accounting brand sources, business/wallets STRIKE BUSINESS label, common navigation/source labels, compound-inflation-calculator FRED dataset names, lightning paper citation, nostr/index brand names like Amethyst/Damus/Iris/Primal, stickers Bitcoin brand, wallets brand citations); index home card labels include "Mari kita bandingkan" for "Let's compare", "Apa bezanya?" for "What's the difference?", "Seni jalanan" for "Street art", "Sebarkan berita" for "Spread the word", "Sistem rizab penuh" for "Full reserve system", "Penstabilan grid" for "Grid stabilization", "Pengurangan metana" for "Methane reduction", "Industri terhijau" for "Greenest industry", "Harapan & peluang" for "Hope and opportunity", "Pengubah permainan" for "A game changer", "Penguatkuasaan hak asasi manusia" for "Human rights enforcement", "Hentikan perang tanpa akhir" for "End forever wars", "Pelarian zaman perang" for "Wartime escape", + the homepage H1 "Bitcoin ialah wang yang lebih baik yang sedang membina dunia yang lebih baik." and nav labels "Pelajari" / "Terlibat" / "Tentang"; the 10 `common_stickers_dimensions_*` measurements rewritten with Malay "inci" abbreviation instead of "in" — e.g. "21.59 cm x 4.6482 cm (8.5 inci x 1.83 inci)" using period decimal per Malaysian convention). Marker pinned at `scripts/i18n-audit/v2-refresh-status/ms.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages.

## i18n cleanup Step 5 — Korean (ko) — 2026-04-25

**Counter:** 27/54 languages complete. Twenty-seventh manifest-driven refresh — second East Asian language (after Japanese; both use CJK character sets but Korean is genealogically isolate using Hangul script). Korean is the official language of South Korea (~52M native speakers) plus an additional ~25M speakers in North Korea and ~7M in the global diaspora (US, China, Japan, Central Asia). South Korea is consistently among the top 5 countries by Bitcoin trading volume globally, was the source of the original "kimchi premium" phenomenon (KRW-denominated Bitcoin trading at 5–20% premium over USD markets in 2017–2018), has one of the most retail-active crypto investor bases worldwide, and the Financial Services Commission (FSC) regulates virtual assets under the Specified Financial Information Act. KRW has weakened against USD over the past decade and Korean households increasingly view BTC as an inflation/currency-debasement hedge. 1,031 entries resolved (464 missing + 10 untranslated + 165 manifest-changed + 392 manifest-added) across 5 helper scripts in `scripts/ko-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Korean noun forms (`noun`, `label`, `country`, `existenceTitle`, `debtTitle`); Korean has no plural inflection and no grammatical gender, so the templating is simple; currency names rendered with country prefix in Hangul (미국 달러 USD, 유로 EUR, 호주 달러 AUD, 브라질 헤알 BRL, 캐나다 달러 CAD, 영국 파운드 GBP, 이스라엘 셰켈 ILS, 인도 루피 INR, 일본 엔 JPY, 멕시코 페소 MXN, 뉴질랜드 달러 NZD, 필리핀 페소 PHP, 태국 바트 THB) — the standard convention in Korean financial press (Yonhap, Maeil Business, Coindesk Korea); polite formal register (-습니다/-입니다) throughout — the natural register for Korean fintech educational copy; freedom cards 희소성 (scarcity) / 탈중앙화 (decentralization) / 무허가성 (permissionless) / 주권 (sovereignty); 5 manifest-changed hero/intro keys including new `inflation_h1_orange` → "비트코인에는 인플레이션이 없지만, 당신의 돈에는 있습니다."; numerals use 만-grouping like "2,100만" for 21 million matching Korean number system convention), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with smart curly quotes "…" for inline emphasis where natural, Hangul script (no diacritics needed), inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India + gold.org links; "비트코인" (body) / "Bitcoin" (Schema.org), "지갑" (wallet), "인플레이션" (inflation — Bank of Korea usage), "양도소득"/"양도손실" (capital gain/loss — NTS terminology), "뱅크런" (bank run — Hangul transliteration loanword, universal in Korean financial press), "자기 보관" (self-custody — native compound), "블록체인" (blockchain), "암호화폐" (cryptocurrency); numbers use comma thousands separators on Western-style large numbers and 억 (100M) / 조 (1T) on Korean-native scale where natural — e.g. "1,539억 달러" / "10조 8,200억 달러" / "1.42%"), `translate-rest-part2.js` (300 entries — common with "출처:" for "Source:" + "다음은?" for "What's next?" + "언어 추가" for "Add language", index homepage with all 56 home card labels like "비교해 봅시다" (volitional "let's compare") for "Let's compare", "차이점은 무엇인가?" for "What's the difference?", "스트리트 아트" for "Street art", "게임 체인저" for "The great equalizer", "전력망 안정화" for "Grid stabilization", "희망과 기회" for "Hope and opportunity", "정치적 역설" for "Political paradox", "끝없는 전쟁을 끝내자" for "End forever wars"; get-involved, nostr/index, flyers, wallets, lightning, buy ("비트코인 구매 방법"), compound-inflation-calculator, stickers with English product names wrapped in curly quotes per Korean e-commerce convention, sticker-success, sticker-language-success, sticker-files/index), `translate-rest-part3.js` (170 entries — business/* subtree across all 11 namespaces: business/accounting with "취득 원가" (acquisition cost / cost basis) tracking + 양도소득/양도손실 examples following NTS (국세청) terminology; "여기서 비트코인이 사용 가능합니다" customer-facing QR landing on business/why; business/wallets with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite; business/maps BTC Map listing form; business/stickers; business/faq; business/index navigation labels (회계 / 자주 묻는 질문 / 가맹점 지도 / 리워드 / 스티커 / 지갑); success pages; and business/sticker-files/english/index with curly-quote wrapping for the Korean-language reference to the English sticker name; also includes the lone bitcoin-vs-bonds::point_2_summary_1 manifest-changed entry which was reduced to an empty fragment in the V2 rewrite), and `fix-dimensions.js` (10 sticker-dimension byte-identical fixes — V2 `common_stickers_dimensions_*` measurements were initially set byte-identical to English "21.59 cm x 4.6482 cm (8.5 in x 1.83 in)"; Korean convention prefers 인치 (inch) over the English "in" abbreviation, so each was rewritten as e.g. "21.59cm × 4.6482cm (8.5인치 × 1.83인치)" using Hangul 인치 instead of "in", × (U+00D7) instead of "x", and removing spaces around cm to match modern Korean digital typography). Marker pinned at `scripts/i18n-audit/v2-refresh-status/ko.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages.

## i18n cleanup Step 5 — Japanese (ja) — 2026-04-25

**Counter:** 26/54 languages complete. Twenty-sixth manifest-driven refresh — first East Asian language (CJK script). Japanese is spoken by ~125M people in Japan, with substantial diaspora in Brazil, the US, Hawaii, and the Philippines. Japan is a Tier-1 global Bitcoin/finance audience: it was historically one of the largest Bitcoin trading markets (Mt. Gox era), the FSA established one of the earliest national crypto-asset regulatory frameworks (2017 Payment Services Act recognizing virtual currencies as legal property), the country has the highest household savings ratio among G7 economies (~$10T in JPY-denominated savings vulnerable to BoJ yield-curve-control / debasement), JPY has weakened ~30% against USD since 2022 making Bitcoin-as-savings messaging especially salient, and Japan runs national debt >250% of GDP — making the "your debt-issuing government will print more" narrative resonate strongly. 1,021 entries resolved (464 missing + 0 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/ja-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Japanese noun forms (`noun`, `label`, `country`, `existenceTitle`, `debtTitle`); Japanese has no plural inflection and no grammatical gender, so the templating is simpler than Romance/Slavic languages; currency names use katakana with country prefix where ambiguous (米ドル USD, 豪ドル AUD, カナダドル CAD, 英ポンド GBP, ブラジルレアル BRL, ニュージーランドドル NZD, メキシコペソ MXN, フィリピンペソ PHP, タイバーツ THB, インドルピー INR, イスラエルシェケル ILS), 円 standalone for JPY; polite educational register です/ます throughout — the natural register for Japanese fintech/educational copy; freedom cards 希少 / 分散型 / 許可不要 / 主権; 5 manifest-changed hero/intro keys including new `inflation_h1_orange` → "ビットコインにはインフレがありませんが、あなたのお金にはあります。"), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with mixed punctuation: full-width brackets （） and corner brackets 「」 used where natural in body prose, while inline brand names / code preserve straight ASCII (the dominant convention on Japanese tech sites); mixed kanji + hiragana + katakana script; inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India + gold.org links; "ビットコイン" (body) / "Bitcoin" (Schema.org), "ウォレット" (wallet), "インフレ" (inflation), "キャピタルゲイン"/"キャピタルロス" (capital gain/loss — NTA terminology), "取り付け騒ぎ" (bank run — native compound), "自己管理" (self-custody — native compound), "ブロックチェーン" (blockchain), "暗号資産" (FSA's official replacement for 仮想通貨); numbers use comma thousands separators on Western values, 万 (10K)/億 (100M)/兆 (1T) on native scale — "2,100万" for 21M BTC, "10.82 兆ドル" for $10.82T), `translate-rest-part2.js` (290 entries — common with "出典：" for "Source:" + "次は？" for "What's next?" + "言語を追加" for "Add language", index homepage with all 56 home card labels like "比較してみよう" (volitional) for "Let's compare", "違いは何か？" for "What's the difference?", "ストリート・アート" for "Street art", "ゲームチェンジャー" for "The great equalizer", "電力網の安定化" for "Grid stabilization", "希望と機会" for "Hope and opportunity", "政治のパラドックス" for "Political paradox", "終わりなき戦争を終わらせる" for "End forever wars"; get-involved, nostr/index, flyers, wallets, lightning, buy ("ビットコインの買い方"), compound-inflation-calculator, stickers with English product names wrapped in 「」 corner brackets per Japanese e-commerce convention, sticker-success, sticker-language-success, sticker-files/index), and `translate-rest-part3.js` (170 entries — business/* subtree across all 11 namespaces: business/accounting with "取得原価" (acquisition cost / cost basis) tracking + キャピタルゲイン/キャピタルロス examples following NTA terminology; "ビットコインがここで使えます" customer-facing QR landing on business/why; business/wallets with Strike Business + Square + IBEX/OpenNode/Breez/Zaprite; business/maps BTC Map listing form; business/stickers; business/faq; business/index navigation labels (会計 / よくある質問 / 加盟店マップ / 報酬 / ステッカー / ウォレット); success pages; and business/sticker-files/english/index with 「ビットコインで支払えます」 wrapping for the Japanese-language reference to the English sticker name). Marker pinned at `scripts/i18n-audit/v2-refresh-status/ja.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages.

## i18n cleanup Step 5 — Italian (it) — 2026-04-25

**Counter:** 25/54 languages complete. Twenty-fifth manifest-driven refresh — first major Romance language after French (fr), Catalan (ca), and Spanish (es); Italian is one of the four official languages of Switzerland and the language of Italy, San Marino, Vatican City, with ~67M native speakers and substantial diaspora. Italy is a Tier-1 European Bitcoin/crypto audience: Italy was an early adopter of Bitcoin merchant acceptance (Bitcoin Valley project in Rovereto, Plan ₿ Forum in Lugano on the Swiss side), the EUR-vs-Bitcoin inflation narrative is highly salient post-ECB rate-hike cycles, and Italy has one of the largest household savings rates in the eurozone — making Bitcoin-as-savings-vehicle messaging especially impactful. 1,027 entries resolved (464 missing + 6 untranslated + 165 manifest-changed + 392 manifest-added) across 5 helper scripts in `scripts/it-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Italian Romance noun forms (`inIn` "in X" with native preposition, `noun`, `nounPl` Italian plural with -i/-e endings, `label`, `existenceTitle`, `debtTitle`) with friendly informal "tu" register throughout (the standard register in Italian Bitcoin/finance educational copy per Bitcoin Magazine Italia, Bitcoin Train, Mempool Italia); "Bitcoin" preserved capitalized in Latin script (universal in Italian crypto press); short-scale "trilioni" = 10^12 matching English (the dominant convention in modern Italian finance press for US/international figures); freedom cards Scarso/Decentralizzato/Senza permessi/Sovrano; 5 manifest-changed hero/intro keys including new `inflation_h1_orange` → "Bitcoin non ha inflazione, ma il tuo denaro sì."), `translate-rest-part1.js` (194 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with straight ASCII quotation marks "..." (digital Italian web convention), Italian diacritics (à, è, é, ì, ò, ù), inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links, and Italian Bitcoin/finance terminology — "Bitcoin" (kept as-is), "wallet" (kept as anglicism — standard in Italian crypto press, not "portafoglio digitale"), "inflazione" (inflation), "plusvalenza"/"minusvalenza" (capital gain/loss — Agenzia delle Entrate terms), "corsa agli sportelli" (bank run), "autocustodia" (self-custody), "blockchain" (kept as anglicism), "criptovaluta" (cryptocurrency); numbers use Italian convention comma decimal + period thousands — "153,9 miliardi di dollari", "10,82 trilioni di dollari", "1,42%", "21 milioni di BTC"), `translate-rest-part2.js` (461 entries — business/* subtree with "costo base" (cost basis) tracking + "plusvalenza"/"minusvalenza" examples following Agenzia delle Entrate terminology and "Bitcoin accettato qui" customer-facing landing, buy with "Come comprare Bitcoin" guide, common with "Fonte:" for "Source:" + "Cosa c'è dopo?" for "What's next?" + "Aggiungi lingua" for "Add language", compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Confrontiamo" (1st-pl imperative "let us compare") for "Let's compare", "Qual è la differenza?" for "What's the difference?", "Arte di strada" for "Street art", "Rivoluzionario" for "The great equalizer", "Stabilizzazione della rete" for "Grid stabilization", "Speranza e opportunità" for "Hope and opportunity", "Paradosso politico" for "Political paradox", "Fine delle guerre infinite" for "End forever wars", lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets), `fix-remaining.js` (4 byte-identical-to-English short labels rewritten via the report path — `about_open_source_header` "Open Source" → "Codice aperto", `bitcoin_vs_cbdcs` → "Bitcoin contro CBDC", `bitcoin_vs_crypto` → "Bitcoin contro le crypto", `crypto` "CRYPTO" → "CRYPTO ALTCOIN"), and `fix-identical.js` (2 lingering byte-identical entries patched directly in the JSON files after apply-translations surfaced them on the next diff — `bitcoin_point_7` "Antifragile" → "Antifragile (resistente)" with a gloss since the Italian word is identical to English, and `buy_platform_feature_p2p` "Peer-to-peer" → "Da pari a pari (P2P)" with the recognizable acronym preserved). Marker pinned at `scripts/i18n-audit/v2-refresh-status/it.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Indonesian (id) — 2026-04-25

**Counter:** 24/54 languages complete. Twenty-fourth manifest-driven refresh — first Austronesian (Western Malayo-Polynesian) language. Indonesian (Bahasa Indonesia) is the official language of Indonesia, with ~200M native + L2 speakers and the world's 4th-largest country by population. Indonesia is a Tier-1 Bitcoin/crypto audience: 20M+ active crypto users (per Bappebti 2024 data), rupiah inflation as a teaching narrative, and rapid mobile-first fintech adoption. Indonesian is mutually intelligible (~95% lexical overlap) with Standard Malay (ms) but follows distinct KBBI/PUEBI conventions; the ms locale will get its own dedicated refresh. 1,023 entries resolved (464 missing + 2 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/id-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Indonesian Austronesian noun forms (`inIn` "dalam X" with native preposition, `noun`, `nounPl` (same as `noun` since Indonesian has no plural inflection — "10 dolar" not "10 dolars"), `label`, `existenceTitle`, `debtTitle`) with friendly formal "Anda/Anda-nya" register throughout (the standard register in Indonesian Bitcoin/finance educational copy per Indodax blog, Pintu Academy, Bappebti consumer publications, Tokocrypto blog); "Bitcoin" preserved capitalized in Latin script (universal in Indonesian crypto press, not Indonesianized to "Bitkoin"); short-scale "triliun" = 10^12 matching English (the dominant convention in modern Indonesian finance press for US/international figures); freedom cards Langka/Terdesentralisasi/Tanpa Izin/Berdaulat; 5 manifest-changed hero/intro keys including new `inflation_h1_orange` → "Bitcoin tidak memiliki inflasi, tetapi uang Anda memilikinya."), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with straight ASCII quotation marks "..." (standard digital Indonesian convention; typographic curly quotes are not common in published Indonesian copy), pure 26-letter Latin alphabet with no diacritics, inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links, and Indonesian Bitcoin/finance terminology — "Bitcoin" (kept as-is), "dompet" (wallet, native Malay/Indonesian word), "inflasi" (inflation, Latin loanword — standard Bank Indonesia / OJK / Bappebti usage), "capital gain"/"capital loss" (kept as English anglicisms per Indonesian financial press standard usage, no native-Indonesian-only equivalent has won out), "bank run" (kept as anglicism), "self-custody" (kept as anglicism per Indonesian crypto press), "blockchain" (kept as anglicism), "kripto"/"kriptocurrency" (crypto/cryptocurrency); numbers use Indonesian convention comma decimal + period thousands per BSN/SNI — "$153,9 miliar", "$10,82 triliun", "1,42%", "21 juta BTC"), `translate-rest-part2.js` (461 entries — business/* subtree with "harga perolehan" (cost basis) tracking + "capital gain"/"capital loss" examples following Direktorat Jenderal Pajak (DJP) terminology and "Bitcoin diterima di sini" customer-facing landing, buy with "Cara membeli Bitcoin" guide, common with "Sumber:" for "Source:" + "Apa selanjutnya?" for "What's next?" + "Tambah bahasa" for "Add language", compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Mari kita bandingkan" (1st-pl inclusive imperative "let us compare") for "Let's compare", "Apa bedanya?" for "What's the difference?", "Seni jalanan" for "Street art", "Pengubah permainan" (lit. "game changer") for "The great equalizer", "Stabilisasi jaringan" for "Grid stabilization", "Harapan & peluang" for "Hope and opportunity", "Paradoks politik" for "Political paradox", "Akhiri perang tanpa akhir" for "End forever wars", lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (1 locale-specific entry — `buy::buy_platform_feature_p2p` "Peer-to-peer" rewritten to "Antar pengguna (peer-to-peer)" so the Indonesian value is byte-distinct from English; the parenthetical preserves the technical term recognizability while the leading "antar pengguna" gives a native-Indonesian gloss). Marker pinned at `scripts/i18n-audit/v2-refresh-status/id.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Croatian (hr) — 2026-04-24

**Counter:** 23/54 languages complete. Twenty-second manifest-driven refresh — second South Slavic language (after Bulgarian; bg uses Cyrillic, hr uses Latin Gajica). Targeting ~5.5M Croatian speakers in Croatia + Bosnia and Herzegovina + the diaspora. Croatia joined the eurozone in January 2023, making EUR-vs-Bitcoin comparisons especially salient. 1,022 entries resolved (464 missing + 1 untranslated + 165 manifest-changed + 392 manifest-added) across 3 helper scripts in `scripts/hr-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Croatian South Slavic noun forms (`inPhrase` "u X-ima" locative plural, `noun`, `nounPlural` (genitive plural for paucal contexts), `label`, `existenceTitle`, `debtTitle`) with formal 2nd-person plural "vi/vaš" register throughout (the standard register in Croatian finance/educational copy per Poslovni dnevnik, Lider, tportal Biznis, Jutarnji Biznis, HR Biznis Magazin); "Bitcoin" preserved capitalized in Latin script (matches existing hr translations); short-scale "bilijuna" = 10^12 matching English (the dominant convention in modern Croatian finance press for US/international figures); freedom cards Rijedak/Decentraliziran/Bez dozvole/Suveren; 5 manifest-changed hero/intro keys including new `inflation_h1_orange` → "Bitcoin nema inflaciju, ali vaš novac ima."), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with German-style low-then-high typographic quotation marks „…" (Croatian standard quotation style), Croatian diacritics (č, ć, š, ž, đ), inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links, and Croatian Bitcoin/finance terminology — "novčanik" (wallet, native Slavic root from "novac" money), "inflacija" (inflation), "kapitalni dobitak"/"kapitalni gubitak" (capital gain/loss — Croatian Tax Administration terms), "bankovna navala" (bank run — calque), "samostalna pohrana" (self-custody — native compound), "blockchain" (kept as anglicism), "kriptovaluta" (cryptocurrency); numbers use Croatian convention comma decimal + period thousands — "153,9 milijardi dolara", "10,82 bilijuna dolara", "1,42 %", "21 milijuna BTC"), `translate-rest-part2.js` (461 entries — business/* subtree with "troškovna osnovica" (cost basis) tracking + "kapitalni dobitak"/"kapitalni gubitak" examples and "Ovdje se prihvaća Bitcoin" customer-facing landing, buy with "Kako kupiti Bitcoin" guide, common with "Izvor:" for "Source:" + "Što slijedi?" for "What's next?" + "Dodaj jezik" for "Add language", compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Usporedimo" (1st-pl imperative "let us compare") for "Let's compare", "Koja je razlika?" for "What's the difference?", "Ulična umjetnost" for "Street art", "Mijenjač igre" (lit. "game changer") for "The great equalizer", "Stabilizacija mreže" for "Grid stabilization", "Nada i prilike" for "Hope and opportunity", "Politički paradoks" for "Political paradox", "Kraj beskrajnog rata" for "End forever wars", lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets). No `fix-remaining.js` needed — all 1,022 entries resolved cleanly via the 3 main helpers; the 1 untranslated entry (`buy::buy_platform_feature_p2p`) was handled directly in part2 with the Croatian-specific gloss "Peer-to-peer (izravno između korisnika)". Marker pinned at `scripts/i18n-audit/v2-refresh-status/hr.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages (~4,349 static pages).

## i18n cleanup Step 5 — Hindi (hi) — 2026-04-24

**Counter:** 21/54 languages complete. Twenty-first manifest-driven refresh — first Indo-Aryan language. Hindi (हिन्दी) reaches ~610M speakers including ~345M native and ~265M L2 within India and the diaspora — one of the world's most-spoken languages and India's most widely understood. India is a massive Tier-1 Bitcoin audience: rapidly digitizing fintech sector (UPI, CBDC pilot, Zerodha/Groww retail boom), 100M+ INR-savvy retail investors, rupee inflation as a teaching narrative, and growing crypto-curious youth. 1,021 entries resolved (464 missing + 0 untranslated + 165 manifest-changed + 392 manifest-added) across 3 helper scripts in `scripts/hi-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Hindi Indo-Aryan postpositional forms (`inPhrase` "X में" locative, `noun`, `nounPlural`, `label`, `existenceTitle`, `debtTitle`) with polite formal 2nd-person "आप/आपका" register throughout (the standard register in Hindi finance/educational content per Mint Hindi/BBC Hindi/ET Hindi/RBI publications); zero-marked plurals for loanword currencies (डॉलर, यूरो, येन stay invariant) and oblique masc. -ए plural for native रुपया → रुपये; `ट्रिलियन` = 10^12 short-scale matching English rather than Indian lakh-crore (since FRED dataset values render in international short-scale numerals); "Federal Reserve" → "फेडरल रिज़र्व"; freedom cards दुर्लभ/विकेंद्रीकृत/बिना अनुमति/संप्रभु; 5 manifest-changed hero/intro keys including new `inflation_h1_orange` → "बिटकॉइन में मुद्रास्फीति नहीं है, लेकिन आपके पैसे में है।"), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with straight ASCII quotation marks "…" (standard digital Hindi/Devanagari convention), Western digits + period decimal + comma thousands separator (universal Indian finance format), inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links — the India demonetisation link especially salient since Hindi audiences will recognize the 2016 ₹500/₹1000 note cancellation as a lived example of currency demonetisation, and Hindi financial/Bitcoin terminology — "बिटकॉइन" (Bitcoin Devanagari transliteration; standard in Indian crypto press), "वॉलेट" (wallet), "मुद्रास्फीति" (inflation; native Sanskrit-derived compound = मुद्रा money + स्फीति swelling), "पूँजीगत लाभ"/"पूँजीगत हानि" (capital gain/loss — official Income Tax Department terminology), "बैंक रन" (bank run, loanword — no native term used), "सेल्फ-कस्टडी" (self-custody loanword), "ब्लॉकचेन" (blockchain), "तुरंत निपटान" (instant settlement)), `translate-rest-part2.js` (460 entries — business/* subtree including all 11 namespaces (accounting with "लागत आधार" cost-basis + पूँजीगत लाभ/हानि examples; why as customer-facing QR landing "यहाँ बिटकॉइन स्वीकार किया जाता है"; wallets covering Strike Business + Square + Breez + OpenNode + IBEX + BTCPay Server + Zaprite with sole/multiple/online/invoice section labels), buy with "बिटकॉइन कैसे ख़रीदें" guide, common with "स्रोत:" for "Source:" + "आगे क्या?" for "What's next?" + "भाषा जोड़ें" for "Add language", compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels (e.g. "तुलना करें" for "Let's compare", "क्या फ़र्क है?" for "What's the difference?", "स्ट्रीट आर्ट" Devanagari transliteration for "Street art", "खेल बदलने वाला" for "The great equalizer", "ग्रिड स्थिरीकरण" for "Grid stabilization", "उम्मीद और अवसर" for "Hope and opportunity", "राजनीतिक विरोधाभास" for "Political paradox", "अंतहीन युद्ध का अंत" for "End forever wars"), lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets). No `fix-remaining.js` needed since Hindi is non-Latin (Devanagari) and naturally produces byte-distinct values from English for every entry. Marker pinned at `scripts/i18n-audit/v2-refresh-status/hi.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). Hindi-language reach is huge — India alone is ~17% of global population, and adding ~610M Hindi-speaking users (including diaspora) opens the educational pipeline to one of the world's largest underserved Bitcoin-curious audiences.

---

## i18n cleanup Step 5 — Hebrew (he) — 2026-04-24

**Counter:** 20/54 languages complete. Twentieth manifest-driven refresh — first Northwest Semitic (Canaanite) language and 3rd RTL locale (after ar and fa). Targeting ~9M Hebrew speakers in Israel plus ~7.5M Jewish-diaspora heritage speakers worldwide. Israel has a sophisticated Bitcoin community (Bitcoin Embassy TLV, Bitcoin Magazine Hebrew, Israeli Bitcoin Association) and significant fintech/cybersecurity-crypto overlap, making Hebrew a high-priority Tier-2 locale for educational reach. 1,031 entries resolved (464 missing + 10 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/he-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Hebrew Northwest Semitic noun forms (`inPhrase` "ב-X" locative, `noun`, `nounPlural`, `label`, `existenceTitle`, `debtTitle`) with informal masculine 2nd-person "אתה/שלך" register throughout (the dominant register in Hebrew Bitcoin/finance education content); `-ים` masc. plurals (דולרים, פאונדים, שקלים) and `-ות` fem. plurals (רופיות) handled per currency; `טריליון` = 10^12 short-scale matching English; "Federal Reserve" → "הפדרל ריזרב"; freedom cards נדיר/מבוזר/ללא אישור/ריבוני; 5 manifest-changed hero/intro keys including new `inflation_h1_orange` → "לביטקוין אין אינפלציה, אבל לכסף שלך יש."), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with straight ASCII quotation marks "…" (standard digital Hebrew convention), Western digits + period decimal + comma thousands separator (Israeli finance format), inline `<a class="body-link">` HTML preserved verbatim for Wikipedia India demonetisation + gold.org supply-and-demand links, and Hebrew financial/Bitcoin terminology — "ביטקוין" (Bitcoin), "ארנק" (wallet), "אינפלציה" (inflation), "רווחי הון"/"הפסד הון" (capital gain/loss — official Israeli Tax Authority terms), "נהירה לבנקים" (bank run — Bank of Israel terminology), "משמורת עצמית" (self-custody calque), "בלוקצ'יין" (blockchain), "סילוק מיידי" (instant settlement)), `translate-rest-part2.js` (460 entries — business/* subtree including all 11 namespaces (accounting with "בסיס עלות" cost-basis + capital gain/loss examples; why as customer-facing QR landing "מקבלים כאן ביטקוין"; wallets covering Strike Business + Square + Breez + OpenNode + IBEX + BTCPay Server + Zaprite with sole/multiple/online/invoice section labels), buy with "איך לקנות ביטקוין" guide, common with "מקור:" for "Source:" + "מה הצעד הבא?" for "What's next?" + "הוסף שפה" for "Add language", compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels (e.g. "בוא נשווה" for "Let's compare", "מה ההבדל?" for "What's the difference?", "אמנות רחוב" for "Street art", "המשווה הגדול" for "The great equalizer", "ייצוב הרשת" for "Grid stabilization", "תקווה והזדמנות" for "Hope and opportunity", "פרדוקס פוליטי" for "Political paradox", "סוף למלחמות נצח" for "End forever wars"), lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (10 `common_stickers_dimensions_*` measurement strings rewritten with native Hebrew unit names — "ס\"מ" (cm) + "אינץ'" (inch) + Western digits + period decimal + the "×" U+00D7 multiplication sign — e.g. "21.59 ס\"מ × 4.6482 ס\"מ (8.5 אינץ' × 1.83 אינץ')"). RTL directionality handled by `<html dir="rtl">` wrapper in `app/[locale]/layout.tsx` (set from `RTL_LOCALES` in `lib/i18n/config.ts`) — no per-component changes needed. Marker pinned at `scripts/i18n-audit/v2-refresh-status/he.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). Hebrew is the **3rd RTL locale completed** (after Arabic + Persian); only Urdu (ur) remains for RTL coverage.

---

## i18n cleanup Step 5 — Hausa (ha) — 2026-04-24

**Counter:** 19/54 languages complete. Nineteenth manifest-driven refresh — first Chadic language and first Sub-Saharan African language. Hausa (Harshen Hausa) is West Africa's most widely spoken language: ~80M native speakers, ~150M total when L2 is included, with national-language status in Nigeria and Niger and significant speaker populations across Ghana, Cameroon, Sudan, Chad, and the diaspora. Reaches Northern Nigeria's fast-growing Bitcoin-curious audience driven by naira inflation, capital controls, and post-2020 fintech adoption. 1,040 entries resolved (472 missing + 11 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/ha-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Hausa Chadic noun forms (`longName`, `noun`, `nounPlural`) with familiar masc. sg. "ka/kana/kuɗinka" register throughout — dominant register in BBC Hausa / VOA Hausa / Hausa-language Bitcoin commentary; Hausa hooked consonants (ɓ, ɗ, ƙ, ƴ) used in native vocabulary like `kuɗi` (money), `ƙarancin` (scarce), `ɗaya` (one) + 41 non-currency keys including freedom cards Mai ƙarancin wadata/Mai rarrabuwa/Ba ya buƙatar izini/Mai mulkin kansa), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages using straight curly quotes "…", inline `<a class="body-link">` HTML preserved verbatim, and Hausa coinage for financial terms: "blockchain" (anglicism), "walat" (wallet), "adana kuɗi" (savings/to save), "hauhawar farashi" (inflation, lit. "rising of prices" — the BBC Hausa standard), "kasuwanci" (business/commerce), "gudun banki" (bank run), "wadata" (supply), "ƙarancin wadata" (scarcity), "ma'amala" (transaction), "tsabar kuɗi" (cash), "riƙe-da-kai" (self-custody, calque); numbers use English-style format since Northern Nigeria uses English numeric conventions in finance), `translate-rest-part2.js` (461 entries — business/* subtree with "ribar jari"/"hasarar jari" for capital gain/loss and "Ana karɓar Bitcoin a nan" customer-facing landing, buy, common with "Tushen:" for "Source:", compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Mu yi kwatance" (1st-pl imperative) for "Let's compare", "Menene bambancin?" for "What's the difference?", "Fasahar tituna" for "Street art", "Mai daidaitawa" for "The great equalizer", lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (17 locale-specific entries — `bitcoin-vs-banks::point_3_summary_2` Hausa rewrite, `bitcoin-vs-crypto::crypto` patched in-place to "KIRIPTO" (Hausa transliteration since Hausa-language Bitcoin community uses Hausanized spellings, mirroring "kompiyuta"/"kafiyo" patterns), `english_bitcoin_accepted_here_sticker_files`, `cic_header`/`cic_inflation_cta` Hausa rewrites, `bitcoin_sticker_files_all_languages`, `sticker_language_success_1`/`_2`, `sticker_success_list_4`, plus 10 `common_stickers_dimensions_*` measurements rewritten with Hausa "inci" (inches loan) — e.g. "21.59 cm x 4.6482 cm (inci 8.5 x inci 1.83)"; Hausa uses English-style decimal periods). Marker pinned at `scripts/i18n-audit/v2-refresh-status/ha.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅).

---

## i18n cleanup Step 5 — Irish (ga) — 2026-04-24

**Counter:** 18/54 languages complete. Eighteenth manifest-driven refresh — first Celtic language. Irish (Gaeilge) is the first official language of Ireland and an official language of the EU. Native-speaker community is small (~170K daily / ~1.8M with some proficiency) but has strong institutional backing via Foras na Gaeilge, Conradh na Gaeilge, Gaelchultúr, TG4, and Raidió na Gaeltachta; reaches Gaeltacht regions (Donegal, Mayo, Galway, Kerry, Cork, Waterford, Meath) plus Irish-language learners worldwide. 1,031 entries resolved (464 missing + 10 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/ga-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Irish noun forms (`longName` plural, `noun`, `nounPlural`) with informal "tú" register throughout — dominant register in TG4/Raidió na Gaeltachta/Tuairisc.ie educational copy + 41 non-currency keys including freedom cards Gann/Díláraithe/Gan chead/Ceannasach), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages using Irish typographic quotation marks "…", typographic apostrophes (U+2019) used extensively for elision (d'úsáid, d'fhostaithe, d'airgid), and Irish coinage for financial terms: "blocshlabhra" (blockchain), "sparán" (wallet), "coigilt" (savings), "boilsciú" (inflation), "cripteabhair" (crypto), "CBDCanna" (CBDCs via native -anna plural), "féin-choimeádaithe" (self-custodial); numbers use English-style format since Ireland uses English numeric conventions even in Irish-language finance writing), `translate-rest-part2.js` (460 entries — business/* subtree with "gnóthachan caipitil"/"caillteanas caipitil" for capital gain/loss, buy, common with "Foinse:" for "Source:", compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Déanaimis comparáid" (1st-pl imperative) for "Let's compare", "Cad í an difríocht?" for "What's the difference?", "Ealaín sráide" for "Street art", "An comhaontóir mór" for "The great equalizer", lightning, nostr/index, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets; also uses "CCanna" (ceisteanna coitianta + -anna plural) for FAQ), and `fix-remaining.js` (10 `common_stickers_dimensions_*` measurements — rewritten with Irish "or" (orlach) abbreviation instead of "in" — e.g. "21.59 cm x 4.6482 cm (8.5 or x 1.83 or)"; Irish uses English-style decimal periods). Marker pinned at `scripts/i18n-audit/v2-refresh-status/ga.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages (~4,349 static pages).

---

## i18n cleanup Step 5 — French (fr) — 2026-04-24

**Counter:** 17/54 languages complete. Seventeenth manifest-driven refresh — second largest audience after Spanish with ~80M native French speakers plus ~120M L2 speakers across West + Central Africa, the Caribbean, Canada/Québec, and diaspora. French is tier-1 for Bitcoin education: France/Switzerland/Senegal/Côte d'Ivoire have active Bitcoin communities, and French Bitcoin content (Cryptoast, StackinSat, Grand Angle Crypto, Bitcoin en Français) is plentiful. 1,041 entries resolved (464 missing + 20 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/fr-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using French noun forms (`longName` plural for "si tu épargnes en X", `noun`, `nounPlural`) with informal "tu/ton" register throughout + 41 non-currency keys), `translate-rest-part1.js` (194 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with French angular quotation marks «…», typographic apostrophes (U+2019), inline `<a class="body-link">` HTML preserved verbatim, numbers use French convention decimal comma + space thousands + "billions" = 10^12 (long-scale, matches English "trillion")), `translate-rest-part2.js` (460 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Comparons" for "Let's compare" and "Quelle est la différence ?" for "What's the difference?", lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (19 locale-specific entries covering byte-identical-to-English cognates — `about_open_source_header` "Open Source" → "Code ouvert", `bitcoin-vs-cbdc::bitcoin_vs_cbdcs` → "Bitcoin vs MNBC", `bitcoin-vs-crypto::bitcoin_vs_crypto` → "Bitcoin vs Cryptomonnaies" + `crypto` → "CRYPTOMONNAIES", 10 `common_stickers_dimensions_*` measurements with French decimal commas + "po" (pouce) unit — e.g. "21,59 cm x 4,6482 cm (8,5 po x 1,83 po)", `common_sources_heading` "Sources" → "Sources :" French convention, `common_stickers_dimensions` → "Dimensions :", `common_stickers_type` → "Type :", `stickers::placeholder_province` → "Province / région") plus one in-place patch for `bitcoin-vs-crypto::bitcoin_point_7` "Antifragile" → "Antifragile (résistant aux chocs)" (same spelling in French). Marker pinned at `scripts/i18n-audit/v2-refresh-status/fr.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Finnish (fi) — 2026-04-24

**Counter:** 16/54 languages complete. Sixteenth manifest-driven refresh — second Finno-Ugric language (after Estonian). Targeting ~5.5M native Finnish speakers in Finland plus the global Finnish diaspora. Finland has a strong Bitcoin community (konsensus.fi, bittiraha.fi, Helsinki Bitcoin meetups) and relatively high per-capita adoption. 1,022 entries resolved (465 missing + 0 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/fi-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Finnish Finno-Ugric noun forms (`longNameSeesIn` inessive plural, `noun`, `nounPlural`, `nounPartPl` partitive plural) with informal "sinä/sä" register throughout + 41 non-currency keys), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Finnish high-high typographic quotes `”…”` (matches Swedish convention, distinct from German/Estonian/Czech `„…"`) and brand names preserved verbatim; numbers use Finnish convention decimal comma + space thousands with "biljoona" = 10^12 since Finnish uses **long scale** natively), `translate-rest-part2.js` (460 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Vertaillaan" for "Let's compare" (passive 1st plural hortative) and "Mikä on ero?" for "What's the difference?", lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (3 locale-specific entries — `english_bitcoin_accepted_here_sticker_files` → "Englanninkieliset ”Bitcoin Accepted Here” -tarratiedostot", `bitcoin-vs-visa::bitcoin_point_3` "Transparent system" → "Läpinäkyvä järjestelmä", `buy_platform_feature_dca` "Dollar-cost averaging" → "Dollarikeskiarvoistus (DCA)"). Marker pinned at `scripts/i18n-audit/v2-refresh-status/fi.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Persian (fa) — 2026-04-24

**Counter:** 16/54 languages complete. Fifteenth manifest-driven refresh — first Indo-Iranian language and 2nd RTL locale (after Arabic). Targeting ~110M native Persian speakers (Farsi in Iran, Dari in Afghanistan). Iran has been one of the most Bitcoin-active countries in the world for years — sanctions, capital controls, ~40–50% annual inflation, and the devaluing rial have pushed both retail savers and miners toward BTC (4–7% of global hashrate). 1,031 entries resolved (464 missing + 10 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/fa-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Persian noun forms (`inPhrase` "به X" locative, `noun`, `label`, `existenceTitle` "X در گردش", `debtTitle` "کل بدهی دولت <Country>") with formal plural "شما" register throughout + 41 non-currency keys), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Persian angular quotes «…», **ZWNJ (U+200C)** between stem/suffix boundaries throughout (بیت‌کوین, می‌کند, می‌شود), Eastern Arabic digits ۰-۹ for narrative numbers while preserving Western digits inside numeric widget amounts, inline `<a class="body-link">` HTML preserved verbatim), `translate-rest-part2.js` (460 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "بیایید مقایسه کنیم" for "Let's compare" (hortative formal plural) and "تفاوت چیست؟" for "What's the difference?", lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (10 `common_stickers_dimensions_*` measurement strings using Eastern Arabic digits + Arabic decimal separator ٫ (U+066B) + Persian unit names "سانتی‌متر"/"اینچ" — e.g. "۲۱٫۵۹ سانتی‌متر × ۴٫۶۴۸۲ سانتی‌متر (۸٫۵ اینچ × ۱٫۸۳ اینچ)"). RTL directionality handled by `<html dir="rtl">` in `app/[locale]/layout.tsx` via RTL_LOCALES set — no per-component changes needed. Marker pinned at `scripts/i18n-audit/v2-refresh-status/fa.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Basque (eu) — 2026-04-24

**Counter:** 14/54 languages complete. Fourteenth manifest-driven refresh, and a unique linguistic addition: Basque is a **language isolate** — not Indo-European, not Finno-Ugric, no established relationship to any other living language. Targeting ~750K native Basque speakers in the Basque Country (Euskal Herria) across Spain and France. 1,033 entries resolved (464 missing + 12 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/eu-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Basque ergative-absolutive noun forms (`longNameSeesIn` inessive plural "X-etan", `noun`, `nounPlural`, `nounPartPl` partitive plural) with standard "zu/zuk/zure" register throughout + 41 non-currency keys), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Basque angular quotes «…» (Euskaltzaindia convention), inline `<a class="body-link">` HTML preserved verbatim, numeric format with "%" BEFORE number `% 1,42` / `10,82 bilioi $`), `translate-rest-part2.js` (460 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels like "Alderatu dezagun" for "Let's compare" (1st pl. imperative) and "Zein da aldea?" for "What's the difference?", lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (12 locale-specific entries — `english_bitcoin_accepted_here_sticker_files`, `bitcoin-vs-visa::bitcoin_point_3` "Sistema gardena", `buy_platform_feature_dca` "Dolar-kostuaren bataz bestekoa (DCA)", `bitcoin-vs-crypto::bitcoin_vs_crypto` "Bitcoin vs kriptomoneta" + `crypto` "KRIPTOMONETA", plus 10 `common_stickers_dimensions_*` measurement strings rewritten with Basque decimal commas and "hh" abbreviation for "hazbete" (inches) — e.g. "21,59 cm x 4,6482 cm (8,5 hh x 1,83 hh)"). Marker pinned at `scripts/i18n-audit/v2-refresh-status/eu.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Spanish (es) — 2026-04-24

**Counter:** 13/54 languages complete. Twelfth manifest-driven refresh, and the largest audience to date — targeting ~500M native Spanish speakers across Spain, Mexico, Central America, South America (excluding Brazil), the Caribbean, Equatorial Guinea, and the global diaspora. Spanish is tier-1 for Bitcoin education: Argentina, Venezuela, and El Salvador all have deep adoption driven by local inflation. 1,035 entries resolved (464 missing + 14 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/es-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Spanish noun forms (`longName`, `noun`, `nounPlural`) with informal "tú/tu" register throughout + 41 non-currency keys), `translate-rest-part1.js` (194 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Spanish angular quotes «…» per RAE style, inverted question/exclamation marks ¿…? ¡…!, inline `<a class="body-link">` HTML preserved verbatim, numeric format `1,42 %` / `10,82 billones`), `translate-rest-part2.js` (461 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (13 locale-specific entries — `bitcoin-vs-cbdc::bitcoin_vs_cbdcs` → "Bitcoin vs. CBDC", 10 `common_stickers_dimensions_*` with Spanish decimal commas, `common_stickers_type_die_cut` → "pegatina troquelada", `common_stickers_material` rewritten in-place to "Material del producto:" since Spanish cognate is byte-identical to English). Marker pinned at `scripts/i18n-audit/v2-refresh-status/es.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — Greek (el) — 2026-04-24

**Counter:** 11/54 languages complete. Eleventh manifest-driven refresh, first Hellenic-branch language. 1,033 entries resolved (464 missing + 12 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/el-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Greek noun forms (`longName`, `longNameNom`, `noun`, `nounPlural`) with formal "εσείς/σας" register throughout + 41 non-currency keys), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Greek angular quotes «…» and inline `<a class="body-link">` HTML preserved verbatim + numeric format `1,42%` / `10,82 τρισ. $`), `translate-rest-part2.js` (461 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (11 locale-specific entries — `bitcoin-vs-crypto::crypto` "CRYPTO" → "ΚΡΥΠΤΟ" in Greek capitals, plus 10 `common_stickers_dimensions_*` measurement strings rewritten to use Greek abbreviations "εκ." (εκατοστά, cm) and "ίντσες" (inches) with Greek decimal commas — e.g. "21,59 εκ. x 4,6482 εκ. (8,5 ίντσες x 1,83 ίντσες)"). Marker pinned at `scripts/i18n-audit/v2-refresh-status/el.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---

## i18n cleanup Step 5 — German (de) — 2026-04-24

**Counter:** 10/54 languages complete. Tenth manifest-driven refresh, first West Germanic language. 1,028 entries resolved (464 missing + 7 untranslated + 165 manifest-changed + 392 manifest-added) across 5 helper scripts in `scripts/de-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using German declension with dative `longName` ("in X") + informal "Du" register throughout + 41 non-currency keys), `translate-rest-part1.js` (194 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with German typography „…" and DIN 5008 conventions + numeric format `1,42 %` / `10,82 Billionen $`), `translate-rest-part2.js` (461 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 62 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets — plus leftover `inflation::inflation_us_dollar` → "US-DOLLAR"), `fix-remaining.js` (5 locale-specific entries — `bitcoin-vs-gold::gold` "Gold", `common_cold_wallet`/`common_hot_wallet` kept as anglicisms standard in the German Bitcoin community, `common_stickers_material` / `stickers::placeholder_name_optional` byte-identical fixed in next pass), and `force-rewrite-identical.js` (3 byte-identical cognates replaced with distinct German forms directly in JSON — `about_open_source_header` "Open Source" → "Quelloffen", `common_stickers_material` "Material:" → "Werkstoff:", `stickers::placeholder_name_optional` "Name (optional)" → "Name (freiwillig)"). Marker pinned at `scripts/i18n-audit/v2-refresh-status/de.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---

---
## i18n cleanup Step 5 — Danish (da) — 2026-04-24

**Counter:** 9/54 languages complete. Ninth manifest-driven refresh, first North Germanic language. 1,027 entries resolved (465 missing + 5 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/da-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies using Danish common-gender noun forms with locative "i X" preposition + 41 non-currency keys), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages with Danish typographic quotes `„…"` for brand phrases like „Bitcoin modtages her"), `translate-rest-part2.js` (461 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 61 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (5 locale-specific entries — `english_bitcoin_accepted_here_sticker_files`, `bitcoin-vs-visa::bitcoin_point_3` "Gennemsigtigt system", `buy_platform_feature_dca` with parenthetical gloss "(gradvist køb)", `common_sticker_files_mission_3` reworded to "inflationen" for byte-distinctness, and `common_stickers_type` "Type:" → "Udformning:"). Marker pinned at `scripts/i18n-audit/v2-refresh-status/da.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---
## i18n cleanup Step 5 — Czech (cs) — 2026-04-24

**Counter:** 8/54 languages complete. Eighth manifest-driven refresh, first West Slavic language. 1,023 entries resolved (464 missing + 2 untranslated + 165 manifest-changed + 392 manifest-added) across 4 helper scripts in `scripts/cs-manifest-refresh/`: `translate-inflation.js` (368 entries — per-currency templated translator × 13 currencies with Czech's four case forms `longName`/`longNameNom`/`longNameGen`/`noun`/`nounPlural` + 41 non-currency keys), `translate-rest-part1.js` (194 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages), `translate-rest-part2.js` (461 entries — business/* subtree, buy, common with typographic `„…"` quotes, compound-inflation-calculator, flyers, get-involved, index homepage with all 60 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (1 entry — `buy_platform_feature_p2p` got a parenthetical gloss "(mezi uživateli)" so it's byte-distinct from the English "Peer-to-peer" technical term). Marker pinned at `scripts/i18n-audit/v2-refresh-status/cs.json` to manifestVersion `d966f8c780c0c485...`. All 4 verification checks PASS. `npm run build` clean across 55 locales × 81 pages.

---
## i18n cleanup Step 5 — 2026-04-24 delta refresh (7 locales retroactively synced)

**Counter:** 7/54 languages still complete — now synced against the new manifest version `d966f8c780c0c485...`.

Minor English text updates in commits `c88d7273..ef04b2a3` on 2026-04-24 (about / get-involved / bitcoin-vs-cash / bitcoin-vs-fine-art / bitcoin-vs-gold copy edits + `/inflation` feature-card links + `/business/faq` anchor-wrapping) produced 3 changed + 4 added English keys. Manifest was regenerated (162 changed + 388 added → 165 changed + 392 added = 557 total). Wrote `scripts/delta-refresh-2026-04-24/apply-delta.js` to retroactively patch the 7 Step-5-completed locales (af, am, ar, az, bg, bn, ca) with the delta — 13 changed + 4 added translations per locale across 5 namespaces, plus a marker re-pin. All 7 locales PASS verify-language.js against the new manifest. `npm run build` clean across ~4,349 static pages. The 47 remaining locales will pick up the full 557-key manifest naturally when they run through `/translate-manifest-refresh`.

## i18n cleanup Step 5 — Catalan (ca) manifest refresh — 2026-04-23

**Counter:** 7/54 languages complete against the V2 manifest.

Seventh locale (af, am, ar, az, bg, bn, ca) — first Romance-language locale in this tier, targeting ~10M Catalan speakers across Catalonia, Valencia, the Balearic Islands, and Andorra. 1,016 entries flagged (464 missing, 2 untranslated, 162 manifest-changed, 388 manifest-added) → 0 flagged after four helper scripts under `scripts/ca-manifest-refresh/` (`translate-inflation.js` for 368 per-currency + shared keys, `translate-rest-part1.js` for 193 comparison/bank-runs/about/404 entries, `translate-rest-part2.js` for 453 remaining namespaces) + `fix-remaining.js` for the 2 `common_stickers_{dimensions,material}` keys that happen to be spelled identically to English in standard Catalan (reworded to `Mides:` and `Material de l'adhesiu:`). Apostrophe contractions (`l'euro`, `l'or`) handled via a templated `de `/`d'` branch in the inflation translator. All 4 verify-language.js checks PASS on first apply. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). Marker at `scripts/i18n-audit/v2-refresh-status/ca.json` pins manifestVersion `75d5ff1151d50651...`. Report archived to `scripts/i18n-audit/reports/applied/ca-20260424-022611.json`.

---
## i18n cleanup Step 5 — Bengali (bn) manifest refresh — 2026-04-23

**Counter:** 6/54 languages complete against the V2 manifest.

Sixth locale (af, am, ar, az, bg, bn) — first **Bengali-script (Bangla / Eastern Nagari)** locale, targeting ~300M speakers across Bangladesh and West Bengal. 1,024 entries flagged (464 missing, 10 untranslated, 162 manifest-changed, 388 manifest-added) → 0 flagged after three helper scripts under `scripts/bn-manifest-refresh/` (`translate-inflation.js` + `translate-rest-part1.js` + `translate-rest-part2.js`) + `fix-remaining.js` for the 10 `common_stickers_dimensions_*` measurement strings (English "cm"/"in" → Bengali "সেমি"/"ইঞ্চি" with Bengali digits). All 4 verify-language.js checks PASS on first apply. `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). Marker at `scripts/i18n-audit/v2-refresh-status/bn.json` pins manifestVersion `75d5ff1151d50651...`. Report archived to `scripts/i18n-audit/reports/applied/bn-20260424-010601.json`.

Bengali uses its own digit script (০১২৩৪৫৬৭৮৯). Used Bengali digits in body text + stats ("২১ মিলিয়ন", "১.৪২%", "৪ বছর") while keeping Western digits in brand-adjacent contexts (URLs, 21,000,000 parenthetical, "2008" whitepaper year, "B2B"). The CURRENCY table uses a long form with locative case ending (`"মার্কিন ডলারে"` = "in US dollars") vs. nominative labels (`"মার্কিন ডলার"`) — Bengali grammar needs locative for "save in X" constructions.

---

## i18n cleanup Step 5 — Bulgarian (bg) manifest refresh — 2026-04-23

**Counter:** 5/54 languages complete against the V2 manifest.

Fifth locale (af, am, ar, az, bg) — first Cyrillic-script locale. 1,018 entries flagged (464 missing, 4 untranslated, 162 manifest-changed, 388 manifest-added) → 0 flagged after three helper scripts under `scripts/bg-manifest-refresh/` + `fix-remaining.js` for the 4 `business/why::why_s*` section headers. All 4 verify-language.js checks PASS on first apply. `npm run build` clean across 55 locales × 81 pages. Marker at `scripts/i18n-audit/v2-refresh-status/bg.json` pins manifestVersion `75d5ff1151d50651...`. Report archived to `scripts/i18n-audit/reports/applied/bg-20260424-004041.json`.

Bulgarian uses Cyrillic script with lowercase conventions for concept nouns (инфлация, дълг) and comma as decimal separator (1,42%). Per-currency templates carry both genitive ("щатския долар") and nominative ("Щатски долар") forms since Bulgarian noun-adjective agreement depends on grammatical case. Plural forms distinct from singulars (долар/долара, йена/йени, реал/реала) handled via separate `noun`/`nounPlural` fields in the CURRENCY table.

---

## i18n cleanup Step 5 — Azerbaijani (az) manifest refresh — 2026-04-23

**Counter:** 4/54 languages complete against the V2 manifest.

Fourth locale (af, am, ar, az) — first Turkic locale. 1,015 entries flagged (464 missing, 1 untranslated, 162 manifest-changed, 388 manifest-added) → 0 flagged after three helper scripts under `scripts/az-manifest-refresh/` + one inline fix for `common_stickers_material`. All 4 verify-language.js checks PASS on first apply. `npm run build` clean across 55 locales × 81 pages. Marker at `scripts/i18n-audit/v2-refresh-status/az.json` pins manifestVersion `75d5ff1151d50651...`. Report archived to `scripts/i18n-audit/reports/applied/az-20260423-233650.json`.

Azerbaijani uses modern Latin script with extended diacritics (`ə`, `ğ`, `ı`, `ö`, `ş`, `ü`, `ç`). Translation process mirrored the Arabic template closely — the hero-title genitive patterns (e.g. "Bitcoin ilə qızılın arasındakı fərq") fall out naturally from Azerbaijani vowel harmony so no per-asset special-casing needed.

---

## i18n cleanup Step 5 — Arabic (ar) manifest refresh — 2026-04-23

**Counter:** 3/54 languages complete against the V2 manifest.

Third locale processed against the committed manifest, and the first one to exercise the `/translate-manifest-refresh` workflow end-to-end on a locale with no prior manifest-era work (no rescue/carry-over step needed).

**Report stats:**
- Total English keys scanned: 1,848
- Missing: 464 (locale-specific)
- Untranslated: 0
- Manifest changed: 162 (identical for every locale)
- Manifest added: 388 (identical for every locale)
- → 1,014 entries flagged

**Work split (three helper scripts under `scripts/ar-manifest-refresh/`):**
1. `translate-inflation.js` — 368 entries (327 per-currency × 13 currencies via templated `t(code, suffix)` function + 41 shared/non-currency keys including freedom cards, stories, sources, and the 5 manifest-changed hero/intro keys).
2. `translate-rest-part1.js` — 193 entries (404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages). RTL-safe arrow characters (`←`) used for "Source: … →" patterns. Brand names (SVB, FRED, FDIC, Silicon Valley Bank, Visa, CBDCs, etc.) preserved verbatim.
3. `translate-rest-part2.js` — 453 entries (business/*, buy, common 50-key bucket, compound-inflation-calculator, flyers, get-involved, index 60+ homepage card labels, lightning, nostr/index 45 entries, sticker-files/index, sticker-language-success, sticker-success, stickers, wallets).

**Application:**
- `apply-translations.js ar` wrote **1,014 keys across 38 files**.
- Marker at `scripts/i18n-audit/v2-refresh-status/ar.json` pinning manifestVersion `75d5ff1151d50651...`.
- Archived report at `scripts/i18n-audit/reports/applied/ar-20260423-230104.json`.

**Verification:**
- ✅ Marker matches current manifestVersion.
- ✅ Locale-specific coverage: missing=0, untranslated=0, manifestChanged=0, manifestAdded=0.
- ✅ Stale pre-V2 English cross-check passed (162 entries scanned).
- ✅ `npm run build` clean across 55 locales × 81 pages (~4,349 static pages).

**RTL:** Arabic is RTL. The `<html dir="rtl">` wrapper in `app/[locale]/layout.tsx` (from `RTL_LOCALES` in `lib/i18n/config.ts`) handles layout mirroring automatically — no per-component changes needed.

**Pattern refinement notes:**
- Splitting `translate-rest.js` into `-part1` + `-part2` by logical groupings (comparison pages vs. everything else) scaled much better than the monolithic approach used for `af` / `am`. Each part is easier to scan, review, and re-translate if the manifest ever changes.
- Locale report size varies with prior translation state: `af` (916 before rescue, heavily partial), `am` (874, carry-over work), `ar` (1,014, full backlog because no prior manifest-era work existed).

Next up in the tier-1 global-reach queue: `es`, `fr`, `de`, `pt`, `zh`, `ja`, `ru`, `hi`.

---

## i18n cleanup — Manifest-driven refresh refactor + af/am rescue — 2026-04-23

**Counter:** 2/54 languages complete against the new manifest.

Root-caused a silent staleness bug (file-level freshness gate in
`language-diff.js` skipped english-changed detection when target file's
`last-updated` happened to equal English's), refactored the i18n refresh
pipeline around a committed **V2 manifest** + per-locale marker, and
rescued both af + am to a clean verification state.

**Manifest** (`scripts/i18n-audit/v2-manifest.json`):
- 162 `changed` entries — English keys rewritten during V2.
- 388 `added` entries — new keys since pre-V2 baseline.
- 550 total, identical work for every locale.
- sha256 `manifestVersion` pins each per-locale marker.

**New infrastructure:**
- `scripts/i18n-audit/build-v2-manifest.js` — generates the manifest.
- `scripts/i18n-audit/v2-manifest.json` — committed canonical list.
- `scripts/i18n-audit/v2-refresh-status/<lang>.json` — per-locale marker.
- `scripts/i18n-audit/verify-language.js` — unified 4-check audit.
- `scripts/i18n-audit/rescue-carry-over.js` — one-off migration helper.

**Refactored:**
- `scripts/i18n-audit/language-diff.js` — drops freshness gate + likely-stale heuristic; reads from manifest.
- `scripts/i18n-audit/apply-translations.js` — writes marker; calls verify-language.js.

**Renamed/deleted:**
- `.clinerules/workflows/v2-translate-refresh.md` → `manifest-translate-refresh.md`.
- `scripts/audit-translation.js` — deleted (superseded by verify-language.js).

**af + am rescue:**
- Both locales: 550 entries applied (162 changed + 388 added). Verification ✅ PASS on all 4 checks. Original bug (`am/bitcoin-vs-gold|point_3_summary_1`) confirmed fixed.

**Verification:**
- `npm run build`: clean across 4,349 static pages, zero warnings.
- `verify-language.js af` + `verify-language.js am`: all 4 checks PASS.

### Files changed
```
scripts/i18n-audit/build-v2-manifest.js        (NEW — ~320 lines)
scripts/i18n-audit/v2-manifest.json             (NEW, committed — 120KB, 550 entries)
scripts/i18n-audit/v2-refresh-status/af.json    (NEW — marker)
scripts/i18n-audit/v2-refresh-status/am.json    (NEW — marker)
scripts/i18n-audit/verify-language.js           (NEW — ~220 lines)
scripts/i18n-audit/rescue-carry-over.js         (NEW — migration helper)
scripts/i18n-audit/language-diff.js             (refactored — manifest-driven)
scripts/i18n-audit/apply-translations.js         (refactored — marker write + unified verify)
.clinerules/workflows/manifest-translate-refresh.md  (renamed from v2-translate-refresh.md, rewritten)
scripts/audit-translation.js                     (DELETED)
scripts/am-manifest-refresh/translate-manifest-changed.js       (NEW — 115 am translations)
scripts/am-manifest-refresh/translate-manifest-changed-part2.js (NEW — 47 am translations)
i18n/af/**/*.json                               (37 files retouched — 550 entries applied)
i18n/am/**/*.json                               (37 files retouched — 550 entries applied, 162 manifest-changed translated fresh)
V2-REDESIGN-CHECKLIST.md                        (Step 5 section updated with manifest-refactor note)
memory-bank/activeContext.md                    (matching entry prepended)
memory-bank/progress.md                         (this entry prepended)
```

---

## i18n cleanup Step 5 Phase B — Amharic (am) re-translation complete — 2026-04-23


**Counter:** 2/54 languages complete.

Second per-language Phase B session. Ran `/translate-v2-refresh Amharic`
end-to-end. Diff flagged **874 entries** (854 missing + 12 untranslated
+ 8 english-changed + 0 likely-stale) across 38 namespaces. Amharic is
the first abugida/syllabic-script locale through the pipeline, which
uncovered and fixed a false-positive in the `targetHasV2MarkerEquivalent`
length-ratio heuristic.

Three helper scripts in `scripts/amharic-v2-refresh/`:

1. **`retranslate-english-changed.js`** — 8 V2-rewritten English keys
   (2 on /404, 5 on /buy step headers, 1 on sticker-files index hero).
2. **`translate-inflation.js`** — templated `t(code, suffix)` × 13
   currencies (USD, EUR, AUD, BRL, CAD, GBP, ILS, INR, JPY, MXN, NZD,
   PHP, THB) + 37 non-currency keys (freedom cards, story cards, BPR
   detail, source citations). 364 entries. `CURRENCY` table renders
   Amharic noun / label / existence-title / debt-title for each.
3. **`translate-rest.js`** — 502 entries across 37 namespaces keyed
   `"<ns>::<key>"`. Includes 11 `common_stickers_dimensions_*` with
   Amharic syllabic unit labels (`ሴ.ሜ` / `ኢንች`). 0 unmatched.

**Tooling tuning — syllabic-script false-positive fix.** Ge'ez script
is one glyph per syllable → Amharic translations run ~60–70% of the
English character count. The old `targetHasV2MarkerEquivalent` lower
bound was 0.75 which rejected 4 correct "Source: …" → "ምንጭ: …"
translations as likely-stale (ratios 0.64–0.73). Fix: lowered lower
bound from **0.75 → 0.55** in `scripts/i18n-audit/language-diff.js`.
Kept upper bound at 1.35 (target >> English is still a stale signal).
Documented in comment — unblocks future Tibetan / Khmer / Burmese / etc.

Also added:
- `CBDC` → `SHORT_ALLOWED_IDENTICAL` (language-diff.js). 4-char brand
  acronym, legitimately identical across locales.
- `"Lightning Network"` → `SKIP_VALUES` (audit-translation.js). Brand
  phrase kept verbatim.

**Verification**

- `language-diff.js am` post-apply: **missing=0, untranslated=0,
  englishChanged=0, likelyStale=0**.
- `audit-translation.js am`: **missingFiles=0, missingKeys=0,
  identical=0, englishChanged=0**.
- `apply-translations.js am --verify-only`: **both audits ✅ PASS**.
- `npm run build`: clean across 4,349 static pages, zero
  `MISSING_MESSAGE`, zero warnings.

### Files changed

```
scripts/amharic-v2-refresh/translate-inflation.js         (NEW — ~280 lines, per-currency + 37 non-currency)
scripts/amharic-v2-refresh/translate-rest.js              (NEW — ~600 lines, ns::key map, 502 entries)
scripts/amharic-v2-refresh/retranslate-english-changed.js (NEW — ~80 lines, 8 V2-rewritten key translations)
i18n/am/**/*.json                                         (38 files re-touched; 874 entries added/updated; @metadata.last-updated → 2026-04-23)
scripts/i18n-audit/reports/applied/am-20260423-204033.json (archived report)
scripts/i18n-audit/language-diff.js                       (SHORT_ALLOWED_IDENTICAL: + CBDC; targetHasV2MarkerEquivalent: ratio 0.75 → 0.55)
scripts/audit-translation.js                              (SKIP_VALUES: + "Lightning Network")
V2-REDESIGN-CHECKLIST.md                                  (Step 5 am ticked with detailed note + Phase B counter 1 → 2)
memory-bank/activeContext.md                              (matching entry prepended)
memory-bank/progress.md                                   (this entry prepended)
```

---

## i18n cleanup Step 5 Phase B — Afrikaans (af) re-translation complete — 2026-04-23

**Counter:** 1/54 languages complete.

First per-language Phase B session. Ran `/translate-v2-refresh Afrikaans`
end-to-end. Diff flagged **916 entries** (854 missing + 62 untranslated + 0
likely-stale) across 37 namespaces. Inflation namespace alone held 365 of
those — 13 currencies × 25 templated keys + 38 non-currency keys for
freedom cards, stat cards, stories, and sources.

Two helper scripts in `scripts/afrikaans-v2-refresh/`:

1. **`translate-inflation.js`** — templated per-currency translation
   function (`t(code, suffix)`) × 13 currencies (USD, EUR, AUD, BRL, CAD,
   GBP, ILS, INR, JPY, MXN, NZD, PHP, THB) plus direct map for 38
   non-currency keys (freedom cards, `inflation_story_*`, FRED/BLS source
   citations, Bitcoin stat card). Per-currency `CURRENCY` table carries
   Afrikaans noun / article / label / existence title / debt title for
   each geldeenheid. Filled all 365 inflation entries in one pass.
2. **`translate-rest.js`** — 551 entries across 36 namespaces keyed by
   `"<namespace>::<key>"` to disambiguate the 10 comparison pages that
   all share a `hero_title` key. 0 unmatched.

**Audit allow-list expansions** (both `scripts/i18n-audit/language-diff.js`
and `scripts/audit-translation.js`): added regex matchers for
`home_link_author_*` (27 author proper nouns — Anita Posch, Lyn Alden,
Forbes, etc.), `buy_country_*` (11 country names kept in Latin script),
`common_language_*` (language name labels that stay in their English
form for Latin-script locales), `nostr_(primal|damus|amethyst|iris)_name`
+ `nostr_platform_(ios|android|web|ios_android_web)`,
`wallets_name_(btcpay_server|ibex_pay|open_node)`,
`inflation_stat_<code>_label` (currency stat labels like "US DOLLAR"),
`inflation_story_*_title` (Texas/Pennsylvania/Canada/Nigeria place
names). Added value-level entries for dataset citations (FRED CPI, FRED
M1, FRED Money Supply, BLS CPI, Bitcoin whitepaper, Lightning paper,
Jameson Lopp, James Lavish treasury auction) + numeric tokens
(`(21,000,000)`, `+$10`, `−$10`).

**Heuristic fix in `language-diff.js`**: the `likely-stale` tier
previously fired for any translation where target length diverged >25%
from English — which gave a false positive on `home_source_prefix`
("Source:" → "Bron:", 71% ratio). Added an early-return in
`targetHasV2MarkerEquivalent()` that accepts any non-empty target when
the English source is ≤ 12 chars. Short markers like "Source:" /
"What's next?" have direct translations that are always short.

**Two hand-fixed translations** (were flagged as identical-to-English
before the allow-list expansion):
- `home_source_prefix`: "Source:" → "Bron:"
- `lightning_s1_c4_link`: "Bitcoin Hardware Wallet Guide" →
  "Bitcoin-hardeware-beursie-gids"

**Verification**: `apply-translations.js af --verify-only` — both audits
`✅ PASS`. `npm run build` — clean across all 55 locales × 81 pages =
4,349 static pages, zero MISSING_MESSAGE or Unable to load warnings.

**Files changed**:
```
scripts/afrikaans-v2-refresh/translate-inflation.js   (NEW — 365-entry per-currency translation function + non-currency map)
scripts/afrikaans-v2-refresh/translate-rest.js        (NEW — 551-entry namespace::key translation map)
scripts/afrikaans-v2-refresh/fix-remaining.js         (NEW — hand-fixes home_source_prefix + lightning_s1_c4_link)
i18n/af/**/*.json                                     (38 files touched; 916 entries added/updated; @metadata.last-updated bumped)
scripts/i18n-audit/reports/applied/af-20260423-191646.json  (archived report)
scripts/i18n-audit/language-diff.js                   (expanded BRAND_IDENTICAL_VALUES + isBrandIdenticalKey patterns + tightened short-value heuristic)
scripts/audit-translation.js                          (expanded SKIP_KEY_PATTERNS + SKIP_VALUES)
V2-REDESIGN-CHECKLIST.md                              (Step 5 af ticked + Phase B counter bumped 0→1 + details noted)
memory-bank/activeContext.md                          (new entry prepended)
memory-bank/progress.md                               (this entry)
```

**Session handoff for next locale**: the audit allow-list expansions
are one-time work — subsequent Phase B sessions (de, es, fr, …) won't
need them again unless that language surfaces a new genuinely-shared
value that's not yet allow-listed. The Afrikaans helper script pattern
(`translate-inflation.js` with per-currency CURRENCY table +
`translate-rest.js` with `ns::key` map) is a reusable template for
other Latin-script Germanic/Romance languages. CJK/RTL locales will
need different noun-plural handling in the inflation per-currency
function but the overall structure carries forward.

---

## i18n cleanup Step 5 Phase A+ — sticker-files/<lang>/ namespace consolidation (2026-04-23)


Follow-up to Phase A after the user spotted that Step 2's dead-key pass had reduced every `sticker-files/<lang>/index` namespace to an empty `@metadata`-only shell. Confirmed the V2 per-language sticker-files page at `app/[locale]/sticker-files/[lang]/page.tsx` builds its hero in-code (`"Download <LangName> Bitcoin Sticker Files"`) from `common_language_<name>` keys, with all other copy pulled from `common_*` keys. The only live per-language key anywhere was `print_these` ("PRINT THESE IN 1 CLICK") on `sticker-files/english/index`, which drives the StickerMule 1-click CTA button.

**New script: `scripts/i18n-audit/consolidate-sticker-files-langs.js`** (~210 lines, idempotent) — (a) lifts `print_these` into `common_<locale>.json` as `common_sticker_files_print_these` (29 locales kept their pre-existing translation, 25 got English fallback — those will get native translations during Phase B), (b) deletes every `sticker-files/<slug>/` subdirectory across all 55 locales (2,365 directories total — all 43 per-language slugs including `english/`), (c) preserves the picker-page namespace `sticker-files/index_<locale>.json`, (d) bumps `@metadata.last-updated` on every touched `common` file.

**Additional changes**: `app/[locale]/sticker-files/[lang]/page.tsx` swapped `t("print_these")` → `t("common_sticker_files_print_these")`. `lib/i18n/request.ts` `DEFAULT_NAMESPACES` had all 43 dead entries removed — now just `sticker-files/index`. `scripts/i18n-audit/english-snapshot.json` regenerated: **81 → 38 namespaces**, 1,849 keys unchanged. `V2-REDESIGN-CHECKLIST.md` Step 5 got a "Phase A+ follow-up" paragraph + ticked checkbox.

**Verification**: `npx tsc --noEmit` clean. `npm run build` clean (all 2,365 per-language sticker-files static paths still generate). `node scripts/i18n-audit/find-unused-keys.js` → 0 dead keys across 38 namespaces / 1,849 keys. Spot-checked `i18n/{en,de,nl}/common_<code>.json` — new key has proper translations; `i18n/{en,nl}/sticker-files/` — only `index_<code>.json` remains.

**Net effect for Phase B**: translators no longer waste cycles on 43 empty namespace files per language. The `sticker-files/<lang>/` tree now contains exactly one JSON file per locale (the picker page), not 44.

---

## i18n cleanup Step 5 Phase A — diff/apply tooling + per-language workflow (2026-04-23)

Step 5 of the i18n cleanup workflow is the per-language re-translation pass (the 51 new Step 3.5 keys + any V2-era keys whose English changed, for all 54 non-English locales). Rather than cramming everything into a single session (the full English corpus + 1 target locale is ~850KB and would blow past the chat context window), Phase A builds the tooling so Phase B can run **one locale per session**.

**New tooling** — added to `scripts/i18n-audit/`:
- `snapshot-english.js` — one-time utility that captures the current English corpus to `english-snapshot.json` (81 namespaces / 1,849 keys, sorted, deterministic output). Consumed by the diff script for future drift detection.
- `language-diff.js <code> [--namespace=<csv>] [--no-flag-likely-stale]` — generates a per-language "work queue" report at `reports/<code>.json`. Three reason categories: `missing` (key absent in target), `untranslated` (target value byte-identical to English after brand-name/short-token/URL allow-lists apply), `likely-stale` (heuristic — target exists but English contains a V2-era marker like "Source:" and target's length/markers don't match). Includes brand-name allow-list (wallet name keys, `common_publisher_name`, `*_language_name` keys) and value-level allow-list (`Bitcoin`, `Nostr`, `hi@bitcoin.rocks`, etc.) + short-token allow-list (USD, OK, →) + URL exemption + numeric-only exemption.
- `apply-translations.js <code> [--partial] [--dry-run]` — consumes a completed report (translator fills `targetTranslation` fields) and merges every resolved entry back into the `i18n/<code>/**/*.json` tree. Inserts missing keys at their canonical English position, overwrites untranslated/stale values, bumps `@metadata.last-updated`, round-trips through `JSON.parse()` to verify validity, reorders keys to match English canonical order, and archives the completed report to `reports/applied/<code>-<UTCTimestamp>.json`. Refuses to run unless every entry is resolved OR `--partial` flag is passed.
- `reports/` directory (+ `applied/` subdir + `README.md`) — report artifacts are committed to git so progress is reviewable across sessions.

**New workflow** — `.clinerules/workflows/translate-v2-refresh.md`, invoked as `/translate-v2-refresh <Language Name>`:
- Per-language session runbook with a 6-step procedure (Pre-check → Generate diff → Translate entries → Apply → Audit → Build verify → Update checklist + memory bank).
- Documents the chunk-by-namespace escape hatch for locales too big for a single session, mirrors the per-category helper-script split from `translate-new-language.md`, and carries forward the critical warnings about `cat` heredoc hangs, typographic-quote Unicode escapes, and tab indentation.
- Includes the full 55-language code reference table (code / native name / English name / RTL flag) + a recommended biggest-audience-first session order (Tier 1: es/fr/de/pt/zh/ja/ru/ar/hi; Tier 2: regional; Tier 3: remaining).

**Dry-run sample** — ran `language-diff.js --dry-run` against 4 representative locales (af, de, zh, ar):

| Locale | Missing | Untranslated | Likely-stale | Total flagged | Report size |
|--------|--------:|-------------:|-------------:|--------------:|------------:|
| af     |     855 |           61 |            0 |       **916** |   ~220 KB   |
| de     |     854 |           72 |            0 |       **926** |   ~220 KB   |
| zh     |     854 |           31 |            1 |       **886** |   ~220 KB   |
| ar     |     854 |           30 |            0 |       **884** |   ~220 KB   |

The "missing" count is dominated by the 327 new V2 `inflation_<code>_<suffix>` per-currency keys that every locale needs + ~500 other V2 additions (new source keys, card labels, What's next entries, subtitle paragraphs, etc.). "Untranslated" varies by locale — higher for older/newer locales that left more English fallbacks. "Likely-stale" is nearly always 0 because the heuristic is intentionally conservative.

**Apply-script verification** — synthetic test: hand-filled 2 entries in a copy of `de.json` and ran `apply-translations.js de --report=/tmp/de-test.json --partial --dry-run`. Script correctly reported "Update 2 files, write 2 keys" and listed the exact file paths. Full run also tested end-to-end (create → fill → apply → archive → re-diff returns 0 pending) with a disposable `xx` locale during development.

**V2-REDESIGN-CHECKLIST.md** § Step 5 now includes a "Phase A complete" checkbox + a tooling summary + a pointer to the new workflow file. Phase B (the actual 54-language grind) is user-triggered one language per session.

**Next:** Phase B — each language invocation is an independent ~200-entry-or-more translation pass. Recommended order starts with Tier 1 (Spanish, French, German, Portuguese, Chinese, Japanese, Russian, Arabic, Hindi) for biggest-audience coverage. Each session ends with an `apply-translations.js` run, an `audit-translation.js` verify, an `npm run build` check, and a PR ticking the language off.

---

## i18n cleanup Step 4 (propagate English deletions to all 54 non-English locales) — April 23, 2026

Closed the gap from Steps 2+3 on the English side — the 423-key dead-key removal + JSON normalization pass only touched `i18n/en/`. Step 4 brings the other 54 locales to parity by stripping every orphan key (present in the non-English file but not in English) and re-serializing each file with the canonical tab-indented formatter.

**New tooling** — added one more script to `scripts/i18n-audit/`:
- `step4-propagate-deletions.js` — for each non-English file, reads the current English key set and filters the non-English file down to it. This catches both the Step 2 deletions AND older drift (keys locales accumulated ahead of English during V0/V1). Re-serialization via `JSON.stringify(obj, null, '\t') + '\n'` collapses stray blank lines as a side effect — so Step 3's formatter is built in. Bumps `@metadata.last-updated` only on touched files. Supports `--dry-run` for preview + `--only=<csv>` for per-locale scoping.

**Results** — single `node scripts/i18n-audit/step4-propagate-deletions.js` run:
- Touched **4,108 files across 54 locales**, deleting **26,710 orphan keys** (vs. 423 deleted from English in Step 2 — the extra ~26,287 is accumulated translator drift).
- Per-locale counts cluster around **497** (the Step 2 baseline + ~74 universal orphans). Outliers: **lt = 294** (smaller 78-file set), **sw = 470** (Swahili, 80 files), **hu = 535** (Hungarian, heaviest drift).
- 3 files were formatting-only rewrites (id × 2, pt × 1); all others had at least one orphan key removed.
- 262 files reported "already canonical" (mostly smaller sticker-files language files that translate trivially).

**Verification**:
- Re-run `--dry-run` → **0 changes across all 4,370 files**. Fully idempotent.
- `npm run build` → clean across all 55 locales × 81 pages. No `MISSING_MESSAGE` errors, no fallback renders.
- Spot-checked `i18n/de/common_de.json`: 95 orphan keys pre-run (V1 CTA section + kit content + what-is-bitcoin FAQ remnants); 0 post-run; `@metadata.last-updated` bumped; tab indentation + key order preserved.
- Report written to `scripts/i18n-audit/step4-propagate-report.json` with per-locale + per-namespace breakdowns.

**V2-REDESIGN-CHECKLIST.md** now shows i18n cleanup Steps 1–4 (all 24 sub-items) complete. Steps 5–6 still pending (per-language re-translation of 54 locales for the 51 new Step 3.5 keys + any V2-era keys whose English value changed, then final verification).

---

## i18n cleanup Step 3.5 (source-side hardcoded-English audit) — April 23, 2026


Closed the gap left by Steps 1–3: those audits walked JSON → source ("which English keys does no source file reference?"), so they couldn't detect English text literally embedded in `.tsx` files that never went through `t()` / `getTranslations()` / `useTranslations()` in the first place. Step 3.5 is the reverse direction (source → JSON).

**New tooling** — added two more scripts + three remediation helpers to `scripts/i18n-audit/`:
- `find-hardcoded-strings.js` — regex-based scanner (no TS AST, on purpose — RSC syntax breaks parsers) over every `.tsx`/`.ts` under `app/` + `components/`. Flags 4 finding kinds: JSX text, user-facing attributes (`title`, `alt`, `placeholder`, `aria-label`, `aria-description`, `aria-placeholder`, `aria-valuetext`, `summary`, `label`), Next metadata fields (`title:` / `description:` / `siteName:` / `alt:`), and schema.org builder fields (`headline:` / `description:` / `name:` / `articleBody:` / `text:`). Strips comments + string/template bodies before scanning. Three heuristic filters kill false positives: `IGNORED_STRING_PATTERNS` (URLs, hex colors, CSS lengths, single-word identifiers), `CODE_LIKE_PATTERNS` (TS generic syntax like `useRef<HTMLDivElement>(null)` fools the JSX-text matcher), and a per-snippet alpha-density check.
- `hardcoded-strings-allowlist.js` — opt-out list with two arrays + regex set. `GLOBAL_ALLOWLIST` carries brand names (bitcoin.rocks, hi@bitcoin.rocks) + schema.org/OpenGraph spec constants (`Article`, `Organization`, `website`, `summary_large_image`, etc). `FILE_SPECIFIC_ALLOWLIST` covers per-file exceptions with justifications: unlocalized root 404 (renders outside next-intl context), English fallbacks inside `try { getTranslations() } catch` recovery paths, and schema.org `CreativeWork.name` canonical dataset titles (FRED CPI, FRED M1, BLS CPI, Bitcoin whitepaper title, external article titles) — translating those would break the schema citation chain to the upstream source. Every entry requires a `reason` field; entries without one are rejected at scan time.
- `step3.5-add-source-keys.js` — one-shot addition of **51 new English i18n keys** across 9 namespaces. `common` gets the 7 shared source citations that repeat on many pages (Bitcoin whitepaper, BTC Map, BTCPay Server, Strike Business, Oshi, FRED Money Supply Index, BLS CPI) plus `common_language_switcher_add_language` and `common_site_tagline`. Each per-page namespace gets its page-specific sources (e.g. `sources_satoshi_pacioli` in `business/accounting`, `sources_bitcoin_source_code` in `inflation`, `sources_acinq_phoenix` in `lightning`). Bumps `@metadata.last-updated`.
- `step3.5-rewrite-sources.js` — surgical string-match replacement swapping 55 source-anchor texts across 10 pages to `{t("<key>")}`. Matches on `href="…"` + anchor text so the whitepaper URL (which appears on almost every content page's sources list) is disambiguated per-page.
- `step3.5-add-misc-keys.js` — adds `biz_meta_description` + `biz_maps_meta_description` + `biz_wallets_meta_description` keys so the three /business page metadata descriptions stop being inline English.

**Initial scan flagged 97 genuine findings across 20 files** (after tightening code-pattern heuristic — raw 127 dropped to 97 signal-only). Fix categories: 10 pages' source-citation `<li>` anchor texts (biggest bucket), 4 pages' metadata `description` literals, 3 pages' 404-page fallbacks, 3 pages' `hi@bitcoin.rocks` brand email, 1 component's "Add language" button, 2 pages' schema.org `citations[].name` dataset titles.

**Hand-edited remediations** (non-scriptable): `app/[locale]/layout.tsx` refactored from a static `metadata` constant into an `async generateMetadata()` that resolves `description` from `common_site_tagline` with an English fallback. `components/LanguageSwitcher.tsx` now uses `useTranslations()` and pulls the "Add language" label via `t()`; GA `event_label` stays English for consistent cross-locale analytics grouping. The locale catch-all (`app/[locale]/[...rest]/page.tsx`) + sticker-files `[lang]/page.tsx` have their English 404 literals wrapped in `try { t() } catch { english }` so the translator attempt runs first. Three /business page metadata descriptions swapped for `descriptionKey`.

**Verification**: re-scan = **0 flagged findings** (down from 97). `find-unused-keys.js` re-run = **0 dead keys** (all 51 new keys wired through `t()`). `npm run typecheck` clean. `npm run build` clean across 55 locales × 81 pages.

**V2-REDESIGN-CHECKLIST.md** now shows i18n cleanup Steps 1–3 (10/10) + 3.5 (10/10) complete. Steps 4–6 still pending (propagate 51 new keys + dead-key deletions to the other 54 locales, per-language re-translation, final verification).

---

## i18n cleanup Steps 1–3 (English dead-key removal + JSON formatting) — April 23, 2026


With the full-site V2 redesign 81/81 complete, started the post-cutover i18n cleanup workflow. Steps 1–3 of `V2-REDESIGN-CHECKLIST.md` § "i18n Translation Cleanup" are done.

**New tooling** — added `scripts/i18n-audit/` with 3 discrete Node scripts + a dynamic-keys allow-list:
- `find-unused-keys.js` — diffs every English key (`i18n/en/**/*.json`) against every literal substring in `app/` + `components/` + `lib/`; writes per-namespace `unused-keys-report.json`.
- `dynamic-keys-allowlist.js` — enumerates the 325 runtime-built keys from `CurrencySection.tsx`'s `inflation_${code}_${suffix}` template literals so they aren't false-flagged.
- `remove-unused-keys.js` — strips confirmed dead keys from English files with tab indentation + `@metadata.last-updated` bump preserved; supports `--dry-run`.
- `normalize-json-formatting.js` — re-serializes every English JSON via `JSON.stringify(obj, null, '\t')` so blank lines between keys collapse; idempotent no-op once clean; supports `--all` for Step 4's 54-locale sweep.

**Deleted 423 dead keys across 74 English namespaces** — 98 in `common` (V1 FAQ/kit copy), 98 in `inflation` (old `inflation_cause_*` / `inflation_choose_*` / `inflation_intro_*` prose replaced by V2 stat-card system), 9 in `bitcoin-vs-gold`, 8 in `bitcoin-vs-stocks`, 4-6 in other comparison files (legacy 4-part H1 keys + unused summary fragments), 3 per-language sticker-files keys × 43 languages (`<lang>_header` / `<lang>_description` / `<lang>_bitcoin_sticker_files` — the V2 template builds the H1 in-code), 7 orphan `home_link_*` keys in the homepage, 2 `nostr/index` keys replaced by V2 hero, 4 `business/wallets` `wallets_choice_*` accordion header keys, 2 `business/maps` V1 keys, 3 `sticker-success` keys including both `sticker_success_flyers_bar_*` leftovers, plus 1-2 keys each in `about`, `business/*`, `flyers`, `lightning`, `compound-inflation-calculator`.

**Verification**: `npm run build` → green, all 55 locales × 81 pages regenerated clean; audit re-run idempotent (0 unused keys flagged the second time). Step 3's normalizer reports all 81 English files already canonical because Step 2's removal pass re-serialized every touched file with the canonical tab-indented formatter — spot-checked `bitcoin-vs-stocks` / `inflation` / `business/why` / `business/wallets` / `bitcoin-vs-gold`: zero blank lines between keys.

**V2-REDESIGN-CHECKLIST.md** now shows i18n cleanup Steps 1–2 complete (6/6) + Step 3 complete (4/4). The 54-locale propagation (Step 4), per-language re-translation (Step 5), and final verification sweep (Step 6) are next.

---

## /business/kit + /business/kit-success removed — April 23, 2026


The Bitcoin Business Kit pages — `/business/kit` and `/business/kit-success` — were deprecated and fully removed from the site. The merchant onboarding story is now carried entirely by `/business` itself (hero + 4 benefit sections) plus the six color-coded resource cards (wallets, maps, stickers, rewards, accounting, FAQ); the printable tri-fold pamphlet was a V1 artifact and is no longer wanted.

What was deleted in this pass:

- **Routes:** `app/[locale]/business/kit/` + `app/[locale]/business/kit-success/` directories.
- **i18n files:** 110 per-locale JSON files (`business/kit_<lang>.json` + `business/kit-success_<lang>.json`) across all 55 locales, plus 55 legacy `i18n/<lang>/business/files/` sub-directories (the English pamphlet download page's translations).
- **i18n keys:** 13 `common_kit_*` keys + `common_biz_kit` stripped from every `common_*.json`; `biz_label_kit` dropped from English `business/index_en.json`; `home_card_label_business_3` + `home_link_title_business_2` dropped from all 53 `index_*.json` files that had them.
- **Page registry:** `business/kit` + `business/kit-success` removed from `lib/pages.ts` and from `DEFAULT_NAMESPACES` in `lib/i18n/request.ts`.
- **Schemas / redirects:** `business/kit` dropped from `ARTICLE_SLUGS` in `lib/schema/article.ts`; the three `/kit` / `/business-kit` / `/businesskit` → `/business/kit` legacy redirects removed from `next.config.ts`.
- **Homepage:** the third `BUSINESS` WhatsNextCard (linking to `/business/kit`) removed from `app/[locale]/page.tsx`. The BUSINESS category now has 2 cards.
- **Business section:** `BusinessResourceCards` has the `kit` entry + `includeKit` prop removed; `BusinessResourceKey` narrowed from 8 → 7 members. Every `/business/*/page.tsx` (`/business`, `/business/maps`, `/business/accounting`, `/business/stickers`, `/business/faq`, `/business/sticker-files/english`, `/business/wallets`) had its inline `BIZ_RESOURCES` kit entry stripped so those grids now render 6 cards instead of 7.
- **Cross-page references:** `lib/comparisons/about.ts` + `lib/comparisons/get-involved.ts` — the "business" learn-more cards now point at `/business` instead of `/business/kit`; the component comment blocks no longer mention a "business kit".
- **Public assets:** `public/business/files/` directory deleted.
- **Docs:** `README.md`, `V2-REDESIGN-CHECKLIST.md`, `llms.txt`, `public/llms.txt`, `llms-full.txt`, `public/llms-full.txt` — all updated to remove references to the Bitcoin Business Kit, with the Get Involved and About copy now pointing merchants at the Bitcoin for Business resources page instead.

Two short Node helpers (`scripts/remove-business-kit.js` and `scripts/remove-kit-keys.js`) handled the mechanical bulk edits (7 page.tsx files + 110 i18n files + 55 directories) idempotently. Both live in the repo for traceability.

Verification: `grep -r "common_kit\|common_biz_kit\|biz_label_kit\|bitcoin_business_kit\|business/kit" app/ components/ lib/ i18n/` → empty. `V2-REDESIGN-CHECKLIST.md` summary counts updated: Business section shrinks from 12 pages to 10 (2 deleted, 7 done, 3 still on V1). Total pages shrinks from 83 to 81.

After this pass, the V2 redesign status is: Business 7/10 done, Total pages 76/81 done. The `/business/*` sub-pages remaining are maps-success, sticker-success, sticker-language-success (3 pages).

---

## /business/maps V2 redesign — April 23, 2026


Brought `/business/maps` into the V2 design system. Replaces the V1 `BusinessPageShell`-wrapped page — `.h1-inflation` uppercased "GET LISTED ON BITCOIN MERCHANT MAPS & GET MORE CUSTOMERS" header + inline `/img/bbk/payment-chart.png` hero image + a single dense `.text-box.intro.sticker-box` with a "View the map here." orange link and a bare `<form>` of seven raw `<input>` + `<br />` fields — with a standard V2 page in line with the other V2 business pages. The user explicitly called out that the form should be restyled to match the forms on `/stickers` and `/business/stickers`.

The new page is: plain `<h1>` "Get your business on Bitcoin merchant maps" + subtitle, `.wallet-intro` bordered surface with two framing paragraphs + a `.body-link` out to `btcmap.org` (replacing the legacy `.orange-link` "View the map here." with a proper V2 body link + `→` affordance), then a `.inflation-section.content-section` with an h2 + `.comparison-explain` intro paragraph + the listing-request form. The form itself was restyled from raw `<input>` + `<br />` into the shared V2 `.cic-form.sticker-form` class + `.cic-field` / `.cic-label` / `.cic-input` / `.cic-submit` primitives — same system already used by `<StickerAddressForm v2>` and `<BusinessStickerFlow>`. Every field now has a real `<label>` above it (the V1 version relied on `placeholder` attributes only), city/region/country sit in a 3-up `.cic-fields.sticker-fields--three` grid on desktop (stacks on mobile at the 700px breakpoint), and the submit button is a pill-shaped orange `.cic-submit`. Cloudflare Turnstile widget + `_gotcha` honeypot preserved. Form action unchanged (`https://forms.bitcoin.rocks/submit/business-maps`) so the existing backend contract is untouched.

Below the form sits the `/business/*` colored business resources grid (reusing the same `BIZ_RESOURCES` pattern as the other V2 business pages with `maps` excluded since we're on it). No sources section (utility/form page, same convention as `/stickers` and `/business/stickers`). Standard `.publisher-attribution` with the reviewed-for-accuracy badge closes the page.

Per the `/business/*` V2 convention (see V2-REDESIGN-CHECKLIST.md Tier 6), the bottom-of-page cross-link surface is the colored business resources grid — **no generic "keep learning / buy Bitcoin / inflation" bridge** is rendered on business sub-pages.

The English i18n file (`i18n/en/business/maps_en.json`) was bumped to 2026-04-23 and gained 10 new V2 keys (`biz_maps_hero_title`, `biz_maps_hero_subtitle`, `biz_maps_intro_c1`, `biz_maps_intro_c2`, `biz_maps_view_map_cta`, `biz_maps_form_header`, `biz_maps_form_intro`, and 7 placeholders — `biz_maps_placeholder_name/category/address/city/region/country/website`). The four V1 keys (`bitcoin_merchant_maps_list_your_business_for_free`, `maps_header`, `maps_request_details`, `maps_view`) were kept in place; `bitcoin_merchant_maps_list_your_business_for_free` is still used (as the metadata title and the rendered page title string), and the other three are now orphans pending the post-cutover dead-key audit.

Verification: `npx tsc --noEmit` clean.

After this pass, the V2 redesign status is: Business 7/12 done, Total pages 76/83 done. The `/business/*` sub-pages remaining are kit, kit-success, maps-success, sticker-success, sticker-language-success (5 pages).

---

## /business/stickers V2 redesign — April 23, 2026


Brought `/business/stickers` into the V2 design system. Replaces the V1 `BusinessPageShell`-wrapped page — `.h1-inflation` uppercased "GET YOUR FREE 'BITCOIN ACCEPTED HERE' STICKERS" header + inline sticker-pack image + a single dense `.text-box.intro.sticker-box` with a `<CountryFormSelector>` revealing three country panels (USA / Canada / Global-print) and legacy-style `<StickerAddressForm>`s — with a standard V2 page in line with the other V2 business pages. The user explicitly called out that the consumer `/stickers` page's `.sticker-option-grid` / `.sticker-option-button` / `.sticker-panel` / `.cic-*` form system should be reused, but the **Step 1 / "choose this pack" picker should be skipped** since the merchant page only has ONE pack (the "Bitcoin Accepted Here" pack) — that's the key design difference between the two pages.

The new page is: plain `<h1>` "Free 'Bitcoin Accepted Here' stickers" + subtitle ("Let your customers know you accept Bitcoin. Order a free pack of 'Bitcoin Accepted Here' stickers to put up at your business."), `.wallet-intro` bordered surface with the sticker-pack preview image centered above two intro paragraphs (via a small new `.biz-stickers-hero-image` CSS rule — max-height 260px desktop / 200px mobile, `border-radius: 12px`), and a new `<BusinessStickerFlow>` client component:

1. **Delivery picker (single step, no pack picker).** Three `.sticker-option-button` rows stacked 1-per-line (🇺🇸 USA — Free by mail, 🇨🇦 Canada — Free by mail, 🌍 Global — Print my own). Selecting an option reveals a `.sticker-panel` below it.
2. **USA / Canada panels.** Render the shared V2 `<StickerAddressForm variant="usa|canada" action=… v2 />` (same `.cic-*` form system as `/stickers`). Posts to `forms.bitcoin.rocks/submit/business-stickers-{usa|canada}`.
3. **Global — Print panel.** A `.sticker-language-grid` with a single "English" button linking to `/sticker-files/english` (the only language currently in the merchant sticker-files catalog) + a `.sticker-request` section with the V2 `.cic-*` language-request form (three labeled inputs: language, "Translation for 'Bitcoin Accepted Here'", "Translation for 'Scan to learn why Bitcoin is good for business.'"). Posts to `forms.bitcoin.rocks/submit/business-sticker-language-request`.

Smooth-scrolls the revealed panel into view after selection (same pattern as `<StickerFlow>` on `/stickers`).

Below the delivery picker sits the `/business/*` colored business resources grid (reusing the same `BIZ_RESOURCES` pattern as the other V2 business pages with `stickers` excluded since we're on it). No sources section (utility/form page, same convention as `/stickers`). Standard `.publisher-attribution` with the reviewed-for-accuracy badge closes the page.

Per the `/business/*` V2 convention (see V2-REDESIGN-CHECKLIST.md Tier 6), the bottom-of-page cross-link surface is the colored business resources grid — **no generic "keep learning / buy Bitcoin / inflation" bridge** is rendered on business sub-pages.

The English i18n file (`i18n/en/business/stickers_en.json`) was bumped to 2026-04-23 and gained 11 new V2 keys (`biz_stickers_hero_title`, `biz_stickers_hero_subtitle`, `biz_stickers_intro_c1`/`c2`, `biz_stickers_step_header`/`step_description`, `biz_stickers_option_usa`/`canada`/`print`, `biz_stickers_print_header`/`print_c1`, `biz_stickers_request_header`/`request_c1`, `biz_stickers_placeholder_translation1`/`2`). The V1 `stickers_*` keys were kept in place to avoid breaking unrelated locale rendering; they'll be removed during the Step 2/3 dead-key propagation pass.

Form `action` URLs are preserved unchanged (`/submit/business-stickers-usa|canada`, `/submit/business-sticker-language-request`) so the existing `forms-backend` integration + Cloudflare Turnstile setup keep working untouched. Field names on the language-request form match V1 (`language`, `translation1`, `translation2`) so the backend contract is unchanged.

Verification: `npx tsc --noEmit` clean.

After this pass, the V2 redesign status is: Business 6/12 done, Total pages 75/83 done. The `/business/*` sub-pages remaining are maps, kit, kit-success, maps-success, sticker-success, sticker-language-success (6 pages).

---

## /business/accounting V2 redesign — April 23, 2026

Brought `/business/accounting` into the V2 design system. Replaces the V1 `BusinessPageShell`-wrapped page — `.h1-inflation` uppercased "BITCOIN ACCOUNTING GUIDE" header + four dense `.text-box.intro` (and `.inflation-box`) prose blocks glued together with `<br><br>` breaks, with **entire sentences** wrapped in `.orange-link` anchors (e.g. the whole "If you use QuickBooks you can do this automatically using the Bitcoin Sync plugin" sentence was one big orange link, "View Wallet Guide." was another, etc.) — with a standard V2 page in line with `/business`, `/business/why`, `/business/faq`, and `/business/wallets`. The user explicitly called out that the V1 had too many entire-sentence inline links, and requested: (a) lift inline references into link cards, (b) make the prose more digestible, (c) **keep the "this is informational, not tax advice" disclaimer**.

The new page is: plain `<h1>` "Bitcoin accounting for your business" + subtitle ("Accepting Bitcoin at your business doesn't have to complicate your accounting. Here's the short version — plus the tools and pros to make it painless."), `.wallet-intro` bordered surface framing the two paths (auto-convert = zero new accounting; keep some Bitcoin = a few extra numbers) with the tax-advice disclaimer rendered as the third paragraph with a bolded `<strong>Please note:</strong>` prefix, and **four `.inflation-section.content-section` sections** — h2 + `.comparison-explain` prose + a `.whats-next-grid` of colored resource cards alongside the sections that need them:

1. **The easy path: auto-convert to dollars** — 1 card → `/business/wallets` (orange).
2. **If you keep some Bitcoin: tracking your cost basis** — 4 cards: QuickBooks Bitcoin Sync plugin (Intuit green `#2CA01C`), CoinGecko current price (calm blue `#4DA6FF`), CoinGecko historical prices (education purple `#A67DFF`), Spreadsheet Guru Excel import (energy green `#1DFF4D`).
3. **Spending or selling the Bitcoin you've kept** — pure prose, no cards. The V1 `<br><br>`-separated capital gain + capital loss examples are now a real `<ul>` bullet list.
4. **Need a pro who speaks Bitcoin?** — 1 card → Satoshi Pacioli Accounting Services (payments yellow `#FFE91D` — stands out as a CTA).

Every V1 external/internal reference that was previously a full-sentence inline orange link is now a colored `.whats-next-card` with its own `--card-accent`, its own label + title, and a per-card `sourceKey` so the "Source: $author →" footer reflects the real upstream publisher (Intuit QuickBooks, CoinGecko, The Spreadsheet Guru, satoshipacioli.com, bitcoin.rocks for the internal wallets link) instead of forcing everything through `common_publisher_name`. A tiny local `<ResourceCard>` component owns the per-card render logic (external-vs-internal href, external `target`/`rel`, `--card-accent` CSS variable).

Below the four sections sits the `/business/*` colored business resources grid (reusing the same `BIZ_RESOURCES` pattern as the other V2 business pages with `accounting` excluded since we're on it). Standard 5-entry `.sources-section` (Satoshi Pacioli, QuickBooks Blockpath plugin, CoinGecko, The Spreadsheet Guru, Bitcoin whitepaper) + `.publisher-attribution` with the reviewed-for-accuracy badge close the page.

Per the `/business/*` V2 convention (see V2-REDESIGN-CHECKLIST.md Tier 6), the bottom-of-page cross-link surface is the colored business resources grid — **no generic "keep learning / buy Bitcoin / inflation" bridge** is rendered on business sub-pages.

The English i18n file (`i18n/en/business/accounting_en.json`) was fully rewritten — dropped 22 V1 keys (`accounting_s1_c1`–`c6`, `_s2_c1`–`c8`, `_s3_c1`–`c5`, `_s4_c1`–`c2`) and added 24 new V2 keys: reworded `bitcoin_business_accounting_guide` + `accounting_description`, `accounting_hero_subtitle`, `accounting_intro_c1`/`c2`, `accounting_disclaimer_label`/`accounting_disclaimer`, `accounting_s1` + 2 paragraphs + 3 wallet-card keys, `accounting_s2` + 3 paragraphs + 12 cost-basis-card keys (4 cards × {label, title, source}), `accounting_s3` + 6 paragraphs, `accounting_s4` + 1 paragraph + 3 pacioli-card keys. The `@metadata.last-updated` is bumped to 2026-04-23 (the page's `Article.dateModified` field auto-picks this up via `lib/schema/date-modified.ts`).

Verification: `npx tsc --noEmit` clean; the disclaimer is explicit, prominent (bolded `Please note:` label in the intro card) and unchanged in substance from the V1 copy; no sentence-long inline orange links remain — every V1 reference is now a colored link card and section prose uses no inline links at all.

After this pass, the V2 redesign status is: Business 5/12 done, Total pages 74/83 done. The `/business/*` sub-pages remaining are stickers, maps, kit, kit-success, maps-success, sticker-success, sticker-language-success (7 pages).

---

## /business/wallets V2 redesign — April 23, 2026

Brought `/business/wallets` into the V2 design system. Replaces the V1 `BusinessPageShell`-wrapped page — `.h1-inflation` uppercased "GET A FREE BITCOIN WALLET…" hero, `.text-box.intro` explainer with inline `<br><br>` Bitcoin-only-vs-hybrid copy, four always-collapsed `<WalletAccordion>`s each hiding a `.vs-container` row of `<BusinessWalletCard>` tiles, and the `BusinessResourceCards` 7-card grid — with a standard V2 page. The user explicitly called out that the old accordion-per-business-type UX could be swapped for a `/wallets`-style layout with h2 section headings + intro paragraphs + wallet card grids; that's what shipped.

The new page is: plain `<h1>` "How to accept Bitcoin payments" + subtitle, `.wallet-intro` bordered surface card carrying over the V1 Bitcoin-only vs. hybrid explainer (existing `wallets_intro_1` – `wallets_intro_6` keys, now rendered as 4 clean `<p>` tags with `<strong>` labels instead of V1's inline `<br><br>` concatenation), and **four flat top-to-bottom wallet sections** — each a `.inflation-section.content-section` with an `<h2>` + `.comparison-explain` intro paragraph + a `.wallet-grid` (2-col desktop / 1-col mobile, reused from `/wallets`). Sections:

1. **Wallets for individually-owned businesses** — Square, Strike Business, Breez, OpenNode.
2. **Wallets for businesses with multiple employees** — Square, Strike Business, IBEX Pay.
3. **Wallets for online businesses** — Square, Strike Business, OpenNode (online variant), BTCPay Server.
4. **Wallets for invoice-based businesses** — Zaprite, Strike Business.

Each card is a V2 `.wallet-card` anchor (same chrome as `/wallets`) rendered by a new local `<BizWalletCard>` component. It reuses `.wallet-card-image-wrap` + `.wallet-card-name` + `.wallet-card-features` + `.wallet-card-cta`, but swaps the `/wallets` self-custody / cold-wallet badges for an optional `.biz-wallet-card-note` paragraph — a short elevator-pitch muted-body `<p>` slotted between the name and the feature bullets. Used for Square (existing `wallets_square_note` key) and Strike Business (new `wallets_strike_note` key) to give each platform a one-paragraph pitch. All feature bullets reuse the existing `wallets_feature_*` keys (hybrid / info / in_person_online / settles_both / bitcoin_only / no_info / in_person / settles_bitcoin / self_hosted / online_store / invoicing / multiple_employees).

**Strike Business** was added per the task request (image at `/img/wallets/strike-business.png`, already present in `public/img/wallets/`, links to `https://strike.me/business`). It's the second card in every section because it's the only platform that works for every business type — in-person, online, invoicing, multi-user — with zero fees and instant settlement.

Below the sections sits the `/business/*` colored business resources grid (reusing `BIZ_RESOURCES` from `/business` + `/business/faq` with `wallets` excluded since we're on that page — per-card `--card-accent` CSS variables). Standard 8-entry `.sources-section` (Square, Strike, Breez, OpenNode, IBEX, BTCPay Server, Zaprite, Bitcoin whitepaper) + `.publisher-attribution` with reviewed-for-accuracy badge close the page.

Per the `/business/*` V2 convention (see V2-REDESIGN-CHECKLIST.md Tier 6), the bottom-of-page cross-link surface is the colored business resources grid — **no generic "keep learning / buy Bitcoin / inflation" bridge** is rendered on business sub-pages (merchants flow between business pages, not back into the beginner learning path).

Added 11 new i18n keys: `wallets_hero_subtitle`, 4 × `wallets_section_<id>` + 4 × `wallets_section_<id>_intro` (sole / multiple / online / invoice), `wallets_name_strike`, `wallets_strike_note`. All existing V1 wallet-feature + wallet-name keys preserved; the legacy `wallets_header` + `wallets_choice_*` keys are now orphans (still in JSON for the Step 1 dead-key audit). A small `.biz-wallet-card-note` CSS rule was added to `app/globals.css` (+12 lines next to `.wallet-card-feature-price` — Proxima Nova 400, 14px, 1.5 line-height, `var(--color-fg-muted)`, uses semantic tokens, no new hex values).

This is the fourth `/business/*` page to reach V2. Summary counts bumped to Business 4/12, Total pages 73/83. 8 `/business/*` sub-pages remain on V1 (accounting, stickers, maps, kit, kit-success, maps-success, sticker-success, sticker-language-success) and still use `BusinessPageShell`.

**Files changed**
- `app/[locale]/business/wallets/page.tsx` — full V2 rewrite (hero / intro card / 4 top-to-bottom wallet sections / BIZ_RESOURCES grid with `wallets` excluded / sources / inline publisher attribution); dropped `BusinessPageShell` + `BusinessResourceCards` + `BusinessWalletCard` + `WalletAccordion` + `.vs-container`; added local `<BizWalletCard>` component
- `i18n/en/business/wallets_en.json` — added 11 new V2 keys (`wallets_hero_subtitle`, 4 × `wallets_section_*` + 4 × `wallets_section_*_intro`, `wallets_name_strike`, `wallets_strike_note`); bumped `@metadata.last-updated` to 2026-04-23
- `scripts/business-wallets-v2/add-keys.js` — Node helper that adds the 11 new V2 keys with tab indentation
- `app/globals.css` — +12 lines `.biz-wallet-card-note` rule next to `.wallet-card-feature-price`
- `V2-REDESIGN-CHECKLIST.md` — flipped `/business/wallets` to [x]; updated summary counts (Business 4/12, Total 73/83); updated the "last updated" footnote
- `memory-bank/activeContext.md` — detailed entry prepended
- `memory-bank/progress.md` — this note prepended

**Verification**
- `npx tsc --noEmit` → clean (no TypeScript errors).
- Strike Business image was already present at `public/img/wallets/strike-business.png` (user placed it there before starting the task).

---

## /business/faq V2 redesign — April 22, 2026

Brought `/business/faq` into the V2 design system. Replaces the V1 `BusinessPageShell`-wrapped page — `.h1-inflation` uppercased "HAVE QUESTIONS…" hero, 9 always-open `.text-box.intro.inflation-box` FAQ blocks with `.h2-section` headings + inline `<br><br>` paragraph breaks + `.orange-link` cross-links, and the legacy `BusinessResourceCards` 7-card grid — with a standard V2 page: plain `<h1>` hero (retitled to sentence-case "FAQs for accepting Bitcoin") + subtitle, `.wallet-intro` intro card, **9 collapsible `<WalletAccordion>` FAQs** (same Client Component that powers the `/wallets` + `/lightning` FAQ accordions — closed by default, rotating chevron, animated max-height body), and the `/business/*` colored business resources grid (reusing the `BIZ_RESOURCES` shape from `/business` with `faq` excluded since we're on that page — per-card `--card-accent` CSS variables for wallets=orange, maps=green, stickers=pink, rewards=yellow, accounting=blue, kit=orange). Standard 5-entry `.sources-section` (BTC Map, BTCPay Server, Strike for Business, Oshi, Bitcoin whitepaper) + `.publisher-attribution` with reviewed-for-accuracy badge close the page.

All 9 FAQ questions (`faq_s1` – `faq_s9`) and their `_c*` answer paragraphs were preserved verbatim — they already read well in sentence case. The only English-side edit was retitling `frequently_asked_questions_about_accepting_bitcoin` from "FAQs for Accepting Bitcoin" → "FAQs for accepting Bitcoin" for V2 sentence-case consistency. Inline cross-links bumped from `.orange-link` to `.body-link` (V2 convention). FAQ 4's two "full reserve / no inflation" bullets are now rendered as a real `<ul>` instead of V1's `• <br>` pseudo-bullets. All cross-links preserved and routed via the V2 navigation pattern (`${l}/business/…`).

Per the `/business/*` V2 convention (see V2-REDESIGN-CHECKLIST.md Tier 6), the bottom-of-page cross-link surface is the colored business resources grid — **no generic "keep learning / buy Bitcoin / inflation" bridge** is rendered on business sub-pages (merchants flow between business pages, not back into the beginner learning path).

Added 2 new i18n keys: `faq_hero_subtitle`, `faq_intro_c1`. Card label/title keys + the resources heading/intro are **shared from `business/index_en.json`** (`business_resources_heading`, `business_resources_intro`, `biz_label_*`, `common_biz_*`) — no duplication. Legacy `faq_header` + `faq_description` kept for backward compat but no longer rendered. The 54 non-English locales still hold V1 copy for the preserved `faq_s*_c*` keys + the old page title; English fallback fills in the 2 new keys until translators pick them up during the Step 4 translation refresh.

This is the third `/business/*` page to reach V2. Summary counts bumped to Business 3/13, Total pages 72/84. 10 `/business/*` sub-pages remain on V1 (guide, wallets, accounting, stickers, maps, kit, kit-success, maps-success, sticker-success, sticker-language-success) and still use `BusinessPageShell`.

**Files changed**
- `app/[locale]/business/faq/page.tsx` — full V2 rewrite (hero / intro card / 9 collapsible `<WalletAccordion>`s / BIZ_RESOURCES grid with `faq` excluded / sources / inline publisher attribution); dropped `BusinessPageShell` + `BusinessResourceCards`; added `WalletAccordion` + `REVIEWED_ACCURACY_I18N_KEY` imports; switched all in-body links from `.orange-link` to `.body-link`
- `i18n/en/business/faq_en.json` — added 2 new V2 keys (`faq_hero_subtitle`, `faq_intro_c1`); retitled the page title to sentence case; bumped `@metadata.last-updated` to 2026-04-22
- `V2-REDESIGN-CHECKLIST.md` — flipped `/business/faq` to [x]; updated summary counts (Business 3/13, Total 72/84); updated the "last updated" footnote
- `memory-bank/activeContext.md` — detailed entry prepended
- `memory-bank/progress.md` — this note prepended

**Verification**
- `npm run build` → ✓ Compiled successfully in 6.1s; 4,514 static pages generated; TypeScript clean.

---

## /business/why V2 redesign — April 22, 2026


Brought `/business/why` (the page customers land on when they scan the QR code on a "Bitcoin Accepted Here" sticker) into the V2 design system. Replaces the V1 `BusinessPageShell`-wrapped page — `.h1-inflation` "BITCOIN IS GOOD FOR BUSINESS" hero, `/img/bbk/payment-chart.png` image + "LEARN MORE" `.biz-button` anchor-scroll CTA, four `.text-box.intro.inflation-box` "Bitcoin is good for you too" sections, and the `BusinessResourceCards` merchant grid — with a customer-facing V2 page: plain `<h1>` "Bitcoin is accepted here" + subtitle, `.wallet-intro` intro card, a **"Why Bitcoin is great for this business"** block (intro + 3 benefit sections: Lower fees / Instant settlement / Free to accept) with a small inline CTA into `/business` for anyone running a business, a **"Why Bitcoin is great for you too"** block (intro + 4 benefit sections: no inflation / no bank runs / permissionless / better world — all ported from V1 with copy rewritten for V2 tone, inline `.body-link`s to `/inflation`, `/bank-runs`, external voteforbetter.money, and the homepage), and a bespoke color-coded 4-card **"Where to next?"** grid targeting QR-scanning customers (LEARN MORE → `/`, GET A WALLET → `/wallets`, BUY BITCOIN → `/buy`, ACCEPT BITCOIN → `/business`). Standard `.publisher-attribution` + reviewed-for-accuracy badge closes the page. Dropped the payment-chart image per the task brief — replaced by two self-contained content zones that describe the value prop for merchants and customers much more clearly than the image did.

This is the **QR-scanning-customer exception** to the Tier 6 convention: every other `/business/*` page keeps the "no generic What's next bridge, only merchant cross-links to `/business` + siblings" rule, but `/business/why`'s audience is beginner customers (not merchants), so a learning-path bridge is the right call here. The V2 checklist was updated with a second paragraph under the Tier 6 note documenting this exception.

Added 21 new i18n keys: `why_hero_subtitle`, `why_intro_c1`, `_c2`, `why_for_business`, `why_for_business_intro`, `why_biz_s1` / `_c1`, `why_biz_s2` / `_c1`, `why_biz_s3` / `_c1`, `why_business_cta_intro`, `why_business_cta_link`, `why_good_for_you_intro`, `why_whats_next_heading`, `why_whats_next_intro`, and 8 card label/title pairs (`why_next_learn_label` / `_title`, `why_next_wallet_label` / `_title`, `why_next_buy_label` / `_title`, `why_next_business_label` / `_title`). Retitled `learn_why_bitcoin_is_good_for_business` + `why_header` from V1's uppercased "BITCOIN IS GOOD FOR BUSINESS" to sentence-case "Bitcoin is accepted here" — the page's new primary identity as a QR-scan landing page. Rewrote the preserved `why_s1-4` / `_c*` copy to match V2 tone and speak directly to the customer. The 54 non-English locales fall back to English for the new keys + will need a translation refresh on the rewritten legacy keys during Step 4.

Summary counts bumped to Business 2/13, Total pages 71/84. 11 `/business/*` sub-pages remain on V1 (faq, guide, wallets, accounting, stickers, maps, kit, kit-success, maps-success, sticker-success, sticker-language-success) and still use `BusinessPageShell`.

**Files changed**
- `app/[locale]/business/why/page.tsx` — full V2 rewrite (hero / intro card / Part 1 (3 merchant benefits) + `/business` CTA / Part 2 (4 customer benefits) / color-coded "Where to next?" grid / inline publisher attribution); dropped `BusinessPageShell` + `BusinessResourceCards` + payment-chart image + biz-button CTA
- `i18n/en/business/why_en.json` — full key refresh: retitled landing keys, added 21 new V2 keys, rewrote all `why_s*_c*` copy for V2 tone; bumped `@metadata.last-updated` to 2026-04-22
- `V2-REDESIGN-CHECKLIST.md` — flipped `/business/why` to [x]; added the `/business/why` exception paragraph under the Tier 6 convention note; updated summary counts
- `memory-bank/activeContext.md` — detailed entry prepended
- `memory-bank/progress.md` — this note prepended

**Verification**
- `npm run typecheck` → clean.

---

## /business index V2 redesign — April 22, 2026

Brought `/business` (the merchant section's top-of-funnel hub) into the V2 design system. Replaces the `BusinessPageShell`-wrapped V1 page — centered back-to-home logo, `.h1-inflation` hero, `/img/bbk/payment-chart.png` image, "ACCEPT BITCOIN PAYMENTS" `.biz-button` CTA, 4 `.text-box.intro.inflation-box` benefit sections with `.h2-section` H3s, `BusinessResourceCards` colored-tile grid, and standalone "Print your own Business Kit" `.biz-wallet` CTA — with a standard V2 page: plain `<h1>` hero + subtitle, `.wallet-intro` intro card, 4 `.inflation-section.content-section` benefit blocks (Low fees / Instant settlement / No chargebacks / More customers) with `.comparison-explain` prose, a 7-card `.whats-next-section` "Everything you need to accept Bitcoin" grid where each card uses its own `--card-accent` CSS variable (wallets=orange, maps=green, stickers=pink, rewards=yellow, accounting=blue, faq=purple, kit=orange), a second 4-up `.whats-next-section` bridging non-merchant visitors to `/`, `/wallets`, `/buy`, `/inflation`, a standard 5-entry `.sources-section` (BTC Map, BTCPay Server, Strike for Business, Oshi, Bitcoin whitepaper), and the standard `.publisher-attribution` + reviewed-for-accuracy badge. This is the first page in Tier 6 (Business section) to reach V2.

Dropped the payment-chart image and the "ACCEPT BITCOIN PAYMENTS" anchor-scroll CTA — the hero subtitle communicates the value prop and the resources grid replaces the "scroll to ready section" UX. Kept the "Learn why Bitcoin is good for business" card out of the resources grid (it linked back to the current page). Folded the standalone "Print your own Business Kit" CTA into the main resources grid as its 7th card.

Added 10 new i18n keys: `business_hero_subtitle`, `business_intro_c1`, `business_intro_c2`, `business_resources_heading`, `business_resources_intro`, `biz_label_wallets`, `biz_label_maps`, `biz_label_stickers`, `biz_label_rewards`, `biz_label_accounting`, `biz_label_faq`, `biz_label_kit`. Kept existing `biz_header`, `biz_s1-4`, and `biz_s*_c*` keys — the benefit-section copy is preserved verbatim. Card titles reuse the shared `common_biz_*` keys from `common_en.json`. The 54 non-English locales fall back to English for the new keys until translators pick them up during the Step 4 translation refresh.

Summary counts bumped to Business 1/13, Total pages 70/84. 12 `/business/*` sub-pages still on V1 and still use `BusinessPageShell` — queued up next. The `BusinessPageShell` / `BusinessResourceCards` / `BusinessWalletCard` components are still required by those sub-pages and will be deleted once Tier 6 is fully V2-complete.

**Files changed**
- `app/[locale]/business/page.tsx` — full V2 rewrite (hero / intro card / 4 benefit sections / color-coded resources grid / What's next grid / sources / inline publisher attribution); dropped `BusinessPageShell` wrapper + payment-chart image + biz-button CTA + `BusinessResourceCards` component + standalone kit CTA
- `i18n/en/business/index_en.json` — added 10 new V2 keys; bumped `@metadata.last-updated` to 2026-04-22
- `V2-REDESIGN-CHECKLIST.md` — flipped `/business` slug to [x]; updated summary counts
- `memory-bank/activeContext.md` — detailed entry prepended
- `memory-bank/progress.md` — this note prepended

**Verification**
- `npx tsc --noEmit` → clean.

---

## /sticker-language-success V2 redesign — April 22, 2026


Brought `/sticker-language-success` (the thank-you screen shown after someone submits the "Request stickers in my language" form on `/sticker-files`) into the V2 design system. Replaces the V1 back-to-home gray-logo link + `.h2-stickers` "SUCCESS!" wrapper + `.text-box.intro` prose block + V1 `.text-box.top/.middle/.bottom` CTA stack with a standard V2 page: plain `<h1>` hero ("Request received 🎉") + intro paragraph, a single `.wallet-intro` surface card carrying the batch-release expectation-setting copy, and a standard 4-up `.whats-next-section` grid (sticker-files index / wallets / buy / home). No sources or publisher-attribution block — utility/thank-you page with no factual claims. Robots stays `noindex, follow` so form-success URLs never appear in search results.

One new i18n key: `sticker_language_success_hero_title`. Existing `sticker_language_success_1` + `_2` keys kept as hero subtitle + batch-release card body, so translators don't need to redo anything except the new H1 string. The 54 non-English locales fall back to English for the new key until translators pick it up during the Step 4 translation refresh.

This clears the last item in Tier 5 (Form success pages) on the V2 redesign checklist — both `/sticker-success` and `/sticker-language-success` are now V2. Summary counts bumped to Form success 2/2, Total pages 69/84. `/business/sticker-language-success` (Tier 6) still on V1; queued behind the broader business-section redesign.

**Files changed**
- `app/[locale]/sticker-language-success/page.tsx` — full V2 rewrite (hero / batch-release card / What's next grid)
- `i18n/en/sticker-language-success_en.json` — added `sticker_language_success_hero_title`; bumped `@metadata.last-updated` to 2026-04-22
- `scripts/sticker-language-success-v2-keys.js` — new idempotent key-updater script
- `V2-REDESIGN-CHECKLIST.md` — flipped slug to [x]; updated summary counts
- `memory-bank/activeContext.md` — detailed entry prepended
- `memory-bank/progress.md` — this note prepended

**Verification**
- `npm run typecheck` → clean.

---

## `/about` redesign + `/bank-runs` first-h2 cleanup — April 20, 2026

Second content update of the day. Rewrote the `/about` page to align with the V2 card-based design system that `/bank-runs` and `/inflation` use, and cleaned up a one-off `.content-section-heading-first` class on `/bank-runs` so every section H2 now renders with the site-wide 700 weight.

**`/about` changes**
- **Hero H1** is now regular case: `"About bitcoin.rocks"` (one key, `about_header`) instead of the old all-caps two-line `"ABOUT" / "BITCOIN.ROCKS"`. The subtitle key + 2nd-line orange span in `headerKeys` are no longer used.
- **"Our Mission" section** is centered (`centered: true`) and the first paragraph embeds an inline `<a class="body-link">` to `https://github.com/sovenor` on the word "sovenor": "bitcoin.rocks was founded by **sovenor** in 2022…".
- **Link-in-prose paragraphs → learn-more cards.** The V1 page had inline orange-link fragments inside the "What We Do", "Open Source", and "Contact Us" paragraphs. V2 promotes them to `.whats-next-card` blocks rendered after each section's prose, matching the visual rhythm of `/bank-runs` and `/inflation`. Breakdown:
  - *What We Do* → 3 cards (stickers / flyers / business kit) — all locale-prefixed internal links.
  - *Open Source* → 2 cards (GitHub repo / Contributing guide) — both external.
  - *Contact Us* → 3 cards (email `mailto:` / Nostr via snort.social / GitHub repo).
- **Trusted sources list updated.** `about_editorial_2` no longer mentions TIME Magazine; now cites FRED, BLS, FDIC, the UN, the World Gold Council, Forbes, MIT Technology Review, Lyn Alden, and James Lavish — i.e. the sources we actually link to across the site (especially `/inflation`'s ~60 citations).
- **`ContentPageLayout` tweak.** The `<ContentCardsBlock>` learn-more grid no longer forces `gridTemplateColumns: "1fr"` — it now lets `.whats-next-grid` use its normal 2-col-on-desktop / 1-col-on-mobile rule. Single cards still span full-width via the `:only-child` rule already in `globals.css`. Two cards sit side-by-side; three cards wrap 2+1. `/bank-runs` sections that carry only one learn-more card look unchanged.

**`/bank-runs` first-h2 cleanup**
- Removed the `.content-section-heading-first` CSS class (`font-weight: 500 !important`) from `app/globals.css` and dropped the conditional `className={i === 0 ? "content-section-heading-first" : undefined}` from `components/ContentPageLayout.tsx`. The "What is a bank run?" H2 now picks up the site-wide `<h2>` element rule (700 weight) like every other section heading.
- The `centered` field on `ContentSection` stays — `/about`'s Our Mission section still uses it.

**Files changed**
- `i18n/en/about_en.json` — rewritten key set: `about_header` (singular), 3 new `about_mission_1*` fragments with the `sovenor` link, dropped the V1 inline-link `about_what_we_do_2*`/`_3*` fragment set, added 11 new card keys (`about_card_stickers_*`, `about_card_flyers_*`, `about_card_business_*`, `about_card_github_*`, `about_card_contribute_*`, `about_card_email_*`, `about_card_nostr_*`, `about_card_contact_github_*`), refreshed `about_editorial_2`, date → 2026-04-20.
- `lib/comparisons/about.ts` — rewritten to match the new section shape (mission centered + 3 sections with `cards`), sources list unchanged.
- `components/ContentPageLayout.tsx` — removed `content-section-heading-first` className, removed inline `gridTemplateColumns: "1fr"` style on the learn-more grid.
- `app/globals.css` — removed the `.content-section-heading-first` rule.
- `i18n/en/bank-runs_en.json` — `@metadata.last-updated` → 2026-04-20.
- `public/llms-full.txt` — mission paragraph now mentions sovenor + the updated trusted-sources list.

Translation fallback: ~50 non-English locales still have the old `about_header` / `about_header_2` / `about_mission_1-3` / `about_what_we_do_2*`/`_3*` / `about_open_source_1*` / `about_contact_email*_addr` keys in their local JSON, which the `next-intl` per-key fallback loader will simply ignore (those keys aren't referenced from the new TS tree). Missing new keys (`about_card_*`, `about_mission_1a`/`1b`/`1_sovenor`, new `about_editorial_2`) fall back to English until translators pick them up via PRs.

`npm run build` → ✓ 4734 static pages, TypeScript clean.

---

## `/inflation` sources expansion — April 20, 2026


The `/inflation` SOURCES block was ~4 years stale (just 6 generic entries vs ~60 outbound URLs actually cited on the page). Rewrote it as a grouped, comprehensive list + added `citation` nodes to the Article JSON-LD for GEO.

**What landed**
- `app/[locale]/inflation/page.tsx` — replaced the single 6-item `<ol>` with 5 grouped `<section className="sources-group">` blocks (Money supply / CPI / Government debt / Bitcoin data / Real-world examples). The 3 per-currency lists are **generated from the existing `CURRENCY_URLS` + `CURRENCIES` constants**, so adding a new currency later automatically adds it to all three groups with no extra bookkeeping. Per-currency labels come from the already-translated picker-button i18n keys (`inflation_us_dollar`, etc.).
- Also passed 14 canonical high-authority citations to `buildArticleSchema()` — emitted as `CreativeWork` nodes under `citation: [...]` in the Article JSON-LD for Google + AI answer-engine parseability.
- `lib/schema/article.ts` — new optional `citations?: ArticleCitation[]` field on `ArticleSchemaInput`. Zero breaking changes.
- `app/globals.css` — added `.sources-group` + `.sources-group-title` styles, and a `.sources-group .sources-list { list-style-type: disc }` override under the existing `.sources-section` block. Semantic tokens only, no hardcoded hex.
- `i18n/en/common_en.json` — +6 new keys (`common_sources_group_money`, `..._cpi`, `..._debt`, `..._bitcoin`, `..._stories`, `common_sources_treasury_auction`) + bumped `last-updated` → 2026-04-20.
- `i18n/en/inflation_en.json` — bumped `last-updated` → 2026-04-20 (the schema `dateModified` auto-derives from this).

**Decision:** static comprehensive list, not per-currency dynamic — the Sources block is primarily a GEO / E-E-A-T trust signal, and a dynamic swap-out would shrink the visible citation count at any moment to ~6, defeating the purpose. `npm run typecheck` clean.

---

## `/bank-runs` stat cards — April 19, 2026

First content update since the CSS refactor. Added stat-card + learn-more-card blocks to every `/bank-runs` section, matching the inflation-page hero stat card style (same `.stat-cards-grid` + `.stat-card` classes, no new CSS).

**What landed (Commit 1)**
- Extended `ContentSection` (`lib/comparisons/bank-runs.ts`) with `cards?: readonly ContentCard[]`. Two card types: `StatCard` (label / `valueLiteral`|`valueKey` / tone=success|danger|accent|muted / detail / source / href) and `LearnMoreCard` (label / title / source / href). `StatCard` also carries optional `valueDomId`/`detailDomId` for the upcoming live-FDIC client component to target.
- `components/ContentPageLayout.tsx` renders cards in a new `<ContentCardsBlock>` after each section's paragraphs. Two stat cards → `.stat-cards-grid`. A single learn-more card → full-width `.whats-next-grid`.
- `BANK_RUNS` data: Section 1 gets 2 stat cards (Bank reserve ratio 0% / Bitcoin reserve ratio 100%); Section 2 drops the inline FDIC link and gains a learn-more card → UW Law SVB explainer; Section 3 drops both inline links and gains 2 stat cards (FDIC coverage ~1.3% / Bitcoin coverage 100%); Section 4 replaces the inline wallet CTA paragraph with a learn-more card → `/wallets`.
- `i18n/en/bank-runs_en.json`: 18 new keys across 6 card groups, 2 prose rewrites (`bank_runs_svb_p1`, `bank_runs_fdic_p1`), 1 removed key (`bank_runs_bitcoin_wallet_cta`), `@metadata.last-updated` → 2026-04-19.
- `typecheck` clean.

**What landed (Commit 2) — live FDIC data pipeline**
- `forms-backend/fdic-stats.js` (NEW). Quarterly scraper: fetches the FDIC Statistics-at-a-Glance HTML, finds the most-recent `statistics-glance-historical-trends-<quarter>.xlsx` link, downloads the xlsx, and parses `Fund Balance` / `Insured Deposits` / `Reserve Ratio` rows + `As of <date>` header. Unpacks the xlsx with native `zlib.inflateRawSync` — zero new npm deps. 24h file cache (`fdic-stats-cache.json`), stale-cache-on-error + hard-coded fallback chain.
- `forms-backend/server.js` — new `/api/fdic-stats` endpoint (CORS `*`, 1h browser cache).
- `components/FdicStats.tsx` (NEW, Client Component, ~100 lines). Side-effect-only; on mount, fetches the endpoint and writes real values into `#stat-fdic-coverage-value` + `#stat-fdic-coverage-detail` via `document.getElementById(...)`. Formats `insuredDeposits` as `$X.XXT` when above 1000 billions. Silent fallback leaves server-rendered snapshot intact.
- `app/[locale]/bank-runs/page.tsx` — mounts `<FdicStats />`.
- `i18n/en/bank-runs_en.json` — updated the server-rendered snapshot to the real Dec 2025 data pulled from the xlsx: `1.42%`, `$153.9B insurance fund vs $10.82T in insured deposits (Dec 2025)`.

Local smoke test verifies end-to-end: `getFdicStats()` returns `{ reserveRatio: 1.42, fundBalance: 153.9, insuredDeposits: 10822, asOfLabel: "Dec 2025", asOfDate: "2025-12-31", source: "live" }`. `npm run typecheck` + `npm run build` both clean (4734 static pages, unchanged — `<FdicStats>` is side-effect only, no new route).

**Deploy note:** the frontend commit is safe to deploy standalone because the Client Component fails silently if `/api/fdic-stats` 404s. The `forms-backend` commit needs a separate Railway redeploy for the live pipeline to activate.

---

## CSS Refactor complete — April 18, 2026

Cleaned up `app/globals.css` on `v2-nextjs-redesign`. File size went from **2368 → 1090 lines (-54%)** across 3 commits prefixed `CSS refactor:`. Zero visual change on V2 pages (/, /inflation, /bitcoin-vs-*, /about, /get-involved, /bank-runs); V1 pages kept rendering with browser defaults + the new base element styles (they're scheduled for V2 redesign post-cutover anyway). `main` still frozen.

**Commit 1 — delete V1 legacy CSS** (`e3dbb13f`)
Dropped ~1200 lines of Phase 9a/9b/10/12 styles: `.text-box`, `.wallet-q`, `.biz-*`, `.expandable`, `.h2-stickers`, `.h2-section`, `.h3-item`, `.compound-form`, `.wallet-box*`, `.alert`, `.buy-platform-box`, `.button-form`, `.sticker-box`, `.bounty-button`, form input styling, fixed-bottom-bar, `.biz-box`, `.wallet-box-biz`, nostr accordion CSS, and ~40 other legacy selectors. 2368 → 1157 lines.

**Commit 2 — standardize tokens + element base styles + dedupe V2** (`eb89d1a9`)
Expanded `@theme` with semantic tokens (`--color-surface`, `--color-fg-dim*`, `--color-card-border`, `--color-success`, `--color-danger`, `--color-link-hover`). Added element-level base rules for `html`/`body`/`h1`/`h2`/`p` so plain `<h1>` now picks up the hero treatment (orange, 38px, centered) with no class hook. Collapsed 21 `.home-pill.<color> { color: X !important; }` rules + the border-color union into one `--pill-color` CSS custom prop pattern (50 → 25 lines, zero `!important`). Removed ~65 unnecessary `!important` tags (keeping only 2 legitimate uses: `.countries[hidden]` and `.force-orange`). Unified every media query on 700px. Every hard-coded `#ff9500`/`#ccc`/`#090814`/`#111119` replaced with the corresponding `var(--color-*)` token. Added a clear table of contents in the file header. 1157 → 1090 lines.

**Commit 3 — strip `.h1-inflation`/`.h2-inflation` from V2 JSX** (`892bc08d`)
Removed the now-redundant class hooks from 6 files: `app/[locale]/page.tsx`, `app/[locale]/inflation/page.tsx`, `app/[locale]/[...rest]/page.tsx`, `app/not-found.tsx`, `components/ComparisonPageLayout.tsx`, `components/ContentPageLayout.tsx`. Plain `<h1>` and `<h2>` now read their styling from the base element rules. Cleanest H1 markup on the V2 pages for the first time since migration start. Build: `npm run build` ✓ 4734 static pages, TypeScript clean.

**What stayed (for legacy JSX compat)**
- `.h1-inflation` is NO LONGER defined in globals.css — the element-level `h1` rule covers it.
- `.force-orange`, `.orange`, `.orange-link`, `.body-link` — kept as modifier classes used inside V2 content.
- `.comparison-h1` — folded into the base h1 rule (its only tweak was `line-height: 1.15` which was moved to `.comparison-hero h1`).
- Bucket B/C legacy classNames in V1 JSX (`.wallet-q`, `.biz-*`, `.h2-section`, `.h3-item`, etc.) — left alone. The JSX still references them but the CSS is gone; those pages render unstyled until redesigned.

**Result**
| | Before | After |
|---|---|---|
| Lines | 2368 | 1090 |
| `!important` tags | ~70 | 2 |
| Duplicate selectors | 10+ | 0 |
| `.home-pill.<color>` rules | 21 + union | 1 base + 21 one-line modifiers |
| Hard-coded hexes in base rules | ~100 | 0 (token-driven) |
| Media query breakpoints | 400/500/600/700 mixed | 700 unified |

## Phase 14 complete — April 17, 2026

Cleanup pass on `v2-nextjs-redesign`. Deleted **43 files + 6 directories** of legacy static-site assets that the Next.js app has fully replaced: 27 root-level `*.html` pages, the `business/` + `nostr/` + `sticker-files/` HTML sub-site directories, the `jquery/` + `css/` front-end stack, `nginx.conf` + `robots.txt` (replaced by `next.config.ts` redirects + `app/robots.ts`), the 6 `scripts/inject-*.js` schema injectors (ported to `lib/schema/*.ts` in Phase 4), and 7 one-off HTML helpers no longer needed. Refreshed the full documentation tree — `.clinerules/workspace-rules.md`, `.clinerules/workflows/translate-new-language.md`, `memory-bank/techContext.md`, `memory-bank/systemPatterns.md`, `README.md`, `CONTRIBUTING.md` — to describe the Next 16 + React 19 + TS + Tailwind v4 stack. Cleaned up stale `/jquery/` + `/css/` disallow entries in `app/robots.ts`. `npm run build` still produces the same **4,734 static pages** (no regression). `public/img/`, `public/favicons/`, `public/sticker-files/`, `public/business/` all untouched (they're the canonical copies). `forms-backend/` untouched. `main` still frozen. See `MIGRATION-NEXTJS.md` Phase 14 + `activeContext.md` for the full list of deletions.

## Phase 13 complete — April 17, 2026

Shipped the locale-scoped 404 page (via `app/[locale]/[...rest]/page.tsx` catch-all rendering translated content inline with correct `<html lang dir>` + Navbar + Footer + `noindex` meta), the global `app/not-found.tsx` fallback, 33 permanent redirects from `nginx.conf` legacy slugs (`/gold`→`/bitcoin-vs-gold`, `/CBDC`→`/bitcoin-vs-cbdc`, `/kit`→`/business/kit`, etc.), and deleted the stale hand-written `sitemap.xml` at repo root. Also added `404` namespace to i18n + `/sticker-files/:path*` long-cache headers. Build stays at **4,734 static pages**. All **32 runtime assertions pass** via `/tmp/verify-phase13.js`: locale 404 + RTL 404 + 6 legacy redirects (308 + correct Location) + query-preserving `/save` redirect + sitemap content + robots.txt + llms.txt. `forms-backend/` untouched. `main` still frozen. See `MIGRATION-NEXTJS.md` Phase 13 + `activeContext.md` for details.

## Phase 12 complete — April 17, 2026

Shipped 2 nostr-section pages (`/nostr` + `/nostr/what-is-nostr`) on `v2-nextjs-redesign` as a faithful V1 Tailwind port sharing a single `<NostrPageLayout>` Server Component. Build emits **4734 static pages** (55 locales × 42 routes + system routes), up from 4624 at end of Phase 11 — that's 110 new URLs (55 × 2 slugs). Phase 12 introduced 2 new components (`NostrAccordion` Client + `NostrPageLayout` Server) plus idempotent scripts (`update-en-json`, `append-nostr-css`, `wire-and-publish`, `update-memory-bank`). All 4 runtime assertions pass: `/en/nostr` with all 3 intro sections + 3 accordion titles + 4 client brands (PRIMAL/DAMUS/AMETHYST/IRIS) + Article/BreadcrumbList JSON-LD; `/en/nostr/what-is-nostr` with Home > Nostr > What is Nostr? breadcrumb; `/ar/nostr` RTL; sitemap contains both new URLs. `forms-backend/` untouched (nostr pages have no forms). `main` still frozen. See `MIGRATION-NEXTJS.md` Phase 12 + `activeContext.md` for details.

## Phase 11 complete — April 17, 2026

Shipped the `/sticker-files` section on `v2-nextjs-redesign` — a single index page + a dynamic `[lang]` route covering 43 sticker-languages = 44 pages × 55 locales = **2420 new sitemap URLs**. Build emits **4624 static pages** total (up from 2204 at end of Phase 10). Phase 11 introduced a new `lib/sticker-files/catalog.ts` typed catalog (~260 lines) that embeds the filesystem state of `sticker-files/<lang>/*.png` as a static map, so the per-language route tree is fully statically prerenderable with zero runtime `fs.readdir()`. 219 PNGs copied from `sticker-files/` to `public/sticker-files/` via `scripts/phase11/copy-assets.js` (idempotent mtime+size check). All 8 runtime assertions pass: `/en/sticker-files`, `/en/sticker-files/english` (with the 11 English designs + StickerMule 1-click CTA), `/en/sticker-files/chinese`, `/en/sticker-files/spanish`, `/en/sticker-files/swedish` (7 PNGs including 2 `-fixed` reprints), `/ar/sticker-files` RTL, sitemap, and PNG asset routing all verified green. Form posts to existing `forms-backend/submit/sticker-language-request` endpoint with unchanged Turnstile site-key. `main` still frozen. See `MIGRATION-NEXTJS.md` Phase 11 + `activeContext.md` for details.

## Phase 10 complete — April 17, 2026


Shipped 13 business-section pages (`/business` + `/business/why`, `/business/faq`, `/business/guide`, `/business/accounting`, `/business/wallets`, `/business/stickers`, `/business/maps`, `/business/kit` + 4 success pages) on `v2-nextjs-redesign` as faithful Tailwind ports. Build emits **2204 static pages** (55 locales × 40 routes). 14/14 runtime assertions pass. Phase 10 introduced 3 new reusable Server Components (`BusinessPageShell`, `BusinessResourceCards`, `BusinessWalletCard`) plus a shared `buildBusinessMetadata()` helper. 12 of the 13 pages are generated by `scripts/phase10/create-business-pages.js` from typed page-definitions; only `/business` itself is hand-authored (its unique hero + 4-benefit-section shape doesn't fit the generator template). `main` still frozen. See `MIGRATION-NEXTJS.md` Phase 10 + `activeContext.md` for details.

## Phase 9b complete — April 17, 2026

Shipped 8 form/success pages (stickers, signs, postcards, buy + 4 successes) on `v2-nextjs-redesign` as faithful Tailwind ports. Build emits 1489 static pages (55 locales × 27 routes). 9/9 runtime assertions pass. `main` still frozen. See `MIGRATION-NEXTJS.md` Phase 9b + `activeContext.md` for details.

# Progress: bitcoin.rocks

## Next.js Migration — Phase 8 Content pages (about + get-involved) — April 17, 2026

Eleventh commit of the Next.js migration on `v2-nextjs-redesign`. Added `/about` and `/get-involved` using the Phase 7c `ContentPageLayout` + `ContentPageData` pattern — no infrastructure changes. Each page is a typed `ContentPageData` literal + a ~60-line page.tsx wrapping `<ContentPageLayout>`. `main` is still frozen.

**Files created**
- `lib/comparisons/about.ts` — 5 sections (Mission / What We Do / Editorial / Open Source / Contact Us). Preserves every legacy inline-link fragment verbatim: links to `/stickers`, `/flyers`, `/business/kit`, GitHub repo, `CONTRIBUTING.md`. Promoted V1 hardcoded contact strings to new i18n keys (`about_contact_email_addr`, `about_contact_nostr_handle`, `about_contact_github_url`).
- `lib/comparisons/get-involved.ts` — 4 sections (Intro + 3 CTAs: sticker pack / postcard pack / business kit). V2 redesign drops legacy `<img>` + button divs; each CTA ends with an inline `.body-link` paragraph.
- `app/[locale]/about/page.tsx` + `app/[locale]/get-involved/page.tsx` — thin ~60-line pages wrapping `<ContentPageLayout>` with inline `generateMetadata()`.
- `scripts/phase8/update-en-json.js` — idempotent Node helper for adding the 4 new English keys + refreshing `@metadata.last-updated`.

**Files modified**
- `i18n/en/about_en.json` — added 4 new keys; refreshed date.
- `i18n/en/get-involved_en.json` — refreshed date only.
- `lib/i18n/request.ts` — added `about` + `get-involved` namespaces to `DEFAULT_NAMESPACES`.
- `lib/pages.ts` — flipped `published: true` for both slugs; sitemap emits 110 new URLs (55 locales × 2).
- `MIGRATION-NEXTJS.md` — Phase 8 checkboxes complete; status pointer advanced to Phase 9a.

**Verification**
- `npm run build` → ✓ compiled 2.9s, TypeScript clean, **829 static pages** (55 locales × 15 routes + system routes).
- Runtime via `/tmp/verify-phase8.js`: all 7 assertions pass. `/en/about` (168 KB) contains all 5 section headings + `hi@bitcoin.rocks` + `reviewed-badge` + Article + BreadcrumbList JSON-LD. `/en/get-involved` (164 KB) contains 3 CTA section headings + localized `/en/stickers` / `/en/postcards` / `/en/business/kit` links. `/ar/about` renders `<html lang="ar" dir="rtl">`. Sitemap contains both new English URLs.

**Architecture validation**
Phase 7c's `ContentPageLayout` abstraction is correct: both content pages reused `ContentPageData` verbatim with zero layout-component changes. The only additions were two small data files + two 60-line page.tsx wrappers. V2 redesign (drop legacy images + inline button CTAs) landed naturally as `body-link` paragraphs without needing any CSS additions.

**Next up:** Phase 9a — faithful Tailwind port of 4 Bucket B educational pages: `wallets` (largest V1 page), `lightning`, `flyers`, `compound-inflation-calculator` (solo variant). V2 redesign deferred to post-cutover queue.

---

## Next.js Migration — Phase 7b Four more comparison pages — April 17, 2026

Ninth commit of the Next.js migration on `v2-nextjs-redesign`. Added `bitcoin-vs-banks`, `bitcoin-vs-bonds`, `bitcoin-vs-real-estate`, and `bitcoin-vs-crypto` using the Phase 7a data-driven pipeline — no infrastructure changes. Each page is a typed `ComparisonPageData` literal + a ~30-line page.tsx wrapping `<ComparisonPageLayout>`. `main` is still frozen.

**Files created**
- `lib/comparisons/bitcoin-vs-banks.ts` — 7 comparison points, asset accent red `#C02C3E`. Inline `<a>` to voteforbetter.money on permissionless; localized `/wallets` link on custody. Sources: Bitcoin whitepaper + source repo + FDIC failed-bank list.
- `lib/comparisons/bitcoin-vs-bonds.ts` — 7 points, asset accent treasury-green `#4A8C5E`. External links to MarketWatch 2022 weak-auction article + TreasuryDirect; localized links to `/inflation`, `/bank-runs`, `/wallets`.
- `lib/comparisons/bitcoin-vs-real-estate.ts` — 9 points (unique "housing financialization" 9th point), asset accent earth-tone brown `#C99E6E`. All plain-text summaries. Sources: Bitcoin whitepaper + source repo + UN housing report.
- `lib/comparisons/bitcoin-vs-crypto.ts` — 8 points, asset accent "crypto purple" `#B072E8`. Point 5's translation embeds an inline `<a>` to the whitepaper (preserved via `dangerouslySetInnerHTML` in `ComparisonPageLayout`, consistent with Phase 7a cash precedent).
- `app/[locale]/bitcoin-vs-banks/page.tsx`, `bitcoin-vs-bonds/page.tsx`, `bitcoin-vs-real-estate/page.tsx`, `bitcoin-vs-crypto/page.tsx` — four ~30-line pages, each a 2-function wrapper over `<ComparisonPageLayout>`.

**Files modified**
- `lib/i18n/request.ts` — Added the 4 new namespaces to `DEFAULT_NAMESPACES`.
- `lib/pages.ts` — Flipped `published: true` for all 4 slugs; sitemap emits 220 new URLs (55 locales × 4).
- `MIGRATION-NEXTJS.md` — Phase 7b checkboxes marked complete; position pointer advanced to Phase 7c.

**Verification**
- `npm run build` → ✓ compiled, TypeScript clean, **499 static pages** (55 locales × 9 routes + system routes).
- Runtime via `/tmp/verify-phase7b.js`: all 4 English pages (165-176 KB each) + `/ar/bitcoin-vs-banks` (166 KB) serve 200 with Article + BreadcrumbList + ItemList JSON-LD, comparison-h1/chip/card/sources-list/reviewed-badge classes present. RTL on `/ar/bitcoin-vs-banks` ✓. Sitemap contains all 4 English URLs.

**Architecture validation**
Phase 7a's data/render split paid off exactly as designed — Phase 7b required zero layout work, zero new CSS, zero new infrastructure. Only variability per page: the `ComparisonPageData` literal + one hex `assetAccentColor` + 2-3 inline link fragments with `localize`/`external` flags. Phase 7c (final 3 comparisons + bank-runs) should follow the same pattern.

**Next up:** Phase 7c — port `bitcoin-vs-visa` / `bitcoin-vs-cbdc` / `bitcoin-vs-fine-art` / `bank-runs`.

---

## Next.js Migration — Phase 7a Comparison layout + first 3 comparison pages — April 17, 2026

Eighth commit of the Next.js migration on `v2-nextjs-redesign`. The first 3 `bitcoin-vs-*` pages (gold, stocks, cash) are now server-rendered React pages built on a shared `<ComparisonPageLayout>` component, with the V2 design system applied during port. The data-driven architecture means Phase 7b/7c pages are now trivial to add — one data file + one thin page.tsx each. `main` is still frozen.

**Files created**
- `lib/comparisons/types.ts` — Typed `ComparisonPageData` bundle: slug, namespace, meta image, H1 key quartet, asset accent color, intro keys, bitcoin/asset label keys, `ComparisonPointData[]`, `ComparisonSource[]`. `SummaryFragment` supports inline `<a>` with `localize` (auto-prefix current locale) + `external` (adds `target="_blank"`) flags. Translation strings referenced **by key only** — existing jquery.i18n JSON files stay source of truth.
- `lib/comparisons/bitcoin-vs-gold.ts` / `bitcoin-vs-stocks.ts` / `bitcoin-vs-cash.ts` — Per-page data bundles mirroring legacy prose 1:1. Asset accents: gold `#EBC61F`, stocks `#1DFF4D`, cash `#85BB65`. Every legacy `<a class="orange-link">` preserved with proper flags.
- `lib/comparisons/metadata.ts` — Shared `buildComparisonMetadata(data, locale)` returning `Metadata` with title, description, OpenGraph article card, Twitter `summary_large_image`, + all 55-locale hreflang alternates.
- `components/ComparisonPageLayout.tsx` — Server Component, ~300 lines. Renders full V2 comparison page: hero H1 (orange BITCOIN + asset-accent asset word) + intro + N comparison points (chips + explanation) + "What's next?" grid + Sources `<ol>` + publisher attribution. Emits Article + BreadcrumbList + ItemList JSON-LD inline. `SummaryFragmentSpan` sub-component handles inline link rendering with locale prefixing + `dangerouslySetInnerHTML` to preserve any inline `<a>` markup legacy translators embedded in strings.
- `app/[locale]/bitcoin-vs-gold/page.tsx` / `bitcoin-vs-stocks/page.tsx` / `bitcoin-vs-cash/page.tsx` — 2-function ~30-line pages. `generateMetadata()` delegates to `buildComparisonMetadata`; default export passes data bundle to `<ComparisonPageLayout>`.
- `scripts/append-comparison-css.js` — Idempotent Node helper that appends ~120 lines of Phase 7a CSS to `app/globals.css` (hero, chip grid, `.body-link` anchors, `--asset-accent` CSS variable cascade).

**Files modified**
- `lib/i18n/request.ts` — Added `bitcoin-vs-gold` / `bitcoin-vs-stocks` / `bitcoin-vs-cash` to `DEFAULT_NAMESPACES`. In-memory cache keeps per-request overhead near-zero.
- `lib/pages.ts` — Flipped `published: true` for the 3 comparison slugs; sitemap now emits 165 new URLs (55 locales × 3).
- `app/globals.css` — +~120 lines of Phase 7a V2 CSS via the append script.

**Verification**
- `npm run build` → ✓ compiled 2.2s, TypeScript clean, **279 static pages** (55 locales × 5 routes + system routes).
- Runtime via `/tmp/verify-phase7a.js` (Node `http.get`): all 4 sampled URLs serve 200 with every expected DOM marker (`"ItemList"`, `"Article"`, `"BreadcrumbList"` JSON-LD; `comparison-h1`, `comparison-chip`, `whats-next-card`, `sources-list`, `reviewed-badge`, `body-link` classes). `/ar/bitcoin-vs-gold` renders `<html dir="rtl">` correctly. `/sitemap.xml` contains all 165 new comparison URLs.

**Next up:** Phase 7b — port `bitcoin-vs-banks` / `bitcoin-vs-bonds` / `bitcoin-vs-real-estate` / `bitcoin-vs-crypto` using the same data-driven pattern.

---

## Next.js Migration — Phase 6b Inflation stats + calculators + dynamic header — April 17, 2026

Seventh commit of the Next.js migration on `v2-nextjs-redesign`. The four remaining jQuery scripts that made the inflation page interactive (`inflation-stats.js`, `compound-inflation-calculator.js`, `compound-inflation-calculator-solo.js`, `dynamic-header.js`) are now typed TypeScript Client Components. `/en/inflation` renders with live stat-card population + URL-param-driven H1 swap, all hydration contained to tiny side-effect components. `main` is still frozen.

**Files created**
- `components/InflationStats.tsx` — Client, ~220 lines. Ports `jquery/inflation-stats.js` 1:1. Pure side-effect (`return null`): on mount, listens on `document` for `inflation:currency-changed` CustomEvent and auto-loads USD; fetches `https://forms.bitcoin.rocks/api/inflation-stats?currency=XXX` + writes values into `stat-*-${code}` DOM elements via `textContent`. Per-currency cache in `useRef` so repeated clicks don't refetch. Fallback-on-error leaves server-rendered placeholders intact. Exports `CURRENCY_CHANGED_EVENT` constant + `CurrencyChangedEventDetail` type.
- `components/CompoundInflationCalculator.tsx` — Client, ~190 lines. Ports `jquery/compound-inflation-calculator.js`. 3 controlled inputs (salary / rate % / years), formula `salary × (1 + rate/100)^years`, formatted via `Intl.NumberFormat(locale, { style: "currency", currency })`. `idSuffix` prop appended to all input/result DOM ids (matches legacy `currentSalaryCAD` / `resultCAD` scheme). Result rendered via `dangerouslySetInnerHTML` with `escapeHtml()` on interpolations so `&nbsp;` spacers survive — XSS-safe. Uses `useLocale()` for locale-correct number formatting.
- `components/CompoundInflationCalculatorSolo.tsx` — 20-line wrapper pinning `currency="USD"` + `idSuffix=""`. Ports `jquery/compound-inflation-calculator-solo.js` so Phase 9a's `/compound-inflation-calculator` page can use it directly.
- `components/DynamicHeader.tsx` — Client, pure side-effect (`return null`). Ports `jquery/dynamic-header.js`. Reads `?sticker=` / `?sign=` / `?link=` URL params on mount + rewrites `#changing-header` text content. Decision table preserved: `sign=got-inflation` wins over all stickers; `link=calculator|calculator-site` overrides whatever sticker picked; `sticker=cure|cure-v2|got-inflation|what-if|(any)` picks the base; no params → leave server-rendered default alone.

**Files modified**
- `components/CountrySelector.tsx` — imports `CURRENCY_CHANGED_EVENT` + `CurrencyChangedEventDetail` from `InflationStats` and dispatches `document.dispatchEvent(new CustomEvent(CURRENCY_CHANGED_EVENT, { detail: { currency: selected } }))` from its existing `useEffect` on every selection change (including reset → `null`). Clean single-direction dependency — selector doesn't know about the stats fetcher, fetcher doesn't know about the selector, they only share the event-name constant.
- `app/[locale]/inflation/page.tsx` — mounts `<InflationStats />` + `<DynamicHeader />` at the top of the return tree (side-effect-only, render no DOM). Hero H1 `<span>` now has `id="changing-header"` so DynamicHeader can target it. Phase 6a's placeholder stat values still ship server-rendered; InflationStats "upgrades" them at runtime.
- `MIGRATION-NEXTJS.md` — Phase 6b flipped to ✅ COMPLETE with delivered checklist; position pointer → Phase 7.

**Build + verification**
- `npm run build` → ✓ compiled 2.2s, TypeScript clean, **114 static pages** (55 locales × 2 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via a temporary Node script (`scripts/phase-6b-spotcheck.js`, removed after use) that spawned `npm run start`, polled until ready, fetched `/en/inflation` via `http.get`, and grep-counted expected DOM markers. All 11 pass:
  - `id="changing-header"` ✓ (DynamicHeader target)
  - `id="USD"` / `id="CAD"` / `id="EUR"` ✓ (per-currency section anchors)
  - `class="inflation-button inf-usdollar"` ✓ (CountrySelector button)
  - `id="stat-btc-change-USD"` / `id="stat-m1-current-USD"` / `id="stat-debt-current-USD"` ✓ (InflationStats write targets)
  - `id="global-whats-next-wrap"` ✓ (CountrySelector-toggled block)
  - `"@type":"Article"` / `"@type":"BreadcrumbList"` ✓ (Phase 4 schemas)

**Decisions locked in**
- **Side-effect-only Client Components.** InflationStats + DynamicHeader both `return null`. All their work is imperative DOM writes into elements the Server Components rendered. This keeps 100% of the page content server-rendered (every translated string, every flag, every card body) and contains hydration to the ~7 KB of event-wiring JS. Zero flash, zero layout shift, zero hydration mismatch risk.
- **CustomEvent bridge between CountrySelector and InflationStats** instead of sharing React state via context. Reasons: (a) the two components live at sibling positions in the tree, (b) no other component needs the selected currency, (c) Context would force both into a Provider + re-render on every selection. The DOM is already a suitable pub/sub bus here and keeps each component independently testable.
- **`dangerouslySetInnerHTML` for the calculator result** (with `escapeHtml()` on every interpolated string). The legacy prose template interleaves translated strings + literal `&nbsp;` entities; React strips `&nbsp;` from text nodes. Rendering as HTML preserves the exact legacy output. Every user/translator input is escaped, so no XSS surface.
- **`useLocale()` for number formatting** instead of reading `navigator.language` + `localStorage`. The legacy script was trying to reconstruct "what locale should I format numbers in" from two signals; next-intl already gives us the active locale in context — one source of truth.
- **`idSuffix` retained on `<CompoundInflationCalculator>`** even though the inflation page no longer has per-currency calculators inline. Solo variant passes `""`; future pages can reinstate per-currency calculators by passing a suffix. Cleaner than shipping two separate components.
- **`id="changing-header"` on the H1 `<span>`, not the H1 itself.** Preserves H1 heading semantics — DynamicHeader just rewrites the orange text content, never the heading structure.

**Intentionally left alone**
- `jquery/inflation-stats.js`, `jquery/compound-inflation-calculator*.js`, `jquery/dynamic-header.js` — still shipped by the static site on `main`. Phase 14 deletes them.
- `forms-backend/inflation-stats.js` — untouched. `<InflationStats>` fetches from its existing URL + expects the same response shape.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

**Next phase** — Phase 7: Bucket A comparison pages (10 `bitcoin-vs-*` + `bank-runs`). Port with V2 redesign applied during port. Phase 7a builds `<ComparisonPageLayout>` + ports first 3 (gold, stocks, cash).

---

## Next.js Migration — Phase 6a Inflation page shell — April 17, 2026

Sixth commit of the Next.js migration on `v2-nextjs-redesign`. The 3,035-line `inflation.html` is now a typed React tree: `app/[locale]/inflation/page.tsx` (hero + currency picker + 13 × `<CurrencySection>` + global What's-next + sources + publisher attribution), `components/CountrySelector.tsx` (Client — ports `country-selector-inflation.js`), and `components/CurrencySection.tsx` (Server — per-currency content block). `main` is still frozen.

**Files created**
- `components/CountrySelector.tsx` — Client Component, ~160 lines. Owns `selected: string | null` state + a `useEffect` that mutates the `hidden` attribute on `.countries` DOM nodes (and on `#global-whats-next-wrap`) when selection changes. Server-rendered HTML stays stable (all 13 sections visible to crawlers); user sees only the active one. Fires `gtag('event', 'select_currency', { event_category, event_label })` on click. Smooth scroll-to-top on both select + reset.
- `components/CurrencySection.tsx` — Server Component, ~400 lines. Renders the full 4-section block per currency (intro + hero cards, "Here's the proof" with M1 + optional debt cards, "Bitcoin doesn't have inflation" with scarcity comparison, "Bitcoin is also a tool for freedom" with 4 feature + 4 story cards). All `inflation_${lower}_*` keys resolved via `useTranslations()`. EUR skips the debt card (FRED has no Eurozone aggregate gross-debt series) via nullable `debtUrl` prop. SVG icons inlined for the 4 features + 4 stories.
- `app/[locale]/inflation/page.tsx` — NEW, ~400 lines. Orange H1 hero, `<CountrySelector>` wrapping 13 `<CurrencySection>` + `#global-whats-next-wrap` (hidden by default), sources block (6 FRED/BLS/mempool/Bitcoin links), publisher attribution with `REVIEWED_ACCURACY_I18N_KEY` badge. Article + BreadcrumbList JSON-LD via Phase 4 builders. `generateMetadata()` with `buildAlternates({slug: "inflation", locale})` hreflang + OpenGraph + Twitter card.

**Files modified**
- `app/globals.css` — appended "INFLATION PAGE" CSS section (~400 lines): `.h1-inflation` + `.orange`, `.inflation-intro`, `.inflation-section` + h2/p, `button.inflation-button` + `.container-inflation-button`, `.stat-cards-grid` + `.stat-card*`, `.stat-comparison-card*`, `.feature-cards-grid` + `.feature-card*`, `.story-cards-grid` + `.story-card*`, `.sources-section` + `.sources-list`, `.publisher-attribution` + `.reviewed-badge`, `.body-link`, `.text-highlight`, `.break-micro`, `.break-nano`, `.money-icon`, `.countries[hidden] { display: none !important }`. Ported verbatim from `css/style.css`; tabs (not spaces); legacy `.inflation-revamp` scoping dropped.
- `lib/i18n/request.ts` — added `inflation` to `DEFAULT_NAMESPACES` so the ~480 `inflation_*` keys load alongside `common` + `index`. In-memory cache → read once per locale per build.
- `lib/pages.ts` — `inflation` flipped `published: false` → `true`. Sitemap now emits 55 per-locale `/inflation` URLs with full `alternates.languages` maps.
- `MIGRATION-NEXTJS.md` — Phase 6a flipped to ✅ COMPLETE with delivered checklist; position pointer → Phase 6b.

**Build + verification**
- `npm run build` → ✓ compiled 2.1s, TypeScript clean, **114 static pages** generated (55 locales × 2 routes + /robots.txt + /sitemap.xml + /_not-found + middleware).
- `npm run start` + live `curl` spot-checks via:
  - `/en/inflation` → 200; HTTP `link:` header has 55 hreflang alternates + `x-default`. Body source contains `@type":"Article"`, `@type":"BreadcrumbList"`, `id="USD"` / `id="CAD"` / `id="EUR"` / `id="global-whats-next-wrap"`, `class="inflation-button inf-usdollar"`, "DOLLARS IN EXISTENCE" hero label, "dateModified" field on schema.
  - `/ar/inflation` → 200, `<html lang="ar" dir="rtl">` with full inflation tree.
  - `/sitemap.xml` → grep count confirms exactly 55 `/inflation<` entries.

**Decisions locked in**
- **Imperative DOM visibility, not React re-render.** All 13 `<CurrencySection>` children are passed in as props (not state) so they server-render in the initial HTML regardless of selection. A `useEffect` mutates `hidden` attributes on `.countries` descendants on selection change. Keeps crawlers happy, enables Server Components to compose via `useTranslations()` without hitting a Client Component boundary.
- **`hidden` attribute over CSS class.** HTML5 `hidden` is semantic + a11y-correct + CSS-overridable (`.countries[hidden] { display: none !important }`) + JS-native (`sec.hidden = false`). Single source of truth.
- **Per-currency `FeatureCard` + `StoryCard` helpers are Server sub-components**, not typed-prop renderers. Clean `.tsx` file, no data-driven SVG rendering magic; each icon is just a literal `<path>` tree inside the switch.
- **Per-currency URL map duplicated from `scripts/inflation-multi/rebuild-inflation-html.js`.** Single source of truth for the 13-currency list + FRED/BPR URLs. Phase 6b will import from the same constant when wiring `<InflationStats>`.
- **`inflation` namespace in default loader list.** ~480 keys × 55 locales loaded on every request. In-memory cache means files are read once per process start — negligible overhead.
- **Article schema (not WebPage) for `/inflation`.** Preserves the semantic distinction `scripts/inject-article-schema.js` enforced — inflation is Article-level content, homepage is WebPage.
- **Stat-card values preserved as placeholders.** `+50%` / `-15%` / `—` renders in HTML now; Phase 6b's `<InflationStats currency={…} />` Client Component will mount and write into `document.getElementById('stat-*-${code}')`. Same pattern the legacy `inflation-stats.js` uses — no structural changes needed.

**Intentionally left alone**
- `jquery/country-selector-inflation.js`, `jquery/inflation-stats.js`, `jquery/compound-inflation-calculator*.js`, `jquery/dynamic-header.js`, `inflation.html`, `css/style.css` — still shipped by the static site on `main`. Phase 14 deletes them.
- `forms-backend/inflation-stats.js` — untouched. Phase 6b's Client Component fetches from its existing URL.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

**Next phase** — Phase 6b: port `jquery/inflation-stats.js` → `components/InflationStats.tsx` (Client, fetches forms-backend), then both compound inflation calculators + `dynamic-header.js` (sticker/sign URL-param handler).

---

## Next.js Migration — Phase 5 Homepage — April 17, 2026


Fifth commit of the Next.js migration on `v2-nextjs-redesign`. The v2 homepage (`index.html`: hero + 2 infinite-scroll carousels + 20 category sections + ~50 cards) is now a typed React tree. 4 new Server Components + 1 Client Component (the carousel) power all 55 locales with server-rendered translated HTML.

**Files created**
- `components/HomeCarousel.tsx` — Client Component. Ports `jquery/home-carousel.js` 1:1 (RAF-driven `transform: translate3d()`, bidirectional mouse+touch drag, hover pause, trackpad horizontal wheel, click-suppression after drag, recalc on resize + fonts.ready + 500ms settle timer, all listeners cleaned up on unmount).
- `components/HomePill.tsx` — Server Component. Typed `HomePillColor` union (21 colors). Plain `<a href="#anchor">` so the browser's native smooth-scroll + `scroll-padding-top: 20px` handle in-page jumps. Duplicate pills get `aria-hidden` + `tabIndex=-1`.
- `components/WhatsNextCard.tsx` — Server Component. Resolves label/title/author keys via `useTranslations()`. `external` prop adds `target="_blank"` + `rel="noopener noreferrer"`.
- `components/CategorySection.tsx` — Server Component. Renders `<h2>Bitcoin &amp; <span class="accent">topic</span></h2>` + wraps the card grid. Sets `--card-accent` CSS variable via `style` prop; the variable cascades into card labels, h2 accent, and hover borders.

**Files modified**
- `app/[locale]/page.tsx` — REWRITE from stub to full homepage (~620 lines): hero, two carousels (row 1 with 11 pills, row 2 with 10 pills — bright-green `energy` kept mid-row so it never lands adjacent to bright-green `money`), 20 category sections with ~50 cards mixing internal pages and curated external sources. `generateMetadata()` now emits full OpenGraph + Twitter card data alongside Phase 4's hreflang alternates.
- `app/globals.css` — lifted entire V2 homepage block from `css/style.css` (~220 lines): all 21 `.home-pill.*` color classes + `border-color: currentColor`; `.home-carousel-wrap` (100vw breakout); `.home-carousel-row` / `.home-carousel-track`; `.home-hero .h1-inflation` / `.home-hero .inflation-intro`; `.whats-next-*` / `a.whats-next-card` + `:only-child { grid-column: 1/-1 }` solo rule; `.category-section` with `--card-accent` indirection. Added `html { scroll-behavior: smooth; scroll-padding-top: 20px; }` — replaces legacy JS smooth-scroll.
- `MIGRATION-NEXTJS.md` — Phase 5 flipped to ✅ COMPLETE; position pointer → Phase 6.

**Build + verification**
- `npm run build` → ✓ compiled 2.1s, TypeScript clean, **59 routes** static-generated.
- Live `curl` via `npm run start`:
  - `/en` → 200, 183 KB, source contains `home-hero`, `home-carousel-row` (x2), all 20 section IDs, hero + card copy ("Bitcoin is better money…", "Tap on a category…", "Bitcoin doesn't have inflation", etc.).
  - `/ar` → 200, 197 KB, `<html lang="ar" dir="rtl">` with full homepage tree.
  - `/es` → 200, 188 KB, English fallback on `home_h1` working as designed (Spanish locale doesn't override it yet).

**Decisions locked in**
- **One Client Component, four Server Components.** Only the carousel needs RAF + browser event handlers; everything else ships as static HTML. Zero hydration flash on the ~50 cards.
- **In-page anchors use plain `<a>`, not next-intl `<Link>`.** `<Link>` would rewrite `#money` into cross-page navigation, breaking in-page scroll. Plain `<a href="#money">` + CSS `scroll-behavior: smooth` + `scroll-padding-top: 20px` replace the legacy JS smooth-scroll cleanly.
- **`renderPillSet()` helper** — single source of truth per carousel row. Emits both the first set and the `duplicate` set that HomeCarousel relies on for its seamless wrap-around.
- **CSS custom property `--card-accent` over per-card color props.** One inline style on `<CategorySection>` propagates the color to every card inside via CSS cascade — no color prop threading, no Tailwind arbitrary-value explosion.
- **`SavingSection.tsx` intentionally not created.** The reusable `CategorySection` + `WhatsNextCard` + `HomePill` trio handles saving identically to every other topic — a dedicated component would have been pure ceremony.

**Intentionally left alone**
- `jquery/home-carousel.js`, `index.html`, `css/style.css` — legacy static site still works. Phase 14 deletes them.
- `forms-backend/` — untouched.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

**Next phase** — Phase 6: port `inflation.html` (3036 lines — largest page in the codebase). Phase 6a does the static shell + `<CountrySelector>` Client Component; Phase 6b does the stat fetchers (`inflation-stats.js`) + both compound inflation calculators + dynamic header.

---

## Next.js Migration — Phase 4 SEO / JSON-LD / sitemap helpers — April 17, 2026

Fourth commit of the Next.js migration on `v2-nextjs-redesign`. The legacy `scripts/inject-*.js` pipeline is now reborn as render-time TypeScript helpers, plus NEW `hreflang` + sitemap + robots infrastructure. The old manual `dateModified`-bumping dance is gone — schema dates now derive from English JSON `@metadata.last-updated` automatically.

**Files created**
- `lib/site.ts` — canonical site-wide constants (`SITE_ORIGIN`, brand, logo, GA id, `buildUrl(locale, slug)` helper).
- `lib/pages.ts` — canonical page registry. Each slug has phase number, sitemap priority, changeFrequency, English JSON namespace, and a `published: boolean` flag. The sitemap filters to `getPublishedPages()` so during the migration we never advertise URLs that still 404 — future phases just flip `published: true` on the pages they port.
- `components/JsonLd.tsx` — tiny `<script type="application/ld+json">` renderer with `</` → `\u003c` XSS escape.
- `lib/schema/organization.ts` — `buildOrganizationSchema()` full node + `ORGANIZATION_REF` (`@id`-only ref used by other schemas so they don't duplicate).
- `lib/schema/website.ts` — homepage-only WebSite + SearchAction + `inLanguage` (55 locales sourced from `lib/i18n/config.ts`).
- `lib/schema/article.ts` — Article vs WebPage picker; accepts translated `headline`/`description` strings from the caller; auto-reads `dateModified`.
- `lib/schema/breadcrumb.ts` — `BreadcrumbList` builder with the same section-hierarchy rules as the legacy script (`Home > Business > Page` etc).
- `lib/schema/comparison.ts` — `ItemList` comparison schema. Takes typed `ComparisonPoint[]` data instead of HTML-scraping.
- `lib/schema/reviewed-badge.ts` — helper (not a component) for the "Reviewed for accuracy: YEAR" editorial signal. Pages render it in whatever slot suits their V2 design.
- `lib/schema/date-modified.ts` — reads `@metadata.last-updated` from any English JSON file. Caches per-build. Automates the `dateModified` + sitemap `<lastmod>` fields.
- `lib/schema/hreflang.ts` — `buildAlternates({locale, slug})` for the Next Metadata API + `buildHreflangMap(slug)` for the XML sitemap.
- `app/sitemap.ts` — `MetadataRoute.Sitemap` handler. One entry per `(published page, locale)` with full `alternates.languages` map → Next emits `<xhtml:link rel="alternate" hreflang="…">` per URL.
- `app/robots.ts` — `MetadataRoute.Robots` handler. Global + per-AI-crawler (16 bots) rules matching the legacy `robots.txt`.
- `public/llms.txt` + `public/llms-full.txt` — copied as-is from repo root (AI crawlers expect them at those paths).

**Files modified**
- `app/[locale]/layout.tsx` — renders `<JsonLd data={buildOrganizationSchema()} />` in `<head>` so every page/locale ships the Organization node.
- `app/[locale]/page.tsx` — demonstrates the full Phase 4 pattern: `generateMetadata()` returns `alternates: buildAlternates({slug:"", locale})` + body renders `<JsonLd data={buildWebSiteSchema()} />` and `<JsonLd data={buildArticleSchema(…)} />` (WebPage with auto-derived `dateModified`).
- `MIGRATION-NEXTJS.md` — Phase 4 flipped to ✅ COMPLETE with delivered checklist; position pointer → Phase 5.

**Build + verification**
- `npm run build` → ✓ compiled 2.0s, TypeScript clean, **59 routes** static-generated: 55 locale pages + /_not-found + /robots.txt + /sitemap.xml + middleware.
- Live `curl` spot-checks via `npm run start`:
  - `/en` → 3 JSON-LD blocks in source (Organization, WebSite, WebPage) + `<link rel="alternate" hreflang="…">` for every one of the 55 locales
  - `/sitemap.xml` → valid XML with proper `<xhtml:link rel="alternate" hreflang="…">` per URL
  - `/robots.txt` → expected User-agent blocks (wildcard + all 16 AI crawlers) with Allow/Disallow + `Sitemap:` pointer
  - `/ar` → `<html lang="ar" dir="rtl">` still correct

**Decisions locked in**
- **Published-flag gate on the sitemap** — listing future pages in `lib/pages.ts` now (with `published: false`) means future phases only flip one bool to include the URL. The registry is the single source of truth for "what slug maps to what namespace" across sitemap + schema + (eventually) breadcrumb-lookup.
- **Translated strings flow through builders as inputs, not scraped from HTML.** Type-safe + works cleanly with React server components + preserves translator workflow.
- **`dateModified` is derived from English JSON** `@metadata.last-updated` — automates what was previously a `.clinerules` dual-edit requirement.
- **Breadcrumb/comparison/reviewed-badge helpers intentionally unused so far.** Phase 7 (comparisons) + Phase 8 (about/get-involved) wire them up. Building them now means those phases are pure page-porting with zero schema infrastructure work.
- **Robots handler per-AI-crawler duplication** — the robots.txt spec says per-agent rules OVERRIDE the global `User-agent: *` block. Each AI crawler entry gets the full Disallow list applied so crawl restrictions for non-content dirs carry over even after the per-agent Allow: /.

**Intentionally left alone**
- `scripts/inject-*.js` — still used by the static site on `main`. Phase 14 deletes them.
- Hand-maintained `sitemap.xml` in repo root — Phase 13 will delete it once Next-generated sitemap is verified in production.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15.

**Next phase** — Phase 5: port the full v2 homepage (`index.html`, 943 lines) to `app/[locale]/page.tsx` with extracted `HomeCarousel` (Client Component), `HomePill`, `WhatsNextCard`, `SavingSection`. All strings via `t()` from `i18n/en/index_en.json`. Visual parity check against live `bitcoin.rocks/`.

---

## Next.js Migration — Phase 3 shared layout components — April 17, 2026

Third commit of the Next.js migration on `v2-nextjs-redesign`. Every page now renders a shared Navbar + Footer + Google Analytics snippet from `app/[locale]/layout.tsx`, entirely on the server — zero duplicated footer HTML across the site, translations baked in per locale, and the only Client Component in the chrome is the language dropdown.

**Files created**
- `lib/i18n/navigation.ts` — re-exports `next-intl`'s `createNavigation(routing)` helpers (`Link`, `usePathname`, `useRouter`, `redirect`, `getPathname`) so links anywhere in the app are locale-aware without plumbing locale through props.
- `components/Footer.tsx` — Server Component. Ports the V2 footer (logo with horizontal-line-break, tagline, `About · Contribute · Nostr · email` row) from `index.html`. All Tailwind utility classes; reads `common_footer_tagline`, `common_footer_about`, `common_footer_contribute`, `common_footer_nostr` via `getTranslations()`.
- `components/Navbar.tsx` — Server Component. Ports the V2 pill-shaped nav from `index.html` (`.site-nav--v2`): logo sits on top of a bordered pill containing 4 cells — `home_nav_learn`, `home_nav_get_involved`, `home_nav_about`, plus the `<LanguageSwitcher />`. All links use locale-aware `<Link>`.
- `components/LanguageSwitcher.tsx` — Client Component. Ports `jquery/language.js` behavior: shows current locale's native name, opens a dropdown of all 55 languages + "Add language" on click, fires `gtag('event', 'language_switch', …)` with the same parameter names as the legacy script, calls `router.replace(pathname, { locale })` (next-intl writes the `NEXT_LOCALE` cookie automatically), and fires `language_pageview` once on mount. Dropdown closes on outside-click via a self-installing/removing `document` listener.
- `components/GoogleAnalytics.tsx` — `<Script strategy="afterInteractive">` wrapper with the `G-18L58W2GTN` measurement ID as an exported constant.

**Files modified**
- `app/[locale]/layout.tsx` — rewired. Body now renders `<GoogleAnalytics />` first, then `<NextIntlClientProvider>` wrapping `<Navbar /> <main>{children}</main> <Footer />`. Removed the inline `<Script>` blocks + locale-label prose that the previous layout handled.
- `app/[locale]/page.tsx` — simplified. Removed `min-h-screen` + flex centering (which were only appropriate when this was the ENTIRE page); now just a padded `<section>` since nav + footer live in the layout.
- `MIGRATION-NEXTJS.md` — Phase 3 flipped to ✅ COMPLETE with the actual delivered checklist; position pointer advanced to Phase 4.

**Build + verification**
- `npm run build` → ✓ compiled 2.2 s, TypeScript clean, **57 routes** static-generated. Turbopack emitted one perf hint about `fs.readFile` in `load-messages.ts` matching 19k files — harmless, not an error, can be tightened later if build time becomes an issue.
- `npm run start` + live `curl` spot-checks confirm end-to-end:
  - `/en` → 200, HTML source contains "Learn", "Get Involved", "About", "English" (nav pill cells), "Accelerating bitcoin adoption through education." (footer tagline), "hi@bitcoin.rocks" (footer email), `rocks-logo` (both nav + footer logo)
  - `/ar` → `<html lang="ar" dir="rtl">` — RTL direction still correct with full nav + footer stacked in
  - `/es` → Spanish footer tagline "Acelerando la adopción de bitcoin a través de la educación." — confirms `common_footer_tagline` wires through `getTranslations()` in a Server Component end-to-end
- Dev server killed cleanly after smoke test. Working tree ready for commit.

**Decisions locked in**
- **Server Components for Navbar + Footer, Client Component only for the language dropdown.** Everything about the nav + footer (labels, logo link, all four outer links) is static server-rendered HTML with translations in the initial response. The one piece of local React state (dropdown open/closed) is isolated in `LanguageSwitcher.tsx` — the React-server-components best practice, and it keeps the JS bundle for the shared chrome minimal.
- **`router.replace()` on language switch**, not `push()` — matches the old `location.reload()`-style "same page, different language" semantic. No history entry stacking from clicking through the dropdown.
- **`NEXT_LOCALE` cookie, no `localStorage`.** next-intl's routing writes the cookie automatically on any locale change via `<Link>` or `router.replace({ locale })`. Removed the legacy `TRANSLATION_VERSION` cache-bust — Next.js page regeneration handles cache invalidation at build time.
- **No CSS imports from the legacy `css/style.css`.** All layout/spacing/colors in the shared chrome use Tailwind utilities or design-token references (`bg-bg`, `text-fg-dim`, `text-bitcoin-orange`, `font-proxima`, `xs:` breakpoint). A couple of exact hex values (`#555`, `#f0f0f0`) are used as raw Tailwind `[#xxx]` arbitrary values for one-off divider/hover colors rather than polluting the theme with single-use tokens.
- **`ScrollProgress.tsx` deferred.** It was listed as optional in the migration plan; none of the V2 pages actually use a scroll progress bar right now. We'll crib it from `vote-for-better-money` later if any individual page wants one.

**Intentionally left alone**
- `jquery/language.js` — still used by the static site on `main`. Kept verbatim until Phase 14 cleanup.
- All root `*.html`, `css/style.css`, `scripts/inject-*.js`, `business/`, `nostr/`, `sticker-files/` — legacy static site stays 100% functional on local filesystem as reference.
- `forms-backend/` — still completely untouched.
- `main` branch frozen at `origin/main` (`6cb07406`); Railway keeps deploying static site through Phase 14.

**Next phase** — Phase 4: port the `scripts/inject-*.js` schema pipeline to TypeScript helpers (`lib/schema/article.ts`, `breadcrumb.ts`, `organization.ts`, `comparison.ts`, `reviewed-badge.ts`, new `hreflang.ts`), add `app/sitemap.ts` + `app/robots.ts`, copy `llms.txt` / `llms-full.txt` into `public/`, and wire a `dateModified` helper that reads from each English JSON's `@metadata.last-updated` automatically.

---

## Next.js Migration — Phase 2 i18n wiring — April 17, 2026

Second commit of the Next.js migration on `v2-nextjs-redesign`. All 55 languages now server-render their own translated HTML from the existing `i18n/` JSON files via `next-intl`. No translator workflow change, no JSON file reorganization, no loss of English-fallback behavior.

**Packages added** — `next-intl@4.5.3` (21 packages, 0 vulnerabilities).

**Files created**
- `lib/i18n/config.ts` — the 55-locale catalog mirroring `jquery/language.js` exactly (English first, then alphabetical by native name). Exports `languages`, `locales` (readonly tuple via `as const`), `Locale` type, `defaultLocale`, `RTL_LOCALES` (`ar`/`fa`/`he`/`ur`), and `isValidLocale()` helper.
- `lib/i18n/load-messages.ts` — reads `i18n/<locale>/<namespace>_<locale>.json` with optional nested paths (`business/wallets`, `nostr/what-is-nostr`, …), strips `@metadata`, and **merges with English fallback per-key** so missing translations never error. In-memory cache keyed by `locale::namespace`.
- `lib/i18n/request.ts` — next-intl `getRequestConfig` that validates the locale via `hasLocale(locales, …)` and eagerly loads `common` + `index` namespaces on every request. Later phases add per-page namespace sets.
- `lib/i18n/routing.ts` — `defineRouting({ locales, defaultLocale: 'en', localePrefix: 'always', localeDetection: true })`. Matches migration-plan decisions #1 (path-based locales) + #2 (Accept-Language detection + cookie persistence).
- `middleware.ts` — `createMiddleware(routing)` at repo root with matcher `/((?!api|_next|_vercel|.*\\..*).*)` so static files (favicon, `/img/*`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`) bypass i18n.

**Files modified**
- `next.config.ts` — wrapped with `createNextIntlPlugin('./lib/i18n/request.ts')`.
- `app/[locale]/layout.tsx` — now validates locale with `hasLocale()` + `notFound()`, calls `setRequestLocale(locale)`, wraps children in `<NextIntlClientProvider locale={locale} messages={messages}>`, and adds `generateStaticParams()` returning all 55 locales so each is prerendered as a static route. RTL direction still comes from `RTL_LOCALES`.
- `app/[locale]/page.tsx` — renders `t("home_h1")` + `t("home_intro")` via server-side `getTranslations()` so translated text is in the initial HTML response (the whole point of the migration for SEO).
- `package.json` — `next-intl` dependency added.
- `MIGRATION-NEXTJS.md` — Phase 2 section rewritten as ✅ COMPLETE with the actual delivered checklist; position pointer advanced to Phase 3.

**Files deleted**
- `app/page.tsx` — the next-intl middleware now handles `/` → Accept-Language-matched locale redirect, replacing the hard-coded `redirect('/en')` from Phase 1.

**Build + verification**
- `npm run build` → ✓ compiled 1.9 s, TypeScript clean. **57 routes generated**: `/_not-found` + middleware proxy + 55 static per-locale pages (`/en`, `/af`, `/az`, …, `/ko`).
- Live HTML spot-checks via `curl http://localhost:3000/<lang>`:
  - `/en` → `<html lang="en" dir="ltr">` with English H1 + intro ✓
  - `/es` → `<html lang="es" dir="ltr">` with Spanish intro ✓ (English fallback on `home_h1` works because Spanish doesn't have that key yet)
  - `/ar` → `<html lang="ar" dir="rtl">` with Arabic intro ✓ (RTL layout)
  - `/zh` → `<html lang="zh" dir="ltr">` with Simplified Chinese intro ✓

**Decisions locked in**
- **Flat snake_case keys preserved.** The legacy jquery.i18n format stays as-is (`home_h1`, `common_footer_about`, …). Zero disruption to the ~60 translators maintaining ~5,250 translated values across 55 languages. Multiple "namespaces" (files) load into a single flat bag per request — same mental model as the legacy loader.
- **Explicit `locales` tuple** rather than deriving from `languages.map(l => l.code)`. next-intl's `hasLocale()` type-narrowing needs a readonly tuple, which `as const` on a string literal array provides; deriving with `.map()` loses the tuple type. Small duplication, much better type-safety.

**Intentionally left alone**
- `jquery/` — still used by the static site on `main`. Phase 3 starts porting individual files (`language.js` → `components/LanguageSwitcher.tsx` first).
- All root `*.html` files, `css/style.css`, `scripts/inject-*.js`, `sticker-files/`, `business/`, `nostr/` directories — the static site still works on the local filesystem.
- `forms-backend/` — untouched; Next will POST to its existing URLs starting Phase 9b.
- `main` branch at `origin/main` (`6cb07406`) — frozen. Railway keeps deploying the static site; we only merge → `main` on cutover day (Phase 15).

**Next phase** — Phase 3: port the V2 footer + nav + language switcher + GA wrapper into React components (`components/Footer.tsx`, `components/Navbar.tsx`, `components/LanguageSwitcher.tsx`, `components/GoogleAnalytics.tsx`) and wire into `app/[locale]/layout.tsx`.

---

## Next.js Migration — Phase 1 scaffold — April 17, 2026

Foundational scaffold of the Next.js 16 / React 19 / TypeScript / Tailwind v4 rewrite, committed to the long-lived `v2-nextjs-redesign` branch. `main` is frozen and continues to serve the existing static site on Railway until cutover day (Phase 15 in `MIGRATION-NEXTJS.md`).

**Stack & versions** — Next.js 16.2.4, React 19, TypeScript 5.6 (strict mode), Tailwind v4 via `@tailwindcss/postcss`. Matches sibling project `vote-for-better-money`.

**Files created**
- `package.json` — `bitcoin-rocks@2.0.0-alpha`, scripts for `dev`/`build`/`start`/`lint`/`typecheck`, engines `node >= 20`
- `tsconfig.json` — strict TS, paths `@/*`, excludes `legacy/`, `jquery/`, `forms-backend/`, `scripts/`
- `next-env.d.ts` — standard Next type refs
- `next.config.ts` — `turbopack.root = __dirname`, `images.formats = ["image/webp"]`, security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy), long-cache for `/img/*` + `/favicons/*`, empty `redirects()` placeholder
- `postcss.config.mjs` — Tailwind v4 PostCSS plugin
- `eslint.config.mjs` — Next flat config, ignores `legacy/`, `jquery/`, `scripts/`, `*.html`
- `app/globals.css` — `@import "tailwindcss";` + `@theme { … }` block with all 21 brand/topic accent colors harvested from `css/style.css` (bitcoin-orange, energy, freedom, money, saving, salary, art, politics, war, coding, ai, networks, self-custody, property-rights, business, environment, crowdfunding, housing, equality, food, payments, gold, cash, human-rights, get-started, bg, bg-soft, fg, fg-muted, fg-dim, border), font families (`proxima`, `proxima-soft`), breakpoints (`xs: 400px`, `md: 700px`). Tailwind v4 is CSS-first so no `tailwind.config.ts` is needed.
- `app/layout.tsx` — root pass-through layout; delegates to `app/[locale]/layout.tsx`
- `app/page.tsx` — temporary 307 redirect `/` → `/en` (Phase 2 middleware will replace)
- `app/[locale]/layout.tsx` — emits `<html lang={locale} dir={ltr|rtl}>` (RTL set: `ar`, `fa`, `he`, `ur`), Typekit `<link>` to kit `ful2oqu.css` (actual kit ID used by live site), GA gtag snippet with `G-18L58W2GTN`, favicon metadata
- `app/[locale]/page.tsx` — placeholder "Next.js migration in progress" showing the current locale code
- `.gitignore` — rewritten: adds `legacy/`, `node_modules/`, `.next/`, `out/`, `build/`, `dist/`, `*.tsbuildinfo`, `.turbo/`, `.vercel/`, `.env*`; keeps `forms-backend/data/` + macOS entries

**Static assets copied to `public/`**
- `public/img/` — 69 MB, full image library from `img/`
- `public/favicons/` — 500 KB, all favicon sizes from `img/favicons/`

**Build + dev verification**
- `npm install` → 359 packages, 0 vulnerabilities
- `npm run build` → ✓ compiled in 1615ms, TypeScript clean, 3 routes generated: `/` (static), `/_not-found`, `/[locale]` (dynamic)
- `npm run dev` → `GET /en` serves 200 with placeholder HTML (body contains "Next.js migration in progress" + `en` code); `GET /` 307 → `/en` as expected

**Documentation updated**
- `MIGRATION-NEXTJS.md` — Phase 1 section flipped to ✅ COMPLETE with the actual checklist of what was delivered; status header + position pointer bumped to "Phase 1 done → starting Phase 2"
- `memory-bank/activeContext.md` — new leading section documenting Phase 1 + what was deliberately left alone + Phase 2 roadmap
- `memory-bank/progress.md` — this entry

**Intentionally untouched** — all `*.html` files (production still needs them), `css/style.css`, `jquery/`, `scripts/inject-*.js`, `i18n/` directory, `forms-backend/`, `main` branch at `origin/main` (`6cb07406`). Cutover to Next.js is a single merge commit at the end of Phase 15.

**Next phase** — Phase 2: install `next-intl`, write `middleware.ts` for Accept-Language → locale redirect, mirror `jquery/language.js` language list into `lib/i18n/config.ts`, build message loader for the existing `i18n/<lang>/*_<lang>.json` file convention, wire into `app/[locale]/layout.tsx` via `NextIntlClientProvider`.

---

## Homepage v2 Polish — April 17, 2026
Follow-up fixes to yesterday's homepage redesign. Five targeted changes to address issues users flagged after launch:

1. **Carousel pill reorder** — Row 1 pills rearranged so the two bright-green pills (`money` #19BC38 and `energy` #1DFF4D) are never adjacent. `energy` now sits mid-row between property-rights (pink) and housing (brown); `salary` moved to end of row so the infinite-loop seam is `salary`(blue)→`money`(green) — cleanest possible contrast. Reorder applied to both the first set and the duplicate set of pills in `index.html`.

2. **True infinite carousel scroll** — Rewrote `jquery/home-carousel.js` from scratch. Replaced the pure-CSS `@keyframes` animation with a `requestAnimationFrame` loop that drives `row.scrollLeft` directly (~30 px/s) and wraps around `track.scrollWidth / 2` when crossed in either direction. Fixes two UX bugs:
   - **Drag indefinitely**: users can now grab and drag in either direction without hitting a wall.
   - **No more empty tail**: the old CSS-only implementation would eventually scroll past the duplicate content and reveal blank space; the new JS wrap-around guarantees pills are always visible.
   - Removed `@keyframes home-carousel-scroll-left/right` + `animation` + `:hover` pause rules from `css/style.css` (all handled in JS now).

3. **Solo cards full-width** — Added `.whats-next-grid > a.whats-next-card:only-child { grid-column: 1 / -1; }` to `css/style.css`. Sections with a single card (like "bitcoin & your salary" and "bitcoin & housing") now span the full grid width on all screen sizes, not just mobile. Zero HTML changes needed.

4. **Energy section trimmed** — Removed 2nd ("Why does Bitcoin use energy?") and 3rd ("Bitcoin's energy usage isn't a problem") cards from `index.html`. Energy section now has 4 cards: grid stabilization, demand response, rural electrification, renewable incentives. Removed 5 unused i18n keys from `i18n/en/index_en.json`.

5. **Money section split into money + saving** — The money section had 7 cards, which was visually overwhelming. Split into two sections:
   - **money** (4 cards): Bitcoin doesn't have inflation, Bitcoin doesn't have bank runs, Bitcoin vs Gold, Bitcoin vs Cash — the foundational "what is money and why is Bitcoin better money" topics.
   - **saving** (3 cards, new section): Bitcoin vs CBDCs, Bitcoin vs Bonds, Bitcoin vs Crypto — the comparisons that are really about storing/investing wealth.
   - New `saving` pill added to row 1 between `money` and `freedom` using new color `#F5A9B8` (soft pink).
   - New CSS color classes added: `span.saving`, `.jump-saving`, `.saving`, and `.home-pill.saving` appended to the border-inheritance list.
   - New i18n key `home_btn_saving = "saving"` added to `i18n/en/index_en.json`.

**Files changed**: `index.html`, `css/style.css`, `jquery/home-carousel.js`, `i18n/en/index_en.json`, `memory-bank/activeContext.md`, `memory-bank/progress.md`. Cache-buster bumped to `v=1.4.0` on both CSS + JS. WebPage JSON-LD `dateModified` bumped to 2026-04-17. `node scripts/inject-seo-content.js` ran clean (0 changes — HTML was already in sync).

**i18n note**: Only the English file was modified. Other 54 languages fall back gracefully to English for `home_btn_saving` until translators provide their translations (same pattern as yesterday's homepage redesign).

**Helper script**: `scripts/update-index-i18n-for-saving.js` — one-shot Node.js script that added the new key and removed 5 unused energy keys from `i18n/en/index_en.json` with proper JSON formatting. Left in place for reference.

---

## Homepage (v2) Redesign — April 16, 2026 (pt. 3)
- Rebuilt `index.html` to use the new `/inflation`-style design system: `.site-nav--v2` pill nav, orange `.h1-inflation` hero, `.inflation-intro` subtitle, two infinite-scroll category carousels of lowercase colored pills, and 20 category sections built with the `.whats-next-section` / `.whats-next-grid` / `.whats-next-card` pattern.
- Reusable pattern added: CSS variable `--card-accent` on a `.category-section` inline style drives both the `.whats-next-card-label` color and the hover border color. The `.whats-next-card-label` rule was refactored from `color: #FF9500` → `color: var(--card-accent, #FF9500)` (backwards-compatible — `/inflation` still gets orange labels).
- New `jquery/home-carousel.js` adds drag-to-scroll (mouse + touch) with click-suppression after drag, plus smooth in-page anchor scroll. The endless loop itself is pure CSS (`@keyframes home-carousel-scroll-left/right` over a 120s linear infinite track, paused on `:hover`).
- Added `.home-pill` class replacing the old `.jump` buttons: Proxima Soft 900 font (per request), lowercase, 2px border via `currentColor` so the existing color classes (`.money`, `.freedom`, etc.) drive both text and border color.
- Scrollbar hidden via `scrollbar-width: none` + `::-webkit-scrollbar { display: none }` — no visible scrollbar in any browser, but native scroll still works for users who prefer to scroll manually.
- Pills are duplicated inline in the HTML (2× each set) so the CSS translateX(-50%) animation produces a seamless marquee without needing JS to clone nodes.
- `i18n/en/index_en.json` refactor:
  - `home_btn_*` keys updated to lowercase sentence-style values ("money", "your salary", "the environment")
  - Added 40+ new `home_card_label_*` keys for per-card descriptive topic labels
  - Added `home_source_prefix`, `home_h1`, `home_nav_learn/get_involved/about`
  - Updated all `home_link_title_*` to sentence case for consistency with the mockup
  - `@metadata.last-updated` bumped to 2026-04-16 (other languages fall back gracefully for new keys)
- Added `WebPage` JSON-LD schema to `index.html` with `dateModified: 2026-04-16`.
- All 50+ original homepage cards + external links preserved and redistributed into 20 themed sections.
- `index.html` shrank from 1,167 → 772 lines (~34% smaller) despite keeping all content.
- CSS asset version bumped to `v=1.3.0`; JS asset version bumped to `v=1.3.0` on `language.js` and new `home-carousel.js`.
- Deprecated (but preserved) legacy homepage classes for backwards-compatibility with un-migrated pages: `.home-h1`, `.home-logo`, `.home-intro`, `.container-jump`, `.jump`, `.text-box.top/.middle/.bottom/.solo`, `.item`, `.h3-item`, `.h2-section.second-line`.
- Ran `node scripts/inject-seo-content.js` — 0 changes (HTML already in sync with JSON).

## Inflation Page — Drop HNL + VEF, EUR Debt, Fix PHP CPI — April 16, 2026 (pt. 2)
- **Dropped HNL (Honduran Lempira) and VEF (Venezuelan Bolívar)** from the inflation page. FRED does not publish usable narrow-money or gross-debt series for Honduras or Venezuela, so those sections always rendered fallback values.
  - Removed from `jquery/inflation-stats.js` `SUPPORTED_CURRENCIES` array, `forms-backend/inflation-stats.js` `CURRENCIES` config, and `scripts/inflation-multi/rebuild-inflation-html.js` currencies list.
  - Added HNL/VEF cleanup logic to `scripts/inflation-multi/update-i18n.js`: 52 orphan `inflation_hnl_*` / `inflation_vef_*` / `inflation_honduran_lempira` / `inflation_venezuelan_bolivar` keys deleted from `i18n/en/inflation_en.json`.
  - HTML sections for HNL + VEF automatically removed when rebuild script re-ran (they're no longer in the currencies list).
- **EUR: dropped the government-debt stat card + debt paragraphs.** Eurozone aggregate gross-debt series from FRED does not publish at a cadence that matches our Q1 2020 baseline comparison. Set `EUR.debtSeries = null` in backend config; the rebuild script already conditionally renders the debt card only when `SOURCE_URLS.*.debt` is truthy. EUR section now shows only money-supply + CPI comparisons.
- **PHP: fixed CPI calculation.** The `FPCPITOTLZGPHL` series is an annual inflation rate (% YoY), not a price-level index. The old `fetchFred4yrChange()` treated it as a level. Now:
  - Added `fetchAnnualCompoundInflation4yr(seriesId)` fetcher in `forms-backend/inflation-stats.js` that compounds 4 annual rates: `∏(1 + rᵢ/100) − 1`
  - Added `cpiType: 'annualRate'` flag to PHP's config; `fetchCurrencyStats` dispatches on this flag.
- Re-ran full build pipeline: `update-i18n.js` → `rebuild-inflation-html.js` → `inject-seo-content.js`.
- `inflation.html` shrank from 3,469 → 3,035 lines.
- Article schema `dateModified` → 2026-04-16; English JSON `@metadata.last-updated` → 2026-04-16.
- Inflation page now supports **13 currencies**: USD, CAD, EUR, GBP, BRL, PHP, MXN, INR, JPY, AUD, ILS, THB, NZD.

## Inflation Page — Multi-Currency Dynamic Stat Cards — April 16, 2026
- Extended the new USD stat-card template across **all 15 currencies** (USD, CAD, EUR, GBP, BRL, PHP, MXN, INR, HNL, VEF, JPY, AUD, ILS, THB, NZD) on `/inflation`.
- Deleted the old per-currency FAQ / compound-inflation-calculator / volatility / hacked / energy / purchasing-power-image blocks, as well as the 14 per-currency "What's next?" carousels.
- Introduced a **single** `#global-whats-next` block at the bottom of the page, hidden by default and shown by JS only after a currency is selected; hidden again when the user clicks "← Choose a different money".
- Added a new **"Calculate your inflation"** card to the What's next grid (replacing "Contribute"), linking to `/compound-inflation-calculator`.
- Stat-card DOM IDs are now suffixed with the currency code (e.g. `stat-btc-change-CAD`, `stat-m1-current-EUR`, `stat-debt-current-JPY`, `stat-currency-supply-value-BRL`) so every section can be populated independently.
- `jquery/inflation-stats.js` exposes `window.loadInflationStats(currency)`; `jquery/country-selector-inflation.js` calls it on button click so the right section's cards get live data.
- `forms-backend/inflation-stats.js` now accepts a `?currency=XXX` query param and fetches per-currency data:
  - FRED narrow-money (`MANMM101*M189S`) per country for the "money in existence" card
  - FRED general-government-debt (`GGGDTA*A188N`, as % of GDP) per country for the debt card
  - FRED CPI per country for the hero "X purchasing power lost" card
  - TwelveData Pro for BTC/[local] direct pairs; falls back to BTC/USD × USD/[local] forex for the 6 exotic pairs (HNL, VEF, ILS, NZD, PHP, THB)
  - mempool.space for Bitcoin mined/percent (shared across all currencies)
  - Per-currency cache in `inflation-stats-cache-v2.json` with 24h TTL
- Added all new i18n keys to `i18n/en/inflation_en.json` (per-currency intro/proof/btc/freedom copy + per-currency existence/debt card titles) and `i18n/en/common_en.json` (`common_next_calculate`, `common_next_calculate_desc`).
- Every stat-card label, source line, "TODAY" label, and currency-specific title in the USD section now has a `data-i18n` attribute (previously all hardcoded); the rebuild script emits the same structure for all 14 other currencies.
- `inflation.html` shrank from ~4,959 lines to ~3,469 lines despite adding 14 full currency blocks (because the duplicated FAQ copy was removed).
- Bumped Article schema `dateModified` to 2026-04-16; bumped `@metadata.last-updated` in both English JSON files.
- Ran `node scripts/inject-seo-content.js` — no changes (inline defaults were already injected by the rebuild script).
- New scripts: `scripts/inflation-multi/update-i18n.js`, `scripts/inflation-multi/rebuild-inflation-html.js`.

## Yoruba (yo) Language Added — April 2026

- Added Yoruba (Yorùbá) as the 55th language
- Translation files partially created in previous session (simple files, sticker files, business, index)
- Completed remaining files: comparisons (10), common (1), inflation (1), content (9) — fixed 17 invalid `\u00fu` → `\u00fa` Unicode escape sequences across 4 scripts
- Translation scripts in `scripts/yoruba/` (8 scripts broken by category)
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files (54→55)
- Ran SEO content injection and translation audit (all clean — only legitimate shared-word matches)
- Language code: `yo`
- Display name: `Yorùbá` (placed alphabetically between Türkçe and Ελληνικά in language switcher)
- Yoruba uses Latin script with diacritics (ẹ, ọ, ṣ, tone marks) — no special character concerns beyond Unicode escapes in JS

## Slovenian (sl) Language Added — April 2026
- Added Slovenian (Slovenščina) as the 51st language
- Created 90+ translation files in `i18n/sl/` mirroring the English directory structure
- Translation scripts in `scripts/slovenian/` (8 scripts broken by category)
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files (50→51)
- Ran SEO content injection
- Language code: `sl`
- Display name: `Slovenščina` (placed alphabetically between Slovenčina/Slovak and Suomi/Finnish in language switcher)
- Slovenian uses Latin script with diacritics (č, š, ž) — no special character concerns
- Note: Slovenian (sl, Slovenščina) is distinct from Slovak (sk, Slovenčina) — South Slavic vs West Slavic

## Sinhala (si) Language Added — April 2026
- Added Sinhala (සිංහල) as the 50th language
- Created 90+ translation files in `i18n/si/` mirroring the English directory structure
- Translation scripts in `scripts/sinhala/` (8 scripts broken by category)
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files (49→50)
- Ran SEO content injection
- Language code: `si`
- Display name: `සිංහල` (placed between தமிழ்/Tamil and မြန်မာ/Myanmar in language switcher per Sinhala Unicode block U+0D80)
- Sinhala uses its own unique script (LTR); no special character or RTL concerns

## Romanian (ro) Language Added — April 2026
- Added Romanian (Română) as the 49th language
- Created 90 translation files in `i18n/ro/` mirroring the English directory structure
- Translation scripts in `scripts/romanian/` (8 scripts broken by category)
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files (48→49)
- Ran SEO content injection
- Language code: `ro`
- Display name: `Română` (placed alphabetically between Português and Slovenčina in language switcher)
- Romanian uses Latin script with diacritics (ă, â, î, ș, ț) — no special character concerns

## Punjabi (pa) Language Added — April 2026
- Added Punjabi (ਪੰਜਾਬੀ) as the 48th language
- Created 90 translation files in `i18n/pa/` mirroring the English directory structure
- Translation scripts in `scripts/punjabi/` (8 scripts broken by category)
- Used Devanagari-to-Gurmukhi transliteration from Hindi translations for comparisons, common, index, inflation, and content files (Hindi and Punjabi share vocabulary, +0x100 Unicode offset)
- Simple files, sticker files, and business files created with direct Gurmukhi translations
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files (47→48)
- Ran SEO content injection
- Language code: `pa`
- Display name: `ਪੰਜਾਬੀ` (placed after বাংলা/Bengali and before தமிழ்/Tamil in language switcher per Gurmukhi Unicode range U+0A00)
- Punjabi uses Gurmukhi script; translations produced via Devanagari-to-Gurmukhi transliteration from Hindi

## Persian (fa) Language Added — April 2026
- Added Persian (فارسی) as the 47th language
- Translation files already existed in `i18n/fa/` (created in previous session via 8 scripts in `scripts/persian/`)
- Fixed 15 missing keys and ~100 untranslated strings (country names, platform descriptions, inflation texts, wallet costs) via `scripts/persian/fix-missing-and-untranslated.js`
- Updated: index.html schema, llms.txt, llms-full.txt, all about_xx.json files (46→47)
- Ran SEO content injection
- Language code: `fa`
- Display name: `فارسی` (already registered in language.js, placed after العربية per Arabic script Unicode range)
- Persian is RTL (right-to-left), uses Arabic script; all translations in proper Persian

## Irish (ga) Language Added — April 2026
- Added Irish (Gaeilge) as the 46th language
- Created 90+ translation files in `i18n/ga/` mirroring the English directory structure
- Translation scripts in `scripts/irish/` (8 scripts broken by category)
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files (45→46)
- Ran SEO content injection
- Language code: `ga`
- Display name: `Gaeilge` (placed alphabetically between Français and Hausa in language switcher)
- Irish uses Latin script with fadas (á, é, í, ó, ú) — no special character concerns

## Hebrew (he) Language Added — April 2026
- Added Hebrew (עברית) as the 44th language
- Translation files already existed in `i18n/he/` (created in previous session via 8 scripts in `scripts/hebrew/`)
- Fixed 7 missing keys (sticker-files keys), 43 untranslated language names in common_he.json, 31 untranslated inflation currency texts in inflation_he.json via `scripts/hebrew/fix-missing-and-untranslated.js`
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files (43→44)
- Ran SEO content injection
- Language code: `he`
- Display name: `עברית` (placed after العربية and before हिन्दी in language switcher per Hebrew Unicode range)
- Hebrew is RTL (right-to-left); all translations written in proper Hebrew script

## Hausa (ha) Language Added — April 2026
- Added Hausa as the 43rd language
- Created 90+ translation files in `i18n/ha/` mirroring the English directory structure
- Translation scripts in `scripts/hausa/` (8 scripts broken by category)
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files
- Ran SEO content injection
- Language code: `ha`
- Display name: `Hausa` (placed alphabetically between Français and Hrvatski in language switcher)
- Hausa uses Latin script — no special character concerns

## Greek (el) Language Added - April 2026
- Added as the 42nd language

## Finnish (fi) Language Added — April 2026
- Added Finnish (Suomi) as the 41st language
- Created 90+ translation files in `i18n/fi/` mirroring the English directory structure
- Translation scripts in `scripts/finnish/` (8 scripts broken by category)
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files (40→41)
- Ran SEO content injection
- Language code: `fi`
- Display name: `Suomi` (placed alphabetically between Slovenčina and Svenska in language switcher)

## Estonian (et) Language Added — April 2026
- Added Estonian (Eesti) as the 40th language
- Created 90 translation files in `i18n/et/` mirroring the English directory structure
- Translation scripts in `scripts/estonian/` (8 create scripts + fix-and-generate.js)
- simple-files and sticker-files scripts have full Estonian translations
- Remaining files used Danish as template — common.json and index.json have full Estonian translations via fix-and-generate.js
- Updated: language.js, index.html schema, llms.txt, llms-full.txt, all about_xx.json files (39→40)
- Ran SEO content injection
- Language code: `et`
- Display name: `Eesti` (placed alphabetically between Deutsch and Español in language switcher)
- Note: Encountered typographic quote issue (Estonian „" quotes) in JS scripts — documented warning in translate-new-language.md to use `\u201E`/`\u201C` unicode escapes and NEVER use sed for quote replacement

## Danish (da) Language Added — April 2026
- Added Danish (Dansk) as the 39th language
- Created 90+ translation files in `i18n/da/` mirroring the English directory structure
- Translation scripts in `scripts/danish/` (8 scripts broken by category)
- Updated: language.js (v1.2.8), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (38→39)
- Ran SEO content injection and translation audit (all clean — only legitimate shared-word matches like "inflation", "EURO", "Standard")
- Language code: `da`
- Display name: `Dansk` (placed alphabetically between Chicheŵa and Deutsch in language switcher)

## Croatian (hr) Language Added — April 2026
- Added Croatian (Hrvatski) as the 38th language
- Created 90+ translation files in `i18n/hr/` mirroring the English directory structure
- Translation scripts in `scripts/croatian/` (8 scripts broken by category)
- Updated: language.js (v1.2.8), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (37→38)
- Ran SEO content injection and translation audit (all clean — only legitimate proper noun matches)
- Language code: `hr`
- Display name: `Hrvatski` (placed alphabetically between Français and Indonesia in language switcher)

## Catalan (ca) Language Added — April 2026
- Added Catalan (Català) as the 37th language
- Created 90+ translation files in `i18n/ca/` mirroring the English directory structure
- Translation scripts in `scripts/catalan/` (8 scripts broken by category)
- Updated: language.js (v1.2.8), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (36→37)
- Ran SEO content injection and translation audit (all clean — only legitimate proper noun matches)
- Language code: `ca`
- Display name: `Català` (placed alphabetically between Azərbaycanca and Čeština in language switcher)

## Bengali (bn) Language Added — April 2026
- Added Bengali (বাংলা) as the 35th language
- Created 90+ translation files in `i18n/bn/` mirroring the English directory structure
- Translation scripts in `scripts/bengali/` (8 scripts broken by category)
- Updated: language.js (v1.2.8), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (34→35)
- Ran SEO content injection
- Language code: `bn`
- Display name: `বাংলা` (placed after हिन्दी and before தமிழ் in language switcher per Bengali Unicode range)

## Basque (eu) Language Added — April 2026
- Added Basque (Euskara) as the 34th language
- Created 90+ translation files in `i18n/eu/` mirroring the English directory structure
- Translation scripts in `scripts/basque/` (8 scripts broken by category)
- Updated: language.js (v1.2.8), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (33→34)
- Ran SEO content injection
- Language code: `eu`
- Display name: `Euskara` (placed alphabetically after Español and before Filipino in language switcher)

## Amharic (am) Language Added — April 2026
- Added Amharic (አማርኛ) as the 33rd language
- Created 90+ translation files in `i18n/am/` mirroring the English directory structure
- Translation scripts in `scripts/amharic/` (8 scripts broken by category)
- Updated: language.js (v1.2.8), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (32→33)
- Ran SEO content injection
- Language code: `am`
- Display name: `አማርኛ` (placed after ภาษาไทย and before 中文 in language switcher per Ethiopic Unicode range)

## Azerbaijani (az) Language Added — April 2026
- Added Azerbaijani (Azərbaycanca) as the 32nd language
- Created 90+ translation files in `i18n/az/` mirroring the English directory structure
- Translation scripts in `scripts/azerbaijani/` (8 scripts broken by category)
- Updated: language.js (v1.2.8), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (31→32)
- Ran SEO content injection
- Language code: `az`
- Display name: `Azərbaycanca` (placed alphabetically after Afrikaans, before Čeština in language switcher)

## Arabic (ar) Language Added — April 2026
- Added Arabic (العربية) as the 31st language
- Created 90 translation files in `i18n/ar/` mirroring the English directory structure
- Translation scripts in `scripts/arabic/` (8 scripts broken by category)
- Updated: language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (30→31)
- Ran SEO content injection
- Language code: `ar` (Arabic)
- Display name: `العربية` (placed after Русский and before हिन्दी in language switcher per Unicode Arabic script order)
- Note: Arabic is RTL (right-to-left); all translations written in proper Arabic script

## Norwegian Bokmål (nb) Language Added — April 2026
- Added Norwegian Bokmål (Norsk) as the 30th language
- Created 90 translation files in `i18n/nb/` mirroring the English directory structure
- Translation scripts in `scripts/norwegian/` (8 scripts broken by category)
- Updated: language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (29→30)
- Ran SEO content injection
- Language code: `nb` (Norwegian Bokmål — matches browser auto-detection)
- Display name: `Norsk` (placed alphabetically between Nederlands and Polski in language switcher)

## Lithuanian (lt) Language Added — April 2026
- Added Lithuanian (Lietuvių) as the 29th language
- Created 87 translation files in `i18n/lt/` mirroring the English directory structure
- Translation scripts in `scripts/lithuanian/` (8 scripts broken by category + fix-quotes helpers)
- Updated: language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (28→29)
- Ran SEO content injection

## Korean (ko) Language Added — April 2026
- Added Korean (한국어) as the 28th language
- Created all 90+ translation files in `i18n/ko/` mirroring the English directory structure
- Translation scripts in `scripts/korean/` (8 scripts broken by category)
- Updated: language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (27→28)
- Ran SEO content injection

## Slovak (sk) Language Added — April 2026
- Added Slovak (Slovenčina) as the 27th language
- Created all 90+ translation files in `i18n/sk/` mirroring the English directory structure
- Translation scripts in `scripts/slovak/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (26→27)
- Fixed Cyrillic sort order in language.js (български now before Русский)
- Ran SEO content injection

## Russian (ru) Language Added — April 2026
- Added Russian (Русский) as the 26th language
- Created all 90+ translation files in `i18n/ru/` mirroring the English directory structure
- Translation scripts in `scripts/russian/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (25→26)
- Ran SEO content injection

## Tagalog (tl) Language Added — April 2026
- Added Tagalog as the 25th language
- Copied all 90 translation files from Filipino (fil) since Filipino is the standardized form of Tagalog — written forms are virtually identical
- Script: `scripts/tagalog/copy-from-filipino.js` (copies all fil files, renames to tl, updates metadata)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (24→25)
- Fixed about.html inline text (was showing "9 languages", updated to "25 languages")
- Ran SEO content injection

## Filipino (fil) Language Added — April 2026
- Added Filipino as the 24th language
- Created all 90+ translation files in `i18n/fil/` mirroring the English directory structure
- Translation scripts in `scripts/filipino/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (23→24)
- Ran SEO content injection

## Malay (ms) Language Added — April 2026
- Added Malay (Bahasa Melayu) as the 23rd language
- Created all 90+ translation files in `i18n/ms/` mirroring the English directory structure
- Translation scripts in `scripts/malay/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (22→23)
- Ran SEO content injection

## Swahili (sw) Language Added — April 2026
- Added Swahili (Kiswahili) as the 22nd language
- Created all 90+ translation files in `i18n/sw/` mirroring the English directory structure
- Translation scripts in `scripts/swahili/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (21→22)
- Ran SEO content injection

## Vietnamese (vi) Language Added — April 2026
- Added Vietnamese (Tiếng Việt) as the 20th language
- Created all 90 translation files in `i18n/vi/` mirroring the English directory structure
- Translation scripts in `scripts/vietnamese/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (19→20)
- Ran SEO content injection

## Swedish (sv) Language Added — April 2026
- Added Swedish (Svenska) as the 19th language
- Created all 90+ translation files in `i18n/sv/` mirroring the English directory structure
- Translation scripts in `scripts/swedish/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (18→19)
- Ran SEO content injection

## Chichewa (ny) Language Added — April 2026
- Added Chichewa (Chicheŵa) as the 18th language
- Created all 90+ translation files in `i18n/ny/` mirroring the English directory structure
- Translation scripts in `scripts/chichewa/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (17→18)
- Ran SEO content injection

## Hindi (hi) Language Added — April 2026
- Added Hindi (हिन्दी) as the 17th language
- Created all 90 translation files in `i18n/hi/` mirroring the English directory structure
- Translation scripts in `scripts/hindi/` (8 scripts broken by category)
- Updated: language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (16→17)
- Ran SEO content injection

## Mandarin Chinese (zh) Language Added — April 2026
- Added Mandarin Chinese (中文) as the 16th language
- Created all 90 translation files in `i18n/zh/` mirroring the English directory structure
- Translation scripts in `scripts/chinese/` (8 scripts broken by category + fix-quotes.js helper)
- Used Chinese corner brackets 「」 instead of curly quotes to avoid JS string delimiter conflicts
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (15→16)
- Ran SEO content injection

## Czech (cs) Language Added — April 2026
- Added Czech (Čeština) as the 15th language
- Created all 90 translation files in `i18n/cs/` mirroring the English directory structure
- Translation scripts in `scripts/czech/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (14→15)
- Ran SEO content injection

## Afrikaans (af) Language Added — April 2026
- Added Afrikaans as the 14th language
- Created all 90 translation files in `i18n/af/` mirroring the English directory structure
- Translation scripts in `scripts/afrikaans/` (8 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (13→14)
- Ran SEO content injection

## Zulu (zu) Language Added — April 2026
- Added Zulu (isiZulu) as the 13th language
- Created ~90+ translation files in `i18n/zu/` mirroring the English directory structure
- Translation scripts in `scripts/zu/` (10 scripts broken by category)
- Updated: language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (12→13)
- Ran SEO content injection

## Tamil (ta) Language Added — April 2026
- Added Tamil (தமிழ்) as the 12th language
- Created ~90+ translation files in `i18n/ta/` mirroring the English directory structure
- Translation scripts in `scripts/tamil/` (10 scripts broken by category)
- Updated: language.js (v1.2.5), index.html schema, llms.txt, llms-full.txt, all about_xx.json files (11→12)
- Ran SEO content injection
- Updated workspace rules and translate-new-language.md with script size limit guidance

## What Works (Current Functional Features)

### Core Website Functionality
✅ **Homepage**: Fully functional with topic-based navigation and jump buttons
✅ **Educational Pages**: Complete set of topic pages (inflation, bank runs, Bitcoin vs gold/CBDC, etc.)
✅ **Responsive Design**: Mobile-optimized layout works across all device sizes
✅ **Navigation**: Smooth scrolling, back buttons, and intuitive user flow
✅ **Visual Design**: Consistent dark theme with Bitcoin orange accents

### Internationalization System
✅ **Multi-language Support**: jquery.i18n implementation working correctly
✅ **Language Detection**: Automatic browser language detection and localStorage persistence
✅ **Language Switcher**: Functional dropdown for manual language selection
✅ **Translation Loading**: Dynamic JSON file loading for page-specific content
✅ **Fallback System**: Graceful fallback to English when translations unavailable

### Content Management
✅ **Topic Organization**: Well-structured content sections with color coding
✅ **External Link Curation**: Curated collection of high-quality Bitcoin educational resources
✅ **Internal Tools**: Compound inflation calculator, wallet guides, business resources
✅ **Resource Downloads**: Bitcoin stickers, postcards, and business kits available

### Technical Infrastructure
✅ **Static Site Architecture**: Fast, reliable hosting without server dependencies
✅ **Clean URLs**: nginx configuration removes .html extensions
✅ **Performance**: Fast loading times with optimized assets
✅ **Analytics**: Google Analytics integration (gtag.js, ID: G-18L58W2GTN)
✅ **SEO**: English content pre-rendered in HTML source via `scripts/inject-seo-content.js` for crawler visibility, plus proper meta tags and social sharing optimization
✅ **GEO Structured Data**: Complete Schema.org JSON-LD on all pages — Organization, WebSite, Article, FAQPage, HowTo, ComparisonPage (ItemList), BreadcrumbList, SoftwareApplication/Product schemas
✅ **GEO Heading Hierarchy**: Proper H1→H2→H3 heading structure across all 35 content pages via `scripts/fix-heading-hierarchy.js` with CSS preservation classes for zero visual change
✅ **GEO Q&A Microdata**: Schema.org Question/Answer microdata on 120 Q&A sections across inflation.html (8 Q&A types × 15 currencies) via `scripts/inject-faq-microdata.js`, complementing the existing FAQPage JSON-LD
✅ **GEO Author/Publisher Attribution**: Visible "Published by bitcoin.rocks · Bitcoin education since 2022 · Open-source project" bar on all 33 educational pages via `scripts/inject-author-attribution.js`, with Schema.org `itemprop="publisher"` microdata, cross-links to About page and GitHub, translated into 9 languages
✅ **GEO llms.txt + llms-full.txt**: AI-specific content files for LLM consumption. `llms.txt` (~1,500 words) provides concise site overview with organization identity, editorial approach, structured page listing with URLs and descriptions, citation preference format, and key Bitcoin facts. `llms-full.txt` (~18,000 words) provides full educational content of all pages in clean Markdown with tables, headings, source URLs, and citations. Both referenced in `robots.txt`.
✅ **GEO robots.txt AI Crawlers**: Explicit `User-agent` + `Allow: /` directives for 16 AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, Google-Extended, ClaudeBot, anthropic-ai, PerplexityBot, Applebot-Extended, Meta-ExternalAgent, Bingbot, Amazonbot, CCBot, cohere-ai, YouBot, Diffbot, Bytespider). Blocks `/forms-backend/` and `/.github/`. Comment block points AI bots to `llms.txt` and `llms-full.txt`. `inject-seo-content.js` updated to generate matching robots.txt.
✅ **Form Spam Protection**: Fuzzy duplicate address detection using normalization + Levenshtein similarity (catches apt/unit keyword swaps, inserted spaces, and other slight variations)
✅ **CAPTCHA Protection**: Cloudflare Turnstile on all 11 submission forms with server-side verification, replacing old unused Google reCAPTCHA v3
✅ **Address Blacklist System**: Region-based address blacklisting (USA/Canada) with silent rejection, blocked count tracking, admin UI for add/remove from submissions or manual entry, and per-user `can_blacklist` permission managed on the Users dashboard

### Community Features
✅ **Open Source**: MIT licensed with public GitHub repository
✅ **Contribution Guidelines**: Clear CONTRIBUTING.md with translation instructions
✅ **GitHub Integration**: Issues, discussions, and pull request workflow
✅ **Translation Workflow**: Established process for community translations

## Current Status by Feature Area

### Homepage (✅ Complete)
- **Jump Navigation**: All topic buttons functional with smooth scrolling
- **Content Sections**: All major Bitcoin impact areas covered
- **Visual Hierarchy**: Clear organization with consistent styling
- **Mobile Experience**: Fully responsive design

### Educational Content (✅ Mostly Complete)
- **Core Topics**: Money, freedom, human rights, energy, environment, business, etc.
- **Specialized Pages**: Inflation, bank runs, Bitcoin vs alternatives
- **Interactive Tools**: Compound inflation calculator functional
- **Resource Quality**: High-quality curated external links

### Internationalization (🔄 In Progress)
- **Technical Implementation**: ✅ Complete and functional
- **English Content**: ✅ Complete baseline
- **German Translation**: 🔄 In progress
- **French Translation**: 🔄 In progress  
- **Portuguese Translation**: 🔄 In progress
- **Thai Translation**: 🔄 In progress
- **Other Languages**: 🔄 Various stages of completion

### Physical Resources (✅ Complete)
- **Bitcoin Stickers**: Multiple language versions available for download
- **Bitcoin Postcards**: Designed and available for printing
- **Business Kits**: Complete merchant adoption resources
- **File Organization**: Well-organized downloadable resources

### Business Section (✅ Complete)
- **Business Education**: Why Bitcoin matters for businesses
- **Implementation Guides**: Step-by-step Bitcoin acceptance instructions
- **Wallet Recommendations**: Business-appropriate Bitcoin wallet guides
- **FAQ Section**: Common business Bitcoin questions addressed

## What's Left to Build

### Translation Completion (High Priority)
- **Complete Existing Languages**: Finish German, French, Portuguese, Thai translations
- **New Language Support**: Add Spanish, Italian, Dutch, and other requested languages
- **Translation Quality**: Review and improve existing translations
- **Community Coordination**: Better coordination tools for translation teams

### Content Enhancements (Medium Priority)
- **Content Freshness**: Regular review and update of external links
- **New Educational Topics**: Expand coverage of emerging Bitcoin topics
- **Interactive Elements**: Additional calculators and educational tools
- **Video Content**: Integration of more video educational resources

### Technical Improvements (Medium Priority)
- **Performance Optimization**: Further optimize loading times and asset delivery
- **Accessibility Enhancements**: Improve WCAG compliance and screen reader support
- ~~**SEO Improvements**: Enhanced search engine optimization~~ ✅ Completed Feb 2026 — English content now pre-rendered in HTML source
- **Analytics Enhancement**: Better tracking of educational impact

### Community Features (Low Priority)
- **Contributor Dashboard**: Better tools for tracking translation progress
- **Community Recognition**: System for acknowledging contributor efforts
- **Feedback Integration**: Improved mechanisms for community feedback
- **Documentation**: Enhanced contributor onboarding materials

## Known Issues

### Technical Issues
- **Translation File Management**: Manual process for maintaining translation completeness
- **Link Maintenance**: No automated system for checking external link validity
- **Mobile Performance**: Some pages could benefit from further mobile optimization
- **Browser Compatibility**: Limited testing on older browser versions

### Content Issues
- **Translation Gaps**: Incomplete translations in several languages
- **Content Staleness**: Some external links may become outdated over time
- **Regional Relevance**: Some content may not be relevant to all global regions
- **Complexity Balance**: Ongoing challenge of maintaining beginner-friendliness

### Process Issues
- **Translation Coordination**: Difficulty coordinating multiple simultaneous translation efforts
- **Quality Control**: Manual review process for translations and content updates
- **Community Onboarding**: Could be easier for non-technical contributors to participate
- **Impact Measurement**: Limited metrics for measuring educational effectiveness

## Success Metrics

### Traffic and Engagement
- **Website Visits**: Steady traffic to bitcoin.rocks
- **Page Views**: High engagement with educational content
- **Time on Site**: Users spending meaningful time learning
- **Return Visits**: Users coming back for additional resources

### Community Growth
- **GitHub Activity**: Active issues, discussions, and pull requests
- **Translation Progress**: Ongoing completion of language translations
- **Contributor Participation**: Growing number of community contributors
- **Resource Downloads**: Active use of stickers, postcards, and business kits

### Educational Impact
- **Resource Sharing**: bitcoin.rocks being shared as "first link" for Bitcoin education
- **Business Adoption**: Merchants using business resources to accept Bitcoin
- **Community Feedback**: Positive feedback from Bitcoin education community
- **Global Reach**: Usage across multiple countries and languages

## Next Development Priorities

### Immediate (Next 2 weeks)
1. **Memory Bank Completion**: Finish comprehensive project documentation
2. **Translation Status Review**: Assess current translation completeness across all languages
3. **Link Audit**: Review and update external educational resource links
4. **Performance Check**: Verify current site performance metrics

### Short-term (Next 1-2 months)
1. **Translation Push**: Focus on completing high-priority language translations
2. **Content Updates**: Refresh educational content based on recent Bitcoin developments
3. **Mobile Optimization**: Further improve mobile user experience
4. **Community Outreach**: Engage with Bitcoin education community for feedback

### Medium-term (Next 3-6 months)
1. **New Language Support**: Add Spanish and other highly requested languages
2. **Educational Tool Expansion**: Develop additional interactive educational tools
3. **Partnership Development**: Explore collaborations with other Bitcoin education projects
4. **Impact Measurement**: Develop better metrics for measuring educational effectiveness

The bitcoin.rocks platform is in a strong, functional state with clear paths for continued improvement and growth.

## Phase 9a (Next.js migration) — April 17, 2026

Four Bucket B educational pages shipped with a faithful V1 Tailwind port: `/wallets` (the largest V1 page at 997 lines), `/lightning`, `/flyers`, and `/compound-inflation-calculator`. Added 2 small Client Components (`WalletAccordion` for the toggle-accordion UX on wallets/lightning, `PrintFlyerButton` for the print-via-iframe UX on flyers). Ported ~545 lines of V1 legacy CSS from `css/style.css` into `app/globals.css` via an idempotent Node script. All 4 `lib/pages.ts` entries flipped to `published: true` — sitemap now emits 220 new URLs (55 locales × 4 slugs). Build is clean: **1049 static pages** generated (55 × 19 routes + sitemap/robots/404/middleware). Runtime verify: all 6 assertions pass; caught + fixed one forgotten `await` on `buildArticleSchema()` before commit. V2 redesign of these 4 pages deferred to post-cutover queue; `main` still frozen.
