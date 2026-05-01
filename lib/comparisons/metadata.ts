/**
 * Shared `generateMetadata()` helper for Phase 7 comparison pages.
 *
 * Every comparison page's metadata has the exact same shape — meta title,
 * meta description, OpenGraph article card, Twitter summary_large_image,
 * and per-locale hreflang alternates — so centralizing here means each
 * `page.tsx` just calls `buildComparisonMetadata(DATA, params)`.
 *
 * Uses `getPageTranslations()` (not the global `getTranslations()` bag) so
 * comparison pages with shared generic keys like `bitcoin_vs_*` don't
 * collide across namespaces. See `lib/i18n/page-translations.ts` for why.
 *
 * No `openGraph.images` / `twitter.images` here: each comparison page has
 * its own `opengraph-image.tsx` that Next auto-injects into the metadata.
 * Setting `images` in code would replace (not merge with) the file-based
 * one, leaving the dynamic per-locale image orphaned. The static
 * `data.metaImage` stays in the data file as a documented fallback.
 */

import type { Metadata } from "next";

import type { ComparisonPageData } from "./types";
import { type Locale } from "@/lib/i18n/config";
import { getPageTranslations } from "@/lib/i18n/page-translations";
import { buildAlternates } from "@/lib/schema/hreflang";

export async function buildComparisonMetadata(
	data: ComparisonPageData,
	locale: string,
): Promise<Metadata> {
	const t = await getPageTranslations(locale as Locale, data.namespace);
	const title = t(data.titleKey);
	const description = t(data.descriptionKey);

	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: data.slug }),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${data.slug}`,
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
		},
	};
}
