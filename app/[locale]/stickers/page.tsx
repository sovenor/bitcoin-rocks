import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CountryFormSelector } from "@/components/CountryFormSelector";
import { JsonLd } from "@/components/JsonLd";
import { StickerAddressForm } from "@/components/StickerAddressForm";
import { StickerPicker } from "@/components/StickerPicker";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import { STICKER_LANGUAGES } from "@/lib/sticker-languages";

/**
 * /[locale]/stickers — Phase 9b faithful Tailwind port of stickers.html.
 *
 * Two-pack chooser (text pack + signs pack) × four options each
 * (USA mail / Canada mail / Print / Bulk). Loads Cloudflare Turnstile
 * via <Script> — needed to render the `cf-turnstile` widgets inside the
 * USA/Canada forms.
 */

const SLUG = "stickers";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-stickers-v9.png";

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

function LanguageButtons({ t }: { t: (k: string) => string }) {
	return (
		<>
			{STICKER_LANGUAGES.map((lang) => (
				<a
					key={lang.slug}
					href={`https://bitcoin.rocks/sticker-files/${lang.slug}`}
				>
					<div className="button button-sticker">
						<p>{t(lang.labelKey)}</p>
					</div>
				</a>
			))}
		</>
	);
}

function PrintOption({ t }: { t: (k: string) => string }) {
	return (
		<>
			<p>
				<span>{t("common_stickers_print_instructions_1")}</span>
				<br />
				<br />
				<span>{t("common_stickers_print_instructions_2")}</span>
			</p>

			<LanguageButtons t={t} />

			<div className="break-micro" />

			<p>
				<span>{t("common_stickers_request_language_1")}</span>
				<br />
				<br />
				<span>{t("common_stickers_request_language_2")}</span>
			</p>

			<form
				action="https://forms.bitcoin.rocks/submit/sticker-language-request"
				method="POST"
			>
				<input
					type="text"
					name="language"
					placeholder={t("placeholder_language")}
					required
				/>
				<br />
				<input
					type="text"
					name="stickers"
					placeholder={t("placeholder_which_stickers")}
					required
				/>
				<br />
				<input
					type="email"
					name="email"
					placeholder={t("placeholder_email_optional")}
				/>
				<br />
				<div
					className="cf-turnstile"
					data-sitekey="0x4AAAAAAClzj7R6NrkNgcsP"
					data-theme="dark"
				/>
				<button type="submit" className="button-form">
					<p>{t("common_submit")}</p>
				</button>
			</form>
		</>
	);
}

