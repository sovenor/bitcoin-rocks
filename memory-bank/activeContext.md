# Active Context: bitcoin.rocks

## Latest: Next.js Migration — Phase 1 scaffold complete — April 17, 2026

First commit of the Next.js 16 / React 19 / TypeScript / Tailwind v4 rewrite on the `v2-nextjs-redesign` branch. The static site on `main` is completely untouched — Railway production deploy keeps serving the existing HTML until the cutover commit at the end of Phase 15.

### What Phase 1 delivered
- **Stack choice**: Next.js 16.2.4 + React 19 + TypeScript 5.6 + Tailwind v4 (matches sibling project `vote-for-better-money`).
- **Manual scaffold** (no `create-next-app` — wrote each file deterministically): `package.json`, `tsconfig.json`, `next-env.d.ts`, `next.config.ts`, `postcss.config.mjs`, `eslint.config.mjs`.
- **Design tokens via Tailwind v4 `@theme` block** in `app/globals.css` — v4 is CSS-first, so no `tailwind.config.ts`. All 21 brand/topic accent colors (bitcoin-orange, energy, freedom, money, saving, salary, art, politics, war, coding, ai, networks, self-custody, property-rights, business, environment, crowdfunding, housing, equality, food, payments, gold, cash, human-rights, get-started) are token-driven, usable as `text-energy` / `bg-freedom` / `border-money` utilities. Font tokens: `proxima`, `proxima-soft`. Breakpoints: `xs: 400px`, `md: 700px` (matching old `css/style.css` media queries).
- **Routing**: `/` → 307 to `/en` (Phase 1 placeholder; Phase 2 middleware will replace with Accept-Language detection). `/[locale]` serves a minimal "Next.js migration in progress" placeholder page.
- **Root layout** (`app/layout.tsx`): pass-through that forwards `{children}` so per-locale `<html lang dir>` can live in `app/[locale]/layout.tsx`.
- **Locale layout** (`app/[locale]/layout.tsx`): emits correct `<html lang={locale} dir={ltr|rtl}>`, loads Adobe Typekit kit `ful2oqu.css` (the actual kit used by the live site — NOT `ghu2hdm` as the migration plan originally guessed), GA gtag snippet with `G-18L58W2GTN`, favicon metadata from `/favicons/`. RTL set: `ar`, `fa`, `he`, `ur`.
- **Static assets**: copied `img/` (69 MB) → `public/img/`, `img/favicons/` (500 KB) → `public/favicons/`. Originals kept on disk for reference until Phase 14 cleanup.
- **next.config.ts**: `turbopack.root = __dirname`, `images.formats = ["image/webp"]`, security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy), long-cache headers for `/img/*` and `/favicons/*`, empty `redirects()` (Phase 13 will populate).
- **Verification**: `npm install` → 359 packages, 0 vulnerabilities. `npm run build` → ✓ compiled in 1615ms, TypeScript clean, routes `/` (static), `/_not-found`, `/[locale]` (dynamic). `npm run dev` → `GET /en` returns 200 with placeholder HTML, `GET /` returns 307 → `/en`.
- **.gitignore** updated: added `legacy/`, `node_modules/`, `.next/`, `*.tsbuildinfo`, `.turbo/`, `.vercel/`, `.env*` — in addition to the pre-existing `forms-backend/data/` and macOS entries.

