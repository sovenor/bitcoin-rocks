#!/usr/bin/env node
/**
 * Hausa manifest refresh — part 2 of non-inflation namespaces.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/index,
 *         sticker-language-success, sticker-success, stickers, wallets.
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
	"ha.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Sabis na lissafin kuɗi na Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "−$10",
	"business/accounting::accounting_description":
		"Jagora mai sauƙi don lissafin kuɗin biyan Bitcoin — walat-walat masu cakuda, farashin tushe, ribar jari da lokacin da ya kamata ka ga lissafinka.",
	"business/accounting::accounting_s1_c1":
		"Hanya mafi sauƙi don karɓar Bitcoin ita ce yin amfani da walat mai cakuda wanda ke canza 100% na bitcoin da aka karɓa ta atomatik zuwa dala (ko kuɗin gida) da zarar an karɓi biyan.",
	"business/accounting::accounting_s1_c2":
		"Tare da wannan saitin, lissafin kuɗinka kamar yadda yake yau — adadin ƙarshe zai kasance a dala kowane lokaci. Babu farashin tushe, babu ribar jari, babu sabon ƙa'idar lissafi.",
	"business/accounting::accounting_s2":
		"Idan ka riƙe Bitcoin: bi farashin tushe",
	"business/accounting::accounting_s2_c1":
		"Wasu kasuwanci suna zaɓar riƙe wani ɓangare na Bitcoin da suke karɓa maimakon canza shi ta atomatik. Idan kana yin wannan, ƙarin matakin shi ne bin farashin tushe — darajar dala ta kowane biyan Bitcoin a ranar da aka karɓa.",
	"business/accounting::accounting_s2_c2":
		"Ko da kana tunanin kasuwancinka a Bitcoin kawai, yawancin hukumomin haraji har yanzu suna buƙatar ka ba da rahoton darajar dala. Labari mai daɗi: lambobi biyu kawai ne kowace ma'amala — adadin Bitcoin da aka karɓa da darajar dala ta wannan ranar.",
	"business/accounting::accounting_s2_c3":
		"Yi amfani da kayan aikin da ke ƙasa don sarrafa neman farashi ta atomatik, don kada ka duba farashi kowace rana.",
	"business/accounting::accounting_s3":
		"Kashe ko sayar da Bitcoin da aka riƙe",
	"business/accounting::accounting_s3_c1":
		"Idan ka canza kowane biyan ta atomatik zuwa dala, tsallake wannan sashe — bai shafe ka ba.",
	"business/accounting::accounting_s3_c2":
		"Idan ka riƙe Bitcoin sannan ka yanke shawarar kashe shi ko sayar da shi, ƙara farashin sayarwa zuwa ƙa'idar lissafi guda ɗaya tare da farashin tushe. Bambanci tsakanin farashin Bitcoin lokacin da ka karɓe shi da farashinsa lokacin da ka kashe ko sayar da shi shi ne riba ko hasarar jari.",
	"business/accounting::accounting_s3_c3": "Misalai biyu masu sauri:",
	"business/accounting::accounting_s4":
		"Kana buƙatar ƙwararre da ya fahimci Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Idan kana so wani ya yi shi a maimakon haka — ko kuma idan lissafin kuɗin Bitcoin ɗinka ya fi rikitarwa fiye da yadda walat mai cakuda zai iya magancewa — muna ba da shawara mai ƙarfi ga Satoshi Pacioli Accounting Services, kamfani da ke yin lissafin kuɗin Bitcoin ga kasuwanci.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Lissafin kuɗin Bitcoin don kasuwancinka",
	"business/accounting::accounting_card_bpr_label": "FARASHIN BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Nemi farashin Bitcoin na yanzu ko na tarihi a dala",
	"business/accounting::accounting_card_pacioli_label":
		"MAI LISSAFIN BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label":
		"SHIGAR DA EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Shigar da farashin Bitcoin ta atomatik a Excel",
	"business/accounting::accounting_card_wallets_label":
		"WALAT MAI CAKUDA",
	"business/accounting::accounting_card_wallets_title":
		"Duba walat-walat da muka ba da shawarar ga kasuwanci",
	"business/accounting::accounting_disclaimer":
		"An ba da wannan jagora don bayanai kawai kuma ba shawarar haraji ba ce. Don shawarar haraji da ta dace da yanayinka, tuntube mai lissafin kuɗi mai ƙwarewa.",
	"business/accounting::accounting_disclaimer_label": "Lura",
	"business/accounting::accounting_example_feb_1": "1 ga Fabrairu",
	"business/accounting::accounting_example_gain_badge": "Riba",
	"business/accounting::accounting_example_gain_explain":
		"Ka yi rikodin ribar jari na $10.",
	"business/accounting::accounting_example_jan_1": "1 ga Janairu",
	"business/accounting::accounting_example_loss_badge": "Hasara",
	"business/accounting::accounting_example_loss_explain":
		"Ka yi rikodin hasarar jari na $10.",
	"business/accounting::accounting_example_received_label": "An karɓa",
	"business/accounting::accounting_example_sold_label":
		"An sayar ko an kashe",
	"business/accounting::accounting_hero_subtitle":
		"Karɓar Bitcoin a kasuwancinka ba sai ya rikitar da lissafin kuɗinka ba. Ga ɗan gajeren bayani — tare da kayan aiki da ƙwararru waɗanda za su sa shi ba mai zafi ba.",
	"business/accounting::accounting_intro_c1":
		"Idan ka riga ka karɓi tsabar kuɗi ko katuna, ƙara Bitcoin a lissafin kuɗin kasuwancinka ya fi sauƙi fiye da yadda kake tsammani. Kana da hanyoyi biyu: canja kowane biyan Bitcoin ta atomatik zuwa dala da zarar an karɓa (babu sabon lissafi), ko riƙe wani ɓangaren a Bitcoin (kana buƙatar bin wasu ƙarin lambobi).",
	"business/accounting::accounting_intro_c2":
		"Wannan jagorar tana bita kan hanyoyi biyu — don ka zaɓi wadda ta dace da kasuwancinka kuma ka fara karɓar Bitcoin da ƙarfin gwiwa.",
	"business/accounting::accounting_s1":
		"Hanya mai sauƙi: canja ta atomatik zuwa dala",
	"business/accounting::accounting_s3_c6":
		"Shi ke nan. Ainihin lissafi suna kama da kowane kadara wadda ke tashi ko faɗuwa.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — farashin Bitcoin na yanzu da na tarihi a dala",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — lissafin kuɗin Bitcoin ga kasuwanci",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — shigar da farashin crypto a Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Amsoshi cikin sauri ga tambayoyin da kasuwanci ke yi sau da yawa kafin karɓar Bitcoin — kuɗi, saitawa, walat, dawowar katuna, farashi da ƙari.",
	"business/faq::faq_intro_c1":
		"Danna kowace tambaya ƙasa don faɗaɗa amsar. Lokacin da kake shirye don fara karɓar Bitcoin, albarkatun kasuwanci a ƙarshen shafin za su jagorance ka mataki-mataki.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "LISSAFIN KUƊI",
	"business/index::biz_label_faq": "TAMBAYOYI",
	"business/index::biz_label_maps": "TASWIROYIN 'YAN KASUWA",
	"business/index::biz_label_rewards": "LADA",
	"business/index::biz_label_stickers": "LABARU",
	"business/index::biz_label_wallets": "WALAT",
	"business/index::biz_meta_description":
		"Karɓi Bitcoin a kasuwancinka tare da ƙananan kuɗi, saitawa nan take, babu dawowar katuna, kuma jawo ƙarin abokan ciniki.",
	"business/index::business_hero_subtitle":
		"Karɓi biyan kuɗi tare da ƙananan kuɗi, saitawa nan take kuma kai miliyoyin sabbin abokan ciniki — babu kwangila ko farashi a ɓoye.",
	"business/index::business_intro_c1":
		"Bitcoin yana ba da hanya wa kasuwancinka don karɓar biyan kuɗi waɗanda suka fi sauri, sauƙi da sirri. Babu 'yan tsaka. Babu dawowar katuna. Babu kwangila. Kuɗi kawai wanda ke biya cikin daƙiƙa, kai tsaye daga abokin ciniki zuwa gareka.",
	"business/index::business_intro_c2":
		"Ƙasa akwai ɗan gajeren bayani na me yasa Bitcoin yake da kyau ga kasuwanci — kuma ƙasa da haka, dukkan albarkatun da kake buƙata don fara karɓa yau.",
	"business/index::business_resources_heading":
		"Duk abin da kake buƙata don karɓar Bitcoin",
	"business/index::business_resources_intro":
		"Aiki ta cikin waɗannan albarkatun ta saurinka. Kowanne jagora ne mai sauƙi mai amfani.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Faɗa mana game da kasuwancinka",
	"business/maps::biz_maps_form_intro":
		"Muna buƙatar ɗan ƙaramin bayani kawai don sa ka a kan taswira. Muna riƙe bayanan adireshi ne kawai a yayin da ake buƙata don shigar da kasuwancinka cikin taswiroyin.",
	"business/maps::biz_maps_hero_subtitle":
		"Ƙara kasuwancinka a BTC Map kyauta — jagorar duniya mai buɗewa ta 'yan kasuwa da ke karɓar Bitcoin — don masu amfani da Bitcoin na kusa su sami ka kuma su kashe Bitcoin tare da kai.",
	"business/maps::biz_maps_hero_title":
		"Ƙara kasuwancinka a kan taswiroyin 'yan kasuwar Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Masu amfani da Bitcoin suna neman wuri don kashe kuɗinsu. Kasancewa a kan taswira yana sa kasuwancinka a bayyane ga kowane mai amfani da Bitcoin da ke neman wurin cin abinci, siyayya ko zama — kyauta gabaɗaya.",
	"business/maps::biz_maps_intro_c2":
		"Cika ƙaramin fom ɗin da ke ƙasa kuma za mu shigar da kasuwancinka zuwa BTC Map da sauran taswiroyin 'yan kasuwar Bitcoin.",
	"business/maps::biz_maps_meta_description":
		"Ƙara kasuwancinka a BTC Map da sauran taswiroyin 'yan kasuwar Bitcoin kyauta, don masu amfani da Bitcoin na kusa su sami ka.",
	"business/maps::biz_maps_placeholder_address":
		"Titi da lamba",
	"business/maps::biz_maps_placeholder_category":
		"Rukuni (misali, gidan abinci, kafe, otal)",
	"business/maps::biz_maps_placeholder_city": "Birni",
	"business/maps::biz_maps_placeholder_country": "Ƙasa",
	"business/maps::biz_maps_placeholder_name": "Sunan kasuwanci",
	"business/maps::biz_maps_placeholder_region":
		"Yanki / lardi / jiha",
	"business/maps::biz_maps_placeholder_website":
		"Shafin yanar gizo (ƙarin)",
	"business/maps::biz_maps_view_map_cta": "Duba BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Duba BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Mun gode da shigar da kasuwancinka. Za mu sa ka a kan taswiroyin 'yan kasuwar Bitcoin nan da nan.",
	"business/maps-success::biz_maps_success_hero_title":
		"An karɓi buƙatar 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Kasuwancinka za a ƙara shi zuwa BTC Map da sauran jagorar 'yan kasuwar Bitcoin a cikin makonni 1-2. Muna duba kowace buƙata da hannu don kiyaye taswiroyin daidai.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Da zarar lissafinka ya kasance kai tsaye, masu amfani da Bitcoin na kusa za su sami kasuwancinka kuma su zo su kashe bitcoin ɗinsu tare da kai.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Abin da zai biyo baya",
	"business/maps-success::biz_maps_success_view_c1":
		"A halin yanzu, duba BTC Map don ganin hanyar sadarwa mai girma na kasuwanci a duk faɗin duniya da ke karɓar Bitcoin.",
	"business/maps-success::biz_maps_success_view_header":
		"Duba inda za a ga kasuwancinka",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Saukar da fayilolin labaru a Turanci don buga labaranka na “Bitcoin Accepted Here”.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Buga labaranka na “Bitcoin Accepted Here” a Turanci don abokan cinikinka su san kana karɓar Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Saukar da fayilolin labaru na “Bitcoin Accepted Here” a Turanci",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Mun gode da neman fayilolin labaru na “Bitcoin Accepted Here” a cikin harshenka.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"An karɓi buƙatar 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Za mu ƙirƙira kuma mu buga fayilolin labaranka a cikin makonni 3-4. Da zarar sun shirya, za ka iya saukar da su kuma ka buga su kyauta daga shafin fayilolin labaranmu.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Muna buga fayilolin labaru a rukuni-rukuni, don haka zai iya ɗaukar makonni kafin harshenka ya kasance. Mun gode da haƙurinka!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Abin da zai biyo baya",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Yi oda mai yawa",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Nemi wani fakitin kyauta",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Za ka karɓi labaran “Bitcoin Accepted Here” na kyauta a cikin makonni 2-4, a cikin ambulan farin mai sauƙi tare da labaru 3.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Labaranka suna kan hanya 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Idan labaru 3 ba su isa wa kasuwancinka ba, kada ka ji kunya don neman wani fakiti kyauta — ko yi oda mai yawa daga mai bugawa iri ɗaya da muke amfani da shi.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Kana buƙatar ƙarin labaru?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"A ƙofar gaba ko taga, don abokan ciniki su gan su kafin su shigo",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Kusa da wurin sayarwa, akan na'urar biya ko inda abokan ciniki ke biya",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Akan menus, jerin farashi ko murafan ba da kuɗi",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Kada ka sa su a wuraren da ba naka ba ne ko kuma ba ka da izinin sa labaru",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Wuraren da suka dace don sa labaranka",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Faɗa wa abokan cinikinka kana karɓar Bitcoin. Yi oda fakitin kyauta na labaru “Bitcoin Accepted Here” don sa a kasuwancinka.",
	"business/stickers::biz_stickers_hero_title":
		"Labaru kyauta na “Bitcoin Accepted Here”",
	"business/stickers::biz_stickers_intro_c1":
		"Karɓar Bitcoin rabin aiki ne — abokan cinikinka suna buƙatar sani shi ma. An ƙera ƙananan labaru “Bitcoin Accepted Here” don sa a ƙofar gaba, a wurin sayarwa, a kan menu ko ko'ina abokan cinikinka za su gan su kafin su biya.",
	"business/stickers::biz_stickers_intro_c2":
		"Za mu aika fakiti kyauta zuwa kowane adireshi a Amurka ko Kanada, ko za ka iya buga naka ko'ina a duniya.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — kyauta ta hanyar wasiku",
	"business/stickers::biz_stickers_option_print":
		"🌍 A duk faɗin duniya — buga naka",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 Amurka — kyauta ta hanyar wasiku",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Fassara “Bitcoin Accepted Here”",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Fassara “Scan to learn why Bitcoin is good for business.”",
	"business/stickers::biz_stickers_print_c1":
		"Za ka iya buga labaranka na “Bitcoin Accepted Here” ko'ina kake. Danna harshenka a ƙasa don saukar da fayilolin labaru da umarnin bugawa.",
	"business/stickers::biz_stickers_print_header":
		"Buga fayilolin labaranka",
	"business/stickers::biz_stickers_request_c1":
		"Cika fom ɗin da ke ƙasa don neman fayilolin labaru “Bitcoin Accepted Here” a cikin harshenka na cikin gida. Za mu sanar da kai da zarar sun shirya.",
	"business/stickers::biz_stickers_request_header":
		"Ba ka ga harshenka ba?",
	"business/stickers::biz_stickers_step_description":
		"Muna aika fakitoci kyauta zuwa adireshin a Amurka da Kanada. Ko'ina kuma a duniya, za ka iya buga naka.",
	"business/stickers::biz_stickers_step_header":
		"Yaya kake son labaranka?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Duk walat na Bitcoin suna aiki tare — zaɓi wanda ya dace da kasuwancinka. Kyauta, saitawa nan take, babu dawowar katuna.",
	"business/wallets::sources_breez_business":
		"Breez — walat na Lightning Bitcoin-kawai",
	"business/wallets::sources_ibex":
		"IBEX — kayan aikin biyan kuɗi na Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — mai sarrafa biyan kuɗin Bitcoin",
	"business/wallets::sources_square":
		"Square — karɓi biyan kuɗi a Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — biyan kuɗi a Bitcoin ga kasuwanci",
	"business/wallets::wallets_hero_subtitle":
		"Walat na Bitcoin kyauta ne. Zaɓi wanda ya dace da kasuwancinka — a shago, akan layi ko ta hanyar biya — kuma fara karɓar Bitcoin a cikin minti ɗaya.",
	"business/wallets::wallets_section_invoice":
		"Walat ga kasuwanci da ke aika biyan kuɗi ga abokan ciniki",
	"business/wallets::wallets_section_invoice_intro":
		"Idan kana aika biyan kuɗi ga abokan ciniki (shawarwari, aiki kyauta, ayyukan B2B), yi amfani da walat da aka gina a kewayen biyan kuɗi. Abokin ciniki yana biyan biyan Bitcoin a cikin danna kaɗan.",
	"business/wallets::wallets_section_multiple":
		"Walat ga kasuwanci da ke da ƙungiyoyin ma'aikata",
	"business/wallets::wallets_section_multiple_intro":
		"Idan kana da ƙungiya da ke yin sayarwa a wurin sayarwa, zaɓi walat da ke ɗaukar shiga ma'aikata da yawa — don kowane ma'aikaci yana da PIN ɗinsa kuma ka kiyaye rikodi mai bayyane na wanda ya karɓa kowane biyan.",
	"business/wallets::wallets_section_online":
		"Walat ga kasuwanci akan layi",
	"business/wallets::wallets_section_online_intro":
		"Kana sayarwa akan layi? Waɗannan walat suna haɗawa da shagonka akan layi kuma suna karɓar Bitcoin daga kowane abokin ciniki a duniya — babu dawowar katuna kuma babu buƙatar asusun ɗan kasuwa.",
	"business/wallets::wallets_section_sole":
		"Walat ga kasuwanci na mutum ɗaya",
	"business/wallets::wallets_section_sole_intro":
		"Idan kana gudanar da shago, kafe, ɗakin studio ko sabis kai kaɗai, kowane ɗayan waɗannan walat zai yi aiki. Zaɓi bisa ga ko kana son riƙe biyan kuɗi a Bitcoin ko canja ɓangare na kowane biyan ta atomatik zuwa kuɗin gida.",
	"business/wallets::wallets_strike_note":
		"Strike Business yana ba ka damar karɓar biyan Bitcoin da Lightning tare da kuɗi sifili da saitawa nan take. Yana goyan bayan biyan a shago, akan layi da ta hanyar biya, tare da canja atomatik zaɓi zuwa kuɗin gida.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Ana karɓar Bitcoin a nan",
	"business/why::why_good_for_you":
		"Me yasa Bitcoin yake da kyau a gare ka kuma",
	"business/why::why_learn_more_lowercase": "Ƙara koyo →",
	"business/why::why_s1_c1":
		"Hauhawar farashi tana faruwa lokacin da aka buga ƙarin kuɗi ko aka ƙirƙira shi daga komai. Yana sa kuɗin da ke aljihunka ya rasa darajarsa da lokaci — kuma shi ne dalilin da yasa farashi ke tashi shekara bayan shekara.",
	"business/why::why_s1_c2":
		"Bitcoin yana da wadata mai ƙayyadewa na tsabar miliyan 21. Babu wata gwamnati, banki ko kamfani da zai iya ƙirƙirar ƙari. Adana kuɗinka a Bitcoin yana riƙe darajar tare da lokaci maimakon rasa shi a hankali.",
	"business/why::why_s2_c1":
		"A cikin shekaru kaɗan da suka gabata, bankunan Amurka da yawa sun faɗi saboda gudun banki. Lokacin da abokan ciniki da yawa suka yi ƙoƙarin cire kuɗi a lokaci ɗaya, bankuna ba su da isasshen kuɗi don biya su gaba ɗaya.",
	"business/why::why_s2_c2":
		"Maimakon riƙe kuɗinka kawai, bankuna suna ba da yawancinsu aro kuma suna saka jari. Idan waɗannan saka jarin sun gaza — ko kuma masu adana kuɗi sun rasa amincewa — bankin zai iya faɗuwa kuma ya daskare ko ya ɓata ajiyarka.",
	"business/why::why_s2_c3":
		"Tare da Bitcoin, za ka iya riƙe kuɗinka kai tsaye a walat ɗinka. Babu banki. Babu 'yan tsaka. Babu gudun banki.",
	"business/why::why_s3_c1":
		"Ba kamar katunan kiredit, PayPal ko asusun banki na al'ada ba, Bitcoin ba ya neman izinin kowa.",
	"business/why::why_s3_c2":
		"Babu wanda zai iya daskare asusunka, toshe biyan kuɗi ko cire ka daga hanyar sadarwa. Tsarin kuɗi ne na farko a tarihi wanda za ka iya amfani da shi cikin yardar kaina, ba tare da tsoron takunkumi ko kwace ba.",
	"business/why::why_s4_c1":
		"Bitcoin sau da yawa ba a fahimta ba, amma yana yin alheri da yawa a hankali a duk faɗin duniya.",
	"business/why::why_s4_c2":
		"Ya taimaka wa masu kare haƙƙin ɗan adam a faɗansu na 'yanci, ya rage hayaƙin methane na duniya daga wuraren shara da rijiyoyin mai, ya tabbatar da hanyoyin sadarwa na lantarki kuma ya ba da kuɗin kayan jama'a kamar wuraren shakatawa na ƙasa.",
	"business/why::why_biz_s1":
		"Ƙananan kuɗi, ƙari ga kasuwanci",
	"business/why::why_biz_s1_c1":
		"Biyan kuɗin Bitcoin yana wuce bankunan da kamfanonin katuna waɗanda ke cajin 2-3% akan kowane sayarwa. Kasuwancin yana riƙe ƙari na abin da kake biya — wanda yake nufin galibi farashi mai kyau da sabis mafi kyau a gare ka.",
	"business/why::why_biz_s2":
		"Saitawa nan take, babu dawowar katuna",
	"business/why::why_biz_s2_c1":
		"Biyan kuɗin Bitcoin yana biya cikin daƙiƙa, kai tsaye daga walat ɗinka zuwa kasuwanci. Babu jinkirin kwanaki kafin banki ya saki kuɗi, kuma babu rikice-rikicen dawowar katuna masu tsada — wanda yake nufin kasuwancin zai iya mai da hankali kan abokan cinikinsa maimakon yaƙi da yaudara.",
	"business/why::why_biz_s3":
		"Karɓa kyauta, mai buɗewa ga kowa",
	"business/why::why_biz_s3_c1":
		"Babu kwangila, kuɗin wata-wata ko kuɗin farawa ga kasuwanci don karɓar Bitcoin. Kuma miliyoyin masu amfani da Bitcoin a duk faɗin duniya suna neman 'yan kasuwa da ke karɓar shi — abin da ke ba wannan kasuwancin nuni kyauta ga sabbin abokan ciniki.",
	"business/why::why_business_cta_intro":
		"Kana da kasuwanci kuma kana son fara karɓar Bitcoin?",
	"business/why::why_business_cta_link":
		"Gano yadda yake aiki →",
	"business/why::why_for_business":
		"Me yasa Bitcoin yake da kyau ga wannan kasuwancin",
	"business/why::why_for_business_intro":
		"Ta hanyar karɓar Bitcoin, wannan kasuwancin yana riƙe ƙari akan kowane sayarwa, yana biya nan take ba tare da dawowar katuna ba kuma yana isa ga masu sauraron duniya na masu amfani da Bitcoin — duk ba tare da kwangila ko kuɗin wata-wata ba.",
	"business/why::why_good_for_you_intro":
		"Bitcoin ba kawai mai amfani ne a wurin sayarwa ba — wani nau'i ne na kuɗi mafi kyau wanda ke kare ajiyarka, sirrinka da 'yancin ma'amalarka. Ga gajeren bayani.",
	"business/why::why_hero_subtitle":
		"Kawai ka duba labari na “Bitcoin Accepted Here”. Ga me yasa wannan labari ne mai kyau — ga wannan kasuwancin da kuma a gare ka.",
	"business/why::why_intro_c1":
		"Kasuwancin da kake a ciki yana karɓar Bitcoin — hanyar sadarwa ta zamani, mai buɗaɗɗen tushe da kowa, ko'ina, zai iya amfani da ita, ba tare da bankuna da 'yan tsaka suna ɗaukar rabonsu ba.",
	"business/why::why_intro_c2":
		"Ƙasa akwai ɗan gajeren bayani na me yasa yake da kyau ga wannan kasuwancin karɓar Bitcoin, da me yasa yake da kyau a gare ka kamar abokin ciniki amfani da Bitcoin.",
	"business/why::why_next_business_label": "KARƁI BITCOIN",
	"business/why::why_next_business_title":
		"Karɓi Bitcoin a kasuwancinka",
	"business/why::why_next_buy_label": "SAYE BITCOIN",
	"business/why::why_next_buy_title": "Saye Bitcoin ɗinka na farko",
	"business/why::why_next_learn_label": "ƘARA KOYO",
	"business/why::why_next_learn_title": "Ƙara koyo game da Bitcoin",
	"business/why::why_next_wallet_label": "SAMI WALAT",
	"business/why::why_next_wallet_title":
		"Sami walat ɗin Bitcoin ɗinka",
	"business/why::why_whats_next_heading": "Ina za ka tafi yanzu?",
	"business/why::why_whats_next_intro":
		"Idan wannan shi ne karo na farko da kake duba labari na Bitcoin, ga wuraren da suka fi amfani don zuwa yanzu.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Tsakanin tsara-tsara (kai tsaye tsakanin masu amfani)",
	"buy::buy_bitcoin_guide": "Yadda ake saye Bitcoin",
	"buy::buy_step_1_header": "Zaɓi ƙasarka",
	"buy::buy_step_2_header": "Zaɓi hanyar biyanka",
	"buy::buy_step_3_header": "Zaɓuɓɓukan sayan ka",
	"buy::buy_step_4_header": "Adana Bitcoin ɗinka cikin aminci",
	"buy::buy_header_subtitle":
		"Jagora mai sauƙi, mataki-mataki don saye Bitcoin ɗinka na farko.",
	"buy::buy_howto_name": "Yadda ake saye Bitcoin",
	"buy::buy_meta_description":
		"Koyi yadda ake saye Bitcoin lafiya tare da jagorarmu mataki-mataki. Zaɓi ƙasarka da hanyar biyanka don nemo zaɓuɓɓuka mafi kyau don saye Bitcoin.",
	"buy::buy_step_1_eyebrow": "Mataki na 1",
	"buy::buy_step_2_eyebrow": "Mataki na 2",
	"buy::buy_step_3_eyebrow": "Mataki na 3",
	"buy::buy_step_4_eyebrow": "Mataki na 4",
	"buy::buy_storage_cta_label": "Mataki na gaba",
	"buy::sources_bisq":
		"Bisq — kasuwar Bitcoin tsakanin tsara-tsara mara tsakiya",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — jagorar duniya na ATM ɗin Bitcoin",
	"buy::sources_kraken":
		"Kraken — kasuwar Bitcoin sananne",
	"buy::sources_relai":
		"Relai — app na riƙe-da-kai Bitcoin na Switzerland",
	"buy::sources_river":
		"River — saye, hakar da riƙon Bitcoin-kawai",
	"buy::sources_strike_lightning":
		"Strike — saye Bitcoin tare da goyan bayan Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — saye akai-akai (DCA) Bitcoin-kawai",
	"buy::buy_bitcoin": "Saye Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Ƙara harshe",
	"common::common_next_buy_bitcoin": "Saye Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Koyi yadda ake saye Bitcoin lafiya",
	"common::common_next_calculate": "Lissafa hauhawar farashinka",
	"common::common_next_calculate_desc":
		"Duba yadda hauhawar farashi ke shafar albashinka da lokaci",
	"common::common_next_get_wallet": "Sami walat",
	"common::common_next_get_wallet_desc":
		"Sami walat ɗin Bitcoin ɗinka na farko — kyauta",
	"common::common_next_keep_learning": "Ci gaba da koyo",
	"common::common_next_keep_learning_desc":
		"Duba yadda Bitcoin ke inganta duniya",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — fihirisar farashin masu siye (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — wadatar kuɗi (fihirisa ta rukuni)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — “Shin gwanjon Treasury zai iya gazawa?”",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Me ke gaba?",
	"common::common_sticker_files_mission_5": "nemi fakiti",
	"common::common_site_tagline": "Ilimin Bitcoin ga kowa.",
	"common::common_source_btc_map":
		"BTC Map — jagorar duniya ta 'yan kasuwa da ke karɓar Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — mai sarrafa biyan kuɗin Bitcoin mai riƙe-da-kai, kyauta, mai buɗaɗɗen tushe",
	"common::common_source_oshi":
		"Oshi — dandali na lada na Bitcoin ga 'yan kasuwa",
	"common::common_source_strike_business":
		"Strike — biyan kuɗin Bitcoin da Lightning ga kasuwanci",
	"common::common_sources_group_bitcoin": "Bayanan Bitcoin",
	"common::common_sources_group_cpi":
		"Hauhawar farashi / fihirisar farashin masu siye",
	"common::common_sources_group_debt": "Bashin gwamnati",
	"common::common_sources_group_money": "Bayanan wadatar kuɗi",
	"common::common_sources_group_stories": "Misalai daga rayuwa",
	"common::common_sticker_files_mission_6":
		"na labaru kyauta a Turanci.",
	"common::common_sticker_files_next_flyers_label": "Takardun bugawa",
	"common::common_sticker_files_next_flyers_title":
		"Buga takardar Bitcoin",
	"common::common_sticker_files_next_languages_label":
		"Fayilolin labaru",
	"common::common_sticker_files_next_languages_title":
		"Duba fayilolin labaru a wasu harsuna",
	"common::common_sticker_files_print_these":
		"BUGA SU A DANNAWA 1",
	"common::common_sticker_name_bdhi_black":
		"Labari na “Bitcoin Doesn\u2019t Have Inflation” (baki)",
	"common::common_sticker_name_bdhi_orange":
		"Labari na “Bitcoin Doesn\u2019t Have Inflation” (lemu)",
	"common::common_sticker_name_caution":
		"Labari na Bitcoin “Caution! Melting Ice Cube”",
	"common::common_sticker_name_cure_inflation":
		"Labari na Bitcoin “Cure Inflation”",
	"common::common_sticker_name_danger":
		"Labari na Bitcoin “Danger! Inflation Ahead”",
	"common::common_sticker_name_fix":
		"Labari na Bitcoin “Fix The Money, Fix The World”",
	"common::common_sticker_name_got_inflation":
		"Labari na Bitcoin “Got Inflation?”",
	"common::common_sticker_name_study":
		"Labari na “Study Bitcoin”",
	"common::common_sticker_name_warning":
		"Labari na Bitcoin “Warning! Inflation is Stealing Your Savings”",
	"common::common_sticker_name_what_if":
		"Labari na Bitcoin “What if your money didn\u2019t have inflation?”",
	"common::common_sticker_tips_heading": "Shawarwari ga labaranka",
	"common::common_sticker_tips_intro":
		"Da zarar ka buga labaranka, sa su inda mutane za su gan su! Wuraren da suka dace:",
	"common::common_sticker_tips_list_1":
		"Wuraren jama'a inda mutane za su gan su",
	"common::common_sticker_tips_list_2":
		"Wuraren da ba shi yiwuwa a cire su da sauri (labaru ba sa lalata har abada)",
	"common::common_sticker_tips_list_3":
		"Saman da ke manna da kyau (ƙarfe, plastik, gilashi)",
	"common::common_sticker_tips_list_4":
		"BA akan kayan masarufi na sirri ba, alamomin hanya, ATM ko famfunan mai",
	"common::common_stickers_printer_prefix": "Muna amfani da",
	"common::common_stickers_printer_suffix":
		"amma kana iya amfani da kowane mai bugawa na labaru.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — fihirisar farashin masu siye ga duk masu sayan birane",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — wadatar kuɗin M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Lissafa giɓin hauhawar farashinka",
	"compound-inflation-calculator::cic_cta_label": "Mataki na gaba",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Gano nawa albashinka ya kamata ya ƙaru don ci gaba da hauhawar farashi.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Bincika wasu batutuwa",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Duba yadda Bitcoin ke da alaƙa da kuɗi, 'yanci, makamashi da ƙari.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Koyi yadda hauhawar farashi ke aiki",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Yadda ake buga waɗannan takardun Bitcoin da rataye su",
	"flyers::flyers_hero_subtitle":
		"Takardun Bitcoin kyauta, masu yiwuwar bugawa. Rataye su a wuraren jama'a don taimakawa ƙarin mutane su koyi game da Bitcoin.",
	"flyers::flyers_hero_title": "Buga da rataye takardun Bitcoin",
	"flyers::flyers_next_get_stickers": "Yaɗa kalmar",
	"flyers::flyers_next_get_stickers_desc":
		"Yi oda fakitin labaru kyauta na Bitcoin",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Shiga kuma taimaka wajen yaɗa Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Kana son taimakawa wajen gina tattalin arziki na zagaye na Bitcoin? Hanya mafi sauƙi ita ce taimakawa kasuwanci na cikin gida fara karɓar biyan kuɗin Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Ka san wani kasuwanci da zai kasance a buɗe ga ra'ayin? Aika mai shi zuwa shafinmu",
	"get-involved::get_involved_business_content_3":
		"Bitcoin don kasuwanci.",
	"get-involved::get_involved_description":
		"Albarkatunmu na kyauta suna sa ya zama mai sauƙi a yaɗa karɓar Bitcoin. Labaru, takardu, labaru “Bitcoin Accepted Here” ga kasuwanci, da lambar tushe mai buɗewa wadda kowa zai iya ba da gudummawa.",
	"get-involved::get_involved_header":
		"Shiga kuma taimaka wajen yaɗa Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Za ka iya taimaka wa wannan ya canja. Mun ƙirƙira albarkatu kyauta da yawa waɗanda ke sa ya zama mai sauƙi a yaɗa fata da Bitcoin ke kawowa a al'ummarka.",
	"get-involved::get_involved_biz_stickers_note":
		"Kana karɓar Bitcoin a yanzu? Faɗa wa abokan cinikinka tare da labaranmu kyauta na “Bitcoin Accepted Here”. Muna aika fakiti zuwa kowane adireshi a Amurka ko Kanada, ko za ka iya buga naka ko'ina a duniya.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Labaru “Accepted Here”",
	"get-involved::get_involved_card_biz_stickers_source":
		"Tushen: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Labaru kyauta na “Bitcoin Accepted Here” don kasuwancinka",
	"get-involved::get_involved_card_business_label":
		"Bitcoin don kasuwanci",
	"get-involved::get_involved_card_business_source":
		"Tushen: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Duk abin da kasuwanci ke buƙata don fara karɓar biyan kuɗin Bitcoin",
	"get-involved::get_involved_card_flyers_label":
		"Takardun bugawa",
	"get-involved::get_involved_card_flyers_source":
		"Tushen: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Saukar da kuma buga takardar Bitcoin kyauta",
	"get-involved::get_involved_card_github_label": "Buɗaɗɗen tushe",
	"get-involved::get_involved_card_github_source": "Tushen: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Ba da gudummawa ga bitcoin.rocks akan GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Labaru kyauta",
	"get-involved::get_involved_card_stickers_source":
		"Tushen: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Yi oda fakitin labaru kyauta na Bitcoin da aka aika zuwa ƙofar gidanka",
	"get-involved::get_involved_flyers_content_1":
		"Takardu na ɗaya daga cikin hanyoyi mafi sauƙi don kawo Bitcoin a al'ummarka. Saukar da takardar Bitcoin ɗinmu kyauta, yi kwafi da yawa kamar yadda kake so kuma rataye su a allunan sanarwa, a kafe, a tarurruka ko ko'ina mutane suka taru.",
	"get-involved::get_involved_flyers_content_2":
		"Kowace takarda tana da kanun jagora mai jan hankali da lambar QR da ke kawo masu karatu masu sha'awa zuwa bitcoin.rocks don ƙarin koyo.",
	"get-involved::get_involved_flyers_content_3":
		"Ba kamar labaru ba, takardu za a iya buga su a kan buƙata daga ko'ina a duniya — kana buƙatar firinta da minti kaɗan kawai.",
	"get-involved::get_involved_flyers_header":
		"Buga da rataye takarda",
	"get-involved::get_involved_flyers_image_alt":
		"Bita na takardar Bitcoin kyauta mai yiwuwar bugawa daga bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks aiki ne kyauta, mai buɗaɗɗen tushe a ƙarƙashin lasisin MIT. Manufarmu ita ce hanzarta karɓar Bitcoin ta hanyar ilimi — kuma ba za mu iya yin haka da kanmu ba.",
	"get-involved::get_involved_github_content_2":
		"Ko kana mai haɓakawa, mai zane, marubuci ko mai fassara, akwai hanya don taimakawa. Muna musamman maraba da masu ba da gudummawa waɗanda za su iya fassara abun cikinmu zuwa ƙarin harsuna, don mutane a duk faɗin duniya su iya koyo game da Bitcoin a cikin harshen mahaifarsu.",
	"get-involved::get_involved_github_content_3":
		"Fork ma'adanarmu, buɗe pull request, ƙirƙiri issue ko sa tauraro a kan aikin. Kowace gudummawa tana taimakawa Bitcoin ya isa ga ƙarin mutane.",
	"get-involved::get_involved_github_header":
		"Ba da gudummawa akan GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Fakitin labaran rubutu na Bitcoin kyauta daga bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "adana kuɗi",
	"index::home_card_label_art_1": "Mu yi kwatance",
	"index::home_card_label_art_2": "Yaɗa kalmar",
	"index::home_card_label_art_3": "Fasahar tituna",
	"index::home_card_label_bank_runs": "Tsarin cikakken ajiya",
	"index::home_card_label_bonds": "Mu yi kwatance",
	"index::home_card_label_business_1": "Menene bambancin?",
	"index::home_card_label_business_2": "Karɓi biyan kuɗin Bitcoin",
	"index::home_card_label_cash": "Mu yi kwatance",
	"index::home_card_label_cbdc": "A buɗe ko a rufe?",
	"index::home_card_label_coding_1": "Darasi mai hulɗa",
	"index::home_card_label_coding_2": "Gina kayan masarufi",
	"index::home_card_label_coding_3": "Ƙalubalen shirye-shirye",
	"index::home_card_label_crowdfunding_1": "Zanga-zangar EndSARS",
	"index::home_card_label_crowdfunding_2": "Kuɗi da ba za a iya tsayar da shi ba",
	"index::home_card_label_crowdfunding_3": "Tara kuɗi don aikinka",
	"index::home_card_label_crypto": "Menene bambancin?",
	"index::home_card_label_energy_1": "Tabbatar da hanyoyin sadarwa na lantarki",
	"index::home_card_label_energy_4": "Sarrafa buƙata",
	"index::home_card_label_energy_5": "Wutar lantarki ta karkara",
	"index::home_card_label_energy_6": "Lada ga sabuntawa",
	"index::home_card_label_environment_1": "Rage methane",
	"index::home_card_label_environment_2": "Ya ceci wani wurin shakatawa na ƙasa",
	"index::home_card_label_environment_3": "Masana'anta mafi tsabta",
	"index::home_card_label_environment_4": "Yana rage konewar gas",
	"index::home_card_label_equality_1": "Bege da dama",
	"index::home_card_label_equality_2": "Mai daidaitawa",
	"index::home_card_label_food_1": "Farashin abinci",
	"index::home_card_label_food_2": "Gonaki da ƙasa",
	"index::home_card_label_freedom_1": "Gwamnatocin mulkin kama-karya",
	"index::home_card_label_freedom_2": "Kayan aiki na musamman",
	"index::home_card_label_get_started_1":
		"Asasin ga masu farawa",
	"index::home_card_label_get_started_2": "Walat ɗinka na farko",
	"index::home_card_label_get_started_3": "Saye Bitcoin",
	"index::home_card_label_gold": "Wanene ya fi?",
	"index::home_card_label_housing_1": "Gidaje masu sauƙi",
	"index::home_card_label_human_rights_1":
		"Yana inganta haƙƙin ɗan adam",
	"index::home_card_label_human_rights_2": "Karɓuwa daga jama'a",
	"index::home_card_label_human_rights_3": "Tasiri na duniya",
	"index::home_card_label_inflation": "Bitcoin kuɗi ne mafi kyau",
	"index::home_card_label_networks_1": "Nuni na hanyar sadarwa kai tsaye",
	"index::home_card_label_networks_2": "Mu yi kwatance",
	"index::home_card_label_payments_1": "Menene bambancin?",
	"index::home_card_label_payments_2": "Biyan kuɗi mai sauri da arha",
	"index::home_card_label_payments_3": "Tura kuɗi zuwa ƙetare",
	"index::home_card_label_payments_4": "Karɓi biyan kuɗi",
	"index::home_card_label_politics_1": "Sabani na siyasa",
	"index::home_card_label_politics_2": "Garanti mai ƙarfi",
	"index::home_card_label_property_rights_1": "Mu yi kwatance",
	"index::home_card_label_property_rights_2": "Mallaka ta gaske",
	"index::home_card_label_salary": "Kare albashinka",
	"index::home_card_label_self_custody_1":
		"Jagorar walat na Bitcoin",
	"index::home_card_label_self_custody_2": "Matakin mafi muhimmanci",
	"index::home_card_label_self_custody_3": "Kuɗi mai mulkin kansa",
	"index::home_card_label_war_1": "Ƙarshen yaƙe-yaƙe marasa ƙarshe",
	"index::home_card_label_war_2": "Taimako ga tsoffin sojoji",
	"index::home_card_label_war_3": "Tserewa daga yaƙi",
	"index::home_h1":
		"Bitcoin kuɗi ne mafi kyau wanda ke gina duniya mafi kyau.",
	"index::home_nav_about": "Game da",
	"index::home_nav_get_involved": "Shiga",
	"index::home_nav_learn": "Koyi",
	"index::home_source_prefix": "Tushen:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon da Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Duba",
	"lightning::lightning_grid_heading":
		"Walat na Lightning sananne",
	"lightning::lightning_hardware_cta_label":
		"Walat na kayan masarufi",
	"lightning::lightning_header_subtitle":
		"Lightning yana ba ka damar aika Bitcoin a cikin daƙiƙa akan kashi ɗaya na cent — zaɓi walat wanda yake daidaita aiki da adadin Bitcoin da kake kashe.",
	"lightning::lightning_s1_c4_end": "don ƙarin bayani.",
	"lightning::lightning_s1_c4_link":
		"jagorar walat na kayan masarufi na Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ — walat na Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — walat na Lightning mai riƙe-da-kai",
	"lightning::sources_lightning_labs":
		"Lightning Labs — takardar shaida ga Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — walat na Lightning mai mai kulawa",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android da yanar gizo",
	"nostr/index::nostr_platform_web": "Mai bincike na yanar gizo",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr sabon yarjejeniya ce mara tsakiya don sadarwa akan layi — babu wani kamfani da ke mallakar ta, akwai zaps na Bitcoin a ciki, kuma za ka iya canja kiranta ba tare da rasa mabiyan ka ba.",
	"nostr/index::nostr_amethyst_f1":
		"Halaye da yawa da zaɓuɓɓuka na musamman",
	"nostr/index::nostr_amethyst_f2":
		"Yana buƙatar walat ɗin Bitcoin daban",
	"nostr/index::nostr_amethyst_f3": "100% kyauta",
	"nostr/index::nostr_damus_f1":
		"Mahaɗin da ke kama da Twitter",
	"nostr/index::nostr_damus_f2":
		"Yana buƙatar walat ɗin Bitcoin daban",
	"nostr/index::nostr_damus_f3": "100% kyauta",
	"nostr/index::nostr_download_heading":
		"Saukar da kiran Nostr kyauta",
	"nostr/index::nostr_download_intro":
		"Kiran Nostr ne aikace-aikacen kyauta waɗanda ke ba ka damar karantawa da rubutu a hanyar sadarwar Nostr. Suna duka aiki tare — za ka iya canja kiran a kowane lokaci kuma ka riƙe mabiyan ka da abun cikin ka.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr sabon yarjejeniya ce mara tsakiya don sadarwa akan layi — babu wani kamfani da ke mallakar ta, akwai zaps na Bitcoin a ciki, kuma za ka iya komawa daga aikace-aikace zuwa aikace-aikace ba tare da rasa mabiyan ka ba.",
	"nostr/index::nostr_hero_title": "Menene Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr yana aiki kamar imel: babu wani da ke mallakar yarjejeniyar, kowa zai iya gina aikace-aikace akan ta kuma ka zaɓi wanda kake fi so. Ba kamar Twitter ko Facebook ba, babu kamfani na tsakiya da zai iya yi maka takunkumi, hana ka ko iyakance ka.",
	"nostr/index::nostr_intro_c2":
		"Ƙasa akwai ɗan gajeren bayani na me yasa Nostr yake da muhimmanci — sannan dukkan kiran Nostr kyauta da kake buƙata don farawa yau.",
	"nostr/index::nostr_iris_f1":
		"Mai sauƙi sosai — babu buƙatar shigarwa",
	"nostr/index::nostr_iris_f2":
		"Hanya mai sauƙi don gwada Nostr tare da asusun gwaji",
	"nostr/index::nostr_iris_f3": "100% kyauta",
	"nostr/index::nostr_learn_more_label": "ZURFAFA",
	"nostr/index::nostr_learn_more_title":
		"Ƙara koyo game da Nostr a nostr.how",
	"nostr/index::nostr_primal_f1": "Kiran farko da muka ba da shawara",
	"nostr/index::nostr_primal_f2":
		"Walat ɗin zap na Bitcoin a ciki",
	"nostr/index::nostr_primal_f3": "100% kyauta",
	"nostr/index::nostr_s1": "Yarjejeniya, ba dandali ba",
	"nostr/index::nostr_s1_c1":
		"Nostr sabon yarjejeniya ce wadda ke ba ka damar yin sadarwa akan layi ba tare da tsoron takunkumi, hani ko ƙuntatawa ba.",
	"nostr/index::nostr_s1_c2":
		"Dandali kamar Twitter da Facebook ana sarrafa su ne ta kamfani guda, amma babu wani da ke sarrafa yarjejeniyar Nostr.",
	"nostr/index::nostr_s2": "Kyauta a komawa",
	"nostr/index::nostr_s2_c1":
		"Nostr yana aiki kamar imel. Babu wani ke kula da yarjejeniyar imel, kuma kowa zai iya gina kiran akan ta (kamar Gmail, Hotmail, da sauransu).",
	"nostr/index::nostr_s2_c2":
		"Babu wani da ke sarrafa yarjejeniyar Nostr ko, kuma kowa zai iya gina kiran akan ta (kamar Damus, Amethyst, da sauransu).",
	"nostr/index::nostr_s2_c3":
		"Idan ba ka son yadda wani kiran ke aiki, za ka iya komawa da asusun Nostr ɗinka zuwa wani kiran ba tare da rasa mabiyan ka ko abun ciki ba.",
	"nostr/index::nostr_s3": "Bitcoin yana ciki",
	"nostr/index::nostr_s3_c1":
		"Bitcoin yana cikin yarjejeniyar Nostr. Lokacin da ka ga abun ciki da kake so, za ka iya aika “zap na Bitcoin” zuwa marubucin a sauƙaƙe a matsayin godiya.",
	"nostr/index::nostr_s3_c2":
		"A dandali na tsakiya kamar Twitter da Facebook, kamfani na tsakiya yana samun kuɗi daga abun cikin ka. Amma a yarjejeniyar buɗewa kamar Nostr, kai ne ke samun kuɗi daga abun cikin ka.",
	"nostr/index::sources_damus": "Damus — kiran Nostr na iPhone",
	"nostr/index::sources_iris": "Iris — kiran Nostr a mai bincike",
	"nostr/index::sources_nostr_how": "nostr.how — Menene Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Yarjejeniyar Nostr — bayyani mai buɗaɗɗen tushe",
	"nostr/index::sources_primal":
		"Primal — kiran Nostr tare da walat ɗin zap na Bitcoin a ciki",
	"nostr/index::what_is_nostr": "Menene Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Buga labaranka na Bitcoin tare da waɗannan fayiloli.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"An karɓi buƙatar 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Yi oda mai yawa",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Raba a Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Menene Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Kana buƙatar ƙarin labaru?",
	"sticker-success::sticker_success_hero_title":
		"Labaranka suna kan hanya 🎉",
	"sticker-success::sticker_success_share_header":
		"Raba inda ka sa labaranka",
	"sticker-success::sticker_success_tips_header":
		"Wuraren da suka dace don sa labaru",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Da zarar ka fara, buga kuma rataye takardunka kuma",
	"stickers::stickers_instructions_1":
		"Shigar da adireshin wasiku kuma za mu aika fakitin labaran Bitcoin kyauta zuwa gareka ta hanyar wasiku. Labaranka za su zo a cikin ambulan farin mai sauƙi.",
	"stickers::stickers_btn_choose_pack": "Zaɓi wannan fakitin",
	"stickers::stickers_bulk_c1":
		"Kana buƙatar fiye da labaru kaɗan?",
	"stickers::stickers_bulk_c2":
		"Yi oda mai yawa daga mai bugawa iri ɗaya da muke amfani da shi",
	"stickers::stickers_bulk_c3":
		"— ƙari da ka saya, ƙarancin kuɗin kowane ɗaya.",
	"stickers::stickers_bulk_cta": "Saye labaru mai yawa",
	"stickers::stickers_bulk_header":
		"Yi oda labaru mai yawa",
	"stickers::stickers_hero_subtitle":
		"Yi oda fakitin labaran Bitcoin kyauta kuma sa su a wuraren jama'a don taimakawa ƙarin mutane su koyi game da Bitcoin.",
	"stickers::stickers_hero_title":
		"Labaru kyauta na Bitcoin",
	"stickers::stickers_intro_c1":
		"Manufarmu ita ce taimaka maka “orange-pill” ƙarin mutane ta hanyar sa labaran Bitcoin a wuraren jama'a. Dukkan labaran mu suna da lambobin QR waɗanda ke kawowa zuwa shafuka na ilimi akan ",
	"stickers::stickers_intro_c3": "hauhawar farashi",
	"stickers::stickers_intro_c4":
		"Zaɓi fakitin labaru a ƙasa kuma zaɓi yadda kake son su — za mu aika fakiti kyauta zuwa kowa a Amurka ko Kanada, ko za ka iya buga naka ko'ina a duniya.",
	"stickers::stickers_mail_header":
		"Za mu aika labaranka kyauta zuwa gareka ta hanyar wasiku",
	"stickers::stickers_next_print_flyers": "Yaɗa saƙon a tsawo",
	"stickers::stickers_next_print_flyers_desc":
		"Buga takardun Bitcoin kyauta kuma rataye su a wuraren jama'a",
	"stickers::stickers_option_bulk":
		"📦 A duk faɗin duniya — yi oda mai yawa",
	"stickers::stickers_option_canada":
		"🇨🇦 Kanada — kyauta ta hanyar wasiku",
	"stickers::stickers_option_print":
		"🌍 A duk faɗin duniya — buga naka",
	"stickers::stickers_option_usa":
		"🇺🇸 Amurka — kyauta ta hanyar wasiku",
	"stickers::stickers_print_c1":
		"Za ka iya shiga ta hanyar buga labaranka ko'ina kake. Danna harshenka a ƙasa don saukar da fayilolin labaru da umarnin bugawa.",
	"stickers::stickers_print_c2":
		"Ba duk labaran ne suka kasance a kowane harshe ba.",
	"stickers::stickers_print_header":
		"Buga fayilolin labaranka",
	"stickers::stickers_request_c1":
		"Cika fom ɗin da ke ƙasa don neman fayilolin labaru a cikin harshenka na cikin gida. Za mu sanar da kai da zarar sun shirya.",
	"stickers::stickers_request_header":
		"Ba ka ga harshenka ba?",
	"stickers::stickers_share_c2":
		"Bi mu a Nostr ta hanyar bincike",
	"stickers::stickers_share_c3":
		"a kowane kiran Nostr.",
	"stickers::stickers_signs_pack_description":
		"Alamomin gargaɗi, lura da faɗakarwa tare da saƙonni na Bitcoin — an ƙera su don jan hankali da sa mutane su tsaya don karanta.",
	"stickers::stickers_step_1_description":
		"Kowane fakiti yana da nau'in labaran Bitcoin daban-daban tare da lambobin QR waɗanda ke koya wa mutane menene Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "MATAKI NA 1",
	"stickers::stickers_step_1_header":
		"Zaɓi fakitin labaru",
	"stickers::stickers_step_2_description":
		"Muna aika fakitoci kyauta zuwa adireshin a Amurka da Kanada. Ko'ina kuma a duniya, za ka iya buga naka ko ka yi oda mai yawa.",
	"stickers::stickers_step_2_eyebrow": "MATAKI NA 2",
	"stickers::stickers_step_2_header":
		"Yaya kake son labaranka?",
	"stickers::stickers_text_pack_description":
		"Cakuda kalmomi da maganganun Bitcoin da aka ƙera don haifar da sha'awa a wuraren jama'a.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Zaɓi walat ɗinka",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — kimantawa na ajiyar ƙarfe ga jumlolin dawowa na Bitcoin",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — walat ɗin Bitcoin mai riƙe-da-kai",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — walat na kayan masarufi na Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — walat na kayan masarufi na Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — walat na kayan masarufi na Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — walat na kayan masarufi na Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — na'urar sa hannu DIY mai buɗaɗɗen tushe don ma'amalolin Bitcoin",
	"wallets::wallets_grid_heading": "Walat na Bitcoin sananne",
	"wallets::wallets_header_subtitle":
		"Jagora mataki-mataki don zaɓar walat, kare maɓallan ka da ɗaukar cikakken iko akan Bitcoin ɗinka.",
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
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (ha): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
