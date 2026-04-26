# Bitcoin.rocks Project Intelligence

## Project Overview
This is bitcoin.rocks — a Bitcoin education website founded in 2022 with the mission to accelerate Bitcoin adoption through education. It serves as a "first link" to share with Bitcoin newcomers.

As of April 2026 the site runs on **Next.js 16 + React 19 + TypeScript + Tailwind v4** (migrated from the original static HTML/CSS/jQuery site — see `MIGRATION-NEXTJS.md` for the full history). Every page is server-rendered per-locale so crawlers and AI systems see translated content in the initial HTML response.

## Stack Summary

- **Framework:** Next.js 16 (App Router, Turbopack) + React 19
- **Language:** TypeScript 5.6 (strict mode)
- **Styling:** Tailwind v4 (`@theme {}` block in `app/globals.css` — no `tailwind.config.ts`)
- **i18n:** `next-intl` + existing `i18n/<locale>/*.json` files (jquery.i18n-compatible flat snake_case keys)
- **Hosting:** Railway (Next server) for the frontend; Railway (separate service) for `forms-backend/`
- **Analytics:** Google Analytics 4, measurement ID `G-18L58W2GTN`

## Key Project Patterns

### Architecture Philosophy
- **Server-Rendered First:** Every page renders its translated HTML on the server via React Server Components + `next-intl`. Client Components are reserved for the small handful of interactive pieces (`LanguageSwitcher`, `CountrySelector`, `HomeCarousel`, `BuyFlow`, accordions, calculators, forms, etc.).
- **File-based routing:** `app/[locale]/<slug>/page.tsx` for every page. `generateStaticParams()` pre-renders all 55 locales at build time.
- **Locked-in locale prefix:** `localePrefix: "always"` — URLs are always `/<lang>/<slug>` (e.g. `/en/inflation`). Middleware handles `/` → Accept-Language-matched locale on first visit + cookie persistence.
- **No CMS:** Content lives in the git repo (HTML-shaped TypeScript data files + i18n JSON) for simplicity, speed, reliability, and translator-friendliness.
- **Mobile-First Responsive:** Breakpoints `xs: 400px` and `md: 700px` defined in `app/globals.css` `@theme` block.

### Content Strategy
- **Topic-Based Organization:** Homepage organized by Bitcoin impact areas (money, freedom, energy, etc.).
- **Color-Coded Sections:** Each topic has a unique accent color, driven by the `--card-accent` CSS variable set per-section.
- **Curated External Links:** Mix of internal content and carefully selected external resources.
- **Beginner-Focused:** All content assumes zero prior Bitcoin knowledge.
- **Cross-Link Priority:** When building new pages, cross-link to related pages where it makes sense.

