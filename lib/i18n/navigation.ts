/**
 * Locale-aware navigation helpers.
 *
 * Thin wrapper around `next-intl/navigation` that bakes in our `routing`
 * config so `<Link>`, `useRouter()`, `usePathname()`, and friends
 * automatically respect the current locale and persist the locale cookie
 * when the user switches.
 *
 * Usage:
 *   import { Link, usePathname, useRouter } from "@/lib/i18n/navigation";
 *   <Link href="/inflation">…</Link>  // → /<current-locale>/inflation
 */

import { createNavigation } from "next-intl/navigation";

import { routing } from "./routing";

export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing);
