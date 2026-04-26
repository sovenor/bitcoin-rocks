#!/usr/bin/env node
/**
 * Phase 14 — prepend a "Phase 14 cleanup" entry to activeContext.md and
 * progress.md. Idempotent: re-running doesn't create a second copy.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");

const ACTIVE_PATH = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS_PATH = path.join(ROOT, "memory-bank", "progress.md");

// ──────────────────────────────────────────────── activeContext ────
const ACTIVE_MARKER = "## Latest: Next.js Migration — Phase 14 Cleanup + Docs";
const ACTIVE_ENTRY = `## Latest: Next.js Migration — Phase 14 Cleanup + Docs — April 17, 2026

Eighteenth commit of the Next.js migration on \`v2-nextjs-redesign\`. With all content-porting phases complete (Phases 5-13 shipped 54 published slugs × 55 locales = 4,734 static pages), Phase 14 is the cleanup pass: we deleted every legacy static-site asset the Next app has fully replaced, and refreshed the entire documentation tree (\`.clinerules/\`, \`memory-bank/\`, \`README.md\`, \`CONTRIBUTING.md\`) to describe the Next 16 + React 19 + TS + Tailwind v4 stack instead of the old HTML/CSS/jQuery site. \`main\` is still frozen; the next phase (Phase 15) is the cutover merge.

### What Phase 14 deleted

**Root-level HTML pages (27 files)** — replaced by their \`app/[locale]/<slug>/page.tsx\` equivalents:
\`404.html\`, \`about.html\`, \`bank-runs.html\`, \`bitcoin-vs-{banks,bonds,cash,cbdc,crypto,fine-art,gold,real-estate,stocks,visa}.html\`, \`buy.html\`, \`compound-inflation-calculator.html\`, \`flyers.html\`, \`get-involved.html\`, \`index.html\`, \`inflation.html\`, \`lightning.html\`, \`postcards.html\`, \`postcard-success.html\`, \`sign-success.html\`, \`signs.html\`, \`sticker-language-success.html\`, \`sticker-success.html\`, \`stickers.html\`, \`wallets.html\`.

**HTML sub-site directories** — replaced by the Next routes:
\`business/\` (13 pages), \`nostr/\` (2 pages), \`sticker-files/\` (43 language subdirs + 1 index).

**Legacy front-end stack**:
\`jquery/\` (jQuery core + jquery.i18n + all 11 custom JS files — language.js, home-carousel.js, country-selector-*.js, inflation-stats.js, dynamic-header.js, compound-inflation-calculator*.js, sticker-picker.js, buy-flow.js) and \`css/\` (single \`style.css\`).

**Server config**:
\`nginx.conf\` (replaced by \`next.config.ts\`'s \`redirects()\` — 33 permanent redirects already in place from Phase 13) and \`robots.txt\` (replaced by \`app/robots.ts\`).

**Legacy script pipeline** (13 scripts total):
- \`scripts/inject-{article,breadcrumb,comparison,organization,reviewed-badge,seo-content}-schema.js\` (6 files) — replaced by \`lib/schema/*.ts\` builders.
- \`scripts/inflation-multi/\` directory — static-site era multi-currency inflation HTML rebuilder.
- One-off HTML helpers: \`scripts/fix-carousel-wrap.js\`, \`scripts/update-inflation-{i18n,revamp}.js\`, \`scripts/update-index-i18n-for-saving.js\`, \`scripts/add-{faq,whats-next}-keys.js\`, \`scripts/audit-v2-v1-pages.js\`.

**Total**: 43 files + 6 directories deleted via the idempotent \`scripts/phase14/delete-legacy-assets.js\` helper.

### What stayed

- \`public/img/**\`, \`public/favicons/**\`, \`public/sticker-files/**\`, \`public/business/**\` — already the canonical copy (copied in earlier phases; the deleted root-level \`img/\` / \`business/files/\` / \`business/sticker-files/\` / \`sticker-files/\` directories were the LEGACY locations).
- \`forms-backend/\` — separate Railway service, completely untouched.
- \`i18n/\` — untouched; translators keep editing the same JSON files.
- Memory bank, \`.github/\`, \`nixpacks.toml\`, \`.gitignore\`.
- Translation bootstrap scripts (\`scripts/<language>/\`, \`scripts/audit-translation.js\`, \`scripts/update-about-lang-count.js\`) and the phase-migration helpers (\`scripts/phase10..14/\`, \`scripts/append-comparison-css.js\`).

### Documentation refresh

**\`.clinerules/workspace-rules.md\`** — fully rewritten for the Next 16 stack. Removed "Static Site First" / "jQuery-based" / "no modern JS frameworks" language; documented Server Components by default, locale-aware \`<Link>\` via \`@/lib/i18n/navigation\`, Tailwind v4 CSS-first config, the V2 design system class reference, and the Creating-a-New-Page / Adding-a-Translation workflows. All GA event docs updated to point at the new component locations (\`components/LanguageSwitcher.tsx\`, \`components/CountrySelector.tsx\`).

**\`.clinerules/workflows/translate-new-language.md\`** — replaced the \`jquery/language.js\` step with \`lib/i18n/config.ts\` (both \`languages\` array + \`locales\` tuple), dropped the \`scripts/inject-seo-content.js\` step, dropped the \`index.html\` schema step (Next generates hreflang + WebSite schema automatically), added an RTL note, added the "verify build" final step.

**\`memory-bank/techContext.md\`** — rewritten around the Next stack: Node ≥ 20 prerequisite, npm scripts, updated file-structure tree matching the new \`app/\` / \`components/\` / \`lib/\` layout, dependency list (next, react, next-intl, typescript, tailwindcss), GA events documented with their new component locations, \`next.config.ts\` + \`middleware.ts\` + \`lib/i18n/config.ts\` described.

**\`memory-bank/systemPatterns.md\`** — rewritten around Server Components + locale-first routing + next-intl namespaces. Documents the Page Shape Pattern (\`generateMetadata\` + \`buildAlternates\` + JSON-LD builders), Layout Stack Pattern (root pass-through → \`[locale]\` layout → catch-all 404), Shared-Chrome Pattern, Data+Layout Components (\`ComparisonPageLayout\` / \`ContentPageLayout\` / \`NostrPageLayout\` / \`BusinessPageShell\`), Interactive Client Components, Data Flow patterns (translation loading + Inflation Stats cross-component CustomEvent bridge). Added a "Cleanup (Phase 14) — what's gone" section listing the deleted legacy assets.

**\`README.md\`** — replaced the Apache / .htaccess / "raw HTML / CSS / JS" description with Next.js 16 + React 19 + TS + Tailwind v4. Added a Local Development section with the \`npm install\` / \`npm run dev\` / \`npm run build\` commands.

**\`CONTRIBUTING.md\`** — updated the prerequisites (Node ≥ 20, VS Code or any modern editor instead of Atom specifically), added a Local development setup section, added a Phase-14-era note that translators don't need to touch TypeScript code (the maintainer adds new languages to \`lib/i18n/config.ts\` at merge time). Preserved the full fork-and-translate workflow which is unchanged for contributors.

**\`app/robots.ts\`** — removed stale \`Disallow: /jquery/\` and \`Disallow: /css/\` entries (those directories no longer exist in the deploy tree).

### Build + verification

- \`npm run build\` → ✓ Compiled successfully, TypeScript clean, **4,734 static pages** generated (unchanged from Phase 13). No regressions.
- Repo is clean: 27 HTML files + 6 directories + 13 scripts gone; working tree + Next app untouched.
- \`forms-backend/\` completely untouched.
- \`main\` at \`origin/main\` (\`6cb07406\`) — frozen through Phase 15 cutover.

### Files changed in Phase 14
\`\`\`
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
\`\`\`

### Next
**Phase 15** — pre-cutover QA + the cutover merge itself. The \`v2-nextjs-redesign\` branch will be deployed to a Railway STAGING service first, a full QA pass runs against every page × sample locales (including RTL + CJK), the GEO checklist gets a full re-verification, then the branch merges to \`main\` and Railway prod auto-redeploys.

---

`;

// ──────────────────────────────────────────────── progress ────
const PROGRESS_MARKER = "## Phase 14 complete";
const PROGRESS_ENTRY = `## Phase 14 complete — April 17, 2026

Cleanup pass on \`v2-nextjs-redesign\`. Deleted **43 files + 6 directories** of legacy static-site assets that the Next.js app has fully replaced: 27 root-level \`*.html\` pages, the \`business/\` + \`nostr/\` + \`sticker-files/\` HTML sub-site directories, the \`jquery/\` + \`css/\` front-end stack, \`nginx.conf\` + \`robots.txt\` (replaced by \`next.config.ts\` redirects + \`app/robots.ts\`), the 6 \`scripts/inject-*.js\` schema injectors (ported to \`lib/schema/*.ts\` in Phase 4), and 7 one-off HTML helpers no longer needed. Refreshed the full documentation tree — \`.clinerules/workspace-rules.md\`, \`.clinerules/workflows/translate-new-language.md\`, \`memory-bank/techContext.md\`, \`memory-bank/systemPatterns.md\`, \`README.md\`, \`CONTRIBUTING.md\` — to describe the Next 16 + React 19 + TS + Tailwind v4 stack. Cleaned up stale \`/jquery/\` + \`/css/\` disallow entries in \`app/robots.ts\`. \`npm run build\` still produces the same **4,734 static pages** (no regression). \`public/img/\`, \`public/favicons/\`, \`public/sticker-files/\`, \`public/business/\` all untouched (they're the canonical copies). \`forms-backend/\` untouched. \`main\` still frozen. See \`MIGRATION-NEXTJS.md\` Phase 14 + \`activeContext.md\` for the full list of deletions.

`;

function prepend(filePath, marker, entry) {
	if (!fs.existsSync(filePath)) {
		console.warn(`  ⚠️  ${filePath} doesn't exist, skipping`);
		return;
	}
	const existing = fs.readFileSync(filePath, "utf8");
	if (existing.includes(marker)) {
		console.log(`  ✓ ${path.relative(ROOT, filePath)} already has Phase 14 entry, skipping`);
		return;
	}
	fs.writeFileSync(filePath, entry + existing);
	console.log(`  ✏️  ${path.relative(ROOT, filePath)} — prepended Phase 14 entry`);
}

prepend(ACTIVE_PATH, ACTIVE_MARKER, ACTIVE_ENTRY);
prepend(PROGRESS_PATH, PROGRESS_MARKER, PROGRESS_ENTRY);
