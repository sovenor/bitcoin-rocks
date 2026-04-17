#!/usr/bin/env node
/**
 * Phase 9a — Append V1 "Bucket B" legacy CSS to app/globals.css.
 *
 * Idempotent: detects a sentinel marker and skips on re-run.
 *
 * What this appends: the classes `wallets.html`, `lightning.html`,
 * `flyers.html`, and `compound-inflation-calculator.html` depend on —
 * ported verbatim from `css/style.css` with tabs preserved so the file
 * matches the existing globals.css tab indent style.
 */

const fs = require("fs");
const path = require("path");

const GLOBALS = path.join(__dirname, "..", "..", "app", "globals.css");
const SENTINEL = "/* === Phase 9a — Bucket B legacy V1 styles === */";

const css = fs.readFileSync(GLOBALS, "utf8");
if (css.includes(SENTINEL)) {
	console.log("Phase 9a CSS already present — skipping.");
	process.exit(0);
}

const APPEND = `

${SENTINEL}
/*
 * Faithful port of the V1 layout building blocks used by /wallets,
 * /lightning, /flyers, and /compound-inflation-calculator. These are
 * Bucket B pages; V2 redesign is deferred to post-cutover. The CSS is
 * a 1:1 copy of the relevant blocks from css/style.css, tabs + all.
 */

/* ── V1 break utilities ─────────────────────────────────────── */
.break {
	clear: both;
	margin-top: 100px;
}
.break-mini {
	clear: both;
	margin-top: 80px;
}
.break-no-title {
	clear: both;
	margin-top: 50px;
}
.break-zero {
	clear: both;
}
.break-spacer {
	clear: both;
	margin-top: 5px;
}
.break-wallet {
	clear: both;
	margin-top: 110px;
}
.break-flyer {
	clear: both;
	margin-top: 300px;
}
.break-tiny-compound {
	clear: both;
	margin-top: 10px;
}
.clear {
	clear: both;
}

/* ── V1 .text-box cards ─────────────────────────────────────── */
.text-box {
	margin: 0 auto;
	margin-left: 2.5%;
	margin-right: 2.5%;
	width: 95%;
	height: auto;
	border-top: 1px solid #3f3f3f;
	border-right: 1px solid #3f3f3f;
	border-left: 1px solid #3f3f3f;
	background-color: #090814;
	border-radius: 20px;
	transition-property: border-bottom, transform;
	transition-duration: 0s, 0.2s;
}
.text-box:hover {
	transform: scale(1.05);
}
.intro {
	border-bottom: 1px solid #3f3f3f;
	padding-bottom: 25px;
}
.intro:hover,
.home-intro:hover {
	transform: scale(1) !important;
}
.home-intro {
	background-color: #060610;
	border: none !important;
}
.intro p,
.home-intro p,
.text-box li {
	font-family: "proxima-nova", sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 20px;
	padding-top: 0px;
	padding-bottom: 0px;
	line-height: 25px;
	color: #f0f0f0;
}
.top {
	border-bottom-left-radius: 0px !important;
	border-bottom-right-radius: 0px !important;
}
.top:hover {
	border-bottom: 1px solid #3f3f3f;
}
.middle {
	border-radius: 0px !important;
}
.middle:hover {
	border-bottom: 1px solid #3f3f3f;
}
.bottom {
	border-bottom: 1px solid #3f3f3f;
	border-top-left-radius: 0px !important;
	border-top-right-radius: 0px !important;
}
.solo {
	border-bottom: 1px solid #686867;
}
.item {
	margin-top: 50px;
}
.first {
	margin: inherit !important;
}
.type {
	font-family: "proxima-nova", sans-serif;
	font-weight: 300;
	font-style: normal;
	font-size: 15px;
	position: relative;
	float: left;
	border: 1px solid #686867;
	color: #686867;
	padding: 3px 10px;
	border-radius: 5px;
	margin-top: 10px;
}
.author {
	font-family: "proxima-nova", sans-serif;
	font-weight: 300;
	font-style: italic;
	font-size: 15px;
	color: #686867;
	line-height: 50px;
	margin-left: 10px;
	position: relative;
	float: left;
	margin-bottom: 40px;
}

/* ── V1 headings + helpers ──────────────────────────────────── */
.h2-section,
.wallet-h3 {
	font-family: "proxima-nova-condensed", sans-serif;
	font-weight: 900;
	font-style: italic;
	color: #f0f0f0;
	font-size: 60px;
	line-height: 55px;
	margin: 50px 0 30px 0;
	text-align: center;
	text-transform: uppercase;
}
.h3-item {
	font-family: "proxima-soft", sans-serif;
	font-weight: 900;
	color: #f0f0f0;
	font-size: 32px;
	line-height: 32px;
	margin: 0 0 8px 0;
	text-transform: uppercase;
}
.h2-label {
	font-family: "proxima-soft", sans-serif;
	font-weight: 900;
	color: #f0f0f0;
	font-size: 35px;
	line-height: 35px;
	margin: 10px 0 20px 0;
	text-align: center;
	text-transform: uppercase;
}
.h2-section.second-line,
h2.second-line,
h3.second-line {
	margin-top: -25px !important;
}
.h1-inflation,
.h2-inflation {
	font-family: proxima-nova, sans-serif;
	font-weight: 900;
	font-style: italic;
	font-size: 40px;
	line-height: 40px;
	margin-bottom: 50px !important;
	text-align: center;
	text-transform: uppercase;
	color: #f0f0f0;
}
.force-orange {
	color: #ff9500 !important;
}
span.orange {
	color: #ff9500 !important;
}
a.orange-link {
	color: #ff9500 !important;
	text-decoration: underline;
	cursor: pointer !important;
}
a.orange-link:hover {
	color: #ffb84d;
}
.wallet-h3 {
	text-align: center !important;
}

/* ── Back-to-home image (kept for visual parity with legacy) ── */
.back-to-home {
	width: 120px;
	height: auto;
	margin-top: 40px;
	transition-duration: 0.3s;
}
.back-to-home:hover {
	transform: scale(1.05);
}

/* ── COMPOUND INFLATION CALCULATOR form ─────────────────────── */
.compound-form {
	max-width: 100%;
	position: relative;
	margin: 0 auto;
}
.compound-form input {
	width: 98%;
	max-width: 100%;
	height: 40px;
	margin-bottom: 5px;
	border: none !important;
	padding: 0px 0px 0px 7px;
	border-radius: 5px;
	font-size: 21px;
	color: #000000;
	background-color: #f0f0f0;
}
.compound-form input::placeholder {
	font-family: "proxima-soft", sans-serif;
	font-weight: 400;
	font-size: 21px;
	color: #000000;
	padding: 0px 0px 0px 7px;
}
input.compound {
	height: 70px;
	border-radius: 5px;
}
.form-box {
	width: 32%;
	position: relative;
	float: left;
	margin-bottom: 20px;
}
.middle-form-box {
	margin-left: 2%;
	margin-right: 2%;
}
.last-form-box {
	float: right !important;
}
label.compound-label,
.compound-label {
	display: block;
	font-family: "proxima-soft", sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 20px;
	color: #f0f0f0;
	margin-bottom: 10px !important;
	text-transform: capitalize;
}
.cic-button {
	width: 100%;
	height: 80px;
	background-color: #ff9500;
	position: relative;
	top: 10px;
	transition-duration: 0.3s;
	border: none !important;
	margin-bottom: 30px;
	padding: 0 !important;
	border-radius: 5px;
	font-family: "proxima-soft", sans-serif;
	font-weight: 900;
	font-style: italic;
	font-size: 30px;
	line-height: 25px;
	text-align: center;
	color: #f0f0f0;
	outline: none !important;
	cursor: pointer;
}
.cic-button:hover {
	transform: scale(1.05);
}
@media (max-width: 700px) {
	.form-box {
		width: 100% !important;
	}
	.middle-form-box {
		margin: 0 !important;
	}
	.last-form-box {
		margin-top: 20px;
	}
}
#result {
	color: #f0f0f0;
	font-family: "proxima-soft", sans-serif;
	font-weight: 400;
	font-size: 20px;
	margin-top: 0px;
	margin-bottom: 20px;
}

/* ── WALLETS + LIGHTNING accordion + cards ──────────────────── */
.wallet-q {
	margin-top: 0px !important;
	margin-bottom: 20px;
	font-family: "proxima-soft", sans-serif;
	font-weight: 900;
	font-style: italic;
	font-size: 24px;
	line-height: 26px;
	text-transform: uppercase;
	color: #f0f0f0;
	background-color: #ff9500;
	border-radius: 50px;
	padding: 16px 25px !important;
	cursor: pointer;
	user-select: none;
	transition: transform 0.2s, opacity 0.2s;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.wallet-q:hover {
	transform: scale(1.02);
	opacity: 0.95;
}
.wallet-q .accordion-arrow {
	display: inline-block;
	font-style: normal;
	font-size: 18px;
	margin-left: 15px;
	transition: transform 0.3s ease;
	flex-shrink: 0;
}
.wallet-q.active .accordion-arrow {
	transform: rotate(180deg);
}
.wallet-q .orange {
	color: #f0f0f0 !important;
}
.wallet-accordion-content {
	max-height: 0;
	overflow: hidden;
	transition: max-height 0.4s ease;
}
.wallet-accordion-content.open {
	max-height: 4000px;
}
.wallet-accordion-content p {
	font-family: "proxima-nova", sans-serif;
	font-weight: 400;
	font-size: 20px;
	line-height: 25px;
	color: #f0f0f0;
}

/* ── Alert chips (self-custody / hot / cold / not your keys) ── */
.alert {
	display: inline-flex;
	align-items: center;
	border-radius: 50px;
	height: 50px;
}
.alert.green {
	background-color: #31b44a;
}
.alert.yellow {
	background-color: #f5a623;
}
.alert.red {
	background-color: #ee3224;
}
.alert img {
	height: 40px;
	width: auto;
	margin-right: 10px;
	margin-left: 5px;
}
.alert p {
	font-family: "proxima-soft", sans-serif;
	font-weight: 900;
	font-size: 18px;
	text-transform: uppercase !important;
	color: #f0f0f0;
	margin: 0 15px 0 0 !important;
	padding: 0 !important;
}

/* ── Wallet cards (grid of 2 per row on desktop) ─────────────── */
.vs-container {
	display: block;
}
.wallet-box {
	margin: 0 auto;
	margin-top: 250px;
	margin-left: 2.5%;
	margin-right: 2.5%;
	width: 44.5%;
	height: auto;
	border: 1px solid #3f3f3f;
	background-color: #090814;
	border-radius: 20px;
	transition-property: border-bottom, transform;
	transition-duration: 0s, 0.2s;
	position: relative;
	float: left;
}
.wallet-box img.device {
	width: 80%;
	height: auto;
	margin-top: -300px;
}
.wallet-box p {
	font-family: "proxima-nova", sans-serif;
	font-weight: 400;
	font-size: 20px;
	padding-top: 0px;
	padding-bottom: 25px;
	line-height: 25px;
	color: #f0f0f0;
	margin-top: -60px;
	text-align: center;
}
.wallet-box h6,
.wallet-box .h2-label {
	margin-top: 10px !important;
	margin-bottom: 20px !important;
	font-size: 35px !important;
}
.wallet-button {
	width: 100%;
	background-color: #ff9500;
	height: 60px;
	border-radius: 10px;
	font-family: "proxima-soft", sans-serif;
	font-weight: 900;
	font-style: italic;
	color: #f0f0f0;
	font-size: 28px;
	text-align: center;
	margin-top: -25px;
	margin-bottom: 25px;
	line-height: 58px;
	transition-duration: 0.3s;
	text-transform: uppercase;
	cursor: pointer !important;
}
.wallet-button:hover {
	transform: scale(1.05);
}
@media (max-width: 700px) {
	.wallet-box {
		width: 95% !important;
	}
	.wallet2 {
		margin-top: 350px !important;
	}
	.wallet-button {
		margin-bottom: 45px !important;
	}
}
.looking-box {
	cursor: pointer;
}
p.looking {
	text-align: center;
	font-weight: 700;
	font-family: "proxima-nova", sans-serif;
	font-size: 20px;
	line-height: 50px;
	margin-bottom: 0px !important;
	color: #f0f0f0;
}
.inflation-box p {
	padding-top: 0px !important;
}

/* ── Flyers: bounty button + step header ────────────────────── */
.bounty-button {
	width: 100%;
	background-color: #ff9500;
	height: 80px;
	border-radius: 10px;
	font-family: "proxima-soft", sans-serif;
	font-weight: 900;
	font-style: italic;
	color: #f0f0f0;
	font-size: 30px;
	text-align: center;
	margin-top: -25px;
	margin-bottom: 40px;
	line-height: 75px;
	transition-duration: 0.3s;
	text-transform: uppercase;
	cursor: pointer;
}
.bounty-button:hover {
	transform: scale(1.05);
}
p.step {
	margin-top: 45px;
	margin-bottom: -20px;
	font-family: "proxima-soft", sans-serif;
	font-weight: 900;
	font-style: italic;
	font-size: 30px;
	line-height: 30px;
	text-transform: uppercase;
	color: #f0f0f0;
	text-align: center;
}
.sticker-box {
	margin-top: -55px;
}
.sticker-box p {
	padding-top: 0px !important;
	text-align: center;
	color: #f0f0f0;
}
img.inline {
	width: 100%;
}

/* ── Publisher attribution + sources (shared with other pages) ─ */
/* These already exist in the Phase 4 / 6a sections above, but
   V1 pages reference slightly different variants. No duplicates
   here — the inherited rules cover it. */

/* End of Phase 9a legacy CSS ----------------------------------- */
`;

fs.writeFileSync(GLOBALS, css.trimEnd() + APPEND);
console.log(`Appended ~${APPEND.split("\n").length} lines of Phase 9a CSS to app/globals.css`);
