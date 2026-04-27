import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/sticker-success — V2 redesign (April 22, 2026).
 *
 * Thank-you screen after a successful sticker-form submission. The
 * information flow of the legacy page is preserved (confirmation →
 * good-sticker-spots checklist → share-your-spots on Nostr → bulk
 * order link → onward navigation) but reskinned in the V2 design
 * system used across /stickers, /flyers, /buy, /wallets, /lightning,
 * and the comparison pages.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Your stickers are on their way 🎉") +
 *      intro paragraph confirming delivery window + inviting the
 *      reader to think of a good spot.
 *   2. Good-spots card — V2 `.wallet-intro` surface card with a
 *      styled `.sticker-success-tips` checklist of ✅ good / 🚫 bad
 *      sticker placements.
 *   3. Share-on-Nostr card — surface card matching the pattern on
 *      /stickers + /flyers (share spots → SHARE ON NOSTR /
 *      WHAT IS NOSTR? CTAs).
 *   4. Bulk order card — "Want more stickers?" → outlined button
 *      linking to StickerMule bulk page (we use the same referral
 *      link as /stickers).
 *   5. What's next? — 4 WhatsNextCards (flyers, wallets, buy, home).
 *
 * No sources section or publisher-attribution block — this is a
 * utility/thank-you page with no factual claims that need citations
 * or an accuracy review (matching the pattern on /flyers).
 *
 * Robots: `noindex, follow` — form-success pages should never appear
 * in search results.
 *
 * CSS: the `.sticker-success-*` classes live in `app/globals.css` §12.
 * Reuses `.wallet-intro`, `.flyer-heading`, `.flyer-actions`,
 * `.flyer-btn`, `.whats-next-section`, and `.home-hero` from the
 * existing V2 families.
 */

const SLUG = "sticker-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-stickers-v9.png";
const NOSTR_URL =
	"https://primal.net/p/nprofile1qqsrmqhg7mxxczt9gjln8ey8tgpl2cq2elm7c3n7z59pe3m395s5mjgnfsua2";
const STICKERMULE_URL = "https://stickermule.com/u/4c84ba884f9c3ae";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("sticker_success_hero_title");
	return {
		title,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		robots: { index: false, follow: true },
	};
}

export default async function StickerSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("sticker_success_hero_title");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description: t("sticker_success_1"),
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
						<p>{t("sticker_success_1")}</p>
					</div>
				</div>

				{/* ═══ GOOD-SPOTS CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<h2 className="flyer-heading">
							{t("sticker_success_tips_header")}
						</h2>

						<ul className="sticker-success-tips">
							<li className="sticker-success-tip">
								<span
									className="sticker-success-tip-icon"
									aria-hidden="true"
								>
									✅
								</span>
								<span>{t("sticker_success_list_1")}</span>
							</li>
							<li className="sticker-success-tip">
								<span
									className="sticker-success-tip-icon"
									aria-hidden="true"
								>
									✅
								</span>
								<span>{t("sticker_success_list_2")}</span>
							</li>
							<li className="sticker-success-tip">
								<span
									className="sticker-success-tip-icon"
									aria-hidden="true"
								>
									✅
								</span>
								<span>{t("sticker_success_list_3")}</span>
							</li>
							<li className="sticker-success-tip">
								<span
									className="sticker-success-tip-icon"
									aria-hidden="true"
								>
									🚫
								</span>
								<span>{t("sticker_success_list_4")}</span>
							</li>
						</ul>
					</div>
				</div>

				{/* ═══ SHARE-ON-NOSTR CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<h2 className="flyer-heading">
							{t("sticker_success_share_header")}
						</h2>
						<p>{t("sticker_success_3")}</p>
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
								{t("sticker_success_btn_share_on_nostr")}
							</a>
							<a
								href={`${l}/nostr`}
								className="flyer-btn flyer-btn-secondary"
							>
								{t("sticker_success_btn_what_is_nostr")}
							</a>
						</div>
					</div>
				</div>

				{/* ═══ BULK ORDER CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<h2 className="flyer-heading">
							{t("sticker_success_bulk_header")}
						</h2>
						<p>
							<a
								href={STICKERMULE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="body-link"
							>
								{t("common_stickers_bulk_store")}
							</a>{" "}
							{t("common_stickers_bulk_cheaper")}
						</p>

						<div className="flyer-actions">
							<a
								href={STICKERMULE_URL}
								target="_blank"
								rel="noopener noreferrer"
								className="flyer-btn flyer-btn-secondary"
							>
								{t("sticker_success_btn_order_bulk")}
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
			</div>
		</>
	);
}
