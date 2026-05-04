import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
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
 * /[locale]/sticker-files/[lang] — V2 redesign.
 *
 * Renders:
 *   - Hero H1 in sentence case with the language name title-cased
 *     ("Download Afrikaans Bitcoin Sticker Files").
 *   - Intro card (bordered surface) with mission prose. On the English
 *     page the card is center-aligned and contains the StickerMule 1-click
 *     CTA button.
 *   - One `.sticker-card` per design (bordered surface, centered capped
 *     image ≤320px, sticker name H2, meta list). "Where to print" links
 *     only the words "StickerMule.com" — English page points at the
 *     1-click URL, every other language points at stickermule.com root.
 *   - Sticker-tips card (✅ bulleted list mirroring /sticker-success).
 *   - Two "What's next?" link cards — back to /sticker-files language
 *     picker, forward to /flyers.
 */


/** Generic sticker-printer link used by the per-sticker "Where to print"
 *  row. English swaps this for the 1-click pack URL (see stickerMuleOneClickUrl). */
const STICKERMULE_DEFAULT_URL = "https://stickermule.com/";

/** The special printer-link URL requested for English cards — not the 1-click
 *  pack URL but a longer-form canonical that's the URL specified by the
 *  product owner for "Where to print" on the English page. */
const STICKERMULE_ENGLISH_PRINTER_URL =
	"https://www.stickermule.com/4c84ba884f9c3ae";

