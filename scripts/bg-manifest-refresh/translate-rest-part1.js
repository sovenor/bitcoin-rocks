#!/usr/bin/env node
/**
 * Bulgarian manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
 *
 * Keys use "<namespace>::<key>" format to disambiguate shared keys
 * across multiple namespaces.
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
	"bg.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Връщане към началната страница",
	"404::404_message": "Bitcoin е страхотен, но тази счупена страница не е.",
	"404::404_not_found_short": "Не е намерено",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Предоставяме безплатни бизнес комплекти, които улесняват местните търговци да приемат Bitcoin. Всеки комплект включва печатни материали, които обясняват ползите от приемането на Bitcoin за бизнеса им.",
	"about::about_card_business_label": "Бизнес комплект",
	"about::about_card_business_source": "Източник: bitcoin.rocks →",
	"about::about_card_business_title":
		"Помогнете на местните фирми да приемат Bitcoin плащания",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Източник: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Допринесете",
	"about::about_card_contribute_source": "Източник: GitHub →",
	"about::about_card_contribute_title":
		"Научете как да допринесете за проекта bitcoin.rocks",
	"about::about_card_email_label": "Имейл",
	"about::about_card_email_source": "Източник: Имейл →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Печатни листовки",
	"about::about_card_flyers_source": "Източник: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Изтеглете и разпечатайте Bitcoin листовки за вашата общност",
	"about::about_card_github_label": "Хранилище",
	"about::about_card_github_source": "Източник: GitHub →",
	"about::about_card_github_title": "Вижте bitcoin.rocks в GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Източник: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Безплатни стикери",
	"about::about_card_stickers_source": "Източник: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Получете безплатни Bitcoin стикери, доставени до вратата ви",
	"about::about_editorial_2":
		"Позоваваме се на надеждни източници като Федералния резерв (FRED), Бюрото по статистика на труда на САЩ, FDIC, Обединените нации, Световния съвет за злато, Forbes, MIT Technology Review, Лин Олдън и Джеймс Лавиш. Вярваме, че когато фактите са ясно представени, Bitcoin говори сам за себе си.",
	"about::about_flyers_blurb":
		"Изготвяме печатни листовки, които можете да раздавате на срещи, да поставяте на обществени табла или да пускате в пощенски кутии — прост начин да създадете любопитство и да насочите хората към bitcoin.rocks, за да научат повече.",
	"about::about_header": "За bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks",
	"about::about_mission_1b":
		"е основан през 2022 г. от с проста мисия: да ускори приемането на Bitcoin чрез образование.",
	"about::about_open_source_2":
		"bitcoin.rocks е безплатен проект с отворен код, лицензиран под MIT. Всеки може да допринесе за bitcoin.rocks. Особено приветстваме преводачите, които помагат да направим съдържанието ни достъпно за хората по целия свят.",
	"about::about_page_description":
		"bitcoin.rocks е безплатен и отворен код образователен сайт за Bitcoin, основан през 2022 г. Нашата мисия е да ускорим приемането на Bitcoin чрез образование.",
	"about::about_stickers_blurb":
		"Изпращаме безплатни Bitcoin стикери до вратата ви, за да ви помогнем да разпространите информацията за Bitcoin във вашата общност. Всеки месец стотици хора сканират QR кодовете на тези стикери, за да научат за Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin няма банкови паники",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin е система с пълен резерв. Не депозирате парите си в банка. Вие сте банката. Парите ви не се дават на заем без ваше знание, защото само вие имате достъп до тях.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Докато държите Bitcoin в собствения си портфейл — а не опакован в борса или ETF — банковите паники са невъзможни.",
	"bank-runs::bank_runs_bitcoin_p3":
		"С Bitcoin наистина контролирате парите си.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"От 26 март 2020 г. от американските банки не се изисква да държат резерви.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Банков резервен коефициент",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Източник: Федерален резерв →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Система с пълен резерв — не е необходима застраховка на депозитите.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin покритие",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Източник: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Всеки Bitcoin е в блокчейна — нито един не е даден на заем.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Bitcoin резервен коефициент",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Източник: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 милиарда долара застрахователен фонд срещу 10,82 трилиона долара застраховани депозити (декември 2025 г.).",
	"bank-runs::bank_runs_card_fdic_label": "Покритие на FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Източник: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42%",
	"bank-runs::bank_runs_card_svb_label": "Казус",
	"bank-runs::bank_runs_card_svb_source":
		"Източник: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Научете как се случи банковата паника в Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Следваща стъпка",
	"bank-runs::bank_runs_card_wallet_source": "Започнете тук →",
	"bank-runs::bank_runs_card_wallet_title":
		"Научете как да получите свой собствен Bitcoin портфейл",
	"bank-runs::bank_runs_fdic_heading":
		"Застраховката на FDIC покрива около 1% от депозитите",
	"bank-runs::bank_runs_fdic_p1":
		"Застраховката на FDIC защитава депозитите до 250 000 долара на вложител. Но застрахователният фонд е много малък в сравнение с общите депозити, които трябва да защитава.",
	"bank-runs::bank_runs_fdic_p2_a":
		"В случай на широкомащабен банков фалит правителството ще отпечата пари, за да покрие дефицита — което причинява повече",
	"bank-runs::bank_runs_fdic_p2_link": "инфлация.",
	"bank-runs::bank_runs_header":
		"Bitcoin няма банкови паники, но вашата банка може да има.",
	"bank-runs::bank_runs_page_description":
		"Банките заемат вашите депозити под частичен резервен банкинг. Ако твърде много хора се опитат да изтеглят пари едновременно, банките могат да фалират. Bitcoin е система с пълен резерв — банковите паники са невъзможни.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: пример от реалния живот",
	"bank-runs::bank_runs_svb_p1_a":
		"През март 2023 г. Silicon Valley Bank фалира, след като инвестира клиентски депозити в дългосрочни",
	"bank-runs::bank_runs_svb_p1_b":
		"облигации. Когато тези облигации загубиха стойност, SVB не можа да покрие тегленията. Банката стана неплатежоспособна.",
	"bank-runs::bank_runs_svb_p1_link": "държавни",
	"bank-runs::bank_runs_svb_p2":
		"Хиляди компании не можеха да платят на служителите си. FDIC се намеси — но това повдигна по-голям въпрос: дали парите ви наистина са в безопасност?",
	"bank-runs::bank_runs_what_p1":
		"Банките не съхраняват депозитите ви в трезор. Те заемат и инвестират парите ви — това се нарича частична резервна система.",
	"bank-runs::bank_runs_what_p2":
		"Ако твърде много хора се опитат да изтеглят пари едновременно, банката няма да има достатъчно кеш, за да плати на всички. Това е банкова паника — и може да доведе до пълен срив на банките.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">банките</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Всеки с интернет връзка може да използва Bitcoin — той е ",
	"bitcoin-vs-banks::point_1_summary_2": "без разрешения.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Банките могат да отказват, замразяват или затварят сметки въз основа на политики или държавни регулации.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin мрежата работи 24/7, без прекъсвания за поддръжка или празници. Банките имат ограничено работно време, почивни дни и прекъсвания.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Всяка Bitcoin транзакция е в публичен блокчейн, който всеки може да одитира. Банките поддържат частни счетоводни книги, които клиентите не могат да проверят независимо.",
	"bitcoin-vs-banks::point_4_summary_1":
		"С Bitcoin държите собствените си ключове — вижте нашето просто ръководство ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin портфейли",
	"bitcoin-vs-banks::point_4_summary_3":
		". Банките държат парите ви и могат да ги замразят, ограничат или прекъснат достъпа по всяко време.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin таксите са прозрачни и предвидими. Банките натрупват скрити такси за сметка, овърдрафт, преводи и банкомати с течение на времето.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin ви позволява да харчите само това, което притежавате. Банките разрешават овърдрафти, след което налагат последователни наказателни такси за тази привилегия.",
	"bitcoin-vs-banks::point_7_summary_1":
		"След като бъдат излъчени, Bitcoin транзакциите не могат да бъдат спирани или отменяни. Банките могат да блокират, замразят или отменят транзакции въз основа на политики или държавни нареждания.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">облигациите</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Облигациите са \"без риск\" само на думи — инфлацията, движенията на лихвените проценти и рискът от неизпълнение изяждат реалните възвръщаемости.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin има прозрачна волатилност, но няма скрит риск от контрагента.",
	"bitcoin-vs-bonds::point_2_summary_1": "Ако",
	"bitcoin-vs-bonds::point_2_summary_2": "инфлацията",
	"bitcoin-vs-bonds::point_2_summary_3":
		"надхвърли доходността на облигациите, държателите на облигации губят реална покупателна способност всяка година. Лимитът от 21 милиона на Bitcoin не може да бъде инфлиран.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Пазарите на облигации замръзват по време на криза — Silicon Valley Bank фалира отчасти, защото беше заседнала в облигации, които загубиха стойност. Вижте",
	"bitcoin-vs-bonds::point_3_summary_2": "банковите паники",
	"bitcoin-vs-bonds::point_3_summary_3":
		", за да видите как Bitcoin ги избягва. Bitcoin се търгува глобално 24/7 без кризи на ликвидност.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Търговете за съкровищни облигации могат да се провалят, ако няма достатъчно купувачи — вижте",
	"bitcoin-vs-bonds::point_4_summary_2": "слабия търг от 2022 г.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Цената на Bitcoin непрекъснато се открива на отворени пазари, без централизиран търг, който може да се провали.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Доходността на облигациите е фиксирана към момента на закупуване. Дори ако икономиката процъфтява или валутата се срине, доходността ви остава същата.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin има значителен възходящ потенциал, тъй като приемането нараства и търсенето се сблъсква с фиксирано предлагане.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Повечето облигации се държат чрез банки или брокери, добавяйки риск от контрагента. Bitcoin може да се съхранява самостоятелно с",
	"bitcoin-vs-bonds::point_6_summary_2": "портфейл",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — напълно премахвайки този риск.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Облигациите зависят изцяло от правителствата, които плащат. Ако правителството изпадне в неплатежоспособност или инфлира дълга си, държателите на облигации губят.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin работи независимо от всяко правителство или политическа власт.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">кеша</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin се движи навсякъде по света за минути през интернет. Кешът изисква физическо присъствие или доверени куриери — не можете да изпратите банкнота от 20 долара по имейл.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin работи еднакво навсякъде. Кешът е ограничен от географията, обменните курсове и местното приемане.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Правителствата могат да демонетизират кеша за една нощ — Индия направи точно това през 2016 г. Дори без изтегляне от обращение кешът губи стойност поради",
	"bitcoin-vs-cash::point_3_summary_2": "инфлация",
	"bitcoin-vs-cash::point_3_summary_3":
		". Bitcoin не може да бъде демонетизиран от никое правителство или власт.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Кешът може да се фалшифицира, понякога убедително. Bitcoin използва криптография, която прави фалшифицирането математически невъзможно.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin няма централна власт. Кешът се издава от правителства, които могат да отпечатват повече, да променят дизайна или да демонетизират банкноти по желание.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Кешът е уязвим на кражба, пожар, загуба и конфискация. Bitcoin може да се",
	"bitcoin-vs-cash::point_6_summary_2": "съхранява самостоятелно",
	"bitcoin-vs-cash::point_6_summary_3":
		" сигурно на телефон или хардуерно устройство.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin се дели на 100 милиона сатоши, което позволява плащания с всякакъв размер. Кешът има минимални номинали — не можете да разделите стотинка.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">Цифровите валути на централните банки (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Никой не може да ви спре да извършвате транзакции с Bitcoin. CBDC са проектирани така, че правителствата и централните банки да контролират всяко плащане, ограничавайки поверителността и свободата ви.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin никога не изтича и няма месечни такси. CBDC могат да бъдат програмирани да изтичат, пречейки ви да спестявате за бъдещето.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin има твърд лимит от 21 милиона BTC. CBDC нямат лимит на предлагането, позволявайки на правителствата да разширяват паричната маса според желанието си — което причинява",
	"bitcoin-vs-cbdc::point_3_summary_2": "инфлация.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin адресите не са обвързани с реалната ви самоличност. CBDC са директно свързани с държавна лична карта, позволявайки масово финансово наблюдение и цензура.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Правилата на Bitcoin се проверяват от десетки хиляди независими възли. CBDC са в ръцете на правителствата и централните банки, които имат пълен контрол върху мрежата.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Всеки може да стартира Bitcoin възел, за да проверява правилата на мрежата. CBDC не позволяват на потребителите да стартират възли — трябва да се доверите на централната власт.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Самостоятелно съхраняваният Bitcoin не може да бъде замразяван от никого. CBDC са проектирани така, че правителствата и централните банки да могат мигновено да замразяват сметки.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Самостоятелното съхранение на Bitcoin с",
	"bitcoin-vs-cbdc::point_8_summary_2": "портфейл",
	"bitcoin-vs-cbdc::point_8_summary_3":
		" ви дава пълен контрол над парите ви. CBDC изискват доверие в пазачи като банки или правителства, които да държат парите ви на ваше име.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Паричната политика на Bitcoin е фиксирана в код и не може да се променя. CBDC могат да бъдат препрограмирани от политиците според желанието им, причинявайки",
	"bitcoin-vs-cbdc::point_9_summary_2": "инфлация",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", когато се отпечатват твърде много пари.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin е най-сигурната изчислителна мрежа, създавана някога, и никога не е била хаквана. CBDC разчитат на банки и правителства, които са били хаквани безброй пъти.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">криптовалутите</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Протоколът на Bitcoin остава в голяма степен непроменен от 2009 г., предоставяйки предвидими правила. Повечето крипто проекти непрекъснато променят протоколите си или икономиката на токените си, или се разклоняват в нови версии.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin работи на десетки хиляди независими възли по целия свят. Повечето крипто проекти се управляват от фондации, компании или малки екипи за разработка, които могат да правят едностранни промени.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin има твърд лимит от 21 милиона монети — най-оскъдният цифров актив. Повечето крипто проекти имат неограничено предлагане или механизми за сечене на нови токени по желание, разреждайки дяловете на държателите.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin има една цел: пиър-ту-пиър цифрови пари. Всеки може да ги разбере и използва. Повечето крипто включват сложни смарт договори или DeFi, които изискват технически опит за безопасно използване.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Доказателството за работа на Bitcoin функционира от повече от 15 години без успешна атака на основната мрежа. Повечето крипто проекти използват експериментален консенсус, неизпитан в битка.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin е цифрови пари — съхранение на стойност и средство за размяна. Повечето крипто токени са спекулативни или управленски токени с неясна реална стойност.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin се укрепва при атака и е преживял всяка криза, забрана и критика. Повечето крипто проекти се сриват под регулаторен, технически или пазарен натиск.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin няма изпълнителен директор, компания или единична точка на повреда. Повечето крипто проекти зависят от рискови капиталисти, определено ръководство или оцеляването на една компания.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">изящните изкуства</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Всеки Bitcoin е еднакъв и заменим. Всяко произведение на изкуството е уникално — различно създаване, история, състояние и произход правят директните сравнения трудни.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin се търгува 24/7 на глобален пазар, достъпен за всеки. Изкуството изисква специализирани аукционни къщи, частни дилъри или галерии и може да отнеме месеци, за да се продаде.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Купуването или продаването на Bitcoin струва по-малко от 1%, често много по-малко. Продажбите на изкуство натрупват 30-40% в такси за купувача, комисиони, застраховка, доставка и такси за удостоверяване.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin се дели на 100 милиона сатоши, което го прави идеален за всеки размер транзакция. Не можете да притежавате парче от картина или ъгъл от скулптура.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Собствеността и автентичността на Bitcoin могат да бъдат проверени криптографски от всеки в блокчейна. Удостоверяването на изкуството е скъпо, бавно и все още редовно се заблуждава от фалшификатори — унищожавайки стойността на произведение на изкуството за една нощ.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Правилно съхраняваният Bitcoin оцелява при наводнения, пожари, земетресения и кражби. Изкуството е уязвимо на всеки вид физическо унищожение, а застраховката рядко покрива всичко.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Всеки с интернет връзка и малко пари може да купи Bitcoin. Инвестирането в изкуство е практически ограничено до заможни колекционери с достъп до аукциони и специализирани познания.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">златото</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin може да се изпраща моментално през интернет с ниски такси. Златото трябва да бъде физически изпратено, за да се прехвърли собствеността.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin е роден цифров актив, който можете да прехвърляте през интернет. Повечето злато онлайн е цифрова разписка — притежавате само обещание от пазач, а не самия метал.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin има твърд лимит от 21 милиона BTC. Предлагането на злато нараства с около 1,6% годишно, свивайки дела ви — по-малко от",
	"bitcoin-vs-gold::point_3_summary_2": "инфлацията",
	"bitcoin-vs-gold::point_3_summary_3":
		" на хартиените пари — но все пак инфлация.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Когато цените на златото се покачат, се добива повече злато, което отново понижава цената. Предлагането на Bitcoin е нееластично — без значение колко висока е цената, винаги ще има само 21 милиона.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Десетки хиляди независими възли проверяват Bitcoin мрежата. Повечето физическо злато се съхранява в хранилищата на шепа големи пазачи.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Всеки може да провери истинския Bitcoin, като стартира пълен възел — това е просто софтуер. Проверката на физическо злато изисква то да бъде стопено; може да има волфрам вътре.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin се дели на 100 милиона сатоши, което го прави идеален за всеки размер покупка. Златото не може лесно да се разделя на малки транзакции.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">недвижимите имоти</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin се движи моментално навсякъде по света. Недвижимите имоти са фиксирани на едно място и уязвими на местни икономически, политически и природни рискове.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin се дели на 100 милиона сатоши. Недвижимите имоти не могат да се продават частично — не можете просто да отхвърлите кухнята или да купите половин спалня.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin работи в децентрализирана мрежа, която никое правителство не може да контролира. Недвижимите имоти са силно регулирани — зониране, контрол на наемите, принудително отчуждаване и конфискация — всичко това се прилага.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin не изисква поддръжка. Недвижимите имоти изискват ремонти, обновявания, застраховки, управление на имоти и проблеми с наематели.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin няма текущи данъци — плащате капиталови печалби само при продажба. Недвижимите имоти дължат годишни данъци върху имотите независимо от доходите.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Правилно съхраняваният Bitcoin оцелява при пожар, наводнение, земетресение. Недвижимите имоти са уязвими на всяко бедствие, а застраховката рядко покрива всичко.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Всеки Bitcoin е еднакъв и заменим. Всеки имот е уникален, което прави оценката и сравненията трудни.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin се търгува 24/7 глобално от всеки с интернет връзка. Продажбите на недвижими имоти са ограничени до местни купувачи и могат да отнемат месеци документация, за да се финализират.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin позволява директна индивидуална собственост за всеки. Купуването на недвижими имоти като инвестиция освен първичното ви жилище повишава цените на жилищата, намалява достъпността и подхранва жилищната криза.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">акциите</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin е директен актив, който притежавате напълно. Акциите са дялове в компания — стойността им зависи от управлението, представянето и решенията, които не контролирате.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin има твърд лимит от 21 милиона BTC. Компаниите могат да издават нови акции по всяко време, разреждайки съществуващите акционери — точно както",
	"bitcoin-vs-stocks::point_2_summary_2": "инфлацията",
	"bitcoin-vs-stocks::point_2_summary_3":
		" на хартиените пари разрежда стойността на кеша. С Bitcoin делът ви никога не намалява.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin няма изпълнителен директор или единична точка на повреда. Акциите зависят силно от ръководството — лошо решение или напускане на един човек може да срине цената.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Цената на Bitcoin идва от отворени глобални пазари. Оценките на акциите разчитат на показатели като съотношение цена/печалба, които могат да скрият надценени акции.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin се търгува 24/7 по целия свят. Фондовите борси са отворени само в работно време през работни дни.",
	"bitcoin-vs-stocks::point_6_summary_1": "Можете да",
	"bitcoin-vs-stocks::point_6_summary_2": "съхранявате самостоятелно",
	"bitcoin-vs-stocks::point_6_summary_3":
		" Bitcoin с прост софтуер — без нужда от брокер. Акциите се намират в брокерски фирми, излагайки ви на риск от контрагента, ако те фалират.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Фиксираното предлагане на Bitcoin го прави надежден хедж срещу инфлация. Някои акции надминават инфлацията, други не — няма гаранция.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Разликата между <span class=\"orange\">Bitcoin</span> и <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin е отворена мрежа, към която всеки може да се свърже и да я използва без разрешение. Visa е затворена система, управлявана от финансови институции, които могат да откажат достъп — особено за хората без банки и бедните.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Транзакциите с Bitcoin нямат такси за търговци. Visa обикновено таксува търговците около 3% за транзакция — вашият бизнес може да спести пари, като приема",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin плащания",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Всяка Bitcoin транзакция е в отворен и одитируем блокчейн. Visa поддържа затворена, частна система, където клиентите не могат да проверят нищо независимо.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin не може да бъде замразяван от никоя централна власт. Visa може да замразява сметки, да блокира транзакции или да отказва услуга по всяко време.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin е окончателно уреждане — можете да харчите само това, което притежавате. Кредитните карти често създават дълг с лихвени проценти над 25% годишно.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin ви дава възможност да",
	"bitcoin-vs-visa::point_6_summary_2": "съхранявате самостоятелно",
	"bitcoin-vs-visa::point_6_summary_3":
		" — без нужда от банка или процесор за плащания. Кредитните карти винаги изискват посредници.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin работи глобално 24/7 без работно време. Visa има оперативно време, прекъсвания за поддръжка и географски ограничения, които могат да блокират транзакциите.",
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
		`translate-rest-part1 (bg): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
