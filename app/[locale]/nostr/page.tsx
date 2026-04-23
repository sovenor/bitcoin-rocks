import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * /[locale]/nostr — V2 redesign (April 23, 2026).
 *
 * This page now absorbs the content that previously lived on
 * `/nostr/what-is-nostr` — the two pages have been merged into a single
 * Nostr landing page. The former `/nostr/what-is-nostr` slug 301-redirects
 * to `/nostr` (see `next.config.ts`).
 *
 * Sections (top → bottom):
 *   1. Hero — plain <h1> ("What is Nostr?") + subtitle describing Nostr.
 *   2. Intro card — 2-paragraph `.wallet-intro` lead-in.
 *   3. Three benefit sections (protocol / freedom to move / Bitcoin built-in).
 *   4. Go-deeper card — `.wallet-lightning-cta`-style outbound link card
 *      pointing readers at nostr.how for a deeper dive.
 *   5. "Download a free Nostr client" — styled like the `/wallets`
 *      wallet grid: `.wallet-grid` of V2 `.wallet-card`s, one per client
 *      (Primal, Damus, Amethyst, Iris) with platform badge + feature
 *      bullets + "Learn more →" CTA.
 *   6. What's next — 4 `<WhatsNextCard>`s bridging to /, /wallets, /buy,
 *      /inflation so readers have a clear path forward.
 *   7. Sources section.
 *   8. Publisher attribution + reviewed-for-accuracy badge.
 */

