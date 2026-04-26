#!/usr/bin/env node
/**
 * Persian (Farsi) manifest refresh — part 2 of non-inflation namespaces.
 *
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
	"fa.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"خدمات حسابداری Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+۱۰ $",
	"business/accounting::accounting_example_loss_result": "−۱۰ $",
	"business/accounting::accounting_description":
		"راهنمای ساده حسابداری برای پرداخت‌های بیت‌کوین — کیف پول‌های ترکیبی، پایه هزینه، عایدی سرمایه و زمان تماس با حسابدار شما.",
	"business/accounting::accounting_s1_c1":
		"ساده‌ترین راه برای پذیرش بیت‌کوین استفاده از یک کیف پول ترکیبی است: ۱۰۰٪ بیت‌کوین دریافتی را به‌طور خودکار به دلار (یا ارز محلی شما) تبدیل می‌کند، به محض دریافت پرداخت.",
	"business/accounting::accounting_s1_c2":
		"با این تنظیمات، حسابداری شما مانند امروز به نظر می‌رسد — مبلغ نهایی همیشه به دلار است. بدون پایه هزینه، بدون عایدی سرمایه، بدون صفحات گسترده جدید.",
	"business/accounting::accounting_s2":
		"اگر مقداری بیت‌کوین نگه دارید: پایه هزینه خود را پیگیری کنید",
	"business/accounting::accounting_s2_c1":
		"برخی کسب‌وکارها تصمیم می‌گیرند بخشی از بیت‌کوین دریافتی را نگه دارند، به جای تبدیل خودکار همه آن. اگر شما یکی از آن‌ها هستید، گام اضافی پیگیری پایه هزینه است — ارزش دلاری هر پرداخت بیت‌کوین در روزی که آن را دریافت کرده‌اید.",
	"business/accounting::accounting_s2_c2":
		"حتی اگر کسب‌وکار خود را فقط با بیت‌کوین بسنجید، بیشتر مقامات مالیاتی همچنان نیاز دارند ارزش دلاری را نیز گزارش دهید. خبر خوب: فقط دو عدد برای هر تراکنش وجود دارد — مقدار بیت‌کوین دریافتی و ارزش دلاری آن در آن روز.",
	"business/accounting::accounting_s2_c3":
		"از ابزارهای زیر برای خودکارسازی جستجوها استفاده کنید تا مجبور نباشید هر روز قیمت‌ها را بررسی کنید.",
	"business/accounting::accounting_s3":
		"خرج کردن یا فروش بیت‌کوین نگه داشته شده",
	"business/accounting::accounting_s3_c1":
		"اگر هر پرداخت را به‌طور خودکار به دلار تبدیل می‌کنید، از این بخش صرف نظر کنید — به شما مربوط نمی‌شود.",
	"business/accounting::accounting_s3_c2":
		"مقداری بیت‌کوین نگه داشته‌اید و تصمیم می‌گیرید بعداً آن را خرج کنید یا بفروشید، قیمت فروش را در همان صفحه گسترده با پایه هزینه اضافه کنید. تفاوت بین هزینه بیت‌کوین زمانی که دریافت کردید و قیمت هنگام خرج کردن یا فروش، عایدی یا زیان سرمایه است.",
	"business/accounting::accounting_s3_c3": "دو مثال سریع:",
	"business/accounting::accounting_s4":
		"به دنبال یک متخصص هستید که بیت‌کوین را بفهمد؟",
	"business/accounting::accounting_s4_c1":
		"اگر ترجیح می‌دهید این کار را به کسی دیگر بسپارید — یا اگر حسابداری بیت‌کوین شما پیچیده‌تر از آنچه یک کیف پول ترکیبی می‌تواند مدیریت کند است — ما قویاً Satoshi Pacioli Accounting Services را توصیه می‌کنیم، شرکتی متخصص در حسابداری بیت‌کوین برای کسب‌وکارها.",
	"business/accounting::bitcoin_business_accounting_guide":
		"حسابداری بیت‌کوین برای کسب‌وکار شما",
	"business/accounting::accounting_card_bpr_label": "قیمت بیت‌کوین",
	"business/accounting::accounting_card_bpr_title":
		"قیمت‌های فعلی یا تاریخی بیت‌کوین را به دلار جستجو کنید",
	"business/accounting::accounting_card_pacioli_label":
		"حسابدار بیت‌کوین",
	"business/accounting::accounting_card_spreadsheet_label":
		"وارد کردن به Excel",
	"business/accounting::accounting_card_spreadsheet_title":
		"قیمت‌های بیت‌کوین را به‌طور خودکار به Excel وارد کنید",
	"business/accounting::accounting_card_wallets_label":
		"کیف پول‌های ترکیبی",
	"business/accounting::accounting_card_wallets_title":
		"کیف پول‌های توصیه شده ما برای کسب‌وکارها را ببینید",
	"business/accounting::accounting_disclaimer":
		"این راهنما فقط برای اطلاع‌رسانی است و مشاوره مالیاتی نیست. برای مشاوره مالیاتی در مورد وضعیت خاص خود، با یک حسابدار واجد شرایط مشورت کنید.",
	"business/accounting::accounting_disclaimer_label": "سلب مسئولیت",
	"business/accounting::accounting_example_feb_1": "۱ فوریه",
	"business/accounting::accounting_example_gain_badge":
		"عایدی سرمایه",
	"business/accounting::accounting_example_gain_explain":
		"شما ۱۰ دلار عایدی سرمایه ثبت می‌کنید.",
	"business/accounting::accounting_example_jan_1": "۱ ژانویه",
	"business/accounting::accounting_example_loss_badge":
		"زیان سرمایه",
	"business/accounting::accounting_example_loss_explain":
		"شما ۱۰ دلار زیان سرمایه ثبت می‌کنید.",
	"business/accounting::accounting_example_received_label": "دریافت شده",
	"business/accounting::accounting_example_sold_label":
		"فروخته شده یا خرج شده",
	"business/accounting::accounting_hero_subtitle":
		"پذیرش بیت‌کوین در کسب‌وکار شما نباید حسابداری شما را پیچیده کند. در اینجا نسخه کوتاه است — به علاوه ابزارها و متخصصانی که آن را آسان‌تر می‌کنند.",
	"business/accounting::accounting_intro_c1":
		"اگر در حال حاضر پول نقد یا کارت می‌پذیرید، اضافه کردن بیت‌کوین به حسابداری کسب‌وکار شما آسان‌تر از آن است که فکر می‌کنید. دو مسیر دارید: تبدیل خودکار هر پرداخت بیت‌کوین به دلار به محض دریافت (بدون نیاز به حسابداری جدید)، یا نگه داشتن بخشی به بیت‌کوین (باید چند عدد اضافی را پیگیری کنید).",
	"business/accounting::accounting_intro_c2":
		"این راهنما هر دو مسیر را توضیح می‌دهد — تا بتوانید مسیری که برای کسب‌وکارتان مناسب است انتخاب کنید و با اطمینان شروع به پذیرش بیت‌کوین کنید.",
	"business/accounting::accounting_s1":
		"مسیر آسان: تبدیل خودکار به دلار",
	"business/accounting::accounting_s3_c6":
		"و تمام. این همان ریاضیات اساسی است که برای هر دارایی دیگری که ارزش آن بالا و پایین می‌رود استفاده می‌کنید.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — قیمت فعلی و تاریخی بیت‌کوین به دلار",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — حسابداری بیت‌کوین برای کسب‌وکارها",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — وارد کردن قیمت‌های کریپتو به Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"پاسخ‌های کوتاه به سؤالاتی که تاجران معمولاً قبل از شروع پذیرش بیت‌کوین می‌پرسند — کارمزدها، تسویه، کیف پول‌ها، بازپرداخت‌ها، هزینه‌ها و خیلی بیشتر.",
	"business/faq::faq_intro_c1":
		"روی هر سؤال زیر کلیک کنید تا پاسخ ظاهر شود. وقتی آماده شروع پذیرش بیت‌کوین هستید، ابزارهای کسب‌وکار در پایین صفحه شما را مرحله به مرحله راهنمایی می‌کنند.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "حسابداری",
	"business/index::biz_label_faq": "سؤالات متداول",
	"business/index::biz_label_maps": "نقشه‌های تاجر",
	"business/index::biz_label_rewards": "پاداش‌ها",
	"business/index::biz_label_stickers": "استیکرها",
	"business/index::biz_label_wallets": "کیف پول‌ها",
	"business/index::biz_meta_description":
		"در کسب‌وکار خود بیت‌کوین بپذیرید با کارمزدهای کمتر، تسویه فوری، بدون بازپرداخت و دسترسی به مشتریان بیشتر.",
	"business/index::business_hero_subtitle":
		"پرداخت‌ها را با کارمزدهای کمتر بپذیرید، فوراً تسویه کنید و به میلیون‌ها مشتری جدید دسترسی پیدا کنید — بدون قرارداد یا هزینه‌های پنهان.",
	"business/index::business_intro_c1":
		"بیت‌کوین به کسب‌وکار شما روشی سریع‌تر، ارزان‌تر و خصوصی‌تر برای دریافت پرداخت می‌دهد. بدون واسطه. بدون بازپرداخت. بدون هزینه‌های غیرمنتظره. پولی که در چند ثانیه تسویه می‌شود، مستقیماً از مشتری به شما.",
	"business/index::business_intro_c2":
		"در زیر نسخه کوتاهی از چرایی خوب بودن بیت‌کوین برای یک کسب‌وکار آمده است — و در زیر آن، همه ابزارهایی که برای شروع امروز نیاز دارید.",
	"business/index::business_resources_heading":
		"همه چیزی که برای پذیرش بیت‌کوین نیاز دارید",
	"business/index::business_resources_intro":
		"این منابع را با سرعت خود کار کنید. هر یک یک راهنمای عملی کوتاه است.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"درباره کسب‌وکار خود به ما بگویید",
	"business/maps::biz_maps_form_intro":
		"ما فقط به چند جزئیات شما نیاز داریم تا شما را روی نقشه قرار دهیم. داده‌های آدرس فقط برای مدت زمان لازم برای ارسال کسب‌وکار شما به نقشه‌های تاجر نگهداری می‌شود.",
	"business/maps::biz_maps_hero_subtitle":
		"کسب‌وکار خود را به نقشه رایگان BTC Map اضافه کنید — دایرکتوری جهانی باز تاجرانی که بیت‌کوین می‌پذیرند — تا کاربران بیت‌کوین محلی بتوانند شما را پیدا کنند و در کسب‌وکار شما بیت‌کوین خرج کنند.",
	"business/maps::biz_maps_hero_title":
		"کسب‌وکار خود را روی نقشه‌های تاجر بیت‌کوین قرار دهید",
	"business/maps::biz_maps_intro_c1":
		"کاربران بیت‌کوین فعالانه به دنبال مکان‌هایی برای خرج کردن پول خود هستند. قرار گرفتن روی نقشه کسب‌وکار شما را در دیدرس هر کاربر بیت‌کوینی قرار می‌دهد که در نزدیکی به دنبال غذا، خرید یا اقامت است — کاملاً رایگان.",
	"business/maps::biz_maps_intro_c2":
		"فرم کوتاه زیر را پر کنید و ما کسب‌وکار شما را به BTC Map و سایر نقشه‌های تاجر بیت‌کوین ارسال می‌کنیم.",
	"business/maps::biz_maps_meta_description":
		"کسب‌وکار خود را به نقشه رایگان BTC Map و سایر نقشه‌های تاجر بیت‌کوین اضافه کنید تا کاربران بیت‌کوین محلی بتوانند شما را پیدا کنند.",
	"business/maps::biz_maps_placeholder_address": "خیابان و شماره خانه",
	"business/maps::biz_maps_placeholder_category":
		"دسته‌بندی (به‌عنوان مثال رستوران، کافه، هتل)",
	"business/maps::biz_maps_placeholder_city": "شهر",
	"business/maps::biz_maps_placeholder_country": "کشور",
	"business/maps::biz_maps_placeholder_name": "نام کسب‌وکار",
	"business/maps::biz_maps_placeholder_region":
		"منطقه / استان / ایالت",
	"business/maps::biz_maps_placeholder_website": "وب‌سایت (اختیاری)",
	"business/maps::biz_maps_view_map_cta": "مشاهده BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "مشاهده BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"از ارسال کسب‌وکار خود متشکریم. به‌زودی شما را روی نقشه‌های تاجر بیت‌کوین قرار خواهیم داد.",
	"business/maps-success::biz_maps_success_hero_title":
		"درخواست دریافت شد 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"ما کسب‌وکار شما را به BTC Map و سایر دایرکتوری‌های تاجر بیت‌کوین در طی ۱-۲ هفته اضافه خواهیم کرد. ما هر ارسال را به‌صورت دستی بررسی می‌کنیم تا دقت نقشه‌ها حفظ شود.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"وقتی ورودی شما آنلاین شد، کاربران بیت‌کوین محلی کسب‌وکار شما را پیدا خواهند کرد و برای خرج کردن بیت‌کوین به آنجا می‌آیند.",
	"business/maps-success::biz_maps_success_timeline_header":
		"قدم بعدی چیست",
	"business/maps-success::biz_maps_success_view_c1":
		"در حالی که منتظر هستید، به BTC Map نگاهی بیندازید تا شبکه در حال رشد کسب‌وکارهای پذیرنده بیت‌کوین در سراسر جهان را ببینید.",
	"business/maps-success::biz_maps_success_view_header":
		"ببینید کجا ظاهر خواهید شد",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"فایل‌های استیکر انگلیسی «ما بیت‌کوین قبول می‌کنیم» را برای چاپ استیکرهای خود دانلود کنید.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"استیکرهای «ما بیت‌کوین قبول می‌کنیم» خود را به انگلیسی چاپ کنید، تا به مشتریان خود بگویید بیت‌کوین می‌پذیرید.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"فایل‌های استیکر انگلیسی «ما بیت‌کوین قبول می‌کنیم» را دانلود کنید",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"از درخواست فایل‌های استیکر «ما بیت‌کوین قبول می‌کنیم» به زبان خود متشکریم.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"درخواست دریافت شد 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"ما فایل‌های استیکر شما را ظرف ۳-۴ هفته ایجاد و منتشر می‌کنیم. وقتی آماده شدند، می‌توانید آن‌ها را از صفحه فایل‌های استیکر ما به‌صورت رایگان برای چاپ دانلود کنید.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"ما فایل‌های استیکر را در دسته‌ها منتشر می‌کنیم، بنابراین ممکن است چند هفته طول بکشد تا زبان شما فعال شود. از صبر شما متشکریم!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"قدم بعدی چیست",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"سفارش عمده",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"درخواست یک بسته رایگان دیگر",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"شما استیکرهای رایگان «ما بیت‌کوین قبول می‌کنیم» خود را ظرف ۲-۴ هفته در یک پاکت سفید ساده با ۳ استیکر دریافت خواهید کرد.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"استیکرهای شما در راه هستند 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"اگر ۳ استیکر برای کسب‌وکار شما کافی نیست، آزادید یک بسته رایگان دیگر درخواست کنید — یا از همان چاپگری که ما استفاده می‌کنیم عمده سفارش دهید.",
	"business/sticker-success::biz_sticker_success_more_header":
		"به استیکرهای بیشتری نیاز دارید؟",
	"business/sticker-success::biz_sticker_success_tip_1":
		"روی درب اصلی یا ویترین شما، تا مشتریان قبل از ورود آن را ببینند",
	"business/sticker-success::biz_sticker_success_tip_2":
		"کنار صندوق، ترمینال پرداخت یا هر جایی که مشتریان پرداخت می‌کنند",
	"business/sticker-success::biz_sticker_success_tip_3":
		"روی منوها، لیست قیمت‌ها یا ظرف انعام",
	"business/sticker-success::biz_sticker_success_tip_4":
		"استیکرها را در جاهایی که متعلق به شما نیست یا اجازه چسباندن ندارید، قرار ندهید",
	"business/sticker-success::biz_sticker_success_tips_header":
		"مکان‌های خوب برای قرار دادن استیکر",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"به مشتریان خود اطلاع دهید که بیت‌کوین می‌پذیرید. یک بسته رایگان استیکر «ما بیت‌کوین قبول می‌کنیم» برای قرار دادن در محل خود درخواست کنید.",
	"business/stickers::biz_stickers_hero_title":
		"استیکرهای رایگان «ما بیت‌کوین قبول می‌کنیم»",
	"business/stickers::biz_stickers_intro_c1":
		"پذیرش بیت‌کوین تنها نیمی از کار است — مشتریان شما نیز باید بدانند. این استیکرهای کوچک «ما بیت‌کوین قبول می‌کنیم» برای چسباندن روی درب ورودی، صندوق، منو یا هر جایی که مشتریان پرداخت می‌کنند طراحی شده‌اند.",
	"business/stickers::biz_stickers_intro_c2":
		"ما یک بسته رایگان به هر آدرسی در ایالات متحده یا کانادا ارسال می‌کنیم، یا می‌توانید استیکرهای خود را در سراسر جهان چاپ کنید.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 کانادا — پستی رایگان",
	"business/stickers::biz_stickers_option_print":
		"🌍 جهانی — خودتان چاپ کنید",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 ایالات متحده — پستی رایگان",
	"business/stickers::biz_stickers_placeholder_translation1":
		"ترجمه عبارت «Bitcoin Accepted Here»",
	"business/stickers::biz_stickers_placeholder_translation2":
		"ترجمه عبارت «Scan to learn why Bitcoin is good for business.»",
	"business/stickers::biz_stickers_print_c1":
		"شما می‌توانید استیکرهای «ما بیت‌کوین قبول می‌کنیم» خود را چاپ کنید، هر کجای دنیا که زندگی می‌کنید. روی زبان خود در زیر کلیک کنید تا فایل‌های استیکر و دستورالعمل‌های چاپ را دانلود کنید.",
	"business/stickers::biz_stickers_print_header":
		"فایل‌های استیکر خود را خودتان چاپ کنید",
	"business/stickers::biz_stickers_request_c1":
		"فرم زیر را پر کنید تا فایل‌های استیکر «ما بیت‌کوین قبول می‌کنیم» را به زبان محلی خود درخواست کنید. وقتی آماده شدند به شما اطلاع می‌دهیم.",
	"business/stickers::biz_stickers_request_header":
		"زبان خود را نمی‌بینید؟",
	"business/stickers::biz_stickers_step_description":
		"ما بسته‌های رایگان به آدرس‌های ایالات متحده و کانادا ارسال می‌کنیم. در جاهای دیگر جهان می‌توانید استیکرهای خود را خودتان چاپ کنید.",
	"business/stickers::biz_stickers_step_header":
		"چگونه استیکرهای خود را می‌خواهید؟",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"همه کیف پول‌های بیت‌کوین با هم کار می‌کنند — بهترین را برای کسب‌وکار خود انتخاب کنید. رایگان، با تسویه فوری، بدون بازپرداخت.",
	"business/wallets::sources_breez_business":
		"Breez — کیف پول Lightning فقط بیت‌کوین",
	"business/wallets::sources_ibex":
		"IBEX — زیرساخت پرداخت‌های Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — پردازشگر پرداخت بیت‌کوین",
	"business/wallets::sources_square":
		"Square — پرداخت‌های بیت‌کوین را بپذیرید",
	"business/wallets::sources_zaprite":
		"Zaprite — صدور فاکتور بیت‌کوین برای کسب‌وکارها",
	"business/wallets::wallets_hero_subtitle":
		"کیف پول‌های بیت‌کوین رایگان هستند. بهترین را برای کسب‌وکار خود انتخاب کنید — حضوری، آنلاین یا از طریق فاکتور — و در چند دقیقه شروع به پذیرش بیت‌کوین کنید.",
	"business/wallets::wallets_section_invoice":
		"کیف پول‌ها برای کسب‌وکارهایی که به مشتریان فاکتور می‌دهند",
	"business/wallets::wallets_section_invoice_intro":
		"اگر به مشتریان فاکتور می‌دهید (مشاوره، کار آزاد، خدمات B2B)، از کیف پولی که در محیط فاکتور ساخته شده استفاده کنید. مشتری فاکتور بیت‌کوین را با چند کلیک پرداخت می‌کند.",
	"business/wallets::wallets_section_multiple":
		"کیف پول‌ها برای کسب‌وکارهایی با چندین کارمند",
	"business/wallets::wallets_section_multiple_intro":
		"اگر تیمی دارید که در صندوق پرداخت می‌پذیرد، کیف پولی را انتخاب کنید که ورود چندین کارمند را پشتیبانی می‌کند — تا هر کارمند پین خود را داشته باشد و بتوانید پیگیری کنید چه کسی چه پرداختی را دریافت کرده است.",
	"business/wallets::wallets_section_online":
		"کیف پول‌ها برای کسب‌وکارهای آنلاین",
	"business/wallets::wallets_section_online_intro":
		"آیا به‌صورت آنلاین می‌فروشید؟ این کیف پول‌ها با فروشگاه آنلاین شما متصل می‌شوند و پرداخت‌های بیت‌کوین از مشتریان سراسر جهان را می‌پذیرند — بدون بازپرداخت و بدون نیاز به حساب تاجر.",
	"business/wallets::wallets_section_sole":
		"کیف پول‌ها برای کارآفرین فردی",
	"business/wallets::wallets_section_sole_intro":
		"اگر به‌تنهایی یک مغازه، کافه، استودیو یا خدمات را اداره می‌کنید، هر یک از این کیف پول‌ها برای شما مناسب است. انتخاب کنید که آیا بیت‌کوین را نگه دارید یا بخشی از هر پرداخت را به‌طور خودکار به ارز محلی خود تبدیل کنید.",
	"business/wallets::wallets_strike_note":
		"Strike Business به شما اجازه می‌دهد پرداخت‌های بیت‌کوین و Lightning را بدون کارمزد و با تسویه فوری بپذیرید. از پرداخت‌های حضوری، آنلاین و از طریق فاکتور پشتیبانی می‌کند، با گزینه تبدیل خودکار به ارز محلی.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"ما بیت‌کوین قبول می‌کنیم",
	"business/why::why_good_for_you":
		"چرا بیت‌کوین برای شما هم خوب است",
	"business/why::why_learn_more_lowercase": "بیشتر بدانید ←",
	"business/why::why_s1_c1":
		"تورم زمانی رخ می‌دهد که پول بیشتری چاپ یا از هیچ ایجاد می‌شود. این باعث می‌شود پولی که در جیب شما است با گذشت زمان ارزش خود را از دست دهد — به همین دلیل قیمت‌ها سال به سال افزایش می‌یابند.",
	"business/why::why_s1_c2":
		"بیت‌کوین عرضه ثابت دارد: ۲۱ میلیون سکه. هیچ دولت، بانک یا شرکتی نمی‌تواند بیشتر چاپ کند. پس‌اندازهای شما به بیت‌کوین با گذشت زمان ارزش خود را حفظ می‌کنند، به جای از دست دادن خاموش آن.",
	"business/why::why_s2_c1":
		"در سال‌های اخیر بسیاری از بانک‌های آمریکایی به دلیل هجوم بانکی سقوط کرده‌اند. وقتی تعداد زیادی از مشتریان همزمان بخواهند پول خود را برداشت کنند، بانک‌ها پول نقد کافی برای پرداخت به همه ندارند.",
	"business/why::why_s2_c2":
		"علاوه بر نگهداری پول شما، بانک‌ها بخش بزرگی از آن را قرض می‌دهند و سرمایه‌گذاری می‌کنند. اگر این سرمایه‌گذاری‌ها شکست بخورند — یا سپرده‌گذاران اعتماد خود را از دست بدهند — بانک می‌تواند سقوط کند و سپرده‌های شما می‌توانند منجمد یا از دست بروند.",
	"business/why::why_s2_c3":
		"با بیت‌کوین می‌توانید پول خود را مستقیماً در کیف پول خود نگه دارید. بدون بانک. بدون واسطه. بدون هجوم بانکی.",
	"business/why::why_s3_c1":
		"برخلاف کارت‌های اعتباری، PayPal یا حساب‌های بانکی سنتی، بیت‌کوین به اجازه هیچ‌کس نیاز ندارد.",
	"business/why::why_s3_c2":
		"هیچ‌کس نمی‌تواند حساب شما را منجمد کند، یک پرداخت را مسدود کند یا شما را از شبکه بیرون کند. این اولین سیستم مالی در تاریخ است که می‌توانید بدون ترس از سانسور یا مصادره استفاده کنید.",
	"business/why::why_s4_c1":
		"بیت‌کوین اغلب سوءتفاهم می‌شود، اما کارهای خوب زیادی را بی‌سروصدا در جهان انجام می‌دهد.",
	"business/why::why_s4_c2":
		"به فعالان حقوق بشر در مبارزه برای آزادی کمک کرده، انتشار متان از زمین‌های دفن زباله و چاه‌های نفت را کاهش داده، شبکه‌های برق را پایدار کرده و کالاهای عمومی مانند پارک‌های ملی را تأمین مالی کرده است.",
	"business/why::why_biz_s1":
		"کارمزدهای کمتر، بیشتر برای کسب‌وکار",
	"business/why::why_biz_s1_c1":
		"پرداخت‌های بیت‌کوین بانک‌ها و شرکت‌های کارت را دور می‌زند که ۲-۳٪ از هر فروش را می‌گیرند. کسب‌وکار بیشتر از آنچه شما پرداخت می‌کنید نگه می‌دارد — که اغلب به معنای قیمت‌های بهتر و خدمات بهتر برای شماست.",
	"business/why::why_biz_s2":
		"تسویه فوری، بدون بازپرداخت",
	"business/why::why_biz_s2_c1":
		"پرداخت‌های بیت‌کوین در چند ثانیه تسویه می‌شوند، مستقیماً از کیف پول شما به کسب‌وکار. نیازی نیست روزها منتظر باشید تا بانک پول را آزاد کند، و هیچ اختلاف بازپرداخت گران‌قیمتی وجود ندارد — که به این معنی است که کسب‌وکار می‌تواند به جای مبارزه با تقلب، روی ارائه خدمات به مشتریان تمرکز کند.",
	"business/why::why_biz_s3":
		"پذیرش رایگان، باز برای همه",
	"business/why::why_biz_s3_c1":
		"پذیرش بیت‌کوین برای کسب‌وکار نیازی به قرارداد، هزینه‌های ماهانه یا هزینه‌های راه‌اندازی ندارد. و میلیون‌ها کاربر بیت‌کوین در سراسر جهان فعالانه به دنبال تاجرانی هستند که آن را می‌پذیرند — که به آن کسب‌وکار دید رایگان در برابر مشتریان جدید می‌دهد.",
	"business/why::why_business_cta_intro":
		"یک کسب‌وکار دارید و می‌خواهید شروع به پذیرش بیت‌کوین کنید؟",
	"business/why::why_business_cta_link":
		"ببینید چگونه کار می‌کند ←",
	"business/why::why_for_business":
		"چرا بیت‌کوین برای این کسب‌وکار خوب است",
	"business/why::why_for_business_intro":
		"با پذیرش بیت‌کوین، این کسب‌وکار بیشتر از هر فروش نگه می‌دارد، پرداخت‌ها را فوراً بدون بازپرداخت دریافت می‌کند و به مخاطب جهانی کاربران بیت‌کوین دسترسی پیدا می‌کند — بدون قرارداد یا هزینه ماهانه.",
	"business/why::why_good_for_you_intro":
		"بیت‌کوین فقط برای صندوق خوب نیست — این یک نوع پول بهتر است که از پس‌اندازها، حریم خصوصی و آزادی معامله شما محافظت می‌کند. در اینجا یک خلاصه سریع است.",
	"business/why::why_hero_subtitle":
		"شما یک استیکر «ما بیت‌کوین قبول می‌کنیم» را اسکن کرده‌اید. در اینجا چرا این خبر خوبی است — برای این کسب‌وکار و برای شما.",
	"business/why::why_intro_c1":
		"کسب‌وکاری که در آن هستید بیت‌کوین می‌پذیرد — یک شبکه پرداخت مدرن، متن‌باز که می‌تواند توسط هرکسی در جهان بدون گرفتن سهم توسط بانک‌ها و واسطه‌ها استفاده شود.",
	"business/why::why_intro_c2":
		"در زیر نسخه کوتاهی از چرایی خوب بودن پذیرش بیت‌کوین برای این کسب‌وکار آمده است، به علاوه چرا استفاده از بیت‌کوین به‌عنوان مشتری برای شما خوب است.",
	"business/why::why_next_business_label": "بیت‌کوین بپذیرید",
	"business/why::why_next_business_title":
		"بیت‌کوین را در کسب‌وکار خود بپذیرید",
	"business/why::why_next_buy_label": "بیت‌کوین بخرید",
	"business/why::why_next_buy_title": "اولین بیت‌کوین خود را بخرید",
	"business/why::why_next_learn_label": "بیشتر بدانید",
	"business/why::why_next_learn_title": "درباره بیت‌کوین بیشتر بیاموزید",
	"business/why::why_next_wallet_label": "کیف پول دریافت کنید",
	"business/why::why_next_wallet_title":
		"کیف پول بیت‌کوین خود را دریافت کنید",
	"business/why::why_whats_next_heading": "قدم بعدی کجاست؟",
	"business/why::why_whats_next_intro":
		"اگر این اولین باری است که یک استیکر بیت‌کوین را اسکن می‌کنید، اینجا مفیدترین مکان‌ها برای رفتن هستند.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "نظیر به نظیر (مستقیماً بین کاربران)",
	"buy::buy_bitcoin_guide": "چگونه بیت‌کوین بخریم",
	"buy::buy_step_1_header": "کشور خود را انتخاب کنید",
	"buy::buy_step_2_header": "روش پرداخت خود را انتخاب کنید",
	"buy::buy_step_3_header": "گزینه‌های خرید شما",
	"buy::buy_step_4_header": "بیت‌کوین خود را به‌صورت ایمن ذخیره کنید",
	"buy::buy_header_subtitle":
		"راهنمای ساده گام‌به‌گام برای خرید اولین بیت‌کوین شما.",
	"buy::buy_howto_name": "چگونه بیت‌کوین بخریم",
	"buy::buy_meta_description":
		"یاد بگیرید چگونه با راهنمای گام‌به‌گام ما بیت‌کوین را به‌صورت ایمن بخرید. کشور و روش پرداخت خود را انتخاب کنید تا بهترین گزینه‌های خرید بیت‌کوین را برای خود پیدا کنید.",
	"buy::buy_step_1_eyebrow": "گام ۱",
	"buy::buy_step_2_eyebrow": "گام ۲",
	"buy::buy_step_3_eyebrow": "گام ۳",
	"buy::buy_step_4_eyebrow": "گام ۴",
	"buy::buy_storage_cta_label": "گام بعدی",
	"buy::sources_bisq":
		"Bisq — صرافی غیرمتمرکز نظیر به نظیر بیت‌کوین",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — دایرکتوری جهانی دستگاه‌های خودپرداز بیت‌کوین",
	"buy::sources_kraken": "Kraken — صرافی محبوب بیت‌کوین",
	"buy::sources_relai":
		"Relai — اپلیکیشن خودنگهداری بیت‌کوین سوئیسی",
	"buy::sources_river":
		"River — خرید، استخراج و نگهداری فقط بیت‌کوین",
	"buy::sources_strike_lightning":
		"Strike — خرید بیت‌کوین با پشتیبانی شبکه Lightning",
	"buy::sources_swan":
		"Swan Bitcoin — میانگین هزینه دلاری فقط بیت‌کوین (DCA)",
	"buy::buy_bitcoin": "بیت‌کوین بخرید",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "افزودن زبان",
	"common::common_next_buy_bitcoin": "بیت‌کوین بخرید",
	"common::common_next_buy_bitcoin_desc":
		"یاد بگیرید چگونه بیت‌کوین را به‌صورت ایمن بخرید",
	"common::common_next_calculate": "تورم خود را محاسبه کنید",
	"common::common_next_calculate_desc":
		"ببینید تورم چگونه بر حقوق شما با گذشت زمان تأثیر می‌گذارد",
	"common::common_next_get_wallet": "کیف پول دریافت کنید",
	"common::common_next_get_wallet_desc":
		"اولین کیف پول بیت‌کوین خود را دریافت کنید — رایگان است",
	"common::common_next_keep_learning": "یادگیری را ادامه دهید",
	"common::common_next_keep_learning_desc":
		"ببینید چگونه بیت‌کوین جهان را بهتر می‌کند",
	"common::common_source_bls_cpi":
		"اداره آمار کار ایالات متحده — شاخص قیمت مصرف‌کننده (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — عرضه پول (شاخص بر اساس دسته)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — «آیا یک حراج خزانه‌داری می‌تواند شکست بخورد؟»",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "قدم بعدی چیست؟",
	"common::common_sticker_files_mission_5": "یک بسته درخواست کنید",
	"common::common_site_tagline": "آموزش بیت‌کوین برای همه.",
	"common::common_source_btc_map":
		"BTC Map — دایرکتوری جهانی تاجرانی که بیت‌کوین می‌پذیرند",
	"common::common_source_btcpayserver":
		"BTCPay Server — پردازشگر پرداخت بیت‌کوین متن‌باز و خودمیزبان رایگان",
	"common::common_source_oshi":
		"Oshi — پلتفرم پاداش بیت‌کوین برای تاجران",
	"common::common_source_strike_business":
		"Strike — پرداخت‌های بیت‌کوین و Lightning برای کسب‌وکارها",
	"common::common_sources_group_bitcoin": "داده‌های بیت‌کوین",
	"common::common_sources_group_cpi":
		"تورم / شاخص قیمت مصرف‌کننده",
	"common::common_sources_group_debt": "بدهی دولتی",
	"common::common_sources_group_money": "داده‌های عرضه پول",
	"common::common_sources_group_stories": "مثال‌های واقعی",
	"common::common_sticker_files_mission_6":
		"استیکرهای رایگان انگلیسی.",
	"common::common_sticker_files_next_flyers_label": "بروشورها",
	"common::common_sticker_files_next_flyers_title":
		"چاپ یک بروشور بیت‌کوین",
	"common::common_sticker_files_next_languages_label":
		"فایل‌های استیکر",
	"common::common_sticker_files_next_languages_title":
		"فایل‌های استیکر به زبان‌های دیگر را ببینید",
	"common::common_sticker_files_print_these":
		"این‌ها را با یک کلیک چاپ کنید",
	"common::common_sticker_name_bdhi_black":
		"استیکر «Bitcoin Doesn\u2019t Have Inflation» (مشکی)",
	"common::common_sticker_name_bdhi_orange":
		"استیکر «Bitcoin Doesn\u2019t Have Inflation» (نارنجی)",
	"common::common_sticker_name_caution":
		"استیکر بیت‌کوین «Caution! Melting Ice Cube»",
	"common::common_sticker_name_cure_inflation":
		"استیکر بیت‌کوین «Cure Inflation»",
	"common::common_sticker_name_danger":
		"استیکر بیت‌کوین «Danger! Inflation Ahead»",
	"common::common_sticker_name_fix":
		"استیکر بیت‌کوین «Fix The Money, Fix The World»",
	"common::common_sticker_name_got_inflation":
		"استیکر بیت‌کوین «Got Inflation?»",
	"common::common_sticker_name_study":
		"استیکر «Study Bitcoin»",
	"common::common_sticker_name_warning":
		"استیکر بیت‌کوین «Warning! Inflation is Stealing Your Savings»",
	"common::common_sticker_name_what_if":
		"استیکر بیت‌کوین «What if your money didn\u2019t have inflation?»",
	"common::common_sticker_tips_heading": "نکات استیکر",
	"common::common_sticker_tips_intro":
		"پس از چاپ استیکرهای خود، آن‌ها را جایی قرار دهید که مردم ببینند! مکان‌های خوب:",
	"common::common_sticker_tips_list_1":
		"مکان‌های عمومی که مردم آن‌ها را خواهند دید",
	"common::common_sticker_tips_list_2":
		"مکان‌هایی که فوراً برداشته نخواهند شد (استیکرها آسیب دائمی ایجاد نمی‌کنند)",
	"common::common_sticker_tips_list_3":
		"سطوحی که به‌خوبی می‌چسبند (فلز، پلاستیک، شیشه)",
	"common::common_sticker_tips_list_4":
		"روی ملک خصوصی، تابلوهای راهنمایی، دستگاه‌های خودپرداز یا پمپ‌های بنزین قرار ندهید",
	"common::common_stickers_printer_prefix": "ما از",
	"common::common_stickers_printer_suffix":
		"استفاده می‌کنیم اما می‌توانید از هر چاپگر استیکر استفاده کنید.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — شاخص قیمت مصرف‌کننده برای همه مصرف‌کنندگان شهری",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — عرضه پول M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"شکاف تورم خود را محاسبه کنید",
	"compound-inflation-calculator::cic_cta_label": "گام بعدی",
	"compound-inflation-calculator::cic_hero_subtitle":
		"بدانید حقوق شما چقدر باید افزایش یابد تا با تورم هماهنگ باشد.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"موضوعات بیشتر را کاوش کنید",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"ببینید بیت‌کوین چگونه به پول، آزادی، انرژی و بیشتر مرتبط است.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"یاد بگیرید تورم چگونه کار می‌کند",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"چگونه این بروشورهای بیت‌کوین را چاپ و ارسال کنیم",
	"flyers::flyers_hero_subtitle":
		"بروشورهای قابل چاپ رایگان بیت‌کوین. آن‌ها را در مکان‌های عمومی قرار دهید تا افراد بیشتری درباره بیت‌کوین بیاموزند.",
	"flyers::flyers_hero_title": "بروشورهای بیت‌کوین را چاپ و ارسال کنید",
	"flyers::flyers_next_get_stickers": "پیام را بیشتر پخش کنید",
	"flyers::flyers_next_get_stickers_desc":
		"یک بسته رایگان استیکر بیت‌کوین درخواست کنید",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"مشارکت کنید و به گسترش بیت‌کوین کمک کنید",
	"get-involved::get_involved_business_content_1":
		"می‌خواهید به ساخت اقتصاد دایره‌ای بیت‌کوین کمک کنید؟ ساده‌ترین راه کمک به کسب‌وکارهای محلی است تا شروع به پذیرش پرداخت‌های بیت‌کوین کنند.",
	"get-involved::get_involved_business_content_2":
		"آیا کسب‌وکاری را می‌شناسید که می‌تواند باز کند؟ صاحب را به صفحه ما ارجاع دهید",
	"get-involved::get_involved_business_content_3":
		"بیت‌کوین برای کسب‌وکارها.",
	"get-involved::get_involved_description":
		"ابزارهای رایگان ما گسترش پذیرش بیت‌کوین را آسان می‌کنند. استیکرها، بروشورها، استیکرهای «ما بیت‌کوین قبول می‌کنیم» برای کسب‌وکارها و کد متن‌باز که هر کسی می‌تواند در آن مشارکت کند.",
	"get-involved::get_involved_header":
		"مشارکت کنید و به گسترش بیت‌کوین کمک کنید.",
	"get-involved::get_involved_intro_5":
		"شما می‌توانید به تغییر آن کمک کنید. ما چند ابزار رایگان ساخته‌ایم تا به شما کمک کنیم امید بیت‌کوین را در جامعه خود پخش کنید.",
	"get-involved::get_involved_biz_stickers_note":
		"قبلاً بیت‌کوین می‌پذیرید؟ به مشتریان خود اطلاع دهید با استیکرهای رایگان «ما بیت‌کوین قبول می‌کنیم» ما. ما یک بسته به هر آدرسی در ایالات متحده یا کانادا ارسال می‌کنیم، یا می‌توانید در سراسر جهان خودتان چاپ کنید.",
	"get-involved::get_involved_card_biz_stickers_label":
		"استیکرهای «اینجا قبول می‌کنیم»",
	"get-involved::get_involved_card_biz_stickers_source":
		"منبع: bitcoin.rocks ←",
	"get-involved::get_involved_card_biz_stickers_title":
		"استیکرهای رایگان «ما بیت‌کوین قبول می‌کنیم» برای کسب‌وکار شما",
	"get-involved::get_involved_card_business_label":
		"بیت‌کوین برای کسب‌وکارها",
	"get-involved::get_involved_card_business_source":
		"منبع: bitcoin.rocks ←",
	"get-involved::get_involved_card_business_title":
		"همه چیزی که یک کسب‌وکار برای پذیرش پرداخت‌های بیت‌کوین نیاز دارد",
	"get-involved::get_involved_card_flyers_label": "بروشورهای قابل چاپ",
	"get-involved::get_involved_card_flyers_source":
		"منبع: bitcoin.rocks ←",
	"get-involved::get_involved_card_flyers_title":
		"یک بروشور رایگان بیت‌کوین دانلود و چاپ کنید",
	"get-involved::get_involved_card_github_label": "متن‌باز",
	"get-involved::get_involved_card_github_source": "منبع: GitHub ←",
	"get-involved::get_involved_card_github_title":
		"در bitcoin.rocks در GitHub مشارکت کنید",
	"get-involved::get_involved_card_stickers_label":
		"استیکرهای رایگان",
	"get-involved::get_involved_card_stickers_source":
		"منبع: bitcoin.rocks ←",
	"get-involved::get_involved_card_stickers_title":
		"یک بسته رایگان استیکر بیت‌کوین را مستقیماً به درب منزل خود درخواست کنید",
	"get-involved::get_involved_flyers_content_1":
		"بروشورها یکی از ساده‌ترین راه‌ها برای معرفی بیت‌کوین در جامعه شما هستند. بروشور رایگان قابل چاپ بیت‌کوین ما را دانلود کنید، تعداد دلخواه کپی چاپ کنید و آن‌ها را روی بردهای اعلانات، در کافه‌ها، در گردهمایی‌ها یا هر جایی که مردم جمع می‌شوند قرار دهید.",
	"get-involved::get_involved_flyers_content_2":
		"هر بروشور یک عنوان جذاب و یک کد QR دارد که خوانندگان کنجکاو را به bitcoin.rocks هدایت می‌کند تا بیشتر بیاموزند.",
	"get-involved::get_involved_flyers_content_3":
		"برخلاف استیکرها، بروشورها می‌توانند در هر جای دنیا به‌صورت درخواستی چاپ شوند — فقط به یک چاپگر و چند دقیقه نیاز دارید.",
	"get-involved::get_involved_flyers_header":
		"بروشور را چاپ و ارسال کنید",
	"get-involved::get_involved_flyers_image_alt":
		"پیش‌نمایش بروشور رایگان قابل چاپ بیت‌کوین bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks یک پروژه متن‌باز رایگان تحت مجوز MIT است. مأموریت ما تسریع پذیرش بیت‌کوین از طریق آموزش است — و نمی‌توانیم این کار را به‌تنهایی انجام دهیم.",
	"get-involved::get_involved_github_content_2":
		"اگر توسعه‌دهنده، طراح، نویسنده یا مترجم هستید، راهی برای کمک وجود دارد. ما به‌ویژه منتظر افرادی هستیم که می‌توانند محتوای ما را به زبان‌های بیشتری ترجمه کنند، تا مردم سراسر جهان بتوانند به زبان مادری خود درباره بیت‌کوین بیاموزند.",
	"get-involved::get_involved_github_content_3":
		"مخزن ما را فورک کنید، یک pull request باز کنید، یک issue ایجاد کنید یا به پروژه ستاره بدهید. هر مشارکت به رسیدن بیت‌کوین به افراد بیشتری کمک می‌کند.",
	"get-involved::get_involved_github_header":
		"در GitHub مشارکت کنید",
	"get-involved::get_involved_sticker_image_alt":
		"بسته استیکرهای متنی رایگان بیت‌کوین bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "پس‌انداز",
	"index::home_card_label_art_1": "بیایید مقایسه کنیم",
	"index::home_card_label_art_2": "پیام را پخش کنید",
	"index::home_card_label_art_3": "هنر خیابانی",
	"index::home_card_label_bank_runs": "سیستم با ذخیره کامل",
	"index::home_card_label_bonds": "بیایید مقایسه کنیم",
	"index::home_card_label_business_1": "تفاوت چیست؟",
	"index::home_card_label_business_2": "پرداخت‌های بیت‌کوین را بپذیرید",
	"index::home_card_label_cash": "بیایید مقایسه کنیم",
	"index::home_card_label_cbdc": "باز یا بسته؟",
	"index::home_card_label_coding_1": "دوره تعاملی",
	"index::home_card_label_coding_2": "سخت‌افزار بسازید",
	"index::home_card_label_coding_3": "چالش‌های برنامه‌نویسی",
	"index::home_card_label_crowdfunding_1": "اعتراضات EndSARS",
	"index::home_card_label_crowdfunding_2": "پول غیرقابل توقف",
	"index::home_card_label_crowdfunding_3": "پروژه خود را تأمین مالی کنید",
	"index::home_card_label_crypto": "تفاوت چیست؟",
	"index::home_card_label_energy_1": "پایدار کردن شبکه",
	"index::home_card_label_energy_4": "مدیریت تقاضا",
	"index::home_card_label_energy_5": "برق‌رسانی روستایی",
	"index::home_card_label_energy_6": "مشوق‌های انرژی تجدیدپذیر",
	"index::home_card_label_environment_1": "کاهش متان",
	"index::home_card_label_environment_2": "یک پارک ملی را نجات داد",
	"index::home_card_label_environment_3": "سبزترین صنعت",
	"index::home_card_label_environment_4": "سوزاندن گاز را کاهش می‌دهد",
	"index::home_card_label_equality_1": "امید و فرصت",
	"index::home_card_label_equality_2": "برابری‌ساز بزرگ",
	"index::home_card_label_food_1": "قیمت‌های مواد غذایی",
	"index::home_card_label_food_2": "مزارع و زمین",
	"index::home_card_label_freedom_1": "رژیم‌های اقتدارگرا",
	"index::home_card_label_freedom_2": "یک ابزار واحد",
	"index::home_card_label_get_started_1":
		"اصول برای مبتدیان",
	"index::home_card_label_get_started_2": "اولین کیف پول شما",
	"index::home_card_label_get_started_3": "بیت‌کوین بخرید",
	"index::home_card_label_gold": "کدام بهتر است؟",
	"index::home_card_label_housing_1": "مسکن ارزان‌قیمت",
	"index::home_card_label_human_rights_1":
		"حقوق بشر را ترویج می‌کند",
	"index::home_card_label_human_rights_2": "پذیرش از پایین",
	"index::home_card_label_human_rights_3": "حضور بین‌المللی",
	"index::home_card_label_inflation": "بیت‌کوین پول بهتری است",
	"index::home_card_label_networks_1": "نمای زنده شبکه",
	"index::home_card_label_networks_2": "بیایید مقایسه کنیم",
	"index::home_card_label_payments_1": "تفاوت چیست؟",
	"index::home_card_label_payments_2": "پرداخت‌های سریع و ارزان",
	"index::home_card_label_payments_3": "انتقال‌های فرامرزی",
	"index::home_card_label_payments_4": "پرداخت‌ها را بپذیرید",
	"index::home_card_label_politics_1": "پارادوکس سیاسی",
	"index::home_card_label_politics_2": "شرط بزرگ",
	"index::home_card_label_property_rights_1": "بیایید مقایسه کنیم",
	"index::home_card_label_property_rights_2": "مالکیت واقعی",
	"index::home_card_label_salary": "از حقوق خود محافظت کنید",
	"index::home_card_label_self_custody_1":
		"راهنمای کیف پول‌های بیت‌کوین",
	"index::home_card_label_self_custody_2": "مهم‌ترین گام",
	"index::home_card_label_self_custody_3": "پول حاکمیت‌پذیر",
	"index::home_card_label_war_1": "پایان دادن به جنگ‌ها برای همیشه",
	"index::home_card_label_war_2": "به کهنه‌سربازان کمک کنید",
	"index::home_card_label_war_3": "از جنگ فرار کنید",
	"index::home_h1":
		"بیت‌کوین پول بهتری است که جهانی بهتر می‌سازد.",
	"index::home_nav_about": "درباره ما",
	"index::home_nav_get_involved": "مشارکت کنید",
	"index::home_nav_learn": "یاد بگیرید",
	"index::home_source_prefix": "منبع:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon و Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "به",
	"lightning::lightning_grid_heading":
		"کیف پول‌های محبوب Lightning",
	"lightning::lightning_hardware_cta_label":
		"کیف پول‌های سخت‌افزاری",
	"lightning::lightning_header_subtitle":
		"Lightning به شما اجازه می‌دهد بیت‌کوین را در چند ثانیه با کسری از یک سنت ارسال کنید — کیف پولی را انتخاب کنید که با مقدار بیت‌کوینی که می‌خواهید خرج کنید مطابقت دارد.",
	"lightning::lightning_s1_c4_end": "برای اطلاعات بیشتر.",
	"lightning::lightning_s1_c4_link":
		"راهنمای کیف پول سخت‌افزاری بیت‌کوین",
	"lightning::sources_acinq_phoenix":
		"ACINQ — کیف پول Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — کیف پول Lightning خودمدیریتی",
	"lightning::sources_lightning_labs":
		"Lightning Labs — مستندات شبکه Lightning",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — کیف پول Lightning نگهبان‌شده",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone، Android و وب",
	"nostr/index::nostr_platform_web": "مرورگر وب",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr یک پروتکل ارتباطی غیرمتمرکز جدید برای وب است — هیچ شرکتی مالک آن نیست، دارای zap های بیت‌کوین داخلی است و می‌توانید بین کلاینت‌ها جابجا شوید بدون از دست دادن فالوورها.",
	"nostr/index::nostr_amethyst_f1":
		"ویژگی‌های زیاد و گزینه‌های سفارشی‌سازی",
	"nostr/index::nostr_amethyst_f2":
		"نیازمند یک کیف پول بیت‌کوین جداگانه",
	"nostr/index::nostr_amethyst_f3": "۱۰۰٪ رایگان",
	"nostr/index::nostr_damus_f1":
		"رابط کاربری آشنای شبیه Twitter",
	"nostr/index::nostr_damus_f2":
		"نیازمند یک کیف پول بیت‌کوین جداگانه",
	"nostr/index::nostr_damus_f3": "۱۰۰٪ رایگان",
	"nostr/index::nostr_download_heading":
		"یک کلاینت رایگان Nostr دانلود کنید",
	"nostr/index::nostr_download_intro":
		"کلاینت‌های Nostr اپلیکیشن‌های رایگانی هستند که به شما اجازه می‌دهند شبکه Nostr را بخوانید و بنویسید. همه با هم کار می‌کنند — می‌توانید در هر زمان کلاینت‌ها را تغییر دهید و فالوورها و محتوای خود را حفظ کنید.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr یک پروتکل ارتباطی غیرمتمرکز جدید برای وب است — هیچ شرکتی مالک آن نیست، دارای zap های بیت‌کوین داخلی است و می‌توانید بین اپلیکیشن‌ها جابجا شوید بدون از دست دادن فالوورها.",
	"nostr/index::nostr_hero_title": "Nostr چیست؟",
	"nostr/index::nostr_intro_c1":
		"Nostr شبیه ایمیل است: هیچ‌کس مالک پروتکل نیست، هرکسی می‌تواند یک اپلیکیشن روی آن بسازد و شما انتخاب می‌کنید کدام برای شما بهتر است. برخلاف Twitter یا Facebook، هیچ شرکت مرکزی‌ای وجود ندارد که بتواند حساب‌های شما را سانسور، اخراج یا ساکت کند.",
	"nostr/index::nostr_intro_c2":
		"در زیر نسخه کوتاهی از اهمیت Nostr آمده است — و سپس همه کلاینت‌های رایگان Nostr که برای شروع امروز نیاز دارید.",
	"nostr/index::nostr_iris_f1":
		"بسیار آسان — نیازی به نصب ندارد",
	"nostr/index::nostr_iris_f2":
		"راهی آسان برای امتحان Nostr با یک حساب آزمایشی",
	"nostr/index::nostr_iris_f3": "۱۰۰٪ رایگان",
	"nostr/index::nostr_learn_more_label": "عمیق شوید",
	"nostr/index::nostr_learn_more_title":
		"در nostr.how درباره Nostr بیشتر بیاموزید",
	"nostr/index::nostr_primal_f1": "اولین کلاینت توصیه شده ما",
	"nostr/index::nostr_primal_f2":
		"کیف پول zap بیت‌کوین داخلی",
	"nostr/index::nostr_primal_f3": "۱۰۰٪ رایگان",
	"nostr/index::nostr_s1": "یک پروتکل، نه یک پلتفرم",
	"nostr/index::nostr_s1_c1":
		"Nostr یک پروتکل جدید است که به شما اجازه می‌دهد روی وب بدون ترس از سانسور، ممنوعیت یا ساکت شدن ارتباط برقرار کنید.",
	"nostr/index::nostr_s1_c2":
		"پلتفرم‌هایی مانند Twitter یا Facebook تحت کنترل یک شرکت هستند، اما پروتکل Nostr تحت کنترل هیچ‌کس نیست.",
	"nostr/index::nostr_s2": "آزادی حرکت",
	"nostr/index::nostr_s2_c1":
		"Nostr شبیه ایمیل است. هیچ‌کس پروتکل ایمیل را کنترل نمی‌کند و هرکسی می‌تواند یک کلاینت بسازد (مانند Gmail، Hotmail و غیره).",
	"nostr/index::nostr_s2_c2":
		"پروتکل Nostr نیز تحت کنترل هیچ‌کس نیست و هرکسی می‌تواند یک کلاینت بسازد (مانند Damus، Amethyst و غیره).",
	"nostr/index::nostr_s2_c3":
		"اگر از نحوه کار یک کلاینت خاص خوشتان نمی‌آید، می‌توانید حساب Nostr خود را به کلاینت دیگری منتقل کنید، بدون از دست دادن فالوورها یا محتوا.",
	"nostr/index::nostr_s3": "بیت‌کوین ساخته شده است",
	"nostr/index::nostr_s3_c1":
		"بیت‌کوین در پروتکل Nostr ساخته شده است. وقتی محتوایی می‌بینید که دوست دارید، می‌توانید یک «zap بیت‌کوین» به‌عنوان تشکر به نویسنده ارسال کنید.",
	"nostr/index::nostr_s3_c2":
		"در پلتفرم‌های متمرکز مانند Twitter و Facebook، شرکت مرکزی از محتوای شما پول در می‌آورد. اما در پروتکل‌های باز مانند Nostr، شما از محتوای خود پول در می‌آورید.",
	"nostr/index::sources_damus": "Damus — کلاینت Nostr برای iPhone",
	"nostr/index::sources_iris": "Iris — کلاینت Nostr برای مرورگر وب",
	"nostr/index::sources_nostr_how": "nostr.how — Nostr چیست؟",
	"nostr/index::sources_nostr_protocol":
		"پروتکل Nostr — مشخصات متن‌باز",
	"nostr/index::sources_primal":
		"Primal — کلاینت Nostr با کیف پول zap بیت‌کوین داخلی",
	"nostr/index::what_is_nostr": "Nostr چیست؟",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"استیکرهای بیت‌کوین خود را با این فایل‌ها چاپ کنید.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"درخواست دریافت شد 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"سفارش عمده",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"در Nostr به اشتراک بگذارید",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Nostr چیست؟",
	"sticker-success::sticker_success_bulk_header":
		"به استیکرهای بیشتری نیاز دارید؟",
	"sticker-success::sticker_success_hero_title":
		"استیکرهای شما در راه هستند 🎉",
	"sticker-success::sticker_success_share_header":
		"جایی که استیکرهای خود را قرار دادید به اشتراک بگذارید",
	"sticker-success::sticker_success_tips_header":
		"مکان‌های خوب برای قرار دادن استیکر",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "بیت‌کوین",
	"stickers::stickers_flyers_link_before":
		"و وقتی شروع کردید، ",
	"stickers::stickers_instructions_1":
		"آدرس پستی خود را وارد کنید و ما یک بسته رایگان استیکر بیت‌کوین را پست می‌کنیم. استیکرهای شما در یک پاکت سفید ساده می‌رسند.",
	"stickers::stickers_btn_choose_pack": "این بسته را انتخاب کنید",
	"stickers::stickers_bulk_c1":
		"بیشتر از چند استیکر می‌خواهید؟",
	"stickers::stickers_bulk_c2":
		"از همان چاپگری که ما استفاده می‌کنیم عمده سفارش دهید",
	"stickers::stickers_bulk_c3":
		"— هرچه بیشتر بخرید، هر واحد ارزان‌تر می‌شود.",
	"stickers::stickers_bulk_cta": "استیکرها را به‌صورت عمده بخرید",
	"stickers::stickers_bulk_header":
		"استیکرها را به‌صورت عمده سفارش دهید",
	"stickers::stickers_hero_subtitle":
		"یک بسته رایگان استیکر بیت‌کوین درخواست کنید و در مکان‌های عمومی قرار دهید تا افراد بیشتری درباره بیت‌کوین بیاموزند.",
	"stickers::stickers_hero_title": "استیکرهای رایگان بیت‌کوین",
	"stickers::stickers_intro_c1":
		"مأموریت ما این است که به شما کمک کنیم افراد بیشتری را با استیکرها «نارنجی‌پیل» کنید، با چسباندن استیکرهای بیت‌کوین در مکان‌های عمومی. همه استیکرهای ما دارای کدهای QR هستند که به صفحات آموزشی درباره",
	"stickers::stickers_intro_c3": "تورم",
	"stickers::stickers_intro_c4":
		"یک بسته استیکر در زیر انتخاب کنید و نحوه دریافت آن را انتخاب کنید — ما یک بسته رایگان به هر کسی در ایالات متحده یا کانادا ارسال می‌کنیم، یا می‌توانید استیکرهای خود را در سراسر جهان چاپ کنید.",
	"stickers::stickers_mail_header":
		"ما استیکرها را به‌صورت رایگان پستی ارسال می‌کنیم",
	"stickers::stickers_next_print_flyers": "پیام را دورتر پخش کنید",
	"stickers::stickers_next_print_flyers_desc":
		"بروشورهای رایگان بیت‌کوین را چاپ کنید و در مکان‌های عمومی قرار دهید",
	"stickers::stickers_option_bulk":
		"📦 جهانی — عمده سفارش دهید",
	"stickers::stickers_option_canada":
		"🇨🇦 کانادا — پستی رایگان",
	"stickers::stickers_option_print":
		"🌍 جهانی — خودتان چاپ کنید",
	"stickers::stickers_option_usa":
		"🇺🇸 ایالات متحده — پستی رایگان",
	"stickers::stickers_print_c1":
		"می‌توانید با چاپ استیکرها خودتان مشارکت کنید، هر کجای دنیا که زندگی می‌کنید. روی زبان خود در زیر کلیک کنید تا فایل‌های استیکر و دستورالعمل‌های چاپ را دانلود کنید.",
	"stickers::stickers_print_c2":
		"همه استیکرها به همه زبان‌ها در دسترس نیستند.",
	"stickers::stickers_print_header":
		"فایل‌های استیکر خود را خودتان چاپ کنید",
	"stickers::stickers_request_c1":
		"فرم زیر را پر کنید تا فایل‌های استیکر را به زبان محلی خود درخواست کنید. وقتی آماده شدند به شما اطلاع می‌دهیم.",
	"stickers::stickers_request_header":
		"زبان خود را نمی‌بینید؟",
	"stickers::stickers_share_c2":
		"ما را در Nostr دنبال کنید، با جستجوی",
	"stickers::stickers_share_c3":
		"در هر کلاینت Nostr.",
	"stickers::stickers_signs_pack_description":
		"استیکرهای هشدار، احتیاط و اطلاعیه با پیام‌های بیت‌کوین — طراحی شده برای جلب توجه و متوقف کردن مردم.",
	"stickers::stickers_step_1_description":
		"هر بسته دسته متفاوتی از استیکرهای بیت‌کوین با کدهای QR دارد که به مردم درباره بیت‌کوین آموزش می‌دهد.",
	"stickers::stickers_step_1_eyebrow": "گام ۱",
	"stickers::stickers_step_1_header":
		"یک بسته استیکر انتخاب کنید",
	"stickers::stickers_step_2_description":
		"ما بسته‌های رایگان به آدرس‌های ایالات متحده و کانادا ارسال می‌کنیم. در جاهای دیگر جهان می‌توانید استیکرهای خود را خودتان چاپ کنید یا عمده سفارش دهید.",
	"stickers::stickers_step_2_eyebrow": "گام ۲",
	"stickers::stickers_step_2_header":
		"چگونه استیکرهای خود را می‌خواهید؟",
	"stickers::stickers_text_pack_description":
		"ترکیبی از شعارها و افکار شادمانه بیت‌کوین، طراحی شده برای برانگیختن کنجکاوی در مکان‌های عمومی.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — کیف پول خود را انتخاب کنید",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — بررسی نگهداری بذر فلزی بیت‌کوین",
	"wallets::wallets_lightning_cta_label": "شبکه Lightning",
	"wallets::sources_blockstream_green":
		"Blockstream Green — کیف پول بیت‌کوین خودمدیریتی",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — کیف پول سخت‌افزاری بیت‌کوین",
	"wallets::sources_coldcard_mk5":
		"Coinkite — کیف پول سخت‌افزاری Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — کیف پول سخت‌افزاری Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — کیف پول سخت‌افزاری Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — دستگاه امضای DIY متن‌باز برای تراکنش‌های بیت‌کوین",
	"wallets::wallets_grid_heading": "کیف پول‌های محبوب بیت‌کوین",
	"wallets::wallets_header_subtitle":
		"راهنمای گام‌به‌گام برای انتخاب کیف پول، پشتیبان‌گیری از کلیدهای خود و گرفتن کنترل کامل بر بیت‌کوین خود.",
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
		`translate-rest-part2 (fa): filled ${filled}, already-done ${skipped}`,
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
