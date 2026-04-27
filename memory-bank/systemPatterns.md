# System Patterns: bitcoin.rocks

## Architecture Overview

As of April 2026, bitcoin.rocks runs on **Next.js 16 + React 19 + TypeScript + Tailwind v4**. Every page is server-rendered per-locale so crawlers see translated HTML in the initial response — no hydration required for content. See `MIGRATION-NEXTJS.md` for the full migration history.

### High-Level Architecture
```
┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
│  Next.js 16 app      │    │  Railway Next server │    │   Browser (any)      │
│  App Router +        │───▶│  (long-running node) │───▶│   ~55 locales, RTL   │
│  Turbopack, RSC      │    │  SSG + SSR hybrid    │    │   aware              │
│  TypeScript + TW v4  │    │                      │    │                      │
└──────────────────────┘    └──────────────────────┘    └──────────────────────┘
          │                             │                          │
          ▼                             ▼                          ▼
┌──────────────────────┐    ┌──────────────────────┐    ┌──────────────────────┐
│ next-intl i18n       │    │  middleware.ts       │    │   GA4 gtag.js        │
│ messages loaded      │    │  Accept-Language     │    │   Custom events for  │
│ from i18n/*.json     │    │  → /<lang>/ redirect │    │   language + curr    │
│ (flat snake_case     │    │  Cookie persistence  │    │   selection          │
│  jquery.i18n format) │    │                      │    │                      │
└──────────────────────┘    └──────────────────────┘    └──────────────────────┘
                                        │
                                        ▼
                            ┌──────────────────────┐
                            │  forms-backend/      │
                            │  Separate Railway    │
                            │  service (untouched) │
                            │  POST /submit/*      │
                            │  GET /api/inflation- │
                            │      stats           │
                            └──────────────────────┘
```

### Core Design Patterns

#### 1. Server-Rendered Locale-First Pattern
- **React Server Components by default.** Pages, layouts, and data-driven components run on the server, produce HTML, and ship no JS to the client.
- **Client Components are the exception.** Only `LanguageSwitcher`, `HomeCarousel`, `BuyFlow`, `InflationStats`, accordion/calculator/form components, `DynamicHeader`, and `CountrySelector` carry the `"use client"` directive. They own local state, event listeners, and browser-only APIs.
- **Static generation at build time.** `generateStaticParams()` in `app/[locale]/layout.tsx` returns all 55 locales. Every `app/[locale]/<slug>/page.tsx` prerenders as a static HTML file per `(locale, slug)` pair → ~4,700 pages total.
- **No CMS.** Content lives as `i18n/<locale>/*.json` (translations) + typed TS data files in `lib/` (page shapes). Everything is in git; translator workflow is file-based.

#### 2. Locale-Aware Routing Pattern
- `middleware.ts` runs `createMiddleware(routing)` from next-intl. `localePrefix: "always"` means URLs are always `/<lang>/<slug>` (e.g. `/en/inflation`).
- First-visit users hitting `/` get redirected to `/<accept-language-match>` + a `NEXT_LOCALE` cookie.
- `lib/i18n/navigation.ts` re-exports `createNavigation(routing)` helpers so `<Link href="/inflation">` resolves to `/<current-locale>/inflation` automatically.
- RTL languages (`ar`, `fa`, `he`, `ur`) render with `<html dir="rtl">` — set once in `app/[locale]/layout.tsx` from `RTL_LOCALES` in `lib/i18n/config.ts`.

#### 3. Internationalization Pattern
- **Source of truth:** `i18n/<locale>/<page>_<locale>.json` files with flat snake_case keys (`home_h1`, `common_footer_about`, …). Unchanged from the jquery.i18n format → zero translator workflow disruption.
- **Loader:** `lib/i18n/load-messages.ts` reads JSON at request time, strips `@metadata`, merges with English fallback per-key (missing translations never crash).
- **Request config:** `lib/i18n/request.ts` eagerly loads `DEFAULT_NAMESPACES` (the ~50 site-wide namespaces) on every request. In-memory cache keyed by `locale::namespace` → files read once per process start.
- **Translations in server HTML.** Server Components call `await getTranslations()`; Client Components call `useTranslations()`. Both return the same flat key bag from `NextIntlClientProvider` → every translated string is in the initial HTML response.

## Component Architecture

