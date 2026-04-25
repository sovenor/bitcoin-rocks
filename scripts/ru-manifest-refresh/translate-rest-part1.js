#!/usr/bin/env node
/**
 * Russian manifest refresh — part 1 of non-inflation namespaces.
 *
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
	"ru.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Вернуться на главную",
	"404::404_message":
		"Bitcoin — это здорово, а вот эта сломанная страница — нет.",
	"404::404_not_found_short": "Не найдено",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Мы предлагаем бесплатные ресурсы для бизнеса, которые помогают местным компаниям начать принимать Bitcoin. Наша страница «Bitcoin для бизнеса» объясняет, почему Bitcoin полезен для бизнеса, как выбрать кошелёк и платёжный терминал, и предлагает бесплатные наклейки «Принимаем Bitcoin».",
	"about::about_card_business_label": "Ресурсы для бизнеса",
	"about::about_card_business_source": "Источник: bitcoin.rocks →",
	"about::about_card_business_title":
		"Всё, что нужно бизнесу, чтобы начать принимать платежи в Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Источник: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Внести вклад",
	"about::about_card_contribute_source": "Источник: GitHub →",
	"about::about_card_contribute_title":
		"Узнайте, как внести вклад в проект bitcoin.rocks",
	"about::about_card_email_label": "Электронная почта",
	"about::about_card_email_source": "Источник: эл. почта →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Печатные листовки",
	"about::about_card_flyers_source": "Источник: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Скачайте и распечатайте листовки о Bitcoin для своего сообщества",
	"about::about_card_github_label": "Репозиторий",
	"about::about_card_github_source": "Источник: GitHub →",
	"about::about_card_github_title": "Посмотрите bitcoin.rocks на GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Источник: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Бесплатные наклейки",
	"about::about_card_stickers_source": "Источник: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Получите бесплатные наклейки Bitcoin прямо к двери",
	"about::about_editorial_2":
		"Мы ссылаемся на надёжные источники: Федеральный резерв (FRED), Бюро статистики труда США, FDIC, ООН, Всемирный совет по золоту, Forbes, MIT Technology Review, Lyn Alden и James Lavish. Мы верим, что когда факты изложены ясно, Bitcoin говорит сам за себя.",
	"about::about_flyers_blurb":
		"Мы создали печатные листовки, которыми можно делиться на встречах, вешать на доски объявлений или класть в почтовые ящики — простой способ вызвать любопытство и направить людей на bitcoin.rocks, где они смогут узнать больше.",
	"about::about_header": "О bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "Сайт bitcoin.rocks основан пользователем",
	"about::about_mission_1b":
		"в 2022 году с простой миссией: ускорить принятие Bitcoin через образование.",
	"about::about_open_source_2":
		"bitcoin.rocks — это бесплатный проект с открытым исходным кодом под лицензией MIT. Любой желающий может внести вклад. Особенно мы рады переводчикам, которые помогают сделать наш контент доступным для людей по всему миру.",
	"about::about_open_source_header": "Открытый исходный код",
	"about::about_page_description":
		"bitcoin.rocks — это бесплатный образовательный сайт о Bitcoin с открытым исходным кодом, основанный в 2022 году. Наша миссия — ускорить принятие Bitcoin через образование.",
	"about::about_stickers_blurb":
		"Мы отправляем бесплатные наклейки Bitcoin прямо к вашей двери, чтобы вы могли помочь распространять Bitcoin в своём сообществе. Каждый месяц сотни людей сканируют QR-коды на этих наклейках, чтобы узнать больше о Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"У Bitcoin не бывает набегов на банки",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin — это система с полным резервом. Вы не кладёте свои деньги в банк. Вы сами себе банк. Ваши деньги не одалживаются без вашего ведома, потому что доступ к ним есть только у вас.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Пока вы держите свой биткоин в собственном кошельке — а не на бирже и не в обёртке ETF — набеги на банки невозможны.",
	"bank-runs::bank_runs_bitcoin_p3":
		"С Bitcoin вы получаете настоящий контроль над своими деньгами.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"С 26 марта 2020 года американские банки больше не обязаны держать какие-либо минимальные резервы.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Норма резервирования банков",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Источник: Федеральный резерв →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Система с полным резервом — страхование вкладов не нужно.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Покрытие Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Источник: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Каждый биткоин существует в блокчейне — ничего не отдаётся в долг.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Норма резервирования Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Источник: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Страховой фонд в 153,9 млрд $ против 10,82 трлн $ застрахованных вкладов (декабрь 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Покрытие FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Источник: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Кейс",
	"bank-runs::bank_runs_card_svb_source":
		"Источник: Юридический факультет Вашингтонского университета →",
	"bank-runs::bank_runs_card_svb_title":
		"Посмотрите, как произошёл набег на Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Следующий шаг",
	"bank-runs::bank_runs_card_wallet_source": "Начните здесь →",
	"bank-runs::bank_runs_card_wallet_title":
		"Узнайте, как завести собственный кошелёк Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"Страхование FDIC покрывает примерно 1 % вкладов",
	"bank-runs::bank_runs_fdic_p1":
		"Страхование FDIC защищает вклады до 250 000 $ на одного вкладчика. Но страховой фонд мал по сравнению с общей суммой вкладов, которые он должен защищать.",
	"bank-runs::bank_runs_fdic_p2_a":
		"При массовом банковском кризисе государство, скорее всего, напечатает деньги, чтобы покрыть разницу — а это вызовет ещё больше",
	"bank-runs::bank_runs_fdic_p2_link": "инфляции.",
	"bank-runs::bank_runs_header":
		"У Bitcoin не бывает набегов на банки, а у вашего банка может быть.",
	"bank-runs::bank_runs_page_description":
		"Банки выдают ваши вклады в кредит через систему частичного резервирования. Если слишком много людей одновременно решат снять деньги, банки могут рухнуть. Bitcoin — это система с полным резервом, и набеги на банки в ней невозможны.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: реальный пример",
	"bank-runs::bank_runs_svb_p1_a":
		"В марте 2023 года Silicon Valley Bank рухнул после того, как вложил вклады своих клиентов в",
	"bank-runs::bank_runs_svb_p1_b":
		"Когда эти облигации потеряли в цене, SVB не смог покрыть снятие средств. Банк стал неплатёжеспособным.",
	"bank-runs::bank_runs_svb_p1_link": "долгосрочные государственные облигации.",
	"bank-runs::bank_runs_svb_p2":
		"Тысячи компаний не смогли заплатить своим сотрудникам. FDIC вмешалась — но возник более серьёзный вопрос: действительно ли ваши деньги в безопасности?",
	"bank-runs::bank_runs_what_p1":
		"Банки не хранят ваши вклады в сейфе. Они выдают их в кредит и инвестируют — это называется частичным резервированием.",
	"bank-runs::bank_runs_what_p2":
		"Если слишком много людей одновременно попытаются снять деньги, у банка не хватит средств, чтобы расплатиться со всеми. Это и есть набег на банк — он может привести к полному краху банка.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">банками</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin может использовать любой человек с подключением к интернету — он ",
	"bitcoin-vs-banks::point_1_summary_2": "не требует разрешений.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Банки могут отказать, заморозить или закрыть счета по своим внутренним правилам или требованиям государства.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Сеть Bitcoin работает 24/7/365 без технических окон и выходных. Банки работают по ограниченному графику, закрыты по выходным и подвержены сбоям.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Каждая транзакция Bitcoin находится в публичном блокчейне, который любой может проверить. Банки ведут закрытые книги, которые клиенты не могут проверить независимо.",
	"bitcoin-vs-banks::point_4_summary_1":
		"С Bitcoin вы сами храните свои приватные ключи — посмотрите наш простой гайд по ",
	"bitcoin-vs-banks::point_4_summary_2": "кошелькам Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Банки хранят ваши деньги под опекой и могут заморозить, ограничить или заблокировать их в любой момент.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Комиссии Bitcoin прозрачны и предсказуемы. Банки постепенно набирают скрытые сборы за обслуживание счёта, овердрафт, переводы и снятие наличных.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin позволяет тратить только то, что у вас действительно есть. Банки разрешают овердрафты, а потом берут с вас целую серию штрафных комиссий.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Однажды отправленную транзакцию Bitcoin нельзя остановить или отменить. Банки могут блокировать, замораживать или отменять транзакции по своим правилам или приказам государства.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">облигациями</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Облигации «безрисковые» только на словах — инфляция, колебания процентных ставок и риск дефолта съедают реальную доходность.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"У Bitcoin прозрачная волатильность, но нет скрытого контрагентского риска.",
	"bitcoin-vs-bonds::point_2_summary_1": "Когда",
	"bitcoin-vs-bonds::point_2_summary_2": "инфляция",
	"bitcoin-vs-bonds::point_2_summary_3":
		"опережает доходность облигаций, держатели каждый год теряют реальную покупательную способность. Лимит в 21 миллион Bitcoin не может быть размыт инфляцией.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Рынки облигаций могут замораживаться во время кризисов — Silicon Valley Bank рухнул отчасти из-за того, что у него были облигации, потерявшие в цене. Посмотрите, как происходят",
	"bitcoin-vs-bonds::point_3_summary_2": "набеги на банки",
	"bitcoin-vs-bonds::point_3_summary_3":
		" и почему Bitcoin их избегает. Bitcoin торгуется 24/7 по всему миру без кризисов ликвидности.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Аукционы государственных облигаций могут проваливаться, когда покупателей не хватает — посмотрите",
	"bitcoin-vs-bonds::point_4_summary_2": "слабый аукцион 2022 года.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Цена Bitcoin непрерывно определяется на открытых рынках, без центрального аукциона, который мог бы провалиться.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Доходность облигаций фиксируется в момент покупки. Даже если экономика растёт или валюта рушится, ваша доходность остаётся той же.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"У Bitcoin значительный потенциал роста по мере увеличения принятия и роста спроса при фиксированном предложении.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Большинство облигаций хранится через банки или брокеров, что добавляет контрагентский риск. Bitcoin можно держать на самостоятельном хранении в",
	"bitcoin-vs-bonds::point_6_summary_2": "кошельке",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — и полностью устранить этот риск.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Облигации полностью зависят от того, погасит ли государство свой долг. Если государство объявит дефолт или сократит долг через инфляцию, держатели проиграют.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin работает независимо от любого государства или политической власти.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">наличными</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin перемещается в любую точку мира через интернет за минуты. Физические наличные требуют личного присутствия или доверенных курьеров — двадцатидолларовую купюру нельзя послать по электронной почте.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin везде работает одинаково. Наличные ограничены географией, обменными курсами и местным признанием.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Государства могут обесценить наличные за одну ночь — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Индия</a> сделала это в 2016 году. Но даже без демонетизации наличные теряют ценность из-за",
	"bitcoin-vs-cash::point_3_summary_2": "инфляции.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin не может быть обесценен ни одним государством или органом власти.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Наличные можно подделать — иногда очень убедительно. Bitcoin использует криптографию, которая делает подделку математически невозможной.",
	"bitcoin-vs-cash::point_5_summary_1":
		"У Bitcoin нет центральной власти. Наличные выпускаются государствами, которые могут печатать их больше, менять дизайн или выводить купюры из обращения по собственному усмотрению.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Физические наличные уязвимы для кражи, пожара, потери и конфискации. Bitcoin можно ",
	"bitcoin-vs-cash::point_6_summary_2": "безопасно хранить самостоятельно",
	"bitcoin-vs-cash::point_6_summary_3":
		" на телефоне или аппаратном устройстве.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin делится на 100 миллионов сатоши, что делает возможными микроплатежи любого размера. У физических наличных есть минимальные номиналы — копейку нельзя разделить пополам.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">цифровыми валютами центральных банков (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Никто не может помешать вам совершать транзакции в Bitcoin. CBDC спроектированы так, чтобы государства и центробанки контролировали каждый платёж, ограничивая вашу приватность и свободу.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"У Bitcoin нет срока действия и нет ежемесячных комиссий. CBDC можно запрограммировать так, чтобы они «истекали», лишая вас стимула копить на будущее.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"У Bitcoin фиксированный лимит — 21 миллион BTC. У CBDC нет лимита эмиссии, и они позволяют государствам произвольно расширять денежную массу — вызывая",
	"bitcoin-vs-cbdc::point_3_summary_2": "инфляцию.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin-адреса не привязаны к вашей реальной личности. CBDC напрямую связаны с государственным удостоверением личности, что позволяет вести массовую слежку и финансовую цензуру.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Правила Bitcoin проверяются десятками тысяч независимых узлов. CBDC централизованы у государств и центробанков, которые имеют полный контроль над сетью.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Любой человек может запустить узел Bitcoin и проверить правила сети. CBDC не позволяют пользователям запускать узлы — приходится доверять центральной власти.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin на самостоятельном хранении никто не может заморозить. CBDC спроектированы так, чтобы государства и центробанки могли мгновенно замораживать счета.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin даёт вам полный контроль над деньгами, когда вы храните их в",
	"bitcoin-vs-cbdc::point_8_summary_2": "кошельке.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC требуют доверия к хранителям — банкам или государствам, — которые держат деньги за вас.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Денежная политика Bitcoin зашита в код и не может измениться. CBDC можно перепрограммировать по воле политиков, что вызывает",
	"bitcoin-vs-cbdc::point_9_summary_2": "инфляцию",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", когда печатают слишком много денег.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin — самая защищённая компьютерная сеть из когда-либо построенных, её ни разу не взломали. CBDC опираются на банки и государства, которых уже взламывали бессчётное число раз.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">криптовалютами</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Протокол Bitcoin почти не менялся с 2009 года и обеспечивает предсказуемые правила. Большинство криптопроектов постоянно меняют протоколы, токеномику или форкаются в новые версии.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin работает на десятках тысяч независимых узлов по всему миру. Большинство криптопроектов контролируется фондами, компаниями или небольшими группами разработчиков, которые могут вносить односторонние изменения.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"У Bitcoin фиксированный лимит — 21 миллион монет, самый редкий цифровой актив. У большинства криптопроектов либо неограниченное предложение, либо механизмы произвольного выпуска новых токенов, размывающие держателей.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"У Bitcoin одна цель: одноранговые цифровые деньги. Это может понять и использовать каждый. У большинства криптовалют сложные смарт-контракты или DeFi, которые требуют технических знаний для безопасного использования.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Proof of Work Bitcoin работает уже более 15 лет без единой успешной атаки на основную цепь. Большинство криптопроектов использует экспериментальные алгоритмы консенсуса, которые не были тщательно проверены.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin — это цифровые деньги: средство сбережения и средство обмена. Большинство криптотокенов — спекулятивные «utility»-токены или токены управления с неясной реальной ценностью.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin становится сильнее под давлением и пережил все кризисы, запреты и критику. Большинство криптопроектов рушится под регуляторным, техническим или рыночным давлением.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"У Bitcoin нет CEO, нет компании, нет единой точки отказа. Большинство криптопроектов зависит от венчурных инвесторов, конкретных лидеров или выживания одной компании.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">изобразительным искусством</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Каждый биткоин идентичен и взаимозаменяем. Каждое произведение искусства уникально — разное происхождение, история, состояние и провенанс делают прямое сравнение крайне сложным.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin торгуется 24/7 на глобальном рынке, доступном каждому. Произведения искусства требуют специализированных аукционных домов, частных дилеров или галерей, и продажи могут занимать месяцы.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Покупка или продажа Bitcoin обходится менее чем в 1 % комиссии, чаще намного меньше. Продажи произведений искусства накапливают 30–40 % комиссии покупателя, премий, страховки, доставки и сборов за аутентификацию.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin делится на 100 миллионов сатоши и идеально подходит для транзакций любого размера. Нельзя владеть частью картины или углом скульптуры без контрагентского риска.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Право собственности и подлинность Bitcoin может криптографически проверить кто угодно по блокчейну. Аутентификация искусства дорогая, медленная и регулярно обманывается фальсификаторами — что может уничтожить ценность работы за одну ночь.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Правильно защищённый Bitcoin переживёт наводнения, пожары, землетрясения и кражи. Произведения искусства уязвимы для всех видов физических катастроф, и страхование редко покрывает всё.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Любой человек с интернетом и небольшой суммой денег может купить Bitcoin. Инвестиции в искусство фактически ограничены богатыми коллекционерами с доступом к аукционам и специализированными знаниями.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">золотом</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin можно мгновенно отправить через интернет с низкими комиссиями. Золото нужно физически перевозить, чтобы передать право собственности.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin — изначально цифровой актив, который можно передавать через интернет. Онлайн-золото — это цифровая долговая расписка: вы владеете лишь обещанием хранителя, а не самим металлом.",
	"bitcoin-vs-gold::point_3_summary_1":
		"У Bitcoin фиксированный лимит — 21 миллион BTC. Запасы золота растут примерно на <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6 % в год</a>, размывая вашу долю — меньше, чем",
	"bitcoin-vs-gold::point_3_summary_2": "инфляция",
	"bitcoin-vs-gold::point_3_summary_3":
		" фиата, но всё же инфляция.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Когда цены на золото растут, добывают больше золота, и цена идёт вниз. Эмиссия Bitcoin неэластична — как бы ни рос курс, биткоинов всегда будет лишь 21 миллион.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Сеть Bitcoin проверяется десятками тысяч независимых узлов. Большая часть физического золота хранится в нескольких крупных хранилищах.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Любой может проверить подлинный Bitcoin, запустив полный узел — это просто приложение. Чтобы проверить физическое золото, нужно его расплавить; внутри может оказаться вольфрам.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin делится на 100 миллионов сатоши и идеально подходит для покупок любого размера. Золото нелегко делить на меньшие транзакции.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">недвижимостью</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin мгновенно перемещается в любую точку мира. Недвижимость привязана к месту и подвержена местным экономическим, политическим и экологическим рискам.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin делится на 100 миллионов сатоши. Недвижимость нельзя продать по частям — нельзя продать кухню или купить полкомнаты.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin работает в децентрализованной сети, которую не может контролировать ни одно государство. Недвижимость жёстко регулируется — зонирование, контроль арендной платы, отчуждение и арест применяются повсеместно.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin не требует обслуживания. Недвижимость требует ремонта, реновации, страхования, управления и решения проблем с арендаторами.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin не облагается постоянными налогами — налог на прирост капитала вы платите только при продаже. С недвижимости ежегодно платится налог на имущество, независимо от дохода.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Правильно защищённый Bitcoin переживёт пожары, наводнения и землетрясения. Недвижимость уязвима для всех катастроф, и страховка редко покрывает всё.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Каждый биткоин идентичен и взаимозаменяем. Каждый объект недвижимости уникален, что усложняет оценку и сравнение.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin торгуется глобально 24/7 для любого пользователя интернета. Сделки с недвижимостью ограничены местными покупателями и могут закрываться месяцами с большой бюрократией.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin даёт возможность прямого индивидуального владения для любого человека. Покупка недвижимости как инвестиции, помимо основного жилья, поднимает цены на жильё, снижает доступность и создаёт жилищный кризис.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">акциями</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin — это прямой актив, которым вы владеете полностью. Акции — это доли в компании; их цена зависит от менеджмента, показателей и решений, которые вы не контролируете.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"У Bitcoin фиксированный лимит — 21 миллион BTC. Компании могут в любой момент выпустить новые акции и размыть существующих акционеров — так же как",
	"bitcoin-vs-stocks::point_2_summary_2": "инфляция",
	"bitcoin-vs-stocks::point_2_summary_3":
		" фиата размывает деньги. С Bitcoin ваша доля никогда не уменьшается.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"У Bitcoin нет CEO и нет единой точки отказа. Акции сильно зависят от менеджмента — одно плохое решение или уход ключевого человека могут обрушить цену.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Цена Bitcoin определяется на открытых глобальных рынках. Оценка акций основана на показателях вроде P/E, которые могут скрывать переоценённые акции.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin торгуется 24/7 по всему миру. Фондовые рынки открыты только в будние дни в торговые часы.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"С Bitcoin вы можете перейти на",
	"bitcoin-vs-stocks::point_6_summary_2": "самостоятельное хранение",
	"bitcoin-vs-stocks::point_6_summary_3":
		" одним приложением — брокер не нужен. Акции хранятся у брокеров, что подвергает вас контрагентскому риску, если брокер обанкротится.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Фиксированная эмиссия Bitcoin делает его надёжной защитой от инфляции. Некоторые акции обгоняют инфляцию, другие нет — гарантии нет.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Разница между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin — открытая сеть, к которой может присоединиться любой без разрешения. Visa — закрытая система, контролируемая финансовыми учреждениями, которые могут отказать в доступе — особенно людям без банковского счёта или с ограниченным доступом к банковским услугам.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Транзакции Bitcoin не имеют комиссий для торговца. Visa обычно берёт с торговцев около 3 % за транзакцию — ваш бизнес может сэкономить деньги, принимая",
	"bitcoin-vs-visa::point_2_summary_2": "платежи в Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Каждая транзакция Bitcoin находится в публичном проверяемом блокчейне. Visa управляет закрытой проприетарной системой, в которой клиенты ничего не могут проверить независимо.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin не может быть заморожен ни одной центральной властью. Visa может в любой момент заморозить счета, заблокировать транзакции или отказать в обслуживании.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin — это окончательный расчёт: вы тратите только то, что у вас есть. Кредитные карты создают долг с процентными ставками, часто превышающими 25 % годовых.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin позволяет перейти на",
	"bitcoin-vs-visa::point_6_summary_2": "самостоятельное хранение",
	"bitcoin-vs-visa::point_6_summary_3":
		" без банка и платёжного процессора. Кредитные карты всегда требуют посредников.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin работает 24/7 по всему миру, без рабочего времени. У Visa есть рабочие часы, технические окна и географические ограничения, которые могут блокировать транзакции.",
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
		`translate-rest-part1 (ru): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
