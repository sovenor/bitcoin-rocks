/**
 * Creates Swedish (sv) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sv';
const today = '2026-04-02';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

// Sticker language directories and their Swedish translations
const stickerLanguages = {
	'index': {
		[`bitcoin_sticker_files_all_languages`]: "Bitcoin-klistermärken: Alla språk",
		[`sticker_files_description`]: "Ladda ner våra lättanvända Bitcoin-klistermärkesfiler och skriv ut dina egna klistermärken.",
		[`sticker_files_header`]: "BITCOIN-KLISTERMÄRKESFILER"
	},
	'afrikaans': {
		[`afrikaans_bitcoin_sticker_files`]: "Bitcoin-klistermärken på afrikaans",
		[`afrikaans_description`]: "Ladda ner Bitcoin-klistermärkesfiler på afrikaans.",
		[`afrikaans_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ AFRIKAANS"
	},
	'arabic': {
		[`arabic_bitcoin_sticker_files`]: "Bitcoin-klistermärken på arabiska",
		[`arabic_description`]: "Ladda ner Bitcoin-klistermärkesfiler på arabiska.",
		[`arabic_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ ARABISKA"
	},
	'basque': {
		[`basque_bitcoin_sticker_files`]: "Bitcoin-klistermärken på baskiska",
		[`basque_description`]: "Ladda ner Bitcoin-klistermärkesfiler på baskiska.",
		[`basque_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ BASKISKA"
	},
	'bulgarian': {
		[`bulgarian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på bulgariska",
		[`bulgarian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på bulgariska.",
		[`bulgarian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ BULGARISKA"
	},
	'catalan': {
		[`catalan_bitcoin_sticker_files`]: "Bitcoin-klistermärken på katalanska",
		[`catalan_description`]: "Ladda ner Bitcoin-klistermärkesfiler på katalanska.",
		[`catalan_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ KATALANSKA"
	},
	'chinese': {
		[`chinese_bitcoin_sticker_files`]: "Bitcoin-klistermärken på kinesiska",
		[`chinese_description`]: "Ladda ner Bitcoin-klistermärkesfiler på kinesiska.",
		[`chinese_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ KINESISKA"
	},
	'croatian': {
		[`croatian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på kroatiska",
		[`croatian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på kroatiska.",
		[`croatian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ KROATISKA"
	},
	'czech': {
		[`czech_bitcoin_sticker_files`]: "Bitcoin-klistermärken på tjeckiska",
		[`czech_description`]: "Ladda ner Bitcoin-klistermärkesfiler på tjeckiska.",
		[`czech_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ TJECKISKA"
	},
	'danish': {
		[`danish_bitcoin_sticker_files`]: "Bitcoin-klistermärken på danska",
		[`danish_description`]: "Ladda ner Bitcoin-klistermärkesfiler på danska.",
		[`danish_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ DANSKA"
	},
	'dutch': {
		[`dutch_bitcoin_sticker_files`]: "Bitcoin-klistermärken på nederländska",
		[`dutch_description`]: "Ladda ner Bitcoin-klistermärkesfiler på nederländska.",
		[`dutch_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ NEDERLÄNDSKA"
	},
	'english': {
		[`english_bitcoin_sticker_files`]: "Bitcoin-klistermärken på engelska",
		[`english_description`]: "Ladda ner Bitcoin-klistermärkesfiler på engelska.",
		[`english_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ ENGELSKA"
	},
	'estonian': {
		[`estonian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på estniska",
		[`estonian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på estniska.",
		[`estonian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ ESTNISKA"
	},
	'filipino': {
		[`filipino_bitcoin_sticker_files`]: "Bitcoin-klistermärken på filippinska",
		[`filipino_description`]: "Ladda ner Bitcoin-klistermärkesfiler på filippinska.",
		[`filipino_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ FILIPPINSKA"
	},
	'finnish': {
		[`finnish_bitcoin_sticker_files`]: "Bitcoin-klistermärken på finska",
		[`finnish_description`]: "Ladda ner Bitcoin-klistermärkesfiler på finska.",
		[`finnish_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ FINSKA"
	},
	'french': {
		[`french_bitcoin_sticker_files`]: "Bitcoin-klistermärken på franska",
		[`french_description`]: "Ladda ner Bitcoin-klistermärkesfiler på franska.",
		[`french_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ FRANSKA"
	},
	'german': {
		[`german_bitcoin_sticker_files`]: "Bitcoin-klistermärken på tyska",
		[`german_description`]: "Ladda ner Bitcoin-klistermärkesfiler på tyska.",
		[`german_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ TYSKA"
	},
	'greek': {
		[`greek_bitcoin_sticker_files`]: "Bitcoin-klistermärken på grekiska",
		[`greek_description`]: "Ladda ner Bitcoin-klistermärkesfiler på grekiska.",
		[`greek_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ GREKISKA"
	},
	'hausa': {
		[`hausa_bitcoin_sticker_files`]: "Bitcoin-klistermärken på hausa",
		[`hausa_description`]: "Ladda ner Bitcoin-klistermärkesfiler på hausa.",
		[`hausa_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ HAUSA"
	},
	'hebrew': {
		[`hebrew_bitcoin_sticker_files`]: "Bitcoin-klistermärken på hebreiska",
		[`hebrew_description`]: "Ladda ner Bitcoin-klistermärkesfiler på hebreiska.",
		[`hebrew_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ HEBREISKA"
	},
	'hindi': {
		[`hindi_bitcoin_sticker_files`]: "Bitcoin-klistermärken på hindi",
		[`hindi_description`]: "Ladda ner Bitcoin-klistermärkesfiler på hindi.",
		[`hindi_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ HINDI"
	},
	'hungarian': {
		[`hungarian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på ungerska",
		[`hungarian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på ungerska.",
		[`hungarian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ UNGERSKA"
	},
	'indonesian': {
		[`indonesian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på indonesiska",
		[`indonesian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på indonesiska.",
		[`indonesian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ INDONESISKA"
	},
	'irish': {
		[`irish_bitcoin_sticker_files`]: "Bitcoin-klistermärken på iriska",
		[`irish_description`]: "Ladda ner Bitcoin-klistermärkesfiler på iriska.",
		[`irish_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ IRISKA"
	},
	'italian': {
		[`italian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på italienska",
		[`italian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på italienska.",
		[`italian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ ITALIENSKA"
	},
	'japanese': {
		[`japanese_bitcoin_sticker_files`]: "Bitcoin-klistermärken på japanska",
		[`japanese_description`]: "Ladda ner Bitcoin-klistermärkesfiler på japanska.",
		[`japanese_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ JAPANSKA"
	},
	'korean': {
		[`korean_bitcoin_sticker_files`]: "Bitcoin-klistermärken på koreanska",
		[`korean_description`]: "Ladda ner Bitcoin-klistermärkesfiler på koreanska.",
		[`korean_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ KOREANSKA"
	},
	'malay': {
		[`malay_bitcoin_sticker_files`]: "Bitcoin-klistermärken på malajiska",
		[`malay_description`]: "Ladda ner Bitcoin-klistermärkesfiler på malajiska.",
		[`malay_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ MALAJISKA"
	},
	'norwegian': {
		[`norwegian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på norska",
		[`norwegian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på norska.",
		[`norwegian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ NORSKA"
	},
	'persian': {
		[`persian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på persiska",
		[`persian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på persiska.",
		[`persian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ PERSISKA"
	},
	'polish': {
		[`polish_bitcoin_sticker_files`]: "Bitcoin-klistermärken på polska",
		[`polish_description`]: "Ladda ner Bitcoin-klistermärkesfiler på polska.",
		[`polish_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ POLSKA"
	},
	'portuguese': {
		[`portuguese_bitcoin_sticker_files`]: "Bitcoin-klistermärken på portugisiska",
		[`portuguese_description`]: "Ladda ner Bitcoin-klistermärkesfiler på portugisiska.",
		[`portuguese_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ PORTUGISISKA"
	},
	'russian': {
		[`russian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på ryska",
		[`russian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på ryska.",
		[`russian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ RYSKA"
	},
	'sinhala': {
		[`sinhala_bitcoin_sticker_files`]: "Bitcoin-klistermärken på singalesiska",
		[`sinhala_description`]: "Ladda ner Bitcoin-klistermärkesfiler på singalesiska.",
		[`sinhala_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ SINGALESISKA"
	},
	'slovak': {
		[`slovak_bitcoin_sticker_files`]: "Bitcoin-klistermärken på slovakiska",
		[`slovak_description`]: "Ladda ner Bitcoin-klistermärkesfiler på slovakiska.",
		[`slovak_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ SLOVAKISKA"
	},
	'slovenian': {
		[`slovenian_bitcoin_sticker_files`]: "Bitcoin-klistermärken på slovenska",
		[`slovenian_description`]: "Ladda ner Bitcoin-klistermärkesfiler på slovenska.",
		[`slovenian_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ SLOVENSKA"
	},
	'spanish': {
		[`spanish_bitcoin_sticker_files`]: "Bitcoin-klistermärken på spanska",
		[`spanish_description`]: "Ladda ner Bitcoin-klistermärkesfiler på spanska.",
		[`spanish_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ SPANSKA"
	},
	'swahili': {
		[`swahili_bitcoin_sticker_files`]: "Bitcoin-klistermärken på swahili",
		[`swahili_description`]: "Ladda ner Bitcoin-klistermärkesfiler på swahili.",
		[`swahili_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ SWAHILI"
	},
	'swedish': {
		[`swedish_bitcoin_sticker_files`]: "Bitcoin-klistermärken på svenska",
		[`swedish_description`]: "Ladda ner Bitcoin-klistermärkesfiler på svenska.",
		[`swedish_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ SVENSKA"
	},
	'thai': {
		[`thai_bitcoin_sticker_files`]: "Bitcoin-klistermärken på thailändska",
		[`thai_description`]: "Ladda ner Bitcoin-klistermärkesfiler på thailändska.",
		[`thai_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ THAILÄNDSKA"
	},
	'turkish': {
		[`turkish_bitcoin_sticker_files`]: "Bitcoin-klistermärken på turkiska",
		[`turkish_description`]: "Ladda ner Bitcoin-klistermärkesfiler på turkiska.",
		[`turkish_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ TURKISKA"
	},
	'urdu': {
		[`urdu_bitcoin_sticker_files`]: "Bitcoin-klistermärken på urdu",
		[`urdu_description`]: "Ladda ner Bitcoin-klistermärkesfiler på urdu.",
		[`urdu_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ URDU"
	},
	'vietnamese': {
		[`vietnamese_bitcoin_sticker_files`]: "Bitcoin-klistermärken på vietnamesiska",
		[`vietnamese_description`]: "Ladda ner Bitcoin-klistermärkesfiler på vietnamesiska.",
		[`vietnamese_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ VIETNAMESISKA"
	},
	'yoruba': {
		[`yoruba_bitcoin_sticker_files`]: "Bitcoin-klistermärken på yoruba",
		[`yoruba_description`]: "Ladda ner Bitcoin-klistermärkesfiler på yoruba.",
		[`yoruba_header`]: "LADDA NER BITCOIN-KLISTERMÄRKEN PÅ YORUBA"
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
	"bitcoin_accepted_here_sticker_files": "Klistermärkesfiler för Bitcoin accepteras här",
	"english_bah_files_description": "Ladda ner klistermärkesfilerna här.",
	"english_header": "LADDA NER ENGELSKA KLISTERMÄRKEN FÖR BITCOIN ACCEPTERAS HÄR"
}, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker files.`);
