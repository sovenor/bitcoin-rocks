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
 * /[locale]/business/maps — V2 redesign (April 23, 2026).
 *
 * Faithfully ports the legacy /business/maps page into the V2 design
 * system used across the rest of the site. Merchants land here to
 * request a free listing on BTC Map (and other Bitcoin merchant
 * directories) so Bitcoiners can find their business and spend
 * Bitcoin there.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Get your business on Bitcoin merchant
 *      maps") + intro paragraph explaining the value to merchants.
 *   2. Intro card — `.wallet-intro` bordered surface with a short
 *      lead-in + a `.body-link` out to BTC Map so merchants can see
 *      what the directory looks like before submitting.
 *   3. Listing request form — rendered as a regular `.inflation-
 *      section` with an h2 + `.comparison-explain` intro paragraph,
 *      followed by a `.cic-form` styled to match the V2 forms on
 *      /stickers + /business/stickers. Submits (unchanged) to
 *      forms-backend's `/submit/business-maps` endpoint.
 *   4. Business resources grid — per the /business/* V2 convention
 *      (see V2-REDESIGN-CHECKLIST.md), the colored resources grid
 *      from /business (minus the maps card since we're on it) is the
 *      cross-link surface for merchants. No generic "keep learning /
 *      buy Bitcoin" bridge.
 *   5. Publisher attribution + reviewed-for-accuracy badge.
 *
 * No sources section — this is a utility/form page that doesn't make
 * factual claims needing citations (same convention as /stickers and
 * /business/stickers).
 *
 * Schemas: Article + BreadcrumbList JSON-LD (same pattern as all V2
 * content pages).
 */

const SLUG = "business/maps";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-maps-v1.png";

const FORM_ACTION = "https://forms.bitcoin.rocks/submit/business-maps";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "bitcoin_merchant_maps_list_your_business_for_free",
		image: META_IMAGE,
		descriptionKey: "biz_maps_meta_description",
	});
}

// ─── Business resource card spec (cross-link surface) ────────────────
//
// Matches the grid on /business, minus the maps card (we're on it).
// Same accents as /business + /business/faq + /business/wallets +
// /business/stickers + /business/accounting for visual consistency
// across the business section.
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

export default async function BusinessMapsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("bitcoin_merchant_maps_list_your_business_for_free");
	const description = t("biz_maps_meta_description");

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
						<h1>{t("biz_maps_hero_title")}</h1>
						<p>{t("biz_maps_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══
				   Short framing + an outbound .body-link to BTC Map so
				   merchants can preview what the directory looks like
				   before they submit. */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("biz_maps_intro_c1")}</p>
						<p>{t("biz_maps_intro_c2")}</p>
						<p>
							<a
								href="https://btcmap.org/"
								target="_blank"
								rel="noopener noreferrer"
								className="body-link"
							>
								{t("biz_maps_view_map_cta")} →
							</a>
						</p>
					</div>
				</div>

				{/* ═══ LISTING REQUEST FORM ═══
				   Rendered as a normal content section (h2 +
				   `.comparison-explain` intro) so the rhythm matches
				   the rest of the business section. The form itself
				   reuses the V2 `.cic-*` form system used by /stickers
				   and /business/stickers for visual consistency. */}
				<section
					className="inflation-section content-section"
					aria-labelledby="biz-maps-form-heading"
				>
					<div className="container-inner">
						<h2 id="biz-maps-form-heading">
							{t("biz_maps_form_header")}
						</h2>
						<div className="comparison-explain">
							<p>{t("biz_maps_form_intro")}</p>
						</div>

						<form
							action={FORM_ACTION}
							method="POST"
							className="cic-form sticker-form"
							style={{ marginTop: "24px" }}
						>
							<div className="cic-field">
								<label
									className="cic-label"
									htmlFor="biz-maps-name"
								>
									{t("biz_maps_placeholder_name")}
								</label>
								<input
									id="biz-maps-name"
									className="cic-input"
									type="text"
									name="name"
									placeholder={t("biz_maps_placeholder_name")}
									required
								/>
							</div>

							<div className="cic-field">
								<label
									className="cic-label"
									htmlFor="biz-maps-category"
								>
									{t("biz_maps_placeholder_category")}
								</label>
								<input
									id="biz-maps-category"
									className="cic-input"
									type="text"
									name="category"
									placeholder={t("biz_maps_placeholder_category")}
									required
								/>
							</div>

							<div className="cic-field">
								<label
									className="cic-label"
									htmlFor="biz-maps-address"
								>
									{t("biz_maps_placeholder_address")}
								</label>
								<input
									id="biz-maps-address"
									className="cic-input"
									type="text"
									name="address"
									placeholder={t("biz_maps_placeholder_address")}
									required
								/>
							</div>

							<div className="cic-fields sticker-fields--three">
								<div className="cic-field">
									<label
										className="cic-label"
										htmlFor="biz-maps-city"
									>
										{t("biz_maps_placeholder_city")}
									</label>
									<input
										id="biz-maps-city"
										className="cic-input"
										type="text"
										name="city"
										placeholder={t("biz_maps_placeholder_city")}
										required
									/>
								</div>
								<div className="cic-field">
									<label
										className="cic-label"
										htmlFor="biz-maps-region"
									>
										{t("biz_maps_placeholder_region")}
									</label>
									<input
										id="biz-maps-region"
										className="cic-input"
										type="text"
										name="region"
										placeholder={t("biz_maps_placeholder_region")}
										required
									/>
								</div>
								<div className="cic-field">
									<label
										className="cic-label"
										htmlFor="biz-maps-country"
									>
										{t("biz_maps_placeholder_country")}
									</label>
									<input
										id="biz-maps-country"
										className="cic-input"
										type="text"
										name="country"
										placeholder={t("biz_maps_placeholder_country")}
										required
									/>
								</div>
							</div>

							<div className="cic-field">
								<label
									className="cic-label"
									htmlFor="biz-maps-website"
								>
									{t("biz_maps_placeholder_website")}
								</label>
								<input
									id="biz-maps-website"
									className="cic-input"
									type="text"
									name="website"
									placeholder={t("biz_maps_placeholder_website")}
								/>
							</div>

							<input
								type="hidden"
								name="_gotcha"
								style={{ display: "none" }}
							/>

							<button type="submit" className="cic-submit">
								{t("common_submit")}
							</button>
						</form>
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
