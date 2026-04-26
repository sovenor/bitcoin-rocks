#!/usr/bin/env node
/**
 * Turkish manifest refresh — content namespaces:
 *   404, about, bank-runs, buy, compound-inflation-calculator,
 *   flyers, get-involved, lightning, wallets.
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
	// ─────────── 404 ───────────
	"404/404_home": "Ana sayfaya dön",
	"404/404_message": "Bitcoin harika ama bu bozuk sayfa değil.",
	"404/404_not_found_short": "Bulunamadı",

	// ─────────── about ───────────
	"about/about_card_contact_github_label": "GitHub",
	"about/about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about/about_card_email_title": "hi@bitcoin.rocks",
	"about/about_card_nostr_label": "Nostr",
	"about/about_card_nostr_title": "hi@bitcoin.rocks",
	"about/about_mission_1_sovenor": "sovenor",
	"about/about_page_description":
		"bitcoin.rocks, 2022'de kurulan ücretsiz, açık kaynaklı bir Bitcoin eğitim sitesidir. Misyonumuz, Bitcoin'in benimsenmesini eğitim yoluyla hızlandırmaktır.",
	"about/about_editorial_2":
		"Federal Reserve (FRED), ABD Çalışma İstatistikleri Bürosu, FDIC, Birleşmiş Milletler, Dünya Altın Konseyi, Forbes, MIT Technology Review, Lyn Alden ve James Lavish gibi güvenilir kaynaklara bağlantı veriyoruz. Gerçekler net biçimde sunulduğunda Bitcoin'in kendi adına konuştuğuna inanıyoruz.",
	"about/about_header": "bitcoin.rocks hakkında",
	"about/about_open_source_2":
		"bitcoin.rocks, MIT Lisansı altında lisanslanmış ücretsiz, açık kaynaklı bir projedir. Herkes bitcoin.rocks'a katkıda bulunabilir. Özellikle içeriklerimizi dünyanın dört bir yanındaki insanlara ulaştırmamıza yardım eden çevirmenleri büyük bir memnuniyetle karşılıyoruz.",
	"about/about_business_blurb":
		"Yerel işyerlerinin Bitcoin kabul etmesini kolaylaştıran ücretsiz işletme kaynakları sunuyoruz. Bitcoin işletme sayfamız, Bitcoin'in işletmeler için neden iyi olduğunu, cüzdan ve POS seçimini anlatır ve ücretsiz 'Bitcoin Burada Kabul Edilir' çıkartmaları sunar.",
	"about/about_card_business_label": "İşletme kaynakları",
	"about/about_card_business_source": "Kaynak: bitcoin.rocks →",
	"about/about_card_business_title":
		"Bir işletmenin Bitcoin ödemelerini kabul etmeye başlaması için ihtiyacı olan her şey",
	"about/about_card_contact_github_source": "Kaynak: GitHub →",
	"about/about_card_contribute_label": "Katkıda bulun",
	"about/about_card_contribute_source": "Kaynak: GitHub →",
	"about/about_card_contribute_title": "bitcoin.rocks'a nasıl katkı sağlayabileceğini öğren",
	"about/about_card_email_label": "E-posta",
	"about/about_card_email_source": "Kaynak: e-posta →",
	"about/about_card_flyers_label": "Yazdırılabilir broşürler",
	"about/about_card_flyers_source": "Kaynak: bitcoin.rocks →",
	"about/about_card_flyers_title":
		"Topluluğun için Bitcoin broşürlerini indir ve yazdır",
	"about/about_card_github_label": "Depo",
	"about/about_card_github_source": "Kaynak: GitHub →",
	"about/about_card_github_title": "bitcoin.rocks'u GitHub'da görüntüle",
	"about/about_card_nostr_source": "Kaynak: Nostr →",
	"about/about_card_stickers_label": "Ücretsiz çıkartmalar",
	"about/about_card_stickers_source": "Kaynak: bitcoin.rocks →",
	"about/about_card_stickers_title":
		"Ücretsiz Bitcoin çıkartmalarını kapına kadar gönderelim",
	"about/about_flyers_blurb":
		"Toplantılarda dağıtabileceğin, ilan tahtalarına asabileceğin ya da posta kutularına bırakabileceğin yazdırılabilir broşürler tasarlıyoruz — merak uyandırmak ve insanları daha fazla bilgi için bitcoin.rocks'a yönlendirmenin basit bir yolu.",
	"about/about_mission_1a": "bitcoin.rocks,",
	"about/about_mission_1b":
		"tarafından 2022'de basit bir misyonla kuruldu: Bitcoin'in benimsenmesini eğitim yoluyla hızlandırmak.",
	"about/about_stickers_blurb":
		"Ücretsiz Bitcoin çıkartmalarını kapına kadar gönderiyoruz; böylece topluluğunda Bitcoin farkındalığını yaymaya yardımcı olabilirsin. Her ay yüzlerce kişi bu çıkartmalardaki QR kodları tarayıp Bitcoin'i öğreniyor.",

	// ─────────── bank-runs ───────────
	"bank-runs/bank_runs_card_fdic_value": "%1,42",
	"bank-runs/bank_runs_header":
		"Bitcoin'de banka hücumları olmaz, ama senin bankanda olabilir.",
	"bank-runs/bank_runs_bitcoin_heading": "Bitcoin'de banka hücumları olmaz",
	"bank-runs/bank_runs_bitcoin_p1":
		"Bitcoin tam rezerv sistemidir. Paranı bir bankaya yatırmazsın. Kendi bankan sensin. Paran bilgin dışında ödünç verilemez çünkü ona erişebilen tek kişi sensin.",
	"bank-runs/bank_runs_bitcoin_p2":
		"Bitcoin'i kendi cüzdanında — bir borsada ya da ETF içinde değil — tuttuğun sürece banka hücumu imkânsızdır.",
	"bank-runs/bank_runs_bitcoin_p3":
		"Bitcoin ile paran üzerinde gerçekten kontrol sahibisin.",
	"bank-runs/bank_runs_card_bank_reserve_detail":
		"26 Mart 2020'den itibaren ABD bankalarının %0 rezerv tutması zorunludur.",
	"bank-runs/bank_runs_card_bank_reserve_label": "Banka rezerv oranı",
	"bank-runs/bank_runs_card_bank_reserve_source": "Kaynak: Federal Reserve →",
	"bank-runs/bank_runs_card_btc_fdic_detail":
		"Tam rezerv sistemi — mevduat sigortasına gerek yok.",
	"bank-runs/bank_runs_card_btc_fdic_label": "Bitcoin teminatı",
	"bank-runs/bank_runs_card_btc_fdic_source": "Kaynak: Bitcoin whitepaper →",
	"bank-runs/bank_runs_card_btc_reserve_detail":
		"Her bitcoin zincir üzerinde vardır — hiçbir şey ödünç verilmez.",
	"bank-runs/bank_runs_card_btc_reserve_label": "Bitcoin rezerv oranı",
	"bank-runs/bank_runs_card_btc_reserve_source": "Kaynak: Bitcoin whitepaper →",
	"bank-runs/bank_runs_card_fdic_detail":
		"153,9 milyar dolarlık sigorta fonuna karşı 10,82 trilyon dolarlık sigortalı mevduat (Aralık 2025).",
	"bank-runs/bank_runs_card_fdic_label": "FDIC teminatı",
	"bank-runs/bank_runs_card_fdic_source": "Kaynak: FDIC Statistics at a Glance →",
	"bank-runs/bank_runs_card_svb_label": "Vaka analizi",
	"bank-runs/bank_runs_card_svb_source":
		"Kaynak: University of Washington School of Law →",
	"bank-runs/bank_runs_card_svb_title":
		"Silicon Valley Bank hücumunun nasıl olduğunu öğren",
	"bank-runs/bank_runs_card_wallet_label": "Sıradaki adım",
	"bank-runs/bank_runs_card_wallet_source": "Buradan başla →",
	"bank-runs/bank_runs_card_wallet_title":
		"Kendi Bitcoin cüzdanını nasıl alacağını öğren",
	"bank-runs/bank_runs_fdic_heading":
		"FDIC sigortası, mevduatların yaklaşık %1'ini karşılıyor",
	"bank-runs/bank_runs_fdic_p1":
		"FDIC sigortası, mevduat sahibi başına 250.000 dolara kadar mevduatları korur. Ancak sigorta fonu, koruması gereken toplam mevduatlara kıyasla çok küçüktür.",
	"bank-runs/bank_runs_fdic_p2_a":
		"Büyük ölçekli bir banka iflasında, hükümet açığı kapatmak için para basacaktır — bu da daha çok",
	"bank-runs/bank_runs_fdic_p2_link": "enflasyon",
	"bank-runs/bank_runs_page_description":
		"Bankalar, kısmi rezerv bankacılığı altında mevduatlarını ödünç verir. Aynı anda çok fazla kişi para çekerse bankalar batabilir. Bitcoin tam rezerv sistemidir — banka hücumları imkânsızdır.",
	"bank-runs/bank_runs_svb_heading": "Silicon Valley Bank: gerçek bir örnek",
	"bank-runs/bank_runs_svb_p1_a":
		"Mart 2023'te Silicon Valley Bank, müşteri mevduatlarını uzun vadeli",
	"bank-runs/bank_runs_svb_p1_b":
		"Bu tahviller değer kaybedince SVB para çekme taleplerini karşılayamadı. Banka iflas etti.",
	"bank-runs/bank_runs_svb_p1_link": "devlet tahvillerine yatırdıktan sonra battı.",
	"bank-runs/bank_runs_svb_p2":
		"Binlerce işletme çalışanlarına ödeme yapamadı. FDIC devreye girdi — ama bu daha büyük bir soruyu gündeme getirdi: paran gerçekten güvende mi?",
	"bank-runs/bank_runs_what_p1":
		"Bankalar mevduatını bir kasada tutmaz. Paranı ödünç verir ve yatırır — buna kısmi rezerv bankacılığı denir.",
	"bank-runs/bank_runs_what_p2":
		"Çok fazla kişi aynı anda para çekmeye çalışırsa, bankanın herkese ödeyecek nakdi olmaz. Bu bir banka hücumudur — ve bankaların tamamen çökmesine yol açabilir.",

	// ─────────── buy ───────────
	"buy/buy_bitcoin_guide": "Bitcoin nasıl alınır",
	"buy/buy_step_1_header": "Ülkeni seç",
	"buy/buy_step_2_header": "Ödeme yöntemini seç",
	"buy/buy_step_3_header": "Satın alma seçeneklerin",
	"buy/buy_step_4_header": "Bitcoin'ini güvenle sakla",
	"buy/buy_header_subtitle":
		"İlk Bitcoin'ini almak için basit, adım adım bir rehber.",
	"buy/buy_howto_name": "Bitcoin nasıl alınır",
	"buy/buy_meta_description":
		"Adım adım rehberimizle Bitcoin'i güvenle nasıl alacağını öğren. Sana en uygun Bitcoin alma seçeneklerini bulmak için ülkeni ve ödeme yöntemini seç.",
	"buy/buy_step_1_eyebrow": "1. Adım",
	"buy/buy_step_2_eyebrow": "2. Adım",
	"buy/buy_step_3_eyebrow": "3. Adım",
	"buy/buy_step_4_eyebrow": "4. Adım",
	"buy/buy_storage_cta_label": "Sıradaki adım",
	"buy/sources_bisq": "Bisq — Merkeziyetsiz, eşler arası Bitcoin borsası",
	"buy/sources_coinatmradar": "Coin ATM Radar — Dünya çapında Bitcoin ATM rehberi",
	"buy/sources_kraken": "Kraken — Köklü Bitcoin borsası",
	"buy/sources_relai": "Relai — İsviçre merkezli, Bitcoin'e özel öz saklama uygulaması",
	"buy/sources_river": "River — Bitcoin'e özel alım, madencilik ve saklama",
	"buy/sources_strike_lightning":
		"Strike — Lightning Network desteğiyle Bitcoin satın al",
	"buy/sources_swan":
		"Swan Bitcoin — Bitcoin'e özel dolar maliyet ortalaması",

	// ─────────── compound-inflation-calculator ───────────
	"compound-inflation-calculator/sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Tüm Şehirli Tüketiciler için Tüketici Fiyat Endeksi",
	"compound-inflation-calculator/sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 Para Arzı",
	"compound-inflation-calculator/cic_calculator_heading":
		"Enflasyon açığını hesapla",
	"compound-inflation-calculator/cic_cta_label": "Sıradaki adım",
	"compound-inflation-calculator/cic_hero_subtitle":
		"Enflasyona ayak uydurmak için maaşının ne kadar artması gerektiğini gör.",
	"compound-inflation-calculator/cic_next_explore_topics":
		"Daha fazla konuyu keşfet",
	"compound-inflation-calculator/cic_next_explore_topics_desc":
		"Bitcoin'in para, özgürlük, enerji ve daha fazlasıyla nasıl bağlantılı olduğunu gör.",
	"compound-inflation-calculator/cic_next_learn_inflation":
		"Enflasyonun nasıl işlediğini öğren",

	// ─────────── flyers ───────────
	"flyers/flyers_intro_header":
		"Bu Bitcoin broşürlerini nasıl yazdırıp asarsın",
	"flyers/flyers_hero_subtitle":
		"Ücretsiz, yazdırılabilir Bitcoin broşürleri. Daha çok insanın Bitcoin'i öğrenmesine yardım etmek için bunları kamuya açık yerlere as.",
	"flyers/flyers_hero_title": "Bitcoin broşürlerini yazdır ve as",
	"flyers/flyers_next_get_stickers": "Sözü yay",
	"flyers/flyers_next_get_stickers_desc":
		"Ücretsiz bir Bitcoin çıkartma paketi sipariş et",

	// ─────────── get-involved ───────────
	"get-involved/get_involved_and_help_spread_bitcoin":
		"Katıl ve Bitcoin'i yay",
	"get-involved/get_involved_business_content_1":
		"Bitcoin'in döngüsel ekonomisinin inşasına yardım etmek mi istiyorsun? En kolay yol, yerel işletmelerin Bitcoin ödemelerini kabul etmeye başlamasına yardımcı olmaktır.",
	"get-involved/get_involved_business_content_2":
		"Buna açık olabilecek bir işletme tanıyor musun? Sahibini",
	"get-involved/get_involved_business_content_3":
		"Bitcoin işletme sayfamıza yönlendir.",
	"get-involved/get_involved_description":
		"Ücretsiz kaynaklarımız Bitcoin'in benimsenmesini yaymayı kolaylaştırıyor. Çıkartmalar, broşürler, işletmeler için 'Bitcoin Burada Kabul Edilir' çıkartmaları ve herkesin katkıda bulunabileceği açık kaynaklı bir kod tabanı.",
	"get-involved/get_involved_header": "Katıl ve Bitcoin'i yay.",
	"get-involved/get_involved_intro_5":
		"Bunu sen değiştirebilirsin. Çevrendekilere Bitcoin'in getirdiği umudu yaymayı kolaylaştırmak için birkaç ücretsiz kaynak hazırladık.",
	"get-involved/get_involved_biz_stickers_note":
		"Halihazırda Bitcoin kabul mü ediyorsun? Müşterilere bunu ücretsiz 'Bitcoin Burada Kabul Edilir' çıkartmalarımızla bildir. ABD veya Kanada'daki herhangi bir adrese paketi ulaştırırız ya da dünyanın her yerinde kendin yazdırabilirsin.",
	"get-involved/get_involved_card_biz_stickers_label":
		"'Burada kabul edilir' çıkartmaları",
	"get-involved/get_involved_card_biz_stickers_source":
		"Kaynak: bitcoin.rocks →",
	"get-involved/get_involved_card_biz_stickers_title":
		"İşletmen için ücretsiz 'Bitcoin Burada Kabul Edilir' çıkartmaları",
	"get-involved/get_involved_card_business_label": "İşletmeler için Bitcoin",
	"get-involved/get_involved_card_business_source": "Kaynak: bitcoin.rocks →",
	"get-involved/get_involved_card_business_title":
		"Bir işletmenin Bitcoin ödemelerini kabul etmeye başlaması için ihtiyacı olan her şey",
	"get-involved/get_involved_card_flyers_label": "Yazdırılabilir broşürler",
	"get-involved/get_involved_card_flyers_source": "Kaynak: bitcoin.rocks →",
	"get-involved/get_involved_card_flyers_title":
		"Ücretsiz bir Bitcoin broşürü indir ve yazdır",
	"get-involved/get_involved_card_github_label": "Açık kaynak",
	"get-involved/get_involved_card_github_source": "Kaynak: GitHub →",
	"get-involved/get_involved_card_github_title":
		"GitHub'da bitcoin.rocks'a katkıda bulun",
	"get-involved/get_involved_card_stickers_label": "Ücretsiz çıkartmalar",
	"get-involved/get_involved_card_stickers_source": "Kaynak: bitcoin.rocks →",
	"get-involved/get_involved_card_stickers_title":
		"Kapına ücretsiz bir Bitcoin çıkartma paketi gönderelim",
	"get-involved/get_involved_flyers_content_1":
		"Broşürler, Bitcoin'i topluluğuna tanıtmanın en kolay yollarından biridir. Ücretsiz yazdırılabilir bir Bitcoin broşürü indir, istediğin kadar kopya yazdır ve ilan tahtalarına, kafelere, toplantılara ya da insanların toplandığı başka her yere as.",
	"get-involved/get_involved_flyers_content_2":
		"Her broşürde dikkat çekici bir başlık ve meraklı okuyucuları daha fazla bilgi için bitcoin.rocks'a yönlendiren bir QR kod bulunuyor.",
	"get-involved/get_involved_flyers_content_3":
		"Çıkartmaların aksine, broşürler dünyanın her yerinde talep üzerine yazdırılabilir — tek ihtiyacın bir yazıcı ve birkaç dakika.",
	"get-involved/get_involved_flyers_header": "Bir broşür yazdır ve as",
	"get-involved/get_involved_flyers_image_alt":
		"bitcoin.rocks'tan ücretsiz yazdırılabilir Bitcoin broşürünün önizlemesi",
	"get-involved/get_involved_github_content_1":
		"bitcoin.rocks, MIT Lisansı altında lisanslanmış ücretsiz, açık kaynaklı bir projedir. Misyonumuz, Bitcoin'in benimsenmesini eğitim yoluyla hızlandırmaktır — ve bunu tek başımıza yapamayız.",
	"get-involved/get_involved_github_content_2":
		"Geliştirici, tasarımcı, yazar ya da çevirmen ol; sana yardımcı olabileceğin bir yol var. Özellikle içeriğimizi daha çok dile çeviren katkıda bulunanları memnuniyetle karşılıyoruz; böylece dünyanın her yerinden daha çok kişi Bitcoin'i kendi ana dilinde öğrenebilir.",
	"get-involved/get_involved_github_content_3":
		"Depoyu fork'la, bir pull request aç, bir issue oluştur ya da sadece projeye yıldız vererek desteğini göster. Her katkı Bitcoin'in daha çok insana ulaşmasına yardım eder.",
	"get-involved/get_involved_github_header": "GitHub'da katkıda bulun",
	"get-involved/get_involved_sticker_image_alt":
		"bitcoin.rocks'tan ücretsiz Bitcoin metin çıkartma paketi",

	// ─────────── lightning ───────────
	"lightning/sources_lightning_paper":
		"Joseph Poon ve Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning/lightning_s1_c4": "Şuna göz at:",
	"lightning/lightning_grid_heading": "Popüler Lightning cüzdanları",
	"lightning/lightning_hardware_cta_label": "Donanım cüzdanları",
	"lightning/lightning_header_subtitle":
		"Lightning, Bitcoin'i saniyeler içinde, bir kuruşun çok altındaki ücretlerle göndermeni sağlar — harcamayı planladığın Bitcoin miktarına uygun ödünleşimleri olan cüzdanı seç.",
	"lightning/lightning_s1_c4_end": "daha fazla bilgi için.",
	"lightning/lightning_s1_c4_link": "Bitcoin Donanım Cüzdanı Rehberi",
	"lightning/sources_acinq_phoenix": "ACINQ — Phoenix Lightning cüzdanı",
	"lightning/sources_breez_lightning":
		"Breez — Öz saklamalı Lightning cüzdanı",
	"lightning/sources_lightning_labs":
		"Lightning Labs — Lightning Network belgeleri",
	"lightning/sources_wallet_of_satoshi":
		"Wallet of Satoshi — Saklayıcılı Lightning cüzdanı",

	// ─────────── wallets ───────────
	"wallets/sources_bitcoin_org_choose":
		"Bitcoin.org — Cüzdanını Seç",
	"wallets/sources_jameson_lopp":
		"Jameson Lopp — Metal Bitcoin Tohum Saklama İncelemeleri",
	"wallets/wallets_lightning_cta_label": "Lightning Network",
	"wallets/sources_blockstream_green":
		"Blockstream Green — Öz saklamalı Bitcoin cüzdanı",
	"wallets/sources_blockstream_jade":
		"Blockstream Jade — Bitcoin donanım cüzdanı",
	"wallets/sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 donanım cüzdanı",
	"wallets/sources_coldcard_q":
		"Coinkite — Coldcard Q donanım cüzdanı",
	"wallets/sources_passport":
		"Foundation Devices — Passport donanım cüzdanı",
	"wallets/sources_seedsigner":
		"SeedSigner — Açık kaynaklı, kendin yap Bitcoin imzalama cihazı",
	"wallets/wallets_grid_heading": "Popüler Bitcoin cüzdanları",
	"wallets/wallets_header_subtitle":
		"Bir cüzdan seçmek, anahtarlarını korumak ve Bitcoin'in üzerinde tam kontrolü ele almak için adım adım rehber.",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	const ns = new Set([
		"404",
		"about",
		"bank-runs",
		"buy",
		"compound-inflation-calculator",
		"flyers",
		"get-involved",
		"lightning",
		"wallets",
	]);
	let filled = 0;
	let skipped = 0;
	const missingKeys = [];

	for (const e of report.entries) {
		if (!ns.has(e.namespace)) continue;
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
		`translate-content (tr): filled ${filled}, already-done ${skipped}`,
	);
	if (missingKeys.length) {
		console.log(`\nUnmatched keys (${missingKeys.length}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
