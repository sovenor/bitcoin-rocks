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
 * /[locale]/business — V2 redesign (April 22, 2026).
 *
 * Entry point for the business section. Faithfully ports the legacy
 * /business information architecture into the V2 design system used
 * across the rest of the site (/inflation, /wallets, /lightning,
 * /flyers, /buy, /bank-runs, /about, /get-involved, comparisons).
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Bitcoin is good for business") + a new
 *      hero subtitle paragraph explaining what Bitcoin unlocks for
 *      merchants (lower fees, instant settlement, more customers).
 *   2. Intro card — `.wallet-intro` bordered surface with a short
 *      lead-in that frames the rest of the page.
 *   3. Four benefit sections — each one a `.inflation-section` with
 *      an H2 + `.comparison-explain` prose. The four benefits are:
 *        a. Low fees with no minimums
 *        b. Instant settlement
 *        c. No chargebacks or fraud
 *        d. Get more customers
 *   4. "Everything you need to accept Bitcoin" — rendered as a
 *      regular `.inflation-section` (h2 + `.comparison-explain`
 *      intro paragraph) so the heading + body text match the four
 *      benefit sections above. A bare `.whats-next-grid` sits below
 *      the intro with the color-coded business resource cards — each
 *      one a V2 `.whats-next-card` with its own `--card-accent`
 *      (wallets = orange, maps = green, stickers = pink, etc.) so the
 *      grid reads like the topic-colored homepage categories.
 *      This is the primary cross-link surface on the page — the
 *      generic /wallets, /buy, /inflation "What's next?" bridge that
 *      lives on most other V2 pages is intentionally omitted on all
 *      /business/* pages (see V2-REDESIGN-CHECKLIST.md).
 *   5. Sources — merchant/point-of-sale references + Bitcoin
 *      whitepaper, matching the V2 sources treatment.
 *   6. Publisher attribution + reviewed-for-accuracy badge.
 *
 * Schemas: Article + BreadcrumbList JSON-LD (same pattern as all V2
 * content pages). No HowTo schema here — this page is a hub/overview,
 * not a step-by-step guide.
 */

const SLUG = "business";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-index-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "bitcoin_is_good_for_business",
		image: META_IMAGE,
		descriptionKey: "biz_meta_description",
	});
}

// ─── Business resource card spec ──────────────────────────────────────
//
// Mirrors the legacy 7-card grid but reskinned as V2 `.whats-next-card`s
// with per-card `--card-accent` colors so the section reads like the
// topic-colored category grids on the homepage. Each entry points at
// one of the downstream /business/* sub-pages (or an external partner
// for rewards).
type BizResource = {
	key: string;
	href: string;
	/** Hex color used as the card's `--card-accent` (drives label + hover border). */
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
		key: "accounting",
		href: "/business/accounting",
		accent: "#4DA6FF", // calm blue
		labelKey: "biz_label_accounting",
		titleKey: "common_biz_accounting",
	},
	{
		key: "faq",
		href: "/business/faq",
		accent: "#A67DFF", // education purple
		labelKey: "biz_label_faq",
		titleKey: "common_biz_faq",
	},
];

export default async function BusinessIndexPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("bitcoin_is_good_for_business");
	const description = t("biz_meta_description");

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
						<p>{t("business_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("business_intro_c1")}</p>
						<p>{t("business_intro_c2")}</p>
					</div>
				</div>

				{/* ═══ BENEFIT 1 — Low fees ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="biz-benefit-1"
				>
					<div className="container-inner">
						<h2 id="biz-benefit-1">{t("biz_s1")}</h2>
						<div className="comparison-explain">
							<p>{t("biz_s1_c1")}</p>
						</div>
					</div>
				</section>

				{/* ═══ BENEFIT 2 — Instant settlement ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="biz-benefit-2"
				>
					<div className="container-inner">
						<h2 id="biz-benefit-2">{t("biz_s2")}</h2>
						<div className="comparison-explain">
							<p>{t("biz_s2_c1")}</p>
						</div>
					</div>
				</section>

				{/* ═══ BENEFIT 3 — No chargebacks ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="biz-benefit-3"
				>
					<div className="container-inner">
						<h2 id="biz-benefit-3">{t("biz_s3")}</h2>
						<div className="comparison-explain">
							<p>{t("biz_s3_c1")}</p>
							<p>{t("biz_s3_c2")}</p>
						</div>
					</div>
				</section>

				{/* ═══ BENEFIT 4 — More customers ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="biz-benefit-4"
				>
					<div className="container-inner">
						<h2 id="biz-benefit-4">{t("biz_s4")}</h2>
						<div className="comparison-explain">
							<p>{t("biz_s4_c1")}</p>
							<p>{t("biz_s4_c2")}</p>
							<p>{t("biz_s4_c3")}</p>
						</div>
					</div>
				</section>

				{/* ═══ BUSINESS RESOURCES GRID ═══
				   Rendered as a normal content section (h2 +
				   `.comparison-explain` prose) so the heading + intro
				   match the four benefit sections above, with the
				   color-coded resource cards appearing directly below
				   via a bare `.whats-next-grid` (no `.whats-next-section`
				   wrapper — that one resets the h2 margin + paragraph
				   styling and we want the normal content rhythm here). */}
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
									href="https://btcmap.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("common_source_btc_map")}
								</a>
							</li>
							<li>
								<a
									href="https://btcpayserver.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("common_source_btcpayserver")}
								</a>
							</li>
							<li>
								<a
									href="https://strike.me/business/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("common_source_strike_business")}
								</a>
							</li>
							<li>
								<a
									href="https://www.oshi.tech/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("common_source_oshi")}
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
