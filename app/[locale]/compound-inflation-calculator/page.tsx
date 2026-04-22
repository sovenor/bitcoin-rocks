import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CompoundInflationCalculatorSolo } from "@/components/CompoundInflationCalculatorSolo";
import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/compound-inflation-calculator — V2 redesign.
 *
 * Information flow mirrors the live /compound-inflation-calculator page
 * but reskinned in the V2 design system used across /wallets, /lightning,
 * /flyers, /inflation, /bank-runs, /about, /get-involved, and the
 * /bitcoin-vs-* pages.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Compound Inflation Calculator") + intro
 *      paragraph explaining what compound inflation is.
 *   2. Intro card — "Many people know about compound interest…" lead-in
 *      paragraphs housed in a bordered surface card (reuses
 *      `.wallet-intro`).
 *   3. Calculator card — the interactive <CompoundInflationCalculatorSolo>
 *      Client Component inside a second bordered surface card. V2 form
 *      styling (see `.cic-*` namespace in `app/globals.css` §9).
 *   4. Inflation CTA — a single full-width link card (reuses
 *      `.wallet-lightning-cta`) pointing at /inflation.
 *   5. What's next? — 4 WhatsNextCards (homepage, wallets, buy,
 *      inflation explainer).
 *   6. Sources — Federal Reserve CPI + M1 citations (same authoritative
 *      data feeding the /inflation page).
 *   7. Publisher attribution + reviewed-for-accuracy badge.
 *
 * All chrome reuses existing V2 CSS classes from globals.css §4–§8.
 * The only NEW styling lives in the §9 `.cic-*` block (form fields,
 * submit button, result paragraph) added alongside this page.
 */

const SLUG = "compound-inflation-calculator";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-cic-v2.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("cic_header");
	const description = t("cic_description");
	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${SLUG}`,
			images: [{ url: META_IMAGE, width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
			images: [META_IMAGE],
		},
	};
}

export default async function CompoundInflationCalculatorPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("cic_header");
	const description = t("cic_description");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description,
		image: META_IMAGE,
		schemaType: "Article",
		citations: [
			{
				url: "https://fred.stlouisfed.org/series/CPIAUCSL",
				name: "Consumer Price Index for All Urban Consumers",
				publisher: "Federal Reserve Bank of St. Louis — FRED",
			},
			{
				url: "https://fred.stlouisfed.org/series/M1SL",
				name: "M1 Money Supply",
				publisher: "Federal Reserve Bank of St. Louis — FRED",
			},
			{
				url: "https://www.bls.gov/cpi/",
				name: "Consumer Price Index",
				publisher: "U.S. Bureau of Labor Statistics",
			},
		],
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: SLUG,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<>
			<JsonLd data={articleSchema} />
			{breadcrumbSchema !== null && <JsonLd data={breadcrumbSchema} />}

			<div className="container-main">
				{/* ═══ HERO ═══ */}
				<div className="home-hero inflation-section">
					<div className="container-inner">
						<h1>{title}</h1>
						<p>{t("cic_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro cic-section">
					<div className="container-inner">
						<p>{t("common_cic_intro_1")}</p>
						<p>{t("common_cic_intro_2")}</p>
						<p>{t("common_cic_intro_3")}</p>
					</div>
				</div>

				<div className="break-nano" />

				{/* ═══ CALCULATOR CARD ═══ */}
				<div className="wallet-intro cic-section">
					<div className="container-inner">
						<h2 className="cic-heading">{t("cic_calculator_heading")}</h2>
						<CompoundInflationCalculatorSolo />
					</div>
				</div>

				{/* ═══ "What can I do about inflation?" CTA ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<a
							href={`${l}/inflation?link=calculator`}
							className="wallet-lightning-cta"
						>
							<div>
								<div className="wallet-lightning-cta-label">
									{t("cic_cta_label")}
								</div>
								<div className="wallet-lightning-cta-title">
									{t("cic_inflation_cta")}
								</div>
							</div>
							<span className="wallet-lightning-cta-arrow" aria-hidden="true">
								→
							</span>
						</a>
					</div>
				</div>

				{/* ═══ WHAT'S NEXT ═══ */}
				<div className="whats-next-section">
					<div className="container-inner">
						<div className="whats-next-header">
							<h2>{t("common_whats_next")}</h2>
						</div>
						<div className="whats-next-grid">
							<WhatsNextCard
								href={`${l}/inflation`}
								label={t("common_next_keep_learning")}
								title={t("cic_next_learn_inflation")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/wallets`}
								label={t("common_next_get_wallet")}
								title={t("common_next_get_wallet_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/buy`}
								label={t("common_next_buy_bitcoin")}
								title={t("common_next_buy_bitcoin_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={l}
								label={t("cic_next_explore_topics")}
								title={t("cic_next_explore_topics_desc")}
								authorKey="common_publisher_name"
							/>
						</div>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ SOURCES ═══ */}
				<div className="sources-section">
					<div className="container-inner">
						<h2 className="sources-heading">
							{t("common_sources_heading")}
						</h2>
						<ol className="sources-list">
							<li>
								<a
									href="https://www.bls.gov/cpi/"
									target="_blank"
									rel="noopener noreferrer"
								>
									U.S. Bureau of Labor Statistics — Consumer Price Index
									(CPI)
								</a>
							</li>
							<li>
								<a
									href="https://fred.stlouisfed.org/series/CPIAUCSL"
									target="_blank"
									rel="noopener noreferrer"
								>
									Federal Reserve Economic Data (FRED) — Consumer Price
									Index for All Urban Consumers
								</a>
							</li>
							<li>
								<a
									href="https://fred.stlouisfed.org/series/M1SL"
									target="_blank"
									rel="noopener noreferrer"
								>
									Federal Reserve Economic Data (FRED) — M1 Money
									Supply
								</a>
							</li>
							<li>
								<a
									href="https://fred.stlouisfed.org/categories/24"
									target="_blank"
									rel="noopener noreferrer"
								>
									Federal Reserve Economic Data (FRED) — Money Supply
									(Category Index)
								</a>
							</li>
						</ol>
					</div>
				</div>

				{/* ═══ PUBLISHER ATTRIBUTION ═══ */}
				<div
					className="publisher-attribution"
					itemProp="publisher"
					itemScope
					itemType="https://schema.org/Organization"
				>
					<div className="container-inner">
						<p>
							<span className="reviewed-badge">
								{t(REVIEWED_ACCURACY_I18N_KEY)}
							</span>
							<br />
							<span>{t("common_published_by")}</span>{" "}
							<a
								href={`${l}/about`}
								className="orange-link"
								itemProp="url"
							>
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
		</>
	);
}
