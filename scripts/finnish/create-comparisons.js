/**
 * Creates Finnish (fi) translation files for all bitcoin-vs-* comparison pages
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

// bitcoin-vs-gold
writeFile(`bitcoin-vs-gold_${lang}.json`, {
	"bitcoin_vs_gold": "Bitcoin vs kulta",
	"gold_header": "ERO", "gold_header_2": "BITCOININ", "gold_header_3": "JA", "gold_header_4": "KULLAN V\u00c4LILL\u00c4",
	"gold_intro_1": "Kultaa on k\u00e4ytetty rahana tuhansia vuosia, ja monet pit\u00e4v\u00e4t sit\u00e4 taloudellisena turvasatamana.",
	"gold_intro_2": "Bitcoin on vuonna 2009 luotu digitaalinen raha, jota monet pit\u00e4v\u00e4t my\u00f6s taloudellisena turvasatamana.",
	"gold_intro_3": "Mutta miten fyysinen metalli kuten kulta eroaa digitaalisesta rahasta kuten Bitcoin? Katsotaan eroja kahden rahamuodon v\u00e4lill\u00e4: Bitcoin ja kulta.",
	"gold": "KULTA", "bitcoin": "BITCOIN",
	"gold_point_1": "On l\u00e4hetett\u00e4v\u00e4 fyysisesti", "gold_point_2": "Digitaaliset velkakirjat", "gold_point_3": "Tarjonta kasvaa vuosittain", "gold_point_4": "Joustava", "gold_point_5": "Fyysisesti keskitetty", "gold_point_6": "Vaikea todentaa", "gold_point_7": "Vaikea jakaa",
	"bitcoin_point_1": "Voidaan l\u00e4hett\u00e4\u00e4 internetin kautta", "bitcoin_point_2": "Digitaalisesti natiivi", "bitcoin_point_3": "Kiinte\u00e4 tarjonta 21M BTC", "bitcoin_point_4": "Joustamaton", "bitcoin_point_5": "Hajautettu", "bitcoin_point_6": "Helppo todentaa", "bitcoin_point_7": "Helppo jakaa",
	"point_1_summary_1": "Koska Bitcoin on digitaalinen, kuka tahansa internet-yhteyden omaava voi l\u00e4hett\u00e4\u00e4 sit\u00e4 l\u00e4hes v\u00e4litt\u00f6m\u00e4sti erittäin pienill\u00e4 maksuilla. Koska kulta on fyysist\u00e4, sit\u00e4 ei voi siirt\u00e4\u00e4 internetin kautta ja se on l\u00e4hetett\u00e4v\u00e4 fyysisesti omistajuuden siirtämiseksi.",
	"point_2_summary_1": "Bitcoin on digitaalisesti natiivi omaisuuser\u00e4, mik\u00e4 tarkoittaa, ett\u00e4 voit siirt\u00e4\u00e4 sen t\u00e4yden omistajuuden internetin kautta. Jotkut yritykset tarjoavat mahdollisuutta ostaa kultaa verkossa ilman fyysist\u00e4 kultaa, luottaen yrityksen s\u00e4ilytt\u00e4v\u00e4n kullan puolestasi. T\u00e4m\u00e4 on enemm\u00e4n digitaalinen velkakirja, koska omistat vain yrityksen lupauksen varsinaisen omaisuuserän sijaan.",
	"point_3_summary_1": "Bitcoinin kova katto on 21 miljoonaa BTC, joita tulee koskaan olemaan.",
	"point_3_summary_2": "Uutta kultaa kaivetaan maasta joka vuosi, mik\u00e4 aiheuttaa kokonaistarjonnan inflaatiota. Kullan kokonaistarjonnan arvioidaan kasvavan noin 1,6 % vuodessa, mik\u00e4 tarkoittaa, ett\u00e4 osuutesi piiraasta pienenee 1,6 % vuodessa.",
	"point_3_summary_3": "T\u00e4m\u00e4 on v\u00e4hemm\u00e4n kuin fiat-inflaatio, mutta silti inflaatiota.", "point_3_summary_4": "Bitcoinilla osuutesi piiraasta ei koskaan pienene.",
	"point_4_summary_1": "Kullalla on joustava tarjonta, mik\u00e4 tarkoittaa, ett\u00e4 kullan hinnan noustessa on suurempi kannustin louhia lis\u00e4\u00e4 kultaa. T\u00e4m\u00e4 usein painaa kullan hintaa alas uusien kaivosten avautuessa.",
	"point_4_summary_2": "Bitcoinilla, riippumatta hinnan noususta, et voi luoda enempää kuin 21M Bitcoinia.", "point_4_summary_3": "Bitcoin on ensimm\u00e4inen omaisuuser\u00e4, jolla on joustamaton suhde hinnan ja tarjonnan v\u00e4lill\u00e4.",
	"point_5_summary_1": "Bitcoin-verkko on hajautettu.", "point_5_summary_2": "Kymmenettuhannet itsen\u00e4iset solmut vahvistavat verkon s\u00e4\u00e4nn\u00f6t.", "point_5_summary_3": "K\u00e4ytt\u00e4j\u00e4t voivat ottaa Bitcoininsa omaan hallintaan lataamalla sovelluksen.", "point_5_summary_4": "Vaikka fyysisen kullan omahallinta on mahdollista, suurin osa fyysisest\u00e4 kullasta s\u00e4ilytet\u00e4\u00e4n suurissa holveissa, jotka ovat s\u00e4ilytt\u00e4jien omistamia, mik\u00e4 tekee siit\u00e4 fyysisesti keskitetty\u00e4.",
	"point_6_summary_1": "Bitcoinilla on uskomattoman helppoa todentaa, ett\u00e4 sinulla on aitoa Bitcoinia ottamalla kolikot omaan hallintaan ja ajamalla t\u00e4ysi solmu.", "point_6_summary_2": "Oma hallinnointi on yht\u00e4 helppoa kuin sovelluksen lataaminen.", "point_6_summary_3": "T\u00e4ysi solmu on yksinkertainen ohjelmisto, joka varmistaa, ett\u00e4 verkon s\u00e4\u00e4nt\u00f6j\u00e4 noudatetaan ja todentaa, ett\u00e4 sinulla on aitoa Bitcoinia.", "point_6_summary_4": "Fyysisen kullan todentaminen aidoksi voi olla erittäin vaikeaa. Vaikka todentaisit fyysisen kullan ulko-osan aidoksi, sis\u00e4puoli voi olla volframia tai muuta metallia. Ainoa tapa todella todentaa omistamasi fyysinen kulta on sulattaa se.",
	"point_7_summary_1": "Aivan kuten 1 dollarissa on 100 sentti\u00e4, 1 Bitcoinissa on 100 000 000 satsia. T\u00e4m\u00e4 mahdollistaa Bitcoinin k\u00e4yt\u00f6n kaikenkokoisiin ostoksiin, mukaan lukien mikromaksut, jotka ovat vain muutaman sentin.", "point_7_summary_2": "T\u00e4m\u00e4 tekee Bitcoinista hyv\u00e4n yrityksille.", "point_7_summary_3": "Koska fyysist\u00e4 kultaa on vaikea jakaa, sit\u00e4 ei voi helposti k\u00e4ytt\u00e4\u00e4 ostoksiin, varsinkaan pieniin ostoksiin."
});

// bitcoin-vs-stocks
writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin vs osakkeet",
	"stocks_header": "ERO", "stocks_header_2": "BITCOININ", "stocks_header_3": "JA", "stocks_header_4": "OSAKKEIDEN V\u00c4LILL\u00c4",
	"stocks_intro_1": "Osakkeet ovat olleet suosittu sijoitusmuoto vuosikymmeni\u00e4, ja ne edustavat omistusosuuksia yrityksiss\u00e4.",
	"stocks_intro_2": "Bitcoin on vuonna 2009 luotu digitaalinen raha, joka toimii itsen\u00e4isesti mist\u00e4\u00e4n yrityksest\u00e4 tai hallituksesta.",
	"stocks_intro_3": "Mutta miten yrityksen osakkeiden omistaminen eroaa digitaalisen rahan kuten Bitcoinin omistamisesta? Katsotaan eroja: Bitcoin ja osakkeet.",
	"stocks": "OSAKKEET", "bitcoin": "BITCOIN",
	"stocks_point_1": "Osuuksia yrityksest\u00e4", "stocks_point_2": "Laimentuva tarjonta", "stocks_point_3": "Avainhenk\u00f6riski", "stocks_point_4": "P/E-suhteen arvostukset", "stocks_point_5": "Vain markkina-aikoina", "stocks_point_6": "Vastapuoliriski", "stocks_point_7": "Vaihteleva inflaatiosuoja",
	"bitcoin_point_1": "Suora omistus", "bitcoin_point_2": "Kiinte\u00e4 tarjonta 21M BTC", "bitcoin_point_3": "Hajautettu verkko", "bitcoin_point_4": "Markkinavetoinen hinta", "bitcoin_point_5": "24/7 kaupank\u00e4ynti", "bitcoin_point_6": "Oma hallinnointi mahdollista", "bitcoin_point_7": "Kiinte\u00e4n tarjonnan omaisuuserä",
	"point_1_summary_1": "Kun omistat Bitcoinia, sinulla on suora omistus itse omaisuuser\u00e4\u00e4n. Kun omistat osakkeita, omistat osuuden yrityksest\u00e4, mik\u00e4 tarkoittaa, ett\u00e4 sijoituksesi riippuu yrityksen suorituskyvyst\u00e4, johdon p\u00e4\u00e4t\u00f6ksist\u00e4 ja liiketoiminnan menestyksest\u00e4.",
	"point_2_summary_1": "Bitcoinin kova katto on 21 miljoonaa BTC, joita tulee koskaan olemaan.", "point_2_summary_2": "Yritykset voivat laskea liikkeelle uusia osakkeita milloin tahansa, laimentaen nykyisten osakkeenomistajien omistusosuutta.", "point_2_summary_3": "T\u00e4m\u00e4 on v\u00e4hemm\u00e4n kuin fiat-inflaatio, mutta silti laimennusta.", "point_2_summary_4": "Bitcoinilla osuutesi piiraasta ei koskaan pienene.",
	"point_3_summary_1": "Bitcoin toimii hajautetulla verkolla ilman yksitt\u00e4ist\u00e4 vikapistett\u00e4. Osakesijoituksiin liittyy avainhenkil\u00f6riski \u2013 jos toimitusjohtaja tai muut avainjohtajat l\u00e4htev\u00e4t, sairastuvat tai tekev\u00e4t huonoja p\u00e4\u00e4t\u00f6ksi\u00e4, sijoituksesi voi k\u00e4rsi\u00e4 merkitt\u00e4v\u00e4sti.",
	"point_4_summary_1": "Bitcoinin hinta m\u00e4\u00e4r\u00e4ytyy puhtaasti markkinoiden kysynn\u00e4n ja tarjonnan mukaan. Osakkeiden hintoja arvioidaan usein P/E-suhteilla, jotka osoittavat, kuinka paljon sijoittajat maksavat jokaisesta yrityksen tuottamasta dollarista.",
	"point_5_summary_1": "Bitcoinilla k\u00e4yd\u00e4\u00e4n kauppaa 24 tuntia vuorokaudessa, 7 p\u00e4iv\u00e4\u00e4 viikossa globaaleissa p\u00f6rsseiss\u00e4.", "point_5_summary_2": "Bitcoin on hajautettu", "point_5_summary_3": "eik\u00e4 nuku koskaan.", "point_5_summary_4": "Osakemarkkinat ovat auki vain arkip\u00e4ivinä virka-aikoina.",
	"point_6_summary_1": "Bitcoinilla voit ottaa kolikkosi omaan hallintaan, mik\u00e4 tarkoittaa, ett\u00e4 omistat ne todella ilman riippuvuutta kolmannesta osapuolesta.", "point_6_summary_2": "Oma hallinnointi on yht\u00e4 helppoa kuin sovelluksen lataaminen.", "point_6_summary_3": "Osakkeet vaativat v\u00e4litystilin ja olet alttiina vastapuoliriskille.", "point_6_summary_4": "Et koskaan todella omista osaketodistuksia suoraan.",
	"point_7_summary_1": "Bitcoin on kiinte\u00e4n tarjonnan omaisuuserä, jonka kova katto on 21 miljoonaa Bitcoinia. T\u00e4m\u00e4 tekee siit\u00e4 erinomaisen inflaatiosuojan. Osakkeiden suorituskyky inflaatiota vastaan vaihtelee."
});

// bitcoin-vs-cbdc
writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin vs CBDC:t",
	"cbdc_header": "MILT\u00c4 PIT\u00c4ISI", "cbdc_header_2": "DIGITAALISEN RAHAN", "cbdc_header_3": "N\u00c4YTT\u00c4\u00c4?",
	"cbdc_intro_1": "Maailmamme muuttuu yh\u00e4 digitaalisemmaksi, ja niin my\u00f6s rahamme.", "cbdc_intro_2": "T\u00e4m\u00e4 her\u00e4tt\u00e4\u00e4 kysymyksen: milt\u00e4 haluamme digitaalisen rahamme n\u00e4ytt\u00e4v\u00e4n?", "cbdc_intro_3": "Monet maat tutkivat keskuspankin digitaalisen valuutan (CBDC) liikkeeseenlaskua.", "cbdc_intro_4": "Katsotaan eroa kahden digitaalisen rahan muodon v\u00e4lill\u00e4: Bitcoin ja keskuspankin digitaaliset valuutat (CBDC:t).",
	"cbdc": "CBDC", "bitcoin": "BITCOIN",
	"cbdc_point_1": "Vaatii luvan k\u00e4ytt\u00e4miseen", "cbdc_point_2": "Rahasi voi vanhentua", "cbdc_point_3": "Ei rajaa kokonaistarjonnalle", "cbdc_point_4": "Linkitetty viranomaisen tunnistautumiseen", "cbdc_point_5": "Keskitetty", "cbdc_point_6": "K\u00e4ytt\u00e4j\u00e4t eiv\u00e4t voi ajaa solmuja", "cbdc_point_7": "Helposti j\u00e4\u00e4dytett\u00e4viss\u00e4", "cbdc_point_8": "On luotettava s\u00e4ilytt\u00e4jiin", "cbdc_point_9": "Muuttuva rahapolitiikka", "cbdc_point_10": "Turvaton",
	"bitcoin_point_1": "K\u00e4yt\u00e4 ilman lupaa", "bitcoin_point_2": "Rahasi ei koskaan vanhene", "bitcoin_point_3": "Kiinte\u00e4 tarjonta 21M BTC", "bitcoin_point_4": "Pseudonyymi", "bitcoin_point_5": "Hajautettu", "bitcoin_point_6": "K\u00e4ytt\u00e4j\u00e4t voivat ajaa solmuja", "bitcoin_point_7": "Ei voida j\u00e4\u00e4dytt\u00e4\u00e4", "bitcoin_point_8": "Voidaan hallinnoida itse", "bitcoin_point_9": "Ennustettava rahapolitiikka", "bitcoin_point_10": "Turvallinen",
	"point_1_summary_1": "Bitcoin on suunniteltu antamaan sinulle t\u00e4ydellinen hallinta rahoihisi.", "point_1_summary_2": "Kukaan ei voi est\u00e4\u00e4 sinua tekem\u00e4st\u00e4 Bitcoin-tapahtumia.", "point_1_summary_3": "CBDC:t on suunniteltu antamaan hallituksille t\u00e4ydellinen hallinta rahoihisi.", "point_1_summary_4": "CBDC:t rajoittavat yksityisyytt\u00e4si ja vapauttasi.",
	"point_2_summary_1": "Bitcoin ei koskaan vanhene eik\u00e4 sill\u00e4 ole kuukausimaksuja.", "point_2_summary_2": "CBDC:t voidaan ohjelmoida vanhenemaan.", "point_2_summary_3": "Kun CBDC:t vanhenevat, ne est\u00e4v\u00e4t sinua s\u00e4\u00e4st\u00e4m\u00e4st\u00e4 tulevaisuutta varten.",
	"point_3_summary_1": "Bitcoinin kova katto on 21 miljoonaa BTC.", "point_3_summary_2": "CBDC:ill\u00e4 ei ole kattoa kokonaistarjonnalle. T\u00e4m\u00e4 mahdollistaa hallituksen raham\u00e4\u00e4r\u00e4n kasvattamisen.", "point_3_summary_3": "T\u00e4m\u00e4 aiheuttaa inflaatiota.",
	"point_4_summary_1": "Bitcoin-osoitteet ovat pseudonyymej\u00e4, mik\u00e4 tarkoittaa, etteiv\u00e4t ne ole yhteydess\u00e4 nimiin tai henkil\u00f6llisyyteen. CBDC:t ovat suoraan yhteydess\u00e4 henkil\u00f6llisyyteesi.",
	"point_5_summary_1": "Bitcoin-verkko on hajautettu.", "point_5_summary_2": "Kymmenettuhannet itsen\u00e4iset solmut vahvistavat verkon s\u00e4\u00e4nn\u00f6t.", "point_5_summary_3": "CBDC:t ovat keskitettyjä hallituksen ja keskuspankkien k\u00e4siin.",
	"point_6_summary_1": "Bitcoin sallii kenen tahansa ajaa solmua, joka todentaa verkon s\u00e4\u00e4nt\u00f6jen noudattamisen. CBDC:t eiv\u00e4t salli solmujen ajamista.",
	"point_7_summary_1": "Bitcoin on suunniteltu tekemään rahojesi j\u00e4\u00e4dytt\u00e4minen mahdottomaksi. CBDC:t on suunniteltu helpottamaan rahojesi j\u00e4\u00e4dytt\u00e4mist\u00e4.",
	"point_8_summary_1": "Bitcoin on suunniteltu antamaan sinulle t\u00e4ysi hallinta rahoihisi.", "point_8_summary_2": "Varmista vain, ett\u00e4 siirr\u00e4t ne omahallintaan.", "point_8_summary_3": "Kun hallinnoit bitcoiniasi itse, kukaan ei voi est\u00e4\u00e4 p\u00e4\u00e4sy\u00e4si rahoihisi.", "point_8_summary_4": "CBDC:t vaativat luottamaan s\u00e4ilytt\u00e4jiin, kuten pankkiin tai hallitukseen.",
	"point_9_summary_1": "Bitcoinilla on ennustettava, koodiin kirjattu rahapolitiikka, jota ei voi muuttaa. CBDC:ill\u00e4 on rahapolitiikka, jota voidaan helposti muuttaa.", "point_9_summary_2": "T\u00e4m\u00e4 johtaa inflaatioon, kun poliitikot painavat liikaa rahaa.",
	"point_10_summary_1": "Bitcoin on turvallisin koskaan olemassa ollut tietokoneverkko, eik\u00e4 sit\u00e4 ole koskaan hakkeroitu. CBDC:t luottavat hallituksiin ja pankkeihin verkon turvaamisessa."
});

// bitcoin-vs-cash
writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin vs k\u00e4teinen",
	"cash_header": "ERO", "cash_header_2": "BITCOININ", "cash_header_3": "JA", "cash_header_4": "K\u00c4TEISEN V\u00c4LILL\u00c4",
	"cash_intro_1": "K\u00e4teist\u00e4 on k\u00e4ytetty rahana vuosisatoja, ja se on edelleen yleisin fyysisen rahan muoto maailmassa.",
	"cash_intro_2": "Bitcoin on vuonna 2009 luotu digitaalinen raha, joka toimii itsen\u00e4isesti mist\u00e4\u00e4n hallituksesta.",
	"cash_intro_3": "Mutta miten fyysinen k\u00e4teinen eroaa digitaalisesta rahasta kuten Bitcoin? Tutkitaan keskeisi\u00e4 eroja: Bitcoin ja k\u00e4teinen.",
	"cash": "K\u00c4TEINEN", "bitcoin": "BITCOIN",
	"cash_point_1": "Vaatii fyysist\u00e4 l\u00e4sn\u00e4oloa", "cash_point_2": "Rajojen rajoittama", "cash_point_3": "Voidaan mitätöidä yön yli", "cash_point_4": "Voidaan väärentää", "cash_point_5": "Hallituksen hallitsema", "cash_point_6": "Fyysisen s\u00e4ilytyksen riskit", "cash_point_7": "Rajoitettu jaettavuus",
	"bitcoin_point_1": "Voidaan l\u00e4hett\u00e4\u00e4 internetin kautta", "bitcoin_point_2": "Toimii maailmanlaajuisesti", "bitcoin_point_3": "Ei voida mitätöidä", "bitcoin_point_4": "Ei voida väärentää", "bitcoin_point_5": "Hajautettu verkko", "bitcoin_point_6": "Digitaalinen oma hallinnointi", "bitcoin_point_7": "Helposti jaettava",
	"point_1_summary_1": "Bitcoinia voidaan l\u00e4hett\u00e4\u00e4 minne tahansa maailmassa v\u00e4litt\u00f6m\u00e4sti internetin kautta, kun taas k\u00e4teinen vaatii fyysist\u00e4 l\u00e4sn\u00e4oloa.",
	"point_2_summary_1": "Bitcoin toimii samalla tavalla kaikkialla maailmassa \u2013 Bitcoin-verkossa ei ole rajoja. K\u00e4teinen on rajoitettu maantieteen, vaihtokurssien ja paikallisen hyv\u00e4ksynn\u00e4n mukaan.",
	"point_3_summary_1": "Hallitukset voivat ja mitätöiv\u00e4t k\u00e4teist\u00e4 yön yli, kuten Intia teki vuonna 2016.", "point_3_summary_2": "Hallitukset my\u00f6s jatkuvasti alentavat k\u00e4teisen arvoa inflaation kautta.", "point_3_summary_3": "Bitcoinia ei voi mitätöidä mikään hallitus \u2013 se toimii hajautetulla verkolla.",
	"point_4_summary_1": "K\u00e4teist\u00e4 voidaan v\u00e4\u00e4rent\u00e4\u00e4, ja v\u00e4\u00e4renn\u00f6ksi\u00e4 on usein vaikea havaita. Bitcoin k\u00e4ytt\u00e4\u00e4 kryptografista todistetta, joka tekee v\u00e4\u00e4rent\u00e4misen matemaattisesti mahdottomaksi.",
	"point_5_summary_1": "K\u00e4teisen laskee liikkeelle ja hallitsee hallitukset. Bitcoin toimii hajautetulla verkolla, jossa mik\u00e4\u00e4n yksitt\u00e4inen taho ei hallitse raham\u00e4\u00e4r\u00e4\u00e4.",
	"point_6_summary_1": "K\u00e4teinen on s\u00e4ilytett\u00e4v\u00e4 fyysisesti, mik\u00e4 tekee siit\u00e4 haavoittuvan varkaudelle, katoamiselle tai tulipalossa tuhoutumiselle.", "point_6_summary_2": "Mutta Bitcoin voidaan s\u00e4ilytt\u00e4\u00e4 turvallisesti omassa hallinnassa", "point_6_summary_3": "k\u00e4ytt\u00e4en \u00e4lypuhelinsovellusta tai erikoislompakkoa.",
	"point_7_summary_1": "K\u00e4teisell\u00e4 on v\u00e4himmäisarvot \u2013 sentti\u00e4 ei voi jakaa pienempiin osiin. Bitcoin voidaan jakaa 100 miljoonaan pienempään yksikk\u00f6\u00f6n nimelt\u00e4 satoshi."
});

// bitcoin-vs-crypto
writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin vs krypto",
	"crypto_header": "ERO", "crypto_header_2": "BITCOININ", "crypto_header_3": "JA", "crypto_header_4": "KRYPTON V\u00c4LILL\u00c4",
	"crypto_intro_1": "Kryptovaluutta-ala on r\u00e4j\u00e4ht\u00e4nyt tuhansiin erilaisiin digitaalisiin tokeneihin ja projekteihin.",
	"crypto_intro_2": "Vaikka Bitcoin oli ensimm\u00e4inen ja pysyy tunnetuimpana, se eroaa perustavanlaatuisesti muusta kryptoalasta.",
	"crypto_intro_3": "Tutkitaan keskeisi\u00e4 eroja Bitcoinin ja laajemman kryptovaluuttaekosysteemin v\u00e4lill\u00e4.",
	"crypto": "KRYPTO", "bitcoin": "BITCOIN",
	"crypto_point_1": "Jatkuvia muutoksia ja haarautumisia", "crypto_point_2": "Keskitetty hallinta", "crypto_point_3": "Rajaton tai inflatoiva tarjonta", "crypto_point_4": "Monimutkaiset protokollat", "crypto_point_5": "Kokeelliset konsensusmenetelmät", "crypto_point_6": "Spekulatiivisia hyötytokeneita", "crypto_point_7": "Hauras", "crypto_point_8": "Yritysten tuki",
	"bitcoin_point_1": "Muuttumaton protokolla", "bitcoin_point_2": "Aidosti hajautettu", "bitcoin_point_3": "Kiinte\u00e4 tarjonta 21M BTC", "bitcoin_point_4": "Yksinkertainen ja saavutettava", "bitcoin_point_5": "Todistettu ty\u00f6n todistus", "bitcoin_point_6": "Puhdas digitaalinen raha", "bitcoin_point_7": "Antifragiili", "bitcoin_point_8": "Kukaan ei hallitse sit\u00e4",
	"point_1_summary_1": "Bitcoinin protokolla on pysynyt perustavanlaatuisesti muuttumattomana vuodesta 2009. Useimmat kryptoprojektit p\u00e4ivitt\u00e4v\u00e4t protokolliaan usein.",
	"point_2_summary_1": "Bitcoin toimii aidosti hajautetulla verkolla, jossa on kymmeni\u00e4tuhansia itsen\u00e4isi\u00e4 solmuja. Monet kryptoprojektit ovat s\u00e4\u00e4ti\u00f6iden tai pienten kehitt\u00e4j\u00e4ryhmien hallinnassa.",
	"point_3_summary_1": "Bitcoinin kova katto on 21 miljoonaa kolikkoa. Useimmilla kryptoprojekteilla on rajaton tarjonta tai ne voivat luoda uusia tokeneita milloin tahansa.",
	"point_4_summary_1": "Bitcoinilla on yksi yksinkertainen tarkoitus: vertaisverkkoinen digitaalinen raha. Monet kryptoprojektit ovat monimutkaisia.",
	"point_5_summary_1": "Bitcoin k\u00e4ytt\u00e4\u00e4 ty\u00f6n todistusta, jota on testattu yli 15 vuotta onnistuneesti. Monet kryptoprojektit k\u00e4ytt\u00e4v\u00e4t kokeellisia mekanismeja.",
	"point_6_summary_1": "Bitcoin toimii digitaalisena rahana \u2013 arvon s\u00e4ilytt\u00e4j\u00e4n\u00e4 ja vaihdon v\u00e4lineen\u00e4. Useimmat kryptotokenit ovat hy\u00f6ty- tai spekulatiivisia tokeneita.",
	"point_7_summary_1": "Bitcoin vahvistuu hy\u00f6kk\u00e4yksist\u00e4 ja on selviytynyt jokaisesta kriisist\u00e4. Useimmat kryptoprojektit ovat hauraita ja voivat romahtaa.",
	"point_8_summary_1": "Bitcoinilla ei ole toimitusjohtajaa, yrityst\u00e4 takanaan eik\u00e4 yksitt\u00e4ist\u00e4 vikapistett\u00e4. Monet kryptoprojektit ovat p\u00e4\u00e4omasijoittajien tukemia."
});

// bitcoin-vs-bonds
writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin vs joukkovelkakirjat",
	"bonds_header": "ERO", "bonds_header_2": "BITCOININ", "bonds_header_3": "JA", "bonds_header_4": "JOUKKOVELKAKIRJOJEN V\u00c4LILL\u00c4",
	"bonds_intro_1": "Valtion joukkovelkakirjoja kutsutaan usein 'riskitt\u00f6miksi' sijoituksiksi.", "bonds_intro_2": "Bitcoin on digitaalinen raha, joka toimii itsen\u00e4isesti hallituksista.", "bonds_intro_3": "Mutta ovatko joukkovelkakirjat todella riskitt\u00f6mi\u00e4? Ja miten ne vertautuvat Bitcoiniin arvon s\u00e4ilytt\u00e4j\u00e4n\u00e4?",
	"bonds": "JOUKKOVELKAKIRJAT", "bitcoin": "BITCOIN",
	"bonds_point_1": "Piiloriskit", "bonds_point_2": "Menett\u00e4v\u00e4t arvoa inflaatiolle", "bonds_point_3": "Voivat muuttua ep\u00e4likvideiksi", "bonds_point_4": "Ep\u00e4onnistuneet huutokaupat", "bonds_point_5": "Kiinte\u00e4 tuotto", "bonds_point_6": "Vaativat v\u00e4lik\u00e4si\u00e4", "bonds_point_7": "Riippuvuus hallituksesta",
	"bitcoin_point_1": "Ei vastapuoliriskiä", "bitcoin_point_2": "Kiinte\u00e4 tarjonta", "bitcoin_point_3": "Aina likvidi", "bitcoin_point_4": "Ei huutokauppariskiä", "bitcoin_point_5": "Arvonnousupotentiaali", "bitcoin_point_6": "Oma hallinnointi mahdollista", "bitcoin_point_7": "Ei riippuvuutta hallituksesta",
	"point_1_summary_1": "Joukkovelkakirjat ovat 'riskitt\u00f6mi\u00e4' vain nimellisesti \u2013 saat dollarisi takaisin, mutta ne voivat olla paljon v\u00e4hemm\u00e4n arvoisia.", "point_1_summary_2": "Bitcoinilla on selvät riskit (volatiliteetti) mutta ei piilotettua vastapuoliriskiä.",
	"point_2_summary_1": "Kun inflaatio ylitt\u00e4\u00e4 joukkovelkakirjojen tuoton, haltijat menett\u00e4v\u00e4t ostovoimaa joka vuosi.", "point_2_summary_2": "Lue lis\u00e4\u00e4 inflaatiosta.", "point_2_summary_3": "Bitcoinin kiinte\u00e4 tarjonta tarkoittaa, ettei sit\u00e4 voida sy\u00f6d\u00e4 inflaation kautta.",
	"point_3_summary_1": "Rahoituskriisien aikana joukkovelkakirjamarkkinat voivat j\u00e4\u00e4ty\u00e4.", "point_3_summary_2": "Lue, miten Silicon Valley Bank ep\u00e4onnistui.", "point_3_summary_3": "Bitcoinilla k\u00e4yd\u00e4\u00e4n kauppaa 24/7 eik\u00e4 sill\u00e4 ole koskaan ollut likviditeettikriisi\u00e4.",
	"point_4_summary_1": "Valtionlainahuutokaupat voivat ep\u00e4onnistua, kun ostajia ei ole tarpeeksi.", "point_4_summary_2": "Lue lis\u00e4\u00e4 epäonnistuneista huutokaupoista.", "point_4_summary_3": "Bitcoinin hinta muodostuu jatkuvilla globaaleilla markkinoilla.",
	"point_5_summary_1": "Joukkovelkakirjojen tuotto on kiinte\u00e4 ostohetkell\u00e4.", "point_5_summary_2": "Bitcoinilla on merkitt\u00e4v\u00e4 arvonnousupotentiaali k\u00e4ytt\u00f6\u00f6noton kasvaessa.",
	"point_6_summary_1": "Useimmat ihmiset omistavat joukkovelkakirjoja v\u00e4lik\u00e4sien kautta.", "point_6_summary_2": "Bitcoinilla voit ottaa suoran omistuksen omahallinnon kautta.",
	"point_7_summary_1": "Joukkovelkakirjat riippuvat t\u00e4ysin hallituksen kyvyst\u00e4 maksaa.", "point_7_summary_2": "Bitcoin toimii itsen\u00e4isesti hallituksista."
});

// bitcoin-vs-real-estate
writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin vs kiinteist\u00f6t",
	"real_estate_header": "ERO", "real_estate_header_2": "BITCOININ", "real_estate_header_3": "JA", "real_estate_header_4": "KIINTEIST\u00d6JEN V\u00c4LILL\u00c4",
	"real_estate_intro_1": "Kiinteist\u00f6t ovat olleet suosittu sijoitusmuoto vuosikymmeni\u00e4.", "real_estate_intro_2": "Bitcoin on vuonna 2009 luotu digitaalinen raha, jota monet pit\u00e4v\u00e4t arvon s\u00e4ilytt\u00e4j\u00e4n\u00e4.", "real_estate_intro_3": "Miten fyysinen omaisuus eroaa digitaalisesta rahasta? Katsotaan eroja: Bitcoin ja kiinteist\u00f6t.",
	"real_estate": "KIINTEIST\u00d6T", "bitcoin": "BITCOIN",
	"real_estate_point_1": "Ei voida siirt\u00e4\u00e4", "real_estate_point_2": "Ei voida helposti jakaa", "real_estate_point_3": "Hallituksen s\u00e4\u00e4ntelyn alainen", "real_estate_point_4": "Vaatii jatkuvaa yll\u00e4pitoa", "real_estate_point_5": "Kiinteist\u00f6veron alainen", "real_estate_point_6": "Haavoittuva luonnonkatastrofeille", "real_estate_point_7": "Jokainen kiinteist\u00f6 on ainutlaatuinen", "real_estate_point_8": "Rajoitettu paikallisiin ostajiin",
	"bitcoin_point_1": "Maailmanlaajuisesti siirrett\u00e4v\u00e4", "bitcoin_point_2": "Helposti jaettava", "bitcoin_point_3": "Sensuurinkest\u00e4v\u00e4", "bitcoin_point_4": "Ei yll\u00e4pitoa", "bitcoin_point_5": "Ei kiinteist\u00f6veroa", "bitcoin_point_6": "Vaikea tuhota", "bitcoin_point_7": "T\u00e4ydellisesti vaihdettava", "bitcoin_point_8": "Globaali 24/7-markkina",
	"point_1_summary_1": "Bitcoinia voidaan siirt\u00e4\u00e4 minne tahansa v\u00e4litt\u00f6m\u00e4sti internetin kautta. Kiinteist\u00f6 on pysyv\u00e4sti sidottu tiettyyn paikkaan.",
	"point_2_summary_1": "Bitcoin voidaan jakaa 100 miljoonaan pienempään yksikk\u00f6\u00f6n. Kiinteist\u00f6\u00e4 ei voi helposti jakaa.",
	"point_3_summary_1": "Bitcoin toimii hajautetulla verkolla. Kiinteist\u00f6 on laajan hallituksen s\u00e4\u00e4ntelyn alainen.",
	"point_4_summary_1": "Bitcoin ei vaadi yll\u00e4pitoa. Kiinteist\u00f6 vaatii jatkuvaa huoltoa.",
	"point_5_summary_1": "Bitcoinissa ei ole jatkuvia veroja. Kiinteist\u00f6ist\u00e4 maksetaan vuosittaista kiinteist\u00f6veroa.",
	"point_6_summary_1": "Bitcoin ei voi tuhoutua luonnonkatastrofeissa oikein varmuuskopioidessa. Kiinteist\u00f6 on haavoittuva kaikille fyysisille tuhoille.",
	"point_7_summary_1": "Jokainen bitcoin on identtinen ja vaihdettava. Jokainen kiinteist\u00f6 on ainutlaatuinen.",
	"point_8_summary_1": "Bitcoinia voidaan ostaa ja myyd\u00e4 24/7 kenelle tahansa maailmassa. Kiinteist\u00f6kaupat ovat rajoitettuja paikallisiin ostajiin ja voivat kest\u00e4\u00e4 kuukausia.",
	"bitcoin_point_9": "Edist\u00e4\u00e4 yksil\u00f6llist\u00e4 omistajuutta", "real_estate_point_9": "My\u00f6t\u00e4vaikuttaa asumisen finansialisoitumiseen",
	"point_9_summary_1": "Bitcoin mahdollistaa suoran yksil\u00f6llisen omistajuuden ilman v\u00e4lik\u00e4si\u00e4. Kiinteist\u00f6sijoittaminen oman asunnon ulkopuolella edist\u00e4\u00e4 asumisen finansialisoitumista, nostaa hintoja ja vaikuttaa asumisen kohtuuhintaisuuteen."
});

// bitcoin-vs-visa
writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin vs Visa",
	"visa_header": "ERO", "visa_header_2": "BITCOININ", "visa_header_3": "JA", "visa_header_4": "VISAN V\u00c4LILL\u00c4",
	"visa_intro_1": "Luottokortit ja Bitcoin ovat molemmat maksuj\u00e4rjestelmi\u00e4, mutta ne toimivat hyvin eri tavalla.", "visa_intro_2": "Luottokortit kuten Visa ovat suljettuja verkkoja, kun taas Bitcoin on avoin verkko.", "visa_intro_3": "Katsotaan eroja: Bitcoin ja Visa.",
	"visa": "VISA", "bitcoin": "BITCOIN",
	"visa_point_1": "Suljettu verkko", "visa_point_2": "3 % kauppiasmaksut", "visa_point_3": "L\u00e4pin\u00e4kym\u00e4t\u00f6n j\u00e4rjestelm\u00e4", "visa_point_4": "Voi j\u00e4\u00e4dytt\u00e4\u00e4 tilit", "visa_point_5": "Luo velkaa korkeilla koroilla", "visa_point_6": "Vaatii v\u00e4lik\u00e4si\u00e4", "visa_point_7": "Rajoitetut ajat ja maantiede",
	"bitcoin_point_1": "Avoin verkko", "bitcoin_point_2": "Ei kauppiasmaksuja", "bitcoin_point_3": "L\u00e4pin\u00e4kyv\u00e4 j\u00e4rjestelm\u00e4", "bitcoin_point_4": "Ei voida j\u00e4\u00e4dytt\u00e4\u00e4", "bitcoin_point_5": "Ei velan luomista", "bitcoin_point_6": "Oma hallinnointi mahdollista", "bitcoin_point_7": "24/7 globaali p\u00e4\u00e4sy",
	"point_1_summary_1": "Bitcoin on avoin verkko, johon kuka tahansa voi liitty\u00e4 ilman lupaa. Luottokorttiverkot ovat suljettuja j\u00e4rjestelmi\u00e4.", "point_1_summary_2": "T\u00e4m\u00e4 tekee Bitcoinista inklusiivisemman ja saavutettavamman.",
	"point_2_summary_1": "Bitcoin-tapahtumilla ei ole kauppiasmaksuja, kun taas luottokorttiyhti\u00f6t veloittavat noin 3 % per tapahtuma.", "point_2_summary_2": "Opi, miten yrityksesi voi s\u00e4\u00e4st\u00e4\u00e4 rahaa", "point_2_summary_3": "hyv\u00e4ksym\u00e4ll\u00e4 Bitcoin-maksuja luottokorttimaksujen sijaan.",
	"point_3_summary_1": "Bitcoin toimii l\u00e4pin\u00e4kyv\u00e4ll\u00e4 lohkoketjulla, jossa kaikki tapahtumat voidaan todentaa. Luottokorttiverkot ovat suljettuja j\u00e4rjestelmi\u00e4.", "point_3_summary_2": "T\u00e4m\u00e4 l\u00e4pin\u00e4kyvyys tekee Bitcoinista luotettavamman.",
	"point_4_summary_1": "Luottokorttiyhti\u00f6t voivat j\u00e4\u00e4dytt\u00e4\u00e4 tilej\u00e4 tai est\u00e4\u00e4 tapahtumia milloin tahansa. Bitcoinia ei voida j\u00e4\u00e4dytt\u00e4\u00e4.", "point_4_summary_2": "Bitcoinilla s\u00e4ilyt\u00e4t hallinnan rahoihisi.",
	"point_5_summary_1": "Luottokortit luovat velkaa, jonka korot voivat ylittää 25 % vuodessa.", "point_5_summary_2": "Bitcoin-tapahtumat ovat lopullisia selvityksi\u00e4 ilman velan luomista.",
	"point_6_summary_1": "Bitcoin mahdollistaa omahallinnon, mik\u00e4 tarkoittaa, ett\u00e4 voit pit\u00e4\u00e4 ja hallita omia rahojasi.", "point_6_summary_2": "Lue lis\u00e4\u00e4 Bitcoin-lompakoista", "point_6_summary_3": "ymm\u00e4rt\u00e4\u00e4ksesi, miten voit ottaa rahasi hallintaan.",
	"point_7_summary_1": "Bitcoin toimii 24/7 maailmanlaajuisesti ilman rajoituksia.", "point_7_summary_2": "Luottokorttiverkot ovat rajoitettuja aukioloaikoihin ja maantieteeseen."
});

// bitcoin-vs-fine-art
writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin vs taide",
	"fine_art_header": "ERO", "fine_art_header_2": "BITCOININ", "fine_art_header_3": "JA", "fine_art_header_4": "TAITEEN V\u00c4LILL\u00c4",
	"fine_art_intro_1": "Taide on ollut ylellisyyssijoitus vuosisatoja.", "fine_art_intro_2": "Bitcoin on digitaalinen raha, jota monet pit\u00e4v\u00e4t arvon s\u00e4ilytt\u00e4j\u00e4n\u00e4.", "fine_art_intro_3": "Miten fyysinen taideteos eroaa digitaalisesta rahasta? Katsotaan eroja: Bitcoin ja taide.",
	"fine_art": "TAIDE", "bitcoin": "BITCOIN",
	"fine_art_point_1": "Jokainen teos on ainutlaatuinen", "fine_art_point_2": "Vaatii erikoishuutokauppoja", "fine_art_point_3": "Korkeat huutokauppamaksut", "fine_art_point_4": "Ei voida jakaa", "fine_art_point_5": "Vaatii asiantuntijan todennuksen", "fine_art_point_6": "Haavoittuva vaurioille", "fine_art_point_7": "Rajoitettu varakkaille ker\u00e4ilij\u00f6ille",
	"bitcoin_point_1": "T\u00e4ydellisesti vaihdettava", "bitcoin_point_2": "Globaali 24/7-markkina", "bitcoin_point_3": "Alhaiset tapahtumamaksut", "bitcoin_point_4": "Helposti jaettava", "bitcoin_point_5": "Kryptografisesti todennettava", "bitcoin_point_6": "Vaikea tuhota", "bitcoin_point_7": "Kaikkien saavutettavissa",
	"point_1_summary_1": "Jokainen bitcoin on identtinen ja vaihdettava. Taide on luonnostaan ainutlaatuista, mik\u00e4 tekee arvostuksista erittäin vaikeita.",
	"point_2_summary_1": "Bitcoinilla k\u00e4yd\u00e4\u00e4n kauppaa globaaleilla 24/7-markkinoilla. Taide vaatii erikoishuutokauppataloja ja myynti voi kest\u00e4\u00e4 kuukausia.",
	"point_3_summary_1": "Bitcoinin ostaminen tai myyminen maksaa yleens\u00e4 alle 1 %. Taidekauppoihin liittyy huomattavia kustannuksia, jotka voivat ylitt\u00e4\u00e4 30\u201340 %.",
	"point_4_summary_1": "Bitcoin voidaan jakaa 100 miljoonaan pienempään yksikk\u00f6\u00f6n. Taidetta ei voida jakaa.",
	"point_5_summary_1": "Bitcoinin omistus ja aitous voidaan kryptografisesti todentaa. Taide vaatii kalliita asiantuntija-arviointeja, ja v\u00e4\u00e4renn\u00f6kset huijaavat s\u00e4\u00e4nn\u00f6llisesti taidemaailmaa.",
	"point_6_summary_1": "Bitcoin ei voi tuhoutua oikein varmuuskopioidessa. Taide on haavoittuva kaikille fyysisille tuhoille.",
	"point_7_summary_1": "Bitcoinia voi ostaa kuka tahansa internet-yhteyden omaava. Taidesijoittaminen on rajoitettu varakkaille ker\u00e4ilij\u00f6ille."
});

console.log(`\nDone! Created 10 comparison files.`);
