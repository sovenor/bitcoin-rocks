# bitcoin.rocks → Next.js 16 + React 19 + TypeScript + Tailwind v4 Migration

**Status:** Phase 7a complete · Awaiting Phase 7b (4 more Bucket A comparison pages)
**Branch:** `v2-nextjs-redesign` (contains this plan + all 21 pre-existing V2 commits + Phase 1 scaffold + Phase 2 i18n wiring + Phase 3 shared layout components + Phase 4 SEO/JSON-LD/sitemap helpers + Phase 5 homepage port + Phase 6a inflation shell + Phase 6b inflation stats / calculators / dynamic header + Phase 7a comparison layout + gold/stocks/cash)
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

**Current position pointer:** Phase 7a done → starting Phase 7b next.

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

## Phase 4 — SEO / JSON-LD / sitemap helpers ✅ COMPLETE

Goal: Replace the `scripts/inject-*.js` pipeline with TypeScript helpers that run at page-render time.

- [x] `lib/site.ts` — canonical site-wide constants (origin, brand, logo, GA id, `buildUrl()` helper)
- [x] `lib/pages.ts` — canonical page registry (slug, phase, sitemap priority, changeFrequency, English JSON namespace, `published` flag). Pages are listed now so future phases just flip `published: true` when they port; sitemap only emits published pages so the index never advertises 404s.
- [x] `components/JsonLd.tsx` — tiny `<script type="application/ld+json">` renderer with `</` escape for XSS safety.
- [x] `lib/schema/organization.ts` — ports `scripts/inject-organization-schema.js`. Exports `buildOrganizationSchema()` (full node) + `ORGANIZATION_REF` (`@id` reference used by every other schema so they don't duplicate the node).
- [x] `lib/schema/website.ts` — homepage-only WebSite schema with SearchAction + `inLanguage` list sourced from `lib/i18n/config.ts` (all 55 locales).
- [x] `lib/schema/article.ts` — ports `scripts/inject-article-schema.js`. Picks Article vs WebPage based on slug; reads `dateModified` automatically from `date-modified.ts`.
- [x] `lib/schema/breadcrumb.ts` — ports `scripts/inject-breadcrumb-schema.js`. Emits `Home > [Section] > Page` trails. Returns `null` for the homepage (no breadcrumb needed).
- [x] `lib/schema/comparison.ts` — ports `scripts/inject-comparison-schema.js`. Accepts typed `ComparisonPoint[]` data instead of HTML-scraping (caller passes already-translated strings) — type-safe + zero disruption to translator workflow.
- [x] `lib/schema/reviewed-badge.ts` — ports editorial-rigor semantics of `scripts/inject-reviewed-badge.js` as a helper (not a component) so pages render the badge wherever suits their V2 design.
- [x] `lib/schema/date-modified.ts` — reads `@metadata.last-updated` from the English JSON for any page slug. In-memory cached per-build. Automates the `dateModified` field so manual schema date edits are no longer needed.
- [x] `lib/schema/hreflang.ts` — NEW: `buildAlternates({locale, slug})` for the Next.js Metadata API (canonical + all 55 locale `languages`); `buildHreflangMap()` for the sitemap.
- [x] `app/sitemap.ts` — enumerates `getPublishedPages()` × all 55 locales; each entry includes `alternates.languages` so Next emits proper `<xhtml:link rel="alternate" hreflang="…">` per URL. `lastModified` reads English JSON `@metadata.last-updated`.
- [x] `app/robots.ts` — ports `robots.txt`. Global `User-agent: *` rules + per-agent entries for all 16 AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, Google-Extended, ClaudeBot, anthropic-ai, PerplexityBot, Applebot-Extended, Meta-ExternalAgent, Bingbot, Amazonbot, CCBot, cohere-ai, YouBot, Diffbot, Bytespider).
- [x] Copied `llms.txt` → `public/llms.txt` and `llms-full.txt` → `public/llms-full.txt` (content-only files, no processing).
- [x] Wired `<JsonLd data={buildOrganizationSchema()} />` into `app/[locale]/layout.tsx` `<head>` so every page across every locale emits the Organization node.
- [x] Updated `app/[locale]/page.tsx` to demonstrate the full pattern:
  - `generateMetadata()` returns `alternates: buildAlternates(...)` so Next emits `<link rel="alternate" hreflang="…">` for all 55 locales in the homepage `<head>`.
  - Body renders `<JsonLd data={buildWebSiteSchema()} />` (homepage-only WebSite+SearchAction) and `<JsonLd data={buildArticleSchema(...)} />` (per-locale WebPage with auto-derived `dateModified`).
