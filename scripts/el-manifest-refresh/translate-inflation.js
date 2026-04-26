#!/usr/bin/env node
/**
 * Greek manifest refresh — inflation namespace translator.
 *
 * Handles the per-currency keys (13 currencies × ~25 suffixes) plus the
 * shared non-currency labels / stories / sources / manifest-changed keys.
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

/* ─────────────── Per-currency labels & terms ─────────────── */

const CURRENCY = {
	usd: {
		longName: "αμερικανικά δολάρια",
		longNameNom: "αμερικανικό δολάριο",
		noun: "δολάριο",
		nounPlural: "δολάρια",
		label: "Αμερικανικό δολάριο",
		existenceTitle: "Αμερικανικά δολάρια σε κυκλοφορία",
		debtTitle: "Συνολικό ομοσπονδιακό χρέος",
	},
	eur: {
		longName: "ευρώ",
		longNameNom: "ευρώ",
		noun: "ευρώ",
		nounPlural: "ευρώ",
		label: "Ευρώ",
		existenceTitle: "Ευρώ σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος της Ευρωζώνης",
	},
	aud: {
		longName: "αυστραλιανά δολάρια",
		longNameNom: "αυστραλιανό δολάριο",
		noun: "αυστραλιανό δολάριο",
		nounPlural: "αυστραλιανά δολάρια",
		label: "Αυστραλιανό δολάριο",
		existenceTitle: "Αυστραλιανά δολάρια σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος της Αυστραλίας",
	},
	brl: {
		longName: "βραζιλιάνικα ρεάλ",
		longNameNom: "βραζιλιάνικο ρεάλ",
		noun: "ρεάλ",
		nounPlural: "ρεάλ",
		label: "Βραζιλιάνικο ρεάλ",
		existenceTitle: "Ρεάλ σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος της Βραζιλίας",
	},
	cad: {
		longName: "καναδικά δολάρια",
		longNameNom: "καναδικό δολάριο",
		noun: "καναδικό δολάριο",
		nounPlural: "καναδικά δολάρια",
		label: "Καναδικό δολάριο",
		existenceTitle: "Καναδικά δολάρια σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος του Καναδά",
	},
	gbp: {
		longName: "βρετανικές λίρες",
		longNameNom: "βρετανική λίρα",
		noun: "λίρα",
		nounPlural: "λίρες",
		label: "Βρετανική λίρα",
		existenceTitle: "Λίρες σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος του Ηνωμένου Βασιλείου",
	},
	ils: {
		longName: "ισραηλινά σέκελ",
		longNameNom: "ισραηλινό σέκελ",
		noun: "σέκελ",
		nounPlural: "σέκελ",
		label: "Ισραηλινό σέκελ",
		existenceTitle: "Σέκελ σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος του Ισραήλ",
	},
	inr: {
		longName: "ινδικές ρουπίες",
		longNameNom: "ινδική ρουπία",
		noun: "ρουπία",
		nounPlural: "ρουπίες",
		label: "Ινδική ρουπία",
		existenceTitle: "Ρουπίες σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος της Ινδίας",
	},
	jpy: {
		longName: "ιαπωνικά γιεν",
		longNameNom: "ιαπωνικό γιεν",
		noun: "γιεν",
		nounPlural: "γιεν",
		label: "Ιαπωνικό γιεν",
		existenceTitle: "Γιεν σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος της Ιαπωνίας",
	},
	mxn: {
		longName: "μεξικανικά πέσο",
		longNameNom: "μεξικανικό πέσο",
		noun: "πέσο",
		nounPlural: "πέσο",
		label: "Μεξικανικό πέσο",
		existenceTitle: "Πέσο σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος του Μεξικού",
	},
	nzd: {
		longName: "νεοζηλανδικά δολάρια",
		longNameNom: "νεοζηλανδικό δολάριο",
		noun: "νεοζηλανδικό δολάριο",
		nounPlural: "νεοζηλανδικά δολάρια",
		label: "Νεοζηλανδικό δολάριο",
		existenceTitle: "Νεοζηλανδικά δολάρια σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος της Νέας Ζηλανδίας",
	},
	php: {
		longName: "φιλιππινέζικα πέσο",
		longNameNom: "φιλιππινέζικο πέσο",
		noun: "πέσο",
		nounPlural: "πέσο",
		label: "Φιλιππινέζικο πέσο",
		existenceTitle: "Πέσο σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος των Φιλιππίνων",
	},
	thb: {
		longName: "ταϊλανδέζικα μπατ",
		longNameNom: "ταϊλανδέζικο μπατ",
		noun: "μπατ",
		nounPlural: "μπατ",
		label: "Ταϊλανδέζικο μπατ",
		existenceTitle: "Μπατ σε κυκλοφορία",
		debtTitle: "Δημόσιο χρέος της Ταϊλάνδης",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Αν αποταμιεύετε σε ${c.longName}, πιθανότατα έχετε παρατηρήσει ότι τα χρήματά σας αγοράζουν λιγότερα κάθε χρόνο. Χρειάζεστε περισσότερα ${c.nounPlural} για να αγοράσετε την ίδια ποσότητα αγαθών. Χρειάζεστε περισσότερα ${c.nounPlural} για να διατηρήσετε το βιοτικό σας επίπεδο.`;
		case "intro_2":
			return `Αλλά δεν χρειάζεται να είναι έτσι.`;
		case "intro_highlight":
			return `Τα τελευταία τέσσερα χρόνια, όσοι αποταμιεύουν σε Bitcoin βλέπουν τη ζωή να γίνεται φθηνότερη.`;
		case "proof_h2":
			return `Εδώ είναι η απόδειξη: τα χρήματά σας χάνουν αξία`;
		case "proof_p1":
			return `Κάθε ${c.noun} στον τραπεζικό σας λογαριασμό μπορεί να αγοράσει λιγότερα κάθε χρόνο. Αυτό συμβαίνει επειδή δεν υπάρχει σταθερό όριο στον αριθμό των ${c.nounPlural} που μπορούν να δημιουργηθούν.`;
		case "proof_p2":
			return `Αυτή η απεριόριστη προσφορά είναι ο κύριος λόγος του πληθωρισμού. Τα τελευταία χρόνια, ο αριθμός των ${c.nounPlural} σε κυκλοφορία έχει αυξηθεί δραματικά.`;
		case "proof_p3":
			return `Όταν δημιουργούνται περισσότερα χρήματα από το πουθενά, οι τιμές των πάντων αυξάνονται. Αυτό ισχύει και για τις πρώτες ύλες που αγοράζουν οι επιχειρήσεις για να κατασκευάσουν προϊόντα — οδηγώντας σε υψηλότερες τιμές για εσάς.`;
		case "proof_p4":
			return `Καθώς το δημόσιο χρέος συνεχίζει να αυξάνεται, τυπώνονται περισσότερα χρήματα επειδή όλο και λιγότεροι άνθρωποι θέλουν να δανείσουν στο κράτος.`;
		case "proof_p5_before":
			return `Αν δεν μπορείτε να δανειστείτε χρήματα, δεν μπορείτε να ξοδέψετε χρήματα. Αλλά όταν το κράτος`;
		case "proof_p5_link":
			return `δεν μπορεί να δανειστεί`;
		case "proof_p5_after":
			return `, τυπώνει απλώς περισσότερα.`;
		case "proof_p6":
			return `Περισσότερο δημόσιο χρέος σημαίνει περισσότερη εκτύπωση χρήματος. Περισσότερη εκτύπωση χρήματος σημαίνει περισσότερο πληθωρισμό. Και δεν υπάρχει κανένα σημάδι ότι θα σταματήσει.`;
		case "btc_h2":
			return `Το Bitcoin δεν έχει πληθωρισμό`;
		case "btc_p1":
			return `Πληθωρισμός σημαίνει ότι τα χρήματά σας μπορούν να αγοράσουν λιγότερα με την πάροδο του χρόνου. Το Bitcoin είναι καλό χρήμα επειδή δεν έχει πληθωρισμό.`;
		case "btc_p2_before":
			return `Η προσφορά των ${c.longName} είναι απεριόριστη, που σημαίνει ότι μπορούν να τυπωθούν περισσότερα οποιαδήποτε στιγμή.`;
		case "btc_p2_link":
			return `Το Bitcoin είναι σπάνιο`;
		case "btc_p2_after":
			return `, με σταθερό όριο 21 εκατομμυρίων bitcoin. Κανείς δεν μπορεί να δημιουργήσει περισσότερα.`;
		case "btc_p3":
			return `Ιστορικά, το Bitcoin έχει κερδίσει αγοραστική δύναμη με την πάροδο του χρόνου, ενώ τα ${c.longName} έχουν χάσει αγοραστική δύναμη. Πολλοί χρησιμοποιούν το Bitcoin ως μακροπρόθεσμο λογαριασμό αποταμίευσης — χρήματα που αφήνουν να αυξηθούν για χρόνια χωρίς να τα αγγίζουν.`;
		case "btc_p4":
			return `Προτιμάτε να αποταμιεύετε σε ${c.longName} που αγοράζουν λιγότερα με την πάροδο του χρόνου; Ή σε Bitcoin, που ιστορικά αγοράζει περισσότερα με την πάροδο του χρόνου;`;
		case "freedom_h2":
			return `Το Bitcoin είναι επίσης εργαλείο ελευθερίας`;
		case "freedom_p1":
			return `Κανείς δεν ελέγχει το δίκτυο Bitcoin. Καμία κυβέρνηση ή εταιρεία δεν το διαχειρίζεται. Είναι φτιαγμένο για να προστατεύει την ελευθερία σας και τα χρήματά σας.`;
		case "freedom_p2":
			return `Άνθρωποι σε όλο τον κόσμο χρησιμοποιούν ήδη το Bitcoin για να υπερασπιστούν την ελευθερία τους — ακόμη και όταν οι κυβερνήσεις τους αρνούνται να τους βοηθήσουν ή προσπαθούν να τους σταματήσουν.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Αγοραστική δύναμη που χάθηκε σε 4 χρόνια";
		case "stat_source_bpr":
			return "Πηγή: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Μάθετε περισσότερα →",
	inflation_freedom_scarce_title: "Σπάνιο",
	inflation_freedom_scarce_desc:
		"Θα υπάρχουν ποτέ μόνο 21 εκατομμύρια bitcoin. Κανείς δεν μπορεί να τυπώσει περισσότερα.",
	inflation_freedom_decentralized_title: "Αποκεντρωμένο",
	inflation_freedom_decentralized_desc:
		"Το Bitcoin δεν ελέγχεται από καμία μεμονωμένη οντότητα — ούτε κυβέρνηση ούτε εταιρεία.",
	inflation_freedom_permissionless_title: "Χωρίς άδεια",
	inflation_freedom_permissionless_desc:
		"Ο καθένας, από οπουδήποτε, μπορεί να συνδεθεί στο δίκτυο. Κανείς δεν μπορεί να σας σταματήσει.",
	inflation_freedom_sovereign_title: "Κυρίαρχο",
	inflation_freedom_sovereign_desc:
		"Ένα νέο σύστημα ανεξάρτητο από τους πολιτικούς και τις διαλυμένες τους υποσχέσεις.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "Bitcoin",
	inflation_stat_bitcoin_value: "21 εκατομμύρια",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Σταθερό για πάντα",
	inflation_stat_bitcoin_source: "Πηγή: Bitcoin whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "Σήμερα",
	inflation_stat_currency_counting: "και συνεχίζει να αυξάνεται...",
	inflation_stat_currency_detail_4yr_lost: "Αγοραστική δύναμη που χάθηκε σε 4 χρόνια",
	inflation_stat_currency_source_cpi: "Πηγή: FRED CPI →",
	inflation_stat_currency_source_debt: "Πηγή: FRED δημόσιο χρέος →",
	inflation_stat_currency_source_m1: "Πηγή: FRED προσφορά χρήματος M1 →",
	inflation_stat_currency_source_m1_short: "Πηγή: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Αγοραστική δύναμη που κερδήθηκε σε 4 χρόνια",
	inflation_stat_btc_source_bpr: "Πηγή: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Καναδάς",
	inflation_story_canada_desc:
		"Οι εργαζόμενοι απέκτησαν πρόσβαση στα χρήματά τους χρησιμοποιώντας Bitcoin, αφού οι τραπεζικοί τους λογαριασμοί είχαν παγώσει.",
	inflation_story_nigeria_title: "Νιγηρία",
	inflation_story_nigeria_desc:
		"Διαδηλωτές χρησιμοποίησαν Bitcoin για να χρηματοδοτήσουν το κίνημά τους, αφού οι τράπεζες αρνήθηκαν να συνεργαστούν μαζί τους.",
	inflation_story_pennsylvania_title: "Πενσυλβάνια",
	inflation_story_pennsylvania_desc:
		"Η εξόρυξη Bitcoin καθάρισε απόβλητα άνθρακα που η κυβέρνηση αρνιόταν να αντιμετωπίσει.",
	inflation_story_texas_title: "Τέξας",
	inflation_story_texas_desc:
		"Η εξόρυξη Bitcoin βοήθησε να διατηρηθεί η λειτουργία του ηλεκτρικού δικτύου κατά τη διάρκεια μιας μεγάλης καταιγίδας.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — γράφημα αποδόσεων 4 ετών (όλα τα νομίσματα)",
	sources_bitcoin_source_code:
		"Πηγαίος κώδικας Bitcoin — το όριο προσφοράς των 21 εκατομμυρίων",
	sources_canadian_trucker:
		"Διαμαρτυρία Καναδών φορτηγατζήδων — το Bitcoin χρησιμοποιήθηκε για να παρακαμφθούν παγωμένοι τραπεζικοί λογαριασμοί (YouTube)",
	sources_mempool_space:
		"Mempool.space — δεδομένα προσφοράς και εξόρυξης Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa — πώς το Bitcoin τροφοδοτεί τις διαμαρτυρίες EndSARS στη Νιγηρία",
	sources_pennsylvania_mining:
		"Η εξόρυξη Bitcoin στην Πενσυλβάνια σώζει μεθάνιο από απόβλητα άνθρακα (YouTube)",
	sources_texas_mining:
		"Εξόρυξη Bitcoin και το ηλεκτρικό δίκτυο του Τέξας (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Το Bitcoin δεν έχει πληθωρισμό, αλλά τα χρήματά σας έχουν.",
	inflation_choose: "Επιλέξτε το νόμισμά σας και δείτε την απόδειξη",
	inflation_choose_another: "← Επιλέξτε άλλο νόμισμα",
	inflation_sticker_learn: "Μάθετε πώς το Bitcoin μπορεί να βοηθήσει.",
	inflation_sticker_lets_find_out: "Ας το ανακαλύψουμε.",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (e.namespace !== "inflation") continue;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}

		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		let m = e.key.match(/^inflation_stat_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = "stat_" + m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		m = e.key.match(/^inflation_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		unmatched.push(e.key);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-inflation (el): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
