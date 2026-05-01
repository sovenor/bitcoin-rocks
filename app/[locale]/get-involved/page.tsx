import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ContentPageLayout } from "@/components/ContentPageLayout";
import { GET_INVOLVED } from "@/lib/comparisons/get-involved";
import { type Locale } from "@/lib/i18n/config";
import { getPageTranslations } from "@/lib/i18n/page-translations";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/get-involved — Phase 8 content page.
 *
 * Same page shape as `/about` and `/bank-runs`: `ContentPageLayout`
 * renders the two-line hero, sequence of H2 + paragraphs, the global
 * "What's next?" card grid, and the sources + publisher attribution.
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getPageTranslations(
		locale as Locale,
		GET_INVOLVED.namespace,
	);
	const title = t(GET_INVOLVED.titleKey);
	const description = t(GET_INVOLVED.descriptionKey);

	return {
		title,
		description,
		alternates: buildAlternates({
			locale: locale as Locale,
			slug: GET_INVOLVED.slug,
		}),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${GET_INVOLVED.slug}`,
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
		},
	};
}

export default async function GetInvolvedPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <ContentPageLayout data={GET_INVOLVED} locale={locale as Locale} />;
}
