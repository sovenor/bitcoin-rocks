#!/usr/bin/env node

/**
 * inject-faq-microdata.js
 * 
 * Adds Schema.org Question/Answer microdata attributes to Q&A sections
 * on inflation.html. This complements the existing FAQPage JSON-LD schema
 * by also marking up the HTML inline for AI engines.
 * 
 * Changes per Q&A section:
 *   - Parent <div class="text-box intro"> gets: itemscope itemprop="mainEntity" itemtype="https://schema.org/Question"
 *   - <h2> question heading gets: itemprop="name"
 *   - Answer content wrapped in: <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer"><div itemprop="text">...</div></div>
 * 
 * Zero visual change — only adds HTML attributes and thin wrapper divs.
 * Idempotent — safe to run multiple times.
 * 
 * Usage: node scripts/inject-faq-microdata.js
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'inflation.html');

// data-i18n keys of the Q&A section headings to mark up
const TARGET_KEYS = [
    'inflation_cause_header',      // WHAT CAUSES INFLATION?
    'inflation_issuance_header',   // DOES BITCOIN HAVE INFLATION?
    'common_what_is_bitcoin',      // WHAT IS BITCOIN?
    'inflation_protect_header',    // CAN BITCOIN PROTECT MY MONEY FROM INFLATION?
    'common_bitcoin_volatile',     // I HEARD BITCOIN IS VOLATILE. IS THAT SAFE?
    'common_bitcoin_afford',       // I CAN'T AFFORD A WHOLE BITCOIN
    'common_bitcoin_hacked',       // HAS BITCOIN EVER BEEN HACKED?
    'common_bitcoin_energy',       // WHY DOES BITCOIN USE ENERGY?
];

// Keys to skip (not pure Q&A — calculator section)
// 'inflation_cic_header' — HOW DOES INFLATION AFFECT ME? (interactive calculator)

let html = fs.readFileSync(filePath, 'utf8');

// Idempotency check
if (html.includes('itemprop="mainEntity"')) {
    console.log('FAQ microdata already present in inflation.html. 0 changes.');
    process.exit(0);
}

const lines = html.split('\n');
const result = [];
let changes = 0;
let i = 0;

while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Check if this line opens a text-box intro that contains a target Q&A heading
    if (trimmed === '<div class="text-box intro">') {
        // Look ahead (up to 5 lines) for a target h2
        let foundKey = null;
        let h2LineIdx = -1;
        
        for (let j = i + 1; j < Math.min(i + 6, lines.length); j++) {
            for (const key of TARGET_KEYS) {
                if (lines[j].includes(`data-i18n="${key}"`)) {
                    foundKey = key;
                    h2LineIdx = j;
                    break;
                }
            }
            if (foundKey) break;
        }
        
        if (foundKey) {
            // === This is a Q&A section — add microdata ===
            
            // 1. Add itemscope attributes to the text-box intro div
            result.push(line.replace(
                '<div class="text-box intro">',
                '<div class="text-box intro" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">'
            ));
            i++;
            
            // 2. Copy lines up to and including the h2, adding itemprop="name"
            while (i <= h2LineIdx) {
                let currentLine = lines[i];
                if (i === h2LineIdx) {
                    // Add itemprop="name" to the h2
                    currentLine = currentLine.replace(
                        `data-i18n="${foundKey}"`,
                        `data-i18n="${foundKey}" itemprop="name"`
                    );
                    result.push(currentLine);
                    i++;
                    
                    // 3. Insert opening answer wrapper divs
                    //    Use same indentation as the h2 line
                    const h2Indent = currentLine.match(/^(\s*)/)[1];
                    result.push('');
                    result.push(h2Indent + '<div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">');
                    result.push(h2Indent + '<div itemprop="text">');
                } else {
                    result.push(currentLine);
                    i++;
                }
            }
            
            // 4. Copy answer content lines until </div><!--/container-inner-->
            //    Then insert closing wrapper divs before it
            while (i < lines.length) {
                const currentLine = lines[i];
                
                if (currentLine.includes('</div><!--/container-inner-->')) {
                    const containerCloseIdx = currentLine.indexOf('</div><!--/container-inner-->');
                    const beforeClose = currentLine.substring(0, containerCloseIdx);
                    const theClose = currentLine.substring(containerCloseIdx);
                    
                    // Determine indentation for wrapper closing tags
                    const closeIndent = theClose.match(/^(\s*)/)[1];
                    const wrapperIndent = '                        '; // 24 spaces, matching h2 indent
                    
                    if (beforeClose.trim()) {
                        // Content before the closing div (e.g., bitcoin_afford section)
                        result.push(beforeClose);
                    }
                    
                    // Close the answer wrapper divs
                    result.push(wrapperIndent + '</div>');
                    result.push(wrapperIndent + '</div>');
                    
                    // Re-add the container-inner closing div
                    if (beforeClose.trim()) {
                        // It was on the same line as content, put it on its own line
                        result.push('                    </div><!--/container-inner-->');
                    } else {
                        // It was on its own line, keep original
                        result.push(currentLine);
                    }
                    
                    i++;
                    break;
                }
                
                result.push(currentLine);
                i++;
            }
            
            changes++;
            continue;
        }
    }
    
    result.push(line);
    i++;
}

html = result.join('\n');
fs.writeFileSync(filePath, html, 'utf8');
console.log(`Done. ${changes} Q&A sections enhanced with Schema.org Question/Answer microdata in inflation.html.`);
console.log(`Target keys: ${TARGET_KEYS.length} × 15 currency blocks = up to ${TARGET_KEYS.length * 15} sections.`);
console.log(`Actual sections found and modified: ${changes}`);
