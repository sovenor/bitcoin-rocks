/**
 * Creates Azerbaijani (az) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'az';
const today = '2026-04-06';

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
	"404_title": "404 Xəta | Səhifə tapılmadı",
	"404_message": "BU QIRILMIŞ SƏHİFƏ HEÇ DƏ ƏLADIR",
	"404_home": "ANA SƏHİFƏYƏ QAYIT"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "bitcoin.rocks haqqında — 2022-ci ildən Bitcoin Təhsili",
	"about_description": "bitcoin.rocks 2022-ci ildə təsis edilmiş pulsuz, açıq mənbəli Bitcoin təhsil veb saytıdır. Missiyamız təhsil vasitəsilə Bitcoin qəbulunu sürətləndirməkdir.",
	"about_header": "HAQQIMIZDA",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Missiyamız",
	"about_mission_1": "bitcoin.rocks 2022-ci ildə sadə bir missiya ilə təsis edildi: təhsil vasitəsilə Bitcoin qəbulunu sürətləndirmək.",
	"about_mission_2": "Biz Bitcoin haqqında maraqlanan birinə paylaşacağınız ilk link olaraq mövcuduq. Bitcoin-in necə daha yaxşı bir dünya qurduğunu izah edən dost və əlçatan bir başlanğıc nöqtəsi.",
	"about_mission_3": "Çox sayda insan Bitcoin-i yanlış anlayır və ya ona düzgün tanıdılmayıb. Biz hər kəsin başa düşə biləcəyi pulsuz, yüksək keyfiyyətli təhsil məzmunu təqdim edərək bunu dəyişdirmək istəyirik.",
	"about_what_we_do_header": "Nə Edirik",
	"about_what_we_do_1": "Biz Bitcoin-ə yeni gələnlər üçün pulsuz təhsil məzmunu yaradırıq. Veb saytımız inflyasiya, özünə saxlama, pul kisələri, Lightning Şəbəkəsi və Bitcoin-in digər aktivlər və ödəniş sistemləri ilə müqayisəsi kimi mövzuları əhatə edir.",
	"about_what_we_do_2a": "Biz ",
	"about_what_we_do_2b": "pulsuz Bitcoin etiketləri",
	"about_what_we_do_2c": " göndəririk ki, icmanızda Bitcoin məlumatlılığını yaymağa kömək edəsiniz. Hər ay yüzlərlə insan bu etiketlərdəki QR kodlarını skan edərək Bitcoin haqqında öyrənir.",
	"about_what_we_do_3a": "Biz həmçinin ",
	"about_what_we_do_3b": "çap oluna bilən vərəqələr",
	"about_what_we_do_3c": " və ",
	"about_what_we_do_3d": "biznes dəstləri",
	"about_what_we_do_3e": " təqdim edirik ki, yerli bizneslərə Bitcoin ödənişlərini qəbul etməyə kömək etmək istəyən hər kəs üçün.",
	"about_what_we_do_4": "Bütün məzmunumuz Bitcoin haqqında sıfır əvvəlki bilik nəzərdə tutur. İstər Bitcoin-ə yeni olun, istərsə də paylaşmaq üçün resurs axtaran təcrübəli Bitcoinçi olun, bitcoin.rocks sizin üçündür.",
	"about_editorial_header": "Redaksiya Yanaşmamız",
	"about_editorial_1": "bitcoin.rocks-dakı hər bir məzmun seçilmiş və faktlarla yoxlanılmışdır. Məlumat və ya statistikaya istinad etdikdə, mənbələrimizi göstəririk ki, məlumatı özünüz yoxlaya biləsiniz.",
	"about_editorial_2": "TIME Magazine, Forbes, MIT Technology Review, Lyn Alden və bir çox digər etibarlı mənbələrə keçid veririk. İnanırıq ki, faktlar aydın təqdim edildikdə Bitcoin özü danışır.",
	"about_editorial_3": "Məzmunumuz mütəmadi olaraq nəzərdən keçirilir və yenilənir ki, dəqiqlik və aktualları təmin edək. Bütün məzmun yalnız Bitcoin təhsilinə yönəlmişdir.",
	"about_open_source_header": "Açıq Mənbə",
	"about_open_source_1a": "bitcoin.rocks MIT Lisenziyası altında lisenziyalaşdırılmış pulsuz, açıq mənbəli layihədir. Bütün kod bazamız ",
	"about_open_source_1b": "GitHub-da",
	"about_open_source_1c": " ictimaiyyətə açıqdır.",
	"about_open_source_2": "Hər kəs bitcoin.rocks-a töhfə verə bilər. Xüsusilə məzmunumuzu dünya üzrə insanlara əlçatan edən tərcüməçiləri xoş qarşılayırıq.",
	"about_open_source_3": "Könüllü tərcüməçilər icmamız sayəsində bitcoin.rocks hazırda 32 dildə mövcuddur və artmaqda davam edir.",
	"about_open_source_contribute": "Necə töhfə verəcəyinizi öyrənin.",
	"about_contact_header": "Bizimlə Əlaqə",
	"about_contact_1": "Sizdən eşitməkdən məmnun olarıq. İstər sualınız, təklifiniz olsun, istərsə də sadəcə salam demək istəyirsiniz, istənilən vaxt əlaqə saxlayın.",
	"about_contact_email": "E-poçt:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Etiketlərinizi 2-4 həftə ərzində alacaqsınız. Gözləyərkən etiketlərinizi yapışdırmaq üçün yaxşı yer düşünməyə çalışın!",
	"sticker_success_2": "Yaxşı etiket yerləri:",
	"sticker_success_list_1": "insanların görəcəyi ictimai yerlərdə",
	"sticker_success_list_2": "tez çıxarılması ehtimalı az olan yerlərdə (etiketlər heç bir daimi zərər vermir)",
	"sticker_success_list_3": "asanlıqla yapışacaq səthlərə (metal, plastik, şüşə)",
	"sticker_success_list_4": "Xüsusi mülkiyyətə, lövhələrin üstünə, bankomatlara və ya yanacaq nasoslarına yapışdırmayın",
	"sticker_success_3": "Başqalarının etiketlərini harada yapışdırdığını görmək istəyirsiniz?",
	"sticker_success_flyers_bar_new": "YENİ!",
	"sticker_success_flyers_bar_cta": "Bitcoin Vərəqələri Çap Edin və Asın →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Sorğunuzu uğurla aldıq.",
	"sticker_language_success_2": "Yeni faylları partiyalarla dərc edirik, ona görə bu faylların endirmə üçün əlçatan olması bir neçə həftə çəkə bilər. Tezliklə yenidən yoxlayın!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Açıqçalarınızı 1-2 həftə ərzində alacaqsınız.",
	"postcard_success_2": "Bu açıqçaları tanıdığınız birinə göndərərək Bitcoin qəbulunu sürətləndirməyə kömək etdiyiniz üçün təşəkkür edirik!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Lövhələrinizi 1-2 həftə ərzində alacaqsınız. Gözləyərkən lövhələrinizi asmaq üçün yaxşı yerlər düşünməyə çalışın!",
	"sign_success_3": "Başqalarının lövhələrini harada asdığını görmək istəyirsiniz?",
	"signs_share_header": "LÖVHƏ YERLƏRİNİZİ PAYLAŞIN",
	"signs_share_c1": "Nostr-da lövhə yerinizin şəklini bizimlə paylaşın və biz sizə sats zap edəcəyik! Sats Bitcoin-in kiçik hissələridir.",
	"signs_btn_share_on_nostr": "NOSTR-DA PAYLAŞ",
	"signs_btn_what_is_nostr": "NOSTR NƏDİR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "MÜRƏKKƏB İNFLYASİYA KALKULYATORU",
	"cic_description": "Bu Mürəkkəb İnflyasiya Kalkulyatoru ilə maaşınızın inflyasiya ilə ayaqlaşmaq üçün nə qədər artması lazım olduğunu öyrənin.",
	"what_can_i_do_about": "İnflyasiya haqqında",
	"what_can_i_do_about_2": "nə edə bilərəm?",
	"cic_inflation_cta": "Bitcoin ilə İnflyasiyadan Çıxın"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Nostr ilə Matrisdən Qaçın",
	"nostr_header": "NOSTR İLƏ MATRİSDƏN QAÇIN"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr nədir?",
	"what_is_nostr_header": "NOSTR NƏDİR?"
});

console.log('\nDone! Simple files created for Azerbaijani (az).');
