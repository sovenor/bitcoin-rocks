/**
 * Reviewed-for-accuracy badge — editorial rigor signal for AI engines.
 *
 * Ports the semantics (but not the HTML-injection mechanism) of
 * `scripts/inject-reviewed-badge.js`. Instead of dynamically inserting
 * a span into legacy HTML, the Next components for educational pages
 * call `getReviewedAccuracyLabel()` + `getReviewedAccuracyYear()`
 * to render the badge in their own JSX.
 *
 * Keeping it as a helper (rather than a full component) lets each
 * page decide exactly where and how to render the badge in its V2
 * design — some will want it in the publisher attribution strip,
 * others just above the footer, etc.
 */

/**
 * The "year reviewed" that gets displayed in the badge. Kept in one
 * place so a yearly sweep requires changing only this constant.
 */
export function getReviewedAccuracyYear(): number {
	return new Date().getUTCFullYear();
}

/** Translation key for the reviewed badge label. Callers use `t(key)`. */
export const REVIEWED_ACCURACY_I18N_KEY = "common_reviewed_accuracy" as const;

/**
 * Fallback default label (English only). Components should prefer
 * calling `t(REVIEWED_ACCURACY_I18N_KEY)` to read the translated
 * string, and only fall back to this when a key isn't present.
 */
export function buildReviewedAccuracyDefault(year = getReviewedAccuracyYear()) {
	return `\u2713 Reviewed for accuracy: ${year}`;
}
