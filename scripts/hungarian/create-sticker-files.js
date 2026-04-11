/**
 * Creates Hungarian (hu) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'hu';
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
		"bitcoin_sticker_files_all_languages": "Bitcoin matricák: Minden nyelv",
		"sticker_files_description": "Töltsd le felhasználóbarát Bitcoin matricafájljainkat, és nyomtasd ki a saját matricáidat.",
		"sticker_files_header": "BITCOIN MATRICAFÁJLOK"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Afrikaans Bitcoin matricafájlok",
		"afrikaans_description": "Töltsd le a Bitcoin matricafájlokat afrikaans nyelven.",
		"afrikaans_header": "AFRIKAANS BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Arab Bitcoin matricafájlok",
		"arabic_description": "Töltsd le a Bitcoin matricafájlokat arab nyelven.",
		"arabic_header": "ARAB BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Baszk Bitcoin matricafájlok",
		"basque_description": "Töltsd le a Bitcoin matricafájlokat baszk nyelven.",
		"basque_header": "BASZK BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Bolgár Bitcoin matricafájlok",
		"bulgarian_description": "Töltsd le a Bitcoin matricafájlokat bolgár nyelven.",
		"bulgarian_header": "BOLGÁR BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Katalán Bitcoin matricafájlok",
		"catalan_description": "Töltsd le a Bitcoin matricafájlokat katalán nyelven.",
		"catalan_header": "KATALÁN BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Kínai Bitcoin matricafájlok",
		"chinese_description": "Töltsd le a Bitcoin matricafájlokat kínai nyelven.",
		"chinese_header": "KÍNAI BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Horvát Bitcoin matricafájlok",
		"croatian_description": "Töltsd le a Bitcoin matricafájlokat horvát nyelven.",
		"croatian_header": "HORVÁT BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Cseh Bitcoin matricafájlok",
		"czech_description": "Töltsd le a Bitcoin matricafájlokat cseh nyelven.",
		"czech_header": "CSEH BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Dán Bitcoin matricafájlok",
		"danish_description": "Töltsd le a Bitcoin matricafájlokat dán nyelven.",
		"danish_header": "DÁN BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Holland Bitcoin matricafájlok",
		"dutch_description": "Töltsd le a Bitcoin matricafájlokat holland nyelven.",
		"dutch_header": "HOLLAND BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'english': {
		"english_bitcoin_sticker_files": "Angol Bitcoin matricafájlok",
		"english_description": "Töltsd le a Bitcoin matricafájlokat angol nyelven.",
		"english_header": "ANGOL BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Észt Bitcoin matricafájlok",
		"estonian_description": "Töltsd le a Bitcoin matricafájlokat észt nyelven.",
		"estonian_header": "ÉSZT BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Filippínó Bitcoin matricafájlok",
		"filipino_description": "Töltsd le a Bitcoin matricafájlokat filippínó nyelven.",
		"filipino_header": "FILIPPÍNÓ BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Finn Bitcoin matricafájlok",
		"finnish_description": "Töltsd le a Bitcoin matricafájlokat finn nyelven.",
		"finnish_header": "FINN BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'french': {
		"french_bitcoin_sticker_files": "Francia Bitcoin matricafájlok",
		"french_description": "Töltsd le a Bitcoin matricafájlokat francia nyelven.",
		"french_header": "FRANCIA BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'german': {
		"german_bitcoin_sticker_files": "Német Bitcoin matricafájlok",
		"german_description": "Töltsd le a Bitcoin matricafájlokat német nyelven.",
		"german_header": "NÉMET BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Görög Bitcoin matricafájlok",
		"greek_description": "Töltsd le a Bitcoin matricafájlokat görög nyelven.",
		"greek_header": "GÖRÖG BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Hausza Bitcoin matricafájlok",
		"hausa_description": "Töltsd le a Bitcoin matricafájlokat hausza nyelven.",
		"hausa_header": "HAUSZA BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Héber Bitcoin matricafájlok",
		"hebrew_description": "Töltsd le a Bitcoin matricafájlokat héber nyelven.",
		"hebrew_header": "HÉBER BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Hindi Bitcoin matricafájlok",
		"hindi_description": "Töltsd le a Bitcoin matricafájlokat hindi nyelven.",
		"hindi_header": "HINDI BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Magyar Bitcoin matricafájlok",
		"hungarian_description": "Töltsd le a Bitcoin matricafájlokat magyar nyelven.",
		"hungarian_header": "MAGYAR BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Indonéz Bitcoin matricafájlok",
		"indonesian_description": "Töltsd le a Bitcoin matricafájlokat indonéz nyelven.",
		"indonesian_header": "INDONÉZ BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Ír Bitcoin matricafájlok",
		"irish_description": "Töltsd le a Bitcoin matricafájlokat ír nyelven.",
		"irish_header": "ÍR BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Olasz Bitcoin matricafájlok",
		"italian_description": "Töltsd le a Bitcoin matricafájlokat olasz nyelven.",
		"italian_header": "OLASZ BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Japán Bitcoin matricafájlok",
		"japanese_description": "Töltsd le a Bitcoin matricafájlokat japán nyelven.",
		"japanese_header": "JAPÁN BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Koreai Bitcoin matricafájlok",
		"korean_description": "Töltsd le a Bitcoin matricafájlokat koreai nyelven.",
		"korean_header": "KOREAI BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Maláj Bitcoin matricafájlok",
		"malay_description": "Töltsd le a Bitcoin matricafájlokat maláj nyelven.",
		"malay_header": "MALÁJ BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Norvég Bitcoin matricafájlok",
		"norwegian_description": "Töltsd le a Bitcoin matricafájlokat norvég nyelven.",
		"norwegian_header": "NORVÉG BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Perzsa Bitcoin matricafájlok",
		"persian_description": "Töltsd le a Bitcoin matricafájlokat perzsa nyelven.",
		"persian_header": "PERZSA BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Lengyel Bitcoin matricafájlok",
		"polish_description": "Töltsd le a Bitcoin matricafájlokat lengyel nyelven.",
		"polish_header": "LENGYEL BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Portugál Bitcoin matricafájlok",
		"portuguese_description": "Töltsd le a Bitcoin matricafájlokat portugál nyelven.",
		"portuguese_header": "PORTUGÁL BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Orosz Bitcoin matricafájlok",
		"russian_description": "Töltsd le a Bitcoin matricafájlokat orosz nyelven.",
		"russian_header": "OROSZ BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Szingaléz Bitcoin matricafájlok",
		"sinhala_description": "Töltsd le a Bitcoin matricafájlokat szingaléz nyelven.",
		"sinhala_header": "SZINGALÉZ BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Szlovák Bitcoin matricafájlok",
		"slovak_description": "Töltsd le a Bitcoin matricafájlokat szlovák nyelven.",
		"slovak_header": "SZLOVÁK BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Szlovén Bitcoin matricafájlok",
		"slovenian_description": "Töltsd le a Bitcoin matricafájlokat szlovén nyelven.",
		"slovenian_header": "SZLOVÉN BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Spanyol Bitcoin matricafájlok",
		"spanish_description": "Töltsd le a Bitcoin matricafájlokat spanyol nyelven.",
		"spanish_header": "SPANYOL BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Szuahéli Bitcoin matricafájlok",
		"swahili_description": "Töltsd le a Bitcoin matricafájlokat szuahéli nyelven.",
		"swahili_header": "SZUAHÉLI BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Svéd Bitcoin matricafájlok",
		"swedish_description": "Töltsd le a Bitcoin matricafájlokat svéd nyelven.",
		"swedish_header": "SVÉD BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Thai Bitcoin matricafájlok",
		"thai_description": "Töltsd le a Bitcoin matricafájlokat thai nyelven.",
		"thai_header": "THAI BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Török Bitcoin matricafájlok",
		"turkish_description": "Töltsd le a Bitcoin matricafájlokat török nyelven.",
		"turkish_header": "TÖRÖK BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Urdu Bitcoin matricafájlok",
		"urdu_description": "Töltsd le a Bitcoin matricafájlokat urdu nyelven.",
		"urdu_header": "URDU BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Vietnámi Bitcoin matricafájlok",
		"vietnamese_description": "Töltsd le a Bitcoin matricafájlokat vietnámi nyelven.",
		"vietnamese_header": "VIETNÁMI BITCOIN MATRICÁK LETÖLTÉSE"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Joruba Bitcoin matricafájlok",
		"yoruba_description": "Töltsd le a Bitcoin matricafájlokat joruba nyelven.",
		"yoruba_header": "JORUBA BITCOIN MATRICÁK LETÖLTÉSE"
	}
};

let count = 0;
for (const [dir, data] of Object.entries(stickerLanguages)) {
	const relPath = dir === 'index'
		? `sticker-files/index_${lang}.json`
		: `sticker-files/${dir}/index_${lang}.json`;
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
	count++;
}

// business/sticker-files/english/index
const bizStickerData = {
	...meta,
	"biz_sticker_files_title": "\"Bitcoin elfogadóhely\" matricafájlok",
	"biz_sticker_files_description": "Töltsd le a \"Bitcoin elfogadóhely\" matricafájlokat.",
	"biz_sticker_files_header": "\"BITCOIN ELFOGADÓHELY\" MATRICAFÁJLOK LETÖLTÉSE"
};
const bizStickerPath = path.join(i18nDir, lang, `business/sticker-files/english/index_${lang}.json`);
fs.mkdirSync(path.dirname(bizStickerPath), { recursive: true });
fs.writeFileSync(bizStickerPath, JSON.stringify(bizStickerData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker files.`);
