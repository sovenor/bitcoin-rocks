import type { NextConfig } from "next";

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
		];
	},

	// Phase 13 will populate legacy-URL → locale-URL redirects here.
	async redirects() {
		return [];
	},
};

export default nextConfig;
