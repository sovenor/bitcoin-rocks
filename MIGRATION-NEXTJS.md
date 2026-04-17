# bitcoin.rocks → Next.js 16 + React 19 + TypeScript + Tailwind v4 Migration

**Status:** Phase 3 complete · Awaiting Phase 4 (SEO / JSON-LD / sitemap helpers)
**Branch:** `v2-nextjs-redesign` (contains this plan + all 21 pre-existing V2 commits + Phase 1 scaffold + Phase 2 i18n wiring + Phase 3 shared layout components)
**Main branch:** frozen at `origin/main` (`6cb07406`) — production keeps deploying unchanged until cutover.

---

## Why we're doing this

1. Eliminate duplicated/drifting components (e.g. the copy-pasted `<footer>` across 40+ HTML files) via real React component reuse.
2. Match the stack of sibling projects [`vote-for-better-money`](https://github.com/sovenor/vote-for-better-money) (Next 16 + React 19 + TS + Tailwind v4) and [`bitcoinpricereport`](https://github.com/sovenor/bitcoinpricereport) (Next 14 + TS).
3. Make every locale **server-rendered** (huge SEO win — currently only English is visible to crawlers without JS).
4. Get type safety for editing + much better AI-assisted workflow.
5. Opportunity to complete the V1 → V2 design system migration in one pass instead of doing it twice (once in static HTML, once in Next).

## Locked-in decisions

| # | Decision | Value |
|---|---|---|
| 1 | URL shape | **Path-based** locales (`/en/inflation`, `/th/inflation`, `/es/inflation`, …) |
| 2 | Locale detection | Detect from `Accept-Language` on first visit → 301 to `/<lang>/…`; remember in cookie; manual switcher always overrides |
| 3 | Deploy target | Full Next server on **Railway** (matches existing Railway hosting + sibling projects) |
| 4 | Repo layout | Convert **root directly** (inside `v2-nextjs-redesign` branch) — not a subdirectory |
| 5 | Styling | **Full Tailwind v4 rewrite** — no `css/style.css` carried forward; design-token config mirrors brand |
| 6 | Design refresh | Apply V2 redesign **during port** for Bucket A pages; port faithfully (in Tailwind) for Bucket B/C and redesign later |
| 7 | `main` branch | **Untouched** until cutover day; Railway keeps deploying current static site |
| 8 | Branch strategy | All work on `v2-nextjs-redesign`; periodic `git merge main` to pick up translator PRs; final merge → `main` for cutover |
| 9 | Language count | **Keep all ~60** (huge multilingual SEO upside, zero extra cost per language) |

## Safety invariants (do not violate)

- **Never force-push to `origin/main`.** Ever.
- **Never push anything to `origin/main`** during migration. It's a frozen reference.
- **Always `git merge main` into `v2-nextjs-redesign`**, not the reverse, until cutover day.
- **Before each phase commit**, verify working tree clean and on `v2-nextjs-redesign`.
- **`forms-backend/` stays untouched.** It's a separate Railway service. The Next frontend just POSTs to its existing URLs.

## Reference projects to crib from

- `../vote-for-better-money/app/layout.tsx` — canonical Next 16 + React 19 layout with Script tags, GA, metadata, organization JSON-LD, favicons
- `../vote-for-better-money/next.config.ts` — redirects + headers patterns for Railway
- `../vote-for-better-money/components/Footer.tsx` / `Navbar.tsx` — component structure
- `../bitcoinpricereport/client/src/components/Footer.tsx` — alternate Footer pattern reference

---

## How to resume this work in a new Cline session

**Every new task should start with:**
1. Read `MIGRATION-NEXTJS.md` (this file) — read it first, top to bottom.
2. Read `memory-bank/migration/page-inventory.md` — per-page bucket classifications.
3. Check `git status` and `git branch --show-current` — should be `v2-nextjs-redesign`.
4. Pick the next unchecked phase below and start.
5. When done, commit on `v2-nextjs-redesign`, push, update this file's checkboxes.

**Current position pointer:** Phase 3 done → starting Phase 4 next.

---

## Phase 0 — Pre-flight ✅ COMPLETE

- [x] Create `v2-nextjs-redesign` branch preserving all 21 V2 commits
- [x] Rewind local `main` to match `origin/main`
- [x] Push `v2-nextjs-redesign` to GitHub
- [x] Read memory bank core files (`projectbrief.md`, `productContext.md`, `techContext.md`)
- [x] Write `scripts/audit-v2-v1-pages.js` to classify pages V1/V2/Mixed
- [x] Run audit → generate `memory-bank/migration/page-inventory.md`
- [x] Write `MIGRATION-NEXTJS.md` (this file)
- [x] Commit Phase 0 on `v2-nextjs-redesign` and push

## Phase 1 — Scaffold Next.js app ✅ COMPLETE

Goal: Working `npm run dev` at `localhost:3000/en` with zero pages, but layout + globals + Tailwind wired up.

- [x] Scaffold Next 16 app manually (no `create-next-app` — deterministic file-by-file) with `package.json`, `tsconfig.json`, `next-env.d.ts`, `eslint.config.mjs`, `postcss.config.mjs`
  - Using Next 16.2.4 + React 19 + TypeScript 5.6 + Tailwind v4 (matching sibling vote-for-better-money)
  - Added `legacy/` to `.gitignore` plus the usual Next/TS entries
- [x] Create `next.config.ts`:
  - `turbopack.root = __dirname` ✓
  - `images: { formats: ["image/webp"] }` ✓
  - Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) ✓
  - Long-cache headers for `/img/*` + `/favicons/*` ✓
  - Empty `redirects()` (Phase 13 will populate) ✓