### Deliberately left alone
- All root `*.html` files (index, inflation, bank-runs, all bitcoin-vs-*, business/*, nostr/*, sticker-files/*, *success*, 404) — the old static site still fully works on the local filesystem as source-of-truth reference for each port.
- `css/style.css` — reference for the brand color palette and V2 component styles; NOT imported by Next.
- `jquery/` — reference for `home-carousel.js`, `language.js`, `country-selector-*.js`, `compound-inflation-calculator*.js`, `sticker-picker.js`, `buy-flow.js`, `dynamic-header.js`, `inflation-stats.js`. Each will be ported to a React Client Component during Phases 3/5/6/9.
- `i18n/` directory — the JSON translation files (English + 54 other languages) will be read directly by `next-intl` in Phase 2. No file format change needed.
- `forms-backend/` — separate Railway service, untouched. Next frontend will POST to its existing URLs from Phase 9b onward.
- `scripts/inject-*.js` pipeline — still used for the current static site. Phase 4 will replace them with TypeScript helpers that run at page-render time.
- `main` branch at `origin/main` (`6cb07406`) — frozen. Railway keeps deploying current static site; we only merge to `main` on cutover day (Phase 15).

### Files created in Phase 1
```
app/globals.css
app/layout.tsx
app/page.tsx
app/[locale]/layout.tsx
app/[locale]/page.tsx
next.config.ts
next-env.d.ts
package.json
postcss.config.mjs
tsconfig.json
eslint.config.mjs
.gitignore               (rewritten)
public/favicons/…        (copied from img/favicons/)
public/img/…             (copied from img/)
```

### Next up: Phase 2 — i18n wiring with `next-intl`
Install `next-intl`, add `middleware.ts` for Accept-Language detection → locale redirect, mirror the `jquery/language.js` language list into `lib/i18n/config.ts`, build a message loader for the existing `i18n/<lang>/*_<lang>.json` file convention, and verify `/en`, `/es`, `/ar`, `/zh` each render their own translated test string. See `MIGRATION-NEXTJS.md` Phase 2 for full checklist.

---

## Previous: Homepage v2 Polish — April 17, 2026
Follow-up polish to the v2 homepage that shipped yesterday. Five focused fixes:

1. **Carousel: pill reorder to keep bright-green pills apart.** `energy` (#1DFF4D) and `money` (#19BC38) are both green, so they read as a single smudge when adjacent. Row 1's new order:
   - `money → saving → freedom → human-rights → equality → property-rights → energy → housing → business → crowdfunding → salary`
   - `energy` now lives mid-row between property-rights (pink) and housing (brown).
   - The infinite-loop seam goes `salary` (blue) → `money` (green) — highest-contrast boundary available.
   - The reorder applies to **both** the first set and the duplicated set of pills (required for seamless loop).

2. **Carousel: true infinite loop driven by JS instead of CSS @keyframes.** Replaced the pure-CSS `@keyframes home-carousel-scroll-left/right` animation with a `requestAnimationFrame` loop in `jquery/home-carousel.js` that:
   - Drives the track via `row.scrollLeft += AUTO_SPEED_PX_PER_SEC * dt * direction` (30 px/s).
   - Wraps around when `scrollLeft` crosses `track.scrollWidth / 2` in either direction — invisible because the pills are duplicated 2× in the DOM.
   - Applies the same wrap-around on `mousemove` + `scroll` events, so **drag works in both directions without hitting a wall** and never reveals empty space (the two bugs in the old CSS-only implementation).
   - Recalculates `halfWidth` on `resize` + `document.fonts.ready` in case translated pill widths change.
   - CSS `@keyframes` + `.home-carousel-row:hover` pause rules removed (now handled via JS `paused` flag). Added a comment to `.home-carousel-track` explaining the scroll is now JS-driven.

3. **Solo card full-width on all screen sizes.** Added `.whats-next-grid > a.whats-next-card:only-child { grid-column: 1 / -1; }` so sections like "bitcoin & your salary" and "bitcoin & housing" span the full row at every breakpoint, not just mobile. Zero-code-change to the HTML — purely CSS.

4. **Energy section trimmed from 6 → 4 cards.** Removed:
   - "Why does Bitcoin use energy?" (bitcoinuses.energy)
   - "Bitcoin's energy usage isn't a problem. Here's why." (Lyn Alden)
   - Also removed now-unused keys from `i18n/en/index_en.json`: `home_card_label_energy_2`, `home_card_label_energy_3`, `home_link_title_energy_2`, `home_link_title_energy_3`, `home_link_author_bitcoin_uses_energy`.

5. **"bitcoin & money" split into two sections.** The money section had 7 cards (two were about "which is better" comparisons that are really about savings/investment). Now:
   - **money** (4 cards): Bitcoin doesn't have inflation, Bitcoin doesn't have bank runs, Bitcoin vs Gold, Bitcoin vs Cash
   - **saving** (3 cards, new section, color `#F5A9B8` soft pink): Bitcoin vs CBDCs, Bitcoin vs Bonds, Bitcoin vs Crypto
   - New pill `saving` added in row 1 between `money` and `freedom` (so money-saving-salary form a logical group).
   - New i18n key `home_btn_saving = "saving"` added.
   - New `.home-pill.saving` / `span.saving` / `.saving` color class in `css/style.css` (`color: #F5A9B8 !important`).
   - Added `.home-pill.saving` to the border-inheritance list so the border matches the text color.

### Files changed
- `jquery/home-carousel.js` — rewritten as RAF-driven infinite scroll
- `css/style.css`
  - Removed `@keyframes home-carousel-scroll-left/right` + `animation` rules + `:hover`/`is-dragging`/`is-paused` pause rules
  - Added `.whats-next-grid > a.whats-next-card:only-child { grid-column: 1 / -1 }`
  - Added `.saving` color class (soft pink `#F5A9B8`)
  - Added `.home-pill.saving` to the `border-color: currentColor` list
- `index.html`
  - Row 1 carousel reordered (first set + duplicate set)
  - Added `saving` pill to row 1 in both sets
  - Money section trimmed to 4 cards
  - New Saving section with 3 cards (CBDCs, Bonds, Crypto) inserted between money and salary
  - Energy section trimmed to 4 cards
  - CSS + JS cache-buster bumped to `v=1.4.0`
  - WebPage JSON-LD `dateModified` bumped to 2026-04-17
  - Updated carousel HTML comment to reflect the new JS-driven loop mechanism
- `i18n/en/index_en.json`
  - Added `home_btn_saving = "saving"` (inserted right after `home_btn_money`)
  - Removed 5 unused energy keys
  - `@metadata.last-updated` bumped to 2026-04-17
- `scripts/update-index-i18n-for-saving.js` — one-shot helper script (ran once, can be deleted but left in place for reference)
- `scripts/inject-seo-content.js` ran clean (0 changes — HTML was already in sync)
- `memory-bank/activeContext.md` + `progress.md` updated

### i18n note
Only `i18n/en/index_en.json` was modified. Translation files for the other 54 languages retain their existing keys and will gracefully fall back to English for `home_btn_saving` until translators provide their own translations. This matches the established pattern for adding new homepage strings (see Homepage v2 Redesign — Apr 16 for precedent). The removed energy keys are orphaned in other language files but cause no functional issue.

---

## Latest: Homepage (v2) Redesign — April 16, 2026 (pt. 3)
- **Rebuilt the entire homepage (`/`)** to match the new `/inflation` page design system. This is the second page to use the new visual language (after `/inflation`) and establishes the pattern other pages will gradually migrate to.
- **Hero**: now uses a centered Proxima Nova Bold orange H1 (`.h1-inflation`) + grey `.inflation-intro` paragraph — same typography and sizes as `/inflation`. Replaced the old image-logo + `.home-h1`/`.home-intro` layout.
- **Navigation**: replaced the old v1 site-nav with `.site-nav--v2` (logo-on-top-of-pill) exactly matching `/inflation`.
- **Category carousels**: two horizontal infinite-scroll rows of lowercase colored "pills" replaced the old static `.container-jump` + `.jump` button grid.
  - Pure CSS `@keyframes` animation (`home-carousel-scroll-left` / `home-carousel-scroll-right`), 120s linear loop, row 2 starts at `-50%` offset and scrolls the opposite direction.
  - Pills are **duplicated inline** in the HTML (2× each set) so the keyframes can `translateX(-50%)` seamlessly — no JS required for the loop.
  - `:hover` pauses the animation via `animation-play-state: paused` (CSS-only).
  - `overflow-x: auto` + `scrollbar-width: none` + `::-webkit-scrollbar { display: none }` hides the scrollbar while still allowing native touch/mouse scroll.
  - New `jquery/home-carousel.js` adds drag-to-scroll (mouse + touch), click-suppression after drag, and smooth anchor scroll.
  - Pills use Proxima Soft (per request) with border + text in the existing category color classes (`.money`, `.freedom`, `.energy`, etc.) — which already existed from v1.
- **Category sections**: replaced all 20 `.text-box.top/.middle/.bottom` stacks with new `.category-section` wrappers that reuse the `.whats-next-section` / `.whats-next-grid` / `.whats-next-card` pattern from `/inflation`.
  - Heading format: "Bitcoin & **category**" with the accent word colored via `span.accent { color: var(--card-accent) }`.
  - Each section sets its color via inline `style="--card-accent: #XXXXXX"`.
  - Card labels (the colored descriptive text like "Full reserve system") now also inherit from `--card-accent` — the `.whats-next-card-label` rule was updated to `color: var(--card-accent, #FF9500)`, so `/inflation` still gets orange labels by default.
  - All 50+ original homepage cards + external links preserved, redistributed across the 20 sections (money, your salary, freedom, human rights, equality, property rights, housing, business, crowdfunding, energy, the environment, food, art, politics, war, coding, networks, payments, self-custody, you).
- **i18n refactor (`i18n/en/index_en.json`)**:
  - Added `home_nav_learn`, `home_nav_get_involved`, `home_nav_about` for the new pill nav.
  - Added `home_h1` for the hero headline.
  - Updated `home_intro` to the shorter "Tap on a category… or just start scrolling" copy.
  - Updated all `home_btn_*` values to **lowercase sentence-style** ("money", "your salary", "the environment") per mockup.
  - Added 40+ new `home_card_label_*` keys — one descriptive topic label per card (e.g., "Bitcoin is better money", "Which is better?", "Methane reduction").
  - Added `home_source_prefix = "Source:"` for the card source lines.
  - Updated all `home_link_title_*` values to sentence case (no longer Title Case) for consistency with the mockup.
  - Changed `home_section_bitcoin_and` to "Bitcoin &" (sentence case, was "BITCOIN &").
  - `@metadata.last-updated` bumped to 2026-04-16. All other language `index_xx.json` files will gracefully fall back to English for the new keys until translated.
- **CSS additions in `css/style.css`** (appended as new "HOMEPAGE REVAMP (v2)" section near EOF):
  - `.home-revamp .home-hero`, `.home-revamp .h1-inflation`, `.home-revamp .inflation-intro` (hero)
  - `.home-carousel-wrap` (viewport-wide breakout), `.home-carousel-row` (scroll container, scrollbar hidden), `.home-carousel-track` (the animated flex track), `@keyframes home-carousel-scroll-left/right`
  - `.home-pill` (replaces `.jump`): Proxima Soft 900, lowercase, 2px border using `currentColor` so the category color classes drive both border + text color
  - `.category-section` + `.category-section h2 .accent` for the "Bitcoin & **category**" heading pattern
  - The existing `.whats-next-card-label` was modified from `color: #FF9500` → `color: var(--card-accent, #FF9500)` — this is backwards-compatible (falls back to orange on `/inflation`).
- **SEO & schema**: new `WebPage` JSON-LD schema added to `index.html` with `dateModified: 2026-04-16`. `node scripts/inject-seo-content.js` ran clean (0 modifications — HTML is in sync with JSON).
- **Deprecated v1 homepage classes** (kept in CSS for legacy pages, but no longer used on the new homepage): `.home-h1`, `.home-logo`, `.home-intro`, `.container-jump`, `.jump`, `.text-box.top/.middle/.bottom/.solo`, `.item`, `.h3-item` (as used on the old homepage), `.h2-section.second-line`. These are still referenced by other (older) pages that haven't been migrated yet.
- **Asset version bumped** to `v=1.3.0` on CSS + JS in `index.html` (forces browser cache invalidation).
- `index.html`: 1,167 lines → 772 lines (395 fewer, ~34% smaller) despite keeping all 50+ cards.

### New homepage pattern (for future migration of other pages)
```
<nav class="site-nav site-nav--v2"> … </nav>
<div class="container-main home-revamp">
    <div class="home-hero">
        <h1 class="h1-inflation">…</h1>
        <p class="inflation-intro">…</p>
    </div>

    <!-- (optional: carousels, stat cards, feature cards, etc.) -->

    <section class="whats-next-section category-section" id="X"
             style="--card-accent: #XXXXXX;">
        <div class="container-inner">
            <div class="whats-next-header">
                <h2>Bitcoin &amp; <span class="accent">category</span></h2>
            </div>
            <div class="whats-next-grid">
                <a href="…" class="whats-next-card">
                    <div>
                        <div class="whats-next-card-label">Topic</div>
                        <div class="whats-next-card-title">Full title</div>
                    </div>
                    <div class="whats-next-card-source">Source: author →</div>
                </a>
            </div>
        </div>
    </section>

    <div class="footer"> … </div>
</div>
```

## Latest: Inflation Page — Drop HNL + VEF, EUR Debt, Fix PHP CPI — April 16, 2026 (pt. 2)
- **Removed HNL (Honduran Lempira) and VEF (Venezuelan Bolívar)** from the inflation page entirely: FRED does not publish usable narrow-money (`MANMM101HN*` / `MANMM101VE*`) or gross-debt (`GGGDTAHN*` / `GGGDTAVE*`) series for either country, so those sections always rendered fallback (hard-coded) values.
  - Dropped from `scripts/inflation-multi/rebuild-inflation-html.js`'s `CURRENCIES` array (now 13 currencies)
  - Dropped from `jquery/inflation-stats.js`'s `SUPPORTED_CURRENCIES` array
  - Dropped from `forms-backend/inflation-stats.js`'s `CURRENCIES` config object
  - 52 orphan `inflation_hnl_*` / `inflation_vef_*` / `inflation_honduran_lempira` / `inflation_venezuelan_bolivar` keys removed from `i18n/en/inflation_en.json` by new cleanup logic in `scripts/inflation-multi/update-i18n.js`
  - Full HNL + VEF HTML sections automatically removed by the rebuild script
- **EUR: dropped the government-debt stat card + debt paragraphs.** FRED's Eurozone aggregate gross-debt series (`GGGDTAEZA188N`) is not reliably published at a cadence that tracks our "Q1 2020 baseline" comparison. Now:
  - `forms-backend/inflation-stats.js` → `EUR.debtSeries = null` (with nulled baseline)
  - `scripts/inflation-multi/rebuild-inflation-html.js` → already skips debt card + proof_p4/p5/p6 paragraphs when `SOURCE_URLS.EUR.debt = null` (was already set)
  - EUR-specific orphan `inflation_eur_proof_p4/p5_*/p6` keys kept as harmless fallback copy (in case we ever restore the card)
- **PHP: fixed CPI calculation.** FRED's `FPCPITOTLZGPHL` series is an **annual inflation rate** (% year-over-year), not a price-level index — the old `fetchFred4yrChange()` treated it as a level and returned meaningless values.
  - Added new fetcher `fetchAnnualCompoundInflation4yr(seriesId)` in `forms-backend/inflation-stats.js` that compounds the last 4 annual rates: `∏(1 + rᵢ/100) − 1`
  - Added `cpiType: 'annualRate'` flag to PHP's config; default for all other currencies is `'priceIndex'`
  - `fetchCurrencyStats` now dispatches on `cpiType` to pick the correct fetcher
- Ran `node scripts/inflation-multi/update-i18n.js` (52 orphan keys removed), `node scripts/inflation-multi/rebuild-inflation-html.js` (13 sections regenerated, HNL+VEF HTML auto-removed), `node scripts/inject-seo-content.js` (0 changes — content was already injected).
- `inflation.html` shrank from 3,469 → 3,035 lines (434 lines dropped from HNL+VEF sections).
- Article schema `dateModified` bumped to 2026-04-16; both English JSON `@metadata.last-updated` bumped.
- The inflation page now supports **13 currencies**: USD, CAD, EUR, GBP, BRL, PHP, MXN, INR, JPY, AUD, ILS, THB, NZD.

## Latest: Inflation Page — Multi-Currency Dynamic Stat Cards — April 16, 2026
- Replaced the legacy per-currency layout (CAD, EUR, GBP, BRL, PHP, MXN, INR, HNL, VEF, JPY, AUD, ILS, THB, NZD) with clones of the new USD stat-card template — **all 15 currencies now share the same dynamic layout**. (HNL+VEF dropped in the follow-up above.)
- Dropped the old FAQ / compound-inflation-calculator / volatility / hacked / energy / purchasing-power-image blocks that were duplicated in every non-USD section.
- Replaced 14 per-currency "What's next?" carousels with a **single global block** (`#global-whats-next`) at the bottom of the page that is hidden until the user selects a currency. Its 4th card is now "Calculate your inflation" → `/compound-inflation-calculator` (replacing "Contribute").
- Stat-card DOM IDs are now namespaced per currency (`stat-btc-change-CAD`, `stat-m1-current-EUR`, `stat-debt-current-JPY`, `stat-currency-supply-value-BRL`, etc.).
- `jquery/inflation-stats.js` now exposes `window.loadInflationStats(currency)`; `jquery/country-selector-inflation.js` calls it on button click and toggles the global What's-next block.
- `forms-backend/inflation-stats.js` accepts `?currency=XXX` and maps each currency to its FRED narrow-money series, government-debt series (% of GDP), CPI series, and TwelveData Pro BTC pair (or BTC/USD × forex fallback for ILS/NZD/PHP/THB). Per-currency 24h cache in `inflation-stats-cache-v2.json`.
- The USD section now has proper `data-i18n` attributes on every previously-hardcoded stat-card label, source line, "TODAY" label, existence/debt card title, and "And counting…" detail — fully i18n-covered for the first time.
- Added ~140 new keys to `i18n/en/inflation_en.json` (per-currency intro/proof/btc/freedom copy × 15 + per-currency existence/debt/label titles + generic stat keys) and 2 new keys to `i18n/en/common_en.json` (calculator "What's next" card).
- Article schema `dateModified` bumped to 2026-04-16; both English JSON `@metadata.last-updated` bumped.
- `inflation.html` shrank from ~4,959 lines to ~3,469 lines despite adding 14 full currency blocks.
- Reusable build scripts: `scripts/inflation-multi/update-i18n.js` and `scripts/inflation-multi/rebuild-inflation-html.js`.
- Next translator pass: the 14 non-English inflation_xx.json files inherit the new English defaults via jquery.i18n's graceful-fallback behavior; they should be updated with translated per-currency copy in a follow-up task.

## Yoruba (yo) Language Added — April 11, 2026

- Added Yoruba (Yorùbá) as the 55th language
- Translation files partially created in previous session; completed remaining 21 files (comparisons, common, inflation, content)
- Fixed 17 invalid `\u00fu` → `\u00fa` Unicode escape sequences across 4 scripts before running
- All registration steps completed (language.js, index.html schema, llms.txt, llms-full.txt, about page count 54→55, SEO injection)
- Yorùbá placed alphabetically between Türkçe and Ελληνικά in language.js
- Yoruba uses Latin script with diacritics (ẹ, ọ, ṣ, tone marks) — no special character concerns
- Current total: 55 languages on bitcoin.rocks

## Persian (fa) Language Added — April 11, 2026
- Added Persian (فارسی) as the 47th language
- Translation files already existed in `i18n/fa/` from previous session (8 scripts in `scripts/persian/`)
- Language was already registered in `language.js` from previous session
- Fixed 15 missing keys and ~100 untranslated strings (country names, platform descriptions, inflation texts, wallet costs) via `scripts/persian/fix-missing-and-untranslated.js`
- Completed remaining registration: index.html schema (`"fa"` added to inLanguage), llms.txt (Persian added, 46→47), llms-full.txt (46→47), about page count (46→47 across all languages), SEO injection
- فارسی placed after العربية (Arabic) in language.js per Arabic/Persian script Unicode range
- Persian is RTL (right-to-left), uses Arabic script with additional letters (پ، چ، ژ، گ)

## Hebrew (he) Language Added — April 11, 2026
- Added Hebrew (עברית) as the 44th language
- Translation files already existed in `i18n/he/` from previous session
- Fixed 7 missing keys, 43 untranslated language names, 31 untranslated inflation currency texts via fix script
- All registration steps completed (language.js, index.html schema, llms.txt, llms-full.txt, about page count 43→44, SEO injection)
- עברית placed after العربية (Arabic) and before हिन्दी (Hindi) in language.js per Hebrew Unicode range

## Danish (da) Language Added — April 7, 2026
- Added Danish (Dansk) as the 39th language
- 90+ translation files created in `i18n/da/`
- 8 translation scripts in `scripts/danish/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 38→39, SEO injection)
- Dansk placed alphabetically between Chicheŵa and Deutsch in language.js
- Audit passed — only legitimate shared-word matches (inflation, EURO, Standard, Type, Fold, CROWDFUNDING, etc.)

## Catalan (ca) Language Added — April 7, 2026
- Added Catalan (Català) as the 37th language
- 90+ translation files created in `i18n/ca/`
- 8 translation scripts in `scripts/catalan/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 36→37, SEO injection)
- Català placed alphabetically between Azərbaycanca and Čeština in language.js
- Audit passed — only legitimate proper noun matches (country names, brand names identical in Catalan)

