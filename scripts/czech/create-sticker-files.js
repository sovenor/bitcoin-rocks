/**
 * Creates Czech (cs) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'cs';
const today = '2026-04-02';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

// Sticker language directories and their Czech translations
const stickerLanguages = {
	'index': {
		[`bitcoin_sticker_files_all_languages`]: "Bitcoinové nálepky: Všechny jazyky",
		[`sticker_files_description`]: "Stáhněte si naše snadno použitelné soubory bitcoinových nálepek a vytiskněte si vlastní nálepky.",
		[`sticker_files_header`]: "SOUBORY BITCOINOVÝCH NÁLEPEK"
	},
	'afrikaans': {
		[`afrikaans_bitcoin_sticker_files`]: "Bitcoinové nálepky v afrikánštině",
		[`afrikaans_description`]: "Stáhněte si soubory bitcoinových nálepek v afrikánštině.",
		[`afrikaans_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V AFRIKÁNŠTINĚ"
	},
	'arabic': {
		[`arabic_bitcoin_sticker_files`]: "Bitcoinové nálepky v arabštině",
		[`arabic_description`]: "Stáhněte si soubory bitcoinových nálepek v arabštině.",
		[`arabic_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V ARABŠTINĚ"
	},
	'basque': {
		[`basque_bitcoin_sticker_files`]: "Bitcoinové nálepky v baskičtině",
		[`basque_description`]: "Stáhněte si soubory bitcoinových nálepek v baskičtině.",
		[`basque_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V BASKIČTINĚ"
	},
	'bulgarian': {
		[`bulgarian_bitcoin_sticker_files`]: "Bitcoinové nálepky v bulharštině",
		[`bulgarian_description`]: "Stáhněte si soubory bitcoinových nálepek v bulharštině.",
		[`bulgarian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V BULHARŠTINĚ"
	},
	'catalan': {
		[`catalan_bitcoin_sticker_files`]: "Bitcoinové nálepky v katalánštině",
		[`catalan_description`]: "Stáhněte si soubory bitcoinových nálepek v katalánštině.",
		[`catalan_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V KATALÁNŠTINĚ"
	},
	'chinese': {
		[`chinese_bitcoin_sticker_files`]: "Bitcoinové nálepky v čínštině",
		[`chinese_description`]: "Stáhněte si soubory bitcoinových nálepek v čínštině.",
		[`chinese_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V ČÍNŠTINĚ"
	},
	'croatian': {
		[`croatian_bitcoin_sticker_files`]: "Bitcoinové nálepky v chorvatštině",
		[`croatian_description`]: "Stáhněte si soubory bitcoinových nálepek v chorvatštině.",
		[`croatian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V CHORVATŠTINĚ"
	},
	'czech': {
		[`czech_bitcoin_sticker_files`]: "Bitcoinové nálepky v češtině",
		[`czech_description`]: "Stáhněte si soubory bitcoinových nálepek v češtině.",
		[`czech_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V ČEŠTINĚ"
	},
	'danish': {
		[`danish_bitcoin_sticker_files`]: "Bitcoinové nálepky v dánštině",
		[`danish_description`]: "Stáhněte si soubory bitcoinových nálepek v dánštině.",
		[`danish_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V DÁNŠTINĚ"
	},
	'dutch': {
		[`dutch_bitcoin_sticker_files`]: "Bitcoinové nálepky v holandštině",
		[`dutch_description`]: "Stáhněte si soubory bitcoinových nálepek v holandštině.",
		[`dutch_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V HOLANDŠTINĚ"
	},
	'english': {
		[`english_bitcoin_sticker_files`]: "Bitcoinové nálepky v angličtině",
		[`english_description`]: "Stáhněte si soubory bitcoinových nálepek v angličtině.",
		[`english_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V ANGLIČTINĚ",
		[`print_these`]: "VYTISKNOUT JEDNÍM KLIKNUTÍM"
	},
	'estonian': {
		[`estonian_bitcoin_sticker_files`]: "Bitcoinové nálepky v estonštině",
		[`estonian_description`]: "Stáhněte si soubory bitcoinových nálepek v estonštině.",
		[`estonian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V ESTONŠTINĚ"
	},
	'filipino': {
		[`filipino_bitcoin_sticker_files`]: "Bitcoinové nálepky ve filipínštině",
		[`filipino_description`]: "Stáhněte si soubory bitcoinových nálepek ve filipínštině.",
		[`filipino_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY VE FILIPÍNŠTINĚ"
	},
	'finnish': {
		[`finnish_bitcoin_sticker_files`]: "Bitcoinové nálepky ve finštině",
		[`finnish_description`]: "Stáhněte si soubory bitcoinových nálepek ve finštině.",
		[`finnish_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY VE FINŠTINĚ"
	},
	'french': {
		[`french_bitcoin_sticker_files`]: "Bitcoinové nálepky ve francouzštině",
		[`french_description`]: "Stáhněte si soubory bitcoinových nálepek ve francouzštině.",
		[`french_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY VE FRANCOUZŠTINĚ"
	},
	'german': {
		[`german_bitcoin_sticker_files`]: "Bitcoinové nálepky v němčině",
		[`german_description`]: "Stáhněte si soubory bitcoinových nálepek v němčině.",
		[`german_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V NĚMČINĚ"
	},
	'greek': {
		[`greek_bitcoin_sticker_files`]: "Bitcoinové nálepky v řečtině",
		[`greek_description`]: "Stáhněte si soubory bitcoinových nálepek v řečtině.",
		[`greek_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V ŘEČTINĚ"
	},
	'hausa': {
		[`hausa_bitcoin_sticker_files`]: "Bitcoinové nálepky v hauštině",
		[`hausa_description`]: "Stáhněte si soubory bitcoinových nálepek v hauštině.",
		[`hausa_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V HAUŠTINĚ"
	},
	'hebrew': {
		[`hebrew_bitcoin_sticker_files`]: "Bitcoinové nálepky v hebrejštině",
		[`hebrew_description`]: "Stáhněte si soubory bitcoinových nálepek v hebrejštině.",
		[`hebrew_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V HEBREJŠTINĚ"
	},
	'hindi': {
		[`hindi_bitcoin_sticker_files`]: "Bitcoinové nálepky v hindštině",
		[`hindi_description`]: "Stáhněte si soubory bitcoinových nálepek v hindštině.",
		[`hindi_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V HINDŠTINĚ"
	},
	'hungarian': {
		[`hungarian_bitcoin_sticker_files`]: "Bitcoinové nálepky v maďarštině",
		[`hungarian_description`]: "Stáhněte si soubory bitcoinových nálepek v maďarštině.",
		[`hungarian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V MAĎARŠTINĚ"
	},
	'indonesian': {
		[`indonesian_bitcoin_sticker_files`]: "Bitcoinové nálepky v indonéštině",
		[`indonesian_description`]: "Stáhněte si soubory bitcoinových nálepek v indonéštině.",
		[`indonesian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V INDONÉŠTINĚ"
	},
	'irish': {
		[`irish_bitcoin_sticker_files`]: "Bitcoinové nálepky v irštině",
		[`irish_description`]: "Stáhněte si soubory bitcoinových nálepek v irštině.",
		[`irish_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V IRŠTINĚ"
	},
	'italian': {
		[`italian_bitcoin_sticker_files`]: "Bitcoinové nálepky v italštině",
		[`italian_description`]: "Stáhněte si soubory bitcoinových nálepek v italštině.",
		[`italian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V ITALŠTINĚ"
	},
	'japanese': {
		[`japanese_bitcoin_sticker_files`]: "Bitcoinové nálepky v japonštině",
		[`japanese_description`]: "Stáhněte si soubory bitcoinových nálepek v japonštině.",
		[`japanese_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V JAPONŠTINĚ"
	},
	'korean': {
		[`korean_bitcoin_sticker_files`]: "Bitcoinové nálepky v korejštině",
		[`korean_description`]: "Stáhněte si soubory bitcoinových nálepek v korejštině.",
		[`korean_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V KOREJŠTINĚ"
	},
	'malay': {
		[`malay_bitcoin_sticker_files`]: "Bitcoinové nálepky v malajštině",
		[`malay_description`]: "Stáhněte si soubory bitcoinových nálepek v malajštině.",
		[`malay_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V MALAJŠTINĚ"
	},
	'norwegian': {
		[`norwegian_bitcoin_sticker_files`]: "Bitcoinové nálepky v norštině",
		[`norwegian_description`]: "Stáhněte si soubory bitcoinových nálepek v norštině.",
		[`norwegian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V NORŠTINĚ"
	},
	'persian': {
		[`persian_bitcoin_sticker_files`]: "Bitcoinové nálepky v perštině",
		[`persian_description`]: "Stáhněte si soubory bitcoinových nálepek v perštině.",
		[`persian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V PERŠTINĚ"
	},
	'polish': {
		[`polish_bitcoin_sticker_files`]: "Bitcoinové nálepky v polštině",
		[`polish_description`]: "Stáhněte si soubory bitcoinových nálepek v polštině.",
		[`polish_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V POLŠTINĚ"
	},
	'portuguese': {
		[`portuguese_bitcoin_sticker_files`]: "Bitcoinové nálepky v portugalštině",
		[`portuguese_description`]: "Stáhněte si soubory bitcoinových nálepek v portugalštině.",
		[`portuguese_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V PORTUGALŠTINĚ"
	},
	'russian': {
		[`russian_bitcoin_sticker_files`]: "Bitcoinové nálepky v ruštině",
		[`russian_description`]: "Stáhněte si soubory bitcoinových nálepek v ruštině.",
		[`russian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V RUŠTINĚ"
	},
	'sinhala': {
		[`sinhala_bitcoin_sticker_files`]: "Bitcoinové nálepky v sinhalštině",
		[`sinhala_description`]: "Stáhněte si soubory bitcoinových nálepek v sinhalštině.",
		[`sinhala_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V SINHALŠTINĚ"
	},
	'slovak': {
		[`slovak_bitcoin_sticker_files`]: "Bitcoinové nálepky ve slovenštině",
		[`slovak_description`]: "Stáhněte si soubory bitcoinových nálepek ve slovenštině.",
		[`slovak_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY VE SLOVENŠTINĚ"
	},
	'slovenian': {
		[`slovenian_bitcoin_sticker_files`]: "Bitcoinové nálepky ve slovinštině",
		[`slovenian_description`]: "Stáhněte si soubory bitcoinových nálepek ve slovinštině.",
		[`slovenian_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY VE SLOVINŠTINĚ"
	},
	'spanish': {
		[`spanish_bitcoin_sticker_files`]: "Bitcoinové nálepky ve španělštině",
		[`spanish_description`]: "Stáhněte si soubory bitcoinových nálepek ve španělštině.",
		[`spanish_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY VE ŠPANĚLŠTINĚ"
	},
	'swahili': {
		[`swahili_bitcoin_sticker_files`]: "Bitcoinové nálepky ve svahilštině",
		[`swahili_description`]: "Stáhněte si soubory bitcoinových nálepek ve svahilštině.",
		[`swahili_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY VE SVAHILŠTINĚ"
	},
	'swedish': {
		[`swedish_bitcoin_sticker_files`]: "Bitcoinové nálepky ve švédštině",
		[`swedish_description`]: "Stáhněte si soubory bitcoinových nálepek ve švédštině.",
		[`swedish_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY VE ŠVÉDŠTINĚ"
	},
	'thai': {
		[`thai_bitcoin_sticker_files`]: "Bitcoinové nálepky v thajštině",
		[`thai_description`]: "Stáhněte si soubory bitcoinových nálepek v thajštině.",
		[`thai_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V THAJŠTINĚ"
	},
	'turkish': {
		[`turkish_bitcoin_sticker_files`]: "Bitcoinové nálepky v turečtině",
		[`turkish_description`]: "Stáhněte si soubory bitcoinových nálepek v turečtině.",
		[`turkish_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V TUREČTINĚ"
	},
	'urdu': {
		[`urdu_bitcoin_sticker_files`]: "Bitcoinové nálepky v urdštině",
		[`urdu_description`]: "Stáhněte si soubory bitcoinových nálepek v urdštině.",
		[`urdu_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V URDŠTINĚ"
	},
	'vietnamese': {
		[`vietnamese_bitcoin_sticker_files`]: "Bitcoinové nálepky ve vietnamštině",
		[`vietnamese_description`]: "Stáhněte si soubory bitcoinových nálepek ve vietnamštině.",
		[`vietnamese_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY VE VIETNAMŠTINĚ"
	},
	'yoruba': {
		[`yoruba_bitcoin_sticker_files`]: "Bitcoinové nálepky v jorubštině",
		[`yoruba_description`]: "Stáhněte si soubory bitcoinových nálepek v jorubštině.",
		[`yoruba_header`]: "STÁHNOUT BITCOINOVÉ NÁLEPKY V JORUBŠTINĚ"
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
	"english_bitcoin_accepted_here_sticker_files": "Anglické soubory nálepek 'Bitcoin přijímán'",
	"english_biz_sticker_files_description": "Stáhněte si anglické soubory nálepek pro tisk vlastních nálepek Bitcoin přijímán.",
	"english_header": "STÁHNOUT ANGLICKÉ SOUBORY NÁLEPEK 'BITCOIN PŘIJÍMÁN'"
};
const bizStickerPath = path.join(bizStickerDir, `index_${lang}.json`);
fs.writeFileSync(bizStickerPath, JSON.stringify(bizStickerData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker-files translations.`);
