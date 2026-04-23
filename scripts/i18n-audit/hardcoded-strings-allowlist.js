/**
 * Allow-list for the hardcoded-English audit (Step 3.5).
 *
 * The audit scanner (`find-hardcoded-strings.js`) flags any user-facing
 * English string literal in `app/` or `components/` that isn't coming
 * from `t(...)` / `getTranslations()` / `useTranslations()`. A small
 * number of literals are legitimate and should NEVER be translated:
 *
 *   - Brand / proper nouns we intentionally render verbatim in every
 *     locale (e.g. "bitcoin.rocks", "Bitcoin" when used as the name of
 *     the protocol in contexts where a translated equivalent would be
 *     wrong).
 *   - Machine-readable constants that happen to use English words but
 *     are NOT user-facing (e.g. Schema.org `@type` values, OpenGraph
 *     `type: "website"`, `card: "summary_large_image"`).
 *   - Image alt-text that is itself a brand name (e.g. `alt="bitcoin.rocks"`).
 *   - Attribute values that are really identifiers (e.g.
 *     `itemProp="articleBody"`).
 *
 * Each entry below must include a `reason` explaining why the literal is
 * intentional. Entries without `reason` are rejected by the scanner to
 * prevent accidental rubber-stamping.
 *
 * Match semantics:
 *   - `snippet`  (required) — exact literal text (without surrounding
 *     quotes) that the scanner found.
 *   - `file`     (optional) — repo-relative path. If set, the allow-list
 *     entry only matches that file. If omitted, it matches anywhere.
 *   - `kind`     (optional) — "jsx-text" | "attribute" | "metadata" |
 *     "schema". If set, only matches findings of that kind.
 *   - `reason`   (required) — human-readable justification.
 */

"use strict";

/**
 * Strings that are ALWAYS allow-listed no matter where they appear.
 * Keep this list tight — only truly universal literals (brand names,
 * schema constants) belong here. Page-specific or file-specific
 * allow-listing should go in `FILE_SPECIFIC_ALLOWLIST` below.
 */
const GLOBAL_ALLOWLIST = [
	// ── Brand / proper nouns ──
	{ snippet: "bitcoin.rocks", reason: "Brand name — never translated." },
	{ snippet: "Bitcoin.rocks", reason: "Brand name — never translated." },
	{ snippet: "Bitcoin Rocks", reason: "Brand name — never translated." },
	{ snippet: "hi@bitcoin.rocks", reason: "Brand email address — verbatim in every locale." },

	// ── OpenGraph / Twitter card / schema constants (machine-readable) ──
	{ snippet: "website", kind: "metadata", reason: "OpenGraph type — spec constant." },
	{ snippet: "article", kind: "metadata", reason: "OpenGraph type — spec constant." },
	{ snippet: "summary_large_image", reason: "Twitter card type — spec constant." },
	{ snippet: "summary", kind: "metadata", reason: "Twitter card type — spec constant." },
	{ snippet: "Article", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "WebPage", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "Organization", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "WebSite", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "BreadcrumbList", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "ListItem", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "Person", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "ImageObject", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "FAQPage", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "Question", kind: "schema", reason: "Schema.org @type — spec constant." },
	{ snippet: "Answer", kind: "schema", reason: "Schema.org @type — spec constant." },
];


/**
 * Per-file overrides. Use sparingly — a finding here means the literal is
 * intentional in THIS file but would still be flagged elsewhere. The
 * scanner matches on (file, snippet) pairs; `kind` is optional.
 */
