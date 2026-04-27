import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { StickerFlow } from "@/components/StickerFlow";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/stickers — V2 redesign (April 22, 2026).
 *
 * Information flow mirrors the legacy /stickers page (pick pack → pick
 * delivery method → form / language grid / bulk link) but reskinned in
 * the V2 design system used across /buy, /wallets, /lightning, /flyers,
 * /inflation, and the content pages.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Free Bitcoin stickers") + intro paragraph.
 *   2. Intro card — `.wallet-intro` surface card with the two intro
 *      paragraphs and inline links to /inflation + the site itself.
 *   3. StickerFlow — the two-step wizard (Client Component):
 *        Step 1: two pack tiles (Text / Signs)
 *        Step 2: four delivery options (USA mail / Canada mail /
 *                Print / Bulk) → reveals a `.sticker-panel` surface
 *                card with the matching form or language grid.
 *   4. Share-your-spots card — V2 `.wallet-intro` surface card with
 *      the Nostr explainer + SHARE ON NOSTR / WHAT IS NOSTR? CTAs.
 *   5. What's next? — 4 WhatsNextCards (flyers, wallets, buy, home).
 *   6. Publisher attribution + reviewed-for-accuracy badge.
 *
 * No sources section — this is a utility/form page and doesn't make
 * factual claims that need citations.
 *
 * Styling: the `.sticker-*` classes live in `app/globals.css` §11.
 * Reuses `.wallet-intro`, `.buy-step-header`, `.buy-step-eyebrow`,
 * `.flyer-btn`, `.flyer-actions`, and `.whats-next-section` from the
 * existing V2 families.
 */

const SLUG = "stickers";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-stickers-v9.png";
const NOSTR_URL =
	"https://primal.net/p/nprofile1qqsrmqhg7mxxczt9gjln8ey8tgpl2cq2elm7c3n7z59pe3m395s5mjgnfsua2";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("free_bitcoin_stickers");
	const description = t("stickers_description");
	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		openGraph: {
			title,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${SLUG}`,
			images: [{ url: META_IMAGE, width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [META_IMAGE],
		},
	};
}

export default async function StickersPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;

	const title = t("free_bitcoin_stickers");
	const description = t("stickers_description");

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

			{/* Cloudflare Turnstile — needed for form widgets inside StickerFlow. */}
			<Script
				src="https://challenges.cloudflare.com/turnstile/v0/api.js"
				strategy="afterInteractive"
				async
				defer
			/>

			<div className="container-main">
				{/* ═══ HERO ═══ */}
				<div className="home-hero inflation-section">
					<div className="container-inner">
						<h1>{t("stickers_hero_title")}</h1>
						<p>{t("stickers_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>
							{t("stickers_intro_c1")}{" "}
							<a href={l} className="body-link">
								{t("stickers_intro_c2")}
							</a>{" "}
							&amp;{" "}
							<a href={`${l}/inflation`} className="body-link">
								{t("stickers_intro_c3")}
							</a>
							.
						</p>
						<p>{t("stickers_intro_c4")}</p>
					</div>
				</div>

				{/* ═══ STICKER WIZARD ═══ */}
				<StickerFlow localePrefix={l} />

				<div className="break-micro" />

				{/* ═══ SHARE-ON-NOSTR CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<h2 className="flyer-heading">
							{t("stickers_share_header")}
						</h2>
						<p>{t("stickers_share_c1")}</p>
						<p>
							{t("stickers_share_c2")}{" "}
							<a
								href={NOSTR_URL}
								className="body-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								hi@bitcoin.rocks
							</a>{" "}
							{t("stickers_share_c3")}
						</p>

						<div className="flyer-actions">
							<a
								href={NOSTR_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="flyer-btn flyer-btn-primary"
							>
								{t("stickers_btn_share_on_nostr")}
							</a>
							<a
								href={`${l}/nostr`}
								className="flyer-btn flyer-btn-secondary"
							>
								{t("stickers_btn_what_is_nostr")}
							</a>
						</div>

						<p className="flyer-sticker-line">
							{t("stickers_flyers_link_before")}{" "}
							<a href={`${l}/flyers`} className="body-link">
								{t("stickers_flyers_link_text")}
							</a>{" "}
							{t("stickers_flyers_link_after")}
						</p>
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
								href={`${l}/flyers`}
								label={t("stickers_next_print_flyers")}
								title={t("stickers_next_print_flyers_desc")}
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
