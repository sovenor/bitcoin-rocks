/**
 * Data for the `/bitcoin-vs-stocks` comparison page.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_STOCKS: ComparisonPageData = {
	slug: "bitcoin-vs-stocks",
	namespace: "bitcoin-vs-stocks",
	metaImage: "/img/meta/meta-stocks-v1.png",
	headerKeys: {
		part1: "stocks_header",
		bitcoin: "stocks_header_2",
		and: "stocks_header_3",
		asset: "stocks_header_4",
	},
	// Green — classic stock-market ticker color.
	assetAccentColor: "#1DFF4D",
	introKeys: ["stocks_intro_1", "stocks_intro_2", "stocks_intro_3"],
	assetLabelKey: "stocks",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_stocks",
	descriptionKey: "stocks_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "stocks_point_1",
			summary: [[{ key: "point_1_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "stocks_point_2",
			summary: [
				[
					{
						key: "point_2_summary_1",
						href: "https://voteforbetter.money/learn/bitcoin-is-scarce",
						external: true,
					},
					{ key: "point_2_summary_2" },
				],
				[
					{
						key: "point_2_summary_3",
						href: "/inflation",
						localize: true,
					},
					{ key: "point_2_summary_4" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "stocks_point_3",
			summary: [[{ key: "point_3_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_4",
			assetKey: "stocks_point_4",
			summary: [[{ key: "point_4_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "stocks_point_5",
			summary: [
				[
					{ key: "point_5_summary_1" },
					{
						key: "point_5_summary_2",
						href: "https://voteforbetter.money/learn/bitcoin-is-decentralized",
						external: true,
					},
					{ key: "point_5_summary_3" },
					{ key: "point_5_summary_4" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "stocks_point_6",
			summary: [
				[
					{ key: "point_6_summary_1" },
					{
						key: "point_6_summary_2",
						href: "/wallets",
						localize: true,
					},
				],
				[{ key: "point_6_summary_3" }],
				[{ key: "point_6_summary_4" }],
			],
		},
		{
			bitcoinKey: "bitcoin_point_7",
			assetKey: "stocks_point_7",
			summary: [[{ key: "point_7_summary_1" }]],
		},
	],
	sources: [
		{
			url: "https://bitcoin.org/bitcoin.pdf",
			label:
				"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
		},
		{
			url: "https://github.com/bitcoin/bitcoin",
			label: "Bitcoin Source Code — 21 Million Supply Cap",
		},
		{
			url: "https://www.sec.gov/newsroom/press-releases/2014-248",
			label: "U.S. Securities and Exchange Commission — Stock Dilution",
		},
	],
};
