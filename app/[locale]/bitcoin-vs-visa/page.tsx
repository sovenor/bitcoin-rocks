import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ComparisonPageLayout } from "@/components/ComparisonPageLayout";
import { BITCOIN_VS_VISA } from "@/lib/comparisons/bitcoin-vs-visa";
import { buildComparisonMetadata } from "@/lib/comparisons/metadata";
import { type Locale } from "@/lib/i18n/config";

/**
 * /[locale]/bitcoin-vs-visa — Phase 7c comparison page.
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildComparisonMetadata(BITCOIN_VS_VISA, locale);
}

export default async function BitcoinVsVisaPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <ComparisonPageLayout data={BITCOIN_VS_VISA} locale={locale as Locale} />;
}
