/**
 * Creates Swedish (sv) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sv';
const today = '2026-04-02';

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
	"bitcoin_is_good_for_business": "Bitcoin är bra för företag",
	"biz_header": "BITCOIN ÄR BRA FÖR FÖRETAG",
	"biz_s1": "Låga avgifter utan minimumbelopp",
	"biz_s1_c1": "Bitcoin låter dig ta emot betalningar direkt från kunder, liknande kontanter. Bitcoin-nätverket fungerar utan mellanhänder som banker och kreditkortsföretag som tar ut höga avgifter.",
	"biz_s2": "Omedelbar avräkning",
	"biz_s2_c1": "Precis som kontanter avräknas Bitcoin-betalningar omedelbart. Du behöver inte vänta på att ditt kreditkortsföretag eller din bank ska betala dig. Istället får du tillgång till dina pengar direkt.",
	"biz_s3": "Inga återbetalningar eller bedrägerier",
	"biz_s3_c1": "Eftersom Bitcoin-betalningar sker direkt mellan dig och dina kunder kan ingen ta tillbaka pengarna genom en återbetalning.",
	"biz_s3_c2": "Falsk Bitcoin kan inte skickas över Bitcoin-nätverket, vilket innebär att du aldrig behöver oroa dig för bedrägliga transaktioner som kan kosta ditt företag pengar.",
	"biz_s4": "Få fler kunder",
	"biz_s4_c1": "Miljontals människor äger Bitcoin och vill spendera det på platser som accepterar det.",
	"biz_s4_c2": "Genom att helt enkelt acceptera Bitcoin kan ditt företag listas på kartor över Bitcoin-handlare och få gratis exponering för nya kunder.",
	"biz_s4_c3": "Att acceptera Bitcoin är 100% gratis. Inga kontrakt eller dolda avgifter."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Lär dig varför Bitcoin är bra för företag",
	"why_header": "BITCOIN ÄR BRA FÖR FÖRETAG",
	"why_good_for_you": "BITCOIN ÄR BRA FÖR DIG OCKSÅ!",
	"why_learn_more_lowercase": "Lär dig mer.",
	"why_s1": "Bitcoin har inte inflation",
	"why_s1_c1": "Inflation uppstår när mer pengar trycks eller skapas ur tomma intet. Detta gör att dina pengar tappar i värde över tid.",
	"why_s1_c2": "Bitcoin har ett fast utbud, vilket innebär att ingen kan trycka mer Bitcoin.",
	"why_s2": "Bitcoin har inga bankrusningar",
	"why_s2_c1": "Flera amerikanska banker har kollapsat på grund av bankrusningar de senaste åren.",
	"why_s2_c2": "Istället för att bara förvara dina pengar investerar bankerna dem och lånar ut dem. Om dessa investeringar inte går bra har de inte tillräckligt med pengar för att ge dig tillbaka dina.",
	"why_s2_c3": "Och FDIC:s försäkringsfond har bara 1 dollar för varje 100 dollar den försäkrar.",
	"why_s3": "Bitcoin kräver inget tillstånd",
	"why_s3_c1": "Till skillnad från traditionella finansiella nätverk kräver Bitcoin inget tillstånd för att användas.",
	"why_s3_c2": "Det betyder att ingen kan hindra dig från att använda Bitcoin av någon anledning. Det är det första finansiella nätverket du kan använda utan oro för censur eller konfiskering.",
	"why_s4": "Bitcoin bygger en bättre värld",
	"why_s4_c1": "Bitcoin är en missförstådd teknik som bygger en bättre värld.",
	"why_s4_c2": "Bitcoin har gjort det möjligt för människorättsaktivister att kämpa för frihet, minskat globala metanutsläpp, räddat nationalparker och mycket mer."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Acceptera Bitcoin-betalningar i ditt företag",
	"guide_header": "ÄR DU REDO ATT ACCEPTERA BITCOIN I DITT FÖRETAG?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Vanliga frågor om att acceptera Bitcoin",
	"faq_description": "Har du frågor om att acceptera Bitcoin-betalningar i ditt företag?",
	"faq_header": "HAR DU FRÅGOR OM ATT ACCEPTERA BITCOIN-BETALNINGAR?",
	"faq_s1": "Vad är Bitcoin?",
	"faq_s1_c1": "Bitcoin är två saker: digitala pengar och ett datornätverk.",
	"faq_s1_c2": "Du kan skicka bitcoin (digitala pengar) direkt till andra människor med hjälp av Bitcoin-nätverket.",
	"faq_s1_c3": "Bitcoin-nätverket fungerar utan mellanhänder eller centrala myndigheter, som banker eller kreditkortsföretag, så du kan undvika deras transaktionsavgifter.",
	"faq_s1_c4": "Bitcoin-transaktioner når slutlig avräkning snabbt (10 minuter) och kan aldrig återkallas, så du kan sova gott med vetskapen om att dina pengar verkligen är dina.",
	"faq_s2": "Hur kan Bitcoin gynna mitt företag?",
	"faq_s2_c1": "Bitcoin låter dig ta emot betalningar med lägre avgifter och få fler kunder. Bitcoin-betalningar har låga avgifter utan minimumbelopp, avräknas omedelbart och är immuna mot återbetalningar och bedrägerier.",
	"faq_s2_c2": "Att acceptera Bitcoin är gratis och låter dig lista ditt företag på kartor över Bitcoin-handlare så att Bitcoin-användare lätt kan hitta dig.",
	"faq_s2_c3": "Se alla sätt som Bitcoin är bra för företag.",
	"faq_s3": "Hur tar jag emot Bitcoin-betalningar?",
	"faq_s3_c1": "Allt du behöver för att ta emot Bitcoin-betalningar är en gratis Bitcoin-plånbok.",
	"faq_s3_c2": "Vår plånboksguide hjälper dig att komma igång snabbt och enkelt så att du kan börja dra nytta av Bitcoin-betalningar redan idag!",
	"faq_s3_c3": "Visa plånboksguide",
	"faq_s4": "Kan jag konvertera mottagna Bitcoin-betalningar till min lokala valuta?",
	"faq_s4_c1": "Ja! Med en hybridplånbok kan du automatiskt konvertera mottagna Bitcoin-betalningar till din lokala valuta direkt när betalningen tas emot.",
	"faq_s4_c2": "Vår plånboksguide hjälper dig att komma igång snabbt och enkelt.",
	"faq_s4_c3": "Du kan också välja att behålla en del av mottagna betalningar i Bitcoin. Att spara i Bitcoin har många fördelar:",
	"faq_s4_c4": "Bitcoin är ett fullreservfinansiellt system.",
	"faq_s4_c5": "Bitcoin har inte inflation.",
	"faq_s4_c6": "Dessa fördelar gör Bitcoin till ett utmärkt sätt att lagra pengar långsiktigt.",
	"faq_s4_c7": "Även om du väljer att konvertera alla Bitcoin-betalningar till dollar får du fortfarande fördelarna med att ta emot betalningar med mycket lägre avgifter och nå fler potentiella kunder.",
	"faq_s5": "Kan jag ta emot Bitcoin-betalningar personligen?",
	"faq_s5_c1": "Ja! Att ta emot Bitcoin-betalningar personligen är enkelt med en Bitcoin-plånbok.",
	"faq_s5_c2": "Vår plånboksguide hjälper dig att välja den bästa för ditt företag.",
	"faq_s5_c3": "Visa plånboksguide",
	"faq_s6": "Kan jag ta emot Bitcoin-betalningar online?",
	"faq_s6_c1": "Ja! Att ta emot Bitcoin-betalningar online med din befintliga webbutik är enkelt.",
	"faq_s6_c2": "Kolla in vår plånboksguide för mer information.",
	"faq_s7": "Hur kan jag låta kunder veta att jag accepterar Bitcoin?",
	"faq_s7_c1": "Vi erbjuder gratis klistermärken med 'Bitcoin accepteras här' som du kan visa i ditt företag för att låta kunder veta att du accepterar Bitcoin.",
	"faq_s7_c2": "Klicka här för att beställa klistermärken.",
	"faq_s7_c3": "Du kan också gratis lista ditt företag på kartor över Bitcoin-handlare och få exponering för miljontals Bitcoin-användare som vill spendera sin Bitcoin hos företag som accepterar det.",
	"faq_s7_c4": "Registrera dig nu.",
	"faq_s8": "Hur kan jag få fler kunder genom att acceptera Bitcoin?",
	"faq_s8_c1": "Det finns miljontals Bitcoin-användare som vill spendera sin Bitcoin hos företag som accepterar det.",
	"faq_s8_c2": "Genom att helt enkelt acceptera Bitcoin-betalningar kan ditt företag listas på gratis kartor över Bitcoin-handlare och få exponering för nya potentiella kunder.",
	"faq_s8_c3": "Registrera dig nu.",
	"faq_s9": "Hur mycket kostar det att acceptera Bitcoin?",
	"faq_s9_c1": "Att acceptera Bitcoin i ditt företag är 100% gratis. Inga kontrakt eller dolda avgifter.",
	"faq_s9_c2": "Kolla in vår plånboksguide och börja acceptera Bitcoin-betalningar redan idag."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Guide för Bitcoin-bokföring i företag",
	"accounting_description": "Lär dig hur du korrekt redovisar Bitcoin-betalningar i ditt företags bokföring.",
	"accounting_header": "GUIDE FÖR BITCOIN-BOKFÖRING",
	"accounting_s1_c1": "Att acceptera Bitcoin har många fördelar, som att ta emot betalningar med lägre avgifter och få fler kunder.",
	"accounting_s1_c2": "Om du använder en hybridplånbok från vår plånboksguide och automatiskt säljer 100% av mottagen Bitcoin för dollar behöver du inte ändra något i din nuvarande bokföring.",
	"accounting_s1_c3": "Visa plånboksguide.",
	"accounting_s1_c4": "Om du dock väljer att behålla en del av mottagna Bitcoin-betalningar som Bitcoin behöver du spåra några saker för din bokföring. Det kan verka överväldigande vid första anblicken, men det är faktiskt ganska enkelt.",
	"accounting_s1_c5": "Obs: denna guide är endast informativ och utgör inte skatterådgivning.",
	"accounting_s1_c6": "Om du behöver skatterådgivning rekommenderar vi starkt Satoshi Pacioli Accounting Services, en revisionsbyrå specialiserad på Bitcoin-bokföring.",
	"accounting_s2": "SPÅRA DIN ANSKAFFNINGSKOSTNAD",
	"accounting_s2_c1": "Att spåra anskaffningskostnaden blir den största skillnaden mellan att bokföra dollar och att bokföra Bitcoin. Även om du tänker på ditt företag enbart i Bitcoin-termer måste du rapportera dollarvärdet för varje transaktion i din skattedeklaration.",
	"accounting_s2_c2": "Om du använder QuickBooks kan du göra detta automatiskt med tillägget Bitcoin Sync.",
	"accounting_s2_c3": "Om du inte använder QuickBooks rekommenderar vi Satoshi Pacioli Accounting Services, en revisionsbyrå specialiserad på Bitcoin-bokföring.",
	"accounting_s2_c4": "För manuell spårning, registrera helt enkelt mängden mottagen Bitcoin och dollarvärdet på Bitcoin-transaktionen den dagen.",
	"accounting_s2_c5": "Du kan se det aktuella dollarpriset på Bitcoin här.",
	"accounting_s2_c6": "Spåra denna information i ett Excel-kalkylblad och lämna det till din revisor.",
	"accounting_s2_c7": "Du kan också automatiskt importera dessa data till Excel.",
	"accounting_s2_c8": "Du kan också se det historiska dollarpriset på Bitcoin under tidigare dagar, så du behöver inte göra det varje dag.",
	"accounting_s3": "SPENDERA ELLER SÄLJA DIN BITCOIN",
	"accounting_s3_c1": "Om du använder en hybridplånbok från vår plånboksguide och automatiskt säljer 100% av mottagen Bitcoin för dollar behöver du inte ändra något i din nuvarande bokföring.",
	"accounting_s3_c2": "Visa plånboksguide.",
	"accounting_s3_c3": "Om du väljer att spendera eller sälja en del av mottagen Bitcoin vid ett senare tillfälle, lägg helt enkelt till priset du sålde den för i Excel-kalkylbladet där du spårar din anskaffningskostnad.",
	"accounting_s3_c4": "Till exempel, om du mottog Bitcoin värd 100 dollar den 1 januari och valde att sälja eller spendera den den 1 februari vid ett nytt värde av 110 dollar, måste du registrera en kapitalvinst på 10 dollar i din bokföring.",
	"accounting_s3_c5": "Detta kan också fungera åt andra hållet. Till exempel, om du mottog Bitcoin värd 100 dollar den 1 januari och valde att sälja eller spendera den den 1 februari vid ett nytt värde av 90 dollar, måste du registrera en kapitalförlust på 10 dollar i din bokföring.",
	"accounting_s4": "JAG BEHÖVER MER HJÄLP",
	"accounting_s4_c1": "Om du behöver mer hjälp med att integrera Bitcoin i din företagsbokföring rekommenderar vi starkt Satoshi Pacioli Accounting Services, en revisionsbyrå specialiserad på Bitcoin-bokföring.",
	"accounting_s4_c2": "Lär dig mer om Satoshi Pacioli Accounting Services."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Hur man accepterar Bitcoin-betalningar",
	"wallets_header": "SKAFFA EN GRATIS BITCOIN-PLÅNBOK FÖR ATT TA EMOT BETALNINGAR",
	"wallets_intro_1": "Alla Bitcoin-plånböcker är kompatibla med varandra, så kunder kan betala dig i Bitcoin oavsett vilken plånbok de använder.",
	"wallets_intro_2": "Rena Bitcoin-plånböcker:",
	"wallets_intro_3": "Dessa är rena Bitcoin-plånböcker som låser upp alla fördelar med Bitcoin: inga mellanhänder, låga avgifter och inga återbetalningar eller bedrägerier.",
	"wallets_intro_4": "Hybridplånböcker:",
	"wallets_intro_5": "Dessa låter dig växla valfri andel av din Bitcoin till dollar så snart en kund betalar dig. Avgifterna är fortfarande lägre än kreditkort, men högre än rena Bitcoin-betalningar.",
	"wallets_intro_6": "Båda typerna är utmärkta sätt att acceptera Bitcoin. Din specifika plånbok beror på storleken och typen av ditt företag.",
	"wallets_choice_sole": "plånböcker för enskilda firmor",
	"wallets_choice_multiple": "plånböcker för företag med flera anställda",
	"wallets_choice_online": "plånböcker för onlineföretag",
	"wallets_choice_invoice": "plånböcker för faktureringsföretag",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Du kan acceptera Bitcoin-betalningar med din befintliga Square PoS-terminal eller webbutiksintegration. Att acceptera Bitcoin-betalningar har aldrig varit enklare.",
	"wallets_feature_bitcoin_only": "Ren Bitcoin-plånbok",
	"wallets_feature_no_info": "Ingen information krävs",
	"wallets_feature_in_person": "Endast personliga betalningar",
	"wallets_feature_settles_bitcoin": "Avräkning 100% i Bitcoin",
	"wallets_feature_hybrid": "Hybridplånbok",
	"wallets_feature_info": "Företagsinformation krävs",
	"wallets_feature_in_person_online": "Personliga och onlinebetalningar",
	"wallets_feature_settles_both": "Avräkning i Bitcoin och dollar",
	"wallets_feature_multiple_employees": "Stöd för flera anställda (BPT)",
	"wallets_feature_self_hosted": "Egen hosting = 0% avgifter",
	"wallets_feature_online_store": "Integration med webbutik",
	"wallets_feature_invoicing": "Gratis faktureringsprogram",
	"wallets_get_wallet": "SKAFFA PLÅNBOK"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Kartor över Bitcoin-handlare – Lista ditt företag gratis",
	"maps_header": "REGISTRERA DIG PÅ KARTOR ÖVER BITCOIN-HANDLARE OCH FÅ FLER KUNDER",
	"maps_request_details": "Ange dina företagsuppgifter nedan så listar vi dig gratis på kartor över Bitcoin-handlare. Detta gör det möjligt för bitcoiners att hitta ditt företag och spendera sin Bitcoin hos dig!",
	"maps_view": "Visa kartan här."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Ditt företag kommer att listas på kartor över Bitcoin-handlare inom 1 till 2 veckor.",
	"kit_success_2": "Visa kartan här."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Klistermärken – Bitcoin accepteras här",
	"stickers_header": "FÅ GRATIS KLISTERMÄRKEN 'BITCOIN ACCEPTERAS HÄR'",
	"stickers_request": "Beställ gratis klistermärken",
	"stickers_request_details": "Låt dina kunder veta att du accepterar Bitcoin-betalningar med dessa gratis klistermärken 'Bitcoin accepteras här'.",
	"stickers_country_global_print": "Globalt — Jag skriver ut mina egna klistermärken",
	"stickers_request_instructions": "Du kommer att få tre klistermärken 'Bitcoin accepteras här' i ett vanligt vitt kuvert. Om du behöver fler än tre klistermärken för ditt företag, beställ gärna fler gånger. Adressuppgifter raderas efter att gratis klistermärken har skickats.",
	"stickers_print_details": "Du kan skriva ut dina egna klistermärken 'Bitcoin accepteras här' oavsett var du bor! Klicka på ditt språk nedan för att se klistermärkesfiler och instruktioner.",
	"stickers_request_language": "Ser du inte ditt språk? Fyll i formuläret nedan för att begära klistermärkesfiler 'Bitcoin accepteras här' på ditt språk."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Du kommer att få dina klistermärken inom 1 till 2 veckor i ett vanligt vitt kuvert. Varje kuvert innehåller 3 klistermärken. Om du behöver fler än 3 klistermärken för ditt företag, beställ gärna ett paket till!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Vi skapar och publicerar din klistermärkesfil inom 3 till 4 veckor. Tack för ditt tålamod!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoin-företagspaket",
	"kit_header": "SKRIV UT DITT EGET BITCOIN-FÖRETAGSPAKET",
	"kit_request": "BESTÄLL ETT GRATIS PAKET",
	"kit_request_details": "Varje Bitcoin-företagspaket innehåller två flygblad som gör det enkelt att övertyga ett lokalt företag att acceptera Bitcoin.",
	"kit_country_global_print": "Globalt — Jag skriver ut mina egna paket",
	"kit_enter_address": "Ange din postadress så skickar vi ett gratis Bitcoin-företagspaket till dig i ett vanligt vitt kuvert. Adressuppgifter raderas efter att paketet har skickats.",
	"kit_print_details": "Du kan delta genom att skriva ut dina egna flygblad oavsett var du bor! Du kan också hänvisa företag till vårt digitala företagspaket för att slippa utskrift.",
	"kit_view_files": "VISA FILER",
	"kit_digital_kit": "DIGITALT PAKET",
	"kit_resources": "VARJE PAKET LÄNKAR TILL DESSA GRATIS RESURSER"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Du kommer att få ditt Bitcoin-företagspaket inom 1 till 2 veckor i ett vanligt vitt kuvert."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Skriv ut ditt eget Bitcoin-företagspaket",
	"english_bbk_files_description": "Ladda ner flygbladsfilerna här.",
	"english_header": "SKRIV UT DITT EGET ENGELSKA BITCOIN-FÖRETAGSPAKET"
});

console.log(`\nDone! Created 14 business files.`);
