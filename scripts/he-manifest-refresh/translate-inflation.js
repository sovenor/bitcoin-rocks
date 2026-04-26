#!/usr/bin/env node
/**
 * Hebrew manifest refresh — inflation namespace translator.
 *
 * Hebrew conventions:
 * - RTL Hebrew script. <html dir="rtl"> set automatically by layout.tsx.
 * - Informal masculine 2nd-person "אתה/שלך" throughout (default register
 *   for Hebrew educational content; Bitcoin Embassy TLV, Bitcoin Magazine
 *   Hebrew, ynet finance copy all use this register).
 * - Straight ASCII quotes "..." in JSON output (renders correctly in
 *   Hebrew RTL flow; Hebrew typography accepts both " and the Hebrew
 *   gershayim ״ — straight quotes are simpler and standard in digital
 *   Hebrew).
 * - Western digits (0-9). Hebrew has alphabetic numerals but Western
 *   digits are universal in modern Israeli usage including finance.
 * - "Bitcoin" → "ביטקוין" (Hebrew transliteration; standard in IL
 *   Bitcoin community).
 * - "trillion" → "טריליון", "billion" → "מיליארד" (10^9 — Hebrew uses
 *   short scale like English).
 * - Numeric format: comma thousand separator, period decimal (matches
 *   the dataset and Israeli convention in finance).
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

/* ─────────────── Per-currency labels & terms ─────────────── */
/*
 * inPhrase        — "ב-X" / "בדולר אמריקאי" (used in "if you save in X...")
 * noun            — singular form ("דולר", "יורו")
 * nounPlural      — plural ("דולרים")
 * label           — display label for stat card
 * existenceTitle  — "X במחזור"
 * debtTitle       — "סך החוב הממשלתי של <Country>"
 */