const SLUG = "nostr";
const META_IMAGE = "https://bitcoin.rocks/img/meta/meta-nostr-home-v1.png";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const title = t("what_is_nostr");
	const description = t("nostr_page_description");

	return {
		title,
		description,
		alternates: buildAlternates({
			locale: locale as Locale,
			slug: SLUG,
		}),
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

// ─── Nostr client catalog — renders the /wallets-style client grid ───
type NostrClient = {
	id: string;
	image: string;
	nameKey: string;
	/** Translation key for the platform badge ("iPhone", "Android", etc.). */
	platformKey: string;
	/** Translation keys for the feature bullets. */
	features: readonly string[];
	link: string;
};

const NOSTR_CLIENTS: readonly NostrClient[] = [
	{
		id: "primal",
		image: "/img/clients/primal.png",
		nameKey: "nostr_primal_name",
		platformKey: "nostr_platform_ios_android_web",
		features: ["nostr_primal_f1", "nostr_primal_f2", "nostr_primal_f3"],
		link: "https://primal.net/downloads",
	},
	{
		id: "damus",
		image: "/img/clients/damus.png",
		nameKey: "nostr_damus_name",
		platformKey: "nostr_platform_ios",
		features: ["nostr_damus_f1", "nostr_damus_f2", "nostr_damus_f3"],
		link: "https://damus.io/",
	},
	{
		id: "amethyst",
		image: "/img/clients/amethyst.png",
		nameKey: "nostr_amethyst_name",
		platformKey: "nostr_platform_android",
		features: [
			"nostr_amethyst_f1",
			"nostr_amethyst_f2",
			"nostr_amethyst_f3",
		],
		link: "https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst",
	},
	{
		id: "iris",
		image: "/img/clients/iris.png",
		nameKey: "nostr_iris_name",
		platformKey: "nostr_platform_web",
		features: ["nostr_iris_f1", "nostr_iris_f2", "nostr_iris_f3"],
		link: "https://iris.to/",
	},
];

/**
 * One Nostr client card — mirrors the `WalletCardV2` shape used on
 * `/wallets`. The whole card is the outbound link; the inner
 * `.wallet-card-cta` is a styled `<span>` (HTML forbids nested anchors).
 */
function NostrClientCard({
	client,
	t,
	learnMoreLabel,
}: {
	client: NostrClient;
	t: Awaited<ReturnType<typeof getTranslations>>;
	learnMoreLabel: string;
}): ReactNode {
	const name = t(client.nameKey);
	const platform = t(client.platformKey);

	return (
		<a
			href={client.link}
			className="wallet-card"
			target="_blank"
			rel="noopener noreferrer"
			aria-label={`${name} — ${learnMoreLabel}`}
		>
			<div className="wallet-card-image-wrap">
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src={client.image}
					alt={name}
					className="wallet-card-image"
					loading="lazy"
				/>
			</div>
			<h2 className="wallet-card-name">{name}</h2>

			<div className="wallet-card-badges">
				<span className="wallet-callout good">
					<span className="wallet-callout-icon" aria-hidden="true">
						✓
					</span>
					<span>{platform}</span>
				</span>
			</div>

			<ul className="wallet-card-features">
				{client.features.map((key) => (
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

export default async function NostrIndexPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	const t = await getTranslations({ locale });
	const l = `/${locale}`;
	const title = t("what_is_nostr");
	const description = t("nostr_page_description");
	const learnMoreLabel = t("common_learn_more");

	const articleSchema = await buildArticleSchema({
		slug: SLUG,
		locale: locale as Locale,
		headline: title,
		description,
		schemaType: "Article",
		image: META_IMAGE,
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
						<h1>{t("nostr_hero_title")}</h1>
						<p>{t("nostr_hero_subtitle")}</p>
					</div>
				</div>

				{/* ═══ INTRO CARD ═══ */}
				<div className="wallet-intro">
					<div className="container-inner">
						<p>{t("nostr_intro_c1")}</p>
						<p>{t("nostr_intro_c2")}</p>
					</div>
				</div>

				{/* ═══ BENEFIT 1 — Protocol, not platform ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="nostr-s1"
				>
					<div className="container-inner">
						<h2 id="nostr-s1">{t("nostr_s1")}</h2>
						<div className="comparison-explain">
							<p>{t("nostr_s1_c1")}</p>
							<p>{t("nostr_s1_c2")}</p>
						</div>
					</div>
				</section>

				{/* ═══ BENEFIT 2 — Freedom to move ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="nostr-s2"
				>
					<div className="container-inner">
						<h2 id="nostr-s2">{t("nostr_s2")}</h2>
						<div className="comparison-explain">
							<p>{t("nostr_s2_c1")}</p>
							<p>{t("nostr_s2_c2")}</p>
							<p>{t("nostr_s2_c3")}</p>
						</div>
					</div>
				</section>

				{/* ═══ BENEFIT 3 — Bitcoin is built in ═══ */}
				<section
					className="inflation-section content-section"
					aria-labelledby="nostr-s3"
				>
					<div className="container-inner">
						<h2 id="nostr-s3">{t("nostr_s3")}</h2>
						<div className="comparison-explain">
							<p>{t("nostr_s3_c1")}</p>
							<p>{t("nostr_s3_c2")}</p>
						</div>
					</div>
				</section>

				{/* ═══ GO DEEPER — nostr.how CTA ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<a
							href="https://nostr.how/en/what-is-nostr"
							target="_blank"
							rel="noopener noreferrer"
							className="wallet-lightning-cta"
						>
							<div>
								<div className="wallet-lightning-cta-label">
									{t("nostr_learn_more_label")}
								</div>
								<div className="wallet-lightning-cta-title">
									{t("nostr_learn_more_title")}
								</div>
							</div>
							<span
								className="wallet-lightning-cta-arrow"
								aria-hidden="true"
							>
								→
							</span>
						</a>
					</div>
				</div>

				{/* ═══ DOWNLOAD A FREE NOSTR CLIENT ═══ */}
				<div
					id="ready"
					className="wallet-grid-section inflation-section"
				>
					<div className="container-inner">
						<h2 className="wallet-grid-heading">
							{t("nostr_download_heading")}
						</h2>
						<div className="comparison-explain">
							<p>{t("nostr_download_intro")}</p>
						</div>
						<div className="wallet-grid" style={{ marginTop: "24px" }}>
							{NOSTR_CLIENTS.map((c) => (
								<NostrClientCard
									key={c.id}
									client={c}
									t={t}
									learnMoreLabel={learnMoreLabel}
								/>
							))}
						</div>
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
								href={`${l}/inflation`}
								label={t("common_next_keep_learning")}
								title={t("bitcoin_doesnt_have_inflation")}
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
									href="https://nostr.how/en/what-is-nostr"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_nostr_how")}
								</a>
							</li>
							<li>
								<a
									href="https://github.com/nostr-protocol/nostr"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_nostr_protocol")}
								</a>
							</li>
							<li>
								<a
									href="https://primal.net/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_primal")}
								</a>
							</li>
							<li>
								<a
									href="https://damus.io/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_damus")}
								</a>
							</li>
							<li>
								<a
									href="https://iris.to/"
									target="_blank"
									rel="noopener noreferrer"
								>
									{t("sources_iris")}
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
								<span itemProp="name">
									{t("common_publisher_name")}
								</span>
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
