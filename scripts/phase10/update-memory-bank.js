#!/usr/bin/env node
/**
 * Phase 10 — updates memory-bank/activeContext.md + memory-bank/progress.md
 * with a summary of the Phase 10 business section port.
 *
 * Idempotent: checks for a sentinel string before prepending. Running twice
 * produces no additional writes.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "../..");
const ACTIVE_CONTEXT = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const ACTIVE_SENTINEL = "## Latest: Next.js Migration — Phase 10 Business section";
const PROGRESS_SENTINEL = "## Phase 10 complete — April 17, 2026";

const ACTIVE_ENTRY = `# Active Context: bitcoin.rocks

## Latest: Next.js Migration — Phase 10 Business section (13 pages) — April 17, 2026

Fourteenth commit of the Next.js migration on \`v2-nextjs-redesign\`. The entire \`/business\` section — the 13-page Bitcoin Business Kit — is now live as faithful Tailwind ports with V2 redesign deferred. \`main\` is still frozen.

### What Phase 10 delivered

**New infrastructure (\`components/\` + \`lib/business/\`)**
- **\`components/BusinessPageShell.tsx\`** — Server Component (~40 lines). Shared hero + publisher-attribution wrapper that every \`business/*\` page uses. Emits the Phase 4 \`buildReviewedAccuracyHtml()\` badge.
- **\`components/BusinessResourceCards.tsx\`** — Server Component (~120 lines). Reusable card grid with \`exclude\` prop + \`showHeader\` flag. Emits Learn / Guide / Accounting / FAQ / Wallets / Stickers / Maps / Kit CTAs with unique color classes matching the legacy \`.biz-learn\`/\`.biz-guide\`/etc. pattern. Used on 10 of the 13 business pages.
- **\`components/BusinessWalletCard.tsx\`** — Server Component (~80 lines). Renders a single wallet recommendation (image / brand / feature list / Get Wallet button) inside the legacy \`wallet-box-biz\` shell. Used 9× across \`/business/wallets\`.
- **\`lib/business/metadata.ts\`** — Shared \`buildBusinessMetadata()\` helper. Each page's \`generateMetadata()\` is an ~8-line wrapper (same pattern as \`lib/comparisons/metadata.ts\`). Emits title, description, OpenGraph article card, Twitter \`summary_large_image\`, full 55-locale hreflang alternates.
- **\`components/CountryFormSelector.tsx\`** — extended from Phase 9b with \`placeholderLabel\` + typed \`options\` array so business stickers/kit forms can drive it the same way as the public-facing Phase 9b forms.

**New pages (13)**
All pages follow the pattern: \`BusinessPageShell\` + JSON-LD (Article + BreadcrumbList) + page-specific body + \`BusinessResourceCards\` (except success pages).
- **\`/business\`** — hand-authored. Hero H1 + payment-chart image + 4 benefit sections + \`BusinessResourceCards\` (exclude "learn") + "Print your own Business Kit" standalone CTA.
- **\`/business/why\`** — 4 sections: no inflation / no bank runs / permissionless / building a better world. Localized inline links to \`/inflation\`, \`/bank-runs\`, voteforbetter.money.
- **\`/business/faq\`** — 9 Q&A sections with cross-links to \`/business/wallets\`, \`/business/stickers\`, \`/business/maps\`.
- **\`/business/guide\`** — hero + \`BusinessResourceCards\` grid (exclude "faq"/"kit") + FAQ CTA at the bottom.
- **\`/business/accounting\`** — 4 sections: cost basis / calculating price / ledger entries / professional help. External links to QuickBooks/BlockPath, Satoshi Pacioli, CoinGecko.
- **\`/business/wallets\`** — 4 collapsible \`WalletAccordion\` categories (sole trader / multiple employees / online / invoicing) × 1-3 \`BusinessWalletCard\` recommendations each. 6 unique wallets (Square, Breez, OpenNode, IBEX Pay, BTCPay Server, Zaprite) across 9 total card positions.
- **\`/business/stickers\`** — hero + \`CountryFormSelector\` (USA / Canada / Print). USA+Canada reveal \`StickerAddressForm\` (variant="usa"/"canada"). Print reveals English sticker-files link + 43-language request form. Cloudflare Turnstile + \`forms-backend/submit/business-stickers-*\` action URLs.
- **\`/business/maps\`** — BTCMap listing form with btcmap.org external link + Turnstile + \`forms-backend/submit/business-maps\`.
- **\`/business/kit\`** — hero + business-kit hero image + \`CountryFormSelector\` (USA / Canada / Print) wrapping \`StickerAddressForm\` + English pamphlet link.
- **\`/business/kit-success\`** + **\`/business/maps-success\`** + **\`/business/sticker-success\`** + **\`/business/sticker-language-success\`** — 4 success pages with "SUCCESS!" banner + thank-you message + \`robots: { index: false }\`.

**New scripts (\`scripts/phase10/\`)**
- **\`create-business-pages.js\`** — generator for 12 of the 13 pages (all except the hand-authored \`/business/page.tsx\`). Each page is 100% regenerable.
- **\`append-business-css.js\`** — idempotent; appends ~220 lines of legacy \`.biz-*\` / \`.wallet-box-biz\` / \`.bbk-*\` CSS to \`app/globals.css\`.
- **\`wire-and-publish.js\`** — idempotent; adds 13 Phase 10 namespaces to \`DEFAULT_NAMESPACES\` in \`lib/i18n/request.ts\` and flips \`published: true\` on 13 slugs in \`lib/pages.ts\`.
- **\`update-memory-bank.js\`** — this file's generator (you are reading its output).

**Files modified**
- **\`lib/i18n/request.ts\`** — added 13 new namespaces to \`DEFAULT_NAMESPACES\`.
- **\`lib/pages.ts\`** — flipped \`published: true\` for 13 slugs; sitemap now emits **715 new URLs** (55 locales × 13 slugs).
- **\`app/globals.css\`** — appended ~220 lines of legacy business-specific CSS via the append script.
- **\`components/CountryFormSelector.tsx\`** — extended with \`placeholderLabel\` + typed \`options\` array.
- **\`public/business/files/\`** + **\`public/business/sticker-files/\`** — copied from \`business/files/\` + \`business/sticker-files/\` (bbk-pamphlet-exterior/interior.png + bbk-sticker-english.png + English subdirectories + their \`index.html\` listings).
- **\`MIGRATION-NEXTJS.md\`** — Phase 10 checkboxes complete; status pointer advanced to Phase 11.

### Build + verification
- \`npm run build\` → ✓ Compiled successfully in 4.2s, TypeScript clean, **2204 static pages** generated (55 locales × 40 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Up from 1489 at end of Phase 9b.
- Runtime spot-check via \`/tmp/verify-phase10.js\`: all **14 assertions pass**:
  - \`/en/business\` (196 KB) — "BITCOIN IS GOOD FOR BUSINESS" + 4 benefit headings + \`biz-box\`/\`biz-button\` + Article + BreadcrumbList JSON-LD + reviewed-badge.
  - \`/en/business/why\` (199 KB) — "BITCOIN IS GOOD FOR YOU TOO" + all 4 section H3s + schemas.
  - \`/en/business/faq\` (206 KB) — first 3 Q&A headings + Article schema.
  - \`/en/business/guide\` (192 KB) — "READY TO ACCEPT BITCOIN" + biz-box cards.
  - \`/en/business/accounting\` (204 KB) — "BITCOIN ACCOUNTING GUIDE" + "TRACKING YOUR COST BASIS" + Satoshi Pacioli link.
  - \`/en/business/wallets\` (215 KB) — "GET A FREE BITCOIN WALLET" + all 6 wallet brand names (SQUARE, BREEZ, OPEN NODE, IBEX PAY, BTCPAY SERVER, ZAPRITE).
  - \`/en/business/stickers\` (204 KB) — "BITCOIN ACCEPTED HERE" + all 3 country IDs + Cloudflare Turnstile.
  - \`/en/business/maps\` (196 KB) — "GET LISTED ON BITCOIN MERCHANT MAPS" + btcmap.org link + \`forms-backend/submit/business-maps\` action URL.
  - \`/en/business/kit\` (201 KB) — "PRINT YOUR OWN BITCOIN BUSINESS KIT" + all 3 country IDs.
  - 4 success pages (193-195 KB each) — "SUCCESS!" + \`h2-stickers\` + relevant post-submission messages.
  - \`/ar/business\` renders \`<html lang="ar" dir="rtl">\` correctly.

### Architecture validation
Phase 10 confirms the "shell + reusable card grid + per-page body" composition scales to 13 pages in a single phase. The \`BusinessResourceCards\` component was the key abstraction — 10 of the 13 pages end with it, each passing a different \`exclude\` array so the grid never links to its own page. The page generator script produced 12 pages from typed page-definition objects; the one hand-authored page (\`/business\`) only needed the unique benefit-section layout. Forms wire straight into \`forms-backend/\` — no backend changes.

### Intentionally left alone
- \`business/*.html\` files + \`jquery/sticker-picker.js\` + \`jquery/country-selector-forms.js\` — still shipped by the static site on \`main\`. Phase 14 deletes them.
- V2 redesign of the 13 business pages — deferred to post-cutover queue.
- \`forms-backend/\` — completely untouched. All business-side forms POST to existing \`/submit/business-*\` endpoints with the existing Turnstile site-key \`0x4AAAAAAClzj7R6NrkNgcsP\`.
- \`main\` at \`origin/main\` (\`6cb07406\`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 10
\`\`\`
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
\`\`\`

### Next
**Phase 11** — \`/sticker-files\` section. Dynamic route \`app/[locale]/sticker-files/[lang]/page.tsx\` driven by the 43-language list in \`lib/sticker-languages.ts\`; each page is a directory listing of downloadable PNGs/PDFs for that language. Move \`sticker-files/*/\` static assets into \`public/sticker-files/\`. \`main\` stays frozen.

---

`;

