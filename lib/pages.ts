/**
 * Canonical list of site pages for sitemap + hreflang generation.
 *
 * Each entry describes a single "page" (one per slug) that exists on the
 * site. The sitemap emits one URL per `(page, locale)` pair, cross-linked
 * via hreflang. Entries with `published: false` are intentionally listed
 * so future phases can flip them on without hunting for the canonical slug.
 *
 * IMPORTANT: flip `published: true` as each migration phase ports the
 * corresponding page. Unpublished entries are elided from the sitemap so
 * we don't advertise URLs that still 404.
 *
 * Slugs are expressed relative to `/<locale>/` — an empty string = home.
 */

export type PageChangeFrequency =
	| "always"
	| "hourly"
	| "daily"
	| "weekly"
	| "monthly"
	| "yearly"
	| "never";

export type PageEntry = {
	/** Slug after the locale segment. Empty string = homepage. */
	slug: string;
	/** Which migration phase ships this page (informational). */
	phase: number;
	/** Sitemap priority — 1.0 for homepage, 0.8 for top content, 0.6/0.5 for rest. */
	priority: number;
	/** Sitemap changeFrequency hint. */
	changeFrequency: PageChangeFrequency;
	/**
	 * Which English JSON namespace contains `@metadata.last-updated` for this
	 * page. Used by the dateModified helper and by Article JSON-LD emission.
	 * `null` = no dedicated JSON file (e.g. homepage uses `index`).
	 */
	namespace: string | null;
	/**
	 * Is this page actually available in the Next.js app yet?
	 * Flip to `true` as each phase ports the page to React.
	 */
	published: boolean;
};

export const PAGES: readonly PageEntry[] = [
	// === Phase 5 — Homepage (already scaffolded, will be fully ported in Phase 5) ===
	{
		slug: "",
		phase: 5,
		priority: 1.0,
		changeFrequency: "weekly",
		namespace: "index",
		published: true,
	},

	// === Phase 6 — Inflation ===
	{
		slug: "inflation",
		phase: 6,
		priority: 0.9,
		changeFrequency: "weekly",
		namespace: "inflation",
		published: true,
	},

	// === Phase 7 — Comparison pages + bank-runs ===
	// Phase 7a shipped — these three are live.
	{ slug: "bitcoin-vs-gold", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-gold", published: true },
	{ slug: "bitcoin-vs-stocks", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-stocks", published: true },
	{ slug: "bitcoin-vs-cash", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-cash", published: true },
	{ slug: "bitcoin-vs-banks", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-banks", published: true },
	{ slug: "bitcoin-vs-bonds", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-bonds", published: true },
	{ slug: "bitcoin-vs-real-estate", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-real-estate", published: true },
	{ slug: "bitcoin-vs-crypto", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-crypto", published: true },
	{ slug: "bitcoin-vs-visa", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-visa", published: true },
	{ slug: "bitcoin-vs-cbdc", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-cbdc", published: true },
	{ slug: "bitcoin-vs-fine-art", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bitcoin-vs-fine-art", published: true },
	{ slug: "bank-runs", phase: 7, priority: 0.8, changeFrequency: "monthly", namespace: "bank-runs", published: true },


	// === Phase 8 — Content pages ===
	{ slug: "about", phase: 8, priority: 0.7, changeFrequency: "monthly", namespace: "about", published: true },
	{ slug: "get-involved", phase: 8, priority: 0.7, changeFrequency: "monthly", namespace: "get-involved", published: true },

	// === Phase 9a — Educational / info Bucket B ===
	{ slug: "wallets", phase: 9, priority: 0.8, changeFrequency: "monthly", namespace: "wallets", published: true },
	{ slug: "lightning", phase: 9, priority: 0.7, changeFrequency: "monthly", namespace: "lightning", published: true },
	{ slug: "flyers", phase: 9, priority: 0.5, changeFrequency: "yearly", namespace: "flyers", published: true },
	{ slug: "compound-inflation-calculator", phase: 9, priority: 0.6, changeFrequency: "monthly", namespace: "compound-inflation-calculator", published: true },

	// === Phase 9b — Form pages + successes ===
	{ slug: "stickers", phase: 9, priority: 0.6, changeFrequency: "monthly", namespace: "stickers", published: true },
	{ slug: "signs", phase: 9, priority: 0.6, changeFrequency: "monthly", namespace: "signs", published: true },
	{ slug: "postcards", phase: 9, priority: 0.6, changeFrequency: "monthly", namespace: "postcards", published: true },
	{ slug: "buy", phase: 9, priority: 0.7, changeFrequency: "monthly", namespace: "buy", published: true },
	{ slug: "sticker-success", phase: 9, priority: 0.3, changeFrequency: "yearly", namespace: "sticker-success", published: true },
	{ slug: "sign-success", phase: 9, priority: 0.3, changeFrequency: "yearly", namespace: "sign-success", published: true },
	{ slug: "postcard-success", phase: 9, priority: 0.3, changeFrequency: "yearly", namespace: "postcard-success", published: true },
	{ slug: "sticker-language-success", phase: 9, priority: 0.3, changeFrequency: "yearly", namespace: "sticker-language-success", published: true },

	// === Phase 10 — Business section ===
	{ slug: "business", phase: 10, priority: 0.7, changeFrequency: "monthly", namespace: "business/index", published: true },
	{ slug: "business/why", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/why", published: true },
	{ slug: "business/faq", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/faq", published: true },
	{ slug: "business/guide", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/guide", published: true },
	{ slug: "business/wallets", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/wallets", published: true },
	{ slug: "business/accounting", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/accounting", published: true },
	{ slug: "business/stickers", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/stickers", published: true },
	{ slug: "business/maps", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/maps", published: true },
	{ slug: "business/kit", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/kit", published: true },
	{ slug: "business/kit-success", phase: 10, priority: 0.3, changeFrequency: "yearly", namespace: "business/kit-success", published: true },
	{ slug: "business/maps-success", phase: 10, priority: 0.3, changeFrequency: "yearly", namespace: "business/maps-success", published: true },
	{ slug: "business/sticker-success", phase: 10, priority: 0.3, changeFrequency: "yearly", namespace: "business/sticker-success", published: true },
	{ slug: "business/sticker-language-success", phase: 10, priority: 0.3, changeFrequency: "yearly", namespace: "business/sticker-language-success", published: true },

	// === Phase 12 — Nostr section ===
	{ slug: "nostr", phase: 12, priority: 0.5, changeFrequency: "monthly", namespace: "nostr/index", published: false },
	{ slug: "nostr/what-is-nostr", phase: 12, priority: 0.5, changeFrequency: "monthly", namespace: "nostr/what-is-nostr", published: false },
] as const;

/** Find a page entry by slug. Returns null if not registered. */
export function getPage(slug: string): PageEntry | null {
	const normalized = slug.replace(/^\/+|\/+$/g, "");
	return PAGES.find((p) => p.slug === normalized) ?? null;
}

/** All pages that are currently live in the Next.js app (for the sitemap). */
export function getPublishedPages(): readonly PageEntry[] {
	return PAGES.filter((p) => p.published);
}
