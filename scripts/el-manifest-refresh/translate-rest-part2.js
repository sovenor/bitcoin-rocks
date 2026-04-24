#!/usr/bin/env node
/**
 * Greek manifest refresh — part 2 of non-inflation namespaces.
 *
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/*,
 *         sticker-language-success, sticker-success, stickers, wallets.
 *
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const REPORT_PATH = path.resolve(
	__dirname,
	"..",
	"..",
	"scripts",
	"i18n-audit",
	"reports",
	"el.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Λογιστικές υπηρεσίες από την Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Ένας απλός οδηγός για τη λογιστική απεικόνιση των πληρωμών Bitcoin — υβριδικά πορτοφόλια, τιμή κόστους, κεφαλαιακά κέρδη και πότε να καλέσετε τον λογιστή σας.",
	"business/accounting::accounting_s1_c1":
		"Ο πιο εύκολος τρόπος να δέχεστε Bitcoin είναι να χρησιμοποιείτε ένα υβριδικό πορτοφόλι που αυτόματα πουλάει το 100% του Bitcoin που λαμβάνετε σε δολάρια (ή το τοπικό σας νόμισμα) μόλις μπει η πληρωμή.",
	"business/accounting::accounting_s1_c2":
		"Με αυτή τη ρύθμιση, τα λογιστικά σας φαίνονται ακριβώς όπως φαίνονται σήμερα — το τελικό ποσό είναι δολάρια κάθε φορά. Χωρίς τιμή κόστους, χωρίς κεφαλαιακά κέρδη, χωρίς νέα λογιστικά φύλλα.",
	"business/accounting::accounting_s2":
		"Αν κρατάτε κάποιο Bitcoin: παρακολούθηση τιμής κόστους",
	"business/accounting::accounting_s2_c1":
		"Κάποιες επιχειρήσεις επιλέγουν να κρατήσουν ένα μέρος του Bitcoin που λαμβάνουν αντί να το μετατρέψουν αυτόματα όλο. Αν είστε εσείς, το επιπλέον βήμα είναι η παρακολούθηση της τιμής κόστους — της αξίας σε δολάρια κάθε πληρωμής Bitcoin την ημέρα που τη λάβατε.",
	"business/accounting::accounting_s2_c2":
		"Ακόμη και αν σκέφτεστε τη δουλειά σας αποκλειστικά σε Bitcoin, οι περισσότερες φορολογικές αρχές εξακολουθούν να θέλουν να δηλώνετε την αξία σε δολάρια. Τα καλά νέα: είναι μόνο δύο αριθμοί ανά συναλλαγή — η ποσότητα Bitcoin που λάβατε και η αξία της σε δολάρια εκείνη την ημέρα.",
	"business/accounting::accounting_s2_c3":
		"Χρησιμοποιήστε τα εργαλεία παρακάτω για να αυτοματοποιήσετε τις αναζητήσεις, ώστε να μην χρειάζεται να ελέγχετε τις τιμές κάθε μέρα.",
	"business/accounting::accounting_s3":
		"Χρήση ή πώληση Bitcoin που έχετε κρατήσει",
	"business/accounting::accounting_s3_c1":
		"Αν μετατρέπετε κάθε πληρωμή αυτόματα σε δολάρια, τότε παραλείψτε αυτή την ενότητα — δεν ισχύει για εσάς.",
	"business/accounting::accounting_s3_c2":
		"Αν κρατήσατε κάποιο Bitcoin και αργότερα αποφασίσετε να το ξοδέψετε ή να το πουλήσετε, προσθέστε την τιμή πώλησης στο ίδιο λογιστικό φύλλο με την τιμή κόστους. Η διαφορά μεταξύ αυτού που κόστισε το Bitcoin όταν το λάβατε και αυτού που κοστίζει όταν το ξοδέψετε ή το πουλήσετε είναι κεφαλαιακό κέρδος ή ζημία.",
	"business/accounting::accounting_s3_c3": "Δύο γρήγορα παραδείγματα:",
	"business/accounting::accounting_s4":
		"Χρειάζεστε έναν επαγγελματία που καταλαβαίνει το Bitcoin;",
	"business/accounting::accounting_s4_c1":
		"Αν προτιμάτε να το αναλάβει κάποιος άλλος — ή αν η λογιστική Bitcoin σας είναι πιο πολύπλοκη από όσο μπορεί να διαχειριστεί ένα υβριδικό πορτοφόλι — συνιστούμε ανεπιφύλακτα τις Λογιστικές Υπηρεσίες Satoshi Pacioli, μια εταιρεία εξειδικευμένη στη λογιστική Bitcoin για επιχειρήσεις.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Λογιστική Bitcoin για την επιχείρησή σας",
	"business/accounting::accounting_card_bpr_label": "ΤΙΜΗ BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Αναζητήστε τρέχουσες ή ιστορικές τιμές Bitcoin σε δολάρια",
	"business/accounting::accounting_card_pacioli_label": "ΛΟΓΙΣΤΗΣ BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label":
		"ΕΙΣΑΓΩΓΗ EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Εισάγετε αυτόματα τιμές Bitcoin στο Excel",
	"business/accounting::accounting_card_wallets_label": "ΥΒΡΙΔΙΚΑ ΠΟΡΤΟΦΟΛΙΑ",
	"business/accounting::accounting_card_wallets_title":
		"Δείτε τα προτεινόμενα επαγγελματικά μας πορτοφόλια",
	"business/accounting::accounting_disclaimer":
		"Αυτός ο οδηγός είναι μόνο για ενημερωτικούς σκοπούς και δεν αποτελεί φορολογική συμβουλή. Για φορολογική συμβουλή ειδικά για την κατάστασή σας, επικοινωνήστε με έναν καταρτισμένο λογιστή.",
	"business/accounting::accounting_disclaimer_label": "Αποποίηση ευθύνης",
	"business/accounting::accounting_example_feb_1": "1 Φεβρουαρίου",
	"business/accounting::accounting_example_gain_badge": "Κεφαλαιακό κέρδος",
	"business/accounting::accounting_example_gain_explain":
		"Καταγράφετε κεφαλαιακό κέρδος 10 $.",
	"business/accounting::accounting_example_jan_1": "1 Ιανουαρίου",
	"business/accounting::accounting_example_loss_badge": "Κεφαλαιακή ζημία",
	"business/accounting::accounting_example_loss_explain":
		"Καταγράφετε κεφαλαιακή ζημία 10 $.",
	"business/accounting::accounting_example_received_label": "Ελήφθη",
	"business/accounting::accounting_example_sold_label":
		"Πωλήθηκε ή ξοδεύτηκε",
	"business/accounting::accounting_hero_subtitle":
		"Η αποδοχή Bitcoin στην επιχείρησή σας δεν χρειάζεται να περιπλέξει τη λογιστική σας. Εδώ είναι η σύντομη έκδοση — συν εργαλεία και ειδικούς που την κάνουν ανώδυνη.",
	"business/accounting::accounting_intro_c1":
		"Αν δέχεστε ήδη μετρητά ή κάρτες, η προσθήκη Bitcoin στη λογιστική της επιχείρησής σας είναι ευκολότερη από όσο ακούγεται. Έχετε δύο δρόμους: να μετατρέπετε αυτόματα κάθε πληρωμή Bitcoin σε δολάρια μόλις μπαίνει (χωρίς νέα λογιστικά), ή να κρατάτε λίγα σε Bitcoin (πρέπει να παρακολουθείτε μερικούς επιπλέον αριθμούς).",
	"business/accounting::accounting_intro_c2":
		"Αυτός ο οδηγός περνά και από τους δύο δρόμους — ώστε να διαλέξετε αυτόν που ταιριάζει στην επιχείρησή σας και να ξεκινήσετε να δέχεστε Bitcoin με ήρεμο μυαλό.",
	"business/accounting::accounting_s1":
		"Ο εύκολος δρόμος: αυτόματη μετατροπή σε δολάρια",
	"business/accounting::accounting_s3_c6":
		"Και αυτό είναι όλο. Τα βασικά μαθηματικά είναι τα ίδια που θα χρησιμοποιούσατε για οποιοδήποτε άλλο περιουσιακό στοιχείο που αυξάνει ή μειώνεται σε αξία.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — τρέχουσα και ιστορική τιμή Bitcoin σε δολάρια",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Λογιστικές Υπηρεσίες — λογιστική Bitcoin για επιχειρήσεις",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — εισαγωγή τιμών κρυπτονομισμάτων στο Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Σύντομες απαντήσεις στις ερωτήσεις που συνήθως κάνουν οι έμποροι πριν αρχίσουν να δέχονται Bitcoin — χρεώσεις, διακανονισμός, πορτοφόλια, αντιστροφές πληρωμών, κόστος και άλλα.",
	"business/faq::faq_intro_c1":
		"Κάντε κλικ σε οποιαδήποτε ερώτηση παρακάτω για να ξεδιπλώσετε την απάντηση. Όταν είστε έτοιμοι να αρχίσετε να δέχεστε Bitcoin, οι επαγγελματικοί πόροι στο κάτω μέρος της σελίδας σας καθοδηγούν σε κάθε βήμα.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "ΛΟΓΙΣΤΙΚΗ",
	"business/index::biz_label_faq": "FAQ",
	"business/index::biz_label_maps": "ΧΑΡΤΕΣ ΕΜΠΟΡΩΝ",
	"business/index::biz_label_rewards": "ΑΝΤΑΜΟΙΒΕΣ",
	"business/index::biz_label_stickers": "ΑΥΤΟΚΟΛΛΗΤΑ",
	"business/index::biz_label_wallets": "ΠΟΡΤΟΦΟΛΙΑ",
	"business/index::biz_meta_description":
		"Δεχτείτε Bitcoin στην επιχείρησή σας με χαμηλότερες χρεώσεις, άμεσο διακανονισμό, χωρίς αντιστροφές πληρωμών, και αποκτήστε περισσότερους πελάτες.",
	"business/index::business_hero_subtitle":
		"Δεχτείτε πληρωμές με χαμηλότερες χρεώσεις, εξαργυρώστε άμεσα και φτάστε σε εκατομμύρια νέους πελάτες — χωρίς συμβόλαια και χωρίς κρυφά κόστη.",
	"business/index::business_intro_c1":
		"Το Bitcoin δίνει στην επιχείρησή σας έναν ταχύτερο, φθηνότερο και πιο ιδιωτικό τρόπο να πληρώνεστε. Χωρίς ενδιάμεσους. Χωρίς αντιστροφές πληρωμών. Χωρίς συμβόλαια. Απλώς χρήματα που διακανονίζονται σε δευτερόλεπτα, απευθείας από τον πελάτη σε εσάς.",
	"business/index::business_intro_c2":
		"Παρακάτω είναι η σύντομη έκδοση του γιατί το Bitcoin είναι καλό για την επιχείρηση — και από κάτω κάθε πόρος που χρειάζεστε για να αρχίσετε να το δέχεστε σήμερα.",
	"business/index::business_resources_heading":
		"Όλα όσα χρειάζεστε για να δέχεστε Bitcoin",
	"business/index::business_resources_intro":
		"Δουλέψτε αυτούς τους πόρους με τον δικό σας ρυθμό. Καθένας είναι ένας σύντομος, πρακτικός οδηγός.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Πείτε μας για την επιχείρησή σας",
	"business/maps::biz_maps_form_intro":
		"Χρειαζόμαστε απλώς λίγες πληροφορίες για να σας βάλουμε στον χάρτη. Διατηρούμε τα στοιχεία διεύθυνσης μόνο όσο χρειάζεται για να υποβάλουμε την επιχείρησή σας στους χάρτες.",
	"business/maps::biz_maps_hero_subtitle":
		"Προσθέστε δωρεάν την επιχείρησή σας στο BTC Map — έναν ανοιχτό, παγκόσμιο κατάλογο εμπόρων που δέχονται Bitcoin — ώστε οι γείτονες χρήστες Bitcoin να σας βρίσκουν και να ξοδεύουν Bitcoin μαζί σας.",
	"business/maps::biz_maps_hero_title":
		"Βάλτε την επιχείρησή σας στους χάρτες εμπόρων Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Οι χρήστες Bitcoin ψάχνουν ενεργά μέρη για να ξοδέψουν τα χρήματά τους. Το να είστε στον χάρτη εκθέτει την επιχείρησή σας σε κάθε χρήστη Bitcoin που ψάχνει κοντινό μέρος να φάει, να ψωνίσει ή να μείνει — εντελώς δωρεάν.",
	"business/maps::biz_maps_intro_c2":
		"Απλώς συμπληρώστε τη σύντομη φόρμα παρακάτω και θα υποβάλουμε την επιχείρησή σας στο BTC Map και σε άλλους χάρτες εμπόρων Bitcoin.",
	"business/maps::biz_maps_meta_description":
		"Προσθέστε δωρεάν την επιχείρησή σας στο BTC Map και σε άλλους χάρτες εμπόρων Bitcoin, ώστε οι γείτονες χρήστες Bitcoin να σας βρίσκουν.",
	"business/maps::biz_maps_placeholder_address": "Οδός και αριθμός",
	"business/maps::biz_maps_placeholder_category":
		"Κατηγορία (π.χ. εστιατόριο, καφέ, ξενοδοχείο)",
	"business/maps::biz_maps_placeholder_city": "Πόλη",
	"business/maps::biz_maps_placeholder_country": "Χώρα",
	"business/maps::biz_maps_placeholder_name": "Όνομα επιχείρησης",
	"business/maps::biz_maps_placeholder_region":
		"Νομός / περιοχή / επαρχία",
	"business/maps::biz_maps_placeholder_website": "Ιστοσελίδα (προαιρετικό)",
	"business/maps::biz_maps_view_map_cta": "Δείτε το BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Δείτε το BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Ευχαριστούμε που υποβάλατε την επιχείρησή σας. Σύντομα θα σας βάλουμε στους χάρτες εμπόρων Bitcoin.",
	"business/maps-success::biz_maps_success_hero_title":
		"Η αίτηση ελήφθη 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Η επιχείρησή σας θα προστεθεί στο BTC Map και σε άλλους καταλόγους εμπόρων Bitcoin εντός 1 έως 2 εβδομάδων. Ελέγχουμε κάθε υποβολή χειροκίνητα για να διατηρούμε τους χάρτες ακριβείς.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Μόλις η καταχώρισή σας είναι ζωντανή, οι γείτονες χρήστες Bitcoin θα βρίσκουν την επιχείρησή σας και θα έρχονται να ξοδέψουν Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Τι συμβαίνει τώρα",
	"business/maps-success::biz_maps_success_view_c1":
		"Ενώ περιμένετε, δείτε το BTC Map για να δείτε το αναπτυσσόμενο δίκτυο επιχειρήσεων σε όλο τον κόσμο που δέχονται Bitcoin.",
	"business/maps-success::biz_maps_success_view_header":
		"Δείτε πού θα εμφανιστείτε",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Κατεβάστε αγγλικά αρχεία αυτοκόλλητων για να εκτυπώσετε τα δικά σας αυτοκόλλητα «Bitcoin γίνεται δεκτό εδώ».",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Εκτυπώστε τα δικά σας αυτοκόλλητα «Bitcoin γίνεται δεκτό εδώ» στα αγγλικά για να ενημερώσετε τους πελάτες ότι δέχεστε Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Κατεβάστε αγγλικά αρχεία αυτοκόλλητων «Bitcoin γίνεται δεκτό εδώ»",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Ευχαριστούμε που ζητήσατε αρχεία αυτοκόλλητων «Bitcoin γίνεται δεκτό εδώ» στη γλώσσα σας.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Η αίτηση ελήφθη 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Θα δημιουργήσουμε και θα δημοσιεύσουμε τα αρχεία αυτοκόλλητών σας εντός 3 έως 4 εβδομάδων. Μόλις είναι έτοιμα, μπορείτε να τα κατεβάσετε και να τα εκτυπώσετε δωρεάν από τη σελίδα αρχείων αυτοκόλλητων μας.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Δημοσιεύουμε αρχεία αυτοκόλλητων κατά παρτίδες, οπότε μπορεί να χρειαστούν μερικές εβδομάδες πριν η γλώσσα σας ενεργοποιηθεί. Ευχαριστούμε για την υπομονή σας!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Τι συμβαίνει τώρα",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Παραγγείλτε χονδρικά",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Ζητήστε άλλο ένα δωρεάν πακέτο",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Θα λάβετε τα δωρεάν αυτοκόλλητά σας «Bitcoin γίνεται δεκτό εδώ» σε 2 έως 4 εβδομάδες σε έναν απλό λευκό φάκελο με 3 αυτοκόλλητα.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Τα αυτοκόλλητά σας είναι καθ' οδόν 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Αν τα 3 αυτοκόλλητα δεν αρκούν για την επιχείρησή σας, μη διστάσετε να ζητήσετε άλλο ένα δωρεάν πακέτο — ή παραγγείλτε χονδρικά από τον ίδιο εκτυπωτή που χρησιμοποιούμε εμείς.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Χρειάζεστε περισσότερα αυτοκόλλητα;",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Στην κύρια πόρτα ή το παράθυρό σας, ώστε οι πελάτες να τα βλέπουν πριν μπουν",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Κοντά στο ταμείο, στο τερματικό πληρωμής ή όπου πληρώνουν οι πελάτες",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Σε μενού, τιμοκαταλόγους ή ποτηράκια φιλοδωρημάτων",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Μην τα βάζετε σε μέρη που δεν ανήκουν σε εσάς ή όπου δεν έχετε άδεια να κολλήσετε αυτοκόλλητα",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Καλά μέρη για να βάλετε τα αυτοκόλλητά σας",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Ενημερώστε τους πελάτες ότι δέχεστε Bitcoin. Παραγγείλτε ένα δωρεάν πακέτο αυτοκόλλητων «Bitcoin γίνεται δεκτό εδώ» για να βάλετε στο κατάστημά σας.",
	"business/stickers::biz_stickers_hero_title":
		"Δωρεάν αυτοκόλλητα «Bitcoin γίνεται δεκτό εδώ»",
	"business/stickers::biz_stickers_intro_c1":
		"Η αποδοχή Bitcoin είναι μόνο η μισή δουλειά — οι πελάτες σας πρέπει επίσης να ξέρουν ότι το δέχεστε. Αυτά τα μικρά αυτοκόλλητα «Bitcoin γίνεται δεκτό εδώ» είναι σχεδιασμένα να μπαίνουν στην κύρια πόρτα, στο ταμείο, στο μενού ή οπουδήποτε θα τα δουν οι πελάτες πριν πληρώσουν.",
	"business/stickers::biz_stickers_intro_c2":
		"Θα σας στείλουμε ένα δωρεάν πακέτο σε οποιαδήποτε διεύθυνση στις ΗΠΑ ή στον Καναδά, ή μπορείτε να εκτυπώσετε τα δικά σας οπουδήποτε στον κόσμο.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Καναδάς — δωρεάν με ταχυδρομείο",
	"business/stickers::biz_stickers_option_print":
		"🌍 Παγκοσμίως — εκτυπώστε τα δικά σας",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 ΗΠΑ — δωρεάν με ταχυδρομείο",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Μετάφραση της φράσης «Bitcoin Accepted Here»",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Μετάφραση της φράσης «Scan to learn why Bitcoin is good for business.»",
	"business/stickers::biz_stickers_print_c1":
		"Μπορείτε να εκτυπώσετε τα δικά σας αυτοκόλλητα «Bitcoin γίνεται δεκτό εδώ» ανεξάρτητα από το πού μένετε. Κάντε κλικ στη γλώσσα σας παρακάτω για να κατεβάσετε τα αρχεία αυτοκόλλητων και οδηγίες εκτύπωσης.",
	"business/stickers::biz_stickers_print_header":
		"Εκτυπώστε τα δικά σας αρχεία αυτοκόλλητων",
	"business/stickers::biz_stickers_request_c1":
		"Συμπληρώστε τη φόρμα παρακάτω για να ζητήσετε αρχεία αυτοκόλλητων «Bitcoin γίνεται δεκτό εδώ» στην τοπική σας γλώσσα. Θα σας ειδοποιήσουμε μόλις είναι έτοιμα.",
	"business/stickers::biz_stickers_request_header":
		"Δεν βλέπετε τη γλώσσα σας;",
	"business/stickers::biz_stickers_step_description":
		"Στέλνουμε δωρεάν πακέτο σε διευθύνσεις στις ΗΠΑ και στον Καναδά. Οπουδήποτε αλλού στον κόσμο, μπορείτε να εκτυπώσετε τα δικά σας.",
	"business/stickers::biz_stickers_step_header":
		"Πώς θέλετε τα αυτοκόλλητά σας;",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Όλα τα πορτοφόλια Bitcoin λειτουργούν μαζί — επιλέξτε αυτό που ταιριάζει στην επιχείρησή σας. Δωρεάν, άμεσος διακανονισμός, χωρίς αντιστροφές πληρωμών.",
	"business/wallets::sources_breez_business":
		"Breez — πορτοφόλι Lightning μόνο για Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — υποδομή πληρωμών Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — επεξεργαστής πληρωμών Bitcoin",
	"business/wallets::sources_square":
		"Square — δεχτείτε πληρωμές Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — τιμολόγηση Bitcoin για επιχειρήσεις",
	"business/wallets::wallets_hero_subtitle":
		"Τα πορτοφόλια Bitcoin είναι δωρεάν. Επιλέξτε αυτό που ταιριάζει στην επιχείρησή σας — από κοντά, online ή με τιμολόγηση — και αρχίστε να δέχεστε Bitcoin σε λίγα λεπτά.",
	"business/wallets::wallets_section_invoice":
		"Πορτοφόλια για επιχειρήσεις που τιμολογούν πελάτες",
	"business/wallets::wallets_section_invoice_intro":
		"Αν τιμολογείτε πελάτες (συμβουλευτικές, freelance, B2B υπηρεσίες), χρησιμοποιήστε πορτοφόλι χτισμένο γύρω από την τιμολόγηση. Ο πελάτης πληρώνει το τιμολόγιο Bitcoin με μερικά κλικ.",
	"business/wallets::wallets_section_multiple":
		"Πορτοφόλια για επιχειρήσεις με πολλούς υπαλλήλους",
	"business/wallets::wallets_section_multiple_intro":
		"Αν έχετε ομάδα που δέχεται πληρωμές στο ταμείο, επιλέξτε πορτοφόλι που υποστηρίζει πολλαπλές συνδέσεις υπαλλήλων — ώστε κάθε υπάλληλος να έχει το δικό του PIN και να κρατάτε καθαρά αρχεία για το ποιος πήρε ποια πληρωμή.",
	"business/wallets::wallets_section_online":
		"Πορτοφόλια για online επιχειρήσεις",
	"business/wallets::wallets_section_online_intro":
		"Πουλάτε online; Αυτά τα πορτοφόλια συνδέονται στο online κατάστημά σας και δέχονται Bitcoin από κάθε πελάτη οπουδήποτε στον κόσμο — χωρίς αντιστροφές πληρωμών και χωρίς να χρειάζεται λογαριασμός εμπόρου.",
	"business/wallets::wallets_section_sole":
		"Πορτοφόλια για ατομικές επιχειρήσεις",
	"business/wallets::wallets_section_sole_intro":
		"Αν λειτουργείτε κατάστημα, καφέ, στούντιο ή υπηρεσία μόνοι σας, οποιοδήποτε από αυτά τα πορτοφόλια θα λειτουργήσει για εσάς. Επιλέξτε βάσει του αν θέλετε να κρατάτε τις πληρωμές σε Bitcoin ή να μετατρέπετε αυτόματα ένα μέρος κάθε πληρωμής στο τοπικό σας νόμισμα.",
	"business/wallets::wallets_strike_note":
		"Το Strike Business σας επιτρέπει να δέχεστε πληρωμές Bitcoin και Lightning με μηδενικές χρεώσεις και άμεσο διακανονισμό. Υποστηρίζει πληρωμές από κοντά, online και με τιμολόγηση, με προαιρετική αυτόματη μετατροπή στο τοπικό σας νόμισμα.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin γίνεται δεκτό εδώ",
	"business/why::why_good_for_you":
		"Γιατί το Bitcoin είναι καλό και για εσάς",
	"business/why::why_learn_more_lowercase": "Μάθετε περισσότερα →",
	"business/why::why_s1_c1":
		"Πληθωρισμός συμβαίνει όταν τυπώνονται περισσότερα χρήματα ή όταν δημιουργούνται από το πουθενά. Κάνει τα χρήματα στην τσέπη σας να χάνουν αξία με την πάροδο του χρόνου — και γι' αυτό οι τιμές ανεβαίνουν χρόνο με τον χρόνο.",
	"business/why::why_s1_c2":
		"Το Bitcoin έχει σταθερή προσφορά 21 εκατομμυρίων νομισμάτων. Καμία κυβέρνηση, τράπεζα ή εταιρεία δεν μπορεί να τυπώσει περισσότερα. Οι αποταμιεύσεις Bitcoin σας διατηρούν την αξία τους με την πάροδο του χρόνου, αντί να τη χάνουν σιωπηλά.",
	"business/why::why_s2_c1":
		"Τα τελευταία χρόνια, πολλές αμερικανικές τράπεζες έχουν καταρρεύσει λόγω τραπεζικών πανικών. Όταν πάρα πολλοί πελάτες προσπάθησαν να αποσύρουν ταυτόχρονα, οι τράπεζες δεν είχαν αρκετά μετρητά για να τους πληρώσουν όλους.",
	"business/why::why_s2_c2":
		"Αντί να φυλάνε απλώς τα χρήματά σας, οι τράπεζες δανείζουν και επενδύουν τα περισσότερα. Αν αυτές οι επενδύσεις αποτύχουν — ή οι καταθέτες χάσουν την εμπιστοσύνη — η τράπεζα μπορεί να καταρρεύσει και οι καταθέσεις σας μπορούν να παγώσουν ή να χαθούν.",
	"business/why::why_s2_c3":
		"Με το Bitcoin, μπορείτε να φυλάτε τα χρήματά σας απευθείας στο δικό σας πορτοφόλι. Χωρίς τράπεζα. Χωρίς ενδιάμεσο. Χωρίς τραπεζικό πανικό.",
	"business/why::why_s3_c1":
		"Σε αντίθεση με τις πιστωτικές κάρτες, το PayPal ή τους παραδοσιακούς τραπεζικούς λογαριασμούς, το Bitcoin δεν απαιτεί την άδεια κανενός.",
	"business/why::why_s3_c2":
		"Κανείς δεν μπορεί να παγώσει τον λογαριασμό σας, να μπλοκάρει μια πληρωμή ή να σας αποσυνδέσει από το δίκτυο. Είναι το πρώτο χρηματοπιστωτικό σύστημα στην ιστορία που μπορείτε να χρησιμοποιείτε ελεύθερα, χωρίς φόβο λογοκρισίας ή δήμευσης.",
	"business/why::why_s4_c1":
		"Το Bitcoin συχνά παρεξηγείται, αλλά σιωπηλά κάνει πολύ καλό στον κόσμο.",
	"business/why::why_s4_c2":
		"Έχει βοηθήσει ακτιβιστές ανθρωπίνων δικαιωμάτων στον αγώνα τους για ελευθερία, έχει μειώσει τις παγκόσμιες εκπομπές μεθανίου από χωματερές και πετρελαιοπηγές, έχει σταθεροποιήσει ηλεκτρικά δίκτυα και έχει χρηματοδοτήσει δημόσια αγαθά όπως εθνικά πάρκα.",
	"business/why::why_biz_s1":
		"Χαμηλότερες χρεώσεις, περισσότερα για την επιχείρηση",
	"business/why::why_biz_s1_c1":
		"Οι πληρωμές Bitcoin παρακάμπτουν τράπεζες και εταιρείες καρτών που παίρνουν 2-3% από κάθε πώληση. Η επιχείρηση κρατά περισσότερα από αυτά που πληρώνετε — κάτι που συχνά σημαίνει καλύτερες τιμές και καλύτερη εξυπηρέτηση για εσάς.",
	"business/why::why_biz_s2":
		"Άμεσος διακανονισμός, χωρίς αντιστροφές πληρωμών",
	"business/why::why_biz_s2_c1":
		"Οι πληρωμές Bitcoin διακανονίζονται σε δευτερόλεπτα, απευθείας από το πορτοφόλι σας στην επιχείρηση. Χωρίς αναμονή ημερών καθώς η τράπεζα αποδεσμεύει κεφάλαια, και χωρίς δαπανηρές διαφωνίες αντιστροφής πληρωμής — κάτι που σημαίνει ότι η επιχείρηση μπορεί να επικεντρωθεί στην εξυπηρέτηση πελατών αντί να πολεμά την απάτη.",
	"business/why::why_biz_s3":
		"Δωρεάν αποδοχή, ανοιχτό για όλους",
	"business/why::why_biz_s3_c1":
		"Δεν υπάρχουν συμβόλαια, μηνιαίες χρεώσεις ή κόστη έναρξης για μια επιχείρηση να δέχεται Bitcoin. Και εκατομμύρια χρήστες Bitcoin σε όλο τον κόσμο ψάχνουν ενεργά εμπόρους που το δέχονται — δίνοντας σε αυτή την επιχείρηση δωρεάν έκθεση σε νέους πελάτες.",
	"business/why::why_business_cta_intro":
		"Έχετε επιχείρηση και θέλετε να αρχίσετε να δέχεστε Bitcoin;",
	"business/why::why_business_cta_link":
		"Δείτε πώς λειτουργεί →",
	"business/why::why_for_business":
		"Γιατί το Bitcoin είναι καλό για αυτή την επιχείρηση",
	"business/why::why_for_business_intro":
		"Δεχόμενη Bitcoin, αυτή η επιχείρηση κρατά περισσότερα από κάθε πώληση, πληρώνεται άμεσα χωρίς αντιστροφές πληρωμών και φτάνει σε ένα παγκόσμιο κοινό χρηστών Bitcoin — όλα αυτά χωρίς συμβόλαια ή μηνιαίες χρεώσεις.",
	"business/why::why_good_for_you_intro":
		"Το Bitcoin δεν είναι χρήσιμο μόνο στο ταμείο — είναι μια καλύτερη μορφή χρήματος που προστατεύει τις αποταμιεύσεις, την ιδιωτικότητα και την ελευθερία σας να κάνετε συναλλαγές. Εδώ είναι μια γρήγορη επισκόπηση.",
	"business/why::why_hero_subtitle":
		"Μόλις σαρώσατε ένα αυτοκόλλητο «Bitcoin γίνεται δεκτό εδώ». Εδώ είναι γιατί αυτά είναι καλά νέα — για αυτή την επιχείρηση και για εσάς.",
	"business/why::why_intro_c1":
		"Η επιχείρηση που βρίσκεστε δέχεται Bitcoin — ένα σύγχρονο δίκτυο πληρωμών ανοιχτού κώδικα που ο καθένας, οπουδήποτε στον κόσμο, μπορεί να χρησιμοποιήσει, χωρίς τράπεζες και ενδιάμεσους να παίρνουν μερίδιο.",
	"business/why::why_intro_c2":
		"Παρακάτω είναι η σύντομη έκδοση του γιατί είναι καλό για αυτή την επιχείρηση να δέχεται Bitcoin, συν γιατί είναι καλό για εσάς ως πελάτη να χρησιμοποιείτε Bitcoin.",
	"business/why::why_next_business_label": "ΔΕΧΤΕΙΤΕ BITCOIN",
	"business/why::why_next_business_title":
		"Δεχτείτε Bitcoin στην επιχείρησή σας",
	"business/why::why_next_buy_label": "ΑΓΟΡΑΣΤΕ BITCOIN",
	"business/why::why_next_buy_title": "Αγοράστε το πρώτο σας Bitcoin",
	"business/why::why_next_learn_label": "ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ",
	"business/why::why_next_learn_title": "Μάθετε περισσότερα για το Bitcoin",
	"business/why::why_next_wallet_label": "ΑΠΟΚΤΗΣΤΕ ΠΟΡΤΟΦΟΛΙ",
	"business/why::why_next_wallet_title":
		"Αποκτήστε το δικό σας πορτοφόλι Bitcoin",
	"business/why::why_whats_next_heading": "Πού να πάτε τώρα;",
	"business/why::why_whats_next_intro":
		"Αν είναι η πρώτη σας φορά που σαρώνετε ένα αυτοκόλλητο Bitcoin, εδώ είναι τα πιο χρήσιμα μέρη να πάτε μετά.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer (απευθείας μεταξύ χρηστών)",
	"buy::buy_bitcoin_guide": "Πώς να αγοράσετε Bitcoin",
	"buy::buy_step_1_header": "Επιλέξτε τη χώρα σας",
	"buy::buy_step_2_header": "Επιλέξτε τη μέθοδο πληρωμής σας",
	"buy::buy_step_3_header": "Οι επιλογές αγοράς σας",
	"buy::buy_step_4_header": "Αποθηκεύστε το Bitcoin σας με ασφάλεια",
	"buy::buy_header_subtitle":
		"Ένας απλός οδηγός βήμα προς βήμα για την αγορά του πρώτου σας Bitcoin.",
	"buy::buy_howto_name": "Πώς να αγοράσετε Bitcoin",
	"buy::buy_meta_description":
		"Μάθετε να αγοράζετε Bitcoin με ασφάλεια με τον βήμα προς βήμα οδηγό μας. Επιλέξτε τη χώρα και τη μέθοδο πληρωμής σας για να βρείτε τις καλύτερες επιλογές αγοράς Bitcoin για εσάς.",
	"buy::buy_step_1_eyebrow": "Βήμα 1",
	"buy::buy_step_2_eyebrow": "Βήμα 2",
	"buy::buy_step_3_eyebrow": "Βήμα 3",
	"buy::buy_step_4_eyebrow": "Βήμα 4",
	"buy::buy_storage_cta_label": "Επόμενο βήμα",
	"buy::sources_bisq":
		"Bisq — αποκεντρωμένο ανταλλακτήριο peer-to-peer Bitcoin",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — παγκόσμιος κατάλογος ATM Bitcoin",
	"buy::sources_kraken": "Kraken — καθιερωμένο ανταλλακτήριο Bitcoin",
	"buy::sources_relai":
		"Relai — ελβετική εφαρμογή για αυτο-φύλαξη Bitcoin",
	"buy::sources_river":
		"River — αγορά, εξόρυξη και φύλαξη Bitcoin-only",
	"buy::sources_strike_lightning":
		"Strike — αγορά Bitcoin με υποστήριξη Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — dollar-cost averaging Bitcoin-only",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Προσθέστε μια γλώσσα",
	"common::common_next_buy_bitcoin": "Αγοράστε Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Μάθετε να αγοράζετε Bitcoin με ασφάλεια",
	"common::common_next_calculate": "Υπολογίστε τον πληθωρισμό σας",
	"common::common_next_calculate_desc":
		"Δείτε πώς ο πληθωρισμός επηρεάζει τον μισθό σας με την πάροδο του χρόνου",
	"common::common_next_get_wallet": "Αποκτήστε ένα πορτοφόλι",
	"common::common_next_get_wallet_desc":
		"Αποκτήστε το πρώτο σας πορτοφόλι Bitcoin — είναι δωρεάν",
	"common::common_next_keep_learning": "Συνεχίστε να μαθαίνετε",
	"common::common_next_keep_learning_desc":
		"Δείτε πώς το Bitcoin κάνει τον κόσμο καλύτερο",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — δείκτης τιμών καταναλωτή (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — προσφορά χρήματος (δείκτης κατηγορίας)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — «Μπορεί μια δημοπρασία Treasury να αποτύχει;»",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Τι ακολουθεί;",
	"common::common_sticker_files_mission_5": "ζητήστε ένα πακέτο",
	"common::common_site_tagline": "Εκπαίδευση Bitcoin για όλους.",
	"common::common_source_btc_map":
		"BTC Map — παγκόσμιος κατάλογος εμπόρων που δέχονται Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — δωρεάν open source αυτοφιλοξενούμενος επεξεργαστής πληρωμών Bitcoin",
	"common::common_source_oshi":
		"Oshi — πλατφόρμα ανταμοιβών Bitcoin για εμπόρους",
	"common::common_source_strike_business":
		"Strike — πληρωμές Bitcoin και Lightning για επιχειρήσεις",
	"common::common_sources_group_bitcoin": "Δεδομένα Bitcoin",
	"common::common_sources_group_cpi":
		"Πληθωρισμός / δείκτης τιμών καταναλωτή",
	"common::common_sources_group_debt": "Δημόσιο χρέος",
	"common::common_sources_group_money": "Δεδομένα προσφοράς χρήματος",
	"common::common_sources_group_stories": "Παραδείγματα από τον πραγματικό κόσμο",
	"common::common_sticker_files_mission_6":
		"δωρεάν αγγλικά αυτοκόλλητα.",
	"common::common_sticker_files_next_flyers_label": "Φυλλάδια",
	"common::common_sticker_files_next_flyers_title":
		"Εκτυπώστε ένα φυλλάδιο Bitcoin",
	"common::common_sticker_files_next_languages_label":
		"Αρχεία αυτοκόλλητων",
	"common::common_sticker_files_next_languages_title":
		"Δείτε αρχεία αυτοκόλλητων σε άλλες γλώσσες",
	"common::common_sticker_files_print_these":
		"ΕΚΤΥΠΩΣΤΕ ΤΑ ΜΕ 1 ΚΛΙΚ",
	"common::common_sticker_name_bdhi_black":
		"Αυτοκόλλητο «Bitcoin Doesn\u2019t Have Inflation» (μαύρο)",
	"common::common_sticker_name_bdhi_orange":
		"Αυτοκόλλητο «Bitcoin Doesn\u2019t Have Inflation» (πορτοκαλί)",
	"common::common_sticker_name_caution":
		"Αυτοκόλλητο Bitcoin «Caution! Melting Ice Cube»",
	"common::common_sticker_name_cure_inflation":
		"Αυτοκόλλητο Bitcoin «Cure Inflation»",
	"common::common_sticker_name_danger":
		"Αυτοκόλλητο Bitcoin «Danger! Inflation Ahead»",
	"common::common_sticker_name_fix":
		"Αυτοκόλλητο Bitcoin «Fix The Money, Fix The World»",
	"common::common_sticker_name_got_inflation":
		"Αυτοκόλλητο Bitcoin «Got Inflation?»",
	"common::common_sticker_name_study":
		"Αυτοκόλλητο «Study Bitcoin»",
	"common::common_sticker_name_warning":
		"Αυτοκόλλητο Bitcoin «Warning! Inflation is Stealing Your Savings»",
	"common::common_sticker_name_what_if":
		"Αυτοκόλλητο Bitcoin «What if your money didn\u2019t have inflation?»",
	"common::common_sticker_tips_heading": "Συμβουλές για αυτοκόλλητα",
	"common::common_sticker_tips_intro":
		"Μόλις εκτυπώσετε τα αυτοκόλλητά σας, βάλτε τα σε μέρη όπου οι άνθρωποι θα τα δουν! Καλά μέρη περιλαμβάνουν:",
	"common::common_sticker_tips_list_1":
		"δημόσιους χώρους όπου οι άνθρωποι θα τα παρατηρήσουν",
	"common::common_sticker_tips_list_2":
		"μέρη όπου είναι απίθανο να αφαιρεθούν αμέσως (τα αυτοκόλλητα δεν προκαλούν μόνιμη ζημιά)",
	"common::common_sticker_tips_list_3":
		"επιφάνειες όπου κολλάνε καλά (μέταλλο, πλαστικό, γυαλί)",
	"common::common_sticker_tips_list_4":
		"ΟΧΙ σε ιδιωτική ιδιοκτησία, πάνω σε πινακίδες κυκλοφορίας, ATM ή αντλίες καυσίμων",
	"common::common_stickers_printer_prefix": "Χρησιμοποιούμε το",
	"common::common_stickers_printer_suffix":
		"αλλά μπορείτε να χρησιμοποιήσετε οποιονδήποτε εκτυπωτή αυτοκόλλητων.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — δείκτης τιμών καταναλωτή για όλους τους αστικούς καταναλωτές",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — προσφορά χρήματος M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Υπολογίστε το χάσμα πληθωρισμού σας",
	"compound-inflation-calculator::cic_cta_label": "Επόμενο βήμα",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Ανακαλύψτε πόσο πρέπει να αυξηθεί ο μισθός σας για να συμβαδίζει με τον πληθωρισμό.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Εξερευνήστε περισσότερα θέματα",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Δείτε πώς το Bitcoin σχετίζεται με τα χρήματα, την ελευθερία, την ενέργεια και άλλα.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Μάθετε πώς λειτουργεί ο πληθωρισμός",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Πώς να εκτυπώσετε και να αναρτήσετε αυτά τα φυλλάδια Bitcoin",
	"flyers::flyers_hero_subtitle":
		"Δωρεάν, εκτυπώσιμα φυλλάδια Bitcoin. Αναρτήστε τα σε δημόσιους χώρους για να βοηθήσετε περισσότερους ανθρώπους να μάθουν για το Bitcoin.",
	"flyers::flyers_hero_title": "Εκτυπώστε και αναρτήστε φυλλάδια Bitcoin",
	"flyers::flyers_next_get_stickers": "Διαδώστε το μήνυμα",
	"flyers::flyers_next_get_stickers_desc":
		"Παραγγείλτε ένα δωρεάν πακέτο αυτοκόλλητων Bitcoin",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Συμμετέχετε και διαδώστε το Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Θέλετε να βοηθήσετε να χτιστεί μια κυκλική οικονομία Bitcoin; Ο πιο εύκολος τρόπος είναι να βοηθήσετε τοπικές επιχειρήσεις να αρχίσουν να δέχονται πληρωμές Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Γνωρίζετε μια επιχείρηση που θα ήταν ανοιχτή σε αυτό; Στείλτε τον ιδιοκτήτη στη σελίδα μας",
	"get-involved::get_involved_business_content_3":
		"Bitcoin για επιχειρήσεις.",
	"get-involved::get_involved_description":
		"Οι δωρεάν πόροι μας διευκολύνουν τη διάδοση της υιοθέτησης Bitcoin. Αυτοκόλλητα, φυλλάδια, αυτοκόλλητα «Bitcoin γίνεται δεκτό εδώ» για επιχειρήσεις και κώδικας ανοιχτού κώδικα στον οποίο όλοι μπορούν να συνεισφέρουν.",
	"get-involved::get_involved_header":
		"Συμμετέχετε και διαδώστε το Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Μπορείτε να βοηθήσετε να αλλάξει αυτό. Έχουμε φτιάξει μερικούς δωρεάν πόρους που διευκολύνουν τη διάδοση της ελπίδας που φέρνει το Bitcoin στην κοινότητά σας.",
	"get-involved::get_involved_biz_stickers_note":
		"Δέχεστε ήδη Bitcoin; Ενημερώστε τους πελάτες σας με τα δωρεάν αυτοκόλλητά μας «Bitcoin γίνεται δεκτό εδώ». Στέλνουμε πακέτο σε οποιαδήποτε διεύθυνση στις ΗΠΑ ή στον Καναδά, ή μπορείτε να εκτυπώσετε τα δικά σας οπουδήποτε στον κόσμο.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Αυτοκόλλητα «Γίνεται δεκτό εδώ»",
	"get-involved::get_involved_card_biz_stickers_source":
		"Πηγή: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Δωρεάν αυτοκόλλητα «Bitcoin γίνεται δεκτό εδώ» για την επιχείρησή σας",
	"get-involved::get_involved_card_business_label":
		"Bitcoin για επιχειρήσεις",
	"get-involved::get_involved_card_business_source":
		"Πηγή: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Όλα όσα χρειάζεται μια επιχείρηση για να αρχίσει να δέχεται πληρωμές Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Εκτυπώσιμα φυλλάδια",
	"get-involved::get_involved_card_flyers_source":
		"Πηγή: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Κατεβάστε και εκτυπώστε ένα δωρεάν φυλλάδιο Bitcoin",
	"get-involved::get_involved_card_github_label": "Ανοιχτός κώδικας",
	"get-involved::get_involved_card_github_source": "Πηγή: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Συνεισφέρετε στο bitcoin.rocks στο GitHub",
	"get-involved::get_involved_card_stickers_label":
		"Δωρεάν αυτοκόλλητα",
	"get-involved::get_involved_card_stickers_source":
		"Πηγή: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Ζητήστε ένα δωρεάν πακέτο αυτοκόλλητων Bitcoin στην πόρτα σας",
	"get-involved::get_involved_flyers_content_1":
		"Τα φυλλάδια είναι ένας από τους πιο εύκολους τρόπους να παρουσιάσετε το Bitcoin στην κοινότητά σας. Κατεβάστε το δωρεάν, εκτυπώσιμο φυλλάδιο Bitcoin μας, εκτυπώστε όσα αντίγραφα θέλετε και αναρτήστε τα σε πίνακες ανακοινώσεων, σε καφέ, σε meetups ή οπουδήποτε συγκεντρώνονται άνθρωποι.",
	"get-involved::get_involved_flyers_content_2":
		"Κάθε φυλλάδιο έχει έναν τίτλο που τραβά την προσοχή και έναν κωδικό QR που οδηγεί τους περίεργους αναγνώστες στο bitcoin.rocks για να μάθουν περισσότερα.",
	"get-involved::get_involved_flyers_content_3":
		"Σε αντίθεση με τα αυτοκόλλητα, τα φυλλάδια μπορούν να εκτυπωθούν κατ' απαίτηση από οπουδήποτε στον κόσμο — χρειάζεστε μόνο έναν εκτυπωτή και μερικά λεπτά.",
	"get-involved::get_involved_flyers_header":
		"Εκτυπώστε και αναρτήστε ένα φυλλάδιο",
	"get-involved::get_involved_flyers_image_alt":
		"Προεπισκόπηση του δωρεάν, εκτυπώσιμου φυλλαδίου Bitcoin από το bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"Το bitcoin.rocks είναι ένα δωρεάν έργο ανοιχτού κώδικα υπό την άδεια MIT. Η αποστολή μας είναι να επιταχύνουμε την υιοθέτηση του Bitcoin μέσω της εκπαίδευσης — και δεν μπορούμε να το κάνουμε μόνοι μας.",
	"get-involved::get_involved_github_content_2":
		"Είτε είστε προγραμματιστής, σχεδιαστής, συγγραφέας κειμένων ή μεταφραστής, υπάρχει τρόπος να βοηθήσετε. Καλωσορίζουμε ιδιαίτερα συνεισφέροντες που μπορούν να μεταφράσουν το περιεχόμενό μας σε περισσότερες γλώσσες, ώστε άνθρωποι σε όλο τον κόσμο να μπορούν να μάθουν για το Bitcoin στη μητρική τους γλώσσα.",
	"get-involved::get_involved_github_content_3":
		"Κάντε fork το αποθετήριό μας, ανοίξτε ένα pull request, δημιουργήστε ένα issue ή δώστε αστέρι στο έργο. Κάθε συνεισφορά βοηθά το Bitcoin να φτάσει σε περισσότερους ανθρώπους.",
	"get-involved::get_involved_github_header":
		"Συνεισφέρετε στο GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Ένα πακέτο δωρεάν αυτοκόλλητων κειμένου Bitcoin από το bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "αποταμίευση",
	"index::home_card_label_art_1": "Ας συγκρίνουμε",
	"index::home_card_label_art_2": "Διαδώστε το μήνυμα",
	"index::home_card_label_art_3": "Τέχνη του δρόμου",
	"index::home_card_label_bank_runs": "Σύστημα πλήρων αποθεματικών",
	"index::home_card_label_bonds": "Ας συγκρίνουμε",
	"index::home_card_label_business_1": "Ποια η διαφορά;",
	"index::home_card_label_business_2": "Δεχτείτε πληρωμές Bitcoin",
	"index::home_card_label_cash": "Ας συγκρίνουμε",
	"index::home_card_label_cbdc": "Ανοιχτό ή κλειστό;",
	"index::home_card_label_coding_1": "Διαδραστικό μάθημα",
	"index::home_card_label_coding_2": "Κατασκευάστε hardware",
	"index::home_card_label_coding_3": "Προκλήσεις προγραμματισμού",
	"index::home_card_label_crowdfunding_1": "Διαμαρτυρίες EndSARS",
	"index::home_card_label_crowdfunding_2": "Χρήματα που δεν σταματούν",
	"index::home_card_label_crowdfunding_3": "Χρηματοδοτήστε το έργο σας",
	"index::home_card_label_crypto": "Ποια η διαφορά;",
	"index::home_card_label_energy_1": "Σταθεροποίηση ηλεκτρικού δικτύου",
	"index::home_card_label_energy_4": "Διαχείριση ζήτησης",
	"index::home_card_label_energy_5": "Εξηλεκτρισμός υπαίθρου",
	"index::home_card_label_energy_6": "Κίνητρα ανανεώσιμων πηγών",
	"index::home_card_label_environment_1": "Μείωση μεθανίου",
	"index::home_card_label_environment_2": "Έσωσε εθνικό πάρκο",
	"index::home_card_label_environment_3": "Η πιο πράσινη βιομηχανία",
	"index::home_card_label_environment_4": "Μειώνει την καύση αερίου",
	"index::home_card_label_equality_1": "Ελπίδα και ευκαιρίες",
	"index::home_card_label_equality_2": "Ο μεγάλος εξισωτής",
	"index::home_card_label_food_1": "Τιμές τροφίμων",
	"index::home_card_label_food_2": "Φάρμες και έδαφος",
	"index::home_card_label_freedom_1": "Αυταρχικά καθεστώτα",
	"index::home_card_label_freedom_2": "Ένα μοναδικό εργαλείο",
	"index::home_card_label_get_started_1":
		"Βασικά για αρχάριους",
	"index::home_card_label_get_started_2": "Το πρώτο σας πορτοφόλι",
	"index::home_card_label_get_started_3": "Αγοράστε Bitcoin",
	"index::home_card_label_gold": "Ποιο είναι καλύτερο;",
	"index::home_card_label_housing_1": "Οικονομικά προσιτή στέγαση",
	"index::home_card_label_human_rights_1":
		"Προώθηση ανθρωπίνων δικαιωμάτων",
	"index::home_card_label_human_rights_2": "Λαϊκή υιοθέτηση",
	"index::home_card_label_human_rights_3": "Παγκόσμιο αποτύπωμα",
	"index::home_card_label_inflation": "Το Bitcoin είναι καλύτερο χρήμα",
	"index::home_card_label_networks_1": "Ζωντανή προβολή δικτύου",
	"index::home_card_label_networks_2": "Ας συγκρίνουμε",
	"index::home_card_label_payments_1": "Ποια η διαφορά;",
	"index::home_card_label_payments_2": "Γρήγορες και φθηνές πληρωμές",
	"index::home_card_label_payments_3": "Μεταφορές στο εξωτερικό",
	"index::home_card_label_payments_4": "Δεχτείτε πληρωμές",
	"index::home_card_label_politics_1": "Το πολιτικό παράδοξο",
	"index::home_card_label_politics_2": "Πηγαίνετε all in",
	"index::home_card_label_property_rights_1": "Ας συγκρίνουμε",
	"index::home_card_label_property_rights_2": "Πραγματική ιδιοκτησία",
	"index::home_card_label_salary": "Προστατέψτε τον μισθό σας",
	"index::home_card_label_self_custody_1": "Οδηγός για πορτοφόλια Bitcoin",
	"index::home_card_label_self_custody_2": "Το πιο σημαντικό βήμα",
	"index::home_card_label_self_custody_3": "Κυρίαρχο χρήμα",
	"index::home_card_label_war_1": "Τερματισμός ατελείωτων πολέμων",
	"index::home_card_label_war_2": "Βοηθά βετεράνους",
	"index::home_card_label_war_3": "Ξεφεύγει από τον πόλεμο",
	"index::home_h1":
		"Το Bitcoin είναι καλύτερο χρήμα που χτίζει έναν καλύτερο κόσμο.",
	"index::home_nav_about": "Σχετικά",
	"index::home_nav_get_involved": "Συμμετέχετε",
	"index::home_nav_learn": "Μάθετε",
	"index::home_source_prefix": "Πηγή:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon και Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Δείτε τον",
	"lightning::lightning_grid_heading":
		"Δημοφιλή πορτοφόλια Lightning",
	"lightning::lightning_hardware_cta_label":
		"Hardware πορτοφόλια",
	"lightning::lightning_header_subtitle":
		"Το Lightning σας επιτρέπει να στέλνετε Bitcoin σε δευτερόλεπτα για ένα κλάσμα του σεντ — επιλέξτε ένα πορτοφόλι του οποίου οι συμβιβασμοί ταιριάζουν με το πόσο Bitcoin σχεδιάζετε να ξοδέψετε.",
	"lightning::lightning_s1_c4_end": "για περισσότερες πληροφορίες.",
	"lightning::lightning_s1_c4_link":
		"Οδηγό για hardware πορτοφόλια Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ — πορτοφόλι Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — αυτο-φυλασσόμενο πορτοφόλι Lightning",
	"lightning::sources_lightning_labs":
		"Lightning Labs — τεκμηρίωση για το Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — πορτοφόλι Lightning με θεματοφύλακα",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android και web",
	"nostr/index::nostr_platform_web": "Περιηγητής ιστού",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Το Nostr είναι ένα νέο αποκεντρωμένο πρωτόκολλο για διαδικτυακή επικοινωνία — καμία εταιρεία δεν το κατέχει, τα Bitcoin zaps είναι ενσωματωμένα και μπορείτε να αλλάξετε client χωρίς να χάσετε followers.",
	"nostr/index::nostr_amethyst_f1":
		"Πολλά χαρακτηριστικά και επιλογές προσαρμογής",
	"nostr/index::nostr_amethyst_f2":
		"Απαιτεί ξεχωριστό πορτοφόλι Bitcoin",
	"nostr/index::nostr_amethyst_f3": "100% δωρεάν",
	"nostr/index::nostr_damus_f1":
		"Γνώριμη διεπαφή τύπου Twitter",
	"nostr/index::nostr_damus_f2":
		"Απαιτεί ξεχωριστό πορτοφόλι Bitcoin",
	"nostr/index::nostr_damus_f3": "100% δωρεάν",
	"nostr/index::nostr_download_heading":
		"Κατεβάστε έναν δωρεάν client Nostr",
	"nostr/index::nostr_download_intro":
		"Οι clients Nostr είναι δωρεάν εφαρμογές που σας επιτρέπουν να διαβάζετε και να γράφετε στο δίκτυο Nostr. Όλες λειτουργούν μαζί — μπορείτε να αλλάξετε client ανά πάσα στιγμή και να κρατήσετε τους followers και το περιεχόμενό σας.",
	"nostr/index::nostr_hero_subtitle":
		"Το Nostr είναι ένα νέο αποκεντρωμένο πρωτόκολλο για διαδικτυακή επικοινωνία — καμία εταιρεία δεν το κατέχει, τα Bitcoin zaps είναι ενσωματωμένα και μπορείτε να εναλλάσσεστε μεταξύ εφαρμογών χωρίς να χάσετε followers.",
	"nostr/index::nostr_hero_title": "Τι είναι το Nostr;",
	"nostr/index::nostr_intro_c1":
		"Το Nostr μοιάζει με email: το πρωτόκολλο δεν ανήκει σε κανέναν, ο καθένας μπορεί να χτίσει εφαρμογή πάνω του και διαλέγετε αυτή που σας ταιριάζει καλύτερα. Σε αντίθεση με το Twitter ή το Facebook, δεν υπάρχει κεντρική εταιρεία που μπορεί να σας λογοκρίνει, να σας αποβάλει ή να σας υποβαθμίσει.",
	"nostr/index::nostr_intro_c2":
		"Παρακάτω είναι η σύντομη έκδοση του γιατί το Nostr έχει σημασία — και στη συνέχεια κάθε δωρεάν client Nostr που χρειάζεστε για να ξεκινήσετε σήμερα.",
	"nostr/index::nostr_iris_f1":
		"Εξαιρετικά απλό — δεν χρειάζεται εγκατάσταση",
	"nostr/index::nostr_iris_f2":
		"Εύκολος τρόπος να δοκιμάσετε το Nostr με δοκιμαστικό λογαριασμό",
	"nostr/index::nostr_iris_f3": "100% δωρεάν",
	"nostr/index::nostr_learn_more_label": "ΠΗΓΑΙΝΕΤΕ ΒΑΘΥΤΕΡΑ",
	"nostr/index::nostr_learn_more_title":
		"Μάθετε περισσότερα για το Nostr στο nostr.how",
	"nostr/index::nostr_primal_f1": "Ο προτεινόμενος πρώτος μας client",
	"nostr/index::nostr_primal_f2":
		"Ενσωματωμένο πορτοφόλι Bitcoin zaps",
	"nostr/index::nostr_primal_f3": "100% δωρεάν",
	"nostr/index::nostr_s1": "Ένα πρωτόκολλο, όχι μια πλατφόρμα",
	"nostr/index::nostr_s1_c1":
		"Το Nostr είναι ένα νέο πρωτόκολλο που σας επιτρέπει να επικοινωνείτε online χωρίς φόβο λογοκρισίας, αποκλεισμού ή υποβάθμισης.",
	"nostr/index::nostr_s1_c2":
		"Πλατφόρμες όπως το Twitter και το Facebook ελέγχονται από μια μεμονωμένη εταιρεία, αλλά το πρωτόκολλο Nostr δεν ελέγχεται από κανέναν.",
	"nostr/index::nostr_s2": "Ελευθερία να μετακινηθείτε",
	"nostr/index::nostr_s2_c1":
		"Το Nostr μοιάζει με email. Κανείς δεν ελέγχει το πρωτόκολλο email, και ο καθένας μπορεί να χτίσει client πάνω του (όπως το Gmail, το Hotmail κ.λπ.).",
	"nostr/index::nostr_s2_c2":
		"Το πρωτόκολλο Nostr επίσης δεν ελέγχεται από κανέναν, και ο καθένας μπορεί να χτίσει client πάνω του (όπως το Damus, το Amethyst κ.λπ.).",
	"nostr/index::nostr_s2_c3":
		"Αν δεν σας αρέσει ο τρόπος που λειτουργεί ένας συγκεκριμένος client, μπορείτε να μεταφέρετε τον λογαριασμό Nostr σας σε άλλον client χωρίς να χάσετε τους followers ή το περιεχόμενό σας.",
	"nostr/index::nostr_s3": "Το Bitcoin είναι ενσωματωμένο",
	"nostr/index::nostr_s3_c1":
		"Το Bitcoin είναι ενσωματωμένο στο πρωτόκολλο Nostr. Όταν βλέπετε περιεχόμενο που σας αρέσει, μπορείτε εύκολα να στείλετε στον συγγραφέα ένα «Bitcoin zap» ως ευχαριστώ!",
	"nostr/index::nostr_s3_c2":
		"Σε κεντρικοποιημένες πλατφόρμες όπως το Twitter και το Facebook, μια κεντρική εταιρεία κερδίζει χρήματα από το περιεχόμενό σας. Αλλά σε ανοιχτά πρωτόκολλα όπως το Nostr, εσείς κερδίζετε χρήματα από το δικό σας περιεχόμενο.",
	"nostr/index::sources_damus": "Damus — client Nostr για iPhone",
	"nostr/index::sources_iris": "Iris — client Nostr στον περιηγητή",
	"nostr/index::sources_nostr_how": "nostr.how — Τι είναι το Nostr;",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — προδιαγραφή ανοιχτού κώδικα",
	"nostr/index::sources_primal":
		"Primal — client Nostr με ενσωματωμένο πορτοφόλι Bitcoin zap",
	"nostr/index::what_is_nostr": "Τι είναι το Nostr;",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Εκτυπώστε τα δικά σας αυτοκόλλητα Bitcoin χρησιμοποιώντας αυτά τα αρχεία.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Η αίτηση ελήφθη 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Παραγγείλτε χονδρικά",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Μοιραστείτε στο Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Τι είναι το Nostr;",
	"sticker-success::sticker_success_bulk_header":
		"Χρειάζεστε περισσότερα αυτοκόλλητα;",
	"sticker-success::sticker_success_hero_title":
		"Τα αυτοκόλλητά σας είναι καθ' οδόν 🎉",
	"sticker-success::sticker_success_share_header":
		"Μοιραστείτε πού βάλατε τα αυτοκόλλητα",
	"sticker-success::sticker_success_tips_header":
		"Καλά μέρη για να βάλετε αυτοκόλλητα",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Και αφού ξεκινήσετε, εκτυπώστε και αναρτήστε και το δικό σας",
	"stickers::stickers_instructions_1":
		"Εισάγετε την ταχυδρομική σας διεύθυνση και θα σας στείλουμε δωρεάν πακέτο αυτοκόλλητων Bitcoin με το ταχυδρομείο. Τα αυτοκόλλητά σας θα φτάσουν σε έναν απλό λευκό φάκελο.",
	"stickers::stickers_btn_choose_pack": "Επιλέξτε αυτό το πακέτο",
	"stickers::stickers_bulk_c1":
		"Θέλετε περισσότερα από μερικά αυτοκόλλητα;",
	"stickers::stickers_bulk_c2":
		"Παραγγείλτε τα χονδρικά από τον ίδιο εκτυπωτή που χρησιμοποιούμε",
	"stickers::stickers_bulk_c3":
		"— όσο περισσότερα αγοράζετε, τόσο φθηνότερα είναι ανά τεμάχιο.",
	"stickers::stickers_bulk_cta": "Αγοράστε αυτοκόλλητα χονδρικά",
	"stickers::stickers_bulk_header":
		"Παραγγείλτε αυτοκόλλητα χονδρικά",
	"stickers::stickers_hero_subtitle":
		"Παραγγείλτε ένα δωρεάν πακέτο αυτοκόλλητων Bitcoin και αναρτήστε τα σε δημόσιους χώρους για να βοηθήσετε περισσότερους ανθρώπους να μάθουν για το Bitcoin.",
	"stickers::stickers_hero_title": "Δωρεάν αυτοκόλλητα Bitcoin",
	"stickers::stickers_intro_c1":
		"Η αποστολή μας είναι να σας βοηθήσουμε να «orange-pill» περισσότερους ανθρώπους κολλώντας αυτοκόλλητα Bitcoin σε δημόσιους χώρους. Όλα τα αυτοκόλλητά μας έχουν κωδικούς QR που οδηγούν σε εκπαιδευτικές σελίδες για τον",
	"stickers::stickers_intro_c3": "πληθωρισμό",
	"stickers::stickers_intro_c4":
		"Επιλέξτε ένα πακέτο αυτοκόλλητων παρακάτω και επιλέξτε πώς τα θέλετε — θα στείλουμε ένα δωρεάν πακέτο σε οποιονδήποτε στις ΗΠΑ ή στον Καναδά, ή μπορείτε να εκτυπώσετε τα δικά σας οπουδήποτε στον κόσμο.",
	"stickers::stickers_mail_header":
		"Θα σας στείλουμε τα αυτοκόλλητά σας δωρεάν με το ταχυδρομείο",
	"stickers::stickers_next_print_flyers": "Διαδώστε περαιτέρω το μήνυμα",
	"stickers::stickers_next_print_flyers_desc":
		"Εκτυπώστε δωρεάν φυλλάδια Bitcoin και αναρτήστε τα δημόσια",
	"stickers::stickers_option_bulk":
		"📦 Παγκοσμίως — παραγγείλτε χονδρικά",
	"stickers::stickers_option_canada":
		"🇨🇦 Καναδάς — δωρεάν με ταχυδρομείο",
	"stickers::stickers_option_print":
		"🌍 Παγκοσμίως — εκτυπώστε τα δικά σας",
	"stickers::stickers_option_usa":
		"🇺🇸 ΗΠΑ — δωρεάν με ταχυδρομείο",
	"stickers::stickers_print_c1":
		"Μπορείτε να συμμετέχετε εκτυπώνοντας τα δικά σας αυτοκόλλητα ανεξάρτητα από το πού μένετε. Κάντε κλικ στη γλώσσα σας παρακάτω για να κατεβάσετε τα αρχεία αυτοκόλλητων και οδηγίες εκτύπωσης.",
	"stickers::stickers_print_c2":
		"Δεν είναι όλα τα αυτοκόλλητα διαθέσιμα σε όλες τις γλώσσες.",
	"stickers::stickers_print_header":
		"Εκτυπώστε τα δικά σας αρχεία αυτοκόλλητων",
	"stickers::stickers_request_c1":
		"Συμπληρώστε τη φόρμα παρακάτω για να ζητήσετε αρχεία αυτοκόλλητων στην τοπική σας γλώσσα. Θα σας ειδοποιήσουμε μόλις είναι έτοιμα.",
	"stickers::stickers_request_header":
		"Δεν βλέπετε τη γλώσσα σας;",
	"stickers::stickers_share_c2":
		"Ακολουθήστε μας στο Nostr αναζητώντας",
	"stickers::stickers_share_c3":
		"σε οποιονδήποτε client Nostr.",
	"stickers::stickers_signs_pack_description":
		"Πινακίδες προειδοποίησης, προσοχής και ειδοποίησης με μηνύματα Bitcoin — σχεδιασμένες να τραβήξουν την προσοχή και να κάνουν τους ανθρώπους να σταματήσουν και να διαβάσουν.",
	"stickers::stickers_step_1_description":
		"Κάθε πακέτο περιέχει διαφορετικό σύνολο αυτοκόλλητων Bitcoin με κωδικούς QR που διδάσκουν τους ανθρώπους για το Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "ΒΗΜΑ 1",
	"stickers::stickers_step_1_header":
		"Επιλέξτε ένα πακέτο αυτοκόλλητων",
	"stickers::stickers_step_2_description":
		"Στέλνουμε δωρεάν πακέτο σε διευθύνσεις στις ΗΠΑ και στον Καναδά. Οπουδήποτε αλλού στον κόσμο, μπορείτε να εκτυπώσετε τα δικά σας ή να παραγγείλετε χονδρικά.",
	"stickers::stickers_step_2_eyebrow": "ΒΗΜΑ 2",
	"stickers::stickers_step_2_header":
		"Πώς θέλετε τα αυτοκόλλητά σας;",
	"stickers::stickers_text_pack_description":
		"Ένα μείγμα σλόγκαν και μονόλογων Bitcoin σχεδιασμένα να κεντρίσουν την περιέργεια σε δημόσιους χώρους.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Επιλέξτε το πορτοφόλι σας",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — κριτικές μεταλλικής αποθήκευσης για Bitcoin seed",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — αυτο-φυλασσόμενο πορτοφόλι Bitcoin",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — hardware πορτοφόλι Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — hardware πορτοφόλι Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — hardware πορτοφόλι Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — hardware πορτοφόλι Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — συσκευή υπογραφής DIY ανοιχτού κώδικα για συναλλαγές Bitcoin",
	"wallets::wallets_grid_heading": "Δημοφιλή πορτοφόλια Bitcoin",
	"wallets::wallets_header_subtitle":
		"Ένας οδηγός βήμα προς βήμα για να επιλέξετε πορτοφόλι, να προστατέψετε τα κλειδιά σας και να πάρετε πλήρη έλεγχο του Bitcoin σας.",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let missing = 0;
	const missingKeys = [];

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const lookupKey = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, lookupKey)) {
			e.targetTranslation = T[lookupKey];
			filled++;
		} else {
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (el): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
