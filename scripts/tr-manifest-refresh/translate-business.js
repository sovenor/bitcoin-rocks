#!/usr/bin/env node
/**
 * Turkish manifest refresh — business/* namespaces.
 *
 * Idempotent.
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
	"tr.json",
);

const T = {
	// ─────────── business/accounting ───────────
	"business/accounting/accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting/accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting/accounting_card_pacioli_title":
		"Satoshi Pacioli Muhasebe Hizmetleri",
	"business/accounting/accounting_card_spreadsheet_source": "The Spreadsheet Guru",
	"business/accounting/accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting/accounting_example_gain_result": "+$10",
	"business/accounting/accounting_example_loss_result": "−$10",
	"business/accounting/accounting_description":
		"Bitcoin'i defterlerinde kabul etmek için sade bir Türkçe rehber — hibrit cüzdanlar, maliyet bedeli, sermaye kazançları ve ne zaman bir muhasebeciye danışmalısın.",
	"business/accounting/accounting_s1_c1":
		"Bitcoin kabul etmenin en basit yolu, ödeme geldiği anda aldığın Bitcoin'in %100'ünü otomatik olarak dolara (ya da yerel para birimine) çeviren hibrit bir cüzdan kullanmaktır.",
	"business/accounting/accounting_s1_c2":
		"Bu kurulumla defterlerin bugünkü gibi görünür — sonuç her seferinde dolardır. Maliyet bedeli yok, sermaye kazancı yok, yeni tablolar yok.",
	"business/accounting/accounting_s2":
		"Bir kısmını Bitcoin olarak tutarsan: maliyet bedelini takip etmek",
	"business/accounting/accounting_s2_c1":
		"Bazı işletmeler aldıkları Bitcoin'in tamamını otomatik dönüştürmek yerine bir kısmını saklamayı tercih eder. Sen de öyleysen, ek olarak yapman gereken esas iş, maliyet bedelini takip etmektir — her Bitcoin ödemesinin alındığı günkü dolar değeri.",
	"business/accounting/accounting_s2_c2":
		"İşini tamamen Bitcoin cinsinden düşünsen bile çoğu vergi otoritesi yine de dolar değerinin raporlanmasını ister. İyi haber: işlem başına yalnızca iki sayı var — alınan Bitcoin miktarı ve o günkü dolar değeri.",
	"business/accounting/accounting_s2_c3":
		"Aramayı otomatikleştirmek için aşağıdaki araçları kullan; her gün fiyat kontrol etmen gerekmesin.",
	"business/accounting/accounting_s3":
		"Sakladığın Bitcoin'i harcamak ya da satmak",
	"business/accounting/accounting_s3_c1":
		"Her ödemeyi otomatik olarak dolara çeviriyorsan bu bölümü atla — seni ilgilendirmiyor.",
	"business/accounting/accounting_s3_c2":
		"Bir kısmını Bitcoin olarak tuttuysan ve sonra harcamaya ya da satmaya karar verdiysen, satış fiyatını aynı maliyet bedeli tablosuna ekle. Bitcoin'in alındığında ettiği değerle harcandığında ya da satıldığında ettiği değer arasındaki fark, sermaye kazancı ya da kaybıdır.",
	"business/accounting/accounting_s3_c3": "İki hızlı örnek:",
	"business/accounting/accounting_s4":
		"Bitcoin'den anlayan bir uzman mı lazım?",
	"business/accounting/accounting_s4_c1":
		"Bunu birine devretmeyi tercih edersen — ya da Bitcoin muhasebesi hibrit bir cüzdanın kaldırabileceğinden daha karmaşıksa — işletmeler için Bitcoin muhasebesinde uzmanlaşmış bir firma olan Satoshi Pacioli Muhasebe Hizmetleri'ni şiddetle tavsiye ediyoruz.",
	"business/accounting/bitcoin_business_accounting_guide":
		"İşletmen için Bitcoin muhasebesi",
	"business/accounting/accounting_card_bpr_label": "BITCOIN FİYATI",
	"business/accounting/accounting_card_bpr_title":
		"Bitcoin'in güncel ya da geçmiş dolar fiyatına bak",
	"business/accounting/accounting_card_pacioli_label": "BITCOIN MUHASEBECİLERİ",
	"business/accounting/accounting_card_spreadsheet_label": "EXCEL'E AKTAR",
	"business/accounting/accounting_card_spreadsheet_title":
		"Bitcoin fiyatlarını otomatik olarak Excel'e çek",
	"business/accounting/accounting_card_wallets_label": "HİBRİT CÜZDANLAR",
	"business/accounting/accounting_card_wallets_title":
		"Önerdiğimiz işletme cüzdanlarına bak",
	"business/accounting/accounting_disclaimer":
		"Bu rehber yalnızca bilgilendirme amaçlıdır ve vergi tavsiyesi olarak değerlendirilmemelidir. Kendi durumuna özel vergi tavsiyesi için lütfen yetkin bir muhasebeciye danış.",
	"business/accounting/accounting_disclaimer_label": "Lütfen unutma",
	"business/accounting/accounting_example_feb_1": "1 Şubat",
	"business/accounting/accounting_example_gain_badge": "Sermaye kazancı",
	"business/accounting/accounting_example_gain_explain":
		"10 dolarlık sermaye kazancı kaydedersin.",
	"business/accounting/accounting_example_jan_1": "1 Ocak",
	"business/accounting/accounting_example_loss_badge": "Sermaye kaybı",
	"business/accounting/accounting_example_loss_explain":
		"10 dolarlık sermaye kaybı kaydedersin.",
	"business/accounting/accounting_example_received_label": "Alınan",
	"business/accounting/accounting_example_sold_label": "Satılan ya da harcanan",
	"business/accounting/accounting_hero_subtitle":
		"İşletmende Bitcoin kabul etmek muhasebeni karmaşıklaştırmak zorunda değil. İşte kısa hâli — bir de bunu zahmetsiz yapmak için araçlar ve uzmanlar.",
	"business/accounting/accounting_intro_c1":
		"Halihazırda nakit ya da kart kabul ediyorsan, defterlerine Bitcoin eklemek göründüğünden daha basit. İki yolun var: her Bitcoin ödemesini geldiği anda otomatik olarak dolara çevir (yeni muhasebeye gerek yok), ya da bir kısmını Bitcoin olarak tut (takip edecek birkaç ek sayı).",
	"business/accounting/accounting_intro_c2":
		"Bu rehber ikisini de adım adım anlatıyor — böylece işine uygun olanı seçip Bitcoin kabul etmeye güvenle başlayabilirsin.",
	"business/accounting/accounting_s1": "Kolay yol: dolara otomatik çevirme",
	"business/accounting/accounting_s3_c6":
		"Hepsi bu kadar. Altında yatan matematik, değer kazanan ya da kaybeden başka herhangi bir varlığın muhasebeleştirilmesiyle birebir aynı.",
	"business/accounting/sources_bitcoin_price_report":
		"Bitcoin Price Report — Bitcoin'in güncel ve geçmiş dolar fiyatı",
	"business/accounting/sources_satoshi_pacioli":
		"Satoshi Pacioli Muhasebe Hizmetleri — İşletmeler için Bitcoin muhasebesi",
	"business/accounting/sources_spreadsheet_guru":
		"The Spreadsheet Guru — Kripto fiyatlarını Excel'e aktarma",

	// ─────────── business/faq ───────────
	"business/faq/faq_hero_subtitle":
		"İşyeri sahiplerinin Bitcoin kabul etmeye başlamadan önce en çok sorduğu soruların kısa yanıtları — ücretler, ödeme alma, cüzdanlar, ters ibrazlar, maliyet ve daha fazlası.",
	"business/faq/faq_intro_c1":
		"Cevabı görmek için aşağıdaki herhangi bir soruya dokun. Bitcoin kabul etmeye hazır olduğunda, sayfanın altındaki işletme kaynakları her adımda sana yol gösterir.",

	// ─────────── business/index ───────────
	"business/index/biz_label_accounting": "MUHASEBE",
	"business/index/biz_label_faq": "SSS",
	"business/index/biz_label_maps": "İŞYERİ HARİTALARI",
	"business/index/biz_label_rewards": "ÖDÜLLER",
	"business/index/biz_label_stickers": "ÇIKARTMALAR",
	"business/index/biz_label_wallets": "CÜZDANLAR",
	"business/index/biz_meta_description":
		"İşletmende Bitcoin kabul et: daha düşük ücretler, anında ödeme, ters ibraz yok ve daha çok müşteri.",
	"business/index/business_hero_subtitle":
		"Daha düşük ücretlerle ödeme al, paranı anında al ve milyonlarca yeni müşteriye ulaş — sözleşme ve gizli maliyet yok.",
	"business/index/business_intro_c1":
		"Bitcoin işine, ödeme almanın daha hızlı, daha ucuz ve daha gizli bir yolunu sunar. Aracı yok. Ters ibraz yok. Sözleşme yok. Sadece müşterilerinden doğrudan sana, saniyeler içinde uzlaşan para.",
	"business/index/business_intro_c2":
		"Aşağıda Bitcoin'in işletmeler için neden iyi olduğunun kısa hâli ve onun altında bugün kabul etmeye başlamak için ihtiyacın olan tüm kaynaklar var.",
	"business/index/business_resources_heading":
		"Bitcoin'i kabul etmek için ihtiyacın olan her şey",
	"business/index/business_resources_intro":
		"Bu kaynakları kendi hızında çalış. Her biri kısa, pratik bir rehberdir.",

	// ─────────── business/maps ───────────
	"business/maps/biz_maps_form_header": "Bize işletmeni anlat",
	"business/maps/biz_maps_form_intro":
		"Seni listeye almak için yalnızca birkaç ayrıntıya ihtiyacımız var. Adres verileri yalnızca işletmeni haritalara göndermeye yetecek kadar saklanır.",
	"business/maps/biz_maps_hero_subtitle":
		"Bitcoin kabul eden işyerlerinin açık, dünya çapındaki rehberi olan BTC Map'te işletmeni ücretsiz listele — böylece yakındaki Bitcoin'ciler seni bulup işletmende Bitcoin harcayabilsin.",
	"business/maps/biz_maps_hero_title":
		"İşletmeni Bitcoin işyeri haritalarına ekle",
	"business/maps/biz_maps_intro_c1":
		"Bitcoin'ciler aktif olarak harcayacak yer arıyor. İşletmeni haritaya eklemek, yakında yiyecek, alışveriş ya da konaklama yeri arayan her Bitcoin kullanıcısının önüne çıkarır — sana hiçbir maliyeti olmadan.",
	"business/maps/biz_maps_intro_c2":
		"Aşağıdaki kısa formu doldurman yeterli; işletmeni senin adına BTC Map ve diğer Bitcoin işyeri haritalarına biz iletiriz.",
	"business/maps/biz_maps_meta_description":
		"İşletmeni BTC Map ve diğer Bitcoin işyeri haritalarına ücretsiz listele; böylece yakındaki Bitcoin'ciler seni bulabilsin.",
	"business/maps/biz_maps_placeholder_address": "Açık adres",
	"business/maps/biz_maps_placeholder_category":
		"Kategori (örn. restoran, kafe, otel)",
	"business/maps/biz_maps_placeholder_city": "Şehir",
	"business/maps/biz_maps_placeholder_country": "Ülke",
	"business/maps/biz_maps_placeholder_name": "İşletme adı",
	"business/maps/biz_maps_placeholder_region": "İl / Eyalet / Bölge",
	"business/maps/biz_maps_placeholder_website":
		"İnternet sitesi (isteğe bağlı)",
	"business/maps/biz_maps_view_map_cta": "BTC Map'i görüntüle",

	// ─────────── business/maps-success ───────────
	"business/maps-success/biz_maps_success_btn_view_map":
		"BTC Map'i görüntüle",
	"business/maps-success/biz_maps_success_hero_subtitle":
		"İşletmeni gönderdiğin için teşekkürler. Yakında seni Bitcoin işyeri haritalarına ekleyeceğiz.",
	"business/maps-success/biz_maps_success_hero_title": "İstek alındı 🎉",
	"business/maps-success/biz_maps_success_timeline_c1":
		"İşletmen 1-2 hafta içinde BTC Map ve diğer Bitcoin işyeri rehberlerinde listelenecek. Haritaları doğru tutmak için her başvuruyu elle inceliyoruz.",
	"business/maps-success/biz_maps_success_timeline_c2":
		"Listelemen yayına girdiğinde, yakındaki Bitcoin'ciler işletmeni bulup orada Bitcoin harcamaya gelebilir.",
	"business/maps-success/biz_maps_success_timeline_header": "Sıradaki ne",
	"business/maps-success/biz_maps_success_view_c1":
		"Sen beklerken, dünyada Bitcoin kabul eden büyüyen işyeri ağını görmek için BTC Map'e bir göz at.",
	"business/maps-success/biz_maps_success_view_header":
		"Nerede görüneceğini gör",

	// ─────────── business/sticker-files/english/index ───────────
	"business/sticker-files/english/index/english_biz_sticker_files_description":
		"Kendi 'Bitcoin Burada Kabul Edilir' çıkartmalarını yazdırmak için İngilizce çıkartma dosyalarını indir.",
	"business/sticker-files/english/index/biz_stickers_english_hero_subtitle":
		"Müşterilerine Bitcoin kabul ettiğini bildirmek için kendi İngilizce 'Bitcoin Accepted Here' çıkartmalarını yazdır.",
	"business/sticker-files/english/index/biz_stickers_english_hero_title":
		"İngilizce 'Bitcoin Accepted Here' çıkartma dosyalarını indir",

	// ─────────── business/sticker-language-success ───────────
	"business/sticker-language-success/biz_sticker_language_success_hero_subtitle":
		"'Bitcoin Burada Kabul Edilir' çıkartma dosyalarını kendi dilinde istediğin için teşekkürler.",
	"business/sticker-language-success/biz_sticker_language_success_hero_title":
		"İstek alındı 🎉",
	"business/sticker-language-success/biz_sticker_language_success_timeline_c1":
		"Çıkartma dosyalarını 3-4 hafta içinde oluşturup yayımlayacağız. Hazır olduklarında bunları çıkartma dosyaları sayfamızdan ücretsiz indirip yazdırabileceksin.",
	"business/sticker-language-success/biz_sticker_language_success_timeline_c2":
		"Çıkartma dosyaları gruplar hâlinde yayımlanıyor; bu yüzden senin dilinin yayına girmesi birkaç hafta sürebilir. Sabrın için teşekkürler!",
	"business/sticker-language-success/biz_sticker_language_success_timeline_header":
		"Sıradaki ne",

	// ─────────── business/sticker-success ───────────
	"business/sticker-success/biz_sticker_success_btn_order_bulk":
		"Toplu sipariş ver",
	"business/sticker-success/biz_sticker_success_btn_request_more":
		"Bir paket daha ücretsiz iste",
	"business/sticker-success/biz_sticker_success_hero_subtitle":
		"Ücretsiz 'Bitcoin Accepted Here' çıkartmaların 2-4 hafta içinde, içinde 3 çıkartma bulunan düz beyaz bir zarfla sana ulaşacak.",
	"business/sticker-success/biz_sticker_success_hero_title":
		"Çıkartmaların yola çıktı 🎉",
	"business/sticker-success/biz_sticker_success_more_c1":
		"3 çıkartma işletmen için yetmiyorsa, çekinmeden bir paket daha ücretsiz iste — ya da kullandığımız basımevinden toplu sipariş ver.",
	"business/sticker-success/biz_sticker_success_more_header":
		"Daha fazla çıkartmaya mı ihtiyacın var?",
	"business/sticker-success/biz_sticker_success_tip_1":
		"Müşteriler içeri girmeden görsünler diye ön kapına ya da camına",
	"business/sticker-success/biz_sticker_success_tip_2":
		"Yazar kasa, POS terminali ya da ödeme alanın yakınına",
	"business/sticker-success/biz_sticker_success_tip_3":
		"Menülere, fiyat listelerine ya da bahşiş kavanozlarına",
	"business/sticker-success/biz_sticker_success_tip_4":
		"Sahibi olmadığın ya da yapıştırmaya iznin olmayan hiçbir yere yapıştırma",
	"business/sticker-success/biz_sticker_success_tips_header":
		"Çıkartmalarını yapıştırmak için iyi yerler",

	// ─────────── business/stickers ───────────
	"business/stickers/biz_stickers_hero_subtitle":
		"Müşterilerine Bitcoin kabul ettiğini bildir. İşletmende asmak için ücretsiz bir 'Bitcoin Accepted Here' çıkartma paketi sipariş et.",
	"business/stickers/biz_stickers_hero_title":
		"Ücretsiz 'Bitcoin Accepted Here' çıkartmaları",
	"business/stickers/biz_stickers_intro_c1":
		"Bitcoin kabul etmek işin yarısı — müşterilerinin de bunu bilmesi gerekir. Bu küçük 'Bitcoin Accepted Here' çıkartmaları, ön kapına, kasana, menüne ya da müşterilerin ödeme öncesi göreceği başka her yere yapıştırılabilecek şekilde tasarlandı.",
	"business/stickers/biz_stickers_intro_c2":
		"ABD veya Kanada'da herhangi bir adrese ücretsiz paketi göndeririz ya da dünyanın her yerinde kendin yazdırabilirsin.",
	"business/stickers/biz_stickers_option_canada":
		"🇨🇦 Kanada — Posta ile ücretsiz",
	"business/stickers/biz_stickers_option_print":
		"🌍 Küresel — Kendim yazdırırım",
	"business/stickers/biz_stickers_option_usa":
		"🇺🇸 ABD — Posta ile ücretsiz",
	"business/stickers/biz_stickers_placeholder_translation1":
		"'Bitcoin Accepted Here' çevirisi",
	"business/stickers/biz_stickers_placeholder_translation2":
		"'Scan to learn why Bitcoin is good for business.' çevirisi",
	"business/stickers/biz_stickers_print_c1":
		"Nerede yaşadığın fark etmeksizin kendi 'Bitcoin Accepted Here' çıkartmalarını yazdırabilirsin. Çıkartma dosyalarını ve yazdırma talimatlarını indirmek için aşağıdaki dilini tıkla.",
	"business/stickers/biz_stickers_print_header":
		"Kendi çıkartma dosyalarını yazdır",
	"business/stickers/biz_stickers_request_c1":
		"'Bitcoin Accepted Here' çıkartma dosyalarını kendi yerel dilinde istemek için aşağıdaki formu doldur. Hazır olduklarında sana haber veririz.",
	"business/stickers/biz_stickers_request_header":
		"Dilin listede yok mu?",
	"business/stickers/biz_stickers_step_description":
		"ABD ve Kanada'daki adreslere ücretsiz paket göndeririz. Dünyanın başka her yerinde kendin yazdırabilirsin.",
	"business/stickers/biz_stickers_step_header":
		"Çıkartmalarını nasıl almak istersin?",

	// ─────────── business/wallets ───────────
	"business/wallets/wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets/biz_wallets_meta_description":
		"Tüm Bitcoin cüzdanları birbirleriyle uyumludur — işletmene uygun olanı seç. Ücretsiz, anında uzlaşma, ters ibraz yok.",
	"business/wallets/sources_breez_business":
		"Breez — Bitcoin'e özel Lightning cüzdanı",
	"business/wallets/sources_ibex":
		"IBEX — Lightning ödeme altyapısı",
	"business/wallets/sources_opennode":
		"OpenNode — Bitcoin ödeme işlemcisi",
	"business/wallets/sources_square":
		"Square — Bitcoin ödemelerini kabul et",
	"business/wallets/sources_zaprite":
		"Zaprite — İşletmeler için Bitcoin faturalandırma",
	"business/wallets/wallets_hero_subtitle":
		"Bitcoin cüzdanları ücretsizdir. İşine uygun olanı seç — yüz yüze, çevrimiçi ya da fatura tabanlı — ve dakikalar içinde Bitcoin kabul etmeye başla.",
	"business/wallets/wallets_section_invoice":
		"Fatura tabanlı işletmeler için cüzdanlar",
	"business/wallets/wallets_section_invoice_intro":
		"Müşterilere fatura kesiyorsan (danışmanlık, serbest çalışma, B2B hizmetler), faturalandırma odaklı bir cüzdan kullan. Müşterin Bitcoin faturasını birkaç tıkla öder.",
	"business/wallets/wallets_section_multiple":
		"Birden fazla çalışanı olan işletmeler için cüzdanlar",
	"business/wallets/wallets_section_multiple_intro":
		"Kasada ödeme alan bir ekibin varsa, çoklu çalışan girişlerini destekleyen bir cüzdan seç — böylece her çalışanın kendi PIN'i olur ve hangi ödemeyi kimin aldığına dair temiz bir denetim izin kalır.",
	"business/wallets/wallets_section_online":
		"Çevrimiçi işletmeler için cüzdanlar",
	"business/wallets/wallets_section_online_intro":
		"Bir web sitesinde mi satıyorsun? Bu cüzdanlar çevrimiçi mağazana entegre olur ve dünyanın her yerinden müşterilerden Bitcoin kabul eder — ters ibraz yok, üye işyeri hesabı gerekmiyor.",
	"business/wallets/wallets_section_sole":
		"Bireysel sahipli işletmeler için cüzdanlar",
	"business/wallets/wallets_section_sole_intro":
		"Tek başına bir dükkân, kafe, atölye ya da hizmet işletiyorsan, bu cüzdanların hepsi işine yarar. Ödemeleri Bitcoin olarak mı tutmak istiyorsun yoksa her ödemenin bir kısmını yerel para birimine otomatik çevirmek mi istiyorsun, ona göre seç.",
	"business/wallets/wallets_strike_note":
		"Strike Business, sıfır ücretle ve anında uzlaşmayla Bitcoin ve Lightning ödemelerini kabul etmeni sağlar. Yüz yüze, çevrimiçi ve fatura tabanlı ödemeleri, isteğe bağlı yerel paraya otomatik çevirmeyle destekler.",

	// ─────────── business/why ───────────
	"business/why/learn_why_bitcoin_is_good_for_business":
		"Bitcoin burada kabul edilir",
	"business/why/why_good_for_you": "Bitcoin senin için de neden harika",
	"business/why/why_learn_more_lowercase": "daha fazla bilgi →",
	"business/why/why_s1_c1":
		"Enflasyon, daha çok para basıldığında ya da yoktan üretildiğinde olur. Bu da cebindeki paranın zamanla daha az değerli olmasına yol açar — ve fiyatlar yıldan yıla bu yüzden artmaya devam eder.",
	"business/why/why_s1_c2":
		"Bitcoin'in 21 milyon coinlik sabit bir arzı vardır. Hiçbir hükümet, banka ya da şirket daha fazlasını basamaz. Bitcoin birikimlerin zamanla değerini sessizce yitirmek yerine korur.",
	"business/why/why_s2_c1":
		"Son yıllarda birçok ABD bankası banka hücumları nedeniyle çöktü. Aynı anda çok fazla müşteri para çekmeye çalıştığında bankaların herkese ödeyecek nakdi olmadı.",
	"business/why/why_s2_c2":
		"Bankalar paranı sadece tutmak yerine çoğunu ödünç verir ve yatırır. Bu yatırımlar kötüye giderse — ya da mevduat sahipleri güvenini kaybederse — banka batabilir, mevduatların dondurulabilir ya da kaybolabilir.",
	"business/why/why_s2_c3":
		"Bitcoin ile paranı doğrudan kendi cüzdanında tutabilirsin. Banka yok. Aracı yok. Banka hücumu yok.",
	"business/why/why_s3_c1":
		"Kredi kartlarının, PayPal'ın ya da geleneksel banka hesaplarının aksine Bitcoin'i kullanmak için kimsenin iznine ihtiyacın yoktur.",
	"business/why/why_s3_c2":
		"Kimse hesabını donduramaz, bir ödemeyi engelleyemez ya da seni ağdan koparamaz. Sansür ya da el koyma korkusu olmadan özgürce kullanabileceğin tarihteki ilk finansal sistemdir.",
	"business/why/why_s4_c1":
		"Bitcoin sıkça yanlış anlaşılır ama dünyada sessizce büyük iyilik yapıyor.",
	"business/why/why_s4_c2":
		"İnsan hakları aktivistlerinin özgürlük için savaşmasına yardım etti, çöplüklerden ve petrol sahalarından çıkan küresel metan emisyonlarını azalttı, elektrik şebekelerini istikrara kavuşturdu ve millî parklar gibi kamu mallarını finanse etti.",
	"business/why/why_biz_s1": "Daha düşük ücretler, işletmeye daha çok",
	"business/why/why_biz_s1_c1":
		"Bitcoin ödemeleri her satıştan %2-3 alan bankaları ve kredi kartı şirketlerini atlar. İşletme ödediğinin daha çoğunu elinde tutar — bu da çoğunlukla senin için daha iyi fiyatlar ve daha iyi hizmet anlamına gelir.",
	"business/why/why_biz_s2": "Anında uzlaşma, ters ibraz yok",
	"business/why/why_biz_s2_c1":
		"Bitcoin ödemeleri saniyeler içinde, doğrudan cüzdanından işletmeye uzlaşır. Bir bankanın parayı serbest bırakmasını günlerce beklemek yok, masraflı ters ibraz anlaşmazlıkları yok — böylece işletme dolandırıcılıkla uğraşmak yerine müşteriye hizmete odaklanabilir.",
	"business/why/why_biz_s3": "Kabul etmek ücretsiz, herkese açık",
	"business/why/why_biz_s3_c1":
		"Bitcoin'i kabul etmek için bir işletmenin sözleşme, aylık ücret ya da kurulum maliyeti yoktur. Ve dünyanın dört bir yanındaki milyonlarca Bitcoin kullanıcısı kabul eden işyerlerini aktif olarak arar — bu da işletmeye yeni müşterilere ücretsiz görünürlük sağlar.",
	"business/why/why_business_cta_intro":
		"Bir işletme yönetiyor ve Bitcoin kabul etmeye başlamak mı istiyorsun?",
	"business/why/why_business_cta_link": "Nasıl çalıştığına bak →",
	"business/why/why_for_business":
		"Bitcoin bu işletme için neden harika",
	"business/why/why_for_business_intro":
		"Bitcoin'i kabul etmek, bir işletmenin her satıştan daha çoğunu elinde tutmasını, ters ibraz olmadan anında ödeme almasını ve küresel Bitcoin kullanıcı kitlesine ulaşmasını sağlar — sözleşme ve aylık ücret olmadan.",
	"business/why/why_good_for_you_intro":
		"Bitcoin yalnızca yazar kasada işe yaramaz — birikimlerini, gizliliğini ve işlem yapma özgürlüğünü koruyan daha iyi bir para biçimidir. İşte hızlı bir özet.",
	"business/why/why_hero_subtitle":
		"Az önce bir Bitcoin Burada Kabul Edilir çıkartmasını taradın. İşte bunun hem bu işletme hem de senin için neden harika bir haber olduğu.",
	"business/why/why_intro_c1":
		"Bulunduğun işletme Bitcoin kabul ediyor — bankalar ya da aracılar paydan almadan, dünyanın her yerinden, herkesin kullanabileceği modern, açık kaynaklı bir ödeme ağı.",
	"business/why/why_intro_c2":
		"Aşağıda Bitcoin kabul etmenin bu işletme için neden iyi olduğunun ve müşteri olarak senin için neden iyi olduğunun kısa hâli var.",
	"business/why/why_next_business_label": "BITCOIN KABUL ET",
	"business/why/why_next_business_title":
		"İşletmende Bitcoin kabul et",
	"business/why/why_next_buy_label": "BITCOIN AL",
	"business/why/why_next_buy_title": "İlk Bitcoin'ini al",
	"business/why/why_next_learn_label": "DAHA FAZLASINI ÖĞREN",
	"business/why/why_next_learn_title": "Bitcoin hakkında daha fazlasını öğren",
	"business/why/why_next_wallet_label": "CÜZDAN AL",
	"business/why/why_next_wallet_title": "Kendi Bitcoin cüzdanını al",
	"business/why/why_whats_next_heading": "Sıradaki nereye?",
	"business/why/why_whats_next_intro":
		"Bir Bitcoin çıkartmasını ilk taramansa, buradan sonra gidebileceğin en faydalı yerler bunlar.",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missingKeys = [];

	for (const e of report.entries) {
		if (!e.namespace.startsWith("business/")) continue;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const compoundKey = e.namespace + "/" + e.key;
		if (Object.prototype.hasOwnProperty.call(T, compoundKey)) {
			e.targetTranslation = T[compoundKey];
			filled++;
		} else {
			missingKeys.push(compoundKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-business (tr): filled ${filled}, already-done ${skipped}`,
	);
	if (missingKeys.length) {
		console.log(`\nUnmatched keys (${missingKeys.length}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
