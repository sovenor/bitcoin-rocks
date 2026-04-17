"use client";

/**
 * StickerPicker — ports `jquery/sticker-picker.js`.
 *
 * On the /stickers page there are two "pack" tiles (TEXT PACK and SIGNS PACK).
 * Clicking one:
 *   - highlights it (orange border, full opacity)
 *   - dims the other (50% opacity, gray border)
 *   - reveals the matching country <select> (first or second), hides the other
 *
 * Each select's own change handler is wired in `CountryFormSelector`.
 *
 * The server-rendered initial state hides both selects (`hidden`) so the page
 * doesn't show the USA/Canada dropdown until a pack has been chosen. The old
 * inline JS used `style.display = 'none'` on mount; we use the HTML5 `hidden`
 * attribute for the same effect semantically.
 */

import { useCallback, useEffect, useRef, useState } from "react";

type Pack = "first" | "second" | null;

type Props = {
	/**
	 * First pack tile — normally the "text pack".
	 * The component clones this JSX to render the tile and separately wires
	 * click + visual state.
	 */
	firstTile: React.ReactNode;
	/** Second pack tile — normally the "signs pack". */
	secondTile: React.ReactNode;
	/** First select+forms block (id="countryselector"). */
	firstSelector: React.ReactNode;
	/** Second select+forms block (id="countryselector2" + matching "Name2"-suffixed country divs). */
	secondSelector: React.ReactNode;
};

export function StickerPicker({
	firstTile,
	secondTile,
	firstSelector,
	secondSelector,
}: Props) {
	const [active, setActive] = useState<Pack>(null);
	const firstRef = useRef<HTMLDivElement>(null);
	const secondRef = useRef<HTMLDivElement>(null);

	const setBorder = useCallback((el: HTMLElement | null, color: string) => {
		if (el) el.style.border = `1px solid ${color}`;
	}, []);

	const setOpacity = useCallback((root: HTMLElement | null, opacity: string) => {
		if (!root) return;
		root.querySelectorAll<HTMLElement>("*").forEach((node) => {
			node.style.opacity = opacity;
		});
	}, []);

	useEffect(() => {
		if (active === "first") {
			setBorder(firstRef.current, "#ff9500");
			setBorder(secondRef.current, "#3f3f3f");
			setOpacity(firstRef.current, "1");
			setOpacity(secondRef.current, "0.5");
		} else if (active === "second") {
			setBorder(firstRef.current, "#3f3f3f");
			setBorder(secondRef.current, "#ff9500");
			setOpacity(firstRef.current, "0.5");
			setOpacity(secondRef.current, "1");
		}
	}, [active, setBorder, setOpacity]);

	return (
		<>
			<div
				ref={firstRef}
				id="first-sticker"
				className="choose-sticker"
				onClick={() => setActive("first")}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setActive("first");
					}
				}}
			>
				{firstTile}
			</div>

			<div className="break-nano" />

			{/* First selector — only shown once user clicks the first tile. */}
			<div hidden={active !== "first"}>{firstSelector}</div>

			<div className="break-nano" />

			<div
				ref={secondRef}
				id="second-sticker"
				className="choose-sticker"
				onClick={() => setActive("second")}
				role="button"
				tabIndex={0}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						e.preventDefault();
						setActive("second");
					}
				}}
			>
				{secondTile}
			</div>

			<div className="break-nano" />

			<div hidden={active !== "second"}>{secondSelector}</div>
		</>
	);
}
