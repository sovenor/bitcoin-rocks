#!/usr/bin/env node
/**
 * Phase 7a — append V2 comparison-page CSS to app/globals.css.
 *
 * Idempotent: checks for a sentinel marker and no-ops on a second run.
 * Writes the CSS block using Node's fs API (no shell escape headaches).
 */

const fs = require("node:fs");
const path = require("node:path");

const GLOBALS = path.join(__dirname, "..", "app", "globals.css");
const MARKER = "/* ─── Phase 7a — comparison pages (bitcoin-vs-*, bank-runs) ─── */";

const BLOCK = `
${MARKER}

/*
 * Hero / intro spacing — comparison pages use shorter hero spacing than
 * the inflation page since there's no country picker between hero + content.
 */
.comparison-hero {
	padding-top: 20px;
	padding-bottom: 10px;
}
.comparison-hero .comparison-h1 {
	text-align: center;
	line-height: 1.15;
}
.comparison-hero .comparison-h1 .orange {
	color: #ff9500;
}
/*
 * The asset word (GOLD / STOCKS / CASH) reads its color from a CSS
 * custom property set per page on the parent container. Falls back to
 * the Bitcoin orange if --asset-accent is unset for whatever reason.
 */
.comparison-hero .comparison-h1 .asset {
	color: var(--asset-accent, #ff9500);
}

.comparison-intro {
	padding-top: 10px;
	padding-bottom: 30px;
}
.comparison-intro .inflation-intro {
	text-align: center;
	margin-bottom: 16px;
}
.comparison-intro .inflation-intro:last-child {
	margin-bottom: 0;
}

/*
 * One comparison point = a row with two side-by-side chips (Bitcoin + asset)
 * stacked above an explanation paragraph. Chips sit on the dark background
 * with a subtle 1px border + the Bitcoin-orange/asset-accent label color.
 */
.comparison-point {
	padding-top: 30px;
	padding-bottom: 30px;
	border-top: 1px solid #1a1a24;
}
.comparison-point:first-of-type {
	border-top: none;
}

.comparison-chips {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	margin-bottom: 24px;
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
}
@media (max-width: 700px) {
	.comparison-chips {
		grid-template-columns: 1fr;
		gap: 12px;
	}
}

.comparison-chip {
	background: #090814;
	border: 1px solid #1a1a24;
	border-radius: 14px;
	padding: 20px 24px;
	text-align: center;
}
.comparison-chip-label {
	font-family: "proxima-nova", sans-serif;
	font-weight: 600;
	font-size: 13px;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	margin-bottom: 8px;
}
.comparison-chip-bitcoin .comparison-chip-label {
	color: #ff9500;
}
.comparison-chip-asset .comparison-chip-label {
	color: var(--asset-accent, #ff9500);
}
.comparison-chip-value {
	font-family: "proxima-nova", sans-serif;
	font-weight: 400;
	font-size: 20px;
	line-height: 28px;
	color: #fff;
}

/*
 * Explanation prose — matches the .inflation-section p body-text treatment:
 * 16-18px, #ccc text, orange-underlined inline links via .body-link.
 */
.comparison-explain {
	max-width: 800px;
	margin: 0 auto;
}
.comparison-explain p {
	font-family: "proxima-nova", sans-serif;
	font-weight: 400;
	font-size: 17px;
	line-height: 28px;
	color: #ccc;
	margin-bottom: 16px;
}
.comparison-explain p:last-child {
	margin-bottom: 0;
}
.comparison-explain a.body-link,
.comparison-explain a.orange-link {
	color: #ff9500;
	text-decoration: underline;
	text-underline-offset: 3px;
}
.comparison-explain a.body-link:hover,
.comparison-explain a.orange-link:hover {
	color: #ffb84d;
}

/*
 * The "What's next?" grid on a comparison page shares styling with the
 * homepage + inflation page — the only tweak is adding a comfortable top
 * margin so it doesn't collide with the final comparison point.
 */
.comparison-whats-next {
	margin-top: 40px;
}
`;

function main() {
	const current = fs.readFileSync(GLOBALS, "utf8");
	if (current.includes(MARKER)) {
		console.log("✔ Phase 7a CSS already present — no changes made.");
		return;
	}
	const next = current.trimEnd() + "\n" + BLOCK;
	fs.writeFileSync(GLOBALS, next, "utf8");
	console.log(`✔ Appended Phase 7a comparison CSS to ${path.relative(process.cwd(), GLOBALS)}`);
}

main();
