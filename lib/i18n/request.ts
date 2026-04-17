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
	// Phase 7b — four more comparison pages.
	"bitcoin-vs-banks",
	"bitcoin-vs-bonds",
	"bitcoin-vs-real-estate",
	"bitcoin-vs-crypto",
	// Phase 7c — final three comparisons + bank-runs content page.
	"bitcoin-vs-visa",
	"bitcoin-vs-cbdc",
	"bitcoin-vs-fine-art",
	"bank-runs",
	// Phase 8 — content pages (about + get-involved).
	"about",
	"get-involved",
	// Phase 9a — Bucket B educational pages (V1 faithful port).
	"wallets",
	"lightning",
	"flyers",
	"compound-inflation-calculator",
	// Phase 9b — form pages + successes.
	"stickers",
	"signs",
	"postcards",
	"buy",
	"sticker-success",
	"sign-success",
	"postcard-success",
	"sticker-language-success",
	// Phase 10 — business section.
	"business/index",
	"business/why",
	"business/faq",
	"business/guide",
	"business/wallets",
	"business/accounting",
	"business/stickers",
	"business/maps",
	"business/kit",
	"business/kit-success",
	"business/maps-success",
	"business/sticker-success",
	"business/sticker-language-success",
	// Phase 11 — sticker-files index + per-language pages. Each language
	// has its own `sticker-files/<lang>/index` namespace with
	// `<lang>_bitcoin_sticker_files` + `<lang>_header` + `<lang>_description`
	// keys; since they're page-specific we load all 43 at once (they're
	// each only 3-4 keys, ~200 bytes per locale per namespace — negligible).
	"sticker-files/index",
	"sticker-files/afrikaans/index",
	"sticker-files/arabic/index",
	"sticker-files/basque/index",
	"sticker-files/bulgarian/index",
	"sticker-files/catalan/index",
	"sticker-files/chinese/index",
	"sticker-files/croatian/index",
	"sticker-files/czech/index",
	"sticker-files/danish/index",
	"sticker-files/dutch/index",
	"sticker-files/english/index",
	"sticker-files/estonian/index",
	"sticker-files/filipino/index",
	"sticker-files/finnish/index",
	"sticker-files/french/index",
	"sticker-files/german/index",
	"sticker-files/greek/index",
	"sticker-files/hausa/index",
	"sticker-files/hebrew/index",
	"sticker-files/hindi/index",
	"sticker-files/hungarian/index",
	"sticker-files/indonesian/index",
	"sticker-files/irish/index",
	"sticker-files/italian/index",
	"sticker-files/japanese/index",
	"sticker-files/korean/index",
	"sticker-files/malay/index",
	"sticker-files/norwegian/index",
	"sticker-files/persian/index",
	"sticker-files/polish/index",
	"sticker-files/portuguese/index",
	"sticker-files/russian/index",
	"sticker-files/sinhala/index",
	"sticker-files/slovak/index",
	"sticker-files/slovenian/index",
	"sticker-files/spanish/index",
	"sticker-files/swahili/index",
	"sticker-files/swedish/index",
	"sticker-files/thai/index",
	"sticker-files/turkish/index",
	"sticker-files/urdu/index",
	"sticker-files/vietnamese/index",
	"sticker-files/yoruba/index",
	// Phase 12 — nostr section.
	"nostr/index",
	"nostr/what-is-nostr",
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
