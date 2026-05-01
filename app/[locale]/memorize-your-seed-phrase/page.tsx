import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ContentPageLayout } from "@/components/ContentPageLayout";
import { MEMORIZE_YOUR_SEED_PHRASE } from "@/lib/comparisons/memorize-your-seed-phrase";
import { type Locale } from "@/lib/i18n/config";
import { getPageTranslations } from "@/lib/i18n/page-translations";
import { buildAlternates } from "@/lib/schema/hreflang";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getPageTranslations(
		locale as Locale,
		MEMORIZE_YOUR_SEED_PHRASE.namespace,
	);
	const title = t(MEMORIZE_YOUR_SEED_PHRASE.titleKey);
	const description = t(MEMORIZE_YOUR_SEED_PHRASE.descriptionKey);

	return {
		title,
		description,
		alternates: buildAlternates({
			locale: locale as Locale,
			slug: MEMORIZE_YOUR_SEED_PHRASE.slug,
		}),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${MEMORIZE_YOUR_SEED_PHRASE.slug}`,
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
		},
	};
}

export default async function MemorizeYourSeedPhrasePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return (
		<ContentPageLayout
			data={MEMORIZE_YOUR_SEED_PHRASE}
			locale={locale as Locale}
		/>
	);
}
