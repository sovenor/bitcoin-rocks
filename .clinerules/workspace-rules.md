# Bitcoin.rocks Project Intelligence

## Project Overview
This is bitcoin.rocks - a Bitcoin education website founded in 2022 with the mission to accelerate Bitcoin adoption through education. It serves as a "first link" to share with Bitcoin newcomers.

## Key Project Patterns

### Architecture Philosophy
- **Static Site First**: Pure HTML/CSS/JS with no CMS - prioritizes simplicity, speed, and reliability
- **Single Stylesheet**: All CSS in one file (css/style.css) for maintainability
- **Progressive Enhancement**: Base functionality works without JavaScript, enhanced with JS
- **Mobile-First Responsive**: Design starts with mobile constraints and scales up

### Content Strategy
- **Topic-Based Organization**: Homepage organized by Bitcoin impact areas (money, freedom, energy, etc.)
- **Color-Coded Sections**: Each topic has unique colors for visual hierarchy
- **Curated External Links**: Mix of internal content and carefully selected external resources
- **Beginner-Focused**: All content assumes zero prior Bitcoin knowledge
- **Cross-Link Priority**: When possible and logical (especially when building new pages) make sure to link to other pages of content on the website.

### Internationalization Approach
- **jquery.i18n Framework**: Uses jQuery-based i18n with JSON translation files
- **File Structure**: `/i18n/[lang]/[page]_[lang].json` format
- **Community-Driven**: Translations managed through GitHub community contributions
- **Fallback Strategy**: Graceful fallback to English when translations unavailable

