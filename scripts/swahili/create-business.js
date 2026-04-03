/**
 * Creates Swahili (sw) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sw';
const today = '2026-04-03';

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
	"bitcoin_is_good_for_business": "Bitcoin ni nzuri kwa biashara",
	"biz_header": "BITCOIN NI NZURI KWA BIASHARA",
	"biz_s1": "Ada ndogo bila kima cha chini",
	"biz_s1_c1": "Bitcoin inakuwezesha kupokea malipo moja kwa moja kutoka kwa wateja wako, kama vile fedha taslimu. Mtandao wa Bitcoin unafanya kazi bila wasuluhishi kama benki na makampuni ya kadi za mkopo ambayo yanachukua ada kubwa.",
	"biz_s2": "Malipo ya papo hapo",
	"biz_s2_c1": "Kama fedha taslimu, malipo ya Bitcoin yanakamilika papo hapo. Huhitaji kusubiri kampuni yako ya kadi ya mkopo au benki ikikulipa. Badala yake, unapata ufikiaji wa pesa yako mara moja.",
	"biz_s3": "Hakuna malipo ya kurudishwa au udanganyifu",
	"biz_s3_c1": "Kwa sababu malipo ya Bitcoin yanatokea moja kwa moja kati yako na wateja wako, haiwezekani kwa mtu yeyote kurudisha pesa yako kwa malipo ya kurudishwa.",
	"biz_s3_c2": "Bitcoin bandia haiwezi kutumwa kwenye Mtandao wa Bitcoin, ikimaanisha huhitaji wasiwasi kuhusu miamala ya udanganyifu ambayo inaweza kugharimu biashara yako pesa.",
	"biz_s4": "Pata wateja zaidi",
	"biz_s4_c1": "Mamilioni ya watu wanamiliki Bitcoin na wanataka kutumia Bitcoin yao mahali panapokubali.",
	"biz_s4_c2": "Kwa kukubali tu Bitcoin, biashara yako inaweza kuorodheshwa kwenye ramani za wafanyabiashara wa Bitcoin na kupata uonekano wa bure kwa wateja wapya wa Bitcoin.",
	"biz_s4_c3": "Kukubali Bitcoin ni bure 100%. Hakuna mikataba au ada zilizofichwa."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Jifunze kwa nini Bitcoin ni nzuri kwa biashara",
	"why_header": "BITCOIN NI NZURI KWA BIASHARA",
	"why_good_for_you": "BITCOIN NI NZURI KWAKO PIA!",
	"why_learn_more_lowercase": "Jifunze zaidi.",
	"why_s1": "Bitcoin haina mfumuko wa bei",
	"why_s1_c1": "Mfumuko wa bei hutokea wakati pesa zaidi zinachapishwa au kuundwa kutoka hewani. Hii inafanya pesa yako kuwa na thamani ndogo kwa muda.",
	"why_s1_c2": "Bitcoin ina ugavi uliowekwa, ikimaanisha hakuna mtu anayeweza kuchapisha Bitcoin zaidi.",
	"why_s2": "Bitcoin haina mikimbilio ya benki",
	"why_s2_c1": "Benki kadhaa za Marekani zimeanguka katika miaka michache iliyopita kutokana na mikimbilio ya benki.",
	"why_s2_c2": "Badala ya kushikilia pesa yako tu kwa ajili yako, benki zinawekeza na kukopesha pesa yako. Kama uwekezaji huo haukufanikiwa vizuri, hawana pesa za kutosha kukulipa.",
	"why_s2_c3": "Na mfuko wa bima wa FDIC una $1 tu kwa kila $100 wanayobima.",
	"why_s3": "Bitcoin haihitaji ruhusa",
	"why_s3_c1": "Tofauti na mitandao ya kawaida ya fedha, Bitcoin haihitaji ruhusa kutumika.",
	"why_s3_c2": "Hiyo inamaanisha hakuna mtu anayeweza kukuzuia kutumia Bitcoin kwa sababu yoyote. Ni mtandao wa kwanza wa fedha unaoweza kutumia bila hofu ya udhibiti au kunyang'anywa.",
	"why_s4": "Bitcoin inajenga ulimwengu bora",
	"why_s4_c1": "Bitcoin ni teknolojia isiyoeleweka vizuri ambayo inajenga ulimwengu bora.",
	"why_s4_c2": "Bitcoin imewezesha wanaharakati wa haki za binadamu kupigania uhuru, imepunguza utoaji wa methane duniani, imehifadhi hifadhi za taifa, na mengi zaidi."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Kubali Malipo ya Bitcoin katika Biashara Yako",
	"guide_header": "UKO TAYARI KUKUBALI BITCOIN KATIKA BIASHARA YAKO?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Maswali Yanayoulizwa Mara kwa Mara kuhusu Kukubali Bitcoin",
	"faq_description": "Una maswali kuhusu kukubali malipo ya Bitcoin katika biashara yako?",
	"faq_header": "UNA MASWALI KUHUSU KUKUBALI MALIPO YA BITCOIN?",
	"faq_s1": "Bitcoin ni nini?",
	"faq_s1_c1": "Bitcoin ni vitu viwili: pesa za kidijitali na mtandao wa kompyuta.",
	"faq_s1_c2": "Unaweza kutuma bitcoin (pesa za kidijitali) moja kwa moja kwa watu wengine ukitumia Mtandao wa Bitcoin.",
	"faq_s1_c3": "Mtandao wa Bitcoin unaweza kufanya kazi bila wasuluhishi au mamlaka kuu, kama benki au makampuni ya kadi za mkopo, kwa hivyo unaweza kuepuka ada zao za miamala.",
	"faq_s1_c4": "Miamala ya Bitcoin inakamilika haraka (dakika 10) na haiwezi kamwe kurudishwa, kwa hivyo unaweza kulala kwa amani ukijua pesa yako ni pesa yako.",
	"faq_s2": "Bitcoin inaweza kunufaisha biashara yangu vipi?",
	"faq_s2_c1": "Bitcoin inakuruhusu kukubali malipo kwa ada ndogo na kupata wateja zaidi. Malipo ya Bitcoin yana ada ndogo bila kima cha chini, yanakamilika papo hapo, na hayashambuliwi na malipo ya kurudishwa au udanganyifu.",
	"faq_s2_c2": "Kukubali Bitcoin ni bure na kunakuruhusu kuorodhesha biashara yako kwenye ramani za wafanyabiashara wa Bitcoin ili watumiaji wa Bitcoin waweze kupata biashara yako kwa urahisi.",
	"faq_s2_c3": "Angalia njia zote ambazo Bitcoin ni nzuri kwa biashara.",
	"faq_s3": "Ninakubali vipi malipo ya Bitcoin?",
	"faq_s3_c1": "Unachohitaji kukubali malipo ya Bitcoin ni pochi ya Bitcoin ya bure.",
	"faq_s3_c2": "Mwongozo wetu wa pochi utakusaidia kuanzisha haraka na kwa urahisi ili uweze kufungua faida za kukubali Bitcoin leo!",
	"faq_s3_c3": "Angalia Mwongozo wa Pochi",
	"faq_s4": "Je, ninaweza kubadilisha malipo ya Bitcoin ninayopokea kuwa sarafu yangu ya ndani?",
	"faq_s4_c1": "Ndiyo! Kwa kutumia pochi ya mseto, unaweza kubadilisha malipo ya Bitcoin unayopokea kuwa sarafu yako ya ndani mara tu malipo yanapopokewa.",
	"faq_s4_c2": "Mwongozo wetu wa pochi unaweza kukusaidia kuanzisha haraka na kwa urahisi.",
	"faq_s4_c3": "Unaweza pia kuchagua kushikilia sehemu ya malipo unayopokea kama Bitcoin. Kuhifadhi katika Bitcoin kuna faida nyingi:",
	"faq_s4_c4": "Bitcoin ni mfumo kamili wa fedha wa akiba.",
	"faq_s4_c5": "Bitcoin haina mfumuko wa bei.",
	"faq_s4_c6": "Faida hizi zinafanya Bitcoin kuwa njia nzuri ya kuhifadhi pesa kwa muda mrefu.",
	"faq_s4_c7": "Hata ukichagua kubadilisha malipo yako yote ya Bitcoin kuwa dola, bado unapata faida za kukubali malipo kwa ada ndogo zaidi wakati unafikia wateja wengi zaidi.",
	"faq_s5": "Je, ninaweza kukubali malipo ya Bitcoin ana kwa ana?",
	"faq_s5_c1": "Ndiyo! Ni rahisi kukubali malipo ya Bitcoin ana kwa ana ukitumia pochi ya Bitcoin.",
	"faq_s5_c2": "Mwongozo wetu wa pochi unaweza kukusaidia kuchagua pochi ya Bitcoin inayofaa zaidi kwa biashara yako.",
	"faq_s5_c3": "Angalia Mwongozo wa Pochi",
	"faq_s6": "Je, ninaweza kukubali malipo ya Bitcoin mtandaoni?",
	"faq_s6_c1": "Ndiyo! Ni rahisi kukubali malipo ya Bitcoin mtandaoni na duka lako lililopo la mtandaoni.",
	"faq_s6_c2": "Angalia mwongozo wetu wa pochi kwa maelezo zaidi.",
	"faq_s7": "Ninawezaje kuwajulisha wateja wangu kuwa ninakubali Bitcoin?",
	"faq_s7_c1": "Tunatoa vibandiko vya bure vya 'Bitcoin Inakubaliwa Hapa' ambavyo unaweza kuonyesha katika biashara yako kuwajulisha wateja wako kuwa unakubali Bitcoin.",
	"faq_s7_c2": "Bofya hapa kuomba vibandiko vyako.",
	"faq_s7_c3": "Unaweza pia kuorodhesha biashara yako kwenye ramani za wafanyabiashara wa Bitcoin bure na kupata uonekano kwa mamilioni ya watumiaji wa Bitcoin wanaotaka kutumia Bitcoin yao katika biashara zinazokubali.",
	"faq_s7_c4": "Orodheshwa sasa.",
	"faq_s8": "Ninawezaje kupata wateja zaidi kwa kukubali Bitcoin?",
	"faq_s8_c1": "Kuna mamilioni ya watumiaji wa Bitcoin wanaotaka kutumia Bitcoin yao katika biashara zinazokubali.",
	"faq_s8_c2": "Kwa kukubali tu malipo ya Bitcoin, biashara yako inaweza kuorodheshwa kwenye ramani za bure za wafanyabiashara wa Bitcoin na kukupa uonekano kwa wateja wapya.",
	"faq_s8_c3": "Orodheshwa sasa.",
	"faq_s9": "Inagharimu kiasi gani kukubali Bitcoin?",
	"faq_s9_c1": "Kukubali Bitcoin katika biashara yako ni bure 100%. Hakuna mikataba au ada zilizofichwa.",
	"faq_s9_c2": "Angalia mwongozo wetu wa pochi kuanza kukubali malipo ya Bitcoin leo."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Jinsi ya Kukubali Malipo ya Bitcoin",
	"wallets_header": "PATA POCHI YA BITCOIN YA BURE KUKUBALI MALIPO YA BITCOIN",
	"wallets_intro_1": "Pochi zote za Bitcoin zinafanya kazi pamoja, kwa hivyo wateja wako wanaweza kukulipa kwa Bitcoin bila kujali wanatumia pochi gani.",
	"wallets_intro_2": "Pochi za Bitcoin pekee:",
	"wallets_intro_3": "Hizi ni pochi safi za Bitcoin zinazofungua faida zote za Bitcoin: hakuna wasuluhishi, ada ndogo, na hakuna malipo ya kurudishwa au udanganyifu.",
	"wallets_intro_4": "Pochi za mseto:",
	"wallets_intro_5": "Hizi zinakuruhusu kubadilisha sehemu yoyote ya Bitcoin yako kuwa dola mara tu mteja anapokulipia. Ada bado ni chini ya malipo ya kadi ya mkopo, lakini ni za juu kuliko malipo safi ya Bitcoin.",
	"wallets_intro_6": "Zote mbili ni njia nzuri za kukubali Bitcoin. Pochi maalum unayotumia itategemea ukubwa na aina ya biashara yako.",
	"wallets_choice_sole": "pochi kwa biashara zinazomilikiwa na mtu mmoja",
	"wallets_choice_multiple": "pochi kwa biashara zenye wafanyakazi wengi",
	"wallets_choice_online": "pochi kwa biashara za mtandaoni",
	"wallets_choice_invoice": "pochi kwa biashara zinazotumia ankara",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Unaweza kukubali malipo ya Bitcoin na kituo chako cha Square PoS kilichopo au muunganisho wa duka la mtandaoni. Kamwe haijawahi kuwa rahisi zaidi kukubali malipo ya Bitcoin.",
	"wallets_feature_bitcoin_only": "Pochi ya Bitcoin pekee",
	"wallets_feature_no_info": "Hakuna taarifa inayohitajika",
	"wallets_feature_in_person": "Malipo ya ana kwa ana pekee",
	"wallets_feature_settles_bitcoin": "Inakamilika 100% katika Bitcoin",
	"wallets_feature_hybrid": "Pochi ya mseto",
	"wallets_feature_info": "Taarifa za biashara zinahitajika",
	"wallets_feature_in_person_online": "Malipo ya ana kwa ana na mtandaoni",
	"wallets_feature_settles_both": "Kamilisha katika Bitcoin na dola",
	"wallets_feature_multiple_employees": "Msaada wa wafanyakazi wengi (BPTs)",
	"wallets_feature_self_hosted": "Unayohost mwenyewe = ada 0%",
	"wallets_feature_online_store": "Muunganisho wa duka la mtandaoni",
	"wallets_feature_invoicing": "Programu ya ankara ya bure",
	"wallets_get_wallet": "PATA POCHI"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Mwongozo wa Uhasibu wa Biashara ya Bitcoin",
	"accounting_description": "Jifunze jinsi ya kufanya uhasibu sahihi wa malipo ya Bitcoin katika uhasibu wa biashara yako.",
	"accounting_header": "MWONGOZO WA UHASIBU WA BITCOIN",
	"accounting_s1_c1": "Kukubali Bitcoin kuna faida nyingi kama kukubali malipo kwa ada ndogo na kupata wateja zaidi.",
	"accounting_s1_c2": "Ukitumia Pochi ya Mseto kutoka Mwongozo wetu wa Pochi na kuuza moja kwa moja 100% ya Bitcoin unayopokea kwa dola, huhitaji kufanya mabadiliko yoyote katika uhasibu wako wa sasa.",
	"accounting_s1_c3": "Angalia Mwongozo wa Pochi.",
	"accounting_s1_c4": "Hata hivyo, ukishikilia baadhi ya malipo ya Bitcoin unayopokea kama Bitcoin, utahitaji kufuatilia maelezo machache kwa uhasibu wako. Hii inaweza kuonekana kuogopesha mwanzoni, lakini ni rahisi kabisa.",
	"accounting_s1_c5": "Tafadhali kumbuka: mwongozo huu ni kwa madhumuni ya habari pekee na haupaswa kuchukuliwa kama ushauri wa kodi.",
	"accounting_s1_c6": "Ukihitaji ushauri wa kodi, tunapendekeza sana Satoshi Pacioli Accounting Services, kampuni ya uhasibu inayobobea katika uhasibu wa Bitcoin.",
	"accounting_s2": "KUFUATILIA MSINGI WAKO WA GHARAMA",
	"accounting_s2_c1": "Kufuatilia msingi wako wa gharama itakuwa tofauti kubwa zaidi kati ya uhasibu wa dola na uhasibu wa Bitcoin. Hata ukiona biashara yako kabisa kwa Bitcoin, unahitaji kuripoti thamani ya dola ya kila muamala kwenye kodi zako.",
	"accounting_s2_c2": "Ukitumia QuickBooks, unaweza kufanya hivi kiotomatiki ukitumia programu-jalizi ya Bitcoin Sync.",
	"accounting_s2_c3": "Usipotumia QuickBooks, tunapendekeza Satoshi Pacioli Accounting Services, kampuni ya uhasibu inayobobea katika uhasibu wa Bitcoin.",
	"accounting_s2_c4": "Kufanya hivi kwa mikono, unahitaji tu kufuatilia kiasi cha Bitcoin ulichopokea na thamani ya dola ya muamala wa Bitcoin siku hiyo.",
	"accounting_s2_c5": "Unaweza kuona bei ya sasa ya dola ya Bitcoin hapa.",
	"accounting_s2_c6": "Fuatilia taarifa hizi katika karatasi ya Excel na umpe mhasibu wako.",
	"accounting_s2_c7": "Unaweza pia kuingiza data hii katika Excel kiotomatiki.",
	"accounting_s2_c8": "Unaweza pia kuona bei ya kihistoria ya dola ya Bitcoin siku zilizopita, kwa hivyo huhitaji kufanya hivi kila siku.",
	"accounting_s3": "KUTUMIA AU KUUZA BITCOIN YAKO",
	"accounting_s3_c1": "Ukitumia Pochi ya Mseto kutoka Mwongozo wetu wa Pochi na kuuza moja kwa moja 100% ya Bitcoin unayopokea kwa dola, huhitaji kufanya mabadiliko yoyote katika uhasibu wako wa sasa.",
	"accounting_s3_c2": "Angalia Mwongozo wa Pochi.",
	"accounting_s3_c3": "Ukichagua kutumia au kuuza baadhi ya Bitcoin unayopokea baada ya kushikilia kwa muda, unahitaji tu kuongeza bei uliyouza kwenye karatasi yako ya Excel inayofuatilia msingi wako wa gharama.",
	"accounting_s3_c4": "Kwa mfano, ukipokea Bitcoin yenye thamani ya $100 tarehe 1 Januari na kuamua kuuza au kutumia tarehe 1 Februari kwa thamani mpya ya $110, utahitaji kurekodi faida ya mtaji ya $10 katika uhasibu wako.",
	"accounting_s3_c5": "Hii inaweza pia kufanya kazi kinyume chake. Kwa mfano, ukipokea Bitcoin yenye thamani ya $100 tarehe 1 Januari na kuamua kuuza au kutumia tarehe 1 Februari kwa thamani mpya ya $90, utahitaji kurekodi hasara ya mtaji ya $10 katika uhasibu wako.",
	"accounting_s4": "NAHITAJI MSAADA ZAIDI",
	"accounting_s4_c1": "Ukihitaji msaada zaidi wa kuunganisha Bitcoin katika uhasibu wako wa biashara, tunapendekeza sana Satoshi Pacioli Accounting Services, kampuni ya uhasibu inayobobea katika uhasibu wa Bitcoin.",
	"accounting_s4_c2": "Jifunze zaidi kuhusu Satoshi Pacioli Accounting Services."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Ramani za Wafanyabiashara wa Bitcoin - Orodhesha biashara yako bure",
	"maps_header": "ORODHESHWA KWENYE RAMANI ZA WAFANYABIASHARA WA BITCOIN NA UPATE WATEJA ZAIDI",
	"maps_request_details": "Ingiza taarifa za biashara yako hapa chini na tutakuorodhesha kwenye ramani za wafanyabiashara wa Bitcoin bure. Hii itawezesha Wamiliki wa Bitcoin kupata biashara yako na kutumia Bitcoin yao katika biashara yako!",
	"maps_view": "Angalia ramani hapa."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Vibandiko vya Bitcoin Inakubaliwa Hapa",
	"stickers_header": "PATA VIBANDIKO VYAKO VYA BURE VYA 'BITCOIN INAKUBALIWA HAPA'",
	"stickers_request": "Pata vibandiko vyako bure",
	"stickers_request_details": "Wajulishe wateja wako kuwa unakubali malipo ya Bitcoin na vibandiko hivi vya bure vya 'Bitcoin Inakubaliwa Hapa'.",
	"stickers_country_global_print": "Duniani kote - Chapisha vibandiko vyangu mwenyewe",
	"stickers_request_instructions": "Utapokea vibandiko vitatu vya 'Bitcoin Inakubaliwa Hapa' katika bahasha nyeupe. Ukihitaji zaidi ya vibandiko vitatu kwa biashara yako, jisikie huru kuomba tena! Data ya anwani inafutwa baada ya vibandiko vyako vya bure kutumwa.",
	"stickers_print_details": "Unaweza kuchapisha vibandiko vyako vya 'Bitcoin Inakubaliwa Hapa', popote unapoishi! Bofya lugha yako hapa chini kuona faili za vibandiko na maelekezo.",
	"stickers_request_language": "Huoni lugha yako? Jaza fomu hapa chini kuomba faili za vibandiko vya 'Bitcoin Inakubaliwa Hapa' kwa lugha yako ya ndani."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Kifurushi cha Biashara ya Bitcoin",
	"kit_header": "CHAPISHA KIFURUSHI CHAKO CHA BIASHARA YA BITCOIN",
	"kit_request": "OMBA KIFURUSHI CHAKO CHA BURE",
	"kit_request_details": "Kila Kifurushi cha Biashara ya Bitcoin kinajumuisha vijitabu viwili kurahisisha kupata biashara ya ndani kukubali Bitcoin.",
	"kit_country_global_print": "Duniani kote - Chapisha vifurushi vyangu mwenyewe",
	"kit_enter_address": "Ingiza anwani yako ya posta na tutakutumia Kifurushi cha Biashara ya Bitcoin bure katika bahasha nyeupe. Data ya anwani inafutwa mara tu kifurushi chako kinapotumwa.",
	"kit_print_details": "Unaweza kushiriki kwa kuchapisha vijitabu vyako mwenyewe, popote unapoishi! Unaweza pia kutuma biashara kwa kifurushi chetu cha biashara cha kidijitali kuepuka kuchapisha chochote.",
	"kit_view_files": "ANGALIA FAILI",
	"kit_digital_kit": "KIFURUSHI CHA KIDIJITALI",
	"kit_resources": "KILA KIFURUSHI KINAELEKEZA KWENYE RASILIMALI HIZI ZA BURE"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Utapokea Kifurushi chako cha Biashara ya Bitcoin ndani ya wiki 1 hadi 2 katika bahasha nyeupe."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Biashara yako itaorodheshwa kwenye ramani za wafanyabiashara wa Bitcoin ndani ya wiki 1 hadi 2.",
	"kit_success_2": "Angalia ramani hapa."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Utapokea vibandiko vyako ndani ya wiki 1 hadi 2 katika bahasha nyeupe. Kila bahasha inajumuisha vibandiko 3. Ukihitaji zaidi ya vibandiko 3 kwa biashara yako, jisikie huru kuomba kifurushi kingine!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Tutaunda na kuchapisha faili yako ya vibandiko ndani ya wiki 3 hadi 4. Asante kwa uvumilivu wako!"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Chapisha Kifurushi chako cha Biashara ya Bitcoin",
	"english_bbk_files_description": "Pakua faili za vijitabu hapa.",
	"english_header": "CHAPISHA VIJITABU VYAKO VYA KIFURUSHI CHA BIASHARA YA BITCOIN KWA KIINGEREZA"
});

console.log('\nDone! Created all Swahili business translation files.');
