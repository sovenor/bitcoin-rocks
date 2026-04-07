/**
 * Creates Croatian (hr) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'hr';
const today = '2026-04-07';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Bitcoin naljepnice: Svi jezici",
		"sticker_files_description": "Preuzmite naše jednostavne datoteke Bitcoin naljepnica za ispis vlastitih naljepnica.",
		"sticker_files_header": "DATOTEKE BITCOIN NALJEPNICA"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Bitcoin naljepnice na afrikaans jeziku",
		"afrikaans_description": "Preuzmite datoteke Bitcoin naljepnica na afrikaans jeziku.",
		"afrikaans_header": "PREUZMITE BITCOIN NALJEPNICE NA AFRIKAANS JEZIKU"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Bitcoin naljepnice na arapskom jeziku",
		"arabic_description": "Preuzmite datoteke Bitcoin naljepnica na arapskom jeziku.",
		"arabic_header": "PREUZMITE BITCOIN NALJEPNICE NA ARAPSKOM JEZIKU"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Bitcoin naljepnice na baskijskom jeziku",
		"basque_description": "Preuzmite datoteke Bitcoin naljepnica na baskijskom jeziku.",
		"basque_header": "PREUZMITE BITCOIN NALJEPNICE NA BASKIJSKOM JEZIKU"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Bitcoin naljepnice na bugarskom jeziku",
		"bulgarian_description": "Preuzmite datoteke Bitcoin naljepnica na bugarskom jeziku.",
		"bulgarian_header": "PREUZMITE BITCOIN NALJEPNICE NA BUGARSKOM JEZIKU"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Bitcoin naljepnice na katalonskom jeziku",
		"catalan_description": "Preuzmite datoteke Bitcoin naljepnica na katalonskom jeziku.",
		"catalan_header": "PREUZMITE BITCOIN NALJEPNICE NA KATALONSKOM JEZIKU"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Bitcoin naljepnice na kineskom jeziku",
		"chinese_description": "Preuzmite datoteke Bitcoin naljepnica na kineskom jeziku.",
		"chinese_header": "PREUZMITE BITCOIN NALJEPNICE NA KINESKOM JEZIKU"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Bitcoin naljepnice na hrvatskom jeziku",
		"croatian_description": "Preuzmite datoteke Bitcoin naljepnica na hrvatskom jeziku.",
		"croatian_header": "PREUZMITE BITCOIN NALJEPNICE NA HRVATSKOM JEZIKU"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Bitcoin naljepnice na češkom jeziku",
		"czech_description": "Preuzmite datoteke Bitcoin naljepnica na češkom jeziku.",
		"czech_header": "PREUZMITE BITCOIN NALJEPNICE NA ČEŠKOM JEZIKU"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Bitcoin naljepnice na danskom jeziku",
		"danish_description": "Preuzmite datoteke Bitcoin naljepnica na danskom jeziku.",
		"danish_header": "PREUZMITE BITCOIN NALJEPNICE NA DANSKOM JEZIKU"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Bitcoin naljepnice na nizozemskom jeziku",
		"dutch_description": "Preuzmite datoteke Bitcoin naljepnica na nizozemskom jeziku.",
		"dutch_header": "PREUZMITE BITCOIN NALJEPNICE NA NIZOZEMSKOM JEZIKU"
	},
	'english': {
		"english_bitcoin_sticker_files": "Bitcoin naljepnice na engleskom jeziku",
		"english_description": "Preuzmite datoteke Bitcoin naljepnica na engleskom jeziku.",
		"english_header": "PREUZMITE BITCOIN NALJEPNICE NA ENGLESKOM JEZIKU",
		"print_these": "ISPIŠITE JEDNIM KLIKOM"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Bitcoin naljepnice na estonskom jeziku",
		"estonian_description": "Preuzmite datoteke Bitcoin naljepnica na estonskom jeziku.",
		"estonian_header": "PREUZMITE BITCOIN NALJEPNICE NA ESTONSKOM JEZIKU"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Bitcoin naljepnice na filipinskom jeziku",
		"filipino_description": "Preuzmite datoteke Bitcoin naljepnica na filipinskom jeziku.",
		"filipino_header": "PREUZMITE BITCOIN NALJEPNICE NA FILIPINSKOM JEZIKU"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Bitcoin naljepnice na finskom jeziku",
		"finnish_description": "Preuzmite datoteke Bitcoin naljepnica na finskom jeziku.",
		"finnish_header": "PREUZMITE BITCOIN NALJEPNICE NA FINSKOM JEZIKU"
	},
	'french': {
		"french_bitcoin_sticker_files": "Bitcoin naljepnice na francuskom jeziku",
		"french_description": "Preuzmite datoteke Bitcoin naljepnica na francuskom jeziku.",
		"french_header": "PREUZMITE BITCOIN NALJEPNICE NA FRANCUSKOM JEZIKU"
	},
	'german': {
		"german_bitcoin_sticker_files": "Bitcoin naljepnice na njemačkom jeziku",
		"german_description": "Preuzmite datoteke Bitcoin naljepnica na njemačkom jeziku.",
		"german_header": "PREUZMITE BITCOIN NALJEPNICE NA NJEMAČKOM JEZIKU"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Bitcoin naljepnice na grčkom jeziku",
		"greek_description": "Preuzmite datoteke Bitcoin naljepnica na grčkom jeziku.",
		"greek_header": "PREUZMITE BITCOIN NALJEPNICE NA GRČKOM JEZIKU"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Bitcoin naljepnice na hausa jeziku",
		"hausa_description": "Preuzmite datoteke Bitcoin naljepnica na hausa jeziku.",
		"hausa_header": "PREUZMITE BITCOIN NALJEPNICE NA HAUSA JEZIKU"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Bitcoin naljepnice na hebrejskom jeziku",
		"hebrew_description": "Preuzmite datoteke Bitcoin naljepnica na hebrejskom jeziku.",
		"hebrew_header": "PREUZMITE BITCOIN NALJEPNICE NA HEBREJSKOM JEZIKU"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Bitcoin naljepnice na hindi jeziku",
		"hindi_description": "Preuzmite datoteke Bitcoin naljepnica na hindi jeziku.",
		"hindi_header": "PREUZMITE BITCOIN NALJEPNICE NA HINDI JEZIKU"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Bitcoin naljepnice na mađarskom jeziku",
		"hungarian_description": "Preuzmite datoteke Bitcoin naljepnica na mađarskom jeziku.",
		"hungarian_header": "PREUZMITE BITCOIN NALJEPNICE NA MAĐARSKOM JEZIKU"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Bitcoin naljepnice na indonezijskom jeziku",
		"indonesian_description": "Preuzmite datoteke Bitcoin naljepnica na indonezijskom jeziku.",
		"indonesian_header": "PREUZMITE BITCOIN NALJEPNICE NA INDONEZIJSKOM JEZIKU"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Bitcoin naljepnice na irskom jeziku",
		"irish_description": "Preuzmite datoteke Bitcoin naljepnica na irskom jeziku.",
		"irish_header": "PREUZMITE BITCOIN NALJEPNICE NA IRSKOM JEZIKU"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Bitcoin naljepnice na talijanskom jeziku",
		"italian_description": "Preuzmite datoteke Bitcoin naljepnica na talijanskom jeziku.",
		"italian_header": "PREUZMITE BITCOIN NALJEPNICE NA TALIJANSKOM JEZIKU"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Bitcoin naljepnice na japanskom jeziku",
		"japanese_description": "Preuzmite datoteke Bitcoin naljepnica na japanskom jeziku.",
		"japanese_header": "PREUZMITE BITCOIN NALJEPNICE NA JAPANSKOM JEZIKU"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Bitcoin naljepnice na korejskom jeziku",
		"korean_description": "Preuzmite datoteke Bitcoin naljepnica na korejskom jeziku.",
		"korean_header": "PREUZMITE BITCOIN NALJEPNICE NA KOREJSKOM JEZIKU"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Bitcoin naljepnice na malajskom jeziku",
		"malay_description": "Preuzmite datoteke Bitcoin naljepnica na malajskom jeziku.",
		"malay_header": "PREUZMITE BITCOIN NALJEPNICE NA MALAJSKOM JEZIKU"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Bitcoin naljepnice na norveškom jeziku",
		"norwegian_description": "Preuzmite datoteke Bitcoin naljepnica na norveškom jeziku.",
		"norwegian_header": "PREUZMITE BITCOIN NALJEPNICE NA NORVEŠKOM JEZIKU"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Bitcoin naljepnice na perzijskom jeziku",
		"persian_description": "Preuzmite datoteke Bitcoin naljepnica na perzijskom jeziku.",
		"persian_header": "PREUZMITE BITCOIN NALJEPNICE NA PERZIJSKOM JEZIKU"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Bitcoin naljepnice na poljskom jeziku",
		"polish_description": "Preuzmite datoteke Bitcoin naljepnica na poljskom jeziku.",
		"polish_header": "PREUZMITE BITCOIN NALJEPNICE NA POLJSKOM JEZIKU"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Bitcoin naljepnice na portugalskom jeziku",
		"portuguese_description": "Preuzmite datoteke Bitcoin naljepnica na portugalskom jeziku.",
		"portuguese_header": "PREUZMITE BITCOIN NALJEPNICE NA PORTUGALSKOM JEZIKU"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Bitcoin naljepnice na ruskom jeziku",
		"russian_description": "Preuzmite datoteke Bitcoin naljepnica na ruskom jeziku.",
		"russian_header": "PREUZMITE BITCOIN NALJEPNICE NA RUSKOM JEZIKU"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Bitcoin naljepnice na sinhala jeziku",
		"sinhala_description": "Preuzmite datoteke Bitcoin naljepnica na sinhala jeziku.",
		"sinhala_header": "PREUZMITE BITCOIN NALJEPNICE NA SINHALA JEZIKU"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Bitcoin naljepnice na slovačkom jeziku",
		"slovak_description": "Preuzmite datoteke Bitcoin naljepnica na slovačkom jeziku.",
		"slovak_header": "PREUZMITE BITCOIN NALJEPNICE NA SLOVAČKOM JEZIKU"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Bitcoin naljepnice na slovenskom jeziku",
		"slovenian_description": "Preuzmite datoteke Bitcoin naljepnica na slovenskom jeziku.",
		"slovenian_header": "PREUZMITE BITCOIN NALJEPNICE NA SLOVENSKOM JEZIKU"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Bitcoin naljepnice na španjolskom jeziku",
		"spanish_description": "Preuzmite datoteke Bitcoin naljepnica na španjolskom jeziku.",
		"spanish_header": "PREUZMITE BITCOIN NALJEPNICE NA ŠPANJOLSKOM JEZIKU"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Bitcoin naljepnice na svahili jeziku",
		"swahili_description": "Preuzmite datoteke Bitcoin naljepnica na svahili jeziku.",
		"swahili_header": "PREUZMITE BITCOIN NALJEPNICE NA SVAHILI JEZIKU"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Bitcoin naljepnice na švedskom jeziku",
		"swedish_description": "Preuzmite datoteke Bitcoin naljepnica na švedskom jeziku.",
		"swedish_header": "PREUZMITE BITCOIN NALJEPNICE NA ŠVEDSKOM JEZIKU"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Bitcoin naljepnice na tajlandskom jeziku",
		"thai_description": "Preuzmite datoteke Bitcoin naljepnica na tajlandskom jeziku.",
		"thai_header": "PREUZMITE BITCOIN NALJEPNICE NA TAJLANDSKOM JEZIKU"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Bitcoin naljepnice na turskom jeziku",
		"turkish_description": "Preuzmite datoteke Bitcoin naljepnica na turskom jeziku.",
		"turkish_header": "PREUZMITE BITCOIN NALJEPNICE NA TURSKOM JEZIKU"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Bitcoin naljepnice na urdu jeziku",
		"urdu_description": "Preuzmite datoteke Bitcoin naljepnica na urdu jeziku.",
		"urdu_header": "PREUZMITE BITCOIN NALJEPNICE NA URDU JEZIKU"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Bitcoin naljepnice na vijetnamskom jeziku",
		"vietnamese_description": "Preuzmite datoteke Bitcoin naljepnica na vijetnamskom jeziku.",
		"vietnamese_header": "PREUZMITE BITCOIN NALJEPNICE NA VIJETNAMSKOM JEZIKU"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Bitcoin naljepnice na joruba jeziku",
		"yoruba_description": "Preuzmite datoteke Bitcoin naljepnica na joruba jeziku.",
		"yoruba_header": "PREUZMITE BITCOIN NALJEPNICE NA JORUBA JEZIKU"
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
	"english_bitcoin_accepted_here_sticker_files": "Engleske datoteke naljepnica 'Bitcoin prihvaćen ovdje'",
	"english_biz_sticker_files_description": "Preuzmite engleske datoteke naljepnica za ispis vlastitih naljepnica 'Bitcoin prihvaćen ovdje'.",
	"english_header": "PREUZMITE ENGLESKE DATOTEKE NALJEPNICA 'BITCOIN PRIHVAĆEN OVDJE'"
};
const bizStickerPath = path.join(bizStickerDir, `index_${lang}.json`);
fs.writeFileSync(bizStickerPath, JSON.stringify(bizStickerData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker-files translations.`);
