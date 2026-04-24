#!/usr/bin/env node
/**
 * apply-delta.js — 2026-04-24 delta refresh
 *
 * Reconciles the Step-5 locales that were already checked off in
 * V2-REDESIGN-CHECKLIST.md with the minor English copy updates from
 * commits c88d7273..ef04b2a3 (2026-04-23 → 2026-04-24):
 *
 *   - about: "Business Kit" → "Business resources" (3 keys updated)
 *   - get-involved: drop Business Kit prose, add 4 new Bitcoin
 *       Accepted Here stickers keys (7 changed + 4 added)
 *   - bitcoin-vs-cash::point_3_summary_1: wrap "India" in Wikipedia link
 *   - bitcoin-vs-fine-art::point_4_summary_1: append "without
 *       counterparty risk."
 *   - bitcoin-vs-gold::point_2_summary_1: "Most online gold" →
 *       "Online gold"
 *   - bitcoin-vs-gold::point_3_summary_1: wrap "1.6% per year" in
 *       gold.org supply/demand link
 *
 * For each of the 7 already-translated locales (af, am, ar, az, bg,
 * bn, ca) this script:
 *
 *   1. Applies the per-language translations below to the affected
 *      JSON files, preserving every other key untouched and
 *      re-ordering keys to match the English canonical order.
 *   2. Inserts the 4 new `get_involved_biz_stickers_*` keys between
 *      `get_involved_card_business_source` and
 *      `get_involved_github_header`.
 *   3. Bumps `@metadata.last-updated` to 2026-04-24.
 *   4. Rewrites the per-locale marker at
 *      `scripts/i18n-audit/v2-refresh-status/<lang>.json` to pin the
 *      new `manifestVersion` so language-diff.js treats the locale as
 *      fully current.
 *
 * Idempotent — safe to re-run.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPO_ROOT = path.resolve(__dirname, "..", "..");
const I18N_ROOT = path.join(REPO_ROOT, "i18n");
const STATUS_DIR = path.join(
	REPO_ROOT,
	"scripts",
	"i18n-audit",
	"v2-refresh-status",
);
const MANIFEST_PATH = path.join(
	REPO_ROOT,
	"scripts",
	"i18n-audit",
	"v2-manifest.json",
);
const TODAY = "2026-04-24";

const LOCALES = ["af", "am", "ar", "az", "bg", "bn", "ca"];

// ─── Translations ───────────────────────────────────────────────────
//
// Each locale has entries under the affected namespace; values are
// applied as-is (tabs preserved on write). HTML snippets include the
// exact anchor markup from the English source so the rendered link
// stays stylistically identical across locales.
const TRANSLATIONS = {
	af: {
		about: {
			about_business_blurb:
				"Ons verskaf gratis sakebronne wat dit maklik maak om plaaslike handelaars in te bring om Bitcoin te aanvaar. Ons Bitcoin-besigheidsbladsy dek hoekom Bitcoin goed is vir besigheid, hoe om 'n beursie en verkoopspunt te kies, en bied gratis 'Bitcoin Aanvaar Hier'-plakkers.",
			about_card_business_label: "Sakebronne",
			about_card_business_title:
				"Alles wat 'n besigheid nodig het om Bitcoin-betalings te begin aanvaar",
		},
		"get-involved": {
			get_involved_description:
				"Ons gratis hulpbronne maak dit makliker om Bitcoin-aanneming te versprei. Plakkers, strooibiljette, 'Bitcoin Aanvaar Hier'-plakkers vir besighede, en 'n oopbron-kodebasis waartoe enigeen kan bydra.",
			get_involved_business_content_1:
				"Wil jy help om die Bitcoin-sirkulêre ekonomie te bou? Die maklikste manier is om plaaslike besighede te help om Bitcoin-betalings te begin aanvaar.",
			get_involved_business_content_2:
				"Ken jy 'n besigheid wat dalk oop daarvoor sal wees? Stuur die eienaar na ons",
			get_involved_business_content_3: "Bitcoin-besigheidsbladsy.",
			get_involved_card_business_label: "Bitcoin vir besighede",
			get_involved_card_business_title:
				"Alles wat 'n besigheid nodig het om Bitcoin-betalings te begin aanvaar",
			// NEW
			get_involved_biz_stickers_note:
				"Aanvaar jy reeds Bitcoin? Laat kliënte weet met ons gratis 'Bitcoin Aanvaar Hier'-plakkers. Ons stuur 'n pak na enige adres in die VSA of Kanada, of jy kan jou eie oral in die wêreld druk.",
			get_involved_card_biz_stickers_label: "Aanvaar-hier-plakkers",
			get_involved_card_biz_stickers_title:
				"Gratis 'Bitcoin Aanvaar Hier'-plakkers vir jou besigheid",
			// _source handled by copy-from-existing (see applyNamespace)
		},
		"bitcoin-vs-cash": {
			point_3_summary_1:
				"Regerings kan kontant oornag ongeldig verklaar — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indië</a> het dit in 2016 gedoen. Selfs sonder demonetisering verloor kontant waarde deur",
		},
		"bitcoin-vs-fine-art": {
			point_4_summary_1:
				"Bitcoin word in 100 miljoen sats verdeel, wat dit perfek maak vir transaksies van enige grootte. Jy kan nie 'n fraksie van 'n skildery of 'n hoek van 'n beeldhouwerk besit sonder teenparty-risiko nie.",
		},
		"bitcoin-vs-gold": {
			point_2_summary_1:
				"Bitcoin is 'n digitaal-inheemse bate wat jy oor die internet kan oordra. Aanlyn goud is 'n Digitale Skuldbekentenis — jy besit net 'n belofte van 'n bewaarder, nie die metaal self nie.",
			point_3_summary_1:
				"Bitcoin het 'n harde plafon van 21 miljoen BTC. Goud se voorraad groei met ongeveer <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6% per jaar</a>, wat jou deel verklein — minder as fiat",
		},
	},
	am: {
		about: {
			about_business_blurb:
				"የአካባቢ ነጋዴዎች ቢትኮይን እንዲቀበሉ ለማገዝ ቀላል የሚያደርጉ ነፃ የንግድ ግብዓቶችን እናቀርባለን። የእኛ የቢትኮይን ንግድ ገጽ ለንግድ ሥራ ቢትኮይን ለምን ጥሩ እንደሆነ፣ ቦርሳ እና የሽያጭ ነጥብ እንዴት እንደሚመረጥ ያብራራል፣ እና ነፃ 'ቢትኮይን እዚህ ይቀበላል' ስቲከሮችን ያቀርባል።",
			about_card_business_label: "የንግድ ግብዓቶች",
			about_card_business_title:
				"ንግድ ቢትኮይን ክፍያ መቀበል ለመጀመር የሚያስፈልጋቸው ሁሉ",
		},
		"get-involved": {
			get_involved_description:
				"ነፃ ሀብቶቻችን የቢትኮይን ተቀባይነትን ለማሰራጨት ቀላል ያደርጉታል። ስቲከሮች፣ ፍላየሮች፣ ለንግዶች 'ቢትኮይን እዚህ ይቀበላል' ስቲከሮች እና ማንም ሊያበረክት የሚችልበት ክፍት-ምንጭ codebase።",
			get_involved_business_content_1:
				"የቢትኮይን ዙሪያ ኢኮኖሚ ለመገንባት መርዳት ይፈልጋሉ? ቀላሉ መንገድ የአካባቢ ንግዶች ቢትኮይን ክፍያ መቀበል እንዲጀምሩ መርዳት ነው።",
			get_involved_business_content_2:
				"ለዚህ ክፍት ሊሆን የሚችል ንግድ ያውቃሉ? ባለቤቱን ወደ የእኛ",
			get_involved_business_content_3: "ቢትኮይን ንግድ ገጽ ይላኩ።",
			get_involved_card_business_label: "ቢትኮይን ለንግድ",
			get_involved_card_business_title:
				"ንግድ ቢትኮይን ክፍያ መቀበል ለመጀመር የሚያስፈልጋቸው ሁሉ",
			// NEW
			get_involved_biz_stickers_note:
				"ቀድሞ ቢትኮይን ይቀበላሉ? ከኛ ነፃ 'ቢትኮይን እዚህ ይቀበላል' ስቲከሮች ጋር ደንበኞች እንዲያውቁ ያድርጉ። በአሜሪካ ወይም ካናዳ ውስጥ ወዳለ ማንኛውም አድራሻ አንድ ጥቅል እንልካለን፣ ወይም በዓለም ላይ በማንኛውም ቦታ የራስዎን ማተም ይችላሉ።",
			get_involved_card_biz_stickers_label: "እዚህ ይቀበላል ስቲከሮች",
			get_involved_card_biz_stickers_title:
				"ለንግድዎ ነፃ 'ቢትኮይን እዚህ ይቀበላል' ስቲከሮች",
		},
		"bitcoin-vs-cash": {
			point_3_summary_1:
				"መንግስታት ገንዘብን በአንድ ሌሊት ዋጋ አልባ ሊያደርጉት ይችላሉ — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">ህንድ</a> በ2016 አደረገች። ያለ demonetization እንኳ፣ ገንዘብ ዋጋውን ያጣል ወደ",
		},
		"bitcoin-vs-fine-art": {
			point_4_summary_1:
				"ቢትኮይን ወደ 100 ሚሊዮን ሳቶሺ ይከፋፈላል፣ ለማንኛውም መጠን ግብይት ፍጹም ያደርገዋል። ያለ የተቃራኒ ወገን ስጋት የሥዕል ክፍልፋይ ወይም የቅርጽ ማዕዘን ሊኖርዎት አይችልም።",
		},
		"bitcoin-vs-gold": {
			point_2_summary_1:
				"ቢትኮይን በኢንተርኔት ሊያስተላልፉት የሚችሉት ዲጂታል ተወላጅ ንብረት ነው። የመስመር ላይ ወርቅ ዲጂታል IOU ነው — ከጠባቂ የሚለመነዳ ቃል ብቻ ነው የሚኖርዎት፣ እራሱ ብረቱ አይደለም።",
			point_3_summary_1:
				"ቢትኮይን 21 ሚሊዮን BTC ጠንካራ ገደብ አለው። የወርቅ አቅርቦት በየዓመቱ <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1.6% ገደማ</a> ያድጋል፣ የእርስዎን ድርሻ ያሳጥራል — ከፊያት",
		},
	},
	ar: {
		about: {
			about_business_blurb:
				"نوفر موارد أعمال مجانية تسهّل إشراك التجار المحليين لقبول البيتكوين. تغطي صفحة أعمال البيتكوين لدينا لماذا البيتكوين جيد للأعمال، وكيفية اختيار محفظة ونقطة بيع، وتوفر ملصقات مجانية 'البيتكوين مقبول هنا'.",
			about_card_business_label: "موارد الأعمال",
			about_card_business_title:
				"كل ما يحتاجه العمل التجاري لبدء قبول مدفوعات البيتكوين",
		},
		"get-involved": {
			get_involved_description:
				"مواردنا المجانية تسهّل نشر تبني البيتكوين. ملصقات ومنشورات وملصقات 'البيتكوين مقبول هنا' للأعمال وقاعدة كود مفتوحة المصدر يمكن لأي شخص المساهمة فيها.",
			get_involved_business_content_1:
				"تريد المساعدة في بناء اقتصاد البيتكوين الدائري؟ أسهل طريقة هي مساعدة الأعمال المحلية على بدء قبول مدفوعات البيتكوين.",
			get_involved_business_content_2:
				"هل تعرف عملاً تجارياً قد يكون منفتحاً على ذلك؟ أرسل المالك إلى",
			get_involved_business_content_3: "صفحة أعمال البيتكوين الخاصة بنا.",
			get_involved_card_business_label: "البيتكوين للأعمال",
			get_involved_card_business_title:
				"كل ما يحتاجه العمل التجاري لبدء قبول مدفوعات البيتكوين",
			// NEW
			get_involved_biz_stickers_note:
				"تقبل البيتكوين بالفعل؟ أعلم عملاءك بذلك من خلال ملصقاتنا المجانية 'البيتكوين مقبول هنا'. سنشحن حزمة إلى أي عنوان في الولايات المتحدة أو كندا، أو يمكنك طباعة ملصقاتك الخاصة في أي مكان في العالم.",
			get_involved_card_biz_stickers_label: "ملصقات مقبول هنا",
			get_involved_card_biz_stickers_title:
				"ملصقات مجانية 'البيتكوين مقبول هنا' لعملك",
		},
		"bitcoin-vs-cash": {
			point_3_summary_1:
				"يمكن للحكومات إبطال النقد بين عشية وضحاها — فعلت <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">الهند</a> ذلك في 2016. حتى بدون سحب العملة، يفقد النقد قيمته بسبب",
		},
		"bitcoin-vs-fine-art": {
			point_4_summary_1:
				"البيتكوين ينقسم إلى 100 مليون ساتوشي، مما يجعله مثالياً لأي حجم معاملة. لا يمكنك امتلاك جزء من لوحة أو زاوية من منحوتة دون مخاطر الطرف المقابل.",
		},
		"bitcoin-vs-gold": {
			point_2_summary_1:
				"البيتكوين أصل رقمي أصلي يمكنك نقله عبر الإنترنت. الذهب على الإنترنت هو سند رقمي — أنت تملك فقط وعداً من وصي، وليس المعدن نفسه.",
			point_3_summary_1:
				"البيتكوين لديه حد أقصى صارم قدره 21 مليون BTC. عرض الذهب ينمو بحوالي <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1.6% سنوياً</a>، مما يقلص حصتك — أقل من",
		},
	},
	az: {
		about: {
			about_business_blurb:
				"Biz yerli tacirlərə Bitcoin qəbul etməyi asanlaşdıran pulsuz biznes resursları təqdim edirik. Bitcoin biznes səhifəmiz Bitcoin-in biznes üçün nə üçün yaxşı olduğunu, cüzdan və satış nöqtəsinin necə seçiləcəyini əhatə edir və pulsuz 'Burada Bitcoin Qəbul Edilir' stikerləri təklif edir.",
			about_card_business_label: "Biznes resursları",
			about_card_business_title:
				"Bitcoin ödənişləri qəbul etməyə başlamaq üçün biznesin ehtiyac duyduğu hər şey",
		},
		"get-involved": {
			get_involved_description:
				"Pulsuz resurslarımız Bitcoin qəbulunu yaymağı asanlaşdırır. Stikerlər, vərəqələr, bizneslər üçün 'Burada Bitcoin Qəbul Edilir' stikerləri və hər kəsin töhfə verə biləcəyi açıq mənbəli kod bazası.",
			get_involved_business_content_1:
				"Bitcoin dairəvi iqtisadiyyatını qurmağa kömək etmək istəyirsiniz? Ən asan yol yerli bizneslərə Bitcoin ödənişləri qəbul etməyə başlamağa kömək etməkdir.",
			get_involved_business_content_2:
				"Buna açıq ola biləcək bir biznes tanıyırsınız? Sahibini bizim",
			get_involved_business_content_3: "Bitcoin biznes səhifəmizə göndərin.",
			get_involved_card_business_label: "Biznes üçün Bitcoin",
			get_involved_card_business_title:
				"Bitcoin ödənişləri qəbul etməyə başlamaq üçün biznesin ehtiyac duyduğu hər şey",
			// NEW
			get_involved_biz_stickers_note:
				"Artıq Bitcoin qəbul edirsiniz? Müştərilərinizə pulsuz 'Burada Bitcoin Qəbul Edilir' stikerlərimizlə bildirin. ABŞ və ya Kanadada istənilən ünvana bir paket göndərəcəyik, və ya dünyanın istənilən yerində özünüzünkini çap edə bilərsiniz.",
			get_involved_card_biz_stickers_label: "Qəbul edilir stikerləri",
			get_involved_card_biz_stickers_title:
				"Biznesiniz üçün pulsuz 'Burada Bitcoin Qəbul Edilir' stikerləri",
		},
		"bitcoin-vs-cash": {
			point_3_summary_1:
				"Hökumətlər nağdı bir gecədə ləğv edə bilər — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Hindistan</a> bunu 2016-cı ildə etdi. Hətta valyuta çıxarılması olmadan belə, nağd dəyərini itirir",
		},
		"bitcoin-vs-fine-art": {
			point_4_summary_1:
				"Bitcoin 100 milyon satoshi-yə bölünür, istənilən tranzaksiya ölçüsü üçün ideal edir. Qarşı tərəf riski olmadan rəsmin hissəsinə və ya heykəlin küncünə sahib ola bilməzsiniz.",
		},
		"bitcoin-vs-gold": {
			point_2_summary_1:
				"Bitcoin internet üzərindən köçürə biləcəyiniz yerli rəqəmsal aktivdir. İnternetdəki qızıl rəqəmsal qəbzdir — siz yalnız nəzarətçidən bir vəd sahibsiniz, metalın özü deyil.",
			point_3_summary_1:
				"Bitcoin-in 21 milyon BTC-lik sərt limiti var. Qızılın təklifi ildə təxminən <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1.6%</a> artır, payınızı kiçildir — kağız puldan",
		},
	},
	bg: {
		about: {
			about_business_blurb:
				"Предоставяме безплатни бизнес ресурси, които улесняват местните търговци да приемат Bitcoin. Нашата Bitcoin бизнес страница обяснява защо Bitcoin е добър за бизнеса, как да се избере портфейл и точка за продажба, и предлага безплатни стикери 'Тук приемаме Bitcoin'.",
			about_card_business_label: "Бизнес ресурси",
			about_card_business_title:
				"Всичко, от което един бизнес се нуждае, за да започне да приема Bitcoin плащания",
		},
		"get-involved": {
			get_involved_description:
				"Нашите безплатни ресурси улесняват разпространението на Bitcoin. Стикери, листовки, стикери 'Тук приемаме Bitcoin' за бизнеса и отворен код, към който всеки може да допринесе.",
			get_involved_business_content_1:
				"Искате ли да помогнете за изграждането на Bitcoin кръговата икономика? Най-лесният начин е да помогнете на местните фирми да започнат да приемат Bitcoin плащания.",
			get_involved_business_content_2:
				"Познавате ли бизнес, който може да е отворен за това? Изпратете собственика на нашата",
			get_involved_business_content_3: "Bitcoin бизнес страница.",
			get_involved_card_business_label: "Bitcoin за бизнеса",
			get_involved_card_business_title:
				"Всичко, от което един бизнес се нуждае, за да започне да приема Bitcoin плащания",
			// NEW
			get_involved_biz_stickers_note:
				"Вече приемате Bitcoin? Уведомете клиентите с нашите безплатни стикери 'Тук приемаме Bitcoin'. Ще изпратим пакет до всеки адрес в САЩ или Канада, или можете сами да отпечатате навсякъде по света.",
			get_involved_card_biz_stickers_label: "Стикери 'Тук приемаме'",
			get_involved_card_biz_stickers_title:
				"Безплатни стикери 'Тук приемаме Bitcoin' за вашия бизнес",
		},
		"bitcoin-vs-cash": {
			point_3_summary_1:
				"Правителствата могат да демонетизират кеша за една нощ — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Индия</a> направи точно това през 2016 г. Дори без изтегляне от обращение кешът губи стойност поради",
		},
		"bitcoin-vs-fine-art": {
			point_4_summary_1:
				"Bitcoin се дели на 100 милиона сатоши, което го прави идеален за всеки размер транзакция. Не можете да притежавате парче от картина или ъгъл от скулптура без риск от контрагент.",
		},
		"bitcoin-vs-gold": {
			point_2_summary_1:
				"Bitcoin е роден цифров актив, който можете да прехвърляте през интернет. Златото онлайн е цифрова разписка — притежавате само обещание от пазач, а не самия метал.",
			point_3_summary_1:
				"Bitcoin има твърд лимит от 21 милиона BTC. Предлагането на злато нараства с около <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6% годишно</a>, свивайки дела ви — по-малко от",
		},
	},
	bn: {
		about: {
			about_business_blurb:
				"আমরা বিনামূল্যে ব্যবসায়িক সম্পদ প্রদান করি যা স্থানীয় ব্যবসায়ীদের Bitcoin গ্রহণ করা সহজ করে তোলে। আমাদের Bitcoin ব্যবসায়িক পৃষ্ঠা ব্যাখ্যা করে কেন Bitcoin ব্যবসার জন্য ভালো, কিভাবে ওয়ালেট এবং পয়েন্ট-অফ-সেল বেছে নিতে হয়, এবং বিনামূল্যে 'Bitcoin এখানে গৃহীত' স্টিকার প্রদান করে।",
			about_card_business_label: "ব্যবসায়িক সম্পদ",
			about_card_business_title:
				"Bitcoin পেমেন্ট গ্রহণ শুরু করতে একটি ব্যবসার যা কিছু প্রয়োজন",
		},
		"get-involved": {
			get_involved_description:
				"আমাদের বিনামূল্যে সংস্থানগুলি Bitcoin ছড়িয়ে দেওয়া সহজ করে তোলে। স্টিকার, লিফলেট, ব্যবসার জন্য 'Bitcoin এখানে গৃহীত' স্টিকার এবং ওপেন সোর্স যা যে কেউ অবদান রাখতে পারেন।",
			get_involved_business_content_1:
				"Bitcoin সার্কুলার ইকোনমি গড়ে তুলতে সাহায্য করতে চান? সবচেয়ে সহজ উপায় হল স্থানীয় ব্যবসাগুলিকে Bitcoin পেমেন্ট গ্রহণ শুরু করতে সাহায্য করা।",
			get_involved_business_content_2:
				"এমন কোনো ব্যবসা জানেন যা এতে আগ্রহী হতে পারে? মালিককে আমাদের",
			get_involved_business_content_3:
				"Bitcoin ব্যবসায়িক পৃষ্ঠায় পাঠান।",
			get_involved_card_business_label: "ব্যবসার জন্য Bitcoin",
			get_involved_card_business_title:
				"Bitcoin পেমেন্ট গ্রহণ শুরু করতে একটি ব্যবসার যা কিছু প্রয়োজন",
			// NEW
			get_involved_biz_stickers_note:
				"ইতিমধ্যে Bitcoin গ্রহণ করছেন? আমাদের বিনামূল্যে 'Bitcoin এখানে গৃহীত' স্টিকার দিয়ে গ্রাহকদের জানান। আমরা মার্কিন যুক্তরাষ্ট্র বা কানাডার যেকোনো ঠিকানায় একটি প্যাক পাঠাব, অথবা আপনি বিশ্বের যেকোনো জায়গায় নিজেরাই প্রিন্ট করতে পারেন।",
			get_involved_card_biz_stickers_label: "এখানে গৃহীত স্টিকার",
			get_involved_card_biz_stickers_title:
				"আপনার ব্যবসার জন্য বিনামূল্যে 'Bitcoin এখানে গৃহীত' স্টিকার",
		},
		"bitcoin-vs-cash": {
			point_3_summary_1:
				"সরকারগুলি রাতারাতি নগদ অপ্রচলিত করতে পারে — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">ভারত</a> ২০১৬ সালে ঠিক তাই করেছিল। এমনকি বিমুদ্রাকরণ ছাড়াও, নগদ মূল্য হারায়",
		},
		"bitcoin-vs-fine-art": {
			point_4_summary_1:
				"Bitcoin ১০০ মিলিয়ন সাতোশিতে ভাগ হয়, যেকোনো আকারের লেনদেনের জন্য এটি নিখুঁত করে তোলে। প্রতিপক্ষের ঝুঁকি ছাড়া আপনি একটি চিত্রকর্মের একটি অংশ বা একটি ভাস্কর্যের কোণা মালিকানা পেতে পারবেন না।",
		},
		"bitcoin-vs-gold": {
			point_2_summary_1:
				"Bitcoin একটি নেটিভ ডিজিটাল সম্পদ যা আপনি ইন্টারনেটে স্থানান্তর করতে পারেন। অনলাইন স্বর্ণ একটি ডিজিটাল রশিদ — আপনি কেবল একজন হেফাজতকারীর প্রতিশ্রুতি রাখেন, ধাতু নিজেই নয়।",
			point_3_summary_1:
				"Bitcoin-এর ২১ মিলিয়ন BTC-এর একটি কঠোর সীমা রয়েছে। স্বর্ণ সরবরাহ প্রতি বছর প্রায় <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">১.৬%</a> বৃদ্ধি পায়, আপনার অংশ সংকুচিত করে — ফিয়াটের",
		},
	},
	ca: {
		about: {
			about_business_blurb:
				"Oferim recursos gratuïts per a empreses que fan que sigui fàcil per a les empreses locals començar a acceptar Bitcoin. La nostra pàgina de Bitcoin per a empreses explica per què Bitcoin és bo per al negoci, com triar una cartera i un punt de venda, i ofereix adhesius gratuïts 'Aquí s'accepta Bitcoin'.",
			about_card_business_label: "Recursos per a empreses",
			about_card_business_title:
				"Tot el que necessita una empresa per començar a acceptar pagaments en Bitcoin",
		},
		"get-involved": {
			get_involved_description:
				"Els nostres recursos gratuïts faciliten difondre Bitcoin. Adhesius, fulletons, adhesius 'Aquí s'accepta Bitcoin' per a empreses i codi obert al qual qualsevol pot contribuir.",
			get_involved_business_content_1:
				"Vols ajudar a construir l'economia circular de Bitcoin? La manera més fàcil és ajudar els negocis locals a començar a acceptar pagaments en Bitcoin.",
			get_involved_business_content_2:
				"Coneixes algun negoci que hi podria estar obert? Envia el propietari a la nostra",
			get_involved_business_content_3: "pàgina de Bitcoin per a empreses.",
			get_involved_card_business_label: "Bitcoin per a empreses",
			get_involved_card_business_title:
				"Tot el que necessita una empresa per començar a acceptar pagaments en Bitcoin",
			// NEW
			get_involved_biz_stickers_note:
				"Ja acceptes Bitcoin? Fes-ho saber als clients amb els nostres adhesius gratuïts 'Aquí s'accepta Bitcoin'. Enviarem un paquet a qualsevol adreça dels EUA o Canadà, o pots imprimir els teus propis a qualsevol lloc del món.",
			get_involved_card_biz_stickers_label: "Adhesius 's'accepta aquí'",
			get_involved_card_biz_stickers_title:
				"Adhesius gratuïts 'Aquí s'accepta Bitcoin' per al teu negoci",
		},
		"bitcoin-vs-cash": {
			point_3_summary_1:
				"Els governs poden fer que l'efectiu quedi obsolet de la nit al dia — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">l'Índia</a> ho va fer exactament el 2016. Fins i tot sense retirar-lo de la circulació, l'efectiu perd valor per la",
		},
		"bitcoin-vs-fine-art": {
			point_4_summary_1:
				"Bitcoin es divideix en 100 milions de satoshis, fent-lo perfecte per a transaccions de qualsevol mida. No pots posseir una part d'una pintura o una cantonada d'una escultura sense risc de contrapart.",
		},
		"bitcoin-vs-gold": {
			point_2_summary_1:
				"Bitcoin és un actiu digital nadiu que pots transferir per Internet. L'or en línia és un rebut digital — només tens la promesa d'un custodi, no el metall en si.",
			point_3_summary_1:
				"Bitcoin té un límit estricte de 21 milions de BTC. L'oferta d'or creix aproximadament un <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6% anual</a>, reduint la teva part — menys que la",
		},
	},
};

// ─── Helpers ────────────────────────────────────────────────────────

function readJson(filePath) {
	return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, obj) {
	fs.writeFileSync(filePath, JSON.stringify(obj, null, "\t") + "\n", "utf8");
}

function nsFilePath(lang, ns) {
	// ns may be "about", "get-involved", "bitcoin-vs-cash", etc. No
	// nesting for these deltas.
	return path.join(I18N_ROOT, lang, `${ns}_${lang}.json`);
}

function enFilePath(ns) {
	return path.join(I18N_ROOT, "en", `${ns}_en.json`);
}

/**
 * Apply a patch object `{ key: value }` to the target JSON file.
 * Re-orders keys to match the English canonical order (so newly
 * inserted keys end up in the right position). Bumps
 * `@metadata.last-updated` to TODAY.
 */
