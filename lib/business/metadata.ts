import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { type Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * Shared metadata helper for all /business/* pages.
 *
 * Callers pass the slug (`business`, `business/why`, etc.) and the two i18n
 * keys that supply <title> and <description>. Returns a fully-wired
 * `Metadata` object (canonical, hreflang alternates, OpenGraph, Twitter
 * card).
 *
 * No `openGraph.images` / `twitter.images` here: each business page now has
 * its own `opengraph-image.tsx` that Next auto-injects into the metadata.
 * Setting `images` in code would replace (not merge with) the file-based
 * one, leaving the dynamic per-locale image orphaned. The `image` argument
 * is kept on the signature so callers (article schema, etc.) can keep
 * passing their static PNG, but it's no longer copied into meta tags.
 */
export async function buildBusinessMetadata({
	locale,
	slug,
	titleKey,
	descriptionKey,
	description,
}: {
	locale: string;
	slug: string;
	titleKey: string;
	/** Optional fallback description — used if no i18n key applies. */
	descriptionKey?: string;
	description?: string;
	/** Retained for call-site compatibility; no longer emitted in meta tags. */
	image?: string;
}): Promise<Metadata> {
	const t = await getTranslations({ locale });
	const title = t(titleKey);
	const desc = description ?? (descriptionKey ? t(descriptionKey) : title);

	return {
		title,
		description: desc,
		alternates: buildAlternates({ locale: locale as Locale, slug }),
		openGraph: {
			title,
			description: desc,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${slug}`,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: desc,
		},
	};
}
