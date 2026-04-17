import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CompoundInflationCalculatorSolo } from "@/components/CompoundInflationCalculatorSolo";
import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/compound-inflation-calculator — Phase 9a Bucket B faithful
 * Tailwind port. Wraps the Phase 6b solo calculator (Client Component)
 * inside the V1 page shell.
 */

const SLUG = "compound-inflation-calculator";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-cic-v2.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("cic_header");
	const description = t("cic_description");
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

export default async function CompoundInflationCalculatorPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("cic_header");
	const description = t("cic_description");

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
				<h1 className="h1-inflation">
					<span>{t("cic_header")}</span>
				</h1>
			</div>

			{/* Intro text */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>{t("common_cic_intro_1")}</p>
					<p>{t("common_cic_intro_2")}</p>
					<p>{t("common_cic_intro_3")}</p>
				</div>
			</div>

			<div className="break" />

			{/* Calculator form */}
			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<div className="break-micro" />
					<CompoundInflationCalculatorSolo />
				</div>
			</div>

			<div className="break-micro" />

			{/* CTA: what can I do about inflation */}
			<a href={`${l}/inflation?link=calculator`}>
				<div className="text-box solo">
					<div className="container-inner">
						<h2 className="h2-section">{t("what_can_i_do_about")}</h2>
						<h2 className="second-line force-orange h2-section">
							{t("what_can_i_do_about_2")}
						</h2>
						<div className="item first">
							<h3 className="h3-item">{t("cic_inflation_cta")}</h3>
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
