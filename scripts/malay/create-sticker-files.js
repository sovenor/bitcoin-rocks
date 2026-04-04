/**
 * Creates Malay (ms) translation files for all sticker-files/ subdirectories.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ms';
const today = '2026-04-03';

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

// sticker-files/index
writeFile(`sticker-files/index_${lang}.json`, {
	"bitcoin_sticker_files_all_languages": "Fail Pelekat Bitcoin: Semua Bahasa",
	"sticker_files_description": "Muat turun fail pelekat Bitcoin yang mudah digunakan dan cetak pelekat anda sendiri.",
	"sticker_files_header": "FAIL PELEKAT BITCOIN"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: 'Afrikaans' },
	{ dir: 'arabic', name: 'Arab' },
	{ dir: 'basque', name: 'Basque' },
	{ dir: 'bulgarian', name: 'Bulgaria' },
	{ dir: 'catalan', name: 'Catalan' },
	{ dir: 'chinese', name: 'Cina' },
	{ dir: 'croatian', name: 'Croatia' },
	{ dir: 'czech', name: 'Czech' },
	{ dir: 'danish', name: 'Denmark' },
	{ dir: 'dutch', name: 'Belanda' },
	{ dir: 'english', name: 'Inggeris' },
	{ dir: 'estonian', name: 'Estonia' },
	{ dir: 'filipino', name: 'Filipino' },
	{ dir: 'finnish', name: 'Finland' },
	{ dir: 'french', name: 'Perancis' },
	{ dir: 'german', name: 'Jerman' },
	{ dir: 'greek', name: 'Greek' },
	{ dir: 'hausa', name: 'Hausa' },
	{ dir: 'hebrew', name: 'Ibrani' },
	{ dir: 'hindi', name: 'Hindi' },
	{ dir: 'hungarian', name: 'Hungary' },
	{ dir: 'indonesian', name: 'Indonesia' },
	{ dir: 'irish', name: 'Ireland' },
	{ dir: 'italian', name: 'Itali' },
	{ dir: 'japanese', name: 'Jepun' },
	{ dir: 'korean', name: 'Korea' },
	{ dir: 'malay', name: 'Melayu' },
	{ dir: 'norwegian', name: 'Norway' },
	{ dir: 'persian', name: 'Parsi' },
	{ dir: 'polish', name: 'Poland' },
	{ dir: 'portuguese', name: 'Portugis' },
	{ dir: 'russian', name: 'Rusia' },
	{ dir: 'sinhala', name: 'Sinhala' },
	{ dir: 'slovak', name: 'Slovak' },
	{ dir: 'slovenian', name: 'Slovenia' },
	{ dir: 'spanish', name: 'Sepanyol' },
	{ dir: 'swahili', name: 'Swahili' },
	{ dir: 'swedish', name: 'Sweden' },
	{ dir: 'thai', name: 'Thai' },
	{ dir: 'turkish', name: 'Turki' },
	{ dir: 'urdu', name: 'Urdu' },
	{ dir: 'vietnamese', name: 'Vietnam' },
	{ dir: 'yoruba', name: 'Yoruba' }
];

for (const sl of stickerLanguages) {
	const keyPrefix = sl.dir;
	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, {
		[`${keyPrefix}_bitcoin_sticker_files`]: `Fail Pelekat Bitcoin ${sl.name}`,
		[`${keyPrefix}_description`]: `Muat turun fail pelekat Bitcoin ${sl.name} di sini.`,
		[`${keyPrefix}_header`]: `MUAT TURUN FAIL PELEKAT BITCOIN ${sl.name.toUpperCase()}`
	});
}

console.log('\nDone! Sticker files created for Malay (ms).');
