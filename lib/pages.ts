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
	{ slug: "memorize-your-seed-phrase", phase: 9, priority: 0.7, changeFrequency: "monthly", namespace: "memorize-your-seed-phrase", published: true },
	{ slug: "lightning", phase: 9, priority: 0.7, changeFrequency: "monthly", namespace: "lightning", published: true },
	{ slug: "bitcoin-node", phase: 9, priority: 0.7, changeFrequency: "monthly", namespace: "bitcoin-node", published: true },
	{ slug: "flyers", phase: 9, priority: 0.5, changeFrequency: "yearly", namespace: "flyers", published: true },
	{ slug: "compound-inflation-calculator", phase: 9, priority: 0.6, changeFrequency: "monthly", namespace: "compound-inflation-calculator", published: true },

	// === Phase 9b — Form pages + successes ===
	{ slug: "stickers", phase: 9, priority: 0.6, changeFrequency: "monthly", namespace: "stickers", published: true },
	{ slug: "buy", phase: 9, priority: 0.7, changeFrequency: "monthly", namespace: "buy", published: true },
	{ slug: "sticker-success", phase: 9, priority: 0.3, changeFrequency: "yearly", namespace: "sticker-success", published: true },
	{ slug: "sticker-language-success", phase: 9, priority: 0.3, changeFrequency: "yearly", namespace: "sticker-language-success", published: true },

	// === Phase 10 — Business section ===
	{ slug: "business", phase: 10, priority: 0.7, changeFrequency: "monthly", namespace: "business/index", published: true },
	{ slug: "business/why", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/why", published: true },
	{ slug: "business/faq", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/faq", published: true },
	{ slug: "business/wallets", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/wallets", published: true },
	{ slug: "business/accounting", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/accounting", published: true },
	{ slug: "business/stickers", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/stickers", published: true },
	// Merchant "Bitcoin Accepted Here" sticker download page — reached
	// from /business/stickers's "Global — Print my own" flow for anyone
	// outside USA/Canada.
	{ slug: "business/sticker-files/english", phase: 10, priority: 0.5, changeFrequency: "yearly", namespace: "business/sticker-files/english", published: true },
	{ slug: "business/maps", phase: 10, priority: 0.6, changeFrequency: "monthly", namespace: "business/maps", published: true },
	{ slug: "business/maps-success", phase: 10, priority: 0.3, changeFrequency: "yearly", namespace: "business/maps-success", published: true },
	{ slug: "business/sticker-success", phase: 10, priority: 0.3, changeFrequency: "yearly", namespace: "business/sticker-success", published: true },
	{ slug: "business/sticker-language-success", phase: 10, priority: 0.3, changeFrequency: "yearly", namespace: "business/sticker-language-success", published: true },

	// === Phase 11 — Sticker-files section ===
	{ slug: "sticker-files", phase: 11, priority: 0.6, changeFrequency: "monthly", namespace: "sticker-files/index", published: true },
	{ slug: "sticker-files/afrikaans", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/afrikaans/index", published: true },
	{ slug: "sticker-files/arabic", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/arabic/index", published: true },
	{ slug: "sticker-files/basque", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/basque/index", published: true },
	{ slug: "sticker-files/bulgarian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/bulgarian/index", published: true },
	{ slug: "sticker-files/catalan", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/catalan/index", published: true },
	{ slug: "sticker-files/chinese", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/chinese/index", published: true },
	{ slug: "sticker-files/croatian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/croatian/index", published: true },
	{ slug: "sticker-files/czech", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/czech/index", published: true },
	{ slug: "sticker-files/danish", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/danish/index", published: true },
	{ slug: "sticker-files/dutch", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/dutch/index", published: true },
	{ slug: "sticker-files/english", phase: 11, priority: 0.5, changeFrequency: "yearly", namespace: "sticker-files/english/index", published: true },
	{ slug: "sticker-files/estonian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/estonian/index", published: true },
	{ slug: "sticker-files/filipino", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/filipino/index", published: true },
	{ slug: "sticker-files/finnish", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/finnish/index", published: true },
	{ slug: "sticker-files/french", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/french/index", published: true },
	{ slug: "sticker-files/german", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/german/index", published: true },
	{ slug: "sticker-files/greek", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/greek/index", published: true },
	{ slug: "sticker-files/hausa", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/hausa/index", published: true },
	{ slug: "sticker-files/hebrew", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/hebrew/index", published: true },
	{ slug: "sticker-files/hindi", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/hindi/index", published: true },
	{ slug: "sticker-files/hungarian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/hungarian/index", published: true },
	{ slug: "sticker-files/indonesian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/indonesian/index", published: true },
	{ slug: "sticker-files/irish", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/irish/index", published: true },
	{ slug: "sticker-files/italian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/italian/index", published: true },
	{ slug: "sticker-files/japanese", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/japanese/index", published: true },
	{ slug: "sticker-files/korean", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/korean/index", published: true },
	{ slug: "sticker-files/malay", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/malay/index", published: true },
	{ slug: "sticker-files/norwegian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/norwegian/index", published: true },
	{ slug: "sticker-files/persian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/persian/index", published: true },
	{ slug: "sticker-files/polish", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/polish/index", published: true },
	{ slug: "sticker-files/portuguese", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/portuguese/index", published: true },
	{ slug: "sticker-files/russian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/russian/index", published: true },
	{ slug: "sticker-files/sinhala", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/sinhala/index", published: true },
	{ slug: "sticker-files/slovak", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/slovak/index", published: true },
	{ slug: "sticker-files/slovenian", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/slovenian/index", published: true },
	{ slug: "sticker-files/spanish", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/spanish/index", published: true },
	{ slug: "sticker-files/swahili", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/swahili/index", published: true },
	{ slug: "sticker-files/swedish", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/swedish/index", published: true },
	{ slug: "sticker-files/thai", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/thai/index", published: true },
	{ slug: "sticker-files/turkish", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/turkish/index", published: true },
	{ slug: "sticker-files/urdu", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/urdu/index", published: true },
	{ slug: "sticker-files/vietnamese", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/vietnamese/index", published: true },
	{ slug: "sticker-files/yoruba", phase: 11, priority: 0.4, changeFrequency: "yearly", namespace: "sticker-files/yoruba/index", published: true },

	// === Phase 12 — Nostr section ===
	// /nostr/what-is-nostr was folded into /nostr on 2026-04-23 during the
	// V2 redesign of the Nostr section. `/nostr/what-is-nostr` now
	// 301-redirects to `/nostr` via `next.config.ts`.
	{ slug: "nostr", phase: 12, priority: 0.6, changeFrequency: "monthly", namespace: "nostr/index", published: true },
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
