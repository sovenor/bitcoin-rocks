/**
 * next-intl request config.
 *
 * Runs on every server request; returns the validated locale + the message
 * bag for the current route. `createNextIntlPlugin(...)` in `next.config.ts`
 * points at this file.
 *
 * During Phase 2 we eagerly load the two "root" namespaces (`common` +
 * `index`) so the migration stub page has something to render. Subsequent
 * phases will switch to per-page loading via `useTranslations('namespace')`
 * or pass a targeted set of namespaces into `loadMessages()`.
 */

import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";

import { defaultLocale, locales, type Locale } from "./config";
import { loadMessages } from "./load-messages";

/**
 * Namespaces loaded for every request right now.
 *
 * The legacy site loads `common` + `<page>` together; mirror that by always
 * including `common`. `index` is the homepage namespace; `inflation` is added
 * in Phase 6 because the nav + footer + homepage links reference a few
 * `inflation_*` keys, and including it across the board keeps the message
 * loader in one place (in-memory cached per locale so the overhead is read
 * only once). Future phases may switch to per-page namespace sets via
 * middleware + `headers()` pathname detection if bundle size becomes an
 * issue, but at ~1,000 combined keys we're nowhere near that threshold.
 */
const DEFAULT_NAMESPACES = [
	"common",
	"index",
	"inflation",
	// Phase 7a — comparison pages ship here so `ComparisonPageLayout`
	// can resolve every page's strings from the same translations bag.
	// Adding unused namespaces is cheap (cached in-memory, read-once per
	// locale per build) and keeps `<Navbar>` / `<Footer>` strings + the
	// per-page bundle available side-by-side.
	"bitcoin-vs-gold",
	"bitcoin-vs-stocks",
	"bitcoin-vs-cash",
] as const;

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale;
	const locale: Locale = hasLocale(locales, requested) ? requested : defaultLocale;

	const messages = await loadMessages(locale, DEFAULT_NAMESPACES);

	return {
		locale,
		messages,
	};
});
