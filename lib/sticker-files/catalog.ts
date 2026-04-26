/**
 * Canonical catalog of printable Bitcoin sticker assets, keyed by a stable
 * "sticker slug" (e.g. `bdhi-orange`, `cure-inflation-v2`, `got-inflation`).
 *
 * The legacy `sticker-files/<language>/` directories store one PNG per
 * (sticker, language) pair named `<slug>-<language>.png`. Metadata — the
 * name + dimensions + type + material strings — is per-slug (not per-
 * language), and rendered via `common_stickers_*` i18n keys so translators
 * don't need to re-translate the same sentence 43× per sticker.
 */
import {
	STICKER_LANGUAGES,
	type StickerLanguage,
} from "@/lib/sticker-languages";

/**
 * A sticker "kind" = a physical sticker design that may exist in one or more
 * languages. Referenced by its slug and the matching `common_stickers_*` keys.
 */
export type StickerKind = {
	/** URL/file slug, e.g. `bdhi-orange`. */
	slug: string;
	/** i18n key for the sticker's display name (the H2 on each card). */
	nameKey: string;
	/** i18n key for the "Dimensions: …" text (from `common_en.json`). */
	dimensionsKey: string;
	/** i18n key for the "Type: …" text (die-cut, etc). `null` → no type row. */
	typeKey: string | null;
	/** i18n key for the "Material: …" text. Almost always vinyl. */
	materialKey: string;
};

/**
 * Catalog of every sticker kind rendered on /sticker-files/<lang> pages.
 * Keep the order stable — it's the rendering order on each language page.
 * Extra slugs produced by one-off language variants (e.g. Swedish's
 * `cure-inflation-v2-fixed`, `got-inflation-fixed`) alias onto the same
 * metadata as their base slug.
 *
 * The V1 pill-bottle "Cure Inflation" design is retired — its slug
 * `cure-inflation` is no longer listed in any language's availability
 * set, so the catalog entry is kept only for historical image lookups.
 */
export const STICKER_KINDS: Record<string, StickerKind> = {
	// V2 designs (launched later; most languages have these)
	"bdhi-orange": {
		slug: "bdhi-orange",
		nameKey: "common_sticker_name_bdhi_orange",
		dimensionsKey: "common_stickers_dimensions_bdhi",
		typeKey: null,
		materialKey: "common_stickers_material_vinyl",
	},
	"bdhi-black": {
		slug: "bdhi-black",
		nameKey: "common_sticker_name_bdhi_black",
		dimensionsKey: "common_stickers_dimensions_bdhi",
		typeKey: null,
		materialKey: "common_stickers_material_vinyl",
	},
	"cure-inflation-v2": {
		slug: "cure-inflation-v2",
		nameKey: "common_sticker_name_cure_inflation",
		dimensionsKey: "common_stickers_dimensions_cure_v2",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},
	"got-inflation": {
		slug: "got-inflation",
		nameKey: "common_sticker_name_got_inflation",
		dimensionsKey: "common_stickers_dimensions_got_inflation",
		typeKey: null,
		materialKey: "common_stickers_material_vinyl",
	},

	// V1 / legacy designs (kept for historical languages that already have PNGs).
	// NOTE: the V1 pill-bottle `cure-inflation` is retired — its availability
	// entries have all been removed. Kept here for backward-compat image lookups.
	"cure-inflation": {
		slug: "cure-inflation",
		nameKey: "common_sticker_name_cure_inflation",
		dimensionsKey: "common_stickers_dimensions_cure_v2",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},
	"study-bitcoin": {
		slug: "study-bitcoin",
		nameKey: "common_sticker_name_study",
		dimensionsKey: "common_stickers_dimensions_study",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},
	study: {
		slug: "study",
		nameKey: "common_sticker_name_study",
		dimensionsKey: "common_stickers_dimensions_study",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},

	// English-exclusive extra designs
	fix: {
		slug: "fix",
		nameKey: "common_sticker_name_fix",
		dimensionsKey: "common_stickers_dimensions_fix",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},
	"sticker-danger": {
		slug: "sticker-danger",
		nameKey: "common_sticker_name_danger",
		dimensionsKey: "common_stickers_dimensions_danger",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},
	"sticker-warning": {
		slug: "sticker-warning",
		nameKey: "common_sticker_name_warning",
		dimensionsKey: "common_stickers_dimensions_warning",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},
	"sticker-caution": {
		slug: "sticker-caution",
		nameKey: "common_sticker_name_caution",
		dimensionsKey: "common_stickers_dimensions_caution",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},
	"what-if": {
		slug: "what-if",
		nameKey: "common_sticker_name_what_if",
		dimensionsKey: "common_stickers_dimensions_what_if",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},

	// Swedish had a rushed first print of cure-inflation-v2/got-inflation with
	// typography errors; the `-fixed` variants replace them but we keep the
	// originals on disk for historical linking. Rendered in Swedish order as
	// separate cards so the file set on disk matches what's displayed.
	"cure-inflation-v2-fixed": {
		slug: "cure-inflation-v2-fixed",
		nameKey: "common_sticker_name_cure_inflation",
		dimensionsKey: "common_stickers_dimensions_cure_v2",
		typeKey: "common_stickers_type_die_cut",
		materialKey: "common_stickers_material_vinyl",
	},
	"got-inflation-fixed": {
		slug: "got-inflation-fixed",
		nameKey: "common_sticker_name_got_inflation",
		dimensionsKey: "common_stickers_dimensions_got_inflation",
		typeKey: null,
		materialKey: "common_stickers_material_vinyl",
	},
};

