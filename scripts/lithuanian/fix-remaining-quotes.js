/**
 * Fix remaining U+201C characters in create-comparisons.js
 */
const fs = require('fs');
const path = require('path');

const files = ['create-comparisons.js', 'create-simple-files.js', 'create-business.js', 'create-content.js', 'create-common.js', 'create-index.js', 'create-inflation.js', 'create-sticker-files.js'];

for (const file of files) {
	const fp = path.join(__dirname, file);
	if (!fs.existsSync(fp)) continue;
	const buf = fs.readFileSync(fp);
	let changed = false;
	const newBuf = [];
	for (let i = 0; i < buf.length; i++) {
		// U+201E = E2 80 9E, U+201C = E2 80 9C
		if (i + 2 < buf.length && buf[i] === 0xE2 && buf[i+1] === 0x80 && buf[i+2] === 0x9E) {
			// Replace with literal \u201E (6 ASCII bytes)
			newBuf.push(0x5C, 0x75, 0x32, 0x30, 0x31, 0x45); // \u201E
			i += 2;
			changed = true;
		} else if (i + 2 < buf.length && buf[i] === 0xE2 && buf[i+1] === 0x80 && buf[i+2] === 0x9C) {
			// Replace with literal \u201C (6 ASCII bytes)
			newBuf.push(0x5C, 0x75, 0x32, 0x30, 0x31, 0x43); // \u201C
			i += 2;
			changed = true;
		} else {
			newBuf.push(buf[i]);
		}
	}
	if (changed) {
		fs.writeFileSync(fp, Buffer.from(newBuf));
		console.log('FIXED: ' + file);
	} else {
		console.log('OK: ' + file);
	}
}
