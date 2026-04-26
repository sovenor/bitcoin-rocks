import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { type Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * Shared metadata helper for all /business/* pages.
 *
 * Callers pass the slug (`business`, `business/why`, etc.), the meta image,
 * and the two i18n keys that supply <title> and <description>. Returns a
 * fully-wired `Metadata` object (canonical, hreflang alternates, OpenGraph,
 * Twitter card).
 */

export async function buildBusinessMetadata({
	locale,
	slug,
	titleKey,
	descriptionKey,
	image,
	description,
}: {
	locale: string;
	slug: string;
	titleKey: string;
	/** Optional fallback description — used if no i18n key applies. */
	descriptionKey?: string;
	description?: string;
	image: string;
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
			images: [{ url: image, width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description: desc,
			images: [image],
		},
	};
}
