import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CountrySelector, type CurrencyButton } from "@/components/CountrySelector";
import { CurrencySection } from "@/components/CurrencySection";
import { DynamicHeader } from "@/components/DynamicHeader";
import { InflationStats } from "@/components/InflationStats";
import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * Inflation page (Phases 6a + 6b complete).
 *
 * Mirrors `inflation.html` structure line-for-line:
 *   1. Orange H1 (with `#changing-header` so `<DynamicHeader>` can swap
 *      it based on `?sticker=` / `?sign=` / `?link=` URL params)
 *   2. 13 currency picker buttons (USD, CAD, EUR, GBP, BRL, PHP, MXN, INR,
 *      JPY, AUD, ILS, THB, NZD) rendered by `<CountrySelector>`
 *   3. 13 `<CurrencySection>` blocks (one shown at a time, toggled by
 *      `<CountrySelector>`)
 *   4. Global "What's next?" grid (4 cards) — revealed after a currency
 *      is selected
 *   5. Sources block (GEO trust signals)
 *   6. Publisher attribution + Reviewed-for-accuracy badge
 *
 * Client Components mounted here:
 *   - `<CountrySelector>`  — wraps all 13 sections, toggles `hidden`
 *   - `<InflationStats>`   — fetches forms-backend + populates `stat-*-${code}`
 *   - `<DynamicHeader>`    — reads URL params + rewrites `#changing-header`
 */

// ─── Per-currency FRED + Bitcoin Price Report URLs ───────────────────
// Mirrors `scripts/inflation-multi/rebuild-inflation-html.js` SOURCE_URLS.
type CurrencyUrls = { m1: string; debt: string | null; cpi: string; btcChart: string };
const CURRENCY_URLS: Record<string, CurrencyUrls> = {
	USD: {
		m1: "https://fred.stlouisfed.org/series/M1SL",
		debt: "https://fred.stlouisfed.org/series/GFDEBTN",
		cpi: "https://fred.stlouisfed.org/series/CPIAUCSL",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-usd?chart=4y",
	},
	CAD: {
		m1: "https://fred.stlouisfed.org/series/MANMM101CAM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTACAA188N",
		cpi: "https://fred.stlouisfed.org/series/CPALTT01CAM659N",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-canadian-dollars?chart=4y",
	},
	EUR: {
		m1: "https://fred.stlouisfed.org/series/MANMM101EZM189S",
		debt: null,
		cpi: "https://fred.stlouisfed.org/series/CP0000EZ19M086NEST",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-euros?chart=4y",
	},
	GBP: {
		m1: "https://fred.stlouisfed.org/series/MANMM101GBM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTAGBA188N",
		cpi: "https://fred.stlouisfed.org/series/CPALTT01GBM659N",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-british-pounds?chart=4y",
	},
	BRL: {
		m1: "https://fred.stlouisfed.org/series/MANMM101BRM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTABRA188N",
		cpi: "https://fred.stlouisfed.org/series/CPALTT01BRM659N",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-brazilian-real?chart=4y",
	},
	PHP: {
		m1: "https://fred.stlouisfed.org/series/MANMM101PHM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTAPHA188N",
		cpi: "https://fred.stlouisfed.org/series/FPCPITOTLZGPHL",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-philippine-pesos?chart=4y",
	},
	MXN: {
		m1: "https://fred.stlouisfed.org/series/MANMM101MXM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTAMXA188N",
		cpi: "https://fred.stlouisfed.org/series/CPALTT01MXM659N",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-mexican-pesos?chart=4y",
	},
	INR: {
		m1: "https://fred.stlouisfed.org/series/MANMM101INM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTAINA188N",
		cpi: "https://fred.stlouisfed.org/series/INDCPIALLMINMEI",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-indian-rupees?chart=4y",
	},
	JPY: {
		m1: "https://fred.stlouisfed.org/series/MANMM101JPM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTAJPA188N",
		cpi: "https://fred.stlouisfed.org/series/JPNCPIALLMINMEI",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-japanese-yen?chart=4y",
	},
	AUD: {
		m1: "https://fred.stlouisfed.org/series/MANMM101AUM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTAAUA188N",
		cpi: "https://fred.stlouisfed.org/series/CPALTT01AUM659N",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-australian-dollars?chart=4y",
	},
	ILS: {
		m1: "https://fred.stlouisfed.org/series/MANMM101ILM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTAILA188N",
		cpi: "https://fred.stlouisfed.org/series/ISRCPIALLMINMEI",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-israeli-shekels?chart=4y",
	},
	THB: {
		m1: "https://fred.stlouisfed.org/series/MANMM101THM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTATHA188N",
		cpi: "https://fred.stlouisfed.org/series/CPALTT01THM659N",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-thai-baht?chart=4y",
	},
	NZD: {
		m1: "https://fred.stlouisfed.org/series/MANMM101NZM189S",
		debt: "https://fred.stlouisfed.org/series/GGGDTANZA188N",
		cpi: "https://fred.stlouisfed.org/series/CPALTT01NZQ659N",
		btcChart: "https://bitcoinpricereport.com/bitcoin-priced-in-new-zealand-dollars?chart=4y",
	},
};

