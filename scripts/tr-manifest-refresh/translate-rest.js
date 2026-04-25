#!/usr/bin/env node
/**
 * Turkish manifest refresh — common, index, nostr/index, stickers,
 * sticker-files/index, sticker-language-success, sticker-success.
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
	// ─────────── common ───────────
	"common/common_language_switcher_add_language": "Dil ekle",
	"common/common_next_buy_bitcoin": "Bitcoin al",
	"common/common_next_buy_bitcoin_desc": "Bitcoin'i güvenle nasıl alacağını öğren",
	"common/common_next_calculate": "Enflasyonunu hesapla",
	"common/common_next_calculate_desc":
		"Enflasyonun maaşını zamanla nasıl etkilediğini gör",
	"common/common_next_get_wallet": "Cüzdan al",
	"common/common_next_get_wallet_desc":
		"İlk Bitcoin cüzdanını al — ücretsiz",
	"common/common_next_keep_learning": "Öğrenmeye devam et",
	"common/common_next_keep_learning_desc":
		"Bitcoin'in dünyayı nasıl iyileştirdiğini gör",
	"common/common_source_bls_cpi":
		"ABD Çalışma İstatistikleri Bürosu — Tüketici Fiyat Endeksi (TÜFE)",
	"common/common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Para Arzı (Kategori Endeksi)",
	"common/common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common/common_sources_treasury_auction":
		'James Lavish — "Can a Treasury Auction Fail?"',
	"common/common_stickers_printer_name": "StickerMule.com",
	"common/common_whats_next": "Sıradaki ne?",
	"common/common_sticker_files_mission_5": "bir paket iste",
	"common/common_site_tagline": "Herkes için Bitcoin eğitimi.",
	"common/common_source_btc_map":
		"BTC Map — Bitcoin kabul eden işyerlerinin dünya çapında rehberi",
	"common/common_source_btcpayserver":
		"BTCPay Server — Ücretsiz, açık kaynaklı, kendin barındırılabilen Bitcoin ödeme işlemcisi",
	"common/common_source_oshi":
		"Oshi — İşyerleri için Bitcoin ödül platformu",
	"common/common_source_strike_business":
		"Strike — İşletmeler için Bitcoin ve Lightning ödemeleri",
	"common/common_sources_group_bitcoin": "Bitcoin verileri",
	"common/common_sources_group_cpi": "Enflasyon / Tüketici Fiyat Endeksi",
	"common/common_sources_group_debt": "Devlet borcu",
	"common/common_sources_group_money": "Para arzı verileri",
	"common/common_sources_group_stories": "Gerçek hayattan örnekler",
	"common/common_sticker_files_mission_6":
		"İngilizce çıkartmaları ücretsiz olarak.",
	"common/common_sticker_files_next_flyers_label": "Broşürler",
	"common/common_sticker_files_next_flyers_title": "Bir Bitcoin broşürü yazdır",
	"common/common_sticker_files_next_languages_label": "Çıkartma dosyaları",
	"common/common_sticker_files_next_languages_title":
		"Çıkartma dosyalarını başka dillerde gör",
	"common/common_sticker_files_print_these": "BUNLARI 1 TIKLA YAZDIR",
	"common/common_sticker_name_bdhi_black":
		'"Bitcoin\'in Enflasyonu Yok" Çıkartması (Siyah)',
	"common/common_sticker_name_bdhi_orange":
		'"Bitcoin\'in Enflasyonu Yok" Çıkartması (Turuncu)',
	"common/common_sticker_name_caution":
		'"Dikkat! Eriyen Buz Küpü" Bitcoin Çıkartması',
	"common/common_sticker_name_cure_inflation":
		'"Enflasyonu Tedavi Et" Bitcoin Çıkartması',
	"common/common_sticker_name_danger":
		'"Tehlike! Önümüzde Enflasyon" Bitcoin Çıkartması',
	"common/common_sticker_name_fix":
		'"Parayı Düzelt, Dünyayı Düzelt" Bitcoin Çıkartması',
	"common/common_sticker_name_got_inflation":
		'"Enflasyonun Mu Var?" Bitcoin Çıkartması',
	"common/common_sticker_name_study": '"Bitcoin\'i İncele" Çıkartması',
	"common/common_sticker_name_warning":
		'"Uyarı! Enflasyon Birikiminizi Çalıyor" Bitcoin Çıkartması',
	"common/common_sticker_name_what_if":
		'"Ya paranın enflasyonu olmasaydı?" Bitcoin Çıkartması',
	"common/common_sticker_tips_heading": "Çıkartma ipuçları",
	"common/common_sticker_tips_intro":
		"Çıkartmalarını yazdırdıktan sonra, görülecekleri bir yere yapıştır! İyi çıkartma noktaları şunlardır:",
	"common/common_sticker_tips_list_1":
		"insanların göreceği halka açık yerler",
	"common/common_sticker_tips_list_2":
		"hızlıca kaldırılması olası olmayan yerler (çıkartmalar kalıcı hasar vermez)",
	"common/common_sticker_tips_list_3":
		"kolayca yapışacakları yüzeyler (metal, plastik, cam)",
	"common/common_sticker_tips_list_4":
		"özel mülk, tabela, ATM ya da yakıt pompası ÜZERİNE değil",
	"common/common_stickers_printer_prefix": "Biz",
	"common/common_stickers_printer_suffix":
		"kullanıyoruz ama dilediğin çıkartma firmasını kullanabilirsin.",

	// ─────────── index ───────────
	"index/home_btn_saving": "BİRİKİM",
	"index/home_card_label_art_1": "Karşılaştıralım",
	"index/home_card_label_art_2": "Sözü yay",
	"index/home_card_label_art_3": "Sokak sanatı",
	"index/home_card_label_bank_runs": "Tam rezerv sistemi",
	"index/home_card_label_bonds": "Karşılaştıralım",
	"index/home_card_label_business_1": "Fark ne?",
	"index/home_card_label_business_2": "Bitcoin ödemelerini kabul et",
	"index/home_card_label_cash": "Karşılaştıralım",
	"index/home_card_label_cbdc": "Açık mı kapalı mı?",
	"index/home_card_label_coding_1": "Etkileşimli rehber",
	"index/home_card_label_coding_2": "Donanım yap",
	"index/home_card_label_coding_3": "Kodlama bulmacaları",
	"index/home_card_label_crowdfunding_1": "EndSARS protestoları",
	"index/home_card_label_crowdfunding_2": "Durdurulamaz para",
	"index/home_card_label_crowdfunding_3": "Projeni finanse et",
	"index/home_card_label_crypto": "Fark ne?",
	"index/home_card_label_energy_1": "Şebeke istikrarı",
	"index/home_card_label_energy_4": "Talep yanıtı",
	"index/home_card_label_energy_5": "Kırsal elektrik",
	"index/home_card_label_energy_6": "Yenilenebilir teşvikleri",
	"index/home_card_label_environment_1": "Metan azaltma",
	"index/home_card_label_environment_2": "Bir milli parkı kurtardı",
	"index/home_card_label_environment_3": "En yeşil endüstri",
	"index/home_card_label_environment_4": "Salınan gazı azaltır",
	"index/home_card_label_equality_1": "Umut ve fırsat",
	"index/home_card_label_equality_2": "Oyunun kurallarını değiştirir",
	"index/home_card_label_food_1": "Gıda fiyatları",
	"index/home_card_label_food_2": "Çiftlikler ve toprak",
	"index/home_card_label_freedom_1": "Otoriter rejimler",
	"index/home_card_label_freedom_2": "Eşsiz bir araç",
	"index/home_card_label_get_started_1": "Yeni başlayan temelleri",
	"index/home_card_label_get_started_2": "İlk cüzdanın",
	"index/home_card_label_get_started_3": "Bitcoin al",
	"index/home_card_label_gold": "Hangisi daha iyi?",
	"index/home_card_label_housing_1": "Uygun fiyatlı konut",
	"index/home_card_label_human_rights_1": "İnsan haklarının uygulanması",
	"index/home_card_label_human_rights_2": "Tabandan benimseme",
	"index/home_card_label_human_rights_3": "Küresel etki",
	"index/home_card_label_inflation": "Bitcoin daha iyi paradır",
	"index/home_card_label_networks_1": "Canlı ağ görünümü",
	"index/home_card_label_networks_2": "Karşılaştıralım",
	"index/home_card_label_payments_1": "Fark ne?",
	"index/home_card_label_payments_2": "Hızlı ve ucuz ödemeler",
	"index/home_card_label_payments_3": "Havaleler",
	"index/home_card_label_payments_4": "Ödeme al",
	"index/home_card_label_politics_1": "Politik paradoks",
	"index/home_card_label_politics_2": "Harekete geç",
	"index/home_card_label_property_rights_1": "Karşılaştıralım",
	"index/home_card_label_property_rights_2": "Gerçek mülkiyet",
	"index/home_card_label_salary": "Maaşını koru",
	"index/home_card_label_self_custody_1": "Bitcoin cüzdan rehberi",
	"index/home_card_label_self_custody_2": "En önemli adım",
	"index/home_card_label_self_custody_3": "Egemen para",
	"index/home_card_label_war_1": "Sonsuz savaşa son",
	"index/home_card_label_war_2": "Gazilere yardım",
	"index/home_card_label_war_3": "Savaş zamanı kaçışı",
	"index/home_h1":
		"Bitcoin, daha iyi bir dünya inşa eden daha iyi paradır.",
	"index/home_nav_about": "Hakkında",
	"index/home_nav_get_involved": "Katıl",
	"index/home_nav_learn": "Öğren",
	"index/home_source_prefix": "Kaynak:",

	// ─────────── nostr/index ───────────
	"nostr/index/nostr_amethyst_name": "Amethyst",
	"nostr/index/nostr_damus_name": "Damus",
	"nostr/index/nostr_iris_name": "Iris",
	"nostr/index/nostr_platform_android": "Android",
	"nostr/index/nostr_platform_ios": "iPhone",
	"nostr/index/nostr_platform_ios_android_web": "iPhone, Android ve web",
	"nostr/index/nostr_platform_web": "Web tarayıcı",
	"nostr/index/nostr_primal_name": "Primal",
	"nostr/index/nostr_page_description":
		"Nostr, çevrimiçi iletişim için yeni, merkeziyetsiz bir protokoldür — onu hiçbir tek şirket kontrol etmez, Bitcoin zap'leri yerleşik olarak gelir ve takipçilerini kaybetmeden istemciler arasında geçiş yapabilirsin.",
	"nostr/index/nostr_amethyst_f1": "Çok özellik ve özelleştirme",
	"nostr/index/nostr_amethyst_f2": "Ayrı bir Bitcoin cüzdanı gerektirir",
	"nostr/index/nostr_amethyst_f3": "%100 ücretsiz",
	"nostr/index/nostr_damus_f1": "Tanıdık, Twitter'a benzer arayüz",
	"nostr/index/nostr_damus_f2": "Ayrı bir Bitcoin cüzdanı gerektirir",
	"nostr/index/nostr_damus_f3": "%100 ücretsiz",
	"nostr/index/nostr_download_heading": "Ücretsiz bir Nostr istemcisi indir",
	"nostr/index/nostr_download_intro":
		"Nostr istemcileri, Nostr ağında okuyup paylaşmanı sağlayan ücretsiz uygulamalardır. Hepsi birbiriyle uyumludur — istediğin zaman istemci değiştirip takipçilerini ve içeriğini koruyabilirsin.",
	"nostr/index/nostr_hero_subtitle":
		"Nostr, çevrimiçi iletişim için yeni, merkeziyetsiz bir protokoldür — onu hiçbir tek şirket kontrol etmez, Bitcoin zap'leri yerleşiktir ve takipçilerini kaybetmeden uygulamalar arasında geçiş yapabilirsin.",
	"nostr/index/nostr_hero_title": "Nostr nedir?",
	"nostr/index/nostr_intro_c1":
		"Nostr e-postaya benzer: protokolün sahibi yoktur, herkes üzerine bir uygulama inşa edebilir ve sen de en sevdiğin uygulamayı seçebilirsin. Twitter ya da Facebook'un aksine, seni sansürleyebilen, platformdan atabilen ya da görünürlüğünü düşürebilen merkezi bir şirket yoktur.",
	"nostr/index/nostr_intro_c2":
		"Aşağıda Nostr'un neden önemli olduğunun kısa hâli ve onun altında bugün başlamak için ihtiyacın olan tüm ücretsiz Nostr istemcileri var.",
	"nostr/index/nostr_iris_f1": "Çok basit — kurulum gerekmez",
	"nostr/index/nostr_iris_f2": "Test hesabıyla Nostr'u denemenin kolay yolu",
	"nostr/index/nostr_iris_f3": "%100 ücretsiz",
	"nostr/index/nostr_learn_more_label": "DAHA DERİNE İN",
	"nostr/index/nostr_learn_more_title": "nostr.how'da Nostr hakkında daha fazlasını öğren",
	"nostr/index/nostr_primal_f1": "Önerilen ilk istemci",
	"nostr/index/nostr_primal_f2": "Yerleşik Bitcoin zap cüzdanı",
	"nostr/index/nostr_primal_f3": "%100 ücretsiz",
	"nostr/index/nostr_s1": "Platform değil, protokol",
	"nostr/index/nostr_s1_c1":
		"Nostr, sansür, platformdan atılma ya da görünürlük düşürme korkusu olmadan çevrimiçi iletişim kurmanı sağlayan yeni bir protokoldür.",
	"nostr/index/nostr_s1_c2":
		"Twitter ve Facebook gibi platformlar tek bir şirket tarafından kontrol edilir; ama Nostr protokolünü hiç kimse kontrol etmez.",
	"nostr/index/nostr_s2": "Geçiş özgürlüğü",
	"nostr/index/nostr_s2_c1":
		"Nostr e-postaya benzer. E-posta protokolünü kimse kontrol etmez ve herkes üzerinde bir istemci (Gmail, Hotmail vb.) inşa edebilir.",
	"nostr/index/nostr_s2_c2":
		"Nostr protokolünü de kimse kontrol etmez ve herkes üzerinde bir istemci (Damus, Amethyst vb.) inşa edebilir.",
	"nostr/index/nostr_s2_c3":
		"Belirli bir istemcinin nasıl çalıştığını sevmiyorsan, Nostr hesabını takipçilerini ya da içeriğini kaybetmeden başka bir istemciye sorunsuzca taşıyabilirsin.",
	"nostr/index/nostr_s3": "Bitcoin yerleşik geliyor",
	"nostr/index/nostr_s3_c1":
		"Bitcoin, Nostr protokolüne yerleşik olarak gelir. Sevdiğin bir içerik gördüğünde, teşekkür olarak birine kolayca Bitcoin zap'leyebilirsin!",
	"nostr/index/nostr_s3_c2":
		"Twitter ve Facebook gibi merkezi platformlarda merkezi şirket senin içeriğinden para kazanır. Ama Nostr gibi açık protokollerde içeriğinden para kazanan sensin.",
	"nostr/index/sources_damus": "Damus — iPhone Nostr istemcisi",
	"nostr/index/sources_iris": "Iris — Tarayıcı tabanlı Nostr istemcisi",
	"nostr/index/sources_nostr_how": "nostr.how — Nostr nedir?",
	"nostr/index/sources_nostr_protocol":
		"Nostr Protocol — Açık kaynak şartname",
	"nostr/index/sources_primal":
		"Primal — Yerleşik Bitcoin zap cüzdanı olan Nostr istemcisi",
	"nostr/index/what_is_nostr": "Nostr nedir?",

	// ─────────── stickers ───────────
	"stickers/stickers_intro_c2": "Bitcoin",
	"stickers/stickers_flyers_link_before":
		"Hazır başlamışken, kendi",
	"stickers/stickers_instructions_1":
		"Posta adresini gir; sana ücretsiz bir Bitcoin Çıkartma Paketi göndereceğiz. Çıkartmaların düz beyaz bir zarfla gönderilecek.",
	"stickers/stickers_btn_choose_pack": "Bu paketi seç",
	"stickers/stickers_bulk_c1": "Birkaç çıkartmadan fazlasını mı istiyorsun?",
	"stickers/stickers_bulk_c2":
		"Kullandığımız basımevinden toplu sipariş ver",
	"stickers/stickers_bulk_c3":
		"— ne kadar çok alırsan, çıkartma başına o kadar ucuza gelir.",
	"stickers/stickers_bulk_cta": "Toplu çıkartma satın al",
	"stickers/stickers_bulk_header": "Toplu çıkartma siparişi ver",
	"stickers/stickers_hero_subtitle":
		"Ücretsiz bir Bitcoin çıkartma paketi sipariş et ve daha çok insanın Bitcoin'i öğrenmesine yardımcı olmak için bunları kamuya açık yerlere yapıştır.",
	"stickers/stickers_hero_title": "Ücretsiz Bitcoin çıkartmaları",
	"stickers/stickers_intro_c1":
		"Misyonumuz, Bitcoin çıkartmalarını kamuya açık yerlere yapıştırarak daha çok insana Bitcoin'i tanıtmana yardım etmektir. Tüm çıkartmalarımızda, şu konuları anlatan eğitim sayfalarına yönlendiren QR kodlar var:",
	"stickers/stickers_intro_c3": "enflasyon",
	"stickers/stickers_intro_c4":
		"Aşağıdan bir çıkartma paketi seç ve onları nasıl almak istediğini belirt — ABD veya Kanada'daki herkese ücretsiz paket göndeririz, ya da dünyanın her yerinde kendin yazdırabilirsin.",
	"stickers/stickers_mail_header":
		"Ücretsiz çıkartmalarını sana göndereceğiz",
	"stickers/stickers_next_print_flyers": "Yaymaya devam et",
	"stickers/stickers_next_print_flyers_desc":
		"Halka açık yerlere asmak için ücretsiz Bitcoin broşürleri yazdır",
	"stickers/stickers_option_bulk": "📦 Küresel — Toplu sipariş ver",
	"stickers/stickers_option_canada": "🇨🇦 Kanada — Posta ile ücretsiz",
	"stickers/stickers_option_print": "🌍 Küresel — Kendim yazdırırım",
	"stickers/stickers_option_usa": "🇺🇸 ABD — Posta ile ücretsiz",
	"stickers/stickers_print_c1":
		"Nerede yaşarsan yaşa, kendi çıkartmalarını yazdırarak katılabilirsin. Çıkartma dosyalarını ve yazdırma talimatlarını indirmek için aşağıdaki dilini tıkla.",
	"stickers/stickers_print_c2":
		"Her çıkartma her dilde mevcut değildir.",
	"stickers/stickers_print_header":
		"Kendi çıkartma dosyalarını yazdır",
	"stickers/stickers_request_c1":
		"Çıkartma dosyalarını kendi yerel dilinde istemek için aşağıdaki formu doldur. Hazır olduğunda sana haber veririz.",
	"stickers/stickers_request_header": "Dilin listede yok mu?",
	"stickers/stickers_share_c2": "Bizi Nostr'da takip etmek için herhangi bir Nostr istemcisinde",
	"stickers/stickers_share_c3": "araması yap.",
	"stickers/stickers_signs_pack_description":
		"Bitcoin mesajlarıyla uyarı, tehlike ve dikkat tarzı tabelalar — dikkat çekmek ve insanları durdurup okumaya yöneltmek için tasarlandı.",
	"stickers/stickers_step_1_description":
		"Her pakette, insanlara Bitcoin'i öğreten QR kodlu farklı bir Bitcoin çıkartma seti vardır.",
	"stickers/stickers_step_1_eyebrow": "1. ADIM",
	"stickers/stickers_step_1_header": "Çıkartma paketini seç",
	"stickers/stickers_step_2_description":
		"ABD ve Kanada'daki adreslere ücretsiz paket göndeririz. Dünyanın başka her yerinde kendin yazdırabilir ya da toplu sipariş verebilirsin.",
	"stickers/stickers_step_2_eyebrow": "2. ADIM",
	"stickers/stickers_step_2_header":
		"Çıkartmalarını nasıl almak istersin?",
	"stickers/stickers_text_pack_description":
		"Halka açık alanlarda merak uyandırmak için tasarlanmış Bitcoin sloganları ve tek satırlık ifadelerden oluşan bir karışım.",

	// ─────────── sticker-files/index ───────────
	"sticker-files/index/sticker_files_header":
		"Bu Bitcoin çıkartma dosyalarıyla kendi Bitcoin çıkartmalarını yazdır.",

	// ─────────── sticker-language-success ───────────
	"sticker-language-success/sticker_language_success_hero_title":
		"İstek alındı 🎉",

	// ─────────── sticker-success ───────────
	"sticker-success/sticker_success_btn_order_bulk": "Toplu sipariş ver",
	"sticker-success/sticker_success_btn_share_on_nostr": "Nostr'da paylaş",
	"sticker-success/sticker_success_btn_what_is_nostr": "Nostr nedir?",
	"sticker-success/sticker_success_bulk_header":
		"Daha fazla çıkartma mı istiyorsun?",
	"sticker-success/sticker_success_hero_title":
		"Çıkartmaların yola çıktı 🎉",
	"sticker-success/sticker_success_share_header":
		"Çıkartma noktalarını paylaş",
	"sticker-success/sticker_success_tips_header": "İyi çıkartma noktaları",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missingKeys = [];

	for (const e of report.entries) {
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
		`translate-rest (tr): filled ${filled}, already-done ${skipped}`,
	);
	if (missingKeys.length) {
		console.log(`\nUnmatched keys (${missingKeys.length}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
