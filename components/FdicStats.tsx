"use client";

import { useEffect } from "react";

/**
 * FdicStats — Client Component that upgrades the server-rendered FDIC
 * coverage stat card on `/bank-runs` with live data from
 * `forms.bitcoin.rocks/api/fdic-stats`.
 *
 * Same pattern as `components/InflationStats.tsx`:
 *   - Pure side-effect component (`return null`).
 *   - Mounts once, fetches from the forms-backend endpoint, writes the
 *     live values into the DOM via `document.getElementById(...)`.
 *   - DOM ids are declared by `<StatCard valueDomId/detailDomId>` on
 *     the FDIC card in `BANK_RUNS` (see `lib/comparisons/bank-runs.ts`):
 *       #stat-fdic-coverage-value   → percentage (e.g. "1.42%")
 *       #stat-fdic-coverage-detail  → "$153.9B fund vs $10.82T insured
 *                                      deposits (Dec 2025)"
 *   - On fetch failure the server-rendered snapshot stays visible —
 *     nothing crashes, no hydration mismatch, no layout shift.
 *
 * Contract from the backend (`forms-backend/fdic-stats.js`):
 *   {
 *     reserveRatio:    number,   // percent, e.g. 1.42
 *     fundBalance:     number,   // billions USD, e.g. 153.9
 *     insuredDeposits: number,   // billions USD, e.g. 10822
 *     asOfLabel:       string,   // e.g. "Dec 2025"
 *     asOfDate:        string,   // ISO date
 *     source:          "live"|"fallback",
 *     lastUpdated:     string,
 *   }
 */

const API_URL = "https://forms.bitcoin.rocks/api/fdic-stats";

type FdicStatsResponse = {
	reserveRatio?: number;
	fundBalance?: number;
	insuredDeposits?: number;
	asOfLabel?: string;
};

/**
 * Format `insuredDeposits` (in billions) as "$10.82T" when it crosses
 * a trillion, else "$XB". Keeps the detail line compact.
 */
function formatInsured(billions: number): string {
	if (!Number.isFinite(billions)) return "";
	if (billions >= 1000) {
		return `$${(billions / 1000).toFixed(2)}T`;
	}
	return `$${Math.round(billions)}B`;
}

function formatFund(billions: number): string {
	if (!Number.isFinite(billions)) return "";
	return `$${billions.toFixed(1)}B`;
}

function setText(id: string, value: string) {
	const el = document.getElementById(id);
	if (el && value) el.textContent = value;
}

export function FdicStats() {
	useEffect(() => {
		let cancelled = false;

		async function load() {
			try {
				const res = await fetch(API_URL);
				if (!res.ok) throw new Error(`API returned ${res.status}`);
				const data = (await res.json()) as FdicStatsResponse;
				if (cancelled) return;

				if (typeof data.reserveRatio === "number") {
					setText(
						"stat-fdic-coverage-value",
						`${data.reserveRatio.toFixed(2)}%`,
					);
				}

				if (
					typeof data.fundBalance === "number" &&
					typeof data.insuredDeposits === "number"
				) {
					const fund = formatFund(data.fundBalance);
					const insured = formatInsured(data.insuredDeposits);
					const asOf = data.asOfLabel ? ` (${data.asOfLabel})` : "";
					setText(
						"stat-fdic-coverage-detail",
						`${fund} insurance fund vs ${insured} in insured deposits${asOf}.`,
					);
				}
			} catch (err) {
				// Silent failure — server-rendered snapshot stays. Matches the
				// InflationStats fallback behavior.
				console.warn(
					"[fdic-stats] Failed to load live data:",
					err instanceof Error ? err.message : err,
				);
			}
		}

		load();

		return () => {
			cancelled = true;
		};
	}, []);

	return null;
}
