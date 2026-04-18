"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

import {
	CURRENCY_CHANGED_EVENT,
	type CurrencyChangedEventDetail,
} from "@/components/InflationStats";

/**
 * CountrySelector — Client Component port of `jquery/country-selector-inflation.js`.
 *
 * Behavior (preserves the legacy UX 1:1):
 * - Initial state: the "Choose your money…" prompt + 13 currency buttons are
 *   visible. None of the per-currency `<div id={CODE} class="countries">`
 *   sections are shown, and the global `#global-whats-next-wrap` is hidden.
 * - On clicking a currency button: all other currency buttons hide, the
 *   prompt swaps to "← Choose a different money", the matching `<div
 *   id={CODE}>` section is revealed, and the global What's next? block is
 *   shown. Fires `gtag('event', 'select_currency', …)` for GA tracking.
 * - On clicking "← Choose a different money": everything resets to initial
 *   state.
 * - Smooth scroll-to-top on both actions.
 *
 * Rendering strategy: the 13 `CurrencySection` children are server-rendered
 * once with `hidden` default. We toggle visibility in a `useEffect` by
 * mutating the `hidden` attribute on their DOM nodes — this keeps the
 * server-rendered HTML stable (crawlers see all currency content) while
 * only the "active" one is visible to the user.
 */

export type CurrencyButton = {
	/** e.g. "USD", "CAD". Matches the DOM id of the corresponding `.countries` div. */
	code: string;
	/** CSS color class applied on hover (`inf-usdollar`, `inf-caddollar`, etc.). */
	className: string;
	/** Two flag emoji characters (e.g. "🇺🇸"). */
	flag: string;
	/** Already-translated currency name (e.g. "U.S. DOLLAR"). */
	label: string;
};

type Props = {
	/**
	 * Ordered currency buttons to render. Caller is responsible for
	 * resolving the `label` via next-intl `t()` and providing the
	 * English fallback on the server render.
	 */
	currencies: CurrencyButton[];
	/** "Choose your money" prompt text (already translated). */
	chooseLabel: string;
	/** "← Choose a different money" reset-button text (already translated). */
	chooseBackLabel: string;
	/**
	 * The per-currency `<div id={CODE} className="countries">` sections
	 * (server-rendered with `hidden`) plus the `#global-whats-next-wrap`
	 * block. Visibility is managed imperatively via `useEffect` against
	 * DOM ids once a currency is selected.
	 */
	children: ReactNode;
};

declare global {
	interface Window {
		gtag?: (...args: unknown[]) => void;
	}
}

function smoothScrollTo(y: number, durationMs: number) {
	const start = window.pageYOffset;
	const end = y;
	const t0 = performance.now();
	function step(t: number) {
		const progress = Math.min((t - t0) / durationMs, 1);
		window.scrollTo(0, start + (end - start) * progress);
		if (progress < 1) requestAnimationFrame(step);
	}
	requestAnimationFrame(step);
}

export function CountrySelector({
	currencies,
	chooseLabel,
	chooseBackLabel,
	children,
}: Props) {
	const [selected, setSelected] = useState<string | null>(null);
	const rootRef = useRef<HTMLDivElement>(null);

	// Effect: toggle the `hidden` attribute on `.countries` sections +
	// `#global-whats-next-wrap` based on the current selection. Runs on
	// every `selected` change (including initial mount).
	useEffect(() => {
		const root = rootRef.current;
		if (!root) return;

		const sections = root.querySelectorAll<HTMLElement>(".countries");
		sections.forEach((sec) => {
			if (selected !== null && sec.id === selected) {
				sec.hidden = false;
			} else {
				sec.hidden = true;
			}
		});

		// Document-scoped: the global what's-next wrap lives outside
		// the CurrencySection children but still inside CountrySelector.
		const whatsNext = document.getElementById("global-whats-next-wrap");
		if (whatsNext) {
			whatsNext.hidden = selected === null;
		}

		// Notify `<InflationStats>` (mounted elsewhere on the page) that
		// the active currency changed. It will fetch + populate the
		// `stat-*-${code}` DOM elements via the legacy ID scheme.
		const detail: CurrencyChangedEventDetail = { currency: selected };
		document.dispatchEvent(
			new CustomEvent(CURRENCY_CHANGED_EVENT, { detail }),
		);
	}, [selected]);

	const handleSelect = (code: string) => {
		if (typeof window !== "undefined" && typeof window.gtag === "function") {
			window.gtag("event", "select_currency", {
				event_category: "inflation",
				event_label: code,
			});
		}
		setSelected(code);
		smoothScrollTo(0, 500);
	};

	const handleReset = () => {
		setSelected(null);
		smoothScrollTo(0, 500);
	};

	const hasSelection = selected !== null;

	return (
		<div
			ref={rootRef}
			className="country-selector-root"
			data-selected-currency={selected ?? ""}
			data-has-selection={hasSelection ? "true" : "false"}
		>
			<div className="inflation-section">
				<div className="container-inner">
					<div className="container-inflation-button">
						{hasSelection ? (
							<button
								type="button"
								className="choose-initial-text choose-back-text"
								onClick={handleReset}
								aria-label={chooseBackLabel}
							>
								{chooseBackLabel}
							</button>
						) : (
							<span className="choose-initial-text">
								{chooseLabel}
							</span>
						)}

						{currencies.map((cur) => (
							<button
								key={cur.code}
								type="button"
								className={`inflation-button ${cur.className}`}
								data-id={cur.code}
								onClick={() => handleSelect(cur.code)}
								hidden={hasSelection}
							>
								<span className="money-icon">{cur.flag}</span>
								&nbsp;
								<span>{cur.label}</span>
							</button>
						))}
					</div>
				</div>
			</div>

			{children}
		</div>
	);
}
