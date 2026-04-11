/**
 * Creates Turkish (tr) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'tr';
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
	"404_title": "404 Hatası | Sayfa Bulunamadı",
	"404_message": "BU BOZUK SAYFA HİÇ HAVALICA DEĞİL",
	"404_home": "ANA SAYFAYA DÖN"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "bitcoin.rocks Hakkında — 2022'den Beri Bitcoin Eğitimi",
	"about_description": "bitcoin.rocks, 2022 yılında kurulan ücretsiz, açık kaynaklı bir Bitcoin eğitim web sitesidir. Misyonumuz eğitim yoluyla Bitcoin'in benimsenmesini hızlandırmaktır.",
	"about_header": "HAKKIMIZDA",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Misyonumuz",
	"about_mission_1": "bitcoin.rocks, basit bir misyonla 2022 yılında kuruldu: eğitim yoluyla Bitcoin'in benimsenmesini hızlandırmak.",
	"about_mission_2": "Bitcoin hakkında merak duyan birine paylaşacağınız ilk bağlantı olmak için varız. Bitcoin'in nasıl daha iyi bir dünya inşa ettiğini anlatan, samimi ve erişilebilir bir başlangıç noktası.",
	"about_mission_3": "Çok fazla insan Bitcoin'i yanlış anlıyor veya kendisine hiç düzgün tanıtılmamış. Herkesin anlayabileceği ücretsiz, kaliteli eğitim içerikleri sunarak bunu değiştirmek istiyoruz.",
	"about_what_we_do_header": "Ne Yapıyoruz",
	"about_what_we_do_1": "Bitcoin'e yeni başlayanlar için ücretsiz eğitim içerikleri oluşturuyoruz. Web sitemiz enflasyon, kendi saklama, cüzdanlar, Lightning Network ve Bitcoin'in diğer varlıklar ve ödeme sistemleriyle karşılaştırması gibi konuları kapsıyor.",
	"about_what_we_do_2a": "Topluluğunuzda Bitcoin farkındalığını yaymanıza yardımcı olmak için kapınıza kadar ",
	"about_what_we_do_2b": "ücretsiz Bitcoin çıkartmaları",
	"about_what_we_do_2c": " gönderiyoruz. Her ay yüzlerce kişi bu çıkartmalardaki QR kodları tarayarak Bitcoin hakkında bilgi ediniyor.",
	"about_what_we_do_3a": "Ayrıca yerel işletmelerin Bitcoin ödemelerini kabul etmeye başlamasına yardımcı olmak isteyen herkes için ",
	"about_what_we_do_3b": "yazdırılabilir broşürler",
	"about_what_we_do_3c": " ve ",
	"about_what_we_do_3d": "işletme kitleri",
	"about_what_we_do_3e": " sağlıyoruz.",
	"about_what_we_do_4": "Tüm içeriklerimiz sıfır ön Bitcoin bilgisi varsayar. İster Bitcoin'e yeni başlayın, ister paylaşacak kaynak arayan deneyimli bir Bitcoincu olun, bitcoin.rocks sizin için.",
	"about_editorial_header": "Editoryal Yaklaşımımız",
	"about_editorial_1": "bitcoin.rocks'taki her içerik dikkatle seçilmiş ve doğrulanmıştır. Veri veya istatistiklere atıfta bulunduğumuzda, bilgileri kendiniz doğrulayabilmeniz için kaynaklarımızı belirtiriz.",
	"about_editorial_2": "TIME Magazine, Forbes, MIT Technology Review, Lyn Alden ve daha birçok güvenilir kaynağa bağlantı veriyoruz. Gerçekler açıkça sunulduğunda Bitcoin'in kendini anlattığına inanıyoruz.",
	"about_editorial_3": "İçeriklerimiz düzenli olarak gözden geçirilip güncellenerek doğruluk ve güncellik sağlanır. Tüm içerik yalnızca Bitcoin eğitimine odaklanmaktadır.",
	"about_open_source_header": "Açık Kaynak",
	"about_open_source_1a": "bitcoin.rocks, MIT Lisansı altında lisanslı ücretsiz, açık kaynaklı bir projedir. Tüm kod tabanımız halka açıktır ",
	"about_open_source_1b": "GitHub'da",
	"about_open_source_1c": ".",
	"about_open_source_2": "Herkes bitcoin.rocks'a katkıda bulunabilir. Özellikle içeriklerimizi dünya genelinde insanların erişimine açan çevirmenleri memnuniyetle karşılıyoruz.",
	"about_open_source_3": "Gönüllü çevirmen topluluğumuz sayesinde bitcoin.rocks şu anda 51 dilde mevcut ve büyümeye devam ediyor.",
	"about_open_source_contribute": "Nasıl katkıda bulunacağınızı öğrenin.",
	"about_contact_header": "Bize Ulaşın",
	"about_contact_1": "Sizden haber almaktan mutluluk duyarız. İster bir sorunuz, ister bir öneriniz olsun, ister sadece merhaba demek isteyin, dilediğiniz zaman bize ulaşın.",
	"about_contact_email": "E-posta:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Çıkartmalarınızı 2 ila 4 hafta içinde alacaksınız. Bu süre içinde çıkartmalarınız için iyi bir yer bulmaya çalışın!",
	"sticker_success_2": "Çıkartmalar için iyi yerler:",
	"sticker_success_list_1": "insanların göreceği halka açık yerlerde",
	"sticker_success_list_2": "muhtemelen hızla kaldırılmayacak yerlerde (çıkartmalar kalıcı hasar vermez)",
	"sticker_success_list_3": "kolayca yapışacak yüzeylerde (metal, plastik, cam)",
	"sticker_success_list_4": "özel mülklere, işaretlerin üzerine, ATM'lere veya benzin istasyonlarına DEĞİL",
	"sticker_success_3": "Başkalarının çıkartmalarını nereye yapıştırdığını görmek ister misiniz?",
	"sticker_success_flyers_bar_new": "YENİ!",
	"sticker_success_flyers_bar_cta": "Bitcoin broşürleri yazdırın ve yapıştırın →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Talebinizi başarıyla aldık.",
	"sticker_language_success_2": "Yeni dosyaları gruplar halinde yayınlıyoruz, bu yüzden dosyalar indirilebilir hale gelene kadar birkaç hafta sürebilir. Yakında tekrar kontrol edin!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Kartpostallarınızı 1 ila 2 hafta içinde alacaksınız.",
	"postcard_success_2": "Bu kartpostalları tanıdığınız birine göndererek Bitcoin'in benimsenmesini hızlandırmaya yardımcı olduğunuz için teşekkürler!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Tabelalarınızı 1 ila 2 hafta içinde alacaksınız. Bu süre içinde tabelalarınız için iyi bir yer bulmaya çalışın!",
	"sign_success_3": "Başkalarının tabelalarını nereye koyduğunu görmek ister misiniz?",
	"signs_share_header": "TABELA KONUMLARINIZI PAYLAŞIN",
	"signs_share_c1": "Tabela konumunuzun fotoğrafını Nostr'da bizimle paylaşın ve size sat gönderelim! Satlar bitcoin'in birimleridir.",
	"signs_btn_share_on_nostr": "NOSTR'DA PAYLAŞ",
	"signs_btn_what_is_nostr": "NOSTR NEDİR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "BİLEŞİK ENFLASYON HESAPLAYICISI",
	"cic_description": "Bu bileşik enflasyon hesaplayıcısıyla maaşınızın enflasyona ayak uydurmak için ne kadar artması gerektiğini öğrenin.",
	"what_can_i_do_about": "Enflasyon hakkında",
	"what_can_i_do_about_2": "ne yapabilirim?",
	"cic_inflation_cta": "Bitcoin yardımıyla enflasyondan kurtulun"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Nostr ile Matrix'ten Kaçın",
	"nostr_header": "NOSTR İLE MATRİX'TEN KAÇIN"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr Nedir?",
	"what_is_nostr_header": "NOSTR NEDİR?"
});

console.log(`\nDone! Created 9 simple files.`);
