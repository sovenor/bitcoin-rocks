# V2 Redesign Checklist

A complete inventory of every page, shared component, and cross-cutting UI pattern on bitcoin.rocks. Use this to track V2 design-system migration progress. Check off an item once it has been fully ported to V2 (Navbar, V2 typography, semantic color tokens, `--card-accent`, `.whats-next-card`, sources section, published-date section, etc.).

Legend:
- [x] = Completed in V2
- [ ] = Still on V1 (or not yet migrated)

---

## 🧩 Shared Components & Global UI

These are cross-cutting pieces that appear on many/all pages. They should be verified once and then assumed consistent everywhere.

- [x] **Navbar** (`components/Navbar.tsx`) — logo-on-top-of-pill nav bar (Learn / Get Involved / About / Language)
- [x] **DynamicHeader** (`components/DynamicHeader.tsx`) — audit whether still used / needs V2 treatment
- [ ] **Footer** (`components/Footer.tsx`) — V2 styling pass
- [x] **LanguageSwitcher** (`components/LanguageSwitcher.tsx`)
- [ ] **CountrySelector** (`components/CountrySelector.tsx`)
- [ ] **CountryFormSelector** (`components/CountryFormSelector.tsx`)
- [x] **HomeCarousel** (`components/HomeCarousel.tsx`)
- [x] **HomePill** (`components/HomePill.tsx`)
- [x] **CategorySection** (`components/CategorySection.tsx`)
- [x] **WhatsNextCard** (`components/WhatsNextCard.tsx`)
- [x] **ContentPageLayout** (`components/ContentPageLayout.tsx`) — used by bank-runs/about/get-involved
- [x] **ComparisonPageLayout** (`components/ComparisonPageLayout.tsx`) — shell for bitcoin-vs-* pages
- [x] **CompoundInflationCalculator** (`components/CompoundInflationCalculator.tsx`) — embedded on inflation page
- [x] **CompoundInflationCalculatorSolo** (`components/CompoundInflationCalculatorSolo.tsx`) — standalone calc page
- [x] **InflationStats** (`components/InflationStats.tsx`)
- [x] **FdicStats** (`components/FdicStats.tsx`)
- [x] **BuyFlow** (`components/BuyFlow.tsx`)
- [x] **WalletAccordion** (`components/WalletAccordion.tsx`)

- [x] ~~**NostrAccordion** (`components/NostrAccordion.tsx`)~~ — deleted 2026-04-23 (no longer needed after /nostr V2 redesign)
- [x] ~~**NostrPageLayout** (`components/NostrPageLayout.tsx`)~~ — deleted 2026-04-23 (no longer needed after /nostr V2 redesign)
- [ ] **BusinessPageShell** (`components/BusinessPageShell.tsx`)
- [ ] **BusinessResourceCards** (`components/BusinessResourceCards.tsx`)
- [ ] **BusinessWalletCard** (`components/BusinessWalletCard.tsx`)
- [ ] **StickerPicker** (`components/StickerPicker.tsx`)
- [ ] **StickerAddressForm** (`components/StickerAddressForm.tsx`)
- [x] **PrintFlyerButton** (`components/PrintFlyerButton.tsx`)
- [x] **404 / catch-all page** (`app/not-found.tsx` + `app/[locale]/[...rest]/page.tsx`)
- [ ] **Verify fonts are loading correctly for all weights and styles**

### Cross-cutting Patterns (verify per page)

These patterns show up inside many pages. Track them globally once the layouts are V2-compliant:

- [x] **Sources section** — V2 treatment (semantic tokens, spacing, heading) — built into `ContentPageLayout` / `ComparisonPageLayout`
- [x] **Published / last-updated section** — V2 treatment — built into `ContentPageLayout` / `ComparisonPageLayout`
- [ ] **"What's next" cross-link cards** at the bottom of every page — verify color-coded `--card-accent` wired on each page
- [ ] **Breadcrumbs / JSON-LD schema** — visual breadcrumb UI (if any) in V2
- [ ] **Page hero (h1 + intro p)** — element-level V2 styling applied everywhere (audit per page)
- [ ] **RTL layouts** (ar, fa, he, ur) — spot-check V2 pages in RTL

---

## 📄 Pages

### Tier 1 — Top-level content pages

- [x] **Homepage** — `/` (`app/[locale]/page.tsx`)
- [x] **Inflation** — `/inflation`
- [x] **Bank Runs** — `/bank-runs`
- [x] **About** — `/about`
- [x] **Get Involved** — `/get-involved`

### Tier 2 — Bitcoin vs. comparison pages (11)

- [x] **Bitcoin vs Gold** — `/bitcoin-vs-gold`
- [x] **Bitcoin vs Stocks** — `/bitcoin-vs-stocks`
- [x] **Bitcoin vs Cash** — `/bitcoin-vs-cash`
- [x] **Bitcoin vs Banks** — `/bitcoin-vs-banks`
- [x] **Bitcoin vs Bonds** — `/bitcoin-vs-bonds`
- [x] **Bitcoin vs Real Estate** — `/bitcoin-vs-real-estate`
- [x] **Bitcoin vs Crypto** — `/bitcoin-vs-crypto`
- [x] **Bitcoin vs Visa** — `/bitcoin-vs-visa`
- [x] **Bitcoin vs CBDC** — `/bitcoin-vs-cbdc`
- [x] **Bitcoin vs Fine Art** — `/bitcoin-vs-fine-art`

