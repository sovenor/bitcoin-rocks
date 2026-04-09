/**
 * Creates Finnish (fi) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'fi';
const today = '2026-04-08';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };
function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// bank-runs
writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoinissa ei ole talletuspakoja",
	"bank_runs_header": "BITCOINISSA EI OLE TALLETUSPAKOJA",
	"bank_runs_header_2": "MUTTA PANKILLASI SAATTAA OLLA",
	"bank_runs_what": "MIK\u00c4 ON TALLETUSPAKO?",
	"bank_runs_what_content_1": "Talletuspako tapahtuu, kun liian monet ihmiset yritt\u00e4v\u00e4t nostaa rahansa pankista samanaikaisesti.",
	"bank_runs_what_content_2": "Jos pankeilla ei ole tarpeeksi rahaa nostojen kattamiseen, ne voivat romahtaa kokonaan tallettajapaon tapahtuessa.",
	"bank_runs_how": "MITEN TALLETTAJAPAOT TAPAHTUVAT?",
	"bank_runs_how_content_1": "Pankkij\u00e4rjestelm\u00e4mme on 'osittaisvarantoj\u00e4rjestelm\u00e4', mik\u00e4 tarkoittaa, ett\u00e4 pankit eiv\u00e4t vain s\u00e4ilyt\u00e4 rahojasi holvissa odottaen, ett\u00e4 k\u00e4yt\u00e4t tai nostat ne.",
	"bank_runs_how_content_2": "Sen sijaan pankkisi ottaa rahasi ja lainaa ne edelleen tai sijoittaa ne. T\u00e4m\u00e4 voi lukita rahasi pitkiksi ajoiksi, vaikka pankki lupaa sinulle mahdollisuuden nostaa rahasi milloin tahansa.",
	"bank_runs_how_content_3": "Mit\u00e4 tapahtuu, jos yritat nostaa rahasi sen j\u00e4lkeen, kun pankki on jo lainannut ne tai sijoittanut ne?",
	"bank_runs_how_content_4": "Se ei ole ongelma, jos olet ainoa, joka yritt\u00e4\u00e4 nostaa. Pankki antaa sinulle jonkun muun rahat. Mutta mit\u00e4 tapahtuu, kun liian monet yritt\u00e4v\u00e4t nostaa samanaikaisesti?",
	"bank_runs_how_content_5": "Monet ihmiset Yhdysvalloissa saivat tiet\u00e4\u00e4, kun Silicon Valley Bankissa tapahtui talletuspako maaliskuussa 2023.",
	"bank_runs_how_content_6": "Pankki oli sijoittanut asiakkaidensa rahat valtion joukkovelkakirjoihin, jotka olivat lukittuina jopa 30 vuodeksi. Pahempaa oli, ett\u00e4 noiden joukkovelkakirjojen arvo oli laskenut dramaattisesti, joten Silicon Valley Bank ei voinut vain myyd\u00e4 niit\u00e4 saadakseen tallettajiensa rahat. He olivat maksukykytt\u00f6mi\u00e4.",
	"bank_runs_how_content_7": "Kun useammat ihmiset saivat tiet\u00e4\u00e4, ongelma vain paheni. Lis\u00e4\u00e4 nostopyyntöjä tuli, mutta monia ei k\u00e4sitelty. Tuhannet yritykset tajusivat, etteiv\u00e4t pystyisi maksamaan ty\u00f6ntekij\u00f6idensä palkkoja pankin ep\u00e4onnistumisen vuoksi.",
	"bank_runs_how_content_8": "FDIC astui v\u00e4liin ja suostui korvaamaan tallettajat. Ongelma ratkaistu? Ei aivan...",
	"bank_runs_fdic": "SUOJAAKO FDIC-VAKUUTUS RAHOJANI?",
	"bank_runs_fdic_content_1": "FDIC-vakuutus on suunniteltu suojaamaan pankkitallettajia pankin ep\u00e4onnistuessa. Talletukset on vakuutettu 250 000 dollariin asti tallettajaa kohden. Kuulostaa hyv\u00e4lt\u00e4, eik\u00f6?",
	"bank_runs_fdic_content_2": "Ei aivan. Jos pankki ep\u00e4onnistuu, mist\u00e4 FDIC saa rahat? Heill\u00e4 on vakuutusrahasto, jossa on 125 miljardia dollaria.",
	"bank_runs_fdic_content_3": "Se kuulostaa suurelta summalta, kunnes vertaat sit\u00e4 vakuuttamiensa talletusten m\u00e4\u00e4r\u00e4\u00e4n: l\u00e4hes 10 biljoonaa eli 10 000 miljardia dollaria.",
	"bank_runs_fdic_content_4": "FDIC n\u00e4ytt\u00e4\u00e4 jopa verkkosivuillaan, ett\u00e4 heill\u00e4 on vakuutusrahastossaan vain hieman yli 1 % talletuksista.",
	"bank_runs_fdic_content_5": "Jos pankin ep\u00e4onnistuminen ylitt\u00e4isi FDIC:n vakuutusrahaston, Yhdysvaltain hallitus todenn\u00e4k\u00f6isesti (mutta ei taattua) painavisi rahaa korvatakseen tallettajat.",
	"bank_runs_fdic_content_6": "Mutta rahan painaminen aiheuttaa inflaatiota, joten se ei ole hyv\u00e4 ratkaisu.",
	"bank_runs_safe": "ONKO PANKKEJA, JOTKA EIV\u00c4T K\u00c4YT\u00c4 OSITTAISVARANTOA?",
	"bank_runs_safe_content_1": "Jotkut pankit ovat yrittäneet olla 'turvallisia pankkeja', jotka eiv\u00e4t lainaa tai sijoita tallettajien varoja.",
	"bank_runs_safe_content_2": "Vaikka n\u00e4ill\u00e4 turvallisilla pankeilla ei olisi lainkaan tallettajapaon riskiä, niiden hakemukset on hyl\u00e4tty Federal Reserven toimesta.",
	"bank_runs_safe_content_3": "Koska niiden toiminta on estetty, t\u00e4n\u00e4\u00e4n ei ole pankkeja, jotka eiv\u00e4t k\u00e4ytt\u00e4isi osittaisvarantoa.",
	"bank_runs_safe_content_4": "Onneksi on tapa kielt\u00e4yty\u00e4 osittaisvarantoj\u00e4rjestelm\u00e4st\u00e4 olemalla oma pankkisi. Ei, emme puhu k\u00e4teisen piilottamisesta patjan alle.",
	"bank_runs_safe_content_5": "K\u00e4teiseen s\u00e4\u00e4st\u00e4minen on silti altis inflaatiolle.",
	"bank_runs_safe_content_6": "Puhumme Bitcoinista: uudesta rahoitusj\u00e4rjestelm\u00e4st\u00e4, joka mahdollistaa oman pankkisi olemisen.",
	"bank_runs_protect": "VOIKO BITCOIN SUOJATA MINUA TALLETTAJAPAOILTA?",
	"bank_runs_protect_content_1": "Kyll\u00e4, Bitcoin on t\u00e4yden reservin rahoitusj\u00e4rjestelm\u00e4.",
	"bank_runs_protect_content_2": "Tallettajapaot ovat mahdottomia Bitcoinissa, kunhan nostat Bitcoinisi omaan lompakkoosi. \u00c4l\u00e4 j\u00e4t\u00e4 bitcoinejasi p\u00f6rssiin tai kuten Bitcoin-ETF:iin.",
	"bank_runs_protect_content_3": "Tutustu yksinkertaiseen Bitcoin-lompakko-oppaaseemme oppiaksesi, miten nostat omaan lompakkoosi.",
	"bank_runs_protect_content_4": "Bitcoinilla voit vihdoin hallita rahojasi."
});

// wallets
writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Bitcoin-lompakko-opas",
	"wallets_description": "On monia erilaisia Bitcoin-lompakoita, jotka eroavat toisistaan t\u00e4rkeill\u00e4 tavoilla. Voit m\u00e4\u00e4ritt\u00e4\u00e4, onko lompakko oikea sinulle, kysym\u00e4ll\u00e4 n\u00e4m\u00e4 yksinkertaiset kysymykset.",
	"wallets_header": "MITEN S\u00c4ILYTT\u00c4\u00c4 BITCOINISI TURVALLISESTI",
	"wallets_s1_c1": "Bitcoin-lompakot ovat yhteentoimivia, joten voit l\u00e4hett\u00e4\u00e4 Bitcoinia kenelle tahansa riippumatta siit\u00e4, mit\u00e4 lompakkoa he k\u00e4ytt\u00e4v\u00e4t.",
	"wallets_s1_c2": "On monia erilaisia Bitcoin-lompakoita, jotka eroavat toisistaan t\u00e4rkeill\u00e4 tavoilla. Voit m\u00e4\u00e4ritt\u00e4\u00e4, onko lompakko oikea sinulle, kysym\u00e4ll\u00e4 n\u00e4m\u00e4 yksinkertaiset kysymykset:",
	"wallets_question_1": "ONKO SE OMAHALLINTAINEN LOMPAKKO?",
	"wallets_s2_c1": "Yksi Bitcoinin innovaatioista on kyky s\u00e4ilytt\u00e4\u00e4 sit\u00e4 ilman s\u00e4ilytt\u00e4j\u00e4\u00e4, kuten pankkia.",
	"wallets_s2_c2": "Jos pid\u00e4t bitcoinia p\u00f6rssissä tai ETF:ssä, menet\u00e4t Bitcoinin vapaushyödyt.",
	"wallets_s2_c3": "Omahallintaiset lompakot avaavat Bitcoinin t\u00e4yden voiman: vapausrahan.",
	"wallets_s2_c4": "Omahallintaisella lompakolla olet ainoa, jolla on kyky k\u00e4ytt\u00e4\u00e4 tai siirt\u00e4\u00e4 rahojasi. Kukaan ei voi est\u00e4\u00e4 sinua l\u00e4hett\u00e4m\u00e4st\u00e4 tai vastaanottamasta rahojasi.",
	"wallets_s2_c5": "Omahallintaisia lompakoita kutsutaan my\u00f6s ei-s\u00e4ilytyslompakoiksi.",
	"wallets_s3_c1": "S\u00e4ilytyslompakot ovat lompakoita, joissa et hallitse rahojasi.",
	"wallets_s3_c2": "N\u00e4m\u00e4 lompakot ovat enemm\u00e4n pankkij\u00e4rjestelm\u00e4n kaltaisia, joissa sinun on luotettava kolmanteen osapuoleen p\u00e4\u00e4st\u00e4ksesi rahoihisi. Jos Bitcoinisi on p\u00f6rssissä, k\u00e4yt\u00e4t s\u00e4ilytyslompakkoa.",
	"wallets_s3_c3": "Jos ostit Bitcoin-ETF:n, k\u00e4yt\u00e4t s\u00e4ilytyslompakkoa, joka ei salli nostoa omaan hallintaan.",
	"wallets_s3_c4": "S\u00e4ilytyslompakot voivat vaikuttaa k\u00e4tevilta, mutta s\u00e4ilytt\u00e4j\u00e4ll\u00e4 on tekninen kyky varastaa kaikki k\u00e4ytt\u00e4jien varat milloin tahansa.",
	"wallets_s3_c5": "Ei sinun avaimesi, ei sinun kolikkosi!",
	"wallets_question_2": "ONKO SE KUUMA VAI KYLM\u00c4?",
	"wallets_s4_c1": "Kylm\u00e4t lompakot s\u00e4ilytt\u00e4v\u00e4t Bitcoinisi avaimet tavalla, joka ei koskaan altista niit\u00e4 internetille.",
	"wallets_s4_c2": "T\u00e4m\u00e4 rajoittaa merkitt\u00e4v\u00e4sti hy\u00f6kk\u00e4ysvektoreita, ja se sopii parhaiten suurille Bitcoin-summille, joita ei tarvitse siirt\u00e4\u00e4 usein.",
	"wallets_s4_c3": "Voit ajatella kylm\u00e4\u00e4 lompakkoa pitk\u00e4aikaisena s\u00e4\u00e4st\u00f6tilin\u00e4.",
	"wallets_s5_c1": "Kuumat lompakot s\u00e4ilytt\u00e4v\u00e4t Bitcoinisi avaimet internetiin yhdistetyss\u00e4 laitteessa, kuten puhelimessasi.",
	"wallets_s5_c2": "Kuumia lompakoita pidet\u00e4\u00e4n yleisesti turvallisina, mutta niiss\u00e4 voi olla enemm\u00e4n tietoturvahaavoittuvuuksia kuin kylmiss\u00e4 lompakoissa.",
	"wallets_s5_c3": "Voit ajatella kuumaa lompakkoa kuten fyysist\u00e4 lompakkoa. Et s\u00e4ilytt\u00e4isi koko s\u00e4\u00e4st\u00f6j\u00e4si lompakossasi, mutta pit\u00e4isit siell\u00e4 k\u00e4ytt\u00f6rahaa.",
	"wallets_s5_c4": "Kuumat lompakot helpottavat huomattavasti Bitcoinin k\u00e4ytt\u00e4mist\u00e4 ilman, ett\u00e4 tarvitsee kaivaa koko s\u00e4\u00e4st\u00f6j\u00e4 kylm\u00e4st\u00e4 varastosta.",
	"wallets_question_3": "MITEN VARMUUSKOPIOIN PALAUTUSLAUSEENI?",
	"wallets_s6_c1": "Kun perustat Bitcoin-lompakon, laitteesi luo palautuslauseen. T\u00e4m\u00e4 palautuslause (kutsutaan my\u00f6s siemenlauseeksi) sis\u00e4lt\u00e4\u00e4 12 tai 24 sanaa.",
	"wallets_s6_c2": "Jos menet\u00e4t p\u00e4\u00e4syn lompakkoosi tai laitteesi lakkaa toimimasta, voit sy\u00f6tt\u00e4\u00e4 t\u00e4m\u00e4n palautuslauseen uuteen lompakkoon p\u00e4\u00e4st\u00e4ksesi Bitcoineihisi k\u00e4siksi.",
	"wallets_s6_c3": "Useimpiin lompakoihin kuuluu paperi palautuslauseen kirjoittamiseen, mutta monet preferoivat varmuuskopioida lauseen ter\u00e4kselle. T\u00e4m\u00e4 tekee palautuslauseen menett\u00e4misest\u00e4 ep\u00e4todenn\u00e4k\u00f6isemp\u00e4\u00e4 luonnonkatastrofin kuten tulipalon tai tulvan yhteydess\u00e4.",
	"wallets_s6_c4": "Jameson Lopp on testannut 70 ter\u00e4svarmuuskopiopakettia auttaaksesi sinua valitsemaan sinulle sopivan.",
	"wallets_s6_c5": "Katso Jamesonin metallinen Bitcoin-varmuuskopio-opas t\u00e4\u00e4lt\u00e4.",
	"wallets_s6_c6": "Tai jatka vieritt\u00e4mist\u00e4 tutkiaksesi Bitcoin-lompakkovaihtoehtoja.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN", "wallets_coldcard_mk5": "COLDCARD MK5", "wallets_coldcard_q": "COLDCARD Q", "wallets_blockstream_jade": "BLOCKSTREAM JADE", "wallets_foundation_passport": "FOUNDATION PASSPORT", "wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Etsitkö Lightning-lompakko-opastamme?",
	"wallets_starter_wallet": "Loistava aloituslompakko", "wallets_mobile_app": "Mobiilisovellus", "wallets_2fa_support": "2FA-tuki", "wallets_air_gap_mode": "Ilmaraon tila", "wallets_air_gap_camera": "Ilmaraon tila + kamera", "wallets_bitcoin_only": "Vain Bitcoin", "wallets_security_features": "Paljon tietoturvaominaisuuksia", "wallets_free": "100 % ilmainen",
	"wallets_coldcard_mk5_costs": "Hinta 189 $", "wallets_coldcard_q_costs": "Hinta 289 $", "wallets_blockstream_jade_costs": "Hinta 79 $", "wallets_foundation_passport_costs": "Hinta 199 $", "wallets_seedsigner_costs": "Osien hinta 50 $",
	"wallets_very_affordable": "Erittäin edullinen", "wallets_pair_with_phone": "Yhdist\u00e4 puhelimeesi", "wallets_battery": "Ladattava akku", "wallets_build_your_own": "Rakenna oma", "wallets_qwerty_keyboard": "T\u00e4ysi QWERTY-n\u00e4pp\u00e4imist\u00f6", "wallets_qr_scanner": "QR-koodiskanneri"
});

// buy
writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Miten ostaa Bitcoinia \u2013 Vaiheittainen opas",
	"buy_header": "MITEN OSTAA BITCOINIA",
	"buy_intro_c1": "Bitcoinin ostaminen ensimm\u00e4ist\u00e4 kertaa voi tuntua ylivoimaiselta, mutta se on itse asiassa melko yksinkertaista, kun jaat sen vaiheisiin.",
	"buy_intro_c2": "T\u00e4m\u00e4 opas opastaa sinut Bitcoinin ostamisen ja sen turvallisen s\u00e4ilytt\u00e4misen omassa lompakossasi.",
	"buy_step_1_header": "VAIHE 1: VALITSE MAASI",
	"buy_step_1_description": "Eri maissa on erilaisia Bitcoin-ostovaihtoehtoja. Valitse maasi n\u00e4hd\u00e4ksesi parhaat vaihtoehdot sinulle.",
	"buy_search_countries": "Etsi maasi",
	"buy_country_united_states": "Yhdysvallat", "buy_country_australia": "Australia", "buy_country_austria": "It\u00e4valta", "buy_country_belgium": "Belgia", "buy_country_brazil": "Brasilia", "buy_country_canada": "Kanada", "buy_country_france": "Ranska", "buy_country_germany": "Saksa", "buy_country_ireland": "Irlanti", "buy_country_italy": "Italia", "buy_country_netherlands": "Alankomaat", "buy_country_new_zealand": "Uusi-Seelanti", "buy_country_spain": "Espanja", "buy_country_united_kingdom": "Iso-Britannia",
	"buy_country_argentina": "Argentiina", "buy_country_chile": "Chile", "buy_country_colombia": "Kolumbia", "buy_country_costa_rica": "Costa Rica", "buy_country_czech_republic": "Tsekin tasavalta", "buy_country_denmark": "Tanska", "buy_country_el_salvador": "El Salvador", "buy_country_estonia": "Viro", "buy_country_finland": "Suomi", "buy_country_greece": "Kreikka", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hongkong", "buy_country_hungary": "Unkari", "buy_country_iceland": "Islanti", "buy_country_india": "Intia", "buy_country_israel": "Israel", "buy_country_japan": "Japani", "buy_country_latvia": "Latvia", "buy_country_lithuania": "Liettua", "buy_country_luxembourg": "Luxemburg", "buy_country_malta": "Malta", "buy_country_mexico": "Meksiko", "buy_country_norway": "Norja", "buy_country_panama": "Panama", "buy_country_poland": "Puola", "buy_country_portugal": "Portugali", "buy_country_romania": "Romania", "buy_country_singapore": "Singapore", "buy_country_slovakia": "Slovakia", "buy_country_slovenia": "Slovenia", "buy_country_south_africa": "Etel\u00e4-Afrikka", "buy_country_south_korea": "Etel\u00e4-Korea", "buy_country_sweden": "Ruotsi", "buy_country_switzerland": "Sveitsi", "buy_country_thailand": "Thaimaa", "buy_country_turkey": "Turkki", "buy_country_ukraine": "Ukraina", "buy_country_uruguay": "Uruguay",
	"buy_step_2_header": "VAIHE 2: VALITSE MAKSUTAPASI",
	"buy_step_2_description": "On kaksi p\u00e4\u00e4tapaa ostaa Bitcoinia: pankkisiirrolla tai k\u00e4teisell\u00e4.",
	"buy_method_bank_transfer": "PANKKISIIRTO", "buy_method_bank_fast": "Nopea ja helppo", "buy_method_bank_less_private": "V\u00e4hemm\u00e4n yksityinen", "buy_method_bank_description": "Pankkisiirrot ovat yleisin tapa ostaa Bitcoinia. Ne ovat nopeita, k\u00e4tevi\u00e4 ja niiss\u00e4 on yleens\u00e4 alhaisemmat maksut.", "buy_method_choose_bank": "Valitse pankkisiirto",
	"buy_method_cash": "K\u00c4TEINEN", "buy_method_cash_private": "Yksityisempi", "buy_method_cash_limited": "Rajoitetut vaihtoehdot", "buy_method_cash_description": "K\u00e4teisostot tarjoavat enemm\u00e4n yksityisyytt\u00e4, mutta vaihtoehtoja on v\u00e4hemm\u00e4n ja ne voivat vaatia henkil\u00f6kohtaista tapaamista tai Bitcoin-automaatin k\u00e4ytt\u00f6\u00e4.", "buy_method_choose_cash": "Valitse k\u00e4teinen",
	"buy_step_3_header": "VAIHE 3: OSTOVAIHTOEHDOT",
	"buy_step_3_description": "T\u00e4ss\u00e4 ovat parhaat Bitcoin-ostovaihtoehdot maallesi ja maksutavallesi:",
	"buy_platform_recommended": "SUOSITELTU",
	"buy_platform_strike_description": "Strike on nopein ja helpoin tapa ostaa Bitcoinia alhaisilla maksuilla ja v\u00e4litt\u00f6m\u00e4ll\u00e4 Lightning-verkon tuella.",
	"buy_platform_swan_description": "Swan Bitcoin erikoistuu pelk\u00e4st\u00e4\u00e4n Bitcoin-palveluihin, joissa on kustannusten tasausostostrategia ja koulutusresursseja.",
	"buy_platform_river_description": "River tarjoaa Bitcoinin ostoa, louhintaa ja s\u00e4ilytyspalveluita painottaen koulutusta ja turvallisuutta.",
	"buy_platform_coinsquare_description": "Coinsquare on kanadalainen Bitcoin-p\u00f6rssi, jolla on vahva s\u00e4\u00e4ntelyyn sitoutuminen ja asiakastuki.",
	"buy_platform_kraken_description": "Kraken on vakiintunut Bitcoin-p\u00f6rssi, jossa on edistyneit\u00e4 kaupank\u00e4yntiominaisuuksia ja vahva tietoturva.",
	"buy_platform_atm_description": "Bitcoin-automaatit mahdollistavat Bitcoinin ostamisen k\u00e4teisell\u00e4 v\u00e4litt\u00f6m\u00e4sti. Etsi l\u00e4hisin Coin ATM Radarilla.",
	"buy_platform_bisq_description": "Bisq on hajautettu vertaisverkop\u00f6rssi, joka mahdollistaa yksityisen Bitcoin-kaupank\u00e4ynnin ilman KYC:t\u00e4.",
	"buy_platform_feature_instant": "V\u00e4litt\u00f6m\u00e4t ostot", "buy_platform_feature_low_fees": "Alhaiset maksut", "buy_platform_feature_lightning": "Lightning-verkko", "buy_platform_feature_dca": "Kustannusten tasausostostrategia", "buy_platform_feature_education": "Koulutusresurssit", "buy_platform_feature_withdrawal": "Helppo nosto", "buy_platform_feature_mining": "Bitcoin-louhinta", "buy_platform_feature_custody": "S\u00e4ilytyspalvelut", "buy_platform_feature_canadian": "Kanada-keskeinen", "buy_platform_feature_regulated": "S\u00e4\u00e4nnelty p\u00f6rssi", "buy_platform_feature_support": "Asiakastuki", "buy_platform_feature_established": "Vakiintunut alusta", "buy_platform_feature_security": "Vahva tietoturva", "buy_platform_feature_advanced": "Edistyneet ominaisuudet", "buy_platform_feature_cash": "K\u00e4teisostot", "buy_platform_feature_anonymous": "Anonyymimp\u00e4\u00e4", "buy_platform_feature_p2p": "Vertaisverkko", "buy_platform_feature_private": "Yksityinen kaupank\u00e4ynti", "buy_platform_feature_decentralized": "Hajautettu",
	"buy_platform_relai_description": "Relai on sveitsiläinen Bitcoin-only-sovellus, jossa on omahallintainen lompakko, automaattiset sijoitussuunnitelmat ja alhaiset maksut eurooppalaisille käyttäjille.",
	"buy_platform_feature_bitcoin_only": "Vain Bitcoin", "buy_platform_feature_self_custody": "Omahallintainen lompakko", "buy_platform_feature_auto_invest": "Automaattiset sijoitussuunnitelmat", "buy_platform_feature_european": "Eurooppa-keskeinen",
	"buy_step_4_header": "VAIHE 4: S\u00c4ILYT\u00c4 BITCOINISI TURVALLISESTI",
	"buy_step_4_c1": "Bitcoinin ostamisen j\u00e4lkeen t\u00e4rkein askel on siirt\u00e4\u00e4 se omaan lompakkoosi, jossa hallitset yksityisi\u00e4 avaimia.",
	"buy_step_4_c2": "Bitcoinin j\u00e4tt\u00e4minen p\u00f6rssiin on riskialtista, koska et itse asiassa omista Bitcoinia \u2013 p\u00f6rssi omistaa.",
	"buy_step_4_c3": "Kun hallitset omia yksityisi\u00e4 avaimiasi, sinulla on todellinen omistajuus Bitcoiniisi eik\u00e4 kukaan voi ottaa sit\u00e4 sinulta.",
	"buy_step_4_c4": "Opi valitsemaan oikea Bitcoin-lompakko tarpeisiisi:",
	"buy_cta_wallets": "Katso Bitcoin-lompakko-oppaamme"
});

// lightning
writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Bitcoin Lightning -lompakko-opas",
	"lightning_description": "Lightning-lompakot mahdollistavat Bitcoinin l\u00e4hett\u00e4misen nopeasti ja edullisesti s\u00e4ilytt\u00e4en samalla henkil\u00f6kohtaisen suvereniteettisi.",
	"lightning_header": "LIGHTNING-LOMPAKKO-OPAS",
	"lightning_s1_c1": "Lightning mahdollistaa Bitcoin-maksujen l\u00e4hett\u00e4misen nopeasti ja edullisesti.",
	"lightning_s1_c2": "On t\u00e4rke\u00e4\u00e4 tiet\u00e4\u00e4, ett\u00e4 Lightningin k\u00e4ytt\u00f6\u00f6n liittyy kompromisseja. Vastineeksi nopeammista ja halvemmista Bitcoin-maksuista uhraat usein hieman turvallisuutta.",
	"lightning_s1_c3": "Yleisesti ottaen Lightningia tulisi k\u00e4ytt\u00e4\u00e4 vain pienill\u00e4 bitcoin-summilla. Suuria summia tulisi s\u00e4ilytt\u00e4\u00e4 vain laitteistolompakossa.",
	"lightning_s1_c4": "Tutustu laitteistolompakko-oppaaseemme saadaksesi lis\u00e4tietoja.",
	"lightning_s1_c5": "Kaikki Lightning-lompakot eiv\u00e4t ole samanlaisia. Voit m\u00e4\u00e4ritt\u00e4\u00e4, mill\u00e4 lompakolla on oikea kompromissitasapaino sinulle, kysym\u00e4ll\u00e4 yhden yksinkertaisen kysymyksen:",
	"lightning_question_1": "MIK\u00c4 KOMPROMISSITASAPAINO ON OIKEA MINULLE?",
	"lightning_s2_c1": "Yksi Bitcoinin innovaatioista on kyky s\u00e4ilytt\u00e4\u00e4 sit\u00e4 ilman s\u00e4ilytt\u00e4j\u00e4\u00e4, kuten pankkia. Omahallintaiset lompakot avaavat Bitcoinin t\u00e4yden voiman.",
	"lightning_s2_c2": "Omahallintaisella lompakolla olet ainoa, jolla on kyky k\u00e4ytt\u00e4\u00e4 tai siirt\u00e4\u00e4 rahojasi. Kukaan ei voi est\u00e4\u00e4, sensuroida tai varastaa sinulta.",
	"lightning_s2_c3": "Suvereenein tapa k\u00e4ytt\u00e4\u00e4 Lightningia on ajaa omaa solmua.",
	"lightning_s2_c4": "T\u00e4m\u00e4 opas keskittyy yksinkertaisiin Lightning-lompakoihin, jotka eiv\u00e4t vaadi omaa solmua.",
	"lightning_s2_c5": "On t\u00e4rke\u00e4\u00e4 tiet\u00e4\u00e4, ett\u00e4 k\u00e4ytt\u00e4ess\u00e4si ei-s\u00e4ilytyksellista Lightning-lompakkoa luotat silti lompakon tekij\u00e4\u00e4n, ettei h\u00e4n julkaise haitallista sovelluspäivitystä.",
	"lightning_s3_c1": "S\u00e4ilytyslompakot ovat lompakoita, joissa et hallitse rahojasi.",
	"lightning_s3_c2": "N\u00e4m\u00e4 lompakot ovat enemm\u00e4n pankkij\u00e4rjestelm\u00e4n kaltaisia, joissa sinun on luotettava kolmanteen osapuoleen.",
	"lightning_s3_c3": "S\u00e4ilytyslompakot voivat vaikuttaa k\u00e4tevilta, mutta s\u00e4ilytt\u00e4j\u00e4ll\u00e4 on tekninen kyky varastaa kaikki k\u00e4ytt\u00e4jien varat.",
	"lightning_s3_c4": "Jotkut suosivat s\u00e4ilytyksellisia Lightning-lompakoita pienille bitcoin-summille niiden helppok\u00e4ytt\u00f6isyyden vuoksi. Muista: ei sinun avaimesi, ei sinun kolikkosi!",
	"lightning_question_2": "VALITSE LOMPAKKOSI",
	"lightning_s4_c1": "T\u00e4m\u00e4n kaiken huomioon ottaen voit nyt valita Lightning-lompakon, jossa on sinulle oikea kompromissitasapaino.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Paljon ominaisuuksia", "lightning_mobile_app": "Mobiilisovellus", "lightning_free": "100 % ilmainen", "lightning_merchants": "Loistava kauppiaille", "lightning_starter": "Loistava aloituslompakko", "lightning_browser": "Selainpohjainen", "lightning_custodial": "T\u00e4ysin s\u00e4ilytyksellinen lompakko",
	"lightning_cta_hardware": "Etsitkö Bitcoin-laitteistolompakko-opastamme?"
});

// stickers
writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Ilmaiset Bitcoin-tarrat bitcoin.rocksilta",
	"stickers_description": "Laita Bitcoin-tarra julkiselle paikalle oranssipilleröidäksesi ymp\u00e4rill\u00e4si olevat.",
	"stickers_header": "ILMAISET BITCOIN-TARRAT",
	"stickers_choose_header": "VALITSE TARRAPAKETTISI",
	"stickers_choose_c1": "Teht\u00e4v\u00e4n\u00e4mme on auttaa sinua oranssipilleröim\u00e4\u00e4n enemm\u00e4n ihmisi\u00e4 laittamalla Bitcoin-tarroja julkisille paikoille. Kaikissa tarroissa on QR-koodit, jotka linkitt\u00e4v\u00e4t opetussivuille aiheesta",
	"stickers_choose_c2": "Bitcoin", "stickers_choose_c3": "inflaatio", "stickers_choose_c4": "Valitse tarrapakettisi alla",
	"stickers_text_pack": "TEKSTIPAKETTI", "stickers_signs_pack": "KYLTTIPAKETTI",
	"stickers_instructions_1": "Sy\u00f6t\u00e4 postiosoitteesi, niin l\u00e4het\u00e4mme sinulle ilmaisen Bitcoin-tarrapaketin postissa! Tarrasi l\u00e4hetet\u00e4\u00e4n tavallisessa valkoisessa kirjekuoressa.",
	"stickers_instructions_2": "Osoitetiedot poistetaan ilmaisten tarrojen l\u00e4hett\u00e4misen j\u00e4lkeen.",
	"stickers_share_header": "JAA TARRAPAIKKASI",
	"stickers_share_c1": "Jaa tarrapaikkasi meille Nostrissa ja katso, minne muut laittavat tarrojaan.",
	"stickers_btn_share_on_nostr": "JAA NOSTRISSA", "stickers_btn_what_is_nostr": "MIK\u00c4 ON NOSTR?",
	"stickers_flyers_link_before": "Samalla tulosta ja kiinnit\u00e4 omat ", "stickers_flyers_link_text": "Bitcoin-lentolehtisesi", "stickers_flyers_link_after": " auttaaksesi oranssipilleröim\u00e4\u00e4n viel\u00e4 enemm\u00e4n ihmisi\u00e4.",
	"stickers_country_global_print": "Maailmanlaajuinen \u2014 Tulostan omat tarrani", "stickers_country_global_order": "Maailmanlaajuinen \u2014 Tilaa suuri er\u00e4",
	"placeholder_name_optional": "Nimi (valinnainen)", "placeholder_address_line_1": "Osoiterivi 1", "placeholder_address_line_2": "Osoiterivi 2 (valinnainen)", "placeholder_city": "Kaupunki", "placeholder_state": "Osavaltio", "placeholder_province": "Maakunta", "placeholder_zip_code": "Postinumero", "placeholder_postal_code": "Postinumero", "placeholder_language": "Kieli", "placeholder_which_stickers": "Mitk\u00e4 tarrat?", "placeholder_email_optional": "Sy\u00f6t\u00e4 s\u00e4hk\u00f6postisi saadaksesi ilmoituksen (valinnainen)"
});

// postcards
writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Ilmaiset Bitcoin-postikortit bitcoin.rocksilta",
	"postcards_description": "Hanki ilmainen Bitcoin-postikorttipaketti ja jaa Bitcoin tuntemallesi henkil\u00f6lle.",
	"postcards_header": "POSTIKORTTIOHJELMAN SULJETTU",
	"postcards_program_closed_message": "Ilmainen Bitcoin-postikorttiohjelmamme on p\u00e4\u00e4ttynyt. Kiitos kaikille, jotka osallistuivat Bitcoin-koulutuksen levitt\u00e4miseen postin kautta!",
	"postcards_sticker_alternative_header": "HANKI SEN SIJAAN ILMAISIA BITCOIN-TARROJA",
	"postcards_sticker_alternative_message": "Jatka Bitcoin-tietoisuuden levittämistä ilmaisella tarraohjelmallamme! Bitcoin-tarramme sopivat t\u00e4ydellisesti julkisille paikoille ja niiss\u00e4 on QR-koodit, jotka linkitt\u00e4v\u00e4t opetussis\u00e4lt\u00f6\u00f6n.",
	"postcards_sticker_cta": "HANKI ILMAISIA TARROJA",
	"postcards_step_2": "MILT\u00c4 POSTIKORTIT N\u00c4YTTIV\u00c4T",
	"postcards_instructions_4": "Teimme n\u00e4m\u00e4 postikortit helpottaaksemme Bitcoinin esittelemist\u00e4 tuntemallesi henkil\u00f6lle! Lis\u00e4\u00e4 vain osoite ja postimerkki ja pudota postikorttisi postilaatikkoon.",
	"postcards_instructions_5": "Teht\u00e4v\u00e4n\u00e4mme on nopeuttaa Bitcoinin k\u00e4ytt\u00f6\u00f6nottoa. Voit auttaa hankkimalla ilmaisia tarroja ja laittamalla niit\u00e4 julkisille paikoille!",
	"postcards_instructions_6": "Tunnemme kaikki muutamia ihmisi\u00e4, jotka hy\u00f6tyisiv\u00e4t Bitcoinista oppimisesta. Jaa Bitcoin-tarroja heille t\u00e4n\u00e4\u00e4n!"
});

// signs
writeFile(`signs_${lang}.json`, {
	"signs_description": "Auta meit\u00e4 laittamaan n\u00e4it\u00e4 Bitcoin-kylttej\u00e4 ymp\u00e4ri Amerikkaa!",
	"signs_title": "Ilmaiset Bitcoin-kyltit bitcoin.rocksilta",
	"signs_choose_header": "KIITOS, ETT\u00c4 AUTOIT MEIT\u00c4 LAITTAMAAN N\u00c4IT\u00c4 BITCOIN-KYLTTEJ\u00c4 YMP\u00c4RI AMERIKKAA!",
	"signs_choose_c1": "Meilt\u00e4 ovat nyt kyltit kokonaan loppuneet! Teht\u00e4v\u00e4n\u00e4mme on nopeuttaa Bitcoinin k\u00e4ytt\u00f6\u00f6nottoa koulutuksen avulla.",
	"signs_choose_c2": "Monet teist\u00e4 auttoivat laittamalla n\u00e4it\u00e4 ilmaisia Bitcoin-kylttej\u00e4 julkisille paikoille. Kaikissa kyltiss\u00e4mme on QR-koodit, jotka linkitt\u00e4v\u00e4t opetussivulle aiheesta",
	"signs_choose_c3": "inflaatio",
	"signs_choose_c4": "Mahtavan yhteis\u00f6mme ansiosta tavoitimme tuhansia ihmisi\u00e4 ja autoimme heit\u00e4 ottamaan ensimm\u00e4iset askeleensa Bitcoin-kaninkoloon.",
	"signs_share_header": "JAA KYLTTIEN SIJOITUSPAIKAT",
	"signs_share_c1": "Jaa kuva kylttisi sijoituspaikasta meille Nostrissa ja katso, minne muut laittavat kyltej\u00e4\u00e4n.",
	"signs_btn_share_on_nostr": "JAA NOSTRISSA", "signs_btn_what_is_nostr": "MIK\u00c4 ON NOSTR?",
	"signs_instructions_1": "Sy\u00f6t\u00e4 postiosoitteesi, niin l\u00e4het\u00e4mme sinulle laatikon, jossa on 10 Bitcoin-kylttiä postissa!",
	"signs_instructions_2": "Osoitetiedot poistetaan ilmaisten kylttien l\u00e4hett\u00e4misen j\u00e4lkeen."
});

// flyers
writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Ilmaiset Bitcoin-lentolehtiset bitcoin.rocksilta",
	"flyers_description": "Tulosta Bitcoin-lentolehtinen kotona ja laita se julkiselle paikalle oranssipilleröidäksesi ymp\u00e4rill\u00e4si olevat.",
	"flyers_header_1": "TULOSTA JA KIINNIT\u00c4", "flyers_header_2": "BITCOIN-LENTOLEHTISI\u00c4",
	"flyers_intro_header": "MITEN TULOSTAA JA KIINNITTÄÄ BITCOIN-LENTOLEHTISET",
	"flyers_intro_c1": "Teht\u00e4v\u00e4n\u00e4mme on auttaa sinua oranssipilleröim\u00e4\u00e4n enemm\u00e4n ihmisi\u00e4 laittamalla Bitcoin-lentolehtisi\u00e4 julkisille paikoille. T\u00e4ss\u00e4 lentolehtisess\u00e4 on QR-koodi, joka linkitt\u00e4\u00e4",
	"flyers_intro_c2": "opetukselliselle Bitcoin-verkkosivullemme.",
	"flyers_intro_c3": "inflaatio",
	"flyers_intro_c4": "Tulosta t\u00e4m\u00e4 lentolehtinen kotona tai painotalossa. Kiinnit\u00e4 se sitten ilmoitustauluille, puhelinpylv\u00e4isiin ja muihin julkisiin tiloihin, joissa ihmiset voivat n\u00e4hd\u00e4 sen ja oppia Bitcoinista.",
	"flyers_intro_c5": "Samalla tilaa paketti", "flyers_intro_c6": "ilmaisia Bitcoin-tarroja", "flyers_intro_c7": "auttaaksesi oranssipilleröim\u00e4\u00e4n viel\u00e4 enemm\u00e4n ihmisi\u00e4.",
	"flyers_btn_download": "LATAA LENTOLEHTINEN", "flyers_btn_print": "TULOSTA LENTOLEHTINEN",
	"flyers_share_header": "JAA LENTOLEHTISTEN SIJOITUSPAIKAT",
	"flyers_share_c1": "Jaa lentolehtisten sijoituspaikat meille Nostrissa ja katso, minne muut laittavat lentolehtisiään.",
	"flyers_btn_share_on_nostr": "JAA NOSTRISSA", "flyers_btn_what_is_nostr": "MIK\u00c4 ON NOSTR?"
});

// get-involved
writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Osallistu ja auta levittämään Bitcoinia",
	"get_involved_description": "Ilmaiset resurssimme helpottavat Bitcoinin levitt\u00e4mist\u00e4.",
	"get_involved_header": "OSALLISTU",
	"get_involved_header_2": "LEVIT\u00c4 BITCOINIA",
	"get_involved_intro_1": "Voi olla masentavaa el\u00e4\u00e4 maailman nykyisess\u00e4 tilassa.",
	"get_involved_intro_2": "Rahamme on rikki. Seurauksena yhteiskunnan perusosat ovat my\u00f6s rikki.",
	"get_involved_intro_3": "Jos olet jo Bitcoinin parissa, tunnet toivon tunteen, jonka Bitcoin voi tuoda. Toivon paremmasta tulevaisuudesta, jonka parempi raha mahdollistaa.",
	"get_involved_intro_4": "Mutta niin monet ymp\u00e4rill\u00e4si eiv\u00e4t tied\u00e4 Bitcoinista. He el\u00e4v\u00e4t samassa rikkin\u00e4isess\u00e4 maailmassa kuin sin\u00e4, mutta ilman toivon majakkaa auttamassa heit\u00e4 pimeyden l\u00e4pi.",
	"get_involved_intro_5": "Mutta voit auttaa muuttamaan t\u00e4m\u00e4n. Olemme tehneet useita ilmaisia resursseja helpottamaan Bitcoinin tuoman toivon levittämistä ymp\u00e4rill\u00e4si oleville.",
	"get_involved_sticker_header": "Laita tarra julkiselle paikalle",
	"get_involved_sticker_content_1": "Voit auttaa kouluttamaan ymp\u00e4rill\u00e4si olevia Bitcoinista ilman vuorovaikutusta kenenkään kanssa. Laita vain yksi ilmaisista Bitcoin-tarroistamme julkiselle paikalle.",
	"get_involved_sticker_content_2": "Sadat ihmiset skannaavat n\u00e4iden tarrojen QR-koodeja joka kuukausi. Inflaatiotarrat linkitt\u00e4v\u00e4t sivulle aiheesta",
	"get_involved_sticker_content_3": "Bitcoin ratkaisuna inflaatioon.",
	"get_involved_sticker_content_4": "Muut tarrat linkitt\u00e4v\u00e4t opetukselliselle etusivullemme, joka n\u00e4ytt\u00e4\u00e4 ihmisille, miten",
	"get_involved_sticker_content_5": "Bitcoin rakentaa parempaa maailmaa.",
	"get_involved_sticker_content_6": "Laittamalla n\u00e4it\u00e4 tarroja yhteisöösi paikkoihin, joissa ihmiset n\u00e4kev\u00e4t ne, voit auttaa heitä ottamaan ensimmäiset askeleensa Bitcoin-kaninkoloon.",
	"get_involved_request_a": "TILAA", "get_involved_sticker_pack": "TARRAPAKETTI",
	"get_involved_postcard_header": "L\u00e4het\u00e4 postikortti",
	"get_involved_postcard_content_1": "Voit auttaa levittämään Bitcoinin toivoa tuntemallesi henkil\u00f6lle l\u00e4hett\u00e4m\u00e4ll\u00e4 heille yhden ilmaisista postikorteistamme.",
	"get_involved_postcard_content_2": "Jokaisen postikortin takapuolella on vakuuttava teksti Bitcoinista sek\u00e4 QR-koodi lis\u00e4tietoihin.",
	"get_involved_postcard_content_3": "L\u00e4hett\u00e4m\u00e4ll\u00e4 jollekulle Bitcoin-postikortin voit auttaa heit\u00e4 n\u00e4kem\u00e4\u00e4n Bitcoinin uudessa valossa.",
	"get_involved_postcard_pack": "POSTIKORTTIPAKETTI",
	"get_involved_business_header": "Ohjaa yritys mukaan",
	"get_involved_business_content_1": "Haluatko auttaa rakentamaan Bitcoin-kiertotaloutta? Bitcoin-yrityspakettimme tekee helppoja l\u00e4hesty\u00e4 yrityst\u00e4 Bitcoin-maksujen hyv\u00e4ksymisest\u00e4.",
	"get_involved_business_content_2": "Jokainen yrityspaketti sis\u00e4lt\u00e4\u00e4 lentolehtisi\u00e4, jotka korostavat Bitcoin-maksujen hyv\u00e4ksymisen etuja. Jokainen lentolehtinen linkittää erilaisiin",
	"get_involved_business_content_3": "ilmaisiin Bitcoin-yritysresursseihin.",
	"get_involved_business_kit": "YRITYSPAKETTI"
});

console.log(`\nDone! Created 9 content files.`);
