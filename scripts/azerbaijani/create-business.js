/**
 * Creates Azerbaijani (az) translation files for all business/ pages.
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

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin biznes üçün yaxşıdır",
	"biz_header": "BITCOIN BİZNES ÜÇÜN YAXŞIDIR",
	"biz_s1": "Minimum olmadan aşağı komissiyalar",
	"biz_s1_c1": "Bitcoin nağd pul kimi birbaşa müştərilərinizdən ödənişlər almağı təmin edir. Bitcoin şəbəkəsi yüksək komissiya tutan banklar və kredit kartı şirkətləri kimi vasitəçilər olmadan işləyir.",
	"biz_s2": "Ani hesablaşma",
	"biz_s2_c1": "Nağd pul kimi, Bitcoin ödənişləri dərhal hesablanır. Kredit kartı şirkətinizin və ya bankınızın sizə ödəməsini gözləmək lazım deyil. Əvəzinə, pulunuza dərhal çıxış əldə edirsiniz.",
	"biz_s3": "Geri ödəmə və ya fırıldaqçılıq yoxdur",
	"biz_s3_c1": "Bitcoin ödənişləri birbaşa siz və müştəriləriniz arasında baş verdiyinə görə, heç kim geri ödəmə ilə pulunuzu geri ala bilməz.",
	"biz_s3_c2": "Bitcoin Şəbəkəsində saxta Bitcoin göndərilə bilməz, bu o deməkdir ki, biznesinizə pul itirə biləcək fırıldaqçı əməliyyatlar haqqında narahat olmaq lazım deyil.",
	"biz_s4": "Daha çox müştəri əldə edin",
	"biz_s4_c1": "Milyonlarla insan Bitcoin-ə sahibdir və onu qəbul edən yerlərdə xərcləmək istəyir.",
	"biz_s4_c2": "Sadəcə Bitcoin qəbul etməklə, biznesiniz Bitcoin ticarətçi xəritələrində siyahıya alınaraq yeni Bitcoin müştərilərinə pulsuz tanıtım əldə edə bilər.",
	"biz_s4_c3": "Bitcoin qəbul etmək 100% pulsuzdur. Heç bir müqavilə və ya gizli komissiya yoxdur."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Bitcoin-in niyə biznes üçün yaxşı olduğunu öyrənin",
	"why_header": "BITCOIN BİZNES ÜÇÜN YAXŞIDIR",
	"why_good_for_you": "BITCOIN SİZİN ÜÇÜN DƏ YAXŞIDIR!",
	"why_learn_more_lowercase": "Daha çox öyrənin.",
	"why_s1": "Bitcoin-də inflyasiya yoxdur",
	"why_s1_c1": "İnflyasiya daha çox pul çap edildikdə və ya yoxdan yaradıldıqda baş verir. Bu pulunuzun zamanla dəyərini azaldır.",
	"why_s1_c2": "Bitcoin-in sabit tədarükü var, yəni heç kim daha çox Bitcoin çap edə bilməz.",
	"why_s2": "Bitcoin-də bank qaçışları yoxdur",
	"why_s2_c1": "Son illərdə bank qaçışları səbəbindən ABŞ-da bir neçə bank çökmüşdür.",
	"why_s2_c2": "Banklar pulunuzu sizin üçün sadəcə saxlamaq əvəzinə, onu investisiya edir və borc verir. Bu investisiyalar yaxşı getməzsə, sizə geri ödəmək üçün kifayət qədər pulları olmur.",
	"why_s2_c3": "FDIC sığorta fondu sığorta etdiyi hər 100 dollar üçün cəmi 1 dollara sahibdir.",
	"why_s3": "Bitcoin icazəsizdir",
	"why_s3_c1": "Ənənəvi maliyyə şəbəkələrindən fərqli olaraq, Bitcoin-dən istifadə etmək üçün icazə lazım deyil.",
	"why_s3_c2": "Bu o deməkdir ki, heç kim heç bir səbəbdən Bitcoin-dən istifadə etməyinizi dayandıra bilməz. Bu, senzura və ya müsadirə qorxusu olmadan istifadə edə biləcəyiniz ilk maliyyə şəbəkəsidir.",
	"why_s4": "Bitcoin daha yaxşı dünya qurur",
	"why_s4_c1": "Bitcoin daha yaxşı dünya quran yanlış başa düşülmüş texnologiyadır.",
	"why_s4_c2": "Bitcoin insan hüquqları fəallarına azadlıq uğrunda mübarizəyə kömək etmiş, qlobal metan emissiyalarını azaltmış, milli parkları xilas etmiş və daha çox şeylər etmişdir."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Biznesinizdə Bitcoin Ödənişlərini Qəbul Edin",
	"guide_header": "BİZNESİNİZDƏ BITCOIN QƏBUL ETMƏYƏ HAZIRSINIZ?"
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Bitcoin Ödənişlərini Necə Qəbul Etmək Olar",
	"wallets_header": "BITCOIN ÖDƏNİŞLƏRİNİ QƏBUL ETMƏK ÜÇÜN PULSUZ BITCOIN PUL KİSƏSİ ALIN",
	"wallets_intro_1": "Bütün Bitcoin pul kisələri bir-biri ilə uyğundur, buna görə müştəriləriniz hansı pul kisəsindən istifadə etsələr də sizə Bitcoin ilə ödəyə bilərlər.",
	"wallets_intro_2": "Yalnız Bitcoin pul kisələri:",
	"wallets_intro_3": "Bunlar Bitcoin-in bütün üstünlüklərini açan saf Bitcoin pul kisələridir: vasitəçi yoxdur, aşağı komissiyalar və geri ödəmə və ya fırıldaqçılıq yoxdur.",
	"wallets_intro_4": "Hibrid pul kisələri:",
	"wallets_intro_5": "Bunlar müştəri sizə ödəniş etdikdə Bitcoin-in istənilən hissəsini dərhal dollarlara dəyişdirməyə imkan verir. Komissiyalar kredit kartı ödənişlərindən az, lakin saf Bitcoin ödənişlərindən çoxdur.",
	"wallets_intro_6": "Hər ikisi Bitcoin qəbul etmək üçün əla üsuldur. İstifadə edəcəyiniz xüsusi pul kisəsi biznesinizin ölçüsü və növündən asılıdır.",
	"wallets_choice_sole": "fərdi sahiblik bizneslər üçün pul kisələri",
	"wallets_choice_multiple": "çoxlu işçisi olan bizneslər üçün pul kisələri",
	"wallets_choice_online": "onlayn bizneslər üçün pul kisələri",
	"wallets_choice_invoice": "faktura əsaslı bizneslər üçün pul kisələri",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Mövcud Square PoS terminalınız və ya onlayn mağaza inteqrasiyanız ilə Bitcoin ödənişlərini qəbul edə bilərsiniz. Bitcoin ödənişlərini qəbul etmək heç vaxt bu qədər asan olmamışdı.",
	"wallets_feature_bitcoin_only": "Yalnız Bitcoin pul kisəsi",
	"wallets_feature_no_info": "Məlumat tələb olunmur",
	"wallets_feature_in_person": "Yalnız şəxsən ödənişlər",
	"wallets_feature_settles_bitcoin": "100% Bitcoin ilə hesablanır",
	"wallets_feature_hybrid": "Hibrid pul kisəsi",
	"wallets_feature_info": "Biznes məlumatı tələb olunur",
	"wallets_feature_in_person_online": "Şəxsən və onlayn ödənişlər",
	"wallets_feature_settles_both": "Bitcoin və dollarda hesablama",
	"wallets_feature_multiple_employees": "Çoxlu işçi dəstəyi (BPT-lər)",
	"wallets_feature_self_hosted": "Öz hostinqi = 0% komissiya",
	"wallets_feature_online_store": "Onlayn mağaza inteqrasiyası",
	"wallets_feature_invoicing": "Pulsuz faktura proqramı",
	"wallets_get_wallet": "PUL KİSƏSİ AL"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Bitcoin Ticarətçi Xəritələri - Biznesinizi pulsuz siyahıya salın",
	"maps_header": "BITCOIN TİCARƏTÇİ XƏRİTƏLƏRİNDƏ SİYAHIYA DÜŞÜN VƏ DAHA ÇOX MÜŞTƏRİ QAZANIN",
	"maps_request_details": "Biznes məlumatlarınızı aşağıda daxil edin və biz sizi pulsuz olaraq Bitcoin ticarətçi xəritələrində siyahıya salacağıq. Bu, Bitcoinçilərin biznesinizi tapmasına və Bitcoin-lərini sizin biznesdə xərcləməsinə imkan verəcək!",
	"maps_view": "Xəritəyə burada baxın."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Biznesiniz 1-2 həftə ərzində Bitcoin ticarətçi xəritələrində siyahıya alınacaq.",
	"kit_success_2": "Xəritəyə burada baxın."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin Biznes Dəsti",
	"kit_header": "ÖZ BITCOIN BİZNES DƏSTİNİZİ ÇAP EDİN",
	"kit_request": "PULSUZ DƏSTİNİZİ SİFARİŞ EDİN",
	"kit_request_details": "Hər Bitcoin Biznes Dəstinə yerli biznesi Bitcoin qəbul etməyə asanlaşdırmaq üçün iki broşür daxildir.",
	"kit_country_global_print": "Qlobal — Öz dəstlərimi çap et",
	"kit_enter_address": "Poçt ünvanınızı daxil edin və biz sizə düz ağ zərfdə pulsuz Bitcoin Biznes Dəsti göndərəcəyik. Dəstiniz göndərildikdən sonra ünvan məlumatları silinir.",
	"kit_print_details": "Harada yaşamağınızdan asılı olmayaraq öz broşürlərinizi çap edə bilərsiniz! Heç bir şey çap etməkdən qaçınmaq üçün bizneslərə rəqəmsal biznes dəstimizi də göndərə bilərsiniz.",
	"kit_view_files": "FAYLLARA BAX",
	"kit_digital_kit": "RƏQƏMSal DƏSTİ",
	"kit_resources": "HƏR DƏSTİ BU PULSUZ RESURSLARA KEÇİD VERİR"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Bitcoin Biznes Dəstinizi 1-2 həftə ərzində düz ağ zərfdə alacaqsınız."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "'Burada Bitcoin Qəbul Edilir' etiketləri",
	"stickers_header": "PULSUZ 'BURADA BITCOIN QƏBUL EDİLİR' ETİKETLƏRİNİZİ ALIN",
	"stickers_request": "Pulsuz etiketlərinizi alın",
	"stickers_request_details": "Bu pulsuz 'Burada Bitcoin Qəbul Edilir' etiketləri ilə müştərilərinizə Bitcoin ödənişlərini qəbul etdiyinizi bildirin.",
	"stickers_country_global_print": "Qlobal — Öz etiketlərimi çap et",
	"stickers_request_instructions": "Düz ağ zərfdə üç 'Burada Bitcoin Qəbul Edilir' etiketi alacaqsınız. Biznesiniz üçün üçdən çox etiket lazımdırsa, bir neçə dəfə sifariş etməkdən çəkinməyin. Pulsuz etiketləriniz göndərildikdən sonra ünvan məlumatları silinir.",
	"stickers_print_details": "Harada yaşamağınızdan asılı olmayaraq öz 'Burada Bitcoin Qəbul Edilir' etiketlərinizi çap edə bilərsiniz! Etiket fayllarını və təlimatları görmək üçün aşağıda dilinizi seçin.",
	"stickers_request_language": "Dilinizi görmürsünüz? Yerli dilinizdə 'Burada Bitcoin Qəbul Edilir' etiket faylları sifariş etmək üçün aşağıdakı formanı doldurun."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Etiketlərinizi 1-2 həftə ərzində düz ağ zərfdə alacaqsınız. Hər zərf 3 etiket ehtiva edir. Biznesiniz üçün 3-dən çox etiket lazımdırsa, başqa bir paket sifariş etməkdən çəkinməyin!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Etiket faylınızı 3-4 həftə ərzində yaradıb dərc edəcəyik. Səbriniz üçün təşəkkür edirik!"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Bitcoin Qəbul Etmək Haqqında Tez-tez Verilən Suallar",
	"faq_description": "Biznesinizdə Bitcoin ödənişlərini qəbul etmək haqqında suallarınız var?",
	"faq_header": "BITCOIN ÖDƏNİŞLƏRİNİ QƏBUL ETMƏK HAQQINDA SUALLARINIZ VAR?",
	"faq_s1": "Bitcoin nədir?",
	"faq_s1_c1": "Bitcoin iki şeydir: rəqəmsal pul və kompüter şəbəkəsi.",
	"faq_s1_c2": "Bitcoin Şəbəkəsindən istifadə edərək birbaşa digər insanlara bitcoin (rəqəmsal pul) göndərə bilərsiniz.",
	"faq_s1_c3": "Bitcoin Şəbəkəsi banklar və ya kredit kartı şirkətləri kimi vasitəçilər və ya mərkəzi orqanlar olmadan işləyə bilir, buna görə onların əməliyyat komissiyalarından qaça bilərsiniz.",
	"faq_s1_c4": "Bitcoin əməliyyatları tez (10 dəqiqə) son hesablamaya çatır və heç vaxt geri qaytarıla bilməz, buna görə pulunuzun sizin pulunuz olduğunu bilərək rahat yata bilərsiniz.",
	"faq_s2": "Bitcoin biznesimə necə fayda verə bilər?",
	"faq_s2_c1": "Bitcoin daha aşağı komissiyalarla ödənişlər qəbul etməyə və daha çox müştəri əldə etməyə imkan verir. Bitcoin ödənişlərinin minimum olmadan aşağı komissiyaları var, ani hesablanır və geri ödəmə və fırıldaqçılığa qarşı müdafiəlidir.",
	"faq_s2_c2": "Bitcoin qəbul etmək pulsuzdur və biznesinizi Bitcoin ticarətçi xəritələrində siyahıya salmağa imkan verir ki, Bitcoin istifadəçiləri biznesinizi asanlıqla tapa bilsinlər.",
	"faq_s2_c3": "Bitcoin-in biznes üçün necə yaxşı olduğunun bütün yollarına baxın.",
	"faq_s3": "Bitcoin ödənişlərini necə qəbul edim?",
	"faq_s3_c1": "Bitcoin ödənişlərini qəbul etmək üçün yalnız pulsuz Bitcoin pul kisəsi lazımdır.",
	"faq_s3_c2": "Pul kisəsi bələdçimiz sizi tez və asanlıqla quraşdıracaq ki, bu gün Bitcoin qəbul etmənin üstünlüklərini açasınız!",
	"faq_s3_c3": "Pul Kisəsi Bələdçisinə Bax",
	"faq_s4": "Qəbul etdiyim Bitcoin ödənişlərini yerli valyutama çevirə bilərəmmi?",
	"faq_s4_c1": "Bəli! Hibrid pul kisəsi istifadə edərək, qəbul etdiyiniz Bitcoin ödənişlərini ödəniş alındıqda avtomatik olaraq yerli valyutanıza çevirə bilərsiniz.",
	"faq_s4_c2": "Pul kisəsi bələdçimiz sizi tez və asanlıqla quraşdırmağa kömək edə bilər.",
	"faq_s4_c3": "Qəbul etdiyiniz ödənişlərin bir hissəsini Bitcoin olaraq saxlamağı da seçə bilərsiniz. Bitcoin-də yığım etmənin bir çox üstünlükləri var:",
	"faq_s4_c4": "Bitcoin tam ehtiyat maliyyə sistemidir.",
	"faq_s4_c5": "Bitcoin-də inflyasiya yoxdur.",
	"faq_s4_c6": "Bu üstünlüklər Bitcoin-i uzunmüddətli pul saxlamaq üçün əla üsul edir.",
	"faq_s4_c7": "Bütün Bitcoin ödənişlərinizi dollara çevirməyi seçsəniz belə, daha çox potensial müştərilərə çatarkən daha aşağı komissiyalarla ödənişlər qəbul etmənin üstünlüklərini əldə edirsiniz.",
	"faq_s5": "Şəxsən Bitcoin ödənişlərini qəbul edə bilərəmmi?",
	"faq_s5_c1": "Bəli! Bitcoin pul kisəsi istifadə edərək şəxsən Bitcoin ödənişlərini qəbul etmək asandır.",
	"faq_s5_c2": "Pul kisəsi bələdçimiz biznesiniz üçün ən yaxşı Bitcoin pul kisəsini seçməyə kömək edə bilər.",
	"faq_s5_c3": "Pul Kisəsi Bələdçisinə Bax",
	"faq_s6": "Onlayn Bitcoin ödənişlərini qəbul edə bilərəmmi?",
	"faq_s6_c1": "Bəli! Mövcud onlayn mağazanızla onlayn Bitcoin ödənişlərini qəbul etmək asandır.",
	"faq_s6_c2": "Daha çox məlumat üçün pul kisəsi bələdçimizə baxın.",
	"faq_s7": "Müştərilərimə Bitcoin qəbul etdiyimi necə bildirə bilərəm?",
	"faq_s7_c1": "Biznesinizdə yerləşdirə biləcəyiniz pulsuz 'Burada Bitcoin Qəbul Edilir' etiketləri təklif edirik ki, müştəriləriniz Bitcoin qəbul etdiyinizi bilsinlər.",
	"faq_s7_c2": "Etiketlərinizi sifariş etmək üçün buraya klikləyin.",
	"faq_s7_c3": "Həmçinin biznesinizi pulsuz olaraq Bitcoin ticarətçi xəritələrində siyahıya sala bilərsiniz və Bitcoin-lərini qəbul edən bizneslərə xərcləmək istəyən milyonlarla Bitcoin istifadəçisinə tanınma əldə edə bilərsiniz.",
	"faq_s7_c4": "İndi siyahıya düşün.",
	"faq_s8": "Bitcoin qəbul etməklə necə daha çox müştəri əldə edə bilərəm?",
	"faq_s8_c1": "Bitcoin-lərini qəbul edən bizneslərə xərcləmək istəyən milyonlarla Bitcoin istifadəçisi var.",
	"faq_s8_c2": "Sadəcə Bitcoin ödənişlərini qəbul etməklə, biznesiniz pulsuz Bitcoin ticarətçi xəritələrində siyahıya salınaraq yeni potensial müştərilərə tanınma əldə edə bilər.",
	"faq_s8_c3": "İndi siyahıya düşün.",
	"faq_s9": "Bitcoin qəbul etmək nə qədər başa gəlir?",
	"faq_s9_c1": "Biznesinizdə Bitcoin qəbul etmək 100% pulsuzdur. Heç bir müqavilə və ya gizli komissiya yoxdur.",
	"faq_s9_c2": "Bu gün Bitcoin ödənişlərini qəbul etməyə başlamaq üçün pul kisəsi bələdçimizə baxın."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Bitcoin Biznes Mühasibatlığı Bələdçisi",
	"accounting_description": "Biznes mühasibatlığınızda Bitcoin ödənişlərini düzgün uçota almağı öyrənin.",
	"accounting_header": "BITCOIN MÜHASİBATLIQ BƏLƏDÇİSİ",
	"accounting_s1_c1": "Bitcoin qəbul etmənin daha aşağı komissiyalarla ödənişlər qəbul etmək və daha çox müştəri əldə etmək kimi bir çox üstünlükləri var.",
	"accounting_s1_c2": "Pul Kisəsi Bələdçimizdən Hibrid Pul Kisəsi istifadə edirsinizsə və qəbul etdiyiniz Bitcoin-in 100%-ni avtomatik olaraq dollarlara satırsınızsa, mövcud mühasibatlığınızda heç bir dəyişiklik etmək lazım deyil.",
	"accounting_s1_c3": "Pul Kisəsi Bələdçisinə Bax.",
	"accounting_s1_c4": "Lakin, qəbul etdiyiniz Bitcoin ödənişlərinin bir hissəsini Bitcoin olaraq saxlayırsınızsa, mühasibatlığınız üçün bir neçə detala nəzarət etməlisiniz. Bu ilk baxışda qorxuducu görünə bilər, lakin əslində olduqca sadədir.",
	"accounting_s1_c5": "Qeyd: bu bələdçi yalnız məlumat məqsədlidir və vergi məsləhəti hesab edilmir.",
	"accounting_s1_c6": "Vergi məsləhətinə ehtiyacınız varsa, Bitcoin mühasibatlığında ixtisaslaşan mühasibatlıq firması Satoshi Pacioli Mühasibatlıq Xidmətlərini tövsiyə edirik.",
	"accounting_s2": "MAYA DƏYƏRİNİZİN İZLƏNMƏSİ",
	"accounting_s2_c1": "Maya dəyərinizi izləmək dollarlar və Bitcoin üçün mühasibatlıq arasındakı ən böyük fərq olacaq. Biznesinizə tamamilə Bitcoin baxımından baxsanız belə, vergiləriniz üzrə hər əməliyyatın dollar dəyərini bildirməlisiniz.",
	"accounting_s2_c2": "QuickBooks istifadə edirsinizsə, Bitcoin Sync plaqini istifadə edərək bunu avtomatik edə bilərsiniz.",
	"accounting_s2_c3": "QuickBooks istifadə etmirsinizsə, Bitcoin mühasibatlığında ixtisaslaşan mühasibatlıq firması Satoshi Pacioli Mühasibatlıq Xidmətlərini tövsiyə edirik.",
	"accounting_s2_c4": "Bunu əl ilə etmək üçün, sadəcə qəbul etdiyiniz Bitcoin miqdarını və həmin gün Bitcoin əməliyyatının dollar dəyərini izləməlisiniz.",
	"accounting_s2_c5": "Bitcoin-in cari dollar qiymətinə burada baxa bilərsiniz.",
	"accounting_s2_c6": "Bu məlumatı Excel cədvəlində izləyin və mühasibyə verin.",
	"accounting_s2_c7": "Bu məlumatları avtomatik olaraq Excel-ə idxal edə bilərsiniz.",
	"accounting_s2_c8": "Keçmiş günlərdə Bitcoin-in tarixi dollar qiymətinə də baxa bilərsiniz, buna görə bunu hər gün etmək məcburiyyətində deyilsiniz.",
	"accounting_s3": "BITCOIN-İNİZİ XƏRCLƏMƏ VƏ YA SATMA",
	"accounting_s3_c1": "Pul Kisəsi Bələdçimizdən Hibrid Pul Kisəsi istifadə edirsinizsə və qəbul etdiyiniz Bitcoin-in 100%-ni avtomatik olaraq dollarlara satırsınızsa, mövcud mühasibatlığınızda heç bir dəyişiklik etmək lazım deyil.",
	"accounting_s3_c2": "Pul Kisəsi Bələdçisinə Bax.",
	"accounting_s3_c3": "Qəbul etdiyiniz Bitcoin-in bir hissəsini bir müddət saxladıqdan sonra xərcləmək və ya satmaq qərarına gəlsəniz, sadəcə maya dəyərinizi izləyən Excel cədvəlinə satdığınız qiyməti əlavə etməlisiniz.",
	"accounting_s3_c4": "Məsələn, yanvarın 1-də 100 dollar dəyərində Bitcoin qəbul etmisinizsə və fevralın 1-də 110 dollarlıq yeni dəyərdə satmaq və ya xərcləmək qərarına gəlmisinizsə, mühasibatlığınızda 10 dollarlıq kapital qazancı qeyd etməlisiniz.",
	"accounting_s3_c5": "Bu, əks istiqamətdə də işləyə bilər. Məsələn, yanvarın 1-də 100 dollar dəyərində Bitcoin qəbul etmisinizsə və fevralın 1-də 90 dollarlıq yeni dəyərdə satmaq və ya xərcləmək qərarına gəlmisinizsə, mühasibatlığınızda 10 dollarlıq kapital itkisi qeyd etməlisiniz.",
	"accounting_s4": "DAHA ÇOXKÖMƏK LAZIMDIR",
	"accounting_s4_c1": "Bitcoin-i biznes mühasibatlığınıza inteqrasiya etmək üçün daha çox kömək lazımdırsa, Bitcoin mühasibatlığında ixtisaslaşan mühasibatlıq firması Satoshi Pacioli Mühasibatlıq Xidmətlərini tövsiyə edirik.",
	"accounting_s4_c2": "Satoshi Pacioli Mühasibatlıq Xidmətləri haqqında daha çox öyrənin."
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Öz Bitcoin Biznes Dəstinizi Çap Edin",
	"english_bbk_files_description": "Buklet fayllarını buradan endirin.",
	"english_header": "ÖZ İNGİLİS DİLİNDƏ BITCOIN BİZNES DƏSTİ BROŞÜRLƏR Çap Edin"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "İngiliscə 'Burada Bitcoin Qəbul Edilir' Etiket Faylları",
	"english_biz_sticker_files_description": "Öz 'Burada Bitcoin Qəbul Edilir' etiketlərini çap etmək üçün ingiliscə etiket fayllarını endirin.",
	"english_header": "İNGİLİSCƏ 'BURADA BITCOIN QƏBUL EDİLİR' ETİKET FAYLLARINI ENDİRİN"
});

console.log('\nDone! Business files created for Azerbaijani (az).');
