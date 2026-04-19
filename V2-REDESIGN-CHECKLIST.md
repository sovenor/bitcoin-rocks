# V2 Redesign Checklist

A complete inventory of every page, shared component, and cross-cutting UI pattern on bitcoin.rocks. Use this to track V2 design-system migration progress. Check off an item once it has been fully ported to V2 (Navbar, V2 typography, semantic color tokens, `--card-accent`, `.whats-next-card`, sources section, published-date section, etc.).

Legend:
- [x] = Completed in V2
- [ ] = Still on V1 (or not yet migrated)

---

## 🧩 Shared Components & Global UI

These are cross-cutting pieces that appear on many/all pages. They should be verified once and then assumed consistent everywhere.

- [x] **Navbar** (`components/Navbar.tsx`) — logo-on-top-of-pill nav bar (Learn / Get Involved / About / Language)
- [ ] **DynamicHeader** (`components/DynamicHeader.tsx`) — audit whether still used / needs V2 treatment
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
- [ ] **WalletAccordion** (`components/WalletAccordion.tsx`)
- [ ] **NostrAccordion** (`components/NostrAccordion.tsx`)
- [ ] **NostrPageLayout** (`components/NostrPageLayout.tsx`)
- [ ] **BusinessPageShell** (`components/BusinessPageShell.tsx`)
- [ ] **BusinessResourceCards** (`components/BusinessResourceCards.tsx`)
- [ ] **BusinessWalletCard** (`components/BusinessWalletCard.tsx`)
- [ ] **StickerPicker** (`components/StickerPicker.tsx`)
- [ ] **StickerAddressForm** (`components/StickerAddressForm.tsx`)
- [ ] **PrintFlyerButton** (`components/PrintFlyerButton.tsx`)
- [ ] **404 / catch-all page** (`app/not-found.tsx` + `app/[locale]/[...rest]/page.tsx`)
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
- [ ] **About** — `/about`
- [ ] **Get Involved** — `/get-involved`

### Tier 2 — Bitcoin vs. comparison pages (11)

- [ ] **Bitcoin vs Gold** — `/bitcoin-vs-gold`
- [ ] **Bitcoin vs Stocks** — `/bitcoin-vs-stocks`
- [ ] **Bitcoin vs Cash** — `/bitcoin-vs-cash`
- [ ] **Bitcoin vs Banks** — `/bitcoin-vs-banks`
- [ ] **Bitcoin vs Bonds** — `/bitcoin-vs-bonds`
- [ ] **Bitcoin vs Real Estate** — `/bitcoin-vs-real-estate`
- [ ] **Bitcoin vs Crypto** — `/bitcoin-vs-crypto`
- [ ] **Bitcoin vs Visa** — `/bitcoin-vs-visa`
- [ ] **Bitcoin vs CBDC** — `/bitcoin-vs-cbdc`
- [ ] **Bitcoin vs Fine Art** — `/bitcoin-vs-fine-art`

### Tier 3 — Educational / utility pages

- [ ] **Wallets** — `/wallets`
- [ ] **Lightning** — `/lightning`
- [ ] **Flyers** — `/flyers`
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

- [ ] **Sticker Files (index)** — `/sticker-files`
- [ ] **Sticker Files template** (`[lang]/page.tsx`) — the shared per-language shell

Individual language pages:

- [ ] `/sticker-files/afrikaans`
- [ ] `/sticker-files/arabic`
- [ ] `/sticker-files/basque`
- [ ] `/sticker-files/bulgarian`
- [ ] `/sticker-files/catalan`
- [ ] `/sticker-files/chinese`
- [ ] `/sticker-files/croatian`
- [ ] `/sticker-files/czech`
- [ ] `/sticker-files/danish`
- [ ] `/sticker-files/dutch`
- [ ] `/sticker-files/english`
- [ ] `/sticker-files/estonian`
- [ ] `/sticker-files/filipino`
- [ ] `/sticker-files/finnish`
- [ ] `/sticker-files/french`
- [ ] `/sticker-files/german`
- [ ] `/sticker-files/greek`
- [ ] `/sticker-files/hausa`
- [ ] `/sticker-files/hebrew`
- [ ] `/sticker-files/hindi`
- [ ] `/sticker-files/hungarian`
- [ ] `/sticker-files/indonesian`
- [ ] `/sticker-files/irish`
- [ ] `/sticker-files/italian`
- [ ] `/sticker-files/japanese`
- [ ] `/sticker-files/korean`
- [ ] `/sticker-files/malay`
- [ ] `/sticker-files/norwegian`
- [ ] `/sticker-files/persian`
- [ ] `/sticker-files/polish`
- [ ] `/sticker-files/portuguese`
- [ ] `/sticker-files/russian`
- [ ] `/sticker-files/sinhala`
- [ ] `/sticker-files/slovak`
- [ ] `/sticker-files/slovenian`
- [ ] `/sticker-files/spanish`
- [ ] `/sticker-files/swahili`
- [ ] `/sticker-files/swedish`
- [ ] `/sticker-files/thai`
- [ ] `/sticker-files/turkish`
- [ ] `/sticker-files/urdu`
- [ ] `/sticker-files/vietnamese`
- [ ] `/sticker-files/yoruba`

### Special routes

- [ ] **404 page** — `app/not-found.tsx` (root) and `app/[locale]/[...rest]/page.tsx` (locale-aware catch-all)

---

## Summary counts

| Category | Total | Done |
|---|---:|---:|
| Top-level content pages | 5 | 3 |
| Comparison pages | 10 | 0 |
| Educational / utility | 5 | 0 |
| Form pages | 3 | 0 |
| Form success pages | 4 | 0 |
| Business section | 13 | 0 |
| Nostr section | 2 | 0 |
| Sticker-files (index + 44) | 45 | 0 |
| Special / 404 | 1 | 0 |
| **Total pages** | **88** | **3** |

| Component / pattern | Total | Done |
|---|---:|---:|
| Shared components | 25 | ~8 |
| Cross-cutting patterns | 6 | 2 |

---

_Last updated: 2026-04-19_
