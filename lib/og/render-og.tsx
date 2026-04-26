import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

import { type Locale, RTL_LOCALES } from "@/lib/i18n/config";

import { loadOgFonts } from "./fonts";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const BG = "#060610";
const TITLE_COLOR = "#ffffff";

// Source asset is 700 x 249 (aspect ratio ~2.811). Keep the rendered
// dimensions on that ratio so the logo never skews.
const LOGO_WIDTH = 280;
const LOGO_HEIGHT = 100; // 280 / 2.811 ≈ 99.6

const LOGO_PATH = path.join(
	process.cwd(),
	"public/img/logos/rocks-logo-color-v2.png",
);

let logoDataUrlCache: string | null = null;
async function getLogoDataUrl(): Promise<string> {
	if (logoDataUrlCache) return logoDataUrlCache;
	const buf = await fs.readFile(LOGO_PATH);
	logoDataUrlCache = `data:image/png;base64,${buf.toString("base64")}`;
	return logoDataUrlCache;
}

/**
 * Pick a heading font size that fits the title in the 1200×630 frame
 * without overflowing horizontally or wrapping past three lines.
 *
 * CJK ideographs and Hangul render at roughly twice the advance width
 * of an average Latin glyph, so each one counts as 2 toward the layout
 * budget. Combining marks count as 0 so Devanagari / Thai / Arabic
 * vowel-mark stacks don't get falsely punished.
 */
function titleFontSize(title: string): number {
	let weighted = 0;
	for (const ch of title) {
		const cp = ch.codePointAt(0)!;
		// CJK unified ideographs, Hiragana/Katakana, Hangul, full-width forms
		if (
			(cp >= 0x3040 && cp <= 0x30ff) ||
			(cp >= 0x3400 && cp <= 0x4dbf) ||
			(cp >= 0x4e00 && cp <= 0x9fff) ||
			(cp >= 0xac00 && cp <= 0xd7af) ||
			(cp >= 0xf900 && cp <= 0xfaff) ||
			(cp >= 0xff00 && cp <= 0xffef)
		) {
			weighted += 2;
			continue;
		}
		// Combining marks (Devanagari, Arabic, Hebrew, Thai vowel marks, etc.)
		if (
			(cp >= 0x0300 && cp <= 0x036f) ||
			(cp >= 0x064b && cp <= 0x065f) ||
			(cp >= 0x0670 && cp <= 0x0670) ||
			(cp >= 0x06d6 && cp <= 0x06ed) ||
			(cp >= 0x0900 && cp <= 0x094f && (cp === 0x093c || cp === 0x094d || (cp >= 0x0941 && cp <= 0x0948))) ||
			(cp >= 0x0e30 && cp <= 0x0e3a) ||
			(cp >= 0x0e47 && cp <= 0x0e4e)
		) {
			continue;
		}
		weighted += 1;
	}
	if (weighted <= 14) return 150;
	if (weighted <= 22) return 124;
	if (weighted <= 32) return 104;
	if (weighted <= 48) return 84;
	if (weighted <= 64) return 70;
	return 60;
}

export async function renderOgImage({
	locale,
	title,
}: {
	locale: Locale;
	title: string;
}): Promise<ImageResponse> {
	const [fonts, logoDataUrl] = await Promise.all([
		loadOgFonts(locale, title),
		getLogoDataUrl(),
	]);

	const isRtl = RTL_LOCALES.has(locale);
	const titleSize = titleFontSize(title);

	return new ImageResponse(
		(
			<div
				style={{
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					background: BG,
					padding: "60px 80px",
					direction: isRtl ? "rtl" : "ltr",
				}}
			>
				<img
					src={logoDataUrl}
					alt=""
					width={LOGO_WIDTH}
					height={LOGO_HEIGHT}
					style={{ marginBottom: 56 }}
				/>

				<div
					style={{
						display: "flex",
						maxWidth: 1040,
						textAlign: "center",
						color: TITLE_COLOR,
						fontFamily: fonts.map((f) => `"${f.name}"`).join(", "),
						fontWeight: 700,
						fontSize: titleSize,
						lineHeight: 1.05,
						letterSpacing: "-0.01em",
					}}
				>
					{title}
				</div>
			</div>
		),
		{
			...OG_SIZE,
			fonts: fonts.map((f) => ({
				name: f.name,
				data: f.data,
				weight: f.weight,
				style: f.style,
			})),
		},
	);
}
