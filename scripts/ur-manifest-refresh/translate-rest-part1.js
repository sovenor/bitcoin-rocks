#!/usr/bin/env node
/**
 * Urdu manifest refresh — part 1: 404, about, bank-runs, common, index, get-involved,
 * compound-inflation-calculator, lightning, wallets, buy, flyers, stickers,
 * sticker-success, sticker-language-success, sticker-files/index.
 *
 * Idempotent. Brand names (Bitcoin, Nostr, Lightning, BTCPay Server, etc.) are kept
 * in Latin. Western Arabic numerals (0-9). Formal polite "آپ" register.
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
	"ur.json",
);

const T = {
	/* ─────────────── 404 ─────────────── */
	"404|404_home": "ہوم پیج پر واپس جائیں",
	"404|404_message": "Bitcoin بہترین ہے، لیکن یہ ٹوٹا ہوا صفحہ نہیں۔",
	"404|404_not_found_short": "نہیں ملا",

	/* ─────────────── about ─────────────── */
	"about|about_card_contact_github_label": "GitHub",
	"about|about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about|about_card_email_title": "hi@bitcoin.rocks",
	"about|about_card_nostr_label": "Nostr",
	"about|about_card_nostr_title": "hi@bitcoin.rocks",
	"about|about_mission_1_sovenor": "sovenor",
	"about|about_page_description":
		"bitcoin.rocks ایک مفت، اوپن سورس Bitcoin تعلیمی ویب سائٹ ہے جو 2022 میں قائم کی گئی۔ ہمارا مشن تعلیم کے ذریعے Bitcoin کی قبولیت کو تیز کرنا ہے۔",
	"about|about_editorial_2":
		"ہم قابل اعتماد ذرائع جیسے فیڈرل ریزرو (FRED)، امریکی محکمہ شماریاتِ محنت، FDIC، اقوامِ متحدہ، ورلڈ گولڈ کونسل، Forbes، MIT Technology Review، Lyn Alden اور James Lavish سے لنک کرتے ہیں۔ ہمیں یقین ہے کہ Bitcoin خود اپنی بات کرتا ہے جب حقائق واضح طور پر پیش کیے جائیں۔",
	"about|about_header": "bitcoin.rocks کے بارے میں",
	"about|about_open_source_2":
		"bitcoin.rocks ایک مفت، اوپن سورس پروجیکٹ ہے جو MIT لائسنس کے تحت ہے۔ کوئی بھی bitcoin.rocks میں حصہ ڈال سکتا ہے۔ ہم خاص طور پر مترجمین کا خیرمقدم کرتے ہیں جو ہمارے مواد کو دنیا بھر کے لوگوں کے لیے قابلِ رسائی بنانے میں مدد کرتے ہیں۔",
	"about|about_business_blurb":
		"ہم مفت کاروباری وسائل فراہم کرتے ہیں جو مقامی تاجروں کے لیے Bitcoin قبول کرنا آسان بناتے ہیں۔ ہمارا Bitcoin بزنس صفحہ بتاتا ہے کہ Bitcoin کاروبار کے لیے کیوں اچھا ہے، والٹ اور پوائنٹ آف سیل کیسے چنیں، اور مفت ’Bitcoin Accepted Here‘ سٹیکرز پیش کرتا ہے۔",
	"about|about_card_business_label": "کاروباری وسائل",
	"about|about_card_business_source": "ماخذ: bitcoin.rocks ←",
	"about|about_card_business_title":
		"ہر وہ چیز جو کاروبار کو Bitcoin کی ادائیگیاں قبول کرنا شروع کرنے کے لیے درکار ہے",
	"about|about_card_contact_github_source": "ماخذ: GitHub ←",
	"about|about_card_contribute_label": "حصہ ڈالیں",
	"about|about_card_contribute_source": "ماخذ: GitHub ←",
	"about|about_card_contribute_title":
		"جانیں کہ bitcoin.rocks میں کیسے حصہ ڈالا جائے",
	"about|about_card_email_label": "ای میل",
	"about|about_card_email_source": "ماخذ: ای میل ←",
	"about|about_card_flyers_label": "قابلِ پرنٹ پمفلٹ",
	"about|about_card_flyers_source": "ماخذ: bitcoin.rocks ←",
	"about|about_card_flyers_title":
		"اپنی برادری کے لیے Bitcoin پمفلٹ ڈاؤن لوڈ کریں اور پرنٹ کریں",
	"about|about_card_github_label": "ریپوزٹری",
	"about|about_card_github_source": "ماخذ: GitHub ←",
	"about|about_card_github_title": "bitcoin.rocks کو GitHub پر دیکھیں",
	"about|about_card_nostr_source": "ماخذ: Nostr ←",
	"about|about_card_stickers_label": "مفت سٹیکرز",
	"about|about_card_stickers_source": "ماخذ: bitcoin.rocks ←",
	"about|about_card_stickers_title":
		"اپنے دروازے تک مفت Bitcoin سٹیکرز منگوائیں",
	"about|about_flyers_blurb":
		"ہم قابلِ پرنٹ پمفلٹ ڈیزائن کرتے ہیں جنہیں آپ ملاقاتوں میں بانٹ سکتے ہیں، کمیونٹی بورڈز پر لگا سکتے ہیں، یا ڈاک کے ڈبوں میں ڈال سکتے ہیں — لوگوں میں تجسس پیدا کرنے اور انہیں مزید جاننے کے لیے bitcoin.rocks پر بھیجنے کا ایک سادہ طریقہ۔",
	"about|about_mission_1a": "bitcoin.rocks کو قائم کیا",
	"about|about_mission_1b":
		"نے 2022 میں ایک سادہ مشن کے ساتھ: تعلیم کے ذریعے Bitcoin کی قبولیت کو تیز کرنا۔",
	"about|about_stickers_blurb":
		"ہم آپ کے دروازے تک مفت Bitcoin سٹیکرز ڈاک کرتے ہیں تاکہ آپ اپنی برادری میں Bitcoin کی آگاہی پھیلانے میں مدد کر سکیں۔ ہر مہینے سینکڑوں لوگ ان سٹیکرز پر QR کوڈ سکین کر کے Bitcoin کے بارے میں سیکھتے ہیں۔",

	/* ─────────────── bank-runs ─────────────── */
	"bank-runs|bank_runs_card_fdic_value": "1.42%",
	"bank-runs|bank_runs_header":
		"Bitcoin میں بینک رن نہیں ہوتے، لیکن آپ کے بینک میں ہو سکتا ہے۔",
	"bank-runs|bank_runs_bitcoin_heading": "Bitcoin میں بینک رن نہیں ہوتے",
	"bank-runs|bank_runs_bitcoin_p1":
		"Bitcoin مکمل ریزرو نظام ہے۔ آپ اپنا پیسہ کسی بینک میں جمع نہیں کرا رہے ہوتے۔ آپ خود اپنے بینک ہیں۔ آپ کے علم کے بغیر آپ کا پیسہ قرض پر دینا ممکن نہیں ہے کیونکہ صرف آپ ہی اپنے پیسے تک رسائی رکھتے ہیں۔",
	"bank-runs|bank_runs_bitcoin_p2":
		"جب تک آپ Bitcoin کو اپنے والٹ میں رکھتے ہیں — کسی ایکسچینج پر یا ETF میں نہیں — تب تک بینک رن ناممکن ہیں۔",
	"bank-runs|bank_runs_bitcoin_p3":
		"Bitcoin کے ساتھ، آپ واقعی اپنے پیسے پر قابو رکھتے ہیں۔",
	"bank-runs|bank_runs_card_bank_reserve_detail":
		"26 مارچ 2020 سے، امریکی بینکوں کو 0% ریزرو رکھنا لازم ہے۔",
	"bank-runs|bank_runs_card_bank_reserve_label": "بینک ریزرو تناسب",
	"bank-runs|bank_runs_card_bank_reserve_source": "ماخذ: فیڈرل ریزرو ←",
	"bank-runs|bank_runs_card_btc_fdic_detail":
		"مکمل ریزرو نظام — کسی ڈپازٹ انشورنس کی ضرورت نہیں۔",
	"bank-runs|bank_runs_card_btc_fdic_label": "Bitcoin کوریج",
	"bank-runs|bank_runs_card_btc_fdic_source": "ماخذ: Bitcoin وائٹ پیپر ←",
	"bank-runs|bank_runs_card_btc_reserve_detail":
		"ہر Bitcoin آن چین موجود ہوتا ہے — کچھ بھی قرض پر نہیں دیا جاتا۔",
	"bank-runs|bank_runs_card_btc_reserve_label": "Bitcoin ریزرو تناسب",
	"bank-runs|bank_runs_card_btc_reserve_source": "ماخذ: Bitcoin وائٹ پیپر ←",
	"bank-runs|bank_runs_card_fdic_detail":
		"$153.9 ارب کا انشورنس فنڈ بمقابلہ $10.82 کھرب کے بیمہ شدہ ڈپازٹس (دسمبر 2025)۔",
	"bank-runs|bank_runs_card_fdic_label": "FDIC کوریج",
	"bank-runs|bank_runs_card_fdic_source":
		"ماخذ: FDIC شماریات ایک نظر میں ←",
	"bank-runs|bank_runs_card_svb_label": "کیس اسٹڈی",
	"bank-runs|bank_runs_card_svb_source":
		"ماخذ: یونیورسٹی آف واشنگٹن سکول آف لاء ←",
	"bank-runs|bank_runs_card_svb_title":
		"جانیں کہ سلیکون ویلی بینک کا رن کیسے ہوا",
	"bank-runs|bank_runs_card_wallet_label": "اگلا قدم",
	"bank-runs|bank_runs_card_wallet_source": "یہاں سے شروع کریں ←",
	"bank-runs|bank_runs_card_wallet_title":
		"جانیں کہ اپنا Bitcoin والٹ کیسے حاصل کریں",
	"bank-runs|bank_runs_fdic_heading":
		"FDIC انشورنس تقریباً 1% ڈپازٹس کا احاطہ کرتی ہے",
	"bank-runs|bank_runs_fdic_p1":
		"FDIC انشورنس فی ڈپازٹر $250,000 تک کے ڈپازٹس کا تحفظ کرتی ہے۔ لیکن انشورنس فنڈ ان کل ڈپازٹس کے مقابلے میں بہت چھوٹا ہے جن کا اسے تحفظ کرنا ہوتا ہے۔",
	"bank-runs|bank_runs_fdic_p2_a":
		"بڑے پیمانے پر بینک کی ناکامی کی صورت میں، حکومت کمی پوری کرنے کے لیے غالباً پیسہ چھاپے گی — جس کا نتیجہ مزید",
	"bank-runs|bank_runs_fdic_p2_link": "مہنگائی۔",
	"bank-runs|bank_runs_page_description":
		"بینک جزوی ریزرو نظام کے تحت آپ کے ڈپازٹس کو قرض پر دے دیتے ہیں۔ اگر بہت سے لوگ ایک ساتھ پیسے نکالیں تو بینک ناکام ہو سکتے ہیں۔ Bitcoin مکمل ریزرو نظام ہے — بینک رن ناممکن ہیں۔",
	"bank-runs|bank_runs_svb_heading": "سلیکون ویلی بینک: ایک حقیقی مثال",
	"bank-runs|bank_runs_svb_p1_a":
		"مارچ 2023 میں، سلیکون ویلی بینک ناکام ہو گیا جب اس نے گاہکوں کے ڈپازٹس کو طویل مدتی",
	"bank-runs|bank_runs_svb_p1_b":
		"جب ان بانڈز کی قیمت گری تو SVB نکالی گئی رقم کا احاطہ نہ کر سکا۔ بینک دیوالیہ ہو چکا تھا۔",
	"bank-runs|bank_runs_svb_p1_link": "حکومتی بانڈز۔",
	"bank-runs|bank_runs_svb_p2":
		"ہزاروں کاروبار اپنے ملازمین کو تنخواہ نہ دے سکے۔ FDIC نے مداخلت کی — لیکن اس سے ایک بڑا سوال اٹھا: کیا آپ کا پیسہ واقعی محفوظ ہے؟",
	"bank-runs|bank_runs_what_p1":
		"بینک آپ کے ڈپازٹس کو تجوری میں نہیں رکھتے۔ وہ آپ کا پیسہ قرض پر دیتے ہیں اور سرمایہ کاری کرتے ہیں — اسے جزوی ریزرو بینکنگ کہتے ہیں۔",
	"bank-runs|bank_runs_what_p2":
		"اگر بہت سے لوگ ایک ہی وقت میں پیسے نکالنے کی کوشش کریں، تو بینک کے پاس سب کو ادا کرنے کے لیے کافی نقد نہیں ہوتا۔ یہی بینک رن ہے — اور اس سے بینک مکمل طور پر تباہ ہو سکتے ہیں۔",

	/* ─────────────── common ─────────────── */
	"common|common_language_switcher_add_language": "زبان شامل کریں",
	"common|common_next_buy_bitcoin": "Bitcoin خریدیں",
	"common|common_next_buy_bitcoin_desc":
		"جانیں کہ Bitcoin محفوظ طریقے سے کیسے خریدا جائے",
	"common|common_next_calculate": "اپنی مہنگائی کا حساب لگائیں",
	"common|common_next_calculate_desc":
		"دیکھیں کہ مہنگائی وقت کے ساتھ آپ کی تنخواہ کو کیسے متاثر کرتی ہے",
	"common|common_next_get_wallet": "والٹ حاصل کریں",
	"common|common_next_get_wallet_desc":
		"اپنا پہلا Bitcoin والٹ حاصل کریں — یہ مفت ہے",
	"common|common_next_keep_learning": "سیکھتے رہیں",
	"common|common_next_keep_learning_desc":
		"دیکھیں Bitcoin دنیا کو کیسے بہتر بنا رہا ہے",
	"common|common_source_bls_cpi":
		"امریکی محکمہ شماریاتِ محنت — کنزیومر پرائس انڈیکس (CPI)",
	"common|common_source_fred_money_supply_index":
		"فیڈرل ریزرو اکنامک ڈیٹا (FRED) — منی سپلائی (کیٹیگری انڈیکس)",
	"common|common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common|common_sources_treasury_auction":
		"James Lavish — \"Can a Treasury Auction Fail?\"",
	"common|common_stickers_printer_name": "StickerMule.com",
	"common|common_whats_next": "آگے کیا؟",
	// Dimensions are kept as-is (allow-list).
	"common|common_stickers_dimensions_bdhi":
		"21.59 cm x 4.6482 cm (8.5 in x 1.83 in)",
	"common|common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 cm x 6.35 cm (8.25 in x 2.5 in)",
	"common|common_stickers_dimensions_caution":
		"12.0142 cm x 7.9502 cm (4.73 in x 3.13 in)",
	"common|common_stickers_dimensions_cure_v2":
		"6.35 cm x 12.7 cm (2.5 in x 5 in)",
	"common|common_stickers_dimensions_danger":
		"11.4544 cm x 8.382 cm (4.51 in x 3.3 in)",
	"common|common_stickers_dimensions_fix":
		"11.3792 cm x 6.8072 cm (4.48 in x 2.68 in)",
	"common|common_stickers_dimensions_got_inflation":
		"7.9248 cm x 14.605 cm (3.12 in x 5.75 in)",
	"common|common_stickers_dimensions_study":
		"14.605 cm x 5.1308 cm (5.75 in x 2.02 in)",
	"common|common_stickers_dimensions_warning":
		"10.414 cm x 9.2202 cm (4.1 in x 3.63 in)",
	"common|common_stickers_dimensions_what_if":
		"21.7932 cm x 7.62 cm (8.58 in x 3 in)",
	"common|common_sticker_files_mission_5": "ایک پیکٹ منگوائیں",
	"common|common_site_tagline": "ہر کسی کے لیے Bitcoin کی تعلیم۔",
	"common|common_source_btc_map":
		"BTC Map — Bitcoin قبول کرنے والے تاجروں کی عالمی ڈائریکٹری",
	"common|common_source_btcpayserver":
		"BTCPay Server — مفت، اوپن سورس، خود میزبان Bitcoin پیمنٹ پروسیسر",
	"common|common_source_oshi": "Oshi — تاجروں کے لیے Bitcoin انعامات کا پلیٹ فارم",
	"common|common_source_strike_business":
		"Strike — کاروبار کے لیے Bitcoin اور Lightning ادائیگیاں",
	"common|common_sources_group_bitcoin": "Bitcoin ڈیٹا",
	"common|common_sources_group_cpi": "مہنگائی / کنزیومر پرائس انڈیکس",
	"common|common_sources_group_debt": "حکومتی قرضہ",
	"common|common_sources_group_money": "زرِ کثیر کا ڈیٹا",
	"common|common_sources_group_stories": "حقیقی دنیا کی مثالیں",
	"common|common_sticker_files_mission_6": "انگریزی سٹیکرز کا مفت۔",
	"common|common_sticker_files_next_flyers_label": "پمفلٹ",
	"common|common_sticker_files_next_flyers_title": "Bitcoin پمفلٹ پرنٹ کریں",
	"common|common_sticker_files_next_languages_label": "سٹیکر فائلیں",
	"common|common_sticker_files_next_languages_title":
		"دوسری زبانوں میں سٹیکر فائلیں دیکھیں",
	"common|common_sticker_files_print_these": "PRINT THESE IN 1 CLICK",
	"common|common_sticker_name_bdhi_black":
		"\"Bitcoin Doesn't Have Inflation\" سٹیکر (سیاہ)",
	"common|common_sticker_name_bdhi_orange":
		"\"Bitcoin Doesn't Have Inflation\" سٹیکر (نارنجی)",
	"common|common_sticker_name_caution":
		"\"Caution! Melting Ice Cube\" Bitcoin سٹیکر",
	"common|common_sticker_name_cure_inflation":
		"\"Cure Inflation\" Bitcoin سٹیکر",
	"common|common_sticker_name_danger":
		"\"Danger! Inflation Ahead\" Bitcoin سٹیکر",
	"common|common_sticker_name_fix":
		"\"Fix The Money, Fix The World\" Bitcoin سٹیکر",
	"common|common_sticker_name_got_inflation":
		"\"Got Inflation?\" Bitcoin سٹیکر",
	"common|common_sticker_name_study": "\"Study Bitcoin\" سٹیکر",
	"common|common_sticker_name_warning":
		"\"Warning! Inflation is Stealing Your Savings\" Bitcoin سٹیکر",
	"common|common_sticker_name_what_if":
		"\"What if your money didn't have inflation?\" Bitcoin سٹیکر",
	"common|common_sticker_tips_heading": "سٹیکر کے مشورے",
	"common|common_sticker_tips_intro":
		"جب آپ اپنے سٹیکرز پرنٹ کر لیں، انہیں ایسی جگہ لگائیں جہاں نظر آئیں! اچھی جگہیں ہیں:",
	"common|common_sticker_tips_list_1":
		"عوامی جگہوں پر جہاں لوگ انہیں دیکھ سکیں",
	"common|common_sticker_tips_list_2":
		"ایسی جگہوں پر جہاں جلدی ہٹا دیے جانے کا امکان نہ ہو (سٹیکرز کوئی مستقل نقصان نہیں پہنچاتے)",
	"common|common_sticker_tips_list_3":
		"ایسی سطحوں پر جہاں آسانی سے چپک جائیں (دھات، پلاسٹک، شیشہ)",
	"common|common_sticker_tips_list_4":
		"نجی املاک، اشتہاری بورڈ، ATM یا پٹرول پمپ پر نہیں",
	"common|common_stickers_printer_prefix": "ہم استعمال کرتے ہیں",
	"common|common_stickers_printer_suffix":
		"لیکن آپ کوئی بھی سٹیکر کمپنی استعمال کر سکتے ہیں۔",

	/* ─────────────── compound-inflation-calculator ─────────────── */
	"compound-inflation-calculator|sources_fred_cpi_urban":
		"فیڈرل ریزرو اکنامک ڈیٹا (FRED) — تمام شہری صارفین کے لیے کنزیومر پرائس انڈیکس",
	"compound-inflation-calculator|sources_fred_m1":
		"فیڈرل ریزرو اکنامک ڈیٹا (FRED) — M1 منی سپلائی",
	"compound-inflation-calculator|cic_calculator_heading":
		"اپنی مہنگائی کا فرق نکالیں",
	"compound-inflation-calculator|cic_cta_label": "اگلا قدم",
	"compound-inflation-calculator|cic_hero_subtitle":
		"دیکھیں کہ آپ کی تنخواہ کو مہنگائی کے ساتھ چلنے کے لیے کتنا بڑھنا چاہیے۔",
	"compound-inflation-calculator|cic_next_explore_topics":
		"مزید موضوعات دریافت کریں",
	"compound-inflation-calculator|cic_next_explore_topics_desc":
		"دیکھیں Bitcoin پیسے، آزادی، توانائی اور مزید سے کیسے جڑتا ہے۔",
	"compound-inflation-calculator|cic_next_learn_inflation":
		"جانیں مہنگائی کیسے کام کرتی ہے",

	/* ─────────────── index (homepage) ─────────────── */
	"index|home_btn_saving": "بچت",
	"index|home_card_label_art_1": "آئیے موازنہ کریں",
	"index|home_card_label_art_2": "بات پھیلائیں",
	"index|home_card_label_art_3": "اسٹریٹ آرٹ",
	"index|home_card_label_bank_runs": "مکمل ریزرو نظام",
	"index|home_card_label_bonds": "آئیے موازنہ کریں",
	"index|home_card_label_business_1": "فرق کیا ہے؟",
	"index|home_card_label_business_2": "Bitcoin ادائیگیاں قبول کریں",
	"index|home_card_label_cash": "آئیے موازنہ کریں",
	"index|home_card_label_cbdc": "کھلا یا بند؟",
	"index|home_card_label_coding_1": "تعاملی ٹیوٹوریل",
	"index|home_card_label_coding_2": "ہارڈویئر بنائیں",
	"index|home_card_label_coding_3": "کوڈنگ پہیلیاں",
	"index|home_card_label_crowdfunding_1": "EndSARS احتجاج",
	"index|home_card_label_crowdfunding_2": "ناقابلِ روک پیسہ",
	"index|home_card_label_crowdfunding_3": "اپنا منصوبہ فنڈ کریں",
	"index|home_card_label_crypto": "فرق کیا ہے؟",
	"index|home_card_label_energy_1": "گرڈ استحکام",
	"index|home_card_label_energy_4": "طلب کا ردعمل",
	"index|home_card_label_energy_5": "دیہی برقی کاری",
	"index|home_card_label_energy_6": "قابلِ تجدید ترغیبات",
	"index|home_card_label_environment_1": "میتھین میں کمی",
	"index|home_card_label_environment_2": "ایک قومی پارک کو بچایا",
	"index|home_card_label_environment_3": "سب سے سرسبز صنعت",
	"index|home_card_label_environment_4": "بھڑکی ہوئی گیس میں کمی",
	"index|home_card_label_equality_1": "امید اور موقع",
	"index|home_card_label_equality_2": "گیم چینجر",
	"index|home_card_label_food_1": "خوراک کی قیمتیں",
	"index|home_card_label_food_2": "کھیت اور مٹی",
	"index|home_card_label_freedom_1": "آمرانہ حکومتیں",
	"index|home_card_label_freedom_2": "ایک منفرد آلہ",
	"index|home_card_label_get_started_1": "ابتدائی بنیادیں",
	"index|home_card_label_get_started_2": "آپ کا پہلا والٹ",
	"index|home_card_label_get_started_3": "Bitcoin خریدیں",
	"index|home_card_label_gold": "کونسا بہتر ہے؟",
	"index|home_card_label_housing_1": "سستی رہائش",
	"index|home_card_label_human_rights_1": "انسانی حقوق کا نفاذ",
	"index|home_card_label_human_rights_2": "نچلی سطح پر قبولیت",
	"index|home_card_label_human_rights_3": "عالمی اثر",
	"index|home_card_label_inflation": "Bitcoin بہتر پیسہ ہے",
	"index|home_card_label_networks_1": "براہِ راست نیٹ ورک منظر",
	"index|home_card_label_networks_2": "آئیے موازنہ کریں",
	"index|home_card_label_payments_1": "فرق کیا ہے؟",
	"index|home_card_label_payments_2": "تیز اور سستی ادائیگیاں",
	"index|home_card_label_payments_3": "ترسیلات",
	"index|home_card_label_payments_4": "ادائیگیاں وصول کریں",
	"index|home_card_label_politics_1": "سیاسی تضاد",
	"index|home_card_label_politics_2": "اقدام کریں",
	"index|home_card_label_property_rights_1": "آئیے موازنہ کریں",
	"index|home_card_label_property_rights_2": "اصل ملکیت",
	"index|home_card_label_salary": "اپنی تنخواہ کا تحفظ کریں",
	"index|home_card_label_self_custody_1": "Bitcoin والٹ گائیڈ",
	"index|home_card_label_self_custody_2": "سب سے اہم قدم",
	"index|home_card_label_self_custody_3": "خود مختار پیسہ",
	"index|home_card_label_war_1": "نہ ختم ہونے والی جنگ ختم کریں",
	"index|home_card_label_war_2": "سابق فوجیوں کی مدد",
	"index|home_card_label_war_3": "جنگ کے وقت بچاؤ",
	"index|home_h1": "Bitcoin بہتر پیسہ ہے جو ایک بہتر دنیا بنا رہا ہے۔",
	"index|home_nav_about": "ہمارے بارے میں",
	"index|home_nav_get_involved": "حصہ لیں",
	"index|home_nav_learn": "سیکھیں",
	"index|home_source_prefix": "ماخذ:",

	/* ─────────────── lightning ─────────────── */
	"lightning|sources_lightning_paper":
		"Joseph Poon اور Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning|lightning_s1_c4": "ہمارا",
	"lightning|lightning_grid_heading": "مقبول Lightning والٹس",
	"lightning|lightning_hardware_cta_label": "ہارڈویئر والٹس",
	"lightning|lightning_header_subtitle":
		"Lightning آپ کو ایک پیسے کے ایک حصے پر سیکنڈز میں Bitcoin بھیجنے دیتا ہے — وہ والٹ چنیں جس کا توازن آپ کے Bitcoin خرچ کرنے کے ارادے سے میل کھاتا ہو۔",
	"lightning|lightning_s1_c4_end": "دیکھیں مزید معلومات کے لیے۔",
	"lightning|lightning_s1_c4_link": "Bitcoin ہارڈویئر والٹ گائیڈ",
	"lightning|sources_acinq_phoenix": "ACINQ — Phoenix Lightning والٹ",
	"lightning|sources_breez_lightning": "Breez — خود حفاظتی Lightning والٹ",
	"lightning|sources_lightning_labs":
		"Lightning Labs — Lightning Network کی دستاویزات",
	"lightning|sources_wallet_of_satoshi":
		"Wallet of Satoshi — کسٹڈیل Lightning والٹ",

	/* ─────────────── wallets ─────────────── */
	"wallets|sources_bitcoin_org_choose":
		"Bitcoin.org — اپنا والٹ منتخب کریں",
	"wallets|sources_jameson_lopp":
		"Jameson Lopp — دھاتی Bitcoin بیج اسٹوریج کے جائزے",
	"wallets|wallets_lightning_cta_label": "Lightning Network",
	"wallets|sources_blockstream_green":
		"Blockstream Green — خود حفاظتی Bitcoin والٹ",
	"wallets|sources_blockstream_jade":
		"Blockstream Jade — Bitcoin ہارڈویئر والٹ",
	"wallets|sources_coldcard_mk5": "Coinkite — Coldcard MK5 ہارڈویئر والٹ",
	"wallets|sources_coldcard_q": "Coinkite — Coldcard Q ہارڈویئر والٹ",
	"wallets|sources_passport":
		"Foundation Devices — Passport ہارڈویئر والٹ",
	"wallets|sources_seedsigner":
		"SeedSigner — اوپن سورس DIY Bitcoin سائننگ ڈیوائس",
	"wallets|wallets_grid_heading": "مقبول Bitcoin والٹس",
	"wallets|wallets_header_subtitle":
		"والٹ منتخب کرنے، اپنی کلیدوں کا تحفظ کرنے، اور اپنے Bitcoin پر مکمل کنٹرول حاصل کرنے کے لیے قدم بہ قدم گائیڈ۔",

	/* ─────────────── buy ─────────────── */
	"buy|buy_bitcoin_guide": "Bitcoin کیسے خریدیں",
	"buy|buy_step_1_header": "اپنا ملک منتخب کریں",
	"buy|buy_step_2_header": "اپنا ادائیگی کا طریقہ منتخب کریں",
	"buy|buy_step_3_header": "آپ کے خریداری کے اختیارات",
	"buy|buy_step_4_header": "اپنا Bitcoin محفوظ طریقے سے رکھیں",
	"buy|buy_header_subtitle":
		"اپنا پہلا Bitcoin خریدنے کے لیے ایک سادہ، قدم بہ قدم گائیڈ۔",
	"buy|buy_howto_name": "Bitcoin کیسے خریدیں",
	"buy|buy_meta_description":
		"ہمارے قدم بہ قدم گائیڈ کے ساتھ Bitcoin محفوظ طریقے سے خریدنا سیکھیں۔ اپنے لیے بہترین Bitcoin خریداری کے اختیارات تلاش کرنے کے لیے اپنا ملک اور ادائیگی کا طریقہ منتخب کریں۔",
	"buy|buy_step_1_eyebrow": "قدم 1",
	"buy|buy_step_2_eyebrow": "قدم 2",
	"buy|buy_step_3_eyebrow": "قدم 3",
	"buy|buy_step_4_eyebrow": "قدم 4",
	"buy|buy_storage_cta_label": "اگلا قدم",
	"buy|sources_bisq":
		"Bisq — وکندریقرت پیئر ٹو پیئر Bitcoin ایکسچینج",
	"buy|sources_coinatmradar":
		"Coin ATM Radar — عالمی Bitcoin ATM ڈائریکٹری",
	"buy|sources_kraken": "Kraken — قائم شدہ Bitcoin ایکسچینج",
	"buy|sources_relai": "Relai — سوئس Bitcoin خود حفاظتی ایپ",
	"buy|sources_river":
		"River — صرف Bitcoin خریداری، کان کنی اور حفاظت",
	"buy|sources_strike_lightning":
		"Strike — Lightning Network کی حمایت کے ساتھ Bitcoin خریدیں",
	"buy|sources_swan":
		"Swan Bitcoin — صرف Bitcoin ڈالر کی اوسط لاگت کا طریقہ",

	/* ─────────────── flyers ─────────────── */
	"flyers|flyers_intro_header":
		"یہ Bitcoin پمفلٹ کیسے پرنٹ اور لگائیں",
	"flyers|flyers_hero_subtitle":
		"مفت، قابلِ پرنٹ Bitcoin پمفلٹ۔ زیادہ لوگوں کو Bitcoin کے بارے میں سیکھنے میں مدد کے لیے انہیں عوامی جگہوں پر لگائیں۔",
	"flyers|flyers_hero_title": "Bitcoin پمفلٹ پرنٹ کریں اور لگائیں",
	"flyers|flyers_next_get_stickers": "بات پھیلاتے رہیں",
	"flyers|flyers_next_get_stickers_desc":
		"Bitcoin سٹیکرز کا مفت پیکٹ منگوائیں",

	/* ─────────────── sticker-files/index ─────────────── */
	"sticker-files/index|sticker_files_header":
		"ان Bitcoin سٹیکر فائلوں سے اپنے Bitcoin سٹیکرز پرنٹ کریں۔",

	/* ─────────────── sticker-language-success ─────────────── */
	"sticker-language-success|sticker_language_success_hero_title":
		"درخواست موصول ہوئی 🎉",

	/* ─────────────── sticker-success ─────────────── */
	"sticker-success|sticker_success_btn_order_bulk": "تھوک میں آرڈر کریں",
	"sticker-success|sticker_success_btn_share_on_nostr": "Nostr پر شیئر کریں",
	"sticker-success|sticker_success_btn_what_is_nostr": "Nostr کیا ہے؟",
	"sticker-success|sticker_success_bulk_header": "مزید سٹیکرز چاہیے؟",
	"sticker-success|sticker_success_hero_title":
		"آپ کے سٹیکرز راستے میں ہیں 🎉",
	"sticker-success|sticker_success_share_header":
		"اپنی سٹیکر جگہیں شیئر کریں",
	"sticker-success|sticker_success_tips_header": "اچھی سٹیکر جگہیں",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const k = e.namespace + "|" + e.key;
		if (Object.prototype.hasOwnProperty.call(T, k)) {
			e.targetTranslation = T[k];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (ur): filled ${filled}, already-done ${skipped}`,
	);
}

main();
