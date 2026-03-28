# GEO (Generative Engine Optimization) Checklist for bitcoin.rocks

> **What is GEO?** Generative Engine Optimization is the practice of optimizing your website so that AI systems (ChatGPT, Perplexity, Google AI Overviews, Gemini, etc.) can understand, trust, and cite your content. Unlike traditional SEO which focuses on ranking in search result links, GEO focuses on getting your content surfaced as a direct answer or cited source inside AI-generated responses.

> **Date created:** March 25, 2026  
> **Current state:** Strong SEO foundation (sitemap, robots.txt, canonical URLs, meta descriptions, inline English content). No GEO-specific optimizations yet.

---

## Priority 1: Structured Data (Schema.org JSON-LD)

AI engines heavily rely on structured data to understand what a page is about, who created it, and how authoritative it is. **bitcoin.rocks has zero structured data on any page.**

- [x] **Add Organization schema to every page** — Define `bitcoin.rocks` as an `Organization` with name, url, logo, founding date (2022), description, social/Nostr links, and `sameAs` properties. This establishes entity identity across all AI systems. ✅ *Completed Mar 25, 2026 — Injected into all 88 HTML files via `scripts/inject-organization-schema.js`. Includes name, url, logo, foundingDate, description, email, sameAs (GitHub + Nostr), contactPoint, and knowsAbout. Script is idempotent.*

- [x] **Add WebSite schema to the homepage** — Include `name`, `url`, `description`, and a `potentialAction` for search. This helps AI engines understand the site as a cohesive entity. ✅ *Completed Mar 25, 2026 — Added WebSite JSON-LD to `index.html` with name, url, description, publisher (referencing Organization), potentialAction (SearchAction via Google site search), and inLanguage listing all supported languages.*

- [x] **Add Article/WebPage schema to all educational content pages** — Every page like `/inflation`, `/bitcoin-vs-gold`, `/bank-runs`, `/wallets`, `/lightning`, etc. should have `Article` or `WebPage` schema with `headline`, `description`, `datePublished`, `dateModified`, `author` (linking to the Organization), `publisher`, and `mainEntityOfPage`. ✅ *Completed Mar 25, 2026 — Injected into 32 HTML files via `scripts/inject-article-schema.js`. Each schema includes headline (from `<title>`), description (from meta description), url (from canonical), mainEntityOfPage, author and publisher (referencing Organization), datePublished (2022-01-01), dateModified (from English JSON `@metadata.last-updated`), inLanguage, and image (from og:image). Script is idempotent.*

- [x] **Add FAQPage schema to pages with Q&A content** — Pages like `/inflation` (which has sections like "Does Bitcoin Have Inflation?", "Has Bitcoin Ever Been Hacked?", "I Heard Bitcoin is Volatile — Is That Safe?") and `/wallets` (with accordion Q&A) and `/business/faq` are perfect candidates for `FAQPage` schema. This is one of the highest-impact GEO actions because AI engines love pulling from FAQ structured data. ✅ *Completed Mar 25, 2026 — Added FAQPage JSON-LD to `inflation.html` (7 Q&A pairs covering inflation causes, Bitcoin inflation, what is Bitcoin, inflation protection, volatility, affordability, hacking, and energy), `wallets.html` (3 Q&A pairs on self-custody, hot vs cold wallets, and recovery phrases), and `business/faq.html` (9 Q&A pairs covering all business FAQ sections). Each schema uses the actual page content as answer text.*

- [x] **Add HowTo schema to guide pages** — `/wallets` (how to store bitcoin), `/buy` (how to buy bitcoin), `/business/guide` (how to accept bitcoin) would benefit from `HowTo` schema with defined steps. ✅ *Completed Mar 25, 2026 — Added HowTo JSON-LD to 3 pages: `wallets.html` (4 steps: choose self-custody, hot vs cold, backup recovery phrase, choose a wallet), `buy.html` (4 steps: select country, choose payment method, buy from platform, store safely), and `business/guide.html` (5 steps: learn benefits, get wallet, get listed on maps, get stickers, set up accounting). Each schema includes step name, descriptive text, and URL.*

