import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ComparisonPageLayout } from "@/components/ComparisonPageLayout";
import { BITCOIN_VS_STOCKS } from "@/lib/comparisons/bitcoin-vs-stocks";
import { buildComparisonMetadata } from "@/lib/comparisons/metadata";
import { type Locale } from "@/lib/i18n/config";

/** /[locale]/bitcoin-vs-stocks — Phase 7a comparison page. */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildComparisonMetadata(BITCOIN_VS_STOCKS, locale);
}

export default async function BitcoinVsStocksPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <ComparisonPageLayout data={BITCOIN_VS_STOCKS} locale={locale as Locale} />;
}
