/**
 * Data for the `/get-involved` page.
 *
 * Uses the `ContentPageData` shape (same as `/bank-runs` + `/about`).
 * V2 redesign vs V1:
 *   - Hero: two-line `.h1-inflation` H1 (orange subtitle "SPREAD BITCOIN")
 *     instead of the legacy inline-span pattern
 *   - Dropped the inline `<img>` + `<div class="get-involved-button">` CTAs.
 *     The Phase 7 `WhatsNextCard` grid rendered by `ContentPageLayout`
 *     already drives the reader to /wallets, /buy, and
 *     /compound-inflation-calculator. Each on-page section links to its
 *     matching form page (/stickers, /postcards, /business/kit) via an
 *     inline `.body-link` at the end of its closing paragraph — this
 *     keeps the call-to-action present without a second CTA component.
 *   - The reviewed-badge + publisher attribution + sources footer are
 *     emitted by `ContentPageLayout` (same as every Phase 7 page).
 */

import type { ContentPageData } from "./bank-runs";

export const GET_INVOLVED: ContentPageData = {
	slug: "get-involved",
	namespace: "get-involved",
	metaImage: "/img/meta/meta-get-involved-v2.png",
	headerKeys: {
		title: "get_involved_header",
		subtitle: "get_involved_header_2",
	},
	titleKey: "get_involved_and_help_spread_bitcoin",
	descriptionKey: "get_involved_description",
	sections: [
		// ─── Intro (no H2 heading — rendered via a label-as-heading pattern) ───
		// The legacy page had a lead-in intro with 5 paragraphs and no
		// heading. `ContentPageLayout` requires a `headingKey` per section,
		// so we promote the first intro line ("It can be depressing…") into
		// that role. It reads naturally as a lead-in H2 and preserves the
		// original prose verbatim across all languages.
		{
			headingKey: "get_involved_intro_1",
			paragraphs: [
				[{ key: "get_involved_intro_2" }],
				[{ key: "get_involved_intro_3" }],
				[{ key: "get_involved_intro_4" }],
				[{ key: "get_involved_intro_5" }],
			],
		},

		// ─── Put a sticker in public ─────────────────────────────
		// Legacy had an inline <img> + prose + a "REQUEST A STICKER PACK"
		// button. V2 keeps the prose verbatim and ends with an inline
		// "Request a sticker pack →" link that goes to /stickers.
		{
			headingKey: "get_involved_sticker_header",
			paragraphs: [
				[{ key: "get_involved_sticker_content_1" }],
				// "Hundreds of people scan the QR codes … [Bitcoin as a solution to inflation]."
				[
					{ key: "get_involved_sticker_content_2" },
					{
						key: "get_involved_sticker_content_3",
						href: "/inflation",
						localize: true,
					},
				],
				// "The other stickers link to our educational home page … [Bitcoin is building a better world]."
				[
					{ key: "get_involved_sticker_content_4" },
					{
						key: "get_involved_sticker_content_5",
						href: "/",
						localize: true,
					},
				],
				[{ key: "get_involved_sticker_content_6" }],
				// Standalone CTA link replacing the V1 button.
				[
					{
						key: "get_involved_sticker_pack",
						href: "/stickers",
						localize: true,
					},
				],
			],
		},

		// ─── Send a postcard ─────────────────────────────────────
		{
			headingKey: "get_involved_postcard_header",
			paragraphs: [
				[{ key: "get_involved_postcard_content_1" }],
				[{ key: "get_involved_postcard_content_2" }],
				[{ key: "get_involved_postcard_content_3" }],
				[
					{
						key: "get_involved_postcard_pack",
						href: "/postcards",
						localize: true,
					},
				],
			],
		},

		// ─── Onboard a business ──────────────────────────────────
		{
			headingKey: "get_involved_business_header",
			paragraphs: [
				[{ key: "get_involved_business_content_1" }],
				// "Each business kit includes flyers … [free Bitcoin business resources]."
				[
					{ key: "get_involved_business_content_2" },
					{
						key: "get_involved_business_content_3",
						href: "/business/guide",
						localize: true,
					},
				],
				[
					{
						key: "get_involved_business_kit",
						href: "/business/kit",
						localize: true,
					},
				],
			],
		},
	],
	sources: [
		// The V1 page had no sources block — it's a CTA page, not a
		// fact-heavy reference. We include the canonical bitcoin.rocks
		// onward-destinations here to keep the Phase 7 page scaffold
		// consistent (sources → publisher → footer) across all pages.
		{
			url: "https://bitcoin.rocks/stickers",
			label: "bitcoin.rocks — Free Bitcoin Sticker Packs",
		},
		{
			url: "https://bitcoin.rocks/postcards",
			label: "bitcoin.rocks — Free Bitcoin Postcard Packs",
		},
		{
			url: "https://bitcoin.rocks/business/kit",
			label: "bitcoin.rocks — Bitcoin Business Kit",
		},
	],
};
