/**
 * Creates Lithuanian (lt) translation files for all sticker-files/ subdirectories.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'lt';
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

// sticker-files/index
writeFile(`sticker-files/index_${lang}.json`, {
	"bitcoin_sticker_files_all_languages": "Bitcoin lipduk\u0173 failai: visos kalbos",
	"sticker_files_description": "Atsisi\u0173skite paprast\u0173 naudoti Bitcoin lipduk\u0173 fail\u0173 ir atsispausdinkite savo lipdukus.",
	"sticker_files_header": "BITCOIN LIPDUK\u0172 FAILAI"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: 'Afrikaans' },
	{ dir: 'arabic', name: 'Arab\u0173' },
	{ dir: 'basque', name: 'Bask\u0173' },
	{ dir: 'bulgarian', name: 'Bulgar\u0173' },
	{ dir: 'catalan', name: 'Katalonijos' },
	{ dir: 'chinese', name: 'Kin\u0173' },
	{ dir: 'croatian', name: 'Kroat\u0173' },
	{ dir: 'czech', name: '\u010Cek\u0173' },
	{ dir: 'danish', name: 'Dan\u0173' },
	{ dir: 'dutch', name: 'Oland\u0173' },
	{ dir: 'english', name: 'Angl\u0173' },
	{ dir: 'estonian', name: 'Est\u0173' },
	{ dir: 'filipino', name: 'Filipino' },
	{ dir: 'finnish', name: 'Suomi\u0173' },
	{ dir: 'french', name: 'Pranc\u016Bz\u0173' },
	{ dir: 'german', name: 'Vokie\u010Di\u0173' },
	{ dir: 'greek', name: 'Graik\u0173' },
	{ dir: 'hausa', name: 'Haus\u0173' },
	{ dir: 'hebrew', name: 'Hebraj\u0173' },
	{ dir: 'hindi', name: 'Hindi' },
	{ dir: 'hungarian', name: 'Vengr\u0173' },
	{ dir: 'indonesian', name: 'Indonezijos' },
	{ dir: 'irish', name: 'Air\u0173' },
	{ dir: 'italian', name: 'Ital\u0173' },
	{ dir: 'japanese', name: 'Japon\u0173' },
	{ dir: 'korean', name: 'Kor\u0117jie\u010Di\u0173' },
	{ dir: 'malay', name: 'Malaj\u0173' },
	{ dir: 'norwegian', name: 'Norveg\u0173' },
	{ dir: 'persian', name: 'Pers\u0173' },
	{ dir: 'polish', name: 'Lenk\u0173' },
	{ dir: 'portuguese', name: 'Portugal\u0173' },
	{ dir: 'russian', name: 'Rus\u0173' },
	{ dir: 'sinhala', name: 'Sinhal\u0173' },
	{ dir: 'slovak', name: 'Slovak\u0173' },
	{ dir: 'slovenian', name: 'Slov\u0117n\u0173' },
	{ dir: 'spanish', name: 'Ispan\u0173' },
	{ dir: 'swahili', name: 'Svahili\u0173' },
	{ dir: 'swedish', name: '\u0160ved\u0173' },
	{ dir: 'thai', name: 'Taj\u0173' },
	{ dir: 'turkish', name: 'Turk\u0173' },
	{ dir: 'urdu', name: 'Urdu' },
	{ dir: 'vietnamese', name: 'Vietnamie\u010Di\u0173' },
	{ dir: 'yoruba', name: 'Jorub\u0173' }
];

for (const sl of stickerLanguages) {
	const capName = sl.name.charAt(0).toUpperCase() + sl.name.slice(1);
	const capDir = sl.dir.charAt(0).toUpperCase() + sl.dir.slice(1);
	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, {
		[`${sl.dir}_bitcoin_sticker_files`]: `${capName} Bitcoin lipduk\u0173 failai`,
		[`${sl.dir}_sticker_files_description`]: `Atsisi\u0173skite ${sl.name} Bitcoin lipduk\u0173 failus ir atsispausdinkite savo lipdukus.`,
		[`${sl.dir}_header`]: `${capName.toUpperCase()} BITCOIN LIPDUK\u0172 FAILAI`
	});
}

console.log('\nDone! Sticker files created for Lithuanian (lt).');
