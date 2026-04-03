/**
 * Creates Swahili (sw) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sw';
const today = '2026-04-03';

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
	"404_title": "Kosa 404 | Ukurasa Haupatikani",
	"404_message": "UKURASA HUU WA KOSA HAUPENDEZI HATA KIDOGO",
	"404_home": "RUDI NYUMBANI"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Kuhusu bitcoin.rocks — Elimu ya Bitcoin Tangu 2022",
	"about_description": "bitcoin.rocks ni tovuti ya elimu ya Bitcoin ya bure, chanzo huria, iliyoanzishwa mwaka 2022. Dhamira yetu ni kuharakisha kupitishwa kwa Bitcoin kupitia elimu.",
	"about_header": "KUHUSU",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Dhamira Yetu",
	"about_mission_1": "bitcoin.rocks ilianzishwa mwaka 2022 na dhamira rahisi: kuharakisha kupitishwa kwa Bitcoin kupitia elimu.",
	"about_mission_2": "Tupo ili kuwa kiungo cha kwanza unachoshiriki na mtu anayevutiwa na Bitcoin. Mahali pa kuanzia panapofikiwa kwa urahisi ambayo inaeleza jinsi Bitcoin inavyojenga ulimwengu bora.",
	"about_mission_3": "Watu wengi sana wanaielewa vibaya Bitcoin au hawajawahi kuitambulishwa vizuri. Tunataka kubadilisha hilo kwa kutoa maudhui ya elimu ya bure, ya ubora wa juu ambayo mtu yeyote anaweza kuelewa.",
	"about_what_we_do_header": "Tunachofanya",
	"about_what_we_do_1": "Tunaunda maudhui ya elimu ya bure kwa wapya wa Bitcoin. Tovuti yetu inashughulikia mada kama mfumuko wa bei, uhifadhi wa kibinafsi, pochi, Mtandao wa Lightning, na jinsi Bitcoin inavyolinganishwa na mali nyingine na mifumo ya malipo.",
	"about_what_we_do_2a": "Tunatuma ",
	"about_what_we_do_2b": "vibandiko vya Bitcoin bure",
	"about_what_we_do_2c": " hadi mlangoni mwako ili uweze kusaidia kueneza ufahamu wa Bitcoin katika jamii yako. Mamia ya watu wanaskanisha misimbo ya QR kwenye vibandiko hivi kila mwezi kujifunza kuhusu Bitcoin.",
	"about_what_we_do_3a": "Pia tunatoa ",
	"about_what_we_do_3b": "vipeperushi vinavyochapishwa",
	"about_what_we_do_3c": " na ",
	"about_what_we_do_3d": "vifurushi vya biashara",
	"about_what_we_do_3e": " kwa mtu yeyote anayetaka kusaidia biashara za ndani kukubali malipo ya Bitcoin.",
	"about_what_we_do_4": "Maudhui yetu yote hayahitaji ujuzi wowote wa awali wa Bitcoin. Iwe wewe ni mpya kabisa kwa Bitcoin au Bitcoiner mkongwe unayetafuta rasilimali za kushiriki, bitcoin.rocks ni kwa ajili yako.",
	"about_editorial_header": "Mbinu Yetu ya Uhariri",
	"about_editorial_1": "Kila kipande cha maudhui kwenye bitcoin.rocks kinakaguliwa na kuthibitishwa. Tunaporejelea data au takwimu, tunataja vyanzo vyetu ili uweze kuthibitisha habari mwenyewe.",
	"about_editorial_2": "Tunaunganisha na vyanzo vinavyoaminiwa kama TIME Magazine, Forbes, MIT Technology Review, Lyn Alden, na wengi wengine. Tunaamini kwamba Bitcoin inajisemea yenyewe wakati ukweli unawasilishwa kwa uwazi.",
	"about_editorial_3": "Maudhui yetu yanakaguliwa na kusasishwa mara kwa mara ili kuhakikisha usahihi na upya. Maudhui yote yanalenga kabisa elimu ya Bitcoin.",
	"about_open_source_header": "Chanzo Huria",
	"about_open_source_1a": "bitcoin.rocks ni mradi wa bure, wa chanzo huria ulioidhinishwa chini ya Leseni ya MIT. Msimbo wetu wote wa chanzo unapatikana hadharani ",
	"about_open_source_1b": "kwenye GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Mtu yeyote anaweza kuchangia bitcoin.rocks. Tunakaribisha hasa watafsiri wanaosaidia maudhui yetu kufikia watu duniani kote.",
	"about_open_source_3": "Shukrani kwa jumuiya yetu ya watafsiri wa kujitolea, bitcoin.rocks kwa sasa inapatikana katika lugha 22 na inazidi kukua.",
	"about_open_source_contribute": "Jifunze jinsi ya kuchangia.",
	"about_contact_header": "Wasiliana Nasi",
	"about_contact_1": "Tungependa kusikia kutoka kwako. Iwe una swali, pendekezo, au unataka tu kusalimu, wasiliana nasi wakati wowote.",
	"about_contact_email": "Barua pepe:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Utapokea kadi zako za posta ndani ya wiki 1 hadi 2.",
	"postcard_success_2": "Asante kwa kusaidia kuharakisha kupitishwa kwa Bitcoin kwa kutuma kadi hizi za posta kwa mtu unayemjua!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Utapokea bango lako ndani ya wiki 1 hadi 2. Wakati huo, fikiria kuhusu mahali pazuri pa kuweka bango!",
	"sign_success_3": "Unataka kuona watu wengine wanaweka mabango wapi?",
	"signs_share_header": "SHIRIKI MAHALI PA BANGO LAKO",
	"signs_share_c1": "Shiriki picha ya mahali pa bango lako nasi kwenye Nostr na tutakutumia sats! Sats ni sehemu ndogo za bitcoin.",
	"signs_btn_share_on_nostr": "SHIRIKI KWENYE NOSTR",
	"signs_btn_what_is_nostr": "NOSTR NI NINI?"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Utapokea vibandiko vyako ndani ya wiki 2 hadi 4. Wakati huo, fikiria kuhusu mahali pazuri pa kuweka kibandiko!",
	"sticker_success_2": "Mahali pazuri pa kuweka kibandiko ni:",
	"sticker_success_list_1": "mahali pa umma ambapo watu wataona",
	"sticker_success_list_2": "mahali ambapo havitaondolewa haraka (vibandiko havisababishi uharibifu wa kudumu)",
	"sticker_success_list_3": "kwenye nyuso zinazobandika vizuri (chuma, plastiki, kioo)",
	"sticker_success_list_4": "USIBANDIKE kwenye mali ya watu, alama za barabara, ATM, au pampu za mafuta",
	"sticker_success_3": "Unataka kuona watu wengine wanaweka vibandiko wapi?",
	"sticker_success_flyers_bar_new": "MPYA!",
	"sticker_success_flyers_bar_cta": "Chapisha na Bandika Vipeperushi vya Bitcoin →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Tumepokea ombi lako kwa mafanikio.",
	"sticker_language_success_2": "Tunachapisha faili mpya kwa makundi, kwa hivyo inaweza kuchukua wiki chache kabla ya faili hizi kupatikana kwa kupakua. Angalia tena hivi karibuni!"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "KIKOKOTOO CHA MFUMUKO WA BEI WA RIBA",
	"cic_description": "Tumia Kikokotoo hiki cha Mfumuko wa Bei wa Riba kugundua ni kiasi gani mshahara wako unahitaji kuongezeka ili kuendana na mfumuko wa bei.",
	"what_can_i_do_about": "Nifanye nini kuhusu",
	"what_can_i_do_about_2": "mfumuko wa bei?",
	"cic_inflation_cta": "Jiepushe na Mfumuko wa Bei na Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Toroka Matrix na Nostr",
	"nostr_header": "TOROKA MATRIX NA NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr ni Nini?",
	"what_is_nostr_header": "NOSTR NI NINI?"
});

console.log('\nDone! Created simple Swahili translation files.');
