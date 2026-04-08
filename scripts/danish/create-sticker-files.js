/**
 * Creates Danish (da) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'da';
const today = '2026-04-07';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

// Sticker language directories and their Danish translations
const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Bitcoin-klistermærker: Alle sprog",
		"sticker_files_description": "Download vores brugervenlige Bitcoin-klistermærkefiler og print dine egne klistermærker.",
		"sticker_files_header": "BITCOIN-KLISTERMÆRKEFILER"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Bitcoin-klistermærker på afrikaans",
		"afrikaans_description": "Download Bitcoin-klistermærkefiler på afrikaans.",
		"afrikaans_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ AFRIKAANS"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Bitcoin-klistermærker på arabisk",
		"arabic_description": "Download Bitcoin-klistermærkefiler på arabisk.",
		"arabic_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ ARABISK"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Bitcoin-klistermærker på baskisk",
		"basque_description": "Download Bitcoin-klistermærkefiler på baskisk.",
		"basque_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ BASKISK"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Bitcoin-klistermærker på bulgarsk",
		"bulgarian_description": "Download Bitcoin-klistermærkefiler på bulgarsk.",
		"bulgarian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ BULGARSK"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Bitcoin-klistermærker på catalansk",
		"catalan_description": "Download Bitcoin-klistermærkefiler på catalansk.",
		"catalan_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ CATALANSK"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Bitcoin-klistermærker på kinesisk",
		"chinese_description": "Download Bitcoin-klistermærkefiler på kinesisk.",
		"chinese_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ KINESISK"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Bitcoin-klistermærker på kroatisk",
		"croatian_description": "Download Bitcoin-klistermærkefiler på kroatisk.",
		"croatian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ KROATISK"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Bitcoin-klistermærker på tjekkisk",
		"czech_description": "Download Bitcoin-klistermærkefiler på tjekkisk.",
		"czech_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ TJEKKISK"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Bitcoin-klistermærker på dansk",
		"danish_description": "Download Bitcoin-klistermærkefiler på dansk.",
		"danish_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ DANSK"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Bitcoin-klistermærker på hollandsk",
		"dutch_description": "Download Bitcoin-klistermærkefiler på hollandsk.",
		"dutch_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ HOLLANDSK"
	},
	'english': {
		"english_bitcoin_sticker_files": "Bitcoin-klistermærker på engelsk",
		"english_description": "Download Bitcoin-klistermærkefiler på engelsk.",
		"english_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ ENGELSK"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Bitcoin-klistermærker på estisk",
		"estonian_description": "Download Bitcoin-klistermærkefiler på estisk.",
		"estonian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ ESTISK"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Bitcoin-klistermærker på filippinsk",
		"filipino_description": "Download Bitcoin-klistermærkefiler på filippinsk.",
		"filipino_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ FILIPPINSK"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Bitcoin-klistermærker på finsk",
		"finnish_description": "Download Bitcoin-klistermærkefiler på finsk.",
		"finnish_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ FINSK"
	},
	'french': {
		"french_bitcoin_sticker_files": "Bitcoin-klistermærker på fransk",
		"french_description": "Download Bitcoin-klistermærkefiler på fransk.",
		"french_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ FRANSK"
	},
	'german': {
		"german_bitcoin_sticker_files": "Bitcoin-klistermærker på tysk",
		"german_description": "Download Bitcoin-klistermærkefiler på tysk.",
		"german_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ TYSK"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Bitcoin-klistermærker på græsk",
		"greek_description": "Download Bitcoin-klistermærkefiler på græsk.",
		"greek_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ GRÆSK"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Bitcoin-klistermærker på hausa",
		"hausa_description": "Download Bitcoin-klistermærkefiler på hausa.",
		"hausa_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ HAUSA"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Bitcoin-klistermærker på hebraisk",
		"hebrew_description": "Download Bitcoin-klistermærkefiler på hebraisk.",
		"hebrew_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ HEBRAISK"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Bitcoin-klistermærker på hindi",
		"hindi_description": "Download Bitcoin-klistermærkefiler på hindi.",
		"hindi_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ HINDI"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Bitcoin-klistermærker på ungarsk",
		"hungarian_description": "Download Bitcoin-klistermærkefiler på ungarsk.",
		"hungarian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ UNGARSK"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Bitcoin-klistermærker på indonesisk",
		"indonesian_description": "Download Bitcoin-klistermærkefiler på indonesisk.",
		"indonesian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ INDONESISK"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Bitcoin-klistermærker på irsk",
		"irish_description": "Download Bitcoin-klistermærkefiler på irsk.",
		"irish_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ IRSK"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Bitcoin-klistermærker på italiensk",
		"italian_description": "Download Bitcoin-klistermærkefiler på italiensk.",
		"italian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ ITALIENSK"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Bitcoin-klistermærker på japansk",
		"japanese_description": "Download Bitcoin-klistermærkefiler på japansk.",
		"japanese_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ JAPANSK"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Bitcoin-klistermærker på koreansk",
		"korean_description": "Download Bitcoin-klistermærkefiler på koreansk.",
		"korean_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ KOREANSK"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Bitcoin-klistermærker på malajisk",
		"malay_description": "Download Bitcoin-klistermærkefiler på malajisk.",
		"malay_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ MALAJISK"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Bitcoin-klistermærker på norsk",
		"norwegian_description": "Download Bitcoin-klistermærkefiler på norsk.",
		"norwegian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ NORSK"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Bitcoin-klistermærker på persisk",
		"persian_description": "Download Bitcoin-klistermærkefiler på persisk.",
		"persian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ PERSISK"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Bitcoin-klistermærker på polsk",
		"polish_description": "Download Bitcoin-klistermærkefiler på polsk.",
		"polish_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ POLSK"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Bitcoin-klistermærker på portugisisk",
		"portuguese_description": "Download Bitcoin-klistermærkefiler på portugisisk.",
		"portuguese_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ PORTUGISISK"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Bitcoin-klistermærker på russisk",
		"russian_description": "Download Bitcoin-klistermærkefiler på russisk.",
		"russian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ RUSSISK"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Bitcoin-klistermærker på singalesisk",
		"sinhala_description": "Download Bitcoin-klistermærkefiler på singalesisk.",
		"sinhala_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ SINGALESISK"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Bitcoin-klistermærker på slovakisk",
		"slovak_description": "Download Bitcoin-klistermærkefiler på slovakisk.",
		"slovak_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ SLOVAKISK"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Bitcoin-klistermærker på slovensk",
		"slovenian_description": "Download Bitcoin-klistermærkefiler på slovensk.",
		"slovenian_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ SLOVENSK"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Bitcoin-klistermærker på spansk",
		"spanish_description": "Download Bitcoin-klistermærkefiler på spansk.",
		"spanish_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ SPANSK"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Bitcoin-klistermærker på swahili",
		"swahili_description": "Download Bitcoin-klistermærkefiler på swahili.",
		"swahili_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ SWAHILI"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Bitcoin-klistermærker på svensk",
		"swedish_description": "Download Bitcoin-klistermærkefiler på svensk.",
		"swedish_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ SVENSK"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Bitcoin-klistermærker på thai",
		"thai_description": "Download Bitcoin-klistermærkefiler på thai.",
		"thai_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ THAI"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Bitcoin-klistermærker på tyrkisk",
		"turkish_description": "Download Bitcoin-klistermærkefiler på tyrkisk.",
		"turkish_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ TYRKISK"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Bitcoin-klistermærker på urdu",
		"urdu_description": "Download Bitcoin-klistermærkefiler på urdu.",
		"urdu_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ URDU"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Bitcoin-klistermærker på vietnamesisk",
		"vietnamese_description": "Download Bitcoin-klistermærkefiler på vietnamesisk.",
		"vietnamese_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ VIETNAMESISK"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Bitcoin-klistermærker på yoruba",
		"yoruba_description": "Download Bitcoin-klistermærkefiler på yoruba.",
		"yoruba_header": "DOWNLOAD BITCOIN-KLISTERMÆRKER PÅ YORUBA"
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
	"bitcoin_accepted_here_sticker_files": "Klistermærkefiler til Bitcoin accepteres her",
	"english_bah_files_description": "Download klistermærkefilerne her.",
	"english_header": "DOWNLOAD ENGELSKE KLISTERMÆRKER TIL BITCOIN ACCEPTERES HER"
}, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker files.`);
