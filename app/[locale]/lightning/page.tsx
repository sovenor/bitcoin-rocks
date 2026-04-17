import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WalletAccordion } from "@/components/WalletAccordion";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/lightning — Phase 9a Bucket B faithful Tailwind port.
 * Mirrors the V1 design system from `lightning.html`.
 */

const SLUG = "lightning";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-lightning-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("bitcoin_lightning_wallet_guide");
	const description = t("lightning_description");
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

type LightningCardProps = {
	image: string;
	nameKey: string;
	custodial: "self" | "custodial";
	lines: string[];
	link: string;
	rightColumn?: boolean;
};

async function LightningCard({
	image,
	nameKey,
	custodial,
	lines,
	link,
	rightColumn = false,
}: LightningCardProps) {
	const t = await getTranslations();
	const boxClass = rightColumn ? "wallet-box wallet2" : "wallet-box";
	return (
		<div className={boxClass}>
			<div className="container-inner">
				<div style={{ textAlign: "center" }}>
					<img src={image} className="device" alt={t(nameKey)} />
				</div>
				<h2 className="h2-label">{t(nameKey)}</h2>
				<div style={{ textAlign: "center" }}>
					{custodial === "self" ? (
						<div className="alert green">
							<img src="/img/wallets/alert-check-v2.png" alt="" />
							<p>{t("common_self_custody")}</p>
						</div>
					) : (
						<div className="alert red">
							<img src="/img/wallets/alert-x-v2.png" alt="" />
							<p>{t("common_not_your_keys")}</p>
						</div>
					)}
				</div>
				<div className="break-mini" />
				<p>
					{lines.map((line, i) => (
						<span key={line}>
							{t(line)}
							{i < lines.length - 1 ? <br /> : null}
						</span>
					))}
				</p>
				<a href={link} target="_blank" rel="noopener noreferrer">
					<div className="wallet-button">{t("common_learn_more")}</div>
				</a>
			</div>
		</div>
	);
}

export default async function LightningPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("bitcoin_lightning_wallet_guide");
	const description = t("lightning_description");

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
			</div>

			<div className="text-box home-intro">
				<div className="container-inner">
					<h1 className="h1-inflation">{t("lightning_header")}</h1>
				</div>
			</div>

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<div className="break-no-title" />
					<p>
						<span>{t("lightning_s1_c1")}</span>
						<br />
						<br />
						<span>{t("lightning_s1_c2")}</span>
						<br />
						<br />
						<span>{t("lightning_s1_c3")}</span>
						<br />
						<br />
						<a href={`${l}/wallets`} className="orange-link">
							<span>{t("lightning_s1_c4")}</span>
						</a>
						<br />
						<br />
						<span>{t("lightning_s1_c5")}</span>
					</p>

					<WalletAccordion question={t("lightning_question_1")}>
						<div className="break-zero" />
						<div className="alert green">
							<img src="/img/wallets/alert-check-v2.png" alt="" />
							<p>{t("common_self_custody")}</p>
						</div>
						<div className="break-zero" />
						<p>
							<span>{t("lightning_s2_c1")}</span>
							<br />
							<br />
							<span>{t("lightning_s2_c2")}</span>
							<br />
							<br />
							<span>{t("lightning_s2_c3")}</span>
							<br />
							<br />
							<span>{t("lightning_s2_c4")}</span>
							<br />
							<br />
							<span>{t("lightning_s2_c5")}</span>
						</p>
						<div className="break-zero" />
						<div className="alert red">
							<img src="/img/wallets/alert-x-v2.png" alt="" />
							<p>{t("common_not_your_keys")}</p>
						</div>
						<div className="break-zero" />
						<p>
							<span>{t("lightning_s3_c1")}</span>
							<br />
							<br />
							<span>{t("lightning_s3_c2")}</span>
							<br />
							<br />
							<span>{t("lightning_s3_c3")}</span>
							<br />
							<br />
							<span>{t("lightning_s3_c4")}</span>
						</p>
					</WalletAccordion>
					<div className="break-zero" />
				</div>
			</div>

			<div className="break" />

			{/* Row 1: Phoenix + Breez */}
			<div className="vs-container">
				<LightningCard
					image="/img/wallets/phoenix.png"
					nameKey="phoenix"
					custodial="self"
					lines={[
						"lightning_features",
						"lightning_mobile_app",
						"lightning_free",
					]}
					link="https://phoenix.acinq.co/"
				/>
				<LightningCard
					image="/img/wallets/breez.png"
					nameKey="breez"
					custodial="self"
					lines={[
						"lightning_merchants",
						"lightning_mobile_app",
						"lightning_free",
					]}
					link="https://breez.technology/mobile/"
					rightColumn
				/>
				<div className="break" />
			</div>

			<div className="break-wallet" />

			{/* Row 2: Wallet of Satoshi (solo) */}
			<div className="vs-container">
				<LightningCard
					image="/img/wallets/wallet-of-satoshi.png"
					nameKey="wallet_of_satoshi"
					custodial="custodial"
					lines={[
						"lightning_custodial",
						"lightning_mobile_app",
						"lightning_free",
					]}
					link="https://walletofsatoshi.com/"
				/>
				<div className="break" />
			</div>

			<div className="break-micro" />

			<a href={`${l}/wallets`}>
				<div className="text-box intro inflation-box looking-box">
					<div className="container-inner">
						<p className="looking">{t("lightning_cta_hardware")}</p>
					</div>
				</div>
			</a>

			<div className="break-micro" />

			{/* GET STARTED CTAs */}
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
