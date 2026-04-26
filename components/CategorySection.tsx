import type { CSSProperties } from "react";
import { useTranslations } from "next-intl";

/**
 * Homepage category section — wraps the per-topic card grid.
 *
 * Renders as:
 *   <section id=... class="whats-next-section category-section"
 *            style="--card-accent: #XXX;">
 *     <div class="container-inner">
 *       <div class="whats-next-header">
 *         <h2>Bitcoin & <span class="accent">category</span></h2>
 *       </div>
 *       <div class="whats-next-grid">…cards…</div>
 *     </div>
 *   </section>
 *
 * `--card-accent` cascades into each <WhatsNextCard> so card labels, the
 * h2 accent word, and hover borders all share the section's color
 * without each card needing to know its own color.
 *
 * `titleKey` = translation key for the accent word ("money", "freedom",
 * "the environment", …). `sectionBitcoinAndKey` defaults to
 * "home_section_bitcoin_and" so the caller doesn't have to repeat it.
 */

export function CategorySection({
	id,
	accent,
	titleKey,
	children,
	bitcoinAndKey = "home_section_bitcoin_and",
}: {
	id: string;
	accent: string;
	titleKey: string;
	children: React.ReactNode;
	bitcoinAndKey?: string;
}) {
	const t = useTranslations();

	// Use a CSS custom property through the style prop so Tailwind's JIT
	// doesn't need to parse the hex value — it just flows through to the
	// DOM where the .category-section / .whats-next-card rules read it.
	const style = { "--card-accent": accent } as CSSProperties;

	return (
		<section
			id={id}
			className="whats-next-section category-section"
			style={style}
		>
			<div className="container-inner">
				<div className="whats-next-header">
					<h2>
						<span>{t(bitcoinAndKey)}</span>{" "}
						<span className="accent">{t(titleKey)}</span>
					</h2>
				</div>
				<div className="whats-next-grid">{children}</div>
			</div>
		</section>
	);
}
