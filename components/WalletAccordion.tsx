"use client";

import { useState } from "react";
import type { ReactNode } from "react";

/**
 * WalletAccordion — V2 redesigned FAQ-style accordion used on the
 * `/wallets` page (and also reused on `/lightning` at V2 time).
 *
 * Visual shape:
 *   - A bordered surface card (matches `.whats-next-card` / `.comparison-
 *     intro`) with the question on the left and a rotating chevron on the
 *     right.
 *   - Click (or Enter / Space on the header) toggles an expanded body
 *     that animates via max-height.
 *
 * All styling lives in `app/globals.css` under the `.wallet-accordion*`
 * selectors. The `question` is a pre-translated string (the parent
 * Server Component resolves it through `getTranslations()` / `getPage
 * Translations()` so this file stays a tiny Client Component).
 */
export type WalletAccordionProps = {
	/** Pre-translated question text shown in the header. */
	question: string;
	/** Body of the accordion — paragraphs, callouts, lists, etc. */
	children: ReactNode;
};

export function WalletAccordion({ question, children }: WalletAccordionProps) {
	const [open, setOpen] = useState(false);

	return (
		<div className={`wallet-accordion${open ? " is-open" : ""}`}>
			<button
				type="button"
				className="wallet-accordion-header"
				aria-expanded={open}
				onClick={() => setOpen((v) => !v)}
			>
				<span className="wallet-accordion-question">{question}</span>
				<span className="wallet-accordion-chevron" aria-hidden="true">
					▼
				</span>
			</button>
			<div className="wallet-accordion-body" aria-hidden={!open}>
				<div className="wallet-accordion-body-inner">{children}</div>
			</div>
		</div>
	);
}
