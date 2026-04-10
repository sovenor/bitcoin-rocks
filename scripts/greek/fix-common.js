/**
 * Fixes untranslated English strings in Greek common_el.json
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', '..', 'i18n', 'el', 'common_el.json');
const today = '2026-04-10';

const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
data['@metadata']['last-updated'] = today;

const translations = {
	// Calculator
	"common_cic_intro_1": "Πολλοί γνωρίζουν τον Σύνθετο Τόκο, αλλά λίγοι γνωρίζουν τον Σύνθετο Πληθωρισμό.",
	"common_cic_intro_2": "Με τον Υπολογιστή Σύνθετου Πληθωρισμού μας, μπορείτε εύκολα να υπολογίσετε πόσο πρέπει να αυξηθεί ο μισθός σας για να διατηρήσετε την αγοραστική σας δύναμη.",
	"common_cic_intro_3": "Απλά εισάγετε τον τρέχοντα μισθό σας, τον ρυθμό πληθωρισμού και τον αριθμό των ετών για να δείτε το αποτέλεσμα.",
	"common_current_salary": "τρέχων μισθός",
	"common_inflation_rate": "ρυθμός πληθωρισμού",
	"common_year": "έτος",
	"common_years": "έτη",
	"common_result_starting_message": "Συμπληρώστε τη φόρμα παραπάνω και πατήστε υπολογισμός.",
	"common_error_message": "Σφάλμα: Παρακαλώ συμπληρώστε και τα 3 πεδία της φόρμας.",
	"common_result_message_1": "Με ρυθμό πληθωρισμού",
	"common_result_message_2": "ο",
	"common_result_message_3": "μισθός σας πρέπει να αυξηθεί σε",
	"common_result_message_4": "για να διατηρήσετε την αγοραστική σας δύναμη.",
	"common_calculate_button_text": "ΥΠΟΛΟΓΙΣΜΟΣ",
	"common_learn_more": "ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ",
	"common_success": "ΕΠΙΤΥΧΙΑ!",
	"common_choose_your_country": "Επιλέξτε τη χώρα σας",
	"common_country_usa": "ΗΠΑ",
	"common_country_canada": "Καναδάς",
	"common_submit": "ΥΠΟΒΟΛΗ",
	"common_cta_link_type_email": "EMAIL",

	// Language names
	"common_language_afrikaans": "ΑΦΡΙΚΑΑΝΣ",
	"common_language_arabic": "ΑΡΑΒΙΚΑ",
	"common_language_basque": "ΒΑΣΚΙΚΑ",
	"common_language_bulgarian": "ΒΟΥΛΓΑΡΙΚΑ",
	"common_language_catalan": "ΚΑΤΑΛΑΝΙΚΑ",
	"common_language_chinese": "ΚΙΝΕΖΙΚΑ",
	"common_language_croatian": "ΚΡΟΑΤΙΚΑ",
	"common_language_czech": "ΤΣΕΧΙΚΑ",
	"common_language_danish": "ΔΑΝΙΚΑ",
	"common_language_dutch": "ΟΛΛΑΝΔΙΚΑ",
	"common_language_english": "ΑΓΓΛΙΚΑ",
	"common_language_estonian": "ΕΣΘΟΝΙΚΑ",
	"common_language_filipino": "ΦΙΛΙΠΠΙΝΕΖΙΚΑ",
	"common_language_finnish": "ΦΙΝΛΑΝΔΙΚΑ",
	"common_language_french": "ΓΑΛΛΙΚΑ",
	"common_language_german": "ΓΕΡΜΑΝΙΚΑ",
	"common_language_greek": "ΕΛΛΗΝΙΚΑ",
	"common_language_hausa": "ΧΑΟΥΣΑ",
	"common_language_hebrew": "ΕΒΡΑΪΚΑ",
	"common_language_hindi": "ΧΙΝΤΙ",
	"common_language_hungarian": "ΟΥΓΓΡΙΚΑ",
	"common_language_indonesian": "ΙΝΔΟΝΗΣΙΑΚΑ",
	"common_language_irish": "ΙΡΛΑΝΔΙΚΑ",
	"common_language_italian": "ΙΤΑΛΙΚΑ",
	"common_language_japanese": "ΙΑΠΩΝΙΚΑ",
	"common_language_korean": "ΚΟΡΕΑΤΙΚΑ",
	"common_language_malay": "ΜΑΛΑΪΚΑ",
	"common_language_norwegian": "ΝΟΡΒΗΓΙΚΑ",
	"common_language_persian": "ΠΕΡΣΙΚΑ",
	"common_language_polish": "ΠΟΛΩΝΙΚΑ",
	"common_language_portuguese": "ΠΟΡΤΟΓΑΛΙΚΑ",
	"common_language_russian": "ΡΩΣΙΚΑ",
	"common_language_sinhala": "ΣΙΝΧΑΛΕΖΙΚΑ",
	"common_language_slovak": "ΣΛΟΒΑΚΙΚΑ",
	"common_language_slovenian": "ΣΛΟΒΕΝΙΚΑ",
	"common_language_spanish": "ΙΣΠΑΝΙΚΑ",
	"common_language_swahili": "ΣΟΥΑΧΙΛΙ",
	"common_language_swedish": "ΣΟΥΗΔΙΚΑ",
	"common_language_thai": "ΤΑΪΛΑΝΔΙΚΑ",
	"common_language_turkish": "ΤΟΥΡΚΙΚΑ",
	"common_language_urdu": "ΟΥΡΝΤΟΥ",
	"common_language_vietnamese": "ΒΙΕΤΝΑΜΕΖΙΚΑ",
	"common_language_yoruba": "ΓΙΟΡΟΥΜΠΑ",

	// Sticker bulk/print
	"common_stickers_bulk_mess": "Δεν θέλετε να ασχοληθείτε με τα αρχεία μόνοι σας;",
	"common_stickers_bulk_want": "Θέλετε περισσότερα από μερικά αυτοκόλλητα;",
	"common_stickers_bulk_store": "Παραγγείλτε αυτοκόλλητα σε μεγάλες ποσότητες από τον ίδιο εκτυπωτή που χρησιμοποιούμε.",
	"common_stickers_bulk_cheaper": "Όσο περισσότερα αυτοκόλλητα αγοράζετε, τόσο φθηνότερα είναι ανά αυτοκόλλητο.",
	"common_stickers_print_instructions_1": "Μπορείτε να συμμετέχετε εκτυπώνοντας τα δικά σας αυτοκόλλητα, ανεξάρτητα από το πού ζείτε στον κόσμο.",
	"common_stickers_print_instructions_2": "Παρακαλούμε σημειώστε: δεν είναι όλα τα αυτοκόλλητα διαθέσιμα σε όλες τις γλώσσες. Εργαζόμαστε για την προσθήκη περισσότερων γλωσσών.",
	"common_stickers_request_language_1": "Δεν βλέπετε τη γλώσσα σας;",
	"common_stickers_request_language_2": "Συμπληρώστε την παρακάτω φόρμα για να ζητήσετε αρχεία αυτοκόλλητων στη γλώσσα σας.",
	"common_stickers_dimensions": "Διαστάσεις:",
	"common_stickers_type": "Τύπος:",
	"common_stickers_material": "Υλικό:",
	"common_stickers_where_to_print": "Πού να εκτυπώσετε:",
	"common_stickers_type_die_cut": "κομμένο αυτοκόλλητο",
	"common_stickers_material_vinyl": "βινυλικά αυτοκόλλητα για εξωτερική χρήση",
	"common_stickers_printer": "Χρησιμοποιούμε το StickerMule.com αλλά μπορείτε να χρησιμοποιήσετε οποιαδήποτε εταιρεία αυτοκόλλητων.",

	// Nostr
	"common_nostr_join": "ΕΓΓΡΑΦΕΙΤΕ ΣΤΟ NOSTR ΤΩΡΑ",
	"common_nostr_protocol_header": "Πρωτόκολλο, όχι πλατφόρμα",
	"common_nostr_protocol_c1": "Το Nostr είναι ένα νέο πρωτόκολλο που σας επιτρέπει να επικοινωνείτε διαδικτυακά χωρίς μεσάζοντα.",
	"common_nostr_protocol_c2": "Πλατφόρμες όπως το Twitter και το Facebook ελέγχονται από μία εταιρεία που μπορεί να σας λογοκρίνει ή ακόμα και να σας αφαιρέσει εντελώς.",
	"common_nostr_freedom_header": "Ελευθερία μετακίνησης",
	"common_nostr_freedom_c1": "Το Nostr είναι παρόμοιο με το email. Κανείς δεν ελέγχει το πρωτόκολλο email, αλλά μπορείτε να επιλέξετε τον πάροχο email σας. Αν δεν σας αρέσει ο πάροχός σας, μπορείτε να μετακινηθείτε σε νέο.",
	"common_nostr_freedom_c2": "Κανείς δεν ελέγχει το πρωτόκολλο Nostr, και οποιοσδήποτε μπορεί να δημιουργήσει μια εφαρμογή-πελάτη (σκεφτείτε το ως πάροχο email) πάνω στο Nostr.",
	"common_nostr_freedom_c3": "Αν δεν σας αρέσει πώς λειτουργεί μια συγκεκριμένη εφαρμογή-πελάτης, μπορείτε να μετακινηθείτε αδιαλείπτως σε μια νέα, διατηρώντας τις αναρτήσεις, τους ακολούθους και την ψηφιακή σας ταυτότητα.",
	"common_nostr_bitcoin_header": "Το Bitcoin είναι ενσωματωμένο",
	"common_nostr_bitcoin_c1": "Το Bitcoin είναι ενσωματωμένο εγγενώς στο πρωτόκολλο Nostr. Αν κάποιος αναρτήσει κάτι που σας αρέσει, μπορείτε να του στείλετε Bitcoin κατευθείαν μέσα στην εφαρμογή.",
	"common_nostr_bitcoin_c2": "Σε κεντρικοποιημένες πλατφόρμες όπως το Twitter και το Facebook, η κεντρική εταιρεία αποφασίζει ποιοι δημιουργοί πληρώνονται. Στο Nostr, εσείς αποφασίζετε.",
	"common_nostr_download_client": "ΚΑΤΕΒΑΣΤΕ ΜΙΑ ΔΩΡΕΑΝ ΕΦΑΡΜΟΓΗ ΓΙΑ ΝΑ ΕΓΓΡΑΦΕΙΤΕ ΣΤΟ NOSTR",
	"common_nostr_iphone_clients": "Εφαρμογές iPhone",
	"common_nostr_iphone_app": "Εφαρμογή iPhone",
	"common_nostr_first_client": "Προτεινόμενη πρώτη εφαρμογή",
	"common_nostr_wallet_built_in": "Ενσωματωμένο πορτοφόλι Bitcoin zap",
	"common_nostr_download_now": "ΚΑΤΕΒΑΣΤΕ ΤΩΡΑ",
	"common_nostr_familiar": "Οικεία διεπαφή",
	"common_nostr_separate_wallet": "Απαιτεί ξεχωριστό πορτοφόλι bitcoin",
	"common_nostr_android_clients": "Εφαρμογές Android",
	"common_nostr_android_app": "Εφαρμογή Android",
	"common_nostr_features": "Πολλά χαρακτηριστικά",
	"common_nostr_browser_clients": "Εφαρμογές Περιηγητή",
	"common_nostr_web_client": "Εφαρμογή Ιστού",
	"common_nostr_simple": "Πολύ απλό",
	"common_nostr_test": "Εύκολος τρόπος να δοκιμάσετε το Nostr με δοκιμαστικό λογαριασμό",
	"common_nostr_view_client": "ΔΕΙΤΕ ΤΗΝ ΕΦΑΡΜΟΓΗ",

	// Kit / Business
	"common_kit_printer": "Προτείνουμε το VistaPrint.com για να εκτυπώσετε τα δικά σας φυλλάδια Bitcoin Business Kit.",
	"common_kit_link_to_print": "Σύνδεσμος εκτύπωσης:",
	"common_kit_fold": "Δίπλωση:",
	"common_kit_fold_trifold": "Τρίπτυχο",
	"common_kit_unfolded_size": "Μέγεθος ξεδιπλωμένο:",
	"common_kit_unfolded_size_bbk": "Μέγεθος Letter (8.5 in x 11 in)",
	"common_kit_paper_thickness": "Πάχος χαρτιού:",
	"common_kit_paper_thickness_standard": "Κανονικό",
	"common_kit_paper_stock": "Τύπος χαρτιού:",
	"common_kit_paper_stock_glossy": "Γυαλιστερό",
	"common_kit_exterior_print_file": "Αρχείο εκτύπωσης εξωτερικού:",
	"common_kit_interior_print_file": "Αρχείο εκτύπωσης εσωτερικού:",
	"common_kit_cta_header": "Κάντε μια τοπική επιχείρηση να αποδεχτεί Bitcoin",
	"common_biz_learn": "Μάθετε γιατί το Bitcoin είναι καλό για τις επιχειρήσεις",
	"common_biz_wallets": "Αποκτήστε πορτοφόλι Bitcoin για αποδοχή πληρωμών Bitcoin",
	"common_biz_maps": "Καταχωρηθείτε σε χάρτες εμπόρων Bitcoin",
	"common_biz_stickers": "Δωρεάν αυτοκόλλητα «Εδώ γίνεται δεκτό το Bitcoin»",
	"common_biz_rewards": "Ανταμοιβές Bitcoin",
	"common_biz_accounting": "Οδηγός Λογιστικής Bitcoin",
	"common_biz_faq": "Συχνές Ερωτήσεις",
	"common_biz_kit": "Εκτυπώστε το δικό σας Bitcoin Business Kit",
	"common_biz_accept_bitcoin_payments": "ΑΠΟΔΕΧΤΕΙΤΕ ΠΛΗΡΩΜΕΣ BITCOIN",
	"common_biz_ready": "ΕΤΟΙΜΟΙ ΝΑ ΑΠΟΔΕΧΤΕΙΤΕ BITCOIN ΣΤΗΝ ΕΠΙΧΕΙΡΗΣΗ ΣΑΣ;",
	"common_biz_more": "ΠΕΡΙΣΣΟΤΕΡΟΙ ΕΠΙΧΕΙΡΗΜΑΤΙΚΟΙ ΠΟΡΟΙ",

	// Wallet types
	"common_self_custody": "ΑΥΤΟ-ΦΥΛΑΞΗ",
	"common_not_your_keys": "ΟΧΙ ΤΑ ΚΛΕΙΔΙΑ ΣΟΥ",
	"common_cold_wallet": "ΨΥΧΡΟ ΠΟΡΤΟΦΟΛΙ",
	"common_hot_wallet": "ΘΕΡΜΟ ΠΟΡΤΟΦΟΛΙ",

	// Sticker files mission
	"common_sticker_files_mission_1": "Η αποστολή μας είναι να σας βοηθήσουμε να πείσετε περισσότερους ανθρώπους βάζοντας αυτοκόλλητα Bitcoin σε δημόσιους χώρους.",
	"common_sticker_files_mission_3": "πληθωρισμό",
	"common_sticker_files_mission_4": "Αν ζείτε στις ΗΠΑ ή στον Καναδά, μπορείτε να",
	"common_sticker_files_mission_5": "ζητήσετε δωρεάν ένα πακέτο αγγλικών αυτοκόλλητων",

	// Footer/Publisher
	"common_published_by": "Δημοσιεύτηκε από",
	"common_publisher_since": "Εκπαίδευση για το Bitcoin από το 2022",
	"common_publisher_open_source": "Έργο ανοιχτού κώδικα",
	"common_reviewed_accuracy": "✓ Ελεγμένο για ακρίβεια: 2026",
	"common_footer_tagline": "Επιτάχυνση της υιοθέτησης του bitcoin μέσω εκπαίδευσης.",
	"common_footer_contribute": "Συνεισφέρετε",
	"common_sources_heading": "Πηγές"
};

let count = 0;
for (const [key, value] of Object.entries(translations)) {
	if (data[key] !== value) {
		data[key] = value;
		count++;
	}
}

fs.writeFileSync(filePath, JSON.stringify(data, null, '\t') + '\n', 'utf8');
console.log(`FIXED common_el.json: ${count} strings updated`);
