/**
 * Creates Danish (da) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'da';
const today = '2026-04-07';

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

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin er godt for virksomheder",
	"biz_header": "BITCOIN ER GODT FOR VIRKSOMHEDER",
	"biz_s1": "Lave gebyrer uden minimumsbeløb",
	"biz_s1_c1": "Bitcoin lader dig modtage betalinger direkte fra kunder, på samme måde som kontanter. Bitcoin-netværket fungerer uden mellemmænd som banker og kreditkortselskaber, der opkræver høje gebyrer.",
	"biz_s2": "Øjeblikkelig afregning",
	"biz_s2_c1": "Ligesom kontanter afregnes Bitcoin-betalinger øjeblikkeligt. Du behøver ikke vente på, at kreditkortselskabet eller din bank betaler dig. I stedet har du adgang til dine penge med det samme.",
	"biz_s3": "Ingen tilbagebetalinger eller svindel",
	"biz_s3_c1": "Fordi Bitcoin-betalinger sker direkte mellem dig og dine kunder, kan ingen trække pengene tilbage gennem en tilbagebetaling.",
	"biz_s3_c2": "Falsk Bitcoin kan ikke sendes over Bitcoin-netværket, hvilket betyder, at du aldrig behøver at bekymre dig om svigagtige transaktioner, der kan koste din virksomhed penge.",
	"biz_s4": "Få flere kunder",
	"biz_s4_c1": "Millioner af mennesker ejer Bitcoin og ønsker at bruge det hos steder, der accepterer det.",
	"biz_s4_c2": "Ved at acceptere Bitcoin kan din virksomhed blive opført på kort over Bitcoin-forhandlere og få gratis eksponering for nye kunder.",
	"biz_s4_c3": "At acceptere Bitcoin er 100% gratis. Ingen kontrakter eller skjulte gebyrer."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Lær hvorfor Bitcoin er godt for virksomheder",
	"why_header": "BITCOIN ER GODT FOR VIRKSOMHEDER",
	"why_good_for_you": "BITCOIN ER OGSÅ GODT FOR DIG!",
	"why_learn_more_lowercase": "Lær mere.",
	"why_s1": "Bitcoin har ikke inflation",
	"why_s1_c1": "Inflation opstår, når flere penge trykkes eller skabes ud af intet. Det gør dine penge mindre værd over tid.",
	"why_s1_c2": "Bitcoin har en fast forsyningsgrænse, hvilket betyder, at ingen kan trykke flere Bitcoin.",
	"why_s2": "Bitcoin har ingen bankkriser",
	"why_s2_c1": "Flere amerikanske banker er kollapset på grund af bankkriser i de seneste år.",
	"why_s2_c2": "I stedet for bare at opbevare dine penge investerer bankerne dem og låner dem ud. Hvis disse investeringer ikke går godt, har de ikke nok penge til at give dig dine tilbage.",
	"why_s2_c3": "Og FDIC's forsikringsfond har kun 1 dollar for hver 100 dollar, det forsikrer.",
	"why_s3": "Bitcoin kræver ingen tilladelse",
	"why_s3_c1": "I modsætning til traditionelle finansielle netværk kræver Bitcoin ingen tilladelse for at bruges.",
	"why_s3_c2": "Det betyder, at ingen kan forhindre dig i at bruge Bitcoin af nogen grund. Det er det første finansielle netværk, du kan bruge uden at bekymre dig om censur eller beslaglæggelse.",
	"why_s4": "Bitcoin bygger en bedre verden",
	"why_s4_c1": "Bitcoin er en misforstået teknologi, der bygger en bedre verden.",
	"why_s4_c2": "Bitcoin har gjort det muligt for menneskerettighedsaktivister at kæmpe for frihed, reduceret globale metanudledninger, reddet nationalparker og meget mere."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Accepter Bitcoin-betalinger i din virksomhed",
	"guide_header": "ER DU KLAR TIL AT ACCEPTERE BITCOIN I DIN VIRKSOMHED?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Ofte stillede spørgsmål om at acceptere Bitcoin",
	"faq_description": "Har du spørgsmål om at acceptere Bitcoin-betalinger i din virksomhed?",
	"faq_header": "HAR DU SPØRGSMÅL OM AT ACCEPTERE BITCOIN-BETALINGER?",
	"faq_s1": "Hvad er Bitcoin?",
	"faq_s1_c1": "Bitcoin er to ting: digitale penge og et computernetværk.",
	"faq_s1_c2": "Du kan sende bitcoin (digitale penge) direkte til andre mennesker ved hjælp af Bitcoin-netværket.",
	"faq_s1_c3": "Bitcoin-netværket fungerer uden mellemmænd eller centrale myndigheder, som banker eller kreditkortselskaber, så du kan undgå deres transaktionsgebyrer.",
	"faq_s1_c4": "Bitcoin-transaktioner når endelig afregning hurtigt (10 minutter) og kan aldrig tilbageføres, så du kan sove trygt med visheden om, at dine penge virkelig er dine.",
	"faq_s2": "Hvordan kan Bitcoin gavne min virksomhed?",
	"faq_s2_c1": "Bitcoin lader dig modtage betalinger med lavere gebyrer og få flere kunder. Bitcoin-betalinger har lave gebyrer uden minimumsbeløb, afregnes øjeblikkeligt og er immune over for tilbagebetalinger og svindel.",
	"faq_s2_c2": "At acceptere Bitcoin er gratis og lader dig opføre din virksomhed på kort over Bitcoin-forhandlere, så Bitcoin-brugere nemt kan finde dig.",
	"faq_s2_c3": "Se alle de måder, Bitcoin er godt for virksomheder.",
	"faq_s3": "Hvordan modtager jeg Bitcoin-betalinger?",
	"faq_s3_c1": "Alt du behøver for at modtage Bitcoin-betalinger er en gratis Bitcoin-wallet.",
	"faq_s3_c2": "Vores wallet-guide hjælper dig med at komme hurtigt og nemt i gang, så du kan begynde at drage fordel af Bitcoin-betalinger allerede i dag!",
	"faq_s3_c3": "Vis wallet-guide",
	"faq_s4": "Kan jeg konvertere modtagne Bitcoin-betalinger til min lokale valuta?",
	"faq_s4_c1": "Ja! Med en hybrid-wallet kan du automatisk konvertere modtagne Bitcoin-betalinger til din lokale valuta øjeblikkeligt, når betalingen modtages.",
	"faq_s4_c2": "Vores wallet-guide hjælper dig med at komme hurtigt og nemt i gang.",
	"faq_s4_c3": "Du kan også vælge at beholde en del af modtagne betalinger i Bitcoin. At spare i Bitcoin har mange fordele:",
	"faq_s4_c4": "Bitcoin er et fuldreserve finansielt system.",
	"faq_s4_c5": "Bitcoin har ikke inflation.",
	"faq_s4_c6": "Disse fordele gør Bitcoin til en fremragende måde at opbevare penge på lang sigt.",
	"faq_s4_c7": "Selvom du vælger at konvertere alle Bitcoin-betalinger til dollar, får du stadig fordelene ved at modtage betalinger med meget lavere gebyrer og nå flere potentielle kunder.",
	"faq_s5": "Kan jeg modtage Bitcoin-betalinger personligt?",
	"faq_s5_c1": "Ja! At modtage Bitcoin-betalinger personligt er nemt med en Bitcoin-wallet.",
	"faq_s5_c2": "Vores wallet-guide hjælper dig med at vælge den bedste til din virksomhed.",
	"faq_s5_c3": "Vis wallet-guide",
	"faq_s6": "Kan jeg modtage Bitcoin-betalinger online?",
	"faq_s6_c1": "Ja! At modtage Bitcoin-betalinger online med din eksisterende webshop er nemt.",
	"faq_s6_c2": "Tjek vores wallet-guide for mere information.",
	"faq_s7": "Hvordan kan jeg lade kunderne vide, at jeg accepterer Bitcoin?",
	"faq_s7_c1": "Vi tilbyder gratis klistermærker med «Bitcoin accepteres her», som du kan vise i din virksomhed for at lade kunderne vide, at du accepterer Bitcoin.",
	"faq_s7_c2": "Klik her for at bestille klistermærker.",
	"faq_s7_c3": "Du kan også gratis opføre din virksomhed på kort over Bitcoin-forhandlere og få eksponering for millioner af Bitcoin-brugere, der ønsker at bruge deres Bitcoin hos virksomheder, der accepterer det.",
	"faq_s7_c4": "Tilmeld dig nu.",
	"faq_s8": "Hvordan kan jeg få flere kunder ved at acceptere Bitcoin?",
	"faq_s8_c1": "Der findes millioner af Bitcoin-brugere, der ønsker at bruge deres Bitcoin hos virksomheder, der accepterer det.",
	"faq_s8_c2": "Ved at acceptere Bitcoin-betalinger kan din virksomhed blive opført på gratis kort over Bitcoin-forhandlere og få eksponering for nye potentielle kunder.",
	"faq_s8_c3": "Tilmeld dig nu.",
	"faq_s9": "Hvor meget koster det at acceptere Bitcoin?",
	"faq_s9_c1": "At acceptere Bitcoin i din virksomhed er 100% gratis. Ingen kontrakter eller skjulte gebyrer.",
	"faq_s9_c2": "Tjek vores wallet-guide og begynd at acceptere Bitcoin-betalinger allerede i dag."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Guide til Bitcoin-regnskab for virksomheder",
	"accounting_description": "Lær hvordan du korrekt fører regnskab for Bitcoin-betalinger i din virksomhed.",
	"accounting_header": "GUIDE TIL BITCOIN-REGNSKAB",
	"accounting_s1_c1": "At acceptere Bitcoin har mange fordele, som at modtage betalinger med lavere gebyrer og få flere kunder.",
	"accounting_s1_c2": "Hvis du bruger en hybrid-wallet fra vores wallet-guide og automatisk sælger 100% af modtaget Bitcoin for dollar, behøver du ikke ændre noget i dit nuværende regnskab.",
	"accounting_s1_c3": "Vis wallet-guide.",
	"accounting_s1_c4": "Hvis du dog vælger at beholde en del af modtagne Bitcoin-betalinger som Bitcoin, skal du spore nogle ting for dit regnskab. Det kan virke overvældende ved første blik, men det er faktisk ret simpelt.",
	"accounting_s1_c5": "Bemærk: denne guide er kun informativ og udgør ikke skatterådgivning.",
	"accounting_s1_c6": "Hvis du har brug for skatterådgivning, anbefaler vi stærkt Satoshi Pacioli Accounting Services, et regnskabsfirma specialiseret i Bitcoin-regnskab.",
	"accounting_s2": "SPOR DIN ANSKAFFELSESPRIS",
	"accounting_s2_c1": "At spore anskaffelsesprisen bliver den største forskel mellem at føre regnskab i dollar og at føre regnskab i Bitcoin. Selvom du tænker på din virksomhed udelukkende i Bitcoin-termer, skal du rapportere dollarværdien for hver transaktion i din selvangivelse.",
	"accounting_s2_c2": "Hvis du bruger QuickBooks, kan du gøre dette automatisk med Bitcoin Sync-tilføjelsen.",
	"accounting_s2_c3": "Hvis du ikke bruger QuickBooks, anbefaler vi Satoshi Pacioli Accounting Services, et regnskabsfirma specialiseret i Bitcoin-regnskab.",
	"accounting_s2_c4": "For manuel sporing skal du simpelthen registrere mængden af modtaget Bitcoin og dollarværdien af Bitcoin-transaktionen den dag.",
	"accounting_s2_c5": "Du kan se den aktuelle dollarpris på Bitcoin her.",
	"accounting_s2_c6": "Spor denne information i et Excel-regneark og aflever det til din revisor.",
	"accounting_s2_c7": "Du kan også automatisk importere disse data til Excel.",
	"accounting_s2_c8": "Du kan også se den historiske dollarpris på Bitcoin for tidligere dage, så du ikke behøver at gøre det hver dag.",
	"accounting_s3": "BRUGE ELLER SÆLGE DIN BITCOIN",
	"accounting_s3_c1": "Hvis du bruger en hybrid-wallet fra vores wallet-guide og automatisk sælger 100% af modtaget Bitcoin for dollar, behøver du ikke ændre noget i dit nuværende regnskab.",
	"accounting_s3_c2": "Vis wallet-guide.",
	"accounting_s3_c3": "Hvis du vælger at bruge eller sælge en del af modtaget Bitcoin på et senere tidspunkt, skal du blot tilføje prisen, du solgte den for, i Excel-regnearket, hvor du sporer anskaffelsesprisen.",
	"accounting_s3_c4": "For eksempel, hvis du modtog Bitcoin til en værdi af 100 dollar den 1. januar og valgte at sælge eller bruge den den 1. februar til en ny værdi af 110 dollar, skal du registrere en kapitalgevinst på 10 dollar i regnskabet.",
	"accounting_s3_c5": "Dette kan også fungere omvendt. For eksempel, hvis du modtog Bitcoin til en værdi af 100 dollar den 1. januar og valgte at sælge eller bruge den den 1. februar til en ny værdi af 90 dollar, skal du registrere et kapitaltab på 10 dollar i regnskabet.",
	"accounting_s4": "JEG HAR BRUG FOR MERE HJÆLP",
	"accounting_s4_c1": "Hvis du har brug for mere hjælp med at integrere Bitcoin i din virksomheds regnskab, anbefaler vi stærkt Satoshi Pacioli Accounting Services, et regnskabsfirma specialiseret i Bitcoin-regnskab.",
	"accounting_s4_c2": "Lær mere om Satoshi Pacioli Accounting Services."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Sådan accepterer du Bitcoin-betalinger",
	"wallets_header": "FÅ EN GRATIS BITCOIN-WALLET TIL AT MODTAGE BETALINGER",
	"wallets_intro_1": "Alle Bitcoin-wallets er kompatible med hinanden, så kunder kan betale dig i Bitcoin uanset hvilken wallet de bruger.",
	"wallets_intro_2": "Rene Bitcoin-wallets:",
	"wallets_intro_3": "Disse er rene Bitcoin-wallets, der låser op for alle fordelene ved Bitcoin: ingen mellemmænd, lave gebyrer og ingen tilbagebetalinger eller svindel.",
	"wallets_intro_4": "Hybrid-wallets:",
	"wallets_intro_5": "Disse lader dig veksle en valgfri andel af din Bitcoin til dollar, så snart en kunde betaler dig. Gebyrerne er stadig lavere end kreditkort, men højere end rene Bitcoin-betalinger.",
	"wallets_intro_6": "Begge typer er fremragende måder at acceptere Bitcoin på. Din specifikke wallet afhænger af størrelsen og typen af den virksomhed, du driver.",
	"wallets_choice_sole": "wallets til enkeltmandsvirksomheder",
	"wallets_choice_multiple": "wallets til virksomheder med flere ansatte",
	"wallets_choice_online": "wallets til onlinevirksomheder",
	"wallets_choice_invoice": "wallets til faktureringsvirksomheder",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Du kan acceptere Bitcoin-betalinger med din eksisterende Square PoS-terminal eller webshop-integration. At acceptere Bitcoin-betalinger har aldrig været nemmere.",
	"wallets_feature_bitcoin_only": "Ren Bitcoin-wallet",
	"wallets_feature_no_info": "Ingen information nødvendig",
	"wallets_feature_in_person": "Kun personlige betalinger",
	"wallets_feature_settles_bitcoin": "Afregner 100% i Bitcoin",
	"wallets_feature_hybrid": "Hybrid-wallet",
	"wallets_feature_info": "Virksomhedsinformation nødvendig",
	"wallets_feature_in_person_online": "Personlige og onlinebetalinger",
	"wallets_feature_settles_both": "Afregner i Bitcoin og dollar",
	"wallets_feature_multiple_employees": "Understøttelse af flere ansatte (BPT)",
	"wallets_feature_self_hosted": "Egen hosting = 0% gebyrer",
	"wallets_feature_online_store": "Webshop-integration",
	"wallets_feature_invoicing": "Gratis faktureringsprogram",
	"wallets_get_wallet": "FÅ WALLET"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Kort over Bitcoin-forhandlere – Opfør din virksomhed gratis",
	"maps_header": "TILMELD DIG KORT OVER BITCOIN-FORHANDLERE OG FÅ FLERE KUNDER",
	"maps_request_details": "Indtast dine virksomhedsoplysninger nedenfor, så opfører vi dig gratis på kort over Bitcoin-forhandlere. Dette gør det muligt for bitcoinere at finde din virksomhed og bruge deres Bitcoin hos dig!",
	"maps_view": "Se kortet her."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Din virksomhed vil blive opført på kort over Bitcoin-forhandlere inden for 1 til 2 uger.",
	"kit_success_2": "Se kortet her."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Klistermærker – Bitcoin accepteres her",
	"stickers_header": "FÅ GRATIS KLISTERMÆRKER «BITCOIN ACCEPTERES HER»",
	"stickers_request": "Bestil gratis klistermærker",
	"stickers_request_details": "Lad dine kunder vide, at du accepterer Bitcoin-betalinger med disse gratis klistermærker «Bitcoin accepteres her».",
	"stickers_country_global_print": "Globalt — Jeg printer mine egne klistermærker",
	"stickers_request_instructions": "Du vil modtage tre klistermærker «Bitcoin accepteres her» i en almindelig hvid kuvert. Hvis du har brug for mere end tre klistermærker til din virksomhed, er du velkommen til at bestille flere gange. Adressedata slettes efter afsendelse af gratis klistermærker.",
	"stickers_print_details": "Du kan printe dine egne klistermærker «Bitcoin accepteres her» uanset hvor du bor! Klik på dit sprog nedenfor for at se klistermærkefiler og instruktioner.",
	"stickers_request_language": "Kan du ikke se dit sprog? Udfyld formularen nedenfor for at anmode om klistermærkefiler «Bitcoin accepteres her» på dit sprog."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Du vil modtage dine klistermærker inden for 1 til 2 uger i en almindelig hvid kuvert. Hver kuvert indeholder 3 klistermærker. Hvis du har brug for mere end 3 klistermærker til din virksomhed, er du velkommen til at bestille en pakke mere!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Vi laver og udgiver din klistermærkefil inden for 3 til 4 uger. Tak for din tålmodighed!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin-virksomhedspakke",
	"kit_header": "PRINT DIN EGEN BITCOIN-VIRKSOMHEDSPAKKE",
	"kit_request": "BESTIL EN GRATIS PAKKE",
	"kit_request_details": "Hver Bitcoin-virksomhedspakke indeholder to flyers, der gør det nemt at overbevise en lokal virksomhed om at acceptere Bitcoin.",
	"kit_country_global_print": "Globalt — Jeg printer mine egne pakker",
	"kit_enter_address": "Indtast din postadresse, så sender vi en gratis Bitcoin-virksomhedspakke til dig i en almindelig hvid kuvert. Adressedata slettes efter afsendelse af pakken.",
	"kit_print_details": "Du kan deltage ved at printe dine egne flyers uanset hvor du bor! Du kan også henvise virksomheder til vores digitale virksomhedspakke for at undgå printning.",
	"kit_view_files": "VIS FILER",
	"kit_digital_kit": "DIGITAL PAKKE",
	"kit_resources": "HVER PAKKE LINKER TIL DISSE GRATIS RESSOURCER"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Du vil modtage din Bitcoin-virksomhedspakke inden for 1 til 2 uger i en almindelig hvid kuvert."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Print din egen Bitcoin-virksomhedspakke",
	"english_bbk_files_description": "Download flyerfilerne her.",
	"english_header": "PRINT DIN EGEN ENGELSKE BITCOIN-VIRKSOMHEDSPAKKE"
});

console.log(`\nDone! Created 14 business files.`);
