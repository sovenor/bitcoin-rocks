/**
 * Creates Estonian (et) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'et';
const today = '2026-04-07';

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
	"bitcoin_is_good_for_business": "Bitcoin on ettevõtetele hea",
	"biz_header": "BITCOIN ON ETTEVÕTETELE HEA",
	"biz_s1": "Madalad tasud ilma miinimumideta",
	"biz_s1_c1": "Bitcoin laseb teil makseid klientidelt otse vastu võtta, sarnaselt sularahaga. Bitcoin-võrk toimib ilma vahendajateta nagu pangad ja krediitkaardifirmad, kes küsivad kõrgeid tasusid.",
	"biz_s2": "Kohene arveldamine",
	"biz_s2_c1": "Nagu sularaha, arveldatakse ka Bitcoin-maksed koheselt. Te ei pea ootama, kuni krediitkaardifirma või pank teile maksab. Selle asemel on teil kohe juurdepääs oma rahale.",
	"biz_s3": "Ei mingeid tagasimakseid ega pettust",
	"biz_s3_c1": "Kuna Bitcoin-maksed toimuvad otse teie ja teie klientide vahel, ei saa keegi raha tagasimakse kaudu tagasi tõmmata.",
	"biz_s3_c2": "Võltsitud Bitcoini ei saa Bitcoin-võrgu kaudu saata, mis tähendab, et te ei pea kunagi muretsema petturlike tehingute pärast, mis võivad teie ettevõttele raha maksma minna.",
	"biz_s4": "Saage rohkem kliente",
	"biz_s4_c1": "Miljonid inimesed omavad Bitcoini ja soovivad seda kulutada kohtades, mis seda vastu võtavad.",
	"biz_s4_c2": "Bitcoini vastu võttes saab teie ettevõte olla loetletud Bitcoin-kaupmeeste kaartidel ja saada tasuta nähtavust uutele klientidele.",
	"biz_s4_c3": "Bitcoini vastuvõtmine on 100% tasuta. Ei mingeid lepinguid ega varjatud tasusid."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Uurige, miks Bitcoin on ettevõtetele hea",
	"why_header": "BITCOIN ON ETTEVÕTETELE HEA",
	"why_good_for_you": "BITCOIN ON KA TEILE HEA!",
	"why_learn_more_lowercase": "Uurige lähemalt.",
	"why_s1": "Bitcoinil ei ole inflatsiooni",
	"why_s1_c1": "Inflatsioon tekib siis, kui rohkem raha trükitakse või luuakse tühjast õhust. See muudab teie raha aja jooksul vähem väärtuslikuks.",
	"why_s1_c2": "Bitcoinil on fikseeritud pakkumise piir, mis tähendab, et keegi ei saa trükkida rohkem Bitcoine.",
	"why_s2": "Bitcoinil ei ole pangajookse",
	"why_s2_c1": "Mitmed USA pangad on viimastel aastatel pangajooksude tõttu kokku kukkunud.",
	"why_s2_c2": "Selle asemel, et lihtsalt teie raha hoiustada, investeerivad pangad seda ja laenavad välja. Kui need investeeringud ei lähe hästi, ei ole neil piisavalt raha, et teile teie oma tagasi anda.",
	"why_s2_c3": "Ja FDIC kindlustusfondil on ainult 1 dollar iga 100 kindlustatud dollari kohta.",
	"why_s3": "Bitcoin ei vaja luba",
	"why_s3_c1": "Erinevalt traditsioonilistest finantsvõrkudest ei vaja Bitcoin kasutamiseks luba.",
	"why_s3_c2": "See tähendab, et keegi ei saa takistada teil Bitcoini kasutamist mis tahes põhjusel. See on esimene finantsvõrk, mida saate kasutada muretsemata tsensuuri või konfiskeerimise pärast.",
	"why_s4": "Bitcoin ehitab paremat maailma",
	"why_s4_c1": "Bitcoin on valesti mõistetud tehnoloogia, mis ehitab paremat maailma.",
	"why_s4_c2": "Bitcoin on võimaldanud inimõiguste aktivistidel vabaduse eest võidelda, vähendanud globaalseid metaaniheitkoguseid, päästnud rahvusparke ja palju muud."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Võtke oma ettevõttes Bitcoin-makseid vastu",
	"guide_header": "KAS OLETE VALMIS OMA ETTEVÕTTES BITCOINI VASTU VÕTMA?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Korduma kippuvad küsimused Bitcoin-maksete vastuvõtmise kohta",
	"faq_description": "Kas teil on küsimusi Bitcoin-maksete vastuvõtmise kohta oma ettevõttes?",
	"faq_header": "KAS TEIL ON KÜSIMUSI BITCOIN-MAKSETE VASTUVÕTMISE KOHTA?",
	"faq_s1": "Mis on Bitcoin?",
	"faq_s1_c1": "Bitcoin on kaks asja: digitaalne raha ja arvutivõrk.",
	"faq_s1_c2": "Saate saata bitcoine (digitaalset raha) otse teistele inimestele Bitcoin-võrgu kaudu.",
	"faq_s1_c3": "Bitcoin-võrk toimib ilma vahendajate või keskasutusteta, nagu pangad või krediitkaardifirmad, nii et saate vältida nende tehingutasusid.",
	"faq_s1_c4": "Bitcoin-tehingud saavutavad lõpliku arvelduse kiiresti (10 minutit) ja neid ei saa kunagi tagasi pöörata, nii et saate olla kindel, et teie raha on tõeliselt teie.",
	"faq_s2": "Kuidas saab Bitcoin mu ettevõttele kasu tuua?",
	"faq_s2_c1": "Bitcoin laseb teil makseid vastu võtta madalamate tasudega ja saada rohkem kliente. Bitcoin-maksetel on madalad tasud ilma miinimumideta, need arveldatakse koheselt ja on immuunsed tagasimaksete ja pettuse suhtes.",
	"faq_s2_c2": "Bitcoini vastuvõtmine on tasuta ja laseb teil oma ettevõtte Bitcoin-kaupmeeste kaartidel loetleda, et Bitcoin-kasutajad saaksid teid hõlpsalt leida.",
	"faq_s2_c3": "Vaadake kõiki viise, kuidas Bitcoin on ettevõtetele hea.",
	"faq_s3": "Kuidas ma Bitcoin-makseid vastu võtan?",
	"faq_s3_c1": "Kõik, mida vajate Bitcoin-maksete vastuvõtmiseks, on tasuta Bitcoin-rahakott.",
	"faq_s3_c2": "Meie rahakotijuhend aitab teil kiiresti ja lihtsalt alustada, et saaksite juba täna Bitcoin-maksetest kasu saada!",
	"faq_s3_c3": "Vaata rahakotijuhendit",
	"faq_s4": "Kas ma saan saadud Bitcoin-maksed oma kohalikuks valuutaks vahetada?",
	"faq_s4_c1": "Jah! Hübriidrahakotiga saate saadud Bitcoin-maksed automaatselt kohalikuks valuutaks vahetada koheselt, kui makse saadakse.",
	"faq_s4_c2": "Meie rahakotijuhend aitab teil kiiresti ja lihtsalt alustada.",
	"faq_s4_c3": "Samuti saate valida osa saadud maksetest Bitcoinina hoida. Bitcoinis säästmisel on palju eeliseid:",
	"faq_s4_c4": "Bitcoin on täisreservi finantssüsteem.",
	"faq_s4_c5": "Bitcoinil ei ole inflatsiooni.",
	"faq_s4_c6": "Need eelised teevad Bitcoinist suurepärase viisi pikaajaliseks raha hoiustamiseks.",
	"faq_s4_c7": "Isegi kui otsustate kõik Bitcoin-maksed dollariteks vahetada, saate ikkagi kasu madalate tasudega maksete vastuvõtmisest ja rohkemate potentsiaalsete klientide juurde jõudmisest.",
	"faq_s5": "Kas ma saan Bitcoin-makseid isiklikult vastu võtta?",
	"faq_s5_c1": "Jah! Bitcoin-maksete isiklikult vastuvõtmine on Bitcoin-rahakotiga lihtne.",
	"faq_s5_c2": "Meie rahakotijuhend aitab teil valida oma ettevõttele parima.",
	"faq_s5_c3": "Vaata rahakotijuhendit",
	"faq_s6": "Kas ma saan Bitcoin-makseid veebis vastu võtta?",
	"faq_s6_c1": "Jah! Bitcoin-maksete vastuvõtmine veebis oma olemasoleva veebipoega on lihtne.",
	"faq_s6_c2": "Vaadake meie rahakotijuhendit lisateabe saamiseks.",
	"faq_s7": "Kuidas saan klientidele teada anda, et võtan Bitcoini vastu?",
	"faq_s7_c1": "Pakume tasuta kleebiseid "Bitcoin aktsepteeritakse siin", mida saate oma ettevõttes eksponeerida, et kliendid teaksid, et võtate Bitcoini vastu.",
	"faq_s7_c2": "Klõpsake siin kleebiste tellimiseks.",
	"faq_s7_c3": "Samuti saate tasuta oma ettevõtte Bitcoin-kaupmeeste kaartidel loetleda ja saada nähtavust miljonitele Bitcoin-kasutajatele, kes soovivad oma Bitcoini kulutada ettevõtetes, mis seda vastu võtavad.",
	"faq_s7_c4": "Registreeruge kohe.",
	"faq_s8": "Kuidas saan rohkem kliente, võttes Bitcoini vastu?",
	"faq_s8_c1": "On miljoneid Bitcoin-kasutajaid, kes soovivad oma Bitcoini kulutada ettevõtetes, mis seda vastu võtavad.",
	"faq_s8_c2": "Bitcoin-makseid vastu võttes saab teie ettevõte olla loetletud tasuta Bitcoin-kaupmeeste kaartidel ja saada nähtavust uutele potentsiaalsetele klientidele.",
	"faq_s8_c3": "Registreeruge kohe.",
	"faq_s9": "Kui palju läheb Bitcoini vastuvõtmine maksma?",
	"faq_s9_c1": "Bitcoini vastuvõtmine teie ettevõttes on 100% tasuta. Ei mingeid lepinguid ega varjatud tasusid.",
	"faq_s9_c2": "Vaadake meie rahakotijuhendit ja hakake juba täna Bitcoin-makseid vastu võtma."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Bitcoin-raamatupidamise juhend ettevõtetele",
	"accounting_description": "Uurige, kuidas oma ettevõttes Bitcoin-makseid korrektselt raamatupidamises kajastada.",
	"accounting_header": "BITCOIN-RAAMATUPIDAMISE JUHEND",
	"accounting_s1_c1": "Bitcoini vastuvõtmisel on palju eeliseid, nagu maksete vastuvõtmine madalamate tasudega ja rohkemate klientide saamine.",
	"accounting_s1_c2": "Kui kasutate meie rahakotijuhendist hübriidrahakotti ja müüte automaatselt 100% saadud Bitcoinist dollarite eest, ei pea te oma praeguses raamatupidamises midagi muutma.",
	"accounting_s1_c3": "Vaata rahakotijuhendit.",
	"accounting_s1_c4": "Kui aga otsustate osa saadud Bitcoin-maksetest Bitcoinina hoida, peate oma raamatupidamise jaoks mõnda asja jälgima. See võib esmapilgul tunduda üle jõu käiv, kuid tegelikult on see üsna lihtne.",
	"accounting_s1_c5": "Märkus: see juhend on ainult informatiivne ega kujuta endast maksunõustamist.",
	"accounting_s1_c6": "Kui vajate maksunõustamist, soovitame tungivalt Satoshi Pacioli Accounting Services'i, raamatupidamisettevõtet, mis on spetsialiseerunud Bitcoin-raamatupidamisele.",
	"accounting_s2": "JÄLGIGE OMA SOETUSHINDA",
	"accounting_s2_c1": "Soetushinna jälgimine saab suurimaks erinevuseks dollari raamatupidamise ja Bitcoin-raamatupidamise vahel. Isegi kui mõtlete oma ettevõttest eranditult Bitcoin-terminites, peate oma maksudeklaratsioonis esitama iga tehingu dollariväärtuse.",
	"accounting_s2_c2": "Kui kasutate QuickBooksi, saate seda teha automaatselt Bitcoin Sync lisandmooduliga.",
	"accounting_s2_c3": "Kui te QuickBooksi ei kasuta, soovitame Satoshi Pacioli Accounting Services'i, raamatupidamisettevõtet, mis on spetsialiseerunud Bitcoin-raamatupidamisele.",
	"accounting_s2_c4": "Käsitsi jälgimiseks registreerige lihtsalt saadud Bitcoini kogus ja Bitcoin-tehingu dollariväärtus sel päeval.",
	"accounting_s2_c5": "Bitcoini praegust dollarihinda näete siit.",
	"accounting_s2_c6": "Jälgige seda teavet Exceli tabelis ja esitage see oma raamatupidajale.",
	"accounting_s2_c7": "Samuti saate need andmed automaatselt Excelisse importida.",
	"accounting_s2_c8": "Samuti saate vaadata Bitcoini ajaloolist dollarihinda eelmiste päevade kohta, nii et te ei pea seda iga päev tegema.",
	"accounting_s3": "BITCOINI KULUTAMINE VÕI MÜÜMINE",
	"accounting_s3_c1": "Kui kasutate meie rahakotijuhendist hübriidrahakotti ja müüte automaatselt 100% saadud Bitcoinist dollarite eest, ei pea te oma praeguses raamatupidamises midagi muutma.",
	"accounting_s3_c2": "Vaata rahakotijuhendit.",
	"accounting_s3_c3": "Kui otsustate osa saadud Bitcoinist hilisemal ajal kulutada või müüa, lisage lihtsalt müügihind Exceli tabelisse, kus jälgite soetushinda.",
	"accounting_s3_c4": "Näiteks, kui saite 1. jaanuaril 100 dollari väärtuses Bitcoini ja otsustasite selle 1. veebruaril müüa või kulutada uue väärtusega 110 dollarit, peate raamatupidamises kajastama 10-dollarilist kapitalikasumit.",
	"accounting_s3_c5": "See võib toimida ka vastupidi. Näiteks, kui saite 1. jaanuaril 100 dollari väärtuses Bitcoini ja otsustasite selle 1. veebruaril müüa või kulutada uue väärtusega 90 dollarit, peate raamatupidamises kajastama 10-dollarilist kapitalikahjumit.",
	"accounting_s4": "VAJAN ROHKEM ABI",
	"accounting_s4_c1": "Kui vajate rohkem abi Bitcoini integreerimisel oma ettevõtte raamatupidamisse, soovitame tungivalt Satoshi Pacioli Accounting Services'i, raamatupidamisettevõtet, mis on spetsialiseerunud Bitcoin-raamatupidamisele.",
	"accounting_s4_c2": "Uurige lähemalt Satoshi Pacioli Accounting Services'i kohta."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Kuidas Bitcoin-makseid vastu võtta",
	"wallets_header": "HANKIGE TASUTA BITCOIN-RAHAKOTT MAKSETE VASTUVÕTMISEKS",
	"wallets_intro_1": "Kõik Bitcoin-rahakotid on omavahel ühilduvad, nii et kliendid saavad teile Bitcoinis maksta olenemata sellest, millist rahakotti nad kasutavad.",
	"wallets_intro_2": "Puhtad Bitcoin-rahakotid:",
	"wallets_intro_3": "Need on puhtad Bitcoin-rahakotid, mis avavad kõik Bitcoini eelised: ei vahendajaid, madalad tasud ega tagasimakseid ega pettust.",
	"wallets_intro_4": "Hübriidrahakotid:",
	"wallets_intro_5": "Need lasevad teil valikulise osa oma Bitcoinist dollariteks vahetada kohe, kui klient teile maksab. Tasud on endiselt madalamad kui krediitkaartidel, kuid kõrgemad kui puhastel Bitcoin-maksetel.",
	"wallets_intro_6": "Mõlemad tüübid on suurepärased viisid Bitcoini vastuvõtmiseks. Teie konkreetne rahakott sõltub teie juhitava ettevõtte suurusest ja tüübist.",
	"wallets_choice_sole": "rahakotid üksikettevõtjatele",
	"wallets_choice_multiple": "rahakotid mitme töötajaga ettevõtetele",
	"wallets_choice_online": "rahakotid veebiettevõtetele",
	"wallets_choice_invoice": "rahakotid arveldusettevõtetele",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Saate Bitcoin-makseid vastu võtta oma olemasoleva Square PoS-terminali või veebipoe integratsiooniga. Bitcoin-maksete vastuvõtmine pole kunagi olnud lihtsam.",
	"wallets_feature_bitcoin_only": "Puhas Bitcoin-rahakott",
	"wallets_feature_no_info": "Andmeid pole vaja",
	"wallets_feature_in_person": "Ainult isiklikud maksed",
	"wallets_feature_settles_bitcoin": "Arveldab 100% Bitcoinis",
	"wallets_feature_hybrid": "Hübriidrahakott",
	"wallets_feature_info": "Ettevõtteandmed vajalikud",
	"wallets_feature_in_person_online": "Isiklikud ja veebimaksed",
	"wallets_feature_settles_both": "Arveldab Bitcoinis ja dollarites",
	"wallets_feature_multiple_employees": "Mitme töötaja tugi (BPT)",
	"wallets_feature_self_hosted": "Ise majutatud = 0% tasud",
	"wallets_feature_online_store": "Veebipoe integratsioon",
	"wallets_feature_invoicing": "Tasuta arveldustarkvara",
	"wallets_get_wallet": "HANGI RAHAKOTT"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Bitcoin-kaupmeeste kaardid — lisage oma ettevõte tasuta",
	"maps_header": "REGISTREERUGE BITCOIN-KAUPMEESTE KAARTIDEL JA SAAGE ROHKEM KLIENTE",
	"maps_request_details": "Sisestage allpool oma ettevõtte andmed ja me lisame teid tasuta Bitcoin-kaupmeeste kaartidele. See võimaldab bitcoineridel leida teie ettevõtte ja kulutada oma Bitcoini teie juures!",
	"maps_view": "Vaadake kaarti siin."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Teie ettevõte lisatakse Bitcoin-kaupmeeste kaartidele 1 kuni 2 nädala jooksul.",
	"kit_success_2": "Vaadake kaarti siin."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Kleebised "Bitcoin aktsepteeritakse siin"",
	"stickers_header": "HANKIGE TASUTA KLEEBISEID "BITCOIN AKTSEPTEERITAKSE SIIN"",
	"stickers_request": "Tellige tasuta kleebised",
	"stickers_request_details": "Andke oma klientidele teada, et võtate Bitcoin-makseid vastu nende tasuta "Bitcoin aktsepteeritakse siin" kleebistega.",
	"stickers_country_global_print": "Globaalne — Prindin ise oma kleebised",
	"stickers_request_instructions": "Saate kolm "Bitcoin aktsepteeritakse siin" kleebist tavalises valges ümbrikus. Kui vajate oma ettevõtte jaoks rohkem kui kolme kleebist, tellige julgelt mitu korda. Aadressiandmed kustutatakse pärast tasuta kleebiste saatmist.",
	"stickers_print_details": "Saate printida oma "Bitcoin aktsepteeritakse siin" kleebised olenemata sellest, kus elate! Klõpsake allpool oma keelel, et näha kleebisefaile ja juhiseid.",
	"stickers_request_language": "Ei näe oma keelt? Täitke allolev vorm, et taotleda "Bitcoin aktsepteeritakse siin" kleebisefaile oma keeles."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Saate oma kleebised kätte 1 kuni 2 nädala jooksul tavalises valges ümbrikus. Igas ümbrikus on 3 kleebist. Kui vajate oma ettevõtte jaoks rohkem kui 3 kleebist, tellige julgelt veel üks pakk!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Loome ja avaldame teie kleebisefaili 3 kuni 4 nädala jooksul. Täname kannatlikkuse eest!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin-ettevõttepakett",
	"kit_header": "PRINTIGE OMA BITCOIN-ETTEVÕTTEPAKETT",
	"kit_request": "TELLIGE TASUTA PAKETT",
	"kit_request_details": "Iga Bitcoin-ettevõttepakett sisaldab kahte flaierit, mis teevad lihtsaks kohaliku ettevõtte veenmise Bitcoin-makseid vastu võtma.",
	"kit_country_global_print": "Globaalne — Prindin ise oma paketid",
	"kit_enter_address": "Sisestage oma postiaadress ja me saadame teile tasuta Bitcoin-ettevõttepaketi tavalises valges ümbrikus. Aadressiandmed kustutatakse pärast paketi saatmist.",
	"kit_print_details": "Saate osaleda, printides oma flaiereid olenemata sellest, kus elate! Samuti saate suunata ettevõtteid meie digitaalsele ettevõttepaketile, et printimist vältida.",
	"kit_view_files": "VAATA FAILE",
	"kit_digital_kit": "DIGITAALNE PAKETT",
	"kit_resources": "IGA PAKETT VIITAB NENDELE TASUTA RESSURSSIDELE"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Saate oma Bitcoin-ettevõttepaketi kätte 1 kuni 2 nädala jooksul tavalises valges ümbrikus."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Printige oma Bitcoin-ettevõttepakett",
	"english_bbk_files_description": "Laadige flaierifailid siit alla.",
	"english_header": "PRINTIGE OMA INGLISKEELNE BITCOIN-ETTEVÕTTEPAKETT"
});

console.log(`\nDone! Created 14 business files.`);
