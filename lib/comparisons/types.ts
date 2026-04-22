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

/**
 * Visual style applied to one segment of a custom H1.
 *
 * - `plain`  — white text (default body color).
 * - `orange` — Bitcoin orange (#FF9500).
 * - `asset`  — the page's asset accent color (via `--asset-accent`).
 */
export type ComparisonHeaderStyle = "plain" | "orange" | "asset";

/**
 * One part of a `customHeader`.
 *
 * Used by pages (like `/bitcoin-vs-cbdc`) whose H1 doesn't follow the
 * canonical "THE DIFFERENCE BETWEEN BITCOIN AND <ASSET>" four-part shape.
 * Parts are rendered inline with `<br />` separators between them.
 */
export type ComparisonHeaderPart = {
	key: string;
	style: ComparisonHeaderStyle;
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
	 * Single translation key for the hero H1, rendered in sentence case
	 * and orange (e.g. "The difference between Bitcoin and Gold").
	 *
	 * This is the current standard; the legacy multi-part `headerKeys`
	 * and `customHeader` options are preserved for backward compatibility
	 * but no longer used by any shipped page.
	 */
	heroTitleKey?: string;

	/**
	 * Legacy: four translation keys that assemble into "THE DIFFERENCE
	 * BETWEEN BITCOIN AND <ASSET>". Kept for type-compat but ignored
	 * when `heroTitleKey` is supplied.
	 */
	headerKeys?: {
		part1: string;
		bitcoin: string;
		and: string;
		asset: string;
	};

	/**
	 * Legacy: alternative multi-part H1. Ignored when `heroTitleKey`
	 * is supplied.
	 */
	customHeader?: readonly ComparisonHeaderPart[];


	/**
	 * Hex color for the asset accent (applied via `--asset-accent`
	 * CSS variable to per-point asset labels; the H1 is always orange).
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
