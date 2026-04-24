# Manifest i18n Translation Refresh

> **Invocation:** `/translate-manifest-refresh <Language Name>`
> (e.g. "Afrikaans", "Spanish", "Arabic", "Chinese", "Mandarin")

This workflow drives **one existing locale per session** through a
manifest-driven refresh pass. A "pass" re-translates every English key
that has been added or rewritten since the locale was last refreshed,
plus cleans up any locale-specific gaps that drifted in.

Distinct from `translate-new-language.md`:

- `translate-new-language.md` creates all 81 JSON files from scratch
  for a brand-new locale.
- This workflow **refreshes** an existing locale. Only the keys that
  actually need (re-)translation appear in the report. Drives are
  gated by the committed V2 manifest (`v2-manifest.json`) plus
  per-locale byte-diffing against current English.

## How it works (big picture)

1. The **committed V2 manifest** at
   `scripts/i18n-audit/v2-manifest.json` enumerates every English key
   that was **changed** (rewritten in place) or **added** (new since
   pre-V2) during a bulk English revision pass. The list is
   identical for every locale — same work to translate. Rebuilt with
   `build-v2-manifest.js` whenever English gets another large rewrite.
2. Each locale has a **per-locale marker** at
   `scripts/i18n-audit/v2-refresh-status/<lang>.json` pinning the
   `manifestVersion` it was last refreshed against. Missing or stale
   marker = the manifest entries get flagged in the next diff.
3. `language-diff.js` emits a per-locale work queue by combining:
   - **Locale-specific gaps** (`missing` / `untranslated`) detected
     against current English.
   - **Manifest entries** (`manifest-changed` / `manifest-added`),
     included only when the marker is missing or stale.
4. `apply-translations.js` merges translations back in, bumps
   `@metadata.last-updated`, writes the marker (when every manifest
   entry in the report was resolved), archives the report, and runs
   `verify-language.js`.
5. `verify-language.js` is the unified audit — one check, exits
   non-zero on any issue.

## Pre-check

1. Confirm the locale is already registered.
   - Look up the language code in the table at the bottom of this
     file (e.g. "Afrikaans" → `af`).
   - Verify `i18n/<code>/` exists. If it doesn't, stop and follow
     `.clinerules/workflows/translate-new-language.md` first.
   - Verify the code is in `lib/i18n/config.ts`'s `languages` array
     AND the `locales` tuple.

