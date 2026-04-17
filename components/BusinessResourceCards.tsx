import { getTranslations } from "next-intl/server";

/**
 * Reusable "MORE BUSINESS RESOURCES" grid shown at the bottom of nearly every
 * business/* page. Ports the 7 colored .biz-box cards from the legacy HTML.
 *
 * `exclude` lets callers drop the card that links back to the current page.
 * `showHeader` controls the "MORE BUSINESS RESOURCES" h2 above the grid.
 * `headerKey` overrides the header i18n key (e.g. `common_kit_cta_header` on
 * the business/index page).
 */

export type BusinessResourceKey =
	| "learn"
	| "wallets"
	| "maps"
	| "stickers"
	| "rewards"
	| "accounting"
	| "faq"
	| "kit";

type ResourceDef = {
	key: BusinessResourceKey;
	boxClass: string;
	titleI18nKey: string;
	/** If true, href is external — use `hrefOverride` to supply the URL. */
	external?: boolean;
	hrefOverride?: string;
	/** Path relative to `/${locale}`. Ignored if `hrefOverride` set. */
	path?: string;
};

const RESOURCES: readonly ResourceDef[] = [
	{ key: "learn", boxClass: "biz-learn", titleI18nKey: "common_biz_learn", path: "/business" },
	{ key: "wallets", boxClass: "biz-wallet", titleI18nKey: "common_biz_wallets", path: "/business/wallets" },
	{ key: "maps", boxClass: "biz-maps", titleI18nKey: "common_biz_maps", path: "/business/maps" },
	{ key: "stickers", boxClass: "biz-stickers", titleI18nKey: "common_biz_stickers", path: "/business/stickers" },
	{ key: "rewards", boxClass: "biz-rewards", titleI18nKey: "common_biz_rewards", external: true, hrefOverride: "https://www.oshi.tech/" },
	{ key: "accounting", boxClass: "biz-accounting", titleI18nKey: "common_biz_accounting", path: "/business/accounting" },
	{ key: "faq", boxClass: "biz-faq", titleI18nKey: "common_biz_faq", path: "/business/faq" },
	{ key: "kit", boxClass: "biz-wallet", titleI18nKey: "common_biz_kit", path: "/business/kit" },
];

export async function BusinessResourceCards({
	locale,
	exclude = [],
	showHeader = true,
	headerKey = "common_biz_more",
	includeKit = false,
}: {
	locale: string;
	exclude?: readonly BusinessResourceKey[];
	showHeader?: boolean;
	headerKey?: string;
	/** Whether to include the "Print your own Business Kit" card. Default: false (it's shown on /business only). */
	includeKit?: boolean;
}) {
	const t = await getTranslations({ locale });
	const l = `/${locale}`;

	const visible = RESOURCES.filter((r) => {
		if (exclude.includes(r.key)) return false;
		if (r.key === "kit" && !includeKit) return false;
		return true;
	});

	return (
		<>
			{showHeader && (
				<>
					<div className="break-micro" />
					<h2 className="h2-inflation">{t(headerKey)}</h2>
					<div className="break-micro" />
				</>
			)}
			{visible.map((r, idx) => {
				const href = r.hrefOverride ?? `${l}${r.path ?? ""}`;
				const linkProps = r.external
					? { target: "_blank", rel: "noopener noreferrer" as const }
					: {};
				return (
					<div key={r.key}>
						<a href={href} {...linkProps}>
							<div className={`biz-box ${r.boxClass}`}>
								<div className="container-inner">
									<h3
										className="biz-h3"
										style={{ textTransform: "initial" }}
									>
										{t(r.titleI18nKey)}
									</h3>
								</div>
							</div>
						</a>
						{idx < visible.length - 1 && <div className="break-nano" />}
					</div>
				);
			})}
		</>
	);
}
