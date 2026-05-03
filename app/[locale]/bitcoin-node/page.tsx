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

const SLUG = "bitcoin-node";
const NAMESPACE = "bitcoin-node";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-bitcoin-node.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("bitcoin_node_h1");
	const description = t("bitcoin_node_description");
	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: SLUG }),
		openGraph: {
			title: `${title} | bitcoin.rocks`,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/${SLUG}`,
		},
		twitter: {
			card: "summary_large_image",
			title: `${title} | bitcoin.rocks`,
			description,
		},
	};
}

type NodeSpec = {
	id: string;
	image: string;
	nameKey: string;
	type: "diy" | "prebuilt";
	effort: "beginner" | "advanced";
	features: readonly string[];
	priceKey: string;
	link: string;
};

const NODES: readonly NodeSpec[] = [
	{
		id: "bitcoin-core",
		image: "/img/nodes/bitcoin-core.png",
		nameKey: "bitcoin_node_bitcoin_core",
		type: "diy",
		effort: "beginner",
		features: [
			"bitcoin_node_bitcoin_core_feat_1",
			"bitcoin_node_bitcoin_core_feat_2",
			"bitcoin_node_bitcoin_core_feat_3",
			"bitcoin_node_bitcoin_core_feat_4",
		],
		priceKey: "bitcoin_node_bitcoin_core_costs",
		link: "https://bitcoincore.org/en/download/",
	},
	{
		id: "umbrel",
		image: "/img/nodes/umbrel.png",
		nameKey: "bitcoin_node_umbrel",
		type: "diy",
		effort: "beginner",
		features: [
			"bitcoin_node_umbrel_feat_1",
			"bitcoin_node_umbrel_feat_2",
			"bitcoin_node_umbrel_feat_3",
			"bitcoin_node_umbrel_feat_4",
		],
		priceKey: "bitcoin_node_umbrel_costs",
		link: "https://umbrel.com/",
	},
	{
		id: "start9-os",
		image: "/img/nodes/start9-os.png",
		nameKey: "bitcoin_node_start9_os",
		type: "diy",
		effort: "advanced",
		features: [
			"bitcoin_node_start9_os_feat_1",
			"bitcoin_node_start9_os_feat_2",
			"bitcoin_node_start9_os_feat_3",
			"bitcoin_node_start9_os_feat_4",
		],
		priceKey: "bitcoin_node_start9_os_costs",
		link: "https://start9.com/",
	},
	{
		id: "mynode",
		image: "/img/nodes/mynode.png",
		nameKey: "bitcoin_node_mynode",
		type: "diy",
		effort: "advanced",
		features: [
			"bitcoin_node_mynode_feat_1",
			"bitcoin_node_mynode_feat_2",
			"bitcoin_node_mynode_feat_3",
			"bitcoin_node_mynode_feat_4",
		],
		priceKey: "bitcoin_node_mynode_costs",
		link: "https://mynodebtc.com/",
	},
	{
		id: "start9-server-one",
		image: "/img/nodes/start9-server-one.png",
		nameKey: "bitcoin_node_start9_server_one",
		type: "prebuilt",
		effort: "beginner",
		features: [
			"bitcoin_node_start9_server_one_feat_1",
			"bitcoin_node_start9_server_one_feat_2",
			"bitcoin_node_start9_server_one_feat_3",
			"bitcoin_node_start9_server_one_feat_4",
		],
		priceKey: "bitcoin_node_start9_server_one_costs",
		link: "https://store.start9.com/",
	},
	{
		id: "nodl",
		image: "/img/nodes/nodl.png",
		nameKey: "bitcoin_node_nodl",
		type: "prebuilt",
		effort: "beginner",
		features: [
			"bitcoin_node_nodl_feat_1",
			"bitcoin_node_nodl_feat_2",
			"bitcoin_node_nodl_feat_3",
			"bitcoin_node_nodl_feat_4",
		],
		priceKey: "bitcoin_node_nodl_costs",
		link: "https://www.nodl.it/",
	},
];

function NodeCallout({
	tone,
	icon,
	label,
}: {
	tone: "good" | "warn";
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

function EffortCallout({
	kind,
	label,
}: {
	kind: "beginner" | "advanced";
	label: string;
}) {
	return (
		<NodeCallout
			tone={kind === "beginner" ? "good" : "warn"}
			icon={kind === "beginner" ? "✓" : "⚠"}
			label={label}
		/>
	);
}

async function NodeCardV2({
	node,
	t,
	learnMoreLabel,
	diyLabel,
	prebuiltLabel,
	beginnerLabel,
	advancedLabel,
}: {
	node: NodeSpec;
	t: Awaited<ReturnType<typeof getTranslations>>;
	learnMoreLabel: string;
	diyLabel: string;
	prebuiltLabel: string;
	beginnerLabel: string;
	advancedLabel: string;
}): Promise<ReactNode> {
	const name = t(node.nameKey);

	return (
		<a
			href={node.link}
			className="wallet-card"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${name} — ${learnMoreLabel}`}
		>
			<div className="wallet-card-image-wrap">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={node.image}
					alt={name}
					className="wallet-card-image"
					loading="lazy"
				/>
			</div>
			<h2 className="wallet-card-name">{name}</h2>

			<div className="wallet-card-badges">
				<NodeCallout
					tone="good"
					icon="✓"
					label={node.type === "diy" ? diyLabel : prebuiltLabel}
				/>
				<EffortCallout
					kind={node.effort}
					label={node.effort === "beginner" ? beginnerLabel : advancedLabel}
				/>
			</div>

			<ul className="wallet-card-features">
				{node.features.map((key) => (
					<li key={key}>
						<span className="wallet-card-feature-check" aria-hidden="true">
							✓
						</span>
						<span>{t(key)}</span>
					</li>
				))}
				<li key={node.priceKey}>
					<span className="wallet-card-feature-check" aria-hidden="true">
						✓
					</span>
					<span className="wallet-card-feature-price">{t(node.priceKey)}</span>
				</li>
			</ul>

			<span className="wallet-card-cta">{learnMoreLabel}</span>
		</a>
	);
}

