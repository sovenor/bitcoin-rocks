#!/usr/bin/env node
/**
 * Azerbaijani manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator,
 *   flyers, get-involved, index, lightning, nostr/index, sticker-files/*,
 *   sticker-language-success, sticker-success, stickers, wallets.
 *
 * Idempotent: safe to re-run.
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
	"az.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_label": "Bitcoin qiyməti",
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_bpr_title":
		"Bitcoin-in cari və ya tarixi qiymətini dollarda tapın",
	"business/accounting::accounting_card_pacioli_label": "Bitcoin mühasibləri",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_label": "Excel-ə idxal",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_spreadsheet_title":
		"Bitcoin qiymətlərini avtomatik olaraq Excel-ə çəkin",
	"business/accounting::accounting_card_wallets_label": "Hibrid pulqabları",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_card_wallets_title":
		"Tövsiyə olunan biznes pulqablarına baxın",
	"business/accounting::accounting_description":
		"Sadə dildə biznes mühasibatınızda Bitcoin qəbul etmək üçün bələdçi — hibrid pulqabları, xərc bazası, kapital qazancı və mühasiblə nə vaxt əlaqə saxlamaq.",
	"business/accounting::accounting_disclaimer":
		"Bu bələdçi yalnız məlumatlandırma məqsədi ilədir və vergi məsləhəti deyil. Vəziyyətinizə uyğun vergi məsləhəti üçün ixtisaslaşmış mühasiblə əlaqə saxlayın.",
	"business/accounting::accounting_disclaimer_label": "Qeyd edin",
	"business/accounting::accounting_example_feb_1": "1 Fevral",
	"business/accounting::accounting_example_gain_badge": "Kapital qazancı",
	"business/accounting::accounting_example_gain_explain":
		"10 dollarlıq kapital qazancını qeydə alırsınız.",
	"business/accounting::accounting_example_gain_result": "+10 dollar",
	"business/accounting::accounting_example_jan_1": "1 Yanvar",
	"business/accounting::accounting_example_loss_badge": "Kapital zərəri",
	"business/accounting::accounting_example_loss_explain":
		"10 dollarlıq kapital zərərini qeydə alırsınız.",
	"business/accounting::accounting_example_loss_result": "−10 dollar",
	"business/accounting::accounting_example_received_label": "Alındı",
	"business/accounting::accounting_example_sold_label": "Satıldı və ya xərcləndi",
	"business/accounting::accounting_hero_subtitle":
		"Biznesinizdə Bitcoin qəbul etmək mühasibatınızı mürəkkəbləşdirməyə məcbur deyil. Qısa versiyası — üstəlik bunu çətinliksiz etmək üçün alətlər və mütəxəssislər.",
	"business/accounting::accounting_intro_c1":
		"Əgər artıq nağd və ya kart qəbul edirsinizsə, Bitcoin-i biznes dəftərlərinizə əlavə etmək göründüyündən daha sadədir. İki yolunuz var: hər Bitcoin ödənişini aldıqda avtomatik olaraq dollara çevirmək (yeni mühasibata ehtiyac yoxdur) və ya bir qismini Bitcoin olaraq saxlamaq (izləmək üçün bir neçə əlavə rəqəm).",
	"business/accounting::accounting_intro_c2":
		"Bu bələdçi sizi hər ikisindən keçirir — belə ki, biznesiniz üçün uyğun olanı seçə və Bitcoin qəbul etməyə əminliklə başlaya bilərsiniz.",
	"business/accounting::accounting_s1": "Asan yol: avtomatik dollara çevirmə",
	"business/accounting::accounting_s1_c1":
		"Bitcoin qəbul etməyin ən sadə yolu aldığınız Bitcoin-in 100%-ni ödəniş gəldiyi andan avtomatik olaraq dollara (və ya yerli valyutanıza) satan hibrid pulqabı istifadə etməkdir.",
	"business/accounting::accounting_s1_c2":
		"Bu quraşdırma ilə, dəftərləriniz bu gün olduğu kimi görünür — hər dəfə son dollar rəqəmi. Xərc bazası yox, kapital qazancı yox, yeni elektron cədvəllər yox.",
	"business/accounting::accounting_s2":
		"Bəzi Bitcoin saxlayırsınızsa: xərc bazasını izləyin",
	"business/accounting::accounting_s2_c1":
		"Bəzi bizneslər aldıqları Bitcoin-in bir hissəsini avtomatik olaraq tam çevirmək əvəzinə saxlamağı seçir. Bu sizə aiddirsə, əsas əlavə addım xərc bazasını izləməkdir — hər Bitcoin ödənişinin alındığı gün dollar dəyəri.",
	"business/accounting::accounting_s2_c2":
		"Biznesinizi tamamilə Bitcoin ilə düşünsəniz belə, əksər vergi orqanları hələ də dollarda hesabat vermək istəyir. Yaxşı xəbər: bu hər tranzaksiya üçün yalnız iki rəqəmdir — alınan Bitcoin miqdarı və o günkü dollar dəyəri.",
	"business/accounting::accounting_s2_c3":
		"Hər gün qiymətləri yoxlamaq məcburiyyətində qalmamaq üçün axtarışı avtomatlaşdırmaq üçün aşağıdakı alətlərdən istifadə edin.",
	"business/accounting::accounting_s3":
		"Saxladığınız Bitcoin-i xərcləmək və ya satmaq",
	"business/accounting::accounting_s3_c1":
		"Hər ödənişi avtomatik olaraq dollara çevirirsinizsə, bu bölməni keçin — sizə aid deyil.",
	"business/accounting::accounting_s3_c2":
		"Bəzi Bitcoin saxladıqda və sonradan onu xərcləmək və ya satmaq qərarına gəlsəniz, satış qiymətini eyni xərc bazası cədvəlinə əlavə edin. Bitcoin-in alındığı zamanki dəyəri ilə xərcləndiyi və ya satıldığı zamanki dəyəri arasındakı fərq kapital qazancı və ya zərəridir.",
	"business/accounting::accounting_s3_c3": "İki sürətli nümunə:",
	"business/accounting::accounting_s3_c6":
		"Bu qədər. Əsas riyaziyyat dəyəri artan və ya azalan istənilən digər aktivin mühasibatı ilə oxşardır.",
	"business/accounting::accounting_s4":
		"Bitcoin dili bilən mütəxəssisə ehtiyacınız var?",
	"business/accounting::accounting_s4_c1":
		"Bu işi təhvil verməyə üstünlük versəniz — və ya Bitcoin mühasibatınız hibrid pulqabının həll edə biləcəyindən daha mürəkkəbdirsə — biz Satoshi Pacioli Accounting Services-i çox tövsiyə edirik, bu bizneslər üçün Bitcoin mühasibatı üzrə ixtisaslaşmış bir firmadır.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Biznesiniz üçün Bitcoin mühasibatı",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — Bitcoin-in cari və tarixi qiyməti dollarda",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — bizneslər üçün Bitcoin mühasibatı",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — kriptovalyuta qiymətlərini Excel-ə idxal",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Tacirlərin Bitcoin qəbul etməyə başlamazdan əvvəl ən çox verdiyi suallara qısa cavablar — haqlar, hesablaşma, pulqabları, geri ödəmələr, xərc və daha çoxu.",
	"business/faq::faq_intro_c1":
		"Cavabı genişləndirmək üçün aşağıdakı istənilən suala klikləyin. Bitcoin qəbul etməyə başlamağa hazır olduqda səhifənin aşağısındakı biznes resursları sizi hər addımda yönləndirəcək.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "Mühasibat",
	"business/index::biz_label_faq": "Tez-tez verilən suallar",
	"business/index::biz_label_maps": "Tacir xəritələri",
	"business/index::biz_label_rewards": "Mükafatlar",
	"business/index::biz_label_stickers": "Stikerlər",
	"business/index::biz_label_wallets": "Pulqabları",
	"business/index::biz_meta_description":
		"Aşağı haqlar, dərhal hesablaşma, geri ödəmələr yoxdur və daha çox müştəri üçün biznesinizdə Bitcoin qəbul edin.",
	"business/index::business_hero_subtitle":
		"Aşağı haqlarla ödənişləri qəbul edin, pulunuzu dərhal əldə edin və milyonlarla yeni müştəriyə çatın — müqavilələr və gizli xərclər olmadan.",
	"business/index::business_intro_c1":
		"Bitcoin biznesinizə pulunuzu daha sürətli, daha ucuz və daha məxfi şəkildə əldə etmək yolu verir. Vasitəçilər yoxdur. Geri ödəmələr yoxdur. Müqavilələr yoxdur. Yalnız saniyələr ərzində müştərilərinizdən sizə birbaşa hesablaşan pul.",
	"business/index::business_intro_c2":
		"Aşağıda nə üçün Bitcoin-in biznes üçün yaxşı olduğunun qısa versiyası — və onun altında bu gün qəbul etməyə başlamaq üçün lazım olan bütün resurslar.",
	"business/index::business_resources_heading":
		"Bitcoin qəbul etmək üçün lazım olan hər şey",
	"business/index::business_resources_intro":
		"Bu resurslar üzərində öz tempinizlə işləyin. Hər biri qısa, praktik bələdçidir.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "Biznesinizi bizə bildirin",
	"business/maps::biz_maps_form_intro":
		"Sizi siyahıya salmaq üçün yalnız bir neçə təfərrüat lazımdır. Ünvan məlumatları yalnız biznesinizi xəritələrə təqdim etmək üçün kifayət qədər saxlanılır.",
	"business/maps::biz_maps_hero_subtitle":
		"BTC Map — Bitcoin qəbul edən tacirlərin qlobal açıq kataloqu — üzərində biznesinizi pulsuz siyahıya salın, belə ki yaxınlıqdakı Bitcoinerlər sizi tapa və biznesinizdə Bitcoin xərcləyə bilər.",
	"business/maps::biz_maps_hero_title":
		"Biznesinizi Bitcoin tacir xəritələrinə əlavə edin",
	"business/maps::biz_maps_intro_c1":
		"Bitcoinerlər pullarını xərcləmək üçün yerlər aktiv şəkildə axtarırlar. Biznesinizi xəritəyə yerləşdirmək onu yaxınlıqda yemək, alış-veriş və ya qalmaq üçün yer axtaran hər Bitcoin istifadəçisinin qarşısına qoyur — sizə heç bir xərc olmadan.",
	"business/maps::biz_maps_intro_c2":
		"Aşağıdakı qısa formu doldurun və biz biznesinizi BTC Map və digər Bitcoin tacir xəritələrinə sizin adınıza təqdim edəcəyik.",
	"business/maps::biz_maps_meta_description":
		"Yaxınlıqdakı Bitcoinerlərin sizi tapa bilməsi üçün biznesinizi BTC Map və digər Bitcoin tacir xəritələrinə pulsuz siyahıya salın.",
	"business/maps::biz_maps_placeholder_address": "Küçə ünvanı",
	"business/maps::biz_maps_placeholder_category":
		"Kateqoriya (məs: restoran, kafe, otel)",
	"business/maps::biz_maps_placeholder_city": "Şəhər",
	"business/maps::biz_maps_placeholder_country": "Ölkə",
	"business/maps::biz_maps_placeholder_name": "Biznes adı",
	"business/maps::biz_maps_placeholder_region": "Əyalət / Vilayət / Region",
	"business/maps::biz_maps_placeholder_website": "Veb sayt (istəyə bağlı)",
	"business/maps::biz_maps_view_map_cta": "BTC Map-ə baxın",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "BTC Map-ə baxın",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Biznesinizi təqdim etdiyiniz üçün təşəkkür edirik. Sizi tezliklə Bitcoin tacir xəritələrinə əlavə edəcəyik.",
	"business/maps-success::biz_maps_success_hero_title":
		"Təqdimat qəbul edildi 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Biznesiniz 1-2 həftə ərzində BTC Map və digər Bitcoin tacir kataloqlarında siyahıya alınacaq. Xəritələri dəqiq saxlamaq üçün hər təqdimat əl ilə yoxlanılır.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Siyahınız aktiv olduqdan sonra yaxınlıqdakı Bitcoinerlər biznesinizi tapa və Bitcoin xərcləmək üçün gələ bilərlər.",
	"business/maps-success::biz_maps_success_timeline_header": "Sonra nə olur",
	"business/maps-success::biz_maps_success_view_c1":
		"Gözləyərkən BTC Map-ə nəzər salın və dünya üzrə Bitcoin qəbul edən bizneslərin artan şəbəkəsini görün.",
	"business/maps-success::biz_maps_success_view_header": "Harada görünəcəyinizi görün",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Müştərilərinizə Bitcoin qəbul etdiyinizi bildirmək üçün öz \"Bitcoin qəbul olunur\" stikerlərinizi ingilis dilində çap edin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"İngilis dilində \"Bitcoin qəbul olunur\" stiker fayllarını endirin",
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Öz \"Bitcoin qəbul olunur\" stikerlərinizi çap etmək üçün ingilis dilində stiker fayllarını endirin.",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Dilinizdə \"Bitcoin qəbul olunur\" stiker faylları istədiyiniz üçün təşəkkür edirik.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Sorğu qəbul edildi 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Stiker fayllarınızı 3-4 həftə ərzində yaradıb dərc edəcəyik. Hazır olduqdan sonra stiker faylları səhifəsindən pulsuz endirə və çap edə biləcəksiniz.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Stiker faylları partiyalarla buraxılır, buna görə dilinizin aktivləşdirilməsi bir neçə həftə çəkə bilər. Səbriniz üçün təşəkkür edirik!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Sonra nə olur",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Toplu olaraq sifariş edin",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Başqa bir pulsuz paket istəyin",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Pulsuz \"Bitcoin qəbul olunur\" stikerlərinizi 2-4 həftə ərzində adi ağ zərfin içində 3 stikerlə alacaqsınız.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Stikerləriniz yoldadır 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Əgər 3 stiker biznesinizə kifayət etmirsə, başqa bir pulsuz paket istəməkdən çəkinməyin — və ya istifadə etdiyimiz eyni çapxanadan toplu olaraq sifariş verin.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Daha çox stikerə ehtiyacınız var?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Müştərilər içəri girməzdən əvvəl görə bilmələri üçün ön qapınıza və ya pəncərənizə",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Kassa yaxınlığına, satış nöqtəsinə və ya ödəniş sahəsinə",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Menyulara, qiymət siyahılarına və ya bəxşiş qabına",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Sahibi olmadığınız və ya yerləşdirmək üçün icazəniz olmayan yerlərdə yapışdırmayın",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Stikerlərinizi qoymaq üçün yaxşı yerlər",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Müştərilərinizə Bitcoin qəbul etdiyinizi bildirin. Biznesinizdə yerləşdirmək üçün pulsuz \"Bitcoin qəbul olunur\" stiker paketi sifariş edin.",
	"business/stickers::biz_stickers_hero_title":
		"Pulsuz \"Bitcoin qəbul olunur\" stikerlər",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoin qəbul etmək işin yalnız yarısıdır — müştərilərinizin də bunu etdiyinizi bilməsi lazımdır. Bu kiçik \"Bitcoin qəbul olunur\" stikerləri ön qapınıza, kassaya, menyuya və ya müştərilərin ödəmədən əvvəl görəcəyi hər hansı digər yerə yapışdırmaq üçün hazırlanıb.",
	"business/stickers::biz_stickers_intro_c2":
		"Sizə ABŞ və ya Kanadanın istənilən yerinə pulsuz bir paket poçtla göndərəcəyik və ya dünyanın istənilən yerində özünüz çap edə bilərsiniz.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — Pulsuz poçt",
	"business/stickers::biz_stickers_option_print":
		"🌍 Qlobal — Özüm çap edəcəm",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 ABŞ — Pulsuz poçt",
	"business/stickers::biz_stickers_placeholder_translation1":
		"\"Bitcoin qəbul olunur\" tərcüməsi",
	"business/stickers::biz_stickers_placeholder_translation2":
		"\"Bitcoin-in biznes üçün nə üçün yaxşı olduğunu öyrənmək üçün skan edin\" tərcüməsi",
	"business/stickers::biz_stickers_print_c1":
		"Harada yaşadığınızdan asılı olmayaraq öz \"Bitcoin qəbul olunur\" stikerlərinizi çap edə bilərsiniz. Stiker fayllarını və çap təlimatlarını endirmək üçün aşağıdakı dilinizə klikləyin.",
	"business/stickers::biz_stickers_print_header":
		"Öz stiker fayllarınızı çap edin",
	"business/stickers::biz_stickers_request_c1":
		"Yerli dilinizdə \"Bitcoin qəbul olunur\" stiker faylları istəmək üçün aşağıdakı formu doldurun. Hazır olduqda sizə bildiriş göndərəcəyik.",
	"business/stickers::biz_stickers_request_header":
		"Dilinizi görmürsünüz?",
	"business/stickers::biz_stickers_step_description":
		"ABŞ və Kanadadakı ünvanlara pulsuz paket göndərəcəyik. Dünyanın istənilən başqa yerində özünüz çap edə bilərsiniz.",
	"business/stickers::biz_stickers_step_header":
		"Stikerlərinizi necə əldə etmək istərdiniz?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::biz_wallets_meta_description":
		"Bütün Bitcoin pulqabları qarşılıqlı işləyir — biznesinizə uyğun olanı seçin. Pulsuz, dərhal hesablaşma, geri ödəmələr yoxdur.",
	"business/wallets::sources_breez_business":
		"Breez — yalnız Bitcoin Lightning pulqabı",
	"business/wallets::sources_ibex":
		"IBEX — Lightning ödəniş infrastrukturu",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin ödəniş prosessoru",
	"business/wallets::sources_square":
		"Square — Bitcoin ödənişlərini qəbul edin",
	"business/wallets::sources_zaprite":
		"Zaprite — bizneslər üçün Bitcoin fakturası",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin pulqabları pulsuzdur. Biznesinizə uyğun olanı seçin — şəxsən, onlayn və ya fakturaya əsaslanan — və dəqiqələr ərzində Bitcoin qəbul etməyə başlayın.",
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::wallets_section_invoice": "Fakturaya əsaslanan bizneslər üçün pulqabları",
	"business/wallets::wallets_section_invoice_intro":
		"Müştərilərə faktura göndərirsinizsə (konsaltinq, frilans, B2B xidmətləri), fakturaya əsaslanan pulqabı istifadə edin. Müştəriniz bir neçə klikləmə ilə Bitcoin fakturasını ödəyir.",
	"business/wallets::wallets_section_multiple":
		"Çoxlu işçisi olan bizneslər üçün pulqabları",
	"business/wallets::wallets_section_multiple_intro":
		"Kassada ödənişləri qəbul edən komandanız varsa, çoxlu işçi girişini dəstəkləyən pulqabı seçin — hər işçinin öz PIN kodu olur və kimin hansı ödənişi aldığını təmiz audit jurnalında saxlayırsınız.",
	"business/wallets::wallets_section_online": "Onlayn bizneslər üçün pulqabları",
	"business/wallets::wallets_section_online_intro":
		"Veb saytda satırsınız? Bu pulqabları elektron mağazanıza qoşulur və dünyanın istənilən yerindəki istənilən müştəridən Bitcoin qəbul edir — geri ödəmələr yoxdur və tacir hesabı tələb olunmur.",
	"business/wallets::wallets_section_sole":
		"Fərdi bizneslər üçün pulqabları",
	"business/wallets::wallets_section_sole_intro":
		"Mağaza, kafe, studiya və ya xidməti təkbaşına idarə edirsinizsə, bu pulqablarından hər hansı biri işləyəcək. Ödənişləri Bitcoin olaraq saxlamaq istədiyinizə və ya hər ödənişin bir hissəsini avtomatik olaraq yerli valyutanıza çevirmək istədiyinizə əsasən seçin.",
	"business/wallets::wallets_strike_note":
		"Strike Business sizə Bitcoin və Lightning ödənişlərini haqqsız qəbul etməyə və dərhal hesablaşmağa imkan verir. Şəxsən, onlayn və fakturaya əsaslanan ödənişləri, yerli valyutanıza istəyə bağlı avtomatik çevirmə ilə dəstəkləyir.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin qəbul olunur",
	"business/why::why_biz_s1": "Aşağı haqlar, biznes üçün daha çox",
	"business/why::why_biz_s1_c1":
		"Bitcoin ödənişləri hər satışdan 2-3% tutan bankları və kredit kartı şirkətlərini atlayır. Biznes ödədiyinizin daha çoxunu saxlayır — bu da sizin üçün çox vaxt daha yaxşı qiymətlər və xidmət deməkdir.",
	"business/why::why_biz_s2": "Dərhal hesablaşma, geri ödəmələr yoxdur",
	"business/why::why_biz_s2_c1":
		"Bitcoin ödənişləri saniyələr ərzində birbaşa pulqabınızdan biznesə hesablaşır. Bankın vəsaiti buraxmasını günlərlə gözləməyə ehtiyac yoxdur və bahalı geri ödəmə mübahisələri yoxdur — beləliklə biznes saxtakarlıqla mübarizə əvəzinə müştərilərə xidmət etməyə diqqət yetirə bilər.",
	"business/why::why_biz_s3": "Qəbul etmək pulsuz, hər kəs üçün açıq",
	"business/why::why_biz_s3_c1":
		"Bitcoin qəbul edən biznes üçün müqavilələr, aylıq haqlar və ya quraşdırma xərcləri yoxdur. Və dünya üzrə milyonlarla Bitcoin istifadəçisi onu qəbul edən tacirləri aktiv şəkildə axtarır — bu da biznesə yeni müştərilərə pulsuz məruz qalma verir.",
	"business/why::why_business_cta_intro":
		"Biznes idarə edirsiniz və Bitcoin qəbul etməyə başlamaq istəyirsiniz?",
	"business/why::why_business_cta_link": "Necə işlədiyini görün →",
	"business/why::why_for_business": "Bitcoin bu biznes üçün nə üçün əladır",
	"business/why::why_for_business_intro":
		"Bitcoin qəbul etmək biznesə hər satışdan daha çox saxlamağa, geri ödəmələr olmadan dərhal ödəniş almağa və Bitcoin istifadəçilərinin qlobal auditoriyasına çatmağa imkan verir — hamısı müqavilələr və aylıq haqlar olmadan.",
	"business/why::why_good_for_you": "Bitcoin sizin üçün də nə üçün əladır",
	"business/why::why_good_for_you_intro":
		"Bitcoin yalnız kassada yaxşı deyil — bu, qənaətlərinizi, məxfiliyinizi və əməliyyat azadlığınızı qoruyan daha yaxşı bir pul formasıdır. Budur sürətli ümumi baxış.",
	"business/why::why_hero_subtitle":
		"Siz yenicə \"Bitcoin qəbul olunur\" stikerini skan etdiniz. Budur nə üçün bu əla xəbərdir — bu biznes üçün və sizin üçün.",
	"business/why::why_intro_c1":
		"İçində olduğunuz biznes Bitcoin qəbul edir — banklar və ya vasitəçilər pay götürmədən hər kəsin, dünyanın hər yerində istifadə edə biləcəyi müasir, açıq mənbəli ödəniş şəbəkəsi.",
	"business/why::why_intro_c2":
		"Aşağıda Bitcoin qəbul etməyin bu biznes üçün nə üçün yaxşı olduğunun qısa versiyası və üstəlik Bitcoin istifadə etməyin müştəri kimi sizin üçün nə üçün yaxşı olduğu.",
	"business/why::why_learn_more_lowercase": "Daha çox öyrən →",
	"business/why::why_next_business_label": "Bitcoin qəbul edin",
	"business/why::why_next_business_title": "Biznesinizdə Bitcoin qəbul edin",
	"business/why::why_next_buy_label": "Bitcoin alın",
	"business/why::why_next_buy_title": "İlk Bitcoin-inizi alın",
	"business/why::why_next_learn_label": "Daha çox öyrən",
	"business/why::why_next_learn_title": "Bitcoin haqqında daha çox öyrənin",
	"business/why::why_next_wallet_label": "Pulqabı alın",
	"business/why::why_next_wallet_title": "Öz Bitcoin pulqabınızı alın",
	"business/why::why_s1_c1":
		"İnflyasiya daha çox pul çap edildikdə və ya yoxdan yaradıldıqda baş verir. Bu cibinizdəki pulun zamanla daha az dəyərinə çevrilməsinə səbəb olur — qiymətlərin ildən-ilə qalxmağa davam etməsinin səbəbi də budur.",
	"business/why::why_s1_c2":
		"Bitcoin-in 21 milyon sikkəlik sabit təklifi var. Heç bir hökumət, bank və ya şirkət daha çox çap edə bilməz. Bitcoin-də qənaətləriniz zamanla dəyərini itirmək əvəzinə saxlayır.",
	"business/why::why_s2_c1":
		"Son illərdə bir neçə ABŞ bankı bank panikaları səbəbindən çökdü. Həddindən artıq çox müştəri eyni vaxtda pul çıxarmağa çalışdıqda, bankların hamıya ödəmək üçün nağdları olmadı.",
	"business/why::why_s2_c2":
		"Pulunuzu sadəcə saxlamaq əvəzinə banklar onun əksəriyyətini kredit verir və investisiya edirlər. Həmin investisiyalar pisləşirsə — və ya əmanətçilər inamı itirirsə — bank uğursuz ola bilər və əmanətləriniz dondurula və ya itirilə bilər.",
	"business/why::why_s2_c3":
		"Bitcoin ilə öz pulunuzu birbaşa öz pulqabınızda saxlaya bilərsiniz. Bank yoxdur. Vasitəçi yoxdur. Bank panikası yoxdur.",
	"business/why::why_s3_c1":
		"Kredit kartları, PayPal və ya ənənəvi bank hesablarından fərqli olaraq, Bitcoin istifadə etmək üçün heç kimin icazəsini tələb etmir.",
	"business/why::why_s3_c2":
		"Heç kim hesabınızı dondura, ödənişi bloklaya və ya sizi şəbəkədən ayıra bilməz. Bu, tarixdə senzura və ya müsadirə qorxusu olmadan sərbəst istifadə edə biləcəyiniz ilk maliyyə sistemidir.",
	"business/why::why_s4_c1":
		"Bitcoin tez-tez yanlış başa düşülür, amma sakitcə dünyada çox yaxşı işlər görür.",
	"business/why::why_s4_c2":
		"İnsan haqları aktivistlərinə azadlıq uğrunda mübarizədə kömək edib, zibilxanalardan və neft yataqlarından qlobal metan qazı emissiyalarını azaldıb, elektrik şəbəkələrini sabitləşdirib və milli parklar kimi ictimai malları maliyyələşdirib.",
	"business/why::why_whats_next_heading": "Sonra harada?",
	"business/why::why_whats_next_intro":
		"Əgər bu sizin ilk Bitcoin stiker skanınızdırsa, buradan getmək üçün ən faydalı yerlər bunlardır.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_bitcoin_guide": "Bitcoin necə alınır",
	"buy::buy_header_subtitle":
		"İlk Bitcoin-inizi almaq üçün sadə, addım-addım bələdçi.",
	"buy::buy_howto_name": "Bitcoin necə alınır",
	"buy::buy_meta_description":
		"Addım-addım bələdçimiz ilə Bitcoin-i təhlükəsiz almağı öyrənin. Sizin üçün ən yaxşı Bitcoin alış seçimlərini tapmaq üçün ölkənizi və ödəniş metodunuzu seçin.",
	"buy::buy_step_1_eyebrow": "Addım 1",
	"buy::buy_step_1_header": "Ölkənizi seçin",
	"buy::buy_step_2_eyebrow": "Addım 2",
	"buy::buy_step_2_header": "Ödəniş metodunu seçin",
	"buy::buy_step_3_eyebrow": "Addım 3",
	"buy::buy_step_3_header": "Alış seçimləriniz",
	"buy::buy_step_4_eyebrow": "Addım 4",
	"buy::buy_step_4_header": "Bitcoin-inizi təhlükəsiz saxlayın",
	"buy::buy_storage_cta_label": "Növbəti addım",
	"buy::sources_bisq":
		"Bisq — mərkəzləşdirilməmiş peer-to-peer Bitcoin birjası",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — Bitcoin bankomatları üçün qlobal kataloq",
	"buy::sources_kraken": "Kraken — köklü Bitcoin birjası",
	"buy::sources_relai":
		"Relai — yalnız Bitcoin üçün İsveçrə öz-özünə saxlama tətbiqi",
	"buy::sources_river":
		"River — yalnız Bitcoin üçün alma, madənçilik və saxlama",
	"buy::sources_strike_lightning":
		"Strike — Lightning şəbəkəsi dəstəyi ilə Bitcoin alın",
	"buy::sources_swan":
		"Swan Bitcoin — yalnız Bitcoin üçün dollarla orta qiymət",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Dil əlavə et",
	"common::common_next_buy_bitcoin": "Bitcoin alın",
	"common::common_next_buy_bitcoin_desc":
		"Bitcoin-i təhlükəsiz almağı öyrənin",
	"common::common_next_calculate": "İnflyasiyanızı hesablayın",
	"common::common_next_calculate_desc":
		"İnflyasiyanın maaşınıza zamanla necə təsir etdiyini görün",
	"common::common_next_get_wallet": "Pulqabı alın",
	"common::common_next_get_wallet_desc":
		"İlk Bitcoin pulqabınızı alın — pulsuzdur",
	"common::common_next_keep_learning": "Öyrənməyə davam edin",
	"common::common_next_keep_learning_desc":
		"Bitcoin-in dünyanı necə yaxşılaşdırdığını görün",
	"common::common_site_tagline": "Hər kəs üçün Bitcoin təhsili.",
	"common::common_source_bls_cpi":
		"ABŞ Əmək Statistikası Bürosu — İstehlak Qiymətləri İndeksi (CPI)",
	"common::common_source_btc_map":
		"BTC Map — Bitcoin qəbul edən tacirlərin qlobal kataloqu",
	"common::common_source_btcpayserver":
		"BTCPay Server — pulsuz, açıq mənbəli, öz-özünə hostlanan Bitcoin ödəniş prosessoru",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Pul təklifi (kateqoriya indeksi)",
	"common::common_source_oshi":
		"Oshi — tacirlər üçün Bitcoin mükafat platforması",
	"common::common_source_strike_business":
		"Strike — bizneslər üçün Bitcoin və Lightning ödənişləri",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_group_bitcoin": "Bitcoin məlumatları",
	"common::common_sources_group_cpi":
		"İnflyasiya / İstehlak qiymətləri indeksi",
	"common::common_sources_group_debt": "Dövlət borcu",
	"common::common_sources_group_money": "Pul təklifi məlumatları",
	"common::common_sources_group_stories": "Real dünya nümunələri",
	"common::common_sources_treasury_auction":
		"James Lavish — \"Xəzinə auksionu uğursuz ola bilərmi?\"",
	"common::common_sticker_files_mission_5": "Paket sifariş edin",
	"common::common_sticker_files_mission_6": "ingilis dilində pulsuz stikerlər.",
	"common::common_sticker_files_next_flyers_label": "Vərəqələr",
	"common::common_sticker_files_next_flyers_title": "Bitcoin vərəqəsi çap edin",
	"common::common_sticker_files_next_languages_label": "Stiker faylları",
	"common::common_sticker_files_next_languages_title":
		"Digər dillərdə stiker fayllarına baxın",
	"common::common_sticker_files_print_these":
		"Bunları bir kliklə çap edin",
	"common::common_sticker_name_bdhi_black":
		"\"Bitcoin-in inflyasiyası yoxdur\" stikeri (qara)",
	"common::common_sticker_name_bdhi_orange":
		"\"Bitcoin-in inflyasiyası yoxdur\" stikeri (narıncı)",
	"common::common_sticker_name_caution":
		"Bitcoin \"Diqqət! Əriyən buz kubu\" stikeri",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin \"İnflyasiyanın müalicəsi\" stikeri",
	"common::common_sticker_name_danger":
		"Bitcoin \"Təhlükə! Qarşıda inflyasiya\" stikeri",
	"common::common_sticker_name_fix":
		"Bitcoin \"Pulu düzəlt, dünyanı düzəlt\" stikeri",
	"common::common_sticker_name_got_inflation":
		"Bitcoin \"İnflyasiyanız var?\" stikeri",
	"common::common_sticker_name_study": "\"Bitcoin-i öyrən\" stikeri",
	"common::common_sticker_name_warning":
		"Bitcoin \"Xəbərdarlıq! İnflyasiya qənaətlərinizi oğurlayır\" stikeri",
	"common::common_sticker_name_what_if":
		"Bitcoin \"Əgər inflyasiyanız olmasaydı?\" stikeri",
	"common::common_sticker_tips_heading": "Stiker məsləhətləri",
	"common::common_sticker_tips_intro":
		"Stikerlərinizi çap etdikdən sonra onları insanların görə biləcəyi yerə qoyun! Stikerlər üçün yaxşı yerlər:",
	"common::common_sticker_tips_list_1":
		"İnsanların görəcəyi ictimai yerlərdə",
	"common::common_sticker_tips_list_2":
		"Tez çıxarılması ehtimalı olmayan yerlərdə (stikerlər daimi zərər vermir)",
	"common::common_sticker_tips_list_3":
		"Asanlıqla yapışdığı səthlərdə (metal, plastik, şüşə)",
	"common::common_sticker_tips_list_4":
		"Özəl mülkiyyətdə deyil, lövhələri, bankomatları və ya yanacaq nasoslarını örtməyin",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_stickers_printer_prefix": "Biz",
	"common::common_stickers_printer_suffix":
		"istifadə edirik, amma siz istənilən stiker şirkətini istifadə edə bilərsiniz.",
	"common::common_whats_next": "Sonra nə?",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::cic_calculator_heading":
		"İnflyasiya boşluğunuzu hesablayın",
	"compound-inflation-calculator::cic_cta_label": "Növbəti addım",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Maaşınızın inflyasiya ilə ayaqlaşması üçün nə qədər artması lazım olduğunu görün.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Daha çox mövzu kəşf edin",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Bitcoin-in pul, azadlıq, enerji və daha çoxu ilə necə əlaqəli olduğunu görün.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"İnflyasiyanın necə işlədiyini öyrənin",
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — şəhər bölgələrindəki bütün istehlakçılar üçün istehlak qiymətləri indeksi",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 pul təklifi",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_hero_subtitle":
		"Pulsuz, çap olunan Bitcoin vərəqələri. Daha çox insana Bitcoin öyrənməyə kömək etmək üçün onları ictimai yerlərə qoyun.",
	"flyers::flyers_hero_title": "Bitcoin vərəqələrini çap edin və yayın",
	"flyers::flyers_intro_header":
		"Bu Bitcoin vərəqələrini necə çap edib yaymaq olar",
	"flyers::flyers_next_get_stickers": "Sözü yayın",
	"flyers::flyers_next_get_stickers_desc":
		"Pulsuz Bitcoin stikerləri paketi sifariş edin",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"İştirak edin və Bitcoin-i yaymağa kömək edin",
	"get-involved::get_involved_card_business_label": "Biznes dəsti",
	"get-involved::get_involved_card_business_source":
		"Mənbə: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Pulsuz Bitcoin biznes dəsti sifariş edin",
	"get-involved::get_involved_card_flyers_label": "Çap olunan vərəqələr",
	"get-involved::get_involved_card_flyers_source":
		"Mənbə: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Pulsuz Bitcoin vərəqəsini endirin və çap edin",
	"get-involved::get_involved_card_github_label": "Açıq mənbə",
	"get-involved::get_involved_card_github_source": "Mənbə: GitHub →",
	"get-involved::get_involved_card_github_title":
		"GitHub-da bitcoin.rocks-a töhfə verin",
	"get-involved::get_involved_card_stickers_label": "Pulsuz stikerlər",
	"get-involved::get_involved_card_stickers_source":
		"Mənbə: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Qapınıza göndərilən pulsuz Bitcoin stiker paketi sifariş edin",
	"get-involved::get_involved_description":
		"Pulsuz resurslarımız Bitcoin qəbulunu yaymağı asanlaşdırır. Hər kəsin töhfə verə biləcəyi stikerlər, vərəqələr, biznes dəstləri və açıq mənbəli kod bazası.",
	"get-involved::get_involved_flyers_content_1":
		"Vərəqələr icmanıza Bitcoin təqdim etməyin ən asan yollarından biridir. Pulsuz, çap olunan Bitcoin vərəqəsini endirin, istədiyiniz qədər nüsxə çap edin və onları icma lövhələrinə, kafelərə, görüşlərə və ya insanların toplaşdığı digər yerlərə yayın.",
	"get-involved::get_involved_flyers_content_2":
		"Hər vərəqədə cəlbedici başlıq və maraqlı oxucuları daha çox öyrənmək üçün bitcoin.rocks-a göndərən QR kod var.",
	"get-involved::get_involved_flyers_content_3":
		"Stikerlərdən fərqli olaraq, vərəqələr dünyanın hər yerində tələb üzrə çap oluna bilər — sizə lazım olan tək şey printer və bir neçə dəqiqədir.",
	"get-involved::get_involved_flyers_header": "Vərəqə çap edin və yayın",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks-dan pulsuz çap olunan Bitcoin vərəqəsinin önizləməsi",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks MIT lisenziyası altında pulsuz və açıq mənbəli layihədir. Missiyamız təhsil vasitəsilə Bitcoin qəbulunu sürətləndirməkdir — və bunu təkbaşına edə bilmərik.",
	"get-involved::get_involved_github_content_2":
		"İstər tərtibatçı, istər dizayner, istər yazıçı, istərsə də tərcüməçi olasınız, kömək etmək üçün bir yol var. Xüsusilə məzmunumuzu daha çox dilə tərcümə edə biləcək töhfəçiləri salamlayırıq ki, dünyanın daha çox insanı öz ana dilində Bitcoin öyrənə bilsin.",
	"get-involved::get_involved_github_content_3":
		"Repozitoriyanı fork edin, pull request açın, bir issue təqdim edin və ya dəstəyinizi göstərmək üçün layihəyə ulduz qoyun. Hər töhfə Bitcoin-in daha çox insana çatmasına kömək edir.",
	"get-involved::get_involved_github_header": "GitHub-da töhfə verin",
	"get-involved::get_involved_header": "İştirak edin və Bitcoin-i yayın.",
	"get-involved::get_involved_intro_5":
		"Bunu dəyişməyə kömək edə bilərsiniz. Bitcoin-in ətrafınızdakı insanlara gətirdiyi ümidi yaymağı asanlaşdırmaq üçün bir neçə pulsuz resurs yaratdıq.",
	"get-involved::get_involved_sticker_image_alt":
		"bitcoin.rocks-dan pulsuz Bitcoin mətnli stikerlər paketi",
});

/* ─────────────── index (homepage) ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "Qənaət",
	"index::home_card_label_art_1": "Gəlin müqayisə edək",
	"index::home_card_label_art_2": "Sözü yayın",
	"index::home_card_label_art_3": "Küçə sənəti",
	"index::home_card_label_bank_runs": "Tam ehtiyat sistemi",
	"index::home_card_label_bonds": "Gəlin müqayisə edək",
	"index::home_card_label_business_1": "Fərq nədir?",
	"index::home_card_label_business_2": "Bitcoin ödənişlərini qəbul edin",
	"index::home_card_label_cash": "Gəlin müqayisə edək",
	"index::home_card_label_cbdc": "Açıq, yoxsa qapalı?",
	"index::home_card_label_coding_1": "İnteraktiv dərs",
	"index::home_card_label_coding_2": "Aparat qurun",
	"index::home_card_label_coding_3": "Kodlaşdırma tapmacaları",
	"index::home_card_label_crowdfunding_1": "EndSARS etirazları",
	"index::home_card_label_crowdfunding_2": "Dayandırılmayan pul",
	"index::home_card_label_crowdfunding_3": "Layihənizi maliyyələşdirin",
	"index::home_card_label_crypto": "Fərq nədir?",
	"index::home_card_label_energy_1": "Şəbəkə sabitliyi",
	"index::home_card_label_energy_4": "Tələbə cavab",
	"index::home_card_label_energy_5": "Kənd elektrikləşdirilməsi",
	"index::home_card_label_energy_6": "Bərpa olunan enerji stimulları",
	"index::home_card_label_environment_1": "Metan azaldılması",
	"index::home_card_label_environment_2": "Milli parkı xilas edin",
	"index::home_card_label_environment_3": "Ən yaşıl sənaye",
	"index::home_card_label_environment_4": "Məşəl qazını azaldır",
	"index::home_card_label_equality_1": "Ümid və fürsət",
	"index::home_card_label_equality_2": "Səviyyələşdirici amil",
	"index::home_card_label_food_1": "Yemək qiymətləri",
	"index::home_card_label_food_2": "Fermalar və torpaq",
	"index::home_card_label_freedom_1": "Avtoritar rejimlər",
	"index::home_card_label_freedom_2": "Unikal alət",
	"index::home_card_label_get_started_1": "Başlanğıc əsasları",
	"index::home_card_label_get_started_2": "İlk pulqabınız",
	"index::home_card_label_get_started_3": "Bitcoin alın",
	"index::home_card_label_gold": "Hansı daha yaxşıdır?",
	"index::home_card_label_housing_1": "Münasib mənzil",
	"index::home_card_label_human_rights_1": "İnsan haqlarının tətbiqi",
	"index::home_card_label_human_rights_2": "Kütləvi qəbul",
	"index::home_card_label_human_rights_3": "Qlobal təsir",
	"index::home_card_label_inflation": "Bitcoin daha yaxşı puldur",
	"index::home_card_label_networks_1": "Canlı şəbəkə nümayişi",
	"index::home_card_label_networks_2": "Gəlin müqayisə edək",
	"index::home_card_label_payments_1": "Fərq nədir?",
	"index::home_card_label_payments_2": "Sürətli və ucuz ödənişlər",
	"index::home_card_label_payments_3": "Pul köçürmələri",
	"index::home_card_label_payments_4": "Ödəniş qəbul edin",
	"index::home_card_label_politics_1": "Siyasi paradoks",
	"index::home_card_label_politics_2": "Addım atın",
	"index::home_card_label_property_rights_1": "Gəlin müqayisə edək",
	"index::home_card_label_property_rights_2": "Həqiqi mülkiyyət",
	"index::home_card_label_salary": "Maaşınızı qoruyun",
	"index::home_card_label_self_custody_1": "Bitcoin pulqabı bələdçisi",
	"index::home_card_label_self_custody_2": "Ən mühüm addım",
	"index::home_card_label_self_custody_3": "Suveren pul",
	"index::home_card_label_war_1": "Sonsuz müharibələrə son qoyun",
	"index::home_card_label_war_2": "Veteranlara kömək",
	"index::home_card_label_war_3": "Müharibə vaxtı qaçış",
	"index::home_h1": "Bitcoin daha yaxşı bir dünya quran daha yaxşı puldur.",
	"index::home_nav_about": "Haqqında",
	"index::home_nav_get_involved": "İştirak et",
	"index::home_nav_learn": "Öyrən",
	"index::home_source_prefix": "Mənbə:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::lightning_grid_heading": "Məşhur Lightning pulqabları",
	"lightning::lightning_hardware_cta_label": "Aparat pulqabları",
	"lightning::lightning_header_subtitle":
		"Lightning sizə Bitcoin-i saniyələr ərzində sentin bir hissəsinə göndərməyə imkan verir — xərcləməyi planlaşdırdığınız Bitcoin miqdarına uyğun güzəştləri olan pulqabını seçin.",
	"lightning::lightning_s1_c4": "Ətraflı məlumat üçün bələdçimizə baxın",
	"lightning::lightning_s1_c4_end": ".",
	"lightning::lightning_s1_c4_link": "Bitcoin aparat pulqabları bələdçisi",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning pulqabı",
	"lightning::sources_breez_lightning":
		"Breez — öz-özünə saxlanılan Lightning pulqabı",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning şəbəkəsi sənədləri",
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — saxlayıcı Lightning pulqabı",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_f1": "Çoxlu xüsusiyyət və özəlləşdirmə",
	"nostr/index::nostr_amethyst_f2": "Ayrı Bitcoin pulqabı tələb edir",
	"nostr/index::nostr_amethyst_f3": "100% pulsuz",
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_f1":
		"Twitter-ə bənzər tanış interfeys",
	"nostr/index::nostr_damus_f2": "Ayrı Bitcoin pulqabı tələb edir",
	"nostr/index::nostr_damus_f3": "100% pulsuz",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_download_heading":
		"Pulsuz Nostr müştərisini endirin",
	"nostr/index::nostr_download_intro":
		"Nostr müştəriləri Nostr şəbəkəsində məzmunu oxumağa və dərc etməyə imkan verən pulsuz tətbiqlərdir. Onların hamısı qarşılıqlı işləyir — istənilən vaxt müştəriləri dəyişdirə və izləyicilərinizi və məzmununuzu saxlaya bilərsiniz.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr onlayn ünsiyyət üçün yeni mərkəzləşdirilməmiş protokoldur — heç bir şirkət tərəfindən idarə olunmur, Bitcoin ödənişləri (zaps) yerli olaraq daxil edilib və tətbiqlər arasında izləyicilərinizi itirmədən keçid edə bilərsiniz.",
	"nostr/index::nostr_hero_title": "Nostr nədir?",
	"nostr/index::nostr_intro_c1":
		"Nostr e-poçta bənzəyir: heç kim protokola sahib deyil, hər kəs onun üzərində tətbiq qura bilər və ən bəyəndiyiniz tətbiqi seçə bilərsiniz. Twitter və ya Facebook-dan fərqli olaraq, sizi senzuraya sala, ata və ya əlçatanlığınızı azalda biləcək mərkəzi şirkət yoxdur.",
	"nostr/index::nostr_intro_c2":
		"Aşağıda Nostr-un nə üçün vacib olduğunun qısa versiyası — sonra bu gün başlamağınız üçün lazım olan bütün pulsuz Nostr müştəriləri.",
	"nostr/index::nostr_iris_f1":
		"Çox asan — quraşdırma tələb etmir",
	"nostr/index::nostr_iris_f2":
		"Sınaq hesabı ilə Nostr-u sınamaq üçün asan yol",
	"nostr/index::nostr_iris_f3": "100% pulsuz",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_learn_more_label": "Daha dərinə gedin",
	"nostr/index::nostr_learn_more_title":
		"nostr.how-da Nostr haqqında daha çox öyrənin",
	"nostr/index::nostr_page_description":
		"Nostr onlayn ünsiyyət üçün yeni mərkəzləşdirilməmiş protokoldur — heç bir şirkət tərəfindən idarə olunmur, Bitcoin ödənişləri (zaps) yerli olaraq daxil edilib və müştərilər arasında izləyicilərinizi itirmədən keçid edə bilərsiniz.",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android və veb",
	"nostr/index::nostr_platform_web": "Veb brauzer",
	"nostr/index::nostr_primal_f1": "İlk tövsiyə olunan müştəri",
	"nostr/index::nostr_primal_f2":
		"Daxili Bitcoin zap pulqabı",
	"nostr/index::nostr_primal_f3": "100% pulsuz",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_s1": "Protokol, platforma deyil",
	"nostr/index::nostr_s1_c1":
		"Nostr onlayn ünsiyyət qurmağa imkan verən yeni protokoldur — senzuradan, atılmaqdan və ya əlçatanlığınızın azaldılmasından qorxmadan.",
	"nostr/index::nostr_s1_c2":
		"Twitter və Facebook kimi platformalar bir şirkət tərəfindən idarə olunur, amma Nostr protokolunu heç kim idarə etmir.",
	"nostr/index::nostr_s2": "Hərəkət azadlığı",
	"nostr/index::nostr_s2_c1":
		"Nostr e-poçta bənzəyir. Heç kim e-poçt protokolunu idarə etmir və hər kəs onun üzərində müştəri (Gmail, Hotmail və digərləri kimi) qura bilər.",
	"nostr/index::nostr_s2_c2":
		"Nostr protokolunu da heç kim idarə etmir və hər kəs onun üzərində müştəri (Damus, Amethyst və digərləri kimi) qura bilər.",
	"nostr/index::nostr_s2_c3":
		"Konkret bir müştərinin işləmə tərzini bəyənmirsinizsə, izləyicilərinizi və ya məzmununuzu itirmədən Nostr hesabınızı başqa müştəriyə sorunsuz köçürə bilərsiniz.",
	"nostr/index::nostr_s3": "Bitcoin daxildir",
	"nostr/index::nostr_s3_c1":
		"Bitcoin Nostr protokoluna yerli olaraq daxil edilib. Bəyəndiyiniz bir məzmun görsəniz, təşəkkür kimi birinə asanlıqla Bitcoin zap göndərə bilərsiniz!",
	"nostr/index::nostr_s3_c2":
		"Twitter və Facebook kimi mərkəzləşdirilmiş platformalarda mərkəzi şirkət məzmununuzdan pul qazanır. Amma Nostr kimi açıq protokollarda siz məzmununuzdan pul qazanırsınız.",
	"nostr/index::sources_damus": "Damus — iPhone üçün Nostr müştərisi",
	"nostr/index::sources_iris":
		"Iris — brauzerdə işləyən Nostr müştərisi",
	"nostr/index::sources_nostr_how":
		"nostr.how — Nostr nədir?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — açıq mənbəli spesifikasiya",
	"nostr/index::sources_primal":
		"Primal — daxili Bitcoin zap pulqabı olan Nostr müştərisi",
	"nostr/index::what_is_nostr": "Nostr nədir?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Bu Bitcoin stiker fayllarından istifadə edərək öz Bitcoin stikerlərinizi çap edin.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Sorğu qəbul edildi 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Toplu sifariş",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Nostr-da paylaşın",
	"sticker-success::sticker_success_btn_what_is_nostr": "Nostr nədir?",
	"sticker-success::sticker_success_bulk_header":
		"Daha çox stiker istəyirsiniz?",
	"sticker-success::sticker_success_hero_title":
		"Stikerləriniz yoldadır 🎉",
	"sticker-success::sticker_success_share_header":
		"Stikerlərinizin olduğu yerləri paylaşın",
	"sticker-success::sticker_success_tips_header":
		"Yaxşı stiker yerləri",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_btn_choose_pack": "Bu paketi seçin",
	"stickers::stickers_bulk_c1":
		"Bir neçə stikerdən daha çox istəyirsiniz?",
	"stickers::stickers_bulk_c2":
		"İstifadə etdiyimiz eyni çapxanadan toplu sifariş verin",
	"stickers::stickers_bulk_c3":
		"— nə qədər çox alsanız, stiker başına qiymət bir o qədər ucuz olur.",
	"stickers::stickers_bulk_cta": "Toplu stikerlər üçün alış-veriş",
	"stickers::stickers_bulk_header": "Toplu stiker sifariş",
	"stickers::stickers_flyers_link_before":
		"Bu zaman, çap edin və yayın",
	"stickers::stickers_header":
		"Bu pulsuz \"Bitcoin qəbul olunur\" stikerlərini alın.",
	"stickers::stickers_hero_subtitle":
		"Pulsuz Bitcoin stikerləri paketi sifariş edin və daha çox insana Bitcoin öyrənməyə kömək etmək üçün onları ictimai yerlərə qoyun.",
	"stickers::stickers_hero_title": "Pulsuz Bitcoin stikerləri",
	"stickers::stickers_instructions_1":
		"Poçt ünvanınızı daxil edin və sizə pulsuz Bitcoin stikerləri paketi göndərəcəyik. Stikerləriniz adi ağ zərfdə göndəriləcək.",
	"stickers::stickers_intro_c1":
		"Missiyamız daha çox insanı Bitcoin stikerlərini ictimai yerlərə qoyaraq \"narıncılaşdırmağa\" kömək etməkdir. Bütün stikerlərimizdə",
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_intro_c3": "İnflyasiya",
	"stickers::stickers_intro_c4":
		"Aşağıdan bir stiker paketi seçin və onu necə əldə etmək istədiyinizi seçin — ABŞ və ya Kanadadakı hər kəsə pulsuz paket göndərəcəyik və ya dünyanın istənilən yerində özünüz çap edə bilərsiniz.",
	"stickers::stickers_mail_header": "Sizə pulsuz stikerlərinizi göndərəcəyik",
	"stickers::stickers_next_print_flyers": "Yaymağa davam edin",
	"stickers::stickers_next_print_flyers_desc":
		"İctimai yerlərdə yaymaq üçün pulsuz Bitcoin vərəqələri çap edin",
	"stickers::stickers_option_bulk": "📦 Qlobal — Toplu sifariş",
	"stickers::stickers_option_canada": "🇨🇦 Kanada — Pulsuz poçt",
	"stickers::stickers_option_print": "🌍 Qlobal — Özüm çap edəcəm",
	"stickers::stickers_option_usa":
		"🇺🇸 ABŞ — Pulsuz poçt",
	"stickers::stickers_print_c1":
		"Harada yaşadığınızdan asılı olmayaraq öz stikerlərinizi çap edərək iştirak edə bilərsiniz. Stiker fayllarını və çap təlimatlarını endirmək üçün aşağıdakı dilinizə klikləyin.",
	"stickers::stickers_print_c2":
		"Hər stiker hər dildə mövcud deyil.",
	"stickers::stickers_print_header":
		"Öz stiker fayllarınızı çap edin",
	"stickers::stickers_request_c1":
		"Yerli dilinizdə stiker faylları istəmək üçün aşağıdakı formu doldurun. Hazır olduqda sizə bildiriş göndərəcəyik.",
	"stickers::stickers_request_header": "Dilinizi görmürsünüz?",
	"stickers::stickers_share_c2":
		"Nostr-da bizi izləyin,",
	"stickers::stickers_share_c3": "ifadəsini istənilən Nostr müştərisində axtaraq.",
	"stickers::stickers_signs_pack_description":
		"Bitcoin mesajları ilə xəbərdarlıq, təhlükə və diqqət formalı lövhələr — diqqəti cəlb etmək və insanların dayanıb oxumasını təmin etmək üçün hazırlanıb.",
	"stickers::stickers_step_1_description":
		"Hər paket insanlara Bitcoin haqqında öyrədən QR kodları olan fərqli Bitcoin stikerləri dəstinə malikdir.",
	"stickers::stickers_step_1_eyebrow": "Addım 1",
	"stickers::stickers_step_1_header":
		"Stiker paketinizi seçin",
	"stickers::stickers_step_2_description":
		"ABŞ və Kanadadakı ünvanlara pulsuz paket göndərəcəyik. Dünyanın istənilən başqa yerində özünüz çap edə və ya toplu sifariş edə bilərsiniz.",
	"stickers::stickers_step_2_eyebrow": "Addım 2",
	"stickers::stickers_step_2_header":
		"Stikerlərinizi necə əldə etmək istərdiniz?",
	"stickers::stickers_text_pack_description":
		"İctimai yerlərdə maraq yaratmaq üçün hazırlanmış Bitcoin şüarları və ifadələrinin qarışığı.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Pulqabınızı seçin",
	"wallets::sources_blockstream_green":
		"Blockstream Green — öz-özünə saxlama Bitcoin pulqabı",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin aparat pulqabı",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 aparat pulqabı",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q aparat pulqabı",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Bitcoin metal toxum saxlama icmalları",
	"wallets::sources_passport":
		"Foundation Devices — Passport aparat pulqabı",
	"wallets::sources_seedsigner":
		"SeedSigner — açıq mənbəli, DIY Bitcoin imza cihazı",
	"wallets::wallets_grid_heading": "Məşhur Bitcoin pulqabları",
	"wallets::wallets_header_subtitle":
		"Pulqabı seçmək, açarlarınızı qorumaq və Bitcoin-inizə tam nəzarət əldə etmək üçün addım-addım bələdçi.",
	"wallets::wallets_lightning_cta_label": "Lightning şəbəkəsi",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const missing = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		} else {
			missing.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (az): filled ${filled}, already-done ${skipped}`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing.slice(0, 30)) console.log("  -", k);
		if (missing.length > 30)
			console.log(`  ...and ${missing.length - 30} more`);
		process.exitCode = 1;
	}
}

main();
