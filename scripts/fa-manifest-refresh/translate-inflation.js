#!/usr/bin/env node
/**
 * Persian (Farsi) manifest refresh — inflation namespace translator.
 *
 * Handles the per-currency keys (13 currencies × ~25 suffixes) plus the
 * shared non-currency labels / stories / sources / manifest-changed keys.
 *
 * Persian conventions:
 * - Formal 2nd-person plural "شما" throughout (used even for a single reader).
 * - Verbs in formal plural form.
 * - RTL script (Arabic-derived) — file content is LTR in source but the
 *   rendered HTML is wrapped in <html dir="rtl">.
 * - Western digits retained for numeric values to match the dashboard
 *   widgets (21,000,000 etc.).
 * - Quotation marks: «...» (Persian typographic).
 * - Bitcoin → «بیت‌کوین» (ZWNJ between stem and suffix).
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
	"fa.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
/*
 * inPhrase        — "به X" / "با X" (used in "if you save in X...")
 * noun            — noun form ("دلار", "یورو")
 * label           — display label for stat card
 * existenceTitle  — "X در گردش"
 * debtTitle       — "کل بدهی دولت <Country>"
 */

const CURRENCY = {
	usd: {
		inPhrase: "به دلار آمریکا",
		noun: "دلار",
		label: "دلار آمریکا",
		existenceTitle: "دلارهای آمریکا در گردش",
		debtTitle: "کل بدهی دولت فدرال آمریکا",
	},
	eur: {
		inPhrase: "به یورو",
		noun: "یورو",
		label: "یورو",
		existenceTitle: "یوروهای در گردش",
		debtTitle: "کل بدهی دولت‌های منطقه یورو",
	},
	aud: {
		inPhrase: "به دلار استرالیا",
		noun: "دلار استرالیا",
		label: "دلار استرالیا",
		existenceTitle: "دلارهای استرالیا در گردش",
		debtTitle: "کل بدهی دولت استرالیا",
	},
	brl: {
		inPhrase: "به رئال برزیل",
		noun: "رئال",
		label: "رئال برزیل",
		existenceTitle: "رئال‌های برزیل در گردش",
		debtTitle: "کل بدهی دولت برزیل",
	},
	cad: {
		inPhrase: "به دلار کانادا",
		noun: "دلار کانادا",
		label: "دلار کانادا",
		existenceTitle: "دلارهای کانادا در گردش",
		debtTitle: "کل بدهی دولت کانادا",
	},
	gbp: {
		inPhrase: "به پوند بریتانیا",
		noun: "پوند",
		label: "پوند بریتانیا",
		existenceTitle: "پوندهای بریتانیا در گردش",
		debtTitle: "کل بدهی دولت بریتانیا",
	},
	ils: {
		inPhrase: "به شِکِل اسرائیل",
		noun: "شِکِل",
		label: "شِکِل اسرائیل",
		existenceTitle: "شِکِل‌های اسرائیل در گردش",
		debtTitle: "کل بدهی دولت اسرائیل",
	},
	inr: {
		inPhrase: "به روپیه هند",
		noun: "روپیه",
		label: "روپیه هند",
		existenceTitle: "روپیه‌های هند در گردش",
		debtTitle: "کل بدهی دولت هند",
	},
	jpy: {
		inPhrase: "به یِن ژاپن",
		noun: "یِن",
		label: "یِن ژاپن",
		existenceTitle: "یِن‌های ژاپن در گردش",
		debtTitle: "کل بدهی دولت ژاپن",
	},
	mxn: {
		inPhrase: "به پزوی مکزیک",
		noun: "پزو",
		label: "پزوی مکزیک",
		existenceTitle: "پزوهای مکزیک در گردش",
		debtTitle: "کل بدهی دولت مکزیک",
	},
	nzd: {
		inPhrase: "به دلار نیوزیلند",
		noun: "دلار نیوزیلند",
		label: "دلار نیوزیلند",
		existenceTitle: "دلارهای نیوزیلند در گردش",
		debtTitle: "کل بدهی دولت نیوزیلند",
	},
	php: {
		inPhrase: "به پزوی فیلیپین",
		noun: "پزو",
		label: "پزوی فیلیپین",
		existenceTitle: "پزوهای فیلیپین در گردش",
		debtTitle: "کل بدهی دولت فیلیپین",
	},
	thb: {
		inPhrase: "به باهت تایلند",
		noun: "باهت",
		label: "باهت تایلند",
		existenceTitle: "باهت‌های تایلند در گردش",
		debtTitle: "کل بدهی دولت تایلند",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `اگر ${c.inPhrase} پس‌انداز می‌کنید، احتمالاً متوجه شده‌اید که پول شما کمتر و کمتر خرید می‌کند. برای خرید همان چیزها به ${c.noun} بیشتری نیاز دارید. برای حفظ سطح زندگی خود به ${c.noun} بیشتری نیاز دارید.`;
		case "intro_2":
			return `اما لازم نیست اینطور باشد.`;
		case "intro_highlight":
			return `در چهار سال گذشته، کسانی که با بیت‌کوین پس‌انداز کرده‌اند، شاهد ارزان‌تر شدن زندگی خود بوده‌اند.`;
		case "proof_h2":
			return `اینجاست اثبات: پول شما ارزش خود را از دست می‌دهد`;
		case "proof_p1":
			return `هر ${c.noun} در حساب بانکی شما سال به سال کمتر خرید می‌کند. این اتفاق می‌افتد چون هیچ سقفی برای تعداد ${c.noun}های ساخته‌شده وجود ندارد.`;
		case "proof_p2":
			return `این عرضه نامحدود علت اصلی تورم است. در سال‌های اخیر تعداد ${c.noun}های در گردش به‌طور چشمگیری افزایش یافته است.`;
		case "proof_p3":
			return `وقتی پول بیشتری از هیچ ایجاد می‌شود، قیمت همه چیز بالا می‌رود. این شامل مواد خامی می‌شود که شرکت‌ها برای ساخت محصولات می‌خرند — که به نوبه خود به معنای قیمت‌های بالاتر برای شماست.`;
		case "proof_p4":
			return `هر چه بدهی دولت افزایش یابد، پول بیشتری چاپ می‌شود، زیرا افراد کمتری حاضرند به دولت وام بدهند.`;
		case "proof_p5_before":
			return `اگر نتوانید وام بگیرید، نمی‌توانید خرج کنید. اما وقتی دولت`;
		case "proof_p5_link":
			return `نتواند وام بگیرد`;
		case "proof_p5_after":
			return `، به‌سادگی پول بیشتری چاپ می‌کند.`;
		case "proof_p6":
			return `بدهی دولتی بیشتر یعنی چاپ پول بیشتر. چاپ پول بیشتر یعنی تورم بیشتر. و هیچ نشانه‌ای از توقف آن دیده نمی‌شود.`;
		case "btc_h2":
			return `بیت‌کوین تورم ندارد`;
		case "btc_p1":
			return `تورم یعنی پول شما با گذشت زمان کمتر خرید می‌کند. بیت‌کوین پول بهتری است، زیرا تورم ندارد.`;
		case "btc_p2_before":
			return `${c.label} عرضه نامحدود دارد، یعنی در هر زمان می‌توان بیشتر چاپ کرد.`;
		case "btc_p2_link":
			return `بیت‌کوین کمیاب است`;
		case "btc_p2_after":
			return `، چون حداکثر عرضه‌اش ۲۱ میلیون بیت‌کوین است. هیچ‌کس نمی‌تواند بیت‌کوین بیشتری بسازد.`;
		case "btc_p3":
			return `از نظر تاریخی، بیت‌کوین با گذشت زمان قدرت خرید خود را افزایش داده است، در حالی که ${c.label} قدرت خرید خود را از دست داده است. بسیاری از مردم از بیت‌کوین به‌عنوان حساب پس‌انداز بلندمدت استفاده می‌کنند — پولی که طی سال‌ها بدون دست زدن رشد می‌کند.`;
		case "btc_p4":
			return `کدام را ترجیح می‌دهید: پس‌انداز ${c.inPhrase} — ${c.noun}هایی که با گذشت زمان کمتر خرید می‌کنند — یا پس‌انداز در بیت‌کوین که از نظر تاریخی بیشتر خرید کرده است؟`;
		case "freedom_h2":
			return `بیت‌کوین همچنین ابزاری برای آزادی است`;
		case "freedom_p1":
			return `شبکه بیت‌کوین متعلق به هیچ‌کس نیست. هیچ دولت یا شرکتی آن را کنترل نمی‌کند. برای محافظت از آزادی و پول شما طراحی شده است.`;
		case "freedom_p2":
			return `مردم سراسر جهان از هم اکنون برای محافظت از آزادی خود از بیت‌کوین استفاده می‌کنند — حتی زمانی که دولت‌هایشان نمی‌خواهند به آن‌ها کمک کنند یا سعی می‌کنند آن‌ها را متوقف کنند.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "قدرت خرید از دست رفته در ۴ سال";
		case "stat_source_bpr":
			return "منبع: Bitcoin Price Report ←";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "بیشتر بدانید ←",
	inflation_freedom_scarce_title: "کمیاب",
	inflation_freedom_scarce_desc:
		"هرگز بیش از ۲۱ میلیون بیت‌کوین وجود نخواهد داشت. هیچ‌کس نمی‌تواند بیشتر چاپ کند.",
	inflation_freedom_decentralized_title: "غیرمتمرکز",
	inflation_freedom_decentralized_desc:
		"بیت‌کوین توسط هیچ نهاد واحدی کنترل نمی‌شود — نه دولت و نه شرکت.",
	inflation_freedom_permissionless_title: "بدون مجوز",
	inflation_freedom_permissionless_desc:
		"هرکسی، از هر کجا، می‌تواند به شبکه متصل شود. هیچ‌کس نمی‌تواند شما را متوقف کند.",
	inflation_freedom_sovereign_title: "حاکمیت‌پذیر",
	inflation_freedom_sovereign_desc:
		"سیستم جدیدی که از سیاستمداران و وعده‌های شکسته‌شان آزاد است.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "بیت‌کوین",
	inflation_stat_bitcoin_value: "۲۱ میلیون",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "برای همیشه ثابت",
	inflation_stat_bitcoin_source: "منبع: وایت‌پیپر بیت‌کوین ←",

	// Shared currency stat labels
	inflation_stat_comparison_today: "امروز",
	inflation_stat_currency_counting: "و همچنان در حال افزایش است...",
	inflation_stat_currency_detail_4yr_lost:
		"قدرت خرید از دست رفته در ۴ سال",
	inflation_stat_currency_source_cpi: "منبع: FRED CPI ←",
	inflation_stat_currency_source_debt: "منبع: FRED بدهی دولت ←",
	inflation_stat_currency_source_m1: "منبع: FRED عرضه پول M1 ←",
	inflation_stat_currency_source_m1_short: "منبع: FRED ←",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "قدرت خرید به‌دست‌آمده در ۴ سال",
	inflation_stat_btc_source_bpr: "منبع: Bitcoin Price Report ←",

	// Freedom stories
	inflation_story_canada_title: "کانادا",
	inflation_story_canada_desc:
		"کارگران از بیت‌کوین برای بازیابی دسترسی به پول خود پس از انجماد حساب‌های بانکی‌شان استفاده کردند.",
	inflation_story_nigeria_title: "نیجریه",
	inflation_story_nigeria_desc:
		"معترضان پس از امتناع بانک‌ها از همکاری با آن‌ها، از بیت‌کوین برای تأمین مالی جنبش خود استفاده کردند.",
	inflation_story_pennsylvania_title: "پنسیلوانیا",
	inflation_story_pennsylvania_desc:
		"استخراج بیت‌کوین پسماندهای زغال‌سنگ را که دولت حاضر به پاکسازی نبود، تمیز کرد.",
	inflation_story_texas_title: "تگزاس",
	inflation_story_texas_desc:
		"استخراج بیت‌کوین به حفظ شبکه برق در طول یک طوفان بزرگ کمک کرد.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — نمودار بازدهی ۴ ساله (همه ارزها)",
	sources_bitcoin_source_code:
		"کد منبع بیت‌کوین — سقف عرضه ۲۱ میلیونی",
	sources_canadian_trucker:
		"اعتراض رانندگان کامیون کانادا — بیت‌کوین برای دور زدن حساب‌های بانکی منجمد شده (یوتیوب)",
	sources_mempool_space:
		"Mempool.space — داده‌های عرضه و استخراج بیت‌کوین",
	sources_nigeria_endsars:
		"Quartz Africa — چگونه بیت‌کوین اعتراض EndSARS نیجریه را تأمین مالی کرد",
	sources_pennsylvania_mining:
		"استخراج بیت‌کوین متان را از پسماندهای زغال‌سنگ پنسیلوانیا نجات می‌دهد (یوتیوب)",
	sources_texas_mining:
		"استخراج بیت‌کوین و شبکه برق تگزاس (یوتیوب)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"بیت‌کوین تورم ندارد، اما پول شما دارد.",
	inflation_choose: "ارز خود را انتخاب کنید و اثبات را ببینید",
	inflation_choose_another: "← ارز دیگری انتخاب کنید",
	inflation_sticker_learn: "بیاموزید چگونه بیت‌کوین می‌تواند کمک کند.",
	inflation_sticker_lets_find_out: "بیایید بفهمیم.",
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
		`translate-inflation (fa): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
