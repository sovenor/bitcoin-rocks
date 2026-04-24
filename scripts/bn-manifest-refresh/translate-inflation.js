#!/usr/bin/env node
/**
 * Bengali manifest refresh — inflation namespace translator.
 *
 * Handles:
 *   - 327 per-currency keys (13 currencies × ~25 suffixes each)
 *   - ~41 non-currency keys (shared labels, stories, sources, etc.)
 *
 * Bengali uses the Bengali (Bangla) script. Brand names, URLs, numeric
 * values, and currency codes remain in Latin script.
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
	"bn.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "মার্কিন ডলারে",
		longNameNom: "মার্কিন ডলার",
		noun: "ডলার",
		nounPlural: "ডলার",
		label: "মার্কিন ডলার",
		existenceTitle: "প্রচলনে থাকা ডলার",
		debtTitle: "মোট ফেডারেল ঋণ",
	},
	eur: {
		longName: "ইউরোতে",
		longNameNom: "ইউরো",
		noun: "ইউরো",
		nounPlural: "ইউরো",
		label: "ইউরো",
		existenceTitle: "প্রচলনে থাকা ইউরো",
		debtTitle: "ইউরোজোনের সরকারি ঋণ",
	},
	aud: {
		longName: "অস্ট্রেলিয়ান ডলারে",
		longNameNom: "অস্ট্রেলিয়ান ডলার",
		noun: "অস্ট্রেলিয়ান ডলার",
		nounPlural: "অস্ট্রেলিয়ান ডলার",
		label: "অস্ট্রেলিয়ান ডলার",
		existenceTitle: "প্রচলনে থাকা অস্ট্রেলিয়ান ডলার",
		debtTitle: "অস্ট্রেলিয়ার সরকারি ঋণ",
	},
	brl: {
		longName: "ব্রাজিলিয়ান রিয়ালে",
		longNameNom: "ব্রাজিলিয়ান রিয়াল",
		noun: "রিয়াল",
		nounPlural: "রিয়াল",
		label: "ব্রাজিলিয়ান রিয়াল",
		existenceTitle: "প্রচলনে থাকা রিয়াল",
		debtTitle: "ব্রাজিলের সরকারি ঋণ",
	},
	cad: {
		longName: "কানাডিয়ান ডলারে",
		longNameNom: "কানাডিয়ান ডলার",
		noun: "কানাডিয়ান ডলার",
		nounPlural: "কানাডিয়ান ডলার",
		label: "কানাডিয়ান ডলার",
		existenceTitle: "প্রচলনে থাকা কানাডিয়ান ডলার",
		debtTitle: "কানাডার সরকারি ঋণ",
	},
	gbp: {
		longName: "ব্রিটিশ পাউন্ডে",
		longNameNom: "ব্রিটিশ পাউন্ড",
		noun: "পাউন্ড",
		nounPlural: "পাউন্ড",
		label: "ব্রিটিশ পাউন্ড",
		existenceTitle: "প্রচলনে থাকা পাউন্ড",
		debtTitle: "যুক্তরাজ্যের সরকারি ঋণ",
	},
	ils: {
		longName: "ইসরায়েলি শেকেলে",
		longNameNom: "ইসরায়েলি শেকেল",
		noun: "শেকেল",
		nounPlural: "শেকেল",
		label: "ইসরায়েলি শেকেল",
		existenceTitle: "প্রচলনে থাকা শেকেল",
		debtTitle: "ইসরায়েলের সরকারি ঋণ",
	},
	inr: {
		longName: "ভারতীয় রুপিতে",
		longNameNom: "ভারতীয় রুপি",
		noun: "রুপি",
		nounPlural: "রুপি",
		label: "ভারতীয় রুপি",
		existenceTitle: "প্রচলনে থাকা রুপি",
		debtTitle: "ভারতের সরকারি ঋণ",
	},
	jpy: {
		longName: "জাপানি ইয়েনে",
		longNameNom: "জাপানি ইয়েন",
		noun: "ইয়েন",
		nounPlural: "ইয়েন",
		label: "জাপানি ইয়েন",
		existenceTitle: "প্রচলনে থাকা ইয়েন",
		debtTitle: "জাপানের সরকারি ঋণ",
	},
	mxn: {
		longName: "মেক্সিকান পেসোতে",
		longNameNom: "মেক্সিকান পেসো",
		noun: "পেসো",
		nounPlural: "পেসো",
		label: "মেক্সিকান পেসো",
		existenceTitle: "প্রচলনে থাকা পেসো",
		debtTitle: "মেক্সিকোর সরকারি ঋণ",
	},
	nzd: {
		longName: "নিউজিল্যান্ড ডলারে",
		longNameNom: "নিউজিল্যান্ড ডলার",
		noun: "নিউজিল্যান্ড ডলার",
		nounPlural: "নিউজিল্যান্ড ডলার",
		label: "নিউজিল্যান্ড ডলার",
		existenceTitle: "প্রচলনে থাকা নিউজিল্যান্ড ডলার",
		debtTitle: "নিউজিল্যান্ডের সরকারি ঋণ",
	},
	php: {
		longName: "ফিলিপাইন পেসোতে",
		longNameNom: "ফিলিপাইন পেসো",
		noun: "পেসো",
		nounPlural: "পেসো",
		label: "ফিলিপাইন পেসো",
		existenceTitle: "প্রচলনে থাকা পেসো",
		debtTitle: "ফিলিপাইনের সরকারি ঋণ",
	},
	thb: {
		longName: "থাই বাটে",
		longNameNom: "থাই বাট",
		noun: "বাট",
		nounPlural: "বাট",
		label: "থাই বাট",
		existenceTitle: "প্রচলনে থাকা বাট",
		debtTitle: "থাইল্যান্ডের সরকারি ঋণ",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `আপনি যদি ${c.longName} সঞ্চয় করেন, তাহলে লক্ষ্য করেছেন যে প্রতি বছর আপনি কম কিনতে পারছেন। একই পরিমাণ পণ্য কিনতে আপনার আরও বেশি ${c.nounPlural} প্রয়োজন। আপনার জীবনযাত্রার মান বজায় রাখতে আপনার আরও বেশি ${c.nounPlural} প্রয়োজন।`;
		case "intro_2":
			return `কিন্তু এটি এমন হওয়ার দরকার নেই।`;
		case "intro_highlight":
			return `গত চার বছরে, যারা Bitcoin-এ সঞ্চয় করছেন তারা দেখেছেন যে জীবন আরও সস্তা হয়ে উঠছে।`;
		case "proof_h2":
			return `এখানে প্রমাণ: আপনার টাকা মূল্য হারাচ্ছে`;
		case "proof_p1":
			return `আপনার ব্যাংক অ্যাকাউন্টের প্রতিটি ${c.noun} প্রতি বছর কম কিনে। এটি ঘটছে কারণ কতগুলি ${c.nounPlural} তৈরি করা যায় তার কোনও নির্দিষ্ট সীমা নেই।`;
		case "proof_p2":
			return `এই সীমাহীন সরবরাহই মুদ্রাস্ফীতির মূল কারণ। গত কয়েক বছরে প্রচলনে থাকা ${c.nounPlural}-এর পরিমাণ নাটকীয়ভাবে বৃদ্ধি পেয়েছে।`;
		case "proof_p3":
			return `যখন শূন্য থেকে আরও টাকা তৈরি করা হয়, তখন সব কিছুর দাম বেড়ে যায়। এতে কোম্পানিগুলি পণ্য তৈরির জন্য যে কাঁচামাল কেনে তাও অন্তর্ভুক্ত — যা আপনার জন্য উচ্চ মূল্যের দিকে পরিচালিত করে।`;
		case "proof_p4":
			return `যেহেতু সরকার তার ঋণ বাড়িয়ে চলেছে, তাই আরও বেশি টাকা ছাপানো হচ্ছে কারণ কম সংখ্যক মানুষ সরকারকে ধার দিতে চায়।`;
		case "proof_p5_before":
			return `আপনি যদি টাকা ধার নিতে না পারেন, তাহলে আপনি খরচ করতে পারবেন না। কিন্তু যখন সরকার`;
		case "proof_p5_link":
			return `টাকা ধার নিতে পারে না`;
		case "proof_p5_after":
			return `, তখন এটি কেবল আরও টাকা ছাপায়।`;
		case "proof_p6":
			return `আরও সরকারি ঋণ মানে আরও টাকা ছাপানো। আরও টাকা ছাপানো মানে আরও মুদ্রাস্ফীতি। এবং এটি থামার কোনও লক্ষণ নেই।`;
		case "btc_h2":
			return `Bitcoin-এর কোনও মুদ্রাস্ফীতি নেই`;
		case "btc_p1":
			return `মুদ্রাস্ফীতির অর্থ হল সময়ের সাথে সাথে আপনার টাকা কম কেনে। Bitcoin ভালো টাকা কারণ এতে কোনও মুদ্রাস্ফীতি নেই।`;
		case "btc_p2_before":
			return `${c.longName} সরবরাহ সীমাহীন, যার অর্থ যেকোনো সময় আরও ছাপানো যেতে পারে।`;
		case "btc_p2_link":
			return `Bitcoin দুর্লভ`;
		case "btc_p2_after":
			return `, কারণ এর সর্বোচ্চ সীমা ২১ মিলিয়ন Bitcoin। কেউ আরও Bitcoin তৈরি করতে পারে না।`;
		case "btc_p3":
			return `ঐতিহাসিকভাবে, Bitcoin সময়ের সাথে ক্রয়ক্ষমতা অর্জন করেছে, যখন ${c.longNameNom} ক্রয়ক্ষমতা হারিয়েছে। অনেক মানুষ Bitcoin-কে দীর্ঘমেয়াদী সঞ্চয় অ্যাকাউন্ট হিসেবে ব্যবহার করেন: টাকা যা তারা বছরের পর বছর স্পর্শ না করে বাড়তে দেন।`;
		case "btc_p4":
			return `আপনি কি এমন ${c.nounPlural}-এ সঞ্চয় করতে চান যা সময়ের সাথে কম কিনবে? নাকি Bitcoin-এ, যা ঐতিহাসিকভাবে সময়ের সাথে বেশি কিনে?`;
		case "freedom_h2":
			return `Bitcoin স্বাধীনতার একটি হাতিয়ারও`;
		case "freedom_p1":
			return `কেউ Bitcoin নেটওয়ার্ক নিয়ন্ত্রণ করে না। এটি কোনও সরকার বা কোম্পানি দ্বারা পরিচালিত হয় না। এটি আপনার স্বাধীনতা এবং আপনার টাকা রক্ষার জন্য তৈরি করা হয়েছে।`;
		case "freedom_p2":
			return `বিশ্বজুড়ে মানুষ ইতিমধ্যে Bitcoin ব্যবহার করে তাদের স্বাধীনতা রক্ষা করছেন — এমনকি যখন তাদের সরকার তাদের সাহায্য করতে অস্বীকার করে বা তাদের থামানোর চেষ্টা করে।`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "৪ বছরে হারানো ক্রয়ক্ষমতা";
		case "stat_source_bpr":
			return "সূত্র: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "আরও জানুন →",
	inflation_freedom_scarce_title: "দুর্লভ",
	inflation_freedom_scarce_desc:
		"চিরকালের জন্য মাত্র ২১ মিলিয়ন Bitcoin থাকবে। কেউ আরও ছাপাতে পারে না।",
	inflation_freedom_decentralized_title: "বিকেন্দ্রীভূত",
	inflation_freedom_decentralized_desc:
		"কোনও একক সত্তা — কোনও সরকার বা কোম্পানি — Bitcoin নিয়ন্ত্রণ করে না।",
	inflation_freedom_permissionless_title: "অনুমতিহীন",
	inflation_freedom_permissionless_desc:
		"যে কেউ, যে কোনো জায়গা থেকে, নেটওয়ার্কের সাথে সংযোগ করতে পারে। কেউ আপনাকে থামাতে পারে না।",
	inflation_freedom_sovereign_title: "সার্বভৌম",
	inflation_freedom_sovereign_desc:
		"রাজনীতিবিদ এবং তাদের ভাঙা প্রতিশ্রুতি থেকে স্বাধীন একটি নতুন ব্যবস্থা।",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "২১ মিলিয়ন",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "চিরকালের জন্য নির্দিষ্ট",
	inflation_stat_bitcoin_source: "সূত্র: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "আজ",
	inflation_stat_currency_counting: "এবং বাড়তে থাকছে...",
	inflation_stat_currency_detail_4yr_lost:
		"৪ বছরে হারানো ক্রয়ক্ষমতা",
	inflation_stat_currency_source_cpi: "সূত্র: FRED CPI →",
	inflation_stat_currency_source_debt: "সূত্র: FRED সরকারি ঋণ →",
	inflation_stat_currency_source_m1: "সূত্র: FRED M1 মানি সাপ্লাই →",
	inflation_stat_currency_source_m1_short: "সূত্র: FRED →",

	// Bitcoin price report "gained" stat
	inflation_stat_btc_detail_4yr:
		"৪ বছরে অর্জিত ক্রয়ক্ষমতা",
	inflation_stat_btc_source_bpr: "সূত্র: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "কানাডা",
	inflation_story_canada_desc:
		"শ্রমিকরা তাদের ব্যাংক অ্যাকাউন্ট জব্দ করার পর Bitcoin ব্যবহার করে তাদের টাকায় পৌঁছেছিলেন।",
	inflation_story_nigeria_title: "নাইজেরিয়া",
	inflation_story_nigeria_desc:
		"ব্যাংকগুলি তাদের সাথে কাজ করতে অস্বীকার করার পর বিক্ষোভকারীরা তাদের আন্দোলনে অর্থায়নের জন্য Bitcoin ব্যবহার করেছিলেন।",
	inflation_story_pennsylvania_title: "পেনসিলভানিয়া",
	inflation_story_pennsylvania_desc:
		"Bitcoin মাইনিং কয়লার বর্জ্য পরিষ্কার করেছে যা সরকার মোকাবেলা করতে অস্বীকার করেছিল।",
	inflation_story_texas_title: "টেক্সাস",
	inflation_story_texas_desc:
		"একটি বড় ঝড়ের সময় Bitcoin মাইনিং বৈদ্যুতিক গ্রিড চালু রাখতে সাহায্য করেছিল।",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — ৪-বছরের পারফরম্যান্স চার্ট (সমস্ত মুদ্রা)",
	sources_bitcoin_source_code:
		"Bitcoin সোর্স কোড — ২১ মিলিয়ন সরবরাহ সীমা",
	sources_canadian_trucker:
		"কানাডিয়ান ট্রাকার প্রতিবাদ — জব্দ করা ব্যাংক অ্যাকাউন্ট বাইপাস করতে Bitcoin ব্যবহার করা হয়েছিল (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin সরবরাহ এবং মাইনিং ডেটা",
	sources_nigeria_endsars:
		"Quartz Africa — কীভাবে Bitcoin নাইজেরিয়ায় EndSARS প্রতিবাদকে চালিত করছে",
	sources_pennsylvania_mining:
		"পেনসিলভানিয়া Bitcoin মাইনিং বর্জ্য মিথেন পুনরুদ্ধার করে (YouTube)",
	sources_texas_mining:
		"Bitcoin মাইনিং এবং টেক্সাস বৈদ্যুতিক গ্রিড (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin-এর কোনও মুদ্রাস্ফীতি নেই, কিন্তু আপনার টাকার আছে।",
	inflation_choose: "প্রমাণ দেখতে আপনার মুদ্রা বেছে নিন",
	inflation_choose_another: "← অন্য মুদ্রা বেছে নিন",
	inflation_sticker_learn: "Bitcoin কীভাবে সাহায্য করতে পারে তা জানুন।",
	inflation_sticker_lets_find_out: "চলুন খুঁজে বের করি।",
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

		// Direct non-currency keys
		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		// Per-currency keys: inflation_stat_<code>_<suffix>
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

		// Per-currency keys: inflation_<code>_<suffix>
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
		`translate-inflation (bn): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