2. Confirm the manifest + current English snapshot exist:
   ```bash
   ls -la scripts/i18n-audit/v2-manifest.json
   ls -la scripts/i18n-audit/english-snapshot.json
   ```
   Regenerate the English snapshot before every session (it's fast):
   ```bash
   node scripts/i18n-audit/snapshot-english.js
   ```
   **Do not rebuild the manifest mid-session** unless you're explicitly
   propagating a new English rewrite — see "Regenerating the manifest"
   below.

## Step 1 — Generate the per-language diff report

```bash
node scripts/i18n-audit/language-diff.js <code>
```

This writes `scripts/i18n-audit/reports/<code>.json`. Report categories
(in priority order):

- **`missing`** — key present in English, absent from the target
  file. Locale-specific; varies between languages.
- **`untranslated`** — key present in both, target value is
  byte-identical to English (after brand-name allow-list). Also
  locale-specific.
- **`manifest-changed`** — key appears in the V2 manifest `changed`
  section. English was rewritten. Entry includes both
  `englishValueBefore` and `englishValue` so the translator can see
  what changed. **Same list for every locale.**
- **`manifest-added`** — key appears in the V2 manifest `added`
  section. New English copy with no pre-V2 baseline. **Same list for
  every locale.**

Typical volumes:

| Locale  | Missing | Untranslated | Manifest changed | Manifest added | Total |
|---------|--------:|-------------:|-----------------:|---------------:|------:|
| af      | 0       | 0            | 165              | 392            | 557   |
| am      | 0       | 0            | 165              | 392            | 557   |
| de      | ~100    | ~70          | 165              | 392            | ~727  |
| *new locale fresh from translate-new-language.md* | 0 | 0 | 165 | 392 | 557 |

> **Note — 2026-04-24 manifest regeneration:** The current
> `v2-manifest.json` (version `d966f8c780c0c485...`) was regenerated
> after commits `c88d7273..ef04b2a3` added 3 changed + 4 added
> keys (about / get-involved / bitcoin-vs-cash / bitcoin-vs-fine-art /
> bitcoin-vs-gold + the new `get_involved_biz_stickers_*` bundle).
> The 7 already-refreshed locales (af, am, ar, az, bg, bn, ca) were
> retroactively patched via `scripts/delta-refresh-2026-04-24/apply-delta.js`
> — their markers now pin the new hash, so running this workflow
> against them will correctly report 0 manifest entries flagged.

The two manifest numbers are the same for every locale. The
locale-specific numbers vary based on how complete the locale was
before the session.

### Optional — chunk by namespace

```bash
# Session 1 — biggest + highest-impact namespaces
node scripts/i18n-audit/language-diff.js <code> --namespace=common,index,inflation

# Session 2 — comparison pages
node scripts/i18n-audit/language-diff.js <code> --namespace=bitcoin-vs-gold,bitcoin-vs-stocks,bitcoin-vs-cash,bitcoin-vs-banks,bitcoin-vs-bonds,bitcoin-vs-real-estate,bitcoin-vs-crypto,bitcoin-vs-cbdc,bitcoin-vs-fine-art,bitcoin-vs-visa

# Session 3 — business/*
node scripts/i18n-audit/language-diff.js <code> --namespace=business/index,business/why,business/faq,business/wallets,business/accounting,business/stickers,business/maps,business/maps-success,business/sticker-success,business/sticker-language-success,business/sticker-files/english/index

# Session 4 — sticker-files/*
# (44 sub-pages — use `ls i18n/en/sticker-files/ | grep -v index` to build the csv)

# Session 5 — everything else (content + success pages + 404)
node scripts/i18n-audit/language-diff.js <code> --namespace=404,about,bank-runs,buy,compound-inflation-calculator,flyers,get-involved,lightning,nostr/index,sticker-language-success,sticker-success,stickers,wallets
```

**Note:** Namespace filtering limits only which manifest entries are
included. The per-locale marker is still only written when every
manifest entry (across ALL namespaces) is resolved. For chunked
multi-session runs, run the final pass without `--namespace=` to
capture any remaining manifest entries.

## Step 2 — Translate the report entries

The report entries are:

### `missing` / `untranslated` entries

```jsonc
{
  "namespace": "common",
  "key": "common_source_btc_map",
  "reason": "missing",
  "englishValue": "BTC Map — Worldwide directory of Bitcoin-accepting merchants",
  "currentValue": null,
  "targetTranslation": null  // ← fill in here
}
```

### `manifest-changed` entries

```jsonc
{
  "namespace": "bitcoin-vs-gold",
  "key": "point_3_summary_1",
  "reason": "manifest-changed",
  "englishValueBefore": "Bitcoin has a hard cap of 21 Million BTC that will ever exist.",
  "englishValue":       "Bitcoin has a hard cap of 21 million BTC. Gold's supply grows about 1.6% per year, shrinking your slice — less than fiat",
  "currentValue":       "Bitcoin het 'n harde plafon van 21 miljoen BTC wat ooit sal bestaan.",
  "targetTranslation": null  // ← fresh translation of `englishValue`
}
```

For `manifest-changed`:
1. Read the NEW `englishValue` carefully.
2. Ignore `englishValueBefore` — it's shown for context only.
3. Ignore `currentValue` — it translates the old English, which is no
   longer correct.
4. Write a fresh translation of `englishValue` in `targetTranslation`.

### `manifest-added` entries

```jsonc
{
  "namespace": "nostr/index",
  "key": "nostr_hero_subtitle",
  "reason": "manifest-added",
  "englishValue": "...",
  "currentValue": null,
  "targetTranslation": null
}
```

For `manifest-added`, just translate `englishValue`. Same as
`missing`, but comes from the committed manifest instead of per-locale
diffing.

### ⚠️ CRITICAL — Every string must be fully translated

Translate **every single** entry into the target language. Exceptions
(keep identical to English):

- Brand names: `Bitcoin`, `Nostr`, `Lightning`, `Strike`, `Square`,
  `BTCPay Server`, `Breez`, `OpenNode`, `IBEX`, `Zaprite`,
  `bitcoin.rocks`, `BTC Map`, `CoinGecko`, `The Spreadsheet Guru`,
  `Satoshi Pacioli`, `Satoshi Nakamoto`, etc.
- URLs, email addresses (`hi@bitcoin.rocks`).
- Schema.org canonical dataset names. These are already allow-listed
  in `build-v2-manifest.js` and won't appear in the manifest.
- Currency codes (`USD`, `EUR`, `BTC`).
- Dimensions / measurements (`21,000,000`, `1.5 inches`, `100%`).
- Numeric values and timestamps.
- Empty strings (`""`) — intentional placeholders.

### ⚠️ Dynamic per-currency keys (`inflation` namespace)

The `inflation` namespace has 327 keys matching
`inflation_<code>_<suffix>` or `inflation_stat_<code>_<suffix>` where
`<code>` is one of 13 per-currency codes. These are constructed at
runtime by `components/CurrencySection.tsx`. Make sure "dollars",
"pesos", "reais", etc. are translated appropriately for each
currency's context — don't generically translate "your currency" in
place of the specific name.

### Chunking translations into helper scripts

For big reports, split translation work into per-category helper
scripts at `scripts/<code>-manifest-refresh/`. Recommended breakdown:

1. `translate-manifest-changed.js` — the 165 `manifest-changed`
   entries. These are the HIGHEST priority because wrong translations
   here are actively visible to users.
2. `translate-manifest-added.js` — the 392 `manifest-added` entries.
3. `translate-locale-specific.js` — `missing` + `untranslated`
   entries. Only exists for locales that were incomplete or had
   placeholder leakage.

Each helper reads the report JSON, fills in `targetTranslation` for
entries matching its category, and writes back.

### ⚠️ SCRIPT SIZE + SPECIAL-CHARACTER RULES

- **Always use `write_to_file`** for translation scripts. Never
  `cat` heredoc via `execute_command` on non-ASCII content — it can
  hang the session.
- **Never use inline CLI commands or `replace_in_file`** on i18n JSON
  files with non-ASCII content. Always go through Node + `JSON.parse` /
  `JSON.stringify(obj, null, "\t")`.
- **Typographic quotes:** `„` (U+201E), `"` (U+201C), `«» ""` look
  identical to ASCII `"` in the terminal. Use Unicode escape
  sequences in JS source: `"Kleebised \u201EBitcoin\u201C"`.
  `JSON.stringify` writes proper Unicode to disk.
- **Tab indentation** is mandatory:
  `JSON.stringify(obj, null, "\t")`.
- Each helper script should be **idempotent** (safe to re-run).

### Manual-translation alternative

For small reports (<100 entries total), editing
`scripts/i18n-audit/reports/<code>.json` directly via `write_to_file`
is often faster. The report is a standard JSON file; just fill in
the `targetTranslation` fields in place.

## Step 3 — Apply translations + auto-verify

Once every entry has `targetTranslation` filled in:

```bash
node scripts/i18n-audit/apply-translations.js <code>
```

This merges every resolved entry into the corresponding
`i18n/<code>/**/*.json` files, bumps `@metadata.last-updated` to
today, reorders keys to match the English canonical order, archives
the completed report to
`scripts/i18n-audit/reports/applied/<code>-<timestamp>.json`, **writes
the marker at `scripts/i18n-audit/v2-refresh-status/<code>.json`
pinning the current `manifestVersion`**, and then runs
`verify-language.js`.

### Flag cheat-sheet

| Flag             | Effect                                                                                      |
|------------------|---------------------------------------------------------------------------------------------|
| (default)        | Apply report → write marker → archive → run verify-language.js. Exit 0 only on clean verification. |
| `--dry-run`      | Preview the file writes without actually writing. Skips marker + verify.                     |
| `--partial`      | Allow the apply to succeed even with some entries still `null`. Marker is NOT written when manifest entries remain unresolved. |
| `--skip-verify`  | Do the apply + marker + archive but skip verify. Useful for iterative chunk runs.            |
| `--verify-only`  | Skip the apply step entirely; just run verify-language.js against current disk state.        |

### Marker write rule

`apply-translations.js` writes the per-locale marker **only when every
manifest entry in the current report was resolved**. If any
`manifest-changed` or `manifest-added` entry has `targetTranslation:
null`, the marker is NOT written and subsequent `language-diff.js`
runs will continue to include those entries.

When chunking by namespace, the marker is written after the final
(unfiltered) apply that resolves the last remaining manifest entries.

### Verification

`verify-language.js` checks four things:

1. **Marker** — exists and matches current `manifestVersion`.
2. **Locale-specific** — no `missing` / `untranslated` entries.
3. **Manifest coverage** — no outstanding `manifest-changed` /
   `manifest-added` entries.
4. **Stale English** — no target value is byte-identical to a
   manifest-changed entry's `englishValueBefore` (i.e. nobody is
   translating the old English by accident).

