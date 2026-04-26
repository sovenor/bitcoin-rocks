/**
 * Buy-flow platform data.
 *
 * Ported from `jquery/buy-flow.js`. Deduped: every European country (and most
 * others) uses the same "STRIKE → RELAI → KRAKEN" bank-transfer set + "ATM →
 * BISQ" cash set — we express that as the `EUROPEAN` / `DEFAULT` constants
 * and only override the handful that differ (US, CA, GB).
 */

export type BuyPlatform = {
	name: string;
	/** i18n key for the description paragraph. */
	descriptionKey: string;
	link: string;
	recommended: boolean;
	/** i18n keys for the feature bullets. */
	featureKeys: ReadonlyArray<string>;
};

export type BuyPlatformSet = {
	bank: ReadonlyArray<BuyPlatform>;
	cash: ReadonlyArray<BuyPlatform>;
};

const STRIKE: BuyPlatform = {
	name: "Strike",
	descriptionKey: "buy_platform_strike_description",
	link: "https://strike.me",
	recommended: true,
	featureKeys: [
		"buy_platform_feature_instant",
		"buy_platform_feature_low_fees",
		"buy_platform_feature_lightning",
	],
};

const RELAI: BuyPlatform = {
	name: "Relai",
	descriptionKey: "buy_platform_relai_description",
	link: "https://relai.app",
	recommended: false,
	featureKeys: [
		"buy_platform_feature_bitcoin_only",
		"buy_platform_feature_self_custody",
		"buy_platform_feature_auto_invest",
		"buy_platform_feature_european",
	],
};

const KRAKEN: BuyPlatform = {
	name: "Kraken",
	descriptionKey: "buy_platform_kraken_description",
	link: "https://kraken.com",
	recommended: false,
	featureKeys: [
		"buy_platform_feature_established",
		"buy_platform_feature_security",
		"buy_platform_feature_advanced",
	],
};

const SWAN: BuyPlatform = {
	name: "Swan Bitcoin",
	descriptionKey: "buy_platform_swan_description",
	link: "https://swanbitcoin.com",
	recommended: false,
	featureKeys: [
		"buy_platform_feature_dca",
		"buy_platform_feature_education",
		"buy_platform_feature_withdrawal",
	],
};

const RIVER: BuyPlatform = {
	name: "River",
	descriptionKey: "buy_platform_river_description",
	link: "https://river.com",
	recommended: false,
	featureKeys: [
		"buy_platform_feature_mining",
		"buy_platform_feature_custody",
		"buy_platform_feature_education",
	],
};

const COINSQUARE: BuyPlatform = {
	name: "Coinsquare",
	descriptionKey: "buy_platform_coinsquare_description",
	link: "https://coinsquare.com",
	recommended: false,
	featureKeys: [
		"buy_platform_feature_canadian",
		"buy_platform_feature_regulated",
		"buy_platform_feature_support",
	],
};

const ATM: BuyPlatform = {
	name: "Bitcoin ATM",
	descriptionKey: "buy_platform_atm_description",
	link: "https://coinatmradar.com",
	recommended: true,
	featureKeys: [
		"buy_platform_feature_cash",
		"buy_platform_feature_instant",
		"buy_platform_feature_anonymous",
	],
};

const BISQ: BuyPlatform = {
	name: "Bisq",
	descriptionKey: "buy_platform_bisq_description",
	link: "https://bisq.network",
	recommended: false,
	featureKeys: [
		"buy_platform_feature_p2p",
		"buy_platform_feature_private",
		"buy_platform_feature_decentralized",
	],
};

const DEFAULT_CASH: BuyPlatformSet["cash"] = [ATM, BISQ];

const DEFAULT_SET: BuyPlatformSet = {
	bank: [STRIKE, RELAI, KRAKEN],
	cash: DEFAULT_CASH,
};

const US_SET: BuyPlatformSet = {
	bank: [STRIKE, SWAN, RIVER],
	cash: DEFAULT_CASH,
};

const CA_SET: BuyPlatformSet = {
	bank: [STRIKE, COINSQUARE],
	cash: DEFAULT_CASH,
};

/**
 * Per-country platform set. Any country not listed here falls back to
 * `DEFAULT_SET` (Strike / Relai / Kraken).
 */
export const BUY_PLATFORMS: Record<string, BuyPlatformSet> = {
	US: US_SET,
	CA: CA_SET,
	GB: DEFAULT_SET,
	AT: DEFAULT_SET,
	BE: DEFAULT_SET,
	CZ: DEFAULT_SET,
	DK: DEFAULT_SET,
	EE: DEFAULT_SET,
	FI: DEFAULT_SET,
	FR: DEFAULT_SET,
	DE: DEFAULT_SET,
	GR: DEFAULT_SET,
	HU: DEFAULT_SET,
	IS: DEFAULT_SET,
	IE: DEFAULT_SET,
	IT: DEFAULT_SET,
	LV: DEFAULT_SET,
	LT: DEFAULT_SET,
	LU: DEFAULT_SET,
	MT: DEFAULT_SET,
	NL: DEFAULT_SET,
	NO: DEFAULT_SET,
	PL: DEFAULT_SET,
	PT: DEFAULT_SET,
	RO: DEFAULT_SET,
	ES: DEFAULT_SET,
	SE: DEFAULT_SET,
	CH: DEFAULT_SET,
};

