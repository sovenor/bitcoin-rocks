/**
 * Data for the `/bank-runs` page.
 *
 * Shape differs from the other comparison pages: there are no "chip
 * pairs", just H2 + prose sections. `ContentPageLayout` renders these
 * instead of `ComparisonPageLayout`.
 */

import type { SummaryFragment } from "./types";

/**
 * One section on the bank-runs page. H2 heading + an ordered list of
 * paragraphs; each paragraph is a sequence of fragments (with optional
 * inline links). Mirrors `ComparisonPointData.summary` so the same
 * `SummaryFragmentSpan` logic can be reused.
 */
export type ContentSection = {
	/** Translation key for the H2. */
	headingKey: string;
	/** Paragraphs, each a fragment sequence. */
	paragraphs: readonly SummaryFragment[][];
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

	/** H1 parts: two lines (white title / orange subtitle). */
	headerKeys: {
		title: string;
		subtitle: string;
	};

	/** Page title (meta, Article headline). */
	titleKey: string;
	/** Meta description. */
	descriptionKey: string;

	/** Body sections in order. */
	sections: readonly ContentSection[];

	/** Sources cited at the bottom. */
	sources: readonly ContentSource[];
};

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
		subtitle: "bank_runs_header_2",
	},
	titleKey: "bitcoin_doesnt_have_bank_runs",
	descriptionKey: "bank_runs_page_description",
	sections: [
		// ── 1. What is a bank run? ─────────────────────────────────────────
		{
			headingKey: "bank_runs_what",
			paragraphs: [
				[{ key: "bank_runs_what_p1" }],
				[{ key: "bank_runs_what_p2" }],
			],
		},

		// ── 2. SVB: a real example ─────────────────────────────────────────
		{
			headingKey: "bank_runs_svb_heading",
			paragraphs: [
				[
					{
						key: "bank_runs_svb_p1",
						href: "https://www.fdic.gov/news/press-releases/2023/pr23016.html",
						external: true,
					},
				],
				[{ key: "bank_runs_svb_p2" }],
			],
		},

		// ── 3. FDIC covers ~1% ─────────────────────────────────────────────
		{
			headingKey: "bank_runs_fdic_heading",
			paragraphs: [
				[
					{
						key: "bank_runs_fdic_p1",
						href: "https://www.fdic.gov/analysis/quarterly-banking-profile/statistics-at-a-glance",
						external: true,
					},
				],
				[
					{
						key: "bank_runs_fdic_p2",
						href: "/inflation",
						localize: true,
					},
				],
			],
		},

		// ── 4. Bitcoin is the solution ─────────────────────────────────────
		{
			headingKey: "bank_runs_bitcoin_heading",
			paragraphs: [
				[{ key: "bank_runs_bitcoin_p1" }],
				[{ key: "bank_runs_bitcoin_p2" }],
				[
					{
						key: "bank_runs_bitcoin_wallet_cta",
						href: "/wallets",
						localize: true,
					},
				],
				[{ key: "bank_runs_bitcoin_p3" }],
			],
		},
	],
	sources: [
		{
			url: "https://www.fdic.gov/analysis/quarterly-banking-profile/statistics-at-a-glance",
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
			url: "https://bitcoin.org/bitcoin.pdf",
			label: "Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
		},
	],
};
