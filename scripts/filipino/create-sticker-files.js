/**
 * Creates Filipino (fil) translation files for all sticker-files/ subdirectory pages.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'fil';
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
	"bitcoin_sticker_files_all_languages": "Mga File ng Bitcoin Sticker: Lahat ng Wika",
	"sticker_files_description": "I-download ang aming madaling gamitin na mga file ng Bitcoin Sticker upang mag-print ng sarili mong mga sticker.",
	"sticker_files_header": "MGA FILE NG BITCOIN STICKER"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: 'Afrikaans' },
	{ dir: 'arabic', name: 'Arabic' },
	{ dir: 'basque', name: 'Basque' },
	{ dir: 'bulgarian', name: 'Bulgarian' },
	{ dir: 'catalan', name: 'Catalan' },
	{ dir: 'chinese', name: 'Chinese' },
	{ dir: 'croatian', name: 'Croatian' },
	{ dir: 'czech', name: 'Czech' },
	{ dir: 'danish', name: 'Danish' },
	{ dir: 'dutch', name: 'Dutch' },
	{ dir: 'english', name: 'English' },
	{ dir: 'estonian', name: 'Estonian' },
	{ dir: 'filipino', name: 'Filipino' },
	{ dir: 'finnish', name: 'Finnish' },
	{ dir: 'french', name: 'French' },
	{ dir: 'german', name: 'German' },
	{ dir: 'greek', name: 'Greek' },
	{ dir: 'hausa', name: 'Hausa' },
	{ dir: 'hebrew', name: 'Hebrew' },
	{ dir: 'hindi', name: 'Hindi' },
	{ dir: 'hungarian', name: 'Hungarian' },
	{ dir: 'indonesian', name: 'Indonesian' },
	{ dir: 'irish', name: 'Irish' },
	{ dir: 'italian', name: 'Italian' },
	{ dir: 'japanese', name: 'Japanese' },
	{ dir: 'korean', name: 'Korean' },
	{ dir: 'malay', name: 'Malay' },
	{ dir: 'norwegian', name: 'Norwegian' },
	{ dir: 'persian', name: 'Persian' },
	{ dir: 'polish', name: 'Polish' },
	{ dir: 'portuguese', name: 'Portuguese' },
	{ dir: 'russian', name: 'Russian' },
	{ dir: 'sinhala', name: 'Sinhala' },
	{ dir: 'slovak', name: 'Slovak' },
	{ dir: 'slovenian', name: 'Slovenian' },
	{ dir: 'spanish', name: 'Spanish' },
	{ dir: 'swahili', name: 'Swahili' },
	{ dir: 'swedish', name: 'Swedish' },
	{ dir: 'thai', name: 'Thai' },
	{ dir: 'turkish', name: 'Turkish' },
	{ dir: 'urdu', name: 'Urdu' },
	{ dir: 'vietnamese', name: 'Vietnamese' },
	{ dir: 'yoruba', name: 'Yoruba' }
];

// Filipino translations for sticker language names
const stickerLangTranslations = {
	'afrikaans': 'Afrikaans',
	'arabic': 'Arabic',
	'basque': 'Basque',
	'bulgarian': 'Bulgarian',
	'catalan': 'Catalan',
	'chinese': 'Chinese',
	'croatian': 'Croatian',
	'czech': 'Czech',
	'danish': 'Danish',
	'dutch': 'Dutch',
	'english': 'Ingles',
	'estonian': 'Estonian',
	'filipino': 'Filipino',
	'finnish': 'Finnish',
	'french': 'Pranses',
	'german': 'Aleman',
	'greek': 'Griyego',
	'hausa': 'Hausa',
	'hebrew': 'Hebrew',
	'hindi': 'Hindi',
	'hungarian': 'Hungarian',
	'indonesian': 'Indonesian',
	'irish': 'Irish',
	'italian': 'Italyano',
	'japanese': 'Hapones',
	'korean': 'Korean',
	'malay': 'Malay',
	'norwegian': 'Norwegian',
	'persian': 'Persian',
	'polish': 'Polish',
	'portuguese': 'Portuges',
	'russian': 'Russian',
	'sinhala': 'Sinhala',
	'slovak': 'Slovak',
	'slovenian': 'Slovenian',
	'spanish': 'Espanyol',
	'swahili': 'Swahili',
	'swedish': 'Swedish',
	'thai': 'Thai',
	'turkish': 'Turkish',
	'urdu': 'Urdu',
	'vietnamese': 'Vietnamese',
	'yoruba': 'Yoruba'
};

for (const stickerLang of stickerLanguages) {
	const filName = stickerLangTranslations[stickerLang.dir] || stickerLang.name;
	const prefix = stickerLang.dir;
	writeFile(`sticker-files/${stickerLang.dir}/index_${lang}.json`, {
		[`${prefix}_bitcoin_sticker_files`]: `Mga File ng ${filName} Bitcoin Sticker`,
		[`${prefix}_description`]: `I-download ang mga file ng ${filName} Bitcoin Sticker dito.`,
		[`${prefix}_header`]: `I-DOWNLOAD ANG MGA FILE NG ${filName.toUpperCase()} BITCOIN STICKER`
	});
}

console.log('\nDone! Sticker files created for Filipino (fil).');
