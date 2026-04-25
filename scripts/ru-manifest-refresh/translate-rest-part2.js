#!/usr/bin/env node
/**
 * Russian manifest refresh — part 2 of non-inflation namespaces.
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
	"ru.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Бухгалтерские услуги Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Простой гайд по учёту платежей в Bitcoin — гибридные кошельки, базовая стоимость, прирост капитала и когда стоит обращаться к бухгалтеру.",
	"business/accounting::accounting_s1_c1":
		"Самый простой способ принимать Bitcoin — использовать гибридный кошелёк, который автоматически продаёт 100 % полученного Bitcoin за доллары (или местную валюту) сразу после получения платежа.",
	"business/accounting::accounting_s1_c2":
		"С такой настройкой ваш учёт остаётся таким же, как и сегодня — итоговая сумма каждый раз в долларах. Никакой базовой стоимости, никакого прироста капитала, никаких новых таблиц.",
	"business/accounting::accounting_s2":
		"Если вы оставляете часть Bitcoin: записывайте свою базовую стоимость",
	"business/accounting::accounting_s2_c1":
		"Некоторые компании предпочитают оставлять часть полученного Bitcoin вместо того, чтобы автоматически конвертировать всё. Если это ваш случай, дополнительный шаг — записывать базовую стоимость, то есть стоимость каждого платежа в Bitcoin в долларах в день получения.",
	"business/accounting::accounting_s2_c2":
		"Даже если вы мысленно ведёте бизнес исключительно в Bitcoin, налоговые органы в большинстве случаев всё равно ожидают отчётности в долларах. Хорошая новость: это всего два числа на транзакцию — количество полученного Bitcoin и его стоимость в долларах в тот день.",
	"business/accounting::accounting_s2_c3":
		"Используйте инструменты ниже, чтобы автоматизировать поиск курса, чтобы не приходилось проверять цены каждый день.",
	"business/accounting::accounting_s3":
		"Тратите или продаёте Bitcoin, который оставили",
	"business/accounting::accounting_s3_c1":
		"Если вы конвертируете каждый платёж автоматически в доллары, пропустите этот раздел — он к вам не относится.",
	"business/accounting::accounting_s3_c2":
		"Если вы оставили часть Bitcoin, а потом решили его потратить или продать, добавьте цену продажи в ту же таблицу с базовой стоимостью. Разница между тем, сколько Bitcoin стоил при получении и при продаже или трате — это прирост капитала или убыток.",
	"business/accounting::accounting_s3_c3": "Два быстрых примера:",
	"business/accounting::accounting_s4":
		"Нужен профессионал, разбирающийся в Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Если вы предпочитаете передать это кому-то другому — или ваш учёт Bitcoin сложнее, чем может решить гибридный кошелёк, — мы настоятельно рекомендуем Satoshi Pacioli Accounting Services, фирму, специализирующуюся на бухгалтерии Bitcoin для бизнеса.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Учёт Bitcoin для вашего бизнеса",
	"business/accounting::accounting_card_bpr_label": "ЦЕНА BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Смотрите текущие или исторические цены Bitcoin в долларах",
	"business/accounting::accounting_card_pacioli_label":
		"БУХГАЛТЕР ПО BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label":
		"ИМПОРТ В EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Автоматически импортируйте цены Bitcoin в Excel",
	"business/accounting::accounting_card_wallets_label": "ГИБРИДНЫЕ КОШЕЛЬКИ",
	"business/accounting::accounting_card_wallets_title":
		"Посмотрите наши рекомендуемые кошельки для бизнеса",
	"business/accounting::accounting_disclaimer":
		"Этот гайд носит исключительно информационный характер и не является налоговой консультацией. За консультацией по вашей конкретной ситуации обратитесь к квалифицированному бухгалтеру.",
	"business/accounting::accounting_disclaimer_label":
		"Отказ от ответственности",
	"business/accounting::accounting_example_feb_1": "1 февраля",
	"business/accounting::accounting_example_gain_badge": "Прирост капитала",
	"business/accounting::accounting_example_gain_explain":
		"Вы фиксируете прирост капитала в 10 $.",
	"business/accounting::accounting_example_jan_1": "1 января",
	"business/accounting::accounting_example_loss_badge": "Убыток",
	"business/accounting::accounting_example_loss_explain":
		"Вы фиксируете убыток в 10 $.",
	"business/accounting::accounting_example_received_label": "Получено",
	"business/accounting::accounting_example_sold_label": "Продано или потрачено",
	"business/accounting::accounting_hero_subtitle":
		"Принимать Bitcoin в бизнесе не должно усложнять учёт. Вот короткая версия — плюс инструменты и специалисты, которые делают это безболезненным.",
	"business/accounting::accounting_intro_c1":
		"Если вы уже принимаете наличные или карты, добавить Bitcoin в учёт проще, чем кажется. У вас два пути: автоматически конвертировать каждый Bitcoin-платёж в доллары при получении (никакого нового учёта) или оставить часть в Bitcoin (нужно записывать пару дополнительных чисел).",
	"business/accounting::accounting_intro_c2":
		"Этот гайд проходит оба пути — чтобы вы выбрали тот, который подходит вашему бизнесу, и спокойно начали принимать Bitcoin.",
	"business/accounting::accounting_s1":
		"Простой путь: автоматическая конвертация в доллары",
	"business/accounting::accounting_s3_c6":
		"И всё. Базовая математика та же, что и для любого другого актива, который растёт или падает в цене.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — текущая и историческая цена Bitcoin в долларах",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — бухгалтерия Bitcoin для бизнеса",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — импорт цен криптовалют в Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Короткие ответы на вопросы, которые торговцы обычно задают перед тем, как начать принимать Bitcoin: комиссии, расчёты, кошельки, чарджбэки, расходы и многое другое.",
	"business/faq::faq_intro_c1":
		"Нажмите на любой вопрос ниже, чтобы открыть ответ. Когда будете готовы начать принимать Bitcoin, ресурсы для бизнеса в конце страницы проведут вас шаг за шагом.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "БУХГАЛТЕРИЯ",
	"business/index::biz_label_faq": "ЧАСТЫЕ ВОПРОСЫ",
	"business/index::biz_label_maps": "КАРТЫ ТОРГОВЦЕВ",
	"business/index::biz_label_rewards": "ВОЗНАГРАЖДЕНИЯ",
	"business/index::biz_label_stickers": "НАКЛЕЙКИ",
	"business/index::biz_label_wallets": "КОШЕЛЬКИ",
	"business/index::biz_meta_description":
		"Принимайте Bitcoin в своём бизнесе с более низкими комиссиями, мгновенными расчётами, без чарджбэков, и привлекайте больше клиентов.",
	"business/index::business_hero_subtitle":
		"Принимайте платежи с более низкими комиссиями, мгновенным расчётом и доступом к миллионам новых клиентов — без контрактов и скрытых платежей.",
	"business/index::business_intro_c1":
		"Bitcoin даёт вашему бизнесу более быстрый, дешёвый и приватный способ получать платежи. Без посредников. Без чарджбэков. Без контрактов. Просто деньги, которые приходят за секунды напрямую от клиента к вам.",
	"business/index::business_intro_c2":
		"Ниже короткая версия того, почему Bitcoin полезен для бизнеса — а затем все ресурсы, которые нужны, чтобы начать принимать его уже сегодня.",
	"business/index::business_resources_heading":
		"Всё, что нужно, чтобы принимать Bitcoin",
	"business/index::business_resources_intro":
		"Изучайте эти ресурсы в своём темпе. Каждый — это короткий практичный гайд.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Расскажите о своём бизнесе",
	"business/maps::biz_maps_form_intro":
		"Нам нужно всего несколько данных, чтобы добавить вас на карту. Мы храним адресные данные ровно столько, сколько нужно, чтобы отправить ваш бизнес на карты.",
	"business/maps::biz_maps_hero_subtitle":
		"Бесплатно добавьте свой бизнес на BTC Map — открытый глобальный каталог торговцев, принимающих Bitcoin, — чтобы пользователи Bitcoin рядом с вами нашли вас и тратили у вас Bitcoin.",
	"business/maps::biz_maps_hero_title":
		"Поместите свой бизнес на карты Bitcoin-торговцев",
	"business/maps::biz_maps_intro_c1":
		"Пользователи Bitcoin активно ищут места, где можно потратить деньги. Появление на карте показывает ваш бизнес каждому пользователю Bitcoin, который ищет, где поесть, купить что-то или остановиться рядом, — и это полностью бесплатно.",
	"business/maps::biz_maps_intro_c2":
		"Просто заполните короткую форму ниже, и мы отправим ваш бизнес на BTC Map и другие карты Bitcoin-торговцев.",
	"business/maps::biz_maps_meta_description":
		"Бесплатно добавьте свой бизнес на BTC Map и другие карты Bitcoin-торговцев, чтобы пользователи Bitcoin рядом с вами нашли вас.",
	"business/maps::biz_maps_placeholder_address": "Улица и номер дома",
	"business/maps::biz_maps_placeholder_category":
		"Категория (например, ресторан, кафе, отель)",
	"business/maps::biz_maps_placeholder_city": "Город",
	"business/maps::biz_maps_placeholder_country": "Страна",
	"business/maps::biz_maps_placeholder_name": "Название бизнеса",
	"business/maps::biz_maps_placeholder_region": "Регион / область / штат",
	"business/maps::biz_maps_placeholder_website": "Сайт (необязательно)",
	"business/maps::biz_maps_view_map_cta": "Открыть BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Открыть BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Спасибо за отправку информации о вашем бизнесе. Скоро мы добавим вас на карты Bitcoin-торговцев.",
	"business/maps-success::biz_maps_success_hero_title":
		"Заявка получена 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Ваш бизнес будет добавлен на BTC Map и другие каталоги Bitcoin-торговцев в течение 1–2 недель. Мы вручную проверяем каждую заявку, чтобы карты оставались точными.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Как только ваша запись появится онлайн, пользователи Bitcoin рядом с вами найдут ваш бизнес и будут тратить у вас Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Что дальше",
	"business/maps-success::biz_maps_success_view_c1":
		"Пока ждёте, посмотрите BTC Map, чтобы увидеть растущую сеть компаний по всему миру, принимающих Bitcoin.",
	"business/maps-success::biz_maps_success_view_header":
		"Посмотрите, где вы появитесь",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Скачайте файлы наклеек на английском, чтобы распечатать собственные наклейки «Принимаем Bitcoin».",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Распечатайте собственные наклейки «Принимаем Bitcoin» на английском, чтобы сообщить клиентам, что вы принимаете Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Скачать английские файлы наклеек «Принимаем Bitcoin»",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Спасибо за запрос файлов наклеек «Принимаем Bitcoin» на вашем языке.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Заявка получена 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Мы создадим и опубликуем ваши файлы наклеек в течение 3–4 недель. Как только они будут готовы, вы сможете скачать и распечатать их бесплатно с нашей страницы файлов наклеек.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Мы выпускаем файлы наклеек партиями, поэтому до активации вашего языка может пройти несколько недель. Спасибо за терпение!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Что дальше",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Заказать оптом",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Запросить ещё один бесплатный набор",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Вы получите бесплатные наклейки «Принимаем Bitcoin» в течение 2–4 недель в обычном белом конверте, в котором будет 3 наклейки.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Ваши наклейки в пути 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Если 3 наклеек недостаточно для вашего бизнеса, не стесняйтесь запросить ещё один бесплатный набор — или закажите оптом у того же типографа, что и мы.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Нужно больше наклеек?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"На двери или главной витрине, чтобы клиенты увидели до того, как войдут",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Рядом с кассой, на платёжном терминале или там, где клиенты платят",
	"business/sticker-success::biz_sticker_success_tip_3":
		"На меню, прайс-листах или коробках для чаевых",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Не клейте их в местах, которые вам не принадлежат, или там, где у вас нет разрешения",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Хорошие места для наклеек",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Покажите клиентам, что вы принимаете Bitcoin. Запросите бесплатный набор наклеек «Принимаем Bitcoin» для своего заведения.",
	"business/stickers::biz_stickers_hero_title":
		"Бесплатные наклейки «Принимаем Bitcoin»",
	"business/stickers::biz_stickers_intro_c1":
		"Принимать Bitcoin — это лишь полдела: ваши клиенты тоже должны об этом знать. Эти небольшие наклейки «Принимаем Bitcoin» рассчитаны на то, чтобы клеить их на входной двери, у кассы, на меню или там, где клиенты увидят их перед оплатой.",
	"business/stickers::biz_stickers_intro_c2":
		"Мы отправляем бесплатный набор по любому адресу в США или Канаде, или вы можете распечатать собственные где угодно в мире.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Канада — бесплатно по почте",
	"business/stickers::biz_stickers_option_print":
		"🌍 По всему миру — распечатайте сами",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 США — бесплатно по почте",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Перевод фразы «Bitcoin Accepted Here»",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Перевод фразы «Scan to learn why Bitcoin is good for business.»",
	"business/stickers::biz_stickers_print_c1":
		"Вы можете распечатать собственные наклейки «Принимаем Bitcoin» в любой стране. Нажмите на свой язык ниже, чтобы скачать файлы и инструкции по печати.",
	"business/stickers::biz_stickers_print_header":
		"Распечатайте собственные файлы наклеек",
	"business/stickers::biz_stickers_request_c1":
		"Заполните форму ниже, чтобы запросить файлы наклеек «Принимаем Bitcoin» на вашем языке. Мы сообщим, когда они будут готовы.",
	"business/stickers::biz_stickers_request_header":
		"Не видите свой язык?",
	"business/stickers::biz_stickers_step_description":
		"Мы отправляем бесплатные наборы по адресам в США и Канаде. В любой другой точке мира вы можете распечатать свои.",
	"business/stickers::biz_stickers_step_header":
		"Как вам удобно получить наклейки?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Все Bitcoin-кошельки работают вместе — выберите тот, что подходит вашему бизнесу. Бесплатно, мгновенный расчёт, без чарджбэков.",
	"business/wallets::sources_breez_business":
		"Breez — Lightning-кошелёк только для Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — инфраструктура Lightning-платежей",
	"business/wallets::sources_opennode":
		"OpenNode — процессор Bitcoin-платежей",
	"business/wallets::sources_square":
		"Square — приём Bitcoin-платежей",
	"business/wallets::sources_zaprite":
		"Zaprite — выставление счетов в Bitcoin для бизнеса",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin-кошельки бесплатны. Выберите тот, что подходит вашему бизнесу — для торговой точки, онлайна или счетов — и начните принимать Bitcoin за минуты.",
	"business/wallets::wallets_section_invoice":
		"Кошельки для бизнеса, выставляющего счета",
	"business/wallets::wallets_section_invoice_intro":
		"Если вы выставляете счета клиентам (консалтинг, фриланс, B2B-услуги), используйте кошелёк, построенный вокруг счетов. Клиент оплачивает Bitcoin-счёт в несколько кликов.",
	"business/wallets::wallets_section_multiple":
		"Кошельки для бизнеса с несколькими сотрудниками",
	"business/wallets::wallets_section_multiple_intro":
		"Если у вас команда, принимающая платежи на кассе, выберите кошелёк, поддерживающий несколько входов сотрудников — чтобы у каждого был свой PIN, а вы вели чёткие записи о том, кто принял какой платёж.",
	"business/wallets::wallets_section_online":
		"Кошельки для онлайн-бизнеса",
	"business/wallets::wallets_section_online_intro":
		"Продаёте онлайн? Эти кошельки подключаются к вашему интернет-магазину и принимают Bitcoin от любого клиента в любой точке мира — без чарджбэков и без необходимости в торговом счёте.",
	"business/wallets::wallets_section_sole":
		"Кошельки для индивидуального бизнеса",
	"business/wallets::wallets_section_sole_intro":
		"Если вы держите магазин, кафе, студию или сервис в одиночку, любой из этих кошельков подойдёт. Выбирайте по тому, хотите ли вы оставлять платежи в Bitcoin или автоматически конвертировать часть каждого платежа в местную валюту.",
	"business/wallets::wallets_strike_note":
		"Strike Business позволяет принимать Bitcoin- и Lightning-платежи без комиссий и с мгновенным расчётом. Поддерживает платежи в торговой точке, онлайн и по счетам, с опциональной автоматической конвертацией в вашу местную валюту.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Принимаем Bitcoin",
	"business/why::why_good_for_you":
		"Почему Bitcoin полезен и вам",
	"business/why::why_learn_more_lowercase": "Узнать больше →",
	"business/why::why_s1_c1":
		"Инфляция возникает, когда печатают больше денег или создают их из ничего. Это заставляет деньги в вашем кошельке со временем терять ценность — и поэтому цены растут год за годом.",
	"business/why::why_s1_c2":
		"У Bitcoin фиксированная эмиссия — 21 миллион монет. Ни одно государство, банк или компания не может напечатать больше. Ваши сбережения в Bitcoin сохраняют ценность со временем, а не теряют её незаметно.",
	"business/why::why_s2_c1":
		"За последние годы многие американские банки рухнули из-за набегов вкладчиков. Когда слишком много клиентов одновременно пытались снять деньги, у банков не хватало средств, чтобы расплатиться со всеми.",
	"business/why::why_s2_c2":
		"Вместо того чтобы просто хранить ваши деньги, банки выдают их в кредит и инвестируют большую часть. Если эти инвестиции провалятся — или вкладчики потеряют доверие, — банк может рухнуть, и ваши вклады могут быть заморожены или потеряны.",
	"business/why::why_s2_c3":
		"С Bitcoin вы можете хранить деньги напрямую в собственном кошельке. Без банка. Без посредников. Без набегов на банк.",
	"business/why::why_s3_c1":
		"В отличие от кредитных карт, PayPal или традиционных банковских счетов, Bitcoin не требует ничьего разрешения.",
	"business/why::why_s3_c2":
		"Никто не может заморозить вашу учётную запись, заблокировать платёж или отключить вас от сети. Это первая в истории финансовая система, которой можно свободно пользоваться без страха цензуры или конфискации.",
	"business/why::why_s4_c1":
		"Bitcoin часто понимают неправильно, но он тихо приносит миру много пользы.",
	"business/why::why_s4_c2":
		"Он уже помог защитникам прав человека в их борьбе за свободу, сократил мировые выбросы метана со свалок и нефтяных скважин, стабилизировал электрические сети и финансировал общественные блага вроде национальных парков.",
	"business/why::why_biz_s1":
		"Меньше комиссий — больше остаётся бизнесу",
	"business/why::why_biz_s1_c1":
		"Bitcoin-платежи обходят банки и платёжные компании, которые забирают 2–3 % с каждой продажи. Бизнес получает больше с того, что вы платите, — а это часто означает лучшие цены и лучший сервис для вас.",
	"business/why::why_biz_s2":
		"Мгновенный расчёт, без чарджбэков",
	"business/why::why_biz_s2_c1":
		"Bitcoin-платежи приходят за секунды напрямую из вашего кошелька в бизнес. Не нужно ждать дни, пока банк выпустит средства, и нет дорогих споров по чарджбэкам — а значит, бизнес может сосредоточиться на обслуживании клиентов вместо борьбы с мошенничеством.",
	"business/why::why_biz_s3":
		"Бесплатный приём, открытый для всех",
	"business/why::why_biz_s3_c1":
		"Нет контрактов, ежемесячных платежей или сборов за установку, чтобы бизнес начал принимать Bitcoin. А миллионы пользователей Bitcoin по всему миру активно ищут торговцев, которые его принимают, — давая такому бизнесу бесплатный доступ к новым клиентам.",
	"business/why::why_business_cta_intro":
		"У вас есть бизнес, и вы хотите начать принимать Bitcoin?",
	"business/why::why_business_cta_link":
		"Посмотрите, как это работает →",
	"business/why::why_for_business":
		"Почему Bitcoin полезен этому бизнесу",
	"business/why::why_for_business_intro":
		"Принимая Bitcoin, этот бизнес оставляет себе больше с каждой продажи, получает деньги мгновенно без чарджбэков и достигает глобальной аудитории пользователей Bitcoin — без контрактов и ежемесячных платежей.",
	"business/why::why_good_for_you_intro":
		"Bitcoin полезен не только на кассе — это лучшая форма денег, которая защищает ваши сбережения, вашу приватность и вашу свободу совершать транзакции. Вот короткая сводка.",
	"business/why::why_hero_subtitle":
		"Вы только что отсканировали наклейку «Принимаем Bitcoin». Вот почему это хорошая новость — и для этого бизнеса, и для вас.",
	"business/why::why_intro_c1":
		"Бизнес, в котором вы находитесь, принимает Bitcoin — современную платёжную сеть с открытым исходным кодом, которой может пользоваться любой в любой точке мира, без того чтобы банки и посредники забирали свою долю.",
	"business/why::why_intro_c2":
		"Ниже короткая версия того, почему этому бизнесу полезно принимать Bitcoin, плюс почему вам, как клиенту, полезно использовать Bitcoin.",
	"business/why::why_next_business_label": "ПРИНИМАЙТЕ BITCOIN",
	"business/why::why_next_business_title":
		"Принимайте Bitcoin в своём бизнесе",
	"business/why::why_next_buy_label": "КУПИТЕ BITCOIN",
	"business/why::why_next_buy_title": "Купите свой первый Bitcoin",
	"business/why::why_next_learn_label": "УЗНАТЬ БОЛЬШЕ",
	"business/why::why_next_learn_title": "Узнайте больше о Bitcoin",
	"business/why::why_next_wallet_label": "ЗАВЕДИТЕ КОШЕЛЁК",
	"business/why::why_next_wallet_title":
		"Заведите собственный кошелёк Bitcoin",
	"business/why::why_whats_next_heading": "Куда дальше?",
	"business/why::why_whats_next_intro":
		"Если вы впервые сканируете Bitcoin-наклейку, вот самые полезные места, куда можно зайти дальше.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p":
		"Между пользователями (напрямую друг другу)",
	"buy::buy_bitcoin_guide": "Как купить Bitcoin",
	"buy::buy_step_1_header": "Выберите свою страну",
	"buy::buy_step_2_header": "Выберите способ оплаты",
	"buy::buy_step_3_header": "Ваши варианты покупки",
	"buy::buy_step_4_header": "Храните Bitcoin безопасно",
	"buy::buy_header_subtitle":
		"Простой пошаговый гайд по покупке вашего первого Bitcoin.",
	"buy::buy_howto_name": "Как купить Bitcoin",
	"buy::buy_meta_description":
		"Узнайте, как безопасно купить Bitcoin, с нашим пошаговым гайдом. Выберите страну и способ оплаты, чтобы найти лучшие варианты для вас.",
	"buy::buy_step_1_eyebrow": "Шаг 1",
	"buy::buy_step_2_eyebrow": "Шаг 2",
	"buy::buy_step_3_eyebrow": "Шаг 3",
	"buy::buy_step_4_eyebrow": "Шаг 4",
	"buy::buy_storage_cta_label": "Следующий шаг",
	"buy::sources_bisq":
		"Bisq — децентрализованная Bitcoin-биржа между пользователями",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — глобальный каталог Bitcoin-банкоматов",
	"buy::sources_kraken":
		"Kraken — устоявшаяся Bitcoin-биржа",
	"buy::sources_relai":
		"Relai — швейцарское приложение для самостоятельного хранения Bitcoin",
	"buy::sources_river":
		"River — покупка, майнинг и хранение только Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — покупка Bitcoin с поддержкой Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — регулярные покупки (DCA) только Bitcoin",
	"buy::buy_bitcoin": "Купить Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Добавить язык",
	"common::common_next_buy_bitcoin": "Купить Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Узнайте, как безопасно купить Bitcoin",
	"common::common_next_calculate": "Посчитайте свою инфляцию",
	"common::common_next_calculate_desc":
		"Посмотрите, как инфляция влияет на вашу зарплату со временем",
	"common::common_next_get_wallet": "Заведите кошелёк",
	"common::common_next_get_wallet_desc":
		"Заведите свой первый Bitcoin-кошелёк — это бесплатно",
	"common::common_next_keep_learning": "Продолжайте учиться",
	"common::common_next_keep_learning_desc":
		"Посмотрите, как Bitcoin делает мир лучше",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — индекс потребительских цен (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — денежная масса (индекс по категориям)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — «Может ли провалиться аукцион Казначейства?»",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Что дальше?",
	"common::common_sticker_files_mission_5": "запросите набор",
	"common::common_site_tagline": "Образование о Bitcoin для всех.",
	"common::common_source_btc_map":
		"BTC Map — мировой каталог торговцев, принимающих Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — самостоятельно хостимый бесплатный платёжный процессор Bitcoin с открытым исходным кодом",
	"common::common_source_oshi":
		"Oshi — платформа Bitcoin-вознаграждений для торговцев",
	"common::common_source_strike_business":
		"Strike — Bitcoin- и Lightning-платежи для бизнеса",
	"common::common_sources_group_bitcoin": "Данные о Bitcoin",
	"common::common_sources_group_cpi":
		"Инфляция / индекс потребительских цен",
	"common::common_sources_group_debt": "Государственный долг",
	"common::common_sources_group_money": "Данные о денежной массе",
	"common::common_sources_group_stories": "Реальные примеры",
	"common::common_sticker_files_mission_6":
		"бесплатные наклейки на английском.",
	"common::common_sticker_files_next_flyers_label": "Листовки",
	"common::common_sticker_files_next_flyers_title":
		"Распечатайте Bitcoin-листовку",
	"common::common_sticker_files_next_languages_label":
		"Файлы наклеек",
	"common::common_sticker_files_next_languages_title":
		"Посмотрите файлы наклеек на других языках",
	"common::common_sticker_files_print_these":
		"РАСПЕЧАТАЙТЕ ИХ В 1 КЛИК",
	"common::common_sticker_name_bdhi_black":
		"Наклейка «Bitcoin Doesn\u2019t Have Inflation» (чёрная)",
	"common::common_sticker_name_bdhi_orange":
		"Наклейка «Bitcoin Doesn\u2019t Have Inflation» (оранжевая)",
	"common::common_sticker_name_caution":
		"Bitcoin-наклейка «Caution! Melting Ice Cube»",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin-наклейка «Cure Inflation»",
	"common::common_sticker_name_danger":
		"Bitcoin-наклейка «Danger! Inflation Ahead»",
	"common::common_sticker_name_fix":
		"Bitcoin-наклейка «Fix The Money, Fix The World»",
	"common::common_sticker_name_got_inflation":
		"Bitcoin-наклейка «Got Inflation?»",
	"common::common_sticker_name_study":
		"Наклейка «Study Bitcoin»",
	"common::common_sticker_name_warning":
		"Bitcoin-наклейка «Warning! Inflation is Stealing Your Savings»",
	"common::common_sticker_name_what_if":
		"Bitcoin-наклейка «What if your money didn\u2019t have inflation?»",
	"common::common_sticker_tips_heading": "Советы по наклейкам",
	"common::common_sticker_tips_intro":
		"Когда распечатаете наклейки, клейте их там, где их увидят люди! Хорошие места:",
	"common::common_sticker_tips_list_1":
		"общественные места, где люди их заметят",
	"common::common_sticker_tips_list_2":
		"места, где их вряд ли быстро снимут (наклейки не оставляют постоянных повреждений)",
	"common::common_sticker_tips_list_3":
		"поверхности, к которым они хорошо приклеиваются (металл, пластик, стекло)",
	"common::common_sticker_tips_list_4":
		"НЕ на частной собственности, дорожных знаках, банкоматах или топливных колонках",
	"common::common_stickers_printer_prefix": "Мы используем",
	"common::common_stickers_printer_suffix":
		"но вы можете использовать любую типографию.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — индекс потребительских цен для всех городских потребителей",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — денежная масса M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Посчитайте свой инфляционный разрыв",
	"compound-inflation-calculator::cic_cta_label": "Следующий шаг",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Узнайте, насколько должна вырасти ваша зарплата, чтобы поспевать за инфляцией.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Изучите больше тем",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Посмотрите, как Bitcoin связан с деньгами, свободой, энергией и не только.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Узнайте, как работает инфляция",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Как печатать и расклеивать эти Bitcoin-листовки",
	"flyers::flyers_hero_subtitle":
		"Бесплатные печатные листовки о Bitcoin. Расклеивайте их в общественных местах, чтобы помочь большему числу людей узнать о Bitcoin.",
	"flyers::flyers_hero_title": "Печатайте и расклеивайте Bitcoin-листовки",
	"flyers::flyers_next_get_stickers": "Распространяйте идею",
	"flyers::flyers_next_get_stickers_desc":
		"Запросите бесплатный набор Bitcoin-наклеек",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Присоединяйтесь и помогайте распространять Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Хотите помочь построить циркулярную экономику Bitcoin? Самый простой способ — помочь местному бизнесу начать принимать Bitcoin-платежи.",
	"get-involved::get_involved_business_content_2":
		"Знаете бизнес, который мог бы быть открыт к этому? Отправьте владельца на нашу страницу",
	"get-involved::get_involved_business_content_3":
		"Bitcoin для бизнеса.",
	"get-involved::get_involved_description":
		"Наши бесплатные ресурсы делают распространение Bitcoin лёгким. Наклейки, листовки, наклейки «Принимаем Bitcoin» для бизнеса и открытый исходный код, в который может внести вклад любой.",
	"get-involved::get_involved_header":
		"Присоединяйтесь и помогайте распространять Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Вы можете помочь это изменить. Мы создали несколько бесплатных ресурсов, которые делают распространение надежды Bitcoin в вашем сообществе лёгким.",
	"get-involved::get_involved_biz_stickers_note":
		"Уже принимаете Bitcoin? Покажите это клиентам с помощью наших бесплатных наклеек «Принимаем Bitcoin». Мы пришлём набор по любому адресу в США или Канаде, или вы можете распечатать собственные где угодно в мире.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Наклейки «Принимаем здесь»",
	"get-involved::get_involved_card_biz_stickers_source":
		"Источник: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Бесплатные наклейки «Принимаем Bitcoin» для вашего бизнеса",
	"get-involved::get_involved_card_business_label":
		"Bitcoin для бизнеса",
	"get-involved::get_involved_card_business_source":
		"Источник: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Всё, что нужно бизнесу, чтобы начать принимать платежи в Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Печатные листовки",
	"get-involved::get_involved_card_flyers_source":
		"Источник: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Скачайте и распечатайте бесплатную Bitcoin-листовку",
	"get-involved::get_involved_card_github_label": "Открытый исходный код",
	"get-involved::get_involved_card_github_source": "Источник: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Внесите вклад в bitcoin.rocks на GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Бесплатные наклейки",
	"get-involved::get_involved_card_stickers_source":
		"Источник: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Запросите бесплатный набор Bitcoin-наклеек прямо к двери",
	"get-involved::get_involved_flyers_content_1":
		"Листовки — один из самых простых способов познакомить людей с Bitcoin в вашем сообществе. Скачайте нашу бесплатную печатную Bitcoin-листовку, распечатайте сколько хотите копий и расклейте на досках объявлений, в кафе, на встречах или там, где собираются люди.",
	"get-involved::get_involved_flyers_content_2":
		"На каждой листовке броский заголовок и QR-код, который ведёт любопытных читателей на bitcoin.rocks, чтобы узнать больше.",
	"get-involved::get_involved_flyers_content_3":
		"В отличие от наклеек, листовки можно распечатать по требованию в любой точке мира — нужны только принтер и пара минут.",
	"get-involved::get_involved_flyers_header":
		"Печатайте и расклеивайте листовки",
	"get-involved::get_involved_flyers_image_alt":
		"Превью бесплатной печатной Bitcoin-листовки от bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks — это бесплатный проект с открытым исходным кодом под лицензией MIT. Наша миссия — ускорить принятие Bitcoin через образование, и мы не можем сделать это в одиночку.",
	"get-involved::get_involved_github_content_2":
		"Будь вы разработчик, дизайнер, писатель или переводчик — есть способ помочь. Особенно мы рады переводчикам, которые могут перевести наш контент на больше языков, чтобы люди по всему миру могли узнавать о Bitcoin на своём родном языке.",
	"get-involved::get_involved_github_content_3":
		"Сделайте форк репозитория, откройте pull request, заведите issue или поставьте звезду проекту. Каждый вклад помогает Bitcoin достичь большего числа людей.",
	"get-involved::get_involved_github_header":
		"Внесите вклад на GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Набор бесплатных текстовых Bitcoin-наклеек от bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "сбережений",
	"index::home_card_label_art_1": "Сравним",
	"index::home_card_label_art_2": "Распространяйте идею",
	"index::home_card_label_art_3": "Уличное искусство",
	"index::home_card_label_bank_runs": "Полный резерв",
	"index::home_card_label_bonds": "Сравним",
	"index::home_card_label_business_1": "В чём разница?",
	"index::home_card_label_business_2": "Принимайте Bitcoin-платежи",
	"index::home_card_label_cash": "Сравним",
	"index::home_card_label_cbdc": "Открытое или закрытое?",
	"index::home_card_label_coding_1": "Интерактивный курс",
	"index::home_card_label_coding_2": "Соберите оборудование",
	"index::home_card_label_coding_3": "Задачи по программированию",
	"index::home_card_label_crowdfunding_1": "Протесты EndSARS",
	"index::home_card_label_crowdfunding_2": "Деньги, которые не остановить",
	"index::home_card_label_crowdfunding_3": "Профинансируйте свой проект",
	"index::home_card_label_crypto": "В чём разница?",
	"index::home_card_label_energy_1": "Стабилизация электросети",
	"index::home_card_label_energy_4": "Управление спросом",
	"index::home_card_label_energy_5": "Электрификация села",
	"index::home_card_label_energy_6": "Стимулы для возобновляемой энергии",
	"index::home_card_label_environment_1": "Сокращение метана",
	"index::home_card_label_environment_2": "Спасли национальный парк",
	"index::home_card_label_environment_3": "Самая зелёная индустрия",
	"index::home_card_label_environment_4": "Сокращает сжигание газа",
	"index::home_card_label_equality_1": "Надежда и возможности",
	"index::home_card_label_equality_2": "Великий уравнитель",
	"index::home_card_label_food_1": "Цены на продукты",
	"index::home_card_label_food_2": "Фермы и земля",
	"index::home_card_label_freedom_1": "Авторитарные режимы",
	"index::home_card_label_freedom_2": "Уникальный инструмент",
	"index::home_card_label_get_started_1":
		"Основы для начинающих",
	"index::home_card_label_get_started_2": "Ваш первый кошелёк",
	"index::home_card_label_get_started_3": "Купите Bitcoin",
	"index::home_card_label_gold": "Что лучше?",
	"index::home_card_label_housing_1": "Доступное жильё",
	"index::home_card_label_human_rights_1":
		"Продвижение прав человека",
	"index::home_card_label_human_rights_2": "Народное принятие",
	"index::home_card_label_human_rights_3": "Глобальный охват",
	"index::home_card_label_inflation": "Bitcoin — лучшие деньги",
	"index::home_card_label_networks_1": "Живая визуализация сети",
	"index::home_card_label_networks_2": "Сравним",
	"index::home_card_label_payments_1": "В чём разница?",
	"index::home_card_label_payments_2": "Быстрые и дешёвые платежи",
	"index::home_card_label_payments_3": "Международные переводы",
	"index::home_card_label_payments_4": "Принимайте платежи",
	"index::home_card_label_politics_1": "Политический парадокс",
	"index::home_card_label_politics_2": "Серьёзная ставка",
	"index::home_card_label_property_rights_1": "Сравним",
	"index::home_card_label_property_rights_2": "Настоящая собственность",
	"index::home_card_label_salary": "Защитите свою зарплату",
	"index::home_card_label_self_custody_1":
		"Гайд по Bitcoin-кошелькам",
	"index::home_card_label_self_custody_2": "Самый важный шаг",
	"index::home_card_label_self_custody_3": "Суверенные деньги",
	"index::home_card_label_war_1": "Положить конец бесконечным войнам",
	"index::home_card_label_war_2": "Помощь ветеранам",
	"index::home_card_label_war_3": "Спасение от войны",
	"index::home_h1":
		"Bitcoin — лучшие деньги, которые строят лучший мир.",
	"index::home_nav_about": "О нас",
	"index::home_nav_get_involved": "Присоединяйтесь",
	"index::home_nav_learn": "Учиться",
	"index::home_source_prefix": "Источник:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon и Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Посмотрите наш",
	"lightning::lightning_grid_heading":
		"Популярные Lightning-кошельки",
	"lightning::lightning_hardware_cta_label":
		"Аппаратные кошельки",
	"lightning::lightning_header_subtitle":
		"Lightning позволяет отправлять Bitcoin за секунды и за доли копейки — выберите кошелёк, чьи компромиссы соответствуют тому, сколько Bitcoin вы планируете тратить.",
	"lightning::lightning_s1_c4_end": "для дополнительной информации.",
	"lightning::lightning_s1_c4_link":
		"Гайд по аппаратным Bitcoin-кошелькам",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Lightning-кошелёк Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — Lightning-кошелёк с самостоятельным хранением",
	"lightning::sources_lightning_labs":
		"Lightning Labs — документация Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — кастодиальный Lightning-кошелёк",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android и веб",
	"nostr/index::nostr_platform_web": "Веб-браузер",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr — это новый децентрализованный протокол для онлайн-общения. Им не владеет никакая компания, Bitcoin-«запы» встроены в протокол, и вы можете менять клиента, не теряя подписчиков.",
	"nostr/index::nostr_amethyst_f1":
		"Множество функций и возможностей настройки",
	"nostr/index::nostr_amethyst_f2":
		"Требуется отдельный Bitcoin-кошелёк",
	"nostr/index::nostr_amethyst_f3": "100 % бесплатно",
	"nostr/index::nostr_damus_f1":
		"Привычный интерфейс в стиле Twitter",
	"nostr/index::nostr_damus_f2":
		"Требуется отдельный Bitcoin-кошелёк",
	"nostr/index::nostr_damus_f3": "100 % бесплатно",
	"nostr/index::nostr_download_heading":
		"Скачайте бесплатный Nostr-клиент",
	"nostr/index::nostr_download_intro":
		"Nostr-клиенты — бесплатные приложения, позволяющие читать и писать в сети Nostr. Они все работают вместе — вы можете в любой момент переключить клиент и сохранить подписчиков и контент.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr — это новый децентрализованный протокол для онлайн-общения. Им не владеет никакая компания, Bitcoin-«запы» встроены в протокол, и вы можете менять приложение, не теряя подписчиков.",
	"nostr/index::nostr_hero_title": "Что такое Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr похож на электронную почту: протокол никому не принадлежит, любой может построить поверх него приложение, а вы выбираете то, что вам подходит. В отличие от Twitter или Facebook, нет центральной компании, которая может вас цензурировать, банить или понижать в выдаче.",
	"nostr/index::nostr_intro_c2":
		"Ниже короткая версия того, почему Nostr важен — а затем все бесплатные Nostr-клиенты, которые нужны, чтобы начать сегодня.",
	"nostr/index::nostr_iris_f1":
		"Очень просто — установка не требуется",
	"nostr/index::nostr_iris_f2":
		"Удобный способ попробовать Nostr с тестовым аккаунтом",
	"nostr/index::nostr_iris_f3": "100 % бесплатно",
	"nostr/index::nostr_learn_more_label": "ПОДРОБНЕЕ",
	"nostr/index::nostr_learn_more_title":
		"Узнайте больше о Nostr на nostr.how",
	"nostr/index::nostr_primal_f1": "Наш первый рекомендуемый клиент",
	"nostr/index::nostr_primal_f2":
		"Встроенный Bitcoin-кошелёк для запов",
	"nostr/index::nostr_primal_f3": "100 % бесплатно",
	"nostr/index::nostr_s1": "Протокол, а не платформа",
	"nostr/index::nostr_s1_c1":
		"Nostr — это новый протокол, который позволяет общаться онлайн без страха цензуры, банов или понижения в выдаче.",
	"nostr/index::nostr_s1_c2":
		"Платформы вроде Twitter и Facebook контролируются одной компанией, а протокол Nostr не контролируется никем.",
	"nostr/index::nostr_s2": "Свобода передвижения",
	"nostr/index::nostr_s2_c1":
		"Nostr похож на электронную почту. Никто не контролирует протокол email, и любой может построить поверх него клиент (Gmail, Hotmail и т. д.).",
	"nostr/index::nostr_s2_c2":
		"Протокол Nostr тоже никем не контролируется, и любой может построить поверх него клиент (Damus, Amethyst и т. д.).",
	"nostr/index::nostr_s2_c3":
		"Если вам не нравится, как работает конкретный клиент, вы можете перенести Nostr-аккаунт в другой клиент, не теряя подписчиков и контент.",
	"nostr/index::nostr_s3": "Bitcoin встроен",
	"nostr/index::nostr_s3_c1":
		"Bitcoin встроен в протокол Nostr. Когда вы видите контент, который вам нравится, вы можете легко отправить автору «Bitcoin-зап» в знак благодарности.",
	"nostr/index::nostr_s3_c2":
		"На централизованных платформах вроде Twitter и Facebook деньги на вашем контенте зарабатывает центральная компания. Но в открытых протоколах вроде Nostr на собственном контенте зарабатываете вы.",
	"nostr/index::sources_damus": "Damus — Nostr-клиент для iPhone",
	"nostr/index::sources_iris": "Iris — Nostr-клиент в браузере",
	"nostr/index::sources_nostr_how": "nostr.how — что такое Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Протокол Nostr — открытая спецификация",
	"nostr/index::sources_primal":
		"Primal — Nostr-клиент со встроенным Bitcoin-кошельком для запов",
	"nostr/index::what_is_nostr": "Что такое Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Распечатайте собственные Bitcoin-наклейки, используя эти файлы.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Заявка получена 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Заказать оптом",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Поделиться на Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Что такое Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Нужно больше наклеек?",
	"sticker-success::sticker_success_hero_title":
		"Ваши наклейки в пути 🎉",
	"sticker-success::sticker_success_share_header":
		"Поделитесь, где разместили наклейки",
	"sticker-success::sticker_success_tips_header":
		"Хорошие места для наклеек",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"А когда начнёте, распечатывайте и расклеивайте также собственные",
	"stickers::stickers_instructions_1":
		"Введите свой почтовый адрес, и мы пришлём вам бесплатный набор Bitcoin-наклеек по почте. Ваши наклейки придут в обычном белом конверте.",
	"stickers::stickers_btn_choose_pack": "Выбрать этот набор",
	"stickers::stickers_bulk_c1":
		"Хотите больше нескольких наклеек?",
	"stickers::stickers_bulk_c2":
		"Закажите оптом у того же типографа, что и мы",
	"stickers::stickers_bulk_c3":
		"— чем больше покупаете, тем дешевле за штуку.",
	"stickers::stickers_bulk_cta": "Купить наклейки оптом",
	"stickers::stickers_bulk_header":
		"Заказывайте наклейки оптом",
	"stickers::stickers_hero_subtitle":
		"Запросите бесплатный набор Bitcoin-наклеек и расклеивайте их в общественных местах, чтобы помочь большему числу людей узнать о Bitcoin.",
	"stickers::stickers_hero_title": "Бесплатные Bitcoin-наклейки",
	"stickers::stickers_intro_c1":
		"Наша миссия — помочь вам «оранжево-таблетировать» больше людей, расклеивая Bitcoin-наклейки в общественных местах. На всех наших наклейках есть QR-коды, ведущие на образовательные страницы об",
	"stickers::stickers_intro_c3": "инфляции",
	"stickers::stickers_intro_c4":
		"Выберите набор наклеек ниже и решите, как хотите его получить — мы пришлём бесплатный набор любому в США или Канаде, или вы можете распечатать собственные где угодно в мире.",
	"stickers::stickers_mail_header":
		"Мы пришлём вам наклейки по почте бесплатно",
	"stickers::stickers_next_print_flyers": "Распространяйте идею дальше",
	"stickers::stickers_next_print_flyers_desc":
		"Распечатайте бесплатные Bitcoin-листовки и расклеивайте их в общественных местах",
	"stickers::stickers_option_bulk":
		"📦 По всему миру — заказ оптом",
	"stickers::stickers_option_canada":
		"🇨🇦 Канада — бесплатно по почте",
	"stickers::stickers_option_print":
		"🌍 По всему миру — распечатайте сами",
	"stickers::stickers_option_usa":
		"🇺🇸 США — бесплатно по почте",
	"stickers::stickers_print_c1":
		"Вы можете присоединиться, распечатав собственные наклейки в любой стране. Нажмите на свой язык ниже, чтобы скачать файлы и инструкции по печати.",
	"stickers::stickers_print_c2":
		"Не все наклейки доступны на всех языках.",
	"stickers::stickers_print_header":
		"Распечатайте собственные файлы наклеек",
	"stickers::stickers_request_c1":
		"Заполните форму ниже, чтобы запросить файлы наклеек на вашем языке. Мы сообщим, когда они будут готовы.",
	"stickers::stickers_request_header":
		"Не видите свой язык?",
	"stickers::stickers_share_c2":
		"Подпишитесь на нас в Nostr, ища",
	"stickers::stickers_share_c3":
		"в любом Nostr-клиенте.",
	"stickers::stickers_signs_pack_description":
		"Знаки предупреждения, осторожности и опасности с Bitcoin-сообщениями — рассчитаны на то, чтобы привлечь внимание и заставить людей остановиться и прочитать.",
	"stickers::stickers_step_1_description":
		"В каждом наборе разный комплект Bitcoin-наклеек с QR-кодами, которые рассказывают людям о Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "ШАГ 1",
	"stickers::stickers_step_1_header":
		"Выберите набор наклеек",
	"stickers::stickers_step_2_description":
		"Мы отправляем бесплатные наборы по адресам в США и Канаде. В любой другой точке мира можно распечатать свои или заказать оптом.",
	"stickers::stickers_step_2_eyebrow": "ШАГ 2",
	"stickers::stickers_step_2_header":
		"Как вам удобно получить наклейки?",
	"stickers::stickers_text_pack_description":
		"Сборник Bitcoin-слоганов и монологов, рассчитанных на то, чтобы вызывать любопытство в общественных местах.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — выберите свой кошелёк",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — обзоры металлических хранилищ для Bitcoin-сидов",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin-кошелёк с самостоятельным хранением",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — аппаратный Bitcoin-кошелёк",
	"wallets::sources_coldcard_mk5":
		"Coinkite — аппаратный кошелёк Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — аппаратный кошелёк Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — аппаратный кошелёк Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — самодельное устройство с открытым исходным кодом для подписи Bitcoin-транзакций",
	"wallets::wallets_grid_heading": "Популярные Bitcoin-кошельки",
	"wallets::wallets_header_subtitle":
		"Пошаговый гайд по выбору кошелька, защите ключей и получению полного контроля над своим Bitcoin.",
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
		`translate-rest-part2 (ru): filled ${filled}, already-done ${skipped}`,
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
