/**
 * next-intl routing definition.
 *
 * One place that describes: supported locales, the default, how to prefix
 * them in URLs. Consumed by both `middleware.ts` and by `next-intl`'s
 * server helpers for the `<Link>` component (Phase 3+).
 */

import { defineRouting } from "next-intl/routing";

import { defaultLocale, locales } from "./config";

export const routing = defineRouting({
	locales: locales,
	defaultLocale,

	// Always prefix URLs with a locale (e.g. `/en/inflation`). This matches
	// the migration plan's "path-based locales" decision (MIGRATION-NEXTJS.md
	// locked-in decision #1) and guarantees every page has a canonical
	// locale-scoped URL — no bare `/inflation` that could fight the
	// cookie/header detection.
	localePrefix: "always",

	// Detection on first visit: Accept-Language header → redirect to
	// `/<lang>/…` and remember the choice in a cookie for subsequent visits.
	// Manual switcher always overrides (next-intl writes the cookie whenever
	// a `<Link>`-based locale change happens).
	localeDetection: true,
});