function applyNamespace(lang, ns, patch) {
	const filePath = nsFilePath(lang, ns);
	if (!fs.existsSync(filePath)) {
		console.error(`  ✗ ${lang}/${ns}: file not found (${filePath})`);
		return { touched: false, added: 0, changed: 0 };
	}
	const target = readJson(filePath);
	const english = readJson(enFilePath(ns));
	const englishKeyOrder = Object.keys(english); // preserves @metadata first

	let added = 0;
	let changed = 0;

	// Apply patches into a working object, tracking delta counts.
	const working = { ...target };
	for (const [key, value] of Object.entries(patch)) {
		if (!(key in working)) {
			working[key] = value;
			added++;
		} else if (working[key] !== value) {
			working[key] = value;
			changed++;
		}
	}

	// Specially handle _source: if the key is new in English and the
	// target has an existing `get_involved_card_business_source`, reuse
	// it so we don't have to re-translate "Source: bitcoin.rocks →"
	// per locale.
	if (ns === "get-involved" && !("get_involved_card_biz_stickers_source" in working)) {
		const reuse = working.get_involved_card_business_source;
		if (typeof reuse === "string" && reuse.length > 0) {
			working.get_involved_card_biz_stickers_source = reuse;
			added++;
		} else {
			// English fallback
			working.get_involved_card_biz_stickers_source =
				english.get_involved_card_biz_stickers_source;
			added++;
		}
	}

	// Bump metadata.last-updated.
	if (!working["@metadata"]) working["@metadata"] = {};
	working["@metadata"]["last-updated"] = TODAY;

	// Rebuild in English canonical order: @metadata first, then every
	// English key, then any stragglers that English doesn't have (none
	// expected, but belt-and-braces).
	const rebuilt = {};
	if ("@metadata" in working) rebuilt["@metadata"] = working["@metadata"];
	for (const key of englishKeyOrder) {
		if (key === "@metadata") continue;
		if (key in working) rebuilt[key] = working[key];
	}
	// Keep any extras that English doesn't have at the end.
	for (const key of Object.keys(working)) {
		if (key === "@metadata") continue;
		if (key in rebuilt) continue;
		rebuilt[key] = working[key];
	}

	writeJson(filePath, rebuilt);
	return { touched: true, added, changed };
}

