#!/usr/bin/env node
/**
 * Bulgarian manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator,
 *   flyers, get-involved, index, lightning, nostr/index, sticker-files/*,
 *   sticker-language-success, sticker-success, stickers, wallets.
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
	"bg.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "Цена на Bitcoin",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Намерете текущата или историческата цена на Bitcoin в долари",
	"business/accounting::accounting_card_pacioli_label": "Bitcoin счетоводители",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_label": "Импорт в Excel",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Автоматично изтегляйте цените на Bitcoin в Excel",
	"business/accounting::accounting_card_wallets_label": "Хибридни портфейли",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"Вижте препоръчаните бизнес портфейли",
	"business/accounting::accounting_description":
		"Ръководство на прост език за приемане на Bitcoin в счетоводството на бизнеса ви — хибридни портфейли, цена на придобиване, капиталови печалби и кога да се свържете със счетоводител.",
	"business/accounting::accounting_disclaimer":
		"Това ръководство е само за информационни цели и не е данъчен съвет. Консултирайте се с квалифициран счетоводител за данъчни съвети, специфични за вашата ситуация.",
	"business/accounting::accounting_disclaimer_label": "Забележка",
	"business/accounting::accounting_example_feb_1": "1 февруари",
	"business/accounting::accounting_example_gain_badge": "Капиталова печалба",
	"business/accounting::accounting_example_gain_explain":
		"Записвате капиталова печалба от 10 долара.",
	"business/accounting::accounting_example_gain_result": "+10 долара",
	"business/accounting::accounting_example_jan_1": "1 януари",
	"business/accounting::accounting_example_loss_badge": "Капиталова загуба",
	"business/accounting::accounting_example_loss_explain":
		"Записвате капиталова загуба от 10 долара.",
	"business/accounting::accounting_example_loss_result": "−10 долара",
	"business/accounting::accounting_example_received_label": "Получено",
	"business/accounting::accounting_example_sold_label": "Продадено или изразходено",
	"business/accounting::accounting_hero_subtitle":
		"Приемането на Bitcoin в бизнеса ви не трябва да усложнява счетоводството ви. Кратката версия — плюс инструментите и експертите, които го правят лесно.",
	"business/accounting::accounting_intro_c1":
		"Ако вече приемате кеш или карти, добавянето на Bitcoin към бизнес счетоводството ви е по-просто, отколкото изглежда. Имате две опции: автоматично конвертиране на всяко Bitcoin плащане в долари при получаване (не е необходимо ново счетоводство) или задържане на част като Bitcoin (няколко допълнителни числа за проследяване).",
	"business/accounting::accounting_intro_c2":
		"Това ръководство ви превежда през двете — така че можете да изберете какво работи за бизнеса ви и да започнете да приемате Bitcoin уверено.",
	"business/accounting::accounting_s1": "Лесният начин: автоматично конвертиране в долари",
	"business/accounting::accounting_s1_c1":
		"Най-простият начин да приемате Bitcoin е да използвате хибриден портфейл, който автоматично продава 100% от получавания Bitcoin за долари (или местната ви валута) в момента, в който плащането пристига.",
	"business/accounting::accounting_s1_c2":
		"С тази настройка счетоводството ви изглежда точно както днес — просто окончателна сума в долари за всяка сделка. Без цена на придобиване, без капиталови печалби, без нови електронни таблици.",
	"business/accounting::accounting_s2":
		"Ако задържате Bitcoin: проследявайте цената на придобиване",
	"business/accounting::accounting_s2_c1":
		"Някои бизнеси избират да задържат част от получения Bitcoin вместо да го конвертират автоматично изцяло. Ако това сте вие, основната допълнителна стъпка е проследяване на цената на придобиване — стойността в долари на всяко Bitcoin плащане в деня на получаването му.",
	"business/accounting::accounting_s2_c2":
		"Дори ако мислите за бизнеса си изцяло в Bitcoin, повечето данъчни органи все още искат отчитане в долари. Добрата новина: това са само две числа на транзакция — количеството получен Bitcoin и стойността в долари в този ден.",
	"business/accounting::accounting_s2_c3":
		"За да не се налага да проверявате цените ежедневно, използвайте инструментите по-долу, за да автоматизирате търсенето.",
	"business/accounting::accounting_s3":
		"Харчене или продажба на задържания от вас Bitcoin",
	"business/accounting::accounting_s3_c1":
		"Ако автоматично конвертирате всяко плащане в долари, пропуснете този раздел — не се отнася за вас.",
	"business/accounting::accounting_s3_c2":
		"Ако задържате малко Bitcoin и по-късно решите да го похарчите или продадете, добавете продажната цена към същата таблица за цена на придобиване. Разликата между стойността на Bitcoin при получаване и стойността му при харчене или продажба е капиталова печалба или загуба.",
	"business/accounting::accounting_s3_c3": "Два бързи примера:",
	"business/accounting::accounting_s3_c6":
		"Това е. Основната математика е подобна на счетоводството на всеки друг актив, който се повишава или понижава в стойност.",
	"business/accounting::accounting_s4":
		"Нуждаете се от професионалист, говорещ Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Ако предпочитате да предадете тази работа — или ако Bitcoin счетоводството ви е по-сложно от това, което един хибриден портфейл може да реши — горещо препоръчваме Satoshi Pacioli Accounting Services, фирма, специализирана в Bitcoin счетоводство за бизнеси.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin счетоводство за вашия бизнес",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — текуща и историческа цена на Bitcoin в долари",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Bitcoin счетоводство за бизнеси",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — импортиране на крипто цени в Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Кратки отговори на най-честите въпроси, които търговците задават преди да започнат да приемат Bitcoin — такси, сетълмент, портфейли, връщания, разходи и много повече.",
	"business/faq::faq_intro_c1":
		"Кликнете върху всеки въпрос по-долу, за да разширите отговора. Когато сте готови да започнете да приемате Bitcoin, бизнес ресурсите в дъното на страницата ще ви насочват на всяка стъпка.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "Счетоводство",
	"business/index::biz_label_faq": "Често задавани въпроси",
	"business/index::biz_label_maps": "Карти на търговци",
	"business/index::biz_label_rewards": "Награди",
	"business/index::biz_label_stickers": "Стикери",
	"business/index::biz_label_wallets": "Портфейли",
	"business/index::biz_meta_description":
		"Приемайте Bitcoin в бизнеса си за по-ниски такси, моментален сетълмент, без връщания и повече клиенти.",
	"business/index::business_hero_subtitle":
		"Приемайте плащания с ниски такси, получавайте парите си моментално и достигнете до милиони нови клиенти — без договори или скрити разходи.",
	"business/index::business_intro_c1":
		"Bitcoin дава на бизнеса ви начин да получавате парите си по-бързо, по-евтино и по-конфиденциално. Без посредници. Без връщания. Без договори. Само пари, които се сетълват директно от клиентите ви до вас за секунди.",
	"business/index::business_intro_c2":
		"По-долу е кратката версия защо Bitcoin е добър за бизнеса — а отдолу са всички ресурси, които ви трябват, за да започнете да приемате днес.",
	"business/index::business_resources_heading":
		"Всичко, от което се нуждаете, за да приемате Bitcoin",
	"business/index::business_resources_intro":
		"Работете през тези ресурси със свое собствено темпо. Всеки е кратко, практично ръководство.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "Разкажете ни за вашия бизнес",
	"business/maps::biz_maps_form_intro":
		"Само няколко подробности, за да ви включим в списъка. Информацията за адреса се съхранява само колкото е необходимо, за да подадем бизнеса ви в картите.",
	"business/maps::biz_maps_hero_subtitle":
		"Регистрирайте бизнеса си безплатно в BTC Map — глобалният отворен каталог на търговци, приемащи Bitcoin — така че близките Bitcoin потребители могат да ви намерят и да харчат Bitcoin в бизнеса ви.",
	"business/maps::biz_maps_hero_title":
		"Добавете бизнеса си към Bitcoin картите на търговци",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin потребителите активно търсят места, където да харчат парите си. Поставянето на бизнеса ви на картата го поставя пред всеки Bitcoin потребител, който търси място за хранене, пазаруване или нощувка наблизо — без разходи за вас.",
	"business/maps::biz_maps_intro_c2":
		"Попълнете краткия формуляр по-долу и ние ще подадем бизнеса ви в BTC Map и други Bitcoin карти на търговци от ваше име.",
	"business/maps::biz_maps_meta_description":
		"Регистрирайте бизнеса си безплатно в BTC Map и други Bitcoin карти на търговци, така че близките Bitcoin потребители могат да ви намерят.",
	"business/maps::biz_maps_placeholder_address": "Улица и номер",
	"business/maps::biz_maps_placeholder_category":
		"Категория (напр. ресторант, кафене, хотел)",
	"business/maps::biz_maps_placeholder_city": "Град",
	"business/maps::biz_maps_placeholder_country": "Държава",
	"business/maps::biz_maps_placeholder_name": "Име на бизнеса",
	"business/maps::biz_maps_placeholder_region": "Област / Провинция / Регион",
	"business/maps::biz_maps_placeholder_website": "Уебсайт (по избор)",
	"business/maps::biz_maps_view_map_cta": "Вижте BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Вижте BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Благодарим, че подадохте бизнеса си. Ще ви добавим към Bitcoin картите на търговци скоро.",
	"business/maps-success::biz_maps_success_hero_title":
		"Заявката е получена 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Бизнесът ви ще бъде регистриран в BTC Map и други Bitcoin каталози на търговци в рамките на 1-2 седмици. Всяка заявка се проверява ръчно, за да се запазят картите точни.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"След като обявата ви е активна, близките Bitcoin потребители могат да намерят бизнеса ви и да дойдат да харчат Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header": "Какво следва",
	"business/maps-success::biz_maps_success_view_c1":
		"Докато чакате, разгледайте BTC Map и вижте нарастващата мрежа от бизнеси по целия свят, приемащи Bitcoin.",
	"business/maps-success::biz_maps_success_view_header": "Вижте къде ще се появите",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Разпечатайте свои собствени стикери \"Приемаме Bitcoin\" на английски, за да уведомите клиентите си, че приемате Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Изтеглете файлове със стикери \"Приемаме Bitcoin\" на английски",
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Изтеглете файлове със стикери на английски, за да разпечатате свои собствени стикери \"Приемаме Bitcoin\".",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Благодарим, че поискахте файлове със стикери \"Приемаме Bitcoin\" на вашия език.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Заявката е получена 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Ще създадем и публикуваме файловете ви със стикери в рамките на 3-4 седмици. След като бъдат готови, ще можете да ги изтеглите и разпечатате безплатно от страницата с файлове със стикери.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Файловете със стикери се пускат на партиди, така че активирането на вашия език може да отнеме няколко седмици. Благодарим ви за търпението!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Какво следва",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Поръчайте на едро",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Поискайте още един безплатен пакет",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Ще получите безплатните си стикери \"Приемаме Bitcoin\" в рамките на 2-4 седмици в обикновен бял плик с 3 стикера вътре.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Стикерите ви са на път 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Ако 3 стикера не са достатъчни за бизнеса ви, не се колебайте да поискате още един безплатен пакет — или поръчайте на едро от същия печатарски магазин, който използваме ние.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Нуждаете се от повече стикери?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"На входната ви врата или прозорец, за да могат клиентите да видят преди да влязат",
	"business/sticker-success::biz_sticker_success_tip_2":
		"В близост до касата, точката на продажба или зоната за плащане",
	"business/sticker-success::biz_sticker_success_tip_3":
		"На менютата, ценовите листи или буркана за бакшиши",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Не ги лепете на места, които не притежавате или нямате разрешение да поставяте",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Добри места за поставяне на стикерите ви",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Уведомете клиентите си, че приемате Bitcoin. Поръчайте безплатен пакет стикери \"Приемаме Bitcoin\" за поставяне в бизнеса си.",
	"business/stickers::biz_stickers_hero_title":
		"Безплатни стикери \"Приемаме Bitcoin\"",
	"business/stickers::biz_stickers_intro_c1":
		"Приемането на Bitcoin е само половината от работата — клиентите ви също трябва да знаят, че го правите. Тези малки стикери \"Приемаме Bitcoin\" са проектирани да се залепят на входната ви врата, касата, менюто или където и да е другаде, където клиентите ще ги видят преди плащане.",
	"business/stickers::biz_stickers_intro_c2":
		"Ще ви изпратим безплатен пакет по пощата до всяко място в САЩ или Канада, или можете да разпечатате свои собствени навсякъде по света.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Канада — Безплатна поща",
	"business/stickers::biz_stickers_option_print":
		"🌍 Глобално — Ще разпечатам сам",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 САЩ — Безплатна поща",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Превод на \"Приемаме Bitcoin\"",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Превод на \"Сканирайте, за да научите защо Bitcoin е добър за бизнеса\"",
	"business/stickers::biz_stickers_print_c1":
		"Без значение къде живеете, можете да разпечатате свои собствени стикери \"Приемаме Bitcoin\". Кликнете върху вашия език по-долу, за да изтеглите файловете със стикери и инструкциите за печат.",
	"business/stickers::biz_stickers_print_header":
		"Разпечатайте свои собствени файлове със стикери",
	"business/stickers::biz_stickers_request_c1":
		"Попълнете формуляра по-долу, за да поискате файлове със стикери \"Приемаме Bitcoin\" на местния ви език. Ще ви уведомим, когато са готови.",
	"business/stickers::biz_stickers_request_header":
		"Не виждате своя език?",
	"business/stickers::biz_stickers_step_description":
		"Ще изпратим безплатен пакет по пощата до адреси в САЩ и Канада. Можете да разпечатате свои собствени навсякъде по света.",
	"business/stickers::biz_stickers_step_header":
		"Как бихте искали да получите стикерите си?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::biz_wallets_meta_description":
		"Всички Bitcoin портфейли си взаимодействат — изберете този, който отговаря на бизнеса ви. Безплатно, моментален сетълмент, без връщания.",
	"business/wallets::sources_breez_business":
		"Breez — само за Bitcoin Lightning портфейл",
	"business/wallets::sources_ibex":
		"IBEX — Lightning платежна инфраструктура",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin процесор за плащания",
	"business/wallets::sources_square":
		"Square — приемайте Bitcoin плащания",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin фактуриране за бизнеси",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin портфейлите са безплатни. Изберете този, който отговаря на бизнеса ви — лично, онлайн или базиран на фактури — и започнете да приемате Bitcoin за минути.",
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::wallets_section_invoice": "Портфейли за бизнеси, базирани на фактури",
	"business/wallets::wallets_section_invoice_intro":
		"Ако изпращате фактури на клиенти (консултации, фрийланс, B2B услуги), използвайте портфейл базиран на фактури. Клиентът ви плаща Bitcoin фактурата с няколко кликвания.",
	"business/wallets::wallets_section_multiple":
		"Портфейли за бизнеси с множество служители",
	"business/wallets::wallets_section_multiple_intro":
		"Ако имате екип, който приема плащания на касата, изберете портфейл, който поддържа вход с множество служители — всеки служител получава свой собствен PIN и поддържате чист одитен дневник кой какво плащане е приел.",
	"business/wallets::wallets_section_online": "Портфейли за онлайн бизнеси",
	"business/wallets::wallets_section_online_intro":
		"Продавате на уебсайт? Тези портфейли се свързват с вашия онлайн магазин и приемат Bitcoin от всеки клиент навсякъде по света — без връщания и не се изисква търговска сметка.",
	"business/wallets::wallets_section_sole":
		"Портфейли за индивидуални бизнеси",
	"business/wallets::wallets_section_sole_intro":
		"Ако управлявате магазин, кафене, студио или услуга сами, всеки от тези портфейли ще работи. Изберете според това дали искате да задържате плащанията като Bitcoin или да конвертирате част от всяко плащане автоматично в местната ви валута.",
	"business/wallets::wallets_strike_note":
		"Strike Business ви позволява да приемате Bitcoin и Lightning плащания без такси и моментално да сетълвате. Поддържа лични, онлайн и базирани на фактури плащания, с опционално автоматично конвертиране в местната ви валута.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Приемаме Bitcoin",
	"business/why::why_biz_s1": "По-ниски такси, повече за бизнеса",
	"business/why::why_biz_s1_c1":
		"Bitcoin плащанията заобикалят банките и компаниите за кредитни карти, които таксуват 2-3% от всяка продажба. Бизнесът задържа повече от това, което плащате — което обикновено означава по-добри цени и обслужване за вас.",
	"business/why::why_biz_s2": "Моментален сетълмент, без връщания",
	"business/why::why_biz_s2_c1":
		"Bitcoin плащанията се сетълват за секунди директно от портфейла ви до бизнеса. Няма нужда да чакате дни, за да освободи банката средствата, и няма скъпи спорове за връщания — така че бизнесът може да се фокусира върху обслужването на клиентите вместо да се бори с измами.",
	"business/why::why_biz_s3": "Безплатно приемане, отворено за всички",
	"business/why::why_biz_s3_c1":
		"Няма договори, месечни такси или разходи за настройка за бизнес, който приема Bitcoin. И милиони Bitcoin потребители по целия свят активно търсят търговци, които го приемат — което дава на бизнеса безплатна експозиция до нови клиенти.",
	"business/why::why_business_cta_intro":
		"Управлявате бизнес и искате да започнете да приемате Bitcoin?",
	"business/why::why_business_cta_link": "Вижте как работи →",
	"business/why::why_for_business": "Защо Bitcoin е страхотен за този бизнес",
	"business/why::why_for_business_intro":
		"Приемането на Bitcoin позволява на бизнеса да задържа повече от всяка продажба, да получава плащания моментално без връщания и да достига до глобална аудитория от Bitcoin потребители — всичко това без договори и месечни такси.",
	"business/why::why_good_for_you": "Защо Bitcoin е страхотен и за вас",
	"business/why::why_good_for_you_intro":
		"Bitcoin не е просто страхотен на касата — той е по-добра форма на пари, която защитава спестяванията, поверителността и оперативната ви свобода. Ето бърз преглед.",
	"business/why::why_hero_subtitle":
		"Току-що сканирахте стикер \"Приемаме Bitcoin\". Ето защо това са страхотни новини — за този бизнес и за вас.",
	"business/why::why_intro_c1":
		"Бизнесът, в който сте, приема Bitcoin — модерна, отворен код платежна мрежа, която всеки, навсякъде по света, може да използва, без банки или посредници, вземащи комисионна.",
	"business/why::why_intro_c2":
		"По-долу е кратката версия защо приемането на Bitcoin е добро за този бизнес — плюс защо използването на Bitcoin е добро за вас като клиент.",
	"business/why::why_learn_more_lowercase": "научете повече →",
	"business/why::why_next_business_label": "Приемайте Bitcoin",
	"business/why::why_next_business_title": "Приемайте Bitcoin в бизнеса си",
	"business/why::why_next_buy_label": "Купете Bitcoin",
	"business/why::why_next_buy_title": "Купете първия си Bitcoin",
	"business/why::why_next_learn_label": "Научете повече",
	"business/why::why_next_learn_title": "Научете повече за Bitcoin",
	"business/why::why_next_wallet_label": "Вземете портфейл",
	"business/why::why_next_wallet_title": "Вземете свой собствен Bitcoin портфейл",
	"business/why::why_s1_c1":
		"Инфлацията се случва, когато се отпечатват или създават повече пари от нищото. Това кара парите в джоба ви да струват по-малко с времето — поради което цените продължават да се покачват година след година.",
	"business/why::why_s1_c2":
		"Bitcoin има фиксирано предлагане от 21 милиона монети. Нито едно правителство, банка или компания не може да отпечата повече. Спестяванията ви в Bitcoin запазват стойността си с времето, вместо да я губят.",
	"business/why::why_s2_c1":
		"В последните години няколко американски банки фалираха поради банкови паники. Когато твърде много клиенти се опитаха да изтеглят пари едновременно, банките нямаха достатъчно кеш, за да платят на всички.",
	"business/why::why_s2_c2":
		"Вместо просто да съхраняват парите ви, банките заемат и инвестират повечето от тях. Ако тези инвестиции се влошат — или ако вложителите загубят доверие — банката може да фалира и депозитите ви могат да бъдат замразени или загубени.",
	"business/why::why_s2_c3":
		"С Bitcoin можете да съхранявате собствените си пари директно в собствения си портфейл. Без банка. Без посредник. Без банкова паника.",
	"business/why::why_s3_c1":
		"За разлика от кредитни карти, PayPal или традиционни банкови сметки, Bitcoin не изисква разрешение от никого за използване.",
	"business/why::why_s3_c2":
		"Никой не може да замрази сметката ви, да блокира плащане или да ви отреже от мрежата. Това е първата финансова система в историята, която можете да използвате свободно, без страх от цензура или конфискация.",
	"business/why::why_s4_c1":
		"Bitcoin често е неразбран, но тихо прави много добро в света.",
	"business/why::why_s4_c2":
		"Помогнал е на активисти за човешки права в борбата им за свобода, намалил е глобалните емисии на метан от сметища и петролни полета, стабилизирал е електрически мрежи и е финансирал обществени блага като национални паркове.",
	"business/why::why_whats_next_heading": "Къде следващото?",
	"business/why::why_whats_next_intro":
		"Ако това е първото ви сканиране на Bitcoin стикер, ето най-полезните места, откъдето да продължите.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_bitcoin_guide": "Как да купите Bitcoin",
	"buy::buy_header_subtitle":
		"Просто, стъпка по стъпка ръководство за закупуване на първия ви Bitcoin.",
	"buy::buy_howto_name": "Как да купите Bitcoin",
	"buy::buy_meta_description":
		"Научете как да купите Bitcoin безопасно с нашето ръководство стъпка по стъпка. Изберете държавата и метода си на плащане, за да намерите най-добрите опции за покупка на Bitcoin за вас.",
	"buy::buy_step_1_eyebrow": "Стъпка 1",
	"buy::buy_step_1_header": "Изберете своята държава",
	"buy::buy_step_2_eyebrow": "Стъпка 2",
	"buy::buy_step_2_header": "Изберете метод на плащане",
	"buy::buy_step_3_eyebrow": "Стъпка 3",
	"buy::buy_step_3_header": "Вашите опции за покупка",
	"buy::buy_step_4_eyebrow": "Стъпка 4",
	"buy::buy_step_4_header": "Съхранявайте Bitcoin безопасно",
	"buy::buy_storage_cta_label": "Следваща стъпка",
	"buy::sources_bisq":
		"Bisq — децентрализирана peer-to-peer Bitcoin борса",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — глобален каталог на Bitcoin банкомати",
	"buy::sources_kraken": "Kraken — утвърдена Bitcoin борса",
	"buy::sources_relai":
		"Relai — швейцарско самостоятелно съхранение приложение само за Bitcoin",
	"buy::sources_river":
		"River — покупка, добив и съхранение само за Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — купете Bitcoin с поддръжка на Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — доларно осредняване на разходите само за Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Добави език",
	"common::common_next_buy_bitcoin": "Купете Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Научете как да купите Bitcoin безопасно",
	"common::common_next_calculate": "Изчислете инфлацията си",
	"common::common_next_calculate_desc":
		"Вижте как инфлацията влияе на заплатата ви с времето",
	"common::common_next_get_wallet": "Вземете портфейл",
	"common::common_next_get_wallet_desc":
		"Вземете първия си Bitcoin портфейл — безплатно е",
	"common::common_next_keep_learning": "Продължете да учите",
	"common::common_next_keep_learning_desc":
		"Вижте как Bitcoin подобрява света",
	"common::common_site_tagline": "Bitcoin образование за всички.",
	"common::common_source_bls_cpi":
		"Бюро по статистика на труда на САЩ — Индекс на потребителските цени (CPI)",
	"common::common_source_btc_map":
		"BTC Map — глобален каталог на търговци, приемащи Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — безплатен, отворен код, самостоятелно хостван Bitcoin процесор за плащания",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Парична маса (категоричен индекс)",
	"common::common_source_oshi":
		"Oshi — Bitcoin платформа за награди за търговци",
	"common::common_source_strike_business":
		"Strike — Bitcoin и Lightning плащания за бизнеси",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_group_bitcoin": "Bitcoin данни",
	"common::common_sources_group_cpi":
		"Инфлация / Индекс на потребителските цени",
	"common::common_sources_group_debt": "Държавен дълг",
	"common::common_sources_group_money": "Данни за паричната маса",
	"common::common_sources_group_stories": "Примери от реалния свят",
	"common::common_sources_treasury_auction":
		"James Lavish — \"Can a Treasury Auction Fail?\"",
	"common::common_sticker_files_mission_5": "Поръчайте пакет",
	"common::common_sticker_files_mission_6": "безплатни стикери на английски.",
	"common::common_sticker_files_next_flyers_label": "Листовки",
	"common::common_sticker_files_next_flyers_title": "Разпечатайте Bitcoin листовка",
	"common::common_sticker_files_next_languages_label": "Файлове със стикери",
	"common::common_sticker_files_next_languages_title":
		"Вижте файлове със стикери на други езици",
	"common::common_sticker_files_print_these":
		"Разпечатайте тези с един клик",
	"common::common_sticker_name_bdhi_black":
		"Стикер \"Bitcoin няма инфлация\" (черен)",
	"common::common_sticker_name_bdhi_orange":
		"Стикер \"Bitcoin няма инфлация\" (оранжев)",
	"common::common_sticker_name_caution":
		"Bitcoin стикер \"Внимание! Топящо се кубче лед\"",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin стикер \"Лек за инфлацията\"",
	"common::common_sticker_name_danger":
		"Bitcoin стикер \"Опасност! Инфлация отпред\"",
	"common::common_sticker_name_fix":
		"Bitcoin стикер \"Поправи парите, поправи света\"",
	"common::common_sticker_name_got_inflation":
		"Bitcoin стикер \"Имате ли инфлация?\"",
	"common::common_sticker_name_study":
		"Стикер \"Учете Bitcoin\"",
	"common::common_sticker_name_warning":
		"Bitcoin стикер \"Предупреждение! Инфлацията краде спестяванията ви\"",
	"common::common_sticker_name_what_if":
		"Bitcoin стикер \"Ами ако нямахте инфлация?\"",
	"common::common_sticker_tips_heading": "Съвети за стикери",
	"common::common_sticker_tips_intro":
		"След като разпечатате стикерите си, ги поставете някъде, където хората ще ги видят! Добри места за стикери:",
	"common::common_sticker_tips_list_1":
		"На обществени места, където хората ще ги видят",
	"common::common_sticker_tips_list_2":
		"На места, където е малко вероятно да бъдат премахнати бързо (стикерите не нанасят трайни щети)",
	"common::common_sticker_tips_list_3":
		"На повърхности, към които се залепват лесно (метал, пластмаса, стъкло)",
	"common::common_sticker_tips_list_4":
		"Не на частна собственост и не покривайте знаци, банкомати или бензинови колонки",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_stickers_printer_prefix": "Ние използваме",
	"common::common_stickers_printer_suffix":
		", но можете да използвате всяка компания за стикери.",
	"common::common_whats_next": "Какво следва?",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::cic_calculator_heading":
		"Изчислете своята инфлационна разлика",
	"compound-inflation-calculator::cic_cta_label": "Следваща стъпка",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Вижте колко трябва да нарасне заплатата ви, за да върви в крак с инфлацията.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Изследвайте повече теми",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Вижте как Bitcoin се отнася до парите, свободата, енергията и още.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Научете как работи инфлацията",
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Индекс на потребителските цени за всички градски потребители",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 парична маса",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_hero_subtitle":
		"Безплатни, печатни Bitcoin листовки. Поставете ги на обществени места, за да помогнете на повече хора да научат за Bitcoin.",
	"flyers::flyers_hero_title": "Разпечатайте и разпространявайте Bitcoin листовки",
	"flyers::flyers_intro_header":
		"Как да разпечатате и разпространявате тези Bitcoin листовки",
	"flyers::flyers_next_get_stickers": "Разпространете думата",
	"flyers::flyers_next_get_stickers_desc":
		"Поръчайте безплатен пакет Bitcoin стикери",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Включете се и помогнете за разпространението на Bitcoin",
	"get-involved::get_involved_card_business_label": "Бизнес комплект",
	"get-involved::get_involved_card_business_source":
		"Източник: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Поръчайте безплатен Bitcoin бизнес комплект",
	"get-involved::get_involved_card_flyers_label": "Печатни листовки",
	"get-involved::get_involved_card_flyers_source":
		"Източник: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Изтеглете и разпечатайте безплатна Bitcoin листовка",
	"get-involved::get_involved_card_github_label": "Отворен код",
	"get-involved::get_involved_card_github_source": "Източник: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Допринесете за bitcoin.rocks в GitHub",
	"get-involved::get_involved_card_stickers_label": "Безплатни стикери",
	"get-involved::get_involved_card_stickers_source":
		"Източник: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Поръчайте безплатен пакет Bitcoin стикери, доставен до вратата ви",
	"get-involved::get_involved_description":
		"Нашите безплатни ресурси улесняват разпространението на Bitcoin. Стикери, листовки, бизнес комплекти и отворен код, към който всеки може да допринесе.",
	"get-involved::get_involved_flyers_content_1":
		"Листовките са един от най-лесните начини да въведете Bitcoin във вашата общност. Изтеглете безплатната, печатна Bitcoin листовка, разпечатайте колкото копия искате и ги разпространете на обществени табла, кафенета, срещи или където и да е, където хората се събират.",
	"get-involved::get_involved_flyers_content_2":
		"Всяка листовка има привличащо вниманието заглавие и QR код, който изпраща любопитните читатели към bitcoin.rocks да научат повече.",
	"get-involved::get_involved_flyers_content_3":
		"За разлика от стикерите, листовките могат да бъдат отпечатани при поискване навсякъде по света — всичко, от което се нуждаете, е принтер и няколко минути.",
	"get-involved::get_involved_flyers_header": "Разпечатайте и разпространявайте листовка",
	"get-involved::get_involved_flyers_image_alt":
		"Преглед на безплатната печатна Bitcoin листовка от bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks е безплатен проект с отворен код, лицензиран под MIT. Нашата мисия е да ускорим приемането на Bitcoin чрез образование — и не можем да го направим сами.",
	"get-involved::get_involved_github_content_2":
		"Независимо дали сте разработчик, дизайнер, писател или преводач, има начин да помогнете. Особено приветстваме сътрудници, които могат да превеждат съдържанието ни на повече езици, така че повече хора по света да могат да научават за Bitcoin на родния си език.",
	"get-involved::get_involved_github_content_3":
		"Форкнете хранилището, отворете pull request, подайте issue или просто дайте звезда на проекта, за да покажете подкрепата си. Всяко допринасяне помага на Bitcoin да достигне до повече хора.",
	"get-involved::get_involved_github_header": "Допринесете в GitHub",
	"get-involved::get_involved_header":
		"Включете се и разпространете Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Можете да помогнете да се промени това. Създадохме няколко безплатни ресурса, за да улесним разпространението на надеждата, която Bitcoin носи, на хората около вас.",
	"get-involved::get_involved_sticker_image_alt":
		"Пакет безплатни стикери с Bitcoin текст от bitcoin.rocks",
});

/* ─────────────── index (homepage) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "Спестяване",
	"index::home_card_label_art_1": "Нека сравним",
	"index::home_card_label_art_2": "Разпространете думата",
	"index::home_card_label_art_3": "Улично изкуство",
	"index::home_card_label_bank_runs": "Система с пълен резерв",
	"index::home_card_label_bonds": "Нека сравним",
	"index::home_card_label_business_1": "Каква е разликата?",
	"index::home_card_label_business_2": "Приемайте Bitcoin плащания",
	"index::home_card_label_cash": "Нека сравним",
	"index::home_card_label_cbdc": "Отворен или затворен?",
	"index::home_card_label_coding_1": "Интерактивен урок",
	"index::home_card_label_coding_2": "Изградете хардуер",
	"index::home_card_label_coding_3": "Пъзели за кодиране",
	"index::home_card_label_crowdfunding_1": "Протести EndSARS",
	"index::home_card_label_crowdfunding_2": "Неспирни пари",
	"index::home_card_label_crowdfunding_3": "Финансирайте проекта си",
	"index::home_card_label_crypto": "Каква е разликата?",
	"index::home_card_label_energy_1": "Стабилизация на мрежата",
	"index::home_card_label_energy_4": "Реакция при търсене",
	"index::home_card_label_energy_5": "Селска електрификация",
	"index::home_card_label_energy_6": "Стимули за възобновяема енергия",
	"index::home_card_label_environment_1": "Намаляване на метана",
	"index::home_card_label_environment_2": "Спасен национален парк",
	"index::home_card_label_environment_3": "Най-зелената индустрия",
	"index::home_card_label_environment_4": "Намалява изгарящия газ",
	"index::home_card_label_equality_1": "Надежда и възможност",
	"index::home_card_label_equality_2": "Пречупваща точка",
	"index::home_card_label_food_1": "Цени на храните",
	"index::home_card_label_food_2": "Ферми и почва",
	"index::home_card_label_freedom_1": "Авторитарни режими",
	"index::home_card_label_freedom_2": "Уникален инструмент",
	"index::home_card_label_get_started_1": "Основи за начинаещи",
	"index::home_card_label_get_started_2": "Вашият първи портфейл",
	"index::home_card_label_get_started_3": "Купете Bitcoin",
	"index::home_card_label_gold": "Кое е по-добро?",
	"index::home_card_label_housing_1": "Достъпно жилище",
	"index::home_card_label_human_rights_1": "Прилагане на човешки права",
	"index::home_card_label_human_rights_2": "Масово приемане",
	"index::home_card_label_human_rights_3": "Глобално въздействие",
	"index::home_card_label_inflation": "Bitcoin е по-добри пари",
	"index::home_card_label_networks_1": "Преглед на мрежата на живо",
	"index::home_card_label_networks_2": "Нека сравним",
	"index::home_card_label_payments_1": "Каква е разликата?",
	"index::home_card_label_payments_2": "Бързи и евтини плащания",
	"index::home_card_label_payments_3": "Парични преводи",
	"index::home_card_label_payments_4": "Получавайте плащания",
	"index::home_card_label_politics_1": "Политически парадокс",
	"index::home_card_label_politics_2": "Действайте",
	"index::home_card_label_property_rights_1": "Нека сравним",
	"index::home_card_label_property_rights_2": "Истинска собственост",
	"index::home_card_label_salary": "Защитете заплатата си",
	"index::home_card_label_self_custody_1": "Ръководство за Bitcoin портфейл",
	"index::home_card_label_self_custody_2": "Най-важната стъпка",
	"index::home_card_label_self_custody_3": "Суверенни пари",
	"index::home_card_label_war_1": "Сложете край на безкрайните войни",
	"index::home_card_label_war_2": "Помощ за ветераните",
	"index::home_card_label_war_3": "Бягство по време на война",
	"index::home_h1":
		"Bitcoin е по-добри пари, които изграждат по-добър свят.",
	"index::home_nav_about": "За нас",
	"index::home_nav_get_involved": "Включете се",
	"index::home_nav_learn": "Научете",
	"index::home_source_prefix": "Източник:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::lightning_grid_heading": "Популярни Lightning портфейли",
	"lightning::lightning_hardware_cta_label": "Хардуерни портфейли",
	"lightning::lightning_header_subtitle":
		"Lightning ви позволява да изпращате Bitcoin за секунди на стотинка — изберете портфейл с компромиси, подходящи за количеството Bitcoin, което планирате да харчите.",
	"lightning::lightning_s1_c4": "Вижте нашето ръководство",
	"lightning::lightning_s1_c4_end": " за повече.",
	"lightning::lightning_s1_c4_link": "Ръководство за Bitcoin хардуерни портфейли",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning портфейл",
	"lightning::sources_breez_lightning":
		"Breez — самостоятелно съхраняван Lightning портфейл",
	"lightning::sources_lightning_labs":
		"Lightning Labs — документация на Lightning Network",
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — попечителски Lightning портфейл",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_f1": "Много функции и персонализация",
	"nostr/index::nostr_amethyst_f2": "Изисква отделен Bitcoin портфейл",
	"nostr/index::nostr_amethyst_f3": "100% безплатен",
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_f1":
		"Познат интерфейс, подобен на Twitter",
	"nostr/index::nostr_damus_f2": "Изисква отделен Bitcoin портфейл",
	"nostr/index::nostr_damus_f3": "100% безплатен",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_download_heading":
		"Изтеглете безплатен Nostr клиент",
	"nostr/index::nostr_download_intro":
		"Nostr клиентите са безплатни приложения, които ви позволяват да четете и публикувате съдържание в Nostr мрежата. Всички те си взаимодействат — можете да превключвате клиенти по всяко време и да запазите последователите и съдържанието си.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr е нов децентрализиран протокол за онлайн комуникация — не се управлява от никоя компания, Bitcoin плащанията (zaps) са вградени и можете да превключвате между приложения, без да губите последователите си.",
	"nostr/index::nostr_hero_title": "Какво е Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr е подобен на имейл: никой не притежава протокола, всеки може да строи приложения върху него и можете да изберете любимото си приложение. За разлика от Twitter или Facebook, няма централна компания, която може да ви цензурира, отхвърли или намали обсега.",
	"nostr/index::nostr_intro_c2":
		"По-долу е кратката версия защо Nostr има значение — след това всички безплатни Nostr клиенти, които ви трябват, за да започнете днес.",
	"nostr/index::nostr_iris_f1":
		"Супер лесен — не се изисква настройка",
	"nostr/index::nostr_iris_f2":
		"Лесен начин да опитате Nostr с тестов акаунт",
	"nostr/index::nostr_iris_f3": "100% безплатен",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_learn_more_label": "Задълбочете се",
	"nostr/index::nostr_learn_more_title":
		"Научете повече за Nostr на nostr.how",
	"nostr/index::nostr_page_description":
		"Nostr е нов децентрализиран протокол за онлайн комуникация — не се управлява от никоя компания, Bitcoin плащанията (zaps) са вградени и можете да превключвате между клиенти, без да губите последователите си.",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android и уеб",
	"nostr/index::nostr_platform_web": "Уеб браузър",
	"nostr/index::nostr_primal_f1": "Първокласен препоръчан клиент",
	"nostr/index::nostr_primal_f2":
		"Вграден Bitcoin zap портфейл",
	"nostr/index::nostr_primal_f3": "100% безплатен",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_s1": "Протокол, не платформа",
	"nostr/index::nostr_s1_c1":
		"Nostr е нов протокол, който ви позволява да общувате онлайн — без страх от цензура, отхвърляне или намаляване на обсега.",
	"nostr/index::nostr_s1_c2":
		"Платформи като Twitter и Facebook се управляват от една компания, но никой не управлява Nostr протокола.",
	"nostr/index::nostr_s2": "Свобода на движение",
	"nostr/index::nostr_s2_c1":
		"Nostr е подобен на имейл. Никой не управлява имейл протокола и всеки може да строи клиент върху него (като Gmail, Hotmail и други).",
	"nostr/index::nostr_s2_c2":
		"Никой не управлява Nostr протокола и всеки може да строи клиент върху него (като Damus, Amethyst и други).",
	"nostr/index::nostr_s2_c3":
		"Ако не ви харесва как работи определен клиент, можете безпроблемно да преместите Nostr акаунта си към друг клиент, без да губите последователите или съдържанието си.",
	"nostr/index::nostr_s3": "Bitcoin е вграден",
	"nostr/index::nostr_s3_c1":
		"Bitcoin е вграден нативно в Nostr протокола. Ако видите съдържание, което ви харесва, можете лесно да изпратите Bitcoin zap на някого като благодарност!",
	"nostr/index::nostr_s3_c2":
		"На централизирани платформи като Twitter и Facebook централната компания печели от съдържанието ви. Но на отворени протоколи като Nostr вие печелите от съдържанието си.",
	"nostr/index::sources_damus": "Damus — Nostr клиент за iPhone",
	"nostr/index::sources_iris":
		"Iris — Nostr клиент, работещ в браузър",
	"nostr/index::sources_nostr_how":
		"nostr.how — Какво е Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — спецификация с отворен код",
	"nostr/index::sources_primal":
		"Primal — Nostr клиент с вграден Bitcoin zap портфейл",
	"nostr/index::what_is_nostr": "Какво е Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Разпечатайте свои собствени Bitcoin стикери, използвайки тези файлове със стикери на Bitcoin.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Заявката е получена 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Поръчка на едро",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Споделете в Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Какво е Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Искате повече стикери?",
	"sticker-success::sticker_success_hero_title":
		"Стикерите ви са на път 🎉",
	"sticker-success::sticker_success_share_header":
		"Споделете къде са стикерите ви",
	"sticker-success::sticker_success_tips_header":
		"Добри места за стикери",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_btn_choose_pack": "Изберете този пакет",
	"stickers::stickers_bulk_c1":
		"Искате повече от шепа стикери?",
	"stickers::stickers_bulk_c2":
		"Поръчайте на едро от същия печатарски магазин, който използваме",
	"stickers::stickers_bulk_c3":
		"— колкото повече поръчвате, толкова по-евтино става на стикер.",
	"stickers::stickers_bulk_cta": "Пазарувайте за стикери на едро",
	"stickers::stickers_bulk_header": "Поръчка на стикери на едро",
	"stickers::stickers_flyers_link_before":
		"Междувременно, разпечатайте и разпространявайте",
	"stickers::stickers_header":
		"Вземете тези безплатни стикери \"Приемаме Bitcoin\".",
	"stickers::stickers_hero_subtitle":
		"Поръчайте безплатен пакет Bitcoin стикери и ги поставете на обществени места, за да помогнете на повече хора да научат за Bitcoin.",
	"stickers::stickers_hero_title": "Безплатни Bitcoin стикери",
	"stickers::stickers_instructions_1":
		"Въведете пощенския си адрес и ще ви изпратим безплатен пакет Bitcoin стикери. Стикерите ви ще бъдат изпратени в обикновен бял плик.",
	"stickers::stickers_intro_c1":
		"Нашата мисия е да помогнем на повече хора да \"оранжизират\" Bitcoin стикери на обществени места. Всички наши стикери",
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_intro_c3": "Инфлация",
	"stickers::stickers_intro_c4":
		"Изберете пакет стикери по-долу и изберете как искате да го получите — ще изпратим безплатен пакет на всеки в САЩ или Канада, или можете да разпечатате свои собствени навсякъде по света.",
	"stickers::stickers_mail_header": "Ще ви изпратим безплатните ви стикери",
	"stickers::stickers_next_print_flyers": "Продължете да разпространявате",
	"stickers::stickers_next_print_flyers_desc":
		"Разпечатайте безплатни Bitcoin листовки за разпространение на обществени места",
	"stickers::stickers_option_bulk": "📦 Глобално — Поръчка на едро",
	"stickers::stickers_option_canada": "🇨🇦 Канада — Безплатна поща",
	"stickers::stickers_option_print": "🌍 Глобално — Ще разпечатам сам",
	"stickers::stickers_option_usa":
		"🇺🇸 САЩ — Безплатна поща",
	"stickers::stickers_print_c1":
		"Без значение къде живеете, можете да участвате като разпечатате свои собствени стикери. Кликнете върху вашия език по-долу, за да изтеглите файловете със стикери и инструкциите за печат.",
	"stickers::stickers_print_c2":
		"Не всеки стикер е достъпен на всеки език.",
	"stickers::stickers_print_header":
		"Разпечатайте свои собствени файлове със стикери",
	"stickers::stickers_request_c1":
		"Попълнете формуляра по-долу, за да поискате файлове със стикери на местния ви език. Ще ви уведомим, когато са готови.",
	"stickers::stickers_request_header": "Не виждате своя език?",
	"stickers::stickers_share_c2":
		"Последвайте ни в Nostr и",
	"stickers::stickers_share_c3":
		"търсете в който и да е Nostr клиент.",
	"stickers::stickers_signs_pack_description":
		"Предупредителни, опасни и внимаващи табели с Bitcoin съобщения — проектирани да привличат вниманието и да карат хората да спрат и да прочетат.",
	"stickers::stickers_step_1_description":
		"Всеки пакет има различен набор от Bitcoin стикери с QR кодове, които научават хората за Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "Стъпка 1",
	"stickers::stickers_step_1_header":
		"Изберете своя пакет стикери",
	"stickers::stickers_step_2_description":
		"Ще изпратим безплатен пакет по пощата до адреси в САЩ и Канада. Можете да разпечатате свои собствени или да поръчате на едро навсякъде по света.",
	"stickers::stickers_step_2_eyebrow": "Стъпка 2",
	"stickers::stickers_step_2_header":
		"Как бихте искали да получите стикерите си?",
	"stickers::stickers_text_pack_description":
		"Смес от Bitcoin слогани и фрази, проектирани да предизвикат любопитство на обществени места.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Изберете своя портфейл",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin портфейл със самостоятелно съхранение",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin хардуерен портфейл",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 хардуерен портфейл",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q хардуерен портфейл",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — рецензии на Bitcoin метални сидове",
	"wallets::sources_passport":
		"Foundation Devices — Passport хардуерен портфейл",
	"wallets::sources_seedsigner":
		"SeedSigner — отворен код, DIY Bitcoin устройство за подписване",
	"wallets::wallets_grid_heading": "Популярни Bitcoin портфейли",
	"wallets::wallets_header_subtitle":
		"Ръководство стъпка по стъпка за избор на портфейл, защита на ключовете ви и поемане на пълен контрол над вашия Bitcoin.",
	"wallets::wallets_lightning_cta_label": "Lightning мрежа",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missing = [];

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
			missing.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (bg): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing.slice(0, 30)) console.log("  -", k);
		if (missing.length > 30)
			console.log(`  ...and ${missing.length - 30} more`);
		process.exitCode = 1;
	}
}

main();
