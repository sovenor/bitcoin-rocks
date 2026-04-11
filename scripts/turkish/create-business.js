/**
 * Creates Turkish (tr) translation files for all business/ pages
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'tr';
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
	"bitcoin_is_good_for_business": "Bitcoin işletmeler için iyidir",
	"biz_header": "BİTCOİN İŞLETMELER İÇİN İYİDİR",
	"biz_s1": "Minimum tutar olmadan düşük ücretler",
	"biz_s1_c1": "Bitcoin, tıpkı nakit gibi doğrudan müşterilerinizden ödeme almanızı sağlar. Bitcoin ağı, yüksek ücretler alan bankalar ve kredi kartı şirketleri gibi aracılar olmadan çalışır.",
	"biz_s2": "Anında ödeme",
	"biz_s2_c1": "Nakit gibi, Bitcoin ödemeleri de anında gerçekleşir. Kredi kartı şirketinin veya bankanın size para göndermesini beklemenize gerek yok. Bunun yerine, paranıza anında erişirsiniz.",
	"biz_s3": "Ters ibraz veya dolandırıcılık yok",
	"biz_s3_c1": "Bitcoin ödemeleri doğrudan sizinle müşterileriniz arasında gerçekleştiğinden, hiç kimse ters ibraz yoluyla paranızı geri alamaz.",
	"biz_s3_c2": "Sahte Bitcoin, Bitcoin ağı üzerinden gönderilemez, bu da işletmenize maliyet oluşturan dolandırıcılık işlemlerinden endişe etmenize gerek olmadığı anlamına gelir.",
	"biz_s4": "Daha fazla müşteri kazanın",
	"biz_s4_c1": "Milyonlarca insan Bitcoin sahibi ve onu kabul eden yerlerde harcamak istiyor.",
	"biz_s4_c2": "Sadece Bitcoin kabul ederek, işletmeniz Bitcoin kabul eden tüccar haritalarında listelenebilir ve yeni müşterilere ücretsiz olarak ulaşabilir.",
	"biz_s4_c3": "Bitcoin kabul etmek %100 ücretsizdir. Sözleşme veya gizli ücret yoktur."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Bitcoin'in işletmeler için neden iyi olduğunu öğrenin",
	"why_header": "BİTCOİN İŞLETMELER İÇİN İYİDİR",
	"why_good_for_you": "BİTCOİN SİZİN İÇİN DE İYİDİR!",
	"why_learn_more_lowercase": "Daha fazla öğrenin.",
	"why_s1": "Bitcoin'in enflasyonu yoktur",
	"why_s1_c1": "Enflasyon, yoktan daha fazla para basıldığında veya yaratıldığında ortaya çıkar. Bu, paranızın zamanla değer kaybetmesine neden olur.",
	"why_s1_c2": "Bitcoin'in sabit arzı vardır, bu da hiç kimsenin daha fazla Bitcoin basamayacağı anlamına gelir.",
	"why_s2": "Bitcoin'de banka hücumları olmaz",
	"why_s2_c1": "Son yıllarda birçok Amerikan bankası banka hücumları nedeniyle çökmüştür.",
	"why_s2_c2": "Bankalar paranızı sadece saklamak yerine, yatırım yapar ve borç verir. Bu yatırımlar başarısız olursa, paranızı iade edecek yeterli fonları kalmaz.",
	"why_s2_c3": "Ve FDIC sigorta fonu, sigortaladığı her 100 doların yalnızca 1 dolarına sahiptir.",
	"why_s3": "Bitcoin izinsizdir",
	"why_s3_c1": "Geleneksel finans ağlarından farklı olarak, Bitcoin kullanmak için izin gerektirmez.",
	"why_s3_c2": "Bu, hiç kimsenin herhangi bir nedenle Bitcoin kullanmanızı engelleyemeyeceği anlamına gelir. Sansür veya el koyma endişesi olmadan kullanabileceğiniz ilk finansal ağdır.",
	"why_s4": "Bitcoin daha iyi bir dünya inşa ediyor",
	"why_s4_c1": "Bitcoin, daha iyi bir dünya inşa eden yanlış anlaşılmış bir teknolojidir.",
	"why_s4_c2": "Bitcoin, insan hakları savunucularının özgürlük için mücadele etmesini sağlamış, küresel metan emisyonlarını azaltmış, milli parkları kurtarmış ve çok daha fazlasını yapmıştır."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "İşletmenizde Bitcoin ödemelerini kabul edin",
	"guide_header": "İŞLETMENİZDE BİTCOİN KABUL ETMEYE HAZIR MISINIZ?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Bitcoin kabul etme hakkında sıkça sorulan sorular",
	"faq_description": "İşletmenizde Bitcoin ödemelerini kabul etme hakkında sorularınız mı var?",
	"faq_header": "BİTCOİN ÖDEMELERİNİ KABUL ETME HAKKINDA SORULARINIZ MI VAR?",
	"faq_s1": "Bitcoin nedir?",
	"faq_s1_c1": "Bitcoin iki şeydir: dijital para ve bir bilgisayar ağı.",
	"faq_s1_c2": "Bitcoin ağı üzerinden doğrudan diğer insanlara bitcoin (dijital para) gönderebilirsiniz.",
	"faq_s1_c3": "Bitcoin ağı, bankalar ve kredi kartı şirketleri gibi aracılar veya merkezi otoriteler olmadan çalışır, böylece onların işlem ücretlerinden kaçınabilirsiniz.",
	"faq_s1_c4": "Bitcoin işlemleri hızla (10 dakika) kesinleşir ve asla geri alınamaz, böylece paranızın size ait olduğunu bilerek rahat uyuyabilirsiniz.",
	"faq_s2": "Bitcoin işletmeme nasıl fayda sağlayabilir?",
	"faq_s2_c1": "Bitcoin, daha düşük ücretlerle ödeme almanızı ve daha fazla müşteri kazanmanızı sağlar. Bitcoin ödemeleri minimum tutar olmadan düşük ücretlere sahiptir, anında gerçekleşir ve ters ibraz ile dolandırıcılığa karşı bağışıktır.",
	"faq_s2_c2": "Bitcoin kabul etmek ücretsizdir ve işletmenizi Bitcoin tüccar haritalarında listeleyerek Bitcoin kullanıcılarının sizi kolayca bulmasını sağlar.",
	"faq_s2_c3": "Bitcoin'in işletmeler için iyi olmasının tüm yollarını görün.",
	"faq_s3": "Bitcoin ödemelerini nasıl kabul ederim?",
	"faq_s3_c1": "Bitcoin ödemelerini kabul etmek için tek ihtiyacınız ücretsiz bir Bitcoin cüzdanıdır.",
	"faq_s3_c2": "Cüzdan rehberimiz sizi hızla ve kolayca hazırlar, böylece bugün Bitcoin kabul etmenin avantajlarından yararlanmaya başlayabilirsiniz!",
	"faq_s3_c3": "Cüzdan rehberine göz atın",
	"faq_s4": "Aldığım Bitcoin ödemelerini yerel para birimine çevirebilir miyim?",
	"faq_s4_c1": "Evet! Hibrit bir cüzdanla, aldığınız Bitcoin ödemelerini ödeme alınır alınmaz otomatik olarak yerel para birimine çevirebilirsiniz.",
	"faq_s4_c2": "Cüzdan rehberimiz hızlı ve kolay kurulumda size yardımcı olur.",
	"faq_s4_c3": "Aldığınız ödemelerin bir kısmını Bitcoin olarak tutmayı da seçebilirsiniz. Bitcoin'de tasarruf etmenin birçok avantajı vardır:",
	"faq_s4_c4": "Bitcoin tam rezervli bir finansal sistemdir.",
	"faq_s4_c5": "Bitcoin'in enflasyonu yoktur.",
	"faq_s4_c6": "Bu avantajlar Bitcoin'i uzun vadeli para biriktirmek için mükemmel bir yol yapar.",
	"faq_s4_c7": "Tüm Bitcoin ödemelerini dolara çevirmeye karar verseniz bile, çok daha düşük ücretlerle ödeme almanın ve daha fazla potansiyel müşteriye ulaşmanın avantajlarından yararlanırsınız.",
	"faq_s5": "Yüz yüze Bitcoin ödemelerini kabul edebilir miyim?",
	"faq_s5_c1": "Evet! Bitcoin cüzdanıyla yüz yüze Bitcoin ödemelerini kabul etmek kolaydır.",
	"faq_s5_c2": "Cüzdan rehberimiz işletmeniz için en iyisini seçmenize yardımcı olur.",
	"faq_s5_c3": "Cüzdan rehberine göz atın",
	"faq_s6": "Çevrimiçi Bitcoin ödemelerini kabul edebilir miyim?",
	"faq_s6_c1": "Evet! Mevcut çevrimiçi mağazanızla çevrimiçi Bitcoin ödemelerini kabul etmek kolaydır.",
	"faq_s6_c2": "Daha fazla bilgi için cüzdan rehberimize göz atın.",
	"faq_s7": "Müşterilerime Bitcoin kabul ettiğimi nasıl bildirebilirim?",
	"faq_s7_c1": "İşletmenizde sergileyebileceğiniz ve müşterilerinize Bitcoin kabul ettiğinizi bildirebileceğiniz ücretsiz 'Bitcoin Burada Kabul Edilir' çıkartmaları sunuyoruz.",
	"faq_s7_c2": "Çıkartma sipariş etmek için buraya tıklayın.",
	"faq_s7_c3": "Ayrıca işletmenizi ücretsiz olarak Bitcoin tüccar haritalarında listeleyebilir ve Bitcoin'lerini kabul eden işletmelerde harcamak isteyen milyonlarca Bitcoin kullanıcısına ulaşabilirsiniz.",
	"faq_s7_c4": "Şimdi kaydolun.",
	"faq_s8": "Bitcoin kabul ederek nasıl daha fazla müşteri kazanabilirim?",
	"faq_s8_c1": "Bitcoin'lerini kabul eden işletmelerde harcamak isteyen milyonlarca Bitcoin kullanıcısı var.",
	"faq_s8_c2": "Sadece Bitcoin ödemelerini kabul ederek, işletmeniz ücretsiz Bitcoin tüccar haritalarında listelenebilir ve yeni potansiyel müşterilere ulaşabilir.",
	"faq_s8_c3": "Şimdi kaydolun.",
	"faq_s9": "Bitcoin kabul etmenin maliyeti nedir?",
	"faq_s9_c1": "İşletmenizde Bitcoin kabul etmek %100 ücretsizdir. Sözleşme veya gizli ücret yoktur.",
	"faq_s9_c2": "Cüzdan rehberimize göz atın ve bugün Bitcoin ödemelerini kabul etmeye başlayın."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "İşletmeler için Bitcoin muhasebe rehberi",
	"accounting_description": "İşletme muhasebenizde Bitcoin ödemelerini doğru şekilde nasıl kaydedeceğinizi öğrenin.",
	"accounting_header": "BİTCOİN MUHASEBE REHBERİ",
	"accounting_s1_c1": "Bitcoin kabul etmenin daha düşük ücretlerle ödeme alma ve daha fazla müşteri kazanma gibi birçok avantajı vardır.",
	"accounting_s1_c2": "Cüzdan rehberimizdeki hibrit cüzdanı kullanıyor ve aldığınız Bitcoin'in %100'ünü otomatik olarak dolara satıyorsanız, mevcut muhasebenizde hiçbir şeyi değiştirmenize gerek yoktur.",
	"accounting_s1_c3": "Cüzdan rehberine göz atın.",
	"accounting_s1_c4": "Ancak, aldığınız Bitcoin ödemelerinin bir kısmını Bitcoin olarak tutuyorsanız, muhasebeniz için bazı verileri takip etmeniz gerekecektir. İlk bakışta korkutucu görünebilir, ancak aslında oldukça basittir.",
	"accounting_s1_c5": "Not: Bu rehber yalnızca bilgilendirme amaçlıdır ve vergi tavsiyesi niteliği taşımaz.",
	"accounting_s1_c6": "Vergi tavsiyesine ihtiyacınız varsa, Bitcoin muhasebesi konusunda uzmanlaşmış bir muhasebe firması olan Satoshi Pacioli Accounting Services'i öneriyoruz.",
	"accounting_s2": "MALİYET ESASINIZI TAKİP ETME",
	"accounting_s2_c1": "Maliyet esası takibi, dolar muhasebesi ile Bitcoin muhasebesi arasındaki en büyük fark olacaktır. İşletmenize tamamen Bitcoin perspektifinden baksanız bile, vergi beyannamenizde her işlemin dolar değerini raporlamanız gerekir.",
	"accounting_s2_c2": "QuickBooks kullanıyorsanız, bunu Bitcoin Sync eklentisiyle otomatik olarak yapabilirsiniz.",
	"accounting_s2_c3": "QuickBooks kullanmıyorsanız, Bitcoin muhasebesi konusunda uzmanlaşmış Satoshi Pacioli Accounting Services'i öneriyoruz.",
	"accounting_s2_c4": "Manuel takip için, aldığınız Bitcoin miktarını ve o günkü Bitcoin işleminin dolar değerini kaydedin.",
	"accounting_s2_c5": "Güncel Bitcoin dolar fiyatını buradan görüntüleyebilirsiniz.",
	"accounting_s2_c6": "Bu bilgileri bir Excel tablosunda takip edin ve muhasebecinize iletin.",
	"accounting_s2_c7": "Bu verileri otomatik olarak da Excel'e aktarabilirsiniz.",
	"accounting_s2_c8": "Geçmiş günlerdeki Bitcoin'in tarihsel dolar fiyatını da görüntüleyebilirsiniz, böylece bunu her gün yapmanız gerekmez.",
	"accounting_s3": "BİTCOİN'İNİZİ HARCAMA VEYA SATMA",
	"accounting_s3_c1": "Cüzdan rehberimizdeki hibrit cüzdanı kullanıyor ve aldığınız Bitcoin'in %100'ünü otomatik olarak dolara satıyorsanız, mevcut muhasebenizde hiçbir şeyi değiştirmenize gerek yoktur.",
	"accounting_s3_c2": "Cüzdan rehberine göz atın.",
	"accounting_s3_c3": "Aldığınız Bitcoin'in bir kısmını bir süre sonra harcamaya veya satmaya karar verirseniz, maliyet esasınızı takip ettiğiniz Excel tablosuna sattığınız fiyatı eklemeniz yeterlidir.",
	"accounting_s3_c4": "Örneğin, 1 Ocak'ta 100 $ değerinde Bitcoin aldıysanız ve 1 Şubat'ta yeni değeri 110 $ iken satmaya veya harcamaya karar verdiyseniz, muhasebenizde 10 $'lık bir sermaye kazancı kaydetmeniz gerekir.",
	"accounting_s3_c5": "Bu ters yönde de çalışabilir. Örneğin, 1 Ocak'ta 100 $ değerinde Bitcoin aldıysanız ve 1 Şubat'ta yeni değeri 90 $ iken satmaya veya harcamaya karar verdiyseniz, muhasebenizde 10 $'lık bir sermaye kaybı kaydetmeniz gerekir.",
	"accounting_s4": "EK YARDIMA İHTİYACIM VAR",
	"accounting_s4_c1": "Bitcoin'i işletme muhasebenize dahil etme konusunda ek yardıma ihtiyacınız varsa, Bitcoin muhasebesi konusunda uzmanlaşmış Satoshi Pacioli Accounting Services'i öneriyoruz.",
	"accounting_s4_c2": "Satoshi Pacioli Accounting Services hakkında daha fazla bilgi edinin."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Bitcoin ödemelerini nasıl kabul edersiniz",
	"wallets_header": "ÖDEME KABUL ETMEK İÇİN ÜCRETSİZ BİR BİTCOİN CÜZDANI EDİNİN",
	"wallets_intro_1": "Tüm Bitcoin cüzdanları birbirleriyle uyumludur, böylece müşterileriniz hangi cüzdanı kullanırlarsa kullansınlar Bitcoin ile ödeme yapabilirler.",
	"wallets_intro_2": "Saf Bitcoin cüzdanları:",
	"wallets_intro_3": "Bunlar, Bitcoin'in tüm avantajlarını açığa çıkaran saf Bitcoin cüzdanlarıdır: aracı yok, düşük ücretler ve ters ibraz veya dolandırıcılık yok.",
	"wallets_intro_4": "Hibrit cüzdanlar:",
	"wallets_intro_5": "Bunlar, müşteriniz ödeme yaptığı anda Bitcoin'in istediğiniz yüzdesini dolara çevirmenizi sağlar. Ücretler hâlâ kredi kartlarından düşüktür, ancak saf Bitcoin ödemelerinden yüksektir.",
	"wallets_intro_6": "Her iki tür de Bitcoin kabul etmenin harika yollarıdır. Spesifik cüzdan, işletmenizin büyüklüğüne ve türüne bağlı olacaktır.",
	"wallets_choice_sole": "tek kişilik işletmeler için cüzdanlar",
	"wallets_choice_multiple": "birden fazla çalışanı olan işletmeler için cüzdanlar",
	"wallets_choice_online": "çevrimiçi işletmeler için cüzdanlar",
	"wallets_choice_invoice": "fatura kesen işletmeler için cüzdanlar",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Mevcut Square PoS terminaliniz veya çevrimiçi mağaza entegrasyonunuzla Bitcoin ödemelerini kabul edebilirsiniz. Bitcoin ödemelerini kabul etmek hiç bu kadar kolay olmamıştı.",
	"wallets_feature_bitcoin_only": "Saf Bitcoin cüzdanı",
	"wallets_feature_no_info": "Bilgi gerekmez",
	"wallets_feature_in_person": "Yalnızca yüz yüze ödemeler",
	"wallets_feature_settles_bitcoin": "%100 Bitcoin olarak ödeme",
	"wallets_feature_hybrid": "Hibrit cüzdan",
	"wallets_feature_info": "İşletme bilgileri gerekli",
	"wallets_feature_in_person_online": "Yüz yüze ve çevrimiçi ödemeler",
	"wallets_feature_settles_both": "Bitcoin ve dolar olarak ödeme",
	"wallets_feature_multiple_employees": "Birden fazla çalışan desteği (BPT)",
	"wallets_feature_self_hosted": "Kendi sunucunuzda barındırma = %0 ücret",
	"wallets_feature_online_store": "Çevrimiçi mağaza entegrasyonu",
	"wallets_feature_invoicing": "Ücretsiz faturalama yazılımı",
	"wallets_get_wallet": "CÜZDAN EDİN"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Bitcoin tüccar haritaları — İşletmenizi ücretsiz listeleyin",
	"maps_header": "BİTCOİN TÜCCAR HARİTALARINA KAYDOLUN VE DAHA FAZLA MÜŞTERİ KAZANIN",
	"maps_request_details": "İşletme bilgilerinizi aşağıya girin ve sizi ücretsiz olarak Bitcoin tüccar haritalarına ekleyelim. Bu, Bitcoin kullanıcılarının işletmenizi bulmasını ve Bitcoin'lerini sizde harcamasını sağlayacaktır!",
	"maps_view": "Haritayı buradan görüntüleyin."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "İşletmeniz 1 ila 2 hafta içinde Bitcoin tüccar haritalarına eklenecektir.",
	"kit_success_2": "Haritayı buradan görüntüleyin."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Bitcoin Burada Kabul Edilir çıkartmaları",
	"stickers_header": "ÜCRETSİZ 'BİTCOİN BURADA KABUL EDİLİR' ÇIKARTMALARI EDİNİN",
	"stickers_request": "Ücretsiz çıkartmalar edinin",
	"stickers_request_details": "Bu ücretsiz 'Bitcoin Burada Kabul Edilir' çıkartmalarıyla müşterilerinize Bitcoin ödemelerini kabul ettiğinizi bildirin.",
	"stickers_country_global_print": "Dünya geneli — Kendi çıkartmalarımı basacağım",
	"stickers_request_instructions": "Düz beyaz bir zarfta üç adet 'Bitcoin Burada Kabul Edilir' çıkartması alacaksınız. İşletmeniz için üçten fazla çıkartmaya ihtiyacınız varsa, lütfen birden fazla kez talep edin. Adres bilgileri ücretsiz çıkartmalar gönderildikten sonra silinir.",
	"stickers_print_details": "Nerede yaşarsanız yaşayın, kendi 'Bitcoin Burada Kabul Edilir' çıkartmalarınızı basabilirsiniz! Çıkartma dosyalarını ve talimatları görüntülemek için aşağıda dilinize tıklayın.",
	"stickers_request_language": "Dilinizi görmüyor musunuz? Aşağıdaki formu doldurup kendi dilinizde 'Bitcoin Burada Kabul Edilir' çıkartma dosyaları talep edin."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Çıkartmalarınızı 1 ila 2 hafta içinde düz beyaz bir zarfta alacaksınız. Her zarfta 3 çıkartma bulunur. İşletmeniz için 3'ten fazla çıkartmaya ihtiyacınız varsa, lütfen ek bir paket talep edin!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Çıkartma dosyanızı 3 ila 4 hafta içinde oluşturup yayınlayacağız. Sabrınız için teşekkürler!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin işletme kiti",
	"kit_header": "BİTCOİN İŞLETME KİTİNİZİ BASTIRIR",
	"kit_request": "ÜCRETSİZ KİT TALEP EDİN",
	"kit_request_details": "Her Bitcoin işletme kiti, yerel bir işletmeyi Bitcoin kabul etmeye ikna etmenizi kolaylaştıran iki broşür içerir.",
	"kit_country_global_print": "Dünya geneli — Kendi kitlerimimi basacağım",
	"kit_enter_address": "Posta adresinizi girin, size düz beyaz bir zarfta ücretsiz bir Bitcoin işletme kiti göndereceğiz. Adres bilgileri kit gönderildikten sonra silinir.",
	"kit_print_details": "Nerede yaşarsanız yaşayın, kendi broşürlerinizi basarak katılabilirsiniz! Ayrıca baskıdan kaçınmak için işletmeleri dijital işletme kitimize yönlendirebilirsiniz.",
	"kit_view_files": "DOSYALARI GÖRÜNTÜLE",
	"kit_digital_kit": "DİJİTAL KİT",
	"kit_resources": "HER KİT BU ÜCRETSİZ KAYNAKLARA REFERANS VERİR"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Bitcoin işletme kitinizi 1 ila 2 hafta içinde düz beyaz bir zarfta alacaksınız."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Kendi Bitcoin işletme kitinizi bastırın",
	"english_bbk_files_description": "Broşür dosyalarını buradan indirin.",
	"english_header": "İNGİLİZCE BİTCOİN İŞLETME KİTİNİZİ BASTIRIR"
});

console.log(`\nDone! Created 14 business files.`);
