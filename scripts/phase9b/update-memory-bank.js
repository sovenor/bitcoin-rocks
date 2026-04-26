#!/usr/bin/env node
/**
 * Phase 9b: prepend a new Phase 9b entry to memory-bank/activeContext.md +
 * progress.md. Idempotent — checks for the Phase 9b section heading and
 * no-ops on repeat runs.
 */

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const ACTIVE = path.join(ROOT, "memory-bank", "activeContext.md");
const PROGRESS = path.join(ROOT, "memory-bank", "progress.md");

const DATE = "April 17, 2026";
const ACTIVE_SENTINEL = "## Latest: Next.js Migration — Phase 9b";

const ACTIVE_ENTRY = `# Active Context: bitcoin.rocks

${ACTIVE_SENTINEL} Form pages + successes (stickers / signs / postcards / buy + 4 successes) — ${DATE}

Thirteenth commit of the Next.js migration on \`v2-nextjs-redesign\`. The 4 form-driven pages + 4 post-submission success pages are now live with faithful V1 Tailwind ports. \`main\` is still frozen.

### What Phase 9b delivered

**New Client Components (\`components/\`)**
- **\`StickerPicker.tsx\`** — ~120 lines. Ports \`jquery/sticker-picker.js\` 1:1: two pack-tile chooser. Click-to-highlight + reveal the matching country selector. Keyboard-accessible (Enter/Space).
- **\`CountryFormSelector.tsx\`** — ~70 lines. Reusable \`<select>\` + N forms. Picking a value reveals the matching \`<div id={VALUE} class="countries" hidden>\`. Used by both packs in \`<StickerPicker>\`.
- **\`BuyFlow.tsx\`** — ~260 lines. Ports \`jquery/buy-flow.js\`: 4-step wizard. Step 1's 52 country buttons are rendered by the server as \`children\`; clicks delegated via \`closest("button.buy-country-button")\` so all buttons stay crawler-visible in the initial HTML. Smooth-scroll between steps with native \`window.scrollTo\`. Step 3 pulls platforms from \`lib/buy/platforms.ts\`.

**New Server Components**
- **\`StickerAddressForm.tsx\`** — ~90 lines. Shared USA/Canada sticker address form. \`variant\` prop picks State+Zip vs Province+PostalCode; \`_gotcha\` honeypot on USA only. Cloudflare Turnstile embedded.

**New lib files**
- **\`lib/buy/platforms.ts\`** — deduped port of the 1366-line \`jquery/buy-flow.js\` map. 5 reusable platform constants (\`STRIKE\`, \`RELAI\`, \`KRAKEN\`, \`SWAN\`, \`RIVER\`, \`COINSQUARE\`, \`ATM\`, \`BISQ\`) composed into 3 sets (\`DEFAULT_SET\`, \`US_SET\`, \`CA_SET\`). Countries point at those sets. Also exports \`BUY_COUNTRIES\` (52 entries with emoji flag + i18n label key).
- **\`lib/sticker-languages.ts\`** — canonical 43-language list (slug + \`common_language_*\` i18n key) for Print-my-own sticker option.

**New pages (8)**
- **\`app/[locale]/stickers/page.tsx\`** — ~370 lines. Hero + 2-pack chooser via \`<StickerPicker>\` wrapping 2 \`<CountryFormSelector>\` instances (USA mail / Canada mail / Print / Bulk). Print option renders the 43-language button grid + sticker-language-request form. Loads Cloudflare Turnstile via \`<Script>\`.
- **\`app/[locale]/signs/page.tsx\`** — ~230 lines. Faithful port; signs program closed so it shows the "out of signs" message + share-on-nostr + 3 Get Started CTAs. Sign-header image + sign-tips image preserved.
- **\`app/[locale]/postcards/page.tsx\`** — ~200 lines. Postcard program closed notice + "GET FREE STICKERS INSTEAD" CTA → \`/stickers\`. 3 historical preview images (front + back each).
- **\`app/[locale]/buy/page.tsx\`** — ~130 lines. Server-renders the 52-country button grid + search input, wraps in \`<BuyFlow>\`. BuyFlow owns Steps 2-4.
- **\`app/[locale]/sticker-success/page.tsx\`** — ~150 lines. Thank-you screen + fixed-bottom-bar promoting \`/flyers\`. \`robots: { index: false }\`.
- **\`app/[locale]/sign-success/page.tsx\`** — ~100 lines. Thank-you kept for future reactivation of the signs program.
- **\`app/[locale]/postcard-success/page.tsx\`** — ~100 lines. Thank-you; program closed.
- **\`app/[locale]/sticker-language-success/page.tsx\`** — ~100 lines. Thank-you after "Request stickers in my language" form.

**New scripts (\`scripts/phase9b/\`)**
- **\`append-form-css.js\`** — idempotent; appends ~450 lines of V1 form CSS to \`app/globals.css\`.
- **\`create-remaining-pages.js\`** — generator for the 6 template-heavy pages (postcards + buy + 4 successes). 100% regenerable — no hand edits.
- **\`flip-published.js\`** — regex-based idempotent flipper for the 8 \`lib/pages.ts\` \`published\` flags.
- **\`update-memory-bank.js\`** — this file's generator (you are reading its output).

**Files modified**
- **\`lib/i18n/request.ts\`** — added 8 new namespaces to \`DEFAULT_NAMESPACES\`.
- **\`lib/pages.ts\`** — flipped \`published: true\` for 8 slugs; sitemap now emits **440 new URLs** (55 locales × 8 slugs).
- **\`app/globals.css\`** — appended ~450 lines of V1 form CSS via \`append-form-css.js\`.
- **\`MIGRATION-NEXTJS.md\`** — Phase 9b checkboxes complete; position pointer → Phase 10.

### Build + verification
- \`npm run build\` → ✓ compiled, TypeScript clean, **1489 static pages** (55 locales × 27 routes + /robots.txt + /sitemap.xml + /_not-found + middleware proxy). Up from 1049 at end of Phase 9a.
- Runtime spot-check via \`/tmp/verify-phase9b.js\` — all 9 assertions pass: \`/en/stickers\` (233 KB) contains \`choose-sticker\` tiles + AFRIKAANS/YORUBA language buttons + Article/BreadcrumbList JSON-LD; \`/en/signs\` (182 KB) contains the out-of-signs message; \`/en/postcards\` (184 KB) contains the program-closed notice; \`/en/buy\` (199 KB) contains all 4 wizard steps + 52 country buttons with \`data-country\` (US/GB/JP spot-checked) + \`#country-search\` input; all 4 success pages contain SUCCESS! + \`h2-stickers\`; \`/ar/stickers\` renders \`<html lang="ar" dir="rtl">\`.

### Architecture validation
Phase 9b confirms the "all content in server HTML, click handlers via delegation" pattern scales well: the 52 buy-country buttons are rendered once by the server (crawler-visible) and \`<BuyFlow>\` attaches one \`click\` listener at the root to delegate to all 52. No \`data-*\` props shuttling from parent state to button props. Same pattern worked for \`<StickerPicker>\` (opacity/border mutations via \`useRef\`) and \`<CountryFormSelector>\` (\`hidden\` attribute toggle). The \`lib/buy/platforms.ts\` dedup also paid off: legacy 1366 lines of country objects collapsed to ~240 lines of 3 shared sets + per-country pointers.

### Intentionally left alone
- \`jquery/sticker-picker.js\`, \`jquery/country-selector-forms.js\`, \`jquery/buy-flow.js\` — still shipped by static site on \`main\`. Phase 14 deletes them.
- V2 redesign of these 8 pages — deferred to post-cutover queue (see \`MIGRATION-NEXTJS.md\` "Post-migration Bucket B redesign queue").
- \`forms-backend/\` — completely untouched. The Next frontend POSTs to existing \`/submit/…\` endpoints exactly as the static site does. Turnstile site-key unchanged.
- \`main\` at \`origin/main\` (\`6cb07406\`) — frozen through Phase 15 cutover.

### Files created/changed in Phase 9b
\`\`\`
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
\`\`\`

### Next
**Phase 10** — Bucket C business section: \`/business\`, \`/business/accounting\`, \`/business/faq\`, \`/business/guide\`, \`/business/kit\` (+ kit-success), \`/business/maps\` (+ maps-success), \`/business/stickers\` (+ sticker-success + sticker-language-success), \`/business/wallets\`, \`/business/why\`. Plus moving \`business/files/\` + \`business/sticker-files/\` static assets into \`public/\`. V2 redesign deferred — faithful port only. \`main\` stays frozen.

---

`;

