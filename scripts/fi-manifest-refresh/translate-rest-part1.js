#!/usr/bin/env node
/**
 * Finnish manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
 *
 * Finnish conventions:
 * - Informal 2nd-person singular "sinä/sä/sinun" throughout.
 * - Numbers: decimal comma, space thousand separators. Space before %.
 * - Quotation marks: ”..." (Finnish typographic style — same high-high style
 *   as Swedish, not the German-style "..." — but we use „..." because the
 *   existing Finnish files in the repo already use typographic low-high
 *   „..." pattern from the legacy translation; we preserve that to avoid
 *   introducing visual inconsistency).
 *   Actually: Standard Finnish uses ”…" (both high). We use ”…" throughout.
 * - "biljoona" = 10^12 (Finnish uses long scale: miljardi=10^9, biljoona=10^12).
 * - Brand names (Silicon Valley Bank, FRED, FDIC, etc.) preserved verbatim.
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
	"fi.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Takaisin etusivulle",
	"404::404_message":
		"Bitcoin rokkaa, mutta tämä rikkinäinen sivu ei.",
	"404::404_not_found_short": "Ei löytynyt",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Tarjoamme ilmaisia yritystyökaluja, jotka tekevät paikallisille yrityksille helpoksi alkaa ottaa bitcoinia vastaan. Sivumme ”Bitcoin yrityksille” selittää, miksi bitcoin on hyödyksi yritykselle, miten valita lompakko ja maksujen vastaanottaja, ja tarjoaa ilmaisia ”Hyväksymme bitcoinin” -tarroja.",
	"about::about_card_business_label": "Yritystyökalut",
	"about::about_card_business_source": "Lähde: bitcoin.rocks →",
	"about::about_card_business_title":
		"Kaikki mitä yritys tarvitsee aloittaakseen bitcoin-maksujen vastaanottamisen",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Lähde: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Osallistu",
	"about::about_card_contribute_source": "Lähde: GitHub →",
	"about::about_card_contribute_title":
		"Opi osallistumaan bitcoin.rocks-projektiin",
	"about::about_card_email_label": "Sähköposti",
	"about::about_card_email_source": "Lähde: sähköposti →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Tulostettavat esitteet",
	"about::about_card_flyers_source": "Lähde: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Lataa ja tulosta bitcoin-esitteitä yhteisöllesi",
	"about::about_card_github_label": "Repositorio",
	"about::about_card_github_source": "Lähde: GitHub →",
	"about::about_card_github_title": "Katso bitcoin.rocks GitHubissa",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Lähde: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Ilmaiset tarrat",
	"about::about_card_stickers_source": "Lähde: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Saa ilmaisia bitcoin-tarroja suoraan kotiovellesi",
	"about::about_editorial_2":
		"Viittaamme luotettaviin lähteisiin kuten Yhdysvaltain keskuspankki (FRED), Yhdysvaltain työtilastovirasto, FDIC, YK, Maailman kultaneuvosto, Forbes, MIT Technology Review, Lyn Alden ja James Lavish. Uskomme, että kun tosiasiat esitetään selkeästi, bitcoin puhuu puolestaan.",
	"about::about_flyers_blurb":
		"Suunnittelemme tulostettavia esitteitä, joita voit jakaa tapaamisissa, kiinnittää ilmoitustauluille tai jättää postilaatikoihin — helppo tapa herättää kiinnostus ja ohjata ihmiset osoitteeseen bitcoin.rocks, josta he saavat lisätietoa.",
	"about::about_header": "Tietoa bitcoin.rocksista",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocksin perusti käyttäjä",
	"about::about_mission_1b":
		"vuonna 2022 yksinkertaisella missiolla: kiihdyttää bitcoinin käyttöönottoa koulutuksen kautta.",
	"about::about_open_source_2":
		"bitcoin.rocks on ilmainen ja avoimen lähdekoodin projekti MIT-lisenssillä. Jokainen on tervetullut osallistumaan. Etsimme erityisesti kääntäjiä, jotka auttavat tekemään sisältömme saavutettavaksi ihmisille ympäri maailmaa.",
	"about::about_open_source_header": "Avoin lähdekoodi",
	"about::about_page_description":
		"bitcoin.rocks on ilmainen ja avoimen lähdekoodin bitcoin-koulutussivusto, perustettu 2022. Missiomme on kiihdyttää bitcoinin käyttöönottoa koulutuksen kautta.",
	"about::about_stickers_blurb":
		"Lähetämme ilmaisia bitcoin-tarroja suoraan kotiovellesi, jotta voit kasvattaa bitcoin-tietoisuutta yhteisössäsi. Joka kuukausi sadat ihmiset skannaavat näiden tarrojen QR-koodeja oppiakseen lisää bitcoinista.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoinia ei voi kohdata pankkipaniikki",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin on täysimääräinen varantojärjestelmä. Et laita rahojasi pankkiin. Sinä itse olet oma pankkisi. Rahojasi ei lainata kenellekään tietämättäsi, koska ainoa henkilö, jolla on pääsy niihin, olet sinä.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Niin kauan kuin pidät bitcoinisi omassa lompakossasi — ei pörssissä tai ETF:ssä — pankkipaniikki on mahdoton.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Bitcoinin kanssa sinulla on todellinen hallinta rahoistasi.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"26. maaliskuuta 2020 alkaen yhdysvaltalaisten pankkien ei tarvitse pitää enää mitään pakollista varantoa.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Pankin varantoaste",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Lähde: Yhdysvaltain keskuspankki →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Täysimääräinen varantojärjestelmä — talletussuojaa ei tarvita.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoinin kattavuus",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Lähde: Bitcoinin julkaisuteksti →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Jokainen bitcoin on olemassa lohkoketjussa — mitään ei lainata pois.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Bitcoinin varantoaste",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Lähde: Bitcoinin julkaisuteksti →",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 miljardin $ vakuutusrahasto vs. 10,82 biljoonan $ vakuutetut talletukset (joulukuu 2025).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC:n kattavuus",
	"bank-runs::bank_runs_card_fdic_source":
		"Lähde: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Tapaustutkimus",
	"bank-runs::bank_runs_card_svb_source":
		"Lähde: Washingtonin yliopiston oikeustieteellinen tiedekunta →",
	"bank-runs::bank_runs_card_svb_title":
		"Katso, miten Silicon Valley Bankin pankkipaniikki tapahtui",
	"bank-runs::bank_runs_card_wallet_label": "Seuraava askel",
	"bank-runs::bank_runs_card_wallet_source": "Aloita täältä →",
	"bank-runs::bank_runs_card_wallet_title":
		"Opi hankkimaan oma bitcoin-lompakkosi",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC:n talletussuoja kattaa noin 1 % talletuksista",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC:n talletussuoja suojaa talletuksia jopa 250 000 $ tallettajaa kohti. Mutta vakuutusrahasto on pieni verrattuna koko talletusmäärään, jota sen pitäisi suojata.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Laajamittaisen pankkikriisin sattuessa hallitus todennäköisesti painaisi lisää rahaa paikatakseen aukon — aiheuttaen lisää",
	"bank-runs::bank_runs_fdic_p2_link": "inflaatiota.",
	"bank-runs::bank_runs_header":
		"Bitcoinia ei voi kohdata pankkipaniikki, mutta pankkiasi voi.",
	"bank-runs::bank_runs_page_description":
		"Pankit lainaavat talletuksesi osavarannolla pankkitoiminnalla. Jos liian moni nostaa rahansa samanaikaisesti, pankki voi kaatua. Bitcoin on täysimääräinen varantojärjestelmä — pankkipaniikki on mahdoton.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: tosielämän esimerkki",
	"bank-runs::bank_runs_svb_p1_a":
		"Maaliskuussa 2023 Silicon Valley Bank kaatui sijoitettuaan asiakkaidensa talletukset",
	"bank-runs::bank_runs_svb_p1_b":
		"Kun nuo velkakirjat menettivät arvonsa, SVB ei pystynyt kattamaan nostoja. Pankki muuttui maksukyvyttömäksi.",
	"bank-runs::bank_runs_svb_p1_link":
		"pitkäaikaisiin valtion velkakirjoihin.",
	"bank-runs::bank_runs_svb_p2":
		"Tuhannet yritykset eivät pystyneet maksamaan palkkoja työntekijöilleen. FDIC astui väliin — mutta suurempi kysymys heräsi: onko rahasi todella turvassa?",
	"bank-runs::bank_runs_what_p1":
		"Pankit eivät säilytä talletuksiasi kassakaapissa. Ne lainaavat ja sijoittavat rahasi pois — tätä kutsutaan osavarannolla pankkitoiminnaksi.",
	"bank-runs::bank_runs_what_p2":
		"Jos liian moni yrittää nostaa rahansa samaan aikaan, pankilla ei ole tarpeeksi käteistä maksaakseen kaikille. Se on pankkipaniikki — ja se voi johtaa pankin täydelliseen romahdukseen.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">pankkien</span> välillä",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoinia voi käyttää kuka tahansa, jolla on internetyhteys — se on ",
	"bitcoin-vs-banks::point_1_summary_2": "lupaa vaatimaton.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Pankit voivat kieltäytyä avaamasta tilejä, jäädyttää tai sulkea niitä omien sääntöjensä tai viranomaismääräysten perusteella.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin-verkko toimii 24/7/365 ilman huoltokatkoja ja pyhäpäiviä. Pankeilla on rajoitetut aukioloajat, ne ovat suljettuina viikonloppuisin ja niillä esiintyy käyttökatkoksia.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Jokainen bitcoin-transaktio on julkisessa lohkoketjussa, jonka kuka tahansa voi tarkistaa. Pankit pitävät yksityistä kirjanpitoa, jota asiakkaat eivät voi itsenäisesti tarkastaa.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Bitcoinin kanssa säilytät itse omia yksityisiä avaimiasi — katso yksinkertainen oppaamme ",
	"bitcoin-vs-banks::point_4_summary_2": "bitcoin-lompakoista",
	"bitcoin-vs-banks::point_4_summary_3":
		". Pankit pitävät rahasi itsellään ja voivat jäädyttää, rajoittaa tai estää sen milloin tahansa.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin-transaktioiden maksut ovat läpinäkyviä ja ennakoitavissa. Pankit lisäävät vähitellen piilomaksuja tileistä, tilinylityksistä, siirroista ja pankkiautomaateista.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin antaa sinun kuluttaa vain sen, mitä sinulla oikeasti on. Pankit sallivat tilinylitykset ja perivät sitten sarjan rangaistusmaksuja niistä.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Kun bitcoin-transaktio on lähetetty, sitä ei voi pysäyttää tai peruuttaa. Pankit voivat estää, jäädyttää tai peruuttaa tapahtumia sääntöjensä tai viranomaismääräysten perusteella.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">velkakirjojen</span> välillä",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Velkakirjat ovat ”riskittömiä” vain nimellisesti — inflaatio, korkovaihtelut ja maksuhäiriöriski syövät todellista tuottoa.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoinilla on läpinäkyvä volatiliteetti, mutta ei piilotettua vastapuoliriskiä.",
	"bitcoin-vs-bonds::point_2_summary_1": "Kun",
	"bitcoin-vs-bonds::point_2_summary_2": "inflaatio",
	"bitcoin-vs-bonds::point_2_summary_3":
		"ylittää velkakirjojen tuoton, velkakirjanhaltijat menettävät todellista ostovoimaa vuosittain. Bitcoinin 21 miljoonan ylärajaa ei voi laimentaa inflaatiolla.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Velkakirjamarkkinat voivat jäätyä kriisien aikana — Silicon Valley Bank kaatui osittain siksi, että sillä oli velkakirjoja, jotka menettivät arvonsa. Katso, miten",
	"bitcoin-vs-bonds::point_3_summary_2": "pankkipaniikit",
	"bitcoin-vs-bonds::point_3_summary_3":
		" tapahtuvat ja miksi bitcoin välttyy niiltä. Bitcoin käy kauppaa 24/7 maailmanlaajuisesti ilman likviditeettikriisiä.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Valtion velkakirjojen huutokaupat voivat epäonnistua, jos ostajia ei ole tarpeeksi — katso",
	"bitcoin-vs-bonds::point_4_summary_2": "vuoden 2022 heikko huutokauppa.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bitcoinin hinta löytyy jatkuvasti avoimilla markkinoilla ilman keskitettyä huutokauppaa, joka voisi epäonnistua.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Velkakirjojen tuotto on lukittu ostohetkellä. Vaikka talous kasvaa tai valuutta romahtaa, tuottosi pysyy samana.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoinilla on merkittävästi tilaa kasvaa, kun käyttöönotto laajenee ja kysyntä kohtaa kiinteän tarjonnan.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Useimpia velkakirjoja pidetään pankkien tai välittäjien kautta, mikä lisää vastapuoliriskiä. Bitcoinin voi pitää itse omassa",
	"bitcoin-vs-bonds::point_6_summary_2": "lompakossa",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — eliminoiden tämän riskin kokonaan.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Velkakirjat riippuvat täysin siitä, että hallitukset maksavat velat takaisin. Jos hallitus jättää velan maksamatta tai leikkaa sitä inflaatiolla, velkakirjanhaltijat häviävät.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin toimii itsenäisesti kaikista hallituksista tai poliittisesta vallasta.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">käteisen</span> välillä",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin liikkuu ympäri maailmaa internetin kautta minuuteissa. Käteinen vaatii fyysistä läsnäoloa tai luotettavia kuriireja — kahdenkympin seteliä ei voi lähettää sähköpostitse.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin toimii kaikkialla samalla tavalla. Käteistä rajoittaa maantiede, valuuttakurssit ja paikallinen hyväksyntä.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Hallitukset voivat mitätöidä käteisen yhdessä yössä — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Intia</a> teki sen 2016. Mutta jopa ilman demonetisaatiota käteinen menettää arvoaan",
	"bitcoin-vs-cash::point_3_summary_2": "inflaation",
	"bitcoin-vs-cash::point_3_summary_3":
		"takia. Bitcoinia ei mikään hallitus tai viranomainen voi mitätöidä.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Käteisen voi väärentää, joskus erittäin vakuuttavasti. Bitcoin käyttää kryptografiaa, joka tekee väärentämisestä matemaattisesti mahdotonta.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoinilla ei ole keskitettyä valtaa. Käteisen laskevat liikkeelle hallitukset, jotka voivat painaa lisää, muuttaa muotoilua tai poistaa seteleitä käytöstä oman harkintansa mukaan.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Käteinen on altis varkauksille, tulipalolle, häviämiselle ja takavarikoinnille. Bitcoinia voi ",
	"bitcoin-vs-cash::point_6_summary_2": "säilyttää turvallisesti itse",
	"bitcoin-vs-cash::point_6_summary_3":
		" puhelimessasi tai laitelompakossa.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoinin voi jakaa 100 miljoonaksi satoshiksi, mikä mahdollistaa minkä tahansa kokoiset mikromaksut. Käteisellä on pienimmät nimellisarvot — senttiä ei voi leikata puoliksi.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">keskuspankin digivaluuttojen (CBDC)</span> välillä",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Kukaan ei voi estää sinua tekemästä bitcoin-transaktioita. CBDC:t on suunniteltu niin, että hallitukset ja keskuspankit voivat valvoa jokaista maksua, rajoittaen yksityisyyttäsi ja vapauttasi.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin ei koskaan vanhene eikä siinä ole kuukausimaksuja. CBDC:t voidaan ohjelmoida vanhenemaan, pakottaen sinut luopumaan tulevaisuutta varten säästämisestä.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoinilla on kiinteä yläraja 21 miljoonaa BTC. CBDC:illa ei ole tarjontarajaa ja ne antavat hallitusten laajentaa rahantarjontaa harkintansa mukaan — aiheuttaen",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflaatiota.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin-osoitteet eivät ole sidoksissa todelliseen henkilöllisyyteesi. CBDC:t on suoraan sidottu hallituksen tunnistamaan henkilöllisyyteen, mahdollistaen massavalvonnan ja taloudellisen sensuurin.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoinin sääntöjä hallitsevat kymmenet tuhannet riippumattomat solmut. CBDC:t on keskitetty hallitusten ja keskuspankkien käsiin, joilla on täysi hallinta verkkoon.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Kuka tahansa voi pyörittää bitcoin-solmua ja valvoa verkon sääntöjä. CBDC:t eivät salli käyttäjien pyörittää solmuja — sinun täytyy luottaa keskitettyyn viranomaiseen.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Itse säilytettyä bitcoinia kukaan ei voi jäädyttää. CBDC:t on suunniteltu niin, että hallitukset ja keskuspankit voivat jäädyttää tilejä hetkessä.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin antaa sinulle täyden hallinnan rahoistasi, kun säilytät sitä",
	"bitcoin-vs-cbdc::point_8_summary_2": "lompakossa.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC:t vaativat luottamusta säilyttäjiin, kuten pankkeihin tai hallituksiin, jotka pitävät rahaa puolestasi.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoinin rahapolitiikka on kiinteä koodissa, eikä sitä voi muuttaa. CBDC:t voidaan ohjelmoida uudelleen poliitikkojen harkinnan mukaan, aiheuttaen",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflaatiota",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", jos liian paljon rahaa painetaan lisää.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin on turvallisin koskaan rakennettu tietokoneverkko, eikä sitä ole koskaan murrettu. CBDC:t luottavat pankkeihin ja hallituksiin, joita on murrettu lukemattomia kertoja.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">kryptovaluuttojen</span> välillä",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoin-protokolla on muuttunut hyvin vähän vuodesta 2009 ja tarjoaa ennakoitavia sääntöjä. Useimmat kryptohankkeet muuttavat jatkuvasti protokollia, tokeniomiikkaa tai haarautuvat uusiksi versioiksi.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin pyörii kymmenillä tuhansilla itsenäisillä solmuilla ympäri maailmaa. Useimpia kryptohankkeita hallitsevat säätiöt, yritykset tai pienet kehittäjäryhmät, jotka voivat tehdä yksipuolisia muutoksia.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoinilla on kiinteä yläraja 21 miljoonaa kolikkoa — niukin digitaalinen omaisuus. Useimmilla kryptohankkeilla on rajaton tarjonta tai mekanismeja uusien tokenien luomiseen mielivaltaisesti, laimentaen haltijoita.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoinilla on yksi tarkoitus: vertaisverkon digitaalinen raha. Kuka tahansa ymmärtää sen ja voi käyttää sitä. Useimmat kryptovaluutat sisältävät monimutkaisia älysopimuksia tai DeFi:tä, joiden turvalliseen käyttöön tarvitaan teknistä tietämystä.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoinin työntodistus on toiminut yli 15 vuotta ilman onnistunutta peruslohkoketjuhyökkäystä. Useimmat kryptohankkeet käyttävät kokeellisia konsensusmenetelmiä, joita ei ole laajasti testattu.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin on digitaalista rahaa — arvonsäilyttäjä ja vaihdon väline. Useimmat kryptotokenit ovat spekulatiivisia käyttö- tai hallintatokeneita, joiden todellinen arvo on epäselvä.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin vahvistuu hyökkäyksen alla ja on selvinnyt jokaisesta kriisistä, kiellosta ja kritiikistä. Useimmat kryptohankkeet kaatuvat sääntely-, tekniseen tai markkinapaineeseen.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoinilla ei ole toimitusjohtajaa, yritystä tai yksittäistä vikapistettä. Useimmat kryptohankkeet riippuvat riskipääomasijoittajista, tietystä johtajistosta tai yhden yrityksen selviytymisestä.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">taiteen</span> välillä",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Jokainen bitcoin on samanlainen ja vaihtokelpoinen. Jokainen taideteos on ainutlaatuinen — eri alkuperä, historia, kunto ja sukupuu tekevät suorasta vertailusta erittäin vaikeaa.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin käy kauppaa 24/7 maailmanlaajuisilla markkinoilla, jotka ovat kaikkien saatavilla. Taide vaatii erikoistuneita huutokauppataloja, yksityisiä jälleenmyyjiä tai gallerioita, ja myynnit voivat kestää kuukausia.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bitcoinin osto tai myynti maksaa alle 1 % maksuissa, usein paljon vähemmän. Taiteen myynnit keräävät 30–40 % ostajan palkkioista, provisioista, vakuutuksista, kuljetuksista ja aitouden todentamismaksuista.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoinin voi jakaa 100 miljoonaksi satoshiksi, mikä tekee siitä ihanteellisen minkä tahansa kokoisiin transaktioihin. Maalauksesta ei voi omistaa osaa tai veistoksen kulmaa ilman vastapuoliriskiä.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoinin omistusoikeus ja aitous voidaan tarkistaa kryptografisesti lohkoketjussa kenen tahansa toimesta. Taiteen aitouden todentaminen on kallista, hidasta ja väärentäjät pettävät sitä säännöllisesti — tuhoten teoksen arvon yhdessä yössä.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Oikein varmuuskopioitu bitcoin selviää tulvista, tulipaloista, maanjäristyksistä ja varkauksista. Taide on altis kaikenlaisille fyysisille katastrofeille ja vakuutus kattaa harvoin kaiken.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Kuka tahansa, jolla on internetyhteys ja hieman rahaa, voi ostaa bitcoinia. Taiteeseen sijoittaminen on käytännössä rajoitettu varakkaille keräilijöille, joilla on pääsy huutokauppoihin ja erikoistuneeseen asiantuntemukseen.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">kullan</span> välillä",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoinin voi lähettää välittömästi internetin kautta matalilla maksuilla. Kulta täytyy lähettää fyysisesti omistuksen siirtämiseksi.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin on alkuperäisesti digitaalinen omaisuus, jonka voi siirtää internetin kautta. Verkossa oleva kulta on digitaalinen velkakirja — omistat vain lupauksen säilyttäjältä, et itse metallia.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoinilla on kiinteä yläraja 21 miljoonaa BTC. Kullan tarjonta kasvaa noin <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6 % vuodessa</a>, pienentäen osuuttasi — vähemmän kuin fiat-rahan",
	"bitcoin-vs-gold::point_3_summary_2": "inflaatio",
	"bitcoin-vs-gold::point_3_summary_3":
		", mutta silti inflaatiota.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Kun kullan hinta nousee, kultaa louhitaan enemmän, mikä työntää hintaa takaisin alas. Bitcoinin tarjonta on joustamaton — riippumatta siitä, kuinka korkealle hinta nousee, aina on vain 21 miljoonaa.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Bitcoin-verkkoa hallitsevat kymmenet tuhannet riippumattomat solmut. Suuri osa fyysisestä kullasta sijaitsee muutamissa suurissa holveissa.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Kuka tahansa voi tarkistaa aidon bitcoinin pyörittämällä täysisolmua — se on vain sovellus. Fyysisen kullan tarkistamiseksi se täytyy sulattaa; sisällä voi olla volframia.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoinin voi jakaa 100 miljoonaksi satoshiksi, mikä tekee siitä ihanteellisen minkä tahansa kokoisiin ostoksiin. Kultaa ei voi helposti jakaa pienempiin transaktioihin.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">kiinteistöjen</span> välillä",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin liikkuu välittömästi minne tahansa maailmassa. Kiinteistö on sidottu sijaintiin ja altis paikallisille taloudellisille, poliittisille ja ympäristöuhille.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoinin voi jakaa 100 miljoonaksi satoshiksi. Kiinteistöä ei voi myydä osittain — keittiön myynti tai puolen makuuhuoneen ostaminen ei ole mahdollista.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin toimii hajautetussa verkossa, jota mikään hallitus ei voi hallita. Kiinteistö on tiukasti säänneltyä — kaavoitus, vuokrasäätely, pakkolunastus ja takavarikointi koskevat kaikki.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin ei vaadi ylläpitoa. Kiinteistö vaatii korjauksia, remontteja, vakuutuksia, kiinteistönhoitoa ja vuokralaisongelmien ratkaisemista.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoinia ei veroteta jatkuvasti — myyntivoittoverot maksetaan vain kun myyt. Kiinteistöstä on maksettava vuosittaisia kiinteistöveroja riippumatta tuloista.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Oikein varmuuskopioitu bitcoin selviää tulipaloista, tulvista ja maanjäristyksistä. Kiinteistö on altis kaikille katastrofeille ja vakuutus kattaa harvoin kaiken.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Jokainen bitcoin on samanlainen ja vaihtokelpoinen. Jokainen kiinteistö on ainutlaatuinen, mikä tekee arvioinnista ja vertailusta vaikeaa.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin käy kauppaa maailmanlaajuisesti 24/7 kaikille, joilla on internetyhteys. Kiinteistöjen myynti on rajoitettu paikallisille ostajille ja voi kestää kuukausia paperien sulkemiseen.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin mahdollistaa kaikille suoran yksilöllisen omistuksen. Kiinteistön ostaminen sijoitukseksi ensiasunnon lisäksi nostaa asuntojen hintoja, vähentää saatavuutta ja luo asuntokriisin.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">osakkeiden</span> välillä",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin on suora omaisuus, jonka omistat täysin. Osakkeet ovat osuus yrityksestä — niiden arvo riippuu johdosta, suorituskyvystä ja päätöksistä, joita sinä et hallitse.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoinilla on kiinteä yläraja 21 miljoonaa BTC. Yritykset voivat laskea liikkeelle uusia osakkeita milloin tahansa ja laimentaa olemassa olevia osakkaita — aivan kuten fiat-rahan",
	"bitcoin-vs-stocks::point_2_summary_2": "inflaatio",
	"bitcoin-vs-stocks::point_2_summary_3":
		" laimentaa käteistä. Bitcoinissa osuutesi ei koskaan pienene.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoinilla ei ole toimitusjohtajaa eikä yksittäistä vikapistettä. Osakkeet riippuvat voimakkaasti johdosta — yksi huono päätös tai avainhenkilön lähtö voi romahduttaa hinnan.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoinin hinta tulee avoimilta maailmanlaajuisilta markkinoilta. Osakkeiden arvostus perustuu mittareihin kuten P/E, jotka voivat piilottaa yliarvostetut osakkeet.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin käy kauppaa 24/7 ympäri maailmaa. Osakemarkkinat ovat auki vain arkisin kaupankäyntiaikoina.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Bitcoinilla voit siirtyä",
	"bitcoin-vs-stocks::point_6_summary_2": "itsesäilytykseen",
	"bitcoin-vs-stocks::point_6_summary_3":
		" yksinkertaisella sovelluksella — välittäjää ei tarvita. Osakkeita säilytetään välittäjillä, mikä altistaa sinut vastapuoliriskille, jos he kaatuvat.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoinin kiinteä tarjonta tekee siitä luotettavan suojan inflaatiota vastaan. Jotkut osakkeet lyövät inflaation, toiset eivät — takeita ei ole.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Ero <span class=\"orange\">bitcoinin</span> ja <span class=\"asset\">Visan</span> välillä",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin on avoin verkko, johon kuka tahansa voi liittyä ilman lupaa. Visa on suljettu järjestelmä, jota hallitsevat rahoituslaitokset, jotka voivat evätä pääsyn — erityisesti pankkitilittömiltä tai rajoitetun pankkipalvelun omaavilta ihmisiltä.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin-transaktioilla ei ole kauppiasmaksuja. Visa veloittaa kauppiailta tyypillisesti noin 3 % per transaktio — yrityksesi voi säästää rahaa hyväksymällä",
	"bitcoin-vs-visa::point_2_summary_2": "bitcoin-maksuja",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Jokainen bitcoin-transaktio on julkisessa ja tarkistettavassa lohkoketjussa. Visa hallinnoi suljettua ja omistusoikeudellista järjestelmää, jossa asiakkaat eivät voi tarkistaa mitään itsenäisesti.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoinia ei voi jäädyttää mikään keskitetty viranomainen. Visa voi jäädyttää tilejä, estää transaktioita tai kieltäytyä palvelusta milloin tahansa.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin on lopullinen selvitys — kulutat vain sen, mitä sinulla on. Luottokortit synnyttävät velkaa korkokannoilla, jotka usein ylittävät 25 % vuodessa.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin mahdollistaa siirtymisen",
	"bitcoin-vs-visa::point_6_summary_2": "itsesäilytykseen",
	"bitcoin-vs-visa::point_6_summary_3":
		" ilman pankkia tai maksunkäsittelijää. Luottokortit vaativat aina välikäsiä.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin toimii 24/7 maailmanlaajuisesti ilman aukioloaikoja. Visalla on toiminta-aikoja, huoltokatkoja ja maantieteellisiä rajoituksia, jotka voivat estää transaktioita.",
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
		`translate-rest-part1 (fi): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
