"use client";

import { useEffect, useRef } from "react";

const SITE_KEY = "0x4AAAAAAClzj7R6NrkNgcsP";

type TurnstileTheme = "light" | "dark" | "auto";

type TurnstileRenderOptions = {
	sitekey: string;
	theme?: TurnstileTheme;
	"refresh-expired"?: "auto" | "manual" | "never";
	callback?: (token: string) => void;
	"expired-callback"?: () => void;
	"error-callback"?: () => void;
	"timeout-callback"?: () => void;
};

type TurnstileApi = {
	render: (el: HTMLElement, options: TurnstileRenderOptions) => string;
	remove: (widgetId: string) => void;
};

declare global {
	interface Window {
		turnstile?: TurnstileApi;
	}
}

/**
 * Turnstile widget rendered explicitly via the JS API so it works for
 * forms that mount AFTER the script's initial auto-render scan (e.g.
 * the wizard panels on /stickers and /business/stickers).
 *
 * Pages that include this widget must also load the Turnstile script:
 *   <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js"
 *           strategy="afterInteractive" async defer />
 *
 * Parents can pass `onTokenChange` to track the captcha lifecycle (token
 * issued / expired / errored) and gate form submission on a live token.
 */
export function TurnstileWidget({
	theme = "dark",
	onTokenChange,
}: {
	theme?: TurnstileTheme;
	onTokenChange?: (token: string | null) => void;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const widgetIdRef = useRef<string | null>(null);
	const onTokenChangeRef = useRef(onTokenChange);

	// Keep the latest callback in a ref so render-effect identity stays
	// stable across parent re-renders.
	useEffect(() => {
		onTokenChangeRef.current = onTokenChange;
	}, [onTokenChange]);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let cancelled = false;
		let intervalId: ReturnType<typeof setInterval> | null = null;

		const tryRender = () => {
			if (cancelled || widgetIdRef.current) return false;
			const api = window.turnstile;
			if (!api) return false;
			widgetIdRef.current = api.render(el, {
				sitekey: SITE_KEY,
				theme,
				"refresh-expired": "auto",
				callback: (token) => onTokenChangeRef.current?.(token),
				"expired-callback": () => onTokenChangeRef.current?.(null),
				"error-callback": () => onTokenChangeRef.current?.(null),
				"timeout-callback": () => onTokenChangeRef.current?.(null),
			});
			return true;
		};

		if (!tryRender()) {
			intervalId = setInterval(() => {
				if (tryRender() && intervalId) clearInterval(intervalId);
			}, 100);
		}

		return () => {
			cancelled = true;
			if (intervalId) clearInterval(intervalId);
			const id = widgetIdRef.current;
			if (id && window.turnstile) {
				try {
					window.turnstile.remove(id);
				} catch {
					// Widget already removed by Turnstile; ignore.
				}
			}
			widgetIdRef.current = null;
			onTokenChangeRef.current?.(null);
		};
	}, [theme]);

	// Use a non-`cf-turnstile` class so the Cloudflare loader's auto-render
	// scan / MutationObserver leaves this element alone — we render into it
	// explicitly in the effect above.
	return <div ref={ref} className="turnstile-mount" />;
}