## Bengali (bn) Language Added — April 6, 2026
- Added Bengali (বাংলা) as the 35th language
- 90+ translation files created in `i18n/bn/`
- 8 translation scripts in `scripts/bengali/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 34→35, SEO injection)
- বাংলা placed after हिन्दी (Hindi) and before தமிழ் (Tamil) in language.js per Bengali Unicode range

## Basque (eu) Language Added — April 6, 2026
- Added Basque (Euskara) as the 34th language
- 90+ translation files created in `i18n/eu/`
- 8 translation scripts in `scripts/basque/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 33→34, SEO injection)
- Euskara placed alphabetically after Español and before Filipino in language.js

## Amharic (am) Language Added — April 6, 2026
- Added Amharic (አማርኛ) as the 33rd language
- 90+ translation files created in `i18n/am/`
- 8 translation scripts in `scripts/amharic/`
- All registration steps completed (language.js v1.2.8, index.html schema, llms.txt, llms-full.txt, about page count 32→33, SEO injection)
- Ethiopic script (U+1200) placed after Thai (ภาษาไทย) and before Chinese (中文) in language.js

## Arabic (ar) Language Added — April 4, 2026
- Added Arabic (العربية) as the 31st language
- 90 translation files created in `i18n/ar/`
- 8 translation scripts in `scripts/arabic/`
- All registration steps completed (language.js, index.html schema, llms.txt, llms-full.txt, about page count 30→31, SEO injection)

