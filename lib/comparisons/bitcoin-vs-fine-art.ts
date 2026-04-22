/**
 * Data for the `/bitcoin-vs-fine-art` comparison page.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_FINE_ART: ComparisonPageData = {
	slug: "bitcoin-vs-fine-art",
	namespace: "bitcoin-vs-fine-art",
	metaImage: "/img/meta/meta-fine-art-v1.png",
	heroTitleKey: "hero_title",
	// Muted gold / old-master ochre — evokes auction-house prestige.
	assetAccentColor: "#C7A858",
	introKeys: [
		"fine_art_intro_1",
		"fine_art_intro_2",
		"fine_art_intro_3",
	],
	assetLabelKey: "fine_art",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_fine_art",
	descriptionKey: "fine_art_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "fine_art_point_1",
			summary: [[{ key: "point_1_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "fine_art_point_2",
			summary: [[{ key: "point_2_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "fine_art_point_3",
			summary: [[{ key: "point_3_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_4",
			assetKey: "fine_art_point_4",
			summary: [[{ key: "point_4_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "fine_art_point_5",
			summary: [[{ key: "point_5_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "fine_art_point_6",
			summary: [[{ key: "point_6_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_7",
			assetKey: "fine_art_point_7",
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
			url: "https://www.sothebys.com/en/buyers-premium-terms",
			label: "Sotheby's — Buyer's Premium Reference",
		},
	],
};
