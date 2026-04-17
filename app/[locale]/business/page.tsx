import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { BusinessPageShell } from "@/components/BusinessPageShell";
import { BusinessResourceCards } from "@/components/BusinessResourceCards";
import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";

/**
 * /[locale]/business — Phase 10 faithful port of business/index.html.
 *
 * Hero H1 + payment-chart image + "ACCEPT BITCOIN PAYMENTS" anchor-scroll
 * CTA, 4 benefit sections (low fees / instant / no chargebacks / more
 * customers), then the `<BusinessResourceCards>` grid + "Print your own
 * Business Kit" CTA.
 */

const SLUG = "business";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-index-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "bitcoin_is_good_for_business",
		image: META_IMAGE,
		description: "Accept payments with lower fees and get more customers.",
	});
}

export default async function BusinessIndexPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const title = t("bitcoin_is_good_for_business");
	const description = "Accept payments with lower fees and get more customers.";

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
		<BusinessPageShell locale={locale}>
			<JsonLd data={articleSchema} />
			<JsonLd data={breadcrumbSchema} />

			<div className="container-inner">
				<h1 className="h1-inflation">{t("biz_header")}</h1>
			</div>

			<img
				src="/img/bbk/payment-chart.png"
				className="inline"
				alt={t("biz_header")}
			/>

			<div className="break-micro" />

			<div style={{ textAlign: "center" }}>
				<a href="#ready">
					<div className="biz-button">
						<p>{t("common_biz_accept_bitcoin_payments")}</p>
					</div>
				</a>
			</div>

			<div className="break-micro" />

			{/* Section 1 — Low fees */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("biz_s1")}</h3>
					<p>{t("biz_s1_c1")}</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Section 2 — Instant settlement */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("biz_s2")}</h3>
					<p>{t("biz_s2_c1")}</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Section 3 — No chargebacks */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("biz_s3")}</h3>
					<p>
						<span>{t("biz_s3_c1")}</span>
						<br />
						<br />
						<span>{t("biz_s3_c2")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Section 4 — More customers */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("biz_s4")}</h3>
					<p>
						<span>{t("biz_s4_c1")}</span>
						<br />
						<br />
						<span>{t("biz_s4_c2")}</span>
						<br />
						<br />
						<span>{t("biz_s4_c3")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<div id="ready">
				<h2 className="h2-inflation">{t("common_biz_ready")}</h2>
			</div>

			<div className="break-micro" />

			{/* Resource cards — exclude "learn" (already on this page); show no header */}
			<BusinessResourceCards
				locale={locale}
				exclude={["learn"]}
				showHeader={false}
			/>

			<div className="break" />

			<h2 className="h2-inflation">{t("common_kit_cta_header")}</h2>

			{/* Kit CTA card (standalone — always shown here) */}
			<a href={`/${locale}/business/kit`}>
				<div className="biz-box biz-wallet">
					<div className="container-inner">
						<h3
							className="biz-h3"
							style={{ textTransform: "initial" }}
						>
							{t("common_biz_kit")}
						</h3>
					</div>
				</div>
			</a>
		</BusinessPageShell>
	);
}