- [x] **Add ComparisonPage or custom schema to "Bitcoin vs" pages** — The `/bitcoin-vs-gold`, `/bitcoin-vs-stocks`, `/bitcoin-vs-cash`, etc. pages have a consistent comparison format. Use structured properties to define the two items being compared and the comparison criteria. ✅ *Completed Mar 25, 2026 — Injected `ItemList` JSON-LD into all 10 "Bitcoin vs" pages via `scripts/inject-comparison-schema.js`. Each schema includes `name`, `description`, `url`, `about` (defining both Bitcoin and the compared item as `Thing` entities), and `itemListElement` with `ListItem` entries for each comparison criterion (name = "Bitcoin: X vs Asset: Y", description = explanation text). Pages: bitcoin-vs-gold (7), bitcoin-vs-stocks (7), bitcoin-vs-cash (7), bitcoin-vs-banks (7), bitcoin-vs-cbdc (10), bitcoin-vs-bonds (7), bitcoin-vs-crypto (8), bitcoin-vs-visa (7), bitcoin-vs-real-estate (9), bitcoin-vs-fine-art (7). Script is idempotent.*

- [x] **Add BreadcrumbList schema** — Especially for nested pages like `/business/wallets`, `/business/accounting`, `/business/faq`, `/nostr/what-is-nostr`. This helps AI understand the site hierarchy. ✅ *Completed Mar 25, 2026 — Injected `BreadcrumbList` JSON-LD into 33 HTML files via `scripts/inject-breadcrumb-schema.js`. Root pages get 2-level breadcrumbs (Home > Page Title), business pages get 3-level (Home > Bitcoin for Business > Page Title), nostr pages get 3-level (Home > Nostr > Page Title), and sticker-files get 3-level (Home > Bitcoin Stickers > Sticker Files). Script is idempotent. Skips homepage, success pages, 404, and sticker-file language variants.*

- [x] **Add SoftwareApplication schema for wallet recommendations** — On `/wallets`, each wallet (Blockstream Green, Jade, Coldcard, etc.) could have `SoftwareApplication` or `Product` schema with name, description, price, and features. ✅ *Completed Mar 25, 2026 — Added `@graph` JSON-LD to `wallets.html` containing 6 wallet schemas: Blockstream Green as `MobileApplication` (free, FinanceApplication category, Android/iOS, featureList) and 5 hardware wallets as `Product` — Blockstream Jade ($79), Coldcard MK5 ($189), Coldcard Q ($289), Foundation Passport ($199), SeedSigner ($50). Each schema includes name, description, url, image, brand, offers (price/currency/availability), and additionalProperty entries for wallet type, custody, air-gap, Bitcoin-only, and device-specific features.*

---

## Priority 2: Content Structure for AI Extraction

AI systems extract answers from content that is clearly structured, uses natural question-answer patterns, and provides concise, quotable statements.

- [x] **Add a visible H1 tag to every page** — Currently, most pages use `<h2>` as the primary heading (e.g., `<h2 class="h2-inflation">`). The homepage has no H1 at all. Every page should have exactly one `<h1>` that clearly describes the page topic (e.g., `<h1>Bitcoin Doesn't Have Inflation</h1>` for the inflation page). AI engines treat H1 as the strongest signal for page topic. ✅ *Completed Mar 25, 2026 — Added H1 tags to all 88 HTML files via `scripts/inject-h1-tags.js`. Most pages: first `<h2 class="h2-inflation">` converted to `<h1 class="h1-inflation">`. `wallets.html` and `buy.html`: `<h3 class="wallet-h3">` converted to `<h1 class="wallet-h3">`. Homepage: logo wrapped in `<h1 class="home-h1">` with alt text "bitcoin.rocks — Bitcoin Education". Success pages: first `<h2 class="h2-stickers">` converted to `<h1 class="h2-stickers">`. CSS updated: `h1` tag shares base styles with `h2`, new `.h1-inflation` class mirrors `.h2-inflation` in all 3 CSS rule locations, `.home-h1` zeroes out margin/font-size so homepage logo looks identical. Script is idempotent. Translation strings unaffected — all `data-i18n` attributes preserved.*

