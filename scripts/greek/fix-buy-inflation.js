/**
 * Fixes untranslated English strings in Greek buy_el.json and inflation_el.json
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n', 'el');
const today = '2026-04-10';

function fixFile(filename, translations) {
	const filePath = path.join(i18nDir, filename);
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
	console.log(`FIXED ${filename}: ${count} strings updated`);
}

// ============ BUY ============
fixFile('buy_el.json', {
	"buy_intro_c1": "Η αγορά Bitcoin για πρώτη φορά μπορεί να φαίνεται συντριπτική, αλλά στην πραγματικότητα είναι αρκετά απλή.",
	"buy_intro_c2": "Αυτός ο οδηγός θα σας καθοδηγήσει στη διαδικασία ασφαλούς αγοράς Bitcoin σε λίγα μόνο βήματα.",
	"buy_step_1_description": "Διαφορετικές χώρες έχουν διαφορετικές διαθέσιμες επιλογές αγοράς Bitcoin. Επιλέξτε τη χώρα σας για να δείτε τις καλύτερες επιλογές.",
	// Country names in Greek
	"buy_country_united_states": "Ηνωμένες Πολιτείες",
	"buy_country_australia": "Αυστραλία",
	"buy_country_austria": "Αυστρία",
	"buy_country_belgium": "Βέλγιο",
	"buy_country_brazil": "Βραζιλία",
	"buy_country_canada": "Καναδάς",
	"buy_country_france": "Γαλλία",
	"buy_country_germany": "Γερμανία",
	"buy_country_ireland": "Ιρλανδία",
	"buy_country_italy": "Ιταλία",
	"buy_country_netherlands": "Ολλανδία",
	"buy_country_new_zealand": "Νέα Ζηλανδία",
	"buy_country_spain": "Ισπανία",
	"buy_country_united_kingdom": "Ηνωμένο Βασίλειο",
	"buy_country_argentina": "Αργεντινή",
	"buy_country_chile": "Χιλή",
	"buy_country_colombia": "Κολομβία",
	"buy_country_costa_rica": "Κόστα Ρίκα",
	"buy_country_czech_republic": "Τσεχία",
	"buy_country_denmark": "Δανία",
	"buy_country_el_salvador": "Ελ Σαλβαδόρ",
	"buy_country_estonia": "Εσθονία",
	"buy_country_finland": "Φινλανδία",
	"buy_country_greece": "Ελλάδα",
	"buy_country_guatemala": "Γουατεμάλα",
	"buy_country_hong_kong": "Χονγκ Κονγκ",
	"buy_country_hungary": "Ουγγαρία",
	"buy_country_iceland": "Ισλανδία",
	"buy_country_india": "Ινδία",
	"buy_country_israel": "Ισραήλ",
	"buy_country_japan": "Ιαπωνία",
	"buy_country_latvia": "Λετονία",
	"buy_country_lithuania": "Λιθουανία",
	"buy_country_luxembourg": "Λουξεμβούργο",
	"buy_country_malta": "Μάλτα",
	"buy_country_mexico": "Μεξικό",
	"buy_country_norway": "Νορβηγία",
	"buy_country_panama": "Παναμάς",
	"buy_country_poland": "Πολωνία",
	"buy_country_portugal": "Πορτογαλία",
	"buy_country_romania": "Ρουμανία",
	"buy_country_singapore": "Σιγκαπούρη",
	"buy_country_slovakia": "Σλοβακία",
	"buy_country_slovenia": "Σλοβενία",
	"buy_country_south_africa": "Νότια Αφρική",
	"buy_country_south_korea": "Νότια Κορέα",
	"buy_country_sweden": "Σουηδία",
	"buy_country_switzerland": "Ελβετία",
	"buy_country_thailand": "Ταϊλάνδη",
	"buy_country_turkey": "Τουρκία",
	"buy_country_ukraine": "Ουκρανία",
	"buy_country_uruguay": "Ουρουγουάη",
	// Step 2
	"buy_step_2_description": "Υπάρχουν δύο κύριοι τρόποι αγοράς Bitcoin: με τραπεζικό έμβασμα ή με μετρητά.",
	"buy_method_bank_transfer": "ΤΡΑΠΕΖΙΚΟ ΕΜΒΑΣΜΑ",
	"buy_method_bank_fast": "Γρήγορο και εύκολο",
	"buy_method_bank_less_private": "Λιγότερο ιδιωτικό",
	"buy_method_bank_description": "Τα τραπεζικά εμβάσματα είναι ο πιο συνηθισμένος τρόπος αγοράς Bitcoin. Είναι γρήγορα, εύκολα και έχουν γενικά χαμηλότερες προμήθειες.",
	"buy_method_choose_bank": "Επιλέξτε Τραπεζικό Έμβασμα",
	"buy_method_cash": "ΜΕΤΡΗΤΑ",
	"buy_method_cash_private": "Πιο ιδιωτικό",
	"buy_method_cash_limited": "Περιορισμένες επιλογές",
	"buy_method_cash_description": "Οι αγορές με μετρητά προσφέρουν περισσότερη ιδιωτικότητα αλλά έχουν λιγότερες επιλογές και μπορεί να έχουν υψηλότερες προμήθειες.",
	"buy_method_choose_cash": "Επιλέξτε Μετρητά",
	// Step 3
	"buy_step_3_description": "Εδώ είναι οι καλύτερες επιλογές αγοράς Bitcoin για τη χώρα σας και τη μέθοδο πληρωμής σας.",
	"buy_platform_recommended": "ΠΡΟΤΕΙΝΟΜΕΝΟ",
	"buy_platform_strike_description": "Το Strike είναι ο ταχύτερος και ευκολότερος τρόπος αγοράς Bitcoin με χαμηλές προμήθειες.",
	"buy_platform_swan_description": "Η Swan Bitcoin ειδικεύεται σε υπηρεσίες αποκλειστικά Bitcoin με αυτόματες αγορές σε δολάρια.",
	"buy_platform_river_description": "Η River προσφέρει αγορά, εξόρυξη και φύλαξη Bitcoin με ισχυρή ασφάλεια.",
	"buy_platform_coinsquare_description": "Η Coinsquare είναι ένα καναδικό ανταλλακτήριο Bitcoin με ισχυρή κανονιστική συμμόρφωση.",
	"buy_platform_kraken_description": "Η Kraken είναι ένα καθιερωμένο ανταλλακτήριο Bitcoin με προηγμένα εργαλεία συναλλαγών.",
	"buy_platform_atm_description": "Τα ATM Bitcoin σας επιτρέπουν να αγοράσετε Bitcoin με μετρητά αμέσως. Βρείτε ένα κοντά σας.",
	"buy_platform_bisq_description": "Η Bisq είναι ένα αποκεντρωμένο ανταλλακτήριο peer-to-peer που επιτρέπει ιδιωτικές συναλλαγές Bitcoin χωρίς επαλήθευση ταυτότητας.",
	"buy_platform_relai_description": "Η Relai είναι μια ελβετική εφαρμογή αποκλειστικά Bitcoin με πορτοφόλι αυτο-φύλαξης και αυτόματα σχέδια επένδυσης.",
	// Features
	"buy_platform_feature_instant": "Άμεσες αγορές",
	"buy_platform_feature_low_fees": "Χαμηλές προμήθειες",
	"buy_platform_feature_lightning": "Δίκτυο Lightning",
	"buy_platform_feature_dca": "Μέσος κόστος σε δολάρια",
	"buy_platform_feature_education": "Εκπαιδευτικοί πόροι",
	"buy_platform_feature_withdrawal": "Εύκολη ανάληψη",
	"buy_platform_feature_mining": "Εξόρυξη Bitcoin",
	"buy_platform_feature_custody": "Υπηρεσίες φύλαξης",
	"buy_platform_feature_canadian": "Εστίαση στον Καναδά",
	"buy_platform_feature_regulated": "Ρυθμιζόμενο ανταλλακτήριο",
	"buy_platform_feature_support": "Υποστήριξη πελατών",
	"buy_platform_feature_established": "Καθιερωμένη πλατφόρμα",
	"buy_platform_feature_security": "Ισχυρή ασφάλεια",
	"buy_platform_feature_advanced": "Προηγμένα χαρακτηριστικά",
	"buy_platform_feature_cash": "Αγορές με μετρητά",
	"buy_platform_feature_anonymous": "Πιο ανώνυμο",
	"buy_platform_feature_p2p": "Peer-to-peer",
	"buy_platform_feature_private": "Ιδιωτικές συναλλαγές",
	"buy_platform_feature_decentralized": "Αποκεντρωμένο",
	"buy_platform_feature_bitcoin_only": "Μόνο Bitcoin",
	"buy_platform_feature_self_custody": "Πορτοφόλι αυτο-φύλαξης",
	"buy_platform_feature_auto_invest": "Σχέδια αυτόματης επένδυσης",
	"buy_platform_feature_european": "Εστίαση στην Ευρώπη",
	// Step 4
	"buy_step_4_c1": "Μετά την αγορά Bitcoin, το πιο σημαντικό βήμα είναι να τα μεταφέρετε σε πορτοφόλι αυτο-φύλαξης.",
	"buy_step_4_c2": "Η αφήσετε τα Bitcoin σε ανταλλακτήριο είναι επικίνδυνο γιατί δεν ελέγχετε πραγματικά τα κεφάλαιά σας.",
	"buy_step_4_c3": "Όταν ελέγχετε τα δικά σας ιδιωτικά κλειδιά, έχετε αληθινή ιδιοκτησία των Bitcoin σας.",
	"buy_step_4_c4": "Μάθετε πώς να επιλέξετε το σωστό πορτοφόλι Bitcoin για τις ανάγκες σας:",
	"buy_cta_wallets": "Δείτε τον Οδηγό Πορτοφολιών Bitcoin"
});

// ============ INFLATION ============
fixFile('inflation_el.json', {
	"inflation_usd_s1_c1": "Αν βάζατε $100 στην τράπεζα πριν 5 χρόνια, έχετε χάσει αγοραστική δύναμη.",
	"inflation_usd_s1_c2": "σωρευτικά",
	"inflation_usd_s1_c3": "τα τελευταία $1 χρόνια.",
	"inflation_usd_s1_c4": "Μπορεί ακόμα να έχετε αυτά τα $100 στον τραπεζικό σας λογαριασμό, αλλά αγοράζουν λιγότερα πράγματα πλέον.",
	"inflation_usd_but_why": "ΑΛΛΑ ΓΙΑΤΙ;",
	"inflation_usd_s1_c5": "Στις Ηνωμένες Πολιτείες, δεν υπάρχει σταθερό όριο στο πόσα δολάρια μπορούν να δημιουργηθούν.",
	"inflation_usd_s1_c6": "Από το 2020,",
	"inflation_usd_s1_c7": "το συνολικό ποσό των αμερικανικών δολαρίων έχει αυξηθεί από $4 τρισεκατομμύρια σε πάνω από $20 τρισεκατομμύρια.",
	"inflation_usd_s1_c8": "Αυτή η εκτύπωση χρημάτων προκάλεσε ρεκόρ πληθωρισμού.",
	"inflation_usd_s1_c9": "Τα πάντα κοστίζουν περισσότερο τώρα, γιατί η εκτύπωση χρημάτων υποτιμά κάθε δολάριο που ήδη υπάρχει.",
	"inflation_intro_c1": "Ο πληθωρισμός συμβαίνει όταν τυπώνονται ή δημιουργούνται περισσότερα χρήματα, μειώνοντας την αγοραστική δύναμη κάθε μονάδας.",
	"inflation_intro_c2": "Καθώς δημιουργούνται περισσότερα χρήματα μέσω δημοσιονομικών ελλειμμάτων και κεντρικών τραπεζών, οι τιμές αυξάνονται.",
	"inflation_intro_c3": "Με το Bitcoin, υπάρχει σταθερό όριο 21 εκατομμυρίων bitcoin που θα υπάρξουν ποτέ. Κανείς δεν μπορεί να τυπώσει περισσότερα bitcoin.",
	"inflation_intro_usd": "Στις Ηνωμένες Πολιτείες, δεν υπάρχει σταθερό όριο στο πόσα δολάρια μπορούν να δημιουργηθούν.",
	"inflation_intro_cad": "Στον Καναδά, δεν υπάρχει σταθερό όριο στο πόσα καναδικά δολάρια μπορούν να δημιουργηθούν.",
	"inflation_intro_euro": "Στην Ευρωζώνη, δεν υπάρχει σταθερό όριο στο πόσα ευρώ μπορούν να δημιουργηθούν.",
	"inflation_intro_gbp": "Στο Ηνωμένο Βασίλειο, δεν υπάρχει σταθερό όριο στο πόσες βρετανικές λίρες μπορούν να δημιουργηθούν.",
	"inflation_intro_brazilian_real": "Στη Βραζιλία, δεν υπάρχει σταθερό όριο στο πόσα βραζιλιάνικα ρεάλ μπορούν να δημιουργηθούν.",
	"inflation_intro_philippine_peso": "Στις Φιλιππίνες, δεν υπάρχει σταθερό όριο στο πόσα φιλιππινέζικα πέσο μπορούν να δημιουργηθούν.",
	"inflation_intro_mexican_peso": "Στο Μεξικό, δεν υπάρχει σταθερό όριο στο πόσα μεξικανικά πέσο μπορούν να δημιουργηθούν.",
	"inflation_intro_indian_rupee": "Στην Ινδία, δεν υπάρχει σταθερό όριο στο πόσες ινδικές ρουπίες μπορούν να δημιουργηθούν.",
	"inflation_intro_honduran_lempira": "Στην Ονδούρα, δεν υπάρχει σταθερό όριο στο πόσες ονδουρέζικες λεμπίρες μπορούν να δημιουργηθούν.",
	"inflation_intro_venezuelan_bolivar": "Στη Βενεζουέλα, δεν υπάρχει σταθερό όριο στο πόσα βενεζουελάνικα μπολιβάρ μπορούν να δημιουργηθούν.",
	"inflation_intro_japanese_yen": "Στην Ιαπωνία, δεν υπάρχει σταθερό όριο στο πόσα γιαπωνέζικα γιεν μπορούν να δημιουργηθούν.",
	"inflation_intro_australian_dollar": "Στην Αυστραλία, δεν υπάρχει σταθερό όριο στο πόσα αυστραλιανά δολάρια μπορούν να δημιουργηθούν.",
	"inflation_intro_israeli_shekel": "Στο Ισραήλ, δεν υπάρχει σταθερό όριο στο πόσα ισραηλινά σέκελ μπορούν να δημιουργηθούν.",
	"inflation_intro_thai_baht": "Στην Ταϊλάνδη, δεν υπάρχει σταθερό όριο στο πόσα ταϊλανδέζικα μπατ μπορούν να δημιουργηθούν.",
	"inflation_intro_nz_dollar": "Στη Νέα Ζηλανδία, δεν υπάρχει σταθερό όριο στο πόσα δολάρια Νέας Ζηλανδίας μπορούν να δημιουργηθούν.",
	"inflation_cause_c1": "Ενώ οι αλυσίδες εφοδιασμού και ορισμένες εταιρείες συνέβαλαν, η κύρια αιτία του πληθωρισμού είναι η εκτύπωση χρημάτων.",
	"inflation_cause_c2": "Αυτή ήταν μια τεράστια επέκταση της προσφοράς χρήματος και δεν είναι κάτι νέο.",
	"inflation_cause_c3": "Όταν δημιουργούνται περισσότερα χρήματα από το τίποτα, οι τιμές αυξάνονται.",
	"inflation_cause_c4": "Ο πληθωρισμός δεν είναι απλώς αύξηση τιμών. Ο πληθωρισμός είναι η αύξηση της προσφοράς χρήματος.",
	"inflation_cause_usd": "Σχεδόν το 80% όλων των αμερικανικών δολαρίων που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_cad": "Περισσότερο από 1 στα 5 καναδικά δολάρια που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_euro": "Περίπου 1 στα 4 ευρώ που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_gbp": "Περίπου 1 στις 4 βρετανικές λίρες που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_brazilian_real": "Περίπου το 40% όλων των βραζιλιάνικων ρεάλ που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_philippine_peso": "Σχεδόν το 50% όλων των φιλιππινέζικων πέσο που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_mexican_peso": "Περισσότερο από το 50% όλων των μεξικανικών πέσο που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_indian_rupee": "Περισσότερο από το 50% όλων των ινδικών ρουπιών που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_honduran_lempira": "Περισσότερο από το 50% όλων των ονδουρέζικων λεμπιρών που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_venezuelan_bolivar": "Περισσότερο από το 80% όλων των βενεζουελάνικων μπολιβάρ που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020.",
	"inflation_cause_japanese_yen": "Περισσότερο από το 25% όλων των γιαπωνέζικων γιεν που υπάρχουν σήμερα δημιουργήθηκαν μετά το 2020."
});

console.log('\nDone! Buy and inflation fixes complete.');