### Tier 3 — Educational / utility pages

- [x] **Wallets** — `/wallets`
- [x] **Lightning** — `/lightning`
- [x] **Flyers** — `/flyers`

- [x] **Compound Inflation Calculator** — `/compound-inflation-calculator`
- [x] **Buy** — `/buy`

### Tier 4 — Form pages

- [x] **Stickers** — `/stickers`

### Tier 5 — Form success pages

- [x] **Sticker Success** — `/sticker-success`
- [x] **Sticker Language Success** — `/sticker-language-success`


### Tier 6 — Business section (11)

> **V2 convention for all `/business/*` pages:** Do **not** render the
> generic "What's next?" bridge (keep learning / get a wallet / buy
> Bitcoin / inflation) at the bottom of business pages. The colored
> business resources grid (wallets, maps, stickers, rewards,
> accounting, FAQ, kit) on `/business` already serves as the primary
> cross-link surface for merchants, and sub-pages should cross-link
> back to `/business` and to each other — not drop readers back into
> the beginner learning path. When migrating or redesigning a business
> page, remove any `common_whats_next` block along with the
> `WhatsNextCard` imports/usages. ✅ applied to `/business` (2026-04-22).
>
> **Exception — `/business/why`:** This page is what customers see
> when they scan a "Bitcoin Accepted Here" sticker QR code, so its
> primary audience is beginner customers (not merchants). The V2
> redesign therefore DOES include a bespoke color-coded 4-card
> "Where to next?" grid that funnels QR-scanning customers into the
> learning path (homepage → learn, `/wallets` → get a wallet,
> `/buy` → buy bitcoin, `/business` → accept bitcoin). Every other
> `/business/*` page keeps the convention above. ✅ applied to
> `/business/why` (2026-04-22).

- [x] **Business (index)** — `/business`
- [x] **Business — Why** — `/business/why`
- [x] **Business — FAQ** — `/business/faq`
- [x] **Business — Wallets** — `/business/wallets`
- [x] **Business — Accounting** — `/business/accounting`
- [x] **Business — Stickers** — `/business/stickers`
- [x] **Business — Sticker Files (English)** — `/business/sticker-files/english` — downloadable merchant "Bitcoin Accepted Here" sticker, linked from `/business/stickers`'s Global — Print option
- [x] **Business — Maps** — `/business/maps`
- [x] **Business — Maps Success** — `/business/maps-success`
- [x] **Business — Sticker Success** — `/business/sticker-success`
- [x] **Business — Sticker Language Success** — `/business/sticker-language-success`

### Tier 7 — Nostr section

- [x] **Nostr (index)** — `/nostr` (V2 redesign 2026-04-23 — absorbs the content of the former `/nostr/what-is-nostr` page)
- [x] ~~**Nostr — What is Nostr** — `/nostr/what-is-nostr`~~ — **deleted 2026-04-23**, merged into `/nostr`. The slug 301-redirects to `/nostr` via `next.config.ts`.

### Tier 8 — Sticker-files section (44 language pages + index)

The sticker-files sub-pages share a single template (`app/[locale]/sticker-files/[lang]/page.tsx`), so a single V2 pass on that template should unlock all of them at once. Still tracked individually below for per-locale visual review.

- [x] **Sticker Files (index)** — `/sticker-files`
- [x] **Sticker Files template** (`[lang]/page.tsx`) — the shared per-language shell

Individual language pages:

- [x] `/sticker-files/afrikaans`
- [x] `/sticker-files/arabic`
- [x] `/sticker-files/basque`
- [x] `/sticker-files/bulgarian`
- [x] `/sticker-files/catalan`
- [x] `/sticker-files/chinese`
- [x] `/sticker-files/croatian`
- [x] `/sticker-files/czech`
- [x] `/sticker-files/danish`
- [x] `/sticker-files/dutch`
- [x] `/sticker-files/english`
- [x] `/sticker-files/estonian`
- [x] `/sticker-files/filipino`
- [x] `/sticker-files/finnish`
- [x] `/sticker-files/french`
- [x] `/sticker-files/german`
- [x] `/sticker-files/greek`
- [x] `/sticker-files/hausa`
- [x] `/sticker-files/hebrew`
- [x] `/sticker-files/hindi`
- [x] `/sticker-files/hungarian`
- [x] `/sticker-files/indonesian`
- [x] `/sticker-files/irish`
- [x] `/sticker-files/italian`
- [x] `/sticker-files/japanese`
- [x] `/sticker-files/korean`
- [x] `/sticker-files/malay`
- [x] `/sticker-files/norwegian`
- [x] `/sticker-files/persian`
- [x] `/sticker-files/polish`
- [x] `/sticker-files/portuguese`
- [x] `/sticker-files/russian`
- [x] `/sticker-files/sinhala`
- [x] `/sticker-files/slovak`
- [x] `/sticker-files/slovenian`
- [x] `/sticker-files/spanish`
- [x] `/sticker-files/swahili`
- [x] `/sticker-files/swedish`
- [x] `/sticker-files/thai`
- [x] `/sticker-files/turkish`
- [x] `/sticker-files/urdu`
- [x] `/sticker-files/vietnamese`
- [x] `/sticker-files/yoruba`

