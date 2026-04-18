import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CategorySection } from "@/components/CategorySection";
import { HomeCarousel } from "@/components/HomeCarousel";
import { HomePill } from "@/components/HomePill";
import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildAlternates } from "@/lib/schema/hreflang";
import { buildWebSiteSchema } from "@/lib/schema/website";

/**
 * Homepage — Phase 5 port of the v2 `index.html`.
 *
 * Structure (matches the legacy page 1:1):
 *   1. Hero (h1 + intro — orange headline, grey subtitle)
 *   2. Two category carousels (infinite scroll in opposite directions)
 *   3. 20 category sections, each with 1-4 cards linking to internal
 *      pages and curated external sources
 *
 * The Navbar + Footer live in `app/[locale]/layout.tsx`. This page only
 * owns the hero + carousels + category sections. All pill + card colors
 * come from CSS classes in `app/globals.css` (driven by `--card-accent`
 * CSS variables on each `<CategorySection>`).
 *
 * Every user-facing string goes through `t()` so the same page tree
 * server-renders 55 locales with zero client hydration flash.
 */

// Shorthand for the 21 homepage pill colors + corresponding i18n keys.
// Row 1 — money/saving/life cluster. The bright-green `energy` pill sits
// mid-row so it never lands adjacent to the bright-green `money` pill.
const ROW_1_PILLS = [
	{ id: "money", color: "money" as const, labelKey: "home_btn_money" },
	{ id: "saving", color: "saving" as const, labelKey: "home_btn_saving" },
	{ id: "freedom", color: "freedom" as const, labelKey: "home_btn_freedom" },
	{
		id: "human-rights",
		color: "human-rights" as const,
		labelKey: "home_btn_human_rights",
	},
	{
		id: "equality",
		color: "equality" as const,
		labelKey: "home_btn_equality",
	},
	{
		id: "property-rights",
		color: "property-rights" as const,
		labelKey: "home_btn_property_rights",
	},
	{ id: "energy", color: "energy" as const, labelKey: "home_btn_energy" },
	{ id: "housing", color: "housing" as const, labelKey: "home_btn_housing" },
	{
		id: "business",
		color: "business" as const,
		labelKey: "home_btn_business",
	},
	{
		id: "crowdfunding",
		color: "crowdfunding" as const,
		labelKey: "home_btn_crowdfunding",
	},
	{ id: "salary", color: "salary" as const, labelKey: "home_btn_salary" },
];

// Row 2 — environment / politics / tech / get-started cluster.
const ROW_2_PILLS = [
	{
		id: "environment",
		color: "environment" as const,
		labelKey: "home_btn_environment",
	},
	{ id: "food", color: "food" as const, labelKey: "home_btn_food" },
	{ id: "art", color: "art" as const, labelKey: "home_btn_art" },
	{
		id: "politics",
		color: "politics" as const,
		labelKey: "home_btn_politics",
	},
	{ id: "war", color: "war" as const, labelKey: "home_btn_war" },
	{ id: "coding", color: "coding" as const, labelKey: "home_btn_coding" },
	{
		id: "networks",
		color: "networks" as const,
		labelKey: "home_btn_networks",
	},
	{
		id: "payments",
		color: "payments" as const,
		labelKey: "home_btn_payments",
	},
	{
		id: "self-custody",
		color: "self-custody" as const,
		labelKey: "home_btn_self_custody",
	},
	{
		id: "get-started",
		color: "get-started" as const,
		labelKey: "home_btn_you",
	},
];

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "" });

	const title = t("home_h1");
	const description = t("home_intro");

	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: "" }),
		openGraph: {
			title,
			description,
			type: "website",
			url: `https://bitcoin.rocks/${locale}`,
			images: [
				{
					url: "https://bitcoin.rocks/img/meta/meta-home-v4.png",
					width: 1200,
					height: 630,
					alt: "bitcoin.rocks",
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["https://bitcoin.rocks/img/meta/meta-home-v4.png"],
		},
	};
}

