/**
 * Creates Norwegian Bokmål (nb) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'nb';
const today = '2026-04-04';

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
	"bitcoin_is_good_for_business": "Bitcoin er bra for bedrifter",
	"biz_header": "BITCOIN ER BRA FOR BEDRIFTER",
	"biz_s1": "Lave avgifter uten minimumsbeløp",
	"biz_s1_c1": "Bitcoin lar deg motta betalinger direkte fra kunder, på samme måte som kontanter. Bitcoin-nettverket fungerer uten mellommenn som banker og kredittkortselskaper som tar høye avgifter.",
	"biz_s2": "Umiddelbar oppgjør",
	"biz_s2_c1": "Akkurat som kontanter gjøres Bitcoin-betalinger opp umiddelbart. Du trenger ikke vente på at kredittkortselskapet eller banken din skal betale deg. I stedet får du tilgang til pengene dine med en gang.",
	"biz_s3": "Ingen tilbakebetalinger eller svindel",
	"biz_s3_c1": "Fordi Bitcoin-betalinger skjer direkte mellom deg og kundene dine, kan ingen ta tilbake pengene gjennom en tilbakebetaling.",
	"biz_s3_c2": "Falsk Bitcoin kan ikke sendes over Bitcoin-nettverket, noe som betyr at du aldri trenger å bekymre deg for svindelaktige transaksjoner som kan koste bedriften din penger.",
	"biz_s4": "Få flere kunder",
	"biz_s4_c1": "Millioner av mennesker eier Bitcoin og ønsker å bruke det hos steder som aksepterer det.",
	"biz_s4_c2": "Ved å akseptere Bitcoin kan bedriften din listes på kart over Bitcoin-forhandlere og få gratis eksponering for nye kunder.",
	"biz_s4_c3": "Å akseptere Bitcoin er 100% gratis. Ingen kontrakter eller skjulte avgifter."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Lær hvorfor Bitcoin er bra for bedrifter",
	"why_header": "BITCOIN ER BRA FOR BEDRIFTER",
	"why_good_for_you": "BITCOIN ER BRA FOR DEG OGSÅ!",
	"why_learn_more_lowercase": "Lær mer.",
	"why_s1": "Bitcoin har ikke inflasjon",
	"why_s1_c1": "Inflasjon oppstår når mer penger trykkes eller skapes ut av intet. Dette gjør at pengene dine taper verdi over tid.",
	"why_s1_c2": "Bitcoin har en fast tilbudsgrense, noe som betyr at ingen kan trykke mer Bitcoin.",
	"why_s2": "Bitcoin har ingen bankkriser",
	"why_s2_c1": "Flere amerikanske banker har kollapset på grunn av bankkriser de siste årene.",
	"why_s2_c2": "I stedet for bare å oppbevare pengene dine, investerer bankene dem og låner dem ut. Hvis disse investeringene ikke går bra, har de ikke nok penger til å gi deg tilbake dine.",
	"why_s2_c3": "Og FDICs forsikringsfond har bare 1 dollar for hver 100 dollar det forsikrer.",
	"why_s3": "Bitcoin krever ingen tillatelse",
	"why_s3_c1": "I motsetning til tradisjonelle finansielle nettverk krever Bitcoin ingen tillatelse for å brukes.",
	"why_s3_c2": "Det betyr at ingen kan hindre deg fra å bruke Bitcoin av noen grunn. Det er det første finansielle nettverket du kan bruke uten å bekymre deg for sensur eller beslagleggelse.",
	"why_s4": "Bitcoin bygger en bedre verden",
	"why_s4_c1": "Bitcoin er en misforstått teknologi som bygger en bedre verden.",
	"why_s4_c2": "Bitcoin har gjort det mulig for menneskerettighetsaktivister å kjempe for frihet, redusert globale metanutslipp, reddet nasjonalparker og mye mer."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Aksepter Bitcoin-betalinger i bedriften din",
	"guide_header": "ER DU KLAR TIL Å AKSEPTERE BITCOIN I BEDRIFTEN DIN?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Ofte stilte spørsmål om å akseptere Bitcoin",
	"faq_description": "Har du spørsmål om å akseptere Bitcoin-betalinger i bedriften din?",
	"faq_header": "HAR DU SPØRSMÅL OM Å AKSEPTERE BITCOIN-BETALINGER?",
	"faq_s1": "Hva er Bitcoin?",
	"faq_s1_c1": "Bitcoin er to ting: digitale penger og et datanettverk.",
	"faq_s1_c2": "Du kan sende bitcoin (digitale penger) direkte til andre mennesker ved hjelp av Bitcoin-nettverket.",
	"faq_s1_c3": "Bitcoin-nettverket fungerer uten mellommenn eller sentrale myndigheter, som banker eller kredittkortselskaper, slik at du kan unngå deres transaksjonsavgifter.",
	"faq_s1_c4": "Bitcoin-transaksjoner når endelig oppgjør raskt (10 minutter) og kan aldri reverseres, slik at du kan sove trygt med vissheten om at pengene dine virkelig er dine.",
	"faq_s2": "Hvordan kan Bitcoin gagne bedriften min?",
	"faq_s2_c1": "Bitcoin lar deg motta betalinger med lavere avgifter og få flere kunder. Bitcoin-betalinger har lave avgifter uten minimumsbeløp, gjøres opp umiddelbart og er immune mot tilbakebetalinger og svindel.",
	"faq_s2_c2": "Å akseptere Bitcoin er gratis og lar deg liste bedriften din på kart over Bitcoin-forhandlere slik at Bitcoin-brukere enkelt kan finne deg.",
	"faq_s2_c3": "Se alle måtene Bitcoin er bra for bedrifter.",
	"faq_s3": "Hvordan mottar jeg Bitcoin-betalinger?",
	"faq_s3_c1": "Alt du trenger for å motta Bitcoin-betalinger er en gratis Bitcoin-lommebok.",
	"faq_s3_c2": "Vår lommebokguide hjelper deg å komme i gang raskt og enkelt slik at du kan begynne å dra nytte av Bitcoin-betalinger allerede i dag!",
	"faq_s3_c3": "Vis lommebokguide",
	"faq_s4": "Kan jeg konvertere mottatte Bitcoin-betalinger til min lokale valuta?",
	"faq_s4_c1": "Ja! Med en hybridlommebok kan du automatisk konvertere mottatte Bitcoin-betalinger til din lokale valuta umiddelbart når betalingen mottas.",
	"faq_s4_c2": "Vår lommebokguide hjelper deg å komme i gang raskt og enkelt.",
	"faq_s4_c3": "Du kan også velge å beholde en del av mottatte betalinger i Bitcoin. Å spare i Bitcoin har mange fordeler:",
	"faq_s4_c4": "Bitcoin er et fullreserve finansielt system.",
	"faq_s4_c5": "Bitcoin har ikke inflasjon.",
	"faq_s4_c6": "Disse fordelene gjør Bitcoin til en utmerket måte å lagre penger på lang sikt.",
	"faq_s4_c7": "Selv om du velger å konvertere alle Bitcoin-betalinger til dollar, får du fortsatt fordelene med å motta betalinger med mye lavere avgifter og nå flere potensielle kunder.",
	"faq_s5": "Kan jeg motta Bitcoin-betalinger personlig?",
	"faq_s5_c1": "Ja! Å motta Bitcoin-betalinger personlig er enkelt med en Bitcoin-lommebok.",
	"faq_s5_c2": "Vår lommebokguide hjelper deg å velge den beste for bedriften din.",
	"faq_s5_c3": "Vis lommebokguide",
	"faq_s6": "Kan jeg motta Bitcoin-betalinger på nett?",
	"faq_s6_c1": "Ja! Å motta Bitcoin-betalinger på nett med din eksisterende nettbutikk er enkelt.",
	"faq_s6_c2": "Sjekk ut vår lommebokguide for mer informasjon.",
	"faq_s7": "Hvordan kan jeg la kundene vite at jeg aksepterer Bitcoin?",
	"faq_s7_c1": "Vi tilbyr gratis klistremerker med «Bitcoin aksepteres her» som du kan vise i bedriften din for å la kundene vite at du aksepterer Bitcoin.",
	"faq_s7_c2": "Klikk her for å bestille klistremerker.",
	"faq_s7_c3": "Du kan også gratis liste bedriften din på kart over Bitcoin-forhandlere og få eksponering for millioner av Bitcoin-brukere som ønsker å bruke sin Bitcoin hos bedrifter som aksepterer det.",
	"faq_s7_c4": "Registrer deg nå.",
	"faq_s8": "Hvordan kan jeg få flere kunder ved å akseptere Bitcoin?",
	"faq_s8_c1": "Det finnes millioner av Bitcoin-brukere som ønsker å bruke sin Bitcoin hos bedrifter som aksepterer det.",
	"faq_s8_c2": "Ved å akseptere Bitcoin-betalinger kan bedriften din listes på gratis kart over Bitcoin-forhandlere og få eksponering for nye potensielle kunder.",
	"faq_s8_c3": "Registrer deg nå.",
	"faq_s9": "Hvor mye koster det å akseptere Bitcoin?",
	"faq_s9_c1": "Å akseptere Bitcoin i bedriften din er 100% gratis. Ingen kontrakter eller skjulte avgifter.",
	"faq_s9_c2": "Sjekk ut vår lommebokguide og begynn å akseptere Bitcoin-betalinger allerede i dag."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Guide for Bitcoin-regnskap i bedrifter",
	"accounting_description": "Lær hvordan du korrekt fører regnskap for Bitcoin-betalinger i bedriften din.",
	"accounting_header": "GUIDE FOR BITCOIN-REGNSKAP",
	"accounting_s1_c1": "Å akseptere Bitcoin har mange fordeler, som å motta betalinger med lavere avgifter og få flere kunder.",
	"accounting_s1_c2": "Hvis du bruker en hybridlommebok fra vår lommebokguide og automatisk selger 100% av mottatt Bitcoin for dollar, trenger du ikke endre noe i ditt nåværende regnskap.",
	"accounting_s1_c3": "Vis lommebokguide.",
	"accounting_s1_c4": "Hvis du imidlertid velger å beholde en del av mottatte Bitcoin-betalinger som Bitcoin, må du spore noen ting for regnskapet ditt. Det kan virke overveldende ved første blikk, men det er faktisk ganske enkelt.",
	"accounting_s1_c5": "Merk: denne guiden er kun informativ og utgjør ikke skatterådgivning.",
	"accounting_s1_c6": "Hvis du trenger skatterådgivning, anbefaler vi sterkt Satoshi Pacioli Accounting Services, et regnskapsfirma spesialisert på Bitcoin-regnskap.",
	"accounting_s2": "SPOR ANSKAFFELSESKOSTNADEN DIN",
	"accounting_s2_c1": "Å spore anskaffelseskostnaden blir den største forskjellen mellom å føre regnskap i dollar og å føre regnskap i Bitcoin. Selv om du tenker på bedriften din utelukkende i Bitcoin-termer, må du rapportere dollarverdien for hver transaksjon i selvangivelsen.",
	"accounting_s2_c2": "Hvis du bruker QuickBooks, kan du gjøre dette automatisk med Bitcoin Sync-tillegget.",
	"accounting_s2_c3": "Hvis du ikke bruker QuickBooks, anbefaler vi Satoshi Pacioli Accounting Services, et regnskapsfirma spesialisert på Bitcoin-regnskap.",
	"accounting_s2_c4": "For manuell sporing, registrer ganske enkelt mengden mottatt Bitcoin og dollarverdien av Bitcoin-transaksjonen den dagen.",
	"accounting_s2_c5": "Du kan se den gjeldende dollarprisen på Bitcoin her.",
	"accounting_s2_c6": "Spor denne informasjonen i et Excel-regneark og lever det til regnskapsføreren din.",
	"accounting_s2_c7": "Du kan også automatisk importere disse dataene til Excel.",
	"accounting_s2_c8": "Du kan også se den historiske dollarprisen på Bitcoin for tidligere dager, slik at du ikke trenger å gjøre det hver dag.",
	"accounting_s3": "BRUKE ELLER SELGE DIN BITCOIN",
	"accounting_s3_c1": "Hvis du bruker en hybridlommebok fra vår lommebokguide og automatisk selger 100% av mottatt Bitcoin for dollar, trenger du ikke endre noe i ditt nåværende regnskap.",
	"accounting_s3_c2": "Vis lommebokguide.",
	"accounting_s3_c3": "Hvis du velger å bruke eller selge en del av mottatt Bitcoin på et senere tidspunkt, legg ganske enkelt til prisen du solgte den for i Excel-regnearket der du sporer anskaffelseskostnaden.",
	"accounting_s3_c4": "For eksempel, hvis du mottok Bitcoin verdt 100 dollar den 1. januar og valgte å selge eller bruke den den 1. februar til en ny verdi av 110 dollar, må du registrere en kapitalgevinst på 10 dollar i regnskapet.",
	"accounting_s3_c5": "Dette kan også fungere motsatt. For eksempel, hvis du mottok Bitcoin verdt 100 dollar den 1. januar og valgte å selge eller bruke den den 1. februar til en ny verdi av 90 dollar, må du registrere et kapitaltap på 10 dollar i regnskapet.",
	"accounting_s4": "JEG TRENGER MER HJELP",
	"accounting_s4_c1": "Hvis du trenger mer hjelp med å integrere Bitcoin i bedriftens regnskap, anbefaler vi sterkt Satoshi Pacioli Accounting Services, et regnskapsfirma spesialisert på Bitcoin-regnskap.",
	"accounting_s4_c2": "Lær mer om Satoshi Pacioli Accounting Services."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Hvordan akseptere Bitcoin-betalinger",
	"wallets_header": "SKAFF EN GRATIS BITCOIN-LOMMEBOK FOR Å MOTTA BETALINGER",
	"wallets_intro_1": "Alle Bitcoin-lommebøker er kompatible med hverandre, slik at kunder kan betale deg i Bitcoin uansett hvilken lommebok de bruker.",
	"wallets_intro_2": "Rene Bitcoin-lommebøker:",
	"wallets_intro_3": "Dette er rene Bitcoin-lommebøker som låser opp alle fordelene med Bitcoin: ingen mellommenn, lave avgifter og ingen tilbakebetalinger eller svindel.",
	"wallets_intro_4": "Hybridlommebøker:",
	"wallets_intro_5": "Disse lar deg veksle en valgfri andel av din Bitcoin til dollar så snart en kunde betaler deg. Avgiftene er fortsatt lavere enn kredittkort, men høyere enn rene Bitcoin-betalinger.",
	"wallets_intro_6": "Begge typene er utmerkede måter å akseptere Bitcoin på. Din spesifikke lommebok avhenger av størrelsen og typen bedrift du driver.",
	"wallets_choice_sole": "lommebøker for enkeltpersonforetak",
	"wallets_choice_multiple": "lommebøker for bedrifter med flere ansatte",
	"wallets_choice_online": "lommebøker for nettbedrifter",
	"wallets_choice_invoice": "lommebøker for faktureringsbedrifter",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Du kan akseptere Bitcoin-betalinger med din eksisterende Square PoS-terminal eller nettbutikkintegrasjon. Å akseptere Bitcoin-betalinger har aldri vært enklere.",
	"wallets_feature_bitcoin_only": "Ren Bitcoin-lommebok",
	"wallets_feature_no_info": "Ingen informasjon nødvendig",
	"wallets_feature_in_person": "Kun personlige betalinger",
	"wallets_feature_settles_bitcoin": "Oppgjør 100% i Bitcoin",
	"wallets_feature_hybrid": "Hybridlommebok",
	"wallets_feature_info": "Bedriftsinformasjon nødvendig",
	"wallets_feature_in_person_online": "Personlige og nettbetalinger",
	"wallets_feature_settles_both": "Oppgjør i Bitcoin og dollar",
	"wallets_feature_multiple_employees": "Støtte for flere ansatte (BPT)",
	"wallets_feature_self_hosted": "Egen hosting = 0% avgifter",
	"wallets_feature_online_store": "Nettbutikkintegrasjon",
	"wallets_feature_invoicing": "Gratis faktureringsprogram",
	"wallets_get_wallet": "SKAFF LOMMEBOK"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Kart over Bitcoin-forhandlere – List bedriften din gratis",
	"maps_header": "REGISTRER DEG PÅ KART OVER BITCOIN-FORHANDLERE OG FÅ FLERE KUNDER",
	"maps_request_details": "Skriv inn bedriftsdetaljene dine nedenfor, så lister vi deg gratis på kart over Bitcoin-forhandlere. Dette gjør det mulig for bitcoinere å finne bedriften din og bruke sin Bitcoin hos deg!",
	"maps_view": "Vis kartet her."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Bedriften din vil bli listet på kart over Bitcoin-forhandlere innen 1 til 2 uker.",
	"kit_success_2": "Vis kartet her."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Klistremerker – Bitcoin aksepteres her",
	"stickers_header": "FÅ GRATIS KLISTREMERKER «BITCOIN AKSEPTERES HER»",
	"stickers_request": "Bestill gratis klistremerker",
	"stickers_request_details": "La kundene dine vite at du aksepterer Bitcoin-betalinger med disse gratis klistremerkene «Bitcoin aksepteres her».",
	"stickers_country_global_print": "Globalt — Jeg skriver ut mine egne klistremerker",
	"stickers_request_instructions": "Du vil motta tre klistremerker «Bitcoin aksepteres her» i en vanlig hvit konvolutt. Hvis du trenger mer enn tre klistremerker for bedriften din, bestill gjerne flere ganger. Adressedata slettes etter at gratis klistremerker er sendt.",
	"stickers_print_details": "Du kan skrive ut dine egne klistremerker «Bitcoin aksepteres her» uansett hvor du bor! Klikk på ditt språk nedenfor for å se klistremerkefiler og instruksjoner.",
	"stickers_request_language": "Ser du ikke ditt språk? Fyll ut skjemaet nedenfor for å be om klistremerkefiler «Bitcoin aksepteres her» på ditt språk."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Du vil motta klistremerkene dine innen 1 til 2 uker i en vanlig hvit konvolutt. Hver konvolutt inneholder 3 klistremerker. Hvis du trenger mer enn 3 klistremerker for bedriften din, bestill gjerne en pakke til!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Vi lager og publiserer klistremerkefilen din innen 3 til 4 uker. Takk for tålmodigheten!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin-bedriftspakke",
	"kit_header": "SKRIV UT DIN EGEN BITCOIN-BEDRIFTSPAKKE",
	"kit_request": "BESTILL EN GRATIS PAKKE",
	"kit_request_details": "Hver Bitcoin-bedriftspakke inneholder to flygeblad som gjør det enkelt å overbevise en lokal bedrift om å akseptere Bitcoin.",
	"kit_country_global_print": "Globalt — Jeg skriver ut mine egne pakker",
	"kit_enter_address": "Skriv inn postadressen din, så sender vi en gratis Bitcoin-bedriftspakke til deg i en vanlig hvit konvolutt. Adressedata slettes etter at pakken er sendt.",
	"kit_print_details": "Du kan delta ved å skrive ut dine egne flygeblad uansett hvor du bor! Du kan også henvise bedrifter til vår digitale bedriftspakke for å slippe utskrift.",
	"kit_view_files": "VIS FILER",
	"kit_digital_kit": "DIGITALT PAKKE",
	"kit_resources": "HVER PAKKE LENKER TIL DISSE GRATIS RESSURSENE"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Du vil motta din Bitcoin-bedriftspakke innen 1 til 2 uker i en vanlig hvit konvolutt."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Skriv ut din egen Bitcoin-bedriftspakke",
	"english_bbk_files_description": "Last ned flygebladfilene her.",
	"english_header": "SKRIV UT DIN EGEN ENGELSKE BITCOIN-BEDRIFTSPAKKE"
});

console.log(`\nDone! Created 14 business files.`);
