/**
 * Creates Yoruba (yo) inflation.json translation file
 * Reads English source, copies currency-specific keys, translates generic ones
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'yo';
const today = '2026-04-12';

// Read English source
const enData = JSON.parse(fs.readFileSync(path.join(i18nDir, 'en', 'inflation_en.json'), 'utf8'));
const data = { ...enData };
data["@metadata"] = { "authors": ["Satoshi"], "last-updated": today, "locale": lang };

// Translate user-facing strings (currency-specific keys kept in English as they contain proper nouns/data)
Object.assign(data, {
	"bitcoin_doesnt_have_inflation": "Bitcoin K\u00f2 N\u00ed Ow\u00f3 \u1e62\u00ed\u1e62\u00e9",
	"inflation_definition": "Bitcoin n\u00ed \u00ecpese t\u00f3 w\u00e0 t\u00e8l\u1eb9\u0300 ti mili\u1ecd\u0301n\u00f9 21 ow\u00f3 t\u00ed a k\u00f2 l\u00e8 fi k\u00f9n. K\u00f2 d\u00e0b\u00ed \u00e0w\u1ecdn ow\u00f3 \u00eck\u00e1l\u1eb9\u0300, k\u00f2 s\u00ed \u1eb9\u0300n\u00edkan t\u00f3 l\u00e8 t\u1eb9\u0300 Bitcoin d\u00ed\u1eb9\u0300 s\u00ed\u00ec. Yan ow\u00f3 r\u1eb9 n\u00eds\u00e0l\u1eb9\u0300 l\u00e1ti k\u1eb9\u0301k\u1ecd\u0300\u1ecd\u0301 b\u00ed ow\u00f3 \u1e63\u00ed\u1e63\u00e9 \u1e63e \u0144 k\u00e0n agb\u00e1ra r\u00edr\u00e0 r\u1eb9 \u00e0ti b\u00ed Bitcoin \u1e63e l\u00e8 r\u00e0n l\u00f3\u0301w\u00f3\u0301.",
	"inflation_description": "Bitcoin n\u00ed \u00ecpese t\u00f3 w\u00e0 t\u00e8l\u1eb9\u0300 ti mili\u1ecd\u0301n\u00f9 21 Bitcoin t\u00ed yoo w\u00e0 l\u00e1\u00e9l\u00e1\u00e9. K\u00f2 s\u00ed \u1eb9\u0300n\u00edkan t\u00f3 l\u00e8 t\u1eb9\u0300 Bitcoin d\u00ed\u1eb9\u0300 s\u00ed\u00ec k\u00ed \u00f3 fa ow\u00f3 \u1e63\u00ed\u1e63\u00e9.",
	"inflation_sign_got_inflation": "\u1e62\u00c9 O N\u00cd OW\u00d3 \u1e62\u00cd\u1e62\u00c9?",
	"inflation_save_in_bitcoin": "FI PAM\u00d3 N\u00cdN\u00da BITCOIN",
	"inflation_sticker_cure": "\u1e62\u00c9 O N\u00cdL\u00d2 \u00c0\u00c0R\u00d2 F\u00daN OW\u00d3 \u1e62\u00cd\u1e62\u00c9?",
	"inflation_sticker_learn": "K\u1eb8\u0301K\u1ecc\u0300\u1ecc\u0301 B\u00cd BITCOIN \u1e62E L\u00c8 R\u00c0N L\u00d3\u0301W\u00d3\u0301",
	"inflation_sticker_got_inflation": "\u1e62\u00c9 O N\u00cd OW\u00d3 \u1e62\u00cd\u1e62\u00c9?",
	"inflation_sticker_what_if": "K\u00cdN\u00cd T\u00cd OW\u00d3 R\u1eb8 K\u00d2 B\u00c1 N\u00cd OW\u00d3 \u1e62\u00cd\u1e62\u00c9?",
	"inflation_sticker_lets_find_out": "\u1eb8 J\u1eb8\u0301 K\u00cd A W\u00c1 M\u1ecc\u0300",
	"inflation_sticker_bitcoin": "BITCOIN K\u00d2 N\u00cd OW\u00d3 \u1e62\u00cd\u1e62\u00c9",
	"inflation_sticker_your_money": "\u1e62\u00d9GB\u1ecc\u0301N OW\u00d3 R\u1eb8 N\u00cd \u00ed",
	"inflation_calculator_opt_out": "J\u00c1DE K\u00daR\u00d2 N\u00cdN\u00da OW\u00d3 \u1e62\u00cd\u1e62\u00c9",
	"inflation_calculator_with_bitcoin": "P\u1eb8\u0300L\u00da BITCOIN",
	"inflation_choose": "Yan ow\u00f3 r\u1eb9...",
	"inflation_choose_another": "Yan ow\u00f3 m\u00ecr\u00e0n",
	"inflation_us_dollar": "D\u1ecc\u0301L\u00c0 AM\u1eb8\u0301R\u00cdK\u00c0",
	"inflation_australian_dollar": "D\u1ecc\u0301L\u00c0 \u00d2STR\u00c9L\u00cd\u00c0",
	"inflation_brazilian_real": "REAL BRAZIL",
	"inflation_british_pound": "POUND G\u1eb8\u0300\u1eb8\u0301S\u00cc",
	"inflation_canadian_dollar": "D\u1ecc\u0301L\u00c0 K\u00c1N\u00c1D\u00c0",
	"inflation_euro": "EURO",
	"inflation_honduran_lempira": "LEMPIRA HONDURAS",
	"inflation_indian_rupee": "RUPEE INDIA",
	"inflation_israeli_shekel": "SHEKEL ISR\u00c9\u1eb8\u0301L\u00cc",
	"inflation_japanese_yen": "YEN JAP\u00c1\u00c0N\u00d9",
	"inflation_mexican_peso": "PESO M\u1eb8\u0301S\u00cdK\u00d2",
	"inflation_nz_dollar": "D\u1ecc\u0301L\u00c0 NEW ZEALAND",
	"inflation_philippine_peso": "PESO FILIPINO",
	"inflation_thai_baht": "BAHT THAI",
	"inflation_venezuelan_bolivar": "BOL\u00cdVAR VENEZUELA",
	"inflation_usd_s1_c1": "T\u00ed o b\u00e1 fi $100 s\u00edn\u00fa il\u00e9-\u00ecf\u00f2w\u00f3p\u00e0m\u00f3\u0301 n\u00ed \u1ecd\u0300d\u00fan 5 s\u1eb9\u0301y\u00ecn, o n\u00ed iye agb\u00e1ra r\u00edr\u00e0 t\u00f3 k\u00e9r\u00e9 j\u00f9 $100 l\u00f3n\u00ec\u00ed.",
	"inflation_usd_s1_c2": "agb\u00e1rap\u00f2",
	"inflation_usd_s1_c3": "l\u00e1t\u00ec \u1ecd\u0300d\u00fan $1 s\u1eb9\u0301y\u00ecn.",
	"inflation_usd_s1_c4": "O l\u00e8 \u1e63\u00ec n\u00ed $100 n\u00e1\u00e0 n\u00edn\u00fa \u00e0\u00e0k\u00f3s\u00edl\u1eb9\u0300 il\u00e9-\u00ecf\u00f2w\u00f3p\u00e0m\u00f3\u0301 r\u1eb9, \u1e63\u00f9gb\u1ecd\u0301n \u00f3 r\u00e0 oh\u00fan t\u00f3 k\u00e9r\u00e9 j\u00f9 \u00e8y\u00ed t\u00ed \u00f3 t\u00ed r\u00e0 t\u1eb9\u0301l\u1eb9\u0300.",
	"inflation_usd_but_why": "\u1e62\u00d9GB\u1ecc\u0301N K\u00cdL\u00d3DE?",
	"inflation_usd_s1_c5": "N\u00ed Or\u00edl\u1eb9\u0300-\u00e8d\u00e8 Am\u1eb9\u0301r\u00edk\u00e0, k\u00f2 s\u00ed opin t\u00f3 w\u00e0 t\u00e8l\u1eb9\u0300 l\u00f3r\u00ed m\u00e9l\u00f3 D\u1ecd\u0301l\u00e0 Am\u1eb9\u0301r\u00edk\u00e0 t\u00ed a l\u00e8 \u1e63\u1eb9\u0300d\u00e1. \u00ccpese a\u00ecl\u00f3pin y\u00ec\u00ed ni gb\u00f2\u0300ngb\u00f2 ow\u00f3 \u1e63\u00ed\u1e63\u00e9.",
	"inflation_usd_s1_c6": "L\u00e1t\u00ec 2020,",
	"inflation_usd_s1_c7": "l\u00e1p\u00e0p\u1ecd\u0300 D\u1ecd\u0301l\u00e0 Am\u1eb9\u0301r\u00edk\u00e0 ti p\u1ecd\u0300 s\u00ed\u00ec l\u00e1ti $4 tr\u00edli\u1ecd\u0301n\u00f9 s\u00ed $18 tr\u00edli\u1ecd\u0301n\u00f9.",
	"inflation_usd_s1_c8": "T\u00edt\u1eb9\u0300 ow\u00f3 y\u00ec\u00ed ti fa \u00ecg\u00e0s\u00edl\u1eb9\u0300 ow\u00f3 \u1e63\u00ed\u1e63\u00e9.",
	"inflation_usd_s1_c9": "Gbogbo n\u0144kan ow\u00f3 p\u1ecd\u0300 s\u00ed\u00ec b\u00e1y\u00ec\u00ed, n\u00edt\u00f3r\u00ed p\u00e9 t\u00edt\u1eb9\u0300 ow\u00f3 m\u00fa k\u00ed d\u1ecd\u0301l\u00e0 r\u1eb9 din iye.",
	"inflation_intro_c1": "Ow\u00f3 \u1e63\u00ed\u1e63\u00e9 m\u00e1a \u0144 \u1e63\u1eb9l\u1eb9\u0300 n\u00edgb\u00e0 t\u00ed a b\u00e1 t\u1eb9\u0300 ow\u00f3 d\u00ed\u1eb9\u0300 s\u00ed\u00ec t\u00e0b\u00ed \u1e63\u1eb9\u0300d\u00e1 r\u1eb9\u0300 l\u00e1ti \u00f2f\u00e9. \u00c8y\u00ed m\u00e1a \u0144 m\u00fa k\u00ed ow\u00f3 r\u1eb9 din iye p\u1eb9\u0300l\u00fa \u00e0k\u00f3k\u00f3.",
	"inflation_intro_c2": "B\u00ed a \u1e63e \u0144 \u1e63\u1eb9\u0300d\u00e1 ow\u00f3 d\u00ed\u1eb9\u0300 s\u00ed\u00ec n\u00edp\u00e0 \u00e0\u00ecn\u00ed ow\u00f3 \u00e0ti \u00e0w\u1ecdn of\u00ecn n\u00edna tuntun, ow\u00f3 t\u00ed o n\u00ed m\u00e1a \u0144 r\u00e0 oh\u00fan t\u00f3 k\u00e9r\u00e9 s\u00ed\u00ec b\u00ed \u00e0k\u00f3k\u00f3 \u1e63e \u0144 l\u1ecd. N\u00edt\u00f3r\u00ed p\u00e9 ow\u00f3 p\u00fap\u1ecd\u0300 ni a t\u1eb9\u0300 n\u00ed \u00e0w\u1ecdn \u1ecd\u0300d\u00fan d\u00ed\u1eb9\u0300 s\u1eb9\u0301y\u00ecn, iye ow\u00f3 n\u00edn\u00fa \u00e0\u00e0k\u00f3s\u00edl\u1eb9\u0300 il\u00e9-\u00ecf\u00f2w\u00f3p\u00e0m\u00f3\u0301 r\u1eb9 \u00e0ti \u00e0p\u00f2 r\u1eb9 ti din k\u00f9 p\u00fap\u1ecd\u0300 p\u1eb9\u0300l\u00fa \u00e0k\u00f3k\u00f3.",
	"inflation_intro_c3": "P\u1eb9\u0300l\u00fa Bitcoin, opin t\u00f3 w\u00e0 t\u00e8l\u1eb9\u0300 ti mili\u1ecd\u0301n\u00f9 21 Bitcoin t\u00ed yoo w\u00e0 l\u00e1\u00e9l\u00e1\u00e9 w\u00e0. N\u00edt\u00f3r\u00ed p\u00e9 a k\u00f2 l\u00e8 \u1e63\u1eb9\u0300d\u00e1 Bitcoin d\u00ed\u1eb9\u0300 s\u00ed\u00ec, iye w\u1ecdn ti p\u1ecd\u0300 s\u00ed\u00ec p\u00fap\u1ecd\u0300 p\u1eb9\u0300l\u00fa \u00e0k\u00f3k\u00f3.",
	"inflation_cause_header": "K\u00cdN\u00cd L\u00d3 \u0143 FA OW\u00d3 \u1e62\u00cd\u1e62\u00c9?",
	"inflation_cause_c1": "B\u00f3 til\u1eb9\u0300 j\u1eb9\u0301 p\u00e9 \u00e8t\u00f2 \u00ecpese \u00e0ti \u00e0w\u1ecdn il\u00e9-i\u1e63\u1eb9\u0301 kan \u0144 \u1e63e \u00e0\u1e63\u1eb9\u0300\u1e63\u1eb9 s\u00ed \u00e0w\u1ecdn iye t\u00f3 \u0144 ga l\u00e1\u00ecdi, gb\u00f2\u0300ngb\u00f2 ow\u00f3 \u1e63\u00ed\u1e63\u00e9 ni \u00ec\u1e63\u1eb9\u0300f\u00e0\u00e0g\u00e0 \u00ecpese ow\u00f3.",
	"inflation_cause_c2": "\u00c8y\u00ed j\u1eb9\u0301 \u00ec\u1e63\u1eb9\u0300f\u00e0\u00e0g\u00e0 nl\u00e1 \u00ecpese ow\u00f3 \u00f3 k\u00f2 s\u00ec n\u00ed yoo j\u1eb9\u0301 \u00ecgb\u00e0 \u00eck\u1eb9\u0300h\u00ecn t\u00ed \u00e8y\u00ed yoo \u1e63\u1eb9l\u1eb9\u0300.",
	"inflation_cause_c3": "N\u00edgb\u00e0 t\u00ed a b\u00e1 \u1e63\u1eb9\u0300d\u00e1 ow\u00f3 d\u00ed\u1eb9\u0300 s\u00ed\u00ec l\u00e1ti \u00f2f\u00e9, iye gbogbo n\u0144kan n\u00edn\u00fa ow\u00f3 n\u00e1\u00e0 m\u00e1a \u0144 ga. \u00c8y\u00ed p\u1eb9\u0300l\u00fa iye \u00e0w\u1ecdn ohun-\u00e8l\u00f2 aise t\u00ed \u00e0w\u1ecdn il\u00e9-i\u1e63\u1eb9\u0301 n\u00edl\u00f2 l\u00e1ti san f\u00fan \u00e0w\u1ecdn \u1ecd\u0300j\u00e0 w\u1ecdn, \u00e8y\u00ed t\u00fam\u1ecd\u0300 s\u00ed iye t\u00f3 ga f\u00fan \u1ecd.",
	"inflation_cause_c4": "Ow\u00f3 \u1e63\u00ed\u1e63\u00e9 k\u00f2 kan iye t\u00f3 \u0144 ga n\u00edkan. Ow\u00f3 \u1e63\u00ed\u1e63\u00e9 ni n\u00edgb\u00e0 t\u00ed ow\u00f3 r\u1eb9 b\u00e1 din iye p\u1eb9\u0300l\u00fa \u00e0k\u00f3k\u00f3.",
	"inflation_cic_header": "B\u00c1WO NI OW\u00d3 \u1e62\u00cd\u1e62\u00c9 \u1e62E \u0143 K\u00c0N MI?",
	"inflation_issuance_header": "\u1e62\u00c9 BITCOIN N\u00cd OW\u00d3 \u1e62\u00cd\u1e62\u00c9?",
	"inflation_issuance_c1": "Ow\u00f3 \u1e63\u00ed\u1e63\u00e9 n\u00ed p\u00e0t\u00e0k\u00ec p\u00e9 ap\u00e1 r\u1eb9 n\u00edn\u00fa 'ak\u00e0r\u00e0 ow\u00f3' \u0144 din k\u00f9 l\u00f3\u1ecd\u0300d\u00fan. N\u00edt\u00f3r\u00ed n\u00e1\u00e0 \u1e63\u00e9 Bitcoin n\u00ed ow\u00f3 \u1e63\u00ed\u1e63\u00e9?",
	"inflation_issuance_c2": "Bitcoin n\u00ed \u00ecpese t\u00f3 w\u00e0 t\u00e8l\u1eb9\u0300 ti 21,000,000 (mili\u1ecd\u0301n\u00f9 21) bitcoin t\u00ed yoo w\u00e0 l\u00e1\u00e9l\u00e1\u00e9. Opin \u00ecpese mili\u1ecd\u0301n\u00f9 21 ti w\u00e0 t\u00e8l\u1eb9\u0300 n\u00edn\u00fa koodu t\u00ed n\u1eb9\u0301t\u00edw\u1ecd\u0301\u1ecd\u0300k\u00ec k\u1ecd\u0300mp\u00fat\u00e0 t\u00f3 lagb\u00e1ra j\u00f9l\u1ecd l\u00e1gb\u00e1y\u00e9 \u0144 \u1e63e \u00e0\u00e0b\u00f2, t\u00ed a \u0144 p\u00e8 n\u00ed N\u1eb9\u0301t\u00edw\u1ecd\u0301\u1ecd\u0300k\u00ec Bitcoin. A k\u00f2 l\u00e8 y\u00ed opin y\u00ec\u00ed pad\u00e0.",
	"inflation_issuance_c3": "B\u00f3 til\u1eb9\u0300 j\u1eb9\u0301 p\u00e9 Bitcoin k\u00f2 n\u00ed ow\u00f3 \u1e63\u00ed\u1e63\u00e9, \u00f3 n\u00ed \u00ec\u1e63\u00e0j\u00e0d\u00e9. \u00cc\u1e63\u00e0j\u00e0d\u00e9 ni iye o\u1e63\u00f9w\u1ecd\u0301n Bitcoin tuntun t\u00ed a wa l\u00f3\u1ecd\u0300d\u00fan. \u00c0w\u1ecdn on\u00edwakusa Bitcoin m\u00e1a \u0144 \u1e63e \u00e0\u00e0b\u00f2 n\u1eb9\u0301t\u00edw\u1ecd\u0301\u1ecd\u0300k\u00ec, \u1e63e \u00e0w\u1ecdn i\u1e63\u00f2w\u00f2 Bitcoin, w\u1ecdn a s\u00ec gba ow\u00f3 f\u00fan i\u1e63\u1eb9\u0301 w\u1ecdn. \u00c0w\u1ecdn on\u00edwakusa Bitcoin m\u00e1a \u0144 gba ow\u00f3 p\u1eb9\u0300l\u00fa \u00ec\u1e63\u00e0j\u00e0d\u00e9 tuntun y\u00ec\u00ed (\u1e63\u00e1j\u00fa k\u00ed \u00f3 tan) \u00e0ti p\u00e9 w\u1ecdn m\u00e1a \u0144 gba ow\u00f3 \u00ecs\u00e0n i\u1e63\u00f2w\u00f2.",
	"inflation_issuance_c4": "Ju 95% gbogbo bitcoin ni a ti wa. Ju 99% gbogbo mili\u1ecd\u0301n\u00f9 21 bitcoin yoo ti j\u1eb9\u0301 wa n\u00ed \u1ecd\u0300d\u00fan 2035, \u00e0ti \u00ecy\u00f3k\u00f9 k\u00e9r\u00e9 j\u00f9 1% yoo j\u1eb9\u0301 wa n\u00ed \u1ecd\u0300d\u00fan 2140.",
	"inflation_issuance_c5": "P\u00e0\u00e0p\u00e0\u00e0 b\u00f3 til\u1eb9\u0300 j\u1eb9\u0301 p\u00e9 \u00ec\u1e63\u00e0j\u00e0d\u00e9 d\u00ed\u1eb9\u0300 \u1e63\u00ec k\u00f9 \u1e63\u00e1j\u00fa k\u00ed \u00ecpese mili\u1ecd\u0301n\u00f9 21 bitcoin t\u00f3 w\u00e0 t\u00e8l\u1eb9\u0300 par\u00ed, oh\u00fan p\u00e0t\u00e0k\u00ec ni p\u00e9 ap\u00e1 r\u1eb9 n\u00edn\u00fa ak\u00e0r\u00e0 mili\u1ecd\u0301n\u00f9 21 bitcoin k\u00f2 n\u00ed d\u00edn k\u00f9 l\u00e1\u00e9l\u00e1\u00e9. \u00c8y\u00ed y\u00e0t\u1ecd\u0300 p\u00e1t\u00e1p\u00e1t\u00e1 s\u00ed \u00e0w\u1ecdn ow\u00f3 \u00eck\u00e1l\u1eb9\u0300 t\u00ed a \u0144 l\u00f2. N\u00edn\u00fa \u00e0w\u1ecdn \u00e8t\u00f2 w\u1ecd\u0300ny\u00ed, ap\u00e1 r\u1eb9 n\u00edn\u00fa ak\u00e0r\u00e0 m\u00e1a \u0144 din k\u00f9 l\u00f3\u1ecd\u0300d\u00fan n\u00edgb\u00e0 t\u00ed a b\u00e1 t\u1eb9\u0300 ow\u00f3 d\u00ed\u1eb9\u0300 s\u00ed\u00ec l\u00e1ti \u00f2f\u00e9.",
	"inflation_issuance_c6": "O k\u00f2 l\u00e8 t\u1eb9\u0300 bitcoin d\u00ed\u1eb9\u0300 s\u00ed\u00ec.",
	"inflation_protect_header": "\u1e62\u00c9 BITCOIN L\u00c8 D\u00c0\u00c0B\u00d2 OW\u00d3 MI L\u00d3\u0301D\u00cc S\u00cd OW\u00d3 \u1e62\u00cd\u1e62\u00c9?",
	"inflation_protect_c1": "Bitcoin ti dara g\u00e1n l\u00e1ti d\u00e0\u00e0b\u00f2 \u00e0w\u1ecdn \u00e8n\u00ecy\u00e0n l\u1ecd\u0301d\u00ec s\u00ed ow\u00f3 \u1e63\u00ed\u1e63\u00e9 ow\u00f3 ag\u00b9b\u00e8gb\u00e8 w\u1ecdn. \u1ecc\u0300p\u1ecd\u0300l\u1ecd p\u1ecd\u0300 \u00e8n\u00ecy\u00e0n t\u00f3 l\u00f2 Bitcoin g\u00e9g\u00e9 b\u00ed \u00e0\u00e0b\u00f2 ow\u00f3 \u1e63\u00ed\u1e63\u00e9 m\u00e1a \u0144 fi pam\u00f3\u0301 ow\u00f3 t\u00ed w\u1ecdn l\u00e8 t\u1ecd\u0301j\u00fa b\u00ed\u00ed Bitcoin f\u00fan \u1ecd\u0300p\u1ecd\u0300l\u1ecd p\u1ecd\u0300 \u1ecd\u0300d\u00fan.",
	"inflation_protect_c2": "\u00ccpese Bitcoin t\u00f3 w\u00e0 t\u00e8l\u1eb9\u0300 m\u00fa k\u00ed \u00f3 j\u1eb9\u0301 \u00f2n\u00e0 t\u00f3 d\u00e1ra j\u00f9l\u1ecd l\u00e1ti fi ow\u00f3 r\u1eb9 pam\u00f3\u0301 f\u00fan \u00ecgb\u00e0 pip\u1eb9\u0301.",
	"inflation_protect_c3": "N\u00edgb\u00e0 t\u00ed o b\u00e1 fi pam\u00f3\u0301 n\u00edn\u00fa Bitcoin, gbogbo n\u0144kan m\u00e1a \u0144 poku n\u00ed \u00ecgb\u00e0 pip\u1eb9\u0301. N\u00edgb\u00e0 t\u00ed o b\u00e1 fi pam\u00f3\u0301 n\u00edn\u00fa ow\u00f3 \u00eck\u00e1l\u1eb9\u0300 t\u00ed w\u1ecdn l\u00e8 t\u1eb9\u0300 l\u00f3f\u1eb9\u0300\u1eb9\u0301, gbogbo n\u0144kan m\u00e1a \u0144 ow\u00f3 p\u1ecd\u0300 s\u00ed\u00ec.",
	"inflation_graphic_money_up": "B\u00ed iye ow\u00f3 t\u00ed a t\u1eb9\u0300 \u1e63e \u0144 ga...",
	"inflation_graphic_pp_down": "...agb\u00e1ra r\u00edr\u00e0 ow\u00f3 n\u00e1\u00e0 m\u00e1a \u0144 s\u00e0l\u1eb9\u0300."
});

const filePath = path.join(i18nDir, lang, `inflation_${lang}.json`);
fs.mkdirSync(path.dirname(filePath), { recursive: true });
fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
console.log(`CREATED: ${filePath}`);
console.log('\nDone! Inflation file created for Yoruba (yo).');
