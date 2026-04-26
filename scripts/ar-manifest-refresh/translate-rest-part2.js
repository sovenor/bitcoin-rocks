#!/usr/bin/env node
/**
 * Arabic manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator,
 *   flyers, get-involved, index, lightning, nostr/index, sticker-files/*,
 *   sticker-language-success, sticker-success, stickers, wallets.
 *
 * Keys use "<namespace>::<key>" format.
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
	"ar.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "سعر البيتكوين",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"ابحث عن السعر الحالي أو التاريخي للبيتكوين بالدولار",
	"business/accounting::accounting_card_pacioli_label": "محاسبو البيتكوين",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_label": "استيراد Excel",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"اسحب أسعار البيتكوين إلى Excel تلقائياً",
	"business/accounting::accounting_card_wallets_label": "محافظ هجينة",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"اطّلع على محافظ الأعمال الموصى بها",
	"business/accounting::accounting_description":
		"دليل بلغة بسيطة لقبول البيتكوين في دفاترك — المحافظ الهجينة وأساس التكلفة وأرباح رأس المال ومتى تتصل بمحاسب.",
	"business/accounting::accounting_disclaimer":
		"هذا الدليل لأغراض معلوماتية فقط ولا يُعتبر نصيحة ضريبية. للحصول على نصيحة ضريبية خاصة بحالتك، يرجى استشارة محاسب مؤهل.",
	"business/accounting::accounting_disclaimer_label": "يرجى الملاحظة",
	"business/accounting::accounting_example_feb_1": "1 فبراير",
	"business/accounting::accounting_example_gain_badge": "ربح رأس مال",
	"business/accounting::accounting_example_gain_explain":
		"تسجّل ربح رأس مال قدره 10 دولارات.",
	"business/accounting::accounting_example_gain_result": "+10 دولارات",
	"business/accounting::accounting_example_jan_1": "1 يناير",
	"business/accounting::accounting_example_loss_badge": "خسارة رأس مال",
	"business/accounting::accounting_example_loss_explain":
		"تسجّل خسارة رأس مال قدرها 10 دولارات.",
	"business/accounting::accounting_example_loss_result": "−10 دولارات",
	"business/accounting::accounting_example_received_label": "استُلم",
	"business/accounting::accounting_example_sold_label": "بِيع أو أُنفق",
	"business/accounting::accounting_hero_subtitle":
		"قبول البيتكوين في عملك لا يجب أن يعقّد محاسبتك. إليك النسخة المختصرة — بالإضافة إلى الأدوات والمحترفين لجعل الأمر بلا عناء.",
	"business/accounting::accounting_intro_c1":
		"إذا كنت تقبل بالفعل النقد أو البطاقات، فإضافة البيتكوين إلى دفاتر عملك أبسط مما يبدو. لديك مساران: التحويل التلقائي لكل دفعة بيتكوين إلى دولارات لحظة وصولها (لا حاجة لمحاسبة جديدة)، أو الاحتفاظ ببعضها كبيتكوين (بضعة أرقام إضافية للتتبع).",
	"business/accounting::accounting_intro_c2":
		"يرشدك هذا الدليل خلال كليهما — لتتمكن من اختيار ما يناسب عملك والبدء في قبول البيتكوين بثقة.",
	"business/accounting::accounting_s1": "المسار السهل: التحويل التلقائي إلى الدولار",
	"business/accounting::accounting_s1_c1":
		"أبسط طريقة لقبول البيتكوين هي باستخدام محفظة هجينة تبيع تلقائياً 100% من البيتكوين الذي تستلمه مقابل الدولار (أو عملتك المحلية) لحظة وصول الدفعة.",
	"business/accounting::accounting_s1_c2":
		"مع هذا الإعداد، تبدو دفاترك تماماً كما هي اليوم — الرقم النهائي بالدولار في كل مرة. لا أساس تكلفة، لا أرباح رأس مال، لا جداول بيانات جديدة.",
	"business/accounting::accounting_s2":
		"إذا احتفظت ببعض البيتكوين: تتبع أساس التكلفة",
	"business/accounting::accounting_s2_c1":
		"تختار بعض الأعمال الاحتفاظ بجزء من البيتكوين الذي تستلمه بدلاً من تحويله تلقائياً بالكامل. إذا كان ذلك ينطبق عليك، فالخطوة الإضافية الرئيسية هي تتبع أساس التكلفة — القيمة بالدولار لكل دفعة بيتكوين في يوم استلامها.",
	"business/accounting::accounting_s2_c2":
		"حتى لو كنت تفكر في عملك بالكامل بالبيتكوين، لا تزال معظم السلطات الضريبية تريد الإبلاغ بالقيمة بالدولار. الخبر السار: إنهما مجرد رقمين لكل معاملة — كمية البيتكوين المستلمة وقيمتها بالدولار في ذلك اليوم.",
	"business/accounting::accounting_s2_c3":
		"استخدم الأدوات أدناه لأتمتة البحث حتى لا تضطر إلى التحقق من الأسعار كل يوم.",
	"business/accounting::accounting_s3":
		"إنفاق أو بيع البيتكوين الذي احتفظت به",
	"business/accounting::accounting_s3_c1":
		"إذا كنت تحوّل كل دفعة تلقائياً إلى دولارات، فتخطَّ هذا القسم — لا ينطبق عليك.",
	"business/accounting::accounting_s3_c2":
		"إذا احتفظت ببعض البيتكوين وقررت لاحقاً إنفاقه أو بيعه، أضف سعر البيع إلى نفس جدول أساس التكلفة. الفرق بين قيمة البيتكوين عند استلامك وقيمته عند إنفاقه أو بيعه هو ربح أو خسارة رأس مال.",
	"business/accounting::accounting_s3_c3": "مثالان سريعان:",
	"business/accounting::accounting_s3_c6":
		"هذا كل شيء. الرياضيات الأساسية مماثلة لكيفية محاسبة أي أصل آخر يرتفع أو ينخفض في القيمة.",
	"business/accounting::accounting_s4":
		"تحتاج إلى محترف يتكلم البيتكوين؟",
	"business/accounting::accounting_s4_c1":
		"إذا كنت تفضل تسليم هذا الأمر — أو كانت محاسبة البيتكوين الخاصة بك أكثر تعقيداً مما تستطيع محفظة هجينة التعامل معه — فإننا نوصي بشدة بخدمات Satoshi Pacioli للمحاسبة، وهي شركة متخصصة في محاسبة البيتكوين للأعمال.",
	"business/accounting::bitcoin_business_accounting_guide":
		"محاسبة البيتكوين لعملك",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — سعر البيتكوين الحالي والتاريخي بالدولار",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — محاسبة البيتكوين للأعمال",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — استيراد أسعار العملات المشفرة إلى Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"الإجابات المختصرة على الأسئلة التي يطرحها التجار كثيراً قبل البدء في قبول البيتكوين — الرسوم والتسوية والمحافظ واسترداد المبالغ المدفوعة والتكلفة والمزيد.",
	"business/faq::faq_intro_c1":
		"انقر على أي سؤال أدناه لتوسيع الإجابة. عندما تكون مستعداً لبدء قبول البيتكوين، ستوجهك موارد الأعمال في أسفل الصفحة عبر كل خطوة.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "المحاسبة",
	"business/index::biz_label_faq": "الأسئلة الشائعة",
	"business/index::biz_label_maps": "خرائط التجار",
	"business/index::biz_label_rewards": "المكافآت",
	"business/index::biz_label_stickers": "الملصقات",
	"business/index::biz_label_wallets": "المحافظ",
	"business/index::biz_meta_description":
		"اقبل البيتكوين في عملك لرسوم أقل وتسوية فورية وعدم استرداد المبالغ المدفوعة ومزيد من العملاء.",
	"business/index::business_hero_subtitle":
		"اقبل المدفوعات برسوم أقل، واحصل على أموالك فوراً، وصل إلى ملايين العملاء الجدد — بدون عقود وبدون تكاليف مخفية.",
	"business/index::business_intro_c1":
		"البيتكوين يمنح عملك طريقة أسرع وأرخص وأكثر خصوصية للحصول على أموالك. لا وسطاء. لا استرداد للمبالغ المدفوعة. لا عقود. فقط أموال تُسوى في ثوانٍ، مباشرة من عملائك إليك.",
	"business/index::business_intro_c2":
		"أدناه النسخة المختصرة لماذا البيتكوين جيد للأعمال — وأسفل ذلك كل مورد تحتاجه لبدء قبوله اليوم.",
	"business/index::business_resources_heading":
		"كل ما تحتاجه لقبول البيتكوين",
	"business/index::business_resources_intro":
		"اعمل على هذه الموارد بإيقاعك الخاص. كل واحد هو دليل عملي قصير.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "أخبرنا عن عملك",
	"business/maps::biz_maps_form_intro":
		"نحتاج فقط بعض التفاصيل لإدراجك. يتم الاحتفاظ ببيانات العنوان فقط لفترة كافية لتقديم عملك إلى الخرائط.",
	"business/maps::biz_maps_hero_subtitle":
		"أدرج عملك مجاناً على BTC Map — الدليل العالمي المفتوح للتجار القابلين للبيتكوين — حتى يتمكن البيتكوينيون القريبون من العثور عليك وإنفاق البيتكوين في عملك.",
	"business/maps::biz_maps_hero_title":
		"أدرج عملك على خرائط تجار البيتكوين",
	"business/maps::biz_maps_intro_c1":
		"البيتكوينيون يبحثون بنشاط عن أماكن لإنفاق أموالهم. وضع عملك على الخريطة يضعك أمام كل مستخدم بيتكوين يبحث عن مكان للأكل أو التسوق أو الإقامة قريباً — بدون أي تكلفة عليك.",
	"business/maps::biz_maps_intro_c2":
		"فقط املأ النموذج القصير أدناه وسنقدم عملك إلى BTC Map وخرائط تجار البيتكوين الأخرى نيابة عنك.",
	"business/maps::biz_maps_meta_description":
		"أدرج عملك مجاناً على BTC Map وخرائط تجار البيتكوين الأخرى حتى يتمكن البيتكوينيون القريبون من العثور عليك.",
	"business/maps::biz_maps_placeholder_address": "عنوان الشارع",
	"business/maps::biz_maps_placeholder_category":
		"الفئة (مثل: مطعم، مقهى، فندق)",
	"business/maps::biz_maps_placeholder_city": "المدينة",
	"business/maps::biz_maps_placeholder_country": "البلد",
	"business/maps::biz_maps_placeholder_name": "اسم العمل",
	"business/maps::biz_maps_placeholder_region": "الولاية / المقاطعة / المنطقة",
	"business/maps::biz_maps_placeholder_website": "الموقع الإلكتروني (اختياري)",
	"business/maps::biz_maps_view_map_cta": "اعرض BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "اعرض BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"شكراً لتقديم عملك. سندرجك على خرائط تجار البيتكوين قريباً.",
	"business/maps-success::biz_maps_success_hero_title":
		"تم استلام الطلب 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"سيتم إدراج عملك على BTC Map وأدلة تجار البيتكوين الأخرى خلال أسبوع إلى أسبوعين. نراجع كل طلب يدوياً للحفاظ على دقة الخرائط.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"بمجرد أن يصبح إدراجك مباشراً، يمكن للبيتكوينيين القريبين العثور على عملك والمجيء لإنفاق البيتكوين هناك.",
	"business/maps-success::biz_maps_success_timeline_header": "ماذا يحدث بعد ذلك",
	"business/maps-success::biz_maps_success_view_c1":
		"بينما تنتظر، ألقِ نظرة على BTC Map لترى الشبكة المتنامية من الأعمال التي تقبل البيتكوين حول العالم.",
	"business/maps-success::biz_maps_success_view_header": "شاهد أين ستظهر",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"اطبع ملصقاتك الخاصة \"البيتكوين مقبول هنا\" بالإنجليزية لتخبر عملاءك أنك تقبل البيتكوين.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"نزّل ملفات ملصقات \"البيتكوين مقبول هنا\" بالإنجليزية",
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"نزّل ملفات ملصقات باللغة الإنجليزية لطباعة ملصقاتك الخاصة \"البيتكوين مقبول هنا\".",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"شكراً لطلب ملفات ملصقات \"البيتكوين مقبول هنا\" بلغتك.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"تم استلام الطلب 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"سننشئ وننشر ملفات ملصقاتك خلال 3 إلى 4 أسابيع. بمجرد أن تكون جاهزة، ستتمكن من تنزيلها وطباعتها مجاناً من صفحة ملفات الملصقات.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"تُصدر ملفات الملصقات على دفعات، لذا قد يستغرق الأمر بضعة أسابيع لتفعيل لغتك. شكراً على صبرك!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"ماذا يحدث بعد ذلك",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"اطلب بالجملة",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"اطلب عبوة مجانية أخرى",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"ستستلم ملصقاتك المجانية \"البيتكوين مقبول هنا\" خلال 2 إلى 4 أسابيع، في مظروف أبيض عادي مع 3 ملصقات بداخله.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"ملصقاتك في الطريق 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"إذا لم تكن 3 ملصقات كافية لعملك، فلا تتردد في طلب عبوة مجانية أخرى — أو اطلب بالجملة من نفس الطابعة التي نستخدمها.",
	"business/sticker-success::biz_sticker_success_more_header":
		"بحاجة إلى مزيد من الملصقات؟",
	"business/sticker-success::biz_sticker_success_tip_1":
		"على بابك الأمامي أو نافذتك حتى يراها العملاء قبل الدخول",
	"business/sticker-success::biz_sticker_success_tip_2":
		"بالقرب من الصندوق أو نقطة البيع أو منطقة الدفع",
	"business/sticker-success::biz_sticker_success_tip_3":
		"على القوائم أو قوائم الأسعار أو وعاء الإكراميات",
	"business/sticker-success::biz_sticker_success_tip_4":
		"لا تلصقها في أي مكان لا تملكه أو ليس لديك إذن بوضعها فيه",
	"business/sticker-success::biz_sticker_success_tips_header":
		"أماكن جيدة لوضع ملصقاتك",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"أخبر عملاءك أنك تقبل البيتكوين. اطلب عبوة مجانية من ملصقات \"البيتكوين مقبول هنا\" لوضعها في عملك.",
	"business/stickers::biz_stickers_hero_title":
		"ملصقات \"البيتكوين مقبول هنا\" مجاناً",
	"business/stickers::biz_stickers_intro_c1":
		"قبول البيتكوين هو نصف المهمة فقط — يحتاج عملاؤك أيضاً إلى معرفة أنك تفعل ذلك. هذه الملصقات الصغيرة \"البيتكوين مقبول هنا\" مصممة للصق على بابك الأمامي أو الصندوق أو القائمة أو أي مكان آخر سيراه العملاء قبل الدفع.",
	"business/stickers::biz_stickers_intro_c2":
		"سنرسل لك عبوة مجانية بالبريد في أي مكان في الولايات المتحدة أو كندا، أو يمكنك طباعة الخاصة بك في أي مكان في العالم.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 كندا — مجاناً بالبريد",
	"business/stickers::biz_stickers_option_print":
		"🌍 عالمياً — اطبع بنفسي",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 الولايات المتحدة — مجاناً بالبريد",
	"business/stickers::biz_stickers_placeholder_translation1":
		"ترجمة \"البيتكوين مقبول هنا\"",
	"business/stickers::biz_stickers_placeholder_translation2":
		"ترجمة \"امسح لتتعلم لماذا البيتكوين جيد للأعمال.\"",
	"business/stickers::biz_stickers_print_c1":
		"يمكنك طباعة ملصقات \"البيتكوين مقبول هنا\" الخاصة بك، بغض النظر عن مكان إقامتك. انقر على لغتك أدناه لتنزيل ملفات الملصقات وتعليمات الطباعة.",
	"business/stickers::biz_stickers_print_header":
		"اطبع ملفات الملصقات الخاصة بك",
	"business/stickers::biz_stickers_request_c1":
		"املأ النموذج أدناه لطلب ملفات ملصقات \"البيتكوين مقبول هنا\" بلغتك المحلية. سنخبرك بمجرد أن تكون جاهزة.",
	"business/stickers::biz_stickers_request_header":
		"لا ترى لغتك؟",
	"business/stickers::biz_stickers_step_description":
		"سنشحن عبوة مجانية إلى العناوين في الولايات المتحدة وكندا. في أي مكان آخر في العالم، يمكنك طباعة الخاصة بك.",
	"business/stickers::biz_stickers_step_header":
		"كيف تريد الحصول على ملصقاتك؟",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::biz_wallets_meta_description":
		"جميع محافظ البيتكوين قابلة للتشغيل البيني — اختر التي تناسب عملك. مجاني، تسوية فورية، لا استرداد للمبالغ المدفوعة.",
	"business/wallets::sources_breez_business":
		"Breez — محفظة Lightning للبيتكوين فقط",
	"business/wallets::sources_ibex":
		"IBEX — بنية تحتية لمدفوعات Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — معالج مدفوعات البيتكوين",
	"business/wallets::sources_square":
		"Square — اقبل مدفوعات البيتكوين",
	"business/wallets::sources_zaprite":
		"Zaprite — إصدار فواتير البيتكوين للأعمال",
	"business/wallets::wallets_hero_subtitle":
		"محافظ البيتكوين مجانية. اختر واحدة تناسب عملك — شخصياً أو عبر الإنترنت أو قائمة على الفواتير — وابدأ في قبول البيتكوين في دقائق.",
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::wallets_section_invoice": "محافظ للأعمال القائمة على الفواتير",
	"business/wallets::wallets_section_invoice_intro":
		"إذا كنت تصدر فواتير للعملاء (استشارات، عمل مستقل، خدمات B2B)، فاستخدم محفظة مبنية على الفواتير. يدفع عميلك فاتورة بيتكوين ببضع نقرات.",
	"business/wallets::wallets_section_multiple":
		"محافظ للأعمال التي لديها عدة موظفين",
	"business/wallets::wallets_section_multiple_intro":
		"إذا كان لديك فريق يأخذ المدفوعات في الصندوق، اختر محفظة تدعم تسجيل دخول متعدد الموظفين — لكل موظف PIN خاص به وتحتفظ بسجل تدقيق نظيف لمن أخذ أي دفعة.",
	"business/wallets::wallets_section_online": "محافظ للأعمال عبر الإنترنت",
	"business/wallets::wallets_section_online_intro":
		"تبيع على موقع ويب؟ تتصل هذه المحافظ بمتجرك الإلكتروني وتقبل البيتكوين من أي عميل، في أي مكان في العالم — بدون استرداد للمبالغ المدفوعة وبدون حساب تاجر مطلوب.",
	"business/wallets::wallets_section_sole":
		"محافظ للأعمال المملوكة فردياً",
	"business/wallets::wallets_section_sole_intro":
		"إذا كنت تدير متجراً أو مقهى أو استوديو أو خدمة بنفسك، فإن أياً من هذه المحافظ ستعمل. اختر بناءً على ما إذا كنت تريد الاحتفاظ بالمدفوعات بالبيتكوين أو تحويل جزء من كل دفعة تلقائياً إلى عملتك المحلية.",
	"business/wallets::wallets_strike_note":
		"Strike Business يتيح لك قبول مدفوعات البيتكوين وLightning بدون رسوم وتسوية فورية. يدعم المدفوعات الشخصية وعبر الإنترنت والقائمة على الفواتير مع تحويل تلقائي اختياري إلى عملتك المحلية.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"البيتكوين مقبول هنا",
	"business/why::why_biz_s1": "رسوم أقل، المزيد للعمل",
	"business/why::why_biz_s1_c1":
		"مدفوعات البيتكوين تتخطى البنوك وشركات بطاقات الائتمان التي تأخذ 2-3% من كل عملية بيع. يحتفظ العمل بالمزيد مما تدفعه — مما يعني غالباً أسعاراً وخدمة أفضل لك.",
	"business/why::why_biz_s2": "تسوية فورية، بدون استرداد للمبالغ المدفوعة",
	"business/why::why_biz_s2_c1":
		"تُسوى مدفوعات البيتكوين في ثوانٍ، مباشرة من محفظتك إلى العمل. لا انتظار لأيام حتى يفرج البنك عن الأموال، ولا نزاعات مكلفة لاسترداد المبالغ المدفوعة — حتى يتمكن العمل من التركيز على خدمة العملاء بدلاً من مكافحة الاحتيال.",
	"business/why::why_biz_s3": "مجاني للقبول، مفتوح للجميع",
	"business/why::why_biz_s3_c1":
		"لا توجد عقود أو رسوم شهرية أو تكاليف إعداد لعمل يقبل البيتكوين. وملايين مستخدمي البيتكوين حول العالم يبحثون بنشاط عن التجار الذين يقبلونه — مما يمنح هذا العمل تعرضاً مجانياً لعملاء جدد.",
	"business/why::why_business_cta_intro":
		"تدير عملاً وتريد البدء في قبول البيتكوين؟",
	"business/why::why_business_cta_link": "شاهد كيف يعمل ←",
	"business/why::why_for_business": "لماذا البيتكوين رائع لهذا العمل",
	"business/why::why_for_business_intro":
		"قبول البيتكوين يتيح للعمل الاحتفاظ بالمزيد من كل عملية بيع، والحصول على أموال فوراً بدون استرداد للمبالغ المدفوعة، والوصول إلى جمهور عالمي من مستخدمي البيتكوين — كل ذلك بدون عقود وبدون رسوم شهرية.",
	"business/why::why_good_for_you": "لماذا البيتكوين رائع لك أيضاً",
	"business/why::why_good_for_you_intro":
		"البيتكوين ليس مفيداً فقط في الصندوق — إنه شكل أفضل من المال يحمي مدخراتك وخصوصيتك وحريتك في التعامل. إليك نظرة عامة سريعة.",
	"business/why::why_hero_subtitle":
		"لقد مسحت للتو ملصق \"البيتكوين مقبول هنا\". إليك لماذا هذا خبر رائع — لهذا العمل، ولك.",
	"business/why::why_intro_c1":
		"العمل الذي أنت فيه يقبل البيتكوين — شبكة دفع حديثة ومفتوحة المصدر يمكن لأي شخص استخدامها، في أي مكان في العالم، دون أن تأخذ البنوك أو الوسطاء حصة.",
	"business/why::why_intro_c2":
		"أدناه النسخة المختصرة لماذا قبول البيتكوين جيد لهذا العمل، بالإضافة إلى لماذا استخدام البيتكوين جيد لك كعميل.",
	"business/why::why_learn_more_lowercase": "اعرف المزيد ←",
	"business/why::why_next_business_label": "اقبل البيتكوين",
	"business/why::why_next_business_title": "اقبل البيتكوين في عملك",
	"business/why::why_next_buy_label": "اشترِ البيتكوين",
	"business/why::why_next_buy_title": "اشترِ أول بيتكوين لك",
	"business/why::why_next_learn_label": "اعرف المزيد",
	"business/why::why_next_learn_title": "اعرف المزيد عن البيتكوين",
	"business/why::why_next_wallet_label": "احصل على محفظة",
	"business/why::why_next_wallet_title": "احصل على محفظة البيتكوين الخاصة بك",
	"business/why::why_s1_c1":
		"يحدث التضخم عندما يتم طباعة المزيد من المال أو إنشاؤه من العدم. هذا يجعل المال في جيبك يساوي أقل بمرور الوقت — ولهذا السبب تستمر الأسعار في الارتفاع عاماً بعد عام.",
	"business/why::why_s1_c2":
		"البيتكوين لديه عرض ثابت قدره 21 مليون عملة. لا يمكن لأي حكومة أو بنك أو شركة طباعة المزيد منه. مدخراتك بالبيتكوين تحتفظ بقيمتها بمرور الوقت بدلاً من فقدانها بهدوء.",
	"business/why::why_s2_c1":
		"انهارت عدة بنوك أمريكية في السنوات الأخيرة بسبب عمليات السحب الجماعية. عندما حاول عدد كبير جداً من العملاء السحب في وقت واحد، لم يكن لدى البنوك النقد لدفع الجميع.",
	"business/why::why_s2_c2":
		"بدلاً من مجرد الاحتفاظ بأموالك، تقرض البنوك وتستثمر معظمها. إذا ساءت تلك الاستثمارات — أو فقد المودعون الثقة — يمكن أن يفشل البنك، ويمكن تجميد ودائعك أو فقدانها.",
	"business/why::why_s2_c3":
		"مع البيتكوين، يمكنك الاحتفاظ بأموالك الخاصة مباشرة في محفظتك الخاصة. لا بنك. لا وسيط. لا سحب جماعي.",
	"business/why::why_s3_c1":
		"على عكس بطاقات الائتمان أو PayPal أو الحسابات المصرفية التقليدية، لا يتطلب البيتكوين إذن أي شخص لاستخدامه.",
	"business/why::why_s3_c2":
		"لا يمكن لأحد تجميد حسابك أو حظر دفعة أو قطعك عن الشبكة. إنه أول نظام مالي في التاريخ يمكنك استخدامه بحرية، دون خوف من الرقابة أو المصادرة.",
	"business/why::why_s4_c1":
		"غالباً ما يُساء فهم البيتكوين، لكنه يقوم بهدوء بالكثير من الخير في العالم.",
	"business/why::why_s4_c2":
		"لقد ساعد ناشطي حقوق الإنسان في النضال من أجل الحرية، وقلل من انبعاثات غاز الميثان العالمية من مكبات النفايات وحقول النفط، واستقر شبكات الكهرباء، وموّل السلع العامة مثل الحدائق الوطنية.",
	"business/why::why_whats_next_heading": "إلى أين بعد ذلك؟",
	"business/why::why_whats_next_intro":
		"إذا كان هذا هو أول مسح لملصق البيتكوين، فإليك أكثر الأماكن فائدة للذهاب من هنا.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_bitcoin_guide": "كيفية شراء البيتكوين",
	"buy::buy_header_subtitle":
		"دليل بسيط خطوة بخطوة لشراء أول بيتكوين لك.",
	"buy::buy_howto_name": "كيفية شراء البيتكوين",
	"buy::buy_meta_description":
		"تعلّم كيفية شراء البيتكوين بأمان من خلال دليلنا خطوة بخطوة. اختر بلدك وطريقة الدفع للعثور على أفضل خيارات شراء البيتكوين لك.",
	"buy::buy_step_1_eyebrow": "الخطوة 1",
	"buy::buy_step_1_header": "اختر بلدك",
	"buy::buy_step_2_eyebrow": "الخطوة 2",
	"buy::buy_step_2_header": "اختر طريقة الدفع",
	"buy::buy_step_3_eyebrow": "الخطوة 3",
	"buy::buy_step_3_header": "خيارات الشراء الخاصة بك",
	"buy::buy_step_4_eyebrow": "الخطوة 4",
	"buy::buy_step_4_header": "احفظ بيتكوينك بأمان",
	"buy::buy_storage_cta_label": "الخطوة التالية",
	"buy::sources_bisq":
		"Bisq — منصة تبادل بيتكوين لامركزية من نظير إلى نظير",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — دليل عالمي لأجهزة الصراف الآلي للبيتكوين",
	"buy::sources_kraken": "Kraken — منصة تبادل بيتكوين راسخة",
	"buy::sources_relai":
		"Relai — تطبيق سويسري للحفظ الذاتي للبيتكوين فقط",
	"buy::sources_river":
		"River — شراء وتعدين وحفظ البيتكوين فقط",
	"buy::sources_strike_lightning":
		"Strike — اشترِ البيتكوين مع دعم شبكة Lightning",
	"buy::sources_swan":
		"Swan Bitcoin — متوسط التكلفة بالدولار للبيتكوين فقط",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "إضافة لغة",
	"common::common_next_buy_bitcoin": "اشترِ البيتكوين",
	"common::common_next_buy_bitcoin_desc":
		"تعلّم كيفية شراء البيتكوين بأمان",
	"common::common_next_calculate": "احسب تضخمك",
	"common::common_next_calculate_desc":
		"شاهد كيف يؤثر التضخم على راتبك بمرور الوقت",
	"common::common_next_get_wallet": "احصل على محفظة",
	"common::common_next_get_wallet_desc":
		"احصل على أول محفظة بيتكوين — إنها مجانية",
	"common::common_next_keep_learning": "استمر في التعلم",
	"common::common_next_keep_learning_desc":
		"شاهد كيف يحسّن البيتكوين العالم",
	"common::common_site_tagline": "تعليم البيتكوين للجميع.",
	"common::common_source_bls_cpi":
		"مكتب إحصاءات العمل الأمريكي — مؤشر أسعار المستهلك (CPI)",
	"common::common_source_btc_map":
		"BTC Map — دليل عالمي للتجار القابلين للبيتكوين",
	"common::common_source_btcpayserver":
		"BTCPay Server — معالج دفع بيتكوين مجاني ومفتوح المصدر ومستضاف ذاتياً",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — عرض النقود (فهرس الفئة)",
	"common::common_source_oshi":
		"Oshi — منصة مكافآت البيتكوين للتجار",
	"common::common_source_strike_business":
		"Strike — مدفوعات البيتكوين وLightning للأعمال",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_group_bitcoin": "بيانات البيتكوين",
	"common::common_sources_group_cpi":
		"التضخم / مؤشر أسعار المستهلك",
	"common::common_sources_group_debt": "الدين الحكومي",
	"common::common_sources_group_money": "بيانات عرض النقود",
	"common::common_sources_group_stories": "أمثلة من العالم الحقيقي",
	"common::common_sources_treasury_auction":
		"James Lavish — \"هل يمكن أن يفشل مزاد خزانة؟\"",
	"common::common_sticker_files_mission_5": "اطلب عبوة",
	"common::common_sticker_files_mission_6": "من الملصقات الإنجليزية مجاناً.",
	"common::common_sticker_files_next_flyers_label": "منشورات",
	"common::common_sticker_files_next_flyers_title": "اطبع منشور بيتكوين",
	"common::common_sticker_files_next_languages_label": "ملفات الملصقات",
	"common::common_sticker_files_next_languages_title":
		"شاهد ملفات الملصقات بلغات أخرى",
	"common::common_sticker_files_print_these":
		"اطبع هذه بنقرة واحدة",
	"common::common_sticker_name_bdhi_black":
		"ملصق \"البيتكوين ليس لديه تضخم\" (أسود)",
	"common::common_sticker_name_bdhi_orange":
		"ملصق \"البيتكوين ليس لديه تضخم\" (برتقالي)",
	"common::common_sticker_name_caution":
		"ملصق بيتكوين \"تحذير! مكعب ثلج يذوب\"",
	"common::common_sticker_name_cure_inflation":
		"ملصق بيتكوين \"علاج التضخم\"",
	"common::common_sticker_name_danger":
		"ملصق بيتكوين \"خطر! تضخم في الأمام\"",
	"common::common_sticker_name_fix":
		"ملصق بيتكوين \"أصلح المال، أصلح العالم\"",
	"common::common_sticker_name_got_inflation":
		"ملصق بيتكوين \"هل لديك تضخم؟\"",
	"common::common_sticker_name_study": "ملصق \"ادرس البيتكوين\"",
	"common::common_sticker_name_warning":
		"ملصق بيتكوين \"تحذير! التضخم يسرق مدخراتك\"",
	"common::common_sticker_name_what_if":
		"ملصق بيتكوين \"ماذا لو لم يكن لديك تضخم؟\"",
	"common::common_sticker_tips_heading": "نصائح الملصقات",
	"common::common_sticker_tips_intro":
		"بمجرد طباعة ملصقاتك، ضعها في مكان يراه الناس! الأماكن الجيدة للملصقات هي:",
	"common::common_sticker_tips_list_1":
		"في الأماكن العامة حيث يراها الناس",
	"common::common_sticker_tips_list_2":
		"في أماكن لا يُرجح إزالتها بسرعة (الملصقات لا تسبب أي ضرر دائم)",
	"common::common_sticker_tips_list_3":
		"على الأسطح التي تلتصق بها بسهولة (المعدن، البلاستيك، الزجاج)",
	"common::common_sticker_tips_list_4":
		"ليس على الممتلكات الخاصة، ولا تغطي اللافتات أو أجهزة الصراف الآلي أو مضخات البنزين",
	"common::common_sticker_files_mission_6": "من الملصقات الإنجليزية مجاناً.",
	"common::common_sticker_files_mission_5": "اطلب عبوة",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_stickers_printer_prefix": "نحن نستخدم",
	"common::common_stickers_printer_suffix":
		"لكن يمكنك استخدام أي شركة ملصقات.",
	"common::common_whats_next": "ما التالي؟",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::cic_calculator_heading":
		"احسب فجوة التضخم الخاصة بك",
	"compound-inflation-calculator::cic_cta_label": "الخطوة التالية",
	"compound-inflation-calculator::cic_hero_subtitle":
		"شاهد كم يحتاج راتبك إلى الزيادة لمواكبة التضخم.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"استكشف المزيد من المواضيع",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"شاهد كيف يرتبط البيتكوين بالمال والحرية والطاقة والمزيد.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"تعلم كيف يعمل التضخم",
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — مؤشر أسعار المستهلك لجميع المستهلكين في المناطق الحضرية",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — عرض النقود M1",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_hero_subtitle":
		"منشورات بيتكوين مجانية وقابلة للطباعة. ضعها في الأماكن العامة لمساعدة المزيد من الناس على تعلم البيتكوين.",
	"flyers::flyers_hero_title": "اطبع وانشر منشورات البيتكوين",
	"flyers::flyers_intro_header":
		"كيفية طباعة ونشر منشورات البيتكوين هذه",
	"flyers::flyers_next_get_stickers": "انشر الكلمة",
	"flyers::flyers_next_get_stickers_desc":
		"اطلب عبوة مجانية من ملصقات البيتكوين",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"شارك وساعد في نشر البيتكوين",
	"get-involved::get_involved_card_business_label": "حقيبة الأعمال",
	"get-involved::get_involved_card_business_source":
		"المصدر: bitcoin.rocks ←",
	"get-involved::get_involved_card_business_title":
		"اطلب حقيبة أعمال بيتكوين مجانية",
	"get-involved::get_involved_card_flyers_label": "منشورات قابلة للطباعة",
	"get-involved::get_involved_card_flyers_source":
		"المصدر: bitcoin.rocks ←",
	"get-involved::get_involved_card_flyers_title":
		"نزّل واطبع منشور بيتكوين مجاني",
	"get-involved::get_involved_card_github_label": "مفتوح المصدر",
	"get-involved::get_involved_card_github_source": "المصدر: GitHub ←",
	"get-involved::get_involved_card_github_title":
		"ساهم في bitcoin.rocks على GitHub",
	"get-involved::get_involved_card_stickers_label": "ملصقات مجانية",
	"get-involved::get_involved_card_stickers_source":
		"المصدر: bitcoin.rocks ←",
	"get-involved::get_involved_card_stickers_title":
		"اطلب عبوة ملصقات بيتكوين مجانية تُرسل إلى بابك",
	"get-involved::get_involved_description":
		"مواردنا المجانية تسهّل نشر تبني البيتكوين. ملصقات ومنشورات وحقائب أعمال وقاعدة كود مفتوحة المصدر يمكن لأي شخص المساهمة فيها.",
	"get-involved::get_involved_flyers_content_1":
		"المنشورات هي واحدة من أسهل الطرق لتعريف البيتكوين لمجتمعك. نزّل منشور بيتكوين مجاني قابل للطباعة، واطبع أي عدد من النسخ تريده، وانشرها على لوحات المجتمع أو في المقاهي أو في اللقاءات أو في أي مكان آخر يتجمع فيه الناس.",
	"get-involved::get_involved_flyers_content_2":
		"كل منشور يتضمن عنواناً جذاباً ورمز QR يرسل القراء الفضوليين إلى bitcoin.rocks لتعلم المزيد.",
	"get-involved::get_involved_flyers_content_3":
		"على عكس الملصقات، يمكن طباعة المنشورات عند الطلب من أي مكان في العالم — كل ما تحتاجه هو طابعة وبضع دقائق.",
	"get-involved::get_involved_flyers_header": "اطبع وانشر منشوراً",
	"get-involved::get_involved_flyers_image_alt":
		"معاينة منشور البيتكوين المجاني القابل للطباعة من bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks هو مشروع مجاني ومفتوح المصدر مرخص بموجب رخصة MIT. مهمتنا هي تسريع تبني البيتكوين من خلال التعليم — ولا يمكننا فعل ذلك وحدنا.",
	"get-involved::get_involved_github_content_2":
		"سواء كنت مطوراً أو مصمماً أو كاتباً أو مترجماً، فهناك طريقة لك للمساعدة. نرحب بشكل خاص بالمساهمين الذين يمكنهم ترجمة محتوانا إلى مزيد من اللغات حتى يتمكن المزيد من الناس حول العالم من تعلم البيتكوين بلغتهم الأم.",
	"get-involved::get_involved_github_content_3":
		"انسخ المستودع، أو افتح طلب سحب، أو قدم مشكلة، أو فقط ضع نجمة على المشروع لإظهار دعمك. كل مساهمة تساعد البيتكوين على الوصول إلى مزيد من الناس.",
	"get-involved::get_involved_github_header": "ساهم على GitHub",
	"get-involved::get_involved_header": "شارك وانشر البيتكوين.",
	"get-involved::get_involved_intro_5":
		"يمكنك المساعدة في تغيير ذلك. لقد صنعنا عدة موارد مجانية لتسهيل نشر الأمل الذي يجلبه البيتكوين لمن حولك.",
	"get-involved::get_involved_sticker_image_alt":
		"عبوة ملصقات نصية للبيتكوين مجانية من bitcoin.rocks",
});

/* ─────────────── index (homepage) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "الادخار",
	"index::home_card_label_art_1": "لنقارن",
	"index::home_card_label_art_2": "انشر الكلمة",
	"index::home_card_label_art_3": "فن الشارع",
	"index::home_card_label_bank_runs": "نظام احتياطي كامل",
	"index::home_card_label_bonds": "لنقارن",
	"index::home_card_label_business_1": "ما الفرق؟",
	"index::home_card_label_business_2": "اقبل مدفوعات البيتكوين",
	"index::home_card_label_cash": "لنقارن",
	"index::home_card_label_cbdc": "مفتوح أم مغلق؟",
	"index::home_card_label_coding_1": "درس تفاعلي",
	"index::home_card_label_coding_2": "ابنِ عتاداً",
	"index::home_card_label_coding_3": "ألغاز برمجة",
	"index::home_card_label_crowdfunding_1": "احتجاجات EndSARS",
	"index::home_card_label_crowdfunding_2": "مال لا يمكن إيقافه",
	"index::home_card_label_crowdfunding_3": "موّل مشروعك",
	"index::home_card_label_crypto": "ما الفرق؟",
	"index::home_card_label_energy_1": "استقرار الشبكة",
	"index::home_card_label_energy_4": "الاستجابة للطلب",
	"index::home_card_label_energy_5": "كهرباء الريف",
	"index::home_card_label_energy_6": "حوافز الطاقة المتجددة",
	"index::home_card_label_environment_1": "تقليل الميثان",
	"index::home_card_label_environment_2": "أنقذ متنزهاً وطنياً",
	"index::home_card_label_environment_3": "الصناعة الأكثر خضرة",
	"index::home_card_label_environment_4": "يقلل الغاز المحروق",
	"index::home_card_label_equality_1": "الأمل والفرصة",
	"index::home_card_label_equality_2": "لاعب محوري",
	"index::home_card_label_food_1": "أسعار الطعام",
	"index::home_card_label_food_2": "المزارع والتربة",
	"index::home_card_label_freedom_1": "الأنظمة الاستبدادية",
	"index::home_card_label_freedom_2": "أداة فريدة",
	"index::home_card_label_get_started_1": "أساسيات المبتدئين",
	"index::home_card_label_get_started_2": "أول محفظة لك",
	"index::home_card_label_get_started_3": "اشترِ البيتكوين",
	"index::home_card_label_gold": "أيهما أفضل؟",
	"index::home_card_label_housing_1": "الإسكان الميسور",
	"index::home_card_label_human_rights_1": "تطبيق حقوق الإنسان",
	"index::home_card_label_human_rights_2": "تبني شعبي",
	"index::home_card_label_human_rights_3": "تأثير عالمي",
	"index::home_card_label_inflation": "البيتكوين مال أفضل",
	"index::home_card_label_networks_1": "عرض الشبكة المباشر",
	"index::home_card_label_networks_2": "لنقارن",
	"index::home_card_label_payments_1": "ما الفرق؟",
	"index::home_card_label_payments_2": "مدفوعات سريعة ورخيصة",
	"index::home_card_label_payments_3": "التحويلات المالية",
	"index::home_card_label_payments_4": "استلم مدفوعات",
	"index::home_card_label_politics_1": "المفارقة السياسية",
	"index::home_card_label_politics_2": "اتخذ إجراء",
	"index::home_card_label_property_rights_1": "لنقارن",
	"index::home_card_label_property_rights_2": "ملكية حقيقية",
	"index::home_card_label_salary": "احمِ راتبك",
	"index::home_card_label_self_custody_1": "دليل محفظة البيتكوين",
	"index::home_card_label_self_custody_2": "أهم خطوة",
	"index::home_card_label_self_custody_3": "مال سيادي",
	"index::home_card_label_war_1": "أنهِ الحروب التي لا تنتهي",
	"index::home_card_label_war_2": "مساعدة المحاربين القدامى",
	"index::home_card_label_war_3": "هروب وقت الحرب",
	"index::home_h1": "البيتكوين مال أفضل يبني عالماً أفضل.",
	"index::home_nav_about": "حول",
	"index::home_nav_get_involved": "شارك",
	"index::home_nav_learn": "تعلّم",
	"index::home_source_prefix": "المصدر:",
});

/* ─────────────── get-involved extras ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_header":
		"شارك وانشر البيتكوين.",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::lightning_grid_heading": "محافظ Lightning شائعة",
	"lightning::lightning_hardware_cta_label": "محافظ عتاد",
	"lightning::lightning_header_subtitle":
		"Lightning يتيح لك إرسال البيتكوين في ثوانٍ مقابل جزء من السنت — اختر المحفظة التي تناسب مفاضلاتها مقدار البيتكوين الذي تخطط لإنفاقه.",
	"lightning::lightning_s1_c4": "اطّلع على دليلنا",
	"lightning::lightning_s1_c4_end": "للمزيد من المعلومات.",
	"lightning::lightning_s1_c4_link": "دليل محافظ عتاد البيتكوين",
	"lightning::sources_acinq_phoenix":
		"ACINQ — محفظة Phoenix Lightning",
	"lightning::sources_breez_lightning":
		"Breez — محفظة Lightning ذاتية الحفظ",
	"lightning::sources_lightning_labs":
		"Lightning Labs — توثيق شبكة Lightning",
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — محفظة Lightning حاضنة",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_f1": "الكثير من الميزات والتخصيص",
	"nostr/index::nostr_amethyst_f2": "يتطلب محفظة بيتكوين منفصلة",
	"nostr/index::nostr_amethyst_f3": "مجاني 100%",
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_f1":
		"واجهة مألوفة شبيهة بـ Twitter",
	"nostr/index::nostr_damus_f2": "يتطلب محفظة بيتكوين منفصلة",
	"nostr/index::nostr_damus_f3": "مجاني 100%",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_download_heading":
		"نزّل عميل Nostr مجاني",
	"nostr/index::nostr_download_intro":
		"عملاء Nostr هم تطبيقات مجانية تتيح لك قراءة ونشر المحتوى على شبكة Nostr. جميعها قابلة للتشغيل البيني — يمكنك تبديل العملاء في أي وقت والاحتفاظ بمتابعيك ومحتواك.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr هو بروتوكول لامركزي جديد للتواصل عبر الإنترنت — لا تسيطر عليه أي شركة واحدة، ومدفوعات البيتكوين (zaps) مدمجة بشكل أصلي، ويمكنك التنقل بين التطبيقات دون فقدان متابعيك.",
	"nostr/index::nostr_hero_title": "ما هو Nostr؟",
	"nostr/index::nostr_intro_c1":
		"Nostr مشابه للبريد الإلكتروني: لا أحد يمتلك البروتوكول، ويمكن لأي شخص بناء تطبيق عليه، ويمكنك اختيار أي تطبيق تفضله أكثر. على عكس Twitter أو Facebook، لا توجد شركة مركزية يمكنها الرقابة عليك أو طردك أو تقليل انتشارك.",
	"nostr/index::nostr_intro_c2":
		"أدناه النسخة المختصرة لأهمية Nostr — ثم كل عميل Nostr مجاني تحتاجه للبدء اليوم.",
	"nostr/index::nostr_iris_f1":
		"سهل للغاية — لا يحتاج تثبيتاً",
	"nostr/index::nostr_iris_f2":
		"طريقة سهلة لتجربة Nostr بحساب اختباري",
	"nostr/index::nostr_iris_f3": "مجاني 100%",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_learn_more_label": "تعمّق أكثر",
	"nostr/index::nostr_learn_more_title":
		"تعلم المزيد عن Nostr على nostr.how",
	"nostr/index::nostr_page_description":
		"Nostr هو بروتوكول لامركزي جديد للتواصل عبر الإنترنت — لا تسيطر عليه أي شركة واحدة، ومدفوعات البيتكوين (zaps) مدمجة بشكل أصلي، ويمكنك التنقل بين العملاء دون فقدان متابعيك.",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone وAndroid والويب",
	"nostr/index::nostr_platform_web": "متصفح الويب",
	"nostr/index::nostr_primal_f1": "العميل الأول الموصى به",
	"nostr/index::nostr_primal_f2":
		"محفظة zap للبيتكوين مدمجة",
	"nostr/index::nostr_primal_f3": "مجاني 100%",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_s1": "بروتوكول، وليس منصة",
	"nostr/index::nostr_s1_c1":
		"Nostr هو بروتوكول جديد يتيح لك التواصل عبر الإنترنت دون خوف من الرقابة أو الطرد أو تقليل الانتشار.",
	"nostr/index::nostr_s1_c2":
		"منصات مثل Twitter وFacebook تسيطر عليها شركة واحدة، لكن لا أحد يسيطر على بروتوكول Nostr.",
	"nostr/index::nostr_s2": "حرية التنقل",
	"nostr/index::nostr_s2_c1":
		"Nostr مشابه للبريد الإلكتروني. لا أحد يسيطر على بروتوكول البريد الإلكتروني، ويمكن لأي شخص بناء عميل (مثل Gmail وHotmail وغيرها) عليه.",
	"nostr/index::nostr_s2_c2":
		"لا أحد يسيطر على بروتوكول Nostr أيضاً، ويمكن لأي شخص بناء عميل (مثل Damus وAmethyst وغيرها) عليه.",
	"nostr/index::nostr_s2_c3":
		"إذا لم تعجبك طريقة عمل عميل معين، يمكنك نقل حساب Nostr الخاص بك بسلاسة إلى عميل آخر دون فقدان متابعيك أو محتواك.",
	"nostr/index::nostr_s3": "البيتكوين مدمج",
	"nostr/index::nostr_s3_c1":
		"البيتكوين مدمج بشكل أصلي في بروتوكول Nostr. إذا رأيت محتوى يعجبك، يمكنك بسهولة إرسال zap بالبيتكوين لشخص ما كشكر!",
	"nostr/index::nostr_s3_c2":
		"في المنصات المركزية مثل Twitter وFacebook، تكسب الشركة المركزية المال من محتواك. لكن في البروتوكولات المفتوحة مثل Nostr، أنت تكسب المال من محتواك.",
	"nostr/index::sources_damus": "Damus — عميل Nostr لـ iPhone",
	"nostr/index::sources_iris":
		"Iris — عميل Nostr يعمل في المتصفح",
	"nostr/index::sources_nostr_how":
		"nostr.how — ما هو Nostr؟",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — مواصفة مفتوحة المصدر",
	"nostr/index::sources_primal":
		"Primal — عميل Nostr مع محفظة zap بيتكوين مدمجة",
	"nostr/index::what_is_nostr": "ما هو Nostr؟",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"اطبع ملصقات البيتكوين الخاصة بك باستخدام ملفات ملصقات البيتكوين هذه.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"تم استلام الطلب 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "اطلب بالجملة",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"شارك على Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "ما هو Nostr؟",
	"sticker-success::sticker_success_bulk_header":
		"هل تريد المزيد من الملصقات؟",
	"sticker-success::sticker_success_hero_title":
		"ملصقاتك في الطريق 🎉",
	"sticker-success::sticker_success_share_header":
		"شارك أماكن ملصقاتك",
	"sticker-success::sticker_success_tips_header":
		"أماكن ملصقات جيدة",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_btn_choose_pack": "اختر هذه العبوة",
	"stickers::stickers_bulk_c1":
		"تريد أكثر من بضعة ملصقات؟",
	"stickers::stickers_bulk_c2":
		"اطلب بالجملة من نفس الطابعة التي نستخدمها",
	"stickers::stickers_bulk_c3":
		"— كلما اشتريت أكثر، كان السعر لكل ملصق أرخص.",
	"stickers::stickers_bulk_cta": "تسوّق ملصقات بالجملة",
	"stickers::stickers_bulk_header": "اطلب ملصقات بالجملة",
	"stickers::stickers_flyers_link_before":
		"بينما أنت في الأمر، اطبع وانشر",
	"stickers::stickers_header":
		"احصل على هذه الملصقات المجانية \"البيتكوين مقبول هنا\".",
	"stickers::stickers_hero_subtitle":
		"اطلب عبوة مجانية من ملصقات البيتكوين وضعها في الأماكن العامة لمساعدة المزيد من الناس على تعلم البيتكوين.",
	"stickers::stickers_hero_title": "ملصقات بيتكوين مجانية",
	"stickers::stickers_instructions_1":
		"أدخل عنوان مراسلتك وسنرسل لك عبوة ملصقات بيتكوين مجانية بالبريد. ستُشحن ملصقاتك في مظروف أبيض عادي.",
	"stickers::stickers_intro_c1":
		"مهمتنا هي مساعدتك على \"تبرقل\" مزيد من الناس بوضع ملصقات البيتكوين في الأماكن العامة. جميع ملصقاتنا تحتوي على رموز QR ترتبط بصفحات تعليمية عن",
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_intro_c3": "التضخم",
	"stickers::stickers_intro_c4":
		"اختر عبوة ملصقات أدناه واختر كيف تريد الحصول عليها — سنرسل عبوة مجانية لأي شخص في الولايات المتحدة أو كندا، أو يمكنك طباعة الخاصة بك في أي مكان في العالم.",
	"stickers::stickers_mail_header": "سنرسل لك ملصقاتك المجانية",
	"stickers::stickers_next_print_flyers": "استمر في النشر",
	"stickers::stickers_next_print_flyers_desc":
		"اطبع منشورات بيتكوين مجانية لنشرها في الأماكن العامة",
	"stickers::stickers_option_bulk": "📦 عالمياً — اطلب بالجملة",
	"stickers::stickers_option_canada": "🇨🇦 كندا — مجاناً بالبريد",
	"stickers::stickers_option_print": "🌍 عالمياً — اطبع بنفسي",
	"stickers::stickers_option_usa":
		"🇺🇸 الولايات المتحدة — مجاناً بالبريد",
	"stickers::stickers_print_c1":
		"يمكنك المشاركة من خلال طباعة ملصقاتك الخاصة، بغض النظر عن مكان إقامتك. انقر على لغتك أدناه لتنزيل ملفات الملصقات وتعليمات الطباعة.",
	"stickers::stickers_print_c2":
		"ليس كل ملصق متاحاً بكل لغة.",
	"stickers::stickers_print_header":
		"اطبع ملفات الملصقات الخاصة بك",
	"stickers::stickers_request_c1":
		"املأ النموذج أدناه لطلب ملفات الملصقات بلغتك المحلية. سنخبرك بمجرد أن تكون جاهزة.",
	"stickers::stickers_request_header": "لا ترى لغتك؟",
	"stickers::stickers_share_c2":
		"تابعنا على Nostr بالبحث عن",
	"stickers::stickers_share_c3": "في أي عميل Nostr.",
	"stickers::stickers_signs_pack_description":
		"علامات على شكل تحذير وخطر وتنبيه برسائل البيتكوين — مصممة لجذب الانتباه وجعل الناس يتوقفون ويقرؤون.",
	"stickers::stickers_step_1_description":
		"كل عبوة لها مجموعة مختلفة من ملصقات البيتكوين برموز QR تعلّم الناس عن البيتكوين.",
	"stickers::stickers_step_1_eyebrow": "الخطوة 1",
	"stickers::stickers_step_1_header":
		"اختر عبوة الملصقات الخاصة بك",
	"stickers::stickers_step_2_description":
		"سنشحن عبوة مجانية إلى العناوين في الولايات المتحدة وكندا. في أي مكان آخر في العالم، يمكنك طباعة الخاصة بك أو طلب بالجملة.",
	"stickers::stickers_step_2_eyebrow": "الخطوة 2",
	"stickers::stickers_step_2_header":
		"كيف تريد الحصول على ملصقاتك؟",
	"stickers::stickers_text_pack_description":
		"مزيج من شعارات وعبارات البيتكوين المصممة لإثارة الفضول في الأماكن العامة.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — اختر محفظتك",
	"wallets::sources_blockstream_green":
		"Blockstream Green — محفظة بيتكوين للحفظ الذاتي",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — محفظة عتاد بيتكوين",
	"wallets::sources_coldcard_mk5":
		"Coinkite — محفظة عتاد Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — محفظة عتاد Coldcard Q",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — مراجعات تخزين بذور البيتكوين المعدنية",
	"wallets::sources_passport":
		"Foundation Devices — محفظة عتاد Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — جهاز توقيع بيتكوين DIY مفتوح المصدر",
	"wallets::wallets_grid_heading": "محافظ البيتكوين الشائعة",
	"wallets::wallets_header_subtitle":
		"دليل خطوة بخطوة لاختيار محفظة، وحماية مفاتيحك، والسيطرة الكاملة على البيتكوين الخاص بك.",
	"wallets::wallets_lightning_cta_label": "شبكة Lightning",
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
		`translate-rest-part2 (ar): filled ${filled}, already-done ${skipped}`,
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
