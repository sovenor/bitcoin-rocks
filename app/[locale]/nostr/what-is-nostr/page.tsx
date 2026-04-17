import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { NostrPageLayout } from "@/components/NostrPageLayout";
import { type Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/nostr/what-is-nostr — Phase 12 port of `nostr/what-is-nostr.html`.
 * Shares the NostrPageLayout with /nostr; differences are: H1 ("WHAT IS
 * NOSTR?" vs "ESCAPE THE MATRIX WITH NOSTR"), page title, meta
 * description, breadcrumb slug (Home > Nostr > What is Nostr?), and
 * meta image.
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("what_is_nostr");
	const description = t("what_is_nostr_page_description");
	const image = "https://bitcoin.rocks/img/meta/meta-nostr-what-v1.png";

	return {
		title,
		description,
		alternates: buildAlternates({
			locale: locale as Locale,
			slug: "nostr/what-is-nostr",
		}),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/nostr/what-is-nostr`,
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

export default async function WhatIsNostrPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return (
		<NostrPageLayout
			slug="nostr/what-is-nostr"
			titleKey="what_is_nostr"
			headerKey="what_is_nostr_header"
			descriptionKey="what_is_nostr_page_description"
			locale={locale as Locale}
		/>
	);
}
