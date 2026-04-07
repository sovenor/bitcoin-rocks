/**
 * Creates Catalan (ca) translation file for inflation.json (~100+ keys)
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

writeFile(`inflation_${lang}.json`, {
	"bitcoin_doesnt_have_inflation": "Bitcoin no té inflació",
	"inflation_definition": "Bitcoin té una oferta fixa de 21 milions de monedes que mai podrà ser incrementada. A diferència de les monedes governamentals, ningú pot imprimir més Bitcoin. Tria els teus diners a continuació per saber com la inflació està afectant el teu poder adquisitiu i com Bitcoin pot ajudar.",
	"inflation_description": "Bitcoin té una oferta fixa de 21 milions de Bitcoin que existiran mai. Ningú pot imprimir més Bitcoin i causar inflació.",
	"inflation_sign_got_inflation": "TENS INFLACIÓ?",
	"inflation_save_in_bitcoin": "ESTALVIA EN BITCOIN",
	"inflation_sticker_cure": "NECESSITES UNA CURA PER A LA INFLACIÓ?",
	"inflation_sticker_learn": "DESCOBREIX COM BITCOIN POT AJUDAR",
	"inflation_sticker_got_inflation": "TENS INFLACIÓ?",
	"inflation_sticker_what_if": "I SI ELS TEUS DINERS NO TINGUESSIN INFLACIÓ?",
	"inflation_sticker_lets_find_out": "DESCOBRIM-HO",
	"inflation_sticker_bitcoin": "BITCOIN NO TÉ INFLACIÓ",
	"inflation_sticker_your_money": "PERÒ ELS TEUS DINERS SÍ",
	"inflation_calculator_opt_out": "SURT DE LA INFLACIÓ",
	"inflation_calculator_with_bitcoin": "AMB BITCOIN",
	"inflation_choose": "Tria els teus diners...",
	"inflation_choose_another": "Tria uns altres diners",
	"inflation_us_dollar": "DÒLAR AMERICÀ",
	"inflation_australian_dollar": "DÒLAR AUSTRALIÀ",
	"inflation_brazilian_real": "REAL BRASILER",
	"inflation_british_pound": "LLIURA ESTERLINA",
	"inflation_canadian_dollar": "DÒLAR CANADENC",
	"inflation_euro": "EURO",
	"inflation_honduran_lempira": "LEMPIRA HONDURENYA",
	"inflation_indian_rupee": "RUPIA ÍNDIA",
	"inflation_israeli_shekel": "XÉQUEL ISRAELIÀ",
	"inflation_japanese_yen": "IEN JAPONÈS",
	"inflation_mexican_peso": "PESO MEXICÀ",
	"inflation_nz_dollar": "DÒLAR NEOZELANDÈS",
	"inflation_philippine_peso": "PESO FILIPÍ",
	"inflation_thai_baht": "BAHT TAILANDÈS",
	"inflation_venezuelan_bolivar": "BOLÍVAR VENEÇOLÀ",
	"inflation_usd_s1_c1": "Si vas posar 100$ al banc fa 5 anys, avui tens menys de 100$ de poder adquisitiu.",
	"inflation_usd_s1_c2": "acumulat",
	"inflation_usd_s1_c3": "durant els últims $1 anys.",
	"inflation_usd_s1_c4": "Pot ser que encara tinguis aquells 100$ al teu compte bancari, però et compren menys del que feien llavors.",
	"inflation_usd_but_why": "PERÒ PER QUÈ?",
	"inflation_usd_s1_c5": "Als Estats Units, no hi ha cap límit fix de quants dòlars americans es poden crear. Aquesta oferta il·limitada és la causa arrel de la inflació.",
	"inflation_usd_s1_c6": "Des de 2020,",
	"inflation_usd_s1_c7": "la quantitat total de dòlars americans ha augmentat de 4 bilions a 18 bilions de dòlars.",
	"inflation_usd_s1_c8": "Aquesta impressió de diners ha causat una inflació rècord.",
	"inflation_usd_s1_c9": "Tot costa més ara, perquè la impressió de diners ha fet que els teus dòlars valguin menys.",
	"inflation_intro_c1": "La inflació passa quan es creen o imprimeixen més diners del no-res. Això fa que els teus diners valguin menys amb el temps.",
	"inflation_intro_c2": "A mesura que es creen més diners a través de dèficits pressupostaris i noves lleis de despesa, els diners que tens et compren menys amb el pas del temps. Com que es van imprimir tants diners durant els últims anys, el valor dels diners del teu compte bancari i la teva butxaca ha disminuït significativament amb el temps.",
	"inflation_intro_c3": "Amb Bitcoin, hi ha un límit fix de 21 milions de Bitcoin que existiran mai. Com que no es poden crear més Bitcoin, el seu valor ha augmentat significativament amb el temps.",
	"inflation_intro_usd": "Als Estats Units, no hi ha cap límit fix de quants dòlars es poden crear.",
	"inflation_intro_cad": "Al Canadà, no hi ha cap límit fix de quants dòlars canadencs es poden crear.",
	"inflation_intro_euro": "A la zona euro, no hi ha cap límit fix de quants euros es poden crear.",
	"inflation_intro_gbp": "Al Regne Unit, no hi ha cap límit fix de quantes lliures esterlines es poden crear.",
	"inflation_intro_brazilian_real": "Al Brasil, no hi ha cap límit fix de quants reals brasilers es poden crear.",
	"inflation_intro_philippine_peso": "A les Filipines, no hi ha cap límit fix de quants pesos filipins es poden crear.",
	"inflation_intro_mexican_peso": "A Mèxic, no hi ha cap límit fix de quants pesos mexicans es poden crear.",
	"inflation_intro_indian_rupee": "A l'Índia, no hi ha cap límit fix de quantes rupies índies es poden crear.",
	"inflation_intro_honduran_lempira": "A Hondures, no hi ha cap límit fix de quantes lempires hondurenyes es poden crear.",
	"inflation_intro_venezuelan_bolivar": "A Veneçuela, no hi ha cap límit fix de quants bolívars veneçolans es poden crear.",
	"inflation_intro_japanese_yen": "Al Japó, no hi ha cap límit fix de quants iens japonesos es poden crear.",
	"inflation_intro_australian_dollar": "A Austràlia, no hi ha cap límit fix de quants dòlars australians es poden crear.",
	"inflation_intro_israeli_shekel": "A Israel, no hi ha cap límit fix de quants xèquels israelians es poden crear.",
	"inflation_intro_thai_baht": "A Tailàndia, no hi ha cap límit fix de quants bahts tailandesos es poden crear.",
	"inflation_intro_nz_dollar": "A Nova Zelanda, no hi ha cap límit fix de quants dòlars neozelandesos es poden crear.",
	"inflation_cause_header": "QUÈ CAUSA LA INFLACIÓ?",
	"inflation_cause_c1": "Tot i que les cadenes de subministrament i algunes corporacions contribueixen a l'augment artificial dels preus, la causa arrel de la inflació és l'expansió de l'oferta monetària.",
	"inflation_cause_c2": "Aquesta va ser una expansió enorme de l'oferta monetària i no serà l'última vegada que passi.",
	"inflation_cause_c3": "Quan es creen més diners del no-res, el preu de tot en aquells diners puja. Això inclou els costos de matèries primeres que les empreses han de pagar pels seus productes, la qual cosa significa preus més alts per a tu.",
	"inflation_cause_c4": "La inflació no és simplement pujada de preus. La inflació és quan els teus diners valen menys amb el temps.",
	"inflation_cause_usd": "Gairebé el 80% de tots els dòlars americans que existeixen avui es van crear entre 2020 i 2023.",
	"inflation_cause_cad": "Més d'1 de cada 5 dòlars canadencs que existeixen avui es van crear entre 2020 i 2022.",
	"inflation_cause_euro": "Aproximadament 1 de cada 4 euros que existeixen avui es van crear entre 2020 i 2022.",
	"inflation_cause_gbp": "Aproximadament 1 de cada 4 lliures esterlines que existeixen avui es van crear entre 2020 i 2022.",
	"inflation_cause_brazilian_real": "Aproximadament el 40% de tots els reals brasilers que existeixen avui es van crear entre 2020 i 2022.",
	"inflation_cause_philippine_peso": "Gairebé el 50% de tots els pesos filipins que existeixen avui es van crear entre 2020 i 2022.",
	"inflation_cause_mexican_peso": "Més del 50% de tots els pesos mexicans que existeixen avui es van crear entre 2016 i 2022.",
	"inflation_cause_indian_rupee": "Més del 50% de totes les rupies índies que existeixen avui es van crear entre 2016 i 2022.",
	"inflation_cause_honduran_lempira": "Més del 50% de totes les lempires hondurenyes que existeixen avui es van crear entre 2016 i 2022.",
	"inflation_cause_venezuelan_bolivar": "Més del 80% de tots els bolívars veneçolans que existeixen avui es van crear l'últim any!",
	"inflation_cause_japanese_yen": "Més del 25% de tots els iens japonesos que existeixen avui es van crear entre 2016 i 2022.",
	"inflation_cause_australian_dollar": "Més del 50% de tots els dòlars australians que existeixen avui es van crear entre 2016 i 2022.",
	"inflation_cause_israeli_shekel": "Aproximadament el 50% de tots els xèquels israelians que existeixen avui es van crear entre 2016 i 2023.",
	"inflation_cause_thai_baht": "Aproximadament el 35% de tots els bahts tailandesos que existeixen avui es van crear entre 2016 i 2023.",
	"inflation_cause_nz_dollar": "Aproximadament el 50% de tots els dòlars neozelandesos que existeixen avui es van crear entre 2010 i 2023.",
	"inflation_cic_header": "COM M'AFECTA LA INFLACIÓ?",
	"inflation_issuance_header": "BITCOIN TÉ INFLACIÓ?",
	"inflation_issuance_c1": "La inflació és essencialment que la teva porció del 'pastís de diners' es fa més petita cada any. Així doncs, Bitcoin té inflació?",
	"inflation_issuance_c2": "Bitcoin té una oferta fixa de 21.000.000 (21 milions) de bitcoin que existiran mai. El límit de 21 milions està fixat en codi i assegurat per la xarxa informàtica més potent del món, anomenada la Xarxa Bitcoin. Aquest límit no es pot canviar.",
	"inflation_issuance_c3": "Tot i que Bitcoin no té inflació, sí que té emissió. L'emissió és el percentatge de nous Bitcoin minats cada any. Els miners de Bitcoin asseguren la xarxa, processen transaccions de Bitcoin i reben compensació pel seu treball. Els miners de Bitcoin reben compensació amb aquesta nova emissió (fins que s'esgoti) i també reben comissions de transacció.",
	"inflation_issuance_c4": "Més del 95% de tots els bitcoin ja han estat minats. Més del 99% de tots els 21 milions de bitcoin hauran estat minats l'any 2035, i la resta de menys de l'1% es minarà l'any 2140.",
	"inflation_issuance_c5": "Tot i que encara queda una mica d'emissió fins a arribar a l'oferta fixa de 21 milions de bitcoin, el punt principal és que la teva porció del pastís de 21 milions de bitcoin mai es fa més petita. Això contrasta fortament amb les monedes governamentals que fem servir. En aquells sistemes, la teva porció del pastís es fa més petita cada any quan es creen més diners del no-res.",
	"inflation_issuance_c6": "No pots imprimir més bitcoin.",
	"inflation_protect_header": "BITCOIN POT PROTEGIR ELS MEUS DINERS DE LA INFLACIÓ?",
	"inflation_protect_c1": "Bitcoin ha estat històricament excel·lent per protegir les persones de la inflació de la seva moneda local. Moltes persones que utilitzen Bitcoin com a cobertura contra la inflació emmagatzemen diners que es poden permetre mantenir com a Bitcoin durant diversos anys.",
	"inflation_protect_c2": "L'oferta fixa de Bitcoin el fa la millor manera d'estalviar els teus diners a llarg termini.",
	"inflation_protect_c3": "Quan estalvies en Bitcoin, tot tendeix a abaratir-se a llarg termini. Quan estalvies en diners governamentals que poden imprimir gratuïtament, tot tendeix a encarir-se.",
	"inflation_protect_usd": "Els dòlars americans han perdut el 90% del seu poder adquisitiu des de 1950 a mesura que els polítics n'imprimien més.",
	"inflation_protect_cad": "Els dòlars canadencs han perdut més del 90% del seu poder adquisitiu des de 1971 a mesura que els polítics n'imprimien més.",
	"inflation_protect_euro": "Els euros han perdut més del 30% del seu poder adquisitiu des de la seva creació el 1999 a mesura que els polítics n'imprimien més.",
	"inflation_protect_gbp": "Les lliures esterlines han perdut el 90% del seu poder adquisitiu des de 1950 a mesura que els polítics n'imprimien més.",
	"inflation_protect_brazilian_real": "L'oferta monetària del real brasiler va augmentar de 427 mil milions de R$ a 589 mil milions de R$ en només 2 anys a mesura que els polítics n'imprimien més.",
	"inflation_protect_brazilian_real_2": "El 2020, el govern brasiler va imprimir un nou bitllet de 200 R$. Només aquest nou bitllet va ser equivalent al 12,8% de tots els reals impresos aquell any!",
	"inflation_protect_philippine_peso": "L'oferta monetària del peso filipí gairebé s'ha duplicat des de 2020 a mesura que els polítics n'imprimien més.",
	"inflation_protect_mexican_peso": "L'oferta monetària del peso mexicà gairebé s'ha duplicat des de 2016 a mesura que els polítics n'imprimien més.",
	"inflation_protect_indian_rupee": "L'oferta monetària de la rupia índia s'ha més que duplicat des de 2016 a mesura que els polítics n'imprimien més.",
	"inflation_protect_honduran_lempira": "L'oferta monetària de la lempira hondurenya s'ha més que duplicat des de 2016 a mesura que els polítics n'imprimien més.",
	"inflation_protect_venezuelan_bolivar": "L'oferta monetària del bolívar veneçolà ha augmentat més del 500% l'últim any a mesura que els polítics n'imprimien més.",
	"inflation_protect_japanese_yen": "L'oferta monetària de l'ien japonès ha augmentat més del 33% des de 2016 a mesura que els polítics n'imprimien més.",
	"inflation_protect_australian_dollar": "L'oferta monetària del dòlar australià ha augmentat més del 100% des de 2016 a mesura que els polítics n'imprimien més.",
	"inflation_protect_israeli_shekel": "L'oferta monetària del xèquel israelià ha augmentat aproximadament un 100% des de 2016 a mesura que els polítics n'imprimien més.",
	"inflation_protect_thai_baht": "L'oferta monetària del baht tailandès ha augmentat aproximadament un 50% des de 2016 a mesura que els polítics n'imprimien més.",
	"inflation_protect_nz_dollar": "L'oferta monetària del dòlar neozelandès ha augmentat aproximadament un 100% des de 2010 a mesura que els polítics n'imprimien més.",
	"inflation_graphic_money_up": "A mesura que augmenta la quantitat de diners impresos...",
	"inflation_graphic_pp_down": "...el poder adquisitiu d'aquells diners disminueix."
});

console.log('\nDone creating inflation file for Catalan (ca).');
