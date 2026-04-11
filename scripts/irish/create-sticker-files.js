/**
 * Creates Irish (ga) translation files for all sticker-files/ pages
 * (~44 files: index + individual language subdirectories)
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ga';
const today = '2026-04-11';

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
	"bitcoin_sticker_files_all_languages": "Comhaid Gream\u00e1n Bitcoin: Gach Teanga",
	"sticker_files_description": "\u00cdosl\u00f3d\u00e1il \u00e1r gComhaid Ghream\u00e1n Bitcoin \u00e9asca le h\u00fas\u00e1id chun do chuid gream\u00e1n f\u00e9in a phriont\u00e1il.",
	"sticker_files_header": "COMHAID GHREAM\u00c1N BITCOIN"
});

// Language-specific sticker file pages
const stickerLangs = [
	{ dir: "afrikaans", name: "Afracáinis", nameUpper: "AFRACÁINIS" },
	{ dir: "arabic", name: "Araibis", nameUpper: "ARAIBIS" },
	{ dir: "basque", name: "Bascais", nameUpper: "BASCAIS" },
	{ dir: "bulgarian", name: "Bulgáiris", nameUpper: "BULGÁIRIS" },
	{ dir: "catalan", name: "Catalóinis", nameUpper: "CATALÓINIS" },
	{ dir: "chinese", name: "Sínis", nameUpper: "SÍNIS" },
	{ dir: "croatian", name: "Cróitis", nameUpper: "CRÓITIS" },
	{ dir: "czech", name: "Seicis", nameUpper: "SEICIS" },
	{ dir: "danish", name: "Danmhairgis", nameUpper: "DANMHAIRGIS" },
	{ dir: "dutch", name: "Ollainnis", nameUpper: "OLLAINNIS" },
	{ dir: "english", name: "Béarla", nameUpper: "BÉARLA", hasExtra: true },
	{ dir: "estonian", name: "Eastóinis", nameUpper: "EASTÓINIS" },
	{ dir: "filipino", name: "Filipínis", nameUpper: "FILIPÍNIS" },
	{ dir: "finnish", name: "Fionlainnis", nameUpper: "FIONLAINNIS" },
	{ dir: "french", name: "Fraincis", nameUpper: "FRAINCIS" },
	{ dir: "german", name: "Gearmáinis", nameUpper: "GEARMÁINIS" },
	{ dir: "greek", name: "Gréigis", nameUpper: "GRÉIGIS" },
	{ dir: "hausa", name: "Hásais", nameUpper: "HÁSAIS" },
	{ dir: "hebrew", name: "Eabhrais", nameUpper: "EABHRAIS" },
	{ dir: "hindi", name: "Hiondúis", nameUpper: "HIONDÚIS" },
	{ dir: "hungarian", name: "Ungáiris", nameUpper: "UNGÁIRIS" },
	{ dir: "indonesian", name: "Indinéisis", nameUpper: "INDINÉISIS" },
	{ dir: "irish", name: "Gaeilge", nameUpper: "GAEILGE" },
	{ dir: "italian", name: "Iodáilis", nameUpper: "IODÁILIS" },
	{ dir: "japanese", name: "Seapáinis", nameUpper: "SEAPÁINIS" },
	{ dir: "korean", name: "Cóiréis", nameUpper: "CÓIRÉIS" },
	{ dir: "malay", name: "Malaeis", nameUpper: "MALAEIS" },
	{ dir: "norwegian", name: "Ioruais", nameUpper: "IORUAIS" },
	{ dir: "persian", name: "Peirsis", nameUpper: "PEIRSIS" },
	{ dir: "polish", name: "Polainnis", nameUpper: "POLAINNIS" },
	{ dir: "portuguese", name: "Portaingéilis", nameUpper: "PORTAINGÉILIS" },
	{ dir: "russian", name: "Rúisis", nameUpper: "RÚISIS" },
	{ dir: "sinhala", name: "Siolóinis", nameUpper: "SIOLÓINIS" },
	{ dir: "slovak", name: "Slóvaicis", nameUpper: "SLÓVAICIS" },
	{ dir: "slovenian", name: "Slóivéinis", nameUpper: "SLÓIVÉINIS" },
	{ dir: "spanish", name: "Spáinnis", nameUpper: "SPÁINNIS" },
	{ dir: "swahili", name: "Svahaílis", nameUpper: "SVAHAÍLIS" },
	{ dir: "swedish", name: "Sualainnis", nameUpper: "SUALAINNIS" },
	{ dir: "thai", name: "Téalainnis", nameUpper: "TÉALAINNIS" },
	{ dir: "turkish", name: "Tuircis", nameUpper: "TUIRCIS" },
	{ dir: "urdu", name: "Urdúis", nameUpper: "URDÚIS" },
	{ dir: "vietnamese", name: "Vítneaimis", nameUpper: "VÍTNEAIMIS" },
	{ dir: "yoruba", name: "Iorúibis", nameUpper: "IORÚIBIS" }
];

let count = 1; // index already created

for (const sl of stickerLangs) {
	const prefix = sl.dir;
	const data = {};
	data[`${prefix}_bitcoin_sticker_files`] = `Comhaid Ghreamán Bitcoin ${sl.name}`;
	data[`${prefix}_description`] = `Íoslódáil Comhaid Ghreamán Bitcoin ${sl.name} anseo.`;
	data[`${prefix}_header`] = `ÍOSLÓDÁIL COMHAID GHREAMÁN BITCOIN ${sl.nameUpper}`;

	if (sl.hasExtra) {
		data["print_these"] = "PRIONTÁIL IAD SEO LE 1 CLIC";
	}

	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, data);
	count++;
}

console.log(`\nDone! Created ${count} sticker-files.`);
