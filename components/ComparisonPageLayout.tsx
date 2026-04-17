import type { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import {
	buildComparisonSchema,
	type ComparisonPoint,
} from "@/lib/schema/comparison";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";
import type {
	ComparisonPageData,
	ComparisonPointData,
	SummaryFragment,
} from "@/lib/comparisons/types";

/**
 * Server Component that renders any Phase 7 comparison page
 * (`/bitcoin-vs-*`, `/bank-runs`) in the V2 design system.
 *
 * Structure:
 *   - Hero H1 (orange "BITCOIN" + asset-accent-colored asset word)
 *   - Intro paragraphs
 *   - N comparison blocks, each with:
 *       - Two side-by-side point chips (Bitcoin + asset)
 *       - Explanation paragraph(s)
 *   - "What's next?" card grid (4 cards — Keep learning / Get a wallet /
 *     Buy Bitcoin / Calculate inflation)
 *   - Sources ol
 *   - Publisher attribution + reviewed-badge
 *
 * All JSON-LD schemas (Article + BreadcrumbList + ItemList) are emitted
 * inline, reading page-specific data + translated prose from the
 * `ComparisonPageData` bundle and the current request locale.
 */
export async function ComparisonPageLayout({
	data,
	locale,
}: {
	data: ComparisonPageData;
	locale: Locale;
}) {
	const t = await getTranslations({ locale });
	const l = `/${locale}`;

	// ── Pre-resolve common translations ──
	const title = t(data.titleKey);
	const description = t(data.descriptionKey);

	// ── Build ComparisonPoint[] (strings only) for the ItemList schema ──
	const schemaPoints: ComparisonPoint[] = data.points.map((pt) => ({
		bitcoin: t(pt.bitcoinKey),
		asset: t(pt.assetKey),
		explanation: pt.summary
			.flatMap((paragraph) => paragraph.map((frag) => t(frag.key)))
			.join(" "),
	}));

	// ── SEO schemas ──
	const articleSchema = await buildArticleSchema({
		slug: data.slug,
		locale,
		headline: title,
		description,
		schemaType: "Article",
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: data.slug,
		locale,
		pageTitle: title,
	});
	const comparisonSchema = buildComparisonSchema({
		slug: data.slug,
		locale,
		description,
		points: schemaPoints,
		image: data.metaImage,
	});

	// CSS var lets the `--asset-accent` cascade into H1 + per-chip label styling.
	const accentStyle = { "--asset-accent": data.assetAccentColor } as CSSProperties;

	return (
		<>
			<JsonLd data={articleSchema} />
			{breadcrumbSchema !== null && <JsonLd data={breadcrumbSchema} />}
			{comparisonSchema !== null && <JsonLd data={comparisonSchema} />}

			<div className="container-main" style={accentStyle}>
				{/* ═══ HERO ═══ */}
				<div className="inflation-section comparison-hero">
					<div className="container-inner">
						<h1 className="h1-inflation comparison-h1">
							<span>{t(data.headerKeys.part1)}</span>{" "}
							<span className="orange">
								{t(data.headerKeys.bitcoin)}
							</span>
							<br />
							<span>{t(data.headerKeys.and)}</span>{" "}
							<span className="asset">
								{t(data.headerKeys.asset)}
							</span>
						</h1>
					</div>
				</div>

				{/* ═══ INTRO ═══ */}
				<div className="inflation-section comparison-intro">
					<div className="container-inner">
						{data.introKeys.map((key) => (
							<p key={key} className="inflation-intro">
								{t(key)}
							</p>
						))}
					</div>
				</div>

				{/* ═══ COMPARISON POINTS ═══ */}
				{data.points.map((point, i) => (
					<ComparisonPointSection
						key={i}
						point={point}
						index={i}
						bitcoinLabel={t(data.bitcoinLabelKey)}
						assetLabel={t(data.assetLabelKey)}
						locale={locale}
						labels={{
							bitcoin: t(data.bitcoinLabelKey),
							asset: t(data.assetLabelKey),
						}}
						tResolve={t}
					/>
				))}

				{/* ═══ WHAT'S NEXT (global — always visible on comparison pages) ═══ */}
				<div className="whats-next-section comparison-whats-next">
					<div className="container-inner">
						<div className="whats-next-header">
							<h2>{t("common_whats_next")}</h2>
						</div>
						<div className="whats-next-grid">
							<WhatsNextCard
								href={l}
								label={t("common_next_keep_learning")}
								title={t("common_next_keep_learning_desc")}
								authorKey="common_next_source"
							/>
							<WhatsNextCard
								href={`${l}/wallets`}
								label={t("common_next_get_wallet")}
								title={t("common_next_get_wallet_desc")}
								authorKey="common_next_source"
							/>
							<WhatsNextCard
								href={`${l}/buy`}
								label={t("common_next_buy_bitcoin")}
								title={t("common_next_buy_bitcoin_desc")}
								authorKey="common_next_source"
							/>
							<WhatsNextCard
								href={`${l}/compound-inflation-calculator`}
								label={t("common_next_calculate")}
								title={t("common_next_calculate_desc")}
								authorKey="common_next_source"
							/>
						</div>
					</div>
				</div>

				<div className="break-micro" />

				{/* ═══ SOURCES (GEO trust signals) ═══ */}
				<div className="sources-section">
					<div className="container-inner">
						<h2 className="sources-heading">
							{t("common_sources_heading")}
						</h2>
						<ol className="sources-list">
							{data.sources.map((src) => (
								<li key={src.url}>
									<a
										href={src.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										{src.label}
									</a>
								</li>
							))}
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

// ─────────────────────────────────────────────────────────────────────
// ComparisonPointSection — one row of the comparison (helper component)
// ─────────────────────────────────────────────────────────────────────
function ComparisonPointSection({
	point,
	index,
	locale,
	labels,
	tResolve,
}: {
	point: ComparisonPointData;
	index: number;
	/** Passed for future RTL/locale-sensitive layout decisions — kept
	 *  even though unused today so removing it later doesn't silently
	 *  break the call-site contract. */
	bitcoinLabel: string;
	assetLabel: string;
	locale: Locale;
	labels: { bitcoin: string; asset: string };
	tResolve: Awaited<ReturnType<typeof getTranslations>>;
}) {
	const l = `/${locale}`;

	return (
		<section
			className="inflation-section comparison-point"
			aria-labelledby={`comparison-point-${index + 1}`}
		>
			<div className="container-inner">
				{/* Two chips, side-by-side on desktop, stacked on mobile */}
				<div className="comparison-chips">
					<div className="comparison-chip comparison-chip-bitcoin">
						<div className="comparison-chip-label">
							{labels.bitcoin}
						</div>
						<div className="comparison-chip-value">
							{tResolve(point.bitcoinKey)}
						</div>
					</div>
					<div className="comparison-chip comparison-chip-asset">
						<div className="comparison-chip-label">
							{labels.asset}
						</div>
						<div className="comparison-chip-value">
							{tResolve(point.assetKey)}
						</div>
					</div>
				</div>

				{/* Explanation — one <p> per paragraph, fragments joined with a space. */}
				<div
					className="comparison-explain"
					id={`comparison-point-${index + 1}`}
				>
					{point.summary.map((paragraph, pi) => (
						<p key={pi}>
							{paragraph.map((frag, fi) => (
								<SummaryFragmentSpan
									key={fi}
									frag={frag}
									locale={l}
									tResolve={tResolve}
									isLast={fi === paragraph.length - 1}
								/>
							))}
						</p>
					))}
				</div>
			</div>
		</section>
	);
}

// ─────────────────────────────────────────────────────────────────────
// SummaryFragmentSpan — one fragment inside an explanation paragraph
// ─────────────────────────────────────────────────────────────────────
function SummaryFragmentSpan({
	frag,
	locale,
	tResolve,
	isLast,
}: {
	frag: SummaryFragment;
	locale: string;
	tResolve: Awaited<ReturnType<typeof getTranslations>>;
	isLast: boolean;
}) {
	const translated = tResolve(frag.key);

	// Some legacy translations embed inline `<a>` / `<strong>` markup.
	// Render the string as HTML so those survive — the source is the
	// trusted JSON files we ship with the repo. `dangerouslySetInnerHTML`
	// is the right tool for this tightly-controlled content pipeline.
	const textNode = (
		<span dangerouslySetInnerHTML={{ __html: translated }} />
	);

	const spacer = isLast ? "" : " ";

	if (!frag.href) {
		return (
			<>
				{textNode}
				{spacer}
			</>
		);
	}

	const href = frag.localize ? `/${locale.replace(/^\/+/, "")}${frag.href}` : frag.href;

	const externalProps = frag.external
		? { target: "_blank", rel: "noopener noreferrer" }
		: {};

	return (
		<>
			<a className="body-link" href={href} {...externalProps}>
				{textNode}
			</a>
			{spacer}
		</>
	);
}