### Special routes

- [x] **404 page** — `app/not-found.tsx` (root) and `app/[locale]/[...rest]/page.tsx` (locale-aware catch-all)

---

## 🌐 i18n Translation Cleanup (post-cutover)

Once **all pages above are V2-complete**, the V2 redesign pass will have left the i18n JSON files in an inconsistent state across the site's 55 locales:

- **Dead keys:** V1-only strings that no longer render anywhere (old section headings, removed FAQ copy, old CTA labels, etc.) are still sitting in every language file.
- **Stale translations:** keys whose English source text changed during the V2 pass — the other 54 languages still hold the old V1 wording.
- **Missing keys:** new V2 keys (new card labels, new sources, "What's next" cross-links, etc.) exist in English but are missing from the other 54 languages and currently fall through to the English fallback.

This section tracks the cleanup work needed to bring every language back to parity with V2 English.

### Step 1 — Audit English files to identify dead keys

- [x] Write an audit script (`scripts/i18n-audit/find-unused-keys.js`) that greps the whole `app/`, `components/`, and `lib/` tree for every key referenced via `t('…')`, `getTranslations()`, `useTranslations()`, etc., then diffs against every key in `i18n/en/**/*.json`.
- [x] Produce a per-namespace report of unused English keys (`scripts/i18n-audit/unused-keys-report.json`).
- [x] Manually review the report to confirm each "unused" key really is dead (watch out for dynamic keys built via string concatenation / template literals — e.g. `t(\`platform_\${id}_name\`)`).
- [x] Flag any dynamic-key patterns so the audit script can be taught to recognize them (allow-list file — `scripts/i18n-audit/dynamic-keys-allowlist.js`, covers the 325 `inflation_<code>_<suffix>` + `inflation_stat_<code>_<suffix>` keys that `components/CurrencySection.tsx` builds at runtime).

### Step 2 — Delete dead keys from English

- [x] Write a removal script (`scripts/i18n-audit/remove-unused-keys.js`) that takes the confirmed unused-keys list and strips them from every `i18n/en/**/*.json` file, preserving tab indentation and `@metadata`.
- [x] Bump `@metadata.last-updated` on every touched English file.
- [x] Run `npm run build` to confirm nothing regresses (no missing-key fallbacks, no broken pages). Removed **423 dead keys** across **74 namespaces** (incl. 98 in `common`, 98 in `inflation`, 9 in `bitcoin-vs-gold`, 8 in `bitcoin-vs-stocks`, 6 in `business/stickers`, 3 per-language sticker-files `<lang>_header` / `<lang>_description` / `<lang>_bitcoin_sticker_files` keys × 43 languages, and misc V1 leftovers).

### Step 3 — Normalize JSON formatting in English files

During the V2 pass, many English JSON files accumulated **stray blank lines between keys** (often introduced when keys were added/removed in batches by scripts). These blank lines are valid JSON but make diffs noisy and look sloppy. For example:

```jsonc
"bitcoin_vs_stocks": "Bitcoin vs Stocks",

"stocks_header": "THE DIFFERENCE BETWEEN",
```

should be collapsed to:

```jsonc
"bitcoin_vs_stocks": "Bitcoin vs Stocks",
"stocks_header": "THE DIFFERENCE BETWEEN",
```

- [x] Write a formatter script (`scripts/i18n-audit/normalize-json-formatting.js`) that walks every file in `i18n/en/**/*.json`, parses with `JSON.parse()`, re-serializes with `JSON.stringify(obj, null, '\t')` (tab indentation), and writes it back. This naturally removes all blank lines between keys while preserving key order and `@metadata`.
- [x] Run the script across all English files; spot-check a handful of large files (e.g. `i18n/en/bitcoin-vs-stocks_en.json`, `i18n/en/inflation_en.json`, `i18n/en/business/why_en.json`) to confirm the output is clean. (All 81 English files reported as already canonical — the Step 2 removal pass already rewrote every touched file via `JSON.stringify(obj, null, '\t')` so no additional normalization was needed. Spot-checked `bitcoin-vs-stocks` / `inflation` / `business/why` / `business/wallets` / `bitcoin-vs-gold`: zero blank lines between keys.)
- [x] Bump `@metadata.last-updated` on every touched file.
- [x] `npm run build` to confirm no regressions, then commit as a discrete "i18n: normalize English JSON formatting" PR so the diff is easy to review.

### Step 3.5 — Source-side audit for hardcoded English

Steps 1–3 audited the JSON side (JSON → source: "which English keys are never referenced?"). They do NOT catch the reverse problem: English text literally embedded in `.tsx` files that never went through `t()` / `getTranslations()` / `useTranslations()` in the first place. The V2 redesign pass created a handful of these — most visibly the source-citation `<li>` entries under the "Sources" heading on most content pages, plus a few metadata `description` literals and the `LanguageSwitcher` "Add language" button.

