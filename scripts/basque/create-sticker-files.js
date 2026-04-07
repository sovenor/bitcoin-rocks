/**
 * Creates Basque (eu) translation files for sticker-files/ subdirectory
 * (index + all 44 language subdirectories)
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'eu';
const today = '2026-04-06';

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
	"bitcoin_sticker_files_all_languages": "Bitcoin eranskailu-fitxategiak: Hizkuntza guztiak",
	"sticker_files_description": "Deskargatu gure Bitcoin eranskailu-fitxategiak erabiltzeko errazak zure eranskailuak inprimatzeko.",
	"sticker_files_header": "BITCOIN ERANSKAILU-FITXATEGIAK"
});

// All sticker language subdirectories
const stickerLangs = [
	{ dir: 'afrikaans', name: 'Afrikaans', eu: 'Afrikaans' },
	{ dir: 'arabic', name: 'Arabic', eu: 'Arabiera' },
	{ dir: 'basque', name: 'Basque', eu: 'Euskara' },
	{ dir: 'bulgarian', name: 'Bulgarian', eu: 'Bulgariera' },
	{ dir: 'catalan', name: 'Catalan', eu: 'Katalana' },
	{ dir: 'chinese', name: 'Chinese', eu: 'Txinera' },
	{ dir: 'croatian', name: 'Croatian', eu: 'Kroaziera' },
	{ dir: 'czech', name: 'Czech', eu: 'Txekiera' },
	{ dir: 'danish', name: 'Danish', eu: 'Daniera' },
	{ dir: 'dutch', name: 'Dutch', eu: 'Nederlandera' },
	{ dir: 'english', name: 'English', eu: 'Ingelesa' },
	{ dir: 'estonian', name: 'Estonian', eu: 'Estoniera' },
	{ dir: 'filipino', name: 'Filipino', eu: 'Filipinera' },
	{ dir: 'finnish', name: 'Finnish', eu: 'Finlandiera' },
	{ dir: 'french', name: 'French', eu: 'Frantsesa' },
	{ dir: 'german', name: 'German', eu: 'Alemana' },
	{ dir: 'greek', name: 'Greek', eu: 'Grekera' },
	{ dir: 'hausa', name: 'Hausa', eu: 'Hausa' },
	{ dir: 'hebrew', name: 'Hebrew', eu: 'Hebreera' },
	{ dir: 'hindi', name: 'Hindi', eu: 'Hindia' },
	{ dir: 'hungarian', name: 'Hungarian', eu: 'Hungariera' },
	{ dir: 'indonesian', name: 'Indonesian', eu: 'Indonesiera' },
	{ dir: 'irish', name: 'Irish', eu: 'Irlandera' },
	{ dir: 'italian', name: 'Italian', eu: 'Italiera' },
	{ dir: 'japanese', name: 'Japanese', eu: 'Japoniera' },
	{ dir: 'korean', name: 'Korean', eu: 'Koreera' },
	{ dir: 'malay', name: 'Malay', eu: 'Malaysiera' },
	{ dir: 'norwegian', name: 'Norwegian', eu: 'Norvegiera' },
	{ dir: 'persian', name: 'Persian', eu: 'Persiera' },
	{ dir: 'polish', name: 'Polish', eu: 'Poloniera' },
	{ dir: 'portuguese', name: 'Portuguese', eu: 'Portugesa' },
	{ dir: 'russian', name: 'Russian', eu: 'Errusiera' },
	{ dir: 'sinhala', name: 'Sinhala', eu: 'Sinhala' },
	{ dir: 'slovak', name: 'Slovak', eu: 'Eslovakiera' },
	{ dir: 'slovenian', name: 'Slovenian', eu: 'Esloveniera' },
	{ dir: 'spanish', name: 'Spanish', eu: 'Gaztelania' },
	{ dir: 'swahili', name: 'Swahili', eu: 'Swahilia' },
	{ dir: 'swedish', name: 'Swedish', eu: 'Suediera' },
	{ dir: 'thai', name: 'Thai', eu: 'Thailandiera' },
	{ dir: 'turkish', name: 'Turkish', eu: 'Turkiera' },
	{ dir: 'urdu', name: 'Urdu', eu: 'Urdua' },
	{ dir: 'vietnamese', name: 'Vietnamese', eu: 'Vietnamera' },
	{ dir: 'yoruba', name: 'Yoruba', eu: 'Yoruba' }
];

for (const sl of stickerLangs) {
	const key1 = `${sl.dir}_bitcoin_sticker_files`;
	const key2 = `${sl.dir}_description`;
	const key3 = `${sl.dir}_header`;

	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, {
		[key1]: `${sl.eu} Bitcoin eranskailu-fitxategiak`,
		[key2]: `Deskargatu ${sl.eu} Bitcoin eranskailu-fitxategiak hemen.`,
		[key3]: `DESKARGATU ${sl.eu.toUpperCase()} BITCOIN ERANSKAILU-FITXATEGIAK`
	});
}

console.log('\nDone creating sticker-files for Basque (eu).');
