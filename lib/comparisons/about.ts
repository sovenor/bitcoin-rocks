/**
 * Data for the `/about` page.
 *
 * Uses the `ContentPageData` shape (same as `/bank-runs`): single-line
 * hero H1 + a sequence of H2 + paragraphs. Links that used to appear
 * inline in the prose are now rendered as V2-style learn-more cards
 * (same shape as the cards on `/bank-runs` and `/inflation`), which
 * keeps the onward-journey CTAs visually consistent across the site.
 *
 * V2 redesign notes:
 *   - Single H1 "About bitcoin.rocks" in regular case (not caps)
 *   - "Our Mission" section is boxed (`boxed: true`) — rendered
 *     inside a V2 surface card with a border, matching the intro
 *     card on `/get-involved`. The "Our Mission" H2 stays inside
 *     the box.
 *   - Inline link to `sovenor` (via `SummaryFragment.href`) in the
 *     first paragraph of the mission
 *   - Each section's links become learn-more cards after the prose
 *   - Trusted-sources list (in `about_editorial_2`) no longer
 *     mentions TIME Magazine and now cites FRED / BLS / FDIC / UN /
 *     World Gold Council / James Lavish to match the sources we
 *     actually cite across the site
 */

import type { ContentPageData } from "./bank-runs";

export const ABOUT: ContentPageData = {
	slug: "about",
	namespace: "about",
	metaImage: "/img/meta/meta-home-v4.png",
	headerKeys: {
		title: "about_header",
	},
	titleKey: "about_page_title",
	descriptionKey: "about_page_description",
	sections: [
		// ─── Our Mission ─────────────────────────────────────────
		// Boxed intro matching the top intro card on `/get-involved`
		// and `/stickers`: a V2 surface card with a border wrapping
		// both the "Our Mission" H2 and the mission prose. First
		// paragraph embeds an inline link to https://github.com/sovenor
		// on the word "sovenor".
		{
			headingKey: "about_mission_header",
			boxed: true,
			paragraphs: [
				[
					{ key: "about_mission_1a" },
					{
						key: "about_mission_1_sovenor",
						href: "https://github.com/sovenor",
						external: true,
					},
					{ key: "about_mission_1b" },
				],
				[{ key: "about_mission_2" }],
				[{ key: "about_mission_3" }],
			],
		},

		// ─── What We Do ──────────────────────────────────────────
		// Two lead paragraphs describe the overall "What We Do", then
		// each of the three outreach initiatives (stickers / flyers /
		// business) gets its own short blurb + learn-more card.
		// The blurbs render via the card's `introParagraphs` so the
		// layout flows blurb → card → blurb → card → blurb → card
		// (see the `.content-learn-more-stack` branch in
		// `<ContentCardsBlock>`).
		{
			headingKey: "about_what_we_do_header",
			paragraphs: [
				[{ key: "about_what_we_do_1" }],
				[{ key: "about_what_we_do_4" }],
			],
			cards: [
				{
					type: "learn-more",
					labelKey: "about_card_stickers_label",
					titleKey: "about_card_stickers_title",
					sourceKey: "about_card_stickers_source",
					href: "/stickers",
					localize: true,
					introParagraphs: [[{ key: "about_stickers_blurb" }]],
				},
				{
					type: "learn-more",
					labelKey: "about_card_flyers_label",
					titleKey: "about_card_flyers_title",
					sourceKey: "about_card_flyers_source",
					href: "/flyers",
					localize: true,
					introParagraphs: [[{ key: "about_flyers_blurb" }]],
				},
				{
					type: "learn-more",
					labelKey: "about_card_business_label",
					titleKey: "about_card_business_title",
					sourceKey: "about_card_business_source",
					href: "/business",
					localize: true,
					introParagraphs: [[{ key: "about_business_blurb" }]],
				},
			],
		},

		// ─── Editorial Approach ──────────────────────────────────
		// No cards — just the three prose paragraphs. `about_editorial_2`
		// cites the actual sources we link to across the site (FRED, BLS,
		// FDIC, UN, World Gold Council, Forbes, MIT Technology Review,
		// Lyn Alden, James Lavish). TIME Magazine removed per Apr 2026
		// content review.
		{
			headingKey: "about_editorial_header",
			paragraphs: [
				[{ key: "about_editorial_1" }],
				[{ key: "about_editorial_2" }],
				[{ key: "about_editorial_3" }],
			],
		},

		// ─── Open Source ─────────────────────────────────────────
		{
			headingKey: "about_open_source_header",
			paragraphs: [
				[{ key: "about_open_source_2" }],
				[{ key: "about_open_source_3" }],
			],
			cards: [
				{
					type: "learn-more",
					labelKey: "about_card_github_label",
					titleKey: "about_card_github_title",
					sourceKey: "about_card_github_source",
					href: "https://github.com/sovenor/bitcoin-rocks",
					external: true,
				},
				{
					type: "learn-more",
					labelKey: "about_card_contribute_label",
					titleKey: "about_card_contribute_title",
					sourceKey: "about_card_contribute_source",
					href: "https://github.com/sovenor/bitcoin-rocks/blob/main/CONTRIBUTING.md",
					external: true,
				},
			],
		},

		// ─── Contact Us ──────────────────────────────────────────
		// Three contact rows promoted from plain `<p>` prose into
		// learn-more cards so they match every other section's visual
		// rhythm. Email uses `mailto:`, Nostr points at primal.net,
		// GitHub points at the repo.
		{
			headingKey: "about_contact_header",
			paragraphs: [[{ key: "about_contact_1" }]],
			cards: [
				{
					type: "learn-more",
					labelKey: "about_card_email_label",
					titleKey: "about_card_email_title",
					sourceKey: "about_card_email_source",
					href: "mailto:hi@bitcoin.rocks",
				},
				{
					type: "learn-more",
					labelKey: "about_card_nostr_label",
					titleKey: "about_card_nostr_title",
					sourceKey: "about_card_nostr_source",
					href: "https://primal.net/p/nprofile1qqsrmqhg7mxxczt9gjln8ey8tgpl2cq2elm7c3n7z59pe3m395s5mjgnfsua2",
					external: true,
				},
				{
					type: "learn-more",
					labelKey: "about_card_contact_github_label",
					titleKey: "about_card_contact_github_title",
					sourceKey: "about_card_contact_github_source",
					href: "https://github.com/sovenor/bitcoin-rocks",
					external: true,
				},
			],
		},
	],
	// No sources block on /about — it's an editorial/organizational page,
	// not a fact-heavy reference. `ContentPageLayout` hides the section
	// entirely when `sources` is omitted.
};
