/**
 * Creates Chichewa (ny) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ny';
const today = '2026-04-02';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Mafayilo a Zitikiti za Bitcoin: Zilankhulo Zonse",
		"sticker_files_description": "Tsitsani mafayilo athu osavuta a Zitikiti za Bitcoin kuti musindikize zitikiti zanu.",
		"sticker_files_header": "MAFAYILO A ZITIKITI ZA BITCOIN"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiafrikaans",
		"afrikaans_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiafrikaans pano.",
		"afrikaans_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIAFRIKAANS"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiarabu",
		"arabic_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiarabu pano.",
		"arabic_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIARABU"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chibasque",
		"basque_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chibasque pano.",
		"basque_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIBASQUE"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chibulgaria",
		"bulgarian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chibulgaria pano.",
		"bulgarian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIBULGARIA"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chicatalan",
		"catalan_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chicatalan pano.",
		"catalan_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHICATALAN"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chchaina",
		"chinese_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chchaina pano.",
		"chinese_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHCHAINA"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chikroeshia",
		"croatian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chikroeshia pano.",
		"croatian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIKROESHIA"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chicheki",
		"czech_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chicheki pano.",
		"czech_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHICHEKI"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chidanishi",
		"danish_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chidanishi pano.",
		"danish_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIDANISHI"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chidatchi",
		"dutch_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chidatchi pano.",
		"dutch_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIDATCHI"
	},
	'english': {
		"english_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chingerezi",
		"english_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chingerezi pano.",
		"english_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHINGEREZI"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiestonia",
		"estonian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiestonia pano.",
		"estonian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIESTONIA"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chifilipino",
		"filipino_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chifilipino pano.",
		"filipino_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIFILIPINO"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chifinishi",
		"finnish_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chifinishi pano.",
		"finnish_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIFINISHI"
	},
	'french': {
		"french_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chifalansa",
		"french_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chifalansa pano.",
		"french_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIFALANSA"
	},
	'german': {
		"german_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chijeremani",
		"german_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chijeremani pano.",
		"german_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIJEREMANI"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chigriki",
		"greek_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chigriki pano.",
		"greek_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIGRIKI"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chihausa",
		"hausa_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chihausa pano.",
		"hausa_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIHAUSA"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chihebri",
		"hebrew_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chihebri pano.",
		"hebrew_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIHEBRI"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chihindi",
		"hindi_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chihindi pano.",
		"hindi_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIHINDI"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chihungare",
		"hungarian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chihungare pano.",
		"hungarian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIHUNGARE"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiindoneshia",
		"indonesian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiindoneshia pano.",
		"indonesian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIINDONESHIA"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiayirishi",
		"irish_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiayirishi pano.",
		"irish_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIAYIRISHI"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiitaliya",
		"italian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiitaliya pano.",
		"italian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIITALIYA"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chijapani",
		"japanese_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chijapani pano.",
		"japanese_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIJAPANI"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chikorea",
		"korean_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chikorea pano.",
		"korean_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIKOREA"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chimaleya",
		"malay_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chimaleya pano.",
		"malay_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIMALEYA"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chinorwe",
		"norwegian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chinorwe pano.",
		"norwegian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHINORWE"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chipeshia",
		"persian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chipeshia pano.",
		"persian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIPESHIA"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chipolishi",
		"polish_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chipolishi pano.",
		"polish_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIPOLISHI"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chipotugizi",
		"portuguese_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chipotugizi pano.",
		"portuguese_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIPOTUGIZI"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chirachiya",
		"russian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chirachiya pano.",
		"russian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIRACHIYA"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chisinhala",
		"sinhala_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chisinhala pano.",
		"sinhala_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHISINHALA"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chislovaki",
		"slovak_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chislovaki pano.",
		"slovak_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHISLOVAKI"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chisloveniya",
		"slovenian_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chisloveniya pano.",
		"slovenian_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHISLOVENIYA"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chisipanishi",
		"spanish_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chisipanishi pano.",
		"spanish_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHISIPANISHI"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiswahili",
		"swahili_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiswahili pano.",
		"swahili_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHISWAHILI"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiswideni",
		"swedish_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiswideni pano.",
		"swedish_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHISWIDENI"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chithai",
		"thai_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chithai pano.",
		"thai_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHITHAI"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiteki",
		"turkish_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiteki pano.",
		"turkish_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHITEKI"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiurdu",
		"urdu_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiurdu pano.",
		"urdu_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIURDU"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chivietinamu",
		"vietnamese_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chivietinamu pano.",
		"vietnamese_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIVIETINAMU"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Zitikiti za Bitcoin za Chiyoruba",
		"yoruba_description": "Tsitsani mafayilo a zitikiti za Bitcoin za Chiyoruba pano.",
		"yoruba_header": "TSITSANI MAFAYILO A ZITIKITI ZA BITCOIN ZA CHIYORUBA"
	}
};

// Write all sticker-files
for (const [folder, data] of Object.entries(stickerLanguages)) {
	const relPath = folder === 'index'
		? `sticker-files/index_${lang}.json`
		: `sticker-files/${folder}/index_${lang}.json`;
	
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// business/sticker-files/english/
const bizStickerPath = path.join(i18nDir, lang, `business/sticker-files/english/index_${lang}.json`);
fs.mkdirSync(path.dirname(bizStickerPath), { recursive: true });
fs.writeFileSync(bizStickerPath, JSON.stringify({
	...meta,
	"english_bitcoin_accepted_here_sticker_files": "Mafayilo a Zitikiti za 'Bitcoin Imalandiridwa Pano' za Chingerezi",
	"english_biz_sticker_files_description": "Tsitsani mafayilo a zitikiti za Chingerezi kuti musindikize zitikiti zanu za Bitcoin Imalandiridwa Pano.",
	"english_header": "TSITSANI MAFAYILO A ZITIKITI ZA 'BITCOIN IMALANDIRIDWA PANO' ZA CHINGEREZI"
}, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);

console.log('\nDone! Sticker files created for Chichewa (ny).');