const FILE_SPECIFIC_ALLOWLIST = [
	// ── Root `app/not-found.tsx` — unlocalized fallback ──
	// This file renders the global 404 page for URLs that can't resolve
	// a locale AT ALL (middleware normally redirects `/` → `/<locale>`
	// so this path is rarely hit). It's fully outside the next-intl
	// context — calling `getTranslations()` here throws. The English
	// strings are the intentional fallback when no locale is in play.
	{
		file: "app/not-found.tsx",
		snippet: "404 Error | Page Not Found | bitcoin.rocks",
		reason: "Unlocalized global 404 — no next-intl context to translate against.",
	},
	{
		file: "app/not-found.tsx",
		snippet: "Bitcoin rocks, but this broken page does not.",
		reason: "Unlocalized global 404 — no next-intl context to translate against.",
	},
	{
		file: "app/not-found.tsx",
		snippet: "Back to Home",
		reason: "Unlocalized global 404 — no next-intl context to translate against.",
	},

	// ── Locale catch-all — English fallback inside try/catch ──
	// `app/[locale]/[...rest]/page.tsx` tries `getTranslations()` for the
	// translated 404 first and only falls back to this English literal
	// when the translator can't resolve (e.g. transient hot-reload edge
	// case). The literal IS the intentional recovery path.
	{
		file: "app/[locale]/[...rest]/page.tsx",
		snippet: "404 Error | Page Not Found",
		reason: "English fallback inside try/catch when getTranslations() fails.",
	},

	// ── Sticker-files [lang] — English fallback inside try/catch ──
	// Same pattern: the translated `404_not_found_short` is tried first;
	// this English literal is only used when next-intl can't resolve.
	{
		file: "app/[locale]/sticker-files/[lang]/page.tsx",
		snippet: "Not Found",
		reason: "English fallback inside try/catch when getTranslations() fails.",
	},

	// ── Locale layout — English fallback for metadata description ──
	{
		file: "app/[locale]/layout.tsx",
		snippet: "Bitcoin education for everyone.",
		reason: "English fallback for common_site_tagline when next-intl fails.",
	},

	// ── Root layout — unlocalized (no next-intl context) ──
	{
		file: "app/layout.tsx",
		snippet: "Bitcoin education for everyone.",
		reason: "Unlocalized root metadata — no next-intl context (locale layout overrides for real pages).",
	},

	// ── Compound Inflation Calculator — schema.org CreativeWork names ──
	// These are the canonical English names of U.S. government datasets
	// (CPI, M1) passed into `buildArticleSchema({ citations })`. Schema.org
	// `name` values here are consumed by search engines / AI systems as
	// machine-readable citations, not rendered to end users; translating
	// them would break the citation chain to the upstream data source.
	{
		file: "app/[locale]/compound-inflation-calculator/page.tsx",
		snippet: "Consumer Price Index for All Urban Consumers",
		reason: "Canonical dataset name on FRED — used as schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/compound-inflation-calculator/page.tsx",
		snippet: "M1 Money Supply",
		reason: "Canonical dataset name on FRED — used as schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/compound-inflation-calculator/page.tsx",
		snippet: "Consumer Price Index",
		reason: "Canonical dataset name on BLS — used as schema.org citation, not UI copy.",
	},

	// ── Inflation page — schema.org CreativeWork names (same reasoning) ──
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "M1 Money Supply (U.S. Dollar)",
		reason: "Canonical FRED dataset name — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Narrow Money Supply — International Series",
		reason: "Canonical FRED dataset name — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Consumer Price Index for All Urban Consumers",
		reason: "Canonical FRED dataset name — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Consumer Price Index",
		reason: "Canonical BLS dataset name — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Federal Debt: Total Public Debt",
		reason: "Canonical FRED dataset name — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Bitcoin Price Report — 4-year performance charts",
		reason: "Publisher/title of a schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Bitcoin Supply & Mining Data",
		reason: "Publisher/title of a schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Bitcoin Source Code — 21 Million Supply Cap",
		reason: "Publisher/title of a schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
		reason: "Canonical whitepaper title — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Can a Treasury Auction Fail?",
		reason: "External article title — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Canadian trucker protest: Bitcoin used to bypass frozen bank accounts",
		reason: "External article title — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "How Bitcoin powered Nigeria's EndSARS protests",
		reason: "External article title — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Texas Bitcoin mining and the electric grid",
		reason: "External article title — schema.org citation, not UI copy.",
	},
	{
		file: "app/[locale]/inflation/page.tsx",
		snippet: "Pennsylvania Bitcoin mining reclaims waste methane",
		reason: "External article title — schema.org citation, not UI copy.",
	},
];


/**
 * Regex patterns that match "technical" strings the scanner should never
 * flag. These are applied BEFORE the allow-list lookup; if a literal
 * matches any of these patterns it is silently skipped.
 */
const IGNORED_STRING_PATTERNS = [
	// URLs / paths / protocols
	/^https?:\/\//i,
	/^mailto:/i,
	/^tel:/i,
	/^#/,
	/^\/[a-zA-Z0-9/_.-]*$/, // internal paths like /img/foo.png, /wallets, etc.
	/^\.\.?\//, // relative paths
	// Hex colors
	/^#?[0-9a-fA-F]{3,8}$/,
	// CSS lengths / sizes
	/^-?\d+(\.\d+)?(px|rem|em|%|vh|vw|vmin|vmax|ch|pt|fr|s|ms)$/i,
	// Single words with no spaces that look like identifiers, class names,
	// or technical tokens. (Multi-word phrases are almost always copy.)
	/^[a-z][a-zA-Z0-9_-]*$/, // lower-snake_case / kebab-case / camelCase
	/^[A-Z][a-zA-Z0-9_-]*$/, // PascalCase or UPPER identifier
	// Pure digits / numbers / percentages
	/^-?\d+(\.\d+)?%?$/,
	// Locale / currency / country codes
	/^[a-z]{2,3}(-[A-Z]{2,4})?$/, // en, en-US, en-GB, zh-Hant, etc.
	/^[A-Z]{3}$/, // ISO 4217 currency codes (USD, EUR, etc.)
	/^[A-Z]{2}$/, // ISO 3166 country codes (US, GB, etc.)
	// HTML entities / special chars
	/^&[a-zA-Z#0-9]+;$/,
	// Whitespace-only
	/^\s*$/,
	// Single non-letter characters or short symbol runs (→, ←, •, —, etc.)
	/^[^\p{Letter}\p{Number}]{1,3}$/u,
	// Unicode escapes and common punctuation glyphs we don't translate
	/^[·•→←↑↓—–…]+$/,
	// MIME types
	/^[a-z]+\/[a-z0-9.+-]+$/i,
	// Number-like abbreviations (K, M, B, etc.)
	/^\d+(\.\d+)?[kKmMbBtT]$/,
];

module.exports = {
	GLOBAL_ALLOWLIST,
	FILE_SPECIFIC_ALLOWLIST,
	IGNORED_STRING_PATTERNS,
};
