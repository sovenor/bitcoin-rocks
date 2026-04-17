#!/usr/bin/env node
/**
 * Phase 9b: append sticker/sign/postcard/buy form CSS to `app/globals.css`.
 *
 * Idempotent — the sentinel marker below is checked before appending. Ported
 * verbatim from `css/style.css` with tabs preserved. This covers every class
 * referenced by the new form pages and their success pages:
 *   - `.choose-sticker` + `#first-sticker`/`#second-sticker` tile grid
 *   - `.sticker-box`, `.h2-stickers`, `.h2-inflation`
 *   - `input`, `select`, `.button-form`, `.button-sticker`
 *   - `.back-to-home`, `.wallet-h3`, `.inline`, `.sign-adjust`
 *   - `.break-no-title`, `.postcard-divider`
 *   - `.buy-country-button`, `.country-search-input`, `.container-buy-button`
 *   - `.step-container`, `.payment-method-option` + `-button` + `-alerts`
 *   - `.buy-platform-box` + `.recommended-badge` + `.platform-features` +
 *     `.platform-learn-button` + `.buy-cta-button`
 *   - `.fixed-bottom-bar*` (used on `sticker-success`)
 *   - `.h3-label`
 *
 * Run once:
 *   node scripts/phase9b/append-form-css.js
 */

const fs = require("fs");
const path = require("path");

const GLOBALS = path.join(__dirname, "..", "..", "app", "globals.css");
const SENTINEL = "/* ==== PHASE 9B BUCKET B FORM CSS ==== */";

