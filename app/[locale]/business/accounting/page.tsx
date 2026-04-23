import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/business/accounting — V2 redesign (April 23, 2026).
 *
 * Faithfully ports the legacy /business/accounting page into the V2
 * design system used across the rest of the site. The V1 version was
 * 4 dense text blocks with entire sentences turned into inline
 * orange-link anchors — e.g. the whole "If you use QuickBooks you
 * can do this automatically using the Bitcoin Sync plugin" sentence
 * was one giant link. That reads poorly on mobile and makes
 * scanning hard.
 *
 * The V2 redesign rewrites the copy in plainer language, keeps the
 * "not tax advice" disclaimer prominent (per task requirements),
 * and lifts every external/internal reference into a colored V2
 * `.whats-next-card` link card placed beside the section it belongs
 * to. That way the prose stays skimmable and the resources are
 * clearly visible as clickable destinations.
 *
 * Structure (top → bottom):
 *   1. Hero — plain <h1> + subtitle paragraph.
 *   2. Intro card — `.wallet-intro` bordered surface framing the
 *      two paths (auto-convert vs. keep some Bitcoin) + a
 *      disclaimer paragraph clarifying this is informational only
 *      and NOT tax advice.
 *   3. Section 1 — "The easy path: auto-convert to dollars"
 *      + single link card → /business/wallets (hybrid wallets).
 *   4. Section 2 — "If you keep some Bitcoin: tracking your cost
 *      basis" + 2 link cards (Bitcoin Price Report current/historical
 *      lookup, Spreadsheet Guru Excel import).
 *   5. Section 3 — "Spending or selling the Bitcoin you've kept"
 *      with two worked capital gain / capital loss examples.
 *   6. Section 4 — "Need a pro who speaks Bitcoin?" + single link
 *      card → Satoshi Pacioli Accounting Services.
 *   7. Business resources grid — per the /business/* V2 convention,
 *      the colored resources grid from /business (accounting
 *      excluded because we're on it) serves as the cross-link
 *      surface for merchants. No generic "keep learning / buy
 *      Bitcoin" bridge. (See V2-REDESIGN-CHECKLIST.md.)
 *   8. Sources — accountant + price data references + Bitcoin
 *      whitepaper.
 *   9. Publisher attribution + reviewed-for-accuracy badge.
 *
 * Schemas: Article + BreadcrumbList JSON-LD.
 */

const SLUG = "business/accounting";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-accounting-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "bitcoin_business_accounting_guide",
		image: META_IMAGE,
		descriptionKey: "accounting_description",
	});
}

// ─── Inline resource card spec ───────────────────────────────────────
//
// Each entry renders as one V2 `.whats-next-card` with its own
// `--card-accent` color, slotted next to the section it supports.
// `sourceKey` lets us vary the "Source: $author →" line per-card
// (not every card sources from bitcoin.rocks, so we can't reuse
// `common_publisher_name`).
type InlineResource = {
	key: string;
	href: string;
	accent: string;
	labelKey: string;
	titleKey: string;
	sourceKey: string;
	external?: boolean;
};

// ─── Business resource card spec (cross-link surface) ────────────────
//
// Matches the grid on /business, minus the accounting card (we're on
// it). Same accents as /business + /business/faq + /business/wallets
// for visual consistency across the business section.
type BizResource = {
	key: string;
	href: string;
	accent: string;
	labelKey: string;
	titleKey: string;
	external?: boolean;
};

