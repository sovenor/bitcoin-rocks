"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

/**
 * CompoundInflationCalculator — Client Component port of
 * `jquery/compound-inflation-calculator.js` (per-currency variant, used
 * inside each currency's `/inflation` section) AND the shape of
 * `compound-inflation-calculator-solo.js` when `currency: "USD"` is
 * passed with `idSuffix: ""`.
 *
 * Takes 3 user inputs (salary, inflation %, years) and computes:
 *   newSalary = salary × (1 + inflationRate/100) ^ years
 *
 * Formatting uses `Intl.NumberFormat(locale, { style: "currency", currency })`.
 * The legacy script chose `numberLocale` based on whether the browser
 * language matched the stored UI language; we simplify by just using
 * next-intl's active `useLocale()` so the output uses the same locale the
 * user is currently reading the site in.
 *
 * `idSuffix` is appended to the DOM ids so multiple calculators can
 * coexist on one page (e.g. inflation.html had per-currency calculator
 * blocks with `currentSalaryCAD`, `inflationRateCAD`, etc). The solo
 * variant passes `idSuffix=""` to use `currentSalary`/`inflationRate`/
 * `years`/`result` (matching legacy behavior + anchor fragments like
 * `#calculator`).
 */

export type CompoundInflationCalculatorProps = {
	/**
	 * Currency code used in `Intl.NumberFormat` formatting of the salary
	 * output (e.g. "USD", "CAD", "EUR", "THB", …). The calculator works
	 * regardless — changing the currency just changes the display format.
	 */
	currency?: string;
	/**
	 * Appended to input/result DOM ids so multiple calculators can coexist.
	 * Pass `""` for the solo calculator (matches legacy ids).
	 */
	idSuffix?: string;
	/** Optional default salary placeholder (e.g. 55000). */
	salaryPlaceholder?: number;
	/** Optional default inflation-rate placeholder (e.g. 10). */
	ratePlaceholder?: number;
	/** Optional default years placeholder (e.g. 5). */
	yearsPlaceholder?: number;
};

export function CompoundInflationCalculator({
	currency = "USD",
	idSuffix = "",
	salaryPlaceholder = 55000,
	ratePlaceholder = 10,
	yearsPlaceholder = 5,
}: CompoundInflationCalculatorProps) {
	const t = useTranslations();
	const locale = useLocale();

	// Three controlled inputs. We keep them as strings so the <input> can
	// start empty (matches "type=number" + empty placeholder UX of the
	// legacy page) without React complaining about uncontrolled→controlled.
	const [salary, setSalary] = useState("");
	const [rate, setRate] = useState("");
	const [years, setYears] = useState("");

	// Result HTML — rendered via `dangerouslySetInnerHTML` because the
	// legacy script interleaves translated strings + numeric HTML entities
	// (`&nbsp;`) to produce a single prose paragraph. React strips
	// `&nbsp;` from text nodes; embedding as HTML preserves them 1:1.
	const [resultHtml, setResultHtml] = useState<string | null>(null);

	const id = (base: string) => `${base}${idSuffix}`;

	function handleCalculate() {
		if (salary === "" || rate === "" || years === "") {
			setResultHtml(escapeHtml(t("common_error_message")));
			return;
		}

		const salaryNum = parseFloat(salary);
		const rateNum = parseFloat(rate);
		const yearsNum = parseFloat(years);

		if (
			!Number.isFinite(salaryNum) ||
			!Number.isFinite(rateNum) ||
			!Number.isFinite(yearsNum)
		) {
			setResultHtml(escapeHtml(t("common_error_message")));
			return;
		}

		const totalInflation = Math.pow(1 + rateNum / 100, yearsNum);
		const formatter = new Intl.NumberFormat(locale, {
			style: "currency",
			currency,
		});
		const dollarSalary = formatter.format(salaryNum);
		const newSalary = formatter.format(salaryNum * totalInflation);
		const yearText = yearsNum === 1 ? t("common_year") : t("common_years");

		// Matches the legacy "With an inflation rate of 10%, your $X salary
		// needs to increase to $Y in 5 years to maintain your purchasing
		// power." prose-assembly exactly.
		const parts = [
			escapeHtml(t("common_result_message_1")),
			"&nbsp;",
			escapeHtml(String(rateNum)),
			"% ",
			escapeHtml(t("common_result_message_2")),
			"&nbsp;",
			escapeHtml(dollarSalary),
			"&nbsp;",
			escapeHtml(t("common_result_message_3")),
			"&nbsp;",
			escapeHtml(newSalary),
			"&nbsp;",
			escapeHtml(t("common_result_message_in")),
			"&nbsp;",
			escapeHtml(String(yearsNum)),
			" ",
			escapeHtml(yearText),
			"&nbsp;",
			escapeHtml(t("common_result_message_4")),
		];

		setResultHtml(parts.join(""));
	}

	const startingMessage = t("common_result_starting_message");

	return (
		<>
			<form
				className="compound-form"
				onSubmit={(e) => {
					e.preventDefault();
					handleCalculate();
				}}
			>
				<div className="form-box">
					<label className="compound-label" htmlFor={id("currentSalary")}>
						{t("common_current_salary")}
					</label>
					<div className="break-tiny-compound" />
					<input
						id={id("currentSalary")}
						className="compound"
						type="number"
						placeholder={String(salaryPlaceholder)}
						value={salary}
						onChange={(e) => setSalary(e.target.value)}
						inputMode="decimal"
					/>
				</div>

				<div className="form-box middle-form-box">
					<label className="compound-label" htmlFor={id("inflationRate")}>
						{t("common_inflation_rate")}
					</label>
					<div className="break-tiny-compound" />
					<input
						id={id("inflationRate")}
						className="compound"
						type="number"
						placeholder={String(ratePlaceholder)}
						value={rate}
						onChange={(e) => setRate(e.target.value)}
						inputMode="decimal"
					/>
				</div>

				<div className="form-box last-form-box">
					<label className="compound-label" htmlFor={id("years")}>
						{t("common_years")}
					</label>
					<div className="break-tiny-compound" />
					<input
						id={id("years")}
						className="compound"
						type="number"
						placeholder={String(yearsPlaceholder)}
						value={years}
						onChange={(e) => setYears(e.target.value)}
						inputMode="decimal"
					/>
				</div>

				<input
					id={id("calculateButton")}
					className="cic-button calculateButton"
					type="submit"
					value={t("common_calculate_button_text")}
				/>
			</form>

			<p
				id={id("result")}
				dangerouslySetInnerHTML={{
					__html: resultHtml ?? escapeHtml(startingMessage),
				}}
			/>
		</>
	);
}

// Small helper — translation strings are plain text, not HTML, so escape
// before injecting into the result block (`dangerouslySetInnerHTML` is
// used only to preserve `&nbsp;` spacers emitted by our own code).
function escapeHtml(s: string): string {
	return s
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}
