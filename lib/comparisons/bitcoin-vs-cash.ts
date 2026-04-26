/**
 * Data for the `/bitcoin-vs-cash` comparison page.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_CASH: ComparisonPageData = {
	slug: "bitcoin-vs-cash",
	namespace: "bitcoin-vs-cash",
	metaImage: "/img/meta/meta-cash-v1.png",
	heroTitleKey: "hero_title",
	// Dollar-bill green — the same token as `.cash` in legacy css/style.css.
	assetAccentColor: "#85BB65",
	introKeys: ["cash_intro_1", "cash_intro_2", "cash_intro_3"],
	assetLabelKey: "cash",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_cash",
	descriptionKey: "cash_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "cash_point_1",
			summary: [[{ key: "point_1_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "cash_point_2",
			summary: [[{ key: "point_2_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "cash_point_3",
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
			assetKey: "cash_point_4",
			summary: [[{ key: "point_4_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "cash_point_5",
			summary: [[{ key: "point_5_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "cash_point_6",
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
			assetKey: "cash_point_7",
			summary: [[{ key: "point_7_summary_1" }]],
		},
	],
	sources: [
		{
			url: "https://rbi.org.in/Scripts/NotificationUser.aspx?Id=10698",
			label:
				"Reserve Bank of India — Withdrawal of ₹500 and ₹1000 Banknotes (November 8, 2016)",
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