// Currency picker buttons in the same order as the legacy page.
// Flag emoji pairs are preserved from the original inflation.html.
type CurrencyDef = {
	code: string;
	className: string;
	flag: string;
	labelKey: string;
};
const CURRENCIES: CurrencyDef[] = [
	{ code: "USD", className: "inf-usdollar", flag: "🇺🇸", labelKey: "inflation_us_dollar" },
	{ code: "AUD", className: "inf-aud", flag: "🇦🇺", labelKey: "inflation_australian_dollar" },
	{ code: "BRL", className: "inf-real", flag: "🇧🇷", labelKey: "inflation_brazilian_real" },
	{ code: "GBP", className: "inf-euro", flag: "🇬🇧", labelKey: "inflation_british_pound" },
	{ code: "CAD", className: "inf-caddollar", flag: "🇨🇦", labelKey: "inflation_canadian_dollar" },
	{ code: "EUR", className: "inf-euro", flag: "🇪🇺", labelKey: "inflation_euro" },
	{ code: "INR", className: "inf-india", flag: "🇮🇳", labelKey: "inflation_indian_rupee" },
	{ code: "ILS", className: "inf-israel", flag: "🇮🇱", labelKey: "inflation_israeli_shekel" },
	{ code: "JPY", className: "inf-japan", flag: "🇯🇵", labelKey: "inflation_japanese_yen" },
	{ code: "MXN", className: "inf-mexico", flag: "🇲🇽", labelKey: "inflation_mexican_peso" },
	{ code: "NZD", className: "inf-nz", flag: "🇳🇿", labelKey: "inflation_nz_dollar" },
	{ code: "PHP", className: "inf-philippine", flag: "🇵🇭", labelKey: "inflation_philippine_peso" },
	{ code: "THB", className: "inf-thai", flag: "🇹🇭", labelKey: "inflation_thai_baht" },
];

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const title = t("bitcoin_doesnt_have_inflation");
	const description = t("inflation_description");

	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: "inflation" }),
		openGraph: {
			title,
			description,
			type: "article",
			url: `https://bitcoin.rocks/${locale}/inflation`,
			images: [
				{
					url: "https://bitcoin.rocks/img/meta/meta-inflation-v3.png",
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: ["https://bitcoin.rocks/img/meta/meta-inflation-v3.png"],
		},
	};
}

