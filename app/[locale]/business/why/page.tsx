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
 * /[locale]/business/why — V2 redesign (April 22, 2026).
 *
 * This is the landing page customers see when they scan the QR code on
 * a "Bitcoin Accepted Here" sticker. The V1 version opened with a
 * payment-chart comparison image, then jumped straight into four
 * "why it's good for YOU" sections. The V2 redesign replaces the
 * image-led hero with content sections modeled on the /business index
 * page so the tone matches the rest of the site.
 *
 * Structure (top → bottom):
 *   1. Hero — plain <h1> ("Bitcoin is accepted here") + subtitle
 *      explaining they just scanned a sticker and why this page exists.
 *   2. Intro card — `.wallet-intro` bordered surface; short lead-in
 *      framing the two halves of the page.
 *   3. "Why Bitcoin is great for this business" — h2 + intro, followed
 *      by three `.inflation-section` benefit blocks:
 *        a. Lower fees, more for the business
 *        b. Instant settlement, no chargebacks
 *        c. Free to accept, open to everyone
 *      Closes with a small inline CTA linking to /business for anyone
 *      who runs a business and wants to start accepting it.
 *   4. "Why Bitcoin is great for you too" — h2 + intro, followed by
 *      four benefit sections (inflation, bank runs, permissionless,
 *      better world) — each with inline `.body-link` → /inflation,
 *      /bank-runs, and the homepage so curious customers can drop
 *      into the learning path.
 *   5. "Where to next?" — bespoke 4-card V2 `.whats-next-grid` with
 *      color-coded `--card-accent`s. Audience here is customers (not
 *      merchants), so the four cards funnel into: homepage (learn
 *      more), /wallets (get a wallet), /buy (buy bitcoin), and
 *      /business (for anyone inspired to accept it). This is the
 *      /business/* exception noted in V2-REDESIGN-CHECKLIST.md —
 *      /business/why's primary audience is QR-scanning beginners,
 *      not merchants, so the learning-path bridge is appropriate.
 *   6. Publisher attribution + reviewed-for-accuracy badge.
 *
 * Schemas: Article + BreadcrumbList JSON-LD (same pattern as other V2
 * content pages).
 */

const SLUG = "business/why";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-why-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "learn_why_bitcoin_is_good_for_business",
		image: META_IMAGE,
		description:
			"You scanned a Bitcoin Accepted Here sticker. Here's why accepting Bitcoin is good for this business — and why using Bitcoin is good for you.",
	});
}

// ─── "Where to next?" card spec ───────────────────────────────────────
//
// Four color-coded V2 `.whats-next-card`s. This is the only /business/*
// page whose primary audience is NOT merchants (it's QR-scanning
// customers), so — unlike other business sub-pages — we intentionally
// cross-link into the beginner learning path here. See the convention
// note in V2-REDESIGN-CHECKLIST.md for the broader rule.
type NextCard = {
	key: string;
	href: string;
	/** Hex color used as the card's `--card-accent`. */
	accent: string;
	labelKey: string;
	titleKey: string;
};

const NEXT_CARDS: readonly NextCard[] = [
	{
		key: "learn",
		href: "/",
		accent: "#A67DFF", // education purple
		labelKey: "why_next_learn_label",
		titleKey: "why_next_learn_title",
	},
	{
		key: "wallet",
		href: "/wallets",
		accent: "#FF9500", // bitcoin orange
		labelKey: "why_next_wallet_label",
		titleKey: "why_next_wallet_title",
	},
	{
		key: "buy",
		href: "/buy",
		accent: "#FFE91D", // payments yellow
		labelKey: "why_next_buy_label",
		titleKey: "why_next_buy_title",
	},
	{
		key: "business",
		href: "/business",
		accent: "#1DFF4D", // merchant green
		labelKey: "why_next_business_label",
		titleKey: "why_next_business_title",
	},
];

