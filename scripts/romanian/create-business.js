/**
 * Creates Romanian (ro) translation files for business/ subdirectory (15 files)
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ro';
const today = '2026-04-11';

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
	"bitcoin_is_good_for_business": "Bitcoin este bun pentru afaceri",
	"biz_header": "BITCOIN ESTE BUN PENTRU AFACERI",
	"biz_s1": "Comisioane mici fără minimuri",
	"biz_s1_c1": "Bitcoin îți permite să primești plăți direct de la clienții tăi, la fel ca numerarul. Rețeaua Bitcoin funcționează fără intermediari precum băncile și companiile de carduri de credit care percep comisioane mari.",
	"biz_s2": "Decontare instantanee",
	"biz_s2_c1": "La fel ca numerarul, plățile Bitcoin se decontează instantaneu. Nu trebuie să aștepți compania de carduri de credit sau banca să te plătească. În schimb, ai acces la banii tăi imediat.",
	"biz_s3": "Fără estornări sau fraudă",
	"biz_s3_c1": "Deoarece plățile Bitcoin au loc direct între tine și clienții tăi, este imposibil ca cineva să îți ia banii înapoi printr-o estornare.",
	"biz_s3_c2": "Bitcoin falsificat nu poate fi trimis în rețeaua Bitcoin, ceea ce înseamnă că nu trebuie să îți faci niciodată griji cu privire la tranzacțiile frauduloase care pot costa afacerea ta.",
	"biz_s4": "Obține mai mulți clienți",
	"biz_s4_c1": "Milioane de oameni dețin Bitcoin și vor să își cheltuiască Bitcoin la locurile care îl acceptă.",
	"biz_s4_c2": "Prin simpla acceptare a Bitcoin, afacerea ta poate fi listată pe hărțile comercianților Bitcoin și poate obține expunere gratuită la noi clienți Bitcoin.",
	"biz_s4_c3": "Acceptarea Bitcoin este 100% gratuită. Nu există contracte sau comisioane ascunse."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Află de ce Bitcoin este bun pentru afaceri",
	"why_header": "BITCOIN ESTE BUN PENTRU AFACERI",
	"why_good_for_you": "BITCOIN ESTE BUN ȘI PENTRU TINE!",
	"why_learn_more_lowercase": "Află mai multe.",
	"why_s1": "Bitcoin nu are inflație",
	"why_s1_c1": "Inflația apare când se tipăresc mai mulți bani sau se creează din nimic. Asta face ca banii tăi să valoreze mai puțin în timp.",
	"why_s1_c2": "Bitcoin are o ofertă fixă, ceea ce înseamnă că nimeni nu poate tipări mai mult Bitcoin.",
	"why_s2": "Bitcoin nu are crize bancare",
	"why_s2_c1": "Mai multe bănci americane s-au prăbușit în ultimii ani din cauza crizelor bancare.",
	"why_s2_c2": "În loc să îți păstreze doar banii, băncile investesc și împrumută banii tăi. Dacă acele investiții nu merg bine, nu au suficienți bani să te plătească înapoi.",
	"why_s2_c3": "Iar fondul de asigurări FDIC are doar 1 dolar pentru fiecare 100 de dolari pe care îi asigură.",
	"why_s3": "Bitcoin este fără permisiune",
	"why_s3_c1": "Spre deosebire de rețelele financiare tradiționale, Bitcoin nu necesită permisiune pentru a fi utilizat.",
	"why_s3_c2": "Asta înseamnă că nimeni nu te poate opri din a folosi Bitcoin din niciun motiv. Este prima rețea financiară pe care o poți folosi fără teama de cenzură sau confiscare.",
	"why_s4": "Bitcoin construiește o lume mai bună",
	"why_s4_c1": "Bitcoin este o tehnologie neînțeleasă care construiește o lume mai bună.",
	"why_s4_c2": "Bitcoin a permis activiștilor pentru drepturile omului să lupte pentru libertate, a redus emisiile globale de metan, a salvat parcuri naționale și multe altele."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Acceptă plăți Bitcoin la afacerea ta",
	"guide_header": "EȘTI PREGĂTIT SĂ ACCEPȚI BITCOIN LA AFACEREA TA?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Întrebări frecvente despre acceptarea Bitcoin",
	"faq_description": "Ai întrebări despre acceptarea plăților Bitcoin la afacerea ta?",
	"faq_header": "AI ÎNTREBĂRI DESPRE ACCEPTAREA PLĂȚILOR BITCOIN?",
	"faq_s1": "Ce este Bitcoin?",
	"faq_s1_c1": "Bitcoin este două lucruri: bani digitali și o rețea de calculatoare.",
	"faq_s1_c2": "Poți trimite bitcoin (banii digitali) direct altor persoane folosind rețeaua Bitcoin.",
	"faq_s1_c3": "Rețeaua Bitcoin poate funcționa fără intermediari sau autorități centrale, precum băncile sau companiile de carduri de credit, astfel încât poți evita comisioanele lor de tranzacție.",
	"faq_s1_c4": "Tranzacțiile Bitcoin ajung la decontare finală rapid (10 minute) și nu pot fi niciodată estornate, astfel încât poți dormi liniștit știind că banii tăi sunt ai tăi.",
	"faq_s2": "Cum poate Bitcoin să beneficieze afacerea mea?",
	"faq_s2_c1": "Bitcoin îți permite să accepți plăți cu comisioane mai mici și să obții mai mulți clienți. Plățile Bitcoin au comisioane mici fără minimuri, se decontează instantaneu și sunt imune la estornări și fraudă.",
	"faq_s2_c2": "Acceptarea Bitcoin este gratuită și îți permite să listezi afacerea pe hărțile comercianților Bitcoin, astfel încât utilizatorii Bitcoin să îți poată găsi cu ușurință afacerea.",
	"faq_s2_c3": "Vezi toate modurile în care Bitcoin este bun pentru afaceri.",
	"faq_s3": "Cum accept plăți Bitcoin?",
	"faq_s3_c1": "Tot ce ai nevoie pentru a accepta plăți Bitcoin este un portofel Bitcoin gratuit.",
	"faq_s3_c2": "Ghidul nostru de portofele te va configura rapid și ușor, astfel încât să poți debloca beneficiile acceptării Bitcoin astăzi!",
	"faq_s3_c3": "Vezi ghidul de portofele",
	"faq_s4": "Pot converti plățile Bitcoin pe care le primesc în moneda mea locală?",
	"faq_s4_c1": "Da! Folosind un portofel hibrid, poți converti automat plățile Bitcoin pe care le primești în moneda ta locală imediat ce o plată este primită.",
	"faq_s4_c2": "Ghidul nostru de portofele te poate ajuta să te configurezi rapid și ușor.",
	"faq_s4_c3": "Poți alege, de asemenea, să păstrezi o parte din plățile primite ca Bitcoin. Economisirea în Bitcoin are multe beneficii:",
	"faq_s4_c4": "Bitcoin este un sistem financiar cu rezerve complete.",
	"faq_s4_c5": "Bitcoin nu are inflație.",
	"faq_s4_c6": "Aceste beneficii fac din Bitcoin o modalitate excelentă de a stoca bani pe termen lung.",
	"faq_s4_c7": "Chiar dacă alegi să convertești toate plățile Bitcoin în dolari, beneficiezi totuși de acceptarea plăților cu comisioane mult mai mici, ajungând la mai mulți clienți potențiali.",
	"faq_s5": "Pot accepta plăți Bitcoin în persoană?",
	"faq_s5_c1": "Da! Este ușor să accepți plăți Bitcoin în persoană folosind un portofel Bitcoin.",
	"faq_s5_c2": "Ghidul nostru de portofele te poate ajuta să alegi portofelul Bitcoin cel mai potrivit pentru afacerea ta.",
	"faq_s5_c3": "Vezi ghidul de portofele",
	"faq_s6": "Pot accepta plăți Bitcoin online?",
	"faq_s6_c1": "Da! Este ușor să accepți plăți Bitcoin online cu magazinul tău online existent.",
	"faq_s6_c2": "Consultă ghidul nostru de portofele pentru mai multe informații.",
	"faq_s7": "Cum le pot spune clienților mei că accept Bitcoin?",
	"faq_s7_c1": "Oferim autocolante gratuite 'Bitcoin acceptat aici' pe care le poți afișa în afacerea ta pentru a le spune clienților că accepți Bitcoin.",
	"faq_s7_c2": "Click aici pentru a solicita autocolantele tale.",
	"faq_s7_c3": "De asemenea, poți lista afacerea ta pe hărțile comercianților Bitcoin gratuit și obține expunere la milioane de utilizatori Bitcoin care vor să își cheltuiască Bitcoin la afaceri care îl acceptă.",
	"faq_s7_c4": "Listează-te acum.",
	"faq_s8": "Cum pot obține mai mulți clienți acceptând Bitcoin?",
	"faq_s8_c1": "Există milioane de utilizatori Bitcoin care vor să își cheltuiască Bitcoin la afaceri care îl acceptă.",
	"faq_s8_c2": "Prin simpla acceptare a plăților Bitcoin, afacerea ta poate fi listată pe hărțile gratuite ale comercianților Bitcoin și îți oferă expunere la noi clienți potențiali.",
	"faq_s8_c3": "Listează-te acum.",
	"faq_s9": "Cât costă să accept Bitcoin?",
	"faq_s9_c1": "Acceptarea Bitcoin la afacerea ta este 100% gratuită. Nu există contracte sau comisioane ascunse.",
	"faq_s9_c2": "Consultă ghidul nostru de portofele pentru a începe să accepți plăți Bitcoin astăzi."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Cum să accepți plăți Bitcoin",
	"wallets_header": "OBȚINE UN PORTOFEL BITCOIN GRATUIT PENTRU A ACCEPTA PLĂȚI BITCOIN",
	"wallets_intro_1": "Toate portofelele Bitcoin sunt interoperabile, astfel încât clienții tăi îți pot plăti în Bitcoin indiferent de portofelul pe care îl folosesc.",
	"wallets_intro_2": "Portofele exclusiv Bitcoin:",
	"wallets_intro_3": "Acestea sunt portofele Bitcoin pure care deblochează toate beneficiile Bitcoin: fără intermediari, comisioane mici și fără estornări sau fraudă.",
	"wallets_intro_4": "Portofele hibride:",
	"wallets_intro_5": "Acestea îți permit să schimbi orice procent din Bitcoin pentru dolari imediat ce un client te plătește. Comisioanele sunt totuși mai mici decât plățile cu cardul de credit, dar mai mari decât plățile Bitcoin pure.",
	"wallets_intro_6": "Ambele sunt modalități excelente de a accepta Bitcoin. Portofelul specific pe care îl folosești va depinde de dimensiunea și tipul afacerii tale.",
	"wallets_choice_sole": "portofele pentru afaceri cu un singur proprietar",
	"wallets_choice_multiple": "portofele pentru afaceri cu mai mulți angajați",
	"wallets_choice_online": "portofele pentru afaceri online",
	"wallets_choice_invoice": "portofele pentru afaceri bazate pe facturi",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Poți accepta plăți Bitcoin cu terminalul Square PoS existent sau integrarea magazinului online. Nu a fost niciodată mai ușor să accepți plăți Bitcoin.",
	"wallets_feature_bitcoin_only": "Portofel exclusiv Bitcoin",
	"wallets_feature_no_info": "Nu necesită informații",
	"wallets_feature_in_person": "Doar plăți în persoană",
	"wallets_feature_settles_bitcoin": "Decontare 100% în Bitcoin",
	"wallets_feature_hybrid": "Portofel hibrid",
	"wallets_feature_info": "Informații de afacere necesare",
	"wallets_feature_in_person_online": "Plăți în persoană și online",
	"wallets_feature_settles_both": "Decontare în Bitcoin și dolari",
	"wallets_feature_multiple_employees": "Suport pentru angajați multipli (BPT-uri)",
	"wallets_feature_self_hosted": "Auto-găzduit = 0% comisioane",
	"wallets_feature_online_store": "Integrare magazin online",
	"wallets_feature_invoicing": "Software gratuit de facturare",
	"wallets_get_wallet": "OBȚINE PORTOFELUL"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Ghid contabil Bitcoin pentru afaceri",
	"accounting_description": "Află cum să contabilizezi corect plățile Bitcoin în contabilitatea afacerii tale.",
	"accounting_header": "GHID CONTABIL BITCOIN",
	"accounting_s1_c1": "Acceptarea Bitcoin are multe beneficii, precum acceptarea plăților cu comisioane mai mici și obținerea mai multor clienți.",
	"accounting_s1_c2": "Dacă folosești un Portofel Hibrid din ghidul nostru de portofele și vinzi automat 100% din Bitcoin-ul primit pentru dolari, nu trebuie să faci nicio modificare în contabilitatea ta actuală.",
	"accounting_s1_c3": "Vezi ghidul de portofele.",
	"accounting_s1_c4": "Cu toate acestea, dacă păstrezi o parte din plățile Bitcoin primite ca Bitcoin, va trebui să ții evidența câtorva detalii pentru contabilitate. Poate părea intimidant la început, dar este de fapt destul de simplu.",
	"accounting_s1_c5": "Atenție: acest ghid este doar în scop informativ și nu trebuie considerat consiliere fiscală.",
	"accounting_s1_c6": "Dacă ai nevoie de consiliere fiscală, recomandăm cu tărie Satoshi Pacioli Accounting Services, o firmă de contabilitate specializată în contabilitatea Bitcoin.",
	"accounting_s2": "URMĂRIREA BAZEI DE COST",
	"accounting_s2_c1": "Urmărirea bazei de cost va fi cea mai mare diferență între contabilitatea în dolari și contabilitatea în Bitcoin. Chiar dacă vezi afacerea ta în întregime în termeni de Bitcoin, trebuie să raportezi valoarea în dolari a fiecărei tranzacții în declarația fiscală.",
	"accounting_s2_c2": "Dacă folosești QuickBooks, poți face acest lucru automat folosind pluginul Bitcoin Sync.",
	"accounting_s2_c3": "Dacă nu folosești QuickBooks, recomandăm Satoshi Pacioli Accounting Services, o firmă de contabilitate specializată în contabilitatea Bitcoin.",
	"accounting_s2_c4": "Pentru a face acest lucru manual, trebuie doar să ții evidența cantității de Bitcoin primită și a valorii în dolari a tranzacției Bitcoin în acea zi.",
	"accounting_s2_c5": "Poți vedea prețul curent în dolari al Bitcoin aici.",
	"accounting_s2_c6": "Ține evidența acestor informații într-un tabel Excel și dă-l contabilului tău.",
	"accounting_s2_c7": "De asemenea, poți importa aceste date în Excel automat.",
	"accounting_s2_c8": "Poți vedea și prețul istoric în dolari al Bitcoin din zilele trecute, astfel încât nu trebuie să faci asta în fiecare zi.",
	"accounting_s3": "CHELTUIREA SAU VÂNZAREA BITCOIN-ULUI TĂU",
	"accounting_s3_c1": "Dacă folosești un Portofel Hibrid din ghidul nostru de portofele și vinzi automat 100% din Bitcoin-ul primit pentru dolari, nu trebuie să faci nicio modificare în contabilitatea ta actuală.",
	"accounting_s3_c2": "Vezi ghidul de portofele.",
	"accounting_s3_c3": "Dacă alegi să cheltuiești sau să vinzi o parte din Bitcoin-ul primit după ce l-ai deținut o perioadă, trebuie doar să adaugi prețul la care l-ai vândut în tabelul Excel care urmărește baza de cost.",
	"accounting_s3_c4": "De exemplu, dacă ai primit Bitcoin în valoare de 100 $ pe 1 ianuarie și ai decis să îl vinzi sau cheltuiești pe 1 februarie la o valoare nouă de 110 $, ar trebui să înregistrezi un câștig de capital de 10 $ în contabilitate.",
	"accounting_s3_c5": "Acest lucru poate funcționa și invers. De exemplu, dacă ai primit Bitcoin în valoare de 100 $ pe 1 ianuarie și ai decis să îl vinzi sau cheltuiești pe 1 februarie la o valoare nouă de 90 $, ar trebui să înregistrezi o pierdere de capital de 10 $ în contabilitate.",
	"accounting_s4": "AM NEVOIE DE MAI MULT AJUTOR",
	"accounting_s4_c1": "Dacă ai nevoie de mai mult ajutor pentru integrarea Bitcoin în contabilitatea afacerii tale, recomandăm cu tărie Satoshi Pacioli Accounting Services, o firmă de contabilitate specializată în contabilitatea Bitcoin.",
	"accounting_s4_c2": "Află mai multe despre Satoshi Pacioli Accounting Services."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Kit Bitcoin pentru afaceri",
	"kit_header": "TIPĂREȘTE-ȚI PROPRIUL KIT BITCOIN PENTRU AFACERI",
	"kit_request": "SOLICITĂ KITUL TĂU GRATUIT",
	"kit_request_details": "Fiecare Kit Bitcoin pentru Afaceri include două broșuri pentru a facilita acceptarea Bitcoin de către o afacere locală.",
	"kit_country_global_print": "Global — Îmi tipăresc propriile kituri",
	"kit_enter_address": "Introdu adresa ta poștală și îți vom trimite un Kit Bitcoin gratuit pentru afaceri într-un plic alb simplu. Datele adresei sunt șterse odată ce kitul este expediat.",
	"kit_print_details": "Poți participa tipărindu-ți propriile broșuri, indiferent unde locuiești! De asemenea, poți trimite afacerile către kitul nostru digital pentru afaceri pentru a evita tipărirea.",
	"kit_view_files": "VEZI FIȘIERELE",
	"kit_digital_kit": "KIT DIGITAL",
	"kit_resources": "FIECARE KIT FACE TRIMITERE LA ACESTE RESURSE GRATUITE"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Vei primi Kitul Bitcoin pentru Afaceri în 1 până la 2 săptămâni într-un plic alb simplu."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Hărți comercianți Bitcoin - Listează-ți afacerea gratuit",
	"maps_header": "LISTEAZĂ-TE PE HĂRȚILE COMERCIANȚILOR BITCOIN ȘI OBȚINE MAI MULȚI CLIENȚI",
	"maps_request_details": "Introdu informațiile afacerii tale mai jos și te vom lista pe hărțile comercianților Bitcoin gratuit. Asta va permite utilizatorilor Bitcoin să îți găsească afacerea și să cheltuiască Bitcoin la tine!",
	"maps_view": "Vezi harta aici."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Afacerea ta va fi listată pe hărțile comercianților Bitcoin în 1 până la 2 săptămâni.",
	"kit_success_2": "Vezi harta aici."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Autocolante 'Bitcoin acceptat aici'",
	"stickers_header": "OBȚINE AUTOCOLANTELE GRATUITE 'BITCOIN ACCEPTAT AICI'",
	"stickers_request": "Obține autocolantele gratuite",
	"stickers_request_details": "Anunță clienții tăi că accepți plăți Bitcoin cu aceste autocolante gratuite 'Bitcoin acceptat aici'.",
	"stickers_country_global_print": "Global — Îmi tipăresc propriile autocolante",
	"stickers_request_instructions": "Vei primi trei autocolante 'Bitcoin acceptat aici' într-un plic alb simplu. Dacă ai nevoie de mai mult de trei autocolante pentru afacerea ta, nu ezita să soliciți de mai multe ori. Datele adresei sunt șterse după expedierea autocolantelor gratuite.",
	"stickers_print_details": "Poți tipări propriile autocolante 'Bitcoin acceptat aici', indiferent unde locuiești! Apasă pe limba ta de mai jos pentru a vedea fișierele autocolantelor și instrucțiunile.",
	"stickers_request_language": "Nu vezi limba ta? Completează formularul de mai jos pentru a solicita fișierele autocolantelor 'Bitcoin acceptat aici' în limba ta locală."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Vei primi autocolantele în 1 până la 2 săptămâni într-un plic alb simplu. Fiecare plic include 3 autocolante. Dacă ai nevoie de mai mult de 3 autocolante pentru afacerea ta, nu ezita să soliciți un alt set!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Vom crea și publica fișierul tău de autocolante în 3 până la 4 săptămâni. Mulțumim pentru răbdare!"
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Tipărește-ți propriul Kit Bitcoin pentru Afaceri",
	"english_bbk_files_description": "Descarcă fișierele broșurilor aici.",
	"english_header": "TIPĂREȘTE-ȚI PROPRIILE BROȘURI ALE KITULUI BITCOIN PENTRU AFACERI ÎN ENGLEZĂ"
});

// business/sticker-files/english/index
writeFile(`business/sticker-files/english/index_${lang}.json`, {
	"english_bitcoin_accepted_here_sticker_files": "Fișiere autocolante 'Bitcoin acceptat aici' în engleză",
	"english_biz_sticker_files_description": "Descarcă fișierele autocolantelor în engleză pentru a tipări propriile autocolante 'Bitcoin acceptat aici'.",
	"english_header": "DESCARCĂ FIȘIERELE AUTOCOLANTELOR 'BITCOIN ACCEPTAT AICI' ÎN ENGLEZĂ"
});

console.log('\nDone! Business files created for Romanian (ro).');
