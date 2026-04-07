/**
 * Creates Catalan (ca) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ca';
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

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "404 Error | Pàgina no trobada",
	"404_message": "AQUESTA PÀGINA TRENCADA NO TÉ VALOR",
	"404_home": "TORNA A L'INICI"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Sobre bitcoin.rocks — Educació sobre Bitcoin des de 2022",
	"about_description": "bitcoin.rocks és un lloc web d'educació sobre Bitcoin gratuït i de codi obert, fundat el 2022. La nostra missió és accelerar l'adopció de Bitcoin a través de l'educació.",
	"about_header": "SOBRE",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "La nostra missió",
	"about_mission_1": "bitcoin.rocks va ser fundat el 2022 amb una missió senzilla: accelerar l'adopció de Bitcoin a través de l'educació.",
	"about_mission_2": "Existim per ser el primer enllaç que comparteixes amb algú que té curiositat sobre Bitcoin. Un punt de partida amable i accessible que explica com Bitcoin està construint un món millor.",
	"about_mission_3": "Massa gent malinterpreta Bitcoin o mai se li ha presentat adequadament. Volem canviar això proporcionant contingut educatiu gratuït i d'alta qualitat que qualsevol pugui entendre.",
	"about_what_we_do_header": "Què fem",
	"about_what_we_do_1": "Creem contingut educatiu gratuït per a nous usuaris de Bitcoin. El nostre lloc web cobreix temes com la inflació, l'autocustòdia, les carteres, la Xarxa Lightning i com Bitcoin es compara amb altres actius i sistemes de pagament.",
	"about_what_we_do_2a": "Enviem ",
	"about_what_we_do_2b": "adhesius de Bitcoin gratuïts",
	"about_what_we_do_2c": " a la teva porta perquè puguis ajudar a difondre el coneixement de Bitcoin a la teva comunitat. Centenars de persones escanegen els codis QR d'aquests adhesius cada mes per aprendre sobre Bitcoin.",
	"about_what_we_do_3a": "També proporcionem ",
	"about_what_we_do_3b": "fulletons imprimibles",
	"about_what_we_do_3c": " i ",
	"about_what_we_do_3d": "kits per a empreses",
	"about_what_we_do_3e": " per a qualsevol que vulgui ajudar a incorporar empreses locals perquè acceptin pagaments amb Bitcoin.",
	"about_what_we_do_4": "Tot el nostre contingut assumeix zero coneixement previ sobre Bitcoin. Tant si ets nou a Bitcoin com si ets un Bitcoiner experimentat que busca recursos per compartir, bitcoin.rocks és per a tu.",
	"about_editorial_header": "El nostre enfocament editorial",
	"about_editorial_1": "Cada peça de contingut a bitcoin.rocks està seleccionada i verificada. Quan fem referència a dades o estadístiques, citem les nostres fonts perquè puguis verificar la informació tu mateix.",
	"about_editorial_2": "Enllacem a fonts de confiança com TIME Magazine, Forbes, MIT Technology Review, Lyn Alden i moltes altres. Creiem que Bitcoin parla per si mateix quan els fets es presenten amb claredat.",
	"about_editorial_3": "El nostre contingut es revisa i actualitza regularment per garantir la precisió i la frescor. Tot el contingut està centrat exclusivament en l'educació sobre Bitcoin.",
	"about_open_source_header": "Codi Obert",
	"about_open_source_1a": "bitcoin.rocks és un projecte gratuït de codi obert amb llicència MIT. Tot el nostre codi font està disponible públicament ",
	"about_open_source_1b": "a GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Qualsevol pot contribuir a bitcoin.rocks. Donem especialment la benvinguda als traductors que ajuden a fer el nostre contingut accessible a persones d'arreu del món.",
	"about_open_source_3": "Gràcies a la nostra comunitat de traductors voluntaris, bitcoin.rocks està disponible actualment en 37 idiomes i segueix creixent.",
	"about_open_source_contribute": "Aprèn com contribuir.",
	"about_contact_header": "Contacta amb nosaltres",
	"about_contact_1": "Ens encantaria saber de tu. Si tens una pregunta, un suggeriment o simplement vols dir hola, contacta amb nosaltres en qualsevol moment.",
	"about_contact_email": "Correu electrònic:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Rebràs les teves postals en 1-2 setmanes.",
	"postcard_success_2": "Gràcies per ajudar a accelerar l'adopció de Bitcoin enviant aquestes postals a algú que coneixes!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Rebràs els teus cartells en 1-2 setmanes. Mentrestant, intenta pensar en bons llocs per posar els teus cartells!",
	"sign_success_3": "Vols veure on posa la gent els seus cartells?",
	"signs_share_header": "COMPARTEIX ELS TEUS LLOCS DE CARTELLS",
	"signs_share_c1": "Comparteix una foto del lloc del teu cartell amb nosaltres a Nostr i et farem zap de sats! Els sats són fraccions de bitcoin.",
	"signs_btn_share_on_nostr": "COMPARTEIX A NOSTR",
	"signs_btn_what_is_nostr": "QUÈ ÉS NOSTR?"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Rebràs els teus adhesius en 2-4 setmanes. Mentrestant, intenta pensar en un bon lloc per posar els teus adhesius!",
	"sticker_success_2": "Bons llocs per als adhesius són:",
	"sticker_success_list_1": "en llocs públics on la gent els veurà",
	"sticker_success_list_2": "en llocs on és poc probable que s'eliminin ràpidament (els adhesius no causen danys permanents)",
	"sticker_success_list_3": "en superfícies on s'enganxaran fàcilment (metall, plàstic, vidre)",
	"sticker_success_list_4": "NO en propietat privada, cobrint senyalització, en caixers automàtics o gasolineres",
	"sticker_success_3": "Vols veure on posa la gent els seus adhesius?",
	"sticker_success_flyers_bar_new": "NOU!",
	"sticker_success_flyers_bar_cta": "Imprimeix i penja fulletons de Bitcoin →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "La teva sol·licitud s'ha rebut correctament.",
	"sticker_language_success_2": "Publiquem fitxers nous per lots, de manera que pot trigar unes setmanes fins que aquests fitxers estiguin disponibles per descarregar. Torna-hi aviat!"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "CALCULADORA D'INFLACIÓ COMPOSTA",
	"cic_description": "Utilitza la Calculadora d'Inflació Composta per saber quant ha d'augmentar el teu sou per mantenir-te al dia amb la inflació.",
	"what_can_i_do_about": "Què puc fer",
	"what_can_i_do_about_2": "sobre la inflació?",
	"cic_inflation_cta": "Surt de la inflació amb Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Escapa de la Matriu amb Nostr",
	"nostr_header": "ESCAPA DE LA MATRIU AMB NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Què és Nostr?",
	"what_is_nostr_header": "QUÈ ÉS NOSTR?"
});

console.log('\nDone creating simple files for Catalan (ca).');
