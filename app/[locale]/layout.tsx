import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { locales, RTL_LOCALES, type Locale } from "@/lib/i18n/config";

const GA_MEASUREMENT_ID = "G-18L58W2GTN";
// Typekit kit hosting proxima-nova + proxima-soft. This matches
// the existing `<link rel="stylesheet" href="https://use.typekit.net/ful2oqu.css">`
// in the current static index.html.
const TYPEKIT_URL = "https://use.typekit.net/ful2oqu.css";

export const metadata: Metadata = {
	title: "bitcoin.rocks",
	description: "Bitcoin education for everyone.",
	metadataBase: new URL("https://bitcoin.rocks"),
	icons: {
		icon: [
			{ url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
			{ url: "/favicons/favicon-128.png", sizes: "128x128", type: "image/png" },
			{
				url: "/favicons/favicon-196x196.png",
				sizes: "196x196",
				type: "image/png",
			},
		],
		apple: [
			{ url: "/favicons/apple-touch-icon-152x152.png", sizes: "152x152" },
			{ url: "/favicons/apple-touch-icon-120x120.png", sizes: "120x120" },
		],
		shortcut: ["/favicons/favicon.ico"],
	},
};

// Pre-render one static page per supported locale. next-intl requires this
// pairing with `setRequestLocale()` below to enable full server-side
// rendering of translated markup (the whole point of this migration for SEO).
export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(locales, locale)) {
		notFound();
	}

	// Tell next-intl which locale is active for this request — required so
	// server components invoked below this layout can call useTranslations()
	// and friends without an error.
	setRequestLocale(locale);

	const messages = await getMessages();
	const dir = RTL_LOCALES.has(locale as Locale) ? "rtl" : "ltr";

	return (
		<html lang={locale} dir={dir}>
			<head>
				{/* Adobe Typekit — Proxima Nova + Proxima Soft */}
				<link rel="stylesheet" href={TYPEKIT_URL} />
			</head>
			<body className="bg-bg text-fg font-proxima antialiased">
				{/* Google Analytics (gtag.js) — same measurement ID as the static site */}
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

				<NextIntlClientProvider locale={locale} messages={messages}>
					<main>{children}</main>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
