#!/usr/bin/env node
/**
 * Punjabi manifest refresh — inflation namespace translator.
 *
 * Punjabi conventions:
 * - Gurmukhi script.
 * - Polite 2nd-person "ਤੁਸੀਂ" — universal register for Punjabi
 *   educational content (BBC Punjabi, Punjab Tribune, Jagbani all use
 *   ਤੁਸੀਂ; informal ਤੂੰ would feel disrespectful in finance copy).
 * - Western digits (0-9) — universal in modern Punjabi financial press.
 * - "Bitcoin" → "ਬਿਟਕੌਇਨ" (Gurmukhi transliteration; standard).
 * - Numeric format: comma thousand separator, period decimal —
 *   English convention used by the rendered dataset values.
 * - "million" → "ਮਿਲੀਅਨ", "billion" → "ਬਿਲੀਅਨ", "trillion" → "ਟ੍ਰਿਲੀਅਨ".
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"pa.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		inPhrase: "ਅਮਰੀਕੀ ਡਾਲਰਾਂ ਵਿੱਚ",
		noun: "ਡਾਲਰ",
		nounPlural: "ਡਾਲਰ",
		label: "ਅਮਰੀਕੀ ਡਾਲਰ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਅਮਰੀਕੀ ਡਾਲਰ",
		debtTitle: "ਅਮਰੀਕੀ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	eur: {
		inPhrase: "ਯੂਰੋ ਵਿੱਚ",
		noun: "ਯੂਰੋ",
		nounPlural: "ਯੂਰੋ",
		label: "ਯੂਰੋ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਯੂਰੋ",
		debtTitle: "ਯੂਰੋਜ਼ੋਨ ਸਰਕਾਰਾਂ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	aud: {
		inPhrase: "ਆਸਟ੍ਰੇਲੀਆਈ ਡਾਲਰਾਂ ਵਿੱਚ",
		noun: "ਆਸਟ੍ਰੇਲੀਆਈ ਡਾਲਰ",
		nounPlural: "ਆਸਟ੍ਰੇਲੀਆਈ ਡਾਲਰ",
		label: "ਆਸਟ੍ਰੇਲੀਆਈ ਡਾਲਰ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਆਸਟ੍ਰੇਲੀਆਈ ਡਾਲਰ",
		debtTitle: "ਆਸਟ੍ਰੇਲੀਆਈ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	brl: {
		inPhrase: "ਬ੍ਰਾਜ਼ੀਲੀ ਰਿਆਲਾਂ ਵਿੱਚ",
		noun: "ਰਿਆਲ",
		nounPlural: "ਰਿਆਲ",
		label: "ਬ੍ਰਾਜ਼ੀਲੀ ਰਿਆਲ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਬ੍ਰਾਜ਼ੀਲੀ ਰਿਆਲ",
		debtTitle: "ਬ੍ਰਾਜ਼ੀਲ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	cad: {
		inPhrase: "ਕੈਨੇਡੀਅਨ ਡਾਲਰਾਂ ਵਿੱਚ",
		noun: "ਕੈਨੇਡੀਅਨ ਡਾਲਰ",
		nounPlural: "ਕੈਨੇਡੀਅਨ ਡਾਲਰ",
		label: "ਕੈਨੇਡੀਅਨ ਡਾਲਰ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਕੈਨੇਡੀਅਨ ਡਾਲਰ",
		debtTitle: "ਕੈਨੇਡਾ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	gbp: {
		inPhrase: "ਬ੍ਰਿਟਿਸ਼ ਪਾਊਂਡਾਂ ਵਿੱਚ",
		noun: "ਪਾਊਂਡ",
		nounPlural: "ਪਾਊਂਡ",
		label: "ਬ੍ਰਿਟਿਸ਼ ਪਾਊਂਡ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਬ੍ਰਿਟਿਸ਼ ਪਾਊਂਡ",
		debtTitle: "ਬ੍ਰਿਟਿਸ਼ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	ils: {
		inPhrase: "ਇਜ਼ਰਾਈਲੀ ਸ਼ੇਕੇਲਾਂ ਵਿੱਚ",
		noun: "ਸ਼ੇਕੇਲ",
		nounPlural: "ਸ਼ੇਕੇਲ",
		label: "ਇਜ਼ਰਾਈਲੀ ਸ਼ੇਕੇਲ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਇਜ਼ਰਾਈਲੀ ਸ਼ੇਕੇਲ",
		debtTitle: "ਇਜ਼ਰਾਈਲ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	inr: {
		inPhrase: "ਭਾਰਤੀ ਰੁਪਇਆਂ ਵਿੱਚ",
		noun: "ਰੁਪਇਆ",
		nounPlural: "ਰੁਪਏ",
		label: "ਭਾਰਤੀ ਰੁਪਇਆ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਭਾਰਤੀ ਰੁਪਏ",
		debtTitle: "ਭਾਰਤ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	jpy: {
		inPhrase: "ਜਾਪਾਨੀ ਯੇਨਾਂ ਵਿੱਚ",
		noun: "ਯੇਨ",
		nounPlural: "ਯੇਨ",
		label: "ਜਾਪਾਨੀ ਯੇਨ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਜਾਪਾਨੀ ਯੇਨ",
		debtTitle: "ਜਾਪਾਨ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	mxn: {
		inPhrase: "ਮੈਕਸੀਕਨ ਪੇਸੋ ਵਿੱਚ",
		noun: "ਪੇਸੋ",
		nounPlural: "ਪੇਸੋ",
		label: "ਮੈਕਸੀਕਨ ਪੇਸੋ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਮੈਕਸੀਕਨ ਪੇਸੋ",
		debtTitle: "ਮੈਕਸੀਕੋ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	nzd: {
		inPhrase: "ਨਿਊਜ਼ੀਲੈਂਡ ਡਾਲਰਾਂ ਵਿੱਚ",
		noun: "ਨਿਊਜ਼ੀਲੈਂਡ ਡਾਲਰ",
		nounPlural: "ਨਿਊਜ਼ੀਲੈਂਡ ਡਾਲਰ",
		label: "ਨਿਊਜ਼ੀਲੈਂਡ ਡਾਲਰ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਨਿਊਜ਼ੀਲੈਂਡ ਡਾਲਰ",
		debtTitle: "ਨਿਊਜ਼ੀਲੈਂਡ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	php: {
		inPhrase: "ਫਿਲੀਪੀਨ ਪੇਸੋ ਵਿੱਚ",
		noun: "ਪੇਸੋ",
		nounPlural: "ਪੇਸੋ",
		label: "ਫਿਲੀਪੀਨ ਪੇਸੋ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਫਿਲੀਪੀਨ ਪੇਸੋ",
		debtTitle: "ਫਿਲੀਪੀਨਜ਼ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
	thb: {
		inPhrase: "ਥਾਈ ਬਾਟਾਂ ਵਿੱਚ",
		noun: "ਬਾਟ",
		nounPlural: "ਬਾਟ",
		label: "ਥਾਈ ਬਾਟ",
		existenceTitle: "ਪ੍ਰਚਲਨ ਵਿੱਚ ਥਾਈ ਬਾਟ",
		debtTitle: "ਥਾਈਲੈਂਡ ਸਰਕਾਰ ਦਾ ਕੁੱਲ ਕਰਜ਼ਾ",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `ਜੇ ਤੁਸੀਂ ${c.inPhrase} ਬੱਚਤ ਕਰਦੇ ਹੋ, ਤਾਂ ਸ਼ਾਇਦ ਤੁਸੀਂ ਦੇਖਿਆ ਹੋਵੇਗਾ ਕਿ ਤੁਹਾਡਾ ਪੈਸਾ ਘੱਟ ਚੀਜ਼ਾਂ ਖ਼ਰੀਦ ਪਾਉਂਦਾ ਹੈ। ਉਹੀ ਸਮਾਨ ਖ਼ਰੀਦਣ ਲਈ ਤੁਹਾਨੂੰ ਜ਼ਿਆਦਾ ${c.nounPlural} ਚਾਹੀਦੇ ਹਨ। ਉਸੇ ਜੀਵਨ ਪੱਧਰ ਨੂੰ ਬਣਾਈ ਰੱਖਣ ਲਈ ਤੁਹਾਨੂੰ ਜ਼ਿਆਦਾ ${c.nounPlural} ਚਾਹੀਦੇ ਹਨ।`;
		case "intro_2":
			return `ਪਰ ਅਜਿਹਾ ਹੋਣਾ ਜ਼ਰੂਰੀ ਨਹੀਂ ਹੈ।`;
		case "intro_highlight":
			return `ਪਿਛਲੇ 4 ਸਾਲਾਂ ਵਿੱਚ ਜਿਨ੍ਹਾਂ ਲੋਕਾਂ ਨੇ ਬਿਟਕੌਇਨ ਵਿੱਚ ਬੱਚਤ ਕੀਤੀ, ਉਨ੍ਹਾਂ ਲਈ ਜੀਵਨ ਸਸਤਾ ਹੋਇਆ ਹੈ।`;
		case "proof_h2":
			return `ਇਹ ਰਿਹਾ ਸਬੂਤ: ਤੁਹਾਡਾ ਪੈਸਾ ਆਪਣੀ ਕੀਮਤ ਗੁਆ ਰਿਹਾ ਹੈ`;
		case "proof_p1":
			return `ਤੁਹਾਡੇ ਬੈਂਕ ਖਾਤੇ ਵਿੱਚ ਰੱਖਿਆ ਹਰ ${c.noun} ਹਰ ਸਾਲ ਘੱਟ ਚੀਜ਼ਾਂ ਖ਼ਰੀਦਦਾ ਹੈ। ਇਹ ਇਸ ਲਈ ਹੁੰਦਾ ਹੈ ਕਿਉਂਕਿ ਬਣਾਏ ਜਾ ਸਕਣ ਵਾਲੇ ${c.nounPlural} ਦੀ ਕੋਈ ਸੀਮਾ ਨਹੀਂ ਹੈ।`;
		case "proof_p2":
			return `ਇਹ ਅਸੀਮਤ ਸਪਲਾਈ ਹੀ ਮਹਿੰਗਾਈ ਦਾ ਮੁੱਖ ਕਾਰਨ ਹੈ। ਹਾਲ ਦੇ ਸਾਲਾਂ ਵਿੱਚ ਪ੍ਰਚਲਨ ਵਿੱਚ ਮੌਜੂਦ ${c.nounPlural} ਦੀ ਗਿਣਤੀ ਨਾਟਕੀ ਢੰਗ ਨਾਲ ਵਧੀ ਹੈ।`;
		case "proof_p3":
			return `ਜਦੋਂ ਜ਼ੀਰੋ ਤੋਂ ਹੋਰ ਪੈਸਾ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ, ਤਾਂ ਹਰ ਚੀਜ਼ ਦੀ ਕੀਮਤ ਵਧ ਜਾਂਦੀ ਹੈ। ਇਸ ਵਿੱਚ ਉਹ ਕੱਚੇ ਮਾਲ ਵੀ ਸ਼ਾਮਲ ਹਨ ਜੋ ਕੰਪਨੀਆਂ ਉਤਪਾਦ ਬਣਾਉਣ ਲਈ ਖ਼ਰੀਦਦੀਆਂ ਹਨ — ਯਾਨੀ ਤੁਹਾਡੇ ਲਈ ਉੱਚੀਆਂ ਕੀਮਤਾਂ।`;
		case "proof_p4":
			return `ਜਿਵੇਂ-ਜਿਵੇਂ ਸਰਕਾਰੀ ਕਰਜ਼ਾ ਵਧਦਾ ਹੈ, ਹੋਰ ਜ਼ਿਆਦਾ ਪੈਸਾ ਛਾਪਿਆ ਜਾਂਦਾ ਹੈ, ਕਿਉਂਕਿ ਘੱਟ ਲੋਕ ਸਰਕਾਰ ਨੂੰ ਉਧਾਰ ਦੇਣ ਨੂੰ ਤਿਆਰ ਰਹਿੰਦੇ ਹਨ।`;
		case "proof_p5_before":
			return `ਜੇ ਤੁਸੀਂ ਉਧਾਰ ਨਹੀਂ ਲੈ ਸਕਦੇ, ਤਾਂ ਖ਼ਰਚ ਨਹੀਂ ਕਰ ਸਕਦੇ। ਪਰ ਜਦੋਂ ਕੋਈ ਸਰਕਾਰ`;
		case "proof_p5_link":
			return `ਉਧਾਰ ਨਹੀਂ ਲੈ ਪਾਉਂਦੀ`;
		case "proof_p5_after":
			return `, ਤਾਂ ਉਹ ਬੱਸ ਹੋਰ ਪੈਸਾ ਛਾਪ ਦਿੰਦੀ ਹੈ।`;
		case "proof_p6":
			return `ਜ਼ਿਆਦਾ ਸਰਕਾਰੀ ਕਰਜ਼ੇ ਦਾ ਮਤਲਬ ਹੈ ਜ਼ਿਆਦਾ ਪੈਸਾ ਛਾਪਣਾ। ਜ਼ਿਆਦਾ ਪੈਸਾ ਛਾਪਣ ਦਾ ਮਤਲਬ ਹੈ ਜ਼ਿਆਦਾ ਮਹਿੰਗਾਈ। ਅਤੇ ਇਸ ਦੇ ਰੁਕਣ ਦਾ ਕੋਈ ਸੰਕੇਤ ਨਹੀਂ ਹੈ।`;
		case "btc_h2":
			return `ਬਿਟਕੌਇਨ ਵਿੱਚ ਮਹਿੰਗਾਈ ਨਹੀਂ ਹੈ`;
		case "btc_p1":
			return `ਮਹਿੰਗਾਈ ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਤੁਹਾਡਾ ਪੈਸਾ ਸਮੇਂ ਦੇ ਨਾਲ ਘੱਟ ਚੀਜ਼ਾਂ ਖ਼ਰੀਦਦਾ ਹੈ। ਬਿਟਕੌਇਨ ਬਿਹਤਰ ਪੈਸਾ ਹੈ ਕਿਉਂਕਿ ਉਸ ਵਿੱਚ ਮਹਿੰਗਾਈ ਨਹੀਂ ਹੈ।`;
		case "btc_p2_before":
			return `${c.label} ਦੀ ਸਪਲਾਈ ਅਸੀਮਤ ਹੈ, ਯਾਨੀ ਕਦੇ ਵੀ ਹੋਰ ਛਾਪਿਆ ਜਾ ਸਕਦਾ ਹੈ।`;
		case "btc_p2_link":
			return `ਬਿਟਕੌਇਨ ਦੁਰਲੱਭ ਹੈ`;
		case "btc_p2_after":
			return `, ਕਿਉਂਕਿ ਉਸ ਦੀ ਅਧਿਕਤਮ ਸਪਲਾਈ 21 ਮਿਲੀਅਨ ਬਿਟਕੌਇਨ ਹੈ। ਕੋਈ ਵੀ ਹੋਰ ਬਿਟਕੌਇਨ ਨਹੀਂ ਬਣਾ ਸਕਦਾ।`;
		case "btc_p3":
			return `ਇਤਿਹਾਸਕ ਤੌਰ 'ਤੇ, ਬਿਟਕੌਇਨ ਨੇ ਸਮੇਂ ਦੇ ਨਾਲ ਆਪਣੀ ਖਰੀਦ ਸ਼ਕਤੀ ਵਧਾਈ ਹੈ, ਜਦਕਿ ${c.label} ਨੇ ਆਪਣੀ ਖਰੀਦ ਸ਼ਕਤੀ ਗੁਆਈ ਹੈ। ਬਹੁਤ ਸਾਰੇ ਲੋਕ ਬਿਟਕੌਇਨ ਨੂੰ ਲੰਮੀ ਮਿਆਦ ਦੇ ਬੱਚਤ ਖਾਤੇ ਵਾਂਗ ਵਰਤਦੇ ਹਨ — ਅਜਿਹਾ ਪੈਸਾ ਜੋ ਸਾਲਾਂ ਤੱਕ ਛੋਹੇ ਬਿਨਾਂ ਵਧਦਾ ਰਹਿੰਦਾ ਹੈ।`;
		case "btc_p4":
			return `ਤੁਸੀਂ ਕੀ ਪਸੰਦ ਕਰੋਗੇ: ${c.inPhrase} ਬੱਚਤ ਕਰਨਾ — ਅਜਿਹੇ ${c.nounPlural} ਜੋ ਸਮੇਂ ਦੇ ਨਾਲ ਘੱਟ ਚੀਜ਼ਾਂ ਖ਼ਰੀਦਦੇ ਹਨ — ਜਾਂ ਬਿਟਕੌਇਨ ਵਿੱਚ ਬੱਚਤ ਕਰਨਾ ਜਿਸ ਨੇ ਇਤਿਹਾਸਕ ਤੌਰ 'ਤੇ ਜ਼ਿਆਦਾ ਚੀਜ਼ਾਂ ਖ਼ਰੀਦੀਆਂ ਹਨ?`;
		case "freedom_h2":
			return `ਬਿਟਕੌਇਨ ਆਜ਼ਾਦੀ ਦਾ ਇੱਕ ਔਜ਼ਾਰ ਵੀ ਹੈ`;
		case "freedom_p1":
			return `ਬਿਟਕੌਇਨ ਨੈੱਟਵਰਕ 'ਤੇ ਕਿਸੇ ਦੀ ਮਾਲਕੀ ਨਹੀਂ ਹੈ। ਨਾ ਕੋਈ ਸਰਕਾਰ ਅਤੇ ਨਾ ਹੀ ਕੋਈ ਕੰਪਨੀ ਇਸ ਨੂੰ ਕੰਟਰੋਲ ਕਰਦੀ ਹੈ। ਇਹ ਤੁਹਾਡੀ ਆਜ਼ਾਦੀ ਅਤੇ ਤੁਹਾਡੇ ਪੈਸੇ ਦੀ ਰੱਖਿਆ ਲਈ ਬਣਾਇਆ ਗਿਆ ਹੈ।`;
		case "freedom_p2":
			return `ਦੁਨੀਆ ਭਰ ਦੇ ਲੋਕ ਹੁਣ ਬਿਟਕੌਇਨ ਦੀ ਵਰਤੋਂ ਆਪਣੀ ਆਜ਼ਾਦੀ ਦੀ ਰੱਖਿਆ ਲਈ ਕਰ ਰਹੇ ਹਨ — ਉਦੋਂ ਵੀ ਜਦੋਂ ਉਨ੍ਹਾਂ ਦੀਆਂ ਸਰਕਾਰਾਂ ਉਨ੍ਹਾਂ ਦੀ ਮਦਦ ਨਹੀਂ ਕਰਨਾ ਚਾਹੁੰਦੀਆਂ ਜਾਂ ਉਨ੍ਹਾਂ ਨੂੰ ਰੋਕਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੀਆਂ ਹਨ।`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "4 ਸਾਲਾਂ ਵਿੱਚ ਗੁਆਈ ਹੋਈ ਖਰੀਦ ਸ਼ਕਤੀ";
		case "stat_source_bpr":
			return "ਸਰੋਤ: Bitcoin Price Report ←";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "ਹੋਰ ਜਾਣੋ ←",
	inflation_freedom_scarce_title: "ਦੁਰਲੱਭ",
	inflation_freedom_scarce_desc:
		"ਕਦੇ ਵੀ 21 ਮਿਲੀਅਨ ਤੋਂ ਵੱਧ ਬਿਟਕੌਇਨ ਨਹੀਂ ਹੋਣਗੇ। ਕੋਈ ਵੀ ਹੋਰ ਨਹੀਂ ਛਾਪ ਸਕਦਾ।",
	inflation_freedom_decentralized_title: "ਵਿਕੇਂਦਰੀਕ੍ਰਿਤ",
	inflation_freedom_decentralized_desc:
		"ਬਿਟਕੌਇਨ ਨੂੰ ਕੋਈ ਇੱਕ ਪੱਖ ਕੰਟਰੋਲ ਨਹੀਂ ਕਰਦਾ — ਨਾ ਸਰਕਾਰ ਅਤੇ ਨਾ ਕੋਈ ਕੰਪਨੀ।",
	inflation_freedom_permissionless_title: "ਬਿਨਾਂ ਇਜਾਜ਼ਤ",
	inflation_freedom_permissionless_desc:
		"ਕਿਤੇ ਵੀ ਕੋਈ ਵੀ ਇਸ ਨੈੱਟਵਰਕ ਨਾਲ ਜੁੜ ਸਕਦਾ ਹੈ। ਕੋਈ ਤੁਹਾਨੂੰ ਰੋਕ ਨਹੀਂ ਸਕਦਾ।",
	inflation_freedom_sovereign_title: "ਪ੍ਰਭੂਸੱਤਾ ਸੰਪੰਨ",
	inflation_freedom_sovereign_desc:
		"ਸਿਆਸਤਦਾਨਾਂ ਅਤੇ ਉਨ੍ਹਾਂ ਦੇ ਟੁੱਟੇ ਵਾਅਦਿਆਂ ਤੋਂ ਮੁਕਤ ਇੱਕ ਨਵੀਂ ਪ੍ਰਣਾਲੀ।",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "ਬਿਟਕੌਇਨ",
	inflation_stat_bitcoin_value: "21 ਮਿਲੀਅਨ",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "ਹਮੇਸ਼ਾ ਲਈ ਨਿਸ਼ਚਿਤ",
	inflation_stat_bitcoin_source: "ਸਰੋਤ: ਬਿਟਕੌਇਨ ਵ੍ਹਾਈਟਪੇਪਰ ←",

	// Shared currency stat labels
	inflation_stat_comparison_today: "ਅੱਜ",
	inflation_stat_currency_counting: "ਅਤੇ ਗਿਣਤੀ ਜਾਰੀ ਹੈ...",
	inflation_stat_currency_detail_4yr_lost:
		"4 ਸਾਲਾਂ ਵਿੱਚ ਗੁਆਈ ਹੋਈ ਖਰੀਦ ਸ਼ਕਤੀ",
	inflation_stat_currency_source_cpi: "ਸਰੋਤ: FRED CPI ←",
	inflation_stat_currency_source_debt: "ਸਰੋਤ: FRED ਸਰਕਾਰੀ ਕਰਜ਼ਾ ←",
	inflation_stat_currency_source_m1: "ਸਰੋਤ: FRED M1 ਮਨੀ ਸਪਲਾਈ ←",
	inflation_stat_currency_source_m1_short: "ਸਰੋਤ: FRED ←",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "4 ਸਾਲਾਂ ਵਿੱਚ ਵਧੀ ਹੋਈ ਖਰੀਦ ਸ਼ਕਤੀ",
	inflation_stat_btc_source_bpr: "ਸਰੋਤ: Bitcoin Price Report ←",

	// Freedom stories
	inflation_story_canada_title: "ਕੈਨੇਡਾ",
	inflation_story_canada_desc:
		"ਕਾਮਿਆਂ ਨੇ ਆਪਣੇ ਬੈਂਕ ਖਾਤੇ ਜਮ੍ਹਾਂ ਕੀਤੇ ਜਾਣ ਤੋਂ ਬਾਅਦ ਬਿਟਕੌਇਨ ਰਾਹੀਂ ਆਪਣੇ ਪੈਸੇ ਤੱਕ ਪਹੁੰਚ ਵਾਪਸ ਪਾਈ।",
	inflation_story_nigeria_title: "ਨਾਈਜੀਰੀਆ",
	inflation_story_nigeria_desc:
		"ਪ੍ਰਦਰਸ਼ਨਕਾਰੀਆਂ ਨੇ ਬੈਂਕਾਂ ਦੇ ਕੰਮ ਕਰਨ ਤੋਂ ਇਨਕਾਰ ਕਰਨ ਤੋਂ ਬਾਅਦ ਆਪਣੇ ਅੰਦੋਲਨ ਨੂੰ ਫੰਡ ਕਰਨ ਲਈ ਬਿਟਕੌਇਨ ਦੀ ਵਰਤੋਂ ਕੀਤੀ।",
	inflation_story_pennsylvania_title: "ਪੈਨਸਿਲਵੇਨੀਆ",
	inflation_story_pennsylvania_desc:
		"ਬਿਟਕੌਇਨ ਮਾਈਨਿੰਗ ਨੇ ਉਹ ਕੋਲੇ ਦਾ ਕਚਰਾ ਸਾਫ਼ ਕੀਤਾ ਜਿਸ ਨੂੰ ਸਾਫ਼ ਕਰਨ ਨੂੰ ਸਰਕਾਰ ਤਿਆਰ ਨਹੀਂ ਸੀ।",
	inflation_story_texas_title: "ਟੈਕਸਾਸ",
	inflation_story_texas_desc:
		"ਬਿਟਕੌਇਨ ਮਾਈਨਿੰਗ ਨੇ ਇੱਕ ਵੱਡੇ ਤੂਫ਼ਾਨ ਦੌਰਾਨ ਬਿਜਲੀ ਦੇ ਗਰਿੱਡ ਨੂੰ ਚਾਲੂ ਰੱਖਣ ਵਿੱਚ ਮਦਦ ਕੀਤੀ।",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4-ਸਾਲਾ ਵਾਪਸੀ ਚਾਰਟ (ਸਾਰੀਆਂ ਮੁਦਰਾਵਾਂ)",
	sources_bitcoin_source_code:
		"ਬਿਟਕੌਇਨ ਦਾ ਸੋਰਸ ਕੋਡ — 21 ਮਿਲੀਅਨ ਦੀ ਸਪਲਾਈ ਸੀਮਾ",
	sources_canadian_trucker:
		"ਕੈਨੇਡੀਅਨ ਟਰੱਕ ਡਰਾਈਵਰ ਪ੍ਰਦਰਸ਼ਨ — ਜਮ੍ਹਾਂ ਕੀਤੇ ਬੈਂਕ ਖਾਤਿਆਂ ਨੂੰ ਪਾਰ ਕਰਨ ਲਈ ਬਿਟਕੌਇਨ (YouTube)",
	sources_mempool_space:
		"Mempool.space — ਬਿਟਕੌਇਨ ਦੀ ਸਪਲਾਈ ਅਤੇ ਮਾਈਨਿੰਗ ਡੇਟਾ",
	sources_nigeria_endsars:
		"Quartz Africa — ਬਿਟਕੌਇਨ ਨੇ ਨਾਈਜੀਰੀਆ ਦੇ EndSARS ਅੰਦੋਲਨ ਨੂੰ ਕਿਵੇਂ ਫੰਡ ਕੀਤਾ",
	sources_pennsylvania_mining:
		"ਬਿਟਕੌਇਨ ਮਾਈਨਿੰਗ ਪੈਨਸਿਲਵੇਨੀਆ ਵਿੱਚ ਕੋਲੇ ਦੇ ਕਚਰੇ ਤੋਂ ਮੀਥੇਨ ਬਚਾਉਂਦੀ ਹੈ (YouTube)",
	sources_texas_mining:
		"ਬਿਟਕੌਇਨ ਮਾਈਨਿੰਗ ਅਤੇ ਟੈਕਸਾਸ ਦਾ ਬਿਜਲੀ ਗਰਿੱਡ (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"ਬਿਟਕੌਇਨ ਵਿੱਚ ਮਹਿੰਗਾਈ ਨਹੀਂ ਹੈ, ਪਰ ਤੁਹਾਡੇ ਪੈਸੇ ਵਿੱਚ ਹੈ।",
	inflation_choose: "ਆਪਣੀ ਮੁਦਰਾ ਚੁਣੋ ਅਤੇ ਸਬੂਤ ਦੇਖੋ",
	inflation_choose_another: "← ਦੂਜੀ ਮੁਦਰਾ ਚੁਣੋ",
	inflation_sticker_learn: "ਜਾਣੋ ਕਿ ਬਿਟਕੌਇਨ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹੈ।",
	inflation_sticker_lets_find_out: "ਆਓ ਪਤਾ ਕਰੀਏ।",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (e.namespace !== "inflation") continue;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}

		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		let m = e.key.match(/^inflation_stat_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = "stat_" + m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		m = e.key.match(/^inflation_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		unmatched.push(e.key);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-inflation (pa): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
