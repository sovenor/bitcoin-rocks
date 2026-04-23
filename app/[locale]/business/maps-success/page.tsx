import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildAlternates } from "@/lib/schema/hreflang";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/business/maps-success — V2 redesign (April 23, 2026).
 *
 * Thank-you screen shown after a merchant submits their business
 * listing request on /business/maps. Reskinned in the V2 design
 * system used across /sticker-success, /sticker-language-success,
 * and the other /business/* pages.
 *
 * Styled to be similar to the main /sticker-success page — plain
 * <h1> hero, `.wallet-intro` surface cards for each content block,
 * and `.flyer-actions` / `.flyer-btn` for the CTA row.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Request received 🎉") + subtitle.
 *   2. Timeline card — V2 `.wallet-intro` surface card with 2
 *      paragraphs explaining the 1-2 week review window.
 *   3. View-the-map card — surface card with an outlined CTA button
 *      linking out to btcmap.org so merchants can preview what the
 *      directory looks like while they wait.
 *   4. Business resources grid — per the /business/* V2 convention
 *      (see V2-REDESIGN-CHECKLIST.md Tier 6 note), the colored
 *      resources grid (minus the maps card) is the cross-link
 *      surface. No generic "keep learning / buy Bitcoin" bridge.
 *   5. Publisher attribution + reviewed-for-accuracy badge.
 *
 * No sources section — this is a utility/thank-you page.
 *
 * Robots: `noindex, follow` — form-success pages should never appear
 * in search results.
 */

const SLUG = "business/maps-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-maps-v1.png";

const BTC_MAP_URL = "https://btcmap.org/";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("biz_maps_success_hero_title");
	return {
		title,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		robots: { index: false, follow: true },
	};
}

// ─── Business resource card spec (cross-link surface) ────────────────
//
// Same 5-card catalog as the other /business/* V2 pages minus the
// maps card (we just used that form).
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
		accent: "#FF9500",
		labelKey: "biz_label_wallets",
		titleKey: "common_biz_wallets",
	},
	{
		key: "stickers",
		href: "/business/stickers",
		accent: "#FF1D8E",
		labelKey: "biz_label_stickers",
		titleKey: "common_biz_stickers",
	},
	{
		key: "rewards",
		href: "https://www.oshi.tech/",
		accent: "#FFE91D",
		labelKey: "biz_label_rewards",
		titleKey: "common_biz_rewards",
		external: true,
	},
	{
		key: "accounting",
		href: "/business/accounting",
		accent: "#4DA6FF",
		labelKey: "biz_label_accounting",
		titleKey: "common_biz_accounting",
	},
	{
		key: "faq",
		href: "/business/faq",
		accent: "#A67DFF",
		labelKey: "biz_label_faq",
		titleKey: "common_biz_faq",
	},
];

export default async function BusinessMapsSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("biz_maps_success_hero_title");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description: t("biz_maps_success_hero_subtitle"),
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
						<p>{t("biz_maps_success_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ TIMELINE CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<h2 className="flyer-heading">
							{t("biz_maps_success_timeline_header")}
						</h2>
						<p>{t("biz_maps_success_timeline_c1")}</p>
						<p>{t("biz_maps_success_timeline_c2")}</p>
					</div>
				</div>

				{/* ═══ VIEW-THE-MAP CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<h2 className="flyer-heading">
							{t("biz_maps_success_view_header")}
						</h2>
						<p>{t("biz_maps_success_view_c1")}</p>

						<div className="flyer-actions">
							<a
								href={BTC_MAP_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="flyer-btn flyer-btn-secondary"
							>
								{t("biz_maps_success_btn_view_map")}
							</a>
						</div>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ BUSINESS RESOURCES GRID ═══
				   Per the /business/* V2 convention (V2-REDESIGN-
				   CHECKLIST.md Tier 6), this colored resource grid IS
				   the cross-link surface for merchants. No generic
				   "keep learning / buy Bitcoin" bridge. */}
				<section
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
								const href = r.external ? r.href : `${l}${r.href}`;
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
								<span itemProp="name">
									{t("common_publisher_name")}
								</span>
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
