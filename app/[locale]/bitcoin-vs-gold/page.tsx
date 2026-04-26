import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ComparisonPageLayout } from "@/components/ComparisonPageLayout";
import { BITCOIN_VS_GOLD } from "@/lib/comparisons/bitcoin-vs-gold";
import { buildComparisonMetadata } from "@/lib/comparisons/metadata";
import { type Locale } from "@/lib/i18n/config";

/**
 * /[locale]/bitcoin-vs-gold — Phase 7a comparison page.
 *
 * V2 redesign applied during port. Page data (translation keys, links,
 * sources, asset-accent color) lives in `lib/comparisons/bitcoin-vs-gold.ts`.
 * Rendering + schemas handled by the shared `ComparisonPageLayout`.
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildComparisonMetadata(BITCOIN_VS_GOLD, locale);
}

export default async function BitcoinVsGoldPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <ComparisonPageLayout data={BITCOIN_VS_GOLD} locale={locale as Locale} />;
}
