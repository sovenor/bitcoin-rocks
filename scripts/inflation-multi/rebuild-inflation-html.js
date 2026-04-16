#!/usr/bin/env node
/**
 * Rebuilds inflation.html so that every currency uses the same dynamic
 * stat-card template that USD currently uses.
 *
 * - Regenerates the USD block with proper data-i18n attributes on every
 *   previously-hardcoded label / source / detail line.
 * - Generates a fresh block for each of the 14 other currencies using the
 *   same template, with stat-card IDs suffixed by currency code (e.g.
 *   `stat-btc-change-CAD`) so jquery/inflation-stats.js can populate them.
 * - Drops the per-currency "What's next?" carousels and all the old
 *   FAQ / calculator / volatility / hacked / energy / purchasing-power-image
 *   blocks.
 * - Inserts a SINGLE `#global-whats-next` block at the bottom of the page
 *   (above the Sources section), hidden by default. The calculator card
 *   replaces the old "Contribute" card per the latest spec.
 * - Replaces the `<script src="jquery/...">` stack only lightly (no change)
 *   — the JS files themselves are updated in separate commits.
 * - Bumps dateModified in the Article JSON-LD schema to today's date.
 *
 * Usage: node scripts/inflation-multi/rebuild-inflation-html.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const HTML_PATH = path.join(ROOT, 'inflation.html');
const TODAY = new Date().toISOString().slice(0, 10);

const SOURCE_URLS = {
	USD: { m1: 'https://fred.stlouisfed.org/series/M1SL',          debt: 'https://fred.stlouisfed.org/series/GFDEBTN',    cpi: 'https://fred.stlouisfed.org/series/CPIAUCSL',       btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-usd?chart=4y' },
	CAD: { m1: 'https://fred.stlouisfed.org/series/MANMM101CAM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTACAA188N',cpi: 'https://fred.stlouisfed.org/series/CPALTT01CAM659N',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-canadian-dollars?chart=4y' },
	EUR: { m1: 'https://fred.stlouisfed.org/series/MANMM101EZM189S',debt: null,                                             cpi: 'https://fred.stlouisfed.org/series/CP0000EZ19M086NEST',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-euros?chart=4y' },
	GBP: { m1: 'https://fred.stlouisfed.org/series/MANMM101GBM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTAGBA188N',cpi: 'https://fred.stlouisfed.org/series/CPALTT01GBM659N',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-british-pounds?chart=4y' },
	BRL: { m1: 'https://fred.stlouisfed.org/series/MANMM101BRM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTABRA188N',cpi: 'https://fred.stlouisfed.org/series/CPALTT01BRM659N',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-brazilian-real?chart=4y' },
	PHP: { m1: 'https://fred.stlouisfed.org/series/MANMM101PHM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTAPHA188N',cpi: 'https://fred.stlouisfed.org/series/FPCPITOTLZGPHL',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-philippine-pesos?chart=4y' },
	MXN: { m1: 'https://fred.stlouisfed.org/series/MANMM101MXM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTAMXA188N',cpi: 'https://fred.stlouisfed.org/series/CPALTT01MXM659N',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-mexican-pesos?chart=4y' },
	INR: { m1: 'https://fred.stlouisfed.org/series/MANMM101INM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTAINA188N',cpi: 'https://fred.stlouisfed.org/series/INDCPIALLMINMEI',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-indian-rupees?chart=4y' },
	JPY: { m1: 'https://fred.stlouisfed.org/series/MANMM101JPM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTAJPA188N',cpi: 'https://fred.stlouisfed.org/series/JPNCPIALLMINMEI',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-japanese-yen?chart=4y' },
	AUD: { m1: 'https://fred.stlouisfed.org/series/MANMM101AUM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTAAUA188N',cpi: 'https://fred.stlouisfed.org/series/CPALTT01AUM659N',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-australian-dollars?chart=4y' },
	ILS: { m1: 'https://fred.stlouisfed.org/series/MANMM101ILM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTAILA188N',cpi: 'https://fred.stlouisfed.org/series/ISRCPIALLMINMEI',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-israeli-shekels?chart=4y' },
	THB: { m1: 'https://fred.stlouisfed.org/series/MANMM101THM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTATHA188N',cpi: 'https://fred.stlouisfed.org/series/CPALTT01THM659N',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-thai-baht?chart=4y' },
	NZD: { m1: 'https://fred.stlouisfed.org/series/MANMM101NZM189S',debt: 'https://fred.stlouisfed.org/series/GGGDTANZA188N',cpi: 'https://fred.stlouisfed.org/series/CPALTT01NZQ659N',btcChart: 'https://bitcoinpricereport.com/bitcoin-priced-in-new-zealand-dollars?chart=4y' },
};

// Currencies in the same order as the buttons on the page.
// HNL and VEF were removed because FRED has no reliable money-supply or
// government-debt data for those countries (FRED doesn't cover Honduras
// for MANMM101/GGGDTA, and Venezuela's data is not published).
const CURRENCIES = [
	'USD','CAD','EUR','GBP','BRL','PHP','MXN','INR','JPY','AUD','ILS','THB','NZD'
];


// ─── USD fallback display text (English pre-rendered) ────────────────
// These are the defaults injected inline so crawlers see real content.
// They match the `data-i18n` keys one-to-one.
const FALLBACK_TEXT = {
	// Generic stat-card / comparison keys
	btc_detail_4yr:          'Purchasing power gained over 4 years',
	btc_source_bpr:          'Source: Bitcoin Price Report →',
	currency_detail_4yr_lost:'Purchasing power lost over 4 years',
	currency_source_cpi:     'Source: FRED CPI →',
	comparison_today:        'TODAY',
	currency_source_m1:      'Source: FRED Narrow Money Supply →',
	currency_source_m1_short:'Source: FRED →',
	currency_source_debt:    'Source: FRED Government Debt →',
	currency_counting:       'And counting...',
	stat_bitcoin_label:      'BITCOIN',
	stat_bitcoin_value:      '21 Million',
	stat_bitcoin_numeric:    '(21,000,000)',
	stat_bitcoin_detail:     'Fixed forever',
	stat_bitcoin_source:     'Source: Bitcoin Whitepaper →',
};

// Per-currency pre-rendered intro/proof/btc/freedom defaults.
// These match the keys generated by scripts/inflation-multi/update-i18n.js.
// We don't hardcode all paragraphs here — we instead use the English strings
// from i18n/en/inflation_en.json so we always stay in sync.
const INFLATION_EN_PATH = path.join(ROOT, 'i18n', 'en', 'inflation_en.json');
const INFLATION_EN = JSON.parse(fs.readFileSync(INFLATION_EN_PATH, 'utf8'));

function t(key) {
	// Returns English text for given i18n key, escaping HTML dangerous chars.
	const raw = INFLATION_EN[key];
	if (raw === undefined) {
		console.warn(`[rebuild-inflation-html] Missing i18n key: ${key}`);
		return '';
	}
	return raw; // already plain text; `<`/`>`/`&` are not expected in copy.
}

// ─── Per-currency labels for the hero card + existence / debt titles ─
const CURRENCY_META = {
	USD: { heroLabel: 'US DOLLAR',         existenceTitle: 'DOLLARS IN EXISTENCE',              debtTitle: 'TOTAL FEDERAL DEBT' },
	CAD: { heroLabel: 'CANADIAN DOLLAR',   existenceTitle: 'CANADIAN DOLLARS IN EXISTENCE',     debtTitle: 'CANADIAN GOVERNMENT DEBT' },
	EUR: { heroLabel: 'EURO',              existenceTitle: 'EUROS IN EXISTENCE',                debtTitle: 'EUROZONE GOVERNMENT DEBT' },
	GBP: { heroLabel: 'BRITISH POUND',     existenceTitle: 'BRITISH POUNDS IN EXISTENCE',       debtTitle: 'UK GOVERNMENT DEBT' },
	BRL: { heroLabel: 'BRAZILIAN REAL',    existenceTitle: 'BRAZILIAN REAIS IN EXISTENCE',      debtTitle: 'BRAZILIAN GOVERNMENT DEBT' },
	PHP: { heroLabel: 'PHILIPPINE PESO',   existenceTitle: 'PHILIPPINE PESOS IN EXISTENCE',     debtTitle: 'PHILIPPINE GOVERNMENT DEBT' },
	MXN: { heroLabel: 'MEXICAN PESO',      existenceTitle: 'MEXICAN PESOS IN EXISTENCE',        debtTitle: 'MEXICAN GOVERNMENT DEBT' },
	INR: { heroLabel: 'INDIAN RUPEE',      existenceTitle: 'INDIAN RUPEES IN EXISTENCE',        debtTitle: 'INDIAN GOVERNMENT DEBT' },
	HNL: { heroLabel: 'HONDURAN LEMPIRA',  existenceTitle: 'HONDURAN LEMPIRAS IN EXISTENCE',    debtTitle: 'HONDURAN GOVERNMENT DEBT' },
	VEF: { heroLabel: 'VENEZUELAN BOLIVAR',existenceTitle: 'VENEZUELAN BOLÍVARES IN EXISTENCE', debtTitle: 'VENEZUELAN GOVERNMENT DEBT' },
	JPY: { heroLabel: 'JAPANESE YEN',      existenceTitle: 'JAPANESE YEN IN EXISTENCE',         debtTitle: 'JAPANESE GOVERNMENT DEBT' },
	AUD: { heroLabel: 'AUSTRALIAN DOLLAR', existenceTitle: 'AUSTRALIAN DOLLARS IN EXISTENCE',   debtTitle: 'AUSTRALIAN GOVERNMENT DEBT' },
	ILS: { heroLabel: 'ISRAELI SHEKEL',    existenceTitle: 'ISRAELI SHEKELS IN EXISTENCE',      debtTitle: 'ISRAELI GOVERNMENT DEBT' },
	THB: { heroLabel: 'THAI BAHT',         existenceTitle: 'THAI BAHT IN EXISTENCE',            debtTitle: 'THAI GOVERNMENT DEBT' },
	NZD: { heroLabel: 'NEW ZEALAND DOLLAR',existenceTitle: 'NEW ZEALAND DOLLARS IN EXISTENCE',  debtTitle: 'NEW ZEALAND GOVERNMENT DEBT' },
};

// ─── Template generators ─────────────────────────────────────────────
//
// A currency may skip the government-debt card (and associated prose) when
// its config has no FRED debt series (e.g. EUR — no reliable Eurozone-level
// FRED debt metric). In that case the "Here's the proof" section shows only
// the money-supply comparison card and the closing paragraph.
//
function currencySection(code) {
	const lower = code.toLowerCase();
	const meta = CURRENCY_META[code];
	const urls = SOURCE_URLS[code];
	const hasDebt = !!urls.debt;
	const existenceTitleKey = `inflation_stat_${lower}_existence_title`;
	const debtTitleKey = `inflation_stat_${lower}_debt_title`;
	const currencyLabelKey = `inflation_stat_${lower}_label`;

	// Build the debt card + surrounding debt paragraphs only when we have a
	// debt series to link to; otherwise keep just the closing paragraph.
	const debtSection = hasDebt ? `
                        <p data-i18n="inflation_${lower}_proof_p4">${t(`inflation_${lower}_proof_p4`)}</p>

                        <!-- Government debt comparison card -->
                        <a href="${urls.debt}" target="_blank" rel="noopener noreferrer" class="stat-comparison-card">
                            <div class="stat-comparison-title" data-i18n="${debtTitleKey}">${meta.debtTitle}</div>
                            <div class="stat-comparison-label" id="stat-debt-baseline-label-${code}">Q1 2020</div>
                            <div class="stat-comparison-value" id="stat-debt-baseline-${code}">—</div>
                            <div class="stat-comparison-arrow">↓</div>
                            <div class="stat-comparison-label" data-i18n="inflation_stat_comparison_today">${FALLBACK_TEXT.comparison_today}</div>
                            <div class="stat-comparison-value current" id="stat-debt-current-${code}">—</div>
                            <hr class="stat-comparison-divider" />
                            <div class="stat-comparison-result" id="stat-debt-change-${code}">—</div>
                            <div class="stat-comparison-source" data-i18n="inflation_stat_currency_source_debt">${FALLBACK_TEXT.currency_source_debt}</div>
                        </a>

                        <p><span data-i18n="inflation_${lower}_proof_p5_before">${t(`inflation_${lower}_proof_p5_before`)}</span> <a href="https://www.jameslavish.com/p/can-a-treasury-auction-fail" target="_blank" class="body-link" data-i18n="inflation_${lower}_proof_p5_link">${t(`inflation_${lower}_proof_p5_link`)}</a><span data-i18n="inflation_${lower}_proof_p5_after">${t(`inflation_${lower}_proof_p5_after`)}</span></p>

                        <p data-i18n="inflation_${lower}_proof_p6">${t(`inflation_${lower}_proof_p6`)}</p>` : '';

	return `            <div id="${code}" class="countries" style="display:none">


                <!-- ═══ INTRO ═══ -->
                <div class="inflation-section">
                    <div class="container-inner">

                        <p class="inflation-intro" data-i18n="inflation_${lower}_intro_1">${t(`inflation_${lower}_intro_1`)}</p>

                        <p class="inflation-intro"><span data-i18n="inflation_${lower}_intro_2">${t(`inflation_${lower}_intro_2`)}</span> <span class="text-highlight" data-i18n="inflation_${lower}_intro_highlight">${t(`inflation_${lower}_intro_highlight`)}</span></p>

                        <!-- Hero stat cards: Bitcoin vs ${meta.heroLabel} -->
                        <div class="stat-cards-grid" style="margin-top: 50px !important;">
                            <a href="${urls.btcChart}" target="_blank" rel="noopener noreferrer" class="stat-card">
                                <div class="stat-card-label" data-i18n="inflation_stat_bitcoin_label">${FALLBACK_TEXT.stat_bitcoin_label}</div>
                                <div class="stat-card-value success" id="stat-btc-change-${code}">+50%</div>
                                <div class="stat-card-detail" data-i18n="inflation_stat_btc_detail_4yr">${FALLBACK_TEXT.btc_detail_4yr}</div>
                                <div class="stat-card-source" data-i18n="inflation_stat_btc_source_bpr">${FALLBACK_TEXT.btc_source_bpr}</div>
                            </a>
                            <a href="${urls.cpi}" target="_blank" rel="noopener noreferrer" class="stat-card">
                                <div class="stat-card-label" data-i18n="${currencyLabelKey}">${meta.heroLabel}</div>
                                <div class="stat-card-value danger" id="stat-currency-inflation-${code}">-15%</div>
                                <div class="stat-card-detail" data-i18n="inflation_stat_currency_detail_4yr_lost">${FALLBACK_TEXT.currency_detail_4yr_lost}</div>
                                <div class="stat-card-source" data-i18n="inflation_stat_currency_source_cpi">${FALLBACK_TEXT.currency_source_cpi}</div>
                            </a>
                        </div>

                    </div><!--/container-inner-->
                </div>

                <div class="break-micro"></div>

                <!-- ═══ SECTION: Here's the proof ═══ -->
                <div class="inflation-section">
                    <div class="container-inner">

                        <h2 data-i18n="inflation_${lower}_proof_h2">${t(`inflation_${lower}_proof_h2`)}</h2>

                        <p data-i18n="inflation_${lower}_proof_p1">${t(`inflation_${lower}_proof_p1`)}</p>

                        <p data-i18n="inflation_${lower}_proof_p2">${t(`inflation_${lower}_proof_p2`)}</p>

                        <!-- Money supply comparison card -->
                        <a href="${urls.m1}" target="_blank" rel="noopener noreferrer" class="stat-comparison-card">
                            <div class="stat-comparison-title" data-i18n="${existenceTitleKey}">${meta.existenceTitle}</div>
                            <div class="stat-comparison-label" id="stat-m1-baseline-label-${code}">JAN 2020</div>
                            <div class="stat-comparison-value" id="stat-m1-baseline-${code}">—</div>
                            <div class="stat-comparison-arrow">↓</div>
                            <div class="stat-comparison-label" data-i18n="inflation_stat_comparison_today">${FALLBACK_TEXT.comparison_today}</div>
                            <div class="stat-comparison-value current" id="stat-m1-current-${code}">—</div>
                            <hr class="stat-comparison-divider" />
                            <div class="stat-comparison-result" id="stat-m1-change-${code}">—</div>
                            <div class="stat-comparison-source" data-i18n="inflation_stat_currency_source_m1">${FALLBACK_TEXT.currency_source_m1}</div>
                        </a>

                        <p data-i18n="inflation_${lower}_proof_p3">${t(`inflation_${lower}_proof_p3`)}</p>${debtSection}

                    </div><!--/container-inner-->
                </div>

                <div class="break-micro"></div>

                <!-- ═══ SECTION: Bitcoin doesn't have inflation ═══ -->
                <div class="inflation-section">
                    <div class="container-inner">

                        <h2 data-i18n="inflation_${lower}_btc_h2">${t(`inflation_${lower}_btc_h2`)}</h2>

                        <p data-i18n="inflation_${lower}_btc_p1">${t(`inflation_${lower}_btc_p1`)}</p>

                        <p><span data-i18n="inflation_${lower}_btc_p2_before">${t(`inflation_${lower}_btc_p2_before`)}</span> <a href="#" class="body-link" data-i18n="inflation_${lower}_btc_p2_link">${t(`inflation_${lower}_btc_p2_link`)}</a> <span data-i18n="inflation_${lower}_btc_p2_after">${t(`inflation_${lower}_btc_p2_after`)}</span></p>

                        <!-- Bitcoin vs ${code} supply comparison -->
                        <div class="stat-cards-grid">
                            <a href="https://bitcoin.org/bitcoin.pdf" target="_blank" rel="noopener noreferrer" class="stat-card">
                                <div class="stat-card-label" data-i18n="inflation_stat_bitcoin_label">${FALLBACK_TEXT.stat_bitcoin_label}</div>
                                <div class="stat-card-value success" data-i18n="inflation_stat_bitcoin_value">${FALLBACK_TEXT.stat_bitcoin_value}</div>
                                <div class="stat-card-detail success" data-i18n="inflation_stat_bitcoin_numeric">${FALLBACK_TEXT.stat_bitcoin_numeric}</div>
                                <div class="stat-card-detail" data-i18n="inflation_stat_bitcoin_detail">${FALLBACK_TEXT.stat_bitcoin_detail}</div>
                                <div class="stat-card-source" data-i18n="inflation_stat_bitcoin_source">${FALLBACK_TEXT.stat_bitcoin_source}</div>
                            </a>
                            <a href="${urls.m1}" target="_blank" rel="noopener noreferrer" class="stat-card">
                                <div class="stat-card-label" data-i18n="${currencyLabelKey}">${meta.heroLabel}</div>
                                <div class="stat-card-value danger" id="stat-currency-supply-value-${code}">—</div>
                                <div class="stat-card-detail danger" id="stat-currency-supply-numeric-${code}">—</div>
                                <div class="stat-card-detail" data-i18n="inflation_stat_currency_counting">${FALLBACK_TEXT.currency_counting}</div>
                                <div class="stat-card-source" data-i18n="inflation_stat_currency_source_m1_short">${FALLBACK_TEXT.currency_source_m1_short}</div>
                            </a>
                        </div>

                        <p data-i18n="inflation_${lower}_btc_p3">${t(`inflation_${lower}_btc_p3`)}</p>

                        <p data-i18n="inflation_${lower}_btc_p4">${t(`inflation_${lower}_btc_p4`)}</p>

                    </div><!--/container-inner-->
                </div>

                <div class="break-micro"></div>

                <!-- ═══ SECTION: Bitcoin is also a tool for freedom ═══ -->
                <div class="inflation-section">
                    <div class="container-inner">

                        <h2 data-i18n="inflation_${lower}_freedom_h2">${t(`inflation_${lower}_freedom_h2`)}</h2>

                        <p data-i18n="inflation_${lower}_freedom_p1">${t(`inflation_${lower}_freedom_p1`)}</p>

                        <!-- Property cards: 2x2 grid -->
                        <div class="feature-cards-grid">
                            <a href="#" class="feature-card">
                                <div class="feature-card-header">
                                    <svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
                                    <div class="feature-card-title" data-i18n="inflation_freedom_decentralized_title">Decentralized</div>
                                </div>
                                <div class="feature-card-desc" data-i18n="inflation_freedom_decentralized_desc">No single entity — no government, no corporation — controls Bitcoin.</div>
                                <div class="feature-card-link" data-i18n="inflation_freedom_learn_more">Learn more →</div>
                            </a>
                            <a href="#" class="feature-card">
                                <div class="feature-card-header">
                                    <svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>
                                    <div class="feature-card-title" data-i18n="inflation_freedom_permissionless_title">Permissionless</div>
                                </div>
                                <div class="feature-card-desc" data-i18n="inflation_freedom_permissionless_desc">Anyone, anywhere can join the network. No one can stop you.</div>
                                <div class="feature-card-link" data-i18n="inflation_freedom_learn_more">Learn more →</div>
                            </a>
                            <a href="#" class="feature-card">
                                <div class="feature-card-header">
                                    <svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                                    <div class="feature-card-title" data-i18n="inflation_freedom_sovereign_title">Sovereign</div>
                                </div>
                                <div class="feature-card-desc" data-i18n="inflation_freedom_sovereign_desc">A new system, independent from politicians and their broken promises.</div>
                                <div class="feature-card-link" data-i18n="inflation_freedom_learn_more">Learn more →</div>
                            </a>
                            <a href="#" class="feature-card">
                                <div class="feature-card-header">
                                    <svg class="feature-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M2 9h20"/><path d="M10 3l-4 6 6 13 6-13-4-6"/></svg>
                                    <div class="feature-card-title" data-i18n="inflation_freedom_scarce_title">Scarce</div>
                                </div>
                                <div class="feature-card-desc" data-i18n="inflation_freedom_scarce_desc">There will only ever be 21 million Bitcoin. No one can print more.</div>
                                <div class="feature-card-link" data-i18n="inflation_freedom_learn_more">Learn more →</div>
                            </a>
                        </div>

                        <p data-i18n="inflation_${lower}_freedom_p2">${t(`inflation_${lower}_freedom_p2`)}</p>

                        <!-- Story cards: 2x2 grid -->
                        <div class="story-cards-grid">
                            <a href="https://www.youtube.com/watch?v=-gpaXXHEhQQ" target="_blank" rel="noopener noreferrer" class="story-card">
                                <div class="story-card-header">
                                    <svg class="story-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 10h18"/><path d="M12 2L2 10"/><path d="M12 2l10 8"/><path d="M6 10v8"/><path d="M10 10v8"/><path d="M14 10v8"/><path d="M18 10v8"/></svg>
                                    <div class="story-card-title" data-i18n="inflation_story_canada_title">Canada</div>
                                </div>
                                <div class="story-card-desc" data-i18n="inflation_story_canada_desc">Workers used Bitcoin to access money after their bank accounts were frozen.</div>
                                <div class="story-card-link" data-i18n="inflation_freedom_learn_more">Learn more →</div>
                            </a>
                            <a href="https://qz.com/africa/1922466/how-bitcoin-powered-nigerias-endsars-protests" target="_blank" rel="noopener noreferrer" class="story-card">
                                <div class="story-card-header">
                                    <svg class="story-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 20h10"/><path d="M10 20v-4a2 2 0 0 1 4 0v4"/><path d="M6 16a2 2 0 0 1-2-2V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v6a2 2 0 0 1-2 2H6z"/><path d="M8 8h0"/><path d="M12 8h0"/><path d="M16 8h0"/></svg>
                                    <div class="story-card-title" data-i18n="inflation_story_nigeria_title">Nigeria</div>
                                </div>
                                <div class="story-card-desc" data-i18n="inflation_story_nigeria_desc">Protesters used Bitcoin to fund their movement after banks cut them off.</div>
                                <div class="story-card-link" data-i18n="inflation_freedom_learn_more">Learn more →</div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=48EIMlS0cIs" target="_blank" rel="noopener noreferrer" class="story-card">
                                <div class="story-card-header">
                                    <svg class="story-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                                    <div class="story-card-title" data-i18n="inflation_story_texas_title">Texas</div>
                                </div>
                                <div class="story-card-desc" data-i18n="inflation_story_texas_desc">Bitcoin mining helped keep the lights on during a massive storm.</div>
                                <div class="story-card-link" data-i18n="inflation_freedom_learn_more">Learn more →</div>
                            </a>
                            <a href="https://www.youtube.com/watch?v=GtrhfMacYE4" target="_blank" rel="noopener noreferrer" class="story-card">
                                <div class="story-card-header">
                                    <svg class="story-card-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF9500" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 4 13C4 6 11 2 20 2c0 9-4 16-11 16z"/><path d="M4 20l7-7"/></svg>
                                    <div class="story-card-title" data-i18n="inflation_story_pennsylvania_title">Pennsylvania</div>
                                </div>
                                <div class="story-card-desc" data-i18n="inflation_story_pennsylvania_desc">Bitcoin mining cleaned up coal waste the government refused to handle.</div>
                                <div class="story-card-link" data-i18n="inflation_freedom_learn_more">Learn more →</div>
                            </a>
                        </div>

                    </div><!--/container-inner-->
                </div>

                <div class="break-micro"></div>

            </div><!--/${code}-->`;
}

// Global "What's next?" block (single, hidden by default)
function globalWhatsNext() {
	return `            <!-- ═══ WHAT'S NEXT? (global — shown after a currency is selected) ═══ -->
            <div class="whats-next-section" id="global-whats-next" style="display:none">
                <div class="container-inner">
                <div class="whats-next-header">
                    <h2 data-i18n="common_whats_next">What's next?</h2>
                </div>
                <div class="whats-next-grid">
                    <a href="https://bitcoin.rocks" class="whats-next-card">
                        <div>
                            <div class="whats-next-card-label" data-i18n="common_next_keep_learning">Keep learning</div>
                            <div class="whats-next-card-title" data-i18n="common_next_keep_learning_desc">See how Bitcoin is improving the world</div>
                        </div>
                        <div class="whats-next-card-source" data-i18n="common_next_source">Source: bitcoin.rocks →</div>
                    </a>
                    <a href="https://bitcoin.rocks/wallets" class="whats-next-card">
                        <div>
                            <div class="whats-next-card-label" data-i18n="common_next_get_wallet">Get a wallet</div>
                            <div class="whats-next-card-title" data-i18n="common_next_get_wallet_desc">Get your first Bitcoin wallet — it's free</div>
                        </div>
                        <div class="whats-next-card-source" data-i18n="common_next_source">Source: bitcoin.rocks →</div>
                    </a>
                    <a href="https://bitcoin.rocks/buy" class="whats-next-card">
                        <div>
                            <div class="whats-next-card-label" data-i18n="common_next_buy_bitcoin">Buy Bitcoin</div>
                            <div class="whats-next-card-title" data-i18n="common_next_buy_bitcoin_desc">Learn how to buy Bitcoin safely</div>
                        </div>
                        <div class="whats-next-card-source" data-i18n="common_next_source">Source: bitcoin.rocks →</div>
                    </a>
                    <a href="https://bitcoin.rocks/compound-inflation-calculator" class="whats-next-card">
                        <div>
                            <div class="whats-next-card-label" data-i18n="common_next_calculate">Calculate your inflation</div>
                            <div class="whats-next-card-title" data-i18n="common_next_calculate_desc">See how inflation affects your salary over time</div>
                        </div>
                        <div class="whats-next-card-source" data-i18n="common_next_source">Source: bitcoin.rocks →</div>
                    </a>
                </div>
                </div>
            </div>

            <div class="break-micro"></div>`;
}

// ─── Main: surgical rewrite of inflation.html ────────────────────────
let html = fs.readFileSync(HTML_PATH, 'utf8');

// 1) Update Article schema dateModified
html = html.replace(
	/"dateModified":\s*"\d{4}-\d{2}-\d{2}"/,
	`"dateModified": "${TODAY}"`
);

// 2) Build the full replacement block: USD section + 14 other currency
// sections + global what's-next, in the same order the buttons appear.
// Each section is separated by a blank line for readability.
const allSections = CURRENCIES.map(currencySection).join('\n\n');
const replacement = allSections + '\n\n' + globalWhatsNext();

// 3) Replace the entire range from the opening USD div to the last
// `</div><!--/NewZealand-->` (or whatever the last section marker is).
// We locate the first `<div id="USD" class="countries"` line and the
// line that starts the Sources section (`<!-- Sources Section ...`).
const startMarker = '<div id="USD" class="countries"';
const endMarker = '<!-- Sources Section for GEO/AI trust signals -->';

const startIdx = html.indexOf(startMarker);
const endIdx = html.indexOf(endMarker);

if (startIdx < 0 || endIdx < 0 || endIdx <= startIdx) {
	console.error('❌ Could not locate the currency-sections region in inflation.html');
	console.error(`   startIdx=${startIdx}, endIdx=${endIdx}`);
	process.exit(1);
}

// Preserve indentation: rewind to the beginning of the line containing startMarker
let lineStart = startIdx;
while (lineStart > 0 && html[lineStart - 1] !== '\n') lineStart--;

// Rewind endIdx too so the replacement ends on a clean line boundary
let lineEnd = endIdx;
while (lineEnd > 0 && html[lineEnd - 1] !== '\n') lineEnd--;

const before = html.slice(0, lineStart);
const after = html.slice(lineEnd);

// Final assembled HTML
const newHtml = before + replacement + '\n\n            ' + after.slice(12); // slice(12) trims the "            " that was already at the start of `endMarker` line in `after`

// Actually — re-do more carefully. `after` starts at the beginning of the
// `<!-- Sources...` line but *without* its own leading indent (we trimmed).
// Keep `after` as-is starting from lineEnd:
const finalHtml = before + replacement + '\n' + html.slice(lineEnd);

fs.writeFileSync(HTML_PATH, finalHtml, 'utf8');
console.log(`✔ Rebuilt ${path.relative(ROOT, HTML_PATH)}`);
console.log(`  • ${CURRENCIES.length} currency sections regenerated`);
console.log(`  • 1 global #global-whats-next block added`);
console.log(`  • Article schema dateModified → ${TODAY}`);