- [x] Design tokens via **Tailwind v4 `@theme` block in `app/globals.css`** (no `tailwind.config.ts` — v4 is CSS-first):
  - Brand colors: `bitcoin-orange #FF9500`, bg `#060610`, bg-soft `#090814`, fg/fg-muted/fg-dim/border
  - All 21 topic accents harvested from `css/style.css`: energy, freedom, money, saving, salary, art, politics, war, coding, ai, networks, self-custody, property-rights, business, environment, crowdfunding, housing, equality, food, payments, gold, cash, human-rights, get-started
  - Font families: `proxima` (Proxima Nova), `proxima-soft` (for home pills)
  - Breakpoints: `--breakpoint-xs: 400px` + `--breakpoint-md: 700px` to match old CSS media queries
- [x] `app/globals.css` — `@import "tailwindcss";` + `@theme {}` + baseline body rules. `css/style.css` NOT imported.
- [x] `app/layout.tsx` — root pass-through (returns children) so per-locale `<html lang dir>` can live in `app/[locale]/layout.tsx`
- [x] `app/[locale]/layout.tsx` — emits `<html lang={locale} dir={ltr|rtl}>`, Typekit link (`https://use.typekit.net/ful2oqu.css` — the actual kit ID used on the live site, NOT `ghu2hdm`), GA gtag script (ID `G-18L58W2GTN`), favicon metadata, `<main>{children}</main>`
  - RTL locale set: `ar`, `fa`, `he`, `ur`
- [x] `app/[locale]/page.tsx` — placeholder showing "Next.js migration in progress" + current locale code
- [x] `app/page.tsx` — temporary `redirect('/en')` so `/` works during Phase 1 (Phase 2 middleware will replace this with Accept-Language detection)
- [x] `public/img/` — copied (69 MB) from `img/`
- [x] `public/favicons/` — copied (500 KB) from `img/favicons/`
- [x] `npm install` — 359 packages, 0 vulnerabilities
- [x] `npm run build` — ✓ Compiled successfully in 1615ms, TypeScript clean, routes: `/` (static) + `/_not-found` + `/[locale]` (dynamic)
- [x] `npm run dev` verified: `GET /en` → 200 with placeholder HTML (serves "Next.js migration in progress"); `GET /` → 307 to `/en`
- [x] Kept all old `.html`, `jquery/`, `css/style.css` — static site still works as source reference
- [x] Commit: "Phase 1: scaffold Next.js app"

## Phase 2 — i18n wiring with `next-intl` ✅ COMPLETE

Goal: `/en/` vs `/es/` vs `/ar/` etc. serve different server-rendered translated strings loaded from the existing `i18n/` JSON files.