export default async function InflationPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations({ locale });
	const l = `/${locale}`;

	// ── Translations used directly on the page (rather than inside a
	// Server Component that resolves its own via useTranslations) ──
	const headline = t("bitcoin_doesnt_have_inflation");
	const description = t("inflation_description");
	const chooseLabel = t("inflation_choose");
	const chooseBackLabel = t("inflation_choose_another");

	// Currency button labels (already-translated strings passed into the
	// Client Component so it doesn't need to bring next-intl into the
	// client bundle).
	const currencyButtons: CurrencyButton[] = CURRENCIES.map((c) => ({
		code: c.code,
		className: c.className,
		flag: c.flag,
		label: t(c.labelKey),
	}));

	// ── SEO schemas (Phase 4 helpers) ──
	// Pass the canonical high-authority citations to the Article schema
	// so Google + AI answer engines can parse the page's authoritative
	// sources as a strong E-E-A-T / GEO signal. Kept to a focused list
	// (rather than all ~60 per-currency URLs) to keep the JSON-LD
	// payload readable — the per-currency FRED URLs are linked in the
	// visible Sources block below for readers.
	const articleSchema = await buildArticleSchema({
		slug: "inflation",
		locale,
		headline,
		description,
		schemaType: "Article",
		citations: [
			{
				url: "https://fred.stlouisfed.org/series/M1SL",
				name: "M1 Money Supply (U.S. Dollar)",
				publisher: "Federal Reserve Bank of St. Louis — FRED",
			},
			{
				url: "https://fred.stlouisfed.org/categories/234",
				name: "Narrow Money Supply — International Series",
				publisher: "Federal Reserve Bank of St. Louis — FRED",
			},
			{
				url: "https://fred.stlouisfed.org/series/CPIAUCSL",
				name: "Consumer Price Index for All Urban Consumers",
				publisher: "Federal Reserve Bank of St. Louis — FRED",
			},
			{
				url: "https://www.bls.gov/cpi/",
				name: "Consumer Price Index",
				publisher: "U.S. Bureau of Labor Statistics",
			},
			{
				url: "https://fred.stlouisfed.org/series/GFDEBTN",
				name: "Federal Debt: Total Public Debt",
				publisher: "Federal Reserve Bank of St. Louis — FRED",
			},
			{
				url: "https://bitcoinpricereport.com/",
				name: "Bitcoin Price Report — 4-year performance charts",
				publisher: "Bitcoin Price Report",
			},
			{
				url: "https://mempool.space",
				name: "Bitcoin Supply & Mining Data",
				publisher: "Mempool.space",
			},
			{
				url: "https://github.com/bitcoin/bitcoin",
				name: "Bitcoin Source Code — 21 Million Supply Cap",
				publisher: "Bitcoin Core contributors",
			},
			{
				url: "https://bitcoin.org/bitcoin.pdf",
				name: "Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
				publisher: "Satoshi Nakamoto",
			},
			{
				url: "https://www.jameslavish.com/p/can-a-treasury-auction-fail",
				name: "Can a Treasury Auction Fail?",
				publisher: "James Lavish — The Informationist",
			},
			{
				url: "https://www.youtube.com/watch?v=-gpaXXHEhQQ",
				name: "Canadian trucker protest: Bitcoin used to bypass frozen bank accounts",
				publisher: "YouTube",
			},
			{
				url: "https://qz.com/africa/1922466/how-bitcoin-powered-nigerias-endsars-protests",
				name: "How Bitcoin powered Nigeria's EndSARS protests",
				publisher: "Quartz Africa",
			},
			{
				url: "https://www.youtube.com/watch?v=48EIMlS0cIs",
				name: "Texas Bitcoin mining and the electric grid",
				publisher: "YouTube",
			},
			{
				url: "https://www.youtube.com/watch?v=GtrhfMacYE4",
				name: "Pennsylvania Bitcoin mining reclaims waste methane",
				publisher: "YouTube",
			},
		],
	});
	const breadcrumbSchema = buildBreadcrumbSchema({
		slug: "inflation",
		locale,
		pageTitle: headline,
	});

	return (
		<>
			<JsonLd data={articleSchema} />
			{breadcrumbSchema !== null && <JsonLd data={breadcrumbSchema} />}

			{/* ═══ Phase 6b Client Components ═══
			    These render nothing themselves but mount side-effects:
			    - InflationStats: fetches forms-backend + populates stat cards
			    - DynamicHeader: reads ?sticker/?sign/?link + swaps `#changing-header`
			    Both are cheap to hydrate (no server-rendered children). */}
			<InflationStats />
			<DynamicHeader />

			<div className="container-main">
				{/* ═══ HERO ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<h1>
							<span id="changing-header">
								{t("inflation_h1_orange")}
							</span>
						</h1>
					</div>
				</div>

				{/* ═══ COUNTRY SELECTOR + per-currency sections ═══ */}
				<CountrySelector
					currencies={currencyButtons}
					chooseLabel={chooseLabel}
					chooseBackLabel={chooseBackLabel}
				>
					{CURRENCIES.map((c) => {
						const urls = CURRENCY_URLS[c.code];
						return (
							<CurrencySection
								key={c.code}
								code={c.code}
								btcChartUrl={urls.btcChart}
								cpiUrl={urls.cpi}
								m1Url={urls.m1}
								debtUrl={urls.debt}
							/>
						);
					})}

					{/* ═══ GLOBAL "What's next?" — revealed after a currency is chosen.
					    Visibility is handled by the parent CountrySelector's data
					    attributes + the `#global-whats-next-wrap[hidden]` CSS. ═══ */}
					<div
						id="global-whats-next-wrap"
						className="whats-next-section"
						hidden
					>
						<div className="container-inner">
							<div className="whats-next-header">
								<h2>{t("common_whats_next")}</h2>
							</div>
							<div className="whats-next-grid">
								<WhatsNextCard
									href={l}
									label={t("common_next_keep_learning")}
									title={t("common_next_keep_learning_desc")}
									authorKey="common_publisher_name"
								/>
								<WhatsNextCard
									href={`${l}/wallets`}
									label={t("common_next_get_wallet")}
									title={t("common_next_get_wallet_desc")}
									authorKey="common_publisher_name"
								/>
								<WhatsNextCard
									href={`${l}/buy`}
									label={t("common_next_buy_bitcoin")}
									title={t("common_next_buy_bitcoin_desc")}
									authorKey="common_publisher_name"
								/>
								<WhatsNextCard
									href={`${l}/compound-inflation-calculator`}
									label={t("common_next_calculate")}
									title={t("common_next_calculate_desc")}
									authorKey="common_publisher_name"
								/>
							</div>
						</div>
					</div>
				</CountrySelector>

				<div className="break-micro" />

				{/* ═══ SOURCES (GEO trust signals) ═══
				    Grouped by data category. The per-currency lists are
				    generated from CURRENCY_URLS + CURRENCIES above so adding
				    a new currency automatically adds it to all three
				    per-currency groups (money supply, CPI, debt). ═══ */}
				<div className="sources-section">
					<div className="container-inner">
						<h2 className="sources-heading">{t("common_sources_heading")}</h2>

						{/* ── Money supply (M1) — per-currency FRED ─────── */}
						<section className="sources-group">
							<h3 className="sources-group-title">
								{t("common_sources_group_money")}
							</h3>
							<ul className="sources-list">
								{CURRENCIES.map((c) => (
									<li key={`m1-${c.code}`}>
										<a
											href={CURRENCY_URLS[c.code].m1}
											target="_blank"
											rel="noopener noreferrer"
										>
											Federal Reserve Economic Data (FRED) —{" "}
											{t(c.labelKey)} ({c.code})
										</a>
									</li>
								))}
								<li>
									<a
										href="https://fred.stlouisfed.org/categories/24"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("common_source_fred_money_supply_index")}
									</a>
								</li>
							</ul>
						</section>

						{/* ── Inflation / CPI — per-currency FRED + BLS ─── */}
						<section className="sources-group">
							<h3 className="sources-group-title">
								{t("common_sources_group_cpi")}
							</h3>
							<ul className="sources-list">
								<li>
									<a
										href="https://www.bls.gov/cpi/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("common_source_bls_cpi")}
									</a>
								</li>
								{CURRENCIES.map((c) => (
									<li key={`cpi-${c.code}`}>
										<a
											href={CURRENCY_URLS[c.code].cpi}
											target="_blank"
											rel="noopener noreferrer"
										>
											Federal Reserve Economic Data (FRED) — Consumer
											Price Index, {t(c.labelKey)} ({c.code})
										</a>
									</li>
								))}
							</ul>
						</section>

						{/* ── Government debt — per-currency FRED + Lavish ── */}
						<section className="sources-group">
							<h3 className="sources-group-title">
								{t("common_sources_group_debt")}
							</h3>
							<ul className="sources-list">
								{CURRENCIES.filter(
									(c) => CURRENCY_URLS[c.code].debt !== null,
								).map((c) => (
									<li key={`debt-${c.code}`}>
										<a
											href={CURRENCY_URLS[c.code].debt as string}
											target="_blank"
											rel="noopener noreferrer"
										>
											Federal Reserve Economic Data (FRED) —{" "}
											General Government Debt, {t(c.labelKey)} ({c.code})
										</a>
									</li>
								))}
								<li>
									<a
										href="https://www.jameslavish.com/p/can-a-treasury-auction-fail"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("common_sources_treasury_auction")}
									</a>
								</li>
							</ul>
						</section>

						{/* ── Bitcoin data ─────────────────────────────────── */}
						<section className="sources-group">
							<h3 className="sources-group-title">
								{t("common_sources_group_bitcoin")}
							</h3>
							<ul className="sources-list">
								<li>
									<a
										href="https://bitcoinpricereport.com/"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("sources_bitcoin_price_report_4yr")}
									</a>
								</li>
								<li>
									<a
										href="https://bitcoin.org/bitcoin.pdf"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("common_source_whitepaper")}
									</a>
								</li>
								<li>
									<a
										href="https://github.com/bitcoin/bitcoin"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("sources_bitcoin_source_code")}
									</a>
								</li>
								<li>
									<a
										href="https://mempool.space"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("sources_mempool_space")}
									</a>
								</li>
							</ul>
						</section>

						{/* ── Real-world examples (stories linked on page) ── */}
						<section className="sources-group">
							<h3 className="sources-group-title">
								{t("common_sources_group_stories")}
							</h3>
							<ul className="sources-list">
								<li>
									<a
										href="https://www.youtube.com/watch?v=-gpaXXHEhQQ"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("sources_canadian_trucker")}
									</a>
								</li>
								<li>
									<a
										href="https://qz.com/africa/1922466/how-bitcoin-powered-nigerias-endsars-protests"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("sources_nigeria_endsars")}
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=48EIMlS0cIs"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("sources_texas_mining")}
									</a>
								</li>
								<li>
									<a
										href="https://www.youtube.com/watch?v=GtrhfMacYE4"
										target="_blank"
										rel="noopener noreferrer"
									>
										{t("sources_pennsylvania_mining")}
									</a>
								</li>
							</ul>
						</section>
					</div>
				</div>

				{/* ═══ PUBLISHER ATTRIBUTION (trust signals + reviewed-badge) ═══ */}
				<div
					className="publisher-attribution"
					itemProp="publisher"
					itemScope
					itemType="https://schema.org/Organization"
				>
					<div className="container-inner">
						<p>
							<span className="reviewed-badge">
								{t(REVIEWED_ACCURACY_I18N_KEY)}
							</span>
							<br />
							<span>{t("common_published_by")}</span>{" "}
							<a
								href={`${l}/about`}
								className="orange-link"
								itemProp="url"
							>
								<span itemProp="name">
									{t("common_publisher_name")}
								</span>
							</a>
							<br />
							<span>{t("common_publisher_since")}</span>
							<br />
							<a
								href="https://github.com/sovenor/bitcoin-rocks"
								className="orange-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								<span>{t("common_publisher_open_source")}</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