### Visual Design System
- **Dark Theme**: Consistent #060610 background with white text
- **Bitcoin Orange**: #FF9500 as primary accent color throughout
- **Topic Colors**: Each content section has unique color (energy=#1DFF4D, freedom=#96041C, etc.)
- **Card-Based Layout**: Content in rounded containers with hover effects
- **Typography**: Proxima Nova font family via Adobe Typekit

## Development Workflow Patterns

### File Organization
- Root level HTML files for main pages
- `/business/` subdirectory for business-specific content
- `/sticker-files/` for downloadable resources organized by language
- `/img/` with category-based subdirectories
- `/jquery/` for all JavaScript including custom scripts

### Translation Workflow
1. Fork repository on GitHub
2. Duplicate `/i18n/en/` folder to new language code
3. Translate JSON files maintaining key structure
4. Rename files to match language code pattern
5. Submit pull request with translation

### Content Update Process
- External links require regular review for validity
- New content needs translation keys added to all language files
- Images should be optimized and categorized appropriately
- All changes go through GitHub for version control
- **When updating content on any page** (HTML content or i18n JSON translation files), you must:
  1. Update the `@metadata.last-updated` date in the corresponding **English** JSON file (`i18n/en/...`) to today's date (YYYY-MM-DD format)
  2. Update the `dateModified` field in the page's **Article/WebPage JSON-LD schema** (in the HTML file) to today's date
  3. Update the `last-updated` date in any **other language** JSON files being modified in the same change
- When creating a new page, run `node scripts/inject-article-schema.js` to inject the appropriate schema. Make sure the new page has all the proper schema. View another pre-existing page to verify.

## Technical Implementation Details

### JavaScript Architecture
- jQuery 3.6.1 as base library
- Custom language.js handles i18n loading and language switching
- Smooth scrolling implemented for jump navigation
- Form handling with client-side validation

### CSS Patterns
- BEM-inspired class naming with semantic meaning
- Responsive breakpoints at 700px and 400px
- Consistent spacing using standardized margin/padding classes
- Hover effects with transform: scale(1.05) for interactive elements

### Performance Considerations
- Single CSS file to minimize HTTP requests
- Compressed images under 500KB each
- Google Analytics (gtag.js, ID: G-18L58W2GTN)
- Apache .htaccess for clean URLs and caching

## Community and Contribution Patterns

### Open Source Approach
- MIT License for maximum freedom
- GitHub-based collaboration with issues and discussions
- Clear CONTRIBUTING.md with step-by-step instructions
- Welcoming to non-technical contributors (especially translators)

### Quality Control
- Manual review process for translations
- Curated external link selection
- Community feedback through GitHub discussions
- Regular content freshness reviews

## Common Tasks and Solutions

### Adding New Content
1. Add HTML structure with semantic markup
2. Create data-i18n attributes for translatable text
3. Add translation strings to all language JSON files (when updating or creating a language JSON file, change the "last-updated" date to today's date)
4. Apply appropriate CSS classes following existing patterns
5. Run `node scripts/inject-seo-content.js` to inject English defaults into HTML for SEO
6. Do not test across languages and devices unless explicitly asked to do so

### SEO Content Injection (IMPORTANT)
- **When to run**: After updating or adding ANY English JSON translation file (`i18n/en/**/*.json`)
- **Command**: `node scripts/inject-seo-content.js`
- **What it does**: Reads all English JSON files and injects default English text into HTML elements with `data-i18n` attributes. This ensures crawlers see actual content in the page source.
- **Idempotent**: Safe to run multiple times — second run produces 0 changes
- **Single source of truth**: The English JSON files are the source of truth. The HTML inline text is just the pre-rendered output.
- **Example**: `<h3 data-i18n="key"></h3>` becomes `<h3 data-i18n="key">English Text</h3>`
- **Attribute support**: Also handles `[placeholder]` and other attribute translations

### Translation Management
- Check `/i18n/` directory for language completion status
- Use GitHub discussions for translation coordination
- Maintain consistent terminology across languages
- Test language switching functionality
- **⚠️ ALL translation strings MUST be translated**: When creating translation files for a new language, you MUST translate EVERY SINGLE user-facing string value into the target language. Do NOT leave any strings in English. This applies to ALL files (including business/, nostr/, sticker-files/ subdirectories). The only exceptions are `@metadata` fields, proper nouns/brand names, URLs, dimensions, and currency codes. After creating files, run `node scripts/audit-translation.js [lang]` to verify no English strings remain.
- **⚠️ SCRIPT SIZE LIMIT**: A full language translation (~90+ files) is too large to create in a single Node.js script. Always break translation scripts into multiple smaller scripts by category (e.g., sticker-files, business, comparisons, common, index, inflation, etc.) and place them in `scripts/[lang]/`. See `.clinerules/workflows/translate-new-language.md` for the recommended breakdown.
- **When adding a new language**, you must update ALL of these locations (see `.clinerules/workflows/translate-new-language.md` for full details):
  1. `i18n/[lang]/` — Create all translation JSON files (mirror English directory structure) with ALL strings translated into the target language
  2. `jquery/language.js` — Add to the `languages` array with code and native name; bump `TRANSLATION_VERSION`
  3. `index.html` — Add language code to `inLanguage` array in WebSite JSON-LD schema
  4. `llms.txt` — Add language name to the "Languages" line in "About This Site"
  5. `i18n/*/about_*.json` — Increment the language count in `about_open_source_3` for ALL languages
  6. `llms-full.txt` — Update the "available in X languages" line
  7. Run `node scripts/inject-seo-content.js` — Updates about.html SEO text
  8. Update memory bank — `progress.md` and `activeContext.md`

### LLM Content Files (llms.txt / llms-full.txt)
- **When to update**: After adding new pages, updating existing page content, or adding new languages
- **`llms.txt`**: Concise site overview for AI systems (~800 words). Update when adding new pages (add to the page listing), changing the site's language list, or modifying organizational info.
- **`llms-full.txt`**: Full educational content in Markdown (~8,000 words). Update when page content changes significantly (new sections, revised facts/statistics, new pages). Regenerate the relevant section from the updated English JSON files.
- **Language list**: When a new language is added, update the language list in the `llms.txt` "About This Site" section.
- **New pages**: When creating a new educational page, add it to both `llms.txt` (one-line description + URL in the appropriate category) and `llms-full.txt` (full content in Markdown).
- **Content source**: The English JSON translation files (`i18n/en/`) are the single source of truth. Assemble content from those files into clean Markdown prose.

### i18n JSON `last-updated` Dates (IMPORTANT)
- **Every time** an i18n JSON file is created or modified (any language, any page), update its `@metadata.last-updated` field to today's date in `YYYY-MM-DD` format.
- This applies universally: English files, translation files, new files, existing files — no exceptions.
- This is separate from (and in addition to) updating the HTML schema `dateModified` field, which only applies when English content changes.

### Editing i18n JSON Files (IMPORTANT)
- **Never use inline CLI commands** (e.g., `node -e "..."`) to modify i18n JSON files. Special characters in translations (accented characters, Cyrillic, Thai, checkmarks, etc.) get corrupted by shell escaping.
- **Never use `replace_in_file`** on i18n JSON files with non-ASCII content — the SEARCH/REPLACE matching breaks on special characters and tab indentation.
- **Best approach**: Create a standalone `.js` script file in `/scripts/` that uses `JSON.parse()` / `JSON.stringify()` with proper tab indentation (`JSON.stringify(obj, null, '\t')`) to read, modify, and write the JSON files. Then run it with `node scripts/your-script.js`. This handles all character encodings correctly.
- **Alternative**: Use `write_to_file` to write the entire JSON file contents directly. This works but is verbose for large files.
- **Tab indentation**: All i18n JSON files use tab indentation (not spaces). Always preserve this when writing.

### Google Analytics Custom Events (IMPORTANT)
- **When adding a new `gtag('event', ...)` call**: Any custom event parameters (like `event_category`, `event_label`, or custom names) must be **registered as Custom Dimensions in GA4** or the parameter values will not be visible in reports.
- **GA4 does NOT auto-collect** `event_category` or `event_label` — these are NOT built-in dimensions in GA4 (they were in Universal Analytics). They must be registered manually.
- **How to register**: GA4 Admin → Property → Data display → Custom definitions → Create custom dimension. Set scope to "Event" and enter the exact parameter name from the code.
- **Remind the user**: When adding a new gtag event with custom parameters, remind the user to register any new parameters as custom dimensions in GA4. Data only starts being collected from the moment of registration (not retroactive).
- **Existing custom events** (as of March 2026):
  1. `language_pageview` (in `jquery/language.js`) — params: `event_category`, `event_label`, `language_active`, `language_source`
  2. `language_switch` (in `jquery/language.js`) — params: `event_category`, `event_label`, `language_selected`
  3. `select_currency` (in `jquery/country-selector-inflation.js`) — params: `event_category`, `event_label`
- **Standard pattern**: Always use `event_category` and `event_label` for consistency across all custom events. Add more specific parameters as needed.

### Performance Optimization
- Optimize images before adding to `/img/` directory
- Minimize JavaScript dependencies
- Use appropriate caching headers
- Test loading times on mobile connections

## Project Values and Constraints

### Core Values
- **Simplicity**: Keep everything as simple as possible for beginners
- **Accessibility**: Support global reach through translations and responsive design
- **Community**: Foster collaborative, open-source development
- **Quality**: Maintain high standards for educational content
- **Privacy**: Minimal data collection, privacy-focused analytics

### Technical Constraints
- No server-side processing (static files only)
- Single stylesheet approach (no CSS frameworks)
- jQuery-based (no modern JS frameworks)
- Community-driven translations (no professional translation services)
- Free hosting requirements (no expensive infrastructure)

## Success Indicators
- High engagement with educational content
- Active community translation contributions
- Regular sharing as "first link" for Bitcoin education
- Business adoption through provided resources
- Global reach across multiple languages

This project intelligence helps maintain consistency and quality while enabling effective collaboration with the bitcoin.rocks community.