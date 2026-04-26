"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { languages, type LanguageEntry } from "@/lib/i18n/config";
import { usePathname, useRouter } from "@/lib/i18n/navigation";

/**
 * Language switcher — ports the behavior of `jquery/language.js`.
 *
 * - Current locale label (native name) shown in the nav pill.
 * - Click to open a dropdown of all supported languages + an "Add language"
 *   row at the bottom that links to the CONTRIBUTING translations section.
 * - Selecting a language:
 *     - Fires the `language_switch` GA4 event (matches legacy param names).
 *     - Uses next-intl's `router.replace({ pathname }, { locale })` which
 *       persists the choice in the `NEXT_LOCALE` cookie and navigates to the
 *       same path under the new locale. No full page reload needed.
 * - Also fires `language_pageview` once on mount so the legacy "which language
 *   is this user actually using" dashboards keep working. Detects the source
 *   (stored cookie vs Accept-Language vs default) by reading
 *   `document.cookie`.
 *
 * Note: the legacy cache-busting `TRANSLATION_VERSION` is obsolete in Next
 * because page regeneration invalidates cached renders automatically.
 */

const CUSTOM_URL =
	"https://github.com/sovenor/bitcoin-rocks/blob/main/CONTRIBUTING.md#translations";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GtagFn = (...args: any[]) => void;

function getGtag(): GtagFn | null {
	if (typeof window === "undefined") return null;
	const w = window as unknown as { gtag?: GtagFn };
	return typeof w.gtag === "function" ? w.gtag : null;
}

function readLocaleCookie(): string | null {
	if (typeof document === "undefined") return null;
	const match = document.cookie.match(/(?:^|; )NEXT_LOCALE=([^;]+)/);
	return match ? decodeURIComponent(match[1]!) : null;
}

export function LanguageSwitcher() {
	const locale = useLocale();
	const pathname = usePathname();
	const router = useRouter();
	const t = useTranslations();

	const addLanguageLabel = t("common_language_switcher_add_language");

	const [open, setOpen] = useState(false);
	const wrapperRef = useRef<HTMLDivElement>(null);

	// Fire language_pageview once on mount (matches jquery/language.js).
	useEffect(() => {
		const gtag = getGtag();
		if (!gtag) return;

		const hasCookie = readLocaleCookie() !== null;
		const source = hasCookie ? "stored" : "browser";

		gtag("event", "language_pageview", {
			event_category: "Language",
			event_label: locale,
			language_active: locale,
			language_source: source,
		});
	}, [locale]);

	// Close dropdown on outside click.
	useEffect(() => {
		if (!open) return;
		function onDocClick(e: MouseEvent) {
			if (!wrapperRef.current) return;
			if (!wrapperRef.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener("click", onDocClick);
		return () => document.removeEventListener("click", onDocClick);
	}, [open]);

	function handleSelect(entry: LanguageEntry & { url?: string }) {
		const gtag = getGtag();

		if (entry.code === "custom" && entry.url) {
			if (gtag) {
				// Keep the GA `event_label` English so dashboards / funnels
				// keep consistent grouping across locales. The user-facing
				// copy is translated via `addLanguageLabel` above.
				gtag("event", "language_switch", {
					event_category: "Language",
					event_label: "Add language",
					language_selected: "custom",
				});
			}
			window.location.href = entry.url;
			return;
		}

		if (gtag) {
			gtag("event", "language_switch", {
				event_category: "Language",
				event_label: entry.code,
				language_selected: entry.code,
			});
		}

		setOpen(false);

		// next-intl writes the NEXT_LOCALE cookie and navigates to the same
		// pathname under the selected locale.
		router.replace(pathname, { locale: entry.code as never });
	}

	const currentLang = languages.find((l) => l.code === locale);
	const currentLabel = currentLang?.name ?? "English";

	return (
		<div ref={wrapperRef} className="relative inline-flex">
			<button
				type="button"
				className="inline-flex items-center justify-center whitespace-nowrap font-proxima text-[15px] text-[#999] hover:text-[#f0f0f0] transition-colors cursor-pointer bg-transparent border-0 py-1 md:text-sm xs:text-xs"
				onClick={(e) => {
					e.stopPropagation();
					setOpen((v) => !v);
				}}
				aria-haspopup="listbox"
				aria-expanded={open}
			>
				{currentLabel}
			</button>

			{open && (
				<div
					className="absolute top-full right-0 mt-2 min-w-[180px] max-h-[400px] overflow-y-auto bg-[#12121f] border border-[#3d3d3d] rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.5)] z-[9999] py-2"
					role="listbox"
					onClick={(e) => e.stopPropagation()}
				>
					{languages.map((lang) => {
						const active = lang.code === locale;
						return (
							<button
								key={lang.code}
								type="button"
								role="option"
								aria-selected={active}
								onClick={() => handleSelect(lang)}
								className={`block w-full text-left px-4 py-2 font-proxima text-sm whitespace-nowrap transition-colors ${
									active
										? "text-bitcoin-orange font-bold"
										: "text-fg-muted hover:bg-bitcoin-orange/15 hover:text-bitcoin-orange"
								}`}
							>
								{lang.name}
							</button>
						);
					})}
					<button
						type="button"
						role="option"
						onClick={() =>
							handleSelect({
								code: "custom",
								name: addLanguageLabel,
								url: CUSTOM_URL,
							})
						}
						className="block w-full text-left px-4 py-2 font-proxima text-sm whitespace-nowrap text-fg-muted hover:bg-bitcoin-orange/15 hover:text-bitcoin-orange transition-colors"
					>
						{addLanguageLabel}
					</button>
				</div>
			)}
		</div>
	);
}
