/**
 * Creates Yoruba (yo) index.json translation file
 * Reads English source, copies author/link_type keys as-is, translates the rest
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'yo';
const today = '2026-04-12';

// Read English source
const enData = JSON.parse(fs.readFileSync(path.join(i18nDir, 'en', 'index_en.json'), 'utf8'));

// Start with English data (copies all author names, link types, etc.)
const data = { ...enData };

// Override metadata
data["@metadata"] = { "authors": ["Satoshi"], "last-updated": today, "locale": lang };

// Translate user-facing strings
Object.assign(data, {
	"bitcoin_builds_a_better_world": "Bitcoin \u0144 k\u00f3\u0300 \u00e0gb\u00e1y\u00e9 t\u00f3 d\u00e1ra j\u00f9l\u1ecd.",
	"home_description": "Bitcoin j\u1eb9\u0301 ow\u00f3 t\u00f3 d\u00e1ra j\u00f9l\u1ecd t\u00f3 \u0144 k\u00f3\u0300 \u00e0gb\u00e1y\u00e9 t\u00f3 d\u00e1ra j\u00f9l\u1ecd. Bitcoin ti d\u00e0\u00e0b\u00f2 \u1eb9\u0300t\u1ecd\u0301 \u00f2m\u00f2n\u00ecy\u00e0n, gba \u00e0w\u1ecdn \u00e8n\u00ecy\u00e0n l\u1ecd\u0301w\u1ecd\u0301 ow\u00f3 \u1e63\u00ed\u1e63\u00e9 t\u00f3 ga, \u1e63e \u00e0til\u1eb9\u0301y\u00ecn f\u00fan \u00e0w\u1ecdn ag\u00b9b\u00e8 agb\u00e8gb\u00e8, din itusilẹ\u0300 l\u00e1ti w\u00edwak\u00f2 e\u00e9p\u00f2 k\u00f9, \u00e0ti \u00f2p\u1ecd\u0300l\u1ecd p\u1ecd\u0300 d\u00ed\u1eb9\u0300 s\u00ed\u00ec.",
	"home_intro": "Bitcoin j\u1eb9\u0301 ow\u00f3 t\u00f3 d\u00e1ra j\u00f9l\u1ecd t\u00f3 \u0144 k\u00f3\u0300 \u00e0gb\u00e1y\u00e9 t\u00f3 d\u00e1ra j\u00f9l\u1ecd. T\u1eb9\u0300 \u00e0k\u00f3\u0300r\u00ed kan n\u00eds\u00e0l\u1eb9\u0300 l\u00e1ti k\u1eb9\u0301k\u1ecd\u0300\u1ecd\u0301 b\u00ed Bitcoin \u1e63e m\u00fa k\u00ed \u00f3 d\u00e1ra, t\u00e0b\u00ed k\u00e0n b\u1eb9\u0300r\u1eb9\u0300 y\u00ec k\u00e0l\u1eb9\u0300 l\u00e1ti \u1e63\u00e0w\u00e1r\u00ed.",
	"home_btn_money": "OW\u00d3 T\u00d3 D\u00c1RA J\u00d9L\u1ecc",
	"home_btn_salary": "OW\u00d3 O\u1e62\u00d9 R\u1eb8",
	"home_btn_freedom": "\u00d2M\u00ccN\u00ccRA",
	"home_btn_human_rights": "\u1eb8\u0300T\u00d3\u0301 \u00d2M\u00d2N\u00ccY\u00c0N",
	"home_btn_equality": "\u00ccD\u00d3GBAL\u00c9",
	"home_btn_property_rights": "\u1eb8\u0300T\u00d3\u0301 OHUN-\u00ccN\u00cd",
	"home_btn_housing": "IL\u00c9",
	"home_btn_business": "\u00d2W\u00d2 I\u1e62\u1eb8\u0301",
	"home_btn_crowdfunding": "OW\u00d3 \u00c0\u00c0W\u00d9J\u1ecc",
	"home_btn_energy": "AGBARA",
	"home_btn_environment": "AY\u00cdK\u00c1",
	"home_btn_food": "OUJ\u1eb8",
	"home_btn_art": "AW\u00d2R\u00c0N",
	"home_btn_politics": "OSELU",
	"home_btn_war": "OGUN",
	"home_btn_coding": "K\u00cdK\u00d3\u0300\u1eccD\u00d9",
	"home_btn_networks": "N\u1eb8\u0301T\u00cdW\u1ecc\u0301\u1ecc\u0300K\u00cc",
	"home_btn_payments": "\u00ccS\u00c0N OW\u00d3",
	"home_btn_self_custody": "\u00cc\u1e62\u00c0KOSO-AR\u00c0",
	"home_btn_you": "IW\u1ecc",
	"home_section_bitcoin_is": "BITCOIN J\u1eb8\u0301",
	"home_section_bitcoin_and": "BITCOIN &",
	"home_link_type_website": "OJ\u00da-\u00ccW\u00c9",
	"home_link_type_video": "F\u00cdD\u00cdO",
	"home_link_type_article": "\u00c0P\u00ccL\u1eb8\u0300K\u1ecc",
	"home_link_type_podcast": "P\u00d3D\u00edK\u00e1s\u00ect\u00ec",
	"home_link_type_business_kit": "OHUN-\u00c8L\u00d2 \u00d2W\u00d2 I\u1e62\u1eb8\u0301",
	"home_link_type_data": "D\u00c1T\u00c0",
	"home_link_type_research": "\u00ccW\u00c1D\u00cc\u00cd",
	"home_link_type_story": "\u00ccT\u00c0N",
	"home_link_type_book_excerpt": "AP\u00c1 \u00ccW\u00c9",
	"home_link_type_street_art": "AW\u00d2R\u00c0N \u00d2P\u00d3P\u00d3N\u00c0",
	"home_link_type_outreach": "\u00ccS\u00c0R\u00c9-\u00d2D\u00c8",
	"home_link_type_campaign": "\u00ccPOL\u00d3NG\u00d2",
	"home_link_type_software": "S\u1ecc\u0301F\u00cdT\u00ccW\u00c8\u00c0",
	"home_link_type_hardware": "H\u00c1D\u00ecW\u00c8\u00e0",
	"home_link_type_guide": "\u00c0M\u00d2\u0300N\u00c0",
	"home_link_type_email": "\u00ccM\u00c8\u00c8L\u00cc",
	"home_link_title_inflation": "Bitcoin K\u00f2 N\u00ed Ow\u00f3 \u1e62\u00ed\u1e62\u00e9",
	"home_link_title_bank_runs": "Bitcoin K\u00f2 N\u00ed \u00ccj\u00e0mb\u00e1 Il\u00e9-\u00ecf\u00f2w\u00f3p\u00e0m\u00f3\u0301",
	"home_link_title_gold": "Bitcoin p\u1eb9\u0300l\u00fa Goolu",
	"home_link_title_crypto": "Bitcoin p\u1eb9\u0300l\u00fa Crypto",
	"home_link_title_cash": "Bitcoin p\u1eb9\u0300l\u00fa Ow\u00f3 \u00c0\u00e0m\u00f9",
	"home_link_title_bonds": "Bitcoin p\u1eb9\u0300l\u00fa \u00c0w\u1ecdn \u00ccf\u00f2w\u00f3l\u00e9",
	"home_link_title_cbdc": "Bitcoin p\u1eb9\u0300l\u00fa \u00c0w\u1ecdn CBDC",
	"home_link_title_your_salary_1": "W\u00e1 m\u1ecd\u0300 iye t\u00ed ow\u00f3 o\u1e63\u00f9 r\u1eb9 n\u00edl\u00f2 l\u00e1ti p\u1ecd\u0300 s\u00ed l\u00e1ti b\u00e1 ow\u00f3 \u1e63\u00ed\u1e63\u00e9 mu.",
	"home_link_title_freedom_1": "K\u00edl\u00f3de T\u00ed Bitcoin Fi \u1e62e P\u00e0t\u00e0k\u00ec F\u00fan \u00d2m\u00ecn\u00ecra",
	"home_link_title_freedom_2": "Bitcoin p\u00e8\u1e63\u00e8 \u00f2m\u00ecn\u00ecra l\u00e1ti \u00ecn\u00ecl\u00e0r\u00e0 oselu",
	"home_link_title_human_rights_1": "B\u00ed Bitcoin \u1e62e \u0143 Fi D\u00ed \u1eb8\u0300t\u1ecd\u0301 \u00d2m\u00f2n\u00ecy\u00e0n M\u00fa l\u1eb9\u0301",
	"home_link_title_human_rights_2": "Iy\u00edpad\u00e0 Bitcoin T\u00f3 D\u00e1k\u1eb9\u0301 Ti Af\u00edr\u00edk\u00e0",
	"home_link_title_human_rights_3": "Bitcoin \u0143 D\u00e0\u00e0b\u00f2 \u1eb8\u0300t\u1ecd\u0301 \u00d2m\u00f2n\u00ecy\u00e0n L\u00e1gb\u00e1y\u00e9",
	"home_link_title_equality_1": "Bitcoin \u0143 M\u00fa \u00ccr\u00e8t\u00ed & \u00c0nf\u00e0\u00e0n\u00ed W\u00e1 S\u00ed South Africa",
	"home_link_title_equality_2": "B\u00ed Bitcoin \u1e62e L\u00e8 \u1e62e Iy\u00edpad\u00e0 F\u00fan \u00c0w\u1ecdn Ar\u00e1 Am\u1eb9\u0301r\u00edk\u00e0 D\u00fad\u00fa",
	"home_link_title_property_rights_1": "Bitcoin J\u1eb9\u0301 Ir\u00fa Ohun-\u00ecn\u00ed Pip\u00e9",
	"home_link_title_property_rights_2": "Bitcoin p\u1eb9\u0300l\u00fa Ohun-\u00ecn\u00ed Aj\u00e9",
	"home_link_title_housing_1": "B\u00ed Bitcoin Yoo \u1e62e M\u00fa K\u00ed Il\u00e9 Di Ohun T\u00ed A L\u00e8 Ra L\u00e9\u00e8k\u00e0n S\u00ed\u00ec",
	"home_link_title_business_3": "Bitcoin p\u1eb9\u0300l\u00fa \u00c0w\u1ecdn \u00d2h\u00fan-\u00ecn\u00ed",
	"home_link_title_business_1": "K\u1eb9\u0301k\u1ecd\u0300\u1ecd\u0301 K\u00edl\u00f3de T\u00ed Bitcoin Fi Dara F\u00fan \u00d2w\u00f2 I\u1e63\u1eb9\u0301",
	"home_link_title_business_2": "M\u00fa \u00d2w\u00f2 I\u1e63\u1eb9\u0301 Agb\u00e8gb\u00e8 Gba Bitcoin",
	"home_link_title_crowdfunding_1": "B\u00ed Bitcoin \u1e62e Pese Agb\u00e1ra F\u00fan \u00c0w\u1ecdn \u00c8h\u00f3n\u00fan\u00fa N\u00e0\u00ecj\u00edr\u00ed\u00e0 T\u00f3 T\u00f3bi J\u00f9l\u1ecd N\u00ed \u00ccr\u00e0nd\u00e9r\u00e0n Kan",
	"home_link_title_crowdfunding_2": "\u00c8h\u00f3n\u00fan\u00fa Aw\u1ecdn Aw\u00e0k\u1ecd\u0300 K\u00e1n\u00e1d\u00e0 Gba Ow\u00f3 N\u00edn\u00fa Bitcoin L\u00e9y\u00ecn T\u00ed GoFundMe Da Ow\u00f3 \u00ccr\u00e0nw\u00f3\u0301 D\u00far\u00f3",
	"home_link_title_crowdfunding_3": "Geyser = \u00c0w\u00f9j\u1ecd Ow\u00f3 P\u1eb9\u0300l\u00fa Bitcoin",
	"home_link_title_energy_1": "B\u00ed Bitcoin \u1e62e \u0143 M\u00fa N\u1eb9\u0301t\u00edw\u1ecd\u0301\u1ecd\u0300k\u00ec Agb\u00e1ra Texas Duro Sin",
	"home_link_title_energy_2": "K\u00edl\u00f3de t\u00ed Bitcoin fi \u0144 lo agb\u00e1ra?",
	"home_link_title_energy_3": "L\u00edl\u00f2 agb\u00e1ra Bitcoin k\u00f2 \u1e63e \u00ecs\u00f2ro. \u00c8y\u00ed ni \u00ecdj\u00fa.",
	"home_link_title_energy_4": "Iwakusa Bitcoin \u0144 m\u00fa \u00e0w\u1ecdn n\u1eb9\u0301t\u00edw\u1ecd\u0301\u1ecd\u0300k\u00ec agb\u00e1ra duro sin n\u00edp\u00e0 \u00ccda\u00e1hun \u00ccb\u00e8\u00e8r\u00e8",
	"home_link_title_energy_5": "\u00c0w\u1ecdn on\u00edwakusa Bitcoin \u0144 m\u00fa agb\u00e1ra omi w\u00e1 s\u00ed \u00e0w\u1ecdn \u00e0gb\u1eb9\u0300gb\u1eb9\u0300 \u00ecgl\u00e8 Af\u00edr\u00edk\u00e0",
	"home_link_title_energy_6": "B\u00ed Bitcoin \u1e62e \u0143 Gba Agb\u00e1ra A\u00ect\u00fan\u1e63e N\u00edy\u00e0nj\u00fa",
	"home_link_title_environment_1": "B\u00ed iwakusa Bitcoin \u1e63e \u0144 din itusilẹ\u0300 methane l\u00e1gb\u00e1y\u00e9 k\u00f9",
	"home_link_title_environment_2": "B\u00ed iwakusa Bitcoin \u1e63e gba \u1ecc\u0300g\u00e1n Or\u00edl\u1eb9\u0300-\u00e8d\u00e8 kan l\u00e0",
	"home_link_title_environment_3": "Bitcoin j\u1eb9\u0301 il\u00e9-i\u1e63\u1eb9\u0301 t\u00f3 m\u00f3\u0301t\u00f2t\u00f2 j\u00f9l\u1ecd l\u00f3r\u00ed Il\u1eb9\u0300 Ay\u00e9!",
	"home_link_title_environment_4": "Iwakusa Bitcoin \u0144 da gaas\u00ec ad\u00e1y\u00e9ba d\u00far\u00f3 l\u00e1ti b\u00e0 af\u00e9f\u00e9 j\u1eb9\u0301",
	"home_link_title_food_1": "B\u00ed Ow\u00f3 \u1e62\u00ed\u1e62\u00e9 \u1e62e \u0143 K\u00e0n Iye Ouj\u1eb9",
	"home_link_title_food_2": "B\u00ed Ow\u00f3 Fiat \u1e62e Bur\u00fa F\u00fan Ouj\u1eb9, \u00c0w\u1ecdn Oko, \u00c0ti Il\u1eb9\u0300",
	"home_link_title_fine_art": "Bitcoin p\u1eb9\u0300l\u00fa Aw\u00f2\u0300r\u00e0n Giga",
	"home_link_title_art_1": "Darap\u1ecd\u0300 m\u00f3\u0301 \u00ccpol\u00f3ng\u00f2 \u00c0m\u00ec \u00c0l\u00e8m\u00f3\u0301 Bitcoin Wa",
	"home_link_title_art_2": "Fi K\u00e1\u00e0d\u00ec Af\u00ecran\u1e63\u1eb9\u0301 Bitcoin Ran\u1e63\u1eb9\u0301 S\u00ed \u1eb8\u0300n\u00edkan T\u00ed O M\u1ecd\u0300",
	"home_link_title_art_3": "T\u1eb9\u0300 & Fi S\u00ed \u00c0w\u1ecdn \u00ccw\u00e9 P\u00edl\u00e0\u0144k\u00ec Bitcoin",
	"home_link_title_politics_1": "Bitcoin J\u1eb9\u0301 \u00c0r\u00f2s\u1ecd Oselu",
	"home_link_title_politics_2": "O L\u00e8 D\u00edb\u00f2 F\u00fan Ow\u00f3 T\u00f3 D\u00e1ra J\u00f9l\u1ecd",
	"home_link_title_war_1": "B\u00ed Bitcoin \u1e62e L\u00e8 Par\u00ed Ogun A\u00ecl\u1ecd\u0301pin",
	"home_link_title_war_2": "Bitcoin & \u00c0w\u1ecdn Vet\u00e9r\u00e0\u00e0n\u00ec: \u00ccbar\u00e9p\u1ecd\u0300 Aday\u00e9ba",
	"home_link_title_war_3": "B\u00ed Bitcoin \u1e62e \u0143 R\u00e0n \u00c0w\u1ecdn Ar\u00e1 Il\u00fa L\u00f3\u0301w\u00f3\u0301 L\u00e1ti S\u00e1 K\u00far\u00f2 N\u00edn\u00fa Ogun Sudan",
	"home_link_title_coding_1": "\u00c8k\u00f3\u0300 Al\u00e1bap\u00ednp\u00edn N\u00edpa Ap\u00e1 Im\u1ecd\u0300-\u1eb9\u0300r\u1ecd\u0300 Bitcoin",
	"home_link_title_coding_2": "bitcoinSwitch: m\u00fa \u00e8r\u1ecd kan\u0300kan\u0300 gba Bitcoin",
	"home_link_title_coding_3": "K\u1ecd koodu l\u00e1ti l\u00f3y\u00e9 \u00e0w\u1ecdn \u00e0\u1e63\u00ecr\u00ed Bitcoin",
	"home_link_title_networks_1": "\u00ccw\u00f2ran ta\u00e1r\u00e0 n\u1eb9\u0301t\u00edw\u1ecd\u0301\u1ecd\u0300k\u00ec Bitcoin",
	"home_link_title_networks_2": "Bitcoin p\u1eb9\u0300l\u00fa \u00c0w\u1ecdn Il\u00e9-\u00ecf\u00f2w\u00f3p\u00e0m\u00f3\u0301",
	"home_link_title_payments_1": "Bitcoin p\u1eb9\u0300l\u00fa Visa",
	"home_link_title_payments_2": "Wo Lightning Network (\u00ccS\u00e0n Ow\u00f3 Bitcoin L\u1eb9\u0301s\u1eb9\u0300k\u1eb9\u0300s\u1eb9\u0300)",
	"home_link_title_payments_3": "\u00c0p\u00f2 ow\u00f3 Bitcoin El Salvador l\u00e8 fi $400M pam\u00f3\u0301 l\u00f3\u1ecd\u0300d\u00fan n\u00edn\u00fa ow\u00f3 \u00ecs\u00e0n f\u00edfi ow\u00f3 ran\u1e63\u1eb9\u0301 s\u00edl\u00e9",
	"home_link_title_payments_4": "Gba \u00c0d\u00edr\u1eb9\u0301\u1e63\u00ec Lightning R\u1eb9 L\u00e1ti Gba \u00ccS\u00e0n Ow\u00f3 Bitcoin L\u1eb9\u0301s\u1eb9\u0300k\u1eb9\u0300s\u1eb9\u0300",
	"home_link_title_self_custody_1": "B\u00ed O \u1e62e L\u00e8 Pam\u00f3\u0301 Bitcoin R\u1eb9 L\u00e1\u00e0b\u00f2",
	"home_link_title_self_custody_2": "\u00c0w\u1ecdn \u00cdd\u00ed 6 L\u00e1ti Y\u1ecd\u0300 Bitcoin R\u1eb9 K\u00far\u00f2 L\u00e1ti \u00c0w\u1ecdn \u1ecc\u0300j\u00e0 P\u00e0\u1e63\u00edp\u00e0\u00e0r\u1ecd\u0300",
	"home_link_title_self_custody_3": "Goolu, Bitcoin, \u00e0ti \u00cc\u1e63\u00e0koso-Ar\u00e0",
	"home_link_title_get_started_1": "K\u1eb9\u0301k\u1ecd\u0300\u1ecd\u0301 \u00e0w\u1ecdn \u00ecp\u00ecl\u1eb9\u0300 Bitcoin",
	"home_link_title_get_started_2": "Gba \u00e0p\u00f2 ow\u00f3 Bitcoin \u00e0k\u1ecd\u0301k\u00f3\u0301 r\u1eb9",
	"home_link_title_get_started_3": "B\u00ed o \u1e63e l\u00e8 Ra Bitcoin"
});

const filePath = path.join(i18nDir, lang, `index_${lang}.json`);
fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${filePath}`);
console.log('\nDone! Index file created for Yoruba (yo).');
