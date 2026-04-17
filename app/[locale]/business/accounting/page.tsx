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
 * /[locale]/business/accounting — Phase 10 faithful port of business/accounting.html.
 */

const SLUG = "business/accounting";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-accounting-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "bitcoin_business_accounting_guide",
		image: META_IMAGE,
		descriptionKey: "accounting_description",
	});
}

export default async function BusinessAccountingPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	void l;
	const title = t("bitcoin_business_accounting_guide");
	const description = t("accounting_description");

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
				<h1 className="h1-inflation">{t("accounting_header")}</h1>
				<div className="break-micro" />
			</div>

			<div className="text-box intro">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>
						<a href={`${l}/business`} className="orange-link">
							<span>{t("accounting_s1_c1")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s1_c2")}</span>{" "}
						<a href={`${l}/business/wallets`} className="orange-link">
							<span>{t("accounting_s1_c3")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s1_c4")}</span>
						<br />
						<br />
						<span>{t("accounting_s1_c5")}</span>
						<br />
						<br />
						<a
							href="https://satoshipacioli.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s1_c6")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("accounting_s2")}</h2>
					<p>
						<span>{t("accounting_s2_c1")}</span>
						<br />
						<br />
						<a
							href="https://quickbooks.intuit.com/app/apps/appdetails/blockpath/en-us/"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c2")}</span>
						</a>
						<br />
						<br />
						<a
							href="https://satoshipacioli.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c3")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s2_c4")}</span>
						<br />
						<br />
						<a
							href="https://www.coingecko.com/en/coins/bitcoin"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c5")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s2_c6")}</span>
						<br />
						<br />
						<a
							href="https://www.thespreadsheetguru.com/blog/cryptocurrency-prices-excel"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c7")}</span>
						</a>
						<br />
						<br />
						<a
							href="https://www.coingecko.com/en/coins/bitcoin/historical_data#panel"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s2_c8")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("accounting_s3")}</h2>
					<p>
						<span>{t("accounting_s3_c1")}</span>{" "}
						<a href={`${l}/business/wallets`} className="orange-link">
							<span>{t("accounting_s3_c2")}</span>
						</a>
						<br />
						<br />
						<span>{t("accounting_s3_c3")}</span>
						<br />
						<br />
						<span>{t("accounting_s3_c4")}</span>
						<br />
						<br />
						<span>{t("accounting_s3_c5")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("accounting_s4")}</h2>
					<p>
						<span>{t("accounting_s4_c1")}</span>
						<br />
						<br />
						<a
							href="https://satoshipacioli.com/"
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("accounting_s4_c2")}</span>
						</a>
					</p>
				</div>
			</div>

			<BusinessResourceCards locale={locale} exclude={["accounting"]} />

		</BusinessPageShell>
	);
}
