import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { ContentPageLayout } from "@/components/ContentPageLayout";
import { BANK_RUNS } from "@/lib/comparisons/bank-runs";
import { type Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/bank-runs — Phase 7c content page (not a chip-pair comparison).
 *
 * Metadata is built inline here instead of reusing `buildComparisonMetadata`
 * because `ContentPageData` has a different shape (no `metaImage` chosen
 * from `ComparisonPageData`). Kept verbose rather than adding a second
 * generic helper just for one caller.
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t(BANK_RUNS.titleKey);
	const description = t(BANK_RUNS.descriptionKey);
	const image = BANK_RUNS.metaImage.startsWith("http")
		? BANK_RUNS.metaImage
		: `https://bitcoin.rocks${
				BANK_RUNS.metaImage.startsWith("/") ? "" : "/"
			}${BANK_RUNS.metaImage}`;

	return {
		title,
		description,
		alternates: buildAlternates({
			locale: locale as Locale,
			slug: BANK_RUNS.slug,
		}),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${BANK_RUNS.slug}`,
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

export default async function BankRunsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <ContentPageLayout data={BANK_RUNS} locale={locale as Locale} />;
}