### Page Shape Pattern
```tsx
// app/[locale]/<slug>/page.tsx
export async function generateMetadata({ params }): Promise<Metadata> {
	const { locale } = await params;
	return {
		title: "…",
		description: "…",
		alternates: buildAlternates({ slug: "<slug>", locale }),  // 55-locale hreflang
		openGraph: { … }, twitter: { … },
	};
}

export default async function Page({ params }) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations();

	const articleSchema = await buildArticleSchema({ slug, locale, headline, description });
	const breadcrumbSchema = buildBreadcrumbSchema({ slug, locale, title });

	return (
		<>
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />
			{/* page body */}
		</>
	);
}
```

### Layout Stack Pattern
- **`app/layout.tsx`** — root pass-through (just `children`). This lets `app/[locale]/layout.tsx` emit its own `<html lang dir>` per request.
- **`app/[locale]/layout.tsx`** — validates locale, calls `setRequestLocale()`, loads messages, emits `<html>` + Typekit link + `<body>` wrapping `<GoogleAnalytics />` + `<NextIntlClientProvider>` + `<Navbar />` + `<main>{children}</main>` + `<Footer />`. Also emits the Organization JSON-LD once per page.
- **`app/[locale]/<section>/layout.tsx`** — absent; section-level routes inherit the locale layout directly.
- **`app/not-found.tsx`** — standalone fallback for paths with no locale (rare; middleware usually catches them).
- **`app/[locale]/[...rest]/page.tsx`** — catch-all "soft 404" that renders the translated 404 body inline inside the locale layout + sets `robots: { index: false }`. This preserves `<html lang dir>` + Navbar + Footer on every 404 response.

### Shared-Chrome Pattern
Every page renders the same `<Navbar>` + `<Footer>` from `app/[locale]/layout.tsx`:
- **Navbar** — Server Component. V2 pill nav: logo-on-top-of-pill (Learn / Get Involved / About / `<LanguageSwitcher />`).
- **Footer** — Server Component. Centered logo + tagline + dot-separated link row.
- **LanguageSwitcher** — the only Client Component in the chrome. Dropdown of all 55 languages + cookie-persisted locale switching via `router.replace(pathname, { locale })`.
- **GoogleAnalytics** — a thin `<Script strategy="afterInteractive">` wrapper with the `G-18L58W2GTN` measurement ID.

### Data + Layout Components (Comparison / Content / Nostr / Business)
- **`ComparisonPageLayout.tsx`** — Server Component (~300 lines). Renders the full V2 comparison page from a `ComparisonPageData` literal (slug, namespace, asset accent, intro, N comparison points, sources). Emits Article + BreadcrumbList + ItemList JSON-LD. Each `bitcoin-vs-<target>` page is a ~30-line thin wrapper over this layout.
- **`ContentPageLayout.tsx`** — similar pattern for story-shaped pages (`about`, `get-involved`, `bank-runs`). Emits Article + BreadcrumbList only (no ItemList — no comparison points).
- **`NostrPageLayout.tsx`** — shared layout for `/nostr` + `/nostr/what-is-nostr`. Parameterized on title/header/description/OG image.
- **`BusinessPageShell.tsx`** + **`BusinessResourceCards.tsx`** + **`BusinessWalletCard.tsx`** — the building blocks for the 13 business pages. `BusinessResourceCards` has an `exclude` prop so a business page never links to itself.

### Interactive Client Components
- **`HomeCarousel`** — RAF-driven infinite horizontal scroll with bidirectional drag, hover pause, trackpad wheel.
- **`CountrySelector`** — dispatches a `CustomEvent("inflation:currency-changed", { detail: { currency } })` that `InflationStats` subscribes to. Decouples the selector from the fetcher.
- **`InflationStats`** — side-effect-only Client Component (`return null`). Fetches `forms.bitcoin.rocks/api/inflation-stats?currency=XXX` and writes values into `document.getElementById('stat-*-XXX')` — Server-rendered placeholder values stay visible until the fetch resolves.
- **`CompoundInflationCalculator`** — controlled inputs + locale-aware `Intl.NumberFormat()` formatting.
- **`DynamicHeader`** — rewrites `#changing-header` text from `?sticker=` / `?sign=` / `?link=` URL params on mount. Pure side effect.
- **`WalletAccordion`** / **`NostrAccordion`** — click-to-toggle accordions with keyboard support. Zero translation lookups in the client bundle — parent passes pre-translated `question` + `children`.
- **`BuyFlow`** — 4-step country → payment → platform → storage wizard. All 52 country buttons are SERVER-RENDERED (crawler-visible); this component only delegates click handlers via `closest(".buy-country-button")`.
- **`StickerPicker`** + **`CountryFormSelector`** — pack-tile + country-form pickers for `/stickers` and `/business/stickers`.

