import { getTranslations, setRequestLocale } from "next-intl/server";

/**
 * Phase 3 placeholder home page.
 *
 * Renders the existing translated home_h1 / home_intro strings between
 * the shared <Navbar> and <Footer> that live in `app/[locale]/layout.tsx`.
 * Phase 5 replaces this stub with the full ported homepage (carousels,
 * category sections, cards, etc).
 */
export default async function LocaleHome({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	setRequestLocale(locale);

	// `common` + `index` namespaces are eagerly loaded in lib/i18n/request.ts
	// during Phase 2/3, so all home_* and common_* keys are available via
	// the flat key API.
	const t = await getTranslations();

	return (
		<section className="px-6 py-12 md:py-16 flex items-center justify-center">
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
					{" · "}Phase 3 scaffold (shared Navbar + Footer)
				</p>
				<p className="mt-6 text-fg-dim text-sm">
					Tracking: <code>MIGRATION-NEXTJS.md</code>
				</p>
			</div>
		</section>
	);
}
