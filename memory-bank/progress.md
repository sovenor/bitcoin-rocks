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
