/**
 * Creates Estonian (et) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'et';
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
	"404_title": "Viga 404 | Lehte ei leitud",
	"404_message": "SEE KATKINE LEHT EI OLE LAHE",
	"404_home": "TAGASI AVALEHELE"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "Teave bitcoin.rocks kohta — Bitcoin-haridus alates 2022",
	"about_description": "bitcoin.rocks on tasuta avatud lähtekoodiga Bitcoin-hariduse veebileht, mis asutati 2022. aastal. Meie missioon on kiirendada Bitcoini kasutuselevõttu hariduse kaudu.",
	"about_header": "TEAVE",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "Meie missioon",
	"about_mission_1": "bitcoin.rocks asutati 2022. aastal lihtsa missiooniga: kiirendada Bitcoini kasutuselevõttu hariduse kaudu.",
	"about_mission_2": "Me oleme selleks, et olla esimene link, mida jagada kellegagi, kes on Bitcoinist uudishimulik. Sõbralik ja ligipääsetav alguspunkt, mis selgitab, kuidas Bitcoin ehitab paremat maailma.",
	"about_mission_3": "Liiga paljud inimesed mõistavad Bitcoini valesti või pole kunagi saanud korralikku tutvustust. Me tahame seda muuta, pakkudes tasuta kvaliteetset haridussisu, millest igaüks aru saab.",
	"about_what_we_do_header": "Mida me teeme",
	"about_what_we_do_1": "Me loome tasuta haridussisu Bitcoin-algajatele. Meie veebileht käsitleb teemasid nagu inflatsioon, isehooldamine, rahakotid, Lightning-võrk ja kuidas Bitcoin võrdleb teiste varade ja maksesüsteemidega.",
	"about_what_we_do_2a": "Me saadame ",
	"about_what_we_do_2b": "tasuta Bitcoin-kleebiseid",
	"about_what_we_do_2c": " otse teie koju, et saaksite aidata levitada Bitcoin-teadlikkust oma kogukonnas. Sajad inimesed skaneerivad nende kleebiste QR-koode iga kuu, et Bitcoinist õppida.",
	"about_what_we_do_3a": "Pakume ka ",
	"about_what_we_do_3b": "prinditavaid flaiereid",
	"about_what_we_do_3c": " ja ",
	"about_what_we_do_3d": "ettevõttepakette",
	"about_what_we_do_3e": " kõigile, kes soovivad aidata kohalikke ettevõtteid Bitcoin-makseid vastu võtma.",
	"about_what_we_do_4": "Kogu meie sisu eeldab nullteadmisi Bitcoinist. Olenemata sellest, kas olete Bitcoinis täiesti uus või kogenud bitcoiner, kes otsib jagamiseks ressursse, on bitcoin.rocks teie jaoks.",
	"about_editorial_header": "Meie toimetamispõhimõtted",
	"about_editorial_1": "Kogu bitcoin.rocks-i sisu on kureeritud ja faktikontrollitud. Kui viitame andmetele või statistikale, esitame oma allikad, et saaksite teavet ise kontrollida.",
	"about_editorial_2": "Viitame usaldusväärsetele allikatele nagu TIME Magazine, Forbes, MIT Technology Review, Lyn Alden ja paljudele teistele. Me usume, et Bitcoin räägib enda eest, kui faktid on selgelt esitatud.",
	"about_editorial_3": "Meie sisu vaadatakse regulaarselt üle ja uuendatakse, et tagada täpsus ja ajakohasus. Kogu sisu keskendub eranditult Bitcoin-haridusele.",
	"about_open_source_header": "Avatud lähtekood",
	"about_open_source_1a": "bitcoin.rocks on tasuta avatud lähtekoodiga projekt, mis on litsentseeritud MIT-litsentsi alusel. Kogu meie kood on avalikult kättesaadav ",
	"about_open_source_1b": "GitHubis",
	"about_open_source_1c": ".",
	"about_open_source_2": "Igaüks saab bitcoin.rocks-i panustada. Eelkõige tervitame tõlkijaid, kes aitavad muuta meie sisu kättesaadavaks inimestele üle kogu maailma.",
	"about_open_source_3": "Tänu meie vabatahtlike tõlkijate kogukonnale on bitcoin.rocks praegu saadaval 40 keeles ja kasvab.",
	"about_open_source_contribute": "Õppige, kuidas panustada.",
	"about_contact_header": "Võtke meiega ühendust",
	"about_contact_1": "Meil on hea meel teist kuulda. Olenemata sellest, kas teil on küsimus, ettepanek või soovite lihtsalt tere öelda, võtke julgelt ühendust.",
	"about_contact_email": "E-post:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Saate oma kleebised kätte 2 kuni 4 nädala jooksul. Vahepeal mõelge heale kohale oma kleebistele!",
	"sticker_success_2": "Head kohad kleebistele on:",
	"sticker_success_list_1": "avalikes kohtades, kus inimesed neid näevad",
	"sticker_success_list_2": "kohtades, kust neid tõenäoliselt kiiresti ei eemaldata (kleebised ei tekita püsivat kahju)",
	"sticker_success_list_3": "pindadel, millele need kergesti kleepuvad (metall, plast, klaas)",
	"sticker_success_list_4": "MITTE eraomandile, siltide peale, sularahaautomaatidele ega tanklatele",
	"sticker_success_3": "Kas soovite näha, kuhu teised oma kleebiseid panevad?",
	"sticker_success_flyers_bar_new": "UUS!",
	"sticker_success_flyers_bar_cta": "Prindi ja riputage Bitcoin-flaiereid üles →"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "Oleme teie päringu kätte saanud.",
	"sticker_language_success_2": "Avaldame uusi faile partiidena, seega võib kuluda paar nädalat, enne kui need failid on allalaadimiseks saadaval. Tulge varsti tagasi kontrollima!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Saate oma postkaardid kätte 1 kuni 2 nädala jooksul.",
	"postcard_success_2": "Täname, et aitate kiirendada Bitcoini kasutuselevõttu, saates need postkaardid kellelegi, keda tunnete!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Saate oma sildid kätte 1 kuni 2 nädala jooksul. Vahepeal mõelge heale kohale oma siltidele!",
	"sign_success_3": "Kas soovite näha, kuhu teised oma silte panevad?",
	"signs_share_header": "JAGAGE OMA SILDIASUKOHTI",
	"signs_share_c1": "Jagage oma sildikoha pilti meiega Nostris ja me saadame teile satse! Satsid on bitcoini murdosad.",
	"signs_btn_share_on_nostr": "JAGA NOSTRIS",
	"signs_btn_what_is_nostr": "MIS ON NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "LIITINFLATSIOONI KALKULAATOR",
	"cic_description": "Kasutage seda liitinflatsiooni kalkulaatorit, et teada saada, kui palju peab teie palk tõusma, et inflatsiooniga sammu pidada.",
	"what_can_i_do_about": "Mida saan teha",
	"what_can_i_do_about_2": "inflatsiooni vastu?",
	"cic_inflation_cta": "Loobu inflatsioonist Bitcoiniga"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "Põgene Maatriksist Nostriga",
	"nostr_header": "PÕGENE MAATRIKSIST NOSTRIGA"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "Mis on Nostr?",
	"what_is_nostr_header": "MIS ON NOSTR?"
});

console.log(`\nDone! Created 9 simple files.`);
