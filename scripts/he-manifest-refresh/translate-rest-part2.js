#!/usr/bin/env node
/**
 * Hebrew manifest refresh — part 2 of non-inflation namespaces.
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
	"he.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"שירותי הנהלת חשבונות Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10$",
	"business/accounting::accounting_example_loss_result": "−10$",
	"business/accounting::accounting_description":
		"מדריך פשוט להנהלת חשבונות עבור תשלומי ביטקוין — ארנקים היברידיים, בסיס עלות, רווחי הון ומתי לפנות לרואה החשבון שלך.",
	"business/accounting::accounting_s1_c1":
		"הדרך הקלה ביותר לקבל ביטקוין היא להשתמש בארנק היברידי: הוא ממיר אוטומטית 100% מהביטקוין שמתקבל לדולרים (או למטבע המקומי שלך) ברגע שהתשלום מגיע.",
	"business/accounting::accounting_s1_c2":
		"עם ההגדרה הזאת, הנהלת החשבונות שלך נראית כמו שהיא נראית היום — הסכום הסופי תמיד בדולרים. אין בסיס עלות, אין רווחי הון, אין גיליונות אלקטרוניים חדשים.",
	"business/accounting::accounting_s2":
		"אם אתה שומר חלק מהביטקוין: עקוב אחר בסיס העלות שלך",
	"business/accounting::accounting_s2_c1":
		"חלק מהעסקים בוחרים לשמור חלק מהביטקוין שמתקבל, במקום להמיר אוטומטית את הכל. אם אתה אחד מהם, השלב הנוסף הוא לעקוב אחר בסיס העלות — ערך הדולר של כל תשלום ביטקוין ביום שקיבלת אותו.",
	"business/accounting::accounting_s2_c2":
		"גם אם אתה מודד את העסק שלך רק בביטקוין, רוב רשויות המס עדיין דורשות שתדווח גם על ערך הדולר. החדשות הטובות: יש רק שני מספרים לכל עסקה — כמות הביטקוין שהתקבלה וערכה בדולר באותו יום.",
	"business/accounting::accounting_s2_c3":
		"השתמש בכלים שלמטה כדי להפוך לאוטומטיות את חיפושי המחירים, כך שלא תצטרך לבדוק מחירים בכל יום.",
	"business/accounting::accounting_s3":
		"להוציא או למכור ביטקוין שנשמר",
	"business/accounting::accounting_s3_c1":
		"אם אתה ממיר אוטומטית כל תשלום לדולרים, דלג על החלק הזה — הוא לא רלוונטי לך.",
	"business/accounting::accounting_s3_c2":
		"שמרת קצת ביטקוין ואתה מחליט להוציא או למכור אותו מאוחר יותר, הוסף את מחיר המכירה לאותו גיליון אלקטרוני יחד עם בסיס העלות. ההפרש בין עלות הביטקוין כשקיבלת אותו לבין המחיר כשהוצאת או מכרת אותו הוא רווח או הפסד הון.",
	"business/accounting::accounting_s3_c3": "שתי דוגמאות מהירות:",
	"business/accounting::accounting_s4":
		"מחפש מומחה שמבין ביטקוין?",
	"business/accounting::accounting_s4_c1":
		"אם אתה מעדיף להעביר את זה למישהו אחר — או אם הנהלת החשבונות של הביטקוין שלך מורכבת יותר ממה שארנק היברידי יכול לטפל — אנחנו ממליצים בחום על Satoshi Pacioli Accounting Services, חברה שמתמחה בהנהלת חשבונות ביטקוין לעסקים.",
	"business/accounting::bitcoin_business_accounting_guide":
		"הנהלת חשבונות ביטקוין לעסק שלך",
	"business/accounting::accounting_card_bpr_label": "מחיר ביטקוין",
	"business/accounting::accounting_card_bpr_title":
		"חפש מחירים נוכחיים או היסטוריים של ביטקוין בדולרים",
	"business/accounting::accounting_card_pacioli_label":
		"רואה חשבון ביטקוין",
	"business/accounting::accounting_card_spreadsheet_label":
		"ייבוא ל-Excel",
	"business/accounting::accounting_card_spreadsheet_title":
		"ייבא מחירי ביטקוין אוטומטית ל-Excel",
	"business/accounting::accounting_card_wallets_label":
		"ארנקים היברידיים",
	"business/accounting::accounting_card_wallets_title":
		"ראה את הארנקים שאנחנו ממליצים עליהם לעסקים",
	"business/accounting::accounting_disclaimer":
		"המדריך הזה הוא למידע בלבד ואינו מהווה ייעוץ מס. התייעץ עם רואה חשבון מוסמך לקבלת ייעוץ מס ספציפי לסיטואציה שלך.",
	"business/accounting::accounting_disclaimer_label": "כתב הויתור",
	"business/accounting::accounting_example_feb_1": "1 בפברואר",
	"business/accounting::accounting_example_gain_badge":
		"רווח הון",
	"business/accounting::accounting_example_gain_explain":
		"אתה מתעד רווח הון של 10 דולר.",
	"business/accounting::accounting_example_jan_1": "1 בינואר",
	"business/accounting::accounting_example_loss_badge":
		"הפסד הון",
	"business/accounting::accounting_example_loss_explain":
		"אתה מתעד הפסד הון של 10 דולר.",
	"business/accounting::accounting_example_received_label": "התקבל",
	"business/accounting::accounting_example_sold_label":
		"נמכר או הוצא",
	"business/accounting::accounting_hero_subtitle":
		"קבלת ביטקוין בעסק שלך לא חייבת לסבך את הנהלת החשבונות שלך. הנה הגרסה הקצרה — בתוספת כלים ומומחים שיהפכו את זה לקל יותר.",
	"business/accounting::accounting_intro_c1":
		"אם אתה כבר מקבל מזומן או כרטיסים, להוסיף ביטקוין להנהלת החשבונות של העסק שלך הוא קל יותר ממה שאתה חושב. יש לך שתי אפשרויות: להמיר אוטומטית כל תשלום ביטקוין לדולרים ברגע שהוא מגיע (אין צורך בהנהלת חשבונות חדשה), או לשמור חלק בביטקוין (תצטרך לעקוב אחר כמה מספרים נוספים).",
	"business/accounting::accounting_intro_c2":
		"המדריך הזה מסביר את שתי הדרכים — כך שתוכל לבחור את הדרך שמתאימה לעסק שלך ולהתחיל לקבל ביטקוין בביטחון.",
	"business/accounting::accounting_s1":
		"הדרך הקלה: המרה אוטומטית לדולרים",
	"business/accounting::accounting_s3_c6":
		"וזהו. זאת אותה מתמטיקה בסיסית שאתה משתמש בה לכל נכס אחר שערכו עולה ויורד.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — מחיר נוכחי והיסטורי של ביטקוין בדולרים",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — הנהלת חשבונות ביטקוין לעסקים",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — ייבוא מחירי קריפטו ל-Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"תשובות קצרות לשאלות שסוחרים בדרך כלל שואלים לפני שהם מתחילים לקבל ביטקוין — עמלות, סילוק, ארנקים, החזרים, עלויות והרבה יותר.",
	"business/faq::faq_intro_c1":
		"לחץ על כל שאלה למטה כדי להציג את התשובה. כשתהיה מוכן להתחיל לקבל ביטקוין, כלי העסקים בתחתית הדף ידריכו אותך צעד אחר צעד.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "הנהלת חשבונות",
	"business/index::biz_label_faq": "שאלות נפוצות",
	"business/index::biz_label_maps": "מפות סוחרים",
	"business/index::biz_label_rewards": "הטבות",
	"business/index::biz_label_stickers": "מדבקות",
	"business/index::biz_label_wallets": "ארנקים",
	"business/index::biz_meta_description":
		"קבל ביטקוין בעסק שלך עם עמלות נמוכות יותר, סילוק מיידי, ללא החזרים וגישה ליותר לקוחות.",
	"business/index::business_hero_subtitle":
		"קבל תשלומים עם עמלות נמוכות יותר, סלק מיידית והגע למיליוני לקוחות חדשים — ללא חוזים או עלויות נסתרות.",
	"business/index::business_intro_c1":
		"ביטקוין נותן לעסק שלך דרך מהירה יותר, זולה יותר ופרטית יותר לקבל תשלום. ללא מתווכים. ללא החזרים. ללא עלויות מפתיעות. כסף שמסתלק תוך שניות, ישירות מהלקוח אליך.",
	"business/index::business_intro_c2":
		"להלן הגרסה הקצרה של למה ביטקוין הוא טוב לעסק — ולמטה, כל הכלים שאתה צריך כדי להתחיל היום.",
	"business/index::business_resources_heading":
		"כל מה שאתה צריך כדי לקבל ביטקוין",
	"business/index::business_resources_intro":
		"עבוד דרך המשאבים האלה בקצב שלך. כל אחד הוא מדריך מעשי קצר.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"ספר לנו על העסק שלך",
	"business/maps::biz_maps_form_intro":
		"אנחנו צריכים רק כמה פרטים כדי לשים אותך על המפה. נתוני הכתובת נשמרים רק לזמן שנדרש כדי לשלוח את העסק שלך למפות הסוחרים.",
	"business/maps::biz_maps_hero_subtitle":
		"הוסף את העסק שלך ל-BTC Map בחינם — מדריך גלובלי פתוח לסוחרים שמקבלים ביטקוין — כדי שמשתמשי ביטקוין מקומיים יוכלו למצוא אותך ולהוציא ביטקוין בעסק שלך.",
	"business/maps::biz_maps_hero_title":
		"שים את העסק שלך על מפות הסוחרים של ביטקוין",
	"business/maps::biz_maps_intro_c1":
		"משתמשי ביטקוין מחפשים באופן פעיל מקומות להוציא בהם את הכסף שלהם. הופעה על המפה שמה את העסק שלך לעיני כל משתמש ביטקוין שמחפש בקרבת מקום אוכל, קניות או לינה — לגמרי בחינם.",
	"business/maps::biz_maps_intro_c2":
		"מלא את הטופס הקצר למטה ואנחנו נשלח את העסק שלך ל-BTC Map ולמפות סוחרי ביטקוין אחרות.",
	"business/maps::biz_maps_meta_description":
		"הוסף את העסק שלך ל-BTC Map ולמפות סוחרי ביטקוין אחרות בחינם כדי שמשתמשי ביטקוין מקומיים יוכלו למצוא אותך.",
	"business/maps::biz_maps_placeholder_address": "רחוב ומספר בית",
	"business/maps::biz_maps_placeholder_category":
		"קטגוריה (למשל מסעדה, בית קפה, מלון)",
	"business/maps::biz_maps_placeholder_city": "עיר",
	"business/maps::biz_maps_placeholder_country": "מדינה",
	"business/maps::biz_maps_placeholder_name": "שם העסק",
	"business/maps::biz_maps_placeholder_region":
		"אזור / מחוז / מדינה",
	"business/maps::biz_maps_placeholder_website": "אתר אינטרנט (אופציונלי)",
	"business/maps::biz_maps_view_map_cta": "צפה ב-BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "צפה ב-BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"תודה ששלחת את העסק שלך. בקרוב נשים אותך על מפות סוחרי הביטקוין.",
	"business/maps-success::biz_maps_success_hero_title":
		"הבקשה התקבלה 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"אנחנו נוסיף את העסק שלך ל-BTC Map ולמדריכי סוחרי ביטקוין אחרים בתוך 1-2 שבועות. אנחנו בודקים כל הגשה ידנית כדי לשמור על דיוק המפות.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"כשהרישום שלך יעלה לאוויר, משתמשי ביטקוין מקומיים ימצאו את העסק שלך ויבואו להוציא ביטקוין שם.",
	"business/maps-success::biz_maps_success_timeline_header":
		"מה הצעד הבא",
	"business/maps-success::biz_maps_success_view_c1":
		"בזמן שאתה מחכה, תסתכל ב-BTC Map כדי לראות את הרשת הגדלה של עסקים שמקבלים ביטקוין ברחבי העולם.",
	"business/maps-success::biz_maps_success_view_header":
		"ראה איפה תופיע",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"הורד את קבצי המדבקות האנגליים של \"מקבלים כאן ביטקוין\" כדי להדפיס מדבקות משלך.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"הדפס את המדבקות שלך \"מקבלים כאן ביטקוין\" באנגלית, כדי לתת ללקוחות שלך לדעת שאתה מקבל ביטקוין.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"הורד קבצי מדבקות אנגליות של \"מקבלים כאן ביטקוין\"",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"תודה שביקשת קבצי מדבקות \"מקבלים כאן ביטקוין\" בשפה שלך.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"הבקשה התקבלה 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"אנחנו ניצור ונפרסם את קבצי המדבקות שלך תוך 3-4 שבועות. כשהם יהיו מוכנים, תוכל להוריד אותם בחינם להדפסה מדף קבצי המדבקות שלנו.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"אנחנו מפרסמים קבצי מדבקות במנות, אז זה עשוי לקחת כמה שבועות עד שהשפה שלך תופעל. תודה על הסבלנות!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"מה הצעד הבא",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"הזמנה בכמות גדולה",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"בקש חבילה חינמית נוספת",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"תקבל את המדבקות החינמיות שלך \"מקבלים כאן ביטקוין\" תוך 2-4 שבועות במעטפה לבנה פשוטה עם 3 מדבקות.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"המדבקות שלך בדרך 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"אם 3 מדבקות לא מספיק לעסק שלך, אתה חופשי לבקש עוד חבילה חינמית — או להזמין בכמות גדולה מאותה מדפסת שאנחנו משתמשים בה.",
	"business/sticker-success::biz_sticker_success_more_header":
		"צריך עוד מדבקות?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"על דלת הכניסה הראשית או חלון הראווה שלך, כדי שלקוחות יראו את זה לפני שהם נכנסים",
	"business/sticker-success::biz_sticker_success_tip_2":
		"ליד הקופה, מסוף התשלום או כל מקום שלקוחות משלמים בו",
	"business/sticker-success::biz_sticker_success_tip_3":
		"על תפריטים, רשימות מחירים או קופסת הטיפ",
	"business/sticker-success::biz_sticker_success_tip_4":
		"אל תשים מדבקות במקומות שאינם שלך או שאין לך רשות להדביק בהם",
	"business/sticker-success::biz_sticker_success_tips_header":
		"מקומות טובים לשים מדבקה",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"תן ללקוחות שלך לדעת שאתה מקבל ביטקוין. בקש חבילה חינמית של מדבקות \"מקבלים כאן ביטקוין\" להציב במקום שלך.",
	"business/stickers::biz_stickers_hero_title":
		"מדבקות חינם של \"מקבלים כאן ביטקוין\"",
	"business/stickers::biz_stickers_intro_c1":
		"קבלת ביטקוין היא רק חצי מהעבודה — הלקוחות שלך גם צריכים לדעת. המדבקות הקטנות האלה של \"מקבלים כאן ביטקוין\" מתוכננות להיות מודבקות על דלת הכניסה, הקופה, התפריט או כל מקום שלקוחות משלמים בו.",
	"business/stickers::biz_stickers_intro_c2":
		"אנחנו שולחים חבילה אחת בחינם לכל כתובת בארה\"ב או קנדה, או שאתה יכול להדפיס את המדבקות שלך בכל מקום בעולם.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 קנדה — דואר חינם",
	"business/stickers::biz_stickers_option_print":
		"🌍 גלובלי — הדפס בעצמך",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 ארה\"ב — דואר חינם",
	"business/stickers::biz_stickers_placeholder_translation1":
		"תרגום הביטוי \"Bitcoin Accepted Here\"",
	"business/stickers::biz_stickers_placeholder_translation2":
		"תרגום הביטוי \"Scan to learn why Bitcoin is good for business.\"",
	"business/stickers::biz_stickers_print_c1":
		"אתה יכול להדפיס את המדבקות שלך \"מקבלים כאן ביטקוין\", בכל מקום בעולם שאתה גר. לחץ על השפה שלך למטה כדי להוריד את קבצי המדבקות והוראות ההדפסה.",
	"business/stickers::biz_stickers_print_header":
		"הדפס את קבצי המדבקות שלך בעצמך",
	"business/stickers::biz_stickers_request_c1":
		"מלא את הטופס למטה כדי לבקש קבצי מדבקות \"מקבלים כאן ביטקוין\" בשפה המקומית שלך. נודיע לך כשהם יהיו מוכנים.",
	"business/stickers::biz_stickers_request_header":
		"לא רואה את השפה שלך?",
	"business/stickers::biz_stickers_step_description":
		"אנחנו שולחים חבילות חינם לכתובות בארה\"ב ובקנדה. במקומות אחרים בעולם תוכל להדפיס את המדבקות שלך בעצמך.",
	"business/stickers::biz_stickers_step_header":
		"איך אתה רוצה את המדבקות שלך?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"כל ארנקי הביטקוין עובדים יחד — בחר את הטוב ביותר לעסק שלך. חינם, עם סילוק מיידי, ללא החזרים.",
	"business/wallets::sources_breez_business":
		"Breez — ארנק Lightning ביטקוין-בלבד",
	"business/wallets::sources_ibex":
		"IBEX — תשתית תשלומי Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — מעבד תשלומי ביטקוין",
	"business/wallets::sources_square":
		"Square — קבל תשלומי ביטקוין",
	"business/wallets::sources_zaprite":
		"Zaprite — חשבונאות ביטקוין לעסקים",
	"business/wallets::wallets_hero_subtitle":
		"ארנקי ביטקוין הם חינם. בחר את הטוב ביותר לעסק שלך — פנים אל פנים, אונליין או דרך חשבונית — והתחל לקבל ביטקוין תוך דקות.",
	"business/wallets::wallets_section_invoice":
		"ארנקים לעסקים שמחייבים את הלקוחות בחשבוניות",
	"business/wallets::wallets_section_invoice_intro":
		"אם אתה מחייב את הלקוחות שלך בחשבוניות (ייעוץ, פרילנס, שירותי B2B), השתמש בארנק שבנוי לסביבת חשבוניות. הלקוח משלם את חשבונית הביטקוין בכמה קליקים.",
	"business/wallets::wallets_section_multiple":
		"ארנקים לעסקים עם כמה עובדים",
	"business/wallets::wallets_section_multiple_intro":
		"אם יש לך צוות שמקבל תשלומים בקופה, בחר ארנק שתומך בכניסה של מספר עובדים — כך שכל עובד יוכל להיות עם הקוד שלו, ותוכל לעקוב מי קיבל איזה תשלום.",
	"business/wallets::wallets_section_online":
		"ארנקים לעסקים אונליין",
	"business/wallets::wallets_section_online_intro":
		"אתה מוכר אונליין? הארנקים האלה מתחברים לחנות האונליין שלך ומקבלים תשלומי ביטקוין מלקוחות בכל העולם — ללא החזרים וללא צורך בחשבון סוחר.",
	"business/wallets::wallets_section_sole":
		"ארנקים לעצמאי יחיד",
	"business/wallets::wallets_section_sole_intro":
		"אם אתה מנהל לבד חנות, בית קפה, סטודיו או שירות, כל אחד מהארנקים האלה מתאים לך. בחר אם לשמור את הביטקוין או להמיר חלק מכל תשלום אוטומטית למטבע המקומי שלך.",
	"business/wallets::wallets_strike_note":
		"Strike Business מאפשר לך לקבל תשלומי ביטקוין ו-Lightning ללא עמלות ועם סילוק מיידי. תומך בתשלומים פנים אל פנים, אונליין ובחשבוניות, עם אפשרות המרה אוטומטית למטבע המקומי.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"מקבלים כאן ביטקוין",
	"business/why::why_good_for_you":
		"למה ביטקוין טוב גם לך",
	"business/why::why_learn_more_lowercase": "למד עוד ←",
	"business/why::why_s1_c1":
		"אינפלציה קורית כשמודפס יותר כסף או נוצר מאין. זה גורם לכסף שיש לך בכיס לאבד ערך עם הזמן — לכן המחירים עולים שנה אחר שנה.",
	"business/why::why_s1_c2":
		"לביטקוין יש אספקה קבועה: 21 מיליון מטבעות. שום ממשלה, בנק או חברה לא יכולים להדפיס יותר. החיסכון שלך בביטקוין שומר על ערכו עם הזמן, במקום לאבד אותו בשקט.",
	"business/why::why_s2_c1":
		"בשנים האחרונות הרבה בנקים אמריקאים קרסו עקב נהירות לבנקים. כשיותר מדי לקוחות רוצים למשוך את הכסף שלהם בו זמנית, אין לבנקים מספיק מזומן לשלם לכולם.",
	"business/why::why_s2_c2":
		"מעבר לשמירה על הכסף שלך, בנקים מלווים ומשקיעים חלק גדול ממנו. אם ההשקעות האלה נכשלות — או שהמפקידים מאבדים אמון — הבנק יכול לקרוס והפיקדונות שלך יכולים להיות מוקפאים או אבודים.",
	"business/why::why_s2_c3":
		"עם ביטקוין אתה יכול להחזיק את הכסף שלך ישירות בארנק שלך. ללא בנק. ללא מתווכים. ללא נהירות לבנקים.",
	"business/why::why_s3_c1":
		"בניגוד לכרטיסי אשראי, PayPal או חשבונות בנק מסורתיים, ביטקוין לא דורש אישור מאף אחד.",
	"business/why::why_s3_c2":
		"אף אחד לא יכול להקפיא את החשבון שלך, לחסום תשלום או להוציא אותך מהרשת. זאת המערכת הפיננסית הראשונה בהיסטוריה שאתה יכול להשתמש בה ללא חשש מצנזורה או החרמה.",
	"business/why::why_s4_c1":
		"ביטקוין לעיתים קרובות מובן לא נכון, אבל הוא עושה הרבה דברים טובים בשקט בעולם.",
	"business/why::why_s4_c2":
		"הוא עזר לפעילי זכויות אדם להיאבק על חירותם, צמצם פליטות מתאן ממזבלות ובארות נפט, ייצב רשתות חשמל ומימן מוצרים ציבוריים כמו פארקים לאומיים.",
	"business/why::why_biz_s1":
		"עמלות נמוכות, יותר לעסק",
	"business/why::why_biz_s1_c1":
		"תשלומי ביטקוין עוקפים את הבנקים וחברות הכרטיסים שלוקחות 2-3% מכל מכירה. העסק שומר יותר ממה שאתה משלם — מה שלעיתים קרובות אומר מחירים טובים יותר ושירות טוב יותר עבורך.",
	"business/why::why_biz_s2":
		"סילוק מיידי, ללא החזרים",
	"business/why::why_biz_s2_c1":
		"תשלומי ביטקוין מסתלקים תוך שניות, ישירות מהארנק שלך לעסק. אין צורך לחכות ימים שהבנק ישחרר את הכסף, ואין מחלוקות החזר יקרות — מה שאומר שהעסק יכול להתמקד בלספק ללקוחות במקום להיאבק בהונאה.",
	"business/why::why_biz_s3":
		"קבלה חינם, פתוחה לכולם",
	"business/why::why_biz_s3_c1":
		"קבלת ביטקוין לעסק לא דורשת חוזים, עלויות חודשיות או עלויות הקמה. ומיליוני משתמשי ביטקוין ברחבי העולם מחפשים באופן פעיל סוחרים שמקבלים אותו — מה שנותן לעסק חשיפה חינמית בפני לקוחות חדשים.",
	"business/why::why_business_cta_intro":
		"יש לך עסק ואתה רוצה להתחיל לקבל ביטקוין?",
	"business/why::why_business_cta_link":
		"ראה איך זה עובד ←",
	"business/why::why_for_business":
		"למה ביטקוין טוב לעסק הזה",
	"business/why::why_for_business_intro":
		"בקבלת ביטקוין, העסק הזה שומר יותר מכל מכירה, מקבל תשלומים מיידית ללא החזרים ומגיע לקהל גלובלי של משתמשי ביטקוין — ללא חוזים או עלויות חודשיות.",
	"business/why::why_good_for_you_intro":
		"ביטקוין הוא לא רק טוב לקופה — הוא סוג טוב יותר של כסף שמגן על החיסכון, הפרטיות וחופש העסקאות שלך. הנה תקציר מהיר.",
	"business/why::why_hero_subtitle":
		"סרקת מדבקה של \"מקבלים כאן ביטקוין\". הנה למה אלה חדשות טובות — לעסק הזה ולך.",
	"business/why::why_intro_c1":
		"העסק שאתה נמצא בו מקבל ביטקוין — רשת תשלומים מודרנית בקוד פתוח שכל אחד בעולם יכול להשתמש בה ללא בנקים ומתווכים שלוקחים נתח.",
	"business/why::why_intro_c2":
		"להלן הגרסה הקצרה של למה קבלת ביטקוין טובה לעסק הזה, בנוסף למה השימוש בביטקוין כלקוח טוב לך.",
	"business/why::why_next_business_label": "קבל ביטקוין",
	"business/why::why_next_business_title":
		"קבל ביטקוין בעסק שלך",
	"business/why::why_next_buy_label": "קנה ביטקוין",
	"business/why::why_next_buy_title": "קנה את הביטקוין הראשון שלך",
	"business/why::why_next_learn_label": "למד עוד",
	"business/why::why_next_learn_title": "למד עוד על ביטקוין",
	"business/why::why_next_wallet_label": "קבל ארנק",
	"business/why::why_next_wallet_title":
		"קבל את ארנק הביטקוין שלך",
	"business/why::why_whats_next_heading": "לאן הלאה?",
	"business/why::why_whats_next_intro":
		"אם זאת הפעם הראשונה שאתה סורק מדבקת ביטקוין, אלה המקומות הכי שימושיים לעבור אליהם.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "עמית-לעמית (ישירות בין משתמשים)",
	"buy::buy_bitcoin_guide": "איך לקנות ביטקוין",
	"buy::buy_step_1_header": "בחר את המדינה שלך",
	"buy::buy_step_2_header": "בחר את שיטת התשלום שלך",
	"buy::buy_step_3_header": "אפשרויות הקנייה שלך",
	"buy::buy_step_4_header": "אחסן את הביטקוין שלך באופן בטוח",
	"buy::buy_header_subtitle":
		"מדריך פשוט צעד אחר צעד לקניית הביטקוין הראשון שלך.",
	"buy::buy_howto_name": "איך לקנות ביטקוין",
	"buy::buy_meta_description":
		"למד איך לקנות ביטקוין באופן בטוח עם המדריך הצעד-אחר-צעד שלנו. בחר את המדינה ואת שיטת התשלום שלך כדי למצוא את אפשרויות הקנייה הטובות ביותר עבורך.",
	"buy::buy_step_1_eyebrow": "שלב 1",
	"buy::buy_step_2_eyebrow": "שלב 2",
	"buy::buy_step_3_eyebrow": "שלב 3",
	"buy::buy_step_4_eyebrow": "שלב 4",
	"buy::buy_storage_cta_label": "הצעד הבא",
	"buy::sources_bisq":
		"Bisq — בורסת ביטקוין מבוזרת עמית-לעמית",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — מדריך גלובלי של מכשירי כספומט ביטקוין",
	"buy::sources_kraken": "Kraken — בורסת ביטקוין פופולרית",
	"buy::sources_relai":
		"Relai — אפליקציית משמורת עצמית שווייצרית של ביטקוין",
	"buy::sources_river":
		"River — קנה, כרה ושמור רק ביטקוין",
	"buy::sources_strike_lightning":
		"Strike — קנה ביטקוין עם תמיכת רשת Lightning",
	"buy::sources_swan":
		"Swan Bitcoin — ממוצע עלות דולרי רק ביטקוין (DCA)",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "הוסף שפה",
	"common::common_next_buy_bitcoin": "קנה ביטקוין",
	"common::common_next_buy_bitcoin_desc":
		"למד איך לקנות ביטקוין בבטחה",
	"common::common_next_calculate": "חשב את האינפלציה שלך",
	"common::common_next_calculate_desc":
		"ראה איך אינפלציה משפיעה על המשכורת שלך עם הזמן",
	"common::common_next_get_wallet": "קבל ארנק",
	"common::common_next_get_wallet_desc":
		"קבל את ארנק הביטקוין הראשון שלך — זה חינם",
	"common::common_next_keep_learning": "המשך ללמוד",
	"common::common_next_keep_learning_desc":
		"ראה איך ביטקוין הופך את העולם לטוב יותר",
	"common::common_source_bls_cpi":
		"הלשכה האמריקאית לסטטיסטיקה של עבודה — מדד מחירים לצרכן (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — אספקת כסף (מדד לפי קטגוריה)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — \"האם מכרז של אוצר יכול להיכשל?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "מה הצעד הבא?",
	"common::common_sticker_files_mission_5": "בקש חבילה",
	"common::common_site_tagline": "חינוך ביטקוין לכולם.",
	"common::common_source_btc_map":
		"BTC Map — מדריך גלובלי לסוחרים שמקבלים ביטקוין",
	"common::common_source_btcpayserver":
		"BTCPay Server — מעבד תשלומי ביטקוין חינמי בקוד פתוח לאירוח עצמי",
	"common::common_source_oshi":
		"Oshi — פלטפורמת תגמולי ביטקוין לסוחרים",
	"common::common_source_strike_business":
		"Strike — תשלומי ביטקוין ו-Lightning לעסקים",
	"common::common_sources_group_bitcoin": "נתוני ביטקוין",
	"common::common_sources_group_cpi":
		"אינפלציה / מדד מחירים לצרכן",
	"common::common_sources_group_debt": "חוב ממשלתי",
	"common::common_sources_group_money": "נתוני אספקת כסף",
	"common::common_sources_group_stories": "דוגמאות אמיתיות",
	"common::common_sticker_files_mission_6":
		"מדבקות חינם באנגלית.",
	"common::common_sticker_files_next_flyers_label": "עלונים",
	"common::common_sticker_files_next_flyers_title":
		"הדפס עלון ביטקוין",
	"common::common_sticker_files_next_languages_label":
		"קבצי מדבקות",
	"common::common_sticker_files_next_languages_title":
		"ראה קבצי מדבקות בשפות אחרות",
	"common::common_sticker_files_print_these":
		"הדפס אלה בלחיצה אחת",
	"common::common_sticker_name_bdhi_black":
		"מדבקת \"Bitcoin Doesn\u2019t Have Inflation\" (שחור)",
	"common::common_sticker_name_bdhi_orange":
		"מדבקת \"Bitcoin Doesn\u2019t Have Inflation\" (כתום)",
	"common::common_sticker_name_caution":
		"מדבקת ביטקוין \"Caution! Melting Ice Cube\"",
	"common::common_sticker_name_cure_inflation":
		"מדבקת ביטקוין \"Cure Inflation\"",
	"common::common_sticker_name_danger":
		"מדבקת ביטקוין \"Danger! Inflation Ahead\"",
	"common::common_sticker_name_fix":
		"מדבקת ביטקוין \"Fix The Money, Fix The World\"",
	"common::common_sticker_name_got_inflation":
		"מדבקת ביטקוין \"Got Inflation?\"",
	"common::common_sticker_name_study":
		"מדבקת \"Study Bitcoin\"",
	"common::common_sticker_name_warning":
		"מדבקת ביטקוין \"Warning! Inflation is Stealing Your Savings\"",
	"common::common_sticker_name_what_if":
		"מדבקת ביטקוין \"What if your money didn\u2019t have inflation?\"",
	"common::common_sticker_tips_heading": "טיפים למדבקות",
	"common::common_sticker_tips_intro":
		"אחרי שאתה מדפיס את המדבקות שלך, שים אותן איפה שאנשים יראו! מקומות טובים:",
	"common::common_sticker_tips_list_1":
		"מקומות ציבוריים שאנשים יראו אותם",
	"common::common_sticker_tips_list_2":
		"מקומות שלא יוסרו מיד (מדבקות לא גורמות נזק קבוע)",
	"common::common_sticker_tips_list_3":
		"משטחים שדבקים טוב (מתכת, פלסטיק, זכוכית)",
	"common::common_sticker_tips_list_4":
		"אל תשים על רכוש פרטי, תמרורי דרכים, כספומטים או משאבות דלק",
	"common::common_stickers_printer_prefix": "אנחנו משתמשים ב",
	"common::common_stickers_printer_suffix":
		"אבל אתה יכול להשתמש בכל מדפסת מדבקות.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — מדד מחירים לצרכן לכל הצרכנים העירוניים",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — אספקת כסף M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"חשב את פער האינפלציה שלך",
	"compound-inflation-calculator::cic_cta_label": "הצעד הבא",
	"compound-inflation-calculator::cic_hero_subtitle":
		"דע בכמה המשכורת שלך צריכה לעלות כדי לעמוד בקצב האינפלציה.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"חקור עוד נושאים",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"ראה איך ביטקוין קשור לכסף, חירות, אנרגיה ועוד.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"למד איך אינפלציה עובדת",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"איך להדפיס ולפרסם את עלוני הביטקוין האלה",
	"flyers::flyers_hero_subtitle":
		"עלוני ביטקוין חינמיים להדפסה. שים אותם במקומות ציבוריים כדי שיותר אנשים ילמדו על ביטקוין.",
	"flyers::flyers_hero_title": "הדפס ופרסם עלוני ביטקוין",
	"flyers::flyers_next_get_stickers": "הפץ את המסר רחוק יותר",
	"flyers::flyers_next_get_stickers_desc":
		"בקש חבילה חינמית של מדבקות ביטקוין",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"היכנס לעניינים ועזור להפיץ את ביטקוין",
	"get-involved::get_involved_business_content_1":
		"רוצה לעזור לבנות את הכלכלה המעגלית של ביטקוין? הדרך הקלה ביותר היא לעזור לעסקים מקומיים להתחיל לקבל תשלומי ביטקוין.",
	"get-involved::get_involved_business_content_2":
		"מכיר עסק שיכול להתחיל? הפנה את הבעלים לדף שלנו",
	"get-involved::get_involved_business_content_3":
		"ביטקוין לעסקים.",
	"get-involved::get_involved_description":
		"הכלים החינמיים שלנו מקלים על הפצת אימוץ ביטקוין. מדבקות, עלונים, מדבקות \"מקבלים כאן ביטקוין\" לעסקים וקוד פתוח שכל אחד יכול לתרום לו.",
	"get-involved::get_involved_header":
		"היכנס לעניינים ועזור להפיץ את ביטקוין.",
	"get-involved::get_involved_intro_5":
		"אתה יכול לעזור לשנות את זה. בנינו כמה כלים חינמיים שיעזרו לך להפיץ את התקווה של ביטקוין בקהילה שלך.",
	"get-involved::get_involved_biz_stickers_note":
		"כבר מקבל ביטקוין? תן ללקוחות שלך לדעת עם מדבקות \"מקבלים כאן ביטקוין\" החינמיות שלנו. אנחנו שולחים חבילה אחת לכל כתובת בארה\"ב או קנדה, או שאתה יכול להדפיס בעצמך בכל מקום בעולם.",
	"get-involved::get_involved_card_biz_stickers_label":
		"מדבקות \"מקבלים כאן\"",
	"get-involved::get_involved_card_biz_stickers_source":
		"מקור: bitcoin.rocks ←",
	"get-involved::get_involved_card_biz_stickers_title":
		"מדבקות \"מקבלים כאן ביטקוין\" חינם לעסק שלך",
	"get-involved::get_involved_card_business_label":
		"ביטקוין לעסקים",
	"get-involved::get_involved_card_business_source":
		"מקור: bitcoin.rocks ←",
	"get-involved::get_involved_card_business_title":
		"כל מה שעסק צריך כדי לקבל תשלומי ביטקוין",
	"get-involved::get_involved_card_flyers_label": "עלונים להדפסה",
	"get-involved::get_involved_card_flyers_source":
		"מקור: bitcoin.rocks ←",
	"get-involved::get_involved_card_flyers_title":
		"הורד והדפס עלון ביטקוין חינם",
	"get-involved::get_involved_card_github_label": "קוד פתוח",
	"get-involved::get_involved_card_github_source": "מקור: GitHub ←",
	"get-involved::get_involved_card_github_title":
		"תרום ל-bitcoin.rocks ב-GitHub",
	"get-involved::get_involved_card_stickers_label":
		"מדבקות חינם",
	"get-involved::get_involved_card_stickers_source":
		"מקור: bitcoin.rocks ←",
	"get-involved::get_involved_card_stickers_title":
		"בקש חבילה חינמית של מדבקות ביטקוין ישירות עד דלת הבית שלך",
	"get-involved::get_involved_flyers_content_1":
		"עלונים הם אחת הדרכים הפשוטות ביותר להציג ביטקוין בקהילה שלך. הורד את עלון הביטקוין החינמי שלנו, הדפס כמה עותקים שאתה רוצה ושים אותם על לוחות מודעות, בבתי קפה, במפגשים או בכל מקום שאנשים מתאספים בו.",
	"get-involved::get_involved_flyers_content_2":
		"לכל עלון יש כותרת תופסת עין וקוד QR שמפנה קוראים סקרנים ל-bitcoin.rocks ללמוד עוד.",
	"get-involved::get_involved_flyers_content_3":
		"בניגוד למדבקות, עלונים יכולים להיות מודפסים על פי דרישה בכל מקום בעולם — אתה צריך רק מדפסת וכמה דקות.",
	"get-involved::get_involved_flyers_header":
		"הדפס ופרסם את העלון",
	"get-involved::get_involved_flyers_image_alt":
		"תצוגה מקדימה של עלון הביטקוין החינמי להדפסה של bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks הוא פרויקט קוד פתוח חינמי תחת רישיון MIT. המשימה שלנו היא להאיץ את אימוץ הביטקוין באמצעות חינוך — ולא יכולים לעשות זאת לבד.",
	"get-involved::get_involved_github_content_2":
		"אם אתה מפתח, מעצב, סופר או מתרגם, יש דרך לעזור. אנחנו במיוחד מחפשים אנשים שיכולים לתרגם את התוכן שלנו לעוד שפות, כדי שאנשים בכל העולם יוכלו ללמוד על ביטקוין בשפת האם שלהם.",
	"get-involved::get_involved_github_content_3":
		"פצל את המאגר שלנו, פתח pull request, צור issue או תן כוכב לפרויקט. כל תרומה עוזרת להגיע לעוד אנשים עם ביטקוין.",
	"get-involved::get_involved_github_header":
		"תרום ב-GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"חבילת מדבקות טקסט ביטקוין חינמיות של bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "חיסכון",
	"index::home_card_label_art_1": "בוא נשווה",
	"index::home_card_label_art_2": "הפץ את המסר",
	"index::home_card_label_art_3": "אמנות רחוב",
	"index::home_card_label_bank_runs": "מערכת רזרבה מלאה",
	"index::home_card_label_bonds": "בוא נשווה",
	"index::home_card_label_business_1": "מה ההבדל?",
	"index::home_card_label_business_2": "קבל תשלומי ביטקוין",
	"index::home_card_label_cash": "בוא נשווה",
	"index::home_card_label_cbdc": "פתוח או סגור?",
	"index::home_card_label_coding_1": "קורס אינטראקטיבי",
	"index::home_card_label_coding_2": "בנה חומרה",
	"index::home_card_label_coding_3": "אתגרי תכנות",
	"index::home_card_label_crowdfunding_1": "מחאות EndSARS",
	"index::home_card_label_crowdfunding_2": "כסף בלתי ניתן לעצירה",
	"index::home_card_label_crowdfunding_3": "מימון לפרויקט שלך",
	"index::home_card_label_crypto": "מה ההבדל?",
	"index::home_card_label_energy_1": "ייצוב הרשת",
	"index::home_card_label_energy_4": "ניהול ביקוש",
	"index::home_card_label_energy_5": "חישמול כפרי",
	"index::home_card_label_energy_6": "תמריצי אנרגיה מתחדשת",
	"index::home_card_label_environment_1": "צמצום מתאן",
	"index::home_card_label_environment_2": "הציל פארק לאומי",
	"index::home_card_label_environment_3": "התעשייה הירוקה ביותר",
	"index::home_card_label_environment_4": "מצמצם בעירת גז",
	"index::home_card_label_equality_1": "תקווה והזדמנות",
	"index::home_card_label_equality_2": "המשווה הגדול",
	"index::home_card_label_food_1": "מחירי מזון",
	"index::home_card_label_food_2": "חוות וקרקע",
	"index::home_card_label_freedom_1": "משטרים סמכותניים",
	"index::home_card_label_freedom_2": "כלי אחד",
	"index::home_card_label_get_started_1":
		"יסודות למתחילים",
	"index::home_card_label_get_started_2": "הארנק הראשון שלך",
	"index::home_card_label_get_started_3": "קנה ביטקוין",
	"index::home_card_label_gold": "מה יותר טוב?",
	"index::home_card_label_housing_1": "דיור בר-השגה",
	"index::home_card_label_human_rights_1":
		"מקדם זכויות אדם",
	"index::home_card_label_human_rights_2": "אימוץ מהבסיס",
	"index::home_card_label_human_rights_3": "נוכחות בינלאומית",
	"index::home_card_label_inflation": "ביטקוין הוא כסף טוב יותר",
	"index::home_card_label_networks_1": "מבט חי על הרשת",
	"index::home_card_label_networks_2": "בוא נשווה",
	"index::home_card_label_payments_1": "מה ההבדל?",
	"index::home_card_label_payments_2": "תשלומים מהירים וזולים",
	"index::home_card_label_payments_3": "העברות חוצות גבולות",
	"index::home_card_label_payments_4": "קבל תשלומים",
	"index::home_card_label_politics_1": "פרדוקס פוליטי",
	"index::home_card_label_politics_2": "הימור גדול",
	"index::home_card_label_property_rights_1": "בוא נשווה",
	"index::home_card_label_property_rights_2": "בעלות אמיתית",
	"index::home_card_label_salary": "הגן על המשכורת שלך",
	"index::home_card_label_self_custody_1":
		"מדריך לארנקי ביטקוין",
	"index::home_card_label_self_custody_2": "הצעד החשוב ביותר",
	"index::home_card_label_self_custody_3": "כסף ריבוני",
	"index::home_card_label_war_1": "סוף למלחמות נצח",
	"index::home_card_label_war_2": "עזור ליוצאי צבא",
	"index::home_card_label_war_3": "ברח ממלחמה",
	"index::home_h1":
		"ביטקוין הוא כסף טוב יותר שבונה עולם טוב יותר.",
	"index::home_nav_about": "אודות",
	"index::home_nav_get_involved": "היכנס לעניינים",
	"index::home_nav_learn": "למד",
	"index::home_source_prefix": "מקור:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon ו-Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "אל",
	"lightning::lightning_grid_heading":
		"ארנקי Lightning פופולריים",
	"lightning::lightning_hardware_cta_label":
		"ארנקי חומרה",
	"lightning::lightning_header_subtitle":
		"Lightning מאפשר לך לשלוח ביטקוין תוך שניות עבור פחות מסנט — בחר ארנק שמתאים לכמות הביטקוין שאתה רוצה להוציא.",
	"lightning::lightning_s1_c4_end": "למידע נוסף.",
	"lightning::lightning_s1_c4_link":
		"מדריך ארנק החומרה של ביטקוין",
	"lightning::sources_acinq_phoenix":
		"ACINQ — ארנק Phoenix Lightning",
	"lightning::sources_breez_lightning":
		"Breez — ארנק Lightning בניהול עצמי",
	"lightning::sources_lightning_labs":
		"Lightning Labs — תיעוד רשת Lightning",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — ארנק Lightning בנאמנות",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android ואינטרנט",
	"nostr/index::nostr_platform_web": "דפדפן אינטרנט",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr הוא פרוטוקול תקשורת מבוזר חדש לאינטרנט — אף חברה לא בעלים שלו, יש לו zaps של ביטקוין מובנים ואתה יכול להחליף בין לקוחות מבלי לאבד עוקבים.",
	"nostr/index::nostr_amethyst_f1":
		"הרבה תכונות ואפשרויות התאמה אישית",
	"nostr/index::nostr_amethyst_f2":
		"דורש ארנק ביטקוין נפרד",
	"nostr/index::nostr_amethyst_f3": "100% חינם",
	"nostr/index::nostr_damus_f1":
		"ממשק מוכר דמוי Twitter",
	"nostr/index::nostr_damus_f2":
		"דורש ארנק ביטקוין נפרד",
	"nostr/index::nostr_damus_f3": "100% חינם",
	"nostr/index::nostr_download_heading":
		"הורד לקוח Nostr חינמי",
	"nostr/index::nostr_download_intro":
		"לקוחות Nostr הם אפליקציות חינמיות שמאפשרות לך לקרוא ולכתוב ברשת Nostr. כולם עובדים יחד — תוכל להחליף לקוחות בכל זמן ולשמור על העוקבים והתוכן שלך.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr הוא פרוטוקול תקשורת מבוזר חדש לאינטרנט — אף חברה לא בעלים שלו, יש לו zaps של ביטקוין מובנים ואתה יכול להחליף בין אפליקציות מבלי לאבד עוקבים.",
	"nostr/index::nostr_hero_title": "מה זה Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr הוא כמו אימייל: אף אחד לא בעלים של הפרוטוקול, כל אחד יכול לבנות אפליקציה עליו ואתה בוחר איזו טובה יותר עבורך. בניגוד ל-Twitter או Facebook, אין חברה מרכזית שיכולה לצנזר, להעיף או להשתיק את החשבונות שלך.",
	"nostr/index::nostr_intro_c2":
		"להלן גרסה קצרה של למה Nostr חשוב — ואחר כך כל לקוחות ה-Nostr החינמיים שאתה צריך כדי להתחיל היום.",
	"nostr/index::nostr_iris_f1":
		"קל מאוד — לא דורש התקנה",
	"nostr/index::nostr_iris_f2":
		"דרך קלה לנסות את Nostr עם חשבון ניסיון",
	"nostr/index::nostr_iris_f3": "100% חינם",
	"nostr/index::nostr_learn_more_label": "צלול עמוק יותר",
	"nostr/index::nostr_learn_more_title":
		"למד עוד על Nostr ב-nostr.how",
	"nostr/index::nostr_primal_f1": "הלקוח המומלץ הראשון שלנו",
	"nostr/index::nostr_primal_f2":
		"ארנק zap ביטקוין מובנה",
	"nostr/index::nostr_primal_f3": "100% חינם",
	"nostr/index::nostr_s1": "פרוטוקול, לא פלטפורמה",
	"nostr/index::nostr_s1_c1":
		"Nostr הוא פרוטוקול חדש שמאפשר לך לתקשר באינטרנט ללא חשש מצנזורה, אסור או השתקה.",
	"nostr/index::nostr_s1_c2":
		"פלטפורמות כמו Twitter או Facebook נשלטות על ידי חברה אחת, אבל פרוטוקול Nostr לא נשלט על ידי אף אחד.",
	"nostr/index::nostr_s2": "חופש תנועה",
	"nostr/index::nostr_s2_c1":
		"Nostr הוא כמו אימייל. אף אחד לא שולט בפרוטוקול האימייל וכל אחד יכול לבנות לקוח (כמו Gmail, Hotmail וכו').",
	"nostr/index::nostr_s2_c2":
		"גם פרוטוקול Nostr לא נשלט על ידי אף אחד וכל אחד יכול לבנות לקוח (כמו Damus, Amethyst וכו').",
	"nostr/index::nostr_s2_c3":
		"אם אתה לא אוהב איך שלקוח מסוים עובד, אתה יכול להעביר את חשבון ה-Nostr שלך ללקוח אחר, מבלי לאבד עוקבים או תוכן.",
	"nostr/index::nostr_s3": "ביטקוין מובנה",
	"nostr/index::nostr_s3_c1":
		"ביטקוין מובנה בפרוטוקול Nostr. כשאתה רואה תוכן שאתה אוהב, אתה יכול לשלוח \"zap של ביטקוין\" כתודה למחבר.",
	"nostr/index::nostr_s3_c2":
		"בפלטפורמות מרוכזות כמו Twitter ו-Facebook, החברה המרכזית מרוויחה כסף מהתוכן שלך. אבל בפרוטוקולים פתוחים כמו Nostr, אתה מרוויח כסף מהתוכן שלך.",
	"nostr/index::sources_damus": "Damus — לקוח Nostr ל-iPhone",
	"nostr/index::sources_iris": "Iris — לקוח Nostr לדפדפן אינטרנט",
	"nostr/index::sources_nostr_how": "nostr.how — מה זה Nostr?",
	"nostr/index::sources_nostr_protocol":
		"פרוטוקול Nostr — מפרטים בקוד פתוח",
	"nostr/index::sources_primal":
		"Primal — לקוח Nostr עם ארנק zap ביטקוין מובנה",
	"nostr/index::what_is_nostr": "מה זה Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"הדפס את מדבקות הביטקוין שלך עם הקבצים האלה.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"הבקשה התקבלה 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"הזמנה בכמות גדולה",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"שתף ב-Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"מה זה Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"צריך עוד מדבקות?",
	"sticker-success::sticker_success_hero_title":
		"המדבקות שלך בדרך 🎉",
	"sticker-success::sticker_success_share_header":
		"שתף איפה שמת את המדבקות שלך",
	"sticker-success::sticker_success_tips_header":
		"מקומות טובים לשים מדבקה",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "ביטקוין",
	"stickers::stickers_flyers_link_before":
		"וברגע שתתחיל, ",
	"stickers::stickers_instructions_1":
		"הכנס את כתובת המשלוח שלך ואנחנו נשלח לך בדואר חבילת מדבקות ביטקוין חינמית. המדבקות שלך יגיעו במעטפה לבנה פשוטה.",
	"stickers::stickers_btn_choose_pack": "בחר חבילה זו",
	"stickers::stickers_bulk_c1":
		"רוצה יותר מכמה מדבקות?",
	"stickers::stickers_bulk_c2":
		"הזמן בכמות גדולה מאותה מדפסת שאנחנו משתמשים בה",
	"stickers::stickers_bulk_c3":
		"— ככל שתקנה יותר, כל יחידה זולה יותר.",
	"stickers::stickers_bulk_cta": "קנה מדבקות בכמות גדולה",
	"stickers::stickers_bulk_header":
		"הזמן מדבקות בכמות גדולה",
	"stickers::stickers_hero_subtitle":
		"בקש חבילה חינמית של מדבקות ביטקוין ושים אותן במקומות ציבוריים כדי שיותר אנשים ילמדו על ביטקוין.",
	"stickers::stickers_hero_title": "מדבקות ביטקוין חינם",
	"stickers::stickers_intro_c1":
		"המשימה שלנו היא לעזור לך \"להפוך לכתום\" יותר אנשים עם מדבקות, על ידי הדבקת מדבקות ביטקוין במקומות ציבוריים. כל המדבקות שלנו יש להן קודי QR שמובילים לדפים חינוכיים על",
	"stickers::stickers_intro_c3": "אינפלציה",
	"stickers::stickers_intro_c4":
		"בחר חבילת מדבקות למטה ובחר איך אתה רוצה לקבל אותה — אנחנו שולחים חבילה חינמית לכל אחד בארה\"ב או בקנדה, או שאתה יכול להדפיס את המדבקות שלך בכל מקום בעולם.",
	"stickers::stickers_mail_header":
		"אנחנו שולחים מדבקות בדואר בחינם",
	"stickers::stickers_next_print_flyers": "הפץ את המסר רחוק יותר",
	"stickers::stickers_next_print_flyers_desc":
		"הדפס עלוני ביטקוין חינמיים ושים במקומות ציבוריים",
	"stickers::stickers_option_bulk":
		"📦 גלובלי — הזמן בכמות גדולה",
	"stickers::stickers_option_canada":
		"🇨🇦 קנדה — דואר חינם",
	"stickers::stickers_option_print":
		"🌍 גלובלי — הדפס בעצמך",
	"stickers::stickers_option_usa":
		"🇺🇸 ארה\"ב — דואר חינם",
	"stickers::stickers_print_c1":
		"אתה יכול לתרום על ידי הדפסת המדבקות בעצמך, בכל מקום בעולם שאתה גר. לחץ על השפה שלך למטה כדי להוריד את קבצי המדבקות והוראות ההדפסה.",
	"stickers::stickers_print_c2":
		"לא כל המדבקות זמינות בכל השפות.",
	"stickers::stickers_print_header":
		"הדפס את קבצי המדבקות שלך בעצמך",
	"stickers::stickers_request_c1":
		"מלא את הטופס למטה כדי לבקש קבצי מדבקות בשפה המקומית שלך. נודיע לך כשהם יהיו מוכנים.",
	"stickers::stickers_request_header":
		"לא רואה את השפה שלך?",
	"stickers::stickers_share_c2":
		"עקוב אחרינו ב-Nostr על ידי חיפוש",
	"stickers::stickers_share_c3":
		"בכל לקוח Nostr.",
	"stickers::stickers_signs_pack_description":
		"מדבקות אזהרה, זהירות והודעה עם מסרי ביטקוין — מתוכננות לתפוס את העין ולעצור אנשים.",
	"stickers::stickers_step_1_description":
		"כל חבילה יש לה אוסף שונה של מדבקות ביטקוין עם קודי QR שמלמדים אנשים על ביטקוין.",
	"stickers::stickers_step_1_eyebrow": "שלב 1",
	"stickers::stickers_step_1_header":
		"בחר חבילת מדבקות",
	"stickers::stickers_step_2_description":
		"אנחנו שולחים חבילות חינם לכתובות בארה\"ב ובקנדה. במקומות אחרים בעולם אתה יכול להדפיס את המדבקות בעצמך או להזמין בכמות גדולה.",
	"stickers::stickers_step_2_eyebrow": "שלב 2",
	"stickers::stickers_step_2_header":
		"איך אתה רוצה את המדבקות שלך?",
	"stickers::stickers_text_pack_description":
		"תערובת של סיסמאות ומחשבות שמחות של ביטקוין, מתוכננות לעורר סקרנות במקומות ציבוריים.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — בחר את הארנק שלך",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — סקירת אחסון זרעי מתכת של ביטקוין",
	"wallets::wallets_lightning_cta_label": "רשת Lightning",
	"wallets::sources_blockstream_green":
		"Blockstream Green — ארנק ביטקוין בניהול עצמי",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — ארנק חומרה ביטקוין",
	"wallets::sources_coldcard_mk5":
		"Coinkite — ארנק חומרה Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — ארנק חומרה Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — ארנק חומרה Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — מכשיר חתימה DIY בקוד פתוח לעסקאות ביטקוין",
	"wallets::wallets_grid_heading": "ארנקי ביטקוין פופולריים",
	"wallets::wallets_header_subtitle":
		"מדריך צעד אחר צעד לבחירת ארנק, גיבוי המפתחות שלך ולקיחת שליטה מלאה על הביטקוין שלך.",
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
		`translate-rest-part2 (he): filled ${filled}, already-done ${skipped}`,
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
