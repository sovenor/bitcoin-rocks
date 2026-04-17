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
 * /[locale]/business/faq — Phase 10 faithful port of business/faq.html.
 */

const SLUG = "business/faq";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bbk-faq-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "frequently_asked_questions_about_accepting_bitcoin",
		image: META_IMAGE,
		descriptionKey: "faq_description",
	});
}

export default async function BusinessFaqPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	void l;
	const title = t("frequently_asked_questions_about_accepting_bitcoin");
	const description = t("faq_description");

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
				<h1 className="h1-inflation">{t("faq_header")}</h1>
				<div className="break-micro" />
			</div>

			{/* FAQ 1 — What is Bitcoin? */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s1")}</h2>
					<p>
						<span>{t("faq_s1_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s1_c2")}</span>
						<br />
						<br />
						<span>{t("faq_s1_c3")}</span>
						<br />
						<br />
						<span>{t("faq_s1_c4")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 2 — How can Bitcoin benefit my business? */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s2")}</h2>
					<p>
						<span>{t("faq_s2_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s2_c2")}</span>
						<br />
						<br />
						<a href={`${l}/business`} className="orange-link">
							<span>{t("faq_s2_c3")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 3 — How do I accept Bitcoin payments? */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s3")}</h2>
					<p>
						<span>{t("faq_s3_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s3_c2")}</span>
						<br />
						<br />
						<a href={`${l}/business/wallets`} className="orange-link">
							<span>{t("faq_s3_c3")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 4 — Can I convert Bitcoin to fiat? */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s4")}</h2>
					<p>
						<span>{t("faq_s4_c1")}</span>
						<br />
						<br />
						<a href={`${l}/business/wallets`} className="orange-link">
							<span>{t("faq_s4_c2")}</span>
						</a>
						<br />
						<br />
						<span>{t("faq_s4_c3")}</span>
						<br />
						<br />
						<span>• {t("faq_s4_c4")}</span>
						<br />
						<span>• {t("faq_s4_c5")}</span>
						<br />
						<br />
						<span>{t("faq_s4_c6")}</span>
						<br />
						<br />
						<span>{t("faq_s4_c7")}</span>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 5 — In-person payments */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s5")}</h2>
					<p>
						<span>{t("faq_s5_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s5_c2")}</span>
						<br />
						<br />
						<a href={`${l}/business/wallets`} className="orange-link">
							<span>{t("faq_s5_c3")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 6 — Online payments */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s6")}</h2>
					<p>
						<span>{t("faq_s6_c1")}</span>
						<br />
						<br />
						<a href={`${l}/business/wallets`} className="orange-link">
							<span>{t("faq_s6_c2")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 7 — Let customers know */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s7")}</h2>
					<p>
						<span>{t("faq_s7_c1")}</span>{" "}
						<a href={`${l}/business/stickers`} className="orange-link">
							<span>{t("faq_s7_c2")}</span>
						</a>
						<br />
						<br />
						<span>{t("faq_s7_c3")}</span>{" "}
						<a href={`${l}/business/maps`} className="orange-link">
							<span>{t("faq_s7_c4")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 8 — Get more customers */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s8")}</h2>
					<p>
						<span>{t("faq_s8_c1")}</span>
						<br />
						<br />
						<span>{t("faq_s8_c2")}</span>{" "}
						<a href={`${l}/business/maps`} className="orange-link">
							<span>{t("faq_s8_c3")}</span>
						</a>
					</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* FAQ 9 — Cost */}
			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h2 className="h2-section">{t("faq_s9")}</h2>
					<p>
						<span>{t("faq_s9_c1")}</span>
						<br />
						<br />
						<a href={`${l}/business/wallets`} className="orange-link">
							<span>{t("faq_s9_c2")}</span>
						</a>
					</p>
				</div>
			</div>

			<BusinessResourceCards locale={locale} exclude={["faq"]} />

		</BusinessPageShell>
	);
}
