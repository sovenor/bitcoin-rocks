/**
 * Creates Croatian (hr) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
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

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "Greška 404 | Stranica nije pronađena",
	"404_message": "OVA POKVARENA STRANICA NIJE COOL",
	"404_home": "NATRAG NA POČETNU"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "O bitcoin.rocks — Edukacija o Bitcoinu od 2022.",
	"about_description": "bitcoin.rocks je besplatna web stranica otvorenog koda za edukaciju o Bitcoinu, osnovana 2022. Naša misija je ubrzati usvajanje Bitcoina kroz edukaciju.",
	"about_header": "O NAMA",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Naša misija",
	"about_mission_1": "bitcoin.rocks je osnovan 2022. s jednostavnom misijom: ubrzati usvajanje Bitcoina kroz edukaciju.",
	"about_mission_2": "Postojimo kako bismo bili prvi link koji podijelite s nekim tko je znatiželjan o Bitcoinu. Prijateljska i pristupačna polazna točka koja objašnjava kako Bitcoin gradi bolji svijet.",
	"about_mission_3": "Previše ljudi pogrešno razumije Bitcoin ili im nikad nije bio pravilno predstavljen. Želimo to promijeniti pružajući besplatan, kvalitetan edukativni sadržaj koji svatko može razumjeti.",
	"about_what_we_do_header": "Što radimo",
	"about_what_we_do_1": "Stvaramo besplatan edukativni sadržaj za početnike u Bitcoinu. Naša web stranica pokriva teme poput inflacije, samoskrbništva, novčanika, Lightning Networka i usporedbe Bitcoina s drugim imovinama i platnim sustavima.",
	"about_what_we_do_2a": "Šaljemo ",
	"about_what_we_do_2b": "besplatne Bitcoin naljepnice",
	"about_what_we_do_2c": " do vaših vrata kako biste mogli pomoći u širenju svijesti o Bitcoinu u vašoj zajednici. Stotine ljudi skenira QR kodove na tim naljepnicama svaki mjesec kako bi naučili o Bitcoinu.",
	"about_what_we_do_3a": "Također pružamo ",
	"about_what_we_do_3b": "letke za ispis",
	"about_what_we_do_3c": " i ",
	"about_what_we_do_3d": "poslovne pakete",
	"about_what_we_do_3e": " za svakoga tko želi pomoći lokalnim tvrtkama da počnu prihvaćati Bitcoin plaćanja.",
	"about_what_we_do_4": "Sav naš sadržaj pretpostavlja nulto prethodno znanje o Bitcoinu. Bilo da ste potpuni početnik ili iskusni bitcoiner koji traži resurse za dijeljenje, bitcoin.rocks je za vas.",
	"about_editorial_header": "Naš urednički pristup",
	"about_editorial_1": "Svaki sadržaj na bitcoin.rocks je pažljivo odabran i provjeren. Kada se pozivamo na podatke ili statistike, navodimo izvore kako biste sami mogli provjeriti informacije.",
	"about_editorial_2": "Linkamo na pouzdane izvore poput TIME Magazina, Forbesa, MIT Technology Reviewa, Lyn Alden i mnogih drugih. Vjerujemo da Bitcoin govori sam za sebe kada su činjenice jasno predstavljene.",
	"about_editorial_3": "Naš sadržaj se redovito pregledava i ažurira kako bi se osigurala točnost i aktualnost. Sav sadržaj je fokusiran isključivo na edukaciju o Bitcoinu.",
	"about_open_source_header": "Otvoreni kod",
	"about_open_source_1a": "bitcoin.rocks je besplatni projekt otvorenog koda licenciran pod MIT licencom. Cijeli naš kod je javno dostupan ",
	"about_open_source_1b": "na GitHubu",
	"about_open_source_1c": ".",
	"about_open_source_2": "Svatko može doprinijeti bitcoin.rocks-u. Posebno pozdravljamo prevoditelje koji pomažu da naš sadržaj bude dostupan ljudima diljem svijeta.",
	"about_open_source_3": "Zahvaljujući našoj zajednici dobrovoljnih prevoditelja, bitcoin.rocks je trenutno dostupan na 38 jezika i nastavlja rasti.",
	"about_open_source_contribute": "Saznajte kako doprinijeti.",
	"about_contact_header": "Kontaktirajte nas",
	"about_contact_1": "Voljeli bismo čuti od vas. Bilo da imate pitanje, prijedlog ili nam samo želite reći bok, javite nam se bilo kada.",
	"about_contact_email": "E-mail:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Svoje naljepnice ćete primiti za 2 do 4 tjedna. Dok čekate, pokušajte smisliti dobro mjesto za vaše naljepnice!",
	"sticker_success_2": "Dobra mjesta za naljepnice su:",
	"sticker_success_list_1": "na javnim mjestima gdje će ih ljudi vidjeti",
	"sticker_success_list_2": "na mjestima s kojih ih vjerojatno neće brzo ukloniti (naljepnice ne uzrokuju trajnu štetu)",
	"sticker_success_list_3": "na površinama na koje se lako lijepe (metal, plastika, staklo)",
	"sticker_success_list_4": "NE na privatnom vlasništvu, preko oznaka, bankomata ili benzinskih pumpi",
	"sticker_success_3": "Želite vidjeti gdje drugi ljudi stavljaju svoje naljepnice?",
	"sticker_success_flyers_bar_new": "NOVO!",
	"sticker_success_flyers_bar_cta": "Ispišite i zalijepite Bitcoin letke →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Uspješno smo primili vaš zahtjev.",
	"sticker_language_success_2": "Nove datoteke objavljujemo u serijama, pa može proći nekoliko tjedana prije nego budu dostupne za preuzimanje. Provjerite uskoro!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Svoje razglednice ćete primiti za 1 do 2 tjedna.",
	"postcard_success_2": "Hvala vam što pomažete ubrzati usvajanje Bitcoina slanjem ovih razglednica nekome koga poznajete!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Svoje znakove ćete primiti za 1 do 2 tjedna. Dok čekate, pokušajte smisliti dobra mjesta za vaše znakove!",
	"sign_success_3": "Želite vidjeti gdje drugi ljudi postavljaju svoje znakove?",
	"signs_share_header": "PODIJELITE SVOJA MJESTA SA ZNAKOVIMA",
	"signs_share_c1": "Podijelite fotografiju svog mjesta sa znakom s nama na Nostru i poslat ćemo vam satse! Satsi su djelići bitcoina.",
	"signs_btn_share_on_nostr": "PODIJELI NA NOSTRU",
	"signs_btn_what_is_nostr": "ŠTO JE NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "KALKULATOR SLOŽENE INFLACIJE",
	"cic_description": "Koristite ovaj Kalkulator složene inflacije kako biste saznali koliko vaša plaća treba porasti da bi pratila inflaciju.",
	"what_can_i_do_about": "Što mogu učiniti s",
	"what_can_i_do_about_2": "inflacijom?",
	"cic_inflation_cta": "Izađite iz inflacije s Bitcoinom"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Pobjegnite iz Matrixa s Nostrom",
	"nostr_header": "POBJEGNITE IZ MATRIXA S NOSTROM"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Što je Nostr?",
	"what_is_nostr_header": "ŠTO JE NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
