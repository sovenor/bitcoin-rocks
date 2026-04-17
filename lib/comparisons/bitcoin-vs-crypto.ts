/**
 * Data for the `/bitcoin-vs-crypto` comparison page.
 */

import type { ComparisonPageData } from "./types";

export const BITCOIN_VS_CRYPTO: ComparisonPageData = {
	slug: "bitcoin-vs-crypto",
	namespace: "bitcoin-vs-crypto",
	metaImage: "/img/meta/meta-crypto-v1.png",
	headerKeys: {
		part1: "crypto_header",
		bitcoin: "crypto_header_2",
		and: "crypto_header_3",
		asset: "crypto_header_4",
	},
	// Generic "crypto purple" — distinct from Bitcoin orange so
	// readers immediately see the contrast at a glance.
	assetAccentColor: "#B072E8",
	introKeys: ["crypto_intro_1", "crypto_intro_2", "crypto_intro_3"],
	assetLabelKey: "crypto",
	bitcoinLabelKey: "bitcoin",
	titleKey: "bitcoin_vs_crypto",
	descriptionKey: "crypto_intro_3",
	points: [
		{
			bitcoinKey: "bitcoin_point_1",
			assetKey: "crypto_point_1",
			summary: [[{ key: "point_1_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_2",
			assetKey: "crypto_point_2",
			summary: [[{ key: "point_2_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_3",
			assetKey: "crypto_point_3",
			summary: [[{ key: "point_3_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_4",
			assetKey: "crypto_point_4",
			summary: [[{ key: "point_4_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_5",
			assetKey: "crypto_point_5",
			// Note: `point_5_summary_1` embeds an inline `<a>` to the
			// Bitcoin whitepaper inside the translation string itself.
			// We render it through `dangerouslySetInnerHTML` in
			// ComparisonPageLayout so the inline link survives, rather
			// than splitting the key. Consistent with Phase 7a cash/gold
			// precedent for inline HTML inside translations.
			summary: [[{ key: "point_5_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_6",
			assetKey: "crypto_point_6",
			summary: [[{ key: "point_6_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_7",
			assetKey: "crypto_point_7",
			summary: [[{ key: "point_7_summary_1" }]],
		},
		{
			bitcoinKey: "bitcoin_point_8",
			assetKey: "crypto_point_8",
			summary: [[{ key: "point_8_summary_1" }]],
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
			url: "https://bitnodes.io/nodes/all/",
			label: "Bitnodes — Bitcoin Network Node Count",
		},
	],
};
