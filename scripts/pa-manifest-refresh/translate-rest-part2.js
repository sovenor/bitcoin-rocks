#!/usr/bin/env node
/**
 * Punjabi manifest refresh — part 2 of non-inflation namespaces.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/*,
 *         sticker-language-success, sticker-success, stickers, wallets.
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

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli ਲੇਖਾ ਸੇਵਾਵਾਂ",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_description":
		"ਬਿਟਕੌਇਨ ਭੁਗਤਾਨਾਂ ਲਈ ਸਰਲ ਲੇਖਾ ਗਾਈਡ — ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ, ਲਾਗਤ ਆਧਾਰ, ਪੂੰਜੀ ਲਾਭ ਅਤੇ ਆਪਣੇ ਅਕਾਊਂਟੈਂਟ ਨਾਲ ਕਦੋਂ ਗੱਲ ਕਰਨੀ ਹੈ।",
	"business/accounting::accounting_s1_c1":
		"ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਦਾ ਸਭ ਤੋਂ ਆਸਾਨ ਤਰੀਕਾ ਹੈ ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ ਦੀ ਵਰਤੋਂ: ਇਹ ਆਪਣੇ ਆਪ 100% ਪ੍ਰਾਪਤ ਬਿਟਕੌਇਨ ਨੂੰ ਭੁਗਤਾਨ ਆਉਂਦੇ ਹੀ ਡਾਲਰਾਂ (ਜਾਂ ਤੁਹਾਡੀ ਸਥਾਨਕ ਮੁਦਰਾ) ਵਿੱਚ ਬਦਲ ਦਿੰਦਾ ਹੈ।",
	"business/accounting::accounting_s1_c2":
		"ਇਸ ਸੈੱਟਅੱਪ ਨਾਲ, ਤੁਹਾਡਾ ਲੇਖਾ ਉਹੀ ਦਿਸਦਾ ਹੈ ਜੋ ਅੱਜ ਦਿਸਦਾ ਹੈ — ਅੰਤਿਮ ਰਕਮ ਹਮੇਸ਼ਾ ਡਾਲਰਾਂ ਵਿੱਚ। ਕੋਈ ਲਾਗਤ ਆਧਾਰ ਨਹੀਂ, ਕੋਈ ਪੂੰਜੀ ਲਾਭ ਨਹੀਂ, ਕੋਈ ਨਵੀਂ ਸਪ੍ਰੈੱਡਸ਼ੀਟ ਨਹੀਂ।",
	"business/accounting::accounting_s2":
		"ਜੇ ਤੁਸੀਂ ਕੁਝ ਬਿਟਕੌਇਨ ਰੱਖਦੇ ਹੋ: ਆਪਣਾ ਲਾਗਤ ਆਧਾਰ ਟ੍ਰੈਕ ਕਰੋ",
	"business/accounting::accounting_s2_c1":
		"ਕੁਝ ਕਾਰੋਬਾਰ ਹਰ ਚੀਜ਼ ਨੂੰ ਆਪਣੇ ਆਪ ਬਦਲਣ ਦੀ ਥਾਂ ਪ੍ਰਾਪਤ ਬਿਟਕੌਇਨ ਦਾ ਕੁਝ ਹਿੱਸਾ ਰੱਖਣਾ ਚੁਣਦੇ ਹਨ। ਜੇ ਤੁਸੀਂ ਉਨ੍ਹਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹੋ, ਤਾਂ ਵਾਧੂ ਕਦਮ ਹੈ ਲਾਗਤ ਆਧਾਰ ਟ੍ਰੈਕ ਕਰਨਾ — ਹਰ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਦਾ ਡਾਲਰ ਮੁੱਲ ਉਸ ਦਿਨ ਜਦੋਂ ਤੁਹਾਨੂੰ ਮਿਲਿਆ।",
	"business/accounting::accounting_s2_c2":
		"ਭਾਵੇਂ ਤੁਸੀਂ ਆਪਣੇ ਕਾਰੋਬਾਰ ਨੂੰ ਸਿਰਫ਼ ਬਿਟਕੌਇਨ ਵਿੱਚ ਮਾਪਦੇ ਹੋ, ਜ਼ਿਆਦਾਤਰ ਟੈਕਸ ਅਥਾਰਟੀਆਂ ਹੁਣ ਵੀ ਡਾਲਰ ਮੁੱਲ ਰਿਪੋਰਟ ਕਰਨ ਦੀ ਮੰਗ ਕਰਦੀਆਂ ਹਨ। ਚੰਗੀ ਖ਼ਬਰ: ਹਰ ਲੈਣ-ਦੇਣ ਲਈ ਸਿਰਫ਼ ਦੋ ਅੰਕੜੇ ਹੁੰਦੇ ਹਨ — ਪ੍ਰਾਪਤ ਬਿਟਕੌਇਨ ਦੀ ਮਾਤਰਾ ਅਤੇ ਉਸ ਦਿਨ ਉਸ ਦਾ ਡਾਲਰ ਮੁੱਲ।",
	"business/accounting::accounting_s2_c3":
		"ਹੇਠਾਂ ਦਿੱਤੇ ਟੂਲਾਂ ਦੀ ਵਰਤੋਂ ਕਰਕੇ ਮੁੱਲ ਲੁਕਅੱਪ ਨੂੰ ਆਟੋਮੇਟ ਕਰੋ ਤਾਂ ਜੋ ਤੁਹਾਨੂੰ ਹਰ ਦਿਨ ਕੀਮਤਾਂ ਨਾ ਦੇਖਣੀਆਂ ਪੈਣ।",
	"business/accounting::accounting_s3":
		"ਰੱਖੇ ਹੋਏ ਬਿਟਕੌਇਨ ਨੂੰ ਖ਼ਰਚਣਾ ਜਾਂ ਵੇਚਣਾ",
	"business/accounting::accounting_s3_c1":
		"ਜੇ ਤੁਸੀਂ ਹਰ ਭੁਗਤਾਨ ਨੂੰ ਆਪਣੇ ਆਪ ਡਾਲਰਾਂ ਵਿੱਚ ਬਦਲਦੇ ਹੋ, ਤਾਂ ਇਹ ਹਿੱਸਾ ਛੱਡ ਦਿਓ — ਇਹ ਤੁਹਾਡੇ ਲਈ ਲਾਗੂ ਨਹੀਂ।",
	"business/accounting::accounting_s3_c2":
		"ਤੁਸੀਂ ਕੁਝ ਬਿਟਕੌਇਨ ਰੱਖਿਆ ਅਤੇ ਬਾਅਦ ਵਿੱਚ ਉਸ ਨੂੰ ਖ਼ਰਚਣ ਜਾਂ ਵੇਚਣ ਦਾ ਫ਼ੈਸਲਾ ਕੀਤਾ, ਤਾਂ ਉਸੇ ਸਪ੍ਰੈੱਡਸ਼ੀਟ ਵਿੱਚ ਵਿਕਰੀ ਮੁੱਲ ਨੂੰ ਲਾਗਤ ਆਧਾਰ ਨਾਲ ਜੋੜੋ। ਪ੍ਰਾਪਤੀ ਦੇ ਸਮੇਂ ਬਿਟਕੌਇਨ ਦੀ ਲਾਗਤ ਅਤੇ ਖ਼ਰਚਣ ਜਾਂ ਵੇਚਣ ਦੇ ਸਮੇਂ ਦੀ ਕੀਮਤ ਵਿਚਕਾਰ ਫ਼ਰਕ ਪੂੰਜੀ ਲਾਭ ਜਾਂ ਹਾਨੀ ਹੈ।",
	"business/accounting::accounting_s3_c3": "ਦੋ ਤੁਰੰਤ ਉਦਾਹਰਨਾਂ:",
	"business/accounting::accounting_s4":
		"ਬਿਟਕੌਇਨ ਸਮਝਣ ਵਾਲਾ ਮਾਹਰ ਚਾਹੀਦਾ ਹੈ?",
	"business/accounting::accounting_s4_c1":
		"ਜੇ ਤੁਸੀਂ ਇਹ ਕੰਮ ਕਿਸੇ ਹੋਰ ਨੂੰ ਸੌਂਪਣਾ ਪਸੰਦ ਕਰੋਗੇ — ਜਾਂ ਤੁਹਾਡੇ ਬਿਟਕੌਇਨ ਦੇ ਲੇਖੇ ਦਾ ਕੰਮ ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ ਦੇ ਸੰਭਾਲਣ ਤੋਂ ਜ਼ਿਆਦਾ ਜਟਿਲ ਹੈ — ਤਾਂ ਅਸੀਂ Satoshi Pacioli Accounting Services ਦੀ ਪੁਰਜ਼ੋਰ ਸਿਫ਼ਾਰਸ਼ ਕਰਦੇ ਹਾਂ, ਇੱਕ ਅਜਿਹੀ ਫ਼ਰਮ ਜੋ ਕਾਰੋਬਾਰਾਂ ਲਈ ਬਿਟਕੌਇਨ ਲੇਖੇ ਵਿੱਚ ਮੁਹਾਰਤ ਰੱਖਦੀ ਹੈ।",
	"business/accounting::bitcoin_business_accounting_guide":
		"ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਲਈ ਬਿਟਕੌਇਨ ਲੇਖਾ",
	"business/accounting::accounting_card_bpr_label": "ਬਿਟਕੌਇਨ ਦੀ ਕੀਮਤ",
	"business/accounting::accounting_card_bpr_title":
		"ਡਾਲਰਾਂ ਵਿੱਚ ਬਿਟਕੌਇਨ ਦੀਆਂ ਮੌਜੂਦਾ ਜਾਂ ਇਤਿਹਾਸਕ ਕੀਮਤਾਂ ਦੇਖੋ",
	"business/accounting::accounting_card_pacioli_label":
		"ਬਿਟਕੌਇਨ ਅਕਾਊਂਟੈਂਟ",
	"business/accounting::accounting_card_spreadsheet_label":
		"Excel ਵਿੱਚ ਆਯਾਤ",
	"business/accounting::accounting_card_spreadsheet_title":
		"Excel ਵਿੱਚ ਬਿਟਕੌਇਨ ਦੀਆਂ ਕੀਮਤਾਂ ਆਪਣੇ ਆਪ ਆਯਾਤ ਕਰੋ",
	"business/accounting::accounting_card_wallets_label":
		"ਹਾਈਬ੍ਰਿਡ ਵਾਲਿਟ",
	"business/accounting::accounting_card_wallets_title":
		"ਕਾਰੋਬਾਰਾਂ ਲਈ ਸਾਡੇ ਸਿਫ਼ਾਰਸ਼ੀ ਵਾਲਿਟ ਦੇਖੋ",
	"business/accounting::accounting_disclaimer":
		"ਇਹ ਗਾਈਡ ਸਿਰਫ਼ ਜਾਣਕਾਰੀ ਲਈ ਹੈ ਅਤੇ ਟੈਕਸ ਸਲਾਹ ਨਹੀਂ ਹੈ। ਆਪਣੀ ਖ਼ਾਸ ਸਥਿਤੀ ਲਈ ਸਲਾਹ ਲਈ ਕਿਸੇ ਯੋਗ ਅਕਾਊਂਟੈਂਟ ਨਾਲ ਸਲਾਹ ਕਰੋ।",
	"business/accounting::accounting_disclaimer_label": "ਅਸਵੀਕਰਨ",
	"business/accounting::accounting_example_feb_1": "1 ਫ਼ਰਵਰੀ",
	"business/accounting::accounting_example_gain_badge":
		"ਪੂੰਜੀ ਲਾਭ",
	"business/accounting::accounting_example_gain_explain":
		"ਤੁਸੀਂ $10 ਦਾ ਪੂੰਜੀ ਲਾਭ ਦਰਜ ਕਰਦੇ ਹੋ।",
	"business/accounting::accounting_example_jan_1": "1 ਜਨਵਰੀ",
	"business/accounting::accounting_example_loss_badge":
		"ਪੂੰਜੀ ਹਾਨੀ",
	"business/accounting::accounting_example_loss_explain":
		"ਤੁਸੀਂ $10 ਦੀ ਪੂੰਜੀ ਹਾਨੀ ਦਰਜ ਕਰਦੇ ਹੋ।",
	"business/accounting::accounting_example_received_label": "ਪ੍ਰਾਪਤ",
	"business/accounting::accounting_example_sold_label":
		"ਵੇਚਿਆ ਜਾਂ ਖ਼ਰਚਿਆ",
	"business/accounting::accounting_hero_subtitle":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਵਿੱਚ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਨਾਲ ਤੁਹਾਡਾ ਲੇਖਾ ਜਟਿਲ ਨਹੀਂ ਹੋਣਾ ਚਾਹੀਦਾ। ਇਹ ਰਿਹਾ ਸੰਖੇਪ ਰੂਪ — ਅਤੇ ਇਸ ਨੂੰ ਆਸਾਨ ਬਣਾਉਣ ਵਾਲੇ ਟੂਲ ਤੇ ਮਾਹਰ।",
	"business/accounting::accounting_intro_c1":
		"ਜੇ ਤੁਸੀਂ ਪਹਿਲਾਂ ਹੀ ਨਕਦ ਜਾਂ ਕਾਰਡ ਸਵੀਕਾਰ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ ਆਪਣੇ ਕਾਰੋਬਾਰ ਦੇ ਲੇਖੇ ਵਿੱਚ ਬਿਟਕੌਇਨ ਜੋੜਨਾ ਉਨਾ ਹੀ ਆਸਾਨ ਹੈ ਜਿੰਨਾ ਤੁਸੀਂ ਸੋਚਦੇ ਹੋ। ਤੁਹਾਡੇ ਕੋਲ ਦੋ ਵਿਕਲਪ ਹਨ: ਹਰ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਨੂੰ ਆਉਂਦੇ ਹੀ ਆਪਣੇ ਆਪ ਡਾਲਰਾਂ ਵਿੱਚ ਬਦਲੋ (ਕੋਈ ਨਵਾਂ ਲੇਖਾ ਨਹੀਂ), ਜਾਂ ਕੁਝ ਬਿਟਕੌਇਨ ਰੱਖੋ (ਤੁਹਾਨੂੰ ਕੁਝ ਵਾਧੂ ਅੰਕੜੇ ਟ੍ਰੈਕ ਕਰਨੇ ਪੈਣਗੇ)।",
	"business/accounting::accounting_intro_c2":
		"ਇਹ ਗਾਈਡ ਦੋਵੇਂ ਤਰੀਕੇ ਸਮਝਾਉਂਦੀ ਹੈ — ਤਾਂ ਜੋ ਤੁਸੀਂ ਆਪਣੇ ਕਾਰੋਬਾਰ ਲਈ ਸਹੀ ਤਰੀਕਾ ਚੁਣ ਸਕੋ ਅਤੇ ਭਰੋਸੇ ਨਾਲ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰ ਸਕੋ।",
	"business/accounting::accounting_s1":
		"ਆਸਾਨ ਤਰੀਕਾ: ਡਾਲਰਾਂ ਵਿੱਚ ਆਟੋ ਰੂਪਾਂਤਰਨ",
	"business/accounting::accounting_s3_c6":
		"ਅਤੇ ਬੱਸ। ਇਹ ਉਹੀ ਬੁਨਿਆਦੀ ਗਣਿਤ ਹੈ ਜੋ ਤੁਸੀਂ ਹੋਰ ਅਜਿਹੀਆਂ ਸੰਪਤੀਆਂ ਲਈ ਵਰਤਦੇ ਹੋ ਜਿਨ੍ਹਾਂ ਦੀ ਕੀਮਤ ਵਧਦੀ ਅਤੇ ਘਟਦੀ ਹੈ।",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — ਡਾਲਰਾਂ ਵਿੱਚ ਬਿਟਕੌਇਨ ਦੀ ਮੌਜੂਦਾ ਅਤੇ ਇਤਿਹਾਸਕ ਕੀਮਤ",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — ਕਾਰੋਬਾਰਾਂ ਲਈ ਬਿਟਕੌਇਨ ਲੇਖਾ",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Excel ਵਿੱਚ ਕ੍ਰਿਪਟੋ ਕੀਮਤਾਂ ਆਯਾਤ ਕਰਨਾ",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਵਪਾਰੀ ਜੋ ਸਵਾਲ ਆਮ ਤੌਰ 'ਤੇ ਪੁੱਛਦੇ ਹਨ ਉਨ੍ਹਾਂ ਦੇ ਸੰਖੇਪ ਜਵਾਬ — ਫ਼ੀਸਾਂ, ਨਿਪਟਾਰਾ, ਵਾਲਿਟ, ਚਾਰਜਬੈਕ, ਲਾਗਤਾਂ ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ।",
	"business/faq::faq_intro_c1":
		"ਜਵਾਬ ਦੇਖਣ ਲਈ ਹੇਠਾਂ ਕਿਸੇ ਵੀ ਸਵਾਲ 'ਤੇ ਕਲਿੱਕ ਕਰੋ। ਜਦੋਂ ਤੁਸੀਂ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਲਈ ਤਿਆਰ ਹੋਵੋ, ਪੰਨੇ ਦੇ ਹੇਠਾਂ ਦਿੱਤੇ ਕਾਰੋਬਾਰੀ ਟੂਲ ਤੁਹਾਨੂੰ ਕਦਮ-ਦਰ-ਕਦਮ ਮਾਰਗਦਰਸ਼ਨ ਦੇਣਗੇ।",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "ਲੇਖਾ",
	"business/index::biz_label_faq": "ਆਮ ਪੁੱਛੇ ਜਾਂਦੇ ਸਵਾਲ",
	"business/index::biz_label_maps": "ਵਪਾਰੀ ਨਕਸ਼ੇ",
	"business/index::biz_label_rewards": "ਪੁਰਸਕਾਰ",
	"business/index::biz_label_stickers": "ਸਟਿੱਕਰ",
	"business/index::biz_label_wallets": "ਵਾਲਿਟ",
	"business/index::biz_meta_description":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਵਿੱਚ ਘੱਟ ਫ਼ੀਸਾਂ, ਤੁਰੰਤ ਨਿਪਟਾਰੇ, ਬਿਨਾਂ ਚਾਰਜਬੈਕ ਅਤੇ ਹੋਰ ਜ਼ਿਆਦਾ ਗਾਹਕਾਂ ਤੱਕ ਪਹੁੰਚ ਨਾਲ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰੋ।",
	"business/index::business_hero_subtitle":
		"ਘੱਟ ਫ਼ੀਸਾਂ ਨਾਲ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰੋ, ਤੁਰੰਤ ਨਿਪਟਾਰਾ ਕਰੋ ਅਤੇ ਲੱਖਾਂ ਨਵੇਂ ਗਾਹਕਾਂ ਤੱਕ ਪਹੁੰਚੋ — ਬਿਨਾਂ ਇਕਰਾਰਨਾਮਿਆਂ ਜਾਂ ਛੁਪੀਆਂ ਲਾਗਤਾਂ ਦੇ।",
	"business/index::business_intro_c1":
		"ਬਿਟਕੌਇਨ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨੂੰ ਭੁਗਤਾਨ ਪਾਉਣ ਦਾ ਤੇਜ਼, ਸਸਤਾ ਅਤੇ ਨਿੱਜੀ ਤਰੀਕਾ ਦਿੰਦਾ ਹੈ। ਕੋਈ ਵਿਚੋਲਾ ਨਹੀਂ। ਕੋਈ ਚਾਰਜਬੈਕ ਨਹੀਂ। ਕੋਈ ਹੈਰਾਨਕੁਨ ਲਾਗਤ ਨਹੀਂ। ਪੈਸਾ ਸਕਿੰਟਾਂ ਵਿੱਚ, ਸਿੱਧੇ ਗਾਹਕ ਤੋਂ ਤੁਹਾਡੇ ਤੱਕ।",
	"business/index::business_intro_c2":
		"ਹੇਠਾਂ ਸੰਖੇਪ ਵਿੱਚ ਦੱਸਿਆ ਗਿਆ ਹੈ ਕਿ ਬਿਟਕੌਇਨ ਕਾਰੋਬਾਰ ਲਈ ਕਿਉਂ ਚੰਗਾ ਹੈ — ਅਤੇ ਹੇਠਾਂ ਅੱਜ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਜ਼ਰੂਰੀ ਸਾਰੇ ਟੂਲ।",
	"business/index::business_resources_heading":
		"ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਲਈ ਜੋ ਵੀ ਚਾਹੀਦਾ ਹੈ",
	"business/index::business_resources_intro":
		"ਇਨ੍ਹਾਂ ਸਰੋਤਾਂ ਨਾਲ ਆਪਣੀ ਰਫ਼ਤਾਰ ਨਾਲ ਕੰਮ ਕਰੋ। ਹਰ ਇੱਕ ਛੋਟੀ, ਅਮਲੀ ਗਾਈਡ ਹੈ।",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"ਸਾਨੂੰ ਆਪਣੇ ਕਾਰੋਬਾਰ ਬਾਰੇ ਦੱਸੋ",
	"business/maps::biz_maps_form_intro":
		"ਤੁਹਾਨੂੰ ਨਕਸ਼ੇ 'ਤੇ ਪਾਉਣ ਲਈ ਸਾਨੂੰ ਬੱਸ ਕੁਝ ਵੇਰਵੇ ਚਾਹੀਦੇ ਹਨ। ਪਤੇ ਦਾ ਡੇਟਾ ਸਿਰਫ਼ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨੂੰ ਵਪਾਰੀ ਨਕਸ਼ਿਆਂ 'ਤੇ ਭੇਜਣ ਲਈ ਜ਼ਰੂਰੀ ਸਮੇਂ ਤੱਕ ਰੱਖਿਆ ਜਾਂਦਾ ਹੈ।",
	"business/maps::biz_maps_hero_subtitle":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਨੂੰ BTC Map 'ਤੇ ਮੁਫ਼ਤ ਜੋੜੋ — ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਵਾਲੇ ਵਪਾਰੀਆਂ ਦੀ ਇੱਕ ਖੁੱਲ੍ਹੀ ਵਿਸ਼ਵਵਿਆਪੀ ਡਾਇਰੈਕਟਰੀ — ਤਾਂ ਜੋ ਸਥਾਨਕ ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾ ਤੁਹਾਨੂੰ ਲੱਭ ਸਕਣ ਅਤੇ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਵਿੱਚ ਬਿਟਕੌਇਨ ਖ਼ਰਚ ਕਰ ਸਕਣ।",
	"business/maps::biz_maps_hero_title":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਨੂੰ ਬਿਟਕੌਇਨ ਵਪਾਰੀ ਨਕਸ਼ਿਆਂ 'ਤੇ ਪਾਓ",
	"business/maps::biz_maps_intro_c1":
		"ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾ ਸਰਗਰਮੀ ਨਾਲ ਆਪਣਾ ਪੈਸਾ ਖ਼ਰਚਣ ਦੀਆਂ ਥਾਵਾਂ ਲੱਭ ਰਹੇ ਹਨ। ਨਕਸ਼ੇ 'ਤੇ ਦਿਸਣਾ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨੂੰ ਹਰ ਉਸ ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾ ਦੇ ਸਾਮ੍ਹਣੇ ਰੱਖਦਾ ਹੈ ਜੋ ਆਸਪਾਸ ਖਾਣ, ਖ਼ਰੀਦਦਾਰੀ ਜਾਂ ਠਹਿਰਨ ਦੀਆਂ ਥਾਵਾਂ ਲੱਭ ਰਿਹਾ ਹੈ — ਪੂਰੀ ਤਰ੍ਹਾਂ ਮੁਫ਼ਤ।",
	"business/maps::biz_maps_intro_c2":
		"ਹੇਠਾਂ ਦਿੱਤਾ ਛੋਟਾ ਫ਼ਾਰਮ ਭਰੋ ਅਤੇ ਅਸੀਂ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨੂੰ BTC Map ਅਤੇ ਹੋਰ ਬਿਟਕੌਇਨ ਵਪਾਰੀ ਨਕਸ਼ਿਆਂ 'ਤੇ ਭੇਜ ਦੇਵਾਂਗੇ।",
	"business/maps::biz_maps_meta_description":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਨੂੰ BTC Map ਅਤੇ ਹੋਰ ਬਿਟਕੌਇਨ ਵਪਾਰੀ ਨਕਸ਼ਿਆਂ 'ਤੇ ਮੁਫ਼ਤ ਜੋੜੋ ਤਾਂ ਜੋ ਸਥਾਨਕ ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾ ਤੁਹਾਨੂੰ ਲੱਭ ਸਕਣ।",
	"business/maps::biz_maps_placeholder_address": "ਗਲੀ ਦਾ ਪਤਾ",
	"business/maps::biz_maps_placeholder_category":
		"ਸ਼੍ਰੇਣੀ (ਜਿਵੇਂ ਰੈਸਟੋਰੈਂਟ, ਕੈਫ਼ੇ, ਹੋਟਲ)",
	"business/maps::biz_maps_placeholder_city": "ਸ਼ਹਿਰ",
	"business/maps::biz_maps_placeholder_country": "ਦੇਸ਼",
	"business/maps::biz_maps_placeholder_name": "ਕਾਰੋਬਾਰ ਦਾ ਨਾਮ",
	"business/maps::biz_maps_placeholder_region":
		"ਖੇਤਰ / ਸੂਬਾ / ਰਾਜ",
	"business/maps::biz_maps_placeholder_website": "ਵੈੱਬਸਾਈਟ (ਵਿਕਲਪਿਕ)",
	"business/maps::biz_maps_view_map_cta": "BTC Map ਦੇਖੋ",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "BTC Map ਦੇਖੋ",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਨੂੰ ਜਮ੍ਹਾਂ ਕਰਨ ਲਈ ਧੰਨਵਾਦ। ਅਸੀਂ ਜਲਦੀ ਹੀ ਤੁਹਾਨੂੰ ਬਿਟਕੌਇਨ ਵਪਾਰੀ ਨਕਸ਼ਿਆਂ 'ਤੇ ਪਾ ਦੇਵਾਂਗੇ।",
	"business/maps-success::biz_maps_success_hero_title":
		"ਬੇਨਤੀ ਮਿਲ ਗਈ 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"ਅਸੀਂ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨੂੰ 1-2 ਹਫ਼ਤਿਆਂ ਵਿੱਚ BTC Map ਅਤੇ ਹੋਰ ਬਿਟਕੌਇਨ ਵਪਾਰੀ ਡਾਇਰੈਕਟਰੀਆਂ 'ਤੇ ਜੋੜ ਦੇਵਾਂਗੇ। ਨਕਸ਼ੇ ਦੀ ਸਟੀਕਤਾ ਬਣਾਈ ਰੱਖਣ ਲਈ ਅਸੀਂ ਹਰ ਜਮ੍ਹਾਂ ਕੀਤੀ ਬੇਨਤੀ ਦੀ ਹੱਥੀਂ ਸਮੀਖਿਆ ਕਰਦੇ ਹਾਂ।",
	"business/maps-success::biz_maps_success_timeline_c2":
		"ਜਦੋਂ ਤੁਹਾਡੀ ਲਿਸਟਿੰਗ ਲਾਈਵ ਹੋ ਜਾਵੇਗੀ, ਸਥਾਨਕ ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਨੂੰ ਲੱਭਣਗੇ ਅਤੇ ਬਿਟਕੌਇਨ ਖ਼ਰਚਣ ਆਉਣਗੇ।",
	"business/maps-success::biz_maps_success_timeline_header":
		"ਅੱਗੇ ਕੀ ਹੋਵੇਗਾ",
	"business/maps-success::biz_maps_success_view_c1":
		"ਉਡੀਕ ਦੌਰਾਨ, BTC Map 'ਤੇ ਇੱਕ ਨਜ਼ਰ ਮਾਰੋ ਅਤੇ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਵਾਲੇ ਕਾਰੋਬਾਰਾਂ ਦਾ ਵਧਦਾ ਨੈੱਟਵਰਕ ਦੇਖੋ।",
	"business/maps-success::biz_maps_success_view_header":
		"ਦੇਖੋ ਤੁਸੀਂ ਕਿੱਥੇ ਦਿਸੋਗੇ",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"ਆਪਣੇ ਖ਼ੁਦ ਦੇ ਸਟਿੱਕਰ ਪ੍ਰਿੰਟ ਕਰਨ ਲਈ \"Bitcoin Accepted Here\" ਅੰਗਰੇਜ਼ੀ ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਡਾਊਨਲੋਡ ਕਰੋ।",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਆਪਣੇ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ ਪ੍ਰਿੰਟ ਕਰੋ ਤਾਂ ਜੋ ਤੁਹਾਡੇ ਗਾਹਕਾਂ ਨੂੰ ਪਤਾ ਲੱਗੇ ਕਿ ਤੁਸੀਂ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ।",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"\"Bitcoin Accepted Here\" ਅੰਗਰੇਜ਼ੀ ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਡਾਊਨਲੋਡ ਕਰੋ",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"ਆਪਣੀ ਭਾਸ਼ਾ ਵਿੱਚ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਦੀ ਬੇਨਤੀ ਕਰਨ ਲਈ ਧੰਨਵਾਦ।",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"ਬੇਨਤੀ ਮਿਲ ਗਈ 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"ਅਸੀਂ ਤੁਹਾਡੀਆਂ ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ 3-4 ਹਫ਼ਤਿਆਂ ਵਿੱਚ ਬਣਾ ਕੇ ਪਬਲਿਸ਼ ਕਰਾਂਗੇ। ਜਦੋਂ ਉਹ ਤਿਆਰ ਹੋਣਗੀਆਂ, ਤੁਸੀਂ ਉਨ੍ਹਾਂ ਨੂੰ ਸਾਡੇ ਸਟਿੱਕਰ ਫ਼ਾਈਲ ਪੰਨੇ ਤੋਂ ਪ੍ਰਿੰਟ ਕਰਨ ਲਈ ਮੁਫ਼ਤ ਡਾਊਨਲੋਡ ਕਰ ਸਕੋਗੇ।",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"ਅਸੀਂ ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਬੈਚਾਂ ਵਿੱਚ ਪਬਲਿਸ਼ ਕਰਦੇ ਹਾਂ, ਇਸ ਲਈ ਤੁਹਾਡੀ ਭਾਸ਼ਾ ਨੂੰ ਲਾਈਵ ਹੋਣ ਵਿੱਚ ਕੁਝ ਹਫ਼ਤੇ ਲੱਗ ਸਕਦੇ ਹਨ। ਤੁਹਾਡੇ ਸਬਰ ਲਈ ਧੰਨਵਾਦ!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"ਅੱਗੇ ਕੀ ਹੋਵੇਗਾ",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"ਥੋਕ ਵਿੱਚ ਆਰਡਰ ਕਰੋ",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"ਇੱਕ ਹੋਰ ਮੁਫ਼ਤ ਪੈਕ ਦੀ ਬੇਨਤੀ ਕਰੋ",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"ਤੁਹਾਨੂੰ ਆਪਣੇ ਮੁਫ਼ਤ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ 2-4 ਹਫ਼ਤਿਆਂ ਵਿੱਚ 3 ਸਟਿੱਕਰਾਂ ਵਾਲੇ ਇੱਕ ਸਾਦੇ ਚਿੱਟੇ ਲਿਫ਼ਾਫ਼ੇ ਵਿੱਚ ਮਿਲਣਗੇ।",
	"business/sticker-success::biz_sticker_success_hero_title":
		"ਤੁਹਾਡੇ ਸਟਿੱਕਰ ਰਾਹ ਵਿੱਚ ਹਨ 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"ਜੇ 3 ਸਟਿੱਕਰ ਤੁਹਾਡੇ ਕਾਰੋਬਾਰ ਲਈ ਕਾਫ਼ੀ ਨਹੀਂ ਹਨ, ਤਾਂ ਤੁਸੀਂ ਇੱਕ ਹੋਰ ਮੁਫ਼ਤ ਪੈਕ ਦੀ ਬੇਨਤੀ ਕਰ ਸਕਦੇ ਹੋ — ਜਾਂ ਉਸੇ ਪ੍ਰਿੰਟਰ ਤੋਂ ਥੋਕ ਵਿੱਚ ਆਰਡਰ ਕਰ ਸਕਦੇ ਹੋ ਜਿਸ ਨੂੰ ਅਸੀਂ ਵਰਤਦੇ ਹਾਂ।",
	"business/sticker-success::biz_sticker_success_more_header":
		"ਹੋਰ ਸਟਿੱਕਰ ਚਾਹੀਦੇ?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"ਮੁੱਖ ਪ੍ਰਵੇਸ਼ ਦੁਆਰ ਜਾਂ ਸ਼ੋਅਕੇਸ ਵਿੰਡੋ 'ਤੇ, ਤਾਂ ਜੋ ਗਾਹਕ ਅੰਦਰ ਆਉਣ ਤੋਂ ਪਹਿਲਾਂ ਦੇਖ ਸਕਣ",
	"business/sticker-success::biz_sticker_success_tip_2":
		"ਰਜਿਸਟਰ ਨੇੜੇ, ਭੁਗਤਾਨ ਟਰਮੀਨਲ ਜਾਂ ਜਿੱਥੇ ਵੀ ਗਾਹਕ ਭੁਗਤਾਨ ਕਰਦੇ ਹਨ",
	"business/sticker-success::biz_sticker_success_tip_3":
		"ਮੀਨੂ, ਮੁੱਲ ਸੂਚੀ ਜਾਂ ਟਿੱਪ ਜਾਰ 'ਤੇ",
	"business/sticker-success::biz_sticker_success_tip_4":
		"ਉਨ੍ਹਾਂ ਥਾਵਾਂ 'ਤੇ ਸਟਿੱਕਰ ਨਾ ਲਗਾਓ ਜੋ ਤੁਹਾਡੀਆਂ ਨਹੀਂ ਹਨ ਜਾਂ ਜਿੱਥੇ ਲਗਾਉਣ ਦੀ ਇਜਾਜ਼ਤ ਨਹੀਂ ਹੈ",
	"business/sticker-success::biz_sticker_success_tips_header":
		"ਸਟਿੱਕਰ ਲਗਾਉਣ ਦੀਆਂ ਚੰਗੀਆਂ ਥਾਵਾਂ",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"ਆਪਣੇ ਗਾਹਕਾਂ ਨੂੰ ਦੱਸੋ ਕਿ ਤੁਸੀਂ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਦੇ ਹੋ। ਆਪਣੀ ਥਾਂ 'ਤੇ ਲਗਾਉਣ ਲਈ ਮੁਫ਼ਤ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰਾਂ ਦੇ ਇੱਕ ਪੈਕ ਦੀ ਬੇਨਤੀ ਕਰੋ।",
	"business/stickers::biz_stickers_hero_title":
		"ਮੁਫ਼ਤ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ",
	"business/stickers::biz_stickers_intro_c1":
		"ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨਾ ਸਿਰਫ਼ ਅੱਧਾ ਕੰਮ ਹੈ — ਤੁਹਾਡੇ ਗਾਹਕਾਂ ਨੂੰ ਵੀ ਇਸ ਦਾ ਪਤਾ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ। ਇਹ ਛੋਟੇ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ ਮੁੱਖ ਪ੍ਰਵੇਸ਼ ਦੁਆਰ, ਰਜਿਸਟਰ, ਮੀਨੂ ਜਾਂ ਜਿੱਥੇ ਵੀ ਗਾਹਕ ਭੁਗਤਾਨ ਕਰਦੇ ਹਨ ਉੱਥੇ ਚਿਪਕਾਉਣ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤੇ ਗਏ ਹਨ।",
	"business/stickers::biz_stickers_intro_c2":
		"ਅਸੀਂ ਅਮਰੀਕਾ ਜਾਂ ਕੈਨੇਡਾ ਦੇ ਹਰ ਪਤੇ 'ਤੇ ਇੱਕ ਮੁਫ਼ਤ ਪੈਕ ਭੇਜਦੇ ਹਾਂ, ਜਾਂ ਤੁਸੀਂ ਦੁਨੀਆ ਵਿੱਚ ਕਿਤੇ ਵੀ ਖ਼ੁਦ ਆਪਣੇ ਸਟਿੱਕਰ ਪ੍ਰਿੰਟ ਕਰ ਸਕਦੇ ਹੋ।",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 ਕੈਨੇਡਾ — ਮੁਫ਼ਤ ਮੇਲ",
	"business/stickers::biz_stickers_option_print":
		"🌍 ਵਿਸ਼ਵਵਿਆਪੀ — ਖ਼ੁਦ ਪ੍ਰਿੰਟ ਕਰੋ",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 ਅਮਰੀਕਾ — ਮੁਫ਼ਤ ਮੇਲ",
	"business/stickers::biz_stickers_placeholder_translation1":
		"\"Bitcoin Accepted Here\" ਵਾਕ ਦਾ ਅਨੁਵਾਦ",
	"business/stickers::biz_stickers_placeholder_translation2":
		"\"Scan to learn why Bitcoin is good for business.\" ਵਾਕ ਦਾ ਅਨੁਵਾਦ",
	"business/stickers::biz_stickers_print_c1":
		"ਦੁਨੀਆ ਵਿੱਚ ਜਿੱਥੇ ਵੀ ਤੁਸੀਂ ਰਹਿੰਦੇ ਹੋ, ਤੁਸੀਂ ਖ਼ੁਦ ਆਪਣੇ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ ਪ੍ਰਿੰਟ ਕਰ ਸਕਦੇ ਹੋ। ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਅਤੇ ਪ੍ਰਿੰਟਿੰਗ ਨਿਰਦੇਸ਼ ਡਾਊਨਲੋਡ ਕਰਨ ਲਈ ਹੇਠਾਂ ਆਪਣੀ ਭਾਸ਼ਾ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।",
	"business/stickers::biz_stickers_print_header":
		"ਆਪਣੀਆਂ ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਖ਼ੁਦ ਪ੍ਰਿੰਟ ਕਰੋ",
	"business/stickers::biz_stickers_request_c1":
		"ਆਪਣੀ ਸਥਾਨਕ ਭਾਸ਼ਾ ਵਿੱਚ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਦੀ ਬੇਨਤੀ ਕਰਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤਾ ਫ਼ਾਰਮ ਭਰੋ। ਤਿਆਰ ਹੋਣ 'ਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਦੱਸਾਂਗੇ।",
	"business/stickers::biz_stickers_request_header":
		"ਆਪਣੀ ਭਾਸ਼ਾ ਨਹੀਂ ਦਿਸ ਰਹੀ?",
	"business/stickers::biz_stickers_step_description":
		"ਅਸੀਂ ਅਮਰੀਕਾ ਅਤੇ ਕੈਨੇਡਾ ਦੇ ਪਤਿਆਂ 'ਤੇ ਮੁਫ਼ਤ ਪੈਕ ਭੇਜਦੇ ਹਾਂ। ਦੁਨੀਆ ਦੇ ਬਾਕੀ ਹਿੱਸਿਆਂ ਵਿੱਚ ਤੁਸੀਂ ਆਪਣੇ ਸਟਿੱਕਰ ਖ਼ੁਦ ਪ੍ਰਿੰਟ ਕਰ ਸਕਦੇ ਹੋ।",
	"business/stickers::biz_stickers_step_header":
		"ਤੁਸੀਂ ਆਪਣੇ ਸਟਿੱਕਰ ਕਿਵੇਂ ਚਾਹੁੰਦੇ ਹੋ?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"ਸਾਰੇ ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਇਕੱਠੇ ਕੰਮ ਕਰਦੇ ਹਨ — ਆਪਣੇ ਕਾਰੋਬਾਰ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਚੁਣੋ। ਮੁਫ਼ਤ, ਤੁਰੰਤ ਨਿਪਟਾਰਾ, ਕੋਈ ਚਾਰਜਬੈਕ ਨਹੀਂ।",
	"business/wallets::sources_breez_business":
		"Breez — ਸਿਰਫ਼ ਬਿਟਕੌਇਨ Lightning ਵਾਲਿਟ",
	"business/wallets::sources_ibex":
		"IBEX — Lightning ਭੁਗਤਾਨ ਬੁਨਿਆਦੀ ਢਾਂਚਾ",
	"business/wallets::sources_opennode":
		"OpenNode — ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਪ੍ਰੋਸੈਸਰ",
	"business/wallets::sources_square":
		"Square — ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰੋ",
	"business/wallets::sources_zaprite":
		"Zaprite — ਕਾਰੋਬਾਰਾਂ ਲਈ ਬਿਟਕੌਇਨ ਲੇਖਾ",
	"business/wallets::wallets_hero_subtitle":
		"ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਮੁਫ਼ਤ ਹਨ। ਆਪਣੇ ਕਾਰੋਬਾਰ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਚੁਣੋ — ਆਮ੍ਹਣੇ-ਸਾਮ੍ਹਣੇ, ਆਨਲਾਈਨ ਜਾਂ ਇਨਵੌਇਸ ਰਾਹੀਂ — ਅਤੇ ਮਿੰਟਾਂ ਵਿੱਚ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰੋ।",
	"business/wallets::wallets_section_invoice":
		"ਗਾਹਕਾਂ ਨੂੰ ਇਨਵੌਇਸ ਭੇਜਣ ਵਾਲੇ ਕਾਰੋਬਾਰਾਂ ਲਈ ਵਾਲਿਟ",
	"business/wallets::wallets_section_invoice_intro":
		"ਜੇ ਤੁਸੀਂ ਆਪਣੇ ਗਾਹਕਾਂ ਨੂੰ ਇਨਵੌਇਸ ਭੇਜਦੇ ਹੋ (ਸਲਾਹ-ਮਸ਼ਵਰਾ, ਫ਼ਰੀਲਾਂਸ, B2B ਸੇਵਾਵਾਂ), ਤਾਂ ਅਜਿਹਾ ਵਾਲਿਟ ਵਰਤੋ ਜੋ ਇਨਵੌਇਸ ਮਾਹੌਲ ਲਈ ਬਣਿਆ ਹੋਵੇ। ਗਾਹਕ ਕੁਝ ਕਲਿੱਕਾਂ ਵਿੱਚ ਬਿਟਕੌਇਨ ਇਨਵੌਇਸ ਦਾ ਭੁਗਤਾਨ ਕਰਦਾ ਹੈ।",
	"business/wallets::wallets_section_multiple":
		"ਕਈ ਕਾਮਿਆਂ ਵਾਲੇ ਕਾਰੋਬਾਰਾਂ ਲਈ ਵਾਲਿਟ",
	"business/wallets::wallets_section_multiple_intro":
		"ਜੇ ਤੁਹਾਡੀ ਟੀਮ ਕਾਊਂਟਰ 'ਤੇ ਭੁਗਤਾਨ ਲੈਂਦੀ ਹੈ, ਤਾਂ ਅਜਿਹਾ ਵਾਲਿਟ ਚੁਣੋ ਜੋ ਕਈ ਕਾਮਿਆਂ ਦੇ ਲੌਗਇਨ ਦਾ ਸਮਰਥਨ ਕਰੇ — ਤਾਂ ਜੋ ਹਰ ਕਾਮੇ ਦਾ ਆਪਣਾ ਕੋਡ ਹੋਵੇ ਅਤੇ ਤੁਸੀਂ ਟ੍ਰੈਕ ਕਰ ਸਕੋ ਕਿ ਕਿਸ ਨੇ ਕਿਹੜਾ ਭੁਗਤਾਨ ਲਿਆ।",
	"business/wallets::wallets_section_online":
		"ਆਨਲਾਈਨ ਕਾਰੋਬਾਰਾਂ ਲਈ ਵਾਲਿਟ",
	"business/wallets::wallets_section_online_intro":
		"ਕੀ ਤੁਸੀਂ ਆਨਲਾਈਨ ਵੇਚਦੇ ਹੋ? ਇਹ ਵਾਲਿਟ ਤੁਹਾਡੇ ਆਨਲਾਈਨ ਸਟੋਰ ਨਾਲ ਜੁੜਦੇ ਹਨ ਅਤੇ ਦੁਨੀਆ ਭਰ ਦੇ ਗਾਹਕਾਂ ਤੋਂ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਦੇ ਹਨ — ਕੋਈ ਚਾਰਜਬੈਕ ਨਹੀਂ ਅਤੇ ਕਿਸੇ ਮਰਚੈਂਟ ਖਾਤੇ ਦੀ ਲੋੜ ਨਹੀਂ।",
	"business/wallets::wallets_section_sole":
		"ਇਕੱਲੇ ਵਪਾਰੀਆਂ ਲਈ ਵਾਲਿਟ",
	"business/wallets::wallets_section_sole_intro":
		"ਜੇ ਤੁਸੀਂ ਇਕੱਲੇ ਦੁਕਾਨ, ਕੈਫ਼ੇ, ਸਟੂਡੀਓ ਜਾਂ ਸੇਵਾ ਚਲਾਉਂਦੇ ਹੋ, ਤਾਂ ਇਨ੍ਹਾਂ ਵਿੱਚੋਂ ਕੋਈ ਵੀ ਵਾਲਿਟ ਤੁਹਾਡੇ ਲਈ ਢੁਕਵਾਂ ਹੈ। ਚੁਣੋ ਕਿ ਬਿਟਕੌਇਨ ਰੱਖਣਾ ਹੈ ਜਾਂ ਹਰ ਭੁਗਤਾਨ ਦਾ ਕੁਝ ਹਿੱਸਾ ਆਪਣੇ ਆਪ ਸਥਾਨਕ ਮੁਦਰਾ ਵਿੱਚ ਬਦਲਣਾ ਹੈ।",
	"business/wallets::wallets_strike_note":
		"Strike Business ਤੁਹਾਨੂੰ ਬਿਨਾਂ ਫ਼ੀਸ ਅਤੇ ਤੁਰੰਤ ਨਿਪਟਾਰੇ ਨਾਲ ਬਿਟਕੌਇਨ ਅਤੇ Lightning ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨ ਦਿੰਦਾ ਹੈ। ਆਮ੍ਹਣੇ-ਸਾਮ੍ਹਣੇ, ਆਨਲਾਈਨ ਅਤੇ ਇਨਵੌਇਸ ਭੁਗਤਾਨਾਂ ਦਾ ਸਮਰਥਨ ਕਰਦਾ ਹੈ, ਸਥਾਨਕ ਮੁਦਰਾ ਵਿੱਚ ਆਟੋ ਰੂਪਾਂਤਰਨ ਵਿਕਲਪ ਨਾਲ।",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"ਇੱਥੇ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕੀਤਾ ਜਾਂਦਾ ਹੈ",
	"business/why::why_good_for_you":
		"ਬਿਟਕੌਇਨ ਤੁਹਾਡੇ ਲਈ ਵੀ ਕਿਉਂ ਚੰਗਾ ਹੈ",
	"business/why::why_learn_more_lowercase": "ਹੋਰ ਜਾਣੋ ←",
	"business/why::why_s1_c1":
		"ਮਹਿੰਗਾਈ ਉਦੋਂ ਹੁੰਦੀ ਹੈ ਜਦੋਂ ਹੋਰ ਪੈਸਾ ਛਾਪਿਆ ਜਾਂਦਾ ਹੈ ਜਾਂ ਜ਼ੀਰੋ ਤੋਂ ਬਣਾਇਆ ਜਾਂਦਾ ਹੈ। ਇਹ ਤੁਹਾਡੀ ਜੇਬ ਵਿੱਚ ਰੱਖੇ ਪੈਸੇ ਦੀ ਕੀਮਤ ਸਮੇਂ ਨਾਲ ਘਟਾਉਂਦੀ ਹੈ — ਇਸੇ ਲਈ ਕੀਮਤਾਂ ਸਾਲ ਦਰ ਸਾਲ ਵਧਦੀਆਂ ਹਨ।",
	"business/why::why_s1_c2":
		"ਬਿਟਕੌਇਨ ਦੀ ਇੱਕ ਨਿਸ਼ਚਿਤ ਸਪਲਾਈ ਹੈ: 21 ਮਿਲੀਅਨ ਸਿੱਕੇ। ਕੋਈ ਸਰਕਾਰ, ਬੈਂਕ ਜਾਂ ਕੰਪਨੀ ਹੋਰ ਨਹੀਂ ਛਾਪ ਸਕਦੀ। ਤੁਹਾਡੀ ਬਿਟਕੌਇਨ ਵਿੱਚ ਬੱਚਤ ਸਮੇਂ ਨਾਲ ਆਪਣੀ ਕੀਮਤ ਬਣਾਈ ਰੱਖਦੀ ਹੈ, ਚੁੱਪਚਾਪ ਉਸ ਨੂੰ ਗੁਆਉਣ ਦੀ ਥਾਂ।",
	"business/why::why_s2_c1":
		"ਹਾਲ ਦੇ ਸਾਲਾਂ ਵਿੱਚ ਬਹੁਤ ਸਾਰੇ ਅਮਰੀਕੀ ਬੈਂਕ ਬੈਂਕ ਰਨ ਕਾਰਨ ਢਹਿ ਗਏ ਹਨ। ਜਦੋਂ ਬਹੁਤ ਸਾਰੇ ਗਾਹਕ ਇਕੱਠੇ ਆਪਣਾ ਪੈਸਾ ਕਢਵਾਉਣਾ ਚਾਹੁੰਦੇ ਹਨ, ਤਾਂ ਬੈਂਕਾਂ ਕੋਲ ਸਾਰਿਆਂ ਨੂੰ ਦੇਣ ਲਈ ਕਾਫ਼ੀ ਨਕਦੀ ਨਹੀਂ ਹੁੰਦੀ।",
	"business/why::why_s2_c2":
		"ਤੁਹਾਡਾ ਪੈਸਾ ਰੱਖਣ ਤੋਂ ਇਲਾਵਾ, ਬੈਂਕ ਉਸ ਦਾ ਵੱਡਾ ਹਿੱਸਾ ਉਧਾਰ ਦਿੰਦੇ ਅਤੇ ਨਿਵੇਸ਼ ਕਰਦੇ ਹਨ। ਜੇ ਇਹ ਨਿਵੇਸ਼ ਫ਼ੇਲ੍ਹ ਹੋ ਜਾਣ — ਜਾਂ ਡਿਪਾਜ਼ਿਟਰ ਭਰੋਸਾ ਗੁਆ ਦੇਣ — ਤਾਂ ਬੈਂਕ ਢਹਿ ਸਕਦਾ ਹੈ ਅਤੇ ਤੁਹਾਡੀ ਜਮ੍ਹਾਂ ਰਾਸ਼ੀ ਫ੍ਰੀਜ਼ ਜਾਂ ਗੁੰਮ ਹੋ ਸਕਦੀ ਹੈ।",
	"business/why::why_s2_c3":
		"ਬਿਟਕੌਇਨ ਨਾਲ ਤੁਸੀਂ ਆਪਣਾ ਪੈਸਾ ਸਿੱਧੇ ਆਪਣੇ ਵਾਲਿਟ ਵਿੱਚ ਰੱਖ ਸਕਦੇ ਹੋ। ਕੋਈ ਬੈਂਕ ਨਹੀਂ। ਕੋਈ ਵਿਚੋਲਾ ਨਹੀਂ। ਕੋਈ ਬੈਂਕ ਰਨ ਨਹੀਂ।",
	"business/why::why_s3_c1":
		"ਕ੍ਰੈਡਿਟ ਕਾਰਡਾਂ, PayPal ਜਾਂ ਪਰੰਪਰਾਗਤ ਬੈਂਕ ਖਾਤਿਆਂ ਦੇ ਉਲਟ, ਬਿਟਕੌਇਨ ਨੂੰ ਕਿਸੇ ਦੀ ਮਨਜ਼ੂਰੀ ਦੀ ਲੋੜ ਨਹੀਂ ਹੁੰਦੀ।",
	"business/why::why_s3_c2":
		"ਕੋਈ ਵੀ ਤੁਹਾਡਾ ਖਾਤਾ ਫ੍ਰੀਜ਼ ਨਹੀਂ ਕਰ ਸਕਦਾ, ਭੁਗਤਾਨ ਬਲਾਕ ਨਹੀਂ ਕਰ ਸਕਦਾ ਜਾਂ ਤੁਹਾਨੂੰ ਨੈੱਟਵਰਕ ਤੋਂ ਬਾਹਰ ਨਹੀਂ ਕਰ ਸਕਦਾ। ਇਹ ਇਤਿਹਾਸ ਦੀ ਪਹਿਲੀ ਵਿੱਤੀ ਪ੍ਰਣਾਲੀ ਹੈ ਜਿਸ ਦੀ ਤੁਸੀਂ ਸੈਂਸਰਸ਼ਿਪ ਜਾਂ ਜ਼ਬਤੀ ਦੇ ਡਰ ਤੋਂ ਬਿਨਾਂ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।",
	"business/why::why_s4_c1":
		"ਬਿਟਕੌਇਨ ਨੂੰ ਅਕਸਰ ਗ਼ਲਤ ਸਮਝਿਆ ਜਾਂਦਾ ਹੈ, ਪਰ ਇਹ ਦੁਨੀਆ ਵਿੱਚ ਚੁੱਪਚਾਪ ਬਹੁਤ ਸਾਰੇ ਚੰਗੇ ਕੰਮ ਕਰ ਰਿਹਾ ਹੈ।",
	"business/why::why_s4_c2":
		"ਇਸ ਨੇ ਮਨੁੱਖੀ ਅਧਿਕਾਰ ਕਾਰਕੁਨਾਂ ਨੂੰ ਆਪਣੀ ਆਜ਼ਾਦੀ ਲਈ ਲੜਨ ਵਿੱਚ ਮਦਦ ਕੀਤੀ, ਲੈਂਡਫਿਲਾਂ ਅਤੇ ਤੇਲ ਦੇ ਖੂਹਾਂ ਤੋਂ ਮੀਥੇਨ ਨਿਕਾਸ ਘਟਾਇਆ, ਬਿਜਲੀ ਦੇ ਗਰਿੱਡ ਸਥਿਰ ਕੀਤੇ ਅਤੇ ਰਾਸ਼ਟਰੀ ਪਾਰਕਾਂ ਵਰਗੀਆਂ ਜਨਤਕ ਸਹੂਲਤਾਂ ਨੂੰ ਫੰਡ ਕੀਤਾ।",
	"business/why::why_biz_s1":
		"ਘੱਟ ਫ਼ੀਸਾਂ, ਕਾਰੋਬਾਰ ਲਈ ਜ਼ਿਆਦਾ",
	"business/why::why_biz_s1_c1":
		"ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਬੈਂਕਾਂ ਅਤੇ ਕਾਰਡ ਕੰਪਨੀਆਂ ਨੂੰ ਪਾਸੇ ਕਰ ਦਿੰਦੇ ਹਨ ਜੋ ਹਰ ਵਿਕਰੀ ਤੋਂ 2-3% ਲੈਂਦੀਆਂ ਹਨ। ਕਾਰੋਬਾਰ ਤੁਹਾਡੇ ਭੁਗਤਾਨ ਦਾ ਜ਼ਿਆਦਾ ਹਿੱਸਾ ਰੱਖਦਾ ਹੈ — ਜਿਸ ਦਾ ਮਤਲਬ ਅਕਸਰ ਤੁਹਾਡੇ ਲਈ ਬਿਹਤਰ ਕੀਮਤਾਂ ਅਤੇ ਬਿਹਤਰ ਸੇਵਾ ਹੁੰਦੀ ਹੈ।",
	"business/why::why_biz_s2":
		"ਤੁਰੰਤ ਨਿਪਟਾਰਾ, ਕੋਈ ਚਾਰਜਬੈਕ ਨਹੀਂ",
	"business/why::why_biz_s2_c1":
		"ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਕਿੰਟਾਂ ਵਿੱਚ ਸਿੱਧੇ ਤੁਹਾਡੇ ਵਾਲਿਟ ਤੋਂ ਕਾਰੋਬਾਰ ਤੱਕ ਨਿਪਟ ਜਾਂਦੇ ਹਨ। ਬੈਂਕ ਦੇ ਪੈਸਾ ਜਾਰੀ ਕਰਨ ਲਈ ਕਈ ਦਿਨ ਉਡੀਕਣ ਦੀ ਲੋੜ ਨਹੀਂ, ਅਤੇ ਕੋਈ ਮਹਿੰਗੇ ਚਾਰਜਬੈਕ ਵਿਵਾਦ ਨਹੀਂ — ਜਿਸ ਦਾ ਮਤਲਬ ਹੈ ਕਿ ਕਾਰੋਬਾਰ ਧੋਖਾਧੜੀ ਨਾਲ ਲੜਨ ਦੀ ਥਾਂ ਤੁਹਾਨੂੰ ਸੇਵਾ ਦੇਣ 'ਤੇ ਧਿਆਨ ਕੇਂਦਰਿਤ ਕਰ ਸਕਦਾ ਹੈ।",
	"business/why::why_biz_s3":
		"ਮੁਫ਼ਤ ਸਵੀਕਾਰਤਾ, ਸਾਰਿਆਂ ਲਈ ਖੁੱਲ੍ਹੀ",
	"business/why::why_biz_s3_c1":
		"ਕਾਰੋਬਾਰ ਵਿੱਚ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਲਈ ਕੋਈ ਇਕਰਾਰਨਾਮਾ, ਮਾਸਿਕ ਲਾਗਤ ਜਾਂ ਸੈੱਟਅੱਪ ਫ਼ੀਸ ਨਹੀਂ ਚਾਹੀਦੀ। ਅਤੇ ਦੁਨੀਆ ਭਰ ਦੇ ਲੱਖਾਂ ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾ ਸਰਗਰਮੀ ਨਾਲ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਵਾਲੇ ਵਪਾਰੀਆਂ ਨੂੰ ਲੱਭ ਰਹੇ ਹਨ — ਜੋ ਕਾਰੋਬਾਰ ਨੂੰ ਨਵੇਂ ਗਾਹਕਾਂ ਦੇ ਸਾਮ੍ਹਣੇ ਮੁਫ਼ਤ ਪੇਸ਼ ਕਰਦਾ ਹੈ।",
	"business/why::why_business_cta_intro":
		"ਕੀ ਤੁਹਾਡਾ ਕਾਰੋਬਾਰ ਹੈ ਅਤੇ ਤੁਸੀਂ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ?",
	"business/why::why_business_cta_link":
		"ਦੇਖੋ ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ ←",
	"business/why::why_for_business":
		"ਬਿਟਕੌਇਨ ਇਸ ਕਾਰੋਬਾਰ ਲਈ ਕਿਉਂ ਚੰਗਾ ਹੈ",
	"business/why::why_for_business_intro":
		"ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਕੇ, ਇਹ ਕਾਰੋਬਾਰ ਹਰ ਵਿਕਰੀ ਤੋਂ ਜ਼ਿਆਦਾ ਰੱਖਦਾ ਹੈ, ਬਿਨਾਂ ਚਾਰਜਬੈਕਾਂ ਦੇ ਤੁਰੰਤ ਭੁਗਤਾਨ ਪਾਉਂਦਾ ਹੈ ਅਤੇ ਬਿਟਕੌਇਨ ਉਪਭੋਗਤਾਵਾਂ ਦੇ ਵਿਸ਼ਵਵਿਆਪੀ ਦਰਸ਼ਕਾਂ ਤੱਕ ਪਹੁੰਚਦਾ ਹੈ — ਬਿਨਾਂ ਇਕਰਾਰਨਾਮਿਆਂ ਜਾਂ ਮਾਸਿਕ ਲਾਗਤਾਂ ਦੇ।",
	"business/why::why_good_for_you_intro":
		"ਬਿਟਕੌਇਨ ਸਿਰਫ਼ ਕਾਊਂਟਰ 'ਤੇ ਚੰਗਾ ਨਹੀਂ ਹੈ — ਇਹ ਇੱਕ ਬਿਹਤਰ ਕਿਸਮ ਦਾ ਪੈਸਾ ਹੈ ਜੋ ਤੁਹਾਡੀ ਬੱਚਤ, ਨਿੱਜਤਾ ਅਤੇ ਲੈਣ-ਦੇਣ ਦੀ ਆਜ਼ਾਦੀ ਦੀ ਰੱਖਿਆ ਕਰਦਾ ਹੈ। ਇਹ ਰਿਹਾ ਇੱਕ ਤੁਰੰਤ ਸਾਰ।",
	"business/why::why_hero_subtitle":
		"ਤੁਸੀਂ ਇੱਕ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ ਸਕੈਨ ਕੀਤਾ। ਇਹ ਕਿਉਂ ਇੱਕ ਚੰਗੀ ਖ਼ਬਰ ਹੈ — ਇਸ ਕਾਰੋਬਾਰ ਅਤੇ ਤੁਹਾਡੇ ਲਈ।",
	"business/why::why_intro_c1":
		"ਤੁਸੀਂ ਜਿਸ ਕਾਰੋਬਾਰ ਵਿੱਚ ਹੋ, ਉਹ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਦਾ ਹੈ — ਇੱਕ ਆਧੁਨਿਕ, ਓਪਨ-ਸੋਰਸ ਭੁਗਤਾਨ ਨੈੱਟਵਰਕ ਜਿਸ ਦੀ ਦੁਨੀਆ ਭਰ ਵਿੱਚ ਕੋਈ ਵੀ ਬਿਨਾਂ ਬੈਂਕਾਂ ਅਤੇ ਵਿਚੋਲਿਆਂ ਦੇ ਹਿੱਸਾ ਲੈਣ ਦੇ ਵਰਤੋਂ ਕਰ ਸਕਦਾ ਹੈ।",
	"business/why::why_intro_c2":
		"ਹੇਠਾਂ ਸੰਖੇਪ ਵਿੱਚ ਦੱਸਿਆ ਗਿਆ ਹੈ ਕਿ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨਾ ਇਸ ਕਾਰੋਬਾਰ ਲਈ ਕਿਉਂ ਚੰਗਾ ਹੈ, ਨਾਲ ਹੀ ਗਾਹਕ ਵਜੋਂ ਬਿਟਕੌਇਨ ਦੀ ਵਰਤੋਂ ਕਰਨਾ ਤੁਹਾਡੇ ਲਈ ਕਿਉਂ ਚੰਗਾ ਹੈ।",
	"business/why::why_next_business_label": "ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰੋ",
	"business/why::why_next_business_title":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਵਿੱਚ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰੋ",
	"business/why::why_next_buy_label": "ਬਿਟਕੌਇਨ ਖ਼ਰੀਦੋ",
	"business/why::why_next_buy_title": "ਆਪਣਾ ਪਹਿਲਾ ਬਿਟਕੌਇਨ ਖ਼ਰੀਦੋ",
	"business/why::why_next_learn_label": "ਹੋਰ ਜਾਣੋ",
	"business/why::why_next_learn_title": "ਬਿਟਕੌਇਨ ਬਾਰੇ ਹੋਰ ਜਾਣੋ",
	"business/why::why_next_wallet_label": "ਵਾਲਿਟ ਲਓ",
	"business/why::why_next_wallet_title":
		"ਆਪਣਾ ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਲਓ",
	"business/why::why_whats_next_heading": "ਅੱਗੇ ਕਿੱਥੇ?",
	"business/why::why_whats_next_intro":
		"ਜੇ ਇਹ ਤੁਹਾਡੀ ਪਹਿਲੀ ਵਾਰ ਹੈ ਕਿ ਤੁਸੀਂ ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ ਸਕੈਨ ਕਰ ਰਹੇ ਹੋ, ਤਾਂ ਇਹ ਸਭ ਤੋਂ ਲਾਭਦਾਇਕ ਥਾਵਾਂ ਹਨ ਜਿੱਥੇ ਤੁਸੀਂ ਜਾ ਸਕਦੇ ਹੋ।",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "ਪੀਅਰ-ਟੂ-ਪੀਅਰ (ਸਿੱਧੇ ਉਪਭੋਗਤਾਵਾਂ ਵਿਚਕਾਰ)",
	"buy::buy_bitcoin_guide": "ਬਿਟਕੌਇਨ ਕਿਵੇਂ ਖ਼ਰੀਦਣਾ ਹੈ",
	"buy::buy_step_1_header": "ਆਪਣਾ ਦੇਸ਼ ਚੁਣੋ",
	"buy::buy_step_2_header": "ਆਪਣਾ ਭੁਗਤਾਨ ਤਰੀਕਾ ਚੁਣੋ",
	"buy::buy_step_3_header": "ਤੁਹਾਡੇ ਖ਼ਰੀਦ ਵਿਕਲਪ",
	"buy::buy_step_4_header": "ਆਪਣਾ ਬਿਟਕੌਇਨ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਰੱਖੋ",
	"buy::buy_header_subtitle":
		"ਆਪਣਾ ਪਹਿਲਾ ਬਿਟਕੌਇਨ ਖ਼ਰੀਦਣ ਲਈ ਸਰਲ ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡ।",
	"buy::buy_howto_name": "ਬਿਟਕੌਇਨ ਕਿਵੇਂ ਖ਼ਰੀਦਣਾ ਹੈ",
	"buy::buy_meta_description":
		"ਸਾਡੀ ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡ ਨਾਲ ਬਿਟਕੌਇਨ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਖ਼ਰੀਦਣਾ ਸਿੱਖੋ। ਆਪਣੇ ਲਈ ਸਭ ਤੋਂ ਵਧੀਆ ਖ਼ਰੀਦ ਵਿਕਲਪ ਪਾਉਣ ਲਈ ਆਪਣਾ ਦੇਸ਼ ਅਤੇ ਭੁਗਤਾਨ ਤਰੀਕਾ ਚੁਣੋ।",
	"buy::buy_step_1_eyebrow": "ਕਦਮ 1",
	"buy::buy_step_2_eyebrow": "ਕਦਮ 2",
	"buy::buy_step_3_eyebrow": "ਕਦਮ 3",
	"buy::buy_step_4_eyebrow": "ਕਦਮ 4",
	"buy::buy_storage_cta_label": "ਅਗਲਾ ਕਦਮ",
	"buy::sources_bisq":
		"Bisq — ਵਿਕੇਂਦਰੀਕ੍ਰਿਤ ਪੀਅਰ-ਟੂ-ਪੀਅਰ ਬਿਟਕੌਇਨ ਐਕਸਚੇਂਜ",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — ਬਿਟਕੌਇਨ ATM ਦੀ ਵਿਸ਼ਵਵਿਆਪੀ ਡਾਇਰੈਕਟਰੀ",
	"buy::sources_kraken": "Kraken — ਪ੍ਰਸਿੱਧ ਬਿਟਕੌਇਨ ਐਕਸਚੇਂਜ",
	"buy::sources_relai":
		"Relai — ਸਵਿਸ ਸੈਲਫ਼-ਕਸਟਡੀ ਬਿਟਕੌਇਨ ਐਪ",
	"buy::sources_river":
		"River — ਸਿਰਫ਼ ਬਿਟਕੌਇਨ ਖ਼ਰੀਦੋ, ਮਾਈਨ ਅਤੇ ਰੱਖੋ",
	"buy::sources_strike_lightning":
		"Strike — Lightning Network ਸਮਰਥਨ ਨਾਲ ਬਿਟਕੌਇਨ ਖ਼ਰੀਦੋ",
	"buy::sources_swan":
		"Swan Bitcoin — ਸਿਰਫ਼ ਬਿਟਕੌਇਨ ਡਾਲਰ-ਕੌਸਟ ਔਸਤਨ (DCA)",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "ਭਾਸ਼ਾ ਜੋੜੋ",
	"common::common_next_buy_bitcoin": "ਬਿਟਕੌਇਨ ਖ਼ਰੀਦੋ",
	"common::common_next_buy_bitcoin_desc":
		"ਬਿਟਕੌਇਨ ਸੁਰੱਖਿਅਤ ਢੰਗ ਨਾਲ ਖ਼ਰੀਦਣਾ ਸਿੱਖੋ",
	"common::common_next_calculate": "ਆਪਣੀ ਮਹਿੰਗਾਈ ਦੀ ਗਣਨਾ ਕਰੋ",
	"common::common_next_calculate_desc":
		"ਦੇਖੋ ਕਿ ਮਹਿੰਗਾਈ ਸਮੇਂ ਨਾਲ ਤੁਹਾਡੀ ਤਨਖ਼ਾਹ ਨੂੰ ਕਿਵੇਂ ਪ੍ਰਭਾਵਿਤ ਕਰਦੀ ਹੈ",
	"common::common_next_get_wallet": "ਵਾਲਿਟ ਲਓ",
	"common::common_next_get_wallet_desc":
		"ਆਪਣਾ ਪਹਿਲਾ ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਲਓ — ਇਹ ਮੁਫ਼ਤ ਹੈ",
	"common::common_next_keep_learning": "ਸਿੱਖਦੇ ਰਹੋ",
	"common::common_next_keep_learning_desc":
		"ਦੇਖੋ ਕਿ ਬਿਟਕੌਇਨ ਕਿਵੇਂ ਦੁਨੀਆ ਨੂੰ ਬਿਹਤਰ ਬਣਾ ਰਿਹਾ ਹੈ",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — ਖਪਤਕਾਰ ਮੁੱਲ ਸੂਚਕਾਂਕ (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — ਮਨੀ ਸਪਲਾਈ (ਸ਼੍ਰੇਣੀ ਸੂਚਕਾਂਕ)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — \"ਕੀ ਟ੍ਰੇਜ਼ਰੀ ਨਿਲਾਮੀ ਫ਼ੇਲ੍ਹ ਹੋ ਸਕਦੀ ਹੈ?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "ਅੱਗੇ ਕੀ?",
	"common::common_sticker_files_mission_5": "ਇੱਕ ਪੈਕ ਦੀ ਬੇਨਤੀ ਕਰੋ",
	"common::common_site_tagline": "ਸਾਰਿਆਂ ਲਈ ਬਿਟਕੌਇਨ ਸਿੱਖਿਆ।",
	"common::common_source_btc_map":
		"BTC Map — ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰਨ ਵਾਲੇ ਵਪਾਰੀਆਂ ਦੀ ਵਿਸ਼ਵਵਿਆਪੀ ਡਾਇਰੈਕਟਰੀ",
	"common::common_source_btcpayserver":
		"BTCPay Server — ਸੈਲਫ਼-ਹੋਸਟਡ ਲਈ ਮੁਫ਼ਤ, ਓਪਨ-ਸੋਰਸ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਪ੍ਰੋਸੈਸਰ",
	"common::common_source_oshi":
		"Oshi — ਵਪਾਰੀਆਂ ਲਈ ਬਿਟਕੌਇਨ ਪੁਰਸਕਾਰ ਪਲੇਟਫ਼ਾਰਮ",
	"common::common_source_strike_business":
		"Strike — ਕਾਰੋਬਾਰਾਂ ਲਈ ਬਿਟਕੌਇਨ ਅਤੇ Lightning ਭੁਗਤਾਨ",
	"common::common_sources_group_bitcoin": "ਬਿਟਕੌਇਨ ਡੇਟਾ",
	"common::common_sources_group_cpi":
		"ਮਹਿੰਗਾਈ / CPI",
	"common::common_sources_group_debt": "ਸਰਕਾਰੀ ਕਰਜ਼ਾ",
	"common::common_sources_group_money": "ਮਨੀ ਸਪਲਾਈ ਡੇਟਾ",
	"common::common_sources_group_stories": "ਅਸਲੀ ਉਦਾਹਰਨਾਂ",
	"common::common_sticker_files_mission_6":
		"ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਮੁਫ਼ਤ ਸਟਿੱਕਰ।",
	"common::common_sticker_files_next_flyers_label": "ਫਲਾਇਰ",
	"common::common_sticker_files_next_flyers_title":
		"ਬਿਟਕੌਇਨ ਫਲਾਇਰ ਪ੍ਰਿੰਟ ਕਰੋ",
	"common::common_sticker_files_next_languages_label":
		"ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ",
	"common::common_sticker_files_next_languages_title":
		"ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਦੇਖੋ",
	"common::common_sticker_files_print_these":
		"ਇਨ੍ਹਾਂ ਨੂੰ ਇੱਕ ਕਲਿੱਕ ਨਾਲ ਪ੍ਰਿੰਟ ਕਰੋ",
	"common::common_sticker_name_bdhi_black":
		"\"Bitcoin Doesn\u2019t Have Inflation\" ਸਟਿੱਕਰ (ਕਾਲਾ)",
	"common::common_sticker_name_bdhi_orange":
		"\"Bitcoin Doesn\u2019t Have Inflation\" ਸਟਿੱਕਰ (ਸੰਤਰੀ)",
	"common::common_sticker_name_caution":
		"\"Caution! Melting Ice Cube\" ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ",
	"common::common_sticker_name_cure_inflation":
		"\"Cure Inflation\" ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ",
	"common::common_sticker_name_danger":
		"\"Danger! Inflation Ahead\" ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ",
	"common::common_sticker_name_fix":
		"\"Fix The Money, Fix The World\" ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ",
	"common::common_sticker_name_got_inflation":
		"\"Got Inflation?\" ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ",
	"common::common_sticker_name_study":
		"\"Study Bitcoin\" ਸਟਿੱਕਰ",
	"common::common_sticker_name_warning":
		"\"Warning! Inflation is Stealing Your Savings\" ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ",
	"common::common_sticker_name_what_if":
		"\"What if your money didn\u2019t have inflation?\" ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ",
	"common::common_sticker_tips_heading": "ਸਟਿੱਕਰ ਟਿੱਪਸ",
	"common::common_sticker_tips_intro":
		"ਆਪਣੇ ਸਟਿੱਕਰ ਪ੍ਰਿੰਟ ਕਰਨ ਤੋਂ ਬਾਅਦ, ਉਨ੍ਹਾਂ ਨੂੰ ਉੱਥੇ ਲਗਾਓ ਜਿੱਥੇ ਲੋਕ ਦੇਖਣਗੇ! ਚੰਗੀਆਂ ਥਾਵਾਂ:",
	"common::common_sticker_tips_list_1":
		"ਜਨਤਕ ਥਾਵਾਂ ਜਿੱਥੇ ਲੋਕ ਉਨ੍ਹਾਂ ਨੂੰ ਦੇਖਣਗੇ",
	"common::common_sticker_tips_list_2":
		"ਅਜਿਹੀਆਂ ਥਾਵਾਂ ਜਿੱਥੇ ਉਹ ਤੁਰੰਤ ਨਹੀਂ ਹਟਾਏ ਜਾਣਗੇ (ਸਟਿੱਕਰ ਸਥਾਈ ਨੁਕਸਾਨ ਨਹੀਂ ਕਰਦੇ)",
	"common::common_sticker_tips_list_3":
		"ਅਜਿਹੀਆਂ ਸਤਹਾਂ ਜਿਨ੍ਹਾਂ 'ਤੇ ਉਹ ਚੰਗੀ ਤਰ੍ਹਾਂ ਚਿਪਕਣ (ਧਾਤ, ਪਲਾਸਟਿਕ, ਕੱਚ)",
	"common::common_sticker_tips_list_4":
		"ਨਿੱਜੀ ਜਾਇਦਾਦ, ਸੜਕ ਦੇ ਸੰਕੇਤਾਂ, ATM ਜਾਂ ਈਂਧਨ ਪੰਪ 'ਤੇ ਨਾ ਲਗਾਓ",
	"common::common_stickers_printer_prefix": "ਅਸੀਂ ਵਰਤਦੇ ਹਾਂ",
	"common::common_stickers_printer_suffix":
		"ਪਰ ਤੁਸੀਂ ਕਿਸੇ ਵੀ ਸਟਿੱਕਰ ਪ੍ਰਿੰਟਰ ਦੀ ਵਰਤੋਂ ਕਰ ਸਕਦੇ ਹੋ।",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — ਸਾਰੇ ਸ਼ਹਿਰੀ ਖਪਤਕਾਰਾਂ ਲਈ ਖਪਤਕਾਰ ਮੁੱਲ ਸੂਚਕਾਂਕ",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 ਮਨੀ ਸਪਲਾਈ",
	"compound-inflation-calculator::cic_calculator_heading":
		"ਆਪਣੀ ਮਹਿੰਗਾਈ ਦਾ ਫ਼ਰਕ ਕੱਢੋ",
	"compound-inflation-calculator::cic_cta_label": "ਅਗਲਾ ਕਦਮ",
	"compound-inflation-calculator::cic_hero_subtitle":
		"ਜਾਣੋ ਮਹਿੰਗਾਈ ਦੀ ਰਫ਼ਤਾਰ ਨਾਲ ਕਦਮ ਮਿਲਾਉਣ ਲਈ ਤੁਹਾਡੀ ਤਨਖ਼ਾਹ ਨੂੰ ਕਿੰਨਾ ਵਧਣਾ ਚਾਹੀਦਾ ਹੈ।",
	"compound-inflation-calculator::cic_next_explore_topics":
		"ਹੋਰ ਵਿਸ਼ੇ ਖੋਜੋ",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"ਦੇਖੋ ਬਿਟਕੌਇਨ ਦਾ ਪੈਸੇ, ਆਜ਼ਾਦੀ, ਊਰਜਾ ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ ਨਾਲ ਕੀ ਨਾਤਾ ਹੈ।",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"ਮਹਿੰਗਾਈ ਕਿਵੇਂ ਕੰਮ ਕਰਦੀ ਹੈ, ਸਿੱਖੋ",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"ਇਨ੍ਹਾਂ ਬਿਟਕੌਇਨ ਫਲਾਇਰਾਂ ਨੂੰ ਕਿਵੇਂ ਪ੍ਰਿੰਟ ਕਰਨਾ ਅਤੇ ਲਗਾਉਣਾ ਹੈ",
	"flyers::flyers_hero_subtitle":
		"ਮੁਫ਼ਤ, ਪ੍ਰਿੰਟ ਕਰਨ ਯੋਗ ਬਿਟਕੌਇਨ ਫਲਾਇਰ। ਉਨ੍ਹਾਂ ਨੂੰ ਜਨਤਕ ਥਾਵਾਂ 'ਤੇ ਲਗਾਓ ਤਾਂ ਜੋ ਹੋਰ ਲੋਕ ਬਿਟਕੌਇਨ ਬਾਰੇ ਜਾਣ ਸਕਣ।",
	"flyers::flyers_hero_title": "ਬਿਟਕੌਇਨ ਫਲਾਇਰ ਪ੍ਰਿੰਟ ਕਰੋ ਅਤੇ ਲਗਾਓ",
	"flyers::flyers_next_get_stickers": "ਸੰਦੇਸ਼ ਨੂੰ ਹੋਰ ਦੂਰ ਫੈਲਾਓ",
	"flyers::flyers_next_get_stickers_desc":
		"ਬਿਟਕੌਇਨ ਸਟਿੱਕਰਾਂ ਦੇ ਇੱਕ ਮੁਫ਼ਤ ਪੈਕ ਦੀ ਬੇਨਤੀ ਕਰੋ",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"ਸ਼ਾਮਲ ਹੋਵੋ ਅਤੇ ਬਿਟਕੌਇਨ ਫੈਲਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰੋ",
	"get-involved::get_involved_business_content_1":
		"ਬਿਟਕੌਇਨ ਦੀ ਚੱਕਰੀ ਅਰਥਵਿਵਸਥਾ ਬਣਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਨਾ ਚਾਹੁੰਦੇ ਹੋ? ਸਭ ਤੋਂ ਆਸਾਨ ਤਰੀਕਾ ਹੈ ਸਥਾਨਕ ਕਾਰੋਬਾਰਾਂ ਨੂੰ ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨਾ ਸ਼ੁਰੂ ਕਰਨ ਵਿੱਚ ਮਦਦ ਕਰਨਾ।",
	"get-involved::get_involved_business_content_2":
		"ਕਿਸੇ ਅਜਿਹੇ ਕਾਰੋਬਾਰ ਨੂੰ ਜਾਣਦੇ ਹੋ ਜੋ ਸ਼ੁਰੂ ਕਰ ਸਕਦਾ ਹੈ? ਮਾਲਕ ਨੂੰ ਸਾਡੇ ਪੰਨੇ 'ਤੇ ਭੇਜੋ",
	"get-involved::get_involved_business_content_3":
		"ਕਾਰੋਬਾਰਾਂ ਲਈ ਬਿਟਕੌਇਨ।",
	"get-involved::get_involved_description":
		"ਸਾਡੇ ਮੁਫ਼ਤ ਟੂਲ ਬਿਟਕੌਇਨ ਅਪਣਾਉਣ ਨੂੰ ਫੈਲਾਉਣਾ ਆਸਾਨ ਬਣਾਉਂਦੇ ਹਨ। ਸਟਿੱਕਰ, ਫਲਾਇਰ, ਕਾਰੋਬਾਰਾਂ ਲਈ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ ਅਤੇ ਓਪਨ-ਸੋਰਸ ਕੋਡ ਜਿਸ ਵਿੱਚ ਕੋਈ ਵੀ ਯੋਗਦਾਨ ਪਾ ਸਕਦਾ ਹੈ।",
	"get-involved::get_involved_header":
		"ਸ਼ਾਮਲ ਹੋਵੋ ਅਤੇ ਬਿਟਕੌਇਨ ਫੈਲਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰੋ।",
	"get-involved::get_involved_intro_5":
		"ਤੁਸੀਂ ਇਸ ਨੂੰ ਬਦਲਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦੇ ਹੋ। ਅਸੀਂ ਕੁਝ ਮੁਫ਼ਤ ਟੂਲ ਬਣਾਏ ਹਨ ਜੋ ਤੁਹਾਨੂੰ ਆਪਣੇ ਭਾਈਚਾਰੇ ਵਿੱਚ ਬਿਟਕੌਇਨ ਦੀ ਉਮੀਦ ਫੈਲਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਨਗੇ।",
	"get-involved::get_involved_biz_stickers_note":
		"ਪਹਿਲਾਂ ਹੀ ਬਿਟਕੌਇਨ ਸਵੀਕਾਰ ਕਰ ਰਹੇ ਹੋ? ਸਾਡੇ ਮੁਫ਼ਤ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰਾਂ ਨਾਲ ਆਪਣੇ ਗਾਹਕਾਂ ਨੂੰ ਦੱਸੋ। ਅਸੀਂ ਅਮਰੀਕਾ ਜਾਂ ਕੈਨੇਡਾ ਦੇ ਹਰ ਪਤੇ 'ਤੇ ਇੱਕ ਪੈਕ ਭੇਜਦੇ ਹਾਂ, ਜਾਂ ਤੁਸੀਂ ਦੁਨੀਆ ਵਿੱਚ ਕਿਤੇ ਵੀ ਖ਼ੁਦ ਪ੍ਰਿੰਟ ਕਰ ਸਕਦੇ ਹੋ।",
	"get-involved::get_involved_card_biz_stickers_label":
		"\"Accepted Here\" ਸਟਿੱਕਰ",
	"get-involved::get_involved_card_biz_stickers_source":
		"ਸਰੋਤ: bitcoin.rocks ←",
	"get-involved::get_involved_card_biz_stickers_title":
		"ਆਪਣੇ ਕਾਰੋਬਾਰ ਲਈ ਮੁਫ਼ਤ \"Bitcoin Accepted Here\" ਸਟਿੱਕਰ",
	"get-involved::get_involved_card_business_label":
		"ਕਾਰੋਬਾਰਾਂ ਲਈ ਬਿਟਕੌਇਨ",
	"get-involved::get_involved_card_business_source":
		"ਸਰੋਤ: bitcoin.rocks ←",
	"get-involved::get_involved_card_business_title":
		"ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰਨ ਲਈ ਕਾਰੋਬਾਰ ਨੂੰ ਜੋ ਵੀ ਚਾਹੀਦਾ ਹੈ",
	"get-involved::get_involved_card_flyers_label": "ਪ੍ਰਿੰਟ ਕਰਨ ਯੋਗ ਫਲਾਇਰ",
	"get-involved::get_involved_card_flyers_source":
		"ਸਰੋਤ: bitcoin.rocks ←",
	"get-involved::get_involved_card_flyers_title":
		"ਮੁਫ਼ਤ ਬਿਟਕੌਇਨ ਫਲਾਇਰ ਡਾਊਨਲੋਡ ਅਤੇ ਪ੍ਰਿੰਟ ਕਰੋ",
	"get-involved::get_involved_card_github_label": "ਓਪਨ ਸੋਰਸ",
	"get-involved::get_involved_card_github_source": "ਸਰੋਤ: GitHub ←",
	"get-involved::get_involved_card_github_title":
		"GitHub 'ਤੇ bitcoin.rocks ਵਿੱਚ ਯੋਗਦਾਨ ਪਾਓ",
	"get-involved::get_involved_card_stickers_label":
		"ਮੁਫ਼ਤ ਸਟਿੱਕਰ",
	"get-involved::get_involved_card_stickers_source":
		"ਸਰੋਤ: bitcoin.rocks ←",
	"get-involved::get_involved_card_stickers_title":
		"ਬਿਟਕੌਇਨ ਸਟਿੱਕਰਾਂ ਦੇ ਇੱਕ ਮੁਫ਼ਤ ਪੈਕ ਦੀ ਬੇਨਤੀ ਕਰੋ, ਸਿੱਧੇ ਆਪਣੇ ਦਰਵਾਜ਼ੇ ਤੱਕ",
	"get-involved::get_involved_flyers_content_1":
		"ਫਲਾਇਰ ਆਪਣੇ ਭਾਈਚਾਰੇ ਵਿੱਚ ਬਿਟਕੌਇਨ ਦਾ ਪਰੀਚੈ ਕਰਾਉਣ ਦਾ ਸਭ ਤੋਂ ਸਰਲ ਤਰੀਕਾ ਹੈ। ਸਾਡਾ ਮੁਫ਼ਤ ਬਿਟਕੌਇਨ ਫਲਾਇਰ ਡਾਊਨਲੋਡ ਕਰੋ, ਜਿੰਨੀਆਂ ਚਾਹੋ ਕਾਪੀਆਂ ਪ੍ਰਿੰਟ ਕਰੋ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਸੂਚਨਾ ਪੱਟਿਆਂ, ਕੈਫ਼ੇ, ਮੀਟਅੱਪਾਂ ਜਾਂ ਜਿੱਥੇ ਵੀ ਲੋਕ ਜੁੜਦੇ ਹਨ ਉੱਥੇ ਲਗਾਓ।",
	"get-involved::get_involved_flyers_content_2":
		"ਹਰ ਫਲਾਇਰ ਵਿੱਚ ਇੱਕ ਖਿੱਚ-ਪਾਊ ਸਿਰਲੇਖ ਅਤੇ ਇੱਕ QR ਕੋਡ ਹੁੰਦਾ ਹੈ ਜੋ ਜਿਗਿਆਸੂ ਪਾਠਕਾਂ ਨੂੰ ਹੋਰ ਜਾਣਨ ਲਈ bitcoin.rocks 'ਤੇ ਭੇਜਦਾ ਹੈ।",
	"get-involved::get_involved_flyers_content_3":
		"ਸਟਿੱਕਰਾਂ ਦੇ ਉਲਟ, ਫਲਾਇਰ ਦੁਨੀਆ ਵਿੱਚ ਕਿਤੇ ਵੀ ਮੰਗ 'ਤੇ ਪ੍ਰਿੰਟ ਕੀਤੇ ਜਾ ਸਕਦੇ ਹਨ — ਤੁਹਾਨੂੰ ਬੱਸ ਇੱਕ ਪ੍ਰਿੰਟਰ ਅਤੇ ਕੁਝ ਮਿੰਟ ਚਾਹੀਦੇ ਹਨ।",
	"get-involved::get_involved_flyers_header":
		"ਫਲਾਇਰ ਪ੍ਰਿੰਟ ਕਰੋ ਅਤੇ ਲਗਾਓ",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks ਦੇ ਮੁਫ਼ਤ, ਪ੍ਰਿੰਟ ਕਰਨ ਯੋਗ ਬਿਟਕੌਇਨ ਫਲਾਇਰ ਦਾ ਪੂਰਵਦ੍ਰਿਸ਼",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks MIT ਲਾਇਸੈਂਸ ਦੇ ਤਹਿਤ ਇੱਕ ਮੁਫ਼ਤ, ਓਪਨ-ਸੋਰਸ ਪ੍ਰੋਜੈਕਟ ਹੈ। ਸਾਡਾ ਮਿਸ਼ਨ ਸਿੱਖਿਆ ਰਾਹੀਂ ਬਿਟਕੌਇਨ ਅਪਣਾਉਣ ਵਿੱਚ ਤੇਜ਼ੀ ਲਿਆਉਣਾ ਹੈ — ਅਤੇ ਅਸੀਂ ਇਕੱਲੇ ਨਹੀਂ ਕਰ ਸਕਦੇ।",
	"get-involved::get_involved_github_content_2":
		"ਜੇ ਤੁਸੀਂ ਡਿਵੈਲਪਰ, ਡਿਜ਼ਾਈਨਰ, ਲੇਖਕ ਜਾਂ ਅਨੁਵਾਦਕ ਹੋ, ਮਦਦ ਕਰਨ ਦਾ ਇੱਕ ਤਰੀਕਾ ਹੈ। ਅਸੀਂ ਖ਼ਾਸ ਕਰਕੇ ਉਨ੍ਹਾਂ ਲੋਕਾਂ ਨੂੰ ਲੱਭ ਰਹੇ ਹਾਂ ਜੋ ਸਾਡੀ ਸਮੱਗਰੀ ਨੂੰ ਹੋਰ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਅਨੁਵਾਦ ਕਰ ਸਕਣ, ਤਾਂ ਜੋ ਦੁਨੀਆ ਭਰ ਦੇ ਲੋਕ ਆਪਣੀ ਮਾਂ-ਬੋਲੀ ਵਿੱਚ ਬਿਟਕੌਇਨ ਬਾਰੇ ਸਿੱਖ ਸਕਣ।",
	"get-involved::get_involved_github_content_3":
		"ਸਾਡੇ ਰੇਪੋ ਨੂੰ ਫੋਰਕ ਕਰੋ, pull request ਖੋਲ੍ਹੋ, issue ਬਣਾਓ ਜਾਂ ਪ੍ਰੋਜੈਕਟ ਨੂੰ ਸਟਾਰ ਦਿਓ। ਹਰ ਯੋਗਦਾਨ ਬਿਟਕੌਇਨ ਨੂੰ ਹੋਰ ਲੋਕਾਂ ਤੱਕ ਪਹੁੰਚਾਉਣ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",
	"get-involved::get_involved_github_header":
		"GitHub 'ਤੇ ਯੋਗਦਾਨ ਪਾਓ",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks ਦੇ ਮੁਫ਼ਤ ਬਿਟਕੌਇਨ ਟੈਕਸਟ ਸਟਿੱਕਰ ਪੈਕ",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "ਬੱਚਤ",
	"index::home_card_label_art_1": "ਤੁਲਨਾ ਕਰੋ",
	"index::home_card_label_art_2": "ਸੰਦੇਸ਼ ਫੈਲਾਓ",
	"index::home_card_label_art_3": "ਸਟ੍ਰੀਟ ਆਰਟ",
	"index::home_card_label_bank_runs": "ਪੂਰਨ-ਰਿਜ਼ਰਵ ਪ੍ਰਣਾਲੀ",
	"index::home_card_label_bonds": "ਤੁਲਨਾ ਕਰੋ",
	"index::home_card_label_business_1": "ਕੀ ਫ਼ਰਕ ਹੈ?",
	"index::home_card_label_business_2": "ਬਿਟਕੌਇਨ ਭੁਗਤਾਨ ਸਵੀਕਾਰ ਕਰੋ",
	"index::home_card_label_cash": "ਤੁਲਨਾ ਕਰੋ",
	"index::home_card_label_cbdc": "ਖੁੱਲ੍ਹਾ ਜਾਂ ਬੰਦ?",
	"index::home_card_label_coding_1": "ਇੰਟਰਐਕਟਿਵ ਟਿਊਟੋਰੀਅਲ",
	"index::home_card_label_coding_2": "ਹਾਰਡਵੇਅਰ ਬਣਾਓ",
	"index::home_card_label_coding_3": "ਕੋਡਿੰਗ ਬੁਝਾਰਤਾਂ",
	"index::home_card_label_crowdfunding_1": "EndSARS ਪ੍ਰਦਰਸ਼ਨ",
	"index::home_card_label_crowdfunding_2": "ਨਾ ਰੋਕਿਆ ਜਾ ਸਕਣ ਵਾਲਾ ਪੈਸਾ",
	"index::home_card_label_crowdfunding_3": "ਆਪਣੇ ਪ੍ਰੋਜੈਕਟ ਨੂੰ ਫੰਡ ਕਰੋ",
	"index::home_card_label_crypto": "ਕੀ ਫ਼ਰਕ ਹੈ?",
	"index::home_card_label_energy_1": "ਗਰਿੱਡ ਸਥਿਰੀਕਰਨ",
	"index::home_card_label_energy_4": "ਮੰਗ ਪ੍ਰਤੀਕਿਰਿਆ",
	"index::home_card_label_energy_5": "ਪੇਂਡੂ ਬਿਜਲੀਕਰਨ",
	"index::home_card_label_energy_6": "ਨਵਿਆਉਣਯੋਗ ਪ੍ਰੋਤਸਾਹਨ",
	"index::home_card_label_environment_1": "ਮੀਥੇਨ ਵਿੱਚ ਕਮੀ",
	"index::home_card_label_environment_2": "ਇੱਕ ਰਾਸ਼ਟਰੀ ਪਾਰਕ ਬਚਾਇਆ",
	"index::home_card_label_environment_3": "ਸਭ ਤੋਂ ਹਰਾ ਉਦਯੋਗ",
	"index::home_card_label_environment_4": "ਸਾੜੀ ਜਾਣ ਵਾਲੀ ਗੈਸ ਘਟਾਈ",
	"index::home_card_label_equality_1": "ਉਮੀਦ ਅਤੇ ਮੌਕਾ",
	"index::home_card_label_equality_2": "ਖੇਡ ਬਦਲਣ ਵਾਲਾ",
	"index::home_card_label_food_1": "ਖਾਣੇ ਦੀਆਂ ਕੀਮਤਾਂ",
	"index::home_card_label_food_2": "ਖੇਤ ਅਤੇ ਮਿੱਟੀ",
	"index::home_card_label_freedom_1": "ਤਾਨਾਸ਼ਾਹੀ ਸ਼ਾਸਨ",
	"index::home_card_label_freedom_2": "ਇੱਕ ਅਨੋਖਾ ਸੰਦ",
	"index::home_card_label_get_started_1":
		"ਸ਼ੁਰੂਆਤੀ ਬੁਨਿਆਦੀ ਗੱਲਾਂ",
	"index::home_card_label_get_started_2": "ਤੁਹਾਡਾ ਪਹਿਲਾ ਵਾਲਿਟ",
	"index::home_card_label_get_started_3": "ਬਿਟਕੌਇਨ ਖ਼ਰੀਦੋ",
	"index::home_card_label_gold": "ਕਿਹੜਾ ਬਿਹਤਰ ਹੈ?",
	"index::home_card_label_housing_1": "ਕਿਫ਼ਾਇਤੀ ਘਰ",
	"index::home_card_label_human_rights_1":
		"ਮਨੁੱਖੀ ਅਧਿਕਾਰਾਂ ਨੂੰ ਉਤਸ਼ਾਹ",
	"index::home_card_label_human_rights_2": "ਜ਼ਮੀਨੀ ਅਪਣਾਉਣਾ",
	"index::home_card_label_human_rights_3": "ਵਿਸ਼ਵਵਿਆਪੀ ਪ੍ਰਭਾਵ",
	"index::home_card_label_inflation": "ਬਿਟਕੌਇਨ ਬਿਹਤਰ ਪੈਸਾ ਹੈ",
	"index::home_card_label_networks_1": "ਨੈੱਟਵਰਕ ਦਾ ਲਾਈਵ ਦ੍ਰਿਸ਼",
	"index::home_card_label_networks_2": "ਤੁਲਨਾ ਕਰੋ",
	"index::home_card_label_payments_1": "ਕੀ ਫ਼ਰਕ ਹੈ?",
	"index::home_card_label_payments_2": "ਤੇਜ਼ ਅਤੇ ਸਸਤੇ ਭੁਗਤਾਨ",
	"index::home_card_label_payments_3": "ਰੇਮਿਟੈਂਸ",
	"index::home_card_label_payments_4": "ਭੁਗਤਾਨ ਪ੍ਰਾਪਤ ਕਰੋ",
	"index::home_card_label_politics_1": "ਸਿਆਸੀ ਵਿਰੋਧਾਭਾਸ",
	"index::home_card_label_politics_2": "ਕਦਮ ਚੁੱਕੋ",
	"index::home_card_label_property_rights_1": "ਤੁਲਨਾ ਕਰੋ",
	"index::home_card_label_property_rights_2": "ਅਸਲੀ ਮਾਲਕੀ",
	"index::home_card_label_salary": "ਆਪਣੀ ਤਨਖ਼ਾਹ ਦੀ ਰੱਖਿਆ ਕਰੋ",
	"index::home_card_label_self_custody_1":
		"ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਗਾਈਡ",
	"index::home_card_label_self_custody_2": "ਸਭ ਤੋਂ ਜ਼ਰੂਰੀ ਕਦਮ",
	"index::home_card_label_self_custody_3": "ਪ੍ਰਭੂਸੱਤਾ ਸੰਪੰਨ ਪੈਸਾ",
	"index::home_card_label_war_1": "ਅੰਤਹੀਣ ਜੰਗ ਦਾ ਅੰਤ",
	"index::home_card_label_war_2": "ਵੈਟਰਨਾਂ ਦੀ ਮਦਦ",
	"index::home_card_label_war_3": "ਜੰਗ ਸਮੇਂ ਪਲਾਇਨ",
	"index::home_h1":
		"ਬਿਟਕੌਇਨ ਬਿਹਤਰ ਪੈਸਾ ਹੈ ਜੋ ਇੱਕ ਬਿਹਤਰ ਦੁਨੀਆ ਬਣਾ ਰਿਹਾ ਹੈ।",
	"index::home_nav_about": "ਸਾਡੇ ਬਾਰੇ",
	"index::home_nav_get_involved": "ਸ਼ਾਮਲ ਹੋਵੋ",
	"index::home_nav_learn": "ਸਿੱਖੋ",
	"index::home_source_prefix": "ਸਰੋਤ:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon ਅਤੇ Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "ਦੇਖੋ",
	"lightning::lightning_grid_heading":
		"ਪ੍ਰਸਿੱਧ Lightning ਵਾਲਿਟ",
	"lightning::lightning_hardware_cta_label":
		"ਹਾਰਡਵੇਅਰ ਵਾਲਿਟ",
	"lightning::lightning_header_subtitle":
		"Lightning ਤੁਹਾਨੂੰ ਇੱਕ ਸੈਂਟ ਤੋਂ ਘੱਟ ਵਿੱਚ ਸਕਿੰਟਾਂ ਵਿੱਚ ਬਿਟਕੌਇਨ ਭੇਜਣ ਦਿੰਦਾ ਹੈ — ਤੁਸੀਂ ਜਿੰਨਾ ਖ਼ਰਚਣਾ ਚਾਹੁੰਦੇ ਹੋ ਉਸ ਲਈ ਸਹੀ ਵਾਲਿਟ ਚੁਣੋ।",
	"lightning::lightning_s1_c4_end": "ਹੋਰ ਜਾਣਨ ਲਈ।",
	"lightning::lightning_s1_c4_link":
		"ਬਿਟਕੌਇਨ ਹਾਰਡਵੇਅਰ ਵਾਲਿਟ ਗਾਈਡ",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning ਵਾਲਿਟ",
	"lightning::sources_breez_lightning":
		"Breez — ਸੈਲਫ਼-ਕਸਟਡੀ Lightning ਵਾਲਿਟ",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning Network ਦਸਤਾਵੇਜ਼",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — ਕਸਟੋਡੀਅਲ Lightning ਵਾਲਿਟ",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android ਅਤੇ ਵੈੱਬ",
	"nostr/index::nostr_platform_web": "ਵੈੱਬ ਬ੍ਰਾਊਜ਼ਰ",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr ਇੰਟਰਨੈੱਟ ਲਈ ਇੱਕ ਨਵਾਂ, ਵਿਕੇਂਦਰੀਕ੍ਰਿਤ ਸੰਚਾਰ ਪ੍ਰੋਟੋਕੋਲ ਹੈ — ਕਿਸੇ ਕੰਪਨੀ ਦੀ ਮਾਲਕੀ ਨਹੀਂ, ਇਸ ਵਿੱਚ ਬਿਲਟ-ਇਨ ਬਿਟਕੌਇਨ zaps ਹਨ ਅਤੇ ਤੁਸੀਂ ਕਲਾਇੰਟ ਬਦਲ ਸਕਦੇ ਹੋ ਬਿਨਾਂ ਅਨੁਯਾਈ ਗੁਆਏ।",
	"nostr/index::nostr_amethyst_f1":
		"ਬਹੁਤ ਸਾਰੀਆਂ ਸਹੂਲਤਾਂ ਅਤੇ ਅਨੁਕੂਲਨ ਵਿਕਲਪ",
	"nostr/index::nostr_amethyst_f2":
		"ਵੱਖਰਾ ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਚਾਹੀਦਾ",
	"nostr/index::nostr_amethyst_f3": "100% ਮੁਫ਼ਤ",
	"nostr/index::nostr_damus_f1":
		"ਜਾਣਿਆ-ਪਛਾਣਿਆ Twitter ਵਰਗਾ ਇੰਟਰਫ਼ੇਸ",
	"nostr/index::nostr_damus_f2":
		"ਵੱਖਰਾ ਬਿਟਕੌਇਨ ਵਾਲਿਟ ਚਾਹੀਦਾ",
	"nostr/index::nostr_damus_f3": "100% ਮੁਫ਼ਤ",
	"nostr/index::nostr_download_heading":
		"ਮੁਫ਼ਤ Nostr ਕਲਾਇੰਟ ਡਾਊਨਲੋਡ ਕਰੋ",
	"nostr/index::nostr_download_intro":
		"Nostr ਕਲਾਇੰਟ ਮੁਫ਼ਤ ਐਪਾਂ ਹਨ ਜੋ ਤੁਹਾਨੂੰ Nostr ਨੈੱਟਵਰਕ 'ਤੇ ਪੜ੍ਹਨ ਅਤੇ ਲਿਖਣ ਦਿੰਦੀਆਂ ਹਨ। ਉਹ ਸਾਰੇ ਇਕੱਠੇ ਕੰਮ ਕਰਦੇ ਹਨ — ਤੁਸੀਂ ਕਦੇ ਵੀ ਕਲਾਇੰਟ ਬਦਲ ਸਕਦੇ ਹੋ ਅਤੇ ਆਪਣੇ ਅਨੁਯਾਈ ਅਤੇ ਸਮੱਗਰੀ ਬਣਾਈ ਰੱਖ ਸਕਦੇ ਹੋ।",
	"nostr/index::nostr_hero_subtitle":
		"Nostr ਇੰਟਰਨੈੱਟ ਲਈ ਇੱਕ ਨਵਾਂ, ਵਿਕੇਂਦਰੀਕ੍ਰਿਤ ਸੰਚਾਰ ਪ੍ਰੋਟੋਕੋਲ ਹੈ — ਕਿਸੇ ਕੰਪਨੀ ਦੀ ਮਾਲਕੀ ਨਹੀਂ, ਇਸ ਵਿੱਚ ਬਿਲਟ-ਇਨ ਬਿਟਕੌਇਨ zaps ਹਨ ਅਤੇ ਤੁਸੀਂ ਐਪਾਂ ਬਦਲ ਸਕਦੇ ਹੋ ਬਿਨਾਂ ਅਨੁਯਾਈ ਗੁਆਏ।",
	"nostr/index::nostr_hero_title": "Nostr ਕੀ ਹੈ?",
	"nostr/index::nostr_intro_c1":
		"Nostr ਈਮੇਲ ਵਾਂਗ ਹੈ: ਕਿਸੇ ਦੀ ਪ੍ਰੋਟੋਕੋਲ 'ਤੇ ਮਾਲਕੀ ਨਹੀਂ, ਕੋਈ ਵੀ ਇਸ 'ਤੇ ਐਪ ਬਣਾ ਸਕਦਾ ਹੈ ਅਤੇ ਤੁਸੀਂ ਚੁਣਦੇ ਹੋ ਕਿ ਤੁਹਾਡੇ ਲਈ ਕਿਹੜੀ ਬਿਹਤਰ ਹੈ। Twitter ਜਾਂ Facebook ਦੇ ਉਲਟ, ਕੋਈ ਕੇਂਦਰੀ ਕੰਪਨੀ ਨਹੀਂ ਹੈ ਜੋ ਤੁਹਾਡੇ ਖਾਤਿਆਂ ਨੂੰ ਸੈਂਸਰ, ਬੰਦ ਜਾਂ ਚੁੱਪ ਕਰਾ ਸਕੇ।",
	"nostr/index::nostr_intro_c2":
		"ਹੇਠਾਂ ਸੰਖੇਪ ਵਿੱਚ ਦੱਸਿਆ ਗਿਆ ਹੈ ਕਿ Nostr ਕਿਉਂ ਮਹੱਤਵਪੂਰਨ ਹੈ — ਅਤੇ ਫਿਰ ਉਹ ਸਾਰੇ ਮੁਫ਼ਤ Nostr ਕਲਾਇੰਟ ਜੋ ਅੱਜ ਸ਼ੁਰੂ ਕਰਨ ਲਈ ਚਾਹੀਦੇ ਹਨ।",
	"nostr/index::nostr_iris_f1":
		"ਬਹੁਤ ਹਲਕਾ — ਇੰਸਟਾਲ ਨਹੀਂ ਕਰਨਾ ਪੈਂਦਾ",
	"nostr/index::nostr_iris_f2":
		"ਟ੍ਰਾਇਲ ਖਾਤੇ ਨਾਲ Nostr ਅਜ਼ਮਾਉਣ ਦਾ ਆਸਾਨ ਤਰੀਕਾ",
	"nostr/index::nostr_iris_f3": "100% ਮੁਫ਼ਤ",
	"nostr/index::nostr_learn_more_label": "ਡੂੰਘਾਈ ਨਾਲ ਜਾਣੋ",
	"nostr/index::nostr_learn_more_title":
		"nostr.how 'ਤੇ Nostr ਬਾਰੇ ਹੋਰ ਜਾਣੋ",
	"nostr/index::nostr_primal_f1": "ਸਾਡਾ ਪਹਿਲਾ ਸਿਫ਼ਾਰਸ਼ੀ ਕਲਾਇੰਟ",
	"nostr/index::nostr_primal_f2":
		"ਬਿਲਟ-ਇਨ ਬਿਟਕੌਇਨ zap ਵਾਲਿਟ",
	"nostr/index::nostr_primal_f3": "100% ਮੁਫ਼ਤ",
	"nostr/index::nostr_s1": "ਇੱਕ ਪ੍ਰੋਟੋਕੋਲ, ਪਲੇਟਫ਼ਾਰਮ ਨਹੀਂ",
	"nostr/index::nostr_s1_c1":
		"Nostr ਇੱਕ ਨਵਾਂ ਪ੍ਰੋਟੋਕੋਲ ਹੈ ਜੋ ਤੁਹਾਨੂੰ ਸੈਂਸਰਸ਼ਿਪ, ਪਾਬੰਦੀ ਜਾਂ ਚੁੱਪ ਕਰਾਏ ਜਾਣ ਦੇ ਡਰ ਤੋਂ ਬਿਨਾਂ ਇੰਟਰਨੈੱਟ 'ਤੇ ਸੰਵਾਦ ਕਰਨ ਦਿੰਦਾ ਹੈ।",
	"nostr/index::nostr_s1_c2":
		"Twitter ਜਾਂ Facebook ਵਰਗੇ ਪਲੇਟਫ਼ਾਰਮ ਇੱਕ ਕੰਪਨੀ ਦੁਆਰਾ ਕੰਟਰੋਲ ਹੁੰਦੇ ਹਨ, ਪਰ Nostr ਪ੍ਰੋਟੋਕੋਲ 'ਤੇ ਕਿਸੇ ਦਾ ਕੰਟਰੋਲ ਨਹੀਂ ਹੈ।",
	"nostr/index::nostr_s2": "ਗਤੀ ਦੀ ਸੁਤੰਤਰਤਾ",
	"nostr/index::nostr_s2_c1":
		"Nostr ਈਮੇਲ ਵਾਂਗ ਹੈ। ਕੋਈ ਈਮੇਲ ਪ੍ਰੋਟੋਕੋਲ ਨੂੰ ਕੰਟਰੋਲ ਨਹੀਂ ਕਰਦਾ ਅਤੇ ਕੋਈ ਵੀ ਕਲਾਇੰਟ ਬਣਾ ਸਕਦਾ ਹੈ (ਜਿਵੇਂ Gmail, Hotmail ਆਦਿ)।",
	"nostr/index::nostr_s2_c2":
		"Nostr ਪ੍ਰੋਟੋਕੋਲ 'ਤੇ ਵੀ ਕਿਸੇ ਦਾ ਕੰਟਰੋਲ ਨਹੀਂ ਹੈ ਅਤੇ ਕੋਈ ਵੀ ਕਲਾਇੰਟ ਬਣਾ ਸਕਦਾ ਹੈ (ਜਿਵੇਂ Damus, Amethyst ਆਦਿ)।",
	"nostr/index::nostr_s2_c3":
		"ਜੇ ਤੁਹਾਨੂੰ ਕਿਸੇ ਕਲਾਇੰਟ ਦਾ ਕੰਮ ਕਰਨ ਦਾ ਤਰੀਕਾ ਪਸੰਦ ਨਹੀਂ ਹੈ, ਤਾਂ ਤੁਸੀਂ ਆਪਣਾ Nostr ਖਾਤਾ ਦੂਜੇ ਕਲਾਇੰਟ ਵਿੱਚ ਲੈ ਜਾ ਸਕਦੇ ਹੋ, ਬਿਨਾਂ ਅਨੁਯਾਈ ਜਾਂ ਸਮੱਗਰੀ ਗੁਆਏ।",
	"nostr/index::nostr_s3": "ਬਿਲਟ-ਇਨ ਬਿਟਕੌਇਨ",
	"nostr/index::nostr_s3_c1":
		"ਬਿਟਕੌਇਨ Nostr ਪ੍ਰੋਟੋਕੋਲ ਵਿੱਚ ਬਿਲਟ-ਇਨ ਹੈ। ਜਦੋਂ ਤੁਸੀਂ ਪਸੰਦ ਦੀ ਸਮੱਗਰੀ ਦੇਖਦੇ ਹੋ, ਤਾਂ ਤੁਸੀਂ ਲੇਖਕ ਦਾ ਧੰਨਵਾਦ ਕਰਨ ਲਈ \"ਬਿਟਕੌਇਨ zap\" ਭੇਜ ਸਕਦੇ ਹੋ।",
	"nostr/index::nostr_s3_c2":
		"Twitter ਅਤੇ Facebook ਵਰਗੇ ਕੇਂਦਰੀਕ੍ਰਿਤ ਪਲੇਟਫ਼ਾਰਮਾਂ 'ਤੇ, ਕੇਂਦਰੀ ਕੰਪਨੀ ਤੁਹਾਡੀ ਸਮੱਗਰੀ ਤੋਂ ਪੈਸਾ ਕਮਾਉਂਦੀ ਹੈ। ਪਰ Nostr ਵਰਗੇ ਖੁੱਲ੍ਹੇ ਪ੍ਰੋਟੋਕੋਲ 'ਤੇ, ਤੁਸੀਂ ਆਪਣੀ ਸਮੱਗਰੀ ਤੋਂ ਪੈਸਾ ਕਮਾਉਂਦੇ ਹੋ।",
	"nostr/index::sources_damus": "Damus — iPhone ਲਈ Nostr ਕਲਾਇੰਟ",
	"nostr/index::sources_iris": "Iris — ਵੈੱਬ ਬ੍ਰਾਊਜ਼ਰ ਲਈ Nostr ਕਲਾਇੰਟ",
	"nostr/index::sources_nostr_how": "nostr.how — Nostr ਕੀ ਹੈ?",
	"nostr/index::sources_nostr_protocol":
		"Nostr ਪ੍ਰੋਟੋਕੋਲ — ਓਪਨ-ਸੋਰਸ ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
	"nostr/index::sources_primal":
		"Primal — ਬਿਲਟ-ਇਨ ਬਿਟਕੌਇਨ zap ਵਾਲਿਟ ਨਾਲ Nostr ਕਲਾਇੰਟ",
	"nostr/index::what_is_nostr": "Nostr ਕੀ ਹੈ?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"ਇਨ੍ਹਾਂ ਫ਼ਾਈਲਾਂ ਨਾਲ ਆਪਣੇ ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ ਪ੍ਰਿੰਟ ਕਰੋ।",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"ਬੇਨਤੀ ਮਿਲ ਗਈ 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"ਥੋਕ ਵਿੱਚ ਆਰਡਰ ਕਰੋ",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Nostr 'ਤੇ ਸਾਂਝਾ ਕਰੋ",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Nostr ਕੀ ਹੈ?",
	"sticker-success::sticker_success_bulk_header":
		"ਹੋਰ ਸਟਿੱਕਰ ਚਾਹੀਦੇ?",
	"sticker-success::sticker_success_hero_title":
		"ਤੁਹਾਡੇ ਸਟਿੱਕਰ ਰਾਹ ਵਿੱਚ ਹਨ 🎉",
	"sticker-success::sticker_success_share_header":
		"ਸਾਂਝਾ ਕਰੋ ਕਿ ਤੁਸੀਂ ਆਪਣੇ ਸਟਿੱਕਰ ਕਿੱਥੇ ਲਗਾਏ",
	"sticker-success::sticker_success_tips_header":
		"ਸਟਿੱਕਰ ਲਗਾਉਣ ਦੀਆਂ ਚੰਗੀਆਂ ਥਾਵਾਂ",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "ਬਿਟਕੌਇਨ",
	"stickers::stickers_flyers_link_before":
		"ਅਤੇ ਇੱਕ ਵਾਰ ਜਦੋਂ ਤੁਸੀਂ ਸ਼ੁਰੂ ਕਰੋ, ",
	"stickers::stickers_instructions_1":
		"ਆਪਣਾ ਡਾਕ ਪਤਾ ਪਾਓ ਅਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਮੁਫ਼ਤ ਬਿਟਕੌਇਨ ਸਟਿੱਕਰਾਂ ਦਾ ਇੱਕ ਪੈਕ ਮੇਲ ਕਰਾਂਗੇ। ਤੁਹਾਡੇ ਸਟਿੱਕਰ ਇੱਕ ਸਾਦੇ ਚਿੱਟੇ ਲਿਫ਼ਾਫ਼ੇ ਵਿੱਚ ਪਹੁੰਚਣਗੇ।",
	"stickers::stickers_btn_choose_pack": "ਇਹ ਪੈਕ ਚੁਣੋ",
	"stickers::stickers_bulk_c1":
		"ਕੁਝ ਤੋਂ ਵੱਧ ਸਟਿੱਕਰ ਚਾਹੀਦੇ?",
	"stickers::stickers_bulk_c2":
		"ਉਸੇ ਪ੍ਰਿੰਟਰ ਤੋਂ ਥੋਕ ਵਿੱਚ ਆਰਡਰ ਕਰੋ ਜਿਸ ਨੂੰ ਅਸੀਂ ਵਰਤਦੇ ਹਾਂ",
	"stickers::stickers_bulk_c3":
		"— ਜਿੰਨੇ ਜ਼ਿਆਦਾ ਖ਼ਰੀਦੋਗੇ, ਹਰ ਇੱਕ ਉਨਾ ਸਸਤਾ ਹੋਵੇਗਾ।",
	"stickers::stickers_bulk_cta": "ਥੋਕ ਵਿੱਚ ਸਟਿੱਕਰ ਖ਼ਰੀਦੋ",
	"stickers::stickers_bulk_header":
		"ਥੋਕ ਵਿੱਚ ਸਟਿੱਕਰ ਆਰਡਰ ਕਰੋ",
	"stickers::stickers_hero_subtitle":
		"ਬਿਟਕੌਇਨ ਸਟਿੱਕਰਾਂ ਦੇ ਇੱਕ ਮੁਫ਼ਤ ਪੈਕ ਦੀ ਬੇਨਤੀ ਕਰੋ ਅਤੇ ਉਨ੍ਹਾਂ ਨੂੰ ਜਨਤਕ ਥਾਵਾਂ 'ਤੇ ਲਗਾਓ ਤਾਂ ਜੋ ਹੋਰ ਲੋਕ ਬਿਟਕੌਇਨ ਬਾਰੇ ਜਾਣ ਸਕਣ।",
	"stickers::stickers_hero_title": "ਮੁਫ਼ਤ ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ",
	"stickers::stickers_intro_c1":
		"ਸਾਡਾ ਮਿਸ਼ਨ ਹੈ ਤੁਹਾਨੂੰ ਸਟਿੱਕਰਾਂ ਨਾਲ ਹੋਰ ਲੋਕਾਂ ਨੂੰ \"ਸੰਤਰੀ ਪਿੱਲ\" ਲੈਣ ਵਿੱਚ ਮਦਦ ਕਰਨਾ, ਜਨਤਕ ਥਾਵਾਂ 'ਤੇ ਬਿਟਕੌਇਨ ਸਟਿੱਕਰ ਲਗਾ ਕੇ। ਸਾਡੇ ਸਾਰੇ ਸਟਿੱਕਰਾਂ 'ਤੇ QR ਕੋਡ ਹਨ ਜੋ ਸਿੱਖਿਆ ਪੰਨਿਆਂ 'ਤੇ ਲੈ ਜਾਂਦੇ ਹਨ",
	"stickers::stickers_intro_c3": "ਮਹਿੰਗਾਈ",
	"stickers::stickers_intro_c4":
		"ਹੇਠਾਂ ਇੱਕ ਸਟਿੱਕਰ ਪੈਕ ਚੁਣੋ ਅਤੇ ਚੁਣੋ ਕਿ ਤੁਸੀਂ ਉਸ ਨੂੰ ਕਿਵੇਂ ਚਾਹੁੰਦੇ ਹੋ — ਅਸੀਂ ਅਮਰੀਕਾ ਜਾਂ ਕੈਨੇਡਾ ਵਿੱਚ ਕਿਸੇ ਨੂੰ ਵੀ ਇੱਕ ਮੁਫ਼ਤ ਪੈਕ ਭੇਜਦੇ ਹਾਂ, ਜਾਂ ਤੁਸੀਂ ਦੁਨੀਆ ਵਿੱਚ ਕਿਤੇ ਵੀ ਆਪਣੇ ਸਟਿੱਕਰ ਖ਼ੁਦ ਪ੍ਰਿੰਟ ਕਰ ਸਕਦੇ ਹੋ।",
	"stickers::stickers_mail_header":
		"ਅਸੀਂ ਮੁਫ਼ਤ ਸਟਿੱਕਰ ਮੇਲ ਕਰਦੇ ਹਾਂ",
	"stickers::stickers_next_print_flyers": "ਸੰਦੇਸ਼ ਨੂੰ ਹੋਰ ਦੂਰ ਫੈਲਾਓ",
	"stickers::stickers_next_print_flyers_desc":
		"ਮੁਫ਼ਤ ਬਿਟਕੌਇਨ ਫਲਾਇਰ ਪ੍ਰਿੰਟ ਕਰੋ ਅਤੇ ਜਨਤਕ ਥਾਵਾਂ 'ਤੇ ਲਗਾਓ",
	"stickers::stickers_option_bulk":
		"📦 ਵਿਸ਼ਵਵਿਆਪੀ — ਥੋਕ ਵਿੱਚ ਆਰਡਰ ਕਰੋ",
	"stickers::stickers_option_canada":
		"🇨🇦 ਕੈਨੇਡਾ — ਮੁਫ਼ਤ ਮੇਲ",
	"stickers::stickers_option_print":
		"🌍 ਵਿਸ਼ਵਵਿਆਪੀ — ਖ਼ੁਦ ਪ੍ਰਿੰਟ ਕਰੋ",
	"stickers::stickers_option_usa":
		"🇺🇸 ਅਮਰੀਕਾ — ਮੁਫ਼ਤ ਮੇਲ",
	"stickers::stickers_print_c1":
		"ਤੁਸੀਂ ਖ਼ੁਦ ਸਟਿੱਕਰ ਪ੍ਰਿੰਟ ਕਰਕੇ ਯੋਗਦਾਨ ਪਾ ਸਕਦੇ ਹੋ, ਦੁਨੀਆ ਵਿੱਚ ਜਿੱਥੇ ਵੀ ਤੁਸੀਂ ਰਹਿੰਦੇ ਹੋ। ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਅਤੇ ਪ੍ਰਿੰਟਿੰਗ ਨਿਰਦੇਸ਼ ਡਾਊਨਲੋਡ ਕਰਨ ਲਈ ਹੇਠਾਂ ਆਪਣੀ ਭਾਸ਼ਾ 'ਤੇ ਕਲਿੱਕ ਕਰੋ।",
	"stickers::stickers_print_c2":
		"ਸਾਰੇ ਸਟਿੱਕਰ ਸਾਰੀਆਂ ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਉਪਲਬਧ ਨਹੀਂ ਹਨ।",
	"stickers::stickers_print_header":
		"ਆਪਣੀਆਂ ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਖ਼ੁਦ ਪ੍ਰਿੰਟ ਕਰੋ",
	"stickers::stickers_request_c1":
		"ਆਪਣੀ ਸਥਾਨਕ ਭਾਸ਼ਾ ਵਿੱਚ ਸਟਿੱਕਰ ਫ਼ਾਈਲਾਂ ਦੀ ਬੇਨਤੀ ਕਰਨ ਲਈ ਹੇਠਾਂ ਦਿੱਤਾ ਫ਼ਾਰਮ ਭਰੋ। ਤਿਆਰ ਹੋਣ 'ਤੇ ਅਸੀਂ ਤੁਹਾਨੂੰ ਦੱਸਾਂਗੇ।",
	"stickers::stickers_request_header":
		"ਆਪਣੀ ਭਾਸ਼ਾ ਨਹੀਂ ਦਿਸ ਰਹੀ?",
	"stickers::stickers_share_c2":
		"ਕਿਸੇ ਵੀ Nostr ਕਲਾਇੰਟ ਵਿੱਚ ਸਾਨੂੰ ਖੋਜ ਕੇ ਸਾਨੂੰ Nostr 'ਤੇ ਫ਼ਾਲੋ ਕਰੋ",
	"stickers::stickers_share_c3":
		"।",
	"stickers::stickers_signs_pack_description":
		"ਬਿਟਕੌਇਨ ਸੰਦੇਸ਼ਾਂ ਨਾਲ ਚੇਤਾਵਨੀ, ਸਾਵਧਾਨੀ ਅਤੇ ਨੋਟਿਸ ਸਟਿੱਕਰ — ਅੱਖਾਂ ਨੂੰ ਫੜਨ ਅਤੇ ਲੋਕਾਂ ਨੂੰ ਰੋਕਣ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤੇ ਗਏ।",
	"stickers::stickers_step_1_description":
		"ਹਰ ਪੈਕ ਵਿੱਚ ਬਿਟਕੌਇਨ ਸਟਿੱਕਰਾਂ ਦਾ ਵੱਖਰਾ ਸੰਗ੍ਰਹਿ ਹੈ, ਜਿਨ੍ਹਾਂ ਵਿੱਚ QR ਕੋਡ ਹਨ ਜੋ ਲੋਕਾਂ ਨੂੰ ਬਿਟਕੌਇਨ ਬਾਰੇ ਸਿਖਾਉਂਦੇ ਹਨ।",
	"stickers::stickers_step_1_eyebrow": "ਕਦਮ 1",
	"stickers::stickers_step_1_header":
		"ਇੱਕ ਸਟਿੱਕਰ ਪੈਕ ਚੁਣੋ",
	"stickers::stickers_step_2_description":
		"ਅਸੀਂ ਅਮਰੀਕਾ ਅਤੇ ਕੈਨੇਡਾ ਦੇ ਪਤਿਆਂ 'ਤੇ ਮੁਫ਼ਤ ਪੈਕ ਭੇਜਦੇ ਹਾਂ। ਦੁਨੀਆ ਦੇ ਬਾਕੀ ਹਿੱਸਿਆਂ ਵਿੱਚ ਤੁਸੀਂ ਸਟਿੱਕਰ ਖ਼ੁਦ ਪ੍ਰਿੰਟ ਕਰ ਸਕਦੇ ਹੋ ਜਾਂ ਥੋਕ ਵਿੱਚ ਆਰਡਰ ਕਰ ਸਕਦੇ ਹੋ।",
	"stickers::stickers_step_2_eyebrow": "ਕਦਮ 2",
	"stickers::stickers_step_2_header":
		"ਤੁਸੀਂ ਆਪਣੇ ਸਟਿੱਕਰ ਕਿਵੇਂ ਚਾਹੁੰਦੇ ਹੋ?",
	"stickers::stickers_text_pack_description":
		"ਬਿਟਕੌਇਨ ਦੇ ਨਾਅਰਿਆਂ ਅਤੇ ਮੌਜੀ ਵਿਚਾਰਾਂ ਦਾ ਮਿਸ਼ਰਣ, ਜਨਤਕ ਥਾਵਾਂ 'ਤੇ ਜਿਗਿਆਸਾ ਜਗਾਉਣ ਲਈ ਡਿਜ਼ਾਈਨ ਕੀਤਾ ਗਿਆ।",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — ਆਪਣਾ ਵਾਲਿਟ ਚੁਣੋ",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — ਮੈਟਲ ਬਿਟਕੌਇਨ ਸੀਡ ਸਟੋਰੇਜ ਸਮੀਖਿਆਵਾਂ",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — ਸੈਲਫ਼-ਕਸਟਡੀ ਬਿਟਕੌਇਨ ਵਾਲਿਟ",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — ਬਿਟਕੌਇਨ ਹਾਰਡਵੇਅਰ ਵਾਲਿਟ",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 ਹਾਰਡਵੇਅਰ ਵਾਲਿਟ",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q ਹਾਰਡਵੇਅਰ ਵਾਲਿਟ",
	"wallets::sources_passport":
		"Foundation Devices — Passport ਹਾਰਡਵੇਅਰ ਵਾਲਿਟ",
	"wallets::sources_seedsigner":
		"SeedSigner — ਬਿਟਕੌਇਨ ਲੈਣ-ਦੇਣ ਲਈ DIY ਓਪਨ-ਸੋਰਸ ਸਾਈਨਿੰਗ ਡਿਵਾਈਸ",
	"wallets::wallets_grid_heading": "ਪ੍ਰਸਿੱਧ ਬਿਟਕੌਇਨ ਵਾਲਿਟ",
	"wallets::wallets_header_subtitle":
		"ਵਾਲਿਟ ਚੁਣਨ, ਆਪਣੀਆਂ ਕੀਜ਼ ਦਾ ਬੈਕਅੱਪ ਲੈਣ ਅਤੇ ਆਪਣੇ ਬਿਟਕੌਇਨ 'ਤੇ ਪੂਰਾ ਕੰਟਰੋਲ ਲੈਣ ਲਈ ਕਦਮ-ਦਰ-ਕਦਮ ਗਾਈਡ।",
});

/* ─────────────── Apply ─────────────── */

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
		`translate-rest-part2 (pa): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
