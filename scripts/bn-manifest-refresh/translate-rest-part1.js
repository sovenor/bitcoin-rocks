#!/usr/bin/env node
/**
 * Bengali manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
 *
 * Keys use "<namespace>::<key>" format to disambiguate shared keys
 * across multiple namespaces.
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

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "হোমপেজে ফিরে যান",
	"404::404_message": "Bitcoin দুর্দান্ত, কিন্তু এই ভাঙা পৃষ্ঠাটি নয়।",
	"404::404_not_found_short": "পাওয়া যায়নি",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"আমরা বিনামূল্যে ব্যবসায়িক কিট প্রদান করি যা স্থানীয় ব্যবসায়ীদের Bitcoin গ্রহণ করা সহজ করে তোলে। প্রতিটি কিটে মুদ্রিত সামগ্রী রয়েছে যা ব্যাখ্যা করে কেন Bitcoin গ্রহণ করা তাদের ব্যবসার জন্য উপকারী।",
	"about::about_card_business_label": "ব্যবসায়িক কিট",
	"about::about_card_business_source": "সূত্র: bitcoin.rocks →",
	"about::about_card_business_title":
		"স্থানীয় ব্যবসাগুলিকে Bitcoin পেমেন্ট গ্রহণ করতে সাহায্য করুন",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "সূত্র: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "অবদান রাখুন",
	"about::about_card_contribute_source": "সূত্র: GitHub →",
	"about::about_card_contribute_title":
		"bitcoin.rocks প্রকল্পে কীভাবে অবদান রাখবেন তা শিখুন",
	"about::about_card_email_label": "ইমেইল",
	"about::about_card_email_source": "সূত্র: ইমেইল →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "মুদ্রিত লিফলেট",
	"about::about_card_flyers_source": "সূত্র: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"আপনার সম্প্রদায়ের জন্য Bitcoin লিফলেট ডাউনলোড এবং মুদ্রণ করুন",
	"about::about_card_github_label": "রিপোজিটরি",
	"about::about_card_github_source": "সূত্র: GitHub →",
	"about::about_card_github_title": "GitHub-এ bitcoin.rocks দেখুন",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "সূত্র: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "বিনামূল্যে স্টিকার",
	"about::about_card_stickers_source": "সূত্র: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"আপনার দরজায় পৌঁছে দেওয়া বিনামূল্যে Bitcoin স্টিকার পান",
	"about::about_editorial_2":
		"আমরা নির্ভরযোগ্য সূত্র যেমন ফেডারেল রিজার্ভ (FRED), মার্কিন শ্রম পরিসংখ্যান ব্যুরো, FDIC, জাতিসংঘ, বিশ্ব স্বর্ণ কাউন্সিল, Forbes, MIT Technology Review, Lyn Alden এবং James Lavish উদ্ধৃত করি। আমরা বিশ্বাস করি যে যখন তথ্য স্পষ্টভাবে উপস্থাপন করা হয়, Bitcoin নিজেই কথা বলে।",
	"about::about_flyers_blurb":
		"আমরা মুদ্রণযোগ্য লিফলেট তৈরি করি যা আপনি মিটিংয়ে বিতরণ করতে পারেন, সম্প্রদায়ের বোর্ডে লাগাতে পারেন বা মেইলবক্সে ফেলে দিতে পারেন — একটি সহজ উপায় কৌতূহল জাগানোর এবং মানুষকে bitcoin.rocks-এ আরও জানতে পরিচালিত করার।",
	"about::about_header": "bitcoin.rocks সম্পর্কে",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks",
	"about::about_mission_1b":
		"২০২২ সালে একটি সহজ মিশন নিয়ে প্রতিষ্ঠিত হয়েছিল: শিক্ষার মাধ্যমে Bitcoin গ্রহণ ত্বরান্বিত করা।",
	"about::about_open_source_2":
		"bitcoin.rocks একটি বিনামূল্যে, ওপেন সোর্স প্রকল্প যা MIT-এর অধীনে লাইসেন্সপ্রাপ্ত। যে কেউ bitcoin.rocks-এ অবদান রাখতে পারেন। আমরা বিশেষভাবে অনুবাদকদের স্বাগত জানাই যারা আমাদের বিষয়বস্তু বিশ্বব্যাপী মানুষের কাছে পৌঁছে দিতে সাহায্য করেন।",
	"about::about_page_description":
		"bitcoin.rocks হল একটি বিনামূল্যে এবং ওপেন সোর্স Bitcoin শিক্ষামূলক ওয়েবসাইট যা ২০২২ সালে প্রতিষ্ঠিত হয়েছিল। আমাদের মিশন হল শিক্ষার মাধ্যমে Bitcoin গ্রহণ ত্বরান্বিত করা।",
	"about::about_stickers_blurb":
		"আমরা আপনার দরজায় বিনামূল্যে Bitcoin স্টিকার পাঠাই যাতে আপনি আপনার সম্প্রদায়ে Bitcoin সম্পর্কে কথা ছড়িয়ে দিতে পারেন। প্রতি মাসে, শত শত মানুষ এই স্টিকারগুলির QR কোড স্ক্যান করেন Bitcoin সম্পর্কে জানতে।",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin-এর কোনও ব্যাংক রান নেই",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin একটি সম্পূর্ণ-রিজার্ভ ব্যবস্থা। আপনি একটি ব্যাংকে আপনার টাকা জমা দেন না। আপনিই ব্যাংক। আপনার টাকা আপনার অজান্তে ধার দেওয়া হয় না, কারণ কেবল আপনিই এতে অ্যাক্সেস করতে পারেন।",
	"bank-runs::bank_runs_bitcoin_p2":
		"যতক্ষণ আপনি আপনার নিজের ওয়ালেটে Bitcoin রাখবেন — একটি এক্সচেঞ্জ বা ETF-এ মোড়ানো নয় — ব্যাংক রান অসম্ভব।",
	"bank-runs::bank_runs_bitcoin_p3":
		"Bitcoin-এর সাথে, আপনি সত্যিই আপনার টাকা নিয়ন্ত্রণ করেন।",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"২৬ মার্চ ২০২০ থেকে, মার্কিন ব্যাংকগুলির কোনও রিজার্ভ রাখার প্রয়োজন নেই।",
	"bank-runs::bank_runs_card_bank_reserve_label": "ব্যাংক রিজার্ভ অনুপাত",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"সূত্র: ফেডারেল রিজার্ভ →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"সম্পূর্ণ-রিজার্ভ ব্যবস্থা — আমানত বীমার প্রয়োজন নেই।",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin কভারেজ",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"সূত্র: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"প্রতিটি Bitcoin ব্লকচেইনে রয়েছে — কোনওটি ধার দেওয়া হয়নি।",
	"bank-runs::bank_runs_card_btc_reserve_label": "Bitcoin রিজার্ভ অনুপাত",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"সূত্র: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"১৫৩.৯ বিলিয়ন ডলার বীমা তহবিল বনাম ১০.৮২ ট্রিলিয়ন ডলার বীমাকৃত আমানত (ডিসেম্বর ২০২৫)।",
	"bank-runs::bank_runs_card_fdic_label": "FDIC কভারেজ",
	"bank-runs::bank_runs_card_fdic_source":
		"সূত্র: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "১.৪২%",
	"bank-runs::bank_runs_card_svb_label": "কেস স্টাডি",
	"bank-runs::bank_runs_card_svb_source":
		"সূত্র: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Silicon Valley Bank-এ ব্যাংক রান কীভাবে ঘটেছিল তা শিখুন",
	"bank-runs::bank_runs_card_wallet_label": "পরবর্তী ধাপ",
	"bank-runs::bank_runs_card_wallet_source": "এখানে শুরু করুন →",
	"bank-runs::bank_runs_card_wallet_title":
		"কীভাবে আপনার নিজের Bitcoin ওয়ালেট পাবেন তা শিখুন",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC বীমা আমানতের প্রায় ১% কভার করে",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC বীমা প্রতি আমানতকারী ২৫০,০০০ ডলার পর্যন্ত আমানত সুরক্ষা দেয়। কিন্তু বীমা তহবিল মোট আমানতের তুলনায় অনেক ছোট যা এটি সুরক্ষা দেওয়ার কথা।",
	"bank-runs::bank_runs_fdic_p2_a":
		"বৃহৎ আকারের ব্যাংক ব্যর্থতার ক্ষেত্রে, সরকার ঘাটতি মেটাতে টাকা ছাপাবে — যা আরও",
	"bank-runs::bank_runs_fdic_p2_link": "মুদ্রাস্ফীতি ঘটায়।",
	"bank-runs::bank_runs_header":
		"Bitcoin-এর কোনও ব্যাংক রান নেই, কিন্তু আপনার ব্যাংকের থাকতে পারে।",
	"bank-runs::bank_runs_page_description":
		"ব্যাংকগুলি ভগ্নাংশ-রিজার্ভ ব্যাংকিংয়ের অধীনে আপনার আমানত ধার দেয়। যদি অনেক মানুষ একই সময়ে টাকা তুলতে চায়, ব্যাংকগুলি ব্যর্থ হতে পারে। Bitcoin একটি সম্পূর্ণ-রিজার্ভ ব্যবস্থা — ব্যাংক রান অসম্ভব।",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: একটি বাস্তব উদাহরণ",
	"bank-runs::bank_runs_svb_p1_a":
		"২০২৩ সালের মার্চ মাসে, Silicon Valley Bank ব্যর্থ হয়েছিল কারণ এটি গ্রাহকের আমানত দীর্ঘমেয়াদী",
	"bank-runs::bank_runs_svb_p1_b":
		"বন্ডে বিনিয়োগ করেছিল। যখন সেই বন্ডগুলি মূল্য হারাল, SVB তোলাগুলি কভার করতে পারেনি। ব্যাংকটি দেউলিয়া হয়ে গেল।",
	"bank-runs::bank_runs_svb_p1_link": "ট্রেজারি",
	"bank-runs::bank_runs_svb_p2":
		"হাজার হাজার কোম্পানি তাদের কর্মচারীদের বেতন দিতে পারেনি। FDIC হস্তক্ষেপ করেছিল — কিন্তু এটি একটি বড় প্রশ্ন তুলেছে: আপনার টাকা কি সত্যিই নিরাপদ?",
	"bank-runs::bank_runs_what_p1":
		"ব্যাংকগুলি আপনার আমানত ভল্টে রাখে না। তারা আপনার টাকা ধার দেয় এবং বিনিয়োগ করে — এটিকে ভগ্নাংশ-রিজার্ভ ব্যাংকিং বলা হয়।",
	"bank-runs::bank_runs_what_p2":
		"যদি অনেক মানুষ একসাথে টাকা তুলতে চায়, ব্যাংকের সবার টাকা দেওয়ার জন্য যথেষ্ট নগদ থাকবে না। এটি একটি ব্যাংক রান — এবং এটি ব্যাংকগুলির সম্পূর্ণ পতনের দিকে নিয়ে যেতে পারে।",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">ব্যাংকগুলির</span> মধ্যে পার্থক্য",
	"bitcoin-vs-banks::point_1_summary_1":
		"ইন্টারনেট সংযোগ থাকা যেকোনো ব্যক্তি Bitcoin ব্যবহার করতে পারে — এটি ",
	"bitcoin-vs-banks::point_1_summary_2": "অনুমতিহীন।",
	"bitcoin-vs-banks::point_1_summary_3":
		"ব্যাংকগুলি নীতিমালা বা সরকারি নিয়মের উপর ভিত্তি করে অ্যাকাউন্ট প্রত্যাখ্যান, জমাট বা বন্ধ করতে পারে।",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin নেটওয়ার্ক ২৪/৭ চলে, কোনও রক্ষণাবেক্ষণ বিরতি বা ছুটি ছাড়াই। ব্যাংকগুলির সীমিত ঘন্টা, সপ্তাহান্তের বন্ধ এবং বিরতি রয়েছে।",
	"bitcoin-vs-banks::point_3_summary_1":
		"প্রতিটি Bitcoin লেনদেন একটি পাবলিক ব্লকচেইনে রয়েছে যা যে কেউ অডিট করতে পারে। ব্যাংকগুলি ব্যক্তিগত হিসাব বই রাখে যা গ্রাহকরা স্বাধীনভাবে যাচাই করতে পারে না।",
	"bitcoin-vs-banks::point_4_summary_1":
		"Bitcoin দিয়ে, আপনি নিজের চাবি ধারণ করেন — আমাদের সহজ নির্দেশিকা দেখুন ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin ওয়ালেট",
	"bitcoin-vs-banks::point_4_summary_3":
		"। ব্যাংকগুলি আপনার টাকা ধারণ করে এবং যেকোনো সময় এটি জমাট, সীমাবদ্ধ বা অ্যাক্সেস কাটতে পারে।",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin ফি স্বচ্ছ এবং অনুমানযোগ্য। ব্যাংকগুলি সময়ের সাথে অ্যাকাউন্ট, ওভারড্রাফ্ট, স্থানান্তর এবং ATM-এর জন্য লুকানো ফি জমা করে।",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin আপনাকে কেবল তাই খরচ করতে দেয় যা আপনার আছে। ব্যাংকগুলি ওভারড্রাফ্টের অনুমতি দেয়, তারপর সেই সুবিধার জন্য ধারাবাহিক জরিমানা ফি ধার্য করে।",
	"bitcoin-vs-banks::point_7_summary_1":
		"সম্প্রচারিত হলে, Bitcoin লেনদেন থামানো বা উল্টানো যায় না। ব্যাংকগুলি নীতিমালা বা সরকারি আদেশের উপর ভিত্তি করে লেনদেন ব্লক, জমাট বা উল্টাতে পারে।",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">বন্ডের</span> মধ্যে পার্থক্য",
	"bitcoin-vs-bonds::point_1_summary_1":
		"বন্ডগুলি কেবল নামে \"ঝুঁকিমুক্ত\" — মুদ্রাস্ফীতি, সুদের হারের ওঠানামা এবং খেলাপি ঝুঁকি প্রকৃত রিটার্ন খেয়ে ফেলে।",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin-এর স্বচ্ছ অস্থিরতা রয়েছে কিন্তু কোনও লুকানো কাউন্টারপার্টি ঝুঁকি নেই।",
	"bitcoin-vs-bonds::point_2_summary_1": "যদি",
	"bitcoin-vs-bonds::point_2_summary_2": "মুদ্রাস্ফীতি",
	"bitcoin-vs-bonds::point_2_summary_3":
		"বন্ড ইল্ড ছাড়িয়ে যায়, বন্ডধারীরা প্রতি বছর প্রকৃত ক্রয়ক্ষমতা হারায়। Bitcoin-এর ২১ মিলিয়ন সীমা মুদ্রাস্ফীত করা যায় না।",
	"bitcoin-vs-bonds::point_3_summary_1":
		"সংকটের সময় বন্ড বাজার জমে যায় — Silicon Valley Bank আংশিকভাবে ব্যর্থ হয়েছিল কারণ এটি মূল্য হারানো বন্ডে আটকে ছিল। দেখুন",
	"bitcoin-vs-bonds::point_3_summary_2": "ব্যাংক রান",
	"bitcoin-vs-bonds::point_3_summary_3":
		" Bitcoin কীভাবে সেগুলি এড়ায় তা দেখতে। Bitcoin বিশ্বব্যাপী ২৪/৭ তরলতা সংকট ছাড়াই ট্রেড করে।",
	"bitcoin-vs-bonds::point_4_summary_1":
		"যদি যথেষ্ট ক্রেতা না থাকে তবে ট্রেজারি বন্ড নিলাম ব্যর্থ হতে পারে — দেখুন",
	"bitcoin-vs-bonds::point_4_summary_2": "২০২২ সালের দুর্বল নিলাম।",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bitcoin-এর মূল্য উন্মুক্ত বাজারে ক্রমাগত আবিষ্কৃত হয়, কোনও কেন্দ্রীয় নিলাম ছাড়াই যা ব্যর্থ হতে পারে।",
	"bitcoin-vs-bonds::point_5_summary_1":
		"বন্ড ইল্ড ক্রয়ের সময়ে স্থির থাকে। এমনকি যদি অর্থনীতি সমৃদ্ধ হয় বা মুদ্রা ভেঙে পড়ে, আপনার ইল্ড একই থাকে।",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin-এর উল্লেখযোগ্য উর্ধ্বগামী সম্ভাবনা রয়েছে কারণ গ্রহণ বৃদ্ধি পায় এবং চাহিদা স্থির সরবরাহের মুখোমুখি হয়।",
	"bitcoin-vs-bonds::point_6_summary_1":
		"বেশিরভাগ বন্ড ব্যাংক বা ব্রোকারের মাধ্যমে রাখা হয়, কাউন্টারপার্টি ঝুঁকি যোগ করে। Bitcoin একটি",
	"bitcoin-vs-bonds::point_6_summary_2": "ওয়ালেট",
	"bitcoin-vs-bonds::point_6_summary_3":
		" দিয়ে স্ব-সংরক্ষণ করা যেতে পারে — সেই ঝুঁকি সম্পূর্ণভাবে সরিয়ে ফেলে।",
	"bitcoin-vs-bonds::point_7_summary_1":
		"বন্ডগুলি সম্পূর্ণরূপে সরকারের উপর নির্ভর করে। যদি সরকার খেলাপি হয় বা তার ঋণ মুদ্রাস্ফীত করে, বন্ডধারীরা হারায়।",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin যেকোনো সরকার বা রাজনৈতিক কর্তৃপক্ষ থেকে স্বাধীনভাবে পরিচালিত হয়।",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">নগদের</span> মধ্যে পার্থক্য",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin ইন্টারনেটের মাধ্যমে বিশ্বের যে কোথাও মিনিটের মধ্যে চলে যায়। নগদের জন্য শারীরিক উপস্থিতি বা বিশ্বস্ত বাহক প্রয়োজন — আপনি ইমেইলে একটি ২০ ডলারের নোট পাঠাতে পারবেন না।",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin সর্বত্র একইভাবে কাজ করে। নগদ ভূগোল, বিনিময় হার এবং স্থানীয় গ্রহণযোগ্যতা দ্বারা সীমাবদ্ধ।",
	"bitcoin-vs-cash::point_3_summary_1":
		"সরকারগুলি রাতারাতি নগদ অপ্রচলিত করতে পারে — ভারত ২০১৬ সালে ঠিক তাই করেছিল। এমনকি সংবহন থেকে টেনে না নিয়ে, নগদ হারায়",
	"bitcoin-vs-cash::point_3_summary_2": "মুদ্রাস্ফীতির",
	"bitcoin-vs-cash::point_3_summary_3":
		" কারণে। Bitcoin কোনও সরকার বা কর্তৃপক্ষ দ্বারা অপ্রচলিত করা যায় না।",
	"bitcoin-vs-cash::point_4_summary_1":
		"নগদ জাল করা যায়, কখনও কখনও দৃঢ়প্রত্যয়ীভাবে। Bitcoin ক্রিপ্টোগ্রাফি ব্যবহার করে যা জাল করাকে গাণিতিকভাবে অসম্ভব করে তোলে।",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin-এর কোনও কেন্দ্রীয় কর্তৃপক্ষ নেই। নগদ সরকার দ্বারা জারি করা হয় যারা ইচ্ছামতো আরও ছাপাতে, নকশা পরিবর্তন বা নোট অপ্রচলিত করতে পারে।",
	"bitcoin-vs-cash::point_6_summary_1":
		"নগদ চুরি, আগুন, ক্ষতি এবং বাজেয়াপ্তির জন্য ঝুঁকিপূর্ণ। Bitcoin একটি ফোন বা হার্ডওয়্যার ডিভাইসে নিরাপদে",
	"bitcoin-vs-cash::point_6_summary_2": "স্ব-সংরক্ষণ",
	"bitcoin-vs-cash::point_6_summary_3":
		" করা যেতে পারে।",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin ১০০ মিলিয়ন সাতোশিতে ভাগ হয়, যেকোনো আকারের পেমেন্ট সক্ষম করে। নগদের সর্বনিম্ন ডিনোমিনেশন রয়েছে — আপনি একটি পয়সা ভাগ করতে পারবেন না।",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">কেন্দ্রীয় ব্যাংক ডিজিটাল মুদ্রা (CBDC)</span>-এর মধ্যে পার্থক্য",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"কেউ আপনাকে Bitcoin দিয়ে লেনদেন করতে থামাতে পারে না। CBDC এমনভাবে ডিজাইন করা হয়েছে যে সরকার এবং কেন্দ্রীয় ব্যাংক প্রতিটি পেমেন্ট নিয়ন্ত্রণ করে, আপনার গোপনীয়তা এবং স্বাধীনতা সীমিত করে।",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin কখনও মেয়াদ উত্তীর্ণ হয় না এবং কোনও মাসিক ফি নেই। CBDC-গুলি মেয়াদ শেষ হওয়ার জন্য প্রোগ্রাম করা যেতে পারে, আপনাকে ভবিষ্যতের জন্য সঞ্চয় করা থেকে বিরত রাখে।",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin-এর ২১ মিলিয়ন BTC-এর একটি কঠোর সীমা রয়েছে। CBDC-এর কোনও সরবরাহ সীমা নেই, সরকারকে ইচ্ছামতো অর্থ সরবরাহ প্রসারিত করতে দেয় — যা",
	"bitcoin-vs-cbdc::point_3_summary_2": "মুদ্রাস্ফীতি ঘটায়।",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin ঠিকানাগুলি আপনার বাস্তব-জীবনের পরিচয়ের সাথে বাঁধা নেই। CBDC সরাসরি সরকারি আইডি-র সাথে সংযুক্ত, ব্যাপক আর্থিক নজরদারি এবং সেন্সরশিপ সক্ষম করে।",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoin-এর নিয়মগুলি হাজার হাজার স্বাধীন নোড দ্বারা যাচাই করা হয়। CBDC সরকার এবং কেন্দ্রীয় ব্যাংকের হাতে থাকে, যাদের নেটওয়ার্কের উপর সম্পূর্ণ নিয়ন্ত্রণ রয়েছে।",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"যে কেউ নেটওয়ার্কের নিয়ম যাচাই করতে একটি Bitcoin নোড চালাতে পারে। CBDC ব্যবহারকারীদের নোড চালাতে দেয় না — আপনাকে কেন্দ্রীয় কর্তৃপক্ষের উপর বিশ্বাস রাখতে হবে।",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"স্ব-সংরক্ষিত Bitcoin কেউ জমাট করতে পারে না। CBDC এমনভাবে ডিজাইন করা হয়েছে যে সরকার এবং কেন্দ্রীয় ব্যাংক তাৎক্ষণিকভাবে অ্যাকাউন্ট জমাট করতে পারে।",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin-এর স্ব-সংরক্ষণ একটি",
	"bitcoin-vs-cbdc::point_8_summary_2": "ওয়ালেট",
	"bitcoin-vs-cbdc::point_8_summary_3":
		" দিয়ে আপনাকে আপনার অর্থের উপর সম্পূর্ণ নিয়ন্ত্রণ দেয়। CBDC ব্যাংক বা সরকারের মতো হেফাজতকারীদের উপর বিশ্বাস প্রয়োজন যাতে তারা আপনার হয়ে আপনার টাকা রাখে।",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoin-এর আর্থিক নীতি কোডে স্থির এবং পরিবর্তন করা যায় না। CBDC রাজনীতিবিদরা ইচ্ছামতো পুনঃপ্রোগ্রাম করতে পারেন,",
	"bitcoin-vs-cbdc::point_9_summary_2": "মুদ্রাস্ফীতি",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" ঘটাচ্ছে যখন অনেক টাকা ছাপানো হয়।",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin এখন পর্যন্ত তৈরি হওয়া সবচেয়ে নিরাপদ কম্পিউটিং নেটওয়ার্ক এবং কখনও হ্যাক হয়নি। CBDC ব্যাংক এবং সরকারের উপর নির্ভর করে যা অগণিতবার হ্যাক হয়েছে।",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">ক্রিপ্টোকারেন্সির</span> মধ্যে পার্থক্য",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoin প্রোটোকল ২০০৯ সাল থেকে মূলত অপরিবর্তিত রয়েছে, অনুমানযোগ্য নিয়ম প্রদান করে। বেশিরভাগ ক্রিপ্টো প্রকল্প ক্রমাগত তাদের প্রোটোকল বা টোকেন অর্থনীতি পরিবর্তন করে বা নতুন সংস্করণে ফর্ক করে।",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin বিশ্বব্যাপী হাজার হাজার স্বাধীন নোডে চলে। বেশিরভাগ ক্রিপ্টো প্রকল্প ফাউন্ডেশন, কোম্পানি বা ছোট ডেভেলপমেন্ট দল দ্বারা পরিচালিত হয় যা একতরফা পরিবর্তন করতে পারে।",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin-এর ২১ মিলিয়ন কয়েনের একটি কঠোর সীমা রয়েছে — সবচেয়ে দুর্লভ ডিজিটাল সম্পদ। বেশিরভাগ ক্রিপ্টো প্রকল্পের সীমাহীন সরবরাহ বা ইচ্ছামতো নতুন টোকেন মিন্ট করার প্রক্রিয়া রয়েছে, ধারকদের অংশ পাতলা করে।",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin-এর একটি উদ্দেশ্য রয়েছে: পিয়ার-টু-পিয়ার ডিজিটাল অর্থ। যে কেউ এটি বুঝতে এবং ব্যবহার করতে পারে। বেশিরভাগ ক্রিপ্টোতে জটিল স্মার্ট চুক্তি বা DeFi জড়িত থাকে যা নিরাপদে ব্যবহার করতে প্রযুক্তিগত দক্ষতা প্রয়োজন।",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoin-এর প্রুফ-অফ-ওয়ার্ক ১৫ বছরেরও বেশি সময় ধরে কোনও সফল মূল নেটওয়ার্ক আক্রমণ ছাড়াই চলছে। বেশিরভাগ ক্রিপ্টো প্রকল্প পরীক্ষামূলক, যুদ্ধ-পরীক্ষিত নয় এমন ঐকমত্য ব্যবহার করে।",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin হল ডিজিটাল অর্থ — মূল্য সঞ্চয় এবং বিনিময়ের মাধ্যম। বেশিরভাগ ক্রিপ্টো টোকেন অস্পষ্ট বাস্তব-বিশ্বের মূল্য সহ অনুমানমূলক বা গভর্নেন্স টোকেন।",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin আক্রমণের অধীনে শক্তিশালী হয় এবং প্রতিটি সংকট, নিষেধাজ্ঞা এবং সমালোচনা থেকে বেঁচে গেছে। বেশিরভাগ ক্রিপ্টো প্রকল্প নিয়ন্ত্রক, প্রযুক্তিগত বা বাজারের চাপের অধীনে ভেঙে পড়ে।",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin-এর কোনও CEO, কোম্পানি বা একক ব্যর্থতার বিন্দু নেই। বেশিরভাগ ক্রিপ্টো প্রকল্প ভেঞ্চার ক্যাপিটালিস্ট, নির্দিষ্ট নেতৃত্ব বা একক কোম্পানির বেঁচে থাকার উপর নির্ভর করে।",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">চারুকলার</span> মধ্যে পার্থক্য",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"প্রতিটি Bitcoin একই এবং বিনিময়যোগ্য। প্রতিটি শিল্পকর্ম অনন্য — ভিন্ন সৃষ্টি, ইতিহাস, অবস্থা এবং উৎপত্তি সরাসরি তুলনা কঠিন করে তোলে।",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin ২৪/৭ একটি বিশ্বব্যাপী বাজারে ট্রেড হয়, যে কেউ অ্যাক্সেসযোগ্য। শিল্পের জন্য বিশেষ নিলাম ঘর, প্রাইভেট ডিলার বা গ্যালারি প্রয়োজন এবং বিক্রি হতে মাস লাগতে পারে।",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bitcoin কেনা বা বিক্রি করতে ১% এর কম খরচ হয়, প্রায়শই অনেক কম। শিল্প বিক্রয় ক্রেতার প্রিমিয়াম, কমিশন, বীমা, শিপিং এবং প্রামাণিকীকরণ ফি-তে ৩০-৪০% জমা হয়।",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin ১০০ মিলিয়ন সাতোশিতে ভাগ হয়, যেকোনো আকারের লেনদেনের জন্য এটি নিখুঁত করে তোলে। আপনি একটি চিত্রকর্মের একটি অংশ বা একটি ভাস্কর্যের কোণা মালিকানা পেতে পারবেন না।",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoin-এর মালিকানা এবং সত্যতা যে কেউ ব্লকচেইনে ক্রিপ্টোগ্রাফিকভাবে যাচাই করতে পারে। শিল্প প্রামাণিকীকরণ ব্যয়বহুল, ধীর এবং এখনও নিয়মিত জালিয়াতকারীদের দ্বারা প্রতারিত হয় — একটি শিল্পকর্মের মূল্য রাতারাতি ধ্বংস করে।",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"সঠিকভাবে সংরক্ষিত Bitcoin বন্যা, আগুন, ভূমিকম্প এবং চুরি থেকে বেঁচে যায়। শিল্প সব ধরনের শারীরিক ধ্বংসের জন্য ঝুঁকিপূর্ণ, এবং বীমা খুব কমই সব কভার করে।",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"ইন্টারনেট সংযোগ এবং কিছু টাকা থাকা যে কেউ Bitcoin কিনতে পারে। শিল্প বিনিয়োগ কার্যত নিলাম এবং বিশেষায়িত জ্ঞানের অ্যাক্সেস সহ ধনী সংগ্রাহকদের মধ্যে সীমাবদ্ধ।",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">স্বর্ণের</span> মধ্যে পার্থক্য",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin ইন্টারনেটের মাধ্যমে কম ফি দিয়ে তাৎক্ষণিকভাবে পাঠানো যায়। মালিকানা স্থানান্তরের জন্য স্বর্ণকে শারীরিকভাবে পাঠাতে হয়।",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin একটি নেটিভ ডিজিটাল সম্পদ যা আপনি ইন্টারনেটে স্থানান্তর করতে পারেন। অনলাইন বেশিরভাগ স্বর্ণ একটি ডিজিটাল রশিদ — আপনি কেবল একজন হেফাজতকারীর প্রতিশ্রুতি রাখেন, ধাতু নিজেই নয়।",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin-এর ২১ মিলিয়ন BTC-এর একটি কঠোর সীমা রয়েছে। স্বর্ণ সরবরাহ প্রতি বছর প্রায় ১.৬% বৃদ্ধি পায়, আপনার অংশ সংকুচিত করে — কাগজের অর্থের",
	"bitcoin-vs-gold::point_3_summary_2": "মুদ্রাস্ফীতির",
	"bitcoin-vs-gold::point_3_summary_3":
		" চেয়ে কম — তবে এখনও মুদ্রাস্ফীতি।",
	"bitcoin-vs-gold::point_4_summary_1":
		"যখন স্বর্ণের দাম বৃদ্ধি পায়, আরও স্বর্ণ খনন করা হয়, দাম আবার কমিয়ে দেয়। Bitcoin-এর সরবরাহ অনমনীয় — দাম যতই উঁচু হোক না কেন, সর্বদা কেবল ২১ মিলিয়ন থাকবে।",
	"bitcoin-vs-gold::point_5_summary_1":
		"হাজার হাজার স্বাধীন নোড Bitcoin নেটওয়ার্ক যাচাই করে। বেশিরভাগ শারীরিক স্বর্ণ কয়েকটি বড় হেফাজতকারীর ভল্টে রাখা হয়।",
	"bitcoin-vs-gold::point_6_summary_1":
		"যে কেউ একটি ফুল নোড চালিয়ে আসল Bitcoin যাচাই করতে পারে — এটি কেবল সফ্টওয়্যার। শারীরিক স্বর্ণ যাচাই করতে এটি গলানো প্রয়োজন; ভিতরে টংস্টেন থাকতে পারে।",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin ১০০ মিলিয়ন সাতোশিতে ভাগ হয়, যেকোনো আকারের কেনাকাটার জন্য এটি নিখুঁত করে তোলে। স্বর্ণ সহজেই ছোট লেনদেনে ভাগ করা যায় না।",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">রিয়েল এস্টেটের</span> মধ্যে পার্থক্য",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin বিশ্বের যেকোনো স্থানে তাৎক্ষণিকভাবে চলে যায়। রিয়েল এস্টেট একটি স্থানে স্থির এবং স্থানীয় অর্থনৈতিক, রাজনৈতিক এবং প্রাকৃতিক ঝুঁকির জন্য ঝুঁকিপূর্ণ।",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin ১০০ মিলিয়ন সাতোশিতে ভাগ হয়। রিয়েল এস্টেট আংশিকভাবে বিক্রি করা যায় না — আপনি কেবল রান্নাঘর বাদ দিতে বা অর্ধেক শয়নকক্ষ কিনতে পারবেন না।",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin একটি বিকেন্দ্রীভূত নেটওয়ার্কে চলে যা কোনও সরকার নিয়ন্ত্রণ করতে পারে না। রিয়েল এস্টেট ব্যাপকভাবে নিয়ন্ত্রিত — জোনিং, ভাড়া নিয়ন্ত্রণ, নিষ্পত্তি কর্তৃত্ব এবং বাজেয়াপ্তি — সবই প্রযোজ্য।",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin-এর কোনও রক্ষণাবেক্ষণ প্রয়োজন নেই। রিয়েল এস্টেটের মেরামত, সংস্কার, বীমা, সম্পত্তি ব্যবস্থাপনা এবং ভাড়াটে সমস্যা প্রয়োজন।",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin-এর কোনও চলমান কর নেই — আপনি কেবল বিক্রি করার সময় মূলধনী লাভ দেন। রিয়েল এস্টেট আয়ের পরোয়া না করে বার্ষিক সম্পত্তি কর দেয়।",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"সঠিকভাবে সংরক্ষিত Bitcoin আগুন, বন্যা, ভূমিকম্প থেকে বেঁচে যায়। রিয়েল এস্টেট যেকোনো দুর্যোগের জন্য ঝুঁকিপূর্ণ, এবং বীমা খুব কমই সব কভার করে।",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"প্রতিটি Bitcoin একই এবং বিনিময়যোগ্য। প্রতিটি সম্পত্তি অনন্য, মূল্যায়ন এবং তুলনা কঠিন করে তোলে।",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin ২৪/৭ বিশ্বব্যাপী ইন্টারনেট সংযোগ থাকা যে কেউ দ্বারা ট্রেড হয়। রিয়েল এস্টেট বিক্রয় স্থানীয় ক্রেতাদের মধ্যে সীমাবদ্ধ এবং সম্পূর্ণ হতে মাসের কাগজপত্র লাগতে পারে।",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin প্রত্যেকের জন্য সরাসরি ব্যক্তিগত মালিকানা সক্ষম করে। আপনার প্রাথমিক বাসস্থান ছাড়া বিনিয়োগ হিসাবে রিয়েল এস্টেট কেনা বাড়ির দাম বাড়ায়, সাশ্রয়ীতা হ্রাস করে এবং আবাসন সংকটকে উৎসাহিত করে।",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">স্টকের</span> মধ্যে পার্থক্য",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin একটি সরাসরি সম্পদ যা আপনি সম্পূর্ণরূপে মালিকানা পান। স্টক হল একটি কোম্পানির শেয়ার — তাদের মূল্য ব্যবস্থাপনা, কর্মক্ষমতা এবং আপনি যে সিদ্ধান্তগুলি নিয়ন্ত্রণ করেন না তার উপর নির্ভর করে।",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin-এর ২১ মিলিয়ন BTC-এর একটি কঠোর সীমা রয়েছে। কোম্পানিগুলি যেকোনো সময় নতুন শেয়ার ইস্যু করতে পারে, বিদ্যমান শেয়ারহোল্ডারদের পাতলা করে — ঠিক যেমন",
	"bitcoin-vs-stocks::point_2_summary_2": "মুদ্রাস্ফীতি",
	"bitcoin-vs-stocks::point_2_summary_3":
		" কাগজের অর্থের মূল্যকে পাতলা করে। Bitcoin-এর সাথে, আপনার অংশ কখনও হ্রাস পায় না।",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin-এর কোনও CEO বা একক ব্যর্থতার বিন্দু নেই। স্টক ব্যবস্থাপনার উপর ব্যাপকভাবে নির্ভর করে — একজন ব্যক্তির খারাপ সিদ্ধান্ত বা চলে যাওয়া দাম বিধ্বস্ত করতে পারে।",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoin-এর দাম উন্মুক্ত বিশ্বব্যাপী বাজার থেকে আসে। স্টক মূল্যায়ন মূল্য-আয়ের অনুপাতের মতো মেট্রিক্সের উপর নির্ভর করে যা অতিমূল্যায়িত স্টকগুলিকে মুখোশ করতে পারে।",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin ২৪/৭ বিশ্বব্যাপী ট্রেড হয়। স্টক এক্সচেঞ্জ কেবল সপ্তাহের দিনগুলিতে ব্যবসায়িক সময়ে খোলা।",
	"bitcoin-vs-stocks::point_6_summary_1": "আপনি সহজ সফ্টওয়্যার দিয়ে Bitcoin",
	"bitcoin-vs-stocks::point_6_summary_2": "স্ব-সংরক্ষণ",
	"bitcoin-vs-stocks::point_6_summary_3":
		" করতে পারেন — কোনও ব্রোকারের প্রয়োজন নেই। স্টক ব্রোকারেজ ফার্মে বসে থাকে, তারা ব্যর্থ হলে আপনাকে কাউন্টারপার্টি ঝুঁকির মধ্যে প্রকাশ করে।",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoin-এর স্থির সরবরাহ এটিকে মুদ্রাস্ফীতির বিরুদ্ধে একটি নির্ভরযোগ্য হেজ করে তোলে। কিছু স্টক মুদ্রাস্ফীতিকে ছাড়িয়ে যায়, অন্যরা যায় না — কোনও গ্যারান্টি নেই।",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"<span class=\"orange\">Bitcoin</span> এবং <span class=\"asset\">Visa</span>-র মধ্যে পার্থক্য",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin একটি উন্মুক্ত নেটওয়ার্ক যার সাথে যে কেউ অনুমতি ছাড়াই সংযোগ এবং ব্যবহার করতে পারে। Visa একটি বন্ধ ব্যবস্থা যা আর্থিক প্রতিষ্ঠান দ্বারা পরিচালিত হয় যারা অ্যাক্সেস অস্বীকার করতে পারে — বিশেষ করে ব্যাংক ছাড়া এবং দরিদ্রদের জন্য।",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin লেনদেনের কোনও বণিক ফি নেই। Visa সাধারণত বণিকদের প্রতি লেনদেনে প্রায় ৩% চার্জ করে — আপনার ব্যবসা",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin পেমেন্ট",
	"bitcoin-vs-visa::point_2_summary_3": " গ্রহণ করে টাকা সাশ্রয় করতে পারে।",
	"bitcoin-vs-visa::point_3_summary_1":
		"প্রতিটি Bitcoin লেনদেন একটি উন্মুক্ত, অডিটযোগ্য ব্লকচেইনে রয়েছে। Visa একটি বন্ধ, ব্যক্তিগত ব্যবস্থা বজায় রাখে যেখানে গ্রাহকরা স্বাধীনভাবে কিছু যাচাই করতে পারে না।",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin কোনও কেন্দ্রীয় কর্তৃপক্ষ দ্বারা জমাট করা যায় না। Visa যেকোনো সময় অ্যাকাউন্ট জমাট, লেনদেন ব্লক বা পরিষেবা অস্বীকার করতে পারে।",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin চূড়ান্ত নিষ্পত্তি — আপনি কেবল তাই খরচ করতে পারেন যা আপনার আছে। ক্রেডিট কার্ড প্রায়শই প্রতি বছর ২৫%-এরও বেশি সুদের হারে ঋণ তৈরি করে।",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin আপনাকে",
	"bitcoin-vs-visa::point_6_summary_2": "স্ব-সংরক্ষণের",
	"bitcoin-vs-visa::point_6_summary_3":
		" ক্ষমতা দেয় — কোনও ব্যাংক বা পেমেন্ট প্রসেসরের প্রয়োজন নেই। ক্রেডিট কার্ডের জন্য সর্বদা মধ্যস্থতাকারী প্রয়োজন।",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin বিশ্বব্যাপী ২৪/৭ ব্যবসায়িক সময় ছাড়াই চলে। Visa-র অপারেশনাল ঘন্টা, রক্ষণাবেক্ষণ বিরতি এবং ভৌগোলিক সীমাবদ্ধতা রয়েছে যা লেনদেন ব্লক করতে পারে।",
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
			const ns = e.namespace;
			if (
				ns === "404" ||
				ns === "about" ||
				ns === "bank-runs" ||
				ns.startsWith("bitcoin-vs-")
			) {
				missing++;
				missingKeys.push(lookupKey);
			}
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (bn): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
