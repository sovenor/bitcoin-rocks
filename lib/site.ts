/**
 * Canonical site-wide constants.
 *
 * One source of truth for the production origin, brand name, founding date,
 * logo path, and GA measurement ID. All schema helpers, sitemap, robots,
 * and Open Graph metadata pull from this file instead of hard-coding.
 */

export const SITE_ORIGIN = "https://bitcoin.rocks";
export const SITE_NAME = "bitcoin.rocks";
export const SITE_TAGLINE = "Bitcoin education for everyone.";
export const SITE_DESCRIPTION =
	"bitcoin.rocks is a Bitcoin education website accelerating Bitcoin adoption through education. It serves as a first link to share with Bitcoin newcomers, covering topics like inflation, self-custody, wallets, and how Bitcoin is building a better world.";

export const SITE_FOUNDING_DATE = "2022";
export const SITE_PUBLISHED_DATE = "2022-01-01";

export const SITE_LOGO_URL = `${SITE_ORIGIN}/img/logos/rocks-logo-color-v2.png`;
export const SITE_CONTACT_EMAIL = "hi@bitcoin.rocks";

export const GITHUB_URL = "https://github.com/sovenor/bitcoin-rocks";
export const NOSTR_URL =
	"https://primal.net/p/nprofile1qqsrmqhg7mxxczt9gjln8ey8tgpl2cq2elm7c3n7z59pe3m395s5mjgnfsua2";

export const GA_MEASUREMENT_ID = "G-18L58W2GTN";

/**
 * Build an absolute URL for a given locale + slug.
 * Handles the homepage case (`slug === ""`) correctly — no trailing slash.
 */
export function buildUrl(locale: string, slug: string): string {
	const cleaned = slug.replace(/^\/+|\/+$/g, "");
	if (cleaned === "") return `${SITE_ORIGIN}/${locale}`;
	return `${SITE_ORIGIN}/${locale}/${cleaned}`;
}