/** Title-case a single lowercase English word like `afrikaans` → `Afrikaans`. */
function titleCaseWord(s: string): string {
	if (!s) return s;
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

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

/** Translated page title like "Download Afrikaans Bitcoin Sticker Files"
 *  in sentence case (language name title-cased, not uppercased). */
function formatHeading(stickerLangName: string): string {
	return `Download ${stickerLangName} Bitcoin Sticker Files`;
}

/** Translated meta title like "Afrikaans Bitcoin Sticker Files". */
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
		// Fire a translated short "Not Found" title when the locale +
		// namespace resolve; fall back to the English literal only if
		// next-intl can't provide a translator.
		let notFoundTitle = "Not Found";
		try {
			const tFallback = await getTranslations({ locale });
			notFoundTitle = tFallback("404_not_found_short");
		} catch {
			// English literal fallback above
		}
		return { title: notFoundTitle };
	}
	const t = await getTranslations({ locale });
	const langDescriptor = findLanguage(lang);
	const rawLangName = langDescriptor ? t(langDescriptor.labelKey) : lang;
	const stickerLangName = titleCaseWord(rawLangName);
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
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
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
	const isEnglish = lang === "english";

	const langDescriptor = findLanguage(lang);
	const rawLangName = langDescriptor ? t(langDescriptor.labelKey) : lang;
	// Language labels in `common_language_*` are uppercase (e.g. "AFRIKAANS")
	// for the picker-button grid. Re-case them for the H1 sentence-case hero.
	const stickerLangName = titleCaseWord(rawLangName);
	const heading = formatHeading(stickerLangName);
	const title = formatTitle(stickerLangName);
	const description = `Download ${stickerLangName} Bitcoin Sticker Files here.`;
	const slug = `sticker-files/${lang}`;

	const stickers: StickerKind[] = getStickersForLanguage(lang);
	const oneClickUrl = stickerMuleOneClickUrl(lang);
	const printerUrl = isEnglish
		? STICKERMULE_ENGLISH_PRINTER_URL
		: STICKERMULE_DEFAULT_URL;

	const articleSchema = await buildArticleSchema({
		slug,
		locale: locale as Locale,
		headline: title,
		description,
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<div className="container-main comparison-page">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			{/* ═══ HERO ═══ */}
			<div className="inflation-section comparison-hero">
				<div className="container-inner">
					<h1>{heading}</h1>
				</div>
			</div>

			{/* ═══ Intro — bordered surface card. English gets a center-
			    aligned variant that pairs the prose with the StickerMule
			    1-click CTA button. ═══ */}
			<div
				className={`inflation-section comparison-intro${
					isEnglish ? " comparison-intro--center" : ""
				}`}
			>
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
						</a>{" "}
						<span>{t("common_sticker_files_mission_6")}</span>
					</p>
					{oneClickUrl ? (
						<p className="inflation-intro sticker-files-cta-row">
							<a
								href={oneClickUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="sticker-files-cta-button"
							>
								{t("common_sticker_files_print_these")}
							</a>
						</p>
					) : null}
				</div>
			</div>

			{/* ═══ One `.sticker-card` per available design ═══ */}
			<div className="inflation-section sticker-cards-section">
				<div className="container-inner">
					{stickers.map((s) => {
						const imgSrc = stickerImageUrl(lang, s.slug);
						return (
							<article key={s.slug} className="sticker-card">
								<h2 className="sticker-card-name">{t(s.nameKey)}</h2>
								<a
									href={imgSrc}
									className="sticker-card-image-link"
									aria-label={t(s.nameKey)}
								>
									{/* eslint-disable-next-line @next/next/no-img-element */}
									<img
										src={imgSrc}
										alt={t(s.nameKey)}
										className="sticker-card-image"
									/>
								</a>
								<ul className="sticker-card-meta">
									<li>
										<span className="sticker-card-meta-label">
											{t("common_stickers_dimensions")}
										</span>{" "}
										<span>{t(s.dimensionsKey)}</span>
									</li>
									{s.typeKey ? (
										<li>
											<span className="sticker-card-meta-label">
												{t("common_stickers_type")}
											</span>{" "}
											<span>{t(s.typeKey)}</span>
										</li>
									) : null}
									<li>
										<span className="sticker-card-meta-label">
											{t("common_stickers_material")}
										</span>{" "}
										<span>{t(s.materialKey)}</span>
									</li>
									<li>
										<span className="sticker-card-meta-label">
											{t("common_stickers_where_to_print")}
										</span>{" "}
										<span>
											{t("common_stickers_printer_prefix")}{" "}
											<a
												href={printerUrl}
												target="_blank"
												rel="noopener noreferrer"
												className="body-link"
											>
												{t("common_stickers_printer_name")}
											</a>{" "}
											{t("common_stickers_printer_suffix")}
										</span>
									</li>
								</ul>
							</article>
						);
					})}
				</div>
			</div>

			{/* ═══ Sticker tips — bordered card with ✅ bullets ═══ */}
			<div className="inflation-section sticker-tips-section">
				<div className="container-inner">
					<h2 className="sticker-tips-heading">
						{t("common_sticker_tips_heading")}
					</h2>
					<p className="sticker-tips-intro">
						{t("common_sticker_tips_intro")}
					</p>
					<ul className="sticker-tips-list">
						<li>
							<span className="sticker-tips-check" aria-hidden="true">
								✅
							</span>
							<span>{t("common_sticker_tips_list_1")}</span>
						</li>
						<li>
							<span className="sticker-tips-check" aria-hidden="true">
								✅
							</span>
							<span>{t("common_sticker_tips_list_2")}</span>
						</li>
						<li>
							<span className="sticker-tips-check" aria-hidden="true">
								✅
							</span>
							<span>{t("common_sticker_tips_list_3")}</span>
						</li>
						<li>
							<span className="sticker-tips-check" aria-hidden="true">
								✅
							</span>
							<span>{t("common_sticker_tips_list_4")}</span>
						</li>
					</ul>
				</div>
			</div>

			{/* ═══ What's next — 2 link cards ═══ */}
			<div className="whats-next-section comparison-whats-next">
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
							href={`${l}/flyers`}
							label={t("common_sticker_files_next_flyers_label")}
							title={t("common_sticker_files_next_flyers_title")}
							authorKey="common_publisher_name"
						/>
					</div>
				</div>
			</div>

			<div className="break-micro" />
		</div>
	);
}
