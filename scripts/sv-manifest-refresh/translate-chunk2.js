#!/usr/bin/env node
/**
 * Swedish manifest refresh — chunk 2 of 5.
 *
 * Covers all 10 bitcoin-vs-* comparison-page namespaces:
 *   bitcoin-vs-banks, bitcoin-vs-bonds, bitcoin-vs-cash, bitcoin-vs-cbdc,
 *   bitcoin-vs-crypto, bitcoin-vs-fine-art, bitcoin-vs-gold,
 *   bitcoin-vs-real-estate, bitcoin-vs-stocks, bitcoin-vs-visa.
 *
 * Fills targetTranslation for all entries in the chunk JSON.
 * Idempotent.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const CHUNK_PATH = path.resolve(
	__dirname,
	"chunks",
	"sv-chunk2.json",
);

const T = {};

/* ─────────────── bitcoin-vs-visa (untranslated) ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::bitcoin_point_3": "Transparent system",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::point_1_summary_1":
		"Vem som helst med en internetanslutning kan använda Bitcoin — det är",
	"bitcoin-vs-banks::point_1_summary_2": "tillståndsfritt.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banker kan vägra, frysa eller stänga konton baserat på policy eller myndighetsregler.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin-nätverket körs 24/7/365 utan underhållsavbrott eller helgdagar. Banker har begränsade öppettider, är stängda på helger och har avbrott.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Varje Bitcoin-transaktion ligger på en publik blockkedja som vem som helst kan granska. Banker driver privata huvudböcker som kunder inte kan verifiera självständigt.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Med Bitcoin håller du dina egna privata nycklar — se vår enkla guide om",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin-plånböcker",
	"bitcoin-vs-banks::point_4_summary_3":
		". Banker håller dina pengar och kan frysa, begränsa eller spärra dem när som helst.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin-avgifter är transparenta och förutsägbara. Banker staplar dolda konto-, övertrasserings-, överförings- och bankomatavgifter över tid.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin låter dig bara spendera det du faktiskt äger. Banker tillåter övertrassering och tar sedan ut kaskaderande straffavgifter för privilegiet.",
	"bitcoin-vs-banks::point_7_summary_1":
		"När en Bitcoin-transaktion väl är skickad kan den inte stoppas eller ångras. Banker kan blockera, frysa eller ångra transaktioner baserat på policy eller myndighetsbeslut.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::point_1_summary_1":
		"Obligationer är 'riskfria' bara nominellt — inflation, ränterörelser och fallissemangsrisk äter alla upp den reella avkastningen.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin har transparent volatilitet men ingen dold motpartsrisk.",
	"bitcoin-vs-bonds::point_2_summary_1": "När",
	"bitcoin-vs-bonds::point_2_summary_2": "inflationen",
	"bitcoin-vs-bonds::point_2_summary_3":
		"överstiger obligationsavkastningen förlorar obligationsinnehavare reell köpkraft varje år. Bitcoins tak på 21 miljoner kan inte urholkas av inflation.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Obligationsmarknader kan frysa under kriser — Silicon Valley Bank kollapsade delvis för att de satt fast med obligationer som tappade värde. Se hur",
	"bitcoin-vs-bonds::point_3_summary_2": "bankrusningar",
	"bitcoin-vs-bonds::point_3_summary_3":
		"uppstår och varför Bitcoin undgår dem. Bitcoin handlas globalt 24/7 utan likviditetskriser.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Auktioner av statsobligationer kan misslyckas när det inte finns tillräckligt med köpare — se den",
	"bitcoin-vs-bonds::point_4_summary_2": "svaga auktionen 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bitcoins pris bestäms kontinuerligt på öppna marknader utan en central auktion som kan misslyckas.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Obligationsavkastningar är fasta vid köptillfället. Även om ekonomin blomstrar eller valutan kollapsar förblir din avkastning densamma.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin har utrymme för betydande värdestegring när användningen växer och efterfrågan möter ett fast utbud.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"De flesta obligationer hålls via banker eller mäklare, vilket lägger till motpartsrisk. Bitcoin kan förvaras i eget förvar med en",
	"bitcoin-vs-bonds::point_6_summary_2": "plånbok",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Obligationer är helt beroende av att stater betalar tillbaka. Om en stat fallerar eller urholkar sin skuld med inflation förlorar obligationsinnehavarna.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin fungerar oberoende av varje stat eller politisk myndighet.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin rör sig över internet vart som helst på några minuter. Kontanter kräver fysisk närvaro eller pålitliga kurirer — du kan inte e-posta en 20-dollarssedel.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin fungerar likadant överallt. Kontanter begränsas av geografi, växelkurser och lokal acceptans.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Stater kan ogiltigförklara kontanter över en natt — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indien</a> gjorde det 2016. Även utan demonetisering förlorar kontanter värde till",
	"bitcoin-vs-cash::point_3_summary_2": "inflation.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin kan inte ogiltigförklaras av någon stat eller myndighet.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Kontanter kan förfalskas, ibland övertygande. Bitcoin använder kryptografi som gör förfalskning matematiskt omöjligt.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin har ingen central myndighet. Kontanter ges ut av stater som kan trycka mer, ändra design eller ogiltigförklara sedlar efter behag.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Kontanter är sårbara för stöld, brand, förlust och konfiskering. Bitcoin kan säkert",
	"bitcoin-vs-cash::point_6_summary_2": "förvaras i eget förvar",
	"bitcoin-vs-cash::point_6_summary_3": "på en telefon eller en hårdvaruenhet.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin delas i 100 miljoner sats, vilket möjliggör mikrobetalningar i alla storlekar. Kontanter har lägsta valörer — du kan inte dela ett öre.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin är det säkraste datornätverk som någonsin byggts och har aldrig hackats. CBDC:er förlitar sig på banker och stater som har hackats otaliga gånger.",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Ingen kan hindra dig från att transagera med Bitcoin. CBDC:er är utformade så att stater och centralbanker kan kontrollera varje betalning, vilket begränsar din integritet och frihet.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin löper aldrig ut och har inga månatliga avgifter. CBDC:er kan programmeras att löpa ut, vilket hindrar dig från att spara för framtiden.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin har ett fast tak på 21 miljoner BTC. CBDC:er har inget tak på utbudet, vilket låter stater expandera penningmängden efter behag — vilket orsakar",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflation.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin-adresser är inte kopplade till din riktiga identitet. CBDC:er kopplas direkt till statligt ID, vilket möjliggör massiv finansiell övervakning och censur.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoins regler valideras av tiotusentals oberoende noder. CBDC:er är centraliserade hos staten och centralbanker, som har full kontroll över nätverket.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Vem som helst kan köra en Bitcoin-nod och verifiera nätverkets regler. CBDC:er låter inte användare köra noder — du måste lita på den centrala myndigheten.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin i eget förvar kan inte frysas av någon. CBDC:er är utformade så att stater och centralbanker kan frysa konton omedelbart.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin ger dig full kontroll över dina pengar när du har det i eget förvar med en",
	"bitcoin-vs-cbdc::point_8_summary_2": "plånbok.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC:er kräver att du litar på förvarare som banker eller stater för att hålla dina pengar åt dig.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoins penningpolitik är fast i koden och kan inte ändras. CBDC:er kan omprogrammeras efter behag av politiker, vilket orsakar",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflation",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoins protokoll har varit i grunden detsamma sedan 2009 och ger förutsägbara regler. De flesta kryptoprojekt ändrar ständigt protokoll, tokenomics eller förgrenar sig till nya versioner.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin körs på tiotusentals oberoende noder över hela världen. De flesta kryptoprojekt kontrolleras av stiftelser, företag eller små utvecklarteam som kan göra ensidiga ändringar.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin har ett fast tak på 21 miljoner mynt — den knappaste digitala tillgången. De flesta kryptoprojekt har obegränsat utbud eller mekanismer för att prägla nya tokens efter behag, vilket späder ut innehavarna.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin har ett enda syfte: peer-to-peer digitala pengar. Vem som helst kan förstå och använda det. Det mesta inom krypto involverar komplexa smarta kontrakt eller DeFi som kräver teknisk expertis för säker användning.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoins Proof of Work har körts utan en framgångsrik attack på huvudnätverket i över 15 år. De flesta kryptoprojekt använder experimentell konsensus som inte stridstestats.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin är digitala pengar — en värdebevarare och ett bytesmedel. De flesta kryptotokens är spekulativa nytto- eller styrningstokens med oklart värde i den verkliga världen.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin blir starkare under attack och har överlevt varje kris, förbud och kritik. De flesta kryptoprojekt kollapsar under regulatoriskt, tekniskt eller marknadstryck.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin har ingen VD, inget företag, ingen enskild felkälla. De flesta kryptoprojekt är beroende av riskkapitalbolag, specifikt ledarskap eller ett enda företags överlevnad.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Varje bitcoin är identisk och utbytbar. Varje konstverk är unikt — olika skapande, historia, skick och proveniens gör direkta jämförelser extremt svåra.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin handlas 24/7 på en global marknad som är tillgänglig för vem som helst. Konst kräver specialiserade auktionshus, privata handlare eller gallerier och kan ta månader att sälja.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Att köpa eller sälja Bitcoin kostar mindre än 1% i avgifter, ofta mycket mindre. Konstförsäljning drar på sig 30–40% i köparpremier, provisioner, försäkring, frakt och autentiseringsavgifter.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin delas i 100 miljoner sats, vilket gör det perfekt för transaktioner i alla storlekar. Du kan inte äga en bråkdel av en målning eller ett hörn av en skulptur utan motpartsrisk.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoins ägande och äkthet kan verifieras kryptografiskt av vem som helst on-chain. Konstautentisering är dyr, långsam och luras fortfarande regelbundet av förfalskare — vilket kan förstöra ett verks värde över en natt.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Bitcoin överlever, om det är korrekt säkerhetskopierat, översvämningar, bränder, jordbävningar och stöld. Konst är sårbar för alla former av fysisk förstörelse, och försäkring täcker sällan allt.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Vem som helst med en internetanslutning och lite pengar kan köpa Bitcoin. Konstinvesteringar är i praktiken begränsade till förmögna samlare med auktionstillgång och specialiserad kunskap.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin kan skickas omedelbart över internet till låga avgifter. Guld måste fraktas fysiskt för att överföra ägande.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin är en digitalt nativ tillgång som du kan överföra över internet. Online-guld är en digital skuldsedel — du äger bara ett löfte från en förvarare, inte själva metallen.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin har ett fast tak på 21 miljoner BTC. Guldets utbud växer med ungefär <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6% per år</a>, vilket krymper din andel — mindre än fiat-",
	"bitcoin-vs-gold::point_3_summary_2": "inflation",
	"bitcoin-vs-gold::point_3_summary_3": "— men fortfarande inflation.",
	"bitcoin-vs-gold::point_4_summary_1":
		"När guldpriset stiger bryts mer guld, vilket pressar tillbaka priset. Bitcoins utbud är oelastiskt — oavsett hur högt priset går kommer det aldrig att finnas mer än 21 miljoner.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Tiotusentals oberoende noder validerar Bitcoin-nätverket. Det mesta fysiska guldet ligger i en handfull stora förvaringsvalv.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Vem som helst kan verifiera äkta Bitcoin genom att köra en fullständig nod — det är bara en app. Att verifiera fysiskt guld kräver att man smälter ner det; insidan kan vara wolfram.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin delas i 100 miljoner sats, vilket gör det perfekt för köp i alla storlekar. Guld kan inte enkelt delas för små transaktioner.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin flyttas vart som helst i världen omedelbart. Fastigheter är fixerade på en plats och exponerade för lokala ekonomiska, politiska och naturliga risker.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin delas i 100 miljoner sats. Fastigheter kan inte säljas i delar — du kan inte göra dig av med bara köket eller köpa ett halvt sovrum.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin fungerar på ett decentraliserat nätverk som ingen stat kan kontrollera. Fastigheter är hårt reglerade — zonindelning, hyresreglering, expropriation och beslag gäller alla.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin kräver inget underhåll. Fastigheter kräver reparationer, renoveringar, försäkring, fastighetsförvaltning och hyresgästproblem.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin har inga löpande skatter — du betalar bara kapitalvinstskatt vid försäljning. Fastigheter ådrar sig årlig fastighetsskatt oavsett inkomst.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Bitcoin överlever, om det är korrekt säkerhetskopierat, brand, översvämning och jordbävning. Fastigheter är sårbara för varje katastrof, och försäkring täcker sällan allt.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Varje bitcoin är identisk och utbytbar. Varje fastighet är unik, vilket gör prissättning och jämförelser svåra.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin handlas globalt 24/7 av vem som helst med internetåtkomst. Fastighetsförsäljningar är begränsade till lokala köpare och kan ta månader av pappersarbete att slutföra.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin möjliggör direkt individuellt ägande för vem som helst. Att köpa fastigheter som investering utöver din primära bostad driver upp bostadspriserna, minskar tillgängligheten och eldar på bostadskrisen.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin är en direkt tillgång du äger fullständigt. Aktier är andelar i ett företag — deras värde beror på ledning, prestation och beslut som du inte kan kontrollera.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin har ett fast tak på 21 miljoner BTC. Företag kan ge ut nya aktier när som helst och späda ut befintliga aktieägare — på liknande sätt som fiat-",
	"bitcoin-vs-stocks::point_2_summary_2": "inflation",
	"bitcoin-vs-stocks::point_2_summary_3":
		"späder ut kontanter. Med Bitcoin krymper din andel aldrig.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin har ingen VD och ingen enskild felkälla. Aktier är starkt beroende av ledarskap — ett enda dåligt beslut eller en avhopp kan få priset att rasa.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoins pris kommer från öppna globala marknader. Aktievärderingar förlitar sig på mått som P/E-tal som kan dölja övervärderade aktier.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin handlas 24/7 över hela världen. Aktiemarknader är bara öppna under kontorstid på vardagar.",
	"bitcoin-vs-stocks::point_6_summary_1": "Du kan ta",
	"bitcoin-vs-stocks::point_6_summary_2": "eget förvar",
	"bitcoin-vs-stocks::point_6_summary_3":
		"av Bitcoin med en enkel app — ingen mäklare behövs. Aktier ligger hos mäklarhus, vilket exponerar dig för motpartsrisk om de fallerar.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoins fasta utbud gör det till ett pålitligt skydd mot inflation. Vissa aktier slår inflationen, andra inte — det finns ingen garanti.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin är ett öppet nätverk som vem som helst kan ansluta sig till och använda utan tillstånd. Visa är ett slutet system kontrollerat av finansinstitut som kan neka åtkomst — särskilt till de bank- och underbanklösa.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin-transaktioner har inga handlaravgifter. Visa tar vanligtvis ut cirka 3% per transaktion av handlare — ditt företag kan spara pengar genom att acceptera",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin-betalningar",
	"bitcoin-vs-visa::point_2_summary_3": "istället.",
	"bitcoin-vs-visa::point_3_summary_1":
		"Varje Bitcoin-transaktion ligger på en publik, granskningsbar blockkedja. Visa driver ett slutet, proprietärt system där kunder inte kan verifiera något självständigt.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin kan inte frysas av någon central myndighet. Visa kan frysa konton, blockera transaktioner eller neka service när som helst.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin är slutbetalning — du kan bara spendera det du äger. Kreditkort skapar skuld med räntor som ofta överstiger 25% per år.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin låter dig ta",
	"bitcoin-vs-visa::point_6_summary_2": "eget förvar",
	"bitcoin-vs-visa::point_6_summary_3":
		"utan att behöva en bank eller betalningsförmedlare. Kreditkort kräver alltid mellanhänder.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin fungerar globalt 24/7 utan handelstider. Visa har öppettider, underhållsavbrott och geografiska begränsningar som kan blockera transaktioner.",
});

/* ─────────────── manifest-added (hero_titles + others) ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">banker</span>",
	"bitcoin-vs-bonds::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">obligationer</span>",
	"bitcoin-vs-bonds::point_6_summary_3": " — vilket eliminerar den risken helt.",
	"bitcoin-vs-cash::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">kontanter</span>",
	"bitcoin-vs-cbdc::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">CBDC:er</span>",
	"bitcoin-vs-cbdc::point_9_summary_3": " när alltför mycket pengar trycks.",
	"bitcoin-vs-crypto::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">krypto</span>",
	"bitcoin-vs-fine-art::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">konst</span>",
	"bitcoin-vs-gold::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">guld</span>",
	"bitcoin-vs-real-estate::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">fastigheter</span>",
	"bitcoin-vs-stocks::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">aktier</span>",
	"bitcoin-vs-visa::hero_title":
		"Skillnaden mellan <span class=\"orange\">Bitcoin</span> och <span class=\"asset\">Visa</span>",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const raw = fs.readFileSync(CHUNK_PATH, "utf8");
	const data = JSON.parse(raw);

	let filled = 0;
	let skipped = 0;
	const missing = [];

	for (const entry of data.entries) {
		const k = `${entry.namespace}::${entry.key}`;
		if (Object.prototype.hasOwnProperty.call(T, k)) {
			entry.targetTranslation = T[k];
			filled++;
		} else {
			skipped++;
			missing.push(k);
		}
	}

	fs.writeFileSync(CHUNK_PATH, JSON.stringify(data, null, "\t") + "\n", "utf8");

	console.log(`sv-chunk2: filled ${filled} / ${data.entries.length} entries.`);
	if (skipped > 0) {
		console.log(`Missing translations for ${skipped} entries:`);
		for (const m of missing) console.log(`  - ${m}`);
		process.exitCode = 1;
	}
}

main();
