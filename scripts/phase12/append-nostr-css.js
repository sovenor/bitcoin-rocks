#!/usr/bin/env node
/**
 * Phase 12 — Append V1 nostr-page CSS to `app/globals.css`.
 *
 * Classes needed by the ported NostrPageLayout that aren't already in
 * globals.css after earlier phases:
 *   .expandable / .additional-text / .expanded .additional-text
 *     (the orange-bg toggle rows that wrap each client-platform group)
 *   p.initial-text
 *     (larger bold header text when collapsed — not currently used by
 *     the V2 component tree but preserved for future redesigns)
 *   p.additional-text
 *     (smaller wrap-text used when expanded — matches V1 prose sizing)
 *   .orange-bg
 *     (flat orange background fill)
 *   .wallet-box-biz img.other
 *     (variant of the wallet-box-biz image used for Iris, a wider aspect)
 *   .wallet-biz-solo
 *     (the "one card per row" layout for the browser-clients section)
 *   .h3-category / .h4-label
 *     (italic H3 + uppercase H4 used in the accordion headers + client names)
 *   .nostr-intro-h2
 *     (our component's H2 wrapper — ports V1's `<h7>` abuse via a normal h2
 *     styled to match the larger bold intro heading)
 *
 * Idempotent — sentinel-marker guard means re-running is a no-op.
 */
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..", "..");
const CSS_PATH = path.join(ROOT, "app/globals.css");
const SENTINEL = "/* ==== PHASE 12 NOSTR CSS ==== */";

const CSS = `

${SENTINEL}
/* V1 nostr-page CSS ported verbatim from css/style.css. The nostr
   pages keep the V1 design system for Phase 12; V2 redesign lives in
   the post-cutover queue. */

.expandable {
	margin-left: 2.5%;
	margin-right: 2.5%;
	width: 95%;
	background-color: #FF9500;
	cursor: pointer;
	overflow: hidden;
	transition: background-color 0.3s ease;
	margin: auto;
	border-radius: 20px;
	margin-bottom: 20px;
}

.additional-text { display: none; }
.expanded .additional-text { display: block; }

p.initial-text {
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 30px;
	color: #f0f0f0;
	margin-left: 30px;
	margin-right: 30px;
	line-height: 30px;
}

p.additional-text {
	font-family: "proxima-nova", sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 20px;
	margin-left: 30px;
	margin-right: 30px;
	margin-top: -20px;
	margin-bottom: 30px;
	line-height: 25px;
}

.orange-bg { background-color: #ff9500; }

/* Wider image variant (iris.png) inside wallet-box-biz — pulls the
   image closer to the top since it isn't a phone screenshot */
.wallet-box-biz img.other {
	width: 100%;
	height: auto;
	margin-top: -100px;
}

/* Solo card layout for Browser Clients section */
.wallet-biz-solo {
	margin-top: 50px !important;
	margin-bottom: 14px;
}

/* h5 appearance on h3 tags (nostr accordion headers) */
.h3-category {
	font-family: proxima-nova, sans-serif;
	font-style: italic;
	font-weight: 700;
	font-size: 40px;
	line-height: 40px;
	margin-top: 100px !important;
	text-align: center;
	overflow: wrap !important;
	padding-bottom: 30px;
	text-transform: uppercase;
	color: #f0f0f0;
}

/* h6 appearance on h4 tags (nostr client names) */
.h4-label {
	font-family: "proxima-soft", sans-serif;
	font-weight: 900;
	font-size: 40px;
	line-height: 35px;
	margin-top: -20px;
	text-align: center;
	text-transform: uppercase;
	color: #f0f0f0;
}

/* Component-specific H2 for the three intro sections. Matches V1's
   <h7> hack (a made-up tag that inherited body styling + a 30px bold
   override). We use a real <h2> so the heading hierarchy stays clean,
   then style it to the same size. */
.nostr-intro-h2 {
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 30px;
	color: #f0f0f0;
	margin-left: 30px;
	margin-right: 30px;
	margin-top: 0;
	margin-bottom: 12px;
	line-height: 30px;
}

/* End of Phase 12 nostr CSS ----------------------------------- */
`;

const current = fs.readFileSync(CSS_PATH, "utf8");
if (current.includes(SENTINEL)) {
	console.log(`[phase12/append-nostr-css] already present — no changes`);
	process.exit(0);
}
fs.writeFileSync(CSS_PATH, current.trimEnd() + "\n" + CSS, "utf8");
console.log(
	`[phase12/append-nostr-css] appended ${CSS.length} chars to ${path.relative(ROOT, CSS_PATH)}`
);
