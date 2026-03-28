#!/usr/bin/env node

/**
 * update-footer-i18n.js
 * Adds new footer translation keys to all common_*.json files
 * and updates existing keys for the new compact footer.
 */

const fs = require('fs');
const path = require('path');
const glob = require('path');

const i18nDir = path.resolve(__dirname, '..', 'i18n');
const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD

// New keys to add per language
// For non-English, we use English as placeholder (community translators will translate later)
const translations = {
    en: {
        common_footer_tagline: "Accelerating bitcoin adoption through education.",
        common_footer_about: "About",
        common_footer_contribute: "Contribute",
        common_footer_nostr: "Nostr"
    },
    de: {
        common_footer_tagline: "Bitcoin-Adoption durch Bildung beschleunigen.",
        common_footer_about: "Über uns",
        common_footer_contribute: "Beitragen",
        common_footer_nostr: "Nostr"
    },
    es: {
        common_footer_tagline: "Acelerando la adopción de bitcoin a través de la educación.",
        common_footer_about: "Acerca de",
        common_footer_contribute: "Contribuir",
        common_footer_nostr: "Nostr"
    },
    fr: {
        common_footer_tagline: "Accélérer l'adoption du bitcoin par l'éducation.",
        common_footer_about: "À propos",
        common_footer_contribute: "Contribuer",
        common_footer_nostr: "Nostr"
    },
    pt: {
        common_footer_tagline: "Acelerando a adoção do bitcoin através da educação.",
        common_footer_about: "Sobre",
        common_footer_contribute: "Contribuir",
        common_footer_nostr: "Nostr"
    },
    nl: {
        common_footer_tagline: "Bitcoin-adoptie versnellen door middel van educatie.",
        common_footer_about: "Over ons",
        common_footer_contribute: "Bijdragen",
        common_footer_nostr: "Nostr"
    },
    bg: {
        common_footer_tagline: "Ускоряване на приемането на биткойн чрез образование.",
        common_footer_about: "За нас",
        common_footer_contribute: "Допринесете",
        common_footer_nostr: "Nostr"
    },
    id: {
        common_footer_tagline: "Mempercepat adopsi bitcoin melalui edukasi.",
        common_footer_about: "Tentang",
        common_footer_contribute: "Kontribusi",
        common_footer_nostr: "Nostr"
    },
    th: {
        common_footer_tagline: "เร่งการยอมรับบิตคอยน์ผ่านการศึกษา",
        common_footer_about: "เกี่ยวกับเรา",
        common_footer_contribute: "มีส่วนร่วม",
        common_footer_nostr: "Nostr"
    }
};

// Find all common JSON files
const langDirs = fs.readdirSync(i18nDir, { withFileTypes: true })
    .filter(d => d.isDirectory())
    .map(d => d.name);

let updated = 0;

for (const lang of langDirs) {
    const filePath = path.join(i18nDir, lang, `common_${lang}.json`);
    
    if (!fs.existsSync(filePath)) {
        console.log(`⏭️  No common file for: ${lang}`);
        continue;
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);
    
    // Get translations for this language (fall back to English)
    const langTranslations = translations[lang] || translations.en;
    
    // Add/update keys
    for (const [key, value] of Object.entries(langTranslations)) {
        json[key] = value;
    }
    
    // Update last-updated date
    if (json['@metadata']) {
        json['@metadata']['last-updated'] = today;
    }
    
    // Write back with tab indentation to match existing format
    fs.writeFileSync(filePath, JSON.stringify(json, null, '\t') + '\n', 'utf8');
    console.log(`✅ Updated: i18n/${lang}/common_${lang}.json`);
    updated++;
}

console.log(`\nDone! Updated ${updated} common JSON files.`);