## Norwegian Bokmål Language Added — April 2026
- Added Norwegian Bokmål (`nb`, Norsk) as the 30th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/norwegian/`
- Registered in language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 30 languages
- Norsk placed alphabetically between Nederlands and Polski in language.js
- Ran SEO content injection successfully

## Korean Language Added — April 2026
- Added Korean (`ko`, 한국어) as the 28th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/korean/`
- Registered in language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 28 languages
- Korean placed after Japanese (日本語) in language.js — Hangul follows CJK in Unicode order
- Ran SEO content injection successfully

## Slovak Language Added — April 2026
- Added Slovak (`sk`, Slovenčina) as the 27th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/slovak/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 27 languages
- Fixed Cyrillic sort order in language.js (български now before Русский)
- Ran SEO content injection successfully

## Russian Language Added — April 2026
- Added Russian (`ru`, Русский) as the 26th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/russian/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 26 languages
- Ran SEO content injection successfully

## Tagalog Language Added — April 2026
- Added Tagalog (`tl`) as the 25th language on bitcoin.rocks
- Copied all 90 files from Filipino (`fil`) — Filipino is the standardized form of Tagalog, written forms are virtually identical
- Script: `scripts/tagalog/copy-from-filipino.js` (copies fil files, renames to tl, updates metadata)
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 25 languages
- Fixed about.html inline text (was showing "9 languages", updated to "25 languages")
- Ran SEO content injection successfully

## Filipino Language Added — April 2026
- Added Filipino (`fil`) as the 24th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/filipino/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 24 languages
- Ran SEO content injection successfully

## Malay Language Added — April 2026
- Added Malay (`ms`, Bahasa Melayu) as the 23rd language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/malay/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 23 languages
- Ran SEO content injection successfully

## Swahili Language Added — April 2026
- Added Swahili (`sw`, Kiswahili) as the 22nd language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/swahili/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 22 languages
- Ran SEO content injection successfully

## Vietnamese Language Added — April 2026
- Added Vietnamese (`vi`, Tiếng Việt) as the 20th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/vietnamese/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 20 languages
- Ran SEO content injection successfully

## Swedish Language Added — April 2026
- Added Swedish (`sv`, Svenska) as the 19th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/swedish/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 19 languages
- Ran SEO content injection successfully

## Chichewa Language Added — April 2026
- Added Chichewa (`ny`, Chicheŵa) as the 18th language on bitcoin.rocks
- Created all 90+ translation files via 8 scripts in `scripts/chichewa/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 18 languages
- Ran SEO content injection successfully

## Hindi Language Added — April 2026
- Added Hindi (`hi`, हिन्दी) as the 17th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/hindi/`
- Registered in language.js (v1.2.7), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 17 languages
- Ran SEO content injection successfully

## Mandarin Chinese Language Added — April 2026
- Added Mandarin Chinese (`zh`, 中文) as the 16th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/chinese/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files to 16 languages
- Ran SEO content injection successfully

## Czech Language Added — April 2026
- Added Czech (`cs`, Čeština) as the 15th language on bitcoin.rocks
- Created all 90 translation files via 8 scripts in `scripts/czech/`
- Registered in language.js (v1.2.6), index.html schema, llms.txt, llms-full.txt
- Updated all about_xx.json files from 14→15 languages
- Ran SEO content injection successfully

## Current Work Focus

### Croatian (hr) Language — Completed April 7, 2026
- Added Croatian (Hrvatski) as the 38th language
- Created 90+ translation files in `i18n/hr/` with 8 scripts in `scripts/croatian/`
- Registered in language.js, index.html schema, llms.txt, llms-full.txt, all about files updated (37→38)

### Previous Work Focus

### Bulgarian Sticker Files Translation (Completed Mar 31, 2026)
- **Status**: ✅ Complete
- **What**: Translated all 44 remaining Bulgarian sticker-files i18n JSON pages that were still in English.
- **Files translated**:
  - `i18n/bg/sticker-files/index_bg.json` — main sticker files index page
  - 42 individual language sticker-files pages (`afrikaans` through `yoruba`, skipping `bulgarian` which was already translated)
  - `i18n/bg/business/sticker-files/english/index_bg.json` — business "Bitcoin Accepted Here" sticker files
- **Translation pattern** (matching existing `bulgarian/index_bg.json`):
  - `"Файлове за {език} Биткойн стикери"` / `"Изтеглете файлове за {език} Биткойн стикери тук."` / `"ИЗТЕГЛЕТЕ ФАЙЛОВЕ ЗА {ЕЗИК} БИТКОЙН СТИКЕРИ"`
  - Business: `„Биткойн се приема тук"` with proper Bulgarian quotation marks (U+201E / U+201C)
- **Also updated**: `.clinerules` — added universal `### i18n JSON last-updated Dates (IMPORTANT)` rule: every i18n JSON file modification must update `@metadata.last-updated` to today's date.
- **Note**: This completes the Bulgarian (bg) translation — all pages now have Bulgarian translations.

### GEO: robots.txt AI Crawler Review (Completed Mar 29, 2026)
- **Status**: ✅ Complete
- **What**: Reviewed and updated `robots.txt` with explicit AI crawler directives as item 3 in Priority 7: AI-Specific Metadata in the GEO checklist.
- **Changes to robots.txt**:
  - Added explicit `User-agent` + `Allow: /` directives for 16 AI crawlers: GPTBot, ChatGPT-User, OAI-SearchBot (OpenAI), Google-Extended (Gemini/AI Overviews), ClaudeBot, anthropic-ai (Anthropic), PerplexityBot, Applebot-Extended (Apple Intelligence), Meta-ExternalAgent (Meta AI), Bingbot (Microsoft Copilot), Amazonbot, CCBot (Common Crawl), cohere-ai, YouBot, Diffbot, Bytespider (ByteDance)
  - Added `Disallow` rules for `/forms-backend/` and `/.github/` (previously missing)
  - Added prominent comment block pointing AI crawlers to `llms.txt` and `llms-full.txt` with URLs
  - GPTBot gets explicit Disallow rules for non-content directories (since per-agent rules override the wildcard `User-agent: *` block in robots.txt spec)
  - Well-organized with section headers and comments explaining each crawler
