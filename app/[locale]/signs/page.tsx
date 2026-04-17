import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/signs — Phase 9b faithful port of signs.html.
 *
 * The signs program is closed — the legacy HTML has the country selector +
 * form commented out. We mirror that: just the "out of signs" message + the
 * Share-on-Nostr block + Get Started CTAs.
 */

const SLUG = "signs";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-signs-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("signs_title");
	const description = t("signs_description");
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

export default async function SignsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("signs_title");
	const description = t("signs_description");

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
				<img
					src="/img/signs/sign-header-short.png"
					className="inline sign-adjust"
					alt="Bitcoin signs header"
				/>
			</div>

			<div className="text-box intro sticker-box" style={{ zIndex: 2 }}>
				<div className="container-inner">
					<p className="step">{t("signs_choose_header")}</p>
					<p>
						<br />
						<span>{t("signs_choose_c1")}</span>
						<br />
						<br />
						<span>{t("signs_choose_c2")}</span>{" "}
						<a
							href={`${l}/inflation`}
							target="_blank"
							rel="noopener noreferrer"
							className="orange-link"
						>
							<span>{t("signs_choose_c3")}</span>
						</a>
						.
						<br />
						<br />
						<span>{t("signs_choose_c4")}</span>
					</p>
					<div className="break-micro" />
				</div>
			</div>

			<div className="break" />

			{/* Share your sign spots */}
			<div className="text-box intro sticker-box">
				<div className="container-inner">
					<p className="step">{t("signs_share_header")}</p>
					<p>
						<br />
						<span>{t("signs_share_c1")}</span>{" "}
						<span>{t("common_footer_follow_first_half")}</span>{" "}
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

					<div className="break-mini" />

					<a
						href="https://primal.net/p/npub18kpw3akvdsyk239lx0jgwksr74sq4nlha3r8u9g2rnrhztfpfhysy469c4"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="bounty-button">{t("signs_btn_share_on_nostr")}</div>
					</a>

					<a
						href={`${l}/nostr/what-is-nostr`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="bounty-button">{t("signs_btn_what_is_nostr")}</div>
					</a>

					<img src="/img/signs/sign-tips.png" className="inline" alt="Sign tips" />
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