This step runs the reverse audit (source → JSON) and wires every user-facing literal through `t()`.

- [x] Write a scanner (`scripts/i18n-audit/find-hardcoded-strings.js`) that walks every `.tsx`/`.ts` under `app/` + `components/` and flags four kinds of findings: **`jsx-text`** (English between JSX tags), **`attribute`** (user-facing attr values like `title=`, `alt=`, `placeholder=`, `aria-label=`), **`metadata`** (raw-string `title:` / `description:` fields in `export const metadata` and `generateMetadata()` returns), **`schema`** (raw-string `headline:` / `description:` / `name:` fields passed to schema builders). Writes `hardcoded-strings-report.json` with per-file counts + snippets. Heuristic filters (`CODE_LIKE_PATTERNS`, `IGNORED_STRING_PATTERNS`, `looksLikeCopy()`) prune TypeScript-generic false positives (`useRef<HTMLDivElement>(null)`, class names, data-* attrs, URLs, CSS lengths, etc.).
- [x] Write an allow-list (`scripts/i18n-audit/hardcoded-strings-allowlist.js`) for literals that are intentionally English: brand names (`bitcoin.rocks`, `hi@bitcoin.rocks`), schema.org spec constants (`WebPage`, `Article`, `Organization`, OpenGraph `"website"` / `"article"` types), try/catch English fallbacks inside `getTranslations()` recovery paths, and canonical dataset names passed into `schema.citations` (FRED CPI/M1 dataset names etc. — translating those would break the schema.org citation chain to the upstream data source). Every entry carries a `reason` field and the scanner rejects un-justified entries.
- [x] First scan produced **127 flagged findings across 32 files** (pre-refinement). After tightening the `CODE_LIKE_PATTERNS` heuristic to ignore TypeScript generic syntax, the signal dropped to **97 genuine findings across 20 files**. Triage identified 5 categories: source-citation `<li>` anchor text (biggest bucket, across 10 pages), metadata `description` literals (4 files), 404-page fallbacks (3 files), `hi@bitcoin.rocks` brand email (3 files), `LanguageSwitcher` "Add language" (1 file), and schema.org `citations[].name` dataset names (2 files).
- [x] Wrote `scripts/i18n-audit/step3.5-add-source-keys.js` to add i18n keys to the right namespaces: **51 keys across 9 English JSON files** — `common` gets the shared ones that appear on multiple pages (Bitcoin whitepaper, FRED money-supply index, BLS CPI, BTC Map, BTCPay Server, Strike, Oshi — plus `common_language_switcher_add_language` and `common_site_tagline`); each per-page namespace gets its own page-specific sources (e.g. `sources_satoshi_pacioli` in `business/accounting`, `sources_bitcoin_source_code` in `inflation`).
- [x] Wrote `scripts/i18n-audit/step3.5-rewrite-sources.js` to swap the raw English literals for `{t("<key>")}` calls across all 10 affected pages — **55 replacements** applied surgically by matching on the `href="…"` attribute + anchor text (handles the whitepaper URL appearing on every page correctly).
- [x] Wrote `scripts/i18n-audit/step3.5-add-misc-keys.js` to add `biz_meta_description` + `biz_maps_meta_description` keys to `business/index` + `business/maps` respectively, and manually added `biz_wallets_meta_description` to `business/wallets`. Wired each through `buildBusinessMetadata({ descriptionKey })` (which already supported translated descriptions) + swapped the inline `description` constants inside each page for `t("<key>")` so the schema's `description` field is also translated.
- [x] Refactored `app/[locale]/layout.tsx` from a static `metadata` constant into an `async generateMetadata()` that pulls the `description` from `common_site_tagline` with an English fallback. `app/layout.tsx` and `app/not-found.tsx` (the unlocalized root + global 404) stay as static English literals since they render outside any next-intl context — both documented in the allow-list.
- [x] Refactored `components/LanguageSwitcher.tsx` to pull "Add language" via `useTranslations()` (Client Component) and use the translated label for both the pill text and the synthetic `LanguageEntry.name` for GA tracking. The GA `event_label` stays English for consistent cross-locale grouping in analytics dashboards.
- [x] Re-scan: **0 hardcoded findings** (down from 97). Re-ran `find-unused-keys.js`: **0 dead keys** (all 51 new source keys are now wired). `npm run typecheck` clean. `npm run build` clean across 55 locales × 81 pages.

### Step 4 — Propagate deletions to all other languages

- [x] Extend the removal script to iterate over all 54 non-English locales and delete the same key set from each language's JSON files. (Implemented as `scripts/i18n-audit/step4-propagate-deletions.js` — takes a more robust approach than replaying the 423-key Step 2 deletion list: for each non-English file, it computes the current English key set and filters the non-English file down to it, catching any drift beyond the V2 pass too. Supports `--dry-run` and `--only=<csv>` for locale scoping.)
- [x] Re-run the formatter from Step 3 across all 54 non-English locales so their blank-line formatting also gets normalized. (Built into the same script — re-serializing via `JSON.stringify(obj, null, '\t') + '\n'` collapses any stray blank lines as a side effect, so formatter + removal happen in one pass.)
- [x] Bump `@metadata.last-updated` on every touched file. (Script bumps to today on any file where keys were removed OR formatting changed. Files already in sync keep their historical date.)
- [x] Verify no language file is left with orphan keys (audit script re-run). (Re-run `node scripts/i18n-audit/step4-propagate-deletions.js --dry-run` reports 0 changes across 4,370 files — fully idempotent. `npm run build` clean across 55 locales × 81 pages × all prerendered paths.)

