/**
 * Creates Estonian (et) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'et';
const today = '2026-04-07';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

// Sticker language directories and their Estonian translations
const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Bitcoin-kleebised: kõik keeled",
		"sticker_files_description": "Laadige alla meie kasutajasõbralikud Bitcoin-kleebisefailid ja printige oma kleebised.",
		"sticker_files_header": "BITCOIN-KLEEBISEFAILID"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Bitcoin-kleebised afrikaansi keeles",
		"afrikaans_description": "Laadige alla Bitcoin-kleebisefailid afrikaansi keeles.",
		"afrikaans_header": "LAADIGE ALLA BITCOIN-KLEEBISED AFRIKAANSI KEELES"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Bitcoin-kleebised araabia keeles",
		"arabic_description": "Laadige alla Bitcoin-kleebisefailid araabia keeles.",
		"arabic_header": "LAADIGE ALLA BITCOIN-KLEEBISED ARAABIA KEELES"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Bitcoin-kleebised baski keeles",
		"basque_description": "Laadige alla Bitcoin-kleebisefailid baski keeles.",
		"basque_header": "LAADIGE ALLA BITCOIN-KLEEBISED BASKI KEELES"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Bitcoin-kleebised bulgaaria keeles",
		"bulgarian_description": "Laadige alla Bitcoin-kleebisefailid bulgaaria keeles.",
		"bulgarian_header": "LAADIGE ALLA BITCOIN-KLEEBISED BULGAARIA KEELES"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Bitcoin-kleebised katalaani keeles",
		"catalan_description": "Laadige alla Bitcoin-kleebisefailid katalaani keeles.",
		"catalan_header": "LAADIGE ALLA BITCOIN-KLEEBISED KATALAANI KEELES"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Bitcoin-kleebised hiina keeles",
		"chinese_description": "Laadige alla Bitcoin-kleebisefailid hiina keeles.",
		"chinese_header": "LAADIGE ALLA BITCOIN-KLEEBISED HIINA KEELES"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Bitcoin-kleebised horvaadi keeles",
		"croatian_description": "Laadige alla Bitcoin-kleebisefailid horvaadi keeles.",
		"croatian_header": "LAADIGE ALLA BITCOIN-KLEEBISED HORVAADI KEELES"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Bitcoin-kleebised tšehhi keeles",
		"czech_description": "Laadige alla Bitcoin-kleebisefailid tšehhi keeles.",
		"czech_header": "LAADIGE ALLA BITCOIN-KLEEBISED TŠEHHI KEELES"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Bitcoin-kleebised taani keeles",
		"danish_description": "Laadige alla Bitcoin-kleebisefailid taani keeles.",
		"danish_header": "LAADIGE ALLA BITCOIN-KLEEBISED TAANI KEELES"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Bitcoin-kleebised hollandi keeles",
		"dutch_description": "Laadige alla Bitcoin-kleebisefailid hollandi keeles.",
		"dutch_header": "LAADIGE ALLA BITCOIN-KLEEBISED HOLLANDI KEELES"
	},
	'english': {
		"english_bitcoin_sticker_files": "Bitcoin-kleebised inglise keeles",
		"english_description": "Laadige alla Bitcoin-kleebisefailid inglise keeles.",
		"english_header": "LAADIGE ALLA BITCOIN-KLEEBISED INGLISE KEELES"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Bitcoin-kleebised eesti keeles",
		"estonian_description": "Laadige alla Bitcoin-kleebisefailid eesti keeles.",
		"estonian_header": "LAADIGE ALLA BITCOIN-KLEEBISED EESTI KEELES"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Bitcoin-kleebised filipiini keeles",
		"filipino_description": "Laadige alla Bitcoin-kleebisefailid filipiini keeles.",
		"filipino_header": "LAADIGE ALLA BITCOIN-KLEEBISED FILIPIINI KEELES"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Bitcoin-kleebised soome keeles",
		"finnish_description": "Laadige alla Bitcoin-kleebisefailid soome keeles.",
		"finnish_header": "LAADIGE ALLA BITCOIN-KLEEBISED SOOME KEELES"
	},
	'french': {
		"french_bitcoin_sticker_files": "Bitcoin-kleebised prantsuse keeles",
		"french_description": "Laadige alla Bitcoin-kleebisefailid prantsuse keeles.",
		"french_header": "LAADIGE ALLA BITCOIN-KLEEBISED PRANTSUSE KEELES"
	},
	'german': {
		"german_bitcoin_sticker_files": "Bitcoin-kleebised saksa keeles",
		"german_description": "Laadige alla Bitcoin-kleebisefailid saksa keeles.",
		"german_header": "LAADIGE ALLA BITCOIN-KLEEBISED SAKSA KEELES"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Bitcoin-kleebised kreeka keeles",
		"greek_description": "Laadige alla Bitcoin-kleebisefailid kreeka keeles.",
		"greek_header": "LAADIGE ALLA BITCOIN-KLEEBISED KREEKA KEELES"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Bitcoin-kleebised hausa keeles",
		"hausa_description": "Laadige alla Bitcoin-kleebisefailid hausa keeles.",
		"hausa_header": "LAADIGE ALLA BITCOIN-KLEEBISED HAUSA KEELES"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Bitcoin-kleebised heebrea keeles",
		"hebrew_description": "Laadige alla Bitcoin-kleebisefailid heebrea keeles.",
		"hebrew_header": "LAADIGE ALLA BITCOIN-KLEEBISED HEEBREA KEELES"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Bitcoin-kleebised hindi keeles",
		"hindi_description": "Laadige alla Bitcoin-kleebisefailid hindi keeles.",
		"hindi_header": "LAADIGE ALLA BITCOIN-KLEEBISED HINDI KEELES"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Bitcoin-kleebised ungari keeles",
		"hungarian_description": "Laadige alla Bitcoin-kleebisefailid ungari keeles.",
		"hungarian_header": "LAADIGE ALLA BITCOIN-KLEEBISED UNGARI KEELES"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Bitcoin-kleebised indoneesia keeles",
		"indonesian_description": "Laadige alla Bitcoin-kleebisefailid indoneesia keeles.",
		"indonesian_header": "LAADIGE ALLA BITCOIN-KLEEBISED INDONEESIA KEELES"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Bitcoin-kleebised iiri keeles",
		"irish_description": "Laadige alla Bitcoin-kleebisefailid iiri keeles.",
		"irish_header": "LAADIGE ALLA BITCOIN-KLEEBISED IIRI KEELES"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Bitcoin-kleebised itaalia keeles",
		"italian_description": "Laadige alla Bitcoin-kleebisefailid itaalia keeles.",
		"italian_header": "LAADIGE ALLA BITCOIN-KLEEBISED ITAALIA KEELES"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Bitcoin-kleebised jaapani keeles",
		"japanese_description": "Laadige alla Bitcoin-kleebisefailid jaapani keeles.",
		"japanese_header": "LAADIGE ALLA BITCOIN-KLEEBISED JAAPANI KEELES"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Bitcoin-kleebised korea keeles",
		"korean_description": "Laadige alla Bitcoin-kleebisefailid korea keeles.",
		"korean_header": "LAADIGE ALLA BITCOIN-KLEEBISED KOREA KEELES"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Bitcoin-kleebised malai keeles",
		"malay_description": "Laadige alla Bitcoin-kleebisefailid malai keeles.",
		"malay_header": "LAADIGE ALLA BITCOIN-KLEEBISED MALAI KEELES"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Bitcoin-kleebised norra keeles",
		"norwegian_description": "Laadige alla Bitcoin-kleebisefailid norra keeles.",
		"norwegian_header": "LAADIGE ALLA BITCOIN-KLEEBISED NORRA KEELES"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Bitcoin-kleebised pärsia keeles",
		"persian_description": "Laadige alla Bitcoin-kleebisefailid pärsia keeles.",
		"persian_header": "LAADIGE ALLA BITCOIN-KLEEBISED PÄRSIA KEELES"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Bitcoin-kleebised poola keeles",
		"polish_description": "Laadige alla Bitcoin-kleebisefailid poola keeles.",
		"polish_header": "LAADIGE ALLA BITCOIN-KLEEBISED POOLA KEELES"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Bitcoin-kleebised portugali keeles",
		"portuguese_description": "Laadige alla Bitcoin-kleebisefailid portugali keeles.",
		"portuguese_header": "LAADIGE ALLA BITCOIN-KLEEBISED PORTUGALI KEELES"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Bitcoin-kleebised vene keeles",
		"russian_description": "Laadige alla Bitcoin-kleebisefailid vene keeles.",
		"russian_header": "LAADIGE ALLA BITCOIN-KLEEBISED VENE KEELES"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Bitcoin-kleebised singali keeles",
		"sinhala_description": "Laadige alla Bitcoin-kleebisefailid singali keeles.",
		"sinhala_header": "LAADIGE ALLA BITCOIN-KLEEBISED SINGALI KEELES"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Bitcoin-kleebised slovaki keeles",
		"slovak_description": "Laadige alla Bitcoin-kleebisefailid slovaki keeles.",
		"slovak_header": "LAADIGE ALLA BITCOIN-KLEEBISED SLOVAKI KEELES"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Bitcoin-kleebised sloveeni keeles",
		"slovenian_description": "Laadige alla Bitcoin-kleebisefailid sloveeni keeles.",
		"slovenian_header": "LAADIGE ALLA BITCOIN-KLEEBISED SLOVEENI KEELES"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Bitcoin-kleebised hispaania keeles",
		"spanish_description": "Laadige alla Bitcoin-kleebisefailid hispaania keeles.",
		"spanish_header": "LAADIGE ALLA BITCOIN-KLEEBISED HISPAANIA KEELES"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Bitcoin-kleebised suahiili keeles",
		"swahili_description": "Laadige alla Bitcoin-kleebisefailid suahiili keeles.",
		"swahili_header": "LAADIGE ALLA BITCOIN-KLEEBISED SUAHIILI KEELES"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Bitcoin-kleebised rootsi keeles",
		"swedish_description": "Laadige alla Bitcoin-kleebisefailid rootsi keeles.",
		"swedish_header": "LAADIGE ALLA BITCOIN-KLEEBISED ROOTSI KEELES"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Bitcoin-kleebised tai keeles",
		"thai_description": "Laadige alla Bitcoin-kleebisefailid tai keeles.",
		"thai_header": "LAADIGE ALLA BITCOIN-KLEEBISED TAI KEELES"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Bitcoin-kleebised türgi keeles",
		"turkish_description": "Laadige alla Bitcoin-kleebisefailid türgi keeles.",
		"turkish_header": "LAADIGE ALLA BITCOIN-KLEEBISED TÜRGI KEELES"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Bitcoin-kleebised urdu keeles",
		"urdu_description": "Laadige alla Bitcoin-kleebisefailid urdu keeles.",
		"urdu_header": "LAADIGE ALLA BITCOIN-KLEEBISED URDU KEELES"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Bitcoin-kleebised vietnami keeles",
		"vietnamese_description": "Laadige alla Bitcoin-kleebisefailid vietnami keeles.",
		"vietnamese_header": "LAADIGE ALLA BITCOIN-KLEEBISED VIETNAMI KEELES"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Bitcoin-kleebised joruba keeles",
		"yoruba_description": "Laadige alla Bitcoin-kleebisefailid joruba keeles.",
		"yoruba_header": "LAADIGE ALLA BITCOIN-KLEEBISED JORUBA KEELES"
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
	"bitcoin_accepted_here_sticker_files": "Bitcoin-kleebisefailid \u201EBitcoin aktsepteeritakse siin\u201C",
	"english_bah_files_description": "Laadige kleebisefailid siit alla.",
	"english_header": "LAADIGE ALLA INGLISKEELSED \u201EBITCOIN AKTSEPTEERITAKSE SIIN\u201C KLEEBISED"
}, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker files.`);
