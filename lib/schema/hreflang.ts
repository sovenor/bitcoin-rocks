/**
 * Hreflang link generation for the Next.js Metadata API.
 *
 * Google uses `<link rel="alternate" hreflang="xx">` tags (or the
 * sitemap's `xhtml:link` equivalent) to know that the same page exists
 * in multiple languages. Emitting these correctly is ~half of the SEO
 * payoff of this whole migration.
 *
 * Callers wire this into a page's `generateMetadata()`:
 *
 *   export async function generateMetadata(): Promise<Metadata> {
 *     return {
 *       alternates: buildAlternates({ slug: "inflation", locale }),
 *     };
 *   }
 *
 * Also exposes the raw mapping for use inside the XML sitemap.
 */

import { buildUrl } from "../site";
import { defaultLocale, locales, type Locale } from "../i18n/config";

export type AlternatesInput = {
	/** Current locale being served. */
	locale: Locale;
	/** Canonical slug (e.g. `""`, `"inflation"`, `"business/wallets"`). */
	slug: string;
};

/**
 * Build the `alternates` object for a Next.js `Metadata` export.
 * - `canonical` points to the current locale's URL.
 * - `languages` maps every locale code to its localized URL.
 * - `x-default` is the English URL (Google's convention).
 */
export function buildAlternates(input: AlternatesInput) {
	const slug = input.slug.replace(/^\/+|\/+$/g, "");
	const languages: Record<string, string> = {};

	for (const loc of locales) {
		languages[loc] = buildUrl(loc, slug);
	}
	languages["x-default"] = buildUrl(defaultLocale, slug);

	return {
		canonical: buildUrl(input.locale, slug),
		languages,
	};
}

/**
 * Build the raw hreflang mapping for a page — used by the sitemap to
 * emit `<xhtml:link rel="alternate" hreflang="…" href="…" />` entries
 * per URL entry (Google's preferred way to signal multilingual
 * alternates at scale without polluting every `<head>`).
 */
export function buildHreflangMap(slug: string): Record<string, string> {
	const out: Record<string, string> = {};
	for (const loc of locales) {
		out[loc] = buildUrl(loc, slug);
	}
	out["x-default"] = buildUrl(defaultLocale, slug);
	return out;
}
