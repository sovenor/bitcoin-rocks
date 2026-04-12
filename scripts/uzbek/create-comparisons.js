/**
 * Creates Uzbek (uz) translation files for all bitcoin-vs-* comparison pages
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

writeFile(`bitcoin-vs-gold_${lang}.json`, {
	"bitcoin_vs_gold": "Bitcoin va Oltin",
	"gold_header": "FARQI", "gold_header_2": "BITCOIN", "gold_header_3": "VA", "gold_header_4": "OLTIN",
	"gold_intro_1": "Oltin minglab yillar davomida pul sifatida ishlatilgan va ko\u02BBpchilik tomonidan moliyaviy xavfsiz boshpana sifatida qabul qilinadi.",
	"gold_intro_2": "Bitcoin 2009-yilda yaratilgan raqamli pul bo\u02BBlib, ko\u02BBpchilik tomonidan ham moliyaviy xavfsiz boshpana sifatida qaraladi.",
	"gold_intro_3": "Oltin kabi jismoniy metall Bitcoin kabi raqamli puldan qanday farq qiladi? Ikki pul shakli o\u02BBrtasidagi farqlarga qaraylik: Bitcoin va Oltin.",
	"gold": "OLTIN",
	"gold_point_1": "Jismoniy yuborilishi kerak", "gold_point_2": "Raqamli qarz hujjatlari", "gold_point_3": "Taklif har yili ortib boradi", "gold_point_4": "Elastik taklif", "gold_point_5": "Jismoniy markazlashgan", "gold_point_6": "Tasdiqlash qiyin", "gold_point_7": "Bo\u02BBlish qiyin",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Internet orqali yuborilishi mumkin", "bitcoin_point_2": "Raqamli mahalliy", "bitcoin_point_3": "Qat\u02BCiy taklif 21M BTC", "bitcoin_point_4": "Elastik bo\u02BBlmagan taklif", "bitcoin_point_5": "Markazsizlashtirilgan", "bitcoin_point_6": "Tasdiqlash oson", "bitcoin_point_7": "Bo\u02BBlish oson",
	"point_1_summary_1": "Bitcoin raqamli bo\u02BBlganligi sababli, internet aloqasi bor har kim uni deyarli bir zumda juda past komissiyalar bilan yuborishi mumkin. Oltin jismoniy bo\u02BBlganligi sababli, internet orqali o\u02BBtkazib bo\u02BBlmaydi va mulkchilikni o\u02BBtkazish uchun jismoniy yuborilishi kerak.",
	"point_2_summary_1": "Bitcoin raqamli mahalliy aktiv bo\u02BBlib, to\u02BBliq mulkchilikni internet orqali o\u02BBtkazishingiz mumkin. Ba\u02BCzi kompaniyalar jismoniy oltinni olmadan onlayn oltin sotib olish imkonini taklif qiladi; buning o\u02BBrniga kompaniyaning oltinni siz uchun saqlashiga ishonasiz. Bu haqiqiy aktiv emas, balki faqat kompaniya va\u02BCdasiga ega bo\u02BBlganingiz sababli raqamli qarz hujjatiga ko\u02BBproq o\u02BBxshaydi.",
	"point_3_summary_1": "Bitcoinning hamma vaqt mavjud bo\u02BBladigan maksimal 21 million BTC qat\u02BCiy chegarasi bor.",
	"point_3_summary_2": "Har yili yangi oltin taklifi yerdan qazib olinadi va umumiy taklifga inflyatsiya keltiradi. Umumiy oltin taklifining yiliga taxminan 1,6% ga oshishi taxmin qilinadi, ya\u02BCni pirogdagi ulushingiz har yili 1,6% ga kamayadi.",
	"point_3_summary_3": "Bu fiat pul inflyatsiyasidan kam bo\u02BBlsada, baribir inflyatsiyadir.",
	"point_3_summary_4": "Bitcoin bilan pirogdagi ulushingiz hech qachon kamaymaydi.",
	"point_4_summary_1": "Oltinning elastik taklifi bor, ya\u02BCni oltin narxi ko\u02BBtarilgan sayin, ko\u02BBproq oltin qazib olish uchun kattaroq motivatsiya paydo bo\u02BBladi. Bu yangi konlar ochilganda odatda oltin narxiga pastga bosim o\u02BBtkazadi.",
	"point_4_summary_2": "Bitcoin bilan narx qanchalik ko\u02BBtarilmasin, 21M Bitcoindan ko\u02BBproq yaratib bo\u02BBlmaysiz.",
	"point_4_summary_3": "Bitcoin elastik bo\u02BBlmagan narx-taklif nisbatiga ega birinchi aktivdir.",
	"point_5_summary_1": "Bitcoin tarmog\u02BBi markazsizlashtirilgan.", "point_5_summary_2": "O\u02BBn minglab mustaqil tugunlar tarmoq qoidalarini tasdiqlaydi.", "point_5_summary_3": "Foydalanuvchilar ilovani yuklab olib Bitcoinni o\u02BBz nazoratiga olishlari mumkin.",
	"point_5_summary_4": "Jismoniy oltinni o\u02BBz nazoratiga olish mumkin bo\u02BBlsa-da, jismoniy oltinning katta qismi saqlash muassasalariga tegishli ulkan seyflar saqlanadi, bu uni jismoniy markazlashgan qiladi.",
	"point_6_summary_1": "Bitcoin bilan coinlaringizni o\u02BBz nazoratiga olib va to\u02BBliq tugun ishlatib, haqiqiy Bitcoinga ega ekanligingizni tasdiqlash nihoyatda oson.",
	"point_6_summary_2": "O\u02BBz nazorati ilova yuklab olishdek oson.",
	"point_6_summary_3": "To\u02BBliq tugun tarmoq qoidalariga rioya qilinishini ta\u02BCminlaydigan va haqiqiy Bitcoinga ega ekanligingizni tasdiqlaydigan oddiy dastur.",
	"point_6_summary_4": "Jismoniy oltinning haqiqiy ekanligini tasdiqlash juda qiyin bo\u02BBlishi mumkin. Jismoniy oltin tashqi tomonining haqiqiy ekanligini tasdiqlasangiz ham, oltin quyma ichida tungsten yoki boshqa metall bo\u02BBlishi mumkin. Ega deb o\u02BBylagan jismoniy oltingiz haqiqatan ham sizga tegishli ekanligini tasdiqlashning yagona yo\u02BBli uni eritishdir.",
	"point_7_summary_1": "1 dollarda 100 sent bo\u02BBlgani kabi, 1 Bitcoinda 100,000,000 satoshi bor. Bu Bitcoinni bir necha sent qiymatidagi mikro tranzaksiyalar ham kiradi, har qanday hajmdagi savdolar uchun ishlatish imkonini beradi.",
	"point_7_summary_2": "Bu Bitcoinni bizneslar uchun yaxshi vosita qiladi.",
	"point_7_summary_3": "Jismoniy oltin bo\u02BBlish qiyin bo\u02BBlganligi sababli, ayniqsa kichik savdolar uchun oson ishlatib bo\u02BBlmaydi."
});

writeFile(`bitcoin-vs-banks_${lang}.json`, {
	"bitcoin_vs_banks": "Bitcoin va Banklar",
	"banks_header": "FARQI", "banks_header_2": "BITCOIN", "banks_header_3": "VA", "banks_header_4": "BANKLAR",
	"banks_intro_1": "Banklar asrlar davomida pulni nazorat qilgan va moliyaviy operatsiyalarning vositachilari hamda pul tizimining qo\u02BBriqchilari sifatida xizmat qilgan.",
	"banks_intro_2": "Bitcoin banklar yoki markaziy hokimiyatlarsiz ishlaydigan tengdosh-dan-tengdoshga raqamli pul tizimidir.",
	"banks_intro_3": "Bitcoin tarmog\u02BBi an\u02BBanaviy bankchilik tizimidan qanday farq qiladi? Tubdan farqli ikki pul yondashuvi o\u02BBrtasidagi asosiy farqlarga qaraylik.",
	"banks": "BANKLAR",
	"banks_point_1": "Ruxsat talab qilinadi", "banks_point_2": "Cheklangan ish soatlari", "banks_point_3": "Yopiq, noaniq operatsiyalar", "banks_point_4": "Pulingizni nazorat qiladi", "banks_point_5": "O\u02BBzgaruvchan komissiyalar va jarimalar", "banks_point_6": "Foizli hisob oshishiga ruxsat beradi", "banks_point_7": "Operatsiyalarni to\u02BBsishi mumkin",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Ruxsatsiz kirish", "bitcoin_point_2": "24/7 doimo ochiq", "bitcoin_point_3": "Shaffof va ochiq", "bitcoin_point_4": "Pulingizni siz nazorat qilasiz", "bitcoin_point_5": "Bashorat qilinadigan, past komissiyalar", "bitcoin_point_6": "Hisob oshishi mumkin emas", "bitcoin_point_7": "Senzuraga chidamli",
	"point_1_summary_1": "Bitcoin ruxsatsizdir, ya\u02BCni internet kirish huquqiga ega har kim hech qanday hokimiyatdan ruxsat so\u02BBramay foydalanishi mumkin.",
	"point_1_summary_2": "Bitcoin darvozabonlarsiz ishlaydi",
	"point_1_summary_3": "\u2014 hech kim sizga kirishni rad eta olmaydi. Banklar esa hisob ochishni rad etishi, mavjud hisoblarni muzlatishi yoki o\u02BBz qoidalari yoki davlat tartiblariga asoslanib xizmat ko\u02BBrsatishni rad etishi mumkin.",
	"point_2_summary_1": "Bitcoin tarmog\u02BBi kuniga 24 soat, haftasiga 7 kun, yiliga 365 kun texnik xizmat uzilishi yoki bayram kunlarisiz ishlaydi. Banklarning cheklangan ish soatlari bor, hafta oxirlari va bayramlarda yopiladi va odatda xizmatlar ishlamay qoladigan tizim texnik xizmatlari davrlari bo\u02BBladi.",
	"point_3_summary_1": "Barcha Bitcoin tranzaksiyalari har kim tekshirishi va auditdan o\u02BBtkazishi mumkin bo\u02BBlgan ommaviy blokcheynda qayd etiladi.",
	"point_3_summary_2": "Banklar xususiy daftarlar va mijozlar mustaqil tekshira olmaydigan noaniq ichki jarayonlar bilan ishlaydi.",
	"point_4_summary_1": "Bitcoin bilan o\u02BBzingizning shaxsiy kalitlaringizni saqlab, pulingiz ustidan to\u02BBliq nazoratga ega bo\u02BBlishingiz mumkin.",
	"point_4_summary_2": "Bitcoin hamyonlari haqida ko\u02BBproq bilib oling",
	"point_4_summary_3": "va o\u02BBz nazoratini tushuning. Banklar pulingizni o\u02BBz hisoblarida saqlaydi va aktivlaringizga kirishni istalgan vaqt muzlatishi, cheklashi yoki taqiqlashi mumkin.",
	"point_5_summary_1": "Bitcoin tranzaksiya komissiyalari shaffof, bashorat qilinadigan va odatda juda past. Banklarning odatda yashirin komissiyalari, oylik hisob to\u02BBlovlari, hisob oshish to\u02BBlovlari, o\u02BBtkazma to\u02BBlovlari, bankomat to\u02BBlovlari va vaqt o\u02BBtishi bilan sezilarli darajada to\u02BBplanishi mumkin bo\u02BBlgan boshqa jarimalari bor.",
	"point_6_summary_1": "Bitcoin sizda yo\u02BBq pulni sarflashingizga yo\u02BBl qo\u02BBymaydi \u2014 faqat haqiqatan ega bo\u02BBlgan Bitcoiningizni sarflay olasiz. Banklar hisob oshishiga (hisob balansidan ko\u02BBp sarflash) ruxsat beradi va keyin bu \u02BBxizmat\u02BB uchun katta to\u02BBlovlar oladi, bu ko\u02BBpincha zanjirli jarimalarga olib keladi.",
	"point_7_summary_1": "Bitcoin tranzaksiyalari senzuraga chidamli \u2014 tarmoqqa yuborilgandan keyin hech qanday markaziy hokimiyat tomonidan to\u02BBxtatilishi yoki bekor qilinishi mumkin emas. Banklar tranzaksiyalarni o\u02BBz qoidalari, davlat buyruqlari yoki shubhali faoliyat aniqlash algoritmlariga asoslanib to\u02BBsishi, muzlatishi, bekor qilishi yoki cheklashi mumkin."
});

writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin va Obligatsiyalar",
	"bonds_header": "FARQI", "bonds_header_2": "BITCOIN", "bonds_header_3": "VA", "bonds_header_4": "OBLIGATSIYALAR",
	"bonds_intro_1": "Davlat obligatsiyalari odatda \u02BBxavfsiz\u02BB deb belgilanadi va an\u02BBanaviy moliya tomonidan aktivlarni saqlashning eng xavfsiz joyi sifatida qaraladi.",
	"bonds_intro_2": "Bitcoin har qanday hukumat yoki markaziy hokimiyatdan mustaqil ishlaydigan raqamli pul.",
	"bonds_intro_3": "Obligatsiyalar haqiqatan xavfsizmi? Va qiymat saqlash vositasi sifatida Bitcoin bilan qanday taqqoslanadi? Bitcoin bilan davlat obligatsiyalari o\u02BBrtasidagi asosiy farqlarga qaraylik.",
	"bonds": "OBLIGATSIYALAR",
	"bonds_point_1": "Yashirin xavflar", "bonds_point_2": "Inflyatsiya bilan qadrsizlanish", "bonds_point_3": "Likvidlik muammolari bo\u02BBlishi mumkin", "bonds_point_4": "Muvaffaqiyatsiz kimoshdi savdolari", "bonds_point_5": "Qat\u02BCiy daromad", "bonds_point_6": "Vositachilar talab qilinadi", "bonds_point_7": "Hukumatga bog\u02BBliqlik",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Kontragent xavfi yo\u02BBq", "bitcoin_point_2": "Qat\u02BCiy taklif", "bitcoin_point_3": "Doimo likvid", "bitcoin_point_4": "Kimoshdi xavfi yo\u02BBq", "bitcoin_point_5": "Qiymat o\u02BBsish imkoniyati", "bitcoin_point_6": "O\u02BBz nazorati imkoniyati", "bitcoin_point_7": "Hukumatga bog\u02BBliqlik yo\u02BBq",
	"point_1_summary_1": "Obligatsiyalar faqat nominal dollar qiymatlarida \u02BBxavfsiz\u02BB, ya\u02BCni muddatigacha ushlab tursangiz dollarlaringizni qaytarib olasiz. Biroq bu inflyatsiya xavfi, foiz stavkasi xavfi va bu dollarlar qaytarilganda ancha kam qiymatli bo\u02BBlish ehtimolini e\u02BBtiborga olmaydi.",
	"point_1_summary_2": "Bitcoinning ochiq, shaffof xavflari (o\u02BBzgaruvchanlik) bor, lekin hech qanday yashirin kontragent xavfi yo\u02BBq \u2014 ya Bitcoiningizga egasiz, ya yo\u02BBq.",
	"point_2_summary_1": "Inflyatsiya obligatsiya daromadidan yuqori bo\u02BBlganda, obligatsiya egalari har yili sotib olish quvvatini yo\u02BBqotadi. 4% inflyatsiya bilan 2% obligatsiya daromadi yiliga 2% real qiymat yo\u02BBqotayotganingizni anglatadi.",
	"point_2_summary_2": "Inflyatsiya haqida ko\u02BBproq bilib oling.",
	"point_2_summary_3": "Bitcoinning 21 million tangalik qat\u02BCiy taklifi inflyatsiya bilan qadrsizlantirib bo\u02BBlmasligini anglatadi; obligatsiyalar esa pul bosish bilan qadrsizlantirilishi mumkin.",
	"point_3_summary_1": "Moliyaviy inqirozlar davrida obligatsiya bozorlari muzlashi va likvidlik muammolari yuzaga kelishi mumkin. Silicon Valley Bank kabi banklar foiz stavkalari ko\u02BBtarilganda sezilarli darajada qadrsizlangan obligatsiyalarga qolib ketdi va bu ularning qulashiga yordam berdi.",
	"point_3_summary_2": "Silicon Valley Bank qanday qulganini va Bitcoin nimasi bilan farq qilishini bilib oling.",
	"point_3_summary_3": "Bitcoin global miqyosda 24/7 savdo qilinadi va hech qachon likvidlik inqiroziga duch kelmagan \u2014 har doim sotuvchi yoki xaridor topishingiz mumkin.",
	"point_4_summary_1": "Davlat obligatsiyalari kimoshdi savdolari davlat qarziga yetarli xaridor bo\u02BBlmaganda muvaffaqiyatsiz bo\u02BBlishi mumkin. Bu so\u02BBnggi yillarda bir necha marta sodir bo\u02BBlgan.",
	"point_4_summary_2": "Ushbu muvaffaqiyatsiz davlat obligatsiyalari kimoshdi savdolari haqida ko\u02BBproq bilib oling.",
	"point_4_summary_3": "Bitcoinning narxi muvaffaqiyatsiz bo\u02BBlishi mumkin bo\u02BBlgan markaziy kimoshdi savdosi yo\u02BBq, balki uzluksiz global bozorlar orqali belgilanadi.",
	"point_5_summary_1": "Obligatsiya daromadlari sotib olish vaqtida belgilanadi. Iqtisodiyot tez o\u02BBssa yoki valyuta sezilarli qadrsizlansa ham, daromadingiz bir xil qoladi.",
	"point_5_summary_2": "Bitcoin ortib borayotgan qabul qilish va qat\u02BCiy taklif ortib borayotgan talab bilan uchrashishi orqali sezilarli qiymat o\u02BBsish imkoniyatiga ega.",
	"point_6_summary_1": "Ko\u02BBpchilik odamlar obligatsiyalarni banklar, brokerlar yoki fondlar kabi vositachilar orqali saqlaydi, bu kontragent xavfini keltirib chiqaradi. Obligatsiyalarga aslida bevosita egalik qilmaysiz.",
	"point_6_summary_2": "Bitcoin bilan o\u02BBz nazorati orqali bevosita mulkchilikka ega bo\u02BBlishingiz va kontragent xavfini butunlay bartaraf etishingiz mumkin.",
	"point_7_summary_1": "Obligatsiyalar butunlay hukumatning to\u02BBlov qilish qobiliyati va xohishiga bog\u02BBliq. Hukumat moliyaviy inqirozga duch kelsa, defoltga yo\u02BBl qo\u02BBysa yoki qarzni inflyatsiya bilan to\u02BBlashga qaror qilsa, obligatsiya egalari zarar ko\u02BBradi.",
	"point_7_summary_2": "Bitcoin har qanday hukumatdan mustaqil ishlaydi va siyosiy hokimiyatlar tomonidan nazorat qilinishi, shishirilishi yoki qadrsizlantirilishi mumkin emas."
});

writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin va Naqd pul",
	"cash_header": "FARQI", "cash_header_2": "BITCOIN", "cash_header_3": "VA", "cash_header_4": "NAQD PUL",
	"cash_intro_1": "Naqd pul asrlar davomida pul sifatida ishlatilgan va dunyodagi eng keng tarqalgan jismoniy pul shakli bo\u02BBlib qolmoqda.",
	"cash_intro_2": "Bitcoin 2009-yilda yaratilgan, har qanday hukumat yoki markaziy hokimiyatdan mustaqil ishlaydigan raqamli pul.",
	"cash_intro_3": "Jismoniy naqd pul Bitcoin kabi raqamli puldan qanday farq qiladi? Ikki pul shakli o\u02BBrtasidagi asosiy farqlarga qaraylik: Bitcoin va Naqd pul.",
	"cash": "NAQD PUL",
	"cash_point_1": "Jismoniy mavjudlik talab qilinadi", "cash_point_2": "Chegaralar bilan cheklangan", "cash_point_3": "Bir kechada bekor qilinishi mumkin", "cash_point_4": "Soxta qilish mumkin", "cash_point_5": "Hukumat tomonidan nazorat qilinadi", "cash_point_6": "Jismoniy saqlash xavflari", "cash_point_7": "Cheklangan bo\u02BBlinuvchanlik",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Internet orqali yuborilishi mumkin", "bitcoin_point_2": "Global miqyosda ishlaydi", "bitcoin_point_3": "Bekor qilib bo\u02BBlmaydi", "bitcoin_point_4": "Soxta qilib bo\u02BBlmaydi", "bitcoin_point_5": "Markazsizlashtirilgan tarmoq", "bitcoin_point_6": "Raqamli o\u02BBz nazorati", "bitcoin_point_7": "Oson bo\u02BBlinadi",
	"point_1_summary_1": "Bitcoin internet orqali dunyoning istalgan joyiga bir zumda yuborilishi mumkin, naqd pul esa jismoniy mavjudlik yoki ishonchli vositachilar talab qiladi. Pochta orqali naqd pul yubora olmaysiz, lekin internet aloqasi bor herkimga bir necha daqiqada Bitcoin yuborishingiz mumkin.",
	"point_2_summary_1": "Bitcoin dunyoning hamma joyida bir xil ishlaydi \u2014 Bitcoin tarmog\u02BBida chegara yo\u02BBq. Naqd pul geografiya, valyuta kurslari va mahalliy qabul qilish bilan cheklangan. Tailand qishloqlarida AQSh dollarini yoki Meksika qishloqlarida Yapon iyenini ishlatib ko\u02BBring.",
	"point_3_summary_1": "Hukumatlar 2016-yilda Hindiston ma\u02BClum banknotlarni taqiqlganidek demonetizatsiya siyosatlari bilan naqd pulni bir kechada bekor qilishi va qilgan.",
	"point_3_summary_2": "Ma\u02BClum banknotlarni taqiqlamasalar ham, hukumatlar doimiy ravishda inflyatsiya orqali naqd pulning qiymatini pasaytiradi.",
	"point_3_summary_3": "Bitcoin hech qanday hukumat yoki hokimiyat tomonidan bekor qilinishi mumkin emas \u2014 hech qanday sub\u02BBekt nazorat qilmaydigan global, markazsizlashtirilgan tarmoqda mavjud.",
	"point_4_summary_1": "Naqd pul soxta qilinishi mumkin va maxsus jihozlarsiz soxta banknotlarni aniqlash ko\u02BBpincha qiyin. Xavfsizlik xususiyatlari bilan ham soxta pul hali ham muomalada. Bitcoin soxta qilishni matematik jihatdan imkonsiz qiladigan kriptografik isbotdan foydalanadi.",
	"point_5_summary_1": "Naqd pul xohlagan miqdorda bosa oladigan, dizaynini o\u02BBzgartira oladigan yoki ma\u02BClum banknotlarni yaroqsiz deb e\u02BBlon qila oladigan hukumat tomonidan chiqariladi va nazorat qilinadi. Bitcoin hech qanday yagona hokimiyat pul taklifi yoki qoidalar ustidan nazoratga ega bo\u02BBlmagan markazsizlashtirilgan tarmoqda ishlaydi.",
	"point_6_summary_1": "Naqd pul jismoniy saqlanishi kerak, bu uni o\u02BBg\u02BBirlik, yo\u02BBqotish, yong\u02BBin yoki musodara qilishga nisbatan himoyasiz qiladi. Katta miqdorlar qimmat xavfsizlik choralarini talab qiladi.",
	"point_6_summary_2": "Biroq Bitcoin o\u02BBz nazoratida xavfsiz saqlanishi mumkin",
	"point_6_summary_3": "smartfondagi ilova yoki maxsus hamyon bilan, jismoniy saqlash xavflarisiz pulingiz ustidan to\u02BBliq nazoratni ta\u02BCminlaydi.",
	"point_7_summary_1": "Naqd pulning minimal birliklari bor \u2014 bir sentni kichikroq qismlarga bo\u02BBla olmaysiz. Bitcoin satoshi deb ataladigan 100 million kichik birlikka bo\u02BBlinishi mumkin, bu mikro to\u02BBlovlar va har qanday miqdordagi aniq tranzaksiyalarni amalga oshirish imkonini beradi."
});

writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin va CBDC",
	"cbdc_header": "RAQAMLI PUL QANDAY", "cbdc_header_2": "BO\u02BBLISHI KERAK", "cbdc_header_3": "?",
	"cbdc_intro_1": "Dunyomiz tobora ko\u02BBproq raqamlashib bormoqda, pulimiz ham shunday.",
	"cbdc_intro_2": "Bu savol tug\u02BBiladi: raqamli pulimiz qanday bo\u02BBlishini xohlaymiz?",
	"cbdc_intro_3": "Ko\u02BBplab mamlakatlar mavjud milliy valyutaning to\u02BBliq raqamli shakli bo\u02BBlgan Markaziy Bank Raqamli Valyutasini (CBDC) chiqarishni o\u02BBrganmoqda.",
	"cbdc_intro_4": "Ikki raqamli pul shakli o\u02BBrtasidagi farqga qaraylik: Bitcoin va Markaziy Bank Raqamli Valyutalari (CBDC).",
	"cbdc": "CBDC",
	"cbdc_point_1": "Sarflash uchun ruxsat kerak", "cbdc_point_2": "Pulingizning muddati tugashi mumkin", "cbdc_point_3": "Umumiy taklif chegarasi yo\u02BBq", "cbdc_point_4": "Davlat shaxsiyatigayiga bog\u02BBlangan", "cbdc_point_5": "Markazlashtirilgan", "cbdc_point_6": "Foydalanuvchilar tugun ishlata olmaydi", "cbdc_point_7": "Oson muzlatilishi mumkin", "cbdc_point_8": "Saqlovchiga ishonish kerak", "cbdc_point_9": "O\u02BBzgaruvchan pul siyosati", "cbdc_point_10": "Xavfsiz emas",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Ruxsatsiz sarflash", "bitcoin_point_2": "Pulingizning muddati hech qachon tugamaydi", "bitcoin_point_3": "Qat\u02BCiy taklif 21M BTC", "bitcoin_point_4": "Taxallusli", "bitcoin_point_5": "Markazsizlashtirilgan", "bitcoin_point_6": "Foydalanuvchilar tugun ishlata oladi", "bitcoin_point_7": "Muzlatib bo\u02BBlmaydi", "bitcoin_point_8": "O\u02BBz nazorati imkoniyati", "bitcoin_point_9": "Bashorat qilinadigan pul siyosati", "bitcoin_point_10": "Xavfsiz",
	"point_1_summary_1": "Bitcoin pulingiz ustidan to\u02BBliq nazorat berish uchun yaratilgan.", "point_1_summary_2": "Hech kim Bitcoin bilan tranzaksiya qilishingizni to\u02BBxtata olmaydi.", "point_1_summary_3": "CBDClar hukumatlar va markaziy banklarga pulingiz ustidan to\u02BBliq nazorat berish uchun yaratilgan.", "point_1_summary_4": "CBDClar maxfiyligingiz va erkinligingizni cheklaydi.",
	"point_2_summary_1": "Bitcoin hech qachon muddati tugamaydi va oylik to\u02BBlovlari yo\u02BBq.", "point_2_summary_2": "CBDClar muddati tugaydigan qilib dasturlash mumkin.", "point_2_summary_3": "CBDClarning muddati tugaganda, kelajak uchun pul yig\u02BBishingizga to\u02BBsqinlik qiladi.",
	"point_3_summary_1": "Bitcoinning hamma vaqt mavjud bo\u02BBladigan maksimal 21 million BTC qat\u02BCiy chegarasi bor.", "point_3_summary_2": "CBDClarning bugun foydalanadigan milliy valyutalarimiz kabi umumiy taklif ustidan chegarasi yo\u02BBq. Bu chegarasizlik hukumatga pul taklifini kengaytirish imkonini beradi.", "point_3_summary_3": "Bu inflyatsiyaga olib keladi.",
	"point_4_summary_1": "Bitcoin manzillari taxallusli, ya\u02BCni haqiqiy ismingiz yoki shaxsiyatingizga bog\u02BBlangan emas. CBDClar bevosita haqiqiy ismingiz va shaxsiyatingizga bog\u02BBlangan, bu ommaviy moliyaviy nazorat va senzurani imkon qiladi.",
	"point_5_summary_1": "Bitcoin tarmog\u02BBi markazsizlashtirilgan.", "point_5_summary_2": "O\u02BBn minglab mustaqil tugunlar tarmoq qoidalarini tasdiqlaydi.", "point_5_summary_3": "CBDClar CBDC tarmog\u02BBi ustidan to\u02BBliq nazoratga ega hukumat va markaziy banklar qo\u02BBlida markazlashtirilgan.",
	"point_6_summary_1": "Bitcoin har kimga tarmoq qoidalariga rioya qilinayotganini tasdiqlaydigan tugun ishlatish imkonini beradi. CBDClar hech kimga tugun ishlatishga ruxsat bermaydi va hukumat va markaziy bankka ishonishga tayanadi.",
	"point_7_summary_1": "Bitcoin boshqalarning pulingizni muzlatishini imkonsiz qilish uchun yaratilgan. CBDClar hukumatlar va markaziy banklarning pulingizni muzlatishini osonlashtirish uchun yaratilgan.",
	"point_8_summary_1": "Bitcoin pulingiz ustidan to\u02BBliq nazorat berish uchun yaratilgan.", "point_8_summary_2": "Faqat o\u02BBz nazorat hamyoningizga o\u02BBtkazganingizga ishonch hosil qiling.", "point_8_summary_3": "Bitcoin o\u02BBz nazoratida bo\u02BBlganda, hech kim pulingizga kirishingizga to\u02BBsqinlik qila olmaydi.", "point_8_summary_4": "CBDClar bank yoki hukumat kabi saqlovchining pulingizni siz uchun saqlashiga ishonishingizni talab qiladi.",
	"point_9_summary_1": "Bitcoinning kodda belgilangan va o\u02BBzgartirib bo\u02BBlmaydigan bashorat qilinadigan pul siyosati bor. CBDClarning mavjud valyutalarimiz kabi oson o\u02BBzgartirish mumkin bo\u02BBlgan pul siyosati bor.", "point_9_summary_2": "Bu siyosatchilar juda ko\u02BBp pul bosganda inflyatsiyaga olib keladi.",
	"point_10_summary_1": "Bitcoin hozirga qadar mavjud bo\u02BBlgan eng xavfsiz kompyuter tarmog\u02BBi va hech qachon xakerlik hujumiga uchragan. CBDClar tarmoqni himoya qilish uchun hukumatlar va banklarga tayanadi, ular esa tarixda son-sanoqsiz marta xakerlik hujumiga uchragan."
});

writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin va Kripto",
	"crypto_header": "FARQI", "crypto_header_2": "BITCOIN", "crypto_header_3": "VA", "crypto_header_4": "KRIPTO",
	"crypto_intro_1": "Kripto valyuta sohasi minglab turli raqamli token va loyihalar bilan portladi.",
	"crypto_intro_2": "Bitcoin birinchi va eng taniqli kripto valyuta bo\u02BBlsa-da, kripto sanoatining qolgan qismidan tubdan farq qiladi.",
	"crypto_intro_3": "Bitcoin bilan kengroq kripto valyuta ekotizimi o\u02BBrtasidagi asosiy farqlarga qaraylik.",
	"crypto": "KRIPTO",
	"crypto_point_1": "Tez-tez o\u02BBzgarishlar va vilkalar", "crypto_point_2": "Markazlashtirilgan nazorat", "crypto_point_3": "Chegarasiz yoki inflyatsion taklif", "crypto_point_4": "Murakkab protokollar", "crypto_point_5": "Eksperimental konsensus", "crypto_point_6": "Spekulyativ yordamchi tokenlar", "crypto_point_7": "O\u02BBzgaruvchan va zaif", "crypto_point_8": "Korporativ qo\u02BBllab-quvvatlash",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "O\u02BBzgarmas protokol", "bitcoin_point_2": "Haqiqiy markazsizlashtirilgan", "bitcoin_point_3": "Qat\u02BCiy taklif 21M BTC", "bitcoin_point_4": "Oddiy va qulay", "bitcoin_point_5": "Isbotlangan Proof of Work", "bitcoin_point_6": "Sof raqamli pul", "bitcoin_point_7": "Antifragil", "bitcoin_point_8": "Hech qanday sub\u02BBekt nazorat qilmaydi",
	"point_1_summary_1": "Bitcoin protokoli 2009-yildan beri mohiyatan o\u02BBzgarmagan holda qoldi va oson o\u02BBzgartirib bo\u02BBlmaydigan bashorat qilinadigan qoidalarni ta\u02BCminlaydi. Ko\u02BBpchilik kripto loyihalari protokollarini tez-tez yangilaydi, token iqtisodiyotini o\u02BBzgartiradi yoki yangi versiyalarga vilka qiladi, bu foydalanuvchilar uchun noaniqlik yaratadi.",
	"point_2_summary_1": "Bitcoin butun dunyoda o\u02BBn minglab mustaqil tugunlarga ega haqiqiy markazsizlashtirilgan tarmoqda ishlaydi. Ko\u02BBplab kripto loyihalari protokolning kelajagi haqida bir tomonlama qarorlar qabul qila oladigan fondlar, kompaniyalar yoki kichik dasturchi guruhlari tomonidan nazorat qilinadi.",
	"point_3_summary_1": "Bitcoinning hamma vaqt mavjud bo\u02BBladigan maksimal 21 million tangalik qat\u02BCiy chegarasi bor va uni eng nodir raqamli aktivga aylantiradi. Ko\u02BBpchilik kripto loyihalarining chegarasiz taklifi, inflyatsion mexanizmlari yoki xohlagan vaqtda yangi token bosish imkoniyati bor va egalari qiymatini vaqt o\u02BBtishi bilan suyultirib boradi.",
	"point_4_summary_1": "Bitcoinning yagona oddiy maqsadi bor: tengdosh-dan-tengdoshga raqamli pul. Har kim asosiy bilim bilan tushunishi va foydalanishi mumkin. Ko\u02BBplab kripto loyihalari xavfsiz foydalanish uchun texnik tajriba talab qiladigan murakkab smart-shartnomalar, DeFi protokollari yoki boshqarish mexanizmlarini o\u02BBz ichiga oladi.",
	"point_5_summary_1": "Bitcoin asosiy tarmoqqa bitta ham muvaffaqiyatli hujumsiz 15 yildan ortiq vaqt davomida jangovar sharoitlarda sinab ko\u02BBrilgan Proof of Work konsensusidan foydalanadi. Ko\u02BBplab kripto loyihalari uzoq muddatli xavfsizligini hali isbotlamagan Proof of Stake yoki delegatsiyalangan tizimlar kabi eksperimental konsensus mexanizmlaridan foydalanadi.",
	"point_6_summary_1": "Bitcoin raqamli pul sifatida xizmat qiladi \u2014 qiymat saqlash va almashuv vositasi. Ko\u02BBpchilik kripto tokenlari aniq platformalar uchun yordamchi tokenlar, boshqarish tokenlari yoki noaniq qiymat takliflari bo\u02BBlgan spekulyativ aktivlardir.",
	"point_7_summary_1": "Bitcoin hujum ostida kuchayib boradi va unga yo\u02BBnaltirilgan har bir inqiroz, taqiq va tanqiddan omon qoldi. Ko\u02BBpchilik kripto loyihalari zaif bo\u02BBlib, tartibga solish bosimi, texnik xatolar yoki bozor qulashlari ostida qulab tushishi mumkin.",
	"point_8_summary_1": "Bitcoinning bosh direktori yo\u02BBq, ortida kompaniya yo\u02BBq va bitta muvaffaqiyatsizlik nuqtasi yo\u02BBq. Ko\u02BBplab kripto loyihalari venchur kapital firmalari tomonidan qo\u02BBllab-quvvatlanadi, taniqli rahbariyatga ega yoki davom etayotgan operatsiyalar uchun aniq kompaniyalarga bog\u02BBliq."
});

writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin va Nozik san\u02BBat",
	"fine_art_header": "FARQI", "fine_art_header_2": "BITCOIN", "fine_art_header_3": "VA", "fine_art_header_4": "NOZIK SAN\u02BBAT",
	"fine_art_intro_1": "Nozik san\u02BBat asrlar davomida hashamatli investitsiya bo\u02BBlib kelgan va badavlat kolleksionerlar tomonidan ko\u02BBpincha qiymat saqlash vositasi sifatida qabul qilinadi.",
	"fine_art_intro_2": "Bitcoin ham ko\u02BBpchilik tomonidan qiymat saqlash vositasi va investitsiya sifatida qaraladigan raqamli pul.",
	"fine_art_intro_3": "Jismoniy san\u02BBat asarlari Bitcoin kabi raqamli puldan qanday farq qiladi? Ikki investitsiya shakli o\u02BBrtasidagi farqlarga qaraylik: Bitcoin va Nozik san\u02BBat.",
	"fine_art": "NOZIK SAN\u02BBAT",
	"fine_art_point_1": "Har bir asar noyob", "fine_art_point_2": "Mutaxassis kimoshdi savdolari talab qilinadi", "fine_art_point_3": "Yuqori kimoshdi to\u02BBlovlari", "fine_art_point_4": "Bo\u02BBlinmaydi", "fine_art_point_5": "Mutaxassis tasdiqlashi talab qilinadi", "fine_art_point_6": "Zarar ko\u02BBrishga himoyasiz", "fine_art_point_7": "Faqat badavlat kolleksionerlar uchun",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "To\u02BBliq almashtiriladigan", "bitcoin_point_2": "24/7 global bozor", "bitcoin_point_3": "Past tranzaksiya komissiyalari", "bitcoin_point_4": "Oson bo\u02BBlinadi", "bitcoin_point_5": "Kriptografik tasdiqlanadigan", "bitcoin_point_6": "Yo\u02BBq qilish qiyin", "bitcoin_point_7": "Hamma uchun qulay",
	"point_1_summary_1": "Bitcoin to\u02BBliq almashtiriladigan, ya\u02BCni har bir bitcoin teng va bir-biri bilan almashtirilishi mumkin \u2014 dunyoning qayerida bo\u02BBlsangiz ham bitta bitcoin bitta bitcoinga teng. Nozik san\u02BBat tabiatan almashtirib bo\u02BBlmaydigan; har bir asar yaratilishi, tarixi, holati va kelib chiqishi bilan noyobdir.",
	"point_2_summary_1": "Bitcoin internet kirish huquqiga ega har kimning bir zumda oldi-sotdi qilishi mumkin bo\u02BBlgan 24/7 global bozorda savdo qilinadi. Nozik san\u02BBat Sotheby\u02BBs yoki Christie\u02BBs kabi mutaxassis kimoshdi uylari, xususiy dilerlar yoki xususiy galereyalarni talab qiladi.",
	"point_3_summary_1": "Bitcoin oldi-sotdisi odatda komissiyalarda 1%dan kam bo\u02BBlsa, ko\u02BBpincha ancha kam bo\u02BBladi. San\u02BBat sotish xaridor mukofoti (10-25%), sotuvchi komissiyasi (10-15%), sug\u02BBurta, tashish, saqlash va tasdiqlash to\u02BBlovlari kabi sezilarli xarajatlarni o\u02BBz ichiga oladi.",
	"point_4_summary_1": "Bitcoin satoshi deb ataladigan 100 million kichik birlikka bo\u02BBlinishi mumkin, bu uni har qanday hajmdagi tranzaksiya uchun ideal qiladi. Nozik san\u02BBat bo\u02BBlinmaydi \u2014 rasmning bir qismiga egalik qilish yoki haykalning faqat bir bo\u02BBlagini sotish mumkin emas.",
	"point_5_summary_1": "Bitcoin mulkchiligi va haqiqiyligi asosiy texnik bilimga ega har kim tomonidan blokcheynda kriptografik tasdiqlanishi mumkin. Nozik san\u02BBat qimmat mutaxassis tasdiqlashi, kelib chiqish tadqiqoti va ilmiy tahlil talab qiladi. Mutaxassis tasdiqlashiga qaramay, soxta nusxalar muntazam ravishda san\u02BBat olamini aldab kelmoqda. Bitcoin esa soxta qilib bo\u02BBlmaydi.",
	"point_6_summary_1": "Bitcoin to\u02BBg\u02BBri zaxiralanganida suv toshqini, yong\u02BBin, zilzila, dovul, o\u02BBg\u02BBirlik yoki boshqa ofatlar bilan yo\u02BBq qilib bo\u02BBlmaydi. Nozik san\u02BBat jismoniy yo\u02BBq qilish va buzilishning har bir shakliga himoyasiz.",
	"point_7_summary_1": "Bitcoin internet kirish huquqi va investitsiya qilish uchun oz miqdordagi puli bor har kim tomonidan oldi-sotdi qilinishi mumkin. Nozik san\u02BBat investitsiyalari yuqori minimal narxlar, xususiy kimoshdi kirish huquqi, saqlash talablari, sug\u02BBurta xarajatlari va mutaxassis bilimi tufayli katta darajada badavlat kolleksionerlar bilan cheklangan."
});

writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin va Ko\u02BBchmas mulk",
	"real_estate_header": "FARQI", "real_estate_header_2": "BITCOIN", "real_estate_header_3": "VA", "real_estate_header_4": "KO\u02BBCHMAS MULK",
	"real_estate_intro_1": "Ko\u02BBchmas mulk o\u02BBnlab yillar davomida mashhur investitsiya bo\u02BBlgan va ko\u02BBpincha barqaror qiymat saqlash vositasi sifatida qabul qilinadi.",
	"real_estate_intro_2": "Bitcoin 2009-yilda yaratilgan, ko\u02BBpchilik tomonidan qiymat saqlash vositasi va investitsiya sifatida ham qaraladigan raqamli pul.",
	"real_estate_intro_3": "Jismoniy ko\u02BBchmas mulk Bitcoin kabi raqamli puldan qanday farq qiladi? Ikki investitsiya shakli o\u02BBrtasidagi farqlarga qaraylik: Bitcoin va Ko\u02BBchmas mulk.",
	"real_estate": "KO\u02BBCHMAS MULK",
	"real_estate_point_1": "Ko\u02BBchib bo\u02BBlmaydi", "real_estate_point_2": "Oson bo\u02BBlinmaydi", "real_estate_point_3": "Davlat nazoratiga bo\u02BBysinadi", "real_estate_point_4": "Doimiy ta\u02BCmirlash talab qilinadi", "real_estate_point_5": "Mulk solig\u02BBiga bo\u02BBysinadi", "real_estate_point_6": "Tabiiy ofatlarga himoyasiz", "real_estate_point_7": "Har bir mulk noyob", "real_estate_point_8": "Mahalliy xaridorlar bilan cheklangan",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Global miqyosda ko\u02BBchma", "bitcoin_point_2": "Oson bo\u02BBlinadi", "bitcoin_point_3": "Senzuraga chidamli", "bitcoin_point_4": "Ta\u02BCmirlash talab qilinmaydi", "bitcoin_point_5": "Mulk solig\u02BBi yo\u02BBq", "bitcoin_point_6": "Yo\u02BBq qilish qiyin", "bitcoin_point_7": "To\u02BBliq almashtiriladigan", "bitcoin_point_8": "24/7 global bozor",
	"point_1_summary_1": "Bitcoin internet orqali bir zumda dunyoning istalgan joyiga ko\u02BBchirilishi mumkin. Ko\u02BBchmas mulk ma\u02BClum joyga doimiy o\u02BBrnatilgan va ko\u02BBchirib bo\u02BBlmaydi.",
	"point_2_summary_1": "Bitcoin satoshi deb ataladigan 100 million kichik birlikka bo\u02BBlinishi mumkin. Ko\u02BBchmas mulk oson bo\u02BBlinmaydi \u2014 uyingizning faqat oshxonasini sotish yoki yotoqxonaning yarmini sotib olish mumkin emas.",
	"point_3_summary_1": "Bitcoin hech qanday hukumat nazorat qila olmaydigan markazsizlashtirilgan tarmoqda ishlaydi. Ko\u02BBchmas mulk ijara tartibga solish, ko\u02BBchirib yuborish moratoriyalari, zonalash qonunlari va majburiy sotib olishni o\u02BBz ichiga olgan keng qamrovli davlat tartibga solishiga bo\u02BBysinadi.",
	"point_4_summary_1": "Bitcoin ta\u02BCmirlash talab qilmaydi \u2014 tarmoqdagi raqamli kod sifatida mavjud. Ko\u02BBchmas mulk ta\u02BCmirlash, qayta qurish, mulk boshqarish, sug\u02BBurta va ijarachilar bilan muomala qilishni o\u02BBz ichiga olgan doimiy e\u02BBtibor talab qiladi.",
	"point_5_summary_1": "Bitcoinning davom etadigan solig\u02BBi yo\u02BBq \u2014 faqat sotganingizda kapital daromad solig\u02BBini to\u02BBlaysiz. Ko\u02BBchmas mulk mulk daromad keltiradimi yoki yo\u02BBqmi, qat\u02BCiy nazar to\u02BBlanishi kerak bo\u02BBlgan yillik mulk solig\u02BBiga bo\u02BBysinadi.",
	"point_6_summary_1": "Bitcoin to\u02BBg\u02BBri zaxiralanganida suv toshqini, yong\u02BBin, zilzila, dovul yoki boshqa tabiiy ofatlar bilan yo\u02BBq qilib bo\u02BBlmaydi. Ko\u02BBchmas mulk jismoniy yo\u02BBq qilishning har bir shakliga himoyasiz.",
	"point_7_summary_1": "Har bir bitcoin teng va bir-biri bilan almashtirilishi mumkin \u2014 dunyoning qayerida bo\u02BBlsangiz ham bitta bitcoin bitta bitcoinga teng. Har bir ko\u02BBchmas mulk turli joylar, holatlar va xususiyatlar bilan noyobdir.",
	"point_8_summary_1": "Bitcoin internet kirish huquqiga ega har kim tomonidan dunyoning istalgan joyidan 24/7 oldi-sotdi qilinishi mumkin. Ko\u02BBchmas mulk sotish mahalliy xaridorlar bilan cheklangan, advokatlar va agentlar bilan uzoq jarayonlarni talab qiladi va oylar davom etishi mumkin.",
	"bitcoin_point_9": "Individual mulkchilikni qo\u02BBllab-quvvatlaydi",
	"real_estate_point_9": "Uy-joyning moliyaviylashtrilishiga hissa qo\u02BBshadi",
	"point_9_summary_1": "Bitcoin vositachilarsiz bevosita individual mulkchilikni imkon qiladi va hamma uchun moliyaviy suverenitetni qo\u02BBllab-quvvatlaydi. Asosiy uy-joyingizdan tashqari investitsiya sifatida ko\u02BBchmas mulk sotib olish uylarning boshpana o\u02BBrniga tovar bo\u02BBladigan uy-joyning moliyaviylashtrilishiga hissa qo\u02BBshadi. Bu narxlarni oshiradi, oilalar uchun arzonlikni kamaytiradi va uy-joy inqirozi va uysizlikka hissa qo\u02BBshadi."
});

writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin va Aksiyalar",
	"stocks_header": "FARQI", "stocks_header_2": "BITCOIN", "stocks_header_3": "VA", "stocks_header_4": "AKSIYALAR",
	"stocks_intro_1": "Aksiyalar o\u02BBnlab yillar davomida mashhur investitsiya bo\u02BBlib, kompaniyalardagi mulkchilik ulushlarini ifodalaydi.",
	"stocks_intro_2": "Bitcoin 2009-yilda yaratilgan, har qanday kompaniya yoki hukumatdan mustaqil ishlaydigan raqamli pul.",
	"stocks_intro_3": "Kompaniya aksiyalariga egalik qilish Bitcoin kabi raqamli pulga egalik qilishdan qanday farq qiladi? Ikki investitsiya shakli o\u02BBrtasidagi farqlarga qaraylik: Bitcoin va Aksiyalar.",
	"stocks": "AKSIYALAR",
	"stocks_point_1": "Kompaniyadagi ulushlar", "stocks_point_2": "Suyultirilishi mumkin bo\u02BBlgan taklif", "stocks_point_3": "Kalit shaxs xavfi", "stocks_point_4": "P/E nisbati bilan baholash", "stocks_point_5": "Faqat savdo soatlarida", "stocks_point_6": "Kontragent xavfi", "stocks_point_7": "O\u02BBzgaruvchan inflyatsiya himoyasi",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Bevosita mulkchilik", "bitcoin_point_2": "Qat\u02BCiy taklif 21M BTC", "bitcoin_point_3": "Markazsizlashtirilgan tarmoq", "bitcoin_point_4": "Bozor tomonidan belgilangan narx", "bitcoin_point_5": "24/7 savdo", "bitcoin_point_6": "O\u02BBz nazorati imkoniyati", "bitcoin_point_7": "Qat\u02BCiy taklifli aktiv",
	"point_1_summary_1": "Bitcoinga ega bo\u02BBlganingizda, aktivning o\u02BBzida bevosita mulkchilikka egasiz. Aksiyaga ega bo\u02BBlganingizda, kompaniyadagi ulushga egasiz, ya\u02BCni investitsiyangiz kompaniya faoliyati, boshqaruv qarorlari va biznes muvaffaqiyatiga bog\u02BBliq.",
	"point_2_summary_1": "Bitcoinning hamma vaqt mavjud bo\u02BBladigan maksimal 21 million BTC qat\u02BCiy chegarasi bor.", "point_2_summary_2": "Kompaniyalar istalgan vaqt yangi aksiyalar chiqarishi va mavjud aksionerlarning foizli mulkchiligini suyultirishi mumkin. Bu yangi aksiyalar yaratilganda kompaniyadagi ulushingiz kamayishini anglatadi.", "point_2_summary_3": "Bu fiat pul inflyatsiyasidan kam bo\u02BBlsa-da, baribir suyultirishdir.", "point_2_summary_4": "Bitcoin bilan pirogdagi ulushingiz hech qachon kamaymaydi.",
	"point_3_summary_1": "Bitcoin yagona muvaffaqiyatsizlik nuqtasi yo\u02BBq markazsizlashtirilgan tarmoqda ishlaydi. Aksiya investitsiyalari kalit shaxs xavfiga bo\u02BBysinadi \u2014 bosh direktor yoki boshqa kalit rahbarlar ketsa, kasalansa yoki yomon qarorlar qilsa, investitsiyangiz sezilarli darajada zarar ko\u02BBrishi mumkin.",
	"point_4_summary_1": "Bitcoinning narxi to\u02BBliq bozor taklifi va talabi tomonidan belgilanadi. Aksiya narxlari odatda investorlar kompaniya daromadining har bir dollari uchun qancha to\u02BBlayotganini ko\u02BBrsatadigan P/E (narx/daromad) nisbati bilan baholanadi.",
	"point_5_summary_1": "Bitcoin global birzhalarda kuniga 24 soat, haftasiga 7 kun savdo qilinadi.", "point_5_summary_2": "Bitcoin markazsizlashtirilgan", "point_5_summary_3": "va hech qachon uxlamaydi.", "point_5_summary_4": "Fond bozorlari faqat ish kunlari ish soatlarida ochiq, bu investitsiyalaringizni qachon oldi-sotdi qilishingizni cheklaydi.",
	"point_6_summary_1": "Bitcoin bilan coinlaringizni o\u02BBz nazoratiga olishingiz mumkin, ya\u02BCni uchinchi tomonga bog\u02BBliq bo\u02BBlmay ularga haqiqatan ega bo\u02BBlasiz.", "point_6_summary_2": "O\u02BBz nazorati ilova yuklab olishdek oson.", "point_6_summary_3": "Aksiyalar broker hisobi talab qiladi va kontragent xavflariga duch kelasiz \u2014 kompaniya bankrot bo\u02BBlsa yoki broker qulab tushsa investitsiyangizni yo\u02BBqotishingiz mumkin.", "point_6_summary_4": "Aksiya sertifikatlariga aslida bevosita egalik qilmaysiz.",
	"point_7_summary_1": "Bitcoin hamma vaqt mavjud bo\u02BBladigan maksimal 21 million Bitcoin chegarasiga ega qat\u02BCiy taklifli aktiv. Bu uni mukammal inflyatsiya himoyasi qiladi. Aksiyalarning inflyatsiyaga nisbatan o\u02BBzgaruvchan samaradorligi bor \u2014 ba\u02BCzi kompaniyalar inflyatsiya davrlarida muvaffaqiyatga erishadi, boshqalari qiyinchilik chekadi."
});

writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin va Visa",
	"visa_header": "FARQI", "visa_header_2": "BITCOIN", "visa_header_3": "VA", "visa_header_4": "VISA",
	"visa_intro_1": "Kredit kartalari va Bitcoin ikkalasi ham to\u02BBlov tizimlari, lekin juda turlicha usullarda ishlaydi.",
	"visa_intro_2": "Visa kabi kredit kartalari moliya muassasalari tomonidan nazorat qilinadigan yopiq tarmoqlardir, Bitcoin esa hamma foydalanishi mumkin bo\u02BBlgan ochiq tarmoq.",
	"visa_intro_3": "Ikki to\u02BBlov infratuzilmasi o\u02BBrtasidagi farqlarga qaraylik: Bitcoin va Visa.",
	"visa": "VISA",
	"visa_point_1": "Yopiq tarmoq", "visa_point_2": "Savdogarlardan 3% komissiya", "visa_point_3": "Noaniq tizim", "visa_point_4": "Hisoblarni muzlatishi mumkin", "visa_point_5": "Yuqori foizli qarz yaratadi", "visa_point_6": "Vositachilar talab qilinadi", "visa_point_7": "Cheklangan soatlar va geografiya",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Ochiq tarmoq", "bitcoin_point_2": "Savdogar komissiyasi yo\u02BBq", "bitcoin_point_3": "Shaffof tizim", "bitcoin_point_4": "Muzlatib bo\u02BBlmaydi", "bitcoin_point_5": "Qarz yaratmaydi", "bitcoin_point_6": "O\u02BBz nazorati imkoniyati", "bitcoin_point_7": "24/7 global kirish",
	"point_1_summary_1": "Bitcoin har kim ruxsatsiz qatnashishi va foydalanishi mumkin bo\u02BBlgan ochiq tarmoq. Visa kabi kredit karta tarmoqlari moliya muassasalarining herkimga kirishni rad etishi mumkin bo\u02BBlgan yopiq tizimlar.",
	"point_1_summary_2": "Bu Bitcoinni ayniqsa bank xizmatlari bo\u02BBlmaganlar boshlab butun dunyodagi odamlar uchun yanada inklyuziv va qulay qiladi.",
	"point_2_summary_1": "Bitcoin tranzaksiyalarida savdogar komissiyasi yo\u02BBq, kredit karta kompaniyalari esa odatda savdogarlardan har bir tranzaksiya uchun taxminan 3% komissiya oladi.",
	"point_2_summary_2": "Biznesingiz qanday tejashini bilib oling",
	"point_2_summary_3": "kredit karta tranzaksiya komissiyalari o\u02BBrniga Bitcoin to\u02BBlovlarini qabul qilish orqali.",
	"point_3_summary_1": "Bitcoin har kim barcha tranzaksiyalarni tekshirishi mumkin bo\u02BBlgan shaffof blokcheynda ishlaydi. Kredit karta tarmoqlari tranzaksiya tafsilotlari jamoatchilikdan yashirilgan yopiq, xususiy tizimlar sifatida ishlaydi.",
	"point_3_summary_2": "Bu shaffoflik Bitcoinni yanada ishonchli qiladi va tarmoq yaxlitligining mustaqil tekshirilishini ta\u02BCminlaydi.",
	"point_4_summary_1": "Kredit karta kompaniyalari istalgan vaqt hisoblarni muzlatishi, tranzaksiyalarni to\u02BBsishi yoki xizmat ko\u02BBrsatishni rad etishi mumkin. Bitcoin hech qanday markaziy hokimiyat tomonidan muzlatilishi yoki nazorat qilinishi mumkin emas.",
	"point_4_summary_2": "Bitcoin bilan pulingiz nazorati sizning qo\u02BBlingizda qoladi va to\u02BBlov tizimidan uzilishingiz mumkin emas.",
	"point_5_summary_1": "Kredit kartalari ba\u02BCzan yiliga 25%dan oshib ketadigan yuqori foiz stavkalari bilan tezda to\u02BBplanishi mumkin bo\u02BBlgan qarz yaratadi.",
	"point_5_summary_2": "Bitcoin tranzaksiyalari qarz yaratmasdan yakuniy to\u02BBlov xarakteriga ega \u2014 faqat haqiqatan ega bo\u02BBlgan Bitcoiningizni sarflay olasiz.",
	"point_6_summary_1": "Bitcoin banklar yoki to\u02BBlov qayta ishlash kompaniyalariga bog\u02BBliq bo\u02BBlmay pulingizni saqlash va nazorat qilishingiz mumkin bo\u02BBlgan o\u02BBz nazoratini imkon qiladi.",
	"point_6_summary_2": "Bitcoin hamyonlari haqida ko\u02BBproq bilib oling",
	"point_6_summary_3": "va pulingiz nazoratini qanday qo\u02BBlga kiritishni tushuning. Kredit kartalari doimo banklar va to\u02BBlov qayta ishlash kompaniyalari kabi vositachilarni talab qiladi.",
	"point_7_summary_1": "Bitcoin savdo soatlari yoki geografik cheklovlarsiz 24/7 global miqyosda ishlaydi.",
	"point_7_summary_2": "Kredit karta tarmoqlarining savdo soatlari, texnik xizmat davrlari va tranzaksiya amalga oshirishga to\u02BBsqinlik qilishi mumkin bo\u02BBlgan geografik cheklovlari bor."
});

console.log(`\nDone! Created 10 comparison files.`);
