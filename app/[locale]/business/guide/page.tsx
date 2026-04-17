import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BusinessPageShell } from "@/components/BusinessPageShell";
import { BusinessResourceCards } from "@/components/BusinessResourceCards";
import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

/**
 * /[locale]/business/guide — Phase 10 faithful port of business/guide.html.
 */

const SLUG = "business/guide";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-guide-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "accept_bitcoin_payments_at_your_business",
		image: META_IMAGE,
		description: "Bitcoin allows you to accept payments with lower fees and get more customers. This guide shows you how.",
	});
}

export default async function BusinessGuidePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	void l;
	const title = t("accept_bitcoin_payments_at_your_business");
	const description = "Bitcoin allows you to accept payments with lower fees and get more customers. This guide shows you how.";

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description,
		image: META_IMAGE,
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: SLUG,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<BusinessPageShell locale={locale}>
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div className="container-inner">
				<h1 className="h1-inflation">{t("guide_header")}</h1>
			</div>

			<div className="break-micro" />

			{/* This page IS the list of resources, so render the full grid
			    including the Learn card; no header (H1 already communicates it). */}
			<BusinessResourceCards
				locale={locale}
				exclude={["faq", "kit"]}
				showHeader={false}
			/>

			<div className="break-nano" />

			<a href={`${l}/business/faq`}>
				<div className="biz-box biz-faq">
					<div className="container-inner">
						<h3 className="biz-h3" style={{ textTransform: "initial" }}>
							{t("common_biz_faq")}
						</h3>
					</div>
				</div>
			</a>

		</BusinessPageShell>
	);
}