function main() {
	// Active context: prepend new entry (push old "Latest:" → "Previous:").
	const activeBody = fs.readFileSync(ACTIVE, "utf8");
	if (activeBody.includes(ACTIVE_SENTINEL)) {
		console.log("✓ Phase 9b active-context entry already present.");
	} else {
		// Replace the first "# Active Context" header + first "## Latest:" with our new
		// block, which in turn relabels the previous "## Latest:" as "## Previous:".
		let newBody = activeBody;
		// Downgrade previous latest to previous.
		newBody = newBody.replace(
			/^## Latest: /m,
			"## Previous: "
		);
		// Strip the first "# Active Context" header since our block has its own.
		newBody = newBody.replace(/^# Active Context: bitcoin\.rocks\n+/, "");
		fs.writeFileSync(ACTIVE, ACTIVE_ENTRY + newBody);
		console.log("✓ Prepended Phase 9b entry to activeContext.md");
	}

	// Progress: prepend a brief note.
	const progressBody = fs.readFileSync(PROGRESS, "utf8");
	const progressNote = `## Phase 9b complete — ${DATE}

Shipped 8 form/success pages (stickers, signs, postcards, buy + 4 successes) on \`v2-nextjs-redesign\` as faithful Tailwind ports. Build emits 1489 static pages (55 locales × 27 routes). 9/9 runtime assertions pass. \`main\` still frozen. See \`MIGRATION-NEXTJS.md\` Phase 9b + \`activeContext.md\` for details.

`;
	if (progressBody.includes("Phase 9b complete")) {
		console.log("✓ Phase 9b progress note already present.");
	} else {
		fs.writeFileSync(PROGRESS, progressNote + progressBody);
		console.log("✓ Prepended Phase 9b progress note.");
	}
}

main();
