import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getPageTranslations } from "@/lib/i18n/page-translations";

import { OG_PAGE_STRINGS } from "./page-strings";
import { renderOgImage } from "./render-og";

export { OG_SIZE, OG_CONTENT_TYPE } from "./render-og";

/**
 * Per-page `opengraph-image.tsx` files in `app/[locale]/<slug>/`
 * delegate to this helper. It picks up the slug's title/subtitle keys
 * from `OG_PAGE_STRINGS`, resolves them in the requested locale, and
 * hands the strings to the shared image factory.
 */
export async function ogHandler(slug: string, rawLocale: string) {
	try {
		if (!isValidLocale(rawLocale)) {
			throw new Error(`opengraph-image: invalid locale "${rawLocale}"`);
		}
		const locale: Locale = rawLocale;

		const strings = OG_PAGE_STRINGS[slug];
		if (!strings) {
			throw new Error(
				`opengraph-image: no OG strings registered for slug "${slug}"`,
			);
		}

		const t = await getPageTranslations(locale, strings.namespace);
		const title = t(strings.titleKey);

		return await renderOgImage({ locale, title });
	} catch (err) {
		console.error("[opengraph-image] generation failed", { slug, rawLocale }, err);
		throw err;
	}
}
