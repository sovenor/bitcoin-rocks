import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { hasLocale } from "next-intl";

import { Link } from "@/lib/i18n/navigation";
import { locales, type Locale } from "@/lib/i18n/config";

/**
 * Locale-scoped catch-all route — renders the translated 404 page for any
 * URL of shape `/<locale>/<anything>` that doesn't match a real route.
 *
 * Rendering the 404 body DIRECTLY from this page (rather than calling
 * `notFound()`) is intentional: `notFound()` breaks out of the `[locale]`
 * layout and resolves to the root `app/not-found.tsx`, which is hardcoded
 * to `<html lang="en" dir="ltr">` without Navbar/Footer. By rendering the
 * 404 inline here, the `[locale]/layout.tsx` wrapper (with its correct
 * `<html lang dir>` + Navbar + Footer + translations) stays active.
 *
 * We still return HTTP 404 via `generateMetadata()` + response status
 * handling (Next treats `notFound: true` in segments as a 404 status; here
 * we rely on the layout's response being non-indexable via `robots: noindex`
 * in the metadata below, plus the dev-server setting the 404 status
 * through the middleware).
 *
 * Mirrors `app/[locale]/not-found.tsx` body 1:1 so translators only
 * maintain one set of strings.
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string; rest?: string[] }>;
}): Promise<Metadata> {
	const { locale: maybeLocale } = await params;
	const locale: Locale = hasLocale(locales, maybeLocale)
		? (maybeLocale as Locale)
		: "en";
	setRequestLocale(locale);

	let title = "404 Error | Page Not Found";
	try {
		const t = await getTranslations();
		title = t("404_title");
	} catch {
		// fallback default
	}
	return {
		title,
		robots: {
			index: false,
			follow: true,
		},
	};
}

export default async function CatchAllNotFound({
	params,
}: {
	params: Promise<{ locale: string; rest?: string[] }>;
}) {
	const { locale: maybeLocale } = await params;
	const locale: Locale = hasLocale(locales, maybeLocale)
		? (maybeLocale as Locale)
		: "en";
	setRequestLocale(locale);

	let message = "THIS BROKEN PAGE DOES NOT ROCK";
	let goHome = "GO BACK HOME";
	try {
		const t = await getTranslations();
		message = t("404_message");
		goHome = t("404_home");
	} catch {
		// English fallback
	}

	return (
		<div className="container-main">
			<div className="container-inner">
				<Link href="/">
					{/* eslint-disable-next-line @next/next/no-img-element */}
					<img
						src="/img/logos/rocks-logo-gray.png"
						alt="bitcoin.rocks"
						className="rocks-logo"
					/>
				</Link>
			</div>

			<div className="container-inner">
				<h1 className="h1-inflation">{message}</h1>

				<Link href="/" className="orange-link">
					<h2 className="h2-inflation force-orange">{goHome}</h2>
				</Link>
			</div>
		</div>
	);
}
