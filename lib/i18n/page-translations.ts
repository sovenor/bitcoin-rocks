/**
 * Per-page translation helper.
 *
 * The global request-level messages bag (see `lib/i18n/request.ts`) merges
 * every namespace listed in `DEFAULT_NAMESPACES` into one flat object.
 * That works for unique keys like `common_*` or `home_*`, but it breaks for
 * pages whose namespaces share *generic* key names — most notably the
 * comparison pages, which all define `bitcoin_point_1` … `bitcoin_point_10`
 * and `point_1_summary_1` … `point_N_summary_M` within their own namespace.
 *
 * When those namespaces are merged together last-wins, only the last file's
 * values survive, so every comparison page ends up rendering a scrambled mix
 * of strings from whichever namespace happened to be merged in last.
 *
 * `getPageTranslations()` sidesteps that by loading `common` plus a single
 * page namespace in isolation and returning a simple `(key) => string`
 * resolver. The returned function has the same call-site shape as
 * `next-intl`'s `getTranslations()` return value — `t(key)` — so callers
 * can swap it in with zero other changes.
 *
 * Keys missing from the page's namespace fall back to English (via
 * `loadMessages()` / `loadNamespaceMessages()`), then to the key itself as a
 * last-resort literal — matching `next-intl`'s "don't crash on missing key"
 * philosophy.
 */

import type { Locale } from "./config";
import { loadMessages } from "./load-messages";

/** Function signature compatible with next-intl's `getTranslations()` return. */
export type PageTranslator = (key: string) => string;

/**
 * Load `common` + one page-specific namespace, merged (page wins on collision
 * with common, though that should never happen in practice), and return a
 * resolver.
 */
export async function getPageTranslations(
	locale: Locale,
	namespace: string,
): Promise<PageTranslator> {
	const messages = await loadMessages(locale, ["common", namespace]);
	return (key: string) => {
		const value = messages[key];
		return typeof value === "string" ? value : key;
	};
}
