import type { Metadata } from "next";

/**
 * Global (non-localized) 404 page.
 *
 * Rendered by Next when a request reaches a URL that can't resolve a locale
 * at all (rare — middleware usually redirects `/` → `/<locale>` and catches
 * unlocalized paths). For locale-scoped 404s (the common case), see
 * `app/[locale]/[...rest]/page.tsx` which gets proper Navbar/Footer/translations.
 *
 * Because `app/layout.tsx` is a pass-through (so per-locale layouts can emit
 * their own `<html lang dir>`), this file must render its own `<html>` and
 * `<body>` wrapper — the Next docs explicitly require it for the global
 * not-found branch.
 */

export const metadata: Metadata = {
	title: "404 Error | Page Not Found | bitcoin.rocks",
	robots: {
		index: false,
		follow: true,
	},
};

export default function NotFound() {
	return (
		<html lang="en" dir="ltr">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="https://use.typekit.net/ful2oqu.css" />
				<title>404 Error | Page Not Found | bitcoin.rocks</title>
			</head>
			<body className="bg-bg text-fg font-proxima antialiased">
				<div className="container-main">
					<div className="container-inner">
						<h1>Bitcoin rocks, but this broken page does not.</h1>

						<div
							className="container-inflation-button"
							style={{ marginTop: "32px" }}
						>
							<a href="/en" className="inflation-button">
								Back to Home
							</a>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