- [x] **Improve heading hierarchy (H1 → H2 → H3)** — Currently, pages jump from H2 to H3 or use H3 for what should be H2 content sections. Establish a clean hierarchy: H1 = page title, H2 = major sections, H3 = subsections. This makes it much easier for AI to parse the content structure. ✅ *Completed Mar 26, 2026 — Fixed heading hierarchy across all 35 affected HTML files (646 heading changes) via `scripts/fix-heading-hierarchy.js`. Content section h3→h2 (.h2-section), CTA h3→h2 + h4→h3 (.h3-item), homepage h3→h2 + h4→h3, wallet names h6→h2 (.h2-label), comparison labels h6→h3 (.h3-label), payment methods h6→h3, business wallet categories h5→h2 (.h2-category), nostr categories h5→h3 (.h3-category) + clients h6→h4 (.h4-label), business guide biz-h3→h2, business success pages h1/h2 order fixed. CSS updated with 7 preservation classes (.h2-section, .h3-item, .h2-label, .h3-label, .h4-label, .h2-category, .h3-category) for zero visual change, plus updated selectors (h3.second-line, .biz-h3, contextual h6 selectors). Script is idempotent.*

- [x] **Add concise "definition" paragraphs at the top of each page** — AI engines prefer content that leads with a clear, direct answer. For example, the inflation page should open with a 1-2 sentence definition-style paragraph like: *"Bitcoin doesn't have inflation because it has a fixed supply of 21 million coins that can never be increased. Unlike government currencies, no one can print more Bitcoin."* Right now, the intro requires users to select a currency first before seeing any content. ✅ *Completed Mar 27, 2026 — Added `inflation_definition` paragraph to `inflation.html` between H1 and currency selector. Definition text is always visible (not hidden behind currency selection). Added `inflation_definition` key with actual translations to all 9 language JSON files (en, de, es, fr, pt, bg, id, nl, th). Updated `last-updated` dates and Article schema `dateModified` to 2026-03-27.*

- [x] **Format Q&A sections as actual question-answer pairs** — The inflation page has great FAQ content ("WHAT CAUSES INFLATION?", "DOES BITCOIN HAVE INFLATION?", "HAS BITCOIN EVER BEEN HACKED?") but they are formatted as section headings only. Wrap these in semantic `<details>`/`<summary>` or at minimum ensure the question text is in a heading and the answer immediately follows in a `<p>` tag directly beneath it. ✅ *Completed Mar 27, 2026 — Added Schema.org Question/Answer microdata to 120 Q&A sections across all 15 currency blocks on `inflation.html` via `scripts/inject-faq-microdata.js`. Each Q&A section's parent `<div class="text-box intro">` gets `itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"`, the `<h2>` heading gets `itemprop="name"`, and the answer content is wrapped in `<div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"><div itemprop="text">...</div></div>`. This complements the existing FAQPage JSON-LD schema with inline microdata. 8 Q&A types × 15 currencies = 120 sections. Zero visual change. Script is idempotent. `wallets.html` and `business/faq.html` already had proper Q&A formatting (accordion/expandable patterns) and needed no changes.*

---

## Priority 3: Authority & Trust Signals

AI systems weight content from authoritative, trustworthy sources. These signals help establish bitcoin.rocks as a credible educational resource.

- [x] **Create an "About" page** — bitcoin.rocks has no About page. AI engines look for organizational identity, mission, team info, founding date, and editorial standards. Create `/about` with: founding story, mission statement, editorial approach, open-source commitment, and contact information. This is critical for E-E-A-T signals. ✅ *Completed Mar 27, 2026 — Created `about.html` with 5 sections: Our Mission (founding story, 2022, "first link" concept), What We Do (educational content, free stickers, printable flyers/business kits), Our Editorial Approach (fact-checking, trusted sources, regular updates, Bitcoin-only focus), Open Source (MIT License, GitHub, community translators, 9+ languages), and Contact Us (email, Nostr, GitHub). Page follows existing site patterns: same HTML boilerplate, CSS classes, jQuery i18n, standard footer. Created `i18n/en/about_en.json` with 30 translation keys. Translated into all 10 language directories (de, es, fr, pt, nl, bg, id, th, it, pl) with actual translations. Added `common_footer_about` key to `common_en.json` and all 8 other common_*.json files with translated "About bitcoin.rocks" text. Article/WebPage schema auto-injected via `scripts/inject-article-schema.js`. SEO content injected. Sitemap updated (88 URLs). Organization and Breadcrumb schemas auto-injected. No mentions of crypto/cryptocurrency.*