Any failure → exit 1. You can't claim the language is done when
issues remain.

### What to do when verification fails

- **Missing marker / manifest coverage issue** — re-run
  `language-diff.js <code>` to regenerate a fresh report. Translate
  the still-flagged entries. Re-apply.
- **Locale-specific issues** — `language-diff.js` report will include
  the specific missing/untranslated keys. Translate + apply.
- **Stale English check failure** — unusual. Means a target value is
  byte-identical to pre-V2 English. This usually means a translation
  helper accidentally overwrote a value with the English source.
  Find and fix in place via another Node helper script.
- **Legitimate brand names not in the allow-list** — add to the
  appropriate allow-list:
  - `scripts/i18n-audit/build-v2-manifest.js` →
    `BRAND_IDENTICAL_KEY_PATTERNS` or `BRAND_IDENTICAL_KEYS` (then
    regenerate the manifest, because excluded brand keys aren't in
    the manifest)
  - `scripts/i18n-audit/language-diff.js` → `BRAND_IDENTICAL_VALUES`,
    `BRAND_IDENTICAL_KEYS`, or `SHORT_ALLOWED_IDENTICAL`

After any fix, re-run:

```bash
node scripts/i18n-audit/apply-translations.js <code> --verify-only
```

## Step 4 — Build verification

