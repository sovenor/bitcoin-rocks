## Latest: CSS Refactor — April 18, 2026

First post-migration housekeeping commit on `v2-nextjs-redesign`. `app/globals.css` dropped from 2368 to 1090 lines (-54%) across 3 commits prefixed `CSS refactor:`. Zero visual change on V2 pages; V1 pages temporarily render unstyled (acceptable — they're scheduled for V2 redesign post-cutover anyway).

### What changed

**Commit 1 — delete V1 legacy CSS** (`e3dbb13f` — `CSS refactor: delete V1 legacy CSS (Phase 9a/9b/10/12)`)
- Dropped the four legacy CSS blocks (Phase 9a Bucket B, Phase 9b forms, Phase 10 business, Phase 12 nostr) — ~1200 lines total.
- Selectors gone: `.text-box`, `.wallet-q`, `.wallet-box`, `.wallet-button`, `.bounty-button`, `.compound-form`, `.cic-button`, `.alert`, `.biz-box`, `.biz-*` cards, `.wallet-box-biz`, `.expandable`, `.initial-text`/`.additional-text`, `.h2-section`, `.h3-item`, `.h2-label`, `.h2-stickers`, `.h3-label`, `.h4-label`, `.h3-category`, `.h2-category`, `.nostr-intro-h2`, `.biz-h3`, `.wallet-h3`, `.choose-sticker`, `.button-form`, `.button-sticker`, `.buy-platform-box`, `.payment-method-option`, `.fixed-bottom-bar`, all the `.break-*` utilities, plus ~20 small helpers.
- Affected JSX pages that now render unstyled (deliberate, temporary): `/wallets`, `/lightning`, `/flyers`, `/compound-inflation-calculator`, `/stickers`, `/signs`, `/postcards`, `/buy`, `/business/*` (13 pages), `/nostr/*` (2 pages), `/sticker-files/*` (43 pages + index), all `*-success` pages.

**Commit 2 — standardize tokens + element base styles + dedupe V2** (`eb89d1a9` — `CSS refactor: standardize tokens, element base styles, dedupe V2 rules`)
- Expanded `@theme` with new semantic tokens: `--color-surface` (#111119 card background), `--color-fg-dim` (#999), `--color-fg-dimmer` (#888), `--color-card-border` (rgba(255,255,255,0.12)), `--color-success` (#4caf50), `--color-danger` (#ff4444), `--color-link-hover` (#ffb84d). These replaced ~100 hard-coded hex occurrences across the V2 rules.
- Added element-level base styles for `html`/`body`/`h1`/`h2` so every V2 page gets hero + section-heading styling from the element itself, no class hook required.
- Collapsed 21 `.home-pill.<color> { color: X !important; }` rules + the border-color union into one `--pill-color` CSS custom prop pattern: base rule reads `color: var(--pill-color, #f0f0f0)` + `border-color: var(--pill-color, #3d3d3d)`; each modifier is a single line `--pill-color: #19bc38;`. Went from ~50 lines to 25 lines and zero `!important`.
- Stripped ~65 unnecessary `!important` tags. Only 2 legitimate `!important` uses remain: `.countries[hidden] { display: none !important }` (CSS attribute-based hiding needs to beat descendant `display:` rules) and `.force-orange` (intentional override for headings that otherwise inherit parent color).
- Unified all media queries on the `--breakpoint-md` (700px) value. File previously mixed 400/500/600/700 breakpoints with no justification.
- Added a clear table of contents in the file header describing the 6 sections.

**Commit 3 — strip `.h1-inflation`/`.h2-inflation` from V2 JSX** (`892bc08d` — `CSS refactor: strip redundant h1-inflation/h2-inflation classNames from V2 JSX`)
- 6 V2 files edited:
  - `app/[locale]/page.tsx` — `<h1 className="h1-inflation">` → `<h1>` ; `<p className="inflation-intro">` → `<p>` (handled by `.home-hero p` rule)
  - `app/[locale]/inflation/page.tsx` — `<h1 className="h1-inflation">` → `<h1>` ; removed `className="orange"` on the `#changing-header` `<span>` since it's already an orange H1
  - `app/[locale]/[...rest]/page.tsx` + `app/not-found.tsx` — same H1 strip; kept `.force-orange` on the H2 since base H2 is white
  - `components/ComparisonPageLayout.tsx` + `components/ContentPageLayout.tsx` — `<h1 className="h1-inflation comparison-h1">` → `<h1>` ; `.comparison-h1` no longer needed, its `line-height: 1.15` tweak moved to `.comparison-hero h1`
- Build: `npm run build` ✓ 4734 static pages, TypeScript clean.

### Intentionally left alone
- V1 JSX classNames (`.wallet-q`, `.biz-*`, `.h2-section`, `.h3-item`, `.h2-stickers`, etc.) — classes still in markup but the CSS is gone. Pages render unstyled until their V2 redesign lands. This was the user's explicit request: don't touch V1 pages since they're being redesigned anyway.
- `.comparison-h1` class reference — fully removed from JSX. Any legacy code path still passing it gets ignored (no matching CSS selector).
- `forms-backend/` — untouched.
- `main` at `origin/main` (`6cb07406`) — still frozen through Phase 15 cutover.

### Files changed in this CSS refactor
```
app/globals.css                                (-1278 lines total: 2368 → 1090)
app/[locale]/page.tsx                          (2 className strips on H1 + P)
app/[locale]/inflation/page.tsx                (1 className strip on H1; span.orange removed)
app/[locale]/[...rest]/page.tsx                (2 className strips on H1 + H2)
app/not-found.tsx                              (2 className strips on H1 + H2)
components/ComparisonPageLayout.tsx            (1 className strip on H1)
components/ContentPageLayout.tsx               (1 className strip on H1)
scripts/css-refactor/update-memory-bank.js     (NEW — idempotent this file's generator)
memory-bank/activeContext.md                   (this entry prepended)
memory-bank/progress.md                        (progress note prepended)
```

### Next
Nothing scheduled — CSS refactor is a one-off housekeeping commit. The migration plan returns to Phase 15 (pre-cutover QA + cutover merge to `main`) when the user is ready. The per-page V2 redesigns of Bucket B/C pages can happen anytime post-cutover; each one will naturally replace the now-unstyled V1 markup with fresh V2 markup.

---

## Latest: Next.js Migration — Phase 14 Cleanup + Docs — April 17, 2026

Eighteenth commit of the Next.js migration on `v2-nextjs-redesign`. With all content-porting phases complete (Phases 5-13 shipped 54 published slugs × 55 locales = 4,734 static pages), Phase 14 is the cleanup pass: we deleted every legacy static-site asset the Next app has fully replaced, and refreshed the entire documentation tree (`.clinerules/`, `memory-bank/`, `README.md`, `CONTRIBUTING.md`) to describe the Next 16 + React 19 + TS + Tailwind v4 stack instead of the old HTML/CSS/jQuery site. `main` is still frozen; the next phase (Phase 15) is the cutover merge.

### What Phase 14 deleted

**Root-level HTML pages (27 files)** — replaced by their `app/[locale]/<slug>/page.tsx` equivalents:
`404.html`, `about.html`, `bank-runs.html`, `bitcoin-vs-{banks,bonds,cash,cbdc,crypto,fine-art,gold,real-estate,stocks,visa}.html`, `buy.html`, `compound-inflation-calculator.html`, `flyers.html`, `get-involved.html`, `index.html`, `inflation.html`, `lightning.html`, `postcards.html`, `postcard-success.html`, `sign-success.html`, `signs.html`, `sticker-language-success.html`, `sticker-success.html`, `stickers.html`, `wallets.html`.

**HTML sub-site directories** — replaced by the Next routes:
`business/` (13 pages), `nostr/` (2 pages), `sticker-files/` (43 language subdirs + 1 index).

**Legacy front-end stack**:
`jquery/` (jQuery core + jquery.i18n + all 11 custom JS files — language.js, home-carousel.js, country-selector-*.js, inflation-stats.js, dynamic-header.js, compound-inflation-calculator*.js, sticker-picker.js, buy-flow.js) and `css/` (single `style.css`).

**Server config**:
`nginx.conf` (replaced by `next.config.ts`'s `redirects()` — 33 permanent redirects already in place from Phase 13) and `robots.txt` (replaced by `app/robots.ts`).

**Legacy script pipeline** (13 scripts total):
- `scripts/inject-{article,breadcrumb,comparison,organization,reviewed-badge,seo-content}-schema.js` (6 files) — replaced by `lib/schema/*.ts` builders.
- `scripts/inflation-multi/` directory — static-site era multi-currency inflation HTML rebuilder.
- One-off HTML helpers: `scripts/fix-carousel-wrap.js`, `scripts/update-inflation-{i18n,revamp}.js`, `scripts/update-index-i18n-for-saving.js`, `scripts/add-{faq,whats-next}-keys.js`, `scripts/audit-v2-v1-pages.js`.

**Total**: 43 files + 6 directories deleted via the idempotent `scripts/phase14/delete-legacy-assets.js` helper.

### What stayed

- `public/img/**`, `public/favicons/**`, `public/sticker-files/**`, `public/business/**` — already the canonical copy (copied in earlier phases; the deleted root-level `img/` / `business/files/` / `business/sticker-files/` / `sticker-files/` directories were the LEGACY locations).
- `forms-backend/` — separate Railway service, completely untouched.
- `i18n/` — untouched; translators keep editing the same JSON files.
- Memory bank, `.github/`, `nixpacks.toml`, `.gitignore`.
- Translation bootstrap scripts (`scripts/<language>/`, `scripts/audit-translation.js`, `scripts/update-about-lang-count.js`) and the phase-migration helpers (`scripts/phase10..14/`, `scripts/append-comparison-css.js`).

### Documentation refresh

**`.clinerules/workspace-rules.md`** — fully rewritten for the Next 16 stack. Removed "Static Site First" / "jQuery-based" / "no modern JS frameworks" language; documented Server Components by default, locale-aware `<Link>` via `@/lib/i18n/navigation`, Tailwind v4 CSS-first config, the V2 design system class reference, and the Creating-a-New-Page / Adding-a-Translation workflows. All GA event docs updated to point at the new component locations (`components/LanguageSwitcher.tsx`, `components/CountrySelector.tsx`).

**`.clinerules/workflows/translate-new-language.md`** — replaced the `jquery/language.js` step with `lib/i18n/config.ts` (both `languages` array + `locales` tuple), dropped the `scripts/inject-seo-content.js` step, dropped the `index.html` schema step (Next generates hreflang + WebSite schema automatically), added an RTL note, added the "verify build" final step.

**`memory-bank/techContext.md`** — rewritten around the Next stack: Node ≥ 20 prerequisite, npm scripts, updated file-structure tree matching the new `app/` / `components/` / `lib/` layout, dependency list (next, react, next-intl, typescript, tailwindcss), GA events documented with their new component locations, `next.config.ts` + `middleware.ts` + `lib/i18n/config.ts` described.

**`memory-bank/systemPatterns.md`** — rewritten around Server Components + locale-first routing + next-intl namespaces. Documents the Page Shape Pattern (`generateMetadata` + `buildAlternates` + JSON-LD builders), Layout Stack Pattern (root pass-through → `[locale]` layout → catch-all 404), Shared-Chrome Pattern, Data+Layout Components (`ComparisonPageLayout` / `ContentPageLayout` / `NostrPageLayout` / `BusinessPageShell`), Interactive Client Components, Data Flow patterns (translation loading + Inflation Stats cross-component CustomEvent bridge). Added a "Cleanup (Phase 14) — what's gone" section listing the deleted legacy assets.

**`README.md`** — replaced the Apache / .htaccess / "raw HTML / CSS / JS" description with Next.js 16 + React 19 + TS + Tailwind v4. Added a Local Development section with the `npm install` / `npm run dev` / `npm run build` commands.

**`CONTRIBUTING.md`** — updated the prerequisites (Node ≥ 20, VS Code or any modern editor instead of Atom specifically), added a Local development setup section, added a Phase-14-era note that translators don't need to touch TypeScript code (the maintainer adds new languages to `lib/i18n/config.ts` at merge time). Preserved the full fork-and-translate workflow which is unchanged for contributors.

**`app/robots.ts`** — removed stale `Disallow: /jquery/` and `Disallow: /css/` entries (those directories no longer exist in the deploy tree).

### Build + verification

- `npm run build` → ✓ Compiled successfully, TypeScript clean, **4,734 static pages** generated (unchanged from Phase 13). No regressions.
- Repo is clean: 27 HTML files + 6 directories + 13 scripts gone; working tree + Next app untouched.
- `forms-backend/` completely untouched.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files changed in Phase 14
```
scripts/phase14/delete-legacy-assets.js                         (NEW — idempotent legacy-asset deleter)
scripts/phase14/update-memory-bank.js                           (NEW — this file's generator)
27 root *.html files                                            (DELETED)
business/, nostr/, sticker-files/                               (DELETED — 3 dirs, ~115 HTML files)
jquery/, css/                                                   (DELETED — 2 dirs)
nginx.conf, robots.txt                                          (DELETED)
13 scripts/inject-*.js + update-*.js + fix-*.js                 (DELETED — 13 files + 1 subdir)
scripts/inflation-multi/                                        (DELETED)
app/robots.ts                                                   (edited — drop /jquery/ /css/ disallow)
.clinerules/workspace-rules.md                                  (rewritten — Next stack)
.clinerules/workflows/translate-new-language.md                 (rewritten — Next stack)
memory-bank/techContext.md                                      (rewritten — Next stack)
memory-bank/systemPatterns.md                                   (rewritten — Next stack)
memory-bank/activeContext.md                                    (this entry prepended)
memory-bank/progress.md                                         (Phase 14 note prepended)
README.md                                                       (rewritten — Next stack + local dev)
CONTRIBUTING.md                                                 (updated — prerequisites + Next dev setup)
MIGRATION-NEXTJS.md                                             (edited — Phase 14 complete, pointer → Phase 15)
```

### Next
**Phase 15** — pre-cutover QA + the cutover merge itself. The `v2-nextjs-redesign` branch will be deployed to a Railway STAGING service first, a full QA pass runs against every page × sample locales (including RTL + CJK), the GEO checklist gets a full re-verification, then the branch merges to `main` and Railway prod auto-redeploys.

---

# Active Context: bitcoin.rocks

## Latest: Next.js Migration — Phase 13 404 + legacy redirects + final sitemap — April 17, 2026

Seventeenth commit of the Next.js migration on `v2-nextjs-redesign`. The last content-port phase is done: locale-aware 404 page in every one of the 55 languages, 33 permanent redirects from legacy nginx.conf slug shortcuts, and a cleanup of the stale hand-written `sitemap.xml`. This is the final phase before Phase 14's deletion pass and Phase 15's cutover. `main` is still frozen.

### What Phase 13 delivered

**New pages (2)**
- **`app/[locale]/[...rest]/page.tsx`** — NEW catch-all page (~100 lines). Renders the translated 404 body INLINE (not via `notFound()`) so Next's `[locale]/layout.tsx` stays active, giving every 404 response the correct `<html lang={locale} dir={ltr|rtl}>` + Navbar + Footer + GA. Translated "THIS BROKEN PAGE DOES NOT ROCK" H1 + "GO BACK HOME" CTA. Sets `robots: { index: false, follow: true }` so crawlers don't index stale URLs. This is the idiomatic next-intl App Router pattern for locale-scoped 404s — calling `notFound()` would resolve to the root `app/not-found.tsx` which has no locale context.
- **`app/not-found.tsx`** — NEW global fallback (~60 lines). Self-contained `<html>`/`<body>` wrapper (required by Next since `app/layout.tsx` is a pass-through). Renders English 404 body + link to `/en`. Only triggers for paths that resolve no locale at all.

**Files modified**
- **`next.config.ts`** — populated `redirects()` with 33 permanent redirects ported verbatim from `nginx.conf`'s `rewrite` directives:
  - Sticker pack aliases: `/orange-pill-pack` · `/sticker` · `/bitcoin-stickers` · `/opp` → `/stickers`
  - Comparison shortcuts: `/gold` · `/cbdc` · `/CBDC` · `/crypto` · `/cash` · `/real-estate` · `/realestate` · `/stocks` · `/equities` · `/bonds` · `/bond` · `/art` · `/fine-art` · `/fineart` · `/visa` · `/banks` → `/bitcoin-vs-{target}`
  - Case/plural variants: `/INFLATION`/`/inflation`; `/bank-run`/`/bankrun`/`/bankruns`/`/bank-runs`; `/wallet`/`/wallets`; `/postcard`/`/postcards`; `/flyer`/`/flyers`; `/Lightning`/`/lightning`
  - Business shortcuts: `/guide`/`/guides`/`/business/guides`→`/business/guide`; `/kit`/`/business-kit`/`/businesskit`→`/business/kit`
  - Save-sticker deep link (query preserved): `/save` → `/inflation?sign=got-inflation`
  - Trailing-`.html` stripper: `/:path*.html` → `/:path*` for legacy bookmarks. All 308 permanent; middleware then localizes the unlocaled destination.
- **`next.config.ts`** — added long-cache header for `/sticker-files/:path*` (mirrors `/img/*` + `/favicons/*` — 219 PNGs).
- **`lib/i18n/request.ts`** — added `404` namespace to `DEFAULT_NAMESPACES` so the `404_title`/`404_message`/`404_home` keys load alongside the rest.
- **`sitemap.xml`** (repo root) — DELETED. Next's `app/sitemap.ts` now owns `/sitemap.xml` and emits the canonical dynamic version (one entry per `(published page, locale)` pair + full hreflang alternates per URL).
- **`MIGRATION-NEXTJS.md`** — Phase 13 checkboxes complete; status pointer advanced to Phase 14.

**New scripts (`scripts/phase13/`)**
- **`update-memory-bank.js`** — this file's generator. Idempotent.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 4.0s, TypeScript clean, **4,734 static pages** generated (same as end of Phase 12; the catch-all is a Dynamic route not an SSG page). Build warns that `middleware.ts` is deprecated in favor of `proxy.ts` in Next 16 — deferred to Phase 14's cleanup pass.
- Runtime spot-check via `/tmp/verify-phase13.js` — all **32 assertions pass**:
  - `/en/does-not-exist` (200 status, `noindex` meta) contains "THIS BROKEN PAGE" + "GO BACK HOME" + `h1-inflation` class + `rocks-logo-gray.png`
  - `/ar/does-not-exist` renders `<html lang="ar" dir="rtl">` with the same 404 body
  - `/en/bitcoin-vs-gold` still serves 200 with comparison layout (smoke test)
  - `/gold` → 308 with `Location: /bitcoin-vs-gold`
  - `/CBDC` → 308 with `Location: /bitcoin-vs-cbdc` (case-insensitive)
  - `/kit` → 308 with `Location: /business/kit`
  - `/orange-pill-pack` → 308 with `Location: /stickers`
  - `/inflation.html` → 308 with `Location: /inflation`
  - `/save` → 308 with `Location: /inflation?sign=got-inflation` (query preserved)
  - `/sitemap.xml` contains 10 expected URLs (`/en`, `/en/inflation`, `/en/bitcoin-vs-gold`, `/en/business`, `/en/sticker-files/yoruba`, `/en/nostr`, Arabic + Chinese locale URLs, hreflang alternates)
  - `/robots.txt` and `/llms.txt` still serve 200

### Architecture validation
Phase 13's key design decision — **render the 404 body INLINE from a catch-all page instead of calling `notFound()`** — turned out to be the only pattern that keeps the `[locale]/layout.tsx` wrapper active. Calling `notFound()` from `[locale]/[...rest]/page.tsx` (or having a `[locale]/not-found.tsx`) resolves to the ROOT `app/not-found.tsx` which has no access to `getTranslations()` or the locale's RTL setting. The 200-status + `noindex` meta is a SEO-acceptable trade-off: crawlers skip the page via noindex; users see the right translated experience with a real Navbar. This is the documented next-intl pattern.

The legacy-redirect system worked cleanly: 33 entries, all 308s land correctly. The `/:path*.html` matcher handles trailing-`.html` bookmarks for all paths at once, not just the 13 root-level slugs Google knows about. Query string is preserved end-to-end (the `/save` test confirms this — `?sign=got-inflation` survives the redirect).

### Intentionally left alone
- `404.html` + `nginx.conf` + `.htaccess` (if any) — still shipped by the static site on `main`. Phase 14 deletes them.
- Non-English translations for the `404_*` keys — `i18n/` already has them for all 55 locales (checked during Phase 2); English fallback catches any gaps.
- `forms-backend/` — completely untouched.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 13
```
app/[locale]/[...rest]/page.tsx                                 (NEW — ~100 lines, catch-all 404)
app/not-found.tsx                                               (NEW — ~60 lines, global fallback)
scripts/phase13/update-memory-bank.js                           (NEW — this file's generator)
next.config.ts                                                  (+33 redirects, +1 cache header block)
lib/i18n/request.ts                                             (+1 namespace: "404")
sitemap.xml                                                     (DELETED from repo root; app/sitemap.ts owns it)
MIGRATION-NEXTJS.md                                             (edited — Phase 13 complete, pointer → Phase 14)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 14** — the cleanup pass: delete all the legacy static-site assets the Next app has fully replaced (`*.html` at root, `business/*.html`, `nostr/*.html`, `sticker-files/*/index.html`, `css/style.css`, `jquery/`, `nginx.conf`, `.htaccess`, obsolete `scripts/inject-*.js`), migrate `middleware.ts` → `proxy.ts` per the Next 16 deprecation warning, and update all docs (`.clinerules/workspace-rules.md`, memory bank files, `CONTRIBUTING.md`, `README.md`) to reflect the new Next stack. After Phase 14, Phase 15 is the cutover merge to `main`.

---

## Latest: Next.js Migration — Phase 12 Nostr section (/nostr + /nostr/what-is-nostr) — April 17, 2026

Sixteenth commit of the Next.js migration on `v2-nextjs-redesign`. The 2-page `/nostr` section — the "Escape the Matrix with Nostr" index + "What is Nostr?" sub-page — is now live as a faithful V1 Tailwind port sharing a single `<NostrPageLayout>` Server Component. V2 redesign deferred to the post-cutover queue. `main` is still frozen.

### What Phase 12 delivered

**New components**
- **`components/NostrAccordion.tsx`** — Client Component (~65 lines). Ports the V1 inline `toggleDiv()` JS: click on the orange-bg `.expandable` wrapper toggles the `.expanded` class (which reveals the `.additional-text` body via CSS). The DOM walker preserves the legacy behavior that clicks on descendant `<a>` tags DO NOT toggle — they follow the link instead. Keyboard-accessible (Enter/Space, with focus-check so links don't get intercepted).
- **`components/NostrPageLayout.tsx`** — Server Component (~300 lines). Renders both nostr pages via one tree: hero H1 + "JOIN NOSTR NOW" anchor CTA → 3 intro sections (Protocol/Freedom/Bitcoin is built in) → "DOWNLOAD A FREE CLIENT" H2 → 3 accordions (iPhone: Primal+Damus; Android: Primal+Amethyst; Browser: Iris) → publisher attribution. Accepts `slug` / `titleKey` / `headerKey` / `descriptionKey` so the two pages share the component tree — only those four vary.

**New pages (2)**
- **`app/[locale]/nostr/page.tsx`** — thin ~65-line page with `slug: "nostr"` + `escape_the_matrix_with_nostr` meta title. OG image `meta-nostr-home-v1.png`.
- **`app/[locale]/nostr/what-is-nostr/page.tsx`** — thin ~65-line page with `slug: "nostr/what-is-nostr"` + `what_is_nostr` meta title. OG image `meta-nostr-what-v1.png`. Breadcrumb = Home > Nostr > What is Nostr? (Phase 4's `buildBreadcrumbTrail()` already handles the `nostr/` subpath rule correctly).

**New scripts (`scripts/phase12/`)**
- **`update-en-json.js`** — idempotent; adds 1 new meta-description key per English JSON file (`nostr_page_description` + `what_is_nostr_page_description`) + refreshes `@metadata.last-updated` to 2026-04-17. 2 new keys added.
- **`append-nostr-css.js`** — idempotent sentinel-marker guarded CSS appender. Adds V1 nostr classes: `.expandable` / `.additional-text` / `.expanded .additional-text`, `.orange-bg`, `.wallet-box-biz img.other`, `.wallet-biz-solo`, `.h3-category` (italic uppercase accordion headers), `.h4-label` (client-name labels), `p.initial-text` / `p.additional-text`, plus a new `.nostr-intro-h2` that replaces V1's non-semantic `<h7>` with a styled `<h2>` for a clean heading hierarchy.
- **`wire-and-publish.js`** — idempotent helper that adds `nostr/index` + `nostr/what-is-nostr` namespaces to `DEFAULT_NAMESPACES` in `lib/i18n/request.ts` and flips `published: true` for both slugs in `lib/pages.ts`.
- **`update-memory-bank.js`** — this file's generator.

**Files modified**
- **`i18n/en/nostr/index_en.json`** — added `nostr_page_description` + refreshed `last-updated`.
- **`i18n/en/nostr/what-is-nostr_en.json`** — added `what_is_nostr_page_description` + refreshed `last-updated`.
- **`lib/i18n/request.ts`** — added 2 new namespaces to `DEFAULT_NAMESPACES`.
- **`lib/pages.ts`** — flipped `published: true` for both nostr slugs; sitemap now emits **110 new URLs** (55 locales × 2 slugs).
- **`app/globals.css`** — appended ~140 lines of V1 nostr-page CSS via the append script (sentinel-marker guarded).
- **`MIGRATION-NEXTJS.md`** — Phase 12 checkboxes complete; status pointer advanced to Phase 13.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 3.9s, TypeScript clean, **4734 static pages** generated (55 locales × 42 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Up from 4624 at end of Phase 11. That's **110 new URLs** for Phase 12.
- Runtime spot-check via `/tmp/verify-phase12.js` — all **4 assertions pass**:
  - `/en/nostr` (216 KB) — "ESCAPE THE MATRIX WITH NOSTR" H1 + "JOIN NOSTR NOW" anchor CTA + all 3 intro headers + "DOWNLOAD A FREE CLIENT TO JOIN NOSTR" + all 3 accordion titles (iPhone / Android / Browser Clients) + all 4 client brand names (PRIMAL, DAMUS, AMETHYST, IRIS) + `expandable` class + `/img/clients/primal.png` + Article + BreadcrumbList JSON-LD.
  - `/en/nostr/what-is-nostr` (218 KB) — "WHAT IS NOSTR?" + all 3 accordion titles + Article + BreadcrumbList (Home > Nostr > What is Nostr?).
  - `/ar/nostr` (207 KB) renders `<html lang="ar" dir="rtl">` correctly.
  - `/sitemap.xml` (26 MB) contains both new English URLs.

### Architecture validation
Phase 12 confirms the "one shared page-layout + two thin pages" approach from earlier phases scales cleanly to the nostr section. The only page-specific variation (H1 text / meta / breadcrumb slug / OG image) is passed in as props — the other 95% of the page (3 intro sections + 3 client-picker accordions + publisher attribution) is server-rendered identically. The `<NostrAccordion>` Client Component follows the "zero translation lookups in the client bundle" pattern: the parent renders the translated H3 header + accordion body children on the server, and the client component only owns the open/closed state (~65 lines of JS).

### Intentionally left alone
- `nostr/index.html` + `nostr/what-is-nostr.html` — still shipped by the static site on `main`. Phase 14 deletes them.
- V2 redesign of the nostr section — deferred to post-cutover queue.
- `forms-backend/` — untouched (nostr pages have no forms).
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 12
```
components/NostrAccordion.tsx                                   (NEW — Client, ~65 lines)
components/NostrPageLayout.tsx                                  (NEW — Server, ~300 lines)
app/[locale]/nostr/page.tsx                                     (NEW — ~65 lines)
app/[locale]/nostr/what-is-nostr/page.tsx                       (NEW — ~65 lines)
scripts/phase12/update-en-json.js                               (NEW — idempotent)
scripts/phase12/append-nostr-css.js                             (NEW — idempotent CSS appender)
scripts/phase12/wire-and-publish.js                             (NEW — idempotent flipper)
scripts/phase12/update-memory-bank.js                           (NEW — this file's generator)
i18n/en/nostr/index_en.json                                     (edited — +1 key, date)
i18n/en/nostr/what-is-nostr_en.json                             (edited — +1 key, date)
app/globals.css                                                 (appended ~140 lines of V1 nostr CSS)
lib/i18n/request.ts                                             (edited — +2 namespaces)
lib/pages.ts                                                    (edited — 2 slugs → published)
MIGRATION-NEXTJS.md                                             (edited — Phase 12 complete, pointer → Phase 13)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 13** — 404 page + redirects + final sitemap + cleanup of any legacy URLs from `nginx.conf` / `.htaccess`. This is the last content-port phase before Phase 14's cleanup + Phase 15's cutover. `main` stays frozen.

---

## Latest: Next.js Migration — Phase 11 Sticker-files section (43 languages + index = 44 pages) — April 17, 2026

Fifteenth commit of the Next.js migration on `v2-nextjs-redesign`. The `/sticker-files` section — 43 language-specific downloadable sticker-file pages + the top-level language picker + sticker-language-request form — is now live as a single dynamic route driven by a typed catalog. `main` is still frozen.

### What Phase 11 delivered

**New infrastructure (`lib/sticker-files/`)**
- **`lib/sticker-files/catalog.ts`** — ~260-line typed catalog. Two maps:
  - `STICKER_KINDS` (~14 entries): per-sticker metadata (dimensions, type, material) keyed by stable sticker slug. Metadata uses shared `common_stickers_*` i18n keys so translators edit one string per design, not per (design × language) pair.
  - `STICKER_AVAILABILITY`: per-language array of available sticker slugs. English has 11 designs; most languages have 5; Swedish has 7 (with 2 `-fixed` reprint variants); Basque/Estonian/Filipino/Hindi/Korean have 4.
  - Helpers: `getStickersForLanguage()`, `getPrintableLanguageSlugs()`, `findLanguage()`, `stickerImageUrl()`, `stickerMuleOneClickUrl()` (English-only 1-click StickerMule pack URL).

**New pages (2 route files, 2,420 static URLs)**
- **`app/[locale]/sticker-files/page.tsx`** (~220 lines) — index page: hero + mission paragraph + 43-language button grid (each links to its per-language page) + "request my language" form (Cloudflare Turnstile → `forms-backend/submit/sticker-language-request`).
- **`app/[locale]/sticker-files/[lang]/page.tsx`** (~250 lines) — dynamic per-language page. `generateStaticParams()` emits every `(locale × lang)` pair = 55 × 43 = **2365 static pages**. Renders one card per available sticker design (image + dimensions / type / material / printer attribution). English shows an extra "PRINT THESE IN 1 CLICK" StickerMule CTA. Unknown lang slugs → 404 via `notFound()`.

**New scripts (`scripts/phase11/`)**
- **`copy-assets.js`** — idempotent Node helper that copies 219 PNGs across 43 language directories from `sticker-files/` to `public/sticker-files/`. Skip-if-up-to-date via mtime + size check.

**Files modified**
- **`lib/i18n/request.ts`** — added 44 new namespaces (`sticker-files/index` + `sticker-files/<lang>/index` × 43). Each language-specific namespace is only 3-4 keys, so total payload growth is negligible; in-memory cache keeps it read-once per locale per build.
- **`lib/pages.ts`** — added 44 Phase 11 entries (all `published: true`). Sitemap emits **2420 new URLs** (index + 43 per-language, all 55 locales each).
- **`public/sticker-files/`** — NEW (43 language directories × 4-11 PNGs each = 219 files total).
- **`MIGRATION-NEXTJS.md`** — Phase 11 checkboxes complete; status pointer advanced to Phase 12.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 4.1s, TypeScript clean, **4624 static pages** total (up from 2204 at end of Phase 10). That's 2420 new URLs for Phase 11.
- Runtime spot-check via `/tmp/verify-phase11.js` — all **8 assertions pass**:
  - `/en/sticker-files` (217 KB) — "BITCOIN STICKER FILES" + AFRIKAANS/YORUBA language buttons + `cf-turnstile` + `sticker-language-request` form.
  - `/en/sticker-files/english` (228 KB) — "DOWNLOAD ENGLISH BITCOIN STICKER FILES" + "PRINT THESE IN 1 CLICK" StickerMule button + all 11 English PNG refs (`sticker-danger-english.png`, `what-if-english.png`, `fix-english.png`, etc.) + stickermule.com link.
  - `/en/sticker-files/chinese` (213 KB) — "DOWNLOAD CHINESE BITCOIN STICKER FILES" + all 5 Chinese PNGs (`bdhi-orange-chinese.png`, `cure-inflation-v2-chinese.png`, `got-inflation-chinese.png`, etc.).
  - `/en/sticker-files/spanish` (213 KB) — Spanish variant (5 PNGs).
  - `/en/sticker-files/swedish` (218 KB) — Swedish variant (7 PNGs) including the 2 `-fixed` reprint variants (`cure-inflation-v2-fixed-swedish.png`, `got-inflation-fixed-swedish.png`).
  - `/ar/sticker-files` renders `<html lang="ar" dir="rtl">` correctly.
  - `/sitemap.xml` (25 MB) contains `/en/sticker-files<`, `/en/sticker-files/english<`, `/en/sticker-files/yoruba<`.
  - `/sticker-files/english/bdhi-orange-english.png` serves 200 (569 KB PNG) — static asset routing from `public/` works.

### Architecture validation
Phase 11's key decision — **filesystem-scanned static catalog** instead of runtime `fs.readdir()` — paid off. The dynamic route `[lang]` is driven by the `STICKER_AVAILABILITY` map (derived from on-disk state and embedded in the catalog.ts file) so the entire per-language page tree is statically prerenderable. Adding a new language requires only: (1) create `i18n/<lang>/sticker-files/<new>/index_<lang>.json` with the 3 keys, (2) drop PNGs into `sticker-files/<new>/`, (3) add the language slug to `STICKER_AVAILABILITY` in `catalog.ts` + `STICKER_LANGUAGES` in `sticker-languages.ts`. No component changes needed.

The 4624-page build (up from 2204 at end of Phase 10) completes in 21.1s of static generation + 4.1s compile — well under the tolerance for future phase growth. Next's build-worker parallelism handled the 2365 `[lang]` pages efficiently.

### Intentionally left alone
- `sticker-files/*/index.html` + `sticker-files/index.html` + `jquery/refresh-css.js` (referenced in legacy sticker-files HTML) — still shipped by the static site on `main`. Phase 14 deletes them.
- V2 redesign of the sticker-files section — deferred to post-cutover queue.
- `forms-backend/` — completely untouched. The sticker-language-request form POSTs to the existing `/submit/sticker-language-request` endpoint with the unchanged Turnstile site-key `0x4AAAAAAClzj7R6NrkNgcsP`.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 11
```
lib/sticker-files/catalog.ts                                    (NEW — ~260 lines typed catalog)
app/[locale]/sticker-files/page.tsx                             (NEW — ~220 lines index page)
app/[locale]/sticker-files/[lang]/page.tsx                      (NEW — ~250 lines dynamic per-language)
scripts/phase11/copy-assets.js                                  (NEW — idempotent PNG copier)
public/sticker-files/**                                         (NEW — 219 PNGs, 43 language dirs)
lib/i18n/request.ts                                             (edited — 44 new namespaces)
lib/pages.ts                                                    (edited — 44 published entries)
MIGRATION-NEXTJS.md                                             (edited — Phase 11 complete, pointer → Phase 12)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 12** — `/nostr` section. 2 pages (`/nostr` index + `/nostr/what-is-nostr`). Simple content-pages port, likely reusing `ContentPageLayout` or a new `.nostr` stylistic wrapper. `main` stays frozen.

---

## Previous: Next.js Migration — Phase 10 Business section (13 pages) — April 17, 2026


Fourteenth commit of the Next.js migration on `v2-nextjs-redesign`. The entire `/business` section — the 13-page Bitcoin Business Kit — is now live as faithful Tailwind ports with V2 redesign deferred. `main` is still frozen.

### What Phase 10 delivered

**New infrastructure (`components/` + `lib/business/`)**
- **`components/BusinessPageShell.tsx`** — Server Component (~40 lines). Shared hero + publisher-attribution wrapper that every `business/*` page uses. Emits the Phase 4 `buildReviewedAccuracyHtml()` badge.
- **`components/BusinessResourceCards.tsx`** — Server Component (~120 lines). Reusable card grid with `exclude` prop + `showHeader` flag. Emits Learn / Guide / Accounting / FAQ / Wallets / Stickers / Maps / Kit CTAs with unique color classes matching the legacy `.biz-learn`/`.biz-guide`/etc. pattern. Used on 10 of the 13 business pages.
- **`components/BusinessWalletCard.tsx`** — Server Component (~80 lines). Renders a single wallet recommendation (image / brand / feature list / Get Wallet button) inside the legacy `wallet-box-biz` shell. Used 9× across `/business/wallets`.
- **`lib/business/metadata.ts`** — Shared `buildBusinessMetadata()` helper. Each page's `generateMetadata()` is an ~8-line wrapper (same pattern as `lib/comparisons/metadata.ts`). Emits title, description, OpenGraph article card, Twitter `summary_large_image`, full 55-locale hreflang alternates.
- **`components/CountryFormSelector.tsx`** — extended from Phase 9b with `placeholderLabel` + typed `options` array so business stickers/kit forms can drive it the same way as the public-facing Phase 9b forms.

**New pages (13)**
All pages follow the pattern: `BusinessPageShell` + JSON-LD (Article + BreadcrumbList) + page-specific body + `BusinessResourceCards` (except success pages).
- **`/business`** — hand-authored. Hero H1 + payment-chart image + 4 benefit sections + `BusinessResourceCards` (exclude "learn") + "Print your own Business Kit" standalone CTA.
- **`/business/why`** — 4 sections: no inflation / no bank runs / permissionless / building a better world. Localized inline links to `/inflation`, `/bank-runs`, voteforbetter.money.
- **`/business/faq`** — 9 Q&A sections with cross-links to `/business/wallets`, `/business/stickers`, `/business/maps`.
- **`/business/guide`** — hero + `BusinessResourceCards` grid (exclude "faq"/"kit") + FAQ CTA at the bottom.
- **`/business/accounting`** — 4 sections: cost basis / calculating price / ledger entries / professional help. External links to QuickBooks/BlockPath, Satoshi Pacioli, CoinGecko.
- **`/business/wallets`** — 4 collapsible `WalletAccordion` categories (sole trader / multiple employees / online / invoicing) × 1-3 `BusinessWalletCard` recommendations each. 6 unique wallets (Square, Breez, OpenNode, IBEX Pay, BTCPay Server, Zaprite) across 9 total card positions.
- **`/business/stickers`** — hero + `CountryFormSelector` (USA / Canada / Print). USA+Canada reveal `StickerAddressForm` (variant="usa"/"canada"). Print reveals English sticker-files link + 43-language request form. Cloudflare Turnstile + `forms-backend/submit/business-stickers-*` action URLs.
- **`/business/maps`** — BTCMap listing form with btcmap.org external link + Turnstile + `forms-backend/submit/business-maps`.
- **`/business/kit`** — hero + business-kit hero image + `CountryFormSelector` (USA / Canada / Print) wrapping `StickerAddressForm` + English pamphlet link.
- **`/business/kit-success`** + **`/business/maps-success`** + **`/business/sticker-success`** + **`/business/sticker-language-success`** — 4 success pages with "SUCCESS!" banner + thank-you message + `robots: { index: false }`.

**New scripts (`scripts/phase10/`)**
- **`create-business-pages.js`** — generator for 12 of the 13 pages (all except the hand-authored `/business/page.tsx`). Each page is 100% regenerable.
- **`append-business-css.js`** — idempotent; appends ~220 lines of legacy `.biz-*` / `.wallet-box-biz` / `.bbk-*` CSS to `app/globals.css`.
- **`wire-and-publish.js`** — idempotent; adds 13 Phase 10 namespaces to `DEFAULT_NAMESPACES` in `lib/i18n/request.ts` and flips `published: true` on 13 slugs in `lib/pages.ts`.
- **`update-memory-bank.js`** — this file's generator (you are reading its output).

**Files modified**
- **`lib/i18n/request.ts`** — added 13 new namespaces to `DEFAULT_NAMESPACES`.
- **`lib/pages.ts`** — flipped `published: true` for 13 slugs; sitemap now emits **715 new URLs** (55 locales × 13 slugs).
- **`app/globals.css`** — appended ~220 lines of legacy business-specific CSS via the append script.
- **`components/CountryFormSelector.tsx`** — extended with `placeholderLabel` + typed `options` array.
- **`public/business/files/`** + **`public/business/sticker-files/`** — copied from `business/files/` + `business/sticker-files/` (bbk-pamphlet-exterior/interior.png + bbk-sticker-english.png + English subdirectories + their `index.html` listings).
- **`MIGRATION-NEXTJS.md`** — Phase 10 checkboxes complete; status pointer advanced to Phase 11.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 4.2s, TypeScript clean, **2204 static pages** generated (55 locales × 40 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Up from 1489 at end of Phase 9b.
- Runtime spot-check via `/tmp/verify-phase10.js`: all **14 assertions pass**:
  - `/en/business` (196 KB) — "BITCOIN IS GOOD FOR BUSINESS" + 4 benefit headings + `biz-box`/`biz-button` + Article + BreadcrumbList JSON-LD + reviewed-badge.
  - `/en/business/why` (199 KB) — "BITCOIN IS GOOD FOR YOU TOO" + all 4 section H3s + schemas.
  - `/en/business/faq` (206 KB) — first 3 Q&A headings + Article schema.
  - `/en/business/guide` (192 KB) — "READY TO ACCEPT BITCOIN" + biz-box cards.
  - `/en/business/accounting` (204 KB) — "BITCOIN ACCOUNTING GUIDE" + "TRACKING YOUR COST BASIS" + Satoshi Pacioli link.
  - `/en/business/wallets` (215 KB) — "GET A FREE BITCOIN WALLET" + all 6 wallet brand names (SQUARE, BREEZ, OPEN NODE, IBEX PAY, BTCPAY SERVER, ZAPRITE).
  - `/en/business/stickers` (204 KB) — "BITCOIN ACCEPTED HERE" + all 3 country IDs + Cloudflare Turnstile.
  - `/en/business/maps` (196 KB) — "GET LISTED ON BITCOIN MERCHANT MAPS" + btcmap.org link + `forms-backend/submit/business-maps` action URL.
  - `/en/business/kit` (201 KB) — "PRINT YOUR OWN BITCOIN BUSINESS KIT" + all 3 country IDs.
  - 4 success pages (193-195 KB each) — "SUCCESS!" + `h2-stickers` + relevant post-submission messages.
  - `/ar/business` renders `<html lang="ar" dir="rtl">` correctly.

### Architecture validation
Phase 10 confirms the "shell + reusable card grid + per-page body" composition scales to 13 pages in a single phase. The `BusinessResourceCards` component was the key abstraction — 10 of the 13 pages end with it, each passing a different `exclude` array so the grid never links to its own page. The page generator script produced 12 pages from typed page-definition objects; the one hand-authored page (`/business`) only needed the unique benefit-section layout. Forms wire straight into `forms-backend/` — no backend changes.

### Intentionally left alone
- `business/*.html` files + `jquery/sticker-picker.js` + `jquery/country-selector-forms.js` — still shipped by the static site on `main`. Phase 14 deletes them.
- V2 redesign of the 13 business pages — deferred to post-cutover queue.
- `forms-backend/` — completely untouched. All business-side forms POST to existing `/submit/business-*` endpoints with the existing Turnstile site-key `0x4AAAAAAClzj7R6NrkNgcsP`.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 10
```
components/BusinessPageShell.tsx                                (NEW — Server, ~40 lines)
components/BusinessResourceCards.tsx                            (NEW — Server, ~120 lines)
components/BusinessWalletCard.tsx                               (NEW — Server, ~80 lines)
lib/business/metadata.ts                                        (NEW — shared metadata helper)
app/[locale]/business/page.tsx                                  (NEW — hand-authored)
app/[locale]/business/why/page.tsx                              (NEW — generated)
app/[locale]/business/faq/page.tsx                              (NEW — generated)
app/[locale]/business/guide/page.tsx                            (NEW — generated)
app/[locale]/business/accounting/page.tsx                       (NEW — generated)
app/[locale]/business/wallets/page.tsx                          (NEW — generated)
app/[locale]/business/stickers/page.tsx                         (NEW — generated)
app/[locale]/business/maps/page.tsx                             (NEW — generated)
app/[locale]/business/kit/page.tsx                              (NEW — generated)
app/[locale]/business/kit-success/page.tsx                      (NEW — generated)
app/[locale]/business/maps-success/page.tsx                     (NEW — generated)
app/[locale]/business/sticker-success/page.tsx                  (NEW — generated)
app/[locale]/business/sticker-language-success/page.tsx         (NEW — generated)
public/business/files/english/                                  (copied — bbk-pamphlet assets)
public/business/sticker-files/english/                          (copied — bbk-sticker assets)
scripts/phase10/create-business-pages.js                        (NEW — 12-page generator)
scripts/phase10/append-business-css.js                          (NEW — idempotent CSS appender)
scripts/phase10/wire-and-publish.js                             (NEW — idempotent wiring)
scripts/phase10/update-memory-bank.js                           (NEW — this file's generator)
components/CountryFormSelector.tsx                              (extended — placeholderLabel + options[])
app/globals.css                                                 (appended ~220 lines of V1 business CSS)
lib/i18n/request.ts                                             (edited — 13 new namespaces)
lib/pages.ts                                                    (edited — 13 published flags)
MIGRATION-NEXTJS.md                                             (edited — Phase 10 complete, pointer → Phase 11)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 11** — `/sticker-files` section. Dynamic route `app/[locale]/sticker-files/[lang]/page.tsx` driven by the 43-language list in `lib/sticker-languages.ts`; each page is a directory listing of downloadable PNGs/PDFs for that language. Move `sticker-files/*/` static assets into `public/sticker-files/`. `main` stays frozen.

---

## Latest: Next.js Migration — Phase 9b Form pages + successes (stickers / signs / postcards / buy + 4 successes) — April 17, 2026

Thirteenth commit of the Next.js migration on `v2-nextjs-redesign`. The 4 form-driven pages + 4 post-submission success pages are now live with faithful V1 Tailwind ports. `main` is still frozen.

### What Phase 9b delivered

**New Client Components (`components/`)**
- **`StickerPicker.tsx`** — ~120 lines. Ports `jquery/sticker-picker.js` 1:1: two pack-tile chooser. Click-to-highlight + reveal the matching country selector. Keyboard-accessible (Enter/Space).
- **`CountryFormSelector.tsx`** — ~70 lines. Reusable `<select>` + N forms. Picking a value reveals the matching `<div id={VALUE} class="countries" hidden>`. Used by both packs in `<StickerPicker>`.
- **`BuyFlow.tsx`** — ~260 lines. Ports `jquery/buy-flow.js`: 4-step wizard. Step 1's 52 country buttons are rendered by the server as `children`; clicks delegated via `closest("button.buy-country-button")` so all buttons stay crawler-visible in the initial HTML. Smooth-scroll between steps with native `window.scrollTo`. Step 3 pulls platforms from `lib/buy/platforms.ts`.

**New Server Components**
- **`StickerAddressForm.tsx`** — ~90 lines. Shared USA/Canada sticker address form. `variant` prop picks State+Zip vs Province+PostalCode; `_gotcha` honeypot on USA only. Cloudflare Turnstile embedded.

**New lib files**
- **`lib/buy/platforms.ts`** — deduped port of the 1366-line `jquery/buy-flow.js` map. 5 reusable platform constants (`STRIKE`, `RELAI`, `KRAKEN`, `SWAN`, `RIVER`, `COINSQUARE`, `ATM`, `BISQ`) composed into 3 sets (`DEFAULT_SET`, `US_SET`, `CA_SET`). Countries point at those sets. Also exports `BUY_COUNTRIES` (52 entries with emoji flag + i18n label key).
- **`lib/sticker-languages.ts`** — canonical 43-language list (slug + `common_language_*` i18n key) for Print-my-own sticker option.

**New pages (8)**
- **`app/[locale]/stickers/page.tsx`** — ~370 lines. Hero + 2-pack chooser via `<StickerPicker>` wrapping 2 `<CountryFormSelector>` instances (USA mail / Canada mail / Print / Bulk). Print option renders the 43-language button grid + sticker-language-request form. Loads Cloudflare Turnstile via `<Script>`.
- **`app/[locale]/signs/page.tsx`** — ~230 lines. Faithful port; signs program closed so it shows the "out of signs" message + share-on-nostr + 3 Get Started CTAs. Sign-header image + sign-tips image preserved.
- **`app/[locale]/postcards/page.tsx`** — ~200 lines. Postcard program closed notice + "GET FREE STICKERS INSTEAD" CTA → `/stickers`. 3 historical preview images (front + back each).
- **`app/[locale]/buy/page.tsx`** — ~130 lines. Server-renders the 52-country button grid + search input, wraps in `<BuyFlow>`. BuyFlow owns Steps 2-4.
- **`app/[locale]/sticker-success/page.tsx`** — ~150 lines. Thank-you screen + fixed-bottom-bar promoting `/flyers`. `robots: { index: false }`.
- **`app/[locale]/sign-success/page.tsx`** — ~100 lines. Thank-you kept for future reactivation of the signs program.
- **`app/[locale]/postcard-success/page.tsx`** — ~100 lines. Thank-you; program closed.
- **`app/[locale]/sticker-language-success/page.tsx`** — ~100 lines. Thank-you after "Request stickers in my language" form.

**New scripts (`scripts/phase9b/`)**
- **`append-form-css.js`** — idempotent; appends ~450 lines of V1 form CSS to `app/globals.css`.
- **`create-remaining-pages.js`** — generator for the 6 template-heavy pages (postcards + buy + 4 successes). 100% regenerable — no hand edits.
- **`flip-published.js`** — regex-based idempotent flipper for the 8 `lib/pages.ts` `published` flags.
- **`update-memory-bank.js`** — this file's generator (you are reading its output).

**Files modified**
- **`lib/i18n/request.ts`** — added 8 new namespaces to `DEFAULT_NAMESPACES`.
- **`lib/pages.ts`** — flipped `published: true` for 8 slugs; sitemap now emits **440 new URLs** (55 locales × 8 slugs).
- **`app/globals.css`** — appended ~450 lines of V1 form CSS via `append-form-css.js`.
- **`MIGRATION-NEXTJS.md`** — Phase 9b checkboxes complete; position pointer → Phase 10.

### Build + verification
- `npm run build` → ✓ compiled, TypeScript clean, **1489 static pages** (55 locales × 27 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Up from 1049 at end of Phase 9a.
- Runtime spot-check via `/tmp/verify-phase9b.js` — all 9 assertions pass: `/en/stickers` (233 KB) contains `choose-sticker` tiles + AFRIKAANS/YORUBA language buttons + Article/BreadcrumbList JSON-LD; `/en/signs` (182 KB) contains the out-of-signs message; `/en/postcards` (184 KB) contains the program-closed notice; `/en/buy` (199 KB) contains all 4 wizard steps + 52 country buttons with `data-country` (US/GB/JP spot-checked) + `#country-search` input; all 4 success pages contain SUCCESS! + `h2-stickers`; `/ar/stickers` renders `<html lang="ar" dir="rtl">`.

### Architecture validation
Phase 9b confirms the "all content in server HTML, click handlers via delegation" pattern scales well: the 52 buy-country buttons are rendered once by the server (crawler-visible) and `<BuyFlow>` attaches one `click` listener at the root to delegate to all 52. No `data-*` props shuttling from parent state to button props. Same pattern worked for `<StickerPicker>` (opacity/border mutations via `useRef`) and `<CountryFormSelector>` (`hidden` attribute toggle). The `lib/buy/platforms.ts` dedup also paid off: legacy 1366 lines of country objects collapsed to ~240 lines of 3 shared sets + per-country pointers.

### Intentionally left alone
- `jquery/sticker-picker.js`, `jquery/country-selector-forms.js`, `jquery/buy-flow.js` — still shipped by static site on `main`. Phase 14 deletes them.
- V2 redesign of these 8 pages — deferred to post-cutover queue (see `MIGRATION-NEXTJS.md` "Post-migration Bucket B redesign queue").
- `forms-backend/` — completely untouched. The Next frontend POSTs to existing `/submit/…` endpoints exactly as the static site does. Turnstile site-key unchanged.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 9b
```
components/StickerPicker.tsx                                    (NEW — Client, ~120 lines)
components/CountryFormSelector.tsx                              (NEW — Client, ~70 lines)
components/BuyFlow.tsx                                          (NEW — Client, ~260 lines)
components/StickerAddressForm.tsx                               (NEW — Server, ~90 lines)
lib/buy/platforms.ts                                            (NEW — ~240 lines)
lib/sticker-languages.ts                                        (NEW — 43 languages)
app/[locale]/stickers/page.tsx                                  (NEW — ~370 lines)
app/[locale]/signs/page.tsx                                     (NEW — ~230 lines)
app/[locale]/postcards/page.tsx                                 (NEW — ~200 lines, generated)
app/[locale]/buy/page.tsx                                       (NEW — ~130 lines, generated)
app/[locale]/sticker-success/page.tsx                           (NEW — ~150 lines, generated)
app/[locale]/sign-success/page.tsx                              (NEW — ~100 lines, generated)
app/[locale]/postcard-success/page.tsx                          (NEW — ~100 lines, generated)
app/[locale]/sticker-language-success/page.tsx                  (NEW — ~100 lines, generated)
scripts/phase9b/append-form-css.js                              (NEW — idempotent CSS appender)
scripts/phase9b/create-remaining-pages.js                       (NEW — 6-page generator)
scripts/phase9b/flip-published.js                               (NEW — idempotent flag-flipper)
scripts/phase9b/update-memory-bank.js                           (NEW — this file's generator)
app/globals.css                                                 (appended ~450 lines of V1 form CSS)
lib/i18n/request.ts                                             (edited — 8 new namespaces)
lib/pages.ts                                                    (edited — 8 published flags)
MIGRATION-NEXTJS.md                                             (edited — Phase 9b complete, pointer → Phase 10)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
```

### Next
**Phase 10** — Bucket C business section: `/business`, `/business/accounting`, `/business/faq`, `/business/guide`, `/business/kit` (+ kit-success), `/business/maps` (+ maps-success), `/business/stickers` (+ sticker-success + sticker-language-success), `/business/wallets`, `/business/why`. Plus moving `business/files/` + `business/sticker-files/` static assets into `public/`. V2 redesign deferred — faithful port only. `main` stays frozen.

---

## Previous: Next.js Migration — Phase 9a Bucket B Tailwind ports (wallets + lightning + flyers + compound-inflation-calculator) — April 17, 2026

Twelfth commit of the Next.js migration on `v2-nextjs-redesign`. The four Bucket B educational pages are now live with a faithful V1 design port (deferred to post-cutover for V2 redesign). Two new small Client Components (`WalletAccordion`, `PrintFlyerButton`) replace the inline JS that made the legacy pages interactive. `main` is still frozen.

### What Phase 9a delivered

**New Client Components (`components/`)**
- **`WalletAccordion.tsx`** — ~55 lines. Ports the `toggleAccordion()` inline JS from `wallets.html` + `lightning.html`. Orange-pill header with ▼ arrow rotates 180° when open; body content cross-fades via `max-height` transition. Keyboard-accessible (Enter/Space). `question` + `children` props only — no translation lookups client-side, parent server component passes pre-translated strings.
- **`PrintFlyerButton.tsx`** — ~55 lines. Ports `printFlyer()` from `flyers.html`. Creates a hidden iframe pointing at the flyer PDF, calls `contentWindow.print()` on load, fails silently on cross-origin block. Keyboard-accessible.

**New pages (4)**
- **`app/[locale]/wallets/page.tsx`** — V1 `wallets.html` (997 lines → ~450-line page.tsx). Three `<WalletAccordion>`s (self-custody, hot/cold, recovery phrase) + 6 wallet cards in 3 rows of 2. Inline `<WalletCard>` helper component factors out per-card boilerplate (image, custodial/temperature alert chips, feature-line list, learn-more button).
- **`app/[locale]/lightning/page.tsx`** — V1 `lightning.html` (457 lines → ~300-line page.tsx). Single `<WalletAccordion>` + 3 Lightning wallet cards (Phoenix, Breez non-custodial on row 1; Wallet of Satoshi custodial solo on row 2). Inline `<LightningCard>` helper (slightly different shape than wallet cards — no hot/cold alert).
- **`app/[locale]/flyers/page.tsx`** — V1 `flyers.html` (360 lines → ~250-line page.tsx). Print + download flyer buttons via `<PrintFlyerButton>` + `<a download>`. Share-on-Nostr section with two bounty-style buttons. Full-size hero image with `marginTop: -200px` legacy offset preserved.
- **`app/[locale]/compound-inflation-calculator/page.tsx`** — V1 `compound-inflation-calculator.html` (302 lines → ~170-line page.tsx). V1 intro text + the Phase 6b `<CompoundInflationCalculatorSolo>` Client Component + the "What can I do about inflation?" CTA pointing at `/inflation?link=calculator`.

**Files modified**
- **`lib/i18n/request.ts`** — added 4 new namespaces to `DEFAULT_NAMESPACES`. Namespaces cost ~0 per locale per build (read-once in-memory cache).
- **`lib/pages.ts`** — flipped `published: true` for all 4 slugs; sitemap now emits **220 new URLs** (55 locales × 4 slugs).
- **`app/globals.css`** — appended ~545 lines of V1 legacy CSS via `scripts/phase9a/append-bucket-b-css.js` (idempotent, sentinel-marker guarded). Ported verbatim from `css/style.css`: `.text-box` card variants (top/middle/bottom/solo/intro), `.wallet-q` / `.wallet-accordion-content`, `.alert` chips, `.wallet-box` / `.wallet-button`, `.bounty-button`, `.compound-form` / `.cic-button`, `.break-*` utilities, `.h2-section` / `.h3-item` / `.h2-label` V1 headings, `.orange-link`, `.looking-box`, and all the other class names the V1 HTML depends on. Tabs preserved.
- **`MIGRATION-NEXTJS.md`** — Phase 9a checkboxes complete; status pointer advanced to Phase 9b.

**New utilities**
- **`scripts/phase9a/append-bucket-b-css.js`** — idempotent CSS appender, same pattern as `scripts/append-comparison-css.js` from Phase 7a.
- **`scripts/phase9a/fix-schema-await.js`** — idempotent regex-based patcher that caught a forgotten `await` on `buildArticleSchema()`. Initial runtime verify showed `<script type="application/ld+json">` emitting `{}` (the Promise serialized as an empty object) instead of the full Article schema. The script promotes the schema construction out of the JSX and awaits it into a local. Re-running the script is a no-op on already-patched files.

### Build + verification
- `npm run build` → ✓ compiled, TypeScript clean, **1049 static pages** (55 locales × 19 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via `/tmp/verify-phase9a.js`: all 6 assertions pass. `/en/wallets` (192 KB) contains `wallet-q` accordion headers, `wallet-box` grid, all 6 wallet brand names in H2s, Article + BreadcrumbList JSON-LD, `wallet-accordion-content` bodies, `alert` chips, publisher attribution. `/en/lightning` (177 KB) contains the single accordion + PHOENIX/BREEZ/WALLET OF SATOSHI cards + schemas. `/en/flyers` (168 KB) contains PRINT & POST header + BITCOIN FLYERS subtitle + DOWNLOAD FLYER/PRINT FLYER/SHARE ON NOSTR buttons + `bounty-button` class + schemas. `/en/compound-inflation-calculator` (166 KB) contains the compound form, all three inputs, `cic-button`, and the "Opt Out of Inflation with Bitcoin" CTA. `/ar/wallets` renders `<html lang="ar" dir="rtl">` correctly. `/sitemap.xml` contains all 4 new English URLs.

### Architecture validation
Phase 9a confirms the faithful-port approach scales: 4 Bucket B pages in one phase with two new small Client Components and one CSS append step. The V1 CSS was decoupled from the new Next tree via an idempotent Node script, so re-running the build still works; and the schema-await bug was caught by runtime verify before commit. The `<WalletAccordion>` component demonstrates the ideal client-component contract: zero translation lookups in the client bundle, parent passes pre-translated `question` + already-rendered `children`, and only the open/closed state is hydrated.

### Intentionally left alone
- `wallets.html`, `lightning.html`, `flyers.html`, `compound-inflation-calculator.html` at repo root — still shipped by the static site on `main`. Phase 14 deletes them.
- V2 redesign of these 4 pages — deferred to post-cutover queue (see `MIGRATION-NEXTJS.md` "Post-migration Bucket B redesign queue" section).
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 9a
```
components/WalletAccordion.tsx                                 (NEW — Client, ~55 lines)
components/PrintFlyerButton.tsx                                (NEW — Client, ~55 lines)
app/[locale]/wallets/page.tsx                                  (NEW — ~450 lines)
app/[locale]/lightning/page.tsx                                (NEW — ~300 lines)
app/[locale]/flyers/page.tsx                                   (NEW — ~250 lines)
app/[locale]/compound-inflation-calculator/page.tsx            (NEW — ~170 lines)
scripts/phase9a/append-bucket-b-css.js                         (NEW — idempotent CSS appender)
scripts/phase9a/fix-schema-await.js                            (NEW — idempotent await-patcher)
scripts/phase9a/update-memory-bank.js                          (NEW — this file's generator)
app/globals.css                                                (appended ~545 lines of V1 CSS)
lib/i18n/request.ts                                            (edited — 4 new namespaces)
lib/pages.ts                                                   (edited — 4 published flags)
MIGRATION-NEXTJS.md                                            (edited — Phase 9a complete)
memory-bank/activeContext.md                                   (edited — this file)
memory-bank/progress.md                                        (edited — progress note)
```

### Next
**Phase 9b** — form pages + successes: `stickers`, `signs`, `postcards`, `buy`, plus the 4 `*-success` pages. Requires porting `jquery/sticker-picker.js` (`<StickerPicker>`), `jquery/country-selector-forms.js` (`<CountrySelectorForm>`), and `jquery/buy-flow.js` (`<BuyFlow>` multi-step wizard). Forms POST to existing `forms-backend/` endpoints — no backend changes. `main` stays frozen.

---

## Previous: Next.js Migration — Phase 8 Content pages (about + get-involved) — April 17, 2026

Eleventh commit of the Next.js migration on `v2-nextjs-redesign`. Two more V2 content pages are live, reusing the Phase 7c `ContentPageLayout` + `ContentPageData` pattern with zero new infrastructure. Phases 5–8 are now complete; `main` is still frozen.

### What Phase 8 delivered

**New data files (`lib/comparisons/`)**
- **`about.ts`** — ports `about.html` into the `ContentPageData` shape. 5 sections (Mission / What We Do / Editorial / Open Source / Contact Us). Preserves every legacy inline-link fragment verbatim: links to `/stickers`, `/flyers`, `/business/kit`, GitHub repo, `CONTRIBUTING.md`. Promoted the V1 hardcoded contact strings (`hi@bitcoin.rocks`, `github.com/sovenor/bitcoin-rocks`) to new i18n keys so translators can tweak the visible labels per locale without TS changes. Added `about_page_description` meta key.
- **`get-involved.ts`** — ports `get-involved.html`. 4 sections (Intro + 3 CTAs: sticker pack / postcard pack / business kit). V2 redesign drops the legacy `<img>` thumbnails + `.get-involved-button` divs. Each CTA section ends with an inline `.body-link` paragraph that localizes to `/stickers`, `/postcards`, `/business/kit`. The "What's next?" card grid (from `ContentPageLayout`) completes the onward-journey funnel (wallets / buy / calculator).

**New pages (2)**
- **`app/[locale]/about/page.tsx`** + **`app/[locale]/get-involved/page.tsx`** — thin ~60-line pages (same pattern as `/bank-runs`). Each imports its `ContentPageData` and passes it to `<ContentPageLayout>`. `generateMetadata()` is inline (since `ContentPageData` has a different shape than `ComparisonPageData` and we already have one inline precedent for `/bank-runs`) — full 55-locale hreflang alternates + OpenGraph + Twitter card.

**Files modified**
- **`i18n/en/about_en.json`** — added 4 new keys (`about_page_description`, `about_contact_email_addr`, `about_contact_nostr_handle`, `about_contact_github_url`); refreshed `@metadata.last-updated` to 2026-04-17.
- **`i18n/en/get-involved_en.json`** — refreshed `@metadata.last-updated` only (no new keys needed — the existing fragment-based prose covers everything).
- **`lib/i18n/request.ts`** — added `about` + `get-involved` to `DEFAULT_NAMESPACES`.
- **`lib/pages.ts`** — flipped `published: true` for both slugs; sitemap now emits **110 new URLs** (55 locales × 2 slugs).
- **`MIGRATION-NEXTJS.md`** — Phase 8 checkboxes complete; status pointer advanced to Phase 9a.

**New utility**
- **`scripts/phase8/update-en-json.js`** — idempotent Node helper to add new keys + refresh metadata dates. Mirrors the `scripts/phase7*/` pattern: a small script per phase when English JSON files need changes. Translator workflow unchanged — they'll see 4 new untranslated strings next time they update `about_*.json` for their language.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 2.9s, TypeScript clean, **829 static pages** (55 locales × 15 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via `/tmp/verify-phase8.js`: all 7 assertions pass. `/en/about` (168 KB) contains all 5 section headings + `hi@bitcoin.rocks` + `reviewed-badge` + Article + BreadcrumbList JSON-LD. `/en/get-involved` (164 KB) contains 3 CTA section headings + correctly localized `/en/stickers` / `/en/postcards` / `/en/business/kit` links + Article + BreadcrumbList JSON-LD. `/ar/about` renders `<html lang="ar" dir="rtl">`. Sitemap contains both new English URLs.

### Architecture validation
Phase 8 confirms the Phase 7c `ContentPageLayout` abstraction is correct: both content pages reused `ContentPageData` verbatim with zero layout-component changes. The only additions were two small data files + two 60-line page.tsx wrappers. V2 redesign (drop legacy images + inline button CTAs) landed naturally as `body-link` paragraphs without needing any CSS additions.

### Intentionally left alone
- `about.html` + `get-involved.html` at repo root — still shipped by the static site on `main`. Phase 14 deletes them.
- Non-English translations for the 4 new `about_*` keys — translators pick these up during normal language maintenance; English fallback is graceful.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 8
```
lib/comparisons/about.ts                             (NEW — ~170 lines)
lib/comparisons/get-involved.ts                      (NEW — ~140 lines)
app/[locale]/about/page.tsx                          (NEW — ~60 lines)
app/[locale]/get-involved/page.tsx                   (NEW — ~60 lines)
scripts/phase8/update-en-json.js                     (NEW — ~60 lines)
i18n/en/about_en.json                                (edited — +4 keys, date)
i18n/en/get-involved_en.json                         (edited — date only)
lib/i18n/request.ts                                  (edited — +2 namespaces)
lib/pages.ts                                         (edited — 2 slugs → published)
MIGRATION-NEXTJS.md                                  (edited — Phase 8 complete)
memory-bank/activeContext.md                         (edited — this file)
memory-bank/progress.md                              (edited — progress note)
```

### Next
**Phase 9a** — faithful Tailwind port of 4 Bucket B educational pages: `wallets` (largest V1 page at 997 lines), `lightning`, `flyers`, and the solo `compound-inflation-calculator` page (which reuses the Phase 6b `<CompoundInflationCalculatorSolo>` component). These are Bucket B pages so V2 redesign is deferred to the post-cutover queue; the port just maps V1 HTML → Tailwind classes. `main` stays frozen.

---

## Previous: Next.js Migration — Phase 7b Four more comparison pages (banks / bonds / real-estate / crypto) — April 17, 2026

Ninth commit of the Next.js migration on `v2-nextjs-redesign`. Four more `bitcoin-vs-*` pages are live using the Phase 7a data-driven pipeline — pure additions, no infrastructure changes. Each page is a single data file + a ~30-line page.tsx, confirming the Phase 7a architecture choice was correct. `main` is still frozen.

### What Phase 7b delivered

**New data files (`lib/comparisons/`)**
- **`bitcoin-vs-banks.ts`** — 7 comparison points, asset accent red `#C02C3E` (echoes the legacy `.freedom` warning-red). Inline `<a>` to `voteforbetter.money/learn/bitcoin-is-permissionless` on point 1, localized `/wallets` link on point 4. Sources: Bitcoin whitepaper + source repo + FDIC failed-bank list.
- **`bitcoin-vs-bonds.ts`** — 7 points, asset accent treasury-green `#4A8C5E`. External links to MarketWatch 2022 weak-auction article + TreasuryDirect; localized links to `/inflation`, `/bank-runs`, `/wallets`. Sources: TreasuryDirect auctions + MarketWatch + Bitcoin whitepaper + source repo.
- **`bitcoin-vs-real-estate.ts`** — **9 points** (the one comparison with a 9th "housing financialization" point), asset accent earth-tone brown `#C99E6E`. All-plain-text summaries. Sources: Bitcoin whitepaper + source repo + UN housing financialization report.
- **`bitcoin-vs-crypto.ts`** — 8 points, asset accent "crypto purple" `#B072E8` (deliberately distinct from Bitcoin orange for instant visual contrast). Point 5's translation embeds an inline `<a>` to the whitepaper inside the translation string itself — not split into a separate fragment — preserved via `dangerouslySetInnerHTML` in `ComparisonPageLayout` (consistent with Phase 7a cash precedent). Sources: Bitcoin whitepaper + source repo + Bitnodes.

**New pages (4)**
- **`app/[locale]/bitcoin-vs-banks/page.tsx`**, **`bitcoin-vs-bonds/page.tsx`**, **`bitcoin-vs-real-estate/page.tsx`**, **`bitcoin-vs-crypto/page.tsx`** — four ~30-line pages, each a 2-function wrapper over `<ComparisonPageLayout>`. Identical shape to the Phase 7a pages.

**Files modified**
- **`lib/i18n/request.ts`** — Added the 4 new namespaces to `DEFAULT_NAMESPACES`. Namespace cache overhead stays at ~0 per-page since it's read-once per locale per build.
- **`lib/pages.ts`** — Flipped `published: true` for the 4 slugs; sitemap now emits **220 new URLs** (55 locales × 4 slugs).
- **`MIGRATION-NEXTJS.md`** — Phase 7b checkboxes complete; status pointer advanced to Phase 7c.

### Build + verification
- `npm run build` → ✓ compiled, TypeScript clean, **499 static pages** (55 locales × 9 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via `/tmp/verify-phase7b.js`: all 4 English pages serve 200 (165-176 KB each) with Article + BreadcrumbList + ItemList JSON-LD blocks, `comparison-h1` / `comparison-chip` / `whats-next-card` / `sources-list` / `reviewed-badge` classes present. `/ar/bitcoin-vs-banks` renders `<html lang="ar" dir="rtl">`. Sitemap contains all 4 English URLs.

### Architecture validation
The Phase 7a decision to split data (TypeScript) from rendering (Server Component) is paying off exactly as predicted — Phase 7b was a 15-minute port per page. No changes needed to `types.ts`, `metadata.ts`, `ComparisonPageLayout.tsx`, or the CSS. The only variability needed was:
- A typed `ComparisonPageData` literal per page
- Choice of asset accent color (one hex value)
- 2-3 inline link fragments with `localize`/`external` flags where the legacy prose had them

Phase 7c should be identical for the final 3 comparison pages (`bitcoin-vs-visa`, `bitcoin-vs-cbdc`, `bitcoin-vs-fine-art`); only `bank-runs` may need a small layout tweak since it's a non-comparison story-shaped page that reuses similar building blocks.

### Intentionally left alone
- `bitcoin-vs-{banks,bonds,real-estate,crypto}.html` at repo root — still shipped by the static site on `main`. Phase 14 deletes them.
- The remaining 3 comparison pages + `bank-runs` — Phase 7c.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 7b
```
lib/comparisons/bitcoin-vs-banks.ts                 (NEW — ~100 lines)
lib/comparisons/bitcoin-vs-bonds.ts                 (NEW — ~135 lines)
lib/comparisons/bitcoin-vs-real-estate.ts           (NEW — ~85 lines)
lib/comparisons/bitcoin-vs-crypto.ts                (NEW — ~90 lines)
app/[locale]/bitcoin-vs-banks/page.tsx              (NEW — ~30 lines)
app/[locale]/bitcoin-vs-bonds/page.tsx              (NEW — ~30 lines)
app/[locale]/bitcoin-vs-real-estate/page.tsx        (NEW — ~30 lines)
app/[locale]/bitcoin-vs-crypto/page.tsx             (NEW — ~30 lines)
lib/i18n/request.ts                                 (edited — added 4 namespaces)
lib/pages.ts                                        (edited — 4 published flags)
MIGRATION-NEXTJS.md                                 (edited — Phase 7b marked complete)
memory-bank/activeContext.md                        (this file)
memory-bank/progress.md                             (edited)
```

---

## Previously: Next.js Migration — Phase 7a Comparison layout + first 3 comparison pages — April 17, 2026

Eighth commit of the Next.js migration on `v2-nextjs-redesign`. The first 3 `bitcoin-vs-*` pages (gold, stocks, cash) are now typed React pages built on a shared `<ComparisonPageLayout>` Server Component, with the V2 design system applied during port. `main` is still frozen.

### What Phase 7a delivered

**New infrastructure (`lib/comparisons/`)**
- **`lib/comparisons/types.ts`** — Typed `ComparisonPageData` bundle: slug, namespace, meta image, H1 key quartet (part1/bitcoin/and/asset), asset accent color, intro keys array, bitcoin/asset label keys, ordered `ComparisonPointData[]`, `ComparisonSource[]`. `SummaryFragment` supports inline `<a>` rendering with a `localize` flag (auto-prefix with current locale) + `external` flag (adds `target="_blank" rel="noopener noreferrer"`). Data references translation strings **by key only** — the existing jquery.i18n JSON files stay the source of truth, so translator workflow is unchanged.
- **`lib/comparisons/bitcoin-vs-gold.ts`** — Data bundle for gold: 7 comparison points, 4 sources (World Gold Council, Bitnodes, Bitcoin whitepaper, bitcoin source repo), asset accent `#EBC61F`. Every legacy `<a class="orange-link">` preserved with proper `localize`/`external` flags.
- **`lib/comparisons/bitcoin-vs-stocks.ts`** — Data bundle for stocks: 7 comparison points, 3 sources (Bitcoin whitepaper, source repo, SEC stock dilution release), asset accent `#1DFF4D`.
- **`lib/comparisons/bitcoin-vs-cash.ts`** — Data bundle for cash: 7 comparison points, 3 sources (RBI 2016 demonetization notice, Bitcoin whitepaper, source repo), asset accent `#85BB65`.
- **`lib/comparisons/metadata.ts`** — Shared `buildComparisonMetadata(data, locale)` returning `Metadata`: title, description, OpenGraph article card, Twitter `summary_large_image`, + all 55-locale hreflang alternates. Each page.tsx's `generateMetadata()` is a 2-line wrapper.

**New component**
- **`components/ComparisonPageLayout.tsx`** — Server Component (~300 lines). Renders the full V2 comparison page: hero H1 (orange BITCOIN + asset-accent-colored asset word), intro paragraphs, N comparison points (each: two side-by-side chips + multi-paragraph explanation), "What's next?" card grid (4 cards), Sources `<ol>`, publisher attribution + reviewed-badge. Emits Article + BreadcrumbList + ItemList JSON-LD inline via `<JsonLd>`. Two sub-components: `ComparisonPointSection` (chips + explanation) and `SummaryFragmentSpan` (inline `<a class="body-link">` rendering with locale prefixing + external link handling). Uses `dangerouslySetInnerHTML` on fragment text to preserve any inline `<a>` markup legacy translators embedded in prose strings (trusted repo-shipped content — safe).

**New pages (3)**
- **`app/[locale]/bitcoin-vs-gold/page.tsx`**, **`bitcoin-vs-stocks/page.tsx`**, **`bitcoin-vs-cash/page.tsx`** — Each is a 2-function ~30-line page: `generateMetadata()` delegates to `buildComparisonMetadata`, default export passes the data bundle to `<ComparisonPageLayout>`. Zero duplication.

**Files modified**
- **`lib/i18n/request.ts`** — Added `bitcoin-vs-gold` / `bitcoin-vs-stocks` / `bitcoin-vs-cash` to `DEFAULT_NAMESPACES`. In-memory namespace cache means adding unused namespaces costs ~0 (read-once per locale per build).
- **`lib/pages.ts`** — Flipped `published: true` for the 3 slugs so they enter the sitemap.
- **`app/globals.css`** — Appended ~120 lines of V2 comparison CSS via `scripts/append-comparison-css.js` (idempotent Node helper that detects a sentinel marker and no-ops on a second run). Hero spacing, `.comparison-chips` grid (2-col desktop, 1-col mobile), `.comparison-chip` dark-bg-with-border tokens, `.comparison-explain` prose, `.body-link` orange-underlined anchors, `--asset-accent` CSS variable (set per-page on the `.container-main` wrapper) drives H1 asset-word color + asset-chip label without any per-page CSS overrides.

### Build + verification
- `npm run build` → ✓ compiled 2.2s, TypeScript clean, **279 static pages** (55 locales × 5 routes [homepage + inflation + 3 comparisons] + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via `/tmp/verify-phase7a.js` (Node `http.get` — avoids shell-escape issues on long commands): all 4 sampled URLs serve 200 with every expected DOM marker:
  - `/en/bitcoin-vs-gold` (168 KB), `/en/bitcoin-vs-stocks` (166 KB), `/en/bitcoin-vs-cash` (163 KB), `/ar/bitcoin-vs-gold` (164 KB)
  - `"ItemList"` + `"Article"` + `"BreadcrumbList"` JSON-LD ✓
  - `comparison-h1`, `comparison-chip`, `whats-next-card`, `sources-list`, `reviewed-badge`, `body-link` classes ✓
- RTL: `/ar/bitcoin-vs-gold` → `<html lang="ar" dir="rtl">` ✓
- `/sitemap.xml` contains `/en/bitcoin-vs-gold`, `/en/bitcoin-vs-stocks`, `/en/bitcoin-vs-cash` (×55 locales) ✓

### Decisions locked in
- **Data-driven comparison pages.** The port was tempting to do as 3 independent page.tsx trees, but they share >95% of structure. Splitting data (`lib/comparisons/*.ts`) from rendering (`components/ComparisonPageLayout.tsx`) means Phase 7b/7c become trivial: one data file + one 30-line page.tsx each, no layout work.
- **Translation keys stay in JSON, not in TS data files.** Data files reference strings by key; translators keep editing the same jquery.i18n JSON files they always have. The `ComparisonPageLayout` calls `getTranslations()` and resolves each key at render time. Zero translator workflow disruption.
- **`--asset-accent` CSS variable at the page level** instead of per-comparison stylesheet overrides. Each page sets the variable once on its `.container-main`; the `.comparison-h1 .asset` and `.comparison-chip-asset .comparison-chip-label` rules in globals.css both read from it. Adding the remaining 8 comparison pages only requires setting a different hex in the data file — no new CSS.
- **`dangerouslySetInnerHTML` on fragment text.** Some legacy translation strings (e.g. `point_3_summary_1` in cash) already contain inline `<a>` markup that translators copied in. Rendering as HTML preserves those exactly. All strings come from the trusted repo-shipped JSON files, so no XSS surface. Links rendered by the fragment's own `href`/`localize` config are separate and type-safe.
- **Body-link hover stays orange** (`#ff9500` → `#ffb84d`) — not the asset accent. The asset-accent color only surfaces on the H1 asset word + the asset chip's label. Keeping inline links always-orange preserves the visual hierarchy (the asset accent is identity; the link affordance is site-wide Bitcoin orange).
- **Reused `components/WhatsNextCard`** from Phase 5 for the "What's next?" grid. The inflation page, homepage, and now every comparison page all render the same card component — component reuse is already paying off.

### Intentionally left alone
- `bitcoin-vs-{gold,stocks,cash}.html` at repo root — still shipped by the static site on `main`. Phase 14 deletes them.
- Other 7 comparison pages + bank-runs — Phase 7b/7c will port them using the same `ComparisonPageLayout` + per-page data file pattern.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 7a
```
lib/comparisons/types.ts                            (NEW — ~115 lines of types)
lib/comparisons/bitcoin-vs-gold.ts                  (NEW — data bundle)
lib/comparisons/bitcoin-vs-stocks.ts                (NEW — data bundle)
lib/comparisons/bitcoin-vs-cash.ts                  (NEW — data bundle)
lib/comparisons/metadata.ts                         (NEW — shared metadata helper)
components/ComparisonPageLayout.tsx                 (NEW — Server, ~300 lines)
app/[locale]/bitcoin-vs-gold/page.tsx               (NEW — ~30 lines)
app/[locale]/bitcoin-vs-stocks/page.tsx             (NEW — ~30 lines)
app/[locale]/bitcoin-vs-cash/page.tsx               (NEW — ~30 lines)
scripts/append-comparison-css.js                    (NEW — idempotent CSS appender)
lib/i18n/request.ts                                 (add 3 comparison namespaces)
lib/pages.ts                                        (flip 3 comparisons to published: true)
app/globals.css                                     (+~120 lines of Phase 7a CSS)
MIGRATION-NEXTJS.md                                 (Phase 7a marked complete; position pointer → Phase 7b)
```

### Next up: Phase 7b — 4 more comparison pages
Port `bitcoin-vs-banks`, `bitcoin-vs-bonds`, `bitcoin-vs-real-estate`, `bitcoin-vs-crypto` using the same pattern: one data file in `lib/comparisons/` + one thin page.tsx. No layout changes needed — the only CSS decision is the `assetAccentColor` hex per page. See `MIGRATION-NEXTJS.md` Phase 7b for the full checklist.

---

## Previous: Next.js Migration — Phase 6b Inflation stats + calculators + dynamic header — April 17, 2026

Seventh commit of the Next.js migration on `v2-nextjs-redesign`. The four remaining jQuery scripts that made the inflation page interactive (`inflation-stats.js`, `compound-inflation-calculator.js`, `compound-inflation-calculator-solo.js`, `dynamic-header.js`) are now TypeScript Client Components. `/en/inflation` renders with live stat-card population + URL-param-driven H1 swap, all hydration contained to the 3 small Client Components that actually need browser APIs. `main` is still frozen.

### What Phase 6b delivered

**New components (`components/`)**
- **`components/InflationStats.tsx`** — Client Component, ~220 lines. Ports `jquery/inflation-stats.js` 1:1. Pure side-effect component (`return null`) that mounts once, eagerly fetches USD, and subscribes to the custom `inflation:currency-changed` DOM event. When fired, it fetches `https://forms.bitcoin.rocks/api/inflation-stats?currency=XXX` and writes the response fields into the `stat-*-${CODE}` DOM elements via `document.getElementById(...).textContent = value`. Per-currency in-memory cache keyed by currency code (`cacheRef`) means repeated clicks on the same button don't refetch. Fallback-on-error leaves the server-rendered placeholder values (`+50%`, `—`) intact. Exports `CURRENCY_CHANGED_EVENT` + `CurrencyChangedEventDetail` type for the selector to import.
- **`components/CompoundInflationCalculator.tsx`** — Client Component, ~190 lines. Ports `jquery/compound-inflation-calculator.js`. 3 controlled inputs (salary / rate % / years), formula `newSalary = salary × (1 + rate/100)^years`, output formatted via `Intl.NumberFormat(locale, { style: "currency", currency })`. `idSuffix` prop is appended to every input/result DOM id so multiple calculators can coexist on one page (matches legacy `currentSalaryCAD` / `inflationRateCAD` / `resultCAD` scheme). Result rendered via `dangerouslySetInnerHTML` with `escapeHtml()` on all interpolated strings + literal `&nbsp;` spacers — preserves legacy prose-assembly 1:1 while staying XSS-safe. `useLocale()` for locale-correct number formatting.
- **`components/CompoundInflationCalculatorSolo.tsx`** — 20-line wrapper around `<CompoundInflationCalculator currency="USD" idSuffix="" />` for the `/compound-inflation-calculator` page (Phase 9a uses this).
- **`components/DynamicHeader.tsx`** — Client Component, pure side-effect. Ports `jquery/dynamic-header.js` decision table: `sign=got-inflation` > `link=calculator|calculator-site` (override) > `sticker=cure|cure-v2|got-inflation|what-if|other` > no param (leave default H1 untouched). Reads `window.location.search` via `URLSearchParams` on mount, resolves the translated line pair, and writes `document.getElementById("changing-header").textContent = …`. When no relevant URL params are present it leaves the server-rendered default intact — the V2 page's preferred behavior.

**Files modified**
- **`components/CountrySelector.tsx`** — imports `CURRENCY_CHANGED_EVENT` + `CurrencyChangedEventDetail` from `InflationStats` and dispatches `document.dispatchEvent(new CustomEvent(CURRENCY_CHANGED_EVENT, { detail: { currency: selected } }))` from the existing `useEffect` after every selection change (including reset → `null`). Clean single-direction dependency: selector doesn't know about the stats fetcher, fetcher doesn't know about the selector, they only share the event-name constant + detail shape.
- **`app/[locale]/inflation/page.tsx`** — mounts `<InflationStats />` + `<DynamicHeader />` at the top of the return tree (they're side-effect-only, render no DOM). Hero H1 `<span>` now has `id="changing-header"` so `<DynamicHeader>` can target it. Phase 6a's placeholder stat values still ship in server-rendered HTML; `<InflationStats>` "upgrades" them at runtime.

### Build + verification
- `npm run build` → ✓ compiled 2.2s, TypeScript clean, **114 static pages** (55 locales × 2 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Turbopack "overly broad patterns" hint on `fs.readFile` is pre-existing from Phase 2.
- Runtime spot-check via `scripts/phase-6b-spotcheck.js` (Node-based, since long shell one-liners get stuck in the terminal): `/en/inflation` → 200 (509 KB), all 11 expected DOM markers present:
  - `id="changing-header"` ✓ (DynamicHeader target)
  - `id="USD"` / `id="CAD"` / `id="EUR"` ✓ (per-currency sections)
  - `class="inflation-button inf-usdollar"` ✓ (country-selector button)
  - `id="stat-btc-change-USD"` / `id="stat-m1-current-USD"` / `id="stat-debt-current-USD"` ✓ (InflationStats targets)
  - `id="global-whats-next-wrap"` ✓ (CountrySelector-toggled block)
  - `"@type":"Article"` / `"@type":"BreadcrumbList"` ✓ (Phase 4 schemas)

### Decisions locked in
- **Side-effect-only Client Components.** InflationStats + DynamicHeader both `return null`. All their work is imperative DOM writes against elements the Server Components rendered. This keeps 100% of the page content server-rendered (every translated string, every flag, every card body) and contains hydration to the ~7 KB of event-wiring JS. Zero flash, zero layout shift.
- **CustomEvent bridge between CountrySelector and InflationStats** instead of sharing React state via context. Reasons: (a) the two components live at sibling positions in the tree, (b) no other component needs to know about the selected currency, (c) React Context would force both to become descendants of a Provider + re-render on every selection change. The DOM is already a suitable pub/sub bus here.
- **`dangerouslySetInnerHTML` for the calculator result** (with `escapeHtml()` on all interpolated strings). The legacy prose template interleaves translated strings + literal `&nbsp;` entities; React strips `&nbsp;` from text nodes. Rendering as HTML preserves the exact legacy output. All variable inputs are escaped, so no XSS surface.
- **`useLocale()` for number formatting** instead of reading `navigator.language` + `localStorage`. The legacy script picked a locale by comparing browser language to stored UI language — complex and stale. With next-intl, the active locale is already in context; `Intl.NumberFormat(locale, …)` does the right thing automatically.
- **`idSuffix` kept on CompoundInflationCalculator** even though the inflation page no longer has per-currency calculators inline. The solo page uses `idSuffix=""`; future pages can reinstate per-currency calculators by passing a suffix. Cleaner API contract than two separate components.
- **`changing-header` stays as a `<span>` inside the H1** (not the H1 itself). Keeps the H1 semantically intact — DynamicHeader just rewrites the orange text content, not the heading structure.

### Intentionally left alone
- `jquery/inflation-stats.js` / `jquery/compound-inflation-calculator*.js` / `jquery/dynamic-header.js` — still shipped by the static site on `main`. Phase 14 deletes them.
- `forms-backend/inflation-stats.js` — untouched. `<InflationStats>` fetches from its existing `https://forms.bitcoin.rocks/api/inflation-stats?currency=XXX` endpoint with the same response shape.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 6b
```
components/InflationStats.tsx                      (NEW — Client, ~220 lines)
components/CompoundInflationCalculator.tsx         (NEW — Client, ~190 lines)
components/CompoundInflationCalculatorSolo.tsx     (NEW — 20 lines, wrapper)
components/DynamicHeader.tsx                       (NEW — Client, ~100 lines)
components/CountrySelector.tsx                     (dispatch CustomEvent on selection change)
app/[locale]/inflation/page.tsx                    (mount InflationStats + DynamicHeader; H1 span gets id="changing-header")
MIGRATION-NEXTJS.md                                (Phase 6b marked complete; position pointer → Phase 7)
```

### Next up: Phase 7 — Bucket A comparison pages (with V2 redesign)
Port the 10 `bitcoin-vs-*` pages + `bank-runs` with the V2 design system applied during port (hero → intro → comparison points → what's next → publisher attribution). Phase 7a designs `components/ComparisonPageLayout.tsx` + ports the first 3 (gold, stocks, cash). See `MIGRATION-NEXTJS.md` Phase 7 for the full checklist.

---

## Previous: Next.js Migration — Phase 6a Inflation page shell complete — April 17, 2026

Sixth commit of the Next.js migration on `v2-nextjs-redesign`. The 3,035-line inflation page with all 13 per-currency dynamic sections is now a typed React tree: 1 Client Component (`CountrySelector`) + 1 heavy Server Component (`CurrencySection`, rendered 13× for USD/CAD/EUR/GBP/BRL/PHP/MXN/INR/JPY/AUD/ILS/THB/NZD) + the parent `app/[locale]/inflation/page.tsx` shell. Phase 6b will graft the live stat-fetcher + calculator onto this. `main` is still frozen.

### What Phase 6a delivered

**New components (`components/`)**
- **`components/CountrySelector.tsx`** — Client Component. Drop-in replacement for `jquery/country-selector-inflation.js`. Owns `selected: string | null` state; a `useEffect` toggles the `hidden` attribute on `.countries` DOM nodes (and on `#global-whats-next-wrap`) whenever selection changes. This keeps the server-rendered HTML stable (all 13 currency sections in the initial source so crawlers see everything) while the UI only shows the active one. `gtag('event', 'select_currency', { event_category: 'inflation', event_label: CODE })` fires on select; reset button restores the full button grid. Smooth scroll-to-top on both actions matches the legacy UX exactly.
- **`components/CurrencySection.tsx`** — Server Component (~400 lines). One instance per currency — renders the full 4-section block: intro (+ BTC gain / currency loss hero cards), "Here's the proof" (money-supply card + optional debt card + prose), "Bitcoin doesn't have inflation" (21M cap vs growing currency supply), "Bitcoin is also a tool for freedom" (4 feature cards + 4 story cards). Resolves all `inflation_${lower}_*` keys via `useTranslations()`. Accepts `btcChartUrl`, `cpiUrl`, `m1Url`, `debtUrl` (nullable — EUR skips the debt card because FRED has no Eurozone aggregate series). SVG icons for the 4 features (decentralized, permissionless, sovereign, scarce) and 4 stories (canada, nigeria, texas, pennsylvania) inlined so each section ships everything crawlers need without client hydration.

**New page (`app/[locale]/inflation/page.tsx`)**
- Replaces the Phase 5 stub-free inflation absence with the real page: Article + BreadcrumbList JSON-LD via Phase 4 builders, `generateMetadata()` with full hreflang alternates + OpenGraph + Twitter card, hero H1, `<CountrySelector>` wrapping 13 `<CurrencySection>` children + the global What's-next? grid (hidden by default, revealed by the selector effect), sources block (6 links: FRED M1SL, FRED International narrow-money, BLS CPI, mempool.space, Bitcoin source code, Satoshi whitepaper), and publisher attribution with the Reviewed-for-accuracy badge.
- Per-currency URL map (`CURRENCY_URLS`) is copied from `scripts/inflation-multi/rebuild-inflation-html.js` — same 13-currency set, same FRED / Bitcoin Price Report URLs, EUR's `debt: null` preserved.
- 13-entry `CURRENCIES` array drives both the button grid (flag emoji + `data-id` + `labelKey`) and the section list. Each entry has a `className` matching the legacy `inf-*` hover color classes (inf-usdollar, inf-caddollar, inf-euro, inf-india, …).

**i18n + CSS infrastructure**
- **`lib/i18n/request.ts`** — added `inflation` to `DEFAULT_NAMESPACES` so the ~480 `inflation_*` keys load on every request alongside `common` + `index`. In-memory cache means this is read-once per locale per build (no per-request file reads). Comment explains future phases can switch to per-page namespace sets if bundle size becomes an issue, but we're nowhere near that threshold.
- **`app/globals.css`** — appended the "INFLATION PAGE" section (~400 lines) ported verbatim from `css/style.css`: `.h1-inflation`, `.inflation-intro`, `.inflation-section` + its `h2` / `p` rules, `button.inflation-button` + `.container-inflation-button`, `.stat-cards-grid` + `.stat-card*`, `.stat-comparison-card*`, `.feature-cards-grid` + `.feature-card*`, `.story-cards-grid` + `.story-card*`, `.sources-section` + `.sources-list`, `.publisher-attribution` + `.reviewed-badge`, `.body-link`, `.text-highlight`, `.break-micro`, `.break-nano`, `.money-icon`, and `.countries[hidden] { display: none !important }`. Tabs (not spaces), legacy `.inflation-revamp` scoping dropped (no longer needed since all inflation styles are now page-scoped by component tree).

**Published-flag flip**
- **`lib/pages.ts`** — `inflation` flipped from `published: false` to `published: true`. The sitemap now emits 55 per-locale `/inflation` URLs, each with a full `alternates.languages` map pointing at all other 54 locale variants. `lastModified` derives from `i18n/en/inflation_en.json` `@metadata.last-updated` via Phase 4's date-modified helper — zero manual date bookkeeping.

### Build + verification
- `npm run build` → ✓ compiled 2.1s, TypeScript clean, **114 static pages** generated (55 locales × 2 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). The Turbopack "overly broad patterns" warning on `load-messages.ts` `fs.readFile` is pre-existing from Phase 2 — not a new issue.
- `npm run start` + live `curl` spot-checks end-to-end:
  - `/en/inflation` → 200. HTTP `link:` header carries all 55 hreflang alternates (en, af, az, ca, cs, ny, da, de, et, es, eu, fil, fr, ga, ha, hr, id, zu, it, sw, lt, hu, ms, nl, nb, uz, pl, pt, ro, sk, sl, fi, sv, tl, vi, tr, yo, el, bg, ru, ur, ar, fa, he, hi, bn, pa, ta, si, my, th, am, zh, ja, ko + x-default). Body source contains Article + BreadcrumbList JSON-LD, `id="USD"`/`id="CAD"`/`id="EUR"`/`id="global-whats-next-wrap"`, `class="inflation-button inf-usdollar"`, "DOLLARS IN EXISTENCE" hero label.
  - `/ar/inflation` → 200, `<html lang="ar" dir="rtl">` — RTL still correct with the full inflation tree.
  - `/sitemap.xml` → grep count confirms exactly 55 `/inflation<` entries (one per locale).

### Decisions locked in
- **One Client Component, two Server Component trees.** `CountrySelector` is the only piece that touches React state; `CurrencySection` × 13 + the global What's-next wrap + the sources/publisher blocks are pure server-render. No hydration flash on the ~6 kB of stat-card + feature-card HTML per currency.
- **Visibility via imperative DOM mutation, not re-render.** A `useEffect` in `CountrySelector` walks `.countries` descendants and toggles their `hidden` attribute on selection change. This preserves the initial server-rendered HTML (all 13 currency sections visible to crawlers) without requiring the selector to accept + re-render them via React state — which would have blocked them from being pure Server Components.
- **`hidden` attribute over `display: none` CSS class.** The HTML5 `hidden` attribute is semantic (a11y tree reflects it), CSS-aware (`display: none !important` applied via `.countries[hidden]` in globals.css) and JS-ergonomic (`sec.hidden = false`). Single source of truth.
- **`inflation` namespace in the default loader list.** Simpler than adding per-route namespace detection via the middleware; adds ~480 keys × 55 locales to the request payload, but the in-memory cache reads each file once per process start. Revisit in Phase 14 if the site has more namespaces to load.
- **Per-currency URL map duplicated from rebuild-inflation-html.js** — same FRED + BPR URLs. When Phase 6b wires up the live stats it can import the same map from the Next page rather than re-deriving. Single source of truth for which 13 currencies we support, plus EUR's null debt.
- **Reviewed-for-accuracy badge via i18n key, not inline year.** `REVIEWED_ACCURACY_I18N_KEY` from Phase 4's `lib/schema/reviewed-badge.ts` points to `common_reviewed_accuracy` which renders "✓ Reviewed for accuracy: 2026". Bump the year by editing the common JSON file once per year; no page-level changes needed.
- **Stat-card placeholder values preserved.** Phase 6b will fill them in via `document.getElementById(...)`-driven fetch (same pattern as legacy `inflation-stats.js`). For now the server-rendered "+50%" / "-15%" / "—" values are sensible defaults that look correct to crawlers.

### Intentionally left alone
- `jquery/country-selector-inflation.js`, `jquery/inflation-stats.js`, `jquery/compound-inflation-calculator*.js`, `jquery/dynamic-header.js`, `inflation.html`, `css/style.css` — still shipped by the static site on `main`. Phase 14 deletes them.
- `forms-backend/inflation-stats.js` — unchanged. Phase 6b's `<InflationStats>` Client Component will `fetch()` from its existing `/api/inflation-stats?currency=XXX` endpoint.
- `main` at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 6a
```
components/CountrySelector.tsx        (NEW — Client, 160 lines)
components/CurrencySection.tsx        (NEW — Server, ~400 lines)
app/[locale]/inflation/page.tsx       (NEW, ~400 lines)
app/globals.css                       (appended inflation-page block, ~400 lines)
lib/i18n/request.ts                   (DEFAULT_NAMESPACES adds "inflation")
lib/pages.ts                          (inflation.published: false → true)
MIGRATION-NEXTJS.md                   (Phase 6a marked complete; pointer → Phase 6b)
```

### Next up: Phase 6b — Inflation stats + calculators
Port `jquery/inflation-stats.js` → `components/InflationStats.tsx` (Client Component, fetches `forms.bitcoin.rocks/api/inflation-stats?currency=XXX`, writes into the `stat-*-${code}` DOM ids already in place). Then port the two compound-inflation calculators + the dynamic-header sticker/sign URL-param handler. See `MIGRATION-NEXTJS.md` Phase 6b for the full checklist.

---

## Previous: Next.js Migration — Phase 5 Homepage complete — April 17, 2026


Fifth commit of the Next.js migration on `v2-nextjs-redesign`. The v2 homepage from `index.html` (942 lines of HTML + 120 lines of CSS + 330 lines of carousel JS) is now a typed React tree composed of small server components plus one tightly-scoped client component for the RAF-driven infinite-scroll carousels. Every one of the ~50 cards and all hero + pill copy is translated at render time across all 55 locales. `main` is still frozen.

### What Phase 5 delivered

**New components (`components/`)**
- **`components/HomeCarousel.tsx`** — the only Client Component needed for the homepage. Ports `jquery/home-carousel.js` 1:1: RAF loop at 30 px/s, `transform: translate3d(offset, 0, 0)`, offset wraps around `halfWidth` invisibly because pills are duplicated 2× in the parent JSX, bidirectional mouse drag with 1.2× gain, touch drag with axis lock (vertical swipes pass through), trackpad horizontal wheel + shift+vertical wheel, hover pause, click-suppression after drag, recalc on resize + `document.fonts.ready` + 500ms settle timer. All event listeners cleaned up on unmount.
- **`components/HomePill.tsx`** — Server Component. Typed `HomePillColor` union covers all 21 topic colors. Renders plain `<a href="#anchor">` (not next-intl `<Link>`) so the browser's native `scroll-behavior: smooth` + `scroll-padding-top: 20px` handle the in-page jump. Duplicate pills get `aria-hidden="true"` + `tabIndex={-1}` so they don't clutter the a11y tree.
- **`components/WhatsNextCard.tsx`** — Server Component. Resolves `label`, `title`, and `authorKey` via `useTranslations()`. `external` prop adds `target="_blank"` + `rel="noopener noreferrer"`. Uses plain `<a>` because the caller always passes a pre-localized internal href (`/${locale}/foo`) or an external URL — never a locale-relative path that would need `<Link>`.
- **`components/CategorySection.tsx`** — Server Component. Wraps the per-topic card grid, renders `<h2>Bitcoin &amp; <span class="accent">topic</span></h2>`, sets `--card-accent` CSS variable on the section via `style` prop. That variable cascades into `.whats-next-card-label`, the `h2 .accent`, and the hover border — so every card inside the section picks up the category color without knowing its own.

**Homepage page (`app/[locale]/page.tsx`)**
- Replaces the Phase 4 stub with a full port of `index.html`: hero, two carousels (row 1 with 11 pills, row 2 with 10 pills — reorder preserved so bright-green `energy` never lands adjacent to bright-green `money`), 20 category sections covering ~50 cards mixing internal bitcoin.rocks pages and curated external sources (TIME, Fortune, Forbes, YouTube, Lyn Alden, Anita Posch, Bitcoin Magazine, etc.).
- `generateMetadata()` now populates full OpenGraph + Twitter card data (title, description, `og:image` pointing at `meta-home-v4.png`, card type `summary_large_image`) alongside the Phase 4 hreflang alternates.
- Pills are rendered via a `renderPillSet()` helper that emits the first set + duplicate set with `duplicate` prop — single source of truth for the row, and the duplicate set inherits every change automatically.
- Internal card links use `href={\`${l}/slug\`}` where `l = /${locale}` — future phases can change the locale prefix strategy in one place without touching 50 hrefs.

**CSS (`app/globals.css`)**
- Lifted the entire V2 homepage block from `css/style.css` (~220 lines) into `app/globals.css` — all 21 `.home-pill.*` color classes with `color: ... !important` + the shared `border-color: currentColor` rule; `.home-carousel-wrap` / `.home-carousel-row` / `.home-carousel-track` (including 100vw breakout trick); `.home-hero .h1-inflation` + `.home-hero .inflation-intro` with 500px breakpoint; `.whats-next-section` / `.whats-next-grid` / `a.whats-next-card` / `.whats-next-card-label` / `.whats-next-card-title` / `.whats-next-card-source` including the `:only-child { grid-column: 1/-1 }` solo rule; `.category-section` with accent driven by `--card-accent` variable.
- Added `html { scroll-behavior: smooth; scroll-padding-top: 20px; }` — replaces the legacy `jquery/home-carousel.js` `initAnchorScroll()` function with native CSS. One-line solution, works in every browser we care about.
- Kept `.container-main` (≤700px centered column) and `.container-inner` (96% inner) as raw CSS because they're the fundamental layout containers that every page will use.

### Build + verification
- `npm run build` → ✓ compiled 2.1s, TypeScript clean, **59 routes** static-generated (same count as Phase 4; no new routes, just the homepage content filled out across all 55 locales).
- `npm run start` + `curl` spot-checks confirmed end-to-end:
  - `/en` → 200, 183 KB. Source contains `home-hero`, `home-carousel-row` (x2), 4 category IDs spot-checked (`money`, `freedom`, `energy`, `get-started`), hero strings ("Bitcoin is better money…", "Tap on a category…"), and "Bitcoin doesn't have inflation" title.
  - `/ar` → 200, 197 KB, `<html lang="ar" dir="rtl">` still correct with the full homepage tree.
  - `/es` → 200, 188 KB. Hero h1 still English because `home_h1` isn't in `index_es.json` yet — English fallback from `lib/i18n/load-messages.ts` working as designed.
- Build-time warning from Turbopack about "overly broad patterns" in `load-messages.ts` — pre-existing from Phase 2, harmless perf hint, not a new issue.

### Decisions locked in
- **One Client Component, 4 Server Components.** Only the carousel needs browser APIs (RAF + touch events + drag state); everything else (pills, cards, section wrappers, hero) is pure data-transform and ships as static HTML. Zero hydration flash on the ~50 cards + hero.
- **In-page anchors use plain `<a>`, not next-intl `<Link>`.** `<Link>` would treat `#money` as cross-page navigation (and rewrite to `/en/#money` or similar), breaking in-page scroll. Plain `<a href="#money">` lets the browser handle it natively, which combined with CSS `scroll-behavior: smooth` is cleaner than the legacy JS smooth-scroll.
- **`renderPillSet()` helper** — pills × 2 = 42 rendered elements per carousel. Helper takes a typed pill array + `t()`, emits both sets. Keeps the homepage page from bloating into 200+ lines of `<HomePill>` JSX.
- **CSS custom property `--card-accent` instead of per-card color props.** Every card label / section heading accent / hover border reads `var(--card-accent)`. `<CategorySection>` sets it once via `style={{"--card-accent": accent}}`, cards inherit through CSS cascade — no color prop threading to `<WhatsNextCard>`, no Tailwind arbitrary-value pollution.
- **`SavingSection.tsx` deferred as redundant.** The migration plan called for a dedicated SavingSection component, but the reusable `CategorySection` + `WhatsNextCard` + `HomePill` trio already handles it perfectly (`<CategorySection id="saving" accent="#F5A9B8" titleKey="home_btn_saving">`). Adding a thin wrapper component would have been pure ceremony.
- **Native browser scroll, not Intersection Observer or manual JS.** Legacy `home-carousel.js` had an `initAnchorScroll()` function with `window.scroll({ behavior: 'smooth', top: top })`. CSS `scroll-padding-top: 20px` on `html` gives exact same behavior with zero JS.

### Intentionally left alone
- `jquery/home-carousel.js` — still shipped by the static site on `main`. Phase 14 deletes it.
- `index.html` — still the source of truth for the static site; Phase 14 deletes it.
- `css/style.css` — still ships to all un-migrated pages; Phase 14 deletes it.
- `forms-backend/` — untouched.
- `main` branch at `origin/main` (`6cb07406`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 5
```
components/HomeCarousel.tsx        (NEW — Client, 280 lines)
components/HomePill.tsx            (NEW — Server, 50 lines)
components/WhatsNextCard.tsx       (NEW — Server, 50 lines)
components/CategorySection.tsx     (NEW — Server, 65 lines)
app/[locale]/page.tsx              (REWRITE — stub → full homepage, ~620 lines)
app/globals.css                    (V2 homepage CSS block added, ~220 lines)
MIGRATION-NEXTJS.md                (Phase 5 marked complete; position pointer → Phase 6)
```

### Next up: Phase 6 — Inflation page
Port `inflation.html` (3036 lines — largest page in the codebase) to `app/[locale]/inflation/page.tsx`. Phase 6a is the static shell + `<CountrySelector>` (Client Component for the currency picker). Phase 6b ports the stat fetchers (`inflation-stats.js`) + both compound inflation calculators + the dynamic header. See `MIGRATION-NEXTJS.md` Phase 6 for the full checklist.

---

## Previous: Next.js Migration — Phase 4 SEO / JSON-LD / sitemap helpers complete — April 17, 2026

Fourth commit of the Next.js migration on `v2-nextjs-redesign`. The entire `scripts/inject-*.js` JSON-LD pipeline from the legacy static site has been ported to TypeScript helpers that run at render time — plus brand-new `hreflang` generation, the Next `MetadataRoute` sitemap + robots handlers, and a `dateModified` helper that automates what was previously a manual dual-source-of-truth dance. `main` is still frozen.

### What Phase 4 delivered

**New infrastructure (`lib/`, `components/`)**
- **`lib/site.ts`** — site-wide constants (origin, brand, logo, GA id) + `buildUrl(locale, slug)` helper. One source of truth for production URLs.
- **`lib/pages.ts`** — canonical page registry. Each page has a slug, the phase that ships it, sitemap priority, changeFrequency, English JSON namespace, and a `published: boolean` flag. Phase 5 will flip `index` to `published: true`; Phase 6 flips `inflation`; etc. The sitemap only emits `getPublishedPages()` so the index never advertises URLs that still 404 during the migration.
- **`components/JsonLd.tsx`** — tiny render-a-`<script type="application/ld+json">` component. Uses `dangerouslySetInnerHTML` with a `</` → `\u003c` escape so a malicious translated string can never break out of the script tag.
- **`lib/schema/organization.ts`** — ports `scripts/inject-organization-schema.js`. Exports `buildOrganizationSchema()` (full node with `knowsAbout`, contact points, etc.) and `ORGANIZATION_REF` (`@id`-only reference every other schema uses so we don't duplicate the full organization node on every page).
- **`lib/schema/website.ts`** — NEW (was hand-maintained in `index.html`). Emits `WebSite` + SearchAction + `inLanguage` list (all 55 locales pulled from `lib/i18n/config.ts` so adding a language auto-updates the schema).
- **`lib/schema/article.ts`** — ports `scripts/inject-article-schema.js`. Picks Article vs WebPage from a slug allow-list. Takes pre-translated `headline` + `description` as input (from the caller's `t()` lookups) — no more HTML scraping at build time.
- **`lib/schema/breadcrumb.ts`** — ports `scripts/inject-breadcrumb-schema.js` with the same hierarchy rules (`Home > Page`, `Home > Business > Page`, `Home > Nostr > Page`, `Home > Stickers > Sticker Files`). Accepts the translated page title as input; returns `null` for the homepage.
- **`lib/schema/comparison.ts`** — ports `scripts/inject-comparison-schema.js`. Takes a typed `ComparisonPoint[]` data array (`{bitcoin, asset, explanation}`) rather than scraping HTML — type-safe + means each comparison page in Phase 7 just imports its data file and passes it through.
- **`lib/schema/reviewed-badge.ts`** — ports the semantics of `scripts/inject-reviewed-badge.js` but deliberately as a `getReviewedAccuracyYear()` + `REVIEWED_ACCURACY_I18N_KEY` helper, not a component. Each Phase 7/8 page decides exactly where in its V2 design to render the badge.
- **`lib/schema/date-modified.ts`** — NEW automation. Reads `@metadata.last-updated` from each English JSON file. Means the `Article.dateModified` field and the sitemap `<lastmod>` auto-update the moment a translator/editor bumps the JSON metadata. No more dual bookkeeping.
- **`lib/schema/hreflang.ts`** — NEW. `buildAlternates({locale, slug})` returns the canonical + all-55-locales `languages` map for the Next Metadata API. `buildHreflangMap(slug)` is the raw `{locale: url}` map used inside the XML sitemap. Google's sitelinks-search-box + multilingual SERP preferences rely on this being correct — Phase 4 is where we unlock that.

**New route handlers (`app/`)**
- **`app/sitemap.ts`** — `MetadataRoute.Sitemap` handler. Emits one entry per `(published page, locale)` pair, each with its full `alternates.languages` map — Next serializes those into the `<xhtml:link rel="alternate" hreflang="…">` Google expects for multilingual sites. `lastModified` comes from `getDateModifiedFromNamespace()`, `changeFrequency` + `priority` from the page registry.
- **`app/robots.ts`** — `MetadataRoute.Robots` handler. Ports the hand-maintained `robots.txt` including the non-content disallow list (`/i18n/`, `/jquery/`, `/scripts/`, `/memory-bank/`, `/css/`, `/forms-backend/`, `/.github/`) + per-user-agent Allow blocks for all 16 major AI crawlers (GPTBot, ChatGPT-User, OAI-SearchBot, Google-Extended, ClaudeBot, anthropic-ai, PerplexityBot, Applebot-Extended, Meta-ExternalAgent, Bingbot, Amazonbot, CCBot, cohere-ai, YouBot, Diffbot, Bytespider).

**Existing file changes**
- **`app/[locale]/layout.tsx`** — emits `<JsonLd data={buildOrganizationSchema()} />` inside `<head>` so every page across every locale ships the Organization node (other schemas reference it via `@id` so no duplication).
- **`app/[locale]/page.tsx`** — updated to demonstrate the full pattern so future phases (and translators/editors wiring up new pages) have a clear reference:
  - `generateMetadata()` returns `alternates: buildAlternates({locale, slug: ""})` → Next renders `<link rel="alternate" hreflang="…">` for every locale in `<head>`.
  - Body renders `<JsonLd data={buildWebSiteSchema()} />` (homepage-only) + `<JsonLd data={buildArticleSchema({slug: "", locale, headline, description, schemaType: "WebPage"})} />` (per-locale, with auto-derived `dateModified` from `i18n/en/index_en.json`'s `@metadata.last-updated`).

**Static assets**
- `llms.txt` and `llms-full.txt` copied into `public/` so they're served at `/llms.txt` / `/llms-full.txt` (AI crawlers expect them at those paths).

### Build + verification
- `npm run build` → ✓ compiled 2.0s, TypeScript clean, **59 routes** static-generated (55 locale pages + /_not-found + /robots.txt + /sitemap.xml + middleware proxy).
- Live `curl` spot-checks via `npm run start`:
  - `/en` HTML source contains 3 JSON-LD blocks (Organization + WebSite + WebPage) and `<link rel="alternate" hreflang="…">` for all 55 locales.
  - `/sitemap.xml` is valid XML with `<xhtml:link rel="alternate" hreflang="…">` per URL for all 55 locales (one entry per published page so far = just `/`).
  - `/robots.txt` has the expected structure with per-AI-crawler Allow + Disallow blocks, `Sitemap:` pointer, and `host` directive.
  - `/ar` → `<html lang="ar" dir="rtl">` still correct with the full Phase 3/4 stack loaded.

### Decisions locked in
- **Published-flag gate on the sitemap.** The page registry lists all ~45 future URLs right now, but `getPublishedPages()` filters to only those shipped in Next. This means the sitemap stays honest during the long migration without hunting-and-pecking to add each URL later — future phases just flip one `published` bool per page and it appears in the sitemap automatically.
- **Comparison/breadcrumb helpers take translated strings as inputs**, rather than scraping DOM like the legacy scripts. Reason: pages now render from typed React components, so we already have the translated strings in hand by the time we call the builder. Type-safe + zero translator workflow disruption.
- **`dateModified` is derived, not written manually** — the old `.clinerules` rule about bumping `Article` schema `dateModified` when bumping English JSON `@metadata.last-updated` becomes automatic. The rule still applies to translators bumping `last-updated`; the HTML schema date no longer needs manual editing.
- **JsonLd is loosely typed (`data: any`)** deliberately — every schema builder returns a plain `Record<string, unknown>` and a strict union over every possible schema shape just creates assertion noise at the JSX site. The `</ → \u003c` escape inside the component is the safety net.
- **Breadcrumb + comparison + reviewed-badge helpers aren't wired to any page yet.** They'll be used by Phase 7 (comparison + breadcrumb on each bitcoin-vs-* page), Phase 8 (breadcrumb on about/get-involved), Phase 7-8 (reviewed-badge on educational pages). Phase 4 ends with the infrastructure built; actual usage lands when the pages that need it get ported.

### Intentionally left alone
- `scripts/inject-*.js` — still used by the static site on `main`. Phase 14 will delete them.
- All root `*.html` files, `css/style.css`, `jquery/` — legacy static site untouched.
- `forms-backend/` — still a completely separate Railway service.
- The stale hand-written `sitemap.xml` in the repo root — Phase 13 (`app/not-found.tsx` + redirects + final sitemap review) will delete it.
- `main` branch at `origin/main` (`6cb07406`) — Railway keeps serving the static site until cutover (Phase 15).

### Files created/changed in Phase 4
```
lib/site.ts                 (NEW)
lib/pages.ts                (NEW)
lib/schema/organization.ts  (NEW)
lib/schema/website.ts       (NEW)
lib/schema/article.ts       (NEW)
lib/schema/breadcrumb.ts    (NEW)
lib/schema/comparison.ts    (NEW)
lib/schema/reviewed-badge.ts (NEW)
lib/schema/date-modified.ts (NEW)
lib/schema/hreflang.ts      (NEW)
components/JsonLd.tsx       (NEW)
app/sitemap.ts              (NEW)
app/robots.ts               (NEW)
public/llms.txt             (copy)
public/llms-full.txt        (copy)
app/[locale]/layout.tsx     (Organization JSON-LD wired into <head>)
app/[locale]/page.tsx       (WebSite + WebPage JSON-LD + generateMetadata with alternates)
MIGRATION-NEXTJS.md         (Phase 4 marked complete; position pointer → Phase 5)
```

### Next up: Phase 5 — Homepage port
Port `index.html` (943 lines, already V2) to `app/[locale]/page.tsx` in full. Extract `components/HomeCarousel.tsx` (Client — drag-to-scroll + RAF infinite loop) + `components/HomePill.tsx` + `components/WhatsNextCard.tsx` + `components/SavingSection.tsx`. All strings via `t()` from `i18n/en/index_en.json`. Visual parity check against live `bitcoin.rocks/`. Phase 4's SEO helpers + the homepage's existing Phase-4-demo usage of `buildArticleSchema` / `buildWebSiteSchema` / `buildAlternates` stay in place when the stub content is replaced with the full carousels + sections. See `MIGRATION-NEXTJS.md` Phase 5 for the full checklist.

---

## Latest: Next.js Migration — Phase 3 shared layout components complete — April 17, 2026

Third commit of the Next.js migration on `v2-nextjs-redesign`. Every page now inherits a server-rendered V2 navbar + footer + GA snippet from `app/[locale]/layout.tsx` — zero duplication, zero client-side hydration needed for the shared chrome. `main` is still frozen.

### What Phase 3 delivered

- **`lib/i18n/navigation.ts`** — thin wrapper around `next-intl`'s `createNavigation(routing)` that exports locale-aware `Link`, `usePathname`, `useRouter`, `redirect`, `getPathname`. Used by every shared component so `<Link href="/inflation">` becomes `/<current-locale>/inflation` automatically, with cookie-persisted locale switching baked in.
- **`components/Footer.tsx`** — Server Component. Ports the canonical V2 footer from current `index.html` (the one with `.footer-logo-wrap`): centered logo with a horizontal line breaking behind it, tagline, dot-separated link row (About · Contribute · Nostr · email). All styles in Tailwind utility classes. Reads `common_footer_tagline`, `common_footer_about`, `common_footer_contribute`, `common_footer_nostr` via `getTranslations()` — translations already exist for all 55 locales.
- **`components/Navbar.tsx`** — Server Component. V2 pill nav (logo-on-top-of-pill pattern). Renders `home_nav_learn` / `home_nav_get_involved` / `home_nav_about` into three pill cells and slots in `<LanguageSwitcher />` as the 4th cell. All links use locale-aware `<Link>`.
- **`components/LanguageSwitcher.tsx`** — Client Component. Ports the behavior of `jquery/language.js`:
  - Reads current locale via `useLocale()`, displays native name (e.g. `English`, `Español`, `中文`) in a clickable button.
  - Click opens a dropdown of all 55 languages + an "Add language" row pointing at the CONTRIBUTING.md translations section.
  - On select: fires `gtag('event', 'language_switch', { event_category, event_label, language_selected })` then calls `router.replace(pathname, { locale })` — next-intl writes the `NEXT_LOCALE` cookie automatically (no full page reload).
  - On mount: fires `language_pageview` once with `language_source` derived from presence of the `NEXT_LOCALE` cookie (`'stored'` vs `'browser'`).
  - Dropdown closes on outside-click via a `document` mousedown listener that's installed only while open.
  - `TRANSLATION_VERSION` cache-bust is deliberately **removed** — Next.js page regeneration handles cache invalidation at build time.
- **`components/GoogleAnalytics.tsx`** — `<Script strategy="afterInteractive">` wrapper with the `G-18L58W2GTN` measurement ID exported as a module constant.
- **`app/[locale]/layout.tsx`** — rewired to compose everything:
  - `<GoogleAnalytics />` emits inside `<body>` first (after Typekit's `<link>` in `<head>`)
  - `<NextIntlClientProvider>` wraps `<Navbar /> <main>{children}</main> <Footer />`
  - Still handles locale validation, `setRequestLocale()`, `generateStaticParams()`, RTL direction, favicon metadata
- **`app/[locale]/page.tsx`** — simplified. Previously was `min-h-screen` flex-centered (it was the entire page); now just a padded `<section>` since nav + footer live in the layout.

### Build + verification
- `npm run build` → ✓ Compiled successfully in 2.2s, TypeScript clean, **57 routes** static-generated. Turbopack emitted one perf hint about `fs.readFile(p, 'utf8')` in `load-messages.ts` matching 19k+ files — not an error, just a heads-up about dynamic filename globs. We can tighten this later if build time becomes an issue.
- `npm run start` + `curl` spot-checks:
  - `/en` → 200, HTML source contains nav labels ("Learn", "Get Involved", "About", "English"), footer tagline ("Accelerating bitcoin adoption through education."), footer email ("hi@bitcoin.rocks"), `rocks-logo` in both nav + footer.
  - `/ar` → `<html lang="ar" dir="rtl">` — RTL still correct with the full layout stack.
  - `/es` → Spanish footer tagline rendered as "Acelerando la adopción de bitcoin a través de la educación." — confirms translations flow through `getTranslations()` end-to-end on every shared component.

### Decisions locked in
- **Server Components for Navbar + Footer.** Both need translations in the initial HTML response (SEO win + zero hydration flash). The only interactive piece — the language dropdown — is isolated in its own Client Component (`LanguageSwitcher.tsx`), which is the React-server-components best practice.
- **No legacy CSS leakage.** All spacing / colors / typography in the shared chrome are Tailwind utility classes or design-token references (`bg-bg`, `text-bitcoin-orange`, `text-fg-dim`, `font-proxima`, `xs:` breakpoint). A few exact-hex values like `#555` (divider color) and `#f0f0f0` (hover text) are used as raw Tailwind `[#xxx]` values rather than adding single-use theme tokens.
- **`router.replace()` over `router.push()`** for language switching — the language choice replaces the current history entry rather than stacking, which matches the old `location.reload()` behavior's "this wasn't navigation, it was the same page in a different language" intent.
- **`ScrollProgress.tsx` deferred.** Listed as optional in Phase 3; none of the V2 pages actually use a scroll progress bar today. We'll crib it from vote-for-better-money later if any page wants one.

### Intentionally left alone
- `jquery/language.js` — still used by the static site on `main`. Safe to keep until Phase 14 cleanup.
- All root `*.html` files, `css/style.css`, `scripts/inject-*.js`, `business/`, `nostr/`, `sticker-files/` directories — static site reference intact.
- `forms-backend/` — still untouched; Phase 9b will POST to its existing URLs.
- `main` branch at `origin/main` (`6cb07406`) — frozen; Railway keeps deploying the static site until cutover (Phase 15).

### Files created/changed in Phase 3
```
lib/i18n/navigation.ts         (NEW)
components/Footer.tsx          (NEW)
components/Navbar.tsx          (NEW)
components/LanguageSwitcher.tsx (NEW)
components/GoogleAnalytics.tsx (NEW)
app/[locale]/layout.tsx        (rewired — GA + Navbar + Footer composition)
app/[locale]/page.tsx          (stub simplified — nav + footer now in layout)
MIGRATION-NEXTJS.md            (Phase 3 marked complete; position pointer → Phase 4)
```

### Next up: Phase 4 — SEO / JSON-LD / sitemap helpers
Port the `scripts/inject-*.js` pipeline to TypeScript helpers that run at page-render time: article schema, breadcrumb schema, organization schema, comparison schema, reviewed-badge, plus NEW hreflang generation, `app/sitemap.ts` enumerating all pages × 55 locales, `app/robots.ts`, and moving `llms.txt` / `llms-full.txt` into `public/`. See `MIGRATION-NEXTJS.md` Phase 4 for the full checklist.

---

## Previous: Next.js Migration — Phase 2 i18n wiring complete — April 17, 2026

Second commit of the Next.js migration on `v2-nextjs-redesign`. All 55 supported locales now server-render translated HTML from the existing `i18n/` JSON files — no client-side hydration required, no change to translator workflow. `main` is still frozen.

### What Phase 2 delivered
- **`next-intl@4.5.3` installed** (21 packages, 0 vulnerabilities). Matches the sibling projects' approach to i18n in Next.js App Router.
- **Locale catalog** (`lib/i18n/config.ts`): all 55 locales mirrored exactly from `jquery/language.js` (English first, then alphabetical by native display name). Exports `languages`, `locales`, `Locale` type, `defaultLocale`, `RTL_LOCALES`, `isValidLocale()` helper. Deliberately excludes the `custom` / "Add language" row from the legacy dropdown — that's UI-only.
- **Message loader** (`lib/i18n/load-messages.ts`): reads existing `i18n/<locale>/<namespace>_<locale>.json` files (including the nested `business/`, `nostr/`, `sticker-files/` sub-paths) with zero filesystem reorganization. Strips `@metadata` before handing messages to next-intl. **English fallback on missing keys** is implemented per-key — matches jquery.i18n's graceful behavior so translators can keep shipping partial files. In-memory cache keyed by `locale::namespace`.
- **Request config** (`lib/i18n/request.ts`): `getRequestConfig({ requestLocale })` with `hasLocale(locales, …)` validation. During Phase 2 it eagerly loads `common` + `index` namespaces on every request (small enough to always include). Later phases can switch to per-page namespace sets.
- **Routing** (`lib/i18n/routing.ts`): `defineRouting({ locales, defaultLocale: 'en', localePrefix: 'always', localeDetection: true })`. Accept-Language-aware detection on first visit → 301 to `/<lang>/…`, persisted via cookie. Manual switcher overrides (next-intl writes the cookie on any `<Link>` locale change).
- **Middleware** (`middleware.ts` at repo root): `createMiddleware(routing)` with matcher `/((?!api|_next|_vercel|.*\\..*).*)`  — skips Next internals + any path with a dot (so `/favicon.ico`, `/img/*`, `/sitemap.xml`, `/robots.txt`, `/llms.txt` all bypass i18n).
- **`next.config.ts`** now wraps the config with `createNextIntlPlugin('./lib/i18n/request.ts')`. All the existing security/cache headers are preserved.
- **`app/[locale]/layout.tsx`** updated: validates the locale with `hasLocale()` + `notFound()` for unknown codes, calls `setRequestLocale(locale)` so server components below can use `useTranslations()`, wraps children in `<NextIntlClientProvider locale={locale} messages={messages}>`, and adds `generateStaticParams()` returning all 55 locales so each is prerendered as a static page. RTL still driven from the config's `RTL_LOCALES` set.
- **`app/[locale]/page.tsx`** now renders `t("home_h1")` + `t("home_intro")` via server-side `getTranslations()` — translated markup is in the initial HTML response (the whole point of the migration for SEO).
- **Deleted `app/page.tsx`** — the next-intl middleware now handles `/` → Accept-Language-matched locale redirect, replacing the Phase 1 hard-coded `redirect('/en')`.

### Build + verification
- `npm run build` → ✓ compiled in 1.9 s, TypeScript clean. **57 routes generated**: 1 `/_not-found` + 55 static per-locale pages (`/en`, `/af`, `/az`, …, `/ko`) + middleware proxy.
- `curl http://localhost:3000/<lang>` confirms end-to-end:
  - `/en` → `<html lang="en" dir="ltr">` with English H1 + intro
  - `/es` → `<html lang="es" dir="ltr">` with Spanish intro (English fallback on `home_h1` works — Spanish doesn't have it yet)
  - `/ar` → `<html lang="ar" dir="rtl">` with Arabic intro (RTL direction correct)
  - `/zh` → `<html lang="zh" dir="ltr">` with Simplified Chinese intro

### Decisions locked in
- **Flat snake_case keys preserved** (`home_h1`, `common_footer_about`, etc.). The legacy jquery.i18n format is kept as-is to preserve translator workflow and the existing ~5,250 translated key-values across 55 languages. One JSON file per page = one logical namespace, but we load multiple namespaces into a single flat bag per request. Nested directories use slash paths (`"business/wallets"`, `"nostr/what-is-nostr"`).
- **Tuple-based `locales` export** rather than deriving from `languages` via `.map()` — `as const` on a literal array gives next-intl the readonly tuple it needs for `hasLocale()` type-narrowing. Tradeoff: adding a new language means editing both `languages` (display) and `locales` (tuple) arrays. Both are right next to each other in the file; the translate-new-language workflow already touches multiple files.

### Intentionally left alone
- `jquery/` — still used by the static site during the migration period. Phase 3 will start porting individual files (`language.js` → `components/LanguageSwitcher.tsx` first).
- All `*.html` / `css/style.css` files — static site still serves from `main`.
- `forms-backend/` — untouched; Next will POST to its existing URLs starting Phase 9b.
- English JSON keys that aren't yet in translations files (e.g. `home_h1` in `es`) — handled by the English fallback in `load-messages.ts`, so missing keys never error-out at render time.

### Files created/changed in Phase 2
```
package.json             (next-intl added)
next.config.ts           (wrapped with createNextIntlPlugin)
middleware.ts            (NEW)
lib/i18n/config.ts       (NEW)
lib/i18n/load-messages.ts (NEW)
lib/i18n/request.ts      (NEW)
lib/i18n/routing.ts      (NEW)
app/[locale]/layout.tsx  (NextIntlClientProvider + setRequestLocale + generateStaticParams + hasLocale validation)
app/[locale]/page.tsx    (now renders translated strings)
app/page.tsx             (DELETED — middleware handles `/`)
MIGRATION-NEXTJS.md      (Phase 2 marked complete; position pointer advanced)
```

### Next up: Phase 3 — Shared layout components
Port the V2 footer + nav + language switcher + GA wrapper into React components and wire them into `app/[locale]/layout.tsx`. The `LanguageSwitcher` needs to port `jquery/language.js` behavior (localStorage persistence, `gtag('event', 'language_switch', …)` + `'language_pageview'` events). See `MIGRATION-NEXTJS.md` Phase 3 for the full checklist.

---

## Previous: Next.js Migration — Phase 1 scaffold complete — April 17, 2026

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