- [x] `npm install next-intl` — added `next-intl@4.5.3` (21 packages, 0 vulnerabilities)
- [x] `lib/i18n/config.ts` — full 55-locale list mirroring `jquery/language.js` (English first, then alphabetical by native name); exports `languages`, `locales`, `Locale` type, `defaultLocale`, `RTL_LOCALES`, `isValidLocale()` helper
- [x] `lib/i18n/load-messages.ts` — reads existing `i18n/<locale>/<namespace>_<locale>.json` files (including nested `business/`, `nostr/`, `sticker-files/` paths), strips `@metadata`, falls back to English per-key when target locale omits a key. In-memory cache keyed by `locale::namespace`.
- [x] `lib/i18n/request.ts` — `getRequestConfig` using `hasLocale(locales, ...)` for validation; Phase 2 eagerly loads `common` + `index` namespaces; later phases add per-page sets.
- [x] `lib/i18n/routing.ts` — `defineRouting({ locales, defaultLocale: 'en', localePrefix: 'always', localeDetection: true })` so middleware handles `/` → `/<accept-language>` on first visit and persists the choice in a cookie.
- [x] `middleware.ts` at root — `createMiddleware(routing)` + matcher `/((?!api|_next|_vercel|.*\\..*).*)` so Next internals + static files (favicon, images, sitemap, robots, llms.txt) bypass i18n.
- [x] `next.config.ts` wrapped with `createNextIntlPlugin('./lib/i18n/request.ts')`.
- [x] `app/[locale]/layout.tsx` — validates locale with `hasLocale()` + `notFound()`, calls `setRequestLocale(locale)`, wraps children in `<NextIntlClientProvider locale={locale} messages={messages}>`; adds `generateStaticParams()` so all 55 locales are static-prerendered.
- [x] `app/[locale]/page.tsx` — renders `t("home_h1")` + `t("home_intro")` via server-side `getTranslations()` so translated HTML is in the initial response (no hydration needed).
- [x] Deleted `app/page.tsx` — middleware now handles `/` → Accept-Language-matched locale redirect.
- [x] `npm run build` → ✓ compiled 1.9s, TypeScript clean, **57 routes generated** (1 not-found + middleware proxy + 55 static per-locale pages `/en`, `/af`, `/az`, … `/ko`).
- [x] Verified via `curl http://localhost:3000/<lang>`:
  - `/en` → `<html lang="en" dir="ltr">` with English H1 + intro ✓
  - `/es` → `<html lang="es" dir="ltr">` with Spanish intro ✓ (English fallback on missing keys works)
  - `/ar` → `<html lang="ar" dir="rtl">` with Arabic intro ✓ (RTL direction correct)
  - `/zh` → `<html lang="zh" dir="ltr">` with Simplified Chinese intro ✓
- [x] Key-namespace convention documented: **flat snake_case keys preserved** (`home_h1`, `common_footer_about`, …). One JSON file per page = one logical namespace, but we load multiple namespaces into a single flat bag per request (matches legacy jquery.i18n behavior + zero disruption to the ~60 translator contributors). Nested paths for subdirs are passed as `"business/wallets"`.
- [x] Commit: "Phase 2: i18n wiring with next-intl"

## Phase 3 — Shared layout components ✅ COMPLETE

Goal: Every page inherits the same `<Navbar>` + `<Footer>` via `layout.tsx`. Zero duplication.

