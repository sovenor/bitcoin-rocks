/**
 * Data for the `/bitcoin-vs-visa` comparison page.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_VISA: ComparisonPageData = {
	slug: "bitcoin-vs-visa",
	namespace: "bitcoin-vs-visa",
	metaImage: "/img/meta/meta-visa-v1.png",
	heroTitleKey: "hero_title",
	// Visa blue — but pulled darker so the orange Bitcoin word stays dominant.
	assetAccentColor: "#1A1F71",
	introKeys: ["visa_intro_1", "visa_intro_2", "visa_intro_3"],
	assetLabelKey: "visa",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_visa",
	descriptionKey: "visa_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "visa_point_1",
			summary: [[{ key: "point_1_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "visa_point_2",
			summary: [
				[
					{ key: "point_2_summary_1" },
					{ key: "point_2_summary_2", href: "/business", localize: true },
					{ key: "point_2_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "visa_point_3",
			summary: [[{ key: "point_3_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_4",
			assetKey: "visa_point_4",
			summary: [[{ key: "point_4_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "visa_point_5",
			summary: [[{ key: "point_5_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "visa_point_6",
			summary: [
				[
					{ key: "point_6_summary_1" },
					{ key: "point_6_summary_2", href: "/wallets", localize: true },
					{ key: "point_6_summary_3" },
				],
			],
		},
		{
			bitcoinKey: "bitcoin_point_7",
			assetKey: "visa_point_7",
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
			url: "https://usa.visa.com/about-visa/our_business/fees-interchange.html",
			label: "Visa — Fees & Interchange Reference",
		},
	],
};