const BIZ_RESOURCES: readonly BizResource[] = [
	{
		key: "wallets",
		href: "/business/wallets",
		accent: "#FF9500", // bitcoin orange
		labelKey: "biz_label_wallets",
		titleKey: "common_biz_wallets",
	},
	{
		key: "maps",
		href: "/business/maps",
		accent: "#1DFF4D", // energy green
		labelKey: "biz_label_maps",
		titleKey: "common_biz_maps",
	},
	{
		key: "stickers",
		href: "/business/stickers",
		accent: "#FF1D8E", // stickers pink
		labelKey: "biz_label_stickers",
		titleKey: "common_biz_stickers",
	},
	{
		key: "rewards",
		href: "https://www.oshi.tech/",
		accent: "#FFE91D", // payments yellow
		labelKey: "biz_label_rewards",
		titleKey: "common_biz_rewards",
		external: true,
	},
	{
		key: "faq",
		href: "/business/faq",
		accent: "#A67DFF", // education purple
		labelKey: "biz_label_faq",
		titleKey: "common_biz_faq",
	},
];

// ─── Per-section inline resources ─────────────────────────────────────
const WALLETS_CARD: InlineResource = {
	key: "wallets",
	href: "/business/wallets",
	accent: "#FF9500", // bitcoin orange
	labelKey: "accounting_card_wallets_label",
	titleKey: "accounting_card_wallets_title",
	sourceKey: "accounting_card_wallets_source",
};

const COST_BASIS_CARDS: readonly InlineResource[] = [
	{
		key: "bitcoin-price-report",
		href: "https://bitcoinpricereport.com/bitcoin-priced-in-usd",
		accent: "#4DA6FF", // calm blue
		labelKey: "accounting_card_bpr_label",
		titleKey: "accounting_card_bpr_title",
		sourceKey: "accounting_card_bpr_source",
		external: true,
	},
	{
		key: "spreadsheet",
		href: "https://www.thespreadsheetguru.com/blog/cryptocurrency-prices-excel",
		accent: "#1DFF4D", // energy green
		labelKey: "accounting_card_spreadsheet_label",
		titleKey: "accounting_card_spreadsheet_title",
		sourceKey: "accounting_card_spreadsheet_source",
		external: true,
	},
];

const PACIOLI_CARD: InlineResource = {
	key: "pacioli",
	href: "https://satoshipacioli.com/",
	accent: "#FFE91D", // payments yellow — stands out as a CTA
	labelKey: "accounting_card_pacioli_label",
	titleKey: "accounting_card_pacioli_title",
	sourceKey: "accounting_card_pacioli_source",
	external: true,
};

// ─── One inline resource card ────────────────────────────────────────
function ResourceCard({
	card,
	locale,
	t,
}: {
	card: InlineResource;
	locale: string;
	t: Awaited<ReturnType<typeof getTranslations>>;
}) {
	const href = card.external ? card.href : `/${locale}${card.href}`;
	const style = { "--card-accent": card.accent } as CSSProperties;
	const externalProps = card.external
		? {
				target: "_blank" as const,
				rel: "noopener noreferrer" as const,
			}
		: {};
	return (
		<a
			key={card.key}
			href={href}
			className="whats-next-card"
			style={style}
			{...externalProps}
		>
			<div>
				<div className="whats-next-card-label">{t(card.labelKey)}</div>
				<div className="whats-next-card-title">{t(card.titleKey)}</div>
			</div>
			<div className="whats-next-card-source">
				<span>{t("home_source_prefix")}</span>{" "}
				<span>{t(card.sourceKey)}</span> →
			</div>
		</a>
	);
}

