/**
 * BreadcrumbList JSON-LD schema builder.
 *
 * Ports `scripts/inject-breadcrumb-schema.js`. Each page renders its own
 * trail via its server component by calling `buildBreadcrumbSchema()`
 * and passing the result to `<JsonLd />`.
 *
 * Hierarchy rules (mirroring the legacy script):
 *   - Root pages:     Home > Page Title
 *   - business/*:     Home > Bitcoin for Business > Page Title
 *   - nostr/*:        Home > Nostr > Page Title
 *   - sticker-files:  Home > Bitcoin Stickers > Sticker Files
 */

import { buildUrl, SITE_ORIGIN } from "../site";

export type BreadcrumbCrumb = {
	/** Display label (already translated). */
	name: string;
	/** Absolute URL the crumb points to. */
	url: string;
};

export type BreadcrumbInput = {
	/** Active locale for this request. */
	locale: string;
	/** Page slug (no leading slash). Homepage = empty string. */
	slug: string;
	/** The translated page title — used as the leaf crumb's name. */
	pageTitle: string;
	/** Optional: translated "Home" label (defaults to English "Home"). */
	homeLabel?: string;
	/** Optional: translated "Bitcoin for Business" label. */
	businessSectionLabel?: string;
	/** Optional: translated "Nostr" label. */
	nostrSectionLabel?: string;
	/** Optional: translated "Bitcoin Stickers" label. */
	stickersSectionLabel?: string;
};

/**
 * Build the ordered crumb trail for a given page. Returns an array of
 * `BreadcrumbCrumb` objects (no JSON-LD wrapper — pass through
 * `buildBreadcrumbSchema` below to emit).
 */
export function buildBreadcrumbTrail(input: BreadcrumbInput): BreadcrumbCrumb[] {
	const slug = input.slug.replace(/^\/+|\/+$/g, "");
	const locale = input.locale;
	const homeLabel = input.homeLabel ?? "Home";

	// Homepage gets no breadcrumb trail at all — caller should avoid rendering.
	const trail: BreadcrumbCrumb[] = [
		{ name: homeLabel, url: buildUrl(locale, "") },
	];

	if (slug === "") return trail;

	const businessLabel = input.businessSectionLabel ?? "Bitcoin for Business";
	const nostrLabel = input.nostrSectionLabel ?? "Nostr";
	const stickersLabel = input.stickersSectionLabel ?? "Bitcoin Stickers";

	if (slug === "business") {
		trail.push({ name: businessLabel, url: buildUrl(locale, "business") });
		return trail;
	}
	if (slug.startsWith("business/")) {
		trail.push({ name: businessLabel, url: buildUrl(locale, "business") });
		trail.push({ name: input.pageTitle, url: buildUrl(locale, slug) });
		return trail;
	}
	if (slug === "nostr") {
		trail.push({ name: nostrLabel, url: buildUrl(locale, "nostr") });
		return trail;
	}
	if (slug.startsWith("nostr/")) {
		trail.push({ name: nostrLabel, url: buildUrl(locale, "nostr") });
		trail.push({ name: input.pageTitle, url: buildUrl(locale, slug) });
		return trail;
	}
	if (slug.startsWith("sticker-files")) {
		trail.push({ name: stickersLabel, url: buildUrl(locale, "stickers") });
		trail.push({ name: input.pageTitle, url: buildUrl(locale, slug) });
		return trail;
	}

	// Default: Home > Page Title
	trail.push({ name: input.pageTitle, url: buildUrl(locale, slug) });
	return trail;
}

/** Build the JSON-LD `BreadcrumbList` object ready for <JsonLd />. */
export function buildBreadcrumbSchema(input: BreadcrumbInput) {
	const trail = buildBreadcrumbTrail(input);
	// Suppress the homepage-only case — no useful breadcrumb there.
	if (trail.length <= 1) return null;

	return {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: trail.map((crumb, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: crumb.name,
			item: crumb.url.startsWith("http") ? crumb.url : `${SITE_ORIGIN}${crumb.url}`,
		})),
	};
}
