/**
 * Creates Punjabi (pa) common.json by transliterating Hindi (hi) from Devanagari to Gurmukhi
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'pa';
const today = '2026-04-11';

function devToGur(str) {
	if (!str || typeof str !== 'string') return str;
	let result = '';
	for (let i = 0; i < str.length; i++) {
		const code = str.charCodeAt(i);
		if (code >= 0x0900 && code <= 0x097F) {
			result += String.fromCharCode(code + 0x0100);
		} else {
			result += str[i];
		}
	}
	return result;
}

const hiFile = path.join(i18nDir, 'hi', `common_hi.json`);
const hiData = JSON.parse(fs.readFileSync(hiFile, 'utf8'));

const paData = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };
for (const [key, value] of Object.entries(hiData)) {
	if (key === '@metadata') continue;
	paData[key] = typeof value === 'string' ? devToGur(value) : value;
}

const paFile = path.join(i18nDir, lang, `common_${lang}.json`);
fs.mkdirSync(path.dirname(paFile), { recursive: true });
fs.writeFileSync(paFile, JSON.stringify(paData, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${paFile}`);
console.log('Done creating common.json for Punjabi (pa).');