/**
 * Default display order for per-language pages. Any slugs not in this list
 * fall to the bottom alphabetically.
 */
const ORDER: ReadonlyArray<string> = [
	"sticker-danger",
	"sticker-warning",
	"sticker-caution",
	"fix",
	"study",
	"study-bitcoin",
	"bdhi-orange",
	"bdhi-black",
	"cure-inflation-v2",
	"cure-inflation-v2-fixed",
	"got-inflation",
	"got-inflation-fixed",
	"what-if",
];

/**
 * Per-language override map. Each language lists only the sticker slugs that
 * should render on its page. The retired V1 `cure-inflation` pill-bottle
 * design has been removed from every list — its PNGs stay on disk for link
 * back-compat but the card is no longer rendered.
 */
export const STICKER_AVAILABILITY: Record<string, ReadonlyArray<string>> = {
	afrikaans: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation", "study-bitcoin"],
	arabic: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	basque: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	bulgarian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	catalan: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	chinese: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	croatian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	czech: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	danish: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	dutch: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	english: [
		"sticker-danger",
		"sticker-warning",
		"sticker-caution",
		"fix",
		"study",
		"bdhi-orange",
		"bdhi-black",
		"cure-inflation-v2",
		"got-inflation",
		"what-if",
	],
	estonian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	filipino: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	finnish: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	french: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	german: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	greek: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	hausa: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	hebrew: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	hindi: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	hungarian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	indonesian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	irish: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	italian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	japanese: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	korean: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	malay: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	norwegian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	persian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	polish: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	portuguese: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	russian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	sinhala: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	slovak: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation", "study"],
	slovenian: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	spanish: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	swahili: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	swedish: [
		"bdhi-black",
		"bdhi-orange",
		"cure-inflation-v2-fixed",
		"cure-inflation-v2",
		"got-inflation-fixed",
		"got-inflation",
	],
	thai: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	turkish: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	urdu: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	vietnamese: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
	yoruba: ["bdhi-black", "bdhi-orange", "cure-inflation-v2", "got-inflation"],
};

/** Sort slugs into canonical display order. */
function sortBySlugOrder(slugs: ReadonlyArray<string>): string[] {
	return [...slugs].sort((a, b) => {
		const ia = ORDER.indexOf(a);
		const ib = ORDER.indexOf(b);
		if (ia === -1 && ib === -1) return a.localeCompare(b);
		if (ia === -1) return 1;
		if (ib === -1) return -1;
		return ia - ib;
	});
}

/** Return the ordered list of sticker kinds available for a given language. */
export function getStickersForLanguage(langSlug: string): StickerKind[] {
	const slugs = STICKER_AVAILABILITY[langSlug] ?? [];
	const ordered = sortBySlugOrder(slugs);
	return ordered
		.map((s) => STICKER_KINDS[s])
		.filter((k): k is StickerKind => Boolean(k));
}

/** Look up the `StickerLanguage` descriptor (label key + slug). */
export function findLanguage(slug: string): StickerLanguage | null {
	return STICKER_LANGUAGES.find((l) => l.slug === slug) ?? null;
}

/**
 * All language slugs that have any printable stickers. Used by the dynamic
 * route's `generateStaticParams()` + the index page's button grid.
 */
export function getPrintableLanguageSlugs(): string[] {
	return STICKER_LANGUAGES.filter((l) => STICKER_AVAILABILITY[l.slug]?.length).map(
		(l) => l.slug,
	);
}

/** Build the public `<img src>` URL for a (slug, lang) pair. */
export function stickerImageUrl(langSlug: string, stickerSlug: string): string {
	return `/sticker-files/${langSlug}/${stickerSlug}-${langSlug}.png`;
}

/**
 * Special stickermule link for the English 1-click print pack. Preserved
 * from legacy HTML (`sticker-files/english/index.html`). Returns null for
 * every other language.
 */
export function stickerMuleOneClickUrl(langSlug: string): string | null {
	if (langSlug === "english") return "https://stickermule.com/u/4c84ba884f9c3ae";
	return null;
}
