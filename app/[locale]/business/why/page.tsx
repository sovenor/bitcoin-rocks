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
 * /[locale]/business/why — Phase 10 faithful port of business/why.html.
 */

const SLUG = "business/why";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-why-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "learn_why_bitcoin_is_good_for_business",
		image: META_IMAGE,
		description: "Accept payments with lower fees and get more customers.",
	});
}

export default async function BusinessWhyPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	void l;
	const title = t("learn_why_bitcoin_is_good_for_business");
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
				<h1 className="h1-inflation">{t("why_header")}</h1>
			</div>

			<img
				src="/img/bbk/payment-chart.png"
				className="inline"
				alt={t("why_header")}
			/>

			<div className="break-micro" />

			<div style={{ textAlign: "center" }}>
				<a href={`${l}/business`}>
					<div className="biz-button">
						<p>{t("common_learn_more")}</p>
					</div>
				</a>
			</div>

			<div className="break-micro" />

			<div className="container-inner">
				<h2 className="h2-inflation">{t("why_good_for_you")}</h2>
			</div>

			{/* Section 1 — Bitcoin doesn't have inflation */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("why_s1")}</h3>
					<p>
						<span>{t("why_s1_c1")}</span>
						<br />
						<br />
						<span>{t("why_s1_c2")}</span>{" "}
						<a href={`${l}/inflation`} className="orange-link">
							<span>{t("why_learn_more_lowercase")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Section 2 — No bank runs */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("why_s2")}</h3>
					<p>
						<span>{t("why_s2_c1")}</span>
						<br />
						<br />
						<span>{t("why_s2_c2")}</span>
						<br />
						<br />
						<span>{t("why_s2_c3")}</span>{" "}
						<a href={`${l}/bank-runs`} className="orange-link">
							<span>{t("why_learn_more_lowercase")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Section 3 — Permissionless */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("why_s3")}</h3>
					<p>
						<span>{t("why_s3_c1")}</span>
						<br />
						<br />
						<span>{t("why_s3_c2")}</span>{" "}
						<a
							href="https://voteforbetter.money/learn/bitcoin-is-permissionless"
							className="orange-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>{t("why_learn_more_lowercase")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Section 4 — Building a better world */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-micro" />
					<h3 className="h2-section">{t("why_s4")}</h3>
					<p>
						<span>{t("why_s4_c1")}</span>
						<br />
						<br />
						<span>{t("why_s4_c2")}</span>{" "}
						<a href={l} className="orange-link">
							<span>{t("why_learn_more_lowercase")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* Resource cards + Get Started */}
			<BusinessResourceCards locale={locale} exclude={["learn"]} />

		</BusinessPageShell>
	);
}
