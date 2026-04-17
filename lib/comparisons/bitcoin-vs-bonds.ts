/**
 * Data for the `/bitcoin-vs-bonds` comparison page.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_BONDS: ComparisonPageData = {
	slug: "bitcoin-vs-bonds",
	namespace: "bitcoin-vs-bonds",
	metaImage: "/img/meta/meta-bonds-v1.png",
	headerKeys: {
		part1: "bonds_header",
		bitcoin: "bonds_header_2",
		and: "bonds_header_3",
		asset: "bonds_header_4",
	},
	// Treasury-green / financial-paper tone.
	assetAccentColor: "#4A8C5E",
	introKeys: ["bonds_intro_1", "bonds_intro_2", "bonds_intro_3"],
	assetLabelKey: "bonds",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_bonds",
	descriptionKey: "bonds_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "bonds_point_1",
			summary: [
				[
					{ key: "point_1_summary_1" },
					{ key: "point_1_summary_2" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "bonds_point_2",
			summary: [
				[
					{ key: "point_2_summary_1" },
					{
						key: "point_2_summary_2",
						href: "/inflation",
						localize: true,
					},
					{ key: "point_2_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "bonds_point_3",
			summary: [
				[
					{ key: "point_3_summary_1" },
					{
						key: "point_3_summary_2",
						href: "/bank-runs",
						localize: true,
					},
					{ key: "point_3_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_4",
			assetKey: "bonds_point_4",
			summary: [
				[
					{ key: "point_4_summary_1" },
					{
						key: "point_4_summary_2",
						href: "https://www.marketwatch.com/story/10-year-yield-hits-session-highs-after-weakest-auction-since-2009-01670870916",
						external: true,
					},
					{ key: "point_4_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "bonds_point_5",
			summary: [
				[
					{ key: "point_5_summary_1" },
					{ key: "point_5_summary_2" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "bonds_point_6",
			summary: [
				[
					{ key: "point_6_summary_1" },
					{
						key: "point_6_summary_2",
						href: "/wallets",
						localize: true,
					},
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_7",
			assetKey: "bonds_point_7",
			summary: [
				[
					{ key: "point_7_summary_1" },
					{ key: "point_7_summary_2" },
				],
			],
		},
	],
	sources: [
		{
			url: "https://www.treasurydirect.gov/auctions/results/",
			label: "TreasuryDirect — Treasury Auction Results",
		},
		{
			url: "https://www.marketwatch.com/story/10-year-yield-hits-session-highs-after-weakest-auction-since-2009-01670870916",
			label:
				"MarketWatch — Weakest 10-year Treasury Auction Since 2009 (2022)",
		},
		{
			url: "https://bitcoin.org/bitcoin.pdf",
			label:
				"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
		},
		{
			url: "https://github.com/bitcoin/bitcoin",
			label: "Bitcoin Source Code — 21 Million Supply Cap",
		},
	],
};
