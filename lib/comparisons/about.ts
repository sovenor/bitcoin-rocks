/**
 * Data for the `/about` page.
 *
 * Uses the `ContentPageData` shape (same as `/bank-runs`): two-line
 * hero H1 + a sequence of H2 + paragraphs. Ported from the legacy
 * `about.html`, reused the existing flat fragment keys verbatim
 * (including the inline `<a>` fragments for 3 sticker/flyer/kit links
 * in the "What We Do" section and the GitHub/open-source links).
 *
 * V2 redesign changes vs V1:
 *   - Hero uses `.h1-inflation` (V2) instead of legacy `.h1-about` pattern
 *   - "Reviewed for accuracy" badge + publisher attribution come from
 *     `ContentPageLayout`; no need for inline `<div class="reviewed-badge">`
 *   - Dropped the standalone `.back-to-home` logo link — the Phase 3 V2
 *     Navbar that sits above `{children}` already provides that
 *   - "What's next?" card grid comes from `ContentPageLayout` (replaces
 *     the legacy page which had no onward-journey cards at the bottom)
 *
 * The `about_contact_github` label is rendered in the final section
 * as plain prose; the legacy HTML had email/nostr/github rows inline,
 * which we preserve here via the `href` fragment shape. The "GitHub:"
 * label line-break behavior mirrors the legacy `<p>` layout.
 */

import type { ContentPageData } from "./bank-runs";

export const ABOUT: ContentPageData = {
	slug: "about",
	namespace: "about",
	metaImage: "/img/meta/meta-home-v4.png",
	headerKeys: {
		title: "about_header",
		subtitle: "about_header_2",
	},
	titleKey: "about_page_title",
	descriptionKey: "about_page_description",
	sections: [
		// ─── Our Mission ─────────────────────────────────────────
		{
			headingKey: "about_mission_header",
			paragraphs: [
				[{ key: "about_mission_1" }],
				[{ key: "about_mission_2" }],
				[{ key: "about_mission_3" }],
			],
		},

		// ─── What We Do ──────────────────────────────────────────
		{
			headingKey: "about_what_we_do_header",
			paragraphs: [
				[{ key: "about_what_we_do_1" }],
				// "We mail [free Bitcoin stickers] to your door so you can…"
				[
					{ key: "about_what_we_do_2a" },
					{
						key: "about_what_we_do_2b",
						href: "/stickers",
						localize: true,
					},
					{ key: "about_what_we_do_2c" },
				],
				// "We also provide [printable flyers] and [business kits]…"
				[
					{ key: "about_what_we_do_3a" },
					{
						key: "about_what_we_do_3b",
						href: "/flyers",
						localize: true,
					},
					{ key: "about_what_we_do_3c" },
					{
						key: "about_what_we_do_3d",
						href: "/business/kit",
						localize: true,
					},
					{ key: "about_what_we_do_3e" },
				],
				[{ key: "about_what_we_do_4" }],
			],
		},

		// ─── Editorial Approach ──────────────────────────────────
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
				// "bitcoin.rocks is a free, open-source project … [on GitHub]."
				[
					{ key: "about_open_source_1a" },
					{
						key: "about_open_source_1b",
						href: "https://github.com/sovenor/bitcoin-rocks",
						external: true,
					},
					{ key: "about_open_source_1c" },
				],
				[{ key: "about_open_source_2" }],
				[{ key: "about_open_source_3" }],
				// "Learn how to contribute." — standalone link-as-paragraph.
				[
					{
						key: "about_open_source_contribute",
						href: "https://github.com/sovenor/bitcoin-rocks/blob/main/CONTRIBUTING.md",
						external: true,
					},
				],
			],
		},

		// ─── Contact Us ──────────────────────────────────────────
		// Three contact rows. Each paragraph starts with a plain-text
		// label fragment ("Email:" / "Nostr:" / "GitHub:") followed by
		// a link fragment. The URL is the same as the label for Nostr +
		// GitHub; for email it's a `mailto:` so `external: true` is unset
		// (the anchor renders without target="_blank").
		{
			headingKey: "about_contact_header",
			paragraphs: [
				[{ key: "about_contact_1" }],
				[
					{ key: "about_contact_email" },
					{
						key: "about_contact_email_addr",
						href: "mailto:hi@bitcoin.rocks",
					},
				],
				[
					{ key: "about_contact_nostr" },
					{
						key: "about_contact_nostr_handle",
						href: "https://snort.social/p/npub18kpw3akvdsyk239lx0jgwksr74sq4nlha3r8u9g2rnrhztfpfhysy469c4",
						external: true,
					},
				],
				[
					{ key: "about_contact_github" },
					{
						key: "about_contact_github_url",
						href: "https://github.com/sovenor/bitcoin-rocks",
						external: true,
					},
				],
			],
		},
	],
	sources: [
		// About pages don't cite external data — the "sources" here are
		// the canonical about-page references (GitHub repo + license +
		// contact). This mirrors the legacy page which had no sources
		// block; we include a short list to keep the V2 page structure
		// consistent with other Phase 7/8 pages.
		{
			url: "https://github.com/sovenor/bitcoin-rocks",
			label: "bitcoin.rocks — Open-source repository on GitHub",
		},
		{
			url: "https://github.com/sovenor/bitcoin-rocks/blob/main/LICENSE.md",
			label: "bitcoin.rocks — MIT License",
		},
		{
			url: "https://github.com/sovenor/bitcoin-rocks/blob/main/CONTRIBUTING.md",
			label: "bitcoin.rocks — Contributing Guide",
		},
	],
};
