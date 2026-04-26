"use client";

import type { ReactNode } from "react";

/**
 * PrintFlyerButton — Client Component port of the inline `printFlyer()`
 * function in flyers.html. On click it creates a hidden iframe pointing
 * at the PDF and calls `contentWindow.print()` once it loads.
 */
export type PrintFlyerButtonProps = {
	pdfUrl: string;
	className?: string;
	children: ReactNode;
};

export function PrintFlyerButton({
	pdfUrl,
	className = "bounty-button",
	children,
}: PrintFlyerButtonProps) {
	function handleClick() {
		const iframe = document.createElement("iframe");
		iframe.style.display = "none";
		iframe.src = pdfUrl;
		document.body.appendChild(iframe);
		iframe.onload = () => {
			setTimeout(() => {
				try {
					iframe.contentWindow?.print();
				} catch {
					// Some browsers block printing cross-origin; fail silently.
				}
			}, 100);
		};
	}
	return (
		<div
			className={className}
			role="button"
			tabIndex={0}
			style={{ cursor: "pointer" }}
			onClick={handleClick}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					handleClick();
				}
			}}
		>
			{children}
		</div>
	);
}
