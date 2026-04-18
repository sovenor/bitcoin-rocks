# Technical Context: bitcoin.rocks

## Technology Stack

As of April 2026, bitcoin.rocks runs on **Next.js 16 + React 19 + TypeScript + Tailwind v4**, migrated from the original static HTML/CSS/jQuery site. See `MIGRATION-NEXTJS.md` for the full migration history.

### Frontend Technologies
- **Next.js 16** with the App Router + Turbopack
- **React 19** Server Components by default (Client Components for the few interactive pieces)
- **TypeScript 5.6** (strict mode)
- **Tailwind v4** (CSS-first config via `@theme {}` block in `app/globals.css` — no `tailwind.config.ts`)
- **next-intl 4** for internationalization (55 locales, all server-rendered)

### Server Technologies
- **Next server on Railway** (long-running Node process; matches sibling projects)
- **Middleware-based locale detection** via `middleware.ts` at repo root (next-intl auto-redirects `/` → `/<lang>` on first visit, persists the choice in a `NEXT_LOCALE` cookie)
- **forms-backend/** is a separate Railway service — untouched by the frontend migration. All sticker/sign/postcard/business form submissions POST to its existing URLs; the inflation-stats endpoint at `forms.bitcoin.rocks/api/inflation-stats` serves the live FRED/CPI data.

### Development Tools
- **Node ≥ 20** (required by Next 16)
- **npm** (project is npm-based via `package.json` + `package-lock.json`)
- **Git** for version control and collaboration
- **GitHub** for repository hosting, issues, discussions, pull requests
- **VS Code** (recommended) — workspace is TypeScript strict-mode so any TS-aware editor works

### Third-Party Services
- **Google Analytics 4** (gtag.js via `components/GoogleAnalytics.tsx`, measurement ID `G-18L58W2GTN`)
- **Adobe Typekit** (Proxima Nova font family, kit ID `ful2oqu`)
- **Cloudflare Turnstile** (CAPTCHA on all form submissions, site-key `0x4AAAAAAClzj7R6NrkNgcsP`)
- **FRED / BLS / mempool.space** (data sources for inflation stats, proxied through `forms-backend/inflation-stats.js`)

## Development Environment Setup

### Prerequisites
- **Node.js ≥ 20** (Next 16 requires modern Node)
- **npm** (bundled with Node)
- **Git** for version control
- **Text Editor** / IDE — VS Code recommended (TypeScript-aware)

### Local Development Setup
```bash
# Clone the repository
git clone https://github.com/sovenor/bitcoin-rocks.git
cd bitcoin-rocks

# Install dependencies (first time only)
npm install

# Start the dev server (Turbopack, auto-reload)
npm run dev
# → open http://localhost:3000/ (middleware redirects to /en/ on first visit)

# Run a full production build (exercises all 55 locales × 54 slugs)
npm run build

# Serve the production build locally
npm run start

# Linting and type-checking (separate commands)
npm run lint
npm run typecheck
```

### File Structure Understanding
```
bitcoin-rocks/
├── app/                          # Next App Router
│   ├── layout.tsx                # Root pass-through (so [locale]/layout can emit <html>)
│   ├── not-found.tsx             # Global fallback 404 (rare — middleware usually catches these)
│   ├── sitemap.ts                # Dynamic sitemap (enumerates all published pages × 55 locales)
│   ├── robots.ts                 # Dynamic robots.txt (AI crawler allow-list)
│   ├── globals.css               # Tailwind v4 @theme + page-specific CSS blocks
│   └── [locale]/
│       ├── layout.tsx            # Locale-aware <html lang dir> wrapper + nav + footer + GA
│       ├── page.tsx              # Homepage
│       ├── <slug>/page.tsx       # Every other page
│       ├── business/             # Business section (13 pages)
│       ├── nostr/                # Nostr section (2 pages)
│       ├── sticker-files/        # Sticker-files section (index + dynamic [lang])
│       └── [...rest]/page.tsx    # Catch-all localized 404
├── components/                   # React components
│   ├── Navbar.tsx, Footer.tsx, GoogleAnalytics.tsx  (shared chrome)
│   ├── LanguageSwitcher.tsx, CountrySelector.tsx    (Client)
│   ├── HomeCarousel.tsx, BuyFlow.tsx                (Client)
│   ├── InflationStats.tsx, CompoundInflationCalculator.tsx  (Client)
│   ├── ComparisonPageLayout.tsx, ContentPageLayout.tsx, NostrPageLayout.tsx  (Server)
│   ├── BusinessPageShell.tsx, BusinessResourceCards.tsx, BusinessWalletCard.tsx  (Server)
│   ├── WalletAccordion.tsx, NostrAccordion.tsx, StickerPicker.tsx, StickerAddressForm.tsx, ...
│   └── JsonLd.tsx (Server — renders <script type="application/ld+json">)
├── lib/
│   ├── i18n/                     # config, routing, navigation wrapper, message loader
│   ├── schema/                   # JSON-LD builders (organization, website, article, breadcrumb, comparison, reviewed-badge, date-modified, hreflang)
│   ├── comparisons/              # data files for bitcoin-vs-* pages + about/get-involved/bank-runs
│   ├── business/                 # metadata helper
│   ├── buy/                      # buy-flow platform data
│   ├── sticker-files/            # catalog
│   ├── pages.ts                  # canonical page registry (slug + namespace + published flag + sitemap priority)
│   ├── site.ts                   # site-wide constants (SITE_ORIGIN, brand, GA id)
│   └── sticker-languages.ts
├── i18n/                         # Translation JSON files (unchanged from legacy)
│   └── <locale>/*.json           # one file per page per language, jquery.i18n-compatible flat snake_case keys
├── public/                       # Static assets served from the root
│   ├── img/, favicons/           # Site images
│   ├── sticker-files/            # 219 downloadable PNGs across 43 sticker-languages
│   ├── business/files/, business/sticker-files/   # Business-kit PDFs + sticker PNGs
│   ├── llms.txt, llms-full.txt   # AI-crawler content files
├── middleware.ts                 # next-intl middleware (locale detection + cookie persistence)
├── next.config.ts                # redirects (33 legacy slugs), security headers, long-cache asset headers
├── package.json                  # npm scripts + deps
├── tsconfig.json                 # TypeScript strict-mode config with @/* path alias
├── postcss.config.mjs            # Tailwind v4 PostCSS plugin
├── eslint.config.mjs             # ESLint flat config (Next base)
├── forms-backend/                # Separate Railway service — untouched
├── memory-bank/                  # Project memory (read first on every new session)
├── scripts/                      # Dev helpers (translation bootstrap, phase migration, audit tools)
├── MIGRATION-NEXTJS.md           # Full migration history (Phases 0-15)
├── README.md, CONTRIBUTING.md, LICENSE.md, GEO-CHECKLIST.md
└── .clinerules/                  # Project-level AI agent rules + workflows
```

## Dependencies and Libraries

### Core Runtime Dependencies
Pinned in `package.json`:
- `next` — 16.x
- `react`, `react-dom` — 19.x
- `next-intl` — 4.x (internationalization + locale-aware routing)
- `typescript` — 5.6 (dev dep; strict mode)
- `tailwindcss`, `@tailwindcss/postcss` — v4
- `eslint`, `eslint-config-next` — flat config

No jQuery. No jquery.i18n. No static-site HTML injection scripts. All the legacy `jquery/` + `css/style.css` + `scripts/inject-*.js` pipeline was deleted in Phase 14 of the migration.

### Font Stack
- **Primary**: Proxima Nova (via Adobe Typekit kit `ful2oqu`, loaded in `app/[locale]/layout.tsx`)
- **Headings**: Proxima Soft 900 (for homepage `.home-pill` components)
- **Fallback**: Sans-serif system fonts

### Analytics
- Google Analytics 4 via `<Script strategy="afterInteractive">` in `components/GoogleAnalytics.tsx`. Measurement ID `G-18L58W2GTN`.
- Custom events currently emitted:
  1. `language_pageview` (on mount in `LanguageSwitcher`)
  2. `language_switch` (on locale change)
  3. `select_currency` (on inflation-page currency pick)
- GA4 custom parameters (`event_category`, `event_label`, `language_active`, `language_source`, `language_selected`) must be registered as Custom Dimensions in the GA4 admin — they are NOT built-in dimensions.

## Configuration Files

### `next.config.ts`
- `turbopack.root = __dirname`
- `images.formats = ["image/webp"]`
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`
- Long-cache headers for `/img/*`, `/favicons/*`, `/sticker-files/*`
- `redirects()` with 33 permanent redirects ported from the legacy `nginx.conf` (e.g. `/gold` → `/bitcoin-vs-gold`, `/kit` → `/business/kit`, `/inflation.html` → `/inflation`)
- Wrapped with `createNextIntlPlugin('./lib/i18n/request.ts')`

### `middleware.ts`
- `createMiddleware(routing)` (from next-intl)
- Matcher: `/((?!api|_next|_vercel|.*\\..*).*)` (skips Next internals + any path containing a dot, so static files bypass i18n)
- Handles `/` → Accept-Language-matched locale redirect on first visit + cookie persistence

### `lib/i18n/config.ts`
- 55-locale `languages` array + `locales` tuple (both kept in sync, both required)
- `defaultLocale = "en"`
- `RTL_LOCALES = new Set(["ar", "fa", "he", "ur"])`

### Translation File Structure
```json
{
  "@metadata": {
    "last-updated": "2026-04-17",
    "locale": "en",
    "authors": ["Author Name"]
  },
  "translation_key": "Translation value",
  "another_key": "Another value"
}
```
- All i18n JSON files use **tab indentation** (`JSON.stringify(obj, null, '\t')`)
- The English JSON's `@metadata.last-updated` is read at render time by `lib/schema/date-modified.ts` and injected into every page's `Article.dateModified` schema — no manual dual-source bookkeeping.

## Development Workflow

### Adding New Content
1. Add the route file (`app/[locale]/<slug>/page.tsx`).
2. Add English translation JSON (`i18n/en/<slug>_en.json`) with `@metadata.last-updated = today`.
3. Register the namespace in `lib/i18n/request.ts` → `DEFAULT_NAMESPACES`.
4. Register the slug in `lib/pages.ts` with `published: true`, sitemap priority, changeFrequency.
5. Call the schema builders in the page (`buildArticleSchema()`, `buildBreadcrumbSchema()`, `buildAlternates()`).
6. Cross-link from related pages where it makes sense.
7. Add the page to `llms.txt` (one-line summary) and `llms-full.txt` (full Markdown content).

### Translation Workflow (for contributors)
1. Fork the repo on GitHub.
2. Duplicate `/i18n/en/` to `/i18n/<lang>/` (rename files `*_en.json` → `*_<lang>.json`).
3. Translate the JSON values.
4. Add the language to `lib/i18n/config.ts` (`languages` array + `locales` tuple, alphabetical by native name).
5. Run `npm run build` to confirm the new locale prerenders cleanly.
6. Submit a PR. See `.clinerules/workflows/translate-new-language.md` for full details.

### Deployment Process
1. Make changes on a feature branch.
2. `npm run build` + `npm run lint` + `npm run typecheck` locally.
3. Commit, push, open a PR.
4. After merge to `main`, Railway auto-redeploys (Next server).
5. Verify live on `bitcoin.rocks`.

## Technical Constraints

### Browser Support
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (current versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Samsung Internet
- **Legacy Support**: Graceful degradation (React 19 requires modern JS; the content is SSR'd so even JS-off users see translated text)

### Performance Requirements
- **Static generation** at build time: ~4,700 pages (54 published slugs × 55 locales + /robots.txt, /sitemap.xml, /_not-found, middleware)
- **Page Load Time**: Server-rendered HTML means first paint is fast; Client Components are small and only hydrate their local state
- **Image Optimization**: Compressed images under 500KB each; Next `images.formats = ["image/webp"]` handles modern-format delivery
- **CSS**: Tailwind v4 produces a single minimal CSS bundle per page

### Accessibility Standards
- **Semantic HTML**: Proper heading hierarchy and landmarks (Navbar uses `<nav>`, content uses `<main>`, etc.)
- **Color Contrast**: WCAG AA compliance for text readability
- **Keyboard Navigation**: All interactive elements accessible via keyboard (Enter/Space toggle accordions, tab-order through forms, etc.)
- **Screen Readers**: Proper `aria-*` labels on interactive client components (LanguageSwitcher, accordions, country selectors)
- **RTL support**: `<html dir="rtl">` emitted automatically for `ar`/`fa`/`he`/`ur`

## Security Considerations

### Content Security
- **No server-side code execution from user data** — all inputs (form submissions) go to the separate `forms-backend/` service which has its own CSRF/Turnstile protection
- **External Links**: Curated and verified external resources
- **No User Data** on the frontend: GA4 analytics only; no cookies besides `NEXT_LOCALE` (the locale preference cookie written by next-intl)
- **HTTPS**: Secure connection for all traffic (Railway defaults)

### Privacy Protection
- **Analytics**: GA4 gtag.js, ID `G-18L58W2GTN` — minimal default collection, custom events registered per design
- **Cookies**: Only `NEXT_LOCALE` (language preference) + any GA4 cookies
- **No third-party tracking scripts** beyond GA and Typekit
- **Open Source**: Transparent code for security review

## Maintenance and Updates

### Regular Maintenance Tasks
- **Content Updates**: Keep educational resources + external links current
- **Translation Updates**: Maintain translation completeness via community PRs
- **Dependency Updates**: Update Next, React, next-intl, Tailwind as releases stabilize
- **Performance Monitoring**: Track site speed and availability on Railway
- **Security Updates**: Monitor npm advisories and dependency changes

### Monitoring and Analytics
- **Google Analytics 4**: Visitor statistics and engagement tracking (gtag.js)
- **Railway metrics**: Uptime, response times, logs
- **GitHub Insights**: Repository activity and contributions
- **Community Feedback**: Issues and discussions on GitHub

This technical context provides the foundation for understanding and contributing to the bitcoin.rocks platform.