**Final Step 4 result:** Touched **4,108 files across 54 locales**, deleting **26,710 orphan keys** (vs. the 423 deleted from English in Step 2 — the extra ~26,287 is drift that accumulated from locales occasionally running ahead of English or carrying V0/V1 leftovers from before the audit infrastructure existed). Per-locale ranges: 294 (lt, smaller file set) / 470 (sw) / 497 (most locales) / 535 (hu, heaviest drift). 3 files had formatting-only rewrites (id × 2, pt × 1); all others needed at least one orphan key removed. Report written to `scripts/i18n-audit/step4-propagate-report.json`.

### Step 5 — Re-translate updated + new keys for every language

For each language, for every namespace: (a) find keys whose English value changed during V2 and update the translation, and (b) find keys present in English but missing in this language and translate them.

**🔄 Tooling refactor — 2026-04-23 (manifest-driven):** The original heuristic-based english-changed detection in `language-diff.js` had a file-level freshness-gate bug that silently skipped stale translations when the target file's `@metadata.last-updated` happened to equal English's (hit `am/bitcoin-vs-gold` after its `hero_title` write bumped the date to match English). Replaced with a deterministic **V2 manifest** (`scripts/i18n-audit/v2-manifest.json`, committed artifact) + per-locale marker (`scripts/i18n-audit/v2-refresh-status/<lang>.json`). See `.clinerules/workflows/manifest-translate-refresh.md` for the new workflow.

**📝 Manifest regeneration — 2026-04-24 (delta refresh):** Minor English text updates in commits `c88d7273..ef04b2a3` (about page, get-involved page, inflation page links, `/business/faq` links, and `bitcoin-vs-cash`/`bitcoin-vs-fine-art`/`bitcoin-vs-gold` `point_N_summary_M` prose) added **3 changed + 4 added** keys to English. The manifest was regenerated (`manifestVersion: d966f8c780c0c485...`, totals now **165 changed + 392 added = 557**), which invalidates every per-locale marker. The 7 already-completed locales (af, am, ar, az, bg, bn, ca) were retroactively refreshed in-place via `scripts/delta-refresh-2026-04-24/apply-delta.js` — a targeted helper that applies only the new delta (13 changed + 4 added per locale) and bumps each marker to the new manifestVersion without forcing a full re-translation of the other 540 manifest entries. All 7 locales PASS `verify-language.js` against the new manifest. Future locale refreshes will pick up the full 557-entry manifest.

**Tooling (manifest-driven):**
- `scripts/i18n-audit/snapshot-english.js` — captures current English corpus.
- `scripts/i18n-audit/build-v2-manifest.js` — builds the canonical manifest from preV2 + current snapshots. Emits `v2-manifest.json` with `changed` (165 entries as of 2026-04-24) + `added` (392 entries as of 2026-04-24) sections, sha256 `manifestVersion` hash.
- `scripts/i18n-audit/language-diff.js <code>` — manifest-aware diff, includes manifest entries unless the per-locale marker matches the current manifestVersion.
- `scripts/i18n-audit/apply-translations.js <code>` — applies translations, writes the per-locale marker after full manifest coverage, archives report, auto-runs verify-language.js.
- `scripts/i18n-audit/verify-language.js <code>` — unified audit (4 checks: marker version, locale-specific coverage, manifest coverage, stale pre-V2 English). Replaces the old `scripts/audit-translation.js` (deleted).

**Per-language workflow:** Run `/translate-manifest-refresh <Language Name>` — see `.clinerules/workflows/manifest-translate-refresh.md` for the full per-session procedure.


**Phase A+ follow-up (2026-04-23) — sticker-files namespace consolidation:** The `sticker-files/<lang>/index` per-language namespaces (all 43 slugs) were all empty shells after Step 2 stripped the dead `<lang>_header` / `<lang>_description` / `<lang>_bitcoin_sticker_files` keys — the V2 page at `app/[locale]/sticker-files/[lang]/page.tsx` builds the hero in-code from `common_language_<name>` keys. `scripts/i18n-audit/consolidate-sticker-files-langs.js` (a) lifted the one remaining live key — `print_these` ("PRINT THESE IN 1 CLICK") from `sticker-files/english/index` — into `common_<locale>.json` as `common_sticker_files_print_these`, preserving 29 locale-specific translations and falling back to English for the other 25, and (b) deleted all 2,365 `sticker-files/<lang>/` subdirectories across the 55 locales. Updated `lib/i18n/request.ts` `DEFAULT_NAMESPACES` to drop the 43 dead sticker-files entries, leaving just `sticker-files/index` (picker page). English snapshot regenerated: went from 81 → 38 namespaces / 1,849 keys. `npx tsc --noEmit` + `npm run build` clean. Net effect: Phase B translators no longer waste cycles on 43 empty namespaces per language.

