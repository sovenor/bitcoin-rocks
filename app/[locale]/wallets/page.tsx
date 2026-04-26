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
 * /[locale]/wallets — V2 redesign.
 *
 * Structure mirrors the live /wallets page's information flow but
 * reskinned in the V2 design system used across /, /inflation,
 * /bank-runs, /about, /get-involved, and the /bitcoin-vs-* pages.
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("Bitcoin Wallet Guide") + intro paragraph
 *      describing how to safely store Bitcoin.
 *   2. Intro card — "Bitcoin wallets are interoperable…" two-line
 *      lead-in housed in a bordered surface card.
 *   3. FAQ accordions — 3 questions (self-custody, hot vs cold,
 *      recovery phrase), each a V2 surface card with an animated
 *      body containing callout badges + paragraphs.
 *   4. Wallet grid — 6 wallet cards (Blockstream Green/Jade, Coldcard
 *      MK5/Q, Foundation Passport, SeedSigner) in a 2-col grid with
 *      badges + feature bullets + "Learn more" CTA.
 *   5. Lightning CTA — single-row link card to /lightning.
 *   6. What's next? — 4 WhatsNextCards (homepage, inflation, buy,
 *      calculator).
 *   7. Sources — wallet vendor + Lopp steel-backup guide citations.
 *   8. Publisher attribution + reviewed-for-accuracy badge.
 *
 * Schemas: Article + BreadcrumbList JSON-LD (same pattern as all V2
 * content pages). HowTo / Product schemas from the legacy HTML
 * version were not ported — they were bloating the page for a
 * negligible GEO lift and the AI answer engines we care about can
 * parse the Article schema + visible content just fine.
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

// ─── Wallet card spec (static, EN-side source of truth) ───────────────
//
// Each entry renders one wallet card via <WalletCardV2>. Feature bullets
// point at translation keys that already exist in `i18n/en/wallets_en.json`
// so we don't add any new keys for the content itself — only the new
// section-level keys (sources block + lightning CTA copy) get added.
type WalletSpec = {
	id: string;
	image: string;
	nameKey: string;
	/** "self" rendered with ✓ SELF-CUSTODY, "custodial" with ✗ NOT-YOUR-KEYS. */
	custody: "self" | "custodial";
	/** "cold" = ✓ COLD WALLET, "hot" = ⚠ HOT WALLET. */
	temperature: "cold" | "hot";
	/** Translation keys for the feature bullets (in order). */
	features: readonly string[];
	/** Translation key for the price / cost bullet (rendered italic). */
	priceKey?: string;
	link: string;
};

