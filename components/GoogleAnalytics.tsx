import Script from "next/script";

/**
 * Google Analytics (gtag.js) snippet.
 *
 * Matches the measurement ID used by the legacy static site
 * (`G-18L58W2GTN`). Uses `strategy="afterInteractive"` so the tag loads
 * after hydration — good for Core Web Vitals.
 *
 * The legacy site also fires a `language_pageview` custom event from
 * `jquery/language.js` — that event is emitted by `LanguageSwitcher.tsx`
 * instead (so we don't need to duplicate the language-detection logic
 * here).
 *
 * Custom dimensions registered in GA4 (must match parameter names):
 *   - event_category, event_label
 *   - language_active, language_source, language_selected (from LanguageSwitcher)
 *   - currency (from CountrySelector on /inflation)
 */

export const GA_MEASUREMENT_ID = "G-18L58W2GTN";

export function GoogleAnalytics() {
	return (
		<>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
			/>
			<Script id="gtag-init" strategy="afterInteractive">
				{`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${GA_MEASUREMENT_ID}');
				`}
			</Script>
		</>
	);
}
