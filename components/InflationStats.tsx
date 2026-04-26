"use client";

import { useEffect, useRef } from "react";

/**
 * InflationStats — Client Component port of `jquery/inflation-stats.js`.
 *
 * Fetches live stat data from `forms.bitcoin.rocks/api/inflation-stats?currency=XXX`
 * and populates the `stat-*-${CODE}` DOM elements rendered by `CurrencySection`.
 *
 * This is a pure side-effect component: it renders nothing and simply
 * mounts once to:
 *   1. Auto-load USD on mount (the default visible currency would be
 *      USD if we ever defaulted to showing it — matches legacy behavior).
 *   2. Listen on `document` for the `inflation:currency-changed` CustomEvent
 *      emitted by `<CountrySelector>` and fetch+populate the cards for
 *      whichever currency was just selected.
 *
 * Why imperative DOM writes instead of React state?
 * - The stat values live inside `<CurrencySection>` (Server Component).
 *   Keeping them server-rendered means crawlers see the placeholder
 *   strings ("+50%", "—") from day one; this Client Component then
 *   "upgrades" them at runtime to the live numbers without forcing the
 *   whole CurrencySection tree to go client-side.
 * - Matches the legacy `jquery/inflation-stats.js` pattern 1:1 so the
 *   forms-backend API contract + DOM id scheme stay untouched.
 */

const API_URL = "https://forms.bitcoin.rocks/api/inflation-stats";

// Must match scripts/inflation-multi/rebuild-inflation-html.js CURRENCIES
// and the per-currency sections in `<CurrencySection>` — 13 total.
const SUPPORTED_CURRENCIES = [
	"USD",
	"CAD",
	"EUR",
	"GBP",
	"BRL",
	"PHP",
	"MXN",
	"INR",
	"JPY",
	"AUD",
	"ILS",
	"THB",
	"NZD",
] as const;

type CurrencyCode = (typeof SUPPORTED_CURRENCIES)[number];

// Exact shape mirrors `forms-backend/inflation-stats.js` response.
// All numeric-ish fields arrive as strings or numbers — we stringify in
// the setters, so loose typing is fine here.
type StatsResponse = {
	currencySymbol?: string;
	btcChange4yr?: number | string;
	cpiChange4yr?: number | string;
	m1BaselineLabel?: string;
	m1BaselineTrillions?: number | string;
	m1SupplyTrillions?: number | string;
	m1Unit?: string;
	debtBaselineLabel?: string;
	debtBaselineTrillions?: number | string;
	nationalDebtTrillions?: number | string;
	debtUnit?: string;
	supplyValueLabel?: string;
	supplyNumericLabel?: string;
};

function setText(id: string, value: string | undefined | null) {
	const el = document.getElementById(id);
	if (el && value !== undefined && value !== null && value !== "") {
		el.textContent = value;
	}
}

function percentChange(
	baseline: number | string | undefined,
	current: number | string | undefined,
): string {
	const b = parseFloat(String(baseline));
	const c = parseFloat(String(current));
	if (!Number.isFinite(b) || !Number.isFinite(c) || b === 0) return "";
	const pct = ((c - b) / b) * 100;
	const sign = pct >= 0 ? "+" : "";
	return `${sign}${Math.round(pct)}% increase`;
}

// e.g. formatSupply('18.4', '$', 'trillion') => '$18.4 trillion'
function formatSupply(
	value: number | string | undefined,
	symbol: string | undefined,
	unit: string | undefined,
): string {
	if (value === undefined || value === null || value === "") return "";
	const u = unit || "trillion";
	return `${symbol || ""}${value} ${u}`;
}