export default async function BitcoinNodePage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("bitcoin_node_h1");
	const description = t("bitcoin_node_description");

	const diyLabel = t("bitcoin_node_badge_diy");
	const prebuiltLabel = t("bitcoin_node_badge_prebuilt");
	const beginnerLabel = t("bitcoin_node_badge_beginner");
	const advancedLabel = t("bitcoin_node_badge_advanced");
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
						<p>{t("bitcoin_node_header_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("bitcoin_node_s1_c1")}</p>
						<p>{t("bitcoin_node_s1_c2")}</p>
					</div>
				</div>

				{/* ═══ FAQ ACCORDIONS ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<div className="wallet-accordions">
							{/* Q1: What is a node and why run one? */}
							<WalletAccordion question={t("bitcoin_node_question_1")}>
								<p>{t("bitcoin_node_s2_c1")}</p>
								<p>{t("bitcoin_node_s2_c2")}</p>
								<p>{t("bitcoin_node_s2_c3")}</p>
								<p>{t("bitcoin_node_s2_c4")}</p>
							</WalletAccordion>

							{/* Q2: What hardware do I need? */}
							<WalletAccordion question={t("bitcoin_node_question_2")}>
								<p>{t("bitcoin_node_s3_c1")}</p>
								<p>{t("bitcoin_node_s3_c2")}</p>
								<p>{t("bitcoin_node_s3_c3")}</p>
								<p>{t("bitcoin_node_s3_c4")}</p>
							</WalletAccordion>

							{/* Q3: 24/7? */}
							<WalletAccordion question={t("bitcoin_node_question_3")}>
								<p>{t("bitcoin_node_s4_c1")}</p>
								<p>{t("bitcoin_node_s4_c2")}</p>
								<p>{t("bitcoin_node_s4_c3")}</p>
							</WalletAccordion>

							{/* Q4: Lightning */}
							<WalletAccordion question={t("bitcoin_node_question_4")}>
								<p>{t("bitcoin_node_s5_c1")}</p>
								<p>{t("bitcoin_node_s5_c2")}</p>
								<p>
									{t("bitcoin_node_s5_c3a")}{" "}
									<a href={`${l}/lightning`} className="body-link">
										{t("bitcoin_node_s5_c3b")}
									</a>{" "}
									{t("bitcoin_node_s5_c3c")}
								</p>
							</WalletAccordion>
						</div>
					</div>
				</div>

				{/* ═══ NODE GRID ═══ */}
				<div className="wallet-grid-section inflation-section">
					<div className="container-inner">
						<h2 className="wallet-grid-heading">
							{t("bitcoin_node_grid_heading")}
						</h2>
						<div className="wallet-grid">
							{NODES.map((n) => (
								<NodeCardV2
									key={n.id}
									node={n}
									t={t}
									learnMoreLabel={learnMoreLabel}
									diyLabel={diyLabel}
									prebuiltLabel={prebuiltLabel}
									beginnerLabel={beginnerLabel}
									advancedLabel={advancedLabel}
								/>
							))}
						</div>
					</div>
				</div>

				{/* ═══ WALLETS CTA ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<a href={`${l}/wallets`} className="wallet-lightning-cta">
							<div>
								<div className="wallet-lightning-cta-label">
									{t("bitcoin_node_wallets_cta_label")}
								</div>
								<div className="wallet-lightning-cta-title">
									{t("bitcoin_node_cta_wallets")}
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
								label={t("common_next_keep_learning")}
								title={t("bitcoin_wallet_guide")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/lightning`}
								label={t("common_next_keep_learning")}
								title={t("bitcoin_node_s5_c3b")}
								authorKey="common_publisher_name"
							/>
							<WhatsNextCard
								href={`${l}/buy`}
								label={t("common_next_buy_bitcoin")}
								title={t("common_next_buy_bitcoin_desc")}
								authorKey="common_publisher_name"
							/>
						</div>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ SOURCES ═══ */}
				<div className="sources-section">
					<div className="container-inner">
						<h2 className="sources-heading">{t("common_sources_heading")}</h2>
						<ol className="sources-list">
							<li>
								<a
									href="https://bitcoincore.org/en/download/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("bitcoin_node_sources_bitcoincore")}
								</a>
							</li>
							<li>
								<a
									href="https://bitcoin.org/en/full-node"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("bitcoin_node_sources_bitcoin_org")}
								</a>
							</li>
							<li>
								<a
									href="https://umbrel.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("bitcoin_node_sources_umbrel")}
								</a>
							</li>
							<li>
								<a
									href="https://start9.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("bitcoin_node_sources_start9")}
								</a>
							</li>
							<li>
								<a
									href="https://mynodebtc.com/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("bitcoin_node_sources_mynode")}
								</a>
							</li>
							<li>
								<a
									href="https://www.nodl.it/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("bitcoin_node_sources_nodl")}
								</a>
							</li>
							<li>
								<a
									href="https://www.lopp.net/bitcoin-information/full-node.html"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("bitcoin_node_sources_lopp_node")}
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

void NAMESPACE;
