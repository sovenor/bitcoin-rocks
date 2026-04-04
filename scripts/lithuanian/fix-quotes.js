/**
 * Fixes Lithuanian curly quote characters in all Lithuanian script files.
 * Replaces „ (U+201E) and " (U+201C) with their unicode escape sequences.
 */
const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== 'fix-quotes.js');

let totalFixes = 0;
for (const file of files) {
	const fp = path.join(dir, file);
	let content = fs.readFileSync(fp, 'utf8');
	const orig = content;
	
	let result = '';
	for (let i = 0; i < content.length; i++) {
		const code = content.charCodeAt(i);
		if (code === 0x201E) {
			result += '\\u201E';
		} else if (code === 0x201C) {
			result += '\\u201C';
		} else {
			result += content[i];
		}
	}
	
	if (result !== orig) {
		fs.writeFileSync(fp, result, 'utf8');
		console.log('FIXED: ' + file);
		totalFixes++;
	} else {
		console.log('OK: ' + file);
	}
}

console.log('\nFixed ' + totalFixes + ' file(s).');
