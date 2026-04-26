#!/usr/bin/env node
/**
 * Phase 12 — prepend a "Phase 12 complete" section to the top of
 * memory-bank/activeContext.md + memory-bank/progress.md.
 *
 * Idempotent: if the existing file already starts with "## Latest: Next.js
 * Migration — Phase 12" (activeContext.md) or "## Phase 12 complete"
 * (progress.md) the script is a no-op.
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const TODAY = "2026-04-17";

// ─────────────── activeContext.md ───────────────
const ACTIVE = path.join(ROOT, "memory-bank/activeContext.md");
const ACTIVE_MARKER = "## Latest: Next.js Migration — Phase 12 Nostr section";

const ACTIVE_NEW = `# Active Context: bitcoin.rocks

${ACTIVE_MARKER} (/nostr + /nostr/what-is-nostr) — April 17, 2026

Sixteenth commit of the Next.js migration on \`v2-nextjs-redesign\`. The 2-page \`/nostr\` section — the "Escape the Matrix with Nostr" index + "What is Nostr?" sub-page — is now live as a faithful V1 Tailwind port sharing a single \`<NostrPageLayout>\` Server Component. V2 redesign deferred to the post-cutover queue. \`main\` is still frozen.

### What Phase 12 delivered

**New components**
- **\`components/NostrAccordion.tsx\`** — Client Component (~65 lines). Ports the V1 inline \`toggleDiv()\` JS: click on the orange-bg \`.expandable\` wrapper toggles the \`.expanded\` class (which reveals the \`.additional-text\` body via CSS). The DOM walker preserves the legacy behavior that clicks on descendant \`<a>\` tags DO NOT toggle — they follow the link instead. Keyboard-accessible (Enter/Space, with focus-check so links don't get intercepted).
- **\`components/NostrPageLayout.tsx\`** — Server Component (~300 lines). Renders both nostr pages via one tree: hero H1 + "JOIN NOSTR NOW" anchor CTA → 3 intro sections (Protocol/Freedom/Bitcoin is built in) → "DOWNLOAD A FREE CLIENT" H2 → 3 accordions (iPhone: Primal+Damus; Android: Primal+Amethyst; Browser: Iris) → publisher attribution. Accepts \`slug\` / \`titleKey\` / \`headerKey\` / \`descriptionKey\` so the two pages share the component tree — only those four vary.

**New pages (2)**
- **\`app/[locale]/nostr/page.tsx\`** — thin ~65-line page with \`slug: "nostr"\` + \`escape_the_matrix_with_nostr\` meta title. OG image \`meta-nostr-home-v1.png\`.
- **\`app/[locale]/nostr/what-is-nostr/page.tsx\`** — thin ~65-line page with \`slug: "nostr/what-is-nostr"\` + \`what_is_nostr\` meta title. OG image \`meta-nostr-what-v1.png\`. Breadcrumb = Home > Nostr > What is Nostr? (Phase 4's \`buildBreadcrumbTrail()\` already handles the \`nostr/\` subpath rule correctly).

**New scripts (\`scripts/phase12/\`)**
- **\`update-en-json.js\`** — idempotent; adds 1 new meta-description key per English JSON file (\`nostr_page_description\` + \`what_is_nostr_page_description\`) + refreshes \`@metadata.last-updated\` to ${TODAY}. 2 new keys added.
- **\`append-nostr-css.js\`** — idempotent sentinel-marker guarded CSS appender. Adds V1 nostr classes: \`.expandable\` / \`.additional-text\` / \`.expanded .additional-text\`, \`.orange-bg\`, \`.wallet-box-biz img.other\`, \`.wallet-biz-solo\`, \`.h3-category\` (italic uppercase accordion headers), \`.h4-label\` (client-name labels), \`p.initial-text\` / \`p.additional-text\`, plus a new \`.nostr-intro-h2\` that replaces V1's non-semantic \`<h7>\` with a styled \`<h2>\` for a clean heading hierarchy.
- **\`wire-and-publish.js\`** — idempotent helper that adds \`nostr/index\` + \`nostr/what-is-nostr\` namespaces to \`DEFAULT_NAMESPACES\` in \`lib/i18n/request.ts\` and flips \`published: true\` for both slugs in \`lib/pages.ts\`.
- **\`update-memory-bank.js\`** — this file's generator.

**Files modified**
- **\`i18n/en/nostr/index_en.json\`** — added \`nostr_page_description\` + refreshed \`last-updated\`.
- **\`i18n/en/nostr/what-is-nostr_en.json\`** — added \`what_is_nostr_page_description\` + refreshed \`last-updated\`.
- **\`lib/i18n/request.ts\`** — added 2 new namespaces to \`DEFAULT_NAMESPACES\`.
- **\`lib/pages.ts\`** — flipped \`published: true\` for both nostr slugs; sitemap now emits **110 new URLs** (55 locales × 2 slugs).
- **\`app/globals.css\`** — appended ~140 lines of V1 nostr-page CSS via the append script (sentinel-marker guarded).
- **\`MIGRATION-NEXTJS.md\`** — Phase 12 checkboxes complete; status pointer advanced to Phase 13.

### Build + verification
- \`npm run build\` → ✓ Compiled successfully in 3.9s, TypeScript clean, **4734 static pages** generated (55 locales × 42 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Up from 4624 at end of Phase 11. That's **110 new URLs** for Phase 12.
- Runtime spot-check via \`/tmp/verify-phase12.js\` — all **4 assertions pass**:
  - \`/en/nostr\` (216 KB) — "ESCAPE THE MATRIX WITH NOSTR" H1 + "JOIN NOSTR NOW" anchor CTA + all 3 intro headers + "DOWNLOAD A FREE CLIENT TO JOIN NOSTR" + all 3 accordion titles (iPhone / Android / Browser Clients) + all 4 client brand names (PRIMAL, DAMUS, AMETHYST, IRIS) + \`expandable\` class + \`/img/clients/primal.png\` + Article + BreadcrumbList JSON-LD.
  - \`/en/nostr/what-is-nostr\` (218 KB) — "WHAT IS NOSTR?" + all 3 accordion titles + Article + BreadcrumbList (Home > Nostr > What is Nostr?).
  - \`/ar/nostr\` (207 KB) renders \`<html lang="ar" dir="rtl">\` correctly.
  - \`/sitemap.xml\` (26 MB) contains both new English URLs.

### Architecture validation
Phase 12 confirms the "one shared page-layout + two thin pages" approach from earlier phases scales cleanly to the nostr section. The only page-specific variation (H1 text / meta / breadcrumb slug / OG image) is passed in as props — the other 95% of the page (3 intro sections + 3 client-picker accordions + publisher attribution) is server-rendered identically. The \`<NostrAccordion>\` Client Component follows the "zero translation lookups in the client bundle" pattern: the parent renders the translated H3 header + accordion body children on the server, and the client component only owns the open/closed state (~65 lines of JS).

### Intentionally left alone
- \`nostr/index.html\` + \`nostr/what-is-nostr.html\` — still shipped by the static site on \`main\`. Phase 14 deletes them.
- V2 redesign of the nostr section — deferred to post-cutover queue.
- \`forms-backend/\` — untouched (nostr pages have no forms).
- \`main\` at \`origin/main\` (\`6cb07406\`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 12
\`\`\`
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
\`\`\`

### Next
**Phase 13** — 404 page + redirects + final sitemap + cleanup of any legacy URLs from \`nginx.conf\` / \`.htaccess\`. This is the last content-port phase before Phase 14's cleanup + Phase 15's cutover. \`main\` stays frozen.

---

`;

{
	const cur = fs.readFileSync(ACTIVE, "utf8");
	if (cur.includes(ACTIVE_MARKER)) {
		console.log(`[phase12/update-memory-bank] activeContext.md already has Phase 12 section — no changes`);
	} else {
		// Drop the existing top-of-file "# Active Context: bitcoin.rocks" header + its leading newline,
		// so ACTIVE_NEW (which itself starts with that heading) is the new canonical top.
		const stripped = cur.replace(/^# Active Context: bitcoin\.rocks\s*\n\s*\n/, "");
		fs.writeFileSync(ACTIVE, ACTIVE_NEW + stripped, "utf8");
		console.log(`[phase12/update-memory-bank] prepended Phase 12 section to activeContext.md`);
	}
}

// ─────────────── progress.md ───────────────
const PROGRESS = path.join(ROOT, "memory-bank/progress.md");
const PROGRESS_MARKER = "## Phase 12 complete — April 17, 2026";

const PROGRESS_NEW = `${PROGRESS_MARKER}

Shipped 2 nostr-section pages (\`/nostr\` + \`/nostr/what-is-nostr\`) on \`v2-nextjs-redesign\` as a faithful V1 Tailwind port sharing a single \`<NostrPageLayout>\` Server Component. Build emits **4734 static pages** (55 locales × 42 routes + system routes), up from 4624 at end of Phase 11 — that's 110 new URLs (55 × 2 slugs). Phase 12 introduced 2 new components (\`NostrAccordion\` Client + \`NostrPageLayout\` Server) plus idempotent scripts (\`update-en-json\`, \`append-nostr-css\`, \`wire-and-publish\`, \`update-memory-bank\`). All 4 runtime assertions pass: \`/en/nostr\` with all 3 intro sections + 3 accordion titles + 4 client brands (PRIMAL/DAMUS/AMETHYST/IRIS) + Article/BreadcrumbList JSON-LD; \`/en/nostr/what-is-nostr\` with Home > Nostr > What is Nostr? breadcrumb; \`/ar/nostr\` RTL; sitemap contains both new URLs. \`forms-backend/\` untouched (nostr pages have no forms). \`main\` still frozen. See \`MIGRATION-NEXTJS.md\` Phase 12 + \`activeContext.md\` for details.

`;

{
	const cur = fs.readFileSync(PROGRESS, "utf8");
	if (cur.includes(PROGRESS_MARKER)) {
		console.log(`[phase12/update-memory-bank] progress.md already has Phase 12 section — no changes`);
	} else {
		fs.writeFileSync(PROGRESS, PROGRESS_NEW + cur, "utf8");
		console.log(`[phase12/update-memory-bank] prepended Phase 12 section to progress.md`);
	}
}
