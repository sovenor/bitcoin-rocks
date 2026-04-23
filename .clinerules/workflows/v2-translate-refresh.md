# V2 Translation Refresh (per-language Step 5)

> **Invocation:** `/translate-v2-refresh <Language Name>`
> (e.g. "Afrikaans", "Spanish", "Arabic", "Chinese", "Mandarin")

This workflow drives **one language per session** through Step 5 of the
post-V2 i18n cleanup. For the broader context (Steps 1–4 are already
complete, Step 6 is the final verification sweep) see
`V2-REDESIGN-CHECKLIST.md` § "i18n Translation Cleanup".

Distinct from `translate-new-language.md`:
- `translate-new-language.md` creates all 81 JSON files from scratch
  for a brand-new locale.
- This workflow **refreshes** an existing locale — only touching the
  keys that need translation attention after the V2 redesign
  (missing / untranslated / english-changed / likely-stale). The
  tooling in `scripts/i18n-audit/` (`snapshot-english.js`,
  `snapshot-english-at-commit.js`, `language-diff.js`,
  `apply-translations.js`) does the heavy lifting; your job is to
  translate the flagged entries and run the scripts.

## Pre-check

1. Confirm the locale is already registered.
   - Look up the **language code** for the requested language in the
     table at the bottom of this file (e.g. "Afrikaans" → `af`).
   - Verify `i18n/<code>/` exists. If it doesn't, stop and follow
     `.clinerules/workflows/translate-new-language.md` first — that
     workflow creates all 81 files, then come back here for the V2
     refresh pass.
   - Verify the code is in `lib/i18n/config.ts`'s `languages` array
     AND the `locales` tuple. (Should be — every locale in `i18n/` is
     registered — but double-check.)

2. Confirm **both** English snapshots exist:
   - `scripts/i18n-audit/english-snapshot.json` — current English
     working-tree snapshot (for the `english-snapshot.generatedAt`
     timestamp in the report metadata). Regenerate with:
     ```bash
     node scripts/i18n-audit/snapshot-english.js
     ```
   - `scripts/i18n-audit/english-snapshot-preV2.json` — **frozen**
     pre-V2 baseline captured from git history. This is the critical
     piece that powers the `english-changed` detection. It should
     already exist in the repo — do NOT regenerate it. If for some
     reason it's missing, the correct command is:
     ```bash
     node scripts/i18n-audit/snapshot-english-at-commit.js 133d5b98
     ```
     (`133d5b98` is the last commit before the V2 English-copy rewrites
     began. See the "Pre-V2 baseline" section below for why this
     snapshot exists.)

## Pre-V2 baseline — why it matters

During the V2 redesign (April 2026), many existing English values were
rewritten **in place** — same JSON keys, completely different copy.
For example, `bitcoin-vs-gold.point_3_summary_1` went from three long
sentences explaining the 21M cap + 1.6% gold supply growth to the
short fragment `"Bitcoin has a hard cap of 21 million BTC. Gold's
supply grows about 1.6% per year, shrinking your slice — less than
fiat"`.

Translators who had already translated the V1 copy — Afrikaans was the
first locale refreshed and caught this — still had the *old* long
translations under the *new* short English keys. The old
`language-diff.js` didn't flag these because:
- `missing` — key was still present (false negative)
- `untranslated` — target value didn't byte-match English (false negative)
- `likely-stale` — marker heuristic didn't fire for keys without
  "Source:" / "What's next" in them (false negative)

The **`english-changed`** category (added April 2026) closes this
hole. It compares current English against the frozen
`english-snapshot-preV2.json` baseline and flags every key whose
English was rewritten AND whose target translation hasn't been
touched since. The baseline is a committed artifact of the repo — do
NOT regenerate it. When a locale's files are fully re-translated,
their `@metadata.last-updated >= English.@metadata.last-updated`
causes the `english-changed` tier to skip them (the "freshness gate").

## Step 1 — Generate the per-language diff report

```bash
node scripts/i18n-audit/language-diff.js <code>
```