export default async function BusinessWhyPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("learn_why_bitcoin_is_good_for_business");
	const description =
		"You scanned a Bitcoin Accepted Here sticker. Here's why accepting Bitcoin is good for this business — and why using Bitcoin is good for you.";

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
						<p>{t("why_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("why_intro_c1")}</p>
						<p>{t("why_intro_c2")}</p>
					</div>
				</div>

				{/* ═══ PART 1 — FOR THE BUSINESS ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="why-for-business-heading"
				>
					<div className="container-inner">
						<h2 id="why-for-business-heading">{t("why_for_business")}</h2>
						<div className="comparison-explain">
							<p>{t("why_for_business_intro")}</p>
						</div>
					</div>
				</section>

				{/* Benefit 1 — Lower fees */}
				<section
					className="inflation-section content-section"
					aria-labelledby="why-biz-s1"
				>
					<div className="container-inner">
						<h2 id="why-biz-s1">{t("why_biz_s1")}</h2>
						<div className="comparison-explain">
							<p>{t("why_biz_s1_c1")}</p>
						</div>
					</div>
				</section>

				{/* Benefit 2 — Instant settlement */}
				<section
					className="inflation-section content-section"
					aria-labelledby="why-biz-s2"
				>
					<div className="container-inner">
						<h2 id="why-biz-s2">{t("why_biz_s2")}</h2>
						<div className="comparison-explain">
							<p>{t("why_biz_s2_c1")}</p>
						</div>
					</div>
				</section>

				{/* Benefit 3 — Free to accept */}
				<section
					className="inflation-section content-section"
					aria-labelledby="why-biz-s3"
				>
					<div className="container-inner">
						<h2 id="why-biz-s3">{t("why_biz_s3")}</h2>
						<div className="comparison-explain">
							<p>{t("why_biz_s3_c1")}</p>
							<p>
								<span>{t("why_business_cta_intro")}</span>{" "}
								<a href={`${l}/business`} className="body-link">
									{t("why_business_cta_link")}
								</a>
							</p>
						</div>
					</div>
				</section>

				{/* ═══ PART 2 — FOR THE CUSTOMER ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="why-for-you-heading"
				>
					<div className="container-inner">
						<h2 id="why-for-you-heading">{t("why_good_for_you")}</h2>
						<div className="comparison-explain">
							<p>{t("why_good_for_you_intro")}</p>
						</div>
					</div>
				</section>

				{/* You 1 — No inflation */}
				<section
					className="inflation-section content-section"
					aria-labelledby="why-s1"
				>
					<div className="container-inner">
						<h2 id="why-s1">{t("why_s1")}</h2>
						<div className="comparison-explain">
							<p>{t("why_s1_c1")}</p>
							<p>
								<span>{t("why_s1_c2")}</span>{" "}
								<a href={`${l}/inflation`} className="body-link">
									{t("why_learn_more_lowercase")}
								</a>
							</p>
						</div>
					</div>
				</section>

				{/* You 2 — No bank runs */}
				<section
					className="inflation-section content-section"
					aria-labelledby="why-s2"
				>
					<div className="container-inner">
						<h2 id="why-s2">{t("why_s2")}</h2>
						<div className="comparison-explain">
							<p>{t("why_s2_c1")}</p>
							<p>{t("why_s2_c2")}</p>
							<p>
								<span>{t("why_s2_c3")}</span>{" "}
								<a href={`${l}/bank-runs`} className="body-link">
									{t("why_learn_more_lowercase")}
								</a>
							</p>
						</div>
					</div>
				</section>

				{/* You 3 — Permissionless */}
				<section
					className="inflation-section content-section"
					aria-labelledby="why-s3"
				>
					<div className="container-inner">
						<h2 id="why-s3">{t("why_s3")}</h2>
						<div className="comparison-explain">
							<p>{t("why_s3_c1")}</p>
							<p>
								<span>{t("why_s3_c2")}</span>{" "}
								<a
									href="https://voteforbetter.money/learn/bitcoin-is-permissionless"
									className="body-link"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("why_learn_more_lowercase")}
								</a>
							</p>
						</div>
					</div>
				</section>

				{/* You 4 — Better world */}
				<section
					className="inflation-section content-section"
					aria-labelledby="why-s4"
				>
					<div className="container-inner">
						<h2 id="why-s4">{t("why_s4")}</h2>
						<div className="comparison-explain">
							<p>{t("why_s4_c1")}</p>
							<p>
								<span>{t("why_s4_c2")}</span>{" "}
								<a href={l} className="body-link">
									{t("why_learn_more_lowercase")}
								</a>
							</p>
						</div>
					</div>
				</section>

				{/* ═══ WHERE TO NEXT? — custom card grid ═══
				   Rendered as a normal content section (h2 +
				   `.comparison-explain` prose) so the heading + intro
				   match the sections above, with color-coded
				   `.whats-next-card`s directly below via a bare
				   `.whats-next-grid`. /business/why is the /business/*
				   exception that DOES cross-link back into the
				   beginner learning path, because the audience
				   scanning this QR code is a customer, not a
				   merchant. (See V2-REDESIGN-CHECKLIST.md.) */}
				<section
					id="where-to-next"
					className="inflation-section content-section"
					aria-labelledby="why-whats-next-heading"
				>
					<div className="container-inner">
						<h2 id="why-whats-next-heading">
							{t("why_whats_next_heading")}
						</h2>
						<div className="comparison-explain">
							<p>{t("why_whats_next_intro")}</p>
						</div>
						<div
							className="whats-next-grid"
							style={{ marginTop: "24px" }}
						>
							{NEXT_CARDS.map((c) => {
								const style = {
									"--card-accent": c.accent,
								} as CSSProperties;
								return (
									<a
										key={c.key}
										href={`${l}${c.href}`}
										className="whats-next-card"
										style={style}
									>
										<div>
											<div className="whats-next-card-label">
												{t(c.labelKey)}
											</div>
											<div className="whats-next-card-title">
												{t(c.titleKey)}
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
