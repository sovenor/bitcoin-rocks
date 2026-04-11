/**
 * Creates Turkish (tr) translation files for all bitcoin-vs-* comparison pages
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

writeFile(`bitcoin-vs-gold_${lang}.json`, {
	"bitcoin_vs_gold": "Bitcoin ve Altın",
	"gold_header": "ARADAKI FARK", "gold_header_2": "BİTCOİN", "gold_header_3": "VE", "gold_header_4": "ALTIN",
	"gold_intro_1": "Altın binlerce yıldır para olarak kullanılmaktadır ve birçok kişi tarafından finansal güvenli liman olarak kabul edilir.",
	"gold_intro_2": "Bitcoin, 2009 yılında oluşturulan dijital paradır ve birçok kişi tarafından da finansal güvenli liman olarak görülmektedir.",
	"gold_intro_3": "Peki altın gibi fiziksel bir metal, Bitcoin gibi dijital paradan nasıl farklıdır? İki para biçimi arasındaki farklara bakalım: Bitcoin ve Altın.",
	"gold": "ALTIN",
	"gold_point_1": "Fiziksel olarak gönderilmeli", "gold_point_2": "Dijital borç senetleri", "gold_point_3": "Arz her yıl artıyor", "gold_point_4": "Esnek arz", "gold_point_5": "Fiziksel olarak merkezileşmiş", "gold_point_6": "Doğrulaması zor", "gold_point_7": "Bölünmesi zor",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "İnternet üzerinden gönderilebilir", "bitcoin_point_2": "Dijital olarak yerel", "bitcoin_point_3": "Sabit arz 21M BTC", "bitcoin_point_4": "Esnek olmayan arz", "bitcoin_point_5": "Merkeziyetsiz", "bitcoin_point_6": "Doğrulaması kolay", "bitcoin_point_7": "Bölünmesi kolay",
	"point_1_summary_1": "Bitcoin dijital olduğu için, internet bağlantısı olan herkes onu neredeyse anında çok düşük ücretlerle gönderebilir. Altın fiziksel olduğu için internet üzerinden transfer edilemez ve mülkiyet devri için fiziksel olarak gönderilmelidir.",
	"point_2_summary_1": "Bitcoin dijital olarak yerel bir varlıktır, yani tam mülkiyeti internet üzerinden transfer edebilirsiniz. Bazı şirketler, fiziksel altını fiilen almadan çevrimiçi altın satın alma imkanı sunar; bunun yerine şirketin altını sizin için saklamasına güvenirsiniz. Bu, gerçek varlık yerine yalnızca şirketin vaadine sahip olduğunuz için dijital bir borç senedine daha çok benzer.",
	"point_3_summary_1": "Bitcoin'in şimdiye kadar var olacak en fazla 21 milyon BTC'lik sabit bir üst sınırı vardır.",
	"point_3_summary_2": "Her yıl yeni altın arzı yerden çıkarılır ve toplam arza enflasyon yaratır. Toplam altın arzının yılda yaklaşık %1,6 oranında arttığı tahmin edilmektedir, bu da pastadaki payınızın her yıl %1,6 küçüldüğü anlamına gelir.",
	"point_3_summary_3": "Bu, itibari para enflasyonundan daha az olsa da, yine de enflasyondur.",
	"point_3_summary_4": "Bitcoin ile pastadaki payınız asla küçülmez.",
	"point_4_summary_1": "Altının esnek arzı vardır, yani altın fiyatı yükseldikçe daha fazla altın madenciliği için daha büyük motivasyon oluşur. Bu, yeni madenler açıldığında genellikle altın fiyatı üzerinde aşağı yönlü baskı yaratır.",
	"point_4_summary_2": "Bitcoin ile fiyat ne kadar yükselirse yükselsin, 21M Bitcoin'den fazlasını oluşturamazsınız.",
	"point_4_summary_3": "Bitcoin, esnek olmayan fiyat-arz oranına sahip ilk varlıktır.",
	"point_5_summary_1": "Bitcoin ağı merkeziyetsizdir.", "point_5_summary_2": "On binlerce bağımsız düğüm ağ kurallarını doğrular.", "point_5_summary_3": "Kullanıcılar bir uygulama indirerek Bitcoin'i kendi gözetimlerine alabilirler.",
	"point_5_summary_4": "Fiziksel altını kendi gözetiminize almak mümkün olsa da, fiziksel altının büyük çoğunluğu saklama kurumlarına ait devasa kasalarda depolanır, bu da onu fiziksel olarak merkezileşmiş yapar.",
	"point_6_summary_1": "Bitcoin ile coinlerinizi kendi gözetiminize alarak ve tam düğüm çalıştırarak gerçek Bitcoin'e sahip olduğunuzu doğrulamak inanılmaz derecede kolaydır.",
	"point_6_summary_2": "Kendi gözetim, bir uygulama indirmek kadar kolaydır.",
	"point_6_summary_3": "Tam düğüm, ağ kurallarına uyulmasını sağlayan ve gerçek Bitcoin'e sahip olduğunuzu doğrulayan basit bir yazılımdır.",
	"point_6_summary_4": "Fiziksel altının gerçek olduğunu doğrulamak çok zor olabilir. Fiziksel altının dışının gerçek olduğunu doğrulasanız bile, altın çubuğunuzun içi tungsten veya başka bir metal olabilir. Sahip olduğunuzu düşündüğünüz fiziksel altına gerçekten sahip olduğunuzu doğrulamanın tek yolu onu eritmektir.",
	"point_7_summary_1": "1 dolarda 100 sent olduğu gibi, 1 Bitcoin'de 100.000.000 satoshi vardır. Bu, Bitcoin'in birkaç sent değerindeki mikro işlemler dahil her boyutta alışveriş için kullanılmasını sağlar.",
	"point_7_summary_2": "Bu, Bitcoin'i işletmeler için iyi bir araç yapar.",
	"point_7_summary_3": "Fiziksel altın bölünmesi zor olduğu için, özellikle küçük alışverişler için kolayca kullanılamaz."
});

writeFile(`bitcoin-vs-banks_${lang}.json`, {
	"bitcoin_vs_banks": "Bitcoin ve Bankalar",
	"banks_header": "ARADAKI FARK", "banks_header_2": "BİTCOİN", "banks_header_3": "VE", "banks_header_4": "BANKALAR",
	"banks_intro_1": "Bankalar yüzyıllardır parayı kontrol ediyor ve finansal işlemlerin aracıları ile parasal sistemin bekçileri olarak hizmet veriyor.",
	"banks_intro_2": "Bitcoin, bankalar veya merkezi otoriteler olmadan çalışan eşler arası bir dijital para sistemidir.",
	"banks_intro_3": "Peki Bitcoin ağı geleneksel bankacılık sisteminden nasıl farklıdır? Temelden farklı bu iki para yaklaşımı arasındaki temel farklara bakalım.",
	"banks": "BANKALAR",
	"banks_point_1": "İzin gerektirir", "banks_point_2": "Sınırlı çalışma saatleri", "banks_point_3": "Özel, opak işlemler", "banks_point_4": "Paranızı kontrol eder", "banks_point_5": "Değişken ücretler ve cezalar", "banks_point_6": "Faizli hesap aşımına izin verir", "banks_point_7": "İşlemleri engelleyebilir",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "İzinsiz erişim", "bitcoin_point_2": "7/24 her zaman açık", "bitcoin_point_3": "Şeffaf ve açık", "bitcoin_point_4": "Paranızı siz kontrol edersiniz", "bitcoin_point_5": "Öngörülebilir, düşük ücretler", "bitcoin_point_6": "Hesap aşımı yapılamaz", "bitcoin_point_7": "Sansüre dayanıklı",
	"point_1_summary_1": "Bitcoin izinsizdir, yani internet erişimi olan herkes herhangi bir otoriteden onay istemeden kullanabilir.",
	"point_1_summary_2": "Bitcoin kapı bekçileri olmadan çalışır",
	"point_1_summary_3": "— hiç kimse size erişimi reddedebilir. Ancak bankalar hesap açmayı reddedebilir, mevcut hesapları dondurabilir veya kendi kurallarına veya devlet düzenlemelerine dayanarak hizmeti reddedebilir.",
	"point_2_summary_1": "Bitcoin ağı günde 24 saat, haftada 7 gün, yılda 365 gün bakım kesintisi veya tatil olmadan çalışır. Bankaların sınırlı çalışma saatleri vardır, hafta sonları ve tatillerde kapalıdır ve genellikle hizmetlerin kullanılamadığı sistem bakım dönemleri yaşar.",
	"point_3_summary_1": "Tüm Bitcoin işlemleri herkesin doğrulayıp denetleyebileceği halka açık bir blokzincirde kaydedilir.",
	"point_3_summary_2": "Bankalar özel defterler ve müşterilerin bağımsız olarak doğrulayamadığı opak iç süreçlerle çalışır.",
	"point_4_summary_1": "Bitcoin ile kendi özel anahtarlarınızı tutabilir ve paranız üzerinde tam kontrol sahibi olabilirsiniz.",
	"point_4_summary_2": "Bitcoin cüzdanları hakkında daha fazla bilgi edinin",
	"point_4_summary_3": "ve kendi gözetimi anlayın. Bankalar paranızı kendi hesaplarında tutar ve varlıklarınıza erişimi istediği zaman dondurabilir, kısıtlayabilir veya yasaklayabilir.",
	"point_5_summary_1": "Bitcoin işlem ücretleri şeffaf, öngörülebilir ve genellikle çok düşüktür. Bankaların genellikle gizli ücretleri, aylık hesap ücretleri, hesap aşım ücretleri, transfer ücretleri, ATM ücretleri ve zamanla önemli ölçüde birikebilecek diğer cezaları vardır.",
	"point_6_summary_1": "Bitcoin, sahip olmadığınız parayı harcamanızı engeller — yalnızca gerçekte sahip olduğunuz Bitcoin'i harcayabilirsiniz. Bankalar hesap aşımına (hesap bakiyenizden fazla harcama) izin verir ve ardından bu 'hizmet' için önemli ücretler alır, bu da genellikle zincirleme cezalara yol açar.",
	"point_7_summary_1": "Bitcoin işlemleri sansüre dayanıklıdır — ağa gönderildikten sonra hiçbir merkezi otorite tarafından durdurulamaz veya geri alınamaz. Bankalar işlemleri kendi kurallarına, devlet emirlerine veya şüpheli etkinlik tespit algoritmalarına dayanarak engelleyebilir, dondurabilir, iptal edebilir veya kısıtlayabilir."
});

writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin ve Tahviller",
	"bonds_header": "ARADAKI FARK", "bonds_header_2": "BİTCOİN", "bonds_header_3": "VE", "bonds_header_4": "TAHVİLLER",
	"bonds_intro_1": "Devlet tahvilleri genellikle 'risksiz' olarak etiketlenir ve geleneksel finans tarafından varlık saklamanın en güvenli yeri olarak kabul edilir.",
	"bonds_intro_2": "Bitcoin, herhangi bir hükümet veya merkezi otoriteden bağımsız olarak çalışan dijital paradır.",
	"bonds_intro_3": "Tahviller gerçekten risksiz mi? Ve değer saklama aracı olarak Bitcoin ile nasıl karşılaştırılır? Bitcoin ile devlet tahvilleri arasındaki temel farklara bakalım.",
	"bonds": "TAHVİLLER",
	"bonds_point_1": "Gizli riskler", "bonds_point_2": "Enflasyonla değer kaybı", "bonds_point_3": "Likidite sorunları yaşayabilir", "bonds_point_4": "Başarısız ihaleler", "bonds_point_5": "Sabit getiri", "bonds_point_6": "Aracılar gerektirir", "bonds_point_7": "Hükümete bağımlılık",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "Karşı taraf riski yok", "bitcoin_point_2": "Sabit arz", "bitcoin_point_3": "Her zaman likit", "bitcoin_point_4": "İhale riski yok", "bitcoin_point_5": "Değer artış potansiyeli", "bitcoin_point_6": "Kendi gözetim imkanı", "bitcoin_point_7": "Hükümete bağımlılık yok",
	"point_1_summary_1": "Tahviller yalnızca nominal dolar değerlerinde 'risksiz'dir, yani vadeye kadar tutarsanız dolarlarınızı geri alırsınız. Ancak bu, enflasyon riski, faiz oranı riski ve bu dolarların iade edildiğinde çok daha az değerli olma olasılığını göz ardı eder.",
	"point_1_summary_2": "Bitcoin'in açık, şeffaf riskleri (oynaklık) vardır, ancak hiçbir gizli karşı taraf riski yoktur — ya Bitcoin'inize sahipsinizdir ya da değilsinizdir.",
	"point_2_summary_1": "Enflasyon tahvil getirisinden yüksek olduğunda, tahvil sahipleri her yıl satın alma gücü kaybeder. %4 enflasyonla %2 tahvil getirisi, yılda %2 reel değer kaybettiğiniz anlamına gelir.",
	"point_2_summary_2": "Enflasyon hakkında daha fazla bilgi edinin.",
	"point_2_summary_3": "Bitcoin'in 21 milyon coin'lik sabit arzı, enflasyonla değerinin düşürülemeyeceği anlamına gelir; tahviller ise para basımıyla değersizleştirilebilir.",
	"point_3_summary_1": "Finansal krizler sırasında tahvil piyasaları donabilir ve likidite sorunları yaşayabilir. Silicon Valley Bank gibi bankalar, faiz oranları yükseldiğinde önemli ölçüde değer kaybeden tahvillerle sıkışmıştır ve bu durum çöküşlerine katkıda bulunmuştur.",
	"point_3_summary_2": "Silicon Valley Bank'ın nasıl çöktüğünü ve Bitcoin'in neden farklı olduğunu öğrenin.",
	"point_3_summary_3": "Bitcoin küresel olarak 7/24 işlem görür ve hiçbir zaman bir likidite krizi yaşamamıştır — her zaman bir alıcı veya satıcı bulabilirsiniz.",
	"point_4_summary_1": "Devlet tahvili ihaleleri, devlet borcuna yeterli alıcı olmadığında başarısız olabilir. Bu durum son yıllarda birçok kez yaşanmıştır.",
	"point_4_summary_2": "Bu başarısız devlet tahvili ihaleleri hakkında daha fazla bilgi edinin.",
	"point_4_summary_3": "Bitcoin'in fiyatı, başarısız olabilecek merkezi bir ihale olmadan sürekli küresel piyasalar aracılığıyla belirlenir.",
	"point_5_summary_1": "Tahvil getirileri satın alma anında sabittir. Ekonomi hızla büyüse veya para birimi önemli ölçüde değer kaybetse bile, getiriniz aynı kalır.",
	"point_5_summary_2": "Bitcoin, artan benimsenme ve sabit arzın artan taleple buluşmasıyla önemli değer artış potansiyeline sahiptir.",
	"point_6_summary_1": "Çoğu insan tahvilleri bankalar, aracı kurumlar veya fonlar gibi aracılar aracılığıyla tutar, bu da karşı taraf riski oluşturur. Tahvillere aslında doğrudan sahip olmazsınız.",
	"point_6_summary_2": "Bitcoin ile kendi gözetim yoluyla doğrudan mülkiyet alabilir ve karşı taraf riskini tamamen ortadan kaldırabilirsiniz.",
	"point_7_summary_1": "Tahviller tamamen hükümetin ödeme yapma yetenek ve isteğine bağımlıdır. Hükümet mali krizle karşılaşır, temerrüde düşer veya borcu enflasyonla ödemeye karar verirse, tahvil sahipleri zarar görür.",
	"point_7_summary_2": "Bitcoin herhangi bir hükümetten bağımsız olarak çalışır ve siyasi otoriteler tarafından kontrol edilemez, şişirilemez veya değersizleştirilemez."
});

writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin ve Nakit",
	"cash_header": "ARADAKI FARK", "cash_header_2": "BİTCOİN", "cash_header_3": "VE", "cash_header_4": "NAKİT",
	"cash_intro_1": "Nakit yüzyıllardır para olarak kullanılmaktadır ve dünyanın en yaygın fiziksel para biçimi olmaya devam etmektedir.",
	"cash_intro_2": "Bitcoin, 2009 yılında oluşturulan, herhangi bir hükümet veya merkezi otoriteden bağımsız çalışan dijital paradır.",
	"cash_intro_3": "Peki fiziksel nakit, Bitcoin gibi dijital paradan nasıl farklıdır? İki para biçimi arasındaki temel farklara bakalım: Bitcoin ve Nakit.",
	"cash": "NAKİT",
	"cash_point_1": "Fiziksel varlık gerektirir", "cash_point_2": "Sınırlarla kısıtlı", "cash_point_3": "Bir gecede geçersiz kılınabilir", "cash_point_4": "Sahte yapılabilir", "cash_point_5": "Hükümet tarafından kontrol edilir", "cash_point_6": "Fiziksel saklama riskleri", "cash_point_7": "Sınırlı bölünebilirlik",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "İnternet üzerinden gönderilebilir", "bitcoin_point_2": "Küresel olarak çalışır", "bitcoin_point_3": "Geçersiz kılınamaz", "bitcoin_point_4": "Sahte yapılamaz", "bitcoin_point_5": "Merkeziyetsiz ağ", "bitcoin_point_6": "Dijital kendi gözetim", "bitcoin_point_7": "Kolayca bölünebilir",
	"point_1_summary_1": "Bitcoin internet üzerinden dünyanın herhangi bir yerine anında gönderilebilirken, nakit fiziksel varlık veya güvenilir aracılar gerektirir. E-posta ile nakit gönderemezsiniz, ancak internet bağlantısı olan herkese dakikalar içinde Bitcoin gönderebilirsiniz.",
	"point_2_summary_1": "Bitcoin dünyanın her yerinde aynı şekilde çalışır — Bitcoin ağında sınır yoktur. Nakit, coğrafya, döviz kurları ve yerel kabul ile kısıtlıdır. Tayland kırsalında ABD doları veya Meksika kırsalında Japon yeni kullanmayı deneyin.",
	"point_3_summary_1": "Hükümetler, 2016'da Hindistan'ın belirli banknotları yasakladığındaki gibi demonetizasyon politikalarıyla nakiti bir gecede geçersiz kılabilir ve kılmıştır.",
	"point_3_summary_2": "Belirli banknotları yasaklamasalar bile, hükümetler sürekli olarak enflasyon yoluyla nakitin değerini düşürür.",
	"point_3_summary_3": "Bitcoin hiçbir hükümet veya otorite tarafından geçersiz kılınamaz — hiçbir varlığın kontrol etmediği küresel, merkeziyetsiz bir ağda var olur.",
	"point_4_summary_1": "Nakit sahte yapılabilir ve özel ekipman olmadan sahte banknotları tespit etmek genellikle zordur. Güvenlik özellikleriyle bile, sahte para hâlâ dolaşımdadır. Bitcoin, sahte yapmayı matematiksel olarak imkansız kılan kriptografik kanıt kullanır.",
	"point_5_summary_1": "Nakit, istediği kadar basabilen, tasarımını değiştirebilen veya belirli banknotları geçersiz ilan edebilen hükümet tarafından çıkarılır ve kontrol edilir. Bitcoin, hiçbir tek otoritenin para arzı veya kurallar üzerinde kontrole sahip olmadığı merkeziyetsiz bir ağda çalışır.",
	"point_6_summary_1": "Nakit fiziksel olarak saklanmalıdır, bu da onu hırsızlık, kayıp, yangın veya el koymaya karşı savunmasız kılar. Büyük miktarlar pahalı güvenlik önlemleri gerektirir.",
	"point_6_summary_2": "Ancak Bitcoin kendi gözetimde güvenle saklanabilir",
	"point_6_summary_3": "akıllı telefondaki bir uygulama veya özel bir cüzdan ile, fiziksel saklama riskleri olmadan paranız üzerinde tam kontrol sağlar.",
	"point_7_summary_1": "Nakitin minimum birimleri vardır — bir senti daha küçük parçalara bölemezsiniz. Bitcoin, satoshi adı verilen 100 milyon küçük birime bölünebilir, bu da mikro ödemeleri ve herhangi bir miktardaki hassas işlemleri mümkün kılar."
});

writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin ve CBDC",
	"cbdc_header": "DİJİTAL PARA NASIL", "cbdc_header_2": "OLMALI", "cbdc_header_3": "?",
	"cbdc_intro_1": "Dünyamız giderek daha dijital hale geliyor, paramız da öyle.",
	"cbdc_intro_2": "Bu, şu soruyu gündeme getiriyor: dijital paramızın nasıl olmasını istiyoruz?",
	"cbdc_intro_3": "Birçok ülke, mevcut ulusal para biriminin tamamen dijital bir formu olan Merkez Bankası Dijital Para Birimi (CBDC) çıkarmayı araştırıyor.",
	"cbdc_intro_4": "İki dijital para biçimi arasındaki farka bakalım: Bitcoin ve Merkez Bankası Dijital Para Birimleri (CBDC).",
	"cbdc": "CBDC",
	"cbdc_point_1": "Harcamak için izin gerekir", "cbdc_point_2": "Paranızın süresi dolabilir", "cbdc_point_3": "Toplam arz sınırı yok", "cbdc_point_4": "Devlet kimliğine bağlı", "cbdc_point_5": "Merkezileştirilmiş", "cbdc_point_6": "Kullanıcılar düğüm çalıştıramaz", "cbdc_point_7": "Kolayca dondurulabilir", "cbdc_point_8": "Saklayıcıya güvenmeniz gerekir", "cbdc_point_9": "Değişken para politikası", "cbdc_point_10": "Güvensiz",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "İzinsiz harcama", "bitcoin_point_2": "Paranızın süresi asla dolmaz", "bitcoin_point_3": "Sabit arz 21M BTC", "bitcoin_point_4": "Takma isimli", "bitcoin_point_5": "Merkeziyetsiz", "bitcoin_point_6": "Kullanıcılar düğüm çalıştırabilir", "bitcoin_point_7": "Dondurulamaz", "bitcoin_point_8": "Kendi gözetim imkanı", "bitcoin_point_9": "Öngörülebilir para politikası", "bitcoin_point_10": "Güvenli",
	"point_1_summary_1": "Bitcoin, paranız üzerinde tam kontrol vermeniz için tasarlanmıştır.", "point_1_summary_2": "Hiç kimse Bitcoin ile işlem yapmanızı engelleyemez.", "point_1_summary_3": "CBDC'ler, hükümetlere ve merkez bankalarına paranız üzerinde tam kontrol vermek için tasarlanmıştır.", "point_1_summary_4": "CBDC'ler gizliliğinizi ve özgürlüğünüzü kısıtlar.",
	"point_2_summary_1": "Bitcoin asla süresi dolmaz ve aylık ücretleri yoktur.", "point_2_summary_2": "CBDC'ler süreleri dolacak şekilde programlanabilir.", "point_2_summary_3": "CBDC'lerin süresi dolduğunda, gelecek için tasarruf etmenizi engeller.",
	"point_3_summary_1": "Bitcoin'in şimdiye kadar var olacak en fazla 21 milyon BTC'lik sabit bir üst sınırı vardır.", "point_3_summary_2": "CBDC'lerin, bugün kullandığımız ulusal para birimleri gibi, toplam arz üzerinde bir üst sınırı yoktur. Bu sınır eksikliği, hükümetin para arzını genişletmesine izin verir.", "point_3_summary_3": "Bu enflasyona neden olur.",
	"point_4_summary_1": "Bitcoin adresleri takma isimlidir, yani gerçek adınıza veya kimliğinize bağlı değildir. CBDC'ler doğrudan gerçek adınıza ve kimliğinize bağlıdır, bu da kitlesel finansal gözetim ve sansürü mümkün kılar.",
	"point_5_summary_1": "Bitcoin ağı merkeziyetsizdir.", "point_5_summary_2": "On binlerce bağımsız düğüm ağ kurallarını doğrular.", "point_5_summary_3": "CBDC'ler, CBDC ağı üzerinde tam kontrole sahip hükümet ve merkez bankalarının elinde merkezileştirilmiştir.",
	"point_6_summary_1": "Bitcoin, ağ kurallarına uyulduğunu doğrulayan bir düğüm çalıştırmayı herkes için mümkün kılar. CBDC'ler kimsenin düğüm çalıştırmasına izin vermez ve hükümete ve merkez bankalarına güvenmeye dayanır.",
	"point_7_summary_1": "Bitcoin, başkalarının paranızı dondurmasını imkansız kılmak için tasarlanmıştır. CBDC'ler, hükümetlerin ve merkez bankalarının paranızı dondurmasını kolaylaştırmak için tasarlanmıştır.",
	"point_8_summary_1": "Bitcoin, paranız üzerinde tam kontrol vermeniz için tasarlanmıştır.", "point_8_summary_2": "Sadece kendi gözetim cüzdanınıza aktardığınızdan emin olun.", "point_8_summary_3": "Bitcoin kendi gözetiminizdeyken, hiç kimse paranıza erişmenizi engelleyemez.", "point_8_summary_4": "CBDC'ler, banka veya hükümet gibi bir saklayıcının paranızı sizin için saklamasına güvenmenizi gerektirir.",
	"point_9_summary_1": "Bitcoin'in kodda sabitlenmiş ve değiştirilemeyen öngörülebilir bir para politikası vardır. CBDC'lerin, mevcut para birimlerimiz gibi, kolayca değiştirilebilir bir para politikası vardır.", "point_9_summary_2": "Bu, politikacılar çok fazla para bastığında enflasyona yol açar.",
	"point_10_summary_1": "Bitcoin şimdiye kadar var olmuş en güvenli bilgisayar ağıdır ve hiçbir zaman hacklenmemiştir. CBDC'ler ağı güvence altına almak için hükümetlere ve bankalara güvenir ki bunlar tarihte sayısız kez hacklenmiştir."
});

writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin ve Kripto",
	"crypto_header": "ARADAKI FARK", "crypto_header_2": "BİTCOİN", "crypto_header_3": "VE", "crypto_header_4": "KRİPTO",
	"crypto_intro_1": "Kripto para alanı binlerce farklı dijital token ve projeyle patladı.",
	"crypto_intro_2": "Bitcoin ilk ve en tanınmış kripto para olsa da, kripto endüstrisinin geri kalanından temelden farklıdır.",
	"crypto_intro_3": "Bitcoin ile daha geniş kripto para ekosistemi arasındaki temel farklara bakalım.",
	"crypto": "KRİPTO",
	"crypto_point_1": "Sık değişiklikler ve çatallanmalar", "crypto_point_2": "Merkezileştirilmiş kontrol", "crypto_point_3": "Sınırsız veya enflasyonist arz", "crypto_point_4": "Karmaşık protokoller", "crypto_point_5": "Deneysel uzlaşma", "crypto_point_6": "Spekülatif yardımcı tokenlar", "crypto_point_7": "Oynak ve kırılgan", "crypto_point_8": "Kurumsal destek",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "Değişmez protokol", "bitcoin_point_2": "Gerçekten merkeziyetsiz", "bitcoin_point_3": "Sabit arz 21M BTC", "bitcoin_point_4": "Basit ve erişilebilir", "bitcoin_point_5": "Kanıtlanmış iş ispatı", "bitcoin_point_6": "Saf dijital para", "bitcoin_point_7": "Antifrajil", "bitcoin_point_8": "Hiçbir varlık kontrol etmez",
	"point_1_summary_1": "Bitcoin protokolü 2009'dan bu yana özünde değişmeden kalmıştır ve kolayca değiştirilemeyen öngörülebilir kurallar sağlar. Çoğu kripto projesi protokollerini sık sık günceller, token ekonomisini değiştirir veya yeni sürümlere çatallanır, bu da kullanıcılar için belirsizlik yaratır.",
	"point_2_summary_1": "Bitcoin dünya genelinde on binlerce bağımsız düğüme sahip gerçekten merkeziyetsiz bir ağda çalışır. Birçok kripto projesi, protokolün geleceği hakkında tek taraflı kararlar alabilen vakıflar, şirketler veya küçük geliştirici grupları tarafından kontrol edilir.",
	"point_3_summary_1": "Bitcoin'in şimdiye kadar var olacak en fazla 21 milyon coin'lik sabit bir üst sınırı vardır ve onu en nadir dijital varlık yapar. Çoğu kripto projesinin sınırsız arzı, enflasyonist mekanizmaları veya istediği zaman yeni token basma imkanı vardır ve sahiplerin değerini zamanla sulandırır.",
	"point_4_summary_1": "Bitcoin'in tek bir basit amacı vardır: eşler arası dijital para. Herkes temel bilgiyle anlayabilir ve kullanabilir. Birçok kripto projesi, güvenle kullanmak için teknik uzmanlık gerektiren karmaşık akıllı sözleşmeler, DeFi protokolleri veya yönetim mekanizmaları içerir.",
	"point_5_summary_1": "Bitcoin, ana ağa tek bir başarılı saldırı olmadan 15 yılı aşkın süredir savaşta test edilmiş iş ispatı uzlaşmasını kullanır. Birçok kripto projesi, uzun vadeli güvenliğini henüz kanıtlamamış hisse ispatı veya delegeli sistemler gibi deneysel uzlaşma mekanizmaları kullanır.",
	"point_6_summary_1": "Bitcoin dijital para olarak hizmet eder — bir değer saklama aracı ve değişim aracı. Çoğu kripto token'ı belirli platformlar için yardımcı token'lar, yönetim token'ları veya belirsiz değer önermelerine sahip spekülatif varlıklardır.",
	"point_7_summary_1": "Bitcoin saldırı altında daha güçlü hale gelir ve kendisine yöneltilen her kriz, yasak ve eleştiriden sağ çıkmıştır. Çoğu kripto projesi kırılgandır ve düzenleyici baskı, teknik hatalar veya piyasa çöküşleri altında çökebilir.",
	"point_8_summary_1": "Bitcoin'in CEO'su yoktur, arkasında şirket yoktur ve tek bir başarısızlık noktası yoktur. Birçok kripto projesi risk sermayesi şirketleri tarafından desteklenir, tanınabilir liderliğe sahiptir veya devam eden operasyonları için belirli şirketlere bağımlıdır."
});

writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin ve Güzel Sanatlar",
	"fine_art_header": "ARADAKI FARK", "fine_art_header_2": "BİTCOİN", "fine_art_header_3": "VE", "fine_art_header_4": "GÜZEL SANATLAR",
	"fine_art_intro_1": "Güzel sanatlar yüzyıllardır lüks bir yatırım olmuştur ve varlıklı koleksiyoncular tarafından genellikle bir değer saklama aracı olarak kabul edilir.",
	"fine_art_intro_2": "Bitcoin, birçok kişi tarafından değer saklama aracı ve yatırım olarak da görülen dijital paradır.",
	"fine_art_intro_3": "Peki fiziksel sanat eserleri, Bitcoin gibi dijital paradan nasıl farklıdır? İki yatırım biçimi arasındaki farklara bakalım: Bitcoin ve Güzel Sanatlar.",
	"fine_art": "GÜZEL SANATLAR",
	"fine_art_point_1": "Her parça benzersiz", "fine_art_point_2": "Uzman müzayedeler gerektirir", "fine_art_point_3": "Yüksek müzayede ücretleri", "fine_art_point_4": "Bölünemez", "fine_art_point_5": "Uzman doğrulaması gerektirir", "fine_art_point_6": "Hasara karşı savunmasız", "fine_art_point_7": "Yalnızca varlıklı koleksiyoncular için",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "Tamamen takas edilebilir", "bitcoin_point_2": "7/24 küresel piyasa", "bitcoin_point_3": "Düşük işlem ücretleri", "bitcoin_point_4": "Kolayca bölünebilir", "bitcoin_point_5": "Kriptografik olarak doğrulanabilir", "bitcoin_point_6": "Yok edilmesi zor", "bitcoin_point_7": "Herkes için erişilebilir",
	"point_1_summary_1": "Bitcoin tamamen takas edilebilirdir, yani her bitcoin eşit ve birbirleriyle değiştirilebilirdir — dünyanın neresinde olursa olsun bir bitcoin bir bitcoine eşittir. Güzel sanatlar doğası gereği takas edilemez; her eser yaratılışı, tarihi, durumu ve provenansıyla benzersizdir, bu da doğrudan karşılaştırmaları ve değerlemeyi son derece zorlaştırır.",
	"point_2_summary_1": "Bitcoin, internet erişimi olan herkesin anında alım satım yapabildiği 7/24 küresel bir piyasada işlem görür. Güzel sanatlar Sotheby's veya Christie's gibi uzman müzayede evleri, özel satıcılar veya özel galeriler gerektirir. Satışlar aylar sürebilir ve piyasaya erişim sınırlıdır.",
	"point_3_summary_1": "Bitcoin alım satımı genellikle ücretlerde %1'den az tutarken, çoğu zaman çok daha azdır. Sanat satışı alıcı primi (%10-25), satıcı komisyonu (%10-15), sigorta, nakliye, saklama ve doğrulama ücretleri dahil önemli maliyetler içerir. Bu birleşik maliyetler tek bir işlemde eserin değerinin %30-40'ını kolayca aşabilir.",
	"point_4_summary_1": "Bitcoin, satoshi adı verilen 100 milyon küçük birime bölünebilir, bu da onu her boyutta işlem için ideal kılar. Güzel sanatlar bölünemez — bir resmin bir parçasına sahip olamaz veya bir heykelin sadece bir bölümünü satamazsınız. Bu bölünemezlik yatırım esnekliğini sınırlar.",
	"point_5_summary_1": "Bitcoin mülkiyeti ve gerçekliği, temel teknik bilgiye sahip herkes tarafından blokzincirde kriptografik olarak doğrulanabilir. Güzel sanatlar pahalı uzman doğrulaması, provenance araştırması ve bilimsel analiz gerektirir. Uzman doğrulamasına rağmen, sahteler düzenli olarak sanat dünyasını aldatmaktadır. Bitcoin ise sahte yapılamaz.",
	"point_6_summary_1": "Bitcoin, doğru şekilde yedeklendiyse, sel, yangın, deprem, kasırga, hırsızlık veya diğer felaketlerle yok edilemez. Güzel sanatlar, fiziksel yıkım ve bozulmanın her biçimine karşı savunmasızdır.",
	"point_7_summary_1": "Bitcoin, internet erişimi ve yatırım yapacak küçük bir miktarı olan herkes tarafından alınıp satılabilir. Güzel sanat yatırımları, yüksek minimum fiyatlar, özel müzayede erişimi, saklama gereksinimleri, sigorta maliyetleri ve uzman bilgisi nedeniyle büyük ölçüde varlıklı koleksiyoncularla sınırlıdır."
});

writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin ve Gayrimenkul",
	"real_estate_header": "ARADAKI FARK", "real_estate_header_2": "BİTCOİN", "real_estate_header_3": "VE", "real_estate_header_4": "GAYRİMENKUL",
	"real_estate_intro_1": "Gayrimenkul onlarca yıldır popüler bir yatırımdır ve genellikle istikrarlı değer saklama aracı olarak kabul edilir.",
	"real_estate_intro_2": "Bitcoin, 2009 yılında oluşturulan, birçok kişi tarafından değer saklama aracı ve yatırım olarak da görülen dijital paradır.",
	"real_estate_intro_3": "Peki fiziksel gayrimenkul, Bitcoin gibi dijital paradan nasıl farklıdır? İki yatırım biçimi arasındaki farklara bakalım: Bitcoin ve Gayrimenkul.",
	"real_estate": "GAYRİMENKUL",
	"real_estate_point_1": "Taşınamaz", "real_estate_point_2": "Kolayca bölünemez", "real_estate_point_3": "Devlet kontrolüne tabi", "real_estate_point_4": "Sürekli bakım gerektirir", "real_estate_point_5": "Emlak vergisine tabi", "real_estate_point_6": "Doğal afetlere karşı savunmasız", "real_estate_point_7": "Her mülk benzersiz", "real_estate_point_8": "Yerel alıcılarla sınırlı",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "Küresel olarak taşınabilir", "bitcoin_point_2": "Kolayca bölünebilir", "bitcoin_point_3": "Sansüre dayanıklı", "bitcoin_point_4": "Bakım gerektirmez", "bitcoin_point_5": "Emlak vergisi yok", "bitcoin_point_6": "Yok edilmesi zor", "bitcoin_point_7": "Tamamen takas edilebilir", "bitcoin_point_8": "7/24 küresel piyasa",
	"point_1_summary_1": "Bitcoin internet üzerinden anında dünyanın herhangi bir yerine taşınabilir. Gayrimenkul belirli bir konuma kalıcı olarak sabitlenmiştir ve taşınamaz, bu da onu yerel ekonomik koşullara, doğal afetlere ve siyasi istikrarsızlığa karşı savunmasız kılar.",
	"point_2_summary_1": "Bitcoin, satoshi adı verilen 100 milyon küçük birime bölünebilir, bu da onu her boyutta işlem için ideal kılar. Gayrimenkul kolayca bölünemez — evinizin sadece mutfağını satamaz veya bir yatak odasının yarısını satın alamazsınız.",
	"point_3_summary_1": "Bitcoin hiçbir hükümetin kontrol edemediği merkeziyetsiz bir ağda çalışır. Gayrimenkul, kira düzenlemesi, tahliye moratoryumları, imar yasaları ve kamulaştırma dahil kapsamlı devlet düzenlemesine tabidir.",
	"point_4_summary_1": "Bitcoin bakım gerektirmez — ağ üzerinde dijital kod olarak var olur. Gayrimenkul; onarımlar, tadilatlar, mülk yönetimi, sigorta ve kiracılarla uğraşma dahil sürekli ilgi gerektirir.",
	"point_5_summary_1": "Bitcoin'in süregelen bir vergisi yoktur — yalnızca sattığınızda sermaye kazancı vergisi ödersiniz. Gayrimenkul, mülkün gelir getirip getirmediğine bakılmaksızın ödenmesi gereken yıllık emlak vergisine tabidir.",
	"point_6_summary_1": "Bitcoin, doğru şekilde yedeklendiyse, sel, yangın, deprem, kasırga veya diğer doğal afetlerle yok edilemez. Gayrimenkul fiziksel yıkımın her biçimine karşı savunmasızdır.",
	"point_7_summary_1": "Her bitcoin eşit ve birbirleriyle değiştirilebilirdir — dünyanın neresinde olursa olsun bir bitcoin bir bitcoine eşittir. Her gayrimenkul, farklı konumlar, durumlar ve özelliklerle benzersizdir, bu da değerleme ve karşılaştırmayı zorlaştırır.",
	"point_8_summary_1": "Bitcoin, internet erişimi olan herkes tarafından dünyanın herhangi bir yerinden 7/24 alınıp satılabilir. Gayrimenkul satışı yerel alıcılarla sınırlıdır, avukatlar ve acentelerle uzun süreçler gerektirir ve aylar sürebilir.",
	"bitcoin_point_9": "Bireysel mülkiyeti destekler",
	"real_estate_point_9": "Konutun finansallaşmasına katkıda bulunur",
	"point_9_summary_1": "Bitcoin, aracılar olmadan doğrudan bireysel mülkiyeti mümkün kılar ve herkes için finansal egemenliği destekler. Birincil konutunuzun ötesinde yatırım olarak gayrimenkul satın almak, evlerin barınak yerine emtia haline geldiği konutun finansallaşmasına katkıda bulunur. Bu, fiyatları yükseltir, aileler için satın alınabilirliği azaltır ve konut krizine ve evsizliğe katkıda bulunur."
});

writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin ve Hisse Senetleri",
	"stocks_header": "ARADAKI FARK", "stocks_header_2": "BİTCOİN", "stocks_header_3": "VE", "stocks_header_4": "HİSSE SENETLERİ",
	"stocks_intro_1": "Hisse senetleri onlarca yıldır popüler bir yatırımdır ve şirketlerdeki sahiplik paylarını temsil eder.",
	"stocks_intro_2": "Bitcoin, 2009 yılında oluşturulan, herhangi bir şirket veya hükümetten bağımsız çalışan dijital paradır.",
	"stocks_intro_3": "Peki bir şirketin hisselerine sahip olmak, Bitcoin gibi dijital paraya sahip olmaktan nasıl farklıdır? İki yatırım biçimi arasındaki farklara bakalım: Bitcoin ve Hisse Senetleri.",
	"stocks": "HİSSE SENETLERİ",
	"stocks_point_1": "Bir şirketteki paylar", "stocks_point_2": "Sulandırılabilir arz", "stocks_point_3": "Kilit kişi riski", "stocks_point_4": "F/K oranıyla değerleme", "stocks_point_5": "Yalnızca işlem saatlerinde", "stocks_point_6": "Karşı taraf riski", "stocks_point_7": "Değişken enflasyon koruması",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "Doğrudan mülkiyet", "bitcoin_point_2": "Sabit arz 21M BTC", "bitcoin_point_3": "Merkeziyetsiz ağ", "bitcoin_point_4": "Piyasa tarafından belirlenen fiyat", "bitcoin_point_5": "7/24 işlem", "bitcoin_point_6": "Kendi gözetim imkanı", "bitcoin_point_7": "Sabit arzlı varlık",
	"point_1_summary_1": "Bitcoin'e sahip olduğunuzda, varlığın kendisi üzerinde doğrudan mülkiyete sahipsiniz. Hisse senedine sahip olduğunuzda, bir şirketteki bir paya sahipsiniz, bu da yatırımınızın şirketin performansına, yönetim kararlarına ve iş başarısına bağlı olduğu anlamına gelir.",
	"point_2_summary_1": "Bitcoin'in şimdiye kadar var olacak en fazla 21 milyon BTC'lik sabit bir üst sınırı vardır.", "point_2_summary_2": "Şirketler istediği zaman yeni hisse senedi çıkarabilir ve mevcut hissedarların yüzdelik sahipliğini sulandırabilir. Bu, yeni hisseler oluşturulduğunda şirketteki payınızın azaldığı anlamına gelir.", "point_2_summary_3": "Bu, itibari para enflasyonundan daha az olsa da, yine de sulandırmadır.", "point_2_summary_4": "Bitcoin ile pastadaki payınız asla küçülmez.",
	"point_3_summary_1": "Bitcoin, tek bir başarısızlık noktası olmayan merkeziyetsiz bir ağda çalışır. Hisse senedi yatırımları kilit kişi riskine tabidir — CEO veya diğer kilit yöneticiler ayrılır, hastalanır veya kötü kararlar alırsa, yatırımınız önemli ölçüde zarar görebilir.",
	"point_4_summary_1": "Bitcoin'in fiyatı tamamen piyasa arzı ve talebi tarafından belirlenir. Hisse senedi fiyatları genellikle yatırımcıların şirketin kazancının her doları için ne kadar ödediğini gösteren F/K (fiyat/kazanç) oranıyla değerlenir.",
	"point_5_summary_1": "Bitcoin küresel borsalarda günde 24 saat, haftada 7 gün işlem görür.", "point_5_summary_2": "Bitcoin merkeziyetsizdir", "point_5_summary_3": "ve asla uyumaz.", "point_5_summary_4": "Borsa piyasaları yalnızca iş günlerinde mesai saatlerinde açıktır, bu da yatırımlarınızı ne zaman alıp satabileceğinizi sınırlar.",
	"point_6_summary_1": "Bitcoin ile coinlerinizi kendi gözetiminize alabilirsiniz, yani üçüncü bir tarafa bağımlı olmadan onlara gerçekten sahip olursunuz.", "point_6_summary_2": "Kendi gözetim, bir uygulama indirmek kadar kolaydır.", "point_6_summary_3": "Hisse senetleri bir aracı kurum hesabı gerektirir ve karşı taraf riskleriyle karşı karşıyasınızdır — şirket iflas ederse veya aracı kurum çökerse yatırımınızı kaybedebilirsiniz.", "point_6_summary_4": "Hisse senedi sertifikalarına aslında doğrudan sahip olmazsınız.",
	"point_7_summary_1": "Bitcoin, şimdiye kadar var olacak en fazla 21 milyon Bitcoin'lik üst sınıra sahip sabit arzlı bir varlıktır. Bu, onu mükemmel bir enflasyon koruması yapar. Hisse senetlerinin enflasyona karşı değişken performansı vardır — bazı şirketler enflasyon dönemlerinde başarılı olurken, diğerleri zorlanır. Herhangi bir hisse senedinin enflasyona karşı koruyacağının garantisi yoktur."
});

writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin ve Visa",
	"visa_header": "ARADAKI FARK", "visa_header_2": "BİTCOİN", "visa_header_3": "VE", "visa_header_4": "VISA",
	"visa_intro_1": "Kredi kartları ve Bitcoin her ikisi de ödeme sistemleridir, ancak çok farklı şekillerde çalışırlar.",
	"visa_intro_2": "Visa gibi kredi kartları finans kurumları tarafından kontrol edilen kapalı ağlardır, Bitcoin ise herkesin kullanabileceği açık bir ağdır.",
	"visa_intro_3": "İki ödeme altyapısı arasındaki farklara bakalım: Bitcoin ve Visa.",
	"visa": "VISA",
	"visa_point_1": "Kapalı ağ", "visa_point_2": "Tüccarlardan %3 ücret", "visa_point_3": "Opak sistem", "visa_point_4": "Hesapları dondurabilir", "visa_point_5": "Yüksek faizli borç yaratır", "visa_point_6": "Aracılar gerektirir", "visa_point_7": "Sınırlı saatler ve coğrafya",
	"bitcoin": "BİTCOİN",
	"bitcoin_point_1": "Açık ağ", "bitcoin_point_2": "Tüccar ücreti yok", "bitcoin_point_3": "Şeffaf sistem", "bitcoin_point_4": "Dondurulamaz", "bitcoin_point_5": "Borç yaratmaz", "bitcoin_point_6": "Kendi gözetim imkanı", "bitcoin_point_7": "7/24 küresel erişim",
	"point_1_summary_1": "Bitcoin, herkesin izinsiz katılıp kullanabileceği açık bir ağdır. Visa gibi kredi kartı ağları, finans kurumlarının herkese erişimi reddedebileceği kapalı sistemlerdir.",
	"point_1_summary_2": "Bu, Bitcoin'i özellikle bankacılık hizmetlerinden yoksun olanlar başta olmak üzere dünya genelindeki insanlar için daha kapsayıcı ve erişilebilir kılar.",
	"point_2_summary_1": "Bitcoin işlemlerinde tüccar ücreti yoktur, ancak kredi kartı şirketleri genellikle tüccarlardan işlem başına yaklaşık %3 ücret alır.",
	"point_2_summary_2": "İşletmenizin nasıl tasarruf edebileceğini öğrenin",
	"point_2_summary_3": "kredi kartı işlem ücretleri yerine Bitcoin ödemelerini kabul ederek.",
	"point_3_summary_1": "Bitcoin, herkesin tüm işlemleri doğrulayabileceği şeffaf bir blokzincirde çalışır. Kredi kartı ağları, işlem detaylarının kamuoyundan gizlendiği kapalı, tescilli sistemler olarak çalışır.",
	"point_3_summary_2": "Bu şeffaflık, Bitcoin'i daha güvenilir kılar ve ağ bütünlüğünün bağımsız doğrulanmasını sağlar.",
	"point_4_summary_1": "Kredi kartı şirketleri istediği zaman hesapları dondurabilir, işlemleri engelleyebilir veya hizmeti reddedebilir. Bitcoin hiçbir merkezi otorite tarafından dondurulamaz veya kontrol edilemez.",
	"point_4_summary_2": "Bitcoin ile paranızın kontrolünü elinizde tutarsınız ve ödeme sisteminden kesilemezsiniz.",
	"point_5_summary_1": "Kredi kartları, bazen yılda %25'i aşan yüksek faiz oranlarıyla hızla birikebilen borç yaratır.",
	"point_5_summary_2": "Bitcoin işlemleri borç yaratmadan nihai ödeme niteliğindedir — yalnızca gerçekte sahip olduğunuz Bitcoin'i harcayabilirsiniz.",
	"point_6_summary_1": "Bitcoin, bankalara veya ödeme işlemcilerine bağımlı olmadan paranızı tutup kontrol edebileceğiniz kendi gözetimi mümkün kılar.",
	"point_6_summary_2": "Bitcoin cüzdanları hakkında daha fazla bilgi edinin",
	"point_6_summary_3": "ve paranızın kontrolünü nasıl ele alacağınızı anlayın. Kredi kartları her zaman bankalar ve ödeme işlemcileri gibi aracılar gerektirir.",
	"point_7_summary_1": "Bitcoin işlem saatleri veya coğrafi kısıtlamalar olmadan 7/24 küresel olarak çalışır.",
	"point_7_summary_2": "Kredi kartı ağlarının işlem saatleri, bakım dönemleri ve işlem gerçekleştirmeyi engelleyebilecek coğrafi kısıtlamaları vardır."
});

console.log(`\nDone! Created 10 comparison files.`);
