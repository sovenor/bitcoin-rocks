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

### Step 4 — Propagate deletions to all other languages

- [ ] Extend the removal script to iterate over all 54 non-English locales and delete the same key set from each language's JSON files.
- [ ] Re-run the formatter from Step 3 across all 54 non-English locales so their blank-line formatting also gets normalized.
- [ ] Bump `@metadata.last-updated` on every touched file.
- [ ] Verify no language file is left with orphan keys (audit script re-run).

### Step 5 — Re-translate updated + new keys for every language


For each language, for every namespace: (a) find keys whose English value changed during V2 and update the translation, and (b) find keys present in English but missing in this language and translate them.

- [ ] Write a diff script (`scripts/i18n-audit/language-diff.js <lang>`) that reports, per language: **updated keys** (English source changed since that language was last touched — compare against `@metadata.last-updated` or a snapshot hash) and **missing keys** (present in English, absent here).
- [ ] For each language below, run the diff, translate everything flagged, update `@metadata.last-updated`, and re-run `scripts/audit-translation.js <lang>` to confirm no English strings leaked in.

Languages (54 non-English — tick each off when its updated + missing keys are fully translated):

- [ ] `af` — Afrikaans
- [ ] `am` — Amharic
- [ ] `ar` — Arabic
- [ ] `az` — Azerbaijani
- [ ] `bg` — Bulgarian
- [ ] `bn` — Bengali
- [ ] `ca` — Catalan
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
| Propagate deletions + formatter to other languages (Step 4) | 4 | 0 |
| Per-language re-translation (Step 5) | 54 | 0 |
| Verification & cleanup (Step 6) | 7 | 0 |

---

_Last updated: 2026-04-23 (i18n cleanup Steps 1–3 complete. Added `scripts/i18n-audit/` with three discrete Node scripts: `find-unused-keys.js` grep-scans `app/` + `components/` + `lib/` for literal key references and diffs against every key in `i18n/en/**/*.json`; `remove-unused-keys.js` strips the confirmed dead keys from English files with tab indentation preserved + `@metadata.last-updated` bumped; `normalize-json-formatting.js` re-serializes via `JSON.stringify(obj, null, '\t')` to collapse any stray blank lines. Also added `dynamic-keys-allowlist.js` so the 325 `inflation_<code>_<suffix>` + `inflation_stat_<code>_<suffix>` keys that `components/CurrencySection.tsx` synthesizes at runtime from `inflation_${lower}_${suffix}` template literals aren't false-flagged. **Deleted 423 dead keys across 74 English namespaces** — highlights: 98 in `common_en.json` (legacy FAQ/kit/inflation-cause copy from the V1 homepage and /about), 98 in `inflation_en.json` (old `inflation_cause_*` / `inflation_choose_*` / `inflation_intro_*` / `inflation_stat_source_*` / etc. prose keys replaced by the V2 stat-card system), 9 in `bitcoin-vs-gold` / 8 in `bitcoin-vs-stocks` / 4 each in the other 8 comparison files (the legacy 4-part H1 `<asset>_header` / `_2` / `_3` / `_4` keys and unused `point_N_summary_M` prose fragments), 6 in `business/stickers` (V1 three-country layout), 3 per-language sticker-files keys × 43 languages (`<lang>_header` / `<lang>_description` / `<lang>_bitcoin_sticker_files` — the V2 per-language template builds the H1 in-code via `formatHeading(titleCaseWord(langName))`), plus all 7 orphan `home_link_*` + `home_description` entries in the homepage index and the 3 `sticker_success_flyers_bar_*` + `sticker_success_2` leftovers. `npm run build` green across all 55 locales × 81 pages post-deletion. Step 3's normalizer reports all 81 English files already canonical because Step 2's removal pass re-serialized every touched file with the canonical tab-indented formatter — spot-checked `bitcoin-vs-stocks` / `inflation` / `business/why` / `business/wallets` / `bitcoin-vs-gold` and confirmed zero blank lines between keys. Remaining: Steps 4–6 (propagate same deletions to the other 54 locales, re-translate updated + new V2 keys per-language, final verification).)_


