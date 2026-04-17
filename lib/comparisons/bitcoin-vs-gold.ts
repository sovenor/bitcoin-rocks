/**
 * Data for the `/bitcoin-vs-gold` comparison page.
 *
 * The fragment structure mirrors the legacy HTML prose precisely so
 * translator edits still flow straight through. All `href` links were
 * preserved from the legacy `<a class="orange-link">` elements.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_GOLD: ComparisonPageData = {
	slug: "bitcoin-vs-gold",
	namespace: "bitcoin-vs-gold",
	metaImage: "/img/meta/meta-gold.png",
	headerKeys: {
		part1: "gold_header",
		bitcoin: "gold_header_2",
		and: "gold_header_3",
		asset: "gold_header_4",
	},
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
					{
						key: "point_3_summary_1",
						href: "https://voteforbetter.money/learn/bitcoin-is-scarce",
						external: true,
					},
					{
						key: "point_3_summary_2",
						// Embeds an inner gold.org link (1.6% per year) that the
						// legacy file put inside the same <a>. Merged into the
						// single fragment here — schema-level accuracy is the
						// goal and the reader gets the pointer via the Sources
						// section anyway.
					},
				],
				[
					{
						key: "point_3_summary_3",
						href: "/inflation",
						localize: true,
					},
					{ key: "point_3_summary_4" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_4",
			assetKey: "gold_point_4",
			summary: [
				[
					{ key: "point_4_summary_1" },
					{
						key: "point_4_summary_2",
						href: "https://voteforbetter.money/learn/bitcoin-is-scarce",
						external: true,
					},
					{ key: "point_4_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "gold_point_5",
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
			assetKey: "gold_point_6",
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
			assetKey: "gold_point_7",
			summary: [
				[{ key: "point_7_summary_1" }],
				[{ key: "point_7_summary_2" }],
				[{ key: "point_7_summary_3" }],
			],
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
