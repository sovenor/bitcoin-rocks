/**
 * Creates Chichewa (ny) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ny';
const today = '2026-04-02';

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
	"404_title": "Cholakwika 404 | Tsamba Sinapezeke",
	"404_message": "TSAMBA YOTHASIKAYI SINDIYABWINO NGAKHALE PANG'ONO",
	"404_home": "BWERERANI KU TSAMBA LALIKULU"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Za bitcoin.rocks — Maphunziro a Bitcoin Kuyambira 2022",
	"about_description": "bitcoin.rocks ndi webusayiti yaulere, yotseguka ya maphunziro a Bitcoin yomwe inayambitsidwa mu 2022. Cholinga chathu ndi kufulumizitsa kugwiritsiridwa ntchito kwa Bitcoin kudzera mu maphunziro.",
	"about_header": "ZA IFE",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Cholinga Chathu",
	"about_mission_1": "bitcoin.rocks inayambitsidwa mu 2022 ndi cholinga chosavuta: kufulumizitsa kugwiritsiridwa ntchito kwa Bitcoin kudzera mu maphunziro.",
	"about_mission_2": "Tilipo kuti tikhale ulalo woyamba umene mungagawane ndi munthu amene akufuna kudziwa za Bitcoin. Malo oyambira abwino ndi omveka bwino omwe akufotokoza momwe Bitcoin ikumangira dziko labwino.",
	"about_mission_3": "Anthu ambiri samamvetsetsa Bitcoin kapena sanayambe awafotokozera moyenera. Tikufuna kusintha zimenezi popereka zophunzitsa zaulere ndi zapamwamba zomwe aliyense angamvetsetse.",
	"about_what_we_do_header": "Zomwe Timachita",
	"about_what_we_do_1": "Timapanga zophunzitsa zaulere za Bitcoin kwa oyamba kudziwa. Webusayiti yathu imafotokoza nkhani monga mtengo wokwera kwa zinthu, kusunga ndalama zako wekha, zipangizo za ndalama, Lightning Network, ndi momwe Bitcoin imayerekeza ndi katundu wina ndi njira zolipirira.",
	"about_what_we_do_2a": "Timatumiza ",
	"about_what_we_do_2b": "zitikiti za Bitcoin zaulere",
	"about_what_we_do_2c": " kukhomo kwanu kuti muthandize kufalitsa kudziwa kwa Bitcoin m'dera lanu. Anthu mazana amasikana ma QR code pa zitikiti izi mwezi uliwonse kuti aphunzire za Bitcoin.",
	"about_what_we_do_3a": "Timapereka ",
	"about_what_we_do_3b": "mapepala osindikiza",
	"about_what_we_do_3c": " ndi ",
	"about_what_we_do_3d": "zipangizo za bizinesi",
	"about_what_we_do_3e": " kwa aliyense amene akufuna kuthandiza malonda akomweko kulandira malipiro a Bitcoin.",
	"about_what_we_do_4": "Zonse zomwe timapereka zimatenga kuti owerenga alibe chidziwitso chilichonse cha Bitcoin. Ngakhale ndinu watsopano ku Bitcoin kapena Bitcoiner wokhazikika amene akufunafuna zinthu zogawana, bitcoin.rocks ndi ya inu.",
	"about_editorial_header": "Njira Yathu Yolemba",
	"about_editorial_1": "Chilichonse pa bitcoin.rocks chimasankhidwa mosamalitsa ndi kutsimikizidwa. Tikagwiritsa ntchito deta kapena ziwerengero, timatchula magwero athu kuti muthe kutsimikizira nokha.",
	"about_editorial_2": "Timalumikizana ndi magwero odalirika monga TIME Magazine, Forbes, MIT Technology Review, Lyn Alden, ndi ena ambiri. Timakhulupirira kuti Bitcoin imadzilankhula yokha zinthu zikafotokozedwa momveka bwino.",
	"about_editorial_3": "Zomwe timapereka timaziwunika ndi kuzitsitsimutsa nthawi zonse kuti zikhale zolondola ndi zatsopano. Zonse zimakhala zokhudza maphunziro a Bitcoin okha.",
	"about_open_source_header": "Gwero Lotseguka",
	"about_open_source_1a": "bitcoin.rocks ndi ntchito yaulere, ya gwero lotseguka yotsatira MIT License. Khodi yathu yonse ili poyera ",
	"about_open_source_1b": "pa GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Aliyense angathandizire ku bitcoin.rocks. Timalandira makamaka omasulira omwe amathandiza kuti zomwe timapereka zikhale zopezeka kwa anthu padziko lonse.",
	"about_open_source_3": "Chifukwa cha gulu lathu la omasulira odzipereka, bitcoin.rocks panopa yapezeka m'zilankhulo 18 ndipo ikukulirakulira.",
	"about_open_source_contribute": "Phunzirani momwe mungathandizire.",
	"about_contact_header": "Tilembereni",
	"about_contact_1": "Tikufuna kumva kwa inu. Ngati muli ndi funso, lingaliro, kapena mukufuna kunena moni, tiyimbani nthawi iliyonse.",
	"about_contact_email": "Imelo:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Mulandira zitikiti zanu mu masabata 2 mpaka 4. Pomwe mukudikira, ganizani za malo abwino oyikira zitikiti zanu!",
	"sticker_success_2": "Malo abwino a zitikiti ndi:",
	"sticker_success_list_1": "poyera pomwe anthu aziona",
	"sticker_success_list_2": "pamalo omwe sizingachotsedwe msanga (zitikiti sizipangitsa kuwonongeka kwamuyaya)",
	"sticker_success_list_3": "pa malo omwe zimamatira bwino (chitsulo, pulasitiki, galasi)",
	"sticker_success_list_4": "OSATI pa malo aumwini, kuvundikira zizindikiro, ma ATM, kapena ma pompi a mafuta",
	"sticker_success_3": "Mukufuna kuona kumene anthu ena akuyika zitikiti zawo?",
	"sticker_success_flyers_bar_new": "YATSOPANO!",
	"sticker_success_flyers_bar_cta": "Sindikizani ndi Kutchera Mapepala a Bitcoin →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Talandira bwino pempho lanu.",
	"sticker_language_success_2": "Timafalitsa mafayilo atsopano mmagulu, choncho zingatenga masabata angapo kuti mafayilowa akhale opezeka. Bwererani posachedwa!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Mulandira makadi anu mu sabata 1 mpaka 2.",
	"postcard_success_2": "Zikomo pothandiza kufulumizitsa kugwiritsiridwa ntchito kwa Bitcoin potumiza makadi awa kwa munthu amene mumudziwa!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Mulandira zizindikiro zanu mu sabata 1 mpaka 2. Pomwe mukudikira, ganizani za malo abwino oyikira zizindikiro zanu!",
	"sign_success_3": "Mukufuna kuona kumene anthu ena akuyika zizindikiro zawo?",
	"signs_share_header": "GAWANANI MALO ANU A ZIZINDIKIRO",
	"signs_share_c1": "Gawanani chithunzi cha malo anu a zizindikiro nafe pa Nostr ndipo tikutumizani sats! Sats ndi zigawo za bitcoin.",
	"signs_btn_share_on_nostr": "GAWANANI PA NOSTR",
	"signs_btn_what_is_nostr": "NOSTR NDI CHIYANI?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "CHIPANGIZO CHOWERENGERA KUKWERA KWA MITENGO KOWONJEZEKA",
	"cic_description": "Gwiritsani ntchito Chipangizo Chowerengera Kukwera kwa Mitengo Kowonjezeka kuti mudziwe kuti malipiro anu akuyenera kukwera bwanji kuti muyende ndi kukwera kwa mitengo.",
	"what_can_i_do_about": "Ndingachitepo chiyani za",
	"what_can_i_do_about_2": "kukwera kwa mitengo?",
	"cic_inflation_cta": "Tulukani ku Kukwera kwa Mitengo ndi Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Thurukani ku Matrix ndi Nostr",
	"nostr_header": "THURUKANI KU MATRIX NDI NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Nostr ndi Chiyani?",
	"what_is_nostr_header": "NOSTR NDI CHIYANI?"
});

console.log('\nDone! Simple files created for Chichewa (ny).');
