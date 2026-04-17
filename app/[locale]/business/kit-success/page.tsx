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
 * /[locale]/business/kit-success — Phase 10 faithful port of business/kit-success.html.
 */

const SLUG = "business/kit-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-kit-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "bitcoin_business_kit",
		image: META_IMAGE,
		description: "Your Bitcoin Business Kit is on its way.",
	});
}

export default async function BusinessKitSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	void l;
	const title = t("bitcoin_business_kit");
	const description = "Your Bitcoin Business Kit is on its way.";

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
				<h1 className="h1-inflation">SUCCESS!</h1>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-stickers">{t("kit_success_header")}</h2>
				</div>
			</div>

			<div className="break-micro" />

			<BusinessResourceCards locale={locale} exclude={["kit"]} />

		</BusinessPageShell>
	);
}
