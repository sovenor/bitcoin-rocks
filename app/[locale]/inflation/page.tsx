import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CountrySelector, type CurrencyButton } from "@/components/CountrySelector";
import { CurrencySection } from "@/components/CurrencySection";
import { JsonLd } from "@/components/JsonLd";
import { WhatsNextCard } from "@/components/WhatsNextCard";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildBreadcrumbSchema } from "@/lib/schema/breadcrumb";
import { buildAlternates } from "@/lib/schema/hreflang";
import { REVIEWED_ACCURACY_I18N_KEY } from "@/lib/schema/reviewed-badge";

/**
 * Inflation page (Phase 6a — static shell + country selector).
 *
 * Mirrors `inflation.html` structure line-for-line:
 *   1. Orange H1 + "Choose your money" prompt
 *   2. 13 currency picker buttons (USD, CAD, EUR, GBP, BRL, PHP, MXN, INR,
 *      JPY, AUD, ILS, THB, NZD)
 *   3. 13 `<CurrencySection>` blocks (one shown at a time, toggled by
 *      `<CountrySelector>`)
 *   4. Global "What's next?" grid (4 cards) — revealed after a currency
 *      is selected
 *   5. Sources block (GEO trust signals)
 *   6. Publisher attribution + Reviewed-for-accuracy badge
 *
 * Phase 6b will mount `<InflationStats currency={selectedCurrency} />`
 * inside the tree to populate the live stat-card values via `id` lookups.
 * For now the placeholder values ("+50%", "-15%", "—") ship unchanged,
 * which is fine — the legacy page ships them too until the fetch resolves.
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
	const articleSchema = await buildArticleSchema({
		slug: "inflation",
		locale,
		headline,
		description,
		schemaType: "Article",
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

			<div className="container-main">
				{/* ═══ HERO ═══ */}
				<div className="inflation-section">
					<div className="container-inner">
						<h1 className="h1-inflation">
							<span className="orange">{t("inflation_h1_orange")}</span>
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
									authorKey="common_next_source"
								/>
								<WhatsNextCard
									href={`${l}/wallets`}
									label={t("common_next_get_wallet")}
									title={t("common_next_get_wallet_desc")}
									authorKey="common_next_source"
								/>
								<WhatsNextCard
									href={`${l}/buy`}
									label={t("common_next_buy_bitcoin")}
									title={t("common_next_buy_bitcoin_desc")}
									authorKey="common_next_source"
								/>
								<WhatsNextCard
									href={`${l}/compound-inflation-calculator`}
									label={t("common_next_calculate")}
									title={t("common_next_calculate_desc")}
									authorKey="common_next_source"
								/>
							</div>
						</div>
					</div>
				</CountrySelector>

				<div className="break-micro" />

				{/* ═══ SOURCES (GEO trust signals) ═══ */}
				<div className="sources-section">
					<div className="container-inner">
						<h2 className="sources-heading">{t("common_sources_heading")}</h2>
						<ol className="sources-list">
							<li>
								<a
									href="https://fred.stlouisfed.org/series/M1SL"
									target="_blank"
									rel="noopener noreferrer"
								>
									Federal Reserve Economic Data (FRED) — M1 Money Supply (U.S. Dollar)
								</a>
							</li>
							<li>
								<a
									href="https://fred.stlouisfed.org/categories/234"
									target="_blank"
									rel="noopener noreferrer"
								>
									Federal Reserve Economic Data (FRED) — Narrow Money Supply
									(International)
								</a>
							</li>
							<li>
								<a
									href="https://www.bls.gov/cpi/"
									target="_blank"
									rel="noopener noreferrer"
								>
									U.S. Bureau of Labor Statistics — Consumer Price Index
								</a>
							</li>
							<li>
								<a
									href="https://mempool.space"
									target="_blank"
									rel="noopener noreferrer"
								>
									Mempool.space — Bitcoin Supply &amp; Mining Data
								</a>
							</li>
							<li>
								<a
									href="https://github.com/bitcoin/bitcoin"
									target="_blank"
									rel="noopener noreferrer"
								>
									Bitcoin Source Code — 21 Million Supply Cap
								</a>
							</li>
							<li>
								<a
									href="https://bitcoin.org/bitcoin.pdf"
									target="_blank"
									rel="noopener noreferrer"
								>
									Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash
									System (2008)
								</a>
							</li>
						</ol>
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
