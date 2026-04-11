/**
 * Creates Slovenian (sl) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sl';
const today = '2026-04-11';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

// Sticker language directories and their Slovenian translations
const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Bitcoinove nalepke: Vsi jeziki",
		"sticker_files_description": "Prenesite naše enostavne datoteke bitcoinovih nalepk in natisnite svoje nalepke.",
		"sticker_files_header": "DATOTEKE BITCOINOVIH NALEPK"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Bitcoinove nalepke v afrikanščini",
		"afrikaans_description": "Prenesite datoteke bitcoinovih nalepk v afrikanščini.",
		"afrikaans_header": "PRENESITE BITCOINOVE NALEPKE V AFRIKANŠČINI"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Bitcoinove nalepke v arabščini",
		"arabic_description": "Prenesite datoteke bitcoinovih nalepk v arabščini.",
		"arabic_header": "PRENESITE BITCOINOVE NALEPKE V ARABŠČINI"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Bitcoinove nalepke v baskovščini",
		"basque_description": "Prenesite datoteke bitcoinovih nalepk v baskovščini.",
		"basque_header": "PRENESITE BITCOINOVE NALEPKE V BASKOVŠČINI"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Bitcoinove nalepke v bolgarščini",
		"bulgarian_description": "Prenesite datoteke bitcoinovih nalepk v bolgarščini.",
		"bulgarian_header": "PRENESITE BITCOINOVE NALEPKE V BOLGARŠČINI"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Bitcoinove nalepke v katalonščini",
		"catalan_description": "Prenesite datoteke bitcoinovih nalepk v katalonščini.",
		"catalan_header": "PRENESITE BITCOINOVE NALEPKE V KATALONŠČINI"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Bitcoinove nalepke v kitajščini",
		"chinese_description": "Prenesite datoteke bitcoinovih nalepk v kitajščini.",
		"chinese_header": "PRENESITE BITCOINOVE NALEPKE V KITAJŠČINI"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Bitcoinove nalepke v hrvaščini",
		"croatian_description": "Prenesite datoteke bitcoinovih nalepk v hrvaščini.",
		"croatian_header": "PRENESITE BITCOINOVE NALEPKE V HRVAŠČINI"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Bitcoinove nalepke v češčini",
		"czech_description": "Prenesite datoteke bitcoinovih nalepk v češčini.",
		"czech_header": "PRENESITE BITCOINOVE NALEPKE V ČEŠČINI"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Bitcoinove nalepke v danščini",
		"danish_description": "Prenesite datoteke bitcoinovih nalepk v danščini.",
		"danish_header": "PRENESITE BITCOINOVE NALEPKE V DANŠČINI"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Bitcoinove nalepke v nizozemščini",
		"dutch_description": "Prenesite datoteke bitcoinovih nalepk v nizozemščini.",
		"dutch_header": "PRENESITE BITCOINOVE NALEPKE V NIZOZEMŠČINI"
	},
	'english': {
		"english_bitcoin_sticker_files": "Bitcoinove nalepke v angleščini",
		"english_description": "Prenesite datoteke bitcoinovih nalepk v angleščini.",
		"english_header": "PRENESITE BITCOINOVE NALEPKE V ANGLEŠČINI",
		"print_these": "NATISNITE Z ENIM KLIKOM"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Bitcoinove nalepke v estonščini",
		"estonian_description": "Prenesite datoteke bitcoinovih nalepk v estonščini.",
		"estonian_header": "PRENESITE BITCOINOVE NALEPKE V ESTONŠČINI"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Bitcoinove nalepke v filipinščini",
		"filipino_description": "Prenesite datoteke bitcoinovih nalepk v filipinščini.",
		"filipino_header": "PRENESITE BITCOINOVE NALEPKE V FILIPINŠČINI"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Bitcoinove nalepke v finščini",
		"finnish_description": "Prenesite datoteke bitcoinovih nalepk v finščini.",
		"finnish_header": "PRENESITE BITCOINOVE NALEPKE V FINŠČINI"
	},
	'french': {
		"french_bitcoin_sticker_files": "Bitcoinove nalepke v francoščini",
		"french_description": "Prenesite datoteke bitcoinovih nalepk v francoščini.",
		"french_header": "PRENESITE BITCOINOVE NALEPKE V FRANCOŠČINI"
	},
	'german': {
		"german_bitcoin_sticker_files": "Bitcoinove nalepke v nemščini",
		"german_description": "Prenesite datoteke bitcoinovih nalepk v nemščini.",
		"german_header": "PRENESITE BITCOINOVE NALEPKE V NEMŠČINI"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Bitcoinove nalepke v grščini",
		"greek_description": "Prenesite datoteke bitcoinovih nalepk v grščini.",
		"greek_header": "PRENESITE BITCOINOVE NALEPKE V GRŠČINI"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Bitcoinove nalepke v havščini",
		"hausa_description": "Prenesite datoteke bitcoinovih nalepk v havščini.",
		"hausa_header": "PRENESITE BITCOINOVE NALEPKE V HAVŠČINI"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Bitcoinove nalepke v hebrejščini",
		"hebrew_description": "Prenesite datoteke bitcoinovih nalepk v hebrejščini.",
		"hebrew_header": "PRENESITE BITCOINOVE NALEPKE V HEBREJŠČINI"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Bitcoinove nalepke v hindujščini",
		"hindi_description": "Prenesite datoteke bitcoinovih nalepk v hindujščini.",
		"hindi_header": "PRENESITE BITCOINOVE NALEPKE V HINDUJŠČINI"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Bitcoinove nalepke v madžarščini",
		"hungarian_description": "Prenesite datoteke bitcoinovih nalepk v madžarščini.",
		"hungarian_header": "PRENESITE BITCOINOVE NALEPKE V MADŽARŠČINI"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Bitcoinove nalepke v indonezijščini",
		"indonesian_description": "Prenesite datoteke bitcoinovih nalepk v indonezijščini.",
		"indonesian_header": "PRENESITE BITCOINOVE NALEPKE V INDONEZIJŠČINI"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Bitcoinove nalepke v irščini",
		"irish_description": "Prenesite datoteke bitcoinovih nalepk v irščini.",
		"irish_header": "PRENESITE BITCOINOVE NALEPKE V IRŠČINI"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Bitcoinove nalepke v italijanščini",
		"italian_description": "Prenesite datoteke bitcoinovih nalepk v italijanščini.",
		"italian_header": "PRENESITE BITCOINOVE NALEPKE V ITALIJANŠČINI"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Bitcoinove nalepke v japonščini",
		"japanese_description": "Prenesite datoteke bitcoinovih nalepk v japonščini.",
		"japanese_header": "PRENESITE BITCOINOVE NALEPKE V JAPONŠČINI"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Bitcoinove nalepke v korejščini",
		"korean_description": "Prenesite datoteke bitcoinovih nalepk v korejščini.",
		"korean_header": "PRENESITE BITCOINOVE NALEPKE V KOREJŠČINI"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Bitcoinove nalepke v malajščini",
		"malay_description": "Prenesite datoteke bitcoinovih nalepk v malajščini.",
		"malay_header": "PRENESITE BITCOINOVE NALEPKE V MALAJŠČINI"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Bitcoinove nalepke v norveščini",
		"norwegian_description": "Prenesite datoteke bitcoinovih nalepk v norveščini.",
		"norwegian_header": "PRENESITE BITCOINOVE NALEPKE V NORVEŠČINI"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Bitcoinove nalepke v perzijščini",
		"persian_description": "Prenesite datoteke bitcoinovih nalepk v perzijščini.",
		"persian_header": "PRENESITE BITCOINOVE NALEPKE V PERZIJŠČINI"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Bitcoinove nalepke v poljščini",
		"polish_description": "Prenesite datoteke bitcoinovih nalepk v poljščini.",
		"polish_header": "PRENESITE BITCOINOVE NALEPKE V POLJŠČINI"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Bitcoinove nalepke v portugalščini",
		"portuguese_description": "Prenesite datoteke bitcoinovih nalepk v portugalščini.",
		"portuguese_header": "PRENESITE BITCOINOVE NALEPKE V PORTUGALŠČINI"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Bitcoinove nalepke v ruščini",
		"russian_description": "Prenesite datoteke bitcoinovih nalepk v ruščini.",
		"russian_header": "PRENESITE BITCOINOVE NALEPKE V RUŠČINI"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Bitcoinove nalepke v sinhalščini",
		"sinhala_description": "Prenesite datoteke bitcoinovih nalepk v sinhalščini.",
		"sinhala_header": "PRENESITE BITCOINOVE NALEPKE V SINHALŠČINI"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Bitcoinove nalepke v slovaščini",
		"slovak_description": "Prenesite datoteke bitcoinovih nalepk v slovaščini.",
		"slovak_header": "PRENESITE BITCOINOVE NALEPKE V SLOVAŠČINI"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Bitcoinove nalepke v slovenščini",
		"slovenian_description": "Prenesite datoteke bitcoinovih nalepk v slovenščini.",
		"slovenian_header": "PRENESITE BITCOINOVE NALEPKE V SLOVENŠČINI"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Bitcoinove nalepke v španščini",
		"spanish_description": "Prenesite datoteke bitcoinovih nalepk v španščini.",
		"spanish_header": "PRENESITE BITCOINOVE NALEPKE V ŠPANŠČINI"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Bitcoinove nalepke v svahilščini",
		"swahili_description": "Prenesite datoteke bitcoinovih nalepk v svahilščini.",
		"swahili_header": "PRENESITE BITCOINOVE NALEPKE V SVAHILŠČINI"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Bitcoinove nalepke v švedščini",
		"swedish_description": "Prenesite datoteke bitcoinovih nalepk v švedščini.",
		"swedish_header": "PRENESITE BITCOINOVE NALEPKE V ŠVEDŠČINI"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Bitcoinove nalepke v tajščini",
		"thai_description": "Prenesite datoteke bitcoinovih nalepk v tajščini.",
		"thai_header": "PRENESITE BITCOINOVE NALEPKE V TAJŠČINI"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Bitcoinove nalepke v turščini",
		"turkish_description": "Prenesite datoteke bitcoinovih nalepk v turščini.",
		"turkish_header": "PRENESITE BITCOINOVE NALEPKE V TURŠČINI"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Bitcoinove nalepke v urdujščini",
		"urdu_description": "Prenesite datoteke bitcoinovih nalepk v urdujščini.",
		"urdu_header": "PRENESITE BITCOINOVE NALEPKE V URDUJŠČINI"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Bitcoinove nalepke v vietnamščini",
		"vietnamese_description": "Prenesite datoteke bitcoinovih nalepk v vietnamščini.",
		"vietnamese_header": "PRENESITE BITCOINOVE NALEPKE V VIETNAMŠČINI"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Bitcoinove nalepke v jorubščini",
		"yoruba_description": "Prenesite datoteke bitcoinovih nalepk v jorubščini.",
		"yoruba_header": "PRENESITE BITCOINOVE NALEPKE V JORUBŠČINI"
	}
};

let count = 0;

for (const [dir, translations] of Object.entries(stickerLanguages)) {
	const subDir = dir === 'index'
		? path.join(i18nDir, lang, 'sticker-files')
		: path.join(i18nDir, lang, 'sticker-files', dir);

	fs.mkdirSync(subDir, { recursive: true });

	const data = { ...meta, ...translations };
	const filePath = path.join(subDir, `index_${lang}.json`);
	fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
	count++;
}

// Also create business/sticker-files/english/
const bizStickerDir = path.join(i18nDir, lang, 'business', 'sticker-files', 'english');
fs.mkdirSync(bizStickerDir, { recursive: true });
const bizStickerData = {
	...meta,
	"english_bitcoin_accepted_here_sticker_files": "Angleške datoteke nalepk 'Bitcoin sprejet tukaj'",
	"english_biz_sticker_files_description": "Prenesite angleške datoteke nalepk za tiskanje lastnih nalepk Bitcoin sprejet tukaj.",
	"english_header": "PRENESITE ANGLEŠKE DATOTEKE NALEPK 'BITCOIN SPREJET TUKAJ'"
};
const bizStickerPath = path.join(bizStickerDir, `index_${lang}.json`);
fs.writeFileSync(bizStickerPath, JSON.stringify(bizStickerData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker-files translations.`);
