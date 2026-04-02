# Active Context: bitcoin.rocks

## Latest: Chichewa Language Added — April 2026
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
