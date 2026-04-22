/**
 * Data for the `/bitcoin-vs-cbdc` comparison page.
 *
 * April 2026 V2 refresh normalizes the H1 to the standard sentence-
 * case "The difference between Bitcoin and CBDCs" so every comparison
 * page shares one visual treatment. The legacy multi-part "WHAT
 * SHOULD DIGITAL MONEY LOOK LIKE?" H1 is gone.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_CBDC: ComparisonPageData = {
	slug: "bitcoin-vs-cbdc",
	namespace: "bitcoin-vs-cbdc",
	metaImage: "/img/meta/meta-cbdc.png",
	heroTitleKey: "hero_title",
	// CBDC accent — a muted blue-gray evocative of "government-controlled
	// digital money" without falling into Bitcoin orange territory.
	assetAccentColor: "#5A6B8C",
	introKeys: [
		"cbdc_intro_1",
		"cbdc_intro_2",
		"cbdc_intro_3",
		"cbdc_intro_4",
	],
	assetLabelKey: "cbdc",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_cbdcs",
	descriptionKey: "cbdc_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "cbdc_point_1",
			summary: [[{ key: "point_1_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "cbdc_point_2",
			summary: [[{ key: "point_2_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "cbdc_point_3",
			summary: [
				[
					{ key: "point_3_summary_1" },
					{ key: "point_3_summary_2", href: "/inflation", localize: true },
					{ key: "point_3_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_4",
			assetKey: "cbdc_point_4",
			summary: [[{ key: "point_4_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "cbdc_point_5",
			summary: [[{ key: "point_5_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "cbdc_point_6",
			summary: [[{ key: "point_6_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_7",
			assetKey: "cbdc_point_7",
			summary: [[{ key: "point_7_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_8",
			assetKey: "cbdc_point_8",
			summary: [
				[
					{ key: "point_8_summary_1" },
					{ key: "point_8_summary_2", href: "/wallets", localize: true },
					{ key: "point_8_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_9",
			assetKey: "cbdc_point_9",
			summary: [
				[
					{ key: "point_9_summary_1" },
					{ key: "point_9_summary_2", href: "/inflation", localize: true },
					{ key: "point_9_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_10",
			assetKey: "cbdc_point_10",
			summary: [[{ key: "point_10_summary_1" }]],
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
			url: "https://www.cbdctracker.org/",
			label: "CBDC Tracker — Global Central Bank Digital Currency Status",
		},
		{
			url: "https://hrf.org/programs/financial-freedom/",
			label: "Human Rights Foundation — Financial Freedom Program",
		},
	],
};
