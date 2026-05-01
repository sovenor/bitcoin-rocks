/**
 * Data for the `/memorize-your-seed-phrase` page.
 *
 * Uses the `ContentPageData` shape (same as `/bank-runs` and `/about`)
 * with one extension added in this commit:
 *   - `callouts` — a side-by-side ✓ / ✗ pair on section 2 that anchors
 *     the "memorizing a seed phrase vs brain wallet" distinction.
 *
 * Voice notes:
 *   - Practical, second-person, beginner-safe.
 *   - Memorization is framed as a *supplemental* backup. The page is
 *     emphatic that it should rarely be the only backup.
 *   - The "this is not a brain wallet" section is load-bearing — the
 *     historical "brain wallet" technique (deriving keys from a
 *     human-chosen passphrase) was catastrophically broken, and we
 *     don't want readers conflating that with memorizing a properly
 *     generated BIP39 phrase.
 */

import type { ContentPageData } from "./bank-runs";

const BRAIN_WALLET_RESEARCH_URL =
	"https://link.springer.com/chapter/10.1007/978-3-662-54970-4_36";
const BIP39_URL =
	"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki";
const BITCOIN_WHITEPAPER_URL = "https://bitcoin.org/bitcoin.pdf";

export const MEMORIZE_YOUR_SEED_PHRASE: ContentPageData = {
	slug: "memorize-your-seed-phrase",
	namespace: "memorize-your-seed-phrase",
	metaImage: "/img/meta/meta-wallets-v3.png",
	headerKeys: {
		title: "memorize_seed_h1_title",
	},
	titleKey: "memorize_seed_page_title",
	descriptionKey: "memorize_seed_page_description",
	sections: [
		// ── 1. Intro: a backup nobody can see ─────────────────────────────
		{
			headingKey: "memorize_seed_intro_heading",
			boxed: true,
			paragraphs: [
				[{ key: "memorize_seed_intro_p1" }],
				[{ key: "memorize_seed_intro_p2" }],
				[{ key: "memorize_seed_intro_p3" }],
			],
		},

		// ── 2. This is not a "brain wallet" — intro, ✓/✗ callouts, body ─
		{
			headingKey: "memorize_seed_not_brain_wallet_heading",
			paragraphsAboveCallouts: [
				[
					{ key: "memorize_seed_not_brain_wallet_p1_a" },
					{
						key: "memorize_seed_not_brain_wallet_p1_b",
						href: BRAIN_WALLET_RESEARCH_URL,
						external: true,
					},
					{ key: "memorize_seed_not_brain_wallet_p1_c" },
				],
			],
			callouts: [
				{
					tone: "good",
					labelKey: "memorize_seed_callout_good_label",
					descriptionKey: "memorize_seed_callout_good_desc",
				},
				{
					tone: "danger",
					labelKey: "memorize_seed_callout_bad_label",
					descriptionKey: "memorize_seed_callout_bad_desc",
				},
			],
			paragraphs: [
				[{ key: "memorize_seed_not_brain_wallet_p2" }],
				[{ key: "memorize_seed_not_brain_wallet_p3" }],
			],
		},

		// ── 3. When memorization helps ────────────────────────────────────
		{
			headingKey: "memorize_seed_when_helpful_heading",
			paragraphs: [
				[{ key: "memorize_seed_when_helpful_p1" }],
				[{ key: "memorize_seed_when_helpful_p2" }],
				[{ key: "memorize_seed_when_helpful_p3" }],
			],
		},

		// ── 4. Set the safety rules first — bold lead-ins ────────────────
		{
			headingKey: "memorize_seed_rules_heading",
			paragraphs: [
				[{ key: "memorize_seed_rules_p1" }],
				[{ key: "memorize_seed_rules_p2" }],
				[{ key: "memorize_seed_rules_p3" }],
				[{ key: "memorize_seed_rules_p4" }],
				[{ key: "memorize_seed_rules_p5" }],
				[{ key: "memorize_seed_rules_p6" }],
			],
		},

		// ── 5. How to memorize twelve random words — bold lead-ins ───────
		{
			headingKey: "memorize_seed_technique_heading",
			paragraphs: [
				[{ key: "memorize_seed_technique_p1" }],
				[{ key: "memorize_seed_technique_p2" }],
				[{ key: "memorize_seed_technique_p3" }],
				[{ key: "memorize_seed_technique_p4" }],
				[{ key: "memorize_seed_technique_p5" }],
				[{ key: "memorize_seed_technique_p6" }],
			],
		},

		// ── 6. Make repetition part of your day ───────────────────────────
		{
			headingKey: "memorize_seed_repetition_heading",
			paragraphs: [
				[{ key: "memorize_seed_repetition_p1" }],
				[{ key: "memorize_seed_repetition_p2" }],
				[{ key: "memorize_seed_repetition_p3" }],
				[{ key: "memorize_seed_repetition_p4" }],
			],
		},

		// ── 7. Test yourself without leaving a trace — bold lead-ins ─────
		{
			headingKey: "memorize_seed_test_heading",
			paragraphs: [
				[{ key: "memorize_seed_test_p1" }],
				[{ key: "memorize_seed_test_p2" }],
				[{ key: "memorize_seed_test_p3" }],
				[{ key: "memorize_seed_test_p4" }],
			],
		},

		// ── 8. Don't rely on memory alone ─────────────────────────────────
		{
			headingKey: "memorize_seed_dont_rely_heading",
			paragraphs: [
				[{ key: "memorize_seed_dont_rely_p1" }],
				[{ key: "memorize_seed_dont_rely_p2" }],
				[{ key: "memorize_seed_dont_rely_p3" }],
			],
			cards: [
				{
					type: "learn-more",
					labelKey: "memorize_seed_card_wallets_label",
					titleKey: "memorize_seed_card_wallets_title",
					sourceKey: "memorize_seed_card_wallets_source",
					href: "/wallets",
					localize: true,
				},
			],
		},
	],
	sources: [
		{
			url: BIP39_URL,
			label: "Bitcoin BIPs — BIP39: Mnemonic code for generating deterministic keys",
		},
		{
			url: BRAIN_WALLET_RESEARCH_URL,
			label: "Vasek, Bonneau, Castellucci, Keith & Moore — The Bitcoin Brain Drain (Financial Cryptography 2016)",
		},
		{
			url: BITCOIN_WHITEPAPER_URL,
			label: "Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
		},
	],
};
