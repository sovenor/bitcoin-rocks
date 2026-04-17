"use client";

import { useCallback, useRef, type KeyboardEvent, type ReactNode } from "react";

/**
 * Ports the `toggleDiv()` inline JS from `nostr/index.html` +
 * `nostr/what-is-nostr.html`. Each expandable section is an orange
 * pill header (`h3.h3-category`) with a body (`.additional-text`
 * wrapped in `.vs-container`) that's hidden by default and toggles
 * on click. Clicks on descendant `<a>` tags **do NOT** toggle —
 * they follow the link instead, same as the legacy DOM walker.
 *
 * The header itself remains server-rendered + translated by the parent;
 * this Client Component only owns the open/closed state.
 */
export function NostrAccordion({
	header,
	children,
}: {
	header: ReactNode;
	children: ReactNode;
}) {
	const rootRef = useRef<HTMLDivElement>(null);

	const onClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
		// Walk from the click target up to our root. Same logic as the
		// legacy toggleDiv() — if any ancestor is an <a>, bail and let
		// the browser handle the navigation.
		let target: HTMLElement | null = event.target as HTMLElement;
		const root = rootRef.current;
		if (!root) return;
		while (target && target !== root) {
			if (target.tagName === "A") return;
			target = target.parentElement;
		}
		root.classList.toggle("expanded");
	}, []);

	const onKeyDown = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
		if (event.key !== "Enter" && event.key !== " ") return;
		// Don't swallow Enter/Space when the focused element is a link or
		// form control — those have native meanings.
		const activeTag = (event.target as HTMLElement).tagName;
		if (activeTag === "A" || activeTag === "BUTTON" || activeTag === "INPUT") {
			return;
		}
		event.preventDefault();
		rootRef.current?.classList.toggle("expanded");
	}, []);

	return (
		<div
			ref={rootRef}
			className="text-box intro orange-bg expandable"
			onClick={onClick}
			onKeyDown={onKeyDown}
			role="button"
			tabIndex={0}
		>
			{header}
			<div className="vs-container additional-text">{children}</div>
		</div>
	);
}
