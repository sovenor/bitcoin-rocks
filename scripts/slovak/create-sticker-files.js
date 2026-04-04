/**
 * Creates Slovak (sk) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sk';
const today = '2026-04-04';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

// Sticker language directories and their Slovak translations
const stickerLanguages = {
	'index': {
		[`bitcoin_sticker_files_all_languages`]: "Bitcoinové nálepky: Všetky jazyky",
		[`sticker_files_description`]: "Stiahnite si naše ľahko použiteľné súbory bitcoinových nálepiek a vytlačte si vlastné nálepky.",
		[`sticker_files_header`]: "SÚBORY BITCOINOVÝCH NÁLEPIEK"
	},
	'afrikaans': {
		[`afrikaans_bitcoin_sticker_files`]: "Bitcoinové nálepky v afrikánčine",
		[`afrikaans_description`]: "Stiahnite si súbory bitcoinových nálepiek v afrikánčine.",
		[`afrikaans_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V AFRIKÁNČINE"
	},
	'arabic': {
		[`arabic_bitcoin_sticker_files`]: "Bitcoinové nálepky v arabčine",
		[`arabic_description`]: "Stiahnite si súbory bitcoinových nálepiek v arabčine.",
		[`arabic_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V ARABČINE"
	},
	'basque': {
		[`basque_bitcoin_sticker_files`]: "Bitcoinové nálepky v baskičtine",
		[`basque_description`]: "Stiahnite si súbory bitcoinových nálepiek v baskičtine.",
		[`basque_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V BASKIČTINE"
	},
	'bulgarian': {
		[`bulgarian_bitcoin_sticker_files`]: "Bitcoinové nálepky v bulharčine",
		[`bulgarian_description`]: "Stiahnite si súbory bitcoinových nálepiek v bulharčine.",
		[`bulgarian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V BULHARČINE"
	},
	'catalan': {
		[`catalan_bitcoin_sticker_files`]: "Bitcoinové nálepky v katalánčine",
		[`catalan_description`]: "Stiahnite si súbory bitcoinových nálepiek v katalánčine.",
		[`catalan_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V KATALÁNČINE"
	},
	'chinese': {
		[`chinese_bitcoin_sticker_files`]: "Bitcoinové nálepky v čínštine",
		[`chinese_description`]: "Stiahnite si súbory bitcoinových nálepiek v čínštine.",
		[`chinese_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V ČÍNŠTINE"
	},
	'croatian': {
		[`croatian_bitcoin_sticker_files`]: "Bitcoinové nálepky v chorvátčine",
		[`croatian_description`]: "Stiahnite si súbory bitcoinových nálepiek v chorvátčine.",
		[`croatian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V CHORVÁTČINE"
	},
	'czech': {
		[`czech_bitcoin_sticker_files`]: "Bitcoinové nálepky v češtine",
		[`czech_description`]: "Stiahnite si súbory bitcoinových nálepiek v češtine.",
		[`czech_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V ČEŠTINE"
	},
	'danish': {
		[`danish_bitcoin_sticker_files`]: "Bitcoinové nálepky v dánčine",
		[`danish_description`]: "Stiahnite si súbory bitcoinových nálepiek v dánčine.",
		[`danish_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V DÁNČINE"
	},
	'dutch': {
		[`dutch_bitcoin_sticker_files`]: "Bitcoinové nálepky v holandčine",
		[`dutch_description`]: "Stiahnite si súbory bitcoinových nálepiek v holandčine.",
		[`dutch_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V HOLANDČINE"
	},
	'english': {
		[`english_bitcoin_sticker_files`]: "Bitcoinové nálepky v angličtine",
		[`english_description`]: "Stiahnite si súbory bitcoinových nálepiek v angličtine.",
		[`english_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V ANGLIČTINE",
		[`print_these`]: "VYTLAČIŤ JEDNÝM KLIKNUTÍM"
	},
	'estonian': {
		[`estonian_bitcoin_sticker_files`]: "Bitcoinové nálepky v estónčine",
		[`estonian_description`]: "Stiahnite si súbory bitcoinových nálepiek v estónčine.",
		[`estonian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V ESTÓNČINE"
	},
	'filipino': {
		[`filipino_bitcoin_sticker_files`]: "Bitcoinové nálepky vo filipínčine",
		[`filipino_description`]: "Stiahnite si súbory bitcoinových nálepiek vo filipínčine.",
		[`filipino_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY VO FILIPÍNČINE"
	},
	'finnish': {
		[`finnish_bitcoin_sticker_files`]: "Bitcoinové nálepky vo fínčine",
		[`finnish_description`]: "Stiahnite si súbory bitcoinových nálepiek vo fínčine.",
		[`finnish_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY VO FÍNČINE"
	},
	'french': {
		[`french_bitcoin_sticker_files`]: "Bitcoinové nálepky vo francúzštine",
		[`french_description`]: "Stiahnite si súbory bitcoinových nálepiek vo francúzštine.",
		[`french_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY VO FRANCÚZŠTINE"
	},
	'german': {
		[`german_bitcoin_sticker_files`]: "Bitcoinové nálepky v nemčine",
		[`german_description`]: "Stiahnite si súbory bitcoinových nálepiek v nemčine.",
		[`german_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V NEMČINE"
	},
	'greek': {
		[`greek_bitcoin_sticker_files`]: "Bitcoinové nálepky v gréčtine",
		[`greek_description`]: "Stiahnite si súbory bitcoinových nálepiek v gréčtine.",
		[`greek_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V GRÉČTINE"
	},
	'hausa': {
		[`hausa_bitcoin_sticker_files`]: "Bitcoinové nálepky v hauštine",
		[`hausa_description`]: "Stiahnite si súbory bitcoinových nálepiek v hauštine.",
		[`hausa_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V HAUŠTINE"
	},
	'hebrew': {
		[`hebrew_bitcoin_sticker_files`]: "Bitcoinové nálepky v hebrejčine",
		[`hebrew_description`]: "Stiahnite si súbory bitcoinových nálepiek v hebrejčine.",
		[`hebrew_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V HEBREJČINE"
	},
	'hindi': {
		[`hindi_bitcoin_sticker_files`]: "Bitcoinové nálepky v hindčine",
		[`hindi_description`]: "Stiahnite si súbory bitcoinových nálepiek v hindčine.",
		[`hindi_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V HINDČINE"
	},
	'hungarian': {
		[`hungarian_bitcoin_sticker_files`]: "Bitcoinové nálepky v maďarčine",
		[`hungarian_description`]: "Stiahnite si súbory bitcoinových nálepiek v maďarčine.",
		[`hungarian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V MAĎARČINE"
	},
	'indonesian': {
		[`indonesian_bitcoin_sticker_files`]: "Bitcoinové nálepky v indonézštine",
		[`indonesian_description`]: "Stiahnite si súbory bitcoinových nálepiek v indonézštine.",
		[`indonesian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V INDONÉZŠTINE"
	},
	'irish': {
		[`irish_bitcoin_sticker_files`]: "Bitcoinové nálepky v írčine",
		[`irish_description`]: "Stiahnite si súbory bitcoinových nálepiek v írčine.",
		[`irish_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V ÍRČINE"
	},
	'italian': {
		[`italian_bitcoin_sticker_files`]: "Bitcoinové nálepky v taliančine",
		[`italian_description`]: "Stiahnite si súbory bitcoinových nálepiek v taliančine.",
		[`italian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V TALIANČINE"
	},
	'japanese': {
		[`japanese_bitcoin_sticker_files`]: "Bitcoinové nálepky v japončine",
		[`japanese_description`]: "Stiahnite si súbory bitcoinových nálepiek v japončine.",
		[`japanese_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V JAPONČINE"
	},
	'korean': {
		[`korean_bitcoin_sticker_files`]: "Bitcoinové nálepky v kórejčine",
		[`korean_description`]: "Stiahnite si súbory bitcoinových nálepiek v kórejčine.",
		[`korean_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V KÓREJČINE"
	},
	'malay': {
		[`malay_bitcoin_sticker_files`]: "Bitcoinové nálepky v malajčine",
		[`malay_description`]: "Stiahnite si súbory bitcoinových nálepiek v malajčine.",
		[`malay_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V MALAJČINE"
	},
	'norwegian': {
		[`norwegian_bitcoin_sticker_files`]: "Bitcoinové nálepky v nórčine",
		[`norwegian_description`]: "Stiahnite si súbory bitcoinových nálepiek v nórčine.",
		[`norwegian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V NÓRČINE"
	},
	'persian': {
		[`persian_bitcoin_sticker_files`]: "Bitcoinové nálepky v perzštine",
		[`persian_description`]: "Stiahnite si súbory bitcoinových nálepiek v perzštine.",
		[`persian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V PERZŠTINE"
	},
	'polish': {
		[`polish_bitcoin_sticker_files`]: "Bitcoinové nálepky v poľštine",
		[`polish_description`]: "Stiahnite si súbory bitcoinových nálepiek v poľštine.",
		[`polish_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V POĽŠTINE"
	},
	'portuguese': {
		[`portuguese_bitcoin_sticker_files`]: "Bitcoinové nálepky v portugalčine",
		[`portuguese_description`]: "Stiahnite si súbory bitcoinových nálepiek v portugalčine.",
		[`portuguese_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V PORTUGALČINE"
	},
	'russian': {
		[`russian_bitcoin_sticker_files`]: "Bitcoinové nálepky v ruštine",
		[`russian_description`]: "Stiahnite si súbory bitcoinových nálepiek v ruštine.",
		[`russian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V RUŠTINE"
	},
	'sinhala': {
		[`sinhala_bitcoin_sticker_files`]: "Bitcoinové nálepky v sinhalčine",
		[`sinhala_description`]: "Stiahnite si súbory bitcoinových nálepiek v sinhalčine.",
		[`sinhala_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V SINHALČINE"
	},
	'slovak': {
		[`slovak_bitcoin_sticker_files`]: "Bitcoinové nálepky v slovenčine",
		[`slovak_description`]: "Stiahnite si súbory bitcoinových nálepiek v slovenčine.",
		[`slovak_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V SLOVENČINE"
	},
	'slovenian': {
		[`slovenian_bitcoin_sticker_files`]: "Bitcoinové nálepky v slovinčine",
		[`slovenian_description`]: "Stiahnite si súbory bitcoinových nálepiek v slovinčine.",
		[`slovenian_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V SLOVINČINE"
	},
	'spanish': {
		[`spanish_bitcoin_sticker_files`]: "Bitcoinové nálepky v španielčine",
		[`spanish_description`]: "Stiahnite si súbory bitcoinových nálepiek v španielčine.",
		[`spanish_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V ŠPANIELČINE"
	},
	'swahili': {
		[`swahili_bitcoin_sticker_files`]: "Bitcoinové nálepky v svahilčine",
		[`swahili_description`]: "Stiahnite si súbory bitcoinových nálepiek v svahilčine.",
		[`swahili_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V SVAHILČINE"
	},
	'swedish': {
		[`swedish_bitcoin_sticker_files`]: "Bitcoinové nálepky vo švédčine",
		[`swedish_description`]: "Stiahnite si súbory bitcoinových nálepiek vo švédčine.",
		[`swedish_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY VO ŠVÉDČINE"
	},
	'thai': {
		[`thai_bitcoin_sticker_files`]: "Bitcoinové nálepky v thajčine",
		[`thai_description`]: "Stiahnite si súbory bitcoinových nálepiek v thajčine.",
		[`thai_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V THAJČINE"
	},
	'turkish': {
		[`turkish_bitcoin_sticker_files`]: "Bitcoinové nálepky v turečtine",
		[`turkish_description`]: "Stiahnite si súbory bitcoinových nálepiek v turečtine.",
		[`turkish_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V TUREČTINE"
	},
	'urdu': {
		[`urdu_bitcoin_sticker_files`]: "Bitcoinové nálepky v urdčine",
		[`urdu_description`]: "Stiahnite si súbory bitcoinových nálepiek v urdčine.",
		[`urdu_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V URDČINE"
	},
	'vietnamese': {
		[`vietnamese_bitcoin_sticker_files`]: "Bitcoinové nálepky vo vietnamčine",
		[`vietnamese_description`]: "Stiahnite si súbory bitcoinových nálepiek vo vietnamčine.",
		[`vietnamese_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY VO VIETNAMČINE"
	},
	'yoruba': {
		[`yoruba_bitcoin_sticker_files`]: "Bitcoinové nálepky v jorubčine",
		[`yoruba_description`]: "Stiahnite si súbory bitcoinových nálepiek v jorubčine.",
		[`yoruba_header`]: "STIAHNUŤ BITCOINOVÉ NÁLEPKY V JORUBČINE"
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
	"english_bitcoin_accepted_here_sticker_files": "Anglické súbory nálepiek 'Bitcoin akceptovaný'",
	"english_biz_sticker_files_description": "Stiahnite si anglické súbory nálepiek pre tlač vlastných nálepiek Bitcoin akceptovaný.",
	"english_header": "STIAHNUŤ ANGLICKÉ SÚBORY NÁLEPIEK 'BITCOIN AKCEPTOVANÝ'"
};
const bizStickerPath = path.join(bizStickerDir, `index_${lang}.json`);
fs.writeFileSync(bizStickerPath, JSON.stringify(bizStickerData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker-files translations.`);
