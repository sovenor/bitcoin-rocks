import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

/**
 * Reusable wallet card tile for the /business/wallets page.
 *
 * Parent server component resolves per-card features by i18n key and renders
 * the legacy .wallet-box-biz tile.
 */

export async function BusinessWalletCard({
	image,
	nameKey,
	squareNoteKey,
	features,
	featureFirstBold = true,
	getWalletHref,
	getWalletLabel,
}: {
	image: string;
	nameKey: string;
	squareNoteKey?: string;
	features: readonly string[];
	/** If true, the first feature-line is rendered bold (the legacy "category" line). */
	featureFirstBold?: boolean;
	getWalletHref: string;
	getWalletLabel: string;
}): Promise<ReactNode> {
	const t = await getTranslations();

	return (
		<div className="wallet-box-biz">
			<div className="container-inner">
				<div style={{ textAlign: "center" }}>
					<img src={image} className="device" alt={t(nameKey)} />
				</div>
				<h3 className="h3-label">{t(nameKey)}</h3>

				<div className="break-mini" />
				<p>
					{squareNoteKey ? (
						<>
							<span>{t(squareNoteKey)}</span>
							<br />
							<br />
						</>
					) : null}
					{features.map((fk, idx) => (
						<span key={fk}>
							{featureFirstBold && idx === 0 ? (
								<span className="bold">{t(fk)}</span>
							) : (
								t(fk)
							)}
							<br />
						</span>
					))}
					<br />
				</p>

				<a href={getWalletHref} target="_blank" rel="noopener noreferrer">
					<div className="wallet-button">{getWalletLabel}</div>
				</a>
			</div>
		</div>
	);
}