function updateMarker(lang, manifestVersion) {
	const markerPath = path.join(STATUS_DIR, `${lang}.json`);
	const now = new Date().toISOString();
	const marker = {
		lang,
		manifestVersion,
		appliedAt: now,
		note: "Refreshed via scripts/delta-refresh-2026-04-24/apply-delta.js",
	};
	writeJson(markerPath, marker);
}

function main() {
	if (!fs.existsSync(MANIFEST_PATH)) {
		console.error(`  ✗ Missing manifest at ${MANIFEST_PATH}`);
		process.exit(2);
	}
	const manifest = readJson(MANIFEST_PATH);
	const manifestVersion = manifest.manifestVersion;

	console.log(`Applying 2026-04-24 delta to ${LOCALES.length} locales.`);
	console.log(`Pinning to manifest version ${manifestVersion.slice(0, 16)}...`);
	console.log("");

	const summary = [];
	for (const lang of LOCALES) {
		const patches = TRANSLATIONS[lang];
		if (!patches) {
			console.error(`  ✗ ${lang}: no translation patches defined`);
			continue;
		}
		let addedTotal = 0;
		let changedTotal = 0;
		let namespacesTouched = 0;
		for (const [ns, patch] of Object.entries(patches)) {
			const { touched, added, changed } = applyNamespace(lang, ns, patch);
			if (!touched) continue;
			namespacesTouched++;
			addedTotal += added;
			changedTotal += changed;
		}
		updateMarker(lang, manifestVersion);
		summary.push({
			lang,
			namespacesTouched,
			added: addedTotal,
			changed: changedTotal,
		});
		console.log(
			`  ✓ ${lang.padEnd(3)}  ${namespacesTouched} namespaces | +${addedTotal} added / ~${changedTotal} changed | marker bumped`,
		);
	}

	console.log("");
	console.log("Done. Summary:");
	for (const row of summary) {
		console.log(
			`  ${row.lang.padEnd(3)}  namespaces=${row.namespacesTouched}  added=${row.added}  changed=${row.changed}`,
		);
	}
}

main();
