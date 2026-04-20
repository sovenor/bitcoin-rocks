/**
 * Data for the `/bank-runs` page.
 *
 * Shape differs from the other comparison pages: there are no "chip
 * pairs", just H2 + prose sections. `ContentPageLayout` renders these
 * instead of `ComparisonPageLayout`.
 *
 * Each section may optionally include a `cards` block that renders
 * after its paragraphs:
 *   - `StatCard`      — mirrors the inflation-page hero stat card
 *                       (label / value / detail / source / href).
 *   - `LearnMoreCard` — a full-width V2 WhatsNextCard pointing to a
 *                       single follow-up resource.
 */

import type { SummaryFragment } from "./types";

/**
 * One "stat card" displayed after a section's paragraphs. Matches
 * the visual style of the inflation page's hero cards
 * (`.stat-cards-grid > a.stat-card` in app/globals.css).
 */
export type StatCard = {
	type: "stat";
	/** Translation key for the uppercase small label at the top of the card. */
	labelKey: string;
	/**
	 * Translation key for the big numeric/text value. When `valueLiteral`
	 * is set we render that literal instead of resolving `valueKey`
	 * (useful for plain numbers like "0%" / "100%").
	 */
	valueKey?: string;
	valueLiteral?: string;
	/** Accent class applied to the value — success=green, danger=red. */
	valueTone: "success" | "danger" | "accent" | "muted";
	/** Translation key for the small grey detail line (optional). */
	detailKey?: string;
	/** Translation key for the italic grey source line (optional). */
	sourceKey?: string;
	/** Outbound link (external or locale-relative). */
	href: string;
	/** `true` ⇒ add `target="_blank" rel="noopener"`. */
	external?: boolean;
	/** `true` ⇒ prefix `href` with the current locale. */
	localize?: boolean;
	/**
	 * Optional DOM id applied to the value element — used by the
	 * upcoming `<FdicStats>` Client Component to populate the live
	 * FDIC coverage percentage at runtime (commit 2).
	 */
	valueDomId?: string;
	/** Optional DOM id on the detail element (same reason as above). */
	detailDomId?: string;
};

/**
 * One "learn more" card — a full-width V2 card that links to a
 * follow-up resource. Renders via `<WhatsNextCard>`.
 *
 * `introParagraphs` is an optional sequence of prose paragraphs that
 * render directly above the card. When any card in a group has
 * intros, the layout switches from a side-by-side grid to a stacked
 * "blurb → card → blurb → card" rhythm (used by the /about page's
 * What-We-Do cards so each CTA gets its own explanatory lead-in).
 */
export type LearnMoreCard = {
	type: "learn-more";
	labelKey: string;
	titleKey: string;
	/** Translation key for the italic "Source: …" line. */
	sourceKey: string;
	href: string;
	external?: boolean;
	localize?: boolean;
	/**
	 * Optional prose paragraphs that render above this card. Each
	 * paragraph is an array of `SummaryFragment`s (same shape the
	 * section paragraphs use, so inline links Just Work).
	 */
	introParagraphs?: readonly SummaryFragment[][];
};

export type ContentCard = StatCard | LearnMoreCard;

/**
 * One section on the bank-runs page. H2 heading + an ordered list of
 * paragraphs; each paragraph is a sequence of fragments (with optional
 * inline links). Mirrors `ComparisonPointData.summary` so the same
 * `SummaryFragmentSpan` logic can be reused.
 *
 * An optional `cards` block is rendered *after* the paragraphs. When
 * two `StatCard`s are present they share a 2-col grid (collapsing to
 * 1-col on mobile). A single `LearnMoreCard` spans the full width.
 */
export type ContentSection = {
	/** Translation key for the H2. */
	headingKey: string;
	/** Paragraphs, each a fragment sequence. */
	paragraphs: readonly SummaryFragment[][];
	/** Optional card block rendered after the paragraphs. */
	cards?: readonly ContentCard[];
	/**
	 * When true, the section's H2 and paragraphs are center-aligned.
	 * Used by the "What is a bank run?" intro to give it a more
	 * explanatory, standout feel.
	 */
	centered?: boolean;
};

/** Source citation displayed in the final "Sources" section. */
export type ContentSource = {
	url: string;
	label: string;
};

export type ContentPageData = {
	slug: string;
	namespace: string;
	metaImage: string;

	/**
	 * H1 parts. `title` is always rendered (white). `subtitle`, when
	 * present, renders on a second line in Bitcoin orange. For pages
	 * where the whole headline fits in a single translation key,
	 * just set `title` and leave `subtitle` undefined.
	 */
	headerKeys: {
		title: string;
		subtitle?: string;
	};

	/** Page title (meta, Article headline). */
	titleKey: string;
	/** Meta description. */
	descriptionKey: string;

	/** Body sections in order. */
	sections: readonly ContentSection[];

	/** Sources cited at the bottom. Omit to hide the sources section entirely. */
	sources?: readonly ContentSource[];
};

// ─── External URLs used by the card blocks ────────────────────────────
const FED_RESERVE_REQ_URL =
	"https://www.federalreserve.gov/monetarypolicy/reservereq.htm";
const BITCOIN_WHITEPAPER_URL = "https://bitcoin.org/bitcoin.pdf";
const SVB_UW_LAW_URL = "https://www.law.uw.edu/news-events/news/2023/svb-collapse";
const FDIC_STATS_URL =
	"https://www.fdic.gov/quarterly-banking-profile/fdic-statistics-glance";

