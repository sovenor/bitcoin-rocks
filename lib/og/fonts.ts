import fs from "node:fs/promises";
import path from "node:path";

import type { Locale } from "@/lib/i18n/config";

/**
 * Google Fonts API helper for opengraph-image generation.
 *
 * Strategy: at build time, request the subset of glyphs we actually need
 * for a given (family, weight, style, text) tuple via Google Fonts'
 * `text=` parameter. The returned WOFF2 contains only those glyphs and
 * is typically 2-5 KB, regardless of script. Result is memoized per
 * (family + style + text) so a static build with hundreds of identical
 * routes only fetches each unique font payload once.
 *
 * Why not @fontsource: CJK (and some Indic) fonts in @fontsource are
 * split into many numbered Unicode-range subsets, requiring per-glyph
 * routing to pick the right file. Google Fonts' `text=` subsetting
 * sidesteps that entirely and handles every script uniformly.
 */

export type OgFont = {
	name: string;
	data: ArrayBuffer;
	weight: 400 | 700;
	style: "normal" | "italic";
};

const cache = new Map<string, ArrayBuffer>();

// UA that triggers Google Fonts to serve WOFF (NOT WOFF2). Satori (the
// engine inside next/og's ImageResponse) only supports WOFF/TTF/OTF —
// it errors out with "Unsupported OpenType signature wOF2" on WOFF2.
const WOFF2_UA =
	"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Safari/605.1.15";

async function fetchGoogleFontWoff(
	family: string,
	weight: 400 | 700,
	style: "normal" | "italic",
	text: string,
): Promise<ArrayBuffer> {
	const cacheKey = `${family}::${weight}::${style}::${text}`;
	const cached = cache.get(cacheKey);
	if (cached) return cached;

	// Only Latin/Cyrillic/Greek (Noto Sans without a script suffix) carries
	// an italic axis on Google Fonts. For every other script family
	// (Noto Sans Arabic, Hebrew, SC, JP, KR, etc.) the only axis is wght;
	// passing `ital,wght@…` triggers HTTP 400.
	const familyParam =
		style === "italic"
			? `${family.replace(/ /g, "+")}:ital,wght@1,${weight}`
			: `${family.replace(/ /g, "+")}:wght@${weight}`;
	const url = `https://fonts.googleapis.com/css2?family=${familyParam}&text=${encodeURIComponent(text)}&display=swap`;

	const cssRes = await fetch(url, { headers: { "User-Agent": WOFF2_UA } });
	if (!cssRes.ok) {
		throw new Error(
			`Google Fonts CSS fetch failed for ${family} (${cssRes.status}): ${url}`,
		);
	}
	const css = await cssRes.text();

	// Google Fonts serves either format('woff2') or format('woff') depending
	// on the requesting User-Agent. Both formats are accepted by satori (the
	// engine inside next/og's ImageResponse), so accept either. Pick the
	// last src URL — for `text=`-subsetted requests there's only one anyway.
	const matches = [
		...css.matchAll(/src:\s*url\((https:[^)]+)\)\s*format\('(woff2?|truetype)'\)/g),
	];
	if (matches.length === 0) {
		throw new Error(
			`Could not parse a font URL out of Google Fonts CSS for ${family}\n${css}`,
		);
	}
	const woffUrl = matches[matches.length - 1]![1]!;

	const woffRes = await fetch(woffUrl);
	if (!woffRes.ok) {
		throw new Error(
			`woff2 download failed (${woffRes.status}) for ${woffUrl}`,
		);
	}
	const buf = await woffRes.arrayBuffer();
	cache.set(cacheKey, buf);
	return buf;
}

/**
 * Pick the Noto Sans family for a given locale's primary script.
 * Returns the Google Fonts family name and whether italic is available
 * (italic is only meaningful for Latin/Cyrillic/Greek scripts).
 */
export function fontFamilyForLocale(locale: Locale): {
	family: string;
	supportsItalic: boolean;
} {
	switch (locale) {
		case "ar":
		case "fa":
		case "ur":
			// Noto Sans Arabic (any build) uses GSUB lookupType 5 substFormat
			// 3 for joining-form selection, which satori's fontkit doesn't
			// support. Cairo is a free sans-serif Arabic typeface with a
			// simpler shaping table that satori parses cleanly, and covers
			// the extended characters Persian + Urdu need on top of Arabic.
			return { family: "Cairo", supportsItalic: false };
		case "he":
			return { family: "Noto Sans Hebrew", supportsItalic: false };
		case "hi":
			return { family: "Noto Sans Devanagari", supportsItalic: false };
		case "bn":
			return { family: "Noto Sans Bengali", supportsItalic: false };
		case "pa":
			return { family: "Noto Sans Gurmukhi", supportsItalic: false };
		case "ta":
			return { family: "Noto Sans Tamil", supportsItalic: false };
		case "si":
			return { family: "Noto Sans Sinhala", supportsItalic: false };
		case "my":
			return { family: "Noto Sans Myanmar", supportsItalic: false };
		case "th":
			return { family: "Noto Sans Thai", supportsItalic: false };
		case "am":
			return { family: "Noto Sans Ethiopic", supportsItalic: false };
		case "zh":
			return { family: "Noto Sans SC", supportsItalic: false };
		case "ja":
			return { family: "Noto Sans JP", supportsItalic: false };
		case "ko":
			return { family: "Noto Sans KR", supportsItalic: false };
		default:
			return { family: "Noto Sans", supportsItalic: true };
	}
}