This writes `scripts/i18n-audit/reports/<code>.json` containing every
entry flagged for translator attention. **Four** "reason" categories
(ranked in that order in the report):

- **missing** — key present in English, absent from the target file.
  Most entries will fall here (≈800 per locale, dominated by the 327
  new `inflation_<code>_<suffix>` per-currency keys added in V2 +
  ≈500 other V2 additions across all pages).
- **untranslated** — key present in both, but target value is
  byte-identical to English (e.g. a translator left a placeholder
  or fallback behind). Brand-name keys and short tokens are exempted
  automatically.
- **english-changed** — *strong stale signal.* English was rewritten
  since the frozen pre-V2 snapshot AND the target translation is
  neither the old nor the new English. Both old and new English are
  included in the report entry (`englishValueBefore` +
  `englishValue`) so the translator can see exactly what changed.
  Only fires for meaningful changes (whitespace / punctuation-only
  tweaks are ignored) and only for files where the target's
  `@metadata.last-updated` is older than the English file's.
- **likely-stale** — heuristic. Target value exists and differs from
  English, but the English value contains V2-era phrasing (like
  "Source:" or "What's next") and the target's length/wording looks
  too old. High false-positive rate for CJK/RTL languages — review
  each one carefully, skip with `--no-flag-likely-stale` if it's
  overwhelming. Demoted below `english-changed` so the strong signal
  gets priority.

Inspect the stats printout. Typical numbers (from the sample locales):

| Locale  | Missing | Untranslated | English-changed | Likely stale | Total to review |
|---------|--------:|-------------:|----------------:|-------------:|----------------:|
| af      | 855     | 61           | 163             | 0            | **1079**        |
| de      | 854     | 72           | ~160            | 0            | **~1086**       |
| zh      | 854     | 31           | ~160            | 1            | **~1046**       |
| ar      | 854     | 30           | ~160            | 0            | **~1044**       |

The `english-changed` count is roughly constant across locales
(~160), because it's measuring English rewrites — the same set of
English strings changed for everyone.

If the **likely-stale** count is disproportionately high (>100 for
CJK/RTL locales, >50 for Latin-script), re-run with
`--no-flag-likely-stale` and note in the session handoff that a
future pass should review existing translations by hand:

```bash
node scripts/i18n-audit/language-diff.js <code> --no-flag-likely-stale
```

### Optional — chunk by namespace

If the combined entry count is too big for a single session's context
budget (e.g. 1000+ entries × ~1KB each + translation drafts ≈ close
to 1M tokens), split the work across namespaces:

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

Every time you re-run the diff, the report is **overwritten**, so
complete + apply one chunk before moving to the next.

## Step 2 — Translate the report entries

The report is a JSON file with these shapes per entry:

### `missing` / `untranslated` / `likely-stale` entries

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

### `english-changed` entries (new in V2 refresh)

```jsonc
{
  "namespace": "bitcoin-vs-gold",
  "key": "point_3_summary_1",
  "reason": "english-changed",
  "englishValue":        "Bitcoin has a hard cap of 21 million BTC. Gold's supply grows about 1.6% per year, shrinking your slice — less than fiat",
  "englishValueBefore":  "Bitcoin has a hard cap of 21 Million BTC that will ever exist.",
  "currentValue":        "Bitcoin het 'n harde plafon van 21 miljoen BTC wat ooit sal bestaan.",
  "targetTranslation": null  // ← write a fresh translation of `englishValue`
}
```

For `english-changed`, the translator should:
1. Read the NEW `englishValue` carefully.
2. Ignore the OLD `englishValueBefore` — it's there for context only.
3. Ignore the `currentValue` — it translates the old English, which
   is wrong now.
4. Write a fresh translation of `englishValue` in `targetTranslation`.

For each entry, set `"targetTranslation"` to the native-language
translation. Brand names and proper nouns stay identical to
English (see below).

### ⚠️ CRITICAL — Every string must be fully translated

Translate **every single** entry into the target language. Do NOT
leave any strings in English. Exceptions (keep identical to English):

