import { useTranslations } from "next-intl";

/**
 * CurrencySection — Server Component. Renders one per-currency content
 * block on the inflation page. Structure matches the legacy
 * `<div id={CODE} class="countries">` block in `inflation.html` line-for-line:
 *
 *   1. Intro paragraphs (2) + hero stat cards (BTC gain vs currency loss)
 *   2. "Here's the proof" — money supply card + optional debt card + prose
 *   3. "Bitcoin doesn't have inflation" — scarcity comparison cards + prose
 *   4. "Bitcoin is also a tool for freedom" — 4 feature cards + 4 story cards
 *
 * The stat-card numeric values (BTC %, currency %, M1 baseline/current,
 * debt baseline/current, supply-value/numeric) are filled in by Phase 6b's
 * `<InflationStats currency={code} />` Client Component which mounts
 * inside this tree and populates the `stat-*-${code}` DOM ids via
 * `document.getElementById(...)`. For Phase 6a we render placeholder
 * values (e.g. "+50%" / "-15%" / "—") so the server-rendered HTML still
 * looks sensible to crawlers.
 *
 * Visibility: caller sets `hidden` to `true` to collapse the section when
 * a different currency is selected. We use the HTML `hidden` attribute so
 * no CSS is required and the section stays in the accessibility tree.
 */

// Shared external-link URLs (same set the legacy script used)
const STORY_URLS = {
	canada: "https://www.youtube.com/watch?v=-gpaXXHEhQQ",
	nigeria: "https://qz.com/africa/1922466/how-bitcoin-powered-nigerias-endsars-protests",
	texas: "https://www.youtube.com/watch?v=48EIMlS0cIs",
	pennsylvania: "https://www.youtube.com/watch?v=GtrhfMacYE4",
} as const;

const TREASURY_AUCTION_URL = "https://www.jameslavish.com/p/can-a-treasury-auction-fail";
const BITCOIN_WHITEPAPER_URL = "https://bitcoin.org/bitcoin.pdf";

// External "Learn more" URLs for each Bitcoin property feature card.
// All four link to voteforbetter.money deep-dives on the respective topic.
const FEATURE_URLS = {
	decentralized: "https://voteforbetter.money/learn/bitcoin-is-decentralized",
	permissionless: "https://voteforbetter.money/learn/bitcoin-is-permissionless",
	sovereign: "https://voteforbetter.money/learn/bitcoin-is-sovereign",
	scarce: "https://voteforbetter.money/learn/bitcoin-is-scarce",
} as const;

export type CurrencySectionProps = {
	/** ISO-like currency code (USD, CAD, EUR, …). Used for DOM ids + i18n key prefix. */
	code: string;
	/** URL to the Bitcoin Price Report 4-year chart for this currency. */
	btcChartUrl: string;
	/** FRED CPI series URL (hero card "purchasing power lost" → CPI). */
	cpiUrl: string;
	/** FRED narrow-money series URL (M1). */
	m1Url: string;
	/** FRED government-debt series URL. `null` = skip the debt card + debt prose (EUR). */
	debtUrl: string | null;
	/** Hidden (display:none) when another currency is selected. */
	hidden?: boolean;
};

