/**
 * Creates Finnish (fi) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
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

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "Virhe 404 | Sivua ei l\u00f6ydy",
	"404_message": "T\u00c4M\u00c4 RIKKIN\u00c4INEN SIVU EI OLE SIISTI",
	"404_home": "TAKAISIN ETUSIVULLE"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Tietoja bitcoin.rocks \u2014 Bitcoin-koulutusta vuodesta 2022",
	"about_description": "bitcoin.rocks on ilmainen avoimen l\u00e4hdekoodin Bitcoin-koulutussivusto, joka on perustettu vuonna 2022. Teht\u00e4v\u00e4n\u00e4mme on nopeuttaa Bitcoinin k\u00e4ytt\u00f6\u00f6nottoa koulutuksen avulla.",
	"about_header": "TIETOJA MEIST\u00c4",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Teht\u00e4v\u00e4mme",
	"about_mission_1": "bitcoin.rocks perustettiin vuonna 2022 yksinkertaisella teht\u00e4v\u00e4ll\u00e4: nopeuttaa Bitcoinin k\u00e4ytt\u00f6\u00f6nottoa koulutuksen avulla.",
	"about_mission_2": "Olemme olemassa ollaksemme ensimm\u00e4inen linkki, jonka jaat jollekulle, joka on utelias Bitcoinista. Yst\u00e4v\u00e4llinen ja helposti l\u00e4hestytt\u00e4v\u00e4 aloituspiste, joka selitt\u00e4\u00e4, miten Bitcoin rakentaa parempaa maailmaa.",
	"about_mission_3": "Liian monet ihmiset ymm\u00e4rt\u00e4v\u00e4t Bitcoinin v\u00e4\u00e4rin tai eiv\u00e4t ole koskaan saaneet kunnollista esittely\u00e4. Haluamme muuttaa t\u00e4m\u00e4n tarjoamalla ilmaista, laadukasta koulutussis\u00e4lt\u00f6\u00e4, jonka jokainen voi ymm\u00e4rt\u00e4\u00e4.",
	"about_what_we_do_header": "Mit\u00e4 me teemme",
	"about_what_we_do_1": "Luomme ilmaista koulutussis\u00e4lt\u00f6\u00e4 Bitcoin-aloittelijoille. Verkkosivustomme k\u00e4sittelee aiheita kuten inflaatio, oma hallinnointi, lompakot, Lightning-verkko ja miten Bitcoin vertautuu muihin omaisuuseriin ja maksuj\u00e4rjestelmiin.",
	"about_what_we_do_2a": "L\u00e4het\u00e4mme ",
	"about_what_we_do_2b": "ilmaisia Bitcoin-tarroja",
	"about_what_we_do_2c": " ovellesi, jotta voit auttaa levi\u00e4m\u00e4\u00e4n Bitcoin-tietoisuutta yhteis\u00f6ss\u00e4si. Sadat ihmiset skannaavat n\u00e4iden tarrojen QR-koodeja joka kuukausi oppiakseen Bitcoinista.",
	"about_what_we_do_3a": "Tarjoamme my\u00f6s ",
	"about_what_we_do_3b": "tulostettavia lentolehtisi\u00e4",
	"about_what_we_do_3c": " ja ",
	"about_what_we_do_3d": "yrityspaketteja",
	"about_what_we_do_3e": " kaikille, jotka haluavat auttaa esittelem\u00e4\u00e4n paikallisia yrityksi\u00e4 Bitcoinin hyv\u00e4ksymiseen maksuv\u00e4lineen\u00e4.",
	"about_what_we_do_4": "Kaikki sis\u00e4lt\u00f6mme olettaa nolla ennakkotietoa Bitcoinista. Olitpa t\u00e4ysin uusi Bitcoinin parissa tai kokenut bitcoiner, joka etsii jaettavia resursseja, bitcoin.rocks on sinua varten.",
	"about_editorial_header": "Toimitustapamme",
	"about_editorial_1": "Jokainen sis\u00e4lt\u00f6 bitcoin.rocksilla on huolellisesti valikoitu ja faktantarkistettu. Kun viittaamme tietoihin tai tilastoihin, mainitsemme l\u00e4hteemme, jotta voit tarkistaa tiedot itse.",
	"about_editorial_2": "Linkitamme luotettaviin l\u00e4hteisiin, kuten TIME Magazine, Forbes, MIT Technology Review, Lyn Alden ja monet muut. Uskomme, ett\u00e4 Bitcoin puhuu puolestaan, kun faktat esitet\u00e4\u00e4n selke\u00e4sti.",
	"about_editorial_3": "Sis\u00e4lt\u00f6mme tarkistetaan ja p\u00e4ivitet\u00e4\u00e4n s\u00e4\u00e4nn\u00f6llisesti tarkkuuden ja ajankohtaisuuden varmistamiseksi. Kaikki sis\u00e4lt\u00f6 keskittyy yksinomaan Bitcoin-koulutukseen.",
	"about_open_source_header": "Avoin l\u00e4hdekoodi",
	"about_open_source_1a": "bitcoin.rocks on ilmainen avoimen l\u00e4hdekoodin projekti, joka on lisensoitu MIT-lisenssill\u00e4. Kaikki koodimme on julkisesti saatavilla ",
	"about_open_source_1b": "GitHubissa",
	"about_open_source_1c": ".",
	"about_open_source_2": "Kuka tahansa voi osallistua bitcoin.rocksiin. Toivotamme erityisesti tervetulleiksi k\u00e4\u00e4nt\u00e4j\u00e4t, jotka auttavat tekemaan sis\u00e4ll\u00f6st\u00e4mme saavutettavaa ihmisille ymp\u00e4ri maailmaa.",
	"about_open_source_3": "Vapaaehtoisten k\u00e4\u00e4nt\u00e4jien yhteis\u00f6mme ansiosta bitcoin.rocks on t\u00e4ll\u00e4 hetkell\u00e4 saatavilla 41 kielell\u00e4 ja kasvaa edelleen.",
	"about_open_source_contribute": "Opi, miten voit osallistua.",
	"about_contact_header": "Ota yhteytt\u00e4",
	"about_contact_1": "Haluaisimme kuulla sinusta. Olipa sinulla kysymys, ehdotus tai haluat vain sanoa hei, \u00e4l\u00e4 ep\u00e4r\u00f6i ottaa yhteytt\u00e4.",
	"about_contact_email": "S\u00e4hk\u00f6posti:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Saat tarrasi 2\u20134 viikon kuluessa. Sill\u00e4 v\u00e4lin mieti hyv\u00e4\u00e4 paikkaa tarroillesi!",
	"sticker_success_2": "Hyvi\u00e4 paikkoja tarroille ovat:",
	"sticker_success_list_1": "julkisilla paikoilla, joissa ihmiset n\u00e4kev\u00e4t ne",
	"sticker_success_list_2": "paikoissa, joista niit\u00e4 ei todenn\u00e4k\u00f6isesti poisteta nopeasti (tarrat eiv\u00e4t aiheuta pysyv\u00e4\u00e4 vahinkoa)",
	"sticker_success_list_3": "pinnoilla, joihin ne tarttuvat helposti (metalli, muovi, lasi)",
	"sticker_success_list_4": "EI yksityiselle omaisuudelle, kylttien p\u00e4\u00e4lle, pankkiautomaateille tai huoltoasemille",
	"sticker_success_3": "Haluatko n\u00e4hd\u00e4, minne muut laittavat tarransa?",
	"sticker_success_flyers_bar_new": "UUTTA!",
	"sticker_success_flyers_bar_cta": "Tulosta ja kiinnit\u00e4 Bitcoin-lentolehtisi\u00e4 \u2192"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Olemme vastaanottaneet pyynt\u00f6si.",
	"sticker_language_success_2": "Julkaisemme uusia tiedostoja er\u00e4n\u00e4, joten voi kest\u00e4\u00e4 muutaman viikon ennen kuin n\u00e4m\u00e4 tiedostot ovat ladattavissa. Tule takaisin tarkistamaan pian!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Saat postikorttisi 1\u20132 viikon kuluessa.",
	"postcard_success_2": "Kiitos, ett\u00e4 autat nopeuttamaan Bitcoinin k\u00e4ytt\u00f6\u00f6nottoa l\u00e4hett\u00e4m\u00e4ll\u00e4 n\u00e4it\u00e4 postikortteja tuntemallesi henkil\u00f6lle!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Saat kyltisi 1\u20132 viikon kuluessa. Sill\u00e4 v\u00e4lin mieti hyv\u00e4\u00e4 paikkaa kylteillesi!",
	"sign_success_3": "Haluatko n\u00e4hd\u00e4, minne muut asettavat kyltej\u00e4\u00e4n?",
	"signs_share_header": "JAA KYLTTIEN SIJOITUSPAIKAT",
	"signs_share_c1": "Jaa kuva kylttisi sijoituspaikasta meille Nostrissa, niin l\u00e4het\u00e4mme sinulle satseja! Satsit ovat bitcoinin murto-osia.",
	"signs_btn_share_on_nostr": "JAA NOSTRISSA",
	"signs_btn_what_is_nostr": "MIK\u00c4 ON NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "KORKOA KOROLLE -INFLAATIOLASKURI",
	"cic_description": "K\u00e4yt\u00e4 t\u00e4t\u00e4 korkoa korolle -inflaatiolaskuria selvitt\u00e4\u00e4ksesi, kuinka paljon palkkasi t\u00e4ytyy nousta pysy\u00e4kseen inflaation tahdissa.",
	"what_can_i_do_about": "Mit\u00e4 voin tehd\u00e4",
	"what_can_i_do_about_2": "inflaatiolle?",
	"cic_inflation_cta": "Kielt\u00e4ydy inflaatiosta Bitcoinilla"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Pakene Matriisista Nostrilla",
	"nostr_header": "PAKENE MATRIISISTA NOSTRILLA"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Mik\u00e4 on Nostr?",
	"what_is_nostr_header": "MIK\u00c4 ON NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
