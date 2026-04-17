/**
 * Article / WebPage JSON-LD schema builder.
 *
 * Ports `scripts/inject-article-schema.js`. Replaces the build-time HTML
 * injection with a render-time helper — each page's server component
 * calls `buildArticleSchema()` and renders the result via <JsonLd />.
 *
 * The distinction between Article vs WebPage is content-driven: educational
 * "content" pages (inflation, bank-runs, bitcoin-vs-*, wallets, etc.) are
 * Article; navigational / meta pages (about, get-involved) default to
 * WebPage. Callers override via `schemaType` if needed.
 */

import { buildUrl, SITE_PUBLISHED_DATE } from "../site";
import { ORGANIZATION_REF } from "./organization";
import { getDateModified } from "./date-modified";

export type ArticleSchemaType = "Article" | "WebPage";

export type ArticleSchemaInput = {
	/** Page slug (no leading slash). Empty string = homepage. */
	slug: string;
	/** Active locale for this request. */
	locale: string;
	/** The translated page title. */
	headline: string;
	/** The translated meta description. */
	description: string;
	/** Optional: override the default schema type. */
	schemaType?: ArticleSchemaType;
	/** Optional: page-specific share image URL (absolute or site-relative). */
	image?: string;
	/** Optional: override `dateModified`. By default we read the English JSON `@metadata.last-updated`. */
	dateModified?: string;
};

/**
 * Slugs that should default to Article (vs WebPage). Mirror of
 * `ARTICLE_SLUGS` in scripts/inject-article-schema.js.
 */
const ARTICLE_SLUGS = new Set<string>([
	"inflation",
	"bank-runs",
	"wallets",
	"lightning",
	"buy",
	"bitcoin-vs-gold",
	"bitcoin-vs-stocks",
	"bitcoin-vs-cash",
	"bitcoin-vs-cbdc",
	"bitcoin-vs-crypto",
	"bitcoin-vs-banks",
	"bitcoin-vs-bonds",
	"bitcoin-vs-visa",
	"bitcoin-vs-real-estate",
	"bitcoin-vs-fine-art",
	"compound-inflation-calculator",
	"get-involved",
	"flyers",
	"stickers",
	"postcards",
	"signs",
	"business",
	"business/why",
	"business/faq",
	"business/guide",
	"business/wallets",
	"business/accounting",
	"business/stickers",
	"business/maps",
	"business/kit",
	"nostr",
	"nostr/what-is-nostr",
]);

/**
 * Pick the default schema type for a slug. Callers can override via
 * `schemaType` on the input.
 */
export function defaultSchemaType(slug: string): ArticleSchemaType {
	const normalized = slug.replace(/^\/+|\/+$/g, "");
	return ARTICLE_SLUGS.has(normalized) ? "Article" : "WebPage";
}

export async function buildArticleSchema(input: ArticleSchemaInput) {
	const normalizedSlug = input.slug.replace(/^\/+|\/+$/g, "");
	const url = buildUrl(input.locale, normalizedSlug);
	const schemaType = input.schemaType ?? defaultSchemaType(normalizedSlug);
	const dateModified =
		input.dateModified ?? (await getDateModified(normalizedSlug));

	const image = input.image
		? input.image.startsWith("http")
			? input.image
			: `https://bitcoin.rocks${input.image.startsWith("/") ? "" : "/"}${input.image}`
		: undefined;

	const schema: Record<string, unknown> = {
		"@context": "https://schema.org",
		"@type": schemaType,
		headline: input.headline,
		description: input.description,
		url,
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": url,
		},
		author: ORGANIZATION_REF,
		publisher: ORGANIZATION_REF,
		datePublished: SITE_PUBLISHED_DATE,
		dateModified,
		inLanguage: input.locale,
	};

	if (image) {
		schema.image = image;
	}

	return schema;
}
