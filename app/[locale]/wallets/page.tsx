import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WalletAccordion } from "@/components/WalletAccordion";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";

/**
 * /[locale]/wallets — Phase 9a Bucket B faithful Tailwind port.
 *
 * The V1 HTML (wallets.html) is 997 lines. This page keeps the same
 * visual shape (V1 design system) and simply swaps jquery.i18n for
 * `next-intl` server-rendered strings + the toggleAccordion() inline
 * JS for `<WalletAccordion>`. V2 redesign is deferred to the
 * post-cutover queue.
 */

const SLUG = "wallets";
const NAMESPACE = "wallets";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-wallets-v3.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("bitcoin_wallet_guide");
	const description = t("wallets_description");
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

type WalletCardProps = {
	image: string;
	nameKey: string;
	custodial: "self" | "custodial";
	temperature: "cold" | "hot";
	lines: string[];
	link: string;
	rightColumn?: boolean;
};

async function WalletCard({
	image,
	nameKey,
	custodial,
	temperature,
	lines,
	link,
	rightColumn = false,
}: WalletCardProps) {
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
					<div className="break-spacer" />
					{temperature === "cold" ? (
						<div className="alert green">
							<img src="/img/wallets/alert-check-v2.png" alt="" />
							<p>{t("common_cold_wallet")}</p>
						</div>
					) : (
						<div className="alert yellow">
							<img src="/img/wallets/alert-exclamation-v2.png" alt="" />
							<p>{t("common_hot_wallet")}</p>
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

export default async function WalletsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("bitcoin_wallet_guide");
	const description = t("wallets_description");

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

			<div className="break-micro" />

			<div className="text-box intro inflation-box">
				<div className="container-inner">
					<h1 className="wallet-h3">{t("wallets_header")}</h1>

					<p>
						<span>{t("wallets_s1_c1")}</span>
						<br />
						<br />
						<span>{t("wallets_s1_c2")}</span>
					</p>

					{/* Accordion 1: Self-custody */}
					<WalletAccordion question={t("wallets_question_1")}>
						<div className="break-zero" />
						<div className="alert green">
							<img src="/img/wallets/alert-check-v2.png" alt="" />
							<p>{t("common_self_custody")}</p>
						</div>
						<div className="break-zero" />
						<p>
							<span>{t("wallets_s2_c1")}</span>
							<br />
							<br />
							<span>{t("wallets_s2_c2")}</span>
							<br />
							<br />
							<span>{t("wallets_s2_c3")}</span>
							<br />
							<br />
							<span>{t("wallets_s2_c4")}</span>
							<br />
							<br />
							<span>{t("wallets_s2_c5")}</span>
						</p>
						<div className="break-zero" />
						<div className="alert red">
							<img src="/img/wallets/alert-x-v2.png" alt="" />
							<p>{t("common_not_your_keys")}</p>
						</div>
						<div className="break-zero" />
						<p>
							<span>{t("wallets_s3_c1")}</span>
							<br />
							<br />
							<span>{t("wallets_s3_c2")}</span>
							<br />
							<br />
							<span>{t("wallets_s3_c3")}</span>
							<br />
							<br />
							<span>{t("wallets_s3_c4")}</span>
							<br />
							<br />
							<span>{t("wallets_s3_c5")}</span>
						</p>
					</WalletAccordion>

					{/* Accordion 2: Hot or Cold */}
					<WalletAccordion question={t("wallets_question_2")}>
						<div className="break-zero" />
						<div className="alert green">
							<img src="/img/wallets/alert-check-v2.png" alt="" />
							<p>{t("common_cold_wallet")}</p>
						</div>
						<div className="break-zero" />
						<p>
							<span>{t("wallets_s4_c1")}</span>
							<br />
							<br />
							<span>{t("wallets_s4_c2")}</span>
							<br />
							<br />
							<span>{t("wallets_s4_c3")}</span>
						</p>
						<div className="break-zero" />
						<div className="alert yellow">
							<img src="/img/wallets/alert-exclamation-v2.png" alt="" />
							<p>{t("common_hot_wallet")}</p>
						</div>
						<div className="break-zero" />
						<p>
							<span>{t("wallets_s5_c1")}</span>
							<br />
							<br />
							<span>{t("wallets_s5_c2")}</span>
							<br />
							<br />
							<span>{t("wallets_s5_c3")}</span>
							<br />
							<br />
							<span>{t("wallets_s5_c4")}</span>
						</p>
					</WalletAccordion>

					{/* Accordion 3: Recovery Phrase */}
					<WalletAccordion question={t("wallets_question_3")}>
						<div className="break-zero" />
						<p>
							<span>{t("wallets_s6_c1")}</span>
							<br />
							<br />
							<span>{t("wallets_s6_c2")}</span>
							<br />
							<br />
							<span>{t("wallets_s6_c3")}</span>
							<br />
							<br />
							<span>{t("wallets_s6_c4")}</span>
							<br />
							<br />
							<a
								href="https://jlopp.github.io/metal-bitcoin-storage-reviews/"
								target="_blank"
								rel="noopener noreferrer"
								className="orange-link"
							>
								<span>{t("wallets_s6_c5")}</span>
							</a>{" "}
							<span>{t("wallets_s6_c6")}</span>
						</p>
					</WalletAccordion>
					<div className="break-zero" />
				</div>
			</div>

			<div className="break" />

			{/* Row 1: Blockstream Green + Blockstream Jade */}
			<div className="vs-container">
				<WalletCard
					image="/img/wallets/green.png"
					nameKey="wallets_blockstream_green"
					custodial="self"
					temperature="hot"
					lines={[
						"wallets_starter_wallet",
						"wallets_mobile_app",
						"wallets_2fa_support",
						"wallets_free",
					]}
					link="https://blockstream.com/green/"
				/>
				<WalletCard
					image="/img/wallets/jade.png"
					nameKey="wallets_blockstream_jade"
					custodial="self"
					temperature="cold"
					lines={[
						"wallets_air_gap_mode",
						"wallets_bitcoin_only",
						"wallets_very_affordable",
						"wallets_pair_with_phone",
						"wallets_blockstream_jade_costs",
					]}
					link="https://store.blockstream.com/products/blockstream-jade-hardware-wallet"
					rightColumn
				/>
				<div className="break" />
			</div>
			<div className="break-wallet" />

			{/* Row 2: Coldcard MK5 + Coldcard Q */}
			<div className="vs-container">
				<WalletCard
					image="/img/wallets/coldcard-mk5.png"
					nameKey="wallets_coldcard_mk5"
					custodial="self"
					temperature="cold"
					lines={[
						"wallets_air_gap_mode",
						"wallets_bitcoin_only",
						"wallets_security_features",
						"wallets_coldcard_mk5_costs",
					]}
					link="https://coldcard.com/mk5"
				/>
				<WalletCard
					image="/img/wallets/coldcard-q.png"
					nameKey="wallets_coldcard_q"
					custodial="self"
					temperature="cold"
					lines={[
						"wallets_qwerty_keyboard",
						"wallets_qr_scanner",
						"wallets_air_gap_mode",
						"wallets_bitcoin_only",
						"wallets_coldcard_q_costs",
					]}
					link="https://coldcard.com/q"
					rightColumn
				/>
				<div className="break" />
			</div>
			<div className="break-wallet" />

			{/* Row 3: Foundation Passport + SeedSigner */}
			<div className="vs-container">
				<WalletCard
					image="/img/wallets/passport.png"
					nameKey="wallets_foundation_passport"
					custodial="self"
					temperature="cold"
					lines={[
						"wallets_air_gap_camera",
						"wallets_bitcoin_only",
						"wallets_battery",
						"wallets_pair_with_phone",
						"wallets_foundation_passport_costs",
					]}
					link="https://foundationdevices.com/passport/"
				/>
				<WalletCard
					image="/img/wallets/seedsigner.png"
					nameKey="wallets_seedsigner"
					custodial="self"
					temperature="cold"
					lines={[
						"wallets_build_your_own",
						"wallets_air_gap_mode",
						"wallets_bitcoin_only",
						"wallets_seedsigner_costs",
					]}
					link="https://seedsigner.com/"
					rightColumn
				/>
				<div className="break" />
			</div>

			<div className="break-micro" />

			<a href={`${l}/lightning`}>
				<div className="text-box intro inflation-box looking-box">
					<div className="container-inner">
						<p className="looking">{t("wallets_cta_lightning")}</p>
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
							<h3 className="h3-item">
								{t("common_cta_section_title_1_alt")}
							</h3>
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

			{/* Publisher Attribution */}
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