- [x] **Add author/publisher attribution to content** — Currently no content has visible authorship. Add "Published by bitcoin.rocks" with the founding year and mission statement near the top or bottom of educational pages. AI engines use this to assess content trustworthiness. ✅ *Completed Mar 28, 2026 — Injected visible publisher attribution into all 33 educational content pages via `scripts/inject-author-attribution.js`. Each page gets a "Published by bitcoin.rocks · Bitcoin education since 2022 · Open-source project" bar just above the footer, with Schema.org `itemprop="publisher"` microdata reinforcing the existing Article JSON-LD. Links to the About page and GitHub. Added 4 translation keys (`common_published_by`, `common_publisher_name`, `common_publisher_since`, `common_publisher_open_source`) to all 9 language JSON files (en, de, es, fr, pt, nl, bg, id, th) with actual translations. CSS: `.publisher-attribution` with subtle styling (14px, centered, gray text, orange links, border-top separator). Script is idempotent.*

- [ ] **Add "Last Updated" dates to content pages** — AI engines strongly prefer fresh content. Add visible "Last updated: [date]" to each educational page. You already track `last-updated` in your JSON translation files — surface this on the page itself.

- [ ] **Add source citations inline** — The inflation page mentions statistics like "Nearly 80% of all US Dollars that exist today were created between 2020 and 2023" with a link to FRED. Formalize these as citations: *"According to the Federal Reserve Economic Data (FRED)..."* AI engines are more likely to cite content that itself cites authoritative sources.

- [ ] **Add a references/sources section to data-heavy pages** — At the bottom of pages like `/inflation`, `/bitcoin-vs-gold`, `/bitcoin-vs-stocks`, add a "Sources" section listing the external references used. This dramatically increases AI trust in the content.

---

## Priority 4: Content Depth & Topical Authority

AI engines prefer comprehensive, in-depth content from sites that demonstrate topical authority.

- [ ] **Expand the homepage with more in-page content** — The homepage is currently a link directory with short titles. Add 1-2 sentence descriptions for each topic section that explain what the user will learn. This gives AI more content to extract without changing the visual design significantly.

- [ ] **Create a glossary page** — A `/glossary` or `/bitcoin-terms` page defining key terms (Bitcoin, Satoshi, Self-custody, Lightning Network, Mining, Halving, etc.) would be extremely high-value for GEO. AI engines frequently pull definitions from glossary-style content.

- [ ] **Create a "What is Bitcoin?" standalone page** — This content already exists embedded within the inflation page (and likely repeated across pages), but there's no standalone `/what-is-bitcoin` URL. This is one of the most common AI queries and you should own it with a dedicated, comprehensive page.

- [ ] **Create a "Bitcoin FAQ" central page** — Consolidate the common Q&A sections that are repeated across pages (What is Bitcoin?, Is Bitcoin Volatile?, Has Bitcoin Been Hacked?, Why Does Bitcoin Use Energy?, etc.) into a single comprehensive FAQ page at `/faq`. This avoids content duplication and creates a single authoritative Q&A resource that AI engines love.

- [ ] **Deepen the "Bitcoin vs" pages with more comparison context** — The `/bitcoin-vs-gold` page is good but could be stronger with a summary comparison table at the top and a conclusion section. AI engines love structured comparison tables they can extract.

- [ ] **Add comparison tables** — For all "Bitcoin vs" pages, add an HTML `<table>` summarizing the key comparison points. Tables are one of the most extracted content types by AI engines. Example: a table with rows like "Supply", "Sendability", "Divisibility", "Verifiability" and columns for Bitcoin and the compared asset.

---

## Priority 5: Technical GEO Optimizations

- [ ] **Add `og:description` meta tags** — Currently pages have `og:title`, `og:type`, `og:url`, and `og:image` but are missing `og:description`. Add these to match the `<meta name="description">` content. Some AI engines use OpenGraph data.

- [ ] **Add Twitter Card meta tags** — No pages have `twitter:card`, `twitter:title`, `twitter:description`, or `twitter:image` tags. These are used by some AI systems and social previews.

- [ ] **Fix the wallets.html og:url** — The wallets page has `<meta property="og:url" content="https://bitcoin.rocks/bank-runs" />` which is wrong — it should be `https://bitcoin.rocks/wallets`.

- [ ] **Add `<article>` semantic HTML tags** — Wrap main educational content in `<article>` tags instead of just `<div>` tags. AI engines use semantic HTML to identify the primary content area vs. navigation, headers, and footers.

- [ ] **Add `<main>`, `<nav>`, `<header>`, `<footer>` semantic HTML tags** — Currently the entire page is `<div>` tags. Using semantic HTML helps AI engines (and accessibility tools) understand page structure. At minimum, wrap the main content area in `<main>` and the footer in `<footer>`.

