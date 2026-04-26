"use client";

/**
 * BuyFlow — V2 redesign (April 22, 2026).
 *
 * Four-step wizard for `/buy`:
 *   1. Select country (card-like buttons grid + filter search) — rendered
 *      by the parent Server Component as `children`, so the 52 country
 *      buttons stay crawler-visible in the initial HTML response. This
 *      component delegates click + input events on that subtree.
 *   2. Choose payment method (bank / cash) — two bordered method cards
 *      with green ✓ + red ✗ `.buy-callout` badges and an orange CTA.
 *   3. Recommended platforms for the selected (country × method) combo —
 *      stacked platform cards reusing the V2 wallet-card chrome.
 *   4. Storage guidance → CTA into `/wallets` (reuses `.wallet-lightning-
 *      cta` for the single-row link card look).
 *
 * Smooth-scroll between steps is imperative (matches legacy jQuery feel).
 *
 * Styling: `.buy-*` classes live in `app/globals.css`. We also reuse
 * `.wallet-callout`, `.wallet-lightning-cta`, `.wallet-card-cta` look
 * and the shared `.inflation-section` / `.container-inner` wrappers so
 * the page visually belongs to the same V2 family as /wallets and
 * /lightning.
 */

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

import { getPlatformsFor } from "@/lib/buy/platforms";

type Props = {
	/** Locale-prefixed /wallets URL, resolved on the server. */
	walletsHref: string;
	/** Step 1 country grid + search input, rendered server-side. */
	children: React.ReactNode;
};

