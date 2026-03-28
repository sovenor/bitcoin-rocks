#!/usr/bin/env node

/**
 * update-footer.js
 * Replaces the old verbose footer block with a new compact footer
 * across all HTML files in the project.
 */

const fs = require('fs');
const path = require('path');

// Find all HTML files recursively
function findHtmlFiles(dir, results = []) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        // Skip node_modules, .git, forms-backend
        if (entry.isDirectory() && !['node_modules', '.git', 'forms-backend'].includes(entry.name)) {
            findHtmlFiles(fullPath, results);
        } else if (entry.isFile() && entry.name.endsWith('.html')) {
            results.push(fullPath);
        }
    }
    return results;
}

// The new compact footer HTML
const newFooter = `<div class="footer">
                <div class="container-inner">
                    <p class="footer-tagline" data-i18n="common_footer_tagline">Accelerating bitcoin adoption through education.</p>
                    <p class="footer-links">
                        <a href="https://bitcoin.rocks/about" class="footer-link" data-i18n="common_footer_about">About</a>
                        <span class="footer-divider">&middot;</span>
                        <a href="https://github.com/sovenor/bitcoin-rocks/blob/main/CONTRIBUTING.md" class="footer-link" target="_blank" data-i18n="common_footer_contribute">Contribute</a>
                        <span class="footer-divider">&middot;</span>
                        <a href="https://snort.social/p/npub18kpw3akvdsyk239lx0jgwksr74sq4nlha3r8u9g2rnrhztfpfhysy469c4" class="footer-link" target="_blank" data-i18n="common_footer_nostr">Nostr</a>
                        <span class="footer-divider">&middot;</span>
                        <a href="mailto:hi@bitcoin.rocks" class="footer-link">hi@bitcoin.rocks</a>
                    </p>
                </div>
            </div><!--/footer-->`;

const rootDir = path.resolve(__dirname, '..');
const htmlFiles = findHtmlFiles(rootDir);

let updated = 0;
let skipped = 0;

for (const filePath of htmlFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Match the old footer block - various whitespace patterns
    // The old footer starts with <div class="footer"> and ends with </div><!--/footer-->
    const oldFooterRegex = /<div class="footer">\s*<p>\s*[\s\S]*?<\/p>\s*<\/div><!--\/footer-->/;
    
    if (oldFooterRegex.test(content)) {
        content = content.replace(oldFooterRegex, newFooter);
        fs.writeFileSync(filePath, content, 'utf8');
        const relPath = path.relative(rootDir, filePath);
        console.log(`✅ Updated: ${relPath}`);
        updated++;
    } else if (content.includes('class="footer"')) {
        const relPath = path.relative(rootDir, filePath);
        console.log(`⚠️  Has footer class but pattern didn't match: ${relPath}`);
        skipped++;
    }
}

console.log(`\nDone! Updated ${updated} files, ${skipped} skipped.`);
