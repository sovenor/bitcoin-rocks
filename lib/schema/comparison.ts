/**
 * Comparison (ItemList) JSON-LD schema builder for Bitcoin vs * pages.
 *
 * Ports `scripts/inject-comparison-schema.js`. In the legacy script the
 * comparison points were scraped out of HTML at build time; in the Next
 * version, each comparison page will pass the already-translated points
 * in directly as data. This keeps the translator workflow unchanged
 * (strings still live in the JSON files) and the schema generation type-safe.
 */

import { buildUrl } from "../site";

/**
 * Configuration per compared asset. Mirrors COMPARISON_PAGES in the
 * legacy script. Extensible: add new pages here when they get ported.
 */
export const COMPARISON_CONFIG: Record<
	string,
	{ comparedItem: string; comparedType: string; comparedDescription: string }
> = {
	"bitcoin-vs-gold": {
		comparedItem: "Gold",
		comparedType: "commodity",
		comparedDescription:
			"A precious metal used as money and store of value for thousands of years",
	},
	"bitcoin-vs-stocks": {
		comparedItem: "Stocks",
		comparedType: "financial instrument",
		comparedDescription:
			"Ownership shares in publicly traded companies",
	},
	"bitcoin-vs-cash": {
		comparedItem: "Cash",
		comparedType: "currency",
		comparedDescription:
			"Physical government-issued paper money and coins",
	},
	"bitcoin-vs-banks": {
		comparedItem: "Banks",
		comparedType: "financial institution",
		comparedDescription:
			"Traditional financial institutions that act as intermediaries for money",
	},
	"bitcoin-vs-cbdc": {
		comparedItem: "CBDCs",
		comparedType: "digital currency",
		comparedDescription:
			"Central Bank Digital Currencies issued and controlled by governments",
	},
	"bitcoin-vs-bonds": {
		comparedItem: "Bonds",
		comparedType: "financial instrument",
		comparedDescription:
			"Government or corporate debt securities with fixed yields",
	},
	"bitcoin-vs-crypto": {
		comparedItem: "Crypto",
		comparedType: "digital asset",
		comparedDescription:
			"Other cryptocurrency tokens and blockchain projects beyond Bitcoin",
	},
	"bitcoin-vs-visa": {
		comparedItem: "Visa",
		comparedType: "payment network",
		comparedDescription:
			"A credit card payment network operated by financial institutions",
	},
	"bitcoin-vs-real-estate": {
		comparedItem: "Real Estate",
		comparedType: "property",
		comparedDescription:
			"Physical property and land used as investment and store of value",
	},
	"bitcoin-vs-fine-art": {
		comparedItem: "Fine Art",
		comparedType: "collectible",
		comparedDescription:
			"Physical artwork used as luxury investment and store of value",
	},
};

export type ComparisonPoint = {
	/** Bitcoin's trait on this criterion. */
	bitcoin: string;
	/** The compared asset's trait on this criterion. */
	asset: string;
	/** Explanation paragraph (plain text, already translated). */
	explanation: string;
};

export type ComparisonSchemaInput = {
	/** Comparison page slug (e.g. `"bitcoin-vs-gold"`). */
	slug: string;
	/** Active locale for this request. */
	locale: string;
	/** The translated page meta description (used for the ItemList description). */
	description: string;
	/** Ordered list of comparison points (translated text). */
	points: readonly ComparisonPoint[];
	/** Optional: page share image URL (absolute or site-relative). */
	image?: string;
};

export function buildComparisonSchema(input: ComparisonSchemaInput) {
	const slug = input.slug.replace(/^\/+|\/+$/g, "");
	const config = COMPARISON_CONFIG[slug];
	if (!config) return null;
	if (input.points.length === 0) return null;

	const url = buildUrl(input.locale, slug);

	const image = input.image
		? input.image.startsWith("http")
			? input.image
			: `https://bitcoin.rocks${input.image.startsWith("/") ? "" : "/"}${input.image}`
		: undefined;

	const schema: Record<string, unknown> = {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: `Bitcoin vs ${config.comparedItem} — Key Differences`,
		description:
			input.description ||
			`A detailed comparison of Bitcoin and ${config.comparedItem} across ${input.points.length} key criteria.`,
		url,
		numberOfItems: input.points.length,
		about: [
			{
				"@type": "Thing",
				name: "Bitcoin",
				description:
					"A decentralized digital money created in 2009 with a fixed supply of 21 million coins",
				url: "https://bitcoin.rocks",
			},
			{
				"@type": "Thing",
				name: config.comparedItem,
				description: config.comparedDescription,
			},
		],
		itemListElement: input.points.map((pt, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: `Bitcoin: ${pt.bitcoin} vs ${config.comparedItem}: ${pt.asset}`,
			description: pt.explanation,
		})),
	};

	if (image) {
		schema.image = image;
	}

	return schema;
}