- [x] **Phase A complete (2026-04-23):** Diff script + snapshot + apply-translations tooling + workflow file all in place.
- [x] **Phase A+ complete (2026-04-23):** 43 dead `sticker-files/<lang>/index` namespaces consolidated into `common_sticker_files_print_these` + `sticker-files/index`.
- [ ] For each language below, run the workflow, translate everything flagged, update `@metadata.last-updated`, and re-run `scripts/audit-translation.js <lang>` to confirm no English strings leaked in.

Languages (54 non-English — tick each off when its updated + missing keys are fully translated):

- [x] `af` — Afrikaans (2026-04-23; 916 entries → 0 flagged. Two helper scripts: `translate-inflation.js` (365 entries via templated per-currency translation function × 13 currencies) + `translate-rest.js` (551 entries across 36 namespaces, keyed by `<ns>::<key>` to disambiguate keys like `hero_title` that appear in every comparison namespace). Also expanded audit allow-lists in `scripts/i18n-audit/language-diff.js` + `scripts/audit-translation.js` to cover: home_link_author_* proper nouns, buy_country_* country names, common_language_* (Latin-script locales keep these identical), nostr client + platform brand names, business/wallets uppercase brand labels, inflation_stat_<code>_label currency tokens, dataset citations (FRED/BLS/Bitcoin whitepaper/Lightning paper/Jameson Lopp/James Lavish), and numeric tokens. Tightened `targetHasV2MarkerEquivalent` to skip the length-ratio check when English is ≤ 12 chars (fixes false-positive "likely-stale" on short tokens like "Source:"). `npm run build` clean across 4,349 static pages.)

