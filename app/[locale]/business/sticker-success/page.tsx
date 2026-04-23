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
 * /[locale]/business/sticker-success — V2 redesign (April 23, 2026).
 *
 * Thank-you screen shown after a merchant submits the USA or Canada
 * address form on /business/stickers. Styled in the V2 design system
 * to be similar to the main /sticker-success page — plain <h1> hero,
 * `.wallet-intro` surface cards, `.sticker-success-tips` checklist
 * of good sticker spots, and a final "need more stickers?" CTA card.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Your stickers are on their way 🎉") +
 *      subtitle confirming the 1-2 week delivery window + pack size.
 *   2. Good-spots card — V2 `.wallet-intro` surface card with a
 *      `.sticker-success-tips` checklist (3 ✅ spots tuned for a
 *      business + 1 🚫 reminder). Reuses the CSS that powers the
 *      same block on /sticker-success.
 *   3. Need-more card — surface card with two outlined CTA buttons:
 *      "Request another free pack" (back to /business/stickers) +
 *      "Order in bulk" (external StickerMule referral link).
 *   4. Business resources grid — per the /business/* V2 convention
 *      (V2-REDESIGN-CHECKLIST.md Tier 6), the colored resources grid
 *      (minus the stickers card) is the cross-link surface. No
 *      generic "keep learning / buy Bitcoin" bridge.
 *   5. Publisher attribution + reviewed-for-accuracy badge.
 *
 * No sources section — utility/thank-you page.
 *
 * Robots: `noindex, follow` — form-success pages should never appear
 * in search results.
 */

const SLUG = "business/sticker-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-stickers-v1.png";

const STICKERMULE_URL = "https://stickermule.com/u/4c84ba884f9c3ae";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("biz_sticker_success_hero_title");
	return {
		title,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		robots: { index: false, follow: true },
	};
}

// ─── Business resource card spec (cross-link surface) ────────────────
//
// Same 5-card catalog as the other /business/* V2 pages minus the
// stickers card (we just came from it).
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
		key: "maps",
		href: "/business/maps",
		accent: "#1DFF4D",
		labelKey: "biz_label_maps",
		titleKey: "common_biz_maps",
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

export default async function BusinessStickerSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("biz_sticker_success_hero_title");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description: t("biz_sticker_success_hero_subtitle"),
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
						<p>{t("biz_sticker_success_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ GOOD-SPOTS CARD ═══
				   Reuses the .sticker-success-tips + .sticker-success-tip
				   CSS from /sticker-success (app/globals.css §12). */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<h2 className="flyer-heading">
							{t("biz_sticker_success_tips_header")}
						</h2>

						<ul className="sticker-success-tips">
							<li className="sticker-success-tip">
								<span
									className="sticker-success-tip-icon"
									aria-hidden="true"
								>
									✅
								</span>
								<span>{t("biz_sticker_success_tip_1")}</span>
							</li>
							<li className="sticker-success-tip">
								<span
									className="sticker-success-tip-icon"
									aria-hidden="true"
								>
									✅
								</span>
								<span>{t("biz_sticker_success_tip_2")}</span>
							</li>
							<li className="sticker-success-tip">
								<span
									className="sticker-success-tip-icon"
									aria-hidden="true"
								>
									✅
								</span>
								<span>{t("biz_sticker_success_tip_3")}</span>
							</li>
							<li className="sticker-success-tip">
								<span
									className="sticker-success-tip-icon"
									aria-hidden="true"
								>
									🚫
								</span>
								<span>{t("biz_sticker_success_tip_4")}</span>
							</li>
						</ul>
					</div>
				</div>

				{/* ═══ NEED-MORE CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<h2 className="flyer-heading">
							{t("biz_sticker_success_more_header")}
						</h2>
						<p>{t("biz_sticker_success_more_c1")}</p>

						<div className="flyer-actions">
							<a
								href={`${l}/business/stickers`}
								className="flyer-btn flyer-btn-primary"
							>
								{t("biz_sticker_success_btn_request_more")}
							</a>
							<a
								href={STICKERMULE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="flyer-btn flyer-btn-secondary"
							>
								{t("biz_sticker_success_btn_order_bulk")}
							</a>
						</div>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ BUSINESS RESOURCES GRID ═══
				   Per the /business/* V2 convention (V2-REDESIGN-
				   CHECKLIST.md Tier 6), this colored resource grid IS
				   the cross-link surface for merchants. */}
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
