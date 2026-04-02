/**
 * Creates Vietnamese (vi) translation files for all sticker-files/ subdirectories
 * and business/sticker-files/english/
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'vi';
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
		"bitcoin_sticker_files_all_languages": "Tập Tin Nhãn Dán Bitcoin: Tất Cả Ngôn Ngữ",
		"sticker_files_description": "Tải xuống các tập tin nhãn dán Bitcoin dễ sử dụng của chúng tôi để tự in nhãn dán.",
		"sticker_files_header": "TẬP TIN NHÃN DÁN BITCOIN"
	},
	'afrikaans': {
		"afrikaans_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Afrikaans",
		"afrikaans_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Afrikaans tại đây.",
		"afrikaans_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG AFRIKAANS"
	},
	'arabic': {
		"arabic_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Ả Rập",
		"arabic_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Ả Rập tại đây.",
		"arabic_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG Ả RẬP"
	},
	'basque': {
		"basque_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Basque",
		"basque_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Basque tại đây.",
		"basque_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG BASQUE"
	},
	'bulgarian': {
		"bulgarian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Bulgaria",
		"bulgarian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Bulgaria tại đây.",
		"bulgarian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG BULGARIA"
	},
	'catalan': {
		"catalan_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Catalan",
		"catalan_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Catalan tại đây.",
		"catalan_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG CATALAN"
	},
	'chinese': {
		"chinese_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Trung Quốc",
		"chinese_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Trung Quốc tại đây.",
		"chinese_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG TRUNG QUỐC"
	},
	'croatian': {
		"croatian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Croatia",
		"croatian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Croatia tại đây.",
		"croatian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG CROATIA"
	},
	'czech': {
		"czech_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Séc",
		"czech_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Séc tại đây.",
		"czech_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG SÉC"
	},
	'danish': {
		"danish_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Đan Mạch",
		"danish_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Đan Mạch tại đây.",
		"danish_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG ĐAN MẠCH"
	},
	'dutch': {
		"dutch_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Hà Lan",
		"dutch_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Hà Lan tại đây.",
		"dutch_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG HÀ LAN"
	},
	'english': {
		"english_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Anh",
		"english_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Anh tại đây.",
		"english_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG ANH",
		"print_these": "IN NGAY CHỈ VỚI 1 NHẤP CHUỘT"
	},
	'estonian': {
		"estonian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Estonia",
		"estonian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Estonia tại đây.",
		"estonian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG ESTONIA"
	},
	'filipino': {
		"filipino_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Filipino",
		"filipino_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Filipino tại đây.",
		"filipino_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG FILIPINO"
	},
	'finnish': {
		"finnish_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Phần Lan",
		"finnish_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Phần Lan tại đây.",
		"finnish_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG PHẦN LAN"
	},
	'french': {
		"french_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Pháp",
		"french_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Pháp tại đây.",
		"french_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG PHÁP"
	},
	'german': {
		"german_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Đức",
		"german_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Đức tại đây.",
		"german_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG ĐỨC"
	},
	'greek': {
		"greek_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Hy Lạp",
		"greek_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Hy Lạp tại đây.",
		"greek_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG HY LẠP"
	},
	'hausa': {
		"hausa_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Hausa",
		"hausa_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Hausa tại đây.",
		"hausa_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG HAUSA"
	},
	'hebrew': {
		"hebrew_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Do Thái",
		"hebrew_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Do Thái tại đây.",
		"hebrew_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG DO THÁI"
	},
	'hindi': {
		"hindi_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Hindi",
		"hindi_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Hindi tại đây.",
		"hindi_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG HINDI"
	},
	'hungarian': {
		"hungarian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Hungary",
		"hungarian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Hungary tại đây.",
		"hungarian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG HUNGARY"
	},
	'indonesian': {
		"indonesian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Indonesia",
		"indonesian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Indonesia tại đây.",
		"indonesian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG INDONESIA"
	},
	'irish': {
		"irish_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Ireland",
		"irish_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Ireland tại đây.",
		"irish_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG IRELAND"
	},
	'italian': {
		"italian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Ý",
		"italian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Ý tại đây.",
		"italian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG Ý"
	},
	'japanese': {
		"japanese_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Nhật",
		"japanese_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Nhật tại đây.",
		"japanese_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG NHẬT"
	},
	'korean': {
		"korean_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Hàn Quốc",
		"korean_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Hàn Quốc tại đây.",
		"korean_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG HÀN QUỐC"
	},
	'malay': {
		"malay_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Mã Lai",
		"malay_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Mã Lai tại đây.",
		"malay_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG MÃ LAI"
	},
	'norwegian': {
		"norwegian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Na Uy",
		"norwegian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Na Uy tại đây.",
		"norwegian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG NA UY"
	},
	'persian': {
		"persian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Ba Tư",
		"persian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Ba Tư tại đây.",
		"persian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG BA TƯ"
	},
	'polish': {
		"polish_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Ba Lan",
		"polish_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Ba Lan tại đây.",
		"polish_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG BA LAN"
	},
	'portuguese': {
		"portuguese_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Bồ Đào Nha",
		"portuguese_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Bồ Đào Nha tại đây.",
		"portuguese_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG BỒ ĐÀO NHA"
	},
	'russian': {
		"russian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Nga",
		"russian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Nga tại đây.",
		"russian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG NGA"
	},
	'sinhala': {
		"sinhala_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Sinhala",
		"sinhala_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Sinhala tại đây.",
		"sinhala_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG SINHALA"
	},
	'slovak': {
		"slovak_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Slovak",
		"slovak_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Slovak tại đây.",
		"slovak_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG SLOVAK"
	},
	'slovenian': {
		"slovenian_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Slovenia",
		"slovenian_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Slovenia tại đây.",
		"slovenian_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG SLOVENIA"
	},
	'spanish': {
		"spanish_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Tây Ban Nha",
		"spanish_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Tây Ban Nha tại đây.",
		"spanish_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG TÂY BAN NHA"
	},
	'swahili': {
		"swahili_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Swahili",
		"swahili_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Swahili tại đây.",
		"swahili_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG SWAHILI"
	},
	'swedish': {
		"swedish_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Thụy Điển",
		"swedish_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Thụy Điển tại đây.",
		"swedish_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG THỤY ĐIỂN"
	},
	'thai': {
		"thai_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Thái",
		"thai_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Thái tại đây.",
		"thai_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG THÁI"
	},
	'turkish': {
		"turkish_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Thổ Nhĩ Kỳ",
		"turkish_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Thổ Nhĩ Kỳ tại đây.",
		"turkish_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG THỔ NHĨ KỲ"
	},
	'urdu': {
		"urdu_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Urdu",
		"urdu_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Urdu tại đây.",
		"urdu_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG URDU"
	},
	'vietnamese': {
		"vietnamese_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Việt",
		"vietnamese_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Việt tại đây.",
		"vietnamese_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG VIỆT"
	},
	'yoruba': {
		"yoruba_bitcoin_sticker_files": "Nhãn Dán Bitcoin Tiếng Yoruba",
		"yoruba_description": "Tải xuống tập tin nhãn dán Bitcoin tiếng Yoruba tại đây.",
		"yoruba_header": "TẢI XUỐNG NHÃN DÁN BITCOIN TIẾNG YORUBA"
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
	"bitcoin_accepted_here_sticker_files": "Tập tin nhãn dán Chấp Nhận Bitcoin Tại Đây",
	"english_bah_files_description": "Tải xuống tập tin nhãn dán tại đây.",
	"english_header": "TẢI XUỐNG NHÃN DÁN CHẤP NHẬN BITCOIN TẠI ĐÂY TIẾNG ANH"
}, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${bizStickerPath}`);
count++;

console.log(`\nDone! Created ${count} sticker files.`);