- [x] `lib/i18n/navigation.ts` — thin wrapper around `next-intl`'s `createNavigation(routing)`, exports locale-aware `Link`, `usePathname`, `useRouter`, `redirect`, `getPathname`. Used by Navbar, Footer, LanguageSwitcher so `/inflation` becomes `/<current-locale>/inflation` automatically.
- [x] `components/Footer.tsx` — ports the canonical V2 footer from current `index.html` (the one with `.footer-logo-wrap`): centered logo with horizontal line breaking behind it, tagline, dot-separated link row (About · Contribute · Nostr · email). All styles in Tailwind utility classes (including inline hex colors for `#555` dividers to avoid adding theme tokens). Uses `t()` via `getTranslations()` for `common_footer_tagline`, `common_footer_about`, `common_footer_contribute`, `common_footer_nostr`.
- [x] `components/Navbar.tsx` — V2 pill nav (`.site-nav--v2` equivalent): logo-on-top-of-pill pattern. Server Component that renders translated `home_nav_learn` / `home_nav_get_involved` / `home_nav_about` keys into the pill, plus slots in `<LanguageSwitcher />` as the 4th pill cell.
- [x] `components/LanguageSwitcher.tsx` — Client Component that ports `jquery/language.js` behavior: reads current locale via `useLocale()`, renders a button with the native display name, opens a dropdown listing all 55 languages + the "Add language" row, on select fires `gtag('event', 'language_switch', { event_category, event_label, language_selected })` and calls `router.replace(pathname, { locale })` (next-intl writes the `NEXT_LOCALE` cookie automatically). Also fires `language_pageview` once on mount with `language_source: 'stored' | 'browser'` derived from the presence of the `NEXT_LOCALE` cookie. Dropdown closes on outside-click via a `document` mousedown listener. `TRANSLATION_VERSION` cache-bust removed — Next's page regeneration handles cache invalidation automatically.
- [x] `components/GoogleAnalytics.tsx` — `<Script strategy="afterInteractive">` wrapper with the `G-18L58W2GTN` measurement ID baked in as a module constant.
- [x] Wire all 4 into `app/[locale]/layout.tsx`: GA emits first inside `<body>`, then `<NextIntlClientProvider>` wraps `<Navbar /> <main>{children}</main> <Footer />`.
- [x] Moved the Typekit `<link>` + GA `<Script>` out of the inline layout and into a clean head / body separation.
- [x] Updated `app/[locale]/page.tsx` stub to drop its previous `min-h-screen` / flex-centering (nav + footer now sandwich `{children}` — content just needs normal section padding).
- [x] `npm run build` → ✓ compiled 2.2s, TypeScript clean, **57 routes** generated. The "overly broad patterns" warning on `load-messages.ts` `fs.readFile` is a Turbopack perf hint, not an error.
- [x] Verified via `npm run start` + `curl`:
  - `/en` → 200, page source contains "Learn", "Get Involved", "About", "English" (nav labels), "Accelerating bitcoin adoption through education." (footer tagline), "hi@bitcoin.rocks" (footer email), `rocks-logo` (nav + footer logo)
  - `/ar` → `<html lang="ar" dir="rtl">` — RTL still correct with full nav + footer
  - `/es` → Spanish footer tagline "Acelerando la adopción de bitcoin a través de la educación." ✓ — confirms `common_footer_tagline` translations are wiring end-to-end
- [x] Commit: "Phase 3: shared Footer, Navbar, LanguageSwitcher, GA components"

**Deferred:** `components/ScrollProgress.tsx` is listed as optional in the migration plan; we'll crib it from vote-for-better-money later if any page actually wants it. None of the V2 pages use one today.

## Phase 4 — SEO / JSON-LD / sitemap helpers (1 task)

Goal: Replace the `scripts/inject-*.js` pipeline with TypeScript helpers that run at page-render time.

