import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { NostrPageLayout } from "@/components/NostrPageLayout";
import { type Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/nostr — Phase 12 port of `nostr/index.html`.
 * Delegates to the shared `<NostrPageLayout>` — only title / hero H1 /
 * description keys + breadcrumb slug differ between the two nostr pages.
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("escape_the_matrix_with_nostr");
	const description = t("nostr_page_description");
	const image = "https://bitcoin.rocks/img/meta/meta-nostr-home-v1.png";

	return {
		title,
		description,
		alternates: buildAlternates({
			locale: locale as Locale,
			slug: "nostr",
		}),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/nostr`,
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

export default async function NostrIndexPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return (
		<NostrPageLayout
			slug="nostr"
			titleKey="escape_the_matrix_with_nostr"
			headerKey="nostr_header"
			descriptionKey="nostr_page_description"
			locale={locale as Locale}
		/>
	);
}