- **Changes to inject-seo-content.js**: Updated the robots.txt generation code in Part 2 of the script to produce the same comprehensive output. Uses `DISALLOW_DIRS` array and `AI_CRAWLERS` config array for maintainability. Future `node scripts/inject-seo-content.js` runs will generate the correct robots.txt.
- **Strategy**: Since bitcoin.rocks is MIT-licensed educational content that wants maximum AI citation, all AI crawlers are explicitly welcomed with no restrictions beyond the standard non-content directory blocks.

### GEO: llms.txt + llms-full.txt (Completed Mar 29, 2026)
- **Status**: ✅ Complete
- **What**: Created `llms.txt` and `llms-full.txt` files as items 1 and 2 in Priority 7: AI-Specific Metadata in the GEO checklist.
- **Why both files?**:
  - `llms.txt` (~1,500 words) is the "index card" — a concise, structured overview of the site for AI crawlers. It tells AI systems *what we have and where to find it*.
  - `llms-full.txt` (~18,000 words) is the "full textbook" — the actual educational content of all pages in clean Markdown. It gives AI systems *the content itself, ready to consume and cite*.
  - This is especially important for bitcoin.rocks because content is loaded via i18n JSON + JavaScript, so some AI crawlers may miss content even with the SEO content injection.
- **Files created**:
  - `llms.txt` — Organization identity, editorial approach, structured listing of all 30+ pages with URLs and one-line descriptions (organized by: Core Educational, Comparison Pages, Business, Community & Outreach), link to llms-full.txt, citation preference format, key Bitcoin facts summary
  - `llms-full.txt` — Full content of all educational pages: About, What is Bitcoin?, Inflation (with 15 currency-specific stats), Bank Runs, Wallet Guide (6 wallets), Buy Bitcoin, Lightning, Compound Inflation Calculator, all 10 Bitcoin-vs pages (with Markdown tables), Business section (Why + FAQ), Get Involved, Nostr, Homepage overview. Each section includes source URL.
- **Other changes**: `robots.txt` updated with comment block referencing both files. `GEO-CHECKLIST.md` updated with completion notes.
- **Maintenance**: Content assembled from English JSON translation files. When page content changes significantly, llms-full.txt should be regenerated.

### GEO: Source Citations & References Sections (Completed Mar 28, 2026)
- **Status**: ✅ Complete
- **What**: Added inline source citations and "Sources" reference sections to all 12 data-heavy educational pages (inflation, bank-runs, and all 10 bitcoin-vs pages) as items 4 and 5 in Priority 3: Authority & Trust Signals in the GEO checklist.
- **Sources sections added** (12 pages via `scripts/inject-sources-section.js`):
  - `inflation.html` — 6 sources (FRED M1SL, FRED International, BLS CPI, mempool.space, Bitcoin source code, Bitcoin whitepaper)
  - `bank-runs.html` — 5 sources (FDIC Statistics at a Glance, FDIC SVB Press Release, FDIC Quarterly Banking Profile, Federal Reserve, Bitcoin whitepaper)
  - All 10 `bitcoin-vs-*.html` pages — 3-4 sources each (World Gold Council, Bitnodes, SEC, Treasury Dept, RBI, Atlantic Council, BIS, Christie's, Sotheby's, Visa, Federal Reserve, Cambridge Centre for Alt Finance, Bitcoin whitepaper/source code)
- **Inline citations added** (via `scripts/add-inline-citations.js` and `scripts/add-inline-citations-v2.js`):
  - Inflation: 14 FRED links for currency-specific money supply data (CAD, EUR, GBP, BRL, PHP, MXN, INR, HNL, VEF, JPY, AUD, ILS, THB, NZD)
  - Bank-runs: SVB collapse linked to FDIC press release
  - Bitcoin-vs-gold: World Gold Council for 1.6% annual supply growth
  - Bitcoin-vs-cash: RBI demonetization notice
  - Bitcoin-vs-visa: Visa interchange fees + Federal Reserve credit card rates
  - Bitcoin-vs-bonds: Treasury auction results
  - Bitcoin-vs-crypto: Bitcoin whitepaper for Proof of Work
- **CSS**: `.sources-section` styling (14px gray headings, numbered ordered list, muted gray links that turn orange on hover, border-top separator)
- **i18n**: `common_sources_heading` key added to 10 language files with translated "Sources" heading (en, de, es, fr, pt, nl, bg, id, th, it)
- **Scripts created**: `inject-sources-section.js` (idempotent, main reusable script), `add-inline-citations.js` (inflation FRED links), `add-inline-citations-v2.js` (other pages), `add-sources-i18n.js` (one-time i18n helper)

### Footer Cleanup (Completed Mar 28, 2026)
- **Status**: ✅ Complete
- **What**: Redesigned the verbose footer across all 88 HTML pages into a clean, compact layout.
- **Before**: Three paragraphs of prose — mission statement, Nostr explanation (3 lines), and email — separated by `<br/>` tags in a single `<p>`.
- **After**: Two-line compact footer — one-line tagline + horizontal link row using dot separators (matching publisher-attribution style):
  - Line 1: "Accelerating bitcoin adoption through education."
  - Line 2: About · Contribute · Nostr · hi@bitcoin.rocks
- **Scripts created**: `scripts/update-footer.js` (HTML replacement across 88 files), `scripts/update-footer-i18n.js` (i18n key updates across 9 languages)
- **CSS changes**: Replaced `.footer` styles (removed old `.footer p`, added `.footer-tagline`, `.footer-links`, `.footer-divider`), updated `a.footer-link` to no-underline with hover-underline.
- **i18n changes**: Added 3 new keys to all 9 `common_*.json` files: `common_footer_tagline`, `common_footer_contribute`, `common_footer_nostr`. Updated `common_footer_about` from "About bitcoin.rocks" to "About" (with translations).
- **Publisher attribution**: Left untouched — it's clean and serves GEO/SEO purpose on content pages.
- **Old keys preserved**: `common_footer_mission_1`, `common_footer_mission_2`, `common_footer_follow_first_half`, etc. still exist in JSON files (harmless, can be removed later).

### GEO: Author/Publisher Attribution (Completed Mar 28, 2026)
- **Status**: ✅ Complete
- **What**: Added visible publisher attribution to all 33 educational content pages as the 2nd item in Priority 3: Authority & Trust Signals in the GEO checklist.
- **Approach**: Created `scripts/inject-author-attribution.js` (idempotent) that injects a "Published by bitcoin.rocks · Bitcoin education since 2022 · Open-source project" bar just above the footer on every educational page.
- **HTML structure**: `<div class="publisher-attribution" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">` with Schema.org microdata reinforcing the existing Article JSON-LD author/publisher schema.
- **Links**: Cross-links to About page (`/about`) and GitHub repository — reinforces trust signals and cross-linking.
- **Translation keys added** (4 new keys in all 9 common_*.json files):
  - `common_published_by`: "Published by" (de: "Veröffentlicht von", es: "Publicado por", fr: "Publié par", pt: "Publicado por", nl: "Gepubliceerd door", bg: "Публикувано от", id: "Diterbitkan oleh", th: "เผยแพร่โดย")
  - `common_publisher_name`: "bitcoin.rocks" (same in all languages)
  - `common_publisher_since`: "Bitcoin education since 2022" (translated in all languages)
  - `common_publisher_open_source`: "Open-source project" (translated in all languages)
