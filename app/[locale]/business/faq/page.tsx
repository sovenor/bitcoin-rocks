import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WalletAccordion } from "@/components/WalletAccordion";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/business/faq — V2 redesign (April 22, 2026).
 *
 * Faithfully ports the legacy /business/faq information architecture
 * into the V2 design system used across the rest of the site. The
 * nine FAQs are rendered as collapsible `<WalletAccordion>` cards
 * (same Client Component that powers the /wallets + /lightning FAQ
 * accordions) so the page is skimmable and mobile-friendly.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("FAQs for accepting Bitcoin") + subtitle
 *      paragraph introducing the nine questions below.
 *   2. Intro card — `.wallet-intro` bordered surface framing the
 *      FAQs and pointing readers at the business resources at the
 *      foot of the page.
 *   3. FAQ accordions — 9 questions, each a `<WalletAccordion>` card
 *      with the legacy `faq_s*_c*` copy rendered as proper
 *      paragraphs + (for FAQ 4) a real `<ul>` of bullets, with all
 *      inline cross-links switched to V2 `.body-link`.
 *   4. Business resources grid — per the /business/* V2 convention
 *      (see V2-REDESIGN-CHECKLIST.md), the bottom cross-link surface
 *      is the colored business resources grid from /business (same
 *      BIZ_RESOURCES entries, `faq` excluded because we're on it).
 *      Rendered via a bare `.whats-next-grid` below an h2 + intro
 *      block so the rhythm matches /business.
 *   5. Sources — merchant/point-of-sale references + Bitcoin
 *      whitepaper, matching the V2 sources treatment.
 *   6. Publisher attribution + reviewed-for-accuracy badge.
 *
 * Per the /business/* convention, the generic "keep learning / buy
 * Bitcoin / get a wallet / inflation" bridge is intentionally
 * omitted here — the colored business resources grid IS the
 * cross-link surface for merchants.
 *
 * Schemas: Article + BreadcrumbList JSON-LD (same pattern as all V2
 * content pages).
 */

const SLUG = "business/faq";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-faq-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "frequently_asked_questions_about_accepting_bitcoin",
		image: META_IMAGE,
		descriptionKey: "faq_description",
	});
}

// ─── Business resource card spec ──────────────────────────────────────
//
// Mirrors the 7-card grid on /business, minus the FAQ card (we're on
// that page). Each entry renders as a V2 `.whats-next-card` with its
// own `--card-accent` so the grid reads like the topic-colored
// category grids on the homepage. The accents are kept identical to
// /business for visual consistency across the business section.
type BizResource = {
	key: string;
	href: string;
	/** Hex color used as the card's `--card-accent`. */
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
];

