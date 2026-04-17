"use client";

/**
 * BuyFlow — ports `jquery/buy-flow.js`.
 *
 * Four-step wizard:
 *   1. Select country (buttons grid + filter search)
 *   2. Select payment method (bank / cash)
 *   3. View recommended platforms for that combination
 *   4. Storage guidance (static CTA)
 *
 * Steps 2-4 are rendered by this Client Component once the user's made enough
 * selections. Step 1 (the country grid) is rendered as children passed in by
 * the server; we bind click handlers to `.buy-country-button[data-country]`
 * inside the children via ref + event delegation. That keeps the 52 country
 * buttons in the server HTML (crawler-visible) while still wiring interactivity.
 *
 * Smooth-scroll between steps is done imperatively with `scrollTo`, matching
 * the legacy `html, body { animate({scrollTop})` jQuery behaviour.
 */

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { BUY_COUNTRIES, getPlatformsFor } from "@/lib/buy/platforms";

type Props = {
	/**
	 * The Step 1 "country-selection" container, rendered by the server with
	 * all 52 buttons + the search input inside. We delegate clicks from here.
	 */
	children: React.ReactNode;
};

export function BuyFlow({ children }: Props) {
	const t = useTranslations();
	const step1Ref = useRef<HTMLDivElement>(null);
	const step2Ref = useRef<HTMLDivElement>(null);
	const step3Ref = useRef<HTMLDivElement>(null);
	const step4Ref = useRef<HTMLDivElement>(null);

	const [country, setCountry] = useState<string | null>(null);
	const [method, setMethod] = useState<"bank" | "cash" | null>(null);

	/**
	 * Wire country button clicks + search input filter via delegation on the
	 * Step 1 container. Avoids having to duplicate the country list in JS —
	 * the server renders all 52 buttons once, we attach handlers on mount.
	 */
	useEffect(() => {
		const root = step1Ref.current;
		if (!root) return;

		const handleClick = (e: Event) => {
			const target = e.target as HTMLElement;
			const btn = target.closest<HTMLButtonElement>("button.buy-country-button");
			if (!btn) return;
			const code = btn.dataset.country;
			if (!code) return;

			// Visual selection — matches jQuery legacy behaviour.
			root
				.querySelectorAll<HTMLButtonElement>("button.buy-country-button.selected")
				.forEach((b) => b.classList.remove("selected"));
			btn.classList.add("selected");

			setCountry(code);
			// Reset downstream state when country changes mid-flow.
			setMethod(null);

			// Smooth-scroll to the payment method section.
			setTimeout(() => {
				const step2 = step2Ref.current;
				if (step2) {
					const top = step2.getBoundingClientRect().top + window.scrollY - 50;
					window.scrollTo({ top, behavior: "smooth" });
				}
			}, 50);
		};

		const handleInput = (e: Event) => {
			const input = e.target as HTMLInputElement;
			if (input.id !== "country-search") return;
			const term = input.value.toLowerCase();
			root
				.querySelectorAll<HTMLButtonElement>("button.buy-country-button")
				.forEach((btn) => {
					const text = (btn.textContent || "").toLowerCase();
					btn.style.display = text.includes(term) ? "" : "none";
				});
		};

		root.addEventListener("click", handleClick);
		root.addEventListener("input", handleInput);
		return () => {
			root.removeEventListener("click", handleClick);
			root.removeEventListener("input", handleInput);
		};
	}, []);

	function chooseMethod(next: "bank" | "cash") {
		setMethod(next);
		setTimeout(() => {
			const step3 = step3Ref.current;
			if (step3) {
				const top = step3.getBoundingClientRect().top + window.scrollY - 50;
				window.scrollTo({ top, behavior: "smooth" });
			}
		}, 50);
	}

	const platforms =
		country && method ? getPlatformsFor(country)[method] : [];

	// Find the localized label for the selected country (unused in render — keep
	// the lookup handy so future tweaks can easily embed it in the Step 3 heading
	// via a dedicated i18n key).
	void (country
		? BUY_COUNTRIES.find((x) => x.code === country)?.labelKey
		: null);

	return (
		<>
			{/* Step 1 — country grid, rendered by parent as children */}
			<div id="country-selection" className="step-container" ref={step1Ref}>
				{children}
			</div>

			{/* Step 2 — payment method selection */}
			<div
				id="payment-method-selection"
				className="step-container"
				ref={step2Ref}
				hidden={!country}
			>
				<div className="break-micro" />
				<div className="text-box intro">
					<div className="container-inner">
						<h2 className="h2-section">{t("buy_step_2_header")}</h2>
						<p>{t("buy_step_2_description")}</p>

						<div className="break-micro" />

						<div className="payment-method-option">
							<h3 className="h3-label">{t("buy_method_bank_transfer")}</h3>
							<div className="payment-method-alerts">
								<div className="alert green">
									<img src="/img/wallets/alert-check-v2.png" alt="✓" />
									<p>{t("buy_method_bank_fast")}</p>
								</div>
								<div className="alert red">
									<img src="/img/wallets/alert-x-v2.png" alt="✗" />
									<p>{t("buy_method_bank_less_private")}</p>
								</div>
							</div>
							<p>{t("buy_method_bank_description")}</p>
							<div
								className={`payment-method-button${method === "bank" ? " selected" : ""}`}
								onClick={() => chooseMethod("bank")}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										chooseMethod("bank");
									}
								}}
							>
								{t("buy_method_choose_bank")}
							</div>
						</div>

						<div className="break-micro" />

						<div className="payment-method-option">
							<h3 className="h3-label">{t("buy_method_cash")}</h3>
							<div className="payment-method-alerts">
								<div className="alert green">
									<img src="/img/wallets/alert-check-v2.png" alt="✓" />
									<p>{t("buy_method_cash_private")}</p>
								</div>
								<div className="alert red">
									<img src="/img/wallets/alert-x-v2.png" alt="✗" />
									<p>{t("buy_method_cash_limited")}</p>
								</div>
							</div>
							<p>{t("buy_method_cash_description")}</p>
							<div
								className={`payment-method-button${method === "cash" ? " selected" : ""}`}
								onClick={() => chooseMethod("cash")}
								role="button"
								tabIndex={0}
								onKeyDown={(e) => {
									if (e.key === "Enter" || e.key === " ") {
										e.preventDefault();
										chooseMethod("cash");
									}
								}}
							>
								{t("buy_method_choose_cash")}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Step 3 — buying options */}
			<div
				id="buying-options"
				className="step-container"
				ref={step3Ref}
				hidden={!country || !method}
			>
				<div className="break-micro" />
				<div className="text-box intro">
					<div className="container-inner">
						<h2 className="h2-section" id="buying-options-header">
							{t("buy_step_3_header")}
						</h2>
						<p id="buying-options-description">{t("buy_step_3_description")}</p>

						<div className="break-micro" />

						<div id="buying-platforms-container">
							{platforms.map((p) => (
								<div
									key={p.name}
									className={`buy-platform-box${p.recommended ? " platform-recommended" : ""}`}
								>
									{p.recommended && (
										<div className="recommended-badge">
											{t("buy_platform_recommended")}
										</div>
									)}
									<div className="container-inner">
										<div style={{ textAlign: "center" }}>
											<h6>{p.name}</h6>
										</div>
										<p>{t(p.descriptionKey)}</p>
										<div className="platform-features">
											{p.featureKeys.map((k) => (
												<div key={k}>{t(k)}</div>
											))}
										</div>
										<a href={p.link} target="_blank" rel="noopener noreferrer">
											<div className="platform-learn-button">
												{t("common_learn_more")}
											</div>
										</a>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Step 4 — storage guidance */}
			<div
				id="storage-guidance"
				className="step-container"
				ref={step4Ref}
				hidden={!country || !method}
			>
				<div className="break-micro" />
				<div className="text-box intro">
					<div className="container-inner">
						<h2 className="h2-section">{t("buy_step_4_header")}</h2>
						<p>
							<span>{t("buy_step_4_c1")}</span>
							<br />
							<br />
							<span>{t("buy_step_4_c2")}</span>
							<br />
							<br />
							<span>{t("buy_step_4_c3")}</span>
						</p>
						<div className="break-micro" />
						<p>{t("buy_step_4_c4")}</p>
						<div className="break-micro" />
						<a href="/wallets">
							<div className="buy-cta-button">{t("buy_cta_wallets")}</div>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
