import Script from "next/script";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import {
	getPrintableLanguageSlugs,
	findLanguage,
} from "@/lib/sticker-files/catalog";

/**
 * /[locale]/sticker-files — Phase 11 Bucket C (ported faithfully, V2 redesign deferred).
 *
 * Mirrors `sticker-files/index.html`:
 *   - Hero: "BITCOIN STICKER FILES"
 *   - Mission paragraph (reused common_sticker_files_mission_* keys)
 *   - 43-language button grid (links to /sticker-files/<lang>)
 *   - Sticker-language-request form with Cloudflare Turnstile, posts to
 *     forms-backend `/submit/sticker-language-request`
 *
 * Namespaces used: `sticker-files/index`, `common`.
 */

const SLUG = "sticker-files";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-stickers-v9.png";
const TURNSTILE_SITEKEY = "0x4AAAAAAClzj7R6NrkNgcsP";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("bitcoin_sticker_files_all_languages");
	const description = t("sticker_files_description");
	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${SLUG}`,
			images: [{ url: META_IMAGE, width: 1200, height: 630, alt: title }],
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
			images: [META_IMAGE],
		},
	};
}

export default async function StickerFilesIndexPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("bitcoin_sticker_files_all_languages");
	const description = t("sticker_files_description");
	const heading = t("sticker_files_header");

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

	const languageSlugs = getPrintableLanguageSlugs();

	return (
		<div className="container-main" id="lighten-text-boxes">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			{/* Cloudflare Turnstile (form below) */}
			<Script
				src="https://challenges.cloudflare.com/turnstile/v0/api.js"
				strategy="afterInteractive"
				async
				defer
			/>

			<div className="container-inner">
				<h1 className="h1-inflation">{heading}</h1>
				<br />
				<br />
			</div>

			{/* Mission paragraph */}
			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<div className="break-micro" />
					<p>
						<span>{t("common_sticker_files_mission_1")}</span>{" "}
						<a
							href={l}
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("common_sticker_files_mission_2")}</span>
						</a>{" "}
						&amp;{" "}
						<a
							href={`${l}/inflation`}
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("common_sticker_files_mission_3")}</span>
						</a>
						.
						<br />
						<br />
						<span>{t("common_sticker_files_mission_4")}</span>{" "}
						<a
							href={`${l}/stickers`}
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("common_sticker_files_mission_5")}</span>
						</a>
						.
					</p>
				</div>
			</div>

			<div className="break" />

			{/* Language picker + request form */}
			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<div id="Print">
						<div className="break-no-title" />
						<p>
							<span>{t("common_stickers_print_instructions_1")}</span>
							<br />
							<br />
							<span>{t("common_stickers_print_instructions_2")}</span>
							<br />
							<br />
						</p>

						{languageSlugs.map((slug) => {
							const lang = findLanguage(slug);
							if (!lang) return null;
							return (
								<a key={slug} href={`${l}/sticker-files/${slug}`}>
									<div className="button button-sticker">
										<p>{t(lang.labelKey)}</p>
									</div>
								</a>
							);
						})}

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
								placeholder="Language"
								required
							/>
							<br />
							<input
								type="text"
								name="stickers"
								placeholder="Which stickers?"
								required
							/>
							<br />
							<input
								type="email"
								name="email"
								placeholder="Enter your email to be notified (optional)"
							/>
							<br />

							<div
								className="cf-turnstile"
								data-sitekey={TURNSTILE_SITEKEY}
								data-theme="dark"
							/>
							<button type="submit" className="button-form">
								<p>{t("common_submit")}</p>
							</button>
						</form>
					</div>

					<br />
					<br />
				</div>
			</div>
		</div>
	);
}