- **CSS**: `.publisher-attribution` — subtle styling (14px, centered, gray #999 text, orange links, border-top separator #333, 70% width centered)
- **Visual change**: Minimal — adds a small, professional attribution line above the existing footer
- **Pages injected** (33): about, bank-runs, all 10 bitcoin-vs-* pages, all 9 business/* pages, buy, compound-inflation-calculator, flyers, get-involved, inflation, lightning, both nostr/* pages, postcards, signs, stickers, wallets
- **Pages skipped** (56): homepage, success pages, 404, sticker-file language variants, pages without Article schema

### GEO: About Page (Completed Mar 27, 2026)
- **Status**: ✅ Complete
- **What**: Created `/about` page as the 1st item in Priority 3: Authority & Trust Signals in the GEO checklist.
- **Files created**:
  - `about.html` — 5 sections: Our Mission, What We Do, Our Editorial Approach, Open Source, Contact Us
  - `i18n/en/about_en.json` — 30 English translation keys
  - `i18n/{de,es,fr,pt,nl,bg,id,th,it,pl}/about_*.json` — Actual translations in all 10 languages
- **Common translations updated**: Added `common_footer_about` key to `common_en.json` and 8 other `common_*.json` files (de, es, fr, pt, nl, bg, id, th) with translated "About bitcoin.rocks" text
- **Auto-injected schemas**: WebPage schema (via inject-article-schema.js), Organization schema, BreadcrumbList schema
- **SEO**: English content already inline in HTML; sitemap updated to 88 URLs including `/about`
- **Content approach**: No mentions of crypto/cryptocurrency. Stickers are the only mailed physical resource; flyers and business kits mentioned as printable only.
- **Remaining for user**: Add About link to footer HTML across all pages (user opted to handle this manually)

### GEO: Q&A Microdata on Inflation Page (Completed Mar 27, 2026)
- **Status**: ✅ Complete
- **What**: Added Schema.org Question/Answer microdata to 120 Q&A sections on `inflation.html` as the 4th item in Priority 2: Content Structure for AI Extraction.
- **Approach**: Created `scripts/inject-faq-microdata.js` (idempotent) that identifies Q&A sections by their `data-i18n` heading keys and adds inline microdata attributes.
- **Changes made (120 Q&A sections)**:
  - Parent `<div class="text-box intro">` → adds `itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"`
  - `<h2 class="h2-section">` question heading → adds `itemprop="name"`
  - Answer content wrapped in `<div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"><div itemprop="text">...</div></div>`
- **Q&A types marked** (8 per currency block × 15 currencies = 120):
  - WHAT CAUSES INFLATION? (`inflation_cause_header`)
  - DOES BITCOIN HAVE INFLATION? (`inflation_issuance_header`)
  - WHAT IS BITCOIN? (`common_what_is_bitcoin`)
  - CAN BITCOIN PROTECT MY MONEY FROM INFLATION? (`inflation_protect_header`)
  - I HEARD BITCOIN IS VOLATILE. IS THAT SAFE? (`common_bitcoin_volatile`)
  - I CAN'T AFFORD A WHOLE BITCOIN (`common_bitcoin_afford`)
  - HAS BITCOIN EVER BEEN HACKED? (`common_bitcoin_hacked`)
  - WHY DOES BITCOIN USE ENERGY? (`common_bitcoin_energy`)
- **Skipped**: HOW DOES INFLATION AFFECT ME? (`inflation_cic_header`) — interactive calculator, not pure Q&A
- **Pages not changed**: `wallets.html` and `business/faq.html` already had proper Q&A formatting (accordion/expandable patterns)
- **Visual change**: Zero — only HTML attributes and unstyled wrapper `<div>` elements added
- **Complements**: Existing FAQPage JSON-LD schema (belt AND suspenders approach for AI engines)
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (4th item under Priority 2: Content Structure). This completes ALL items in Priority 2.

### GEO: Heading Hierarchy Fix (Completed Mar 26, 2026)
- **Status**: ✅ Complete
- **What**: Fixed heading hierarchy (H1→H2→H3) across all 35 affected HTML files as the 2nd item in Priority 2: Content Structure for AI Extraction.
- **Approach**: Created `scripts/fix-heading-hierarchy.js` (idempotent) that converts heading tags to proper hierarchy levels while adding CSS preservation classes for zero visual change.
- **Changes made (646 heading changes)**:
  - **CTA sections** (~20 pages): h3→h2 (.h2-section), h4→h3 (.h3-item)
  - **Content sections** (inflation, bank-runs): h3→h2 (.h2-section)
  - **Homepage** (index.html): h3→h2 (.h2-section), h4→h3 (.h3-item)
  - **Wallet/client names** (wallets, lightning): h6→h2 (.h2-label)
  - **Comparison labels** (10 bitcoin-vs-* pages): h6→h3 (.h3-label)
  - **Buy page**: h3 steps→h2, h6 payment methods→h3 (.h3-label)
  - **Business wallet categories**: h5→h2 (.h2-category), h6→h3 (.h3-label)
  - **Business guide**: h3.biz-h3→h2 (no extra class; .biz-h3 handles styling)
  - **Nostr pages**: h5→h3 (.h3-category), h6→h4 (.h4-label)
  - **Business success pages**: Swapped misplaced h1/h2 order
  - **Business accounting**: Content h3→h2, biz-h3 stays as h3
  - **Compound inflation calculator**: h3→h2, h4→h3
- **CSS changes**:
  - 7 new preservation classes: `.h2-section`, `.h3-item`, `.h2-label`, `.h3-label`, `.h4-label`, `.h2-category`, `.h3-category`
  - Updated selectors: `h3.second-line` → `h2.second-line, h3.second-line`, `h3.biz-h3` → `.biz-h3` (with font-style/margin fixes), contextual h6 selectors updated for new classes
  - Responsive media query updates for 400px and 700px breakpoints
- **Typical page result**: H1 (title) → H2 (sections, .h2-section) → H3 (items, .h3-item)
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (2nd item under Priority 2: Content Structure).

### GEO: H1 Tags on Every Page (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `<h1>` tags to all 88 HTML files as the 1st item in Priority 2: Content Structure for AI Extraction.
- **Approach**: Created `scripts/inject-h1-tags.js` (idempotent) that converts the first/primary heading on each page to an `<h1>` tag.
- **Page types handled**:
  - **Most pages**: First `<h2 class="h2-inflation">` → `<h1 class="h1-inflation">` (class renamed for continuity)
  - **wallets.html & buy.html**: `<h3 class="wallet-h3">` → `<h1 class="wallet-h3">`
  - **Homepage**: Logo wrapped in `<h1 class="home-h1">` with alt text `"bitcoin.rocks — Bitcoin Education"` (zero visual change, well-established SEO pattern)
  - **Success pages**: First `<h2 class="h2-stickers">` → `<h1 class="h2-stickers">`
- **CSS changes**: 
  - `h1, h2` share base tag styles (font-family, weight, size, etc.)
  - New `.h1-inflation` class mirrors `.h2-inflation` in all 3 CSS rule locations (mobile <400px, tablet <700px, and desktop)
  - New `.home-h1` class zeroes out margin/padding/font-size so homepage logo remains visually identical
- **Translation impact**: None — all `data-i18n` attributes preserved, jquery.i18n works with any tag type
- **Also fixed**: Homepage logo now has alt text (addresses GEO Priority 6, item 3)
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (1st item under Priority 2: Content Structure).

### GEO: SoftwareApplication/Product Schema for Wallet Recommendations (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `MobileApplication` and `Product` JSON-LD structured data to `wallets.html` for all 6 recommended wallets as part of the GEO initiative.
- **Wallets included**:
  - **Blockstream Green** — `MobileApplication` type, free ($0), FinanceApplication category, Android/iOS, featureList (self-custody, hot wallet, mobile app, 2FA, Bitcoin only)
  - **Blockstream Jade** — `Product` type, $79, Bitcoin Hardware Wallet, brand: Blockstream, air-gap, cold wallet
  - **Coldcard MK5** — `Product` type, $189, Bitcoin Hardware Wallet, brand: Coinkite, air-gap, advanced security
  - **Coldcard Q** — `Product` type, $289, Bitcoin Hardware Wallet, brand: Coinkite, QWERTY keyboard, QR scanner, air-gap
  - **Foundation Passport** — `Product` type, $199, Bitcoin Hardware Wallet, brand: Foundation Devices, camera, rechargeable battery, air-gap
  - **SeedSigner** — `Product` type, $50, Bitcoin Hardware Wallet, brand: SeedSigner, DIY build, air-gap
- **Schema structure**: Single `@graph` JSON-LD block containing all 6 entities. Each includes name, description, url, image, brand (Organization), offers (price/currency/availability), and either `featureList` (for MobileApplication) or `additionalProperty` array of `PropertyValue` entries (for Products).
- **Also updated**: `i18n/en/wallets_en.json` last-updated to 2026-03-25, Article schema dateModified to 2026-03-25.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (8th item under Priority 1: Structured Data). This completes ALL items in Priority 1.

### GEO: BreadcrumbList Schema on All Content Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `BreadcrumbList` JSON-LD structured data to 33 HTML files as part of the GEO initiative.
- **Hierarchy levels**:
  - **2-level** (Home > Page Title): All root-level content pages — `inflation.html`, `bank-runs.html`, `wallets.html`, `lightning.html`, `buy.html`, `compound-inflation-calculator.html`, `get-involved.html`, `flyers.html`, `stickers.html`, `postcards.html`, `signs.html`, all 10 `bitcoin-vs-*.html` pages, `business/index.html`, `nostr/index.html`
  - **3-level** (Home > Bitcoin for Business > Page Title): All nested business pages — `business/accounting.html`, `business/faq.html`, `business/guide.html`, `business/kit.html`, `business/maps.html`, `business/stickers.html`, `business/wallets.html`, `business/why.html`
  - **3-level** (Home > Nostr > Page Title): `nostr/what-is-nostr.html`
  - **3-level** (Home > Bitcoin Stickers > Sticker Files): `sticker-files/index.html`
- **Script created**: `scripts/inject-breadcrumb-schema.js` — idempotent Node.js script that extracts page title from `<title>` and canonical URL from `<link rel="canonical">`, determines hierarchy based on directory structure, and injects before `</head>`.
- **Skipped pages**: Homepage (root, no breadcrumb needed), success/thank-you pages, 404, sticker-files language variants (dozens of language-specific pages).
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (7th item under Priority 1: Structured Data).

### GEO: Comparison Schema on "Bitcoin vs" Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `ItemList` JSON-LD structured data to all 10 "Bitcoin vs" comparison pages as part of the GEO initiative.
- **Pages and comparison point counts**:
  - `bitcoin-vs-gold.html` — 7 comparison points (sendability, digital native, supply, elasticity, decentralization, verifiability, divisibility)
  - `bitcoin-vs-stocks.html` — 7 comparison points (ownership, supply, decentralization, valuation, trading hours, custody, inflation hedge)
  - `bitcoin-vs-cash.html` — 7 comparison points (sendability, global reach, invalidation, counterfeiting, decentralization, custody, divisibility)
  - `bitcoin-vs-banks.html` — 7 comparison points (permissionless access, availability, transparency, control, fees, overdrafts, censorship resistance)
  - `bitcoin-vs-cbdc.html` — 10 comparison points (permission, expiry, supply, privacy, decentralization, nodes, freezing, custody, monetary policy, security)
  - `bitcoin-vs-bonds.html` — 7 comparison points (counterparty risk, inflation, liquidity, auctions, appreciation, custody, government dependency)
  - `bitcoin-vs-crypto.html` — 8 comparison points (immutability, decentralization, supply, simplicity, consensus, purpose, antifragility, control)
  - `bitcoin-vs-visa.html` — 7 comparison points (open network, fees, transparency, freezing, debt, custody, availability)
  - `bitcoin-vs-real-estate.html` — 9 comparison points (portability, divisibility, censorship, maintenance, taxes, destruction, fungibility, market, ownership)
  - `bitcoin-vs-fine-art.html` — 7 comparison points (fungibility, market access, fees, divisibility, verification, destruction, accessibility)
- **Schema structure**: Each uses `ItemList` type with `name`, `description`, `url`, `about` (defining both Bitcoin and the compared item as `Thing` entities with descriptions), `numberOfItems`, and `itemListElement` array of `ListItem` entries where name = "Bitcoin: X vs Asset: Y" and description = explanation text.
- **Script created**: `scripts/inject-comparison-schema.js` — idempotent Node.js script that parses the `vs-container` HTML blocks from each page to extract comparison points automatically.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (6th item under Priority 1: Structured Data).

### GEO: HowTo Schema on Guide Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `HowTo` JSON-LD structured data to 3 guide pages as part of the GEO initiative.
- **Pages and steps**:
  - `wallets.html` — 4 steps: Choose a self-custody wallet, Decide between hot or cold wallet, Back up your recovery phrase, Choose a Bitcoin wallet (with specific wallet recommendations)
  - `buy.html` — 4 steps: Select your country, Choose your payment method, Buy Bitcoin from a recommended platform, Store your Bitcoin safely in your own wallet
  - `business/guide.html` — 5 steps: Learn why Bitcoin is good for business, Get a Bitcoin wallet, Get listed on merchant maps, Get free stickers, Set up Bitcoin accounting
- **Schema structure**: Each uses `HowTo` type with `name`, `description`, `image`, and `step` array of `HowToStep` items with `name`, `text`, and `url`.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (5th item under Priority 1: Structured Data).

### GEO: FAQPage Schema on Q&A Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `FAQPage` JSON-LD structured data to 3 pages with Q&A content as part of the GEO initiative.
- **Pages and Q&A counts**:
  - `inflation.html` — 7 Q&A pairs: What causes inflation?, Does Bitcoin have inflation?, What is Bitcoin?, Can Bitcoin protect my money from inflation?, I heard Bitcoin is volatile. Is that safe?, I can't afford a whole Bitcoin, Has Bitcoin ever been hacked?, Why does Bitcoin use energy?
  - `wallets.html` — 3 Q&A pairs: Is it a self-custody wallet?, Is a Bitcoin wallet hot or cold?, How will I back up my Bitcoin wallet recovery phrase?
  - `business/faq.html` — 9 Q&A pairs: What is Bitcoin?, How can Bitcoin benefit my business?, How do I accept Bitcoin payments?, Can I convert Bitcoin to local currency?, Accept in person?, Accept online?, How to let customers know?, How to get more customers?, How much does it cost?
- **Schema structure**: Each uses `FAQPage` type with `mainEntity` array of `Question`/`Answer` pairs, with answer text derived from actual page content.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (4th item under Priority 1: Structured Data).

### GEO: Article/WebPage Schema on All Content Pages (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `Article` JSON-LD structured data to all 32 educational content pages as part of the GEO (Generative Engine Optimization) initiative.
- **Schema includes**: `headline` (from `<title>`), `description` (from meta description), `url` (from canonical), `mainEntityOfPage`, `author` and `publisher` (referencing Organization), `datePublished` (2022-01-01), `dateModified` (from English JSON `@metadata.last-updated`), `inLanguage`, and `image` (from og:image).
- **Script created**: `scripts/inject-article-schema.js` — idempotent Node.js script that finds all HTML files, skips homepage (has WebSite schema), success pages, 404, and sticker-file download pages, then injects Article schema before `</head>`.
- **Pages injected**: 32 files including inflation, bank-runs, all bitcoin-vs-* pages, wallets, lightning, buy, compound-inflation-calculator, get-involved, flyers, stickers, postcards, signs, all business/* pages, and nostr/* pages.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (3rd item under Priority 1: Structured Data).

### GEO: WebSite Schema on Homepage (Completed Mar 25, 2026)
- **Status**: ✅ Complete
- **What**: Added `WebSite` JSON-LD structured data to `index.html` as part of the GEO (Generative Engine Optimization) initiative.
- **Schema includes**: `name`, `url`, `description`, `publisher` (referencing the Organization), `potentialAction` (SearchAction via Google site search for sitelinks searchbox), and `inLanguage` listing all 11 supported languages.
- **File changed**: `index.html` — new `<script type="application/ld+json">` block placed before the existing Organization schema.
- **Tracking**: Marked complete in `GEO-CHECKLIST.md` (2nd item under Priority 1: Structured Data).

### Address Blacklist System (Completed Mar 2026)
- **Status**: ✅ Complete
- **Problem**: Needed the ability to blacklist specific addresses (spammers) so their future form submissions are silently rejected — they see the success page but nothing is saved.
- **Solution**: Full blacklist management system integrated into the forms backend:
  - **Database**: New `blacklisted_addresses` table (region, address_original, address_normalized, blocked_count, created_by, created_at) and `can_blacklist` column on `users` table
  - **Region-based**: Blacklists are shared across all forms in the same region (USA or Canada), derived from form slug
  - **Submission check**: Before saving any submission, the normalized address1 is checked against the blacklist using both exact match and fuzzy Levenshtein similarity (85% threshold)
  - **Silent rejection**: Blacklisted submissions redirect to success page (spammer thinks it worked) and increment the `blocked_count` counter
  - **Admin UI**: "Blacklist Address" button next to "Delete Selected" on form detail pages, plus a blacklist management table with manual add/remove and blocked count display
  - **Permission system**: Admin can grant/revoke `can_blacklist` permission per user on the Users dashboard; admins always have it
- **Files changed**: `database.js`, `server.js`, `views/form-detail.ejs`, `views/users.ejs`, `public/admin.css`

### Cloudflare Turnstile CAPTCHA (Completed Mar 2026)
- **Status**: ✅ Complete
- **Problem**: Needed mandatory CAPTCHA on all form submissions to prevent bot spam.
- **Solution**: Integrated Cloudflare Turnstile (privacy-friendly, free CAPTCHA) across all 11 forms:
  - **Frontend**: Added Turnstile script + dark-themed widget div to 4 HTML files (`stickers.html`, `sticker-files/index.html`, `business/stickers.html`, `business/maps.html`)
  - **Backend**: Added `verifyTurnstile()` async function in `server.js` that calls Cloudflare's `/siteverify` API before processing any submission
  - **Config**: `TURNSTILE_SECRET_KEY` env var in Railway, site key `0x4AAAAAAClzj7R6NrkNgcsP` in HTML
- **Graceful degradation**: If `TURNSTILE_SECRET_KEY` is not set, verification is skipped (with console warning)
- **Also removed**: Old unused Google reCAPTCHA v3 scripts from `stickers.html` and `business/stickers.html`

### Fuzzy Address Spam Protection (Updated Mar 2026)
- **Status**: ✅ Complete
- **Problem**: Spammers were bypassing the exact-match duplicate address check by making slight variations (e.g. `#123` → `Apt123`, inserting spaces in street names like `Ne w Street`).
- **Solution**: Replaced the SQL exact-match check in `forms-backend/server.js` with a two-layer fuzzy detection system:
  1. **Aggressive normalization**: `normalizeAddress()` strips apartment keywords (apt, suite, unit, etc.), `#` symbols, all spaces/punctuation, and lowercases — making all spam variations identical.
  2. **Street type normalization**: Converts full street suffixes to abbreviations (Street→St, Avenue→Ave, Boulevard→Blvd, Drive→Dr, etc.) so "123 Main Street" and "123 Main St" normalize identically. Added Mar 4 2026 after a spammer slipped through with "Street" vs "St" variation (similarity was 0.833, just under the 0.85 threshold).
  3. **Levenshtein similarity**: `isSimilarAddress()` catches remaining creative variations using edit distance with an 85% similarity threshold.
- **Note**: The duplicate check queries ALL existing submissions (no date filter), so it protects against duplicates of any historical entry, not just recent ones.
- **Result**: All tested spam variations now normalize to identical strings. Different addresses remain distinct. No new dependencies needed (pure JS).

### SEO Enhancement — Inline English Content (Completed Feb 2026)
- **Status**: ✅ Complete
- **Problem**: All HTML elements using `data-i18n` attributes had empty text content in the page source. Web crawlers and search engines saw completely empty pages — devastating for SEO.
- **Solution**: Created `scripts/inject-seo-content.js` — a Node.js build script that reads English JSON translation files and injects default English text into all HTML elements with `data-i18n` attributes.
- **Result**: 5,250 translations injected across 88 HTML files. Page source now shows full English content for crawlers while i18n still works at runtime.
- **Workflow**: **Run `node scripts/inject-seo-content.js` after updating or adding English JSON translation files.** The English JSON files remain the single source of truth.

### Recent Project Activity
Based on the current state of the repository, the project appears to be in active maintenance mode with:
- **Stable Core Platform**: Main website functionality is complete and operational
- **Translation Expansion**: Ongoing community-driven translation efforts
- **Content Updates**: Regular updates to educational resources and external links
- **Community Engagement**: Active GitHub repository with contribution guidelines

## Current Priorities

### 1. Documentation and Knowledge Management
- **Memory Bank Creation**: Establishing comprehensive project documentation
- **Contributor Onboarding**: Improving resources for new contributors
- **Technical Documentation**: Maintaining clear development guidelines

### 2. Community Growth
- **Translation Program**: Supporting ongoing translation efforts across multiple languages
- **Content Curation**: Maintaining quality and relevance of educational resources
- **Contributor Support**: Facilitating community contributions and feedback

### 3. Platform Maintenance
- **Performance Optimization**: Ensuring fast loading times and responsive design
- **Content Freshness**: Regular review and update of external links and resources
- **Technical Updates**: Maintaining dependencies and security best practices

## Recent Changes and Decisions

### Architecture Decisions
- **Static Site Approach**: Confirmed commitment to simple, CMS-free architecture
- **Single Stylesheet**: Maintaining consolidated CSS approach for simplicity
- **jQuery-based Internationalization**: Continuing with current i18n implementation
- **Community-Driven Content**: Emphasis on collaborative content development

### Content Strategy Decisions
- **Topic-Based Organization**: Maintaining current homepage structure with topic sections
- **External Link Curation**: Continuing to curate high-quality external educational resources
- **Multi-Format Resources**: Supporting various content types (articles, videos, tools)
- **Beginner Focus**: Maintaining primary focus on Bitcoin newcomers

## Active Development Areas

### Translation System
- **Current Languages**: English (complete), German, French, Portuguese, Thai, and others in progress
- **Translation Process**: Community-driven through GitHub contributions
- **Quality Control**: Review process for translation accuracy and completeness
- **Technical Implementation**: jquery.i18n system with JSON translation files

### Educational Content
- **Homepage Sections**: Money, Freedom, Human Rights, Energy, Environment, Business, etc.
- **Specialized Pages**: Inflation calculator, wallet guides, business resources
- **Resource Types**: Internal educational content and curated external links
- **Update Frequency**: Regular review and refresh of content relevance

### Physical Resources
- **Bitcoin Stickers**: Downloadable designs for public Bitcoin awareness
- **Bitcoin Postcards**: Snail mail outreach materials
- **Business Kits**: Resources for merchant Bitcoin adoption
- **Distribution Strategy**: Free download model with community sharing

## Current Challenges

### Technical Challenges
- **Translation Completeness**: Ensuring all languages have complete translations
- **Performance Optimization**: Balancing feature richness with loading speed
- **Mobile Experience**: Optimizing for diverse mobile devices and screen sizes
- **Accessibility**: Maintaining WCAG compliance across all content

### Content Challenges
- **Link Maintenance**: Keeping external links current and functional
- **Content Relevance**: Ensuring educational content reflects current Bitcoin landscape
- **Quality Control**: Maintaining high standards for curated resources
- **Scope Management**: Balancing comprehensiveness with simplicity

### Community Challenges
- **Contributor Onboarding**: Making it easy for non-technical contributors to participate
- **Translation Coordination**: Managing multiple simultaneous translation efforts
- **Quality Assurance**: Ensuring translation accuracy and cultural appropriateness
- **Sustainable Growth**: Building long-term community engagement

## Immediate Next Steps

### Short-term (Next 1-2 weeks)
1. **Complete Memory Bank**: Finish activeContext.md and progress.md files
2. **Review Translation Status**: Assess current translation completeness
3. **Update External Links**: Verify and refresh external resource links
4. **Performance Audit**: Check current site performance metrics

### Medium-term (Next 1-2 months)
1. **Translation Push**: Focus on completing high-priority language translations
2. **Content Refresh**: Update educational content based on recent Bitcoin developments
3. **Community Outreach**: Engage with Bitcoin education community for feedback
4. **Technical Improvements**: Implement any identified performance optimizations

### Long-term (Next 3-6 months)
1. **Platform Evolution**: Consider enhancements based on user feedback
2. **Resource Expansion**: Develop new educational tools and resources
3. **Partnership Development**: Explore collaborations with other Bitcoin education projects
4. **Impact Measurement**: Develop metrics for measuring educational impact

## Key Stakeholders

### Primary Maintainers
- **Project Leadership**: Core team responsible for strategic direction
- **Technical Contributors**: Developers maintaining codebase and infrastructure
- **Content Curators**: Team members responsible for educational content quality

### Community Contributors
- **Translators**: Volunteers providing multi-language support
- **Content Reviewers**: Community members suggesting improvements and updates
- **Testers**: Users providing feedback on functionality and user experience

### End Users
- **Bitcoin Newcomers**: Primary target audience seeking Bitcoin education
- **Bitcoin Advocates**: Users sharing resources with others
- **Business Owners**: Merchants considering Bitcoin adoption

This active context provides the current state and immediate focus areas for the bitcoin.rocks project.
