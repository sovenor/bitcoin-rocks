/**
 * Creates Estonian (et) translation files for remaining content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

// bank-runs
writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoinil ei ole pangajookse",
	"bank_runs_header": "BITCOINIL EI OLE PANGAJOOKSE",
	"bank_runs_header_2": "AGA TEIE PANGAL VÕIB OLLA",
	"bank_runs_what": "MIS ON PANGAJOOKS?",
	"bank_runs_what_content_1": "Pangajooks tekib siis, kui liiga paljud inimesed üritavad korraga oma raha pangast välja võtta.",
	"bank_runs_what_content_2": "Kui pankadel ei ole piisavalt raha väljavõtmiste katmiseks, võivad nad pangajooksu ajal täielikult kokku kukkuda.",
	"bank_runs_how": "KUIDAS PANGAJOOKSUD TEKIVAD?",
	"bank_runs_how_content_1": "Meie pangasüsteem on "osareservi" põhine, mis tähendab, et pangad ei hoia lihtsalt teie raha karbis, oodates, kuni te seda kasutate või välja võtate.",
	"bank_runs_how_content_2": "Selle asemel võtab teie pank teie raha ja laenab selle välja või investeerib. See võib lukustada teie raha pikkadeks perioodideks, kuigi pank lubab teile võimalust oma raha igal ajal välja võtta.",
	"bank_runs_how_content_3": "Mis juhtub siis, kui proovite oma raha välja võtta pärast seda, kui pank on selle juba välja laenanud või investeerinud?",
	"bank_runs_how_content_4": "See ei ole probleem, kui olete ainus, kes proovib välja võtta. Pank võtab lihtsalt kellegi teise raha ja annab selle teile. Aga mis juhtub, kui liiga paljud inimesed proovivad korraga välja võtta?",
	"bank_runs_how_content_5": "Paljud USA-s said sellest teada, kui Silicon Valley Banki jooks toimus 2023. aasta märtsis.",
	"bank_runs_how_content_6": "Pank oli investeerinud klientide raha valitsuse võlakirjadesse, mis olid lukustatud kuni 30 aastaks. Veelgi hullem, nende võlakirjade väärtus oli hiljuti dramaatiliselt langenud, nii et Silicon Valley Bank ei saanud lihtsalt võlakirju müüa, et hoiustajatele raha tagasi saada. Nad olid maksejõuetud. Neil polnud piisavalt raha hoiustajate väljavõtmiste katmiseks.",
	"bank_runs_how_content_7": "Kuna rohkem inimesi sai teada, muutus probleem ainult hullemaks. Rohkem väljavõtmistaotlusi tuli sisse, kuid paljusid ei töödeldud. Tuhanded ettevõtted mõistsid, et nad ei suuda panga ebaõnnestumise tõttu oma töötajatele palka maksta.",
	"bank_runs_how_content_8": "FDIC sekkus ja nõustus hoiustajad terveks tegema. Probleem lahendatud? Mitte päris...",
	"bank_runs_fdic": "KAS FDIC KINDLUSTUS KAITSEB MINU RAHA?",
	"bank_runs_fdic_content_1": "FDIC kindlustus on mõeldud pangahoiustajate kaitsmiseks panga ebaõnnestumise korral. Hoiused on kindlustatud kuni 250 000 dollarini hoiustaja kohta. Kõlab hästi, eks?",
	"bank_runs_fdic_content_2": "Mitte päris. Kui pank ebaõnnestub, kust saab FDIC raha? Neil on kindlustusfond 125 miljardi dollariga.",
	"bank_runs_fdic_content_3": "See kõlab nagu palju raha, kuni võrdlete seda hoiuste summaga, mida nad kindlustavad: peaaegu 10 triljonit ehk 10 000 miljardit dollarit.",
	"bank_runs_fdic_content_4": "FDIC näitab isegi oma veebilehel, et neil on kindlustusfondis piisavalt raha ainult veidi rohkem kui 1% hoiuste katmiseks.",
	"bank_runs_fdic_content_5": "Panga ebaõnnestumise korral, mis ületaks FDIC kindlustusfondi, on tõenäoline (kuid mitte garanteeritud), et USA valitsus trükiks raha hoiustajate terveks tegemiseks.",
	"bank_runs_fdic_content_6": "Kuid rahatrükkimine tekitab inflatsiooni, nii et see ei ole hea lahendus.",
	"bank_runs_safe": "KAS ON PANKU, MIS EI KASUTA OSARESERVI?",
	"bank_runs_safe_content_1": "Mõned pangad on proovinud olla "turvalised pangad", mis ei laena ega investeeri hoiustajate vahendeid.",
	"bank_runs_safe_content_2": "Kuigi nendel turvalistel pankadel oleks null pangajooksu riski, on Federal Reserve nende taotlused tagasi lükanud. See tähendab, et nad ei saa seaduslikult pankadena tegutseda.",
	"bank_runs_safe_content_3": "Kuna neil on takistatud tegutsemine, ei ole tänapäeval ühtegi panka, mis ei kasutaks osareservi.",
	"bank_runs_safe_content_4": "Õnneks on võimalus osareservisüsteemist loobuda, olles ise oma pank. Ei, me ei räägi sularaha madratsisse peitmisest.",
	"bank_runs_safe_content_5": "Sularahas säästmine on endiselt inflatsiooni suhtes haavatav.",
	"bank_runs_safe_content_6": "Me räägime Bitcoinist: uuest finantssüsteemist, mis laseb teil olla ise oma pank.",
	"bank_runs_protect": "KAS BITCOIN SAAB MIND PANGAJOOKSUDE EEST KAITSTA?",
	"bank_runs_protect_content_1": "Jah, Bitcoin on täisreservi finantssüsteem.",
	"bank_runs_protect_content_2": "Pangajooksud on Bitcoinis võimatud, kui võtate oma Bitcoini välja oma rahakotti. Ärge jätke oma bitcoini börsile ega pakendisse nagu Bitcoin-ETF.",
	"bank_runs_protect_content_3": "Vaadake meie lihtsat Bitcoin-rahakotijuhendit, et õppida, kuidas oma rahakotti välja võtta.",
	"bank_runs_protect_content_4": "Bitcoiniga saate lõpuks oma raha üle kontrolli."
});

// wallets
writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Bitcoin-rahakotijuhend",
	"wallets_description": "On palju erinevaid Bitcoin-rahakotte, mis erinevad olulistel viisidel. Saate otsustada, kas rahakott sobib teile, esitades neid lihtsaid küsimusi.",
	"wallets_header": "KUIDAS OMA BITCOINI TURVALISELT HOIUSTADA",
	"wallets_s1_c1": "Bitcoin-rahakotid on omavahel ühilduvad, nii et saate saata Bitcoini kellelegi olenemata sellest, millist rahakotti nad kasutavad.",
	"wallets_s1_c2": "On palju erinevaid Bitcoin-rahakotte, mis erinevad olulistel viisidel. Saate otsustada, kas rahakott sobib teile, esitades neid lihtsaid küsimusi:",
	"wallets_question_1": "KAS SEE ON ISEHOIUSTAV RAHAKOTT?",
	"wallets_s2_c1": "Üks Bitcoini innovatsioonidest on võimalus hoiustada seda ilma hoidjat, näiteks panka, usaldamata.",
	"wallets_s2_c2": "Kui hoiate bitcoini börsil või ETF-is, kaotate bitcoini vabaduse eelised.",
	"wallets_s2_c3": "Isehoiustavad rahakotid avavad Bitcoini täieliku jõu: vabaduseraha.",
	"wallets_s2_c4": "Isehoiustava rahakotiga olete ainus, kellel on võimalus oma raha kulutada või üle kanda. Keegi ei saa takistada teid raha saatmast ega vastuvõtmisest, kui kasutate isehoiustavat rahakotti.",
	"wallets_s2_c5": "Isehoiustavaid rahakotte nimetatakse ka mittehoidvavateks rahakottideks.",
	"wallets_s3_c1": "Hoidvad rahakotid on rahakotid, kus teil pole oma raha üle kontrolli.",
	"wallets_s3_c2": "Need rahakotid sarnanevad rohkem pangasüsteemiga, kus peate usaldama kolmandat osapoolt, et anda teile juurdepääs teie rahale. Kui teie Bitcoin on börsil, kasutate hoidvat rahakotti.",
	"wallets_s3_c3": "Kui ostsite Bitcoin-ETF-i, kasutate hoidvat rahakotti, mis ei lase teil isehoiustusse välja võtta.",
	"wallets_s3_c4": "Hoidvad rahakotid võivad tunduda mugavad, kuid hoidjal on tehniline võimalus varastada kõik kasutajate vahendid igal ajal.",
	"wallets_s3_c5": "Mitte teie võtmed, mitte teie mündid!",
	"wallets_question_2": "KAS SEE ON KUUM VÕI KÜLM?",
	"wallets_s4_c1": "Külmad rahakotid hoiustavad teie Bitcoini võtmeid viisil, mis ei eksponeri neid kunagi internetile.",
	"wallets_s4_c2": "See piirab oluliselt rünnakuvektoreid, mida varas saab kasutada teie Bitcoini varastamise üritamiseks, ja sobib kõige paremini suurte Bitcoini summade jaoks, mida ei pea sageli üle kandma.",
	"wallets_s4_c3": "Mõelge külmast rahakotist kui pikaajalisest hoiukontost, mida tuntakse ka kui külmhoiustamist.",
	"wallets_s5_c1": "Kuumad rahakotid hoiustavad teie Bitcoini võtmeid internetiühendusega seadmes, nagu teie telefon.",
	"wallets_s5_c2": "Kuumasid rahakotte peetakse üldiselt turvalisteks, kuid neil võib olla rohkem turvanõrkusi kui külmadel rahakottidel.",
	"wallets_s5_c3": "Mõelge kuumast rahakotist samal viisil kui füüsilisest rahakotist. Te ei hoiustaks kogu oma sääste rahakotis, kuid teil oleks veidi kulutamisraha.",
	"wallets_s5_c4": "Kuumad rahakotid teevad palju lihtsamaks oma Bitcoini kasutamise ilma kogu sääste külmhoiustamisest välja võtmata.",
	"wallets_question_3": "KUIDAS MA OMA TAASTEFRAASI VARUNDAN?",
	"wallets_s6_c1": "Kui loote oma Bitcoin-rahakoti, genereerib teie seade taastefraasi. See taastefraas (tuntud ka kui seemnefraas) sisaldab 12 või 24 sõna.",
	"wallets_s6_c2": "Kui kaotate kunagi juurdepääsu oma rahakotile või teie seade lakkab töötamast, saate sisestada selle taastefraasi uude rahakotti, et taastada juurdepääs oma Bitcoinile.",
	"wallets_s6_c3": "Enamik rahakotte sisaldab paberilehte taastefraasi üleskirjutamiseks, kuid paljud eelistavad selle fraasi hoopis terasele varundada. See muudab palju ebatõenäolisemaks taastefraasi kaotamise looduskatastroofi, nagu tulekahju või üleujutuse korral.",
	"wallets_s6_c4": "Jameson Lopp on testinud 70 terase varunduskomplekti, et aidata teil valida endale sobiv.",
	"wallets_s6_c5": "Vaadake Jamesoni Bitcoin-metallvarundamise juhendit siit.",
	"wallets_s6_c6": "Või jätkake kerimist, et uurida Bitcoin-rahakoti valikuid.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN", "wallets_coldcard_mk5": "COLDCARD MK5", "wallets_coldcard_q": "COLDCARD Q", "wallets_blockstream_jade": "BLOCKSTREAM JADE", "wallets_foundation_passport": "FOUNDATION PASSPORT", "wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Otsite meie Lightning-rahakotijuhendit?",
	"wallets_starter_wallet": "Suurepärane stardirahakott", "wallets_mobile_app": "Mobiilirakendus", "wallets_2fa_support": "2FA tugi", "wallets_air_gap_mode": "Õhulõhe-režiim", "wallets_air_gap_camera": "Õhulõhe-režiim + kaamera", "wallets_bitcoin_only": "Ainult Bitcoin", "wallets_security_features": "Palju turvaomadusi", "wallets_free": "100% tasuta",
	"wallets_coldcard_mk5_costs": "Maksab $189", "wallets_coldcard_q_costs": "Maksab $289", "wallets_blockstream_jade_costs": "Maksab $79", "wallets_foundation_passport_costs": "Maksab $199", "wallets_seedsigner_costs": "Osad maksavad $50",
	"wallets_very_affordable": "Väga taskukohane", "wallets_pair_with_phone": "Paarige oma telefoniga", "wallets_battery": "Laetav aku", "wallets_build_your_own": "Ehita ise oma", "wallets_qwerty_keyboard": "Täielik QWERTY-klaviatuur", "wallets_qr_scanner": "QR-koodi skanner"
});

// buy
writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Kuidas Bitcoini osta — samm-sammult juhend",
	"buy_header": "KUIDAS BITCOINI OSTA",
	"buy_intro_c1": "Bitcoini esmakordne ostmine võib tunduda üle jõu käiv, kuid see on tegelikult üsna lihtne, kui jagate selle sammudeks.",
	"buy_intro_c2": "See juhend juhendab teid läbi Bitcoini turvalise ostmise ja oma rahakotis hoiustamise protsessi.",
	"buy_step_1_header": "1. SAMM: VALIGE OMA RIIK", "buy_step_1_description": "Erinevatel riikidel on erinevad Bitcoin-ostuvõimalused. Valige oma riik, et näha teile parimaid valikuid.",
	"buy_search_countries": "Otsige oma riiki",
	"buy_country_united_states": "USA", "buy_country_australia": "Austraalia", "buy_country_austria": "Austria", "buy_country_belgium": "Belgia", "buy_country_brazil": "Brasiilia", "buy_country_canada": "Kanada", "buy_country_france": "Prantsusmaa", "buy_country_germany": "Saksamaa", "buy_country_ireland": "Iirimaa", "buy_country_italy": "Itaalia", "buy_country_netherlands": "Holland", "buy_country_new_zealand": "Uus-Meremaa", "buy_country_spain": "Hispaania", "buy_country_united_kingdom": "Suurbritannia", "buy_country_argentina": "Argentina", "buy_country_chile": "Tšiili", "buy_country_colombia": "Colombia", "buy_country_costa_rica": "Costa Rica", "buy_country_czech_republic": "Tšehhi", "buy_country_denmark": "Taani", "buy_country_el_salvador": "El Salvador", "buy_country_estonia": "Eesti", "buy_country_finland": "Soome", "buy_country_greece": "Kreeka", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hongkong", "buy_country_hungary": "Ungari", "buy_country_iceland": "Island", "buy_country_india": "India", "buy_country_israel": "Iisrael", "buy_country_japan": "Jaapan", "buy_country_latvia": "Läti", "buy_country_lithuania": "Leedu", "buy_country_luxembourg": "Luksemburg", "buy_country_malta": "Malta", "buy_country_mexico": "Mehhiko", "buy_country_norway": "Norra", "buy_country_panama": "Panama", "buy_country_poland": "Poola", "buy_country_portugal": "Portugal", "buy_country_romania": "Rumeenia", "buy_country_singapore": "Singapur", "buy_country_slovakia": "Slovakkia", "buy_country_slovenia": "Sloveenia", "buy_country_south_africa": "Lõuna-Aafrika", "buy_country_south_korea": "Lõuna-Korea", "buy_country_sweden": "Rootsi", "buy_country_switzerland": "Šveits", "buy_country_thailand": "Tai", "buy_country_turkey": "Türgi", "buy_country_ukraine": "Ukraina", "buy_country_uruguay": "Uruguay",
	"buy_step_2_header": "2. SAMM: VALIGE MAKSEVIIS", "buy_step_2_description": "Bitcoini ostmiseks on kaks peamist viisi: pangaülekandega või sularahaga. Igaühel on erinevad eelised.",
	"buy_method_bank_transfer": "PANGAÜLEKANNE", "buy_method_bank_fast": "Kiire ja lihtne", "buy_method_bank_less_private": "Vähem privaatne", "buy_method_bank_description": "Pangaülekanded on kõige levinum viis Bitcoini osta. Need on kiired, mugavad ja neil on tavaliselt madalamad tasud.", "buy_method_choose_bank": "Vali pangaülekanne",
	"buy_method_cash": "SULARAHA", "buy_method_cash_private": "Privaatsem", "buy_method_cash_limited": "Piiratud valikud", "buy_method_cash_description": "Sularahaostud pakuvad rohkem privaatsust, kuid valikuid on vähem ja need võivad nõuda kellegi isiklikku kohtumist või Bitcoin-sularahaautomaadi kasutamist.", "buy_method_choose_cash": "Vali sularaha",
	"buy_step_3_header": "3. SAMM: OSTUVÕIMALUSED", "buy_step_3_description": "Siin on parimad Bitcoin-ostuvõimalused teie riigi ja makseviisi jaoks:",
	"buy_platform_recommended": "SOOVITATUD",
	"buy_platform_strike_description": "Strike on kiireim ja lihtsaim viis Bitcoini osta madalamate tasudega ja kohese Lightning-võrgu toega.",
	"buy_platform_swan_description": "Swan Bitcoin on spetsialiseerunud ainult Bitcoini teenustele koos dollari keskmise kulu meetodiga ja haridusressurssidega.",
	"buy_platform_river_description": "River pakub Bitcoini ostmist, kaevandamist ja hoidmisteenuseid, keskendudes haridusele ja turvalisusele.",
	"buy_platform_coinsquare_description": "Coinsquare on Kanada Bitcoin-börs tugeva regulatiivse vastavuse ja klienditoega.",
	"buy_platform_kraken_description": "Kraken on väljakujunenud Bitcoin-börs edasijõudnud kauplemisvõimaluste ja tugeva turvalisusega.",
	"buy_platform_atm_description": "Bitcoin-sularahaautomaadid lasevad teil Bitcoini sularahaga koheselt osta. Leidke üks enda lähedalt Coin ATM Radariga.",
	"buy_platform_bisq_description": "Bisq on detsentraliseeritud peer-to-peer börs, mis võimaldab privaatset Bitcoin-kauplemist ilma KYC-ta.",
	"buy_platform_feature_instant": "Kohesed ostud", "buy_platform_feature_low_fees": "Madalad tasud", "buy_platform_feature_lightning": "Lightning-võrk", "buy_platform_feature_dca": "Dollari keskmise kulu meetod", "buy_platform_feature_education": "Haridusressursid", "buy_platform_feature_withdrawal": "Lihtne väljavõtmine", "buy_platform_feature_mining": "Bitcoin-kaevandamine", "buy_platform_feature_custody": "Hoidmisteenused", "buy_platform_feature_canadian": "Kanada fookus", "buy_platform_feature_regulated": "Reguleeritud börs", "buy_platform_feature_support": "Klienditugi", "buy_platform_feature_established": "Väljakujunenud platvorm", "buy_platform_feature_security": "Tugev turvalisus", "buy_platform_feature_advanced": "Edasijõudnud funktsioonid", "buy_platform_feature_cash": "Sularahaostud", "buy_platform_feature_anonymous": "Anonüümsem", "buy_platform_feature_p2p": "Peer-to-peer", "buy_platform_feature_private": "Privaatne kauplemine", "buy_platform_feature_decentralized": "Detsentraliseeritud",
	"buy_platform_relai_description": "Relai on Šveitsi ainult Bitcoini rakendus isehoiustava rahakotiga, automaatse investeerimise funktsioonidega ja madalamate tasudega Euroopa kasutajatele.",
	"buy_platform_feature_bitcoin_only": "Ainult Bitcoin", "buy_platform_feature_self_custody": "Isehoiustav rahakott", "buy_platform_feature_auto_invest": "Automaatsed investeerimiskavad", "buy_platform_feature_european": "Euroopa fookus",
	"buy_step_4_header": "4. SAMM: HOIUSTAGE OMA BITCOIN TURVALISELT",
	"buy_step_4_c1": "Pärast Bitcoini ostmist on kõige olulisem samm see oma rahakotti liigutada, kus te kontrollite privaatvõtmeid.",
	"buy_step_4_c2": "Bitcoini börsile jätmine on riskantne, sest tegelikult ei oma Bitcoini teie — seda teeb börs.",
	"buy_step_4_c3": "Kui kontrollite oma privaatvõtmeid, on teil tõeline omandiõigus oma Bitcoini üle ja keegi ei saa seda teilt ära võtta.",
	"buy_step_4_c4": "Uurige, kuidas valida oma vajadustele õige Bitcoin-rahakott:",
	"buy_cta_wallets": "Vaadake meie Bitcoin-rahakotijuhendit"
});

// lightning
writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Bitcoin Lightning-rahakotijuhend",
	"lightning_description": "Lightning-rahakotid võimaldavad Bitcoini kiiresti ja odavalt saata, säilitades samal ajal teie isiklikku suveräänsust.",
	"lightning_header": "LIGHTNING-RAHAKOTIJUHEND",
	"lightning_s1_c1": "Lightning võimaldab Bitcoin-makseid kiiresti ja odavalt saata.",
	"lightning_s1_c2": "On oluline teada, et Lightningi kasutamine hõlmab kompromisse. Kiiremate ja odavamate Bitcoin-maksete eest ohverdate sageli mõnevõrra turvalisust.",
	"lightning_s1_c3": "Üldiselt tuleks Lightningit kasutada ainult väikeste bitcoini summadega. Suuri bitcoini summasid peaksite hoiustama ainult riistvara rahakotis.",
	"lightning_s1_c4": "Vaadake meie riistvara rahakotijuhendit lisateabe saamiseks.",
	"lightning_s1_c5": "Kõik Lightning-rahakotid ei ole ühesugused. Saate otsustada, millisel rahakotil on teie jaoks õige kompromisside tasakaal, esitades ühe lihtsa küsimuse:",
	"lightning_question_1": "MILLINE KOMPROMISSIDE TASAKAAL ON MINU JAOKS ÕIGE?",
	"lightning_s2_c1": "Üks Bitcoini innovatsioonidest on võimalus hoiustada seda ilma hoidjat, näiteks panka, usaldamata. Isehoiustavad rahakotid avavad Bitcoini täieliku jõu.",
	"lightning_s2_c2": "Isehoiustava rahakotiga olete ainus, kellel on võimalus oma raha kulutada või üle kanda. Keegi ei saa teid peatada, tsenseerida ega teilt varastada, kui kasutate isehoiustavat rahakotti. Neid nimetatakse ka mittehoidvavateks rahakottideks.",
	"lightning_s2_c3": "Kõige suveräänsem viis Lightningit kasutada on oma sõlme käitamine.",
	"lightning_s2_c4": "See juhend keskendub lihtsatele Lightning-rahakottidele, mis ei nõua oma sõlme.",
	"lightning_s2_c5": "On oluline teada, et isegi mittehoidva Lightning-rahakoti kasutamisel usaldate endiselt rahakoti loojat, et ta ei saada pahatahtlikku rakenduse uuendust ja ei varasta vahendeid.",
	"lightning_s3_c1": "Hoidvad rahakotid on rahakotid, kus teil pole oma raha üle kontrolli.",
	"lightning_s3_c2": "Need rahakotid sarnanevad rohkem pangasüsteemiga, kus peate usaldama kolmandat osapoolt, et anda teile juurdepääs teie rahale. Kui teie Bitcoin on börsil, kasutate hoidvat rahakotti.",
	"lightning_s3_c3": "Hoidvad rahakotid võivad tunduda mugavad, kuid hoidjal on tehniline võimalus varastada kõik kasutajate vahendid igal ajal.",
	"lightning_s3_c4": "Mõned eelistavad hoidvaid Lightning-rahakotte väikeste bitcoini summade jaoks mugavuse pärast. Pidage lihtsalt meeles: mitte teie võtmed, mitte teie mündid!",
	"lightning_question_2": "VALIGE OMA RAHAKOTT",
	"lightning_s4_c1": "Kõike seda silmas pidades saate nüüd valida Lightning-rahakoti, millel on teie jaoks õige kompromisside tasakaal.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Palju funktsioone", "lightning_mobile_app": "Mobiilirakendus", "lightning_free": "100% tasuta", "lightning_merchants": "Suurepärane kaupmeestele", "lightning_starter": "Suurepärane stardirahakott", "lightning_browser": "Brauseripõhine", "lightning_custodial": "Täielikult hoidev rahakott",
	"lightning_cta_hardware": "Otsite meie Bitcoin riistvara rahakotijuhendit?"
});

// stickers
writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Tasuta Bitcoin-kleebised bitcoin.rocks-ilt",
	"stickers_description": "Pange Bitcoin-kleebis avalikku kohta, et oranžida teid ümbritsevaid inimesi.",
	"stickers_header": "TASUTA BITCOIN-KLEEBISED",
	"stickers_choose_header": "VALIGE OMA KLEEBISEPAKETT",
	"stickers_choose_c1": "Meie missioon on aidata teil oranžida rohkem inimesi, pannes Bitcoin-kleebiseid avalikesse kohtadesse. Kõigil meie kleebistel on QR-koodid, mis viivad hariduslehtedele teemal",
	"stickers_choose_c2": "Bitcoin", "stickers_choose_c3": "inflatsioon", "stickers_choose_c4": "Valige oma kleebisepakett allpool",
	"stickers_text_pack": "TEKSIPAKETT", "stickers_signs_pack": "SILDIPAKKETT",
	"stickers_instructions_1": "Sisestage oma postiaadress ja me saadame teile tasuta Bitcoin-kleebisepaketi postiga! Teie kleebised saadetakse tavalises valges ümbrikus.",
	"stickers_instructions_2": "Aadressiandmed kustutatakse pärast tasuta kleebiste saatmist.",
	"stickers_share_header": "JAGAGE OMA KLEEBISAKOHTI",
	"stickers_share_c1": "Jagage oma kleebisakohti meiega Nostris ja vaadake, kuhu teised oma kleebiseid panevad.",
	"stickers_btn_share_on_nostr": "JAGA NOSTRIS", "stickers_btn_what_is_nostr": "MIS ON NOSTR?",
	"stickers_flyers_link_before": "Kuna olete juba tegev, printige ja riputage oma ", "stickers_flyers_link_text": "Bitcoin-flaierid", "stickers_flyers_link_after": " üles, et oranžida veelgi rohkem inimesi.",
	"stickers_country_global_print": "Globaalne — Prindin ise oma kleebised", "stickers_country_global_order": "Globaalne — Tellin hulgi",
	"placeholder_name_optional": "Nimi (valikuline)", "placeholder_address_line_1": "Aadressirida 1", "placeholder_address_line_2": "Aadressirida 2 (valikuline)", "placeholder_city": "Linn", "placeholder_state": "Osariik", "placeholder_province": "Provints", "placeholder_zip_code": "Postiindeks", "placeholder_postal_code": "Postiindeks", "placeholder_language": "Keel", "placeholder_which_stickers": "Millised kleebised?", "placeholder_email_optional": "Sisestage oma e-posti aadress teavituste saamiseks (valikuline)"
});

// postcards
writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Tasuta Bitcoin-postkaardid bitcoin.rocks-ilt",
	"postcards_description": "Hankige tasuta Bitcoin-postkaardipakk ja jagage Bitcoini kellegagi, keda tunnete.",
	"postcards_header": "POSTKAARDIPROGRAMM ON LÕPPENUD",
	"postcards_program_closed_message": "Meie tasuta Bitcoin-postkaardiprogramm on lõppenud. Täname kõiki, kes osalesid Bitcoin-hariduse levitamises posti teel!",
	"postcards_sticker_alternative_header": "HANKIGE HOOPIS TASUTA BITCOIN-KLEEBISEID",
	"postcards_sticker_alternative_message": "Jätkake Bitcoin-teadlikkuse levitamist meie tasuta kleebiseprogrammiga! Meie Bitcoin-kleebised sobivad suurepäraselt avalikes kohtades jagamiseks ja neil on QR-koodid, mis viivad haridussisule.",
	"postcards_sticker_cta": "HANKIGE TASUTA KLEEBISEID",
	"postcards_step_2": "KUIDAS POSTKAARDID VÄLJA NÄGID",
	"postcards_instructions_4": "Tegime need postkaardid, et teha teile lihtsamaks kellegi tutvustamine Bitcoiniga! Lisage lihtsalt aadress ja mark ning pange postkaart postkasti.",
	"postcards_instructions_5": "Meie missioon on kiirendada Bitcoini kasutuselevõttu. Saate aidata, hankides tasuta kleebiseid ja pannes neid avalikesse kohtadesse!",
	"postcards_instructions_6": "Me kõik tunneme kedagi, kes saaks kasu Bitcoinist rohkem õppimisest. Jagage täna Bitcoin-kleebiseid nendega!"
});

// signs
writeFile(`signs_${lang}.json`, {
	"signs_description": "Aidake meil need Bitcoin-sildid üle kogu Ameerika üles panna!",
	"signs_title": "Tasuta Bitcoin-sildid bitcoin.rocks-ilt",
	"signs_choose_header": "AITÄH, ET AITASITE MEIL NEED BITCOIN-SILDID ÜLE KOGU AMEERIKA ÜLES PANNA!",
	"signs_choose_c1": "Meil on nüüd sildid täielikult otsas! Meie missioon on kiirendada Bitcoini kasutuselevõttu hariduse kaudu.",
	"signs_choose_c2": "Paljud teist aitasid, pannes need tasuta Bitcoin-sildid avalikesse kohtadesse üles. Kõigil meie siltidel on QR-koodid, mis viivad hariduslehtele teemal",
	"signs_choose_c3": "inflatsioon",
	"signs_choose_c4": "Tänu meie suurepärasele kogukonnale jõudsime tuhandete inimesteni ja aitasime neil astuda esimesi samme Bitcoin-ussiauku.",
	"signs_share_header": "JAGAGE OMA SILDIASUKOHTI",
	"signs_share_c1": "Jagage oma sildikoha pilti meiega Nostris ja vaadake, kuhu teised oma silte panevad.",
	"signs_btn_share_on_nostr": "JAGA NOSTRIS", "signs_btn_what_is_nostr": "MIS ON NOSTR?",
	"signs_instructions_1": "Sisestage oma postiaadress ja me saadame teile kasti 10 Bitcoin-sildiga postiga!",
	"signs_instructions_2": "Aadressiandmed kustutatakse pärast tasuta siltide saatmist."
});

// flyers
writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Tasuta Bitcoin-flaierid bitcoin.rocks-ilt",
	"flyers_description": "Printige Bitcoin-flaier kodus ja riputage see avalikku kohta, et oranžida teid ümbritsevaid inimesi.",
	"flyers_header_1": "PRINTIGE JA RIPUTAGE", "flyers_header_2": "BITCOIN-FLAIERID ÜLES",
	"flyers_intro_header": "KUIDAS NEID BITCOIN-FLAIEREID PRINTIDA JA ÜLES RIPUTADA",
	"flyers_intro_c1": "Meie missioon on aidata teil oranžida rohkem inimesi, riputades Bitcoin-flaiereid avalikesse kohtadesse. Sellel flaieril on QR-kood, mis viib meie",
	"flyers_intro_c2": "hariduslikule Bitcoin-veebilehele.", "flyers_intro_c3": "inflatsioon",
	"flyers_intro_c4": "Printige see flaier kodus või trükikojas. Seejärel riputage see teadetetahvlitele, telefoniposti külge linnas ja muudesse avalikesse kohtadesse, kus inimesed saavad seda näha ja Bitcoinist õppida.",
	"flyers_intro_c5": "Kuna olete juba tegev, tellige pakk meie", "flyers_intro_c6": "tasuta Bitcoin-kleebiseid", "flyers_intro_c7": ", et oranžida veelgi rohkem inimesi.",
	"flyers_btn_download": "LAADI FLAIER ALLA", "flyers_btn_print": "PRINDI FLAIER",
	"flyers_share_header": "JAGAGE OMA FLAIERIKOHTI",
	"flyers_share_c1": "Jagage oma flaierikohti meiega Nostris ja vaadake, kuhu teised oma flaiereid riputavad.",
	"flyers_btn_share_on_nostr": "JAGA NOSTRIS", "flyers_btn_what_is_nostr": "MIS ON NOSTR?"
});

// get-involved
writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Osalege ja aidake Bitcoini levitada",
	"get_involved_description": "Meie tasuta ressursid teevad Bitcoin-kasutuselevõtu levitamise lihtsamaks.",
	"get_involved_header": "OSALEGE", "get_involved_header_2": "LEVITAGE BITCOINI",
	"get_involved_intro_1": "Meie maailma praeguses olukorras elamine võib olla masendav.",
	"get_involved_intro_2": "Meie raha on katki. Selle tulemusena on ka ühiskonna põhielemendid katki.",
	"get_involved_intro_3": "Kui olete juba Bitcoinist huvitatud, tunnete lootuse tunnet, mida Bitcoin saab anda. Lootust paremale tulevikule, mille teeb võimalikuks parem raha.",
	"get_involved_intro_4": "Kuid nii paljud teie ümber olevad inimesed ei tea Bitcoinist. Nad elavad samas katkises maailmas nagu teie, kuid ilma lootuse majakata, mis aitaks neil pimeduse läbi saada.",
	"get_involved_intro_5": "Kuid saate aidata seda muuta. Oleme loonud mitmeid tasuta ressursse, et teha lihtsamaks lootuse levitamist, mida Bitcoin teie ümber olevatele inimestele toob.",
	"get_involved_sticker_header": "Pange kleebis avalikku kohta",
	"get_involved_sticker_content_1": "Saate aidata oma ümberkaudseid inimesi Bitcoinist harida, ilma et peaksite kellegagi suhtlema. Pange lihtsalt üks meie tasuta Bitcoin-kleebistest avalikku kohta.",
	"get_involved_sticker_content_2": "Sajad inimesed skaneerivad nende kleebiste QR-koode iga kuu. Inflatsiooni kleebised viivad lehele teemal",
	"get_involved_sticker_content_3": "Bitcoin kui lahendus inflatsioonile.",
	"get_involved_sticker_content_4": "Teised kleebised viivad meie hariduslikule veebilehele, mis näitab inimestele, kuidas",
	"get_involved_sticker_content_5": "Bitcoin ehitab paremat maailma.",
	"get_involved_sticker_content_6": "Pannes need kleebised oma kogukonnas kohtadesse, kus inimesed neid näevad, saate aidata ümbritsevatel inimestel astuda esimesi samme Bitcoin-ussiauku.",
	"get_involved_request_a": "TELLIGE", "get_involved_sticker_pack": "KLEEBISEPAKETT",
	"get_involved_postcard_header": "Saatke postkaart",
	"get_involved_postcard_content_1": "Saate aidata levitada Bitcoini lootust kellelegi, keda tunnete, saates neile ühe meie tasuta postkaartidest.",
	"get_involved_postcard_content_2": "Iga postkaardi tagaküljel on veenev tekst Bitcoinist koos QR-koodiga lisateabe saamiseks.",
	"get_involved_postcard_content_3": "Saates kellelegi Bitcoin-postkaardi, saate aidata neil Bitcoini uues valguses näha.",
	"get_involved_postcard_pack": "POSTKAARDIPAKK",
	"get_involved_business_header": "Registreerige ettevõte",
	"get_involved_business_content_1": "Kas soovite aidata ehitada ringlevat Bitcoin-majandust? Meie Bitcoin-ettevõttepakett teeb lihtsaks ettevõttele lähenemise Bitcoin-maksete vastuvõtmise kohta.",
	"get_involved_business_content_2": "Iga ettevõttepakett sisaldab flaiereid, mis tõstavad esile Bitcoin-maksete vastuvõtmise eeliseid. Iga flaier viitab hulgale",
	"get_involved_business_content_3": "tasuta Bitcoin-ettevõtteressurssidele.",
	"get_involved_business_kit": "ETTEVÕTTEPAKETT"
});

console.log(`\nDone! Created 9 content files.`);
