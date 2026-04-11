/**
 * Creates Turkish (tr) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'tr';
const today = '2026-04-11';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

const stickerLanguages = {
	'index': {
		"bitcoin_sticker_files_all_languages": "Bitcoin Çıkartmaları: Tüm Diller",
		"sticker_files_description": "Basit Bitcoin çıkartma dosyalarımızı indirin ve kendi çıkartmalarınızı basın.",
		"sticker_files_header": "BİTCOİN ÇIKARTMA DOSYALARI"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Afrikaanca Bitcoin Çıkartmaları",
		"afrikaans_description": "Afrikaanca Bitcoin çıkartma dosyalarını indirin.",
		"afrikaans_header": "AFRİKAANCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Arapça Bitcoin Çıkartmaları",
		"arabic_description": "Arapça Bitcoin çıkartma dosyalarını indirin.",
		"arabic_header": "ARAPÇA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Baskça Bitcoin Çıkartmaları",
		"basque_description": "Baskça Bitcoin çıkartma dosyalarını indirin.",
		"basque_header": "BASKÇA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Bulgarca Bitcoin Çıkartmaları",
		"bulgarian_description": "Bulgarca Bitcoin çıkartma dosyalarını indirin.",
		"bulgarian_header": "BULGARCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Katalanca Bitcoin Çıkartmaları",
		"catalan_description": "Katalanca Bitcoin çıkartma dosyalarını indirin.",
		"catalan_header": "KATALANCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Çince Bitcoin Çıkartmaları",
		"chinese_description": "Çince Bitcoin çıkartma dosyalarını indirin.",
		"chinese_header": "ÇİNCE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Hırvatça Bitcoin Çıkartmaları",
		"croatian_description": "Hırvatça Bitcoin çıkartma dosyalarını indirin.",
		"croatian_header": "HIRVATÇA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Çekçe Bitcoin Çıkartmaları",
		"czech_description": "Çekçe Bitcoin çıkartma dosyalarını indirin.",
		"czech_header": "ÇEKÇE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Danca Bitcoin Çıkartmaları",
		"danish_description": "Danca Bitcoin çıkartma dosyalarını indirin.",
		"danish_header": "DANCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Felemenkçe Bitcoin Çıkartmaları",
		"dutch_description": "Felemenkçe Bitcoin çıkartma dosyalarını indirin.",
		"dutch_header": "FELEMENKÇE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'english': {
		"english_bitcoin_sticker_files": "İngilizce Bitcoin Çıkartmaları",
		"english_description": "İngilizce Bitcoin çıkartma dosyalarını indirin.",
		"english_header": "İNGİLİZCE BİTCOİN ÇIKARTMALARINI İNDİRİN",
		"print_these": "TEK TIKLA BASTIRIR"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Estonca Bitcoin Çıkartmaları",
		"estonian_description": "Estonca Bitcoin çıkartma dosyalarını indirin.",
		"estonian_header": "ESTONCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Filipince Bitcoin Çıkartmaları",
		"filipino_description": "Filipince Bitcoin çıkartma dosyalarını indirin.",
		"filipino_header": "FİLİPİNCE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Fince Bitcoin Çıkartmaları",
		"finnish_description": "Fince Bitcoin çıkartma dosyalarını indirin.",
		"finnish_header": "FİNCE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'french': {
		"french_bitcoin_sticker_files": "Fransızca Bitcoin Çıkartmaları",
		"french_description": "Fransızca Bitcoin çıkartma dosyalarını indirin.",
		"french_header": "FRANSIZCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'german': {
		"german_bitcoin_sticker_files": "Almanca Bitcoin Çıkartmaları",
		"german_description": "Almanca Bitcoin çıkartma dosyalarını indirin.",
		"german_header": "ALMANCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Yunanca Bitcoin Çıkartmaları",
		"greek_description": "Yunanca Bitcoin çıkartma dosyalarını indirin.",
		"greek_header": "YUNANCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Hausa Bitcoin Çıkartmaları",
		"hausa_description": "Hausa Bitcoin çıkartma dosyalarını indirin.",
		"hausa_header": "HAUSA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "İbranice Bitcoin Çıkartmaları",
		"hebrew_description": "İbranice Bitcoin çıkartma dosyalarını indirin.",
		"hebrew_header": "İBRANİCE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Hintçe Bitcoin Çıkartmaları",
		"hindi_description": "Hintçe Bitcoin çıkartma dosyalarını indirin.",
		"hindi_header": "HİNTÇE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Macarca Bitcoin Çıkartmaları",
		"hungarian_description": "Macarca Bitcoin çıkartma dosyalarını indirin.",
		"hungarian_header": "MACARCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Endonezce Bitcoin Çıkartmaları",
		"indonesian_description": "Endonezce Bitcoin çıkartma dosyalarını indirin.",
		"indonesian_header": "ENDONEZCE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "İrlandaca Bitcoin Çıkartmaları",
		"irish_description": "İrlandaca Bitcoin çıkartma dosyalarını indirin.",
		"irish_header": "İRLANDACA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "İtalyanca Bitcoin Çıkartmaları",
		"italian_description": "İtalyanca Bitcoin çıkartma dosyalarını indirin.",
		"italian_header": "İTALYANCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Japonca Bitcoin Çıkartmaları",
		"japanese_description": "Japonca Bitcoin çıkartma dosyalarını indirin.",
		"japanese_header": "JAPONCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Korece Bitcoin Çıkartmaları",
		"korean_description": "Korece Bitcoin çıkartma dosyalarını indirin.",
		"korean_header": "KORECE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Malayca Bitcoin Çıkartmaları",
		"malay_description": "Malayca Bitcoin çıkartma dosyalarını indirin.",
		"malay_header": "MALAYCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Norveççe Bitcoin Çıkartmaları",
		"norwegian_description": "Norveççe Bitcoin çıkartma dosyalarını indirin.",
		"norwegian_header": "NORVEÇÇE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Farsça Bitcoin Çıkartmaları",
		"persian_description": "Farsça Bitcoin çıkartma dosyalarını indirin.",
		"persian_header": "FARSÇA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Lehçe Bitcoin Çıkartmaları",
		"polish_description": "Lehçe Bitcoin çıkartma dosyalarını indirin.",
		"polish_header": "LEHÇE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Portekizce Bitcoin Çıkartmaları",
		"portuguese_description": "Portekizce Bitcoin çıkartma dosyalarını indirin.",
		"portuguese_header": "PORTEKİZCE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Rusça Bitcoin Çıkartmaları",
		"russian_description": "Rusça Bitcoin çıkartma dosyalarını indirin.",
		"russian_header": "RUSÇA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Sinhalaca Bitcoin Çıkartmaları",
		"sinhala_description": "Sinhalaca Bitcoin çıkartma dosyalarını indirin.",
		"sinhala_header": "SİNHALACA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Slovakça Bitcoin Çıkartmaları",
		"slovak_description": "Slovakça Bitcoin çıkartma dosyalarını indirin.",
		"slovak_header": "SLOVAKÇA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Slovence Bitcoin Çıkartmaları",
		"slovenian_description": "Slovence Bitcoin çıkartma dosyalarını indirin.",
		"slovenian_header": "SLOVENCE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "İspanyolca Bitcoin Çıkartmaları",
		"spanish_description": "İspanyolca Bitcoin çıkartma dosyalarını indirin.",
		"spanish_header": "İSPANYOLCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Svahilice Bitcoin Çıkartmaları",
		"swahili_description": "Svahilice Bitcoin çıkartma dosyalarını indirin.",
		"swahili_header": "SVAHİLİCE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "İsveççe Bitcoin Çıkartmaları",
		"swedish_description": "İsveççe Bitcoin çıkartma dosyalarını indirin.",
		"swedish_header": "İSVEÇÇE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Tayca Bitcoin Çıkartmaları",
		"thai_description": "Tayca Bitcoin çıkartma dosyalarını indirin.",
		"thai_header": "TAYCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Türkçe Bitcoin Çıkartmaları",
		"turkish_description": "Türkçe Bitcoin çıkartma dosyalarını indirin.",
		"turkish_header": "TÜRKÇE BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Urduca Bitcoin Çıkartmaları",
		"urdu_description": "Urduca Bitcoin çıkartma dosyalarını indirin.",
		"urdu_header": "URDUCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Vietnamca Bitcoin Çıkartmaları",
		"vietnamese_description": "Vietnamca Bitcoin çıkartma dosyalarını indirin.",
		"vietnamese_header": "VİETNAMCA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Yorubaca Bitcoin Çıkartmaları",
		"yoruba_description": "Yorubaca Bitcoin çıkartma dosyalarını indirin.",
		"yoruba_header": "YORUBACA BİTCOİN ÇIKARTMALARINI İNDİRİN"
	}
};

let count = 0;

for (const [dir, translations] of Object.entries(stickerLanguages)) {
	const subDir = dir === 'index'
		? path.join(i18nDir, lang, 'sticker-files')
		: path.join(i18nDir, lang, 'sticker-files', dir);

	fs.mkdirSync(subDir, { recursive: true });

	const data = { ...meta, ...translations };
	const filePath = path.join(subDir, `index_${lang}.json`);
	fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
	count++;
}

// Also create business/sticker-files/english/
const bizStickerDir = path.join(i18nDir, lang, 'business', 'sticker-files', 'english');
fs.mkdirSync(bizStickerDir, { recursive: true });
const bizStickerData = {
	...meta,
	"english_bitcoin_accepted_here_sticker_files": "İngilizce 'Bitcoin Burada Kabul Edilir' Çıkartma Dosyaları",
	"english_biz_sticker_files_description": "Kendi Bitcoin Burada Kabul Edilir çıkartmalarınızı basmak için İngilizce çıkartma dosyalarını indirin.",
	"english_header": "İNGİLİZCE 'BİTCOİN BURADA KABUL EDİLİR' ÇIKARTMA DOSYALARINI İNDİRİN"
};
const bizStickerPath = path.join(bizStickerDir, `index_${lang}.json`);
fs.writeFileSync(bizStickerPath, JSON.stringify(bizStickerData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker-files translations.`);
