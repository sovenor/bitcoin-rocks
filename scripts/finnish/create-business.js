/**
 * Creates Finnish (fi) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'fi';
const today = '2026-04-08';

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

writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin on hyv\u00e4 yrityksille",
	"biz_header": "BITCOIN ON HYV\u00c4 YRITYKSILLE",
	"biz_s1": "Alhaiset maksut ilman v\u00e4himmäismääriä",
	"biz_s1_c1": "Bitcoin mahdollistaa maksujen vastaanottamisen suoraan asiakkailta, kuten k\u00e4teinen. Bitcoin-verkko toimii ilman v\u00e4lik\u00e4si\u00e4, kuten pankkeja ja luottokorttiyhti\u00f6it\u00e4, jotka veloittavat suuria maksuja.",
	"biz_s2": "V\u00e4lit\u00f6n selvitys",
	"biz_s2_c1": "Kuten k\u00e4teinen, Bitcoin-maksut selvitet\u00e4\u00e4n v\u00e4litt\u00f6m\u00e4sti. Sinun ei tarvitse odottaa luottokorttiyhti\u00f6n tai pankin maksusuoritusta. Sen sijaan saat rahat k\u00e4ytt\u00f6\u00f6si heti.",
	"biz_s3": "Ei takaisinperint\u00f6j\u00e4 eik\u00e4 petoksia",
	"biz_s3_c1": "Koska Bitcoin-maksut tapahtuvat suoraan sinun ja asiakkaasi v\u00e4lill\u00e4, kukaan ei voi ottaa rahoja takaisin takaisinperint\u00e4nä.",
	"biz_s3_c2": "V\u00e4\u00e4rennetty\u00e4 Bitcoinia ei voida l\u00e4hett\u00e4\u00e4 Bitcoin-verkon kautta, mik\u00e4 tarkoittaa, ett\u00e4 sinun ei koskaan tarvitse huolehtia petollisista tapahtumista, jotka voivat maksaa yrityksellesi.",
	"biz_s4": "Hanki lis\u00e4\u00e4 asiakkaita",
	"biz_s4_c1": "Miljoonat ihmiset omistavat Bitcoinia ja haluavat k\u00e4ytt\u00e4\u00e4 sit\u00e4 paikoissa, jotka hyv\u00e4ksyv\u00e4t sen.",
	"biz_s4_c2": "Hyv\u00e4ksym\u00e4ll\u00e4 Bitcoinin yrityksesi voidaan listata Bitcoin-kauppiaskarttoihin ja saada ilmaista n\u00e4kyvyytt\u00e4 uusille asiakkaille.",
	"biz_s4_c3": "Bitcoinin hyv\u00e4ksyminen on 100 % ilmaista. Ei sopimuksia eik\u00e4 piilomaksuja."
});

writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Opi, miksi Bitcoin on hyv\u00e4 yrityksille",
	"why_header": "BITCOIN ON HYV\u00c4 YRITYKSILLE",
	"why_good_for_you": "BITCOIN ON HYV\u00c4 MY\u00d6S SINULLE!",
	"why_learn_more_lowercase": "Lue lis\u00e4\u00e4.",
	"why_s1": "Bitcoinissa ei ole inflaatiota",
	"why_s1_c1": "Inflaatio tapahtuu, kun lis\u00e4\u00e4 rahaa painetaan tai luodaan tyhjäst\u00e4. T\u00e4m\u00e4 tekee rahastasi v\u00e4hemp\u00e4\u00e4n arvoista ajan my\u00f6t\u00e4.",
	"why_s1_c2": "Bitcoinin tarjonta on kiinte\u00e4, mik\u00e4 tarkoittaa, ett\u00e4 kukaan ei voi painaa lis\u00e4\u00e4 Bitcoinia.",
	"why_s2": "Bitcoinissa ei ole talletuspakoja",
	"why_s2_c1": "Useat amerikkalaiset pankit ovat romahtaneet talletuspakojen vuoksi viime vuosina.",
	"why_s2_c2": "Sen sijaan, ett\u00e4 pankit vain s\u00e4ilytt\u00e4isiv\u00e4t rahasi, ne sijoittavat ja lainaavat ne edelleen. Jos n\u00e4m\u00e4 sijoitukset ep\u00e4onnistuvat, heill\u00e4 ei ole tarpeeksi rahaa antaakseen sinulle omasi takaisin.",
	"why_s2_c3": "Ja FDIC:n vakuutusrahastossa on vain 1 dollari jokaista 100:a vakuuttamaansa dollaria kohden.",
	"why_s3": "Bitcoin ei vaadi lupaa",
	"why_s3_c1": "Toisin kuin perinteiset rahoitusverkot, Bitcoin ei vaadi lupaa k\u00e4ytt\u00e4miseen.",
	"why_s3_c2": "T\u00e4m\u00e4 tarkoittaa, ett\u00e4 kukaan ei voi est\u00e4\u00e4 sinua k\u00e4ytt\u00e4m\u00e4st\u00e4 Bitcoinia mist\u00e4\u00e4n syyst\u00e4. Se on ensimm\u00e4inen rahoitusverkko, jota voit k\u00e4ytt\u00e4\u00e4 ilman sensuurin tai takavarikoinnin pelkoa.",
	"why_s4": "Bitcoin rakentaa parempaa maailmaa",
	"why_s4_c1": "Bitcoin on v\u00e4\u00e4rinymmärretty teknologia, joka rakentaa parempaa maailmaa.",
	"why_s4_c2": "Bitcoin on mahdollistanut ihmisoikeusaktivistien taistelun vapauden puolesta, v\u00e4hent\u00e4nyt maailmanlaajuisia metaanip\u00e4\u00e4st\u00f6j\u00e4, pelastanut kansallispuistoja ja paljon muuta."
});

writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Hyv\u00e4ksy Bitcoin-maksut yrityksess\u00e4si",
	"guide_header": "OLETKO VALMIS HYV\u00c4KSYM\u00c4\u00c4N BITCOININ YRITYKSESS\u00c4SI?"
});

writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Usein kysytyt kysymykset Bitcoinin hyv\u00e4ksymisest\u00e4",
	"faq_description": "Onko sinulla kysymyksi\u00e4 Bitcoin-maksujen hyv\u00e4ksymisest\u00e4 yrityksess\u00e4si?",
	"faq_header": "ONKO SINULLA KYSYMYKSI\u00c4 BITCOIN-MAKSUJEN HYV\u00c4KSYMISEST\u00c4?",
	"faq_s1": "Mik\u00e4 on Bitcoin?",
	"faq_s1_c1": "Bitcoin on kaksi asiaa: digitaalinen raha ja tietokoneverkko.",
	"faq_s1_c2": "Voit l\u00e4hett\u00e4\u00e4 bitcoinia (digitaalista rahaa) suoraan muille ihmisille Bitcoin-verkon avulla.",
	"faq_s1_c3": "Bitcoin-verkko toimii ilman v\u00e4lik\u00e4si\u00e4 tai keskusviranomaisia, kuten pankkeja tai luottokorttiyhti\u00f6it\u00e4, joten voit v\u00e4ltt\u00e4\u00e4 niiden tapahtumamaksut.",
	"faq_s1_c4": "Bitcoin-tapahtumat saavuttavat lopullisen selvityksen nopeasti (10 minuuttia) eik\u00e4 niit\u00e4 voida koskaan peruuttaa, joten voit nukkua rauhassa tiet\u00e4en, ett\u00e4 rahasi ovat todella sinun.",
	"faq_s2": "Miten Bitcoin voi hy\u00f6dytt\u00e4\u00e4 yrityst\u00e4ni?",
	"faq_s2_c1": "Bitcoin mahdollistaa maksujen vastaanottamisen pienemmmill\u00e4 maksuilla ja uusien asiakkaiden hankkimisen. Bitcoin-maksuilla on alhaiset maksut ilman v\u00e4himmäismääriä, ne selvitetään v\u00e4litt\u00f6m\u00e4sti ja ne ovat immuuneja takaisinperinnoille ja petoksille.",
	"faq_s2_c2": "Bitcoinin hyv\u00e4ksyminen on ilmaista ja mahdollistaa yrityksesi listaamisen Bitcoin-kauppiaskarttoihin, jotta Bitcoin-k\u00e4ytt\u00e4j\u00e4t l\u00f6yt\u00e4v\u00e4t sinut helposti.",
	"faq_s2_c3": "Katso kaikki tavat, joilla Bitcoin on hyv\u00e4 yrityksille.",
	"faq_s3": "Miten vastaanotan Bitcoin-maksuja?",
	"faq_s3_c1": "Tarvitset vain ilmaisen Bitcoin-lompakon vastaanottaaksesi Bitcoin-maksuja.",
	"faq_s3_c2": "Lompakko-oppaamme auttaa sinut alkuun nopeasti ja helposti, jotta voit aloittaa Bitcoin-maksujen hy\u00f6dynt\u00e4misen jo t\u00e4n\u00e4\u00e4n!",
	"faq_s3_c3": "N\u00e4yt\u00e4 lompakko-opas",
	"faq_s4": "Voinko muuntaa vastaanotetut Bitcoin-maksut paikalliseksi valuutaksi?",
	"faq_s4_c1": "Kyll\u00e4! Hybridilompakolla voit automaattisesti muuntaa vastaanotetut Bitcoin-maksut paikalliseksi valuutaksi heti maksun vastaanottamisen yhteydessä.",
	"faq_s4_c2": "Lompakko-oppaamme auttaa sinut alkuun nopeasti ja helposti.",
	"faq_s4_c3": "Voit my\u00f6s valita pit\u00e4\u00e4 osan vastaanotetuista maksuista Bitcoinina. S\u00e4\u00e4st\u00e4misell\u00e4 Bitcoinissa on monia etuja:",
	"faq_s4_c4": "Bitcoin on t\u00e4yden reservin rahoitusj\u00e4rjestelm\u00e4.",
	"faq_s4_c5": "Bitcoinissa ei ole inflaatiota.",
	"faq_s4_c6": "N\u00e4m\u00e4 edut tekev\u00e4t Bitcoinista erinomaisen tavan s\u00e4ilytt\u00e4\u00e4 rahaa pitkäll\u00e4 aikav\u00e4lill\u00e4.",
	"faq_s4_c7": "Vaikka p\u00e4\u00e4tt\u00e4isit muuntaa kaikki Bitcoin-maksut dollareiksi, saat silti edut pienemmist\u00e4 maksuista ja useammista potentiaalisista asiakkaista.",
	"faq_s5": "Voinko vastaanottaa Bitcoin-maksuja henkil\u00f6kohtaisesti?",
	"faq_s5_c1": "Kyll\u00e4! Bitcoin-maksujen vastaanottaminen henkil\u00f6kohtaisesti on helppoa Bitcoin-lompakolla.",
	"faq_s5_c2": "Lompakko-oppaamme auttaa sinua valitsemaan parhaan yrityksellesi.",
	"faq_s5_c3": "N\u00e4yt\u00e4 lompakko-opas",
	"faq_s6": "Voinko vastaanottaa Bitcoin-maksuja verkossa?",
	"faq_s6_c1": "Kyll\u00e4! Bitcoin-maksujen vastaanottaminen verkossa olemassa olevan verkkokauppasi kanssa on helppoa.",
	"faq_s6_c2": "Tutustu lompakko-oppaaseemme saadaksesi lis\u00e4tietoja.",
	"faq_s7": "Miten voin kertoa asiakkaille, ett\u00e4 hyv\u00e4ksyn Bitcoinin?",
	"faq_s7_c1": "Tarjoamme ilmaisia 'Bitcoin hyv\u00e4ksyt\u00e4\u00e4n t\u00e4\u00e4ll\u00e4' -tarroja, joita voit esitt\u00e4\u00e4 yrityksess\u00e4si kertoaksesi asiakkaille, ett\u00e4 hyv\u00e4ksyt Bitcoinin.",
	"faq_s7_c2": "Klikkaa t\u00e4\u00e4lt\u00e4 tilataksesi tarroja.",
	"faq_s7_c3": "Voit my\u00f6s ilmaiseksi listata yrityksesi Bitcoin-kauppiaskarttoihin ja saada n\u00e4kyvyytt\u00e4 miljoonille Bitcoin-k\u00e4ytt\u00e4jille, jotka haluavat k\u00e4ytt\u00e4\u00e4 Bitcoiniaan yrityksissä, jotka hyv\u00e4ksyv\u00e4t sen.",
	"faq_s7_c4": "Rekister\u00f6idy nyt.",
	"faq_s8": "Miten voin saada lis\u00e4\u00e4 asiakkaita hyv\u00e4ksym\u00e4ll\u00e4 Bitcoinin?",
	"faq_s8_c1": "Miljoonat Bitcoin-k\u00e4ytt\u00e4j\u00e4t haluavat k\u00e4ytt\u00e4\u00e4 Bitcoiniaan yrityksiss\u00e4, jotka hyv\u00e4ksyv\u00e4t sen.",
	"faq_s8_c2": "Hyv\u00e4ksym\u00e4ll\u00e4 Bitcoin-maksut yrityksesi voidaan listata ilmaisiin Bitcoin-kauppiaskarttoihin ja saada n\u00e4kyvyytt\u00e4 uusille potentiaalisille asiakkaille.",
	"faq_s8_c3": "Rekister\u00f6idy nyt.",
	"faq_s9": "Paljonko Bitcoinin hyv\u00e4ksyminen maksaa?",
	"faq_s9_c1": "Bitcoinin hyv\u00e4ksyminen yrityksess\u00e4si on 100 % ilmaista. Ei sopimuksia eik\u00e4 piilomaksuja.",
	"faq_s9_c2": "Tutustu lompakko-oppaaseemme ja aloita Bitcoin-maksujen vastaanottaminen jo t\u00e4n\u00e4\u00e4n."
});

writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Bitcoin-yrityskirjanpito-opas",
	"accounting_description": "Opi, miten kirjaat Bitcoin-maksut oikein yrityskirjanpitoosi.",
	"accounting_header": "BITCOIN-KIRJANPITO-OPAS",
	"accounting_s1_c1": "Bitcoinin hyv\u00e4ksymisell\u00e4 on monia etuja, kuten maksujen vastaanottaminen pienemmmill\u00e4 maksuilla ja uusien asiakkaiden hankkiminen.",
	"accounting_s1_c2": "Jos k\u00e4yt\u00e4t hybridilompakkoa lompakko-oppaastamme ja myyt automaattisesti 100 % vastaanotetuista Bitcoineista dollareiksi, sinun ei tarvitse muuttaa mit\u00e4\u00e4n nykyisess\u00e4 kirjanpidossasi.",
	"accounting_s1_c3": "N\u00e4yt\u00e4 lompakko-opas.",
	"accounting_s1_c4": "Jos kuitenkin valitset pit\u00e4\u00e4 osan vastaanotetuista Bitcoin-maksuista Bitcoinina, sinun on seurattava muutamia asioita kirjanpitoa varten. Se voi vaikuttaa ylivoimaiselta aluksi, mutta se on itse asiassa melko yksinkertaista.",
	"accounting_s1_c5": "Huomautus: t\u00e4m\u00e4 opas on vain tiedoksi eik\u00e4 ole veroneuvontaa.",
	"accounting_s1_c6": "Jos tarvitset veroneuvontaa, suosittelemme l\u00e4mpim\u00e4sti Satoshi Pacioli Accounting Servicesi\u00e4, Bitcoin-kirjanpitoon erikoistunutta kirjanpitoyrityst\u00e4.",
	"accounting_s2": "SEURAA HANKINTAHINTAASI",
	"accounting_s2_c1": "Hankintahinnan seuranta on suurin ero dollarien ja Bitcoinin kirjanpidon v\u00e4lill\u00e4. Vaikka ajattelisit yrityksesi pelk\u00e4st\u00e4\u00e4n Bitcoin-termein, sinun on raportoitava jokaisen tapahtuman dollariarvo veroilmoituksessasi.",
	"accounting_s2_c2": "Jos k\u00e4yt\u00e4t QuickBooksia, voit tehd\u00e4 t\u00e4m\u00e4n automaattisesti Bitcoin Sync -lis\u00e4osalla.",
	"accounting_s2_c3": "Jos et k\u00e4yt\u00e4 QuickBooksia, suosittelemme Satoshi Pacioli Accounting Servicesi\u00e4, Bitcoin-kirjanpitoon erikoistunutta kirjanpitoyrityst\u00e4.",
	"accounting_s2_c4": "Manuaalisessa seurannassa kirjaa yksinkertaisesti vastaanotetun Bitcoinin m\u00e4\u00e4r\u00e4 ja Bitcoin-tapahtuman dollariarvo sinä päivänä.",
	"accounting_s2_c5": "Voit n\u00e4hd\u00e4 Bitcoinin nykyisen dollarihinnan t\u00e4\u00e4lt\u00e4.",
	"accounting_s2_c6": "Seuraa n\u00e4it\u00e4 tietoja Excel-taulukossa ja toimita se kirjanpit\u00e4j\u00e4llesi.",
	"accounting_s2_c7": "Voit my\u00f6s automaattisesti tuoda n\u00e4m\u00e4 tiedot Exceliin.",
	"accounting_s2_c8": "Voit my\u00f6s n\u00e4hd\u00e4 Bitcoinin historiallisen dollarihinnan aiemmilta p\u00e4ivilt\u00e4, joten sinun ei tarvitse tehd\u00e4 sit\u00e4 joka p\u00e4iv\u00e4.",
	"accounting_s3": "BITCOININ K\u00c4YTT\u00c4MINEN TAI MYYMINEN",
	"accounting_s3_c1": "Jos k\u00e4yt\u00e4t hybridilompakkoa lompakko-oppaastamme ja myyt automaattisesti 100 % vastaanotetuista Bitcoineista dollareiksi, sinun ei tarvitse muuttaa mit\u00e4\u00e4n nykyisess\u00e4 kirjanpidossasi.",
	"accounting_s3_c2": "N\u00e4yt\u00e4 lompakko-opas.",
	"accounting_s3_c3": "Jos valitset k\u00e4ytt\u00e4\u00e4 tai myyd\u00e4 osan vastaanotetuista Bitcoineista my\u00f6hemmin, lis\u00e4\u00e4 yksinkertaisesti myyntihinta Excel-taulukkoon, jossa seuraat hankintahintaasi.",
	"accounting_s3_c4": "Esimerkiksi, jos vastaanotit 100 dollarin arvoisen Bitcoinin 1. tammikuuta ja p\u00e4\u00e4tit myyd\u00e4 tai k\u00e4ytt\u00e4\u00e4 sen 1. helmikuuta uudella arvolla 110 dollaria, sinun on kirjattava 10 dollarin p\u00e4\u00e4omavoitto kirjanpitoosi.",
	"accounting_s3_c5": "T\u00e4m\u00e4 voi toimia my\u00f6s toisinp\u00e4in. Esimerkiksi, jos vastaanotit 100 dollarin arvoisen Bitcoinin 1. tammikuuta ja p\u00e4\u00e4tit myyd\u00e4 tai k\u00e4ytt\u00e4\u00e4 sen 1. helmikuuta uudella arvolla 90 dollaria, sinun on kirjattava 10 dollarin p\u00e4\u00e4omatappio kirjanpitoosi.",
	"accounting_s4": "TARVITSEN LIS\u00c4\u00c4 APUA",
	"accounting_s4_c1": "Jos tarvitset lis\u00e4\u00e4 apua Bitcoinin integroimisessa yrityskirjanpitoosi, suosittelemme l\u00e4mpim\u00e4sti Satoshi Pacioli Accounting Servicesi\u00e4, Bitcoin-kirjanpitoon erikoistunutta kirjanpitoyrityst\u00e4.",
	"accounting_s4_c2": "Lue lis\u00e4\u00e4 Satoshi Pacioli Accounting Servicesist\u00e4."
});

writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Miten hyv\u00e4ksy\u00e4 Bitcoin-maksuja",
	"wallets_header": "HANKI ILMAINEN BITCOIN-LOMPAKKO MAKSUJEN VASTAANOTTAMISEEN",
	"wallets_intro_1": "Kaikki Bitcoin-lompakot ovat yhteensopivia kesken\u00e4\u00e4n, joten asiakkaat voivat maksaa sinulle Bitcoinilla riippumatta siit\u00e4, mit\u00e4 lompakkoa he k\u00e4ytt\u00e4v\u00e4t.",
	"wallets_intro_2": "Puhtaat Bitcoin-lompakot:",
	"wallets_intro_3": "N\u00e4m\u00e4 ovat puhtaita Bitcoin-lompakoita, jotka avaavat kaikki Bitcoinin edut: ei v\u00e4lik\u00e4si\u00e4, alhaiset maksut eik\u00e4 takaisinperint\u00f6j\u00e4 tai petoksia.",
	"wallets_intro_4": "Hybridilompakot:",
	"wallets_intro_5": "N\u00e4m\u00e4 mahdollistavat mink\u00e4 tahansa osuuden Bitcoinistasi vaihtamisen dollareiksi heti, kun asiakas maksaa sinulle. Maksut ovat silti pienemm\u00e4t kuin luottokorteilla, mutta suuremmat kuin puhtailla Bitcoin-maksuilla.",
	"wallets_intro_6": "Molemmat tyypit ovat erinomaisia tapoja hyv\u00e4ksy\u00e4 Bitcoin. Sopiva lompakko riippuu yrityksesi koosta ja tyypist\u00e4.",
	"wallets_choice_sole": "lompakot yksinyritt\u00e4jille",
	"wallets_choice_multiple": "lompakot useamman ty\u00f6ntekij\u00e4n yrityksille",
	"wallets_choice_online": "lompakot verkkoyrityksille",
	"wallets_choice_invoice": "lompakot laskutusyrityksille",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Voit hyv\u00e4ksy\u00e4 Bitcoin-maksuja olemassa olevalla Square PoS -p\u00e4\u00e4tteell\u00e4si tai verkkokauppaintegraatiolla. Bitcoin-maksujen hyv\u00e4ksyminen ei ole koskaan ollut helpompaa.",
	"wallets_feature_bitcoin_only": "Puhdas Bitcoin-lompakko",
	"wallets_feature_no_info": "Tietoja ei vaadita",
	"wallets_feature_in_person": "Vain henkil\u00f6kohtaiset maksut",
	"wallets_feature_settles_bitcoin": "Selvitys 100 % Bitcoinissa",
	"wallets_feature_hybrid": "Hybridilompakko",
	"wallets_feature_info": "Yritystiedot vaaditaan",
	"wallets_feature_in_person_online": "Henkil\u00f6kohtaiset ja verkkomaksut",
	"wallets_feature_settles_both": "Selvitys Bitcoinissa ja dollareissa",
	"wallets_feature_multiple_employees": "Usean ty\u00f6ntekij\u00e4n tuki (BPT)",
	"wallets_feature_self_hosted": "Oma is\u00e4nn\u00f6inti = 0 % maksuja",
	"wallets_feature_online_store": "Verkkokauppaintegraatio",
	"wallets_feature_invoicing": "Ilmainen laskutusohjelmisto",
	"wallets_get_wallet": "HANKI LOMPAKKO"
});

writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Bitcoin-kauppiaskartat \u2013 Listaa yrityksesi ilmaiseksi",
	"maps_header": "REKISTER\u00d6IDY BITCOIN-KAUPPIASKARTTOIHIN JA HANKI LIS\u00c4\u00c4 ASIAKKAITA",
	"maps_request_details": "Sy\u00f6t\u00e4 yritystietosi alla, niin listaamme sinut ilmaiseksi Bitcoin-kauppiaskarttoihin. T\u00e4m\u00e4 mahdollistaa bitcoinereiden l\u00f6yt\u00e4\u00e4 yrityksesi ja k\u00e4ytt\u00e4\u00e4 Bitcoiniaan sinulla!",
	"maps_view": "N\u00e4yt\u00e4 kartta t\u00e4\u00e4lt\u00e4."
});

writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Yrityksesi listataan Bitcoin-kauppiaskarttoihin 1\u20132 viikon kuluessa.",
	"kit_success_2": "N\u00e4yt\u00e4 kartta t\u00e4\u00e4lt\u00e4."
});

writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Bitcoin hyv\u00e4ksyt\u00e4\u00e4n t\u00e4\u00e4ll\u00e4 -tarrat",
	"stickers_header": "HANKI ILMAISET 'BITCOIN HYV\u00c4KSYT\u00c4\u00c4N T\u00c4\u00c4LL\u00c4' -TARRAT",
	"stickers_request": "Tilaa ilmaiset tarrat",
	"stickers_request_details": "Kerro asiakkaillesi, ett\u00e4 hyv\u00e4ksyt Bitcoin-maksuja n\u00e4ill\u00e4 ilmaisilla 'Bitcoin hyv\u00e4ksyt\u00e4\u00e4n t\u00e4\u00e4ll\u00e4' -tarroilla.",
	"stickers_country_global_print": "Maailmanlaajuinen \u2014 Tulostan omat tarrani",
	"stickers_request_instructions": "Saat kolme 'Bitcoin hyv\u00e4ksyt\u00e4\u00e4n t\u00e4\u00e4ll\u00e4' -tarraa tavallisessa valkoisessa kirjekuoressa. Jos tarvitset yli kolme tarraa yrityksellesi, voit tilata uudelleen. Osoitetiedot poistetaan ilmaisten tarrojen l\u00e4hett\u00e4misen j\u00e4lkeen.",
	"stickers_print_details": "Voit tulostaa omat 'Bitcoin hyv\u00e4ksyt\u00e4\u00e4n t\u00e4\u00e4ll\u00e4' -tarrasi riippumatta asuinpaikastasi! Klikkaa kieltesi alla n\u00e4hd\u00e4ksesi tarratiedostot ja ohjeet.",
	"stickers_request_language": "Etkö n\u00e4e kieltesi? T\u00e4yt\u00e4 alla oleva lomake pyyt\u00e4\u00e4ksesi 'Bitcoin hyv\u00e4ksyt\u00e4\u00e4n t\u00e4\u00e4ll\u00e4' -tarratiedostoja omalla kielelläsi."
});

writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Saat tarrasi 1\u20132 viikon kuluessa tavallisessa valkoisessa kirjekuoressa. Jokaisessa kirjekuoressa on 3 tarraa. Jos tarvitset yli 3 tarraa yrityksellesi, voit tilata toisen paketin!"
});

writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Luomme ja julkaisemme tarratiedostosi 3\u20134 viikon kuluessa. Kiitos k\u00e4rsiv\u00e4llisyydest\u00e4si!"
});

writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin-yrityspaketti",
	"kit_header": "TULOSTA OMA BITCOIN-YRITYSPAKETTISI",
	"kit_request": "TILAA ILMAINEN PAKETTI",
	"kit_request_details": "Jokainen Bitcoin-yrityspaketti sis\u00e4lt\u00e4\u00e4 kaksi lentolehtist\u00e4, jotka tekev\u00e4t paikallisen yrityksen vakuuttamisesta Bitcoinin hyv\u00e4ksymiseen helppoa.",
	"kit_country_global_print": "Maailmanlaajuinen \u2014 Tulostan omat pakettini",
	"kit_enter_address": "Sy\u00f6t\u00e4 postiosoitteesi, niin l\u00e4het\u00e4mme sinulle ilmaisen Bitcoin-yrityspaketin tavallisessa valkoisessa kirjekuoressa. Osoitetiedot poistetaan paketin l\u00e4hett\u00e4misen j\u00e4lkeen.",
	"kit_print_details": "Voit osallistua tulostamalla omat lentolehtisesi riippumatta asuinpaikastasi! Voit my\u00f6s ohjata yrityksi\u00e4 digitaaliseen yrityspakettiin v\u00e4ltt\u00e4\u00e4ksesi tulostamisen.",
	"kit_view_files": "N\u00c4YT\u00c4 TIEDOSTOT",
	"kit_digital_kit": "DIGITAALINEN PAKETTI",
	"kit_resources": "JOKAINEN PAKETTI LINKITT\u00c4\u00c4 N\u00c4IHIN ILMAISIIN RESURSSEIHIN"
});

writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Saat Bitcoin-yrityspakettisi 1\u20132 viikon kuluessa tavallisessa valkoisessa kirjekuoressa."
});

writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Tulosta oma Bitcoin-yrityspakettisi",
	"english_bbk_files_description": "Lataa lentolehtitiedostot t\u00e4\u00e4lt\u00e4.",
	"english_header": "TULOSTA OMA ENGLANNINKIELINEN BITCOIN-YRITYSPAKETTISI"
});

console.log(`\nDone! Created 14 business files.`);