## Data Flow Patterns

### Translation Loading Flow
```
Request arrives → middleware.ts matches locale → next.config.ts createNextIntlPlugin
→ request.ts: getRequestConfig({ requestLocale }) → load DEFAULT_NAMESPACES via load-messages.ts
→ [locale]/layout.tsx: setRequestLocale(locale) + NextIntlClientProvider({messages})
→ Server Components resolve t() at render time → translated HTML in initial response
```

### User Interaction Flow
```
User clicks something → Client Component event handler fires → setState() or useRef mutation
→ either React re-renders that component, or an imperative DOM write (e.g. InflationStats)
→ optional gtag('event', …) for analytics
```

### Inflation Stats Flow (cross-component without Context)
```
CountrySelector picks USD → useEffect dispatches CustomEvent("inflation:currency-changed", {detail: {currency: "USD"}})
→ InflationStats (mounted sibling) listens on document → fetches forms-backend → writes stat-*-USD
→ No shared state, no Context Provider — DOM event bus is the bridge.
```

## File Organization Patterns

### Directory Structure
```
app/                              # Next App Router (see techContext.md for full tree)
components/                       # React components (Server by default)
lib/
  i18n/                          # config, routing, navigation, message loader
  schema/                        # JSON-LD builders
  comparisons/                   # typed page-data for comparisons + content pages
  business/ | buy/ | sticker-files/   # section-specific data
  pages.ts                       # canonical page registry
  site.ts | sticker-languages.ts # site-wide constants
middleware.ts | next.config.ts   # request-time config
i18n/<locale>/*.json             # translation data (source of truth)
public/                          # static assets (images, PNGs, llms.txt)
forms-backend/                   # separate Railway service (untouched)
memory-bank/                     # project memory
scripts/                         # dev helpers
```

### Naming Conventions
- **Route segments**: kebab-case (`bitcoin-vs-gold`, `what-is-nostr`). Matches URL structure.
- **Translation files**: `<page>_<locale>.json` format (unchanged from legacy jquery.i18n).
- **Translation keys**: flat snake_case (`home_h1`, `common_footer_about`, `inflation_usd_s1_c3`).
- **Component files**: PascalCase (`ComparisonPageLayout.tsx`).
- **Data files**: kebab-case in `lib/comparisons/` (`bitcoin-vs-gold.ts`, `about.ts`).
- **CSS**: Tailwind utility classes primarily; V1-era class names (`.wallet-q`, `.biz-box`, `.expandable`) preserved where the port was faithful (Bucket B/C pages).

## Styling Patterns

### CSS Architecture
- **Tailwind v4 CSS-first config.** All design tokens live in `app/globals.css` under `@theme {}`. Add a new color with `--color-<name>: #XXXXXX;` → automatically available as `bg-<name>`, `text-<name>`, `border-<name>` utilities.
- **Responsive breakpoints:** `xs: 400px` (tight mobile) and `md: 700px` (tablet/desktop) — defined as `--breakpoint-xs` + `--breakpoint-md`.
- **Page-specific CSS blocks** appended verbatim into `app/globals.css` for Bucket B/C pages that kept the V1 look during migration (`.wallet-q`, `.biz-*`, `.expandable`, `.h2-stickers`, form CSS, nostr CSS, …). Each block has a sentinel comment marker so phase scripts can be re-run idempotently.
- **`--card-accent` CSS variable** drives per-section color hierarchy. Parent `<CategorySection style={{ "--card-accent": "#XXXXXX" }}>` sets it; descendant cards inherit via CSS cascade. No per-card color prop threading.
- **RTL support** is invisible to CSS — `<html dir="rtl">` on the layout is enough. A few components set specific `margin-inline-start` / `margin-inline-end` rules where logical direction matters.

