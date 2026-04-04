/**
 * Creates Russian (ru) translation files for sticker-files/ subdirectory.
 * ~44 files using a loop pattern.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ru';
const today = '2026-04-04';

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

// Main sticker-files index
writeFile(`sticker-files/index_${lang}.json`, {
	"bitcoin_sticker_files_all_languages": "Файлы стикеров Биткоина: все языки",
	"sticker_files_description": "Скачайте наши удобные файлы стикеров Биткоина, чтобы напечатать свои собственные стикеры.",
	"sticker_files_header": "ФАЙЛЫ СТИКЕРОВ БИТКОИНА"
});

// Language sticker files - Russian translations for each language's sticker page
const stickerLanguages = [
	{ folder: "afrikaans", name: "африкаанс", nameUpper: "АФРИКААНС" },
	{ folder: "arabic", name: "арабские", nameUpper: "АРАБСКИЕ" },
	{ folder: "basque", name: "баскские", nameUpper: "БАСКСКИЕ" },
	{ folder: "bulgarian", name: "болгарские", nameUpper: "БОЛГАРСКИЕ" },
	{ folder: "catalan", name: "каталанские", nameUpper: "КАТАЛАНСКИЕ" },
	{ folder: "chinese", name: "китайские", nameUpper: "КИТАЙСКИЕ" },
	{ folder: "croatian", name: "хорватские", nameUpper: "ХОРВАТСКИЕ" },
	{ folder: "czech", name: "чешские", nameUpper: "ЧЕШСКИЕ" },
	{ folder: "danish", name: "датские", nameUpper: "ДАТСКИЕ" },
	{ folder: "dutch", name: "голландские", nameUpper: "ГОЛЛАНДСКИЕ" },
	{ folder: "english", name: "английские", nameUpper: "АНГЛИЙСКИЕ" },
	{ folder: "estonian", name: "эстонские", nameUpper: "ЭСТОНСКИЕ" },
	{ folder: "filipino", name: "филиппинские", nameUpper: "ФИЛИППИНСКИЕ" },
	{ folder: "finnish", name: "финские", nameUpper: "ФИНСКИЕ" },
	{ folder: "french", name: "французские", nameUpper: "ФРАНЦУЗСКИЕ" },
	{ folder: "german", name: "немецкие", nameUpper: "НЕМЕЦКИЕ" },
	{ folder: "greek", name: "греческие", nameUpper: "ГРЕЧЕСКИЕ" },
	{ folder: "hausa", name: "хауса", nameUpper: "ХАУСА" },
	{ folder: "hebrew", name: "ивритские", nameUpper: "ИВРИТСКИЕ" },
	{ folder: "hindi", name: "хинди", nameUpper: "ХИНДИ" },
	{ folder: "hungarian", name: "венгерские", nameUpper: "ВЕНГЕРСКИЕ" },
	{ folder: "indonesian", name: "индонезийские", nameUpper: "ИНДОНЕЗИЙСКИЕ" },
	{ folder: "irish", name: "ирландские", nameUpper: "ИРЛАНДСКИЕ" },
	{ folder: "italian", name: "итальянские", nameUpper: "ИТАЛЬЯНСКИЕ" },
	{ folder: "japanese", name: "японские", nameUpper: "ЯПОНСКИЕ" },
	{ folder: "korean", name: "корейские", nameUpper: "КОРЕЙСКИЕ" },
	{ folder: "malay", name: "малайские", nameUpper: "МАЛАЙСКИЕ" },
	{ folder: "norwegian", name: "норвежские", nameUpper: "НОРВЕЖСКИЕ" },
	{ folder: "persian", name: "персидские", nameUpper: "ПЕРСИДСКИЕ" },
	{ folder: "polish", name: "польские", nameUpper: "ПОЛЬСКИЕ" },
	{ folder: "portuguese", name: "португальские", nameUpper: "ПОРТУГАЛЬСКИЕ" },
	{ folder: "russian", name: "русские", nameUpper: "РУССКИЕ" },
	{ folder: "sinhala", name: "сингальские", nameUpper: "СИНГАЛЬСКИЕ" },
	{ folder: "slovak", name: "словацкие", nameUpper: "СЛОВАЦКИЕ" },
	{ folder: "slovenian", name: "словенские", nameUpper: "СЛОВЕНСКИЕ" },
	{ folder: "spanish", name: "испанские", nameUpper: "ИСПАНСКИЕ" },
	{ folder: "swahili", name: "суахили", nameUpper: "СУАХИЛИ" },
	{ folder: "swedish", name: "шведские", nameUpper: "ШВЕДСКИЕ" },
	{ folder: "thai", name: "тайские", nameUpper: "ТАЙСКИЕ" },
	{ folder: "turkish", name: "турецкие", nameUpper: "ТУРЕЦКИЕ" },
	{ folder: "urdu", name: "урду", nameUpper: "УРДУ" },
	{ folder: "vietnamese", name: "вьетнамские", nameUpper: "ВЬЕТНАМСКИЕ" },
	{ folder: "yoruba", name: "йоруба", nameUpper: "ЙОРУБА" }
];

for (const sl of stickerLanguages) {
	const key1 = `${sl.folder}_bitcoin_sticker_files`;
	const key2 = `${sl.folder}_description`;
	const key3 = `${sl.folder}_header`;

	const data = {};
	data[key1] = `Файлы ${sl.name} стикеров Биткоина`;
	data[key2] = `Скачайте файлы ${sl.name} стикеров Биткоина здесь.`;
	data[key3] = `СКАЧАТЬ ${sl.nameUpper} ФАЙЛЫ СТИКЕРОВ БИТКОИНА`;

	writeFile(`sticker-files/${sl.folder}/index_${lang}.json`, data);
}

console.log('\nDone! Sticker files created for Russian (ru).');
