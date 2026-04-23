#!/usr/bin/env node
/**
 * Arabic manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
 *
 * Keys use "<namespace>::<key>" format to disambiguate shared keys
 * (like point_X_summary_Y and hero_title) across multiple namespaces.
 *
 * Brand names (Bitcoin, Nostr, Lightning, Strike, Primal, Damus,
 * Amethyst, Iris, BTC Map, CoinGecko, BTCPay Server, Breez, OpenNode,
 * IBEX, Zaprite, Square, StickerMule, Coldcard, Blockstream, Jade,
 * Passport, SeedSigner, Kraken, Relai, River, Swan, Bisq, Oshi,
 * FRED, FDIC, EndSARS, FRED CPI, SVB, Silicon Valley Bank, MIT,
 * sovenor, Satoshi Pacioli, Lyn Alden, James Lavish, etc.), URLs,
 * emails, numbers, and currency codes are preserved verbatim.
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
	"ar.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "العودة إلى الصفحة الرئيسية",
	"404::404_message": "البيتكوين رائع، لكن هذه الصفحة المعطلة ليست كذلك.",
	"404::404_not_found_short": "غير موجود",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"نوفر حقائب عمل مجانية تسهّل إشراك التجار المحليين لقبول البيتكوين. تشمل كل حقيبة مواد قابلة للطباعة تشرح فوائد قبول البيتكوين لأعمالهم.",
	"about::about_card_business_label": "حقيبة الأعمال",
	"about::about_card_business_source": "المصدر: bitcoin.rocks ←",
	"about::about_card_business_title":
		"ساعد الأعمال المحلية على قبول مدفوعات البيتكوين",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "المصدر: GitHub ←",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "ساهم",
	"about::about_card_contribute_source": "المصدر: GitHub ←",
	"about::about_card_contribute_title":
		"تعلّم كيف تساهم في bitcoin.rocks",
	"about::about_card_email_label": "البريد الإلكتروني",
	"about::about_card_email_source": "المصدر: البريد الإلكتروني ←",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "منشورات قابلة للطباعة",
	"about::about_card_flyers_source": "المصدر: bitcoin.rocks ←",
	"about::about_card_flyers_title":
		"نزّل واطبع منشورات البيتكوين لمجتمعك",
	"about::about_card_github_label": "المستودع",
	"about::about_card_github_source": "المصدر: GitHub ←",
	"about::about_card_github_title": "اعرض bitcoin.rocks على GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "المصدر: Nostr ←",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "ملصقات مجانية",
	"about::about_card_stickers_source": "المصدر: bitcoin.rocks ←",
	"about::about_card_stickers_title":
		"احصل على ملصقات بيتكوين مجانية تُرسل إلى بابك",
	"about::about_editorial_2":
		"نربط بمصادر موثوقة مثل الاحتياطي الفيدرالي (FRED)، ومكتب إحصاءات العمل الأمريكي، وFDIC، والأمم المتحدة، ومجلس الذهب العالمي، وForbes، وMIT Technology Review، وLyn Alden، وJames Lavish. نؤمن أن البيتكوين يتحدث عن نفسه عندما تُعرض الحقائق بوضوح.",
	"about::about_flyers_blurb":
		"نصمم منشورات قابلة للطباعة يمكنك توزيعها في اللقاءات، أو تعليقها على لوحات المجتمع، أو وضعها في صناديق البريد — طريقة بسيطة لإثارة الفضول وإرسال الناس إلى bitcoin.rocks لتعلّم المزيد.",
	"about::about_header": "حول bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "تأسس bitcoin.rocks على يد",
	"about::about_mission_1b":
		"في عام 2022 بمهمة بسيطة: تسريع تبني البيتكوين من خلال التعليم.",
	"about::about_open_source_2":
		"bitcoin.rocks مشروع مجاني ومفتوح المصدر مرخص بموجب رخصة MIT. يمكن لأي شخص المساهمة في bitcoin.rocks. نرحب بشكل خاص بالمترجمين الذين يساعدون في جعل محتوانا متاحاً للناس حول العالم.",
	"about::about_page_description":
		"bitcoin.rocks هو موقع تعليمي مجاني ومفتوح المصدر عن البيتكوين تأسس في عام 2022. مهمتنا هي تسريع تبني البيتكوين من خلال التعليم.",
	"about::about_stickers_blurb":
		"نرسل ملصقات بيتكوين مجانية إلى بابك لتساعد في نشر الوعي بالبيتكوين في مجتمعك. مئات الأشخاص يمسحون رموز QR على هذه الملصقات كل شهر لتعلّم البيتكوين.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "البيتكوين ليس لديه عمليات سحب جماعية",
	"bank-runs::bank_runs_bitcoin_p1":
		"البيتكوين نظام باحتياطي كامل. أنت لا تودع أموالك في بنك. أنت بنك نفسك. لا يتم إقراض أموالك دون علمك لأنك الوحيد الذي يمكنه الوصول إلى أموالك.",
	"bank-runs::bank_runs_bitcoin_p2":
		"طالما أنك تحتفظ بالبيتكوين في محفظتك الخاصة — وليس على منصة تبادل أو مغلفاً في ETF — فإن عمليات السحب الجماعية مستحيلة.",
	"bank-runs::bank_runs_bitcoin_p3":
		"مع البيتكوين، أنت تتحكم حقاً في أموالك.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"منذ 26 مارس 2020، البنوك الأمريكية مطالبة بالاحتفاظ بـ 0% كاحتياطي.",
	"bank-runs::bank_runs_card_bank_reserve_label": "نسبة احتياطي البنوك",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"المصدر: الاحتياطي الفيدرالي ←",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"نظام باحتياطي كامل — لا حاجة لتأمين الودائع.",
	"bank-runs::bank_runs_card_btc_fdic_label": "تغطية البيتكوين",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"المصدر: الورقة البيضاء للبيتكوين ←",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"كل بيتكوين موجود على السلسلة — لا شيء يُقرَض.",
	"bank-runs::bank_runs_card_btc_reserve_label": "نسبة احتياطي البيتكوين",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"المصدر: الورقة البيضاء للبيتكوين ←",
	"bank-runs::bank_runs_card_fdic_detail":
		"صندوق تأمين 153.9 مليار دولار مقابل 10.82 تريليون دولار من الودائع المؤمَّنة (ديسمبر 2025).",
	"bank-runs::bank_runs_card_fdic_label": "تغطية FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"المصدر: إحصاءات FDIC في لمحة ←",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "دراسة حالة",
	"bank-runs::bank_runs_card_svb_source":
		"المصدر: كلية القانون بجامعة واشنطن ←",
	"bank-runs::bank_runs_card_svb_title":
		"تعلّم كيف حدث السحب الجماعي لبنك Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "الخطوة التالية",
	"bank-runs::bank_runs_card_wallet_source": "ابدأ هنا ←",
	"bank-runs::bank_runs_card_wallet_title":
		"تعلّم كيف تحصل على محفظة البيتكوين الخاصة بك",
	"bank-runs::bank_runs_fdic_heading":
		"تأمين FDIC يغطي حوالي 1% من الودائع",
	"bank-runs::bank_runs_fdic_p1":
		"يحمي تأمين FDIC الودائع حتى 250,000 دولار لكل مودع. لكن صندوق التأمين صغير جداً مقارنة بإجمالي الودائع التي من المفترض أن يحميها.",
	"bank-runs::bank_runs_fdic_p2_a":
		"في حالة فشل مصرفي واسع النطاق، ستقوم الحكومة على الأرجح بطباعة النقود لتغطية الفجوة — مما يؤدي إلى مزيد من",
	"bank-runs::bank_runs_fdic_p2_link": "التضخم.",
	"bank-runs::bank_runs_header":
		"البيتكوين ليس لديه عمليات سحب جماعية، لكن بنكك قد يكون لديه.",
	"bank-runs::bank_runs_page_description":
		"البنوك تُقرض ودائعك في إطار النظام المصرفي بالاحتياطي الجزئي. إذا حاول الكثير من الناس السحب دفعة واحدة، يمكن للبنوك أن تفشل. البيتكوين نظام باحتياطي كامل — عمليات السحب الجماعية مستحيلة.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: مثال حقيقي",
	"bank-runs::bank_runs_svb_p1_a":
		"في مارس 2023، فشل بنك Silicon Valley Bank بعد أن استثمر ودائع العملاء في",
	"bank-runs::bank_runs_svb_p1_b":
		"طويلة الأجل. عندما فقدت تلك السندات قيمتها، لم يستطع SVB تغطية السحوبات. أصبح البنك معسراً.",
	"bank-runs::bank_runs_svb_p1_link": "سندات الحكومة",
	"bank-runs::bank_runs_svb_p2":
		"لم تستطع آلاف الشركات دفع رواتب موظفيها. تدخلت FDIC — لكن ذلك أثار سؤالاً أكبر: هل أموالك آمنة فعلاً؟",
	"bank-runs::bank_runs_what_p1":
		"البنوك لا تحتفظ بودائعك في خزنة. إنها تقرض أموالك وتستثمرها — يُسمى ذلك نظام الاحتياطي الجزئي.",
	"bank-runs::bank_runs_what_p2":
		"إذا حاول الكثير من الناس السحب في الوقت نفسه، فلا يوجد لدى البنك ما يكفي من النقد لدفع الجميع. هذا هو السحب الجماعي — ويمكن أن يتسبب في انهيار البنوك تماماً.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">البنوك</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"يمكن لأي شخص لديه اتصال بالإنترنت استخدام البيتكوين — إنه ",
	"bitcoin-vs-banks::point_1_summary_2": "بلا إذن.",
	"bitcoin-vs-banks::point_1_summary_3":
		"يمكن للبنوك رفض الحسابات أو تجميدها أو إغلاقها بناءً على السياسة أو قواعد الحكومة.",
	"bitcoin-vs-banks::point_2_summary_1":
		"تعمل شبكة البيتكوين على مدار الساعة طوال أيام الأسبوع دون فترات صيانة أو عطلات. للبنوك ساعات محدودة وعطلات نهاية الأسبوع وفترات انقطاع.",
	"bitcoin-vs-banks::point_3_summary_1":
		"كل معاملة بيتكوين على بلوكشين عام يمكن لأي شخص تدقيقه. تدير البنوك سجلات خاصة لا يستطيع العملاء التحقق منها بشكل مستقل.",
	"bitcoin-vs-banks::point_4_summary_1":
		"مع البيتكوين، تحتفظ بمفاتيحك الخاصة — اطّلع على دليلنا البسيط ",
	"bitcoin-vs-banks::point_4_summary_2": "محافظ البيتكوين",
	"bitcoin-vs-banks::point_4_summary_3":
		". البنوك تحتفظ بأموالك ويمكنها تجميدها أو تقييدها أو تقييد الوصول إليها في أي وقت.",
	"bitcoin-vs-banks::point_5_summary_1":
		"رسوم البيتكوين شفافة ويمكن التنبؤ بها. البنوك تكدس رسوم حسابات وسحب على المكشوف وتحويل وصراف آلي مخفية بمرور الوقت.",
	"bitcoin-vs-banks::point_6_summary_1":
		"البيتكوين يتيح لك إنفاق ما تملكه فقط. البنوك تسمح بالسحب على المكشوف، ثم تفرض رسوم عقوبات متتالية مقابل هذا الامتياز.",
	"bitcoin-vs-banks::point_7_summary_1":
		"بمجرد بثها، لا يمكن إيقاف معاملات البيتكوين أو عكسها. يمكن للبنوك حظر أو تجميد أو عكس المعاملات بناءً على السياسة أو أوامر الحكومة.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">السندات</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"السندات \"خالية من المخاطر\" اسمياً فقط — التضخم وتحركات أسعار الفائدة ومخاطر التخلف عن السداد كلها تأكل العوائد الحقيقية.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"للبيتكوين تقلبات شفافة لكن بدون مخاطر طرف مقابل خفية.",
	"bitcoin-vs-bonds::point_2_summary_1": "عندما يتجاوز",
	"bitcoin-vs-bonds::point_2_summary_2": "التضخم",
	"bitcoin-vs-bonds::point_2_summary_3":
		"عوائد السندات، يخسر حاملو السندات القوة الشرائية الحقيقية كل عام. حد 21 مليون للبيتكوين لا يمكن تضخيمه.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"يمكن لأسواق السندات أن تتجمد في الأزمات — انهار Silicon Valley Bank جزئياً لأنه كان عالقاً بسندات فقدت قيمتها. اطّلع على كيف تحدث",
	"bitcoin-vs-bonds::point_3_summary_2": "عمليات السحب الجماعية",
	"bitcoin-vs-bonds::point_3_summary_3":
		"ولماذا يتجنبها البيتكوين. البيتكوين يُتداول 24/7 عالمياً دون أزمات سيولة.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"يمكن لمزادات الخزانة أن تفشل عندما لا يكون هناك مشترون كافون — اطّلع على",
	"bitcoin-vs-bonds::point_4_summary_2": "مزاد 2022 الضعيف.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"سعر البيتكوين يُكتشف باستمرار في الأسواق المفتوحة بدون مزاد مركزي يمكن أن يفشل.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"عوائد السندات ثابتة عند الشراء. حتى إذا ازدهر الاقتصاد أو انهارت العملة، يبقى عائدك كما هو.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"البيتكوين لديه مجال لارتفاع كبير مع نمو التبني والتقاء الطلب بالعرض الثابت.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"تُحتفظ معظم السندات عبر البنوك أو الوسطاء، مما يضيف مخاطر طرف مقابل. البيتكوين يمكن حفظه ذاتياً بـ",
	"bitcoin-vs-bonds::point_6_summary_2": "محفظة",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — مما يقضي على هذه المخاطر تماماً.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"السندات تعتمد بالكامل على سداد الحكومات. إذا تخلفت الحكومة عن السداد أو ضخمت ديونها، يخسر حاملو السندات.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"البيتكوين يعمل بشكل مستقل عن أي حكومة أو سلطة سياسية.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">النقد</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"البيتكوين يتحرك عبر الإنترنت في أي مكان خلال دقائق. النقد يحتاج إلى حضور مادي أو سعاة موثوقين — لا يمكنك إرسال ورقة 20 دولاراً بالبريد الإلكتروني.",
	"bitcoin-vs-cash::point_2_summary_1":
		"البيتكوين يعمل بنفس الطريقة في كل مكان. النقد محدود بالجغرافيا وأسعار الصرف والقبول المحلي.",
	"bitcoin-vs-cash::point_3_summary_1":
		"يمكن للحكومات إبطال النقد بين عشية وضحاها — فعلت الهند ذلك في 2016. حتى بدون سحب العملة، يفقد النقد قيمته بسبب",
	"bitcoin-vs-cash::point_3_summary_2": "التضخم.",
	"bitcoin-vs-cash::point_3_summary_3":
		"البيتكوين لا يمكن إبطاله من قبل أي حكومة أو سلطة.",
	"bitcoin-vs-cash::point_4_summary_1":
		"يمكن تزوير النقد، أحياناً بشكل مقنع. البيتكوين يستخدم تشفيراً يجعل التزوير مستحيلاً رياضياً.",
	"bitcoin-vs-cash::point_5_summary_1":
		"البيتكوين ليس لديه سلطة مركزية. النقد تصدره الحكومات التي يمكنها طباعة المزيد أو تغيير التصاميم أو إبطال الأوراق كما تشاء.",
	"bitcoin-vs-cash::point_6_summary_1":
		"النقد معرض للسرقة والحريق والضياع والمصادرة. البيتكوين يمكن",
	"bitcoin-vs-cash::point_6_summary_2": "حفظه ذاتياً",
	"bitcoin-vs-cash::point_6_summary_3":
		"بأمان على هاتف أو جهاز عتاد.",
	"bitcoin-vs-cash::point_7_summary_1":
		"البيتكوين ينقسم إلى 100 مليون ساتوشي، مما يتيح مدفوعات صغيرة بأي حجم. النقد له فئات دنيا — لا يمكنك تقسيم سنت.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">العملات الرقمية للبنوك المركزية (CBDCs)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"لا أحد يمكنه منعك من التعامل بالبيتكوين. العملات الرقمية للبنوك المركزية مصممة ليتمكن الحكومات والبنوك المركزية من التحكم بكل دفعة، محدّة من خصوصيتك وحريتك.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"البيتكوين لا ينتهي أبداً وليس له رسوم شهرية. يمكن برمجة CBDCs لتنتهي، مما يمنعك من الادخار للمستقبل.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"البيتكوين لديه حد أقصى صارم قدره 21 مليون BTC. CBDCs ليس لها حد على العرض، مما يسمح للحكومات بتوسيع المال كما تشاء — وهو ما يسبب",
	"bitcoin-vs-cbdc::point_3_summary_2": "التضخم.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"عناوين البيتكوين لا ترتبط بهويتك الحقيقية. CBDCs ترتبط مباشرة ببطاقة الهوية الحكومية، مما يتيح المراقبة المالية الجماعية والرقابة.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"قواعد البيتكوين مُتحقَّق منها بواسطة عشرات الآلاف من العقد المستقلة. CBDCs مركزية في أيدي الحكومات والبنوك المركزية، التي تملك السيطرة الكاملة على الشبكة.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"يمكن لأي شخص تشغيل عقدة بيتكوين للتحقق من قواعد الشبكة. CBDCs لا تسمح للمستخدمين بتشغيل العقد — عليك الثقة بالسلطة المركزية.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"البيتكوين المحفوظ ذاتياً لا يمكن لأحد تجميده. CBDCs مصممة ليتمكن الحكومات والبنوك المركزية من تجميد الحسابات فوراً.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"البيتكوين يمنحك تحكماً كاملاً بأموالك عندما تحفظه ذاتياً بـ",
	"bitcoin-vs-cbdc::point_8_summary_2": "محفظة.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDCs تتطلب الثقة بحفظة مثل البنوك أو الحكومات للاحتفاظ بأموالك نيابة عنك.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"السياسة النقدية للبيتكوين مثبتة في الكود ولا يمكن تغييرها. CBDCs يمكن إعادة برمجتها كما يشاء السياسيون، مما يسبب",
	"bitcoin-vs-cbdc::point_9_summary_2": "التضخم",
	"bitcoin-vs-cbdc::point_9_summary_3": " عندما تتم طباعة الكثير من المال.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"البيتكوين هو أكثر شبكات الحوسبة أماناً بُنيت على الإطلاق ولم تُخترق أبداً. CBDCs تعتمد على البنوك والحكومات التي تم اختراقها مرات لا تُحصى.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">العملات المشفرة</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"بروتوكول البيتكوين ظل على حاله أساساً منذ 2009، موفراً قواعد يمكن التنبؤ بها. معظم مشاريع الكريبتو تغير البروتوكولات أو اقتصاد الرموز باستمرار، أو تنشطر إلى إصدارات جديدة.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"البيتكوين يعمل على عشرات الآلاف من العقد المستقلة حول العالم. معظم مشاريع الكريبتو تسيطر عليها مؤسسات أو شركات أو فرق تطوير صغيرة يمكنها إجراء تغييرات أحادية الجانب.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"البيتكوين لديه حد أقصى صارم قدره 21 مليون عملة — أندر أصل رقمي. معظم مشاريع الكريبتو لديها عرض غير محدود أو آليات لصكّ رموز جديدة كما تشاء، مما يخفّض حصص الحاملين.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"البيتكوين له غرض واحد: نقود رقمية من نظير إلى نظير. يمكن لأي شخص فهمه واستخدامه. معظم الكريبتو ينطوي على عقود ذكية معقدة أو DeFi يتطلب خبرة تقنية لاستخدامه بأمان.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"إثبات العمل للبيتكوين يعمل دون هجوم ناجح على الشبكة الرئيسية لأكثر من 15 عاماً. معظم مشاريع الكريبتو تستخدم إجماعاً تجريبياً لم يُختبر في المعارك.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"البيتكوين نقود رقمية — مخزن للقيمة ووسيلة للتبادل. معظم رموز الكريبتو هي رموز مضاربة أو حوكمة بقيمة واقعية غير واضحة.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"البيتكوين يزداد قوة تحت الهجوم ونجا من كل أزمة وحظر وانتقاد. معظم مشاريع الكريبتو تنهار تحت الضغط التنظيمي أو التقني أو السوقي.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"البيتكوين ليس له رئيس تنفيذي، ولا شركة، ولا نقطة فشل واحدة. معظم مشاريع الكريبتو تعتمد على VCs أو قيادة محددة أو بقاء شركة واحدة.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">الفنون الجميلة</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"كل بيتكوين متطابق وقابل للتبادل. كل عمل فني فريد — الإنشاء والتاريخ والحالة والأصل المختلفة تجعل المقارنات المباشرة صعبة للغاية.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"البيتكوين يُتداول 24/7 في سوق عالمي يمكن لأي شخص الوصول إليه. الفنون الجميلة تتطلب دور مزادات متخصصة أو تجار خاصين أو صالات عرض، وقد يستغرق بيعها أشهراً.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"شراء أو بيع البيتكوين يكلف أقل من 1% في الرسوم، وغالباً أقل بكثير. مبيعات الفن تكدس 30-40% في علاوات المشتري والعمولات والتأمين والنقل ورسوم التوثيق.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"البيتكوين ينقسم إلى 100 مليون ساتوشي، مما يجعله مثالياً لأي حجم معاملة. لا يمكنك امتلاك جزء من لوحة أو زاوية من منحوتة.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"ملكية البيتكوين وصحته يمكن التحقق منها تشفيرياً من قبل أي شخص على السلسلة. توثيق الفن مكلف وبطيء ولا يزال يُخدع بانتظام من قبل المزيفين — مما يدمر قيمة العمل الفني بين عشية وضحاها.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"البيتكوين، إذا احتُفظ به بشكل صحيح، ينجو من الفيضانات والحرائق والزلازل والسرقة. الفنون الجميلة معرضة لكل أشكال الدمار المادي، والتأمين نادراً ما يغطي كل شيء.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"أي شخص لديه اتصال بالإنترنت ومال قليل يمكنه شراء البيتكوين. الاستثمار في الفنون الجميلة مقصور فعلياً على الجامعين الأثرياء الذين لديهم وصول إلى المزادات ومعرفة متخصصة.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">الذهب</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"يمكن إرسال البيتكوين فوراً عبر الإنترنت برسوم منخفضة. الذهب يجب شحنه مادياً لنقل الملكية.",
	"bitcoin-vs-gold::point_2_summary_1":
		"البيتكوين أصل رقمي أصلي يمكنك نقله عبر الإنترنت. معظم الذهب على الإنترنت هو سند رقمي — أنت تملك فقط وعداً من وصي، وليس المعدن نفسه.",
	"bitcoin-vs-gold::point_3_summary_1":
		"البيتكوين لديه حد أقصى صارم قدره 21 مليون BTC. عرض الذهب ينمو حوالي 1.6% سنوياً، مما يقلص حصتك — أقل من",
	"bitcoin-vs-gold::point_3_summary_2": "تضخم",
	"bitcoin-vs-gold::point_3_summary_3": "النقود الورقية — لكنه ما زال تضخماً.",
	"bitcoin-vs-gold::point_4_summary_1":
		"عندما ترتفع أسعار الذهب، يتم تعدين المزيد من الذهب، مما يدفع السعر للانخفاض مرة أخرى. عرض البيتكوين غير مرن — مهما ارتفع السعر، لن يكون هناك سوى 21 مليوناً.",
	"bitcoin-vs-gold::point_5_summary_1":
		"عشرات الآلاف من العقد المستقلة تتحقق من شبكة البيتكوين. معظم الذهب المادي يجلس في حفنة من خزائن الحفظة الكبيرة.",
	"bitcoin-vs-gold::point_6_summary_1":
		"يمكن لأي شخص التحقق من البيتكوين الحقيقي عن طريق تشغيل عقدة كاملة — إنه مجرد تطبيق. التحقق من الذهب المادي يتطلب صهره؛ قد يكون الداخل من التنغستن.",
	"bitcoin-vs-gold::point_7_summary_1":
		"البيتكوين ينقسم إلى 100 مليون ساتوشي، مما يجعله مثالياً لأي حجم شراء. الذهب لا يمكن تقسيمه بسهولة للمعاملات الصغيرة.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">العقارات</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"البيتكوين يتحرك في أي مكان في العالم فوراً. العقارات ثابتة في موقع واحد ومعرضة للمخاطر الاقتصادية والسياسية والطبيعية المحلية.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"البيتكوين ينقسم إلى 100 مليون ساتوشي. العقارات لا يمكن بيعها جزئياً — لا يمكنك التخلص من المطبخ فقط أو شراء نصف غرفة نوم.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"البيتكوين يعمل على شبكة لامركزية لا تستطيع أي حكومة السيطرة عليها. العقارات منظّمة بشكل كبير — تقسيم المناطق، وضوابط الإيجار، والاستملاك، والمصادرة كلها تنطبق.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"البيتكوين لا يتطلب أي صيانة. العقارات تتطلب إصلاحات وتجديدات وتأميناً وإدارة عقار ومشاكل مستأجرين.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"البيتكوين ليس عليه ضرائب مستمرة — أنت تدفع فقط أرباح رأس المال عند البيع. العقارات تدين بضرائب عقارية سنوية بغض النظر عن الدخل.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"البيتكوين، إذا احتُفظ به بشكل صحيح، ينجو من الحريق والفيضان والزلزال. العقارات معرضة لكل كارثة، والتأمين نادراً ما يغطي كل شيء.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"كل بيتكوين متطابق وقابل للتبادل. كل عقار فريد، مما يجعل التسعير والمقارنات صعبة.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"البيتكوين يُتداول عالمياً 24/7 من قبل أي شخص لديه اتصال بالإنترنت. مبيعات العقارات مقصورة على المشترين المحليين ويمكن أن تستغرق أشهراً من الأوراق للإغلاق.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"البيتكوين يتيح الملكية الفردية المباشرة لأي شخص. شراء العقارات كاستثمار بخلاف محل إقامتك الأساسي يرفع أسعار المساكن، مما يقلل القدرة على تحمل التكاليف ويغذي أزمة الإسكان.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">الأسهم</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"البيتكوين أصل مباشر تملكه بالكامل. الأسهم حصص في شركة — قيمتها تعتمد على الإدارة والأداء والقرارات التي لا يمكنك التحكم بها.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"البيتكوين لديه حد أقصى صارم قدره 21 مليون BTC. يمكن للشركات إصدار أسهم جديدة في أي وقت، مما يخفض حصص المساهمين الحاليين — على غرار كيف أن",
	"bitcoin-vs-stocks::point_2_summary_2": "تضخم",
	"bitcoin-vs-stocks::point_2_summary_3":
		" النقود الورقية يخفف من قيمة النقد. مع البيتكوين، حصتك لا تتقلص أبداً.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"البيتكوين ليس له رئيس تنفيذي ولا نقطة فشل واحدة. الأسهم تعتمد بشكل كبير على القيادة — قرار سيء أو رحيل واحد يمكن أن يحطم السعر.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"سعر البيتكوين يأتي من أسواق عالمية مفتوحة. تقييمات الأسهم تعتمد على مقاييس مثل نسب السعر إلى الأرباح التي يمكن أن تخفي أسهماً مبالغاً في تسعيرها.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"البيتكوين يُتداول 24/7 حول العالم. أسواق الأسهم مفتوحة فقط خلال ساعات العمل في أيام الأسبوع.",
	"bitcoin-vs-stocks::point_6_summary_1": "يمكنك",
	"bitcoin-vs-stocks::point_6_summary_2": "الحفظ الذاتي",
	"bitcoin-vs-stocks::point_6_summary_3":
		"للبيتكوين بتطبيق بسيط — لا حاجة إلى وسيط. الأسهم تجلس لدى شركات الوساطة، مما يعرّضك لمخاطر طرف مقابل إذا فشلت.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"العرض الثابت للبيتكوين يجعله تحوطاً موثوقاً ضد التضخم. بعض الأسهم تتفوق على التضخم، وأخرى لا — ليس هناك ضمان.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"الفرق بين <span class=\"orange\">البيتكوين</span> و<span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"البيتكوين شبكة مفتوحة يمكن لأي شخص الانضمام إليها واستخدامها بدون إذن. Visa نظام مغلق تسيطر عليه المؤسسات المالية التي يمكنها رفض الوصول — خاصة للمحرومين من الخدمات المصرفية والفقراء مصرفياً.",
	"bitcoin-vs-visa::point_2_summary_1":
		"معاملات البيتكوين ليست لها رسوم تاجر. Visa عادة تتقاضى من التجار حوالي 3% لكل معاملة — يمكن لعملك توفير المال بقبول",
	"bitcoin-vs-visa::point_2_summary_2": "مدفوعات البيتكوين",
	"bitcoin-vs-visa::point_2_summary_3": " بدلاً من ذلك.",
	"bitcoin-vs-visa::point_3_summary_1":
		"كل معاملة بيتكوين على بلوكشين عام وقابل للتدقيق. Visa تدير نظاماً مغلقاً وخاصاً حيث لا يمكن للعملاء التحقق بشكل مستقل من أي شيء.",
	"bitcoin-vs-visa::point_4_summary_1":
		"البيتكوين لا يمكن تجميده من قبل أي سلطة مركزية. Visa يمكنها تجميد الحسابات أو حظر المعاملات أو رفض الخدمة في أي وقت.",
	"bitcoin-vs-visa::point_5_summary_1":
		"البيتكوين تسوية نهائية — يمكنك إنفاق ما تملكه فقط. بطاقات الائتمان تخلق ديناً بأسعار فائدة غالباً ما تتجاوز 25% سنوياً.",
	"bitcoin-vs-visa::point_6_summary_1": "البيتكوين يتيح لك",
	"bitcoin-vs-visa::point_6_summary_2": "الحفظ الذاتي",
	"bitcoin-vs-visa::point_6_summary_3":
		"بدون الحاجة إلى بنك أو معالج دفع. بطاقات الائتمان تتطلب دائماً وسطاء.",
	"bitcoin-vs-visa::point_7_summary_1":
		"البيتكوين يعمل 24/7 عالمياً بدون ساعات عمل. Visa لها ساعات تشغيل وفترات صيانة وقيود جغرافية يمكن أن تحظر المعاملات.",
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
			// Only count as missing if this script is supposed to handle it
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
		`translate-rest-part1 (ar): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
