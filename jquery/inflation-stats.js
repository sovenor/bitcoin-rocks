/**
 * Inflation Stats Client
 *
 * Fetches live data from forms.bitcoin.rocks/api/inflation-stats?currency=XXX
 * and populates stat-card elements on the inflation page.
 *
 * Every stat-card DOM element is suffixed with its currency code so multiple
 * currency sections can coexist on the page. When the user selects a currency
 * via `country-selector-inflation.js`, that file calls
 *   window.loadInflationStats(currencyCode)
 * which fetches fresh data and re-populates just that currency's cards.
 *
 * USD is fetched automatically on page load so its (hidden) cards are ready
 * if the user ever reveals them.
 */

(function() {
	'use strict';

	var API_URL = 'https://forms.bitcoin.rocks/api/inflation-stats';

	// All currencies supported by the page (matches the buttons in inflation.html).
	// HNL (Honduran Lempira) and VEF (Venezuelan Bolívar) were dropped because
	// FRED does not publish usable narrow-money or gross-debt series for them.
	var SUPPORTED_CURRENCIES = [
		'USD','CAD','EUR','GBP','BRL','PHP','MXN','INR',
		'JPY','AUD','ILS','THB','NZD'
	];

	// Per-currency cache so repeated clicks on the same button don't refetch
	var statsCache = {};

	// ─── DOM helpers ─────────────────────────────────────────────────
	function setText(id, value) {
		var el = document.getElementById(id);
		if (el && value !== undefined && value !== null && value !== '') {
			el.textContent = value;
		}
	}

	function percentChange(baseline, current) {
		var b = parseFloat(baseline);
		var c = parseFloat(current);
		if (!isFinite(b) || !isFinite(c) || b === 0) return '';
		var pct = ((c - b) / b) * 100;
		var sign = pct >= 0 ? '+' : '';
		return sign + Math.round(pct) + '% increase';
	}

	// Formats a number as a trillion-scaled string with the given symbol.
	// e.g. formatTrillions('18.4', '$') => '$18.4 trillion'
	// Respects the `unit` field from the backend if present ('trillion' or 'billion').
	function formatSupply(value, symbol, unit) {
		if (value === undefined || value === null || value === '') return '';
		var u = unit || 'trillion';
		return (symbol || '') + value + ' ' + u;
	}

	// ─── Per-currency card population ────────────────────────────────
	function populateCards(code, data) {
		if (!data) return;
		var sym = data.currencySymbol || '';

		// Hero stat cards (BTC gain / currency CPI loss)
		setText('stat-btc-change-' + code,          data.btcChange4yr !== undefined ? data.btcChange4yr + '%' : '');
		setText('stat-currency-inflation-' + code,  data.cpiChange4yr !== undefined ? data.cpiChange4yr + '%' : '');

		// Money supply comparison card
		setText('stat-m1-baseline-label-' + code, data.m1BaselineLabel);
		setText('stat-m1-baseline-' + code,       formatSupply(data.m1BaselineTrillions, sym, data.m1Unit));
		setText('stat-m1-current-' + code,        formatSupply(data.m1SupplyTrillions,   sym, data.m1Unit));
		setText('stat-m1-change-' + code,         percentChange(data.m1BaselineTrillions, data.m1SupplyTrillions));

		// Government debt comparison card
		setText('stat-debt-baseline-label-' + code, data.debtBaselineLabel);
		setText('stat-debt-baseline-' + code,       formatSupply(data.debtBaselineTrillions, sym, data.debtUnit));
		setText('stat-debt-current-' + code,        formatSupply(data.nationalDebtTrillions, sym, data.debtUnit));
		setText('stat-debt-change-' + code,         percentChange(data.debtBaselineTrillions, data.nationalDebtTrillions));

		// Bitcoin-vs-currency supply card (in the "Bitcoin doesn't have inflation" section)
		setText('stat-currency-supply-value-' + code,   data.supplyValueLabel);   // e.g. "19.4 Trillion"
		setText('stat-currency-supply-numeric-' + code, data.supplyNumericLabel); // e.g. "(19,400,000,000,000)"
	}

	// ─── Public loader ───────────────────────────────────────────────
	function loadInflationStats(currencyCode) {
		var code = (currencyCode || 'USD').toUpperCase();
		if (SUPPORTED_CURRENCIES.indexOf(code) < 0) {
			console.warn('[inflation-stats] Unsupported currency:', code);
			return;
		}

		// Serve from in-page cache when possible
		if (statsCache[code]) {
			populateCards(code, statsCache[code]);
			return;
		}

		fetch(API_URL + '?currency=' + encodeURIComponent(code))
			.then(function(res) {
				if (!res.ok) throw new Error('API returned ' + res.status);
				return res.json();
			})
			.then(function(data) {
				statsCache[code] = data;
				populateCards(code, data);
			})
			.catch(function(err) {
				console.warn('[inflation-stats] Failed to load live data for ' + code + ':', err.message);
				// Fallback values are already rendered inline — nothing to do.
			});
	}

	// Expose for country-selector-inflation.js to call on button clicks
	window.loadInflationStats = loadInflationStats;

	// Auto-load USD on page ready (USD section is the default)
	function initialLoad() {
		loadInflationStats('USD');
	}
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', initialLoad);
	} else {
		initialLoad();
	}
})();
