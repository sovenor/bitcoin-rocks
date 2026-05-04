/**
 * Canonical language list + helpers for Next.js i18n.
 *
 * Order is alphabetical by native display name. `defaultLocale` below pins
 * English as the fallback regardless of array position, so the order here
 * is purely UI presentation in the language switcher.
 */

export type LanguageEntry = {
	/** BCP-47-ish locale code (e.g. `en`, `nb`, `zh`, `fil`). */
	code: string;
	/** Native display name as shown in the language switcher. */
	name: string;
};

export const languages: readonly LanguageEntry[] = [
	{ code: "af", name: "Afrikaans" },
	{ code: "az", name: "Azərbaycanca" },
	{ code: "ca", name: "Català" },
	{ code: "cs", name: "Čeština" },
	{ code: "ny", name: "Chicheŵa" },
	{ code: "da", name: "Dansk" },
	{ code: "de", name: "Deutsch" },
	{ code: "et", name: "Eesti" },
	{ code: "en", name: "English" },
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
	"af",
	"az",
	"ca",
	"cs",
	"ny",
	"da",
	"de",
	"et",
	"en",
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