const CURRENCY = {
	usd: {
		inPhrase: "בדולר אמריקאי",
		noun: "דולר",
		nounPlural: "דולרים",
		label: "דולר אמריקאי",
		existenceTitle: "דולרים אמריקאיים במחזור",
		debtTitle: "סך החוב של ממשלת ארה\"ב",
	},
	eur: {
		inPhrase: "ביורו",
		noun: "יורו",
		nounPlural: "יורו",
		label: "יורו",
		existenceTitle: "יורו במחזור",
		debtTitle: "סך החוב של ממשלות אזור היורו",
	},
	aud: {
		inPhrase: "בדולר אוסטרלי",
		noun: "דולר אוסטרלי",
		nounPlural: "דולרים אוסטרליים",
		label: "דולר אוסטרלי",
		existenceTitle: "דולרים אוסטרליים במחזור",
		debtTitle: "סך החוב של ממשלת אוסטרליה",
	},
	brl: {
		inPhrase: "בריאל ברזילאי",
		noun: "ריאל",
		nounPlural: "ריאלים",
		label: "ריאל ברזילאי",
		existenceTitle: "ריאלים ברזילאיים במחזור",
		debtTitle: "סך החוב של ממשלת ברזיל",
	},
	cad: {
		inPhrase: "בדולר קנדי",
		noun: "דולר קנדי",
		nounPlural: "דולרים קנדיים",
		label: "דולר קנדי",
		existenceTitle: "דולרים קנדיים במחזור",
		debtTitle: "סך החוב של ממשלת קנדה",
	},
	gbp: {
		inPhrase: "בפאונד בריטי",
		noun: "פאונד",
		nounPlural: "פאונדים",
		label: "פאונד בריטי",
		existenceTitle: "פאונדים בריטיים במחזור",
		debtTitle: "סך החוב של ממשלת בריטניה",
	},
	ils: {
		inPhrase: "בשקל חדש",
		noun: "שקל",
		nounPlural: "שקלים",
		label: "שקל חדש",
		existenceTitle: "שקלים ישראליים במחזור",
		debtTitle: "סך החוב של ממשלת ישראל",
	},
	inr: {
		inPhrase: "ברופי הודי",
		noun: "רופי",
		nounPlural: "רופים",
		label: "רופי הודי",
		existenceTitle: "רופים הודיים במחזור",
		debtTitle: "סך החוב של ממשלת הודו",
	},
	jpy: {
		inPhrase: "בין יפני",
		noun: "ין",
		nounPlural: "ין",
		label: "ין יפני",
		existenceTitle: "ין יפני במחזור",
		debtTitle: "סך החוב של ממשלת יפן",
	},
	mxn: {
		inPhrase: "בפסו מקסיקני",
		noun: "פסו",
		nounPlural: "פסו",
		label: "פסו מקסיקני",
		existenceTitle: "פסו מקסיקני במחזור",
		debtTitle: "סך החוב של ממשלת מקסיקו",
	},
	nzd: {
		inPhrase: "בדולר ניו-זילנדי",
		noun: "דולר ניו-זילנדי",
		nounPlural: "דולרים ניו-זילנדיים",
		label: "דולר ניו-זילנדי",
		existenceTitle: "דולרים ניו-זילנדיים במחזור",
		debtTitle: "סך החוב של ממשלת ניו זילנד",
	},
	php: {
		inPhrase: "בפסו פיליפיני",
		noun: "פסו",
		nounPlural: "פסו",
		label: "פסו פיליפיני",
		existenceTitle: "פסו פיליפיני במחזור",
		debtTitle: "סך החוב של ממשלת הפיליפינים",
	},
	thb: {
		inPhrase: "בבאט תאילנדי",
		noun: "באט",
		nounPlural: "באט",
		label: "באט תאילנדי",
		existenceTitle: "באט תאילנדי במחזור",
		debtTitle: "סך החוב של ממשלת תאילנד",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `אם אתה חוסך ${c.inPhrase}, סביר להניח ששמת לב שהכסף שלך קונה פחות ופחות. אתה צריך יותר ${c.nounPlural} כדי לקנות את אותם דברים. אתה צריך יותר ${c.nounPlural} כדי לשמור על אותה רמת חיים.`;
		case "intro_2":
			return `אבל זה לא חייב להיות ככה.`;
		case "intro_highlight":
			return `במהלך ארבע השנים האחרונות, אלה שחסכו בביטקוין ראו את החיים שלהם נעשים זולים יותר.`;
		case "proof_h2":
			return `הנה ההוכחה: הכסף שלך מאבד ערך`;
		case "proof_p1":
			return `כל ${c.noun} בחשבון הבנק שלך קונה פחות שנה אחר שנה. זה קורה כי אין תקרה לכמות ה${c.nounPlural} שאפשר ליצור.`;
		case "proof_p2":
			return `אספקה בלתי מוגבלת זו היא הסיבה העיקרית לאינפלציה. בשנים האחרונות מספר ה${c.nounPlural} במחזור גדל באופן דרמטי.`;
		case "proof_p3":
			return `כשנוצר עוד כסף יש מאין, המחיר של הכל עולה. זה כולל את חומרי הגלם שחברות קונות כדי לייצר מוצרים — מה שאומר מחירים גבוהים יותר עבורך.`;
		case "proof_p4":
			return `ככל שהחוב הממשלתי גדל, מודפס יותר כסף, כי פחות אנשים מוכנים להלוות לממשלה.`;
		case "proof_p5_before":
			return `אם אתה לא יכול ללוות, אתה לא יכול להוציא. אבל כשממשלה`;
		case "proof_p5_link":
			return `לא יכולה ללוות`;
		case "proof_p5_after":
			return `, היא פשוט מדפיסה עוד כסף.`;
		case "proof_p6":
			return `יותר חוב ממשלתי משמעו יותר הדפסת כסף. יותר הדפסת כסף משמעה יותר אינפלציה. ואין שום סימן שזה הולך להיפסק.`;
		case "btc_h2":
			return `לביטקוין אין אינפלציה`;
		case "btc_p1":
			return `אינפלציה היא כשהכסף שלך קונה פחות עם הזמן. ביטקוין הוא כסף טוב יותר, כי אין לו אינפלציה.`;
		case "btc_p2_before":
			return `ל${c.label} יש אספקה בלתי מוגבלת, כלומר ניתן להדפיס עוד בכל זמן.`;
		case "btc_p2_link":
			return `ביטקוין הוא נדיר`;
		case "btc_p2_after":
			return `, כי האספקה המקסימלית שלו היא 21 מיליון ביטקוין. אף אחד לא יכול ליצור עוד ביטקוין.`;
		case "btc_p3":
			return `מבחינה היסטורית, ביטקוין הגדיל את כוח הקנייה שלו עם הזמן, בעוד ש${c.label} איבד את כוח הקנייה שלו. הרבה אנשים משתמשים בביטקוין כחשבון חיסכון לטווח ארוך — כסף שצומח לאורך השנים מבלי שיגעו בו.`;
		case "btc_p4":
			return `מה אתה מעדיף: לחסוך ${c.inPhrase} — ${c.nounPlural} שקונים פחות עם הזמן — או לחסוך בביטקוין שמבחינה היסטורית קנה יותר?`;
		case "freedom_h2":
			return `ביטקוין הוא גם כלי לחירות`;
		case "freedom_p1":
			return `רשת הביטקוין לא שייכת לאף אחד. שום ממשלה או תאגיד לא שולטים בה. היא תוכננה כדי להגן על החירות ועל הכסף שלך.`;
		case "freedom_p2":
			return `אנשים ברחבי העולם משתמשים בביטקוין עכשיו כדי להגן על החירות שלהם — אפילו כשהממשלות שלהם לא רוצות לעזור להם או מנסות לעצור אותם.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "כוח קנייה שאבד ב-4 שנים";
		case "stat_source_bpr":
			return "מקור: Bitcoin Price Report ←";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "למד עוד ←",
	inflation_freedom_scarce_title: "נדיר",
	inflation_freedom_scarce_desc:
		"לעולם לא יהיו יותר מ-21 מיליון ביטקוין. אף אחד לא יכול להדפיס יותר.",
	inflation_freedom_decentralized_title: "מבוזר",
	inflation_freedom_decentralized_desc:
		"ביטקוין לא נשלט על ידי גוף יחיד — לא ממשלה ולא תאגיד.",
	inflation_freedom_permissionless_title: "ללא אישור",
	inflation_freedom_permissionless_desc:
		"כל אחד, מכל מקום, יכול להתחבר לרשת. אף אחד לא יכול לעצור אותך.",
	inflation_freedom_sovereign_title: "ריבוני",
	inflation_freedom_sovereign_desc:
		"מערכת חדשה שחופשייה מפוליטיקאים ומההבטחות השבורות שלהם.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "ביטקוין",
	inflation_stat_bitcoin_value: "21 מיליון",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "קבוע לנצח",
	inflation_stat_bitcoin_source: "מקור: ניירת הביטקוין ←",

	// Shared currency stat labels
	inflation_stat_comparison_today: "היום",
	inflation_stat_currency_counting: "ועדיין סופרים...",
	inflation_stat_currency_detail_4yr_lost:
		"כוח קנייה שאבד ב-4 שנים",
	inflation_stat_currency_source_cpi: "מקור: FRED CPI ←",
	inflation_stat_currency_source_debt: "מקור: FRED חוב ממשלתי ←",
	inflation_stat_currency_source_m1: "מקור: FRED אספקת כסף M1 ←",
	inflation_stat_currency_source_m1_short: "מקור: FRED ←",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "כוח קנייה שנצבר ב-4 שנים",
	inflation_stat_btc_source_bpr: "מקור: Bitcoin Price Report ←",

	// Freedom stories
	inflation_story_canada_title: "קנדה",
	inflation_story_canada_desc:
		"עובדים השתמשו בביטקוין כדי להחזיר גישה לכסף שלהם אחרי שחשבונות הבנק שלהם הוקפאו.",
	inflation_story_nigeria_title: "ניגריה",
	inflation_story_nigeria_desc:
		"מפגינים השתמשו בביטקוין כדי לממן את התנועה שלהם אחרי שהבנקים סירבו לעבוד איתם.",
	inflation_story_pennsylvania_title: "פנסילבניה",
	inflation_story_pennsylvania_desc:
		"כריית ביטקוין ניקתה פסולת פחם שהממשלה לא הייתה מוכנה לנקות.",
	inflation_story_texas_title: "טקסס",
	inflation_story_texas_desc:
		"כריית ביטקוין עזרה לשמור על רשת החשמל בזמן סופה גדולה.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — תרשים תשואה ל-4 שנים (כל המטבעות)",
	sources_bitcoin_source_code:
		"קוד המקור של ביטקוין — תקרת אספקה של 21 מיליון",
	sources_canadian_trucker:
		"מחאת נהגי המשאיות בקנדה — ביטקוין כדי לעקוף חשבונות בנק מוקפאים (יוטיוב)",
	sources_mempool_space:
		"Mempool.space — נתוני אספקה וכרייה של ביטקוין",
	sources_nigeria_endsars:
		"Quartz Africa — איך ביטקוין מימן את מחאת EndSARS בניגריה",
	sources_pennsylvania_mining:
		"כריית ביטקוין מצילה מתאן מפסולת פחם בפנסילבניה (יוטיוב)",
	sources_texas_mining:
		"כריית ביטקוין ורשת החשמל של טקסס (יוטיוב)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"לביטקוין אין אינפלציה, אבל לכסף שלך יש.",
	inflation_choose: "בחר את המטבע שלך וראה את ההוכחה",
	inflation_choose_another: "← בחר מטבע אחר",
	inflation_sticker_learn: "למד איך ביטקוין יכול לעזור.",
	inflation_sticker_lets_find_out: "בוא נגלה.",
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

		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

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
		`translate-inflation (he): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
