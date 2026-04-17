"use client";

/**
 * CountryFormSelector — ports the behaviour of `jquery/country-selector-forms.js`
 * plus the per-pack change handlers inside `jquery/sticker-picker.js`.
 *
 * Takes a list of {value, label} options and N server-rendered country forms
 * (children keyed by option value). Renders a <select>; when the user picks
 * an option, only the matching form is shown. All forms are in the DOM so the
 * HTML is fully crawlable.
 *
 * Works standalone on the legacy signs flow, and nested inside `<StickerPicker>`
 * for the two-pack sticker flow (one instance per pack).
 */

import { useId, useState, useEffect, useRef, type ReactNode } from "react";

export type CountryOption = {
	value: string;
	label: string;
};

type Props = {
	placeholderLabel: string;
	options: ReadonlyArray<CountryOption>;
	/** Children map: `{ USA: <form>..</form>, Canada: <form>..</form> }`. */
	forms?: Record<string, ReactNode>;
	/**
	 * Alternative API (used by Phase 10 business pages): pass the country
	 * forms as children directly. Each child must be a `<div id="VALUE" class="countries" hidden>`
	 * element — the component toggles the `hidden` attribute on the matching
	 * child in response to `<select>` changes. Keeps the server-rendered HTML
	 * crawlable (all forms present in the initial DOM).
	 */
	children?: ReactNode;
	/** Extra inline style for the <select> (mobile-friendly overrides). */
	style?: React.CSSProperties;
};

export function CountryFormSelector({
	placeholderLabel,
	options,
	forms,
	children,
	style,
}: Props) {
	const [selected, setSelected] = useState<string>("");
	const selectId = useId();
	const wrapRef = useRef<HTMLDivElement>(null);

	// When using the `children` API, toggle `hidden` imperatively on the
	// server-rendered country divs as the selection changes.
	useEffect(() => {
		if (forms) return; // render-time forms path handles its own visibility
		const root = wrapRef.current;
		if (!root) return;
		const sections = root.querySelectorAll<HTMLElement>(":scope > .countries");
		sections.forEach((sec) => {
			sec.hidden = selected !== sec.id;
		});
	}, [forms, selected]);

	return (
		<div ref={wrapRef}>
			<div style={{ textAlign: "center" }}>
				<select
					id={selectId}
					value={selected}
					onChange={(e) => setSelected(e.currentTarget.value)}
					style={style}
				>
					<option value="" disabled>
						{placeholderLabel}
					</option>
					{options.map((o) => (
						<option key={o.value} value={o.value}>
							{o.label}
						</option>
					))}
				</select>
			</div>

			{forms
				? options.map((o) => (
					<div
						key={o.value}
						id={o.value}
						className="countries"
						hidden={selected !== o.value}
					>
						{forms[o.value]}
					</div>
				))
				: children}
		</div>
	);
}
