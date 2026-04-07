/**
 * Creates Basque (eu) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'eu';
const today = '2026-04-06';

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
	"404_title": "404 Errorea | Orria ez da aurkitu",
	"404_message": "ORRI HAUTSITUA HONEK EZ DU BALIO",
	"404_home": "ITZULI HASIERARA"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "bitcoin.rocks-i buruz — Bitcoin Hezkuntza 2022tik",
	"about_description": "bitcoin.rocks kode irekiko Bitcoin hezkuntza webgune doako bat da, 2022an sortua. Gure helburua Bitcoin adopzioa azkartzea da hezkuntzaren bidez.",
	"about_header": "HONI BURUZ",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Gure helburua",
	"about_mission_1": "bitcoin.rocks 2022an sortu zen helburu sinple batekin: Bitcoin adopzioa azkartzea hezkuntzaren bidez.",
	"about_mission_2": "Bitcoin-i buruz jakingura den norbaitekin partekatzen duzun lehen esteka izateko existitzen gara. Hasiera-puntu atsegin eta eskuragarria, Bitcoin-ek nola eraikitzen duen mundu hobea azaltzen duena.",
	"about_mission_3": "Jende askok gaizki ulertzen du Bitcoin edo ez zaie inoiz behar bezala aurkeztu. Hori aldatu nahi dugu, edozeinek uler dezakeen hezkuntza-eduki doako eta kalitate handikoa eskainiz.",
	"about_what_we_do_header": "Zer egiten dugu",
	"about_what_we_do_1": "Bitcoin-en hasiberrientzako hezkuntza-eduki doakoa sortzen dugu. Gure webguneak inflazioari, auto-zaintzari, zorroei, Lightning sareari eta Bitcoin-ek beste aktibo eta ordainketa-sistemekin nola konparatzen den bezalako gaiak lantzen ditu.",
	"about_what_we_do_2a": "Bidaltzen ditugu ",
	"about_what_we_do_2b": "Bitcoin eranskailu doakoak",
	"about_what_we_do_2c": " zure atera, zure komunitatean Bitcoin-en kontzientzia zabaltzen lagun dezazun. Ehunka pertsonek eskaneatzen dituzte eranskailu hauetako QR kodeak hilero Bitcoin-i buruz ikasteko.",
	"about_what_we_do_3a": "Eskaintzen ditugu ere ",
	"about_what_we_do_3b": "inprimagarriak diren liburuxkak",
	"about_what_we_do_3c": " eta ",
	"about_what_we_do_3d": "negozio-kitak",
	"about_what_we_do_3e": " tokiko negozioak Bitcoin ordainketak onartzera eramaten lagundu nahi duen edonorentzat.",
	"about_what_we_do_4": "Gure eduki guztiak zero aurretiko Bitcoin ezagutza suposatzen du. Bitcoin-en berria bazara edo partekatzeko baliabideak bilatzen dituen Bitcoiner esperientziaduna bazara, bitcoin.rocks zuretzat da.",
	"about_editorial_header": "Gure ikuspegi editoriala",
	"about_editorial_1": "bitcoin.rocks-eko eduki guztia kontu handiz hautatua eta egiaztatua da. Datu edo estatistikak aipatzen ditugunean, gure iturriak adierazten ditugu zuk zeuk informazioa egiaztatu ahal izateko.",
	"about_editorial_2": "Iturri fidagarrietara estekak jartzen ditugu, hala nola TIME Magazine, Forbes, MIT Technology Review, Lyn Alden eta beste asko. Sinesten dugu Bitcoin-ek berak hitz egiten duela datuak argitasunez aurkezten direnean.",
	"about_editorial_3": "Gure edukia aldizka berrikusten eta eguneratzen da zehaztasuna eta freskotasuna bermatzeko. Eduki guztia soilik Bitcoin hezkuntzara bideratuta dago.",
	"about_open_source_header": "Kode Irekia",
	"about_open_source_1a": "bitcoin.rocks MIT Lizentziapean dagoen kode irekiko proiektu doako bat da. Gure kode-base osoa publikoki eskuragarri dago ",
	"about_open_source_1b": "GitHub-en",
	"about_open_source_1c": ".",
	"about_open_source_2": "Edonork lagundu dezake bitcoin.rocks-en. Bereziki ongi etorriak dira gure edukia mundu osoko jendeentzat eskuragarri egiten laguntzen duten itzultzaileak.",
	"about_open_source_3": "Gure itzultzaile boluntarioen komunitateari esker, bitcoin.rocks gaur egun 34 hizkuntzatan dago eskuragarri eta hazten jarraitzen du.",
	"about_open_source_contribute": "Ikasi nola lagundu.",
	"about_contact_header": "Jar zaitez gurekin harremanetan",
	"about_contact_1": "Zuregandik entzutea gustatuko litzaiguke. Galdera, iradokizun bat baduzu, edo besterik gabe kaixo esan nahi baduzu, jar zaitez gurekin harremanetan edozein unetan.",
	"about_contact_email": "Posta elektronikoa:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Zure postalak 1-2 astetan jasoko dituzu.",
	"postcard_success_2": "Eskerrik asko ezagutzen duzun norbaiti postal hauek bidaliz Bitcoin adopzioa azkartzen laguntzeagatik!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Zure kartelak 1-2 astetan jasoko dituzu. Bitartean, zure kartelak jartzeko leku onak pentsatzen saiatu!",
	"sign_success_3": "Ikusi nahi duzu beste jendeak non jartzen dituen bere kartelak?",
	"signs_share_header": "PARTEKATU ZURE KARTEL LEKUAK",
	"signs_share_c1": "Partekatu zure kartel lekuaren argazki bat gurekin Nostr-en eta sats-ak zap egingo dizkizugu! Sats-ak bitcoin-en zatikiak dira.",
	"signs_btn_share_on_nostr": "PARTEKATU NOSTR-EN",
	"signs_btn_what_is_nostr": "ZER DA NOSTR?"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Zure eranskailuak 2-4 astetan jasoko dituzu. Bitartean, zure eranskailuak jartzeko leku on bat pentsatzen saiatu!",
	"sticker_success_2": "Eranskailu-leku onak hauek dira:",
	"sticker_success_list_1": "jendeak ikusiko dituen leku publikoetan",
	"sticker_success_list_2": "azkar kentzeko probabilitate txikia duten lekuetan (eranskailuek ez dute kalte iraunkorrik eragiten)",
	"sticker_success_list_3": "erraz itsatsiko diren azaleretan (metala, plastikoa, beira)",
	"sticker_success_list_4": "EZ jabetza pribatuan, seinalizazioa estaliz, kutxazainetan edo gasolina ponpetan",
	"sticker_success_3": "Ikusi nahi duzu beste jendeak non jartzen dituen bere eranskailuak?",
	"sticker_success_flyers_bar_new": "BERRIA!",
	"sticker_success_flyers_bar_cta": "Inprimatu eta jarri Bitcoin liburuxkak →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Zure eskaera arrakastaz jaso dugu.",
	"sticker_language_success_2": "Fitxategi berriak taldeka argitaratzen ditugu, beraz, hainbat aste behar izan daitezke fitxategi hauek deskargatzeko prest egoteko. Begiratu laster!"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "INFLAZIO KONPOSATU KALKULAGAILUA",
	"cic_description": "Erabili Inflazio Konposatu Kalkulagailu hau jakiteko zenbat igo behar duen zure soldata inflazioarekin mantentzeko.",
	"what_can_i_do_about": "Zer egin dezaket",
	"what_can_i_do_about_2": "inflazioari buruz?",
	"cic_inflation_cta": "Irten inflazioaretik Bitcoin-ekin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Ihes egin Matrizetik Nostr-ekin",
	"nostr_header": "IHES EGIN MATRIZETIK NOSTR-EKIN"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Zer da Nostr?",
	"what_is_nostr_header": "ZER DA NOSTR?"
});

console.log('\nDone creating simple files for Basque (eu).');
