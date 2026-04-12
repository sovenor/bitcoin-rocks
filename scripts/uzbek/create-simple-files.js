/**
 * Creates Uzbek (uz) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'uz';
const today = '2026-04-11';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "404 Xato | Sahifa topilmadi",
	"404_message": "BU BUZILGAN SAHIFA UMUMAN YAXSHI EMAS",
	"404_home": "BOSH SAHIFAGA QAYTISH"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "bitcoin.rocks haqida \u2014 2022-yildan beri Bitcoin ta\u02BClimi",
	"about_description": "bitcoin.rocks \u2014 2022-yilda tashkil etilgan bepul, ochiq kodli Bitcoin ta\u02BClim veb-sayti. Bizning vazifamiz ta\u02BClim orqali Bitcoinni qabul qilishni tezlashtirish.",
	"about_header": "BIZ HAQIMIZDA",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Bizning vazifamiz",
	"about_mission_1": "bitcoin.rocks 2022-yilda oddiy vazifa bilan tashkil etilgan: ta\u02BClim orqali Bitcoinni qabul qilishni tezlashtirish.",
	"about_mission_2": "Biz Bitcoin haqida qiziquvchi odamga ulashiladigan birinchi havola bo\u02BClish uchun mavjudmiz. Bitcoin qanday qilib yaxshiroq dunyo qurayotganini tushuntiruvchi do\u02BBstona va qulay boshlang\u02BBich nuqta.",
	"about_mission_3": "Juda ko\u02BBp odam Bitcoinni noto\u02BBg\u02BBri tushunadi yoki unga hech qachon to\u02BBg\u02BBri tanishtirulmagan. Biz buni har kim tushuna oladigan bepul, yuqori sifatli ta\u02BClim kontenti taqdim etish orqali o\u02BBzgartirishni xohlaymiz.",
	"about_what_we_do_header": "Biz nima qilamiz",
	"about_what_we_do_1": "Biz Bitcoin yangi boshlovchilar uchun bepul ta\u02BClim kontenti yaratamiz. Veb-saytimiz inflyatsiya, o\u02BBz-o\u02BBzini saqlash, hamyonlar, Lightning Network va Bitcoinni boshqa aktivlar va to\u02BBlov tizimlari bilan solishtirish kabi mavzularni qamrab oladi.",
	"about_what_we_do_2a": "Jamiyatingizda Bitcoin xabardorligini tarqatishga yordam berish uchun eshigingizgacha ",
	"about_what_we_do_2b": "bepul Bitcoin stikerlar",
	"about_what_we_do_2c": " yuboramiz. Har oyda yuzlab odam bu stikerlardagi QR kodlarni skanerlash orqali Bitcoin haqida bilib oladi.",
	"about_what_we_do_3a": "Shuningdek, mahalliy bizneslarni Bitcoin to\u02BBlovlarini qabul qilishga yordam berishni xohlaydigan har bir kishi uchun ",
	"about_what_we_do_3b": "bosma varaqalar",
	"about_what_we_do_3c": " va ",
	"about_what_we_do_3d": "biznes to\u02BBplamlar",
	"about_what_we_do_3e": " taqdim etamiz.",
	"about_what_we_do_4": "Barcha kontentlarimiz Bitcoin haqida nol bilimni nazarda tutadi. Bitcoin bilan endigina tanishayotgan bo\u02BBlsangiz yoki ulashish uchun resurslar qidirayotgan tajribali Bitcoinchi bo\u02BBlsangiz, bitcoin.rocks siz uchun.",
	"about_editorial_header": "Tahrir yondashuvimiz",
	"about_editorial_1": "bitcoin.rocks-dagi har bir kontent sinchkovlik bilan tanlangan va tekshirilgan. Biz ma\u02BClumotlar yoki statistikaga murojaat qilganimizda, siz ma\u02BClumotlarni o\u02BBzingiz tekshirishingiz uchun manbalarimizni ko\u02BBrsatamiz.",
	"about_editorial_2": "Biz TIME Magazine, Forbes, MIT Technology Review, Lyn Alden va boshqa ko\u02BBplab ishonchli manbalarga havolalar beramiz. Biz faktlar aniq taqdim etilganda Bitcoin o\u02BBzini o\u02BBzi ifodalaydi deb ishonamiz.",
	"about_editorial_3": "Kontentlarimiz muntazam ravishda ko\u02BBrib chiqiladi va yangilanadi, bu aniqlik va dolzarblikni ta\u02BCminlaydi. Barcha kontent faqat Bitcoin ta\u02BClimiga yo\u02BBnaltirilgan.",
	"about_open_source_header": "Ochiq manba",
	"about_open_source_1a": "bitcoin.rocks \u2014 MIT Litsenziyasi ostida litsenziyalangan bepul, ochiq kodli loyiha. Bizning butun kod bazamiz ommaviy ravishda mavjud ",
	"about_open_source_1b": "GitHub-da",
	"about_open_source_1c": ".",
	"about_open_source_2": "Har kim bitcoin.rocks-ga hissa qo\u02BBshishi mumkin. Biz ayniqsa kontentimizni butun dunyo bo\u02BBylab odamlar uchun qulay qiladigan tarjimonlarni mamnuniyat bilan qabul qilamiz.",
	"about_open_source_3": "Ko\u02BBngilli tarjimonlar jamoamiz tufayli bitcoin.rocks hozirda 54 tilda mavjud va o\u02BBsishda davom etmoqda.",
	"about_open_source_contribute": "Qanday hissa qo\u02BBshish mumkinligini bilib oling.",
	"about_contact_header": "Biz bilan bog\u02BBlaning",
	"about_contact_1": "Sizdan xabar olishdan mamnunmiz. Savolingiz, taklifingiz bo\u02BBlsa yoki shunchaki salom aytmoqchi bo\u02BBlsangiz, istalgan vaqt biz bilan bog\u02BBlaning.",
	"about_contact_email": "Elektron pochta:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Stikerlaringizni 2 dan 4 haftagacha olasiz. Shu vaqt ichida stikerlaringiz uchun yaxshi joy topishga harakat qiling!",
	"sticker_success_2": "Stikerlar uchun yaxshi joylar:",
	"sticker_success_list_1": "odamlar ko\u02BBradigan ommaviy joylarda",
	"sticker_success_list_2": "tez olib tashlanmaydigan joylarda (stikerlar doimiy zarar yetkazmaydi)",
	"sticker_success_list_3": "oson yopishadigan yuzalarda (metall, plastik, shisha)",
	"sticker_success_list_4": "xususiy mulkka, belgilarga, bankomatlarga yoki benzin stantsiyalariga EMAS",
	"sticker_success_3": "Boshqalar stikerlarini qaerga yopishtirayotganini ko\u02BBrishni xohlaysizmi?",
	"sticker_success_flyers_bar_new": "YANGI!",
	"sticker_success_flyers_bar_cta": "Bitcoin varaqalarini chop eting va yopishtiring \u2192"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "So\u02BBrovingizni muvaffaqiyatli qabul qildik.",
	"sticker_language_success_2": "Biz yangi fayllarni guruhlarda nashr qilamiz, shuning uchun bu fayllar yuklab olish uchun tayyor bo\u02BBlguncha bir necha hafta vaqt ketishi mumkin. Tez orada qayta tekshiring!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Otkritlalaringizni 1 dan 2 haftagacha olasiz.",
	"postcard_success_2": "Ushbu otkritlalarni tanishingizga yuborib, Bitcoinni qabul qilishni tezlashtirishga yordam berganingiz uchun rahmat!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Tabellaringizni 1 dan 2 haftagacha olasiz. Shu vaqt ichida tabellaringiz uchun yaxshi joy topishga harakat qiling!",
	"sign_success_3": "Boshqalar tabellalarini qaerga qo\u02BByayotganini ko\u02BBrishni xohlaysizmi?",
	"signs_share_header": "TABELLA JOYLARINGIZNI ULASHING",
	"signs_share_c1": "Tabella joyingizning suratini Nostr-da biz bilan ulashing va biz sizga sat yuboramiz! Satlar bitcoinning birliklaridir.",
	"signs_btn_share_on_nostr": "NOSTR-DA ULASHING",
	"signs_btn_what_is_nostr": "NOSTR NIMA?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "MURAKKAB INFLYATSIYA KALKULYATORI",
	"cic_description": "Ushbu murakkab inflyatsiya kalkulyatori yordamida maoshingiz inflyatsiyaga mos kelishi uchun qancha oshishi kerakligini bilib oling.",
	"what_can_i_do_about": "Inflyatsiya haqida",
	"what_can_i_do_about_2": "nima qila olaman?",
	"cic_inflation_cta": "Bitcoin yordamida inflyatsiyadan qutulish"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Nostr bilan Matritsadan qoching",
	"nostr_header": "NOSTR BILAN MATRITSADAN QOCHING"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr nima?",
	"what_is_nostr_header": "NOSTR NIMA?"
});

console.log(`\nDone! Created 9 simple files.`);
