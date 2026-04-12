/**
 * Creates Uzbek (uz) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'uz';
const today = '2026-04-11';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Bitcoin stiker fayllari: Barcha tillar",
		"sticker_files_description": "O\u02BBzingizning stikerlaringizni bosib chiqarish uchun qulay Bitcoin stiker fayllarimizni yuklab oling.",
		"sticker_files_header": "BITCOIN STIKER FAYLLARI"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Afrikaanscha Bitcoin stikerlari",
		"afrikaans_description": "Afrikaanscha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"afrikaans_header": "AFRIKAANSCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Arabcha Bitcoin stikerlari",
		"arabic_description": "Arabcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"arabic_header": "ARABCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Baskcha Bitcoin stikerlari",
		"basque_description": "Baskcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"basque_header": "BASKCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Bolgarcha Bitcoin stikerlari",
		"bulgarian_description": "Bolgarcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"bulgarian_header": "BOLGARCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Katalancha Bitcoin stikerlari",
		"catalan_description": "Katalancha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"catalan_header": "KATALANCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Xitoycha Bitcoin stikerlari",
		"chinese_description": "Xitoycha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"chinese_header": "XITOYCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Xorvatcha Bitcoin stikerlari",
		"croatian_description": "Xorvatcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"croatian_header": "XORVATCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Chexcha Bitcoin stikerlari",
		"czech_description": "Chexcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"czech_header": "CHEXCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Daniyacha Bitcoin stikerlari",
		"danish_description": "Daniyacha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"danish_header": "DANIYACHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Gollandcha Bitcoin stikerlari",
		"dutch_description": "Gollandcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"dutch_header": "GOLLANDCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'english': {
		"english_bitcoin_sticker_files": "Inglizcha Bitcoin stikerlari",
		"english_description": "Inglizcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"english_header": "INGLIZCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING",
		"print_these": "BIR BOSISH BILAN CHOP ETISH"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Estoncha Bitcoin stikerlari",
		"estonian_description": "Estoncha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"estonian_header": "ESTONCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Filipincha Bitcoin stikerlari",
		"filipino_description": "Filipincha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"filipino_header": "FILIPINCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Fincha Bitcoin stikerlari",
		"finnish_description": "Fincha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"finnish_header": "FINCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'french': {
		"french_bitcoin_sticker_files": "Fransuzcha Bitcoin stikerlari",
		"french_description": "Fransuzcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"french_header": "FRANSUZCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'german': {
		"german_bitcoin_sticker_files": "Nemischa Bitcoin stikerlari",
		"german_description": "Nemischa Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"german_header": "NEMISCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Grekscha Bitcoin stikerlari",
		"greek_description": "Grekscha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"greek_header": "GREKSCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Hausa Bitcoin stikerlari",
		"hausa_description": "Hausa Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"hausa_header": "HAUSA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Ibroniycha Bitcoin stikerlari",
		"hebrew_description": "Ibroniycha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"hebrew_header": "IBRONIYCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Hindcha Bitcoin stikerlari",
		"hindi_description": "Hindcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"hindi_header": "HINDCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Vengercha Bitcoin stikerlari",
		"hungarian_description": "Vengercha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"hungarian_header": "VENGERCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Indonezcha Bitcoin stikerlari",
		"indonesian_description": "Indonezcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"indonesian_header": "INDONEZCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Irlandcha Bitcoin stikerlari",
		"irish_description": "Irlandcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"irish_header": "IRLANDCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Italyancha Bitcoin stikerlari",
		"italian_description": "Italyancha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"italian_header": "ITALYANCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Yaponcha Bitcoin stikerlari",
		"japanese_description": "Yaponcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"japanese_header": "YAPONCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Koreyscha Bitcoin stikerlari",
		"korean_description": "Koreyscha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"korean_header": "KOREYSCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Malaycha Bitcoin stikerlari",
		"malay_description": "Malaycha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"malay_header": "MALAYCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Norvegcha Bitcoin stikerlari",
		"norwegian_description": "Norvegcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"norwegian_header": "NORVEGCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Forscha Bitcoin stikerlari",
		"persian_description": "Forscha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"persian_header": "FORSCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Polyakcha Bitcoin stikerlari",
		"polish_description": "Polyakcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"polish_header": "POLYAKCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Portugalcha Bitcoin stikerlari",
		"portuguese_description": "Portugalcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"portuguese_header": "PORTUGALCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Ruscha Bitcoin stikerlari",
		"russian_description": "Ruscha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"russian_header": "RUSCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Singalcha Bitcoin stikerlari",
		"sinhala_description": "Singalcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"sinhala_header": "SINGALCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Slovakcha Bitcoin stikerlari",
		"slovak_description": "Slovakcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"slovak_header": "SLOVAKCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Slovencha Bitcoin stikerlari",
		"slovenian_description": "Slovencha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"slovenian_header": "SLOVENCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Ispancha Bitcoin stikerlari",
		"spanish_description": "Ispancha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"spanish_header": "ISPANCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Suahilicha Bitcoin stikerlari",
		"swahili_description": "Suahilicha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"swahili_header": "SUAHILICHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Shvedcha Bitcoin stikerlari",
		"swedish_description": "Shvedcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"swedish_header": "SHVEDCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Taycha Bitcoin stikerlari",
		"thai_description": "Taycha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"thai_header": "TAYCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Turkcha Bitcoin stikerlari",
		"turkish_description": "Turkcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"turkish_header": "TURKCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Urducha Bitcoin stikerlari",
		"urdu_description": "Urducha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"urdu_header": "URDUCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Vyetnamcha Bitcoin stikerlari",
		"vietnamese_description": "Vyetnamcha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"vietnamese_header": "VYETNAMCHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Yorubacha Bitcoin stikerlari",
		"yoruba_description": "Yorubacha Bitcoin stiker fayllarini bu yerda yuklab oling.",
		"yoruba_header": "YORUBACHA BITCOIN STIKER FAYLLARINI YUKLAB OLING"
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
	"english_bitcoin_accepted_here_sticker_files": "Inglizcha \u02BBBu yerda Bitcoin qabul qilinadi\u02BB stiker fayllari",
	"english_biz_sticker_files_description": "O\u02BBzingizning \u02BBBu yerda Bitcoin qabul qilinadi\u02BB stikerlaringizni chop etish uchun inglizcha stiker fayllarini yuklab oling.",
	"english_header": "INGLIZCHA \u02BBBU YERDA BITCOIN QABUL QILINADI\u02BB STIKER FAYLLARINI YUKLAB OLING"
};
const bizStickerPath = path.join(bizStickerDir, `index_${lang}.json`);
fs.writeFileSync(bizStickerPath, JSON.stringify(bizStickerData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker-files translations.`);