- [ ] `lib/schema/article.ts` — port `scripts/inject-article-schema.js`
- [ ] `lib/schema/breadcrumb.ts` — port `scripts/inject-breadcrumb-schema.js`
- [ ] `lib/schema/organization.ts` — port `scripts/inject-organization-schema.js`
- [ ] `lib/schema/comparison.ts` — port `scripts/inject-comparison-schema.js`
- [ ] `lib/schema/reviewed-badge.ts` — port `scripts/inject-reviewed-badge.js`
- [ ] `lib/schema/hreflang.ts` — NEW: generate `<link rel="alternate" hreflang="…">` for every locale × current path, for every page
- [ ] `app/sitemap.ts` — enumerate all pages × all locales (replaces static `sitemap.xml`)
- [ ] `app/robots.ts` — port `robots.txt`
- [ ] Copy `llms.txt` + `llms-full.txt` to `public/` as-is (they're content, no processing needed yet)
- [ ] Add `Article` / `WebPage` metadata helper that derives `dateModified` from the English JSON's `@metadata.last-updated` field (automated — no more manual date updates)
- [ ] Commit: "Phase 4: SEO + JSON-LD + sitemap helpers"

## Phase 5 — Homepage (1 task)

Goal: `/en/` matches current live `bitcoin.rocks/` pixel-for-pixel (it's already V2 so this is a direct port in Tailwind).

- [ ] `app/[locale]/page.tsx` — port `index.html` structure (all 943 lines — big page but all V2)
- [ ] `components/HomeCarousel.tsx` — port `jquery/home-carousel.js` (Client Component, drag-to-scroll, seamless CSS-keyframe infinite loop, pause on hover, smooth anchor scroll)
- [ ] `components/HomePill.tsx` — `.home-pill` component with color-class variant (energy/freedom/money/network/savings etc.)
- [ ] `components/WhatsNextCard.tsx` — `.whats-next-card` with `--card-accent` variable via inline style prop
- [ ] `components/SavingSection.tsx` — new section from commit `caba0d26`
- [ ] All strings via `t()` from `i18n/en/index_en.json` etc.
- [ ] Visual parity check vs `bitcoin.rocks` production site
- [ ] Commit: "Phase 5: Homepage in Next.js"

## Phase 6 — Inflation page (2 tasks — it's huge: 3036 lines)

### Phase 6a — Static shell + country selector
- [ ] `app/[locale]/inflation/page.tsx` — port all static sections (hero, intro, chart placeholder, stat grid shell, "what's next?" section)
- [ ] `components/CountrySelector.tsx` — port `jquery/country-selector-inflation.js` (Client Component, emits `gtag('event', 'select_currency', …)`)
- [ ] Commit: "Phase 6a: Inflation page shell + country selector"

### Phase 6b — Stats + calculators (Client Components)
- [ ] `components/InflationStats.tsx` — port `jquery/inflation-stats.js` (fetches from `forms-backend/` API)
- [ ] `components/CompoundInflationCalculator.tsx` — port `jquery/compound-inflation-calculator.js`
- [ ] `components/CompoundInflationCalculatorSolo.tsx` — variant for `/compound-inflation-calculator`
- [ ] `components/DynamicHeader.tsx` — port `jquery/dynamic-header.js` for sticker/sign/link URL params
- [ ] Commit: "Phase 6b: Inflation stats, calculators, dynamic header"

## Phase 7 — Bucket A pages: comparison pages with V2 redesign (2-3 tasks)

All 10 `bitcoin-vs-*` pages + `bank-runs` share the comparison-page shape. Template: inflation-style (hero + intro + sections + whats-next + footer).

Port **with** V2 redesign applied during port. Create a shared `app/[locale]/bitcoin-vs-[target]/page.tsx` pattern (maybe a dynamic route with a data file, or one page.tsx each — TBD).

### Phase 7a — Shared comparison layout + first 3 pages
- [ ] Design `components/ComparisonPageLayout.tsx` pattern that works for all
- [ ] `bitcoin-vs-gold` ← port + V2 redesign
- [ ] `bitcoin-vs-stocks` ← port + V2 redesign
- [ ] `bitcoin-vs-cash` ← port + V2 redesign
- [ ] Commit: "Phase 7a: Comparison layout + first 3 comparisons"

### Phase 7b — Next 4 comparison pages
- [ ] `bitcoin-vs-banks` ← port + V2 redesign
- [ ] `bitcoin-vs-bonds` ← port + V2 redesign
- [ ] `bitcoin-vs-real-estate` ← port + V2 redesign
- [ ] `bitcoin-vs-crypto` ← port + V2 redesign
- [ ] Commit: "Phase 7b: 4 more comparison pages"

### Phase 7c — Remaining comparison + bank-runs
- [ ] `bitcoin-vs-visa` ← port + V2 redesign
- [ ] `bitcoin-vs-cbdc` ← port + V2 redesign (713 lines — largest)
- [ ] `bitcoin-vs-fine-art` ← port + V2 redesign
- [ ] `bank-runs` ← port + V2 redesign (512 lines, different shape but similar)
- [ ] Commit: "Phase 7c: Final comparisons + bank-runs"

## Phase 8 — Bucket A content pages (1 task)

- [ ] `app/[locale]/about/page.tsx` ← port + V2 redesign
- [ ] `app/[locale]/get-involved/page.tsx` ← port + V2 redesign
- [ ] Commit: "Phase 8: about + get-involved"

## Phase 9 — Bucket B unique-shape pages (2 tasks)

Port **faithfully** in Tailwind; defer V2 redesign.

### Phase 9a — Educational / info Bucket B
- [ ] `app/[locale]/wallets/page.tsx` ← faithful Tailwind port (997 lines — largest V1 page)
- [ ] `app/[locale]/lightning/page.tsx` ← faithful Tailwind port
- [ ] `app/[locale]/flyers/page.tsx` ← faithful Tailwind port
- [ ] `app/[locale]/compound-inflation-calculator/page.tsx` ← faithful (uses Phase 6b calculator solo variant)
- [ ] Commit: "Phase 9a: wallets, lightning, flyers, calculator-solo"

### Phase 9b — Form pages + successes
- [ ] `components/StickerPicker.tsx` ← port `jquery/sticker-picker.js`
- [ ] `components/CountrySelectorForm.tsx` ← port `jquery/country-selector-forms.js`
- [ ] `components/BuyFlow.tsx` ← port `jquery/buy-flow.js` (multi-step wizard)
- [ ] `app/[locale]/stickers/page.tsx`
- [ ] `app/[locale]/signs/page.tsx`
- [ ] `app/[locale]/postcards/page.tsx`
- [ ] `app/[locale]/buy/page.tsx`
- [ ] `app/[locale]/sticker-success/page.tsx`
- [ ] `app/[locale]/sign-success/page.tsx`
- [ ] `app/[locale]/postcard-success/page.tsx`
- [ ] `app/[locale]/sticker-language-success/page.tsx`
- [ ] Forms POST to existing `forms-backend/` endpoints — no backend changes
- [ ] Commit: "Phase 9b: sticker/sign/postcard forms + buy-flow + success pages"

## Phase 10 — Bucket C business section (1-2 tasks)

- [ ] `app/[locale]/business/page.tsx`
- [ ] `app/[locale]/business/accounting/page.tsx`
- [ ] `app/[locale]/business/faq/page.tsx`
- [ ] `app/[locale]/business/guide/page.tsx`
- [ ] `app/[locale]/business/kit/page.tsx` + `kit-success`
- [ ] `app/[locale]/business/maps/page.tsx` + `maps-success`
- [ ] `app/[locale]/business/stickers/page.tsx` + `sticker-success` + `sticker-language-success`
- [ ] `app/[locale]/business/wallets/page.tsx`
- [ ] `app/[locale]/business/why/page.tsx`
- [ ] `business/files/` + `business/sticker-files/` static assets → move to `public/`
- [ ] Commit: "Phase 10: business section"

## Phase 11 — Sticker-files section (1 task)

The `sticker-files/<language>/index.html` pattern is essentially a directory listing of downloadable PNGs/PDFs per language.

- [ ] Decide: dynamic route `app/[locale]/sticker-files/[lang]/page.tsx` driven by filesystem listing, or flat set of pages. Probably dynamic.
- [ ] `sticker-files/` static assets → move to `public/sticker-files/`
- [ ] Commit: "Phase 11: sticker-files section"

## Phase 12 — Nostr section (1 task)

- [ ] `app/[locale]/nostr/page.tsx`
- [ ] `app/[locale]/nostr/what-is-nostr/page.tsx`
- [ ] Commit: "Phase 12: nostr section"

## Phase 13 — 404, redirects, sitemap, misc (1 task)

- [ ] `app/not-found.tsx` — port `404.html`
- [ ] Populate `next.config.ts` `redirects()` with:
  - `/inflation` → `/en/inflation` (and every other old unlocaled URL)
  - Any legacy URLs from `nginx.conf` / `.htaccess`
  - Removed pages → target pages
- [ ] Verify `app/sitemap.ts` emits every locale × page combination
- [ ] Remove `sitemap.xml` from `public/` (Next generates it)
- [ ] Review `nginx.conf` + `.htaccess` for anything else that needs `headers()` or `redirects()` treatment
- [ ] Commit: "Phase 13: 404, redirects, final sitemap"

## Phase 14 — Cleanup + documentation update (1 task)

- [ ] **Delete** old assets that are now superseded:
  - All root `*.html` files (production pages) — after confirming Next equivalents are working
  - `business/*.html` files
  - `nostr/*.html` files
  - `sticker-files/*/index.html`
  - `css/style.css`
  - `jquery/` folder (entire folder — `jquery.min.js`, `language.js`, `home-carousel.js`, `country-selector-inflation.js`, `country-selector-forms.js`, `inflation-stats.js`, `dynamic-header.js`, `compound-inflation-calculator*.js`, `sticker-picker.js`, `buy-flow.js`, `jquery.i18n/`)
  - `nginx.conf`, `.htaccess` (replaced by `next.config.ts`)
  - Old injection scripts now obsolete:
    - `scripts/inject-seo-content.js`
    - `scripts/inject-article-schema.js`
    - `scripts/inject-breadcrumb-schema.js`
    - `scripts/inject-comparison-schema.js`
    - `scripts/inject-organization-schema.js`
    - `scripts/inject-reviewed-badge.js`
    - `scripts/fix-carousel-wrap.js`
    - `scripts/update-inflation-i18n.js`
    - `scripts/update-inflation-revamp.js`
    - `scripts/audit-v2-v1-pages.js` (served its one-time purpose)
- [ ] **Keep** these scripts (still useful in new stack):
  - `scripts/audit-translation.js` — still reads JSON files
  - `scripts/update-about-lang-count.js` — still relevant
  - `scripts/<language>/create-*.js` — translation bootstrap helpers
  - `scripts/add-faq-keys.js`, `scripts/add-whats-next-keys.js` — JSON key adders
  - `scripts/inflation-multi/` — multi-currency data helpers
- [ ] Update `.clinerules/workspace-rules.md`:
  - Remove "Static Site First" / "jQuery-based" / "no modern JS frameworks" statements
  - Describe new Next 16 / React 19 / TS / Tailwind v4 stack
  - Update "Common Tasks" section (no more `inject-*.js` flow)
  - Update "V2 Design System" section to describe Tailwind-based tokens
  - Keep i18n workflow (mostly unchanged for contributors)
- [ ] Update `.clinerules/workflows/translate-new-language.md`:
  - Remove step for `scripts/inject-seo-content.js`
  - Point to new Next-based i18n config
  - Update language array location (`lib/i18n/config.ts`)
- [ ] Update `memory-bank/projectbrief.md`, `productContext.md`, `techContext.md`, `systemPatterns.md`, `activeContext.md`, `progress.md`
- [ ] Refresh `CONTRIBUTING.md` (translator workflow unchanged; dev workflow = Next.js)
- [ ] Refresh `GEO-CHECKLIST.md`
- [ ] Refresh `llms.txt` / `llms-full.txt` if URL shapes changed
- [ ] Update `README.md` setup instructions: `npm install` + `npm run dev` instead of `python -m http.server`
- [ ] Commit: "Phase 14: cleanup + docs"

## Phase 15 — Pre-cutover QA + cutover (1 task)

- [ ] Run `npm run build` — verify no errors, static analysis passes
- [ ] Deploy `v2-nextjs-redesign` to Railway **staging service** (not prod)
- [ ] QA every page × sample of locales:
  - English: full click-through
  - Spanish, German (Latin)
  - Arabic (RTL layout test)
  - Simplified Chinese (CJK + wide chars)
  - Thai (no-space script)
  - One African language for coverage (e.g. Swahili)
- [ ] `view-source:` every sampled page to confirm translated HTML is in markup (not hydrated post-load)
- [ ] Run complete `GEO-CHECKLIST.md` pass
- [ ] Verify `robots.txt`, `sitemap.xml`, `hreflang` tags present and correct
- [ ] Verify forms still submit to forms-backend
- [ ] Verify inflation stats fetch works
- [ ] Verify GA custom events still fire (`language_pageview`, `language_switch`, `select_currency`)
- [ ] Test locale redirect: visit `bitcoin.rocks/inflation` → should 301 to `/en/inflation` (or the Accept-Language match)
- [ ] Test share-link scenario: share `/th/inflation`, recipient sees Thai regardless of their browser
- [ ] **Cutover:**
  1. `git checkout main`
  2. `git merge v2-nextjs-redesign` (fast-forward or explicit merge commit)
  3. `git push origin main` — Railway auto-redeploys with Next.js app
  4. Watch Railway logs, verify healthy
  5. Manual smoke test of live `bitcoin.rocks/`
- [ ] Post-cutover: open GitHub release tagged `v2.0.0` with migration notes
- [ ] Commit: "Phase 15: cutover complete"

---

## Post-migration Bucket B redesign queue (optional / later)

After cutover, these Bucket B pages can be V2-redesigned individually. Each is its own small task in the new stack — much faster than doing design + framework migration simultaneously.

- [ ] V2 redesign: `wallets`
- [ ] V2 redesign: `lightning`
- [ ] V2 redesign: `flyers`
- [ ] V2 redesign: `compound-inflation-calculator` (solo)
- [ ] V2 redesign: `stickers` (form pages are a design sub-problem)
- [ ] V2 redesign: `signs`
- [ ] V2 redesign: `postcards`
- [ ] V2 redesign: `buy`
- [ ] V2 redesign: `*-success` pages
- [ ] V2 redesign: `business/*` (full Bucket C section once design is settled)
- [ ] V2 redesign: `nostr/*`
- [ ] V2 redesign: `404`

---

## Known gotchas / things to watch

1. **Translation keys** — current convention is flat snake_case (`home_section_title`). `next-intl` supports both flat and nested. Decision: **keep flat** for minimum disruption to existing JSON files + contributor workflow. We can namespace via file-level (one JSON per page = one namespace).
2. **`@metadata.last-updated`** + `dateModified` — currently manually updated. Next migration: read from JSON file metadata + derive automatically. The `.clinerules` rule about dates becomes partially automatic.
3. **Cache-busting on translation updates** — current `TRANSLATION_VERSION` in `language.js`. In Next, page regeneration (ISR) or full rebuild handles this automatically.
4. **`jquery.i18n` parser syntax** — current translation files may use `{0}`, `{1}` placeholders from jquery.i18n's CLDR-based parser. `next-intl` uses ICU MessageFormat which is similar but not identical. Audit this during Phase 2. For most strings they're compatible; watch plurals.
5. **RTL languages (Arabic, Persian, Hebrew, Urdu)** — need `<html dir="rtl">` attribute emitted per-locale in `layout.tsx`.
6. **Google Analytics custom dimensions** — already registered in GA4 for `event_category`, `event_label`, `language_active`, `language_source`, `language_selected`, `currency`. No action needed; parameter names just need to match.
7. **`.github/workflows/update-fred-chart.yml`** — still runs, still writes data files. Next picks them up at next build. No change needed unless the paths change.
8. **`forms-backend/` stays as-is** — separate Railway service at its current URL. Next POSTs to it the same way.
9. **SEO during cutover** — Google will take a day or two to reindex with new locale URL structure. `hreflang` tags help. 301 redirects from old URLs preserve link juice. No manual Search Console action needed.
10. **Railway build config** — may need `nixpacks.toml` update to describe Next.js build (node + npm + `next build` + `next start`). Reference `../vote-for-better-money` if it has a `nixpacks.toml`.
11. **Long shell commands get stuck** — use Node scripts instead unless the shell command is very short and simple.

---

## Glossary

- **V1** — legacy design system. Classes like `.h2-section`, `.text-box.top/.middle/.bottom`, `.container-jump`, `.home-h1`, `.home-intro`.
- **V2** — new design system from April 2026. Classes like `.site-nav--v2`, `.h1-inflation`, `.whats-next-card`, `.home-pill`, `.category-section`, `.inflation-section`, `.body-link`, `.inflation-intro`. Documented in `.clinerules/workspace-rules.md`.
- **Bucket A/B/C** — see `memory-bank/migration/page-inventory.md`. A = port+redesign, B = port-faithful-redesign-later, C = port-faithful-optional-redesign.
- **Cutover** — the single merge commit that replaces the static site with the Next.js site on `main`, triggering Railway prod deploy.
