import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ContentPageLayout } from "@/components/ContentPageLayout";
import { ABOUT } from "@/lib/comparisons/about";
import { type Locale } from "@/lib/i18n/config";
import { getPageTranslations } from "@/lib/i18n/page-translations";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/about — Phase 8 content page.
 *
 * Metadata is built inline (same pattern as `/bank-runs` — the Phase 7
 * `buildComparisonMetadata()` helper takes a `ComparisonPageData`, not
 * a `ContentPageData`, so a one-off inline `generateMetadata()` is
 * cleaner than adding a second wrapper for two callers).
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getPageTranslations(locale as Locale, ABOUT.namespace);
	const title = t(ABOUT.titleKey);
	const description = t(ABOUT.descriptionKey);
	const image = ABOUT.metaImage.startsWith("http")
		? ABOUT.metaImage
		: `https://bitcoin.rocks${
				ABOUT.metaImage.startsWith("/") ? "" : "/"
			}${ABOUT.metaImage}`;

	return {
		title,
		description,
		alternates: buildAlternates({
			locale: locale as Locale,
			slug: ABOUT.slug,
		}),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${ABOUT.slug}`,
			images: [{ url: image, width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
			images: [image],
		},
	};
}

export default async function AboutPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <ContentPageLayout data={ABOUT} locale={locale as Locale} />;
}
