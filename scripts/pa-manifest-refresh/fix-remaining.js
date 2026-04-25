#!/usr/bin/env node
/**
 * Punjabi manifest refresh — fix-remaining.
 * Covers stragglers: business/faq (legacy V1 keys), business/maps,
 * business/sticker-files, business/stickers, business/wallets.
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

const T = {
	// business/faq (legacy V1 content)
	"business/faq::faq_description":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਵਿੱਚ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨ ਬਾਰੇ ਸਵਾਲ ਹਨ?",
	"business/faq::faq_s1": "ਬਿਟਕੌਇਨ ਕੀ ਹੈ?",
	"business/faq::faq_s1_c1":
		"ਬਿਟਕੌਇਨ ਦੋ ਚੀਜ਼ਾਂ ਹਨ: ਡਿਜੀਟਲ ਪੈਸਾ ਅਤੇ ਇੱਕ ਕੰਪਿਊਟਰ ਨੈੱਟਵਰਕ।",
	"business/faq::faq_s1_c2":
		"ਤੁਸੀਂ ਬਿਟਕੌਇਨ ਨੈੱਟਵਰਕ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਬਿਟਕੌਇਨ (ਡਿਜੀਟਲ ਪੈਸਾ) ਸਿੱਧੇ ਦੂਜੇ ਲੋਕਾਂ ਨੂੰ ਭੇਜ ਸਕਦੇ ਹੋ।",
	"business/faq::faq_s1_c3":
		"ਬਿਟਕੌਇਨ ਨੈੱਟਵਰਕ ਬਿਨਾਂ ਵਿਚੋਲਿਆਂ ਜਾਂ ਕੇਂਦਰੀ ਅਥਾਰਟੀਆਂ, ਜਿਵੇਂ ਬੈਂਕਾਂ ਜਾਂ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਕੰਪਨੀਆਂ ਦੇ, ਚਲ ਸਕਦਾ ਹੈ, ਇਸ ਲਈ ਤੁਸੀਂ ਉਨ੍ਹਾਂ ਦੀਆਂ ਲੈਣ-ਦੇਣ ਫ਼ੀਸਾਂ ਤੋਂ ਬਚ ਸਕਦੇ ਹੋ।",
	"business/faq::faq_s1_c4":
		"ਬਿਟਕੌਇਨ ਲੈਣ-ਦੇਣ ਜਲਦੀ ਅੰਤਿਮ ਨਿਪਟਾਰਾ ਹਾਸਲ ਕਰ ਲੈਂਦੇ ਹਨ (10 ਮਿੰਟ) ਅਤੇ ਕਦੇ ਚਾਰਜਬੈਕ ਨਹੀਂ ਹੋ ਸਕਦੇ, ਇਸ ਲਈ ਤੁਸੀਂ ਚੈਨ ਨਾਲ ਸੌਂ ਸਕਦੇ ਹੋ ਇਹ ਜਾਣਦੇ ਹੋਏ ਕਿ ਤੁਹਾਡਾ ਪੈਸਾ ਤੁਹਾਡਾ ਪੈਸਾ ਹੈ।",
	"business/faq::faq_s2":
		"ਬਿਟਕੌਇਨ ਮੇਰੇ ਕਾਰੋਬਾਰ ਨੂੰ ਕਿਵੇਂ ਲਾਭ ਪਹੁੰਚਾ ਸਕਦਾ ਹੈ?",
	"business/faq::faq_s2_c1":
		"ਬਿਟਕੌਇਨ ਤੁਹਾਨੂੰ ਘੱਟ ਫ਼ੀਸਾਂ ਨਾਲ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨ ਅਤੇ ਹੋਰ ਗਾਹਕ ਪ੍ਰਾਪਤ ਕਰਨ ਦਿੰਦਾ ਹੈ। ਬਿਟਕੌਇਨ ਭੁਗਤਾਨਾਂ ਦੀਆਂ ਫ਼ੀਸਾਂ ਘੱਟ ਹਨ ਬਿਨਾਂ ਘੱਟੋ-ਘੱਟ ਦੇ, ਤੁਰੰਤ ਨਿਪਟਦੇ ਹਨ ਅਤੇ ਚਾਰਜਬੈਕਾਂ ਅਤੇ ਧੋਖਾਧੜੀ ਤੋਂ ਮੁਕਤ ਹਨ।",
	"business/faq::faq_s2_c2":
		"ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨਾ ਮੁਫ਼ਤ ਹੈ ਅਤੇ ਤੁਹਾਨੂੰ ਆਪਣੇ ਕਾਰੋਬਾਰ ਨੂੰ ਬਿਟਕੌਇਨ ਵਪਾਰੀ ਨਕਸ਼ਿਆਂ 'ਤੇ ਸੂਚੀਬੱਧ ਕਰਨ ਦਿੰਦਾ ਹੈ ਤਾਂ ਜੋ ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾ ਆਸਾਨੀ ਨਾਲ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨੂੰ ਲੱਭ ਸਕਣ।",
	"business/faq::faq_s2_c3":
		"ਬਿਟਕੌਇਨ ਕਾਰੋਬਾਰ ਲਈ ਜਿਨ੍ਹਾਂ ਤਰੀਕਿਆਂ ਨਾਲ ਚੰਗਾ ਹੈ ਉਹ ਸਾਰੇ ਦੇਖੋ।",
	"business/faq::faq_s3":
		"ਮੈਂ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਕਿਵੇਂ ਸਵੀਕਾਰ ਕਰਾਂ?",
	"business/faq::faq_s3_c1":
		"ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨ ਲਈ ਤੁਹਾਨੂੰ ਬੱਸ ਇੱਕ ਮੁਫ਼ਤ ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਚਾਹੀਦਾ ਹੈ।",
	"business/faq::faq_s3_c2":
		"ਸਾਡੀ ਵਾਲਿਟ ਗਾਈਡ ਤੁਹਾਨੂੰ ਜਲਦੀ ਅਤੇ ਆਸਾਨੀ ਨਾਲ ਸੈੱਟਅੱਪ ਕਰਾ ਦੇਵੇਗੀ ਤਾਂ ਜੋ ਤੁਸੀਂ ਅੱਜ ਹੀ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਦੇ ਲਾਭ ਖੋਲ੍ਹ ਸਕੋ!",
	"business/faq::faq_s3_c3": "ਵਾਲਿਟ ਗਾਈਡ ਦੇਖੋ",
	"business/faq::faq_s4":
		"ਕੀ ਮੈਂ ਪ੍ਰਾਪਤ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨਾਂ ਨੂੰ ਆਪਣੀ ਸਥਾਨਕ ਮੁਦਰਾ ਵਿੱਚ ਬਦਲ ਸਕਦਾ ਹਾਂ?",
	"business/faq::faq_s4_c1":
		"ਹਾਂ! ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ ਦੀ ਵਰਤੋਂ ਕਰਕੇ, ਤੁਸੀਂ ਪ੍ਰਾਪਤ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨਾਂ ਨੂੰ ਭੁਗਤਾਨ ਆਉਂਦੇ ਹੀ ਆਪਣੀ ਸਥਾਨਕ ਮੁਦਰਾ ਵਿੱਚ ਆਪਣੇ ਆਪ ਬਦਲ ਸਕਦੇ ਹੋ।",
	"business/faq::faq_s4_c2":
		"ਸਾਡੀ ਵਾਲਿਟ ਗਾਈਡ ਤੁਹਾਨੂੰ ਜਲਦੀ ਅਤੇ ਆਸਾਨੀ ਨਾਲ ਸੈੱਟਅੱਪ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੀ ਹੈ।",
	"business/faq::faq_s4_c3":
		"ਤੁਸੀਂ ਪ੍ਰਾਪਤ ਭੁਗਤਾਨਾਂ ਦਾ ਕੁਝ ਹਿੱਸਾ ਬਿਟਕੌਇਨ ਵਜੋਂ ਰੱਖਣਾ ਵੀ ਚੁਣ ਸਕਦੇ ਹੋ। ਬਿਟਕੌਇਨ ਵਿੱਚ ਬੱਚਤ ਕਰਨ ਦੇ ਬਹੁਤ ਸਾਰੇ ਲਾਭ ਹਨ:",
	"business/faq::faq_s4_c4":
		"ਬਿਟਕੌਇਨ ਇੱਕ ਪੂਰਨ-ਰਿਜ਼ਰਵ ਵਿੱਤੀ ਪ੍ਰਣਾਲੀ ਹੈ।",
	"business/faq::faq_s4_c5": "ਬਿਟਕੌਇਨ ਵਿੱਚ ਮਹਿੰਗਾਈ ਨਹੀਂ ਹੈ।",
	"business/faq::faq_s4_c6":
		"ਇਹ ਲਾਭ ਬਿਟਕੌਇਨ ਨੂੰ ਲੰਮੀ ਮਿਆਦ ਲਈ ਪੈਸਾ ਜਮ੍ਹਾਂ ਕਰਨ ਦਾ ਇੱਕ ਵਧੀਆ ਤਰੀਕਾ ਬਣਾਉਂਦੇ ਹਨ।",
	"business/faq::faq_s4_c7":
		"ਭਾਵੇਂ ਤੁਸੀਂ ਆਪਣੇ ਸਾਰੇ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨਾਂ ਨੂੰ ਡਾਲਰਾਂ ਵਿੱਚ ਬਦਲਣਾ ਚੁਣੋ, ਫਿਰ ਵੀ ਤੁਹਾਨੂੰ ਬਹੁਤ ਘੱਟ ਫ਼ੀਸਾਂ ਨਾਲ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨ ਦੇ ਲਾਭ ਮਿਲਦੇ ਹਨ ਅਤੇ ਨਾਲ ਹੀ ਹੋਰ ਸੰਭਾਵੀ ਗਾਹਕਾਂ ਤੱਕ ਪਹੁੰਚ ਮਿਲਦੀ ਹੈ।",
	"business/faq::faq_s5":
		"ਕੀ ਮੈਂ ਆਮ੍ਹਣੇ-ਸਾਮ੍ਹਣੇ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰ ਸਕਦਾ ਹਾਂ?",
	"business/faq::faq_s5_c1":
		"ਹਾਂ! ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਆਮ੍ਹਣੇ-ਸਾਮ੍ਹਣੇ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨਾ ਆਸਾਨ ਹੈ।",
	"business/faq::faq_s5_c2":
		"ਸਾਡੀ ਵਾਲਿਟ ਗਾਈਡ ਤੁਹਾਨੂੰ ਆਪਣੇ ਕਾਰੋਬਾਰ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਚੁਣਨ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੀ ਹੈ।",
	"business/faq::faq_s5_c3": "ਵਾਲਿਟ ਗਾਈਡ ਦੇਖੋ",
	"business/faq::faq_s6":
		"ਕੀ ਮੈਂ ਆਨਲਾਈਨ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰ ਸਕਦਾ ਹਾਂ?",
	"business/faq::faq_s6_c1":
		"ਹਾਂ! ਆਪਣੇ ਮੌਜੂਦਾ ਆਨਲਾਈਨ ਸਟੋਰ ਨਾਲ ਆਨਲਾਈਨ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨਾ ਆਸਾਨ ਹੈ।",
	"business/faq::faq_s6_c2":
		"ਹੋਰ ਜਾਣਕਾਰੀ ਲਈ ਸਾਡੀ ਵਾਲਿਟ ਗਾਈਡ ਦੇਖੋ।",
	"business/faq::faq_s7":
		"ਮੈਂ ਆਪਣੇ ਗਾਹਕਾਂ ਨੂੰ ਕਿਵੇਂ ਦੱਸਾਂ ਕਿ ਮੈਂ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਦਾ ਹਾਂ?",
	"business/faq::faq_s7_c1":
		"ਅਸੀਂ ਮੁਫ਼ਤ 'Bitcoin Accepted Here' ਸਟਿੱਕਰ ਪੇਸ਼ ਕਰਦੇ ਹਾਂ ਜਿਨ੍ਹਾਂ ਨੂੰ ਤੁਸੀਂ ਆਪਣੇ ਕਾਰੋਬਾਰ ਵਿੱਚ ਪ੍ਰਦਰਸ਼ਿਤ ਕਰ ਸਕਦੇ ਹੋ ਤਾਂ ਜੋ ਤੁਹਾਡੇ ਗਾਹਕਾਂ ਨੂੰ ਪਤਾ ਲੱਗੇ ਕਿ ਤੁਸੀਂ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ।",
	"business/faq::faq_s7_c2":
		"ਆਪਣੇ ਸਟਿੱਕਰਾਂ ਦੀ ਬੇਨਤੀ ਕਰਨ ਲਈ ਇੱਥੇ ਕਲਿੱਕ ਕਰੋ।",
	"business/faq::faq_s7_c3":
		"ਤੁਸੀਂ ਆਪਣੇ ਕਾਰੋਬਾਰ ਨੂੰ ਮੁਫ਼ਤ ਬਿਟਕੌਇਨ ਵਪਾਰੀ ਨਕਸ਼ਿਆਂ 'ਤੇ ਵੀ ਸੂਚੀਬੱਧ ਕਰ ਸਕਦੇ ਹੋ ਅਤੇ ਉਨ੍ਹਾਂ ਲੱਖਾਂ ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾਵਾਂ ਤੱਕ ਪਹੁੰਚ ਪਾ ਸਕਦੇ ਹੋ ਜੋ ਆਪਣਾ ਬਿਟਕੌਇਨ ਉਨ੍ਹਾਂ ਕਾਰੋਬਾਰਾਂ 'ਤੇ ਖ਼ਰਚਣਾ ਚਾਹੁੰਦੇ ਹਨ ਜੋ ਇਸ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹਨ।",
	"business/faq::faq_s7_c4": "ਹੁਣੇ ਸੂਚੀਬੱਧ ਹੋਵੋ।",
	"business/faq::faq_s8":
		"ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਕੇ ਮੈਂ ਹੋਰ ਗਾਹਕ ਕਿਵੇਂ ਪਾ ਸਕਦਾ ਹਾਂ?",
	"business/faq::faq_s8_c1":
		"ਲੱਖਾਂ ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾ ਹਨ ਜੋ ਆਪਣਾ ਬਿਟਕੌਇਨ ਉਨ੍ਹਾਂ ਕਾਰੋਬਾਰਾਂ 'ਤੇ ਖ਼ਰਚਣਾ ਚਾਹੁੰਦੇ ਹਨ ਜੋ ਇਸ ਨੂੰ ਸਵੀਕਾਰ ਕਰਦੇ ਹਨ।",
	"business/faq::faq_s8_c2":
		"ਸਿਰਫ਼ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਕੇ, ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨੂੰ ਮੁਫ਼ਤ ਬਿਟਕੌਇਨ ਵਪਾਰੀ ਨਕਸ਼ਿਆਂ 'ਤੇ ਸੂਚੀਬੱਧ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ ਅਤੇ ਤੁਹਾਨੂੰ ਨਵੇਂ ਸੰਭਾਵੀ ਗਾਹਕਾਂ ਤੱਕ ਪਹੁੰਚ ਮਿਲ ਸਕਦੀ ਹੈ।",
	"business/faq::faq_s8_c3": "ਹੁਣੇ ਸੂਚੀਬੱਧ ਹੋਵੋ।",
	"business/faq::faq_s9":
		"ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ 'ਤੇ ਕਿੰਨੀ ਲਾਗਤ ਆਉਂਦੀ ਹੈ?",
	"business/faq::faq_s9_c1":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਵਿੱਚ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨਾ 100% ਮੁਫ਼ਤ ਹੈ। ਕੋਈ ਇਕਰਾਰਨਾਮੇ ਜਾਂ ਛੁਪੀਆਂ ਫ਼ੀਸਾਂ ਨਹੀਂ ਹਨ।",
	"business/faq::faq_s9_c2":
		"ਅੱਜ ਹੀ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਸਾਡੀ ਵਾਲਿਟ ਗਾਈਡ ਦੇਖੋ।",

	// business/maps
	"business/maps::bitcoin_merchant_maps_list_your_business_for_free":
		"ਬਿਟਕੌਇਨ ਵਪਾਰੀ ਨਕਸ਼ੇ - ਆਪਣੇ ਕਾਰੋਬਾਰ ਨੂੰ ਮੁਫ਼ਤ ਸੂਚੀਬੱਧ ਕਰੋ",
	"business/maps::maps_view": "ਨਕਸ਼ਾ ਇੱਥੇ ਦੇਖੋ।",

	// business/sticker-files/english/index
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"ਅੰਗਰੇਜ਼ੀ 'Bitcoin Accepted Here' ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ",

	// business/stickers
	"business/stickers::bitcoin_accepted_here_stickers":
		"Bitcoin Accepted Here ਸਟਿੱਕਰ",
	"business/stickers::stickers_request": "ਆਪਣੇ ਮੁਫ਼ਤ ਸਟਿੱਕਰ ਪ੍ਰਾਪਤ ਕਰੋ",

	// business/wallets (legacy V1)
	"business/wallets::how_to_accept_bitcoin_payments":
		"ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਕਿਵੇਂ ਸਵੀਕਾਰ ਕਰਨੇ ਹਨ",
	"business/wallets::wallets_feature_bitcoin_only":
		"ਸਿਰਫ਼-ਬਿਟਕੌਇਨ ਵਾਲਿਟ",
	"business/wallets::wallets_feature_hybrid": "ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ",
	"business/wallets::wallets_feature_in_person":
		"ਸਿਰਫ਼ ਆਮ੍ਹਣੇ-ਸਾਮ੍ਹਣੇ ਭੁਗਤਾਨ",
	"business/wallets::wallets_feature_in_person_online":
		"ਆਮ੍ਹਣੇ-ਸਾਮ੍ਹਣੇ ਅਤੇ ਆਨਲਾਈਨ ਭੁਗਤਾਨ",
	"business/wallets::wallets_feature_info":
		"ਕਾਰੋਬਾਰੀ ਜਾਣਕਾਰੀ ਚਾਹੀਦੀ",
	"business/wallets::wallets_feature_invoicing":
		"ਮੁਫ਼ਤ ਇਨਵੌਇਸਿੰਗ ਸਾਫ਼ਟਵੇਅਰ",
	"business/wallets::wallets_feature_multiple_employees":
		"ਕਈ ਕਾਮਿਆਂ ਦਾ ਸਮਰਥਨ (BPTs)",
	"business/wallets::wallets_feature_no_info":
		"ਕੋਈ ਜਾਣਕਾਰੀ ਨਹੀਂ ਚਾਹੀਦੀ",
	"business/wallets::wallets_feature_online_store":
		"ਆਨਲਾਈਨ ਸਟੋਰ ਏਕੀਕਰਨ",
	"business/wallets::wallets_feature_self_hosted":
		"ਸੈਲਫ਼-ਹੋਸਟਡ = 0% ਫ਼ੀਸਾਂ",
	"business/wallets::wallets_feature_settles_bitcoin":
		"100% ਬਿਟਕੌਇਨ ਵਿੱਚ ਨਿਪਟਦਾ ਹੈ",
	"business/wallets::wallets_feature_settles_both":
		"ਬਿਟਕੌਇਨ ਅਤੇ ਡਾਲਰਾਂ ਵਿੱਚ ਨਿਪਟਾਰਾ",
	"business/wallets::wallets_get_wallet": "ਵਾਲਿਟ ਲਓ",
	"business/wallets::wallets_intro_1":
		"ਸਾਰੇ ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਆਪਸ ਵਿੱਚ ਕੰਮ ਕਰਦੇ ਹਨ, ਇਸ ਲਈ ਤੁਹਾਡੇ ਗਾਹਕ ਤੁਹਾਨੂੰ ਬਿਟਕੌਇਨ ਵਿੱਚ ਭੁਗਤਾਨ ਕਰ ਸਕਦੇ ਹਨ ਚਾਹੇ ਉਹ ਕੋਈ ਵੀ ਵਾਲਿਟ ਵਰਤਣ।",
	"business/wallets::wallets_intro_2": "ਸਿਰਫ਼-ਬਿਟਕੌਇਨ ਵਾਲਿਟ:",
	"business/wallets::wallets_intro_3":
		"ਇਹ ਸ਼ੁੱਧ ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਹਨ ਜੋ ਬਿਟਕੌਇਨ ਦੇ ਪੂਰੇ ਲਾਭ ਖੋਲ੍ਹਦੇ ਹਨ: ਕੋਈ ਵਿਚੋਲਾ ਨਹੀਂ, ਘੱਟ ਫ਼ੀਸਾਂ ਅਤੇ ਕੋਈ ਚਾਰਜਬੈਕ ਜਾਂ ਧੋਖਾਧੜੀ ਨਹੀਂ।",
	"business/wallets::wallets_intro_4": "ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ:",
	"business/wallets::wallets_intro_5":
		"ਇਹ ਤੁਹਾਨੂੰ ਆਪਣੇ ਬਿਟਕੌਇਨ ਦੇ ਕਿਸੇ ਵੀ ਹਿੱਸੇ ਨੂੰ ਡਾਲਰਾਂ ਲਈ ਉਦੋਂ ਹੀ ਬਦਲਣ ਦਿੰਦੇ ਹਨ ਜਦੋਂ ਗਾਹਕ ਤੁਹਾਨੂੰ ਭੁਗਤਾਨ ਕਰਦਾ ਹੈ। ਫ਼ੀਸਾਂ ਫਿਰ ਵੀ ਕ੍ਰੈਡਿਟ ਕਾਰਡ ਭੁਗਤਾਨਾਂ ਤੋਂ ਘੱਟ ਹਨ, ਪਰ ਸ਼ੁੱਧ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨਾਂ ਤੋਂ ਜ਼ਿਆਦਾ।",
	"business/wallets::wallets_intro_6":
		"ਦੋਵੇਂ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਦੇ ਵਧੀਆ ਤਰੀਕੇ ਹਨ। ਖ਼ਾਸ ਵਾਲਿਟ ਜੋ ਤੁਸੀਂ ਵਰਤਦੇ ਹੋ ਉਹ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਦੇ ਆਕਾਰ ਅਤੇ ਕਿਸਮ 'ਤੇ ਨਿਰਭਰ ਕਰੇਗਾ।",
	"business/wallets::wallets_name_breez": "BREEZ",
	"business/wallets::wallets_name_btcpay_server": "BTCPAY SERVER",
	"business/wallets::wallets_name_ibex_pay": "IBEX PAY",
	"business/wallets::wallets_name_open_node": "OPEN NODE",
	"business/wallets::wallets_name_square": "SQUARE",
	"business/wallets::wallets_name_zaprite": "ZAPRITE",
	"business/wallets::wallets_square_note":
		"ਤੁਸੀਂ ਆਪਣੇ ਮੌਜੂਦਾ Square PoS ਟਰਮੀਨਲ ਜਾਂ ਆਨਲਾਈਨ ਸਟੋਰ ਏਕੀਕਰਨ ਨਾਲ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰ ਸਕਦੇ ਹੋ। ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨਾ ਕਦੇ ਇੰਨਾ ਆਸਾਨ ਨਹੀਂ ਸੀ।",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let missing = 0;
	const missingKeys = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		} else {
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`fix-remaining (pa): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