function populateCards(code: string, data: StatsResponse) {
	if (!data) return;
	const sym = data.currencySymbol || "";

	// Hero cards (BTC gain / currency CPI loss)
	setText(
		`stat-btc-change-${code}`,
		data.btcChange4yr !== undefined ? `${data.btcChange4yr}%` : "",
	);
	setText(
		`stat-currency-inflation-${code}`,
		data.cpiChange4yr !== undefined ? `${data.cpiChange4yr}%` : "",
	);

	// Money supply comparison card
	setText(`stat-m1-baseline-label-${code}`, data.m1BaselineLabel);
	setText(
		`stat-m1-baseline-${code}`,
		formatSupply(data.m1BaselineTrillions, sym, data.m1Unit),
	);
	setText(
		`stat-m1-current-${code}`,
		formatSupply(data.m1SupplyTrillions, sym, data.m1Unit),
	);
	setText(
		`stat-m1-change-${code}`,
		percentChange(data.m1BaselineTrillions, data.m1SupplyTrillions),
	);

	// Government debt comparison card
	setText(`stat-debt-baseline-label-${code}`, data.debtBaselineLabel);
	setText(
		`stat-debt-baseline-${code}`,
		formatSupply(data.debtBaselineTrillions, sym, data.debtUnit),
	);
	setText(
		`stat-debt-current-${code}`,
		formatSupply(data.nationalDebtTrillions, sym, data.debtUnit),
	);
	setText(
		`stat-debt-change-${code}`,
		percentChange(data.debtBaselineTrillions, data.nationalDebtTrillions),
	);

	// "Bitcoin doesn't have inflation" section — currency supply card
	setText(`stat-currency-supply-value-${code}`, data.supplyValueLabel);
	setText(`stat-currency-supply-numeric-${code}`, data.supplyNumericLabel);
}

/**
 * Custom event name used by `<CountrySelector>` to notify this component
 * of a currency change. Exported so both components reference the same
 * string constant (no magic strings).
 */
export const CURRENCY_CHANGED_EVENT = "inflation:currency-changed";

export type CurrencyChangedEventDetail = {
	/** `null` when the user clicked "Choose a different money" to reset. */
	currency: string | null;
};

export function InflationStats() {
	// Per-currency response cache so repeated clicks on the same button
	// don't refetch. Scoped to the component instance via ref.
	const cacheRef = useRef<Record<string, StatsResponse>>({});

	useEffect(() => {
		let cancelled = false;

		async function loadStats(code: string) {
			const normalized = code.toUpperCase();
			if (
				!(SUPPORTED_CURRENCIES as readonly string[]).includes(normalized)
			) {
				console.warn("[inflation-stats] Unsupported currency:", normalized);
				return;
			}

			// Serve from cache when possible.
			const cached = cacheRef.current[normalized];
			if (cached) {
				populateCards(normalized, cached);
				return;
			}

			try {
				const res = await fetch(
					`${API_URL}?currency=${encodeURIComponent(normalized)}`,
				);
				if (!res.ok) throw new Error(`API returned ${res.status}`);
				const data = (await res.json()) as StatsResponse;
				if (cancelled) return;
				cacheRef.current[normalized] = data;
				populateCards(normalized, data);
			} catch (err) {
				// Fallback placeholder values are already rendered inline by
				// CurrencySection — nothing more to do. Matches legacy behavior.
				console.warn(
					`[inflation-stats] Failed to load live data for ${normalized}:`,
					err instanceof Error ? err.message : err,
				);
			}
		}

		function handleCurrencyChanged(e: Event) {
			const detail = (e as CustomEvent<CurrencyChangedEventDetail>).detail;
			if (!detail || typeof detail.currency !== "string") return;
			loadStats(detail.currency);
		}

		document.addEventListener(CURRENCY_CHANGED_EVENT, handleCurrencyChanged);

		// Eagerly load USD so its cards are ready if the user ever reveals
		// them (matches `jquery/inflation-stats.js` initial auto-load).
		loadStats("USD");

		return () => {
			cancelled = true;
			document.removeEventListener(
				CURRENCY_CHANGED_EVENT,
				handleCurrencyChanged,
			);
		};
	}, []);

	// Pure side-effect component.
	return null;
}