export function getPlatformsFor(country: string): BuyPlatformSet {
	return BUY_PLATFORMS[country] ?? DEFAULT_SET;
}

/**
 * Canonical country catalogue for the Step 1 grid. Each entry includes
 * the i18n key for its display name + the emoji flag that legacy `buy.html`
 * used (two regional-indicator codepoints joined).
 *
 * US comes first; the remainder is alphabetical (matching legacy HTML order).
 */
export type BuyCountry = {
	code: string;
	flag: string;
	labelKey: string;
};

export const BUY_COUNTRIES: ReadonlyArray<BuyCountry> = [
	{ code: "US", flag: "🇺🇸", labelKey: "buy_country_united_states" },
	{ code: "AR", flag: "🇦🇷", labelKey: "buy_country_argentina" },
	{ code: "AU", flag: "🇦🇺", labelKey: "buy_country_australia" },
	{ code: "AT", flag: "🇦🇹", labelKey: "buy_country_austria" },
	{ code: "BE", flag: "🇧🇪", labelKey: "buy_country_belgium" },
	{ code: "BR", flag: "🇧🇷", labelKey: "buy_country_brazil" },
	{ code: "CA", flag: "🇨🇦", labelKey: "buy_country_canada" },
	{ code: "CL", flag: "🇨🇱", labelKey: "buy_country_chile" },
	{ code: "CO", flag: "🇨🇴", labelKey: "buy_country_colombia" },
	{ code: "CR", flag: "🇨🇷", labelKey: "buy_country_costa_rica" },
	{ code: "CZ", flag: "🇨🇿", labelKey: "buy_country_czech_republic" },
	{ code: "DK", flag: "🇩🇰", labelKey: "buy_country_denmark" },
	{ code: "SV", flag: "🇸🇻", labelKey: "buy_country_el_salvador" },
	{ code: "EE", flag: "🇪🇪", labelKey: "buy_country_estonia" },
	{ code: "FI", flag: "🇫🇮", labelKey: "buy_country_finland" },
	{ code: "FR", flag: "🇫🇷", labelKey: "buy_country_france" },
	{ code: "DE", flag: "🇩🇪", labelKey: "buy_country_germany" },
	{ code: "GR", flag: "🇬🇷", labelKey: "buy_country_greece" },
	{ code: "GT", flag: "🇬🇹", labelKey: "buy_country_guatemala" },
	{ code: "HK", flag: "🇭🇰", labelKey: "buy_country_hong_kong" },
	{ code: "HU", flag: "🇭🇺", labelKey: "buy_country_hungary" },
	{ code: "IS", flag: "🇮🇸", labelKey: "buy_country_iceland" },
	{ code: "IN", flag: "🇮🇳", labelKey: "buy_country_india" },
	{ code: "IE", flag: "🇮🇪", labelKey: "buy_country_ireland" },
	{ code: "IL", flag: "🇮🇱", labelKey: "buy_country_israel" },
	{ code: "IT", flag: "🇮🇹", labelKey: "buy_country_italy" },
	{ code: "JP", flag: "🇯🇵", labelKey: "buy_country_japan" },
	{ code: "LV", flag: "🇱🇻", labelKey: "buy_country_latvia" },
	{ code: "LT", flag: "🇱🇹", labelKey: "buy_country_lithuania" },
	{ code: "LU", flag: "🇱🇺", labelKey: "buy_country_luxembourg" },
	{ code: "MT", flag: "🇲🇹", labelKey: "buy_country_malta" },
	{ code: "MX", flag: "🇲🇽", labelKey: "buy_country_mexico" },
	{ code: "NL", flag: "🇳🇱", labelKey: "buy_country_netherlands" },
	{ code: "NZ", flag: "🇳🇿", labelKey: "buy_country_new_zealand" },
	{ code: "NO", flag: "🇳🇴", labelKey: "buy_country_norway" },
	{ code: "PA", flag: "🇵🇦", labelKey: "buy_country_panama" },
	{ code: "PL", flag: "🇵🇱", labelKey: "buy_country_poland" },
	{ code: "PT", flag: "🇵🇹", labelKey: "buy_country_portugal" },
	{ code: "RO", flag: "🇷🇴", labelKey: "buy_country_romania" },
	{ code: "SG", flag: "🇸🇬", labelKey: "buy_country_singapore" },
	{ code: "SK", flag: "🇸🇰", labelKey: "buy_country_slovakia" },
	{ code: "SI", flag: "🇸🇮", labelKey: "buy_country_slovenia" },
	{ code: "ZA", flag: "🇿🇦", labelKey: "buy_country_south_africa" },
	{ code: "KR", flag: "🇰🇷", labelKey: "buy_country_south_korea" },
	{ code: "ES", flag: "🇪🇸", labelKey: "buy_country_spain" },
	{ code: "SE", flag: "🇸🇪", labelKey: "buy_country_sweden" },
	{ code: "CH", flag: "🇨🇭", labelKey: "buy_country_switzerland" },
	{ code: "TH", flag: "🇹🇭", labelKey: "buy_country_thailand" },
	{ code: "TR", flag: "🇹🇷", labelKey: "buy_country_turkey" },
	{ code: "UA", flag: "🇺🇦", labelKey: "buy_country_ukraine" },
	{ code: "GB", flag: "🇬🇧", labelKey: "buy_country_united_kingdom" },
	{ code: "UY", flag: "🇺🇾", labelKey: "buy_country_uruguay" },
];
