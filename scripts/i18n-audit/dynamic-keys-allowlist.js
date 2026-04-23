/**
 * Dynamic-key allow-list for the i18n audit.
 *
 * The audit script grep-scans `app/`, `components/`, and `lib/` for each English key
 * as a literal substring. Some keys are never referenced literally — they are
 * synthesized at runtime from template literals like
 *     `inflation_${lower}_${suffix}`
 * in `components/CurrencySection.tsx`. This module enumerates those keys so the
 * audit can treat them as "used" even though they don't appear as a literal
 * string anywhere in the source.
 *
 * To teach the audit about a new dynamic-key pattern:
 *   1. Add the expanded key list below.
 *   2. Re-run `node scripts/i18n-audit/find-unused-keys.js`.
 *
 * Keep this list exhaustive — any key not listed AND not referenced literally
 * will be flagged as unused and scheduled for deletion.
 */

"use strict";

/**
 * Currencies covered by `components/CurrencySection.tsx`. The component
 * generates keys of shape `inflation_<lower>_<suffix>` and
 * `inflation_stat_<lower>_<suffix>` for each of these.
 */
const CURRENCY_CODES = [
	"usd",
	"aud",
	"brl",
	"gbp",
	"cad",
	"eur",
	"inr",
	"ils",
	"jpy",
	"mxn",
	"nzd",
	"php",
	"thb",
];

/** Per-currency body-copy suffixes emitted by `CurrencySection.tsx`. */
const INFLATION_BODY_SUFFIXES = [
	"intro_1",
	"intro_2",
	"intro_highlight",
	"proof_h2",
	"proof_p1",
	"proof_p2",
	"proof_p3",
	"proof_p4",
	"proof_p5_before",
	"proof_p5_link",
	"proof_p5_after",
	"proof_p6",
	"btc_h2",
	"btc_p1",
	"btc_p2_before",
	"btc_p2_link",
	"btc_p2_after",
	"btc_p3",
	"btc_p4",
	"freedom_h2",
	"freedom_p1",
	"freedom_p2",
];

/** Per-currency stat-card suffixes emitted by `CurrencySection.tsx`. */
const INFLATION_STAT_SUFFIXES = ["label", "existence_title", "debt_title"];

/** All dynamic keys that should be treated as "used". */
function buildDynamicKeys() {
	const keys = new Set();
	for (const code of CURRENCY_CODES) {
		for (const suffix of INFLATION_BODY_SUFFIXES) {
			keys.add(`inflation_${code}_${suffix}`);
		}
		for (const suffix of INFLATION_STAT_SUFFIXES) {
			keys.add(`inflation_stat_${code}_${suffix}`);
		}
	}
	return keys;
}

/**
 * Additional keys that are "used" even though the source never references
 * them literally. These are usually keys required by the i18n fallback layer
 * or by future/legacy contracts we don't want to disturb.
 */
const EXTRA_USED_KEYS = new Set([
	// Per-page meta `@metadata.last-updated` dates — not rendered but we
	// don't want to nuke the @metadata block, and the audit ignores those
	// anyway. Kept here for documentation purposes.
]);

/**
 * Keys we intentionally want to KEEP even if the audit thinks they're
 * unused — e.g. legacy keys we've promised translators we'll leave alone
 * for one migration cycle so their work isn't lost mid-cleanup, or keys
 * referenced via non-scannable dynamic expressions we can't easily
 * enumerate.
 *
 * Empty by default. Add explicit entries with a comment explaining why.
 */
const MANUAL_KEEP_KEYS = new Set([
	// Example:
	// "some_legacy_key" — kept until 2026-05-01 per translator feedback
]);

module.exports = {
	buildDynamicKeys,
	EXTRA_USED_KEYS,
	MANUAL_KEEP_KEYS,
	CURRENCY_CODES,
	INFLATION_BODY_SUFFIXES,
	INFLATION_STAT_SUFFIXES,
};
