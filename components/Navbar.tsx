import { getTranslations } from "next-intl/server";

import { Link } from "@/lib/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

/**
 * Site nav — V2 design (logo sits on top of a pill-shaped border, as on
 * `/inflation` and the v2 homepage).
 *
 * This is a Server Component so translations (`home_nav_*` keys) are in the
 * initial HTML response. The interactive language dropdown is delegated to
 * `<LanguageSwitcher />` (Client Component).
 *
 * All links use `next-intl`'s locale-aware `<Link>` so `/inflation` becomes
 * `/<current-locale>/inflation`.
 */
export async function Navbar() {
	const t = await getTranslations();

	return (
		<nav className="flex flex-col items-center pt-4 pb-4 px-5">
			{/* Logo — sits on top of the pill border */}
			<Link
				href="/"
				className="relative z-[2] block bg-bg px-4 pb-[2px] mt-5 -mb-[1px] leading-[0] no-underline xs:px-3"
			>
				{/* Using <img> rather than next/image to keep the simple SSR
				    footprint; homepage logo is small + already WebP-optimized. */}
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					src="/img/logos/rocks-logo-color-v2.png"
					alt="bitcoin.rocks"
					className="h-8 xs:h-6 hover:opacity-85 transition-opacity"
				/>
			</Link>

			{/* Pill-shaped nav container — logo overlaps its top border.
			    Uses `justify-between` + fixed outer padding so the leftmost
			    item always sits a fixed distance from the pill's left edge
			    and the rightmost item always sits the same distance from
			    the pill's right edge, regardless of which language name is
			    selected. The two middle items get evenly-distributed space
			    between them. */}
			<div className="-mt-2 flex items-center justify-between border border-[#555] rounded-full px-14 py-5 w-4/5 max-w-[460px] box-border md:py-5 xs:px-8 xs:py-4">
				<Link
					href="/"
					className="font-proxima text-[15px] text-[#999] hover:text-[#f0f0f0] transition-colors py-1 whitespace-nowrap md:text-sm xs:text-xs"
				>
					{t("home_nav_learn")}
				</Link>
				<Link
					href="/get-involved"
					className="font-proxima text-[15px] text-[#999] hover:text-[#f0f0f0] transition-colors py-1 whitespace-nowrap md:text-sm xs:text-xs"
				>
					{t("home_nav_get_involved")}
				</Link>
				<Link
					href="/about"
					className="font-proxima text-[15px] text-[#999] hover:text-[#f0f0f0] transition-colors py-1 whitespace-nowrap md:text-sm xs:text-xs"
				>
					{t("home_nav_about")}
				</Link>
				<LanguageSwitcher />
			</div>
		</nav>
	);
}
