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
 * including `common`. `index` is the homepage namespace and is small enough
 * (~200 keys) that loading it on every request is fine during Phase 2. Page
 * routes added in later phases can opt into richer namespace lists.
 */
const DEFAULT_NAMESPACES = ["common", "index"] as const;

export default getRequestConfig(async ({ requestLocale }) => {
	const requested = await requestLocale;
	const locale: Locale = hasLocale(locales, requested) ? requested : defaultLocale;

	const messages = await loadMessages(locale, DEFAULT_NAMESPACES);

	return {
		locale,
		messages,
	};
});