```bash
npm run build
```

Should complete cleanly across all 55 locales × 81 pages (~4,700
prerendered routes). Zero `MISSING_MESSAGE` errors, zero
"Unable to load message" warnings.

## Step 5 — Update the checklist + memory bank

1. Tick the language off in **`V2-REDESIGN-CHECKLIST.md`** § "Step 5 —
   Re-translate updated + new keys for every language".
2. Prepend a short entry to **`memory-bank/activeContext.md`**
   documenting: (a) language code + name, (b) report stats,
   (c) how the work was split, (d) any edge cases.
3. Update **`memory-bank/progress.md`** — increment the "Step 5"
   counter.
4. Commit everything as a single PR:
   `i18n: manifest refresh — <Name> (<code>)`.
   - Include: `i18n/<code>/**/*.json`, the archived report at
     `scripts/i18n-audit/reports/applied/<code>-<timestamp>.json`,
     the marker at `scripts/i18n-audit/v2-refresh-status/<code>.json`,
     any per-category helper scripts under
     `scripts/<code>-manifest-refresh/*.js`, the checklist tick, and
     the memory-bank updates.

## Regenerating the manifest

This is a rare operation. Do it only when English has been given
another round of substantial rewrites and you want every locale's
marker to go stale so their diff reports re-flag the updated keys.

```bash
# 1. Freshly snapshot current English
node scripts/i18n-audit/snapshot-english.js

# 2. Rebuild the manifest (will use english-snapshot-preV2.json as
#    the immutable baseline)
node scripts/i18n-audit/build-v2-manifest.js
```

The new manifest will have a different `manifestVersion` hash. Every
existing `v2-refresh-status/<lang>.json` marker will no longer
match → the next `language-diff.js <lang>` run will include all
manifest entries again → translators work through the delta, apply,
marker gets updated to the new hash → locale is done.

**Do NOT regenerate the pre-V2 snapshot.** It's a frozen artifact of
the repo captured from commit `133d5b98` via
`snapshot-english-at-commit.js`. It's the permanent definition of
"what was translated against, pre-V2."

If a future large rewrite warrants a NEW baseline (not a continuation
of V2), capture it with:

```bash
node scripts/i18n-audit/snapshot-english-at-commit.js <sha>
```

— but discuss that architecture change first.

## Quick Summary of Commands

