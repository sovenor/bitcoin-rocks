#!/usr/bin/env node
/**
 * Greek manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Επιστροφή στην αρχική",
	"404::404_message": "Το Bitcoin είναι καταπληκτικό, αλλά αυτή η χαλασμένη σελίδα δεν είναι.",
	"404::404_not_found_short": "Δεν βρέθηκε",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Παρέχουμε δωρεάν εργαλεία για επιχειρήσεις που διευκολύνουν τις τοπικές επιχειρήσεις να αρχίσουν να δέχονται Bitcoin. Η σελίδα μας Bitcoin για επιχειρήσεις εξηγεί γιατί το Bitcoin είναι καλό για τη δουλειά, πώς να διαλέξετε πορτοφόλι και τερματικό πληρωμών, και προσφέρει δωρεάν αυτοκόλλητα «Bitcoin γίνεται δεκτό εδώ».",
	"about::about_card_business_label": "Εργαλεία για επιχειρήσεις",
	"about::about_card_business_source": "Πηγή: bitcoin.rocks →",
	"about::about_card_business_title":
		"Όλα όσα χρειάζεται μια επιχείρηση για να αρχίσει να δέχεται πληρωμές σε Bitcoin",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Πηγή: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Συνεισφορά",
	"about::about_card_contribute_source": "Πηγή: GitHub →",
	"about::about_card_contribute_title":
		"Μάθετε πώς να συνεισφέρετε στο έργο bitcoin.rocks",
	"about::about_card_email_label": "Email",
	"about::about_card_email_source": "Πηγή: email →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Εκτυπώσιμα φυλλάδια",
	"about::about_card_flyers_source": "Πηγή: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Κατεβάστε και εκτυπώστε φυλλάδια Bitcoin για την κοινότητά σας",
	"about::about_card_github_label": "Αποθετήριο",
	"about::about_card_github_source": "Πηγή: GitHub →",
	"about::about_card_github_title": "Δείτε το bitcoin.rocks στο GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Πηγή: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Δωρεάν αυτοκόλλητα",
	"about::about_card_stickers_source": "Πηγή: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Λάβετε δωρεάν αυτοκόλλητα Bitcoin στην πόρτα σας",
	"about::about_editorial_2":
		"Παραπέμπουμε σε αξιόπιστες πηγές όπως η Federal Reserve (FRED), το αμερικανικό Bureau of Labor Statistics, το FDIC, ο ΟΗΕ, το World Gold Council, το Forbes, το MIT Technology Review, η Lyn Alden και ο James Lavish. Πιστεύουμε ότι όταν τα γεγονότα παρουσιάζονται με σαφήνεια, το Bitcoin μιλάει από μόνο του.",
	"about::about_flyers_blurb":
		"Σχεδιάζουμε εκτυπώσιμα φυλλάδια που μπορείτε να μοιραστείτε σε meetups, να αναρτήσετε σε πίνακες ανακοινώσεων ή να αφήσετε σε γραμματοκιβώτια — ένας απλός τρόπος να κεντρίσετε την περιέργεια και να φέρετε τον κόσμο στο bitcoin.rocks όπου μπορούν να μάθουν περισσότερα.",
	"about::about_header": "Σχετικά με το bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "Το bitcoin.rocks ιδρύθηκε από τον χρήστη",
	"about::about_mission_1b":
		"το 2022 με μια απλή αποστολή: να επιταχύνει την υιοθέτηση του Bitcoin μέσω της εκπαίδευσης.",
	"about::about_open_source_2":
		"Το bitcoin.rocks είναι ένα δωρεάν έργο ανοιχτού κώδικα υπό την άδεια MIT. Όλοι είναι ευπρόσδεκτοι να συνεισφέρουν. Καλωσορίζουμε ιδιαίτερα τους μεταφραστές, που βοηθούν να γίνει το περιεχόμενό μας προσβάσιμο σε ανθρώπους σε όλο τον κόσμο.",
	"about::about_open_source_header": "Ανοιχτός κώδικας",
	"about::about_page_description":
		"Το bitcoin.rocks είναι ένας δωρεάν εκπαιδευτικός ιστότοπος ανοιχτού κώδικα για το Bitcoin, που ιδρύθηκε το 2022. Η αποστολή μας είναι να επιταχύνουμε την υιοθέτηση του Bitcoin μέσω της εκπαίδευσης.",
	"about::about_stickers_blurb":
		"Στέλνουμε δωρεάν αυτοκόλλητα Bitcoin απευθείας στην πόρτα σας, ώστε να βοηθήσετε στην ευαισθητοποίηση για το Bitcoin στην κοινότητά σας. Κάθε μήνα, εκατοντάδες άνθρωποι σαρώνουν τους κωδικούς QR σε αυτά τα αυτοκόλλητα για να μάθουν περισσότερα για το Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Το Bitcoin δεν έχει τραπεζικούς πανικούς",
	"bank-runs::bank_runs_bitcoin_p1":
		"Το Bitcoin είναι σύστημα πλήρων αποθεματικών. Δεν βάζετε τα χρήματά σας σε τράπεζα. Είστε η δική σας τράπεζα. Τα χρήματά σας δεν δανείζονται χωρίς να το ξέρετε, επειδή ο μόνος που έχει πρόσβαση σε αυτά είστε εσείς.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Όσο διατηρείτε το bitcoin σας στο δικό σας πορτοφόλι — όχι σε ανταλλακτήριο ή τυλιγμένο σε ETF — οι τραπεζικοί πανικοί είναι αδύνατοι.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Με το Bitcoin, έχετε πραγματικό έλεγχο των χρημάτων σας.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Από τις 26 Μαρτίου 2020, οι αμερικανικές τράπεζες δεν υποχρεούνται πλέον να διατηρούν κανένα υποχρεωτικό αποθεματικό.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Ποσοστό αποθεματικών τράπεζας",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Πηγή: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Σύστημα πλήρων αποθεματικών — δεν απαιτείται ασφάλιση καταθέσεων.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Κάλυψη Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Πηγή: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Κάθε bitcoin υπάρχει στο blockchain — τίποτα δεν δανείζεται.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Ποσοστό αποθεματικών Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Πηγή: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Ταμείο ασφάλισης 153,9 δισ. $ έναντι 10,82 τρισ. $ ασφαλισμένων καταθέσεων (Δεκ. 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Κάλυψη FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Πηγή: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42%",
	"bank-runs::bank_runs_card_svb_label": "Μελέτη περίπτωσης",
	"bank-runs::bank_runs_card_svb_source":
		"Πηγή: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Δείτε πώς συνέβη ο τραπεζικός πανικός της Silicon Valley Bank",
	"bank-runs::bank_runs_card_wallet_label": "Επόμενο βήμα",
	"bank-runs::bank_runs_card_wallet_source": "Ξεκινήστε εδώ →",
	"bank-runs::bank_runs_card_wallet_title":
		"Μάθετε πώς να αποκτήσετε το δικό σας πορτοφόλι Bitcoin",
	"bank-runs::bank_runs_fdic_heading":
		"Η ασφάλιση FDIC καλύπτει περίπου το 1% των καταθέσεων",
	"bank-runs::bank_runs_fdic_p1":
		"Η ασφάλιση FDIC προστατεύει καταθέσεις έως 250.000 $ ανά καταθέτη. Αλλά το ταμείο ασφάλισης είναι μικρό σε σχέση με τις συνολικές καταθέσεις που υποτίθεται ότι προστατεύει.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Σε ευρεία τραπεζική κατάρρευση, η κυβέρνηση θα τύπωνε πιθανότατα χρήματα για να καλύψει τη διαφορά — οδηγώντας σε περισσότερο",
	"bank-runs::bank_runs_fdic_p2_link": "πληθωρισμό.",
	"bank-runs::bank_runs_header":
		"Το Bitcoin δεν έχει τραπεζικούς πανικούς, αλλά η τράπεζά σας μπορεί να έχει.",
	"bank-runs::bank_runs_page_description":
		"Οι τράπεζες δανείζουν τις καταθέσεις σας με κλασματικό αποθεματικό τραπεζικό σύστημα. Αν πάρα πολλοί αποσύρουν ταυτόχρονα, οι τράπεζες μπορούν να καταρρεύσουν. Το Bitcoin είναι σύστημα πλήρων αποθεματικών — οι τραπεζικοί πανικοί είναι αδύνατοι.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: ένα πραγματικό παράδειγμα",
	"bank-runs::bank_runs_svb_p1_a":
		"Τον Μάρτιο του 2023, η Silicon Valley Bank κατέρρευσε αφού είχε επενδύσει τις καταθέσεις των πελατών σε μακροπρόθεσμα",
	"bank-runs::bank_runs_svb_p1_b":
		"Όταν αυτά τα ομόλογα έχασαν αξία, η SVB δεν μπορούσε να καλύψει τις αναλήψεις. Η τράπεζα κατέστη αφερέγγυα.",
	"bank-runs::bank_runs_svb_p1_link": "κρατικά ομόλογα.",
	"bank-runs::bank_runs_svb_p2":
		"Χιλιάδες επιχειρήσεις δεν μπορούσαν να πληρώσουν τους υπαλλήλους τους. Το FDIC επενέβη — αλλά ένα μεγαλύτερο ερώτημα αναδύθηκε: είναι πραγματικά ασφαλή τα χρήματά σας;",
	"bank-runs::bank_runs_what_p1":
		"Οι τράπεζες δεν φυλάνε τις καταθέσεις σας σε θησαυροφυλάκιο. Δανείζουν και επενδύουν τα χρήματά σας — αυτό λέγεται κλασματικό αποθεματικό τραπεζικό σύστημα.",
	"bank-runs::bank_runs_what_p2":
		"Αν πάρα πολλοί προσπαθήσουν να αποσύρουν ταυτόχρονα, η τράπεζα δεν έχει αρκετά μετρητά για να πληρώσει όλους. Αυτό είναι ένας τραπεζικός πανικός — και μπορεί να προκαλέσει πλήρη κατάρρευση της τράπεζας.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">τραπεζών</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Το Bitcoin μπορεί να χρησιμοποιηθεί από οποιονδήποτε έχει σύνδεση στο διαδίκτυο — είναι ",
	"bitcoin-vs-banks::point_1_summary_2": "χωρίς άδεια.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Οι τράπεζες μπορούν να απορρίψουν, να παγώσουν ή να κλείσουν λογαριασμούς βάσει των δικών τους κανόνων ή κυβερνητικών κανονισμών.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Το δίκτυο Bitcoin λειτουργεί 24/7/365 χωρίς παράθυρα συντήρησης ή αργίες. Οι τράπεζες έχουν περιορισμένο ωράριο, κλείσιμο τα σαββατοκύριακα και λειτουργικές διακοπές.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Κάθε συναλλαγή Bitcoin βρίσκεται σε δημόσιο blockchain που μπορεί να επαληθεύσει ο καθένας. Οι τράπεζες κρατούν ιδιωτικά βιβλία που οι πελάτες δεν μπορούν να ελέγξουν ανεξάρτητα.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Με το Bitcoin, φυλάτε μόνοι σας τα ιδιωτικά σας κλειδιά — δείτε τον απλό οδηγό μας για ",
	"bitcoin-vs-banks::point_4_summary_2": "πορτοφόλια Bitcoin",
	"bitcoin-vs-banks::point_4_summary_3":
		". Οι τράπεζες κρατούν τα χρήματά σας και μπορούν να τα παγώσουν, να τα περιορίσουν ή να τα μπλοκάρουν οποιαδήποτε στιγμή.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Οι χρεώσεις Bitcoin είναι διαφανείς και προβλέψιμες. Οι τράπεζες προσθέτουν σταδιακά κρυφές χρεώσεις για λογαριασμούς, υπεραναλήψεις, μεταφορές και ATM.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Το Bitcoin σας επιτρέπει να ξοδεύετε μόνο ό,τι πραγματικά έχετε. Οι τράπεζες επιτρέπουν υπεραναλήψεις και στη συνέχεια χρεώνουν μια σειρά από χρεώσεις ποινής για αυτό.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Μόλις σταλεί μια συναλλαγή Bitcoin, δεν μπορεί να σταματήσει ή να αντιστραφεί. Οι τράπεζες μπορούν να μπλοκάρουν, να παγώσουν ή να ακυρώσουν συναλλαγές βάσει κανόνων ή κυβερνητικών εντολών.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">ομολόγων</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Τα ομόλογα είναι «χωρίς ρίσκο» μόνο ονομαστικά — ο πληθωρισμός, οι διακυμάνσεις επιτοκίων και ο κίνδυνος αθέτησης διαβρώνουν τις πραγματικές αποδόσεις.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Το Bitcoin έχει διαφανή μεταβλητότητα, αλλά κανέναν κρυφό κίνδυνο αντισυμβαλλομένου.",
	"bitcoin-vs-bonds::point_2_summary_1": "Όταν ο",
	"bitcoin-vs-bonds::point_2_summary_2": "πληθωρισμός",
	"bitcoin-vs-bonds::point_2_summary_3":
		"υπερβαίνει τις αποδόσεις των ομολόγων, οι κάτοχοι ομολόγων χάνουν πραγματική αγοραστική δύναμη κάθε χρόνο. Το όριο 21 εκατομμυρίων του Bitcoin δεν μπορεί να διαλυθεί από τον πληθωρισμό.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Οι αγορές ομολόγων μπορούν να παγώσουν κατά τη διάρκεια κρίσεων — η Silicon Valley Bank κατέρρευσε εν μέρει επειδή κατείχε ομόλογα που έχασαν αξία. Δείτε πώς συμβαίνουν οι",
	"bitcoin-vs-bonds::point_3_summary_2": "τραπεζικοί πανικοί",
	"bitcoin-vs-bonds::point_3_summary_3":
		" και γιατί το Bitcoin τους αποφεύγει. Το Bitcoin διαπραγματεύεται 24/7 παγκοσμίως χωρίς κρίσεις ρευστότητας.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Οι δημοπρασίες κρατικών ομολόγων μπορούν να αποτύχουν όταν δεν υπάρχουν αρκετοί αγοραστές — δείτε την",
	"bitcoin-vs-bonds::point_4_summary_2": "ασθενή δημοπρασία του 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Η τιμή του Bitcoin ανακαλύπτεται συνεχώς σε ανοιχτές αγορές χωρίς κεντρική δημοπρασία που μπορεί να αποτύχει.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Οι αποδόσεις ομολόγων είναι κλειδωμένες κατά την αγορά. Ακόμη και αν η οικονομία αναπτύσσεται ή το νόμισμα καταρρέει, η απόδοσή σας παραμένει η ίδια.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Το Bitcoin έχει σημαντικό χώρο για ανάπτυξη καθώς αυξάνεται η υιοθέτηση και η ζήτηση συναντά σταθερή προσφορά.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Τα περισσότερα ομόλογα φυλάσσονται μέσω τραπεζών ή μεσιτών, προσθέτοντας κίνδυνο αντισυμβαλλομένου. Το Bitcoin μπορεί να φυλάσσεται αυτο-φυλαγμένο με ένα",
	"bitcoin-vs-bonds::point_6_summary_2": "πορτοφόλι",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — εξαλείφοντας εντελώς αυτόν τον κίνδυνο.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Τα ομόλογα εξαρτώνται πλήρως από την αποπληρωμή του χρέους των κυβερνήσεων. Αν μια κυβέρνηση αθετήσει ή μειώσει το χρέος μέσω πληθωρισμού, οι κάτοχοι ομολόγων χάνουν.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Το Bitcoin λειτουργεί ανεξάρτητα από οποιαδήποτε κυβέρνηση ή πολιτική αρχή.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">μετρητών</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Το Bitcoin μετακινείται οπουδήποτε στον κόσμο μέσω του διαδικτύου σε λίγα λεπτά. Τα μετρητά απαιτούν φυσική παρουσία ή έμπιστους ταχυμεταφορείς — δεν μπορείτε να στείλετε ένα εικοσάρικο με email.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Το Bitcoin λειτουργεί το ίδιο παντού. Τα μετρητά περιορίζονται από τη γεωγραφία, τις συναλλαγματικές ισοτιμίες και την τοπική αποδοχή.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Οι κυβερνήσεις μπορούν να ακυρώσουν μετρητά από τη μια μέρα στην άλλη — η <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Ινδία</a> το έκανε το 2016. Αλλά ακόμη και χωρίς απονομισματοποίηση, τα μετρητά χάνουν αξία λόγω του",
	"bitcoin-vs-cash::point_3_summary_2": "πληθωρισμού.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Το Bitcoin δεν μπορεί να ακυρωθεί από καμία κυβέρνηση ή αρχή.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Τα μετρητά μπορούν να πλαστογραφηθούν, μερικές φορές πειστικά. Το Bitcoin χρησιμοποιεί κρυπτογραφία που καθιστά την πλαστογραφία μαθηματικά αδύνατη.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Το Bitcoin δεν έχει κεντρική αρχή. Τα μετρητά εκδίδονται από κυβερνήσεις που μπορούν να τυπώσουν περισσότερα, να αλλάξουν σχέδια ή να αποσύρουν χαρτονομίσματα κατά βούληση.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Τα μετρητά είναι ευάλωτα σε κλοπή, πυρκαγιά, απώλεια και δήμευση. Το Bitcoin μπορεί να ",
	"bitcoin-vs-cash::point_6_summary_2": "αυτο-φυλάσσεται με ασφάλεια",
	"bitcoin-vs-cash::point_6_summary_3":
		" στο τηλέφωνό σας ή σε συσκευή hardware.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Το Bitcoin μπορεί να διαιρεθεί σε 100 εκατομμύρια satoshi, επιτρέποντας μικρο-πληρωμές οποιουδήποτε μεγέθους. Τα μετρητά έχουν ελάχιστες ονομαστικές αξίες — δεν μπορείτε να χωρίσετε ένα λεπτό.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">ψηφιακών νομισμάτων κεντρικής τράπεζας (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Κανείς δεν μπορεί να σας εμποδίσει να κάνετε συναλλαγές με Bitcoin. Τα CBDC είναι σχεδιασμένα ώστε οι κυβερνήσεις και οι κεντρικές τράπεζες να ελέγχουν κάθε πληρωμή, περιορίζοντας την ιδιωτικότητα και την ελευθερία σας.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Το Bitcoin δεν λήγει ποτέ και δεν έχει μηνιαίες χρεώσεις. Τα CBDC μπορούν να προγραμματιστούν για να λήγουν, αποθαρρύνοντάς σας από το να αποταμιεύετε για το μέλλον.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Το Bitcoin έχει σταθερό όριο 21 εκατομμυρίων BTC. Τα CBDC δεν έχουν όριο προσφοράς και επιτρέπουν στις κυβερνήσεις να επεκτείνουν την προσφορά χρήματος κατά βούληση — προκαλώντας",
	"bitcoin-vs-cbdc::point_3_summary_2": "πληθωρισμό.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Οι διευθύνσεις Bitcoin δεν συνδέονται με την πραγματική σας ταυτότητα. Τα CBDC συνδέονται άμεσα με την κρατική ταυτότητα, επιτρέποντας μαζική παρακολούθηση και λογοκρισία οικονομικών.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Οι κανόνες του Bitcoin επαληθεύονται από δεκάδες χιλιάδες ανεξάρτητους κόμβους. Τα CBDC είναι συγκεντρωμένα σε κυβερνήσεις και κεντρικές τράπεζες που έχουν πλήρη έλεγχο του δικτύου.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Ο καθένας μπορεί να τρέξει κόμβο Bitcoin και να επαληθεύσει τους κανόνες του δικτύου. Τα CBDC δεν επιτρέπουν στους χρήστες να τρέχουν κόμβους — πρέπει να εμπιστευτείτε μια κεντρική αρχή.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Το αυτο-φυλαγμένο Bitcoin δεν μπορεί να παγωθεί από κανέναν. Τα CBDC είναι σχεδιασμένα ώστε οι κυβερνήσεις και οι κεντρικές τράπεζες να μπορούν να παγώσουν λογαριασμούς άμεσα.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Το Bitcoin σας δίνει πλήρη έλεγχο των χρημάτων σας όταν το φυλάσσετε σε ένα",
	"bitcoin-vs-cbdc::point_8_summary_2": "πορτοφόλι.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"Τα CBDC απαιτούν εμπιστοσύνη σε θεματοφύλακες όπως τράπεζες ή κυβερνήσεις που φυλάνε τα χρήματα για εσάς.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Η νομισματική πολιτική του Bitcoin είναι κλειδωμένη στον κώδικα και δεν μπορεί να αλλάξει. Τα CBDC μπορούν να αναπρογραμματιστούν κατά βούληση των πολιτικών, προκαλώντας",
	"bitcoin-vs-cbdc::point_9_summary_2": "πληθωρισμό",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", όταν τυπώνονται πάρα πολλά χρήματα.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Το Bitcoin είναι το πιο ασφαλές δίκτυο υπολογιστών που έχει κατασκευαστεί ποτέ και δεν έχει χακαριστεί ποτέ. Τα CBDC βασίζονται σε τράπεζες και κυβερνήσεις που έχουν χακαριστεί αμέτρητες φορές.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">κρυπτονομισμάτων</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Το πρωτόκολλο Bitcoin είναι σχεδόν αμετάβλητο από το 2009 και παρέχει προβλέψιμους κανόνες. Τα περισσότερα crypto projects αλλάζουν συνεχώς πρωτόκολλα, tokenomics ή διασπώνται σε νέες εκδόσεις.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Το Bitcoin τρέχει σε δεκάδες χιλιάδες ανεξάρτητους κόμβους σε όλο τον κόσμο. Τα περισσότερα crypto projects ελέγχονται από ιδρύματα, εταιρείες ή μικρές ομάδες προγραμματιστών που μπορούν να κάνουν μονομερείς αλλαγές.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Το Bitcoin έχει σταθερό όριο 21 εκατομμυρίων νομισμάτων — το σπανιότερο ψηφιακό περιουσιακό στοιχείο. Τα περισσότερα crypto projects έχουν απεριόριστη προσφορά ή μηχανισμούς για τη δημιουργία νέων tokens αυθαίρετα, διαλύοντας τους κατόχους.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Το Bitcoin έχει έναν σκοπό: peer-to-peer ψηφιακό χρήμα. Όλοι μπορούν να το κατανοήσουν και να το χρησιμοποιήσουν. Τα περισσότερα crypto περιλαμβάνουν πολύπλοκα smart contracts ή DeFi που απαιτούν τεχνικές γνώσεις για ασφαλή χρήση.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Το Proof of Work του Bitcoin λειτουργεί χωρίς επιτυχή επίθεση στην κύρια αλυσίδα για πάνω από 15 χρόνια. Τα περισσότερα crypto projects χρησιμοποιούν πειραματικό consensus που δεν έχει δοκιμαστεί διεξοδικά.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Το Bitcoin είναι ψηφιακό χρήμα — αποθήκη αξίας και μέσο ανταλλαγής. Τα περισσότερα crypto tokens είναι κερδοσκοπικά utility ή governance tokens με ασαφή πραγματική αξία.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Το Bitcoin γίνεται πιο ισχυρό υπό επίθεση και έχει επιβιώσει από κάθε κρίση, απαγόρευση και κριτική. Τα περισσότερα crypto projects καταρρέουν υπό ρυθμιστική, τεχνική ή εμπορική πίεση.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Το Bitcoin δεν έχει CEO, εταιρεία ή μοναδικό σημείο αποτυχίας. Τα περισσότερα crypto projects εξαρτώνται από VC επενδυτές, συγκεκριμένη ηγεσία ή την επιβίωση μιας μεμονωμένης εταιρείας.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">εικαστικών τεχνών</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Κάθε bitcoin είναι πανομοιότυπο και ανταλλάξιμο. Κάθε έργο τέχνης είναι μοναδικό — διαφορετική προέλευση, ιστορία, κατάσταση και καταγωγή καθιστούν την άμεση σύγκριση εξαιρετικά δύσκολη.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Το Bitcoin διαπραγματεύεται 24/7 σε μια παγκόσμια αγορά προσβάσιμη σε όλους. Οι εικαστικές τέχνες απαιτούν εξειδικευμένους οίκους δημοπρασιών, ιδιώτες εμπόρους ή γκαλερί, και οι πωλήσεις μπορεί να διαρκέσουν μήνες.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Η αγορά ή πώληση Bitcoin κοστίζει λιγότερο από 1% σε χρεώσεις, συχνά πολύ λιγότερο. Οι πωλήσεις τέχνης συσσωρεύουν 30-40% σε buyer's premiums, προμήθειες, ασφάλιση, μεταφορά και χρεώσεις αυθεντικοποίησης.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Το Bitcoin μπορεί να διαιρεθεί σε 100 εκατομμύρια satoshi, καθιστώντας το ιδανικό για συναλλαγές οποιουδήποτε μεγέθους. Δεν μπορείτε να κατέχετε μέρος ενός πίνακα ή μια γωνία ενός γλυπτού χωρίς κίνδυνο αντισυμβαλλομένου.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Η ιδιοκτησία και η αυθεντικότητα του Bitcoin μπορούν να επαληθευτούν κρυπτογραφικά από τον καθένα στο blockchain. Η αυθεντικοποίηση της τέχνης είναι ακριβή, αργή και τακτικά εξαπατάται από πλαστογράφους — καταστρέφοντας την αξία ενός έργου από τη μια μέρα στην άλλη.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Το σωστά εφεδρικά αντιγραμμένο Bitcoin επιβιώνει από πλημμύρες, πυρκαγιές, σεισμούς και κλοπές. Οι εικαστικές τέχνες είναι ευάλωτες σε κάθε είδος φυσικής καταστροφής, και η ασφάλιση σπάνια καλύπτει τα πάντα.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Όλοι με σύνδεση στο διαδίκτυο και λίγα χρήματα μπορούν να αγοράσουν Bitcoin. Η επένδυση στην τέχνη περιορίζεται πρακτικά σε πλούσιους συλλέκτες με πρόσβαση σε δημοπρασίες και εξειδικευμένη γνώση.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">χρυσού</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Το Bitcoin μπορεί να αποσταλεί άμεσα μέσω διαδικτύου με χαμηλές χρεώσεις. Ο χρυσός πρέπει να αποσταλεί φυσικά για να μεταφερθεί η ιδιοκτησία.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Το Bitcoin είναι ένα γεννημένο ψηφιακά περιουσιακό στοιχείο που μπορείτε να μεταφέρετε μέσω διαδικτύου. Ο διαδικτυακός χρυσός είναι ψηφιακό IOU — κατέχετε μόνο μια υπόσχεση από έναν θεματοφύλακα, όχι το ίδιο το μέταλλο.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Το Bitcoin έχει σταθερό όριο 21 εκατομμυρίων BTC. Η προσφορά χρυσού αυξάνεται κατά περίπου <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6% ετησίως</a>, συρρικνώνοντας το μερίδιό σας — λιγότερο από τον πληθωρισμό fiat",
	"bitcoin-vs-gold::point_3_summary_2": "πληθωρισμό",
	"bitcoin-vs-gold::point_3_summary_3":
		", αλλά παρόλα αυτά πληθωρισμός.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Όταν οι τιμές χρυσού αυξάνονται, εξορύσσεται περισσότερος χρυσός, πιέζοντας την τιμή ξανά προς τα κάτω. Η προσφορά Bitcoin είναι ανελαστική — όσο ψηλά κι αν φτάσει η τιμή, θα υπάρχουν πάντα μόνο 21 εκατομμύρια.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Το δίκτυο Bitcoin επαληθεύεται από δεκάδες χιλιάδες ανεξάρτητους κόμβους. Το μεγαλύτερο μέρος του φυσικού χρυσού βρίσκεται σε λίγα μεγάλα θησαυροφυλάκια.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Ο καθένας μπορεί να επαληθεύσει το γνήσιο Bitcoin τρέχοντας έναν πλήρη κόμβο — είναι απλά μια εφαρμογή. Η επαλήθευση του φυσικού χρυσού απαιτεί να λιώσει· θα μπορούσε να υπάρχει βολφράμιο μέσα.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Το Bitcoin μπορεί να διαιρεθεί σε 100 εκατομμύρια satoshi, καθιστώντας το ιδανικό για αγορές οποιουδήποτε μεγέθους. Ο χρυσός δεν μπορεί να διαιρεθεί εύκολα για μικρότερες συναλλαγές.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">ακινήτων</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Το Bitcoin μετακινείται άμεσα οπουδήποτε στον κόσμο. Τα ακίνητα είναι καθηλωμένα σε μία τοποθεσία και εκτίθενται σε τοπικούς οικονομικούς, πολιτικούς και περιβαλλοντικούς κινδύνους.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Το Bitcoin μπορεί να διαιρεθεί σε 100 εκατομμύρια satoshi. Τα ακίνητα δεν μπορούν να πωληθούν μερικώς — δεν μπορείτε να πουλήσετε μια κουζίνα ή να αγοράσετε μισό υπνοδωμάτιο.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Το Bitcoin λειτουργεί σε αποκεντρωμένο δίκτυο που καμία κυβέρνηση δεν μπορεί να ελέγξει. Τα ακίνητα είναι έντονα ρυθμιζόμενα — ζωνοποίηση, έλεγχος ενοικίων, απαλλοτρίωση και κατάσχεση εφαρμόζονται όλα.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Το Bitcoin δεν απαιτεί συντήρηση. Τα ακίνητα απαιτούν επισκευές, ανακαινίσεις, ασφάλιση, διαχείριση ιδιοκτησίας και αντιμετώπιση προβλημάτων ενοικιαστών.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Το Bitcoin δεν υπόκειται σε συνεχιζόμενους φόρους — πληρώνετε μόνο φόρο κεφαλαιακών κερδών όταν πουλάτε. Τα ακίνητα πληρώνουν ετήσιο φόρο ιδιοκτησίας ανεξάρτητα από εισόδημα.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Το σωστά εφεδρικά αντιγραμμένο Bitcoin επιβιώνει από πυρκαγιές, πλημμύρες και σεισμούς. Τα ακίνητα είναι ευάλωτα σε κάθε καταστροφή, και η ασφάλιση σπάνια καλύπτει τα πάντα.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Κάθε bitcoin είναι πανομοιότυπο και ανταλλάξιμο. Κάθε ακίνητο είναι μοναδικό, καθιστώντας την αποτίμηση και τη σύγκριση δύσκολες.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Το Bitcoin διαπραγματεύεται παγκοσμίως 24/7 για όλους με πρόσβαση στο διαδίκτυο. Οι πωλήσεις ακινήτων περιορίζονται σε τοπικούς αγοραστές και μπορεί να χρειαστούν μήνες για να κλείσουν με γραφειοκρατία.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Το Bitcoin επιτρέπει άμεση ατομική ιδιοκτησία για τον καθένα. Η αγορά ακινήτων ως επένδυση πέρα από την κύρια κατοικία αυξάνει τις τιμές κατοικιών, μειώνει τη διαθεσιμότητα στέγης και δημιουργεί κρίση στέγης.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">μετοχών</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Το Bitcoin είναι ένα άμεσο περιουσιακό στοιχείο που κατέχετε πλήρως. Οι μετοχές είναι μερίδια μιας εταιρείας — η αξία τους εξαρτάται από τη διοίκηση, την απόδοση και αποφάσεις που δεν ελέγχετε.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Το Bitcoin έχει σταθερό όριο 21 εκατομμυρίων BTC. Οι εταιρείες μπορούν να εκδώσουν νέες μετοχές ανά πάσα στιγμή και να διαλύσουν τους υπάρχοντες μετόχους — όπως ο",
	"bitcoin-vs-stocks::point_2_summary_2": "πληθωρισμός",
	"bitcoin-vs-stocks::point_2_summary_3":
		" fiat διαλύει τα μετρητά. Με το Bitcoin, το μερίδιό σας δεν μικραίνει ποτέ.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Το Bitcoin δεν έχει CEO ή μοναδικό σημείο αποτυχίας. Οι μετοχές εξαρτώνται έντονα από τη διοίκηση — μια κακή απόφαση ή ένα βασικό άτομο που φεύγει μπορεί να ρίξει την τιμή.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Η τιμή Bitcoin προέρχεται από ανοιχτές παγκόσμιες αγορές. Η αποτίμηση μετοχών βασίζεται σε δείκτες όπως P/E που μπορεί να κρύβουν υπερτιμημένες μετοχές.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Το Bitcoin διαπραγματεύεται 24/7 σε όλο τον κόσμο. Οι αγορές μετοχών είναι ανοιχτές μόνο τις εργάσιμες ημέρες κατά τις ώρες συναλλαγών.",
	"bitcoin-vs-stocks::point_6_summary_1": "Με το Bitcoin, μπορείτε να περάσετε σε",
	"bitcoin-vs-stocks::point_6_summary_2": "αυτο-φύλαξη",
	"bitcoin-vs-stocks::point_6_summary_3":
		" με μια απλή εφαρμογή — δεν χρειάζεται μεσίτης. Οι μετοχές φυλάσσονται σε χρηματιστηριακές εταιρείες, εκθέτοντάς σας σε κίνδυνο αντισυμβαλλομένου αν καταρρεύσουν.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Η σταθερή προσφορά του Bitcoin το καθιστά αξιόπιστη αντιστάθμιση πληθωρισμού. Μερικές μετοχές νικούν τον πληθωρισμό, άλλες όχι — δεν υπάρχει εγγύηση.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Η διαφορά μεταξύ <span class=\"orange\">Bitcoin</span> και <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Το Bitcoin είναι ανοιχτό δίκτυο που ο καθένας μπορεί να προσχωρήσει χωρίς άδεια. Η Visa είναι κλειστό σύστημα ελεγχόμενο από χρηματοπιστωτικά ιδρύματα που μπορούν να αρνηθούν την πρόσβαση — ειδικά σε άτομα χωρίς τραπεζικό λογαριασμό ή με περιορισμένη τραπεζική πρόσβαση.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Οι συναλλαγές Bitcoin δεν έχουν χρεώσεις εμπόρου. Η Visa τυπικά χρεώνει τους εμπόρους περίπου 3% ανά συναλλαγή — η επιχείρησή σας μπορεί να εξοικονομήσει χρήματα αποδεχόμενη",
	"bitcoin-vs-visa::point_2_summary_2": "πληρωμές Bitcoin",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Κάθε συναλλαγή Bitcoin βρίσκεται σε δημόσιο, επαληθεύσιμο blockchain. Η Visa λειτουργεί κλειστό, ιδιόκτητο σύστημα όπου οι πελάτες δεν μπορούν να επαληθεύσουν τίποτα ανεξάρτητα.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Το Bitcoin δεν μπορεί να παγωθεί από καμία κεντρική αρχή. Η Visa μπορεί να παγώσει λογαριασμούς, να μπλοκάρει συναλλαγές ή να αρνηθεί την υπηρεσία οποιαδήποτε στιγμή.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Το Bitcoin είναι τελικός διακανονισμός — ξοδεύετε μόνο ό,τι έχετε. Οι πιστωτικές κάρτες δημιουργούν χρέος με επιτόκια που συχνά ξεπερνούν το 25% ετησίως.",
	"bitcoin-vs-visa::point_6_summary_1": "Το Bitcoin σας επιτρέπει να μεταβείτε σε",
	"bitcoin-vs-visa::point_6_summary_2": "αυτο-φύλαξη",
	"bitcoin-vs-visa::point_6_summary_3":
		" χωρίς να χρειάζεστε τράπεζα ή επεξεργαστή πληρωμών. Οι πιστωτικές κάρτες απαιτούν πάντα ενδιάμεσους.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Το Bitcoin λειτουργεί 24/7 παγκοσμίως χωρίς εργάσιμες ώρες. Η Visa έχει λειτουργικές ώρες, παράθυρα συντήρησης και γεωγραφικούς περιορισμούς που μπορούν να μπλοκάρουν συναλλαγές.",
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
			const ns = e.namespace;
			if (
				ns === "404" ||
				ns === "about" ||
				ns === "bank-runs" ||
				ns.startsWith("bitcoin-vs-")
			) {
				missing++;
				missingKeys.push(lookupKey);
			}
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (el): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
