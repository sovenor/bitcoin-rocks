import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BuyFlow } from "@/components/BuyFlow";
import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { BUY_COUNTRIES } from "@/lib/buy/platforms";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/buy — V2 redesign (April 22, 2026).
 *
 * Information flow mirrors the legacy /buy 4-step wizard but reskinned
 * in the V2 design system used across /wallets, /lightning, /flyers,
 * /inflation, /compound-inflation-calculator, and the content pages.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("How to buy Bitcoin") + subtitle.
 *   2. Intro card — `.wallet-intro` bordered surface card with the two
 *      intro paragraphs.
 *   3. Step 1 — country grid inside a `.buy-step-header` eyebrow + V2
 *      search input + card-style country buttons. Server-rendered so
 *      all 52 buttons are crawler-visible.
 *   4. Step 2 — two V2 method cards (Bank / Cash) with ✓/✗/⚠ callouts
 *      and orange CTA. Hidden until Step 1 is answered.
 *   5. Step 3 — stacked platform cards (reuses V2 wallet-card chrome +
 *      a "RECOMMENDED" pill for recommended platforms).
 *   6. Step 4 — storage guidance block + `.wallet-lightning-cta`-style
 *      single-row link card into /wallets.
 *   7. What's next? — 4 WhatsNextCards (homepage, wallets, inflation,
 *      calculator).
 *   8. Sources — citations to Strike / Kraken / CoinATMRadar / Bisq +
 *      Bitcoin whitepaper.
 *   9. Publisher attribution + reviewed-for-accuracy badge.
 *
 * Schemas: Article + BreadcrumbList + HowTo (kept from V1 for GEO lift —
 * the HowTo schema is a strong signal for "how to buy X" queries).
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
	const description = t("buy_meta_description");
	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		openGraph: {
			title,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${SLUG}`,
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
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
	const description = t("buy_meta_description");

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

	// HowTo schema — kept from the V1 page for GEO lift on "how to buy
	// Bitcoin" queries. The step text below reads from the translated
	// paragraphs so it stays consistent with the visible copy.
	const howToSchema = {
		"@context": "https://schema.org",
		"@type": "HowTo",
		name: t("buy_howto_name"),
		description,
		image: META_IMAGE,
		step: [
			{
				"@type": "HowToStep",
				name: t("buy_step_1_header"),
				text: t("buy_step_1_description"),
				url: `https://bitcoin.rocks/${locale}/${SLUG}#country-selection`,
			},
			{
				"@type": "HowToStep",
				name: t("buy_step_2_header"),
				text: t("buy_step_2_description"),
				url: `https://bitcoin.rocks/${locale}/${SLUG}#payment-method-selection`,
			},
			{
				"@type": "HowToStep",
				name: t("buy_step_3_header"),
				text: t("buy_step_3_description"),
				url: `https://bitcoin.rocks/${locale}/${SLUG}#buying-options`,
			},
			{
				"@type": "HowToStep",
				name: t("buy_step_4_header"),
				text: `${t("buy_step_4_c1")} ${t("buy_step_4_c2")} ${t("buy_step_4_c3")}`,
				url: `https://bitcoin.rocks/${locale}/${SLUG}#storage-guidance`,
			},
		],
	};

	return (
		<>
			<JsonLd data={articleSchema} />
			{breadcrumbSchema !== null && <JsonLd data={breadcrumbSchema} />}
			<JsonLd data={howToSchema} />

			<div className="container-main">
				{/* ═══ HERO ═══ */}
				<div className="home-hero inflation-section">
					<div className="container-inner">
						<h1>{title}</h1>
						<p>{t("buy_header_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("buy_intro_c1")}</p>
						<p>{t("buy_intro_c2")}</p>
					</div>
				</div>

				{/* ═══ BUY WIZARD ═══ */}
				<BuyFlow walletsHref={`${l}/wallets`}>
					<div className="container-inner">
						<div className="buy-step-header">
							<span className="buy-step-eyebrow">
								{t("buy_step_1_eyebrow")}
							</span>
							<h2>{t("buy_step_1_header")}</h2>
							<p>{t("buy_step_1_description")}</p>
						</div>

						<div className="buy-search-wrap">
							<input
								type="text"
								id="country-search"
								placeholder={t("buy_search_countries")}
								className="buy-search-input"
								autoComplete="off"
							/>
						</div>

						<div className="buy-country-grid">
							{BUY_COUNTRIES.map((c) => (
								<button
									key={c.code}
									type="button"
									className="buy-country-button"
									data-country={c.code}
								>
									<span className="buy-country-flag" aria-hidden="true">
										{c.flag}
									</span>
									<span className="buy-country-label">{t(c.labelKey)}</span>
								</button>
							))}
						</div>
					</div>
				</BuyFlow>

				{/* ═══ WHAT'S NEXT ═══ */}
				<div className="whats-next-section">
					<div className="container-inner">
						<div className="whats-next-header">
							<h2>{t("common_whats_next")}</h2>
						</div>
						<div className="whats-next-grid">
							<WhatsNextCard
								href={l}
								label={t("common_next_keep_learning")}
								title={t("common_next_keep_learning_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/wallets`}
								label={t("common_next_get_wallet")}
								title={t("common_next_get_wallet_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/inflation`}
								label={t("common_next_keep_learning")}
								title={t("bitcoin_doesnt_have_inflation")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/compound-inflation-calculator`}
								label={t("common_next_calculate")}
								title={t("common_next_calculate_desc")}
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
									href="https://strike.me"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_strike_lightning")}
								</a>
							</li>
							<li>
								<a
									href="https://kraken.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_kraken")}
								</a>
							</li>
							<li>
								<a
									href="https://relai.app"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_relai")}
								</a>
							</li>
							<li>
								<a
									href="https://swanbitcoin.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_swan")}
								</a>
							</li>
							<li>
								<a
									href="https://river.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_river")}
								</a>
							</li>
							<li>
								<a
									href="https://coinatmradar.com"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_coinatmradar")}
								</a>
							</li>
							<li>
								<a
									href="https://bisq.network"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_bisq")}
								</a>
							</li>
							<li>
								<a
									href="https://bitcoin.org/bitcoin.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("common_source_whitepaper")}
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
