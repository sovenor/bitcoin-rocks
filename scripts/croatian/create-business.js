/**
 * Creates Croatian (hr) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'hr';
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
	"bitcoin_is_good_for_business": "Bitcoin je dobar za poslovanje",
	"biz_header": "BITCOIN JE DOBAR ZA POSLOVANJE",
	"biz_s1": "Niske naknade bez minimuma",
	"biz_s1_c1": "Bitcoin vam omogućuje primanje plaćanja izravno od vaših kupaca, slično gotovini. Bitcoin mreža funkcionira bez posrednika poput banaka i tvrtki za kreditne kartice koji naplaćuju visoke naknade.",
	"biz_s2": "Trenutačno poravnanje",
	"biz_s2_c1": "Baš poput gotovine, Bitcoin plaćanja se poravnavaju trenutačno. Ne morate čekati da vam tvrtka za kreditne kartice ili banka isplati novac. Umjesto toga, odmah dobivate pristup svom novcu.",
	"biz_s3": "Bez povrata sredstava ili prijevara",
	"biz_s3_c1": "Budući da se Bitcoin plaćanja odvijaju izravno između vas i vaših kupaca, nitko vam ne može vratiti novac putem povrata sredstava.",
	"biz_s3_c2": "Krivotvoreni Bitcoin ne može se slati putem Bitcoin mreže, što znači da se nikada ne morate brinuti o prijevarnim transakcijama koje bi mogle koštati vaše poslovanje.",
	"biz_s4": "Privucite više kupaca",
	"biz_s4_c1": "Milijuni ljudi posjeduju Bitcoin i žele ga potrošiti na mjestima koja ga prihvaćaju.",
	"biz_s4_c2": "Jednostavnim prihvaćanjem Bitcoina, vaše poslovanje može biti navedeno na kartama Bitcoin trgovaca i besplatno doći do novih kupaca.",
	"biz_s4_c3": "Prihvaćanje Bitcoina je 100% besplatno. Nema ugovora ni skrivenih naknada."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Saznajte zašto je Bitcoin dobar za poslovanje",
	"why_header": "BITCOIN JE DOBAR ZA POSLOVANJE",
	"why_good_for_you": "BITCOIN JE DOBAR I ZA VAS!",
	"why_learn_more_lowercase": "Saznajte više.",
	"why_s1": "Bitcoin nema inflaciju",
	"why_s1_c1": "Inflacija nastaje kada se tiska ili stvara više novca iz ničega. To čini vaš novac manje vrijednim tijekom vremena.",
	"why_s1_c2": "Bitcoin ima fiksnu ponudu, što znači da nitko ne može tiskati više Bitcoina.",
	"why_s2": "Bitcoin nema navale na banke",
	"why_s2_c1": "Više američkih banaka propalo je posljednjih godina zbog navala na banke.",
	"why_s2_c2": "Umjesto da samo čuvaju vaš novac, banke ga ulažu i posuđuju. Ako te investicije ne idu dobro, nemaju dovoljno da vam vrate.",
	"why_s2_c3": "A osiguravajući fond FDIC ima samo 1 dolar na svakih 100 dolara koje osigurava.",
	"why_s3": "Bitcoin ne zahtijeva dozvolu",
	"why_s3_c1": "Za razliku od tradicionalnih financijskih mreža, Bitcoin ne zahtijeva dozvolu za korištenje.",
	"why_s3_c2": "To znači da vas nitko ne može spriječiti u korištenju Bitcoina iz bilo kojeg razloga. To je prva financijska mreža koju možete koristiti bez straha od cenzure ili oduzimanja.",
	"why_s4": "Bitcoin gradi bolji svijet",
	"why_s4_c1": "Bitcoin je pogrešno shvaćena tehnologija koja gradi bolji svijet.",
	"why_s4_c2": "Bitcoin je omogućio aktivistima za ljudska prava da se bore za slobodu, smanjio globalne emisije metana, spasio nacionalne parkove i još mnogo toga."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Prihvaćajte Bitcoin plaćanja u vašem poslovanju",
	"guide_header": "JESTE LI SPREMNI PRIHVAĆATI BITCOIN U SVOM POSLOVANJU?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Često postavljana pitanja o prihvaćanju Bitcoina",
	"faq_description": "Imate pitanja o prihvaćanju Bitcoin plaćanja u vašem poslovanju?",
	"faq_header": "IMATE PITANJA O PRIHVAĆANJU BITCOIN PLAĆANJA?",
	"faq_s1": "Što je Bitcoin?",
	"faq_s1_c1": "Bitcoin su dvije stvari: digitalni novac i računalna mreža.",
	"faq_s1_c2": "Možete slati bitcoin (digitalni novac) izravno drugim ljudima koristeći Bitcoin mrežu.",
	"faq_s1_c3": "Bitcoin mreža funkcionira bez posrednika ili središnjih vlasti, poput banaka ili tvrtki za kreditne kartice, tako da možete izbjeći njihove naknade za transakcije.",
	"faq_s1_c4": "Bitcoin transakcije postižu konačno poravnanje brzo (10 minuta) i nikada se ne mogu vratiti, tako da možete mirno spavati znajući da je vaš novac vaš novac.",
	"faq_s2": "Kako Bitcoin može koristiti mom poslovanju?",
	"faq_s2_c1": "Bitcoin vam omogućuje prihvaćanje plaćanja s nižim naknadama i privlačenje više kupaca. Bitcoin plaćanja imaju niske naknade bez minimuma, poravnavaju se trenutačno i otporna su na povrate sredstava i prijevare.",
	"faq_s2_c2": "Prihvaćanje Bitcoina je besplatno i omogućuje vam navođenje vašeg poslovanja na kartama Bitcoin trgovaca kako bi vas korisnici Bitcoina lako pronašli.",
	"faq_s2_c3": "Pogledajte sve načine na koje je Bitcoin dobar za poslovanje.",
	"faq_s3": "Kako prihvaćam Bitcoin plaćanja?",
	"faq_s3_c1": "Sve što trebate za prihvaćanje Bitcoin plaćanja je besplatan Bitcoin novčanik.",
	"faq_s3_c2": "Naš vodič za novčanike pomoći će vam da se brzo i lako postavite kako biste danas mogli iskoristiti prednosti prihvaćanja Bitcoina!",
	"faq_s3_c3": "Pogledaj vodič za novčanike",
	"faq_s4": "Mogu li pretvoriti primljena Bitcoin plaćanja u lokalnu valutu?",
	"faq_s4_c1": "Da! Korištenjem hibridnog novčanika možete automatski pretvoriti primljena Bitcoin plaćanja u vašu lokalnu valutu čim se plaćanje primi.",
	"faq_s4_c2": "Naš vodič za novčanike pomoći će vam da se brzo i lako postavite.",
	"faq_s4_c3": "Također možete odabrati zadržati dio primljenih plaćanja u Bitcoinu. Štednja u Bitcoinu ima mnoge prednosti:",
	"faq_s4_c4": "Bitcoin je potpuno rezervni financijski sustav.",
	"faq_s4_c5": "Bitcoin nema inflaciju.",
	"faq_s4_c6": "Ove prednosti čine Bitcoin sjajnim načinom za dugoročno čuvanje novca.",
	"faq_s4_c7": "Čak i ako odlučite pretvoriti sva svoja Bitcoin plaćanja u dolare, i dalje dobivate prednosti prihvaćanja plaćanja s mnogo nižim naknadama dok dosežete više potencijalnih kupaca.",
	"faq_s5": "Mogu li prihvaćati Bitcoin plaćanja osobno?",
	"faq_s5_c1": "Da! Jednostavno je prihvaćati Bitcoin plaćanja osobno koristeći Bitcoin novčanik.",
	"faq_s5_c2": "Naš vodič za novčanike može vam pomoći odabrati Bitcoin novčanik koji je najbolji za vaše poslovanje.",
	"faq_s5_c3": "Pogledaj vodič za novčanike",
	"faq_s6": "Mogu li prihvaćati Bitcoin plaćanja online?",
	"faq_s6_c1": "Da! Jednostavno je prihvaćati Bitcoin plaćanja online s vašom postojećom web trgovinom.",
	"faq_s6_c2": "Pogledajte naš vodič za novčanike za više informacija.",
	"faq_s7": "Kako mogu obavijestiti kupce da prihvaćam Bitcoin?",
	"faq_s7_c1": "Nudimo besplatne naljepnice 'Bitcoin prihvaćen ovdje' koje možete izložiti u svom poslovnom prostoru i obavijestiti kupce da prihvaćate Bitcoin.",
	"faq_s7_c2": "Kliknite ovdje za narudžbu naljepnica.",
	"faq_s7_c3": "Svoje poslovanje možete također besplatno navesti na kartama Bitcoin trgovaca i doći do milijuna korisnika Bitcoina koji žele potrošiti svoj Bitcoin u tvrtkama koje ga prihvaćaju.",
	"faq_s7_c4": "Registrirajte se sada.",
	"faq_s8": "Kako mogu privući više kupaca prihvaćanjem Bitcoina?",
	"faq_s8_c1": "Postoje milijuni korisnika Bitcoina koji žele potrošiti svoj Bitcoin u tvrtkama koje ga prihvaćaju.",
	"faq_s8_c2": "Jednostavnim prihvaćanjem Bitcoin plaćanja, vaše poslovanje može biti navedeno na besplatnim kartama Bitcoin trgovaca i dati vam pristup novim potencijalnim kupcima.",
	"faq_s8_c3": "Registrirajte se sada.",
	"faq_s9": "Koliko košta prihvaćanje Bitcoina?",
	"faq_s9_c1": "Prihvaćanje Bitcoina u vašem poslovanju je 100% besplatno. Nema ugovora ni skrivenih naknada.",
	"faq_s9_c2": "Pogledajte naš vodič za novčanike i počnite prihvaćati Bitcoin plaćanja već danas."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Vodič za računovodstvo Bitcoina u poslovanju",
	"accounting_description": "Naučite kako pravilno voditi računovodstvo Bitcoin plaćanja u vašem poslovnom računovodstvu.",
	"accounting_header": "VODIČ ZA RAČUNOVODSTVO BITCOINA",
	"accounting_s1_c1": "Prihvaćanje Bitcoina ima mnoge prednosti poput prihvaćanja plaćanja s nižim naknadama i privlačenja više kupaca.",
	"accounting_s1_c2": "Ako koristite hibridni novčanik iz našeg vodiča za novčanike i automatski prodajete 100% primljenog Bitcoina za dolare, ne trebate mijenjati ništa u svom trenutnom računovodstvu.",
	"accounting_s1_c3": "Pogledaj vodič za novčanike.",
	"accounting_s1_c4": "Međutim, ako zadržite dio primljenih Bitcoin plaćanja kao Bitcoin, morat ćete pratiti nekoliko podataka za svoje računovodstvo. Na prvi pogled to može djelovati zastrašujuće, ali zapravo je prilično jednostavno.",
	"accounting_s1_c5": "Napomena: ovaj vodič je samo u informativne svrhe i ne predstavlja porezni savjet.",
	"accounting_s1_c6": "Ako trebate porezni savjet, toplo preporučujemo Satoshi Pacioli Accounting Services, računovodstvenu tvrtku specijaliziranu za Bitcoin računovodstvo.",
	"accounting_s2": "PRAĆENJE VAŠE TROŠKOVNE OSNOVE",
	"accounting_s2_c1": "Praćenje troškovne osnove bit će najveća razlika između računovodstva dolara i računovodstva Bitcoina. Čak i ako svoje poslovanje gledate isključivo u terminima Bitcoina, morate u poreznoj prijavi prijaviti dolarsku vrijednost svake transakcije.",
	"accounting_s2_c2": "Ako koristite QuickBooks, to možete učiniti automatski korištenjem dodatka Bitcoin Sync.",
	"accounting_s2_c3": "Ako ne koristite QuickBooks, preporučujemo Satoshi Pacioli Accounting Services, računovodstvenu tvrtku specijaliziranu za Bitcoin računovodstvo.",
	"accounting_s2_c4": "Za ručno praćenje jednostavno trebate bilježiti iznos primljenog Bitcoina i dolarsku vrijednost Bitcoin transakcije tog dana.",
	"accounting_s2_c5": "Trenutnu dolarsku cijenu Bitcoina možete pogledati ovdje.",
	"accounting_s2_c6": "Pratite ove informacije u Excel tablici i predajte ih svom računovođi.",
	"accounting_s2_c7": "Također možete automatski uvesti ove podatke u Excel.",
	"accounting_s2_c8": "Možete pogledati i povijesnu dolarsku cijenu Bitcoina za prethodne dane, tako da to ne morate raditi svaki dan.",
	"accounting_s3": "TROŠENJE ILI PRODAJA VAŠEG BITCOINA",
	"accounting_s3_c1": "Ako koristite hibridni novčanik iz našeg vodiča za novčanike i automatski prodajete 100% primljenog Bitcoina za dolare, ne trebate mijenjati ništa u svom trenutnom računovodstvu.",
	"accounting_s3_c2": "Pogledaj vodič za novčanike.",
	"accounting_s3_c3": "Ako se odlučite potrošiti ili prodati dio Bitcoina koji ste primili nakon što ga neko vrijeme čuvate, jednostavno trebate dodati cijenu po kojoj ste ga prodali u svoju Excel tablicu koja prati troškovnu osnovu.",
	"accounting_s3_c4": "Na primjer, ako ste 1. siječnja primili Bitcoin u vrijednosti od 100 dolara i odlučili ga prodati ili potrošiti 1. veljače po novoj vrijednosti od 110 dolara, trebali biste zabilježiti kapitalni dobitak od 10 dolara u svom računovodstvu.",
	"accounting_s3_c5": "To može funkcionirati i obrnuto. Na primjer, ako ste 1. siječnja primili Bitcoin u vrijednosti od 100 dolara i odlučili ga prodati ili potrošiti 1. veljače po novoj vrijednosti od 90 dolara, trebali biste zabilježiti kapitalni gubitak od 10 dolara u svom računovodstvu.",
	"accounting_s4": "TREBAM DODATNU POMOĆ",
	"accounting_s4_c1": "Ako trebate dodatnu pomoć s integracijom Bitcoina u vaše poslovno računovodstvo, toplo preporučujemo Satoshi Pacioli Accounting Services, računovodstvenu tvrtku specijaliziranu za Bitcoin računovodstvo.",
	"accounting_s4_c2": "Saznajte više o Satoshi Pacioli Accounting Services."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Kako prihvaćati Bitcoin plaćanja",
	"wallets_header": "NABAVITE BESPLATAN BITCOIN NOVČANIK ZA PRIHVAĆANJE PLAĆANJA",
	"wallets_intro_1": "Svi Bitcoin novčanici su međusobno kompatibilni, tako da vam kupci mogu platiti Bitcoinom bez obzira na to koji novčanik koriste.",
	"wallets_intro_2": "Čisto Bitcoin novčanici:",
	"wallets_intro_3": "To su čisti Bitcoin novčanici koji otključavaju pune prednosti Bitcoina: bez posrednika, niske naknade i bez povrata sredstava ili prijevara.",
	"wallets_intro_4": "Hibridni novčanici:",
	"wallets_intro_5": "Oni vam omogućuju zamjenu bilo kojeg dijela Bitcoina za dolare čim vam kupac plati. Naknade su i dalje niže od plaćanja kreditnim karticama, ali veće od čistih Bitcoin plaćanja.",
	"wallets_intro_6": "Obje vrste su sjajni načini prihvaćanja Bitcoina. Konkretni novčanik koji ćete koristiti ovisit će o veličini i vrsti vašeg poslovanja.",
	"wallets_choice_sole": "novčanici za individualno vođena poslovanja",
	"wallets_choice_multiple": "novčanici za poslovanja s više zaposlenika",
	"wallets_choice_online": "novčanici za online poslovanja",
	"wallets_choice_invoice": "novčanici za poslovanja s fakturiranjem",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Možete prihvaćati Bitcoin plaćanja sa svojim postojećim Square PoS terminalom ili integracijom web trgovine. Nikada nije bilo lakše prihvaćati Bitcoin plaćanja.",
	"wallets_feature_bitcoin_only": "Čisto Bitcoin novčanik",
	"wallets_feature_no_info": "Nisu potrebni nikakvi podaci",
	"wallets_feature_in_person": "Samo osobna plaćanja",
	"wallets_feature_settles_bitcoin": "Poravnanje 100% u Bitcoinu",
	"wallets_feature_hybrid": "Hibridni novčanik",
	"wallets_feature_info": "Potrebni poslovni podaci",
	"wallets_feature_in_person_online": "Osobna i online plaćanja",
	"wallets_feature_settles_both": "Poravnanje u Bitcoinu i dolarima",
	"wallets_feature_multiple_employees": "Podrška za više zaposlenika (BPT)",
	"wallets_feature_self_hosted": "Vlastiti hosting = 0% naknada",
	"wallets_feature_online_store": "Integracija web trgovine",
	"wallets_feature_invoicing": "Besplatni softver za fakturiranje",
	"wallets_get_wallet": "NABAVI NOVČANIK"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Karte Bitcoin trgovaca — Besplatno navedite svoje poslovanje",
	"maps_header": "NAVEDITE SE NA KARTAMA BITCOIN TRGOVACA I PRIVUCITE VIŠE KUPACA",
	"maps_request_details": "Unesite podatke o svom poslovanju ispod i besplatno ćemo vas navesti na kartama Bitcoin trgovaca. To će omogućiti Bitcoin korisnicima da pronađu vaše poslovanje i potroše svoj Bitcoin kod vas!",
	"maps_view": "Pogledajte kartu ovdje."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Vaše poslovanje bit će navedeno na kartama Bitcoin trgovaca za 1 do 2 tjedna.",
	"kit_success_2": "Pogledajte kartu ovdje."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Naljepnice 'Bitcoin prihvaćen ovdje'",
	"stickers_header": "NABAVITE BESPLATNE NALJEPNICE 'BITCOIN PRIHVAĆEN OVDJE'",
	"stickers_request": "Nabavite besplatne naljepnice",
	"stickers_request_details": "Obavijestite svoje kupce da prihvaćate Bitcoin plaćanja ovim besplatnim naljepnicama 'Bitcoin prihvaćen ovdje'.",
	"stickers_country_global_print": "Globalno — Ispisat ću vlastite naljepnice",
	"stickers_request_instructions": "Dobit ćete tri naljepnice 'Bitcoin prihvaćen ovdje' u običnoj bijeloj omotnici. Ako trebate više od tri naljepnice za svoje poslovanje, slobodno zatražite ponovno. Podaci o adresi se brišu nakon slanja besplatnih naljepnica.",
	"stickers_print_details": "Možete ispisati vlastite naljepnice 'Bitcoin prihvaćen ovdje', bez obzira gdje živite! Kliknite na svoj jezik ispod za prikaz datoteka naljepnica i uputa.",
	"stickers_request_language": "Ne vidite svoj jezik? Ispunite obrazac ispod za zahtjev datoteka naljepnica 'Bitcoin prihvaćen ovdje' na vašem jeziku."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Svoje naljepnice ćete primiti za 1 do 2 tjedna u običnoj bijeloj omotnici. Svaka omotnica sadrži 3 naljepnice. Ako trebate više od 3 naljepnice za svoje poslovanje, slobodno zatražite još jedan paket!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Vašu datoteku naljepnica izradit ćemo i objaviti za 3 do 4 tjedna. Hvala na strpljenju!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin poslovni paket",
	"kit_header": "ISPIŠITE VLASTITI BITCOIN POSLOVNI PAKET",
	"kit_request": "ZATRAŽITE BESPLATNI PAKET",
	"kit_request_details": "Svaki Bitcoin poslovni paket sadrži dva letka koji olakšavaju uvjeravanje lokalnog poduzeća da prihvati Bitcoin.",
	"kit_country_global_print": "Globalno — Ispisat ću vlastite pakete",
	"kit_enter_address": "Unesite svoju poštansku adresu i poslat ćemo vam besplatni Bitcoin poslovni paket u običnoj bijeloj omotnici. Podaci o adresi se brišu nakon slanja paketa.",
	"kit_print_details": "Možete sudjelovati ispisom vlastitih letaka, bez obzira gdje živite! Također možete uputiti tvrtke na naš digitalni poslovni paket kako biste izbjegli ispis.",
	"kit_view_files": "POGLEDAJ DATOTEKE",
	"kit_digital_kit": "DIGITALNI PAKET",
	"kit_resources": "SVAKI PAKET UPUĆUJE NA OVE BESPLATNE RESURSE"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Svoj Bitcoin poslovni paket ćete primiti za 1 do 2 tjedna u običnoj bijeloj omotnici."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Ispišite vlastiti Bitcoin poslovni paket",
	"english_bbk_files_description": "Preuzmite datoteke letaka ovdje.",
	"english_header": "ISPIŠITE VLASTITI ENGLESKI BITCOIN POSLOVNI PAKET"
});

console.log(`\nDone! Created 14 business files.`);
