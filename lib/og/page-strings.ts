/**
 * Per-page mapping for opengraph-image generation.
 *
 * `titleKey` and `subtitleKey` resolve through `getPageTranslations(locale,
 * namespace)` (loads `common` + the listed namespace in isolation) so the
 * same i18n bag the page itself uses is what populates the OG image.
 *
 * Default rule: when a page appears as a card on the homepage, its OG
 * image reuses the homepage's `home_link_title_<topic>` (title) and
 * `home_card_label_<topic>` (subtitle). Both live in the `index`
 * namespace. For pages that don't appear on the homepage we fall back
 * to a sensible per-section default — the page's own H1 plus a short
 * tagline. Override any entry here when a curated string is preferred.
 *
 * To opt out of dynamic OG entirely for a slug, omit it from this map —
 * the page will then fall back to whatever it sets in `metadata.openGraph`
 * (i.e. the existing static META_IMAGE).
 */

export type OgPageStrings = {
	/** Namespace to load alongside `common` for resolving the keys. */
	namespace: string;
	titleKey: string;
	subtitleKey: string;
};

/** Map: slug (relative to `/<locale>/`, "" = homepage) → strings. */
export const OG_PAGE_STRINGS: Readonly<Record<string, OgPageStrings>> = {
	// === Homepage ===
	"": {
		namespace: "index",
		titleKey: "home_h1",
		subtitleKey: "home_intro",
	},

	// === Comparison pages + bank-runs (homepage card-derived) ===
	"inflation": {
		namespace: "index",
		titleKey: "home_link_title_inflation",
		subtitleKey: "home_card_label_inflation",
	},
	"bank-runs": {
		namespace: "index",
		titleKey: "home_link_title_bank_runs",
		subtitleKey: "home_card_label_bank_runs",
	},
	"bitcoin-vs-gold": {
		namespace: "index",
		titleKey: "home_link_title_gold",
		subtitleKey: "home_card_label_gold",
	},
	"bitcoin-vs-stocks": {
		namespace: "index",
		titleKey: "home_link_title_business_3",
		subtitleKey: "home_card_label_business_1",
	},
	"bitcoin-vs-cash": {
		namespace: "index",
		titleKey: "home_link_title_cash",
		subtitleKey: "home_card_label_cash",
	},
	"bitcoin-vs-banks": {
		namespace: "index",
		titleKey: "home_link_title_networks_2",
		subtitleKey: "home_card_label_networks_2",
	},
	"bitcoin-vs-bonds": {
		namespace: "index",
		titleKey: "home_link_title_bonds",
		subtitleKey: "home_card_label_bonds",
	},
	"bitcoin-vs-real-estate": {
		namespace: "index",
		titleKey: "home_link_title_property_rights_2",
		subtitleKey: "home_card_label_property_rights_1",
	},
	"bitcoin-vs-crypto": {
		namespace: "index",
		titleKey: "home_link_title_crypto",
		subtitleKey: "home_card_label_crypto",
	},
	"bitcoin-vs-visa": {
		namespace: "index",
		titleKey: "home_link_title_payments_1",
		subtitleKey: "home_card_label_payments_1",
	},
	"bitcoin-vs-cbdc": {
		namespace: "index",
		titleKey: "home_link_title_cbdc",
		subtitleKey: "home_card_label_cbdc",
	},
	"bitcoin-vs-fine-art": {
		namespace: "index",
		titleKey: "home_link_title_fine_art",
		subtitleKey: "home_card_label_art_1",
	},

	// === Content pages (homepage card-derived) ===
	"compound-inflation-calculator": {
		namespace: "index",
		titleKey: "home_link_title_your_salary_1",
		subtitleKey: "home_card_label_salary",
	},
	"wallets": {
		namespace: "index",
		titleKey: "home_link_title_self_custody_1",
		subtitleKey: "home_card_label_self_custody_1",
	},
	"lightning": {
		namespace: "index",
		titleKey: "home_link_title_payments_2",
		subtitleKey: "home_card_label_payments_2",
	},
	"flyers": {
		namespace: "index",
		titleKey: "home_link_title_art_3",
		subtitleKey: "home_card_label_art_3",
	},
	"buy": {
		namespace: "index",
		titleKey: "home_link_title_get_started_3",
		subtitleKey: "home_card_label_get_started_3",
	},
	"stickers": {
		namespace: "index",
		titleKey: "home_link_title_art_1",
		subtitleKey: "home_card_label_art_1",
	},

	// === Story pages — H1 from page namespace, tagline from index ===
	"about": {
		namespace: "about",
		titleKey: "about_header",
		subtitleKey: "about_mission_header",
	},
	"get-involved": {
		namespace: "get-involved",
		titleKey: "get_involved_header",
		subtitleKey: "get_involved_description",
	},

	// === Business top-level (homepage card-derived) ===
	"business": {
		namespace: "index",
		titleKey: "home_link_title_business_1",
		subtitleKey: "home_card_label_business_2",
	},

	// NOTE: business/* sub-pages, sticker-files/*, and form success
	// pages still use their existing static META_IMAGE constants. They
	// can be added here once each page's i18n file has been audited
	// for a clean (title, subtitle) pair worth surfacing on social
	// shares. Pages omitted from this map fall back to whatever
	// `metadata.openGraph.images` already points to.
};
