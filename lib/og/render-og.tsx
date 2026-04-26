import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

import { type Locale, RTL_LOCALES } from "@/lib/i18n/config";

import { loadOgFonts } from "./fonts";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const BG = "#060610";
const TITLE_COLOR = "#ffffff";
const SUBTITLE_COLOR = "#9b9b9b";

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
 * without wrapping past two lines or overflowing horizontally. The
 * thresholds are tuned against Noto Sans Bold's average glyph width;
 * CJK and Arabic shapes will land in the same buckets fine because
 * they're proportionally similar at these sizes.
 */
function titleFontSize(title: string): number {
	const len = title.length;
	if (len <= 14) return 130;
	if (len <= 22) return 110;
	if (len <= 32) return 92;
	if (len <= 48) return 76;
	return 64;
}

export async function renderOgImage({
	locale,
	title,
	subtitle,
}: {
	locale: Locale;
	title: string;
	subtitle: string;
}): Promise<ImageResponse> {
	const [fonts, logoDataUrl] = await Promise.all([
		loadOgFonts(locale, title, subtitle),
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
				{/* Logo */}
				<img
					src={logoDataUrl}
					alt=""
					width={220}
					height={88}
					style={{ marginBottom: 48 }}
				/>

				{/* Title */}
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
						textAlign: "center",
						color: TITLE_COLOR,
						fontWeight: 700,
						fontStyle: fonts[0]!.style,
						fontSize: titleSize,
						lineHeight: 1.05,
						letterSpacing: "-0.01em",
						marginBottom: 32,
					}}
				>
					{title}
				</div>

				{/* Subtitle */}
				<div
					style={{
						display: "flex",
						width: "100%",
						justifyContent: "center",
						textAlign: "center",
						color: SUBTITLE_COLOR,
						fontWeight: 400,
						fontStyle: fonts[1]!.style,
						fontSize: 38,
						lineHeight: 1.25,
						maxWidth: 1000,
					}}
				>
					{subtitle}
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
