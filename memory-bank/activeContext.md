# Active Context: bitcoin.rocks

## Current Work Focus

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
