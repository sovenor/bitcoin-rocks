/**
 * Creates Slovenian (sl) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sl';
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

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "Napaka 404 | Stran ni najdena",
	"404_message": "TA NEDELUJOČA STRAN NI KUL",
	"404_home": "NAZAJ NA DOMAČO STRAN"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "O bitcoin.rocks — Izobraževanje o Bitcoinu od leta 2022",
	"about_description": "bitcoin.rocks je brezplačna odprtokodna spletna stran za izobraževanje o Bitcoinu, ustanovljena leta 2022. Naše poslanstvo je pospešiti sprejetje Bitcoina z izobraževanjem.",
	"about_header": "O NAS",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Naše poslanstvo",
	"about_mission_1": "bitcoin.rocks je bil ustanovljen leta 2022 s preprostim poslanstvom: pospešiti sprejetje Bitcoina z izobraževanjem.",
	"about_mission_2": "Obstajamo zato, da smo prva povezava, ki jo delite z nekom, ki ga zanima Bitcoin. Prijazen in dostopen začetni točka, ki pojasnjuje, kako Bitcoin gradi boljši svet.",
	"about_mission_3": "Preveč ljudi ne razume Bitcoina ali pa jim nikoli ni bil pravilno predstavljen. To želimo spremeniti z zagotavljanjem brezplačne in kakovostne izobraževalne vsebine, ki jo lahko razume vsakdo.",
	"about_what_we_do_header": "Kaj počnemo",
	"about_what_we_do_1": "Ustvarjamo brezplačne izobraževalne vsebine za začetnike na področju Bitcoina. Naša spletna stran pokriva teme, kot so inflacija, samohranba, denarnice, Lightning Network in primerjave Bitcoina z drugimi sredstvi in plačilnimi sistemi.",
	"about_what_we_do_2a": "Pošiljamo ",
	"about_what_we_do_2b": "brezplačne bitcoinove nalepke",
	"about_what_we_do_2c": " vse do vaših vrat, da lahko pomagate širiti zavest o Bitcoinu v svoji skupnosti. Stotine ljudi vsak mesec skenira QR kode na teh nalepkah, da izvedo o Bitcoinu.",
	"about_what_we_do_3a": "Zagotavljamo tudi ",
	"about_what_we_do_3b": "letake za tiskanje",
	"about_what_we_do_3c": " in ",
	"about_what_we_do_3d": "poslovne komplete",
	"about_what_we_do_3e": " za vsakogar, ki želi pomagati lokalnim podjetjem začeti sprejemati bitcoinova plačila.",
	"about_what_we_do_4": "Vsa naša vsebina predpostavlja ničelno predhodno znanje o Bitcoinu. Ne glede na to, ali ste popoln začetnik ali izkušen bitcoinar, ki išče vire za deljenje, je bitcoin.rocks za vas.",
	"about_editorial_header": "Naš uredniški pristop",
	"about_editorial_1": "Vsaka vsebina na bitcoin.rocks je skrbno izbrana in preverjena. Ko se sklicujemo na podatke ali statistike, navajamo naše vire, da si lahko sami preverite informacije.",
	"about_editorial_2": "Sklicujemo se na zaupanja vredne vire, kot so TIME Magazine, Forbes, MIT Technology Review, Lyn Alden in mnogi drugi. Verjamemo, da Bitcoin govori sam zase, ko so dejstva jasno predstavljena.",
	"about_editorial_3": "Naša vsebina je redno pregledana in posodobljena, da zagotovimo točnost in aktualnost. Vsa vsebina je osredotočena izključno na izobraževanje o Bitcoinu.",
	"about_open_source_header": "Odprta koda",
	"about_open_source_1a": "bitcoin.rocks je brezplačen odprtokodni projekt, licenciran pod licenco MIT. Vsa naša koda je javno dostopna ",
	"about_open_source_1b": "na GitHubu",
	"about_open_source_1c": ".",
	"about_open_source_2": "Vsakdo lahko prispeva k bitcoin.rocks. Še posebej pozdravljamo prevajalce, ki pomagajo narediti našo vsebino dostopno ljudem po vsem svetu.",
	"about_open_source_3": "Zahvaljujoč naši skupnosti prostovoljnih prevajalcev je bitcoin.rocks trenutno na voljo v 51 jezikih in še raste.",
	"about_open_source_contribute": "Ugotovite, kako prispevati.",
	"about_contact_header": "Stopite v stik z nami",
	"about_contact_1": "Z veseljem slišimo od vas. Če imate vprašanje, predlog ali nam samo želite pozdraviti, se nam oglasite kadarkoli.",
	"about_contact_email": "E-pošta:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Svoje nalepke boste prejeli v 2 do 4 tednih. Medtem poskusite najti dobro mesto za vaše nalepke!",
	"sticker_success_2": "Dobra mesta za nalepke so:",
	"sticker_success_list_1": "na javnih mestih, kjer jih bodo ljudje videli",
	"sticker_success_list_2": "na mestih, od koder verjetno ne bodo hitro odstranjene (nalepke ne povzročajo nobene trajne škode)",
	"sticker_success_list_3": "na površinah, na katere se zlahka prilepijo (kovina, plastika, steklo)",
	"sticker_success_list_4": "NE na zasebni lastnini, čez oznake, bankomate ali bencinske črpalke",
	"sticker_success_3": "Želite videti, kam drugi ljudje lepijo svoje nalepke?",
	"sticker_success_flyers_bar_new": "NOVO!",
	"sticker_success_flyers_bar_cta": "Tiskajte in lepite bitcoinove letake →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Vašo zahtevo smo uspešno prejeli.",
	"sticker_language_success_2": "Nove datoteke objavljamo v serijah, zato lahko traja nekaj tednov, preden bodo te datoteke na voljo za prenos. Preverite znova kmalu!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Svoje razglednice boste prejeli v 1 do 2 tednih.",
	"postcard_success_2": "Hvala, da pomagate pospešiti sprejetje Bitcoina s pošiljanjem teh razglednic nekomu, ki ga poznate!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Svoje table boste prejeli v 1 do 2 tednih. Medtem poskusite najti dobro mesto za vaše table!",
	"sign_success_3": "Želite videti, kam drugi ljudje postavljajo svoje table?",
	"signs_share_header": "DELITE SVOJE LOKACIJE S TABLAMI",
	"signs_share_c1": "Delite fotografijo svojega mesta s tablo z nami na Nostru in poslali vam bomo sate! Sati so delčki bitcoina.",
	"signs_btn_share_on_nostr": "DELI NA NOSTRU",
	"signs_btn_what_is_nostr": "KAJ JE NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "KALKULATOR SESTAVLJENE INFLACIJE",
	"cic_description": "S tem kalkulatorjem sestavljene inflacije ugotovite, za koliko se mora vaša plača povečati, da drži korak z inflacijo.",
	"what_can_i_do_about": "Kaj lahko storim glede",
	"what_can_i_do_about_2": "inflacije?",
	"cic_inflation_cta": "Izstopite iz inflacije s pomočjo Bitcoina"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Pobegnite iz Matrice z Nostrom",
	"nostr_header": "POBEGNITE IZ MATRICE Z NOSTROM"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Kaj je Nostr?",
	"what_is_nostr_header": "KAJ JE NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