const CSS = `
${SENTINEL}
/* Form-page CSS ported verbatim from css/style.css for Phase 9b.
   Kept in one block so it can be removed cleanly when the forms get V2
   redesigned post-cutover. */

/* Basic form inputs (stickers + signs) */
input[type=email],
input[type=text],
input[type=url]{
	padding: 12px;
	margin: 0;
	margin-top: 5px;
	margin-bottom: 5px;
	border: 1px solid #3f3f3f;
	background: transparent;
	color: #fff;
	font-family: proxima-nova, sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 16px;
	width: 300px;
	outline: none;
	max-width: 100%;
	box-sizing: border-box;
	border-radius: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
}
input[type=email]:focus,
input[type=text]:focus,
input[type=url]:focus{
	border: 1px solid #FF9500;
}

select{
	padding: 12px;
	margin-top: 5px;
	margin-bottom: 5px;
	border: 1px solid #3f3f3f;
	background: transparent;
	color: #fff;
	font-family: proxima-nova, sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 16px;
	width: 300px;
	max-width: 100%;
	outline: none;
	box-sizing: border-box;
	border-radius: 0;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path fill='%23FF9500' d='M6 8L0 0h12z'/></svg>");
	background-repeat: no-repeat;
	background-position: right 12px center;
	padding-right: 32px;
}
select option{
	background-color: #060610;
	color: #fff;
}

/* Shared .back-to-home logo link at the top of form pages. */
.back-to-home{
	max-width: 180px;
	height: auto;
	margin-top: 40px;
	margin-bottom: 20px;
	opacity: 0.8;
	transition: all 0.25s ease-in-out;
}
.back-to-home:hover{
	opacity: 1;
}

.wallet-h3{
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 28px;
	color: #FF9500;
	text-transform: uppercase;
	letter-spacing: 1px;
	text-align: center;
	margin-top: 20px;
	margin-bottom: 20px;
}

.h2-inflation,
.h1-inflation{
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 38px;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 0;
	padding: 0;
	color: #fff;
}
.h1-inflation.force-orange,
.h2-inflation.force-orange{
	color: #FF9500 !important;
}
.force-orange{
	color: #FF9500 !important;
}

.h2-stickers{
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 60px;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin: 40px 0 20px 0;
	color: #fff;
}
.h2-stickers .inflation{
	color: #FF9500;
}

.h3-label{
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 20px;
	text-transform: uppercase;
	letter-spacing: 1px;
	color: #FF9500;
	margin: 0 0 10px 0;
}

.break-no-title{
	height: 20px;
}

.inline{
	max-width: 100%;
	height: auto;
	display: block;
	margin: 20px auto;
}
.sign-adjust{
	margin-top: -40px;
}

.postcard-divider{
	height: 1px;
	background: #3f3f3f;
	margin: 30px auto;
	max-width: 80%;
}

/* Sticker page specifics */
.sticker-box{
	padding-top: 40px;
	padding-bottom: 40px;
}
.sticker-box p{
	color: #ccc;
	font-family: proxima-nova, sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 16px;
	line-height: 1.5;
}
.sticker-box .step{
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 20px;
	color: #FF9500;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 0;
}

.choose-sticker{
	border: 1px solid #3f3f3f;
	padding: 20px;
	margin: 30px auto;
	max-width: 400px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	text-align: center;
}
.choose-sticker:hover{
	border: 1px solid #FF9500;
}
.choose-sticker img{
	max-width: 100%;
	height: auto;
	margin: 0 auto;
}
.choose-sticker p{
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 20px;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 10px 0 0 0;
}

/* Country-form hide/show */
.countries[hidden]{
	display: none !important;
}

.button-form{
	background: #FF9500;
	border: none;
	padding: 0;
	margin: 20px auto 0 auto;
	cursor: pointer;
	display: block;
	transition: all 0.25s ease-in-out;
	max-width: 100%;
}
.button-form:hover{
	background: #ffb84d;
}
.button-form p{
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 18px;
	color: #060610;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 15px 40px;
	margin: 0;
}

.button-sticker{
	background: transparent;
	border: 1px solid #3f3f3f;
	padding: 10px 20px;
	margin: 5px;
	display: inline-block;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
}
.button-sticker:hover{
	border: 1px solid #FF9500;
}
.button-sticker p{
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 14px;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 0;
}

/* Buy flow */
.step-container{
	margin-bottom: 20px;
}

.country-search-input{
	display: block;
	margin: 0 auto 20px auto;
	max-width: 400px;
	width: 100%;
}
.country-search-input::placeholder{
	color: #777;
	opacity: 1;
}

.container-buy-button{
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	justify-content: center;
	padding: 10px 0;
}

.buy-country-button{
	background: transparent;
	border: 1px solid #3f3f3f;
	color: #fff;
	font-family: proxima-nova, sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 14px;
	padding: 10px 16px;
	cursor: pointer;
	transition: all 0.25s ease-in-out;
	display: inline-flex;
	align-items: center;
	gap: 6px;
}
.buy-country-button:hover{
	border: 1px solid #FF9500;
	color: #FF9500;
}
.buy-country-button.selected{
	border: 1px solid #FF9500;
	color: #FF9500;
}
.flag-icon{
	font-size: 18px;
	line-height: 1;
}

.payment-method-option{
	border: 1px solid #3f3f3f;
	padding: 24px;
	margin: 20px 0;
}
.payment-method-option h6,
.payment-method-option .h3-label{
	margin-top: 0;
}
.payment-method-alerts{
	display: flex;
	gap: 10px;
	margin: 10px 0;
	flex-wrap: wrap;
}
.payment-method-button{
	background: transparent;
	border: 1px solid #FF9500;
	color: #FF9500;
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 16px;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 12px 32px;
	margin-top: 15px;
	cursor: pointer;
	display: inline-block;
	transition: all 0.25s ease-in-out;
}
.payment-method-button:hover{
	background: #FF9500;
	color: #060610;
}
.payment-method-button.selected{
	background: #FF9500;
	color: #060610;
}

.buy-platform-box{
	border: 1px solid #3f3f3f;
	padding: 24px;
	margin: 20px 0;
	position: relative;
	transition: all 0.25s ease-in-out;
}
.buy-platform-box h6,
.buy-platform-box .h3-label{
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 24px;
	color: #fff;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 0 0 10px 0;
}
.buy-platform-box:hover{
	border: 1px solid #FF9500;
}
.buy-platform-box.platform-recommended{
	border: 1px solid #FF9500;
}
.buy-platform-box .recommended-badge{
	position: absolute;
	top: -10px;
	left: 24px;
	background: #FF9500;
	color: #060610;
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 12px;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 3px 10px;
}
.buy-platform-box .recommended-badge:before{
	content: "★ RECOMMENDED";
}
.platform-features{
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	margin: 15px 0;
}
.platform-features div{
	background: #222;
	padding: 4px 10px;
	font-size: 12px;
	color: #ccc;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}
.platform-learn-button{
	background: transparent;
	border: 1px solid #FF9500;
	color: #FF9500;
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 14px;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 10px 24px;
	margin-top: 10px;
	cursor: pointer;
	display: inline-block;
	transition: all 0.25s ease-in-out;
}
.platform-learn-button:hover{
	background: #FF9500;
	color: #060610;
}

.buy-cta-button{
	background: #FF9500;
	color: #060610;
	font-family: proxima-nova, sans-serif;
	font-weight: 700;
	font-style: normal;
	font-size: 18px;
	text-transform: uppercase;
	letter-spacing: 1px;
	padding: 15px 40px;
	cursor: pointer;
	display: inline-block;
	transition: all 0.25s ease-in-out;
}
.buy-cta-button:hover{
	background: #ffb84d;
}

/* Fixed-bottom promo bar on sticker-success */
.fixed-bottom-bar{
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #060610;
	border-top: 1px solid #FF9500;
	padding: 12px 16px;
	text-align: center;
	z-index: 100;
}
.fixed-bottom-bar-content{
	max-width: 700px;
	margin: 0 auto;
}
.fixed-bottom-bar-text{
	font-family: proxima-nova, sans-serif;
	font-weight: 400;
	font-style: normal;
	font-size: 16px;
	color: #fff;
}
.fixed-bottom-bar-new{
	background: #FF9500;
	color: #060610;
	font-weight: 700;
	padding: 2px 8px;
	margin-right: 8px;
	text-transform: uppercase;
	letter-spacing: 0.5px;
	font-size: 12px;
}
.fixed-bottom-bar-link{
	color: #FF9500;
	text-decoration: none;
}
.fixed-bottom-bar-link:hover{
	color: #ffb84d;
	text-decoration: underline;
}
/* ==== END PHASE 9B BUCKET B FORM CSS ==== */
`;

function main() {
	const existing = fs.readFileSync(GLOBALS, "utf8");
	if (existing.includes(SENTINEL)) {
		console.log("✓ Phase 9b CSS already present — no changes.");
		return;
	}
	fs.writeFileSync(GLOBALS, existing + "\n" + CSS);
	console.log("✓ Appended Phase 9b form CSS to app/globals.css");
}

main();
