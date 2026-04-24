#!/usr/bin/env node
/**
 * Finnish manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/*,
 *         sticker-language-success, sticker-success, stickers, wallets.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli -kirjanpitopalvelut",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Yksinkertainen opas bitcoin-maksujen kirjanpitoon — hybridilompakot, hankintahinta, myyntivoitot ja milloin soittaa kirjanpitäjällesi.",
	"business/accounting::accounting_s1_c1":
		"Yksinkertaisin tapa ottaa bitcoinia vastaan on käyttää hybridilompakkoa, joka myy automaattisesti 100 % vastaanotetusta bitcoinista dollareiksi (tai paikalliseksi valuutaksesi) heti, kun maksu saapuu.",
	"business/accounting::accounting_s1_c2":
		"Tällä asetuksella kirjanpitosi näyttää täsmälleen samalta kuin tänään — loppusumma on joka kerta dollareissa. Ei hankintahintaa, ei myyntivoittoja, ei uusia taulukoita.",
	"business/accounting::accounting_s2":
		"Jos pidät osan bitcoinista: seuraa hankintahintaasi",
	"business/accounting::accounting_s2_c1":
		"Jotkut yritykset päättävät pitää osan vastaanotetusta bitcoinista sen sijaan, että muuntaisivat kaiken automaattisesti. Jos tämä olet sinä, lisäaskel on hankintahinnan seuranta — jokaisen bitcoin-maksun dollariarvo päivänä, jolloin sen sait.",
	"business/accounting::accounting_s2_c2":
		"Vaikka ajattelisit yritystäsi pelkästään bitcoinina, useimmat verottajat haluavat silti, että raportoit dollariarvot. Hyvä uutinen: se on vain kaksi numeroa per tapahtuma — kuinka paljon bitcoinia sait ja sen dollariarvo sinä päivänä.",
	"business/accounting::accounting_s2_c3":
		"Käytä alla olevia työkaluja automatisoimaan hintahaut, jotta sinun ei tarvitse tarkistaa hintoja joka päivä.",
	"business/accounting::accounting_s3":
		"Pidetyn bitcoinin kuluttaminen tai myyminen",
	"business/accounting::accounting_s3_c1":
		"Jos muunnat jokaisen maksun automaattisesti dollareiksi, ohita tämä osio — se ei koske sinua.",
	"business/accounting::accounting_s3_c2":
		"Jos olet pitänyt osan bitcoinista ja päätät kuluttaa tai myydä sen myöhemmin, lisää myyntihinta samaan taulukkoon hankintahinnan kanssa. Ero sen välillä, mitä bitcoin maksoi kun sait sen, ja mitä se maksaa kun kulutat tai myyt sen, on myyntivoitto tai -tappio.",
	"business/accounting::accounting_s3_c3": "Kaksi nopeaa esimerkkiä:",
	"business/accounting::accounting_s4":
		"Tarvitsetko ammattilaisen, joka ymmärtää bitcoinia?",
	"business/accounting::accounting_s4_c1":
		"Jos haluat, että joku toinen hoitaa tämän — tai jos bitcoin-kirjanpitosi on monimutkaisempi kuin mitä hybridilompakko voi käsitellä — suosittelemme lämpimästi Satoshi Pacioli Accounting Servicesiä, yritystä joka on erikoistunut yritysten bitcoin-kirjanpitoon.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin-kirjanpito yrityksellesi",
	"business/accounting::accounting_card_bpr_label": "BITCOININ HINTA",
	"business/accounting::accounting_card_bpr_title":
		"Etsi bitcoinin nykyisiä tai historiallisia hintoja dollareissa",
	"business/accounting::accounting_card_pacioli_label":
		"BITCOIN-KIRJANPITÄJÄ",
	"business/accounting::accounting_card_spreadsheet_label":
		"TUO EXCELIIN",
	"business/accounting::accounting_card_spreadsheet_title":
		"Tuo bitcoinin hinnat automaattisesti Exceliin",
	"business/accounting::accounting_card_wallets_label":
		"HYBRIDILOMPAKOT",
	"business/accounting::accounting_card_wallets_title":
		"Katso suosittelemamme lompakot yrityksille",
	"business/accounting::accounting_disclaimer":
		"Tämä opas on vain tiedoksi, eikä se ole veroneuvontaa. Tilanteeseesi sopivaa veroneuvontaa varten käänny pätevän kirjanpitäjän puoleen.",
	"business/accounting::accounting_disclaimer_label": "Vastuuvapauslauseke",
	"business/accounting::accounting_example_feb_1": "1. helmikuuta",
	"business/accounting::accounting_example_gain_badge":
		"Myyntivoitto",
	"business/accounting::accounting_example_gain_explain":
		"Kirjaat 10 $ myyntivoiton.",
	"business/accounting::accounting_example_jan_1": "1. tammikuuta",
	"business/accounting::accounting_example_loss_badge":
		"Myyntitappio",
	"business/accounting::accounting_example_loss_explain":
		"Kirjaat 10 $ myyntitappion.",
	"business/accounting::accounting_example_received_label": "Vastaanotettu",
	"business/accounting::accounting_example_sold_label":
		"Myyty tai kulutettu",
	"business/accounting::accounting_hero_subtitle":
		"Bitcoinin vastaanottaminen yrityksessäsi ei tarvitse tehdä kirjanpidostasi monimutkaista. Tässä on lyhyt versio — sekä työkalut ja asiantuntijat, jotka tekevät siitä kivuttoman.",
	"business/accounting::accounting_intro_c1":
		"Jos otat jo vastaan käteistä tai kortteja, bitcoinin lisääminen yrityksesi kirjanpitoon on helpompaa kuin luulet. Sinulla on kaksi tietä: muunna jokainen bitcoin-maksu automaattisesti dollareiksi heti kun se saapuu (uutta kirjanpitoa ei tarvita) tai pidä osa bitcoinina (sinun täytyy seurata muutamaa lisälukua).",
	"business/accounting::accounting_intro_c2":
		"Tämä opas käy molemmat tiet läpi — jotta voit valita sen, mikä sopii yrityksellesi, ja aloittaa bitcoinin vastaanottamisen luottavaisin mielin.",
	"business/accounting::accounting_s1":
		"Helppo tie: automaattinen muunto dollareiksi",
	"business/accounting::accounting_s3_c6":
		"Ja siinä se. Perusmatematiikka on sama kuin käyttäisit minkä tahansa muun omaisuuden kanssa, jonka arvo nousee tai laskee.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — bitcoinin nykyinen ja historiallinen hinta dollareissa",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — bitcoin-kirjanpito yrityksille",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — kryptohintojen tuonti Exceliin",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Lyhyet vastaukset kysymyksiin, joita kauppiaat yleensä esittävät ennen bitcoinin vastaanottamisen aloittamista — maksut, selvitys, lompakot, takaisinmaksuvaatimukset, kulut ja paljon muuta.",
	"business/faq::faq_intro_c1":
		"Klikkaa alla mitä tahansa kysymystä avataksesi vastauksen. Kun olet valmis aloittamaan bitcoinin vastaanottamisen, sivun lopussa olevat yritystyökalut ohjaavat sinua vaihe vaiheelta.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "KIRJANPITO",
	"business/index::biz_label_faq": "USEIN KYSYTYT KYSYMYKSET",
	"business/index::biz_label_maps": "KAUPPIASKARTAT",
	"business/index::biz_label_rewards": "PALKKIOT",
	"business/index::biz_label_stickers": "TARRAT",
	"business/index::biz_label_wallets": "LOMPAKOT",
	"business/index::biz_meta_description":
		"Ota yrityksessäsi vastaan bitcoinia pienemmillä maksuilla, välittömällä selvityksellä, ilman takaisinmaksuvaatimuksia ja saa lisää asiakkaita.",
	"business/index::business_hero_subtitle":
		"Ota maksuja vastaan pienemmillä maksuilla, selvitä hetkessä ja tavoita miljoonia uusia asiakkaita — ilman sopimuksia ja piilokuluja.",
	"business/index::business_intro_c1":
		"Bitcoin antaa yrityksellesi nopeamman, halvemman ja yksityisemmän tavan ottaa maksuja vastaan. Ei välikäsiä. Ei takaisinmaksuvaatimuksia. Ei sopimuksia. Vain rahaa, joka selviää sekunneissa suoraan asiakkaalta sinulle.",
	"business/index::business_intro_c2":
		"Alla on lyhyt versio siitä, miksi bitcoin on hyödyksi yritykselle — ja alla on kaikki työkalut, joita tarvitset aloittaaksesi sen vastaanottamisen jo tänään.",
	"business/index::business_resources_heading":
		"Kaikki, mitä tarvitset bitcoinin vastaanottamiseen",
	"business/index::business_resources_intro":
		"Käy nämä työkalut läpi omaan tahtiisi. Jokainen on lyhyt käytännöllinen opas.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Kerro meille yrityksestäsi",
	"business/maps::biz_maps_form_intro":
		"Tarvitsemme vain muutamia tietoja, jotta voimme laittaa sinut kartalle. Säilytämme osoitetietoja vain niin kauan kuin on tarpeen lähettääksemme yrityksesi karttoihin.",
	"business/maps::biz_maps_hero_subtitle":
		"Lisää yrityksesi ilmaiseksi BTC Mapiin — avoin maailmanlaajuinen bitcoinia hyväksyvien kauppiaiden luettelo — jotta lähellä olevat bitcoin-käyttäjät voivat löytää sinut ja kuluttaa bitcoinia luonasi.",
	"business/maps::biz_maps_hero_title":
		"Laita yrityksesi bitcoin-kauppiaskartoille",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin-käyttäjät etsivät aktiivisesti paikkoja, joissa kuluttaa rahaansa. Kartalla oleminen laittaa yrityksesi jokaisen bitcoin-käyttäjän silmiin, joka etsii lähellä olevaa paikkaa syödä, ostaa tai yöpyä — täysin ilmaiseksi.",
	"business/maps::biz_maps_intro_c2":
		"Täytä vain alla oleva lyhyt lomake ja lähetämme yrityksesi BTC Mapiin ja muihin bitcoin-kauppiaskarttoihin.",
	"business/maps::biz_maps_meta_description":
		"Lisää yrityksesi ilmaiseksi BTC Mapiin ja muihin bitcoin-kauppiaskarttoihin, jotta lähellä olevat bitcoin-käyttäjät löytävät sinut.",
	"business/maps::biz_maps_placeholder_address": "Katu ja talon numero",
	"business/maps::biz_maps_placeholder_category":
		"Luokka (esim. ravintola, kahvila, hotelli)",
	"business/maps::biz_maps_placeholder_city": "Kaupunki",
	"business/maps::biz_maps_placeholder_country": "Maa",
	"business/maps::biz_maps_placeholder_name": "Yrityksen nimi",
	"business/maps::biz_maps_placeholder_region":
		"Alue / maakunta / osavaltio",
	"business/maps::biz_maps_placeholder_website": "Verkkosivusto (valinnainen)",
	"business/maps::biz_maps_view_map_cta": "Katso BTC Mapia",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Katso BTC Mapia",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Kiitos, että lähetit yrityksesi. Laitamme sinut pian bitcoin-kauppiaskartoille.",
	"business/maps-success::biz_maps_success_hero_title":
		"Pyyntö vastaanotettu 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Yrityksesi lisätään BTC Mapiin ja muihin bitcoin-kauppiasluetteloihin 1–2 viikon sisällä. Tarkistamme jokaisen ilmoituksen manuaalisesti säilyttääksemme karttojen tarkkuuden.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Kun ilmoituksesi on verkossa, lähellä olevat bitcoin-käyttäjät löytävät yrityksesi ja tulevat kuluttamaan bitcoinia.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Mitä tapahtuu seuraavaksi",
	"business/maps-success::biz_maps_success_view_c1":
		"Kun odotat, katso BTC Mapia nähdäksesi kasvavan yritysverkoston ympäri maailmaa, jotka ottavat vastaan bitcoinia.",
	"business/maps-success::biz_maps_success_view_header":
		"Katso, missä tulet näkyviin",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Lataa englanninkieliset tarratiedostot tulostaaksesi ”Hyväksymme bitcoinin” -tarrasi.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Tulosta ”Hyväksymme bitcoinin” -tarrasi englanniksi kertoaksesi asiakkaille, että otat bitcoinia vastaan.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Lataa englanninkieliset ”Hyväksymme bitcoinin” -tarratiedostot",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Kiitos, että pyysit ”Hyväksymme bitcoinin” -tarratiedostoja kielelläsi.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Pyyntö vastaanotettu 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Luomme ja julkaisemme tarratiedostosi 3–4 viikon sisällä. Kun ne ovat valmiit, voit ladata ne ilmaiseksi tarratiedostosivultamme ja tulostaa.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Julkaisemme tarratiedostoja erissä, joten voi kestää useita viikkoja ennen kuin kielesi aktivoituu. Kiitos kärsivällisyydestäsi!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Mitä tapahtuu seuraavaksi",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Tilaa suurerin",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Pyydä vielä yksi ilmainen pakkaus",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Saat ilmaiset ”Hyväksymme bitcoinin” -tarrasi 2–4 viikon sisällä yksinkertaisessa valkoisessa kirjekuoressa 3 tarran kera.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Tarrasi ovat matkalla 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Jos 3 tarraa ei riitä yrityksellesi, voit rohkeasti pyytää vielä yhden ilmaisen pakkauksen — tai tilata suurerin samasta painotalosta, jota me käytämme.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Tarvitsetko lisää tarroja?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Pääoven tai näyteikkunan viereen, jotta asiakkaat näkevät sen ennen sisääntuloa",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Kassan lähelle, maksupäätteen viereen tai sinne, missä asiakkaat maksavat",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Ruokalistoille, hintalistoille tai tippipurkkiin",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Älä laita niitä paikkoihin, jotka eivät kuulu sinulle tai joihin sinulla ei ole lupaa laittaa tarroja",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Hyviä paikkoja tarrojen laittamiseen",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Kerro asiakkaille, että otat bitcoinia vastaan. Tilaa ilmainen pakkaus ”Hyväksymme bitcoinin” -tarroja laitettavaksi toimipisteessäsi.",
	"business/stickers::biz_stickers_hero_title":
		"Ilmaiset ”Hyväksymme bitcoinin” -tarrat",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoinin vastaanottaminen on vain puolet työstä — asiakkaidesi täytyy myös tietää siitä. Nämä pienet ”Hyväksymme bitcoinin” -tarrat on suunniteltu laitettavaksi pääoveen, kassaan, ruokalistaan tai mihin tahansa paikkaan, jossa asiakkaat näkevät ne ennen maksamista.",
	"business/stickers::biz_stickers_intro_c2":
		"Lähetämme ilmaisen pakkauksen mihin tahansa osoitteeseen Yhdysvalloissa tai Kanadassa, tai voit myös tulostaa tarrasi itse missä tahansa maailmassa.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — ilmainen postitse",
	"business/stickers::biz_stickers_option_print":
		"🌍 Maailmanlaajuisesti — tulosta itse",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 Yhdysvallat — ilmainen postitse",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Käännös lauseesta ”Bitcoin Accepted Here”",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Käännös lauseesta ”Scan to learn why Bitcoin is good for business.”",
	"business/stickers::biz_stickers_print_c1":
		"Voit tulostaa ”Hyväksymme bitcoinin” -tarrasi missä tahansa asut. Klikkaa alla olevaa kieltäsi ladataksesi tarratiedostot ja tulostusohjeet.",
	"business/stickers::biz_stickers_print_header":
		"Tulosta tarratiedostosi itse",
	"business/stickers::biz_stickers_request_c1":
		"Täytä alla oleva lomake pyytääksesi ”Hyväksymme bitcoinin” -tarratiedostoja paikallisella kielelläsi. Ilmoitamme, kun ne ovat valmiit.",
	"business/stickers::biz_stickers_request_header":
		"Eikö kieltäsi näy?",
	"business/stickers::biz_stickers_step_description":
		"Lähetämme ilmaisia pakkauksia osoitteisiin Yhdysvalloissa ja Kanadassa. Muualla maailmassa voit tulostaa tarrasi itse.",
	"business/stickers::biz_stickers_step_header":
		"Miten haluat tarrasi?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Kaikki bitcoin-lompakot toimivat keskenään — valitse se, joka sopii yrityksellesi. Ilmainen, välittömillä selvityksillä, ilman takaisinmaksuvaatimuksia.",
	"business/wallets::sources_breez_business":
		"Breez — vain bitcoinia tukeva Lightning-lompakko",
	"business/wallets::sources_ibex":
		"IBEX — Lightning-maksuinfrastruktuuri",
	"business/wallets::sources_opennode":
		"OpenNode — bitcoin-maksunkäsittelijä",
	"business/wallets::sources_square":
		"Square — vastaanota bitcoin-maksuja",
	"business/wallets::sources_zaprite":
		"Zaprite — bitcoin-laskutus yrityksille",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin-lompakot ovat ilmaisia. Valitse se, joka sopii yrityksellesi — paikan päällä, verkossa tai laskujen perusteella — ja aloita bitcoinin vastaanottaminen minuuteissa.",
	"business/wallets::wallets_section_invoice":
		"Lompakot asiakkaita laskuttaville yrityksille",
	"business/wallets::wallets_section_invoice_intro":
		"Jos laskutat asiakkaita (konsultointi, freelance-työ, B2B-palvelut), käytä laskutukseen rakennettua lompakkoa. Asiakas maksaa bitcoin-laskun muutamalla klikkauksella.",
	"business/wallets::wallets_section_multiple":
		"Lompakot usean työntekijän yrityksille",
	"business/wallets::wallets_section_multiple_intro":
		"Jos sinulla on tiimi, joka ottaa maksuja vastaan kassalla, valitse lompakko, joka tukee monen työntekijän kirjautumista — jotta jokaisella työntekijällä on oma PIN ja säilytät selkeän kirjauksen siitä, kuka sai minkäkin maksun.",
	"business/wallets::wallets_section_online":
		"Lompakot verkkoyrityksille",
	"business/wallets::wallets_section_online_intro":
		"Myytkö verkossa? Nämä lompakot yhdistyvät verkkokauppaasi ja ottavat vastaan bitcoinia kaikilta asiakkailta ympäri maailmaa — ilman takaisinmaksuvaatimuksia ja ilman kauppiastilin tarvetta.",
	"business/wallets::wallets_section_sole":
		"Lompakot yksinyrittäjille",
	"business/wallets::wallets_section_sole_intro":
		"Jos pyörität kauppaa, kahvilaa, studiota tai palvelua yksin, mikä tahansa näistä lompakoista sopii sinulle. Valitse sen mukaan, haluatko pitää bitcoin-maksut itselläsi vai muuntaa osan jokaisesta maksusta automaattisesti paikalliseksi valuutaksesi.",
	"business/wallets::wallets_strike_note":
		"Strike Business antaa sinun ottaa vastaan bitcoin- ja Lightning-maksuja nollamaksuilla ja välittömillä selvityksillä. Tukee paikan päällä, verkossa ja laskutusmaksuja, valinnaisella automaattisella muunnolla paikalliseksi valuutaksi.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Hyväksymme bitcoinin",
	"business/why::why_good_for_you":
		"Miksi bitcoin on hyödyksi myös sinulle",
	"business/why::why_learn_more_lowercase": "Lue lisää →",
	"business/why::why_s1_c1":
		"Inflaatio syntyy, kun rahaa painetaan tai luodaan tyhjästä. Se saa taskussasi olevan rahan menettämään arvoaan ajan myötä — ja siksi hinnat nousevat vuosi vuodelta.",
	"business/why::why_s1_c2":
		"Bitcoinilla on kiinteä tarjonta 21 miljoonaa kolikkoa. Mikään hallitus, pankki tai yritys ei voi painaa lisää. Bitcoin-säästösi säilyttävät arvonsa ajan myötä sen sijaan, että menettäisivät sen hiljaa.",
	"business/why::why_s2_c1":
		"Viime vuosina monet yhdysvaltalaiset pankit ovat kaatuneet pankkipaniikkien takia. Kun liian monet asiakkaat yrittivät nostaa rahansa samaan aikaan, pankeilla ei ollut tarpeeksi käteistä maksaakseen kaikille.",
	"business/why::why_s2_c2":
		"Sen sijaan, että pankit vain säilyttäisivät rahojasi, ne lainaavat ja sijoittavat suurimman osan niistä pois. Jos nämä sijoitukset epäonnistuvat — tai tallettajat menettävät luottamuksensa — pankki voi kaatua ja talletuksesi voivat jäätyä tai kadota.",
	"business/why::why_s2_c3":
		"Bitcoinilla voit pitää rahasi suoraan omassa lompakossasi. Ei pankkia. Ei välikäsiä. Ei pankkipaniikkia.",
	"business/why::why_s3_c1":
		"Toisin kuin luottokortit, PayPal tai perinteiset pankkitilit, bitcoin ei tarvitse kenenkään lupaa.",
	"business/why::why_s3_c2":
		"Kukaan ei voi jäädyttää tiliäsi, estää maksua tai poistaa sinua verkosta. Se on ensimmäinen finanssijärjestelmä historiassa, jota voit käyttää vapaasti ilman sensuurin tai takavarikoinnin pelkoa.",
	"business/why::why_s4_c1":
		"Bitcoin ymmärretään usein väärin, mutta se tekee hiljaa paljon hyvää maailmassa.",
	"business/why::why_s4_c2":
		"Se on auttanut ihmisoikeusaktivisteja heidän vapaustaistelussaan, vähentänyt maailmanlaajuisia metaanivuotoja kaatopaikoilta ja öljyporauksista, vakauttanut sähköverkkoja ja rahoittanut julkisia hyödykkeitä kuten kansallispuistoja.",
	"business/why::why_biz_s1":
		"Pienemmät maksut, enemmän yritykselle",
	"business/why::why_biz_s1_c1":
		"Bitcoin-maksut välttävät pankit ja korttiyhtiöt, jotka ottavat itselleen 2–3 % jokaisesta myynnistä. Yritys pitää enemmän siitä, mitä maksat — mikä usein tarkoittaa sinulle parempia hintoja ja parempaa palvelua.",
	"business/why::why_biz_s2":
		"Välitön selvitys, ilman takaisinmaksuvaatimuksia",
	"business/why::why_biz_s2_c1":
		"Bitcoin-maksut selvitetään sekunneissa, suoraan lompakostasi yritykselle. Ei tarvitse odottaa päiviä, että pankki vapauttaa rahat, eikä kalliita takaisinmaksuriitoja — mikä tarkoittaa, että yritys voi keskittyä asiakkaiden palveluun sen sijaan, että taistelisi huijareita vastaan.",
	"business/why::why_biz_s3":
		"Ilmainen vastaanottaminen, avoin kaikille",
	"business/why::why_biz_s3_c1":
		"Bitcoinin vastaanottamisessa yrityksellä ei ole sopimuksia, kuukausimaksuja tai käyttöönottokuluja. Ja miljoonat bitcoin-käyttäjät ympäri maailmaa etsivät aktiivisesti sitä hyväksyviä kauppiaita — antaen tälle yritykselle ilmaisen näkyvyyden uusille asiakkaille.",
	"business/why::why_business_cta_intro":
		"Onko sinulla yritys ja haluatko aloittaa bitcoinin vastaanottamisen?",
	"business/why::why_business_cta_link":
		"Katso, miten se toimii →",
	"business/why::why_for_business":
		"Miksi bitcoin on hyödyksi tälle yritykselle",
	"business/why::why_for_business_intro":
		"Ottamalla vastaan bitcoinia tämä yritys pitää enemmän jokaisesta myynnistä, saa maksuja hetkessä ilman takaisinmaksuvaatimuksia ja tavoittaa maailmanlaajuisen bitcoin-käyttäjien yleisön — ilman sopimuksia tai kuukausimaksuja.",
	"business/why::why_good_for_you_intro":
		"Bitcoin ei ole hyödyksi vain kassalla — se on parempi rahamuoto, joka suojaa säästöjäsi, yksityisyyttäsi ja vapauttasi tehdä transaktioita. Tässä on nopea yhteenveto.",
	"business/why::why_hero_subtitle":
		"Skannasit juuri ”Hyväksymme bitcoinin” -tarran. Tässä on miksi se on hyvä uutinen — sekä tälle yritykselle että sinulle.",
	"business/why::why_intro_c1":
		"Yritys, jossa vierailet, ottaa vastaan bitcoinia — modernin, avoimen lähdekoodin maksuverkon, jota kuka tahansa ympäri maailmaa voi käyttää, ilman että pankit ja välikädet ottavat osansa.",
	"business/why::why_intro_c2":
		"Alla on lyhyt versio siitä, miksi tälle yritykselle on hyödyksi ottaa vastaan bitcoinia, sekä miksi sinun on asiakkaana hyödyksi käyttää bitcoinia.",
	"business/why::why_next_business_label": "HYVÄKSY BITCOIN",
	"business/why::why_next_business_title":
		"Hyväksy bitcoinia yrityksessäsi",
	"business/why::why_next_buy_label": "OSTA BITCOINIA",
	"business/why::why_next_buy_title": "Osta ensimmäinen bitcoinisi",
	"business/why::why_next_learn_label": "OPI LISÄÄ",
	"business/why::why_next_learn_title": "Opi lisää bitcoinista",
	"business/why::why_next_wallet_label": "HANKI LOMPAKKO",
	"business/why::why_next_wallet_title":
		"Hanki oma bitcoin-lompakkosi",
	"business/why::why_whats_next_heading": "Minne seuraavaksi?",
	"business/why::why_whats_next_intro":
		"Jos tämä on ensimmäinen kertasi skannata bitcoin-tarra, tässä ovat hyödyllisimmät paikat jatkaa.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Vertaisverkko (suoraan käyttäjien välillä)",
	"buy::buy_bitcoin_guide": "Miten ostaa bitcoinia",
	"buy::buy_step_1_header": "Valitse maasi",
	"buy::buy_step_2_header": "Valitse maksutapasi",
	"buy::buy_step_3_header": "Ostovaihtoehtosi",
	"buy::buy_step_4_header": "Säilytä bitcoinisi turvallisesti",
	"buy::buy_header_subtitle":
		"Yksinkertainen vaihe vaiheelta -opas ensimmäisen bitcoinisi ostamiseen.",
	"buy::buy_howto_name": "Miten ostaa bitcoinia",
	"buy::buy_meta_description":
		"Opi ostamaan bitcoinia turvallisesti vaihe vaiheelta -oppaamme avulla. Valitse maasi ja maksutapasi löytääksesi parhaat bitcoinin ostovaihtoehdot.",
	"buy::buy_step_1_eyebrow": "Vaihe 1",
	"buy::buy_step_2_eyebrow": "Vaihe 2",
	"buy::buy_step_3_eyebrow": "Vaihe 3",
	"buy::buy_step_4_eyebrow": "Vaihe 4",
	"buy::buy_storage_cta_label": "Seuraava askel",
	"buy::sources_bisq":
		"Bisq — hajautettu vertaisverkko bitcoin-pörssi",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — maailmanlaajuinen bitcoin-automaattien luettelo",
	"buy::sources_kraken": "Kraken — tunnustettu bitcoin-pörssi",
	"buy::sources_relai":
		"Relai — sveitsiläinen itsesäilytys-bitcoin-sovellus",
	"buy::sources_river":
		"River — vain bitcoinin osto, louhinta ja säilytys",
	"buy::sources_strike_lightning":
		"Strike — bitcoinin osto Lightning-verkon tuella",
	"buy::sources_swan":
		"Swan Bitcoin — vain bitcoinin dollarikeskiarvoistus (DCA)",
	"buy::buy_bitcoin": "Osta bitcoinia",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Lisää kieli",
	"common::common_next_buy_bitcoin": "Osta bitcoinia",
	"common::common_next_buy_bitcoin_desc":
		"Opi, miten ostaa bitcoinia turvallisesti",
	"common::common_next_calculate": "Laske inflaatiosi",
	"common::common_next_calculate_desc":
		"Katso, miten inflaatio vaikuttaa palkkaasi ajan myötä",
	"common::common_next_get_wallet": "Hanki lompakko",
	"common::common_next_get_wallet_desc":
		"Hanki ensimmäinen bitcoin-lompakkosi — se on ilmainen",
	"common::common_next_keep_learning": "Jatka oppimista",
	"common::common_next_keep_learning_desc":
		"Katso, miten bitcoin tekee maailmasta paremman",
	"common::common_source_bls_cpi":
		"Yhdysvaltain työtilastovirasto — kuluttajahintaindeksi (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — rahan tarjonta (indeksi luokittain)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — ”Voiko valtion velkakirjojen huutokauppa epäonnistua?”",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Mitä seuraavaksi?",
	"common::common_sticker_files_mission_5": "pyydä pakkaus",
	"common::common_site_tagline": "Bitcoin-koulutus kaikille.",
	"common::common_source_btc_map":
		"BTC Map — maailmanlaajuinen bitcoinia hyväksyvien kauppiaiden luettelo",
	"common::common_source_btcpayserver":
		"BTCPay Server — ilmainen ja avoimen lähdekoodin itse-isännöitävä bitcoin-maksunkäsittelijä",
	"common::common_source_oshi":
		"Oshi — bitcoin-palkkioalusta kauppiaille",
	"common::common_source_strike_business":
		"Strike — bitcoin- ja Lightning-maksut yrityksille",
	"common::common_sources_group_bitcoin": "Bitcoin-tiedot",
	"common::common_sources_group_cpi":
		"Inflaatio / kuluttajahintaindeksi",
	"common::common_sources_group_debt": "Valtionvelka",
	"common::common_sources_group_money": "Rahan tarjonnan tiedot",
	"common::common_sources_group_stories": "Tosielämän esimerkkejä",
	"common::common_sticker_files_mission_6":
		"ilmaisia englanninkielisiä tarroja.",
	"common::common_sticker_files_next_flyers_label": "Esitteet",
	"common::common_sticker_files_next_flyers_title":
		"Tulosta bitcoin-esite",
	"common::common_sticker_files_next_languages_label":
		"Tarratiedostot",
	"common::common_sticker_files_next_languages_title":
		"Katso tarratiedostoja muilla kielillä",
	"common::common_sticker_files_print_these":
		"TULOSTA NÄMÄ YHDELLÄ KLIKKAUKSELLA",
	"common::common_sticker_name_bdhi_black":
		"Tarra ”Bitcoin Doesn\u2019t Have Inflation” (musta)",
	"common::common_sticker_name_bdhi_orange":
		"Tarra ”Bitcoin Doesn\u2019t Have Inflation” (oranssi)",
	"common::common_sticker_name_caution":
		"Bitcoin-tarra ”Caution! Melting Ice Cube”",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin-tarra ”Cure Inflation”",
	"common::common_sticker_name_danger":
		"Bitcoin-tarra ”Danger! Inflation Ahead”",
	"common::common_sticker_name_fix":
		"Bitcoin-tarra ”Fix The Money, Fix The World”",
	"common::common_sticker_name_got_inflation":
		"Bitcoin-tarra ”Got Inflation?”",
	"common::common_sticker_name_study":
		"Tarra ”Study Bitcoin”",
	"common::common_sticker_name_warning":
		"Bitcoin-tarra ”Warning! Inflation is Stealing Your Savings”",
	"common::common_sticker_name_what_if":
		"Bitcoin-tarra ”What if your money didn\u2019t have inflation?”",
	"common::common_sticker_tips_heading": "Tarravinkit",
	"common::common_sticker_tips_intro":
		"Kun olet tulostanut tarrasi, laita ne sinne, missä ihmiset näkevät ne! Hyviä paikkoja ovat:",
	"common::common_sticker_tips_list_1":
		"julkiset paikat, joissa ihmiset huomaavat ne",
	"common::common_sticker_tips_list_2":
		"paikat, joista niitä ei todennäköisesti heti poisteta (tarrat eivät aiheuta pysyviä vahinkoja)",
	"common::common_sticker_tips_list_3":
		"pinnat, joihin ne tarttuvat hyvin (metalli, muovi, lasi)",
	"common::common_sticker_tips_list_4":
		"EI yksityisomaisuudelle, liikennemerkkeihin, pankkiautomaatteihin tai polttoainepumppuihin",
	"common::common_stickers_printer_prefix": "Me käytämme",
	"common::common_stickers_printer_suffix":
		"mutta voit käyttää mitä tahansa tarrapainoa.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — kuluttajahintaindeksi kaikille kaupunkikuluttajille",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — rahan tarjonta M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Laske inflaatiokuilusi",
	"compound-inflation-calculator::cic_cta_label": "Seuraava askel",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Selvitä, kuinka paljon palkkasi täytyy nousta pitääkseen tahtia inflaation kanssa.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Tutki lisää aiheita",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Katso, miten bitcoin liittyy rahaan, vapauteen, energiaan ja muuhun.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Opi, miten inflaatio toimii",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Miten tulostaa ja laittaa ylös nämä bitcoin-esitteet",
	"flyers::flyers_hero_subtitle":
		"Ilmaiset tulostettavat bitcoin-esitteet. Laita ne julkisille paikoille auttaaksesi useampia ihmisiä oppimaan bitcoinista.",
	"flyers::flyers_hero_title": "Tulosta ja laita ylös bitcoin-esitteitä",
	"flyers::flyers_next_get_stickers": "Levitä viestiä",
	"flyers::flyers_next_get_stickers_desc":
		"Tilaa ilmainen pakkaus bitcoin-tarroja",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Osallistu ja auta levittämään bitcoinia",
	"get-involved::get_involved_business_content_1":
		"Haluatko auttaa rakentamaan bitcoin-kiertotaloutta? Helpoin tapa on auttaa paikallisia yrityksiä aloittamaan bitcoin-maksujen vastaanottaminen.",
	"get-involved::get_involved_business_content_2":
		"Tiedätkö yrityksen, joka voisi olla avoin? Ohjaa omistaja sivullemme",
	"get-involved::get_involved_business_content_3":
		"Bitcoin yrityksille.",
	"get-involved::get_involved_description":
		"Ilmaiset työkalumme tekevät bitcoinin käyttöönoton levittämisestä helppoa. Tarroja, esitteitä, ”Hyväksymme bitcoinin” -tarroja yrityksille ja avointa lähdekoodia, johon jokainen voi osallistua.",
	"get-involved::get_involved_header":
		"Osallistu ja auta levittämään bitcoinia.",
	"get-involved::get_involved_intro_5":
		"Voit auttaa muuttamaan tätä. Olemme luoneet joitakin ilmaisia työkaluja, jotka tekevät bitcoinin tuoman toivon levittämisestä yhteisössäsi helppoa.",
	"get-involved::get_involved_biz_stickers_note":
		"Otatko jo bitcoinia vastaan? Kerro asiakkaillesi ilmaisilla ”Hyväksymme bitcoinin” -tarroillamme. Lähetämme pakkauksen mihin tahansa osoitteeseen Yhdysvalloissa tai Kanadassa, tai voit myös tulostaa missä tahansa maailmassa.",
	"get-involved::get_involved_card_biz_stickers_label":
		"”Hyväksymme tässä” -tarrat",
	"get-involved::get_involved_card_biz_stickers_source":
		"Lähde: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Ilmaiset ”Hyväksymme bitcoinin” -tarrat yrityksellesi",
	"get-involved::get_involved_card_business_label":
		"Bitcoin yrityksille",
	"get-involved::get_involved_card_business_source":
		"Lähde: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Kaikki mitä yritys tarvitsee aloittaakseen bitcoin-maksujen vastaanottamisen",
	"get-involved::get_involved_card_flyers_label": "Tulostettavat esitteet",
	"get-involved::get_involved_card_flyers_source":
		"Lähde: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Lataa ja tulosta ilmainen bitcoin-esite",
	"get-involved::get_involved_card_github_label": "Avoin lähdekoodi",
	"get-involved::get_involved_card_github_source": "Lähde: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Osallistu bitcoin.rocksiin GitHubissa",
	"get-involved::get_involved_card_stickers_label":
		"Ilmaiset tarrat",
	"get-involved::get_involved_card_stickers_source":
		"Lähde: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Tilaa ilmainen pakkaus bitcoin-tarroja suoraan kotiovellesi",
	"get-involved::get_involved_flyers_content_1":
		"Esitteet ovat yksi helpoimmista tavoista esitellä bitcoinia yhteisöllesi. Lataa ilmainen tulostettava bitcoin-esitteemme, tulosta niin monta kopiota kuin haluat, ja laita ne ilmoitustauluille, kahviloihin, tapaamisiin tai minne tahansa, missä ihmiset kokoontuvat.",
	"get-involved::get_involved_flyers_content_2":
		"Jokaisessa esitteessä on silmiin osuva otsikko ja QR-koodi, joka ohjaa uteliaat lukijat osoitteeseen bitcoin.rocks oppimaan lisää.",
	"get-involved::get_involved_flyers_content_3":
		"Toisin kuin tarrat, esitteet voi tulostaa tilauksesta missä tahansa maailmassa — tarvitset vain tulostimen ja muutaman minuutin.",
	"get-involved::get_involved_flyers_header":
		"Tulosta ja laita ylös esite",
	"get-involved::get_involved_flyers_image_alt":
		"Esikatselu bitcoin.rocksin ilmaisesta tulostettavasta bitcoin-esitteestä",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks on ilmainen ja avoimen lähdekoodin projekti MIT-lisenssillä. Missiomme on kiihdyttää bitcoinin käyttöönottoa koulutuksen kautta — emmekä voi tehdä sitä yksin.",
	"get-involved::get_involved_github_content_2":
		"Olitpa kehittäjä, suunnittelija, kirjoittaja tai kääntäjä, on olemassa tapa auttaa. Etsimme erityisesti avustajia, jotka voivat kääntää sisältömme useammille kielille, jotta ihmiset ympäri maailmaa voivat oppia bitcoinista omalla äidinkielellään.",
	"get-involved::get_involved_github_content_3":
		"Haaraudu repositoriomme, avaa pull request, luo issue tai anna projektille tähti. Jokainen panos auttaa bitcoinia tavoittamaan useampia ihmisiä.",
	"get-involved::get_involved_github_header":
		"Osallistu GitHubissa",
	"get-involved::get_involved_sticker_image_alt":
		"Pakkaus bitcoin.rocksin ilmaisia bitcoin-tekstitarroja",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "säästäminen",
	"index::home_card_label_art_1": "Vertaillaan",
	"index::home_card_label_art_2": "Levitä viestiä",
	"index::home_card_label_art_3": "Katutaide",
	"index::home_card_label_bank_runs": "Täysimääräinen varantojärjestelmä",
	"index::home_card_label_bonds": "Vertaillaan",
	"index::home_card_label_business_1": "Mikä on ero?",
	"index::home_card_label_business_2": "Ota maksuja vastaan bitcoinina",
	"index::home_card_label_cash": "Vertaillaan",
	"index::home_card_label_cbdc": "Avoin vai suljettu?",
	"index::home_card_label_coding_1": "Interaktiivinen kurssi",
	"index::home_card_label_coding_2": "Rakenna laitteistoa",
	"index::home_card_label_coding_3": "Ohjelmointihaasteet",
	"index::home_card_label_crowdfunding_1": "EndSARS-protestit",
	"index::home_card_label_crowdfunding_2": "Rahaa, jota ei voi pysäyttää",
	"index::home_card_label_crowdfunding_3": "Rahoita projektisi",
	"index::home_card_label_crypto": "Mikä on ero?",
	"index::home_card_label_energy_1": "Sähköverkon vakauttaminen",
	"index::home_card_label_energy_4": "Kysynnän hallinta",
	"index::home_card_label_energy_5": "Maaseudun sähköistäminen",
	"index::home_card_label_energy_6": "Uusiutuvan energian kannustimia",
	"index::home_card_label_environment_1": "Metaanin vähentäminen",
	"index::home_card_label_environment_2": "Pelastin kansallispuiston",
	"index::home_card_label_environment_3": "Vihrein toimiala",
	"index::home_card_label_environment_4": "Vähentää kaasun polttoa",
	"index::home_card_label_equality_1": "Toivoa ja mahdollisuuksia",
	"index::home_card_label_equality_2": "Suuri tasoittaja",
	"index::home_card_label_food_1": "Ruoan hinnat",
	"index::home_card_label_food_2": "Tilat ja maa",
	"index::home_card_label_freedom_1": "Autoritaariset hallinnot",
	"index::home_card_label_freedom_2": "Ainutlaatuinen työkalu",
	"index::home_card_label_get_started_1":
		"Aloittelijan perusteet",
	"index::home_card_label_get_started_2": "Ensimmäinen lompakkosi",
	"index::home_card_label_get_started_3": "Osta bitcoinia",
	"index::home_card_label_gold": "Kumpi on parempi?",
	"index::home_card_label_housing_1": "Kohtuuhintainen asuminen",
	"index::home_card_label_human_rights_1":
		"Edistä ihmisoikeuksia",
	"index::home_card_label_human_rights_2": "Ruohonjuuritason käyttöönotto",
	"index::home_card_label_human_rights_3": "Maailmanlaajuinen jalanjälki",
	"index::home_card_label_inflation": "Bitcoin on parempi raha",
	"index::home_card_label_networks_1": "Verkon reaaliaikainen visualisointi",
	"index::home_card_label_networks_2": "Vertaillaan",
	"index::home_card_label_payments_1": "Mikä on ero?",
	"index::home_card_label_payments_2": "Nopeita ja halpoja maksuja",
	"index::home_card_label_payments_3": "Ulkomaanmaksut",
	"index::home_card_label_payments_4": "Ota maksuja vastaan",
	"index::home_card_label_politics_1": "Poliittinen paradoksi",
	"index::home_card_label_politics_2": "Suuri panostus",
	"index::home_card_label_property_rights_1": "Vertaillaan",
	"index::home_card_label_property_rights_2": "Todellinen omistus",
	"index::home_card_label_salary": "Suojaa palkkasi",
	"index::home_card_label_self_custody_1":
		"Bitcoin-lompakko-opas",
	"index::home_card_label_self_custody_2": "Tärkein askel",
	"index::home_card_label_self_custody_3": "Suvereeni raha",
	"index::home_card_label_war_1": "Lopeta ikuiset sodat",
	"index::home_card_label_war_2": "Auta veteraaneja",
	"index::home_card_label_war_3": "Paeta sotaa",
	"index::home_h1":
		"Bitcoin on parempi raha, joka rakentaa paremman maailman.",
	"index::home_nav_about": "Tietoja",
	"index::home_nav_get_involved": "Osallistu",
	"index::home_nav_learn": "Opi",
	"index::home_source_prefix": "Lähde:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon ja Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Katso",
	"lightning::lightning_grid_heading":
		"Suositut Lightning-lompakot",
	"lightning::lightning_hardware_cta_label":
		"Laitelompakot",
	"lightning::lightning_header_subtitle":
		"Lightning antaa sinun lähettää bitcoinia sekunneissa sentin murto-osalla — valitse lompakko, jonka kompromissit vastaavat sitä, kuinka paljon bitcoinia aiot käyttää.",
	"lightning::lightning_s1_c4_end": "saadaksesi lisätietoja.",
	"lightning::lightning_s1_c4_link":
		"Bitcoin-laitelompakko-oppaamme",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning -lompakko",
	"lightning::sources_breez_lightning":
		"Breez — itse-hallittava Lightning-lompakko",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning-verkon dokumentaatio",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — säilytetty Lightning-lompakko",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android ja verkko",
	"nostr/index::nostr_platform_web": "Verkkoselain",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr on uusi hajautettu protokolla verkkoviestintään — mikään yritys ei omista sitä, bitcoin-zapit ovat sisäänrakennettuja ja voit vaihtaa asiakkaita menettämättä seuraajia.",
	"nostr/index::nostr_amethyst_f1":
		"Paljon ominaisuuksia ja mukautusvaihtoehtoja",
	"nostr/index::nostr_amethyst_f2":
		"Vaatii erillisen bitcoin-lompakon",
	"nostr/index::nostr_amethyst_f3": "100 % ilmainen",
	"nostr/index::nostr_damus_f1":
		"Tuttu Twitterin kaltainen käyttöliittymä",
	"nostr/index::nostr_damus_f2":
		"Vaatii erillisen bitcoin-lompakon",
	"nostr/index::nostr_damus_f3": "100 % ilmainen",
	"nostr/index::nostr_download_heading":
		"Lataa ilmainen Nostr-asiakas",
	"nostr/index::nostr_download_intro":
		"Nostr-asiakkaat ovat ilmaisia sovelluksia, joiden avulla voit lukea ja kirjoittaa Nostr-verkkoon. Kaikki toimivat keskenään — voit vaihtaa asiakkaita milloin tahansa ja säilyttää seuraajasi ja sisältösi.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr on uusi hajautettu protokolla verkkoviestintään — mikään yritys ei omista sitä, bitcoin-zapit ovat sisäänrakennettuja ja voit vaihtaa sovellusten välillä menettämättä seuraajia.",
	"nostr/index::nostr_hero_title": "Mikä on Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr on kuin sähköposti: protokolla ei kuulu kenellekään, kuka tahansa voi rakentaa sovelluksen sen päälle ja sinä valitset, mikä sopii sinulle parhaiten. Toisin kuin Twitter tai Facebook, ei ole keskeistä yritystä, joka voisi sensuroida, heittää ulos tai vaientaa sinua.",
	"nostr/index::nostr_intro_c2":
		"Alla on lyhyt versio siitä, miksi Nostr on tärkeä — ja sitten kaikki ilmaiset Nostr-asiakkaat, joita tarvitset aloittaaksesi tänään.",
	"nostr/index::nostr_iris_f1":
		"Erittäin helppo — ei asennusta tarvita",
	"nostr/index::nostr_iris_f2":
		"Helppo tapa kokeilla Nostria testitilillä",
	"nostr/index::nostr_iris_f3": "100 % ilmainen",
	"nostr/index::nostr_learn_more_label": "SUKELLA SYVEMMÄLLE",
	"nostr/index::nostr_learn_more_title":
		"Opi lisää Nostrista osoitteessa nostr.how",
	"nostr/index::nostr_primal_f1": "Ensimmäinen suositeltu asiakkaamme",
	"nostr/index::nostr_primal_f2":
		"Sisäänrakennettu bitcoin-zap-lompakko",
	"nostr/index::nostr_primal_f3": "100 % ilmainen",
	"nostr/index::nostr_s1": "Protokolla, ei alusta",
	"nostr/index::nostr_s1_c1":
		"Nostr on uusi protokolla, jonka avulla voit viestiä verkossa ilman sensuurin, kieltämisen tai vaientamisen pelkoa.",
	"nostr/index::nostr_s1_c2":
		"Alustoja kuten Twitter ja Facebook hallitsee yksittäinen yritys, mutta Nostr-protokolla ei ole kenenkään hallinnassa.",
	"nostr/index::nostr_s2": "Vapaus liikkua",
	"nostr/index::nostr_s2_c1":
		"Nostr on kuin sähköposti. Kukaan ei hallitse sähköpostiprotokollaa ja kuka tahansa voi rakentaa asiakkaan sen päälle (kuten Gmail, Hotmail jne.).",
	"nostr/index::nostr_s2_c2":
		"Nostr-protokolla ei myöskään ole kenenkään hallinnassa ja kuka tahansa voi rakentaa asiakkaan sen päälle (kuten Damus, Amethyst jne.).",
	"nostr/index::nostr_s2_c3":
		"Jos et pidä siitä, miten tietty asiakas toimii, voit siirtää Nostr-tilisi toiseen asiakkaaseen menettämättä seuraajia tai sisältöä.",
	"nostr/index::nostr_s3": "Bitcoin on sisäänrakennettu",
	"nostr/index::nostr_s3_c1":
		"Bitcoin on sisäänrakennettu Nostr-protokollaan. Kun näet sisältöä, josta pidät, voit yksinkertaisesti lähettää tekijälle ”bitcoin-zapin” kiitokseksi.",
	"nostr/index::nostr_s3_c2":
		"Keskitetyillä alustoilla kuten Twitter ja Facebook keskeinen yritys tekee rahaa sisällölläsi. Mutta avoimilla protokollilla kuten Nostr teet itse rahaa sisällölläsi.",
	"nostr/index::sources_damus": "Damus — Nostr-asiakas iPhonelle",
	"nostr/index::sources_iris": "Iris — Nostr-asiakas verkkoselaimessa",
	"nostr/index::sources_nostr_how": "nostr.how — mikä on Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr-protokolla — avoimen lähdekoodin spesifikaatio",
	"nostr/index::sources_primal":
		"Primal — Nostr-asiakas sisäänrakennetulla bitcoin-zap-lompakolla",
	"nostr/index::what_is_nostr": "Mikä on Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Tulosta bitcoin-tarrasi käyttämällä näitä tiedostoja.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Pyyntö vastaanotettu 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Tilaa suurerin",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Jaa Nostrissa",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Mikä on Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Tarvitsetko lisää tarroja?",
	"sticker-success::sticker_success_hero_title":
		"Tarrasi ovat matkalla 🎉",
	"sticker-success::sticker_success_share_header":
		"Jaa, minne laitoit tarrasi",
	"sticker-success::sticker_success_tips_header":
		"Hyviä paikkoja tarrojen laittamiseen",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Ja kun aloitat, tulosta ja laita ylös myös",
	"stickers::stickers_instructions_1":
		"Syötä postiosoitteesi, niin lähetämme sinulle ilmaisen pakkauksen bitcoin-tarroja postitse. Tarrasi saapuvat yksinkertaisessa valkoisessa kirjekuoressa.",
	"stickers::stickers_btn_choose_pack": "Valitse tämä pakkaus",
	"stickers::stickers_bulk_c1":
		"Haluatko enemmän kuin muutaman tarran?",
	"stickers::stickers_bulk_c2":
		"Tilaa suurerin samasta painotalosta, jota me käytämme",
	"stickers::stickers_bulk_c3":
		"— mitä enemmän ostat, sitä halvemmaksi kappale tulee.",
	"stickers::stickers_bulk_cta": "Osta tarroja suurerin",
	"stickers::stickers_bulk_header":
		"Tilaa tarroja suurerin",
	"stickers::stickers_hero_subtitle":
		"Tilaa ilmainen pakkaus bitcoin-tarroja ja laita ne julkisille paikoille auttaaksesi useampia ihmisiä oppimaan bitcoinista.",
	"stickers::stickers_hero_title": "Ilmaiset bitcoin-tarrat",
	"stickers::stickers_intro_c1":
		"Missiomme on auttaa sinua ”oranssistamaan” useampia ihmisiä kiinnittämällä bitcoin-tarroja julkisille paikoille. Kaikissa tarroissamme on QR-koodit, jotka vievät opetussivuille",
	"stickers::stickers_intro_c3": "inflaatiosta",
	"stickers::stickers_intro_c4":
		"Valitse alla tarrapakkaus ja valitse, miten haluat ne — lähetämme ilmaisen pakkauksen kenelle tahansa Yhdysvalloissa tai Kanadassa, tai voit myös tulostaa tarrasi itse missä tahansa maailmassa.",
	"stickers::stickers_mail_header":
		"Lähetämme sinulle tarroja postitse ilmaiseksi",
	"stickers::stickers_next_print_flyers": "Levitä viestiä vielä kauemmas",
	"stickers::stickers_next_print_flyers_desc":
		"Tulosta ilmaisia bitcoin-esitteitä ja laita niitä julkisille paikoille",
	"stickers::stickers_option_bulk":
		"📦 Maailmanlaajuisesti — tilaa suurerin",
	"stickers::stickers_option_canada":
		"🇨🇦 Kanada — ilmainen postitse",
	"stickers::stickers_option_print":
		"🌍 Maailmanlaajuisesti — tulosta itse",
	"stickers::stickers_option_usa":
		"🇺🇸 Yhdysvallat — ilmainen postitse",
	"stickers::stickers_print_c1":
		"Voit osallistua tulostamalla omat tarrasi missä tahansa asut. Klikkaa alla olevaa kieltäsi ladataksesi tarratiedostot ja tulostusohjeet.",
	"stickers::stickers_print_c2":
		"Kaikkia tarroja ei ole saatavilla kaikilla kielillä.",
	"stickers::stickers_print_header":
		"Tulosta tarratiedostosi itse",
	"stickers::stickers_request_c1":
		"Täytä alla oleva lomake pyytääksesi tarratiedostoja paikallisella kielelläsi. Ilmoitamme, kun ne ovat valmiit.",
	"stickers::stickers_request_header":
		"Eikö kieltäsi näy?",
	"stickers::stickers_share_c2":
		"Seuraa meitä Nostrissa etsimällä",
	"stickers::stickers_share_c3":
		"missä tahansa Nostr-asiakkaassa.",
	"stickers::stickers_signs_pack_description":
		"Varoitus-, varoitus- ja huomiomerkkitarroja bitcoin-viesteillä — suunniteltu herättämään huomio ja saamaan ihmiset pysähtymään lukemaan.",
	"stickers::stickers_step_1_description":
		"Jokainen pakkaus sisältää erilaisen kokoelman bitcoin-tarroja QR-koodeilla, jotka opettavat ihmisiä bitcoinista.",
	"stickers::stickers_step_1_eyebrow": "VAIHE 1",
	"stickers::stickers_step_1_header":
		"Valitse tarrapakkaus",
	"stickers::stickers_step_2_description":
		"Lähetämme ilmaisia pakkauksia osoitteisiin Yhdysvalloissa ja Kanadassa. Muualla maailmassa voit tulostaa tarrasi itse tai tilata suurerin.",
	"stickers::stickers_step_2_eyebrow": "VAIHE 2",
	"stickers::stickers_step_2_header":
		"Miten haluat tarrasi?",
	"stickers::stickers_text_pack_description":
		"Yhdistelmä bitcoin-iskulauseita ja nokkelia mietelmiä, jotka on suunniteltu herättämään uteliaisuutta julkisissa paikoissa.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — valitse lompakkosi",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — bitcoinin siemen-metallisäilytysten arvostelut",
	"wallets::wallets_lightning_cta_label": "Lightning-verkko",
	"wallets::sources_blockstream_green":
		"Blockstream Green — itse-hallittava bitcoin-lompakko",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — bitcoin-laitelompakko",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 -laitelompakko",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q -laitelompakko",
	"wallets::sources_passport":
		"Foundation Devices — Passport-laitelompakko",
	"wallets::sources_seedsigner":
		"SeedSigner — avoimen lähdekoodin itse-tehtävä allekirjoituslaite bitcoin-transaktioille",
	"wallets::wallets_grid_heading": "Suositut bitcoin-lompakot",
	"wallets::wallets_header_subtitle":
		"Vaihe vaiheelta -opas lompakon valintaan, avainten suojaamiseen ja täyden hallinnan ottamiseen bitcoinistasi.",
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
		`translate-rest-part2 (fi): filled ${filled}, already-done ${skipped}`,
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
