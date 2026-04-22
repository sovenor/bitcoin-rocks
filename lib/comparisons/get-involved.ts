/**
 * Data for the `/get-involved` page.
 *
 * V2 redesign (Apr 2026):
 *   - Single-line hero H1 "Get involved and spread Bitcoin."
 *   - Intro (first section) is centered hero-style
 *   - Each outreach initiative (stickers / flyers / business kit /
 *     github) ends with a `learn-more` card — same visual pattern as
 *     the `/about` page's What-We-Do section — instead of the legacy
 *     inline `.biz-*`-style CTA buttons.
 *   - Postcards section removed (program retired).
 *   - New "Contribute on GitHub" section added; bitcoin.rocks is
 *     an open-source project and we want to recruit contributors.
 *
 * `ContentPageLayout` handles the hero, the sections, the learn-more
 * cards, the global "What's next?" card grid, and the publisher
 * attribution footer. No sources block — /get-involved is a CTA page.
 */

import type { ContentPageData } from "./bank-runs";

export const GET_INVOLVED: ContentPageData = {
	slug: "get-involved",
	namespace: "get-involved",
	metaImage: "/img/meta/meta-get-involved-v2.png",
	headerKeys: {
		title: "get_involved_header",
	},
	titleKey: "get_involved_and_help_spread_bitcoin",
	descriptionKey: "get_involved_description",
	sections: [
		// ─── Intro (centered lead-in) ────────────────────────────
		// The legacy page had a lead-in with no heading. `ContentPageLayout`
		// requires a `headingKey`, so the first intro line is promoted
		// to that role. `centered: true` matches the /about "Our Mission"
		// hero-style treatment.
		{
			headingKey: "get_involved_intro_1",
			centered: true,
			paragraphs: [
				[{ key: "get_involved_intro_2" }],
				[{ key: "get_involved_intro_3" }],
				[{ key: "get_involved_intro_4" }],
				[{ key: "get_involved_intro_5" }],
			],
		},

		// ─── Put a sticker in public ─────────────────────────────
		{
			headingKey: "get_involved_sticker_header",
			image: {
				src: "/img/stickers/web-sticker-pack-text.png",
				altKey: "get_involved_sticker_image_alt",
				href: "/stickers",
				localize: true,
			},
			paragraphs: [
				[{ key: "get_involved_sticker_content_1" }],
				[
					{ key: "get_involved_sticker_content_2" },
					{
						key: "get_involved_sticker_content_3",
						href: "/inflation",
						localize: true,
					},
				],
				[
					{ key: "get_involved_sticker_content_4" },
					{
						key: "get_involved_sticker_content_5",
						href: "/",
						localize: true,
					},
				],
				[{ key: "get_involved_sticker_content_6" }],
			],
			cards: [
				{
					type: "learn-more",
					labelKey: "get_involved_card_stickers_label",
					titleKey: "get_involved_card_stickers_title",
					sourceKey: "get_involved_card_stickers_source",
					href: "/stickers",
					localize: true,
				},
			],
		},

		// ─── Print a flyer ──────────────────────────────────────
		// Replaces the retired postcard section. The flyer campaign
		// is already a live program with its own page at /flyers.
		{
			headingKey: "get_involved_flyers_header",
			image: {
				src: "/img/flyers/flyer-1-header.png",
				altKey: "get_involved_flyers_image_alt",
				href: "/flyers",
				localize: true,
			},
			paragraphs: [
				[{ key: "get_involved_flyers_content_1" }],
				[{ key: "get_involved_flyers_content_2" }],
				[{ key: "get_involved_flyers_content_3" }],
			],
			cards: [
				{
					type: "learn-more",
					labelKey: "get_involved_card_flyers_label",
					titleKey: "get_involved_card_flyers_title",
					sourceKey: "get_involved_card_flyers_source",
					href: "/flyers",
					localize: true,
				},
			],
		},

		// ─── Onboard a business ──────────────────────────────────
		{
			headingKey: "get_involved_business_header",
			paragraphs: [
				[{ key: "get_involved_business_content_1" }],
				[
					{ key: "get_involved_business_content_2" },
					{
						key: "get_involved_business_content_3",
						href: "/business",
						localize: true,
					},
				],
			],
			cards: [
				{
					type: "learn-more",
					labelKey: "get_involved_card_business_label",
					titleKey: "get_involved_card_business_title",
					sourceKey: "get_involved_card_business_source",
					href: "/business/kit",
					localize: true,
				},
			],
		},

		// ─── Contribute on GitHub ────────────────────────────────
		// bitcoin.rocks is open source (MIT) and community-driven.
		// This section recruits developers, designers, writers, and
		// translators directly from the Get Involved page.
		{
			headingKey: "get_involved_github_header",
			paragraphs: [
				[{ key: "get_involved_github_content_1" }],
				[{ key: "get_involved_github_content_2" }],
				[{ key: "get_involved_github_content_3" }],
			],
			cards: [
				{
					type: "learn-more",
					labelKey: "get_involved_card_github_label",
					titleKey: "get_involved_card_github_title",
					sourceKey: "get_involved_card_github_source",
					href: "https://github.com/sovenor/bitcoin-rocks",
					external: true,
				},
			],
		},
	],
	// No sources block on /get-involved — it's a CTA page.
};
