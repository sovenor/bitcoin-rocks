/**
 * Shared types + helpers for Phase 7 comparison pages
 * (`bitcoin-vs-*` and `bank-runs`).
 *
 * Each comparison page is expressed as a `ComparisonPageData` object
 * loaded from `lib/comparisons/<slug>.ts`. `ComparisonPageLayout`
 * (a Server Component) consumes the data and renders the V2-style
 * page: hero + intro + N comparison points + "What's next?" + sources
 * + publisher attribution.
 *
 * Translation strings are referenced **by key only** — the React
 * component resolves them via `next-intl`'s `getTranslations()` so
 * the translator workflow stays unchanged (strings still live in the
 * per-page JSON files).
 */

/**
 * One fragment of prose inside a comparison-point explanation.
 *
 * - If `href` is present, the fragment is rendered as an inline `<a
 *   class="body-link">` (orange, underlined).
 * - `localize: true` means the href starts with `/` and should be
 *   prefixed with the active locale (`/en/inflation` → `/ja/inflation`).
 * - `external: true` adds `target="_blank" rel="noopener noreferrer"`.
 * - `key` is a jquery.i18n-style flat translation key.
 */
export type SummaryFragment = {
	key: string;
	href?: string;
	external?: boolean;
	localize?: boolean;
};

/**
 * One comparison point (e.g. "Bitcoin: fixed supply vs Gold: inflates ~1.6%/yr").
 *
 * `summary` is an ordered list of paragraphs; each paragraph is an
 * ordered list of fragments that get space-joined. Paragraphs render
 * as separate `<p>` elements so legacy `<br /><br />` breaks become
 * proper HTML paragraphs in the V2 design.
 */
export type ComparisonPointData = {
	/** Translation key for Bitcoin's trait on this criterion. */
	bitcoinKey: string;
	/** Translation key for the compared asset's trait on this criterion. */
	assetKey: string;
	/** Summary paragraphs, each an array of fragments. */
	summary: readonly SummaryFragment[][];
};

/** One entry in the Sources section at the bottom of the page. */
export type ComparisonSource = {
	/** Outbound URL (always external). */
	url: string;
	/** Display label — intentionally NOT translated to preserve
	 *  citation integrity (source names are English titles). */
	label: string;
};

/** Full per-page data bundle. One file per comparison page. */
export type ComparisonPageData = {
	/** URL slug (e.g. `"bitcoin-vs-gold"`). */
	slug: string;

	/** Namespace (usually same as slug) used to load translations. */
	namespace: string;

	/** Share image path (site-relative or absolute). */
	metaImage: string;

	/**
	 * H1 parts — four translation keys that assemble into
	 * "THE DIFFERENCE BETWEEN BITCOIN AND <ASSET>".
	 */
	headerKeys: {
		part1: string; // "THE DIFFERENCE BETWEEN"
		bitcoin: string; // "BITCOIN"
		and: string; // "AND"
		asset: string; // "GOLD" / "STOCKS" / "CASH"
	};

	/**
	 * Hex color for the asset accent (applied via `--asset-accent`
	 * CSS variable to the H1 asset word + per-point asset labels).
	 */
	assetAccentColor: string;

	/** Translation keys for intro paragraphs (in order). */
	introKeys: readonly string[];

	/** Key for the "GOLD" / "STOCKS" / "CASH" label on each card. */
	assetLabelKey: string;

	/**
	 * Key for the "BITCOIN" label on each card. Usually `"bitcoin"`
	 * but explicit so translators can't accidentally drift it.
	 */
	bitcoinLabelKey: string;

	/** All comparison points in order. */
	points: readonly ComparisonPointData[];

	/** Canonical page title (for meta + Article headline). */
	titleKey: string;

	/** Short description (meta + schema description + intro blurb). */
	descriptionKey: string;

	/** Sources cited at the bottom. */
	sources: readonly ComparisonSource[];
};
