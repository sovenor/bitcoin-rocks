import type { Metadata } from "next";
import "./globals.css";

/**
 * Root layout.
 *
 * The real <html> / <body> / <head> markup lives in
 * `app/[locale]/layout.tsx` so we can emit the correct
 * `lang` + `dir` attributes per locale. This root exists
 * only to satisfy the Next.js App Router requirement of
 * a file at `app/layout.tsx`.
 *
 * Metadata here is only emitted on the unlocalized root URL and on
 * the global `app/not-found.tsx`. Both cases are fallbacks that don't
 * go through next-intl, so the strings stay English — the locale-scoped
 * `app/[locale]/layout.tsx` overrides them with translated copy via
 * `common_site_tagline` for every real page render.
 */
export const metadata: Metadata = {
	title: "bitcoin.rocks",
	description: "Bitcoin education for everyone.",
};


export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return children;
}
