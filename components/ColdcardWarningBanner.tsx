import { getTranslations } from "next-intl/server";

/**
 * Site-wide safety notice — Coldcard entropy vulnerability.
 *
 * Rendered above `<Navbar />` in `app/[locale]/layout.tsx` so it appears at
 * the very top of every page, in every locale, including RTL. Server
 * Component — no client JS, permanent (not dismissible) by design, since
 * this is a fund-loss safety warning rather than a marketing announcement.
 *
 * `common_coldcard_warning_message` currently only exists in
 * `i18n/en/common_en.json` — other locales render it in English via the
 * loader's per-key fallback until a translation pass lands. The link label
 * reuses `common_learn_more`, which is already translated in all 55
 * locales.
 *
 * Background: https://blog.coinkite.com/entropy-technical-backgrounder/
 */
export async function ColdcardWarningBanner() {
	const t = await getTranslations();

	return (
		<div className="coldcard-warning-banner">
			<div className="coldcard-warning-banner-inner">
				<span className="coldcard-warning-banner-icon" aria-hidden="true">
					⚠
				</span>
				<p className="coldcard-warning-banner-message">
					{t("common_coldcard_warning_message")}{" "}
					<a
						href="https://blog.coinkite.com/entropy-technical-backgrounder/"
						target="_blank"
						rel="noopener noreferrer"
						className="coldcard-warning-banner-link"
					>
						{t("common_learn_more")}
					</a>
				</p>
			</div>
		</div>
	);
}
