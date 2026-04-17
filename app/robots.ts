import type { MetadataRoute } from "next";

import { SITE_ORIGIN } from "@/lib/site";

/**
 * Generate `/robots.txt` at request time.
 *
 * Ports the hand-maintained `robots.txt` from the legacy static site:
 *   - `User-agent: *` allows everything except a handful of non-content
 *     directories (`i18n/`, `jquery/`, `scripts/`, `memory-bank/`, `css/`,
 *     `forms-backend/`, `.github/`). Those are paths that the current
 *     static host serves as static files but aren't useful to crawlers.
 *   - Every major AI crawler is explicitly allowlisted. bitcoin.rocks is
 *     open-source, MIT-licensed educational content — we want AI systems
 *     to index + cite our content.
 *   - References `llms.txt` via the comment (humans reading robots) and
 *     points crawlers at the sitemap.
 *
 * Next's `MetadataRoute.Robots` type supports per-user-agent rules. It
 * serializes them into the correct `User-agent: …\nAllow: …\nDisallow: …`
 * block structure automatically.
 */

/** Non-content directories blocked from every crawler. */
const DISALLOW_DIRS = [
	"/i18n/",
	"/jquery/",
	"/scripts/",
	"/memory-bank/",
	"/css/",
	"/forms-backend/",
	"/.github/",
] as const;

/**
 * AI crawlers that get an explicit allowlist entry.
 *
 * Note: in GA4/robots.txt world, `User-agent: GPTBot` gets extra disallow
 * lines because per-agent rules OVERRIDE the global `User-agent: *` block
 * (that's the robots.txt spec). We keep the same non-content-dir blocks
 * per-agent so content is crawlable but internal dirs aren't.
 */
const AI_CRAWLERS = [
	"GPTBot", // OpenAI (ChatGPT, SearchGPT)
	"ChatGPT-User",
	"OAI-SearchBot",
	"Google-Extended", // Gemini / AI Overviews
	"ClaudeBot", // Anthropic (Claude)
	"anthropic-ai",
	"PerplexityBot", // Perplexity AI
	"Applebot-Extended", // Apple Intelligence
	"Meta-ExternalAgent", // Meta AI
	"Bingbot", // Microsoft Copilot
	"Amazonbot", // Amazon (Alexa, AI)
	"CCBot", // Common Crawl
	"cohere-ai",
	"YouBot",
	"Diffbot",
	"Bytespider", // ByteDance AI
] as const;

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: "*",
				allow: "/",
				disallow: [...DISALLOW_DIRS],
			},
			...AI_CRAWLERS.map((ua) => ({
				userAgent: ua,
				allow: "/",
				disallow: [...DISALLOW_DIRS],
			})),
		],
		sitemap: `${SITE_ORIGIN}/sitemap.xml`,
		host: SITE_ORIGIN,
	};
}