export function BuyFlow({ walletsHref, children }: Props) {
	const t = useTranslations();
	const step1Ref = useRef<HTMLDivElement>(null);
	const step2Ref = useRef<HTMLDivElement>(null);
	const step3Ref = useRef<HTMLDivElement>(null);
	const step4Ref = useRef<HTMLDivElement>(null);

	const [country, setCountry] = useState<string | null>(null);
	const [method, setMethod] = useState<"bank" | "cash" | null>(null);

	// Wire country button clicks + search input filter via delegation.
	useEffect(() => {
		const root = step1Ref.current;
		if (!root) return;

		const handleClick = (e: Event) => {
			const target = e.target as HTMLElement;
			const btn = target.closest<HTMLButtonElement>("button.buy-country-button");
			if (!btn) return;
			const code = btn.dataset.country;
			if (!code) return;

			root
				.querySelectorAll<HTMLButtonElement>(
					"button.buy-country-button.is-selected",
				)
				.forEach((b) => b.classList.remove("is-selected"));
			btn.classList.add("is-selected");

			setCountry(code);
			setMethod(null);

			setTimeout(() => {
				const step2 = step2Ref.current;
				if (step2) {
					const top =
						step2.getBoundingClientRect().top + window.scrollY - 50;
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

	return (
		<>
			{/* ═══ STEP 1 — country grid (rendered by parent) ═══ */}
			<div
				id="country-selection"
				className="buy-step inflation-section"
				ref={step1Ref}
			>
				{children}
			</div>

			{/* ═══ STEP 2 — payment method ═══ */}
			<div
				id="payment-method-selection"
				className="buy-step inflation-section"
				ref={step2Ref}
				hidden={!country}
			>
				<div className="container-inner">
					<div className="buy-step-header">
						<span className="buy-step-eyebrow">
							{t("buy_step_2_eyebrow")}
						</span>
						<h2>{t("buy_step_2_header")}</h2>
						<p>{t("buy_step_2_description")}</p>
					</div>

					<div className="buy-method-grid">
						{/* ── Bank ── */}
						<div
							className={`buy-method-card${method === "bank" ? " is-selected" : ""}`}
						>
							<div className="buy-method-card-title">
								{t("buy_method_bank_transfer")}
							</div>
							<div className="buy-method-card-callouts">
								<span className="wallet-callout good">
									<span
										className="wallet-callout-icon"
										aria-hidden="true"
									>
										✓
									</span>
									<span>{t("buy_method_bank_fast")}</span>
								</span>
								<span className="wallet-callout danger">
									<span
										className="wallet-callout-icon"
										aria-hidden="true"
									>
										✗
									</span>
									<span>{t("buy_method_bank_less_private")}</span>
								</span>
							</div>
							<p className="buy-method-card-description">
								{t("buy_method_bank_description")}
							</p>
							<button
								type="button"
								className="buy-method-card-cta"
								onClick={() => chooseMethod("bank")}
							>
								{t("buy_method_choose_bank")}
							</button>
						</div>

						{/* ── Cash ── */}
						<div
							className={`buy-method-card${method === "cash" ? " is-selected" : ""}`}
						>
							<div className="buy-method-card-title">
								{t("buy_method_cash")}
							</div>
							<div className="buy-method-card-callouts">
								<span className="wallet-callout good">
									<span
										className="wallet-callout-icon"
										aria-hidden="true"
									>
										✓
									</span>
									<span>{t("buy_method_cash_private")}</span>
								</span>
								<span className="wallet-callout warn">
									<span
										className="wallet-callout-icon"
										aria-hidden="true"
									>
										⚠
									</span>
									<span>{t("buy_method_cash_limited")}</span>
								</span>
							</div>
							<p className="buy-method-card-description">
								{t("buy_method_cash_description")}
							</p>
							<button
								type="button"
								className="buy-method-card-cta"
								onClick={() => chooseMethod("cash")}
							>
								{t("buy_method_choose_cash")}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* ═══ STEP 3 — platforms ═══ */}
			<div
				id="buying-options"
				className="buy-step inflation-section"
				ref={step3Ref}
				hidden={!country || !method}
			>
				<div className="container-inner">
					<div className="buy-step-header">
						<span className="buy-step-eyebrow">
							{t("buy_step_3_eyebrow")}
						</span>
						<h2>{t("buy_step_3_header")}</h2>
						<p>{t("buy_step_3_description")}</p>
					</div>

					<div className="buy-platform-stack">
						{platforms.map((p) => (
							<a
								key={p.name}
								href={p.link}
								target="_blank"
								rel="noopener noreferrer"
								className={`buy-platform-card${p.recommended ? " is-recommended" : ""}`}
								aria-label={`${p.name} — ${t("common_learn_more")}`}
							>
								{p.recommended && (
									<span className="buy-platform-badge">
										{t("buy_platform_recommended")}
									</span>
								)}
								<div className="buy-platform-name">{p.name}</div>
								<p className="buy-platform-description">
									{t(p.descriptionKey)}
								</p>
								<ul className="buy-platform-features">
									{p.featureKeys.map((k) => (
										<li key={k}>
											<span
												className="buy-platform-feature-check"
												aria-hidden="true"
											>
												✓
											</span>
											<span>{t(k)}</span>
										</li>
									))}
								</ul>
								<span className="buy-platform-cta">
									{t("common_learn_more")}
								</span>
							</a>
						))}
					</div>
				</div>
			</div>

			{/* ═══ STEP 4 — storage ═══ */}
			<div
				id="storage-guidance"
				className="buy-step inflation-section"
				ref={step4Ref}
				hidden={!country || !method}
			>
				<div className="container-inner">
					<div className="buy-step-header">
						<span className="buy-step-eyebrow">
							{t("buy_step_4_eyebrow")}
						</span>
						<h2>{t("buy_step_4_header")}</h2>
					</div>
					<div className="buy-storage-card">
						<p>{t("buy_step_4_c1")}</p>
						<p>{t("buy_step_4_c2")}</p>
						<p>{t("buy_step_4_c3")}</p>
						<p className="buy-storage-card-outro">
							{t("buy_step_4_c4")}
						</p>
					</div>

					<a href={walletsHref} className="wallet-lightning-cta">
						<div>
							<div className="wallet-lightning-cta-label">
								{t("buy_storage_cta_label")}
							</div>
							<div className="wallet-lightning-cta-title">
								{t("buy_cta_wallets")}
							</div>
						</div>
						<span
							className="wallet-lightning-cta-arrow"
							aria-hidden="true"
						>
							→
						</span>
					</a>
				</div>
			</div>
		</>
	);
}
