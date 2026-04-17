import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { JsonLd } from "@/components/JsonLd";
import { type Locale } from "@/lib/i18n/config";
import { buildArticleSchema } from "@/lib/schema/article";
import { buildAlternates } from "@/lib/schema/hreflang";
import { buildWebSiteSchema } from "@/lib/schema/website";

/**
 * Homepage — Phase 3 stub, Phase 4 SEO infrastructure, Phase 5 full port.
 *
 * The layout already emits the Organization JSON-LD. This page additionally
 * emits:
 *   - WebSite schema (SearchAction + inLanguage list — homepage-only)
 *   - WebPage/Article schema (per-locale, with dateModified from
 *     `i18n/en/index_en.json` `@metadata.last-updated`)
 * …and registers hreflang alternates via `generateMetadata()`.
 *
 * The Navbar + Footer live in `app/[locale]/layout.tsx` — this file only
 * owns the hero section for now. Phase 5 will replace the placeholder
 * with the full v2 homepage (carousels, category sections, cards).
 */

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "" });

	// next-intl gives us translated strings; fall back silently if a key's
	// missing in this locale (the loader already merges in English defaults).
	const title = t("home_h1");
	const description = t("home_intro");

	return {
		title,
		description,
		alternates: buildAlternates({ locale: locale as Locale, slug: "" }),
		openGraph: {
			title,
			description,
			type: "website",
			url: `https://bitcoin.rocks/${locale}`,
		},
	};
}

export default async function LocaleHome({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	const t = await getTranslations();
	const headline = t("home_h1");
	const intro = t("home_intro");

	const articleSchema = await buildArticleSchema({
		slug: "",
		locale,
		headline,
		description: intro,
		schemaType: "WebPage",
	});
	const websiteSchema = buildWebSiteSchema();

	return (
		<>
			<JsonLd data={websiteSchema} />
			<JsonLd data={articleSchema} />

			<section className="px-6 py-12 md:py-16 flex items-center justify-center">
				<div className="max-w-2xl text-center">
					<p className="text-bitcoin-orange text-sm uppercase tracking-widest font-semibold">
						bitcoin.rocks
					</p>
					<h1 className="mt-4 text-4xl md:text-5xl font-bold text-fg">
						{headline}
					</h1>
					<p className="mt-6 text-fg-muted text-lg leading-relaxed">{intro}</p>
					<p className="mt-8 text-fg-dim text-sm">
						Serving locale{" "}
						<code className="bg-bg-soft border border-border rounded px-2 py-0.5 text-bitcoin-orange">
							{locale}
						</code>
						{" · "}Phase 4 scaffold (SEO helpers wired; homepage port is Phase 5)
					</p>
					<p className="mt-6 text-fg-dim text-sm">
						Tracking: <code>MIGRATION-NEXTJS.md</code>
					</p>
				</div>
			</section>
		</>
	);
}