- Brand names: `Bitcoin`, `Nostr`, `Lightning`, `Strike`, `Square`,
  `BTCPay Server`, `Breez`, `OpenNode`, `IBEX`, `Zaprite`,
  `bitcoin.rocks`, `BTC Map`, `CoinGecko`, `The Spreadsheet Guru`,
  `Satoshi Pacioli`, `Satoshi Nakamoto`, etc.
- URLs, email addresses (`hi@bitcoin.rocks`).
- Schema.org canonical dataset names (FRED CPI, BLS CPI, FRED M1SL,
  etc. — these are machine-readable citations; translating them
  breaks the citation chain). These should already be allow-listed
  by `language-diff.js` and not appear in the report.
- Currency codes (`USD`, `EUR`, `BTC`). Already allow-listed.
- Dimensions / measurements (`21,000,000`, `1.5 inches`, `100%`).
- Numeric values and timestamps.
- Empty strings (`""`) — intentional placeholders for sentence
  fragments that visually render as nothing.

### ⚠️ Dynamic per-currency keys

The `inflation` namespace has 327 keys matching the pattern
`inflation_<code>_<suffix>` or `inflation_stat_<code>_<suffix>` where
`<code>` is one of the 13 per-currency codes (`usd`, `eur`, `ars`,
`brl`, `cad`, `gbp`, `idr`, `jpy`, `pen`, `php`, `try`, `zar`, `aud`).
These are constructed at runtime by `components/CurrencySection.tsx`
and render the per-currency inflation story. Make sure "dollars",
"pesos", "reais", etc. are translated appropriately for each
currency's context — don't generically translate "your currency" in
place of the specific name.

### Chunking translations (recommended for 500+ entries)

