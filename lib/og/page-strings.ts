/**
 * Per-page mapping for opengraph-image generation.
 *
 * `titleKey` resolves through `getPageTranslations(locale, namespace)`
 * (loads `common` + the listed namespace in isolation) so the same i18n
 * bag the page itself uses is what populates the OG image's heading.
 *
 * Default rule: when a page appears as a card on the homepage, its OG
 * heading reuses the homepage's `home_link_title_<topic>` (which lives
 * in the `index` namespace). Pages that don't appear on the homepage
 * fall back to the page's own H1 / header key.
 *
 * To opt out of dynamic OG entirely for a slug, omit it from this map —
 * the page will then fall back to whatever it sets in `metadata.openGraph`
 * (i.e. the existing static META_IMAGE).
 */

export type OgPageStrings = {
	/** Namespace to load alongside `common` for resolving the key. */
	namespace: string;
	titleKey: string;
};

/** Map: slug (relative to `/<locale>/`, "" = homepage) → strings. */
export const OG_PAGE_STRINGS: Readonly<Record<string, OgPageStrings>> = {
	// === Homepage ===
	"": {
		namespace: "index",
		titleKey: "home_h1",
	},

	// === Comparison pages + bank-runs (homepage card-derived) ===
	"inflation": { namespace: "index", titleKey: "home_link_title_inflation" },
	"bank-runs": { namespace: "index", titleKey: "home_link_title_bank_runs" },
	"bitcoin-vs-gold": { namespace: "index", titleKey: "home_link_title_gold" },
	"bitcoin-vs-stocks": { namespace: "index", titleKey: "home_link_title_business_3" },
	"bitcoin-vs-cash": { namespace: "index", titleKey: "home_link_title_cash" },
	"bitcoin-vs-banks": { namespace: "index", titleKey: "home_link_title_networks_2" },
	"bitcoin-vs-bonds": { namespace: "index", titleKey: "home_link_title_bonds" },
	"bitcoin-vs-real-estate": { namespace: "index", titleKey: "home_link_title_property_rights_2" },
	"bitcoin-vs-crypto": { namespace: "index", titleKey: "home_link_title_crypto" },
	"bitcoin-vs-visa": { namespace: "index", titleKey: "home_link_title_payments_1" },
	"bitcoin-vs-cbdc": { namespace: "index", titleKey: "home_link_title_cbdc" },
	"bitcoin-vs-fine-art": { namespace: "index", titleKey: "home_link_title_fine_art" },

	// === Content pages (homepage card-derived) ===
	"compound-inflation-calculator": { namespace: "index", titleKey: "home_link_title_your_salary_1" },
	"wallets": { namespace: "index", titleKey: "home_link_title_self_custody_1" },
	"lightning": { namespace: "index", titleKey: "home_link_title_payments_2" },
	"flyers": { namespace: "index", titleKey: "home_link_title_art_3" },
	"buy": { namespace: "index", titleKey: "home_link_title_get_started_3" },
	"stickers": { namespace: "index", titleKey: "home_link_title_art_1" },

	// === Story pages — H1 from page namespace ===
	"about": { namespace: "about", titleKey: "about_header" },
	"get-involved": { namespace: "get-involved", titleKey: "get_involved_header" },

	// === Business top-level (homepage card-derived) ===
	"business": { namespace: "index", titleKey: "home_link_title_business_1" },

	// NOTE: business/* sub-pages, sticker-files/*, and form success
	// pages still use their existing static META_IMAGE constants. They
	// can be added here once each page's i18n file has been audited
	// for a clean H1 worth surfacing on social shares. Pages omitted
	// from this map fall back to whatever `metadata.openGraph.images`
	// already points to.
};
