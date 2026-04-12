/**
 * Creates Uzbek (uz) translation files for all business/ pages
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'uz';
const today = '2026-04-11';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin biznes uchun foydali",
	"biz_header": "BITCOIN BIZNES UCHUN FOYDALI",
	"biz_s1": "Minimal summasi yo\u02BBq past komissiyalar",
	"biz_s1_c1": "Bitcoin, xuddi naqd pul kabi, mijozlaringizdan bevosita to\u02BBlov olish imkonini beradi. Bitcoin tarmog\u02BBi yuqori komissiyalar oladigan banklar va kredit karta kompaniyalari kabi vositachilarssiz ishlaydi.",
	"biz_s2": "Bir zumda to\u02BBlov",
	"biz_s2_c1": "Naqd pul kabi, Bitcoin to\u02BBlovlari ham bir zumda amalga oshiriladi. Kredit karta kompaniyasi yoki bankning sizga pul yuborishini kutishingiz shart emas. Buning o\u02BBrniga, pulingizga darhol kirish huquqiga ega bo\u02BBlasiz.",
	"biz_s3": "Qaytarib olish yoki firibgarlik yo\u02BBq",
	"biz_s3_c1": "Bitcoin to\u02BBlovlari bevosita siz va mijozlaringiz o\u02BBrtasida amalga oshirilganligi sababli, hech kim qaytarib olish orqali pulingizni qaytarib ololmaydi.",
	"biz_s3_c2": "Soxta Bitcoin Bitcoin tarmog\u02BBi orqali yuborilishi mumkin emas, bu biznesingizga zarar yetkazadigan firibgarlik operatsiyalari haqida tashvishlanmasligingiz kerakligini anglatadi.",
	"biz_s4": "Ko\u02BBproq mijoz jalb qiling",
	"biz_s4_c1": "Millionlab odamlar Bitcoin egasi va uni qabul qiladigan joylarda sarflashni xohlaydi.",
	"biz_s4_c2": "Bitcoin qabul qilish orqali biznesingiz Bitcoin savdogar xaritalarida ro\u02BByxatga olinishi va yangi mijozlarga bepul murojaat qilishi mumkin.",
	"biz_s4_c3": "Bitcoin qabul qilish 100% bepul. Shartnoma yoki yashirin to\u02BBlov yo\u02BBq."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Bitcoin biznes uchun nima uchun foydali ekanligini bilib oling",
	"why_header": "BITCOIN BIZNES UCHUN FOYDALI",
	"why_good_for_you": "BITCOIN SIZ UCHUN HAM FOYDALI!",
	"why_learn_more_lowercase": "Ko\u02BBproq bilib oling.",
	"why_s1": "Bitcoinning inflyatsiyasi yo\u02BBq",
	"why_s1_c1": "Inflyatsiya yo\u02BBqdan ko\u02BBproq pul bosilganda yoki yaratilganda yuzaga keladi. Bu pulingizning vaqt o\u02BBtishi bilan qadrsizlanishiga olib keladi.",
	"why_s1_c2": "Bitcoinning qat\u02BCiy taklifi bor, ya\u02BCni hech kim ko\u02BBproq Bitcoin bosa olmaydi.",
	"why_s2": "Bitcoinda bank hujumlari bo\u02BBlmaydi",
	"why_s2_c1": "So\u02BBnggi yillarda bir qancha Amerika banklari bank hujumlari tufayli qulab tushdi.",
	"why_s2_c2": "Banklar pulingizni shunchaki saqlab turish o\u02BBrniga, investitsiya qiladi va qarzga beradi. Agar bu investitsiyalar muvaffaqiyatsiz bo\u02BBlsa, pulingizni qaytarib berish uchun yetarli mablag\u02BBlari qolmaydi.",
	"why_s2_c3": "Va FDIC sug\u02BBurta fondi o\u02BBzi sug\u02BBurtalagan har 100 dollarning atigi 1 dollariga ega.",
	"why_s3": "Bitcoin ruxsatsiz ishlaydi",
	"why_s3_c1": "An\u02BBanaviy moliya tarmoqlaridan farqli o\u02BBlaroq, Bitcoin foydalanish uchun ruxsat talab qilmaydi.",
	"why_s3_c2": "Bu hech kim hech qanday sababga ko\u02BBra sizning Bitcoin ishlatishingizni to\u02BBxtata olmasligini anglatadi. Bu siz senzura yoki musodara qilish xavfisiz foydalanishingiz mumkin bo\u02BBlgan birinchi moliyaviy tarmoqdir.",
	"why_s4": "Bitcoin yaxshiroq dunyo qurayapti",
	"why_s4_c1": "Bitcoin yaxshiroq dunyo qurayotgan noto\u02BBg\u02BBri tushunilgan texnologiyadir.",
	"why_s4_c2": "Bitcoin inson huquqlari himoyachilariga ozodlik uchun kurashda yordam berdi, global metan chiqindilarini kamaytirdi, milliy bog\u02BBlarni saqlab qoldi va yana ko\u02BBp narsalarni amalga oshirdi."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Biznesingizda Bitcoin to\u02BBlovlarini qabul qiling",
	"guide_header": "BIZNESINGIZDA BITCOIN QABUL QILISHGA TAYYORMISIZ?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Bitcoin qabul qilish haqida tez-tez beriladigan savollar",
	"faq_description": "Biznesingizda Bitcoin to\u02BBlovlarini qabul qilish haqida savollaringiz bormi?",
	"faq_header": "BITCOIN TO\u02BBLOVLARINI QABUL QILISH HAQIDA SAVOLLARINGIZ BORMI?",
	"faq_s1": "Bitcoin nima?",
	"faq_s1_c1": "Bitcoin ikki narsadir: raqamli pul va kompyuter tarmog\u02BBi.",
	"faq_s1_c2": "Bitcoin tarmog\u02BBi orqali boshqa odamlarga bevosita bitcoin (raqamli pul) yuborishingiz mumkin.",
	"faq_s1_c3": "Bitcoin tarmog\u02BBi banklar va kredit karta kompaniyalari kabi vositachilar yoki markaziy hokimiyatlarssiz ishlaydi, shuning uchun ularning tranzaksiya komissiyalaridan qochishingiz mumkin.",
	"faq_s1_c4": "Bitcoin tranzaksiyalari tezda (10 daqiqa) yakunlanadi va hech qachon bekor qilinmaydi, shuning uchun pulingiz sizga tegishli ekanligini bilib tinch uxlashingiz mumkin.",
	"faq_s2": "Bitcoin biznesimga qanday foyda keltirishi mumkin?",
	"faq_s2_c1": "Bitcoin pastroq komissiyalar bilan to\u02BBlov olish va ko\u02BBproq mijoz jalb qilish imkonini beradi. Bitcoin to\u02BBlovlari minimal summasi yo\u02BBq past komissiyalarga ega, bir zumda amalga oshiriladi va qaytarib olish hamda firibgarlikka chidamli.",
	"faq_s2_c2": "Bitcoin qabul qilish bepul va biznesingizni Bitcoin savdogar xaritalarida ro\u02BByxatga olib, Bitcoin foydalanuvchilari sizni oson topishini ta\u02BCminlaydi.",
	"faq_s2_c3": "Bitcoin biznes uchun foydali bo\u02BBlishining barcha usullarini ko\u02BBring.",
	"faq_s3": "Bitcoin to\u02BBlovlarini qanday qabul qilaman?",
	"faq_s3_c1": "Bitcoin to\u02BBlovlarini qabul qilish uchun sizga faqat bepul Bitcoin hamyoni kerak.",
	"faq_s3_c2": "Hamyon yo\u02BBriqnomamiz sizni tez va oson tayyorlaydi, shuning uchun bugundan Bitcoin qabul qilishning afzalliklaridan foydalanishni boshlashingiz mumkin!",
	"faq_s3_c3": "Hamyon yo\u02BBriqnomasini ko\u02BBring",
	"faq_s4": "Olgan Bitcoin to\u02BBlovlarimni mahalliy valyutaga aylantirsam bo\u02BBladimi?",
	"faq_s4_c1": "Ha! Gibrid hamyon bilan olgan Bitcoin to\u02BBlovlaringizni to\u02BBlov olinishi bilanoq avtomatik ravishda mahalliy valyutaga aylantirishingiz mumkin.",
	"faq_s4_c2": "Hamyon yo\u02BBriqnomamiz tez va oson sozlashda sizga yordam beradi.",
	"faq_s4_c3": "Olgan to\u02BBlovlaringizning bir qismini Bitcoin sifatida saqlashni ham tanlashingiz mumkin. Bitcoinda jamg\u02BBarmaning ko\u02BBplab afzalliklari bor:",
	"faq_s4_c4": "Bitcoin to\u02BBliq zaxira moliya tizimidir.",
	"faq_s4_c5": "Bitcoinning inflyatsiyasi yo\u02BBq.",
	"faq_s4_c6": "Bu afzalliklar Bitcoinni uzoq muddatli pul jamg\u02BBarish uchun ajoyib usul qiladi.",
	"faq_s4_c7": "Barcha Bitcoin to\u02BBlovlarini dollarga aylantirmoqchi bo\u02BBlsangiz ham, ancha past komissiyalar bilan to\u02BBlov olish va ko\u02BBproq potentsial mijozlarga erishishning afzalliklaridan bahramand bo\u02BBlasiz.",
	"faq_s5": "Yuzma-yuz Bitcoin to\u02BBlovlarini qabul qilsam bo\u02BBladimi?",
	"faq_s5_c1": "Ha! Bitcoin hamyoni bilan yuzma-yuz Bitcoin to\u02BBlovlarini qabul qilish oson.",
	"faq_s5_c2": "Hamyon yo\u02BBriqnomamiz biznesingiz uchun eng yaxshisini tanlashga yordam beradi.",
	"faq_s5_c3": "Hamyon yo\u02BBriqnomasini ko\u02BBring",
	"faq_s6": "Onlayn Bitcoin to\u02BBlovlarini qabul qilsam bo\u02BBladimi?",
	"faq_s6_c1": "Ha! Mavjud onlayn do\u02BBkoningiz bilan onlayn Bitcoin to\u02BBlovlarini qabul qilish oson.",
	"faq_s6_c2": "Ko\u02BBproq ma\u02BClumot uchun hamyon yo\u02BBriqnomamizni ko\u02BBring.",
	"faq_s7": "Mijozlarimga Bitcoin qabul qilishimni qanday bildirsam bo\u02BBladi?",
	"faq_s7_c1": "Biz biznesingizda ko\u02BBrsatishingiz va mijozlaringizga Bitcoin qabul qilishingizni bildirish uchun bepul \u02BBBu yerda Bitcoin qabul qilinadi\u02BB stikerlari taqdim etamiz.",
	"faq_s7_c2": "Stiker buyurtma berish uchun bu yerni bosing.",
	"faq_s7_c3": "Shuningdek, biznesingizni bepul Bitcoin savdogar xaritalarida ro\u02BByxatga olishingiz va Bitcoinlarini qabul qiladigan bizneslarda sarflashni xohlaydigan millionlab Bitcoin foydalanuvchilariga erishishingiz mumkin.",
	"faq_s7_c4": "Hozir ro\u02BByxatdan o\u02BBting.",
	"faq_s8": "Bitcoin qabul qilish orqali qanday ko\u02BBproq mijoz jalb qilsam bo\u02BBladi?",
	"faq_s8_c1": "Bitcoinlarini qabul qiladigan bizneslarda sarflashni xohlaydigan millionlab Bitcoin foydalanuvchilari bor.",
	"faq_s8_c2": "Bitcoin to\u02BBlovlarini qabul qilish orqali biznesingiz bepul Bitcoin savdogar xaritalarida ro\u02BByxatga olinishi va yangi potentsial mijozlarga erishishi mumkin.",
	"faq_s8_c3": "Hozir ro\u02BByxatdan o\u02BBting.",
	"faq_s9": "Bitcoin qabul qilishning narxi qancha?",
	"faq_s9_c1": "Biznesingizda Bitcoin qabul qilish 100% bepul. Shartnoma yoki yashirin to\u02BBlov yo\u02BBq.",
	"faq_s9_c2": "Hamyon yo\u02BBriqnomamizni ko\u02BBring va bugundan Bitcoin to\u02BBlovlarini qabul qilishni boshlang."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Bizneslar uchun Bitcoin buxgalteriya yo\u02BBriqnomasi",
	"accounting_description": "Biznes buxgalteriyangizdagi Bitcoin to\u02BBlovlarini qanday to\u02BBg\u02BBri qayd qilishni o\u02BBrganing.",
	"accounting_header": "BITCOIN BUXGALTERIYA YO\u02BBRIQNOMASI",
	"accounting_s1_c1": "Bitcoin qabul qilishning pastroq komissiyalar bilan to\u02BBlov olish va ko\u02BBproq mijoz jalb qilish kabi ko\u02BBplab afzalliklari bor.",
	"accounting_s1_c2": "Hamyon yo\u02BBriqnomamizdagi gibrid hamyonni ishlatayotgan va olgan Bitcoinning 100%ini avtomatik dollarga sotayotgan bo\u02BBlsangiz, mavjud buxgalteriyangizdagi hech narsani o\u02BBzgartirishingiz shart emas.",
	"accounting_s1_c3": "Hamyon yo\u02BBriqnomasini ko\u02BBring.",
	"accounting_s1_c4": "Biroq, agar olgan Bitcoin to\u02BBlovlaringizning bir qismini Bitcoin sifatida saqlayotgan bo\u02BBlsangiz, buxgalteriyaniz uchun ba\u02BCzi ma\u02BClumotlarni kuzatib borishingiz kerak bo\u02BBladi. Birinchi qarashda qo\u02BBrqinchli tuyulishi mumkin, lekin aslida juda oddiy.",
	"accounting_s1_c5": "Eslatma: Bu yo\u02BBriqnoma faqat ma\u02BClumot berish maqsadida va soliq maslahat sifatida emas.",
	"accounting_s1_c6": "Soliq maslahatiga muhtoj bo\u02BBlsangiz, Bitcoin buxgalteriyasi bo\u02BByicha ixtisoslashgan buxgalteriya firmasi Satoshi Pacioli Accounting Services-ni tavsiya qilamiz.",
	"accounting_s2": "XARAJAT ASOSINI KUZATISH",
	"accounting_s2_c1": "Xarajat asosini kuzatish dollar buxgalteriyasi va Bitcoin buxgalteriyasi o\u02BBrtasidagi eng katta farq bo\u02BBladi. Biznesingizga to\u02BBliq Bitcoin nuqtai nazaridan qarasangiz ham, soliq deklaratsiyangizda har bir tranzaksiyaning dollar qiymatini hisobot qilishingiz kerak.",
	"accounting_s2_c2": "QuickBooks ishlatayotgan bo\u02BBlsangiz, buni Bitcoin Sync plaginasi bilan avtomatik qilishingiz mumkin.",
	"accounting_s2_c3": "QuickBooks ishlatmayotgan bo\u02BBlsangiz, Bitcoin buxgalteriyasi bo\u02BByicha ixtisoslashgan Satoshi Pacioli Accounting Services-ni tavsiya qilamiz.",
	"accounting_s2_c4": "Qo\u02BBlda kuzatish uchun olgan Bitcoin miqdorini va o\u02BBsha kundagi Bitcoin tranzaksiyasining dollar qiymatini yozib oling.",
	"accounting_s2_c5": "Joriy Bitcoin dollar narxini bu yerda ko\u02BBrishingiz mumkin.",
	"accounting_s2_c6": "Bu ma\u02BClumotlarni Excel jadvalida kuzating va buxgalteringizga yuboring.",
	"accounting_s2_c7": "Bu ma\u02BClumotlarni avtomatik ravishda ham Excelga eksport qilishingiz mumkin.",
	"accounting_s2_c8": "O\u02BBtgan kunlardagi Bitcoinning tarixiy dollar narxini ham ko\u02BBrishingiz mumkin, shuning uchun buni har kuni qilishingiz shart emas.",
	"accounting_s3": "BITCOININGIZNI SARFLASH YOKI SOTISH",
	"accounting_s3_c1": "Hamyon yo\u02BBriqnomamizdagi gibrid hamyonni ishlatayotgan va olgan Bitcoinning 100%ini avtomatik dollarga sotayotgan bo\u02BBlsangiz, mavjud buxgalteriyangizdagi hech narsani o\u02BBzgartirishingiz shart emas.",
	"accounting_s3_c2": "Hamyon yo\u02BBriqnomasini ko\u02BBring.",
	"accounting_s3_c3": "Olgan Bitcoinning bir qismini bir muddat keyin sarflash yoki sotishga qaror qilsangiz, xarajat asosini kuzatgan Excel jadvalingizga sotgan narxni qo\u02BBshishingiz kifoya.",
	"accounting_s3_c4": "Masalan, 1-yanvarda 100 $ qiymatidagi Bitcoin olgan bo\u02BBlsangiz va 1-fevralda yangi qiymati 110 $ bo\u02BBlganda sotish yoki sarflashga qaror qilsangiz, buxgalteriyangizdagi 10 $ kapital daromadni qayd qilishingiz kerak.",
	"accounting_s3_c5": "Bu teskari yo\u02BBnalishda ham ishlashi mumkin. Masalan, 1-yanvarda 100 $ qiymatidagi Bitcoin olgan bo\u02BBlsangiz va 1-fevralda yangi qiymati 90 $ bo\u02BBlganda sotish yoki sarflashga qaror qilsangiz, buxgalteriyangizdagi 10 $ kapital zararni qayd qilishingiz kerak.",
	"accounting_s4": "QO\u02BBSHIMCHA YORDAMGA MUHTOJMAN",
	"accounting_s4_c1": "Bitcoinni biznes buxgalteriyangizdagi qo\u02BBshish bo\u02BByicha qo\u02BBshimcha yordamga muhtoj bo\u02BBlsangiz, Bitcoin buxgalteriyasi bo\u02BByicha ixtisoslashgan Satoshi Pacioli Accounting Services-ni tavsiya qilamiz.",
	"accounting_s4_c2": "Satoshi Pacioli Accounting Services haqida ko\u02BBproq bilib oling."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Bitcoin to\u02BBlovlarini qanday qabul qilish",
	"wallets_header": "TO\u02BBLOV QABUL QILISH UCHUN BEPUL BITCOIN HAMYONI OLING",
	"wallets_intro_1": "Barcha Bitcoin hamyonlari bir-biri bilan mos keladi, shuning uchun mijozlaringiz qaysi hamyonni ishlatsalar ham Bitcoin bilan to\u02BBlov qilishlari mumkin.",
	"wallets_intro_2": "Sof Bitcoin hamyonlari:",
	"wallets_intro_3": "Bular Bitcoinning barcha afzalliklarini ochib beradigan sof Bitcoin hamyonlaridir: vositachi yo\u02BBq, past komissiyalar va qaytarib olish yoki firibgarlik yo\u02BBq.",
	"wallets_intro_4": "Gibrid hamyonlar:",
	"wallets_intro_5": "Bular mijozingiz to\u02BBlov qilgan zahoti Bitcoinning xohlagan foizini dollarga aylantirishga imkon beradi. Komissiyalar hali ham kredit kartalaridan past, lekin sof Bitcoin to\u02BBlovlaridan yuqori.",
	"wallets_intro_6": "Har ikki tur ham Bitcoin qabul qilishning ajoyib usullaridir. Aniq hamyon biznesingizning kattaligi va turiga bog\u02BBliq bo\u02BBladi.",
	"wallets_choice_sole": "yakka bizneslar uchun hamyonlar",
	"wallets_choice_multiple": "bir nechta xodimi bor bizneslar uchun hamyonlar",
	"wallets_choice_online": "onlayn bizneslar uchun hamyonlar",
	"wallets_choice_invoice": "hisob-faktura chiqaradigan bizneslar uchun hamyonlar",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Mavjud Square PoS terminalingiz yoki onlayn do\u02BBkon integratsiyangiz bilan Bitcoin to\u02BBlovlarini qabul qilishingiz mumkin. Bitcoin to\u02BBlovlarini qabul qilish hech qachon bunday oson bo\u02BBlmagan.",
	"wallets_feature_bitcoin_only": "Sof Bitcoin hamyoni",
	"wallets_feature_no_info": "Ma\u02BClumot talab qilinmaydi",
	"wallets_feature_in_person": "Faqat yuzma-yuz to\u02BBlovlar",
	"wallets_feature_settles_bitcoin": "100% Bitcoin sifatida to\u02BBlov",
	"wallets_feature_hybrid": "Gibrid hamyon",
	"wallets_feature_info": "Biznes ma\u02BClumotlari talab qilinadi",
	"wallets_feature_in_person_online": "Yuzma-yuz va onlayn to\u02BBlovlar",
	"wallets_feature_settles_both": "Bitcoin va dollar sifatida to\u02BBlov",
	"wallets_feature_multiple_employees": "Bir nechta xodim qo\u02BBllab-quvvatlashi (BPT)",
	"wallets_feature_self_hosted": "O\u02BBz serveringizda joylash = 0% komissiya",
	"wallets_feature_online_store": "Onlayn do\u02BBkon integratsiyasi",
	"wallets_feature_invoicing": "Bepul hisob-faktura dasturi",
	"wallets_get_wallet": "HAMYON OLING"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Bitcoin savdogar xaritalari \u2014 Biznesingizni bepul ro\u02BByxatga oling",
	"maps_header": "BITCOIN SAVDOGAR XARITALARIGA RO\u02BBYXATDAN O\u02BBTING VA KO\u02BBPROQ MIJOZ JALB QILING",
	"maps_request_details": "Biznes ma\u02BClumotlaringizni quyida kiriting va sizni bepul Bitcoin savdogar xaritalariga qo\u02BBshamiz. Bu Bitcoin foydalanuvchilarining biznesingizni topishi va Bitcoinlarini sizda sarflashini ta\u02BCminlaydi!",
	"maps_view": "Xaritani bu yerda ko\u02BBring."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Biznesingiz 1 dan 2 hafta ichida Bitcoin savdogar xaritalariga qo\u02BBshiladi.",
	"kit_success_2": "Xaritani bu yerda ko\u02BBring."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "\u02BBBu yerda Bitcoin qabul qilinadi\u02BB stikerlari",
	"stickers_header": "BEPUL \u02BBBU YERDA BITCOIN QABUL QILINADI\u02BB STIKERLARI OLING",
	"stickers_request": "Bepul stikerlar oling",
	"stickers_request_details": "Ushbu bepul \u02BBBu yerda Bitcoin qabul qilinadi\u02BB stikerlari bilan mijozlaringizga Bitcoin to\u02BBlovlarini qabul qilishingizni bildiring.",
	"stickers_country_global_print": "Butun dunyo \u2014 O\u02BBzim chop etaman",
	"stickers_request_instructions": "Oddiy oq konvertda uchta \u02BBBu yerda Bitcoin qabul qilinadi\u02BB stikeri olasiz. Biznesingiz uchun uchdan ko\u02BBp stikerga muhtoj bo\u02BBlsangiz, iltimos, bir necha marta so\u02BBrang. Manzil ma\u02BClumotlari bepul stikerlar yuborilgandan keyin o\u02BBchiriladi.",
	"stickers_print_details": "Qaerda yashasangiz ham, o\u02BBzingizning \u02BBBu yerda Bitcoin qabul qilinadi\u02BB stikerlaringizni chop etishingiz mumkin! Stiker fayllari va ko\u02BBrsatmalarni ko\u02BBrish uchun quyida tilingizni bosing.",
	"stickers_request_language": "Tilingizni ko\u02BBrmayapsizmi? Quyidagi formani to\u02BBldirib, o\u02BBz tilingizdagi \u02BBBu yerda Bitcoin qabul qilinadi\u02BB stiker fayllarini so\u02BBrang."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Stikerlaringizni 1 dan 2 hafta ichida oddiy oq konvertda olasiz. Har bir konvertda 3 ta stiker bo\u02BBladi. Biznesingiz uchun 3 tadan ko\u02BBp stikerga muhtoj bo\u02BBlsangiz, iltimos, qo\u02BBshimcha to\u02BBplam so\u02BBrang!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Stiker faylingizni 3 dan 4 hafta ichida yaratib nashr qilamiz. Sabringiz uchun rahmat!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin biznes to\u02BBplami",
	"kit_header": "BITCOIN BIZNES TO\u02BBPLAMINGIZNI CHOP ETING",
	"kit_request": "BEPUL TO\u02BBPLAM SO\u02BBRANG",
	"kit_request_details": "Har bir Bitcoin biznes to\u02BBplami mahalliy biznesni Bitcoin qabul qilishga ishontirshni osonlashtiradigan ikkita broshyura o\u02BBz ichiga oladi.",
	"kit_country_global_print": "Butun dunyo \u2014 O\u02BBzim chop etaman",
	"kit_enter_address": "Pochta manzilingizni kiriting, sizga oddiy oq konvertda bepul Bitcoin biznes to\u02BBplami yuboramiz. Manzil ma\u02BClumotlari to\u02BBplam yuborilgandan keyin o\u02BBchiriladi.",
	"kit_print_details": "Qaerda yashasangiz ham, o\u02BBzingizning broshyuralaringizni chop etish orqali ishtirok etishingiz mumkin! Shuningdek, chop etishdan qochish uchun bizneslarni raqamli biznes to\u02BBplamimizga yo\u02BBnaltirishingiz mumkin.",
	"kit_view_files": "FAYLLARNI KO\u02BBRING",
	"kit_digital_kit": "RAQAMLI TO\u02BBPLAM",
	"kit_resources": "HAR BIR TO\u02BBPLAM USHBU BEPUL RESURSLARGA MUROJAAT QILADI"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Bitcoin biznes to\u02BBplamingizni 1 dan 2 hafta ichida oddiy oq konvertda olasiz."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "O\u02BBzingizning Bitcoin biznes to\u02BBplamingizni chop eting",
	"english_bbk_files_description": "Broshyura fayllarini bu yerda yuklab oling.",
	"english_header": "INGLIZCHA BITCOIN BIZNES TO\u02BBPLAM BROSHYURALARINGIZNI CHOP ETING"
});

console.log(`\nDone! Created 14 business files.`);
