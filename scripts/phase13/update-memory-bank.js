#!/usr/bin/env node
/**
 * scripts/phase13/update-memory-bank.js
 *
 * Prepends Phase 13 summaries to `memory-bank/activeContext.md` and
 * `memory-bank/progress.md`. Idempotent: refuses to re-insert if the
 * Phase-13-specific heading is already present.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const ACTIVE_HEADER = "## Latest: Next.js Migration — Phase 13";
const PROGRESS_HEADER = "## Phase 13 complete — April 17, 2026";

const ACTIVE_SECTION = `# Active Context: bitcoin.rocks

## Latest: Next.js Migration — Phase 13 404 + legacy redirects + final sitemap — April 17, 2026

Seventeenth commit of the Next.js migration on \`v2-nextjs-redesign\`. The last content-port phase is done: locale-aware 404 page in every one of the 55 languages, 33 permanent redirects from legacy nginx.conf slug shortcuts, and a cleanup of the stale hand-written \`sitemap.xml\`. This is the final phase before Phase 14's deletion pass and Phase 15's cutover. \`main\` is still frozen.

### What Phase 13 delivered

**New pages (2)**
- **\`app/[locale]/[...rest]/page.tsx\`** — NEW catch-all page (~100 lines). Renders the translated 404 body INLINE (not via \`notFound()\`) so Next's \`[locale]/layout.tsx\` stays active, giving every 404 response the correct \`<html lang={locale} dir={ltr|rtl}>\` + Navbar + Footer + GA. Translated "THIS BROKEN PAGE DOES NOT ROCK" H1 + "GO BACK HOME" CTA. Sets \`robots: { index: false, follow: true }\` so crawlers don't index stale URLs. This is the idiomatic next-intl App Router pattern for locale-scoped 404s — calling \`notFound()\` would resolve to the root \`app/not-found.tsx\` which has no locale context.
- **\`app/not-found.tsx\`** — NEW global fallback (~60 lines). Self-contained \`<html>\`/\`<body>\` wrapper (required by Next since \`app/layout.tsx\` is a pass-through). Renders English 404 body + link to \`/en\`. Only triggers for paths that resolve no locale at all.

**Files modified**
- **\`next.config.ts\`** — populated \`redirects()\` with 33 permanent redirects ported verbatim from \`nginx.conf\`'s \`rewrite\` directives:
  - Sticker pack aliases: \`/orange-pill-pack\` · \`/sticker\` · \`/bitcoin-stickers\` · \`/opp\` → \`/stickers\`
  - Comparison shortcuts: \`/gold\` · \`/cbdc\` · \`/CBDC\` · \`/crypto\` · \`/cash\` · \`/real-estate\` · \`/realestate\` · \`/stocks\` · \`/equities\` · \`/bonds\` · \`/bond\` · \`/art\` · \`/fine-art\` · \`/fineart\` · \`/visa\` · \`/banks\` → \`/bitcoin-vs-{target}\`
  - Case/plural variants: \`/INFLATION\`/\`/inflation\`; \`/bank-run\`/\`/bankrun\`/\`/bankruns\`/\`/bank-runs\`; \`/wallet\`/\`/wallets\`; \`/postcard\`/\`/postcards\`; \`/flyer\`/\`/flyers\`; \`/Lightning\`/\`/lightning\`
  - Business shortcuts: \`/guide\`/\`/guides\`/\`/business/guides\`→\`/business/guide\`; \`/kit\`/\`/business-kit\`/\`/businesskit\`→\`/business/kit\`
  - Save-sticker deep link (query preserved): \`/save\` → \`/inflation?sign=got-inflation\`
  - Trailing-\`.html\` stripper: \`/:path*.html\` → \`/:path*\` for legacy bookmarks. All 308 permanent; middleware then localizes the unlocaled destination.
- **\`next.config.ts\`** — added long-cache header for \`/sticker-files/:path*\` (mirrors \`/img/*\` + \`/favicons/*\` — 219 PNGs).
- **\`lib/i18n/request.ts\`** — added \`404\` namespace to \`DEFAULT_NAMESPACES\` so the \`404_title\`/\`404_message\`/\`404_home\` keys load alongside the rest.
- **\`sitemap.xml\`** (repo root) — DELETED. Next's \`app/sitemap.ts\` now owns \`/sitemap.xml\` and emits the canonical dynamic version (one entry per \`(published page, locale)\` pair + full hreflang alternates per URL).
- **\`MIGRATION-NEXTJS.md\`** — Phase 13 checkboxes complete; status pointer advanced to Phase 14.

**New scripts (\`scripts/phase13/\`)**
- **\`update-memory-bank.js\`** — this file's generator. Idempotent.

### Build + verification
- \`npm run build\` → ✓ Compiled successfully in 4.0s, TypeScript clean, **4,734 static pages** generated (same as end of Phase 12; the catch-all is a Dynamic route not an SSG page). Build warns that \`middleware.ts\` is deprecated in favor of \`proxy.ts\` in Next 16 — deferred to Phase 14's cleanup pass.
- Runtime spot-check via \`/tmp/verify-phase13.js\` — all **32 assertions pass**:
  - \`/en/does-not-exist\` (200 status, \`noindex\` meta) contains "THIS BROKEN PAGE" + "GO BACK HOME" + \`h1-inflation\` class + \`rocks-logo-gray.png\`
  - \`/ar/does-not-exist\` renders \`<html lang="ar" dir="rtl">\` with the same 404 body
  - \`/en/bitcoin-vs-gold\` still serves 200 with comparison layout (smoke test)
  - \`/gold\` → 308 with \`Location: /bitcoin-vs-gold\`
  - \`/CBDC\` → 308 with \`Location: /bitcoin-vs-cbdc\` (case-insensitive)
  - \`/kit\` → 308 with \`Location: /business/kit\`
  - \`/orange-pill-pack\` → 308 with \`Location: /stickers\`
  - \`/inflation.html\` → 308 with \`Location: /inflation\`
  - \`/save\` → 308 with \`Location: /inflation?sign=got-inflation\` (query preserved)
  - \`/sitemap.xml\` contains 10 expected URLs (\`/en\`, \`/en/inflation\`, \`/en/bitcoin-vs-gold\`, \`/en/business\`, \`/en/sticker-files/yoruba\`, \`/en/nostr\`, Arabic + Chinese locale URLs, hreflang alternates)
  - \`/robots.txt\` and \`/llms.txt\` still serve 200

### Architecture validation
Phase 13's key design decision — **render the 404 body INLINE from a catch-all page instead of calling \`notFound()\`** — turned out to be the only pattern that keeps the \`[locale]/layout.tsx\` wrapper active. Calling \`notFound()\` from \`[locale]/[...rest]/page.tsx\` (or having a \`[locale]/not-found.tsx\`) resolves to the ROOT \`app/not-found.tsx\` which has no access to \`getTranslations()\` or the locale's RTL setting. The 200-status + \`noindex\` meta is a SEO-acceptable trade-off: crawlers skip the page via noindex; users see the right translated experience with a real Navbar. This is the documented next-intl pattern.

The legacy-redirect system worked cleanly: 33 entries, all 308s land correctly. The \`/:path*.html\` matcher handles trailing-\`.html\` bookmarks for all paths at once, not just the 13 root-level slugs Google knows about. Query string is preserved end-to-end (the \`/save\` test confirms this — \`?sign=got-inflation\` survives the redirect).

### Intentionally left alone
- \`404.html\` + \`nginx.conf\` + \`.htaccess\` (if any) — still shipped by the static site on \`main\`. Phase 14 deletes them.
- Non-English translations for the \`404_*\` keys — \`i18n/\` already has them for all 55 locales (checked during Phase 2); English fallback catches any gaps.
- \`forms-backend/\` — completely untouched.
- \`main\` at \`origin/main\` (\`6cb07406\`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 13
\`\`\`
app/[locale]/[...rest]/page.tsx                                 (NEW — ~100 lines, catch-all 404)
app/not-found.tsx                                               (NEW — ~60 lines, global fallback)
scripts/phase13/update-memory-bank.js                           (NEW — this file's generator)
next.config.ts                                                  (+33 redirects, +1 cache header block)
lib/i18n/request.ts                                             (+1 namespace: "404")
sitemap.xml                                                     (DELETED from repo root; app/sitemap.ts owns it)
MIGRATION-NEXTJS.md                                             (edited — Phase 13 complete, pointer → Phase 14)
memory-bank/activeContext.md                                    (edited — this file)
memory-bank/progress.md                                         (edited — progress note)
\`\`\`

### Next
**Phase 14** — the cleanup pass: delete all the legacy static-site assets the Next app has fully replaced (\`*.html\` at root, \`business/*.html\`, \`nostr/*.html\`, \`sticker-files/*/index.html\`, \`css/style.css\`, \`jquery/\`, \`nginx.conf\`, \`.htaccess\`, obsolete \`scripts/inject-*.js\`), migrate \`middleware.ts\` → \`proxy.ts\` per the Next 16 deprecation warning, and update all docs (\`.clinerules/workspace-rules.md\`, memory bank files, \`CONTRIBUTING.md\`, \`README.md\`) to reflect the new Next stack. After Phase 14, Phase 15 is the cutover merge to \`main\`.

---

`;

