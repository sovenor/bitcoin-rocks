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
- [ ] **CompoundInflationCalculator** (`components/CompoundInflationCalculator.tsx`) — embedded on inflation page
- [ ] **CompoundInflationCalculatorSolo** (`components/CompoundInflationCalculatorSolo.tsx`) — standalone calc page
- [x] **InflationStats** (`components/InflationStats.tsx`)
- [x] **FdicStats** (`components/FdicStats.tsx`)
- [ ] **BuyFlow** (`components/BuyFlow.tsx`)
- [x] **WalletAccordion** (`components/WalletAccordion.tsx`)

- [ ] **NostrAccordion** (`components/NostrAccordion.tsx`)
- [ ] **NostrPageLayout** (`components/NostrPageLayout.tsx`)
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

- [ ] **Compound Inflation Calculator** — `/compound-inflation-calculator`
- [ ] **Buy** — `/buy`

### Tier 4 — Form pages

- [ ] **Stickers** — `/stickers`
- [ ] **Signs** — `/signs`
- [ ] **Postcards** — `/postcards`

### Tier 5 — Form success pages

- [ ] **Sticker Success** — `/sticker-success`
- [ ] **Sign Success** — `/sign-success`
- [ ] **Postcard Success** — `/postcard-success`
- [ ] **Sticker Language Success** — `/sticker-language-success`

### Tier 6 — Business section (13)

- [ ] **Business (index)** — `/business`
- [ ] **Business — Why** — `/business/why`
- [ ] **Business — FAQ** — `/business/faq`
- [ ] **Business — Guide** — `/business/guide`
- [ ] **Business — Wallets** — `/business/wallets`
- [ ] **Business — Accounting** — `/business/accounting`
- [ ] **Business — Stickers** — `/business/stickers`
- [ ] **Business — Maps** — `/business/maps`
- [ ] **Business — Kit** — `/business/kit`
- [ ] **Business — Kit Success** — `/business/kit-success`
- [ ] **Business — Maps Success** — `/business/maps-success`
- [ ] **Business — Sticker Success** — `/business/sticker-success`
- [ ] **Business — Sticker Language Success** — `/business/sticker-language-success`

### Tier 7 — Nostr section

- [ ] **Nostr (index)** — `/nostr`
- [ ] **Nostr — What is Nostr** — `/nostr/what-is-nostr`

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

- [ ] Write an audit script (`scripts/i18n-audit/find-unused-keys.js`) that greps the whole `app/`, `components/`, and `lib/` tree for every key referenced via `t('…')`, `getTranslations()`, `useTranslations()`, etc., then diffs against every key in `i18n/en/**/*.json`.
- [ ] Produce a per-namespace report of unused English keys (`scripts/i18n-audit/unused-keys-report.json`).
- [ ] Manually review the report to confirm each "unused" key really is dead (watch out for dynamic keys built via string concatenation / template literals — e.g. `t(\`platform_\${id}_name\`)`).
- [ ] Flag any dynamic-key patterns so the audit script can be taught to recognize them (allow-list file).

### Step 2 — Delete dead keys from English

- [ ] Write a removal script (`scripts/i18n-audit/remove-unused-keys.js`) that takes the confirmed unused-keys list and strips them from every `i18n/en/**/*.json` file, preserving tab indentation and `@metadata`.
- [ ] Bump `@metadata.last-updated` on every touched English file.
- [ ] Run `npm run build` to confirm nothing regresses (no missing-key fallbacks, no broken pages).
- [ ] Commit the English cleanup as a discrete PR so translators can see a clean diff of what was removed.

### Step 3 — Propagate deletions to all other languages

- [ ] Extend the removal script to iterate over all 54 non-English locales and delete the same key set from each language's JSON files.
- [ ] Bump `@metadata.last-updated` on every touched file.
- [ ] Verify no language file is left with orphan keys (audit script re-run).

### Step 4 — Re-translate updated + new keys for every language

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

### Step 5 — Final verification

- [ ] Run `scripts/audit-translation.js` across **all** non-English locales; zero English-leak findings.
- [ ] Re-run the unused-keys audit from Step 1 to confirm no new dead keys crept in during the V2 pass.
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
| Educational / utility | 5 | 3 |
| Form pages | 3 | 0 |
| Form success pages | 4 | 0 |
| Business section | 13 | 0 |
| Nostr section | 2 | 0 |
| Sticker-files (index + 44) | 45 | 45 |
| Special / 404 | 1 | 1 |
| **Total pages** | **88** | **64** |


| Component / pattern | Total | Done |
|---|---:|---:|
| Shared components | 25 | ~8 |
| Cross-cutting patterns | 6 | 2 |

| i18n cleanup | Total | Done |
|---|---:|---:|
| English audit + dead-key removal (Steps 1–2) | 6 | 0 |
| Per-language re-translation (Steps 3–4) | 54 | 0 |
| Verification & cleanup (Step 5) | 6 | 0 |

---

_Last updated: 2026-04-22 (Flyers page migrated to V2)_

