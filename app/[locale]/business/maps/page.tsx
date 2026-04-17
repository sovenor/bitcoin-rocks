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

/**
 * /[locale]/business/maps — Phase 10 faithful port of business/maps.html.
 */

const SLUG = "business/maps";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-maps-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "bitcoin_merchant_maps_list_your_business_for_free",
		image: META_IMAGE,
		description: "List your business for free on Bitcoin merchant maps.",
	});
}

export default async function BusinessMapsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	void l;
	const title = t("bitcoin_merchant_maps_list_your_business_for_free");
	const description = "List your business for free on Bitcoin merchant maps.";

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
				<h1 className="h1-inflation">{t("maps_header")}</h1>
			</div>

			<img
				src="/img/bbk/payment-chart.png"
				className="inline"
				alt={t("maps_header")}
			/>

			<div className="break-micro" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p>{t("maps_request_details")}</p>
					<br />
					<a
						href="https://btcmap.org/"
						target="_blank"
						rel="noopener noreferrer"
						className="orange-link"
					>
						<span>{t("maps_view")}</span>
					</a>

					<div className="break-micro" />

					<form
						action="https://forms.bitcoin.rocks/submit/business-maps"
						method="POST"
					>
						<input type="text" name="name" placeholder="Business Name" required />
						<br />
						<input
							type="text"
							name="category"
							placeholder="Category (e.g. restaurant)"
							required
						/>
						<br />
						<input
							type="text"
							name="address"
							placeholder="Street Address"
							required
						/>
						<br />
						<input type="text" name="city" placeholder="City" required />
						<br />
						<input
							type="text"
							name="region"
							placeholder="State / Province / Region"
							required
						/>
						<br />
						<input type="text" name="country" placeholder="Country" required />
						<br />
						<input
							type="text"
							name="website"
							placeholder="Website (optional)"
						/>
						<br />
						<input type="hidden" name="_gotcha" style={{ display: "none" }} />

						<div
							className="cf-turnstile"
							data-sitekey="0x4AAAAAAClzj7R6NrkNgcsP"
							data-theme="dark"
						/>
						<button type="submit" className="button-form">
							<p>{t("common_submit")}</p>
						</button>
					</form>
				</div>
			</div>

			<div className="break-nano" />

			<BusinessResourceCards locale={locale} exclude={["maps"]} />

		</BusinessPageShell>
	);
}