export function CurrencySection({
	code,
	btcChartUrl,
	cpiUrl,
	m1Url,
	debtUrl,
	hidden = true,
}: CurrencySectionProps) {
	const t = useTranslations();
	const lower = code.toLowerCase();
	const k = (suffix: string) => `inflation_${lower}_${suffix}`;
	const stat = (suffix: string) => `inflation_stat_${lower}_${suffix}`;

	return (
		<div id={code} className="countries" hidden={hidden}>
			{/* ═══ INTRO ═══ */}
			<div className="inflation-section">
				<div className="container-inner">
					<p className="inflation-intro">{t(k("intro_1"))}</p>

					<p className="inflation-intro">
						<span>{t(k("intro_2"))}</span>{" "}
						<span className="text-highlight">{t(k("intro_highlight"))}</span>
					</p>

					{/* Hero stat cards: Bitcoin vs CURRENCY */}
					<div
						className="stat-cards-grid"
						style={{ marginTop: "50px" }}
					>
						<a
							href={btcChartUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="stat-card"
						>
							<div className="stat-card-label">
								{t("inflation_stat_bitcoin_label")}
							</div>
							<div
								className="stat-card-value success"
								id={`stat-btc-change-${code}`}
							>
								—
							</div>
							<div className="stat-card-detail">
								{t("inflation_stat_btc_detail_4yr")}
							</div>
							<div className="stat-card-source">
								{t("inflation_stat_btc_source_bpr")}
							</div>
						</a>
						<a
							href={cpiUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="stat-card"
						>
							<div className="stat-card-label">{t(stat("label"))}</div>
							<div
								className="stat-card-value danger"
								id={`stat-currency-inflation-${code}`}
							>
								—
							</div>
							<div className="stat-card-detail">
								{t("inflation_stat_currency_detail_4yr_lost")}
							</div>
							<div className="stat-card-source">
								{t("inflation_stat_currency_source_cpi")}
							</div>
						</a>
					</div>
				</div>
			</div>

			<div className="break-micro" />

			{/* ═══ Here's the proof ═══ */}
			<div className="inflation-section">
				<div className="container-inner">
					<h2>{t(k("proof_h2"))}</h2>
					<p>{t(k("proof_p1"))}</p>
					<p>{t(k("proof_p2"))}</p>

					{/* Money supply comparison card */}
					<a
						href={m1Url}
						target="_blank"
						rel="noopener noreferrer"
						className="stat-comparison-card"
					>
						<div className="stat-comparison-title">{t(stat("existence_title"))}</div>
						<div
							className="stat-comparison-label"
							id={`stat-m1-baseline-label-${code}`}
						>
							JAN 2020
						</div>
						<div className="stat-comparison-value" id={`stat-m1-baseline-${code}`}>
							—
						</div>
						<div className="stat-comparison-arrow">↓</div>
						<div className="stat-comparison-label">
							{t("inflation_stat_comparison_today")}
						</div>
						<div
							className="stat-comparison-value current"
							id={`stat-m1-current-${code}`}
						>
							—
						</div>
						<hr className="stat-comparison-divider" />
						<div className="stat-comparison-result" id={`stat-m1-change-${code}`}>
							—
						</div>
						<div className="stat-comparison-source">
							{t("inflation_stat_currency_source_m1")}
						</div>
					</a>

					<p>{t(k("proof_p3"))}</p>

					{debtUrl !== null && (
						<>
							<p>{t(k("proof_p4"))}</p>

							{/* Government debt comparison card */}
							<a
								href={debtUrl}
								target="_blank"
								rel="noopener noreferrer"
								className="stat-comparison-card"
							>
								<div className="stat-comparison-title">
									{t(stat("debt_title"))}
								</div>
								<div
									className="stat-comparison-label"
									id={`stat-debt-baseline-label-${code}`}
								>
									Q1 2020
								</div>
								<div
									className="stat-comparison-value"
									id={`stat-debt-baseline-${code}`}
								>
									—
								</div>
								<div className="stat-comparison-arrow">↓</div>
								<div className="stat-comparison-label">
									{t("inflation_stat_comparison_today")}
								</div>
								<div
									className="stat-comparison-value current"
									id={`stat-debt-current-${code}`}
								>
									—
								</div>
								<hr className="stat-comparison-divider" />
								<div
									className="stat-comparison-result"
									id={`stat-debt-change-${code}`}
								>
									—
								</div>
								<div className="stat-comparison-source">
									{t("inflation_stat_currency_source_debt")}
								</div>
							</a>

							<p>
								<span>{t(k("proof_p5_before"))}</span>{" "}
								<a
									href={TREASURY_AUCTION_URL}
									target="_blank"
									rel="noopener noreferrer"
									className="body-link"
								>
									{t(k("proof_p5_link"))}
								</a>
								<span>{t(k("proof_p5_after"))}</span>
							</p>

							<p>{t(k("proof_p6"))}</p>
						</>
					)}
				</div>
			</div>

			<div className="break-micro" />

			{/* ═══ Bitcoin doesn't have inflation ═══ */}
			<div className="inflation-section">
				<div className="container-inner">
					<h2>{t(k("btc_h2"))}</h2>
					<p>{t(k("btc_p1"))}</p>
					<p>
						<span>{t(k("btc_p2_before"))}</span>{" "}
						<span>{t(k("btc_p2_link"))}</span>{" "}
						<span>{t(k("btc_p2_after"))}</span>
					</p>

					<div className="stat-cards-grid">
						<a
							href={BITCOIN_WHITEPAPER_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="stat-card"
						>
							<div className="stat-card-label">
								{t("inflation_stat_bitcoin_label")}
							</div>
							<div className="stat-card-value success">
								{t("inflation_stat_bitcoin_value")}
							</div>
							<div className="stat-card-detail success">
								{t("inflation_stat_bitcoin_numeric")}
							</div>
							<div className="stat-card-detail">
								{t("inflation_stat_bitcoin_detail")}
							</div>
							<div className="stat-card-source">
								{t("inflation_stat_bitcoin_source")}
							</div>
						</a>
						<a
							href={m1Url}
							target="_blank"
							rel="noopener noreferrer"
							className="stat-card"
						>
							<div className="stat-card-label">{t(stat("label"))}</div>
							<div
								className="stat-card-value danger"
								id={`stat-currency-supply-value-${code}`}
							>
								—
							</div>
							<div
								className="stat-card-detail danger"
								id={`stat-currency-supply-numeric-${code}`}
							>
								—
							</div>
							<div className="stat-card-detail">
								{t("inflation_stat_currency_counting")}
							</div>
							<div className="stat-card-source">
								{t("inflation_stat_currency_source_m1_short")}
							</div>
						</a>
					</div>

					<p>{t(k("btc_p3"))}</p>
					<p>{t(k("btc_p4"))}</p>
				</div>
			</div>

			<div className="break-micro" />

			{/* ═══ Bitcoin is also a tool for freedom ═══ */}
			<div className="inflation-section">
				<div className="container-inner">
					<h2>{t(k("freedom_h2"))}</h2>
					<p>{t(k("freedom_p1"))}</p>

					{/* Property cards 2x2 grid */}
					<div className="feature-cards-grid">
						<FeatureCard
							iconName="decentralized"
							titleKey="inflation_freedom_decentralized_title"
							descKey="inflation_freedom_decentralized_desc"
						/>
						<FeatureCard
							iconName="permissionless"
							titleKey="inflation_freedom_permissionless_title"
							descKey="inflation_freedom_permissionless_desc"
						/>
						<FeatureCard
							iconName="sovereign"
							titleKey="inflation_freedom_sovereign_title"
							descKey="inflation_freedom_sovereign_desc"
						/>
						<FeatureCard
							iconName="scarce"
							titleKey="inflation_freedom_scarce_title"
							descKey="inflation_freedom_scarce_desc"
						/>
					</div>

					<p>{t(k("freedom_p2"))}</p>

					{/* Story cards 2x2 grid */}
					<div className="story-cards-grid">
						<StoryCard
							href={STORY_URLS.canada}
							iconName="canada"
							titleKey="inflation_story_canada_title"
							descKey="inflation_story_canada_desc"
						/>
						<StoryCard
							href={STORY_URLS.nigeria}
							iconName="nigeria"
							titleKey="inflation_story_nigeria_title"
							descKey="inflation_story_nigeria_desc"
						/>
						<StoryCard
							href={STORY_URLS.texas}
							iconName="texas"
							titleKey="inflation_story_texas_title"
							descKey="inflation_story_texas_desc"
						/>
						<StoryCard
							href={STORY_URLS.pennsylvania}
							iconName="pennsylvania"
							titleKey="inflation_story_pennsylvania_title"
							descKey="inflation_story_pennsylvania_desc"
						/>
					</div>
				</div>
			</div>

			<div className="break-micro" />
		</div>
	);
}

// ─── Feature / Story card helpers ─────────────────────────────────────
// The legacy HTML inlines a different SVG per feature/story card. Keep
// them as a small icon library here so the markup above stays readable.

function FeatureIcon({ name }: { name: string }) {
	const common = {
		width: 28,
		height: 28,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "#FF9500",
		strokeWidth: 1.75,
		strokeLinecap: "round" as const,
		strokeLinejoin: "round" as const,
	};
	switch (name) {
		case "decentralized":
			return (
				<svg className="feature-card-icon" {...common}>
					<circle cx="12" cy="12" r="10" />
					<path d="M2 12h20" />
					<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
				</svg>
			);
		case "permissionless":
			return (
				<svg className="feature-card-icon" {...common}>
					<rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
					<path d="M7 11V7a5 5 0 0 1 9.9-1" />
				</svg>
			);
		case "sovereign":
			return (
				<svg className="feature-card-icon" {...common}>
					<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
				</svg>
			);
		case "scarce":
			return (
				<svg className="feature-card-icon" {...common}>
					<path d="M6 3h12l4 6-10 13L2 9z" />
					<path d="M2 9h20" />
					<path d="M10 3l-4 6 6 13 6-13-4-6" />
				</svg>
			);
		default:
			return null;
	}
}

function StoryIcon({ name }: { name: string }) {
	const common = {
		width: 28,
		height: 28,
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "#FF9500",
		strokeWidth: 1.75,
		strokeLinecap: "round" as const,
		strokeLinejoin: "round" as const,
	};
	switch (name) {
		case "canada":
			return (
				<svg className="story-card-icon" {...common}>
					<path d="M3 21h18" />
					<path d="M3 10h18" />
					<path d="M12 2L2 10" />
					<path d="M12 2l10 8" />
					<path d="M6 10v8" />
					<path d="M10 10v8" />
					<path d="M14 10v8" />
					<path d="M18 10v8" />
				</svg>
			);
		case "nigeria":
			return (
				<svg className="story-card-icon" {...common}>
					<path d="M7 20h10" />
					<path d="M10 20v-4a2 2 0 0 1 4 0v4" />
					<path d="M6 16a2 2 0 0 1-2-2V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6z" />
					<path d="M8 8h0" />
					<path d="M12 8h0" />
					<path d="M16 8h0" />
				</svg>
			);
		case "texas":
			return (
				<svg className="story-card-icon" {...common}>
					<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
				</svg>
			);
		case "pennsylvania":
			return (
				<svg className="story-card-icon" {...common}>
					<path d="M11 20A7 7 0 0 1 4 13C4 6 11 2 20 2c0 9-4 16-11 16z" />
					<path d="M4 20l7-7" />
				</svg>
			);
		default:
			return null;
	}
}

function FeatureCard({
	iconName,
	titleKey,
	descKey,
}: {
	iconName: keyof typeof FEATURE_URLS;
	titleKey: string;
	descKey: string;
}) {
	const t = useTranslations();
	return (
		<a
			href={FEATURE_URLS[iconName]}
			target="_blank"
			rel="noopener noreferrer"
			className="feature-card"
		>
			<div className="feature-card-header">
				<FeatureIcon name={iconName} />
				<div className="feature-card-title">{t(titleKey)}</div>
			</div>
			<div className="feature-card-desc">{t(descKey)}</div>
			<div className="feature-card-link">{t("inflation_freedom_learn_more")}</div>
		</a>
	);
}

function StoryCard({
	href,
	iconName,
	titleKey,
	descKey,
}: {
	href: string;
	iconName: string;
	titleKey: string;
	descKey: string;
}) {
	const t = useTranslations();
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="story-card"
		>
			<div className="story-card-header">
				<StoryIcon name={iconName} />
				<div className="story-card-title">{t(titleKey)}</div>
			</div>
			<div className="story-card-desc">{t(descKey)}</div>
			<div className="story-card-link">{t("inflation_freedom_learn_more")}</div>
		</a>
	);
}
