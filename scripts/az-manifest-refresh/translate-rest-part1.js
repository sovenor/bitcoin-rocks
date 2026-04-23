#!/usr/bin/env node
/**
 * Azerbaijani manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
 *
 * Keys use "<namespace>::<key>" format to disambiguate shared keys
 * across multiple namespaces.
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
	"az.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Ana səhifəyə qayıdın",
	"404::404_message": "Bitcoin möhtəşəmdir, amma bu xarab səhifə yox.",
	"404::404_not_found_short": "Tapılmadı",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Biz yerli tacirlərə Bitcoin qəbul etməyi asanlaşdıran pulsuz iş dəstləri təqdim edirik. Hər dəst Bitcoin qəbul etməyin bizneslərinə faydalarını izah edən çap olunan materiallar daxildir.",
	"about::about_card_business_label": "Biznes dəsti",
	"about::about_card_business_source": "Mənbə: bitcoin.rocks →",
	"about::about_card_business_title":
		"Yerli bizneslərə Bitcoin ödənişləri qəbul etməyə kömək edin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Mənbə: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Töhfə verin",
	"about::about_card_contribute_source": "Mənbə: GitHub →",
	"about::about_card_contribute_title":
		"bitcoin.rocks layihəsinə necə töhfə verməyi öyrənin",
	"about::about_card_email_label": "E-poçt",
	"about::about_card_email_source": "Mənbə: E-poçt →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Çap olunan vərəqələr",
	"about::about_card_flyers_source": "Mənbə: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"İcmanız üçün Bitcoin vərəqələrini endirin və çap edin",
	"about::about_card_github_label": "Repozitori",
	"about::about_card_github_source": "Mənbə: GitHub →",
	"about::about_card_github_title": "bitcoin.rocks-u GitHub-da görün",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Mənbə: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Pulsuz stikerlər",
	"about::about_card_stickers_source": "Mənbə: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Qapınıza göndərilən pulsuz Bitcoin stikerləri alın",
	"about::about_editorial_2":
		"Biz Federal Ehtiyat (FRED), ABŞ Əmək Statistikası Bürosu, FDIC, Birləşmiş Millətlər, Dünya Qızıl Şurası, Forbes, MIT Technology Review, Lyn Alden və James Lavish kimi etibarlı mənbələrə istinad edirik. Faktlar aydın göstəriləndə Bitcoin özü özünü danışır deyə inanırıq.",
	"about::about_flyers_blurb":
		"Biz görüşlərdə paylaya biləcəyiniz, icma lövhələrinə asa biləcəyiniz və ya poçt qutularına qoya biləcəyiniz çap olunan vərəqələr tərtib edirik — maraq yaratmaq və insanları daha çox öyrənmək üçün bitcoin.rocks-a göndərmək üçün sadə bir yoldur.",
	"about::about_header": "bitcoin.rocks haqqında",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks",
	"about::about_mission_1b":
		"tərəfindən 2022-ci ildə sadə bir missiya ilə quruldu: təhsil vasitəsilə Bitcoin-in qəbulunu sürətləndirmək.",
	"about::about_open_source_2":
		"bitcoin.rocks MIT lisenziyası altında pulsuz və açıq mənbəli layihədir. Hər kəs bitcoin.rocks-a töhfə verə bilər. Dünyanın hər yerindəki insanlara məzmunumuzu əlçatan etməyə kömək edən tərcüməçiləri xüsusilə salamlayırıq.",
	"about::about_page_description":
		"bitcoin.rocks 2022-ci ildə qurulmuş pulsuz və açıq mənbəli Bitcoin təhsil saytıdır. Missiyamız təhsil vasitəsilə Bitcoin-in qəbulunu sürətləndirməkdir.",
	"about::about_stickers_blurb":
		"İcmanızda Bitcoin haqqında məlumatı yaymağa kömək etmək üçün qapınıza pulsuz Bitcoin stikerləri göndəririk. Hər ay yüzlərlə insan Bitcoin-i öyrənmək üçün bu stikerlərdəki QR kodları skan edir.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin-in bank panikaları yoxdur",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin tam ehtiyat sistemidir. Siz pulunuzu banka əmanət qoymursunuz. Özünüz bank olursunuz. Pulunuz sizin xəbəriniz olmadan kredit verilmir, çünki pulunuza yalnız siz çıxış edə bilirsiniz.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Bitcoin-i öz pulqabınızda saxladığınız müddətdə — birjada və ya ETF-də sarılı deyil — bank panikaları qeyri-mümkündür.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Bitcoin ilə pulunuza həqiqətən nəzarət edirsiniz.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"26 mart 2020-ci ildən ABŞ bankları 0% ehtiyat saxlamalıdır.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Bank ehtiyat nisbəti",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Mənbə: Federal Ehtiyat →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Tam ehtiyat sistemi — əmanət sığortasına ehtiyac yoxdur.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin əhatəsi",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Mənbə: Bitcoin ağ kitabı →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Hər Bitcoin zəncirdədir — heç biri kredit verilmir.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Bitcoin ehtiyat nisbəti",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Mənbə: Bitcoin ağ kitabı →",
	"bank-runs::bank_runs_card_fdic_detail":
		"10.82 trilyon dollar sığortalı əmanətə qarşı 153.9 milyard dollarlıq sığorta fondu (Dekabr 2025).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC əhatəsi",
	"bank-runs::bank_runs_card_fdic_source":
		"Mənbə: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
	"bank-runs::bank_runs_card_svb_label": "Hadisə araşdırması",
	"bank-runs::bank_runs_card_svb_source":
		"Mənbə: Vaşinqton Universiteti Hüquq Məktəbi →",
	"bank-runs::bank_runs_card_svb_title":
		"Silicon Valley Bank panikası necə baş verdiyini öyrənin",
	"bank-runs::bank_runs_card_wallet_label": "Növbəti addım",
	"bank-runs::bank_runs_card_wallet_source": "Buradan başlayın →",
	"bank-runs::bank_runs_card_wallet_title":
		"Öz Bitcoin pulqabınızı necə almağı öyrənin",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC sığortası əmanətlərin təxminən 1%-ni əhatə edir",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC sığortası hər əmanətçi üçün 250,000 dollaradək əmanətləri qoruyur. Amma sığorta fondu qorumalı olduğu ümumi əmanətlərlə müqayisədə çox kiçikdir.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Geniş miqyaslı bank uğursuzluğu halında, hökumət çatışmazlığı örtmək üçün pul çap edəcək — bu da daha çox",
	"bank-runs::bank_runs_fdic_p2_link": "inflyasiyaya səbəb olacaq.",
	"bank-runs::bank_runs_header":
		"Bitcoin-in bank panikaları yoxdur, amma bankınızın ola bilər.",
	"bank-runs::bank_runs_page_description":
		"Banklar fraksional ehtiyat bankçılığı çərçivəsində əmanətlərinizi kredit verirlər. Əgər çoxlu insan eyni vaxtda pul çıxarmağa çalışsa, banklar uğursuz ola bilər. Bitcoin tam ehtiyat sistemidir — bank panikaları qeyri-mümkündür.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: real bir nümunə",
	"bank-runs::bank_runs_svb_p1_a":
		"2023-cü ilin mart ayında Silicon Valley Bank müştəri əmanətlərini uzunmüddətli",
	"bank-runs::bank_runs_svb_p1_b":
		"istiqrazlara investisiya etdikdən sonra uğursuz oldu. Həmin istiqrazlar dəyərini itirdikdə SVB pul çıxarmaları örtə bilmədi. Bank ödəniş qabiliyyətini itirdi.",
	"bank-runs::bank_runs_svb_p1_link": "dövlət",
	"bank-runs::bank_runs_svb_p2":
		"Minlərlə şirkət işçilərinə maaş ödəyə bilmədi. FDIC müdaxilə etdi — amma bu daha böyük bir sual yaratdı: pulunuz həqiqətən təhlükəsizdirmi?",
	"bank-runs::bank_runs_what_p1":
		"Banklar əmanətlərinizi seyfdə saxlamır. Onlar pulunuzu kredit verir və investisiya edirlər — buna fraksional ehtiyat sistemi deyilir.",
	"bank-runs::bank_runs_what_p2":
		"Əgər çoxlu insan eyni vaxtda pul çıxarmağa çalışsa, bankın hamıya ödəmək üçün kifayət qədər nağdı olmayacaq. Bu bank panikasıdır — və bankların tamamilə çökməsinə səbəb ola bilər.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">bankların</span> arasındakı fərq",
	"bitcoin-vs-banks::point_1_summary_1":
		"İnternet bağlantısı olan hər kəs Bitcoin-dən istifadə edə bilər — o ",
	"bitcoin-vs-banks::point_1_summary_2": "icazəsizdir.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banklar siyasətə və ya hökumət qaydalarına əsasən hesabları rədd edə, dondura və ya bağlaya bilər.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin şəbəkəsi 24/7, texniki xidmət fasilələri və ya bayramlar olmadan işləyir. Bankların məhdud iş saatları, həftə sonları və kəsintiləri var.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Hər Bitcoin tranzaksiyası hər kəsin audit edə biləcəyi açıq blokçeyndədir. Banklar müştərilərin müstəqil yoxlaya bilmədiyi özəl hesabları idarə edirlər.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Bitcoin ilə öz açarlarınızı saxlayırsınız — sadə bələdçimizə baxın ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin pulqabları",
	"bitcoin-vs-banks::point_4_summary_3":
		". Banklar pulunuzu saxlayır və istənilən vaxt onu dondura, məhdudlaşdıra və ya çıxışı kəsə bilər.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin haqları şəffaf və proqnozlaşdırıla biləndir. Banklar zamanla gizli hesab, overdraft, köçürmə və bankomat haqlarını yığırlar.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin yalnız sahib olduğunuzu xərcləməyə imkan verir. Banklar overdraftlara icazə verir, sonra bu imtiyaz üçün ardıcıl cərimə haqları tutur.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Bir dəfə yayımlandıqdan sonra Bitcoin tranzaksiyaları dayandırıla və ya geri qaytarıla bilməz. Banklar siyasətə və ya hökumət sifarişlərinə əsasən tranzaksiyaları bloklaya, dondura və ya geri qaytara bilər.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">istiqrazların</span> arasındakı fərq",
	"bitcoin-vs-bonds::point_1_summary_1":
		"İstiqrazlar yalnız adda \"risksizdir\" — inflyasiya, faiz dərəcəsi hərəkətləri və defolt riski həqiqi gəlirləri yeyir.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin-in şəffaf volatilliyi var, amma gizli qarşı tərəf riski yoxdur.",
	"bitcoin-vs-bonds::point_2_summary_1": "Əgər",
	"bitcoin-vs-bonds::point_2_summary_2": "inflyasiya",
	"bitcoin-vs-bonds::point_2_summary_3":
		"istiqraz gəlirlərini üstələsə, istiqraz sahibləri hər il həqiqi alıcılıq qabiliyyətini itirir. Bitcoin-in 21 milyonluq limiti şişirdilə bilməz.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"İstiqraz bazarları böhranlarda donarkən — Silicon Valley Bank qismən dəyərini itirən istiqrazlarda ilişib qaldığı üçün çökdü. Bitcoin-in bunlardan necə qaçdığını görmək üçün",
	"bitcoin-vs-bonds::point_3_summary_2": "bank panikalarına",
	"bitcoin-vs-bonds::point_3_summary_3":
		"baxın. Bitcoin likvidlik böhranları olmadan qlobal olaraq 24/7 ticarət olunur.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Xəzinə auksionları kifayət qədər alıcı olmadıqda uğursuz ola bilər — baxın",
	"bitcoin-vs-bonds::point_4_summary_2": "2022 zəif auksion.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bitcoin qiyməti uğursuz ola bilən mərkəzi auksion olmadan daim açıq bazarlarda kəşf olunur.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"İstiqraz gəlirləri alış zamanı sabitlənir. Hətta iqtisadiyyat çiçəklənsə və ya valyuta çöksə belə, gəliriniz eyni qalır.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Qəbulun artması ilə tələb sabit təklifə qarşı gəldiyi üçün Bitcoin-in əhəmiyyətli yüksəliş potensialı var.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Əksər istiqrazlar banklar və ya brokerlər vasitəsilə saxlanılır, qarşı tərəf riski əlavə edir. Bitcoin-i",
	"bitcoin-vs-bonds::point_6_summary_2": "pulqabı",
	"bitcoin-vs-bonds::point_6_summary_3":
		"ilə öz-özünə saxlamaq olar — bu riski tamamilə aradan qaldırır.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"İstiqrazlar tamamilə hökumətlərin ödəməsindən asılıdır. Hökumət defolt edərsə və ya borcunu şişirtsə, istiqraz sahibləri uduzur.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin istənilən hökumətdən və ya siyasi hakimiyyətdən müstəqil işləyir.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">nağdın</span> arasındakı fərq",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin istənilən yerə dəqiqələr ərzində internet üzərindən hərəkət edir. Nağd fiziki iştirak və ya etibarlı kuryerlər tələb edir — 20 dollarlıq əskinası e-poçtla göndərə bilməzsiniz.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin hər yerdə eyni şəkildə işləyir. Nağd coğrafiya, məzənnələr və yerli qəbul ilə məhdudlaşır.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Hökumətlər nağdı bir gecədə ləğv edə bilər — Hindistan bunu 2016-cı ildə etdi. Hətta valyuta çıxarılması olmadan belə, nağd",
	"bitcoin-vs-cash::point_3_summary_2": "inflyasiya",
	"bitcoin-vs-cash::point_3_summary_3":
		"səbəbindən dəyərini itirir. Bitcoin heç bir hökumət və ya hakimiyyət tərəfindən ləğv edilə bilməz.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Nağd saxtalaşdırıla bilər, bəzən inandırıcı şəkildə. Bitcoin saxtalaşdırmanı riyazi cəhətdən qeyri-mümkün edən kriptoqrafiyadan istifadə edir.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin-in mərkəzi hakimiyyəti yoxdur. Nağd daha çox çap edə, dizaynları dəyişdirə və ya əskinasları istədiyi kimi ləğv edə bilən hökumətlər tərəfindən buraxılır.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Nağd oğurluq, yanğın, itki və müsadirəyə məruz qalır. Bitcoin-i",
	"bitcoin-vs-cash::point_6_summary_2": "öz-özünə saxlamaq",
	"bitcoin-vs-cash::point_6_summary_3":
		"telefonda və ya aparat cihazında təhlükəsiz şəkildə mümkündür.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin 100 milyon satoshi-yə bölünür, istənilən ölçüdə kiçik ödənişlərə imkan verir. Nağdın minimum nominalı var — bir qəpik bölə bilməzsiniz.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">Mərkəzi Bank Rəqəmsal Valyutalarının (CBDC-lər)</span> arasındakı fərq",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Heç kim sizi Bitcoin ilə əməliyyat aparmaqdan saxlaya bilməz. CBDC-lər hökumətlərin və mərkəzi bankların hər ödənişə nəzarət etməsi üçün hazırlanıb, məxfiliyinizi və azadlığınızı məhdudlaşdırır.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin heç vaxt bitmir və aylıq haqları yoxdur. CBDC-lər bitmək üçün proqramlaşdırıla bilər, gələcək üçün əmanət etməyinizə mane olur.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin-in 21 milyon BTC-lik sərt limiti var. CBDC-lərin təklif limiti yoxdur, hökumətlərə pulu istədikləri kimi genişləndirməyə imkan verir — bu da",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflyasiyaya səbəb olur.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin ünvanları sizin real kimliyinizlə bağlı deyil. CBDC-lər birbaşa hökumət şəxsiyyət vəsiqəsi ilə bağlıdır, kütləvi maliyyə nəzarətinə və senzuraya imkan verir.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoin qaydaları on minlərlə müstəqil qovşaqlar tərəfindən yoxlanılır. CBDC-lər hökumətlərin və mərkəzi bankların əlindədir, onlar şəbəkə üzərində tam nəzarətə malikdir.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Hər kəs şəbəkə qaydalarını yoxlamaq üçün Bitcoin qovşağı işlədə bilər. CBDC-lər istifadəçilərə qovşaq işlətməyə icazə vermir — mərkəzi hakimiyyətə etibar etməlisiniz.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Öz-özünə saxlanılan Bitcoin heç kim tərəfindən dondurula bilməz. CBDC-lər hökumətlərin və mərkəzi bankların hesabları dərhal dondurması üçün hazırlanıb.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin-i",
	"bitcoin-vs-cbdc::point_8_summary_2": "pulqabı",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"ilə öz-özünə saxladığınız zaman sizə pulunuza tam nəzarət verir. CBDC-lər pulunuzu adınıza saxlamaq üçün banklar və ya hökumətlər kimi nəzarətçilərə etibar etməyi tələb edir.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoin-in pul siyasəti kodda sabitlənib və dəyişdirilə bilməz. CBDC-lər siyasətçilərin istədikləri kimi yenidən proqramlaşdırıla bilər,",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflyasiyaya",
	"bitcoin-vs-cbdc::point_9_summary_3": " səbəb olur, çox pul çap edildikdə.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin indiyədək qurulmuş ən təhlükəsiz hesablama şəbəkəsidir və heç vaxt sındırılmayıb. CBDC-lər saysız-hesabsız dəfələrlə sındırılmış banklara və hökumətlərə əsaslanır.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">kriptovalyutaların</span> arasındakı fərq",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoin protokolu 2009-cu ildən bəri əsasən dəyişməz qalıb, proqnozlaşdırıla bilən qaydalar təqdim edir. Əksər kripto layihələri davamlı olaraq protokolları və ya token iqtisadiyyatını dəyişdirir və ya yeni versiyalara ayrılır.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin dünya üzrə on minlərlə müstəqil qovşaqlarda işləyir. Əksər kripto layihələri tək tərəfli dəyişikliklər edə bilən fondlar, şirkətlər və ya kiçik inkişaf komandaları tərəfindən idarə olunur.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin-in 21 milyon sikkəlik sərt limiti var — ən nadir rəqəmsal aktiv. Əksər kripto layihələrinin qeyri-məhdud təklifi və ya istədikləri vaxt yeni tokenlər zərb etmək mexanizmləri var, bu da sahiblərin paylarını seyrəkləşdirir.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin-in bir məqsədi var: peer-to-peer rəqəmsal pul. Hər kəs bunu başa düşə və istifadə edə bilər. Əksər kripto mürəkkəb ağıllı müqavilələr və ya təhlükəsiz istifadə üçün texniki təcrübə tələb edən DeFi-ni əhatə edir.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoin-in iş sübutu 15 ildən artıqdır ki, əsas şəbəkədə uğurlu hücum olmadan işləyir. Əksər kripto layihələri döyüşdə sınaqdan keçirilməmiş eksperimental konsensusdan istifadə edir.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin rəqəmsal puldur — dəyər saxlanışı və mübadilə vasitəsi. Əksər kripto tokenlər qeyri-aydın real dəyərli spekulyativ və ya idarəetmə tokenləridir.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin hücum altında güclənir və hər böhrandan, qadağadan və tənqiddən sağ çıxıb. Əksər kripto layihələri tənzimləyici, texniki və ya bazar təzyiqi altında çökür.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin-in icraçı direktoru, şirkəti və ya tək uğursuzluq nöqtəsi yoxdur. Əksər kripto layihələri VC-lərdən, xüsusi liderlikdən və ya tək bir şirkətin sağ qalmasından asılıdır.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">incəsənətin</span> arasındakı fərq",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Hər Bitcoin eynidir və dəyişdirilə biləndir. Hər sənət əsəri unikaldır — fərqli yaradılış, tarix, vəziyyət və mənşə birbaşa müqayisələri çətinləşdirir.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin qlobal bazarda 24/7 ticarət olunur, hər kəs çıxış əldə edə bilər. İncəsənət ixtisaslaşmış auksion evləri, şəxsi dilerlər və ya qalereya tələb edir və satmaq aylar çəkə bilər.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bitcoin almaq və ya satmaq 1%-dən az, çox vaxt daha az haqq tutur. Sənət satışları alıcı mükafatlarında, komissiyalarda, sığortada, daşınmada və autentifikasiya haqlarında 30-40% yığır.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin 100 milyon satoshi-yə bölünür, istənilən tranzaksiya ölçüsü üçün ideal edir. Rəsmin hissəsinə və ya heykəlin küncünə sahib ola bilməzsiniz.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoin sahibliyi və orijinallığı hər kəs tərəfindən zəncirdə kriptoqrafik olaraq yoxlanıla bilər. Sənət autentifikasiyası baha, yavaşdır və hələ də saxtakarlar tərəfindən müntəzəm olaraq aldadılır — sənət əsərinin dəyərini bir gecədə məhv edir.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Düzgün saxlanıldığı təqdirdə Bitcoin daşqınlardan, yanğınlardan, zəlzələlərdən və oğurluqlardan sağ çıxır. İncəsənət hər cür fiziki məhvə məruz qalır və sığorta nadir hallarda hər şeyi əhatə edir.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"İnternet bağlantısı və bir az pulu olan hər kəs Bitcoin ala bilər. İncəsənət investisiyası faktiki olaraq auksionlara çıxışı və ixtisaslaşdırılmış bilikləri olan varlı kolleksionerlərlə məhduddur.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">qızılın</span> arasındakı fərq",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin aşağı haqlarla internet üzərindən dərhal göndərilə bilər. Qızıl mülkiyyəti ötürmək üçün fiziki olaraq göndərilməlidir.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin internet üzərindən köçürə biləcəyiniz yerli rəqəmsal aktivdir. İnternetdəki qızılın əksəriyyəti rəqəmsal qəbzdir — siz yalnız nəzarətçidən bir vəd sahibsiniz, metalın özü deyil.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin-in 21 milyon BTC-lik sərt limiti var. Qızılın təklifi ildə təxminən 1.6% artır, payınızı kiçildir — kağız pulun",
	"bitcoin-vs-gold::point_3_summary_2": "inflyasiyasından",
	"bitcoin-vs-gold::point_3_summary_3": "azdır — amma yenə də inflyasiyadır.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Qızıl qiymətləri yüksəldikdə daha çox qızıl çıxarılır, qiyməti yenidən aşağı salır. Bitcoin-in təklifi qeyri-elastikdir — qiymət nə qədər yüksək olsa da, yalnız 21 milyon olacaq.",
	"bitcoin-vs-gold::point_5_summary_1":
		"On minlərlə müstəqil qovşaqlar Bitcoin şəbəkəsini yoxlayır. Əksər fiziki qızıl bir ovuc böyük nəzarətçi anbarında saxlanılır.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Hər kəs tam qovşaq işlədərək həqiqi Bitcoin-i yoxlaya bilər — sadəcə bir proqramdır. Fiziki qızılı yoxlamaq onu əritməyi tələb edir; içərisi volfram ola bilər.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin 100 milyon satoshi-yə bölünür, istənilən alış ölçüsü üçün ideal edir. Qızıl kiçik tranzaksiyalar üçün asanlıqla bölünə bilməz.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">daşınmaz əmlakın</span> arasındakı fərq",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin dünyanın hər yerinə dərhal hərəkət edir. Daşınmaz əmlak bir yerdə sabitdir və yerli iqtisadi, siyasi və təbii risklərə məruz qalır.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin 100 milyon satoshi-yə bölünür. Daşınmaz əmlak qismən satıla bilməz — yalnız mətbəxi ata və ya yataq otağının yarısını ala bilməzsiniz.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin heç bir hökumətin nəzarət edə bilmədiyi mərkəzləşdirilməmiş şəbəkədə işləyir. Daşınmaz əmlak yüksək dərəcədə tənzimlənir — zonalaşdırma, icarə nəzarəti, eminent domain və müsadirə hamısı tətbiq olunur.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin texniki xidmət tələb etmir. Daşınmaz əmlak təmir, yeniləmə, sığorta, əmlak idarəetməsi və kiracı problemləri tələb edir.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin-in davamlı vergiləri yoxdur — yalnız satarkən kapital qazancı ödəyirsiniz. Daşınmaz əmlak gəlirdən asılı olmayaraq illik əmlak vergilərini borcludur.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Düzgün saxlanıldığı təqdirdə Bitcoin yanğından, daşqından, zəlzələdən sağ çıxır. Daşınmaz əmlak hər fəlakətə məruz qalır və sığorta nadir hallarda hər şeyi əhatə edir.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Hər Bitcoin eynidir və dəyişdirilə biləndir. Hər əmlak unikaldır, qiymətləndirməni və müqayisələri çətinləşdirir.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin internet bağlantısı olan hər kəs tərəfindən qlobal olaraq 24/7 ticarət olunur. Daşınmaz əmlak satışları yerli alıcılarla məhdudlaşır və bağlanmağa qədər aylarla sənəd işi ala bilər.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin hər kəs üçün birbaşa fərdi mülkiyyətə imkan verir. Əsas yaşayış yerinizdən başqa investisiya kimi daşınmaz əmlak almaq mənzil qiymətlərini qaldırır, əlverişliliyi azaldır və mənzil böhranını qızışdırır.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">səhmlərin</span> arasındakı fərq",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin tamamilə sizə aid olan birbaşa aktivdir. Səhmlər şirkətdəki paylardır — onların dəyəri sizin nəzarət edə bilmədiyiniz idarəetmədən, performansdan və qərarlardan asılıdır.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin-in 21 milyon BTC-lik sərt limiti var. Şirkətlər istənilən vaxt yeni səhmlər buraxa bilər, mövcud səhmdarların paylarını seyrəkləşdirir — eynilə kağız pulun",
	"bitcoin-vs-stocks::point_2_summary_2": "inflyasiyası",
	"bitcoin-vs-stocks::point_2_summary_3":
		" nağd pulun dəyərini seyrəkləşdirdiyi kimi. Bitcoin ilə payınız heç vaxt azalmır.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin-in icraçı direktoru və ya tək uğursuzluq nöqtəsi yoxdur. Səhmlər liderlikdən çox asılıdır — pis qərar və ya bir nəfərin ayrılması qiyməti çökdürə bilər.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoin qiyməti açıq qlobal bazarlardan gəlir. Səhm qiymətləndirmələri həddindən artıq qiymətləndirilmiş səhmləri gizlədə bilən P/E nisbətləri kimi metriklərə əsaslanır.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin dünya üzrə 24/7 ticarət olunur. Səhm bazarları yalnız iş günləri iş saatlarında açıqdır.",
	"bitcoin-vs-stocks::point_6_summary_1": "Bitcoin-i",
	"bitcoin-vs-stocks::point_6_summary_2": "öz-özünə saxlaya",
	"bitcoin-vs-stocks::point_6_summary_3":
		"sadə bir proqramla — brokerə ehtiyac yox. Səhmlər broker şirkətlərində yerləşir, uğursuz olsalar sizi qarşı tərəf riskinə məruz qoyur.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoin-in sabit təklifi onu inflyasiyaya qarşı etibarlı qoruyucu edir. Bəzi səhmlər inflyasiyadan üstün olur, digərləri yox — heç bir zəmanət yoxdur.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"<span class=\"orange\">Bitcoin</span> ilə <span class=\"asset\">Visa</span> arasındakı fərq",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin hər kəsin icazəsiz qoşula və istifadə edə biləcəyi açıq şəbəkədir. Visa çıxışı rədd edə bilən maliyyə qurumları tərəfindən idarə olunan qapalı sistemdir — xüsusilə banksızlar və kasıb banksızlar üçün.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin tranzaksiyalarının tacir haqları yoxdur. Visa adətən tacirlərdən hər tranzaksiya üçün təxminən 3% tutur — bizneziniz",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin ödənişlərini",
	"bitcoin-vs-visa::point_2_summary_3": " qəbul edərək pul saxlaya bilər.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Hər Bitcoin tranzaksiyası açıq və audit edilə bilən blokçeyndədir. Visa müştərilərin heç nəyi müstəqil yoxlaya bilmədiyi qapalı, özəl sistemi idarə edir.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin heç bir mərkəzi hakimiyyət tərəfindən dondurula bilməz. Visa istənilən vaxt hesabları dondura, tranzaksiyaları bloklaya və ya xidməti rədd edə bilər.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin qəti hesablaşmadır — yalnız sahib olduğunuzu xərcləyə bilərsiniz. Kredit kartları çox vaxt illik 25%-dən yuxarı faiz dərəcələri ilə borc yaradır.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin sizə",
	"bitcoin-vs-visa::point_6_summary_2": "öz-özünə saxlama",
	"bitcoin-vs-visa::point_6_summary_3":
		"imkanı verir — bank və ya ödəniş emalçısına ehtiyac olmadan. Kredit kartları həmişə vasitəçilər tələb edir.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin iş saatları olmadan qlobal olaraq 24/7 işləyir. Visa-nın əməliyyat saatları, texniki xidmət fasilələri və tranzaksiyaları bloklaya bilən coğrafi məhdudiyyətləri var.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let missing = 0;
	const missingKeys = [];

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
			// Only count as missing if this script is supposed to handle it
			const ns = e.namespace;
			if (
				ns === "404" ||
				ns === "about" ||
				ns === "bank-runs" ||
				ns.startsWith("bitcoin-vs-")
			) {
				missing++;
				missingKeys.push(lookupKey);
			}
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (az): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
