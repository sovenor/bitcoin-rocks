import { getTranslations } from "next-intl/server";

import { Link } from "@/lib/i18n/navigation";

/**
 * Canonical V2 footer.
 *
 * Ports the footer block currently in `index.html` (the one with
 * `.footer-logo-wrap`): a centered logo with a horizontal line that breaks
 * behind it, tagline, then a single row of dot-separated links (About ·
 * Contribute · Nostr · email).
 *
 * Rendered on every page via `app/[locale]/layout.tsx`, so there's one
 * source of truth — zero duplication across the 40+ legacy HTML pages.
 *
 * All strings come from translation keys (`common_footer_*`). The legacy
 * tagline/link translations already exist for all 55 locales.
 */

const NOSTR_URL =
	"https://primal.net/p/nprofile1qqsrmqhg7mxxczt9gjln8ey8tgpl2cq2elm7c3n7z59pe3m395s5mjgnfsua2";
const CONTRIBUTE_URL =
	"https://github.com/sovenor/bitcoin-rocks/blob/main/CONTRIBUTING.md";
const CONTACT_EMAIL = "hi@bitcoin.rocks";

export async function Footer() {
	const t = await getTranslations();

	return (
		<footer className="w-[70%] ml-[15%] mt-5 pt-10 pb-10 xs:w-[90%] xs:ml-[5%]">
			<div className="mx-auto">
				{/* Logo with horizontal line that breaks behind it */}
				<div className="relative flex items-center justify-center mb-8 xs:mb-6">
					<div
						aria-hidden="true"
						className="absolute top-1/2 left-0 right-0 h-px bg-[#555] z-0"
					/>
					<Link
						href="/"
						className="relative z-[2] inline-block bg-bg px-4 leading-[0] no-underline xs:px-3"
					>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img
							src="/img/logos/rocks-logo-color-v2.png"
							alt="bitcoin.rocks"
							className="h-8 block -mt-2.5 xs:h-6"
						/>
					</Link>
				</div>

				<p className="font-proxima text-sm text-fg-dim text-center m-0 mb-3">
					{t("common_footer_tagline")}
				</p>

				<p className="font-proxima text-sm text-fg-dim text-center m-0">
					<Link
						href="/about"
						className="text-bitcoin-orange no-underline hover:underline"
					>
						{t("common_footer_about")}
					</Link>
					<span aria-hidden="true" className="mx-2 text-[#555]">
						·
					</span>
					<a
						href={CONTRIBUTE_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="text-bitcoin-orange no-underline hover:underline"
					>
						{t("common_footer_contribute")}
					</a>
					<span aria-hidden="true" className="mx-2 text-[#555]">
						·
					</span>
					<a
						href={NOSTR_URL}
						target="_blank"
						rel="noopener noreferrer"
						className="text-bitcoin-orange no-underline hover:underline"
					>
						{t("common_footer_nostr")}
					</a>
					<span aria-hidden="true" className="mx-2 text-[#555]">
						·
					</span>
					<a
						href={`mailto:${CONTACT_EMAIL}`}
						className="text-bitcoin-orange no-underline hover:underline"
					>
						{CONTACT_EMAIL}
					</a>
				</p>
			</div>
		</footer>
	);
}
