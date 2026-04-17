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
 * /[locale]/business/stickers — Phase 10 faithful port of business/stickers.html.
 */

const SLUG = "business/stickers";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-stickers-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "bitcoin_accepted_here_stickers",
		image: META_IMAGE,
		description: "Let your customers know you accept Bitcoin with free 'Bitcoin Accepted Here' stickers.",
	});
}

export default async function BusinessStickersPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	void l;
	const title = t("bitcoin_accepted_here_stickers");
	const description = "Let your customers know you accept Bitcoin with free 'Bitcoin Accepted Here' stickers.";

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
				<h1 className="h1-inflation">{t("stickers_header")}</h1>
				<img
					src="/img/bbk/biz-stickers-vertical-v2.png"
					className="inline"
					alt={t("stickers_header")}
				/>
			</div>

			<div className="break" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p className="step">{t("stickers_request")}</p>
					<br />
					<p>{t("stickers_request_details")}</p>

					<CountryFormSelector
						placeholderLabel={t("common_choose_your_country")}
						options={[
							{ value: "USA", label: t("common_country_usa") },
							{ value: "Canada", label: t("common_country_canada") },
							{ value: "Print", label: t("stickers_country_global_print") },
						]}
					>
						<div id="USA" className="countries" hidden>
							<p>{t("stickers_request_instructions")}</p>
							<StickerAddressForm
								variant="usa"
								action="https://forms.bitcoin.rocks/submit/business-stickers-usa"
							/>
						</div>
						<div id="Canada" className="countries" hidden>
							<p>{t("stickers_request_instructions")}</p>
							<StickerAddressForm
								variant="canada"
								action="https://forms.bitcoin.rocks/submit/business-stickers-canada"
							/>
						</div>
						<div id="Print" className="countries" hidden>
							<p>{t("stickers_print_details")}</p>
							<a
								href={`${l}/business/sticker-files/english`}
								target="_blank"
								rel="noopener noreferrer"
							>
								<div className="button button-sticker">
									<p>{t("common_language_english")}</p>
								</div>
							</a>

							<div className="break-micro" />
							<p>{t("stickers_request_language")}</p>

							<form
								action="https://forms.bitcoin.rocks/submit/business-sticker-language-request"
								method="POST"
							>
								<input type="text" name="language" placeholder="Language" required />
								<br />
								<input
									type="text"
									name="translation1"
									placeholder="Translation for 'Bitcoin Accepted Here'"
									required
								/>
								<br />
								<input
									type="text"
									name="translation2"
									placeholder="Translation for 'Scan to learn why Bitcoin is good for business.'"
									required
								/>
								<br />

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
					</CountryFormSelector>
				</div>
			</div>

			<div className="break-nano" />

			<BusinessResourceCards locale={locale} exclude={["stickers"]} />

		</BusinessPageShell>
	);
}
