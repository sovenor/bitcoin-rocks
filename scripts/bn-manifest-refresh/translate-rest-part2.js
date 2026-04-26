#!/usr/bin/env node
/**
 * Bengali manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator,
 *   flyers, get-involved, index, lightning, nostr/index, sticker-files/*,
 *   sticker-language-success, sticker-success, stickers, wallets.
 *
 * Idempotent: safe to re-run.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "Bitcoin-এর দাম",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"ডলারে Bitcoin-এর বর্তমান বা ঐতিহাসিক দাম খুঁজুন",
	"business/accounting::accounting_card_pacioli_label": "Bitcoin হিসাবরক্ষক",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_label": "Excel-এ আমদানি",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Excel-এ Bitcoin-এর দাম স্বয়ংক্রিয়ভাবে টেনে আনুন",
	"business/accounting::accounting_card_wallets_label": "হাইব্রিড ওয়ালেট",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"প্রস্তাবিত ব্যবসায়িক ওয়ালেটগুলি দেখুন",
	"business/accounting::accounting_description":
		"আপনার ব্যবসার হিসাবরক্ষণে Bitcoin গ্রহণের জন্য সহজ-ভাষার গাইড — হাইব্রিড ওয়ালেট, খরচের ভিত্তি, মূলধনী লাভ এবং কখন একজন হিসাবরক্ষকের সাথে যোগাযোগ করবেন।",
	"business/accounting::accounting_disclaimer":
		"এই গাইডটি শুধুমাত্র তথ্যমূলক উদ্দেশ্যে এবং এটি কর পরামর্শ নয়। আপনার নির্দিষ্ট পরিস্থিতি অনুযায়ী কর পরামর্শের জন্য একজন যোগ্য হিসাবরক্ষকের সাথে পরামর্শ করুন।",
	"business/accounting::accounting_disclaimer_label": "দ্রষ্টব্য",
	"business/accounting::accounting_example_feb_1": "১ ফেব্রুয়ারি",
	"business/accounting::accounting_example_gain_badge": "মূলধনী লাভ",
	"business/accounting::accounting_example_gain_explain":
		"আপনি ১০ ডলার মূলধনী লাভ রেকর্ড করেন।",
	"business/accounting::accounting_example_gain_result": "+১০ ডলার",
	"business/accounting::accounting_example_jan_1": "১ জানুয়ারি",
	"business/accounting::accounting_example_loss_badge": "মূলধনী ক্ষতি",
	"business/accounting::accounting_example_loss_explain":
		"আপনি ১০ ডলার মূলধনী ক্ষতি রেকর্ড করেন।",
	"business/accounting::accounting_example_loss_result": "−১০ ডলার",
	"business/accounting::accounting_example_received_label": "প্রাপ্ত",
	"business/accounting::accounting_example_sold_label": "বিক্রি করা বা খরচ করা",
	"business/accounting::accounting_hero_subtitle":
		"আপনার ব্যবসায় Bitcoin গ্রহণ আপনার হিসাবরক্ষণকে জটিল করে তোলার দরকার নেই। সংক্ষিপ্ত সংস্করণ — প্লাস সরঞ্জাম এবং বিশেষজ্ঞরা যারা এটি সহজ করে তোলে।",
	"business/accounting::accounting_intro_c1":
		"আপনি যদি ইতিমধ্যে নগদ বা কার্ড গ্রহণ করেন, আপনার ব্যবসার হিসাবরক্ষণে Bitcoin যোগ করা দেখতে যতটা মনে হয় তার চেয়ে সহজ। আপনার দুটি বিকল্প রয়েছে: প্রাপ্তির সময় প্রতিটি Bitcoin পেমেন্ট স্বয়ংক্রিয়ভাবে ডলারে রূপান্তর করুন (কোনও নতুন হিসাবরক্ষণ প্রয়োজন নেই), অথবা কিছু অংশ Bitcoin হিসাবে রাখুন (ট্র্যাক করার জন্য কয়েকটি অতিরিক্ত সংখ্যা)।",
	"business/accounting::accounting_intro_c2":
		"এই গাইডটি আপনাকে উভয়ের মধ্য দিয়ে নিয়ে যায় — তাই আপনি বেছে নিতে পারেন কোনটি আপনার ব্যবসার জন্য কাজ করে এবং আত্মবিশ্বাসের সাথে Bitcoin গ্রহণ করা শুরু করতে পারেন।",
	"business/accounting::accounting_s1": "সহজ উপায়: স্বয়ংক্রিয়ভাবে ডলারে রূপান্তর করুন",
	"business/accounting::accounting_s1_c1":
		"Bitcoin গ্রহণের সহজতম উপায় হল একটি হাইব্রিড ওয়ালেট ব্যবহার করা যা স্বয়ংক্রিয়ভাবে ১০০% প্রাপ্ত Bitcoin পেমেন্ট আসার মুহূর্তে ডলার (বা আপনার স্থানীয় মুদ্রা) এর জন্য বিক্রি করে।",
	"business/accounting::accounting_s1_c2":
		"এই সেটআপের সাথে, আপনার হিসাবরক্ষণ ঠিক আজকের মতো দেখাবে — প্রতিটি বিক্রয়ের জন্য একটি চূড়ান্ত ডলার মোট। কোনও খরচের ভিত্তি নেই, কোনও মূলধনী লাভ নেই, কোনও নতুন স্প্রেডশিট নেই।",
	"business/accounting::accounting_s2":
		"যদি আপনি Bitcoin ধরে রাখেন: খরচের ভিত্তি ট্র্যাক করুন",
	"business/accounting::accounting_s2_c1":
		"কিছু ব্যবসা স্বয়ংক্রিয়ভাবে সম্পূর্ণ রূপান্তর না করে প্রাপ্ত Bitcoin-এর কিছু অংশ ধরে রাখতে বেছে নেয়। এটি যদি আপনি হন, প্রধান অতিরিক্ত পদক্ষেপ হল খরচের ভিত্তি ট্র্যাক করা — প্রাপ্তির দিনে প্রতিটি Bitcoin পেমেন্টের ডলার মূল্য।",
	"business/accounting::accounting_s2_c2":
		"এমনকি যদি আপনি আপনার ব্যবসাকে সম্পূর্ণরূপে Bitcoin-এ চিন্তা করেন, বেশিরভাগ কর কর্তৃপক্ষ এখনও ডলারে রিপোর্টিং চায়। সুখবর: এটি প্রতি লেনদেনে মাত্র দুটি সংখ্যা — প্রাপ্ত Bitcoin-এর পরিমাণ এবং সেই দিনের ডলার মূল্য।",
	"business/accounting::accounting_s2_c3":
		"দৈনিক দাম পরীক্ষা এড়াতে, নীচের সরঞ্জামগুলি ব্যবহার করে লুকআপ স্বয়ংক্রিয় করুন।",
	"business/accounting::accounting_s3":
		"আপনার ধরে রাখা Bitcoin খরচ বা বিক্রি করা",
	"business/accounting::accounting_s3_c1":
		"আপনি যদি স্বয়ংক্রিয়ভাবে প্রতিটি পেমেন্ট ডলারে রূপান্তর করেন, এই বিভাগটি এড়িয়ে যান — এটি আপনার ক্ষেত্রে প্রযোজ্য নয়।",
	"business/accounting::accounting_s3_c2":
		"আপনি যদি কিছু Bitcoin ধরে রাখেন এবং পরে এটি খরচ বা বিক্রি করার সিদ্ধান্ত নেন, আপনার একই খরচের ভিত্তি টেবিলে বিক্রয় মূল্য যোগ করুন। প্রাপ্তির সময় Bitcoin-এর মূল্য এবং খরচ বা বিক্রির সময় এর মূল্যের মধ্যে পার্থক্য একটি মূলধনী লাভ বা ক্ষতি।",
	"business/accounting::accounting_s3_c3": "দুটি দ্রুত উদাহরণ:",
	"business/accounting::accounting_s3_c6":
		"এটাই। মূল গণিত অন্য যেকোনো সম্পদের হিসাবরক্ষণের মতোই যা মূল্যে উপরে বা নিচে যায়।",
	"business/accounting::accounting_s4":
		"একজন Bitcoin-সচেতন পেশাদার প্রয়োজন?",
	"business/accounting::accounting_s4_c1":
		"আপনি যদি এই কাজটি হস্তান্তর করতে চান — অথবা আপনার Bitcoin হিসাবরক্ষণ একটি হাইব্রিড ওয়ালেট সমাধান করতে পারে তার চেয়ে বেশি জড়িত — আমরা Satoshi Pacioli Accounting Services-এর অত্যন্ত সুপারিশ করি, একটি ফার্ম যা ব্যবসার জন্য Bitcoin হিসাবরক্ষণে বিশেষজ্ঞ।",
	"business/accounting::bitcoin_business_accounting_guide":
		"আপনার ব্যবসার জন্য Bitcoin হিসাবরক্ষণ",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — ডলারে Bitcoin-এর বর্তমান এবং ঐতিহাসিক দাম",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — ব্যবসার জন্য Bitcoin হিসাবরক্ষণ",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Excel-এ ক্রিপ্টো দাম আমদানি করা",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"ব্যবসায়ীরা Bitcoin গ্রহণ শুরু করার আগে যে সবচেয়ে সাধারণ প্রশ্নগুলি জিজ্ঞাসা করেন তার সংক্ষিপ্ত উত্তর — ফি, নিষ্পত্তি, ওয়ালেট, রিফান্ড, খরচ এবং আরও অনেক কিছু।",
	"business/faq::faq_intro_c1":
		"উত্তর প্রসারিত করতে নীচের প্রতিটি প্রশ্নে ক্লিক করুন। আপনি যখন Bitcoin গ্রহণ শুরু করতে প্রস্তুত হবেন, পৃষ্ঠার নীচে ব্যবসায়িক সংস্থানগুলি প্রতিটি ধাপ দিয়ে আপনাকে নিয়ে যাবে।",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "হিসাবরক্ষণ",
	"business/index::biz_label_faq": "সাধারণ প্রশ্ন",
	"business/index::biz_label_maps": "বণিক মানচিত্র",
	"business/index::biz_label_rewards": "পুরস্কার",
	"business/index::biz_label_stickers": "স্টিকার",
	"business/index::biz_label_wallets": "ওয়ালেট",
	"business/index::biz_meta_description":
		"কম ফি, তাৎক্ষণিক নিষ্পত্তি, কোনও রিফান্ড নেই এবং আরও গ্রাহকের জন্য আপনার ব্যবসায় Bitcoin গ্রহণ করুন।",
	"business/index::business_hero_subtitle":
		"কম ফি দিয়ে পেমেন্ট গ্রহণ করুন, আপনার টাকা তাৎক্ষণিকভাবে পান এবং লক্ষ লক্ষ নতুন গ্রাহকের কাছে পৌঁছান — কোনও চুক্তি বা লুকানো খরচ ছাড়াই।",
	"business/index::business_intro_c1":
		"Bitcoin আপনার ব্যবসাকে দ্রুত, সস্তা এবং আরও ব্যক্তিগতভাবে অর্থ পাওয়ার একটি উপায় দেয়। কোনও মধ্যস্থতাকারী নেই। কোনও রিফান্ড নেই। কোনও চুক্তি নেই। শুধু টাকা যা সরাসরি আপনার গ্রাহকদের কাছ থেকে আপনার কাছে সেকেন্ডের মধ্যে নিষ্পত্তি হয়।",
	"business/index::business_intro_c2":
		"নীচে কেন Bitcoin ব্যবসার জন্য ভাল তার সংক্ষিপ্ত সংস্করণ — এবং তার নীচে আপনি আজ গ্রহণ শুরু করতে যে সমস্ত সংস্থান প্রয়োজন।",
	"business/index::business_resources_heading":
		"Bitcoin গ্রহণের জন্য আপনার প্রয়োজন সবকিছু",
	"business/index::business_resources_intro":
		"আপনার নিজের গতিতে এই সংস্থানগুলির মধ্য দিয়ে কাজ করুন। প্রতিটি একটি ছোট, ব্যবহারিক গাইড।",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "আপনার ব্যবসা সম্পর্কে আমাদের বলুন",
	"business/maps::biz_maps_form_intro":
		"আপনাকে তালিকাভুক্ত করার জন্য শুধুমাত্র কয়েকটি বিবরণ। ঠিকানার তথ্য আপনার ব্যবসা মানচিত্রে জমা দিতে যতটা দীর্ঘ প্রয়োজন ততটুকু সংরক্ষণ করা হয়।",
	"business/maps::biz_maps_hero_subtitle":
		"BTC Map-এ বিনামূল্যে আপনার ব্যবসা তালিকাভুক্ত করুন — Bitcoin-গ্রহণকারী বণিকদের বৈশ্বিক ওপেন ক্যাটালগ — যাতে কাছাকাছি Bitcoin ব্যবহারকারীরা আপনাকে খুঁজে পেতে এবং আপনার ব্যবসায় Bitcoin খরচ করতে পারে।",
	"business/maps::biz_maps_hero_title":
		"Bitcoin বণিক মানচিত্রে আপনার ব্যবসা যোগ করুন",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin ব্যবহারকারীরা সক্রিয়ভাবে তাদের টাকা খরচ করার জায়গা খুঁজছেন। আপনার ব্যবসাকে মানচিত্রে রাখা কাছাকাছি খেতে, কেনাকাটা করতে বা থাকার জায়গা খুঁজছেন এমন প্রতিটি Bitcoin ব্যবহারকারীর সামনে রাখে — আপনার কোনও খরচ ছাড়াই।",
	"business/maps::biz_maps_intro_c2":
		"নীচের সংক্ষিপ্ত ফর্মটি পূরণ করুন এবং আমরা আপনার পক্ষ থেকে BTC Map এবং অন্যান্য Bitcoin বণিক মানচিত্রে আপনার ব্যবসা জমা দেব।",
	"business/maps::biz_maps_meta_description":
		"BTC Map এবং অন্যান্য Bitcoin বণিক মানচিত্রে বিনামূল্যে আপনার ব্যবসা তালিকাভুক্ত করুন, যাতে কাছাকাছি Bitcoin ব্যবহারকারীরা আপনাকে খুঁজে পেতে পারে।",
	"business/maps::biz_maps_placeholder_address": "রাস্তার ঠিকানা",
	"business/maps::biz_maps_placeholder_category":
		"বিভাগ (যেমন রেস্তোঁরা, ক্যাফে, হোটেল)",
	"business/maps::biz_maps_placeholder_city": "শহর",
	"business/maps::biz_maps_placeholder_country": "দেশ",
	"business/maps::biz_maps_placeholder_name": "ব্যবসার নাম",
	"business/maps::biz_maps_placeholder_region": "রাজ্য / প্রদেশ / অঞ্চল",
	"business/maps::biz_maps_placeholder_website": "ওয়েবসাইট (ঐচ্ছিক)",
	"business/maps::biz_maps_view_map_cta": "BTC Map দেখুন",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "BTC Map দেখুন",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"আপনার ব্যবসা জমা দেওয়ার জন্য ধন্যবাদ। আমরা শীঘ্রই আপনাকে Bitcoin বণিক মানচিত্রে যুক্ত করব।",
	"business/maps-success::biz_maps_success_hero_title":
		"অনুরোধ গ্রহণ করা হয়েছে 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"আপনার ব্যবসা ১-২ সপ্তাহের মধ্যে BTC Map এবং অন্যান্য Bitcoin বণিক ডিরেক্টরিগুলিতে তালিকাভুক্ত হবে। প্রতিটি অনুরোধ মানচিত্রগুলি সঠিক রাখতে ম্যানুয়ালি পর্যালোচনা করা হয়।",
	"business/maps-success::biz_maps_success_timeline_c2":
		"আপনার তালিকা লাইভ হয়ে গেলে, কাছাকাছি Bitcoin ব্যবহারকারীরা আপনার ব্যবসা খুঁজে পেতে পারে এবং Bitcoin খরচ করতে আসতে পারে।",
	"business/maps-success::biz_maps_success_timeline_header": "পরবর্তী কী",
	"business/maps-success::biz_maps_success_view_c1":
		"আপনি অপেক্ষা করার সময়, BTC Map ঘুরে দেখুন এবং Bitcoin গ্রহণকারী বিশ্বব্যাপী ক্রমবর্ধমান ব্যবসার নেটওয়ার্ক দেখুন।",
	"business/maps-success::biz_maps_success_view_header": "আপনি কোথায় উপস্থিত হবেন তা দেখুন",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"আপনার গ্রাহকদের জানাতে ইংরেজিতে আপনার নিজস্ব \"আমরা Bitcoin গ্রহণ করি\" স্টিকার প্রিন্ট করুন যে আপনি Bitcoin গ্রহণ করেন।",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"ইংরেজিতে \"আমরা Bitcoin গ্রহণ করি\" স্টিকার ফাইল ডাউনলোড করুন",
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"আপনার নিজস্ব \"আমরা Bitcoin গ্রহণ করি\" স্টিকার প্রিন্ট করতে ইংরেজিতে স্টিকার ফাইল ডাউনলোড করুন।",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"আপনার ভাষায় \"আমরা Bitcoin গ্রহণ করি\" স্টিকার ফাইল অনুরোধের জন্য ধন্যবাদ।",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"অনুরোধ গ্রহণ করা হয়েছে 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"আমরা ৩-৪ সপ্তাহের মধ্যে আপনার স্টিকার ফাইল তৈরি এবং পোস্ট করব। সেগুলি প্রস্তুত হয়ে গেলে, আপনি স্টিকার ফাইল পৃষ্ঠা থেকে বিনামূল্যে ডাউনলোড এবং প্রিন্ট করতে পারবেন।",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"স্টিকার ফাইলগুলি ব্যাচে প্রকাশিত হয়, তাই আপনার ভাষা সক্রিয় হতে কয়েক সপ্তাহ সময় লাগতে পারে। ধৈর্যের জন্য ধন্যবাদ!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"পরবর্তী কী",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"বাল্ক অর্ডার",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"আরও একটি বিনামূল্যে প্যাকের অনুরোধ করুন",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"আপনি ২-৪ সপ্তাহের মধ্যে আপনার বিনামূল্যে \"আমরা Bitcoin গ্রহণ করি\" স্টিকার পাবেন, ভিতরে ৩টি স্টিকার সহ একটি সাধারণ সাদা খামে।",
	"business/sticker-success::biz_sticker_success_hero_title":
		"আপনার স্টিকার পথে 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"৩টি স্টিকার আপনার ব্যবসার জন্য যথেষ্ট না হলে, নিঃসন্দেহে আরেকটি বিনামূল্যে প্যাকের অনুরোধ করুন — অথবা আমরা যে একই প্রিন্ট শপ ব্যবহার করি সেখান থেকে বাল্ক অর্ডার করুন।",
	"business/sticker-success::biz_sticker_success_more_header":
		"আরও স্টিকার প্রয়োজন?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"আপনার সামনের দরজা বা জানালায়, যাতে গ্রাহকরা প্রবেশের আগে দেখতে পারে",
	"business/sticker-success::biz_sticker_success_tip_2":
		"চেকআউট, বিক্রয়ের পয়েন্ট বা পেমেন্ট এলাকার কাছে",
	"business/sticker-success::biz_sticker_success_tip_3":
		"মেনু, মূল্য তালিকা বা টিপ জারে",
	"business/sticker-success::biz_sticker_success_tip_4":
		"এমন জায়গায় স্টিক করবেন না যা আপনার মালিকানাধীন নয় বা পোস্ট করার অনুমতি নেই",
	"business/sticker-success::biz_sticker_success_tips_header":
		"আপনার স্টিকার লাগানোর জন্য ভাল জায়গা",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"আপনার গ্রাহকদের জানান যে আপনি Bitcoin গ্রহণ করেন। আপনার ব্যবসায় লাগানোর জন্য বিনামূল্যে \"আমরা Bitcoin গ্রহণ করি\" স্টিকারের একটি প্যাকের অর্ডার করুন।",
	"business/stickers::biz_stickers_hero_title":
		"বিনামূল্যে \"আমরা Bitcoin গ্রহণ করি\" স্টিকার",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoin গ্রহণ কাজের অর্ধেক মাত্র — আপনার গ্রাহকদেরও জানা দরকার যে আপনি গ্রহণ করেন। এই ছোট \"আমরা Bitcoin গ্রহণ করি\" স্টিকারগুলি আপনার সামনের দরজা, চেকআউট, মেনু বা যেখানেই গ্রাহকরা পেমেন্টের আগে দেখবেন সেখানে আটকানোর জন্য ডিজাইন করা হয়েছে।",
	"business/stickers::biz_stickers_intro_c2":
		"আমরা মার্কিন যুক্তরাষ্ট্র বা কানাডার যেকোনো জায়গায় বিনামূল্যে প্যাক মেইল করব, অথবা আপনি বিশ্বের যেকোনো জায়গায় আপনার নিজস্ব প্রিন্ট করতে পারেন।",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 কানাডা — বিনামূল্যে মেইল",
	"business/stickers::biz_stickers_option_print":
		"🌍 বিশ্বব্যাপী — আমি নিজে প্রিন্ট করব",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 মার্কিন যুক্তরাষ্ট্র — বিনামূল্যে মেইল",
	"business/stickers::biz_stickers_placeholder_translation1":
		"\"আমরা Bitcoin গ্রহণ করি\"-এর অনুবাদ",
	"business/stickers::biz_stickers_placeholder_translation2":
		"\"Bitcoin কেন ব্যবসার জন্য ভাল তা জানতে স্ক্যান করুন\"-এর অনুবাদ",
	"business/stickers::biz_stickers_print_c1":
		"আপনি যেখানেই বাস করেন না কেন, আপনি আপনার নিজস্ব \"আমরা Bitcoin গ্রহণ করি\" স্টিকার প্রিন্ট করতে পারেন। স্টিকার ফাইল এবং প্রিন্টিং নির্দেশাবলী ডাউনলোড করতে নীচে আপনার ভাষা ক্লিক করুন।",
	"business/stickers::biz_stickers_print_header":
		"আপনার নিজস্ব স্টিকার ফাইল প্রিন্ট করুন",
	"business/stickers::biz_stickers_request_c1":
		"আপনার স্থানীয় ভাষায় \"আমরা Bitcoin গ্রহণ করি\" স্টিকার ফাইল অনুরোধ করতে নীচের ফর্মটি পূরণ করুন। প্রস্তুত হলে আমরা আপনাকে জানাব।",
	"business/stickers::biz_stickers_request_header":
		"আপনার ভাষা দেখছেন না?",
	"business/stickers::biz_stickers_step_description":
		"আমরা মার্কিন যুক্তরাষ্ট্র এবং কানাডায় বিনামূল্যে প্যাক মেইল করব। আপনি বিশ্বের যেকোনো জায়গায় আপনার নিজস্ব প্রিন্ট করতে পারেন।",
	"business/stickers::biz_stickers_step_header":
		"আপনি কীভাবে আপনার স্টিকার পেতে চান?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::biz_wallets_meta_description":
		"সব Bitcoin ওয়ালেট ইন্টারঅপারেট করে — আপনার ব্যবসার সাথে মানানসই একটি বেছে নিন। বিনামূল্যে, তাৎক্ষণিক নিষ্পত্তি, কোনও রিফান্ড নেই।",
	"business/wallets::sources_breez_business":
		"Breez — শুধুমাত্র Bitcoin Lightning ওয়ালেট",
	"business/wallets::sources_ibex":
		"IBEX — Lightning পেমেন্ট অবকাঠামো",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin পেমেন্ট প্রসেসর",
	"business/wallets::sources_square":
		"Square — Bitcoin পেমেন্ট গ্রহণ করুন",
	"business/wallets::sources_zaprite":
		"Zaprite — ব্যবসার জন্য Bitcoin ইনভয়েসিং",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin ওয়ালেট বিনামূল্যে। আপনার ব্যবসার সাথে মানানসই একটি বেছে নিন — ব্যক্তিগত, অনলাইন বা ইনভয়েস-ভিত্তিক — এবং মিনিটের মধ্যে Bitcoin গ্রহণ শুরু করুন।",
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::wallets_section_invoice": "ইনভয়েস-ভিত্তিক ব্যবসার ওয়ালেট",
	"business/wallets::wallets_section_invoice_intro":
		"আপনি যদি গ্রাহকদের ইনভয়েস পাঠান (পরামর্শ, ফ্রিল্যান্স, B2B পরিষেবা), একটি ইনভয়েস-ভিত্তিক ওয়ালেট ব্যবহার করুন। আপনার গ্রাহক কয়েকটি ক্লিকে Bitcoin ইনভয়েস পরিশোধ করেন।",
	"business/wallets::wallets_section_multiple":
		"একাধিক কর্মচারী সহ ব্যবসার ওয়ালেট",
	"business/wallets::wallets_section_multiple_intro":
		"আপনার যদি একটি দল থাকে যা চেকআউটে পেমেন্ট গ্রহণ করে, একটি ওয়ালেট বেছে নিন যা একাধিক-কর্মচারী সাইন-ইন সমর্থন করে — প্রতিটি কর্মী তাদের নিজস্ব PIN পায়, এবং আপনি কে কোন পেমেন্ট গ্রহণ করেছে তার একটি পরিষ্কার অডিট লগ বজায় রাখেন।",
	"business/wallets::wallets_section_online": "অনলাইন ব্যবসার ওয়ালেট",
	"business/wallets::wallets_section_online_intro":
		"একটি ওয়েবসাইটে বিক্রি করছেন? এই ওয়ালেটগুলি আপনার অনলাইন স্টোরের সাথে সংযুক্ত হয় এবং বিশ্বের যে কোনও জায়গা থেকে যেকোনো গ্রাহকের কাছ থেকে Bitcoin গ্রহণ করে — কোনও রিফান্ড নেই এবং কোনও বণিক অ্যাকাউন্টের প্রয়োজন নেই।",
	"business/wallets::wallets_section_sole":
		"একক ব্যবসার ওয়ালেট",
	"business/wallets::wallets_section_sole_intro":
		"আপনি যদি একটি দোকান, ক্যাফে, স্টুডিও বা পরিষেবা নিজে চালান, এই ওয়ালেটগুলির যেকোনো একটি কাজ করবে। আপনি পেমেন্ট Bitcoin হিসাবে রাখতে চান বা স্বয়ংক্রিয়ভাবে প্রতিটি পেমেন্টের কিছু অংশ আপনার স্থানীয় মুদ্রায় রূপান্তর করতে চান তার উপর ভিত্তি করে বেছে নিন।",
	"business/wallets::wallets_strike_note":
		"Strike Business আপনাকে ফি ছাড়াই Bitcoin এবং Lightning পেমেন্ট গ্রহণ করতে এবং তাৎক্ষণিকভাবে নিষ্পত্তি করতে দেয়। এটি ব্যক্তিগত, অনলাইন এবং ইনভয়েস-ভিত্তিক পেমেন্ট সমর্থন করে, ঐচ্ছিক স্বয়ংক্রিয় রূপান্তর সহ আপনার স্থানীয় মুদ্রায়।",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"আমরা Bitcoin গ্রহণ করি",
	"business/why::why_biz_s1": "কম ফি, ব্যবসার জন্য বেশি",
	"business/why::why_biz_s1_c1":
		"Bitcoin পেমেন্ট ব্যাংক এবং ক্রেডিট কার্ড কোম্পানিগুলিকে বাইপাস করে যারা প্রতিটি বিক্রয়ের ২-৩% চার্জ করে। ব্যবসা আপনি যা পরিশোধ করেন তার বেশি রাখে — যা সাধারণত আপনার জন্য ভাল দাম এবং পরিষেবা বোঝায়।",
	"business/why::why_biz_s2": "তাৎক্ষণিক নিষ্পত্তি, কোনও রিফান্ড নেই",
	"business/why::why_biz_s2_c1":
		"Bitcoin পেমেন্ট সরাসরি আপনার ওয়ালেট থেকে ব্যবসায়ের কাছে সেকেন্ডের মধ্যে নিষ্পত্তি হয়। ব্যাংকের তহবিল মুক্তির জন্য দিন অপেক্ষা করার দরকার নেই, এবং ব্যয়বহুল চার্জব্যাক বিরোধ নেই — তাই ব্যবসাগুলি জালিয়াতির সাথে লড়াই করার পরিবর্তে গ্রাহকদের সেবা করার উপর মনোনিবেশ করতে পারে।",
	"business/why::why_biz_s3": "বিনামূল্যে গ্রহণ করতে, সবার জন্য উন্মুক্ত",
	"business/why::why_biz_s3_c1":
		"Bitcoin গ্রহণকারী ব্যবসার জন্য কোনও চুক্তি, মাসিক ফি বা সেটআপ খরচ নেই। এবং বিশ্বব্যাপী লক্ষ লক্ষ Bitcoin ব্যবহারকারী সক্রিয়ভাবে গ্রহণকারী বণিকদের খুঁজছেন — যা ব্যবসার নতুন গ্রাহকদের বিনামূল্যে এক্সপোজার দেয়।",
	"business/why::why_business_cta_intro":
		"একটি ব্যবসা চালান এবং Bitcoin গ্রহণ শুরু করতে চান?",
	"business/why::why_business_cta_link": "এটি কীভাবে কাজ করে দেখুন →",
	"business/why::why_for_business": "কেন Bitcoin এই ব্যবসার জন্য দুর্দান্ত",
	"business/why::why_for_business_intro":
		"Bitcoin গ্রহণ ব্যবসাকে প্রতিটি বিক্রয়ের বেশি রাখতে, রিফান্ড ছাড়াই তাৎক্ষণিকভাবে পেমেন্ট পেতে এবং Bitcoin ব্যবহারকারীদের বৈশ্বিক দর্শকদের কাছে পৌঁছাতে দেয় — সব কিছু চুক্তি এবং মাসিক ফি ছাড়াই।",
	"business/why::why_good_for_you": "কেন Bitcoin আপনার জন্যও দুর্দান্ত",
	"business/why::why_good_for_you_intro":
		"Bitcoin কেবল চেকআউটে দুর্দান্ত নয় — এটি অর্থের একটি ভাল রূপ যা আপনার সঞ্চয়, গোপনীয়তা এবং পরিচালনাগত স্বাধীনতা রক্ষা করে। এখানে একটি দ্রুত ওভারভিউ।",
	"business/why::why_hero_subtitle":
		"আপনি এইমাত্র একটি \"আমরা Bitcoin গ্রহণ করি\" স্টিকার স্ক্যান করেছেন। এটি কেন দুর্দান্ত সংবাদ — এই ব্যবসা এবং আপনার জন্য।",
	"business/why::why_intro_c1":
		"আপনি যে ব্যবসায় আছেন সেটি Bitcoin গ্রহণ করে — একটি আধুনিক, ওপেন সোর্স পেমেন্ট নেটওয়ার্ক যা বিশ্বের যে কেউ ব্যবহার করতে পারে, ব্যাংক বা মধ্যস্থতাকারীদের কমিশন নেওয়া ছাড়াই।",
	"business/why::why_intro_c2":
		"নীচে কেন Bitcoin গ্রহণ এই ব্যবসার জন্য ভাল তার সংক্ষিপ্ত সংস্করণ — প্লাস একজন গ্রাহক হিসাবে Bitcoin ব্যবহার কেন আপনার জন্য ভাল।",
	"business/why::why_learn_more_lowercase": "আরও জানুন →",
	"business/why::why_next_business_label": "Bitcoin গ্রহণ করুন",
	"business/why::why_next_business_title": "আপনার ব্যবসায় Bitcoin গ্রহণ করুন",
	"business/why::why_next_buy_label": "Bitcoin কিনুন",
	"business/why::why_next_buy_title": "আপনার প্রথম Bitcoin কিনুন",
	"business/why::why_next_learn_label": "আরও জানুন",
	"business/why::why_next_learn_title": "Bitcoin সম্পর্কে আরও জানুন",
	"business/why::why_next_wallet_label": "একটি ওয়ালেট পান",
	"business/why::why_next_wallet_title": "আপনার নিজের Bitcoin ওয়ালেট পান",
	"business/why::why_s1_c1":
		"মুদ্রাস্ফীতি ঘটে যখন শূন্য থেকে আরও টাকা ছাপানো বা তৈরি হয়। এটি আপনার পকেটের টাকার মূল্য সময়ের সাথে কম করে তোলে — এই কারণেই দাম বছর বছর বাড়তে থাকে।",
	"business/why::why_s1_c2":
		"Bitcoin-এর একটি স্থির সরবরাহ রয়েছে ২১ মিলিয়ন কয়েনের। কোনও সরকার, ব্যাংক বা কোম্পানি আর বেশি ছাপাতে পারে না। আপনার Bitcoin সঞ্চয় সময়ের সাথে এর মূল্য বজায় রাখে, হারানোর পরিবর্তে।",
	"business/why::why_s2_c1":
		"সাম্প্রতিক বছরগুলিতে, ব্যাংক রানের কারণে বেশ কয়েকটি মার্কিন ব্যাংক ব্যর্থ হয়েছে। যখন অনেক গ্রাহক একবারে টাকা তুলতে চান, ব্যাংকগুলির সবাইকে দেওয়ার জন্য যথেষ্ট নগদ ছিল না।",
	"business/why::why_s2_c2":
		"আপনার টাকা নিরাপদে রাখার পরিবর্তে, ব্যাংকগুলি এর বেশিরভাগ ধার দেয় এবং বিনিয়োগ করে। যদি সেই বিনিয়োগগুলি খারাপ হয় — বা আমানতকারীরা আস্থা হারান — ব্যাংক ব্যর্থ হতে পারে এবং আপনার আমানত জমাট বা হারিয়ে যেতে পারে।",
	"business/why::why_s2_c3":
		"Bitcoin-এর সাথে, আপনি নিজের ওয়ালেটে সরাসরি নিজের টাকা সংরক্ষণ করতে পারেন। কোনও ব্যাংক নেই। কোনও মধ্যস্থতাকারী নেই। কোনও ব্যাংক রান নেই।",
	"business/why::why_s3_c1":
		"ক্রেডিট কার্ড, PayPal বা প্রচলিত ব্যাংক অ্যাকাউন্টের বিপরীতে, Bitcoin ব্যবহারের জন্য কারও কাছ থেকে অনুমতি প্রয়োজন নেই।",
	"business/why::why_s3_c2":
		"কেউ আপনার অ্যাকাউন্ট জমাট করতে, একটি পেমেন্ট ব্লক করতে বা নেটওয়ার্ক থেকে আপনাকে কাটতে পারে না। এটি ইতিহাসের প্রথম আর্থিক ব্যবস্থা যা আপনি সেন্সরশিপ বা বাজেয়াপ্তির ভয় ছাড়াই অবাধে ব্যবহার করতে পারেন।",
	"business/why::why_s4_c1":
		"Bitcoin প্রায়শই ভুল বোঝা যায়, কিন্তু নীরবে বিশ্বে অনেক ভাল কাজ করছে।",
	"business/why::why_s4_c2":
		"এটি মানবাধিকার কর্মীদের তাদের স্বাধীনতার লড়াইয়ে সাহায্য করেছে, ল্যান্ডফিল এবং তেলক্ষেত্র থেকে বৈশ্বিক মিথেন নির্গমন কমিয়েছে, বৈদ্যুতিক গ্রিড স্থিতিশীল করেছে এবং জাতীয় উদ্যানের মতো সর্বজনীন পণ্যগুলিকে অর্থায়ন করেছে।",
	"business/why::why_whats_next_heading": "পরবর্তী কোথায়?",
	"business/why::why_whats_next_intro":
		"এটি যদি আপনার প্রথম Bitcoin স্টিকার স্ক্যান হয়, এখানে চালিয়ে যাওয়ার সবচেয়ে সহায়ক জায়গাগুলি।",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_bitcoin_guide": "Bitcoin কীভাবে কিনবেন",
	"buy::buy_header_subtitle":
		"আপনার প্রথম Bitcoin কেনার জন্য একটি সহজ, ধাপে ধাপে গাইড।",
	"buy::buy_howto_name": "Bitcoin কীভাবে কিনবেন",
	"buy::buy_meta_description":
		"আমাদের ধাপে ধাপে গাইড দিয়ে Bitcoin নিরাপদে কিনতে শিখুন। আপনার জন্য সেরা Bitcoin কেনার বিকল্পগুলি খুঁজে পেতে আপনার দেশ এবং পেমেন্ট পদ্ধতি বেছে নিন।",
	"buy::buy_step_1_eyebrow": "ধাপ ১",
	"buy::buy_step_1_header": "আপনার দেশ বেছে নিন",
	"buy::buy_step_2_eyebrow": "ধাপ ২",
	"buy::buy_step_2_header": "একটি পেমেন্ট পদ্ধতি বেছে নিন",
	"buy::buy_step_3_eyebrow": "ধাপ ৩",
	"buy::buy_step_3_header": "আপনার কেনাকাটার বিকল্প",
	"buy::buy_step_4_eyebrow": "ধাপ ৪",
	"buy::buy_step_4_header": "Bitcoin নিরাপদে সংরক্ষণ করুন",
	"buy::buy_storage_cta_label": "পরবর্তী ধাপ",
	"buy::sources_bisq":
		"Bisq — বিকেন্দ্রীভূত পিয়ার-টু-পিয়ার Bitcoin এক্সচেঞ্জ",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — Bitcoin ATM-এর বৈশ্বিক ডিরেক্টরি",
	"buy::sources_kraken": "Kraken — প্রতিষ্ঠিত Bitcoin এক্সচেঞ্জ",
	"buy::sources_relai":
		"Relai — সুইস শুধুমাত্র-Bitcoin স্ব-সংরক্ষণ অ্যাপ",
	"buy::sources_river":
		"River — শুধুমাত্র-Bitcoin ক্রয়, মাইনিং এবং সঞ্চয়",
	"buy::sources_strike_lightning":
		"Strike — Lightning Network সমর্থন সহ Bitcoin কিনুন",
	"buy::sources_swan":
		"Swan Bitcoin — শুধুমাত্র-Bitcoin ডলার-কস্ট অ্যাভারেজিং",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "একটি ভাষা যোগ করুন",
	"common::common_next_buy_bitcoin": "Bitcoin কিনুন",
	"common::common_next_buy_bitcoin_desc":
		"Bitcoin নিরাপদে কিনতে শিখুন",
	"common::common_next_calculate": "আপনার মুদ্রাস্ফীতি গণনা করুন",
	"common::common_next_calculate_desc":
		"সময়ের সাথে মুদ্রাস্ফীতি আপনার বেতনকে কীভাবে প্রভাবিত করে দেখুন",
	"common::common_next_get_wallet": "একটি ওয়ালেট পান",
	"common::common_next_get_wallet_desc":
		"আপনার প্রথম Bitcoin ওয়ালেট পান — এটি বিনামূল্যে",
	"common::common_next_keep_learning": "শিখতে থাকুন",
	"common::common_next_keep_learning_desc":
		"Bitcoin কীভাবে বিশ্বকে উন্নত করছে দেখুন",
	"common::common_site_tagline": "সবার জন্য Bitcoin শিক্ষা।",
	"common::common_source_bls_cpi":
		"মার্কিন শ্রম পরিসংখ্যান ব্যুরো — ভোক্তা মূল্য সূচক (CPI)",
	"common::common_source_btc_map":
		"BTC Map — Bitcoin-গ্রহণকারী বণিকদের বৈশ্বিক ডিরেক্টরি",
	"common::common_source_btcpayserver":
		"BTCPay Server — বিনামূল্যে, ওপেন সোর্স, স্ব-হোস্টেড Bitcoin পেমেন্ট প্রসেসর",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — অর্থ সরবরাহ (শ্রেণীগত সূচক)",
	"common::common_source_oshi":
		"Oshi — বণিকদের জন্য Bitcoin পুরস্কার প্ল্যাটফর্ম",
	"common::common_source_strike_business":
		"Strike — ব্যবসার জন্য Bitcoin এবং Lightning পেমেন্ট",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (২০০৮)",
	"common::common_sources_group_bitcoin": "Bitcoin ডেটা",
	"common::common_sources_group_cpi":
		"মুদ্রাস্ফীতি / ভোক্তা মূল্য সূচক",
	"common::common_sources_group_debt": "সরকারি ঋণ",
	"common::common_sources_group_money": "অর্থ সরবরাহ ডেটা",
	"common::common_sources_group_stories": "বাস্তব-বিশ্বের উদাহরণ",
	"common::common_sources_treasury_auction":
		"James Lavish — \"Can a Treasury Auction Fail?\"",
	"common::common_sticker_files_mission_5": "একটি প্যাকের অর্ডার করুন",
	"common::common_sticker_files_mission_6": "ইংরেজিতে বিনামূল্যে স্টিকার।",
	"common::common_sticker_files_next_flyers_label": "লিফলেট",
	"common::common_sticker_files_next_flyers_title": "একটি Bitcoin লিফলেট প্রিন্ট করুন",
	"common::common_sticker_files_next_languages_label": "স্টিকার ফাইল",
	"common::common_sticker_files_next_languages_title":
		"অন্যান্য ভাষায় স্টিকার ফাইল দেখুন",
	"common::common_sticker_files_print_these":
		"এক ক্লিকে এগুলি প্রিন্ট করুন",
	"common::common_sticker_name_bdhi_black":
		"\"Bitcoin-এর কোনও মুদ্রাস্ফীতি নেই\" স্টিকার (কালো)",
	"common::common_sticker_name_bdhi_orange":
		"\"Bitcoin-এর কোনও মুদ্রাস্ফীতি নেই\" স্টিকার (কমলা)",
	"common::common_sticker_name_caution":
		"Bitcoin \"সতর্কতা! গলন্ত বরফের ঘনক\" স্টিকার",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin \"মুদ্রাস্ফীতির নিরাময়\" স্টিকার",
	"common::common_sticker_name_danger":
		"Bitcoin \"বিপদ! সামনে মুদ্রাস্ফীতি\" স্টিকার",
	"common::common_sticker_name_fix":
		"Bitcoin \"টাকা ঠিক করুন, বিশ্ব ঠিক করুন\" স্টিকার",
	"common::common_sticker_name_got_inflation":
		"Bitcoin \"মুদ্রাস্ফীতি পেয়েছেন?\" স্টিকার",
	"common::common_sticker_name_study":
		"\"Bitcoin অধ্যয়ন করুন\" স্টিকার",
	"common::common_sticker_name_warning":
		"Bitcoin \"সতর্কবাণী! মুদ্রাস্ফীতি আপনার সঞ্চয় চুরি করছে\" স্টিকার",
	"common::common_sticker_name_what_if":
		"Bitcoin \"যদি আপনার মুদ্রাস্ফীতি না থাকত?\" স্টিকার",
	"common::common_sticker_tips_heading": "স্টিকার টিপস",
	"common::common_sticker_tips_intro":
		"আপনার স্টিকার প্রিন্ট করার পরে, এগুলি এমন জায়গায় লাগান যেখানে মানুষ দেখবে! স্টিকারের জন্য ভাল জায়গা:",
	"common::common_sticker_tips_list_1":
		"যেখানে মানুষ এগুলি দেখবে এমন সর্বজনীন স্থানে",
	"common::common_sticker_tips_list_2":
		"এমন জায়গায় যেখানে দ্রুত অপসারণের সম্ভাবনা কম (স্টিকার স্থায়ী ক্ষতি করে না)",
	"common::common_sticker_tips_list_3":
		"সহজে আটকানো পৃষ্ঠতলে (ধাতু, প্লাস্টিক, কাচ)",
	"common::common_sticker_tips_list_4":
		"ব্যক্তিগত সম্পত্তিতে নয় এবং সাইন, ATM বা গ্যাস পাম্প ঢাকবেন না",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_stickers_printer_prefix": "আমরা ব্যবহার করি",
	"common::common_stickers_printer_suffix":
		", কিন্তু আপনি যেকোনো স্টিকার কোম্পানি ব্যবহার করতে পারেন।",
	"common::common_whats_next": "পরবর্তী কী?",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::cic_calculator_heading":
		"আপনার মুদ্রাস্ফীতির ফাঁক গণনা করুন",
	"compound-inflation-calculator::cic_cta_label": "পরবর্তী ধাপ",
	"compound-inflation-calculator::cic_hero_subtitle":
		"মুদ্রাস্ফীতির সাথে তাল মিলিয়ে চলতে আপনার বেতন কতটা বাড়াতে হবে দেখুন।",
	"compound-inflation-calculator::cic_next_explore_topics":
		"আরও বিষয় অন্বেষণ করুন",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Bitcoin কীভাবে অর্থ, স্বাধীনতা, শক্তি এবং আরও কিছুর সাথে সম্পর্কিত দেখুন।",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"মুদ্রাস্ফীতি কীভাবে কাজ করে তা শিখুন",
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — সমস্ত শহুরে ভোক্তাদের জন্য ভোক্তা মূল্য সূচক",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 অর্থ সরবরাহ",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_hero_subtitle":
		"বিনামূল্যে, মুদ্রণযোগ্য Bitcoin লিফলেট। আরও মানুষকে Bitcoin সম্পর্কে জানতে সাহায্য করতে এগুলি সর্বজনীন স্থানে রাখুন।",
	"flyers::flyers_hero_title": "Bitcoin লিফলেট প্রিন্ট এবং বিতরণ করুন",
	"flyers::flyers_intro_header":
		"এই Bitcoin লিফলেটগুলি কীভাবে প্রিন্ট এবং বিতরণ করবেন",
	"flyers::flyers_next_get_stickers": "কথা ছড়িয়ে দিন",
	"flyers::flyers_next_get_stickers_desc":
		"বিনামূল্যে Bitcoin স্টিকারের একটি প্যাকের অর্ডার করুন",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"যুক্ত হন এবং Bitcoin ছড়িয়ে দিতে সাহায্য করুন",
	"get-involved::get_involved_card_business_label": "ব্যবসায়িক কিট",
	"get-involved::get_involved_card_business_source":
		"সূত্র: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"একটি বিনামূল্যে Bitcoin ব্যবসায়িক কিটের অর্ডার করুন",
	"get-involved::get_involved_card_flyers_label": "মুদ্রিত লিফলেট",
	"get-involved::get_involved_card_flyers_source":
		"সূত্র: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"একটি বিনামূল্যে Bitcoin লিফলেট ডাউনলোড এবং মুদ্রণ করুন",
	"get-involved::get_involved_card_github_label": "ওপেন সোর্স",
	"get-involved::get_involved_card_github_source": "সূত্র: GitHub →",
	"get-involved::get_involved_card_github_title":
		"GitHub-এ bitcoin.rocks-এ অবদান রাখুন",
	"get-involved::get_involved_card_stickers_label": "বিনামূল্যে স্টিকার",
	"get-involved::get_involved_card_stickers_source":
		"সূত্র: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"আপনার দরজায় পৌঁছে দেওয়া বিনামূল্যে Bitcoin স্টিকারের একটি প্যাকের অর্ডার করুন",
	"get-involved::get_involved_description":
		"আমাদের বিনামূল্যে সংস্থানগুলি Bitcoin ছড়িয়ে দেওয়া সহজ করে তোলে। স্টিকার, লিফলেট, ব্যবসায়িক কিট এবং ওপেন সোর্স যা যে কেউ অবদান রাখতে পারেন।",
	"get-involved::get_involved_flyers_content_1":
		"লিফলেট হল আপনার সম্প্রদায়ে Bitcoin পরিচয় করিয়ে দেওয়ার সহজতম উপায়গুলির একটি। বিনামূল্যে, মুদ্রণযোগ্য Bitcoin লিফলেটটি ডাউনলোড করুন, যত কপি চান প্রিন্ট করুন এবং সম্প্রদায়ের বোর্ড, ক্যাফে, মিটিং বা যেখানেই মানুষ জড়ো হয় সেখানে বিতরণ করুন।",
	"get-involved::get_involved_flyers_content_2":
		"প্রতিটি লিফলেটে একটি দৃষ্টি-আকর্ষক শিরোনাম এবং একটি QR কোড রয়েছে যা কৌতূহলী পাঠকদের আরও জানতে bitcoin.rocks-এ পাঠায়।",
	"get-involved::get_involved_flyers_content_3":
		"স্টিকারের বিপরীতে, লিফলেটগুলি বিশ্বের যেকোনো জায়গায় অন-ডিমান্ড প্রিন্ট করা যেতে পারে — আপনার শুধুমাত্র একটি প্রিন্টার এবং কয়েক মিনিট প্রয়োজন।",
	"get-involved::get_involved_flyers_header": "একটি লিফলেট প্রিন্ট এবং বিতরণ করুন",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks থেকে বিনামূল্যে মুদ্রণযোগ্য Bitcoin লিফলেটের পূর্বরূপ",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks একটি বিনামূল্যে, ওপেন সোর্স প্রকল্প যা MIT-এর অধীনে লাইসেন্সপ্রাপ্ত। আমাদের মিশন হল শিক্ষার মাধ্যমে Bitcoin গ্রহণ ত্বরান্বিত করা — এবং আমরা এটি একা করতে পারি না।",
	"get-involved::get_involved_github_content_2":
		"আপনি একজন ডেভেলপার, ডিজাইনার, লেখক বা অনুবাদক হোন না কেন, সাহায্য করার একটি উপায় আছে। আমরা বিশেষভাবে অনুবাদকদের স্বাগত জানাই যারা আমাদের বিষয়বস্তু আরও ভাষায় অনুবাদ করতে পারেন, যাতে বিশ্বব্যাপী আরও মানুষ তাদের মাতৃভাষায় Bitcoin সম্পর্কে শিখতে পারে।",
	"get-involved::get_involved_github_content_3":
		"রিপোজিটরিটি ফর্ক করুন, একটি পুল অনুরোধ খুলুন, একটি ইস্যু জমা দিন, বা সমর্থন দেখাতে কেবল প্রকল্পটিকে একটি স্টার দিন। প্রতিটি অবদান Bitcoin-কে আরও মানুষের কাছে পৌঁছাতে সাহায্য করে।",
	"get-involved::get_involved_github_header": "GitHub-এ অবদান রাখুন",
	"get-involved::get_involved_header":
		"যুক্ত হন এবং Bitcoin ছড়িয়ে দিন।",
	"get-involved::get_involved_intro_5":
		"আপনি এটি পরিবর্তন করতে সাহায্য করতে পারেন। আপনার চারপাশের মানুষের কাছে Bitcoin আনে এমন আশা ছড়িয়ে দেওয়া সহজ করতে আমরা কয়েকটি বিনামূল্যে সংস্থান তৈরি করেছি।",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks থেকে Bitcoin টেক্সট সহ বিনামূল্যে স্টিকারের একটি প্যাক",
});

/* ─────────────── index (homepage) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "সঞ্চয়",
	"index::home_card_label_art_1": "চলুন তুলনা করি",
	"index::home_card_label_art_2": "কথা ছড়িয়ে দিন",
	"index::home_card_label_art_3": "রাস্তার শিল্প",
	"index::home_card_label_bank_runs": "সম্পূর্ণ-রিজার্ভ ব্যবস্থা",
	"index::home_card_label_bonds": "চলুন তুলনা করি",
	"index::home_card_label_business_1": "পার্থক্য কী?",
	"index::home_card_label_business_2": "Bitcoin পেমেন্ট গ্রহণ করুন",
	"index::home_card_label_cash": "চলুন তুলনা করি",
	"index::home_card_label_cbdc": "উন্মুক্ত বা বন্ধ?",
	"index::home_card_label_coding_1": "ইন্টারঅ্যাক্টিভ টিউটোরিয়াল",
	"index::home_card_label_coding_2": "হার্ডওয়্যার তৈরি করুন",
	"index::home_card_label_coding_3": "কোডিং পাজল",
	"index::home_card_label_crowdfunding_1": "EndSARS প্রতিবাদ",
	"index::home_card_label_crowdfunding_2": "থামানো যায় না এমন টাকা",
	"index::home_card_label_crowdfunding_3": "আপনার প্রকল্পে তহবিল দিন",
	"index::home_card_label_crypto": "পার্থক্য কী?",
	"index::home_card_label_energy_1": "গ্রিড স্থিতিশীলকরণ",
	"index::home_card_label_energy_4": "চাহিদা প্রতিক্রিয়া",
	"index::home_card_label_energy_5": "গ্রামীণ বিদ্যুতায়ন",
	"index::home_card_label_energy_6": "নবায়নযোগ্য শক্তি প্রণোদনা",
	"index::home_card_label_environment_1": "মিথেন হ্রাস",
	"index::home_card_label_environment_2": "সংরক্ষিত জাতীয় উদ্যান",
	"index::home_card_label_environment_3": "সবচেয়ে সবুজ শিল্প",
	"index::home_card_label_environment_4": "ফ্লেয়ারিং গ্যাস হ্রাস",
	"index::home_card_label_equality_1": "আশা এবং সুযোগ",
	"index::home_card_label_equality_2": "সূচনা বিন্দু",
	"index::home_card_label_food_1": "খাদ্যের দাম",
	"index::home_card_label_food_2": "খামার এবং মাটি",
	"index::home_card_label_freedom_1": "কর্তৃত্ববাদী শাসন",
	"index::home_card_label_freedom_2": "অনন্য হাতিয়ার",
	"index::home_card_label_get_started_1": "শুরুর জন্য মৌলিক বিষয়",
	"index::home_card_label_get_started_2": "আপনার প্রথম ওয়ালেট",
	"index::home_card_label_get_started_3": "Bitcoin কিনুন",
	"index::home_card_label_gold": "কোনটি ভাল?",
	"index::home_card_label_housing_1": "সাশ্রয়ী আবাসন",
	"index::home_card_label_human_rights_1": "মানবাধিকার প্রয়োগ",
	"index::home_card_label_human_rights_2": "গণ গ্রহণ",
	"index::home_card_label_human_rights_3": "বৈশ্বিক প্রভাব",
	"index::home_card_label_inflation": "Bitcoin ভাল অর্থ",
	"index::home_card_label_networks_1": "লাইভ নেটওয়ার্ক ওভারভিউ",
	"index::home_card_label_networks_2": "চলুন তুলনা করি",
	"index::home_card_label_payments_1": "পার্থক্য কী?",
	"index::home_card_label_payments_2": "দ্রুত এবং সস্তা পেমেন্ট",
	"index::home_card_label_payments_3": "রেমিট্যান্স",
	"index::home_card_label_payments_4": "পেমেন্ট গ্রহণ করুন",
	"index::home_card_label_politics_1": "রাজনৈতিক প্যারাডক্স",
	"index::home_card_label_politics_2": "পদক্ষেপ নিন",
	"index::home_card_label_property_rights_1": "চলুন তুলনা করি",
	"index::home_card_label_property_rights_2": "প্রকৃত মালিকানা",
	"index::home_card_label_salary": "আপনার বেতন রক্ষা করুন",
	"index::home_card_label_self_custody_1": "Bitcoin ওয়ালেট গাইড",
	"index::home_card_label_self_custody_2": "সবচেয়ে গুরুত্বপূর্ণ ধাপ",
	"index::home_card_label_self_custody_3": "সার্বভৌম অর্থ",
	"index::home_card_label_war_1": "অন্তহীন যুদ্ধের অবসান",
	"index::home_card_label_war_2": "প্রবীণদের সহায়তা",
	"index::home_card_label_war_3": "যুদ্ধের সময় পালানো",
	"index::home_h1":
		"Bitcoin ভাল অর্থ যা একটি ভাল বিশ্ব গড়ে তোলে।",
	"index::home_nav_about": "আমাদের সম্পর্কে",
	"index::home_nav_get_involved": "যুক্ত হন",
	"index::home_nav_learn": "শিখুন",
	"index::home_source_prefix": "সূত্র:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::lightning_grid_heading": "জনপ্রিয় Lightning ওয়ালেট",
	"lightning::lightning_hardware_cta_label": "হার্ডওয়্যার ওয়ালেট",
	"lightning::lightning_header_subtitle":
		"Lightning আপনাকে সেকেন্ডের মধ্যে পয়সা ফিতে Bitcoin পাঠাতে দেয় — আপনি যে পরিমাণ Bitcoin খরচ করার পরিকল্পনা করছেন তার জন্য উপযুক্ত ট্রেডঅফ সহ একটি ওয়ালেট বেছে নিন।",
	"lightning::lightning_s1_c4": "আমাদের গাইড দেখুন",
	"lightning::lightning_s1_c4_end": " আরও বিস্তারিত জানতে।",
	"lightning::lightning_s1_c4_link": "Bitcoin হার্ডওয়্যার ওয়ালেট গাইড",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning ওয়ালেট",
	"lightning::sources_breez_lightning":
		"Breez — স্ব-সংরক্ষিত Lightning ওয়ালেট",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning Network ডকুমেন্টেশন",
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (২০১৬)",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — কাস্টোডিয়াল Lightning ওয়ালেট",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_f1": "অনেক বৈশিষ্ট্য এবং কাস্টমাইজেশন",
	"nostr/index::nostr_amethyst_f2": "একটি আলাদা Bitcoin ওয়ালেট প্রয়োজন",
	"nostr/index::nostr_amethyst_f3": "১০০% বিনামূল্যে",
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_f1":
		"পরিচিত, Twitter-এর মতো ইন্টারফেস",
	"nostr/index::nostr_damus_f2": "একটি আলাদা Bitcoin ওয়ালেট প্রয়োজন",
	"nostr/index::nostr_damus_f3": "১০০% বিনামূল্যে",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_download_heading":
		"একটি বিনামূল্যে Nostr ক্লায়েন্ট ডাউনলোড করুন",
	"nostr/index::nostr_download_intro":
		"Nostr ক্লায়েন্ট হল বিনামূল্যে অ্যাপ যা আপনাকে Nostr নেটওয়ার্কে বিষয়বস্তু পড়তে এবং পোস্ট করতে দেয়। সব ইন্টারঅপারেট করে — আপনি যেকোনো সময় ক্লায়েন্ট পরিবর্তন করতে পারেন এবং আপনার ফলোয়ার এবং বিষয়বস্তু রাখতে পারেন।",
	"nostr/index::nostr_hero_subtitle":
		"Nostr একটি নতুন বিকেন্দ্রীভূত প্রোটোকল অনলাইন যোগাযোগের জন্য — কোনও কোম্পানি দ্বারা পরিচালিত নয়, Bitcoin পেমেন্ট (zaps) অন্তর্নির্মিত এবং আপনি আপনার ফলোয়ার না হারিয়ে অ্যাপগুলির মধ্যে স্যুইচ করতে পারেন।",
	"nostr/index::nostr_hero_title": "Nostr কী?",
	"nostr/index::nostr_intro_c1":
		"Nostr ইমেইলের অনুরূপ: কেউ প্রোটোকলের মালিক নয়, যে কেউ এটির উপর অ্যাপ তৈরি করতে পারে এবং আপনি আপনার প্রিয় অ্যাপ বেছে নিতে পারেন। Twitter বা Facebook-এর বিপরীতে, কোনও কেন্দ্রীয় কোম্পানি আপনাকে সেন্সর, বাতিল বা সীমিত করতে পারে না।",
	"nostr/index::nostr_intro_c2":
		"নীচে কেন Nostr গুরুত্বপূর্ণ তার সংক্ষিপ্ত সংস্করণ — তারপর আজ শুরু করতে যে সমস্ত বিনামূল্যে Nostr ক্লায়েন্ট আপনার প্রয়োজন।",
	"nostr/index::nostr_iris_f1":
		"অতি সহজ — কোনও সেটআপের প্রয়োজন নেই",
	"nostr/index::nostr_iris_f2":
		"একটি পরীক্ষা অ্যাকাউন্ট দিয়ে Nostr চেষ্টা করার সহজ উপায়",
	"nostr/index::nostr_iris_f3": "১০০% বিনামূল্যে",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_learn_more_label": "গভীরে যান",
	"nostr/index::nostr_learn_more_title":
		"nostr.how-এ Nostr সম্পর্কে আরও জানুন",
	"nostr/index::nostr_page_description":
		"Nostr একটি নতুন বিকেন্দ্রীভূত প্রোটোকল অনলাইন যোগাযোগের জন্য — কোনও কোম্পানি দ্বারা পরিচালিত নয়, Bitcoin পেমেন্ট (zaps) অন্তর্নির্মিত এবং আপনি আপনার ফলোয়ার না হারিয়ে ক্লায়েন্টগুলির মধ্যে স্যুইচ করতে পারেন।",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android এবং ওয়েব",
	"nostr/index::nostr_platform_web": "ওয়েব ব্রাউজার",
	"nostr/index::nostr_primal_f1": "প্রিমিয়াম সুপারিশকৃত ক্লায়েন্ট",
	"nostr/index::nostr_primal_f2":
		"অন্তর্নির্মিত Bitcoin zap ওয়ালেট",
	"nostr/index::nostr_primal_f3": "১০০% বিনামূল্যে",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_s1": "প্রোটোকল, প্ল্যাটফর্ম নয়",
	"nostr/index::nostr_s1_c1":
		"Nostr একটি নতুন প্রোটোকল যা আপনাকে অনলাইনে যোগাযোগ করতে দেয় — সেন্সরশিপ, বাতিলকরণ বা সীমিতকরণের ভয় ছাড়াই।",
	"nostr/index::nostr_s1_c2":
		"Twitter এবং Facebook-এর মতো প্ল্যাটফর্ম একটি কোম্পানি দ্বারা পরিচালিত, কিন্তু কেউ Nostr প্রোটোকল পরিচালনা করে না।",
	"nostr/index::nostr_s2": "চলাচলের স্বাধীনতা",
	"nostr/index::nostr_s2_c1":
		"Nostr ইমেইলের অনুরূপ। কেউ ইমেইল প্রোটোকল পরিচালনা করে না এবং যে কেউ এর উপর একটি ক্লায়েন্ট তৈরি করতে পারে (যেমন Gmail, Hotmail এবং আরও অনেক)।",
	"nostr/index::nostr_s2_c2":
		"কেউ Nostr প্রোটোকল পরিচালনা করে না এবং যে কেউ এর উপর একটি ক্লায়েন্ট তৈরি করতে পারে (যেমন Damus, Amethyst এবং আরও অনেক)।",
	"nostr/index::nostr_s2_c3":
		"আপনি যদি একটি নির্দিষ্ট ক্লায়েন্ট কীভাবে কাজ করে তা পছন্দ না করেন, আপনি আপনার ফলোয়ার বা বিষয়বস্তু না হারিয়ে আপনার Nostr অ্যাকাউন্ট অন্য ক্লায়েন্টে নির্বিঘ্নে সরাতে পারেন।",
	"nostr/index::nostr_s3": "Bitcoin অন্তর্নির্মিত",
	"nostr/index::nostr_s3_c1":
		"Bitcoin স্থানীয়ভাবে Nostr প্রোটোকলে অন্তর্নির্মিত। আপনি যদি এমন বিষয়বস্তু দেখেন যা আপনি পছন্দ করেন, আপনি সহজেই কাউকে ধন্যবাদ হিসাবে একটি Bitcoin zap পাঠাতে পারেন!",
	"nostr/index::nostr_s3_c2":
		"Twitter এবং Facebook-এর মতো কেন্দ্রীভূত প্ল্যাটফর্মে, কেন্দ্রীয় কোম্পানি আপনার বিষয়বস্তু থেকে উপকৃত হয়। কিন্তু Nostr-এর মতো উন্মুক্ত প্রোটোকলে, আপনি আপনার বিষয়বস্তু থেকে উপকৃত হন।",
	"nostr/index::sources_damus": "Damus — iPhone-এর জন্য Nostr ক্লায়েন্ট",
	"nostr/index::sources_iris":
		"Iris — ব্রাউজারে চলমান Nostr ক্লায়েন্ট",
	"nostr/index::sources_nostr_how":
		"nostr.how — Nostr কী?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — ওপেন সোর্স স্পেসিফিকেশন",
	"nostr/index::sources_primal":
		"Primal — অন্তর্নির্মিত Bitcoin zap ওয়ালেট সহ Nostr ক্লায়েন্ট",
	"nostr/index::what_is_nostr": "Nostr কী?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"এই Bitcoin স্টিকার ফাইলগুলি ব্যবহার করে আপনার নিজস্ব Bitcoin স্টিকার প্রিন্ট করুন।",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"অনুরোধ গ্রহণ করা হয়েছে 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "বাল্ক অর্ডার",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Nostr-এ শেয়ার করুন",
	"sticker-success::sticker_success_btn_what_is_nostr": "Nostr কী?",
	"sticker-success::sticker_success_bulk_header":
		"আরও স্টিকার চান?",
	"sticker-success::sticker_success_hero_title":
		"আপনার স্টিকার পথে 🎉",
	"sticker-success::sticker_success_share_header":
		"আপনার স্টিকার কোথায় তা শেয়ার করুন",
	"sticker-success::sticker_success_tips_header":
		"স্টিকারের জন্য ভাল জায়গা",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_btn_choose_pack": "এই প্যাক বেছে নিন",
	"stickers::stickers_bulk_c1":
		"মুষ্টিমেয় স্টিকারের চেয়ে বেশি চান?",
	"stickers::stickers_bulk_c2":
		"আমরা যে একই প্রিন্ট শপ ব্যবহার করি সেখান থেকে বাল্ক অর্ডার করুন",
	"stickers::stickers_bulk_c3":
		"— আপনি যত বেশি অর্ডার করবেন, প্রতি স্টিকারের দাম তত সস্তা হয়ে যাবে।",
	"stickers::stickers_bulk_cta": "বাল্ক স্টিকারের জন্য কেনাকাটা করুন",
	"stickers::stickers_bulk_header": "বাল্কে স্টিকার অর্ডার করুন",
	"stickers::stickers_flyers_link_before":
		"এর মধ্যে, প্রিন্ট এবং বিতরণ করুন",
	"stickers::stickers_header":
		"এই বিনামূল্যে \"আমরা Bitcoin গ্রহণ করি\" স্টিকারগুলি পান।",
	"stickers::stickers_hero_subtitle":
		"বিনামূল্যে Bitcoin স্টিকারের একটি প্যাকের অর্ডার করুন এবং আরও মানুষকে Bitcoin সম্পর্কে জানতে সাহায্য করতে সর্বজনীন স্থানে লাগান।",
	"stickers::stickers_hero_title": "বিনামূল্যে Bitcoin স্টিকার",
	"stickers::stickers_instructions_1":
		"আপনার মেইলিং ঠিকানা লিখুন এবং আমরা আপনাকে বিনামূল্যে Bitcoin স্টিকারের একটি প্যাক পাঠাব। আপনার স্টিকারগুলি একটি সাধারণ সাদা খামে পাঠানো হবে।",
	"stickers::stickers_intro_c1":
		"আমাদের মিশন হল আরও মানুষকে সর্বজনীন স্থানে Bitcoin স্টিকার \"অরেঞ্জ-পিল\" করতে সাহায্য করা। আমাদের সমস্ত স্টিকার",
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_intro_c3": "মুদ্রাস্ফীতি",
	"stickers::stickers_intro_c4":
		"নীচে একটি স্টিকার প্যাক বেছে নিন এবং আপনি এটি কীভাবে পেতে চান তা বেছে নিন — আমরা মার্কিন যুক্তরাষ্ট্র বা কানাডায় যে কাউকে বিনামূল্যে একটি প্যাক পাঠাব, অথবা আপনি বিশ্বের যেকোনো জায়গায় আপনার নিজস্ব প্রিন্ট করতে পারেন।",
	"stickers::stickers_mail_header": "আমরা আপনার বিনামূল্যে স্টিকার পাঠাব",
	"stickers::stickers_next_print_flyers": "ছড়িয়ে দিতে থাকুন",
	"stickers::stickers_next_print_flyers_desc":
		"সর্বজনীন স্থানে বিতরণের জন্য বিনামূল্যে Bitcoin লিফলেট প্রিন্ট করুন",
	"stickers::stickers_option_bulk": "📦 বিশ্বব্যাপী — বাল্ক অর্ডার",
	"stickers::stickers_option_canada": "🇨🇦 কানাডা — বিনামূল্যে মেইল",
	"stickers::stickers_option_print": "🌍 বিশ্বব্যাপী — আমি নিজে প্রিন্ট করব",
	"stickers::stickers_option_usa":
		"🇺🇸 মার্কিন যুক্তরাষ্ট্র — বিনামূল্যে মেইল",
	"stickers::stickers_print_c1":
		"আপনি যেখানেই বাস করেন না কেন, আপনি নিজের স্টিকার প্রিন্ট করে অংশগ্রহণ করতে পারেন। স্টিকার ফাইল এবং প্রিন্টিং নির্দেশাবলী ডাউনলোড করতে নীচে আপনার ভাষা ক্লিক করুন।",
	"stickers::stickers_print_c2":
		"প্রতিটি স্টিকার প্রতিটি ভাষায় উপলব্ধ নয়।",
	"stickers::stickers_print_header":
		"আপনার নিজস্ব স্টিকার ফাইল প্রিন্ট করুন",
	"stickers::stickers_request_c1":
		"আপনার স্থানীয় ভাষায় স্টিকার ফাইল অনুরোধ করতে নীচের ফর্মটি পূরণ করুন। প্রস্তুত হলে আমরা আপনাকে জানাব।",
	"stickers::stickers_request_header": "আপনার ভাষা দেখছেন না?",
	"stickers::stickers_share_c2":
		"Nostr-এ আমাদের ফলো করুন এবং",
	"stickers::stickers_share_c3":
		"যেকোনো Nostr ক্লায়েন্টে অনুসন্ধান করুন।",
	"stickers::stickers_signs_pack_description":
		"Bitcoin বার্তা সহ সতর্কতা, বিপদ এবং সাবধানতা চিহ্ন — মনোযোগ ধরার এবং মানুষকে থামিয়ে পড়ানোর জন্য ডিজাইন করা।",
	"stickers::stickers_step_1_description":
		"প্রতিটি প্যাকে QR কোড সহ Bitcoin স্টিকারের একটি ভিন্ন সেট রয়েছে যা মানুষকে Bitcoin সম্পর্কে শিক্ষা দেয়।",
	"stickers::stickers_step_1_eyebrow": "ধাপ ১",
	"stickers::stickers_step_1_header":
		"আপনার স্টিকার প্যাক বেছে নিন",
	"stickers::stickers_step_2_description":
		"আমরা মার্কিন যুক্তরাষ্ট্র এবং কানাডায় বিনামূল্যে প্যাক মেইল করব। আপনি বিশ্বের যেকোনো জায়গায় আপনার নিজস্ব প্রিন্ট বা বাল্ক অর্ডার করতে পারেন।",
	"stickers::stickers_step_2_eyebrow": "ধাপ ২",
	"stickers::stickers_step_2_header":
		"আপনি কীভাবে আপনার স্টিকার পেতে চান?",
	"stickers::stickers_text_pack_description":
		"সর্বজনীন স্থানে কৌতূহল জাগানোর জন্য ডিজাইন করা Bitcoin স্লোগান এবং বাক্যাংশের মিশ্রণ।",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — আপনার ওয়ালেট বেছে নিন",
	"wallets::sources_blockstream_green":
		"Blockstream Green — স্ব-সংরক্ষিত Bitcoin ওয়ালেট",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin হার্ডওয়্যার ওয়ালেট",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 হার্ডওয়্যার ওয়ালেট",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q হার্ডওয়্যার ওয়ালেট",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Bitcoin ধাতু সিড পর্যালোচনা",
	"wallets::sources_passport":
		"Foundation Devices — Passport হার্ডওয়্যার ওয়ালেট",
	"wallets::sources_seedsigner":
		"SeedSigner — ওপেন সোর্স, DIY Bitcoin সাইনিং ডিভাইস",
	"wallets::wallets_grid_heading": "জনপ্রিয় Bitcoin ওয়ালেট",
	"wallets::wallets_header_subtitle":
		"একটি ওয়ালেট বেছে নেওয়া, আপনার চাবি রক্ষা করা এবং আপনার Bitcoin-এর সম্পূর্ণ নিয়ন্ত্রণ নেওয়ার জন্য ধাপে ধাপে গাইড।",
	"wallets::wallets_lightning_cta_label": "Lightning নেটওয়ার্ক",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missing = [];

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
			missing.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (bn): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing.slice(0, 30)) console.log("  -", k);
		if (missing.length > 30)
			console.log(`  ...and ${missing.length - 30} more`);
		process.exitCode = 1;
	}
}

main();
