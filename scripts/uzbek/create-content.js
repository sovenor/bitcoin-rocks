/**
 * Creates Uzbek (uz) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoinda bank hujumlari bo\u02BBlmaydi",
	"bank_runs_header": "BITCOINDA BANK HUJUMLARI BO\u02BBLMAYDI",
	"bank_runs_header_2": "LEKIN BANKINGIZDA BO\u02BBLADI",
	"bank_runs_what": "BANK HUJUMI NIMA?",
	"bank_runs_what_content_1": "Bank hujumi juda ko\u02BBp odam bir vaqtning o\u02BBzida bankdan pulini yechib olishga harakat qilganda sodir bo\u02BBladi.",
	"bank_runs_what_content_2": "Agar banklar yechimlarni qondirish uchun yetarli pulga ega bo\u02BBlmasa, bank hujumi paytida butunlay qulab tushishi mumkin.",
	"bank_runs_how": "BANK HUJUMLARI QANDAY SODIR BO\u02BBLADI?",
	"bank_runs_how_content_1": "Bankchilik tizimimiz \u02BBqisman zaxira\u02BB tizimidir, ya\u02BCni banklar pulingizni kassada saqlab, sarflashingiz yoki yechib olishingizni kutmaydi.",
	"bank_runs_how_content_2": "Buning o\u02BBrniga bank pulingizni oladi va qarzga beradi yoki investitsiya qiladi. Bu pulingizni uzoq muddatga qulflab qo\u02BByishi mumkin, lekin bank sizga istalgan vaqt yechib olishingiz mumkinligini va\u02BCda qiladi.",
	"bank_runs_how_content_3": "Bank pulingizni allaqachon qarzga bergan yoki investitsiya qilgandan keyin yechib olishga harakat qilganingizda nima bo\u02BBladi?",
	"bank_runs_how_content_4": "Yechayotgan faqat siz bo\u02BBlsangiz muammo yo\u02BBq. Bank boshqa birining pulini olib sizga beradi. Lekin bir vaqtning o\u02BBzida juda ko\u02BBp kishi yechishni xohlasa-chi?",
	"bank_runs_how_content_5": "AQShdagi ko\u02BBplab odamlar buni 2023-yil mart oyida Silicon Valley Bank hujumi paytida bilib oldi.",
	"bank_runs_how_content_6": "Bank mijozlarining pulini 30 yilgacha muddatli davlat obligatsiyalariga investitsiya qilgan edi. Bundan ham yomoni, bu obligatsiyalarning qiymati yaqinda keskin tushgan edi, shuning uchun Silicon Valley Bank investorlarining pulini qaytarish uchun obligatsiyalarni sota olmadi. Bankrot bo\u02BBlgan edi. Investorlarining yechimlarini qondirish uchun yetarli puli yo\u02BBq edi.",
	"bank_runs_how_content_7": "Ko\u02BBproq odam buni bilgan sayin, muammo yanada kuchaydi. Ko\u02BBproq yechim talablari keldi, lekin ko\u02BBpchiligi amalga oshmadi. Minglab bizneslar bankning qulashi tufayli xodimlariga to\u02BBlov qila olmasligini angladi.",
	"bank_runs_how_content_8": "FDIC aralashib, investorlarni tiklashga rozi bo\u02BBldi. Muammo hal bo\u02BBldimi? Unchalik emas...",
	"bank_runs_fdic": "FDIC SUG\u02BBURTA PULIMNI HIMOYA QILADIMI?",
	"bank_runs_fdic_content_1": "FDIC sug\u02BBurtasi bank qulashi holatida bank omonatchilarini himoya qilish uchun mo\u02BBljallangan. Omonatlar har bir omonatchi uchun 250,000 $gacha sug\u02BBurtalangan. Ajoyib eshitiladiku, to\u02BBg\u02BBrimi?",
	"bank_runs_fdic_content_2": "Unchalik emas. Bank qulaganda, FDIC pulni qaerdan topadi? 125 milliard dollarlik sug\u02BBurta fondiga ega.",
	"bank_runs_fdic_content_3": "Bu ko\u02BBp puldek tuyuladi, sug\u02BBurtalagan omonat miqdori bilan solishtirganga qadar: taxminan 10 trillion ya\u02BCni 10,000 milliard dollar.",
	"bank_runs_fdic_content_4": "FDIC o\u02BBz veb-saytida sug\u02BBurta fondida omonatlarning atigi 1%dan biroz ko\u02BBprog\u02BBini qoplaydigan pul borligini ko\u02BBrsatadi.",
	"bank_runs_fdic_content_5": "FDIC sug\u02BBurta fondidan oshib ketadigan bank qulashi holatida, AQSh hukumati investorlarni tiklash uchun pul bosishi ehtimoldan yiroq emas (lekin kafolatlanmagan).",
	"bank_runs_fdic_content_6": "Ammo pul bosish inflyatsiyaga sabab bo\u02BBladi, shuning uchun bu ajoyib yechim emas.",
	"bank_runs_safe": "QISMAN ZAXIRA ISHLATMAYDIGAN BANKLAR BORMI?",
	"bank_runs_safe_content_1": "Ba\u02BCzi banklar investorlarning mablag\u02BBlarini qarzga bermaydigan yoki investitsiya qilmaydigan \u02BBxavfsiz banklar\u02BB bo\u02BBlishga harakat qilgan.",
	"bank_runs_safe_content_2": "Bu xavfsiz banklarning bank hujumi xavfi nolga teng bo\u02BBlsada, omonatlari Federal Zaxira tomonidan rad etilgan. Bu qonuniy ravishda bank sifatida faoliyat yurita olmasliklarini anglatadi.",
	"bank_runs_safe_content_3": "Faoliyatlari to\u02BBsib qo\u02BByilgani uchun, bugungi kunda qisman zaxira ishlatmaydigan hech qanday bank yo\u02BBq.",
	"bank_runs_safe_content_4": "Yaxshiyamki, o\u02BBz bankingiz sifatida qisman zaxira tizimidan chiqishning bir yo\u02BBli bor. Yo\u02BBq, yostiq ostiga naqd pul yashirish haqida gapirayotganmiz emas.",
	"bank_runs_safe_content_5": "Naqd pulda jamg\u02BBarish hali ham inflyatsiyaga nisbatan himoyasiz.",
	"bank_runs_safe_content_6": "Bitcoin haqida gapiryapmiz: o\u02BBz bankingiz bo\u02BBlish imkonini beruvchi yangi moliyaviy tizim.",
	"bank_runs_protect": "BITCOIN MENI BANK HUJUMLARIDAN HIMOYA QILA OLADIMI?",
	"bank_runs_protect_content_1": "Ha, Bitcoin to\u02BBliq zaxirali moliyaviy tizim.",
	"bank_runs_protect_content_2": "Bitcoiningizni o\u02BBz hamyoningizga o\u02BBtkazganingizda Bitcoinda bank hujumlari imkonsiz. Bitcoiningizni birzhada yoki Bitcoin ETF kabi o\u02BBramda qoldirmang.",
	"bank_runs_protect_content_3": "O\u02BBz hamyoningizga qanday o\u02BBtkazishni bilish uchun oddiy Bitcoin hamyon yo\u02BBriqnomamizni ko\u02BBring.",
	"bank_runs_protect_content_4": "Bitcoin bilan nihoyat pulingiz nazoratini o\u02BBz qo\u02BBlingizga olishingiz mumkin."
});

writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Bitcoin hamyon yo\u02BBriqnomasi",
	"wallets_description": "Muhim jihatlarda farqlanadigan ko\u02BBplab turli Bitcoin hamyonlari mavjud. Hamyon siz uchun to\u02BBg\u02BBri ekanligini ushbu oddiy savollarni berish orqali bilishingiz mumkin.",
	"wallets_header": "BITCOININGIZNI XAVFSIZ QANDAY SAQLASH",
	"wallets_s1_c1": "Bitcoin hamyonlari bir-biri bilan mos keladi, shuning uchun qaysi hamyonni ishlatsa ham herkimga Bitcoin yuborishingiz mumkin.",
	"wallets_s1_c2": "Muhim jihatlarda farqlanadigan ko\u02BBplab turli Bitcoin hamyonlari mavjud. Hamyon siz uchun to\u02BBg\u02BBri ekanligini ushbu oddiy savollarni berish orqali bilishingiz mumkin:",
	"wallets_question_1": "O\u02BBZ NAZORATIDAGI HAMYONMI?",
	"wallets_s2_c1": "Bitcoinning innovatsiyalaridan biri bank kabi saqlovchiga ishonmasdan saqlash qobiliyatidir.",
	"wallets_s2_c2": "Bitcoiningizni birzhada yoki ETF-da saqlayotgan bo\u02BBlsangiz, Bitcoinning erkinlik afzalliklaridan mahrum bo\u02BBlasiz.",
	"wallets_s2_c3": "O\u02BBz nazoratidagi hamyonlar Bitcoinning to\u02BBliq kuchini ochadi: erkin pul.",
	"wallets_s2_c4": "O\u02BBz nazoratidagi hamyon bilan pulingizni sarflash yoki o\u02BBtkazish qobiliyatiga ega yagona shaxs sizsiz. O\u02BBz nazoratidagi hamyon ishlatayotganda hech kim pul yuborishingiz yoki olishingizni to\u02BBxtata olmaydi.",
	"wallets_s2_c5": "O\u02BBz nazoratidagi hamyonlarga emanatsiz hamyonlar ham deyiladi.",
	"wallets_s3_c1": "Emanat hamyonlar pulingiz ustidan nazoratga ega bo\u02BBlmagan hamyonlardir.",
	"wallets_s3_c2": "Bu hamyonlar pulingizga kirish uchun uchinchi tomonga ishonishingiz kerak bo\u02BBlgan bankchilik tizimiga ko\u02BBproq o\u02BBxshaydi. Bitcoiningiz birzhada bo\u02BBlsa, emanat hamyon ishlatyapsiz.",
	"wallets_s3_c3": "Bitcoin ETF sotib olgan bo\u02BBlsangiz, o\u02BBz nazoratiga chiqishga ruxsat bermaydigan emanat hamyon ishlatyapsiz.",
	"wallets_s3_c4": "Emanat hamyonlar qulay ko\u02BBrinishi mumkin, lekin emanatchi texnik jihatdan barcha foydalanuvchi mablag\u02BBlarini istalgan vaqt o\u02BBg\u02BBirlash qobiliyatiga ega.",
	"wallets_s3_c5": "Sizning kalitlaringiz bo\u02BBlmasa, sizning tangalaringiz emas!",
	"wallets_question_2": "ISSIQ MI YOKI SOVUQMI?",
	"wallets_s4_c1": "Sovuq hamyonlar Bitcoiningizning kalitlarini hech qachon internetga ta\u02BCsir qilmaydigan tarzda saqlaydi.",
	"wallets_s4_c2": "Bu o\u02BBg\u02BBrining Bitcoiningizni o\u02BBg\u02BBirlashga harakat qilish uchun foydalanishi mumkin bo\u02BBlgan hujum vektorlarini sezilarli darajada cheklaydi va tez-tez o\u02BBtkazish kerak bo\u02BBlmagan katta miqdordagi Bitcoin uchun eng yaxshisi.",
	"wallets_s4_c3": "Sovuq hamyonni sovuq saqlash deb ham ataladigan uzoq muddatli jamg\u02BBarma hisobi deb tushunishingiz mumkin.",
	"wallets_s5_c1": "Issiq hamyonlar Bitcoiningizning kalitlarini telefoningiz kabi internetga ulangan qurilmada saqlaydi.",
	"wallets_s5_c2": "Issiq hamyonlar odatda xavfsiz hisoblanadi, lekin sovuq hamyonlarga nisbatan ko\u02BBproq zaiflikka ega bo\u02BBlishi mumkin.",
	"wallets_s5_c3": "Issiq hamyonni jismoniy hamyon deb tushunishingiz mumkin. Barcha jamg\u02BBarmangizni ichida saqlamaysiz, lekin sarflash uchun biroz pul saqlayz.",
	"wallets_s5_c4": "Issiq hamyonlar sovuq saqlashdan barcha jamg\u02BBarmangizni yechmasdan Bitcoin sarflashni osonlashtiradi.",
	"wallets_question_3": "TIKLASH IBORASI QANDAY ZAXIRALANADI?",
	"wallets_s6_c1": "Bitcoin hamyon o\u02BBrnatganingizda, qurilmangiz tiklash iborasi yaratadi. Bu tiklash iborasi (urug\u02BB iborasi deb ham ataladi) 12 yoki 24 so\u02BBzdan iborat.",
	"wallets_s6_c2": "Hamyoningizga kirishni yo\u02BBqotsangiz yoki qurilmangiz buzilsa, bu tiklash iborasini yangi hamyonga kiritib Bitcoiningizga qayta kirishingiz mumkin.",
	"wallets_s6_c3": "Ko\u02BBpchilik hamyonlar tiklash iborasini yozish uchun qog\u02BBoz o\u02BBz ichiga oladi, lekin ko\u02BBplab odamlar bu iborani po\u02BBlat metall yuzaga zaxiralashni afzal ko\u02BBradi. Bu yong\u02BBin yoki suv toshqini kabi tabiiy ofat holatida tiklash iborasini yo\u02BBqotish ehtimolini sezilarli darajada kamaytiradi.",
	"wallets_s6_c4": "Jameson Lopp to\u02BBg\u02BBrisini tanlashga yordam berish uchun 70 ta po\u02BBlat zaxira mahsulotini sinab ko\u02BBrgan.",
	"wallets_s6_c5": "Jamesonning metall Bitcoin zaxira yo\u02BBriqnomasini bu yerda ko\u02BBring.",
	"wallets_s6_c6": "Yoki aylantrishni davom ettiring va Bitcoin hamyon variantlarini kashf qiling.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN", "wallets_coldcard_mk5": "COLDCARD MK5", "wallets_coldcard_q": "COLDCARD Q", "wallets_blockstream_jade": "BLOCKSTREAM JADE", "wallets_foundation_passport": "FOUNDATION PASSPORT", "wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Lightning hamyon yo\u02BBriqnomamizni qidiryapsizmi?",
	"wallets_starter_wallet": "Ajoyib boshlang\u02BBich hamyon", "wallets_mobile_app": "Mobil ilova", "wallets_2fa_support": "2FA qo\u02BBllab-quvvatlashi", "wallets_air_gap_mode": "Air-gap rejimi", "wallets_air_gap_camera": "Air-gap rejimi + kamera", "wallets_bitcoin_only": "Faqat Bitcoin", "wallets_security_features": "Ko\u02BBp sonli xavfsizlik xususiyatlari", "wallets_free": "100% bepul",
	"wallets_coldcard_mk5_costs": "Narxi 189 $", "wallets_coldcard_q_costs": "Narxi 289 $", "wallets_blockstream_jade_costs": "Narxi 79 $", "wallets_foundation_passport_costs": "Narxi 199 $", "wallets_seedsigner_costs": "Qismlar 50 $",
	"wallets_very_affordable": "Juda arzon", "wallets_pair_with_phone": "Telefon bilan juftlang", "wallets_battery": "Qayta zaryadlanadigan batareya", "wallets_build_your_own": "O\u02BBzingiz yasang", "wallets_qwerty_keyboard": "To\u02BBliq QWERTY klaviatura", "wallets_qr_scanner": "QR kod skaneri"
});

writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Bitcoin qanday sotib olinadi \u2014 Bosqichma-bosqich yo\u02BBriqnoma",
	"buy_header": "BITCOIN QANDAY SOTIB OLINADI",
	"buy_intro_c1": "Birinchi marta Bitcoin sotib olish qo\u02BBrqinchli ko\u02BBrinishi mumkin, lekin bosqichlarga bo\u02BBlganingizda aslida juda oddiy.",
	"buy_intro_c2": "Bu yo\u02BBriqnoma sizni xavfsiz Bitcoin sotib olish va o\u02BBz hamyoningizga o\u02BBtkazish jarayonida yo\u02BBlboshchilik qiladi.",
	"buy_step_1_header": "1-QADAM: MAMLAKATINGIZNI TANLANG",
	"buy_step_1_description": "Turli mamlakatlarning Bitcoin sotib olish uchun turli variantlari bor. Eng yaxshi variantlarni ko\u02BBrish uchun mamlakatingizni tanlang.",
	"buy_search_countries": "Mamlakatingizni qidiring",
	"buy_country_united_states": "Amerika Qo\u02BBshma Shtatlari", "buy_country_australia": "Avstraliya", "buy_country_austria": "Avstriya", "buy_country_belgium": "Belgiya", "buy_country_brazil": "Braziliya", "buy_country_canada": "Kanada", "buy_country_france": "Fransiya", "buy_country_germany": "Germaniya", "buy_country_ireland": "Irlandiya", "buy_country_italy": "Italiya", "buy_country_netherlands": "Niderlandiya", "buy_country_new_zealand": "Yangi Zelandiya", "buy_country_spain": "Ispaniya", "buy_country_united_kingdom": "Buyuk Britaniya", "buy_country_argentina": "Argentina", "buy_country_chile": "Chili", "buy_country_colombia": "Kolumbiya", "buy_country_costa_rica": "Kosta-Rika", "buy_country_czech_republic": "Chexiya Respublikasi", "buy_country_denmark": "Daniya", "buy_country_el_salvador": "El Salvador", "buy_country_estonia": "Estoniya", "buy_country_finland": "Finlyandiya", "buy_country_greece": "Gretsiya", "buy_country_guatemala": "Gvatemala", "buy_country_hong_kong": "Gonkong", "buy_country_hungary": "Vengriya", "buy_country_iceland": "Islandiya", "buy_country_india": "Hindiston", "buy_country_israel": "Isroil", "buy_country_japan": "Yaponiya", "buy_country_latvia": "Latviya", "buy_country_lithuania": "Litva", "buy_country_luxembourg": "Lyuksemburg", "buy_country_malta": "Malta", "buy_country_mexico": "Meksika", "buy_country_norway": "Norvegiya", "buy_country_panama": "Panama", "buy_country_poland": "Polsha", "buy_country_portugal": "Portugaliya", "buy_country_romania": "Ruminiya", "buy_country_singapore": "Singapur", "buy_country_slovakia": "Slovakiya", "buy_country_slovenia": "Sloveniya", "buy_country_south_africa": "Janubiy Afrika", "buy_country_south_korea": "Janubiy Koreya", "buy_country_sweden": "Shvetsiya", "buy_country_switzerland": "Shveytsariya", "buy_country_thailand": "Tailand", "buy_country_turkey": "Turkiya", "buy_country_ukraine": "Ukraina", "buy_country_uruguay": "Urugvay",
	"buy_step_2_header": "2-QADAM: TO\u02BBLOV USULINI TANLANG",
	"buy_step_2_description": "Bitcoin sotib olishning ikkita asosiy usuli bor: bank o\u02BBtkazmasi yoki naqd pul. Har birining o\u02BBz afzalliklari bor.",
	"buy_method_bank_transfer": "BANK O\u02BBTKAZMASI", "buy_method_bank_fast": "Tez va oson", "buy_method_bank_less_private": "Kamroq maxfiy",
	"buy_method_bank_description": "Bank o\u02BBtkazmalari Bitcoin sotib olishning eng keng tarqalgan usuli. Tez, qulay va odatda pastroq komissiyali.",
	"buy_method_choose_bank": "Bank o\u02BBtkazmasini tanlang", "buy_method_cash": "NAQD PUL", "buy_method_cash_private": "Yanada maxfiy", "buy_method_cash_limited": "Cheklangan variantlar",
	"buy_method_cash_description": "Naqd xaridlar ko\u02BBproq maxfiylik taklif qiladi, lekin kamroq variant bor va yuzma-yuz uchrashuv yoki Bitcoin bankomati ishlatish talab qilinishi mumkin.",
	"buy_method_choose_cash": "Naqd pulni tanlang",
	"buy_step_3_header": "3-QADAM: SOTIB OLISH VARIANTLARI",
	"buy_step_3_description": "Mana mamlakatingiz va to\u02BBlov usuli uchun eng yaxshi Bitcoin sotib olish variantlari:",
	"buy_platform_recommended": "TAVSIYA ETILGAN",
	"buy_platform_strike_description": "Strike past komissiyalar va bir zumda Lightning Network qo\u02BBllab-quvvatlashi bilan Bitcoin sotib olishning eng tez va oson usuli.",
	"buy_platform_swan_description": "Swan Bitcoin to\u02BBg\u02BBri investitsiya va ta\u02BClim resurslari bilan faqat Bitcoin xizmatlarida ixtisoslashgan.",
	"buy_platform_river_description": "River ta\u02BClim va xavfsizlikka e\u02BBtiborni qaratib Bitcoin sotib olish, qazib olish va saqlash xizmatlarini taklif qiladi.",
	"buy_platform_coinsquare_description": "Coinsquare kuchli tartibga solish muvofiqligi va mijozlarga xizmat ko\u02BBrsatishga ega Kanada Bitcoin birzhasi.",
	"buy_platform_kraken_description": "Kraken ilg\u02BBor savdo xususiyatlari va kuchli xavfsizlikka ega ko\u02BBhna Bitcoin birzhasi.",
	"buy_platform_atm_description": "Bitcoin bankomatlari naqd pul bilan bir zumda Bitcoin sotib olish imkonini beradi. Coin ATM Radar yordamida eng yaqinini toping.",
	"buy_platform_bisq_description": "Bisq KYC talab qilmasdan maxfiy Bitcoin savdosi qilish imkonini beruvchi markazsizlashtirilgan tengdosh-dan-tengdoshga birzha.",
	"buy_platform_feature_instant": "Bir zumda sotib olish", "buy_platform_feature_low_fees": "Past komissiyalar", "buy_platform_feature_lightning": "Lightning Network", "buy_platform_feature_dca": "Muntazam investitsiya", "buy_platform_feature_education": "Ta\u02BClim resurslari", "buy_platform_feature_withdrawal": "Oson yechim", "buy_platform_feature_mining": "Bitcoin qazib olish", "buy_platform_feature_custody": "Saqlash xizmatlari", "buy_platform_feature_canadian": "Kanada yo\u02BBnalishli", "buy_platform_feature_regulated": "Tartibga solingan birzha", "buy_platform_feature_support": "Mijozlarga xizmat", "buy_platform_feature_established": "Ko\u02BBhna platforma", "buy_platform_feature_security": "Kuchli xavfsizlik", "buy_platform_feature_advanced": "Ilg\u02BBor xususiyatlar", "buy_platform_feature_cash": "Naqd sotib olish", "buy_platform_feature_anonymous": "Yanada anonim", "buy_platform_feature_p2p": "Tengdosh-dan-tengdoshga", "buy_platform_feature_private": "Maxfiy savdo", "buy_platform_feature_decentralized": "Markazsizlashtirilgan",
	"buy_platform_relai_description": "Relai o\u02BBz nazoratidagi hamyon, avtomatik investitsiya xususiyatlari va Yevropalik foydalanuvchilar uchun past komissiyalar bilan Shveytsariya markazli faqat Bitcoin ilovasi.",
	"buy_platform_feature_bitcoin_only": "Faqat Bitcoin", "buy_platform_feature_self_custody": "O\u02BBz nazoratidagi hamyon", "buy_platform_feature_auto_invest": "Avtomatik investitsiya rejalari", "buy_platform_feature_european": "Yevropa yo\u02BBnalishli",
	"buy_step_4_header": "4-QADAM: BITCOININGIZNI XAVFSIZ SAQLANG",
	"buy_step_4_c1": "Bitcoin sotib olgandan keyin eng muhim qadam uni shaxsiy kalitlaringizni nazorat qilgan o\u02BBz nazoratidagi hamyonga ko\u02BBchirishdir.",
	"buy_step_4_c2": "Bitcoiningizni birzhada qoldirish xavfli chunki Bitcoinga aslida ega bo\u02BBlgan siz emas \u2014 birzha ega.",
	"buy_step_4_c3": "O\u02BBz shaxsiy kalitlaringizni nazorat qilganingizda, Bitcoiningiz ustidan haqiqiy mulkchilikka ega bo\u02BBlasiz va hech kim uni sizdan olib qo\u02BByolmaydi.",
	"buy_step_4_c4": "Ehtiyojlaringiz uchun to\u02BBg\u02BBri Bitcoin hamyonini qanday tanlashni bilib oling:",
	"buy_cta_wallets": "Bitcoin hamyon yo\u02BBriqnomasini ko\u02BBring"
});

writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Bitcoin Lightning hamyon yo\u02BBriqnomasi",
	"lightning_description": "Lightning hamyonlari shaxsiy suverenitetingizni saqlab, Bitcoinni tez va arzon yuborish imkonini beradi.",
	"lightning_header": "LIGHTNING HAMYON YO\u02BBRIQNOMASI",
	"lightning_s1_c1": "Lightning Bitcoin to\u02BBlovlarini tez va arzon yuborish imkonini beradi.",
	"lightning_s1_c2": "Lightning ishlatishning murosalar keltirishini bilish muhim. Tezroq va arzonroq Bitcoin to\u02BBlovlari evaziga odatda biroz xavfsizlikdan voz kechasiz.",
	"lightning_s1_c3": "Umuman olganda, Lightning faqat kichik miqdordagi bitcoin bilan ishlatilishi kerak. Katta miqdordagi bitcoin har doim apparat hamyonda saqlanishi kerak.",
	"lightning_s1_c4": "Ko\u02BBproq ma\u02BClumot uchun apparat hamyon yo\u02BBriqnomamizni ko\u02BBring.",
	"lightning_s1_c5": "Barcha Lightning hamyonlari teng emas. Qaysi hamyon siz uchun to\u02BBg\u02BBri murosa muvozanatiga ega ekanligini oddiy savolga javob berib bilib oling:",
	"lightning_question_1": "MEN UCHUN TO\u02BBG\u02BBRI MUROSA MUVOZANATI QAYSI?",
	"lightning_s2_c1": "Bitcoinning innovatsiyalaridan biri bank kabi saqlovchiga ishonmasdan saqlash qobiliyati. O\u02BBz nazoratidagi hamyonlar Bitcoinning to\u02BBliq kuchini ochadi.",
	"lightning_s2_c2": "O\u02BBz nazoratidagi hamyon bilan pulingizni sarflash yoki o\u02BBtkazish qobiliyatiga ega yagona shaxs sizsiz. O\u02BBz nazoratidagi hamyon ishlatayotganda hech kim sizni to\u02BBxtata, senzura qila yoki o\u02BBg\u02BBirlay olmaydi. Bularga emanatsiz hamyonlar ham deyiladi.",
	"lightning_s2_c3": "Lightning ishlatishning eng suveren usuli o\u02BBz tuguningizni ishlatishdir.",
	"lightning_s2_c4": "Bu yo\u02BBriqnoma o\u02BBz tuguningizni talab qilmaydigan oddiy Lightning hamyonlariga qaratilgan.",
	"lightning_s2_c5": "Emanatsiz Lightning hamyoni ishlatayotganda ham, hamyon dasturchi zararli ilova yangilanmasini kiritib mablag\u02BBlaringizni o\u02BBg\u02BBirlamasligiga ishonayotganingizni bilish muhim.",
	"lightning_s3_c1": "Emanat hamyonlar pulingiz ustidan nazoratga ega bo\u02BBlmagan hamyonlardir.",
	"lightning_s3_c2": "Bu hamyonlar pulingizga kirish uchun uchinchi tomonga ishonishingiz kerak bo\u02BBlgan bankchilik tizimiga ko\u02BBproq o\u02BBxshaydi. Bitcoiningiz birzhada bo\u02BBlsa, emanat hamyon ishlatyapsiz.",
	"lightning_s3_c3": "Emanat hamyonlar qulay ko\u02BBrinishi mumkin, lekin emanatchi texnik jihatdan barcha foydalanuvchi mablag\u02BBlarini istalgan vaqt o\u02BBg\u02BBirlash qobiliyatiga ega.",
	"lightning_s3_c4": "Ba\u02BCzi odamlar foydalanish qulayligi tufayli kichik miqdordagi bitcoin uchun emanat Lightning hamyonlarini afzal ko\u02BBradi. Faqat esda tuting: sizning kalitlaringiz bo\u02BBlmasa, sizning tangalaringiz emas!",
	"lightning_question_2": "HAMYONINGIZNI TANLANG",
	"lightning_s4_c1": "Bularning barchasini hisobga olib, endi siz uchun to\u02BBg\u02BBri murosa muvozanatiga ega Lightning hamyonini tanlashingiz mumkin.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Ko\u02BBp sonli xususiyatlar", "lightning_mobile_app": "Mobil ilova", "lightning_free": "100% bepul", "lightning_merchants": "Savdogarlar uchun ajoyib", "lightning_starter": "Ajoyib boshlang\u02BBich hamyon", "lightning_browser": "Brauzerda", "lightning_custodial": "To\u02BBliq emanat hamyon",
	"lightning_cta_hardware": "Apparat Bitcoin hamyon yo\u02BBriqnomamizni qidiryapsizmi?"
});

writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "bitcoin.rocks-dan bepul Bitcoin stikerlari",
	"stickers_description": "Ommaviy joyga Bitcoin stikeri yopishtiring va atrofingizdagi odamlarni xabardor qilishga yordam bering.",
	"stickers_header": "BEPUL BITCOIN STIKERLARI",
	"stickers_choose_header": "STIKER TO\u02BBPLAMINGIZNI TANLANG",
	"stickers_choose_c1": "Bizning vazifamiz Bitcoin stikerlarini ommaviy joylarga yopishtirib, ko\u02BBproq odamlarni xabardor qilishga yordam berishdir. Barcha stikerlarimizda quyidagi mavzulardagi ta\u02BClim sahifalariga yo\u02BBnaltiruvchi QR kodlar mavjud:",
	"stickers_choose_c2": "Bitcoin", "stickers_choose_c3": "inflyatsiya",
	"stickers_choose_c4": "Quyidan stiker to\u02BBplami tanlang",
	"stickers_text_pack": "MATN TO\u02BBPLAMI", "stickers_signs_pack": "BELGI TO\u02BBPLAMI",
	"stickers_instructions_1": "Pochta manzilingizni kiriting va sizga bepul Bitcoin stiker to\u02BBplami yuboraylik! Stikerlaringiz oddiy oq konvertda yuboriladi.",
	"stickers_instructions_2": "Manzil ma\u02BClumotlari bepul stikerlar yuborilgandan keyin o\u02BBchiriladi.",
	"stickers_share_header": "STIKER JOYLARINGIZNI ULASHING",
	"stickers_share_c1": "Stiker joylaringizni Nostr-da biz bilan ulashing va boshqalarning stikerlarini qaerga yopishtirayotganini ko\u02BBring.",
	"stickers_btn_share_on_nostr": "NOSTR-DA ULASHING", "stickers_btn_what_is_nostr": "NOSTR NIMA?",
	"stickers_flyers_link_before": "Bu orada, o\u02BBzingizga ", "stickers_flyers_link_text": "Bitcoin varaqalari", "stickers_flyers_link_after": " chop etib yopishtirib, ko\u02BBproq odamlarni xabardor qilishga yordam bering.",
	"stickers_country_global_print": "Butun dunyo \u2014 O\u02BBzim chop etaman", "stickers_country_global_order": "Butun dunyo \u2014 Ommaviy buyurtma berish",
	"placeholder_name_optional": "Ism (ixtiyoriy)", "placeholder_address_line_1": "Manzil 1-qator", "placeholder_address_line_2": "Manzil 2-qator (ixtiyoriy)", "placeholder_city": "Shahar", "placeholder_state": "Shtat", "placeholder_province": "Viloyat", "placeholder_zip_code": "Pochta indeksi", "placeholder_postal_code": "Pochta indeksi", "placeholder_language": "Til", "placeholder_which_stickers": "Qaysi stikerlar?", "placeholder_email_optional": "Bildirishnoma uchun elektron pochta kiriting (ixtiyoriy)"
});

writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "bitcoin.rocks-dan bepul Bitcoin otkritlalari",
	"postcards_description": "Bepul Bitcoin otkritla to\u02BBplami oling va Bitcoinni tanishingiz bilan ulashing.",
	"postcards_header": "OTKRITLA DASTURI YOPILDI",
	"postcards_program_closed_message": "Bepul Bitcoin otkritla dasturimiz tugadi. Pochta orqali Bitcoin ta\u02BClimini tarqatishga yordam bergan barchaga rahmat!",
	"postcards_sticker_alternative_header": "BUNING O\u02BBRNIGA BEPUL BITCOIN STIKERLARI OLING",
	"postcards_sticker_alternative_message": "Bepul stiker dasturimiz bilan Bitcoin xabardorligini tarqatishda davom eting! Bitcoin stikerlarimiz ommaviy joylarda ulashish uchun ideal va ta\u02BClim kontentiga yo\u02BBnaltiruvchi QR kodlarni o\u02BBz ichiga oladi.",
	"postcards_sticker_cta": "BEPUL STIKERLAR OLING",
	"postcards_step_2": "OTKRITLALAR QANDAY KO\u02BBRINGAN EDI",
	"postcards_instructions_4": "Biz bu otkritlalarni tanishingizga Bitcoinni tanishtirshni osonlashtirish uchun yaratdik! Faqat manzil va marka qo\u02BBshib, otkritlani pochta qutisiga tashlang.",
	"postcards_instructions_5": "Bizning vazifamiz Bitcoinni qabul qilishni tezlashtirish. Bepul stikerlar olib, ommaviy joylarga yopishtirib yordam bera olasiz!",
	"postcards_instructions_6": "Hammamiz Bitcoin haqida ko\u02BBproq bilib olishdan foyda ko\u02BBradigan bir necha kishini taniymiz. Ular bilan bugun Bitcoin stikerlarini ulashing!"
});

writeFile(`signs_${lang}.json`, {
	"signs_description": "Bu Bitcoin tabellalarini butun Amerikaga joylashtrishimizga yordam bering!",
	"signs_title": "bitcoin.rocks-dan bepul Bitcoin tabellalari",
	"signs_choose_header": "BU BITCOIN TABELLALARINI BUTUN AMERIKAGA JOYLASHTRISHIMIZGA YORDAM BERGANINGIZ UCHUN RAHMAT!",
	"signs_choose_c1": "Barcha tabellalar tarqatildi! Bizning vazifamiz ta\u02BClim orqali Bitcoinni qabul qilishni tezlashtirishdir.",
	"signs_choose_c2": "Ko\u02BBpchiligingiz bu bepul Bitcoin tabellalarini ommaviy joylarga joylashtirb yordam berdingiz. Barcha tabellalarimizda quyidagi mavzudagi ta\u02BClim sahifasiga yo\u02BBnaltiruvchi QR kodlar bor:",
	"signs_choose_c3": "inflyatsiya",
	"signs_choose_c4": "Ajoyib jamoamiz tufayli minglab odamlarga erishdik va ularning Bitcoin quyontuynuk sayohatidagi birinchi qadamlarini qo\u02BByishiga yordam berdik.",
	"signs_share_header": "TABELLA JOYLARINGIZNI ULASHING",
	"signs_share_c1": "Tabella joylaringizni Nostr-da biz bilan ulashing va boshqalarning tabellalarini qaerga joylashtirayotganini ko\u02BBring.",
	"signs_btn_share_on_nostr": "NOSTR-DA ULASHING", "signs_btn_what_is_nostr": "NOSTR NIMA?",
	"signs_instructions_1": "Pochta manzilingizni kiriting va sizga 10 ta Bitcoin tabellasi yuboraylik!",
	"signs_instructions_2": "Manzil ma\u02BClumotlari bepul tabellalar yuborilgandan keyin o\u02BBchiriladi."
});

writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "bitcoin.rocks-dan bepul Bitcoin varaqalari",
	"flyers_description": "Uyda Bitcoin varaqasi chop eting va atrofingizdagi odamlarni xabardor qilish uchun ommaviy joyga yopishtiring.",
	"flyers_header_1": "CHOP ETING VA YOPISHTIRING",
	"flyers_header_2": "BITCOIN VARAQALARI",
	"flyers_intro_header": "BU BITCOIN VARAQALARINI QANDAY CHOP ETISH VA YOPISHTIRISH",
	"flyers_intro_c1": "Bizning vazifamiz Bitcoin varaqalarini ommaviy joylarga yopishtirib, ko\u02BBproq odamlarni xabardor qilishga yordam berishdir. Bu varaqada quyidagi sahifamizga yo\u02BBnaltiruvchi QR kod bor:",
	"flyers_intro_c2": "ta\u02BClimiy Bitcoin sahifamiz.",
	"flyers_intro_c3": "inflyatsiya",
	"flyers_intro_c4": "Bu varaqani uyda yoki matbaada chop eting. Keyin e\u02BBlon taxtalariga, shahardagi telefon ustunlariga va odamlar ko\u02BBrib Bitcoin haqida bilib oladigan boshqa ommaviy joylarga yopishtiring.",
	"flyers_intro_c5": "Bu orada, bir to\u02BBplam",
	"flyers_intro_c6": "bepul Bitcoin stikerlari",
	"flyers_intro_c7": "so\u02BBrang va ko\u02BBproq odamlarni xabardor qilishga yordam bering.",
	"flyers_btn_download": "VARAQANI YUKLAB OLING", "flyers_btn_print": "VARAQANI CHOP ETING",
	"flyers_share_header": "VARAQA JOYLARINGIZNI ULASHING",
	"flyers_share_c1": "Varaqa joylaringizni Nostr-da biz bilan ulashing va boshqalarning varaqalarini qaerga yopishtirayotganini ko\u02BBring.",
	"flyers_btn_share_on_nostr": "NOSTR-DA ULASHING", "flyers_btn_what_is_nostr": "NOSTR NIMA?"
});

writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Ishtirok eting va Bitcoin tarqatishga yordam bering",
	"get_involved_description": "Bepul resurslarimiz Bitcoin qabul qilishni tarqatishni osonlashtiradi.",
	"get_involved_header": "ISHTIROK ETING",
	"get_involved_header_2": "BITCOIN TARQATING",
	"get_involved_intro_1": "Dunyomizning hozirgi holatida yashash ruhni tushirishi mumkin.",
	"get_involved_intro_2": "Pulimiz buzilgan. Natijada jamiyatning asosiy qismlari ham buzilgan.",
	"get_involved_intro_3": "Agar Bitcoin bilan allaqachon tanish bo\u02BBlsangiz, Bitcoin keltirgan umid hissini bilasiz. Yaxshiroq pul imkon qilgan yaxshiroq kelajakka umid.",
	"get_involved_intro_4": "Ammo atrofizda juda ko\u02BBp odam Bitcoindan bexabar. Siz bilan bir xil buzilgan dunyoda yashaydi, lekin qorong\u02BBulikda yo\u02BBllarini topishga yordam beradigan umid chiroqisiz.",
	"get_involved_intro_5": "Ammo siz buni o\u02BBzgartirishingiz mumkin. Bitcoin keltirgan umidni atrofingizdagi odamlarga tarqatishni osonlashtiradigan bir qancha bepul resurslar yaratdik.",
	"get_involved_sticker_header": "Ommaviy joyga stiker yopishtiring",
	"get_involved_sticker_content_1": "Hech kim bilan gaplashmasdan ham atrofingizdagi odamlarni Bitcoin haqida xabardor qilishga yordam berishingiz mumkin. Bepul Bitcoin stikerlarimizdan birini ommaviy joyga yopishtirishingiz kifoya.",
	"get_involved_sticker_content_2": "Har oyda yuzlab odam bu stikerlardagi QR kodlarni skanerlaydi. Inflyatsiya stikerlari quyidagi sahifaga yo\u02BBnaltiradi:",
	"get_involved_sticker_content_3": "Bitcoin inflyatsiyaga yechim sifatida.",
	"get_involved_sticker_content_4": "Boshqa stikerlar odamlarga qanday",
	"get_involved_sticker_content_5": "Bitcoin yaxshiroq dunyo qurayotganini",
	"get_involved_sticker_content_6": "ko\u02BBrsatadigan ta\u02BClim bosh sahifamizga yo\u02BBnaltiradi.",
	"get_involved_request_a": "SO\u02BBRANG",
	"get_involved_sticker_pack": "STIKER TO\u02BBPLAMI",
	"get_involved_postcard_header": "Otkritla yuboring",
	"get_involved_postcard_content_1": "Bepul otkritlalarimizdan birini yuborib tanishingizga Bitcoin umidini tarqatishga yordam berishingiz mumkin.",
	"get_involved_postcard_content_2": "Har bir otkritlaning orqa tomonida Bitcoin haqida ishontiruvchi matn va ko\u02BBproq ma\u02BClumot uchun QR kod bor.",
	"get_involved_postcard_content_3": "Bitcoin otkritlasi yuborib birovning Bitcoinni yangi ko\u02BBzda ko\u02BBrishiga yordam bera olasiz.",
	"get_involved_postcard_pack": "OTKRITLA TO\u02BBPLAMI",
	"get_involved_business_header": "Biznesni jalb qiling",
	"get_involved_business_content_1": "Bitcoin aylana iqtisodiyotini qurishga yordam berishni xohlaysizmi? Bitcoin biznes to\u02BBplami biznesga Bitcoin to\u02BBlovlarini qabul qilish haqida yondashishni osonlashtiradi.",
	"get_involved_business_content_2": "Har bir biznes to\u02BBplami Bitcoin to\u02BBlovlarini qabul qilishning afzalliklarini ta\u02BCkidlaydigan broshyuralarni o\u02BBz ichiga oladi. Har bir broshyura turli",
	"get_involved_business_content_3": "bepul Bitcoin biznes resurslariga yo\u02BBnaltiradi.",
	"get_involved_business_kit": "BIZNES TO\u02BBPLAMI"
});

console.log(`\nDone! Created 9 content files.`);