### Visual Design Patterns
- **Dark Theme:** Consistent `#060610` background with white text.
- **Bitcoin Orange:** `#FF9500` as primary accent color (`--color-bitcoin-orange`).
- **Topic Colors:** 21 unique colors, one per homepage section (energy, freedom, money, saving, salary, art, politics, war, coding, ai, networks, self-custody, property-rights, business, environment, crowdfunding, housing, equality, food, payments, human-rights, get-started).
- **Card-Based Layout:** Rounded containers with hover effects.
- **Typography:** Proxima Nova (regular + bold) via Adobe Typekit; Proxima Soft 900 for homepage pills.

## Integration Patterns

### Third-Party Services
- **Analytics:** Google Analytics 4 (`G-18L58W2GTN`) via `components/GoogleAnalytics.tsx`. Custom events registered manually as GA4 Custom Dimensions.
- **Fonts:** Adobe Typekit (kit `ful2oqu`) — loaded via `<link>` in `app/[locale]/layout.tsx`.
- **Forms backend:** `forms-backend/` on Railway handles all form submissions + the inflation-stats API.
- **External Links:** Curated external resource integration (TIME, Fortune, Forbes, Lyn Alden, Anita Posch, etc.). `target="_blank" rel="noopener noreferrer"` on every external link.
- **Social Sharing:** `generateMetadata()` returns full OpenGraph + Twitter card data per page.

### Form Handling
- **Server-rendered forms** with a few Client Component wrappers for progressive disclosure (country pickers, sticker-pack chooser).
- **Honeypot fields** (`_gotcha`) where legacy backend expected them. Backend layers per-IP duplicate-submission blocking, address dedup, and a blacklist on top.
- **Form action URLs** point at `forms-backend/submit/<endpoint>` — unchanged from the legacy site.

## Performance Patterns

### Optimization Strategies
- **Server-rendered content:** zero hydration flash for translations, cards, sections, copy.
- **Static generation:** `npm run build` prerenders all ~4,700 pages; Railway just serves static HTML for most requests.
- **Minimal client JS:** Client Components are small and scoped. `LanguageSwitcher` is the largest dropdown, others are tiny event wirings.
- **Long-cache headers** for `/img/*`, `/favicons/*`, `/sticker-files/*` (configured in `next.config.ts`).
- **next-intl namespace cache:** JSON files are read once per process start and held in memory.

### Loading Patterns
- **Critical CSS inline via Tailwind**: Next emits minimal per-route CSS bundles.
- **Script strategy:** `afterInteractive` for Google Analytics (loads once the page is interactive).
- **Image formats:** `images.formats = ["image/webp"]` in `next.config.ts`.

## Security Patterns

### Content Security
- **No user input on the frontend** that isn't forwarded to `forms-backend/`. The backend uses honeypot, per-IP duplicate-submission blocking, address dedup, and a blacklist; no captcha (Turnstile was removed April 2026).
- **External Link Validation**: Curated external resource links; `rel="noopener"` everywhere.
- **Privacy Protection**: GA4 + `NEXT_LOCALE` cookie are the only client-side data.
- **JsonLd XSS safety**: `components/JsonLd.tsx` escapes `</` → `\u003c` so a malicious translated string can never break out of `<script type="application/ld+json">`.
- **Open Source**: Transparent code for security review.

## Cleanup (Phase 14) — what's gone
As of Phase 14 of the migration, the following legacy assets have been DELETED from the repo:
- All root-level `*.html` pages
- `business/`, `nostr/`, `sticker-files/` HTML subdirs
- `jquery/` + `css/` (the entire legacy front-end stack)
- `nginx.conf`, `robots.txt` (replaced by `next.config.ts` redirects + `app/robots.ts`)
- Legacy `scripts/inject-*.js` pipeline (replaced by `lib/schema/*.ts` + `lib/i18n/*`)
- Legacy one-off helpers: `scripts/fix-carousel-wrap.js`, `scripts/update-inflation-i18n.js`, `scripts/update-inflation-revamp.js`, `scripts/update-index-i18n-for-saving.js`, `scripts/audit-v2-v1-pages.js`, `scripts/add-faq-keys.js`, `scripts/add-whats-next-keys.js`
- `scripts/inflation-multi/` (static-site-era helpers)

This system architecture provides a modern, type-safe, server-rendered foundation for the bitcoin.rocks platform while preserving the translator-friendly JSON-file workflow that's been proven across 55 languages.
