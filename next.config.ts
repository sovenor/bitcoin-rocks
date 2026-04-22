import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin("./lib/i18n/request.ts");

/**
 * Legacy slug shortcuts the static site shipped via `nginx.conf` + `.htaccess`.
 *
 * Each entry maps a historical short URL (what humans typed or shared on
 * socials — `bitcoin.rocks/gold` → the gold comparison page) to its canonical
 * unlocalized destination. Next's `redirects()` runs BEFORE middleware, so
 * after these 301s redirect the short slug to the canonical path (e.g.
 * `/gold` → `/bitcoin-vs-gold`), next-intl's middleware catches the result
 * and prepends the Accept-Language-matched locale, yielding the final URL
 * (`/<lang>/bitcoin-vs-gold`) in a single extra hop.
 *
 * Source of truth: `nginx.conf` rewrite directives (lines 130-164). When we
 * delete `nginx.conf` in Phase 14, these entries are all that remain of it.
 */
const LEGACY_SLUG_REDIRECTS: Array<{ source: string; destination: string }> = [
	// Sticker pack shortcuts
	{ source: "/orange-pill-pack", destination: "/stickers" },
	{ source: "/sticker", destination: "/stickers" },
	{ source: "/bitcoin-stickers", destination: "/stickers" },
	{ source: "/opp", destination: "/stickers" },
	// Comparison page shortcuts
	{ source: "/gold", destination: "/bitcoin-vs-gold" },
	{ source: "/cbdc", destination: "/bitcoin-vs-cbdc" },
	{ source: "/CBDC", destination: "/bitcoin-vs-cbdc" },
	{ source: "/crypto", destination: "/bitcoin-vs-crypto" },
	{ source: "/cash", destination: "/bitcoin-vs-cash" },
	{ source: "/real-estate", destination: "/bitcoin-vs-real-estate" },
	{ source: "/realestate", destination: "/bitcoin-vs-real-estate" },
	{ source: "/stocks", destination: "/bitcoin-vs-stocks" },
	{ source: "/equities", destination: "/bitcoin-vs-stocks" },
	{ source: "/bonds", destination: "/bitcoin-vs-bonds" },
	{ source: "/bond", destination: "/bitcoin-vs-bonds" },
	{ source: "/art", destination: "/bitcoin-vs-fine-art" },
	{ source: "/fine-art", destination: "/bitcoin-vs-fine-art" },
	{ source: "/fineart", destination: "/bitcoin-vs-fine-art" },
	{ source: "/visa", destination: "/bitcoin-vs-visa" },
	{ source: "/banks", destination: "/bitcoin-vs-banks" },
	// Case + singular/plural variants.
	// NOTE: Next's redirect matcher (path-to-regexp) is case-insensitive, so
	// an entry like `/INFLATION → /inflation` creates an infinite 308 loop
	// (the destination matches the source case-insensitively → redirects to
	// itself forever). Keep every `source` here DIFFERENT from its
	// `destination` even under ASCII case folding. Browsers effectively
	// never emit ALL-CAPS paths anyway — they lowercase the URL bar host
	// and preserve whatever the link said for the path. The all-caps
	// aliases aren't worth the redirect-loop footgun.
	{ source: "/bank-run", destination: "/bank-runs" },
	{ source: "/bankrun", destination: "/bank-runs" },
	{ source: "/bankruns", destination: "/bank-runs" },
	{ source: "/wallet", destination: "/wallets" },
	{ source: "/flyer", destination: "/flyers" },
	// Business section shortcuts.
	// `/business/guide` was folded into `/business` on Apr 22, 2026 — both the
	// unlocalized (`/business/guide`) and locale-prefixed (`/<locale>/business/guide`)
	// forms redirect to `/business` so any inbound link from search engines,
	// socials, or bookmarks still lands on valid content.
	{ source: "/guide", destination: "/business" },
	{ source: "/guides", destination: "/business" },
	{ source: "/business/guide", destination: "/business" },
	{ source: "/business/guides", destination: "/business" },
	{ source: "/:locale/business/guide", destination: "/:locale/business" },
	{ source: "/:locale/business/guides", destination: "/:locale/business" },
	{ source: "/kit", destination: "/business/kit" },
	{ source: "/business-kit", destination: "/business/kit" },
	{ source: "/businesskit", destination: "/business/kit" },
	// Save-sticker deep link (preserves the query string)
	{ source: "/save", destination: "/inflation?sign=got-inflation" },
	// Trailing `.html` from any legacy bookmark gets stripped (e.g.
	// `/inflation.html` → `/inflation`, which middleware then localizes).
	{ source: "/:path*.html", destination: "/:path*" },
];

const nextConfig: NextConfig = {
	// Pin Turbopack to this directory so it doesn't climb to any parent package.json
	turbopack: {
		root: __dirname,
	},

	// Serve optimized images as WebP
	images: {
		formats: ["image/webp"],
	},

	// React strict mode (sibling projects use it; catches common issues)
	reactStrictMode: true,

	// Security + cache headers (cribbed from ../vote-for-better-money pattern)
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{ key: "X-Content-Type-Options", value: "nosniff" },
					{ key: "X-Frame-Options", value: "SAMEORIGIN" },
					{ key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
					{
						key: "Permissions-Policy",
						value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
					},
				],
			},
			{
				// Long-cache for fingerprinted/static image assets
				source: "/img/:path*",
				headers: [
					{ key: "Cache-Control", value: "public, max-age=31536000, immutable" },
				],
			},
			{
				source: "/favicons/:path*",
				headers: [
					{ key: "Cache-Control", value: "public, max-age=31536000, immutable" },
				],
			},
			{
				// Sticker-file PNGs are versioned by filename/dir so long-cache
				// them too. Shaves server load on the 219 PNGs shipped in
				// `public/sticker-files/`.
				source: "/sticker-files/:path*",
				headers: [
					{ key: "Cache-Control", value: "public, max-age=31536000, immutable" },
				],
			},
		];
	},

	/**
	 * 301 redirects for legacy URLs. Permanent so Google updates its index +
	 * link juice is preserved. See `LEGACY_SLUG_REDIRECTS` above for the
	 * catalog (ported from `nginx.conf`).
	 */
	async redirects() {
		return LEGACY_SLUG_REDIRECTS.map(({ source, destination }) => ({
			source,
			destination,
			permanent: true,
		}));
	},
};

export default withNextIntl(nextConfig);
