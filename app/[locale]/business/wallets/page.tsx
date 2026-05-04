import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildBusinessMetadata } from "@/lib/business/metadata";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/business/wallets — V2 redesign (April 23, 2026).
 *
 * Faithfully ports the legacy /business/wallets page into the V2
 * design system used across the rest of the site. The V1 version
 * hid each business-type group behind a collapsible accordion; the
 * V2 redesign flattens that into four top-to-bottom sections — each
 * with a plain `<h2>` + a short `<p>` intro + a `.wallet-grid` of
 * business wallet cards underneath — so the page reads like the
 * regular `/wallets` page but organized by business type.
 *
 * Structure (top → bottom):
 *   1. Hero — plain <h1> ("How to Accept Bitcoin Payments") + a
 *      subtitle paragraph explaining what business wallets do.
 *   2. Intro card — `.wallet-intro` bordered surface with the
 *      Bitcoin-only vs. hybrid explanation carried over from V1.
 *   3. Four wallet sections — each one a `.inflation-section` +
 *      `content-section` with an H2 + `.comparison-explain` intro
 *      paragraph, followed by a `.wallet-grid` of V2 business wallet
 *      cards:
 *        a. Individually-owned businesses
 *        b. Businesses with multiple employees
 *        c. Online businesses
 *        d. Invoice-based businesses
 *      Strike Business is featured in every section per its broad
 *      applicability (in-person, online, invoicing, multi-user).
 *   4. Business resources grid — the V2 `/business/*` convention:
 *      the colored resources grid from /business (wallets excluded
 *      because we're on it) serves as the cross-link surface for
 *      merchants. No generic "keep learning / buy Bitcoin" bridge —
 *      merchants flow between business pages. (See V2-REDESIGN-
 *      CHECKLIST.md.)
 *   5. Sources — wallet vendors + Bitcoin whitepaper.
 *   6. Publisher attribution + reviewed-for-accuracy badge.
 *
 * Schemas: Article + BreadcrumbList JSON-LD (same pattern as all V2
 * content pages).
 */

const SLUG = "business/wallets";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildBusinessMetadata({
		locale,
		slug: SLUG,
		titleKey: "how_to_accept_bitcoin_payments",
		descriptionKey: "biz_wallets_meta_description",
	});
}

// ─── Business wallet card spec ───────────────────────────────────────
//
// Each entry renders one V2 `.wallet-card` anchor (reusing the same
// styles as the regular /wallets page). `note` is a short paragraph
// that appears above the feature bullets — used for Square + Strike
// to give a one-line elevator pitch. `featureKeys` are translation
// keys pointing at the existing `wallets_feature_*` strings.
type BizWallet = {
	id: string;
	image: string;
	nameKey: string;
	/** Optional extra note translation key rendered above feature list. */
	noteKey?: string;
	featureKeys: readonly string[];
	link: string;
};

// ─── Wallet catalog (source of truth) ────────────────────────────────
const WALLETS = {
	square: {
		id: "square",
		image: "/img/wallets/square-business.png",
		nameKey: "wallets_name_square",
		noteKey: "wallets_square_note",
		featureKeys: [
			"wallets_feature_hybrid",
			"wallets_feature_info",
			"wallets_feature_in_person_online",
			"wallets_feature_settles_both",
		],
		link: "http://squareup.com/bitcoin",
	},
	strike: {
		id: "strike",
		image: "/img/wallets/strike-business.png",
		nameKey: "wallets_name_strike",
		noteKey: "wallets_strike_note",
		featureKeys: [
			"wallets_feature_hybrid",
			"wallets_feature_info",
			"wallets_feature_in_person_online",
			"wallets_feature_settles_both",
		],
		link: "https://strike.me/business",
	},
	breez: {
		id: "breez",
		image: "/img/wallets/breez-business.png",
		nameKey: "wallets_name_breez",
		featureKeys: [
			"wallets_feature_bitcoin_only",
			"wallets_feature_no_info",
			"wallets_feature_in_person",
			"wallets_feature_settles_bitcoin",
		],
		link: "https://breez.technology/mobile/",
	},
	opennode: {
		id: "opennode",
		image: "/img/wallets/opennode-business.png",
		nameKey: "wallets_name_open_node",
		featureKeys: [
			"wallets_feature_hybrid",
			"wallets_feature_info",
			"wallets_feature_in_person_online",
			"wallets_feature_settles_both",
		],
		link: "https://www.opennode.com/",
	},
	ibex: {
		id: "ibex",
		image: "/img/wallets/ibex-business.png",
		nameKey: "wallets_name_ibex_pay",
		featureKeys: [
			"wallets_feature_hybrid",
			"wallets_feature_multiple_employees",
			"wallets_feature_in_person_online",
			"wallets_feature_settles_both",
		],
		link: "https://www.poweredbyibex.io/",
	},
	opennodeOnline: {
		id: "opennode-online",
		image: "/img/wallets/opennode-online-business.png",
		nameKey: "wallets_name_open_node",
		featureKeys: [
			"wallets_feature_hybrid",
			"wallets_feature_info",
			"wallets_feature_online_store",
			"wallets_feature_settles_both",
		],
		link: "https://www.opennode.com/",
	},
	btcpay: {
		id: "btcpay",
		image: "/img/wallets/btcpay-business.png",
		nameKey: "wallets_name_btcpay_server",
		featureKeys: [
			"wallets_feature_bitcoin_only",
			"wallets_feature_self_hosted",
			"wallets_feature_online_store",
			"wallets_feature_settles_bitcoin",
		],
		link: "https://btcpayserver.org/",
	},
	zaprite: {
		id: "zaprite",
		image: "/img/wallets/zaprite-business.png",
		nameKey: "wallets_name_zaprite",
		featureKeys: [
			"wallets_feature_hybrid",
			"wallets_feature_info",
			"wallets_feature_invoicing",
			"wallets_feature_settles_both",
		],
		link: "https://zaprite.com/",
	},
} as const satisfies Record<string, BizWallet>;