For languages with large reports (every locale in Phase B qualifies),
don't try to translate the whole report in one go. Split by category
into `scripts/<code>-v2-refresh/` helper scripts. Each helper reads
the report JSON, fills in `targetTranslation` for entries matching
its category, and writes back. Recommended breakdown (mirrors
`translate-new-language.md`'s per-category split):

1. `translate-common-index-inflation.js` — the three heaviest
   namespaces (common ≈50, index ≈60, inflation ≈365). Almost half
   the total entries.
2. `translate-comparisons.js` — the 10 bitcoin-vs-\* namespaces
   (~40 missing + ~100 english-changed = ~140 entries total).
3. `translate-business.js` — all 11 `business/*` namespaces
   (~100 entries total, ~40 of which will be english-changed).
4. `translate-sticker-files.js` — the 44 per-language sticker-files
   pages + index (most are tiny — maybe 30 entries total).
5. `translate-content.js` — remaining content pages (about,
   bank-runs, buy, lightning, nostr/index, wallets, get-involved,
   stickers, flyers, compound-inflation-calculator, the 3 success
   pages, 404) — ~200 entries total.

**For the english-changed category specifically**, you can use a
single helper (`retranslate-english-changed.js`) that fills in all
the english-changed entries at once — the Afrikaans pass used this
pattern successfully. See
`scripts/afrikaans-v2-refresh/retranslate-english-changed.js` as a
template.

Each script should **only modify its category's entries**. The apply
script reads the whole report back at the end — no coordination
needed between helpers.

### ⚠️ SCRIPT SIZE + SPECIAL-CHARACTER RULES

These all apply to V2-refresh translation scripts exactly as they do
to `translate-new-language.md`:

- **Always use `write_to_file`** to create translation scripts. Never
  use `cat` heredoc via `execute_command` — that can hang the session
  indefinitely on large non-ASCII payloads (documented Hebrew hang
  in `translate-new-language.md`).
- **Never use inline CLI commands or `replace_in_file`** on i18n JSON
  files with non-ASCII content. Always go through Node + `JSON.parse`
  / `JSON.stringify(obj, null, "\t")`.
- **Typographic quotes:** `„` (U+201E), `"` (U+201C), `«» ""` etc.
  look identical to ASCII `"` in the terminal. Always use Unicode
  escape sequences in JS source: `"Kleebised \u201EBitcoin\u201C"`
  not `"Kleebised „Bitcoin""`. `JSON.stringify` writes the proper
  Unicode characters to disk.
- **Tab indentation** is mandatory: `JSON.stringify(obj, null, "\t")`.
- Each helper script should be **idempotent** (safe to re-run).

### Manual-translation alternative

For small reports (<100 entries total), it's often faster to edit
the `scripts/i18n-audit/reports/<code>.json` file directly via
`write_to_file`. The report is a standard JSON file; just fill in the
`targetTranslation` fields in place.

## Step 3 — Apply translations + auto-verify

Once every entry has `targetTranslation` filled in:

```bash
node scripts/i18n-audit/apply-translations.js <code>
```

This merges every resolved entry into the corresponding
`i18n/<code>/**/*.json` files, bumps `@metadata.last-updated` to
today, reorders keys to match the English canonical order, archives
the completed report to
`scripts/i18n-audit/reports/applied/<code>-<timestamp>.json`, **and
then automatically runs the two post-apply audits**:

1. **`scripts/audit-translation.js <code>`** — flags keys that are
   still missing, byte-identical to English, or (new) still
   reflecting pre-V2 English wording. Uses the older, more permissive
   allow-list.
2. **`scripts/i18n-audit/language-diff.js <code> --dry-run`** — flags
   missing / untranslated / english-changed / likely-stale entries.
   Uses the newer, tighter allow-list.

The script parses both outputs, prints a combined `✅ PASS` / `⚠
ISSUES` verdict per audit, and **exits non-zero if either audit
flagged anything**. You can't accidentally claim the language is done
when issues remain — the session will halt.

### Freshness gate (avoid stuck-forever flags)

Once a namespace has been fully re-translated, `apply-translations.js`
bumps its `@metadata.last-updated` to today. The next diff run sees
that the target file's date is >= the English file's date and
**skips** the english-changed tier for every key in that file. This
is the "freshness gate." It means:

- Running `language-diff.js <code>` immediately after a successful
  apply reports `english-changed: 0` for every touched namespace.
- Editing the English file again in the future (bumping its
  `@metadata.last-updated`) will re-flag english-changed on that
  file's keys until the translator refreshes them. The gate only
  considers files, not individual keys — so a one-character tweak
  to one key in English re-flags every semantically-changed key in
  that file.

### Flag cheat-sheet

| Flag             | Effect                                                                                      |
|------------------|---------------------------------------------------------------------------------------------|
| (default)        | Apply report → archive → auto-run both audits. Exit 0 only on clean verification.            |
| `--dry-run`      | Preview the file writes without actually writing. Skips verification.                        |
| `--partial`      | Allow the apply to succeed even with some entries still `null`; keep unresolved in report.   |
| `--skip-verify`  | Do the apply + archive but skip the post-apply audits. Useful for quick iterative chunk runs.|
| `--verify-only`  | Skip the apply step entirely; just run the two audits against whatever is currently on disk. |

### What to do when verification fails

The two audits print the **exact flagged keys** inline (you'll see
`MISSING KEYS (N):`, `IDENTICAL TO ENGLISH (M):`, and `ENGLISH
CHANGED (P):` blocks). Typical causes:

- **`missing` keys** — your translated report didn't cover every
  entry the diff flagged, or a per-category helper script missed a
  file. Re-run `language-diff.js <code>` to regenerate a fresh report
  containing only the still-missing keys, translate those, then
  `apply-translations.js <code>` again.
- **`identical to English` / `untranslated`** — a translator left an
  English placeholder in the report (or a helper script overwrote a
  translation with the English source). Search the target files for
  the specific keys in the audit output and fix them in place via
  another Node helper script (remember: tab indentation +
  `JSON.stringify(obj, null, "\t")` + Unicode escapes for typographic
  quotes).
- **`english-changed`** — a namespace's target file didn't get its
  `@metadata.last-updated` bumped. Usually this means
  `apply-translations.js` didn't touch that file (no resolved
  entries for that namespace in the report). Either re-run the
  translation helper so it includes entries for that namespace, or
  manually bump the metadata if the translations are genuinely
  already correct.
