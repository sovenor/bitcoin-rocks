/**
 * WebSite JSON-LD schema — emitted only on the homepage.
 *
 * Ports the hand-maintained block in the legacy `index.html`. Tells search
 * engines about the brand's `SearchAction` (enables the sitelinks search
 * box in SERPs) and lists all supported languages via `inLanguage`.
 */

import { locales } from "../i18n/config";
import { SITE_DESCRIPTION, SITE_NAME, SITE_ORIGIN } from "../site";

export function buildWebSiteSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"@id": `${SITE_ORIGIN}#website`,
		name: SITE_NAME,
		url: SITE_ORIGIN,
		description: SITE_DESCRIPTION,
		publisher: {
			"@id": `${SITE_ORIGIN}#organization`,
		},
		potentialAction: {
			"@type": "SearchAction",
			target: {
				"@type": "EntryPoint",
				urlTemplate: `https://www.google.com/search?q=site:bitcoin.rocks+{search_term_string}`,
			},
			"query-input": "required name=search_term_string",
		},
		inLanguage: [...locales],
	};
}
