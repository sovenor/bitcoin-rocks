import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BusinessStickerFlow } from "@/components/BusinessStickerFlow";
import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/business/stickers — V2 redesign (April 23, 2026).
 *
 * Faithfully ports the legacy /business/stickers page into the V2
 * design system used across the rest of the site. Merchants land
 * here to request free "Bitcoin Accepted Here" stickers that let
 * their customers know they accept Bitcoin.
 *
 * Unlike the consumer `/stickers` page (which has two packs — Text
 * and Signs — and a Step 1/Step 2 wizard), /business/stickers only
 * offers ONE pack (the single "Bitcoin Accepted Here" merchant
 * pack), so the V2 redesign skips the pack picker entirely and jumps
 * straight to the delivery options (USA mail / Canada mail / print
 * your own). That's the key design difference from /stickers.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Free 'Bitcoin Accepted Here' stickers")
 *      + intro paragraph describing the merchant use case.
 *   2. Intro card — `.wallet-intro` bordered surface with a big
 *      preview image of the sticker pack + a short lead-in.
 *   3. BusinessStickerFlow — single-step delivery picker (Client
 *      Component): three `.sticker-option-button` rows stacked
 *      1-per-line (USA / Canada / Global — Print). Selecting an
 *      option reveals a `.sticker-panel` with the matching form or
 *      print instructions.
 *   4. Business resources grid — per the /business/* V2 convention,
 *      the colored resources grid from /business (stickers excluded
 *      because we're on it) serves as the cross-link surface for
 *      merchants. No generic "keep learning / buy Bitcoin" bridge.
 *      (See V2-REDESIGN-CHECKLIST.md.)
 *   5. Publisher attribution + reviewed-for-accuracy badge.
 *
 * No sources section — this is a utility/form page and doesn't make
 * factual claims that need citations (same convention as /stickers).
 *
 * Schemas: Article + BreadcrumbList JSON-LD (same pattern as all V2
 * content pages).
 */

const SLUG = "business/stickers";

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
		description:
			"Let your customers know you accept Bitcoin with free 'Bitcoin Accepted Here' stickers.",
	});
}

// ─── Business resource card spec (cross-link surface) ────────────────
//
// Matches the grid on /business, minus the stickers card (we're on
// it). Same accents as /business + /business/faq + /business/wallets
// + /business/accounting for visual consistency across the business
// section.
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

export default async function BusinessStickersPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("bitcoin_accepted_here_stickers");
	const description =
		"Let your customers know you accept Bitcoin with free 'Bitcoin Accepted Here' stickers.";

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description,
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
						<h1>{t("biz_stickers_hero_title")}</h1>
						<p>{t("biz_stickers_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══
				   Preview image + short lead-in framing what's in the
				   merchant sticker pack. */}
				<div className="wallet-intro">
					<div className="container-inner">
						<div className="biz-stickers-hero-image">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src="/img/bbk/biz-stickers-vertical-v2.png"
								alt={t("biz_stickers_hero_title")}
							/>
						</div>
						<p>{t("biz_stickers_intro_c1")}</p>
						<p>{t("biz_stickers_intro_c2")}</p>
					</div>
				</div>

				{/* ═══ DELIVERY PICKER (CLIENT) ═══ */}
				<BusinessStickerFlow localePrefix={l} />

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