// ─── Per-section wallet lists ────────────────────────────────────────
const SECTIONS: readonly {
	id: string;
	headingKey: string;
	introKey: string;
	wallets: readonly BizWallet[];
}[] = [
	{
		id: "sole",
		headingKey: "wallets_section_sole",
		introKey: "wallets_section_sole_intro",
		wallets: [WALLETS.square, WALLETS.strike, WALLETS.breez, WALLETS.opennode],
	},
	{
		id: "multiple",
		headingKey: "wallets_section_multiple",
		introKey: "wallets_section_multiple_intro",
		wallets: [WALLETS.square, WALLETS.ibex],
	},
	{
		id: "online",
		headingKey: "wallets_section_online",
		introKey: "wallets_section_online_intro",
		wallets: [WALLETS.square, WALLETS.strike, WALLETS.opennodeOnline, WALLETS.btcpay],
	},
	{
		id: "invoice",
		headingKey: "wallets_section_invoice",
		introKey: "wallets_section_invoice_intro",
		wallets: [WALLETS.zaprite, WALLETS.strike],
	},
];

// ─── Business resource card spec (cross-link surface) ────────────────
//
// Matches the grid on /business, minus the wallets card (we're on it).
// Same accents as /business + /business/faq for visual consistency.
type BizResource = {
	key: string;
	href: string;
	/** Hex color used as the card's `--card-accent`. */
	accent: string;
	labelKey: string;
	titleKey: string;
	external?: boolean;
};

const BIZ_RESOURCES: readonly BizResource[] = [
	{
		key: "maps",
		href: "/business/maps",
		accent: "#1DFF4D", // energy green
		labelKey: "biz_label_maps",
		titleKey: "common_biz_maps",
	},
	{
		key: "stickers",
		href: "/business/stickers",
		accent: "#FF1D8E", // stickers pink
		labelKey: "biz_label_stickers",
		titleKey: "common_biz_stickers",
	},
	{
		key: "rewards",
		href: "https://www.oshi.tech/",
		accent: "#FFE91D", // payments yellow
		labelKey: "biz_label_rewards",
		titleKey: "common_biz_rewards",
		external: true,
	},
	{
		key: "accounting",
		href: "/business/accounting",
		accent: "#4DA6FF", // calm blue
		labelKey: "biz_label_accounting",
		titleKey: "common_biz_accounting",
	},
	{
		key: "faq",
		href: "/business/faq",
		accent: "#A67DFF", // education purple
		labelKey: "biz_label_faq",
		titleKey: "common_biz_faq",
	},
];

