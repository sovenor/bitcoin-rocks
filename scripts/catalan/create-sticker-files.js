/**
 * Creates Catalan (ca) translation files for sticker-files/ subdirectory
 * (index + all 44 language subdirectories)
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ca';
const today = '2026-04-07';

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
	"bitcoin_sticker_files_all_languages": "Fitxers d'adhesius de Bitcoin: Tots els idiomes",
	"sticker_files_description": "Descarrega els nostres fitxers d'adhesius de Bitcoin fàcils d'usar per imprimir els teus propis adhesius.",
	"sticker_files_header": "FITXERS D'ADHESIUS DE BITCOIN"
});

// All sticker language subdirectories
const stickerLangs = [
	{ dir: 'afrikaans', name: 'Afrikaans', ca: 'Afrikaans' },
	{ dir: 'arabic', name: 'Arabic', ca: 'Àrab' },
	{ dir: 'basque', name: 'Basque', ca: 'Basc' },
	{ dir: 'bulgarian', name: 'Bulgarian', ca: 'Búlgar' },
	{ dir: 'catalan', name: 'Catalan', ca: 'Català' },
	{ dir: 'chinese', name: 'Chinese', ca: 'Xinès' },
	{ dir: 'croatian', name: 'Croatian', ca: 'Croat' },
	{ dir: 'czech', name: 'Czech', ca: 'Txec' },
	{ dir: 'danish', name: 'Danish', ca: 'Danès' },
	{ dir: 'dutch', name: 'Dutch', ca: 'Neerlandès' },
	{ dir: 'english', name: 'English', ca: 'Anglès' },
	{ dir: 'estonian', name: 'Estonian', ca: 'Estonià' },
	{ dir: 'filipino', name: 'Filipino', ca: 'Filipí' },
	{ dir: 'finnish', name: 'Finnish', ca: 'Finlandès' },
	{ dir: 'french', name: 'French', ca: 'Francès' },
	{ dir: 'german', name: 'German', ca: 'Alemany' },
	{ dir: 'greek', name: 'Greek', ca: 'Grec' },
	{ dir: 'hausa', name: 'Hausa', ca: 'Hausa' },
	{ dir: 'hebrew', name: 'Hebrew', ca: 'Hebreu' },
	{ dir: 'hindi', name: 'Hindi', ca: 'Hindi' },
	{ dir: 'hungarian', name: 'Hungarian', ca: 'Hongarès' },
	{ dir: 'indonesian', name: 'Indonesian', ca: 'Indonesi' },
	{ dir: 'irish', name: 'Irish', ca: 'Irlandès' },
	{ dir: 'italian', name: 'Italian', ca: 'Italià' },
	{ dir: 'japanese', name: 'Japanese', ca: 'Japonès' },
	{ dir: 'korean', name: 'Korean', ca: 'Coreà' },
	{ dir: 'malay', name: 'Malay', ca: 'Malai' },
	{ dir: 'norwegian', name: 'Norwegian', ca: 'Noruec' },
	{ dir: 'persian', name: 'Persian', ca: 'Persa' },
	{ dir: 'polish', name: 'Polish', ca: 'Polonès' },
	{ dir: 'portuguese', name: 'Portuguese', ca: 'Portuguès' },
	{ dir: 'russian', name: 'Russian', ca: 'Rus' },
	{ dir: 'sinhala', name: 'Sinhala', ca: 'Singalès' },
	{ dir: 'slovak', name: 'Slovak', ca: 'Eslovac' },
	{ dir: 'slovenian', name: 'Slovenian', ca: 'Eslovè' },
	{ dir: 'spanish', name: 'Spanish', ca: 'Espanyol' },
	{ dir: 'swahili', name: 'Swahili', ca: 'Suahili' },
	{ dir: 'swedish', name: 'Swedish', ca: 'Suec' },
	{ dir: 'thai', name: 'Thai', ca: 'Tailandès' },
	{ dir: 'turkish', name: 'Turkish', ca: 'Turc' },
	{ dir: 'urdu', name: 'Urdu', ca: 'Urdú' },
	{ dir: 'vietnamese', name: 'Vietnamese', ca: 'Vietnamita' },
	{ dir: 'yoruba', name: 'Yoruba', ca: 'Ioruba' }
];

for (const s of stickerLangs) {
	const prefix = s.dir;
	const hasSpecialKeys = (s.dir === 'english');

	const data = {};
	data[`${prefix}_bitcoin_sticker_files`] = `Fitxers d'adhesius de Bitcoin en ${s.ca}`;
	data[`${prefix}_description`] = `Descarrega fitxers d'adhesius de Bitcoin en ${s.ca} aquí.`;
	data[`${prefix}_header`] = `DESCARREGA FITXERS D'ADHESIUS DE BITCOIN EN ${s.ca.toUpperCase()}`;

	if (hasSpecialKeys) {
		data['print_these'] = 'IMPRIMEIX-LOS AMB 1 CLIC';
	}

	writeFile(`sticker-files/${s.dir}/index_${lang}.json`, data);
}

console.log('\nDone creating sticker files for Catalan (ca).');
