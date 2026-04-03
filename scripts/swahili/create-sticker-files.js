/**
 * Creates Swahili (sw) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sw';
const today = '2026-04-03';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Faili za Vibandiko vya Bitcoin: Lugha Zote",
		"sticker_files_description": "Pakua faili zetu rahisi za vibandiko vya Bitcoin kuchapisha vibandiko vyako mwenyewe.",
		"sticker_files_header": "FAILI ZA VIBANDIKO VYA BITCOIN"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiafrikaans",
		"afrikaans_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiafrikaans hapa.",
		"afrikaans_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIAFRIKAANS"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiarabu",
		"arabic_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiarabu hapa.",
		"arabic_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIARABU"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kibasque",
		"basque_description": "Pakua faili za vibandiko vya Bitcoin kwa Kibasque hapa.",
		"basque_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIBASQUE"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kibulgaria",
		"bulgarian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kibulgaria hapa.",
		"bulgarian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIBULGARIA"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kikatalani",
		"catalan_description": "Pakua faili za vibandiko vya Bitcoin kwa Kikatalani hapa.",
		"catalan_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIKATALANI"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kichina",
		"chinese_description": "Pakua faili za vibandiko vya Bitcoin kwa Kichina hapa.",
		"chinese_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KICHINA"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kikroeshia",
		"croatian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kikroeshia hapa.",
		"croatian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIKROESHIA"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kicheki",
		"czech_description": "Pakua faili za vibandiko vya Bitcoin kwa Kicheki hapa.",
		"czech_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KICHEKI"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kidenmaki",
		"danish_description": "Pakua faili za vibandiko vya Bitcoin kwa Kidenmaki hapa.",
		"danish_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIDENMAKI"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiholanzi",
		"dutch_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiholanzi hapa.",
		"dutch_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIHOLANZI"
	},
	'english': {
		"english_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiingereza",
		"english_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiingereza hapa.",
		"english_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIINGEREZA",
		"print_these": "CHAPISHA HIZI KWA BOFYO 1"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiestonia",
		"estonian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiestonia hapa.",
		"estonian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIESTONIA"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kifilipino",
		"filipino_description": "Pakua faili za vibandiko vya Bitcoin kwa Kifilipino hapa.",
		"filipino_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIFILIPINO"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kifini",
		"finnish_description": "Pakua faili za vibandiko vya Bitcoin kwa Kifini hapa.",
		"finnish_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIFINI"
	},
	'french': {
		"french_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kifaransa",
		"french_description": "Pakua faili za vibandiko vya Bitcoin kwa Kifaransa hapa.",
		"french_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIFARANSA"
	},
	'german': {
		"german_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kijerumani",
		"german_description": "Pakua faili za vibandiko vya Bitcoin kwa Kijerumani hapa.",
		"german_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIJERUMANI"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kigiriki",
		"greek_description": "Pakua faili za vibandiko vya Bitcoin kwa Kigiriki hapa.",
		"greek_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIGIRIKI"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kihausa",
		"hausa_description": "Pakua faili za vibandiko vya Bitcoin kwa Kihausa hapa.",
		"hausa_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIHAUSA"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiebrania",
		"hebrew_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiebrania hapa.",
		"hebrew_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIEBRANIA"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kihindi",
		"hindi_description": "Pakua faili za vibandiko vya Bitcoin kwa Kihindi hapa.",
		"hindi_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIHINDI"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kihungari",
		"hungarian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kihungari hapa.",
		"hungarian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIHUNGARI"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiindonesia",
		"indonesian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiindonesia hapa.",
		"indonesian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIINDONESIA"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiayalandi",
		"irish_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiayalandi hapa.",
		"irish_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIAYALANDI"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiitaliano",
		"italian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiitaliano hapa.",
		"italian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIITALIANO"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kijapani",
		"japanese_description": "Pakua faili za vibandiko vya Bitcoin kwa Kijapani hapa.",
		"japanese_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIJAPANI"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kikorea",
		"korean_description": "Pakua faili za vibandiko vya Bitcoin kwa Kikorea hapa.",
		"korean_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIKOREA"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kimalei",
		"malay_description": "Pakua faili za vibandiko vya Bitcoin kwa Kimalei hapa.",
		"malay_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIMALEI"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kinorwe",
		"norwegian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kinorwe hapa.",
		"norwegian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KINORWE"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiajemi",
		"persian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiajemi hapa.",
		"persian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIAJEMI"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kipolandi",
		"polish_description": "Pakua faili za vibandiko vya Bitcoin kwa Kipolandi hapa.",
		"polish_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIPOLANDI"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kireno",
		"portuguese_description": "Pakua faili za vibandiko vya Bitcoin kwa Kireno hapa.",
		"portuguese_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIRENO"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kirusi",
		"russian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kirusi hapa.",
		"russian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIRUSI"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kisinhala",
		"sinhala_description": "Pakua faili za vibandiko vya Bitcoin kwa Kisinhala hapa.",
		"sinhala_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KISINHALA"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kislovaki",
		"slovak_description": "Pakua faili za vibandiko vya Bitcoin kwa Kislovaki hapa.",
		"slovak_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KISLOVAKI"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kislovenia",
		"slovenian_description": "Pakua faili za vibandiko vya Bitcoin kwa Kislovenia hapa.",
		"slovenian_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KISLOVENIA"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kihispania",
		"spanish_description": "Pakua faili za vibandiko vya Bitcoin kwa Kihispania hapa.",
		"spanish_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIHISPANIA"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiswahili",
		"swahili_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiswahili hapa.",
		"swahili_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KISWAHILI"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiswidi",
		"swedish_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiswidi hapa.",
		"swedish_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KISWIDI"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kithai",
		"thai_description": "Pakua faili za vibandiko vya Bitcoin kwa Kithai hapa.",
		"thai_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KITHAI"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kituruki",
		"turkish_description": "Pakua faili za vibandiko vya Bitcoin kwa Kituruki hapa.",
		"turkish_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KITURUKI"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiurdu",
		"urdu_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiurdu hapa.",
		"urdu_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIURDU"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kivietinamu",
		"vietnamese_description": "Pakua faili za vibandiko vya Bitcoin kwa Kivietinamu hapa.",
		"vietnamese_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIVIETINAMU"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Vibandiko vya Bitcoin kwa Kiyoruba",
		"yoruba_description": "Pakua faili za vibandiko vya Bitcoin kwa Kiyoruba hapa.",
		"yoruba_header": "PAKUA VIBANDIKO VYA BITCOIN KWA KIYORUBA"
	}
};

let count = 0;

for (const [dir, translations] of Object.entries(stickerLanguages)) {
	const relPath = dir === 'index'
		? `sticker-files/index_${lang}.json`
		: `sticker-files/${dir}/index_${lang}.json`;

	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...translations }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
	count++;
}

// business/sticker-files/english/
const bizStickerPath = path.join(i18nDir, lang, `business/sticker-files/english/index_${lang}.json`);
fs.mkdirSync(path.dirname(bizStickerPath), { recursive: true });
fs.writeFileSync(bizStickerPath, JSON.stringify({
	...meta,
	"english_bitcoin_accepted_here_sticker_files": "Faili za Vibandiko vya 'Bitcoin Inakubaliwa Hapa' kwa Kiingereza",
	"english_biz_sticker_files_description": "Pakua faili za vibandiko kwa Kiingereza kuchapisha vibandiko vyako vya Bitcoin Inakubaliwa Hapa.",
	"english_header": "PAKUA FAILI ZA VIBANDIKO VYA 'BITCOIN INAKUBALIWA HAPA' KWA KIINGEREZA"
}, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker files.`);
