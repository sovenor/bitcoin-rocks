/**
 * Creates Swedish (sv) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sv';
const today = '2026-04-02';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin har inga bankrusningar",
	"bank_runs_header": "BITCOIN HAR INGA BANKRUSNINGAR",
	"bank_runs_header_2": "MEN DIN BANK HAR DET",
	"bank_runs_what": "VAD ÄR EN BANKRUSNING?",
	"bank_runs_what_content_1": "En bankrusning inträffar när för många människor försöker ta ut sina pengar från en bank samtidigt.",
	"bank_runs_what_content_2": "Om bankerna inte har tillräckligt med pengar för att täcka uttagen kan de kollapsa helt under en bankrusning.",
	"bank_runs_how": "HUR UPPSTÅR BANKRUSNINGAR?",
	"bank_runs_how_content_1": "Vårt banksystem är 'fraktionellt reservbaserat', vilket innebär att bankerna inte bara förvarar dina pengar i ett valv och väntar på att du ska spendera eller ta ut dem.",
	"bank_runs_how_content_2": "Istället tar banken dina pengar och lånar ut eller investerar dem. Det kan låsa dina pengar under lång tid, även om banken lovar dig att du kan ta ut dem när som helst.",
	"bank_runs_how_content_3": "Vad händer när du försöker ta ut pengar efter att banken redan har lånat ut eller investerat dem?",
	"bank_runs_how_content_4": "Om du är den enda som tar ut pengar är det inga problem. Banken tar helt enkelt någon annans pengar och ger dem till dig. Men vad händer om för många vill ta ut pengar samtidigt?",
	"bank_runs_how_content_5": "Många i USA fick reda på det när Silicon Valley Bank drabbades av en bankrusning i mars 2023.",
	"bank_runs_how_content_6": "Banken hade investerat sina kunders pengar i statsobligationer som var bundna i upp till 30 år. Ännu värre hade värdet på dessa obligationer nyligen sjunkit dramatiskt, så Silicon Valley Bank kunde inte helt enkelt sälja obligationerna för att få tillbaka insättarnas pengar. Den var insolvent. Den hade inte tillräckligt med pengar för att täcka insättarnas uttag.",
	"bank_runs_how_content_7": "Allt eftersom fler fick reda på det blev problemet bara värre. Fler uttagsbegäranden kom in, men många av dem behandlades inte. Tusentals företag insåg att de inte skulle kunna betala sina anställda på grund av bankens kollaps.",
	"bank_runs_how_content_8": "FDIC ingrep och gick med på att ersätta insättarna. Problem löst? Inte riktigt...",
	"bank_runs_fdic": "SKYDDAR FDIC-FÖRSÄKRINGEN MINA PENGAR?",
	"bank_runs_fdic_content_1": "FDIC-försäkring är utformad för att skydda bankinsättare vid bankkollapser. Insättningar är försäkrade upp till 250 000 $ per insättare. Låter bra, eller hur?",
	"bank_runs_fdic_content_2": "Inte riktigt. Om en bank kollapsar, var får FDIC pengarna ifrån? Den har en försäkringsfond på 125 miljarder dollar.",
	"bank_runs_fdic_content_3": "Det låter som mycket pengar tills du jämför det med volymen insättningar de försäkrar: nästan 10 biljoner eller 10 000 miljarder dollar.",
	"bank_runs_fdic_content_4": "FDIC visar till och med på sin webbplats att de har tillräckligt med pengar i sin försäkringsfond för att täcka drygt 1% av insättningarna.",
	"bank_runs_fdic_content_5": "Vid en bankkollaps som skulle överstiga FDIC:s försäkringsfond är det troligt (men inte garanterat) att den amerikanska regeringen skulle trycka pengar för att ersätta insättarna.",
	"bank_runs_fdic_content_6": "Men att trycka pengar orsakar inflation, så det är ingen bra lösning.",
	"bank_runs_safe": "FINNS DET BANKER SOM INTE ANVÄNDER FRAKTIONELL RESERV?",
	"bank_runs_safe_content_1": "Vissa banker har försökt vara 'säkra banker' som inte lånar ut eller investerar insättares medel.",
	"bank_runs_safe_content_2": "Även om dessa säkra banker skulle ha noll risk för bankrusningar har deras ansökningar avslagits av Federal Reserve. Det innebär att de inte kan verka lagligt som banker.",
	"bank_runs_safe_content_3": "Eftersom de hindrats från att verka finns det idag inga banker som inte använder fraktionell reserv.",
	"bank_runs_safe_content_4": "Lyckligtvis finns det ett sätt att lämna det fraktionella reservsystemet genom att vara din egen bank. Nej, vi pratar inte om att gömma kontanter under madrassen.",
	"bank_runs_safe_content_5": "Att spara i kontanter är fortfarande sårbart för inflation.",
	"bank_runs_safe_content_6": "Vi pratar om Bitcoin: ett nytt finansiellt system som låter dig vara din egen bank.",
	"bank_runs_protect": "KAN BITCOIN SKYDDA MIG FRÅN BANKRUSNINGAR?",
	"bank_runs_protect_content_1": "Ja, Bitcoin är ett fullreservfinansiellt system.",
	"bank_runs_protect_content_2": "Bankrusningar är omöjliga med Bitcoin om du tar ut din Bitcoin till din egen plånbok. Lämna inte din bitcoin på en börs eller i ett omslag som en Bitcoin-ETF.",
	"bank_runs_protect_content_3": "Kolla in vår enkla guide till Bitcoin-plånböcker och lär dig hur du tar ut till din egen plånbok.",
	"bank_runs_protect_content_4": "Med Bitcoin kan du äntligen ha kontroll över dina pengar."
});

writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Guide till Bitcoin-plånböcker",
	"wallets_description": "Det finns många olika Bitcoin-plånböcker som skiljer sig på viktiga sätt. Du kan ta reda på om en plånbok är rätt för dig genom att ställa dessa enkla frågor.",
	"wallets_header": "HUR DU SÄKERT FÖRVARAR DIN BITCOIN",
	"wallets_s1_c1": "Bitcoin-plånböcker är kompatibla med varandra, så du kan skicka Bitcoin till vem som helst oavsett vilken plånbok de använder.",
	"wallets_s1_c2": "Det finns många olika Bitcoin-plånböcker som skiljer sig på viktiga sätt. Du kan ta reda på om en plånbok är rätt för dig genom att ställa dessa enkla frågor:",
	"wallets_question_1": "ÄR DET EN PLÅNBOK MED EGET FÖRVAR?",
	"wallets_s2_c1": "En av Bitcoins innovationer är möjligheten att förvara det utan att vara beroende av ett förvaringsinstitut som en bank.",
	"wallets_s2_c2": "Om du har bitcoin på en börs eller i en ETF förlorar du fördelarna med Bitcoins frihet.",
	"wallets_s2_c3": "Plånböcker med eget förvar låser upp Bitcoins fulla kraft: fria pengar.",
	"wallets_s2_c4": "Med en plånbok med eget förvar är du den enda som kan spendera eller överföra dina pengar. Ingen kan hindra dig från att skicka eller ta emot pengar när du använder en plånbok med eget förvar.",
	"wallets_s2_c5": "Plånböcker med eget förvar kallas även icke-förvarande plånböcker.",
	"wallets_s3_c1": "Förvarande plånböcker är plånböcker där du inte har kontroll över dina pengar.",
	"wallets_s3_c2": "Dessa plånböcker liknar mer banksystemet, där du måste lita på en tredje part att ge dig tillgång till dina pengar. Om din Bitcoin finns på en börs använder du en förvarande plånbok.",
	"wallets_s3_c3": "Om du har köpt en Bitcoin-ETF använder du en förvarande plånbok som inte låter dig ta ut till eget förvar.",
	"wallets_s3_c4": "Förvarande plånböcker kan verka bekväma, men förvaringsinstitutet har den tekniska möjligheten att när som helst stjäla alla användarmedel.",
	"wallets_s3_c5": "Inte dina nycklar, inte dina mynt!",
	"wallets_question_2": "ÄR DEN VARM ELLER KALL?",
	"wallets_s4_c1": "Kalla plånböcker förvarar nycklarna till din Bitcoin på ett sätt som aldrig exponerar dem för internet.",
	"wallets_s4_c2": "Det begränsar kraftigt de attackvektorer som en tjuv skulle kunna använda för att försöka stjäla din Bitcoin, och är bäst för stora mängder Bitcoin som du inte behöver överföra ofta.",
	"wallets_s4_c3": "Du kan tänka på en kall plånbok som ett långsiktigt sparkonto, även känt som kall förvaring.",
	"wallets_s5_c1": "Varma plånböcker förvarar nycklarna till din Bitcoin på en enhet ansluten till internet, som din telefon.",
	"wallets_s5_c2": "Varma plånböcker anses generellt vara säkra, men kan ha fler säkerhetssårbarheter än kalla plånböcker.",
	"wallets_s5_c3": "Du kan tänka på en varm plånbok som en fysisk plånbok. Du skulle inte lägga alla dina besparingar i en plånbok, men du skulle ha lite pengar i den för utgifter.",
	"wallets_s5_c4": "Varma plånböcker gör det enkelt att spendera Bitcoin utan att behöva ta fram alla dina besparingar från kall förvaring.",
	"wallets_question_3": "HUR SÄKERHETSKOPIERAR JAG MIN ÅTERSTÄLLNINGSFRAS?",
	"wallets_s6_c1": "När du sätter upp en Bitcoin-plånbok genererar din enhet en återställningsfras. Denna återställningsfras (även kallad seed-fras) innehåller 12 eller 24 ord.",
	"wallets_s6_c2": "Om du förlorar åtkomsten till din plånbok eller din enhet slutar fungera kan du ange denna återställningsfras i en ny plånbok och återfå åtkomst till din Bitcoin.",
	"wallets_s6_c3": "De flesta plånböcker inkluderar ett papper för att skriva ner återställningsfrasen, men många föredrar att säkerhetskopiera denna fras på stål. Det minskar avsevärt risken att förlora återställningsfrasen vid en naturkatastrof som brand eller översvämning.",
	"wallets_s6_c4": "Jameson Lopp har testat 70 säkerhetskopieringsset i stål för att hjälpa dig välja rätt.",
	"wallets_s6_c5": "Se Jamesons guide till Bitcoin-säkerhetskopior i metall här.",
	"wallets_s6_c6": "Eller fortsätt scrolla för att utforska alternativ för Bitcoin-plånböcker.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN",
	"wallets_coldcard_mk5": "COLDCARD MK5",
	"wallets_coldcard_q": "COLDCARD Q",
	"wallets_blockstream_jade": "BLOCKSTREAM JADE",
	"wallets_foundation_passport": "FOUNDATION PASSPORT",
	"wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Letar du efter vår guide till Lightning-plånböcker?",
	"wallets_starter_wallet": "Utmärkt startplånbok",
	"wallets_mobile_app": "Mobilapp",
	"wallets_2fa_support": "2FA-stöd",
	"wallets_air_gap_mode": "Air-gap-läge",
	"wallets_air_gap_camera": "Air-gap-läge + kamera",
	"wallets_bitcoin_only": "Bara Bitcoin",
	"wallets_security_features": "Många säkerhetsfunktioner",
	"wallets_free": "100% gratis",
	"wallets_coldcard_mk5_costs": "Kostar $189",
	"wallets_coldcard_q_costs": "Kostar $289",
	"wallets_blockstream_jade_costs": "Kostar $79",
	"wallets_foundation_passport_costs": "Kostar $199",
	"wallets_seedsigner_costs": "Delar kostar $50",
	"wallets_very_affordable": "Mycket prisvärd",
	"wallets_pair_with_phone": "Koppla ihop med telefon",
	"wallets_battery": "Uppladdningsbart batteri",
	"wallets_build_your_own": "Bygg din egen",
	"wallets_qwerty_keyboard": "Fullständigt QWERTY-tangentbord",
	"wallets_qr_scanner": "QR-kodsläsare"
});

writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Hur man köper Bitcoin – Steg-för-steg-guide",
	"buy_header": "HUR MAN KÖPER BITCOIN",
	"buy_intro_c1": "Att köpa Bitcoin för första gången kan kännas överväldigande, men det är faktiskt ganska enkelt när du bryter ner det i steg.",
	"buy_intro_c2": "Denna guide tar dig genom processen att säkert köpa Bitcoin och förvara det i din egen plånbok.",
	"buy_step_1_header": "STEG 1: VÄLJ DITT LAND",
	"buy_step_1_description": "Olika länder har olika alternativ för att köpa Bitcoin. Välj ditt land för att se de bästa alternativen.",
	"buy_search_countries": "Sök efter ditt land",
	"buy_country_united_states": "USA", "buy_country_australia": "Australien", "buy_country_austria": "Österrike", "buy_country_belgium": "Belgien", "buy_country_brazil": "Brasilien", "buy_country_canada": "Kanada", "buy_country_france": "Frankrike", "buy_country_germany": "Tyskland", "buy_country_ireland": "Irland", "buy_country_italy": "Italien", "buy_country_netherlands": "Nederländerna", "buy_country_new_zealand": "Nya Zeeland", "buy_country_spain": "Spanien", "buy_country_united_kingdom": "Storbritannien", "buy_country_argentina": "Argentina", "buy_country_chile": "Chile", "buy_country_colombia": "Colombia", "buy_country_costa_rica": "Costa Rica", "buy_country_czech_republic": "Tjeckien", "buy_country_denmark": "Danmark", "buy_country_el_salvador": "El Salvador", "buy_country_estonia": "Estland", "buy_country_finland": "Finland", "buy_country_greece": "Grekland", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hongkong", "buy_country_hungary": "Ungern", "buy_country_iceland": "Island", "buy_country_india": "Indien", "buy_country_israel": "Israel", "buy_country_japan": "Japan", "buy_country_latvia": "Lettland", "buy_country_lithuania": "Litauen", "buy_country_luxembourg": "Luxemburg", "buy_country_malta": "Malta", "buy_country_mexico": "Mexiko", "buy_country_norway": "Norge", "buy_country_panama": "Panama", "buy_country_poland": "Polen", "buy_country_portugal": "Portugal", "buy_country_romania": "Rumänien", "buy_country_singapore": "Singapore", "buy_country_slovakia": "Slovakien", "buy_country_slovenia": "Slovenien", "buy_country_south_africa": "Sydafrika", "buy_country_south_korea": "Sydkorea", "buy_country_sweden": "Sverige", "buy_country_switzerland": "Schweiz", "buy_country_thailand": "Thailand", "buy_country_turkey": "Turkiet", "buy_country_ukraine": "Ukraina", "buy_country_uruguay": "Uruguay",
	"buy_step_2_header": "STEG 2: VÄLJ BETALNINGSMETOD",
	"buy_step_2_description": "Det finns två huvudsakliga sätt att köpa Bitcoin: banköverföring eller kontanter. Var och en har sina fördelar.",
	"buy_method_bank_transfer": "BANKÖVERFÖRING", "buy_method_bank_fast": "Snabb och enkel", "buy_method_bank_less_private": "Mindre privat",
	"buy_method_bank_description": "Banköverföringar är det vanligaste sättet att köpa Bitcoin. De är snabba, bekväma och har vanligtvis lägre avgifter.",
	"buy_method_choose_bank": "Välj banköverföring", "buy_method_cash": "KONTANTER", "buy_method_cash_private": "Mer privat", "buy_method_cash_limited": "Begränsade alternativ",
	"buy_method_cash_description": "Kontantköp erbjuder mer integritet men har färre alternativ och kan kräva personliga möten eller användning av Bitcoin-automater.",
	"buy_method_choose_cash": "Välj kontanter",
	"buy_step_3_header": "STEG 3: KÖPALTERNATIV",
	"buy_step_3_description": "Här är de bästa alternativen för att köpa Bitcoin för ditt land och din betalningsmetod:",
	"buy_platform_recommended": "REKOMMENDERAD",
	"buy_platform_strike_description": "Strike är det snabbaste och enklaste sättet att köpa Bitcoin med låga avgifter och omedelbart Lightning Network-stöd.",
	"buy_platform_swan_description": "Swan Bitcoin specialiserar sig på rena Bitcoin-tjänster med regelbundet sparande och utbildningsresurser.",
	"buy_platform_river_description": "River erbjuder köp av Bitcoin, mining och förvaringstjänster med fokus på utbildning och säkerhet.",
	"buy_platform_coinsquare_description": "Coinsquare är en kanadensisk Bitcoin-börs med stark regelefterlevnad och kundsupport.",
	"buy_platform_kraken_description": "Kraken är en etablerad Bitcoin-börs med avancerade handelsfunktioner och stark säkerhet.",
	"buy_platform_atm_description": "Bitcoin-automater låter dig omedelbart köpa Bitcoin med kontanter. Hitta närmaste med Coin ATM Radar.",
	"buy_platform_bisq_description": "Bisq är en decentraliserad peer-to-peer-börs som möjliggör privat Bitcoin-handel utan KYC.",
	"buy_platform_feature_instant": "Omedelbara köp", "buy_platform_feature_low_fees": "Låga avgifter", "buy_platform_feature_lightning": "Lightning Network", "buy_platform_feature_dca": "Regelbundet sparande", "buy_platform_feature_education": "Utbildningsresurser", "buy_platform_feature_withdrawal": "Enkelt uttag", "buy_platform_feature_mining": "Bitcoin-mining", "buy_platform_feature_custody": "Förvaringstjänster", "buy_platform_feature_canadian": "Fokuserat på Kanada", "buy_platform_feature_regulated": "Reglerad börs", "buy_platform_feature_support": "Kundsupport", "buy_platform_feature_established": "Etablerad plattform", "buy_platform_feature_security": "Stark säkerhet", "buy_platform_feature_advanced": "Avancerade funktioner", "buy_platform_feature_cash": "Kontantköp", "buy_platform_feature_anonymous": "Mer anonymt", "buy_platform_feature_p2p": "Peer-to-peer", "buy_platform_feature_private": "Privat handel", "buy_platform_feature_decentralized": "Decentraliserad",
	"buy_platform_relai_description": "Relai är en schweizisk ren Bitcoin-app med plånbok med eget förvar, automatiska sparfunktioner och låga avgifter för europeiska användare.",
	"buy_platform_feature_bitcoin_only": "Bara Bitcoin", "buy_platform_feature_self_custody": "Plånbok med eget förvar", "buy_platform_feature_auto_invest": "Automatiska sparplaner", "buy_platform_feature_european": "Fokuserat på Europa",
	"buy_step_4_header": "STEG 4: FÖRVARA DIN BITCOIN SÄKERT",
	"buy_step_4_c1": "Efter att du har köpt Bitcoin är det viktigaste steget att flytta det till din egen plånbok där du kontrollerar de privata nycklarna.",
	"buy_step_4_c2": "Att lämna Bitcoin på en börs är riskabelt eftersom du faktiskt inte äger din Bitcoin – börsen gör det.",
	"buy_step_4_c3": "När du kontrollerar dina egna privata nycklar har du verkligt ägande av din Bitcoin och ingen kan ta den ifrån dig.",
	"buy_step_4_c4": "Lär dig hur du väljer rätt Bitcoin-plånbok för dina behov:",
	"buy_cta_wallets": "Visa guide till Bitcoin-plånböcker"
});

writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Guide till Bitcoin Lightning-plånböcker",
	"lightning_description": "Lightning-plånböcker låter dig skicka Bitcoin snabbt och billigt samtidigt som du behåller din personliga suveränitet.",
	"lightning_header": "GUIDE TILL LIGHTNING-PLÅNBÖCKER",
	"lightning_s1_c1": "Lightning låter dig skicka Bitcoin-betalningar snabbt och billigt.",
	"lightning_s1_c2": "Det är viktigt att veta att Lightning innebär kompromisser. I utbyte mot snabbare och billigare Bitcoin-betalningar offrar du ofta viss säkerhet.",
	"lightning_s1_c3": "Generellt bör Lightning bara användas med små mängder bitcoin. Stora mängder bitcoin bör alltid förvaras i en hårdvaruplånbok.",
	"lightning_s1_c4": "Kolla in vår guide till hårdvaruplånböcker för mer information.",
	"lightning_s1_c5": "Alla Lightning-plånböcker är inte lika. Vilken plånbok som har rätt balans av kompromisser för dig kan du ta reda på genom att svara på en enkel fråga:",
	"lightning_question_1": "VILKEN BALANS AV KOMPROMISSER ÄR RÄTT FÖR MIG?",
	"lightning_s2_c1": "En av Bitcoins innovationer är möjligheten att förvara det utan att vara beroende av ett förvaringsinstitut som en bank. Plånböcker med eget förvar låser upp Bitcoins fulla kraft.",
	"lightning_s2_c2": "Med en plånbok med eget förvar är du den enda som kan spendera eller överföra dina pengar. Ingen kan stoppa, censurera eller stjäla från dig när du använder en plånbok med eget förvar. Dessa kallas även icke-förvarande plånböcker.",
	"lightning_s2_c3": "Det mest suveräna sättet att använda Lightning är att köra din egen nod.",
	"lightning_s2_c4": "Denna guide fokuserar på enkla Lightning-plånböcker som inte kräver en egen nod.",
	"lightning_s2_c5": "Det är viktigt att veta att även med en icke-förvarande Lightning-plånbok litar du fortfarande på plånbokstillverkaren att inte pusha en skadlig appuppdatering och stjäla dina medel.",
	"lightning_s3_c1": "Förvarande plånböcker är plånböcker där du inte har kontroll över dina pengar.",
	"lightning_s3_c2": "Dessa plånböcker liknar mer banksystemet, där du måste lita på en tredje part att ge dig tillgång till dina pengar. Om din Bitcoin finns på en börs använder du en förvarande plånbok.",
	"lightning_s3_c3": "Förvarande plånböcker kan verka bekväma, men förvaringsinstitutet har den tekniska möjligheten att när som helst stjäla alla användarmedel.",
	"lightning_s3_c4": "Vissa föredrar förvarande Lightning-plånböcker för små mängder bitcoin på grund av hur enkla de är att använda. Kom bara ihåg: inte dina nycklar, inte dina mynt!",
	"lightning_question_2": "VÄLJ DIN PLÅNBOK",
	"lightning_s4_c1": "Med allt detta i åtanke kan du nu välja en Lightning-plånbok med rätt balans av kompromisser för dig.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Många funktioner", "lightning_mobile_app": "Mobilapp", "lightning_free": "100% gratis", "lightning_merchants": "Utmärkt för handlare", "lightning_starter": "Utmärkt startplånbok", "lightning_browser": "I webbläsaren", "lightning_custodial": "Helt förvarande plånbok",
	"lightning_cta_hardware": "Letar du efter vår guide till hårdvaru-Bitcoin-plånböcker?"
});

writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Gratis Bitcoin-klistermärken från bitcoin.rocks",
	"stickers_description": "Sätt ett Bitcoin-klistermärke på en offentlig plats och hjälp till att övertyga människorna omkring dig.",
	"stickers_header": "GRATIS BITCOIN-KLISTERMÄRKEN",
	"stickers_choose_header": "VÄLJ DITT KLISTERMÄRKESPAKET",
	"stickers_choose_c1": "Vårt uppdrag är att hjälpa dig övertyga fler människor genom att sätta Bitcoin-klistermärken på offentliga platser. Alla våra klistermärken har QR-koder som länkar till utbildningssidor om",
	"stickers_choose_c2": "Bitcoin", "stickers_choose_c3": "inflation",
	"stickers_choose_c4": "Välj ett klistermärkespaket nedan",
	"stickers_text_pack": "TEXTPAKET", "stickers_signs_pack": "SKYLTPAKET",
	"stickers_instructions_1": "Ange din postadress så skickar vi ett gratis paket Bitcoin-klistermärken till dig! Dina klistermärken skickas i ett vanligt vitt kuvert.",
	"stickers_instructions_2": "Adressuppgifter raderas efter att gratis klistermärken har skickats.",
	"stickers_share_header": "DELA DINA KLISTERMÄRKESPLATSER",
	"stickers_share_c1": "Dela dina klistermärkesplatser med oss på Nostr och se var andra sätter sina klistermärken.",
	"stickers_btn_share_on_nostr": "DELA PÅ NOSTR", "stickers_btn_what_is_nostr": "VAD ÄR NOSTR?",
	"stickers_flyers_link_before": "Under tiden, skriv ut och sätt upp dina egna ", "stickers_flyers_link_text": "Bitcoin-flygblad", "stickers_flyers_link_after": " och hjälp till att övertyga ännu fler människor.",
	"stickers_country_global_print": "Globalt — Jag skriver ut mina egna klistermärken", "stickers_country_global_order": "Globalt — Beställ i bulk",
	"placeholder_name_optional": "Namn (valfritt)", "placeholder_address_line_1": "Adressrad 1", "placeholder_address_line_2": "Adressrad 2 (valfritt)", "placeholder_city": "Stad", "placeholder_state": "Delstat", "placeholder_province": "Län", "placeholder_zip_code": "Postnummer", "placeholder_postal_code": "Postnummer", "placeholder_language": "Språk", "placeholder_which_stickers": "Vilka klistermärken?", "placeholder_email_optional": "Ange e-post för notifikation (valfritt)"
});

writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Gratis Bitcoin-vykort från bitcoin.rocks",
	"postcards_description": "Få ett gratis paket Bitcoin-vykort och dela Bitcoin med någon du känner.",
	"postcards_header": "VYKORTSPROGRAMMET HAR AVSLUTATS",
	"postcards_program_closed_message": "Vårt gratis Bitcoin-vykortsprogram har avslutats. Tack till alla som hjälpte till att sprida Bitcoinutbildning via post!",
	"postcards_sticker_alternative_header": "FÅ GRATIS BITCOIN-KLISTERMÄRKEN ISTÄLLET",
	"postcards_sticker_alternative_message": "Fortsätt sprida Bitcoin-medvetenhet med vårt gratis klistermärkesprogram! Våra Bitcoin-klistermärken är perfekta att dela på offentliga platser och innehåller QR-koder som länkar till utbildningsinnehåll.",
	"postcards_sticker_cta": "FÅ GRATIS KLISTERMÄRKEN",
	"postcards_step_2": "HUR VYKORTEN SÅG UT",
	"postcards_instructions_4": "Vi skapade dessa vykort för att göra det enklare att introducera Bitcoin för någon du känner! Lägg bara till en adress och ett frimärke och släpp vykortet på lådan.",
	"postcards_instructions_5": "Vårt uppdrag är att påskynda Bitcoinanvändningen. Du kan hjälpa till genom att beställa gratis klistermärken och sätta dem på offentliga platser!",
	"postcards_instructions_6": "Vi känner alla några som skulle ha nytta av att lära sig mer om Bitcoin. Dela Bitcoin-klistermärken med dem redan idag!"
});

writeFile(`signs_${lang}.json`, {
	"signs_description": "Hjälp oss att placera ut dessa Bitcoin-skyltar över hela USA!",
	"signs_title": "Gratis Bitcoin-skyltar från bitcoin.rocks",
	"signs_choose_header": "TACK FÖR ATT DU HJÄLPER OSS PLACERA DESSA BITCOIN-SKYLTAR ÖVER HELA USA!",
	"signs_choose_c1": "Alla skyltar är nu utdelade! Vårt uppdrag är att påskynda Bitcoinanvändningen genom utbildning.",
	"signs_choose_c2": "Många av er har hjälpt till genom att placera dessa gratis Bitcoin-skyltar på offentliga platser. Alla våra skyltar har QR-koder som länkar till en utbildningssida om",
	"signs_choose_c3": "inflation",
	"signs_choose_c4": "Tack vare vårt fantastiska community har vi nått tusentals människor och hjälpt dem ta sina första steg ner i Bitcoin-kaninhålet.",
	"signs_share_header": "DELA DINA SKYLTPLATSER",
	"signs_share_c1": "Dela en bild på din skyltplats med oss på Nostr och se var andra placerar sina skyltar.",
	"signs_btn_share_on_nostr": "DELA PÅ NOSTR", "signs_btn_what_is_nostr": "VAD ÄR NOSTR?",
	"signs_instructions_1": "Ange din postadress så skickar vi en låda med 10 Bitcoin-skyltar till dig!",
	"signs_instructions_2": "Adressuppgifter raderas efter att gratis skyltar har skickats."
});

writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Gratis Bitcoin-flygblad från bitcoin.rocks",
	"flyers_description": "Skriv ut ett Bitcoin-flygblad hemma och sätt upp det på en offentlig plats för att övertyga människorna omkring dig.",
	"flyers_header_1": "SKRIV UT OCH SÄTT UPP",
	"flyers_header_2": "BITCOIN-FLYGBLAD",
	"flyers_intro_header": "HUR MAN SKRIVER UT OCH SÄTTER UPP DESSA BITCOIN-FLYGBLAD",
	"flyers_intro_c1": "Vårt uppdrag är att hjälpa dig övertyga fler människor genom att sätta Bitcoin-flygblad på offentliga platser. Detta flygblad har en QR-kod som länkar till vår",
	"flyers_intro_c2": "Bitcoin-utbildningssida.",
	"flyers_intro_c3": "inflation",
	"flyers_intro_c4": "Skriv ut detta flygblad hemma eller på ett tryckeri. Sätt sedan upp det på anslagstavlor, lyktstolpar i staden och andra offentliga platser där folk kommer att se det och lära sig om Bitcoin.",
	"flyers_intro_c5": "Under tiden, beställ ett paket av våra",
	"flyers_intro_c6": "gratis Bitcoin-klistermärken",
	"flyers_intro_c7": "och hjälp till att övertyga ännu fler människor.",
	"flyers_btn_download": "LADDA NER FLYGBLAD", "flyers_btn_print": "SKRIV UT FLYGBLAD",
	"flyers_share_header": "DELA DINA FLYGBLADSPLATSER",
	"flyers_share_c1": "Dela dina flygbladsplatser med oss på Nostr och se var andra sätter sina flygblad.",
	"flyers_btn_share_on_nostr": "DELA PÅ NOSTR", "flyers_btn_what_is_nostr": "VAD ÄR NOSTR?"
});

writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Engagera dig och hjälp till att sprida Bitcoin",
	"get_involved_description": "Våra gratis resurser gör det enkelt att sprida Bitcoinanvändningen.",
	"get_involved_header": "ENGAGERA DIG",
	"get_involved_header_2": "SPRID BITCOIN",
	"get_involved_intro_1": "Det kan vara deprimerande att leva i det nuvarande tillståndet i vår värld.",
	"get_involved_intro_2": "Våra pengar är trasiga. Som ett resultat är grundläggande delar av samhället också trasiga.",
	"get_involved_intro_3": "Om du redan är intresserad av Bitcoin känner du till den känsla av hopp som Bitcoin kan ge. Hopp om en bättre framtid möjliggjord av bättre pengar.",
	"get_involved_intro_4": "Men så många människor omkring dig vet inte om Bitcoin. De lever i samma trasiga värld som du, men utan ett hopp att guida dem genom mörkret.",
	"get_involved_intro_5": "Men du kan ändra på det. Vi har skapat flera gratis resurser som gör det enkelt att sprida hoppet som Bitcoin ger till människorna omkring dig.",
	"get_involved_sticker_header": "Sätt ett klistermärke på en offentlig plats",
	"get_involved_sticker_content_1": "Du kan hjälpa till att utbilda människorna omkring dig om Bitcoin utan att behöva prata med någon. Sätt helt enkelt ett av våra gratis Bitcoin-klistermärken på en offentlig plats.",
	"get_involved_sticker_content_2": "Hundratals människor skannar QR-koderna på dessa klistermärken varje månad. Inflationsklistermärkena länkar till en sida om",
	"get_involved_sticker_content_3": "Bitcoin som lösning på inflation.",
	"get_involved_sticker_content_4": "De andra klistermärkena länkar till vår utbildningsstartsida som visar människor hur",
	"get_involved_sticker_content_5": "Bitcoin bygger en bättre värld.",
	"get_involved_sticker_content_6": "Genom att sätta dessa klistermärken i ditt samhälle på platser där folk kommer att se dem kan du hjälpa människorna omkring dig att ta sina första steg ner i Bitcoin-kaninhålet.",
	"get_involved_request_a": "BESTÄLL ETT",
	"get_involved_sticker_pack": "KLISTERMÄRKESPAKET",
	"get_involved_postcard_header": "Skicka ett vykort",
	"get_involved_postcard_content_1": "Du kan hjälpa till att sprida Bitcoins hopp till någon du känner genom att skicka ett av våra gratis vykort.",
	"get_involved_postcard_content_2": "Baksidan av varje vykort innehåller övertygande text om Bitcoin tillsammans med en QR-kod för mer information.",
	"get_involved_postcard_content_3": "Genom att skicka ett Bitcoin-vykort kan du hjälpa någon att se Bitcoin i ett nytt ljus.",
	"get_involved_postcard_pack": "VYKORTPAKET",
	"get_involved_business_header": "Introducera ett företag",
	"get_involved_business_content_1": "Vill du hjälpa till att bygga en cirkulär Bitcoin-ekonomi? Vårt Bitcoin-företagspaket gör det enkelt att kontakta ett företag om att acceptera Bitcoin-betalningar.",
	"get_involved_business_content_2": "Varje företagspaket innehåller flygblad som framhäver fördelarna med att acceptera Bitcoin-betalningar. Varje flygblad länkar till olika",
	"get_involved_business_content_3": "gratis Bitcoin-företagsresurser.",
	"get_involved_business_kit": "FÖRETAGSPAKET"
});

console.log(`\nDone! Created 9 content files.`);
