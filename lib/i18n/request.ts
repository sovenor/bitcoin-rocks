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
	// ─────────────────────────────────────────────────────────────
	// Note — comparison pages (`bitcoin-vs-*`) + the content pages
	// that use `ComparisonPageLayout` / `ContentPageLayout`
	// (`bank-runs`, `about`, `get-involved`) are intentionally NOT
	// loaded globally. Each of those namespaces reuses the same
	// generic key names (`bitcoin_point_1` … `point_1_summary_1` …)
	// so merging them into one flat bag overwrites values with
	// "last-wins" semantics and scrambles every comparison page's
	// explanations.
	//
	// Those layouts now call `getPageTranslations(locale, namespace)`
	// from `lib/i18n/page-translations.ts`, which loads `common` +
	// just that one namespace in isolation. No more cross-namespace
	// pollution.
	// ─────────────────────────────────────────────────────────────
	// Phase 9a — Bucket B educational pages (V1 faithful port).
	"wallets",
	"lightning",
	"flyers",
	"bitcoin-node-guide",
	"compound-inflation-calculator",
	// Phase 9b — form pages + successes.
	"stickers",
	"buy",
	"sticker-success",
	"sticker-language-success",
	// Phase 10 — business section.
	"business/index",
	"business/why",
	"business/faq",
	"business/wallets",
	"business/accounting",
	"business/stickers",
	"business/sticker-files/english/index",
	"business/maps",
	"business/maps-success",
	"business/sticker-success",
	"business/sticker-language-success",
	// Phase 11 — sticker-files picker page. The per-language pages
	// (`/sticker-files/<lang>`) no longer need their own namespaces — the
	// V2 page at `app/[locale]/sticker-files/[lang]/page.tsx` builds its
	// H1 in-code ("Download <LangName> Bitcoin Sticker Files") from the
	// `common_language_<name>` keys, and everything else on the page is
	// served from `common` (mission paragraphs, sticker-card meta, tips,
	// what's-next cards). The English-page-only "PRINT THESE IN 1 CLICK"
	// CTA was consolidated into `common_sticker_files_print_these` on
	// 2026-04-23 by `scripts/i18n-audit/consolidate-sticker-files-langs.js`.
	"sticker-files/index",
	// Phase 12 — nostr section. (Was 2 namespaces; /nostr/what-is-nostr
	// was folded into /nostr during the V2 redesign on 2026-04-23.)
	"nostr/index",
	// Phase 13 — 404 page strings (`404_title`, `404_message`, `404_home`).
	"404",
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
