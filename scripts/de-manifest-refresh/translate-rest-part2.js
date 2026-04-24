#!/usr/bin/env node
/**
 * German manifest refresh — part 2 of non-inflation namespaces.
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
	"de.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Buchhaltungsdienste",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Eine Anleitung in einfachem Deutsch, wie Du Bitcoin-Akzeptanz in Deine Buchhaltung einbindest — Hybrid-Wallets, Anschaffungskosten, Kapitalerträge und wann Du einen Buchhalter rufen solltest.",
	"business/accounting::accounting_s1_c1":
		"Der einfachste Weg, Bitcoin zu akzeptieren, ist über eine Hybrid-Wallet, die 100 % des empfangenen Bitcoins automatisch in Euro (oder Deine lokale Währung) umwandelt, sobald die Zahlung eingeht.",
	"business/accounting::accounting_s1_c2":
		"Mit diesem Setup sieht Deine Buchhaltung genauso aus wie heute — der Endbetrag ist jedes Mal in Euro. Keine Anschaffungskosten, keine Kapitalerträge, keine neuen Tabellen.",
	"business/accounting::accounting_s2":
		"Wenn Du einen Teil in Bitcoin behältst: Anschaffungskosten erfassen",
	"business/accounting::accounting_s2_c1":
		"Einige Unternehmen behalten einen Teil des erhaltenen Bitcoins, anstatt alles automatisch zu konvertieren. Wenn das bei Dir so ist, besteht der wichtigste zusätzliche Schritt darin, die Anschaffungskosten zu erfassen — den Euro-Wert jeder Bitcoin-Zahlung am Tag des Erhalts.",
	"business/accounting::accounting_s2_c2":
		"Auch wenn Du Dein Geschäft rein in Bitcoin siehst, wollen die meisten Steuerbehörden, dass Du den Wert in Euro meldest. Die gute Nachricht: es sind nur zwei Zahlen pro Transaktion — die empfangene Bitcoin-Menge und ihr Wert in Euro an diesem Tag.",
	"business/accounting::accounting_s2_c3":
		"Nutze die unten aufgeführten Tools, um die Preisabfragen zu automatisieren, damit Du nicht täglich Preise prüfen musst.",
	"business/accounting::accounting_s3":
		"Ausgeben oder Verkaufen von gehaltenem Bitcoin",
	"business/accounting::accounting_s3_c1":
		"Wenn Du jede Zahlung automatisch in Euro konvertierst, kannst Du diesen Abschnitt überspringen — er gilt nicht für Dich.",
	"business/accounting::accounting_s3_c2":
		"Wenn Du Bitcoin behalten hast und ihn später ausgibst oder verkaufst, trage den Verkaufspreis in dieselbe Anschaffungskosten-Tabelle ein. Die Differenz zwischen dem Wert des Bitcoins beim Erhalt und beim Ausgeben/Verkaufen ist ein Kapitalgewinn oder -verlust.",
	"business/accounting::accounting_s3_c3": "Zwei kurze Beispiele:",
	"business/accounting::accounting_s4":
		"Brauchst Du einen Profi, der sich mit Bitcoin auskennt?",
	"business/accounting::accounting_s4_c1":
		"Wenn Du es lieber jemand anderem überlässt — oder Deine Bitcoin-Buchhaltung komplexer ist, als eine Hybrid-Wallet abwickeln kann — empfehlen wir Satoshi Pacioli Buchhaltungsdienste, ein Unternehmen spezialisiert auf Bitcoin-Buchhaltung für Geschäfte.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin-Buchhaltung für Dein Unternehmen",
	"business/accounting::accounting_card_bpr_label": "BITCOIN-PREIS",
	"business/accounting::accounting_card_bpr_title":
		"Schlage den aktuellen oder historischen Bitcoin-Preis in Dollar nach",
	"business/accounting::accounting_card_pacioli_label": "BITCOIN-BUCHHALTER",
	"business/accounting::accounting_card_spreadsheet_label":
		"EXCEL-IMPORT",
	"business/accounting::accounting_card_spreadsheet_title":
		"Lade Bitcoin-Preise automatisch in Excel",
	"business/accounting::accounting_card_wallets_label": "HYBRID-WALLETS",
	"business/accounting::accounting_card_wallets_title":
		"Schau Dir unsere empfohlenen Business-Wallets an",
	"business/accounting::accounting_disclaimer":
		"Diese Anleitung dient nur zu Informationszwecken und stellt keine Steuerberatung dar. Für auf Deine Situation zugeschnittene Steuerberatung wende Dich bitte an einen qualifizierten Buchhalter.",
	"business/accounting::accounting_disclaimer_label": "Hinweis",
	"business/accounting::accounting_example_feb_1": "1. Februar",
	"business/accounting::accounting_example_gain_badge": "Kapitalgewinn",
	"business/accounting::accounting_example_gain_explain":
		"Du verbuchst einen Kapitalgewinn von 10 $.",
	"business/accounting::accounting_example_jan_1": "1. Januar",
	"business/accounting::accounting_example_loss_badge": "Kapitalverlust",
	"business/accounting::accounting_example_loss_explain":
		"Du verbuchst einen Kapitalverlust von 10 $.",
	"business/accounting::accounting_example_received_label": "Erhalten",
	"business/accounting::accounting_example_sold_label":
		"Verkauft oder ausgegeben",
	"business/accounting::accounting_hero_subtitle":
		"Bitcoin in Deinem Geschäft zu akzeptieren muss Deine Buchhaltung nicht komplizieren. Hier ist die Kurzfassung — plus Tools und Experten, die es schmerzlos machen.",
	"business/accounting::accounting_intro_c1":
		"Wenn Du bereits Bargeld oder Karten akzeptierst, ist das Hinzufügen von Bitcoin zu Deiner Geschäftsbuchhaltung einfacher als es aussieht. Du hast zwei Wege: jede Bitcoin-Zahlung automatisch sofort in Euro konvertieren (keine neue Buchhaltung) oder einen Teil als Bitcoin behalten (ein paar Zahlen mehr zu erfassen).",
	"business/accounting::accounting_intro_c2":
		"Diese Anleitung führt Dich durch beide Wege — damit Du den passenden für Dein Geschäft wählen und entspannt Bitcoin akzeptieren kannst.",
	"business/accounting::accounting_s1":
		"Der einfache Weg: automatische Umwandlung in Euro",
	"business/accounting::accounting_s3_c6":
		"Und das ist alles. Die zugrunde liegende Mathematik ist dieselbe, mit der Du jedes andere wertsteigernde oder wertverlierende Asset verbuchst.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — aktueller und historischer Bitcoin-Preis in Dollar",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Buchhaltungsdienste — Bitcoin-Buchhaltung für Unternehmen",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Krypto-Preise in Excel importieren",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Kurze Antworten auf die häufigsten Fragen, die Händler stellen, bevor sie Bitcoin akzeptieren — Gebühren, Abwicklung, Wallets, Chargebacks, Kosten und mehr.",
	"business/faq::faq_intro_c1":
		"Tippe unten auf eine Frage, um die Antwort aufzuklappen. Wenn Du bereit bist, Bitcoin zu akzeptieren, führen Dich die Business-Ressourcen am Ende der Seite durch jeden Schritt.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "BUCHHALTUNG",
	"business/index::biz_label_faq": "HÄUFIGE FRAGEN",
	"business/index::biz_label_maps": "HÄNDLERKARTEN",
	"business/index::biz_label_rewards": "BELOHNUNGEN",
	"business/index::biz_label_stickers": "AUFKLEBER",
	"business/index::biz_label_wallets": "WALLETS",
	"business/index::biz_meta_description":
		"Akzeptiere Bitcoin in Deinem Unternehmen mit niedrigeren Gebühren, sofortiger Abwicklung, ohne Chargebacks und gewinne mehr Kunden.",
	"business/index::business_hero_subtitle":
		"Nimm Zahlungen mit niedrigeren Gebühren entgegen, werde sofort bezahlt und gewinne Millionen neuer Kunden — ohne Verträge und versteckte Kosten.",
	"business/index::business_intro_c1":
		"Bitcoin gibt Deinem Unternehmen eine schnellere, günstigere und privatere Möglichkeit, bezahlt zu werden. Keine Vermittler. Keine Chargebacks. Keine Verträge. Nur Geld, das in Sekunden abwickelt, direkt vom Kunden zu Dir.",
	"business/index::business_intro_c2":
		"Unten findest Du die Kurzfassung, warum Bitcoin gut fürs Geschäft ist — und darunter alle Ressourcen, die Du brauchst, um heute damit zu beginnen.",
	"business/index::business_resources_heading":
		"Alles, was Du brauchst, um Bitcoin zu akzeptieren",
	"business/index::business_resources_intro":
		"Gehe diese Ressourcen in Deinem eigenen Tempo durch. Jede ist eine kurze, praktische Anleitung.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Erzähle uns von Deinem Unternehmen",
	"business/maps::biz_maps_form_intro":
		"Wir brauchen nur ein paar Angaben, um Dich einzutragen. Adressdaten speichern wir nur so lange wie nötig, um Dein Unternehmen bei den Karten einzureichen.",
	"business/maps::biz_maps_hero_subtitle":
		"Trage Dein Unternehmen kostenlos auf BTC Map ein — einem offenen, weltweiten Verzeichnis Bitcoin-akzeptierender Händler — damit Bitcoiner in Deiner Nähe Dich finden und bei Dir Bitcoin ausgeben können.",
	"business/maps::biz_maps_hero_title":
		"Bringe Dein Unternehmen auf die Bitcoin-Händlerkarten",
	"business/maps::biz_maps_intro_c1":
		"Bitcoiner suchen aktiv nach Orten, an denen sie ausgeben können. Wenn Dein Unternehmen auf der Karte ist, erscheinst Du bei jedem Bitcoin-Nutzer in der Nähe, der nach Essen, Einkaufen oder Übernachten sucht — völlig kostenlos.",
	"business/maps::biz_maps_intro_c2":
		"Fülle einfach das kurze Formular unten aus, und wir reichen Dein Unternehmen bei BTC Map und anderen Bitcoin-Händlerkarten ein.",
	"business/maps::biz_maps_meta_description":
		"Trage Dein Unternehmen kostenlos auf BTC Map und anderen Bitcoin-Händlerkarten ein, damit Bitcoiner in Deiner Nähe Dich finden.",
	"business/maps::biz_maps_placeholder_address":
		"Straße und Hausnummer",
	"business/maps::biz_maps_placeholder_category":
		"Kategorie (z. B. Restaurant, Café, Hotel)",
	"business/maps::biz_maps_placeholder_city": "Stadt",
	"business/maps::biz_maps_placeholder_country": "Land",
	"business/maps::biz_maps_placeholder_name": "Name des Unternehmens",
	"business/maps::biz_maps_placeholder_region":
		"Bundesland / Region / Provinz",
	"business/maps::biz_maps_placeholder_website":
		"Webseite (optional)",
	"business/maps::biz_maps_view_map_cta": "BTC Map ansehen",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "BTC Map ansehen",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Danke, dass Du Dein Unternehmen eingereicht hast. Wir tragen Dich bald in die Bitcoin-Händlerkarten ein.",
	"business/maps-success::biz_maps_success_hero_title":
		"Einreichung erhalten 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Dein Unternehmen wird innerhalb von 1 bis 2 Wochen auf BTC Map und anderen Bitcoin-Händlerverzeichnissen eingetragen. Wir prüfen jede Einreichung manuell, damit die Karten genau bleiben.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Sobald Dein Eintrag live ist, finden Bitcoiner in Deiner Nähe Dein Unternehmen und kommen vorbei, um Bitcoin auszugeben.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Was als Nächstes passiert",
	"business/maps-success::biz_maps_success_view_c1":
		"Während Du wartest, schau Dir BTC Map an, um das wachsende Netzwerk von Unternehmen weltweit zu sehen, die Bitcoin akzeptieren.",
	"business/maps-success::biz_maps_success_view_header":
		"Schau, wo Du erscheinen wirst",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Lade die englischen Aufkleberdateien herunter, damit Du Deine eigenen „Bitcoin wird hier akzeptiert“-Aufkleber drucken kannst.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Drucke Deine eigenen „Bitcoin wird hier akzeptiert“-Aufkleber auf Englisch, um Deinen Kunden zu zeigen, dass Du Bitcoin akzeptierst.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Lade die englischen „Bitcoin wird hier akzeptiert“-Aufkleberdateien herunter",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Danke für Deine Anfrage nach „Bitcoin wird hier akzeptiert“-Aufkleberdateien in Deiner Sprache.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Anfrage erhalten 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Wir erstellen und veröffentlichen Deine Aufkleberdateien innerhalb von 3 bis 4 Wochen. Sobald sie fertig sind, kannst Du sie kostenlos von unserer Aufkleberdateien-Seite herunterladen und drucken.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Wir veröffentlichen Aufkleberdateien in Chargen, daher kann es mehrere Wochen dauern, bis Deine Sprache live geht. Danke für Deine Geduld!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Was als Nächstes passiert",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"In großen Mengen bestellen",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Weiteres Paket kostenlos anfordern",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Deine kostenlosen „Bitcoin wird hier akzeptiert“-Aufkleber kommen in 2 bis 4 Wochen in einem schlichten weißen Umschlag mit 3 Aufklebern.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Deine Aufkleber sind unterwegs 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Wenn 3 Aufkleber für Dein Unternehmen nicht reichen, fordere gerne noch ein kostenloses Paket an — oder bestelle in großen Mengen beim selben Drucker, den wir nutzen.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Brauchst Du mehr Aufkleber?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"An der Eingangstür oder im Schaufenster, damit Kunden sie vor dem Betreten sehen",
	"business/sticker-success::biz_sticker_success_tip_2":
		"In der Nähe der Kasse, des Zahlungsterminals oder des Bezahlbereichs",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Auf Speisekarten, Preislisten oder Trinkgeldkassen",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Nicht auf Orten anbringen, die Dir nicht gehören oder für die Du keine Erlaubnis hast",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Gute Orte für Deine Aufkleber",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Zeige Deinen Kunden, dass Du Bitcoin akzeptierst. Bestelle ein kostenloses Paket „Bitcoin wird hier akzeptiert“-Aufkleber, um sie in Deinem Geschäft anzubringen.",
	"business/stickers::biz_stickers_hero_title":
		"Kostenlose „Bitcoin wird hier akzeptiert“-Aufkleber",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoin zu akzeptieren ist nur die halbe Miete — Deine Kunden müssen auch wissen, dass Du ihn annimmst. Diese kleinen „Bitcoin wird hier akzeptiert“-Aufkleber sind dafür gedacht, an Deiner Eingangstür, an der Kasse, auf der Speisekarte oder überall dort, wo Kunden sie vor dem Bezahlen sehen, angebracht zu werden.",
	"business/stickers::biz_stickers_intro_c2":
		"Wir senden Dir ein kostenloses Paket überall in den USA oder Kanada, oder Du kannst weltweit Deine eigenen drucken.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — kostenlos per Post",
	"business/stickers::biz_stickers_option_print":
		"🌍 Weltweit — selbst drucken",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 USA — kostenlos per Post",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Übersetzung von „Bitcoin Accepted Here“",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Übersetzung von „Scan to learn why Bitcoin is good for business.“",
	"business/stickers::biz_stickers_print_c1":
		"Du kannst Deine eigenen „Bitcoin wird hier akzeptiert“-Aufkleber drucken, egal wo Du lebst. Tippe unten auf Deine Sprache, um die Aufkleberdateien und Druckhinweise herunterzuladen.",
	"business/stickers::biz_stickers_print_header":
		"Drucke Deine eigenen Aufkleberdateien",
	"business/stickers::biz_stickers_request_c1":
		"Fülle das Formular unten aus, um „Bitcoin wird hier akzeptiert“-Aufkleberdateien in Deiner lokalen Sprache anzufordern. Wir sagen Bescheid, sobald sie fertig sind.",
	"business/stickers::biz_stickers_request_header":
		"Siehst Du Deine Sprache nicht?",
	"business/stickers::biz_stickers_step_description":
		"Wir senden ein kostenloses Paket an Adressen in den USA und Kanada. Überall sonst auf der Welt kannst Du Deine eigenen drucken.",
	"business/stickers::biz_stickers_step_header":
		"Wie möchtest Du Deine Aufkleber bekommen?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Alle Bitcoin-Wallets sind untereinander kompatibel — wähle die, die zu Deinem Unternehmen passt. Kostenlos, sofortige Abwicklung, keine Chargebacks.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin-only Lightning-Wallet",
	"business/wallets::sources_ibex":
		"IBEX — Lightning-Zahlungsinfrastruktur",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin-Zahlungsabwickler",
	"business/wallets::sources_square":
		"Square — Bitcoin-Zahlungen akzeptieren",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin-Rechnungsstellung für Unternehmen",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin-Wallets sind kostenlos. Wähle die, die zu Deinem Geschäft passt — persönlicher Verkauf, online oder Rechnungen — und beginne in wenigen Minuten, Bitcoin zu akzeptieren.",
	"business/wallets::wallets_section_invoice":
		"Wallets für rechnungsstellende Unternehmen",
	"business/wallets::wallets_section_invoice_intro":
		"Wenn Du Kunden Rechnungen schreibst (Beratung, Freelancing, B2B-Dienste), nutze eine Wallet, die auf Rechnungen ausgelegt ist. Der Kunde zahlt die Bitcoin-Rechnung mit wenigen Klicks.",
	"business/wallets::wallets_section_multiple":
		"Wallets für Unternehmen mit mehreren Mitarbeitern",
	"business/wallets::wallets_section_multiple_intro":
		"Wenn Du ein Team hast, das an der Kasse Zahlungen annimmt, wähle eine Wallet, die mehrere Mitarbeiter-Logins unterstützt — so bekommt jeder Mitarbeiter eine eigene PIN, und Du hast eine saubere Übersicht, wer welche Zahlung angenommen hat.",
	"business/wallets::wallets_section_online":
		"Wallets für Online-Unternehmen",
	"business/wallets::wallets_section_online_intro":
		"Verkaufst Du online? Diese Wallets lassen sich an Deinen Online-Shop anbinden und akzeptieren Bitcoin von jedem Kunden, überall auf der Welt — ohne Chargebacks und ohne Händlerkonto.",
	"business/wallets::wallets_section_sole":
		"Wallets für Einzelunternehmen",
	"business/wallets::wallets_section_sole_intro":
		"Wenn Du allein einen Laden, ein Café, ein Studio oder einen Dienst betreibst, reicht jede dieser Wallets. Wähle danach, ob Du Zahlungen in Bitcoin halten oder einen Teil jeder Zahlung automatisch in Deine lokale Währung umwandeln willst.",
	"business/wallets::wallets_strike_note":
		"Strike Business erlaubt Dir, Bitcoin- und Lightning-Zahlungen mit null Gebühren und sofortiger Abwicklung zu akzeptieren. Es unterstützt persönliche, Online- und Rechnungszahlungen mit optionaler automatischer Umwandlung in Deine lokale Währung.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin wird hier akzeptiert",
	"business/why::why_good_for_you":
		"Warum Bitcoin auch für Dich großartig ist",
	"business/why::why_learn_more_lowercase": "Mehr erfahren →",
	"business/why::why_s1_c1":
		"Inflation entsteht, wenn mehr Geld gedruckt oder aus dem Nichts erzeugt wird. Das Geld in Deiner Tasche verliert mit der Zeit an Wert — und deshalb steigen die Preise Jahr für Jahr.",
	"business/why::why_s1_c2":
		"Bitcoin hat ein festes Angebot von 21 Millionen Coins. Keine Regierung, Bank oder Firma kann mehr drucken. Deine Ersparnisse in Bitcoin behalten ihren Wert, statt ihn still zu verlieren.",
	"business/why::why_s2_c1":
		"In den letzten Jahren sind mehrere US-Banken durch Bank Runs zusammengebrochen. Als zu viele Kunden gleichzeitig abheben wollten, hatten die Banken nicht genug Bargeld, um alle auszuzahlen.",
	"business/why::why_s2_c2":
		"Statt Dein Geld einfach zu verwahren, verleihen und investieren Banken das meiste davon. Scheitern diese Investitionen — oder verlieren die Einleger das Vertrauen — kann die Bank zusammenbrechen, und Deine Einlagen können eingefroren oder verloren sein.",
	"business/why::why_s2_c3":
		"Mit Bitcoin kannst Du Dein Geld direkt in Deiner eigenen Wallet halten. Keine Bank. Keine Vermittler. Kein Bank Run.",
	"business/why::why_s3_c1":
		"Anders als Kreditkarten, PayPal oder traditionelle Bankkonten verlangt Bitcoin niemandes Erlaubnis.",
	"business/why::why_s3_c2":
		"Niemand kann Dein Konto einfrieren, eine Zahlung blockieren oder Dich vom Netzwerk trennen. Es ist das erste Finanzsystem der Geschichte, das Du frei nutzen kannst, ohne Angst vor Zensur oder Beschlagnahmung.",
	"business/why::why_s4_c1":
		"Bitcoin wird oft missverstanden, tut aber in der Welt stillschweigend viel Gutes.",
	"business/why::why_s4_c2":
		"Er hat Menschenrechtsaktivisten geholfen, für Freiheit zu kämpfen, globale Methanemissionen aus Deponien und Ölfeldern reduziert, Stromnetze stabilisiert und öffentliche Güter wie Nationalparks finanziert.",
	"business/why::why_biz_s1":
		"Niedrigere Gebühren, mehr für das Unternehmen",
	"business/why::why_biz_s1_c1":
		"Bitcoin-Zahlungen umgehen Banken und Kartenunternehmen, die von jedem Verkauf 2–3 % nehmen. Das Unternehmen behält mehr von dem, was Du zahlst — was oft bessere Preise und besseren Service für Dich bedeutet.",
	"business/why::why_biz_s2":
		"Sofortige Abwicklung, keine Chargebacks",
	"business/why::why_biz_s2_c1":
		"Bitcoin-Zahlungen wickeln in Sekunden ab, direkt von Deiner Wallet zum Unternehmen. Kein tagelanges Warten, bis die Bank Gelder freigibt, und keine teuren Chargeback-Streitigkeiten — so kann sich das Unternehmen auf die Kunden konzentrieren statt auf Betrugsbekämpfung.",
	"business/why::why_biz_s3":
		"Akzeptanz kostenlos, offen für alle",
	"business/why::why_biz_s3_c1":
		"Für die Akzeptanz von Bitcoin zahlt das Unternehmen keine Verträge, Monatsgebühren oder Einrichtungskosten. Und Millionen Bitcoin-Nutzer weltweit suchen aktiv nach Händlern, die ihn akzeptieren — was diesem Unternehmen kostenlose Reichweite bei neuen Kunden verschafft.",
	"business/why::why_business_cta_intro":
		"Hast Du ein Unternehmen und möchtest Bitcoin akzeptieren?",
	"business/why::why_business_cta_link":
		"So funktioniert es →",
	"business/why::why_for_business":
		"Warum Bitcoin großartig für dieses Unternehmen ist",
	"business/why::why_for_business_intro":
		"Durch die Annahme von Bitcoin behält das Unternehmen mehr von jedem Verkauf, wird sofort bezahlt ohne Chargebacks und erreicht ein globales Publikum von Bitcoin-Nutzern — alles ohne Verträge oder Monatsgebühren.",
	"business/why::why_good_for_you_intro":
		"Bitcoin ist nicht nur an der Kasse nützlich — er ist eine bessere Form von Geld, die Deine Ersparnisse, Deine Privatsphäre und Deine Transaktionsfreiheit schützt. Hier ist eine kurze Übersicht.",
	"business/why::why_hero_subtitle":
		"Du hast gerade einen „Bitcoin wird hier akzeptiert“-Aufkleber gescannt. Hier ist der Grund, warum das großartig ist — für dieses Unternehmen und für Dich.",
	"business/why::why_intro_c1":
		"Das Unternehmen, in dem Du bist, akzeptiert Bitcoin — ein modernes, quelloffenes Zahlungsnetzwerk, das jeder überall auf der Welt nutzen kann, ohne dass Banken und Vermittler eine Provision kassieren.",
	"business/why::why_intro_c2":
		"Unten findest Du die Kurzfassung, warum Bitcoin-Akzeptanz gut für dieses Unternehmen ist, plus warum die Nutzung von Bitcoin gut für Dich als Kunde ist.",
	"business/why::why_next_business_label": "BITCOIN AKZEPTIEREN",
	"business/why::why_next_business_title":
		"Akzeptiere Bitcoin in Deinem Unternehmen",
	"business/why::why_next_buy_label": "BITCOIN KAUFEN",
	"business/why::why_next_buy_title": "Kaufe Deinen ersten Bitcoin",
	"business/why::why_next_learn_label": "MEHR LERNEN",
	"business/why::why_next_learn_title": "Erfahre mehr über Bitcoin",
	"business/why::why_next_wallet_label": "WALLET HOLEN",
	"business/why::why_next_wallet_title":
		"Hol Dir Deine eigene Bitcoin-Wallet",
	"business/why::why_whats_next_heading": "Wohin als Nächstes?",
	"business/why::why_whats_next_intro":
		"Wenn dies Dein erstes Scannen eines Bitcoin-Aufklebers ist, sind dies die hilfreichsten Orte, um weiterzumachen.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-Peer",
	"buy::buy_bitcoin_guide": "Wie man Bitcoin kauft",
	"buy::buy_step_1_header": "Wähle Dein Land",
	"buy::buy_step_2_header": "Wähle eine Zahlungsmethode",
	"buy::buy_step_3_header": "Deine Kaufoptionen",
	"buy::buy_step_4_header": "Bewahre Deinen Bitcoin sicher auf",
	"buy::buy_header_subtitle":
		"Eine einfache Schritt-für-Schritt-Anleitung zum Kauf Deines ersten Bitcoins.",
	"buy::buy_howto_name": "Wie man Bitcoin kauft",
	"buy::buy_meta_description":
		"Lerne, wie Du mit unserer Schritt-für-Schritt-Anleitung sicher Bitcoin kaufst. Wähle Dein Land und Deine Zahlungsmethode, um die besten Kaufoptionen für Dich zu finden.",
	"buy::buy_step_1_eyebrow": "Schritt 1",
	"buy::buy_step_2_eyebrow": "Schritt 2",
	"buy::buy_step_3_eyebrow": "Schritt 3",
	"buy::buy_step_4_eyebrow": "Schritt 4",
	"buy::buy_storage_cta_label": "Nächster Schritt",
	"buy::sources_bisq":
		"Bisq — dezentrale Peer-to-Peer-Bitcoin-Börse",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — weltweites Verzeichnis von Bitcoin-Geldautomaten",
	"buy::sources_kraken":
		"Kraken — etablierte Bitcoin-Börse",
	"buy::sources_relai":
		"Relai — Schweizer App für Bitcoin in Selbstverwahrung",
	"buy::sources_river":
		"River — Bitcoin-only Kauf, Mining und Verwahrung",
	"buy::sources_strike_lightning":
		"Strike — Bitcoin-Kauf mit Lightning-Network-Unterstützung",
	"buy::sources_swan":
		"Swan Bitcoin — Dollar-Cost-Averaging nur für Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Sprache hinzufügen",
	"common::common_next_buy_bitcoin": "Bitcoin kaufen",
	"common::common_next_buy_bitcoin_desc":
		"Lerne, wie Du sicher Bitcoin kaufst",
	"common::common_next_calculate": "Berechne Deine Inflation",
	"common::common_next_calculate_desc":
		"Sieh, wie Inflation im Laufe der Zeit Dein Gehalt beeinflusst",
	"common::common_next_get_wallet": "Wallet holen",
	"common::common_next_get_wallet_desc":
		"Hol Dir Deine erste Bitcoin-Wallet — sie ist kostenlos",
	"common::common_next_keep_learning": "Weiterlernen",
	"common::common_next_keep_learning_desc":
		"Sieh, wie Bitcoin die Welt besser macht",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — Verbraucherpreisindex (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — Geldmenge (Kategorieindex)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Kann eine Treasury-Auktion scheitern?“",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Was kommt als Nächstes?",
	"common::common_sticker_files_mission_5": "Paket anfordern",
	"common::common_site_tagline": "Bitcoin-Bildung für alle.",
	"common::common_source_btc_map":
		"BTC Map — weltweites Verzeichnis Bitcoin-akzeptierender Händler",
	"common::common_source_btcpayserver":
		"BTCPay Server — kostenloser, selbstgehosteter Open-Source-Bitcoin-Zahlungsabwickler",
	"common::common_source_oshi":
		"Oshi — Bitcoin-Belohnungsplattform für Händler",
	"common::common_source_strike_business":
		"Strike — Bitcoin- und Lightning-Zahlungen für Unternehmen",
	"common::common_sources_group_bitcoin": "Bitcoin-Daten",
	"common::common_sources_group_cpi":
		"Inflation / Verbraucherpreisindex",
	"common::common_sources_group_debt": "Staatsverschuldung",
	"common::common_sources_group_money": "Geldmengendaten",
	"common::common_sources_group_stories": "Beispiele aus dem echten Leben",
	"common::common_sticker_files_mission_6":
		"kostenlose englische Aufkleber.",
	"common::common_sticker_files_next_flyers_label": "Flyer",
	"common::common_sticker_files_next_flyers_title":
		"Drucke einen Bitcoin-Flyer",
	"common::common_sticker_files_next_languages_label":
		"Aufkleberdateien",
	"common::common_sticker_files_next_languages_title":
		"Schau Dir Aufkleberdateien in anderen Sprachen an",
	"common::common_sticker_files_print_these":
		"AUF 1 KLICK AUSDRUCKEN",
	"common::common_sticker_name_bdhi_black":
		"„Bitcoin Doesn\u2019t Have Inflation“-Aufkleber (schwarz)",
	"common::common_sticker_name_bdhi_orange":
		"„Bitcoin Doesn\u2019t Have Inflation“-Aufkleber (orange)",
	"common::common_sticker_name_caution":
		"Bitcoin-Aufkleber „Caution! Melting Ice Cube“",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin-Aufkleber „Cure Inflation“",
	"common::common_sticker_name_danger":
		"Bitcoin-Aufkleber „Danger! Inflation Ahead“",
	"common::common_sticker_name_fix":
		"Bitcoin-Aufkleber „Fix The Money, Fix The World“",
	"common::common_sticker_name_got_inflation":
		"Bitcoin-Aufkleber „Got Inflation?“",
	"common::common_sticker_name_study":
		"„Study Bitcoin“-Aufkleber",
	"common::common_sticker_name_warning":
		"Bitcoin-Aufkleber „Warning! Inflation is Stealing Your Savings“",
	"common::common_sticker_name_what_if":
		"Bitcoin-Aufkleber „What if your money didn\u2019t have inflation?“",
	"common::common_sticker_tips_heading": "Tipps für Aufkleber",
	"common::common_sticker_tips_intro":
		"Sobald Du Deine Aufkleber gedruckt hast, bringe sie dort an, wo Menschen sie sehen! Gute Orte sind:",
	"common::common_sticker_tips_list_1":
		"an öffentlichen Orten, wo sie Aufmerksamkeit erregen",
	"common::common_sticker_tips_list_2":
		"an Stellen, von denen sie wahrscheinlich nicht sofort entfernt werden (Aufkleber hinterlassen keine dauerhaften Schäden)",
	"common::common_sticker_tips_list_3":
		"auf Oberflächen, auf denen sie gut haften (Metall, Kunststoff, Glas)",
	"common::common_sticker_tips_list_4":
		"NICHT auf Privateigentum, Verkehrsschildern, Geldautomaten oder Tankstellen",
	"common::common_stickers_printer_prefix": "Wir nutzen",
	"common::common_stickers_printer_suffix":
		"aber Du kannst jeden Aufkleberdrucker nutzen.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — Verbraucherpreisindex für alle städtischen Verbraucher",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — Geldmenge M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Berechne Deine Inflationslücke",
	"compound-inflation-calculator::cic_cta_label": "Nächster Schritt",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Finde heraus, um wie viel Dein Gehalt steigen muss, um mit der Inflation Schritt zu halten.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Weitere Themen entdecken",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Sieh, wie Bitcoin mit Geld, Freiheit, Energie und mehr zusammenhängt.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Lerne, wie Inflation funktioniert",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Wie Du diese Bitcoin-Flyer druckst und aushängst",
	"flyers::flyers_hero_subtitle":
		"Kostenlose druckbare Bitcoin-Flyer. Hänge sie an öffentlichen Orten aus, um mehr Menschen über Bitcoin aufzuklären.",
	"flyers::flyers_hero_title":
		"Drucke und hänge Bitcoin-Flyer aus",
	"flyers::flyers_next_get_stickers": "Verbreite die Botschaft",
	"flyers::flyers_next_get_stickers_desc":
		"Bestelle ein kostenloses Paket Bitcoin-Aufkleber",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Mach mit und verbreite Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Möchtest Du helfen, eine Bitcoin-Kreislaufwirtschaft aufzubauen? Der einfachste Weg ist, lokalen Unternehmen zu helfen, Bitcoin-Zahlungen anzunehmen.",
	"get-involved::get_involved_business_content_2":
		"Kennst Du ein Unternehmen, das dafür offen wäre? Schicke die Inhaber auf unsere",
	"get-involved::get_involved_business_content_3":
		"Bitcoin-Seite für Unternehmen.",
	"get-involved::get_involved_description":
		"Unsere kostenlosen Ressourcen machen es einfach, die Bitcoin-Adoption zu verbreiten. Aufkleber, Flyer, „Bitcoin wird hier akzeptiert“-Aufkleber für Unternehmen und Open-Source-Code, zu dem jeder beitragen kann.",
	"get-involved::get_involved_header":
		"Mach mit und verbreite Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Du kannst helfen, das zu ändern. Wir haben einige kostenlose Ressourcen erstellt, die es einfach machen, die Hoffnung, die Bitcoin bringt, in Deiner Umgebung zu verbreiten.",
	"get-involved::get_involved_biz_stickers_note":
		"Akzeptierst Du bereits Bitcoin? Zeig es Deinen Kunden mit unseren kostenlosen „Bitcoin wird hier akzeptiert“-Aufklebern. Wir senden ein Paket an jede Adresse in den USA oder Kanada, oder Du kannst weltweit Deine eigenen drucken.",
	"get-involved::get_involved_card_biz_stickers_label":
		"„Hier akzeptiert“-Aufkleber",
	"get-involved::get_involved_card_biz_stickers_source":
		"Quelle: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Kostenlose „Bitcoin wird hier akzeptiert“-Aufkleber für Dein Unternehmen",
	"get-involved::get_involved_card_business_label":
		"Bitcoin für Unternehmen",
	"get-involved::get_involved_card_business_source":
		"Quelle: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Alles, was ein Unternehmen braucht, um Bitcoin-Zahlungen zu akzeptieren",
	"get-involved::get_involved_card_flyers_label": "Druckbare Flyer",
	"get-involved::get_involved_card_flyers_source":
		"Quelle: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Lade einen kostenlosen Bitcoin-Flyer herunter und drucke ihn aus",
	"get-involved::get_involved_card_github_label": "Open Source",
	"get-involved::get_involved_card_github_source": "Quelle: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Trage zu bitcoin.rocks auf GitHub bei",
	"get-involved::get_involved_card_stickers_label":
		"Kostenlose Aufkleber",
	"get-involved::get_involved_card_stickers_source":
		"Quelle: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Fordere ein kostenloses Paket Bitcoin-Aufkleber an, direkt an Deine Haustür",
	"get-involved::get_involved_flyers_content_1":
		"Flyer sind eine der einfachsten Möglichkeiten, Bitcoin in Deine Community zu bringen. Lade einen kostenlosen druckbaren Bitcoin-Flyer herunter, drucke so viele Kopien aus, wie Du willst, und hänge sie an Schwarzen Brettern, in Cafés, bei Meetups oder überall dort, wo sich Menschen versammeln, auf.",
	"get-involved::get_involved_flyers_content_2":
		"Jeder Flyer enthält eine aufmerksamkeitsstarke Überschrift und einen QR-Code, der neugierige Leser zu bitcoin.rocks führt, um mehr zu erfahren.",
	"get-involved::get_involved_flyers_content_3":
		"Anders als Aufkleber können Flyer überall auf der Welt auf Anfrage gedruckt werden — Du brauchst nur einen Drucker und ein paar Minuten.",
	"get-involved::get_involved_flyers_header":
		"Drucke und hänge einen Flyer aus",
	"get-involved::get_involved_flyers_image_alt":
		"Vorschau des kostenlosen druckbaren Bitcoin-Flyers von bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks ist ein kostenloses Open-Source-Projekt unter der MIT-Lizenz. Unsere Mission ist es, die Adoption von Bitcoin durch Bildung zu beschleunigen — und das schaffen wir nicht allein.",
	"get-involved::get_involved_github_content_2":
		"Egal ob Entwickler, Designer, Texter oder Übersetzer, es gibt einen Weg, wie Du helfen kannst. Wir begrüßen besonders Beitragende, die unseren Inhalt in weitere Sprachen übersetzen können, damit Menschen weltweit Bitcoin in ihrer Muttersprache lernen können.",
	"get-involved::get_involved_github_content_3":
		"Forke das Repository, öffne einen Pull Request, lege ein Issue an oder unterstütze das Projekt zumindest mit einem Stern. Jeder Beitrag hilft, Bitcoin mehr Menschen zugänglich zu machen.",
	"get-involved::get_involved_github_header":
		"Trage auf GitHub bei",
	"get-involved::get_involved_sticker_image_alt":
		"Paket kostenloser Bitcoin-Textaufkleber von bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "sparen",
	"index::home_card_label_art_1": "Vergleichen wir",
	"index::home_card_label_art_2": "Verbreite das Wort",
	"index::home_card_label_art_3": "Straßenkunst",
	"index::home_card_label_bank_runs": "Vollreserve-System",
	"index::home_card_label_bonds": "Vergleichen wir",
	"index::home_card_label_business_1": "Was ist der Unterschied?",
	"index::home_card_label_business_2": "Bitcoin-Zahlungen akzeptieren",
	"index::home_card_label_cash": "Vergleichen wir",
	"index::home_card_label_cbdc": "Offen oder geschlossen?",
	"index::home_card_label_coding_1": "Interaktives Tutorial",
	"index::home_card_label_coding_2": "Hardware bauen",
	"index::home_card_label_coding_3": "Coding-Aufgaben",
	"index::home_card_label_crowdfunding_1": "EndSARS-Proteste",
	"index::home_card_label_crowdfunding_2": "Unaufhaltsames Geld",
	"index::home_card_label_crowdfunding_3":
		"Finanziere Dein Projekt",
	"index::home_card_label_crypto": "Was ist der Unterschied?",
	"index::home_card_label_energy_1": "Netzstabilisierung",
	"index::home_card_label_energy_4": "Lastmanagement",
	"index::home_card_label_energy_5": "Elektrifizierung ländlicher Räume",
	"index::home_card_label_energy_6":
		"Anreize für erneuerbare Energien",
	"index::home_card_label_environment_1": "Methanreduktion",
	"index::home_card_label_environment_2":
		"Rettete einen Nationalpark",
	"index::home_card_label_environment_3":
		"Die grünste Branche",
	"index::home_card_label_environment_4":
		"Reduziert abgefackeltes Gas",
	"index::home_card_label_equality_1": "Hoffnung und Chancen",
	"index::home_card_label_equality_2": "Der große Gleichmacher",
	"index::home_card_label_food_1": "Lebensmittelpreise",
	"index::home_card_label_food_2": "Farmen und Land",
	"index::home_card_label_freedom_1": "Autoritäre Regime",
	"index::home_card_label_freedom_2": "Einzigartiges Werkzeug",
	"index::home_card_label_get_started_1":
		"Grundlagen für Anfänger",
	"index::home_card_label_get_started_2": "Deine erste Wallet",
	"index::home_card_label_get_started_3": "Bitcoin kaufen",
	"index::home_card_label_gold": "Was ist besser?",
	"index::home_card_label_housing_1": "Bezahlbares Wohnen",
	"index::home_card_label_human_rights_1":
		"Verteidigung von Menschenrechten",
	"index::home_card_label_human_rights_2":
		"Adoption von unten",
	"index::home_card_label_human_rights_3": "Globale Wirkung",
	"index::home_card_label_inflation": "Bitcoin ist besseres Geld",
	"index::home_card_label_networks_1": "Live-Netzwerkansicht",
	"index::home_card_label_networks_2": "Vergleichen wir",
	"index::home_card_label_payments_1": "Was ist der Unterschied?",
	"index::home_card_label_payments_2":
		"Schnelle und günstige Zahlungen",
	"index::home_card_label_payments_3": "Auslandsüberweisungen",
	"index::home_card_label_payments_4": "Zahlungen annehmen",
	"index::home_card_label_politics_1": "Das politische Paradoxon",
	"index::home_card_label_politics_2": "Mach mit",
	"index::home_card_label_property_rights_1": "Vergleichen wir",
	"index::home_card_label_property_rights_2": "Echter Besitz",
	"index::home_card_label_salary": "Schütze Dein Gehalt",
	"index::home_card_label_self_custody_1":
		"Leitfaden für Bitcoin-Wallets",
	"index::home_card_label_self_custody_2": "Der wichtigste Schritt",
	"index::home_card_label_self_custody_3": "Souveränes Geld",
	"index::home_card_label_war_1": "Das Ende endloser Kriege",
	"index::home_card_label_war_2": "Veteranen helfen",
	"index::home_card_label_war_3": "Dem Krieg entfliehen",
	"index::home_h1":
		"Bitcoin ist besseres Geld, das eine bessere Welt aufbaut.",
	"index::home_nav_about": "Über uns",
	"index::home_nav_get_involved": "Mitmachen",
	"index::home_nav_learn": "Lernen",
	"index::home_source_prefix": "Quelle:",
});

/* ─────────────── inflation (leftover) ─────────────── */
Object.assign(T, {
	"inflation::inflation_us_dollar": "US-DOLLAR",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon und Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Schau Dir unseren",
	"lightning::lightning_grid_heading": "Beliebte Lightning-Wallets",
	"lightning::lightning_hardware_cta_label": "Hardware-Wallets",
	"lightning::lightning_header_subtitle":
		"Lightning erlaubt Dir, Bitcoin in Sekunden für einen Bruchteil eines Cents zu senden — wähle eine Wallet, deren Kompromisse zu dem passen, wie viel Bitcoin Du ausgeben möchtest.",
	"lightning::lightning_s1_c4_end": "für mehr Informationen an.",
	"lightning::lightning_s1_c4_link":
		"Leitfaden für Bitcoin-Hardware-Wallets",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning-Wallet",
	"lightning::sources_breez_lightning":
		"Breez — Lightning-Wallet mit Selbstverwahrung",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning-Network-Dokumentation",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — verwahrte Lightning-Wallet",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android und Web",
	"nostr/index::nostr_platform_web": "Webbrowser",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr ist ein neues dezentrales Protokoll für Online-Kommunikation — es gehört keinem Unternehmen, Bitcoin-Zaps sind nativ eingebaut, und Du kannst zwischen Klienten wechseln, ohne Deine Follower zu verlieren.",
	"nostr/index::nostr_amethyst_f1":
		"Reich an Funktionen und Anpassung",
	"nostr/index::nostr_amethyst_f2":
		"Benötigt separate Bitcoin-Wallet",
	"nostr/index::nostr_amethyst_f3": "100 % kostenlos",
	"nostr/index::nostr_damus_f1":
		"Vertraute Twitter-ähnliche Oberfläche",
	"nostr/index::nostr_damus_f2": "Benötigt separate Bitcoin-Wallet",
	"nostr/index::nostr_damus_f3": "100 % kostenlos",
	"nostr/index::nostr_download_heading":
		"Lade einen kostenlosen Nostr-Klienten herunter",
	"nostr/index::nostr_download_intro":
		"Nostr-Klienten sind kostenlose Apps, mit denen Du im Nostr-Netzwerk lesen und posten kannst. Sie sind alle untereinander kompatibel — Du kannst jederzeit den Klienten wechseln und Deine Follower und Inhalte behalten.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr ist ein neues dezentrales Protokoll für Online-Kommunikation — es gehört keinem Unternehmen, Bitcoin-Zaps sind eingebaut, und Du kannst zwischen Apps wechseln, ohne Deine Follower zu verlieren.",
	"nostr/index::nostr_hero_title": "Was ist Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr ist ähnlich wie E-Mail: das Protokoll gehört niemandem, jeder kann darauf eine App bauen, und Du wählst die, die Dir am besten gefällt. Anders als bei Twitter oder Facebook gibt es hier kein zentrales Unternehmen, das Dich zensieren, rauswerfen oder unterdrücken kann.",
	"nostr/index::nostr_intro_c2":
		"Unten findest Du die Kurzfassung, warum Nostr wichtig ist — und dann jeden kostenlosen Nostr-Klienten, den Du brauchst, um heute zu beginnen.",
	"nostr/index::nostr_iris_f1":
		"Extrem einfach — keine Installation nötig",
	"nostr/index::nostr_iris_f2":
		"Einfache Möglichkeit, Nostr mit einem Testkonto auszuprobieren",
	"nostr/index::nostr_iris_f3": "100 % kostenlos",
	"nostr/index::nostr_learn_more_label": "TIEFER EINSTEIGEN",
	"nostr/index::nostr_learn_more_title":
		"Erfahre mehr über Nostr auf nostr.how",
	"nostr/index::nostr_primal_f1": "Empfohlener erster Klient",
	"nostr/index::nostr_primal_f2":
		"Eingebaute Bitcoin-Zap-Wallet",
	"nostr/index::nostr_primal_f3": "100 % kostenlos",
	"nostr/index::nostr_s1": "Ein Protokoll, keine Plattform",
	"nostr/index::nostr_s1_c1":
		"Nostr ist ein neues Protokoll, das Dir erlaubt, online zu kommunizieren, ohne Angst vor Zensur, Rauswurf oder Unterdrückung zu haben.",
	"nostr/index::nostr_s1_c2":
		"Plattformen wie Twitter und Facebook werden von einem einzigen Unternehmen kontrolliert, aber das Nostr-Protokoll wird von niemandem kontrolliert.",
	"nostr/index::nostr_s2": "Freiheit, zu wechseln",
	"nostr/index::nostr_s2_c1":
		"Nostr ist ähnlich wie E-Mail. Niemand kontrolliert das E-Mail-Protokoll, und jeder kann darauf einen Klienten bauen (zum Beispiel Gmail, Hotmail usw.).",
	"nostr/index::nostr_s2_c2":
		"Das Nostr-Protokoll wird ebenfalls von niemandem kontrolliert, und jeder kann darauf einen Klienten bauen (zum Beispiel Damus, Amethyst usw.).",
	"nostr/index::nostr_s2_c3":
		"Wenn Dir gefällt, wie ein bestimmter Klient funktioniert, nicht, kannst Du Dein Nostr-Konto nahtlos in einen anderen Klienten mitnehmen, ohne Follower oder Inhalte zu verlieren.",
	"nostr/index::nostr_s3": "Bitcoin ist eingebaut",
	"nostr/index::nostr_s3_c1":
		"Bitcoin ist nativ in das Nostr-Protokoll eingebaut. Wenn Dir Inhalte gefallen, kannst Du dem Autor einfach einen „Bitcoin-Zap“ als Dankeschön senden!",
	"nostr/index::nostr_s3_c2":
		"Auf zentralisierten Plattformen wie Twitter und Facebook verdient ein zentrales Unternehmen Geld mit Deinen Inhalten. Aber in offenen Protokollen wie Nostr verdienst Du Geld mit Deinen Inhalten.",
	"nostr/index::sources_damus":
		"Damus — Nostr-Klient für iPhone",
	"nostr/index::sources_iris":
		"Iris — Nostr-Klient im Browser",
	"nostr/index::sources_nostr_how":
		"nostr.how — Was ist Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr-Protokoll — Open-Source-Spezifikation",
	"nostr/index::sources_primal":
		"Primal — Nostr-Klient mit eingebauter Bitcoin-Zap-Wallet",
	"nostr/index::what_is_nostr": "Was ist Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Drucke Deine eigenen Bitcoin-Aufkleber mit diesen Dateien.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Anfrage erhalten 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"In großen Mengen bestellen",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Auf Nostr teilen",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Was ist Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Brauchst Du mehr Aufkleber?",
	"sticker-success::sticker_success_hero_title":
		"Deine Aufkleber sind unterwegs 🎉",
	"sticker-success::sticker_success_share_header":
		"Teile, wo Du die Aufkleber angebracht hast",
	"sticker-success::sticker_success_tips_header":
		"Gute Orte für Aufkleber",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Und wenn Du schon dabei bist, drucke und hänge Deine eigenen",
	"stickers::stickers_instructions_1":
		"Gib Deine Postadresse ein, und wir schicken Dir per Post ein kostenloses Paket Bitcoin-Aufkleber. Deine Aufkleber kommen in einem schlichten weißen Umschlag an.",
	"stickers::stickers_btn_choose_pack": "Dieses Paket wählen",
	"stickers::stickers_bulk_c1":
		"Möchtest Du mehr als nur ein paar Aufkleber?",
	"stickers::stickers_bulk_c2":
		"Bestelle sie in großen Mengen beim selben Drucker, den wir nutzen",
	"stickers::stickers_bulk_c3":
		"— je mehr Du kaufst, desto günstiger werden sie pro Stück.",
	"stickers::stickers_bulk_cta":
		"Kaufe Aufkleber in großen Mengen",
	"stickers::stickers_bulk_header":
		"Aufkleber in großen Mengen bestellen",
	"stickers::stickers_hero_subtitle":
		"Bestelle ein kostenloses Paket Bitcoin-Aufkleber und hänge sie an öffentlichen Orten auf, um mehr Menschen über Bitcoin aufzuklären.",
	"stickers::stickers_hero_title":
		"Kostenlose Bitcoin-Aufkleber",
	"stickers::stickers_intro_c1":
		"Unsere Mission ist es, Dir zu helfen, mehr Menschen die „Orange Pille“ zu geben, indem Du Bitcoin-Aufkleber an öffentlichen Orten anbringst. Alle unsere Aufkleber haben QR-Codes, die zu Bildungsseiten über",
	"stickers::stickers_intro_c3": "Inflation",
	"stickers::stickers_intro_c4":
		"Wähle unten ein Aufkleberpaket und entscheide, wie Du sie bekommen möchtest — wir schicken jedem in den USA oder Kanada ein kostenloses Paket, oder Du kannst weltweit Deine eigenen drucken.",
	"stickers::stickers_mail_header":
		"Wir schicken Dir Deine Aufkleber kostenlos per Post",
	"stickers::stickers_next_print_flyers": "Gib es weiter",
	"stickers::stickers_next_print_flyers_desc":
		"Drucke kostenlose Bitcoin-Flyer und hänge sie öffentlich aus",
	"stickers::stickers_option_bulk":
		"📦 Weltweit — in großen Mengen bestellen",
	"stickers::stickers_option_canada":
		"🇨🇦 Kanada — kostenlos per Post",
	"stickers::stickers_option_print":
		"🌍 Weltweit — selbst drucken",
	"stickers::stickers_option_usa":
		"🇺🇸 USA — kostenlos per Post",
	"stickers::stickers_print_c1":
		"Du kannst mitmachen, indem Du Deine eigenen Aufkleber druckst, egal wo Du lebst. Tippe unten auf Deine Sprache, um die Aufkleberdateien und Druckhinweise herunterzuladen.",
	"stickers::stickers_print_c2":
		"Nicht jeder Aufkleber ist in allen Sprachen verfügbar.",
	"stickers::stickers_print_header":
		"Drucke Deine eigenen Aufkleberdateien",
	"stickers::stickers_request_c1":
		"Fülle das Formular unten aus, um Aufkleberdateien in Deiner lokalen Sprache anzufordern. Wir sagen Bescheid, sobald sie fertig sind.",
	"stickers::stickers_request_header":
		"Siehst Du Deine Sprache nicht?",
	"stickers::stickers_share_c2":
		"Folge uns auf Nostr, indem Du nach",
	"stickers::stickers_share_c3":
		"in einem beliebigen Nostr-Klienten suchst.",
	"stickers::stickers_signs_pack_description":
		"Warn-, Vorsichts- und Hinweisschilder mit Bitcoin-Botschaften — so gestaltet, dass sie Aufmerksamkeit erregen und Menschen zum Anhalten und Lesen bringen.",
	"stickers::stickers_step_1_description":
		"Jedes Paket enthält eine andere Auswahl an Bitcoin-Aufklebern mit QR-Codes, die Menschen über Bitcoin aufklären.",
	"stickers::stickers_step_1_eyebrow": "SCHRITT 1",
	"stickers::stickers_step_1_header":
		"Wähle ein Aufkleberpaket",
	"stickers::stickers_step_2_description":
		"Wir schicken ein kostenloses Paket an Adressen in den USA und Kanada. Überall sonst auf der Welt kannst Du Deine eigenen drucken oder in großen Mengen bestellen.",
	"stickers::stickers_step_2_eyebrow": "SCHRITT 2",
	"stickers::stickers_step_2_header":
		"Wie möchtest Du Deine Aufkleber bekommen?",
	"stickers::stickers_text_pack_description":
		"Eine Mischung aus Bitcoin-Slogans und Einzeilern, die an öffentlichen Orten Neugier wecken sollen.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Wähle Deine Wallet",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Bewertungen von Metall-Backups für Bitcoin-Seeds",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin-Wallet mit Selbstverwahrung",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin-Hardware-Wallet",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 Hardware-Wallet",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q Hardware-Wallet",
	"wallets::sources_passport":
		"Foundation Devices — Passport Hardware-Wallet",
	"wallets::sources_seedsigner":
		"SeedSigner — Open-Source-DIY-Gerät zum Signieren von Bitcoin-Transaktionen",
	"wallets::wallets_grid_heading": "Beliebte Bitcoin-Wallets",
	"wallets::wallets_header_subtitle":
		"Eine Schritt-für-Schritt-Anleitung, wie Du eine Wallet auswählst, Deine Schlüssel schützt und die volle Kontrolle über Deinen Bitcoin übernimmst.",
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
		`translate-rest-part2 (de): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 80)) console.log("  -", k);
		if (missingKeys.length > 80)
			console.log(`  ... +${missingKeys.length - 80} more`);
		process.exitCode = 1;
	}
}

main();
