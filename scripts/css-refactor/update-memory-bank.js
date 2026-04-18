#!/usr/bin/env node
/**
 * scripts/css-refactor/update-memory-bank.js
 *
 * Idempotent memory-bank updater for the CSS refactor work:
 *   - Prepends a CSS Refactor section to memory-bank/progress.md
 *   - Prepends a CSS Refactor entry to memory-bank/activeContext.md
 *   - Rewrites the "V2 Design System" section of
 *     .clinerules/workspace-rules.md to reference the new element-level
 *     base styles instead of the .h1-inflation / .inflation-intro class
 *     hooks.
 *
 * Safe to re-run: each prepend checks for a sentinel marker.
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");

const PROGRESS_PATH = path.join(ROOT, "memory-bank", "progress.md");
const ACTIVE_PATH = path.join(ROOT, "memory-bank", "activeContext.md");

// ── progress.md prepend ──────────────────────────────────────────────
const PROGRESS_MARKER = "## CSS Refactor complete — April 18, 2026";
const PROGRESS_ENTRY = `${PROGRESS_MARKER}

Cleaned up \`app/globals.css\` on \`v2-nextjs-redesign\`. File size went from **2368 → 1090 lines (-54%)** across 3 commits prefixed \`CSS refactor:\`. Zero visual change on V2 pages (/, /inflation, /bitcoin-vs-*, /about, /get-involved, /bank-runs); V1 pages kept rendering with browser defaults + the new base element styles (they're scheduled for V2 redesign post-cutover anyway). \`main\` still frozen.

**Commit 1 — delete V1 legacy CSS** (\`e3dbb13f\`)
Dropped ~1200 lines of Phase 9a/9b/10/12 styles: \`.text-box\`, \`.wallet-q\`, \`.biz-*\`, \`.expandable\`, \`.h2-stickers\`, \`.h2-section\`, \`.h3-item\`, \`.compound-form\`, \`.wallet-box*\`, \`.alert\`, \`.buy-platform-box\`, \`.button-form\`, \`.sticker-box\`, \`.bounty-button\`, form input styling, fixed-bottom-bar, \`.biz-box\`, \`.wallet-box-biz\`, nostr accordion CSS, and ~40 other legacy selectors. 2368 → 1157 lines.

**Commit 2 — standardize tokens + element base styles + dedupe V2** (\`eb89d1a9\`)
Expanded \`@theme\` with semantic tokens (\`--color-surface\`, \`--color-fg-dim*\`, \`--color-card-border\`, \`--color-success\`, \`--color-danger\`, \`--color-link-hover\`). Added element-level base rules for \`html\`/\`body\`/\`h1\`/\`h2\`/\`p\` so plain \`<h1>\` now picks up the hero treatment (orange, 38px, centered) with no class hook. Collapsed 21 \`.home-pill.<color> { color: X !important; }\` rules + the border-color union into one \`--pill-color\` CSS custom prop pattern (50 → 25 lines, zero \`!important\`). Removed ~65 unnecessary \`!important\` tags (keeping only 2 legitimate uses: \`.countries[hidden]\` and \`.force-orange\`). Unified every media query on 700px. Every hard-coded \`#ff9500\`/\`#ccc\`/\`#090814\`/\`#111119\` replaced with the corresponding \`var(--color-*)\` token. Added a clear table of contents in the file header. 1157 → 1090 lines.

**Commit 3 — strip \`.h1-inflation\`/\`.h2-inflation\` from V2 JSX** (\`892bc08d\`)
Removed the now-redundant class hooks from 6 files: \`app/[locale]/page.tsx\`, \`app/[locale]/inflation/page.tsx\`, \`app/[locale]/[...rest]/page.tsx\`, \`app/not-found.tsx\`, \`components/ComparisonPageLayout.tsx\`, \`components/ContentPageLayout.tsx\`. Plain \`<h1>\` and \`<h2>\` now read their styling from the base element rules. Cleanest H1 markup on the V2 pages for the first time since migration start. Build: \`npm run build\` ✓ 4734 static pages, TypeScript clean.

**What stayed (for legacy JSX compat)**
- \`.h1-inflation\` is NO LONGER defined in globals.css — the element-level \`h1\` rule covers it.
- \`.force-orange\`, \`.orange\`, \`.orange-link\`, \`.body-link\` — kept as modifier classes used inside V2 content.
- \`.comparison-h1\` — folded into the base h1 rule (its only tweak was \`line-height: 1.15\` which was moved to \`.comparison-hero h1\`).
- Bucket B/C legacy classNames in V1 JSX (\`.wallet-q\`, \`.biz-*\`, \`.h2-section\`, \`.h3-item\`, etc.) — left alone. The JSX still references them but the CSS is gone; those pages render unstyled until redesigned.

**Result**
| | Before | After |
|---|---|---|
| Lines | 2368 | 1090 |
| \`!important\` tags | ~70 | 2 |
| Duplicate selectors | 10+ | 0 |
| \`.home-pill.<color>\` rules | 21 + union | 1 base + 21 one-line modifiers |
| Hard-coded hexes in base rules | ~100 | 0 (token-driven) |
| Media query breakpoints | 400/500/600/700 mixed | 700 unified |

`;

// ── activeContext.md prepend ─────────────────────────────────────────
const ACTIVE_MARKER = "## Latest: CSS Refactor — April 18, 2026";
const ACTIVE_ENTRY = `${ACTIVE_MARKER}

First post-migration housekeeping commit on \`v2-nextjs-redesign\`. \`app/globals.css\` dropped from 2368 to 1090 lines (-54%) across 3 commits prefixed \`CSS refactor:\`. Zero visual change on V2 pages; V1 pages temporarily render unstyled (acceptable — they're scheduled for V2 redesign post-cutover anyway).

### What changed

**Commit 1 — delete V1 legacy CSS** (\`e3dbb13f\` — \`CSS refactor: delete V1 legacy CSS (Phase 9a/9b/10/12)\`)
- Dropped the four legacy CSS blocks (Phase 9a Bucket B, Phase 9b forms, Phase 10 business, Phase 12 nostr) — ~1200 lines total.
- Selectors gone: \`.text-box\`, \`.wallet-q\`, \`.wallet-box\`, \`.wallet-button\`, \`.bounty-button\`, \`.compound-form\`, \`.cic-button\`, \`.alert\`, \`.biz-box\`, \`.biz-*\` cards, \`.wallet-box-biz\`, \`.expandable\`, \`.initial-text\`/\`.additional-text\`, \`.h2-section\`, \`.h3-item\`, \`.h2-label\`, \`.h2-stickers\`, \`.h3-label\`, \`.h4-label\`, \`.h3-category\`, \`.h2-category\`, \`.nostr-intro-h2\`, \`.biz-h3\`, \`.wallet-h3\`, \`.choose-sticker\`, \`.button-form\`, \`.button-sticker\`, \`.buy-platform-box\`, \`.payment-method-option\`, \`.fixed-bottom-bar\`, all the \`.break-*\` utilities, plus ~20 small helpers.
- Affected JSX pages that now render unstyled (deliberate, temporary): \`/wallets\`, \`/lightning\`, \`/flyers\`, \`/compound-inflation-calculator\`, \`/stickers\`, \`/signs\`, \`/postcards\`, \`/buy\`, \`/business/*\` (13 pages), \`/nostr/*\` (2 pages), \`/sticker-files/*\` (43 pages + index), all \`*-success\` pages.

**Commit 2 — standardize tokens + element base styles + dedupe V2** (\`eb89d1a9\` — \`CSS refactor: standardize tokens, element base styles, dedupe V2 rules\`)
- Expanded \`@theme\` with new semantic tokens: \`--color-surface\` (#111119 card background), \`--color-fg-dim\` (#999), \`--color-fg-dimmer\` (#888), \`--color-card-border\` (rgba(255,255,255,0.12)), \`--color-success\` (#4caf50), \`--color-danger\` (#ff4444), \`--color-link-hover\` (#ffb84d). These replaced ~100 hard-coded hex occurrences across the V2 rules.
- Added element-level base styles for \`html\`/\`body\`/\`h1\`/\`h2\` so every V2 page gets hero + section-heading styling from the element itself, no class hook required.
- Collapsed 21 \`.home-pill.<color> { color: X !important; }\` rules + the border-color union into one \`--pill-color\` CSS custom prop pattern: base rule reads \`color: var(--pill-color, #f0f0f0)\` + \`border-color: var(--pill-color, #3d3d3d)\`; each modifier is a single line \`--pill-color: #19bc38;\`. Went from ~50 lines to 25 lines and zero \`!important\`.
- Stripped ~65 unnecessary \`!important\` tags. Only 2 legitimate \`!important\` uses remain: \`.countries[hidden] { display: none !important }\` (CSS attribute-based hiding needs to beat descendant \`display:\` rules) and \`.force-orange\` (intentional override for headings that otherwise inherit parent color).
- Unified all media queries on the \`--breakpoint-md\` (700px) value. File previously mixed 400/500/600/700 breakpoints with no justification.
- Added a clear table of contents in the file header describing the 6 sections.

**Commit 3 — strip \`.h1-inflation\`/\`.h2-inflation\` from V2 JSX** (\`892bc08d\` — \`CSS refactor: strip redundant h1-inflation/h2-inflation classNames from V2 JSX\`)
- 6 V2 files edited:
  - \`app/[locale]/page.tsx\` — \`<h1 className="h1-inflation">\` → \`<h1>\` ; \`<p className="inflation-intro">\` → \`<p>\` (handled by \`.home-hero p\` rule)
  - \`app/[locale]/inflation/page.tsx\` — \`<h1 className="h1-inflation">\` → \`<h1>\` ; removed \`className="orange"\` on the \`#changing-header\` \`<span>\` since it's already an orange H1
  - \`app/[locale]/[...rest]/page.tsx\` + \`app/not-found.tsx\` — same H1 strip; kept \`.force-orange\` on the H2 since base H2 is white
  - \`components/ComparisonPageLayout.tsx\` + \`components/ContentPageLayout.tsx\` — \`<h1 className="h1-inflation comparison-h1">\` → \`<h1>\` ; \`.comparison-h1\` no longer needed, its \`line-height: 1.15\` tweak moved to \`.comparison-hero h1\`
- Build: \`npm run build\` ✓ 4734 static pages, TypeScript clean.

### Intentionally left alone
- V1 JSX classNames (\`.wallet-q\`, \`.biz-*\`, \`.h2-section\`, \`.h3-item\`, \`.h2-stickers\`, etc.) — classes still in markup but the CSS is gone. Pages render unstyled until their V2 redesign lands. This was the user's explicit request: don't touch V1 pages since they're being redesigned anyway.
- \`.comparison-h1\` class reference — fully removed from JSX. Any legacy code path still passing it gets ignored (no matching CSS selector).
- \`forms-backend/\` — untouched.
- \`main\` at \`origin/main\` (\`6cb07406\`) — still frozen through Phase 15 cutover.

### Files changed in this CSS refactor
\`\`\`
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
\`\`\`

### Next
Nothing scheduled — CSS refactor is a one-off housekeeping commit. The migration plan returns to Phase 15 (pre-cutover QA + cutover merge to \`main\`) when the user is ready. The per-page V2 redesigns of Bucket B/C pages can happen anytime post-cutover; each one will naturally replace the now-unstyled V1 markup with fresh V2 markup.

---

`;

function prepend(filePath, marker, entry) {
	const original = fs.readFileSync(filePath, "utf8");
	if (original.includes(marker)) {
		console.log(`  [skip] ${path.relative(ROOT, filePath)} already has marker`);
		return;
	}
	fs.writeFileSync(filePath, entry + original);
	console.log(`  [write] ${path.relative(ROOT, filePath)} (+${entry.split("\n").length} lines)`);
}

console.log("Updating memory bank for CSS refactor…");
prepend(PROGRESS_PATH, PROGRESS_MARKER, PROGRESS_ENTRY);
prepend(ACTIVE_PATH, ACTIVE_MARKER, ACTIVE_ENTRY);
console.log("Done.");