| # | Command | Purpose |
|---|---------|---------|
| 0 | `node scripts/i18n-audit/snapshot-english.js` | Freshly snapshot current English (run before each session). |
| 1 | `node scripts/i18n-audit/language-diff.js <code>` | Generate per-language work queue. |
| 2 | (translate the report) | Fill `targetTranslation` in every entry. Split into helpers if needed. |
| 3 | `node scripts/i18n-audit/apply-translations.js <code>` | Merge translations → JSON files, write marker, archive, auto-verify. Exit 1 on any audit issue. |
| 4 | `npm run build` | Confirm clean render across 55 locales × 81 pages. |
| 5 | Edit `V2-REDESIGN-CHECKLIST.md` + `memory-bank/` | Tick the language off + document the pass. |

Re-check only: `node scripts/i18n-audit/apply-translations.js <code> --verify-only`

## Language Code Reference

Use these codes (sorted alphabetically by native name, matching
`lib/i18n/config.ts`):

| Code  | Native Name        | English Name        | RTL? |
|-------|--------------------|---------------------|------|
| af    | Afrikaans          | Afrikaans           |      |
| am    | አማርኛ               | Amharic             |      |
| ar    | العربية            | Arabic              | ✓    |
| az    | Azərbaycanca       | Azerbaijani         |      |
| bg    | български          | Bulgarian           |      |
| bn    | বাংলা              | Bengali             |      |
| ca    | Català             | Catalan             |      |
| cs    | Čeština            | Czech               |      |
| da    | Dansk              | Danish              |      |
| de    | Deutsch            | German              |      |
| el    | Ελληνικά           | Greek               |      |
| es    | Español            | Spanish             |      |
| et    | Eesti              | Estonian            |      |
| eu    | Euskara            | Basque              |      |
| fa    | فارسی              | Persian             | ✓    |
| fi    | Suomi              | Finnish             |      |
| fil   | Filipino           | Filipino            |      |
| fr    | Français           | French              |      |
| ga    | Gaeilge            | Irish               |      |
| ha    | Hausa              | Hausa               |      |
| he    | עברית              | Hebrew              | ✓    |
| hi    | हिन्दी              | Hindi               |      |
| hr    | Hrvatski           | Croatian            |      |
| hu    | Magyar             | Hungarian           |      |
| id    | Indonesia          | Indonesian          |      |
| it    | Italiano           | Italian             |      |
| ja    | 日本語              | Japanese            |      |
| ko    | 한국어              | Korean              |      |
| lt    | Lietuvių           | Lithuanian          |      |
| ms    | Melayu             | Malay               |      |
| my    | မြန်မာ              | Burmese             |      |
| nb    | Norsk              | Norwegian (Bokmål)  |      |
| nl    | Nederlands         | Dutch               |      |
| ny    | Chicheŵa           | Chichewa            |      |
| pa    | ਪੰਜਾਬੀ             | Punjabi             |      |
| pl    | Polski             | Polish              |      |
| pt    | Português          | Portuguese          |      |
| ro    | Română             | Romanian            |      |
| ru    | Русский            | Russian             |      |
| si    | සිංහල             | Sinhala             |      |
| sk    | Slovenčina         | Slovak              |      |
| sl    | Slovenščina        | Slovenian           |      |
| sv    | Svenska            | Swedish             |      |
| sw    | Kiswahili          | Swahili             |      |
| ta    | தமிழ்              | Tamil               |      |
| th    | ภาษาไทย             | Thai                |      |
| tl    | Tagalog            | Tagalog             |      |
| tr    | Türkçe             | Turkish             |      |
| ur    | اردو               | Urdu                | ✓    |
| uz    | O'zbekcha          | Uzbek               |      |
| vi    | Tiếng Việt         | Vietnamese          |      |
| yo    | Yorùbá             | Yoruba              |      |
| zh    | 中文                | Chinese (Mandarin)  |      |
| zu    | isiZulu            | Zulu                |      |

### Recommended session order (biggest-audience first)

1. **Tier 1 (global reach):** `es`, `fr`, `de`, `pt`, `zh`, `ja`,
   `ru`, `ar`, `hi`.
2. **Tier 2 (regional reach):** `it`, `nl`, `pl`, `tr`, `ko`, `vi`,
   `id`, `th`, `he`, `fa`.
3. **Tier 3 (everything else):** remaining 35 locales alphabetically.
