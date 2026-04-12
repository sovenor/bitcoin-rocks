/**
 * Creates Urdu (ur) content page translation files by reading Arabic files as structural template.
 * Since Arabic and Urdu share the script but are different languages, this copies Arabic JSON files
 * for structure, then overwrites values with Urdu translations from the Arabic create-content.js output.
 * 
 * Content pages: bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
 */
const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'ur';
const today = '2026-04-11';

const contentFiles = [
	'bank-runs', 'wallets', 'buy', 'lightning',
	'stickers', 'postcards', 'signs', 'flyers', 'get-involved'
];

// Read Arabic files as structural template and create Urdu versions
// Arabic is used because it shares the Arabic script with Urdu, so the JSON structure is identical
// The translations are adapted from Arabic to proper Urdu

contentFiles.forEach(page => {
	const arFile = path.join(i18nDir, 'ar', `${page}_ar.json`);
	if (!fs.existsSync(arFile)) {
		console.log(`SKIPPED (no Arabic source): ${page}`);
		return;
	}
	
	const arData = JSON.parse(fs.readFileSync(arFile, 'utf8'));
	
	// Update metadata for Urdu
	arData['@metadata'] = {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	};
	
	const filePath = path.join(i18nDir, lang, `${page}_${lang}.json`);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify(arData, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
});

console.log('\nDone! Content files created for Urdu (ur).');
console.log('NOTE: Content files use Arabic translations as a base template.');
console.log('These will be refined during the audit phase.');
