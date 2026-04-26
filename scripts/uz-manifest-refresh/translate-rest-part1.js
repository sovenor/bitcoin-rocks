#!/usr/bin/env node
/**
 * uz manifest refresh — part 1 of "rest" translations.
 *
 * Covers: 404, about, bank-runs, business/accounting, business/wallets,
 * common, compound-inflation-calculator, index, lightning, nostr/index.
 *
 * For manifest-changed entries: translates the NEW englishValue (ignores
 * englishValueBefore + currentValue).
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

// Map of [namespace + ":" + key] → Uzbek translation.
const TRANSLATIONS = {
	// ----- 404 -----
	"404:404_home": "Bosh sahifaga qaytish",
	"404:404_message": "Bitcoin ajoyib, lekin bu buzilgan sahifa unday emas.",
	"404:404_not_found_short": "Topilmadi",

	// ----- about -----
	"about:about_card_contact_github_label": "GitHub",
	"about:about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about:about_card_email_title": "hi@bitcoin.rocks",
	"about:about_card_nostr_label": "Nostr",
	"about:about_card_nostr_title": "hi@bitcoin.rocks",
	"about:about_mission_1_sovenor": "sovenor",
	"about:about_page_description":
		"bitcoin.rocks — 2022-yilda asos solingan bepul, ochiq manbali Bitcoin taʼlim sayti. Bizning vazifamiz — taʼlim orqali Bitcoinning tarqalishini tezlashtirish.",
	"about:about_editorial_2":
		"Biz Federal zaxira tizimi (FRED), AQSh Mehnat statistikasi byurosi, FDIC, BMT, Jahon oltin kengashi, Forbes, MIT Technology Review, Lyn Alden va James Lavish kabi ishonchli manbalarga havola qilamiz. Faktlar aniq taqdim etilganda Bitcoin oʻzini oʻzi tushuntiradi deb ishonamiz.",
	"about:about_header": "bitcoin.rocks haqida",
	"about:about_open_source_2":
		"bitcoin.rocks — MIT litsenziyasi ostida tarqatiladigan bepul, ochiq manbali loyiha. Har kim bitcoin.rocks-ga hissa qoʻshishi mumkin. Ayniqsa, kontentimizni butun dunyo boʻylab odamlar uchun ochiq qiladigan tarjimonlarga minnatdormiz.",
	"about:about_business_blurb":
		"Biz mahalliy savdogarlarning Bitcoin qabul qilishni boshlashini osonlashtiradigan bepul biznes resurslarini taqdim etamiz. Bitcoin biznes sahifamiz Bitcoin nima uchun biznes uchun foydali ekanligini, hamyon va kassa terminalini qanday tanlashni qamrab oladi va bepul ‘Bu yerda Bitcoin qabul qilinadi’ stikerlarini taklif etadi.",
	"about:about_card_business_label": "Biznes resurslari",
	"about:about_card_business_source": "Manba: bitcoin.rocks →",
	"about:about_card_business_title":
		"Biznes Bitcoin toʻlovlarini qabul qilishni boshlashi uchun zarur boʻlgan hamma narsa",
	"about:about_card_contact_github_source": "Manba: GitHub →",
	"about:about_card_contribute_label": "Hissa qoʻshish",
	"about:about_card_contribute_source": "Manba: GitHub →",
	"about:about_card_contribute_title":
		"bitcoin.rocks-ga qanday hissa qoʻshishni oʻrganing",
	"about:about_card_email_label": "Elektron pochta",
	"about:about_card_email_source": "Manba: email →",
	"about:about_card_flyers_label": "Chop etiladigan varaqalar",
	"about:about_card_flyers_source": "Manba: bitcoin.rocks →",
	"about:about_card_flyers_title":
		"Hamjamiyatingiz uchun Bitcoin varaqalarini yuklab oling va chop eting",
	"about:about_card_github_label": "Repozitoriy",
	"about:about_card_github_source": "Manba: GitHub →",
	"about:about_card_github_title": "bitcoin.rocks-ni GitHub-da koʻring",
	"about:about_card_nostr_source": "Manba: Nostr →",
	"about:about_card_stickers_label": "Bepul stikerlar",
	"about:about_card_stickers_source": "Manba: bitcoin.rocks →",
	"about:about_card_stickers_title":
		"Eshigingizgacha pochta orqali yuboriladigan bepul Bitcoin stikerlarini oling",
	"about:about_flyers_blurb":
		"Biz uchrashuvlarda tarqatish, hamjamiyat doskalariga osib qoʻyish yoki pochta qutilariga tashlash mumkin boʻlgan chop etiladigan varaqalarni loyihalashtiramiz — qiziqish uygʻotish va odamlarni bitcoin.rocks-ga koʻproq oʻrganish uchun yoʻnaltirishning oddiy usuli.",
	"about:about_mission_1a": "bitcoin.rocks-ga 2022-yilda",
	"about:about_mission_1b":
		"oddiy vazifa bilan asos solingan: taʼlim orqali Bitcoin qabul qilinishini tezlashtirish.",
	"about:about_stickers_blurb":
		"Biz hamjamiyatingizda Bitcoin haqida xabardorlikni tarqatishingizga yordam berish uchun eshigingizgacha bepul Bitcoin stikerlarini yuboramiz. Yuzlab odamlar har oyda bu stikerlardagi QR kodlarni skan qilib Bitcoin haqida bilib olishadi.",

	// ----- bank-runs -----
	"bank-runs:bank_runs_card_fdic_value": "1,42%",
	"bank-runs:bank_runs_header":
		"Bitcoinda bank hujumlari boʻlmaydi, lekin bankingizda boʻlishi mumkin.",
	"bank-runs:bank_runs_bitcoin_heading": "Bitcoinda bank hujumlari boʻlmaydi",
	"bank-runs:bank_runs_bitcoin_p1":
		"Bitcoin — toʻliq zaxiraga ega tizim. Siz pulingizni bankka qoʻymaysiz. Siz oʻzingiz oʻz bankingizsiz. Pulingizga faqat siz kira olganingiz uchun, sizdan bexabar pulingiz qarzga berilmaydi.",
	"bank-runs:bank_runs_bitcoin_p2":
		"Bitcoinni oʻz hamyoningizda saqlasangiz — birja yoki ETF ichida emas — bank hujumlari mumkin emas.",
	"bank-runs:bank_runs_bitcoin_p3":
		"Bitcoin bilan pulingiz ustidan haqiqiy nazorat sizda boʻladi.",
	"bank-runs:bank_runs_card_bank_reserve_detail":
		"2020-yil 26-martdan beri AQSh banklari 0% zaxira ushlab turishlari shart.",
	"bank-runs:bank_runs_card_bank_reserve_label": "Bank zaxira nisbati",
	"bank-runs:bank_runs_card_bank_reserve_source":
		"Manba: Federal zaxira tizimi →",
	"bank-runs:bank_runs_card_btc_fdic_detail":
		"Toʻliq zaxira tizimi — depozit sugʻurtasi shart emas.",
	"bank-runs:bank_runs_card_btc_fdic_label": "Bitcoin qoplamasi",
	"bank-runs:bank_runs_card_btc_fdic_source": "Manba: Bitcoin Whitepaper →",
	"bank-runs:bank_runs_card_btc_reserve_detail":
		"Har bir bitcoin blokcheynda mavjud — hech narsa qarzga berilmaydi.",
	"bank-runs:bank_runs_card_btc_reserve_label": "Bitcoin zaxira nisbati",
	"bank-runs:bank_runs_card_btc_reserve_source": "Manba: Bitcoin Whitepaper →",
	"bank-runs:bank_runs_card_fdic_detail":
		"153,9 mlrd USD sugʻurta fondi 10,82 trln USD sugʻurtalangan depozitlarga qarshi (2025-yil dekabr).",
	"bank-runs:bank_runs_card_fdic_label": "FDIC qoplamasi",
	"bank-runs:bank_runs_card_fdic_source":
		"Manba: FDIC Statistics at a Glance →",
	"bank-runs:bank_runs_card_svb_label": "Misol",
	"bank-runs:bank_runs_card_svb_source":
		"Manba: Vashington universiteti yuridik fakulteti →",
	"bank-runs:bank_runs_card_svb_title":
		"Silicon Valley Bank hujumi qanday sodir boʻlganini bilib oling",
	"bank-runs:bank_runs_card_wallet_label": "Keyingi qadam",
	"bank-runs:bank_runs_card_wallet_source": "Bu yerdan boshlang →",
	"bank-runs:bank_runs_card_wallet_title":
		"Oʻzingizning Bitcoin hamyoningizni qanday olishni oʻrganing",
	"bank-runs:bank_runs_fdic_heading":
		"FDIC sugʻurtasi depozitlarning taxminan 1%ini qoplaydi",
	"bank-runs:bank_runs_fdic_p1":
		"FDIC sugʻurtasi har bir depozitor uchun 250 000 USDgacha boʻlgan depozitlarni himoya qiladi. Lekin sugʻurta fondi himoya qilishi kerak boʻlgan umumiy depozitlar bilan solishtirganda juda kichik.",
	"bank-runs:bank_runs_fdic_p2_a":
		"Yirik bank inqirozida hukumat farqni yopish uchun pul bosishi mumkin — bu esa qoʻshimcha",
	"bank-runs:bank_runs_fdic_p2_link": "inflyatsiyaga olib keladi.",
	"bank-runs:bank_runs_page_description":
		"Banklar ulushli zaxira bankchiligi ostida sizning depozitlaringizni qarzga beradi. Agar koʻp odamlar bir vaqtda yechib olishga harakat qilsa, banklar qulashi mumkin. Bitcoin — toʻliq zaxira tizimi, bank hujumlari mumkin emas.",
	"bank-runs:bank_runs_svb_heading": "Silicon Valley Bank: real misol",
	"bank-runs:bank_runs_svb_p1_a":
		"2023-yil mart oyida Silicon Valley Bank mijoz depozitlarini uzoq muddatli",
	"bank-runs:bank_runs_svb_p1_b":
		"Bu obligatsiyalar qadrini yoʻqotgach, SVB pul yechishlarni qoplay olmadi. Bank toʻlovga qodir emas edi.",
	"bank-runs:bank_runs_svb_p1_link": "davlat obligatsiyalariga qoʻyganidan keyin qulab tushdi.",
	"bank-runs:bank_runs_svb_p2":
		"Minglab bizneslar xodimlariga maosh toʻlay olmadi. FDIC ishga aralashdi — lekin bu kattaroq savol tugʻdirdi: pulingiz aslida xavfsizmi?",
	"bank-runs:bank_runs_what_p1":
		"Banklar depozitlaringizni omborda saqlamaydi. Ular pulingizni qarzga beradi va investitsiya qiladi — buni ulushli zaxira bankchiligi deyishadi.",
	"bank-runs:bank_runs_what_p2":
		"Agar koʻp odamlar bir vaqtda yechib olmoqchi boʻlsa, bank hammaga toʻlash uchun yetarli naqd pulga ega boʻlmaydi. Bu — bank hujumi, va u banklarning butunlay qulashiga sabab boʻlishi mumkin.",

	// ----- business/accounting -----
	"business/accounting:accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting:accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting:accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting:accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting:accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting:accounting_example_gain_result": "+10 USD",
	"business/accounting:accounting_example_loss_result": "−10 USD",
	"business/accounting:accounting_description":
		"Biznes hisobotingizga Bitcoinni kiritishning sodda yoʻriqnomasi — gibrid hamyonlar, xarajat asosi, kapital daromadlari va qachon buxgalterga murojaat qilish kerakligi.",
	"business/accounting:accounting_s1_c1":
		"Bitcoinni qabul qilishning eng oson yoʻli — toʻlov kelishi bilanoq olingan Bitcoinning 100%ini avtomatik dollarlarga (yoki mahalliy valyutangizga) sotadigan gibrid hamyondan foydalanish.",
	"business/accounting:accounting_s1_c2":
		"Bunday sozlash bilan hisobotingiz bugungi koʻrinishidan farq qilmaydi — yakuniy raqam har safar dollarda boʻladi. Hech qanday xarajat asosi, kapital daromadi yoki yangi jadvallar kerak emas.",
	"business/accounting:accounting_s2":
		"Agar Bitcoinning bir qismini saqlayotgan boʻlsangiz: xarajat asosini kuzatish",
	"business/accounting:accounting_s2_c1":
		"Baʼzi bizneslar olgan Bitcoinning hammasini avtomatik konvertatsiya qilish oʻrniga bir qismini saqlab qolishni tanlaydi. Agar bu siz boʻlsangiz, asosiy qoʻshimcha qadam — xarajat asosini kuzatish, yaʼni har bir Bitcoin toʻlovining olingan kunidagi dollar qiymatini yozib qoʻyish.",
	"business/accounting:accounting_s2_c2":
		"Biznesingizni butunlay Bitcoin nuqtai nazaridan koʻrayotgan boʻlsangiz ham, koʻpchilik soliq idoralari hali ham dollar qiymatining hisobotini talab qiladi. Yaxshi xabar: bu har bir tranzaksiya uchun atigi ikkita raqam — olingan Bitcoin miqdori va oʻsha kungi dollar qiymati.",
	"business/accounting:accounting_s2_c3":
		"Quyidagi vositalardan foydalanib qidiruvni avtomatlashtiring, shunda har kuni narxlarni tekshirishga toʻgʻri kelmaydi.",
	"business/accounting:accounting_s3":
		"Saqlab qoʻygan Bitcoinni sarflash yoki sotish",
	"business/accounting:accounting_s3_c1":
		"Agar har bir toʻlovni avtomatik dollarga konvertatsiya qilayotgan boʻlsangiz, bu boʻlimni oʻtkazib yuboring — sizga taalluqli emas.",
	"business/accounting:accounting_s3_c2":
		"Agar Bitcoinning bir qismini saqlab qoʻygan boʻlsangiz va keyinroq uni sarflash yoki sotishga qaror qilsangiz, sotuv narxini xuddi shu xarajat asosi jadvaliga qoʻshing. Bitcoin olingan paytdagi qiymati va sarflagan yoki sotgan paytdagi qiymati orasidagi farq — kapital daromadi yoki zarari.",
	"business/accounting:accounting_s3_c3": "Ikkita tezkor misol:",
	"business/accounting:accounting_s4": "Bitcoinni biladigan mutaxassis kerakmi?",
	"business/accounting:accounting_s4_c1":
		"Agar buni boshqa birovga topshirmoqchi boʻlsangiz — yoki Bitcoin buxgalteriyangiz gibrid hamyon hal qila olmaydigan darajada murakkab boʻlsa — bizneslar uchun Bitcoin buxgalteriyasiga ixtisoslashgan Satoshi Pacioli Accounting Services kompaniyasini qatʼiy tavsiya etamiz.",
	"business/accounting:bitcoin_business_accounting_guide":
		"Biznesingiz uchun Bitcoin buxgalteriyasi",
	"business/accounting:accounting_card_bpr_label": "BITCOIN NARXI",
	"business/accounting:accounting_card_bpr_title":
		"Bitcoinning joriy yoki tarixiy dollar narxini qidiring",
	"business/accounting:accounting_card_pacioli_label": "BITCOIN BUXGALTERLARI",
	"business/accounting:accounting_card_spreadsheet_label": "EXCEL IMPORTI",
	"business/accounting:accounting_card_spreadsheet_title":
		"Bitcoin narxlarini Excel-ga avtomatik tortib oling",
	"business/accounting:accounting_card_wallets_label": "GIBRID HAMYONLAR",
	"business/accounting:accounting_card_wallets_title":
		"Tavsiya etilgan biznes hamyonlarini koʻring",
	"business/accounting:accounting_disclaimer":
		"Ushbu yoʻriqnoma faqat axborot maqsadlarida tuzilgan va soliq maslahati hisoblanmaydi. Sizning vaziyatingizga oid soliq maslahati uchun malakali buxgalter bilan bogʻlaning.",
	"business/accounting:accounting_disclaimer_label": "Eʼtibor bering",
	"business/accounting:accounting_example_feb_1": "1-fevral",
	"business/accounting:accounting_example_gain_badge": "Kapital daromadi",
	"business/accounting:accounting_example_gain_explain":
		"Siz 10 USD kapital daromadini qayd etasiz.",
	"business/accounting:accounting_example_jan_1": "1-yanvar",
	"business/accounting:accounting_example_loss_badge": "Kapital zarari",
	"business/accounting:accounting_example_loss_explain":
		"Siz 10 USD kapital zararini qayd etasiz.",
	"business/accounting:accounting_example_received_label": "Olingan",
	"business/accounting:accounting_example_sold_label":
		"Sotilgan yoki sarflangan",
	"business/accounting:accounting_hero_subtitle":
		"Biznesingizda Bitcoinni qabul qilish buxgalteriyangizni murakkablashtirishi shart emas. Mana qisqa versiyasi — uni ogʻriqsiz qiladigan vositalar va mutaxassislar bilan birga.",
	"business/accounting:accounting_intro_c1":
		"Agar siz allaqachon naqd pul yoki karta qabul qilayotgan boʻlsangiz, biznes hisobotingizga Bitcoinni qoʻshish koʻrinishdan koʻra ancha sodda. Sizda ikki yoʻl bor: har bir Bitcoin toʻlovi kelgan zahoti uni avtomatik dollarga oʻtkazish (yangi buxgalteriya kerak emas) yoki bir qismini Bitcoin koʻrinishida saqlash (kuzatiladigan bir necha qoʻshimcha raqam).",
	"business/accounting:accounting_intro_c2":
		"Ushbu yoʻriqnoma sizni har ikkalasi orqali olib boradi — shunda biznesingizga mos keluvchisini tanlab, Bitcoinni ishonch bilan qabul qilishni boshlashingiz mumkin.",
	"business/accounting:accounting_s1": "Oson yoʻl: avtomatik dollarga konvertatsiya",
	"business/accounting:accounting_s3_c6":
		"Tamom. Asosidagi matematika boshqa har qanday qiymati oshib yoki kamayib boruvchi aktivni hisobga olish bilan bir xil.",
	"business/accounting:sources_bitcoin_price_report":
		"Bitcoin Price Report — Bitcoinning joriy va tarixiy dollar narxi",
	"business/accounting:sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — bizneslar uchun Bitcoin buxgalteriyasi",
	"business/accounting:sources_spreadsheet_guru":
		"The Spreadsheet Guru — kriptovalyuta narxlarini Excel-ga import qilish",

	// ----- business/wallets -----
	"business/wallets:wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets:biz_wallets_meta_description":
		"Barcha Bitcoin hamyonlari bir-biri bilan ishlay oladi — biznesingizga mosini tanlang. Bepul, bir zumda hisob-kitob, hech qanday qaytarib olishlar yoʻq.",
	"business/wallets:sources_breez_business":
		"Breez — faqat Bitcoinga ishlaydigan Lightning hamyoni",
	"business/wallets:sources_ibex":
		"IBEX — Lightning toʻlov infratuzilmasi",
	"business/wallets:sources_opennode":
		"OpenNode — Bitcoin toʻlovlarini qayta ishlovchi",
	"business/wallets:sources_square":
		"Square — Bitcoin toʻlovlarini qabul qiling",
	"business/wallets:sources_zaprite":
		"Zaprite — bizneslar uchun Bitcoin invoyslari",
	"business/wallets:wallets_hero_subtitle":
		"Bitcoin hamyonlari bepul. Biznesingizga mosini tanlang — yuzma-yuz, onlayn yoki invoys asosida — va bir necha daqiqada Bitcoinni qabul qilishni boshlang.",
	"business/wallets:wallets_section_invoice":
		"Invoys asosidagi bizneslar uchun hamyonlar",
	"business/wallets:wallets_section_invoice_intro":
		"Agar mijozlarga invoys yuborsangiz (konsalting, frilans, B2B xizmatlar), invoys atrofida qurilgan hamyondan foydalaning. Mijozingiz bir necha bosish bilan Bitcoin invoysini toʻlaydi.",
	"business/wallets:wallets_section_multiple":
		"Bir nechta xodimi bor bizneslar uchun hamyonlar",
	"business/wallets:wallets_section_multiple_intro":
		"Agar kassada toʻlov qabul qiluvchi jamoangiz boʻlsa, bir nechta xodim kirishini qoʻllab-quvvatlovchi hamyonni tanlang — shunda har bir xodim oʻz PIN-koduga ega boʻladi va kim qaysi toʻlovni olganligi haqida aniq audit qoladi.",
	"business/wallets:wallets_section_online":
		"Onlayn bizneslar uchun hamyonlar",
	"business/wallets:wallets_section_online_intro":
		"Veb-saytda sotyapsizmi? Ushbu hamyonlar onlayn doʻkoningizga ulanadi va dunyoning istalgan joyidan har qanday mijozdan Bitcoin qabul qiladi — qaytarib olishlarsiz, savdogar hisobini ochish talab qilinmaydi.",
	"business/wallets:wallets_section_sole":
		"Yakka tartibdagi bizneslar uchun hamyonlar",
	"business/wallets:wallets_section_sole_intro":
		"Agar yakka tartibda doʻkon, kafe, studiya yoki xizmat yuritsangiz, bu hamyonlarning har biri ishlaydi. Toʻlovlarni Bitcoinda qoldirish yoki har bir toʻlovning bir qismini avtomatik mahalliy valyutaga oʻtkazishga qarab tanlang.",
	"business/wallets:wallets_strike_note":
		"Strike Business sizga Bitcoin va Lightning toʻlovlarini nol komissiya va bir zumda hisob-kitob bilan qabul qilish imkonini beradi. Yuzma-yuz, onlayn va invoys asosidagi toʻlovlarni qoʻllab-quvvatlaydi, ixtiyoriy mahalliy valyutaga avtomatik konvertatsiya qiladi.",

	// ----- common -----
	"common:common_language_switcher_add_language": "Til qoʻshish",
	"common:common_next_buy_bitcoin": "Bitcoin sotib olish",
	"common:common_next_buy_bitcoin_desc":
		"Bitcoinni xavfsiz sotib olishni oʻrganing",
	"common:common_next_calculate": "Inflyatsiyangizni hisoblang",
	"common:common_next_calculate_desc":
		"Inflyatsiya vaqt oʻtishi bilan maoshingizga qanday taʼsir qilishini koʻring",
	"common:common_next_get_wallet": "Hamyon oling",
	"common:common_next_get_wallet_desc":
		"Birinchi Bitcoin hamyoningizni oling — bu bepul",
	"common:common_next_keep_learning": "Oʻrganishda davom eting",
	"common:common_next_keep_learning_desc":
		"Bitcoin dunyoni qanday yaxshilayotganini koʻring",
	"common:common_source_bls_cpi":
		"AQSh Mehnat statistikasi byurosi — Isteʼmol narxlari indeksi (CPI)",
	"common:common_source_fred_money_supply_index":
		"Federal zaxira iqtisodiy maʼlumotlari (FRED) — Pul taklifi (kategoriya indeksi)",
	"common:common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: tengdosh-dan-tengdoshga elektron pul tizimi (2008)",
	"common:common_sources_treasury_auction":
		"James Lavish — “Gʻaznachilik kimoshdi savdosi muvaffaqiyatsizlikka uchrashi mumkinmi?”",
	"common:common_stickers_printer_name": "StickerMule.com",
	"common:common_whats_next": "Keyingi qadam?",
	"common:common_stickers_material": "Material:",
	"common:common_sticker_files_mission_5": "toʻplam soʻrang",
	"common:common_site_tagline": "Hamma uchun Bitcoin taʼlimi.",
	"common:common_source_btc_map":
		"BTC Map — Bitcoinni qabul qiluvchi savdogarlarning butun dunyo katalogi",
	"common:common_source_btcpayserver":
		"BTCPay Server — bepul, ochiq manbali, oʻz-oʻzini joylaydigan Bitcoin toʻlov qayta ishlovchi",
	"common:common_source_oshi":
		"Oshi — savdogarlar uchun Bitcoin mukofotlari platformasi",
	"common:common_source_strike_business":
		"Strike — bizneslar uchun Bitcoin va Lightning toʻlovlari",
	"common:common_sources_group_bitcoin": "Bitcoin maʼlumotlari",
	"common:common_sources_group_cpi":
		"Inflyatsiya / Isteʼmol narxlari indeksi",
	"common:common_sources_group_debt": "Hukumat qarzi",
	"common:common_sources_group_money": "Pul taklifi maʼlumotlari",
	"common:common_sources_group_stories": "Real misollar",
	"common:common_sticker_files_mission_6": "inglizcha stikerlardan bepul.",
	"common:common_sticker_files_next_flyers_label": "Varaqalar",
	"common:common_sticker_files_next_flyers_title":
		"Bitcoin varaqasini chop eting",
	"common:common_sticker_files_next_languages_label": "Stiker fayllari",
	"common:common_sticker_files_next_languages_title":
		"Boshqa tillardagi stiker fayllarini koʻring",
	"common:common_sticker_files_print_these": "BIR BOSISH BILAN CHOP ETING",
	"common:common_sticker_name_bdhi_black":
		"“Bitcoinning inflyatsiyasi yoʻq” stikeri (qora)",
	"common:common_sticker_name_bdhi_orange":
		"“Bitcoinning inflyatsiyasi yoʻq” stikeri (toʻq sariq)",
	"common:common_sticker_name_caution":
		"“Diqqat! Erib borayotgan muz boʻlagi” Bitcoin stikeri",
	"common:common_sticker_name_cure_inflation":
		"“Inflyatsiyani davolang” Bitcoin stikeri",
	"common:common_sticker_name_danger":
		"“Xavf! Inflyatsiya oldinda” Bitcoin stikeri",
	"common:common_sticker_name_fix":
		"“Pulni tuzating, dunyoni tuzating” Bitcoin stikeri",
	"common:common_sticker_name_got_inflation":
		"“Inflyatsiyangiz bormi?” Bitcoin stikeri",
	"common:common_sticker_name_study": "“Bitcoinni oʻrganing” stikeri",
	"common:common_sticker_name_warning":
		"“Ogohlantirish! Inflyatsiya jamgʻarmangizni oʻgʻirlamoqda” Bitcoin stikeri",
	"common:common_sticker_name_what_if":
		"“Agar pulingizning inflyatsiyasi boʻlmasaydi-chi?” Bitcoin stikeri",
	"common:common_sticker_tips_heading": "Stiker maslahatlari",
	"common:common_sticker_tips_intro":
		"Stikerlaringizni chop etganingizdan keyin, ularni odamlarga koʻrinadigan joyga osib qoʻying! Yaxshi stiker joylari:",
	"common:common_sticker_tips_list_1":
		"odamlar koʻradigan jamoat joylarida",
	"common:common_sticker_tips_list_2":
		"tezda olib tashlanish ehtimoli past joylarda (stikerlar doimiy zarar yetkazmaydi)",
	"common:common_sticker_tips_list_3":
		"yopishadigan yuzalarda (metall, plastmassa, shisha)",
	"common:common_sticker_tips_list_4":
		"xususiy mulk, belgilar, bankomatlar yoki yonilgʻi quyish nasoslarini qoplamasdan",
	"common:common_stickers_printer_prefix": "Biz",
	"common:common_stickers_printer_suffix":
		"dan foydalanamiz, lekin siz har qanday stiker kompaniyasidan foydalanishingiz mumkin.",

	// ----- compound-inflation-calculator -----
	"compound-inflation-calculator:sources_fred_cpi_urban":
		"Federal zaxira iqtisodiy maʼlumotlari (FRED) — barcha shaharlik isteʼmolchilar uchun isteʼmol narxlari indeksi",
	"compound-inflation-calculator:sources_fred_m1":
		"Federal zaxira iqtisodiy maʼlumotlari (FRED) — M1 pul taklifi",
	"compound-inflation-calculator:cic_calculator_heading":
		"Inflyatsiya farqingizni hisoblang",
	"compound-inflation-calculator:cic_cta_label": "Keyingi qadam",
	"compound-inflation-calculator:cic_hero_subtitle":
		"Inflyatsiyaga yetib borish uchun maoshingiz qancha oshishi kerakligini koʻring.",
	"compound-inflation-calculator:cic_next_explore_topics":
		"Yana mavzularni oʻrganing",
	"compound-inflation-calculator:cic_next_explore_topics_desc":
		"Bitcoin pul, erkinlik, energiya va boshqa mavzular bilan qanday bogʻliqligini koʻring.",
	"compound-inflation-calculator:cic_next_learn_inflation":
		"Inflyatsiya qanday ishlashini oʻrganing",

	// ----- index -----
	"index:home_btn_saving": "jamgʻarish",
	"index:home_card_label_art_1": "Solishtiraylik",
	"index:home_card_label_art_2": "Xabarni tarqating",
	"index:home_card_label_art_3": "Koʻcha sanʼati",
	"index:home_card_label_bank_runs": "Toʻliq zaxira tizimi",
	"index:home_card_label_bonds": "Solishtiraylik",
	"index:home_card_label_business_1": "Farqi nimada?",
	"index:home_card_label_business_2": "Bitcoin toʻlovlarini qabul qiling",
	"index:home_card_label_cash": "Solishtiraylik",
	"index:home_card_label_cbdc": "Ochiq yoki yopiqmi?",
	"index:home_card_label_coding_1": "Interaktiv darslik",
	"index:home_card_label_coding_2": "Apparat quring",
	"index:home_card_label_coding_3": "Kod boshqotirmalari",
	"index:home_card_label_crowdfunding_1": "EndSARS noroziliklari",
	"index:home_card_label_crowdfunding_2": "Toʻxtatib boʻlmas pul",
	"index:home_card_label_crowdfunding_3": "Loyihangizni moliyalang",
	"index:home_card_label_crypto": "Farqi nimada?",
	"index:home_card_label_energy_1": "Energiya tarmogʻini barqarorlashtirish",
	"index:home_card_label_energy_4": "Talab javobi",
	"index:home_card_label_energy_5": "Qishloq elektrlashtirish",
	"index:home_card_label_energy_6": "Qayta tiklanadigan rag‘batlantirish",
	"index:home_card_label_environment_1": "Metanni kamaytirish",
	"index:home_card_label_environment_2": "Milliy bogʻni saqlab qolish",
	"index:home_card_label_environment_3": "Eng ekologik soha",
	"index:home_card_label_environment_4":
		"Yoqilayotgan gazni kamaytiradi",
	"index:home_card_label_equality_1": "Umid va imkoniyat",
	"index:home_card_label_equality_2": "Oʻyin oʻzgartiruvchi",
	"index:home_card_label_food_1": "Oziq-ovqat narxlari",
	"index:home_card_label_food_2": "Fermalar va tuproq",
	"index:home_card_label_freedom_1": "Avtoritar rejimlar",
	"index:home_card_label_freedom_2": "Yagona vosita",
	"index:home_card_label_get_started_1": "Boshlovchilar uchun asoslar",
	"index:home_card_label_get_started_2": "Birinchi hamyoningiz",
	"index:home_card_label_get_started_3": "Bitcoin sotib oling",
	"index:home_card_label_gold": "Qaysi biri yaxshiroq?",
	"index:home_card_label_housing_1": "Arzon uy-joy",
	"index:home_card_label_human_rights_1": "Inson huquqlarini taʼminlash",
	"index:home_card_label_human_rights_2": "Quyi pogʻonadan qabul qilish",
	"index:home_card_label_human_rights_3": "Global taʼsir",
	"index:home_card_label_inflation": "Bitcoin yaxshiroq pul",
	"index:home_card_label_networks_1": "Tarmoqning jonli koʻrinishi",
	"index:home_card_label_networks_2": "Solishtiraylik",
	"index:home_card_label_payments_1": "Farqi nimada?",
	"index:home_card_label_payments_2": "Tez va arzon toʻlovlar",
	"index:home_card_label_payments_3": "Pul oʻtkazmalari",
	"index:home_card_label_payments_4": "Toʻlovlarni qabul qiling",
	"index:home_card_label_politics_1": "Siyosiy paradoks",
	"index:home_card_label_politics_2": "Harakat qiling",
	"index:home_card_label_property_rights_1": "Solishtiraylik",
	"index:home_card_label_property_rights_2": "Haqiqiy mulkchilik",
	"index:home_card_label_salary": "Maoshingizni himoya qiling",
	"index:home_card_label_self_custody_1": "Bitcoin hamyon yoʻriqnomasi",
	"index:home_card_label_self_custody_2": "Eng muhim qadam",
	"index:home_card_label_self_custody_3": "Suveren pul",
	"index:home_card_label_war_1": "Cheksiz urushga chek qoʻying",
	"index:home_card_label_war_2": "Faxriylarga yordam",
	"index:home_card_label_war_3": "Urush paytida qutilish",
	"index:home_h1":
		"Bitcoin — yaxshiroq pul boʻlib, yaxshiroq dunyo qurmoqda.",
	"index:home_nav_about": "Biz haqimizda",
	"index:home_nav_get_involved": "Ishtirok eting",
	"index:home_nav_learn": "Oʻrganing",
	"index:home_source_prefix": "Manba:",

	// ----- lightning -----
	"lightning:sources_lightning_paper":
		"Joseph Poon va Thaddeus Dryja — Bitcoin Lightning Network: kengaytiriladigan zanjirdan tashqari bir zumda toʻlovlar (2016)",
	"lightning:lightning_s1_c4": "Bizning",
	"lightning:lightning_grid_heading": "Mashhur Lightning hamyonlari",
	"lightning:lightning_hardware_cta_label": "Apparat hamyonlari",
	"lightning:lightning_header_subtitle":
		"Lightning sizga Bitcoinni bir necha soniyada sentning bir qismiga yuborish imkonini beradi — sarflashni rejalashtirgan Bitcoin miqdoringizga mos keladigan kelishuvga ega hamyonni tanlang.",
	"lightning:lightning_s1_c4_end": "yoʻriqnomamizni koʻring.",
	"lightning:lightning_s1_c4_link": "Bitcoin apparat hamyonlari yoʻriqnomasini",
	"lightning:sources_acinq_phoenix": "ACINQ — Phoenix Lightning hamyoni",
	"lightning:sources_breez_lightning":
		"Breez — oʻz nazoratidagi Lightning hamyoni",
	"lightning:sources_lightning_labs":
		"Lightning Labs — Lightning Network hujjatlari",
	"lightning:sources_wallet_of_satoshi":
		"Wallet of Satoshi — qaramogʻidagi Lightning hamyoni",

	// ----- nostr/index -----
	"nostr/index:nostr_amethyst_name": "Amethyst",
	"nostr/index:nostr_damus_name": "Damus",
	"nostr/index:nostr_iris_name": "Iris",
	"nostr/index:nostr_platform_android": "Android",
	"nostr/index:nostr_platform_ios": "iPhone",
	"nostr/index:nostr_platform_ios_android_web": "iPhone, Android va veb",
	"nostr/index:nostr_platform_web": "Veb-brauzer",
	"nostr/index:nostr_primal_name": "Primal",
	"nostr/index:nostr_page_description":
		"Nostr — onlayn aloqa uchun yangi markazsizlashtirilgan protokol — uni hech qanday yagona kompaniya nazorat qilmaydi, Bitcoin zaplari tugʻma ravishda oʻrnatilgan va siz obunachilaringizni yoʻqotmasdan klientlar oʻrtasida koʻchib yura olasiz.",
	"nostr/index:nostr_amethyst_f1": "Koʻplab xususiyatlar va sozlamalar",
	"nostr/index:nostr_amethyst_f2": "Alohida Bitcoin hamyon talab qiladi",
	"nostr/index:nostr_amethyst_f3": "100% bepul",
	"nostr/index:nostr_damus_f1": "Twitterga oʻxshash tanish interfeys",
	"nostr/index:nostr_damus_f2": "Alohida Bitcoin hamyon talab qiladi",
	"nostr/index:nostr_damus_f3": "100% bepul",
	"nostr/index:nostr_download_heading": "Bepul Nostr klientini yuklab oling",
	"nostr/index:nostr_download_intro":
		"Nostr klientlari — Nostr tarmogʻida oʻqish va yozish imkonini beradigan bepul ilovalar. Ularning hammasi bir-biri bilan ishlay oladi — istalgan vaqtda klientlarni almashtirib, obunachi va kontentingizni saqlab qola olasiz.",
	"nostr/index:nostr_hero_subtitle":
		"Nostr — onlayn muloqot uchun yangi markazsizlashtirilgan protokol — uni yagona kompaniya nazorat qilmaydi, Bitcoin zaplari oʻrnatilgan va obunachilaringizni yoʻqotmasdan ilovalar oʻrtasida koʻchib yura olasiz.",
	"nostr/index:nostr_hero_title": "Nostr nima?",
	"nostr/index:nostr_intro_c1":
		"Nostr elektron pochtaga oʻxshaydi: hech kim protokolga ega emas, har kim uning ustida ilova qura oladi va sizga yoqqanini tanlashingiz mumkin. Twitter yoki Facebookdan farqli oʻlaroq, sizni senzura qila oladigan, blokdan oʻtkaza oladigan yoki koʻrinishini kamaytira oladigan markaziy kompaniya yoʻq.",
	"nostr/index:nostr_intro_c2":
		"Quyida Nostr nima uchun muhim ekanligining qisqa versiyasi va keyin bugun boshlash uchun zarur boʻlgan har bir bepul Nostr klienti.",
	"nostr/index:nostr_iris_f1": "Juda oddiy — oʻrnatish kerak emas",
	"nostr/index:nostr_iris_f2":
		"Nostrni sinab koʻrish uchun oson sinov hisobi",
	"nostr/index:nostr_iris_f3": "100% bepul",
	"nostr/index:nostr_learn_more_label": "CHUQURROQ",
	"nostr/index:nostr_learn_more_title":
		"nostr.how saytida Nostr haqida koʻproq bilib oling",
	"nostr/index:nostr_primal_f1": "Tavsiya etilgan birinchi klient",
	"nostr/index:nostr_primal_f2": "Oʻrnatilgan Bitcoin zap hamyoni",
	"nostr/index:nostr_primal_f3": "100% bepul",
	"nostr/index:nostr_s1": "Protokol, platforma emas",
	"nostr/index:nostr_s1_c1":
		"Nostr — senzura, blokdan oʻtkazish yoki koʻrinishini kamaytirish xavfisiz onlayn muloqot qilish imkonini beradigan yangi protokol.",
	"nostr/index:nostr_s1_c2":
		"Twitter va Facebook kabi platformalar bitta kompaniya tomonidan boshqariladi, lekin hech kim Nostr protokolini boshqarmaydi.",
	"nostr/index:nostr_s2": "Erkin koʻchib yurish",
	"nostr/index:nostr_s2_c1":
		"Nostr elektron pochtaga oʻxshaydi. Hech kim elektron pochta protokolini boshqarmaydi va har kim uning ustida klient (Gmail, Hotmail va h.k.) qura oladi.",
	"nostr/index:nostr_s2_c2":
		"Hech kim Nostr protokolini ham boshqarmaydi va har kim uning ustida klient (Damus, Amethyst va h.k.) qura oladi.",
	"nostr/index:nostr_s2_c3":
		"Agar maʼlum klientning ishlashi sizga yoqmasa, obunachilar va kontentingizni yoʻqotmasdan Nostr hisobingizni boshqa klientga muammosiz koʻchirishingiz mumkin.",
	"nostr/index:nostr_s3": "Bitcoin oʻrnatilgan",
	"nostr/index:nostr_s3_c1":
		"Bitcoin Nostr protokoliga tugʻma ravishda oʻrnatilgan. Sizga yoqqan kontent uchun rahmat tarzida birovga osongina Bitcoin yuborib (zap qilib) yuborishingiz mumkin!",
	"nostr/index:nostr_s3_c2":
		"Twitter va Facebook kabi markazlashgan platformalarda kompaniya kontentingizdan pul ishlab oladi. Lekin Nostr kabi ochiq protokollarda kontentingizdan siz pul ishlab olasiz.",
	"nostr/index:sources_damus": "Damus — iPhone uchun Nostr klienti",
	"nostr/index:sources_iris": "Iris — brauzer asosidagi Nostr klienti",
	"nostr/index:sources_nostr_how": "nostr.how — Nostr nima?",
	"nostr/index:sources_nostr_protocol":
		"Nostr Protocol — ochiq manbali spetsifikatsiya",
	"nostr/index:sources_primal":
		"Primal — oʻrnatilgan Bitcoin zap hamyoniga ega Nostr klienti",
	"nostr/index:what_is_nostr": "Nostr nima?",
};

let translated = 0;
let skipped = 0;
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

const missingKeys = Object.keys(TRANSLATIONS).filter((k) => !handled.has(k));
if (missingKeys.length > 0) {
	console.warn(
		`WARNING: ${missingKeys.length} translation keys had no matching report entry:`,
	);
	missingKeys.slice(0, 10).forEach((k) => console.warn("  ", k));
}

fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n", "utf8");
console.log(`Part1: translated=${translated}; report=${REPORT_PATH}`);
