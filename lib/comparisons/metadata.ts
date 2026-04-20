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
	const image = data.metaImage.startsWith("http")
		? data.metaImage
		: `https://bitcoin.rocks${data.metaImage.startsWith("/") ? "" : "/"}${data.metaImage}`;

	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: data.slug }),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${data.slug}`,
			images: [
				{
					url: image,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
			images: [image],
		},
	};
}