- [ ] **Add `<section>` tags with aria-labels** — Especially on the homepage, each topic section (Money, Freedom, Energy, etc.) should be wrapped in `<section aria-label="Bitcoin and Freedom">` to help AI understand content boundaries.

- [ ] **Make hidden content (display:none) accessible to crawlers** — The inflation page has 15 currency-specific content blocks all set to `display:none` except the selected one. Web crawlers and AI engines may skip `display:none` content. Consider using a CSS class that visually hides content but keeps it in the DOM for crawlers, or restructure so the default (USD) content is always visible in the source.

- [ ] **Reduce content duplication across currency sections** — The inflation page repeats identical content blocks (What is Bitcoin, Bitcoin Volatility, etc.) for each of the 15 currencies. This massive duplication may confuse AI engines. Consider restructuring so common sections appear once and currency-specific content is injected dynamically.

---

## Priority 6: Content Optimization for AI Queries

- [ ] **Write content in natural question-answer format** — AI engines match user questions to content. Ensure key sections are phrased as questions people actually ask: "What is Bitcoin?", "How does Bitcoin work?", "Is Bitcoin safe?", "How do I buy Bitcoin?", "What is a Bitcoin wallet?", "Does Bitcoin use too much energy?"

- [ ] **Include "People Also Ask" style content** — For each major page, add 3-5 related questions at the bottom that link to other pages. This helps AI engines understand the topical relationship between your pages and surfaces more of your content.

- [ ] **Add alt text to all images** — Most images have alt text (good!), but verify every image across all pages. Alt text helps AI image understanding. The homepage logo, for example, has no alt text: `<img src="img/logos/rocks-logo-color-v2.png" class="home-logo"/>`.

- [ ] **Add descriptive anchor text for internal links** — Some internal links use generic text. Ensure all internal links use descriptive anchor text that tells AI engines what the linked page is about.

---

## Priority 7: AI-Specific Metadata

- [ ] **Consider adding a `llms.txt` file** — This is an emerging standard (similar to robots.txt) that provides instructions to AI crawlers about your site's content, structure, and preferred citation format. Place it at `https://bitcoin.rocks/llms.txt`.

- [ ] **Consider adding a `llms-full.txt` file** — A companion to `llms.txt` that provides the full Markdown content of your site for AI consumption. This can dramatically improve how AI engines understand and cite your content.

- [ ] **Review robots.txt for AI crawlers** — Currently robots.txt allows all crawlers. Consider whether you want to specifically allow/instruct AI crawlers (GPTBot, Google-Extended, CCBot, etc.) or add specific rules for them.

- [ ] **Add a `speakable` schema property** — For key content sections, add `speakable` structured data to indicate which parts of the page are most suitable for voice assistant and AI text-to-speech responses.

---

## Quick Wins (Easiest to Implement)

These items from the list above can be done quickly and have outsized impact:

1. **Fix wallets.html og:url** (5 min)
2. **Add og:description to all pages** (30 min)
3. **Add Organization JSON-LD to all pages** (1 hour — create a reusable snippet)
4. **Add FAQPage schema to inflation, wallets, and business/faq** (2 hours)
5. **Add H1 tags to every page** (1 hour)
6. **Add "Last Updated" visible dates** (1 hour)
7. **Add `<footer>` semantic tag** (30 min)
8. **Add alt text to homepage logo** (5 min)
9. **Create an About page** (2-3 hours)
10. **Add `llms.txt`** (1-2 hours)

---

## Measuring Progress

After implementing these changes, you can evaluate GEO performance by:

1. **Asking AI assistants about your topics** — Search for "Does Bitcoin have inflation?" or "Bitcoin vs Gold comparison" in ChatGPT, Perplexity, and Google AI Overviews to see if bitcoin.rocks is cited.
2. **Using Google Search Console** — Monitor how AI Overviews affect your click-through rates.
3. **Tracking citations** — Keep a log of when and where AI systems cite bitcoin.rocks.
4. **Rich Results Test** — Use Google's Rich Results Test tool after adding structured data to verify it's valid.
5. **Schema Markup Validator** — Validate all JSON-LD at https://validator.schema.org/

---

*This checklist was created by auditing all HTML pages, meta tags, content structure, sitemap, robots.txt, and overall site architecture of bitcoin.rocks against current GEO best practices (March 2026).*
