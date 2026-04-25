#!/usr/bin/env node
/**
 * uz manifest refresh — part 2 of "rest" translations.
 *
 * Covers: stickers, business/why, get-involved, buy, bitcoin-vs-*,
 * business/maps, business/stickers, business/index, wallets,
 * business/sticker-success, business/maps-success, sticker-success,
 * flyers, business/sticker-language-success,
 * business/sticker-files/english/index, business/faq,
 * sticker-files/index, sticker-language-success.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.join(
	__dirname,
	"..",
	"i18n-audit",
	"reports",
	"uz.json",
);
const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));

const TRANSLATIONS = {
	// ----- stickers -----
	"stickers:stickers_intro_c2": "Bitcoin",
	"stickers:stickers_flyers_link_before":
		"Shu vaqtning oʻzida oʻzingizning",
	"stickers:stickers_instructions_1":
		"Pochta manzilingizni kiriting, biz sizga bepul Bitcoin stiker toʻplamini yuboramiz. Stikerlaringiz oddiy oq konvertda joʻnatiladi.",
	"stickers:stickers_btn_choose_pack": "Bu toʻplamni tanlang",
	"stickers:stickers_bulk_c1": "Bir necha stikerdan koʻproq xohlaysizmi?",
	"stickers:stickers_bulk_c2":
		"Biz foydalanadigan bosmaxonadan ulgurji buyurtma bering",
	"stickers:stickers_bulk_c3":
		"— qancha koʻp sotib olsangiz, har bir stiker shuncha arzon boʻladi.",
	"stickers:stickers_bulk_cta": "Stikerlarni ulgurji sotib olish",
	"stickers:stickers_bulk_header": "Stikerlarni ulgurji buyurtma berish",
	"stickers:stickers_hero_subtitle":
		"Bepul Bitcoin stiker toʻplamiga buyurtma bering va koʻproq odamlarning Bitcoin haqida bilib olishiga yordam berish uchun ularni jamoat joylariga osib qoʻying.",
	"stickers:stickers_hero_title": "Bepul Bitcoin stikerlari",
	"stickers:stickers_intro_c1":
		"Bizning vazifamiz — Bitcoin stikerlarini jamoat joylariga osib qoʻyish orqali koʻproq odamlarni Bitcoin tomon qaratishingizga yordam berish. Barcha stikerlarimizda taʼlim sahifalariga olib boruvchi QR kodlar bor:",
	"stickers:stickers_intro_c3": "inflyatsiya",
	"stickers:stickers_intro_c4":
		"Quyida stiker toʻplamini tanlang va ularni qanday olishni belgilang — biz AQSh yoki Kanadadagi har qanday manzilga bepul toʻplam yuboramiz, yoki dunyoning istalgan joyida oʻzingiz chop etishingiz mumkin.",
	"stickers:stickers_mail_header": "Bepul stikerlaringizni yuboramiz",
	"stickers:stickers_next_print_flyers": "Tarqatishda davom eting",
	"stickers:stickers_next_print_flyers_desc":
		"Jamoat joylariga osish uchun bepul Bitcoin varaqalarini chop eting",
	"stickers:stickers_option_bulk": "📦 Global — Ulgurji buyurtma",
	"stickers:stickers_option_canada": "🇨🇦 Kanada — Pochta orqali bepul",
	"stickers:stickers_option_print": "🌍 Global — Oʻzim chop etaman",
	"stickers:stickers_option_usa": "🇺🇸 AQSh — Pochta orqali bepul",
	"stickers:stickers_print_c1":
		"Qayerda yashashingizdan qatʼi nazar oʻzingizning stikerlaringizni chop etib ishtirok eta olasiz. Stiker fayllari va chop etish koʻrsatmalarini yuklab olish uchun quyida tilingizni bosing.",
	"stickers:stickers_print_c2":
		"Har bir stiker har bir tilda mavjud emas.",
	"stickers:stickers_print_header":
		"Oʻzingizning stiker fayllaringizni chop eting",
	"stickers:stickers_request_c1":
		"Mahalliy tilingizdagi stiker fayllarini soʻrash uchun quyidagi shaklni toʻldiring. Tayyor boʻlgach sizga xabar beramiz.",
	"stickers:stickers_request_header": "Tilingizni koʻrmayapsizmi?",
	"stickers:stickers_share_c2": "Har qanday Nostr klientida",
	"stickers:stickers_share_c3":
		"qidiruvi orqali bizni Nostrda kuzatib boring.",
	"stickers:stickers_signs_pack_description":
		"Bitcoin xabarlari bilan ogohlantiruvchi, xavf-xatar va ehtiyotkorlik uslubidagi belgilar — diqqatni jalb qilish va odamlarni toʻxtab oʻqishga undash uchun moʻljallangan.",
	"stickers:stickers_step_1_description":
		"Har bir toʻplamda odamlarga Bitcoin haqida tushuntiruvchi QR kodli turli xil Bitcoin stikerlari bor.",
	"stickers:stickers_step_1_eyebrow": "1-QADAM",
	"stickers:stickers_step_1_header": "Stiker toʻplamingizni tanlang",
	"stickers:stickers_step_2_description":
		"AQSh va Kanadadagi manzillarga bepul toʻplam yuboramiz. Dunyoning boshqa qismlarida oʻzingiz chop etishingiz yoki ulgurji buyurtma berishingiz mumkin.",
	"stickers:stickers_step_2_eyebrow": "2-QADAM",
	"stickers:stickers_step_2_header":
		"Stikerlaringizni qanday olishni xohlaysiz?",
	"stickers:stickers_text_pack_description":
		"Jamoat joylarida qiziqish uygʻotish uchun moʻljallangan Bitcoin shiorlari va qisqa iboralarning aralashmasi.",

	// ----- business/why -----
	"business/why:learn_why_bitcoin_is_good_for_business":
		"Bu yerda Bitcoin qabul qilinadi",
	"business/why:why_good_for_you": "Bitcoin nega siz uchun ham ajoyib",
	"business/why:why_learn_more_lowercase": "Batafsil bilib oling →",
	"business/why:why_s1_c1":
		"Inflyatsiya yoʻqdan koʻproq pul bosilganda yoki yaratilganda yuzaga keladi. Bu cho‘ntakingizdagi pulning vaqt oʻtgani sayin qadrsizlanishiga olib keladi — va shuning uchun narxlar yildan-yilga oshib boradi.",
	"business/why:why_s1_c2":
		"Bitcoinning 21 million tangadan iborat qatʼiy taklifi bor. Hech qanday hukumat, bank yoki kompaniya undan koʻproqini bosa olmaydi. Bitcoindagi jamgʻarmangiz vaqt oʻtishi bilan jimgina qadrini yoʻqotmasdan saqlab qoladi.",
	"business/why:why_s2_c1":
		"Soʻnggi yillarda bir qator AQSh banklari bank hujumlari tufayli qulab tushdi. Juda koʻp mijozlar bir vaqtning oʻzida pul yechib olishga uringanida banklarda hammaga toʻlash uchun naqd pul yetishmadi.",
	"business/why:why_s2_c2":
		"Banklar pulingizni shunchaki saqlash oʻrniga uning katta qismini qarzga beradi va investitsiya qiladi. Agar bu investitsiyalar muvaffaqiyatsiz boʻlsa — yoki depozitorlar ishonchini yoʻqotsa — bank qulashi mumkin va depozitlaringiz muzlatilishi yoki yoʻqolishi mumkin.",
	"business/why:why_s2_c3":
		"Bitcoin bilan pulingizni toʻgʻridan-toʻgʻri oʻz hamyoningizda saqlay olasiz. Bank yoʻq. Vositachi yoʻq. Bank hujumi yoʻq.",
	"business/why:why_s3_c1":
		"Kredit kartalari, PayPal yoki anʼanaviy bank hisoblaridan farqli oʻlaroq, Bitcoin foydalanish uchun hech kimning ruxsatini talab qilmaydi.",
	"business/why:why_s3_c2":
		"Hech kim hisobingizni muzlata olmaydi, toʻlovni toʻsa olmaydi yoki sizni tarmoqdan uza olmaydi. Bu — tarixda senzura yoki musodaradan qoʻrqmasdan erkin foydalanish mumkin boʻlgan birinchi moliyaviy tizim.",
	"business/why:why_s4_c1":
		"Bitcoin koʻpincha notoʻgʻri tushuniladi, lekin u dunyoda jimgina koʻp yaxshi ishlarni qilib bormoqda.",
	"business/why:why_s4_c2":
		"U inson huquqlari faollarining ozodlik uchun kurashishiga yordam berdi, axlatxonalar va neft konlaridan global metan chiqindilarini kamaytirdi, elektr tarmoqlarini barqarorlashtirdi va milliy bogʻlar kabi jamoat manfaatlarini moliyalashtirdi.",
	"business/why:why_biz_s1": "Pastroq komissiya, biznes uchun koʻproq foyda",
	"business/why:why_biz_s1_c1":
		"Bitcoin toʻlovlari har bir savdodan 2–3% oladigan banklar va kredit karta kompaniyalarini chetlab oʻtadi. Biznes siz toʻlagan summadan koʻproqini saqlab qoladi — bu odatda siz uchun yaxshiroq narx va yaxshiroq xizmat demakdir.",
	"business/why:why_biz_s2": "Bir zumda hisob-kitob, qaytarib olishlar yoʻq",
	"business/why:why_biz_s2_c1":
		"Bitcoin toʻlovlari bir necha soniyada hamyoningizdan toʻgʻridan-toʻgʻri biznesga oʻtadi. Mablagʻ chiqarilishini bank kunlab kutib turish kerak emas va qimmat qaytarib olish nizolari yoʻq — biznes firibgarlikka qarshi kurash oʻrniga mijozlarga xizmat koʻrsatishga eʼtibor qaratishi mumkin.",
	"business/why:why_biz_s3": "Qabul qilish bepul, hammaga ochiq",
	"business/why:why_biz_s3_c1":
		"Biznes uchun Bitcoinni qabul qilish boʻyicha shartnomalar, oylik toʻlovlar yoki sozlash xarajatlari yoʻq. Va dunyodagi millionlab Bitcoin foydalanuvchilari uni qabul qiladigan savdogarlarni faol qidirishadi — bu biznesga yangi mijozlarga bepul koʻrinish imkonini beradi.",
	"business/why:why_business_cta_intro":
		"Biznes yuritasizmi va Bitcoinni qabul qilishni boshlamoqchimisiz?",
	"business/why:why_business_cta_link": "Qanday ishlashini koʻring →",
	"business/why:why_for_business":
		"Bitcoin nega bu biznes uchun ajoyib",
	"business/why:why_for_business_intro":
		"Bitcoinni qabul qilish biznesga har bir savdodan koʻproqini saqlab qolish, qaytarib olishlarsiz bir zumda toʻlov olish va Bitcoin foydalanuvchilarining global auditoriyasiga yetib borish imkonini beradi — barchasi nol shartnoma va nol oylik toʻlov bilan.",
	"business/why:why_good_for_you_intro":
		"Bitcoin faqat kassa qutisida foydali emas — bu jamgʻarmangizni, shaxsiy hayotingizni va tranzaksiya qilish erkinligingizni himoya qiladigan yaxshiroq pul shakli. Mana qisqa sharh.",
	"business/why:why_hero_subtitle":
		"Siz hozirgina ‘Bu yerda Bitcoin qabul qilinadi’ stikerini skan qildingiz. Mana nega bu yaxshi xabar — bu biznes uchun ham, siz uchun ham.",
	"business/why:why_intro_c1":
		"Siz turgan biznes Bitcoinni qabul qiladi — banklar yoki vositachilar foiz olmasdan, dunyoning istalgan joyida har kim foydalana oladigan zamonaviy, ochiq manbali toʻlov tarmogʻi.",
	"business/why:why_intro_c2":
		"Quyida Bitcoinni qabul qilish bu biznes uchun nega yaxshi ekanligining qisqa versiyasi va nega Bitcoindan foydalanish siz uchun mijoz sifatida foydali ekanligi keltirilgan.",
	"business/why:why_next_business_label": "BITCOINNI QABUL QILING",
	"business/why:why_next_business_title":
		"Biznesingizda Bitcoinni qabul qiling",
	"business/why:why_next_buy_label": "BITCOIN SOTIB OLING",
	"business/why:why_next_buy_title": "Birinchi Bitcoiningizni sotib oling",
	"business/why:why_next_learn_label": "KOʻPROQ BILIB OLING",
	"business/why:why_next_learn_title": "Bitcoin haqida koʻproq bilib oling",
	"business/why:why_next_wallet_label": "HAMYON OLING",
	"business/why:why_next_wallet_title": "Oʻz Bitcoin hamyoningizni oling",
	"business/why:why_whats_next_heading": "Endi qayerga?",
	"business/why:why_whats_next_intro":
		"Agar bu Bitcoin stikeri bilan birinchi uchrashuvingiz boʻlsa, bu yerdan eng foydali joylar.",

	// ----- get-involved -----
	"get-involved:get_involved_and_help_spread_bitcoin":
		"Ishtirok eting va Bitcoin tarqating",
	"get-involved:get_involved_business_content_1":
		"Bitcoinning aylanma iqtisodiyotini qurishga yordam bermoqchimisiz? Eng oson yoʻl — mahalliy bizneslarga Bitcoin toʻlovlarini qabul qilishni boshlashga yordam berish.",
	"get-involved:get_involved_business_content_2":
		"Buni qoʻllab-quvvatlashga tayyor biznesni bilasizmi? Egasini bizning",
	"get-involved:get_involved_business_content_3": "Bitcoin biznes sahifamizga yuboring.",
	"get-involved:get_involved_description":
		"Bepul resurslarimiz Bitcoin qabul qilinishini tarqatishni osonlashtiradi. Stikerlar, varaqalar, bizneslar uchun ‘Bu yerda Bitcoin qabul qilinadi’ stikerlari va har kim hissa qoʻshishi mumkin boʻlgan ochiq manbali kod bazasi.",
	"get-involved:get_involved_header": "Ishtirok eting va Bitcoin tarqating.",
	"get-involved:get_involved_intro_5":
		"Siz buni oʻzgartirishga yordam bera olasiz. Bitcoin keltirgan umidni atrofingizdagi odamlarga tarqatishni osonlashtirish uchun bir necha bepul resurs yaratdik.",
	"get-involved:get_involved_biz_stickers_note":
		"Allaqachon Bitcoinni qabul qilyapsizmi? Mijozlarga bepul ‘Bu yerda Bitcoin qabul qilinadi’ stikerlarimiz orqali xabar bering. Biz AQSh yoki Kanadadagi har qanday manzilga toʻplam yuboramiz yoki dunyoning istalgan joyida oʻzingiz chop etishingiz mumkin.",
	"get-involved:get_involved_card_biz_stickers_label":
		"‘Qabul qilinadi’ stikerlari",
	"get-involved:get_involved_card_biz_stickers_source":
		"Manba: bitcoin.rocks →",
	"get-involved:get_involved_card_biz_stickers_title":
		"Biznesingiz uchun bepul ‘Bu yerda Bitcoin qabul qilinadi’ stikerlari",
	"get-involved:get_involved_card_business_label": "Biznes uchun Bitcoin",
	"get-involved:get_involved_card_business_source":
		"Manba: bitcoin.rocks →",
	"get-involved:get_involved_card_business_title":
		"Biznes Bitcoin toʻlovlarini qabul qilishni boshlashi uchun zarur boʻlgan hamma narsa",
	"get-involved:get_involved_card_flyers_label":
		"Chop etiladigan varaqalar",
	"get-involved:get_involved_card_flyers_source":
		"Manba: bitcoin.rocks →",
	"get-involved:get_involved_card_flyers_title":
		"Bepul Bitcoin varaqasini yuklab oling va chop eting",
	"get-involved:get_involved_card_github_label": "Ochiq manba",
	"get-involved:get_involved_card_github_source": "Manba: GitHub →",
	"get-involved:get_involved_card_github_title":
		"GitHub-da bitcoin.rocks-ga hissa qoʻshing",
	"get-involved:get_involved_card_stickers_label": "Bepul stikerlar",
	"get-involved:get_involved_card_stickers_source":
		"Manba: bitcoin.rocks →",
	"get-involved:get_involved_card_stickers_title":
		"Eshigingizgacha bepul Bitcoin stiker toʻplamini soʻrang",
	"get-involved:get_involved_flyers_content_1":
		"Varaqalar — hamjamiyatingizga Bitcoinni tanishtirishning eng oson yoʻllaridan biri. Bepul chop etiladigan Bitcoin varaqasini yuklab oling, kerakli miqdorda nusxa chop eting va ularni hamjamiyat doskalarida, kafelarda, uchrashuvlarda yoki odamlar yigʻiladigan boshqa joylarda osib qoʻying.",
	"get-involved:get_involved_flyers_content_2":
		"Har bir varaqada qiziqarli sarlavha va qiziquvchan oʻquvchilarni bitcoin.rocks-ga koʻproq oʻrganish uchun yoʻnaltiruvchi QR kod bor.",
	"get-involved:get_involved_flyers_content_3":
		"Stikerlardan farqli oʻlaroq, varaqalarni dunyoning istalgan joyidan talab boʻyicha chop etish mumkin — sizga faqat printer va bir necha daqiqa kerak.",
	"get-involved:get_involved_flyers_header":
		"Varaqani chop eting va osib qoʻying",
	"get-involved:get_involved_flyers_image_alt":
		"bitcoin.rocks-dan bepul chop etiladigan Bitcoin varaqasining koʻrinishi",
	"get-involved:get_involved_github_content_1":
		"bitcoin.rocks — MIT litsenziyasi ostida tarqatiladigan bepul, ochiq manbali loyiha. Bizning vazifamiz — taʼlim orqali Bitcoin qabul qilinishini tezlashtirish — va bu ishni yolgʻiz qila olmaymiz.",
	"get-involved:get_involved_github_content_2":
		"Dasturchi, dizayner, yozuvchi yoki tarjimon boʻlsangiz ham, yordam berishning yoʻli bor. Ayniqsa, kontentimizni koʻproq tillarga tarjima qila oladigan hissadorlarga minnatdormiz, shunda dunyo boʻylab koʻproq odamlar Bitcoin haqida ona tilida bilib olishlari mumkin.",
	"get-involved:get_involved_github_content_3":
		"Repozitoriyni vilka qiling, pull request oching, masala qoʻzgʻating yoki shunchaki yulduz qoʻyib qoʻllab-quvvatlashingizni bildiring. Har bir hissa Bitcoinning koʻproq odamlarga yetib borishiga yordam beradi.",
	"get-involved:get_involved_github_header": "GitHub-da hissa qoʻshing",
	"get-involved:get_involved_sticker_image_alt":
		"bitcoin.rocks-dan bepul Bitcoin matn stiker toʻplami",

	// ----- buy -----
	"buy:buy_bitcoin_guide": "Bitcoinni qanday sotib olish kerak",
	"buy:buy_step_1_header": "Mamlakatingizni tanlang",
	"buy:buy_step_2_header": "Toʻlov usulini tanlang",
	"buy:buy_step_3_header": "Sotib olish variantlaringiz",
	"buy:buy_step_4_header": "Bitcoiningizni xavfsiz saqlang",
	"buy:buy_header_subtitle":
		"Birinchi Bitcoiningizni sotib olish uchun oddiy, bosqichma-bosqich yoʻriqnoma.",
	"buy:buy_howto_name": "Bitcoinni qanday sotib olish kerak",
	"buy:buy_meta_description":
		"Bosqichma-bosqich yoʻriqnomamiz bilan Bitcoinni xavfsiz sotib olishni oʻrganing. Sizga eng yaxshi Bitcoin sotib olish variantlarini topish uchun mamlakatingiz va toʻlov usulingizni tanlang.",
	"buy:buy_step_1_eyebrow": "1-qadam",
	"buy:buy_step_2_eyebrow": "2-qadam",
	"buy:buy_step_3_eyebrow": "3-qadam",
	"buy:buy_step_4_eyebrow": "4-qadam",
	"buy:buy_storage_cta_label": "Keyingi qadam",
	"buy:sources_bisq":
		"Bisq — markazsizlashtirilgan tengdosh-dan-tengdoshga Bitcoin birzhasi",
	"buy:sources_coinatmradar":
		"Coin ATM Radar — butun dunyo Bitcoin bankomatlari katalogi",
	"buy:sources_kraken": "Kraken — tajribali Bitcoin birzhasi",
	"buy:sources_relai":
		"Relai — Shveytsariyaning faqat Bitcoinga moʻljallangan oʻz nazoratidagi ilovasi",
	"buy:sources_river":
		"River — faqat Bitcoinga ixtisoslashgan sotib olish, maydanlash va saqlash",
	"buy:sources_strike_lightning":
		"Strike — Lightning Network qoʻllab-quvvatlash bilan Bitcoin sotib oling",
	"buy:sources_swan":
		"Swan Bitcoin — faqat Bitcoinga ixtisoslashgan dollar xarajat oʻrtachalashtirish",

	// ----- bitcoin-vs-banks -----
	"bitcoin-vs-banks:point_1_summary_1":
		"Internet aloqasi bor har kim Bitcoindan foydalanishi mumkin — u",
	"bitcoin-vs-banks:point_1_summary_2": "ruxsatsizdir.",
	"bitcoin-vs-banks:point_1_summary_3":
		"Banklar siyosat yoki davlat qoidalariga asoslanib hisoblarni ochishni rad etishi, muzlatishi yoki yopishi mumkin.",
	"bitcoin-vs-banks:point_2_summary_1":
		"Bitcoin tarmogʻi 24/7/365 hech qanday texnik xizmat oynalari yoki bayramlarsiz ishlaydi. Banklarning cheklangan ish soatlari, dam olish kunlarisiz tanaffuslari va uzilish oynalari bor.",
	"bitcoin-vs-banks:point_3_summary_1":
		"Har bir Bitcoin tranzaksiyasi har kim auditdan oʻtkaza oladigan ommaviy blokcheynda. Banklar mijozlar mustaqil tasdiqlay olmaydigan xususiy hisob daftarlarini yuritadi.",
	"bitcoin-vs-banks:point_4_summary_1":
		"Bitcoin bilan oʻzingizning shaxsiy kalitlaringizni saqlaysiz — bizning oddiy",
	"bitcoin-vs-banks:point_4_summary_2": "Bitcoin hamyonlari",
	"bitcoin-vs-banks:point_4_summary_3":
		"yoʻriqnomamizni koʻring. Banklar pulingizni ushlab turadi va istalgan vaqt muzlatishi, cheklashi yoki taqiqlashi mumkin.",
	"bitcoin-vs-banks:point_5_summary_1":
		"Bitcoin komissiyalari shaffof va bashorat qilinadigan. Banklar vaqt oʻtishi bilan yashirin hisob, hisob oshish, oʻtkazma va bankomat toʻlovlarini qoʻshib boradi.",
	"bitcoin-vs-banks:point_6_summary_1":
		"Bitcoin sizga faqat ega boʻlgan pulingizni sarflashga ruxsat beradi. Banklar hisob oshishlariga ruxsat beradi va keyin bu uchun zanjirli jarima toʻlovlarini oladi.",
	"bitcoin-vs-banks:point_7_summary_1":
		"Bir marta tarmoqqa yuborilgan Bitcoin tranzaksiyalarini toʻxtatib yoki bekor qilib boʻlmaydi. Banklar tranzaksiyalarni siyosat yoki davlat buyrugʻiga asoslanib toʻsishi, muzlatishi yoki bekor qilishi mumkin.",
	'bitcoin-vs-banks:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">Banklar</span> oʻrtasidagi farq',

	// ----- bitcoin-vs-bonds -----
	"bitcoin-vs-bonds:point_1_summary_1":
		"Obligatsiyalar faqat nominal jihatdan ‘xavfsiz’ — inflyatsiya, foiz stavkasi harakatlari va defolt xavfi haqiqiy daromadni yeydi.",
	"bitcoin-vs-bonds:point_1_summary_2":
		"Bitcoinning shaffof oʻzgaruvchanligi bor, lekin yashirin kontragent xavfi yoʻq.",
	"bitcoin-vs-bonds:point_2_summary_1": "Qachonki",
	"bitcoin-vs-bonds:point_2_summary_2": "inflyatsiya",
	"bitcoin-vs-bonds:point_2_summary_3":
		"obligatsiya daromadidan oshib ketsa, obligatsiya egalari har yili haqiqiy xarid qobiliyatini yoʻqotadi. Bitcoinning 21 millionli chegarasini inflyatsiya bilan qadrsizlantirib boʻlmaydi.",
	"bitcoin-vs-bonds:point_3_summary_1":
		"Obligatsiya bozorlari inqirozlarda muzlashi mumkin — Silicon Valley Bank qisman qiymatini yoʻqotgan obligatsiyalarga qolib ketgani uchun qulagan. Bilib oling:",
	"bitcoin-vs-bonds:point_3_summary_2": "bank hujumlari",
	"bitcoin-vs-bonds:point_3_summary_3":
		"qanday yuzaga kelishi va nega Bitcoin ulardan qutuladi. Bitcoin global miqyosda 24/7 savdo qilinadi va likvidlik inqirozisiz.",
	"bitcoin-vs-bonds:point_4_summary_1":
		"Davlat obligatsiyalari kimoshdi savdolari xaridorlar yetishmaganda muvaffaqiyatsiz boʻlishi mumkin — koʻring:",
	"bitcoin-vs-bonds:point_4_summary_2":
		"2022-yilgi zaif kimoshdi savdosi.",
	"bitcoin-vs-bonds:point_4_summary_3":
		"Bitcoin narxi muvaffaqiyatsizlikka uchrashi mumkin boʻlgan markaziy kimoshdi savdosisiz, ochiq bozorlarda uzluksiz aniqlanadi.",
	"bitcoin-vs-bonds:point_5_summary_1":
		"Obligatsiya daromadlari sotib olish vaqtida belgilanadi. Hatto iqtisodiyot gullab-yashnasa yoki valyuta qulasa ham daromadingiz oʻzgarmaydi.",
	"bitcoin-vs-bonds:point_5_summary_2":
		"Bitcoinning qabul qilinishi oshib borishi va qatʼiy taklif talabga uchrashi natijasida sezilarli qiymat oʻsishi imkoniyati bor.",
	"bitcoin-vs-bonds:point_6_summary_1":
		"Koʻp obligatsiyalar banklar yoki brokerlar orqali ushlab turiladi va kontragent xavfini qoʻshadi. Bitcoinni esa",
	"bitcoin-vs-bonds:point_6_summary_2": "hamyon",
	"bitcoin-vs-bonds:point_6_summary_3":
		" bilan oʻz nazoratiga olish mumkin — bu xavfni butunlay yoʻq qiladi.",
	"bitcoin-vs-bonds:point_7_summary_1":
		"Obligatsiyalar butunlay hukumatlarning toʻlov qaytarishiga bogʻliq. Hukumat defolt qilsa yoki qarzini inflyatsiya bilan toʻlasa, obligatsiya egalari yutqazadi.",
	"bitcoin-vs-bonds:point_7_summary_2":
		"Bitcoin har qanday hukumat yoki siyosiy hokimiyatdan mustaqil ishlaydi.",
	'bitcoin-vs-bonds:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">Obligatsiyalar</span> oʻrtasidagi farq',

	// ----- bitcoin-vs-cash -----
	"bitcoin-vs-cash:point_1_summary_1":
		"Bitcoin internet orqali bir necha daqiqada istalgan joyga oʻtadi. Naqd pul jismoniy mavjudlik yoki ishonchli kuryer talab qiladi — 20 USDlik banknotni email orqali yubora olmaysiz.",
	"bitcoin-vs-cash:point_2_summary_1":
		"Bitcoin hamma joyda bir xil ishlaydi. Naqd pul geografiya, valyuta kursi va mahalliy qabul qilish bilan cheklangan.",
	"bitcoin-vs-cash:point_3_summary_1":
		"Hukumatlar naqd pulni bir kechada bekor qila oladi — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Hindiston</a> buni 2016-yilda qildi. Demonetizatsiyasiz ham naqd pul",
	"bitcoin-vs-cash:point_3_summary_2": "inflyatsiya bilan qadrsizlanadi.",
	"bitcoin-vs-cash:point_3_summary_3":
		"Bitcoinni hech qanday hukumat yoki hokimiyat bekor qila olmaydi.",
	"bitcoin-vs-cash:point_4_summary_1":
		"Naqd pulni soxta qilish mumkin, baʼzan juda ishonarli tarzda. Bitcoin esa soxta qilishni matematik jihatdan imkonsiz qiladigan kriptografiyadan foydalanadi.",
	"bitcoin-vs-cash:point_5_summary_1":
		"Bitcoinning markaziy hokimiyati yoʻq. Naqd pulni koʻproq bosa, dizaynini oʻzgartira yoki banknotlarni xohishga koʻra bekor qila oladigan hukumat chiqaradi.",
	"bitcoin-vs-cash:point_6_summary_1":
		"Naqd pul oʻgʻrilik, yongʻin, yoʻqotish va musodaraga himoyasiz. Bitcoinni esa",
	"bitcoin-vs-cash:point_6_summary_2": "oʻz nazoratiga olib",
	"bitcoin-vs-cash:point_6_summary_3":
		"telefon yoki apparat qurilmasida xavfsiz saqlash mumkin.",
	"bitcoin-vs-cash:point_7_summary_1":
		"Bitcoin 100 million satoshiga boʻlinadi va har qanday hajmdagi mikrotoʻlovni amalga oshirishga imkon beradi. Naqd pulning minimal birliklari bor — bir tiyinni boʻla olmaysiz.",
	'bitcoin-vs-cash:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">Naqd pul</span> oʻrtasidagi farq',

	// ----- bitcoin-vs-cbdc -----
	"bitcoin-vs-cbdc:point_10_summary_1":
		"Bitcoin — hozirga qadar qurilgan eng xavfsiz hisoblash tarmogʻi va hech qachon xakerlik hujumiga uchramagan. CBDClar tarixda son-sanoqsiz marta xakerlik hujumiga uchragan banklar va hukumatlarga tayanadi.",
	"bitcoin-vs-cbdc:point_1_summary_1":
		"Bitcoin bilan tranzaksiya qilishingizga hech kim toʻsqinlik qila olmaydi. CBDClar shunday loyihalashtirilganki, hukumatlar va markaziy banklar har bir toʻlovni nazorat qila oladi, shaxsiy hayot va erkinligingizni cheklaydi.",
	"bitcoin-vs-cbdc:point_2_summary_1":
		"Bitcoinning muddati hech qachon tugamaydi va oylik toʻlovi yoʻq. CBDClarning muddatini tugashi uchun dasturlash mumkin, bu kelajak uchun jamgʻarish imkoniyatidan mahrum qiladi.",
	"bitcoin-vs-cbdc:point_3_summary_1":
		"Bitcoinning qatʼiy 21 million BTC chegarasi bor. CBDClarda taklif chegarasi yoʻq, bu hukumatlarga pul taklifini xohlaganicha kengaytirish imkonini beradi — natijada",
	"bitcoin-vs-cbdc:point_3_summary_2": "inflyatsiya yuzaga keladi.",
	"bitcoin-vs-cbdc:point_4_summary_1":
		"Bitcoin manzillari haqiqiy shaxsingizga bogʻlanmagan. CBDClar esa bevosita davlat IDsi bilan bogʻlangan boʻlib, ommaviy moliyaviy nazorat va senzurani imkon qiladi.",
	"bitcoin-vs-cbdc:point_5_summary_1":
		"Bitcoin qoidalari oʻn minglab mustaqil tugun tomonidan tasdiqlanadi. CBDClar hukumat va markaziy bank qoʻlida markazlashgan, ular tarmoq ustidan toʻliq nazoratga ega.",
	"bitcoin-vs-cbdc:point_6_summary_1":
		"Har kim tarmoq qoidalarini tasdiqlash uchun Bitcoin tugunini ishga tushira oladi. CBDClar foydalanuvchilarga tugun ishlatishga ruxsat bermaydi — markaziy hokimiyatga ishonishingizga toʻgʻri keladi.",
	"bitcoin-vs-cbdc:point_7_summary_1":
		"Oʻz nazoratidagi Bitcoinni hech kim muzlata olmaydi. CBDClar hukumat va markaziy banklar hisoblarni bir zumda muzlatib qoʻyishi uchun loyihalashtirilgan.",
	"bitcoin-vs-cbdc:point_8_summary_1":
		"Bitcoin sizga uni",
	"bitcoin-vs-cbdc:point_8_summary_2": "hamyon",
	"bitcoin-vs-cbdc:point_8_summary_3":
		"bilan oʻz nazoratiga olganingizda pulingiz ustidan toʻliq nazorat beradi. CBDClar pulingizni siz uchun ushlab turuvchi banklar yoki hukumatlarga ishonishni talab qiladi.",
	"bitcoin-vs-cbdc:point_9_summary_1":
		"Bitcoinning pul siyosati kodda belgilangan va oʻzgartirib boʻlmaydi. CBDClarni siyosatchilar xohlaganicha qayta dasturlashi mumkin va",
	"bitcoin-vs-cbdc:point_9_summary_2": "inflyatsiyani",
	"bitcoin-vs-cbdc:point_9_summary_3":
		" — juda koʻp pul bosilganda — keltirib chiqaradi.",
	'bitcoin-vs-cbdc:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">CBDClar</span> oʻrtasidagi farq',

	// ----- bitcoin-vs-crypto -----
	"bitcoin-vs-crypto:point_1_summary_1":
		"Bitcoin protokoli 2009-yildan beri tubdan oʻzgarmasdan qoldi va bashorat qilinadigan qoidalarni taʼminlaydi. Koʻpchilik kripto loyihalari protokollarini, token iqtisodiyotini doimiy oʻzgartiradi yoki yangi versiyalarga vilka qiladi.",
	"bitcoin-vs-crypto:point_2_summary_1":
		"Bitcoin butun dunyoda oʻn minglab mustaqil tugunlarga ega. Koʻpchilik kripto loyihalari bir tomonlama oʻzgartirishlar kirita oladigan jamgʻarmalar, kompaniyalar yoki kichik dasturchi jamoalari tomonidan boshqariladi.",
	"bitcoin-vs-crypto:point_3_summary_1":
		"Bitcoinning qatʼiy 21 million tangalik chegarasi bor — eng tanqis raqamli aktiv. Koʻpchilik kripto loyihalarida cheklanmagan taklif yoki egalari ulushini suyultirib boruvchi yangi tokenlar chiqarish mexanizmlari bor.",
	"bitcoin-vs-crypto:point_4_summary_1":
		"Bitcoinning bitta maqsadi bor: tengdosh-dan-tengdoshga raqamli pul. Buni har kim tushunishi va ishlatishi mumkin. Koʻpchilik kripto murakkab smart-shartnoma yoki DeFi loyihalarini oʻz ichiga oladi va xavfsiz foydalanish uchun texnik tajriba talab qiladi.",
	"bitcoin-vs-crypto:point_5_summary_1":
		"Bitcoinning Proof of Work mexanizmi 15 yildan ortiq vaqt davomida asosiy tarmoqqa muvaffaqiyatli hujumsiz ishlab kelmoqda. Koʻpchilik kripto loyihalari hali sinalmagan eksperimental konsensusdan foydalanadi.",
	"bitcoin-vs-crypto:point_6_summary_1":
		"Bitcoin — raqamli pul, qiymat saqlovchi va ayirboshlash vositasi. Koʻpchilik kripto tokenlari real qiymati noaniq spekulyativ yordamchi yoki boshqaruv tokenlaridir.",
	"bitcoin-vs-crypto:point_7_summary_1":
		"Bitcoin hujum ostida kuchayadi va har bir inqiroz, taqiq va tanqiddan omon qoldi. Koʻpchilik kripto loyihalari tartibga solish, texnik yoki bozor bosimi ostida qulab tushadi.",
	"bitcoin-vs-crypto:point_8_summary_1":
		"Bitcoinning bosh direktori, kompaniyasi va yagona muvaffaqiyatsizlik nuqtasi yoʻq. Koʻpchilik kripto loyihalari venchur kapitalga, aniq rahbariyatga yoki bitta kompaniya omon qolishiga bogʻliq.",
	'bitcoin-vs-crypto:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">Kripto</span> oʻrtasidagi farq',

	// ----- bitcoin-vs-fine-art -----
	"bitcoin-vs-fine-art:point_1_summary_1":
		"Har bir bitcoin teng va almashtirilishi mumkin. Har bir sanʼat asari noyob — turli yaratilish, tarix, holat va kelib chiqishi toʻgʻridan-toʻgʻri solishtirishni nihoyatda qiyinlashtiradi.",
	"bitcoin-vs-fine-art:point_2_summary_1":
		"Bitcoin har kimga ochiq global bozorda 24/7 savdo qilinadi. Nozik sanʻat ixtisoslashgan kimoshdi uylari, xususiy dilerlar yoki galereyalarni talab qiladi va sotish oylar davom etishi mumkin.",
	"bitcoin-vs-fine-art:point_3_summary_1":
		"Bitcoinni sotib olish yoki sotish komissiyalarda 1%dan kam, koʻpincha undan ham kam turadi. Sanʻat sotuvi xaridor mukofoti, komissiya, sugʻurta, tashish va tasdiqlash toʻlovlarida 30–40% gacha boʻladi.",
	"bitcoin-vs-fine-art:point_4_summary_1":
		"Bitcoin 100 million satoshiga boʻlinadi va har qanday hajmdagi tranzaksiyani amalga oshirish uchun mukammal. Rasmning bir qismiga yoki haykalning burchagiga kontragent xavfsiz egalik qilib boʻlmaydi.",
	"bitcoin-vs-fine-art:point_5_summary_1":
		"Bitcoin mulkchiligi va haqiqiyligini har kim blokcheynda kriptografik tasdiqlay oladi. Sanʻat tasdiqlash qimmat va sekin, soxta nusxalar oʻz ishini qilib turadi — bu sanʻat asarining qiymatini bir kechada yoʻq qilishi mumkin.",
	"bitcoin-vs-fine-art:point_6_summary_1":
		"Bitcoin toʻgʻri zaxiralanganida suv toshqini, yongʻin, zilzila va oʻgʻirlikdan omon qoladi. Nozik sanʻat har qanday jismoniy yoʻq qilish shakllariga himoyasiz va sugʻurta hammasini qoplamaydi.",
	"bitcoin-vs-fine-art:point_7_summary_1":
		"Internet aloqasi va oz miqdordagi puli bor har kim Bitcoin sotib olishi mumkin. Nozik sanʻat investitsiyasi amalda kimoshdi savdosiga kira oladigan va mutaxassis bilimi boʻlgan badavlat kolleksionerlar bilan cheklangan.",
	'bitcoin-vs-fine-art:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">Nozik sanʼat</span> oʻrtasidagi farq',

	// ----- bitcoin-vs-gold -----
	"bitcoin-vs-gold:point_1_summary_1":
		"Bitcoinni internet orqali bir zumda past komissiyalar bilan yuborish mumkin. Oltin esa mulkchilikni oʻzgartirish uchun jismoniy joʻnatilishi kerak.",
	"bitcoin-vs-gold:point_2_summary_1":
		"Bitcoin — internet orqali oʻzgartirish mumkin boʻlgan raqamli aktiv. Onlayn oltin esa raqamli qarz hujjati — siz aslida metallning oʻziga emas, qaramogʻidagi kompaniyaning vaʼdasiga egasiz.",
	"bitcoin-vs-gold:point_3_summary_1":
		"Bitcoinning qatʼiy 21 million BTC chegarasi bor. Oltin taklifi yiliga taxminan <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6%</a> oshib boradi va sizning ulushingizni kichraytiradi — fiat",
	"bitcoin-vs-gold:point_3_summary_2": "inflyatsiyasidan",
	"bitcoin-vs-gold:point_3_summary_3": "kam, lekin baribir inflyatsiya.",
	"bitcoin-vs-gold:point_4_summary_1":
		"Oltin narxi koʻtarilganda koʻproq oltin qazib olinadi va bu narxni tushiradi. Bitcoinning taklifi noelastik — narx qanchalik koʻtarilsa ham, hech qachon 21 milliondan oshmaydi.",
	"bitcoin-vs-gold:point_5_summary_1":
		"Oʻn minglab mustaqil tugun Bitcoin tarmogʻini tasdiqlaydi. Koʻp jismoniy oltin esa bir nechta yirik qaramogʻidagi omborlarda yotadi.",
	"bitcoin-vs-gold:point_6_summary_1":
		"Har kim toʻliq tugun ishga tushirib haqiqiy Bitcoinni tasdiqlay oladi — bu shunchaki ilova. Jismoniy oltinni tasdiqlash uchun uni eritib koʻrish kerak; ichida volfram boʻlishi mumkin.",
	"bitcoin-vs-gold:point_7_summary_1":
		"Bitcoin 100 million satoshiga boʻlinadi va har qanday xajmdagi xarid uchun mukammal. Oltinni esa kichik tranzaksiyalar uchun osongina boʻlib boʻlmaydi.",
	'bitcoin-vs-gold:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">Oltin</span> oʻrtasidagi farq',

	// ----- bitcoin-vs-real-estate -----
	"bitcoin-vs-real-estate:point_1_summary_1":
		"Bitcoin dunyoning istalgan joyiga bir zumda harakatlanadi. Koʻchmas mulk bitta joyga bogʻlangan va mahalliy iqtisodiy, siyosiy va tabiiy xavflarga ochiq.",
	"bitcoin-vs-real-estate:point_2_summary_1":
		"Bitcoin 100 million satoshiga boʻlinadi. Koʻchmas mulkni qisman sota olmaysiz — faqat oshxonani sotib yoki yotoqxonaning yarmini sotib olib boʻlmaydi.",
	"bitcoin-vs-real-estate:point_3_summary_1":
		"Bitcoin hech bir hukumat nazorat qila olmaydigan markazsizlashtirilgan tarmoqda ishlaydi. Koʻchmas mulk qattiq tartibga solinadi — zonalash, ijara nazorati, majburiy musodara va musodara qilish.",
	"bitcoin-vs-real-estate:point_4_summary_1":
		"Bitcoin parvarish talab qilmaydi. Koʻchmas mulk taʼmirlash, qayta qurish, sugʻurta, mulk boshqarish va ijarachilar bilan bogʻliq muammolarni talab qiladi.",
	"bitcoin-vs-real-estate:point_5_summary_1":
		"Bitcoinning davom etadigan soligʻi yoʻq — faqat sotganda kapital daromadi soligʻini toʻlaysiz. Koʻchmas mulk daromaddan qatʼi nazar yillik mulk soligʻini talab qiladi.",
	"bitcoin-vs-real-estate:point_6_summary_1":
		"Bitcoin toʻgʻri zaxiralanganida yongʻin, suv toshqini va zilziladan omon qoladi. Koʻchmas mulk har qanday ofatga himoyasiz va sugʻurta hammasini qoplamaydi.",
	"bitcoin-vs-real-estate:point_7_summary_1":
		"Har bir bitcoin teng va almashtirilishi mumkin. Har bir mulk noyob va bu narxlash hamda solishtirishni qiyinlashtiradi.",
	"bitcoin-vs-real-estate:point_8_summary_1":
		"Bitcoin internet kirish huquqiga ega har kim tomonidan global miqyosda 24/7 savdo qilinadi. Koʻchmas mulk sotuvi mahalliy xaridorlar bilan cheklangan va yopilishi uchun oylab hujjatlashtirish kerak.",
	"bitcoin-vs-real-estate:point_9_summary_1":
		"Bitcoin har kim uchun toʻgʻridan-toʻgʻri individual mulkchilikni imkon qiladi. Asosiy turar joyingizdan tashqari investitsiya sifatida koʻchmas mulk sotib olish uy-joy narxlarini oshiradi, arzonligini kamaytiradi va uy-joy inqiroziga yondoshadi.",
	'bitcoin-vs-real-estate:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">Koʻchmas mulk</span> oʻrtasidagi farq',

	// ----- bitcoin-vs-stocks -----
	"bitcoin-vs-stocks:point_1_summary_1":
		"Bitcoin — siz toʻliq egalik qiladigan toʻgʻridan-toʻgʻri aktiv. Aksiya esa kompaniyadagi ulush — uning qiymati siz nazorat qilolmaydigan rahbariyat, samaradorlik va qarorlarga bogʻliq.",
	"bitcoin-vs-stocks:point_2_summary_1":
		"Bitcoinning qatʼiy 21 million BTC chegarasi bor. Kompaniyalar istalgan vaqt yangi aksiyalar chiqarib mavjud aksionerlarni suyultirishi mumkin — fiat",
	"bitcoin-vs-stocks:point_2_summary_2": "inflyatsiyasi",
	"bitcoin-vs-stocks:point_2_summary_3":
		" naqd pulni suyultirgani kabi. Bitcoin bilan ulushingiz hech qachon kichraymaydi.",
	"bitcoin-vs-stocks:point_3_summary_1":
		"Bitcoinning bosh direktori va yagona muvaffaqiyatsizlik nuqtasi yoʻq. Aksiya esa rahbariyatga juda bogʻliq — bitta yomon qaror yoki ketish narxni qulatishi mumkin.",
	"bitcoin-vs-stocks:point_4_summary_1":
		"Bitcoin narxi ochiq global bozorlardan keladi. Aksiya baholashi P/E nisbati kabi koʻrsatkichlarga tayanadi va bu haddan tashqari narxlanganligini yashirishi mumkin.",
	"bitcoin-vs-stocks:point_5_summary_1":
		"Bitcoin butun dunyoda 24/7 savdo qilinadi. Aksiya bozorlari faqat hafta kunlari ish soatlarida ochiq.",
	"bitcoin-vs-stocks:point_6_summary_1": "Siz",
	"bitcoin-vs-stocks:point_6_summary_2": "oʻz nazoratiga olishingiz",
	"bitcoin-vs-stocks:point_6_summary_3":
		" oddiy ilova bilan, broker kerak emas. Aksiyalar broker firmalarida saqlanadi va ularning qulashi sizni kontragent xavfiga duchor qiladi.",
	"bitcoin-vs-stocks:point_7_summary_1":
		"Bitcoinning qatʼiy taklifi uni ishonchli inflyatsiya himoyasiga aylantiradi. Baʼzi aksiyalar inflyatsiyani yengadi, baʼzilari yoʻq — kafolat yoʻq.",
	'bitcoin-vs-stocks:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">Aksiyalar</span> oʻrtasidagi farq',

	// ----- bitcoin-vs-visa -----
	"bitcoin-vs-visa:point_1_summary_1":
		"Bitcoin har kim ruxsatsiz qoʻshilishi va foydalanishi mumkin boʻlgan ochiq tarmoq. Visa — moliya muassasalari nazoratidagi yopiq tizim va ular kirishni rad etishi mumkin — ayniqsa banklarga ulanmaganlarga.",
	"bitcoin-vs-visa:point_2_summary_1":
		"Bitcoin tranzaksiyalarining savdogar komissiyasi yoʻq. Visa savdogarlardan har bir tranzaksiya uchun odatda 3% atrofida oladi — biznesingiz",
	"bitcoin-vs-visa:point_2_summary_2": "Bitcoin toʻlovlarini",
	"bitcoin-vs-visa:point_2_summary_3":
		" qabul qilish orqali pul tejashi mumkin.",
	"bitcoin-vs-visa:point_3_summary_1":
		"Har bir Bitcoin tranzaksiyasi har kim auditdan oʻtkaza oladigan ommaviy blokcheynda. Visa esa yopiq, xususiy tizimda ishlaydi va mijozlar mustaqil hech narsani tekshira olmaydi.",
	"bitcoin-vs-visa:point_4_summary_1":
		"Bitcoinni hech qanday markaziy hokimiyat muzlata olmaydi. Visa istalgan vaqtda hisoblarni muzlatishi, tranzaksiyalarni toʻsishi yoki xizmatni rad etishi mumkin.",
	"bitcoin-vs-visa:point_5_summary_1":
		"Bitcoin — yakuniy hisob-kitob, faqat oʻzingizniki boʻlgan pulni sarflay olasiz. Kredit kartalari esa koʻpincha yiliga 25%dan oshib ketadigan foiz stavkalari bilan qarz keltirib chiqaradi.",
	"bitcoin-vs-visa:point_6_summary_1": "Bitcoin sizga",
	"bitcoin-vs-visa:point_6_summary_2": "oʻz nazoratiga olish",
	"bitcoin-vs-visa:point_6_summary_3":
		"imkonini beradi, bank yoki toʻlov qayta ishlovchisi kerak emas. Kredit kartalari esa har doim vositachilarni talab qiladi.",
	"bitcoin-vs-visa:point_7_summary_1":
		"Bitcoin global miqyosda 24/7 ishlaydi va ish soatlari yoʻq. Visa ish soatlari, texnik xizmat oynalari va tranzaksiyalarni toʻsadigan geografik cheklovlarga ega.",
	'bitcoin-vs-visa:hero_title':
		'<span class="orange">Bitcoin</span> va <span class="asset">Visa</span> oʻrtasidagi farq',

	// ----- business/sticker-files/english/index -----
	"business/sticker-files/english/index:english_biz_sticker_files_description":
		"Oʻzingizning ‘Bu yerda Bitcoin qabul qilinadi’ stikerlaringizni chop etish uchun inglizcha stiker fayllarini yuklab oling.",
	"business/sticker-files/english/index:biz_stickers_english_hero_subtitle":
		"Mijozlarga Bitcoin qabul qilishingizni bildirish uchun inglizcha ‘Bu yerda Bitcoin qabul qilinadi’ stikerlaringizni chop eting.",
	"business/sticker-files/english/index:biz_stickers_english_hero_title":
		"Inglizcha ‘Bu yerda Bitcoin qabul qilinadi’ stiker fayllarini yuklab oling",

	// ----- sticker-files/index -----
	"sticker-files/index:sticker_files_header":
		"Bu Bitcoin stiker fayllari bilan oʻzingizning Bitcoin stikerlaringizni chop eting.",

	// ----- business/faq -----
	"business/faq:faq_hero_subtitle":
		"Savdogarlar Bitcoin qabul qilishni boshlashdan oldin koʻp beradigan savollarning qisqa javoblari — komissiyalar, hisob-kitob, hamyonlar, qaytarib olishlar, narx va boshqalar.",
	"business/faq:faq_intro_c1":
		"Javobni kengaytirish uchun quyidagi har qanday savolni bosing. Bitcoinni qabul qilishni boshlashga tayyor boʻlganingizda, sahifaning pastida joylashgan biznes resurslari sizni har bir bosqichdan oʻtkazadi.",

	// ----- business/index -----
	"business/index:biz_label_accounting": "BUXGALTERIYA",
	"business/index:biz_label_faq": "TEZ-TEZ BERILADIGAN SAVOLLAR",
	"business/index:biz_label_maps": "SAVDOGAR XARITALARI",
	"business/index:biz_label_rewards": "MUKOFOTLAR",
	"business/index:biz_label_stickers": "STIKERLAR",
	"business/index:biz_label_wallets": "HAMYONLAR",
	"business/index:biz_meta_description":
		"Pastroq komissiyalar, bir zumda hisob-kitob, qaytarib olishlarsiz va koʻproq mijozlar uchun biznesingizda Bitcoinni qabul qiling.",
	"business/index:business_hero_subtitle":
		"Pastroq komissiyalar bilan toʻlov qabul qiling, bir zumda toʻlov oling va Bitcoin foydalanuvchilaridan iborat millionlab yangi mijozlarga yetib boring — nol shartnoma va nol yashirin xarajatlar bilan.",
	"business/index:business_intro_c1":
		"Bitcoin biznesingizga tezroq, arzonroq va shaxsiyroq toʻlov olish usulini beradi. Vositachilarsiz. Qaytarib olishlarsiz. Shartnomalarsiz. Faqat mijozlardan sizgacha bir necha soniyada hisob-kitob qiluvchi pul.",
	"business/index:business_intro_c2":
		"Quyida Bitcoinning biznes uchun nima uchun foydali ekanligining qisqa versiyasi va undan keyin bugun qabul qilishni boshlash uchun zarur boʻlgan har bir resurs.",
	"business/index:business_resources_heading":
		"Bitcoinni qabul qilish uchun zarur boʻlgan hamma narsa",
	"business/index:business_resources_intro":
		"Ushbu resurslarni oʻz tezligingizda oʻrganing. Har biri qisqa, amaliy yoʻriqnoma.",

	// ----- business/maps -----
	"business/maps:biz_maps_form_header": "Biznesingiz haqida bizga ayting",
	"business/maps:biz_maps_form_intro":
		"Sizni roʻyxatga olish uchun bir necha tafsilot kerak. Manzil maʼlumotlari biznesingizni xaritalarga taqdim etish uchun zarur boʻlgan vaqtgacha saqlanadi.",
	"business/maps:biz_maps_hero_subtitle":
		"Bitcoinni qabul qiluvchi savdogarlarning ochiq, butun dunyo katalogi — BTC Map saytida biznesingizni bepul roʻyxatga oling, shunda yaqindagi Bitcoinerlar sizni topa olishi va biznesingizda Bitcoin sarflashi mumkin.",
	"business/maps:biz_maps_hero_title":
		"Biznesingizni Bitcoin savdogar xaritalariga joylang",
	"business/maps:biz_maps_intro_c1":
		"Bitcoinerlar sarflash uchun joylar faol qidirib yurishadi. Biznesingizni xaritaga joylash sizni atrofdagi yegulik, doʻkon yoki turar joy qidirayotgan har bir Bitcoin foydalanuvchisi oldida koʻrsatadi — siz uchun nol xarajat bilan.",
	"business/maps:biz_maps_intro_c2":
		"Quyidagi qisqa shaklni toʻldiring va biz biznesingizni siz uchun BTC Map va boshqa Bitcoin savdogar xaritalariga taqdim etamiz.",
	"business/maps:biz_maps_meta_description":
		"BTC Map va boshqa Bitcoin savdogar xaritalarida biznesingizni bepul roʻyxatga oling, shunda yaqindagi Bitcoinerlar sizni topa olishi mumkin.",
	"business/maps:biz_maps_placeholder_address": "Koʻcha manzili",
	"business/maps:biz_maps_placeholder_category":
		"Kategoriya (masalan, restoran, kafe, mehmonxona)",
	"business/maps:biz_maps_placeholder_city": "Shahar",
	"business/maps:biz_maps_placeholder_country": "Mamlakat",
	"business/maps:biz_maps_placeholder_name": "Biznes nomi",
	"business/maps:biz_maps_placeholder_region": "Shtat / Viloyat / Hudud",
	"business/maps:biz_maps_placeholder_website": "Veb-sayt (ixtiyoriy)",
	"business/maps:biz_maps_view_map_cta": "BTC Map xaritasini koʻring",

	// ----- business/maps-success -----
	"business/maps-success:biz_maps_success_btn_view_map":
		"BTC Map xaritasini koʻring",
	"business/maps-success:biz_maps_success_hero_subtitle":
		"Biznesingizni taqdim etganingiz uchun rahmat. Tez orada sizni Bitcoin savdogar xaritalariga joylaymiz.",
	"business/maps-success:biz_maps_success_hero_title":
		"Soʻrov qabul qilindi 🎉",
	"business/maps-success:biz_maps_success_timeline_c1":
		"Biznesingiz BTC Map va boshqa Bitcoin savdogar kataloglarida 1-2 hafta ichida roʻyxatga olinadi. Har bir taqdim etilgan maʼlumotni xaritalarni aniq saqlash uchun qoʻlda koʻrib chiqamiz.",
	"business/maps-success:biz_maps_success_timeline_c2":
		"Roʻyxatingiz faollashgach, yaqindagi Bitcoinerlar biznesingizni topib, u yerda Bitcoin sarflashga kelishlari mumkin.",
	"business/maps-success:biz_maps_success_timeline_header":
		"Keyin nima boʻladi",
	"business/maps-success:biz_maps_success_view_c1":
		"Kutib turganingizda, dunyoda Bitcoinni qabul qiluvchi bizneslarning oʻsib borayotgan tarmogʻini koʻrish uchun BTC Map saytiga koʻz tashlang.",
	"business/maps-success:biz_maps_success_view_header":
		"Qayerda paydo boʻlishingizni koʻring",

	// ----- business/sticker-language-success -----
	"business/sticker-language-success:biz_sticker_language_success_hero_subtitle":
		"Tilingizdagi ‘Bu yerda Bitcoin qabul qilinadi’ stiker fayllarini soʻraganingiz uchun rahmat.",
	"business/sticker-language-success:biz_sticker_language_success_hero_title":
		"Soʻrov qabul qilindi 🎉",
	"business/sticker-language-success:biz_sticker_language_success_timeline_c1":
		"Biz stiker fayllaringizni 3-4 hafta ichida yaratamiz va eʼlon qilamiz. Tayyor boʻlgach, ularni stiker fayllari sahifamizdan bepul yuklab olib, chop etishingiz mumkin boʻladi.",
	"business/sticker-language-success:biz_sticker_language_success_timeline_c2":
		"Stiker fayllari guruhlarda chiqariladi, shuning uchun tilingizning faollashishiga bir necha hafta vaqt kerak boʻlishi mumkin. Sabringiz uchun rahmat!",
	"business/sticker-language-success:biz_sticker_language_success_timeline_header":
		"Keyin nima boʻladi",

	// ----- business/sticker-success -----
	"business/sticker-success:biz_sticker_success_btn_order_bulk":
		"Ulgurji buyurtma berish",
	"business/sticker-success:biz_sticker_success_btn_request_more":
		"Yana bepul toʻplam soʻrash",
	"business/sticker-success:biz_sticker_success_hero_subtitle":
		"Bepul ‘Bu yerda Bitcoin qabul qilinadi’ stikerlaringizni 2-4 hafta ichida olasiz, ichida 3 ta stiker bilan oddiy oq konvertda.",
	"business/sticker-success:biz_sticker_success_hero_title":
		"Stikerlaringiz yoʻlda 🎉",
	"business/sticker-success:biz_sticker_success_more_c1":
		"Agar 3 ta stiker biznesingiz uchun yetarli boʻlmasa, yana bepul toʻplam soʻrang — yoki biz foydalanadigan bosmaxonadan ulgurji buyurtma bering.",
	"business/sticker-success:biz_sticker_success_more_header":
		"Yana stikerlar kerakmi?",
	"business/sticker-success:biz_sticker_success_tip_1":
		"Mijozlar kirishdan oldin koʻrishi uchun eshigingiz yoki derazangizga",
	"business/sticker-success:biz_sticker_success_tip_2":
		"Kassangiz, POS terminalingiz yoki toʻlov hududingiz yaqinida",
	"business/sticker-success:biz_sticker_success_tip_3":
		"Menyularga, narx roʻyxatlariga yoki choychaqa qutilariga",
	"business/sticker-success:biz_sticker_success_tip_4":
		"Egasi boʻlmagan yoki ruxsatingiz boʻlmagan joylarga yopishtirmang",
	"business/sticker-success:biz_sticker_success_tips_header":
		"Stikerlarni qoʻyish uchun yaxshi joylar",

	// ----- business/stickers -----
	"business/stickers:biz_stickers_hero_subtitle":
		"Mijozlarga Bitcoinni qabul qilishingizni bildiring. Biznesingizga osib qoʻyish uchun bepul ‘Bu yerda Bitcoin qabul qilinadi’ stiker toʻplamiga buyurtma bering.",
	"business/stickers:biz_stickers_hero_title":
		"Bepul ‘Bu yerda Bitcoin qabul qilinadi’ stikerlari",
	"business/stickers:biz_stickers_intro_c1":
		"Bitcoinni qabul qilish — vazifaning faqat yarmi; mijozlaringiz buni qilayotganingizni ham bilishlari kerak. Bu kichik ‘Bu yerda Bitcoin qabul qilinadi’ stikerlari eshigingiz, kassangiz, menyungiz yoki toʻlovdan oldin mijozlar koʻrishi mumkin boʻlgan boshqa joylarga yopishtirish uchun moʻljallangan.",
	"business/stickers:biz_stickers_intro_c2":
		"Biz AQSh yoki Kanadaning istalgan joyiga bepul toʻplam yuboramiz, yoki dunyoning istalgan joyida oʻzingiz chop etishingiz mumkin.",
	"business/stickers:biz_stickers_option_canada":
		"🇨🇦 Kanada — Pochta orqali bepul",
	"business/stickers:biz_stickers_option_print":
		"🌍 Global — Oʻzim chop etaman",
	"business/stickers:biz_stickers_option_usa":
		"🇺🇸 AQSh — Pochta orqali bepul",
	"business/stickers:biz_stickers_placeholder_translation1":
		"‘Bu yerda Bitcoin qabul qilinadi’ uchun tarjima",
	"business/stickers:biz_stickers_placeholder_translation2":
		"‘Bitcoin biznes uchun nima uchun foydali ekanligini bilish uchun skan qiling.’ uchun tarjima",
	"business/stickers:biz_stickers_print_c1":
		"Qayerda yashashingizdan qatʼi nazar oʻzingizning ‘Bu yerda Bitcoin qabul qilinadi’ stikerlaringizni chop etishingiz mumkin. Stiker fayllari va chop etish koʻrsatmalarini yuklab olish uchun quyida tilingizni bosing.",
	"business/stickers:biz_stickers_print_header":
		"Oʻz stiker fayllaringizni chop eting",
	"business/stickers:biz_stickers_request_c1":
		"Mahalliy tilingizdagi ‘Bu yerda Bitcoin qabul qilinadi’ stiker fayllarini soʻrash uchun quyidagi shaklni toʻldiring. Tayyor boʻlgach sizga xabar beramiz.",
	"business/stickers:biz_stickers_request_header":
		"Tilingizni koʻrmayapsizmi?",
	"business/stickers:biz_stickers_step_description":
		"AQSh va Kanadadagi manzillarga bepul toʻplam yuboramiz. Dunyoning boshqa joylarida oʻzingiz chop etishingiz mumkin.",
	"business/stickers:biz_stickers_step_header":
		"Stikerlaringizni qanday olishni xohlaysiz?",

	// ----- wallets -----
	"wallets:sources_bitcoin_org_choose":
		"Bitcoin.org — Hamyoningizni tanlang",
	"wallets:sources_jameson_lopp":
		"Jameson Lopp — Bitcoin metall urugʻ saqlash sharhlari",
	"wallets:wallets_lightning_cta_label": "Lightning Network",
	"wallets:sources_blockstream_green":
		"Blockstream Green — oʻz nazoratidagi Bitcoin hamyoni",
	"wallets:sources_blockstream_jade":
		"Blockstream Jade — Bitcoin apparat hamyoni",
	"wallets:sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 apparat hamyoni",
	"wallets:sources_coldcard_q": "Coinkite — Coldcard Q apparat hamyoni",
	"wallets:sources_passport":
		"Foundation Devices — Passport apparat hamyoni",
	"wallets:sources_seedsigner":
		"SeedSigner — ochiq manbali oʻz qoʻli bilan yigʻiladigan Bitcoin imzolovchi qurilma",
	"wallets:wallets_grid_heading": "Mashhur Bitcoin hamyonlari",
	"wallets:wallets_header_subtitle":
		"Hamyon tanlash, kalitlaringizni himoya qilish va Bitcoiningiz ustidan toʻliq nazoratni qoʻlga olish uchun bosqichma-bosqich yoʻriqnoma.",

	// ----- flyers -----
	"flyers:flyers_intro_header":
		"Bu Bitcoin varaqalarini qanday chop etish va osib qoʻyish",
	"flyers:flyers_hero_subtitle":
		"Bepul, chop etiladigan Bitcoin varaqalari. Koʻproq odamlarning Bitcoin haqida bilib olishiga yordam berish uchun ularni jamoat joylariga osib qoʻying.",
	"flyers:flyers_hero_title":
		"Bitcoin varaqalarini chop eting va osib qoʻying",
	"flyers:flyers_next_get_stickers": "Xabarni tarqating",
	"flyers:flyers_next_get_stickers_desc":
		"Bepul Bitcoin stiker toʻplamiga buyurtma bering",

	// ----- sticker-success -----
	"sticker-success:sticker_success_btn_order_bulk":
		"Ulgurji buyurtma berish",
	"sticker-success:sticker_success_btn_share_on_nostr":
		"Nostrda ulashish",
	"sticker-success:sticker_success_btn_what_is_nostr": "Nostr nima?",
	"sticker-success:sticker_success_bulk_header":
		"Yana stikerlar xohlaysizmi?",
	"sticker-success:sticker_success_hero_title":
		"Stikerlaringiz yoʻlda 🎉",
	"sticker-success:sticker_success_share_header":
		"Stiker joylaringizni ulashing",
	"sticker-success:sticker_success_tips_header":
		"Yaxshi stiker joylari",

	// ----- sticker-language-success -----
	"sticker-language-success:sticker_language_success_hero_title":
		"Soʻrov qabul qilindi 🎉",
};

let translated = 0;
const handled = new Set();

for (const entry of report.entries) {
	if (entry.targetTranslation !== null) continue;
	const k = entry.namespace + ":" + entry.key;
	if (TRANSLATIONS[k] !== undefined) {
		entry.targetTranslation = TRANSLATIONS[k];
		translated++;
		handled.add(k);
	}
}

const missing = Object.keys(TRANSLATIONS).filter((k) => !handled.has(k));
if (missing.length > 0) {
	console.warn(
		`WARNING: ${missing.length} translation keys had no matching report entry:`,
	);
	missing.slice(0, 10).forEach((k) => console.warn("  ", k));
}

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n", "utf8");
console.log(`Part2: translated=${translated}; report=${REPORT_PATH}`);
