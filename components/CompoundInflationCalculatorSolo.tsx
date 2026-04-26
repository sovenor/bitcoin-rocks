"use client";

import { CompoundInflationCalculator } from "@/components/CompoundInflationCalculator";

/**
 * CompoundInflationCalculatorSolo — Client Component port of
 * `jquery/compound-inflation-calculator-solo.js` (used on
 * `/compound-inflation-calculator`).
 *
 * Thin wrapper around the generic `<CompoundInflationCalculator>` that
 * pins currency to USD and clears the id suffix so the default DOM ids
 * (`currentSalary`, `inflationRate`, `years`, `result`) match the legacy
 * anchor fragments users may have bookmarked.
 */
export function CompoundInflationCalculatorSolo() {
	return <CompoundInflationCalculator currency="USD" idSuffix="" />;
}