// ─── One business wallet card ────────────────────────────────────────
//
// Reuses the V2 `.wallet-card` + `.wallet-card-features` + `.wallet-
// card-cta` styles from /wallets so the visual rhythm matches. The
// optional `note` paragraph slots in between the h2 + the feature
// bullets with a subtle muted color.
function BizWalletCard({
	wallet,
	t,
	getWalletLabel,
}: {
	wallet: BizWallet;
	t: Awaited<ReturnType<typeof getTranslations>>;
	getWalletLabel: string;
}): ReactNode {
	const name = t(wallet.nameKey);
	return (
		<a
			href={wallet.link}
			className="wallet-card"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${name} — ${getWalletLabel}`}
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

			{wallet.noteKey && (
				<p className="biz-wallet-card-note">{t(wallet.noteKey)}</p>
			)}

			<ul className="wallet-card-features">
				{wallet.featureKeys.map((key) => (
					<li key={key}>
						<span className="wallet-card-feature-check" aria-hidden="true">
							✓
						</span>
						<span>{t(key)}</span>
					</li>
				))}
			</ul>

			<span className="wallet-card-cta">{getWalletLabel}</span>
		</a>
	);
}

export default async function BusinessWalletsPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("how_to_accept_bitcoin_payments");
	const description = t("biz_wallets_meta_description");

	const getWalletLabel = t("wallets_get_wallet");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description,
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
						<p>{t("wallets_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══
				   Carries over the V1 Bitcoin-only vs. hybrid wallet
				   explanation so merchants understand the feature
				   bullets on the cards below. */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("wallets_intro_1")}</p>
						<p>
							<strong>{t("wallets_intro_2")}</strong>{" "}
							{t("wallets_intro_3")}
						</p>
						<p>
							<strong>{t("wallets_intro_4")}</strong>{" "}
							{t("wallets_intro_5")}
						</p>
						<p>{t("wallets_intro_6")}</p>
					</div>
				</div>

				{/* ═══ WALLET SECTIONS (4) ═══ */}
				{SECTIONS.map((s) => (
					<section
						key={s.id}
						className="inflation-section content-section"
						aria-labelledby={`biz-wallets-${s.id}`}
					>
						<div className="container-inner">
							<h2 id={`biz-wallets-${s.id}`}>{t(s.headingKey)}</h2>
							<div className="comparison-explain">
								<p>{t(s.introKey)}</p>
							</div>
							<div className="wallet-grid" style={{ marginTop: "24px" }}>
								{s.wallets.map((w) => (
									<BizWalletCard
										key={`${s.id}-${w.id}`}
										wallet={w}
										t={t}
										getWalletLabel={getWalletLabel}
									/>
								))}
							</div>
						</div>
					</section>
				))}

				{/* ═══ BUSINESS RESOURCES GRID ═══
				   The /business/* V2 convention: this colored resource
				   grid IS the cross-link surface for merchants. No
				   generic "keep learning / buy Bitcoin" bridge here —
				   merchants should flow between business pages, not
				   back into the beginner learning path. (See
				   V2-REDESIGN-CHECKLIST.md.) */}
				<section
					id="ready"
					className="inflation-section content-section"
					aria-labelledby="biz-resources-heading"
				>
					<div className="container-inner">
						<h2 id="biz-resources-heading">
							{t("business_resources_heading")}
						</h2>
						<div className="comparison-explain">
							<p>{t("business_resources_intro")}</p>
						</div>
						<div
							className="whats-next-grid"
							style={{ marginTop: "24px" }}
						>
							{BIZ_RESOURCES.map((r) => {
								const href = r.external
									? r.href
									: `${l}${r.href}`;
								const style = {
									"--card-accent": r.accent,
								} as CSSProperties;
								const externalProps = r.external
									? {
											target: "_blank" as const,
											rel: "noopener noreferrer" as const,
										}
									: {};
								return (
									<a
										key={r.key}
										href={href}
										className="whats-next-card"
										style={style}
										{...externalProps}
									>
										<div>
											<div className="whats-next-card-label">
												{t(r.labelKey)}
											</div>
											<div className="whats-next-card-title">
												{t(r.titleKey)}
											</div>
										</div>
										<div className="whats-next-card-source">
											<span>{t("home_source_prefix")}</span>{" "}
											<span>{t("common_publisher_name")}</span> →
										</div>
									</a>
								);
							})}
						</div>
					</div>
				</section>

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
									href="https://squareup.com/bitcoin"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_square")}
								</a>
							</li>
							<li>
								<a
									href="https://strike.me/business"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("common_source_strike_business")}
								</a>
							</li>
							<li>
								<a
									href="https://breez.technology/mobile/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_breez_business")}
								</a>
							</li>
							<li>
								<a
									href="https://www.opennode.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_opennode")}
								</a>
							</li>
							<li>
								<a
									href="https://www.poweredbyibex.io/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_ibex")}
								</a>
							</li>
							<li>
								<a
									href="https://btcpayserver.org/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("common_source_btcpayserver")}
								</a>
							</li>
							<li>
								<a
									href="https://zaprite.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_zaprite")}
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
