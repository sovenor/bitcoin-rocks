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
