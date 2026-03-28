#!/usr/bin/env node

/**
 * update-attribution.js
 * Changes publisher-attribution from single dot-separated line
 * to 3 separate lines (Published by / Since / Open-source).
 */

const fs = require('fs');
const path = require('path');

function findHtmlFiles(dir, results = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && !['node_modules', '.git', 'forms-backend'].includes(entry.name)) {
            findHtmlFiles(fullPath, results);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            results.push(fullPath);
        }
    }
    return results;
}

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = findHtmlFiles(rootDir);

// Match the old publisher-attribution <p> block
const oldPattern = /<div class="publisher-attribution"[^>]*>\s*<div class="container-inner">\s*<p>\s*[\s\S]*?<\/p>\s*<\/div>\s*<\/div>/;

const newBlock = `<div class="publisher-attribution" itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
                <div class="container-inner">
                    <p>
                        <span data-i18n="common_published_by">Published by</span>
                        <a href="https://bitcoin.rocks/about" class="orange-link" itemprop="url"><span itemprop="name" data-i18n="common_publisher_name">bitcoin.rocks</span></a>
                        <br />
                        <span data-i18n="common_publisher_since">Bitcoin education since 2022</span>
                        <br />
                        <a href="https://github.com/sovenor/bitcoin-rocks" class="orange-link" target="_blank"><span data-i18n="common_publisher_open_source">Open-source project</span></a>
                    </p>
                </div>
            </div>`;

let updated = 0;

for (const filePath of htmlFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    if (oldPattern.test(content)) {
        content = content.replace(oldPattern, newBlock);
        fs.writeFileSync(filePath, content, 'utf8');
        const relPath = path.relative(rootDir, filePath);
        console.log(`✅ Updated: ${relPath}`);
        updated++;
    }
}

console.log(`\nDone! Updated ${updated} files.`);
