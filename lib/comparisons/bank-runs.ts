/**
 * Data for the `/bank-runs` page.
 *
 * Shape differs from the other comparison pages: there are no "chip
 * pairs", just Q&A-style sections (H2 + prose). `ContentPageLayout`
 * renders these instead of `ComparisonPageLayout`.
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

	/** H1 parts: two lines ("BITCOIN DOESN'T HAVE BANK RUNS" / "BUT YOUR BANK MIGHT"). */
	headerKeys: {
		title: string; // First line
		subtitle: string; // Orange second line
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
 * /bank-runs page data.
 *
 * Mirrors `bank-runs.html` 1:1: 5 main sections covering bank runs,
 * SVB, FDIC limits, "safe banks", and how Bitcoin protects from all
 * of the above. Common "what is bitcoin" / "is it volatile" / "hacked"
 * sections are dropped because the Phase 7 comparison layout surfaces
 * a dedicated "What's next?" + sources flow that better funnels the
 * reader to the deeper pages (/wallets, /buy, /compound-inflation-calculator).
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
	descriptionKey: "bank_runs_what_content_1",
	sections: [
		{
			headingKey: "bank_runs_what",
			paragraphs: [
				[{ key: "bank_runs_what_content_1" }],
				[{ key: "bank_runs_what_content_2" }],
			],
		},
		{
			headingKey: "bank_runs_how",
			paragraphs: [
				[{ key: "bank_runs_how_content_1" }],
				[{ key: "bank_runs_how_content_2" }],
				[{ key: "bank_runs_how_content_3" }],
				[{ key: "bank_runs_how_content_4" }],
				[
					{
						key: "bank_runs_how_content_5",
						href: "https://www.cnbc.com/2023/03/10/silicon-valley-bank-collapse-how-it-happened.html",
						external: true,
					},
				],
				[{ key: "bank_runs_how_content_6" }],
				[{ key: "bank_runs_how_content_7" }],
				[{ key: "bank_runs_how_content_8" }],
			],
		},
		{
			headingKey: "bank_runs_fdic",
			paragraphs: [
				[{ key: "bank_runs_fdic_content_1" }],
				[{ key: "bank_runs_fdic_content_2" }],
				[{ key: "bank_runs_fdic_content_3" }],
				[
					{
						key: "bank_runs_fdic_content_4",
						href: "https://www.fdic.gov/news/speeches/2022/spsep0822.html",
						external: true,
					},
				],
				[{ key: "bank_runs_fdic_content_5" }],
				[
					{
						key: "bank_runs_fdic_content_6",
						href: "/inflation",
						localize: true,
					},
				],
			],
		},
		{
			headingKey: "bank_runs_safe",
			paragraphs: [
				[{ key: "bank_runs_safe_content_1" }],
				[
					{
						key: "bank_runs_safe_content_2",
						href: "https://caitlin-long.com/why-cant-we-just-have-safe-boring-banks/",
						external: true,
					},
				],
				[{ key: "bank_runs_safe_content_3" }],
				[{ key: "bank_runs_safe_content_4" }],
				[
					{
						key: "bank_runs_safe_content_5",
						href: "/inflation",
						localize: true,
					},
				],
				[{ key: "bank_runs_safe_content_6" }],
			],
		},
		{
			headingKey: "bank_runs_protect",
			paragraphs: [
				[{ key: "bank_runs_protect_content_1" }],
				[{ key: "bank_runs_protect_content_2" }],
				[
					{
						key: "bank_runs_protect_content_3",
						href: "/wallets",
						localize: true,
					},
				],
				[{ key: "bank_runs_protect_content_4" }],
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
			label:
				"FDIC — Press Release: Silicon Valley Bank, Santa Clara, California (March 10, 2023)",
		},
		{
			url: "https://www.fdic.gov/analysis/quarterly-banking-profile",
			label: "FDIC — Quarterly Banking Profile (Insured Deposits)",
		},
		{
			url: "https://www.federalreserve.gov/monetarypolicy/reservereq.htm",
			label: "Federal Reserve — Fractional Reserve Banking",
		},
		{
			url: "https://bitcoin.org/bitcoin.pdf",
			label:
				"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
		},
	],
};
