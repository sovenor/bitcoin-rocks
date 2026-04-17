"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

/**
 * DynamicHeader — Client Component port of `jquery/dynamic-header.js`.
 *
 * The inflation page hero H1 is normally "Bitcoin doesn't have inflation,
 * but your money does" (`inflation_h1_orange`). But when users arrive via
 * one of our physical stickers / signs / postcards that point to
 * `/inflation?sticker=XXX` or `/inflation?sign=YYY` or
 * `/inflation?link=calculator`, we want the H1 to echo the sticker's
 * phrasing so the physical→digital transition feels continuous.
 *
 * This component reads `?sticker` / `?sign` / `?link` from the URL on
 * mount and rewrites the `#changing-header` element's text accordingly.
 * If none of those params are present it leaves the server-rendered
 * default H1 alone.
 *
 * Decision table (matches legacy 1:1):
 *   sign=got-inflation         → "Got inflation? Save in Bitcoin."
 *   sticker=cure / cure-v2     → "Need a cure for inflation? Learn how Bitcoin can help"
 *   sticker=got-inflation      → "Got inflation? Learn how Bitcoin can help"
 *   sticker=what-if            → "What if your money didn't have inflation? Let's find out"
 *   sticker=(anything else)    → "Bitcoin doesn't have inflation, but your money does." (sticker_bitcoin + sticker_your_money)
 *   link=calculator | calc-site (overrides sticker)
 *                              → "Opt out of inflation with Bitcoin."
 *
 * Reads + writes are scoped to the exact `#changing-header` `<span>` — no
 * sibling mutations.
 */

const TARGET_ID = "changing-header";

export function DynamicHeader() {
	const t = useTranslations();

	useEffect(() => {
		// Read URL params via URLSearchParams (same semantics as the legacy
		// script). window.location is always defined in useEffect since it
		// runs client-side only.
		const params = new URLSearchParams(window.location.search);
		const sticker = params.get("sticker");
		const link = params.get("link");
		const sign = params.get("sign");

		let headerContent: string | null = null;

		// Priority 1: sign param.
		if (sign === "got-inflation") {
			headerContent = `${t("inflation_sign_got_inflation")} ${t(
				"inflation_save_in_bitcoin",
			)}`;
		} else {
			// Priority 2: sticker param determines the base copy.
			switch (sticker) {
				case "cure":
				case "cure-v2":
					headerContent = `${t("inflation_sticker_cure")} ${t(
						"inflation_sticker_learn",
					)}`;
					break;
				case "got-inflation":
					headerContent = `${t("inflation_sticker_got_inflation")} ${t(
						"inflation_sticker_learn",
					)}`;
					break;
				case "what-if":
					headerContent = `${t("inflation_sticker_what_if")} ${t(
						"inflation_sticker_lets_find_out",
					)}`;
					break;
				default:
					// Only rewrite with the default sticker copy if a sticker param
					// was actually provided (otherwise we leave the server-rendered
					// default H1 alone, which is the V2 page's preferred behavior).
					if (sticker !== null) {
						headerContent = `${t("inflation_sticker_bitcoin")} ${t(
							"inflation_sticker_your_money",
						)}`;
					}
			}

			// Priority 3: `link=calculator` or `link=calculator-site` overrides
			// whichever sticker line we just picked.
			if (link === "calculator" || link === "calculator-site") {
				headerContent = `${t("inflation_calculator_opt_out")} ${t(
					"inflation_calculator_with_bitcoin",
				)}`;
			}
		}

		if (headerContent === null) return;

		const el = document.getElementById(TARGET_ID);
		if (el) {
			el.textContent = headerContent;
		}
	}, [t]);

	// Pure side-effect component — the `<h1><span id="changing-header">…`
	// element is already server-rendered with the default copy.
	return null;
}