### Internationalization Approach
- **`next-intl`** with `createNavigation(routing)` exported from `lib/i18n/navigation.ts` (use `Link`, `useRouter`, etc. from there for locale-aware navigation).
- **Source of truth:** The `i18n/<locale>/*.json` files (flat snake_case keys, jquery.i18n-compatible) are the only place translators edit. Nested folders (`business/`, `nostr/`, `sticker-files/`) use slash paths as namespace names.
- **Loader:** `lib/i18n/load-messages.ts` reads JSON files at request time, strips `@metadata`, and merges with English fallback per-key so missing translations never crash.
- **Default namespaces:** `lib/i18n/request.ts` eagerly loads the site-wide namespaces (common, index, 404, inflation, comparisons, business/*, nostr/*, sticker-files/*, etc.) on every request. The in-memory cache means files are read once per process start.
- **RTL:** `ar`, `fa`, `he`, `ur` render with `<html dir="rtl">` (set from `RTL_LOCALES` in `lib/i18n/config.ts`).
- **Community-Driven:** Translations managed through GitHub community contributions (see `.clinerules/workflows/translate-new-language.md`).

### Visual Design System
- **Dark Theme:** Consistent `#060610` background with white text.
- **Bitcoin Orange:** `#FF9500` as primary accent color throughout (`--color-bitcoin-orange` in `@theme`).
- **Topic Colors:** Each content section has a unique color (energy=#1DFF4D, freedom=#96041C, etc. — all 21 topic accents are tokens in `@theme`).
- **Card-Based Layout:** Content in rounded containers with hover effects.
- **Typography:** Proxima Nova font family via Adobe Typekit (`use.typekit.net/ful2oqu.css`); Proxima Soft 900 for home pills.

### V2 Design System (homepage `/`, `/inflation`, all comparison pages, `/about`, `/get-involved`, `/bank-runs`)
The V2 redesign is the current system. New pages should use these classes. Some Bucket B/C pages (`/wallets`, `/lightning`, `/flyers`, business/*, nostr/*, sticker-files/*, form pages) were faithfully ported in V1 style; those get a V2 redesign post-cutover.

- **Navigation:** `<Navbar>` component — logo-on-top-of-pill nav bar (Learn / Get Involved / About / Language)
- **Hero H1:** plain `<h1>` — styled by the element-level rule in `app/globals.css`. Proxima Nova Bold, 38px desktop / 28px mobile, `var(--color-bitcoin-orange)`, sentence case. No class hook needed.
- **Intro paragraph:** plain `<p>` inside `.home-hero` or `.inflation-intro` on the inflation page. 24px desktop / 20px mobile, `#f0f0f0`, centered.
- **Section H2:** plain `<h2>` — styled by the element-level rule (Proxima Nova 800, 28px desktop / 22px mobile, white, left-aligned). Category grid overrides to 32px via `.category-section h2`.
- **Body text:** Proxima Nova 400, 16-18px, `var(--color-fg-muted)` (#ccc) color
- **Inline links:** `.body-link` — orange, underlined (`text-underline-offset: 3px`)
- **Cards:** `.whats-next-card` (generic clickable card) — use the `--card-accent` CSS variable for color-coded label/hover colors. Set per-section via `style={{"--card-accent": "#XXXXXX"}}` on the parent `<CategorySection>`. Falls back to orange when unset.
- **Card label:** `.whats-next-card-label` — 14px Medium, colored via `--card-accent`
- **Card title:** `.whats-next-card-title` — 24px Regular, white
- **Card source:** `.whats-next-card-source` — 14px italic, gray, "Source: $author →" format
- **Homepage pills:** `.home-pill` — Proxima Soft 900, lowercase, 2px border via `currentColor`, color class (`.money`, `.freedom`, etc.) drives both text + border
- **Homepage carousels:** `<HomeCarousel>` Client Component — RAF-driven infinite scroll; pills are inline-duplicated 2× in the parent JSX for seamless wrap-around.

## Development Workflow

### Everyday Development
```bash
npm install        # first time only
npm run dev        # Next dev server on localhost:3000 (Turbopack)
npm run build      # Production build (full static generation across all 55 locales)
npm run start      # Serve the production build locally
npm run lint       # ESLint (Next flat config)
npm run typecheck  # TypeScript strict mode
```

Dev server at `http://localhost:3000/` auto-redirects to `/en/` (or the Accept-Language-matched locale) on first visit.

### File Organization
```
app/                 # Next App Router
  [locale]/          # all per-locale routes
    page.tsx         # homepage
    <slug>/page.tsx  # every other page
    layout.tsx       # locale-aware <html lang dir> wrapper
    [...rest]/       # catch-all 404 (keeps Navbar + Footer + <html lang>)
  layout.tsx         # root pass-through
  sitemap.ts         # dynamic sitemap
  robots.ts          # dynamic robots.txt
  globals.css        # Tailwind v4 @theme + page-specific CSS blocks
components/          # React components (Server by default, "use client" where needed)
lib/
  i18n/              # config, routing, navigation wrapper, message loader
  schema/            # JSON-LD builders (organization, website, article, breadcrumb, comparison, reviewed-badge, date-modified, hreflang)
  comparisons/       # data files for bitcoin-vs-* pages + content pages (about, get-involved, bank-runs)
  business/          # business-section metadata helper
  buy/               # buy-flow platform data
  sticker-files/     # sticker catalog
  pages.ts           # canonical page registry (slug + namespace + published flag + sitemap priority)
  site.ts            # site-wide constants (SITE_ORIGIN, brand, GA id, buildUrl helper)
  sticker-languages.ts
middleware.ts        # next-intl middleware (locale detection + cookie persistence)
next.config.ts       # redirects, headers, next-intl plugin
public/              # static assets (/img/*, /favicons/*, /sticker-files/*, /business/files/*, /business/sticker-files/*, /llms.txt, /llms-full.txt)
i18n/                # translation JSON files (unchanged from legacy — one file per page per language)
forms-backend/       # separate Railway service (backend for form submissions + inflation-stats API). Untouched.
memory-bank/         # project memory (read first on every new session)
scripts/             # dev helpers (translation bootstrap, phase migration helpers, audit tools)
```

### Translation Workflow
1. Fork repository on GitHub.
2. Duplicate `/i18n/en/` folder to new language code.
3. Translate JSON files, maintaining key structure.
4. Rename files to match the language code pattern.
5. Submit pull request with translation.

Translations are picked up automatically at build time — no regeneration step needed.

### Content Update Process
- External links require regular review for validity.
- New content needs translation keys added to all language files.
- Images should be optimized and categorized appropriately (`public/img/<category>/`).
- All changes go through GitHub for version control.
- **When updating content on any page** (HTML content or i18n JSON translation files), you must:
  1. Update the `@metadata.last-updated` date in the corresponding **English** JSON file (`i18n/en/...`) to today's date (YYYY-MM-DD format).
  2. Update the `last-updated` date in any **other language** JSON files being modified in the same change.
  3. The HTML `dateModified` schema field is **derived automatically** from `i18n/en/<namespace>_en.json`'s `@metadata.last-updated` via `lib/schema/date-modified.ts` — no manual edit needed.

### Creating a New Page
1. Add a new route file: `app/[locale]/<slug>/page.tsx`.
2. Add English translation JSON: `i18n/en/<slug>_en.json` with `@metadata.last-updated` + all keys.
3. Add the namespace to `DEFAULT_NAMESPACES` in `lib/i18n/request.ts`.
4. Add an entry to `lib/pages.ts` with `published: true`, sitemap priority, changeFrequency.
5. Call the schema builders in the page (`buildArticleSchema()`, `buildBreadcrumbSchema()`, `buildAlternates()` for hreflang).
6. Cross-link from related pages where it makes sense.
7. Add the page to `llms.txt` (one-line description + URL) and the relevant section of `llms-full.txt` (full Markdown content).

## Technical Implementation Details

### JavaScript / TypeScript Architecture
- **Server Components by default.** Anything needing browser APIs (state, event handlers, refs, `window`, `document`, `gtag`) gets `"use client"` at the top of the file.
- **Locale-aware links:** Import `Link` / `useRouter` from `@/lib/i18n/navigation`, not `next/link`. This auto-prefixes the current locale.
- **Translations:** Call `await getTranslations()` in Server Components; call `useTranslations()` in Client Components. Both return the same flat snake_case key bag.
- **Schema:** `lib/schema/*.ts` builders return plain objects. Wrap in `<JsonLd data={...} />` (in `components/JsonLd.tsx`) to render into the DOM. The Organization schema is emitted once in `app/[locale]/layout.tsx`; every other page can reference it via `@id`.
- **Async schemas:** `buildArticleSchema()` reads the dateModified from the JSON file on disk, so it's `async`. Always `await` it.

### CSS Patterns
- **Tailwind v4 CSS-first config.** All design tokens live in `app/globals.css` under `@theme {}`. Add a new color via `--color-<name>: #XXXXXX;` — it becomes available as `bg-<name>`, `text-<name>`, `border-<name>` automatically.
- **Element-first heading styles.** Plain `<h1>` and `<h2>` pick up their V2 styling from element-level rules at the top of `globals.css` — no `.h1-inflation` / `.h2-inflation` class hook needed. Wrapper-scoped tweaks (like `.category-section h2` at 32px) override the base where needed.
- **Semantic tokens drive everything.** Hard-coded hex values are a code smell in V2 rules — reach for `var(--color-fg-muted)`, `var(--color-surface)`, `var(--color-card-border)`, `var(--color-success)`, `var(--color-danger)`, `var(--color-link-hover)` etc. before introducing a raw `#XXX`.
- **V1 page CSS has been REMOVED** from `app/globals.css` as of April 2026. Pages that still reference V1 classes (`.wallet-q`, `.biz-*`, `.expandable`, `.h2-stickers`, `.h2-section`, `.h3-item`, form/sticker styles, etc.) render unstyled until each page's V2 redesign lands post-cutover.
- **Responsive breakpoints** at `xs: 400px` (tight mobile) and `md: 700px` (tablet / desktop transition) — defined as `--breakpoint-xs` / `--breakpoint-md`. All media queries in globals.css are unified on 700px.
- **`--card-accent` CSS variable** drives per-section color hierarchy. Parent sets it; cards inherit.
- **`--pill-color` CSS variable** drives all `.home-pill.<color>` modifiers — each color class is a single `--pill-color: #XXX;` line that the base `.home-pill` rule reads for both text + border.
- **RTL handling** via `<html dir="rtl">` set in `app/[locale]/layout.tsx` — no per-component logic needed.

### Performance Considerations
- Static generation: `npm run build` prerenders ~4,700 pages (54 published slugs × 55 locales + special routes) at build time.
- Compressed images under 500KB each in `public/img/`.
- Long-cache headers for `/img/*`, `/favicons/*`, and `/sticker-files/*` in `next.config.ts`.
- No client-side i18n loading — translations are in the initial HTML response.
- Google Analytics (gtag.js via `components/GoogleAnalytics.tsx`, ID: `G-18L58W2GTN`).

## Community and Contribution Patterns

### Open Source Approach
- MIT License for maximum freedom.
- GitHub-based collaboration with issues and discussions.
- Clear `CONTRIBUTING.md` with step-by-step instructions.
- Welcoming to non-technical contributors (especially translators — they edit JSON files only).

### Quality Control
- Manual review process for translations.
- Curated external link selection.
- Community feedback through GitHub discussions.
- Regular content freshness reviews.

## Common Tasks and Solutions

### Adding New Content
1. Add the route file (`app/[locale]/<slug>/page.tsx`) with proper metadata, schemas, `getTranslations()`, and JSX.
2. Add the English translation JSON under `i18n/en/`, with `@metadata.last-updated` set to today.
3. Register the namespace in `lib/i18n/request.ts` → `DEFAULT_NAMESPACES`.
4. Register the slug in `lib/pages.ts` with `published: true`.
5. Translations for other languages flow in via PRs over time. The loader falls back to English per-key.
6. Do not test across languages and devices unless explicitly asked to do so.

**Note:** The legacy `scripts/inject-seo-content.js` step is gone — Next's server rendering puts translated content directly in the HTML response.

### Translation Management
- Check `/i18n/` directory for language completion status.
- Use GitHub discussions for translation coordination.
- Maintain consistent terminology across languages.
- Test language switching functionality.
- **⚠️ ALL translation strings MUST be translated:** When creating translation files for a new language, you MUST translate EVERY SINGLE user-facing string value into the target language. Do NOT leave any strings in English. This applies to ALL files (including `business/`, `nostr/`, `sticker-files/` subdirectories). The only exceptions are `@metadata` fields, proper nouns/brand names, URLs, dimensions, and currency codes. After creating files, run `node scripts/i18n-audit/verify-language.js [lang]` to verify the locale (manifest marker, coverage, and stale pre-V2 English cross-check). Note: `scripts/audit-translation.js` was deleted in Phase 14; `verify-language.js` is the canonical replacement.
- **⚠️ SCRIPT SIZE LIMIT:** A full language translation (~90+ files) is too large to create in a single Node.js script. Always break translation scripts into multiple smaller scripts by category (e.g., sticker-files, business, comparisons, common, index, inflation, etc.) and place them in `scripts/[lang]/`. See `.clinerules/workflows/translate-new-language.md` for the recommended breakdown.
- **When adding a new language,** update ALL of these locations (see `.clinerules/workflows/translate-new-language.md` for full details):
  1. `i18n/[lang]/` — Create all translation JSON files (mirror English directory structure) with ALL strings translated into the target language.
  2. `lib/i18n/config.ts` — Add to the `languages` array AND the `locales` readonly tuple, inserted in **alphabetical order by native display name** (English first, then all others alphabetically).
  3. `i18n/*/about_*.json` — Run `node scripts/update-about-lang-count.js <newCount>` (auto-discovers all languages, handles native numeral systems).
  4. `llms.txt` — Add language name to the "Languages" line in "About This Site".
  5. `llms-full.txt` — Update the "available in X languages" line.
  6. Update memory bank — `progress.md` and `activeContext.md`.
  7. (Optional) If the language is RTL, add its code to `RTL_LOCALES` in `lib/i18n/config.ts`.

### LLM Content Files (llms.txt / llms-full.txt)
- Both live in `public/` so they're served at `/llms.txt` and `/llms-full.txt`.
- **When to update:** After adding new pages, updating existing page content, or adding new languages.
- **`llms.txt`:** Concise site overview for AI systems (~800 words). Update when adding new pages (add to the page listing), changing the site's language list, or modifying organizational info.
- **`llms-full.txt`:** Full educational content in Markdown (~8,000+ words). Update when page content changes significantly.
- **Content source:** The English JSON translation files (`i18n/en/`) are the single source of truth. Assemble content from those files into clean Markdown prose.

### i18n JSON `last-updated` Dates (IMPORTANT)
- **Every time** an i18n JSON file is created or modified (any language, any page), update its `@metadata.last-updated` field to today's date in `YYYY-MM-DD` format.
- This applies universally: English files, translation files, new files, existing files — no exceptions.
- The HTML schema `dateModified` is derived automatically from the English JSON's `last-updated` via `lib/schema/date-modified.ts` — no manual bookkeeping.

### Editing i18n JSON Files (IMPORTANT)
- **Never use inline CLI commands** (e.g., `node -e "..."`) to modify i18n JSON files. Special characters in translations (accented characters, Cyrillic, Thai, checkmarks, etc.) get corrupted by shell escaping.
- **Never use `Edit` (or any in-place text replacement)** on i18n JSON files with non-ASCII content — the search/replace matching breaks on special characters and tab indentation.
- **Best approach:** Create a standalone `.js` script file in `/scripts/` that uses `JSON.parse()` / `JSON.stringify()` with proper tab indentation (`JSON.stringify(obj, null, '\t')`) to read, modify, and write the JSON files. Then run it with `node scripts/your-script.js`. This handles all character encodings correctly.
- **Alternative:** Use `Write` to write the entire JSON file contents directly. This works but is verbose for large files.
- **Tab indentation:** All i18n JSON files use tab indentation (not spaces). Always preserve this when writing.

### Google Analytics Custom Events (IMPORTANT)
- **When adding a new `gtag('event', ...)` call**: Any custom event parameters (like `event_category`, `event_label`, or custom names) must be **registered as Custom Dimensions in GA4** or the parameter values will not be visible in reports.
- **GA4 does NOT auto-collect** `event_category` or `event_label` — these are NOT built-in dimensions in GA4 (they were in Universal Analytics). They must be registered manually.
- **How to register:** GA4 Admin → Property → Data display → Custom definitions → Create custom dimension. Set scope to "Event" and enter the exact parameter name from the code.
- **Remind the user:** When adding a new gtag event with custom parameters, remind the user to register any new parameters as custom dimensions in GA4. Data only starts being collected from the moment of registration (not retroactive).
- **Existing custom events** (as of April 2026 / Next migration):
  1. `language_pageview` (in `components/LanguageSwitcher.tsx`) — params: `event_category`, `event_label`, `language_active`, `language_source`
  2. `language_switch` (in `components/LanguageSwitcher.tsx`) — params: `event_category`, `event_label`, `language_selected`
  3. `select_currency` (in `components/CountrySelector.tsx`) — params: `event_category`, `event_label`
- **Standard pattern:** Always use `event_category` and `event_label` for consistency across all custom events. Add more specific parameters as needed.

### Performance Optimization
- Optimize images before adding to `public/img/`.
- Minimize JavaScript bundle size — prefer Server Components over Client Components.
- Use Next's long-cache headers (already configured for images + sticker files).
- Test loading times on mobile connections.

## Project Values and Constraints

### Core Values
- **Simplicity:** Keep everything as simple as possible for beginners.
- **Accessibility:** Support global reach through translations and responsive design.
- **Community:** Foster collaborative, open-source development.
- **Quality:** Maintain high standards for educational content.
- **Privacy:** Minimal data collection, privacy-focused analytics.

### Technical Constraints
- Translated HTML must be in the initial response (no client-side hydration flash for content).
- `forms-backend/` stays as a separate Railway service (untouched by frontend changes).
- Community-driven translations (no professional translation services).
- All data in the repo (no CMS, no database on the frontend).

## Tools Guidance
- Shell quoting frequently breaks on translated text; prefer Node scripts (or `Write` for whole-file rewrites) for any task that touches i18n JSON. Never `sed` / `awk` / heredoc through non-ASCII content.

## Success Indicators
- High engagement with educational content.
- Active community translation contributions.
- Regular sharing as "first link" for Bitcoin education.
- Business adoption through provided resources.
- Global reach across multiple languages.

This project intelligence helps maintain consistency and quality while enabling effective collaboration with the bitcoin.rocks community.
