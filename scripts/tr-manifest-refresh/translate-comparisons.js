#!/usr/bin/env node
/**
 * Turkish manifest refresh — bitcoin-vs-* namespaces.
 *
 * Translates manifest-changed + manifest-added entries for all
 * 10 comparison pages. Idempotent.
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

/* Translation map keyed by `<namespace>/<key>`. */
const T = {
	// ─────────── bitcoin-vs-banks ───────────
	"bitcoin-vs-banks/point_1_summary_1":
		"İnternet bağlantısı olan herkes Bitcoin'i kullanabilir — bu",
	"bitcoin-vs-banks/point_1_summary_2": "izin gerektirmez.",
	"bitcoin-vs-banks/point_1_summary_3":
		"Bankalar, kendi politikaları veya hükümet kuralları gereğince hesapları reddedebilir, dondurabilir ya da kapatabilir.",
	"bitcoin-vs-banks/point_2_summary_1":
		"Bitcoin ağı 7/24/365 çalışır, bakım dönemi ya da tatili yoktur. Bankaların çalışma saatleri sınırlıdır, hafta sonları kapalıdır ve kesinti pencereleri vardır.",
	"bitcoin-vs-banks/point_3_summary_1":
		"Her Bitcoin işlemi, herkesin denetleyebileceği açık bir blokzincir üzerindedir. Bankalar, müşterilerin bağımsız olarak doğrulayamayacağı özel defterler tutar.",
	"bitcoin-vs-banks/point_4_summary_1":
		"Bitcoin'de kendi özel anahtarlarını sen tutarsın — basit",
	"bitcoin-vs-banks/point_4_summary_2": "Bitcoin cüzdanları",
	"bitcoin-vs-banks/point_4_summary_3":
		"rehberimize bak. Bankalar paranı tutar ve istedikleri zaman dondurabilir, sınırlayabilir ya da kısıtlayabilirler.",
	"bitcoin-vs-banks/point_5_summary_1":
		"Bitcoin ücretleri şeffaf ve öngörülebilirdir. Bankalar zamanla gizli hesap, ekstre, havale ve ATM ücretleri biriktirir.",
	"bitcoin-vs-banks/point_6_summary_1":
		"Bitcoin yalnızca gerçekten sahip olduğun parayı harcamana izin verir. Bankalar limit aşımına izin verir, sonra da bu ayrıcalık için art arda ceza ücretleri keser.",
	"bitcoin-vs-banks/point_7_summary_1":
		"Yayınlandıktan sonra Bitcoin işlemleri durdurulamaz ya da geri alınamaz. Bankalar, kendi politikaları ya da hükümet emirleri doğrultusunda işlemleri engelleyebilir, dondurabilir ya da geri çevirebilir.",
	"bitcoin-vs-banks/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">Bankalar</span> arasındaki fark',

	// ─────────── bitcoin-vs-bonds ───────────
	"bitcoin-vs-bonds/point_1_summary_1":
		"Tahviller yalnızca nominal olarak 'risksizdir' — enflasyon, faiz oranı hareketleri ve temerrüt riski gerçek getirileri yer bitirir.",
	"bitcoin-vs-bonds/point_1_summary_2":
		"Bitcoin'in oynaklığı şeffaftır ama gizli karşı taraf riski yoktur.",
	"bitcoin-vs-bonds/point_2_summary_1": "Ne zaman ki",
	"bitcoin-vs-bonds/point_2_summary_2": "enflasyon",
	"bitcoin-vs-bonds/point_2_summary_3":
		"tahvil getirilerini geçer, tahvil sahipleri her yıl gerçek alım gücü kaybeder. Bitcoin'in 21 milyonluk tavanı enflasyonla eritilemez.",
	"bitcoin-vs-bonds/point_3_summary_1":
		"Tahvil piyasaları krizlerde donabilir — Silicon Valley Bank kısmen değer kaybeden tahvillerle baş başa kaldığı için çöktü.",
	"bitcoin-vs-bonds/point_3_summary_2": "banka hücumlarının",
	"bitcoin-vs-bonds/point_3_summary_3":
		"nasıl olduğunu ve Bitcoin'in onlardan neden kaçındığını gör. Bitcoin küresel olarak 7/24 işlem görür ve likidite krizi yaşamaz.",
	"bitcoin-vs-bonds/point_4_summary_1":
		"Hazine ihaleleri, alıcı yetersiz olduğunda başarısız olabilir —",
	"bitcoin-vs-bonds/point_4_summary_2": "2022'deki zayıf ihaleye",
	"bitcoin-vs-bonds/point_4_summary_3":
		"bak. Bitcoin'in fiyatı, başarısız olabilecek merkezi bir ihale olmaksızın açık piyasalarda sürekli olarak keşfedilir.",
	"bitcoin-vs-bonds/point_5_summary_1":
		"Tahvil getirileri alımda sabitlenir. Ekonomi patlama yaşasa ya da para birimi çökse bile getirin aynı kalır.",
	"bitcoin-vs-bonds/point_5_summary_2":
		"Bitcoin, benimseme arttıkça ve talep sabit arzla buluştukça önemli ölçüde değer kazanmaya açıktır.",
	"bitcoin-vs-bonds/point_6_summary_1":
		"Çoğu tahvil bankalar veya brokerlar aracılığıyla tutulur ve karşı taraf riski getirir. Bitcoin ise bir",
	"bitcoin-vs-bonds/point_6_summary_2": "cüzdan",
	"bitcoin-vs-bonds/point_7_summary_1":
		"Tahviller tamamen hükümetlerin geri ödemesine bağlıdır. Bir hükümet temerrüde düşer ya da borcunu enflasyonla eritirse, tahvil sahipleri kaybeder.",
	"bitcoin-vs-bonds/point_7_summary_2":
		"Bitcoin, herhangi bir hükümetten ya da siyasi otoriteden bağımsız çalışır.",
	"bitcoin-vs-bonds/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">Tahviller</span> arasındaki fark',
	"bitcoin-vs-bonds/point_6_summary_3":
		" ile öz saklamada tutulabilir — bu da o riski tamamen ortadan kaldırır.",

	// ─────────── bitcoin-vs-cash ───────────
	"bitcoin-vs-cash/point_1_summary_1":
		"Bitcoin internet üzerinden dünyanın her yerine dakikalar içinde gönderilir. Nakit ise fiziksel varlık ya da güvenilir kuryeler ister — 20 dolarlık banknotu e-postayla gönderemezsin.",
	"bitcoin-vs-cash/point_2_summary_1":
		"Bitcoin her yerde aynı şekilde çalışır. Nakit ise coğrafyaya, döviz kurlarına ve yerel kabule bağlıdır.",
	"bitcoin-vs-cash/point_3_summary_1":
		'Hükümetler nakdi bir gecede geçersiz kılabilir — <a class="body-link" href="https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation" target="_blank" rel="noopener noreferrer">Hindistan</a> bunu 2016\'da yaptı. Demonetizasyon olmasa bile nakit',
	"bitcoin-vs-cash/point_3_summary_2": "enflasyon",
	"bitcoin-vs-cash/point_3_summary_3":
		"yüzünden değer kaybeder. Bitcoin hiçbir hükümet ya da otorite tarafından geçersiz kılınamaz.",
	"bitcoin-vs-cash/point_4_summary_1":
		"Nakit, bazen çok inandırıcı biçimde sahtecilik yapılarak çoğaltılabilir. Bitcoin, sahteciliği matematiksel olarak imkânsız kılan kriptografi kullanır.",
	"bitcoin-vs-cash/point_5_summary_1":
		"Bitcoin'in merkezi bir otoritesi yoktur. Nakit, daha çoğunu basabilen, tasarımları değiştirebilen ya da banknotları istediği zaman geçersiz kılabilen hükümetler tarafından çıkarılır.",
	"bitcoin-vs-cash/point_6_summary_1":
		"Nakit hırsızlık, yangın, kayıp ve müsadereye karşı savunmasızdır. Bitcoin ise telefon ya da donanım cihazında",
	"bitcoin-vs-cash/point_6_summary_2": "öz saklamada",
	"bitcoin-vs-cash/point_6_summary_3": "güvenle tutulabilir.",
	"bitcoin-vs-cash/point_7_summary_1":
		"Bitcoin 100 milyon sat'a bölünür ve her büyüklükte mikro ödemeyi mümkün kılar. Nakdin asgari kupürleri vardır — bir kuruşu bölemezsin.",
	"bitcoin-vs-cash/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">Nakit</span> arasındaki fark',

	// ─────────── bitcoin-vs-cbdc ───────────
	"bitcoin-vs-cbdc/point_10_summary_1":
		"Bitcoin, şimdiye kadar inşa edilmiş en güvenli bilgi işlem ağıdır ve hiç hacklenmemiştir. CBDC'ler ise sayısız kez hacklenmiş bankalara ve hükümetlere dayanır.",
	"bitcoin-vs-cbdc/point_1_summary_1":
		"Hiç kimse seni Bitcoin'le işlem yapmaktan alıkoyamaz. CBDC'ler ise hükümetlerin ve merkez bankalarının her ödemeyi kontrol edebileceği şekilde tasarlanır; bu da gizliliğini ve özgürlüğünü kısıtlar.",
	"bitcoin-vs-cbdc/point_2_summary_1":
		"Bitcoin'in son kullanma tarihi yoktur ve aylık ücreti yoktur. CBDC'ler, geleceğe yönelik biriktirmeni engelleyecek şekilde sona erecek biçimde programlanabilir.",
	"bitcoin-vs-cbdc/point_3_summary_1":
		"Bitcoin'in 21 milyon BTC'lik kesin bir tavanı vardır. CBDC'lerin arz tavanı yoktur; hükümetler para arzını dilediğince genişletebilir — bu da",
	"bitcoin-vs-cbdc/point_3_summary_2": "enflasyona",
	"bitcoin-vs-cbdc/point_4_summary_1":
		"Bitcoin adresleri gerçek kimliğine bağlı değildir. CBDC'ler doğrudan resmi kimliğe bağlanır; bu da kitlesel finansal gözetimi ve sansürü mümkün kılar.",
	"bitcoin-vs-cbdc/point_5_summary_1":
		"Bitcoin'in kuralları on binlerce bağımsız düğüm tarafından doğrulanır. CBDC'ler ağ üzerinde tam kontrole sahip olan hükümet ve merkez bankası elinde merkezileşmiştir.",
	"bitcoin-vs-cbdc/point_6_summary_1":
		"Herkes ağın kurallarını doğrulamak için bir Bitcoin düğümü çalıştırabilir. CBDC'ler kullanıcıların düğüm çalıştırmasına izin vermez — merkezi otoriteye güvenmek zorundasın.",
	"bitcoin-vs-cbdc/point_7_summary_1":
		"Öz saklamadaki Bitcoin kimse tarafından dondurulamaz. CBDC'ler, hükümetlerin ve merkez bankalarının hesapları anında dondurabileceği şekilde tasarlanır.",
	"bitcoin-vs-cbdc/point_8_summary_1":
		"Bitcoin, paranı bir",
	"bitcoin-vs-cbdc/point_8_summary_2": "cüzdanla",
	"bitcoin-vs-cbdc/point_8_summary_3":
		"öz saklamada tuttuğunda paran üzerinde tam kontrol sağlar. CBDC'ler ise paranı senin için tutmaları için bankalar ya da hükümetler gibi saklayıcılara güvenmeyi gerektirir.",
	"bitcoin-vs-cbdc/point_9_summary_1":
		"Bitcoin'in para politikası kodda sabittir ve değiştirilemez. CBDC'ler politikacılar tarafından istendiği zaman yeniden programlanabilir; bu da",
	"bitcoin-vs-cbdc/point_9_summary_2": "enflasyona",
	"bitcoin-vs-cbdc/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">CBDC\'ler</span> arasındaki fark',
	"bitcoin-vs-cbdc/point_9_summary_3":
		" çok fazla para basıldığında yol açar.",

	// ─────────── bitcoin-vs-crypto ───────────
	"bitcoin-vs-crypto/point_1_summary_1":
		"Bitcoin protokolü 2009'dan beri temelde aynı kaldı; bu da öngörülebilir kurallar sunar. Çoğu kripto projesi protokollerini, tokenomiklerini sürekli değiştirir ya da yeni sürümlere çatallanır.",
	"bitcoin-vs-crypto/point_2_summary_1":
		"Bitcoin, dünya genelinde on binlerce bağımsız düğüm üzerinde çalışır. Çoğu kripto projesi, tek taraflı değişiklikler yapabilen vakıflar, şirketler ya da küçük geliştirici ekipleri tarafından kontrol edilir.",
	"bitcoin-vs-crypto/point_3_summary_1":
		"Bitcoin'in 21 milyon coinlik kesin bir tavanı vardır — en nadir dijital varlık. Çoğu kripto projesinin arzı sınırsızdır ya da istedikleri zaman yeni token basacak mekanizmaları vardır; bu da sahipleri sulandırır.",
	"bitcoin-vs-crypto/point_4_summary_1":
		"Bitcoin'in tek bir amacı vardır: eşler arası dijital para. Herkes onu anlayıp kullanabilir. Çoğu kriptoda güvenli kullanmak için teknik uzmanlık gerektiren karmaşık akıllı sözleşmeler ya da DeFi yer alır.",
	"bitcoin-vs-crypto/point_5_summary_1":
		"Bitcoin'in İş Kanıtı (Proof of Work) ana ağı 15 yıldan uzun süredir başarılı bir saldırıya uğramadan çalıştı. Çoğu kripto projesi, kendini kanıtlamamış deneysel uzlaşı yöntemleri kullanır.",
	"bitcoin-vs-crypto/point_6_summary_1":
		"Bitcoin dijital paradır — bir değer saklama aracı ve değişim aracıdır. Çoğu kripto token, gerçek dünya değeri belirsiz olan spekülatif yarar ya da yönetişim tokenıdır.",
	"bitcoin-vs-crypto/point_7_summary_1":
		"Bitcoin saldırı altında daha da güçlenir ve her krizden, yasaktan ve eleştiriden sağ çıktı. Çoğu kripto projesi düzenleyici, teknik ya da piyasa baskısı altında çöker.",
	"bitcoin-vs-crypto/point_8_summary_1":
		"Bitcoin'in CEO'su yoktur, şirketi yoktur, tek bir kırılma noktası yoktur. Çoğu kripto projesi VC'lere, belirli liderlere ya da tek bir şirketin ayakta kalmasına bağlıdır.",
	"bitcoin-vs-crypto/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">Kripto</span> arasındaki fark',

	// ─────────── bitcoin-vs-fine-art ───────────
	"bitcoin-vs-fine-art/point_1_summary_1":
		"Her bitcoin birbirinin aynısı ve değiştirilebilirdir. Her sanat eseri benzersizdir — yaratım, geçmiş, durum ve köken farklılığı, doğrudan karşılaştırmaları son derece zorlaştırır.",
	"bitcoin-vs-fine-art/point_2_summary_1":
		"Bitcoin, herkesin erişebildiği küresel bir piyasada 7/24 işlem görür. Güzel sanatlar uzman müzayede evlerini, özel satıcıları ya da galerileri gerektirir ve satılması aylar alabilir.",
	"bitcoin-vs-fine-art/point_3_summary_1":
		"Bitcoin alıp satmak %1'in altında ücretle, çoğu zaman çok daha azına olur. Sanat satışları alıcı primi, komisyon, sigorta, taşıma ve özgünlük doğrulama ücretlerinde %30–40'a ulaşır.",
	"bitcoin-vs-fine-art/point_4_summary_1":
		"Bitcoin 100 milyon sat'a bölünür; bu da onu her büyüklükte işlem için mükemmel kılar. Bir tablonun bir kısmına ya da bir heykelin köşesine, karşı taraf riski olmadan sahip olamazsın.",
	"bitcoin-vs-fine-art/point_5_summary_1":
		"Bitcoin sahipliği ve özgünlüğü zincir üzerinde herkes tarafından kriptografik olarak doğrulanabilir. Sanat özgünlüğünü doğrulamak pahalı ve yavaştır ve hâlâ rutin olarak sahtecilerce kandırılır — bu da bir eserin değerini bir gecede yok edebilir.",
	"bitcoin-vs-fine-art/point_6_summary_1":
		"Doğru yedeklenmiş Bitcoin sel, yangın, deprem ve hırsızlıktan sağ çıkar. Güzel sanat ise her tür fiziksel yıkıma karşı savunmasızdır ve sigorta nadiren her şeyi karşılar.",
	"bitcoin-vs-fine-art/point_7_summary_1":
		"İnternet bağlantısı ve biraz parası olan herkes Bitcoin alabilir. Güzel sanat yatırımı, fiilen müzayede erişimi ve uzmanlığı olan zengin koleksiyonerlerle sınırlıdır.",
	"bitcoin-vs-fine-art/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">Güzel Sanatlar</span> arasındaki fark',

	// ─────────── bitcoin-vs-gold ───────────
	"bitcoin-vs-gold/point_1_summary_1":
		"Bitcoin internet üzerinden anında ve düşük ücretlerle gönderilebilir. Altının mülkiyetini devretmek için fiziksel olarak nakledilmesi gerekir.",
	"bitcoin-vs-gold/point_2_summary_1":
		"Bitcoin internet üzerinden transfer edebileceğin, dijital olarak doğal bir varlıktır. Çevrimiçi altın ise dijital bir IOU'dur — sadece bir saklayıcının söz verdiği bir vaade sahipsin, metalin kendisine değil.",
	"bitcoin-vs-gold/point_3_summary_1":
		'Bitcoin\'in 21 milyon BTC\'lik kesin bir tavanı vardır. Altının arzı ise yılda yaklaşık <a class="body-link" href="https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics" target="_blank" rel="noopener noreferrer">%1,6</a> büyür ve dilimini küçültür — fiat',
	"bitcoin-vs-gold/point_3_summary_2": "enflasyonundan",
	"bitcoin-vs-gold/point_3_summary_3": "az ama yine de enflasyondur.",
	"bitcoin-vs-gold/point_4_summary_1":
		"Altın fiyatları yükseldiğinde daha çok altın çıkarılır ve fiyatı tekrar aşağı iter. Bitcoin'in arzı esnek değildir — fiyat ne kadar yükselirse yükselsin, sonsuza dek yalnızca 21 milyon olacak.",
	"bitcoin-vs-gold/point_5_summary_1":
		"Bitcoin ağını on binlerce bağımsız düğüm doğrular. Çoğu fiziksel altın, bir avuç büyük saklayıcı kasada durur.",
	"bitcoin-vs-gold/point_6_summary_1":
		"Herkes tam düğüm çalıştırarak gerçek Bitcoin'i doğrulayabilir — bu yalnızca bir uygulamadır. Fiziksel altını doğrulamak için onu eritmek gerekir; içi tungsten olabilir.",
	"bitcoin-vs-gold/point_7_summary_1":
		"Bitcoin 100 milyon sat'a bölünür; bu da onu her büyüklükteki alışveriş için mükemmel kılar. Altın küçük işlemler için kolayca bölünemez.",
	"bitcoin-vs-gold/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">Altın</span> arasındaki fark',

	// ─────────── bitcoin-vs-real-estate ───────────
	"bitcoin-vs-real-estate/point_1_summary_1":
		"Bitcoin dünyanın her yerine anında hareket edebilir. Gayrimenkul tek bir konuma bağlıdır ve yerel ekonomik, siyasi ve doğal risklere maruzdur.",
	"bitcoin-vs-real-estate/point_2_summary_1":
		"Bitcoin 100 milyon sat'a bölünür. Gayrimenkulü kısmen satamazsın — sadece mutfağı elden çıkaramazsın ya da yatak odasının yarısını alamazsın.",
	"bitcoin-vs-real-estate/point_3_summary_1":
		"Bitcoin, hiçbir hükümetin kontrol edemediği merkeziyetsiz bir ağda çalışır. Gayrimenkul ağır biçimde düzenlenir — imar, kira kontrolü, kamulaştırma ve müsadere geçerlidir.",
	"bitcoin-vs-real-estate/point_4_summary_1":
		"Bitcoin'in bakımı gerekmez. Gayrimenkul onarım, tadilat, sigorta, mülk yönetimi ve kiracı sorunları ister.",
	"bitcoin-vs-real-estate/point_5_summary_1":
		"Bitcoin'in sürekli vergileri yoktur — yalnızca sattığında sermaye kazancı vergisi ödersin. Gayrimenkul, gelirden bağımsız olarak yıllık emlak vergisi borçludur.",
	"bitcoin-vs-real-estate/point_6_summary_1":
		"Doğru yedeklenmiş Bitcoin, yangın, sel ve depremden sağ çıkar. Gayrimenkul her felakete karşı savunmasızdır ve sigorta nadiren her şeyi karşılar.",
	"bitcoin-vs-real-estate/point_7_summary_1":
		"Her bitcoin birbirinin aynısı ve değiştirilebilirdir. Her mülk benzersizdir; bu da fiyatlamayı ve karşılaştırmayı zorlaştırır.",
	"bitcoin-vs-real-estate/point_8_summary_1":
		"Bitcoin küresel olarak 7/24, internet erişimi olan herkesçe işlem görür. Gayrimenkul satışları yerel alıcılarla sınırlıdır ve kapanışı aylarca süren evrak işleri gerektirebilir.",
	"bitcoin-vs-real-estate/point_9_summary_1":
		"Bitcoin, herkes için doğrudan bireysel mülkiyeti mümkün kılar. Birinci konutun ötesinde bir gayrimenkulü yatırım amacıyla almak konut fiyatlarını yukarı iter, satın alınabilirliği azaltır ve konut krizini körükler.",
	"bitcoin-vs-real-estate/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">Gayrimenkul</span> arasındaki fark',

	// ─────────── bitcoin-vs-stocks ───────────
	"bitcoin-vs-stocks/point_1_summary_1":
		"Bitcoin, doğrudan sahip olduğun bir varlıktır. Hisse senetleri ise bir şirketteki paylardır — değeri, kontrol edemediğin yönetime, performansa ve kararlara bağlıdır.",
	"bitcoin-vs-stocks/point_2_summary_1":
		"Bitcoin'in 21 milyon BTC'lik kesin bir tavanı vardır. Şirketler istedikleri zaman yeni hisse çıkararak mevcut hissedarları sulandırabilir — tıpkı fiat",
	"bitcoin-vs-stocks/point_2_summary_2": "enflasyonunun",
	"bitcoin-vs-stocks/point_2_summary_3":
		"nakdi sulandırması gibi. Bitcoin'de senin payın asla küçülmez.",
	"bitcoin-vs-stocks/point_3_summary_1":
		"Bitcoin'in CEO'su ve tek bir kırılma noktası yoktur. Hisse senetleri büyük ölçüde liderliğe bağlıdır — tek bir kötü karar ya da ayrılış fiyatı dibe çekebilir.",
	"bitcoin-vs-stocks/point_4_summary_1":
		"Bitcoin'in fiyatı açık küresel piyasalardan gelir. Hisse senedi değerlemeleri, aşırı fiyatlanmış payları gizleyebilen F/K oranı gibi metriklere dayanır.",
	"bitcoin-vs-stocks/point_5_summary_1":
		"Bitcoin dünyanın her yerinde 7/24 işlem görür. Hisse senedi piyasaları yalnızca hafta içi mesai saatlerinde açıktır.",
	"bitcoin-vs-stocks/point_6_summary_1": "Bitcoin'i basit bir uygulamayla",
	"bitcoin-vs-stocks/point_6_summary_2": "öz saklamada",
	"bitcoin-vs-stocks/point_6_summary_3":
		"tutabilirsin — aracıya ihtiyaç yok. Hisse senetleri brokerlerde durur ve onlar batarsa karşı taraf riski taşırsın.",
	"bitcoin-vs-stocks/point_7_summary_1":
		"Bitcoin'in sabit arzı, onu güvenilir bir enflasyon koruması yapar. Bazı hisseler enflasyonu yenebilir, bazıları yenemez — garanti yok.",
	"bitcoin-vs-stocks/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">Hisse Senetleri</span> arasındaki fark',

	// ─────────── bitcoin-vs-visa ───────────
	"bitcoin-vs-visa/point_1_summary_1":
		"Bitcoin, herkesin izinsiz katılıp kullanabileceği açık bir ağdır. Visa ise erişimi reddedebilen finansal kurumların kontrolündeki kapalı bir sistemdir — özellikle bankasız ve yetersiz bankacılık hizmeti alanlar için.",
	"bitcoin-vs-visa/point_2_summary_1":
		"Bitcoin işlemlerinde işyeri ücreti yoktur. Visa ise işyerlerinden işlem başına genellikle %3 civarında ücret alır — işin",
	"bitcoin-vs-visa/point_2_summary_2": "Bitcoin ödemeleri",
	"bitcoin-vs-visa/point_2_summary_3":
		"kabul ederek tasarruf edebilir.",
	"bitcoin-vs-visa/point_3_summary_1":
		"Her Bitcoin işlemi, kamuya açık ve denetlenebilir bir blokzincir üzerindedir. Visa, müşterilerin hiçbir şeyi bağımsız olarak doğrulayamadığı kapalı, tescilli bir sistem işletir.",
	"bitcoin-vs-visa/point_4_summary_1":
		"Bitcoin, hiçbir merkezi otorite tarafından dondurulamaz. Visa istediği zaman hesapları dondurabilir, işlemleri engelleyebilir ya da hizmeti reddedebilir.",
	"bitcoin-vs-visa/point_5_summary_1":
		"Bitcoin nihai uzlaşmalıdır — yalnızca sahip olduğun parayı harcayabilirsin. Kredi kartları, çoğunlukla yıllık %25'in üzerinde faiz oranlarıyla borç oluşturur.",
	"bitcoin-vs-visa/point_6_summary_1":
		"Bitcoin sana, banka ya da ödeme işlemcisine gerek olmadan",
	"bitcoin-vs-visa/point_6_summary_2": "öz saklamayı",
	"bitcoin-vs-visa/point_6_summary_3":
		"sağlar. Kredi kartları her zaman aracılar gerektirir.",
	"bitcoin-vs-visa/point_7_summary_1":
		"Bitcoin küresel olarak 7/24 çalışır, çalışma saati yoktur. Visa'nın çalışma saatleri, bakım pencereleri ve işlemleri engelleyebilen coğrafi kısıtlamaları vardır.",
	"bitcoin-vs-visa/hero_title":
		'<span class="orange">Bitcoin</span> ile <span class="asset">Visa</span> arasındaki fark',
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missingKeys = [];

	for (const e of report.entries) {
		if (!e.namespace.startsWith("bitcoin-vs-")) continue;
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
		`translate-comparisons (tr): filled ${filled}, already-done ${skipped}`,
	);
	if (missingKeys.length) {
		console.log(`\nUnmatched keys (${missingKeys.length}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
