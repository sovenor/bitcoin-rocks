# Adding a New Language Translation

## Pre-Check
First, check if the `i18n/[lang]/` directory already exists:
- **If it exists**: Audit all files against the English directory (`i18n/en/`) to ensure all files exist, all translation keys are present, and all translations are accurate. Complete anything missing.
- **If it doesn't exist**: Follow the full process below.

English (`i18n/en/`) is the source of truth from which we translate into all other languages.

## Complete Checklist for Adding a New Language

### Step 1: Create All Translation Files
1. Duplicate the entire `i18n/en/` directory structure to `i18n/[lang]/`
2. Rename all files from `*_en.json` to `*_[lang].json`
3. **Translate ALL translation string values into the new language** (see critical rule below)
4. Update `@metadata.locale` from `"en"` to `"[lang]"` in every file
5. Update `@metadata.last-updated` to today's date (YYYY-MM-DD) in every file

**⚠️ CRITICAL: You MUST translate EVERY SINGLE user-facing string value into the target language. Do NOT leave ANY strings in English.** This includes:
- Every value in every JSON file (not just the "main" files — ALL files including business/, nostr/, sticker-files/, etc.)
- Short strings (headers, button labels, page titles)
- Long strings (paragraphs, descriptions, summaries)
- Strings that look like they might be "universal" (they usually aren't — translate them)
- The only exceptions are: `@metadata` fields, proper nouns (brand names like "Bitcoin", "Nostr", "FTX", "Strike"), URLs, dimensions/measurements, and currency codes

**After creating all files, run the audit script to verify**: `node scripts/audit-translation.js [lang]` — this will flag any strings that are still identical to English and may need translation.

**Important**: Use a Node.js script in `/scripts/` to create/modify JSON files with non-ASCII characters. Never use inline CLI commands or `replace_in_file` for i18n JSON files — special characters get corrupted. All i18n JSON files use **tab indentation** (`JSON.stringify(obj, null, '\t')`).

**⚠️ SCRIPT SIZE LIMIT: The full set of translation files for a language is too large to create in a single script.** Break the translation work into multiple smaller scripts organized by category. Place them in `scripts/[lang]/` (e.g., `scripts/tamil/`). Recommended breakdown:
1. `create-sticker-files.js` — All ~44 sticker-files/ subdirectory files (repetitive pattern, ideal for a loop)
2. `create-simple-files.js` — Small files: about, success pages, calculator, nostr (~8 files)
3. `create-business.js` — All 15 business/ files (split into 2 scripts if needed)
4. `create-comparisons.js` — All 10 bitcoin-vs-* pages (split into 2 scripts if needed)
5. `create-common.js` — The common.json file alone (very large, ~180+ keys)
6. `create-index.js` — The index.json file alone (very large, ~130+ keys)
7. `create-inflation.js` — The inflation.json file alone (very large, ~100+ keys)
8. `create-content.js` — Remaining content pages: bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved

Run each script individually with `node scripts/[lang]/scriptname.js`. After all scripts complete, run the audit: `node scripts/audit-translation.js [lang]`.

### Step 2: Register the Language in the Language Switcher
- **File**: `jquery/language.js`
- **Action**: Add `{ code: '[lang]', name: '[Native Name]' }` to the `languages` array
- **Placement**: Insert alphabetically by language code, before the `custom` entry
- **Bump the `TRANSLATION_VERSION`** to force cache bust

### Step 3: Update Homepage WebSite Schema
- **File**: `index.html`
- **Action**: Add `"[lang]"` to the `inLanguage` array in the WebSite JSON-LD schema block

### Step 4: Update llms.txt Language List
- **File**: `llms.txt`
- **Action**: Add the new language name to the `Languages` line in the "About This Site" section
- **Example**: `English, German, Spanish, French, Italian, Portuguese, Dutch, Bulgarian, Indonesian, Thai, Polish`

### Step 5: Update About Page Language Count
- **File**: `i18n/en/about_en.json` (and ALL other language `about_xx.json` files)
- **Key**: `about_open_source_3`
- **Action**: Increment the language count number (e.g., "10 languages" → "11 languages")
- **Best approach**: IMPORTANT: You must manually increment the language count in all language arrays in `scripts/update-about-lang-count.js`. Then, add the new language's translation string that includes this language count (about_open_source_3) to the end of the array. Then, run the script to update all arrays at the same time. You MUST do this with every new language you add. This is not optional.

### Step 6: Update llms-full.txt Language Count
- **File**: `llms-full.txt`
- **Action**: Update the "available in X languages" line in the Open Source section

### Step 7: Run SEO Content Injection
- **Command**: `node scripts/inject-seo-content.js`
- **Why**: Updates the about.html page with the new English text (updated language count)

### Step 8: Update Memory Bank
- Update `memory-bank/progress.md` and `memory-bank/activeContext.md` to reflect the new language addition

## File Structure Reference
A complete language directory should mirror the English directory exactly:

```
i18n/[lang]/
├── 404_[lang].json
├── about_[lang].json
├── bank-runs_[lang].json
├── bitcoin-vs-banks_[lang].json
├── bitcoin-vs-bonds_[lang].json
├── bitcoin-vs-cash_[lang].json
├── bitcoin-vs-cbdc_[lang].json
├── bitcoin-vs-crypto_[lang].json
├── bitcoin-vs-fine-art_[lang].json
├── bitcoin-vs-gold_[lang].json
├── bitcoin-vs-real-estate_[lang].json
├── bitcoin-vs-stocks_[lang].json
├── bitcoin-vs-visa_[lang].json
├── buy_[lang].json
├── common_[lang].json
├── compound-inflation-calculator_[lang].json
├── flyers_[lang].json
├── get-involved_[lang].json
├── index_[lang].json
├── inflation_[lang].json
├── lightning_[lang].json
├── postcard-success_[lang].json
├── postcards_[lang].json
├── sign-success_[lang].json
├── signs_[lang].json
├── sticker-language-success_[lang].json
├── sticker-success_[lang].json
├── stickers_[lang].json
├── wallets_[lang].json
├── business/
│   ├── accounting_[lang].json
│   ├── faq_[lang].json
│   ├── guide_[lang].json
│   ├── index_[lang].json
│   ├── kit_[lang].json
│   ├── kit-success_[lang].json
│   ├── maps_[lang].json
│   ├── maps-success_[lang].json
│   ├── sticker-language-success_[lang].json
│   ├── sticker-success_[lang].json
│   ├── stickers_[lang].json
│   ├── wallets_[lang].json
│   ├── why_[lang].json
│   ├── files/english/index_[lang].json
│   └── sticker-files/english/index_[lang].json
├── nostr/
│   ├── index_[lang].json
│   └── what-is-nostr_[lang].json
└── sticker-files/
    ├── index_[lang].json
    ├── afrikaans/index_[lang].json
    ├── arabic/index_[lang].json
    ├── ... (one for each sticker language subdirectory)
    └── yoruba/index_[lang].json
```

## Quick Summary of All Locations to Update
| # | What | File(s) |
|---|------|---------|
| 1 | Translation files | `i18n/[lang]/**/*_[lang].json` |
| 2 | Language switcher | `jquery/language.js` |
| 3 | Homepage schema | `index.html` (inLanguage array) |
| 4 | LLM site overview | `llms.txt` (Languages line) |
| 5 | About page count | All `about_xx.json` files |
| 6 | LLM full content | `llms-full.txt` (languages count) |
| 7 | SEO injection | Run `node scripts/inject-seo-content.js` |
| 8 | Memory bank | `memory-bank/progress.md`, `memory-bank/activeContext.md` |
