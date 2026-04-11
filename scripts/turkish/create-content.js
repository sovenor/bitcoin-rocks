/**
 * Creates Turkish (tr) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin'de banka hücumları olmaz",
	"bank_runs_header": "BİTCOİN'DE BANKA HÜCUMLARI OLMAZ",
	"bank_runs_header_2": "AMA BANKANIZDA OLUR",
	"bank_runs_what": "BANKA HÜCUMU NEDİR?",
	"bank_runs_what_content_1": "Banka hücumu, çok fazla insanın aynı anda bankadan parasını çekmeye çalıştığında gerçekleşir.",
	"bank_runs_what_content_2": "Eğer bankalar çekimleri karşılayacak yeterli paraya sahip değilse, bir banka hücumu sırasında tamamen çökebilirler.",
	"bank_runs_how": "BANKA HÜCUMLARI NASIL GERÇEKLEŞİR?",
	"bank_runs_how_content_1": "Bankacılık sistemimiz 'kısmi rezerv' sistemidir, yani bankalar paranızı kasada tutup harcamanızı veya çekmenizi beklemezler.",
	"bank_runs_how_content_2": "Bunun yerine banka paranızı alır ve borç verir veya yatırım yapar. Bu, paranızı uzun süre kilitleyebilir, ancak banka size istediğiniz zaman çekebileceğinizi vaat eder.",
	"bank_runs_how_content_3": "Banka paranızı zaten borç verdikten veya yatırım yaptıktan sonra çekmeye çalıştığınızda ne olur?",
	"bank_runs_how_content_4": "Çeken tek siz olursanız sorun yoktur. Banka başka birinin parasını alır ve size verir. Peki ya aynı anda çok fazla kişi çekmek isterse?",
	"bank_runs_how_content_5": "ABD'deki birçok insan bunu Mart 2023'te Silicon Valley Bank hücumu sırasında öğrendi.",
	"bank_runs_how_content_6": "Banka, müşterilerinin parasını 30 yıla kadar vadeli devlet tahvillerine yatırmıştı. Daha da kötüsü, bu tahvillerin değeri son zamanlarda dramatik biçimde düşmüştü, bu yüzden Silicon Valley Bank yatırımcılarının parasını geri almak için tahvilleri satamıyordu. İflas etmişti. Yatırımcılarının çekimlerini karşılayacak yeterli parası yoktu.",
	"bank_runs_how_content_7": "Daha fazla insan bunu öğrendikçe, sorun daha da kötüleşti. Daha fazla çekim talebi geliyordu, ancak birçoğu gerçekleşmedi. Binlerce işletme, bankanın çöküşü nedeniyle çalışanlarına ödeme yapamayacağını fark etti.",
	"bank_runs_how_content_8": "FDIC devreye girdi ve yatırımcıları tazmin etmeyi kabul etti. Sorun çözüldü mü? Pek sayılmaz...",
	"bank_runs_fdic": "FDIC SİGORTASI PARAMI KORUYOR MU?",
	"bank_runs_fdic_content_1": "FDIC sigortası, bir banka çöküşü durumunda banka mudilerini korumak için tasarlanmıştır. Mevduatlar, mudi başına 250.000 $'a kadar sigortalıdır. Kulağa harika geliyor, değil mi?",
	"bank_runs_fdic_content_2": "Pek sayılmaz. Bir banka çöktüğünde, FDIC parayı nereden buluyor? 125 milyar dolarlık bir sigorta fonuna sahip.",
	"bank_runs_fdic_content_3": "Bu çok para gibi görünüyor, ta ki sigortaladıkları mevduat miktarıyla karşılaştırana kadar: yaklaşık 10 trilyon yani 10.000 milyar dolar.",
	"bank_runs_fdic_content_4": "FDIC, kendi web sitesinde sigorta fonunda mevduatların yalnızca %1'inden biraz fazlasını karşılayacak kadar para olduğunu gösteriyor.",
	"bank_runs_fdic_content_5": "FDIC sigorta fonunu aşan bir banka çöküşü durumunda, ABD hükümetinin yatırımcıları tazmin etmek için para basması muhtemeldir (ancak garanti değildir).",
	"bank_runs_fdic_content_6": "Ancak para basmak enflasyona neden olur, bu yüzden bu harika bir çözüm değildir.",
	"bank_runs_safe": "KISMI REZERV KULLANMAYAN BANKALAR VAR MI?",
	"bank_runs_safe_content_1": "Bazı bankalar, yatırımcıların fonlarını borç vermeyen veya yatırım yapmayan 'güvenli bankalar' olmaya çalışmıştır.",
	"bank_runs_safe_content_2": "Bu güvenli bankaların banka hücumu riski sıfır olacak olsa da, mevduatları Federal Rezerv tarafından reddedilmiştir. Bu, yasal olarak banka olarak faaliyet gösteremeyecekleri anlamına gelir.",
	"bank_runs_safe_content_3": "Faaliyetleri engellendiği için, bugün kısmi rezerv kullanmayan hiçbir banka yoktur.",
	"bank_runs_safe_content_4": "Neyse ki, kendi bankanız olarak kısmi rezerv sisteminden çıkmanın bir yolu var. Hayır, yastığın altına nakit saklamaktan bahsetmiyoruz.",
	"bank_runs_safe_content_5": "Nakit olarak tasarruf etmek hâlâ enflasyona karşı savunmasızdır.",
	"bank_runs_safe_content_6": "Bitcoin'den bahsediyoruz: kendi bankanız olmanızı sağlayan yeni bir finansal sistem.",
	"bank_runs_protect": "BİTCOİN BENİ BANKA HÜCUMLARINDAN KORUYABİLİR Mİ?",
	"bank_runs_protect_content_1": "Evet, Bitcoin tam rezervli bir finansal sistemdir.",
	"bank_runs_protect_content_2": "Bitcoin'inizi kendi cüzdanınıza aktardığınızda Bitcoin'de banka hücumları imkansızdır. Bitcoin'inizi bir borsada veya Bitcoin ETF gibi bir sarmalayıcıda bırakmayın.",
	"bank_runs_protect_content_3": "Kendi cüzdanınıza nasıl aktaracağınızı öğrenmek için basit Bitcoin cüzdan rehberimize göz atın.",
	"bank_runs_protect_content_4": "Bitcoin ile nihayet paranızın kontrolünü elinize alabilirsiniz."
});

writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Bitcoin cüzdan rehberi",
	"wallets_description": "Önemli şekillerde farklılaşan birçok farklı Bitcoin cüzdanı mevcuttur. Bir cüzdanın sizin için doğru olup olmadığını bu basit soruları sorarak öğrenebilirsiniz.",
	"wallets_header": "BİTCOİN'İNİZİ GÜVENLİ BİR ŞEKİLDE NASIL SAKLARSINIZ",
	"wallets_s1_c1": "Bitcoin cüzdanları birbirleriyle uyumludur, böylece hangi cüzdanı kullanırsa kullansın herkese Bitcoin gönderebilirsiniz.",
	"wallets_s1_c2": "Önemli şekillerde farklılaşan birçok farklı Bitcoin cüzdanı mevcuttur. Bir cüzdanın sizin için doğru olup olmadığını bu basit soruları sorarak öğrenebilirsiniz:",
	"wallets_question_1": "KENDİ GÖZETİMİNDE BİR CÜZDAN MI?",
	"wallets_s2_c1": "Bitcoin'in yeniliklerinden biri, banka gibi bir saklayıcıya güvenmeden saklama yeteneğidir.",
	"wallets_s2_c2": "Bitcoin'inizi bir borsada veya ETF'de tutuyorsanız, Bitcoin'in özgürlük avantajlarından mahrum kalırsınız.",
	"wallets_s2_c3": "Kendi gözetim cüzdanları Bitcoin'in tam gücünü açığa çıkarır: özgür para.",
	"wallets_s2_c4": "Kendi gözetim cüzdanıyla, paranızı harcama veya transfer etme yeteneğine sahip olan tek kişi sizsiniz. Kendi gözetim cüzdanı kullanırken hiç kimse para göndermenizi veya almanızı engelleyemez.",
	"wallets_s2_c5": "Kendi gözetim cüzdanlarına emanetsiz cüzdanlar da denir.",
	"wallets_s3_c1": "Emanet cüzdanları, paranız üzerinde kontrolünüzün olmadığı cüzdanlardır.",
	"wallets_s3_c2": "Bu cüzdanlar, paranıza erişim için üçüncü bir tarafa güvenmeniz gereken bankacılık sistemine daha çok benzer. Bitcoin'iniz bir borsadaysa, emanet cüzdanı kullanıyorsunuzdur.",
	"wallets_s3_c3": "Bir Bitcoin ETF aldıysanız, kendi gözetiminize çekmenize izin vermeyen bir emanet cüzdanı kullanıyorsunuzdur.",
	"wallets_s3_c4": "Emanet cüzdanları kullanışlı görünebilir, ancak emanetçi teknik olarak tüm kullanıcı fonlarını istediği zaman çalma yeteneğine sahiptir.",
	"wallets_s3_c5": "Sizin anahtarlarınız değilse, sizin coin'leriniz değildir!",
	"wallets_question_2": "SICAK MI SOĞUK MU?",
	"wallets_s4_c1": "Soğuk cüzdanlar, Bitcoin'inizin anahtarlarını asla internete maruz bırakmayacak şekilde saklar.",
	"wallets_s4_c2": "Bu, bir hırsızın Bitcoin'inizi çalmaya çalışmak için kullanabileceği saldırı vektörlerini önemli ölçüde sınırlar ve sık transfer etmeniz gerekmeyen büyük miktardaki Bitcoin için en iyisidir.",
	"wallets_s4_c3": "Soğuk cüzdanı, soğuk saklama olarak da bilinen uzun vadeli bir tasarruf hesabı olarak düşünebilirsiniz.",
	"wallets_s5_c1": "Sıcak cüzdanlar, Bitcoin'inizin anahtarlarını telefonunuz gibi internete bağlı bir cihazda saklar.",
	"wallets_s5_c2": "Sıcak cüzdanlar genellikle güvenli kabul edilir, ancak soğuk cüzdanlara göre daha fazla güvenlik açığına sahip olabilirler.",
	"wallets_s5_c3": "Sıcak cüzdanı fiziksel bir cüzdan olarak düşünebilirsiniz. Tüm birikimlerinizi içinde saklmazsınız, ancak harcamak için biraz para saklarsınız.",
	"wallets_s5_c4": "Sıcak cüzdanlar, soğuk depolamadan tüm birikimlerinizi çekmenize gerek kalmadan Bitcoin harcamayı kolaylaştırır.",
	"wallets_question_3": "KURTARMA İFADESİ NASIL YEDEKLENİR?",
	"wallets_s6_c1": "Bir Bitcoin cüzdanı kurduğunuzda, cihazınız bir kurtarma ifadesi oluşturur. Bu kurtarma ifadesi (tohum ifadesi olarak da bilinir) 12 veya 24 kelime içerir.",
	"wallets_s6_c2": "Cüzdanınıza erişiminizi kaybederseniz veya cihazınız bozulursa, bu kurtarma ifadesini yeni bir cüzdana girerek Bitcoin'inize yeniden erişebilirsiniz.",
	"wallets_s6_c3": "Çoğu cüzdan, kurtarma ifadesini yazmak için bir kağıt içerir, ancak birçok insan bu ifadeyi çeliğe yedeklemeyi tercih eder. Bu, yangın veya sel gibi doğal afet durumunda kurtarma ifadesini kaybetme olasılığını önemli ölçüde azaltır.",
	"wallets_s6_c4": "Jameson Lopp, doğru olanı seçmenize yardımcı olmak için 70 çelik yedekleme ürününü test etmiştir.",
	"wallets_s6_c5": "Jameson'ın metal Bitcoin yedekleme rehberine buradan göz atın.",
	"wallets_s6_c6": "Veya kaydırmaya devam edin ve Bitcoin cüzdan seçeneklerini keşfedin.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN", "wallets_coldcard_mk5": "COLDCARD MK5", "wallets_coldcard_q": "COLDCARD Q", "wallets_blockstream_jade": "BLOCKSTREAM JADE", "wallets_foundation_passport": "FOUNDATION PASSPORT", "wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Lightning cüzdan rehberimizi mi arıyorsunuz?",
	"wallets_starter_wallet": "Harika başlangıç cüzdanı", "wallets_mobile_app": "Mobil uygulama", "wallets_2fa_support": "2FA desteği", "wallets_air_gap_mode": "Air-gap modu", "wallets_air_gap_camera": "Air-gap modu + kamera", "wallets_bitcoin_only": "Yalnızca Bitcoin", "wallets_security_features": "Çok sayıda güvenlik özelliği", "wallets_free": "%100 ücretsiz",
	"wallets_coldcard_mk5_costs": "Fiyatı 189 $", "wallets_coldcard_q_costs": "Fiyatı 289 $", "wallets_blockstream_jade_costs": "Fiyatı 79 $", "wallets_foundation_passport_costs": "Fiyatı 199 $", "wallets_seedsigner_costs": "Parçalar 50 $",
	"wallets_very_affordable": "Çok uygun fiyatlı", "wallets_pair_with_phone": "Telefonla eşleştirin", "wallets_battery": "Şarj edilebilir pil", "wallets_build_your_own": "Kendiniz yapın", "wallets_qwerty_keyboard": "Tam QWERTY klavye", "wallets_qr_scanner": "QR kod tarayıcı"
});

writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Bitcoin Nasıl Satın Alınır — Adım Adım Rehber",
	"buy_header": "BİTCOİN NASIL SATIN ALINIR",
	"buy_intro_c1": "İlk kez Bitcoin satın almak korkutucu görünebilir, ancak adımlara ayırdığınızda aslında oldukça basittir.",
	"buy_intro_c2": "Bu rehber, güvenli bir şekilde Bitcoin satın alma ve kendi cüzdanınıza aktarma sürecinde size yol gösterecektir.",
	"buy_step_1_header": "ADIM 1: ÜLKENİZİ SEÇİN",
	"buy_step_1_description": "Farklı ülkelerin Bitcoin satın almak için farklı seçenekleri vardır. En iyi seçenekleri görmek için ülkenizi seçin.",
	"buy_search_countries": "Ülkenizi arayın",
	"buy_country_united_states": "Amerika Birleşik Devletleri", "buy_country_australia": "Avustralya", "buy_country_austria": "Avusturya", "buy_country_belgium": "Belçika", "buy_country_brazil": "Brezilya", "buy_country_canada": "Kanada", "buy_country_france": "Fransa", "buy_country_germany": "Almanya", "buy_country_ireland": "İrlanda", "buy_country_italy": "İtalya", "buy_country_netherlands": "Hollanda", "buy_country_new_zealand": "Yeni Zelanda", "buy_country_spain": "İspanya", "buy_country_united_kingdom": "Birleşik Krallık", "buy_country_argentina": "Arjantin", "buy_country_chile": "Şili", "buy_country_colombia": "Kolombiya", "buy_country_costa_rica": "Kosta Rika", "buy_country_czech_republic": "Çek Cumhuriyeti", "buy_country_denmark": "Danimarka", "buy_country_el_salvador": "El Salvador", "buy_country_estonia": "Estonya", "buy_country_finland": "Finlandiya", "buy_country_greece": "Yunanistan", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hong Kong", "buy_country_hungary": "Macaristan", "buy_country_iceland": "İzlanda", "buy_country_india": "Hindistan", "buy_country_israel": "İsrail", "buy_country_japan": "Japonya", "buy_country_latvia": "Letonya", "buy_country_lithuania": "Litvanya", "buy_country_luxembourg": "Lüksemburg", "buy_country_malta": "Malta", "buy_country_mexico": "Meksika", "buy_country_norway": "Norveç", "buy_country_panama": "Panama", "buy_country_poland": "Polonya", "buy_country_portugal": "Portekiz", "buy_country_romania": "Romanya", "buy_country_singapore": "Singapur", "buy_country_slovakia": "Slovakya", "buy_country_slovenia": "Slovenya", "buy_country_south_africa": "Güney Afrika", "buy_country_south_korea": "Güney Kore", "buy_country_sweden": "İsveç", "buy_country_switzerland": "İsviçre", "buy_country_thailand": "Tayland", "buy_country_turkey": "Türkiye", "buy_country_ukraine": "Ukrayna", "buy_country_uruguay": "Uruguay",
	"buy_step_2_header": "ADIM 2: ÖDEME YÖNTEMİNİZİ SEÇİN",
	"buy_step_2_description": "Bitcoin satın almanın iki ana yolu vardır: banka havalesi veya nakit. Her birinin kendine göre avantajları vardır.",
	"buy_method_bank_transfer": "BANKA HAVALESİ", "buy_method_bank_fast": "Hızlı ve kolay", "buy_method_bank_less_private": "Daha az gizli",
	"buy_method_bank_description": "Banka havaleleri Bitcoin satın almanın en yaygın yoludur. Hızlı, kullanışlı ve genellikle daha düşük ücretlidir.",
	"buy_method_choose_bank": "Banka havalesi seç", "buy_method_cash": "NAKİT", "buy_method_cash_private": "Daha gizli", "buy_method_cash_limited": "Sınırlı seçenekler",
	"buy_method_cash_description": "Nakit alımlar daha fazla gizlilik sunar, ancak daha az seçenek vardır ve yüz yüze buluşma veya Bitcoin ATM kullanımı gerektirebilir.",
	"buy_method_choose_cash": "Nakit seç",
	"buy_step_3_header": "ADIM 3: SATIN ALMA SEÇENEKLERİ",
	"buy_step_3_description": "İşte ülkeniz ve ödeme yönteminiz için en iyi Bitcoin satın alma seçenekleri:",
	"buy_platform_recommended": "ÖNERİLEN",
	"buy_platform_strike_description": "Strike, düşük ücretler ve anında Lightning Network desteğiyle Bitcoin satın almanın en hızlı ve en kolay yoludur.",
	"buy_platform_swan_description": "Swan Bitcoin, doğru yatırım ve eğitim kaynakları ile yalnızca Bitcoin hizmetlerinde uzmanlaşmıştır.",
	"buy_platform_river_description": "River, eğitim ve güvenliğe odaklanarak Bitcoin satın alma, madencilik ve saklama hizmetleri sunar.",
	"buy_platform_coinsquare_description": "Coinsquare, güçlü düzenleyici uyumluluk ve müşteri desteğine sahip bir Kanada Bitcoin borsasıdır.",
	"buy_platform_kraken_description": "Kraken, gelişmiş işlem özellikleri ve güçlü güvenliğe sahip köklü bir Bitcoin borsasıdır.",
	"buy_platform_atm_description": "Bitcoin ATM'leri nakit ile anında Bitcoin satın almanızı sağlar. Coin ATM Radar ile en yakınını bulun.",
	"buy_platform_bisq_description": "Bisq, KYC gerektirmeden özel Bitcoin ticareti yapmanızı sağlayan merkeziyetsiz eşler arası bir borsadır.",
	"buy_platform_feature_instant": "Anında satın alma", "buy_platform_feature_low_fees": "Düşük ücretler", "buy_platform_feature_lightning": "Lightning Network", "buy_platform_feature_dca": "Düzenli yatırım", "buy_platform_feature_education": "Eğitim kaynakları", "buy_platform_feature_withdrawal": "Kolay çekim", "buy_platform_feature_mining": "Bitcoin madenciliği", "buy_platform_feature_custody": "Saklama hizmetleri", "buy_platform_feature_canadian": "Kanada odaklı", "buy_platform_feature_regulated": "Düzenlenmiş borsa", "buy_platform_feature_support": "Müşteri desteği", "buy_platform_feature_established": "Köklü platform", "buy_platform_feature_security": "Güçlü güvenlik", "buy_platform_feature_advanced": "Gelişmiş özellikler", "buy_platform_feature_cash": "Nakit satın alma", "buy_platform_feature_anonymous": "Daha anonim", "buy_platform_feature_p2p": "Eşler arası", "buy_platform_feature_private": "Özel ticaret", "buy_platform_feature_decentralized": "Merkeziyetsiz",
	"buy_platform_relai_description": "Relai, kendi gözetim cüzdanı, otomatik yatırım özellikleri ve Avrupalı kullanıcılar için düşük ücretlerle İsviçre merkezli bir yalnızca Bitcoin uygulamasıdır.",
	"buy_platform_feature_bitcoin_only": "Yalnızca Bitcoin", "buy_platform_feature_self_custody": "Kendi gözetim cüzdanı", "buy_platform_feature_auto_invest": "Otomatik yatırım planları", "buy_platform_feature_european": "Avrupa odaklı",
	"buy_step_4_header": "ADIM 4: BİTCOİN'İNİZİ GÜVENLİ SAKLAYIN",
	"buy_step_4_c1": "Bitcoin satın aldıktan sonra en önemli adım, onu özel anahtarlarınızı kontrol ettiğiniz kendi gözetim cüzdanınıza taşımaktır.",
	"buy_step_4_c2": "Bitcoin'inizi bir borsada bırakmak risklidir çünkü Bitcoin'e aslında sahip olan siz değilsiniz — borsa sahiptir.",
	"buy_step_4_c3": "Kendi özel anahtarlarınızı kontrol ettiğinizde, Bitcoin'iniz üzerinde gerçek mülkiyete sahip olursunuz ve kimse onu sizden alamaz.",
	"buy_step_4_c4": "İhtiyaçlarınız için doğru Bitcoin cüzdanını nasıl seçeceğinizi öğrenin:",
	"buy_cta_wallets": "Bitcoin cüzdan rehberine göz atın"
});

writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Bitcoin Lightning cüzdan rehberi",
	"lightning_description": "Lightning cüzdanları, kişisel egemenliğinizi korurken Bitcoin'i hızlı ve ucuz göndermenizi sağlar.",
	"lightning_header": "LIGHTNING CÜZDAN REHBERİ",
	"lightning_s1_c1": "Lightning, Bitcoin ödemelerini hızlı ve ucuz göndermenizi sağlar.",
	"lightning_s1_c2": "Lightning kullanmanın ödünleşimler getirdiğini bilmek önemlidir. Daha hızlı ve daha ucuz Bitcoin ödemeleri karşılığında genellikle biraz güvenlikten ödün verirsiniz.",
	"lightning_s1_c3": "Genel olarak, Lightning yalnızca küçük miktardaki bitcoin ile kullanılmalıdır. Büyük miktardaki bitcoin her zaman bir donanım cüzdanında saklanmalıdır.",
	"lightning_s1_c4": "Daha fazla bilgi için donanım cüzdan rehberimize göz atın.",
	"lightning_s1_c5": "Tüm Lightning cüzdanları eşit değildir. Hangi cüzdanın sizin için doğru ödünleşim dengesine sahip olduğunu basit bir soruyu cevaplayarak öğrenin:",
	"lightning_question_1": "BENİM İÇİN DOĞRU ÖDÜNLEŞİM DENGESİ HANGİSİ?",
	"lightning_s2_c1": "Bitcoin'in yeniliklerinden biri, banka gibi bir saklayıcıya güvenmeden saklama yeteneğidir. Kendi gözetim cüzdanları Bitcoin'in tam gücünü açığa çıkarır.",
	"lightning_s2_c2": "Kendi gözetim cüzdanıyla, paranızı harcama veya transfer etme yeteneğine sahip olan tek kişi sizsiniz. Kendi gözetim cüzdanı kullanırken hiç kimse sizi durduramaz, sansürleyemez veya çalamaz. Bunlara emanetsiz cüzdanlar da denir.",
	"lightning_s2_c3": "Lightning kullanmanın en egemen yolu kendi düğümünüzü çalıştırmaktır.",
	"lightning_s2_c4": "Bu rehber, kendi düğümünüzü gerektirmeyen basit Lightning cüzdanlarına odaklanmaktadır.",
	"lightning_s2_c5": "Emanetsiz bir Lightning cüzdanı kullanırken bile, cüzdan geliştiricisinin zararlı bir uygulama güncellemesi uygulayıp fonlarınızı çalmayacağına güvendiğinizi bilmek önemlidir.",
	"lightning_s3_c1": "Emanet cüzdanları, paranız üzerinde kontrolünüzün olmadığı cüzdanlardır.",
	"lightning_s3_c2": "Bu cüzdanlar, paranıza erişim için üçüncü bir tarafa güvenmeniz gereken bankacılık sistemine daha çok benzer. Bitcoin'iniz bir borsadaysa, emanet cüzdanı kullanıyorsunuzdur.",
	"lightning_s3_c3": "Emanet cüzdanları kullanışlı görünebilir, ancak emanetçi teknik olarak tüm kullanıcı fonlarını istediği zaman çalma yeteneğine sahiptir.",
	"lightning_s3_c4": "Bazı insanlar, kullanım kolaylığı nedeniyle küçük miktarlardaki bitcoin için emanet Lightning cüzdanlarını tercih eder. Sadece unutmayın: sizin anahtarlarınız değilse, sizin coin'leriniz değildir!",
	"lightning_question_2": "CÜZDANINIZI SEÇİN",
	"lightning_s4_c1": "Tüm bunları göz önünde bulundurarak, artık sizin için doğru ödünleşim dengesine sahip bir Lightning cüzdanı seçebilirsiniz.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Çok sayıda özellik", "lightning_mobile_app": "Mobil uygulama", "lightning_free": "%100 ücretsiz", "lightning_merchants": "Tüccarlar için harika", "lightning_starter": "Harika başlangıç cüzdanı", "lightning_browser": "Tarayıcıda", "lightning_custodial": "Tamamen emanet cüzdan",
	"lightning_cta_hardware": "Donanım Bitcoin cüzdan rehberimizi mi arıyorsunuz?"
});

writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "bitcoin.rocks'tan ücretsiz Bitcoin çıkartmaları",
	"stickers_description": "Halka açık bir yere Bitcoin çıkartması yapıştırın ve çevrenizdeki insanları bilgilendirmeye yardımcı olun.",
	"stickers_header": "ÜCRETSİZ BİTCOİN ÇIKARTMALARI",
	"stickers_choose_header": "ÇIKARTMA PAKETİNİZİ SEÇİN",
	"stickers_choose_c1": "Misyonumuz, Bitcoin çıkartmalarını halka açık yerlere yapıştırarak daha fazla insanı bilgilendirmenize yardımcı olmaktır. Tüm çıkartmalarımızda şu konulardaki eğitim sayfalarına yönlendiren QR kodları vardır:",
	"stickers_choose_c2": "Bitcoin", "stickers_choose_c3": "enflasyon",
	"stickers_choose_c4": "Aşağıdan bir çıkartma paketi seçin",
	"stickers_text_pack": "YAZI PAKETİ", "stickers_signs_pack": "İŞARET PAKETİ",
	"stickers_instructions_1": "Posta adresinizi girin ve size ücretsiz bir Bitcoin çıkartma paketi gönderelim! Çıkartmalarınız düz beyaz bir zarfta gönderilecektir.",
	"stickers_instructions_2": "Adres bilgileri ücretsiz çıkartmalar gönderildikten sonra silinir.",
	"stickers_share_header": "ÇIKARTMA KONUMLARINIZI PAYLAŞIN",
	"stickers_share_c1": "Çıkartma konumlarınızı Nostr'da bizimle paylaşın ve başkalarının çıkartmalarını nereye yapıştırdığını görün.",
	"stickers_btn_share_on_nostr": "NOSTR'DA PAYLAŞ", "stickers_btn_what_is_nostr": "NOSTR NEDİR?",
	"stickers_flyers_link_before": "Bu arada, kendinize ", "stickers_flyers_link_text": "Bitcoin broşürleri", "stickers_flyers_link_after": " yazdırıp yapıştırarak daha fazla insanı bilgilendirmeye yardımcı olun.",
	"stickers_country_global_print": "Dünya geneli — Kendi çıkartmalarımı basacağım", "stickers_country_global_order": "Dünya geneli — Toplu sipariş ver",
	"placeholder_name_optional": "Ad (isteğe bağlı)", "placeholder_address_line_1": "Adres satırı 1", "placeholder_address_line_2": "Adres satırı 2 (isteğe bağlı)", "placeholder_city": "Şehir", "placeholder_state": "Eyalet", "placeholder_province": "İl", "placeholder_zip_code": "Posta kodu", "placeholder_postal_code": "Posta kodu", "placeholder_language": "Dil", "placeholder_which_stickers": "Hangi çıkartmalar?", "placeholder_email_optional": "Bildirim için e-posta girin (isteğe bağlı)"
});

writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "bitcoin.rocks'tan ücretsiz Bitcoin kartpostalları",
	"postcards_description": "Ücretsiz bir Bitcoin kartpostal paketi edinin ve Bitcoin'i tanıdığınız biriyle paylaşın.",
	"postcards_header": "KARTPOSTAL PROGRAMI KAPANDI",
	"postcards_program_closed_message": "Ücretsiz Bitcoin kartpostal programımız sona erdi. Posta yoluyla Bitcoin eğitimini yaymaya yardımcı olan herkese teşekkürler!",
	"postcards_sticker_alternative_header": "BUNUN YERİNE ÜCRETSİZ BİTCOİN ÇIKARTMALARI EDİNİN",
	"postcards_sticker_alternative_message": "Ücretsiz çıkartma programımızla Bitcoin farkındalığını yaymaya devam edin! Bitcoin çıkartmalarımız halka açık yerlerde paylaşmak için idealdir ve eğitim içeriğine yönlendiren QR kodları içerir.",
	"postcards_sticker_cta": "ÜCRETSİZ ÇIKARTMALAR EDİN",
	"postcards_step_2": "KARTPOSTALLAR NASIL GÖRÜNÜYORDU",
	"postcards_instructions_4": "Bu kartpostalları, tanıdığınız birine Bitcoin'i tanıtmayı kolaylaştırmak için oluşturduk! Sadece bir adres ve pul ekleyip kartpostalı posta kutusuna atın.",
	"postcards_instructions_5": "Misyonumuz Bitcoin'in benimsenmesini hızlandırmaktır. Ücretsiz çıkartmalar edinerek ve halka açık yerlere yapıştırarak yardımcı olabilirsiniz!",
	"postcards_instructions_6": "Hepimiz Bitcoin hakkında daha fazla bilgi edinmekten fayda görecek birkaç kişi tanıyoruz. Onlarla bugün Bitcoin çıkartmaları paylaşın!"
});

writeFile(`signs_${lang}.json`, {
	"signs_description": "Bu Bitcoin tabelalarını tüm Amerika'ya yerleştirmemize yardımcı olun!",
	"signs_title": "bitcoin.rocks'tan ücretsiz Bitcoin tabelaları",
	"signs_choose_header": "BU BİTCOİN TABELALARINI TÜM AMERİKA'YA YERLEŞTİRMEMİZE YARDIMCI OLDUĞUNUZ İÇİN TEŞEKKÜRLER!",
	"signs_choose_c1": "Tüm tabelalar dağıtıldı! Misyonumuz eğitim yoluyla Bitcoin'in benimsenmesini hızlandırmaktır.",
	"signs_choose_c2": "Birçoğunuz bu ücretsiz Bitcoin tabelalarını halka açık yerlere yerleştirerek yardımcı oldunuz. Tüm tabelalarımızda şu konudaki eğitim sayfasına yönlendiren QR kodları var:",
	"signs_choose_c3": "enflasyon",
	"signs_choose_c4": "İnanılmaz topluluğumuz sayesinde binlerce insana ulaştık ve onların Bitcoin tavşan deliğindeki ilk adımlarını atmalarına yardımcı olduk.",
	"signs_share_header": "TABELA KONUMLARINIZI PAYLAŞIN",
	"signs_share_c1": "Tabela konumlarınızı Nostr'da bizimle paylaşın ve başkalarının tabelalarını nereye yerleştirdiğini görün.",
	"signs_btn_share_on_nostr": "NOSTR'DA PAYLAŞ", "signs_btn_what_is_nostr": "NOSTR NEDİR?",
	"signs_instructions_1": "Posta adresinizi girin ve size 10 Bitcoin tabelası gönderelim!",
	"signs_instructions_2": "Adres bilgileri ücretsiz tabelalar gönderildikten sonra silinir."
});

writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "bitcoin.rocks'tan ücretsiz Bitcoin broşürleri",
	"flyers_description": "Evde bir Bitcoin broşürü yazdırın ve çevrenizdeki insanları bilgilendirmek için halka açık bir yere yapıştırın.",
	"flyers_header_1": "YAZDIR VE YAPIŞTIR",
	"flyers_header_2": "BİTCOİN BROŞÜRLERİ",
	"flyers_intro_header": "BU BİTCOİN BROŞÜRLERİNİ NASIL YAZDIRIR VE YAPIŞTIRIRSINIZ",
	"flyers_intro_c1": "Misyonumuz, Bitcoin broşürlerini halka açık yerlere yapıştırarak daha fazla insanı bilgilendirmenize yardımcı olmaktır. Bu broşürde şu konudaki sayfamıza yönlendiren bir QR kodu var:",
	"flyers_intro_c2": "eğitici Bitcoin sayfamız.",
	"flyers_intro_c3": "enflasyon",
	"flyers_intro_c4": "Bu broşürü evde veya bir matbaada yazdırın. Ardından ilan tahtalarına, şehirdeki telefon direklerine ve insanların göreceği ve Bitcoin hakkında bilgi edineceği diğer halka açık yerlere yapıştırın.",
	"flyers_intro_c5": "Bu arada, bir paket",
	"flyers_intro_c6": "ücretsiz Bitcoin çıkartması",
	"flyers_intro_c7": "talep edin ve daha fazla insanı bilgilendirmeye yardımcı olun.",
	"flyers_btn_download": "BROŞÜRÜ İNDİR", "flyers_btn_print": "BROŞÜRÜ YAZDIR",
	"flyers_share_header": "BROŞÜR KONUMLARINIZI PAYLAŞIN",
	"flyers_share_c1": "Broşür konumlarınızı Nostr'da bizimle paylaşın ve başkalarının broşürlerini nereye yapıştırdığını görün.",
	"flyers_btn_share_on_nostr": "NOSTR'DA PAYLAŞ", "flyers_btn_what_is_nostr": "NOSTR NEDİR?"
});

writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Katılın ve Bitcoin'i yaymaya yardımcı olun",
	"get_involved_description": "Ücretsiz kaynaklarımız Bitcoin'in benimsenmesini yaymayı kolaylaştırır.",
	"get_involved_header": "KATILIN",
	"get_involved_header_2": "BİTCOİN'İ YAYIN",
	"get_involved_intro_1": "Dünyamızın mevcut durumunda yaşamak moral bozucu olabilir.",
	"get_involved_intro_2": "Paramız bozuk. Sonuç olarak toplumun temel parçaları da bozuk.",
	"get_involved_intro_3": "Bitcoin'le zaten ilgileniyorsanız, Bitcoin'in getireceği umut hissini bilirsiniz. Daha iyi paranın mümkün kıldığı daha iyi bir geleceğe umut.",
	"get_involved_intro_4": "Ancak çevrenizdeki bu kadar çok insan Bitcoin'den habersiz. Sizinle aynı bozuk dünyada yaşıyorlar, ancak karanlıkta yollarını bulmalarına yardımcı olacak bir umut ışığı olmadan.",
	"get_involved_intro_5": "Ancak siz bunu değiştirebilirsiniz. Bitcoin'in getirdiği umudu çevrenizdeki insanlara yaymayı kolaylaştıran birçok ücretsiz kaynak oluşturduk.",
	"get_involved_sticker_header": "Halka açık bir yere çıkartma yapıştırın",
	"get_involved_sticker_content_1": "Hiç kimseyle konuşmak zorunda kalmadan çevrenizdeki insanları Bitcoin hakkında eğitmeye yardımcı olabilirsiniz. Ücretsiz Bitcoin çıkartmalarımızdan birini halka açık bir yere yapıştırmanız yeterli.",
	"get_involved_sticker_content_2": "Her ay yüzlerce insan bu çıkartmalardaki QR kodları tarıyor. Enflasyon çıkartmaları şu konudaki sayfaya yönlendiriyor:",
	"get_involved_sticker_content_3": "Bitcoin enflasyona çözüm olarak.",
	"get_involved_sticker_content_4": "Diğer çıkartmalar, insanlara nasıl",
	"get_involved_sticker_content_5": "Bitcoin daha iyi bir dünya inşa ediyor",
	"get_involved_sticker_content_6": "olduğunu gösteren eğitim ana sayfamıza yönlendiriyor.",
	"get_involved_request_a": "BİR TALEP EDİN",
	"get_involved_sticker_pack": "ÇIKARTMA PAKETİ",
	"get_involved_postcard_header": "Bir kartpostal gönderin",
	"get_involved_postcard_content_1": "Ücretsiz kartpostallarımızdan birini göndererek tanıdığınız birine Bitcoin umudunu yaymaya yardımcı olabilirsiniz.",
	"get_involved_postcard_content_2": "Her kartpostalın arka yüzünde Bitcoin hakkında ikna edici bir metin ve daha fazla bilgi için bir QR kodu bulunur.",
	"get_involved_postcard_content_3": "Bir Bitcoin kartpostalı göndererek birinin Bitcoin'i yeni bir ışıkta görmesine yardımcı olabilirsiniz.",
	"get_involved_postcard_pack": "KARTPOSTAL PAKETİ",
	"get_involved_business_header": "Bir işletmeyi dahil edin",
	"get_involved_business_content_1": "Bitcoin döngüsel ekonomisi kurmaya yardımcı olmak ister misiniz? Bitcoin işletme kitimiz, bir işletmeye Bitcoin ödemelerini kabul etme konusunda yaklaşmayı kolaylaştırır.",
	"get_involved_business_content_2": "Her işletme kiti, Bitcoin ödemelerini kabul etmenin avantajlarını vurgulayan broşürler içerir. Her broşür farklı",
	"get_involved_business_content_3": "ücretsiz Bitcoin işletme kaynaklarına yönlendirir.",
	"get_involved_business_kit": "İŞLETME KİTİ"
});

console.log(`\nDone! Created 9 content files.`);
