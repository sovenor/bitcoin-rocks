"use client";

import { useEffect, useRef } from "react";

const SITE_KEY = "0x4AAAAAAClzj7R6NrkNgcsP";

type TurnstileTheme = "light" | "dark" | "auto";

type TurnstileApi = {
	render: (
		el: HTMLElement,
		options: { sitekey: string; theme?: TurnstileTheme },
	) => string;
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
 */
export function TurnstileWidget({
	theme = "dark",
}: {
	theme?: TurnstileTheme;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const widgetIdRef = useRef<string | null>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		let cancelled = false;
		let intervalId: ReturnType<typeof setInterval> | null = null;

		const tryRender = () => {
			if (cancelled || widgetIdRef.current) return false;
			const api = window.turnstile;
			if (!api) return false;
			widgetIdRef.current = api.render(el, { sitekey: SITE_KEY, theme });
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
		};
	}, [theme]);

	// Keep `.cf-turnstile` on the wrapper so existing CSS spacing rules
	// (e.g. `.sticker-panel-inner .cf-turnstile`) still apply.
	return <div ref={ref} className="cf-turnstile" />;
}
