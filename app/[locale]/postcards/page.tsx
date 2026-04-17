import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/postcards — Phase 9b faithful port of postcards.html.
 *
 * The postcard program is closed. We show the "program closed" notice,
 * redirect users to /stickers, and keep the three preview postcard images.
 */

const SLUG = "postcards";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-postcards-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("free_bitcoin_postcards");
	const description = t("postcards_description");
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

export default async function PostcardsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("free_bitcoin_postcards");
	const description = t("postcards_description");

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
		<div className="container-main">
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

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
				<h1 className="h1-inflation">{t("postcards_header")}</h1>
				<img
					src="/img/postcards/postcards-header-v3.png"
					className="inline"
					alt="Postcards header"
				/>
			</div>

			<div className="break" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<div className="break-micro" />
					<p>{t("postcards_program_closed_message")}</p>

					<div className="break-micro" />

					<p className="step">{t("postcards_sticker_alternative_header")}</p>
					<div className="break-micro" />
					<p>{t("postcards_sticker_alternative_message")}</p>

					<div className="break-micro" />

					<div style={{ textAlign: "center" }}>
						<a href={`${l}/stickers`}>
							<div
								className="button-form"
								style={{ display: "inline-block", margin: "0 auto" }}
							>
								<p>{t("postcards_sticker_cta")}</p>
							</div>
						</a>
					</div>

					<div className="break-micro" />
				</div>
			</div>

			<div className="break" />

			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p className="step">{t("postcards_step_2")}</p>
					<p>
						<br />
						<span>{t("postcards_instructions_4")}</span>
						<br />
						<br />
						<span>{t("postcards_instructions_5")}</span>
					</p>

					<img
						src="/img/postcards/postcard-dollar-front.png"
						className="inline"
						alt="Dollar postcard front"
					/>
					<img
						src="/img/postcards/postcard-dollar-back.png"
						className="inline"
						alt="Dollar postcard back"
					/>

					<div className="postcard-divider" />

					<img
						src="/img/postcards/postcard-future-front.png"
						className="inline"
						alt="Future postcard front"
					/>
					<img
						src="/img/postcards/postcard-future-back.png"
						className="inline"
						alt="Future postcard back"
					/>

					<div className="postcard-divider" />

					<img
						src="/img/postcards/postcard-cartoon-front.png"
						className="inline"
						alt="Cartoon postcard front"
					/>
					<img
						src="/img/postcards/postcard-cartoon-back.png"
						className="inline"
						alt="Cartoon postcard back"
					/>
				</div>
			</div>

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