// Locales whose font is loaded from `@fontsource` on disk rather than
// fetched from the Google Fonts API. See the comment in
// `fontFamilyForLocale` for why.
const DISK_FONT_LOCALES = new Set<Locale>(["ar", "fa", "ur"]);

const fontsourceDiskCache = new Map<string, ArrayBuffer>();

async function loadFontsourceWoff(
	pkg: string,
	subset: string,
	weight: 400 | 700,
): Promise<ArrayBuffer> {
	const filename = `${pkg}-${subset}-${weight}-normal.woff`;
	const cacheKey = `disk::${pkg}::${subset}::${weight}`;
	const cached = fontsourceDiskCache.get(cacheKey);
	if (cached) return cached;
	const filepath = path.join(
		process.cwd(),
		"node_modules/@fontsource",
		pkg,
		"files",
		filename,
	);
	const buf = await fs.readFile(filepath);
	const ab = buf.buffer.slice(
		buf.byteOffset,
		buf.byteOffset + buf.byteLength,
	) as ArrayBuffer;
	fontsourceDiskCache.set(cacheKey, ab);
	return ab;
}

// Locally-licensed brand font. Used for all Latin-script locales as the
// primary heading face; Noto Sans is loaded alongside as a coverage
// fallback so any glyph Proxima Nova doesn't have (Cyrillic, Greek,
// extended diacritics) still renders cleanly via satori's per-glyph
// font selection.
const PROXIMA_BOLD_PATH = path.join(
	process.cwd(),
	"app/fonts/og/ProximaNova-Bold.woff",
);

let proximaBoldCache: ArrayBuffer | null = null;
async function loadProximaBold(): Promise<ArrayBuffer> {
	if (proximaBoldCache) return proximaBoldCache;
	const buf = await fs.readFile(PROXIMA_BOLD_PATH);
	proximaBoldCache = buf.buffer.slice(
		buf.byteOffset,
		buf.byteOffset + buf.byteLength,
	) as ArrayBuffer;
	return proximaBoldCache;
}

/**
 * Load the heading font (bold, weight 700, normal style) subsetted to
 * exactly the glyphs in `title`.
 *
 * The OG layout only renders one piece of text now — the page H1 — so
 * a single weight is all we need. Italic is dropped to match the
 * website's actual H1 styling (`app/globals.css :: h1` is bold, not
 * italic).
 *
 * Font selection by locale:
 *   - ar / fa / ur:   Cairo Bold (from @fontsource on disk)
 *   - non-Latin scripts (he, hi, bn, pa, ta, si, my, th, am, zh, ja, ko):
 *                     Noto Sans <Script> Bold (Google Fonts text-subset)
 *   - everything else (Latin / Cyrillic / Greek):
 *                     Proxima Nova Bold (licensed, on disk) +
 *                     Noto Sans Bold fallback (Google Fonts text-subset)
 *                     so Cyrillic / Greek / rare diacritics still render
 */
export async function loadOgFonts(
	locale: Locale,
	title: string,
): Promise<OgFont[]> {
	const { family } = fontFamilyForLocale(locale);

	if (DISK_FONT_LOCALES.has(locale)) {
		// Arabic / Persian / Urdu — Cairo Bold WOFF from @fontsource.
		// The `arabic` subset covers all three locales' character set.
		const bold = await loadFontsourceWoff("cairo", "arabic", 700);
		return [{ name: family, data: bold, weight: 700, style: "normal" }];
	}

	if (family === "Noto Sans") {
		// Latin / Cyrillic / Greek — Proxima Nova primary, Noto Sans
		// secondary for any glyph outside Proxima's coverage.
		const [proxima, noto] = await Promise.all([
			loadProximaBold(),
			fetchGoogleFontWoff("Noto Sans", 700, "normal", title),
		]);
		return [
			{ name: "Proxima Nova", data: proxima, weight: 700, style: "normal" },
			{ name: "Noto Sans", data: noto, weight: 700, style: "normal" },
		];
	}

	const bold = await fetchGoogleFontWoff(family, 700, "normal", title);
	return [{ name: family, data: bold, weight: 700, style: "normal" }];
}