export default async function BusinessAccountingPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("bitcoin_business_accounting_guide");
	const description = t("accounting_description");

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
		<>
			<JsonLd data={articleSchema} />
			{breadcrumbSchema !== null && <JsonLd data={breadcrumbSchema} />}

			<div className="container-main">
				{/* ═══ HERO ═══ */}
				<div className="home-hero inflation-section">
					<div className="container-inner">
						<h1>{title}</h1>
						<p>{t("accounting_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══
				   Frames the two paths (auto-convert vs. keep some
				   Bitcoin) and carries the non-negotiable "not tax
				   advice" disclaimer. */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("accounting_intro_c1")}</p>
						<p>{t("accounting_intro_c2")}</p>
						<p>
							<strong>{t("accounting_disclaimer_label")}:</strong>{" "}
							{t("accounting_disclaimer")}
						</p>
					</div>
				</div>

				{/* ═══ SECTION 1 — The easy path ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="accounting-s1"
				>
					<div className="container-inner">
						<h2 id="accounting-s1">{t("accounting_s1")}</h2>
						<div className="comparison-explain">
							<p>{t("accounting_s1_c1")}</p>
							<p>{t("accounting_s1_c2")}</p>
						</div>
						<div
							className="whats-next-grid"
							style={{ marginTop: "24px" }}
						>
							<ResourceCard
								card={WALLETS_CARD}
								locale={locale}
								t={t}
							/>
						</div>
					</div>
				</section>

				{/* ═══ SECTION 2 — Tracking your cost basis ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="accounting-s2"
				>
					<div className="container-inner">
						<h2 id="accounting-s2">{t("accounting_s2")}</h2>
						<div className="comparison-explain">
							<p>{t("accounting_s2_c1")}</p>
							<p>{t("accounting_s2_c2")}</p>
							<p>{t("accounting_s2_c3")}</p>
						</div>
						<div
							className="whats-next-grid"
							style={{ marginTop: "24px" }}
						>
							{COST_BASIS_CARDS.map((card) => (
								<ResourceCard
									key={card.key}
									card={card}
									locale={locale}
									t={t}
								/>
							))}
						</div>
					</div>
				</section>

				{/* ═══ SECTION 3 — Spending or selling Bitcoin ═══
				   The two worked examples (capital gain / capital loss)
				   are rendered as a side-by-side graphic instead of a
				   bullet list — dollar-flow lanes (received → sold) with
				   the resulting delta as a colored pill badge. Better
				   than prose for numeric comparisons. */}
				<section
					className="inflation-section content-section"
					aria-labelledby="accounting-s3"
				>
					<div className="container-inner">
						<h2 id="accounting-s3">{t("accounting_s3")}</h2>
						<div className="comparison-explain">
							<p>{t("accounting_s3_c1")}</p>
							<p>{t("accounting_s3_c2")}</p>
							<p>{t("accounting_s3_c3")}</p>
						</div>

						<div className="accounting-examples">
							{/* ── Capital gain card ── */}
							<div className="accounting-example accounting-example--gain">
								<div className="accounting-example-flow">
									<div className="accounting-example-step">
										<div className="accounting-example-date">
											{t("accounting_example_jan_1")}
										</div>
										<div className="accounting-example-label">
											{t("accounting_example_received_label")}
										</div>
										<div className="accounting-example-value">
											$100
										</div>
									</div>
									<div
										className="accounting-example-arrow"
										aria-hidden="true"
									>
										→
									</div>
									<div className="accounting-example-step">
										<div className="accounting-example-date">
											{t("accounting_example_feb_1")}
										</div>
										<div className="accounting-example-label">
											{t("accounting_example_sold_label")}
										</div>
										<div className="accounting-example-value">
											$110
										</div>
									</div>
								</div>
								<div className="accounting-example-result accounting-example-result--gain">
									<span className="accounting-example-result-badge">
										{t("accounting_example_gain_badge")}
									</span>
									<span className="accounting-example-result-delta">
										{t("accounting_example_gain_result")}
									</span>
								</div>
								<p className="accounting-example-caption">
									{t("accounting_example_gain_explain")}
								</p>
							</div>

							{/* ── Capital loss card ── */}
							<div className="accounting-example accounting-example--loss">
								<div className="accounting-example-flow">
									<div className="accounting-example-step">
										<div className="accounting-example-date">
											{t("accounting_example_jan_1")}
										</div>
										<div className="accounting-example-label">
											{t("accounting_example_received_label")}
										</div>
										<div className="accounting-example-value">
											$100
										</div>
									</div>
									<div
										className="accounting-example-arrow"
										aria-hidden="true"
									>
										→
									</div>
									<div className="accounting-example-step">
										<div className="accounting-example-date">
											{t("accounting_example_feb_1")}
										</div>
										<div className="accounting-example-label">
											{t("accounting_example_sold_label")}
										</div>
										<div className="accounting-example-value">
											$90
										</div>
									</div>
								</div>
								<div className="accounting-example-result accounting-example-result--loss">
									<span className="accounting-example-result-badge">
										{t("accounting_example_loss_badge")}
									</span>
									<span className="accounting-example-result-delta">
										{t("accounting_example_loss_result")}
									</span>
								</div>
								<p className="accounting-example-caption">
									{t("accounting_example_loss_explain")}
								</p>
							</div>
						</div>

						<div className="comparison-explain">
							<p>{t("accounting_s3_c6")}</p>
						</div>
					</div>
				</section>

				{/* ═══ SECTION 4 — Need a pro ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="accounting-s4"
				>
					<div className="container-inner">
						<h2 id="accounting-s4">{t("accounting_s4")}</h2>
						<div className="comparison-explain">
							<p>{t("accounting_s4_c1")}</p>
						</div>
						<div
							className="whats-next-grid"
							style={{ marginTop: "24px" }}
						>
							<ResourceCard
								card={PACIOLI_CARD}
								locale={locale}
								t={t}
							/>
						</div>
					</div>
				</section>

				{/* ═══ BUSINESS RESOURCES GRID ═══
				   The /business/* V2 convention: this colored resource
				   grid IS the cross-link surface for merchants. No
				   generic "keep learning / buy Bitcoin" bridge here —
				   merchants flow between business pages, not back into
				   the beginner learning path. (See V2-REDESIGN-
				   CHECKLIST.md.) */}
				<section
					id="ready"
					className="inflation-section content-section"
					aria-labelledby="biz-resources-heading"
				>
					<div className="container-inner">
						<h2 id="biz-resources-heading">
							{t("business_resources_heading")}
						</h2>
						<div className="comparison-explain">
							<p>{t("business_resources_intro")}</p>
						</div>
						<div
							className="whats-next-grid"
							style={{ marginTop: "24px" }}
						>
							{BIZ_RESOURCES.map((r) => {
								const href = r.external
									? r.href
									: `${l}${r.href}`;
								const style = {
									"--card-accent": r.accent,
								} as CSSProperties;
								const externalProps = r.external
									? {
											target: "_blank" as const,
											rel: "noopener noreferrer" as const,
										}
									: {};
								return (
									<a
										key={r.key}
										href={href}
										className="whats-next-card"
										style={style}
										{...externalProps}
									>
										<div>
											<div className="whats-next-card-label">
												{t(r.labelKey)}
											</div>
											<div className="whats-next-card-title">
												{t(r.titleKey)}
											</div>
										</div>
										<div className="whats-next-card-source">
											<span>{t("home_source_prefix")}</span>{" "}
											<span>{t("common_publisher_name")}</span> →
										</div>
									</a>
								);
							})}
						</div>
					</div>
				</section>

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
									href="https://satoshipacioli.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Satoshi Pacioli Accounting Services — Bitcoin
									accounting for businesses
								</a>
							</li>
							<li>
								<a
									href="https://bitcoinpricereport.com/bitcoin-priced-in-usd"
									target="_blank"
									rel="noopener noreferrer"
								>
									Bitcoin Price Report — Bitcoin current &amp; historical
									dollar price
								</a>
							</li>
							<li>
								<a
									href="https://www.thespreadsheetguru.com/blog/cryptocurrency-prices-excel"
									target="_blank"
									rel="noopener noreferrer"
								>
									The Spreadsheet Guru — Import cryptocurrency prices
									into Excel
								</a>
							</li>
							<li>
								<a
									href="https://bitcoin.org/bitcoin.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic
									Cash System (2008)
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
