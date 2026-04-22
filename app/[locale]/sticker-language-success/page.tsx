import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/sticker-language-success — V2 redesign (April 22, 2026).
 *
 * Thank-you screen after a successful "request stickers in my language"
 * form submission. Reskinned in the V2 design system used across
 * /sticker-success, /stickers, /flyers, /buy, /wallets, /lightning, and
 * the comparison pages.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Request received 🎉") + intro paragraph
 *      confirming we got the request and setting expectations.
 *   2. Batch-release card — V2 `.wallet-intro` surface card explaining
 *      that files go out in batches (may take several weeks).
 *   3. What's next? — 4 WhatsNextCards (sticker-files index, wallets,
 *      buy, home).
 *
 * No sources section or publisher-attribution block — this is a
 * utility/thank-you page with no factual claims that need citations.
 *
 * Robots: `noindex, follow` — form-success pages should never appear
 * in search results.
 */

const SLUG = "sticker-language-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-stickers-v9.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("sticker_language_success_hero_title");
	return {
		title,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		robots: { index: false, follow: true },
	};
}

export default async function StickerLanguageSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("sticker_language_success_hero_title");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description: t("sticker_language_success_1"),
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
						<p>{t("sticker_language_success_1")}</p>
					</div>
				</div>

				{/* ═══ BATCH-RELEASE CARD ═══ */}
				<div className="wallet-intro flyer-section">
					<div className="container-inner">
						<p>{t("sticker_language_success_2")}</p>
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
								href={`${l}/sticker-files`}
								label={t("common_sticker_files_next_languages_label")}
								title={t("common_sticker_files_next_languages_title")}
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
