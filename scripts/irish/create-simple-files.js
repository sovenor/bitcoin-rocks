/**
 * Creates Irish (ga) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ga';
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
	"404_title": "Earr\u00e1id 404 | N\u00ed Bhfuarthas an Leathanach",
	"404_message": "N\u00cdL AN LEATHANACH BRISTE SEO GO MAITH",
	"404_home": "AR AIS ABHAILE"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Maidir le bitcoin.rocks \u2014 Oideachas Bitcoin \u00f3 2022",
	"about_description": "Is su\u00edomh gr\u00e9as\u00e1in oideachais Bitcoin saor in aisce, foinse oscailte \u00e9 bitcoin.rocks a buna\u00edodh sa bhliain 2022. Is \u00e9 \u00e1r misean glacadh le Bitcoin a l\u00fair\u00fa tr\u00ed oideachas.",
	"about_header": "MAIDIR LINN",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "\u00c1r Misean",
	"about_mission_1": "Buna\u00edodh bitcoin.rocks sa bhliain 2022 le misean simplí: glacadh le Bitcoin a l\u00fair\u00fa tr\u00ed oideachas.",
	"about_mission_2": "T\u00e1imid ann chun bheith mar an ch\u00e9ad nasc a roinneann t\u00fa le duine at\u00e1 fiosrach faoi Bitcoin. Pointe tosaigh cairdi\u00fail, inrochtana a mh\u00edn\u00edonn conas at\u00e1 Bitcoin ag t\u00f3g\u00e1il domhain n\u00edos fearr.",
	"about_mission_3": "T\u00e1 an iomarca daoine a thuigeann Bitcoin go m\u00edcheart n\u00f3 n\u00e1r cuireadh in aithne i gceart d\u00f3ibh \u00e9. Ba mhaith linn \u00e9 sin a athr\u00fa tr\u00ed \u00e1bhar oideachais saor in aisce, ardch\u00e1il\u00edochta a chur ar f\u00e1il is f\u00e9idir le haon duine a thuiscint.",
	"about_what_we_do_header": "C\u00e9ard a Dh\u00e9anaimid",
	"about_what_we_do_1": "Cruthaímid ábhar oideachais saor in aisce do thosaitheoirí Bitcoin. Clúdaíonn ár suíomh gréasáin ábhair cosúil le boilsciú, féinchoimirce, sparáin, an Líonra Lightning, agus conas a dhéanann Bitcoin comparáid le sócmhainní agus córais íocaíochta eile.",
	"about_what_we_do_2a": "Seolaimid ",
	"about_what_we_do_2b": "greamáin Bitcoin saor in aisce",
	"about_what_we_do_2c": " chuig do dhoras ionas gur féidir leat cabhrú le feasacht Bitcoin a scaipeadh i do phobal. Scanann na céadta daoine na cóid QR ar na greamáin seo gach mí chun foghlaim faoi Bitcoin.",
	"about_what_we_do_3a": "Cuirimid ar fáil freisin ",
	"about_what_we_do_3b": "bileoga inphriontáilte",
	"about_what_we_do_3c": " agus ",
	"about_what_we_do_3d": "pacáistí gnó",
	"about_what_we_do_3e": " d'aon duine ar mhaith leo cabhrú le gnólachtaí áitiúla glacadh le híocaíochtaí Bitcoin.",
	"about_what_we_do_4": "Glacann ár n-ábhar ar fad le neamheolas iomlán ar Bitcoin. Cibé an bhfuil tú nua go hiomlán le Bitcoin nó ina Bitcoiner taithíoch ag lorg acmhainní le roinnt, tá bitcoin.rocks duit.",
	"about_editorial_header": "Ár gCur Chuige Eagarthóireachta",
	"about_editorial_1": "Déantar gach píosa ábhair ar bitcoin.rocks a roghnú go cúramach agus a sheiceáil ó thaobh fíricí de. Nuair a luaimid sonraí nó staitisticí, luaimid ár bhfoinsí ionas gur féidir leat an fhaisnéis a fhíorú tú féin.",
	"about_editorial_2": "Nascaimid le foinsí iontaofa cosúil le TIME Magazine, Forbes, MIT Technology Review, Lyn Alden, agus go leor eile. Creidimid go labhraíonn Bitcoin dó féin nuair a chuirtear na fíricí i láthair go soiléir.",
	"about_editorial_3": "Déantar ár n-ábhar a athbhreithniú agus a nuashonrú go rialta chun cruinneas agus úire a chinntiú. Díríonn an t-ábhar ar fad go heisiach ar oideachas Bitcoin.",
	"about_open_source_header": "Foinse Oscailte",
	"about_open_source_1a": "Is tionscadal saor in aisce foinse oscailte é bitcoin.rocks atá ceadúnaithe faoin gCeadúnas MIT. Tá ár mbonn cód ar fad ar fáil go poiblí ",
	"about_open_source_1b": "ar GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "Is féidir le haon duine cur le bitcoin.rocks. Cuirimid fáilte ar leith roimh aistritheoirí a chabhraíonn lenár n-ábhar a dhéanamh inrochtana do dhaoine ar fud an domhain.",
	"about_open_source_3": "A bhuíochas lenár bpobal d'aistritheoirí deonacha, tá bitcoin.rocks ar fáil faoi láthair i 45 teanga agus ag fás.",
	"about_open_source_contribute": "Foghlaim conas cur leis.",
	"about_contact_header": "Déan Teagmháil Linn",
	"about_contact_1": "Ba bhreá linn cloisteáil uait. Cibé an bhfuil ceist, moladh agat nó más mian leat dia duit a rá, déan teagmháil linn am ar bith.",
	"about_contact_email": "Ríomhphost:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Gheobhaidh tú do chuid greamán i gceann 2 go 4 seachtaine. Agus tú ag fanacht, smaoinigh ar áit mhaith chun do chuid greamán a chur!",
	"sticker_success_2": "Is áiteanna maithe do ghreamáin iad:",
	"sticker_success_list_1": "go poiblí áit a bhfeicfidh daoine iad",
	"sticker_success_list_2": "in áiteanna nach dócha go mbainfear go tapa iad (ní dhéanann na greamáin aon damáiste buan)",
	"sticker_success_list_3": "ar dhromchlaí a ngreamóidh siad go héasca orthu (miotal, plaisteach, gloine)",
	"sticker_success_list_4": "NÁ cuir iad ar mhaoin phríobháideach, ag clúdach comharthaí, ATManna, nó caidéil peitril",
	"sticker_success_3": "Ar mhaith leat a fheiceáil cá bhfuil daoine eile ag cur a gcuid greamán?",
	"sticker_success_flyers_bar_new": "NUA!",
	"sticker_success_flyers_bar_cta": "Priontáil & Cuir Suas Bileoga Bitcoin \u2192"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Fuaireamar d'iarratas go rathúil.",
	"sticker_language_success_2": "Foilsímid comhaid nua i mbaisceanna, mar sin d'fhéadfadh sé roinnt seachtainí a thógáil sula mbeidh na comhaid seo ar fáil le híoslódáil. Seiceáil ar ais go luath!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Gheobhaidh tú do chuid cártaí poist i gceann 1 go 2 seachtaine.",
	"postcard_success_2": "Go raibh maith agat as cabhrú le glacadh le Bitcoin a luathú trí na cártaí poist seo a sheoladh chuig duine a bhfuil aithne agat air!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Gheobhaidh tú do chuid comharthaí i gceann 1 go 2 seachtaine. Agus tú ag fanacht, smaoinigh ar áiteanna maithe chun do chuid comharthaí a chur!",
	"sign_success_3": "Ar mhaith leat a fheiceáil cá bhfuil daoine eile ag cur a gcuid comharthaí?",
	"signs_share_header": "ROINN DO LÁITHREACHA COMHARTHAÍ",
	"signs_share_c1": "Roinn grianghraf de do láthair chomhartha linn ar Nostr agus cuirfimid sats chugat! Is codáin de bitcoin iad sats.",
	"signs_btn_share_on_nostr": "ROINN AR NOSTR",
	"signs_btn_what_is_nostr": "CÉARD É NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "ÁIREAMHÁN BOILSCITHE IOLRAITHE",
	"cic_description": "Úsáid an tÁireamhán Boilscithe Iolraithe seo chun a fháil amach cé mhéad a chaithfidh do thuarastal ardú chun coinneáil suas leis an mboilsciú.",
	"what_can_i_do_about": "Céard is féidir liom a dhéanamh faoin",
	"what_can_i_do_about_2": "mboilsciú?",
	"cic_inflation_cta": "Éirigh as Boilsciú le Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Éalaigh ón Matrix le Nostr",
	"nostr_header": "ÉALAIGH ÓN MATRIX LE NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Céard é Nostr?",
	"what_is_nostr_header": "CÉARD É NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
