/**
 * Creates Norwegian Bokmål (nb) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'nb';
const today = '2026-04-04';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

// Sticker language directories and their Norwegian translations
const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Bitcoin-klistremerker: Alle språk",
		"sticker_files_description": "Last ned våre brukervennlige Bitcoin-klistremerkefiler og skriv ut dine egne klistremerker.",
		"sticker_files_header": "BITCOIN-KLISTREMERKEFILER"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Bitcoin-klistremerker på afrikaans",
		"afrikaans_description": "Last ned Bitcoin-klistremerkefiler på afrikaans.",
		"afrikaans_header": "LAST NED BITCOIN-KLISTREMERKER PÅ AFRIKAANS"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Bitcoin-klistremerker på arabisk",
		"arabic_description": "Last ned Bitcoin-klistremerkefiler på arabisk.",
		"arabic_header": "LAST NED BITCOIN-KLISTREMERKER PÅ ARABISK"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Bitcoin-klistremerker på baskisk",
		"basque_description": "Last ned Bitcoin-klistremerkefiler på baskisk.",
		"basque_header": "LAST NED BITCOIN-KLISTREMERKER PÅ BASKISK"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Bitcoin-klistremerker på bulgarsk",
		"bulgarian_description": "Last ned Bitcoin-klistremerkefiler på bulgarsk.",
		"bulgarian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ BULGARSK"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Bitcoin-klistremerker på katalansk",
		"catalan_description": "Last ned Bitcoin-klistremerkefiler på katalansk.",
		"catalan_header": "LAST NED BITCOIN-KLISTREMERKER PÅ KATALANSK"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Bitcoin-klistremerker på kinesisk",
		"chinese_description": "Last ned Bitcoin-klistremerkefiler på kinesisk.",
		"chinese_header": "LAST NED BITCOIN-KLISTREMERKER PÅ KINESISK"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Bitcoin-klistremerker på kroatisk",
		"croatian_description": "Last ned Bitcoin-klistremerkefiler på kroatisk.",
		"croatian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ KROATISK"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Bitcoin-klistremerker på tsjekkisk",
		"czech_description": "Last ned Bitcoin-klistremerkefiler på tsjekkisk.",
		"czech_header": "LAST NED BITCOIN-KLISTREMERKER PÅ TSJEKKISK"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Bitcoin-klistremerker på dansk",
		"danish_description": "Last ned Bitcoin-klistremerkefiler på dansk.",
		"danish_header": "LAST NED BITCOIN-KLISTREMERKER PÅ DANSK"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Bitcoin-klistremerker på nederlandsk",
		"dutch_description": "Last ned Bitcoin-klistremerkefiler på nederlandsk.",
		"dutch_header": "LAST NED BITCOIN-KLISTREMERKER PÅ NEDERLANDSK"
	},
	'english': {
		"english_bitcoin_sticker_files": "Bitcoin-klistremerker på engelsk",
		"english_description": "Last ned Bitcoin-klistremerkefiler på engelsk.",
		"english_header": "LAST NED BITCOIN-KLISTREMERKER PÅ ENGELSK"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Bitcoin-klistremerker på estisk",
		"estonian_description": "Last ned Bitcoin-klistremerkefiler på estisk.",
		"estonian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ ESTISK"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Bitcoin-klistremerker på filippinsk",
		"filipino_description": "Last ned Bitcoin-klistremerkefiler på filippinsk.",
		"filipino_header": "LAST NED BITCOIN-KLISTREMERKER PÅ FILIPPINSK"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Bitcoin-klistremerker på finsk",
		"finnish_description": "Last ned Bitcoin-klistremerkefiler på finsk.",
		"finnish_header": "LAST NED BITCOIN-KLISTREMERKER PÅ FINSK"
	},
	'french': {
		"french_bitcoin_sticker_files": "Bitcoin-klistremerker på fransk",
		"french_description": "Last ned Bitcoin-klistremerkefiler på fransk.",
		"french_header": "LAST NED BITCOIN-KLISTREMERKER PÅ FRANSK"
	},
	'german': {
		"german_bitcoin_sticker_files": "Bitcoin-klistremerker på tysk",
		"german_description": "Last ned Bitcoin-klistremerkefiler på tysk.",
		"german_header": "LAST NED BITCOIN-KLISTREMERKER PÅ TYSK"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Bitcoin-klistremerker på gresk",
		"greek_description": "Last ned Bitcoin-klistremerkefiler på gresk.",
		"greek_header": "LAST NED BITCOIN-KLISTREMERKER PÅ GRESK"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Bitcoin-klistremerker på hausa",
		"hausa_description": "Last ned Bitcoin-klistremerkefiler på hausa.",
		"hausa_header": "LAST NED BITCOIN-KLISTREMERKER PÅ HAUSA"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Bitcoin-klistremerker på hebraisk",
		"hebrew_description": "Last ned Bitcoin-klistremerkefiler på hebraisk.",
		"hebrew_header": "LAST NED BITCOIN-KLISTREMERKER PÅ HEBRAISK"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Bitcoin-klistremerker på hindi",
		"hindi_description": "Last ned Bitcoin-klistremerkefiler på hindi.",
		"hindi_header": "LAST NED BITCOIN-KLISTREMERKER PÅ HINDI"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Bitcoin-klistremerker på ungarsk",
		"hungarian_description": "Last ned Bitcoin-klistremerkefiler på ungarsk.",
		"hungarian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ UNGARSK"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Bitcoin-klistremerker på indonesisk",
		"indonesian_description": "Last ned Bitcoin-klistremerkefiler på indonesisk.",
		"indonesian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ INDONESISK"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Bitcoin-klistremerker på irsk",
		"irish_description": "Last ned Bitcoin-klistremerkefiler på irsk.",
		"irish_header": "LAST NED BITCOIN-KLISTREMERKER PÅ IRSK"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Bitcoin-klistremerker på italiensk",
		"italian_description": "Last ned Bitcoin-klistremerkefiler på italiensk.",
		"italian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ ITALIENSK"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Bitcoin-klistremerker på japansk",
		"japanese_description": "Last ned Bitcoin-klistremerkefiler på japansk.",
		"japanese_header": "LAST NED BITCOIN-KLISTREMERKER PÅ JAPANSK"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Bitcoin-klistremerker på koreansk",
		"korean_description": "Last ned Bitcoin-klistremerkefiler på koreansk.",
		"korean_header": "LAST NED BITCOIN-KLISTREMERKER PÅ KOREANSK"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Bitcoin-klistremerker på malayisk",
		"malay_description": "Last ned Bitcoin-klistremerkefiler på malayisk.",
		"malay_header": "LAST NED BITCOIN-KLISTREMERKER PÅ MALAYISK"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Bitcoin-klistremerker på norsk",
		"norwegian_description": "Last ned Bitcoin-klistremerkefiler på norsk.",
		"norwegian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ NORSK"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Bitcoin-klistremerker på persisk",
		"persian_description": "Last ned Bitcoin-klistremerkefiler på persisk.",
		"persian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ PERSISK"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Bitcoin-klistremerker på polsk",
		"polish_description": "Last ned Bitcoin-klistremerkefiler på polsk.",
		"polish_header": "LAST NED BITCOIN-KLISTREMERKER PÅ POLSK"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Bitcoin-klistremerker på portugisisk",
		"portuguese_description": "Last ned Bitcoin-klistremerkefiler på portugisisk.",
		"portuguese_header": "LAST NED BITCOIN-KLISTREMERKER PÅ PORTUGISISK"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Bitcoin-klistremerker på russisk",
		"russian_description": "Last ned Bitcoin-klistremerkefiler på russisk.",
		"russian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ RUSSISK"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Bitcoin-klistremerker på singalesisk",
		"sinhala_description": "Last ned Bitcoin-klistremerkefiler på singalesisk.",
		"sinhala_header": "LAST NED BITCOIN-KLISTREMERKER PÅ SINGALESISK"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Bitcoin-klistremerker på slovakisk",
		"slovak_description": "Last ned Bitcoin-klistremerkefiler på slovakisk.",
		"slovak_header": "LAST NED BITCOIN-KLISTREMERKER PÅ SLOVAKISK"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Bitcoin-klistremerker på slovensk",
		"slovenian_description": "Last ned Bitcoin-klistremerkefiler på slovensk.",
		"slovenian_header": "LAST NED BITCOIN-KLISTREMERKER PÅ SLOVENSK"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Bitcoin-klistremerker på spansk",
		"spanish_description": "Last ned Bitcoin-klistremerkefiler på spansk.",
		"spanish_header": "LAST NED BITCOIN-KLISTREMERKER PÅ SPANSK"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Bitcoin-klistremerker på swahili",
		"swahili_description": "Last ned Bitcoin-klistremerkefiler på swahili.",
		"swahili_header": "LAST NED BITCOIN-KLISTREMERKER PÅ SWAHILI"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Bitcoin-klistremerker på svensk",
		"swedish_description": "Last ned Bitcoin-klistremerkefiler på svensk.",
		"swedish_header": "LAST NED BITCOIN-KLISTREMERKER PÅ SVENSK"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Bitcoin-klistremerker på thai",
		"thai_description": "Last ned Bitcoin-klistremerkefiler på thai.",
		"thai_header": "LAST NED BITCOIN-KLISTREMERKER PÅ THAI"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Bitcoin-klistremerker på tyrkisk",
		"turkish_description": "Last ned Bitcoin-klistremerkefiler på tyrkisk.",
		"turkish_header": "LAST NED BITCOIN-KLISTREMERKER PÅ TYRKISK"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Bitcoin-klistremerker på urdu",
		"urdu_description": "Last ned Bitcoin-klistremerkefiler på urdu.",
		"urdu_header": "LAST NED BITCOIN-KLISTREMERKER PÅ URDU"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Bitcoin-klistremerker på vietnamesisk",
		"vietnamese_description": "Last ned Bitcoin-klistremerkefiler på vietnamesisk.",
		"vietnamese_header": "LAST NED BITCOIN-KLISTREMERKER PÅ VIETNAMESISK"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Bitcoin-klistremerker på yoruba",
		"yoruba_description": "Last ned Bitcoin-klistremerkefiler på yoruba.",
		"yoruba_header": "LAST NED BITCOIN-KLISTREMERKER PÅ YORUBA"
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
	"bitcoin_accepted_here_sticker_files": "Klistremerkefiler for Bitcoin aksepteres her",
	"english_bah_files_description": "Last ned klistremerkefilene her.",
	"english_header": "LAST NED ENGELSKE KLISTREMERKER FOR BITCOIN AKSEPTERES HER"
}, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker files.`);