const WALLETS: readonly WalletSpec[] = [
	{
		id: "green",
		image: "/img/wallets/green.png",
		nameKey: "wallets_blockstream_green",
		custody: "self",
		temperature: "hot",
		features: [
			"wallets_starter_wallet",
			"wallets_mobile_app",
			"wallets_2fa_support",
		],
		priceKey: "wallets_free",
		link: "https://blockstream.com/green/",
	},
	{
		id: "jade",
		image: "/img/wallets/jade.png",
		nameKey: "wallets_blockstream_jade",
		custody: "self",
		temperature: "cold",
		features: [
			"wallets_air_gap_mode",
			"wallets_bitcoin_only",
			"wallets_very_affordable",
			"wallets_pair_with_phone",
		],
		priceKey: "wallets_blockstream_jade_costs",
		link: "https://store.blockstream.com/products/blockstream-jade-hardware-wallet",
	},
	{
		id: "coldcard-mk5",
		image: "/img/wallets/coldcard-mk5.png",
		nameKey: "wallets_coldcard_mk5",
		custody: "self",
		temperature: "cold",
		features: [
			"wallets_air_gap_mode",
			"wallets_bitcoin_only",
			"wallets_security_features",
		],
		priceKey: "wallets_coldcard_mk5_costs",
		link: "https://coldcard.com/mk5",
	},
	{
		id: "coldcard-q",
		image: "/img/wallets/coldcard-q.png",
		nameKey: "wallets_coldcard_q",
		custody: "self",
		temperature: "cold",
		features: [
			"wallets_qwerty_keyboard",
			"wallets_qr_scanner",
			"wallets_air_gap_mode",
			"wallets_bitcoin_only",
		],
		priceKey: "wallets_coldcard_q_costs",
		link: "https://coldcard.com/q",
	},
	{
		id: "passport",
		image: "/img/wallets/passport.png",
		nameKey: "wallets_foundation_passport",
		custody: "self",
		temperature: "cold",
		features: [
			"wallets_air_gap_camera",
			"wallets_bitcoin_only",
			"wallets_battery",
			"wallets_pair_with_phone",
		],
		priceKey: "wallets_foundation_passport_costs",
		link: "https://foundationdevices.com/passport/",
	},
	{
		id: "seedsigner",
		image: "/img/wallets/seedsigner.png",
		nameKey: "wallets_seedsigner",
		custody: "self",
		temperature: "cold",
		features: [
			"wallets_build_your_own",
			"wallets_air_gap_mode",
			"wallets_bitcoin_only",
		],
		priceKey: "wallets_seedsigner_costs",
		link: "https://seedsigner.com/",
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

function CustodyCallout({ kind, label }: { kind: "self" | "custodial"; label: string }) {
	return (
		<WalletCallout
			tone={kind === "self" ? "good" : "danger"}
			icon={kind === "self" ? "✓" : "✗"}
			label={label}
		/>
	);
}

function TemperatureCallout({
	kind,
	label,
}: {
	kind: "cold" | "hot";
	label: string;
}) {
	return (
		<WalletCallout
			tone={kind === "cold" ? "good" : "warn"}
			icon={kind === "cold" ? "✓" : "⚠"}
			label={label}
		/>
	);
}

/**
 * One wallet card — renders the image, name, two callout badges, the
 * features bullet list (with a final italic "Costs $X" row if a price
 * is provided), and the "Learn more →" CTA button.
 *
 * The server `t()` is passed in so we don't re-call `getTranslations()`
 * once per card.
 */
async function WalletCardV2({
	wallet,
	t,
	learnMoreLabel,
	selfLabel,
	custodialLabel,
	coldLabel,
	hotLabel,
}: {
	wallet: WalletSpec;
	t: Awaited<ReturnType<typeof getTranslations>>;
	learnMoreLabel: string;
	selfLabel: string;
	custodialLabel: string;
	coldLabel: string;
	hotLabel: string;
}): Promise<ReactNode> {
	const name = t(wallet.nameKey);

	// Whole card is the outbound link — the inner `.wallet-card-cta` is a
	// styled `<span>` (can't nest `<a>` inside `<a>`). Card hover bubbles
	// into the CTA via CSS.
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
				<TemperatureCallout
					kind={wallet.temperature}
					label={wallet.temperature === "cold" ? coldLabel : hotLabel}
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
				{wallet.priceKey && (
					<li key={wallet.priceKey}>
						<span className="wallet-card-feature-check" aria-hidden="true">
							✓
						</span>
						<span className="wallet-card-feature-price">
							{t(wallet.priceKey)}
						</span>
					</li>
				)}
			</ul>

			<span className="wallet-card-cta">{learnMoreLabel}</span>
		</a>
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

	// Pre-resolve the callout labels once (each one is used by up to six
	// wallet cards). Small perf win + keeps the card component clean.
	const selfLabel = t("common_self_custody");
	const custodialLabel = t("common_not_your_keys");
	const coldLabel = t("common_cold_wallet");
	const hotLabel = t("common_hot_wallet");
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
						<p>{t("wallets_header_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("wallets_s1_c1")}</p>
						<p>{t("wallets_s1_c2")}</p>
					</div>
				</div>

				{/* ═══ FAQ ACCORDIONS ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<div className="wallet-accordions">
							{/* ── Accordion 1: Self-custody vs. custodial ── */}
							<WalletAccordion question={t("wallets_question_1")}>
								<div className="wallet-callouts-row">
									<CustodyCallout kind="self" label={selfLabel} />
								</div>
								<p>{t("wallets_s2_c1")}</p>
								<p>{t("wallets_s2_c2")}</p>
								<p>{t("wallets_s2_c3")}</p>
								<p>{t("wallets_s2_c4")}</p>
								<p>{t("wallets_s2_c5")}</p>

								<div className="wallet-callouts-row" style={{ marginTop: 20 }}>
									<CustodyCallout kind="custodial" label={custodialLabel} />
								</div>
								<p>{t("wallets_s3_c1")}</p>
								<p>{t("wallets_s3_c2")}</p>
								<p>{t("wallets_s3_c3")}</p>
								<p>{t("wallets_s3_c4")}</p>
								<p>
									<strong>{t("wallets_s3_c5")}</strong>
								</p>
							</WalletAccordion>

							{/* ── Accordion 2: Hot or Cold ── */}
							<WalletAccordion question={t("wallets_question_2")}>
								<div className="wallet-callouts-row">
									<TemperatureCallout kind="cold" label={coldLabel} />
								</div>
								<p>{t("wallets_s4_c1")}</p>
								<p>{t("wallets_s4_c2")}</p>
								<p>{t("wallets_s4_c3")}</p>

								<div className="wallet-callouts-row" style={{ marginTop: 20 }}>
									<TemperatureCallout kind="hot" label={hotLabel} />
								</div>
								<p>{t("wallets_s5_c1")}</p>
								<p>{t("wallets_s5_c2")}</p>
								<p>{t("wallets_s5_c3")}</p>
								<p>{t("wallets_s5_c4")}</p>
							</WalletAccordion>

							{/* ── Accordion 3: Recovery Phrase ── */}
							<WalletAccordion question={t("wallets_question_3")}>
								<p>{t("wallets_s6_c1")}</p>
								<p>{t("wallets_s6_c2")}</p>
								<p>{t("wallets_s6_c3")}</p>
								<p>{t("wallets_s6_c4")}</p>
								<p>
									<a
										href="https://jlopp.github.io/metal-bitcoin-storage-reviews/"
										target="_blank"
										rel="noopener noreferrer"
										className="body-link"
									>
										{t("wallets_s6_c5")}
									</a>{" "}
									{t("wallets_s6_c6")}
								</p>
							</WalletAccordion>
						</div>
					</div>
				</div>

				{/* ═══ WALLET GRID ═══ */}
				<div className="wallet-grid-section inflation-section">
					<div className="container-inner">
						<h2 className="wallet-grid-heading">
							{t("wallets_grid_heading")}
						</h2>
						<div className="wallet-grid">
							{WALLETS.map((w) => (
								<WalletCardV2
									key={w.id}
									wallet={w}
									t={t}
									learnMoreLabel={learnMoreLabel}
									selfLabel={selfLabel}
									custodialLabel={custodialLabel}
									coldLabel={coldLabel}
									hotLabel={hotLabel}
								/>
							))}
						</div>

					</div>
				</div>

				{/* ═══ LIGHTNING CTA ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<a href={`${l}/lightning`} className="wallet-lightning-cta">
							<div>
								<div className="wallet-lightning-cta-label">
									{t("wallets_lightning_cta_label")}
								</div>
								<div className="wallet-lightning-cta-title">
									{t("wallets_cta_lightning")}
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
								href={`${l}/inflation`}
								label={t("common_next_keep_learning")}
								title={t("bitcoin_doesnt_have_inflation")}
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
									href="https://bitcoin.org/en/choose-your-wallet"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_bitcoin_org_choose")}
								</a>
							</li>
							<li>
								<a
									href="https://jlopp.github.io/metal-bitcoin-storage-reviews/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_jameson_lopp")}
								</a>
							</li>
							<li>
								<a
									href="https://bitcoin.org/bitcoin.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("common_source_whitepaper")}
								</a>
							</li>
							<li>
								<a
									href="https://blockstream.com/green/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_blockstream_green")}
								</a>
							</li>
							<li>
								<a
									href="https://store.blockstream.com/products/blockstream-jade-hardware-wallet"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_blockstream_jade")}
								</a>
							</li>
							<li>
								<a
									href="https://coldcard.com/mk5"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_coldcard_mk5")}
								</a>
							</li>
							<li>
								<a
									href="https://coldcard.com/q"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_coldcard_q")}
								</a>
							</li>
							<li>
								<a
									href="https://foundationdevices.com/passport/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_passport")}
								</a>
							</li>
							<li>
								<a
									href="https://seedsigner.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_seedsigner")}
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

// Silence unused-var lint for NAMESPACE — kept for symmetry with other
// page files so future refactors can locate it.
void NAMESPACE;