export default async function BusinessFaqPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("frequently_asked_questions_about_accepting_bitcoin");
	const description = t("faq_description");

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
						<p>{t("faq_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("faq_intro_c1")}</p>
					</div>
				</div>

				{/* ═══ FAQ ACCORDIONS ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<div className="wallet-accordions">
							{/* ── FAQ 1 — What is Bitcoin? ── */}
							<WalletAccordion question={t("faq_s1")}>
								<p>{t("faq_s1_c1")}</p>
								<p>{t("faq_s1_c2")}</p>
								<p>{t("faq_s1_c3")}</p>
								<p>{t("faq_s1_c4")}</p>
							</WalletAccordion>

							{/* ── FAQ 2 — How can Bitcoin benefit my business? ── */}
							<WalletAccordion question={t("faq_s2")}>
								<p>{t("faq_s2_c1")}</p>
								<p>{t("faq_s2_c2")}</p>
								<p>
									<a href={`${l}/business`} className="body-link">
										{t("faq_s2_c3")}
									</a>
								</p>
							</WalletAccordion>

							{/* ── FAQ 3 — How do I accept Bitcoin payments? ── */}
							<WalletAccordion question={t("faq_s3")}>
								<p>{t("faq_s3_c1")}</p>
								<p>{t("faq_s3_c2")}</p>
								<p>
									<a
										href={`${l}/business/wallets`}
										className="body-link"
									>
										{t("faq_s3_c3")}
									</a>
								</p>
							</WalletAccordion>

							{/* ── FAQ 4 — Can I convert to local currency? ── */}
							<WalletAccordion question={t("faq_s4")}>
								<p>{t("faq_s4_c1")}</p>
								<p>
									<a
										href={`${l}/business/wallets`}
										className="body-link"
									>
										{t("faq_s4_c2")}
									</a>
								</p>
								<p>{t("faq_s4_c3")}</p>
								<ul>
									<li>{t("faq_s4_c4")}</li>
									<li>{t("faq_s4_c5")}</li>
								</ul>
								<p>{t("faq_s4_c6")}</p>
								<p>{t("faq_s4_c7")}</p>
							</WalletAccordion>

							{/* ── FAQ 5 — Accept Bitcoin in person? ── */}
							<WalletAccordion question={t("faq_s5")}>
								<p>{t("faq_s5_c1")}</p>
								<p>{t("faq_s5_c2")}</p>
								<p>
									<a
										href={`${l}/business/wallets`}
										className="body-link"
									>
										{t("faq_s5_c3")}
									</a>
								</p>
							</WalletAccordion>

							{/* ── FAQ 6 — Accept Bitcoin online? ── */}
							<WalletAccordion question={t("faq_s6")}>
								<p>{t("faq_s6_c1")}</p>
								<p>
									<a
										href={`${l}/business/wallets`}
										className="body-link"
									>
										{t("faq_s6_c2")}
									</a>
								</p>
							</WalletAccordion>

							{/* ── FAQ 7 — How to let customers know? ── */}
							<WalletAccordion question={t("faq_s7")}>
								<p>
									<span>{t("faq_s7_c1")}</span>{" "}
									<a
										href={`${l}/business/stickers`}
										className="body-link"
									>
										{t("faq_s7_c2")}
									</a>
								</p>
								<p>
									<span>{t("faq_s7_c3")}</span>{" "}
									<a
										href={`${l}/business/maps`}
										className="body-link"
									>
										{t("faq_s7_c4")}
									</a>
								</p>
							</WalletAccordion>

							{/* ── FAQ 8 — Get more customers? ── */}
							<WalletAccordion question={t("faq_s8")}>
								<p>{t("faq_s8_c1")}</p>
								<p>
									<span>{t("faq_s8_c2")}</span>{" "}
									<a
										href={`${l}/business/maps`}
										className="body-link"
									>
										{t("faq_s8_c3")}
									</a>
								</p>
							</WalletAccordion>

							{/* ── FAQ 9 — Cost? ── */}
							<WalletAccordion question={t("faq_s9")}>
								<p>{t("faq_s9_c1")}</p>
								<p>
									<a
										href={`${l}/business/wallets`}
										className="body-link"
									>
										{t("faq_s9_c2")}
									</a>
								</p>
							</WalletAccordion>
						</div>
					</div>
				</div>

				{/* ═══ BUSINESS RESOURCES GRID ═══
				   The /business/* V2 convention: this colored resource
				   grid IS the cross-link surface for merchants. No
				   generic "keep learning / buy Bitcoin" bridge here —
				   merchants should flow between business pages, not
				   back into the beginner learning path. (See
				   V2-REDESIGN-CHECKLIST.md.) */}
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
									BTC Map — Worldwide directory of Bitcoin-accepting
									merchants
								</a>
							</li>
							<li>
								<a
									href="https://btcpayserver.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									BTCPay Server — Free, open-source, self-hosted
									Bitcoin payment processor
								</a>
							</li>
							<li>
								<a
									href="https://strike.me/business/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Strike — Bitcoin & Lightning payments for
									businesses
								</a>
							</li>
							<li>
								<a
									href="https://www.oshi.tech/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Oshi — Bitcoin rewards platform for merchants
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
