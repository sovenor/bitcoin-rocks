/**
 * Creates Hausa (ha) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ha';
const today = '2026-04-10';

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
	"404_title": "Kuskure 404 | Ba a Sami Shafin ba",
	"404_message": "WANNAN SHAFIN BAI DACE KODA KADAN BA",
	"404_home": "KOMA SHAFIN FARKO"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Game da bitcoin.rocks — Ilimin Bitcoin Tun 2022",
	"about_description": "bitcoin.rocks shafin ilimi ne na Bitcoin kyauta, mai buɗe ido wanda aka kafa a 2022. Manufarmu ita ce hanzarta amfani da Bitcoin ta hanyar ilimi.",
	"about_header": "GAME DA",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Manufarmu",
	"about_mission_1": "bitcoin.rocks an kafa shi a 2022 da manufa mai sauƙi: hanzarta amfani da Bitcoin ta hanyar ilimi.",
	"about_mission_2": "Muna nan don zama hanyar haɗi ta farko da za ku raba da wani mai sha'awar Bitcoin. Wurin fara da ke da sauƙin fahimta wanda ke bayyana yadda Bitcoin ke gina duniya mafi kyau.",
	"about_mission_3": "Mutane da yawa ba su fahimci Bitcoin ba ko kuma ba a taɓa gabatar musu da shi yadda ya dace ba. Muna son canza wannan ta hanyar samar da abun ciki na ilimi kyauta mai inganci wanda kowa zai iya fahimta.",
	"about_what_we_do_header": "Abin da Muke Yi",
	"about_what_we_do_1": "Muna ƙirƙirar abun ciki na ilimin Bitcoin kyauta ga sabbin mutane. Shafin yanar gizon mu ya ƙunshi batutuwa kamar hauhawar farashi, kula da kuɗinka da kanka, wallets, Lightning Network, da yadda Bitcoin ke kwatankwaci sauran kadarori da hanyoyin biyan kuɗi.",
	"about_what_we_do_2a": "Muna aika ",
	"about_what_we_do_2b": "stickers na Bitcoin kyauta",
	"about_what_we_do_2c": " zuwa ƙofarka don ka taimaka wajen yaɗa sanin Bitcoin a yankin ka. Ɗaruruwan mutane suna duba lambobin QR a kan waɗannan stickers kowane wata don koyon Bitcoin.",
	"about_what_we_do_3a": "Muna kuma samar da ",
	"about_what_we_do_3b": "takardun bugu",
	"about_what_we_do_3c": " da ",
	"about_what_we_do_3d": "kayan aikin kasuwanci",
	"about_what_we_do_3e": " ga duk wanda ke son taimakawa kasuwancin gida su karɓi biyan kuɗi na Bitcoin.",
	"about_what_we_do_4": "Duk abin da muke samarwa yana ɗauka cewa mai karatu ba shi da masaniyar Bitcoin ta baya. Ko kai sabon Bitcoin ne ko Bitcoiner mai ƙwarewa da ke neman abubuwa da za a raba, bitcoin.rocks naku ne.",
	"about_editorial_header": "Hanyar Rubuce-rubucenmu",
	"about_editorial_1": "Duk abin da ke bitcoin.rocks an zaɓe shi da kyau kuma an tabbatar da shi. Idan muka yi amfani da bayanai ko ƙididdiga, muna ambaton tushenmu don ku iya tabbatar da kanku.",
	"about_editorial_2": "Muna haɗawa da tushe masu aminci kamar TIME Magazine, Forbes, MIT Technology Review, Lyn Alden, da sauransu. Mun gaskata cewa Bitcoin yana magana da kansa idan aka bayyana shi a fili.",
	"about_editorial_3": "Muna bitar abubuwan da muke samarwa akai-akai kuma muna sabunta su don su kasance daidai kuma na zamani. Komai yana game da ilimin Bitcoin kawai.",
	"about_open_source_header": "Buɗaɗɗen Tushe",
	"about_open_source_1a": "bitcoin.rocks aikin buɗaɗɗen tushe ne kyauta ƙarƙashin MIT License. Duk lambar mu tana bayyane ",
	"about_open_source_1b": "a GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Kowa na iya ba da gudummawa ga bitcoin.rocks. Muna musamman marhabin da masu fassara waɗanda ke taimakawa wajen sanya abubuwan da muke samarwa ga mutane a duniya baki ɗaya.",
	"about_open_source_3": "Godiya ga ƙungiyarmu ta masu fassara masu himma, bitcoin.rocks yanzu yana samuwa cikin harsuna 42 kuma yana ƙaruwa.",
	"about_open_source_contribute": "Koyi yadda za ku ba da gudummawa.",
	"about_contact_header": "Tuntube Mu",
	"about_contact_1": "Muna son jin daga gare ku. Idan kuna da tambaya, ra'ayi, ko kuna son gaishe mu kawai, ku tuntube mu a kowane lokaci.",
	"about_contact_email": "Imel:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Za ku sami stickers ɗinku cikin makonni 2 zuwa 4. Yayin da kuke jira, ku yi tunani game da wuraren da za ku liƙa stickers ɗinku!",
	"sticker_success_2": "Wuraren sticker mafi kyau su ne:",
	"sticker_success_list_1": "a bayyane inda mutane za su gan su",
	"sticker_success_list_2": "a wuraren da ba za a cire su cikin sauƙi ba (stickers ba sa haifar da lalacewa ta dindindin)",
	"sticker_success_list_3": "a saman da stickers ke manne da kyau (ƙarfe, filastik, gilashi)",
	"sticker_success_3": "Stickers ɗinku za a aika a cikin ambulan fari mai sauƙi.",
	"sticker_success_4": "Za a share bayanan adireshin bayan an aika stickers ɗin ku na kyauta."
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Za mu ƙirƙira kuma mu buga fayilolin sticker ɗinku cikin makonni 3 zuwa 4. Mun gode da haƙurinku!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Za ku sami katin gaisawa a cikin makonni 2 zuwa 4.",
	"postcard_success_2": "Za a share bayanan adireshin bayan an aika katin gaisawa na kyauta."
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Za ku sami alamu a cikin makonni 2 zuwa 4.",
	"sign_success_2": "Za a share bayanan adireshin bayan an aika alamun ku na kyauta."
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"compound_inflation_calculator": "Na'urar Lissafin Hauhawar Farashi ta Tara",
	"cic_description": "Mutane da yawa sun san game da Ribar Tara, amma kaɗan ne suka san game da Hauhawar Farashi ta Tara. Yi amfani da na'urar lissafin hauhawar farashi ta tara don ganin yadda albashinku ke buƙatar ƙaruwa don kula da ikon sayan ku."
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"nostr_page_title": "Nostr — Hanyar Sadarwa ta Zamantakewa Mai 'Yanci",
	"nostr_description": "Nostr sabon tsarin sadarwa ne da ke ba ka damar yin sadarwa ta yanar gizo ba tare da tsoron tace-tacen ba."
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Menene Nostr?",
	"what_is_nostr_description": "Nostr sabon tsarin sadarwa ne da ke ba ka damar yin sadarwa ta yanar gizo ba tare da tsoron tace-tace, cirewa, ko rage bayyanarwa ba.",
	"what_is_nostr_header": "MENENE NOSTR?"
});

console.log(`\nDone! Created simple files for Hausa (ha).`);
