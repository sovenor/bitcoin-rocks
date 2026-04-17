import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale, locales } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import {
	findLanguage,
	getPrintableLanguageSlugs,
	getStickersForLanguage,
	stickerImageUrl,
	stickerMuleOneClickUrl,
	STICKER_AVAILABILITY,
	type StickerKind,
} from "@/lib/sticker-files/catalog";

/**
 * /[locale]/sticker-files/[lang] — Phase 11.
 *
 * Dynamic per-language page: renders every printable sticker design available
 * for the given `lang` (e.g. `spanish`, `chinese`). Data is sourced from the
 * `lib/sticker-files/catalog.ts` static catalog, which is generated from the
 * filesystem state of `sticker-files/<lang>/*.png`.
 *
 * Route params:
 *   - `locale`: site UI locale (e.g. `en`, `es`, `ar`).
 *   - `lang`  : sticker language slug (English lowercase, e.g. `afrikaans`).
 *              These are NOT the same as the site's 55 locale codes; they're
 *              a separate axis (the language printed ON the sticker, vs. the
 *              language of the surrounding UI text).
 */

const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-stickers-v9.png";

/** Generate every (locale × lang) pair at build time. */
export async function generateStaticParams() {
	const langSlugs = getPrintableLanguageSlugs();
	const params: Array<{ locale: string; lang: string }> = [];
	for (const locale of locales) {
		for (const lang of langSlugs) {
			params.push({ locale, lang });
		}
	}
	return params;
}

type PageParams = Promise<{ locale: string; lang: string }>;

/** Translated page title like "Download Chinese Bitcoin Sticker Files". */
function formatHeading(stickerLangName: string): string {
	// Matches legacy pattern: `DOWNLOAD ${LANGUAGE} BITCOIN STICKER FILES`
	return `Download ${stickerLangName} Bitcoin Sticker Files`;
}

/** Translated meta title like "Chinese Bitcoin Sticker Files". */
function formatTitle(stickerLangName: string): string {
	return `${stickerLangName} Bitcoin Sticker Files`;
}

export async function generateMetadata({
	params,
}: {
	params: PageParams;
}): Promise<Metadata> {
	const { locale, lang } = await params;
	if (!STICKER_AVAILABILITY[lang]) {
		return { title: "Not Found" };
	}
	const t = await getTranslations({ locale });
	const langDescriptor = findLanguage(lang);
	const stickerLangName = langDescriptor ? t(langDescriptor.labelKey) : lang;
	const title = formatTitle(stickerLangName);
	const description = `Download ${stickerLangName} Bitcoin Sticker Files here.`;
	const slug = `sticker-files/${lang}`;

	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug }),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${slug}`,
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

export default async function StickerFilesLanguagePage({
	params,
}: {
	params: PageParams;
}) {
	const { locale, lang } = await params;

	// Unknown sticker-language slug → 404.
	if (!STICKER_AVAILABILITY[lang]) {
		notFound();
	}

	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;

	const langDescriptor = findLanguage(lang);
	const stickerLangName = langDescriptor ? t(langDescriptor.labelKey) : lang;
	const heading = formatHeading(stickerLangName);
	const title = formatTitle(stickerLangName);
	const description = `Download ${stickerLangName} Bitcoin Sticker Files here.`;
	const slug = `sticker-files/${lang}`;

	const stickers: StickerKind[] = getStickersForLanguage(lang);
	const oneClickUrl = stickerMuleOneClickUrl(lang);

	const articleSchema = await buildArticleSchema({
		slug,
		locale: locale as Locale,
		headline: title,
		description,
		image: META_IMAGE,
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<div className="container-main" id="lighten-text-boxes">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div className="container-inner">
				<h1 className="h1-inflation">{heading.toUpperCase()}</h1>
				{oneClickUrl ? (
					<a href={oneClickUrl} target="_blank" rel="noopener noreferrer">
						<div className="bounty-button">
							{t("print_these")}
						</div>
					</a>
				) : null}
			</div>

			<div className="break" />

			{/* Mission paragraph — same shared copy as the index page */}
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

			{/* One sticker-card per available design. */}
			{stickers.map((s) => {
				const imgSrc = stickerImageUrl(lang, s.slug);
				return (
					<div key={s.slug}>
						<div className="text-box intro sticker-box">
							<div className="container-inner">
								<br />
								<br />
								<br />
								<a href={imgSrc}>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img src={imgSrc} alt={s.slug} className="inline" />
								</a>

								<p className="left">
									<span className="bold">
										{t("common_stickers_dimensions")}
									</span>
									&nbsp;<span>{t(s.dimensionsKey)}</span>
									<br />
									<br />
									{s.typeKey ? (
										<>
											<span className="bold">
												{t("common_stickers_type")}
											</span>
											&nbsp;<span>{t(s.typeKey)}</span>
											<br />
											<br />
										</>
									) : null}
									<span className="bold">
										{t("common_stickers_material")}
									</span>
									&nbsp;<span>{t(s.materialKey)}</span>
									<br />
									<br />
									<span className="bold">
										{t("common_stickers_where_to_print")}
									</span>
									&nbsp;
									<a
										href="https://stickermule.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										<span>{t("common_stickers_printer")}</span>
									</a>
								</p>
							</div>
						</div>

						<div className="break" />
					</div>
				);
			})}
		</div>
	);
}
