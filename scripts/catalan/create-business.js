/**
 * Creates Catalan (ca) translation files for business/ subdirectory
 * All 15 business files
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

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin és bo per als negocis",
	"biz_header": "BITCOIN ÉS BO PER ALS NEGOCIS",
	"biz_s1": "Comissions baixes sense mínims",
	"biz_s1_c1": "Bitcoin et permet rebre pagaments directament dels teus clients, com els diners en efectiu. La xarxa Bitcoin funciona sense intermediaris com bancs i empreses de targetes de crèdit que cobren comissions elevades.",
	"biz_s2": "Liquidació instantània",
	"biz_s2_c1": "Com els diners en efectiu, els pagaments amb Bitcoin es liquiden instantàniament. No necessites esperar que la teva empresa de targetes de crèdit o banc et pagui. En lloc d'això, tens accés als teus diners immediatament.",
	"biz_s3": "Sense devolucions ni frau",
	"biz_s3_c1": "Com que els pagaments amb Bitcoin es fan directament entre tu i els teus clients, és impossible que ningú et retorni els diners amb una devolució de càrrec.",
	"biz_s3_c2": "No es poden enviar Bitcoins falsificats a la Xarxa Bitcoin, la qual cosa significa que mai t'hauràs de preocupar per transaccions fraudulentes que poden costar diners al teu negoci.",
	"biz_s4": "Aconsegueix més clients",
	"biz_s4_c1": "Milions de persones tenen Bitcoin i volen gastar els seus Bitcoin en llocs que l'acceptin.",
	"biz_s4_c2": "Simplement acceptant Bitcoin, el teu negoci pot aparèixer als mapes de comerços Bitcoin i obtenir exposició gratuïta a nous clients de Bitcoin.",
	"biz_s4_c3": "Acceptar Bitcoin és 100% gratuït. No hi ha contractes ni comissions ocultes."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Descobreix per què Bitcoin és bo per als negocis",
	"why_header": "BITCOIN ÉS BO PER ALS NEGOCIS",
	"why_good_for_you": "BITCOIN TAMBÉ ÉS BO PER A TU!",
	"why_learn_more_lowercase": "Més informació.",
	"why_s1": "Bitcoin no té inflació",
	"why_s1_c1": "La inflació passa quan es creen o imprimeixen més diners del no-res. Això fa que els teus diners valguin menys amb el temps.",
	"why_s1_c2": "Bitcoin té una oferta fixa, la qual cosa significa que ningú pot imprimir més Bitcoin.",
	"why_s2": "Bitcoin no té pànics bancaris",
	"why_s2_c1": "Diversos bancs als EUA han col·lapsat en els últims anys a causa de pànics bancaris.",
	"why_s2_c2": "En lloc de simplement guardar els teus diners, els bancs inverteixen i presten els teus diners. Si aquestes inversions no van bé, no tenen prou per tornar-te'ls.",
	"why_s2_c3": "I el fons d'assegurança de la FDIC només té 1$ per cada 100$ que assegura.",
	"why_s3": "Bitcoin no necessita permís",
	"why_s3_c1": "A diferència de les xarxes financeres tradicionals, Bitcoin no requereix permís per ser utilitzat.",
	"why_s3_c2": "Això significa que ningú et pot impedir fer servir Bitcoin per cap motiu. És la primera xarxa financera que pots utilitzar sense por a la censura o confiscació.",
	"why_s4": "Bitcoin està construint un món millor",
	"why_s4_c1": "Bitcoin és una tecnologia mal entesa que està construint un món millor.",
	"why_s4_c2": "Bitcoin ha permès als activistes de drets humans lluitar per la llibertat, ha reduït les emissions globals de metà, ha salvat parcs nacionals i molt més."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Accepta pagaments amb Bitcoin al teu negoci",
	"guide_header": "PREPARAT PER ACCEPTAR BITCOIN AL TEU NEGOCI?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Preguntes freqüents sobre acceptar Bitcoin",
	"faq_description": "Tens preguntes sobre acceptar pagaments amb Bitcoin al teu negoci?",
	"faq_header": "TENS PREGUNTES SOBRE ACCEPTAR PAGAMENTS AMB BITCOIN?",
	"faq_s1": "Què és Bitcoin?",
	"faq_s1_c1": "Bitcoin és dues coses: diners digitals i una xarxa informàtica.",
	"faq_s1_c2": "Pots enviar bitcoin (els diners digitals) directament a altres persones utilitzant la Xarxa Bitcoin.",
	"faq_s1_c3": "La Xarxa Bitcoin pot funcionar sense intermediaris ni autoritats centrals, com bancs o empreses de targetes de crèdit, de manera que pots evitar les seves comissions de transacció.",
	"faq_s1_c4": "Les transaccions de Bitcoin aconsegueixen la liquidació final ràpidament (10 minuts) i mai es poden revertir, de manera que pots dormir tranquil sabent que els teus diners són els teus diners.",
	"faq_s2": "Com pot Bitcoin beneficiar el meu negoci?",
	"faq_s2_c1": "Bitcoin et permet acceptar pagaments amb comissions més baixes i aconseguir més clients. Els pagaments amb Bitcoin tenen comissions baixes sense mínims, es liquiden instantàniament i són immunes a devolucions de càrrec i frau.",
	"faq_s2_c2": "Acceptar Bitcoin és gratuït i et permet llistar el teu negoci als mapes de comerços Bitcoin perquè els usuaris de Bitcoin puguin trobar fàcilment el teu negoci.",
	"faq_s2_c3": "Veu totes les maneres en què Bitcoin és bo per als negocis.",
	"faq_s3": "Com accepto pagaments amb Bitcoin?",
	"faq_s3_c1": "Tot el que necessites per acceptar pagaments amb Bitcoin és una cartera Bitcoin gratuïta.",
	"faq_s3_c2": "La nostra guia de carteres et configurarà ràpidament i fàcilment perquè puguis desbloquejar els beneficis d'acceptar Bitcoin avui!",
	"faq_s3_c3": "Veure Guia de Carteres",
	"faq_s4": "Puc convertir els pagaments de Bitcoin que rebo a la meva moneda local?",
	"faq_s4_c1": "Sí! Utilitzant una cartera híbrida, pots convertir automàticament els pagaments de Bitcoin que reps a la teva moneda local tan aviat com es rebi un pagament.",
	"faq_s4_c2": "La nostra guia de carteres et pot ajudar a configurar-te ràpidament i fàcilment.",
	"faq_s4_c3": "També pots optar per conservar una part dels pagaments que reps com a Bitcoin. Estalviar en Bitcoin té molts beneficis:",
	"faq_s4_c4": "Bitcoin és un sistema financer de reserva completa.",
	"faq_s4_c5": "Bitcoin no té inflació.",
	"faq_s4_c6": "Aquests beneficis fan de Bitcoin una gran manera d'emmagatzemar diners a llarg termini.",
	"faq_s4_c7": "Fins i tot si tries convertir tots els teus pagaments de Bitcoin a dòlars, encara obtens els beneficis d'acceptar pagaments amb comissions molt més baixes mentre arribes a més clients potencials.",
	"faq_s5": "Puc acceptar pagaments amb Bitcoin en persona?",
	"faq_s5_c1": "Sí! És fàcil acceptar pagaments amb Bitcoin en persona utilitzant una cartera Bitcoin.",
	"faq_s5_c2": "La nostra guia de carteres et pot ajudar a escollir la cartera Bitcoin que és millor per al teu negoci.",
	"faq_s5_c3": "Veure Guia de Carteres",
	"faq_s6": "Puc acceptar pagaments amb Bitcoin en línia?",
	"faq_s6_c1": "Sí! És fàcil acceptar pagaments amb Bitcoin en línia amb la teva botiga en línia existent.",
	"faq_s6_c2": "Consulta la nostra guia de carteres per a més informació.",
	"faq_s7": "Com puc fer saber als meus clients que accepto Bitcoin?",
	"faq_s7_c1": "Oferim adhesius gratuïts de 'Bitcoin acceptat aquí' que pots mostrar al teu negoci per informar als teus clients que acceptes Bitcoin.",
	"faq_s7_c2": "Fes clic aquí per sol·licitar els teus adhesius.",
	"faq_s7_c3": "També pots llistar el teu negoci als mapes de comerços Bitcoin de forma gratuïta i obtenir exposició a milions d'usuaris de Bitcoin que volen gastar els seus Bitcoin en negocis que l'acceptin.",
	"faq_s7_c4": "Llista't ara.",
	"faq_s8": "Com puc aconseguir més clients acceptant Bitcoin?",
	"faq_s8_c1": "Hi ha milions d'usuaris de Bitcoin que volen gastar els seus Bitcoin en negocis que l'acceptin.",
	"faq_s8_c2": "Simplement acceptant pagaments amb Bitcoin, el teu negoci pot aparèixer als mapes gratuïts de comerços Bitcoin i donar-te exposició a nous clients potencials.",
	"faq_s8_c3": "Llista't ara.",
	"faq_s9": "Quant costa acceptar Bitcoin?",
	"faq_s9_c1": "Acceptar Bitcoin al teu negoci és 100% gratuït. No hi ha contractes ni comissions ocultes.",
	"faq_s9_c2": "Consulta la nostra guia de carteres per començar a acceptar pagaments amb Bitcoin avui."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Com acceptar pagaments amb Bitcoin",
	"wallets_header": "ACONSEGUEIX UNA CARTERA BITCOIN GRATUÏTA PER ACCEPTAR PAGAMENTS AMB BITCOIN",
	"wallets_intro_1": "Totes les carteres Bitcoin són interoperables, de manera que els teus clients et poden pagar amb Bitcoin sense importar quina cartera facin servir.",
	"wallets_intro_2": "Carteres exclusivament Bitcoin:",
	"wallets_intro_3": "Aquestes són carteres purament de Bitcoin que desbloquegen tots els beneficis de Bitcoin: sense intermediaris, comissions baixes i sense devolucions de càrrec ni frau.",
	"wallets_intro_4": "Carteres híbrides:",
	"wallets_intro_5": "Aquestes et permeten canviar qualsevol porció del teu Bitcoin per dòlars tan aviat com un client et pagui. Les comissions segueixen sent menors que les de les targetes de crèdit, però més altes que les de pagaments purament amb Bitcoin.",
	"wallets_intro_6": "Ambdues són excel·lents maneres d'acceptar Bitcoin. La cartera específica que facis servir dependrà de la mida i el tipus del teu negoci.",
	"wallets_choice_sole": "carteres per a negocis de propietat individual",
	"wallets_choice_multiple": "carteres per a negocis amb diversos empleats",
	"wallets_choice_online": "carteres per a negocis en línia",
	"wallets_choice_invoice": "carteres per a negocis basats en factures",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Pots acceptar pagaments amb Bitcoin amb el teu terminal Square PoS existent o la integració de la botiga en línia. Mai ha estat tan fàcil acceptar pagaments amb Bitcoin.",
	"wallets_feature_bitcoin_only": "Cartera exclusivament Bitcoin",
	"wallets_feature_no_info": "No es requereix informació",
	"wallets_feature_in_person": "Només pagaments en persona",
	"wallets_feature_settles_bitcoin": "Liquida 100% en Bitcoin",
	"wallets_feature_hybrid": "Cartera híbrida",
	"wallets_feature_info": "Es requereix informació del negoci",
	"wallets_feature_in_person_online": "Pagaments en persona i en línia",
	"wallets_feature_settles_both": "Liquida en Bitcoin i dòlars",
	"wallets_feature_multiple_employees": "Suport per a múltiples empleats (BPTs)",
	"wallets_feature_self_hosted": "Autoallotjat = 0% comissions",
	"wallets_feature_online_store": "Integració amb botiga en línia",
	"wallets_feature_invoicing": "Programari de facturació gratuït",
	"wallets_get_wallet": "OBTENIR CARTERA"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Guia de comptabilitat empresarial per a Bitcoin",
	"accounting_description": "Aprèn com comptabilitzar correctament els pagaments amb Bitcoin a la comptabilitat del teu negoci.",
	"accounting_header": "GUIA DE COMPTABILITAT BITCOIN",
	"accounting_s1_c1": "Acceptar Bitcoin té molts beneficis com acceptar pagaments amb comissions més baixes i aconseguir més clients.",
	"accounting_s1_c2": "Si utilitzes una Cartera Híbrida de la nostra Guia de Carteres i vens automàticament el 100% del Bitcoin que reps per dòlars, no necessites fer cap canvi a la teva comptabilitat actual.",
	"accounting_s1_c3": "Veure Guia de Carteres.",
	"accounting_s1_c4": "No obstant això, si conserves part dels pagaments de Bitcoin que reps com a Bitcoin, hauràs de fer seguiment d'alguns detalls per a la teva comptabilitat. Això pot semblar intimidant al principi, però en realitat és bastant senzill.",
	"accounting_s1_c5": "Nota: aquesta guia és només informativa i no s'ha de considerar assessorament fiscal.",
	"accounting_s1_c6": "Si necessites assessorament fiscal, recomanem molt Satoshi Pacioli Accounting Services, una empresa comptable especialitzada en comptabilitat Bitcoin.",
	"accounting_s2": "SEGUIMENT DEL TEU COST BASE",
	"accounting_s2_c1": "Fer seguiment del teu cost base serà la diferència més gran entre comptabilitzar dòlars i comptabilitzar Bitcoin. Fins i tot si veus el teu negoci completament en termes de Bitcoin, has de declarar el valor en dòlars de cada transacció als teus impostos.",
	"accounting_s2_c2": "Si utilitzes QuickBooks, pots fer-ho automàticament utilitzant el connector Bitcoin Sync.",
	"accounting_s2_c3": "Si no utilitzes QuickBooks, recomanem Satoshi Pacioli Accounting Services, una empresa comptable especialitzada en comptabilitat Bitcoin.",
	"accounting_s2_c4": "Per fer-ho manualment, simplement has de fer seguiment de la quantitat de Bitcoin que vas rebre i el valor en dòlars de la transacció de Bitcoin en aquell dia.",
	"accounting_s2_c5": "Pots veure el preu actual en dòlars de Bitcoin aquí.",
	"accounting_s2_c6": "Fes seguiment d'aquesta informació en un full de càlcul d'Excel i dona-la al teu comptable.",
	"accounting_s2_c7": "També pots importar aquestes dades a Excel automàticament.",
	"accounting_s2_c8": "També pots veure el preu històric en dòlars de Bitcoin en dies passats, de manera que no has de fer-ho cada dia.",
	"accounting_s3": "GASTAR O VENDRE EL TEU BITCOIN",
	"accounting_s3_c1": "Si utilitzes una Cartera Híbrida de la nostra Guia de Carteres i vens automàticament el 100% del Bitcoin que reps per dòlars, no necessites fer cap canvi a la teva comptabilitat actual.",
	"accounting_s3_c2": "Veure Guia de Carteres.",
	"accounting_s3_c3": "Si tries gastar o vendre part del Bitcoin que reps després de mantenir-lo durant un temps, simplement has d'afegir el preu al qual el vas vendre al teu full de càlcul d'Excel que fa seguiment del teu cost base.",
	"accounting_s3_c4": "Per exemple, si vas rebre 100$ en Bitcoin l'1 de gener i vas decidir vendre'l o gastar-lo l'1 de febrer a un nou valor de 110$, hauries de registrar un guany de capital de 10$ a la teva comptabilitat.",
	"accounting_s3_c5": "Això també pot funcionar a l'inrevés. Per exemple, si vas rebre 100$ en Bitcoin l'1 de gener i vas decidir vendre'l o gastar-lo l'1 de febrer a un nou valor de 90$, hauries de registrar una pèrdua de capital de 10$ a la teva comptabilitat.",
	"accounting_s4": "NECESSITO MÉS AJUDA",
	"accounting_s4_c1": "Si necessites més ajuda per integrar Bitcoin a la comptabilitat del teu negoci, recomanem molt Satoshi Pacioli Accounting Services, una empresa comptable especialitzada en comptabilitat Bitcoin.",
	"accounting_s4_c2": "Més informació sobre Satoshi Pacioli Accounting Services."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Mapes de comerços Bitcoin - Llista el teu negoci gratis",
	"maps_header": "LLISTA'T ALS MAPES DE COMERÇOS BITCOIN I ACONSEGUEIX MÉS CLIENTS",
	"maps_request_details": "Introdueix la informació del teu negoci a continuació i et llistarem als mapes de comerços Bitcoin de forma gratuïta. Això permetrà als Bitcoiners trobar el teu negoci i gastar els seus Bitcoin al teu negoci!",
	"maps_view": "Veure el mapa aquí."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "El teu negoci apareixerà als mapes de comerços Bitcoin en 1 a 2 setmanes.",
	"kit_success_2": "Veure el mapa aquí."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Kit Empresarial Bitcoin",
	"kit_header": "IMPRIMEIX EL TEU PROPI KIT EMPRESARIAL BITCOIN",
	"kit_request": "SOL·LICITA EL TEU KIT GRATUÏT",
	"kit_request_details": "Cada Kit Empresarial Bitcoin inclou dos fulletons per facilitar que un negoci local accepti Bitcoin.",
	"kit_country_global_print": "Global — Imprimeix els meus propis kits",
	"kit_enter_address": "Introdueix la teva adreça postal i t'enviarem un Kit Empresarial Bitcoin gratuït en un sobre blanc pla. Les dades d'adreça s'eliminen un cop enviat el kit.",
	"kit_print_details": "Pots participar imprimint els teus propis fulletons, visquis on visquis! També pots enviar negocis al nostre kit empresarial digital per evitar imprimir res.",
	"kit_view_files": "VEURE FITXERS",
	"kit_digital_kit": "KIT DIGITAL",
	"kit_resources": "CADA KIT ENLLAÇA A AQUESTS RECURSOS GRATUÏTS"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Rebràs el teu Kit Empresarial Bitcoin en 1 a 2 setmanes en un sobre blanc pla."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Adhesius de 'Bitcoin acceptat aquí'",
	"stickers_header": "ACONSEGUEIX ELS TEUS ADHESIUS GRATUÏTS DE 'BITCOIN ACCEPTAT AQUÍ'",
	"stickers_request": "Aconsegueix els teus adhesius gratuïts",
	"stickers_request_details": "Fes saber als teus clients que acceptes pagaments amb Bitcoin amb aquests adhesius gratuïts de 'Bitcoin acceptat aquí'.",
	"stickers_country_global_print": "Global — Imprimeix els meus propis adhesius",
	"stickers_request_instructions": "Rebràs tres adhesius de 'Bitcoin acceptat aquí' en un sobre blanc pla. Si necessites més de tres adhesius per al teu negoci, no dubtis a sol·licitar-ne diversos cops. Les dades d'adreça s'eliminen després que s'enviïn els teus adhesius gratuïts.",
	"stickers_print_details": "Pots imprimir els teus propis adhesius de 'Bitcoin acceptat aquí', visquis on visquis! Fes clic al teu idioma a continuació per veure els fitxers d'adhesius i les instruccions.",
	"stickers_request_language": "No veus el teu idioma? Omple el formulari a continuació per sol·licitar fitxers d'adhesius de 'Bitcoin acceptat aquí' en el teu idioma local."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Rebràs els teus adhesius en 1 a 2 setmanes en un sobre blanc pla. Cada sobre inclou 3 adhesius. Si necessites més de 3 adhesius per al teu negoci, no dubtis a sol·licitar-ne un altre paquet!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Crearem i publicarem el teu fitxer d'adhesiu en 3 a 4 setmanes. Gràcies per la teva paciència!"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Imprimeix el teu propi Kit Empresarial Bitcoin",
	"english_bbk_files_description": "Descarrega els fitxers de fulletons aquí.",
	"english_header": "IMPRIMEIX ELS TEUS PROPIS FULLETONS DEL KIT EMPRESARIAL BITCOIN EN ANGLÈS"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "Fitxers d'adhesius 'Bitcoin acceptat aquí' en anglès",
	"english_biz_sticker_files_description": "Descarrega fitxers d'adhesius en anglès per imprimir els teus propis adhesius de 'Bitcoin acceptat aquí'.",
	"english_header": "DESCARREGA FITXERS D'ADHESIUS 'BITCOIN ACCEPTAT AQUÍ' EN ANGLÈS"
});

console.log('\nDone creating business files for Catalan (ca).');
