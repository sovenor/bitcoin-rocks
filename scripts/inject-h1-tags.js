#!/usr/bin/env node

/**
 * inject-h1-tags.js
 * 
 * Converts the first/primary heading on each page to an <h1> tag for SEO/GEO.
 * - Most pages: first <h2 class="h2-inflation"> → <h1 class="h1-inflation">
 * - wallets.html & buy.html: first <h3 class="wallet-h3"> → <h1 class="wallet-h3">
 * - Homepage (index.html): wraps logo in <h1> with alt text
 * - Success pages: first <h2 class="h2-stickers"> → <h1 class="h2-stickers">
 * 
 * This script is IDEMPOTENT — if an <h1> already exists on a page, it is skipped.
 * 
 * Usage: node scripts/inject-h1-tags.js
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// Recursively find all .html files
function findHtmlFiles(dir) {
    let results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            // Skip node_modules, .git, forms-backend
            if (['node_modules', '.git', 'forms-backend', 'memory-bank', 'scripts'].includes(entry.name)) continue;
            results = results.concat(findHtmlFiles(fullPath));
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            results.push(fullPath);
        }
    }
    return results;
}

let totalFiles = 0;
let modifiedFiles = 0;
let skippedFiles = 0;

const htmlFiles = findHtmlFiles(ROOT);

for (const filePath of htmlFiles) {
    totalFiles++;
    const relativePath = path.relative(ROOT, filePath);
    let html = fs.readFileSync(filePath, 'utf8');

    // IDEMPOTENT CHECK: Skip if page already has an <h1> tag
    if (/<h1[\s>]/i.test(html)) {
        skippedFiles++;
        continue;
    }

    let modified = false;

    // SPECIAL CASE: Homepage (index.html at root)
    if (relativePath === 'index.html') {
        // Wrap the homepage logo in an <h1> with alt text
        const logoPattern = /<center><a href="https:\/\/bitcoin\.rocks"><img src="img\/logos\/rocks-logo-color-v2\.png" class="home-logo"\/><\/a><\/center>/;
        if (logoPattern.test(html)) {
            html = html.replace(
                logoPattern,
                '<h1 class="home-h1"><a href="https://bitcoin.rocks"><img src="img/logos/rocks-logo-color-v2.png" class="home-logo" alt="bitcoin.rocks — Bitcoin Education"/></a></h1>'
            );
            modified = true;
        }
    }
    // PAGES WITH <h3 class="wallet-h3"> as primary heading (wallets.html, buy.html)
    else if (/<h3 class="wallet-h3"/.test(html)) {
        // Replace only the FIRST occurrence
        html = html.replace(/<h3 class="wallet-h3"/, '<h1 class="wallet-h3"');
        // Also close the tag correctly — find the first </h3> after the change
        // Since we changed the opening tag, we need to close it with </h1>
        html = html.replace(/<h1 class="wallet-h3"(.*?)<\/h3>/, '<h1 class="wallet-h3"$1</h1>');
        modified = true;
    }
    // PAGES WITH <h2 class="h2-stickers"> as primary heading (success pages)
    else if (/<h2 class="h2-stickers">/.test(html) && !/<h2 class="h2-inflation"/.test(html)) {
        // Only use this for pages that ONLY have h2-stickers (not h2-inflation)
        html = html.replace(/<h2 class="h2-stickers">/, '<h1 class="h2-stickers">');
        html = html.replace(/<h1 class="h2-stickers">(.*?)<\/h2>/s, '<h1 class="h2-stickers">$1</h1>');
        modified = true;
    }
    // STANDARD CASE: First <h2 class="h2-inflation..."> → <h1>
    else if (/<h2 class="h2-inflation/.test(html)) {
        // Match the first <h2 class="h2-inflation...">...</h2> — could span multiple lines
        // We need to be careful: some h2s have complex content with spans
        const h2OpenRegex = /<h2 class="h2-inflation/;
        const match = html.match(h2OpenRegex);
        if (match) {
            const startIdx = match.index;
            // Find the closing </h2> for this specific tag
            const afterOpen = html.indexOf('>', startIdx);
            const closingTag = html.indexOf('</h2>', afterOpen);
            if (closingTag !== -1) {
                const originalBlock = html.substring(startIdx, closingTag + 5); // includes </h2>
                const newBlock = originalBlock
                    .replace(/^<h2 /, '<h1 ')
                    .replace(/<\/h2>$/, '</h1>');
                html = html.substring(0, startIdx) + newBlock + html.substring(closingTag + 5);
                modified = true;
            }
        }
    }

    if (modified) {
        fs.writeFileSync(filePath, html, 'utf8');
        modifiedFiles++;
        console.log(`  ✅ ${relativePath}`);
    }
}

console.log(`\n📊 Summary:`);
console.log(`   Files scanned:  ${totalFiles}`);
console.log(`   Files modified: ${modifiedFiles}`);
console.log(`   Files skipped:  ${skippedFiles} (already have H1)`);
console.log(`\n✨ Done! H1 tags have been added to all pages.`);
