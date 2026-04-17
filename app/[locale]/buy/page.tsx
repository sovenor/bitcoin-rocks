import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BuyFlow } from "@/components/BuyFlow";
import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { BUY_COUNTRIES } from "@/lib/buy/platforms";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/buy — Phase 9b faithful port of buy.html.
 *
 * Server renders the full 52-country button grid so crawlers see everything.
 * `<BuyFlow>` Client Component delegates click handlers from the grid and
 * reveals subsequent steps (payment method → platforms → storage guidance)
 * based on the user's selections.
 */

const SLUG = "buy";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-buy-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("buy_bitcoin_guide");
	const description = t("buy_bitcoin_guide");
	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		openGraph: {
			title,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${SLUG}`,
			images: [{ url: META_IMAGE, width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [META_IMAGE],
		},
	};
}

export default async function BuyPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("buy_bitcoin_guide");
	const description = t("buy_bitcoin_guide");

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
		<div className="container-main">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div className="container-inner">
				<div style={{ textAlign: "center" }}>
					<a href={l}>
						<img
							src="/img/logos/rocks-logo-gray.png"
							className="back-to-home"
							alt="bitcoin.rocks"
						/>
					</a>
				</div>
			</div>

			<div className="break-micro" />

			<div className="text-box intro">
				<div className="container-inner">
					<h1 className="wallet-h3">{t("buy_header")}</h1>
					<p>
						<span>{t("buy_intro_c1")}</span>
						<br />
						<br />
						<span>{t("buy_intro_c2")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<BuyFlow>
				<div className="text-box intro">
					<div className="container-inner">
						<h2 className="h2-section">{t("buy_step_1_header")}</h2>
						<p>{t("buy_step_1_description")}</p>

						<div className="break-micro" />
						<input
							type="text"
							id="country-search"
							placeholder={t("buy_search_countries")}
							className="country-search-input"
						/>

						<div className="break-nano" />
						<div className="container-buy-button">
							{BUY_COUNTRIES.map((c) => (
								<button
									key={c.code}
									className="buy-country-button"
									data-country={c.code}
								>
									<span className="flag-icon">{c.flag}</span>
									&nbsp;
									<span>{t(c.labelKey)}</span>
								</button>
							))}
						</div>
					</div>
				</div>
			</BuyFlow>

			<div className="break-micro" />

			<div
				className="publisher-attribution"
				itemProp="publisher"
				itemScope
				itemType="https://schema.org/Organization"
			>
				<div className="container-inner">
					<p>
						<span className="reviewed-badge">{t("common_reviewed_accuracy")}</span>
						<br />
						<span>{t("common_published_by")}</span>{" "}
						<a href={`${l}/about`} className="orange-link" itemProp="url">
							<span itemProp="name">{t("common_publisher_name")}</span>
						</a>
						<br />
						<span>{t("common_publisher_since")}</span>
						<br />
						<a
							href="https://github.com/sovenor/bitcoin-rocks"
							className="orange-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>{t("common_publisher_open_source")}</span>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
