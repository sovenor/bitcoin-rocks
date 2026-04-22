/**
 * Data for the `/bitcoin-vs-gold` comparison page.
 *
 * April 2026 refresh: single-line sentence-case H1 via `heroTitleKey`,
 * condensed explanation paragraphs, word-scoped inline links.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_GOLD: ComparisonPageData = {
	slug: "bitcoin-vs-gold",
	namespace: "bitcoin-vs-gold",
	metaImage: "/img/meta/meta-gold.png",
	heroTitleKey: "hero_title",
	// Metallic gold — matches `.gold` / `.force-gold` in legacy css/style.css.
	assetAccentColor: "#EBC61F",
	introKeys: ["gold_intro_1", "gold_intro_2", "gold_intro_3"],
	assetLabelKey: "gold",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_gold",
	descriptionKey: "gold_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "gold_point_1",
			summary: [[{ key: "point_1_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "gold_point_2",
			summary: [[{ key: "point_2_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "gold_point_3",
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
			assetKey: "gold_point_4",
			summary: [[{ key: "point_4_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "gold_point_5",
			summary: [[{ key: "point_5_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "gold_point_6",
			summary: [[{ key: "point_6_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_7",
			assetKey: "gold_point_7",
			summary: [[{ key: "point_7_summary_1" }]],
		},
	],
	sources: [
		{
			url: "https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics",
			label: "World Gold Council — Gold Supply & Demand Data",
		},
		{
			url: "https://bitnodes.io/nodes/all/",
			label: "Bitnodes — Bitcoin Network Node Count",
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
