/**
 * Creates Tagalog (tl) translation files by copying Filipino (fil) files.
 * Filipino is the standardized form of Tagalog — the written forms are virtually identical.
 * This script copies all fil files, renames them to tl, and updates metadata.
 */

const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', '..', 'i18n', 'fil');
const destDir = path.join(__dirname, '..', '..', 'i18n', 'tl');
const today = new Date().toISOString().split('T')[0];

let fileCount = 0;

function copyRecursive(src, dest) {
	if (!fs.existsSync(dest)) {
		fs.mkdirSync(dest, { recursive: true });
	}

	const entries = fs.readdirSync(src, { withFileTypes: true });

	for (const entry of entries) {
		const srcPath = path.join(src, entry.name);
		const destName = entry.name.replace(/_fil\.json$/, '_tl.json');
		const destPath = path.join(dest, destName);

		if (entry.isDirectory()) {
			copyRecursive(srcPath, destPath);
		} else if (entry.name.endsWith('.json')) {
			const content = JSON.parse(fs.readFileSync(srcPath, 'utf8'));

			// Update metadata
			if (content['@metadata']) {
				content['@metadata'].locale = 'tl';
				content['@metadata']['last-updated'] = today;
			}

			fs.writeFileSync(destPath, JSON.stringify(content, null, '\t') + '\n');
			fileCount++;
			console.log(`Created: ${destPath.replace(path.join(__dirname, '..', '..') + '/', '')}`);
		}
	}
}

console.log('Copying Filipino (fil) files to Tagalog (tl)...\n');
copyRecursive(srcDir, destDir);
console.log(`\nDone! Created ${fileCount} files.`);
