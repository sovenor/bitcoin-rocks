import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/business/sticker-files/english — V2 redesign (April 23, 2026).
 *
 * The one-sticker download page for the merchant "Bitcoin Accepted Here"
 * sticker. Reached from `/business/stickers` (the merchant request-a-free-
 * pack flow) under the "🌍 Global — Print my own" option for anyone outside
 * the USA / Canada who'd rather print the sticker than wait for it in the
 * mail. Mirrors `/sticker-files/<lang>` visually (one `.sticker-card` per
 * design, bordered surface, centered image, meta list) but with a
 * `/business/*` V2 hero + resources grid instead of the consumer
 * sticker-files shell.
 *
 * Legacy counterpart: `public/business/sticker-files/english/index.html`
 * — still-referenced jQuery + relative asset paths broke in the Next.js
 * app. That file was deleted in favor of this route.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Download English 'Bitcoin Accepted Here'
 *      sticker files") + subtitle.
 *   2. StickerMule 1-click CTA — same bulk-print prompt + orange
 *      button that appears on `/sticker-files/english`. Points at the
 *      merchant sticker's 1-click pack URL (different from the
 *      consumer /stickers 1-click pack — that one's the general
 *      "text pack" + "signs pack" combined).
 *   3. Sticker card — bordered surface with the sticker preview
 *      image (centered, capped ≤320px high) + dimensions / type /
 *      material / where-to-print meta list. Click the image to open
 *      the full-size PNG in a new tab.
 *   4. Business resources grid — per the /business/* V2 convention,
 *      the colored resources grid from /business (stickers excluded
 *      since the parent request flow lives there).
 *   5. Publisher attribution + reviewed-for-accuracy badge.
 *
 * No sources section — utility/download page.
 */

import type { CSSProperties } from "react";

const SLUG = "business/sticker-files/english";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-stickers-v1.png";

// ─── StickerMule pack URLs ────────────────────────────────────────────
//
// The "1-click bulk order" URL preserved verbatim from the legacy page
// (`stickermule.com/u/…/item/…`). Points directly at the merchant
// "Bitcoin Accepted Here" sticker product so anyone who just wants to
// order N of them can skip uploading the PNG themselves.
const STICKERMULE_ONECLICK_URL =
	"https://www.stickermule.com/u/4c84ba884f9c3ae/item/12364075";
// Generic StickerMule link for the "Where to print" meta row.
const STICKERMULE_DEFAULT_URL = "https://stickermule.com/";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "english_bitcoin_accepted_here_sticker_files",
		image: META_IMAGE,
		descriptionKey: "english_biz_sticker_files_description",
	});
}

// ─── Business resource card spec (cross-link surface) ────────────────
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

export default async function BusinessStickerFilesEnglishPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;

	const title = t("english_bitcoin_accepted_here_sticker_files");
	const description = t("english_biz_sticker_files_description");

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
						<h1>
							{t("biz_stickers_english_hero_title")}
						</h1>
						<p>{t("biz_stickers_english_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO + BULK CTA ═══
				   Mirrors `.comparison-intro--center` on the consumer
				   `/sticker-files/english` page so the StickerMule
				   button lands front-and-center. */}
				<div className="comparison-intro comparison-intro--center">
					<div className="container-inner">
						<p className="inflation-intro">
							{t("common_stickers_bulk_mess")}
						</p>
						<p className="sticker-files-cta-row">
							<a
								href={STICKERMULE_ONECLICK_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="sticker-files-cta-button"
							>
								{t("common_stickers_bulk_store")}
							</a>
						</p>
					</div>
				</div>

				{/* ═══ STICKER CARD ═══ */}
				<section
					className="inflation-section sticker-cards-section"
					aria-label={title}
				>
					<div className="container-inner">
						<div className="sticker-card">
							<h2 className="sticker-card-name">
								{t("common_language_english")} — {t("bitcoin_accepted_here_stickers")}
							</h2>

							<a
								href="/business/sticker-files/english/bbk-sticker-english-v1.png"
								target="_blank"
								rel="noopener noreferrer"
								className="sticker-card-image-link"
							>
								{/* eslint-disable-next-line @next/next/no-img-element */}
								<img
									src="/business/sticker-files/english/bbk-sticker-english-v1.png"
									alt={title}
									className="sticker-card-image"
								/>
							</a>

							<ul className="sticker-card-meta">
								<li>
									<span className="sticker-card-meta-label">
										{t("common_stickers_dimensions")}
									</span>{" "}
									{t(
										"common_stickers_dimensions_bitcoin_accepted_here",
									)}
								</li>
								<li>
									<span className="sticker-card-meta-label">
										{t("common_stickers_type")}
									</span>{" "}
									{t("common_stickers_type_die_cut")}
								</li>
								<li>
									<span className="sticker-card-meta-label">
										{t("common_stickers_material")}
									</span>{" "}
									{t("common_stickers_material_vinyl")}
								</li>
								<li>
									<span className="sticker-card-meta-label">
										{t("common_stickers_where_to_print")}
									</span>{" "}
									{t("common_stickers_printer_prefix")}{" "}
									<a
										href={STICKERMULE_DEFAULT_URL}
										target="_blank"
										rel="noopener noreferrer"
										className="body-link"
									>
										{t("common_stickers_printer_name")}
									</a>{" "}
									{t("common_stickers_printer_suffix")}
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* ═══ BUSINESS RESOURCES GRID ═══ */}
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
