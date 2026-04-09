/**
 * Creates Finnish (fi) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'fi';
const today = '2026-04-08';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Bitcoin-tarrat: Kaikki kielet",
		"sticker_files_description": "Lataa helppok\u00e4ytt\u00f6iset Bitcoin-tarratiedostomme ja tulosta omat tarrasi.",
		"sticker_files_header": "BITCOIN-TARRATIEDOSTOT"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Bitcoin-tarrat afrikaansiksi",
		"afrikaans_description": "Lataa Bitcoin-tarratiedostot afrikaansiksi.",
		"afrikaans_header": "LATAA BITCOIN-TARRAT AFRIKAANSIKSI"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Bitcoin-tarrat arabiaksi",
		"arabic_description": "Lataa Bitcoin-tarratiedostot arabiaksi.",
		"arabic_header": "LATAA BITCOIN-TARRAT ARABIAKSI"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Bitcoin-tarrat baskiksi",
		"basque_description": "Lataa Bitcoin-tarratiedostot baskiksi.",
		"basque_header": "LATAA BITCOIN-TARRAT BASKIKSI"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Bitcoin-tarrat bulgariaksi",
		"bulgarian_description": "Lataa Bitcoin-tarratiedostot bulgariaksi.",
		"bulgarian_header": "LATAA BITCOIN-TARRAT BULGARIAKSI"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Bitcoin-tarrat katalaniksi",
		"catalan_description": "Lataa Bitcoin-tarratiedostot katalaniksi.",
		"catalan_header": "LATAA BITCOIN-TARRAT KATALANIKSI"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Bitcoin-tarrat kiinaksi",
		"chinese_description": "Lataa Bitcoin-tarratiedostot kiinaksi.",
		"chinese_header": "LATAA BITCOIN-TARRAT KIINAKSI"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Bitcoin-tarrat kroatiaksi",
		"croatian_description": "Lataa Bitcoin-tarratiedostot kroatiaksi.",
		"croatian_header": "LATAA BITCOIN-TARRAT KROATIAKSI"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Bitcoin-tarrat tshekiksi",
		"czech_description": "Lataa Bitcoin-tarratiedostot tshekiksi.",
		"czech_header": "LATAA BITCOIN-TARRAT TSHEKIKSI"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Bitcoin-tarrat tanskaksi",
		"danish_description": "Lataa Bitcoin-tarratiedostot tanskaksi.",
		"danish_header": "LATAA BITCOIN-TARRAT TANSKAKSI"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Bitcoin-tarrat hollanniksi",
		"dutch_description": "Lataa Bitcoin-tarratiedostot hollanniksi.",
		"dutch_header": "LATAA BITCOIN-TARRAT HOLLANNIKSI"
	},
	'english': {
		"english_bitcoin_sticker_files": "Bitcoin-tarrat englanniksi",
		"english_description": "Lataa Bitcoin-tarratiedostot englanniksi.",
		"english_header": "LATAA BITCOIN-TARRAT ENGLANNIKSI"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Bitcoin-tarrat viroksi",
		"estonian_description": "Lataa Bitcoin-tarratiedostot viroksi.",
		"estonian_header": "LATAA BITCOIN-TARRAT VIROKSI"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Bitcoin-tarrat filipinoksi",
		"filipino_description": "Lataa Bitcoin-tarratiedostot filipinoksi.",
		"filipino_header": "LATAA BITCOIN-TARRAT FILIPINOKSI"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Bitcoin-tarrat suomeksi",
		"finnish_description": "Lataa Bitcoin-tarratiedostot suomeksi.",
		"finnish_header": "LATAA BITCOIN-TARRAT SUOMEKSI"
	},
	'french': {
		"french_bitcoin_sticker_files": "Bitcoin-tarrat ranskaksi",
		"french_description": "Lataa Bitcoin-tarratiedostot ranskaksi.",
		"french_header": "LATAA BITCOIN-TARRAT RANSKAKSI"
	},
	'german': {
		"german_bitcoin_sticker_files": "Bitcoin-tarrat saksaksi",
		"german_description": "Lataa Bitcoin-tarratiedostot saksaksi.",
		"german_header": "LATAA BITCOIN-TARRAT SAKSAKSI"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Bitcoin-tarrat kreikaksi",
		"greek_description": "Lataa Bitcoin-tarratiedostot kreikaksi.",
		"greek_header": "LATAA BITCOIN-TARRAT KREIKAKSI"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Bitcoin-tarrat hausaksi",
		"hausa_description": "Lataa Bitcoin-tarratiedostot hausaksi.",
		"hausa_header": "LATAA BITCOIN-TARRAT HAUSAKSI"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Bitcoin-tarrat hepreaksi",
		"hebrew_description": "Lataa Bitcoin-tarratiedostot hepreaksi.",
		"hebrew_header": "LATAA BITCOIN-TARRAT HEPREAKSI"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Bitcoin-tarrat hindiksi",
		"hindi_description": "Lataa Bitcoin-tarratiedostot hindiksi.",
		"hindi_header": "LATAA BITCOIN-TARRAT HINDIKSI"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Bitcoin-tarrat unkariksi",
		"hungarian_description": "Lataa Bitcoin-tarratiedostot unkariksi.",
		"hungarian_header": "LATAA BITCOIN-TARRAT UNKARIKSI"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Bitcoin-tarrat indonesiaksi",
		"indonesian_description": "Lataa Bitcoin-tarratiedostot indonesiaksi.",
		"indonesian_header": "LATAA BITCOIN-TARRAT INDONESIAKSI"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Bitcoin-tarrat iiriksi",
		"irish_description": "Lataa Bitcoin-tarratiedostot iiriksi.",
		"irish_header": "LATAA BITCOIN-TARRAT IIRIKSI"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Bitcoin-tarrat italiaksi",
		"italian_description": "Lataa Bitcoin-tarratiedostot italiaksi.",
		"italian_header": "LATAA BITCOIN-TARRAT ITALIAKSI"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Bitcoin-tarrat japaniksi",
		"japanese_description": "Lataa Bitcoin-tarratiedostot japaniksi.",
		"japanese_header": "LATAA BITCOIN-TARRAT JAPANIKSI"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Bitcoin-tarrat koreaksi",
		"korean_description": "Lataa Bitcoin-tarratiedostot koreaksi.",
		"korean_header": "LATAA BITCOIN-TARRAT KOREAKSI"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Bitcoin-tarrat malaijaksi",
		"malay_description": "Lataa Bitcoin-tarratiedostot malaijaksi.",
		"malay_header": "LATAA BITCOIN-TARRAT MALAIJAKSI"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Bitcoin-tarrat norjaksi",
		"norwegian_description": "Lataa Bitcoin-tarratiedostot norjaksi.",
		"norwegian_header": "LATAA BITCOIN-TARRAT NORJAKSI"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Bitcoin-tarrat persiaksi",
		"persian_description": "Lataa Bitcoin-tarratiedostot persiaksi.",
		"persian_header": "LATAA BITCOIN-TARRAT PERSIAKSI"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Bitcoin-tarrat puolaksi",
		"polish_description": "Lataa Bitcoin-tarratiedostot puolaksi.",
		"polish_header": "LATAA BITCOIN-TARRAT PUOLAKSI"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Bitcoin-tarrat portugaliksi",
		"portuguese_description": "Lataa Bitcoin-tarratiedostot portugaliksi.",
		"portuguese_header": "LATAA BITCOIN-TARRAT PORTUGALIKSI"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Bitcoin-tarrat ven\u00e4j\u00e4ksi",
		"russian_description": "Lataa Bitcoin-tarratiedostot ven\u00e4j\u00e4ksi.",
		"russian_header": "LATAA BITCOIN-TARRAT VEN\u00c4J\u00c4KSI"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Bitcoin-tarrat singaleesin kielell\u00e4",
		"sinhala_description": "Lataa Bitcoin-tarratiedostot singaleesin kielell\u00e4.",
		"sinhala_header": "LATAA BITCOIN-TARRAT SINGALEESIN KIELELL\u00c4"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Bitcoin-tarrat slovakiksi",
		"slovak_description": "Lataa Bitcoin-tarratiedostot slovakiksi.",
		"slovak_header": "LATAA BITCOIN-TARRAT SLOVAKIKSI"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Bitcoin-tarrat sloveenin kielell\u00e4",
		"slovenian_description": "Lataa Bitcoin-tarratiedostot sloveenin kielell\u00e4.",
		"slovenian_header": "LATAA BITCOIN-TARRAT SLOVEENIN KIELELL\u00c4"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Bitcoin-tarrat espanjaksi",
		"spanish_description": "Lataa Bitcoin-tarratiedostot espanjaksi.",
		"spanish_header": "LATAA BITCOIN-TARRAT ESPANJAKSI"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Bitcoin-tarrat swahiliksi",
		"swahili_description": "Lataa Bitcoin-tarratiedostot swahiliksi.",
		"swahili_header": "LATAA BITCOIN-TARRAT SWAHILIKSI"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Bitcoin-tarrat ruotsiksi",
		"swedish_description": "Lataa Bitcoin-tarratiedostot ruotsiksi.",
		"swedish_header": "LATAA BITCOIN-TARRAT RUOTSIKSI"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Bitcoin-tarrat thaiksi",
		"thai_description": "Lataa Bitcoin-tarratiedostot thaiksi.",
		"thai_header": "LATAA BITCOIN-TARRAT THAIKSI"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Bitcoin-tarrat turkiksi",
		"turkish_description": "Lataa Bitcoin-tarratiedostot turkiksi.",
		"turkish_header": "LATAA BITCOIN-TARRAT TURKIKSI"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Bitcoin-tarrat urduksi",
		"urdu_description": "Lataa Bitcoin-tarratiedostot urduksi.",
		"urdu_header": "LATAA BITCOIN-TARRAT URDUKSI"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Bitcoin-tarrat vietnamiksi",
		"vietnamese_description": "Lataa Bitcoin-tarratiedostot vietnamiksi.",
		"vietnamese_header": "LATAA BITCOIN-TARRAT VIETNAMIKSI"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Bitcoin-tarrat jorubaksi",
		"yoruba_description": "Lataa Bitcoin-tarratiedostot jorubaksi.",
		"yoruba_header": "LATAA BITCOIN-TARRAT JORUBAKSI"
	}
};

let count = 0;

for (const [dir, translations] of Object.entries(stickerLanguages)) {
	const relPath = dir === 'index'
		? `sticker-files/index_${lang}.json`
		: `sticker-files/${dir}/index_${lang}.json`;

	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...translations }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
	count++;
}

// business/sticker-files/english/
const bizStickerPath = path.join(i18nDir, lang, `business/sticker-files/english/index_${lang}.json`);
fs.mkdirSync(path.dirname(bizStickerPath), { recursive: true });
fs.writeFileSync(bizStickerPath, JSON.stringify({
	...meta,
	"bitcoin_accepted_here_sticker_files": "Bitcoin hyv\u00e4ksyt\u00e4\u00e4n t\u00e4\u00e4ll\u00e4 -tarratiedostot",
	"english_bah_files_description": "Lataa tarratiedostot t\u00e4\u00e4lt\u00e4.",
	"english_header": "LATAA ENGLANNINKIELISET BITCOIN HYV\u00c4KSYT\u00c4\u00c4N T\u00c4\u00c4LL\u00c4 -TARRAT"
}, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker files.`);
