#!/usr/bin/env node
/**
 * German manifest refresh — part 1 of non-inflation namespaces.
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
	"de.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Zurück zur Startseite",
	"404::404_message": "Bitcoin ist großartig, aber diese kaputte Seite nicht.",
	"404::404_not_found_short": "Nicht gefunden",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Wir stellen kostenlose Ressourcen für Unternehmen bereit, damit lokale Händler problemlos Bitcoin akzeptieren können. Unsere Bitcoin-für-Unternehmen-Seite erklärt, warum Bitcoin gut fürs Geschäft ist, wie man eine Wallet und einen Zahlungsprozessor auswählt, und bietet kostenlose „Bitcoin wird hier akzeptiert“-Aufkleber.",
	"about::about_card_business_label": "Ressourcen für Unternehmen",
	"about::about_card_business_source": "Quelle: bitcoin.rocks →",
	"about::about_card_business_title":
		"Alles, was ein Unternehmen braucht, um Bitcoin-Zahlungen zu akzeptieren",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Quelle: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Mitmachen",
	"about::about_card_contribute_source": "Quelle: GitHub →",
	"about::about_card_contribute_title":
		"Erfahre, wie Du zum bitcoin.rocks-Projekt beitragen kannst",
	"about::about_card_email_label": "E-Mail",
	"about::about_card_email_source": "Quelle: E-Mail →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Druckbare Flyer",
	"about::about_card_flyers_source": "Quelle: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Lade Bitcoin-Flyer herunter und drucke sie für Deine Community",
	"about::about_card_github_label": "Repository",
	"about::about_card_github_source": "Quelle: GitHub →",
	"about::about_card_github_title": "Schau Dir bitcoin.rocks auf GitHub an",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Quelle: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Kostenlose Aufkleber",
	"about::about_card_stickers_source": "Quelle: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Erhalte kostenlose Bitcoin-Aufkleber an Deine Haustür",
	"about::about_editorial_2":
		"Wir verlinken zu vertrauenswürdigen Quellen wie der Federal Reserve (FRED), dem U.S. Bureau of Labor Statistics, der FDIC, den Vereinten Nationen, dem World Gold Council, Forbes, MIT Technology Review, Lyn Alden und James Lavish. Wir sind überzeugt, dass Bitcoin für sich selbst spricht, wenn die Fakten klar präsentiert werden.",
	"about::about_flyers_blurb":
		"Wir entwerfen druckbare Flyer, die Du bei Meetups austeilen, an Schwarzen Brettern aushängen oder in Briefkästen stecken kannst — eine einfache Möglichkeit, Neugier zu wecken und Menschen auf bitcoin.rocks zu bringen, um mehr zu erfahren.",
	"about::about_header": "Über das bitcoin.rocks-Projekt",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks wurde vom Nutzer",
	"about::about_mission_1b":
		"im Jahr 2022 mit einer einfachen Mission gegründet: die Adoption von Bitcoin durch Bildung zu beschleunigen.",
	"about::about_open_source_2":
		"bitcoin.rocks ist ein kostenloses Open-Source-Projekt unter der MIT-Lizenz. Jeder kann mitwirken. Besonders begrüßen wir Übersetzer, die helfen, unsere Inhalte Menschen auf der ganzen Welt zugänglich zu machen.",
	"about::about_open_source_header": "Open Source",
	"about::about_page_description":
		"bitcoin.rocks ist eine kostenlose Open-Source-Bildungswebsite über Bitcoin, gegründet im Jahr 2022. Unsere Mission ist es, die Adoption von Bitcoin durch Bildung zu beschleunigen.",
	"about::about_stickers_blurb":
		"Wir versenden kostenlose Bitcoin-Aufkleber direkt an Deine Haustür, damit Du helfen kannst, das Bewusstsein für Bitcoin in Deiner Community zu verbreiten. Jeden Monat scannen Hunderte Menschen die QR-Codes auf diesen Aufklebern, um mehr über Bitcoin zu erfahren.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin hat keine Bank Runs",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin ist ein Vollreserve-System. Du legst Dein Geld nicht in eine Bank. Du bist Deine eigene Bank. Dein Geld wird nicht ohne Dein Wissen verliehen, denn der Einzige, der Zugriff darauf hat, bist Du.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Solange Du Bitcoin in Deiner eigenen Wallet hältst — nicht an einer Börse oder in einem ETF verpackt — sind Bank Runs unmöglich.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Mit Bitcoin hast Du echte Kontrolle über Dein Geld.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Seit dem 26. März 2020 müssen US-Banken keine Mindestreserven mehr halten.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Bank-Reservequote",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Quelle: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Vollreserve-System — keine Einlagensicherung nötig.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin-Absicherung",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Quelle: Bitcoin-Whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Jeder Bitcoin existiert auf der Blockchain — nichts wird verliehen.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Bitcoin-Reservequote",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Quelle: Bitcoin-Whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 Mrd. $ Versicherungsfonds gegenüber 10,82 Billionen $ versicherten Einlagen (Dezember 2025).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC-Absicherung",
	"bank-runs::bank_runs_card_fdic_source":
		"Quelle: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Fallstudie",
	"bank-runs::bank_runs_card_svb_source":
		"Quelle: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Erfahre, wie es zum Run auf die Silicon Valley Bank kam",
	"bank-runs::bank_runs_card_wallet_label": "Nächster Schritt",
	"bank-runs::bank_runs_card_wallet_source": "Hier starten →",
	"bank-runs::bank_runs_card_wallet_title":
		"Lerne, wie Du Deine eigene Bitcoin-Wallet bekommst",
	"bank-runs::bank_runs_fdic_heading":
		"Die FDIC-Versicherung deckt nur etwa 1 % der Einlagen",
	"bank-runs::bank_runs_fdic_p1":
		"Die FDIC-Versicherung schützt Einlagen bis zu 250.000 $ pro Einleger. Aber der Versicherungsfonds ist winzig im Vergleich zu den gesamten Einlagen, die er schützen soll.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Bei einem weitreichenden Bankenzusammenbruch würde die Regierung wahrscheinlich Geld drucken, um die Differenz zu decken — was zu mehr",
	"bank-runs::bank_runs_fdic_p2_link": "Inflation",
	"bank-runs::bank_runs_header":
		"Bitcoin hat keine Bank Runs, aber Deine Bank könnte welche haben.",
	"bank-runs::bank_runs_page_description":
		"Banken verleihen Deine Einlagen im Rahmen des Mindestreserve-Bankensystems. Wenn zu viele Menschen gleichzeitig abheben wollen, können Banken zusammenbrechen. Bitcoin ist ein Vollreserve-System — Bank Runs sind unmöglich.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: ein reales Beispiel",
	"bank-runs::bank_runs_svb_p1_a":
		"Im März 2023 brach die Silicon Valley Bank zusammen, nachdem sie Kundeneinlagen in langlaufende",
	"bank-runs::bank_runs_svb_p1_b":
		"Als diese Anleihen an Wert verloren, konnte die SVB Abhebungen nicht mehr decken. Die Bank wurde insolvent.",
	"bank-runs::bank_runs_svb_p1_link": "Staatsanleihen",
	"bank-runs::bank_runs_svb_p2":
		"Tausende Unternehmen konnten ihre Mitarbeiter nicht mehr bezahlen. Die FDIC schritt ein — aber eine größere Frage blieb: Ist Dein Geld wirklich sicher?",
	"bank-runs::bank_runs_what_p1":
		"Banken halten Deine Einlagen nicht in einem Tresor. Sie verleihen und investieren Dein Geld — das nennt man Mindestreserve-Bankwesen.",
	"bank-runs::bank_runs_what_p2":
		"Wenn zu viele Menschen gleichzeitig abheben wollen, hat die Bank nicht genug Bargeld, um alle auszuzahlen. Das ist ein Bank Run — und er kann einen vollständigen Zusammenbruch der Banken verursachen.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">Banken</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin kann von jedem mit Internetverbindung genutzt werden — er ist ",
	"bitcoin-vs-banks::point_1_summary_2": "erlaubnisfrei.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banken können Konten auf Basis eigener Regeln oder staatlicher Vorgaben ablehnen, einfrieren oder schließen.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Das Bitcoin-Netzwerk läuft 24/7/365 ohne Wartungsfenster und Feiertage. Banken haben begrenzte Öffnungszeiten, Wochenenden geschlossen und Ausfälle.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Jede Bitcoin-Transaktion steht in einer öffentlichen Blockchain, die jeder überprüfen kann. Banken führen private Bücher, die Kunden nicht unabhängig prüfen können.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Bei Bitcoin hältst Du Deine privaten Schlüssel selbst — schau Dir unseren einfachen Leitfaden zu ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin-Wallets",
	"bitcoin-vs-banks::point_4_summary_3":
		" an. Banken halten Dein Geld und können es jederzeit einfrieren, einschränken oder sperren.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin-Gebühren sind transparent und vorhersehbar. Banken häufen schrittweise versteckte Gebühren für Konten, Überziehungen, Überweisungen und Geldautomaten auf.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin lässt Dich nur ausgeben, was Du tatsächlich besitzt. Banken gestatten Überziehungen und berechnen Dir dann Gebühren über Gebühren dafür.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Einmal gesendete Bitcoin-Transaktionen können nicht gestoppt oder rückgängig gemacht werden. Banken können Transaktionen auf Basis von Regeln oder staatlichen Anordnungen blockieren, einfrieren oder stornieren.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">Anleihen</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Anleihen sind nur nominell „risikofrei“ — Inflation, Zinsbewegungen und Ausfallrisiko nagen an den realen Renditen.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin hat transparente Volatilität, aber kein verstecktes Gegenparteirisiko.",
	"bitcoin-vs-bonds::point_2_summary_1": "Wenn die",
	"bitcoin-vs-bonds::point_2_summary_2": "Inflation",
	"bitcoin-vs-bonds::point_2_summary_3":
		"die Anleiherenditen übertrifft, verlieren Anleihegläubiger jedes Jahr real an Kaufkraft. Die 21-Millionen-Obergrenze von Bitcoin kann nicht durch Inflation verwässert werden.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Anleihenmärkte können in Krisen einfrieren — die Silicon Valley Bank brach teilweise zusammen, weil sie Anleihen hielt, die an Wert verloren. Sieh Dir an, wie",
	"bitcoin-vs-bonds::point_3_summary_2": "Bank Runs",
	"bitcoin-vs-bonds::point_3_summary_3":
		" entstehen und warum Bitcoin sie vermeidet. Bitcoin wird 24/7 global gehandelt, ohne Liquiditätskrisen.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Staatsanleihenauktionen können scheitern, wenn es nicht genug Käufer gibt — siehe die",
	"bitcoin-vs-bonds::point_4_summary_2": "schwache Auktion von 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Der Preis von Bitcoin wird kontinuierlich an offenen Märkten entdeckt, ohne zentrale Auktion, die scheitern könnte.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Anleiherenditen sind beim Kauf festgelegt. Selbst wenn die Wirtschaft wächst oder die Währung zusammenbricht, bleibt Deine Rendite gleich.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin hat Raum für erhebliches Wachstum, da die Adoption steigt und die Nachfrage auf ein festes Angebot trifft.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Die meisten Anleihen werden über Banken oder Broker gehalten, was Gegenparteirisiko hinzufügt. Bitcoin kann mittels",
	"bitcoin-vs-bonds::point_6_summary_2": "Wallet",
	"bitcoin-vs-bonds::point_6_summary_3":
		" in Selbstverwahrung gehalten werden — womit dieses Risiko vollständig entfällt.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Anleihen hängen vollständig davon ab, dass Regierungen ihre Schulden zurückzahlen. Wenn eine Regierung ausfällt oder die Schulden durch Inflation entwertet, verlieren Anleihegläubiger.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin funktioniert unabhängig von jeder Regierung oder politischen Autorität.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">Bargeld</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin bewegt sich über das Internet innerhalb von Minuten überall auf der Welt hin. Bargeld erfordert physische Anwesenheit oder vertrauenswürdige Kuriere — einen Zwanziger kannst Du nicht per E-Mail versenden.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin funktioniert überall gleich. Bargeld ist durch Geografie, Wechselkurse und lokale Akzeptanz begrenzt.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Regierungen können Bargeld über Nacht ungültig machen — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indien</a> tat dies 2016. Aber auch ohne Demonetarisierung verliert Bargeld durch",
	"bitcoin-vs-cash::point_3_summary_2": "Inflation",
	"bitcoin-vs-cash::point_3_summary_3":
		" an Wert. Bitcoin kann von keiner Regierung oder Autorität für ungültig erklärt werden.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Bargeld lässt sich fälschen, manchmal sehr überzeugend. Bitcoin nutzt Kryptografie, die das Fälschen mathematisch unmöglich macht.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin hat keine zentrale Autorität. Bargeld wird von Regierungen ausgegeben, die nach Belieben mehr drucken, das Aussehen ändern oder Scheine entwerten können.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Bargeld ist anfällig für Diebstahl, Feuer, Verlust und Beschlagnahmung. Bitcoin kann sicher in ",
	"bitcoin-vs-cash::point_6_summary_2": "Selbstverwahrung",
	"bitcoin-vs-cash::point_6_summary_3":
		" auf einem Handy oder Hardware-Gerät gehalten werden.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin ist in 100 Millionen Satoshis teilbar, was Mikrozahlungen jeder Größe ermöglicht. Bargeld hat Mindeststückelungen — einen Cent kann man nicht teilen.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">digitalen Zentralbankwährungen (CBDCs)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Niemand kann Dich daran hindern, mit Bitcoin Transaktionen durchzuführen. CBDCs sind so konzipiert, dass Regierungen und Zentralbanken jede Zahlung kontrollieren, was Deine Privatsphäre und Freiheit einschränkt.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin verfällt nie und hat keine monatlichen Gebühren. CBDCs können so programmiert werden, dass sie ablaufen, was Dich vom Sparen für die Zukunft abhält.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin hat eine feste Obergrenze von 21 Millionen BTC. CBDCs haben keine Angebotsgrenze und erlauben Regierungen, die Geldmenge beliebig auszuweiten — was",
	"bitcoin-vs-cbdc::point_3_summary_2": "Inflation",
	"bitcoin-vs-cbdc::point_3_summary_3":
		" verursacht.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin-Adressen sind nicht mit Deiner realen Identität verknüpft. CBDCs sind direkt an staatliche Ausweise gebunden, was massenhafte finanzielle Überwachung und Zensur ermöglicht.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Die Bitcoin-Regeln werden von Zehntausenden unabhängiger Nodes geprüft. CBDCs sind in den Händen von Regierungen und Zentralbanken zentralisiert, die vollständige Kontrolle über das Netzwerk haben.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Jeder kann eine Bitcoin-Node betreiben und die Netzwerkregeln verifizieren. CBDCs erlauben Nutzern keine eigenen Nodes — Du musst einer zentralen Autorität vertrauen.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin in Selbstverwahrung kann von niemandem eingefroren werden. CBDCs sind so konzipiert, dass Regierungen und Zentralbanken Konten sofort einfrieren können.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin gibt Dir volle Kontrolle über Dein Geld, wenn Du ihn selbst in eine",
	"bitcoin-vs-cbdc::point_8_summary_2": "Wallet",
	"bitcoin-vs-cbdc::point_8_summary_3":
		" nimmst. CBDCs erfordern Vertrauen in Verwahrer wie Banken oder Regierungen, die für Dich das Geld halten.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Die Geldpolitik von Bitcoin ist im Code fixiert und kann nicht geändert werden. CBDCs können von Politikern beliebig neu programmiert werden, was",
	"bitcoin-vs-cbdc::point_9_summary_2": "Inflation",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" verursacht, wenn zu viel Geld gedruckt wird.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin ist das sicherste Computernetzwerk, das je gebaut wurde, und wurde noch nie gehackt. CBDCs beruhen auf Banken und Regierungen, die unzählige Male gehackt wurden.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">Krypto</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Das Bitcoin-Protokoll ist seit 2009 im Wesentlichen unverändert und liefert vorhersehbare Regeln. Die meisten Krypto-Projekte ändern ständig Protokolle, Tokenomics oder spalten sich in neue Versionen ab.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin läuft auf Zehntausenden unabhängiger Nodes weltweit. Die meisten Krypto-Projekte werden von Stiftungen, Unternehmen oder kleinen Entwicklerteams kontrolliert, die einseitige Änderungen vornehmen können.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin hat eine feste Obergrenze von 21 Millionen Coins — das knappste digitale Asset. Die meisten Krypto-Projekte haben unbegrenztes Angebot oder Mechanismen, um beliebig neue Tokens zu erzeugen und Halter zu verwässern.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin hat einen Zweck: Peer-to-Peer digitales Geld. Jeder versteht und nutzt ihn. Die meisten Kryptos beinhalten komplexe Smart Contracts oder DeFi, die technisches Wissen erfordern, um sicher verwendet zu werden.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoins Proof of Work läuft seit über 15 Jahren ohne erfolgreichen Angriff auf das Hauptnetzwerk. Die meisten Krypto-Projekte nutzen experimentelle Konsensmechanismen, die nicht im Härtetest erprobt sind.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin ist digitales Geld — ein Wertspeicher und ein Tauschmittel. Die meisten Krypto-Tokens sind spekulative Utility- oder Governance-Tokens mit unklarem realen Wert.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin wird unter Angriff stärker und hat jede Krise, jedes Verbot und jede Kritik überlebt. Die meisten Krypto-Projekte scheitern unter regulatorischem, technischem oder Marktdruck.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin hat keinen CEO, kein Unternehmen und keinen einzelnen Ausfallpunkt. Die meisten Krypto-Projekte hängen von VC-Investoren, bestimmten Führungspersonen oder dem Überleben eines einzelnen Unternehmens ab.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">bildender Kunst</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Jeder Bitcoin ist identisch und austauschbar. Jedes Kunstwerk ist einzigartig — unterschiedliche Entstehung, Geschichte, Zustand und Provenienz machen direkte Vergleiche extrem schwierig.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin wird 24/7 auf einem globalen Markt gehandelt, der jedem zugänglich ist. Bildende Kunst erfordert spezialisierte Auktionshäuser, Privathändler oder Galerien, und der Verkauf kann Monate dauern.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Der Kauf oder Verkauf von Bitcoin kostet weniger als 1 % an Gebühren, oft viel weniger. Der Verkauf von Kunstwerken häuft 30–40 % an Käuferaufschlägen, Provisionen, Versicherung, Transport und Authentifizierungsgebühren auf.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin ist in 100 Millionen Satoshis teilbar und daher ideal für Transaktionen jeder Größe. Du kannst nicht einen Teil eines Gemäldes oder eine Ecke einer Skulptur ohne Gegenparteirisiko besitzen.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Eigentum und Authentizität von Bitcoin kann jeder kryptografisch auf der Blockchain verifizieren. Die Echtheitsprüfung von Kunstwerken ist teuer, langsam und wird regelmäßig von Fälschern getäuscht — wodurch der Wert über Nacht vernichtet werden kann.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Richtig gesicherter Bitcoin überlebt Überschwemmungen, Brände, Erdbeben und Diebstahl. Bildende Kunst ist anfällig für jede Form physischer Zerstörung, und Versicherungen decken selten alles ab.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Jeder mit Internetverbindung und etwas Geld kann Bitcoin kaufen. Investitionen in bildende Kunst sind praktisch auf wohlhabende Sammler mit Zugang zu Auktionen und Spezialwissen beschränkt.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">Gold</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin lässt sich sofort über das Internet zu niedrigen Gebühren versenden. Gold muss physisch verschickt werden, um das Eigentum zu übertragen.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin ist ein digital-natives Asset, das Du über das Internet transportieren kannst. Online-Gold ist ein digitaler Schuldschein — Du besitzt nur das Versprechen eines Verwahrers, nicht das Metall selbst.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin hat eine feste Obergrenze von 21 Millionen BTC. Goldangebot wächst um etwa <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6 % pro Jahr</a>, wodurch Dein Anteil schrumpft — weniger als Fiat",
	"bitcoin-vs-gold::point_3_summary_2": "Inflation",
	"bitcoin-vs-gold::point_3_summary_3":
		", aber dennoch Inflation.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Wenn die Goldpreise steigen, wird mehr Gold gefördert, was den Preis wieder drückt. Das Angebot von Bitcoin ist unelastisch — egal wie hoch der Preis steigt, es wird immer nur 21 Millionen geben.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Das Bitcoin-Netzwerk wird von Zehntausenden unabhängiger Nodes verifiziert. Das meiste physische Gold liegt in einigen wenigen großen Tresoren.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Jeder kann echten Bitcoin verifizieren, indem er eine Full Node betreibt — das ist nur eine App. Die Verifizierung von physischem Gold erfordert das Einschmelzen; es könnte Wolfram drinstecken.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin ist in 100 Millionen Satoshis teilbar und daher ideal für Käufe jeder Größe. Gold lässt sich nicht leicht in kleinere Transaktionen aufteilen.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">Immobilien</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin bewegt sich sofort überall auf der Welt hin. Immobilien sind an einen Ort gebunden und lokalen wirtschaftlichen, politischen und natürlichen Risiken ausgesetzt.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin ist in 100 Millionen Satoshis teilbar. Eine Immobilie kann nicht teilweise verkauft werden — Du kannst nicht nur die Küche verkaufen oder ein halbes Schlafzimmer kaufen.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin läuft auf einem dezentralen Netzwerk, das keine Regierung kontrollieren kann. Immobilien sind stark reguliert — Zonierung, Mietpreisbremsen, Enteignung und Beschlagnahmung greifen alle.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin erfordert keine Wartung. Immobilien erfordern Reparaturen, Renovierungen, Versicherungen, Verwaltung und den Umgang mit Mieterproblemen.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin unterliegt keinen laufenden Steuern — Kapitalertragssteuer zahlst Du nur beim Verkauf. Auf Immobilien zahlst Du jährlich Grundsteuer, unabhängig vom Einkommen.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Richtig gesicherter Bitcoin übersteht Feuer, Hochwasser und Erdbeben. Immobilien sind jeder Katastrophe ausgesetzt, und Versicherungen decken selten alles ab.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Jeder Bitcoin ist identisch und austauschbar. Jede Immobilie ist einzigartig, was Bewertungen und Vergleiche erschwert.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin wird 24/7 global für jeden mit Internetzugang gehandelt. Immobilienverkäufe sind auf lokale Käufer beschränkt und der Abschluss kann Monate mit Papierkram dauern.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin erlaubt direkten Einzelbesitz für jedermann. Der Kauf von Immobilien als Investment über den Eigenbedarf hinaus treibt Wohnpreise hoch, senkt die Bezahlbarkeit und befeuert Wohnkrisen.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">Aktien</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin ist ein direktes Asset, das Du vollständig besitzt. Aktien sind Anteile an einem Unternehmen — ihr Wert hängt von Management, Leistung und Entscheidungen ab, die Du nicht kontrollierst.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin hat eine feste Obergrenze von 21 Millionen BTC. Unternehmen können jederzeit neue Aktien ausgeben und bestehende Aktionäre verwässern — ähnlich wie Fiat-",
	"bitcoin-vs-stocks::point_2_summary_2": "Inflation",
	"bitcoin-vs-stocks::point_2_summary_3":
		" Bargeld verwässert. Bei Bitcoin schrumpft Dein Anteil nie.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin hat keinen CEO und keinen einzelnen Ausfallpunkt. Aktien hängen stark vom Management ab — eine einzige Fehlentscheidung oder der Abgang einer Schlüsselperson kann den Kurs drücken.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Der Preis von Bitcoin kommt aus offenen globalen Märkten. Aktienbewertungen stützen sich auf Kennzahlen wie KGV, die überteuerte Aktien verschleiern können.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin wird 24/7 weltweit gehandelt. Aktienmärkte sind nur werktags zu Börsenzeiten geöffnet.",
	"bitcoin-vs-stocks::point_6_summary_1": "Bei Bitcoin kannst Du über eine einfache App in",
	"bitcoin-vs-stocks::point_6_summary_2": "Selbstverwahrung",
	"bitcoin-vs-stocks::point_6_summary_3":
		" gehen — kein Broker nötig. Aktien liegen bei Brokerhäusern, was Dich einem Gegenparteirisiko aussetzt, falls diese zusammenbrechen.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Das feste Angebot von Bitcoin macht ihn zu einer verlässlichen Absicherung gegen Inflation. Einige Aktien schlagen die Inflation, andere nicht — es gibt keine Garantie.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Der Unterschied zwischen <span class=\"orange\">Bitcoin</span> und <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin ist ein offenes Netzwerk, dem jeder ohne Erlaubnis beitreten kann. Visa ist ein geschlossenes System, das von Finanzinstituten kontrolliert wird, die den Zugang verweigern können — besonders Menschen ohne Bankkonto oder mit eingeschränktem Zugang zu Bankdienstleistungen.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin-Transaktionen haben keine Händlergebühren. Visa berechnet Händlern typischerweise etwa 3 % pro Transaktion — Dein Unternehmen kann Geld sparen, indem es",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin-Zahlungen",
	"bitcoin-vs-visa::point_2_summary_3": " akzeptiert.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Jede Bitcoin-Transaktion steht in einer öffentlichen, überprüfbaren Blockchain. Visa betreibt ein geschlossenes, proprietäres System, bei dem Kunden nichts unabhängig überprüfen können.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin kann von keiner zentralen Autorität eingefroren werden. Visa kann Konten jederzeit einfrieren, Transaktionen blockieren oder den Dienst verweigern.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin ist endgültige Abwicklung — Du gibst nur aus, was Du besitzt. Kreditkarten erzeugen Schulden mit Zinsen, oft über 25 % pro Jahr.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin lässt Dich in",
	"bitcoin-vs-visa::point_6_summary_2": "Selbstverwahrung",
	"bitcoin-vs-visa::point_6_summary_3":
		" gehen, ohne eine Bank oder einen Zahlungsanbieter. Kreditkarten benötigen immer Vermittler.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin funktioniert 24/7 global ohne Geschäftszeiten. Visa hat Betriebszeiten, Wartungsfenster und geografische Beschränkungen, die Transaktionen blockieren können.",
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
		`translate-rest-part1 (de): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
