#!/usr/bin/env node
/**
 * Phase 10 — append business-page CSS to app/globals.css.
 *
 * Reads css/style.css, extracts the V1 business-related CSS rules, and
 * appends them to app/globals.css behind a sentinel marker (idempotent —
 * re-running is a no-op).
 *
 * Classes needed by Phase 10 pages:
 *   .biz-box + the 7 color variants (.biz-learn, .biz-wallet, .biz-maps,
 *     .biz-stickers, .biz-accounting, .biz-faq, .biz-rewards)
 *   .biz-h3, .biz-button, .biz-button:hover, .biz-button p
 *   .wallet-box-biz + .wallet-biz-1/.wallet-biz-2, .device
 *   .vs-container, .expandable
 *   .h2-category, .h2-stickers, .h2-section (legacy, pulled into Phase 9a already), .h3-label
 *   .step-container
 *   .bold (legacy utility class)
 *   .home-intro (the text-box variant used on business/wallets)
 *   .inline.sign-adjust — already in Phase 9b block
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO = process.cwd();
const GLOBALS = path.join(REPO, "app", "globals.css");
const SENTINEL = "/* ======= Phase 10: business-page V1 CSS ======= */";

/**
 * The raw CSS block. Ported verbatim from css/style.css line ranges.
 * Where the rule overlaps with already-appended Phase 9 CSS (e.g.
 * `.h2-section`, `.h3-label`), we scope with a more specific selector
 * or just redeclare — cascade-equal.
 */
const CSS_BLOCK = `${SENTINEL}

.bold { font-weight: 700; }

/* Business box grid — seven colored cards */
.biz-box {
	display: block;
	margin: 0 auto;
	max-width: 700px;
	padding: 20px 25px;
	background: #1b1b2b;
	border-radius: 10px;
	text-align: left;
	transition: transform 0.2s ease;
}
.biz-box:hover { transform: scale(1.02); }
.biz-h3 {
	font-family: "proxima-nova", sans-serif;
	font-weight: 700;
	font-size: 20px;
	color: #fff;
	margin: 0;
	line-height: 1.3;
}

.biz-learn { background: #1a2f47; }
.biz-wallet { background: #2f1a47; }
.biz-maps { background: #472f1a; }
.biz-stickers { background: #1a4731; }
.biz-accounting { background: #471a31; }
.biz-faq { background: #1a474a; }
.biz-rewards { background: #2e471a; }

/* Action button used at the top of /business (anchor-scroll to #ready) */
.biz-button {
	display: inline-block;
	background: #FF9500;
	color: #000;
	border-radius: 999px;
	padding: 16px 36px;
	font-family: "proxima-nova", sans-serif;
	font-weight: 900;
	font-size: 18px;
	text-transform: uppercase;
	cursor: pointer;
	transition: transform 0.2s ease, background 0.2s ease;
}
.biz-button:hover { background: #ffb84d; transform: scale(1.04); }
.biz-button p { margin: 0; }

/* .inflation-box is already styled; this gives the h2-section inside it a boost */
.inflation-box .h2-section,
.inflation-box h3.h2-section {
	font-family: "proxima-nova", sans-serif;
	font-weight: 700;
	font-size: 22px;
	color: #FF9500;
	margin: 0 0 12px 0;
}

/* Wallet card tiles (business/wallets) */
.vs-container {
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	margin: 16px 0;
	justify-content: center;
}
.wallet-box-biz {
	flex: 1 1 280px;
	max-width: 320px;
	background: #090814;
	border-radius: 10px;
	padding: 20px;
	color: #fff;
}
.wallet-box-biz img.device {
	max-width: 180px;
	height: auto;
	margin: 0 auto;
	display: block;
}
.wallet-box-biz p {
	font-size: 14px;
	line-height: 1.5;
	color: #ccc;
}
.wallet-box-biz .h3-label {
	text-align: center;
	margin: 12px 0 8px 0;
	font-size: 20px;
	color: #FF9500;
	font-family: "proxima-nova", sans-serif;
	font-weight: 700;
}
.wallet-biz-1, .wallet-biz-2 { flex: 1 1 280px; }

/* Wallet accordion h2 used on /business/wallets */
.h2-category {
	font-family: "proxima-nova", sans-serif;
	font-weight: 700;
	font-size: 22px;
	color: #FF9500;
	margin: 0;
	text-transform: lowercase;
}

/* Sticker / kit / maps success h2 */
.h2-stickers {
	font-family: "proxima-nova", sans-serif;
	font-weight: 700;
	font-size: 22px;
	color: #fff;
	line-height: 1.4;
	margin: 0;
}

/* home-intro variant — full-width text-box used at top of /business/wallets */
.home-intro {
	background: transparent;
	margin: 0 auto;
	padding: 20px 0;
}

/* .step-container — small step indicator (used by some sticker pages) */
.step-container {
	text-align: center;
	margin: 8px 0 16px 0;
}
`;

function main() {
	let src = fs.readFileSync(GLOBALS, "utf8");
	if (src.includes(SENTINEL)) {
		console.log("  [globals.css] Phase 10 block already present — skipping");
		return;
	}

	// Append block + trailing newline
	const out = src + (src.endsWith("\n") ? "" : "\n") + "\n" + CSS_BLOCK + "\n";
	fs.writeFileSync(GLOBALS, out);
	console.log(`  [globals.css] appended ${CSS_BLOCK.split("\n").length} lines of Phase 10 CSS`);
}

main();
