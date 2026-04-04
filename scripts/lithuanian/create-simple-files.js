/**
 * Creates Lithuanian (lt) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'lt';
const today = '2026-04-04';

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
	"404_title": "404 klaida | Puslapis nerastas",
	"404_message": "Šis sugedęs puslapis visiškai neatrodo šauniai",
	"404_home": "Grįžti į pagrindinį puslapį"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Apie bitcoin.rocks — Bitcoin švietimas nuo 2022 m.",
	"about_description": "bitcoin.rocks yra nemokama atviro kodo Bitcoin švietimo svetainė, įkurta 2022 m. Mūsų misija — paspartinti Bitcoin priėmimą per švietimą.",
	"about_header": "APIE",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Mūsų misija",
	"about_mission_1": "bitcoin.rocks buvo įkurta 2022 m. su paprasta misija: paspartinti Bitcoin priėmimą per švietimą.",
	"about_mission_2": "Mes egzistuojame kaip pirmoji nuoroda, kurią pasidalinate su žmogumi, kuris domisi Bitcoin. Draugiškas, prieinamas pradžios taškas, paaiškinantis, kaip Bitcoin kuria geresnį pasaulį.",
	"about_mission_3": "Per daug žmonių nesuprantamai ar netinkamai supažindinti su Bitcoin. Norime tai pakeisti teikdami nemokamą, aukštos kokybės švietimo turinį, kurį kiekvienas gali suprasti.",
	"about_what_we_do_header": "Ką mes darome",
	"about_what_we_do_1": "Kuriame nemokam\u0105 \u0161vietimo turin\u012F Bitcoin naujokams. M\u016Bs\u0173 svetain\u0117 apima tokias temas kaip infliacija, savaranki\u0161ka saugykla, pinigin\u0117s, \u201ELightning\u201C tinklas ir kaip Bitcoin lyginasi su kitais aktyvais bei mok\u0117jimo sistemomis.",
	"about_what_we_do_2a": "Mes siunčiame ",
	"about_what_we_do_2b": "nemokamus Bitcoin lipdukus",
	"about_what_we_do_2c": " iki jūsų durų, kad galėtumėte padėti skleisti Bitcoin žinomumą savo bendruomenėje. Šimtai žmonių kiekvieną mėnesį nuskaito šių lipdukų QR kodus, kad sužinotų apie Bitcoin.",
	"about_what_we_do_3a": "Taip pat teikiame ",
	"about_what_we_do_3b": "spausdinamus skrajutes",
	"about_what_we_do_3c": " ir ",
	"about_what_we_do_3d": "verslo rinkinius",
	"about_what_we_do_3e": " visiems, norintiems padėti vietos verslams priimti Bitcoin mokėjimus.",
	"about_what_we_do_4": "Visas mūsų turinys numato nulinį ankstesnį Bitcoin žinojimą. Nesvarbu, ar esate visiškai naujas Bitcoin srityje, ar patyręs bitcoineris, ieškantis resursų dalinimuisi — bitcoin.rocks yra jums.",
	"about_editorial_header": "Mūsų redakcinis požiūris",
	"about_editorial_1": "Kiekvienas bitcoin.rocks turinio elementas yra kruopščiai atrinktas ir patikrintas. Kai nurodome duomenis ar statistiką, nurodome šaltinius, kad galėtumėte patys patikrinti informaciją.",
	"about_editorial_2": "Nurodome patikimus šaltinius, tokius kaip TIME žurnalas, Forbes, MIT Technology Review, Lyn Alden ir daugelį kitų. Tikime, kad Bitcoin kalba pats už save, kai faktai pateikiami aiškiai.",
	"about_editorial_3": "Mūsų turinys reguliariai peržiūrimas ir atnaujinamas, siekiant užtikrinti tikslumą ir aktualumą. Visas turinys orientuotas išskirtinai į Bitcoin švietimą.",
	"about_open_source_header": "Atviras kodas",
	"about_open_source_1a": "bitcoin.rocks yra nemokamas atviro kodo projektas, licencijuotas pagal MIT licenciją. Visa mūsų kodų bazė viešai prieinama ",
	"about_open_source_1b": "GitHub platformoje",
	"about_open_source_1c": ".",
	"about_open_source_2": "Kiekvienas gali prisidėti prie bitcoin.rocks. Ypač laukiame vertėjų, kurie padeda mūsų turinį padaryti prieinamą žmonėms visame pasaulyje.",
	"about_open_source_3": "Dėl mūsų savanorių vertėjų bendruomenės, bitcoin.rocks šiuo metu pasiekiamas 29 kalbomis ir nuolat auga.",
	"about_open_source_contribute": "Sužinokite, kaip prisidėti.",
	"about_contact_header": "Susisiekite su mumis",
	"about_contact_1": "Mielai išgirsime jus. Nesvarbu, ar turite klausimą, pasiūlymą, ar tiesiog norite pasisveikinti — rašykite bet kada.",
	"about_contact_email": "El. paštas:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Jūsų lipdukus išsiųsime per 2–4 savaites. Tuo tarpu pagalvokite apie geras vietas, kur juos priklijuoti!",
	"sticker_success_2": "Geros vietos lipdukams:",
	"sticker_success_list_1": "Viešos vietos, kur žmonės juos pastebės",
	"sticker_success_list_2": "Vietos, kur jie nebus lengvai nuplėšti (lipdukai nepalieka nuolatinių pažeidimų)",
	"sticker_success_list_3": "Paviršiai, ant kurių lengva priklijuoti (metalas, plastikas, stiklas)",
	"sticker_success_list_4": "Neklijuokite ant privačios nuosavybės, ženklų, bankomatų ar degalinių kolonėlių",
	"sticker_success_3": "Norite pamatyti, kur kiti klijuoja savo lipdukus?",
	"sticker_success_flyers_bar_new": "Naujiena!",
	"sticker_success_flyers_bar_cta": "Atsispausdinkite ir iškabinkite Bitcoin skrajutes →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Jūsų užklausa sėkmingai pateikta.",
	"sticker_language_success_2": "Nauji failai publikuojami partijomis, todėl gali praeiti kelios savaitės, kol jie bus prieinami atsisiuntimui. Užsukite vėliau!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Jūsų atvirukus išsiųsime per 1–2 savaites.",
	"postcard_success_2": "Ačiū, kad siunčiate šiuos Bitcoin atvirukus savo artimui — tai padeda paspartinti Bitcoin priėmimą!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Jūsų ženklus išsiųsime per 1–2 savaites. Tuo tarpu pagalvokite apie geras vietas jiems pastatyti!",
	"sign_success_3": "Norite pamatyti, kur kiti stato savo ženklus?",
	"signs_share_header": "Pasidalinkite savo ženklo vietomis",
	"signs_share_c1": "Pasidalinkite savo ženklo vietos nuotrauka su mumis Nostr platformoje ir mes jums atsiųsime sats! Sats yra Bitcoin dalys.",
	"signs_btn_share_on_nostr": "DALINTIS NOSTR",
	"signs_btn_what_is_nostr": "KAS YRA NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "Sudėtinės infliacijos skaičiuoklė",
	"cic_description": "Naudokite šią sudėtinės infliacijos skaičiuoklę, kad sužinotumėte, kiek turi padidėti jūsų atlyginimas, kad neatsiliktų nuo infliacijos.",
	"what_can_i_do_about": "Ką galiu padaryti",
	"what_can_i_do_about_2": "dėl infliacijos?",
	"cic_inflation_cta": "Apsisaugokite nuo infliacijos su Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Ištrūkite iš matricos su Nostr",
	"nostr_header": "IŠTRŪKITE IŠ MATRICOS SU NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Kas yra Nostr?",
	"what_is_nostr_header": "KAS YRA NOSTR?"
});

console.log('\nDone! Simple files created for Lithuanian (lt).');
