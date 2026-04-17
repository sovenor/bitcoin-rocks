import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ComparisonPageLayout } from "@/components/ComparisonPageLayout";
import { BITCOIN_VS_CBDC } from "@/lib/comparisons/bitcoin-vs-cbdc";
import { buildComparisonMetadata } from "@/lib/comparisons/metadata";
import { type Locale } from "@/lib/i18n/config";

/**
 * /[locale]/bitcoin-vs-cbdc — Phase 7c comparison page.
 *
 * Uses a custom 3-part H1 ("WHAT SHOULD DIGITAL MONEY LOOK LIKE?")
 * and has 10 comparison points — the most of any comparison page.
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildComparisonMetadata(BITCOIN_VS_CBDC, locale);
}

export default async function BitcoinVsCbdcPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <ComparisonPageLayout data={BITCOIN_VS_CBDC} locale={locale as Locale} />;
}
