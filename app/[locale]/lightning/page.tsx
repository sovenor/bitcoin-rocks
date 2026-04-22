import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WalletAccordion } from "@/components/WalletAccordion";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/lightning — V2 redesign.
 *
 * Information flow mirrors the legacy /lightning page but reskinned
 * in the V2 design system used across /wallets, /inflation, /bank-runs,
 * /about, /get-involved, and the /bitcoin-vs-* pages.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Bitcoin Lightning Wallet Guide") + intro
 *      paragraph explaining the speed/security trade-off.
 *   2. Intro card — "Lightning enables you to send…" lead-in paragraphs
 *      housed in a bordered surface card (reuses `.wallet-intro`).
 *   3. FAQ accordion — one V2 accordion ("What trade-off balance is
 *      right for me?") containing SELF-CUSTODY and NOT-YOUR-KEYS
 *      callout badges with the explanation copy.
 *   4. Wallet grid — 3 Lightning wallet cards (Phoenix, Breez, Wallet
 *      of Satoshi) in a 2-col grid with custody badge + feature bullets
 *      + "Learn more" CTA.
 *   5. Hardware wallet CTA — link card to /wallets ("Looking for our
 *      Bitcoin Hardware Wallet Guide?").
 *   6. What's next? — 4 WhatsNextCards (homepage, wallets, buy,
 *      calculator).
 *   7. Sources — Lightning Network / wallet vendor citations.
 *   8. Publisher attribution + reviewed-for-accuracy badge.
 *
 * Reuses the `.wallet-*` CSS classes defined for the /wallets V2 page
 * (intro card, accordions, callouts, grid, cards, CTA). The only
 * difference visually is:
 *   - Lightning cards drop the temperature badge (all mobile apps, no
 *     cold/hot distinction).
 *   - Only one accordion on this page.
 *   - Card accent color is Lightning-yellow (#F7931A-adjacent) to
 *     distinguish from the wallets page's orange.
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

// ─── Lightning wallet card spec (static, EN-side source of truth) ────
type LightningWalletSpec = {
	id: string;
	image: string;
	nameKey: string;
	/** "self" rendered with ✓ SELF-CUSTODY, "custodial" with ✗ NOT-YOUR-KEYS. */
	custody: "self" | "custodial";
	/** Translation keys for the feature bullets (in order). */
	features: readonly string[];
	link: string;
};

const LIGHTNING_WALLETS: readonly LightningWalletSpec[] = [
	{
		id: "phoenix",
		image: "/img/wallets/phoenix.png",
		nameKey: "phoenix",
		custody: "self",
		features: [
			"lightning_features",
			"lightning_mobile_app",
			"lightning_free",
		],
		link: "https://phoenix.acinq.co/",
	},
	{
		id: "breez",
		image: "/img/wallets/breez.png",
		nameKey: "breez",
		custody: "self",
		features: [
			"lightning_merchants",
			"lightning_mobile_app",
			"lightning_free",
		],
		link: "https://breez.technology/mobile/",
	},
	{
		id: "wallet-of-satoshi",
		image: "/img/wallets/wallet-of-satoshi.png",
		nameKey: "wallet_of_satoshi",
		custody: "custodial",
		features: [
			"lightning_custodial",
			"lightning_mobile_app",
			"lightning_free",
		],
		link: "https://walletofsatoshi.com/",
	},
];

// ─── Small presentational sub-components ──────────────────────────────

/** Semantic badge rendered inline (in an accordion body or wallet card). */
function WalletCallout({
	tone,
	icon,
	label,
}: {
	tone: "good" | "warn" | "danger";
	icon: string;
	label: string;
}) {
	return (
		<span className={`wallet-callout ${tone}`}>
			<span className="wallet-callout-icon" aria-hidden="true">
				{icon}
			</span>
			<span>{label}</span>
		</span>
	);
}

function CustodyCallout({
	kind,
	label,
}: {
	kind: "self" | "custodial";
	label: string;
}) {
	return (
		<WalletCallout
			tone={kind === "self" ? "good" : "danger"}
			icon={kind === "self" ? "✓" : "✗"}
			label={label}
		/>
	);
}

/**
 * One Lightning wallet card — image, name, custody badge, feature
 * bullets, "Learn more →" CTA. Whole card is the outbound link; the
 * inner `.wallet-card-cta` is a styled <span> (no nested anchors).
 */
async function LightningCardV2({
	wallet,
	t,
	learnMoreLabel,
	selfLabel,
	custodialLabel,
}: {
	wallet: LightningWalletSpec;
	t: Awaited<ReturnType<typeof getTranslations>>;
	learnMoreLabel: string;
	selfLabel: string;
	custodialLabel: string;
}): Promise<ReactNode> {
	const name = t(wallet.nameKey);

	return (
		<a
			href={wallet.link}
			className="wallet-card"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${name} — ${learnMoreLabel}`}
		>
			<div className="wallet-card-image-wrap">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={wallet.image}
					alt={name}
					className="wallet-card-image"
					loading="lazy"
				/>
			</div>
			<h2 className="wallet-card-name">{name}</h2>

			<div className="wallet-card-badges">
				<CustodyCallout
					kind={wallet.custody}
					label={wallet.custody === "self" ? selfLabel : custodialLabel}
				/>
			</div>

			<ul className="wallet-card-features">
				{wallet.features.map((key) => (
					<li key={key}>
						<span className="wallet-card-feature-check" aria-hidden="true">
							✓
						</span>
						<span>{t(key)}</span>
					</li>
				))}
			</ul>

			<span className="wallet-card-cta">{learnMoreLabel}</span>
		</a>
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

	// Pre-resolve the callout labels once.
	const selfLabel = t("common_self_custody");
	const custodialLabel = t("common_not_your_keys");
	const learnMoreLabel = t("common_learn_more");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description,
		image: META_IMAGE,
		schemaType: "Article",
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: SLUG,
		locale: locale as Locale,
		pageTitle: title,
	});

	return (
		<>
			<JsonLd data={articleSchema} />
			{breadcrumbSchema !== null && <JsonLd data={breadcrumbSchema} />}

			<div className="container-main">
				{/* ═══ HERO ═══ */}
				<div className="home-hero inflation-section">
					<div className="container-inner">
						<h1>{title}</h1>
						<p>{t("lightning_header_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("lightning_s1_c1")}</p>
						<p>{t("lightning_s1_c2")}</p>
						<p>{t("lightning_s1_c3")}</p>
						<p>
							{t("lightning_s1_c4")}{" "}
							<a href={`${l}/wallets`} className="body-link">
								{t("lightning_s1_c4_link")}
							</a>{" "}
							{t("lightning_s1_c4_end")}
						</p>
						<p>{t("lightning_s1_c5")}</p>
					</div>
				</div>

				{/* ═══ FAQ ACCORDION ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<div className="wallet-accordions">
							<WalletAccordion question={t("lightning_question_1")}>
								<div className="wallet-callouts-row">
									<CustodyCallout kind="self" label={selfLabel} />
								</div>
								<p>{t("lightning_s2_c1")}</p>
								<p>{t("lightning_s2_c2")}</p>
								<p>{t("lightning_s2_c3")}</p>
								<p>{t("lightning_s2_c4")}</p>
								<p>{t("lightning_s2_c5")}</p>

								<div
									className="wallet-callouts-row"
									style={{ marginTop: 20 }}
								>
									<CustodyCallout kind="custodial" label={custodialLabel} />
								</div>
								<p>{t("lightning_s3_c1")}</p>
								<p>{t("lightning_s3_c2")}</p>
								<p>{t("lightning_s3_c3")}</p>
								<p>
									<strong>{t("lightning_s3_c4")}</strong>
								</p>
							</WalletAccordion>
						</div>
					</div>
				</div>

				{/* ═══ WALLET GRID ═══ */}
				<div className="wallet-grid-section inflation-section">
					<div className="container-inner">
						<h2 className="wallet-grid-heading">
							{t("lightning_grid_heading")}
						</h2>
						<div className="wallet-grid">
							{LIGHTNING_WALLETS.map((w) => (
								<LightningCardV2
									key={w.id}
									wallet={w}
									t={t}
									learnMoreLabel={learnMoreLabel}
									selfLabel={selfLabel}
									custodialLabel={custodialLabel}
								/>
							))}
						</div>
					</div>
				</div>

				{/* ═══ HARDWARE WALLET CTA ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<a href={`${l}/wallets`} className="wallet-lightning-cta">
							<div>
								<div className="wallet-lightning-cta-label">
									{t("lightning_hardware_cta_label")}
								</div>
								<div className="wallet-lightning-cta-title">
									{t("lightning_cta_hardware")}
								</div>
							</div>
							<span className="wallet-lightning-cta-arrow" aria-hidden="true">
								→
							</span>
						</a>
					</div>
				</div>

				{/* ═══ WHAT'S NEXT ═══ */}
				<div className="whats-next-section">
					<div className="container-inner">
						<div className="whats-next-header">
							<h2>{t("common_whats_next")}</h2>
						</div>
						<div className="whats-next-grid">
							<WhatsNextCard
								href={l}
								label={t("common_next_keep_learning")}
								title={t("common_next_keep_learning_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/wallets`}
								label={t("common_next_get_wallet")}
								title={t("common_next_get_wallet_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/buy`}
								label={t("common_next_buy_bitcoin")}
								title={t("common_next_buy_bitcoin_desc")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/compound-inflation-calculator`}
								label={t("common_next_calculate")}
								title={t("common_next_calculate_desc")}
								authorKey="common_publisher_name"
							/>
						</div>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ SOURCES ═══ */}
				<div className="sources-section">
					<div className="container-inner">
						<h2 className="sources-heading">
							{t("common_sources_heading")}
						</h2>
						<ol className="sources-list">
							<li>
								<a
									href="https://lightning.network/lightning-network-paper.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									Joseph Poon &amp; Thaddeus Dryja — The Bitcoin Lightning
									Network: Scalable Off-Chain Instant Payments (2016)
								</a>
							</li>
							<li>
								<a
									href="https://bitcoin.org/bitcoin.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic
									Cash System (2008)
								</a>
							</li>
							<li>
								<a
									href="https://phoenix.acinq.co/"
									target="_blank"
									rel="noopener noreferrer"
								>
									ACINQ — Phoenix Lightning wallet
								</a>
							</li>
							<li>
								<a
									href="https://breez.technology/mobile/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Breez — Self-custodial Lightning wallet
								</a>
							</li>
							<li>
								<a
									href="https://walletofsatoshi.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Wallet of Satoshi — Custodial Lightning wallet
								</a>
							</li>
							<li>
								<a
									href="https://docs.lightning.engineering/"
									target="_blank"
									rel="noopener noreferrer"
								>
									Lightning Labs — Lightning Network documentation
								</a>
							</li>
						</ol>
					</div>
				</div>

				{/* ═══ PUBLISHER ATTRIBUTION ═══ */}
				<div
					className="publisher-attribution"
					itemProp="publisher"
					itemScope
					itemType="https://schema.org/Organization"
				>
					<div className="container-inner">
						<p>
							<span className="reviewed-badge">
								{t(REVIEWED_ACCURACY_I18N_KEY)}
							</span>
							<br />
							<span>{t("common_published_by")}</span>{" "}
							<a
								href={`${l}/about`}
								className="orange-link"
								itemProp="url"
							>
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
		</>
	);
}
