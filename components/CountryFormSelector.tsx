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

import { useId, useState, type ReactNode } from "react";

export type CountryOption = {
	value: string;
	label: string;
};

type Props = {
	placeholderLabel: string;
	options: ReadonlyArray<CountryOption>;
	/** Children map: `{ USA: <form>..</form>, Canada: <form>..</form> }`. */
	forms: Record<string, ReactNode>;
	/** Extra inline style for the <select> (mobile-friendly overrides). */
	style?: React.CSSProperties;
};

export function CountryFormSelector({
	placeholderLabel,
	options,
	forms,
	style,
}: Props) {
	const [selected, setSelected] = useState<string>("");
	const selectId = useId();

	return (
		<>
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

			{options.map((o) => (
				<div
					key={o.value}
					id={o.value}
					className="countries"
					hidden={selected !== o.value}
				>
					{forms[o.value]}
				</div>
			))}
		</>
	);
}
