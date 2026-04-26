#!/usr/bin/env node
/**
 * Hebrew manifest refresh — part 1 of non-inflation namespaces.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "חזרה לדף הבית",
	"404::404_message":
		"ביטקוין הוא נפלא, אבל הדף הזה הוא שבור.",
	"404::404_not_found_short": "לא נמצא",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"אנחנו מציעים כלים חינמיים לעסקים כדי להקל על עסקים קטנים לקבל תשלומי ביטקוין. דף \"ביטקוין לעסקים\" שלנו מסביר למה ביטקוין הוא טוב לעסק, איך לבחור ארנק ומעבד תשלומים, וגם מציע מדבקות חינם של \"מקבלים כאן ביטקוין\".",
	"about::about_card_business_label": "כלים לעסקים",
	"about::about_card_business_source": "מקור: bitcoin.rocks ←",
	"about::about_card_business_title":
		"כל מה שעסק צריך כדי לקבל תשלומי ביטקוין",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "מקור: GitHub ←",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "תרום",
	"about::about_card_contribute_source": "מקור: GitHub ←",
	"about::about_card_contribute_title":
		"למד איך לתרום לפרויקט bitcoin.rocks",
	"about::about_card_email_label": "אימייל",
	"about::about_card_email_source": "מקור: אימייל ←",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "עלונים להדפסה",
	"about::about_card_flyers_source": "מקור: bitcoin.rocks ←",
	"about::about_card_flyers_title":
		"הורד והדפס עלוני ביטקוין עבור הקהילה שלך",
	"about::about_card_github_label": "מאגר",
	"about::about_card_github_source": "מקור: GitHub ←",
	"about::about_card_github_title": "צפה ב-bitcoin.rocks ב-GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "מקור: Nostr ←",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "מדבקות חינם",
	"about::about_card_stickers_source": "מקור: bitcoin.rocks ←",
	"about::about_card_stickers_title":
		"קבל מדבקות ביטקוין חינם ישירות עד דלת הבית שלך",
	"about::about_editorial_2":
		"אנחנו משתמשים במקורות בעלי סמכות: הפדרל ריזרב (FRED), הלשכה האמריקאית לסטטיסטיקה של עבודה, FDIC, האו\"ם, מועצת הזהב העולמית, Forbes, MIT Technology Review, Lyn Alden ו-James Lavish. אנחנו מאמינים שכאשר מציגים את העובדות באופן ברור, ביטקוין מדבר בעד עצמו.",
	"about::about_flyers_blurb":
		"אנחנו מעצבים עלונים להדפסה שאפשר לחלק במפגשים, להצמיד ללוחות מודעות או לשים בתיבות דואר — דרך פשוטה לעורר עניין ולהפנות אנשים ל-bitcoin.rocks ללמוד עוד.",
	"about::about_header": "אודות פרויקט bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "ייסד את bitcoin.rocks",
	"about::about_mission_1b":
		"המשתמש בשנת 2022 עם משימה פשוטה: להאיץ את אימוץ הביטקוין באמצעות חינוך.",
	"about::about_open_source_2":
		"bitcoin.rocks הוא פרויקט קוד פתוח חינמי תחת רישיון MIT. כולם מוזמנים לתרום. אנחנו במיוחד מחפשים מתרגמים שיהפכו את התוכן שלנו לנגיש לאנשים מכל העולם.",
	"about::about_open_source_header": "קוד פתוח",
	"about::about_page_description":
		"bitcoin.rocks הוא אתר חינוך חינמי וקוד-פתוח על ביטקוין שנוצר בשנת 2022. המשימה שלנו היא להאיץ את אימוץ הביטקוין באמצעות חינוך.",
	"about::about_stickers_blurb":
		"אנחנו שולחים מדבקות ביטקוין חינם ישירות עד דלת הבית שלך כדי לעזור להעלות מודעות לביטקוין בקהילה שלך. בכל חודש, מאות אנשים סורקים את קודי ה-QR על המדבקות האלה כדי ללמוד עוד על ביטקוין.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"ביטקוין לא יכול לסבול מנהירה לבנקים",
	"bank-runs::bank_runs_bitcoin_p1":
		"ביטקוין הוא מערכת עם רזרבה מלאה. אתה לא שם את הכסף בבנק. אתה הבנק של עצמך. הכסף שלך לא מולווה לאף אחד בלי ידיעתך, אתה היחיד שיש לו גישה אליו.",
	"bank-runs::bank_runs_bitcoin_p2":
		"כל עוד אתה מחזיק את הביטקוין שלך בארנק שלך — לא בבורסה או ETF — נהירה לבנקים אינה אפשרית.",
	"bank-runs::bank_runs_bitcoin_p3":
		"עם ביטקוין, יש לך שליטה אמיתית בכסף שלך.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"החל מ-26 במרץ 2020, בנקים אמריקאים אינם נדרשים להחזיק רזרבות חובה.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"יחס רזרבה בנקאית",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"מקור: הפדרל ריזרב ←",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"מערכת עם רזרבה מלאה — אין צורך בביטוח פיקדונות.",
	"bank-runs::bank_runs_card_btc_fdic_label": "כיסוי ביטקוין",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"מקור: ניירת הביטקוין ←",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"כל ביטקוין נמצא על הבלוקצ'יין — שום דבר לא מולווה.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"יחס רזרבה של ביטקוין",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"מקור: ניירת הביטקוין ←",
	"bank-runs::bank_runs_card_fdic_detail":
		"קרן ביטוח של 153.9 מיליארד דולר מול 10.82 טריליון דולר בפיקדונות מבוטחים (דצמבר 2025).",
	"bank-runs::bank_runs_card_fdic_label": "כיסוי FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"מקור: FDIC Statistics at a Glance ←",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "מקרה לדוגמה",
	"bank-runs::bank_runs_card_svb_source":
		"מקור: בית הספר למשפטים של אוניברסיטת וושינגטון ←",
	"bank-runs::bank_runs_card_svb_title":
		"ראה איך התרחשה הנהירה לבנק Silicon Valley",
	"bank-runs::bank_runs_card_wallet_label": "הצעד הבא",
	"bank-runs::bank_runs_card_wallet_source": "התחל כאן ←",
	"bank-runs::bank_runs_card_wallet_title":
		"למד איך לקבל את ארנק הביטקוין שלך",
	"bank-runs::bank_runs_fdic_heading":
		"ביטוח FDIC מכסה כ-1% מהפיקדונות",
	"bank-runs::bank_runs_fdic_p1":
		"ביטוח FDIC מגן על פיקדונות עד 250,000 דולר לכל מפקיד. אבל קרן הביטוח קטנה ביחס לסך כל הפיקדונות שעליה להגן.",
	"bank-runs::bank_runs_fdic_p2_a":
		"במקרה של קריסת בנקים נרחבת, הממשלה תדפיס כנראה עוד כסף כדי לכסות את הפער — מה שמוביל ל",
	"bank-runs::bank_runs_fdic_p2_link": "אינפלציה.",
	"bank-runs::bank_runs_header":
		"ביטקוין לא יכול לסבול מנהירה לבנקים, אבל הבנק שלך כן.",
	"bank-runs::bank_runs_page_description":
		"בנקים מלווים את הפיקדונות שלך באמצעות בנקאות עם רזרבה חלקית. אם יותר מדי אנשים מושכים את הכסף שלהם בו זמנית, הבנקים יכולים לקרוס. ביטקוין הוא מערכת עם רזרבה מלאה — נהירה לבנקים אינה אפשרית.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: דוגמה אמיתית",
	"bank-runs::bank_runs_svb_p1_a":
		"במרץ 2023, Silicon Valley Bank קרס לאחר",
	"bank-runs::bank_runs_svb_p1_b":
		"כאשר אגרות החוב האלה איבדו ערך, SVB לא יכול היה לכסות משיכות. הבנק נעשה חסר יכולת לשלם.",
	"bank-runs::bank_runs_svb_p1_link":
		"השקיע פיקדונות לקוחות באגרות חוב ממשלתיות לטווח ארוך.",
	"bank-runs::bank_runs_svb_p2":
		"אלפי עסקים לא יכלו לשלם את משכורות העובדים שלהם. ה-FDIC התערב — אך עלתה שאלה גדולה יותר: האם הכסף שלך באמת בטוח?",
	"bank-runs::bank_runs_what_p1":
		"בנקים לא שומרים את הפיקדונות שלך בכספת. הם מלווים ומשקיעים את הכסף שלך — זה נקרא בנקאות עם רזרבה חלקית.",
	"bank-runs::bank_runs_what_p2":
		"כשיותר מדי אנשים רוצים למשוך את הכסף שלהם בו זמנית, אין לבנק מספיק מזומן לשלם לכולם. זוהי נהירה לבנקים — והיא יכולה להוביל לקריסה מלאה של הבנק.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">בנקים</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"ביטקוין יכול לשמש את כל מי שיש לו חיבור אינטרנט — ",
	"bitcoin-vs-banks::point_1_summary_2": "הוא ללא צורך באישור.",
	"bitcoin-vs-banks::point_1_summary_3":
		"בנקים יכולים לסרב לפתוח חשבונות, להקפיא או לסגור אותם, על בסיס מדיניות פנימית או הוראות ממשלתיות.",
	"bitcoin-vs-banks::point_2_summary_1":
		"רשת הביטקוין פועלת 24/7/365 ללא חלונות תחזוקה ובלי חופשות. לבנקים יש שעות פעילות מוגבלות, סגירות בסופי שבוע ותקלות תפעוליות.",
	"bitcoin-vs-banks::point_3_summary_1":
		"כל עסקת ביטקוין נמצאת על בלוקצ'יין ציבורי שכל אחד יכול לאמת. לבנקים יש פנקסים פרטיים שלקוחות לא יכולים לבקר באופן עצמאי.",
	"bitcoin-vs-banks::point_4_summary_1":
		"עם ביטקוין, אתה מחזיק את המפתחות הפרטיים שלך — ראה את ",
	"bitcoin-vs-banks::point_4_summary_2": "המדריך הפשוט שלנו לארנקי ביטקוין",
	"bitcoin-vs-banks::point_4_summary_3":
		". בנקים מחזיקים את הכסף שלך ויכולים להקפיא, להגביל או לנעול אותו בכל זמן.",
	"bitcoin-vs-banks::point_5_summary_1":
		"עמלות עסקאות ביטקוין הן שקופות וצפויות. בנקים צוברים עמלות נסתרות לחשבונות, משיכות יתר, העברות ומכשירי אוטומט.",
	"bitcoin-vs-banks::point_6_summary_1":
		"ביטקוין מאפשר לך להוציא רק את מה שיש לך באמת. בנקים מאשרים משיכות יתר ואז מחייבים אותך ברשימת עמלות.",
	"bitcoin-vs-banks::point_7_summary_1":
		"עסקת ביטקוין לא ניתנת לעצירה או לביטול אחרי שנשלחה. בנקים יכולים לחסום, להקפיא או לבטל עסקאות על בסיס מדיניות פנימית או הוראות ממשלתיות.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">אגרות חוב</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"אגרות חוב הן \"חסרות סיכון\" רק בשם — אינפלציה, שינויי ריבית וסיכון חדלות פירעון אוכלים את התשואה האמיתית.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"לביטקוין יש תנודתיות שקופה, אך אין לו סיכון צד שכנגד נסתר.",
	"bitcoin-vs-bonds::point_2_summary_1": "כשה",
	"bitcoin-vs-bonds::point_2_summary_2": "אינפלציה",
	"bitcoin-vs-bonds::point_2_summary_3":
		"עולה על תשואת אגרות החוב, מחזיקי אגרות החוב מאבדים כוח קנייה אמיתי בכל שנה. תקרת 21 המיליון של ביטקוין לא יכולה להימס באמצעות אינפלציה.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"שווקי אגרות חוב יכולים להיתקע במשברים — Silicon Valley Bank קרס בחלקו כי הוא החזיק אגרות חוב שאיבדו ערך. ראה איך ",
	"bitcoin-vs-bonds::point_3_summary_2": "נהירות לבנקים",
	"bitcoin-vs-bonds::point_3_summary_3":
		"מתרחשות ולמה ביטקוין נמנע מהן. ביטקוין פועל 24/7 בכל העולם, ללא משברי נזילות.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"מכרזי אגרות חוב ממשלתיות יכולים להיכשל אם אין מספיק קונים — ",
	"bitcoin-vs-bonds::point_4_summary_2": "ראה את המכרז החלש של 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"מחיר הביטקoin מתגלה ברציפות בשווקים פתוחים גלובליים, ללא מכרז מרכזי שיכול להיכשל.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"תשואת אגרות חוב נקבעת בזמן הקנייה. גם אם הכלכלה צומחת או המטבע קורס, התשואה שלך נשארת זהה.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"לביטקוין יש מרחב צמיחה משמעותי, ככל שהאימוץ גדל והביקוש פוגש אספקה קבועה.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"רוב אגרות החוב מוחזקות באמצעות בנקים או מתווכים, מה שמוסיף סיכון צד שכנגד. ניתן להחזיק ביטקוין ב",
	"bitcoin-vs-bonds::point_6_summary_2": "משמורת עצמית",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — מה שמסיר את הסיכון הזה לחלוטין.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"אגרות חוב תלויות לחלוטין בכך שממשלות יחזירו חוב. אם הממשלה לא תעמוד בחוב או תמיס אותו דרך אינפלציה, מחזיקי אגרות החוב מפסידים.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"ביטקוין פועל באופן עצמאי מכל ממשלה או כוח פוליטי.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">מזומן</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"ביטקוין נע בכל העולם בתוך דקות באמצעות האינטרנט. מזומן דורש נוכחות פיזית או שליחים אמינים — אי אפשר לשלוח שטר באימייל.",
	"bitcoin-vs-cash::point_2_summary_1":
		"ביטקוין עובד אותו דבר בכל מקום. מזומן מוגבל על ידי גיאוגרפיה, שערי המרת מטבע וקבלה מקומית.",
	"bitcoin-vs-cash::point_3_summary_1":
		"ממשלות יכולות לבטל את ערכו של מזומן בן לילה — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">הודו</a> עשתה זאת ב-2016. אבל גם בלי ביטול, מזומן מאבד ערך עקב",
	"bitcoin-vs-cash::point_3_summary_2": "אינפלציה",
	"bitcoin-vs-cash::point_3_summary_3":
		". שום ממשלה או כוח לא יכולים לבטל את הביטקוין.",
	"bitcoin-vs-cash::point_4_summary_1":
		"מזומן יכול להיות מזויף, לפעמים בצורה משכנעת מאוד. ביטקוין משתמש בקריפטוגרפיה והופך זיוף לבלתי אפשרי מתמטית.",
	"bitcoin-vs-cash::point_5_summary_1":
		"לביטקוין אין רשות מרכזית. מזומן מונפק על ידי ממשלות שיכולות להדפיס עוד כרצונן, לשנות עיצובים או למשוך שטרות.",
	"bitcoin-vs-cash::point_6_summary_1":
		"מזומן פגיע לגניבה, שריפה, אובדן והחרמה. ביטקוין יכול ",
	"bitcoin-vs-cash::point_6_summary_2": "להיות מוחזק במשמורת עצמית בבטחה",
	"bitcoin-vs-cash::point_6_summary_3":
		" בטלפון או בארנק חומרה שלך.",
	"bitcoin-vs-cash::point_7_summary_1":
		"ביטקוין ניתן לחלוקה ל-100 מיליון סאטושי, מה שמאפשר מיקרו-תשלומים בכל גודל. למזומן יש ערך נקוב מינימלי — אי אפשר לחלק סנט לחצי.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">מטבעות דיגיטליים של בנק מרכזי (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"אף אחד לא יכול לעצור אותך מלבצע עסקאות ביטקוין. CBDC מתוכננים כך שממשלות ובנקים מרכזיים יוכלו לשלוט בכל תשלום, ולהגביל את הפרטיות והחירות שלך.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"ביטקוין לעולם אינו פג תוקף ואין לו עלות חודשית. CBDC יכולים להיות מתוכנתים לפוג תוקף, מה שמונע חיסכון לעתיד.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"לביטקוין יש תקרה קבועה של 21 מיליון BTC. ל-CBDC אין תקרת אספקה ומאפשרים לממשלות להגדיל את אספקת הכסף כרצונן — מה שמוביל ל",
	"bitcoin-vs-cbdc::point_3_summary_2": "אינפלציה.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"כתובות ביטקוין אינן מקושרות לזהות האמיתית שלך. CBDC מחוברים ישירות ליחידים מזוהים על ידי הממשלה, ומאפשרים מעקב המוני וצנזורה פיננסית.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"כללי הביטקוין נשלטים על ידי עשרות אלפי צמתים עצמאיים. CBDC מרוכזים בממשלות ובבנקים מרכזיים, עם שליטה מלאה על הרשת.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"כל אחד יכול להריץ צומת ביטקוין ולאמת את כללי הרשת. CBDC לא מאפשרים למשתמשים להריץ צומת — צריך לבטוח ברשות מרכזית.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"אי אפשר להקפיא ביטקוין במשמורת עצמית. CBDC מתוכננים כך שממשלות ובנקים מרכזיים יוכלו להקפיא חשבונות באופן מיידי.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"ביטקוין נותן לך שליטה מלאה על הכסף שלך, אם אתה מחזיק אותו ב",
	"bitcoin-vs-cbdc::point_8_summary_2": "ארנק שלך.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC דורשים אמון בנאמנים כמו בנקים או ממשלות שמחזיקים את הכסף עבורך.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"מדיניות מוניטרית של ביטקוין נעולה בקוד ולא יכולה להשתנות. CBDC יכולים להיות מתוכנתים מחדש כרצון פוליטיקאים, מה שיוביל ל",
	"bitcoin-vs-cbdc::point_9_summary_2": "אינפלציה",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" אם יודפס יותר מדי כסף.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"ביטקוין הוא רשת המחשוב המאובטחת ביותר שנבנתה אי פעם, ומעולם לא נפרצה. CBDC מסתמכים על בנקים וממשלות שחוו פריצות אינספור.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">מטבעות קריפטו</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"פרוטוקול הביטקוין השתנה מעט מ-2009 ומספק כללים צפויים. רוב פרויקטי הקריפטו משנים פרוטוקולים, טוקנומיקה או פורקים בקביעות בגרסאות חדשות.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"ביטקוין רץ על עשרות אלפי צמתים עצמאיים בכל העולם. רוב פרויקטי הקריפטו נשלטים על ידי קרנות, חברות או צוותי מפתחים קטנים שיכולים לבצע שינויים חד-צדדיים.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"לביטקוין יש תקרה קבועה של 21 מיליון — הנכס הדיגיטלי הנדיר ביותר. לרוב פרויקטי הקריפטו יש אספקה בלתי מוגבלת או מנגנונים ליצירת טוקנים חדשים כרצון, מה שמדלל את המחזיקים.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"לביטקוין מטרה אחת: כסף דיגיטלי עמית-לעמית. כולם מבינים אותו וכולם יכולים להשתמש בו. לרוב מטבעות הקריפטו יש חוזים חכמים מורכבים או DeFi שדורשים ידע טכני מומחה לשימוש בטוח.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"מערכת הוכחת העבודה של ביטקoin פועלת בהצלחה למעלה מ-15 שנה ללא מתקפה מוצלחת על השרשרת הראשית. רוב פרויקטי הקריפטו משתמשים בשיטות הסכמה ניסיוניות שלא נבדקו היטב.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"ביטקוין הוא כסף דיגיטלי — מחסן ערך ואמצעי חליפין. רוב טוקני הקריפטו הם ספקולטיביים, טוקני שירות או ממשל ללא ערך אמיתי מוגדר.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"ביטקוין מתחזק מול מתקפה ושרד את כל המשברים, האיסורים והביקורות. רוב פרויקטי הקריפטו קורסים תחת לחץ רגולטורי, טכני או של שוק.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"לביטקוין אין מנכ\"ל, חברה או נקודת כשל יחידה. רוב פרויקטי הקריפטו תלויים במשקיעי הון סיכון, צוותים מובילים מזוהים או הישרדות של חברה אחת.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">אמנות יפה</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"כל ביטקוין זהה ובר-החלפה. כל יצירת אמנות היא ייחודית — מקורות, היסטוריה, מצב ואותנטיות שונים מקשים מאוד על השוואה ישירה.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"ביטקוין נסחר בשוק גלובלי 24/7 ונגיש לכולם. אמנות דורשת בתי מכירות פומביות, סוחרים פרטיים או גלריות מתמחות, ומכירה יכולה לארוך חודשים.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"קנייה או מכירת ביטקוין עולה פחות מ-1% בעמלות, לעיתים הרבה פחות. מכירת אמנות צוברת 30-40% עמלות לקונים דרך תיווך, ביטוח, הובלה ועלויות אישור אותנטיות.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"ביטקוין ניתן לחלוקה ל-100 מיליון סאטושי ומושלם לעסקאות בכל גודל. אי אפשר להחזיק חלק מציור או פינה של פסל ללא סיכון צד שכנגד.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"בעלות ואותנטיות של ביטקוין יכולות להיות מאומתות באופן קריפטוגרפי על ידי כל אחד על הבלוקצ'יין. אישור אותנטיות אמנות יקר ואיטי, וזייפנים מרמים בקביעות את השוק — ומכלים את הערך של היצירה בן לילה.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"ביטקוין מגובה היטב שורד שיטפונות, שריפות, רעידות אדמה וגניבה. אמנות פגיעה לכל אסון פיזי וביטוח לעיתים רחוקות מכסה הכל.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"כל מי שיש לו חיבור אינטרנט וקצת כסף יכול לקנות ביטקוין. השקעה באמנות מוגבלת בפועל לאספנים אמידים עם גישה למכירות פומביות וידע מומחה.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">זהב</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"ביטקוין יכול להישלח באופן מיידי דרך האינטרנט בעמלות נמוכות. זהב חייב להיות מועבר פיזית כדי להעביר בעלות.",
	"bitcoin-vs-gold::point_2_summary_1":
		"ביטקוין הוא מטבעו נכס דיגיטלי שאתה יכול להעביר דרך האינטרנט. זהב ברשת הוא מסמך חוב דיגיטלי — יש לך רק הבטחה של נאמן, לא את המתכת עצמה.",
	"bitcoin-vs-gold::point_3_summary_1":
		"לביטקוין יש תקרה קבועה של 21 מיליון BTC. אספקת הזהב <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">גדלה כ-1.6% בשנה</a> ומכווצת את הנתח שלך — פחות מאינפלציה של פיאט",
	"bitcoin-vs-gold::point_3_summary_2": "אינפלציה",
	"bitcoin-vs-gold::point_3_summary_3":
		", אבל עדיין יש בה אינפלציה.",
	"bitcoin-vs-gold::point_4_summary_1":
		"כשמחיר הזהב עולה, נכרה יותר זהב והמחיר יורד שוב. אספקת הביטקוין אינה אלסטית — גם אם המחירים יעלו, יהיו תמיד רק 21 מיליון.",
	"bitcoin-vs-gold::point_5_summary_1":
		"רשת הביטקוין נשלטת על ידי עשרות אלפי צמתים עצמאיים. חלק גדול מהזהב הפיזי מאוחסן במספר מצומצם של מחסנים גדולים.",
	"bitcoin-vs-gold::point_6_summary_1":
		"כל אחד יכול לאמת אותנטיות של ביטקוין על ידי הרצת צומת מלא — זאת רק אפליקציה. אימות זהב פיזי דורש להמיס אותו; ייתכן שיש בתוכו טונגסטן.",
	"bitcoin-vs-gold::point_7_summary_1":
		"ביטקוין ניתן לחלוקה ל-100 מיליון סאטושי ומושלם לרכישות בכל גודל. זהב לא יכול להתחלק בקלות לעסקאות קטנות יותר.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">נדל\"ן</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"ביטקוין נע מיידית בכל העולם. נדל\"ן מחובר למקום ספציפי וחשוף לסיכונים כלכליים, פוליטיים וסביבתיים.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"ביטקוין ניתן לחלוקה ל-100 מיליון סאטושי. נדל\"ן לא ניתן למכירה חלקית — אי אפשר למכור את המטבח או לקנות חצי חדר שינה.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"ביטקוין פועל על רשת מבוזרת ששום ממשלה לא יכולה לשלוט בה. נדל\"ן מוסדר באופן הדוק — אזורי בנייה, פיקוח על שכר דירה, הפקעה כפויה והחרמה כולם ישימים.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"ביטקוין לא דורש תחזוקה. נדל\"ן דורש תיקונים, שיפוצים, ביטוח, ניהול נכסים והתמודדות עם בעיות שוכרים.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"לביטקוין אין מסים שוטפים — מסי רווחי הון משולמים רק במכירה. נדל\"ן דורש תשלום מס ארנונה שנתי, ללא קשר להכנסה.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"ביטקוין שמגובה היטב שורד שריפות, שיטפונות ורעידות אדמה. נדל\"ן פגיע לכל האסונות וביטוח לעיתים רחוקות מכסה הכל.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"כל ביטקוין זהה ובר-החלפה. כל נכס הוא ייחודי, מה שמקשה על תמחור והשוואה.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"ביטקוין נסחר 24/7 בכל העולם לכל אחד עם חיבור אינטרנט. מכירת נדל\"ן מוגבלת לקונים מקומיים וסגירת עסקה יכולה לארוך חודשים.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"ביטקוין מאפשר בעלות ישירה לכל אדם. רכישת נדל\"ן כהשקעה, מעבר למקום מגורים עיקרי, מעלה את מחירי הדיור, מצמצמת זמינות ויוצרת משבר דיור.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">מניות</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"ביטקוין הוא נכס ישיר שאתה הבעלים שלו לחלוטין. מניה היא חלק בחברה — הערך שלה תלוי בניהול, רווחיות והחלטות שאתה לא יכול לשלוט בהן.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"לביטקוין יש תקרה קבועה של 21 מיליון BTC. חברות יכולות להנפיק מניות חדשות בכל זמן ולדלל את המחזיקים הקיימים — בדומה לאיך שמטבע פיאט ממיס מזומן דרך",
	"bitcoin-vs-stocks::point_2_summary_2": "אינפלציה",
	"bitcoin-vs-stocks::point_2_summary_3":
		". עם ביטקוין, הנתח שלך לעולם לא מצטמצם.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"לביטקוין אין מנכ\"ל או נקודת כשל יחידה. למניות יש תלות גדולה בניהול — החלטה אחת שגויה או יציאה של אדם מפתח יכולה למוטט את המחיר.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"מחיר הביטקוין מגיע משווקים פתוחים גלובליים. הערכת מניות מסתמכת על מדדים כמו P/E שיכולים להסתיר מניות מתומחרות יתר על המידה.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"ביטקוין נסחר 24/7 בכל העולם. בורסות פתוחות רק בימי עסקים ובשעות מסחר.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"עם ביטקוין אתה יכול לעבור ל",
	"bitcoin-vs-stocks::point_6_summary_2": "משמורת עצמית",
	"bitcoin-vs-stocks::point_6_summary_3":
		" עם אפליקציה פשוטה — אין צורך במתווך. מניות מוחזקות על ידי מתווכים וחושפות אותך לסיכון צד שכנגד אם הם קורסים.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"האספקה הקבועה של ביטקוין מגנה באופן אמין מפני אינפלציה. חלק מהמניות מקדימות אינפלציה, אחרות לא — אין שום ערובה.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"ההבדל בין <span class=\"orange\">ביטקוין</span> ל<span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"ביטקוין הוא רשת פתוחה שכל אחד יכול להצטרף אליה ללא אישור. Visa היא מערכת סגורה שנשלטת על ידי גופים פיננסיים שיכולים לסרב גישה — במיוחד למי שאין לו חשבון בנק או שיש לו גישה בנקאית מוגבלת.",
	"bitcoin-vs-visa::point_2_summary_1":
		"לעסקאות ביטקוין אין עמלות סוחר. Visa גובה כ-3% מכל עסקה מסוחרים — העסק שלך יכול לחסוך כסף עם",
	"bitcoin-vs-visa::point_2_summary_2": "קבלת תשלומי ביטקוין",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"כל עסקת ביטקוין נמצאת על בלוקצ'יין ציבורי וניתנת לאימות. Visa מפעילה מערכת סגורה ואקסקלוסיבית שלקוחות לא יכולים לאמת באופן עצמאי.",
	"bitcoin-vs-visa::point_4_summary_1":
		"ביטקוין לא יכול להיות מוקפא על ידי שום רשות מרכזית. Visa יכולה להקפיא חשבונות, לחסום עסקאות או לסרב לתת שירות בכל זמן.",
	"bitcoin-vs-visa::point_5_summary_1":
		"ביטקוין הוא סילוק סופי — אתה מוציא רק את מה שיש לך. כרטיסי אשראי יוצרים חוב, עם ריבית שנתית של למעלה מ-25%.",
	"bitcoin-vs-visa::point_6_summary_1": "ביטקוין מאפשר לך",
	"bitcoin-vs-visa::point_6_summary_2": "משמורת עצמית",
	"bitcoin-vs-visa::point_6_summary_3":
		" ללא בנקים או מעבדי תשלומים. כרטיסי אשראי תמיד דורשים מתווכים.",
	"bitcoin-vs-visa::point_7_summary_1":
		"ביטקוין פועל 24/7 בכל העולם ללא שעות עבודה. ל-Visa יש שעות עבודה, חלונות תחזוקה וגבולות גיאוגרפיים שיכולים לחסום עסקאות.",
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
		`translate-rest-part1 (he): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