- [x] `npm run build` → ✓ compiled 2.0s, TypeScript clean, **59 routes** static-generated (55 locale pages + /robots.txt + /sitemap.xml + /_not-found + middleware).
- [x] `npm run start` + `curl` spot-checks:
  - `/en` → 3 JSON-LD blocks in source (Organization, WebSite, WebPage), hreflang links for all 55 locales.
  - `/sitemap.xml` → valid XML with `<xhtml:link rel="alternate" hreflang="…">` per URL for all 55 locales.
  - `/robots.txt` → expected structure with per-AI-crawler Allow/Disallow blocks.
  - `/ar` → `<html lang="ar" dir="rtl">` ✓
- [x] Commit: "Phase 4: SEO + JSON-LD + sitemap helpers"

**Note:** Comparison + breadcrumb + reviewed-badge helpers are built but aren't wired into any page yet — they'll be called by Phase 5 (breadcrumb: no, home has none) / Phase 7 (comparison + breadcrumb on each bitcoin-vs-* page) / Phase 7-8 (reviewed-badge on educational pages). Having them ready means those phases are pure page-porting with no schema infrastructure work.

## Phase 5 — Homepage ✅ COMPLETE

Goal: `/en/` matches current live `bitcoin.rocks/` pixel-for-pixel (it's already V2 so this is a direct port in Tailwind).

- [x] `app/[locale]/page.tsx` — full port of `index.html` (hero + 2 carousels + 20 category sections with ~50 cards, mixed internal + external links, all via typed components)
- [x] `components/HomeCarousel.tsx` — Client Component. Ports `jquery/home-carousel.js` 1:1: RAF-driven `transform: translate3d(offset, 0, 0)` infinite scroll, bidirectional drag (mouse + touch), hover-pause, wheel/trackpad horizontal scroll, click-suppression after drag. Pills duplicated 2× in parent JSX so offset wraps around `halfWidth` invisibly.
- [x] `components/HomePill.tsx` — Server Component. Typed `HomePillColor` union (21 colors). Renders as plain `<a href="#anchor">` (not next-intl `<Link>`) so in-page anchor scroll uses the browser's native smooth-scroll + `scroll-padding-top: 20px` for offset. Duplicate instances get `aria-hidden` + `tabIndex=-1`.
- [x] `components/WhatsNextCard.tsx` — Server Component. Resolves `label`, `title`, and `authorKey` via `useTranslations()`; `external` prop adds `target="_blank"` + `rel="noopener noreferrer"`. Uses plain `<a>` with pre-localized href (caller passes `/${locale}/...`) — avoids needing `<Link>` inside a Server Component.
- [x] `components/CategorySection.tsx` — Server Component. Wraps the per-topic card grid, emits `<h2>Bitcoin &amp; <span class="accent">category</span></h2>`, sets `--card-accent` CSS variable via inline style so cards/accents inherit the section color without each card knowing its own.
- [x] All strings via `t()` from `i18n/en/index_en.json` — server-rendered at build time, no hydration flash. Locales with missing `home_h1` / `home_intro` (like `es`) fall back to English via the per-key fallback in `lib/i18n/load-messages.ts`.
- [x] V2 homepage CSS lifted from `css/style.css` into `app/globals.css` — all 21 `.home-pill.*` color classes, `.home-carousel-*`, `.home-hero .h1-inflation`, `.home-hero .inflation-intro`, `.whats-next-*`, `.category-section` — Tailwind token-first where possible, raw CSS where BEM-style class names + `--card-accent` CSS variable indirection is cleaner than utility classes.
- [x] `html { scroll-behavior: smooth; scroll-padding-top: 20px; }` replaces the legacy JS smooth-scroll — native CSS handles both smooth animation + the 20px offset baked into `home-carousel.js`'s `initAnchorScroll()`.
- [x] `npm run build` → ✓ compiled 2.1s, TypeScript clean, **59 routes** static-generated (55 locale pages + /_not-found + /robots.txt + /sitemap.xml + middleware).
- [x] `npm run start` + `curl` spot-checks:
  - `/en` → 200, 183 KB HTML. Source contains `home-hero`, `home-carousel-row`, 20 category section IDs (`money`, `freedom`, `energy`, …, `get-started`), all hero + card strings.
  - `/ar` → 200, `<html lang="ar" dir="rtl">`, full V2 structure intact.
  - `/es` → 200, same structure. Headline still English (Spanish `home_h1` not translated yet — English fallback confirmed).
- [x] Commit: "Phase 5: Homepage in Next.js"

**Deferred:** `components/SavingSection.tsx` — the saving section exists in the ported homepage; it didn't need a dedicated component because it fits the same `CategorySection` shape as every other topic (inline style `--card-accent: #F5A9B8` drives the pink accent). The reusable `CategorySection` + `WhatsNextCard` + `HomePill` trio replaces the need for per-section components.

**Visual parity check:** CSS ported verbatim (hero, carousels, pills with 21 color classes, cards, section headings with accent color). The one difference vs the live site is the nav — the Phase 3 Navbar is rendered in `app/[locale]/layout.tsx` rather than inline on the homepage; functionally equivalent, zero visual difference.

## Phase 6 — Inflation page (2 tasks — it's huge: 3036 lines)

### Phase 6a — Static shell + country selector ✅ COMPLETE

- [x] `app/[locale]/inflation/page.tsx` — full port of `inflation.html`: hero + country picker + 13 per-currency sections (intro, proof, Bitcoin-doesn't-have-inflation, freedom) + global "What's next?" + Sources block + Publisher Attribution. Each section wraps a `<CurrencySection code={code} … />`.
- [x] `components/CurrencySection.tsx` — Server Component (~400 lines). Accepts currency code + FRED/BPR URLs, resolves all `inflation_${lower}_*` and `inflation_stat_${lower}_*` keys via `useTranslations()`. Includes 4 inline `FeatureCard` SVG icons (decentralized, permissionless, sovereign, scarce) + 4 `StoryCard` icons (canada, nigeria, texas, pennsylvania) preserved 1:1 from the legacy HTML. Renders placeholder stat values (`+50%`, `-15%`, `—`) — Phase 6b will fill them in by targeting the `stat-*-${code}` DOM ids.
- [x] `components/CountrySelector.tsx` — Client Component. Ports `jquery/country-selector-inflation.js` 1:1: show-all → click-a-button → hide-the-rest + reveal the matching `<div id={CODE} class="countries">` + reveal `#global-whats-next-wrap`. "← Choose a different money" resets. Smooth scroll-to-top on both actions. `gtag('event', 'select_currency', { event_category: 'inflation', event_label: CODE })` emitted on selection. Visibility toggled imperatively via `useEffect` mutating `hidden` on `.countries` DOM nodes — keeps server-rendered HTML stable (all 13 sections in source for crawlers) while only the active one is visible.
- [x] Per-currency FRED + Bitcoin-Price-Report URL map mirrors `scripts/inflation-multi/rebuild-inflation-html.js` — same 13 currencies (USD, CAD, EUR, GBP, BRL, PHP, MXN, INR, JPY, AUD, ILS, THB, NZD) + EUR's `debt: null` (FRED doesn't publish Eurozone-level gross-debt).
- [x] i18n request config (`lib/i18n/request.ts`) — added `inflation` to the default namespaces so the ~480 `inflation_*` keys load alongside `common` + `index` on every request. In-memory cache means the overhead is read-once per locale per build.
- [x] `app/globals.css` — appended inflation-page CSS section (~400 lines): `.h1-inflation`, `.inflation-intro`, `.inflation-section`, `button.inflation-button` + `.container-inflation-button`, `.stat-cards-grid` + `.stat-card*`, `.stat-comparison-card*`, `.feature-cards-grid` + `.feature-card*`, `.story-cards-grid` + `.story-card*`, `.sources-section` + `.sources-list`, `.publisher-attribution`, `.reviewed-badge`, `.countries[hidden]` — ported verbatim from `css/style.css` with spaces → tabs and dropped the legacy `.inflation-revamp` scoping.
- [x] Phase 4 schemas wired: `buildArticleSchema({slug: "inflation", …, schemaType: "Article"})` + `buildBreadcrumbSchema({slug: "inflation", …})` emitted as `<JsonLd>` inside the page; `generateMetadata()` returns `alternates: buildAlternates({slug: "inflation", locale})` + OpenGraph + Twitter card.
- [x] `lib/pages.ts` — flipped `inflation` to `published: true` so the sitemap emits 55 per-locale `/inflation` URLs with full `alternates.languages` maps.
- [x] `npm run build` → ✓ compiled 2.1s, TypeScript clean, **114 static pages** generated (55 locales × 2 routes + /robots.txt + /sitemap.xml + /_not-found + middleware).
- [x] `npm run start` + `curl` spot-checks confirmed:
  - `/en/inflation` → 200; source contains Article + BreadcrumbList JSON-LD, `id="USD"` / `id="CAD"` / `id="EUR"` currency sections, `id="global-whats-next-wrap"`, `class="inflation-button inf-usdollar"`, "DOLLARS IN EXISTENCE" etc. + full 55-locale hreflang alternates in `link:` HTTP header.
  - `/ar/inflation` → 200, `<html lang="ar" dir="rtl">` — RTL still correct with the inflation tree.
  - `/sitemap.xml` → 55 `/inflation` entries (one per locale).
- [x] Commit: "Phase 6a: Inflation page shell + country selector"

### Phase 6b — Stats + calculators (Client Components) ✅ COMPLETE

- [x] `components/InflationStats.tsx` — Client Component, ~220 lines. Ports `jquery/inflation-stats.js` 1:1: fetches `https://forms.bitcoin.rocks/api/inflation-stats?currency=XXX`, populates the `stat-*-${code}` DOM elements on `<CurrencySection>` via `document.getElementById(...)` writes, per-currency in-memory cache, fallback-on-error leaves the server-rendered placeholder values intact. Auto-loads USD on mount; listens on `document` for the `inflation:currency-changed` CustomEvent and refetches for the new currency.
- [x] `components/CountrySelector.tsx` — updated to dispatch `CustomEvent(CURRENCY_CHANGED_EVENT, { detail: { currency } })` from its `useEffect` on every selection change (including reset → `null`). Decouples the selector from the stats fetcher cleanly — they only share a string constant + `detail` shape.
- [x] `components/CompoundInflationCalculator.tsx` — Client Component, ~190 lines. Ports `jquery/compound-inflation-calculator.js`: 3 controlled inputs (salary, inflation %, years), `newSalary = salary × (1 + rate/100)^years`, `Intl.NumberFormat(locale, { style: 'currency', currency })` for output. `idSuffix` prop lets multiple calculators coexist on one page (matches legacy `currentSalaryCAD` / `inflationRateCAD` / `resultCAD` ID scheme). Result uses `dangerouslySetInnerHTML` to preserve `&nbsp;` spacers 1:1 with the translated prose.
- [x] `components/CompoundInflationCalculatorSolo.tsx` — thin wrapper around `<CompoundInflationCalculator>` pinning `currency="USD"` + `idSuffix=""` for `/compound-inflation-calculator`. Matches legacy `compound-inflation-calculator-solo.js` behavior exactly.
- [x] `components/DynamicHeader.tsx` — Client Component, pure side-effect (returns `null`). Ports `jquery/dynamic-header.js`: reads `?sticker=` / `?sign=` / `?link=` URL params on mount and rewrites `#changing-header` text. Decision table preserved: `sign=got-inflation` > `link=calculator/calculator-site` > `sticker=cure/cure-v2/got-inflation/what-if/other`. When no params present, leaves the server-rendered default H1 text alone.
- [x] `app/[locale]/inflation/page.tsx` — wired in `<InflationStats />` + `<DynamicHeader />` inside the page; H1 span now has `id="changing-header"` so DynamicHeader can target it.
- [x] `npm run build` → ✓ compiled 2.2s, TypeScript clean, **114 static pages** (55 locales × 2 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- [x] Runtime spot-check confirmed via Node `http.get` fetch against `npm run start`: `/en/inflation` returns 200 (509 KB) with all 11 expected DOM markers present (`id="changing-header"`, `id="USD"`/`id="CAD"`/`id="EUR"`, `class="inflation-button inf-usdollar"`, `id="stat-btc-change-USD"` / `id="stat-m1-current-USD"` / `id="stat-debt-current-USD"`, `id="global-whats-next-wrap"`, Article + BreadcrumbList JSON-LD).
- [x] Commit: "Phase 6b: Inflation stats, calculators, dynamic header"

**Deferred:** the per-currency calculators that lived inside each currency's `inflation.html` section (the ones with `idSuffix: "CAD"`/`"EUR"`/…) were already dropped during the April 2026 inflation-page redesign (see `scripts/inflation-multi/rebuild-inflation-html.js` + the What's-next "Calculate your inflation" card that now links out to `/compound-inflation-calculator` instead). `<CompoundInflationCalculator>` is still built in a generic form so Phase 9a's `/compound-inflation-calculator` solo page can use it without any changes, and any future page that wants an inline calculator can pass its own `currency` + `idSuffix`.

## Phase 7 — Bucket A pages: comparison pages with V2 redesign (2-3 tasks)

All 10 `bitcoin-vs-*` pages + `bank-runs` share the comparison-page shape. Template: inflation-style (hero + intro + sections + whats-next + footer).

Port **with** V2 redesign applied during port. Create a shared `app/[locale]/bitcoin-vs-[target]/page.tsx` pattern (maybe a dynamic route with a data file, or one page.tsx each — TBD).

### Phase 7a — Shared comparison layout + first 3 pages ✅ COMPLETE

- [x] `lib/comparisons/types.ts` — typed `ComparisonPageData` bundle: slug, namespace, meta image, H1 key quartet, asset accent color, intro keys, bitcoin/asset label keys, `ComparisonPointData[]`, sources. Fragments support inline `<a>`-with-localization + external/external-blank flags. Translation strings stay in the existing jquery.i18n JSON files — data files reference them by key only, so translator workflow is unchanged.
- [x] `lib/comparisons/bitcoin-vs-gold.ts` / `bitcoin-vs-stocks.ts` / `bitcoin-vs-cash.ts` — per-page data bundles mirroring the legacy prose 1:1, preserving every `<a class="orange-link">` link with proper `localize` / `external` flags. Asset accents: gold `#EBC61F`, stocks `#1DFF4D`, cash `#85BB65`.
- [x] `lib/comparisons/metadata.ts` — shared `buildComparisonMetadata()` helper returning `Metadata` with title, description, OpenGraph article card, Twitter `summary_large_image`, + all 55-locale hreflang alternates. Each page.tsx's `generateMetadata()` is a 2-line wrapper around this.
- [x] `components/ComparisonPageLayout.tsx` — Server Component (~300 lines). Renders the full V2 comparison page: hero H1 (orange BITCOIN + asset-accent asset word), intro paragraphs, N comparison points (each: two side-by-side chips + multi-paragraph explanation), "What's next?" card grid, Sources ol, publisher attribution + reviewed-badge. Emits Article + BreadcrumbList + ItemList JSON-LD inline. `SummaryFragmentSpan` sub-component handles inline `<a class="body-link">` rendering with locale prefixing for internal links.
- [x] `app/[locale]/bitcoin-vs-gold/page.tsx`, `bitcoin-vs-stocks/page.tsx`, `bitcoin-vs-cash/page.tsx` — thin 2-function pages. Each imports the data + passes it to `<ComparisonPageLayout>`. ~30 lines per page.
- [x] `lib/i18n/request.ts` — added `bitcoin-vs-gold` / `bitcoin-vs-stocks` / `bitcoin-vs-cash` namespaces to the default bag so all 3 pages have their translations available (cached per-locale, read-once per build).
- [x] `lib/pages.ts` — flipped `published: true` for the 3 slugs; sitemap now emits 165 new URLs (55 locales × 3 slugs).
- [x] `app/globals.css` — appended ~120 lines of V2 comparison CSS (`scripts/append-comparison-css.js` — idempotent Node helper): hero spacing, `.comparison-chips` grid (2-col desktop, stacked mobile), `.comparison-chip` dark-bg-with-border tokens, explanation prose with `.body-link` orange-underlined anchors, `--asset-accent` CSS variable drives the per-page asset-word color + asset-chip label without any per-page CSS overrides.
- [x] `npm run build` → ✓ compiled 2.2s, TypeScript clean, **279 static pages** (55 locales × 5 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- [x] `npm run start` + `node /tmp/verify-phase7a.js` runtime spot-check confirmed:
  - `/en/bitcoin-vs-gold` (168 KB), `/en/bitcoin-vs-stocks` (166 KB), `/en/bitcoin-vs-cash` (163 KB), `/ar/bitcoin-vs-gold` (164 KB) all serve 200 with ItemList + Article + BreadcrumbList JSON-LD blocks, `comparison-h1` / `comparison-chip` / `whats-next-card` / `sources-list` / `reviewed-badge` / `body-link` classes all present in source.
  - `/ar/bitcoin-vs-gold` renders `<html lang="ar" dir="rtl">` correctly.
  - `/sitemap.xml` contains `/en/bitcoin-vs-gold`, `/en/bitcoin-vs-stocks`, `/en/bitcoin-vs-cash` entries (×55 locales).
- [x] Commit: "Phase 7a: Comparison layout + bitcoin-vs-gold/stocks/cash"

**Deferred:** the per-currency `body-link` hover color uses orange `#ff9500` → `#ffb84d` — kept separate from the `--asset-accent` token so the "visit this link" affordance always reads as site-wide Bitcoin orange (not the compared-asset accent). The chips are the only places the asset accent surfaces besides the H1; this keeps the visual hierarchy unambiguous.

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
