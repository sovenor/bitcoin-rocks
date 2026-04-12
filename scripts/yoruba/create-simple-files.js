/**
 * Creates Yoruba (yo) translation files for small/simple pages:
 * 404, about, success pages, calculator, nostr
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'yo';
const today = '2026-04-12';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// 404
writeFile(`404_${lang}.json`, {
	"404_title": "A\u1e63\u00ec\u1e63e 404 | A k\u00f2 r\u00ed Oj\u00fa-\u00ecw\u00e9 n\u00e1\u00e0",
	"404_message": "OJ\u00da-\u00ccW\u00c9 T\u00cd FO Y\u00cc\u00cd K\u00d2 DARA R\u00c1R\u00c1",
	"404_home": "PAD\u00c0 S\u00cdL\u00c9 N\u00cdL\u00c9"
});

// about
writeFile(`about_${lang}.json`, {
	"about_page_title": "N\u00edpa bitcoin.rocks \u2014 \u1eb8\u0300k\u00f3\u0300 Bitcoin L\u00e1ti 2022",
	"about_description": "bitcoin.rocks j\u1eb9\u0301 oj\u00fa-\u00ecw\u00e9 \u1eb9\u0300k\u00f3\u0300 Bitcoin \u00f2f\u1eb9\u0301\u1eb9\u0301, or\u00ed\u1e63\u00ecr\u00ed\u1e63\u00ec gbangba t\u00ed a d\u00e1 sil\u1eb9\u0300 n\u00ed 2022. \u00c0f\u00e0\u00e0n\u00ec wa ni l\u00e1ti m\u00fa gb\u00edgb\u00e0 Bitcoin y\u00e1r\u00e1 n\u00edp\u00e0 \u1eb9\u0300k\u00f3\u0300.",
	"about_header": "N\u00cdPA",
	"about_header_2": "BITCOIN.ROCKS",
	"about_mission_header": "\u00c0f\u00e0\u00e0n\u00ec Wa",
	"about_mission_1": "A d\u00e1 bitcoin.rocks sil\u1eb9\u0300 n\u00ed 2022 p\u1eb9\u0300l\u00fa \u00e0f\u00e0\u00e0n\u00ec t\u00f3 r\u1ecd\u0300r\u00f9n: l\u00e1ti m\u00fa gb\u00edgb\u00e0 Bitcoin y\u00e1r\u00e1 n\u00edp\u00e0 \u1eb9\u0300k\u00f3\u0300.",
	"about_mission_2": "A w\u00e0 l\u00e1ti j\u1eb9\u0301 at\u00f2k\u00e0 \u00e0k\u00f3\u0300k\u00f3\u0300 t\u00ed \u00ec w\u00f3 p\u00edn p\u1eb9\u0300l\u00fa \u1eb9\u0300n\u00edkan\u0300kan t\u00f3 f\u1eb9\u0301 m\u1ecd\u0300 n\u00edpa Bitcoin. Ib\u00ec b\u00edb\u1eb9\u0300r\u1eb9\u0300 t\u00ed \u00f3 r\u1ecd\u0300r\u00f9n l\u00e1ti m\u1ecd\u0300 t\u00ed \u00f3 \u1e63\u00e0l\u00e0y\u00e9 b\u00ed Bitcoin \u1e63e \u0144 k\u00f3\u0300 \u00e0gb\u00e1y\u00e9 t\u00f3 d\u00e1ra j\u00f9l\u1ecd.",
	"about_mission_3": "\u1ecc\u0300p\u1ecd\u0300l\u1ecd p\u1ecd\u0300 \u00e8n\u00ecy\u00e0n k\u00f2 l\u00f3y\u00e9 Bitcoin t\u00e0b\u00ed k\u00ec \u00ec t\u00ed\u00ec fi h\u00e0n w\u1ecdn n\u00ed \u00f2n\u00e0 t\u00f3 t\u00f3\u0300 r\u00ed. A f\u1eb9\u0301 y\u00ed iy\u00ed pad\u00e0 n\u00edp\u00e0 p\u00edp\u00e8\u1e63\u00e8 \u00e0k\u00f3\u0300\u00f3n\u00fa \u1eb9\u0300k\u00f3\u0300 \u00f2f\u1eb9\u0301\u1eb9\u0301 t\u00f3 ga j\u00f9l\u1ecd t\u00ed gbogbo \u00e8n\u00ecy\u00e0n l\u00e8 l\u00f3y\u00e9.",
	"about_what_we_do_header": "Oh\u00fan T\u00ed A \u0143\u1e62e",
	"about_what_we_do_1": "A \u0144 d\u00e1 \u00e0k\u00f3\u0300\u00f3n\u00fa \u1eb9\u0300k\u00f3\u0300 Bitcoin \u00f2f\u1eb9\u0301\u1eb9\u0301 f\u00fan \u00e0w\u1ecdn t\u00f3 \u1e63\u1eb9\u0300\u1e63\u1eb9\u0300 d\u00e9 Bitcoin. Oj\u00fa-\u00ecw\u00e9 wa b\u00f3 \u00e0w\u1ecdn \u00e0k\u00f3\u0300r\u00ed b\u00ed\u00ed ow\u00f3 \u1e63\u00ed\u1e63\u00e9, \u00ec\u1e63\u00e0koso-ar\u00e0, \u00e0p\u00f2 ow\u00f3, Lightning Network, \u00e0ti b\u00ed Bitcoin \u1e63e \u0144 w\u00e9 p\u1eb9\u0300l\u00fa \u00e0w\u1ecdn \u1ecd\u0300r\u1ecd\u0300 \u00e0ti \u00e0w\u1ecdn \u00f2n\u00e0 \u00ecs\u00e0n-ow\u00f3 m\u00ecr\u00e0n.",
	"about_what_we_do_2a": "A m\u00e1a \u0144 ran ",
	"about_what_we_do_2b": "\u00e0w\u1ecdn \u00e0m\u00ec \u00e0l\u00e8m\u00f3\u0301 Bitcoin \u00f2f\u1eb9\u0301\u1eb9\u0301",
	"about_what_we_do_2c": " s\u00ed il\u1eb9\u0300k\u00f9n r\u1eb9 k\u00ed o l\u00e8 r\u00e0n l\u00f3\u0301w\u00f3\u0301 t\u00e0n\u0300k\u00e0l\u1eb9\u0300 \u00ecm\u1ecd\u0300 Bitcoin n\u00ed \u00e0gb\u1eb9\u0300gb\u1eb9\u0300 r\u1eb9. \u1ecc\u0300g\u1ecd\u0300r\u00f9n \u00e8n\u00ecy\u00e0n \u0144 wo \u00e0w\u1ecdn koodu QR l\u00f3r\u00ed \u00e0w\u1ecdn \u00e0m\u00ec \u00e0l\u00e8m\u00f3\u0301 w\u1ecd\u0300ny\u00ed l\u00f3\u1e63o\u1ecd\u0300\u1e63\u00e8 l\u00e1ti k\u1eb9\u0301k\u1ecd\u0300\u1ecd\u0301 n\u00edpa Bitcoin.",
	"about_what_we_do_3a": "A t\u00fan \u0144 p\u00e8\u1e63\u00e8 ",
	"about_what_we_do_3b": "\u00e0w\u1ecdn \u00ecw\u00e9 p\u00edl\u00e0\u0144k\u00ec t\u00ed a l\u00e8 t\u1eb9\u0300",
	"about_what_we_do_3c": " \u00e0ti ",
	"about_what_we_do_3d": "\u00e0w\u1ecdn ohun-\u00e8l\u00f2 \u00f2w\u00f2 i\u1e63\u00e9",
	"about_what_we_do_3e": " f\u00fan \u1eb9\u0300n\u00edkan\u0300kan t\u00f3 f\u1eb9\u0301 r\u00e0n l\u00f3\u0301w\u00f3\u0301 l\u00e1ti m\u00fa \u00e0w\u1ecdn \u00f2w\u00f2 i\u1e63\u00e9 ag\u00b9b\u00e8gb\u00e8 gb\u00e0 \u00ecs\u00e0n ow\u00f3 Bitcoin.",
	"about_what_we_do_4": "Gbogbo \u00e0k\u00f3\u0300\u00f3n\u00fa wa gbogb\u1ecd gba p\u00e9 ol\u00f9k\u00e0 k\u00f2 n\u00ed \u00ecm\u1ecd\u0300 Bitcoin t\u1eb9\u0301l\u1eb9\u0300. B\u00f3y\u00e1 o \u1e63\u1eb9\u0300\u1e63\u1eb9\u0300 d\u00e9 Bitcoin t\u00e0b\u00ed o j\u1eb9\u0301 Bitcoiner t\u00f3 t\u00ed p\u00e9 t\u00f3 \u0144 w\u00e1 oh\u00fan l\u00e1ti p\u00edn, bitcoin.rocks j\u1eb9\u0301 t\u00edr\u1eb9.",
	"about_editorial_header": "\u00d2n\u00e0 T\u00ed A \u1e62e \u0143 K\u1ecd \u00c0k\u00f3\u0300\u00f3n\u00fa",
	"about_editorial_1": "Gbogbo \u00e0k\u00f3\u0300\u00f3n\u00fa l\u00f3r\u00ed bitcoin.rocks a m\u00e1a \u0144 y\u00e0n r\u1eb9\u0300 \u00e0ti \u1e63\u00e0y\u1eb9\u0300w\u00f2 \u00f2t\u00edt\u1ecd\u0301 r\u1eb9\u0300. N\u00edgb\u00e0 t\u00ed a b\u00e1 lo d\u00e1t\u00e0 t\u00e0b\u00ed \u00e0w\u1ecdn \u00ec\u1e63\u00ecr\u00f2, a m\u00e1a \u0144 t\u00f3k\u00e0 s\u00ed or\u00eds\u00fan wa k\u00ed o l\u00e8 \u1e63\u00e0y\u1eb9\u0300w\u00f2 \u00e0l\u00e0y\u00e9 funra r\u1eb9.",
	"about_editorial_2": "A m\u00e1a \u0144 so m\u00f3\u0301 \u00e0w\u1ecdn or\u00eds\u00fan t\u00ed a gb\u00e9k\u1eb9\u0300l\u00e9 b\u00ed\u00ed TIME Magazine, Forbes, MIT Technology Review, Lyn Alden, \u00e0ti \u1ecd\u0300p\u1ecd\u0300l\u1ecd p\u1ecd\u0300 m\u00ecr\u00e0n. A gb\u00e0gb\u1ecd\u0301 p\u00e9 Bitcoin m\u00e1a \u0144 s\u1ecd f\u00fan ara r\u1eb9\u0300 n\u00edgb\u00e0 t\u00ed a b\u00e1 fi \u00f2t\u00edt\u1ecd\u0301 h\u00e0n l\u00e9d\u00e8d\u00e8.",
	"about_editorial_3": "A m\u00e1a \u0144 \u1e63\u00e0y\u1eb9\u0300w\u00f2 \u00e0k\u00f3\u0300\u00f3n\u00fa wa n\u00edgb\u00e0gb\u00edgb\u00e0 \u00e0ti \u00ec\u1e63\u00e0j\u00fa r\u1eb9\u0300 l\u00e1ti r\u00ed d\u00e1j\u00fa p\u00e9 \u00f3 p\u00e9 \u00e0ti p\u00e9 \u00f3 t\u00fan\u0300t\u00fan. Gbogbo \u00e0k\u00f3\u0300\u00f3n\u00fa j\u1eb9\u0301 n\u00edpa \u1eb9\u0300k\u00f3\u0300 Bitcoin n\u00edkan.",
	"about_open_source_header": "Or\u00ed\u1e63\u00ecr\u00ed\u1e63\u00ec Gbangba",
	"about_open_source_1a": "bitcoin.rocks j\u1eb9\u0301 i\u1e63\u1eb9\u0301 \u00e0k\u00e0n\u0300\u1e63e or\u00ed\u1e63\u00ecr\u00ed\u1e63\u00ec gbangba \u00f2f\u1eb9\u0301\u1eb9\u0301 l\u00e1b\u1eb9\u0301 \u00c0\u1e63\u1eb9 MIT. Gbogbo koodu wa w\u00e0 f\u00fan gbogbo \u00e8n\u00ecy\u00e0n ",
	"about_open_source_1b": "l\u00f3r\u00ed GitHub",
	"about_open_source_1c": ".",
	"about_open_source_2": "\u1eb8\u0300n\u00edkan\u0300kan l\u00e8 \u1e63e \u00e0\u1e63\u1eb9\u0300\u1e63\u1eb9 s\u00ed bitcoin.rocks. A k\u00e1ab\u1ecd\u0300 \u00e0w\u1ecdn ogb\u00f2n \u00ect\u00fam\u1ecd\u0300 n\u00ed p\u00e0\u00e0p\u00e0\u00e0 t\u00f3 m\u00e1a \u0144 r\u00e0n l\u00f3\u0301w\u00f3\u0301 l\u00e1ti m\u00fa k\u00ed \u00e0k\u00f3\u0300\u00f3n\u00fa wa d\u00e9 \u00e0w\u1ecdn \u00e8n\u00ecy\u00e0n l\u00e1gb\u00e0y\u00e9.",
	"about_open_source_3": "\u1eccp\u1eb9\u0301 \u00e0gb\u1eb9\u0300gb\u1eb9\u0300 \u00e0w\u1ecdn ogb\u00f2n \u00ect\u00fam\u1ecd\u0300 \u00e0t\u00ecnuw\u00e1, bitcoin.rocks w\u00e0 n\u00ed \u00e8d\u00e8 55 l\u00f3\u0301w\u00f3\u0301l\u00f3\u0301w\u00f3\u0301 \u00f3 s\u00ec \u0144 d\u00e0g\u00e0.",
	"about_open_source_contribute": "K\u1eb9\u0301k\u1ecd\u0300\u1ecd\u0301 b\u00ed o \u1e63e l\u00e8 \u1e63e \u00e0\u1e63\u1eb9\u0300\u1e63\u1eb9.",
	"about_contact_header": "Kan S\u00ed Wa",
	"about_contact_1": "A f\u1eb9\u0301 gb\u1ecd\u0301 l\u00e1ti \u1ecd\u0300d\u1ecd\u0300 r\u1eb9. B\u00f3y\u00e1 o n\u00ed \u00ecb\u00e8\u00e8r\u00e8, \u00e0b\u00e0 t\u00e0b\u00ed o f\u1eb9\u0301 k\u00ed wa n\u00edkan, kan s\u00ed wa n\u00ed \u00e0k\u00f3k\u00f3\u00e0k\u00f3k\u00f3.",
	"about_contact_email": "\u00ccm\u00e8\u00e8l\u00ec:",
	"about_contact_nostr": "Nostr:",
	"about_contact_github": "GitHub:"
});

// sticker-success
writeFile(`sticker-success_${lang}.json`, {
	"sticker_success_1": "Iw\u1ecd gba \u00e0w\u1ecdn \u00e0m\u00ec \u00e0l\u00e8m\u00f3\u0301 r\u1eb9 l\u00e1\u00e0r\u00ecn \u1ecd\u0300s\u1eb9\u0300 2 s\u00ed 4. N\u00edgb\u00e0 t\u00ed o b\u00e1 \u0144 duro de, gb\u00edy\u00e0nj\u00fa l\u00e1ti ro ib\u00ec t\u00f3 d\u00e1ra l\u00e1ti fi \u00e0w\u1ecdn \u00e0m\u00ec \u00e0l\u00e8m\u00f3\u0301 r\u1eb9 s\u00ed!",
	"sticker_success_2": "\u00c0w\u1ecdn ib\u00ec t\u00f3 d\u00e1ra f\u00fan \u00e0m\u00ec \u00e0l\u00e8m\u00f3\u0301 ni:",
	"sticker_success_list_1": "n\u00ed ib\u00ec gbangba t\u00ed \u00e0w\u1ecdn \u00e8n\u00ecy\u00e0n yoo r\u00ed w\u1ecdn",
	"sticker_success_list_2": "n\u00ed \u00e0w\u1ecdn ib\u00ec t\u00ed a k\u00f2 n\u00ed l\u00e1ti y\u1ecd\u0300 w\u1ecdn k\u00far\u00f2 n\u00ed k\u00ecy\u00e0 (\u00e0w\u1ecdn \u00e0m\u00ec \u00e0l\u00e8m\u00f3\u0301 k\u00ec\u00ed fa \u00ecb\u00e0j\u1eb9\u0301 \u00e0y\u1eb9r\u00e1y\u00e9)",
	"sticker_success_list_3": "l\u00f3r\u00ed \u00e0w\u1ecdn ojuirin t\u00ed w\u1ecdn yoo l\u00e8m\u00f3\u0301 s\u00ed n\u00ed \u00ecr\u1ecd\u0300r\u00f9n (irin, p\u00edl\u00e1\u00e0s\u00ect\u00edk\u00ec, d\u00edg\u00ed)",
	"sticker_success_list_4": "K\u00cc fi s\u00ed ohun-\u00ecn\u00ed a\u00e0r\u00ecn, l\u00f3r\u00ed \u00e0m\u00ec \u00f2n\u00e0, \u00e0w\u1ecdn ATM, t\u00e0b\u00ed \u00e0w\u1ecdn \u00e8r\u00f9 e\u00e9p\u00f2 pon",
	"sticker_success_3": "\u1e62\u00e9 o f\u1eb9\u0301 r\u00ed ib\u00ec t\u00ed \u00e0w\u1ecdn \u00e8n\u00ecy\u00e0n m\u00ecr\u00e0n \u0144 fi \u00e0m\u00ec \u00e0l\u00e8m\u00f3\u0301 w\u1ecdn s\u00ed?",
	"sticker_success_flyers_bar_new": "TUNTUN!",
	"sticker_success_flyers_bar_cta": "T\u1eb9\u0300 & Fi s\u00ed \u00c0w\u1ecdn \u00ccw\u00e9 P\u00edl\u00e0\u0144k\u00ec Bitcoin \u2192"
});

// sticker-language-success
writeFile(`sticker-language-success_${lang}.json`, {
	"sticker_language_success_1": "A ti gba \u00ecb\u00e8\u00e8r\u00e8 r\u1eb9 d\u00e1ad\u00e1a.",
	"sticker_language_success_2": "A m\u00e1a \u0144 \u1e63\u00e0j\u00e0d\u00e9 \u00e0w\u1ecdn f\u00e1\u00ecl\u00ec t\u00edtun n\u00ed \u00e0k\u00f3j\u1ecd, n\u00edt\u00f3r\u00ed n\u00e1\u00e0 \u00f3 l\u00e8 gba \u1ecd\u0300s\u1eb9\u0300 p\u00fap\u1ecd\u0300 k\u00ed \u00e0w\u1ecdn f\u00e1\u00ecl\u00ec w\u1ecd\u0300ny\u00ed w\u00e0 l\u00e1ti gba\u0300. \u1e62\u00e0y\u1eb9\u0300w\u00f2 pad\u00e0 l\u00e1\u00ecp\u1eb9\u0301!"
});

// postcard-success
writeFile(`postcard-success_${lang}.json`, {
	"postcard_success_1": "Iw\u1ecd gba \u00e0w\u1ecdn k\u00e1\u00e0d\u00ec af\u00ecran\u1e63\u1eb9\u0301 r\u1eb9 l\u00e1\u00e0r\u00ecn \u1ecd\u0300s\u1eb9\u0300 1 s\u00ed 2.",
	"postcard_success_2": "O \u1e63e un, o \u0144 r\u00e0n l\u00f3\u0301w\u00f3\u0301 l\u00e1ti m\u00fa gb\u00edgb\u00e0 Bitcoin y\u00e1r\u00e1 n\u00edp\u00e0 fifi \u00e0w\u1ecdn k\u00e1\u00e0d\u00ec w\u1ecd\u0300ny\u00ed ran\u1e63\u1eb9\u0301 s\u00ed \u1eb9\u0300n\u00edkan t\u00ed o m\u1ecd\u0300!"
});

// sign-success
writeFile(`sign-success_${lang}.json`, {
	"sign_success_1": "Iw\u1ecd gba \u00e0w\u1ecdn \u00e0m\u00ec \u00e0fi\u00edh\u00e0n r\u1eb9 l\u00e1\u00e0r\u00ecn \u1ecd\u0300s\u1eb9\u0300 1 s\u00ed 2. N\u00edgb\u00e0 t\u00ed o b\u00e1 \u0144 duro de, gb\u00edy\u00e0nj\u00fa l\u00e1ti ro \u00e0w\u1ecdn ib\u00ec t\u00f3 d\u00e1ra l\u00e1ti fi \u00e0w\u1ecdn \u00e0m\u00ec \u00e0fi\u00edh\u00e0n r\u1eb9 s\u00ed!",
	"sign_success_3": "\u1e62\u00e9 o f\u1eb9\u0301 r\u00ed ib\u00ec t\u00ed \u00e0w\u1ecdn \u00e8n\u00ecy\u00e0n m\u00ecr\u00e0n \u0144 fi \u00e0w\u1ecdn \u00e0m\u00ec \u00e0fi\u00edh\u00e0n w\u1ecdn s\u00ed?",
	"signs_share_header": "PIN \u00c0W\u1eccN IB\u00cc \u00c0M\u00cc \u00c0FI\u00cdH\u00c0N R\u1eb8",
	"signs_share_c1": "Pin \u00e0w\u1ecdn f\u1ecd\u0301t\u00f2 \u00e0w\u1ecdn ib\u00ec \u00e0m\u00ec \u00e0fi\u00edh\u00e0n r\u1eb9 p\u1eb9\u0300l\u00fa wa l\u00f3r\u00ed Nostr \u00e0ti \u00e0 \u00f3 zap sats f\u00fan \u1ecd! Sats j\u1eb9\u0301 \u00e0w\u1ecdn \u00eck\u00e9k\u00e8r\u00e9 ap\u00e1 bitcoin.",
	"signs_btn_share_on_nostr": "PIN L\u00d3R\u00cd NOSTR",
	"signs_btn_what_is_nostr": "K\u00cdN\u00cd NI NOSTR?"
});

// compound-inflation-calculator
writeFile(`compound-inflation-calculator_${lang}.json`, {
	"cic_header": "A\u1e62\u1eb8\u0300\u00cc\u1e62IR\u00d2 OW\u00d3 \u1e62\u00cd\u1e62\u00c9 AGBARA-MEJI",
	"cic_description": "Lo A\u1e63\u1eb9\u0300\u00ec\u1e63ir\u00f2 Ow\u00f3 \u1e62\u00ed\u1e62\u00e9 Agbara-meji y\u00ec\u00ed l\u00e1ti m\u1ecd\u0300 iye t\u00ed ow\u00f3 o\u1e63\u00f9 r\u1eb9 n\u00edl\u00f2 l\u00e1ti p\u1ecd\u0300 s\u00ed l\u00e1ti b\u00e1 ow\u00f3 \u1e63\u00ed\u1e63\u00e9 mu.",
	"what_can_i_do_about": "K\u00edni mo l\u00e8 \u1e63e n\u00edpa",
	"what_can_i_do_about_2": "ow\u00f3 \u1e63\u00ed\u1e63\u00e9?",
	"cic_inflation_cta": "J\u00e1de K\u00far\u00f2 n\u00edn\u00fa Ow\u00f3 \u1e62\u00ed\u1e62\u00e9 P\u1eb9\u0300l\u00fa Bitcoin"
});

// nostr/index
writeFile(`nostr/index_${lang}.json`, {
	"escape_the_matrix_with_nostr": "S\u00e1 Kuro ninu Matrix P\u1eb9\u0300l\u00fa Nostr",
	"nostr_header": "S\u00c1 KURO NINU MATRIX P\u1eb8\u0300L\u00da NOSTR"
});

// nostr/what-is-nostr
writeFile(`nostr/what-is-nostr_${lang}.json`, {
	"what_is_nostr": "K\u00edni Nostr?",
	"what_is_nostr_header": "K\u00cdN\u00cd NI NOSTR?"
});

console.log('\nDone! Simple files created for Yoruba (yo).');
