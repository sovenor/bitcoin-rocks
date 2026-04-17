import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ComparisonPageLayout } from "@/components/ComparisonPageLayout";
import { BITCOIN_VS_BANKS } from "@/lib/comparisons/bitcoin-vs-banks";
import { buildComparisonMetadata } from "@/lib/comparisons/metadata";
import { type Locale } from "@/lib/i18n/config";

/**
 * /[locale]/bitcoin-vs-banks — Phase 7b comparison page.
 *
 * V2 redesign applied during port. Page data lives in
 * `lib/comparisons/bitcoin-vs-banks.ts`; rendering + schemas handled
 * by `ComparisonPageLayout`.
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	return buildComparisonMetadata(BITCOIN_VS_BANKS, locale);
}

export default async function BitcoinVsBanksPage({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);
	return <ComparisonPageLayout data={BITCOIN_VS_BANKS} locale={locale as Locale} />;
}