const PROGRESS_ENTRY = `## Phase 10 complete — April 17, 2026

Shipped 13 business-section pages (\`/business\` + \`/business/why\`, \`/business/faq\`, \`/business/guide\`, \`/business/accounting\`, \`/business/wallets\`, \`/business/stickers\`, \`/business/maps\`, \`/business/kit\` + 4 success pages) on \`v2-nextjs-redesign\` as faithful Tailwind ports. Build emits **2204 static pages** (55 locales × 40 routes). 14/14 runtime assertions pass. Phase 10 introduced 3 new reusable Server Components (\`BusinessPageShell\`, \`BusinessResourceCards\`, \`BusinessWalletCard\`) plus a shared \`buildBusinessMetadata()\` helper. 12 of the 13 pages are generated by \`scripts/phase10/create-business-pages.js\` from typed page-definitions; only \`/business\` itself is hand-authored (its unique hero + 4-benefit-section shape doesn't fit the generator template). \`main\` still frozen. See \`MIGRATION-NEXTJS.md\` Phase 10 + \`activeContext.md\` for details.

`;

function prepend(filePath, sentinel, entry) {
	const content = fs.readFileSync(filePath, "utf8");
	if (content.includes(sentinel)) {
		console.log(`✓ ${path.relative(ROOT, filePath)} already contains Phase 10 entry — no change`);
		return false;
	}
	fs.writeFileSync(filePath, entry + content, "utf8");
	console.log(`✓ ${path.relative(ROOT, filePath)} — prepended Phase 10 entry`);
	return true;
}

function main() {
	// activeContext.md: replace the leading `# Active Context` line + following
	// prior-latest block by replacing the first occurrence of `# Active Context:`.
	const ac = fs.readFileSync(ACTIVE_CONTEXT, "utf8");
	if (ac.includes(ACTIVE_SENTINEL)) {
		console.log(`✓ memory-bank/activeContext.md already contains Phase 10 entry — no change`);
	} else {
		// Strip the existing leading `# Active Context: bitcoin.rocks` + blank line so we can replace it.
		const withoutHeader = ac.replace(/^# Active Context: bitcoin\.rocks\s*\n\s*\n/, "");
		fs.writeFileSync(ACTIVE_CONTEXT, ACTIVE_ENTRY + withoutHeader, "utf8");
		console.log(`✓ memory-bank/activeContext.md — prepended Phase 10 entry`);
	}

	prepend(PROGRESS, PROGRESS_SENTINEL, PROGRESS_ENTRY);
}

main();
