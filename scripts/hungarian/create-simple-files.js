/**
 * Creates Hungarian (hu) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'hu';
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
	"404_title": "404 Hiba | Az oldal nem található",
	"404_message": "EZ A TÖRÖTT OLDAL NEM KIRÁLY",
	"404_home": "VISSZA A FŐOLDALRA"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "A bitcoin.rocks-ról — Bitcoin oktatás 2022 óta",
	"about_description": "A bitcoin.rocks egy ingyenes, nyílt forráskódú Bitcoin oktatási weboldal, amelyet 2022-ben alapítottak. Küldetésünk a Bitcoin elfogadásának felgyorsítása oktatás révén.",
	"about_header": "A BITCOIN.ROCKS",
	"about_header_2": "BEMUTATÁSA",
	"about_mission_header": "Küldetésünk",
	"about_mission_1": "A bitcoin.rocks-ot 2022-ben alapították egy egyszerű küldetéssel: a Bitcoin elfogadásának felgyorsítása oktatás révén.",
	"about_mission_2": "Azért létezünk, hogy az első link legyünk, amelyet megosztasz valakivel, aki kíváncsi a Bitcoinra. Egy barátságos, könnyen érthető kiindulópont, amely elmagyarázza, hogyan épít a Bitcoin egy jobb világot.",
	"about_mission_3": "Túl sokan félreértik a Bitcoint, vagy soha nem kaptak róla megfelelő bevezetést. Ezt szeretnénk megváltoztatni ingyenes, magas színvonalú oktatási tartalom biztosításával, amelyet bárki megérthet.",
	"about_what_we_do_header": "Amit csinálunk",
	"about_what_we_do_1": "Ingyenes oktatási tartalmat készítünk Bitcoin kezdők számára. Weboldalunk olyan témákat tárgyal, mint az infláció, az önálló megőrzés, a tárcák, a Lightning hálózat, és hogy a Bitcoin hogyan viszonyul más eszközökhöz és fizetési rendszerekhez.",
	"about_what_we_do_2a": "Ingyenes ",
	"about_what_we_do_2b": "Bitcoin matricákat",
	"about_what_we_do_2c": " küldünk a címedre, hogy segíthess terjeszteni a Bitcoin ismertségét a közösségedben. Havonta több százan olvassák le a QR-kódokat ezekről a matricákról, hogy megismerjék a Bitcoint.",
	"about_what_we_do_3a": "Emellett ",
	"about_what_we_do_3b": "nyomtatható szórólapokat",
	"about_what_we_do_3c": " és ",
	"about_what_we_do_3d": "üzleti csomagokat",
	"about_what_we_do_3e": " is biztosítunk mindenkinek, aki szeretné segíteni a helyi vállalkozásokat a Bitcoin fizetések elfogadásában.",
	"about_what_we_do_4": "Minden tartalmunk nulla előzetes Bitcoin tudást feltételez. Akár teljesen új vagy a Bitcoinban, akár tapasztalt bitcoiner vagy, aki megosztható forrásokat keres, a bitcoin.rocks neked szól.",
	"about_editorial_header": "Szerkesztési megközelítésünk",
	"about_editorial_1": "A bitcoin.rocks minden tartalma gondosan válogatott és tényeket ellenőrzött. Amikor adatokra vagy statisztikákra hivatkozunk, megjelöljük forrásainkat, hogy magad is ellenőrizhesd az információt.",
	"about_editorial_2": "Megbízható forrásokra hivatkozunk, mint a TIME Magazine, a Forbes, az MIT Technology Review, Lyn Alden és sokan mások. Hisszük, hogy a Bitcoin önmagáért beszél, ha a tények világosan vannak bemutatva.",
	"about_editorial_3": "Tartalmunkat rendszeresen felülvizsgáljuk és frissítjük a pontosság és aktualitás biztosítása érdekében. Minden tartalom kizárólag a Bitcoin oktatásra összpontosít.",
	"about_open_source_header": "Nyílt forráskód",
	"about_open_source_1a": "A bitcoin.rocks egy ingyenes, nyílt forráskódú projekt, MIT licenc alatt. Teljes kódbázisunk nyilvánosan elérhető ",
	"about_open_source_1b": "a GitHubon",
	"about_open_source_1c": ".",
	"about_open_source_2": "Bárki hozzájárulhat a bitcoin.rocks-hoz. Különösen örülünk a fordítóknak, akik segítenek tartalmunkat elérhetővé tenni a világ minden táján élő emberek számára.",
	"about_open_source_3": "Önkéntes fordítóink közösségének köszönhetően a bitcoin.rocks jelenleg 44 nyelven érhető el, és folyamatosan bővül.",
	"about_open_source_contribute": "Tudd meg, hogyan járulhatsz hozzá.",
	"about_contact_header": "Kapcsolat",
	"about_contact_1": "Szívesen hallanánk rólad. Akár kérdésed, javaslatod van, akár csak köszönnél, bármikor keress minket.",
	"about_contact_email": "E-mail:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "A matricáidat 2-4 héten belül megkapod. Addig is gondolj egy jó helyre, ahová felragaszthatod őket!",
	"sticker_success_2": "Jó matricahelyek:",
	"sticker_success_list_1": "nyilvános helyen, ahol az emberek meglátják őket",
	"sticker_success_list_2": "olyan helyen, ahonnan valószínűleg nem távolítják el őket gyorsan (a matricák nem okoznak maradandó kárt)",
	"sticker_success_list_3": "olyan felületen, amelyre könnyen tapadnak (fém, műanyag, üveg)",
	"sticker_success_list_4": "NEM magántulajdonra, táblákra, bankautomatákra vagy benzinkutakra",
	"sticker_success_3": "Szeretnéd látni, hová ragasztják mások a matricáikat?",
	"sticker_success_flyers_bar_new": "ÚJ!",
	"sticker_success_flyers_bar_cta": "Nyomtasd ki és ragaszd ki a Bitcoin szórólapokat →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Sikeresen megkaptuk a kérésedet.",
	"sticker_language_success_2": "Az új fájlokat kötegekben tesszük közzé, ezért több hétbe is telhet, mire ezek a fájlok letölthetők lesznek. Nézz vissza hamarosan!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "A képeslapjaidat 1-2 héten belül megkapod.",
	"postcard_success_2": "Köszönjük, hogy segítesz felgyorsítani a Bitcoin elfogadását azzal, hogy elkülded ezeket a képeslapokat valakinek, akit ismersz!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "A tábláidat 1-2 héten belül megkapod. Addig is gondolj jó helyekre, ahová kihelyezheted a tábláidat!",
	"sign_success_3": "Szeretnéd látni, hová helyezik mások a tábláikat?",
	"signs_share_header": "OSZD MEG A TÁBLAHELYEIDET",
	"signs_share_c1": "Oszd meg a táblahelyed fotóját velünk a Nostr-on, és satokat küldünk neked! A satok a bitcoin töredékei.",
	"signs_btn_share_on_nostr": "MEGOSZTÁS A NOSTR-ON",
	"signs_btn_what_is_nostr": "MI AZ A NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "KAMATOS INFLÁCIÓ KALKULÁTOR",
	"cic_description": "Használd ezt a kamatos infláció kalkulátort, hogy megtudd, mennyivel kell emelkednie a fizetésednek, hogy lépést tartson az inflációval.",
	"what_can_i_do_about": "Mit tehetek az",
	"what_can_i_do_about_2": "infláció ellen?",
	"cic_inflation_cta": "Lépj ki az inflációból a Bitcoinnal"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Szabadulj ki a Mátrixból a Nostr-ral",
	"nostr_header": "SZABADULJ KI A MÁTRIXBÓL A NOSTR-RAL"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Mi az a Nostr?",
	"what_is_nostr_header": "MI AZ A NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
