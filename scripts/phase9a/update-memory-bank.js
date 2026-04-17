#!/usr/bin/env node
/**
 * Phase 9a — Update MIGRATION-NEXTJS.md + memory-bank/activeContext.md + progress.md.
 *
 * 1. MIGRATION-NEXTJS.md: check off Phase 9a boxes; advance status pointer.
 * 2. activeContext.md: prepend a new "Latest: Phase 9a" section.
 * 3. progress.md: append a Phase 9a progress note.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");

// ────────────────────────────────────────────────────────────────
// 1. MIGRATION-NEXTJS.md
// ────────────────────────────────────────────────────────────────
const migPath = path.join(ROOT, "MIGRATION-NEXTJS.md");
let migration = fs.readFileSync(migPath, "utf8");

// Update status line
migration = migration.replace(
	/^\*\*Status:\*\* Phase 8 complete · Awaiting Phase 9a \(wallets, lightning, flyers, calculator-solo\)$/m,
	"**Status:** Phase 9a complete · Awaiting Phase 9b (sticker/sign/postcard forms + buy-flow + successes)",
);

// Update branch line (append Phase 9a)
migration = migration.replace(
	/(Phase 8 about \+ get-involved)\)/,
	"$1 + Phase 9a wallets/lightning/flyers/compound-inflation-calculator)",
);

// Update current position pointer
migration = migration.replace(
	/\*\*Current position pointer:\*\* Phase 8 done → starting Phase 9a next\./,
	"**Current position pointer:** Phase 9a done → starting Phase 9b next.",
);

// Check off the 5 Phase 9a boxes
migration = migration.replace(
	/### Phase 9a — Educational \/ info Bucket B\n- \[ \] `app\/\[locale\]\/wallets\/page\.tsx` ← faithful Tailwind port \(997 lines — largest V1 page\)\n- \[ \] `app\/\[locale\]\/lightning\/page\.tsx` ← faithful Tailwind port\n- \[ \] `app\/\[locale\]\/flyers\/page\.tsx` ← faithful Tailwind port\n- \[ \] `app\/\[locale\]\/compound-inflation-calculator\/page\.tsx` ← faithful \(uses Phase 6b calculator solo variant\)\n- \[ \] Commit: "Phase 9a: wallets, lightning, flyers, calculator-solo"/,
	`### Phase 9a — Educational / info Bucket B ✅ COMPLETE

- [x] \`app/[locale]/wallets/page.tsx\` ← faithful Tailwind port (largest V1 page). Ports the 3-accordion intro + 6 wallet-card grid (Blockstream Green/Jade, Coldcard MK5/Q, Foundation Passport, SeedSigner). Inline \`toggleAccordion()\` JS replaced by \`<WalletAccordion>\` Client Component. All 3 Get Started CTAs + publisher attribution preserved.
- [x] \`app/[locale]/lightning/page.tsx\` ← faithful Tailwind port. Ports the single-accordion intro + 3 wallet-card grid (Phoenix, Breez, Wallet of Satoshi custodial). Reuses \`<WalletAccordion>\`.
- [x] \`app/[locale]/flyers/page.tsx\` ← faithful Tailwind port. Ports the print/download flyer hero + share-on-nostr section + Get Started CTAs. Inline \`printFlyer()\` JS replaced by \`<PrintFlyerButton>\` Client Component (creates hidden iframe + \`contentWindow.print()\` on load).
- [x] \`app/[locale]/compound-inflation-calculator/page.tsx\` ← faithful port wrapping the Phase 6b \`<CompoundInflationCalculatorSolo>\` Client Component. V1 intro + calculator + "What can I do about inflation?" CTA preserved.
- [x] \`components/WalletAccordion.tsx\` — NEW Client Component (~55 lines). Orange-pill header with ▼ arrow that toggles the \`active\` / \`open\` classes on click + keyboard (Enter/Space). Keeps the server-rendered body content intact — only the visibility state is client-side.
- [x] \`components/PrintFlyerButton.tsx\` — NEW Client Component (~55 lines). Imperative hidden-iframe print, graceful fallback on cross-origin block.
- [x] \`scripts/phase9a/append-bucket-b-css.js\` — idempotent Node helper that appended ~545 lines of V1 legacy CSS to \`app/globals.css\` (\`.text-box\`, \`.wallet-q\`, \`.alert\`, \`.wallet-box\`, \`.bounty-button\`, \`.compound-form\`, \`.cic-button\`, \`.break-*\` utilities, \`.h2-section\` / \`.h3-item\` / \`.h2-label\` V1 headings). Ported verbatim from \`css/style.css\` with tabs preserved.
- [x] \`scripts/phase9a/fix-schema-await.js\` — idempotent helper that patched 3 of the 4 new pages to \`await buildArticleSchema()\` (it's \`async\` — a forgotten \`await\` caused \`<JsonLd>\` to serialize the Promise as \`{}\`). Caught + fixed before commit.
- [x] \`lib/i18n/request.ts\` — added \`wallets\`, \`lightning\`, \`flyers\`, \`compound-inflation-calculator\` to \`DEFAULT_NAMESPACES\`.
- [x] \`lib/pages.ts\` — flipped \`published: true\` for all 4 slugs; sitemap now emits **220 new URLs** (55 locales × 4 slugs).
- [x] \`npm run build\` → ✓ compiled, TypeScript clean, **1049 static pages** (55 locales × 19 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- [x] \`npm run start\` + \`/tmp/verify-phase9a.js\` — all 6 assertions pass: \`/en/wallets\` (192 KB, 11 markers including \`wallet-q\`, \`wallet-box\`, \`BLOCKSTREAM GREEN\`, \`COLDCARD MK5\`, \`SEEDSIGNER\`, Article + BreadcrumbList JSON-LD, \`wallet-accordion-content\`, \`alert\`, \`publisher-attribution\`), \`/en/lightning\` (177 KB, 8 markers including \`PHOENIX\`/\`BREEZ\`/\`WALLET OF SATOSHI\`), \`/en/flyers\` (168 KB, 9 markers including print/download buttons + share-on-nostr), \`/en/compound-inflation-calculator\` (166 KB, 8 markers including form inputs + calculate button + "Opt Out of Inflation with Bitcoin" CTA), \`/ar/wallets\` → \`<html lang="ar" dir="rtl">\`, \`/sitemap.xml\` contains all 4 new English URLs.
- [x] Commit: "Phase 9a: wallets, lightning, flyers, calculator-solo"`,
);

fs.writeFileSync(migPath, migration);
console.log("✓ MIGRATION-NEXTJS.md updated");

// ────────────────────────────────────────────────────────────────
// 2. memory-bank/activeContext.md
// ────────────────────────────────────────────────────────────────
const acPath = path.join(ROOT, "memory-bank", "activeContext.md");
let activeContext = fs.readFileSync(acPath, "utf8");

const newSection = `# Active Context: bitcoin.rocks

## Latest: Next.js Migration — Phase 9a Bucket B Tailwind ports (wallets + lightning + flyers + compound-inflation-calculator) — April 17, 2026

Twelfth commit of the Next.js migration on \`v2-nextjs-redesign\`. The four Bucket B educational pages are now live with a faithful V1 design port (deferred to post-cutover for V2 redesign). Two new small Client Components (\`WalletAccordion\`, \`PrintFlyerButton\`) replace the inline JS that made the legacy pages interactive. \`main\` is still frozen.

### What Phase 9a delivered

**New Client Components (\`components/\`)**
- **\`WalletAccordion.tsx\`** — ~55 lines. Ports the \`toggleAccordion()\` inline JS from \`wallets.html\` + \`lightning.html\`. Orange-pill header with ▼ arrow rotates 180° when open; body content cross-fades via \`max-height\` transition. Keyboard-accessible (Enter/Space). \`question\` + \`children\` props only — no translation lookups client-side, parent server component passes pre-translated strings.
- **\`PrintFlyerButton.tsx\`** — ~55 lines. Ports \`printFlyer()\` from \`flyers.html\`. Creates a hidden iframe pointing at the flyer PDF, calls \`contentWindow.print()\` on load, fails silently on cross-origin block. Keyboard-accessible.

**New pages (4)**
- **\`app/[locale]/wallets/page.tsx\`** — V1 \`wallets.html\` (997 lines → ~450-line page.tsx). Three \`<WalletAccordion>\`s (self-custody, hot/cold, recovery phrase) + 6 wallet cards in 3 rows of 2. Inline \`<WalletCard>\` helper component factors out per-card boilerplate (image, custodial/temperature alert chips, feature-line list, learn-more button).
- **\`app/[locale]/lightning/page.tsx\`** — V1 \`lightning.html\` (457 lines → ~300-line page.tsx). Single \`<WalletAccordion>\` + 3 Lightning wallet cards (Phoenix, Breez non-custodial on row 1; Wallet of Satoshi custodial solo on row 2). Inline \`<LightningCard>\` helper (slightly different shape than wallet cards — no hot/cold alert).
- **\`app/[locale]/flyers/page.tsx\`** — V1 \`flyers.html\` (360 lines → ~250-line page.tsx). Print + download flyer buttons via \`<PrintFlyerButton>\` + \`<a download>\`. Share-on-Nostr section with two bounty-style buttons. Full-size hero image with \`marginTop: -200px\` legacy offset preserved.
- **\`app/[locale]/compound-inflation-calculator/page.tsx\`** — V1 \`compound-inflation-calculator.html\` (302 lines → ~170-line page.tsx). V1 intro text + the Phase 6b \`<CompoundInflationCalculatorSolo>\` Client Component + the "What can I do about inflation?" CTA pointing at \`/inflation?link=calculator\`.

**Files modified**
- **\`lib/i18n/request.ts\`** — added 4 new namespaces to \`DEFAULT_NAMESPACES\`. Namespaces cost ~0 per locale per build (read-once in-memory cache).
- **\`lib/pages.ts\`** — flipped \`published: true\` for all 4 slugs; sitemap now emits **220 new URLs** (55 locales × 4 slugs).
- **\`app/globals.css\`** — appended ~545 lines of V1 legacy CSS via \`scripts/phase9a/append-bucket-b-css.js\` (idempotent, sentinel-marker guarded). Ported verbatim from \`css/style.css\`: \`.text-box\` card variants (top/middle/bottom/solo/intro), \`.wallet-q\` / \`.wallet-accordion-content\`, \`.alert\` chips, \`.wallet-box\` / \`.wallet-button\`, \`.bounty-button\`, \`.compound-form\` / \`.cic-button\`, \`.break-*\` utilities, \`.h2-section\` / \`.h3-item\` / \`.h2-label\` V1 headings, \`.orange-link\`, \`.looking-box\`, and all the other class names the V1 HTML depends on. Tabs preserved.
- **\`MIGRATION-NEXTJS.md\`** — Phase 9a checkboxes complete; status pointer advanced to Phase 9b.

**New utilities**
- **\`scripts/phase9a/append-bucket-b-css.js\`** — idempotent CSS appender, same pattern as \`scripts/append-comparison-css.js\` from Phase 7a.
- **\`scripts/phase9a/fix-schema-await.js\`** — idempotent regex-based patcher that caught a forgotten \`await\` on \`buildArticleSchema()\`. Initial runtime verify showed \`<script type="application/ld+json">\` emitting \`{}\` (the Promise serialized as an empty object) instead of the full Article schema. The script promotes the schema construction out of the JSX and awaits it into a local. Re-running the script is a no-op on already-patched files.

### Build + verification
- \`npm run build\` → ✓ compiled, TypeScript clean, **1049 static pages** (55 locales × 19 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy).
- Runtime spot-check via \`/tmp/verify-phase9a.js\`: all 6 assertions pass. \`/en/wallets\` (192 KB) contains \`wallet-q\` accordion headers, \`wallet-box\` grid, all 6 wallet brand names in H2s, Article + BreadcrumbList JSON-LD, \`wallet-accordion-content\` bodies, \`alert\` chips, publisher attribution. \`/en/lightning\` (177 KB) contains the single accordion + PHOENIX/BREEZ/WALLET OF SATOSHI cards + schemas. \`/en/flyers\` (168 KB) contains PRINT & POST header + BITCOIN FLYERS subtitle + DOWNLOAD FLYER/PRINT FLYER/SHARE ON NOSTR buttons + \`bounty-button\` class + schemas. \`/en/compound-inflation-calculator\` (166 KB) contains the compound form, all three inputs, \`cic-button\`, and the "Opt Out of Inflation with Bitcoin" CTA. \`/ar/wallets\` renders \`<html lang="ar" dir="rtl">\` correctly. \`/sitemap.xml\` contains all 4 new English URLs.

### Architecture validation
Phase 9a confirms the faithful-port approach scales: 4 Bucket B pages in one phase with two new small Client Components and one CSS append step. The V1 CSS was decoupled from the new Next tree via an idempotent Node script, so re-running the build still works; and the schema-await bug was caught by runtime verify before commit. The \`<WalletAccordion>\` component demonstrates the ideal client-component contract: zero translation lookups in the client bundle, parent passes pre-translated \`question\` + already-rendered \`children\`, and only the open/closed state is hydrated.

### Intentionally left alone
- \`wallets.html\`, \`lightning.html\`, \`flyers.html\`, \`compound-inflation-calculator.html\` at repo root — still shipped by the static site on \`main\`. Phase 14 deletes them.
- V2 redesign of these 4 pages — deferred to post-cutover queue (see \`MIGRATION-NEXTJS.md\` "Post-migration Bucket B redesign queue" section).
- \`main\` at \`origin/main\` (\`6cb07406\`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 9a
\`\`\`
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
\`\`\`

### Next
**Phase 9b** — form pages + successes: \`stickers\`, \`signs\`, \`postcards\`, \`buy\`, plus the 4 \`*-success\` pages. Requires porting \`jquery/sticker-picker.js\` (\`<StickerPicker>\`), \`jquery/country-selector-forms.js\` (\`<CountrySelectorForm>\`), and \`jquery/buy-flow.js\` (\`<BuyFlow>\` multi-step wizard). Forms POST to existing \`forms-backend/\` endpoints — no backend changes. \`main\` stays frozen.

---

`;

// Replace the "# Active Context: bitcoin.rocks\n\n## Latest:" intro with the new section + keep the old one below
activeContext = activeContext.replace(
	/^# Active Context: bitcoin\.rocks\n\n## Latest:/,
	newSection + "## Previous:",
);
fs.writeFileSync(acPath, activeContext);
console.log("✓ memory-bank/activeContext.md updated");

// ────────────────────────────────────────────────────────────────
// 3. memory-bank/progress.md
// ────────────────────────────────────────────────────────────────
const progPath = path.join(ROOT, "memory-bank", "progress.md");
let progress = fs.readFileSync(progPath, "utf8");

const note = `
## Phase 9a (Next.js migration) — April 17, 2026

Four Bucket B educational pages shipped with a faithful V1 Tailwind port: \`/wallets\` (the largest V1 page at 997 lines), \`/lightning\`, \`/flyers\`, and \`/compound-inflation-calculator\`. Added 2 small Client Components (\`WalletAccordion\` for the toggle-accordion UX on wallets/lightning, \`PrintFlyerButton\` for the print-via-iframe UX on flyers). Ported ~545 lines of V1 legacy CSS from \`css/style.css\` into \`app/globals.css\` via an idempotent Node script. All 4 \`lib/pages.ts\` entries flipped to \`published: true\` — sitemap now emits 220 new URLs (55 locales × 4 slugs). Build is clean: **1049 static pages** generated (55 × 19 routes + sitemap/robots/404/middleware). Runtime verify: all 6 assertions pass; caught + fixed one forgotten \`await\` on \`buildArticleSchema()\` before commit. V2 redesign of these 4 pages deferred to post-cutover queue; \`main\` still frozen.
`;

progress = progress.trimEnd() + "\n" + note;
fs.writeFileSync(progPath, progress);
console.log("✓ memory-bank/progress.md updated");

console.log("\nAll memory-bank updates complete.");
