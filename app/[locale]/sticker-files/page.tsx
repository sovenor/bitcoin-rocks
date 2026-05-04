import type { CSSProperties } from "react";
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
import { getLanguageColorToken } from "@/lib/sticker-files/language-colors";

/**
 * /[locale]/sticker-files — V2 styling refresh.
 *
 * Renders:
 *   - Hero H1 (sentence case) styled by the element-level rule in globals.css
 *   - Intro + print-instructions text inside a `.inflation-section`, using
 *     `.inflation-intro` so the copy matches the inflation page's sub-hero.
 *   - Printable-language picker: language links styled as `.inflation-button
 *     colorful` pills, each assigned a stable color from the 21 topic-color
 *     tokens (see `lib/sticker-files/language-colors.ts`).
 *
 * No sources / reviewed-for-accuracy sub-footer on this page by design.
 */

const SLUG = "sticker-files";

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
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
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
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: SLUG,
		locale: locale as Locale,
		pageTitle: title,
	});

	const languageSlugs = getPrintableLanguageSlugs();

	return (
		<div className="container-main comparison-page">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			{/* ═══ HERO — same wrapper comparison pages use ═══ */}
			<div className="inflation-section comparison-hero">
				<div className="container-inner">
					<h1>{heading}</h1>
				</div>
			</div>

			{/* ═══ Intro + print instructions — left-aligned bordered box,
			    matches the .comparison-intro surface used on /bitcoin-vs-*,
			    /bank-runs, /about, /get-involved. Wrapper classes + DOM
			    structure are a 1:1 copy of ComparisonPageLayout's intro. ═══ */}
			<div className="inflation-section comparison-intro">
				<div className="container-inner">

					<p className="inflation-intro">
						<span>{t("common_sticker_files_mission_1")}</span>{" "}
						<a href={l} className="body-link">
							<span>{t("common_sticker_files_mission_2")}</span>
						</a>{" "}
						&amp;{" "}
						<a href={`${l}/inflation`} className="body-link">
							<span>{t("common_sticker_files_mission_3")}</span>
						</a>
						.
					</p>
					<p className="inflation-intro">
						<span>{t("common_sticker_files_mission_4")}</span>{" "}
						<a href={`${l}/stickers`} className="body-link">
							<span>{t("common_sticker_files_mission_5")}</span>
						</a>
						.
					</p>
					<p className="inflation-intro">
						{t("common_stickers_print_instructions_1")}
					</p>
					<p className="inflation-intro">
						{t("common_stickers_print_instructions_2")}
					</p>
				</div>
			</div>


			{/* ═══ Language picker — colorful pill per language ═══
			    Each <a> gets a stable `--btn-color` (one of the 21 topic tokens),
			    assigned by `getLanguageColorToken()`. The `.colorful` modifier
			    in globals.css reads that variable for border + text color, and
			    tints the fill with `color-mix()` on hover. ═══ */}
			<div className="container-inflation-button">
				{languageSlugs.map((slug) => {
					const lang = findLanguage(slug);
					if (!lang) return null;
					const token = getLanguageColorToken(slug);
					const style = {
						"--btn-color": `var(${token})`,
					} as CSSProperties;
					return (
						<a
							key={slug}
							href={`${l}/sticker-files/${slug}`}
							className="inflation-button colorful"
							style={style}
						>
							<span>{t(lang.labelKey)}</span>
						</a>
					);
				})}
			</div>

			<div className="break-micro" />
		</div>
	);
}
