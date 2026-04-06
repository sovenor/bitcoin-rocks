/**
 * Creates Azerbaijani (az) translation files for remaining content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'az';
const today = '2026-04-06';
const meta = {"@metadata":{"authors":["Satoshi"],"last-updated":today,"locale":lang}};
function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// bank-runs
writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin-də Bank Qaçışları Yoxdur",
	"bank_runs_header": "BITCOIN-DƏ BANK QAÇIŞLARI YOXDUR",
	"bank_runs_header_2": "AMMA BANKINIZDA OLA BİLƏR",
	"bank_runs_what": "BANK QAÇIŞI NƏDİR?",
	"bank_runs_what_content_1": "Bank qaçışı çox sayda insanın eyni vaxtda bankdan pullarını çıxarmağa çalışdıqda baş verir.",
	"bank_runs_what_content_2": "Bankların çıxışlara uyğun kifayət qədər pulu yoxdursa, bank qaçışı baş verdikdə tamamilə çökə bilərlər.",
	"bank_runs_how": "BANK QAÇIŞLARI NECƏ BAŞ VERİR?",
	"bank_runs_how_content_1": "Bank sistemimiz 'qismən ehtiyat' sistemidir, yəni banklar sadəcə pulunuzu seyfda saxlayıb xərcləməyinizi və ya çıxarmanızı gözləmir.",
	"bank_runs_how_content_2": "Əvəzinə, bankınız pulunuzu götürüb borc verir və ya investisiya edir. Bu, pulunuzu uzun müddətə bloklaya bilər, baxmayaraq ki, bank sizə istənilən vaxt pulunuzu çıxarmaq imkanı vəd edir.",
	"bank_runs_how_content_3": "Bəs bank pulunuzu artıq borc verdikdən və ya investisiya etdikdən sonra pulunuzu çıxarmağa çalışsanız nə olacaq?",
	"bank_runs_how_content_4": "Çıxarmağa çalışan tək siz olsanız problem deyil. Bank sadəcə başqasının pulunu götürüb sizə verəcək. Bəs çox sayda insan eyni vaxtda çıxarmağa çalışanda nə olur?",
	"bank_runs_how_content_5": "ABŞ-da bir çox insan 2023-cü ilin martında Silicon Valley Bank-da qaçış olduqda bunu öyrəndi.",
	"bank_runs_how_content_6": "Bank müştərilərinin pulunu 30 ilə qədər bağlı olan dövlət istiqrazlarına investisiya etmişdi. Daha da pisi, bu istiqrazların dəyəri son vaxtlar kəskin şəkildə düşmüşdü, buna görə Silicon Valley Bank əmanətçilərinin pulunu almaq üçün istiqrazları sata bilməzdi. Onlar müflis idilər. Əmanətçilərinin çıxışlarına uyğun kifayət qədər pulları yox idi.",
	"bank_runs_how_content_7": "Daha çox insan öyrəndikcə, problem daha da pisləşdi. Daha çox çıxış sorğusu gəldi, lakin çoxu emal olunmadı. Minlərlə biznes bankın çöküşünə görə işçilərinə maaş verə bilməyəcəklərini anladılar.",
	"bank_runs_how_content_8": "FDIC müdaxilə edib əmanətçiləri tam ödəməyə razılaşdı. Problem həll oldu? Tam deyil...",
	"bank_runs_fdic": "FDIC SIĞORTASI PULUMU QORUYUR?",
	"bank_runs_fdic_content_1": "FDIC sığortası bank çökdükdə bank əmanətçilərini qorumaq üçün nəzərdə tutulub. Əmanətlər hər əmanətçi üçün 250,000 dollara qədər sığortalanır. Əla səslənir, elə deyilmi?",
	"bank_runs_fdic_content_2": "Tam deyil. Bank çöksə, FDIC pulu haradan alır? Onların 125 milyard dollarlıq sığorta fondu var.",
	"bank_runs_fdic_content_3": "Bu, sığorta etdikləri əmanət miqdarı ilə müqayisə edənə qədər çox pul kimi görünür: demək olar ki, 10 trilyon və ya 10,000 milyard dollar.",
	"bank_runs_fdic_content_4": "FDIC hətta öz veb saytında göstərir ki, sığorta fondunda əmanətlərin yalnız 1%-dən bir az artığını əhatə etmək üçün kifayət qədər pulu var.",
	"bank_runs_fdic_content_5": "FDIC sığorta fondunu aşan bank çöküşü halında, ABŞ hökumətinin əmanətçiləri tam ödəmək üçün pul çap etməsi ehtimal olunur (lakin zəmanət verilmir).",
	"bank_runs_fdic_content_6": "Lakin pul çapı inflyasiyaya səbəb olur, buna görə bu əla həll deyil.",
	"bank_runs_safe": "QİSMƏN EHTİYAT İSTİFADƏ ETMƏYƏN BANKLAR VAR?",
	"bank_runs_safe_content_1": "Bəzi banklar əmanətçi fondlarını borc verməyən və ya investisiya etməyən 'təhlükəsiz banklar' olmağa çalışmışdır.",
	"bank_runs_safe_content_2": "Bu təhlükəsiz banklarda bank qaçışı riski sıfır olsa da, müraciətləri Federal Ehtiyat tərəfindən rədd edilmişdir. Bu o deməkdir ki, onlar qanuni olaraq bank kimi fəaliyyət göstərə bilməzlər.",
	"bank_runs_safe_content_3": "Fəaliyyət göstərməkdən bloklandıqları üçün, bu gün qismən ehtiyat istifadə etməyən heç bir bank yoxdur.",
	"bank_runs_safe_content_4": "Xoşbəxtlikdən, öz bankınız olmaqla qismən ehtiyat sistemindən çıxmaq üçün bir yol var. Xeyr, döşəyin altına nağd pul yığmaqdan danışmırıq.",
	"bank_runs_safe_content_5": "Nağd pul yığmaq hələ də inflyasiyaya həssasdır.",
	"bank_runs_safe_content_6": "Biz Bitcoin haqqında danışırıq: öz bankınız olmağa imkan verən yeni maliyyə sistemi.",
	"bank_runs_protect": "BITCOIN MƏNİ BANK QAÇIŞLARINDAN QORUYA BİLƏR?",
	"bank_runs_protect_content_1": "Bəli, Bitcoin tam ehtiyat maliyyə sistemidir.",
	"bank_runs_protect_content_2": "Bitcoin-inizi öz pul kisənizə çıxardığınız müddətcə bank qaçışları Bitcoin-də mümkün deyil. Bitcoin-inizi birjada və ya Bitcoin ETF kimi qabıqda saxlamayın.",
	"bank_runs_protect_content_3": "Öz pul kisənizə necə çıxaracağınızı öyrənmək üçün sadə Bitcoin Pul Kisəsi Bələdçimizə baxın.",
	"bank_runs_protect_content_4": "Bitcoin ilə nəhayət pulunuzu idarə edə bilərsiniz."
});

// wallets
writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Bitcoin Pul Kisəsi Bələdçisi",
	"wallets_description": "Əhəmiyyətli cəhətlərdən fərqlənən bir çox fərqli Bitcoin pul kisələri var. Sadə suallar verərək pul kisəsinin sizin üçün doğru olub olmadığını müəyyən edə bilərsiniz.",
	"wallets_header": "BITCOIN-İNİZİ NECƏ TƏHLÜKƏSİZ SAXLAMAQ OLAR",
	"wallets_s1_c1": "Bitcoin pul kisələri bir-biri ilə uyğundur, buna görə hansı pul kisəsini istifadə etsələr də, hər kəsə Bitcoin göndərə bilərsiniz.",
	"wallets_s1_c2": "Əhəmiyyətli cəhətlərdən fərqlənən bir çox fərqli Bitcoin pul kisələri var. Sadə suallar verərək pul kisəsinin sizin üçün doğru olub olmadığını müəyyən edə bilərsiniz:",
	"wallets_question_1": "ÖZÜNƏ SAXLAMA PUL KİSƏSİDİR?",
	"wallets_s2_c1": "Bitcoin-in innovasiyalarından biri onu bank kimi vasitəçiyə güvənmədən saxlama imkanıdır.",
	"wallets_s2_c2": "Bitcoin-inizi birjada və ya ETF-də saxlayırsınızsa, bitcoin-in azadlıq üstünlüklərini itirirsiniz.",
	"wallets_s2_c3": "Özünə saxlama pul kisələri Bitcoin-in tam gücünü açır: azadlıq pulu.",
	"wallets_s2_c4": "Özünə saxlama pul kisəsi ilə pulunuzu xərcləmək və ya köçürmək qabiliyyətinə yalnız siz sahibsiniz. Özünə saxlama pul kisəsi istifadə etdikdə heç kim pulunuzu göndərməyinizi və ya almanızı dayandıra bilməz.",
	"wallets_s2_c5": "Özünə saxlama pul kisələrinə qeyri-vasitəçi pul kisələri də deyilir.",
	"wallets_s3_c1": "Vasitəçi pul kisələri pulunuzu idarə etmədiyiniz pul kisələridir.",
	"wallets_s3_c2": "Bu pul kisələri bank sisteminə daha çox bənzəyir, burada pulunuza çıxış vermək üçün üçüncü tərəfə etibar etməlisiniz. Bitcoin-iniz birjadadırsa, vasitəçi pul kisəsi istifadə edirsiniz.",
	"wallets_s3_c3": "Bitcoin ETF almısınızsa, özünə saxlamaya çıxarmağa imkan verməyən vasitəçi pul kisəsi istifadə edirsiniz.",
	"wallets_s3_c4": "Vasitəçi pul kisələri rahat görünə bilər, lakin vasitəçinin istənilən vaxt bütün istifadəçi fondlarını oğurlamaq texniki qabiliyyəti var.",
	"wallets_s3_c5": "Açarlarınız deyil, sikkələriniz deyil!",
	"wallets_question_2": "İSTİ VƏ YA SOYUQDUR?",
	"wallets_s4_c1": "Soyuq pul kisələri Bitcoin-inizin açarlarını heç vaxt İnternetə çıxarmayan şəkildə saxlayır.",
	"wallets_s4_c2": "Bu, oğrunun Bitcoin-inizi oğurlamağa çalışa biləcəyi hücum vektorlarını əhəmiyyətli dərəcədə məhdudlaşdırır və tez-tez köçürülməsinə ehtiyac olmayan böyük məbləğlər üçün ən yaxşısıdır.",
	"wallets_s4_c3": "Soyuq pul kisəsini uzunmüddətli yığım hesabı, soyuq saxlama kimi düşünə bilərsiniz.",
	"wallets_s5_c1": "İsti pul kisələri Bitcoin-inizin açarlarını telefonunuz kimi İnternetə bağlı cihazda saxlayır.",
	"wallets_s5_c2": "İsti pul kisələri ümumiyyətlə təhlükəsiz hesab olunur, lakin soyuq pul kisələrindən daha çox təhlükəsizlik zəifliyi ola bilər.",
	"wallets_s5_c3": "İsti pul kisəsini fiziki pul kisəsi kimi düşünə bilərsiniz. Bütün yığımınızı pul kisənizdə saxlamazsınız, lakin bir az xərclik saxlayarsınız.",
	"wallets_s5_c4": "İsti pul kisələri bütün yığımınızı soyuq saxlamadan çıxarmalı olmadan Bitcoin-inizi xərcləməyi asanlaşdırır.",
	"wallets_question_3": "BƏRPA İFADƏMİ NECƏ EHTİYAT NÜSXƏSİNİ ÇIXARACAĞAM?",
	"wallets_s6_c1": "Bitcoin pul kisənizi quraşdırdığınızda, cihazınız bərpa ifadəsi yaradacaq. Bu bərpa ifadəsi (həmçinin toxum ifadəsi adlanır) 12 və ya 24 sözdən ibarətdir.",
	"wallets_s6_c2": "Pul kisənizə çıxışınızı itirsəniz və ya cihazınız işləməsini dayandırsa, Bitcoin-inzə yenidən çıxış əldə etmək üçün bu bərpa ifadəsini yeni pul kisəsinə daxil edə bilərsiniz.",
	"wallets_s6_c3": "Əksər pul kisələri bərpa ifadənizi yazmaq üçün kağız vərəqi ehtiva edir, lakin çox insanlar bu ifadəni kağız əvəzinə polad üzərində ehtiyat nüsxə çıxarmağı üstün tutur. Bu, yanğın və ya sel kimi təbii fəlakət zamanı bərpa ifadənizi itirmə ehtimalını azaldır.",
	"wallets_s6_c4": "Jameson Lopp sizin üçün doğru olanı seçməyinizə kömək etmək üçün 70 polad ehtiyat dəstini sınaqdan keçirib.",
	"wallets_s6_c5": "Jameson-un metal Bitcoin ehtiyat bələdçisinə burada baxın.",
	"wallets_s6_c6": "Və ya Bitcoin pul kisəsi seçimlərini araşdırmaq üçün aşağı sürüşdürməyə davam edin.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN",
	"wallets_coldcard_mk5": "COLDCARD MK5",
	"wallets_coldcard_q": "COLDCARD Q",
	"wallets_blockstream_jade": "BLOCKSTREAM JADE",
	"wallets_foundation_passport": "FOUNDATION PASSPORT",
	"wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Lightning Pul Kisəsi Bələdçimizi axtarırsınız?",
	"wallets_starter_wallet": "Əla başlanğıc pul kisəsi",
	"wallets_mobile_app": "Mobil tətbiq",
	"wallets_2fa_support": "2FA dəstəyi",
	"wallets_air_gap_mode": "Hava boşluğu rejimi",
	"wallets_air_gap_camera": "Hava boşluğu rejimi + kamera",
	"wallets_bitcoin_only": "Yalnız Bitcoin",
	"wallets_security_features": "Çoxlu təhlükəsizlik funksiyaları",
	"wallets_free": "100% pulsuz",
	"wallets_coldcard_mk5_costs": "Qiyməti $189",
	"wallets_coldcard_q_costs": "Qiyməti $289",
	"wallets_blockstream_jade_costs": "Qiyməti $79",
	"wallets_foundation_passport_costs": "Qiyməti $199",
	"wallets_seedsigner_costs": "Hissələrin qiyməti $50",
	"wallets_very_affordable": "Çox sərfəli",
	"wallets_pair_with_phone": "Telefonunuzla cütləyin",
	"wallets_battery": "Şarj olunan batareya",
	"wallets_build_your_own": "Özünüz qurun",
	"wallets_qwerty_keyboard": "Tam QWERTY klaviatura",
	"wallets_qr_scanner": "QR kod skaneri"
});

// buy
writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Bitcoin Necə Almaq Olar - Addım-addım Bələdçi",
	"buy_header": "BITCOIN NECƏ ALMAQ OLAR",
	"buy_intro_c1": "İlk dəfə Bitcoin almaq çətin görünə bilər, lakin addımlara ayırdıqda əslində olduqca sadədir.",
	"buy_intro_c2": "Bu bələdçi sizi təhlükəsiz Bitcoin almaq və öz pul kisənizdə saxlamaq prosesindən keçirəcək.",
	"buy_step_1_header": "ADDIM 1: ÖLKƏNİZİ SEÇİN",
	"buy_step_1_description": "Fərqli ölkələrdə fərqli Bitcoin alma seçimləri mövcuddur. Sizin üçün ən yaxşı seçimləri görmək üçün ölkənizi seçin.",
	"buy_search_countries": "Ölkənizi axtarın",
	"buy_country_united_states": "ABŞ","buy_country_australia": "Avstraliya","buy_country_austria": "Avstriya","buy_country_belgium": "Belçika","buy_country_brazil": "Braziliya","buy_country_canada": "Kanada","buy_country_france": "Fransa","buy_country_germany": "Almaniya","buy_country_ireland": "İrlandiya","buy_country_italy": "İtaliya","buy_country_netherlands": "Hollandiya","buy_country_new_zealand": "Yeni Zelandiya","buy_country_spain": "İspaniya","buy_country_united_kingdom": "Birləşmiş Krallıq","buy_country_argentina": "Argentina","buy_country_chile": "Çili","buy_country_colombia": "Kolumbiya","buy_country_costa_rica": "Kosta Rika","buy_country_czech_republic": "Çexiya","buy_country_denmark": "Danimarka","buy_country_el_salvador": "El Salvador","buy_country_estonia": "Estoniya","buy_country_finland": "Finlandiya","buy_country_greece": "Yunanıstan","buy_country_guatemala": "Qvatemala","buy_country_hong_kong": "Honq Konq","buy_country_hungary": "Macarıstan","buy_country_iceland": "İslandiya","buy_country_india": "Hindistan","buy_country_israel": "İsrail","buy_country_japan": "Yaponiya","buy_country_latvia": "Latviya","buy_country_lithuania": "Litva","buy_country_luxembourg": "Lüksemburq","buy_country_malta": "Malta","buy_country_mexico": "Meksika","buy_country_norway": "Norveç","buy_country_panama": "Panama","buy_country_poland": "Polşa","buy_country_portugal": "Portuqaliya","buy_country_romania": "Rumıniya","buy_country_singapore": "Sinqapur","buy_country_slovakia": "Slovakiya","buy_country_slovenia": "Sloveniya","buy_country_south_africa": "Cənubi Afrika","buy_country_south_korea": "Cənubi Koreya","buy_country_sweden": "İsveç","buy_country_switzerland": "İsveçrə","buy_country_thailand": "Tayland","buy_country_turkey": "Türkiyə","buy_country_ukraine": "Ukrayna","buy_country_uruguay": "Uruqvay",
	"buy_step_2_header": "ADDIM 2: ÖDƏNİŞ METODUNUZU SEÇİN",
	"buy_step_2_description": "Bitcoin almağın iki əsas yolu var: bank köçürməsi və ya nağd pulla. Hər birinin fərqli üstünlükləri var.",
	"buy_method_bank_transfer": "BANK KÖÇÜRMƏSİ","buy_method_bank_fast": "Tez və Asan","buy_method_bank_less_private": "Daha Az Gizli","buy_method_bank_description": "Bank köçürmələri Bitcoin almağın ən geniş yayılmış yoludur. Onlar tez, rahat və adətən daha aşağı komissiyalara sahibdir.","buy_method_choose_bank": "Bank Köçürməsini Seç",
	"buy_method_cash": "NAĞD PUL","buy_method_cash_private": "Daha Gizli","buy_method_cash_limited": "Məhdud Seçimlər","buy_method_cash_description": "Nağd pul alışları daha çox gizlilik təklif edir, lakin daha az seçimə sahibdir və birinlə görüşmə və ya Bitcoin bankomatı istifadə etmə tələb edə bilər.","buy_method_choose_cash": "Nağd Pulu Seç",
	"buy_step_3_header": "ADDIM 3: ALIŞ SEÇİMLƏRİ","buy_step_3_description": "Ölkəniz və ödəniş metodunuz üçün ən yaxşı Bitcoin alma seçimləri:","buy_platform_recommended": "TÖVSİYƏ OLUNAN",
	"buy_platform_strike_description": "Strike aşağı komissiyalar və ani Lightning Şəbəkəsi dəstəyi ilə Bitcoin almağın ən tez və asan yoludur.","buy_platform_swan_description": "Swan Bitcoin yalnız Bitcoin xidmətləri, dollar-orta-dəyər alışı və təhsil resursları ilə ixtisaslaşır.","buy_platform_river_description": "River təhsil və təhlükəsizliyə fokuslanaraq Bitcoin alışı, mədənçiliyi və saxlama xidmətləri təklif edir.","buy_platform_coinsquare_description": "Coinsquare güclü tənzimləyici uyğunluq və müştəri dəstəyi ilə Kanada Bitcoin birjasıdır.","buy_platform_kraken_description": "Kraken qabaqcıl ticarət funksiyaları və güclü təhlükəsizliyi olan köklü Bitcoin birjasıdır.","buy_platform_atm_description": "Bitcoin bankomatları nağd pulla ani Bitcoin almağa imkan verir. Coin ATM Radar istifadə edərək yaxınlığınızdakını tapın.","buy_platform_bisq_description": "Bisq KYC olmadan gizli Bitcoin ticarətinə imkan verən mərkəzsizləşdirilmiş nəfər-nəfərə birjadır.",
	"buy_platform_feature_instant": "Ani alışlar","buy_platform_feature_low_fees": "Aşağı komissiyalar","buy_platform_feature_lightning": "Lightning Şəbəkəsi","buy_platform_feature_dca": "Dollar-orta-dəyər alışı","buy_platform_feature_education": "Təhsil resursları","buy_platform_feature_withdrawal": "Asan çıxış","buy_platform_feature_mining": "Bitcoin mədənçiliyi","buy_platform_feature_custody": "Saxlama xidmətləri","buy_platform_feature_canadian": "Kanada fokuslu","buy_platform_feature_regulated": "Tənzimlənən birja","buy_platform_feature_support": "Müştəri dəstəyi","buy_platform_feature_established": "Köklü platforma","buy_platform_feature_security": "Güclü təhlükəsizlik","buy_platform_feature_advanced": "Qabaqcıl funksiyalar","buy_platform_feature_cash": "Nağd alışlar","buy_platform_feature_anonymous": "Daha anonim","buy_platform_feature_p2p": "Nəfər-nəfərə","buy_platform_feature_private": "Gizli ticarət","buy_platform_feature_decentralized": "Mərkəzsizləşdirilmiş",
	"buy_platform_relai_description": "Relai Avropa istifadəçiləri üçün özünə saxlama pul kisəsi, avto-investisiya funksiyaları və aşağı komissiyaları olan İsveçrə Bitcoin-only tətbiqidir.","buy_platform_feature_bitcoin_only": "Yalnız Bitcoin","buy_platform_feature_self_custody": "Özünə saxlama pul kisəsi","buy_platform_feature_auto_invest": "Avto-investisiya planları","buy_platform_feature_european": "Avropa fokuslu",
	"buy_step_4_header": "ADDIM 4: BITCOIN-İNİZİ TƏHLÜKƏSİZ SAXLAYIN","buy_step_4_c1": "Bitcoin aldıqdan sonra ən vacib addım onu gizli açarları idarə etdiyiniz öz pul kisənizə köçürməkdir.","buy_step_4_c2": "Bitcoin-i birjada saxlamaq risklidir, çünki əslində Bitcoin-ə sahib deyilsiniz - birja sahibdir.","buy_step_4_c3": "Öz gizli açarlarınızı idarə etdiyiniz zaman Bitcoin-inizin həqiqi sahibisiniz və heç kim onu sizdən ala bilməz.","buy_step_4_c4": "Ehtiyaclarınız üçün doğru Bitcoin pul kisəsini necə seçəcəyinizi öyrənin:","buy_cta_wallets": "Bitcoin Pul Kisəsi Bələdçimizə Baxın"
});

// lightning
writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Bitcoin Lightning Pul Kisəsi Bələdçisi",
	"lightning_description": "Lightning pul kisələri şəxsi suverenliyinizi qoruyarkən Bitcoin-i tez və ucuz göndərməyə imkan verir.",
	"lightning_header": "LIGHTNING PUL KİSƏSİ BƏLƏDÇİSİ",
	"lightning_s1_c1": "Lightning Bitcoin ödənişlərini tez və ucuz göndərməyə imkan verir.",
	"lightning_s1_c2": "Lightning istifadə etmənin güzəştlərlə gəldiyini bilmək vacibdir. Daha tez, daha ucuz Bitcoin ödənişləri müqabilində tez-tez bəzi təhlükəsizlikdən güzəşt edirsiniz.",
	"lightning_s1_c3": "Ümumiyyətlə, Lightning yalnız kiçik məbləğlərla istifadə olunmalıdır. Böyük məbləğləri yalnız avadanlıq pul kisəsində saxlamalısınız.",
	"lightning_s1_c4": "Daha çox məlumat üçün Avadanlıq Pul Kisəsi Bələdçimizə baxın.",
	"lightning_s1_c5": "Bütün Lightning pul kisələri eyni deyil. Sadə bir sual verərək sizin üçün doğru güzəşt balansına sahib pul kisəsini müəyyən edə bilərsiniz:",
	"lightning_question_1": "MƏNİM ÜÇÜN HANSI GÜZƏŞT BALANSI DOĞRUDUR?",
	"lightning_s2_c1": "Bitcoin-in innovasiyalarından biri onu bank kimi vasitəçiyə güvənmədən saxlama imkanıdır. Özünə saxlama pul kisələri Bitcoin-in tam gücünü açır.",
	"lightning_s2_c2": "Özünə saxlama pul kisəsi ilə pulunuzu xərcləmək və ya köçürmək qabiliyyətinə yalnız siz sahibsiniz. Heç kim sizi dayandıra, senzura edə və ya sizdən oğurlaya bilməz. Bunlara qeyri-vasitəçi pul kisələri də deyilir.",
	"lightning_s2_c3": "Lightning-i istifadə etmənin ən suverenlik yolu öz qovşağınızı işlətməkdir.",
	"lightning_s2_c4": "Bu bələdçi öz qovşağınızı tələb etməyən sadə Lightning pul kisələrinə fokuslanır.",
	"lightning_s2_c5": "Qeyri-vasitəçi Lightning pul kisəsi istifadə etsəniz belə, hələ də pul kisəsi yaradıcısına zərərli tətbiq yeniləməsi göndərməyəcəyinə və fondlarınızı oğurlamayacağına etibar etdiyinizi bilmək vacibdir.",
	"lightning_s3_c1": "Vasitəçi pul kisələri pulunuzu idarə etmədiyiniz pul kisələridir.",
	"lightning_s3_c2": "Bu pul kisələri pulunuza çıxış vermək üçün üçüncü tərəfə etibar etməli olduğunuz bank sisteminə daha çox bənzəyir. Bitcoin-iniz birjadadırsa, vasitəçi pul kisəsi istifadə edirsiniz.",
	"lightning_s3_c3": "Vasitəçi pul kisələri rahat görünə bilər, lakin vasitəçinin istənilən vaxt bütün istifadəçi fondlarını oğurlamaq texniki qabiliyyəti var.",
	"lightning_s3_c4": "Bəzi insanlar istifadə asanlığına görə kiçik bitcoin məbləğləri üçün vasitəçi Lightning pul kisələrini üstün tutur. Sadəcə unutmayın: açarlarınız deyil, sikkələriniz deyil!",
	"lightning_question_2": "PUL KİSƏNİZİ SEÇİN",
	"lightning_s4_c1": "Bütün bunları nəzərə alaraq, indi sizin üçün doğru güzəşt balansına sahib lightning pul kisəsini seçə bilərsiniz.",
	"phoenix": "PHOENIX","breez": "BREEZ","mutiny_wallet": "MUTINY WALLET","wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Çoxlu funksiyalar","lightning_mobile_app": "Mobil tətbiq","lightning_free": "100% pulsuz","lightning_merchants": "Ticarətçilər üçün əla","lightning_starter": "Əla başlanğıc pul kisəsi","lightning_browser": "Brauzer əsaslı","lightning_custodial": "Tam vasitəçi pul kisəsi","lightning_cta_hardware": "Bitcoin Avadanlıq Pul Kisəsi Bələdçimizi axtarırsınız?"
});

// stickers
writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "bitcoin.rocks-dan pulsuz Bitcoin etiketləri",
	"stickers_description": "Ətrafınızdakıları Bitcoin-ə yönəltmək üçün ictimai yerə bitcoin etiketi yapışdırın.",
	"stickers_header": "PULSUZ BITCOIN ETİKETLƏRİ",
	"stickers_choose_header": "ETİKET PAKETİNİZİ SEÇİN",
	"stickers_choose_c1": "Missiyamız ictimai yerlərdə Bitcoin etiketləri yapışdıraraq daha çox insanı Bitcoin-ə yönəltməyinizə kömək etməkdir. Bütün etiketlərimizdə bu mövzularda təhsil səhifələrinə keçid verən QR kodları var:",
	"stickers_choose_c2": "Bitcoin","stickers_choose_c3": "inflyasiya","stickers_choose_c4": "Aşağıda etiket paketinizi seçin",
	"stickers_text_pack": "MƏTN PAKETİ","stickers_signs_pack": "NİŞANLAR PAKETİ",
	"stickers_instructions_1": "Poçt ünvanınızı daxil edin və biz sizə poçtla pulsuz Bitcoin Etiket Paketi göndərəcəyik! Etiketləriniz düz ağ zərfdə göndəriləcək.",
	"stickers_instructions_2": "Pulsuz etiketləriniz göndərildikdən sonra ünvan məlumatları silinir.",
	"stickers_share_header": "ETİKET YERLƏRİNİZİ PAYLAŞIN",
	"stickers_share_c1": "Nostr-da etiket yerlərinizi bizimlə paylaşın və başqalarının etiketlərini harada yapışdırdığını görün.",
	"stickers_btn_share_on_nostr": "NOSTR-DA PAYLAŞ","stickers_btn_what_is_nostr": "NOSTR NƏDİR?",
	"stickers_flyers_link_before": "Eyni zamanda ","stickers_flyers_link_text": "Bitcoin vərəqələri","stickers_flyers_link_after": " çap edin və asın ki, daha çox insanı Bitcoin-ə yönəldəsiniz.",
	"stickers_country_global_print": "Qlobal — Öz etiketlərimi çap et","stickers_country_global_order": "Qlobal — Toplu sifariş",
	"placeholder_name_optional": "Ad (isteğe bağlı)","placeholder_address_line_1": "Ünvan Sətri 1","placeholder_address_line_2": "Ünvan Sətri 2 (isteğe bağlı)","placeholder_city": "Şəhər","placeholder_state": "Ştat","placeholder_province": "Vilayət","placeholder_zip_code": "Poçt İndeksi","placeholder_postal_code": "Poçt Kodu","placeholder_language": "Dil","placeholder_which_stickers": "Hansı etiketlər?","placeholder_email_optional": "Xəbərdar olmaq üçün e-poçtunuzu daxil edin (isteğe bağlı)"
});

// postcards
writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "bitcoin.rocks-dan pulsuz Bitcoin Açıqçaları",
	"postcards_description": "Pulsuz Bitcoin Açıqça Paketi əldə edin və tanıdığınız biri ilə Bitcoin paylaşın.",
	"postcards_header": "AÇIQÇA PROQRAMI BAĞLIDIR",
	"postcards_program_closed_message": "Pulsuz Bitcoin açıqça proqramımız sona çatmışdır. Poçtla Bitcoin təhsilini yaymaqda iştirak edən hər kəsə təşəkkür edirik!",
	"postcards_sticker_alternative_header": "ƏVƏZİNƏ PULSUZ BITCOIN ETİKETLƏRİ ALIN",
	"postcards_sticker_alternative_message": "Pulsuz etiket proqramımız ilə Bitcoin məlumatlılığını yaymağa davam edin! Bitcoin etiketlərimiz ictimai yerlərdə paylaşmaq üçün mükəmməldir və təhsil məzmununa keçid verən QR kodları ilə gəlir.",
	"postcards_sticker_cta": "PULSUZ ETİKETLƏR ALIN",
	"postcards_step_2": "AÇIQÇALAR NECƏ GÖRÜNÜRDÜ",
	"postcards_instructions_4": "Bu açıqçaları tanıdığınız birinə Bitcoin-i tanıtmağı asanlaşdırmaq üçün hazırladıq! Sadəcə ünvan və möhür əlavə edin və açıqçanızı poçta buraxın.",
	"postcards_instructions_5": "Missiyamız Bitcoin qəbulunu sürətləndirməkdir. Pulsuz etiketlər alaraq və ictimai yerlərdə yerləşdirərək kömək edə bilərsiniz!",
	"postcards_instructions_6": "Hamımız Bitcoin haqqında daha çox öyrənməkdən fayda görəcək bir neçə nəfər tanıyırıq. Bu gün onlarla Bitcoin etiketləri paylaşın!"
});

// signs
writeFile(`signs_${lang}.json`, {
	"signs_description": "Bu Bitcoin Lövhələrini Amerikada hər yerə yaymağımıza kömək edin!",
	"signs_title": "bitcoin.rocks-dan pulsuz Bitcoin Lövhələri",
	"signs_choose_header": "BU BITCOIN LÖVHƏLƏRİNİ AMERİKADA HƏR YERƏ YAPMASINIZA KÖMƏK ETDİYİNİZ ÜÇÜN TƏŞƏKKÜR EDİRİK!",
	"signs_choose_c1": "İndi tamamilə lövhəsiz qaldıq! Missiyamız təhsil vasitəsilə Bitcoin qəbulunu sürətləndirməkdir.",
	"signs_choose_c2": "Bir çoxunuz bu pulsuz Bitcoin lövhələrini ictimai yerlərdə yerləşdirərək kömək etdiniz. Bütün lövhələrimizdə bu mövzuda təhsil səhifəsinə keçid verən QR kodları var:",
	"signs_choose_c3": "inflyasiya",
	"signs_choose_c4": "Əla icmamız sayəsində minlərlə insana çatdıq və Bitcoin dovşan dəliyinin ilk addımlarını atmalarına kömək etdik.",
	"signs_share_header": "LÖVHƏ YERLƏRİNİZİ PAYLAŞIN",
	"signs_share_c1": "Nostr-da lövhə yerlərinizin şəklini bizimlə paylaşın və başqalarının lövhələrini harada yerləşdirdiyini görün.",
	"signs_btn_share_on_nostr": "NOSTR-DA PAYLAŞ","signs_btn_what_is_nostr": "NOSTR NƏDİR?",
	"signs_instructions_1": "Poçt ünvanınızı daxil edin və biz sizə poçtla 10 Bitcoin lövhəsi qutusu göndərəcəyik!",
	"signs_instructions_2": "Pulsuz lövhələriniz göndərildikdən sonra ünvan məlumatları silinir."
});

// flyers
writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "bitcoin.rocks-dan pulsuz Bitcoin Vərəqələri",
	"flyers_description": "Evdə Bitcoin vərəqəsi çap edin və ətrafınızdakıları Bitcoin-ə yönəltmək üçün ictimai yerə asın.",
	"flyers_header_1": "ÇAP EDİN VƏ ASIN",
	"flyers_header_2": "BITCOIN VƏRƏQƏLƏRİ",
	"flyers_intro_header": "BU BITCOIN VƏRƏQƏLƏRİNİ NECƏ ÇAP ETMƏLİ VƏ ASMALI",
	"flyers_intro_c1": "Missiyamız ictimai yerlərdə Bitcoin vərəqələri yapışdıraraq daha çox insanı Bitcoin-ə yönəltməyinizə kömək etməkdir. Bu vərəqədə bizim",
	"flyers_intro_c2": "təhsil Bitcoin veb saytımıza keçid verən QR kodu var.",
	"flyers_intro_c3": "inflyasiya",
	"flyers_intro_c4": "Bu vərəqəni evdə və ya çapxanada çap edin. Sonra onu şəhərdəki elan lövhələrinə, telefon dirəklərinə və insanların görüb Bitcoin haqqında öyrənə biləcəyi digər ictimai yerlərdə asın.",
	"flyers_intro_c5": "Eyni zamanda ",
	"flyers_intro_c6": "pulsuz Bitcoin etiketləri",
	"flyers_intro_c7": " sifariş edin ki, daha çox insanı Bitcoin-ə yönəldəsiniz.",
	"flyers_btn_download": "VƏRƏQƏNİ ENDİR",
	"flyers_btn_print": "VƏRƏQƏNİ ÇAP ET",
	"flyers_share_header": "VƏRƏQƏ YERLƏRİNİZİ PAYLAŞIN",
	"flyers_share_c1": "Nostr-da vərəqə yerlərinizi bizimlə paylaşın və başqalarının vərəqələrini harada asdığını görün.",
	"flyers_btn_share_on_nostr": "NOSTR-DA PAYLAŞ",
	"flyers_btn_what_is_nostr": "NOSTR NƏDİR?"
});

// get-involved
writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "İştirak edin və Bitcoin-i yaymağa kömək edin",
	"get_involved_description": "Pulsuz resurslarımız Bitcoin qəbulunu yaymağı asanlaşdırır.",
	"get_involved_header": "İŞTİRAK EDİN",
	"get_involved_header_2": "BITCOIN-İ YAYIN",
	"get_involved_intro_1": "Dünyanın indiki vəziyyətində yaşamaq bəzən ruhdan salıcı ola bilər.",
	"get_involved_intro_2": "Pulumuz pozulub. Nəticədə, cəmiyyətin əsas hissələri də pozulub.",
	"get_involved_intro_3": "Artıq Bitcoin-ə bələdsinizse, Bitcoin-in gətirə biləcəyi ümid hissini tanıyırsınız. Daha yaxşı pul tərəfindən mümkün edilən daha parlaq gələcəyə ümid.",
	"get_involved_intro_4": "Lakin ətrafınızdakı bir çox insan Bitcoin haqqında bilmir. Onlar sizinlə eyni pozulmuş dünyada yaşayırlar, lakin qaranlıqda onlara kömək edəcək ümid mayakı yoxdur.",
	"get_involved_intro_5": "Lakin bunu dəyişdirməyə kömək edə bilərsiniz. Bitcoin-in gətirdiyi ümidi ətrafınızdakılara yaymağı asanlaşdırmaq üçün bir neçə pulsuz resurs hazırlamışıq.",
	"get_involved_sticker_header": "İctimai yerə etiket yapışdırın",
	"get_involved_sticker_content_1": "Heç kimlə əlaqə saxlamadan ətrafınızdakıları Bitcoin haqqında öyrətməyə kömək edə bilərsiniz. Sadəcə pulsuz Bitcoin etiketlərimizdən birini ictimai yerə yapışdırın.",
	"get_involved_sticker_content_2": "Hər ay yüzlərlə insan bu etiketlərdəki QR kodlarını skan edir. İnflyasiya etiketləri bu mövzudakı səhifəyə keçid verir:",
	"get_involved_sticker_content_3": "İnflyasiyaya həll olaraq Bitcoin.",
	"get_involved_sticker_content_4": "Digər etiketlər insanlara necə göstərən təhsil ana səhifəmizə keçid verir:",
	"get_involved_sticker_content_5": "Bitcoin daha yaxşı dünya qurur.",
	"get_involved_sticker_content_6": "Bu etiketləri icmanızda insanların görəcəyi yerlərdə yapışdırmaqla, ətrafınızdakılara Bitcoin dovşan dəliyinin ilk addımlarını atmalarına kömək edə bilərsiniz.",
	"get_involved_request_a": "BİR",
	"get_involved_sticker_pack": "ETİKET PAKETİ SİFARİŞ EDİN",
	"get_involved_postcard_header": "Açıqça göndərin",
	"get_involved_postcard_content_1": "Pulsuz açıqçalarımızdan birini göndərərək tanıdığınız birinə Bitcoin Ümidini yaymağa kömək edə bilərsiniz.",
	"get_involved_postcard_content_2": "Hər açıqçanın arxasında Bitcoin haqqında inandırıcı mətn və daha çox öyrənmək üçün QR kodu var.",
	"get_involved_postcard_content_3": "Birinə Bitcoin açıqçası göndərərək, Bitcoin-i yeni bir şəkildə görmələrinə kömək edə bilərsiniz.",
	"get_involved_postcard_pack": "AÇIQÇA PAKETİ",
	"get_involved_business_header": "Bir biznesi Bitcoin-ə gətirin",
	"get_involved_business_content_1": "Bitcoin dairəvi iqtisadiyyatını qurmağa kömək etmək istəyirsiniz? Bitcoin Biznes Dəstimiz Bitcoin ödənişlərini qəbul etmək haqqında bizneslə danışmağı asanlaşdırır.",
	"get_involved_business_content_2": "Hər biznes dəstinə Bitcoin ödənişlərini qəbul etmənin üstünlüklərini vurğulayan vərəqələr daxildir. Hər vərəqə müxtəlif",
	"get_involved_business_content_3": "pulsuz Bitcoin biznes resurslarına keçid verir.",
	"get_involved_business_kit": "BİZNES DƏSTİ"
});

console.log('\nDone! Content files created for Azerbaijani (az).');
