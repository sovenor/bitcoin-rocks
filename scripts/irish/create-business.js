/**
 * Creates Irish (ga) translation files for all business/ pages (15 files)
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ga';
const today = '2026-04-11';

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
	"bitcoin_is_good_for_business": "T\u00e1 Bitcoin go maith don ghn\u00f3",
	"biz_header": "T\u00c1 BITCOIN GO MAITH DON GHN\u00d3",
	"biz_s1": "T\u00e1ill\u00ed \u00edsle gan \u00edosmh\u00e9id",
	"biz_s1_c1": "\u00c9ascaíonn Bitcoin duit \u00edoca\u00edochta\u00ed a fh\u00e1il go d\u00edreach \u00f3 do chuid custaim\u00e9ir\u00ed, cosúil le hairgead tirim. Oibríonn l\u00edonra Bitcoin gan idirghabhálaithe cosúil le bainc agus cuideachtaí cárta creidmheasa a ghearrann táillí troma.",
	"biz_s2": "Socr\u00fa láithreach",
	"biz_s2_c1": "D\u00edreach cosúil le hairgead tirim, socra\u00edonn \u00edoca\u00edochta\u00ed Bitcoin l\u00e1ithreach. Ní gá duit fanacht ar do chuideachta cárta creidmheasa nó banc chun tú a \u00edoc. Ina ionad sin, faigheann tú rochtain ar d'airgead l\u00e1ithreach.",
	"biz_s3": "Gan aisíocaíochtaí ná calaois",
	"biz_s3_c1": "Toisc go dtarla\u00edonn \u00edoca\u00edochta\u00ed Bitcoin go d\u00edreach idir tú f\u00e9in agus do chuid custaim\u00e9ir\u00ed, n\u00ed f\u00e9idir le haon duine d'airgead a th\u00f3g\u00e1il ar ais le hais\u00edoca\u00edocht.",
	"biz_s3_c2": "Ní féidir Bitcoin bréige a sheoladh ar an Líonra Bitcoin, rud a chiallaíonn nach gá duit a bheith buartha faoi idirbhearta calaoiseacha a d'fhéadfadh airgead a chosaint ar do ghnó.",
	"biz_s4": "Faigh n\u00edos m\u00f3 custaim\u00e9ir\u00ed",
	"biz_s4_c1": "Tá na milliúin daoine a bhfuil Bitcoin acu agus ar mhaith leo a gcuid Bitcoin a chaitheamh in áiteanna a ghlacann leis.",
	"biz_s4_c2": "Tríd glacadh le Bitcoin, is féidir do ghnó a bheith liostaithe ar léarscáileanna ceannaithe Bitcoin agus nochtadh saor in aisce a fháil do chustaiméirí nua Bitcoin.",
	"biz_s4_c3": "Tá glacadh le Bitcoin 100% saor in aisce. Níl aon chonarthaí ná táillí folaithe ann."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Foghlaim cén fáth go bhfuil Bitcoin go maith don ghnó",
	"why_header": "TÁ BITCOIN GO MAITH DON GHNÓ",
	"why_good_for_you": "TÁ BITCOIN GO MAITH DUIT FREISIN!",
	"why_learn_more_lowercase": "Foghlaim tuilleadh.",
	"why_s1": "Níl boilsciú ag Bitcoin",
	"why_s1_c1": "Tarlaíonn boilsciú nuair a phriontáiltear nó a chruthaítear níos mó airgid as an aer. Déanann sé seo d'airgead níos lú luachmhaire le himeacht ama.",
	"why_s1_c2": "Tá soláthar seasta ag Bitcoin, rud a chiallaíonn nach féidir le haon duine níos mó Bitcoin a phriontáil.",
	"why_s2": "Níl rith ar bhainc ag Bitcoin",
	"why_s2_c1": "Tá bainc iolracha SAM tar éis titim sna blianta beaga anuas mar gheall ar rith ar bhainc.",
	"why_s2_c2": "In ionad d'airgead a choinneáil duit, infheistíonn bainc d'airgead agus tugann siad ar iasacht é. Mura n-éiríonn go maith leis na hinfheistíochtaí sin, níl go leor acu chun tú a aisíoc.",
	"why_s2_c3": "Agus níl ach $1 ag ciste árachais FDIC as gach $100 atá á árachú acu.",
	"why_s3": "Tá Bitcoin gan chead",
	"why_s3_c1": "Murab ionann agus líonraí airgeadais traidisiúnta, ní gá cead chun Bitcoin a úsáid.",
	"why_s3_c2": "Ciallaíonn sé sin nach féidir le haon duine tú a stopadh ó Bitcoin a úsáid ar chúis ar bith. Is é an chéad líonra airgeadais é is féidir leat a úsáid gan eagla roimh chinsireacht nó urghabháil.",
	"why_s4": "Tá Bitcoin ag tógáil domhain níos fearr",
	"why_s4_c1": "Is teicneolaíocht míthuigthe é Bitcoin atá ag tógáil domhain níos fearr.",
	"why_s4_c2": "Chuir Bitcoin ar chumas gníomhaithe cearta daonna troid ar son na saoirse, laghdaigh sé astaíochtaí meatáin domhanda, shábháil sé páirceanna náisiúnta, agus go leor eile."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Glac le Híocaíochtaí Bitcoin ag do Ghnó",
	"guide_header": "AN BHFUIL TÚ RÉIDH CHUN GLACADH LE BITCOIN AG DO GHNÓ?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Ceisteanna Coitianta faoi Ghlacadh le Bitcoin",
	"faq_description": "An bhfuil ceisteanna agat faoi ghlacadh le híocaíochtaí Bitcoin ag do ghnó?",
	"faq_header": "AN BHFUIL CEISTEANNA AGAT FAOI GHLACADH LE HÍOCAÍOCHTAÍ BITCOIN?",
	"faq_s1": "Céard é Bitcoin?",
	"faq_s1_c1": "Is dhá rud é Bitcoin: airgead digiteach agus líonra ríomhaire.",
	"faq_s1_c2": "Is féidir leat bitcoin (an t-airgead digiteach) a sheoladh go díreach chuig daoine eile ag úsáid an Líonra Bitcoin.",
	"faq_s1_c3": "Tá an Líonra Bitcoin in ann oibriú gan idirghabhálaithe nó údaráis lárnacha, cosúil le bainc nó cuideachtaí cárta creidmheasa, ionas gur féidir leat a dtáillí idirbhirt a sheachaint.",
	"faq_s1_c4": "Baineann idirbhearta Bitcoin socraíocht dheiridh amach go tapa (10 nóiméad) agus ní féidir iad a aisíoc go deo, ionas gur féidir leat codladh go sámh agus a fhios agat gur leatsa d'airgead.",
	"faq_s2": "Conas is féidir le Bitcoin tairbhe a dhéanamh do mo ghnó?",
	"faq_s2_c1": "Ligeann Bitcoin duit íocaíochtaí a ghlacadh le táillí níos ísle agus níos mó custaiméirí a fháil. Tá táillí ísle ag íocaíochtaí Bitcoin gan íosmhéid, socraíonn siad láithreach, agus tá siad díonach ar aisíocaíochtaí agus calaois.",
	"faq_s2_c2": "Tá glacadh le Bitcoin saor in aisce agus ligeann sé duit do ghnó a liostú ar léarscáileanna ceannaithe Bitcoin ionas gur féidir le húsáideoirí Bitcoin do ghnó a aimsiú go héasca.",
	"faq_s2_c3": "Féach ar na bealaí ar fad a bhfuil Bitcoin go maith don ghnó.",
	"faq_s3": "Conas a ghlacaim le híocaíochtaí Bitcoin?",
	"faq_s3_c1": "Níl de dhíth ort ach sparán Bitcoin saor in aisce chun glacadh le híocaíochtaí Bitcoin.",
	"faq_s3_c2": "Cuirfidh ár dtreoir sparán tú ar bun go tapa agus go héasca ionas gur féidir leat buntáistí glacadh le Bitcoin a bhaint amach inniu!",
	"faq_s3_c3": "Féach ar Threoir Sparán",
	"faq_s4": "An féidir liom na híocaíochtaí Bitcoin a fhaighim a thiontú go m'airgeadra áitiúil?",
	"faq_s4_c1": "Is féidir! Trí sparán hibrideach a úsáid, is féidir leat na híocaíochtaí Bitcoin a fhaigheann tú a thiontú go huathoibríoch go d'airgeadra áitiúil chomh luath agus a fhaightear íocaíocht.",
	"faq_s4_c2": "Is féidir lenár dtreoir sparán cabhrú leat tú a chur ar bun go tapa agus go héasca.",
	"faq_s4_c3": "Is féidir leat freisin roghnú cuid de na híocaíochtaí a fhaigheann tú a choinneáil mar Bitcoin. Tá go leor buntáistí ag coigilt i mBitcoin:",
	"faq_s4_c4": "Is córas airgeadais lánchúlchiste é Bitcoin.",
	"faq_s4_c5": "Níl boilsciú ag Bitcoin.",
	"faq_s4_c6": "Déanann na buntáistí seo Bitcoin ina bhealach iontach chun airgead a stóráil don fhadtéarma.",
	"faq_s4_c7": "Fiú má roghnaíonn tú d'íocaíochtaí Bitcoin ar fad a thiontú go dollair, faigheann tú buntáistí glacadh le híocaíochtaí le táillí i bhfad níos ísle agus tú ag teacht ar chustaiméirí nua féideartha.",
	"faq_s5": "An féidir liom glacadh le híocaíochtaí Bitcoin go pearsanta?",
	"faq_s5_c1": "Is féidir! Tá sé éasca glacadh le híocaíochtaí Bitcoin go pearsanta ag úsáid sparán Bitcoin.",
	"faq_s5_c2": "Is féidir lenár dtreoir sparán cabhrú leat an sparán Bitcoin is fearr do do ghnó a roghnú.",
	"faq_s5_c3": "Féach ar Threoir Sparán",
	"faq_s6": "An féidir liom glacadh le híocaíochtaí Bitcoin ar líne?",
	"faq_s6_c1": "Is féidir! Tá sé éasca glacadh le híocaíochtaí Bitcoin ar líne le do shiopa ar líne atá ann cheana.",
	"faq_s6_c2": "Féach ar ár dtreoir sparán le haghaidh tuilleadh eolais.",
	"faq_s7": "Conas is féidir liom a chur in iúl do mo chustaiméirí go nglacaim le Bitcoin?",
	"faq_s7_c1": "Cuirimid greamáin 'Glactar le Bitcoin Anseo' saor in aisce ar fáil is féidir leat a thaispeáint i do ghnó chun a chur in iúl do do chustaiméirí go nglacann tú le Bitcoin.",
	"faq_s7_c2": "Cliceáil anseo chun do chuid greamán a iarraidh.",
	"faq_s7_c3": "Is féidir leat freisin do ghnó a liostú ar léarscáileanna ceannaithe Bitcoin saor in aisce agus nochtadh a fháil do na milliúin úsáideoirí Bitcoin ar mhaith leo a gcuid Bitcoin a chaitheamh ag gnólachtaí a ghlacann leis.",
	"faq_s7_c4": "Liostáil anois.",
	"faq_s8": "Conas is féidir liom níos mó custaiméirí a fháil trí ghlacadh le Bitcoin?",
	"faq_s8_c1": "Tá na milliúin úsáideoirí Bitcoin ann ar mhaith leo a gcuid Bitcoin a chaitheamh ag gnólachtaí a ghlacann leis.",
	"faq_s8_c2": "Tríd glacadh le híocaíochtaí Bitcoin, is féidir do ghnó a bheith liostaithe ar léarscáileanna ceannaithe Bitcoin saor in aisce agus nochtadh a fháil do chustaiméirí nua féideartha.",
	"faq_s8_c3": "Liostáil anois.",
	"faq_s9": "Cé mhéad a chosnaíonn sé glacadh le Bitcoin?",
	"faq_s9_c1": "Tá glacadh le Bitcoin ag do ghnó 100% saor in aisce. Níl aon chonarthaí ná táillí folaithe ann.",
	"faq_s9_c2": "Féach ar ár dtreoir sparán chun tosú ag glacadh le híocaíochtaí Bitcoin inniu."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Conas Glacadh le Híocaíochtaí Bitcoin",
	"wallets_header": "FAIGH SPARÁN BITCOIN SAOR IN AISCE CHUN GLACADH LE HÍOCAÍOCHTAÍ BITCOIN",
	"wallets_intro_1": "Tá gach sparán Bitcoin idir-inoibritheach, ionas gur féidir le do chustaiméirí tú a íoc i mBitcoin is cuma cén sparán a úsáideann siad.",
	"wallets_intro_2": "Sparáin Bitcoin-amháin:",
	"wallets_intro_3": "Is sparáin ghlana Bitcoin iad seo a osclaíonn buntáistí iomlána Bitcoin: gan idirghabhálaithe, táillí ísle, agus gan aisíocaíochtaí ná calaois.",
	"wallets_intro_4": "Sparáin hibrideacha:",
	"wallets_intro_5": "Ligeann siad seo duit aon chion de do Bitcoin a mhalartú ar dollair chomh luath agus a íocann custaiméir thú. Tá táillí fós níos lú ná íocaíochtaí cárta creidmheasa, ach níos airde ná híocaíochtaí glana Bitcoin.",
	"wallets_intro_6": "Is bealaí iontacha iad an dá cheann chun glacadh le Bitcoin. Beidh an sparán sonrach a úsáideann tú ag brath ar mhéid agus cineál do ghnó.",
	"wallets_choice_sole": "sparáin do ghnólachtaí faoi úinéireacht aonair",
	"wallets_choice_multiple": "sparáin do ghnólachtaí le fostaithe iolracha",
	"wallets_choice_online": "sparáin do ghnólachtaí ar líne",
	"wallets_choice_invoice": "sparáin do ghnólachtaí bunaithe ar shonraisc",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Is féidir leat glacadh le híocaíochtaí Bitcoin le do theirminéal Square PoS atá ann cheana nó comhtháthú siopa ar líne. Ní raibh sé riamh níos éasca glacadh le híocaíochtaí Bitcoin.",
	"wallets_feature_bitcoin_only": "Sparán Bitcoin-amháin",
	"wallets_feature_no_info": "Gan eolas ag teastáil",
	"wallets_feature_in_person": "Íocaíochtaí pearsanta amháin",
	"wallets_feature_settles_bitcoin": "Socraíonn 100% i mBitcoin",
	"wallets_feature_hybrid": "Sparán hibrideach",
	"wallets_feature_info": "Eolas gnó ag teastáil",
	"wallets_feature_in_person_online": "Íocaíochtaí pearsanta & ar líne",
	"wallets_feature_settles_both": "Socraigh i mBitcoin & dollair",
	"wallets_feature_multiple_employees": "Tacaíocht d'fhostaithe iolracha (BPTanna)",
	"wallets_feature_self_hosted": "Féin-óstáilte = 0% táillí",
	"wallets_feature_online_store": "Comhtháthú siopa ar líne",
	"wallets_feature_invoicing": "Bogearraí sonrasc saor in aisce",
	"wallets_get_wallet": "FAIGH SPARÁN"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Treoir Cuntasaíochta Gnó Bitcoin",
	"accounting_description": "Foghlaim conas cuntas ceart a dhéanamh ar íocaíochtaí Bitcoin i gcuntasaíocht do ghnó.",
	"accounting_header": "TREOIR CHUNTASAÍOCHTA BITCOIN",
	"accounting_s1_c1": "Tá go leor buntáistí ag glacadh le Bitcoin cosúil le híocaíochtaí a ghlacadh le táillí níos ísle & níos mó custaiméirí a fháil.",
	"accounting_s1_c2": "Má úsáideann tú Sparán Hibrideach ónár dTreoir Sparán agus má dhíolann tú 100% den Bitcoin a fhaigheann tú go huathoibríoch ar dollair, ní gá duit aon athruithe a dhéanamh ar do chuntasaíocht reatha.",
	"accounting_s1_c3": "Féach ar Threoir Sparán.",
	"accounting_s1_c4": "Ach, má choinníonn tú cuid de na híocaíochtaí Bitcoin a fhaigheann tú mar Bitcoin, beidh ort roinnt sonraí a rianú le haghaidh do chuntasaíochta. D'fhéadfadh sé seo a bheith scanrúil ar dtús, ach tá sé simplí go leor i ndáiríre.",
	"accounting_s1_c5": "Tabhair faoi deara: tá an treoir seo chun críocha faisnéise amháin agus ní ceart í a mheas mar chomhairle chánach.",
	"accounting_s1_c6": "Má theastaíonn comhairle chánach uait, molaimid go mór Seirbhísí Cuntasaíochta Satoshi Pacioli, gnólacht cuntasaíochta atá speisialaithe i gcuntasaíocht Bitcoin.",
	"accounting_s2": "DO BHUNÚS COSTAIS A RIANÚ",
	"accounting_s2_c1": "Is é rianú do bhunúis costais an difríocht is mó idir cuntasaíocht do dhollair agus cuntasaíocht do Bitcoin. Fiú má fheiceann tú do ghnó go hiomlán i dtéarmaí Bitcoin, ní mór duit luach dollair gach idirbhirt a thuairisciú ar do cháin.",
	"accounting_s2_c2": "Má úsáideann tú QuickBooks, is féidir leat é seo a dhéanamh go huathoibríoch ag úsáid an bhreiseáin Bitcoin Sync.",
	"accounting_s2_c3": "Mura n-úsáideann tú QuickBooks, molaimid Seirbhísí Cuntasaíochta Satoshi Pacioli, gnólacht cuntasaíochta atá speisialaithe i gcuntasaíocht Bitcoin.",
	"accounting_s2_c4": "Chun é seo a dhéanamh de láimh, ní gá duit ach méid an Bitcoin a fuair tú agus luach dollair an idirbhirt Bitcoin ar an lá sin a rianú.",
	"accounting_s2_c5": "Is féidir leat praghas reatha dollair Bitcoin a fheiceáil anseo.",
	"accounting_s2_c6": "Coinnigh an fhaisnéis seo i scarbhileog Excel agus tabhair do do chuntasóir í.",
	"accounting_s2_c7": "Is féidir leat na sonraí seo a iompórtáil isteach in Excel go huathoibríoch freisin.",
	"accounting_s2_c8": "Is féidir leat praghas stairiúil dollair Bitcoin a fheiceáil ar laethanta san am a caitheadh freisin, ionas nach gá duit é seo a dhéanamh gach lá.",
	"accounting_s3": "DO BHITCOIN A CHAITHEAMH NÓ A DHÍOL",
	"accounting_s3_c1": "Má úsáideann tú Sparán Hibrideach ónár dTreoir Sparán agus má dhíolann tú 100% den Bitcoin a fhaigheann tú go huathoibríoch ar dollair, ní gá duit aon athruithe a dhéanamh ar do chuntasaíocht reatha.",
	"accounting_s3_c2": "Féach ar Threoir Sparán.",
	"accounting_s3_c3": "Má roghnaíonn tú cuid den Bitcoin a fhaigheann tú a chaitheamh nó a dhíol tar éis é a choinneáil ar feadh tamaill, ní gá duit ach an praghas ar dhíol tú é a chur le do scarbhileog Excel a rianaíonn do bhunús costais.",
	"accounting_s3_c4": "Mar shampla, má fuair tú $100 de Bitcoin ar an 1ú Eanáir agus go ndearna tú cinneadh é a dhíol nó a chaitheamh ar an 1ú Feabhra ag luach nua de $110, bheadh ort gnóthachan caipitil $10 a thaifeadadh i do chuntasaíocht.",
	"accounting_s3_c5": "Is féidir leis seo oibriú an bealach contrártha freisin. Mar shampla, má fuair tú $100 de Bitcoin ar an 1ú Eanáir agus go ndearna tú cinneadh é a dhíol nó a chaitheamh ar an 1ú Feabhra ag luach nua de $90, bheadh ort caillteanas caipitil $10 a thaifeadadh i do chuntasaíocht.",
	"accounting_s4": "TÁ CABHAIR BREISE DE DHÍTH ORM",
	"accounting_s4_c1": "Má theastaíonn cabhair bhreise uait chun Bitcoin a chomhtháthú le cuntasaíocht do ghnó, molaimid go mór Seirbhísí Cuntasaíochta Satoshi Pacioli, gnólacht cuntasaíochta atá speisialaithe i gcuntasaíocht Bitcoin.",
	"accounting_s4_c2": "Foghlaim tuilleadh faoi Sheirbhísí Cuntasaíochta Satoshi Pacioli."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Greamáin 'Glactar le Bitcoin Anseo'",
	"stickers_header": "FAIGH DO GHREAMÁIN 'GLACTAR LE BITCOIN ANSEO' SAOR IN AISCE",
	"stickers_request": "Faigh do ghreamáin saor in aisce",
	"stickers_request_details": "Cuir in iúl do do chustaiméirí go nglacann tú le híocaíochtaí Bitcoin leis na greamáin 'Glactar le Bitcoin Anseo' saor in aisce seo.",
	"stickers_country_global_print": "Domhanda — Priontáil mo ghreamáin féin",
	"stickers_request_instructions": "Gheobhaidh tú trí ghreamán 'Glactar le Bitcoin Anseo' i gclúdach bán simplí. Más mó ná trí ghreamán atá de dhíth ort do do ghnó, bíodh deis agat iarraidh arís. Scriostar sonraí seoltaí tar éis do ghreamáin saor in aisce a sheoladh.",
	"stickers_print_details": "Is féidir leat do ghreamáin 'Glactar le Bitcoin Anseo' féin a phriontáil, is cuma cá bhfuil tú! Cliceáil ar do theanga thíos chun na comhaid ghreamán & treoracha a fheiceáil.",
	"stickers_request_language": "Nach bhfeiceann tú do theanga? Líon an fhoirm thíos chun comhaid ghreamán 'Glactar le Bitcoin Anseo' i do theanga áitiúil a iarraidh."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Léarscáileanna Ceannaithe Bitcoin - Liostáil do ghnó saor in aisce",
	"maps_header": "LIOSTÁIL AR LÉARSCÁILEANNA CEANNAITHE BITCOIN & FAIGH NÍOS MÓ CUSTAIMÉIRÍ",
	"maps_request_details": "Cuir eolas do ghnó isteach thíos agus liostálfaimid thú ar léarscáileanna ceannaithe Bitcoin saor in aisce. Cuirfidh sé seo ar chumas Bitcoineoirí do ghnó a aimsiú agus a gcuid Bitcoin a chaitheamh ag do ghnó!",
	"maps_view": "Féach ar an léarscáil anseo."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Pacáiste Gnó Bitcoin",
	"kit_header": "PRIONTÁIL DO PHACÁISTE GNÓ BITCOIN FÉIN",
	"kit_request": "IARR DO PHACÁISTE SAOR IN AISCE",
	"kit_request_details": "Cuimsíonn gach Pacáiste Gnó Bitcoin dhá bhileog chun éascú a dhéanamh ar ghnó áitiúil a fháil chun glacadh le Bitcoin.",
	"kit_country_global_print": "Domhanda — Priontáil mo phacáistí féin",
	"kit_enter_address": "Cuir do sheoladh poist isteach agus cuirfimid Pacáiste Gnó Bitcoin saor in aisce chugat i gclúdach bán simplí. Scriostar sonraí seoltaí nuair a sheoltar do phacáiste.",
	"kit_print_details": "Is féidir leat páirt a ghlacadh trí do chuid bileog féin a phriontáil, is cuma cá bhfuil tú! Is féidir leat gnólachtaí a sheoladh chuig ár bpacáiste gnó digiteach freisin chun priontáil a sheachaint.",
	"kit_view_files": "FÉACH AR CHOMHAID",
	"kit_digital_kit": "PACÁISTE DIGITEACH",
	"kit_resources": "NASCANN GACH PACÁISTE LEIS NA HACMHAINNÍ SAOR IN AISCE SEO"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Gheobhaidh tú do Phacáiste Gnó Bitcoin i gceann 1 go 2 seachtaine i gclúdach bán simplí."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Liostálfar do ghnó ar léarscáileanna ceannaithe Bitcoin i gceann 1 go 2 seachtaine.",
	"kit_success_2": "Féach ar an léarscáil anseo."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Gheobhaidh tú do chuid greamán i gceann 1 go 2 seachtaine i gclúdach bán simplí. Cuimsíonn gach clúdach 3 ghreamán. Más mó ná 3 ghreamán atá de dhíth ort do do ghnó, bíodh deis agat pacáiste eile a iarraidh!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Cruthóimid agus foilseoimid do chomhad greamán laistigh de 3 go 4 seachtaine. Go raibh maith agat as d'fhoighne!"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Priontáil do Phacáiste Gnó Bitcoin féin",
	"english_bbk_files_description": "Íoslódáil comhaid bhileog anseo.",
	"english_header": "PRIONTÁIL DO BHILEOGA PACÁISTE GNÓ BITCOIN BÉARLA FÉIN"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "Comhaid Ghreamán 'Glactar le Bitcoin Anseo' Béarla",
	"english_biz_sticker_files_description": "Íoslódáil comhaid ghreamán Béarla chun do ghreamáin 'Glactar le Bitcoin Anseo' féin a phriontáil.",
	"english_header": "ÍOSLÓDÁIL COMHAID GHREAMÁN 'GLACTAR LE BITCOIN ANSEO' BÉARLA"
});

console.log(`\nDone! Created 15 business files.`);
