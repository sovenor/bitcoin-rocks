import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { PrintFlyerButton } from "@/components/PrintFlyerButton";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/flyers — V2 redesign.
 *
 * Information flow mirrors the live /flyers page but reskinned in the V2
 * design system used across /wallets, /lightning, /inflation, /bank-runs,
 * /about, /get-involved, and the /bitcoin-vs-* pages.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Print & post Bitcoin flyers") + intro
 *      paragraph describing the mission.
 *   2. Flyer preview card — surface card containing the flyer preview
 *      image (clickable → PDF), a "How to print & post" label, the
 *      explainer paragraphs, and DOWNLOAD / PRINT action buttons.
 *   3. Share-on-Nostr card — second surface card with the npub + Nostr
 *      explainer paragraphs and SHARE ON NOSTR / WHAT IS NOSTR? CTAs.
 *   4. What's next? — 4 WhatsNextCards (stickers, wallets, buy, home).
 *
 * No sources section or reviewed-for-accuracy publisher-attribution
 * block — this is a utility/download page that doesn't make factual
 * claims that need citations or an accuracy review. (The attribution
 * pattern on /wallets and /lightning is driven by the wallet recommen-
 * dations making factual, dated assertions about vendor features.)
 *
 * Reuses `.wallet-intro` for the surface card chrome. Introduces a
 * small `.flyer-*` CSS namespace in globals.css §8 for the centered
 * preview image + action-button styling.
 */

const SLUG = "flyers";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-flyers-v1.png";
const FLYER_PDF = "/img/flyers/flyer-1.pdf";
const FLYER_PREVIEW_IMG = "/img/flyers/flyer-1-header.png";
const NOSTR_URL =
	"https://primal.net/p/nprofile1qqsrmqhg7mxxczt9gjln8ey8tgpl2cq2elm7c3n7z59pe3m395s5mjgnfsua2";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("free_bitcoin_flyers");
	const description = t("flyers_description");
	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${SLUG}`,
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
		},
	};
}

export default async function FlyersPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("free_bitcoin_flyers");
	const description = t("flyers_description");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description,
		image: META_IMAGE,
		schemaType: "Article",
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
						<h1>{t("flyers_hero_title")}</h1>
						<p>{t("flyers_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ FLYER PREVIEW CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<a
							href={FLYER_PDF}
							target="_blank"
							rel="noopener noreferrer"
							className="flyer-preview-link"
							aria-label={t("flyers_btn_download")}
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={FLYER_PREVIEW_IMG}
								alt={t("free_bitcoin_flyers")}
								className="flyer-preview-image"
								loading="eager"
							/>
						</a>

						<h2 className="flyer-heading">{t("flyers_intro_header")}</h2>

						<p>
							{t("flyers_intro_c1")}{" "}
							<a href={l} className="body-link">
								{t("flyers_intro_c2")}
							</a>
						</p>
						<p>{t("flyers_intro_c4")}</p>

						<div className="flyer-actions">
							<a
								href={FLYER_PDF}
								download="bitcoin-rocks-flyer.pdf"
								className="flyer-btn flyer-btn-primary"
							>
								{t("flyers_btn_download")}
							</a>
							<PrintFlyerButton
								pdfUrl={FLYER_PDF}
								className="flyer-btn flyer-btn-secondary"
							>
								{t("flyers_btn_print")}
							</PrintFlyerButton>
						</div>

						<p className="flyer-sticker-line">
							{t("flyers_intro_c5")}{" "}
							<a href={`${l}/stickers`} className="body-link">
								{t("flyers_intro_c6")}
							</a>{" "}
							{t("flyers_intro_c7")}
						</p>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ SHARE-ON-NOSTR CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<h2 className="flyer-heading">{t("flyers_share_header")}</h2>

						<p>{t("flyers_share_c1")}</p>
						<p>
							{t("common_footer_follow_first_half")}{" "}
							<a
								href={NOSTR_URL}
								className="body-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								hi@bitcoin.rocks
							</a>{" "}
							{t("common_footer_follow_second_half")}
						</p>

						<div className="flyer-actions">
							<a
								href={NOSTR_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="flyer-btn flyer-btn-primary"
							>
								{t("flyers_btn_share_on_nostr")}
							</a>
							<a
								href={`${l}/nostr`}
								className="flyer-btn flyer-btn-secondary"
							>
								{t("flyers_btn_what_is_nostr")}
							</a>
						</div>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ WHAT'S NEXT ═══ */}
				<div className="whats-next-section">
					<div className="container-inner">
						<div className="whats-next-header">
							<h2>{t("common_whats_next")}</h2>
						</div>
						<div className="whats-next-grid">
							<WhatsNextCard
								href={`${l}/stickers`}
								label={t("flyers_next_get_stickers")}
								title={t("flyers_next_get_stickers_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/wallets`}
								label={t("common_next_get_wallet")}
								title={t("common_next_get_wallet_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/buy`}
								label={t("common_next_buy_bitcoin")}
								title={t("common_next_buy_bitcoin_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={l}
								label={t("common_next_keep_learning")}
								title={t("common_next_keep_learning_desc")}
								authorKey="common_publisher_name"
							/>
						</div>
					</div>
				</div>

			</div>
		</>
	);
}
