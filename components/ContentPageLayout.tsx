import { getTranslations } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";
import type { SummaryFragment } from "@/lib/comparisons/types";
import type {
	ContentCard,
	ContentPageData,
	LearnMoreCard,
	StatCard,
} from "@/lib/comparisons/bank-runs";

/**
 * Server Component that renders a content-style Phase 7 page
 * (currently just `/bank-runs`) in the V2 design system.
 *
 * Differences from `ComparisonPageLayout`:
 *   - No per-point chip pairs — just a sequence of H2 + paragraphs.
 *   - Two-line hero H1 (title white, subtitle orange).
 *   - No ItemList schema — only Article + BreadcrumbList.
 *   - Optional per-section `cards` block (stat cards or a learn-more
 *     card) rendered after the paragraphs.
 *
 * Shares the `WhatsNextCard` grid, sources list, publisher attribution
 * + reviewed badge structure with `ComparisonPageLayout` so the V2 UX
 * of "read the article → jump to next step" stays consistent.
 */
export async function ContentPageLayout({
	data,
	locale,
}: {
	data: ContentPageData;
	locale: Locale;
}) {
	const t = await getTranslations({ locale });
	const l = `/${locale}`;

	const title = t(data.titleKey);
	const description = t(data.descriptionKey);

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

	return (
		<>
			<JsonLd data={articleSchema} />
			{breadcrumbSchema !== null && <JsonLd data={breadcrumbSchema} />}

			<div className="container-main">
				{/* ═══ HERO ═══ */}
				<div className="inflation-section comparison-hero">
					<div className="container-inner">
						<h1>
							<span>{t(data.headerKeys.title)}</span>
							<br />
							<span className="orange">
								{t(data.headerKeys.subtitle)}
							</span>
						</h1>
					</div>
				</div>

				{/* ═══ SECTIONS ═══ */}
				{data.sections.map((section, i) => (
					<section
						key={section.headingKey}
						className="inflation-section content-section"
						aria-labelledby={`content-section-${i + 1}`}
					>
						<div className="container-inner">
							<h2 id={`content-section-${i + 1}`}>
								{t(section.headingKey)}
							</h2>
							<div className="comparison-explain">
								{section.paragraphs.map((paragraph, pi) => (
									<p key={pi}>
										{paragraph.map((frag, fi) => (
											<SummaryFragmentSpan
												key={fi}
												frag={frag}
												locale={l}
												tResolve={t}
												isLast={fi === paragraph.length - 1}
											/>
										))}
									</p>
								))}
							</div>

							{section.cards && section.cards.length > 0 && (
								<ContentCardsBlock
									cards={section.cards}
									locale={l}
									tResolve={t}
								/>
							)}
						</div>
					</section>
				))}

				{/* ═══ WHAT'S NEXT ═══ */}
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

				{/* ═══ SOURCES ═══ */}
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

/**
 * Render a section's card block. Two `StatCard`s land in a side-by-side
 * `.stat-cards-grid` (collapses to 1-col on mobile — matches the
 * inflation-page hero cards). A single `LearnMoreCard` is wrapped in
 * a 1-col `.whats-next-grid` so it picks up the same V2 V2 card styling.
 */
function ContentCardsBlock({
	cards,
	locale,
	tResolve,
}: {
	cards: readonly ContentCard[];
	locale: string;
	tResolve: Awaited<ReturnType<typeof getTranslations>>;
}) {
	// Split into stat-cards vs learn-more cards. We currently only ever
	// render one group at a time per section (2 stat cards OR 1 learn-
	// more card), but the schema tolerates either/both so we keep the
	// rendering branched and explicit.
	const statCards = cards.filter((c): c is StatCard => c.type === "stat");
	const learnMoreCards = cards.filter(
		(c): c is LearnMoreCard => c.type === "learn-more",
	);

	return (
		<>
			{statCards.length > 0 && (
				<div className="stat-cards-grid">
					{statCards.map((card, i) => (
						<StatCardView
							key={i}
							card={card}
							locale={locale}
							tResolve={tResolve}
						/>
					))}
				</div>
			)}

			{learnMoreCards.length > 0 && (
				<div
					className="whats-next-grid"
					style={{ gridTemplateColumns: "1fr" }}
				>
					{learnMoreCards.map((card, i) => (
						<LearnMoreCardView
							key={i}
							card={card}
							locale={locale}
							tResolve={tResolve}
						/>
					))}
				</div>
			)}
		</>
	);
}

function StatCardView({
	card,
	locale,
	tResolve,
}: {
	card: StatCard;
	locale: string;
	tResolve: Awaited<ReturnType<typeof getTranslations>>;
}) {
	const href = card.localize
		? `/${locale.replace(/^\/+/, "")}${card.href}`
		: card.href;
	const externalProps = card.external
		? { target: "_blank", rel: "noopener noreferrer" }
		: {};
	const value = card.valueLiteral ?? (card.valueKey ? tResolve(card.valueKey) : "");

	return (
		<a href={href} className="stat-card" {...externalProps}>
			<div className="stat-card-label">{tResolve(card.labelKey)}</div>
			<div
				className={`stat-card-value ${card.valueTone}`}
				id={card.valueDomId}
			>
				{value}
			</div>
			{card.detailKey && (
				<div className="stat-card-detail" id={card.detailDomId}>
					{tResolve(card.detailKey)}
				</div>
			)}
			{card.sourceKey && (
				<div className="stat-card-source">
					{tResolve(card.sourceKey)}
				</div>
			)}
		</a>
	);
}

function LearnMoreCardView({
	card,
	locale,
	tResolve,
}: {
	card: LearnMoreCard;
	locale: string;
	tResolve: Awaited<ReturnType<typeof getTranslations>>;
}) {
	const href = card.localize
		? `/${locale.replace(/^\/+/, "")}${card.href}`
		: card.href;
	const externalProps = card.external
		? { target: "_blank", rel: "noopener noreferrer" }
		: {};

	return (
		<a href={href} className="whats-next-card" {...externalProps}>
			<div>
				<div className="whats-next-card-label">
					{tResolve(card.labelKey)}
				</div>
				<div className="whats-next-card-title">
					{tResolve(card.titleKey)}
				</div>
			</div>
			<div className="whats-next-card-source">
				{tResolve(card.sourceKey)}
			</div>
		</a>
	);
}

/**
 * One fragment inside a content-section paragraph. Mirrors the
 * identically-named helper in `ComparisonPageLayout` so inline `<a>`
 * + external + localize semantics stay consistent across page types.
 */
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

	const href = frag.localize
		? `/${locale.replace(/^\/+/, "")}${frag.href}`
		: frag.href;
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
