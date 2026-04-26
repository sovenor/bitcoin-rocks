/**
 * Data for the `/bitcoin-vs-real-estate` comparison page.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_REAL_ESTATE: ComparisonPageData = {
	slug: "bitcoin-vs-real-estate",
	namespace: "bitcoin-vs-real-estate",
	metaImage: "/img/meta/meta-real-estate-v1.png",
	heroTitleKey: "hero_title",
	// Earth-tone brown, evocative of property/land.
	assetAccentColor: "#C99E6E",
	introKeys: ["real_estate_intro_1", "real_estate_intro_2", "real_estate_intro_3"],
	assetLabelKey: "real_estate",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_real_estate",
	descriptionKey: "real_estate_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "real_estate_point_1",
			summary: [[{ key: "point_1_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "real_estate_point_2",
			summary: [[{ key: "point_2_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "real_estate_point_3",
			summary: [[{ key: "point_3_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_4",
			assetKey: "real_estate_point_4",
			summary: [[{ key: "point_4_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "real_estate_point_5",
			summary: [[{ key: "point_5_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "real_estate_point_6",
			summary: [[{ key: "point_6_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_7",
			assetKey: "real_estate_point_7",
			summary: [[{ key: "point_7_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_8",
			assetKey: "real_estate_point_8",
			summary: [[{ key: "point_8_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_9",
			assetKey: "real_estate_point_9",
			summary: [[{ key: "point_9_summary_1" }]],
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
			url: "https://www.ohchr.org/en/special-procedures/sr-housing/financialization-housing",
			label:
				"United Nations Special Rapporteur — Financialization of Housing",
		},
	],
};
