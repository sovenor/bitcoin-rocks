import { getTranslations, setRequestLocale } from "next-intl/server";

/**
 * Phase 2 placeholder page.
 *
 * Renders a minimal *translated* message at /<locale>/ so we can verify the
 * full i18n pipeline end-to-end: middleware → routing.ts → request.ts →
 * load-messages.ts → <html lang dir> → server-rendered translated HTML.
 *
 * Uses `getTranslations()` (the server-side sibling of `useTranslations`) so
 * the translated markup is present in the initial HTML response — this is
 * exactly what the legacy static site does NOT do, and what makes this
 * migration a big SEO win.
 *
 * Phase 5 replaces this stub with the real homepage content.
 */
export default async function LocaleHome({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	// We've loaded `common` + `index` in `lib/i18n/request.ts`, so both
	// namespaces are available via the flat key API.
	const t = await getTranslations();

	return (
		<div className="min-h-screen flex items-center justify-center px-6 py-20">
			<div className="max-w-2xl text-center">
				<p className="text-bitcoin-orange text-sm uppercase tracking-widest font-semibold">
					bitcoin.rocks
				</p>
				<h1 className="mt-4 text-4xl md:text-5xl font-bold text-fg">
					{t("home_h1")}
				</h1>
				<p className="mt-6 text-fg-muted text-lg leading-relaxed">
					{t("home_intro")}
				</p>
				<p className="mt-8 text-fg-dim text-sm">
					Serving locale{" "}
					<code className="bg-bg-soft border border-border rounded px-2 py-0.5 text-bitcoin-orange">
						{locale}
					</code>
					{" · "}Phase 2 scaffold
				</p>
				<p className="mt-6 text-fg-dim text-sm">
					Tracking: <code>MIGRATION-NEXTJS.md</code>
				</p>
			</div>
		</div>
	);
}
