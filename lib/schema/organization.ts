/**
 * Organization JSON-LD schema for bitcoin.rocks.
 *
 * Ports `scripts/inject-organization-schema.js`. Emitted once per request
 * in `app/[locale]/layout.tsx` so every page has the Organization entity
 * reference available for `author`/`publisher` attribution in other
 * schemas (Article, WebPage, etc).
 */

import {
	GITHUB_URL,
	NOSTR_URL,
	SITE_CONTACT_EMAIL,
	SITE_DESCRIPTION,
	SITE_FOUNDING_DATE,
	SITE_LOGO_URL,
	SITE_NAME,
	SITE_ORIGIN,
} from "../site";

/** Topics the organization is an authority on — used for entity resolution. */
const KNOWS_ABOUT = [
	"Bitcoin",
	"Bitcoin education",
	"Bitcoin wallets",
	"Bitcoin self-custody",
	"Inflation",
	"Lightning Network",
	"Bitcoin vs Gold",
	"Bitcoin for business",
	"Bitcoin stickers",
	"Bitcoin accepted here stickers for businesses",
	"How to accept Bitcoin payments",
	"Bitcoin vs crypto",
	"Bitcoin vs cash",
	"Bitcoin vs bonds",
	"Bitcoin vs CBDCs",
	"Bank runs",
	"Compound inflation calculator",
	"Bitcoin vs stocks",
	"Bitcoin vs banks",
	"Bitcoin vs Visa",
	"Bitcoin vs real estate",
	"Bitcoin vs fine art",
	"Bitcoin mining and energy",
	"Bitcoin and human rights",
	"Bitcoin and freedom",
	"Nostr",
	"Bitcoin adoption",
	"Purchasing power",
	"Bitcoin volatility",
] as const;

/**
 * Build the Organization JSON-LD payload.
 * The organization itself is language-agnostic, so this takes no locale.
 */
export function buildOrganizationSchema() {
	return {
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": `${SITE_ORIGIN}#organization`,
		name: SITE_NAME,
		url: SITE_ORIGIN,
		logo: SITE_LOGO_URL,
		foundingDate: SITE_FOUNDING_DATE,
		description: SITE_DESCRIPTION,
		email: SITE_CONTACT_EMAIL,
		sameAs: [GITHUB_URL, NOSTR_URL],
		contactPoint: {
			"@type": "ContactPoint",
			email: SITE_CONTACT_EMAIL,
			contactType: "customer support",
		},
		knowsAbout: [...KNOWS_ABOUT],
	};
}

/** Reference used by other schemas to avoid duplicating the full Organization node. */
export const ORGANIZATION_REF = {
	"@type": "Organization",
	"@id": `${SITE_ORIGIN}#organization`,
	name: SITE_NAME,
	url: SITE_ORIGIN,
	logo: {
		"@type": "ImageObject",
		url: SITE_LOGO_URL,
	},
} as const;
