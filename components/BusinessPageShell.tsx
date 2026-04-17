import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

/**
 * Shared wrapper for all `/business/*` pages.
 *
 * Renders the common chrome:
 *   - `.container-main` outer wrapper
 *   - Back-to-home logo link
 *   - The page-specific `children` content
 *   - Publisher Attribution block (reviewed badge + open-source footer)
 *
 * The site-wide Navbar + Footer are already rendered by
 * `app/[locale]/layout.tsx`, so we don't duplicate them here.
 */

export async function BusinessPageShell({
	locale,
	children,
}: {
	locale: string;
	children: ReactNode;
}) {
	const t = await getTranslations({ locale });
	const l = `/${locale}`;

	return (
		<div className="container-main">
			<div className="container-inner">
				<div style={{ textAlign: "center" }}>
					<a href={l}>
						<img
							src="/img/logos/rocks-logo-gray.png"
							className="back-to-home"
							alt="bitcoin.rocks"
						/>
					</a>
				</div>
			</div>

			{children}

			<div
				className="publisher-attribution"
				itemProp="publisher"
				itemScope
				itemType="https://schema.org/Organization"
			>
				<div className="container-inner">
					<p>
						<span className="reviewed-badge">{t("common_reviewed_accuracy")}</span>
						<br />
						<span>{t("common_published_by")}</span>{" "}
						<a href={`${l}/about`} className="orange-link" itemProp="url">
							<span itemProp="name">{t("common_publisher_name")}</span>
						</a>
						<br />
						<span>{t("common_publisher_since")}</span>
						<br />
						<a
							href="https://github.com/sovenor/bitcoin-rocks"
							className="orange-link"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span>{t("common_publisher_open_source")}</span>
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}