- **Legitimate sharing** (brand names not in the allow-list, proper
  nouns specific to this locale, etc.) — add them to the appropriate
  allow-list:
  - `scripts/audit-translation.js` → `SKIP_KEY_PATTERNS` or `SKIP_VALUES`
  - `scripts/i18n-audit/language-diff.js` → `BRAND_IDENTICAL_KEYS`,
    `BRAND_IDENTICAL_VALUES`, or `SHORT_ALLOWED_IDENTICAL`

After any fix, re-run:

```bash
node scripts/i18n-audit/apply-translations.js <code> --verify-only
```

to re-check without re-applying.

## Step 4 — Build verification

Once verification passes:

```bash
npm run build
```

Should complete cleanly across all 55 locales × 81 pages (~4,700
prerendered routes). Look for:

- Zero `MISSING_MESSAGE` errors.
- Zero "Unable to load message" warnings for the language you just
  updated.
- Bundle / route counts unchanged from the previous build (both
  before your pass and after should report the same page counts).

## Step 5 — Update the checklist + memory bank

1. Tick the language off in **`V2-REDESIGN-CHECKLIST.md`** § "Step 5 —
   Re-translate updated + new keys for every language" (find the row
   with `[ ] <code> — <Name>` and change `[ ]` → `[x]`).
2. Prepend a short entry to **`memory-bank/activeContext.md`**
   documenting: (a) the language code + name, (b) the report stats
   (total entries, missing, untranslated, english-changed,
   likely-stale), (c) how the work was split (single pass vs.
   per-namespace chunked vs. per-category helper scripts), (d) any
   edge cases or decisions worth remembering.
3. Update **`memory-bank/progress.md`** — increment the "Step 5:
   per-language re-translation" counter (e.g. `3/54 → 4/54`).
4. Commit everything as a single PR: `i18n: Step 5 V2 refresh — <Name> (<code>)`.
   - Include: `i18n/<code>/**/*.json`, the archived report at
     `scripts/i18n-audit/reports/applied/<code>-<timestamp>.json`,
     any per-category helper scripts at
     `scripts/<code>-v2-refresh/*.js`, the checklist tick, and the
     memory-bank updates.

## Quick Summary of Commands

| # | Command | Purpose |
|---|---------|---------|
| 0a | `node scripts/i18n-audit/snapshot-english.js` | One-time: capture current English corpus (run before any language session). |
| 0b | `node scripts/i18n-audit/snapshot-english-at-commit.js 133d5b98` | One-time-only at setup: freeze the pre-V2 English baseline. DO NOT re-run — the snapshot is a committed artifact of the repo. |
| 1 | `node scripts/i18n-audit/language-diff.js <code>` | Generate per-language work queue. Emits four reason tiers including `english-changed` (V2 rewrites). |
| 2 | (translate the report) | Fill `targetTranslation` in every entry. Split into helper scripts if needed. |
| 3 | `node scripts/i18n-audit/apply-translations.js <code>` | Merge translations → 81 JSON files, **auto-run `audit-translation.js` + `language-diff.js --dry-run`, exit 1 if either flags issues**. |
| 4 | `npm run build` | Confirm clean render across 55 locales × 81 pages. |
| 5 | Edit `V2-REDESIGN-CHECKLIST.md` + `memory-bank/` | Tick the language off + document the pass. |

Re-check only (no apply): `node scripts/i18n-audit/apply-translations.js <code> --verify-only`

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

Not strictly required — each language is independent — but
prioritizing high-audience languages first gets the most readers
served-translations soonest:

1. **Tier 1 (global reach):** `es`, `fr`, `de`, `pt`, `zh`, `ja`,
   `ru`, `ar`, `hi`.
2. **Tier 2 (regional reach):** `it`, `nl`, `pl`, `tr`, `ko`, `vi`,
   `id`, `th`, `he`, `fa`.
3. **Tier 3 (everything else):** remaining 35 locales alphabetically.