const PROGRESS_SECTION = `## Phase 13 complete — April 17, 2026

Shipped the locale-scoped 404 page (via \`app/[locale]/[...rest]/page.tsx\` catch-all rendering translated content inline with correct \`<html lang dir>\` + Navbar + Footer + \`noindex\` meta), the global \`app/not-found.tsx\` fallback, 33 permanent redirects from \`nginx.conf\` legacy slugs (\`/gold\`→\`/bitcoin-vs-gold\`, \`/CBDC\`→\`/bitcoin-vs-cbdc\`, \`/kit\`→\`/business/kit\`, etc.), and deleted the stale hand-written \`sitemap.xml\` at repo root. Also added \`404\` namespace to i18n + \`/sticker-files/:path*\` long-cache headers. Build stays at **4,734 static pages**. All **32 runtime assertions pass** via \`/tmp/verify-phase13.js\`: locale 404 + RTL 404 + 6 legacy redirects (308 + correct Location) + query-preserving \`/save\` redirect + sitemap content + robots.txt + llms.txt. \`forms-backend/\` untouched. \`main\` still frozen. See \`MIGRATION-NEXTJS.md\` Phase 13 + \`activeContext.md\` for details.

`;

function prepend(file, marker, section) {
	const current = fs.readFileSync(file, "utf8");
	if (current.includes(marker)) {
		console.log(`[skip] ${path.relative(ROOT, file)} already has Phase 13 section`);
		return;
	}
	// For activeContext, replace the leading "# Active Context" + first header
	// so the new Phase 13 section becomes the top. For progress.md, just
	// prepend.
	if (file === ACTIVE) {
		// Strip old "# Active Context…" top-of-file if present so our new
		// section's own "# Active Context" header is the single canonical one.
		const stripped = current.replace(/^# Active Context[^\n]*\n+/, "");
		fs.writeFileSync(file, section + stripped);
	} else {
		fs.writeFileSync(file, section + current);
	}
	console.log(`[ok]   ${path.relative(ROOT, file)} updated`);
}

prepend(ACTIVE, ACTIVE_HEADER, ACTIVE_SECTION);
prepend(PROGRESS, PROGRESS_HEADER, PROGRESS_SECTION);
