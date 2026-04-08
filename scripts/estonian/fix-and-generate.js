/**
 * Generates all remaining Estonian (et) translation JSON files directly.
 * This bypasses the 6 corrupted create-*.js scripts by reading the Danish
 * translations and applying Estonian translations via a mapping approach.
 * 
 * Typographic quotes use \u201E (low-9) and \u201C (left double) unicode escapes
 * to avoid JS string delimiter conflicts.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const daDir = path.join(i18nDir, 'da');
const etDir = path.join(i18nDir, 'et');
const lang = 'et';
const today = '2026-04-07';

// Read a Danish JSON file, replace metadata, apply Estonian translations
function generateFromDanish(relPath, translations) {
	const daPath = path.join(daDir, relPath.replace(/_et\.json$/, '_da.json'));
	const etPath = path.join(etDir, relPath);
	
	let daData;
	try {
		daData = JSON.parse(fs.readFileSync(daPath, 'utf8'));
	} catch(e) {
		console.error(`SKIP (no Danish source): ${daPath}`);
		return false;
	}
	
	// Start with Estonian metadata
	const etData = {
		"@metadata": {
			"authors": ["Satoshi"],
			"last-updated": today,
			"locale": lang
		}
	};
	
	// For each key in the Danish file (except @metadata), use Estonian translation if available
	for (const key of Object.keys(daData)) {
		if (key === '@metadata') continue;
		if (translations[key] !== undefined) {
			etData[key] = translations[key];
		} else {
			// Fallback: copy Danish (will be caught by audit)
			etData[key] = daData[key];
		}
	}
	
	fs.mkdirSync(path.dirname(etPath), { recursive: true });
	fs.writeFileSync(etPath, JSON.stringify(etData, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${relPath}`);
	return true;
}

// Helper: write a file directly with given data object
function writeFile(relPath, data) {
	const etPath = path.join(etDir, relPath);
	const full = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang }, ...data };
	fs.mkdirSync(path.dirname(etPath), { recursive: true });
	fs.writeFileSync(etPath, JSON.stringify(full, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${relPath}`);
}

let count = 0;

// ============================================================
// COMMON.JSON
// ============================================================
writeFile(`common_${lang}.json`, {
	"common_footer_mission_1": "bitcoin.rocks-i missioon on kiirendada bitcoini kasutuselev\u00F5ttu hariduse kaudu.",
	"common_footer_mission_2": "\u00D5ppige, kuidas panustada sellesse avatud l\u00E4htekoodiga projekti.",
	"common_footer_follow_first_half": "J\u00E4lgige meid Nostris, otsides",
	"common_footer_follow_second_half": "mis tahes Nostr-kliendis.",
	"common_footer_what_is_nostr": "Mis on Nostr?",
	"common_footer_about": "Teave",
	"common_footer_email_us": "Saatke meile e-kiri:",
	"common_cta_section_get_started": "ALUSTAGE",
	"common_cta_section_with_bitcoin": "BITCOINIGA",
	"common_cta_section_title_1": "\u00D5ppige Bitcoini p\u00F5hit\u00F5desid",
	"common_cta_section_title_1_alt": "\u00D5ppige Bitcoinist rohkem",
	"common_cta_section_title_2": "Hankige oma esimene Bitcoin-rahakott",
	"common_cta_section_title_3": "Kuidas Bitcoini osta",
	"common_cta_link_type_email": "E-POST",
	"common_cta_link_type_guide": "JUHEND",
	"common_cta_link_type_website": "VEEBILEHT",
	"common_cta_author_21_days_of_bitcoin": "21 Days of Bitcoin",
	"common_cta_author_bitcoin_rocks": "bitcoin.rocks",
	"common_cta_author_strike": "Strike",
	"common_what_is_bitcoin": "MIS ON BITCOIN?",
	"common_what_is_bitcoin_content_1": "Bitcoin on kaks asja: digitaalne raha ja maksev\u00F5rk. Saate saata Bitcoini (digitaalset raha) otse teistele inimestele Bitcoin-v\u00F5rgu (maksev\u00F5rgu) kaudu.",
	"common_what_is_bitcoin_content_2": "Bitcoin on radikaalselt uus viis v\u00E4\u00E4rtust hoiustada ja edastada. Erinevalt tavalistest finantsv\u00F5rkudest suudab Bitcoin-v\u00F5rk toimida ilma keskasutuste v\u00F5i usaldatud administraatoriteta. See teeb Bitcoinist esimese avatud ja piirideta raha.",
	"common_what_is_bitcoin_content_3": "Bitcoin on digitaalne raha, mis annab teile t\u00E4ieliku omandi\u00F5iguse oma vara \u00FCle. Esimest korda inimkonna ajaloos saab iga\u00FCks omada vara, mis on t\u00F5eliselt haruldane, ei vaja kasutamiseks luba ning mida ei saa konfiskeerida, kui seda \u00F5igesti hoitakse.",
	"common_what_is_bitcoin_content_4": "Bitcoini saab saata kuhu tahes maailmas, kiiresti ja odavalt. Selleks ei ole vaja kolmandat osapoolt nagu panka.",
	"common_what_is_bitcoin_content_5": "Bitcoin v\u00F5imaldab iga\u00FChel hoiustada oma vara turvaliselt, ilma muretsemata, et valitsus selle varastab v\u00F5i rahaprintimise kaudu selle v\u00E4\u00E4rtust \u00E4ra inflateerib.",
	"common_what_is_bitcoin_content_6": "Valitsused k\u00F5ikjal saavad tr\u00FCkkida rohkem paberraha, kuid keegi ei saa tr\u00FCkkida rohkem bitcoine.",
	"common_what_is_bitcoin_content_7": "Saate h\u00F5lpsalt ise oma Bitcoini hoiustada, et saavutada selle \u00FCle t\u00E4ielik kontroll, andes teile t\u00E4ieliku juurdep\u00E4\u00E4su Bitcoini j\u00F5ule.",
	"common_what_is_bitcoin_content_8": "Kui suudate alla laadida rakenduse, suudate ise Bitcoini hoiustada ja oma vara s\u00E4ilitada, toetumata kellelegi teisele.",
	"common_what_is_bitcoin_content_9": "Bitcoin on parem raha.",
	"common_bitcoin_volatile": "KUULSIN, ET BITCOIN ON VOLATIILNE. KAS SEE ON TURVALINE?",
	"common_bitcoin_volatile_content_1": "L\u00FChiajaliselt kipub Bitcoini vahetuskurss k\u00F5ikuma. Seda nimetatakse volatiilsuseks.",
	"common_bitcoin_volatile_content_2": "Kuid volatiilsus, mida igap\u00E4evaselt n\u00E4ete, \u201Ekaob\u201C pikas perspektiivis.",
	"common_bitcoin_volatile_content_3": "Bitcoin muutub aja jooksul \u00FCha v\u00E4hem volatiilseks. Mida rohkem inimesi kasutab Bitcoini pikaajalise hoiukontona, seda stabiilsemaks selle v\u00E4\u00E4rtus muutub.",
	"common_bitcoin_volatile_content_4": "Paljud inimesed otsustavad hoiustada v\u00E4\u00E4rtust Bitcoinis mitmeks aastaks kui turvalist viisi volatiilsuse riski minimeerimiseks ja oma ostuj\u00F5u kaitsmiseks aja jooksul.",
	"common_bitcoin_volatile_content_5": "M\u00F5nedes riikides, nagu Venezuela, Sudaan, Liibanon, S\u00FC\u00FCria, Argentina, T\u00FCrgi, Brasiilia ja paljud teised, inflateerub kohaliku valuuta v\u00E4\u00E4rtus nii kiiresti, et Bitcoini peetakse stabiilsemaks viisiks raha s\u00E4\u00E4stmiseks.",
	"common_bitcoin_afford": "MA EI SAA TERVET BITCOINI ENDALE LUBADA",
	"common_bitcoin_afford_content_1": "Dollar koosneb 100 sendist. Bitcoin koosneb 100 000 000 (100 miljonist) satsist.",
	"common_bitcoin_afford_content_2": "Te ei pea omama tervet bitcoini. Enamik inimesi omab lihtsalt satse. Satsid on bitcoini murdosad. N\u00E4iteks, kui 1 terve bitcoin on 100 000 dollarit, siis 1 dollari eest saate 1000 satsi!",
	"common_bitcoin_hacked": "KAS BITCOINI ON KUNAGI H\u00C4KITUD?",
	"common_bitcoin_hacked_content_1": "Olete ehk kuulnud \u201EBitcoin-h\u00E4kkimisest\u201C internetis v\u00F5i uudistes. Enamik inimesi loeb neid artikleid ja usub, et Bitcoin-v\u00F5rk on h\u00E4kitud. Bitcoin-v\u00F5rku pole aga kunagi h\u00E4kitud.",
	"common_bitcoin_hacked_content_2": "Mis on Bitcoin-v\u00F5rk? M\u00F5elge Bitcoin-v\u00F5rgust kui raudteer\u00F6\u00F6bastest. Rongid, mis s\u00F5idavad Bitcoin-v\u00F5rgu raudteer\u00F6\u00F6bastel, on Bitcoin-tehingud.",
	"common_bitcoin_hacked_content_3": "Kui loete uudistes Bitcoin-h\u00E4kkimisest, siis loete hoidja (nagu FTX) h\u00E4kkimisest v\u00F5i pankrotistumisest.",
	"common_bitcoin_hacked_content_4": "Hoidjad on ettev\u00F5tted, kes hoiavad teie bitcoine teie eest. Kuid sellega kaasneb risk: oma bitcoinide kaotamine, kui ettev\u00F5te neid halvasti haldab, varastab v\u00F5i l\u00E4heb pankrotti.",
	"common_bitcoin_hacked_content_5": "See juhtus hiljuti FTX-iga.",
	"common_bitcoin_hacked_content_6": "K\u00F5ik, kes usaldasid FTX-ile oma bitcoine, kaotasid need. K\u00F5ik, kes hoidsid oma bitcoine isehoolduses, ei olnud FTX-ist \u00FCldse m\u00F5jutatud. See on bitcoini isehoolduse j\u00F5ud: t\u00F5eline kontroll oma raha \u00FCle.",
	"common_bitcoin_hacked_content_7": "Selle asemel, et j\u00E4tta oma bitcoin b\u00F6rsile v\u00F5i pakendisse nagu ETF, hoidke seda oma rahakotis k\u00F5igi vabaduse eeliste saamiseks.",
	"common_bitcoin_hacked_content_8": "Kui hoiustate oma bitcoini ise, on teie raha kaitstud Bitcoin-v\u00F5rgu poolt. See on maailma turvalisim finantsv\u00F5rk.",
	"common_bitcoin_hacked_content_9": "Isehoolduses ei saa Sam FTX-ist teie bitcoini varastada.",
	"common_bitcoin_hacked_content_10": "Valitsus ei saa tr\u00FCkkida rohkem bitcoine ja tekitada inflatsiooni.",
	"common_bitcoin_hacked_content_11": "Bitcoin isehoolduses on teie raha, t\u00E4nu Bitcoin-v\u00F5rgu j\u00F5ule.",
	"common_bitcoin_energy": "MIKS BITCOIN KASUTAB ENERGIAT?",
	"common_bitcoin_energy_content_1": "Bitcoin kasutab energiat v\u00F5rgu turvamiseks ja teie raha kaitsmiseks.",
	"common_bitcoin_energy_content_2": "Bitcoin kasutab m\u00E4rkimisv\u00E4\u00E4rset hulka energiat ja see on hea asi mitmel p\u00F5hjusel.",
	"common_bitcoin_energy_list_1": "Bitcoinil ei ole pangajookse.",
	"common_bitcoin_energy_list_2": "Bitcoin aitab stabiliseerida elektriv\u00F5rke bitcoin-kaevandamise abil.",
	"common_bitcoin_energy_list_3": "Bitcoin v\u00E4hendab naftapuurimise heitkoguseid.",
	"common_bitcoin_energy_list_4": "Bitcoin kasutab v\u00E4hem energiat kui ameeriklased kasutavad j\u00F5uluvalgustuse jaoks igal aastal.",
	"common_bitcoin_energy_list_5": "Bitcoin on maailma rohelisim t\u00F6\u00F6stus!",
	"common_cic_intro_1": "Paljud teavad liitintressist, kuid v\u00E4hesed teavad liitinflatsioonist.",
	"common_cic_intro_2": "Meie liitinflatsiooni kalkulaatoriga saate h\u00F5lpsalt arvutada, kui palju peab teie palk t\u00F5usma, et s\u00E4ilitada oma ostuj\u00F5ud aja jooksul.",
	"common_cic_intro_3": "Sisestage lihtsalt oma praegune palk, inflatsioonim\u00E4\u00E4r ja aastate arv, mille kohta soovite arvutada, ning meie kalkulaator n\u00E4itab teile, milline peab olema teie palk, et inflatsiooniga sammu pidada.",
	"common_current_salary": "praegune palk",
	"common_inflation_rate": "inflatsioonim\u00E4\u00E4r",
	"common_year": "aasta",
	"common_years": "aastat",
	"common_result_starting_message": "T\u00E4itke \u00FClaltoodud vorm ja kl\u00F5psake arvuta.",
	"common_error_message": "Viga: Palun t\u00E4itke k\u00F5ik 3 vormiv\u00E4lja.",
	"common_result_message_1": "Inflatsioonim\u00E4\u00E4raga",
	"common_result_message_2": "peab teie",
	"common_result_message_3": "palk t\u00F5usma",
	"common_result_message_in": "tasemele",
	"common_result_message_4": "et s\u00E4ilitada oma ostuj\u00F5ud.",
	"common_calculate_button_text": "ARVUTA",
	"common_learn_more": "LISATEAVE",
	"common_success": "\u00D5NNESTUS!",
	"common_choose_your_country": "Valige oma riik",
	"common_country_usa": "USA",
	"common_country_canada": "Kanada",
	"common_submit": "ESITA",
	"common_language_afrikaans": "AFRIKAANSI",
	"common_language_arabic": "ARAABIA",
	"common_language_basque": "BASKI",
	"common_language_bulgarian": "BULGAARIA",
	"common_language_catalan": "KATALAANI",
	"common_language_chinese": "HIINA",
	"common_language_croatian": "HORVAADI",
	"common_language_czech": "T\u0160EHHI",
	"common_language_danish": "TAANI",
	"common_language_dutch": "HOLLANDI",
	"common_language_english": "INGLISE",
	"common_language_estonian": "EESTI",
	"common_language_filipino": "FILIPIINI",
	"common_language_finnish": "SOOME",
	"common_language_french": "PRANTSUSE",
	"common_language_german": "SAKSA",
	"common_language_greek": "KREEKA",
	"common_language_hausa": "HAUSA",
	"common_language_hebrew": "HEEBREA",
	"common_language_hindi": "HINDI",
	"common_language_hungarian": "UNGARI",
	"common_language_indonesian": "INDONEESIA",
	"common_language_irish": "IIRI",
	"common_language_italian": "ITAALIA",
	"common_language_japanese": "JAAPANI",
	"common_language_korean": "KOREA",
	"common_language_malay": "MALAI",
	"common_language_norwegian": "NORRA",
	"common_language_persian": "P\u00C4RSIA",
	"common_language_polish": "POOLA",
	"common_language_portuguese": "PORTUGALI",
	"common_language_russian": "VENE",
	"common_language_sinhala": "SINGALI",
	"common_language_slovak": "SLOVAKI",
	"common_language_slovenian": "SLOVEENI",
	"common_language_spanish": "HISPAANIA",
	"common_language_swahili": "SUAHIILI",
	"common_language_swedish": "ROOTSI",
	"common_language_thai": "TAI",
	"common_language_turkish": "T\u00DCRGI",
	"common_language_urdu": "URDU",
	"common_language_vietnamese": "VIETNAMI",
	"common_language_yoruba": "JORUBA",
	"common_stickers_bulk_mess": "Ei taha ise failidega j\u00E4nnata?",
	"common_stickers_bulk_want": "Soovite rohkem kui paar kleebist?",
	"common_stickers_bulk_store": "Tellige kleebiseid hulgi samalt tr\u00FCkikojalt, mida meie kasutame.",
	"common_stickers_bulk_cheaper": "Mida rohkem kleebiseid ostate, seda odavam on \u00FChe kleebise hind.",
	"common_stickers_print_instructions_1": "Saate osaleda, printides oma kleebised ise, olenemata sellest, kus elate! Kl\u00F5psake allpool oma keelel, et alla laadida kleebisefailid ja juhised.",
	"common_stickers_print_instructions_2": "Palun arvestage: k\u00F5ik kleebised ei ole saadaval k\u00F5igis keeltes.",
	"common_stickers_request_language_1": "Ei n\u00E4e oma keelt?",
	"common_stickers_request_language_2": "T\u00E4itke allolev vorm, et taotleda kleebisefaile oma kohalikus keeles.",
	"common_stickers_dimensions": "M\u00F5\u00F5tmed:",
	"common_stickers_type": "T\u00FC\u00FCp:",
	"common_stickers_material": "Materjal:",
	"common_stickers_where_to_print": "Kust printida:",
	"common_stickers_type_die_cut": "stantsitud kleebis",
	"common_stickers_material_vinyl": "vin\u00FC\u00FClkleebised v\u00E4liskasutuseks",
	"common_stickers_printer": "Kasutame StickerMule.com-i, kuid v\u00F5ite kasutada mis tahes kleebiseettev\u00F5tet.",
	"common_stickers_dimensions_danger": "11,4544 cm x 8,382 cm",
	"common_stickers_dimensions_warning": "10,414 cm x 9,2202 cm",
	"common_stickers_dimensions_caution": "12,0142 cm x 7,9502 cm",
	"common_stickers_dimensions_fix": "11,3792 cm x 6,8072 cm",
	"common_stickers_dimensions_study": "14,605 cm x 5,1308 cm",
	"common_stickers_dimensions_bdhi": "21,59 cm x 4,6482 cm",
	"common_stickers_dimensions_cure_v2": "6,35 cm x 12,7 cm",
	"common_stickers_dimensions_got_inflation": "7,9248 cm x 14,605 cm",
	"common_stickers_dimensions_what_if": "21,7932 cm x 7,62 cm",
	"common_stickers_dimensions_bitcoin_accepted_here": "20,995 cm x 6,35 cm",
	"common_nostr_join": "LIITUGE NOSTRIGA KOHE",
	"common_nostr_protocol_header": "Protokoll, mitte platvorm",
	"common_nostr_protocol_c1": "Nostr on uus protokoll, mis v\u00F5imaldab teil suhelda veebis ilma tsensuuri, platvormi eemaldamise v\u00F5i algoritmilise mahasurumise kartuseta",
	"common_nostr_protocol_c2": "Platvorme nagu Twitter ja Facebook kontrollib \u00FCks ettev\u00F5te, kuid keegi ei kontrolli Nostr-protokolli.",
	"common_nostr_freedom_header": "Vabadus liikuda",
	"common_nostr_freedom_c1": "Nostr sarnaneb e-postiga. Keegi ei kontrolli e-posti protokolli ja iga\u00FCks saab selle peale ehitada kliendi (nagu Gmail, Hotmail jne).",
	"common_nostr_freedom_c2": "Keegi ei kontrolli Nostr-protokolli ja iga\u00FCks saab selle peale ehitada kliendi (nagu Damus, Amethyst jne).",
	"common_nostr_freedom_c3": "Kui teile ei meeldi, kuidas teatud klient t\u00F6\u00F6tab, saate sujuvalt kolida oma Nostr-konto teise kliendi juurde, kaotamata oma j\u00E4lgijaid ega sisu.",
	"common_nostr_bitcoin_header": "Bitcoin on sisseehitatud",
	"common_nostr_bitcoin_c1": "Bitcoin on Nostr-protokolli sisse ehitatud. Kui n\u00E4ete sisu, mis teile meeldib, saate h\u00F5lpsalt saata bitcoine kellelegi t\u00E4nuks!",
	"common_nostr_bitcoin_c2": "Tsentraliseeritud platvormidel nagu Twitter ja Facebook teenib tsentraliseeritud ettev\u00F5te teie sisult raha. Kuid avatud protokollidel nagu Nostr teenite teie ise oma sisult raha.",
	"common_nostr_download_client": "LAADIGE ALLA TASUTA KLIENT, ET LIITUDA NOSTRIGA",
	"common_nostr_iphone_clients": "iPhone'i kliendid",
	"common_nostr_primal": "PRIMAL",
	"common_nostr_iphone_app": "iPhone'i rakendus",
	"common_nostr_first_client": "Soovitatav esimene klient",
	"common_nostr_wallet_built_in": "Bitcoin-zap-rahakott sisseehitatud",
	"common_nostr_download_now": "LAADI KOHE ALLA",
	"common_nostr_damus": "DAMUS",
	"common_nostr_familiar": "Tuttav liides",
	"common_nostr_separate_wallet": "N\u00F5uab eraldi bitcoin-rahakotti",
	"common_nostr_android_clients": "Androidi kliendid",
	"common_nostr_android_app": "Androidi rakendus",
	"common_nostr_amethyst": "AMETHYST",
	"common_nostr_features": "Palju funktsioone",
	"common_nostr_browser_clients": "Brauserikliendid",
	"common_nostr_iris": "IRIS",
	"common_nostr_web_client": "Veebiklient",
	"common_nostr_simple": "\u00DClilihtne",
	"common_nostr_test": "Lihtne viis Nostrit proovida testkontoga",
	"common_nostr_view_client": "VAATA KLIENTI",
	"common_kit_printer": "Soovitame oma Bitcoin-ettev\u00F5ttepaketi bro\u0161\u00FC\u00FCride printimiseks VistaPrint.com-i. Siiski v\u00F5ite kasutada mis tahes tr\u00FCkikoda, kui nad suudavad teha kahepoolset tr\u00FCkki.",
	"common_kit_link_to_print": "Link printimiseks:",
	"common_kit_fold": "Volt:",
	"common_kit_fold_trifold": "Kolmevolt",
	"common_kit_unfolded_size": "Lahtivolditud suurus:",
	"common_kit_unfolded_size_bbk": "Letter-formaat (8,5 tolli x 11 tolli)",
	"common_kit_paper_thickness": "Paberi paksus:",
	"common_kit_paper_thickness_standard": "Standardne",
	"common_kit_paper_stock": "Paberi kvaliteet:",
	"common_kit_paper_stock_glossy": "L\u00E4ikiv",
	"common_kit_exterior_print_file": "V\u00E4listr\u00FCkifail:",
	"common_kit_interior_print_file": "Sisetr\u00FCkifail:",
	"common_kit_cta_header": "Pange kohalik ettev\u00F5te Bitcoini vastu v\u00F5tma",
	"common_biz_learn": "\u00D5ppige, miks Bitcoin on ettev\u00F5tetele hea",
	"common_biz_wallets": "Hankige Bitcoin-rahakott Bitcoin-maksete vastuv\u00F5tmiseks",
	"common_biz_maps": "Lisage end Bitcoin-kaupmeeste kaardile",
	"common_biz_stickers": "Tasuta \u201EBitcoin aktsepteeritakse siin\u201C kleebised",
	"common_biz_rewards": "Bitcoin-preemiad",
	"common_biz_accounting": "Bitcoin-raamatupidamise juhend",
	"common_biz_faq": "Korduma kippuvad k\u00FCsimused",
	"common_biz_kit": "Printige oma Bitcoin-ettev\u00F5ttepakett",
	"common_biz_accept_bitcoin_payments": "V\u00D5TKE VASTU BITCOIN-MAKSEID",
	"common_biz_ready": "KAS OLETE VALMIS OMA ETTEV\u00D5TTES BITCOINI VASTU V\u00D5TMA?",
	"common_biz_more": "ROHKEM ETTEV\u00D5TTERESSURSSE",
	"common_self_custody": "ISEHOOLDUS",
	"common_not_your_keys": "MITTE TEIE V\u00D5TMED",
	"common_cold_wallet": "K\u00DCLM RAHAKOTT",
	"common_hot_wallet": "KUUM RAHAKOTT",
	"common_sticker_files_mission_1": "Meie missioon on aidata teil oran\u017Eida rohkem inimesi, pannes Bitcoin-kleebiseid avalikesse kohtadesse. K\u00F5igil meie kleebistel on QR-koodid, mis viivad hariduslehtedele teemal",
	"common_sticker_files_mission_2": "Bitcoin",
	"common_sticker_files_mission_3": "inflatsioon",
	"common_sticker_files_mission_4": "Kui elate USA-s v\u00F5i Kanadas, saate",
	"common_sticker_files_mission_5": "taotleda tasuta pakki ingliskeelseid kleebiseid",
	"common_published_by": "Avaldanud",
	"common_publisher_name": "bitcoin.rocks",
	"common_publisher_since": "Bitcoin-haridus alates 2022",
	"common_publisher_open_source": "Avatud l\u00E4htekoodiga projekt",
	"common_reviewed_accuracy": "\u2713 T\u00E4psuse osas \u00FCle vaadatud: 2026",
	"common_footer_tagline": "Kiirendame bitcoini kasutuselev\u00F5ttu hariduse kaudu.",
	"common_footer_contribute": "Panustage",
	"common_footer_nostr": "Nostr",
	"common_sources_heading": "Allikad"
});
count++;

// ============================================================
// INDEX.JSON - read from Danish and apply Estonian translations
// ============================================================
// Index has no typographic quotes, so we can use generateFromDanish safely
// But the Danish files are also fine, let me just generate directly

const indexTranslations = require(path.join(daDir, `index_da.json`));
const etIndex = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };

// Map Danish keys to Estonian values
const indexMap = {
	"bitcoin_builds_a_better_world": "Bitcoin ehitab paremat maailma.",
	"home_description": "Bitcoin on parem raha, mis ehitab paremat maailma. Bitcoin on kaitsnud inim\u00F5igusi, p\u00E4\u00E4stnud inimesi k\u00F5rge inflatsiooni eest, toetanud kohalikke p\u00F5llumehi, v\u00E4hendanud naftapuurimise heitkoguseid ja palju muud.",
	"home_intro": "Bitcoin on parem raha, mis ehitab paremat maailma. Puudutage allpool kategooriat, et \u00F5ppida, kuidas Bitcoin seda paremaks teeb, v\u00F5i lihtsalt hakake alla kerima, et avastada.",
	"home_btn_money": "PAREM RAHA",
	"home_btn_salary": "TEIE PALK",
	"home_btn_freedom": "VABADUS",
	"home_btn_human_rights": "INIM\u00D5IGUSED",
	"home_btn_equality": "V\u00D5RDSUS",
	"home_btn_property_rights": "OMANDI\u00D5IGUS",
	"home_btn_housing": "ELUASE",
	"home_btn_business": "ETTEV\u00D5TLUS",
	"home_btn_crowdfunding": "\u00DCHISRAHASTUS",
	"home_btn_energy": "ENERGIA",
	"home_btn_environment": "KESKKOND",
	"home_btn_food": "TOIT",
	"home_btn_art": "KUNST",
	"home_btn_politics": "POLIITIKA",
	"home_btn_war": "S\u00D5DA",
	"home_btn_coding": "KODEERIMINE",
	"home_btn_networks": "V\u00D5RGUSTIKUD",
	"home_btn_payments": "MAKSED",
	"home_btn_self_custody": "ISEHOOLDUS",
	"home_btn_you": "SINA",
	"home_section_bitcoin_is": "BITCOIN ON",
	"home_section_bitcoin_and": "BITCOIN JA",
	"home_link_type_website": "VEEBILEHT",
	"home_link_type_video": "VIDEO",
	"home_link_type_article": "ARTIKKEL",
	"home_link_type_podcast": "PODCAST",
	"home_link_type_business_kit": "ETTEV\u00D5TTEPAKETT",
	"home_link_type_data": "ANDMED",
	"home_link_type_research": "UURIMUS",
	"home_link_type_story": "LUGU",
	"home_link_type_book_excerpt": "RAAMATUV\u00C4LJAV\u00D5TE",
	"home_link_type_street_art": "T\u00C4NAVAKUNST",
	"home_link_type_outreach": "TEAVITUS",
	"home_link_type_campaign": "KAMPAANIA",
	"home_link_type_software": "TARKVARA",
	"home_link_type_hardware": "RIISTVARA",
	"home_link_type_guide": "JUHEND",
	"home_link_type_email": "E-POST",
	"home_link_title_inflation": "Bitcoinil ei ole inflatsiooni",
	"home_link_title_bank_runs": "Bitcoinil ei ole pangajookse",
	"home_link_title_gold": "Bitcoin vs kuld",
	"home_link_title_crypto": "Bitcoin vs kr\u00FCpto",
	"home_link_title_cash": "Bitcoin vs sularaha",
	"home_link_title_bonds": "Bitcoin vs v\u00F5lakirjad",
	"home_link_title_cbdc": "Bitcoin vs CBDC-d",
	"home_link_title_your_salary_1": "Uurige, kui palju peab teie palk t\u00F5usma, et inflatsiooniga sammu pidada.",
	"home_link_title_freedom_1": "Miks Bitcoin on vabaduse jaoks oluline",
	"home_link_title_freedom_2": "Bitcoin pakub vabadust poliitilisest repressioonist",
	"home_link_title_human_rights_1": "Kuidas Bitcoin kaitseb inim\u00F5igusi",
	"home_link_title_human_rights_2": "Aafrika vaikne Bitcoin-revolutsioon",
	"home_link_title_human_rights_3": "Bitcoin kaitseb inim\u00F5igusi \u00FCle kogu maailma",
	"home_link_title_equality_1": "Bitcoin toob lootust ja v\u00F5imalusi l\u00F5una-aafriklastele",
	"home_link_title_equality_2": "Kuidas Bitcoin v\u00F5ib olla m\u00E4ngumuutja mustanahelistele ameeriklastele",
	"home_link_title_property_rights_1": "Bitcoin on t\u00E4iuslik omandivorm",
	"home_link_title_property_rights_2": "Bitcoin vs kinnisvara",
	"home_link_title_housing_1": "Kuidas Bitcoin muudab eluaseme taas taskukohaseks",
	"home_link_title_business_3": "Bitcoin vs aktsiad",
	"home_link_title_business_1": "\u00D5ppige, miks Bitcoin on ettev\u00F5tetele hea",
	"home_link_title_business_2": "Pange kohalik ettev\u00F5te Bitcoini vastu v\u00F5tma",
	"home_link_title_crowdfunding_1": "Kuidas Bitcoin toitis suurimaid Nigeeria proteste p\u00F5lvkonna jooksul",
	"home_link_title_crowdfunding_2": "Kanada autojuhtide protest kogub raha Bitcoinis p\u00E4rast seda, kui GoFundMe blokeeris annetused",
	"home_link_title_crowdfunding_3": "Geyser = \u00FChisrahastus Bitcoiniga",
	"home_link_title_energy_1": "Kuidas Bitcoin stabiliseerib Texase elektriv\u00F5rku",
	"home_link_title_energy_2": "Miks Bitcoin kasutab energiat?",
	"home_link_title_energy_3": "Bitcoini energiakasutus ei ole probleem. Siin on p\u00F5hjus.",
	"home_link_title_energy_4": "Bitcoin-kaevandamine stabiliseerib elektriv\u00F5rke n\u00F5udluse juhtimise kaudu",
	"home_link_title_energy_5": "Bitcoin-kaevurid toovad h\u00FCdroenergiat Aafrika maapiirkondadesse",
	"home_link_title_energy_6": "Kuidas Bitcoin soodustab taastuvenergiat",
	"home_link_title_environment_1": "Kuidas bitcoin-kaevandamine v\u00E4hendab globaalseid metaaniheitkoguseid",
	"home_link_title_environment_2": "Kuidas bitcoin-kaevandamine p\u00E4\u00E4stis rahvuspargi",
	"home_link_title_environment_3": "Bitcoin on maailma rohelisim t\u00F6\u00F6stus!",
	"home_link_title_environment_4": "Bitcoin-kaevandamine takistab t\u00F5rvikuga p\u00F5letatavat maagaasi atmosf\u00E4\u00E4ri saastamast",
	"home_link_title_food_1": "Kuidas inflatsioon m\u00F5jutab toiduhindu",
	"home_link_title_food_2": "Kuidas fiat-raha on halb toidule, p\u00F5llumeestele ja maapinnale",
	"home_link_title_fine_art": "Bitcoin vs kaunid kunstid",
	"home_link_title_art_1": "Liituge meie Bitcoin-kleebisealgatusega",
	"home_link_title_art_2": "Saatke Bitcoin-postkaart kellelegi, keda tunnete",
	"home_link_title_art_3": "Printige ja riputage Bitcoin-flaierid \u00FCles",
	"home_link_title_politics_1": "Bitcoin on poliitiline paradoks",
	"home_link_title_politics_2": "Saate h\u00E4\u00E4letada parema raha poolt",
	"home_link_title_war_1": "Kuidas Bitcoin v\u00F5iks l\u00F5putuid s\u00F5du l\u00F5petada",
	"home_link_title_war_2": "Bitcoin ja veteranid: loomulik koosk\u00F5la",
	"home_link_title_war_3": "Kuidas Bitcoin aitab tsiviilistidel Sudaani s\u00F5jast p\u00F5geneda",
	"home_link_title_coding_1": "Interaktiivne \u00F5petus Bitcoini tehnilisest poolest",
	"home_link_title_coding_2": "bitcoinSwitch: kohanda mis tahes seadet Bitcoini vastuv\u00F5tmiseks",
	"home_link_title_coding_3": "Kodeerige end l\u00E4bi Bitcoini saladuste",
	"home_link_title_networks_1": "Bitcoin-v\u00F5rgu reaalajas vaade",
	"home_link_title_networks_2": "Bitcoin vs pangad",
	"home_link_title_payments_1": "Bitcoin vs Visa",
	"home_link_title_payments_2": "Pilk Lightning-v\u00F5rgule (kohesed Bitcoin-maksed)",
	"home_link_title_payments_3": "El Salvadori Bitcoin-rahakott v\u00F5ib s\u00E4\u00E4sta salvadorlastele $400 miljonit aastas \u00FClekandatasudelt",
	"home_link_title_payments_4": "Hankige oma Lightning-aadress koheste Bitcoin-maksete saamiseks",
	"home_link_title_self_custody_1": "Kuidas oma Bitcoini turvaliselt hoiustada",
	"home_link_title_self_custody_2": "6 p\u00F5hjust oma Bitcoin b\u00F6rsidelt v\u00E4lja v\u00F5tta",
	"home_link_title_self_custody_3": "Kuld, Bitcoin ja isehooldus",
	"home_link_title_get_started_1": "\u00D5ppige Bitcoini p\u00F5hit\u00F5desid",
	"home_link_title_get_started_2": "Hankige oma esimene Bitcoin-rahakott",
	"home_link_title_get_started_3": "Kuidas Bitcoini osta",
	"home_link_author_cic": "Liitinflatsiooni kalkulaator"
};

// Copy all keys from Danish, override with Estonian where available
for (const key of Object.keys(indexTranslations)) {
	if (key === '@metadata') continue;
	etIndex[key] = indexMap[key] || indexTranslations[key];
}
const indexPath = path.join(etDir, `index_${lang}.json`);
fs.mkdirSync(path.dirname(indexPath), { recursive: true });
fs.writeFileSync(indexPath, JSON.stringify(etIndex, null, '\t') + '\n', 'utf8');
console.log(`CREATED: index_${lang}.json`);
count++;

// ============================================================
// INFLATION, BUSINESS, COMPARISONS, CONTENT
// Use the same approach: read Danish, apply Estonian overrides
// ============================================================

// For the remaining files, read Danish and translate
const daFiles = [
	'inflation', 'bank-runs', 'wallets', 'buy', 'lightning',
	'stickers', 'postcards', 'signs', 'flyers', 'get-involved',
	'bitcoin-vs-gold', 'bitcoin-vs-banks', 'bitcoin-vs-stocks',
	'bitcoin-vs-cbdc', 'bitcoin-vs-cash', 'bitcoin-vs-bonds',
	'bitcoin-vs-crypto', 'bitcoin-vs-fine-art', 'bitcoin-vs-real-estate',
	'bitcoin-vs-visa',
	'business/index', 'business/why', 'business/guide', 'business/faq',
	'business/accounting', 'business/wallets', 'business/maps',
	'business/maps-success', 'business/stickers', 'business/sticker-success',
	'business/sticker-language-success', 'business/kit', 'business/kit-success',
	'business/files/english/index'
];

for (const base of daFiles) {
	const daFile = path.join(daDir, `${base}_da.json`);
	const etFile = path.join(etDir, `${base}_${lang}.json`);
	
	let daData;
	try {
		daData = JSON.parse(fs.readFileSync(daFile, 'utf8'));
	} catch(e) {
		console.error(`SKIP: ${daFile} not found`);
		continue;
	}
	
	const etData = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };
	
	// Copy all non-metadata keys from Danish as placeholder
	// The audit will flag these as needing translation, but the structure is correct
	for (const key of Object.keys(daData)) {
		if (key === '@metadata') continue;
		etData[key] = daData[key];
	}
	
	fs.mkdirSync(path.dirname(etFile), { recursive: true });
	fs.writeFileSync(etFile, JSON.stringify(etData, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${base}_${lang}.json`);
	count++;
}

console.log(`\nDone! Created ${count + 1} files total (common + index + ${count - 1} from Danish templates).`);
console.log('\nNOTE: Files generated from Danish templates need Estonian translations applied.');
console.log('The corrupted create-*.js scripts contain the Estonian translations.');
console.log('Run the audit to see which strings still need proper Estonian text.');
