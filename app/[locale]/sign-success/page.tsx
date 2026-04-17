import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/sign-success — Phase 9b faithful port of sign-success.html.
 * Thank-you after a sign request submission (currently unreachable since
 * the signs program is closed, but we keep it for future re-activation).
 */

const SLUG = "sign-success";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-signs-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("common_success");
	return {
		title,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		robots: { index: false, follow: true },
	};
}

export default async function SignSuccessPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("common_success");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description: t("sign_success_1"),
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

			<div style={{ textAlign: "center" }}>
				<a href={l}>
					<img
						src="/img/logos/rocks-logo-gray.png"
						className="back-to-home"
						alt="bitcoin.rocks"
					/>
				</a>
			</div>

			<h1 className="h2-stickers">
				<span className="inflation">{t("common_success")}</span>
			</h1>

			<div className="text-box intro">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>
						<span>{t("sign_success_1")}</span>
						<br />
						<br />
						<span>{t("sign_success_3")}</span>{" "}
						<span>{t("common_footer_follow_first_half")}</span>
						&nbsp;
						<a
							href="https://snort.social/p/npub18kpw3akvdsyk239lx0jgwksr74sq4nlha3r8u9g2rnrhztfpfhysy469c4"
							className="footer-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							hi@bitcoin.rocks
						</a>
						&nbsp;<span>{t("common_footer_follow_second_half")}</span>
					</p>
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
		</div>
	);
}
