/**
 * Creates Swedish (sv) translation files for all bitcoin-vs-* comparison pages
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

// bitcoin-vs-gold
writeFile(`bitcoin-vs-gold_${lang}.json`, {
	"bitcoin_vs_gold": "Bitcoin vs Guld",
	"gold_header": "SKILLNADEN MELLAN", "gold_header_2": "BITCOIN", "gold_header_3": "OCH", "gold_header_4": "GULD",
	"gold_intro_1": "Guld har använts som pengar i tusentals år och många betraktar det som en finansiell fristad.",
	"gold_intro_2": "Bitcoin är digitala pengar skapade 2009 och många betraktar det också som en finansiell fristad.",
	"gold_intro_3": "Men hur skiljer sig en fysisk metall som guld från digitala pengar som Bitcoin? Låt oss titta på skillnaderna mellan två former av pengar: Bitcoin och Guld.",
	"gold": "GULD",
	"gold_point_1": "Måste skickas fysiskt", "gold_point_2": "Digitala skuldsedlar", "gold_point_3": "Utbudet ökar varje år", "gold_point_4": "Elastiskt utbud", "gold_point_5": "Fysiskt centraliserat", "gold_point_6": "Svårt att verifiera", "gold_point_7": "Svårt att dela upp",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Kan skickas via internet", "bitcoin_point_2": "Digitalt nativt", "bitcoin_point_3": "Fast utbud på 21M BTC", "bitcoin_point_4": "Oelastiskt utbud", "bitcoin_point_5": "Decentraliserad", "bitcoin_point_6": "Lätt att verifiera", "bitcoin_point_7": "Lätt att dela upp",
	"point_1_summary_1": "Eftersom Bitcoin är digitalt kan vem som helst med internetanslutning skicka det nästan omedelbart till mycket låga avgifter. Eftersom guld är fysiskt kan det inte överföras via internet och måste skickas fysiskt för att överföra ägande.",
	"point_2_summary_1": "Bitcoin är en digitalt nativ tillgång, vilket innebär att du kan överföra fullt ägande via internet. Vissa företag erbjuder möjligheten att köpa guld online utan att ta emot det faktiska fysiska guldet, istället litar du på att företaget förvarar guldet åt dig. Det liknar mer en digital skuldsedel, eftersom du äger ett löfte från ett företag istället för den faktiska tillgången.",
	"point_3_summary_1": "Bitcoin har ett fast tak på 21 miljoner BTC som någonsin kommer att finnas.",
	"point_3_summary_2": "Nytt guldutbud bryts ur jorden varje år, vilket resulterar i inflation av det totala utbudet. Det uppskattas att det totala guldutbudet växer med cirka 1,6% per år, vilket innebär att din del av kakan krymper med 1,6% varje år.",
	"point_3_summary_3": "Det är mindre än fiatinflation, men det är fortfarande inflation.",
	"point_3_summary_4": "Med Bitcoin krymper din del av kakan aldrig.",
	"point_4_summary_1": "Guld har ett elastiskt utbud, vilket innebär att när guldpriset stiger finns det mer incitament att bryta mer guld. Detta skapar ofta nedåtpress på guldpriset när nya gruvor öppnas.",
	"point_4_summary_2": "Med Bitcoin, oavsett hur högt priset stiger, kan du inte skapa mer än 21M Bitcoin.",
	"point_4_summary_3": "Bitcoin är den första tillgången med ett oelastiskt förhållande mellan pris och utbud.",
	"point_5_summary_1": "Bitcoin-nätverket är decentraliserat.", "point_5_summary_2": "Tiotusentals oberoende noder verifierar nätverkets regler.", "point_5_summary_3": "Användare kan ta sin Bitcoin i eget förvar genom att ladda ner en app.", "point_5_summary_4": "Även om det är möjligt att ha fysiskt guld i eget förvar lagras det mesta fysiska guldet i enorma valv som ägs av förvaringsinstitut, vilket gör det fysiskt centraliserat.",
	"point_6_summary_1": "Med Bitcoin är det otroligt enkelt att verifiera att du har äkta Bitcoin genom att ta dina mynt i eget förvar och köra en fullständig nod.", "point_6_summary_2": "Eget förvar är lika enkelt som att ladda ner en app.", "point_6_summary_3": "En fullständig nod är en enkel programvara som säkerställer att nätverkets regler följs och verifierar att du har äkta Bitcoin.", "point_6_summary_4": "Fysiskt guld kan vara mycket svårt att verifiera som äkta. Även om du verifierar att utsidan av fysiskt guld är äkta kan insidan av din guldtacka vara volfram eller annan metall. Det enda sättet att verkligen verifiera att du äger det fysiska guldet du tror att du äger är att smälta ner det.",
	"point_7_summary_1": "Precis som det finns 100 ören i 1 krona finns det 100 000 000 satoshi i 1 Bitcoin. Detta gör det möjligt att använda Bitcoin för köp i alla storlekar, inklusive mikrotransaktioner på bara några ören.", "point_7_summary_2": "Det gör Bitcoin till ett bra verktyg för företag.", "point_7_summary_3": "Eftersom fysiskt guld är svårt att dela upp kan det inte enkelt användas för köp, särskilt inte små köp."
});

// bitcoin-vs-banks
writeFile(`bitcoin-vs-banks_${lang}.json`, {
	"bitcoin_vs_banks": "Bitcoin vs Banker",
	"banks_header": "SKILLNADEN MELLAN", "banks_header_2": "BITCOIN", "banks_header_3": "OCH", "banks_header_4": "BANKER",
	"banks_intro_1": "Banker har kontrollerat pengar i århundraden och fungerat som mellanhänder för finansiella transaktioner och väktare av det monetära systemet.",
	"banks_intro_2": "Bitcoin är ett peer-to-peer-system för digitala pengar som fungerar utan banker eller centrala myndigheter.",
	"banks_intro_3": "Men hur skiljer sig Bitcoin-nätverket från det traditionella banksystemet? Låt oss utforska de viktigaste skillnaderna mellan dessa två fundamentalt olika tillvägagångssätt för pengar.",
	"banks": "BANKER",
	"banks_point_1": "Kräver tillstånd", "banks_point_2": "Begränsade öppettider", "banks_point_3": "Privata, ogenomskinliga operationer", "banks_point_4": "Kontrollerar dina pengar", "banks_point_5": "Varierande avgifter och straffavgifter", "banks_point_6": "Tillåter övertrassering med avgifter", "banks_point_7": "Kan blockera transaktioner",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Tillståndsfri åtkomst", "bitcoin_point_2": "Alltid tillgänglig 24/7", "bitcoin_point_3": "Transparent och öppen", "bitcoin_point_4": "Du kontrollerar dina pengar", "bitcoin_point_5": "Förutsägbara, låga avgifter", "bitcoin_point_6": "Kan inte övertrasseras", "bitcoin_point_7": "Censurresistent",
	"point_1_summary_1": "Bitcoin är tillståndsfritt, vilket innebär att det kan användas av vem som helst med internetåtkomst utan att be om tillåtelse från någon myndighet.", "point_1_summary_2": "Bitcoin fungerar utan grindvakter", "point_1_summary_3": "— ingen kan neka dig åtkomst. Banker kan dock vägra att öppna konton, frysa befintliga konton eller neka tjänster baserat på sina policyer eller myndighetskrav.",
	"point_2_summary_1": "Bitcoin-nätverket fungerar 24 timmar om dygnet, 7 dagar i veckan, 365 dagar om året utan underhållsavbrott eller helgdagar. Banker har begränsade öppettider, är stängda på helger och helgdagar och har ofta systemunderhållsperioder då tjänster inte är tillgängliga.",
	"point_3_summary_1": "Alla Bitcoin-transaktioner registreras på en offentlig blockkedja som vem som helst kan verifiera och granska.", "point_3_summary_2": "Banker fungerar med privata redovisningssystem och ogenomskinliga interna processer som kunder inte kan verifiera oberoende.",
	"point_4_summary_1": "Med Bitcoin kan du hålla dina egna privata nycklar och ha full kontroll över dina pengar.", "point_4_summary_2": "Lär dig mer om Bitcoin-plånböcker", "point_4_summary_3": "för att förstå eget förvar. Banker håller dina pengar på sina konton och kan frysa, begränsa eller förbjuda åtkomst till dina medel när som helst.",
	"point_5_summary_1": "Bitcoin-transaktionsavgifter är transparenta, förutsägbara och vanligtvis mycket låga. Banker har ofta dolda avgifter, månatliga kontoavgifter, övertrasseringsavgifter, överföringsavgifter, bankomatavgifter och andra straffavgifter som kan ackumuleras avsevärt över tid.",
	"point_6_summary_1": "Bitcoin hindrar dig från att spendera pengar du inte har — du kan bara spendera Bitcoin som du faktiskt äger. Banker tillåter övertrassering (att spendera mer än ditt kontosaldo) och tar sedan ut betydande avgifter för denna 'tjänst', vilket ofta leder till kaskaderande straffavgifter.",
	"point_7_summary_1": "Bitcoin-transaktioner är censurresistenta — när de väl har skickats till nätverket kan de inte stoppas eller ångras av någon central myndighet. Banker kan blockera, frysa, avbryta eller begränsa transaktioner baserat på sina policyer, myndighetsbeslut eller algoritmer för misstänkt aktivitet."
});

// bitcoin-vs-bonds
writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin vs Obligationer",
	"bonds_header": "SKILLNADEN MELLAN", "bonds_header_2": "BITCOIN", "bonds_header_3": "OCH", "bonds_header_4": "OBLIGATIONER",
	"bonds_intro_1": "Statsobligationer kallas ofta 'riskfria' investeringar och betraktas inom traditionell finans som den säkraste platsen att förvara förmögenhet.",
	"bonds_intro_2": "Bitcoin är digitala pengar som fungerar oberoende av någon regering eller central myndighet.",
	"bonds_intro_3": "Men är obligationer verkligen riskfria? Och hur jämförs de med Bitcoin som värdebevarare? Låt oss titta på de viktigaste skillnaderna mellan Bitcoin och statsobligationer.",
	"bonds": "OBLIGATIONER",
	"bonds_point_1": "Dolda risker", "bonds_point_2": "Förlorar värde genom inflation", "bonds_point_3": "Kan bli illikvida", "bonds_point_4": "Misslyckade auktioner", "bonds_point_5": "Fast avkastning", "bonds_point_6": "Kräver mellanhänder", "bonds_point_7": "Beroende av staten",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Ingen motpartsrisk", "bitcoin_point_2": "Fast utbud", "bitcoin_point_3": "Alltid likvid", "bitcoin_point_4": "Ingen auktionsrisk", "bitcoin_point_5": "Potential för värdestegring", "bitcoin_point_6": "Möjlighet till eget förvar", "bitcoin_point_7": "Inget statsberoende",
	"point_1_summary_1": "Obligationer är 'riskfria' bara i nominella dollartermer, vilket innebär att du får tillbaka dina dollar om du håller till förfall. Men detta ignorerar inflationsrisk, ränterisk och möjligheten att dessa dollar kan vara mycket mindre värda när de återbetalas.", "point_1_summary_2": "Bitcoin har tydliga, transparenta risker (volatilitet) men ingen dold motpartsrisk — antingen äger du din Bitcoin eller inte.",
	"point_2_summary_1": "När inflationen är högre än obligationsavkastningen förlorar obligationsinnehavare köpkraft varje år. En obligationsavkastning på 2% vid 4% inflation innebär att du förlorar 2% i reellt värde per år.", "point_2_summary_2": "Lär dig mer om inflation.", "point_2_summary_3": "Bitcoins fasta utbud på 21 miljoner mynt innebär att det inte kan urholkas av inflation, men obligationer kan urholkas genom penningtryckande.",
	"point_3_summary_1": "Under finanskriser kan obligationsmarknaderna frysa och bli illikvida. Banker som Silicon Valley Bank satt fast med obligationsinnehav som tappade avsevärt i värde när räntorna steg, vilket bidrog till deras kollaps.", "point_3_summary_2": "Lär dig hur Silicon Valley Bank kollapsade och varför Bitcoin är annorlunda.", "point_3_summary_3": "Bitcoin handlas 24/7 globalt och har aldrig upplevt en likviditetskris — du kan alltid hitta en köpare eller säljare.",
	"point_4_summary_1": "Auktioner av statsobligationer kan misslyckas när det inte finns tillräckligt med köpare för statsskulden. Detta har hänt flera gånger de senaste åren, inklusive svag efterfrågan på 10-åriga obligationer 2022 och 30-åriga obligationer 2023.", "point_4_summary_2": "Lär dig mer om dessa misslyckade auktioner av statsobligationer.", "point_4_summary_3": "Bitcoins pris bestäms genom kontinuerliga globala marknader utan en central auktion som kan misslyckas.",
	"point_5_summary_1": "Obligationsavkastningar är fasta vid köptillfället. Även om ekonomin växer snabbt eller valutan deprecierar avsevärt förblir din avkastning densamma.", "point_5_summary_2": "Bitcoin har potential för betydande värdestegring när användningen ökar och det fasta utbudet möter ökande efterfrågan.",
	"point_6_summary_1": "De flesta människor håller obligationer genom mellanhänder som banker, mäklare eller fonder, vilket skapar motpartsrisk. Du äger egentligen inte obligationerna direkt.", "point_6_summary_2": "Med Bitcoin kan du ta direkt ägande genom eget förvar, vilket helt eliminerar motpartsrisk.",
	"point_7_summary_1": "Obligationer är helt beroende av statens förmåga och vilja att betala. Om staten möter en fiskalkris, fallerar eller väljer att inflatera bort skulden drabbas obligationsinnehavarna.", "point_7_summary_2": "Bitcoin fungerar oberoende av någon stat och kan inte kontrolleras, infleras eller urholkas av politiska myndigheter."
});

// bitcoin-vs-cash
writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin vs Kontanter",
	"cash_header": "SKILLNADEN MELLAN", "cash_header_2": "BITCOIN", "cash_header_3": "OCH", "cash_header_4": "KONTANTER",
	"cash_intro_1": "Kontanter har använts som pengar i århundraden och förblir den vanligaste formen av fysiska pengar i hela världen.",
	"cash_intro_2": "Bitcoin är digitala pengar skapade 2009 som fungerar oberoende av någon regering eller central myndighet.",
	"cash_intro_3": "Men hur skiljer sig fysiska kontanter från digitala pengar som Bitcoin? Låt oss titta på de viktigaste skillnaderna mellan dessa två former av pengar: Bitcoin och Kontanter.",
	"cash": "KONTANTER",
	"cash_point_1": "Kräver fysisk närvaro", "cash_point_2": "Begränsade av gränser", "cash_point_3": "Kan ogiltigförklaras över en natt", "cash_point_4": "Kan förfalskas", "cash_point_5": "Kontrollerade av staten", "cash_point_6": "Fysiska förvaringsrisker", "cash_point_7": "Begränsad delbarhet",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Kan skickas via internet", "bitcoin_point_2": "Fungerar globalt", "bitcoin_point_3": "Kan inte ogiltigförklaras", "bitcoin_point_4": "Kan inte förfalskas", "bitcoin_point_5": "Decentraliserat nätverk", "bitcoin_point_6": "Digitalt eget förvar", "bitcoin_point_7": "Lätt att dela upp",
	"point_1_summary_1": "Bitcoin kan skickas vart som helst i världen omedelbart via internet, medan kontanter kräver fysisk närvaro eller pålitliga mellanhänder. Du kan inte e-posta kontanter, men du kan skicka Bitcoin till vem som helst med internetanslutning på några minuter.",
	"point_2_summary_1": "Bitcoin fungerar överallt i världen likadant — det finns inga gränser i Bitcoin-nätverket. Kontanter begränsas av geografi, växelkurser och lokalt godkännande. Försök att använda amerikanska dollar på landsbygden i Thailand eller japanska yen på landsbygden i Mexiko.",
	"point_3_summary_1": "Stater kan och har ogiltigförklarat kontanter över en natt genom demonetiseringspolicyer, som Indien gjorde 2016 när de förbjöd vissa sedlar.", "point_3_summary_2": "Även utan att förbjuda specifika sedlar urholkar stater ständigt kontanternas värde genom inflation.", "point_3_summary_3": "Bitcoin kan inte ogiltigförklaras av någon stat eller myndighet — det existerar på ett globalt, decentraliserat nätverk som ingen entitet kontrollerar.",
	"point_4_summary_1": "Kontanter kan förfalskas och att upptäcka falska sedlar är ofta svårt utan specialutrustning. Även med säkerhetsdetaljer cirkulerar fortfarande förfalskade pengar. Bitcoin använder kryptografiska bevis som gör förfalskning matematiskt omöjligt.",
	"point_5_summary_1": "Kontanter utfärdas och kontrolleras av stater som kan trycka mer efter behag, ändra design eller förklara vissa sedlar ogiltiga. Bitcoin fungerar på ett decentraliserat nätverk där ingen enskild myndighet har kontroll över penningmängden eller reglerna.",
	"point_6_summary_1": "Kontanter måste förvaras fysiskt, vilket gör dem sårbara för stöld, förlust, brand eller konfiskering. Stora belopp kräver kostsamma säkerhetsåtgärder.", "point_6_summary_2": "Men Bitcoin kan förvaras säkert i eget förvar", "point_6_summary_3": "med en smartphone-app eller en specialiserad plånbok, vilket ger dig full kontroll över dina pengar utan fysiska förvaringsrisker.",
	"point_7_summary_1": "Kontanter har lägsta valörer — ett öre kan inte delas i mindre delar. Bitcoin kan delas i 100 miljoner mindre enheter kallade satoshi, vilket möjliggör mikrobetalningar och exakta transaktioner av valfritt belopp."
});

// bitcoin-vs-cbdc
writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin vs CBDC",
	"cbdc_header": "HUR SKA", "cbdc_header_2": "DIGITALA PENGAR", "cbdc_header_3": "SE UT?",
	"cbdc_intro_1": "Vår värld blir alltmer digital, och det gäller även våra pengar.",
	"cbdc_intro_2": "Det väcker frågan: hur vill vi att våra digitala pengar ska se ut?",
	"cbdc_intro_3": "Många länder undersöker möjligheten att ge ut en digital centralbanksvaluta (CBDC), som är en helt digital form av vår befintliga statliga valuta.",
	"cbdc_intro_4": "Låt oss titta på skillnaden mellan två former av digitala pengar: Bitcoin och digitala centralbanksvalutor (CBDC).",
	"cbdc": "CBDC",
	"cbdc_point_1": "Kräver tillstånd att spendera", "cbdc_point_2": "Dina pengar kan löpa ut", "cbdc_point_3": "Ingen gräns för totalt utbud", "cbdc_point_4": "Kopplat till statligt ID", "cbdc_point_5": "Centraliserade", "cbdc_point_6": "Användare kan inte köra noder", "cbdc_point_7": "Lätt att frysa", "cbdc_point_8": "Måste lita på förvaringsinstitut", "cbdc_point_9": "Föränderlig penningpolitik", "cbdc_point_10": "Osäkra",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Spendera utan tillstånd", "bitcoin_point_2": "Dina pengar löper aldrig ut", "bitcoin_point_3": "Fast utbud på 21M BTC", "bitcoin_point_4": "Pseudonymt", "bitcoin_point_5": "Decentraliserad", "bitcoin_point_6": "Användare kan köra noder", "bitcoin_point_7": "Kan inte frysas", "bitcoin_point_8": "Möjlighet till eget förvar", "bitcoin_point_9": "Förutsägbar penningpolitik", "bitcoin_point_10": "Säker",
	"point_1_summary_1": "Bitcoin är utformat för att ge dig full kontroll över dina pengar.", "point_1_summary_2": "Ingen kan hindra dig från att göra transaktioner med Bitcoin.", "point_1_summary_3": "CBDC är utformade för att ge stater och centralbanker full kontroll över dina pengar.", "point_1_summary_4": "CBDC begränsar din integritet och frihet.",
	"point_2_summary_1": "Bitcoin löper aldrig ut och har inga månatliga avgifter.", "point_2_summary_2": "CBDC kan programmeras att löpa ut.", "point_2_summary_3": "När CBDC löper ut hindras du från att spara för framtiden.",
	"point_3_summary_1": "Bitcoin har ett fast tak på 21 miljoner BTC som någonsin kommer att finnas.", "point_3_summary_2": "CBDC har, liksom de statliga valutor vi använder idag, ingen gräns för det totala utbudet. Denna avsaknad av tak gör det möjligt för staten att expandera penningmängden.", "point_3_summary_3": "Det orsakar inflation.",
	"point_4_summary_1": "Bitcoin-adresser är pseudonyma, vilket innebär att de inte är kopplade till ditt riktiga namn eller identitet. CBDC är direkt kopplade till ditt riktiga namn och identitet, vilket möjliggör massiv finansiell övervakning och censur.",
	"point_5_summary_1": "Bitcoin-nätverket är decentraliserat.", "point_5_summary_2": "Tiotusentals oberoende noder verifierar nätverkets regler.", "point_5_summary_3": "CBDC är centraliserade i händerna på staten och centralbanker som har fullständig kontroll över CBDC-nätverket.",
	"point_6_summary_1": "Bitcoin låter vem som helst köra en nod som verifierar att nätverkets regler följs. CBDC låter ingen köra noder och förlitar sig på tillit till staten och centralbankerna.",
	"point_7_summary_1": "Bitcoin är utformat för att göra det omöjligt för andra att frysa dina pengar. CBDC är utformade för att göra det enkelt för stater och centralbanker att frysa dina pengar.",
	"point_8_summary_1": "Bitcoin är utformat för att ge dig full kontroll över dina pengar.", "point_8_summary_2": "Se bara till att ta ut det till en plånbok med eget förvar.", "point_8_summary_3": "När du har bitcoin i eget förvar kan ingen hindra dig från att komma åt dina pengar.", "point_8_summary_4": "CBDC kräver att du litar på förvaringsinstitut som en bank eller stat att hålla dina pengar åt dig.",
	"point_9_summary_1": "Bitcoin har en förutsägbar penningpolitik som är fast i koden och inte kan ändras. CBDC har, liksom våra valutor idag, en penningpolitik som enkelt kan ändras.", "point_9_summary_2": "Det resulterar i inflation när politiker trycker för mycket pengar.",
	"point_10_summary_1": "Bitcoin är det säkraste datornätverket som någonsin funnits och har aldrig hackats. CBDC förlitar sig på stater och banker för att säkra nätverket, och dessa har hackats otaliga gånger genom historien."
});

// bitcoin-vs-crypto
writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin vs Krypto",
	"crypto_header": "SKILLNADEN MELLAN", "crypto_header_2": "BITCOIN", "crypto_header_3": "OCH", "crypto_header_4": "KRYPTO",
	"crypto_intro_1": "Kryptovalutavärlden har exploderat med tusentals olika digitala tokens och projekt.",
	"crypto_intro_2": "Medan Bitcoin var det första och förblir den mest kända kryptovalutan, är det fundamentalt annorlunda från resten av kryptoindustrin.",
	"crypto_intro_3": "Låt oss titta på de viktigaste skillnaderna mellan Bitcoin och det bredare kryptovalutaekosystemet.",
	"crypto": "KRYPTO",
	"crypto_point_1": "Frekventa ändringar och förgreningar", "crypto_point_2": "Centraliserad kontroll", "crypto_point_3": "Obegränsat eller inflationärt utbud", "crypto_point_4": "Komplexa protokoll", "crypto_point_5": "Experimentell konsensus", "crypto_point_6": "Spekulativa nyttotokens", "crypto_point_7": "Volatila och bräckliga", "crypto_point_8": "Företagsstöd",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Oföränderligt protokoll", "bitcoin_point_2": "Genuint decentraliserad", "bitcoin_point_3": "Fast utbud på 21M BTC", "bitcoin_point_4": "Enkel och tillgänglig", "bitcoin_point_5": "Beprövat Proof of Work", "bitcoin_point_6": "Rena digitala pengar", "bitcoin_point_7": "Antifragil", "bitcoin_point_8": "Ingen entitet kontrollerar det",
	"point_1_summary_1": "Bitcoins protokoll har förblivit i stort sett oförändrat sedan 2009, vilket ger förutsägbara regler som inte enkelt kan ändras. De flesta kryptoprojekt uppdaterar ofta sina protokoll, ändrar tokenomics eller förgrenar sig till nya versioner, vilket skapar osäkerhet för användare.",
	"point_2_summary_1": "Bitcoin fungerar på ett genuint decentraliserat nätverk med tiotusentals oberoende noder över hela världen. Många kryptoprojekt kontrolleras av stiftelser, företag eller små grupper av utvecklare som ensidigt kan fatta beslut om protokollets framtid.",
	"point_3_summary_1": "Bitcoin har ett fast tak på 21 miljoner mynt som någonsin kommer att finnas, vilket gör det till den mest knappa digitala tillgången. De flesta kryptoprojekt har obegränsat utbud, inflationsmekanismer eller möjlighet att prägla nya tokens godtyckligt, vilket späder ut innehavarnas värde över tid.",
	"point_4_summary_1": "Bitcoin har ett enda enkelt syfte: peer-to-peer digitala pengar. Vem som helst kan förstå och använda det med grundläggande kunskap. Många kryptoprojekt involverar komplexa smarta kontrakt, DeFi-protokoll eller styrningsmekanismer som kräver teknisk expertis för säker användning.",
	"point_5_summary_1": "Bitcoin använder Proof of Work-konsensus som har stridstestats i över 15 år utan en enda framgångsrik attack på huvudnätverket. Många kryptoprojekt använder experimentella konsensusmekanismer som Proof of Stake eller delegerade system som ännu inte har bevisat sin långsiktiga säkerhet.",
	"point_6_summary_1": "Bitcoin fungerar som digitala pengar — en värdebevarare och ett bytesmedel. De flesta kryptotokens är nyttotokens för specifika plattformar, styrningstokens eller spekulativa tillgångar med oklart värdeerbjudande.",
	"point_7_summary_1": "Bitcoin blir starkare under attack och har överlevt varje kris, förbud och kritik som riktats mot det. De flesta kryptoprojekt är bräckliga och kan kollapsa under regulatoriskt tryck, tekniska fel eller marknadsnedgångar.",
	"point_8_summary_1": "Bitcoin har ingen VD, inget företag bakom sig och ingen enskild felkälla. Många kryptoprojekt stöds av riskkapitalbolag, har identifierbart ledarskap eller är beroende av specifika företag för sin fortsatta drift."
});

// bitcoin-vs-fine-art
writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin vs Konst",
	"fine_art_header": "SKILLNADEN MELLAN", "fine_art_header_2": "BITCOIN", "fine_art_header_3": "OCH", "fine_art_header_4": "KONST",
	"fine_art_intro_1": "Konst har i århundraden varit en lyxinvestering och betraktas ofta som en värdebevarare av förmögna samlare.",
	"fine_art_intro_2": "Bitcoin är digitala pengar som många också betraktar som en värdebevarare och investering.",
	"fine_art_intro_3": "Men hur skiljer sig fysiska konstverk från digitala pengar som Bitcoin? Låt oss titta på skillnaderna mellan två former av investeringar: Bitcoin och Konst.",
	"fine_art": "KONST",
	"fine_art_point_1": "Varje verk är unikt", "fine_art_point_2": "Kräver specialiserade auktioner", "fine_art_point_3": "Höga auktionsavgifter", "fine_art_point_4": "Kan inte delas upp", "fine_art_point_5": "Kräver expertautentisering", "fine_art_point_6": "Sårbar för skada", "fine_art_point_7": "Bara för förmögna samlare",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Perfekt utbytbar", "bitcoin_point_2": "Global marknad 24/7", "bitcoin_point_3": "Låga transaktionsavgifter", "bitcoin_point_4": "Lätt att dela upp", "bitcoin_point_5": "Kryptografiskt verifierbar", "bitcoin_point_6": "Svår att förstöra", "bitcoin_point_7": "Tillgänglig för alla",
	"point_1_summary_1": "Bitcoin är perfekt utbytbar, vilket innebär att varje bitcoin är identisk och utbytbar mot en annan — en bitcoin är lika med en bitcoin var som helst i världen. Konst är av naturen icke-utbytbar, där varje verk är unikt i sitt skapande, historia, skick och proveniens, vilket gör direkta jämförelser och värderingar extremt svåra.",
	"point_2_summary_1": "Bitcoin handlas på en global marknad 24/7 där vem som helst med internetåtkomst kan köpa eller sälja omedelbart. Konst kräver specialiserade auktionshus som Sotheby's eller Christie's, privata handlare eller exklusiva gallerier. Försäljning kan ta månader och marknadstillgången är begränsad.",
	"point_3_summary_1": "Att köpa eller sälja bitcoin kostar vanligtvis mindre än 1% i avgifter, ofta mycket mindre. Att sälja konst innebär betydande kostnader inklusive köparpremie (10–25%), säljarens provision (10–15%), försäkring, frakt, förvaring och autentiseringsavgifter. Dessa kombinerade kostnader kan lätt överstiga 30–40% av verkets värde i en enda transaktion.",
	"point_4_summary_1": "Bitcoin kan delas i 100 miljoner mindre enheter kallade satoshi, vilket gör det idealiskt för transaktioner i alla storlekar. Konst kan inte delas — du kan inte äga en bråkdel av en målning eller sälja bara en del av en skulptur. Denna odelbarhet begränsar investeringsflexibiliteten.",
	"point_5_summary_1": "Bitcoins ägande och äkthet kan verifieras kryptografiskt på blockkedjan av vem som helst med grundläggande teknisk kunskap. Konst kräver kostsam expertautentisering, proveniensförskning och vetenskaplig analys. Trots expertverifiering lurar förfalskningar regelbundet konstvärlden. Bitcoin kan däremot inte förfalskas.",
	"point_6_summary_1": "Bitcoin kan, om det är korrekt säkerhetskopierat, inte förstöras av översvämningar, bränder, jordbävningar, orkaner, stöld eller andra katastrofer. Konst är sårbar för alla former av fysisk förstörelse och nedbrytning.",
	"point_7_summary_1": "Bitcoin kan köpas och säljas av vem som helst med internetåtkomst och en liten summa pengar att investera. Konstinvesteringar är till stor del begränsade till förmögna samlare på grund av höga minimipriser, exklusiv auktionstillgång, förvaringskrav, försäkringskostnader och specialiserad kunskap."
});

// bitcoin-vs-real-estate
writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin vs Fastigheter",
	"real_estate_header": "SKILLNADEN MELLAN", "real_estate_header_2": "BITCOIN", "real_estate_header_3": "OCH", "real_estate_header_4": "FASTIGHETER",
	"real_estate_intro_1": "Fastigheter har i decennier varit en populär investering och betraktas ofta som stabila värdebevarare.",
	"real_estate_intro_2": "Bitcoin är digitala pengar skapade 2009 och många betraktar det också som en värdebevarare och investering.",
	"real_estate_intro_3": "Men hur skiljer sig fysisk fastighet från digitala pengar som Bitcoin? Låt oss titta på skillnaderna mellan två former av investeringar: Bitcoin och Fastigheter.",
	"real_estate": "FASTIGHETER",
	"real_estate_point_1": "Kan inte flyttas", "real_estate_point_2": "Kan inte enkelt delas upp", "real_estate_point_3": "Underkastad statlig kontroll", "real_estate_point_4": "Kräver ständigt underhåll", "real_estate_point_5": "Underkastad fastighetsskatt", "real_estate_point_6": "Sårbar för naturkatastrofer", "real_estate_point_7": "Varje fastighet är unik", "real_estate_point_8": "Begränsad till lokala köpare",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Globalt överförbar", "bitcoin_point_2": "Lätt att dela upp", "bitcoin_point_3": "Censurresistent", "bitcoin_point_4": "Kräver inget underhåll", "bitcoin_point_5": "Ingen fastighetsskatt", "bitcoin_point_6": "Svår att förstöra", "bitcoin_point_7": "Perfekt utbytbar", "bitcoin_point_8": "Global marknad 24/7",
	"point_1_summary_1": "Bitcoin kan flyttas vart som helst i världen omedelbart via internet. Fastigheter är permanent fixerade på en specifik plats och kan inte flyttas, vilket gör dem sårbara för lokala ekonomiska förhållanden, naturkatastrofer och politisk instabilitet.",
	"point_2_summary_1": "Bitcoin kan delas i 100 miljoner mindre enheter kallade satoshi, vilket gör det idealiskt för transaktioner i alla storlekar. Fastigheter kan inte enkelt delas — du kan inte sälja bara köket i ditt hus eller köpa ett halvt sovrum.",
	"point_3_summary_1": "Bitcoin fungerar på ett decentraliserat nätverk som ingen stat kan kontrollera. Fastigheter är underkastade omfattande statlig reglering inklusive hyresreglering, vräkningsmoratorier, zonlagar och expropriation.",
	"point_4_summary_1": "Bitcoin kräver inget underhåll — det existerar som digital kod på ett nätverk. Fastigheter kräver ständig omvårdnad inklusive reparationer, renoveringar, fastighetsförvaltning, försäkring och hantering av hyresgäster.",
	"point_5_summary_1": "Bitcoin har inga löpande skatter — du betalar bara kapitalvinstskatt vid försäljning. Fastigheter är underkastade årlig fastighetsskatt som måste betalas oavsett om fastigheten genererar inkomst.",
	"point_6_summary_1": "Bitcoin kan, om det är korrekt säkerhetskopierat, inte förstöras av översvämningar, bränder, jordbävningar, orkaner eller andra naturkatastrofer. Fastigheter är sårbara för alla former av fysisk förstörelse.",
	"point_7_summary_1": "Varje bitcoin är identisk och utbytbar mot en annan — en bitcoin är lika med en bitcoin var som helst i världen. Varje fastighet är unik med olika läge, skick och egenskaper, vilket gör värdering och jämförelse svårt.",
	"point_8_summary_1": "Bitcoin kan köpas och säljas 24/7 av vem som helst med internetåtkomst var som helst i världen. Fastighetsförsäljning är begränsad till lokala köpare, kräver långdragna processer med advokater och mäklare och kan ta månader.",
	"bitcoin_point_9": "Stöder individuellt ägande",
	"real_estate_point_9": "Bidrar till finansialisering av boende",
	"point_9_summary_1": "Bitcoin möjliggör direkt individuellt ägande utan mellanhänder och stöder finansiell suveränitet för alla. Att köpa fastigheter som investering utöver din primära bostad bidrar till finansialisering av boende, där hem blir handelsvaror snarare än tak över huvudet. Detta driver upp priserna, minskar tillgängligheten för familjer och bidrar till bostadskrisen och hemlöshet."
});

// bitcoin-vs-stocks
writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin vs Aktier",
	"stocks_header": "SKILLNADEN MELLAN", "stocks_header_2": "BITCOIN", "stocks_header_3": "OCH", "stocks_header_4": "AKTIER",
	"stocks_intro_1": "Aktier har i decennier varit en populär investering och representerar ägarandelar i företag.",
	"stocks_intro_2": "Bitcoin är digitala pengar skapade 2009 som fungerar oberoende av något företag eller stat.",
	"stocks_intro_3": "Men hur skiljer sig att äga andelar i ett företag från att äga digitala pengar som Bitcoin? Låt oss titta på skillnaderna mellan två former av investeringar: Bitcoin och Aktier.",
	"stocks": "AKTIER",
	"stocks_point_1": "Andelar i ett företag", "stocks_point_2": "Utspädningsbar", "stocks_point_3": "Nyckelpersonsrisk", "stocks_point_4": "Värderad med P/E-tal", "stocks_point_5": "Bara under handelstider", "stocks_point_6": "Motpartsrisk", "stocks_point_7": "Varierande inflationsskydd",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Direkt ägande", "bitcoin_point_2": "Fast utbud på 21M BTC", "bitcoin_point_3": "Decentraliserat nätverk", "bitcoin_point_4": "Marknadsbestämt pris", "bitcoin_point_5": "Handel 24/7", "bitcoin_point_6": "Möjlighet till eget förvar", "bitcoin_point_7": "Tillgång med fast utbud",
	"point_1_summary_1": "När du äger Bitcoin har du direkt ägande av själva tillgången. När du äger aktier äger du en andel i ett företag, vilket innebär att din investering beror på företagets prestation, ledningens beslut och affärsframgång.",
	"point_2_summary_1": "Bitcoin har ett fast tak på 21 miljoner BTC som någonsin kommer att finnas.", "point_2_summary_2": "Företag kan ge ut nya aktier när som helst och därmed späda ut befintliga aktieägares procentuella ägande. Det innebär att din andel av företaget minskar när nya aktier skapas.", "point_2_summary_3": "Det är mindre än fiatinflation, men det är fortfarande utspädning.", "point_2_summary_4": "Med Bitcoin krymper din del av kakan aldrig.",
	"point_3_summary_1": "Bitcoin fungerar på ett decentraliserat nätverk utan enskild felkälla. Aktieinvesteringar är föremål för nyckelpersonsrisk — om VD:n eller andra nyckelpersoner lämnar, blir sjuka eller fattar dåliga beslut kan din investering påverkas avsevärt.",
	"point_4_summary_1": "Bitcoins pris bestäms enbart av marknadens utbud och efterfrågan. Aktiepriser värderas ofta med P/E-talet (pris/vinst) som visar hur mycket investerare betalar för varje dollar av ett företags vinst.",
	"point_5_summary_1": "Bitcoin handlas 24 timmar om dygnet, 7 dagar i veckan på globala börser.", "point_5_summary_2": "Bitcoin är decentraliserad", "point_5_summary_3": "och sover aldrig.", "point_5_summary_4": "Aktiemarknader är bara öppna under kontorstid på vardagar, vilket begränsar när du kan köpa eller sälja dina investeringar.",
	"point_6_summary_1": "Med Bitcoin kan du ta dina mynt i eget förvar, vilket innebär att du verkligen äger dem utan beroende av tredje part.", "point_6_summary_2": "Eget förvar är lika enkelt som att ladda ner en app.", "point_6_summary_3": "Aktier kräver ett mäklarkonto och du är exponerad för motpartsrisker — om företaget går i konkurs eller mäklaren fallerar kan du förlora din investering.", "point_6_summary_4": "Aktiecertifikat äger du egentligen inte direkt.",
	"point_7_summary_1": "Bitcoin är en tillgång med fast utbud med ett tak på 21 miljoner Bitcoin som någonsin kommer att finnas. Det gör det till ett utmärkt skydd mot inflation. Aktier har varierande resultat mot inflation — vissa företag presterar bra under inflationsperioder, andra kämpar. Det finns ingen garanti att en specifik aktie skyddar mot inflation."
});

// bitcoin-vs-visa
writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin vs Visa",
	"visa_header": "SKILLNADEN MELLAN", "visa_header_2": "BITCOIN", "visa_header_3": "OCH", "visa_header_4": "VISA",
	"visa_intro_1": "Kreditkort och Bitcoin är båda betalningssystem, men de fungerar väldigt olika.",
	"visa_intro_2": "Kreditkort som Visa är slutna nätverk kontrollerade av finansiella institutioner, medan Bitcoin är ett öppet nätverk som vem som helst kan använda.",
	"visa_intro_3": "Låt oss titta på skillnaderna mellan dessa två betalningsinfrastrukturer: Bitcoin och Visa.",
	"visa": "VISA",
	"visa_point_1": "Slutet nätverk", "visa_point_2": "3% handlaravgifter", "visa_point_3": "Ogenomskinligt system", "visa_point_4": "Kan frysa konton", "visa_point_5": "Skapar skuld med hög ränta", "visa_point_6": "Kräver mellanhänder", "visa_point_7": "Begränsade tider och geografi",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Öppet nätverk", "bitcoin_point_2": "Inga handlaravgifter", "bitcoin_point_3": "Transparent system", "bitcoin_point_4": "Kan inte frysas", "bitcoin_point_5": "Skapar ingen skuld", "bitcoin_point_6": "Möjlighet till eget förvar", "bitcoin_point_7": "Global åtkomst 24/7",
	"point_1_summary_1": "Bitcoin är ett öppet nätverk som vem som helst kan ansluta sig till och använda utan tillstånd. Kreditkortsnätverk som Visa är slutna system kontrollerade av finansiella institutioner som kan neka åtkomst till vem som helst.", "point_1_summary_2": "Det gör Bitcoin mer inkluderande och tillgängligt för människor över hela världen, särskilt de som saknar banktjänster.",
	"point_2_summary_1": "Bitcoin-transaktioner har inga handlaravgifter, medan kreditkortsföretag vanligtvis tar ut cirka 3% per transaktion från handlare.", "point_2_summary_2": "Lär dig hur ditt företag kan spara pengar", "point_2_summary_3": "genom att acceptera Bitcoin-betalningar istället för att betala kreditkortsavgifter.",
	"point_3_summary_1": "Bitcoin fungerar på en transparent blockkedja där alla transaktioner kan verifieras av vem som helst. Kreditkortsnätverk fungerar som slutna, proprietära system där transaktionsdetaljer döljs för allmänheten.", "point_3_summary_2": "Denna transparens gör Bitcoin mer pålitligt och möjliggör oberoende verifiering av nätverkets integritet.",
	"point_4_summary_1": "Kreditkortsföretag kan när som helst frysa konton, blockera transaktioner eller neka service. Bitcoin kan inte frysas eller kontrolleras av någon central myndighet.", "point_4_summary_2": "Med Bitcoin behåller du kontrollen över dina pengar och kan inte stängas ute från betalningssystemet.",
	"point_5_summary_1": "Kreditkort skapar skuld som kan ackumuleras snabbt med höga räntor, ibland överstigande 25% per år.", "point_5_summary_2": "Bitcoin-transaktioner är slutliga avräkningar utan att skapa skuld — du kan bara spendera Bitcoin som du faktiskt äger.",
	"point_6_summary_1": "Bitcoin möjliggör eget förvar, vilket innebär att du kan hålla och kontrollera dina egna pengar utan beroende av banker eller betalningsförmedlare.", "point_6_summary_2": "Lär dig mer om Bitcoin-plånböcker", "point_6_summary_3": "för att förstå hur du kan ta kontroll över dina pengar. Kreditkort kräver alltid mellanhänder som banker och betalningsförmedlare.",
	"point_7_summary_1": "Bitcoin fungerar globalt 24/7 utan handelstider eller geografiska begränsningar.", "point_7_summary_2": "Kreditkortsnätverk har handelstider, underhållsperioder och geografiska begränsningar som kan hindra transaktionsbearbetning."
});

console.log(`\nDone! Created 10 comparison files.`);
