/**
 * Creates Filipino (fil) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'fil';
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
	"404_title": "Error 404 | Hindi Nahanap ang Pahina",
	"404_message": "Ang sirang pahinang ito ay hindi kahanga-hanga",
	"404_home": "Bumalik sa homepage"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Tungkol sa bitcoin.rocks — Edukasyon sa Bitcoin Mula 2022",
	"about_description": "Ang bitcoin.rocks ay isang libre at open-source na website para sa edukasyon sa Bitcoin na itinatag noong 2022. Ang aming misyon ay pabilisin ang pagtanggap ng Bitcoin sa pamamagitan ng edukasyon.",
	"about_header": "TUNGKOL SA",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Ang Aming Misyon",
	"about_mission_1": "Ang bitcoin.rocks ay itinatag noong 2022 na may simpleng misyon: pabilisin ang pagtanggap ng Bitcoin sa pamamagitan ng edukasyon.",
	"about_mission_2": "Kami ay umiiral upang maging unang link na ibabahagi mo sa isang taong interesado sa Bitcoin. Isang magiliw at madaling i-access na panimulang punto na nagpapaliwanag kung paano bumubuo ang Bitcoin ng mas magandang mundo.",
	"about_mission_3": "Napakaraming tao ang hindi nauunawaan ang Bitcoin o hindi pa naipakilala nang maayos dito. Nais naming baguhin iyan sa pamamagitan ng pagbibigay ng libre at de-kalidad na nilalaman na edukasyonal na mauunawaan ng sinuman.",
	"about_what_we_do_header": "Ano ang Ginagawa Namin",
	"about_what_we_do_1": "Gumagawa kami ng libreng nilalaman na pang-edukasyon para sa mga baguhan sa Bitcoin. Sinasaklaw ng aming website ang mga paksa tulad ng inflation, self-custody, mga wallet, ang Lightning Network, at kung paano ikinukumpara ang Bitcoin sa ibang asset at sistema ng pagbabayad.",
	"about_what_we_do_2a": "Nagpapadala kami ng ",
	"about_what_we_do_2b": "libreng Bitcoin sticker",
	"about_what_we_do_2c": " sa iyong pintuan para matulungan kang maipamahagi ang kamalayan sa Bitcoin sa iyong komunidad. Daan-daang tao ang nag-i-scan ng QR code sa mga sticker na ito bawat buwan upang matuto tungkol sa Bitcoin.",
	"about_what_we_do_3a": "Nagbibigay din kami ng ",
	"about_what_we_do_3b": "mga flyer na maari mong i-print",
	"about_what_we_do_3c": " at ",
	"about_what_we_do_3d": "mga business kit",
	"about_what_we_do_3e": " para sa sinumang gustong tumulong sa mga lokal na negosyo na tumanggap ng bayad sa Bitcoin.",
	"about_what_we_do_4": "Lahat ng aming nilalaman ay inaasumang walang dating kaalaman sa Bitcoin. Baguhan ka man sa Bitcoin o isang beteranong Bitcoiner na naghahanap ng mga mapagkukunan para ibahagi, ang bitcoin.rocks ay para sa iyo.",
	"about_editorial_header": "Ang Aming Pamamaraan sa Pagsusulat",
	"about_editorial_1": "Bawat nilalaman sa bitcoin.rocks ay maingat na pinili at sinuri ang mga katotohanan. Kapag nagsasangguni kami ng data o estadistika, binabanggit namin ang aming mga pinagmulan upang ikaw mismo ang makakapag-verify ng impormasyon.",
	"about_editorial_2": "Naglilink kami sa mga mapagkakatiwalaang pinagmulan tulad ng TIME Magazine, Forbes, MIT Technology Review, Lyn Alden, at marami pang iba. Naniniwala kami na ang Bitcoin ay nagsasalita para sa sarili nito kapag ang mga katotohanan ay malinaw na ipinresenta.",
	"about_editorial_3": "Ang aming nilalaman ay regular na sinusuri at ina-update upang matiyak ang katumpakan at kasariwaan. Lahat ng nilalaman ay nakatuon lamang sa edukasyon sa Bitcoin.",
	"about_open_source_header": "Open Source",
	"about_open_source_1a": "Ang bitcoin.rocks ay isang libre at open-source na proyekto na may lisensya sa ilalim ng MIT License. Ang buong codebase namin ay pampublikong magagamit ",
	"about_open_source_1b": "sa GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Sinuman ay maaaring mag-ambag sa bitcoin.rocks. Espesyal naming tinatanggap ang mga tagasalin na tumutulong na maging accessible ang aming nilalaman sa mga tao sa buong mundo.",
	"about_open_source_3": "Salamat sa aming komunidad ng mga boluntaryong tagasalin, ang bitcoin.rocks ay kasalukuyang available sa 24 na wika at patuloy na lumalaki.",
	"about_open_source_contribute": "Alamin kung paano mag-ambag.",
	"about_contact_header": "Makipag-ugnayan sa Amin",
	"about_contact_1": "Gusto naming marinig mula sa iyo. May tanong ka man, suhestiyon, o gusto mo lang bumati, makipag-ugnayan sa amin anumang oras.",
	"about_contact_email": "Email:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Ang iyong mga sticker ay darating sa loob ng 2-4 na linggo. Habang naghihintay, isipin kung saan magandang lugar para idikit ang mga ito!",
	"sticker_success_2": "Magagandang lugar para idikit ang sticker:",
	"sticker_success_list_1": "Mga pampublikong lugar kung saan maraming tao ang makakakita",
	"sticker_success_list_2": "Mga lugar na hindi madaling matanggal (ang mga sticker ay hindi nagdudulot ng permanenteng pinsala)",
	"sticker_success_list_3": "Mga ibabaw na madaling madikitin (metal, plastik, salamin)",
	"sticker_success_list_4": "Huwag idikit sa pribadong ari-arian, mga karatula, ATM, o gas pump",
	"sticker_success_3": "Gusto mong makita kung saan idinadagdag ng iba ang kanilang mga sticker?",
	"sticker_success_flyers_bar_new": "Bago!",
	"sticker_success_flyers_bar_cta": "Mag-print at mag-post ng mga Bitcoin flyer →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Matagumpay na natanggap ang iyong kahilingan.",
	"sticker_language_success_2": "Ang mga bagong file ay nai-publish nang sabay-sabay, kaya maaaring tumagal ng ilang linggo bago ito ma-download. Mangyaring bumalik muli!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Ang iyong postcard ay darating sa loob ng 1-2 linggo.",
	"postcard_success_2": "Salamat sa pagpapadala ng postcard na ito sa isang taong kilala mo upang makatulong na pabilisin ang pagtanggap ng Bitcoin!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Ang iyong mga karatula ay darating sa loob ng 1-2 linggo. Habang naghihintay, isipin kung saan magandang lugar para ilagay ang mga ito!",
	"sign_success_3": "Gusto mong makita kung saan inilalagay ng iba ang kanilang mga karatula?",
	"signs_share_header": "Ibahagi ang lokasyon ng iyong karatula",
	"signs_share_c1": "Ibahagi ang litrato ng lokasyon ng iyong karatula sa Nostr at kami ay mag-zap ng sats sa iyo! Ang sats ay mga bahagi ng Bitcoin.",
	"signs_btn_share_on_nostr": "IBAHAGI SA NOSTR",
	"signs_btn_what_is_nostr": "ANO ANG NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "Compound Inflation Calculator",
	"cic_description": "Gamitin ang compound inflation calculator na ito upang makita kung magkano ang kailangang dagdag sa iyong sahod upang makasabay sa inflation.",
	"what_can_i_do_about": "Ano ang magagawa ko tungkol sa",
	"what_can_i_do_about_2": "inflation?",
	"cic_inflation_cta": "Lumabas sa inflation gamit ang Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Lumabas sa matrix gamit ang Nostr",
	"nostr_header": "LUMABAS SA MATRIX GAMIT ANG NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Ano ang Nostr?",
	"what_is_nostr_header": "ANO ANG NOSTR?"
});

console.log('\nDone! Simple files created for Filipino (fil).');