- [x] `am` — Amharic (2026-04-23; 874 entries → 0 flagged. Report split across 3 helper scripts: `translate-inflation.js` (364 inflation entries via templated per-currency function × 13 currencies + 37 non-currency keys), `translate-rest.js` (502 entries across 37 namespaces keyed by `<ns>::<key>`), `retranslate-english-changed.js` (8 V2-rewritten English keys — 2 on the 404 page, 5 on /buy step headers, 1 on the sticker-files hero). Also tuned `scripts/i18n-audit/language-diff.js`: added `CBDC` to the SHORT_ALLOWED_IDENTICAL set (4-char brand acronym) and lowered `targetHasV2MarkerEquivalent`'s length-ratio lower bound from 0.75 to 0.55 so syllabic/abugida scripts (Ge'ez, Tibetan, etc. — Amharic naturally renders at ~60–70% of English length) don't trigger false-positive "likely-stale" flags on correct translations. Added "Lightning Network" to audit-translation.js's SKIP_VALUES (brand phrase kept verbatim). `npm run build` clean across 4,349 static pages.)
- [x] `ar` — Arabic (2026-04-23; 1,014 entries → 0 flagged. First locale refreshed after the manifest-driven refresh workflow was formalized (`.clinerules/workflows/manifest-translate-refresh.md`). Report broken into 3 helper scripts under `scripts/ar-manifest-refresh/`: `translate-inflation.js` (368 entries — 327 per-currency × 13 currencies via a templated function covering intro/proof/btc/freedom/stat suffixes, plus 41 non-currency keys including freedom cards, stories, sources, and 5 manifest-changed hero/intro keys), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages, with RTL-safe arrow characters and brand names like Silicon Valley Bank, FRED, FDIC preserved verbatim), and `translate-rest-part2.js` (453 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 60 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets). All 4 verification checks passed on first apply — marker, locale-specific coverage, manifest coverage, stale English cross-check. `npm run build` clean across 4,349 static pages. Arabic is RTL — the `<html dir="rtl">` wrapper from `app/[locale]/layout.tsx` handles layout automatically; no per-component changes needed.)
- [x] `az` — Azerbaijani (+ 2026-04-24 delta refresh: 13 changed + 4 added via `scripts/delta-refresh-2026-04-24/apply-delta.js`; marker re-pinned to `d966f8c780c0c485...`)
- [x] `bg` — Bulgarian (+ 2026-04-24 delta refresh: 13 changed + 4 added via `scripts/delta-refresh-2026-04-24/apply-delta.js`; marker re-pinned to `d966f8c780c0c485...`)
- [x] `bn` — Bengali (+ 2026-04-24 delta refresh: 13 changed + 4 added via `scripts/delta-refresh-2026-04-24/apply-delta.js`; marker re-pinned to `d966f8c780c0c485...`)
- [x] `ca` — Catalan (2026-04-23; 1,016 entries → 0 flagged. Report broken into 4 helper scripts under `scripts/ca-manifest-refresh/`: `translate-inflation.js` (368 entries — 327 per-currency × 13 currencies via templated function + 41 non-currency keys), `translate-rest-part1.js` (193 entries — 404 + about + bank-runs + all 10 bitcoin-vs-* comparison pages), `translate-rest-part2.js` (453 entries — business/* subtree, buy, common, compound-inflation-calculator, flyers, get-involved, index homepage with all 60 home card labels, lightning, nostr/index, sticker-files/*, sticker-language-success, sticker-success, stickers, wallets), and `fix-remaining.js` (2 untranslated keys: `common_stickers_dimensions` → "Mides:" and `common_stickers_material` → "Material de l'adhesiu:" — both spelled identically to English in standard Catalan, so needed locale-distinct rewording). All 4 verification checks passed on first apply — marker, locale-specific coverage, manifest coverage, stale English cross-check. `npm run build` clean across 4,349 static pages.)
- [ ] `cs` — Czech
- [ ] `da` — Danish
- [ ] `de` — German
- [ ] `el` — Greek
- [ ] `es` — Spanish
- [ ] `et` — Estonian
- [ ] `eu` — Basque
- [ ] `fa` — Persian
- [ ] `fi` — Finnish
- [ ] `fil` — Filipino
- [ ] `fr` — French
- [ ] `ga` — Irish
- [ ] `ha` — Hausa
- [ ] `he` — Hebrew
- [ ] `hi` — Hindi
- [ ] `hr` — Croatian
- [ ] `hu` — Hungarian
- [ ] `id` — Indonesian
- [ ] `it` — Italian
- [ ] `ja` — Japanese
- [ ] `ko` — Korean
- [ ] `lt` — Lithuanian
- [ ] `ms` — Malay
- [ ] `my` — Burmese
- [ ] `nb` — Norwegian (Bokmål)
- [ ] `nl` — Dutch
- [ ] `ny` — Chichewa
- [ ] `pa` — Punjabi
- [ ] `pl` — Polish
- [ ] `pt` — Portuguese
- [ ] `ro` — Romanian
- [ ] `ru` — Russian
- [ ] `si` — Sinhala
- [ ] `sk` — Slovak
- [ ] `sl` — Slovenian
- [ ] `sv` — Swedish
- [ ] `sw` — Swahili
- [ ] `ta` — Tamil
- [ ] `th` — Thai
- [ ] `tl` — Tagalog
- [ ] `tr` — Turkish
- [ ] `ur` — Urdu
- [ ] `uz` — Uzbek
- [ ] `vi` — Vietnamese
- [ ] `yo` — Yoruba
- [ ] `zh` — Chinese
- [ ] `zu` — Zulu

### Step 6 — Final verification

- [ ] Run `scripts/audit-translation.js` across **all** non-English locales; zero English-leak findings.
- [ ] Re-run the unused-keys audit from Step 1 to confirm no new dead keys crept in during the V2 pass.
- [ ] Re-run the formatter from Step 3 one more time across `i18n/**/*.json` to catch any blank-line regressions introduced while translating.
- [ ] Spot-check 3–5 random pages in 3–5 random languages (including one RTL) against the live site to confirm rendered copy looks right.
- [ ] Verify all `@metadata.last-updated` fields are current.
- [ ] Re-build and check `app/sitemap.ts` still emits every locale × slug combination.
- [ ] Update `memory-bank/progress.md` + `memory-bank/activeContext.md` to note the i18n cleanup is complete.

---

## Summary counts


| Category | Total | Done |
|---|---:|---:|
| Top-level content pages | 5 | 5 |
| Comparison pages | 10 | 10 |
| Educational / utility | 5 | 5 |
| Form pages | 1 | 1 |
| Form success pages | 2 | 2 |
| Business section | 11 | 11 |
| Nostr section | 1 | 1 |
| Sticker-files (index + 44) | 45 | 45 |
| Special / 404 | 1 | 1 |
| **Total pages** | **81** | **81** |



| Component / pattern | Total | Done |
|---|---:|---:|
| Shared components | 25 | ~8 |
| Cross-cutting patterns | 6 | 2 |

| i18n cleanup | Total | Done |
|---|---:|---:|
| English audit + dead-key removal (Steps 1–2) | 6 | 6 |
| English JSON formatting normalization (Step 3) | 4 | 4 |
| Source-side hardcoded-English audit (Step 3.5) | 10 | 10 |
| Propagate deletions + formatter to other languages (Step 4) | 4 | 4 |
| Per-language re-translation (Step 5) | 54 | 7 |
| Verification & cleanup (Step 6) | 7 | 0 |



---

_Last updated: 2026-04-24 (delta refresh — minor English text updates across `about`, `get-involved`, `bitcoin-vs-cash`/`-fine-art`/`-gold`, `inflation` links, `/business/faq` links in commits `c88d7273..ef04b2a3` produced 3 changed + 4 added manifest keys. Regenerated `v2-manifest.json` (now 165 changed + 392 added = 557; manifestVersion `d966f8c780c0c485...`), and wrote `scripts/delta-refresh-2026-04-24/apply-delta.js` to retroactively patch the 7 Step-5-completed locales (af, am, ar, az, bg, bn, ca) in-place with the delta — 13 changed + 4 added translations per locale across 5 namespaces (`about`, `get-involved`, `bitcoin-vs-cash`, `bitcoin-vs-fine-art`, `bitcoin-vs-gold`), including the new `get_involved_biz_stickers_note` / `_card_biz_stickers_label` / `_title` / `_source` keys, and the Wikipedia India / gold.org supply-and-demand inline `<a class="body-link">` HTML wrapped into the updated `point_N_summary_1` strings. Each locale's marker at `scripts/i18n-audit/v2-refresh-status/<lang>.json` re-pinned to the new manifestVersion. All 7 locales PASS `verify-language.js` (marker ✅ / locale-specific ✅ / manifest coverage ✅ / stale pre-V2 English ✅). `npm run build` clean across 55 locales × 81 pages (~4,349 static pages). The delta approach avoids forcing a full 557-entry re-translation of already-done locales — new per-locale translation sessions that run `/translate-manifest-refresh` for the remaining 47 languages will naturally pick up the full 557 keys in one pass. **Previously:** i18n cleanup Steps 1–3 + 3.5 complete. Step 3.5 (source-side hardcoded-English audit) added `find-hardcoded-strings.js` + `hardcoded-strings-allowlist.js` + three remediation scripts. Scanner catches user-facing English literals in `.tsx`/`.ts` across four kinds (JSX text, user-facing attributes, Next.js metadata fields, schema.org builder fields). Initial scan flagged 97 genuine findings across 20 files; all fixed by adding 51 new English i18n keys across 9 namespaces, rewriting 55 source-citation anchor texts to `{t(...)}`, swapping 4 inline `description` metadata literals for translated `descriptionKey` / `t()` calls, translating `LanguageSwitcher`'s "Add language" via `useTranslations()`, and refactoring `app/[locale]/layout.tsx` into an `async generateMetadata()` that resolves `description` from `common_site_tagline`. Allow-list covers only legitimate English: brand names, schema.org spec constants, try/catch fallbacks, canonical FRED/BLS dataset names. Final scanner state: 0 findings. Final unused-keys state: 0 dead keys. Clean `npm run typecheck` + `npm run build` across all 55 locales × 81 pages. Step 3 originally: Added `scripts/i18n-audit/` with three discrete Node scripts: Added `scripts/i18n-audit/` with three discrete Node scripts: `find-unused-keys.js` grep-scans `app/` + `components/` + `lib/` for literal key references and diffs against every key in `i18n/en/**/*.json`; `remove-unused-keys.js` strips the confirmed dead keys from English files with tab indentation preserved + `@metadata.last-updated` bumped; `normalize-json-formatting.js` re-serializes via `JSON.stringify(obj, null, '\t')` to collapse any stray blank lines. Also added `dynamic-keys-allowlist.js` so the 325 `inflation_<code>_<suffix>` + `inflation_stat_<code>_<suffix>` keys that `components/CurrencySection.tsx` synthesizes at runtime from `inflation_${lower}_${suffix}` template literals aren't false-flagged. **Deleted 423 dead keys across 74 English namespaces** — highlights: 98 in `common_en.json` (legacy FAQ/kit/inflation-cause copy from the V1 homepage and /about), 98 in `inflation_en.json` (old `inflation_cause_*` / `inflation_choose_*` / `inflation_intro_*` / `inflation_stat_source_*` / etc. prose keys replaced by the V2 stat-card system), 9 in `bitcoin-vs-gold` / 8 in `bitcoin-vs-stocks` / 4 each in the other 8 comparison files (the legacy 4-part H1 `<asset>_header` / `_2` / `_3` / `_4` keys and unused `point_N_summary_M` prose fragments), 6 in `business/stickers` (V1 three-country layout), 3 per-language sticker-files keys × 43 languages (`<lang>_header` / `<lang>_description` / `<lang>_bitcoin_sticker_files` — the V2 per-language template builds the H1 in-code via `formatHeading(titleCaseWord(langName))`), plus all 7 orphan `home_link_*` + `home_description` entries in the homepage index and the 3 `sticker_success_flyers_bar_*` + `sticker_success_2` leftovers. `npm run build` green across all 55 locales × 81 pages post-deletion. Step 3's normalizer reports all 81 English files already canonical because Step 2's removal pass re-serialized every touched file with the canonical tab-indented formatter — spot-checked `bitcoin-vs-stocks` / `inflation` / `business/why` / `business/wallets` / `bitcoin-vs-gold` and confirmed zero blank lines between keys. **Step 4 update (2026-04-23):** Added `scripts/i18n-audit/step4-propagate-deletions.js`, which for each non-English file loads the current English key set and filters the non-English file down to it, then re-serializes with the canonical tab-indented formatter. This approach catches both the 423 keys Step 2 removed AND any older drift that accumulated from locales running ahead of English or carrying V0/V1 leftovers. **Touched 4,108 files across 54 locales, deleting 26,710 orphan keys** (cluster around 497 per locale; outliers: lt=294 smaller file set, sw=470, hu=535 heaviest drift). Re-running in `--dry-run` reports 0 changes across 4,370 files — fully idempotent. `npm run build` clean across 55 locales × 81 pages. `@metadata.last-updated` bumped on every touched file. Report at `scripts/i18n-audit/step4-propagate-report.json`. Remaining: Steps 5–6 (per-language re-translation, final verification).)_


