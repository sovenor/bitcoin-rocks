/**
 * Creates Korean (ko) translation files for all sticker-files/ subdirectories.
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ko';
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
	"bitcoin_sticker_files_all_languages": "비트코인 스티커 파일: 전체 언어",
	"sticker_files_description": "사용하기 쉬운 비트코인 스티커 파일을 다운로드하여 직접 스티커를 인쇄하세요.",
	"sticker_files_header": "비트코인 스티커 파일"
});

// All sticker language subdirectories
const stickerLanguages = [
	{ dir: 'afrikaans', name: '아프리칸스어' },
	{ dir: 'arabic', name: '아랍어' },
	{ dir: 'basque', name: '바스크어' },
	{ dir: 'bulgarian', name: '불가리아어' },
	{ dir: 'catalan', name: '카탈루냐어' },
	{ dir: 'chinese', name: '중국어' },
	{ dir: 'croatian', name: '크로아티아어' },
	{ dir: 'czech', name: '체코어' },
	{ dir: 'danish', name: '덴마크어' },
	{ dir: 'dutch', name: '네덜란드어' },
	{ dir: 'english', name: '영어' },
	{ dir: 'estonian', name: '에스토니아어' },
	{ dir: 'filipino', name: '필리핀어' },
	{ dir: 'finnish', name: '핀란드어' },
	{ dir: 'french', name: '프랑스어' },
	{ dir: 'german', name: '독일어' },
	{ dir: 'greek', name: '그리스어' },
	{ dir: 'hausa', name: '하우사어' },
	{ dir: 'hebrew', name: '히브리어' },
	{ dir: 'hindi', name: '힌디어' },
	{ dir: 'hungarian', name: '헝가리어' },
	{ dir: 'indonesian', name: '인도네시아어' },
	{ dir: 'irish', name: '아일랜드어' },
	{ dir: 'italian', name: '이탈리아어' },
	{ dir: 'japanese', name: '일본어' },
	{ dir: 'korean', name: '한국어' },
	{ dir: 'malay', name: '말레이어' },
	{ dir: 'norwegian', name: '노르웨이어' },
	{ dir: 'persian', name: '페르시아어' },
	{ dir: 'polish', name: '폴란드어' },
	{ dir: 'portuguese', name: '포르투갈어' },
	{ dir: 'russian', name: '러시아어' },
	{ dir: 'sinhala', name: '싱할라어' },
	{ dir: 'slovak', name: '슬로바키아어' },
	{ dir: 'slovenian', name: '슬로베니아어' },
	{ dir: 'spanish', name: '스페인어' },
	{ dir: 'swahili', name: '스와힐리어' },
	{ dir: 'swedish', name: '스웨덴어' },
	{ dir: 'thai', name: '태국어' },
	{ dir: 'turkish', name: '터키어' },
	{ dir: 'urdu', name: '우르두어' },
	{ dir: 'vietnamese', name: '베트남어' },
	{ dir: 'yoruba', name: '요루바어' }
];

for (const sl of stickerLanguages) {
	const keyPrefix = sl.dir;
	writeFile(`sticker-files/${sl.dir}/index_${lang}.json`, {
		[`${keyPrefix}_bitcoin_sticker_files`]: `${sl.name} 비트코인 스티커 파일`,
		[`${keyPrefix}_description`]: `${sl.name} 비트코인 스티커 파일을 여기서 다운로드하세요.`,
		[`${keyPrefix}_header`]: `${sl.name} 비트코인 스티커 파일 다운로드`
	});
}

console.log('\nDone! Sticker files created for Korean (ko).');
