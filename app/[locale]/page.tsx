/**
 * Phase 1 placeholder page.
 *
 * Renders a minimal message at /<locale>/ so we can verify
 * that routing, Tailwind v4 tokens, Typekit fonts, and the
 * GA <Script> wiring all work end-to-end before wiring up
 * i18n (Phase 2), shared components (Phase 3), and the real
 * homepage (Phase 5).
 */
export default async function LocaleHome({
	params,
}: {
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	return (
		<div className="min-h-screen flex items-center justify-center px-6 py-20">
			<div className="max-w-2xl text-center">
				<p className="text-bitcoin-orange text-sm uppercase tracking-widest font-semibold">
					bitcoin.rocks
				</p>
				<h1 className="mt-4 text-4xl md:text-5xl font-bold text-fg">
					Next.js migration in progress
				</h1>
				<p className="mt-6 text-fg-muted text-lg leading-relaxed">
					Phase 1 scaffold · serving locale{" "}
					<code className="bg-bg-soft border border-border rounded px-2 py-0.5 text-bitcoin-orange">
						{locale}
					</code>
					. Homepage content lands in Phase 5.
				</p>
				<p className="mt-6 text-fg-dim text-sm">
					Tracking: <code>MIGRATION-NEXTJS.md</code>
				</p>
			</div>
		</div>
	);
}
