import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n/config";
import { getPublishedPages } from "@/lib/pages";
import { getDateModifiedFromNamespace } from "@/lib/schema/date-modified";
import { buildHreflangMap } from "@/lib/schema/hreflang";
import { buildUrl } from "@/lib/site";

/**
 * Generate `/sitemap.xml` at request time.
 *
 * Emits one entry per `(page, locale)` combination, each cross-linked
 * via `alternates.languages` (Next serializes this into the
 * `<xhtml:link rel="alternate">` tags Google expects for multilingual
 * sitemaps). `lastModified` comes from the English JSON's
 * `@metadata.last-updated` so content updates automatically invalidate
 * the sitemap date without a manual edit.
 *
 * Only pages with `published: true` in `lib/pages.ts` are included so
 * we never advertise URLs that still 404 during the migration. Each
 * phase flips its own pages to `published: true` as it ports them.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const published = getPublishedPages();

	const entries: MetadataRoute.Sitemap = [];

	for (const page of published) {
		const lastUpdated = page.namespace
			? await getDateModifiedFromNamespace(page.namespace)
			: new Date().toISOString().slice(0, 10);
		const lastModified = new Date(lastUpdated);

		const alternates = {
			languages: buildHreflangMap(page.slug),
		};

		for (const locale of locales) {
			entries.push({
				url: buildUrl(locale, page.slug),
				lastModified,
				changeFrequency: page.changeFrequency,
				priority: page.priority,
				alternates,
			});
		}
	}

	return entries;
}
