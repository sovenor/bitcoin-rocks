import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BusinessPageShell } from "@/components/BusinessPageShell";
import { BusinessResourceCards } from "@/components/BusinessResourceCards";
import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import Script from "next/script";
import { CountryFormSelector } from "@/components/CountryFormSelector";
import { StickerAddressForm } from "@/components/StickerAddressForm";

/**
 * /[locale]/business/kit — Phase 10 faithful port of business/kit.html.
 */

const SLUG = "business/kit";
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
		description: "Get a free Bitcoin Business Kit to share with local businesses.",
	});
}

export default async function BusinessKitPage({
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
	const description = "Get a free Bitcoin Business Kit to share with local businesses.";

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

			<Script
				src="https://challenges.cloudflare.com/turnstile/v0/api.js"
				strategy="afterInteractive"
				async
				defer
			/>

			<div className="container-inner">
				<h1 className="h1-inflation">{t("kit_header")}</h1>
				<img
					src="/img/bbk/bk-vertical-v2.png"
					className="inline"
					alt={t("kit_header")}
				/>
			</div>

			<div className="break" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p className="step">{t("kit_request")}</p>
					<br />
					<p>{t("kit_request_details")}</p>

					<CountryFormSelector
						placeholderLabel={t("common_choose_your_country")}
						options={[
							{ value: "USA", label: t("common_country_usa") },
							{ value: "Canada", label: t("common_country_canada") },
							{ value: "Print", label: t("kit_country_global_print") },
						]}
					>
						<div id="USA" className="countries" hidden>
							<p>{t("kit_enter_address")}</p>
							<StickerAddressForm
								variant="usa"
								action="https://forms.bitcoin.rocks/submit/business-kit-usa"
							/>
						</div>
						<div id="Canada" className="countries" hidden>
							<p>{t("kit_enter_address")}</p>
							<StickerAddressForm
								variant="canada"
								action="https://forms.bitcoin.rocks/submit/business-kit-canada"
							/>
						</div>
						<div id="Print" className="countries" hidden>
							<p>{t("kit_print_details")}</p>
							<a
								href="/business/files/english/bbk-exterior-v1.pdf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="button button-sticker">
									<p>{t("kit_view_files")}</p>
								</div>
							</a>
							<a
								href={`${l}/business`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="button button-sticker">
									<p>{t("kit_digital_kit")}</p>
								</div>
							</a>
						</div>
					</CountryFormSelector>
				</div>
			</div>

			<div className="break-nano" />

			<h2 className="h2-inflation">{t("kit_resources")}</h2>

			<BusinessResourceCards
				locale={locale}
				exclude={["kit"]}
				showHeader={false}
			/>

		</BusinessPageShell>
	);
}