/**
 * Render one pill in both the "first set" and the "duplicate set".
 * The duplicate set is required by HomeCarousel to produce a seamless
 * infinite loop — the JS wraps scroll offset around halfWidth, which
 * only works if the duplicate visually aligns with the first set.
 */
function renderPillSet(
	pills: {
		id: string;
		color:
			| "money"
			| "saving"
			| "salary"
			| "freedom"
			| "human-rights"
			| "equality"
			| "property-rights"
			| "housing"
			| "business"
			| "crowdfunding"
			| "energy"
			| "environment"
			| "food"
			| "art"
			| "politics"
			| "war"
			| "coding"
			| "networks"
			| "payments"
			| "self-custody"
			| "get-started";
		labelKey: string;
	}[],
	t: (key: string) => string,
) {
	return (
		<>
			{pills.map((p) => (
				<HomePill key={p.id} href={`#${p.id}`} color={p.color}>
					{t(p.labelKey)}
				</HomePill>
			))}
			{pills.map((p) => (
				<HomePill
					key={`${p.id}-dup`}
					href={`#${p.id}`}
					color={p.color}
					duplicate
				>
					{t(p.labelKey)}
				</HomePill>
			))}
		</>
	);
}

export default async function LocaleHome({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations();

	const headline = t("home_h1");
	const intro = t("home_intro");

	// Per-locale internal-link prefix. All `/inflation`, `/wallets`, etc.
	// paths become `/<locale>/<slug>` so clicking on a card stays inside
	// the current locale.
	const l = `/${locale}`;

	// ── SEO ──
	const articleSchema = await buildArticleSchema({
		slug: "",
		locale,
		headline,
		description: intro,
		schemaType: "WebPage",
	});
	const websiteSchema = buildWebSiteSchema();

	return (
		<>
			<JsonLd data={websiteSchema} />
			<JsonLd data={articleSchema} />

			<div className="container-main">
				{/* ═══ HERO ═══ */}
				<div className="home-hero">
					<h1>{headline}</h1>
					<p>{intro}</p>
				</div>

				{/* ═══ CATEGORY CAROUSELS (two rows, opposite directions) ═══ */}
				<div className="home-carousel-wrap">
					<HomeCarousel direction="left">
						{renderPillSet(ROW_1_PILLS, t)}
					</HomeCarousel>
					<HomeCarousel direction="right">
						{renderPillSet(ROW_2_PILLS, t)}
					</HomeCarousel>
				</div>

				{/* ═══ MONEY ═══ */}
				<CategorySection id="money" accent="#19BC38" titleKey="home_btn_money">
					<WhatsNextCard
						href={`${l}/inflation`}
						label={t("home_card_label_inflation")}
						title={t("home_link_title_inflation")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/bank-runs`}
						label={t("home_card_label_bank_runs")}
						title={t("home_link_title_bank_runs")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/bitcoin-vs-gold`}
						label={t("home_card_label_gold")}
						title={t("home_link_title_gold")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/bitcoin-vs-cash`}
						label={t("home_card_label_cash")}
						title={t("home_link_title_cash")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
				</CategorySection>

				{/* ═══ SAVING ═══ */}
				<CategorySection
					id="saving"
					accent="#F5A9B8"
					titleKey="home_btn_saving"
				>
					<WhatsNextCard
						href={`${l}/bitcoin-vs-cbdc`}
						label={t("home_card_label_cbdc")}
						title={t("home_link_title_cbdc")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/bitcoin-vs-bonds`}
						label={t("home_card_label_bonds")}
						title={t("home_link_title_bonds")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/bitcoin-vs-crypto`}
						label={t("home_card_label_crypto")}
						title={t("home_link_title_crypto")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
				</CategorySection>

				{/* ═══ YOUR SALARY ═══ */}
				<CategorySection
					id="salary"
					accent="#2274A5"
					titleKey="home_btn_salary"
				>
					<WhatsNextCard
						href={`${l}/compound-inflation-calculator`}
						label={t("home_card_label_salary")}
						title={t("home_link_title_your_salary_1")}
						authorKey="home_link_author_cic"
					/>
				</CategorySection>

				{/* ═══ FREEDOM ═══ */}
				<CategorySection
					id="freedom"
					accent="#96041C"
					titleKey="home_btn_freedom"
				>
					<WhatsNextCard
						external
						href="https://time.com/5486673/bitcoin-venezuela-authoritarian/"
						label={t("home_card_label_freedom_1")}
						title={t("home_link_title_freedom_1")}
						authorKey="home_link_author_time_magazine"
					/>
					<WhatsNextCard
						external
						href="https://fortune.com/2021/02/18/bitcoin-censorship-political-repression-deplatforming-china-belarus-russia-nigeria-crypto/"
						label={t("home_card_label_freedom_2")}
						title={t("home_link_title_freedom_2")}
						authorKey="home_link_author_fortune"
					/>
				</CategorySection>

				{/* ═══ HUMAN RIGHTS ═══ */}
				<CategorySection
					id="human-rights"
					accent="#FF9500"
					titleKey="home_btn_human_rights"
				>
					<WhatsNextCard
						external
						href="https://anitaposch.com/bitcoin-enforces-human-rights"
						label={t("home_card_label_human_rights_1")}
						title={t("home_link_title_human_rights_1")}
						authorKey="home_link_author_anita_posch"
					/>
					<WhatsNextCard
						external
						href="https://www.youtube.com/watch?v=d5AvBsxRMYk"
						label={t("home_card_label_human_rights_2")}
						title={t("home_link_title_human_rights_2")}
						authorKey="home_link_author_youtube"
					/>
					<WhatsNextCard
						external
						href="https://www.youtube.com/watch?v=xLYYh4aPXAM"
						label={t("home_card_label_human_rights_3")}
						title={t("home_link_title_human_rights_3")}
						authorKey="home_link_author_youtube"
					/>
				</CategorySection>

				{/* ═══ EQUALITY ═══ */}
				<CategorySection
					id="equality"
					accent="#8C5383"
					titleKey="home_btn_equality"
				>
					<WhatsNextCard
						external
						href="https://www.youtube.com/watch?v=P8vlzaDSNY0"
						label={t("home_card_label_equality_1")}
						title={t("home_link_title_equality_1")}
						authorKey="home_link_author_youtube"
					/>
					<WhatsNextCard
						external
						href="https://www.youtube.com/watch?v=FuKKP5HJ934"
						label={t("home_card_label_equality_2")}
						title={t("home_link_title_equality_2")}
						authorKey="home_link_author_youtube"
					/>
				</CategorySection>

				{/* ═══ PROPERTY RIGHTS ═══ */}
				<CategorySection
					id="property-rights"
					accent="#EB4B98"
					titleKey="home_btn_property_rights"
				>
					<WhatsNextCard
						href={`${l}/bitcoin-vs-real-estate`}
						label={t("home_card_label_property_rights_1")}
						title={t("home_link_title_property_rights_2")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						external
						href="https://www.youtube.com/watch?v=mP0f2s39GDs"
						label={t("home_card_label_property_rights_2")}
						title={t("home_link_title_property_rights_1")}
						authorKey="home_link_author_youtube"
					/>
				</CategorySection>

				{/* ═══ HOUSING ═══ */}
				<CategorySection
					id="housing"
					accent="#935425"
					titleKey="home_btn_housing"
				>
					<WhatsNextCard
						external
						href="https://www.youtube.com/watch?v=OU494py-G8Y"
						label={t("home_card_label_housing_1")}
						title={t("home_link_title_housing_1")}
						authorKey="home_link_author_youtube"
					/>
				</CategorySection>

				{/* ═══ BUSINESS ═══ */}
				<CategorySection
					id="business"
					accent="#08B2E3"
					titleKey="home_btn_business"
				>
					<WhatsNextCard
						href={`${l}/bitcoin-vs-stocks`}
						label={t("home_card_label_business_1")}
						title={t("home_link_title_business_3")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/business`}
						label={t("home_card_label_business_2")}
						title={t("home_link_title_business_1")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/business/kit`}
						label={t("home_card_label_business_3")}
						title={t("home_link_title_business_2")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
				</CategorySection>

				{/* ═══ CROWDFUNDING ═══ */}
				<CategorySection
					id="crowdfunding"
					accent="#D1D646"
					titleKey="home_btn_crowdfunding"
				>
					<WhatsNextCard
						external
						href="https://qz.com/africa/1922466/how-bitcoin-powered-nigerias-endsars-protests"
						label={t("home_card_label_crowdfunding_1")}
						title={t("home_link_title_crowdfunding_1")}
						authorKey="home_link_author_quartz"
					/>
					<WhatsNextCard
						external
						href="https://finance.yahoo.com/news/canadian-trucker-protest-raises-over-161208767.html"
						label={t("home_card_label_crowdfunding_2")}
						title={t("home_link_title_crowdfunding_2")}
						authorKey="home_link_author_yahoo_finance"
					/>
					<WhatsNextCard
						external
						href="https://geyser.fund/"
						label={t("home_card_label_crowdfunding_3")}
						title={t("home_link_title_crowdfunding_3")}
						authorKey="home_link_author_geyser"
					/>
				</CategorySection>

				{/* ═══ ENERGY ═══ */}
				<CategorySection
					id="energy"
					accent="#1DFF4D"
					titleKey="home_btn_energy"
				>
					<WhatsNextCard
						external
						href="https://www.youtube.com/watch?v=48EIMlS0cIs"
						label={t("home_card_label_energy_1")}
						title={t("home_link_title_energy_1")}
						authorKey="home_link_author_youtube"
					/>
					<WhatsNextCard
						external
						href="https://www.forbes.com/sites/jemmagreen/2023/01/27/why-no-one-saw-the-success-of-demand-response-coming/"
						label={t("home_card_label_energy_4")}
						title={t("home_link_title_energy_4")}
						authorKey="home_link_author_forbes"
					/>
					<WhatsNextCard
						external
						href="https://www.coindesk.com/consensus-magazine/2023/04/17/gridless-mining-extends-power-in-africa/"
						label={t("home_card_label_energy_5")}
						title={t("home_link_title_energy_5")}
						authorKey="home_link_author_coindesk"
					/>
					<WhatsNextCard
						external
						href="https://www.youtube.com/shorts/6x_nfuNigI8"
						label={t("home_card_label_energy_6")}
						title={t("home_link_title_energy_6")}
						authorKey="home_link_author_youtube"
					/>
				</CategorySection>

				{/* ═══ THE ENVIRONMENT ═══ */}
				<CategorySection
					id="environment"
					accent="#5B7553"
					titleKey="home_btn_environment"
				>
					<WhatsNextCard
						external
						href="https://batcoinz.com/quantifying-the-potential-impact-of-bitcoin-mining-on-global-methane-emissions/"
						label={t("home_card_label_environment_1")}
						title={t("home_link_title_environment_1")}
						authorKey="home_link_author_daniel_batten"
					/>
					<WhatsNextCard
						external
						href="https://www.technologyreview.com/2023/01/13/1066820/cryptocurrency-bitcoin-mining-congo-virunga-national-park/"
						label={t("home_card_label_environment_2")}
						title={t("home_link_title_environment_2")}
						authorKey="home_link_author_mit_technology_review"
					/>
					<WhatsNextCard
						external
						href="https://bitcoinis.green/"
						label={t("home_card_label_environment_3")}
						title={t("home_link_title_environment_3")}
						authorKey="home_link_author_bitcoin_is_green"
					/>
					<WhatsNextCard
						external
						href="https://engineering.tamu.edu/news/2022/03/etid-how-two-former-students-started-mining-bitcoin-fueled-by-flared-natural-gas.html"
						label={t("home_card_label_environment_4")}
						title={t("home_link_title_environment_4")}
						authorKey="home_link_author_texas_am_university"
					/>
				</CategorySection>

				{/* ═══ FOOD ═══ */}
				<CategorySection id="food" accent="#FF571D" titleKey="home_btn_food">
					<WhatsNextCard
						external
						href="https://www.youtube.com/watch?v=Q2JrqsFDok0"
						label={t("home_card_label_food_1")}
						title={t("home_link_title_food_1")}
						authorKey="home_link_author_youtube"
					/>
					<WhatsNextCard
						external
						href="https://saifedean.com/fiatfood/"
						label={t("home_card_label_food_2")}
						title={t("home_link_title_food_2")}
						authorKey="home_link_author_saifedean_ammous"
					/>
				</CategorySection>

				{/* ═══ ART ═══ */}
				<CategorySection id="art" accent="#1F1FFF" titleKey="home_btn_art">
					<WhatsNextCard
						href={`${l}/bitcoin-vs-fine-art`}
						label={t("home_card_label_art_1")}
						title={t("home_link_title_fine_art")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/flyers`}
						label={t("home_card_label_art_2")}
						title={t("home_link_title_art_3")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/stickers`}
						label={t("home_card_label_art_3")}
						title={t("home_link_title_art_1")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
				</CategorySection>

				{/* ═══ POLITICS ═══ */}
				<CategorySection
					id="politics"
					accent="#9500FF"
					titleKey="home_btn_politics"
				>
					<WhatsNextCard
						external
						href="https://bitcoinmagazine.com/culture/bitcoins-existence-is-a-political-paradox"
						label={t("home_card_label_politics_1")}
						title={t("home_link_title_politics_1")}
						authorKey="home_link_author_bitcoin_magazine"
					/>
					<WhatsNextCard
						external
						href="https://voteforbetter.money/"
						label={t("home_card_label_politics_2")}
						title={t("home_link_title_politics_2")}
						authorKey="home_link_author_vfbm"
					/>
				</CategorySection>

				{/* ═══ WAR ═══ */}
				<CategorySection id="war" accent="#ED1C24" titleKey="home_btn_war">
					<WhatsNextCard
						external
						href="https://medium.com/@MishaGuttentag/how-bitcoin-could-end-endless-war-and-other-big-ideas-from-the-bitcoin-standard-9ec3626fd962"
						label={t("home_card_label_war_1")}
						title={t("home_link_title_war_1")}
						authorKey="home_link_author_misha_guttentag"
					/>
					<WhatsNextCard
						external
						href="https://weslippman.substack.com/p/bitcoin-and-veterans"
						label={t("home_card_label_war_2")}
						title={t("home_link_title_war_2")}
						authorKey="home_link_author_wes_lippman"
					/>
					<WhatsNextCard
						external
						href="https://www.forbes.com/sites/digital-assets/2023/07/05/how-bitcoin-helps-civilians-escape-the-war-in-sudan/"
						label={t("home_card_label_war_3")}
						title={t("home_link_title_war_3")}
						authorKey="home_link_author_forbes"
					/>
				</CategorySection>

				{/* ═══ CODING ═══ */}
				<CategorySection
					id="coding"
					accent="#89FC00"
					titleKey="home_btn_coding"
				>
					<WhatsNextCard
						external
						href="https://trybitcoin.satsie.dev/"
						label={t("home_card_label_coding_1")}
						title={t("home_link_title_coding_1")}
						authorKey="home_link_author_satsie"
					/>
					<WhatsNextCard
						external
						href="https://savingsatoshi.com/"
						label={t("home_card_label_coding_3")}
						title={t("home_link_title_coding_3")}
						authorKey="home_link_author_saving_satoshi"
					/>
					<WhatsNextCard
						external
						href="https://www.youtube.com/watch?v=QIgzxG-QP3Q"
						label={t("home_card_label_coding_2")}
						title={t("home_link_title_coding_2")}
						authorKey="home_link_author_makerbits"
					/>
				</CategorySection>

				{/* ═══ NETWORKS ═══ */}
				<CategorySection
					id="networks"
					accent="#1E3A8A"
					titleKey="home_btn_networks"
				>
					<WhatsNextCard
						external
						href="https://mempool.space/"
						label={t("home_card_label_networks_1")}
						title={t("home_link_title_networks_1")}
						authorKey="home_link_author_mempool_space"
					/>
					<WhatsNextCard
						href={`${l}/bitcoin-vs-banks`}
						label={t("home_card_label_networks_2")}
						title={t("home_link_title_networks_2")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
				</CategorySection>

				{/* ═══ PAYMENTS ═══ */}
				<CategorySection
					id="payments"
					accent="#FFE91D"
					titleKey="home_btn_payments"
				>
					<WhatsNextCard
						href={`${l}/bitcoin-vs-visa`}
						label={t("home_card_label_payments_1")}
						title={t("home_link_title_payments_1")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						external
						href="https://www.swanbitcoin.com/a-look-at-the-lightning-network/"
						label={t("home_card_label_payments_2")}
						title={t("home_link_title_payments_2")}
						authorKey="home_link_author_lyn_alden"
					/>
					<WhatsNextCard
						external
						href="https://blockworks.co/news/el-salvador-bitcoin-wallet-could-disrupt-traditional-remittance-markets"
						label={t("home_card_label_payments_3")}
						title={t("home_link_title_payments_3")}
						authorKey="home_link_author_blockworks"
					/>
					<WhatsNextCard
						external
						href="https://lightningaddress.com/"
						label={t("home_card_label_payments_4")}
						title={t("home_link_title_payments_4")}
						authorKey="home_link_author_lightning_address"
					/>
				</CategorySection>

				{/* ═══ SELF-CUSTODY ═══ */}
				<CategorySection
					id="self-custody"
					accent="#B3FFFC"
					titleKey="home_btn_self_custody"
				>
					<WhatsNextCard
						href={`${l}/wallets`}
						label={t("home_card_label_self_custody_1")}
						title={t("home_link_title_self_custody_1")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						external
						href="https://armantheparman.com/withdraw/"
						label={t("home_card_label_self_custody_2")}
						title={t("home_link_title_self_custody_2")}
						authorKey="home_link_author_arman_the_parman"
					/>
					<WhatsNextCard
						external
						href="https://www.lynalden.com/gold-and-bitcoin/"
						label={t("home_card_label_self_custody_3")}
						title={t("home_link_title_self_custody_3")}
						authorKey="home_link_author_lyn_alden"
					/>
				</CategorySection>

				{/* ═══ YOU (GET STARTED) ═══ */}
				<CategorySection
					id="get-started"
					accent="#FF9500"
					titleKey="home_btn_you"
				>
					<WhatsNextCard
						external
						href="https://bitcoin-explorama.com/"
						label={t("home_card_label_get_started_1")}
						title={t("home_link_title_get_started_1")}
						authorKey="home_link_author_bitcoin_explorama"
					/>
					<WhatsNextCard
						href={`${l}/wallets`}
						label={t("home_card_label_get_started_2")}
						title={t("home_link_title_get_started_2")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
					<WhatsNextCard
						href={`${l}/buy`}
						label={t("home_card_label_get_started_3")}
						title={t("home_link_title_get_started_3")}
						authorKey="home_link_author_bitcoin_rocks"
					/>
				</CategorySection>
			</div>
		</>
	);
}
