#!/usr/bin/env node
/**
 * Urdu manifest refresh — part 2: business/* (accounting, faq, maps, stickers,
 * wallets, why, index, *-success), nostr/index, stickers, get-involved, all
 * comparison pages (bitcoin-vs-*).
 *
 * Idempotent. Brand names kept in Latin. Western Arabic numerals.
 * Formal polite "آپ" register.
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
	/* ─────────────── business/accounting ─────────────── */
	"business/accounting|accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting|accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting|accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting|accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting|accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting|accounting_example_gain_result": "+$10",
	"business/accounting|accounting_example_loss_result": "−$10",
	"business/accounting|accounting_description":
		"اپنی کتابوں میں Bitcoin قبول کرنے کا سادہ گائیڈ — ہائبرڈ والٹس، لاگت کی بنیاد، کیپٹل گین، اور اکاؤنٹنٹ کو کب بلانا ہے۔",
	"business/accounting|accounting_s1_c1":
		"Bitcoin قبول کرنے کا سب سے سادہ طریقہ ایک ہائبرڈ والٹ ہے جو آنے والی ہر ادائیگی کے فوراً بعد آپ کے موصول ہونے والے Bitcoin کا 100% خود بخود ڈالرز (یا آپ کی مقامی کرنسی) میں بیچ دیتا ہے۔",
	"business/accounting|accounting_s1_c2":
		"اس سیٹ اپ کے ساتھ، آپ کی کتابیں بالکل ویسی نظر آتی ہیں جیسی آج ہیں — آخری عدد ہر بار ڈالرز میں ہوتا ہے۔ کوئی لاگت کی بنیاد نہیں، کیپٹل گین نہیں، نئی اسپریڈ شیٹس نہیں۔",
	"business/accounting|accounting_s2":
		"اگر آپ کچھ Bitcoin رکھیں: اپنی لاگت کی بنیاد کو ٹریک کرنا",
	"business/accounting|accounting_s2_c1":
		"کچھ کاروبار اپنے موصول ہونے والے Bitcoin کا کچھ حصہ خود بخود تبدیل کرنے کے بجائے رکھنے کا انتخاب کرتے ہیں۔ اگر آپ بھی ایسے ہیں، تو اضافی اہم قدم اپنی لاگت کی بنیاد ٹریک کرنا ہے — جس دن آپ نے ہر Bitcoin ادائیگی موصول کی، اس کی ڈالر قیمت۔",
	"business/accounting|accounting_s2_c2":
		"چاہے آپ اپنے کاروبار کو مکمل طور پر Bitcoin میں سوچیں، زیادہ تر ٹیکس حکام پھر بھی ڈالر قیمت رپورٹ کرنا چاہتے ہیں۔ اچھی خبر: یہ ہر لین دین پر صرف دو نمبر ہیں — موصول شدہ Bitcoin کی مقدار اور اس دن اس کی ڈالر قیمت۔",
	"business/accounting|accounting_s2_c3":
		"تلاش کو خودکار بنانے کے لیے نیچے دیے گئے ٹولز استعمال کریں تاکہ آپ کو روزانہ قیمتیں چیک کرنے کی ضرورت نہ پڑے۔",
	"business/accounting|accounting_s3":
		"اپنا رکھا ہوا Bitcoin خرچ کرنا یا بیچنا",
	"business/accounting|accounting_s3_c1":
		"اگر آپ ہر ادائیگی کو خود بخود ڈالرز میں تبدیل کر دیتے ہیں، اس حصے کو چھوڑ دیں — یہ آپ پر لاگو نہیں ہوتا۔",
	"business/accounting|accounting_s3_c2":
		"اگر آپ نے کچھ Bitcoin رکھا ہے اور بعد میں اسے خرچ کرنے یا بیچنے کا فیصلہ کرتے ہیں، تو فروخت کی قیمت کو اسی لاگت کی بنیاد والی اسپریڈ شیٹ میں شامل کریں۔ موصول کرتے وقت Bitcoin کی قیمت اور خرچ یا بیچتے وقت اس کی قیمت کے درمیان فرق کیپٹل گین یا نقصان ہے۔",
	"business/accounting|accounting_s3_c3": "دو فوری مثالیں:",
	"business/accounting|accounting_s4":
		"کسی پیشہ ور کی ضرورت ہے جو Bitcoin سمجھتا ہو؟",
	"business/accounting|accounting_s4_c1":
		"اگر آپ یہ کام کسی اور کو دینا چاہیں — یا آپ کی Bitcoin اکاؤنٹنگ ہائبرڈ والٹ سے زیادہ پیچیدہ ہے — تو ہم Satoshi Pacioli Accounting Services کا انتہائی مشورہ دیتے ہیں، ایک فرم جو کاروبار کے لیے Bitcoin اکاؤنٹنگ میں مہارت رکھتی ہے۔",
	"business/accounting|bitcoin_business_accounting_guide":
		"اپنے کاروبار کے لیے Bitcoin اکاؤنٹنگ",
	"business/accounting|accounting_card_bpr_label": "BITCOIN قیمت",
	"business/accounting|accounting_card_bpr_title":
		"Bitcoin کی موجودہ یا تاریخی ڈالر قیمت دیکھیں",
	"business/accounting|accounting_card_pacioli_label": "BITCOIN اکاؤنٹنٹس",
	"business/accounting|accounting_card_spreadsheet_label": "EXCEL درآمد",
	"business/accounting|accounting_card_spreadsheet_title":
		"Bitcoin کی قیمتیں Excel میں خود بخود لائیں",
	"business/accounting|accounting_card_wallets_label": "ہائبرڈ والٹس",
	"business/accounting|accounting_card_wallets_title":
		"ہمارے تجویز کردہ کاروباری والٹس دیکھیں",
	"business/accounting|accounting_disclaimer":
		"یہ گائیڈ صرف معلوماتی مقاصد کے لیے ہے اور اسے ٹیکس مشورہ نہیں سمجھا جانا چاہیے۔ اپنی صورتحال کے مطابق ٹیکس مشورے کے لیے، براہ کرم کسی اہل اکاؤنٹنٹ سے رجوع کریں۔",
	"business/accounting|accounting_disclaimer_label": "براہ کرم نوٹ کریں",
	"business/accounting|accounting_example_feb_1": "فروری 1",
	"business/accounting|accounting_example_gain_badge": "کیپٹل گین",
	"business/accounting|accounting_example_gain_explain":
		"آپ $10 کیپٹل گین درج کرتے ہیں۔",
	"business/accounting|accounting_example_jan_1": "جنوری 1",
	"business/accounting|accounting_example_loss_badge": "کیپٹل نقصان",
	"business/accounting|accounting_example_loss_explain":
		"آپ $10 کیپٹل نقصان درج کرتے ہیں۔",
	"business/accounting|accounting_example_received_label": "موصول",
	"business/accounting|accounting_example_sold_label": "بیچا یا خرچ کیا",
	"business/accounting|accounting_hero_subtitle":
		"اپنے کاروبار میں Bitcoin قبول کرنا آپ کی اکاؤنٹنگ کو پیچیدہ نہیں بناتا۔ یہ ہے مختصر ورژن — اور وہ ٹولز اور پیشہ ور جو اسے بے درد بنائیں گے۔",
	"business/accounting|accounting_intro_c1":
		"اگر آپ پہلے ہی نقد یا کارڈ قبول کرتے ہیں، تو اپنی کاروباری کتابوں میں Bitcoin شامل کرنا اس سے کہیں آسان ہے جتنا یہ نظر آتا ہے۔ آپ کے پاس دو راستے ہیں: ہر Bitcoin ادائیگی کو موصول ہوتے ہی خود بخود ڈالرز میں تبدیل کریں (کوئی نئی اکاؤنٹنگ کی ضرورت نہیں)، یا کچھ Bitcoin کی شکل میں رکھیں (چند اضافی نمبر ٹریک کرنے کے لیے)۔",
	"business/accounting|accounting_intro_c2":
		"یہ گائیڈ آپ کو دونوں طریقوں سے گزارتا ہے — تاکہ آپ وہ منتخب کر سکیں جو آپ کے کاروبار کے لیے موزوں ہو اور اعتماد کے ساتھ Bitcoin قبول کرنا شروع کریں۔",
	"business/accounting|accounting_s1": "آسان راستہ: ڈالرز میں خود بخود تبدیلی",
	"business/accounting|accounting_s3_c6":
		"بس۔ بنیادی حسابی فارمولا اسی طرح ہے جیسے کسی بھی دوسرے بڑھنے یا گھٹنے والے اثاثے کا حساب کیا جاتا ہے۔",
	"business/accounting|sources_bitcoin_price_report":
		"Bitcoin Price Report — Bitcoin کی موجودہ اور تاریخی ڈالر قیمت",
	"business/accounting|sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — کاروبار کے لیے Bitcoin اکاؤنٹنگ",
	"business/accounting|sources_spreadsheet_guru":
		"The Spreadsheet Guru — Excel میں کرپٹو کرنسی کی قیمتیں درآمد کریں",

	/* ─────────────── business/faq ─────────────── */
	"business/faq|faq_description":
		"اپنے کاروبار میں Bitcoin ادائیگیاں قبول کرنے کے بارے میں سوالات ہیں؟",
	"business/faq|faq_s1_c3":
		"Bitcoin نیٹ ورک بیچ والوں یا مرکزی اداروں جیسے بینکوں اور کریڈٹ کارڈ کمپنیوں کے بغیر کام کر سکتا ہے، تو آپ ان کی لین دین کی فیسوں سے بچ سکتے ہیں۔",
	"business/faq|faq_s1_c4":
		"Bitcoin کے لین دین جلدی (10 منٹ میں) آخری تصفیے تک پہنچ جاتے ہیں اور انہیں واپس نہیں لیا جا سکتا، تو آپ یہ جان کر سکون کی نیند سو سکتے ہیں کہ آپ کا پیسہ آپ کا ہے۔",
	"business/faq|faq_s2_c2":
		"Bitcoin قبول کرنا مفت ہے اور آپ کو اپنے کاروبار کو Bitcoin تاجروں کی فہرستوں میں درج کرنے دیتا ہے تاکہ Bitcoin استعمال کرنے والے آسانی سے آپ کا کاروبار تلاش کر سکیں۔",
	"business/faq|faq_s2_c3":
		"وہ تمام طریقے دیکھیں جن سے Bitcoin کاروبار کے لیے اچھا ہے۔",
	"business/faq|faq_s3_c2":
		"ہمارا والٹ گائیڈ آپ کو جلدی اور آسانی سے سیٹ اپ کرنے میں مدد کرے گا تاکہ آپ آج ہی Bitcoin قبول کرنے کے فوائد کھول سکیں!",
	"business/faq|faq_s3_c3": "والٹ گائیڈ دیکھیں",
	"business/faq|faq_s4_c2":
		"ہمارا والٹ گائیڈ آپ کو جلدی اور آسانی سے سیٹ اپ کرنے میں مدد کر سکتا ہے۔",
	"business/faq|faq_s4_c3":
		"آپ موصول کی گئی ادائیگیوں کا کچھ حصہ Bitcoin کی شکل میں رکھنے کا انتخاب بھی کر سکتے ہیں۔ Bitcoin میں بچت کے بہت سے فوائد ہیں:",
	"business/faq|faq_s4_c4": "Bitcoin مکمل ریزرو مالی نظام ہے۔",
	"business/faq|faq_s4_c5": "Bitcoin میں مہنگائی نہیں ہوتی۔",
	"business/faq|faq_s4_c6":
		"یہ فوائد Bitcoin کو طویل مدتی طور پر پیسہ ذخیرہ کرنے کا ایک بہترین طریقہ بناتے ہیں۔",
	"business/faq|faq_s4_c7":
		"چاہے آپ اپنی تمام Bitcoin ادائیگیوں کو ڈالرز میں تبدیل کرنے کا انتخاب کریں، آپ کو پھر بھی بہت کم فیسوں کے ساتھ ادائیگیاں قبول کرنے کے فوائد ملتے ہیں جبکہ زیادہ ممکنہ گاہکوں تک پہنچتے ہیں۔",
	"business/faq|faq_s5_c2":
		"ہمارا والٹ گائیڈ آپ کو وہ Bitcoin والٹ منتخب کرنے میں مدد کر سکتا ہے جو آپ کے کاروبار کے لیے بہترین ہو۔",
	"business/faq|faq_s5_c3": "والٹ گائیڈ دیکھیں",
	"business/faq|faq_s6": "کیا میں آن لائن Bitcoin ادائیگیاں قبول کر سکتا ہوں؟",
	"business/faq|faq_s6_c1":
		"جی ہاں! اپنے موجودہ آن لائن اسٹور کے ساتھ Bitcoin ادائیگیاں قبول کرنا آسان ہے۔",
	"business/faq|faq_s6_c2":
		"مزید معلومات کے لیے ہمارا والٹ گائیڈ دیکھیں۔",
	"business/faq|faq_s7": "میں اپنے گاہکوں کو کیسے بتاؤں کہ میں Bitcoin قبول کرتا ہوں؟",
	"business/faq|faq_s7_c1":
		"ہم مفت 'Bitcoin Accepted Here' سٹیکرز پیش کرتے ہیں جنہیں آپ اپنے کاروبار میں لگا سکتے ہیں تاکہ گاہکوں کو معلوم ہو کہ آپ Bitcoin قبول کرتے ہیں۔",
	"business/faq|faq_s7_c2": "اپنے سٹیکرز کی درخواست کے لیے یہاں کلک کریں۔",
	"business/faq|faq_s7_c3":
		"آپ اپنے کاروبار کو Bitcoin تاجروں کی فہرستوں میں مفت درج کرا سکتے ہیں اور Bitcoin استعمال کرنے والے لاکھوں افراد تک پہنچ حاصل کر سکتے ہیں جو ان کاروباروں پر اپنا Bitcoin خرچ کرنا چاہتے ہیں جو اسے قبول کرتے ہیں۔",
	"business/faq|faq_s7_c4": "ابھی فہرست میں شامل ہوں۔",
	"business/faq|faq_s8": "Bitcoin قبول کر کے میں زیادہ گاہک کیسے حاصل کر سکتا ہوں؟",
	"business/faq|faq_s8_c1":
		"لاکھوں Bitcoin استعمال کرنے والے ہیں جو ان کاروباروں پر اپنا Bitcoin خرچ کرنا چاہتے ہیں جو اسے قبول کرتے ہیں۔",
	"business/faq|faq_s8_c2":
		"محض Bitcoin ادائیگیاں قبول کر کے، آپ کا کاروبار مفت Bitcoin تاجروں کی فہرستوں میں درج ہو سکتا ہے اور آپ کو نئے ممکنہ گاہکوں تک رسائی دے سکتا ہے۔",
	"business/faq|faq_s8_c3": "ابھی فہرست میں شامل ہوں۔",
	"business/faq|faq_s9": "Bitcoin قبول کرنے کی کیا قیمت ہے؟",
	"business/faq|faq_s9_c1":
		"اپنے کاروبار میں Bitcoin قبول کرنا 100% مفت ہے۔ کوئی معاہدے یا چھپی ہوئی فیسیں نہیں۔",
	"business/faq|faq_s9_c2":
		"آج ہی Bitcoin ادائیگیاں قبول کرنا شروع کرنے کے لیے ہمارا والٹ گائیڈ دیکھیں۔",
	"business/faq|frequently_asked_questions_about_accepting_bitcoin":
		"Bitcoin قبول کرنے کے بارے میں اکثر پوچھے جانے والے سوالات",
	"business/faq|faq_hero_subtitle":
		"وہ مختصر جوابات جو تاجر Bitcoin قبول کرنے سے پہلے سب سے زیادہ پوچھتے ہیں — فیسیں، تصفیہ، والٹس، چارج بیکس، قیمت، اور بہت کچھ۔",
	"business/faq|faq_intro_c1":
		"جواب پھیلانے کے لیے نیچے کسی بھی سوال پر ٹیپ کریں۔ جب آپ Bitcoin قبول کرنا شروع کرنے کے لیے تیار ہوں، تو صفحے کے نیچے دیے گئے کاروباری وسائل آپ کو ہر قدم سے گزاریں گے۔",

	/* ─────────────── business/maps ─────────────── */
	"business/maps|bitcoin_merchant_maps_list_your_business_for_free":
		"Bitcoin تاجروں کی فہرستیں - اپنا کاروبار مفت میں درج کرائیں",
	"business/maps|maps_view": "نقشہ یہاں دیکھیں۔",
	"business/maps|biz_maps_form_header": "اپنے کاروبار کے بارے میں ہمیں بتائیں",
	"business/maps|biz_maps_form_intro":
		"آپ کو فہرست میں شامل کرنے کے لیے ہمیں صرف چند تفصیلات کی ضرورت ہے۔ ایڈریس کا ڈیٹا صرف اتنی دیر کے لیے رکھا جاتا ہے جتنا آپ کے کاروبار کو نقشوں پر جمع کرنے میں لگے۔",
	"business/maps|biz_maps_hero_subtitle":
		"اپنا کاروبار BTC Map پر مفت درج کریں — Bitcoin قبول کرنے والے تاجروں کی کھلی، عالمی ڈائریکٹری — تاکہ آس پاس کے Bitcoiners آپ کو ڈھونڈ سکیں اور آپ کے کاروبار میں Bitcoin خرچ کریں۔",
	"business/maps|biz_maps_hero_title":
		"اپنا کاروبار Bitcoin تاجروں کی فہرستوں پر لائیں",
	"business/maps|biz_maps_intro_c1":
		"Bitcoiners فعال طور پر خرچ کرنے کی جگہیں ڈھونڈتے ہیں۔ اپنا کاروبار نقشے پر لانا آپ کو ہر اس Bitcoin استعمال کنندہ کے سامنے رکھتا ہے جو آس پاس کھانے، خریداری یا قیام کے لیے کوئی جگہ ڈھونڈ رہا ہے — آپ کے لیے بغیر کسی قیمت کے۔",
	"business/maps|biz_maps_intro_c2":
		"بس نیچے دیا گیا مختصر فارم بھریں اور ہم آپ کے لیے آپ کا کاروبار BTC Map اور دیگر Bitcoin تاجروں کی فہرستوں میں جمع کرا دیں گے۔",
	"business/maps|biz_maps_meta_description":
		"BTC Map اور دیگر Bitcoin تاجروں کی فہرستوں پر اپنا کاروبار مفت درج کریں تاکہ آس پاس کے Bitcoiners آپ کو ڈھونڈ سکیں۔",
	"business/maps|biz_maps_placeholder_address": "گلی کا پتہ",
	"business/maps|biz_maps_placeholder_category":
		"زمرہ (مثلاً ریستوران، کیفے، ہوٹل)",
	"business/maps|biz_maps_placeholder_city": "شہر",
	"business/maps|biz_maps_placeholder_country": "ملک",
	"business/maps|biz_maps_placeholder_name": "کاروبار کا نام",
	"business/maps|biz_maps_placeholder_region": "ریاست / صوبہ / علاقہ",
	"business/maps|biz_maps_placeholder_website": "ویب سائٹ (اختیاری)",
	"business/maps|biz_maps_view_map_cta": "BTC Map دیکھیں",

	/* ─────────────── business/sticker-files/english/index ─────────────── */
	"business/sticker-files/english/index|english_bitcoin_accepted_here_sticker_files":
		"انگریزی 'Bitcoin Accepted Here' سٹیکر فائلیں",
	"business/sticker-files/english/index|english_biz_sticker_files_description":
		"اپنے 'Bitcoin Accepted Here' سٹیکرز پرنٹ کرنے کے لیے انگریزی سٹیکر فائلیں ڈاؤن لوڈ کریں۔",
	"business/sticker-files/english/index|biz_stickers_english_hero_subtitle":
		"انگریزی میں اپنے 'Bitcoin Accepted Here' سٹیکرز پرنٹ کریں تاکہ گاہکوں کو معلوم ہو کہ آپ Bitcoin قبول کرتے ہیں۔",
	"business/sticker-files/english/index|biz_stickers_english_hero_title":
		"انگریزی 'Bitcoin Accepted Here' سٹیکر فائلیں ڈاؤن لوڈ کریں",

	/* ─────────────── business/stickers ─────────────── */
	"business/stickers|bitcoin_accepted_here_stickers":
		"Bitcoin Accepted Here سٹیکرز",
	"business/stickers|stickers_request": "اپنے مفت سٹیکرز حاصل کریں",
	"business/stickers|biz_stickers_hero_subtitle":
		"اپنے گاہکوں کو بتائیں کہ آپ Bitcoin قبول کرتے ہیں۔ اپنے کاروبار میں لگانے کے لیے 'Bitcoin Accepted Here' سٹیکرز کا مفت پیکٹ آرڈر کریں۔",
	"business/stickers|biz_stickers_hero_title":
		"مفت 'Bitcoin Accepted Here' سٹیکرز",
	"business/stickers|biz_stickers_intro_c1":
		"Bitcoin قبول کرنا کام کا صرف نصف ہے — آپ کے گاہکوں کو بھی یہ جاننے کی ضرورت ہے کہ آپ ایسا کرتے ہیں۔ یہ چھوٹے 'Bitcoin Accepted Here' سٹیکرز آپ کے سامنے والے دروازے، رجسٹر، مینو، یا کسی بھی جگہ لگانے کے لیے ڈیزائن کیے گئے ہیں جہاں گاہک ادائیگی سے پہلے انہیں دیکھیں۔",
	"business/stickers|biz_stickers_intro_c2":
		"ہم آپ کو امریکہ یا کینیڈا میں کہیں بھی مفت پیکٹ ڈاک کر دیں گے، یا آپ دنیا میں کہیں بھی اپنے خود بھی پرنٹ کر سکتے ہیں۔",
	"business/stickers|biz_stickers_option_canada":
		"🇨🇦 کینیڈا — ڈاک سے مفت",
	"business/stickers|biz_stickers_option_print":
		"🌍 عالمی — خود پرنٹ کریں",
	"business/stickers|biz_stickers_option_usa": "🇺🇸 امریکہ — ڈاک سے مفت",
	"business/stickers|biz_stickers_placeholder_translation1":
		"'Bitcoin Accepted Here' کا ترجمہ",
	"business/stickers|biz_stickers_placeholder_translation2":
		"'Scan to learn why Bitcoin is good for business.' کا ترجمہ",
	"business/stickers|biz_stickers_print_c1":
		"آپ اپنے 'Bitcoin Accepted Here' سٹیکرز خود پرنٹ کر سکتے ہیں، چاہے آپ کہیں بھی رہتے ہوں۔ سٹیکر فائلیں اور پرنٹنگ کی ہدایات ڈاؤن لوڈ کرنے کے لیے نیچے اپنی زبان پر کلک کریں۔",
	"business/stickers|biz_stickers_print_header":
		"اپنی سٹیکر فائلیں خود پرنٹ کریں",
	"business/stickers|biz_stickers_request_c1":
		"اپنی مقامی زبان میں 'Bitcoin Accepted Here' سٹیکر فائلوں کی درخواست کے لیے نیچے دیا گیا فارم بھریں۔ تیار ہونے پر ہم آپ کو بتا دیں گے۔",
	"business/stickers|biz_stickers_request_header":
		"اپنی زبان نہیں دیکھ رہے؟",
	"business/stickers|biz_stickers_step_description":
		"ہم امریکہ اور کینیڈا کے پتوں پر مفت پیکٹ بھیجیں گے۔ دنیا میں کہیں اور، آپ خود پرنٹ کر سکتے ہیں۔",
	"business/stickers|biz_stickers_step_header":
		"آپ اپنے سٹیکرز کیسے حاصل کرنا چاہیں گے؟",

	/* ─────────────── business/wallets ─────────────── */
	"business/wallets|how_to_accept_bitcoin_payments":
		"Bitcoin ادائیگیاں قبول کرنے کا طریقہ",
	"business/wallets|wallets_feature_bitcoin_only": "صرف Bitcoin والٹ",
	"business/wallets|wallets_feature_hybrid": "ہائبرڈ والٹ",
	"business/wallets|wallets_feature_in_person": "صرف بالمشافہ ادائیگیاں",
	"business/wallets|wallets_feature_in_person_online":
		"بالمشافہ اور آن لائن ادائیگیاں",
	"business/wallets|wallets_feature_info":
		"کاروباری معلومات درکار ہیں",
	"business/wallets|wallets_feature_invoicing":
		"مفت انوائسنگ سافٹ ویئر",
	"business/wallets|wallets_feature_multiple_employees":
		"متعدد ملازمین کی حمایت (BPTs)",
	"business/wallets|wallets_feature_no_info": "کوئی معلومات درکار نہیں",
	"business/wallets|wallets_feature_online_store":
		"آن لائن اسٹور کا انضمام",
	"business/wallets|wallets_feature_self_hosted":
		"خود میزبانی = 0% فیس",
	"business/wallets|wallets_feature_settles_bitcoin":
		"100% Bitcoin میں تصفیہ",
	"business/wallets|wallets_feature_settles_both":
		"Bitcoin اور ڈالرز میں تصفیہ",
	"business/wallets|wallets_get_wallet": "والٹ حاصل کریں",
	"business/wallets|wallets_header":
		"Bitcoin ادائیگیاں قبول کرنے کے لیے مفت Bitcoin والٹ حاصل کریں",
	"business/wallets|wallets_intro_1":
		"تمام Bitcoin والٹس قابلِ تبادلہ ہیں، تو آپ کے گاہک آپ کو Bitcoin میں ادائیگی کر سکتے ہیں چاہے وہ کوئی بھی والٹ استعمال کریں۔",
	"business/wallets|wallets_intro_2": "صرف Bitcoin والٹس:",
	"business/wallets|wallets_intro_3":
		"یہ خالص Bitcoin والٹس ہیں جو Bitcoin کے تمام فوائد کھولتے ہیں: کوئی بیچ والے نہیں، کم فیسیں، اور کوئی چارج بیکس یا دھوکہ دہی نہیں۔",
	"business/wallets|wallets_intro_4": "ہائبرڈ والٹس:",
	"business/wallets|wallets_intro_5":
		"یہ آپ کو اپنے Bitcoin کے کسی بھی حصے کو ڈالرز میں تبدیل کرنے دیتے ہیں جیسے ہی کوئی گاہک آپ کو ادائیگی کرتا ہے۔ فیسیں پھر بھی کریڈٹ کارڈ ادائیگیوں سے کم ہیں، لیکن خالص Bitcoin ادائیگیوں سے زیادہ۔",
	"business/wallets|wallets_intro_6":
		"دونوں Bitcoin قبول کرنے کے بہترین طریقے ہیں۔ آپ جو خاص والٹ استعمال کرتے ہیں اس کا انحصار آپ کے کاروبار کے سائز اور قسم پر ہے۔",
	"business/wallets|wallets_name_breez": "BREEZ",
	"business/wallets|wallets_name_btcpay_server": "BTCPAY SERVER",
	"business/wallets|wallets_name_ibex_pay": "IBEX PAY",
	"business/wallets|wallets_name_open_node": "OPEN NODE",
	"business/wallets|wallets_name_square": "SQUARE",
	"business/wallets|wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets|wallets_name_zaprite": "ZAPRITE",
	"business/wallets|wallets_square_note":
		"آپ اپنے موجودہ Square PoS ٹرمینل یا آن لائن اسٹور انضمام کے ساتھ Bitcoin ادائیگیاں قبول کر سکتے ہیں۔ Bitcoin ادائیگیاں قبول کرنا اس سے کبھی آسان نہیں رہا۔",
	"business/wallets|biz_wallets_meta_description":
		"تمام Bitcoin والٹس قابلِ تبادلہ ہیں — وہ منتخب کریں جو آپ کے کاروبار کے لیے موزوں ہو۔ مفت، فوری تصفیہ، کوئی چارج بیکس نہیں۔",
	"business/wallets|sources_breez_business":
		"Breez — صرف Bitcoin Lightning والٹ",
	"business/wallets|sources_ibex":
		"IBEX — Lightning ادائیگیوں کی بنیادی ساخت",
	"business/wallets|sources_opennode":
		"OpenNode — Bitcoin پیمنٹ پروسیسر",
	"business/wallets|sources_square":
		"Square — Bitcoin ادائیگیاں قبول کریں",
	"business/wallets|sources_zaprite":
		"Zaprite — کاروبار کے لیے Bitcoin انوائسنگ",
	"business/wallets|wallets_hero_subtitle":
		"Bitcoin والٹس مفت ہیں۔ وہ منتخب کریں جو آپ کے کاروبار کے لیے موزوں ہو — بالمشافہ، آن لائن، یا انوائس پر مبنی — اور منٹوں میں Bitcoin قبول کرنا شروع کریں۔",
	"business/wallets|wallets_section_invoice":
		"انوائس پر مبنی کاروبار کے لیے والٹس",
	"business/wallets|wallets_section_invoice_intro":
		"اگر آپ کلائنٹس کو انوائس کرتے ہیں (کنسلٹنگ، فری لانسنگ، B2B خدمات)، انوائسنگ کے گرد بنائے گئے والٹ کا استعمال کریں۔ آپ کا کلائنٹ چند کلکس میں Bitcoin انوائس ادا کرتا ہے۔",
	"business/wallets|wallets_section_multiple":
		"متعدد ملازمین والے کاروبار کے لیے والٹس",
	"business/wallets|wallets_section_multiple_intro":
		"اگر آپ کے پاس کاؤنٹر پر ادائیگی لینے والی ٹیم ہے، تو ایسا والٹ منتخب کریں جو متعدد ملازمین کے لاگ ان کو سپورٹ کرتا ہو — تاکہ ہر ملازم کو اپنا PIN ملے اور آپ کو یہ صاف ریکارڈ ملے کہ کس نے کونسی ادائیگی لی۔",
	"business/wallets|wallets_section_online": "آن لائن کاروبار کے لیے والٹس",
	"business/wallets|wallets_section_online_intro":
		"ویب سائٹ پر بیچ رہے ہیں؟ یہ والٹس آپ کے آن لائن اسٹور میں شامل ہو جاتے ہیں اور دنیا میں کہیں سے بھی کسی بھی گاہک سے Bitcoin قبول کرتے ہیں — کوئی چارج بیکس نہیں، کوئی مرچنٹ اکاؤنٹ کی ضرورت نہیں۔",
	"business/wallets|wallets_section_sole":
		"انفرادی ملکیت والے کاروبار کے لیے والٹس",
	"business/wallets|wallets_section_sole_intro":
		"اگر آپ خود ایک دکان، کیفے، اسٹوڈیو، یا خدمت چلاتے ہیں، تو ان میں سے کوئی بھی والٹ کام کرے گا۔ اس بنیاد پر منتخب کریں کہ آپ ادائیگیوں کو Bitcoin میں رکھنا چاہتے ہیں یا ہر ادائیگی کے کچھ حصے کو خود بخود اپنی مقامی کرنسی میں تبدیل کرنا چاہتے ہیں۔",
	"business/wallets|wallets_strike_note":
		"Strike Business آپ کو صفر فیس اور فوری تصفیے کے ساتھ Bitcoin اور Lightning ادائیگیاں قبول کرنے دیتا ہے۔ بالمشافہ، آن لائن، اور انوائس پر مبنی ادائیگیوں کو سپورٹ کرتا ہے، آپ کی مقامی کرنسی میں اختیاری خود کار تبدیلی کے ساتھ۔",

	/* ─────────────── business/why ─────────────── */
	"business/why|learn_why_bitcoin_is_good_for_business":
		"Bitcoin یہاں قبول کیا جاتا ہے",
	"business/why|why_good_for_you": "Bitcoin آپ کے لیے بھی شاندار کیوں ہے",
	"business/why|why_learn_more_lowercase": "مزید جانیں ←",
	"business/why|why_s1_c1":
		"مہنگائی اس وقت ہوتی ہے جب زیادہ پیسہ چھاپا جاتا ہے یا ہوا سے بنایا جاتا ہے۔ اس سے آپ کی جیب میں رکھا پیسہ وقت کے ساتھ کم قیمت کا ہوتا جاتا ہے — اور یہی وجہ ہے کہ قیمتیں سال بہ سال بڑھتی رہتی ہیں۔",
	"business/why|why_s1_c2":
		"Bitcoin کی مقرر سپلائی 21 ملین سکوں پر مشتمل ہے۔ کوئی حکومت، بینک، یا کمپنی اس میں سے زیادہ نہیں چھاپ سکتی۔ آپ کی Bitcoin بچت وقت کے ساتھ خاموشی سے کم ہونے کے بجائے اپنی قیمت برقرار رکھتی ہے۔",
	"business/why|why_s2_c1":
		"حالیہ سالوں میں امریکہ کے کئی بینک بینک رنز کی وجہ سے ٹوٹ گئے ہیں۔ جب بہت سے گاہکوں نے ایک ہی وقت میں رقم نکالنے کی کوشش کی، تو بینکوں کے پاس سب کو واپس کرنے کے لیے نقد نہیں تھا۔",
	"business/why|why_s2_c2":
		"آپ کا پیسہ صرف رکھنے کے بجائے، بینک اس کا زیادہ تر حصہ قرض پر دیتے ہیں اور سرمایہ کاری کرتے ہیں۔ اگر وہ سرمایہ کاریاں بری ہو جائیں — یا ڈپازٹرز کا اعتماد ختم ہو جائے — تو بینک ناکام ہو سکتا ہے، اور آپ کے ڈپازٹس منجمد یا ضائع ہو سکتے ہیں۔",
	"business/why|why_s2_c3":
		"Bitcoin کے ساتھ، آپ اپنا پیسہ براہِ راست اپنے والٹ میں خود رکھ سکتے ہیں۔ کوئی بینک نہیں۔ کوئی بیچ والا نہیں۔ کوئی بینک رن نہیں۔",
	"business/why|why_s3_c1":
		"کریڈٹ کارڈز، PayPal، یا روایتی بینک اکاؤنٹس کے برعکس، Bitcoin استعمال کرنے کے لیے کسی کی اجازت کی ضرورت نہیں ہوتی۔",
	"business/why|why_s3_c2":
		"کوئی آپ کا اکاؤنٹ منجمد نہیں کر سکتا، کوئی ادائیگی روک نہیں سکتا، یا آپ کو نیٹ ورک سے کاٹ نہیں سکتا۔ یہ تاریخ کا پہلا مالی نظام ہے جسے آپ سنسرشپ یا ضبطی کے خوف کے بغیر آزادانہ استعمال کر سکتے ہیں۔",
	"business/why|why_s4_c1":
		"Bitcoin اکثر غلط سمجھا جاتا ہے، لیکن یہ خاموشی سے دنیا میں بہت اچھا کام کر رہا ہے۔",
	"business/why|why_s4_c2":
		"اس نے انسانی حقوق کے کارکنوں کو آزادی کے لیے لڑنے میں مدد کی ہے، کوڑے کے ڈھیروں اور تیل کے کھیتوں سے عالمی میتھین کے اخراج کو کم کیا ہے، بجلی کے گرڈز کو مستحکم کیا ہے، اور قومی پارکوں جیسے عوامی فلاحی کاموں کو فنڈ کیا ہے۔",
	"business/why|why_biz_s1": "کم فیسیں، کاروبار کے لیے زیادہ",
	"business/why|why_biz_s1_c1":
		"Bitcoin ادائیگیاں ان بینکوں اور کریڈٹ کارڈ کمپنیوں کو چھوڑ دیتی ہیں جو ہر فروخت سے 2-3% لیتی ہیں۔ کاروبار آپ کی ادائیگی کا زیادہ حصہ رکھتا ہے — جس کا اکثر مطلب ہے آپ کے لیے بہتر قیمتیں اور بہتر خدمت۔",
	"business/why|why_biz_s2": "فوری تصفیہ، کوئی چارج بیکس نہیں",
	"business/why|why_biz_s2_c1":
		"Bitcoin ادائیگیاں سیکنڈز میں طے پاتی ہیں، براہِ راست آپ کے والٹ سے کاروبار تک۔ بینک کی فنڈز جاری کرنے کے لیے دنوں کا انتظار نہیں، اور کوئی مہنگے چارج بیک تنازعات نہیں — تو کاروبار دھوکہ دہی سے لڑنے کے بجائے گاہکوں کی خدمت پر توجہ دے سکتا ہے۔",
	"business/why|why_biz_s3": "قبول کرنا مفت، سب کے لیے کھلا",
	"business/why|why_biz_s3_c1":
		"کاروبار کے لیے Bitcoin قبول کرنے کا کوئی معاہدہ، ماہانہ فیس، یا سیٹ اپ لاگت نہیں ہے۔ اور دنیا بھر میں لاکھوں Bitcoin استعمال کرنے والے ان تاجروں کو فعال طور پر تلاش کرتے ہیں جو اسے قبول کرتے ہیں — اس کاروبار کو نئے گاہکوں تک مفت رسائی فراہم کرتے ہیں۔",
	"business/why|why_business_cta_intro":
		"کیا آپ کاروبار چلاتے ہیں اور Bitcoin قبول کرنا شروع کرنا چاہتے ہیں؟",
	"business/why|why_business_cta_link": "دیکھیں یہ کیسے کام کرتا ہے ←",
	"business/why|why_for_business":
		"Bitcoin اس کاروبار کے لیے کیوں شاندار ہے",
	"business/why|why_for_business_intro":
		"Bitcoin قبول کرنا کاروبار کو ہر فروخت کا زیادہ حصہ رکھنے، فوری ادائیگی حاصل کرنے بغیر چارج بیکس، اور Bitcoin استعمال کرنے والوں کے عالمی سامعین تک پہنچنے دیتا ہے — سب کچھ بغیر معاہدوں اور بغیر ماہانہ فیسوں کے۔",
	"business/why|why_good_for_you_intro":
		"Bitcoin صرف کیش رجسٹر پر مفید نہیں — یہ پیسے کی بہتر شکل ہے جو آپ کی بچت، آپ کی نجی زندگی، اور آپ کی لین دین کرنے کی آزادی کا تحفظ کرتی ہے۔ یہاں ایک مختصر جائزہ ہے۔",
	"business/why|why_hero_subtitle":
		"آپ نے ابھی ایک Bitcoin Accepted Here سٹیکر سکین کیا۔ یہ خوشخبری کیوں ہے — اس کاروبار کے لیے، اور آپ کے لیے۔",
	"business/why|why_intro_c1":
		"یہ کاروبار جس میں آپ ہیں Bitcoin قبول کرتا ہے — ایک جدید، اوپن سورس پیمنٹ نیٹ ورک جسے کوئی بھی، دنیا میں کہیں بھی، بینکوں یا بیچ والوں کے کٹ لیے بغیر استعمال کر سکتا ہے۔",
	"business/why|why_intro_c2":
		"نیچے مختصر ورژن ہے کہ Bitcoin قبول کرنا اس کاروبار کے لیے کیوں اچھا ہے، اور Bitcoin استعمال کرنا گاہک کے طور پر آپ کے لیے کیوں اچھا ہے۔",
	"business/why|why_next_business_label": "BITCOIN قبول کریں",
	"business/why|why_next_business_title":
		"اپنے کاروبار میں Bitcoin قبول کریں",
	"business/why|why_next_buy_label": "BITCOIN خریدیں",
	"business/why|why_next_buy_title": "اپنا پہلا Bitcoin خریدیں",
	"business/why|why_next_learn_label": "مزید جانیں",
	"business/why|why_next_learn_title": "Bitcoin کے بارے میں مزید جانیں",
	"business/why|why_next_wallet_label": "والٹ حاصل کریں",
	"business/why|why_next_wallet_title": "اپنا Bitcoin والٹ حاصل کریں",
	"business/why|why_whats_next_heading": "اب کہاں جائیں؟",
	"business/why|why_whats_next_intro":
		"اگر یہ آپ کا Bitcoin سٹیکر کا پہلا سکین ہے، تو یہاں سے جانے کی سب سے مفید جگہیں یہ ہیں۔",

	/* ─────────────── business/index ─────────────── */
	"business/index|biz_label_accounting": "اکاؤنٹنگ",
	"business/index|biz_label_faq": "اکثر پوچھے گئے سوالات",
	"business/index|biz_label_maps": "تاجروں کی فہرستیں",
	"business/index|biz_label_rewards": "انعامات",
	"business/index|biz_label_stickers": "سٹیکرز",
	"business/index|biz_label_wallets": "والٹس",
	"business/index|biz_meta_description":
		"کم فیسوں، فوری تصفیے، کوئی چارج بیکس، اور زیادہ گاہکوں کے لیے اپنے کاروبار میں Bitcoin قبول کریں۔",
	"business/index|business_hero_subtitle":
		"کم فیسوں سے ادائیگیاں قبول کریں، فوری ادائیگی حاصل کریں، اور لاکھوں نئے گاہکوں تک پہنچیں — بغیر معاہدوں اور بغیر چھپے ہوئے اخراجات کے۔",
	"business/index|business_intro_c1":
		"Bitcoin آپ کے کاروبار کو ادائیگی حاصل کرنے کا تیز، سستا، اور زیادہ نجی طریقہ دیتا ہے۔ کوئی بیچ والے نہیں۔ کوئی چارج بیکس نہیں۔ کوئی معاہدے نہیں۔ صرف وہ پیسہ جو سیکنڈز میں طے ہو جاتا ہے، براہِ راست آپ کے گاہکوں سے آپ تک۔",
	"business/index|business_intro_c2":
		"نیچے مختصر ورژن ہے کہ Bitcoin کاروبار کے لیے کیوں اچھا ہے — اور اس سے نیچے، ہر وہ وسیلہ جو آپ کو آج ہی اسے قبول کرنا شروع کرنے کے لیے درکار ہے۔",
	"business/index|business_resources_heading":
		"Bitcoin قبول کرنے کے لیے ہر چیز جو آپ کو درکار ہے",
	"business/index|business_resources_intro":
		"ان وسائل کو اپنی رفتار سے دیکھیں۔ ہر ایک ایک مختصر، عملی گائیڈ ہے۔",

	/* ─────────────── business/maps-success ─────────────── */
	"business/maps-success|biz_maps_success_btn_view_map": "BTC Map دیکھیں",
	"business/maps-success|biz_maps_success_hero_subtitle":
		"اپنا کاروبار جمع کرانے کا شکریہ۔ ہم آپ کو جلد ہی Bitcoin تاجروں کی فہرستوں پر درج کر دیں گے۔",
	"business/maps-success|biz_maps_success_hero_title":
		"درخواست موصول ہوئی 🎉",
	"business/maps-success|biz_maps_success_timeline_c1":
		"آپ کا کاروبار 1 سے 2 ہفتوں کے اندر BTC Map اور دیگر Bitcoin تاجروں کی ڈائریکٹریوں پر درج کیا جائے گا۔ نقشوں کو درست رکھنے کے لیے ہم ہر گزارش کا ہاتھ سے جائزہ لیتے ہیں۔",
	"business/maps-success|biz_maps_success_timeline_c2":
		"آپ کی فہرست لائیو ہونے کے بعد، آس پاس کے Bitcoiners آپ کا کاروبار ڈھونڈ سکتے ہیں اور وہاں Bitcoin خرچ کرنے آ سکتے ہیں۔",
	"business/maps-success|biz_maps_success_timeline_header": "اب کیا ہوگا",
	"business/maps-success|biz_maps_success_view_c1":
		"انتظار کے دوران، BTC Map پر ایک نظر ڈالیں اور دنیا بھر میں Bitcoin قبول کرنے والے کاروبار کے بڑھتے نیٹ ورک کو دیکھیں۔",
	"business/maps-success|biz_maps_success_view_header":
		"دیکھیں آپ کہاں ظاہر ہوں گے",

	/* ─────────────── business/sticker-language-success ─────────────── */
	"business/sticker-language-success|biz_sticker_language_success_hero_subtitle":
		"اپنی زبان میں 'Bitcoin Accepted Here' سٹیکر فائلوں کی درخواست کا شکریہ۔",
	"business/sticker-language-success|biz_sticker_language_success_hero_title":
		"درخواست موصول ہوئی 🎉",
	"business/sticker-language-success|biz_sticker_language_success_timeline_c1":
		"ہم 3 سے 4 ہفتوں کے اندر آپ کی سٹیکر فائلیں بنائیں اور شائع کریں گے۔ تیار ہونے پر، آپ انہیں ہمارے سٹیکر فائلز صفحے سے مفت ڈاؤن لوڈ اور پرنٹ کر سکیں گے۔",
	"business/sticker-language-success|biz_sticker_language_success_timeline_c2":
		"سٹیکر فائلیں بیچوں میں جاری کی جاتی ہیں، تو آپ کی زبان کے لائیو ہونے میں چند ہفتے لگ سکتے ہیں۔ صبر کا شکریہ!",
	"business/sticker-language-success|biz_sticker_language_success_timeline_header":
		"اب کیا ہوگا",

	/* ─────────────── business/sticker-success ─────────────── */
	"business/sticker-success|biz_sticker_success_btn_order_bulk":
		"تھوک میں آرڈر کریں",
	"business/sticker-success|biz_sticker_success_btn_request_more":
		"ایک اور مفت پیکٹ کی درخواست کریں",
	"business/sticker-success|biz_sticker_success_hero_subtitle":
		"آپ کو 2 سے 4 ہفتوں میں اپنے مفت 'Bitcoin Accepted Here' سٹیکرز موصول ہوں گے، ایک سادہ سفید لفافے میں 3 سٹیکرز کے ساتھ۔",
	"business/sticker-success|biz_sticker_success_hero_title":
		"آپ کے سٹیکرز راستے میں ہیں 🎉",
	"business/sticker-success|biz_sticker_success_more_c1":
		"اگر آپ کے کاروبار کے لیے 3 سٹیکرز کافی نہیں، تو بے فکر ہو کر ایک اور مفت پیکٹ کی درخواست کریں — یا اسی پرنٹر سے تھوک میں آرڈر کریں جو ہم استعمال کرتے ہیں۔",
	"business/sticker-success|biz_sticker_success_more_header":
		"مزید سٹیکرز چاہیے؟",
	"business/sticker-success|biz_sticker_success_tip_1":
		"اپنے سامنے والے دروازے یا کھڑکی پر تاکہ گاہک اندر آنے سے پہلے دیکھیں",
	"business/sticker-success|biz_sticker_success_tip_2":
		"اپنے رجسٹر، POS ٹرمینل، یا ادائیگی کے علاقے کے قریب",
	"business/sticker-success|biz_sticker_success_tip_3":
		"مینو، قیمت کی فہرستوں، یا ٹپ کے جار پر",
	"business/sticker-success|biz_sticker_success_tip_4":
		"کسی ایسی جگہ نہ لگائیں جس کے آپ مالک نہیں یا جہاں لگانے کی اجازت نہیں",
	"business/sticker-success|biz_sticker_success_tips_header":
		"اپنے سٹیکرز لگانے کی اچھی جگہیں",

	/* ─────────────── stickers ─────────────── */
	"stickers|stickers_intro_c2": "Bitcoin",
	"stickers|stickers_flyers_link_before":
		"اس دوران، اپنا خود پرنٹ کریں اور لگائیں",
	"stickers|stickers_instructions_1":
		"اپنا ڈاک کا پتہ درج کریں اور ہم آپ کو ڈاک سے ایک مفت Bitcoin سٹیکر پیک بھیجیں گے۔ آپ کے سٹیکرز ایک سادہ سفید لفافے میں بھیجے جائیں گے۔",
	"stickers|stickers_btn_choose_pack": "یہ پیک منتخب کریں",
	"stickers|stickers_bulk_c1": "چند سے زیادہ سٹیکرز چاہتے ہیں؟",
	"stickers|stickers_bulk_c2":
		"اسی پرنٹر سے تھوک میں آرڈر کریں جو ہم استعمال کرتے ہیں",
	"stickers|stickers_bulk_c3":
		"— جتنا زیادہ آپ خریدتے ہیں، فی سٹیکر اتنے ہی سستے ہیں۔",
	"stickers|stickers_bulk_cta": "تھوک میں سٹیکرز خریدیں",
	"stickers|stickers_bulk_header": "تھوک میں سٹیکرز کا آرڈر دیں",
	"stickers|stickers_hero_subtitle":
		"Bitcoin سٹیکرز کا مفت پیکٹ آرڈر کریں اور انہیں عوامی جگہوں پر لگائیں تاکہ زیادہ لوگ Bitcoin کے بارے میں سیکھ سکیں۔",
	"stickers|stickers_hero_title": "مفت Bitcoin سٹیکرز",
	"stickers|stickers_intro_c1":
		"ہمارا مشن آپ کو زیادہ لوگوں کو اورنج پل کرنے میں مدد کرنا ہے Bitcoin سٹیکرز عوامی جگہوں پر لگا کر۔ ہمارے تمام سٹیکرز پر QR کوڈز ہیں جو تعلیمی صفحوں سے لنک کرتے ہیں جو ہیں",
	"stickers|stickers_intro_c3": "مہنگائی",
	"stickers|stickers_intro_c4":
		"نیچے سٹیکر پیک منتخب کریں اور چنیں کہ آپ انہیں کیسے حاصل کرنا چاہیں گے — ہم امریکہ یا کینیڈا میں کسی کو بھی مفت پیکٹ ڈاک کر سکتے ہیں، یا آپ دنیا میں کہیں بھی اپنے خود پرنٹ کر سکتے ہیں۔",
	"stickers|stickers_mail_header": "ہم آپ کے مفت سٹیکرز ڈاک کریں گے",
	"stickers|stickers_next_print_flyers": "پھیلاتے رہیں",
	"stickers|stickers_next_print_flyers_desc":
		"عوامی جگہوں پر لگانے کے لیے مفت Bitcoin پمفلٹ پرنٹ کریں",
	"stickers|stickers_option_bulk": "📦 عالمی — تھوک میں آرڈر کریں",
	"stickers|stickers_option_canada": "🇨🇦 کینیڈا — ڈاک سے مفت",
	"stickers|stickers_option_print": "🌍 عالمی — خود پرنٹ کریں",
	"stickers|stickers_option_usa": "🇺🇸 امریکہ — ڈاک سے مفت",
	"stickers|stickers_print_c1":
		"آپ اپنے سٹیکرز خود پرنٹ کر کے حصہ لے سکتے ہیں، چاہے آپ کہیں بھی رہتے ہوں۔ سٹیکر فائلیں اور پرنٹنگ کی ہدایات ڈاؤن لوڈ کرنے کے لیے نیچے اپنی زبان پر کلک کریں۔",
	"stickers|stickers_print_c2":
		"ہر سٹیکر ہر زبان میں دستیاب نہیں ہے۔",
	"stickers|stickers_print_header": "اپنی سٹیکر فائلیں خود پرنٹ کریں",
	"stickers|stickers_request_c1":
		"اپنی مقامی زبان میں سٹیکر فائلوں کی درخواست کے لیے نیچے دیا گیا فارم بھریں۔ تیار ہونے پر ہم آپ کو بتا دیں گے۔",
	"stickers|stickers_request_header": "اپنی زبان نہیں دیکھ رہے؟",
	"stickers|stickers_share_c2":
		"کسی بھی Nostr کلائنٹ میں تلاش کر کے ہمیں Nostr پر فالو کریں",
	"stickers|stickers_share_c3": "کسی بھی Nostr کلائنٹ میں۔",
	"stickers|stickers_signs_pack_description":
		"وارننگ، خطرہ، اور احتیاط کی طرز کے سائن جن پر Bitcoin پیغامات ہیں — توجہ حاصل کرنے اور لوگوں کو روک کر پڑھنے کے لیے ڈیزائن کیا گیا۔",
	"stickers|stickers_step_1_description":
		"ہر پیک میں Bitcoin سٹیکرز کا ایک مختلف سیٹ ہے جس پر QR کوڈز ہیں جو لوگوں کو Bitcoin کے بارے میں سکھاتے ہیں۔",
	"stickers|stickers_step_1_eyebrow": "قدم 1",
	"stickers|stickers_step_1_header": "اپنا سٹیکر پیک منتخب کریں",
	"stickers|stickers_step_2_description":
		"ہم امریکہ اور کینیڈا کے پتوں پر مفت پیکٹ بھیجیں گے۔ دنیا میں کہیں اور، آپ خود پرنٹ کر سکتے ہیں یا تھوک میں آرڈر کر سکتے ہیں۔",
	"stickers|stickers_step_2_eyebrow": "قدم 2",
	"stickers|stickers_step_2_header":
		"آپ اپنے سٹیکرز کیسے حاصل کرنا چاہیں گے؟",
	"stickers|stickers_text_pack_description":
		"Bitcoin نعروں اور ایک سطری جملوں کا مرکب جو عوامی جگہوں پر تجسس پیدا کرنے کے لیے ڈیزائن کیا گیا ہے۔",

	/* ─────────────── nostr/index ─────────────── */
	"nostr/index|nostr_amethyst_name": "Amethyst",
	"nostr/index|nostr_damus_name": "Damus",
	"nostr/index|nostr_iris_name": "Iris",
	"nostr/index|nostr_platform_android": "Android",
	"nostr/index|nostr_platform_ios": "iPhone",
	"nostr/index|nostr_platform_ios_android_web":
		"iPhone، Android اور ویب",
	"nostr/index|nostr_platform_web": "ویب براؤزر",
	"nostr/index|nostr_primal_name": "Primal",
	"nostr/index|nostr_page_description":
		"Nostr آن لائن مواصلات کے لیے ایک نیا غیر مرکزی پروٹوکول ہے — اسے کوئی ایک کمپنی کنٹرول نہیں کرتی، Bitcoin زپس ابتدائی طور پر بنائے گئے ہیں، اور آپ فالوورز کھوئے بغیر کلائنٹس کے درمیان منتقل ہو سکتے ہیں۔",
	"nostr/index|nostr_amethyst_f1": "بہت ساری خصوصیات اور تخصیص",
	"nostr/index|nostr_amethyst_f2": "ایک علیحدہ Bitcoin والٹ کی ضرورت",
	"nostr/index|nostr_amethyst_f3": "100% مفت",
	"nostr/index|nostr_damus_f1": "Twitter جیسا مانوس انٹرفیس",
	"nostr/index|nostr_damus_f2": "ایک علیحدہ Bitcoin والٹ کی ضرورت",
	"nostr/index|nostr_damus_f3": "100% مفت",
	"nostr/index|nostr_download_heading": "ایک مفت Nostr کلائنٹ ڈاؤن لوڈ کریں",
	"nostr/index|nostr_download_intro":
		"Nostr کلائنٹس مفت ایپس ہیں جو آپ کو Nostr نیٹ ورک پر پڑھنے اور پوسٹ کرنے دیتی ہیں۔ یہ سب قابلِ تبادلہ ہیں — آپ کبھی بھی کلائنٹ تبدیل کر سکتے ہیں اور اپنے فالوورز اور مواد رکھ سکتے ہیں۔",
	"nostr/index|nostr_hero_subtitle":
		"Nostr آن لائن بات چیت کے لیے ایک نیا غیر مرکزی پروٹوکول ہے — اسے کوئی ایک کمپنی کنٹرول نہیں کرتی، Bitcoin زپس بنائے گئے ہیں، اور آپ اپنے فالوورز کھوئے بغیر ایپس کے درمیان منتقل ہو سکتے ہیں۔",
	"nostr/index|nostr_hero_title": "Nostr کیا ہے؟",
	"nostr/index|nostr_intro_c1":
		"Nostr ای میل کی طرح ہے: کسی کا پروٹوکول پر کنٹرول نہیں، کوئی بھی اس پر ایپ بنا سکتا ہے، اور آپ جو ایپ پسند کریں چن سکتے ہیں۔ Twitter یا Facebook کے برعکس، کوئی مرکزی کمپنی نہیں جو آپ کو سنسر، ڈی پلیٹ فارم یا ڈی بوسٹ کر سکے۔",
	"nostr/index|nostr_intro_c2":
		"نیچے مختصر ورژن ہے کہ Nostr کیوں اہم ہے — اور پھر ہر وہ مفت Nostr کلائنٹ جو آپ کو آج شروع کرنے کے لیے درکار ہے۔",
	"nostr/index|nostr_iris_f1": "بہت سادہ — انسٹال کرنے کی ضرورت نہیں",
	"nostr/index|nostr_iris_f2":
		"ٹیسٹ اکاؤنٹ کے ساتھ Nostr آزمانے کا آسان طریقہ",
	"nostr/index|nostr_iris_f3": "100% مفت",
	"nostr/index|nostr_learn_more_label": "مزید گہرائی میں جائیں",
	"nostr/index|nostr_learn_more_title":
		"nostr.how پر Nostr کے بارے میں مزید جانیں",
	"nostr/index|nostr_primal_f1": "تجویز کردہ پہلا کلائنٹ",
	"nostr/index|nostr_primal_f2": "Bitcoin زپ والٹ بلٹ ان",
	"nostr/index|nostr_primal_f3": "100% مفت",
	"nostr/index|nostr_s1": "پروٹوکول، پلیٹ فارم نہیں",
	"nostr/index|nostr_s1_c1":
		"Nostr ایک نیا پروٹوکول ہے جو آپ کو سنسرشپ، ڈی پلیٹ فارمنگ، یا ڈی بوسٹنگ کے خوف کے بغیر آن لائن بات چیت کرنے دیتا ہے۔",
	"nostr/index|nostr_s1_c2":
		"Twitter اور Facebook جیسے پلیٹ فارمز ایک کمپنی کنٹرول کرتی ہے، لیکن کوئی Nostr پروٹوکول کنٹرول نہیں کرتا۔",
	"nostr/index|nostr_s2": "منتقلی کی آزادی",
	"nostr/index|nostr_s2_c1":
		"Nostr ای میل کی طرح ہے۔ کوئی ای میل پروٹوکول کنٹرول نہیں کرتا، اور کوئی بھی اس پر کلائنٹ (جیسے Gmail، Hotmail، وغیرہ) بنا سکتا ہے۔",
	"nostr/index|nostr_s2_c2":
		"کوئی Nostr پروٹوکول بھی کنٹرول نہیں کرتا، اور کوئی بھی اس پر کلائنٹ (جیسے Damus، Amethyst، وغیرہ) بنا سکتا ہے۔",
	"nostr/index|nostr_s2_c3":
		"اگر آپ کو کسی خاص کلائنٹ کا کام کرنے کا طریقہ پسند نہیں ہے، تو آپ بغیر فالوورز یا مواد کھوئے اپنا Nostr اکاؤنٹ کسی دوسرے کلائنٹ میں بآسانی منتقل کر سکتے ہیں۔",
	"nostr/index|nostr_s3": "Bitcoin بلٹ ان ہے",
	"nostr/index|nostr_s3_c1":
		"Bitcoin Nostr پروٹوکول میں ابتدائی طور پر بلٹ ان ہے۔ اگر آپ کو کوئی مواد پسند آئے، آپ آسانی سے کسی کو شکریے کے طور پر Bitcoin زپ کر سکتے ہیں!",
	"nostr/index|nostr_s3_c2":
		"Twitter اور Facebook جیسے مرکزی پلیٹ فارمز پر، مرکزی کمپنی آپ کے مواد سے پیسے کماتی ہے۔ لیکن Nostr جیسے کھلے پروٹوکولز پر، آپ اپنے مواد سے پیسے کماتے ہیں۔",
	"nostr/index|sources_damus": "Damus — iPhone Nostr کلائنٹ",
	"nostr/index|sources_iris": "Iris — براؤزر پر مبنی Nostr کلائنٹ",
	"nostr/index|sources_nostr_how": "nostr.how — Nostr کیا ہے؟",
	"nostr/index|sources_nostr_protocol":
		"Nostr Protocol — اوپن سورس وضاحت",
	"nostr/index|sources_primal":
		"Primal — بلٹ ان Bitcoin زپ والٹ کے ساتھ Nostr کلائنٹ",
	"nostr/index|what_is_nostr": "Nostr کیا ہے؟",

	/* ─────────────── get-involved ─────────────── */
	"get-involved|get_involved_and_help_spread_bitcoin":
		"حصہ لیں اور Bitcoin پھیلائیں",
	"get-involved|get_involved_business_content_1":
		"Bitcoin سرکلر اکانومی بنانے میں مدد کرنا چاہتے ہیں؟ سب سے آسان طریقہ یہ ہے کہ مقامی کاروبار کو Bitcoin ادائیگیاں قبول کرنا شروع کرنے میں مدد کریں۔",
	"get-involved|get_involved_business_content_2":
		"کسی ایسے کاروبار کو جانتے ہیں جو اس کے لیے کھلا ہو سکتا ہے؟ مالک کو ہمارے",
	"get-involved|get_involved_business_content_3": "Bitcoin بزنس صفحے پر بھیجیں۔",
	"get-involved|get_involved_description":
		"ہمارے مفت وسائل Bitcoin قبولیت پھیلانا آسان بناتے ہیں۔ سٹیکرز، پمفلٹ، کاروبار کے لیے 'Bitcoin Accepted Here' سٹیکرز، اور ایک اوپن سورس کوڈ بیس جس میں کوئی بھی حصہ ڈال سکتا ہے۔",
	"get-involved|get_involved_header": "حصہ لیں اور Bitcoin پھیلائیں۔",
	"get-involved|get_involved_intro_5":
		"آپ یہ بدلنے میں مدد کر سکتے ہیں۔ ہم نے کئی مفت وسائل بنائے ہیں تاکہ آپ کے ارد گرد لوگوں تک Bitcoin کی امید پھیلانا آسان ہو۔",
	"get-involved|get_involved_biz_stickers_note":
		"پہلے ہی Bitcoin قبول کر رہے ہیں؟ ہمارے مفت 'Bitcoin Accepted Here' سٹیکرز کے ساتھ گاہکوں کو بتائیں۔ ہم امریکہ یا کینیڈا میں کسی بھی پتے پر پیکٹ بھیجیں گے، یا آپ دنیا میں کہیں بھی اپنے خود پرنٹ کر سکتے ہیں۔",
	"get-involved|get_involved_card_biz_stickers_label":
		"یہاں قبول کیا جاتا ہے سٹیکرز",
	"get-involved|get_involved_card_biz_stickers_source":
		"ماخذ: bitcoin.rocks ←",
	"get-involved|get_involved_card_biz_stickers_title":
		"اپنے کاروبار کے لیے مفت 'Bitcoin Accepted Here' سٹیکرز",
	"get-involved|get_involved_card_business_label":
		"کاروبار کے لیے Bitcoin",
	"get-involved|get_involved_card_business_source":
		"ماخذ: bitcoin.rocks ←",
	"get-involved|get_involved_card_business_title":
		"ہر وہ چیز جو کاروبار کو Bitcoin ادائیگیاں قبول کرنا شروع کرنے کے لیے درکار ہے",
	"get-involved|get_involved_card_flyers_label": "قابلِ پرنٹ پمفلٹ",
	"get-involved|get_involved_card_flyers_source":
		"ماخذ: bitcoin.rocks ←",
	"get-involved|get_involved_card_flyers_title":
		"ایک مفت Bitcoin پمفلٹ ڈاؤن لوڈ اور پرنٹ کریں",
	"get-involved|get_involved_card_github_label": "اوپن سورس",
	"get-involved|get_involved_card_github_source": "ماخذ: GitHub ←",
	"get-involved|get_involved_card_github_title":
		"GitHub پر bitcoin.rocks میں حصہ ڈالیں",
	"get-involved|get_involved_card_stickers_label": "مفت سٹیکرز",
	"get-involved|get_involved_card_stickers_source":
		"ماخذ: bitcoin.rocks ←",
	"get-involved|get_involved_card_stickers_title":
		"اپنے دروازے تک Bitcoin سٹیکر پیک کی مفت درخواست کریں",
	"get-involved|get_involved_flyers_content_1":
		"پمفلٹ آپ کی برادری میں Bitcoin کا تعارف کرانے کے سب سے آسان طریقوں میں سے ایک ہیں۔ ایک مفت قابلِ پرنٹ Bitcoin پمفلٹ ڈاؤن لوڈ کریں، جتنی کاپیاں چاہیں پرنٹ کریں، اور انہیں کمیونٹی بورڈز، کافی شاپس، ملاقاتوں، یا کسی بھی جگہ لگائیں جہاں لوگ جمع ہوتے ہیں۔",
	"get-involved|get_involved_flyers_content_2":
		"ہر پمفلٹ میں ایک زبردست عنوان اور QR کوڈ شامل ہے جو متجسس پڑھنے والوں کو مزید جاننے کے لیے bitcoin.rocks پر بھیجتا ہے۔",
	"get-involved|get_involved_flyers_content_3":
		"سٹیکرز کے برعکس، پمفلٹ دنیا میں کہیں سے بھی طلب پر پرنٹ کیے جا سکتے ہیں — آپ کو صرف ایک پرنٹر اور چند منٹ درکار ہیں۔",
	"get-involved|get_involved_flyers_header":
		"ایک پمفلٹ پرنٹ اور لگائیں",
	"get-involved|get_involved_flyers_image_alt":
		"bitcoin.rocks سے مفت قابلِ پرنٹ Bitcoin پمفلٹ کا پیش منظر",
	"get-involved|get_involved_github_content_1":
		"bitcoin.rocks ایک مفت، اوپن سورس پروجیکٹ ہے جو MIT لائسنس کے تحت ہے۔ ہمارا مشن تعلیم کے ذریعے Bitcoin کی قبولیت کو تیز کرنا ہے — اور ہم یہ اکیلے نہیں کر سکتے۔",
	"get-involved|get_involved_github_content_2":
		"چاہے آپ ڈویلپر ہوں، ڈیزائنر، مصنف، یا مترجم، آپ کے لیے مدد کرنے کا ایک طریقہ ہے۔ ہم خاص طور پر ان حصہ ڈالنے والوں کا خیرمقدم کرتے ہیں جو ہمارے مواد کو مزید زبانوں میں ترجمہ کر سکیں تاکہ دنیا بھر میں زیادہ لوگ اپنی مادری زبان میں Bitcoin کے بارے میں سیکھ سکیں۔",
	"get-involved|get_involved_github_content_3":
		"ریپوزٹری کو فورک کریں، پُل ریکویسٹ کھولیں، ایک مسئلہ درج کریں، یا اپنی حمایت ظاہر کرنے کے لیے بس پروجیکٹ کو سٹار کریں۔ ہر شراکت Bitcoin کو زیادہ لوگوں تک پہنچنے میں مدد کرتی ہے۔",
	"get-involved|get_involved_github_header": "GitHub پر حصہ ڈالیں",
	"get-involved|get_involved_sticker_image_alt":
		"bitcoin.rocks سے مفت Bitcoin ٹیکسٹ سٹیکر پیک",

	/* ─────────────── bitcoin-vs-banks ─────────────── */
	"bitcoin-vs-banks|point_1_summary_1":
		"انٹرنیٹ کنکشن رکھنے والا کوئی بھی Bitcoin استعمال کر سکتا ہے — یہ",
	"bitcoin-vs-banks|point_1_summary_2": "بغیر اجازت ہے۔",
	"bitcoin-vs-banks|point_1_summary_3":
		"بینک پالیسی یا حکومتی قواعد کی بنیاد پر اکاؤنٹس سے انکار کر سکتے ہیں، انہیں منجمد یا بند کر سکتے ہیں۔",
	"bitcoin-vs-banks|point_2_summary_1":
		"Bitcoin نیٹ ورک 24/7/365 چلتا ہے بغیر کسی دیکھ بھال کی ونڈو یا چھٹی کے۔ بینکوں کے محدود اوقات، ہفتے کے آخر کی چھٹیاں، اور بندش کی ونڈوز ہوتی ہیں۔",
	"bitcoin-vs-banks|point_3_summary_1":
		"ہر Bitcoin لین دین ایک عوامی بلاکچین پر ہے جس کا کوئی بھی آڈٹ کر سکتا ہے۔ بینک نجی لیجرز چلاتے ہیں جن کی گاہک خود تصدیق نہیں کر سکتے۔",
	"bitcoin-vs-banks|point_4_summary_1":
		"Bitcoin کے ساتھ، آپ اپنی نجی کلیدیں خود رکھتے ہیں — ہمارا سادہ گائیڈ دیکھیں",
	"bitcoin-vs-banks|point_4_summary_2": "Bitcoin والٹس",
	"bitcoin-vs-banks|point_4_summary_3":
		"بینک آپ کا پیسہ رکھتے ہیں اور کسی بھی وقت اسے منجمد، محدود، یا روک سکتے ہیں۔",
	"bitcoin-vs-banks|point_5_summary_1":
		"Bitcoin فیسیں شفاف اور قابلِ پیش بینی ہیں۔ بینک وقت کے ساتھ چھپی ہوئی اکاؤنٹ، اوور ڈرافٹ، وائر، اور ATM فیسیں بڑھاتے رہتے ہیں۔",
	"bitcoin-vs-banks|point_6_summary_1":
		"Bitcoin آپ کو صرف وہ خرچ کرنے دیتا ہے جو آپ کے پاس واقعی ہے۔ بینک اوور ڈرافٹس کی اجازت دیتے ہیں، پھر اس مراعت کے لیے بھاری جرمانے کی فیسیں لیتے ہیں۔",
	"bitcoin-vs-banks|point_7_summary_1":
		"نشر ہونے کے بعد، Bitcoin کے لین دین روکے یا واپس نہیں کیے جا سکتے۔ بینک پالیسی یا حکومتی احکامات کی بنیاد پر لین دین روک، منجمد، یا واپس کر سکتے ہیں۔",
	"bitcoin-vs-banks|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">بینکوں</span> کے درمیان فرق",

	/* ─────────────── bitcoin-vs-bonds ─────────────── */
	"bitcoin-vs-bonds|point_1_summary_1":
		"بانڈز صرف اسمی طور پر 'خطرے سے پاک' ہیں — مہنگائی، شرح سود کی تبدیلیاں، اور ڈیفالٹ کا خطرہ سب اصل منافع کھا جاتے ہیں۔",
	"bitcoin-vs-bonds|point_1_summary_2":
		"Bitcoin میں شفاف اتار چڑھاؤ ہے لیکن کوئی چھپا کاؤنٹر پارٹی خطرہ نہیں۔",
	"bitcoin-vs-bonds|point_2_summary_1": "جب",
	"bitcoin-vs-bonds|point_2_summary_2": "مہنگائی",
	"bitcoin-vs-bonds|point_2_summary_3":
		"بانڈ کے منافع سے زیادہ ہو جائے، تو بانڈ رکھنے والے ہر سال اصل خرید کی طاقت کھوتے ہیں۔ Bitcoin کی 21 ملین کی حد کو مہنگائی سے ختم نہیں کیا جا سکتا۔",
	"bitcoin-vs-bonds|point_3_summary_1":
		"بحرانوں میں بانڈ کی منڈیاں منجمد ہو سکتی ہیں — Silicon Valley Bank جزوی طور پر اس لیے ٹوٹا کیونکہ اس کے پاس قیمت گرنے والے بانڈز پھنسے ہوئے تھے۔ دیکھیں کیسے",
	"bitcoin-vs-bonds|point_3_summary_2": "بینک رنز",
	"bitcoin-vs-bonds|point_3_summary_3":
		"ہوتے ہیں اور Bitcoin ان سے کیوں بچتا ہے۔ Bitcoin دنیا بھر میں 24/7 ٹریڈ ہوتا ہے بغیر کسی سیالت کے بحران کے۔",
	"bitcoin-vs-bonds|point_4_summary_1":
		"خزانہ کی نیلامیاں ناکام ہو سکتی ہیں جب کافی خریدار نہ ہوں — دیکھیں",
	"bitcoin-vs-bonds|point_4_summary_2": "2022 کی کمزور نیلامی۔",
	"bitcoin-vs-bonds|point_4_summary_3":
		"Bitcoin کی قیمت کھلی منڈیوں میں مسلسل دریافت ہوتی ہے بغیر کسی مرکزی نیلامی کے جو ناکام ہو سکے۔",
	"bitcoin-vs-bonds|point_5_summary_1":
		"بانڈ کے منافع خرید کے وقت طے ہو جاتے ہیں۔ چاہے معیشت تیزی سے بڑھے یا کرنسی ٹوٹ جائے، آپ کا منافع وہی رہتا ہے۔",
	"bitcoin-vs-bonds|point_5_summary_2":
		"Bitcoin میں قبولیت بڑھنے اور طلب کا مقرر سپلائی سے سامنا ہونے کے ساتھ نمایاں قدر بڑھنے کی گنجائش ہے۔",
	"bitcoin-vs-bonds|point_6_summary_1":
		"زیادہ تر بانڈز بینکوں یا بروکرز کے ذریعے رکھے جاتے ہیں، جو کاؤنٹر پارٹی خطرہ بڑھاتا ہے۔ Bitcoin خود حفاظت میں رکھا جا سکتا ہے ایک",
	"bitcoin-vs-bonds|point_6_summary_2": "والٹ",
	"bitcoin-vs-bonds|point_7_summary_1":
		"بانڈز مکمل طور پر حکومتوں کی واپسی پر منحصر ہیں۔ اگر حکومت ڈیفالٹ کرے یا اپنے قرض کو مہنگائی سے ختم کرے، تو بانڈ رکھنے والوں کو نقصان ہوتا ہے۔",
	"bitcoin-vs-bonds|point_7_summary_2":
		"Bitcoin کسی بھی حکومت یا سیاسی اختیار سے آزاد چلتا ہے۔",
	"bitcoin-vs-bonds|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">بانڈز</span> کے درمیان فرق",
	"bitcoin-vs-bonds|point_6_summary_3":
		" — اس خطرے کو مکمل طور پر ختم کرتے ہوئے۔",

	/* ─────────────── bitcoin-vs-cash ─────────────── */
	"bitcoin-vs-cash|point_1_summary_1":
		"Bitcoin انٹرنیٹ پر کہیں بھی منٹوں میں منتقل ہوتا ہے۔ نقد کے لیے جسمانی موجودگی یا قابلِ اعتماد کوریئرز کی ضرورت ہوتی ہے — آپ $20 کا نوٹ ای میل نہیں کر سکتے۔",
	"bitcoin-vs-cash|point_2_summary_1":
		"Bitcoin ہر جگہ ایک ہی طرح کام کرتا ہے۔ نقد جغرافیہ، شرح مبادلہ، اور مقامی قبولیت سے محدود ہے۔",
	"bitcoin-vs-cash|point_3_summary_1":
		"حکومتیں رات بھر میں نقد کو منسوخ کر سکتی ہیں — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">بھارت</a> نے 2016 میں ایسا کیا۔ غیر منسوخی کے بغیر بھی، نقد قدر کھوتا ہے",
	"bitcoin-vs-cash|point_3_summary_2": "مہنگائی۔",
	"bitcoin-vs-cash|point_3_summary_3":
		"Bitcoin کسی حکومت یا اختیار سے منسوخ نہیں ہو سکتا۔",
	"bitcoin-vs-cash|point_4_summary_1":
		"نقد جعلی بنایا جا سکتا ہے، کبھی کبھار قابلِ یقین طور پر۔ Bitcoin کرپٹوگرافی استعمال کرتا ہے جو جعلسازی کو ریاضیاتی طور پر ناممکن بناتی ہے۔",
	"bitcoin-vs-cash|point_5_summary_1":
		"Bitcoin کا کوئی مرکزی اختیار نہیں۔ نقد حکومتیں جاری کرتی ہیں جو زیادہ چھاپ سکتی ہیں، ڈیزائن بدل سکتی ہیں، یا اپنی مرضی سے نوٹ منسوخ کر سکتی ہیں۔",
	"bitcoin-vs-cash|point_6_summary_1":
		"نقد چوری، آگ، گم ہونے، اور ضبطی کے لیے کمزور ہے۔ Bitcoin محفوظ طریقے سے",
	"bitcoin-vs-cash|point_6_summary_2": "خود حفاظت میں رکھا جا سکتا ہے",
	"bitcoin-vs-cash|point_6_summary_3":
		"کسی فون یا ہارڈویئر ڈیوائس پر۔",
	"bitcoin-vs-cash|point_7_summary_1":
		"Bitcoin 100 ملین satoshis میں تقسیم ہوتا ہے، جس سے کسی بھی سائز کی مائیکرو پیمنٹ ممکن ہے۔ نقد کی کم از کم اکائیاں ہوتی ہیں — آپ ایک پیسے کو تقسیم نہیں کر سکتے۔",
	"bitcoin-vs-cash|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">نقد</span> کے درمیان فرق",

	/* ─────────────── bitcoin-vs-cbdc ─────────────── */
	"bitcoin-vs-cbdc|point_10_summary_1":
		"Bitcoin اب تک کا سب سے محفوظ کمپیوٹنگ نیٹ ورک ہے اور کبھی ہیک نہیں ہوا۔ CBDCs ان بینکوں اور حکومتوں پر منحصر ہیں جو بے شمار بار ہیک ہو چکے ہیں۔",
	"bitcoin-vs-cbdc|point_1_summary_1":
		"کوئی آپ کو Bitcoin سے لین دین کرنے سے نہیں روک سکتا۔ CBDCs اس طرح ڈیزائن کیے گئے ہیں کہ حکومتیں اور مرکزی بینک ہر ادائیگی کو کنٹرول کر سکیں، جو آپ کی نجی زندگی اور آزادی کو محدود کرتا ہے۔",
	"bitcoin-vs-cbdc|point_2_summary_1":
		"Bitcoin کی میعاد کبھی ختم نہیں ہوتی اور کوئی ماہانہ فیس نہیں۔ CBDCs کو میعاد ختم ہونے کے لیے پروگرام کیا جا سکتا ہے، جو آپ کو مستقبل کے لیے بچت کرنے سے روکتا ہے۔",
	"bitcoin-vs-cbdc|point_3_summary_1":
		"Bitcoin کی سخت حد 21 ملین BTC ہے۔ CBDCs کی سپلائی پر کوئی حد نہیں، حکومتوں کو اپنی مرضی سے پیسہ بڑھانے کی اجازت دیتا ہے — جو سبب بنتا ہے",
	"bitcoin-vs-cbdc|point_3_summary_2": "مہنگائی۔",
	"bitcoin-vs-cbdc|point_4_summary_1":
		"Bitcoin کے پتے آپ کی اصل شناخت سے منسلک نہیں۔ CBDCs براہِ راست حکومتی ID سے منسلک ہوتے ہیں، جو بڑے پیمانے پر مالی نگرانی اور سنسرشپ کو ممکن بناتا ہے۔",
	"bitcoin-vs-cbdc|point_5_summary_1":
		"Bitcoin کے قواعد دسیوں ہزار آزاد نوڈز سے توثیق پاتے ہیں۔ CBDCs حکومتی اور مرکزی بینکوں کے ہاتھ میں مرکزی ہیں، جنہیں نیٹ ورک پر مکمل کنٹرول حاصل ہے۔",
	"bitcoin-vs-cbdc|point_6_summary_1":
		"کوئی بھی نیٹ ورک کے قواعد کی توثیق کے لیے Bitcoin نوڈ چلا سکتا ہے۔ CBDCs صارفین کو نوڈز چلانے کی اجازت نہیں دیتے — آپ کو مرکزی اختیار پر بھروسہ کرنا پڑتا ہے۔",
	"bitcoin-vs-cbdc|point_7_summary_1":
		"خود حفاظت کیا گیا Bitcoin کسی سے بھی منجمد نہیں کیا جا سکتا۔ CBDCs اس طرح ڈیزائن کیے گئے ہیں کہ حکومتیں اور مرکزی بینک فوراً اکاؤنٹس منجمد کر سکیں۔",
	"bitcoin-vs-cbdc|point_8_summary_1":
		"Bitcoin آپ کو اپنے پیسے پر مکمل کنٹرول دیتا ہے جب آپ اسے خود حفاظت میں رکھتے ہیں ایک",
	"bitcoin-vs-cbdc|point_8_summary_2": "والٹ کے ساتھ۔",
	"bitcoin-vs-cbdc|point_8_summary_3":
		"CBDCs آپ کا پیسہ رکھنے کے لیے بینکوں یا حکومتوں جیسے امانت داروں پر بھروسے کا تقاضا کرتے ہیں۔",
	"bitcoin-vs-cbdc|point_9_summary_1":
		"Bitcoin کی مالی پالیسی کوڈ میں طے شدہ ہے اور تبدیل نہیں کی جا سکتی۔ CBDCs کو سیاستدان اپنی مرضی سے دوبارہ پروگرام کر سکتے ہیں، سبب بنتے ہوئے",
	"bitcoin-vs-cbdc|point_9_summary_2": "مہنگائی",
	"bitcoin-vs-cbdc|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">CBDCs</span> کے درمیان فرق",
	"bitcoin-vs-cbdc|point_9_summary_3":
		"جب بہت زیادہ پیسہ چھاپا جاتا ہے۔",

	/* ─────────────── bitcoin-vs-crypto ─────────────── */
	"bitcoin-vs-crypto|point_1_summary_1":
		"Bitcoin کا پروٹوکول 2009 سے بنیادی طور پر ایک جیسا ہے، قابلِ پیش بینی قواعد فراہم کرتا ہے۔ زیادہ تر کرپٹو پروجیکٹس مسلسل پروٹوکول، ٹوکن اقتصادیات، یا نئے ورژنز میں فورک تبدیل کرتے رہتے ہیں۔",
	"bitcoin-vs-crypto|point_2_summary_1":
		"Bitcoin دنیا بھر میں دسیوں ہزار آزاد نوڈز پر چلتا ہے۔ زیادہ تر کرپٹو پروجیکٹس فاؤنڈیشنز، کمپنیوں، یا چھوٹی ڈیولپر ٹیموں کے کنٹرول میں ہوتے ہیں جو یکطرفہ تبدیلیاں کر سکتی ہیں۔",
	"bitcoin-vs-crypto|point_3_summary_1":
		"Bitcoin کی سخت حد 21 ملین سکوں کی ہے — سب سے نایاب ڈیجیٹل اثاثہ۔ زیادہ تر کرپٹو پروجیکٹس کی سپلائی غیر محدود ہے یا اپنی مرضی سے نئے ٹوکن بنانے کے میکنزم ہیں، جو رکھنے والوں کو مدھم کرتے ہیں۔",
	"bitcoin-vs-crypto|point_4_summary_1":
		"Bitcoin کا ایک مقصد ہے: پیئر ٹو پیئر ڈیجیٹل پیسہ۔ کوئی بھی اسے سمجھ کر استعمال کر سکتا ہے۔ زیادہ تر کرپٹو میں پیچیدہ سمارٹ کنٹریکٹس یا DeFi شامل ہیں جنہیں محفوظ طریقے سے استعمال کرنے کے لیے تکنیکی مہارت چاہیے۔",
	"bitcoin-vs-crypto|point_5_summary_1":
		"Bitcoin کا Proof of Work مرکزی نیٹ ورک پر کسی کامیاب حملے کے بغیر 15 سال سے زیادہ سے چل رہا ہے۔ زیادہ تر کرپٹو پروجیکٹس تجرباتی اجماع استعمال کرتے ہیں جو جنگی آزمائش سے نہیں گزرے۔",
	"bitcoin-vs-crypto|point_6_summary_1":
		"Bitcoin ڈیجیٹل پیسہ ہے — قدر کا ذخیرہ اور تبادلے کا ذریعہ۔ زیادہ تر کرپٹو ٹوکن قیاس آرائی کے یوٹیلیٹی یا گورننس ٹوکن ہیں جن کی حقیقی دنیا کی قدر واضح نہیں۔",
	"bitcoin-vs-crypto|point_7_summary_1":
		"Bitcoin حملے میں مضبوط ہوتا ہے اور ہر بحران، پابندی، اور تنقید سے بچا ہے۔ زیادہ تر کرپٹو پروجیکٹس ضوابطی، تکنیکی، یا مارکیٹ کے دباؤ میں ٹوٹ جاتے ہیں۔",
	"bitcoin-vs-crypto|point_8_summary_1":
		"Bitcoin کا کوئی CEO نہیں، کوئی کمپنی نہیں، کوئی ایک ناکامی کا نقطہ نہیں۔ زیادہ تر کرپٹو پروجیکٹس VCs، مخصوص قیادت، یا کسی ایک کمپنی کی بقا پر منحصر ہیں۔",
	"bitcoin-vs-crypto|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">کرپٹو</span> کے درمیان فرق",

	/* ─────────────── bitcoin-vs-fine-art ─────────────── */
	"bitcoin-vs-fine-art|point_1_summary_1":
		"ہر bitcoin ایک جیسا اور قابلِ تبادلہ ہے۔ ہر فن پارہ منفرد ہے — مختلف تخلیق، تاریخ، حالت، اور پروینیئنس براہِ راست موازنے کو انتہائی مشکل بناتے ہیں۔",
	"bitcoin-vs-fine-art|point_2_summary_1":
		"Bitcoin 24/7 عالمی منڈی میں ٹریڈ ہوتا ہے جہاں کوئی بھی پہنچ سکتا ہے۔ فن لطیف کے لیے مخصوص نیلامی گھر، نجی ڈیلر، یا گیلریاں چاہیے ہوتی ہیں اور بیچنے میں مہینے لگ سکتے ہیں۔",
	"bitcoin-vs-fine-art|point_3_summary_1":
		"Bitcoin خریدنے یا بیچنے کی فیس 1% سے کم ہے، اکثر بہت کم۔ فن کی فروخت میں خریدار کے پریمیم، کمیشن، انشورنس، نقل و حمل، اور توثیق کی فیسوں میں 30-40% اخراجات لگتے ہیں۔",
	"bitcoin-vs-fine-art|point_4_summary_1":
		"Bitcoin 100 ملین satoshis میں تقسیم ہوتا ہے، جو اسے کسی بھی سائز کے لین دین کے لیے بہترین بناتا ہے۔ آپ کسی پینٹنگ کا حصہ یا مجسمے کا کونہ بغیر کاؤنٹر پارٹی خطرے کے نہیں رکھ سکتے۔",
	"bitcoin-vs-fine-art|point_5_summary_1":
		"Bitcoin کی ملکیت اور اصلیت کوئی بھی آن چین کرپٹوگرافک طریقے سے تصدیق کر سکتا ہے۔ فن کی توثیق مہنگی، سست، اور پھر بھی جعلسازوں کے ہاتھوں بے وقوف بنتی ہے — جو فن پارے کی قدر رات بھر میں ختم کر دیتی ہے۔",
	"bitcoin-vs-fine-art|point_6_summary_1":
		"Bitcoin، صحیح بیک اپ کے ساتھ، سیلاب، آگ، زلزلے، اور چوری سے بچ جاتا ہے۔ فن لطیف ہر قسم کی جسمانی تباہی کے لیے کمزور ہے، اور انشورنس شاذ و نادر ہی سب کا احاطہ کرتی ہے۔",
	"bitcoin-vs-fine-art|point_7_summary_1":
		"انٹرنیٹ کنکشن اور تھوڑا پیسہ رکھنے والا کوئی بھی Bitcoin خرید سکتا ہے۔ فن لطیف کی سرمایہ کاری مؤثر طریقے سے امیر کلکٹرز تک محدود ہے جن کے پاس نیلامی تک رسائی اور خصوصی علم ہے۔",
	"bitcoin-vs-fine-art|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">فن لطیف</span> کے درمیان فرق",

	/* ─────────────── bitcoin-vs-gold ─────────────── */
	"bitcoin-vs-gold|point_1_summary_1":
		"Bitcoin کم فیسوں پر انٹرنیٹ پر فوری طور پر بھیجا جا سکتا ہے۔ ملکیت منتقل کرنے کے لیے سونا جسمانی طور پر بھیجنا پڑتا ہے۔",
	"bitcoin-vs-gold|point_2_summary_1":
		"Bitcoin ایک ڈیجیٹل اصلی اثاثہ ہے جسے آپ انٹرنیٹ پر منتقل کر سکتے ہیں۔ آن لائن سونا ایک ڈیجیٹل IOU ہے — آپ کے پاس صرف ایک امانت دار کا وعدہ ہے، نہ کہ خود دھات۔",
	"bitcoin-vs-gold|point_3_summary_1":
		"Bitcoin کی سخت حد 21 ملین BTC ہے۔ سونے کی سپلائی <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">سالانہ تقریباً 1.6%</a> بڑھتی ہے، آپ کا حصہ کم کرتی ہے — کاغذی کرنسی سے کم",
	"bitcoin-vs-gold|point_3_summary_2": "مہنگائی",
	"bitcoin-vs-gold|point_3_summary_3": "— لیکن پھر بھی مہنگائی۔",
	"bitcoin-vs-gold|point_4_summary_1":
		"جب سونے کی قیمتیں بڑھتی ہیں، زیادہ سونا کان کنا جاتا ہے، قیمت کو واپس نیچے دھکیلتا ہے۔ Bitcoin کی سپلائی غیر لچکدار ہے — قیمت چاہے کتنی بھی بڑھے، صرف 21 ملین ہی ہوں گے۔",
	"bitcoin-vs-gold|point_5_summary_1":
		"دسیوں ہزار آزاد نوڈز Bitcoin نیٹ ورک کی توثیق کرتے ہیں۔ زیادہ تر جسمانی سونا چند بڑے امانت دار کے ذخیروں میں رکھا جاتا ہے۔",
	"bitcoin-vs-gold|point_6_summary_1":
		"کوئی بھی فل نوڈ چلا کر اصل Bitcoin کی تصدیق کر سکتا ہے — یہ بس ایک ایپ ہے۔ جسمانی سونے کی تصدیق کے لیے اسے پگھلانا پڑتا ہے؛ اندر ٹنگسٹن ہو سکتا ہے۔",
	"bitcoin-vs-gold|point_7_summary_1":
		"Bitcoin 100 ملین satoshis میں تقسیم ہوتا ہے، جو اسے کسی بھی سائز کی خریداری کے لیے بہترین بناتا ہے۔ سونا چھوٹے لین دین کے لیے آسانی سے تقسیم نہیں ہو سکتا۔",
	"bitcoin-vs-gold|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">سونے</span> کے درمیان فرق",

	/* ─────────────── bitcoin-vs-real-estate ─────────────── */
	"bitcoin-vs-real-estate|point_1_summary_1":
		"Bitcoin دنیا میں کہیں بھی فوراً منتقل ہوتا ہے۔ جائیداد ایک جگہ پر طے شدہ ہے اور مقامی اقتصادی، سیاسی، اور قدرتی خطرات کے سامنے ہے۔",
	"bitcoin-vs-real-estate|point_2_summary_1":
		"Bitcoin 100 ملین satoshis میں تقسیم ہوتا ہے۔ جائیداد کا کچھ حصہ نہیں بیچا جا سکتا — آپ صرف کچن نہیں بیچ سکتے یا آدھا بیڈروم نہیں خرید سکتے۔",
	"bitcoin-vs-real-estate|point_3_summary_1":
		"Bitcoin ایک غیر مرکزی نیٹ ورک پر چلتا ہے جسے کوئی حکومت کنٹرول نہیں کر سکتی۔ جائیداد بھاری ضوابط کے تابع ہے — زوننگ، کرایہ کنٹرول، حکومتی ضبطی، اور قبضہ سب لاگو ہوتے ہیں۔",
	"bitcoin-vs-real-estate|point_4_summary_1":
		"Bitcoin کو دیکھ بھال کی ضرورت نہیں۔ جائیداد مرمت، تجدید کاری، انشورنس، پراپرٹی مینجمنٹ، اور کرایہ دار کے مسائل کا تقاضا کرتی ہے۔",
	"bitcoin-vs-real-estate|point_5_summary_1":
		"Bitcoin پر کوئی مسلسل ٹیکس نہیں — آپ صرف بیچتے وقت کیپٹل گین ٹیکس دیتے ہیں۔ جائیداد آمدنی سے قطع نظر سالانہ پراپرٹی ٹیکس واجب الادا ہوتا ہے۔",
	"bitcoin-vs-real-estate|point_6_summary_1":
		"Bitcoin، صحیح بیک اپ کے ساتھ، آگ، سیلاب، اور زلزلے سے بچ جاتا ہے۔ جائیداد ہر آفت کے لیے کمزور ہے، اور انشورنس شاذ و نادر ہی سب کا احاطہ کرتی ہے۔",
	"bitcoin-vs-real-estate|point_7_summary_1":
		"ہر bitcoin ایک جیسا اور قابلِ تبادلہ ہے۔ ہر جائیداد منفرد ہے، جس سے قیمت اور موازنہ مشکل ہو جاتا ہے۔",
	"bitcoin-vs-real-estate|point_8_summary_1":
		"Bitcoin انٹرنیٹ کی رسائی والے کسی بھی شخص سے دنیا بھر میں 24/7 ٹریڈ ہوتا ہے۔ جائیداد کی فروخت مقامی خریداروں تک محدود ہے اور بند کرنے میں مہینوں کی کاغذی کارروائی لگ سکتی ہے۔",
	"bitcoin-vs-real-estate|point_9_summary_1":
		"Bitcoin کسی کے لیے بھی براہِ راست انفرادی ملکیت کو ممکن بناتا ہے۔ اپنی بنیادی رہائش سے زیادہ کو بطور سرمایہ کاری خریدنا رہائشی قیمتیں بڑھاتا ہے، استطاعت کم کرتا ہے اور رہائش کے بحران کو بھڑکاتا ہے۔",
	"bitcoin-vs-real-estate|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">جائیداد</span> کے درمیان فرق",

	/* ─────────────── bitcoin-vs-stocks ─────────────── */
	"bitcoin-vs-stocks|point_1_summary_1":
		"Bitcoin ایک براہِ راست اثاثہ ہے جس کی آپ مکمل ملکیت رکھتے ہیں۔ اسٹاکس کسی کمپنی میں حصص ہیں — ان کی قدر انتظامیہ، کارکردگی، اور ان فیصلوں پر منحصر ہے جنہیں آپ کنٹرول نہیں کر سکتے۔",
	"bitcoin-vs-stocks|point_2_summary_1":
		"Bitcoin کی سخت حد 21 ملین BTC ہے۔ کمپنیاں کسی بھی وقت نئے حصص جاری کر سکتی ہیں، موجودہ حصہ داروں کو مدھم کرتی ہیں — اسی طرح جیسے کاغذی کرنسی",
	"bitcoin-vs-stocks|point_2_summary_2": "مہنگائی",
	"bitcoin-vs-stocks|point_2_summary_3":
		" نقد کو مدھم کرتی ہے۔ Bitcoin کے ساتھ، آپ کا حصہ کبھی کم نہیں ہوتا۔",
	"bitcoin-vs-stocks|point_3_summary_1":
		"Bitcoin کا کوئی CEO نہیں اور کوئی ایک ناکامی کا نقطہ نہیں۔ اسٹاکس قیادت پر بھاری انحصار کرتے ہیں — ایک برا فیصلہ یا روانگی قیمت گرا سکتی ہے۔",
	"bitcoin-vs-stocks|point_4_summary_1":
		"Bitcoin کی قیمت کھلی عالمی منڈیوں سے آتی ہے۔ اسٹاک کی قدر تشخیص P/E تناسب جیسے میٹرکس پر انحصار کرتی ہے جو زیادہ قیمت والے حصص کو چھپا سکتے ہیں۔",
	"bitcoin-vs-stocks|point_5_summary_1":
		"Bitcoin دنیا بھر میں 24/7 ٹریڈ ہوتا ہے۔ اسٹاک کی منڈیاں صرف ہفتے کے دنوں میں کاروباری اوقات کے دوران کھلی ہوتی ہیں۔",
	"bitcoin-vs-stocks|point_6_summary_1": "آپ لے سکتے ہیں",
	"bitcoin-vs-stocks|point_6_summary_2": "خود حفاظت",
	"bitcoin-vs-stocks|point_6_summary_3":
		"ایک سادہ ایپ کے ساتھ Bitcoin کی — کسی بروکر کی ضرورت نہیں۔ اسٹاکس بروکرجز کے ساتھ ہوتے ہیں، آپ کو کاؤنٹر پارٹی خطرے میں ڈالتے ہیں اگر وہ ناکام ہوں۔",
	"bitcoin-vs-stocks|point_7_summary_1":
		"Bitcoin کی مقرر سپلائی اسے ایک قابلِ اعتماد مہنگائی کا تحفظ بناتی ہے۔ کچھ اسٹاکس مہنگائی کو شکست دیتے ہیں، دوسرے نہیں — کوئی ضمانت نہیں۔",
	"bitcoin-vs-stocks|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">اسٹاکس</span> کے درمیان فرق",

	/* ─────────────── bitcoin-vs-visa ─────────────── */
	"bitcoin-vs-visa|point_1_summary_1":
		"Bitcoin ایک کھلا نیٹ ورک ہے جس میں کوئی بھی بغیر اجازت شامل ہو کر استعمال کر سکتا ہے۔ Visa مالی اداروں کے کنٹرول میں ایک بند نظام ہے جو رسائی سے انکار کر سکتا ہے — خاص طور پر بینک سے محروم اور کم بینکنگ والے لوگوں کو۔",
	"bitcoin-vs-visa|point_2_summary_1":
		"Bitcoin کے لین دین میں کوئی تاجر فیس نہیں۔ Visa عام طور پر تاجروں سے فی لین دین تقریباً 3% لیتا ہے — آپ کا کاروبار",
	"bitcoin-vs-visa|point_2_summary_2": "Bitcoin ادائیگیاں",
	"bitcoin-vs-visa|point_2_summary_3": "قبول کر کے پیسے بچا سکتا ہے۔",
	"bitcoin-vs-visa|point_3_summary_1":
		"ہر Bitcoin لین دین ایک عوامی، قابلِ آڈٹ بلاکچین پر ہے۔ Visa ایک بند، ملکیتی نظام چلاتا ہے جہاں گاہک خود کچھ بھی تصدیق نہیں کر سکتے۔",
	"bitcoin-vs-visa|point_4_summary_1":
		"Bitcoin کسی مرکزی اختیار سے منجمد نہیں کیا جا سکتا۔ Visa کسی بھی وقت اکاؤنٹس منجمد کر سکتا ہے، لین دین روک سکتا ہے، یا خدمت سے انکار کر سکتا ہے۔",
	"bitcoin-vs-visa|point_5_summary_1":
		"Bitcoin آخری تصفیے والا ہے — آپ صرف وہ خرچ کر سکتے ہیں جو آپ کے پاس ہے۔ کریڈٹ کارڈ سود کی شرحوں پر قرض پیدا کرتے ہیں جو اکثر سالانہ 25% سے زیادہ ہوتی ہیں۔",
	"bitcoin-vs-visa|point_6_summary_1": "Bitcoin آپ کو لینے دیتا ہے",
	"bitcoin-vs-visa|point_6_summary_2": "خود حفاظت",
	"bitcoin-vs-visa|point_6_summary_3":
		"بغیر کسی بینک یا پیمنٹ پروسیسر کی ضرورت کے۔ کریڈٹ کارڈز کو ہمیشہ بیچ والوں کی ضرورت ہوتی ہے۔",
	"bitcoin-vs-visa|point_7_summary_1":
		"Bitcoin کاروباری اوقات کے بغیر دنیا بھر میں 24/7 کام کرتا ہے۔ Visa کے کاروباری اوقات، دیکھ بھال کی ونڈوز، اور جغرافیائی پابندیاں ہیں جو لین دین روک سکتی ہیں۔",
	"bitcoin-vs-visa|hero_title":
		"<span class=\"orange\">Bitcoin</span> اور <span class=\"asset\">Visa</span> کے درمیان فرق",
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
		`translate-rest-part2 (ur): filled ${filled}, already-done ${skipped}`,
	);
}

main();
