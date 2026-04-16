#!/usr/bin/env node
/**
 * Updates i18n/en/inflation_en.json and i18n/en/common_en.json
 * with all new keys for the multi-currency dynamic stat card template.
 *
 * Adds:
 *   - common_next_calculate + common_next_calculate_desc (for the new
 *     "What's next?" calculator card)
 *   - inflation_stat_* keys that were missing from the USD template
 *     (4yr detail, sources, today label, existence / debt titles, counting)
 *   - Full per-currency copy (intro_1, intro_2, intro_highlight, proof_*,
 *     btc_*, freedom_*) for the 14 currencies that still use the old layout.
 *   - inflation_stat_<cur>_label for each currency.
 *
 * Bumps @metadata.last-updated in both files.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const INFLATION_EN = path.join(ROOT, 'i18n', 'en', 'inflation_en.json');
const COMMON_EN = path.join(ROOT, 'i18n', 'en', 'common_en.json');
const TODAY = new Date().toISOString().slice(0, 10);

function loadJson(p) {
	return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function saveJson(p, obj) {
	fs.writeFileSync(p, JSON.stringify(obj, null, '\t') + '\n', 'utf8');
}

// ─── Currencies that need the new template cloned ─────────────────────
//
// `name` / `plural` are the formal names used in stat-card labels.
// `short` / `shortPlural` are the colloquial lowercase shorthand used in
// prose (so the copy reads naturally, e.g. "dollars" instead of "US Dollars",
// "reais" instead of "Brazilian Reais").
//
// When the shorthand starts a sentence it gets title-cased by the template.

const CURRENCIES = [
	{ code: 'USD', name: 'US Dollar',         plural: 'US Dollars',         short: 'dollar',   shortPlural: 'dollars',   label: 'US DOLLAR',         country: 'the United States', existence: 'DOLLARS IN EXISTENCE',            debt: 'TOTAL FEDERAL DEBT' },
	{ code: 'CAD', name: 'Canadian Dollar',   plural: 'Canadian Dollars',   short: 'dollar',   shortPlural: 'dollars',   label: 'CANADIAN DOLLAR',   country: 'Canada',            existence: 'CANADIAN DOLLARS IN EXISTENCE',   debt: 'CANADIAN GOVERNMENT DEBT' },
	{ code: 'EUR', name: 'Euro',              plural: 'Euros',              short: 'euro',     shortPlural: 'euros',     label: 'EURO',              country: 'the Eurozone',      existence: 'EUROS IN EXISTENCE',              debt: 'EUROZONE GOVERNMENT DEBT' },
	{ code: 'GBP', name: 'British Pound',     plural: 'British Pounds',     short: 'pound',    shortPlural: 'pounds',    label: 'BRITISH POUND',     country: 'the United Kingdom',existence: 'BRITISH POUNDS IN EXISTENCE',     debt: 'UK GOVERNMENT DEBT' },
	{ code: 'BRL', name: 'Brazilian Real',    plural: 'Brazilian Reais',    short: 'real',     shortPlural: 'reais',     label: 'BRAZILIAN REAL',    country: 'Brazil',            existence: 'BRAZILIAN REAIS IN EXISTENCE',    debt: 'BRAZILIAN GOVERNMENT DEBT' },
	{ code: 'PHP', name: 'Philippine Peso',   plural: 'Philippine Pesos',   short: 'peso',     shortPlural: 'pesos',     label: 'PHILIPPINE PESO',   country: 'the Philippines',   existence: 'PHILIPPINE PESOS IN EXISTENCE',   debt: 'PHILIPPINE GOVERNMENT DEBT' },
	{ code: 'MXN', name: 'Mexican Peso',      plural: 'Mexican Pesos',      short: 'peso',     shortPlural: 'pesos',     label: 'MEXICAN PESO',      country: 'Mexico',            existence: 'MEXICAN PESOS IN EXISTENCE',      debt: 'MEXICAN GOVERNMENT DEBT' },
	{ code: 'INR', name: 'Indian Rupee',      plural: 'Indian Rupees',      short: 'rupee',    shortPlural: 'rupees',    label: 'INDIAN RUPEE',      country: 'India',             existence: 'INDIAN RUPEES IN EXISTENCE',      debt: 'INDIAN GOVERNMENT DEBT' },
	{ code: 'JPY', name: 'Japanese Yen',      plural: 'Japanese Yen',       short: 'yen',      shortPlural: 'yen',       label: 'JAPANESE YEN',      country: 'Japan',             existence: 'JAPANESE YEN IN EXISTENCE',       debt: 'JAPANESE GOVERNMENT DEBT' },
	{ code: 'AUD', name: 'Australian Dollar', plural: 'Australian Dollars', short: 'dollar',   shortPlural: 'dollars',   label: 'AUSTRALIAN DOLLAR', country: 'Australia',         existence: 'AUSTRALIAN DOLLARS IN EXISTENCE', debt: 'AUSTRALIAN GOVERNMENT DEBT' },
	{ code: 'ILS', name: 'Israeli Shekel',    plural: 'Israeli Shekels',    short: 'shekel',   shortPlural: 'shekels',   label: 'ISRAELI SHEKEL',    country: 'Israel',            existence: 'ISRAELI SHEKELS IN EXISTENCE',    debt: 'ISRAELI GOVERNMENT DEBT' },
	{ code: 'THB', name: 'Thai Baht',         plural: 'Thai Baht',          short: 'baht',     shortPlural: 'baht',      label: 'THAI BAHT',         country: 'Thailand',          existence: 'THAI BAHT IN EXISTENCE',          debt: 'THAI GOVERNMENT DEBT' },
	{ code: 'NZD', name: 'New Zealand Dollar',plural: 'New Zealand Dollars',short: 'dollar',   shortPlural: 'dollars',   label: 'NEW ZEALAND DOLLAR',country: 'New Zealand',       existence: 'NEW ZEALAND DOLLARS IN EXISTENCE',debt: 'NEW ZEALAND GOVERNMENT DEBT' },
];

function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }


// ─── Generate per-currency copy ───────────────────────────────────────
function currencyCopy(c) {
	const lowerKey = c.code.toLowerCase();
	const formal = c.plural;              // "US Dollars", "Euros", etc. — used in the opening intro line only
	const money = c.shortPlural;          // "dollars", "euros", "reais", "pounds", "pesos", etc. — used throughout prose
	const moneySingular = c.short;        // "dollar", "euro", "real", "pound", "peso", etc.
	const Money = cap(money);             // "Dollars", "Euros", ... for sentence-initial use
	const MoneySingular = cap(moneySingular); // "Dollar", "Euro", ...

	return {
		// Intro
		// First sentence uses the formal name ("US Dollars") so the user knows
		// which currency we're talking about; subsequent sentences shorthand
		// to "dollars" / "euros" / "reais" / etc.
		[`inflation_${lowerKey}_intro_1`]: `If you save in ${formal}, you've probably noticed that they buy you less each year. It takes more ${money} to buy the same amount of food. You need more ${money} to maintain your quality of life.`,
		[`inflation_${lowerKey}_intro_2`]: `But it doesn't have to be this way.`,
		[`inflation_${lowerKey}_intro_highlight`]: `People who saved in Bitcoin over the last 4 years saw life get cheaper.`,

		// Proof
		[`inflation_${lowerKey}_proof_h2`]: `Here's the proof: your money is losing value`,
		[`inflation_${lowerKey}_proof_p1`]: `The ${money} in your bank account buy you less every year. That's because there is no fixed limit on how many ${money} can be created.`,
		[`inflation_${lowerKey}_proof_p2`]: `This unlimited supply is the root cause of inflation. Over recent years, the total amount of ${money} in existence has increased dramatically.`,
		[`inflation_${lowerKey}_proof_p3`]: `When more money is created from nothing, the price of everything goes up. This includes the raw materials that companies buy to make their products — which means higher prices for you.`,
		[`inflation_${lowerKey}_proof_p4`]: `And when the government continues to increase their debt, even more money is printed because less people want to lend them money.`,
		[`inflation_${lowerKey}_proof_p5_before`]: `If you can't get a loan, you can't spend money. But if the government`,
		[`inflation_${lowerKey}_proof_p5_link`]: `can't get a loan`,
		[`inflation_${lowerKey}_proof_p5_after`]: `, they just print the money.`,
		[`inflation_${lowerKey}_proof_p6`]: `More government debt means more money printing. More money printing means more inflation. And there's no sign of it stopping.`,

		// Bitcoin doesn't have inflation
		[`inflation_${lowerKey}_btc_h2`]: `Bitcoin doesn't have inflation`,
		[`inflation_${lowerKey}_btc_p1`]: `Inflation means your money buys you less over time. Bitcoin is better money because it doesn't have inflation.`,
		[`inflation_${lowerKey}_btc_p2_before`]: `${Money} have an unlimited supply, which means more can be printed at any time.`,
		[`inflation_${lowerKey}_btc_p2_link`]: `Bitcoin is scarce`,
		[`inflation_${lowerKey}_btc_p2_after`]: `because it has a maximum supply of 21 million Bitcoin. No one can print more Bitcoin.`,
		[`inflation_${lowerKey}_btc_p3`]: `Historically, Bitcoin has gained purchasing power over time while the ${moneySingular} has lost it. Many people use Bitcoin as their long-term savings account: money that they can leave alone and let grow for several years.`,
		[`inflation_${lowerKey}_btc_p4`]: `Would you rather save in ${money} that buy you less over time? Or save in Bitcoin that has historically bought you more over time?`,

		// Freedom
		[`inflation_${lowerKey}_freedom_h2`]: `Bitcoin is also a tool for freedom`,
		[`inflation_${lowerKey}_freedom_p1`]: `The Bitcoin network isn't owned by anyone. It isn't controlled by any government or corporation. It's designed to uphold your freedom and protect your money.`,
		[`inflation_${lowerKey}_freedom_p2`]: `People around the world are already using Bitcoin to protect their freedom — even when their own governments refused to help or tried to stop them.`,

		// Stat-card labels (per-currency)
		[`inflation_stat_${lowerKey}_label`]: c.label,
		[`inflation_stat_${lowerKey}_existence_title`]: c.existence,
		[`inflation_stat_${lowerKey}_debt_title`]: c.debt,
	};
}


// ─── 1) Update i18n/en/common_en.json ────────────────────────────────
{
	const common = loadJson(COMMON_EN);
	common['common_next_calculate'] = 'Calculate your inflation';
	common['common_next_calculate_desc'] = 'See how inflation affects your salary over time';
	common['@metadata'] = common['@metadata'] || {};
	common['@metadata']['last-updated'] = TODAY;
	saveJson(COMMON_EN, common);
	console.log(`✔ Updated ${path.relative(ROOT, COMMON_EN)}`);
}

// ─── 2) Update i18n/en/inflation_en.json ─────────────────────────────
{
	const infl = loadJson(INFLATION_EN);

	// Missing generic stat-card keys from the USD template
	infl['inflation_stat_btc_detail_4yr']           = 'Purchasing power gained over 4 years';
	infl['inflation_stat_btc_source_bpr']           = 'Source: Bitcoin Price Report →';
	infl['inflation_stat_currency_detail_4yr_lost'] = 'Purchasing power lost over 4 years';
	infl['inflation_stat_currency_source_cpi']      = 'Source: FRED CPI →';
	infl['inflation_stat_comparison_today']         = 'TODAY';
	infl['inflation_stat_currency_source_m1']       = 'Source: FRED Narrow Money Supply →';
	infl['inflation_stat_currency_source_m1_short']= 'Source: FRED →';
	infl['inflation_stat_currency_source_debt']     = 'Source: FRED Government Debt →';
	infl['inflation_stat_currency_counting']        = 'And counting...';

	// Per-currency copy + stat-card labels
	for (const c of CURRENCIES) {
		Object.assign(infl, currencyCopy(c));
	}

	// ─── Cleanup: Remove dropped-currency keys ──────────────────────
	// HNL (Honduran Lempira) and VEF (Venezuelan Bolívar) were removed
	// from the page because FRED does not publish reliable narrow-money
	// (MANMM101) or gross-debt (GGGDTA) series for those countries.
	// Also remove the `inflation_honduran_lempira` / `inflation_venezuelan_bolivar`
	// button-label keys that are no longer referenced anywhere on the page.
	const DROPPED_PREFIXES = [
		'inflation_hnl_',
		'inflation_vef_',
		'inflation_stat_hnl_',
		'inflation_stat_vef_',
	];
	const DROPPED_LITERAL_KEYS = [
		'inflation_honduran_lempira',
		'inflation_venezuelan_bolivar',
	];
	let droppedCount = 0;
	for (const key of Object.keys(infl)) {
		if (key.startsWith('@')) continue;
		if (DROPPED_LITERAL_KEYS.indexOf(key) >= 0 ||
		    DROPPED_PREFIXES.some(pfx => key.startsWith(pfx))) {
			delete infl[key];
			droppedCount++;
		}
	}
	if (droppedCount > 0) {
		console.log(`  ↳ removed ${droppedCount} orphan HNL/VEF keys`);
	}

	// EUR has no usable gross-debt series (FRED's GGGDTAEZA188N is IMF
	// % of GDP but the Eurozone's aggregate is not surfaced cleanly).
	// The rebuild script skips the debt card when `SOURCE_URLS.EUR.debt`
	// is null, so the EUR `proof_p4` / `proof_p5_*` / `proof_p6` keys
	// become orphan. Keep them for now (they're harmless fallback copy)
	// — but if we wanted to remove them, we'd uncomment the loop below.
	// for (const k of Object.keys(infl)) {
	//     if (k.startsWith('inflation_eur_proof_p4') ||
	//         k.startsWith('inflation_eur_proof_p5') ||
	//         k === 'inflation_eur_proof_p6') delete infl[k];
	// }

	// Bump date
	infl['@metadata'] = infl['@metadata'] || {};
	infl['@metadata']['last-updated'] = TODAY;
	saveJson(INFLATION_EN, infl);
	console.log(`✔ Updated ${path.relative(ROOT, INFLATION_EN)}`);
}

console.log('\nDone.');
