/**
 * Fix Chinese curly quotes in all create-*.js scripts.
 * Replaces \u201C and \u201D (which Node interprets as curly quotes
 * and breaks JS string parsing) with safe corner brackets 「」.
 */
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const files = fs.readdirSync(dir).filter(f => f.startsWith('create-') && f.endsWith('.js'));

let totalFixed = 0;

files.forEach(f => {
	const fp = path.join(dir, f);
	const buf = fs.readFileSync(fp);
	let content = buf.toString('utf8');
	const orig = content;

	// Count and replace all forms of curly quotes
	let count = 0;

	// Replace literal curly quote chars (U+201C left, U+201D right)
	const left = String.fromCharCode(0x201C);
	const right = String.fromCharCode(0x201D);
	
	while (content.includes(left)) {
		content = content.replace(left, '\u300C');
		count++;
	}
	while (content.includes(right)) {
		content = content.replace(right, '\u300D');
		count++;
	}

	// Replace escaped forms: \\u201C \\u201D (literal backslash + u201C in file)
	const escapedLeft = '\\u201C';
	const escapedRight = '\\u201D';
	while (content.includes(escapedLeft)) {
		content = content.replace(escapedLeft, '\u300C');
		count++;
	}
	while (content.includes(escapedRight)) {
		content = content.replace(escapedRight, '\u300D');
		count++;
	}

	if (content !== orig) {
		fs.writeFileSync(fp, content, 'utf8');
		console.log(`FIXED ${count} quotes in: ${f}`);
		totalFixed += count;
	} else {
		console.log(`OK: ${f}`);
	}
});

console.log(`\nTotal replacements: ${totalFixed}`);
