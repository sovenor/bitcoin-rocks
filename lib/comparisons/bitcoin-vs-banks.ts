/**
 * Data for the `/bitcoin-vs-banks` comparison page.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_BANKS: ComparisonPageData = {
	slug: "bitcoin-vs-banks",
	namespace: "bitcoin-vs-banks",
	metaImage: "/img/meta/meta-banks-v1.png",
	headerKeys: {
		part1: "banks_header",
		bitcoin: "banks_header_2",
		and: "banks_header_3",
		asset: "banks_header_4",
	},
	// Red — classic "banks are dangerous" warning accent
	// (consistent with the `#96041C` freedom token in the legacy palette).
	assetAccentColor: "#C02C3E",
	introKeys: ["banks_intro_1", "banks_intro_2", "banks_intro_3"],
	assetLabelKey: "banks",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_banks",
	descriptionKey: "banks_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "banks_point_1",
			summary: [
				[
					{ key: "point_1_summary_1" },
					{
						key: "point_1_summary_2",
						href: "https://voteforbetter.money/learn/bitcoin-is-permissionless",
						external: true,
					},
					{ key: "point_1_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "banks_point_2",
			summary: [[{ key: "point_2_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "banks_point_3",
			summary: [
				[
					{ key: "point_3_summary_1" },
					{ key: "point_3_summary_2" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_4",
			assetKey: "banks_point_4",
			summary: [
				[
					{ key: "point_4_summary_1" },
					{
						key: "point_4_summary_2",
						href: "/wallets",
						localize: true,
					},
					{ key: "point_4_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "banks_point_5",
			summary: [[{ key: "point_5_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "banks_point_6",
			summary: [[{ key: "point_6_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_7",
			assetKey: "banks_point_7",
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
			url: "https://www.fdic.gov/bank-failures/bank-failures-year",
			label: "FDIC — Failed Bank List",
		},
	],
};
