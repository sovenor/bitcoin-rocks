/**
 * Canonical list of languages that have downloadable sticker files.
 * Used by /stickers (Print-my-own pack) + /business/stickers + sticker-files index.
 *
 * Order matches the legacy HTML (alphabetical by English name) so the button
 * grid is identical.
 */

export type StickerLanguage = {
	/** URL slug (lowercase English name). */
	slug: string;
	/** i18n key for the label (`common_language_*`). */
	labelKey: string;
};

export const STICKER_LANGUAGES: ReadonlyArray<StickerLanguage> = [
	{ slug: "afrikaans", labelKey: "common_language_afrikaans" },
	{ slug: "arabic", labelKey: "common_language_arabic" },
	{ slug: "basque", labelKey: "common_language_basque" },
	{ slug: "bulgarian", labelKey: "common_language_bulgarian" },
	{ slug: "catalan", labelKey: "common_language_catalan" },
	{ slug: "chinese", labelKey: "common_language_chinese" },
	{ slug: "croatian", labelKey: "common_language_croatian" },
	{ slug: "czech", labelKey: "common_language_czech" },
	{ slug: "danish", labelKey: "common_language_danish" },
	{ slug: "dutch", labelKey: "common_language_dutch" },
	{ slug: "english", labelKey: "common_language_english" },
	{ slug: "estonian", labelKey: "common_language_estonian" },
	{ slug: "filipino", labelKey: "common_language_filipino" },
	{ slug: "finnish", labelKey: "common_language_finnish" },
	{ slug: "french", labelKey: "common_language_french" },
	{ slug: "german", labelKey: "common_language_german" },
	{ slug: "greek", labelKey: "common_language_greek" },
	{ slug: "hausa", labelKey: "common_language_hausa" },
	{ slug: "hebrew", labelKey: "common_language_hebrew" },
	{ slug: "hindi", labelKey: "common_language_hindi" },
	{ slug: "hungarian", labelKey: "common_language_hungarian" },
	{ slug: "indonesian", labelKey: "common_language_indonesian" },
	{ slug: "irish", labelKey: "common_language_irish" },
	{ slug: "italian", labelKey: "common_language_italian" },
	{ slug: "japanese", labelKey: "common_language_japanese" },
	{ slug: "korean", labelKey: "common_language_korean" },
	{ slug: "malay", labelKey: "common_language_malay" },
	{ slug: "norwegian", labelKey: "common_language_norwegian" },
	{ slug: "persian", labelKey: "common_language_persian" },
	{ slug: "polish", labelKey: "common_language_polish" },
	{ slug: "portuguese", labelKey: "common_language_portuguese" },
	{ slug: "russian", labelKey: "common_language_russian" },
	{ slug: "sinhala", labelKey: "common_language_sinhala" },
	{ slug: "slovak", labelKey: "common_language_slovak" },
	{ slug: "slovenian", labelKey: "common_language_slovenian" },
	{ slug: "spanish", labelKey: "common_language_spanish" },
	{ slug: "swahili", labelKey: "common_language_swahili" },
	{ slug: "swedish", labelKey: "common_language_swedish" },
	{ slug: "thai", labelKey: "common_language_thai" },
	{ slug: "turkish", labelKey: "common_language_turkish" },
	{ slug: "urdu", labelKey: "common_language_urdu" },
	{ slug: "vietnamese", labelKey: "common_language_vietnamese" },
	{ slug: "yoruba", labelKey: "common_language_yoruba" },
];
