import { isValidLocale, type Locale } from "@/lib/i18n/config";
import { getPageTranslations } from "@/lib/i18n/page-translations";
import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "@/lib/og/render-og";
import { findLanguage, STICKER_AVAILABILITY } from "@/lib/sticker-files/catalog";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "bitcoin.rocks";

/** Title-case a single lowercase English word like `afrikaans` → `Afrikaans`. */
function titleCaseWord(s: string): string {
	if (!s) return s;
	return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

/**
 * Dynamic per-language OG for `/sticker-files/<lang>`. The page's title
 * isn't a static i18n key — it's `${stickerLangName} Bitcoin Sticker
 * Files`, where the language name is itself translated via the
 * `common_language_<slug>` keys — so this route can't go through
 * `OG_PAGE_STRINGS` / `ogHandler`. We resolve the heading inline and call
 * `renderOgImage` directly.
 */
export default async function Image({
	params,
}: {
	params: Promise<{ locale: string; lang: string }>;
}) {
	const { locale: rawLocale, lang } = await params;
	if (!isValidLocale(rawLocale)) {
		throw new Error(`opengraph-image: invalid locale "${rawLocale}"`);
	}
	const locale: Locale = rawLocale;

	const langDescriptor = findLanguage(lang);
	const hasStickers = Boolean(STICKER_AVAILABILITY[lang]);

	let title = "Bitcoin Sticker Files";
	if (langDescriptor && hasStickers) {
		const t = await getPageTranslations(locale, "common");
		const rawLangName = t(langDescriptor.labelKey);
		const stickerLangName = titleCaseWord(rawLangName);
		title = `${stickerLangName} Bitcoin Sticker Files`;
	}

	return renderOgImage({ locale, title });
}
