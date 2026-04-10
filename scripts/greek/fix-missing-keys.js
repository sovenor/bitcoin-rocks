/**
 * Fixes missing keys and minor untranslated strings in Greek files:
 * - bitcoin-vs-banks_el.json (5 missing keys)
 * - business/sticker-files/english/index_el.json (2 missing keys)
 * - sticker-files/english/index_el.json (1 missing key)
 * - sticker-files/estonian/index_el.json (2 missing keys)
 * - index_el.json (minor fixes)
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n', 'el');
const today = '2026-04-10';

function fixFile(relPath, translations) {
	const filePath = path.join(i18nDir, relPath);
	const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
	data['@metadata']['last-updated'] = today;
	
	let count = 0;
	for (const [key, value] of Object.entries(translations)) {
		if (data[key] !== value) {
			data[key] = value;
			count++;
		}
	}
	
	fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
	console.log(`FIXED ${relPath}: ${count} strings updated`);
}

// ============ BITCOIN-VS-BANKS (5 missing keys) ============
fixFile('bitcoin-vs-banks_el.json', {
	"point_1_summary_2": "Το Bitcoin λειτουργεί χωρίς φρουρούς πύλης",
	"point_1_summary_3": "- κανείς δεν μπορεί να σας αρνηθεί πρόσβαση. Οι τράπεζες, ωστόσο, μπορούν να αρνηθούν να ανοίξουν λογαριασμούς, να παγώσουν υπάρχοντες λογαριασμούς ή να αρνηθούν υπηρεσίες βάσει πολιτικών τους ή κυβερνητικών κανονισμών.",
	"point_3_summary_2": "Οι τράπεζες λειτουργούν με ιδιωτικά βιβλία και αδιαφανείς εσωτερικές διαδικασίες που οι πελάτες δεν μπορούν να επαληθεύσουν ανεξάρτητα.",
	"point_4_summary_2": "Μάθετε για τα πορτοφόλια Bitcoin",
	"point_4_summary_3": "για να κατανοήσετε την αυτο-φύλαξη. Οι τράπεζες κρατούν τα χρήματά σας στους λογαριασμούς τους και μπορούν να παγώσουν, να περιορίσουν ή να κλειδώσουν την πρόσβαση στα κεφάλαιά σας ανά πάσα στιγμή."
});

// ============ BUSINESS STICKER-FILES ENGLISH (2 missing keys) ============
fixFile('business/sticker-files/english/index_el.json', {
	"english_bitcoin_accepted_here_sticker_files": "Αρχεία αυτοκόλλητων «Εδώ γίνεται δεκτό το Bitcoin» στα Αγγλικά",
	"english_biz_sticker_files_description": "Κατεβάστε αρχεία αυτοκόλλητων στα Αγγλικά για να εκτυπώσετε τα δικά σας αυτοκόλλητα «Εδώ γίνεται δεκτό το Bitcoin»."
});

// ============ STICKER-FILES ENGLISH (1 missing key) ============
fixFile('sticker-files/english/index_el.json', {
	"print_these": "ΕΚΤΥΠΩΣΤΕ ΑΥΤΑ ΜΕ 1 ΚΛΙΚ"
});

// ============ STICKER-FILES ESTONIAN (2 missing keys) ============
fixFile('sticker-files/estonian/index_el.json', {
	"Estonian_bitcoin_sticker_files": "Αυτοκόλλητα Bitcoin στα Εσθονικά",
	"Estonian_description": "Κατεβάστε αρχεία αυτοκόλλητων Bitcoin στα Εσθονικά."
});

// ============ INDEX (minor) ============
fixFile('index_el.json', {
	"home_section_bitcoin_and": "BITCOIN &",
	"home_link_title_payments_1": "Bitcoin εν. Visa"
});

console.log('\nDone! Missing keys and minor fixes complete.');
