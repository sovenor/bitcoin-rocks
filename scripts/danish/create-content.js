/**
 * Creates Danish (da) translation files for remaining content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

// bank-runs
writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin har ingen bankkriser",
	"bank_runs_header": "BITCOIN HAR INGEN BANKKRISER",
	"bank_runs_header_2": "MEN DIN BANK KAN HAVE DET",
	"bank_runs_what": "HVAD ER EN BANKKRISE?",
	"bank_runs_what_content_1": "En bankkrise opstår, når for mange mennesker forsøger at hæve deres penge fra banken på samme tid.",
	"bank_runs_what_content_2": "Hvis bankerne ikke har nok penge tilgængelige til at dække hævningerne, kan de kollapse fuldstændigt under en bankkrise.",
	"bank_runs_how": "HVORDAN OPSTÅR BANKKRISER?",
	"bank_runs_how_content_1": "Vores banksystem er «fraktionelt reservebaseret», hvilket betyder, at bankerne ikke bare opbevarer dine penge i en boks og venter på, at du skal bruge dem eller hæve dem.",
	"bank_runs_how_content_2": "I stedet tager din bank dine penge og låner dem ud eller investerer dem. Dette kan låse dine penge i lange perioder, selvom banken lover dig muligheden for at hæve dine penge når som helst.",
	"bank_runs_how_content_3": "Så hvad sker der, hvis du forsøger at hæve dine penge, efter at banken allerede har lånt dem ud eller investeret dem?",
	"bank_runs_how_content_4": "Det er ikke et problem, hvis du er den eneste, der forsøger at hæve. Banken vil bare tage en andens penge og give dem til dig i stedet. Men hvad sker der, når for mange mennesker forsøger at hæve på samme tid?",
	"bank_runs_how_content_5": "Mange i USA fandt ud af det, da der var en krise i Silicon Valley Bank i marts 2023.",
	"bank_runs_how_content_6": "Banken havde investeret kundernes penge i statsobligationer, der var låst i op til 30 år. Endnu værre var værdien af disse obligationer faldet dramatisk for nylig, så Silicon Valley Bank kunne ikke bare sælge obligationerne for at få pengene tilbage til indskyderne. De var insolvente. De havde ikke nok penge til at dække indskydernes hævninger.",
	"bank_runs_how_content_7": "Efterhånden som flere fandt ud af det, blev problemet kun værre. Flere hævningsanmodninger kom ind, men mange blev ikke behandlet. Tusindvis af virksomheder indså, at de ikke ville kunne betale deres ansatte på grund af bankens svigt.",
	"bank_runs_how_content_8": "FDIC greb ind og indvilligede i at gøre indskyderne hele. Problem løst? Ikke helt...",
	"bank_runs_fdic": "BESKYTTER FDIC-FORSIKRING MINE PENGE?",
	"bank_runs_fdic_content_1": "FDIC-forsikring er designet til at beskytte bankindskydere i tilfælde af, at en bank svigter. Indskud er forsikret op til $250.000 pr. indskyder. Lyder godt, ikke?",
	"bank_runs_fdic_content_2": "Ikke helt. Hvis en bank svigter, hvor får FDIC så pengene fra? De har en forsikringsfond med 125 milliarder dollar i sig.",
	"bank_runs_fdic_content_3": "Det lyder som mange penge, indtil du sammenligner det med mængden af indskud, de forsikrer: næsten 10 billioner eller 10.000 milliarder dollar.",
	"bank_runs_fdic_content_4": "FDIC viser endda på deres hjemmeside, at de kun har nok penge i forsikringsfonden til at dække lidt mere end 1% af indskuddene.",
	"bank_runs_fdic_content_5": "I tilfælde af en banksvigt, der oversteg FDIC-forsikringsfonden, er det sandsynligt (men ikke garanteret), at den amerikanske regering ville trykke penge for at gøre indskyderne hele.",
	"bank_runs_fdic_content_6": "Men at trykke penge forårsager inflation, så det er ikke en god løsning.",
	"bank_runs_safe": "FINDES DER BANKER, DER IKKE BRUGER FRAKTIONEL RESERVE?",
	"bank_runs_safe_content_1": "Nogle banker har forsøgt at være «sikre banker», der ikke låner ud eller investerer indskydernes midler.",
	"bank_runs_safe_content_2": "Selvom disse sikre banker ville have nul risiko for bankkriser, er deres ansøgninger blevet afvist af Federal Reserve. Det betyder, at de ikke lovligt kan operere som banker.",
	"bank_runs_safe_content_3": "Fordi de er blevet blokeret fra at operere, er der ingen banker i dag, der ikke bruger fraktionel reserve.",
	"bank_runs_safe_content_4": "Heldigvis er der en måde at fravælge det fraktionelle reservesystem ved at være din egen bank. Nej, vi taler ikke om at proppe kontanter under madrassen.",
	"bank_runs_safe_content_5": "At spare i kontanter er stadig sårbart over for inflation.",
	"bank_runs_safe_content_6": "Vi taler om Bitcoin: et nyt finansielt system, der lader dig være din egen bank.",
	"bank_runs_protect": "KAN BITCOIN BESKYTTE MIG MOD BANKKRISER?",
	"bank_runs_protect_content_1": "Ja, Bitcoin er et fuldreserve finansielt system.",
	"bank_runs_protect_content_2": "Bankkriser er umulige i Bitcoin, så længe du trækker din Bitcoin ud til din egen wallet. Lad ikke din bitcoin ligge på en børs eller i en wrapper som en Bitcoin-ETF.",
	"bank_runs_protect_content_3": "Tjek vores enkle Bitcoin-wallet-guide for at lære, hvordan du trækker ud til din egen wallet.",
	"bank_runs_protect_content_4": "Med Bitcoin kan du endelig have kontrol over dine penge."
});

// wallets
writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Bitcoin-wallet-guide",
	"wallets_description": "Der findes mange forskellige Bitcoin-wallets, der adskiller sig på vigtige måder. Du kan afgøre, om en wallet passer til dig ved at stille disse simple spørgsmål.",
	"wallets_header": "SÅDAN OPBEVARER DU DIN BITCOIN SIKKERT",
	"wallets_s1_c1": "Bitcoin-wallets er kompatible med hinanden, så du kan sende Bitcoin til enhver uanset hvilken wallet de bruger.",
	"wallets_s1_c2": "Der findes mange forskellige Bitcoin-wallets, der adskiller sig på vigtige måder. Du kan afgøre, om en wallet passer til dig ved at stille disse simple spørgsmål:",
	"wallets_question_1": "ER DET EN SELVOPBEVARENDE WALLET?",
	"wallets_s2_c1": "En af innovationerne ved Bitcoin er muligheden for at opbevare det uden at stole på en forvalter, som en bank.",
	"wallets_s2_c2": "Hvis du holder bitcoin på en børs eller i en ETF, mister du frihedsfordelene ved bitcoin.",
	"wallets_s2_c3": "Selvopbevarende wallets låser op for den fulde kraft af Bitcoin: frihedspenge.",
	"wallets_s2_c4": "Med en selvopbevarende wallet er du den eneste med mulighed for at bruge eller overføre dine penge. Ingen kan stoppe dig fra at sende eller modtage dine penge, når du bruger en selvopbevarende wallet.",
	"wallets_s2_c5": "Selvopbevarende wallets kaldes også ikke-forvarende wallets.",
	"wallets_s3_c1": "Forvarende wallets er wallets, hvor du ikke har kontrol over dine penge.",
	"wallets_s3_c2": "Disse wallets ligner mere banksystemet, hvor du skal stole på en tredjepart for at give dig adgang til dine penge. Hvis din Bitcoin er på en børs, bruger du en forvarende wallet.",
	"wallets_s3_c3": "Hvis du købte en Bitcoin-ETF, bruger du en forvarende wallet, der ikke lader dig trække ud til selvopbevaring.",
	"wallets_s3_c4": "Forvarende wallets kan virke praktiske, men forvalteren har den tekniske mulighed for at stjæle alle brugermidler når som helst.",
	"wallets_s3_c5": "Ikke dine nøgler, ikke dine mønter!",
	"wallets_question_2": "ER DEN VARM ELLER KOLD?",
	"wallets_s4_c1": "Kolde wallets opbevarer nøglerne til din Bitcoin på en måde, der aldrig eksponerer dem for internettet.",
	"wallets_s4_c2": "Dette begrænser betydeligt de angrebsvektorer, en tyv kan bruge for at forsøge at stjæle din Bitcoin, og bruges bedst til store beløb Bitcoin, du ikke behøver at overføre ofte.",
	"wallets_s4_c3": "Du kan tænke på en kold wallet som en langsigtet opsparingskonto, også kendt som kold opbevaring.",
	"wallets_s5_c1": "Varme wallets opbevarer nøglerne til din Bitcoin på en enhed, der er forbundet til internettet, som din telefon.",
	"wallets_s5_c2": "Varme wallets betragtes generelt som sikre, men de kan have flere sikkerhedssårbarheder end kolde wallets.",
	"wallets_s5_c3": "Du kan tænke på en varm wallet på samme måde som en fysisk tegnebog. Du ville ikke opbevare hele din opsparing i tegnebogen, men du ville have lidt brugspenge.",
	"wallets_s5_c4": "Varme wallets gør det meget nemmere at bruge din Bitcoin uden at skulle tage alle opsparinger ud af kold opbevaring.",
	"wallets_question_3": "HVORDAN VIL JEG SIKKERHEDSKOPIERE MIN GENDANNELSESFRASE?",
	"wallets_s6_c1": "Når du opretter din Bitcoin-wallet, vil din enhed generere en gendannelsesfrase. Denne gendannelsesfrase (også kaldet en frøfrase) indeholder 12 eller 24 ord.",
	"wallets_s6_c2": "Hvis du nogensinde mister adgangen til din wallet, eller din enhed holder op med at fungere, kan du indtaste denne gendannelsesfrase i en ny wallet for at gendanne adgangen til din Bitcoin.",
	"wallets_s6_c3": "De fleste wallets inkluderer et ark papir til at skrive gendannelsesfrasen ned, men mange foretrækker at sikkerhedskopiere denne frase på stål i stedet. Dette gør det meget mindre sandsynligt at miste gendannelsesfrasen i tilfælde af en naturkatastrofe som brand eller oversvømmelse.",
	"wallets_s6_c4": "Jameson Lopp har testet 70 stål-sikkerhedskopisæt for at hjælpe dig med at vælge det, der passer til dig.",
	"wallets_s6_c5": "Se Jamesons guide til metal-sikkerhedskopiering af Bitcoin her.",
	"wallets_s6_c6": "Eller fortsæt med at scrolle for at udforske Bitcoin-wallet-muligheder.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN", "wallets_coldcard_mk5": "COLDCARD MK5", "wallets_coldcard_q": "COLDCARD Q", "wallets_blockstream_jade": "BLOCKSTREAM JADE", "wallets_foundation_passport": "FOUNDATION PASSPORT", "wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Leder du efter vores Lightning-wallet-guide?",
	"wallets_starter_wallet": "Fantastisk startwallet", "wallets_mobile_app": "Mobilapp", "wallets_2fa_support": "2FA-understøttelse", "wallets_air_gap_mode": "Air-gap-tilstand", "wallets_air_gap_camera": "Air-gap-tilstand + kamera", "wallets_bitcoin_only": "Kun Bitcoin", "wallets_security_features": "Mange sikkerhedsfunktioner", "wallets_free": "100% gratis",
	"wallets_coldcard_mk5_costs": "Koster $189", "wallets_coldcard_q_costs": "Koster $289", "wallets_blockstream_jade_costs": "Koster $79", "wallets_foundation_passport_costs": "Koster $199", "wallets_seedsigner_costs": "Dele koster $50",
	"wallets_very_affordable": "Meget overkommelig", "wallets_pair_with_phone": "Par med din telefon", "wallets_battery": "Genopladeligt batteri", "wallets_build_your_own": "Byg din egen", "wallets_qwerty_keyboard": "Fuldt QWERTY-tastatur", "wallets_qr_scanner": "QR-kodescanner"
});

// buy
writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Sådan køber du Bitcoin – Trin for trin-guide",
	"buy_header": "SÅDAN KØBER DU BITCOIN",
	"buy_intro_c1": "At købe Bitcoin for første gang kan virke overvældende, men det er faktisk ret simpelt, når du bryder det ned i trin.",
	"buy_intro_c2": "Denne guide vil lede dig gennem processen med at købe Bitcoin sikkert og opbevare det i din egen wallet.",
	"buy_step_1_header": "TRIN 1: VÆLG DIT LAND", "buy_step_1_description": "Forskellige lande har forskellige Bitcoin-købsmuligheder tilgængelige. Vælg dit land for at se de bedste muligheder for dig.",
	"buy_search_countries": "Søg efter dit land",
	"buy_country_united_states": "USA", "buy_country_australia": "Australien", "buy_country_austria": "Østrig", "buy_country_belgium": "Belgien", "buy_country_brazil": "Brasilien", "buy_country_canada": "Canada", "buy_country_france": "Frankrig", "buy_country_germany": "Tyskland", "buy_country_ireland": "Irland", "buy_country_italy": "Italien", "buy_country_netherlands": "Holland", "buy_country_new_zealand": "New Zealand", "buy_country_spain": "Spanien", "buy_country_united_kingdom": "Storbritannien", "buy_country_argentina": "Argentina", "buy_country_chile": "Chile", "buy_country_colombia": "Colombia", "buy_country_costa_rica": "Costa Rica", "buy_country_czech_republic": "Tjekkiet", "buy_country_denmark": "Danmark", "buy_country_el_salvador": "El Salvador", "buy_country_estonia": "Estland", "buy_country_finland": "Finland", "buy_country_greece": "Grækenland", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hongkong", "buy_country_hungary": "Ungarn", "buy_country_iceland": "Island", "buy_country_india": "Indien", "buy_country_israel": "Israel", "buy_country_japan": "Japan", "buy_country_latvia": "Letland", "buy_country_lithuania": "Litauen", "buy_country_luxembourg": "Luxembourg", "buy_country_malta": "Malta", "buy_country_mexico": "Mexico", "buy_country_norway": "Norge", "buy_country_panama": "Panama", "buy_country_poland": "Polen", "buy_country_portugal": "Portugal", "buy_country_romania": "Rumænien", "buy_country_singapore": "Singapore", "buy_country_slovakia": "Slovakiet", "buy_country_slovenia": "Slovenien", "buy_country_south_africa": "Sydafrika", "buy_country_south_korea": "Sydkorea", "buy_country_sweden": "Sverige", "buy_country_switzerland": "Schweiz", "buy_country_thailand": "Thailand", "buy_country_turkey": "Tyrkiet", "buy_country_ukraine": "Ukraine", "buy_country_uruguay": "Uruguay",
	"buy_step_2_header": "TRIN 2: VÆLG BETALINGSMETODE", "buy_step_2_description": "Der er to hovedmåder at købe Bitcoin på: med bankoverførsel eller med kontanter. Hver har forskellige fordele.",
	"buy_method_bank_transfer": "BANKOVERFØRSEL", "buy_method_bank_fast": "Hurtigt og nemt", "buy_method_bank_less_private": "Mindre privat", "buy_method_bank_description": "Bankoverførsler er den mest almindelige måde at købe Bitcoin på. De er hurtige, praktiske og har normalt lavere gebyrer.", "buy_method_choose_bank": "Vælg bankoverførsel",
	"buy_method_cash": "KONTANTER", "buy_method_cash_private": "Mere privat", "buy_method_cash_limited": "Begrænsede muligheder", "buy_method_cash_description": "Kontantkøb giver mere privatliv, men har færre muligheder og kan kræve at møde nogen personligt eller bruge en Bitcoin-hæveautomat.", "buy_method_choose_cash": "Vælg kontanter",
	"buy_step_3_header": "TRIN 3: KØBSMULIGHEDER", "buy_step_3_description": "Her er de bedste Bitcoin-købsmuligheder for dit land og din betalingsmetode:",
	"buy_platform_recommended": "ANBEFALET",
	"buy_platform_strike_description": "Strike er den hurtigste og nemmeste måde at købe Bitcoin med lave gebyrer og øjeblikkelig Lightning Network-understøttelse.",
	"buy_platform_swan_description": "Swan Bitcoin specialiserer sig i kun-Bitcoin-tjenester med dollar-cost averaging og uddannelsesressourcer.",
	"buy_platform_river_description": "River tilbyder Bitcoin-køb, -mining og forvaringstjenester med fokus på uddannelse og sikkerhed.",
	"buy_platform_coinsquare_description": "Coinsquare er en canadisk Bitcoin-børs med stærk reguleringsoverholdelse og kundesupport.",
	"buy_platform_kraken_description": "Kraken er en etableret Bitcoin-børs med avancerede handelsfunktioner og stærk sikkerhed.",
	"buy_platform_atm_description": "Bitcoin-hæveautomater lader dig købe Bitcoin med kontanter øjeblikkeligt. Find en nær dig med Coin ATM Radar.",
	"buy_platform_bisq_description": "Bisq er en decentraliseret peer-to-peer-børs, der muliggør privat Bitcoin-handel uden KYC.",
	"buy_platform_feature_instant": "Øjeblikkelige køb", "buy_platform_feature_low_fees": "Lave gebyrer", "buy_platform_feature_lightning": "Lightning Network", "buy_platform_feature_dca": "Dollar-cost averaging", "buy_platform_feature_education": "Uddannelsesressourcer", "buy_platform_feature_withdrawal": "Nem hævning", "buy_platform_feature_mining": "Bitcoin-mining", "buy_platform_feature_custody": "Forvaringstjenester", "buy_platform_feature_canadian": "Canadisk fokus", "buy_platform_feature_regulated": "Reguleret børs", "buy_platform_feature_support": "Kundesupport", "buy_platform_feature_established": "Etableret platform", "buy_platform_feature_security": "Stærk sikkerhed", "buy_platform_feature_advanced": "Avancerede funktioner", "buy_platform_feature_cash": "Kontantkøb", "buy_platform_feature_anonymous": "Mere anonymt", "buy_platform_feature_p2p": "Peer-to-peer", "buy_platform_feature_private": "Privat handel", "buy_platform_feature_decentralized": "Decentraliseret",
	"buy_platform_relai_description": "Relai er en schweizisk kun-Bitcoin-app med selvopbevarende wallet, auto-invester-funktioner og lave gebyrer for europæiske brugere.",
	"buy_platform_feature_bitcoin_only": "Kun Bitcoin", "buy_platform_feature_self_custody": "Selvopbevarende wallet", "buy_platform_feature_auto_invest": "Automatiske investeringsplaner", "buy_platform_feature_european": "Europæisk fokus",
	"buy_step_4_header": "TRIN 4: OPBEVAR DIN BITCOIN SIKKERT",
	"buy_step_4_c1": "Efter at have købt Bitcoin er det vigtigste trin at flytte det til din egen wallet, hvor du kontrollerer de private nøgler.",
	"buy_step_4_c2": "At lade Bitcoin ligge på en børs er risikabelt, fordi du faktisk ikke ejer Bitcoin – det gør børsen.",
	"buy_step_4_c3": "Når du kontrollerer dine egne private nøgler, har du ægte ejerskab af din Bitcoin, og ingen kan tage det fra dig.",
	"buy_step_4_c4": "Lær hvordan du vælger den rigtige Bitcoin-wallet til dine behov:",
	"buy_cta_wallets": "Se vores Bitcoin-wallet-guide"
});

// lightning
writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Bitcoin Lightning-wallet-guide",
	"lightning_description": "Lightning-wallets gør det muligt at sende Bitcoin hurtigt og billigt, mens du opretholder din personlige suverænitet.",
	"lightning_header": "LIGHTNING-WALLET-GUIDE",
	"lightning_s1_c1": "Lightning gør det muligt at sende Bitcoin-betalinger hurtigt og billigt.",
	"lightning_s1_c2": "Det er vigtigt at vide, at brug af Lightning indebærer kompromiser. Til gengæld for hurtigere, billigere Bitcoin-betalinger ofrer du ofte noget sikkerhed.",
	"lightning_s1_c3": "Generelt bør Lightning kun bruges med små beløb bitcoin. Du bør kun opbevare store beløb bitcoin i en hardware-wallet.",
	"lightning_s1_c4": "Tjek vores hardware-wallet-guide for mere information.",
	"lightning_s1_c5": "Ikke alle Lightning-wallets er ens. Du kan afgøre, hvilken wallet der har den rette balance af kompromiser for dig ved at stille ét simpelt spørgsmål:",
	"lightning_question_1": "HVILKEN KOMPROMISBALANCE ER RIGTIG FOR MIG?",
	"lightning_s2_c1": "En af innovationerne ved Bitcoin er muligheden for at opbevare det uden at stole på en forvalter, som en bank. Selvopbevarende wallets låser op for den fulde kraft af Bitcoin.",
	"lightning_s2_c2": "Med en selvopbevarende wallet er du den eneste med mulighed for at bruge eller overføre dine penge. Ingen kan stoppe dig, censurere dig eller stjæle fra dig, når du bruger en selvopbevarende wallet. Disse kaldes også ikke-forvarende wallets.",
	"lightning_s2_c3": "Den mest suveræne måde at bruge Lightning på er ved at køre din egen node.",
	"lightning_s2_c4": "Denne guide fokuserer på simple Lightning-wallets, der ikke kræver din egen node.",
	"lightning_s2_c5": "Det er vigtigt at vide, at selv ved brug af en ikke-forvarende Lightning-wallet stoler du stadig på wallet-skaberen om ikke at sende en ondsindet appopdatering og stjæle midlerne.",
	"lightning_s3_c1": "Forvarende wallets er wallets, hvor du ikke har kontrol over dine penge.",
	"lightning_s3_c2": "Disse wallets ligner mere banksystemet, hvor du skal stole på en tredjepart for at give dig adgang til dine penge. Hvis din Bitcoin er på en børs, bruger du en forvarende wallet.",
	"lightning_s3_c3": "Forvarende wallets kan virke praktiske, men forvalteren har den tekniske mulighed for at stjæle alle brugermidler når som helst.",
	"lightning_s3_c4": "Nogle foretrækker forvarende Lightning-wallets til små beløb bitcoin på grund af brugervenligheden. Bare husk: ikke dine nøgler, ikke dine mønter!",
	"lightning_question_2": "VÆLG DIN WALLET",
	"lightning_s4_c1": "Med alt dette i tankerne kan du nu vælge den lightning-wallet, der har den rette kompromisbalance for dig.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Mange funktioner", "lightning_mobile_app": "Mobilapp", "lightning_free": "100% gratis", "lightning_merchants": "Fantastisk til forhandlere", "lightning_starter": "Fantastisk startwallet", "lightning_browser": "Browserbaseret", "lightning_custodial": "Helt forvarende wallet",
	"lightning_cta_hardware": "Leder du efter vores Bitcoin hardware-wallet-guide?"
});

// stickers
writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Gratis Bitcoin-klistermærker fra bitcoin.rocks",
	"stickers_description": "Sæt et bitcoin-klistermærke op offentligt for at orange-pille dem omkring dig.",
	"stickers_header": "GRATIS BITCOIN-KLISTERMÆRKER",
	"stickers_choose_header": "VÆLG DIN KLISTERMÆRKEPAKKE",
	"stickers_choose_c1": "Vores mission er at hjælpe dig med at orange-pille flere mennesker ved at sætte Bitcoin-klistermærker op offentligt. Alle vores klistermærker har QR-koder, der linker til uddannelsessider om",
	"stickers_choose_c2": "Bitcoin", "stickers_choose_c3": "inflation", "stickers_choose_c4": "Vælg din klistermærkepakke nedenfor",
	"stickers_text_pack": "TEKSTPAKKEN", "stickers_signs_pack": "SKILTEPAKKEN",
	"stickers_instructions_1": "Indtast din postadresse, så sender vi dig en gratis Bitcoin-klistermærkepakke med posten! Dine klistermærker sendes i en almindelig hvid kuvert.",
	"stickers_instructions_2": "Adressedata slettes efter afsendelse af dine gratis klistermærker.",
	"stickers_share_header": "DEL DINE KLISTERMÆRKESTEDER",
	"stickers_share_c1": "Del dine klistermærkesteder med os på Nostr og se, hvor andre placerer deres klistermærker.",
	"stickers_btn_share_on_nostr": "DEL PÅ NOSTR", "stickers_btn_what_is_nostr": "HVAD ER NOSTR?",
	"stickers_flyers_link_before": "Mens du er i gang, print og hæng dine egne ", "stickers_flyers_link_text": "Bitcoin-flyers", "stickers_flyers_link_after": " op for at orange-pille endnu flere mennesker.",
	"stickers_country_global_print": "Globalt — Print mine egne klistermærker", "stickers_country_global_order": "Globalt — Bestil i stor mængde",
	"placeholder_name_optional": "Navn (valgfrit)", "placeholder_address_line_1": "Adresselinje 1", "placeholder_address_line_2": "Adresselinje 2 (valgfrit)", "placeholder_city": "By", "placeholder_state": "Stat", "placeholder_province": "Provins", "placeholder_zip_code": "Postnummer", "placeholder_postal_code": "Postnummer", "placeholder_language": "Sprog", "placeholder_which_stickers": "Hvilke klistermærker?", "placeholder_email_optional": "Indtast din e-mailadresse for at blive underrettet (valgfrit)"
});

// postcards
writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Gratis Bitcoin-postkort fra bitcoin.rocks",
	"postcards_description": "Få en gratis Bitcoin-postkortpakke og del Bitcoin med nogen, du kender.",
	"postcards_header": "POSTKORTPROGRAMMET ER AFSLUTTET",
	"postcards_program_closed_message": "Vores gratis Bitcoin-postkortprogram er afsluttet. Tak til alle, der deltog i at sprede Bitcoin-uddannelse gennem posten!",
	"postcards_sticker_alternative_header": "FÅ GRATIS BITCOIN-KLISTERMÆRKER I STEDET",
	"postcards_sticker_alternative_message": "Fortsæt med at sprede Bitcoin-bevidsthed med vores gratis klistermærkeprogram! Vores Bitcoin-klistermærker er perfekte til deling på offentlige steder og kommer med QR-koder, der linker til uddannelsesindhold.",
	"postcards_sticker_cta": "FÅ GRATIS KLISTERMÆRKER",
	"postcards_step_2": "SÅDAN SÅ POSTKORTENE UD",
	"postcards_instructions_4": "Vi lavede disse postkort for at gøre det nemmere for dig at introducere nogen, du kender, til Bitcoin! Tilføj blot en adresse og et frimærke og slip postkortet i postkassen.",
	"postcards_instructions_5": "Vores mission er at accelerere Bitcoin-adoption. Du kan hjælpe ved at få gratis klistermærker og placere dem på offentlige steder!",
	"postcards_instructions_6": "Vi kender alle nogen, der kunne have gavn af at lære mere om Bitcoin. Del Bitcoin-klistermærker med dem i dag!"
});

// signs
writeFile(`signs_${lang}.json`, {
	"signs_description": "Hjælp os med at sætte disse Bitcoin-skilte op over hele Amerika!",
	"signs_title": "Gratis Bitcoin-skilte fra bitcoin.rocks",
	"signs_choose_header": "TAK FORDI DU HJÆLPER OS MED AT SÆTTE DISSE BITCOIN-SKILTE OP OVER HELE AMERIKA!",
	"signs_choose_c1": "Vi er nu helt løbet tør for skilte! Vores mission er at accelerere Bitcoin-adoption gennem uddannelse.",
	"signs_choose_c2": "Mange af jer hjalp ved at sætte disse gratis Bitcoin-skilte op offentligt. Alle vores skilte har QR-koder, der linker til en uddannelsesside om",
	"signs_choose_c3": "inflation",
	"signs_choose_c4": "Takket være vores fantastiske fællesskab nåede vi tusindvis af mennesker og hjalp dem med at tage deres første skridt ned i Bitcoin-kaninhullet.",
	"signs_share_header": "DEL DINE SKILTE-STEDER",
	"signs_share_c1": "Del et billede af dit skilte-sted med os på Nostr og se, hvor andre sætter deres skilte op.",
	"signs_btn_share_on_nostr": "DEL PÅ NOSTR", "signs_btn_what_is_nostr": "HVAD ER NOSTR?",
	"signs_instructions_1": "Indtast din postadresse, så sender vi dig en kasse med 10 Bitcoin-skilte med posten!",
	"signs_instructions_2": "Adressedata slettes efter afsendelse af dine gratis skilte."
});

// flyers
writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Gratis Bitcoin-flyers fra bitcoin.rocks",
	"flyers_description": "Print en Bitcoin-flyer derhjemme og hæng den op offentligt for at orange-pille dem omkring dig.",
	"flyers_header_1": "PRINT OG HÆNG", "flyers_header_2": "BITCOIN-FLYERS OP",
	"flyers_intro_header": "SÅDAN PRINTER OG HÆNGER DU DISSE BITCOIN-FLYERS OP",
	"flyers_intro_c1": "Vores mission er at hjælpe dig med at orange-pille flere mennesker ved at hænge Bitcoin-flyers op offentligt. Denne flyer har en QR-kode, der linker til vores",
	"flyers_intro_c2": "pædagogiske Bitcoin-hjemmeside.", "flyers_intro_c3": "inflation",
	"flyers_intro_c4": "Print denne flyer derhjemme eller på et trykkeri. Hæng den derefter op på opslagstavler, telefonpæle rundt i byen og andre offentlige steder, hvor folk kan se den og lære om Bitcoin.",
	"flyers_intro_c5": "Mens du er i gang, bestil en pakke med vores", "flyers_intro_c6": "gratis Bitcoin-klistermærker", "flyers_intro_c7": "for at orange-pille endnu flere mennesker.",
	"flyers_btn_download": "DOWNLOAD FLYER", "flyers_btn_print": "PRINT FLYER",
	"flyers_share_header": "DEL DINE FLYERSTEDER",
	"flyers_share_c1": "Del dine flyersteder med os på Nostr og se, hvor andre hænger deres flyers op.",
	"flyers_btn_share_on_nostr": "DEL PÅ NOSTR", "flyers_btn_what_is_nostr": "HVAD ER NOSTR?"
});

// get-involved
writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Bliv involveret og hjælp med at sprede Bitcoin",
	"get_involved_description": "Vores gratis ressourcer gør det nemmere at sprede Bitcoin-adoption.",
	"get_involved_header": "BLIV INVOLVERET", "get_involved_header_2": "SPRED BITCOIN",
	"get_involved_intro_1": "Det kan være deprimerende at leve i den nuværende tilstand i vores verden.",
	"get_involved_intro_2": "Vores penge er ødelagte. Som resultat er grundlæggende dele af samfundet også ødelagte.",
	"get_involved_intro_3": "Hvis du allerede er interesseret i Bitcoin, kender du følelsen af håb, som Bitcoin kan give. Håb for en lysere fremtid gjort mulig af bedre penge.",
	"get_involved_intro_4": "Men så mange mennesker omkring dig ved ikke om Bitcoin. De lever i den samme ødelagte verden som dig, men uden et fyrtårn af håb til at hjælpe dem gennem mørket.",
	"get_involved_intro_5": "Men du kan hjælpe med at ændre det. Vi har lavet flere gratis ressourcer for at gøre det nemmere at sprede håbet, som Bitcoin bringer til dem omkring dig.",
	"get_involved_sticker_header": "Sæt et klistermærke op offentligt",
	"get_involved_sticker_content_1": "Du kan hjælpe med at uddanne dem omkring dig om Bitcoin uden at skulle interagere med nogen. Sæt bare et af vores gratis Bitcoin-klistermærker op offentligt.",
	"get_involved_sticker_content_2": "Hundredvis af mennesker scanner QR-koderne på disse klistermærker hver måned. Inflationsklistermærkerne linker til en side om",
	"get_involved_sticker_content_3": "Bitcoin som en løsning på inflation.",
	"get_involved_sticker_content_4": "De andre klistermærker linker til vores pædagogiske hjemmeside, der viser folk, hvordan",
	"get_involved_sticker_content_5": "Bitcoin bygger en bedre verden.",
	"get_involved_sticker_content_6": "Ved at sætte disse klistermærker op i dit lokalsamfund på steder, folk vil se dem, kan du hjælpe dem omkring dig med at tage deres første skridt ned i Bitcoin-kaninhullet.",
	"get_involved_request_a": "BESTIL EN", "get_involved_sticker_pack": "KLISTERMÆRKEPAKKE",
	"get_involved_postcard_header": "Send et postkort",
	"get_involved_postcard_content_1": "Du kan hjælpe med at sprede håbet om Bitcoin til nogen, du kender, ved at sende dem et af vores gratis postkort.",
	"get_involved_postcard_content_2": "Bagsiden af hvert postkort indeholder en overbevisende tekst om Bitcoin sammen med en QR-kode for at lære mere.",
	"get_involved_postcard_content_3": "Ved at sende nogen et Bitcoin-postkort kan du hjælpe dem med at se Bitcoin i et nyt lys.",
	"get_involved_postcard_pack": "POSTKORTPAKKE",
	"get_involved_business_header": "Tilmeld en virksomhed",
	"get_involved_business_content_1": "Vil du hjælpe med at bygge den cirkulære Bitcoin-økonomi? Vores Bitcoin-virksomhedspakke gør det nemt at nærme sig en virksomhed om at acceptere Bitcoin-betalinger.",
	"get_involved_business_content_2": "Hver virksomhedspakke inkluderer flyers, der fremhæver fordelene ved at acceptere Bitcoin-betalinger. Hver flyer linker til en række",
	"get_involved_business_content_3": "gratis Bitcoin-virksomhedsressourcer.",
	"get_involved_business_kit": "VIRKSOMHEDSPAKKE"
});

console.log(`\nDone! Created 9 content files.`);
