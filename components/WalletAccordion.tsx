"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/**
 * WalletAccordion — Client Component port of the `toggleAccordion()` JS
 * embedded at the bottom of `wallets.html` + `lightning.html`.
 *
 * Legacy behavior:
 *   - `<p class="wallet-q">` shows an orange pill header with a ▼ arrow.
 *   - Clicking toggles the `active` class on the header + the `open`
 *     class on the sibling `.wallet-accordion-content` div.
 *   - CSS rules in globals.css (ported from style.css) animate max-height
 *     from 0 → 4000px and rotate the ▼ arrow via `transform: rotate(180deg)`.
 *
 * This component wraps that pattern in a typed React shell. The `question`
 * text is passed via props (already translated by the parent Server
 * Component — no `useTranslations()` needed here, keeping the client
 * bundle trivial).
 */
export type WalletAccordionProps = {
	/** The orange-pill question text (rendered inside `<span class="orange">`). */
	question: string;
	/** The body of the accordion — typically the alert + paragraphs. */
	children: ReactNode;
};

export function WalletAccordion({ question, children }: WalletAccordionProps) {
	const [open, setOpen] = useState(false);
	return (
		<>
			<p
				className={`wallet-q${open ? " active" : ""}`}
				onClick={() => setOpen((v) => !v)}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setOpen((v) => !v);
					}
				}}
			>
				<span className="orange">{question}</span>
				<span className="accordion-arrow">▼</span>
			</p>
			<div className={`wallet-accordion-content${open ? " open" : ""}`}>
				{children}
			</div>
		</>
	);
}