/**
 * /bank-runs page data — 4 tight sections:
 *   1. What is a bank run?
 *   2. Silicon Valley Bank: a real example
 *   3. FDIC insurance covers about 1% of deposits
 *   4. Bitcoin doesn't have bank runs
 */
export const BANK_RUNS: ContentPageData = {
	slug: "bank-runs",
	namespace: "bank-runs",
	metaImage: "/img/meta/meta-bank-runs-v2.png",
	headerKeys: {
		title: "bank_runs_header",
	},
	titleKey: "bitcoin_doesnt_have_bank_runs",
	descriptionKey: "bank_runs_page_description",
	sections: [
		// ── 1. What is a bank run? ─────────────────────────────────────────
		{
			headingKey: "bank_runs_what",
			centered: true,
			paragraphs: [
				[{ key: "bank_runs_what_p1" }],
				[{ key: "bank_runs_what_p2" }],
			],
			cards: [
				{
					type: "stat",
					labelKey: "bank_runs_card_bank_reserve_label",
					valueLiteral: "0%",
					valueTone: "danger",
					detailKey: "bank_runs_card_bank_reserve_detail",
					sourceKey: "bank_runs_card_bank_reserve_source",
					href: FED_RESERVE_REQ_URL,
					external: true,
				},
				{
					type: "stat",
					labelKey: "bank_runs_card_btc_reserve_label",
					valueLiteral: "100%",
					valueTone: "success",
					detailKey: "bank_runs_card_btc_reserve_detail",
					sourceKey: "bank_runs_card_btc_reserve_source",
					href: BITCOIN_WHITEPAPER_URL,
					external: true,
				},
			],
		},

		// ── 2. SVB: a real example ─────────────────────────────────────────
		{
			headingKey: "bank_runs_svb_heading",
			paragraphs: [
				[
					{ key: "bank_runs_svb_p1_a" },
					{
						key: "bank_runs_svb_p1_link",
						href: "/bitcoin-vs-bonds",
						localize: true,
					},
					{ key: "bank_runs_svb_p1_b" },
				],
				[{ key: "bank_runs_svb_p2" }],
			],
			cards: [
				{
					type: "learn-more",
					labelKey: "bank_runs_card_svb_label",
					titleKey: "bank_runs_card_svb_title",
					sourceKey: "bank_runs_card_svb_source",
					href: SVB_UW_LAW_URL,
					external: true,
				},
			],
		},

		// ── 3. FDIC covers ~1% ─────────────────────────────────────────────
		{
			headingKey: "bank_runs_fdic_heading",
			paragraphs: [
				[{ key: "bank_runs_fdic_p1" }],
				[
					{ key: "bank_runs_fdic_p2_a" },
					{
						key: "bank_runs_fdic_p2_link",
						href: "/inflation",
						localize: true,
					},
					{ key: "bank_runs_fdic_p2_b" },
				],
			],
			cards: [
				{
					type: "stat",
					labelKey: "bank_runs_card_fdic_label",
					// TODO(live-data commit 2): <FdicStats> Client Component
					// will overwrite these two fields at runtime via their
					// DOM ids. For now we render a Q4 2025 snapshot as the
					// static server-rendered value so crawlers still see a
					// sensible number on first paint.
					valueKey: "bank_runs_card_fdic_value",
					valueTone: "danger",
					detailKey: "bank_runs_card_fdic_detail",
					sourceKey: "bank_runs_card_fdic_source",
					href: FDIC_STATS_URL,
					external: true,
					valueDomId: "stat-fdic-coverage-value",
					detailDomId: "stat-fdic-coverage-detail",
				},
				{
					type: "stat",
					labelKey: "bank_runs_card_btc_fdic_label",
					valueLiteral: "100%",
					valueTone: "success",
					detailKey: "bank_runs_card_btc_fdic_detail",
					sourceKey: "bank_runs_card_btc_fdic_source",
					href: BITCOIN_WHITEPAPER_URL,
					external: true,
				},
			],
		},

		// ── 4. Bitcoin is the solution ─────────────────────────────────────
		{
			headingKey: "bank_runs_bitcoin_heading",
			paragraphs: [
				[{ key: "bank_runs_bitcoin_p1" }],
				[{ key: "bank_runs_bitcoin_p2" }],
				[{ key: "bank_runs_bitcoin_p3" }],
			],
			cards: [
				{
					type: "learn-more",
					labelKey: "bank_runs_card_wallet_label",
					titleKey: "bank_runs_card_wallet_title",
					sourceKey: "bank_runs_card_wallet_source",
					href: "/wallets",
					localize: true,
				},
			],
		},
	],
	sources: [
		{
			url: "https://www.fdic.gov/quarterly-banking-profile/fdic-statistics-glance",
			label: "FDIC — Statistics at a Glance (Deposit Insurance Fund)",
		},
		{
			url: "https://www.fdic.gov/news/press-releases/2023/pr23016.html",
			label: "FDIC — Press Release: Silicon Valley Bank, Santa Clara, California (March 10, 2023)",
		},
		{
			url: "https://www.fdic.gov/analysis/quarterly-banking-profile",
			label: "FDIC — Quarterly Banking Profile (Insured Deposits)",
		},
		{
			url: "https://www.federalreserve.gov/monetarypolicy/reservereq.htm",
			label: "Federal Reserve — Reserve Requirements",
		},
		{
			url: "https://www.law.uw.edu/news-events/news/2023/svb-collapse",
			label: "University of Washington School of Law — SVB Collapse Explainer",
		},
		{
			url: "https://bitcoin.org/bitcoin.pdf",
			label: "Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
		},
	],
};
