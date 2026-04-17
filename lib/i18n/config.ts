/**
 * Canonical language list + helpers for Next.js i18n.
 *
 * Mirrors `jquery/language.js` `languages` array (the `custom` "Add language"
 * entry is deliberately excluded — that's a UI-only row in the legacy
 * dropdown, not a real locale). Order matches the legacy switcher: English
 * first, then alphabetical by native display name.
 *
 * Any new language added to the site must be added to BOTH this file AND
 * `jquery/language.js` until Phase 14 deletes the legacy file.
 */

export type LanguageEntry = {
	/** BCP-47-ish locale code (e.g. `en`, `nb`, `zh`, `fil`). */
	code: string;
	/** Native display name as shown in the language switcher. */
	name: string;
};

export const languages: readonly LanguageEntry[] = [
	{ code: "en", name: "English" },
	{ code: "af", name: "Afrikaans" },
	{ code: "az", name: "Azərbaycanca" },
	{ code: "ca", name: "Català" },
	{ code: "cs", name: "Čeština" },
	{ code: "ny", name: "Chicheŵa" },
	{ code: "da", name: "Dansk" },
	{ code: "de", name: "Deutsch" },
	{ code: "et", name: "Eesti" },
	{ code: "es", name: "Español" },
	{ code: "eu", name: "Euskara" },
	{ code: "fil", name: "Filipino" },
	{ code: "fr", name: "Français" },
	{ code: "ga", name: "Gaeilge" },
	{ code: "ha", name: "Hausa" },
	{ code: "hr", name: "Hrvatski" },
	{ code: "id", name: "Indonesia" },
	{ code: "zu", name: "isiZulu" },
	{ code: "it", name: "Italiano" },
	{ code: "sw", name: "Kiswahili" },
	{ code: "lt", name: "Lietuvių" },
	{ code: "hu", name: "Magyar" },
	{ code: "ms", name: "Melayu" },
	{ code: "nl", name: "Nederlands" },
	{ code: "nb", name: "Norsk" },
	{ code: "uz", name: "O\u02BBzbekcha" },
	{ code: "pl", name: "Polski" },
	{ code: "pt", name: "Português" },
	{ code: "ro", name: "Română" },
	{ code: "sk", name: "Slovenčina" },
	{ code: "sl", name: "Slovenščina" },
	{ code: "fi", name: "Suomi" },
	{ code: "sv", name: "Svenska" },
	{ code: "tl", name: "Tagalog" },
	{ code: "vi", name: "Tiếng Việt" },
	{ code: "tr", name: "Türkçe" },
	{ code: "yo", name: "Yorùbá" },
	{ code: "el", name: "Ελληνικά" },
	{ code: "bg", name: "български" },
	{ code: "ru", name: "Русский" },
	{ code: "ur", name: "اردو" },
	{ code: "ar", name: "العربية" },
	{ code: "fa", name: "فارسی" },
	{ code: "he", name: "עברית" },
	{ code: "hi", name: "हिन्दी" },
	{ code: "bn", name: "বাংলা" },
	{ code: "pa", name: "ਪੰਜਾਬੀ" },
	{ code: "ta", name: "தமிழ்" },
	{ code: "si", name: "සිංහල" },
	{ code: "my", name: "မြန်မာ" },
	{ code: "th", name: "ภาษาไทย" },
	{ code: "am", name: "አማርኛ" },
	{ code: "zh", name: "中文" },
	{ code: "ja", name: "日本語" },
	{ code: "ko", name: "한국어" },
] as const;

/**
 * Flat list of valid locale codes, derived from `languages`.
 * `as const` on the literal tuple below (sourced from `languages`) gives
 * us a readonly tuple suitable for `next-intl`'s `hasLocale` helper.
 */
export const locales = [
	"en",
	"af",
	"az",
	"ca",
	"cs",
	"ny",
	"da",
	"de",
	"et",
	"es",
	"eu",
	"fil",
	"fr",
	"ga",
	"ha",
	"hr",
	"id",
	"zu",
	"it",
	"sw",
	"lt",
	"hu",
	"ms",
	"nl",
	"nb",
	"uz",
	"pl",
	"pt",
	"ro",
	"sk",
	"sl",
	"fi",
	"sv",
	"tl",
	"vi",
	"tr",
	"yo",
	"el",
	"bg",
	"ru",
	"ur",
	"ar",
	"fa",
	"he",
	"hi",
	"bn",
	"pa",
	"ta",
	"si",
	"my",
	"th",
	"am",
	"zh",
	"ja",
	"ko",
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Right-to-left locales; used for the `<html dir>` attribute. */
export const RTL_LOCALES: ReadonlySet<Locale> = new Set<Locale>([
	"ar",
	"fa",
	"he",
	"ur",
]);

/** Type-guard: is this string a supported locale? */
export function isValidLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}
