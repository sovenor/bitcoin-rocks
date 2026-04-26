/**
 * Deterministic per-language color assignment for the `/sticker-files`
 * language picker pills.
 *
 * The page renders each printable language as an `<a class="inflation-
 * button colorful">` chip. To make the grid feel lively (without
 * overloading the designer budget), we cycle through the 21 topic-color
 * tokens already defined in `app/globals.css` `@theme {}` — the same
 * palette that powers the homepage carousel pills. Assignment is
 * `index % palette.length`, keyed to the order each language first
 * appears in the `STICKER_LANGUAGES` canonical list. That guarantees:
 *
 *   - Stable colors across builds / deploys (no hash drift).
 *   - Zero runtime cost: returns a CSS variable *name* which the caller
 *     interpolates into `style={{ "--btn-color": "var(--color-…)" }}`.
 *   - Cohesion with the rest of the site — every color shown here is
 *     already used somewhere on the homepage.
 *
 * Adding a new language? Just drop it into `STICKER_LANGUAGES`; its
 * color is picked automatically.
 */
import { STICKER_LANGUAGES } from "@/lib/sticker-languages";

/**
 * The 21 topic-color tokens from `@theme {}`, curated into an order
 * that produces good rhythm when cycled across the grid (no two
 * adjacent colors are too similar in hue).
 */
const PALETTE: ReadonlyArray<string> = [
	"--color-energy",        // bright green
	"--color-freedom",       // deep red
	"--color-payments",      // yellow
	"--color-art",           // blue
	"--color-food",          // orange-red
	"--color-self-custody",  // pale cyan
	"--color-politics",      // purple
	"--color-money",         // kelly green
	"--color-war",           // scarlet
	"--color-ai",            // azure
	"--color-coding",        // chartreuse
	"--color-saving",        // pink
	"--color-networks",      // navy
	"--color-property-rights", // magenta
	"--color-salary",        // teal-blue
	"--color-gold",          // gold-yellow
	"--color-business",      // cyan
	"--color-crowdfunding",  // olive-yellow
	"--color-housing",       // chestnut
	"--color-equality",      // mauve
	"--color-environment",   // forest
];

/**
 * Precomputed slug → index map so lookup is O(1) and stable across
 * render passes. Built once at module load.
 */
const SLUG_INDEX: Record<string, number> = (() => {
	const m: Record<string, number> = {};
	STICKER_LANGUAGES.forEach((lang, i) => {
		m[lang.slug] = i;
	});
	return m;
})();

/**
 * Return the CSS variable *name* (without `var(...)`) for the given
 * language slug. The caller is expected to wrap it:
 *
 *   style={{ "--btn-color": `var(${getLanguageColorToken(slug)})` }}
 *
 * Falls back to `--color-bitcoin-orange` for any unknown slug so the
 * button still renders in brand color if the catalog and the picker
 * ever drift out of sync.
 */
export function getLanguageColorToken(slug: string): string {
	const idx = SLUG_INDEX[slug];
	if (idx === undefined) return "--color-bitcoin-orange";
	return PALETTE[idx % PALETTE.length] ?? "--color-bitcoin-orange";
}