function BulkOption({ t }: { t: (k: string) => string }) {
	return (
		<p>
			<span>{t("common_stickers_bulk_want")}</span>{" "}
			<a
				href="https://stickermule.com/u/4c84ba884f9c3ae"
				target="_blank"
				rel="noopener noreferrer"
				className="orange-link"
			>
				<span>{t("common_stickers_bulk_store")}</span>
			</a>{" "}
			<span>{t("common_stickers_bulk_cheaper")}</span>
		</p>
	);
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

	// Build the two selector blocks as JSX (identical shape, different form URLs + option IDs).
	const textPackOptions = [
		{ value: "USA", label: t("common_country_usa") },
		{ value: "Canada", label: t("common_country_canada") },
		{ value: "Print", label: t("stickers_country_global_print") },
		{ value: "Bulk", label: t("stickers_country_global_order") },
	] as const;

	const signsPackOptions = [
		{ value: "USA2", label: t("common_country_usa") },
		{ value: "Canada2", label: t("common_country_canada") },
		{ value: "Print2", label: t("stickers_country_global_print") },
		{ value: "Bulk2", label: t("stickers_country_global_order") },
	] as const;

	const firstSelector = (
		<CountryFormSelector
			placeholderLabel={t("common_choose_your_country")}
			options={textPackOptions}
			forms={{
				USA: (
					<StickerAddressForm
						variant="usa"
						action="https://forms.bitcoin.rocks/submit/stickers-text-usa"
					/>
				),
				Canada: (
					<StickerAddressForm
						variant="canada"
						action="https://forms.bitcoin.rocks/submit/stickers-text-canada"
					/>
				),
				Print: <PrintOption t={t} />,
				Bulk: <BulkOption t={t} />,
			}}
		/>
	);

	const secondSelector = (
		<CountryFormSelector
			placeholderLabel={t("common_choose_your_country")}
			options={signsPackOptions}
			forms={{
				USA2: (
					<StickerAddressForm
						variant="usa"
						action="https://forms.bitcoin.rocks/submit/stickers-signs-usa"
					/>
				),
				Canada2: (
					<StickerAddressForm
						variant="canada"
						action="https://forms.bitcoin.rocks/submit/stickers-signs-canada"
					/>
				),
				Print2: <PrintOption t={t} />,
				Bulk2: <BulkOption t={t} />,
			}}
		/>
	);

	const firstTile = (
		<>
			<img src="/img/stickers/web-sticker-pack-text.png" alt="Text sticker pack" />
			<p>{t("stickers_text_pack")}</p>
		</>
	);
	const secondTile = (
		<>
			<img src="/img/stickers/web-sticker-pack-signs.png" alt="Signs sticker pack" />
			<p>{t("stickers_signs_pack")}</p>
		</>
	);

	return (
		<div className="container-main">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			{/* Cloudflare Turnstile — needed for form widgets below. */}
			<Script
				src="https://challenges.cloudflare.com/turnstile/v0/api.js"
				strategy="afterInteractive"
				async
				defer
			/>

			<div className="container-inner">
				<div style={{ textAlign: "center" }}>
					<a href={l}>
						<img
							src="/img/logos/rocks-logo-gray.png"
							className="back-to-home"
							alt="bitcoin.rocks"
						/>
					</a>
				</div>

				<h1 className="h1-inflation force-orange">{t("stickers_header")}</h1>
			</div>

			<div className="break" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p className="step">{t("stickers_choose_header")}</p>

					<p>
						<br />
						<span>{t("stickers_choose_c1")}</span>{" "}
						<a
							href="https://bitcoin.rocks"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("stickers_choose_c2")}</span>
						</a>{" "}
						&amp;{" "}
						<a
							href={`${l}/inflation`}
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("stickers_choose_c3")}</span>
						</a>
						<br />
						<br />
						<span>{t("stickers_choose_c4")}</span>
					</p>

					<StickerPicker
						firstTile={firstTile}
						secondTile={secondTile}
						firstSelector={firstSelector}
						secondSelector={secondSelector}
					/>
				</div>
			</div>

			<div className="break" />

			{/* Share your sticker spots */}
			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p className="step">{t("stickers_share_header")}</p>

					<p>
						<br />
						<span>{t("stickers_share_c1")}</span>{" "}
						<span>{t("common_footer_follow_first_half")}</span>{" "}
						<a
							href="https://snort.social/p/npub18kpw3akvdsyk239lx0jgwksr74sq4nlha3r8u9g2rnrhztfpfhysy469c4"
							className="footer-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							hi@bitcoin.rocks
						</a>
						&nbsp;<span>{t("common_footer_follow_second_half")}</span>
					</p>

					<div className="break-mini" />

					<a
						href="https://primal.net/p/npub18kpw3akvdsyk239lx0jgwksr74sq4nlha3r8u9g2rnrhztfpfhysy469c4"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="bounty-button">
							{t("stickers_btn_share_on_nostr")}
						</div>
					</a>

					<a
						href={`${l}/nostr/what-is-nostr`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="bounty-button">
							{t("stickers_btn_what_is_nostr")}
						</div>
					</a>

					<p>
						<span>{t("stickers_flyers_link_before")}</span>
						<a href={`${l}/flyers`} className="orange-link">
							<span>{t("stickers_flyers_link_text")}</span>
						</a>
						<span>{t("stickers_flyers_link_after")}</span>
					</p>
				</div>
			</div>

			{/* GET STARTED CTAs */}
			<div className="break-micro" />

			<a href={l}>
				<div className="text-box top">
					<div className="container-inner">
						<h2 className="h2-section" id="get-started">
							{t("common_cta_section_get_started")}
						</h2>
						<h2 className="second-line get-started h2-section">
							{t("common_cta_section_with_bitcoin")}
						</h2>
						<div className="item first">
							<h3 className="h3-item">{t("common_cta_section_title_1_alt")}</h3>
							<div className="type">{t("common_cta_link_type_website")}</div>
							<div className="author">{t("common_cta_author_bitcoin_rocks")}</div>
							<div className="clear" />
						</div>
					</div>
				</div>
			</a>
			<a href={`${l}/wallets`}>
				<div className="text-box middle">
					<div className="container-inner">
						<div className="item">
							<h3 className="h3-item">{t("common_cta_section_title_2")}</h3>
							<div className="type">{t("common_cta_link_type_guide")}</div>
							<div className="author">{t("common_cta_author_bitcoin_rocks")}</div>
							<div className="clear" />
						</div>
					</div>
				</div>
			</a>
			<a href={`${l}/buy`}>
				<div className="text-box bottom">
					<div className="container-inner">
						<div className="item">
							<h3 className="h3-item">{t("common_cta_section_title_3")}</h3>
							<div className="type">{t("common_cta_link_type_website")}</div>
							<div className="author">{t("common_cta_author_bitcoin_rocks")}</div>
							<div className="clear" />
						</div>
					</div>
				</div>
			</a>

			<div
				className="publisher-attribution"
				itemProp="publisher"
				itemScope
				itemType="https://schema.org/Organization"
			>
				<div className="container-inner">
					<p>
						<span className="reviewed-badge">{t("common_reviewed_accuracy")}</span>
						<br />
						<span>{t("common_published_by")}</span>{" "}
						<a href={`${l}/about`} className="orange-link" itemProp="url">
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
	);
}
