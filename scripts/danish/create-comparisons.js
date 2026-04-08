/**
 * Creates Danish (da) translation files for all bitcoin-vs-* comparison pages
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

// bitcoin-vs-gold
writeFile(`bitcoin-vs-gold_${lang}.json`, {
	"bitcoin_vs_gold": "Bitcoin vs guld",
	"gold_header": "FORSKELLEN MELLEM", "gold_header_2": "BITCOIN", "gold_header_3": "OG", "gold_header_4": "GULD",
	"gold_intro_1": "Guld har været brugt som penge i tusindvis af år og betragtes af mange som en finansiel sikker havn.",
	"gold_intro_2": "Bitcoin er digitale penge skabt i 2009 og betragtes også af mange som en finansiel sikker havn.",
	"gold_intro_3": "Men hvordan adskiller et fysisk metal som guld sig fra digitale penge som Bitcoin? Lad os se på forskellene mellem to former for penge: Bitcoin og guld.",
	"gold": "GULD",
	"gold_point_1": "Skal sendes fysisk", "gold_point_2": "Digitale gældsbreve", "gold_point_3": "Udbuddet stiger hvert år", "gold_point_4": "Elastisk", "gold_point_5": "Fysisk centraliseret", "gold_point_6": "Svært at verificere", "gold_point_7": "Svært at dele",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Kan sendes over internettet", "bitcoin_point_2": "Digitalt fra starten", "bitcoin_point_3": "Fast udbud på 21M BTC", "bitcoin_point_4": "Uelastisk", "bitcoin_point_5": "Decentraliseret", "bitcoin_point_6": "Nemt at verificere", "bitcoin_point_7": "Nemt at dele",
	"point_1_summary_1": "Fordi Bitcoin er digitalt, kan det sendes næsten øjeblikkeligt med meget lave gebyrer af alle med internetadgang. Fordi guld er fysisk, kan det ikke flyttes over internettet og skal sendes fysisk for at overføre ejerskab.",
	"point_2_summary_1": "Bitcoin er et digitalt oprindeligt aktiv, hvilket betyder, at du kan overføre fuldt ejerskab over internettet. Nogle virksomheder tilbyder muligheden for at købe guld online uden at modtage det faktiske fysiske guld, men i stedet stole på, at virksomheden opbevarer guldet for dig. Dette er mere som et digitalt gældsbrev, da du kun ejer et løfte fra virksomheden i stedet for det faktiske aktiv.",
	"point_3_summary_1": "Bitcoin har en hård grænse på 21 millioner BTC, der nogensinde vil eksistere.",
	"point_3_summary_2": "Nyt guldudbud hentes ud af jorden hvert år, hvilket resulterer i inflation af det samlede udbud. Det anslås, at det samlede udbud af guld stiger med cirka 1,6% om året, hvilket betyder, at din del af kagen skrumper med 1,6% om året.",
	"point_3_summary_3": "Dette er mindre end fiat-inflation, men det er stadig inflation.",
	"point_3_summary_4": "Med Bitcoin skrumper din del af kagen aldrig.",
	"point_4_summary_1": "Guld har et elastisk udbud, hvilket betyder, at når guldprisen stiger, er der større incitament til at mine mere guld. Dette lægger ofte nedadgående pres på guldprisen, når nye miner åbnes.",
	"point_4_summary_2": "Med Bitcoin, uanset hvor høj prisen går, kan du ikke lave mere end 21M Bitcoin.",
	"point_4_summary_3": "Bitcoin er det første aktiv med et uelastisk forhold mellem pris og udbud.",
	"point_5_summary_1": "Bitcoin-netværket er decentraliseret.", "point_5_summary_2": "Titusindvis af uafhængige noder validerer reglerne i netværket.", "point_5_summary_3": "Brugere kan selvopbevare deres Bitcoin ved at downloade en app.", "point_5_summary_4": "Selvom det er muligt at selvopbevare fysisk guld, opbevares det meste af fysisk guld i enorme bokse ejet af forvaltere, hvilket gør det fysisk centraliseret.",
	"point_6_summary_1": "Med Bitcoin er det utroligt nemt at verificere, at du har ægte Bitcoin ved at selvopbevare dine mønter og køre en fuld node.", "point_6_summary_2": "Selvopbevaring er lige så nemt som at downloade en app.", "point_6_summary_3": "En fuld node er et simpelt software, der sikrer, at reglerne i netværket følges, og verificerer, at du har ægte Bitcoin.", "point_6_summary_4": "Fysisk guld kan være meget svært at verificere som ægte. Selvom du verificerer, at den ydre del af fysisk guld er ægte, kan indersiden af dit fysiske guldstykke være wolfram eller et andet metal, der ikke er guld. Den eneste måde virkelig at verificere, at du ejer det fysiske guld, du tror du gør, er at smelte det ned.",
	"point_7_summary_1": "Ligesom der er 100 øre i 1 krone, er der 100.000.000 sats i 1 Bitcoin. Dette gør, at Bitcoin kan bruges til alle størrelser af køb, inklusive mikrotransaktioner så små som et par øre.", "point_7_summary_2": "Dette gør Bitcoin godt for virksomheder.", "point_7_summary_3": "Fordi fysisk guld er svært at dele, kan det ikke nemt bruges til køb, især små køb."
});

// bitcoin-vs-banks
writeFile(`bitcoin-vs-banks_${lang}.json`, {
	"bitcoin_vs_banks": "Bitcoin vs banker",
	"banks_header": "FORSKELLEN MELLEM", "banks_header_2": "BITCOIN", "banks_header_3": "OG", "banks_header_4": "BANKER",
	"banks_intro_1": "Banker har kontrolleret penge i århundreder og fungeret som mellemmænd for finansielle transaktioner og gatekeepere for pengesystemet.",
	"banks_intro_2": "Bitcoin er et peer-to-peer digitalt pengesystem, der fungerer uden banker eller centrale myndigheder.",
	"banks_intro_3": "Men hvordan adskiller Bitcoin-netværket sig fra det traditionelle banksystem? Lad os udforske de vigtigste forskelle mellem disse to fundamentalt forskellige tilgange til penge.",
	"banks": "BANKER",
	"banks_point_1": "Kræver tilladelse", "banks_point_2": "Begrænsede åbningstider", "banks_point_3": "Private, ugennemsigtige operationer", "banks_point_4": "Kontrollerer dine penge", "banks_point_5": "Variable gebyrer", "banks_point_6": "Tillader overtræk med gebyrer", "banks_point_7": "Kan blokere transaktioner",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Tilladelsesløs adgang", "bitcoin_point_2": "Altid tilgængelig 24/7", "bitcoin_point_3": "Transparent og åbent", "bitcoin_point_4": "Du kontrollerer dine penge", "bitcoin_point_5": "Forudsigelige, lave gebyrer", "bitcoin_point_6": "Kan ikke overtrækkes", "bitcoin_point_7": "Censurresistent",
	"point_1_summary_1": "Bitcoin er tilladelsesløst, hvilket betyder, at alle med internetadgang kan bruge det uden at bede om godkendelse fra nogen myndighed.", "point_1_summary_2": "Bitcoin fungerer uden gatekeepere", "point_1_summary_3": "– ingen kan nægte dig adgang. Banker kan derimod nægte at åbne konti, fryse eksisterende konti eller nægte tjenester baseret på deres retningslinjer eller myndighedernes reguleringer.",
	"point_2_summary_1": "Bitcoin-netværket fungerer 24 timer i døgnet, 7 dage om ugen, 365 dage om året uden vedligeholdelsesvinduer eller helligdage. Banker har begrænsede åbningstider, lukker i weekender og på helligdage og har ofte vedligeholdelsesperioder, hvor tjenester er utilgængelige.",
	"point_3_summary_1": "Alle Bitcoin-transaktioner registreres på en offentlig blockchain, som enhver kan verificere og revidere.", "point_3_summary_2": "Banker opererer med private hovedbøger og ugennemsigtige interne processer, som kunder ikke uafhængigt kan verificere.",
	"point_4_summary_1": "Med Bitcoin kan du holde dine egne private nøgler og have fuld kontrol over dine penge.", "point_4_summary_2": "Lær om Bitcoin-wallets", "point_4_summary_3": "for at forstå selvopbevaring. Banker holder dine penge på deres konti og kan fryse, begrænse eller spærre adgangen til dine midler når som helst.",
	"point_5_summary_1": "Bitcoin-transaktionsgebyrer er transparente, forudsigelige og typisk meget lave. Banker har ofte skjulte gebyrer, månedlige kontogebyrer, overtræksgebyrer, overførselsgebyrer, hæveautomatgebyrer og andre gebyrer, der kan udgøre betydelige beløb over tid.",
	"point_6_summary_1": "Bitcoin forhindrer dig i at bruge penge, du ikke har – du kan kun bruge Bitcoin, du faktisk ejer. Banker tillader overtræk (at bruge mere end kontosaldoen) og opkræver derefter betydelige gebyrer for denne «tjeneste», hvilket ofte fører til kaskadende strafgebyrer.",
	"point_7_summary_1": "Bitcoin-transaktioner er censurresistente – når de er sendt til netværket, kan de ikke stoppes eller tilbageføres af nogen central myndighed. Banker kan blokere, fryse, tilbageføre eller begrænse transaktioner baseret på deres retningslinjer, myndighedsordrer eller algoritmer for mistænkelig aktivitet."
});

// bitcoin-vs-stocks
writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin vs aktier",
	"stocks_header": "FORSKELLEN MELLEM", "stocks_header_2": "BITCOIN", "stocks_header_3": "OG", "stocks_header_4": "AKTIER",
	"stocks_intro_1": "Aktier har været en populær investering i årtier og repræsenterer ejerandele i virksomheder.",
	"stocks_intro_2": "Bitcoin er digitale penge skabt i 2009, der fungerer uafhængigt af enhver virksomhed eller myndighed.",
	"stocks_intro_3": "Men hvordan adskiller det at eje aktier i en virksomhed sig fra at eje digitale penge som Bitcoin? Lad os se på forskellene mellem to former for investering: Bitcoin og aktier.",
	"stocks": "AKTIER",
	"stocks_point_1": "Andele i en virksomhed", "stocks_point_2": "Udvandbart udbud", "stocks_point_3": "Nøglepersonrisiko", "stocks_point_4": "P/E-værdiansættelser", "stocks_point_5": "Kun i markedstiden", "stocks_point_6": "Modpartsrisiko", "stocks_point_7": "Variabel inflationsbeskyttelse",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Direkte ejerskab", "bitcoin_point_2": "Fast udbud på 21M BTC", "bitcoin_point_3": "Decentraliseret netværk", "bitcoin_point_4": "Markedsdrevet pris", "bitcoin_point_5": "24/7 handel", "bitcoin_point_6": "Selvopbevaring mulig", "bitcoin_point_7": "Aktiv med fast udbud",
	"point_1_summary_1": "Når du ejer Bitcoin, har du direkte ejerskab til selve aktivet. Når du ejer aktier, ejer du en andel af en virksomhed, hvilket betyder, at din investering afhænger af virksomhedens resultater, ledelsesbeslutninger og forretningssucces.",
	"point_2_summary_1": "Bitcoin har en hård grænse på 21 millioner BTC, der nogensinde vil eksistere.", "point_2_summary_2": "Virksomheder kan udstede nye aktier når som helst, hvilket udvander eksisterende aktionærers ejerandel. Det betyder, at din andel af virksomheden bliver mindre, når nye aktier oprettes.", "point_2_summary_3": "Dette er mindre end fiat-inflation, men det er stadig udvanding.", "point_2_summary_4": "Med Bitcoin skrumper din del af kagen aldrig.",
	"point_3_summary_1": "Bitcoin fungerer på et decentraliseret netværk uden noget enkelt fejlpunkt. Aktieinvesteringer er udsat for nøglepersonrisiko – hvis administrerende direktør eller andre vigtige ledere stopper, bliver syge eller træffer dårlige beslutninger, kan din investering lide betydeligt. Virksomheder er stærkt afhængige af deres ledelsesteam.",
	"point_4_summary_1": "Bitcoins pris bestemmes udelukkende af markedets udbud og efterspørgsel. Aktiepriser evalueres ofte ved hjælp af P/E-forhold (pris-til-indtjening), der viser, hvor meget investorer betaler for hver dollar af virksomhedens indtjening. Høje P/E-forhold kan indikere overvurderede aktier, hvilket gør det sværere at bestemme den rigtige værdi.",
	"point_5_summary_1": "Bitcoin handles 24 timer i døgnet, 7 dage om ugen på globale børser.", "point_5_summary_2": "Bitcoin er decentraliseret", "point_5_summary_3": "og sover aldrig.", "point_5_summary_4": "Aktiemarkederne er kun åbne i arbejdstiden på hverdage, hvilket begrænser, hvornår du kan købe eller sælge dine investeringer.",
	"point_6_summary_1": "Med Bitcoin kan du selvopbevare dine mønter, hvilket betyder, at du virkelig ejer dem uden at være afhængig af nogen tredjepart.", "point_6_summary_2": "Selvopbevaring er lige så nemt som at downloade en app.", "point_6_summary_3": "Aktier kræver en mæglerkonto, og du er udsat for modpartsrisiko – hvis virksomheden går konkurs eller mægleren fejler, kan du miste din investering.", "point_6_summary_4": "Du ejer aldrig aktiecertifikaterne direkte.",
	"point_7_summary_1": "Bitcoin er et aktiv med fast udbud med en hård grænse på 21 millioner Bitcoin, der nogensinde vil eksistere. Dette gør det til en fremragende inflationsbeskyttelse. Aktier har variabel ydeevne mod inflation – nogle virksomheder klarer sig godt i inflationsperioder, mens andre kæmper. Der er ingen garanti for, at nogen bestemt aktie vil beskytte mod inflation."
});

// bitcoin-vs-cbdc
writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin vs CBDC'er",
	"cbdc_header": "HVORDAN BØR", "cbdc_header_2": "DIGITALE PENGE", "cbdc_header_3": "SE UD?",
	"cbdc_intro_1": "Vores verden bliver stadig mere digital, og det gælder også vores penge.",
	"cbdc_intro_2": "Det rejser spørgsmålet: hvordan vil vi have, at vores digitale penge skal se ud?",
	"cbdc_intro_3": "Mange lande udforsker at udstede en centralbank digital valuta (CBDC), som er en fuldstændig digital form af vores eksisterende statsvaluta.",
	"cbdc_intro_4": "Lad os se på forskellen mellem to former for digitale penge: Bitcoin og centralbank digitale valutaer (CBDC'er).",
	"cbdc": "CBDC",
	"cbdc_point_1": "Kræver tilladelse for at bruge", "cbdc_point_2": "Dine penge kan udløbe", "cbdc_point_3": "Ingen grænse for samlet udbud", "cbdc_point_4": "Knyttet til offentligt ID", "cbdc_point_5": "Centraliseret", "cbdc_point_6": "Brugere kan ikke køre noder", "cbdc_point_7": "Nemt at fryse", "cbdc_point_8": "Skal stole på forvaltere", "cbdc_point_9": "Ændret pengepolitik", "cbdc_point_10": "Usikkert",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Brug uden tilladelse", "bitcoin_point_2": "Dine penge udløber aldrig", "bitcoin_point_3": "Fast udbud på 21M BTC", "bitcoin_point_4": "Pseudonymt", "bitcoin_point_5": "Decentraliseret", "bitcoin_point_6": "Brugere kan køre noder", "bitcoin_point_7": "Kan ikke fryses", "bitcoin_point_8": "Kan selvopbevares", "bitcoin_point_9": "Forudsigelig pengepolitik", "bitcoin_point_10": "Sikkert",
	"point_1_summary_1": "Bitcoin er designet til at give dig total kontrol over dine penge.", "point_1_summary_2": "Ingen kan stoppe dig fra at foretage transaktioner med Bitcoin.", "point_1_summary_3": "CBDC'er er designet til at give regeringer og centralbanker total kontrol over dine penge.", "point_1_summary_4": "CBDC'er begrænser dit privatliv og din frihed.",
	"point_2_summary_1": "Bitcoin udløber aldrig og har ingen månedlige gebyrer.", "point_2_summary_2": "CBDC'er kan programmeres til at udløbe.", "point_2_summary_3": "Når CBDC'er udløber, forhindrer de dig i at spare til fremtiden.",
	"point_3_summary_1": "Bitcoin har en hård grænse på 21 millioner BTC, der nogensinde vil eksistere.", "point_3_summary_2": "CBDC'er har, ligesom de statsvalutaer vi bruger i dag, ingen grænse for det samlede udbud. Denne mangel på grænse for det samlede udbud lader myndighederne udvide pengemængden.", "point_3_summary_3": "Dette forårsager inflation.",
	"point_4_summary_1": "Bitcoin-adresser er pseudonyme, hvilket betyder, at de ikke er knyttet til dit rigtige navn eller identitet. CBDC'er er direkte knyttet til dit rigtige navn og identitet, hvilket muliggør massiv finansiel overvågning og censur.",
	"point_5_summary_1": "Bitcoin-netværket er decentraliseret.", "point_5_summary_2": "Titusindvis af uafhængige noder validerer reglerne i netværket.", "point_5_summary_3": "CBDC'er er centraliseret i hænderne på myndighederne og centralbanker, som giver dem fuld kontrol over CBDC-netværket.",
	"point_6_summary_1": "Bitcoin lader enhver køre en node, der verificerer, at reglerne i netværket følges. CBDC'er lader ingen køre noder og er afhængig af tillid til myndighederne og centralbanker.",
	"point_7_summary_1": "Bitcoin er designet til at gøre det umuligt for andre at fryse dine penge. CBDC'er er designet til at gøre det nemt for myndigheder og centralbanker at fryse dine penge.",
	"point_8_summary_1": "Bitcoin er designet til at give dig fuld kontrol over dine penge.", "point_8_summary_2": "Bare sørg for at trække ud til en selvopbevarende wallet.", "point_8_summary_3": "Når du selvopbevarer din bitcoin, kan ingen stoppe dig fra at få adgang til dine penge.", "point_8_summary_4": "CBDC'er kræver, at du stoler på forvaltere, som en bank eller myndighed, til at holde dine penge for dig.",
	"point_9_summary_1": "Bitcoin har en forudsigelig pengepolitik, der er fastlagt i kode og ikke kan ændres. CBDC'er har, som vores valutaer i dag, en pengepolitik, der nemt kan ændres.", "point_9_summary_2": "Dette resulterer i inflation, når politikere trykker for mange penge.",
	"point_10_summary_1": "Bitcoin er det mest sikre computernetværk, der nogensinde har eksisteret og er aldrig blevet hacket. CBDC'er er afhængige af myndigheder og banker for at sikre netværket, som er blevet hacket utallige gange gennem historien."
});

// bitcoin-vs-cash
writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin vs kontanter",
	"cash_header": "FORSKELLEN MELLEM", "cash_header_2": "BITCOIN", "cash_header_3": "OG", "cash_header_4": "KONTANTER",
	"cash_intro_1": "Kontanter har været brugt som penge i århundreder og forbliver den mest almindelige form for fysiske penge over hele verden.",
	"cash_intro_2": "Bitcoin er digitale penge skabt i 2009, der fungerer uafhængigt af enhver myndighed eller central magt.",
	"cash_intro_3": "Men hvordan adskiller fysiske kontanter sig fra digitale penge som Bitcoin? Lad os udforske de vigtigste forskelle mellem disse to former for penge: Bitcoin og kontanter.",
	"cash": "KONTANTER",
	"cash_point_1": "Skal være fysisk til stede", "cash_point_2": "Begrænset af grænser", "cash_point_3": "Kan ugyldiggøres over natten", "cash_point_4": "Kan forfalskes", "cash_point_5": "Statskontrolleret", "cash_point_6": "Fysiske opbevaringsrisici", "cash_point_7": "Begrænset delbarhed",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Kan sendes over internettet", "bitcoin_point_2": "Fungerer globalt", "bitcoin_point_3": "Kan ikke ugyldiggøres", "bitcoin_point_4": "Kan ikke forfalskes", "bitcoin_point_5": "Decentraliseret netværk", "bitcoin_point_6": "Digital selvopbevaring", "bitcoin_point_7": "Nemt delbart",
	"point_1_summary_1": "Bitcoin kan sendes hvor som helst i verden øjeblikkeligt over internettet, mens kontanter kræver fysisk tilstedeværelse eller betroede mellemmænd. Du kan ikke sende kontanter via e-mail, men du kan sende Bitcoin til enhver med internetforbindelse på minutter.",
	"point_2_summary_1": "Bitcoin fungerer på samme måde overalt i verden – der er ingen grænser i Bitcoin-netværket. Kontanter er begrænset af geografi, valutakurser og lokal accept. Prøv at bruge amerikanske dollar på landet i Thailand eller japanske yen på landet i Mexico.",
	"point_3_summary_1": "Myndigheder kan og ugyldiggør kontanter over natten gennem demonetiseringspolitik, som Indien gjorde i 2016, da de forbød visse sedler.", "point_3_summary_2": "Selv uden at forbyde visse sedler devaluerer myndigheder konstant kontanter gennem inflation.", "point_3_summary_3": "Bitcoin kan ikke ugyldiggøres af nogen myndighed – det eksisterer på et globalt, decentraliseret netværk, som ingen enkelt enhed kontrollerer.",
	"point_4_summary_1": "Kontanter kan forfalskes, og det er ofte svært at opdage falske sedler uden specialudstyr. Selv med sikkerhedsfunktioner fortsætter falske kontanter med at cirkulere. Bitcoin bruger kryptografisk bevis, der gør forfalskning matematisk umuligt.",
	"point_5_summary_1": "Kontanter udstedes og kontrolleres af myndigheder, der kan trykke flere efter ønske, ændre design eller erklære visse sedler ugyldige. Bitcoin fungerer på et decentraliseret netværk, hvor ingen enkelt myndighed har kontrol over pengemængden eller reglerne.",
	"point_6_summary_1": "Kontanter skal opbevares fysisk, hvilket gør dem sårbare over for tyveri, tab, brand eller beslaglæggelse. Store beløb kræver dyre sikkerhedsforanstaltninger.", "point_6_summary_2": "Men Bitcoin kan sikkert opbevares i selvopbevaring", "point_6_summary_3": "ved hjælp af en smartphone-app eller en specialiseret wallet, hvilket giver dig fuld kontrol over dine penge uden fysiske opbevaringsrisici.",
	"point_7_summary_1": "Kontanter har minimumsvalører – du kan ikke dele en øre i mindre dele. Bitcoin kan deles i 100 millioner mindre enheder kaldet satoshis, som muliggør mikrobetalinger og præcise transaktioner af ethvert beløb."
});

// bitcoin-vs-bonds
writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin vs obligationer",
	"bonds_header": "FORSKELLEN MELLEM", "bonds_header_2": "BITCOIN", "bonds_header_3": "OG", "bonds_header_4": "OBLIGATIONER",
	"bonds_intro_1": "Statsobligationer kaldes ofte «risikofrie» investeringer og betragtes som det sikreste sted at opbevare formue i traditionel finans.",
	"bonds_intro_2": "Bitcoin er digitale penge, der fungerer uafhængigt af enhver myndighed eller central magt.",
	"bonds_intro_3": "Men er obligationer virkelig risikofrie? Og hvordan sammenligner de sig med Bitcoin som værdiopbevaringsmiddel? Lad os undersøge de vigtigste forskelle mellem Bitcoin og statsobligationer.",
	"bonds": "OBLIGATIONER",
	"bonds_point_1": "Skjulte risici", "bonds_point_2": "Taber værdi til inflation", "bonds_point_3": "Kan blive illikvide", "bonds_point_4": "Mislykkede auktioner", "bonds_point_5": "Fast afkast", "bonds_point_6": "Kræver mellemmænd", "bonds_point_7": "Afhængighed af myndigheder",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Ingen modpartsrisiko", "bitcoin_point_2": "Fast udbud", "bitcoin_point_3": "Altid likvid", "bitcoin_point_4": "Ingen auktionsrisiko", "bitcoin_point_5": "Værdistigningspotentiale", "bitcoin_point_6": "Selvopbevaring mulig", "bitcoin_point_7": "Ingen myndighedsafhængighed",
	"point_1_summary_1": "Obligationer er kun «risikofrie» i nominelle dollartermer, hvilket betyder, at du får dine dollar tilbage, hvis du holder til udløb. Dette ignorerer dog inflationsrisiko, renterisiko og muligheden for, at disse dollar vil være meget mindre værd, når du får dem tilbage.", "point_1_summary_2": "Bitcoin har tydelige, transparente risici (volatilitet) men ingen skjult modpartsrisiko – du ejer enten din Bitcoin, eller du gør ikke.",
	"point_2_summary_1": "Når inflationen er højere end obligationsafkastet, taber obligationsejerne købekraft hvert år. Et obligationsafkast på 2% med 4% inflation betyder, at du taber 2% af reel værdi årligt.", "point_2_summary_2": "Lær mere om inflation.", "point_2_summary_3": "Bitcoins faste udbud på 21 millioner mønter betyder, at det ikke kan inflateres væk, men obligationer kan devalueres af pengetrykning.",
	"point_3_summary_1": "Under finansielle kriser kan obligationsmarkederne fryse og blive illikvide. Banker som Silicon Valley Bank sad fast med obligationer, der tabte betydelig værdi, da renter steg, hvilket bidrog til deres kollaps.", "point_3_summary_2": "Lær hvordan Silicon Valley Bank fejlede, og hvorfor Bitcoin er anderledes.", "point_3_summary_3": "Bitcoin handles 24/7 globalt og har aldrig haft en likviditetskrise – du kan altid finde en køber eller sælger.",
	"point_4_summary_1": "Statsobligationsauktioner kan mislykkes, når der ikke er nok købere til statsgæld. Dette er sket flere gange i de seneste år, herunder svag efterspørgsel efter 10-årsobligationer i 2022 og 30-årsobligationer i 2023.", "point_4_summary_2": "Lær mere om disse mislykkede statsobligationsauktioner.", "point_4_summary_3": "Bitcoins pris opdages gennem kontinuerlige globale markeder uden nogen central auktion, der kan mislykkes.",
	"point_5_summary_1": "Obligationsafkast er fast, når du køber dem. Selvom økonomien vokser hurtigt, eller valutaen devalueres betydeligt, forbliver dit afkast det samme.", "point_5_summary_2": "Bitcoin har potentiale for betydelig værdistigning, efterhånden som adoptionen vokser, og det faste udbud møder stigende efterspørgsel.",
	"point_6_summary_1": "De fleste holder obligationer gennem mellemmænd som banker, mæglere eller fonde, hvilket skaber modpartsrisiko. Du ejer ikke obligationerne direkte.", "point_6_summary_2": "Med Bitcoin kan du tage direkte ejerskab gennem selvopbevaring og eliminere modpartsrisikoen helt.",
	"point_7_summary_1": "Obligationer er helt afhængige af myndighedernes evne og vilje til at betale. Hvis myndigheden står over for en finanskrise, misligholder eller beslutter at inflatere gælden væk, lider obligationsejerne.", "point_7_summary_2": "Bitcoin fungerer uafhængigt af enhver myndighed og kan ikke kontrolleres, inflateres eller misligholdes af politiske myndigheder."
});

// bitcoin-vs-crypto
writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin vs krypto",
	"crypto_header": "FORSKELLEN MELLEM", "crypto_header_2": "BITCOIN", "crypto_header_3": "OG", "crypto_header_4": "KRYPTO",
	"crypto_intro_1": "Kryptovalutamarkedet er eksploderet med tusindvis af forskellige digitale tokens og projekter.",
	"crypto_intro_2": "Mens Bitcoin var den første og stadig er den mest kendte kryptovaluta, er den fundamentalt forskellig fra resten af kryptoindustrien.",
	"crypto_intro_3": "Lad os udforske de vigtigste forskelle mellem Bitcoin og det bredere kryptovalutaøkosystem.",
	"crypto": "KRYPTO",
	"crypto_point_1": "Hyppige ændringer og forgreninger", "crypto_point_2": "Centraliseret kontrol", "crypto_point_3": "Ubegrænset eller inflationært udbud", "crypto_point_4": "Komplekse protokoller", "crypto_point_5": "Eksperimentel konsensus", "crypto_point_6": "Spekulative utility-tokens", "crypto_point_7": "Volatil og skrøbelig", "crypto_point_8": "Virksomhedsstøtte",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Uforanderlig protokol", "bitcoin_point_2": "Virkelig decentraliseret", "bitcoin_point_3": "Fast udbud på 21M BTC", "bitcoin_point_4": "Simpel og tilgængelig", "bitcoin_point_5": "Bevist Proof of Work", "bitcoin_point_6": "Rene digitale penge", "bitcoin_point_7": "Antiskrøbelig", "bitcoin_point_8": "Ingen enkelt enhed kontrollerer det",
	"point_1_summary_1": "Bitcoins protokol er forblevet fundamentalt uændret siden 2009 og giver forudsigelige regler, der ikke nemt kan ændres. De fleste kryptoprojekter opdaterer deres protokoller hyppigt, ændrer tokenøkonomi eller forgrener sig til nye versioner, hvilket skaber usikkerhed for brugerne.",
	"point_2_summary_1": "Bitcoin fungerer på et virkelig decentraliseret netværk med titusindvis af uafhængige noder over hele verden. Mange kryptoprojekter kontrolleres af stiftelser, virksomheder eller små grupper af udviklere, der kan træffe ensidige beslutninger om protokollens fremtid.",
	"point_3_summary_1": "Bitcoin har en hård grænse på 21 millioner mønter, der nogensinde vil eksistere, hvilket gør det til det knappeste digitale aktiv. De fleste kryptoprojekter har ubegrænset udbud, inflationsmekanismer eller kan præge nye tokens efter ønske, hvilket udvander ejernes værdi over tid.",
	"point_4_summary_1": "Bitcoin har ét enkelt formål: peer-to-peer digitale penge. Alle kan forstå og bruge det med grundlæggende viden. Mange kryptoprojekter involverer komplekse smart contracts, DeFi-protokoller eller styringsmekanismer, der kræver teknisk ekspertise for at bruge sikkert.",
	"point_5_summary_1": "Bitcoin bruger Proof of Work-konsensus, der er kamphærdet i over 15 år uden et eneste vellykket angreb på hovednetværket. Mange kryptoprojekter bruger eksperimentelle konsensusmekanismer som Proof of Stake eller delegerede systemer, der ikke har bevist deres langsigtede sikkerhed.",
	"point_6_summary_1": "Bitcoin fungerer som digitale penge – et værdiopbevaringsmiddel og byttemiddel. De fleste kryptotokens er utility-tokens for specifikke platforme, styringstokens eller spekulative aktiver med uklare virkelige værdiforslag.",
	"point_7_summary_1": "Bitcoin bliver stærkere under angreb og har overlevet enhver krise, forbud og kritik, der er blevet kastet mod det. De fleste kryptoprojekter er skrøbelige og kan kollapse under regulatorisk pres, tekniske fejl eller markedsnedgange.",
	"point_8_summary_1": "Bitcoin har ingen administrerende direktør, ingen virksomhed bag sig og intet enkelt fejlpunkt. Mange kryptoprojekter er støttet af venturekapitalfirmaer, har identificerbare ledelsesteam eller er afhængige af specifikke virksomheder for deres fortsatte drift."
});

// bitcoin-vs-fine-art
writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin vs kunst",
	"fine_art_header": "FORSKELLEN MELLEM", "fine_art_header_2": "BITCOIN", "fine_art_header_3": "OG", "fine_art_header_4": "KUNST",
	"fine_art_intro_1": "Kunst har været en luksuriøs investering i århundreder og betragtes ofte som et værdiopbevaringsmiddel af velhavende samlere.",
	"fine_art_intro_2": "Bitcoin er digitale penge, der også af mange betragtes som et værdiopbevaringsmiddel og investering.",
	"fine_art_intro_3": "Men hvordan adskiller fysisk kunstvæk sig fra digitale penge som Bitcoin? Lad os se på forskellene mellem to former for investering: Bitcoin og kunst.",
	"fine_art": "KUNST",
	"fine_art_point_1": "Hvert stykke er unikt", "fine_art_point_2": "Kræver specialiserede auktioner", "fine_art_point_3": "Høje auktionsgebyrer", "fine_art_point_4": "Kan ikke deles", "fine_art_point_5": "Kræver ekspertautentificering", "fine_art_point_6": "Sårbar over for skade", "fine_art_point_7": "Begrænset til velhavende samlere",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Perfekt fungibelt", "bitcoin_point_2": "24/7 globalt marked", "bitcoin_point_3": "Lave transaktionsgebyrer", "bitcoin_point_4": "Nemt delbart", "bitcoin_point_5": "Kryptografisk verificerbart", "bitcoin_point_6": "Svært at ødelægge", "bitcoin_point_7": "Tilgængeligt for alle",
	"point_1_summary_1": "Bitcoin er perfekt fungibelt, hvilket betyder, at hver bitcoin er identisk og udskiftelig – én bitcoin er lig med én bitcoin hvor som helst i verden. Kunst er ikke-fungibel af natur, med hvert stykke unikt i sin skabelse, historie, tilstand og proveniens, hvilket gør direkte sammenligninger og værdiansættelser ekstremt vanskelige.",
	"point_2_summary_1": "Bitcoin handles på et globalt 24/7-marked, hvor enhver med internetadgang kan købe eller sælge øjeblikkeligt. Kunst kræver specialiserede auktionshuse som Sotheby's eller Christie's, private forhandlere eller eksklusive gallerier. Salg kan tage måneder at arrangere og gennemføre, med begrænset markedsadgang og uregelmæssige handelsmuligheder.",
	"point_3_summary_1": "At købe eller sælge bitcoin koster typisk mindre end 1% i gebyrer, ofte meget mindre. Kunstsalg involverer betydelige omkostninger inklusive køberpræmier (10-25%), sælgerprovision (10-15%), forsikring, transport, opbevaring og autentificeringsgebyrer. Disse kombinerede omkostninger kan nemt overstige 30-40% af kunstværkets værdi i en enkelt transaktion.",
	"point_4_summary_1": "Bitcoin kan deles i 100 millioner mindre enheder kaldet satoshis, hvilket gør det perfekt til transaktioner af enhver størrelse fra mikrobetalinger til store køb. Kunst kan ikke deles – du kan ikke eje en brøkdel af et maleri eller sælge kun en del af en skulptur. Denne udelelighed begrænser investeringsfleksibilitet og likviditetsmuligheder.",
	"point_5_summary_1": "Bitcoin-ejerskab og ægthed kan kryptografisk verificeres på blockchainen af enhver med grundlæggende teknisk viden. Kunst kræver dyr ekspertautentificering, proveniensforskning og videnskabelig analyse. Selv med ekspertverificering narrer forfalskninger regelmæssigt kunstverdenen, og autentificeringstvister kan ødelægge et kunstværks værdi over natten. Bitcoin kan derimod ikke forfalskes.",
	"point_6_summary_1": "Bitcoin kan, når det er sikkerhedskopieret korrekt, ikke ødelægges af oversvømmelser, brande, jordskælv, orkaner, tyveri eller andre katastrofer. Kunst er sårbar over for alle former for fysisk ødelæggelse og forringelse. Selv med dyr klimakontrolleret opbevaring og omfattende forsikring kan kunstværker blive beskadiget af miljøfaktorer, ulykker eller naturkatastrofer og potentielt miste al værdi.",
	"point_7_summary_1": "Bitcoin kan købes og sælges af enhver med internetadgang og et lille beløb at investere. Kunstinvestering er i stor grad begrænset til velhavende samlere på grund af høje minimumspriser, eksklusiv auktionstilgang, opbevaringskrav, forsikringsomkostninger og den specialiserede viden, der kræves for at navigere kunstmarkedet med succes."
});

// bitcoin-vs-real-estate
writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin vs fast ejendom",
	"real_estate_header": "FORSKELLEN MELLEM", "real_estate_header_2": "BITCOIN", "real_estate_header_3": "OG", "real_estate_header_4": "FAST EJENDOM",
	"real_estate_intro_1": "Fast ejendom har været en populær investering i årtier og betragtes ofte som et stabilt værdiopbevaringsmiddel.",
	"real_estate_intro_2": "Bitcoin er digitale penge skabt i 2009 og betragtes også af mange som et værdiopbevaringsmiddel og investering.",
	"real_estate_intro_3": "Men hvordan adskiller fysisk ejendom sig fra digitale penge som Bitcoin? Lad os se på forskellene mellem to former for investering: Bitcoin og fast ejendom.",
	"real_estate": "FAST EJENDOM",
	"real_estate_point_1": "Kan ikke flyttes", "real_estate_point_2": "Kan ikke nemt deles", "real_estate_point_3": "Underlagt myndighedskontrol", "real_estate_point_4": "Kræver konstant vedligeholdelse", "real_estate_point_5": "Underlagt ejendomsskat", "real_estate_point_6": "Sårbar over for naturkatastrofer", "real_estate_point_7": "Hver ejendom er unik", "real_estate_point_8": "Begrænset til lokale købere",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Globalt bærbart", "bitcoin_point_2": "Nemt delbart", "bitcoin_point_3": "Censurresistent", "bitcoin_point_4": "Ingen vedligeholdelse nødvendig", "bitcoin_point_5": "Ingen ejendomsskat", "bitcoin_point_6": "Svært at ødelægge", "bitcoin_point_7": "Perfekt fungibelt", "bitcoin_point_8": "Globalt 24/7 marked",
	"point_1_summary_1": "Bitcoin kan flyttes hvor som helst i verden øjeblikkeligt over internettet. Fast ejendom er permanent bundet til en specifik placering og kan ikke flyttes, hvilket gør det sårbart over for lokale økonomiske forhold, naturkatastrofer og politisk ustabilitet.",
	"point_2_summary_1": "Bitcoin kan deles i 100 millioner mindre enheder kaldet satoshis, hvilket gør det perfekt til transaktioner af enhver størrelse. Fast ejendom kan ikke nemt deles – du kan ikke sælge kun køkkenet i dit hus eller købe halvdelen af et soveværelse.",
	"point_3_summary_1": "Bitcoin fungerer på et decentraliseret netværk, som ingen myndighed kan kontrollere. Fast ejendom er underlagt omfattende myndighedsregulering inklusive huslejeregulering, moratorier på udsættelse, zonelove og ekspropriation, hvor myndigheder kan beslaglægge din ejendom.",
	"point_4_summary_1": "Bitcoin kræver ingen vedligeholdelse – det eksisterer som digital kode på et netværk. Fast ejendom kræver konstant vedligeholdelse inklusive reparationer, renoveringer, ejendomsforvaltning, forsikring og håndtering af lejere, hvis det udlejes.",
	"point_5_summary_1": "Bitcoin har ingen løbende skatter – du betaler kun kapitalgevinstskat, når du sælger. Fast ejendom er underlagt årlig ejendomsskat, der skal betales uanset om ejendommen genererer indkomst, hvilket effektivt tvinger dig til at leje din egen ejendom af myndighederne for altid.",
	"point_6_summary_1": "Bitcoin kan, når det er sikkerhedskopieret korrekt, ikke ødelægges af oversvømmelser, brande, jordskælv, orkaner eller andre naturkatastrofer. Fast ejendom er sårbar over for alle former for fysisk ødelæggelse og kræver dyr forsikring, der måske ikke fuldt dækker tab.",
	"point_7_summary_1": "Hver bitcoin er identisk og udskiftelig – én bitcoin er lig med én bitcoin hvor som helst i verden. Hver ejendom er unik med forskellige placeringer, tilstande og egenskaber, hvilket gør det svært at prissætte og sammenligne ejendomme.",
	"point_8_summary_1": "Bitcoin kan købes og sælges 24/7 af enhver med internetadgang hvor som helst i verden. Ejendomssalg er begrænset til lokale købere, kræver langvarige processer med advokater og ejendomsmæglere og kan tage måneder at gennemføre.",
	"bitcoin_point_9": "Fremmer individuelt ejerskab",
	"real_estate_point_9": "Bidrager til finansialisering af bolig",
	"point_9_summary_1": "Bitcoin muliggør direkte individuelt ejerskab uden mellemmænd og fremmer finansiel suverænitet for alle. At købe ejendom som investering ud over din primære bolig bidrager til finansialiseringen af bolig, hvor boliger behandles som handelsvarer i stedet for husly. Dette driver priserne op, reducerer overkommeligheden for familier og bidrager til bolig- og hjemløshedskrisen, der påvirker mange lande i dag."
});

// bitcoin-vs-visa
writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin vs Visa",
	"visa_header": "FORSKELLEN MELLEM", "visa_header_2": "BITCOIN", "visa_header_3": "OG", "visa_header_4": "VISA",
	"visa_intro_1": "Kreditkort og Bitcoin er begge betalingssystemer, men de fungerer meget forskelligt.",
	"visa_intro_2": "Kreditkort som Visa er lukkede netværk kontrolleret af finansielle institutioner, mens Bitcoin er et åbent netværk, som enhver kan bruge.",
	"visa_intro_3": "Lad os se på forskellene mellem disse to betalingssystemer: Bitcoin og Visa.",
	"visa": "VISA",
	"visa_point_1": "Lukket netværk", "visa_point_2": "3% forhandlergebyr", "visa_point_3": "Ugennemsigtigt system", "visa_point_4": "Kan fryse konti", "visa_point_5": "Skaber gæld med høj rente", "visa_point_6": "Kræver mellemmænd", "visa_point_7": "Begrænsede åbningstider og geografi",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Åbent netværk", "bitcoin_point_2": "Ingen forhandlergebyr", "bitcoin_point_3": "Transparent system", "bitcoin_point_4": "Kan ikke fryses", "bitcoin_point_5": "Ingen gældsoprettelse", "bitcoin_point_6": "Selvopbevaring mulig", "bitcoin_point_7": "24/7 global adgang",
	"point_1_summary_1": "Bitcoin er et åbent netværk, som enhver kan tilslutte sig og bruge uden tilladelse. Kreditkortnetværk som Visa er lukkede systemer kontrolleret af finansielle institutioner, der kan nægte adgang til hvem de vil.", "point_1_summary_2": "Dette gør Bitcoin mere inkluderende og tilgængeligt for mennesker over hele verden, især dem uden bank eller med begrænset bankadgang.",
	"point_2_summary_1": "Bitcoin-transaktioner har ingen gebyrer for forhandlere, mens kreditkortselskaber typisk opkræver forhandlere omkring 3% pr. transaktion.", "point_2_summary_2": "Lær hvordan din virksomhed kan spare penge", "point_2_summary_3": "ved at acceptere Bitcoin-betalinger i stedet for at betale kreditkortbehandlingsgebyrer.",
	"point_3_summary_1": "Bitcoin fungerer på en transparent blockchain, hvor alle transaktioner kan verificeres af enhver. Kreditkortnetværk fungerer som lukkede, proprietære systemer, hvor transaktionsdetaljer er skjult for offentligheden.", "point_3_summary_2": "Denne transparens gør Bitcoin mere pålideligt og tillader uafhængig verificering af netværkets integritet.",
	"point_4_summary_1": "Kreditkortselskaber kan fryse konti, blokere transaktioner eller nægte tjenester når som helst. Bitcoin kan ikke fryses eller kontrolleres af nogen central myndighed.", "point_4_summary_2": "Med Bitcoin opretholder du kontrollen over dine penge og kan ikke blive udelukket fra betalingssystemet.",
	"point_5_summary_1": "Kreditkort skaber gæld, der kan akkumulere høje renter, hvis den ikke betales hurtigt, nogle gange over 25% årligt.", "point_5_summary_2": "Bitcoin-transaktioner er endelig afregning uden gældsoprettelse – du kan kun bruge Bitcoin, du faktisk ejer.",
	"point_6_summary_1": "Bitcoin muliggør selvopbevaring, hvilket betyder, at du kan holde og kontrollere dine egne penge uden at stole på banker eller betalingsbehandlere.", "point_6_summary_2": "Lær om Bitcoin-wallets", "point_6_summary_3": "for at forstå, hvordan du kan tage kontrol over dine egne penge. Kreditkort kræver altid mellemmænd som banker og betalingsbehandlere.",
	"point_7_summary_1": "Bitcoin fungerer 24/7 globalt uden åbningstider eller geografiske begrænsninger.", "point_7_summary_2": "Kreditkortnetværk har åbningstider, vedligeholdelsesvinduer og geografiske begrænsninger, der kan forhindre transaktioner i at blive behandlet."
});

console.log(`\nDone! Created 10 comparison files.`);
