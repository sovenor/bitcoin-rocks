#!/usr/bin/env node
/**
 * Danish manifest refresh — part 1 of non-inflation namespaces.
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
	"da.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Tilbage til forsiden",
	"404::404_message": "Bitcoin er fantastisk, men denne ødelagte side er ikke.",
	"404::404_not_found_short": "Ikke fundet",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Vi leverer gratis erhvervsressourcer, der gør det nemt for lokale virksomheder at begynde at tage imod Bitcoin. Vores Bitcoin for virksomheder-side forklarer, hvorfor Bitcoin er godt for forretning, hvordan du vælger en wallet og betalingsterminal, og tilbyder gratis klistermærker med „Bitcoin modtages her“.",
	"about::about_card_business_label": "Erhvervsressourcer",
	"about::about_card_business_source": "Kilde: bitcoin.rocks →",
	"about::about_card_business_title":
		"Alt en virksomhed behøver for at begynde at tage imod Bitcoin-betalinger",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Kilde: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Bidrag",
	"about::about_card_contribute_source": "Kilde: GitHub →",
	"about::about_card_contribute_title":
		"Lær hvordan du bidrager til bitcoin.rocks-projektet",
	"about::about_card_email_label": "E-mail",
	"about::about_card_email_source": "Kilde: e-mail →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Printbare flyers",
	"about::about_card_flyers_source": "Kilde: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Download og print Bitcoin-flyers til dit lokalsamfund",
	"about::about_card_github_label": "Repository",
	"about::about_card_github_source": "Kilde: GitHub →",
	"about::about_card_github_title": "Se bitcoin.rocks på GitHub",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Kilde: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Gratis klistermærker",
	"about::about_card_stickers_source": "Kilde: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Få gratis Bitcoin-klistermærker leveret til din dør",
	"about::about_editorial_2":
		"Vi henviser til pålidelige kilder som Federal Reserve (FRED), det amerikanske Bureau of Labor Statistics, FDIC, FN, World Gold Council, Forbes, MIT Technology Review, Lyn Alden og James Lavish. Vi tror på, at når fakta præsenteres klart, taler Bitcoin for sig selv.",
	"about::about_flyers_blurb":
		"Vi designer printbare flyers, som du kan dele ud til meetups, sætte op på opslagstavler eller lægge i postkasser — en simpel måde at skabe nysgerrighed og bringe folk til bitcoin.rocks, hvor de kan lære mere.",
	"about::about_header": "Om bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocks blev grundlagt af brugeren",
	"about::about_mission_1b":
		"i 2022 med en enkel mission: at accelerere Bitcoin-adoption gennem uddannelse.",
	"about::about_open_source_2":
		"bitcoin.rocks er et gratis open source-projekt under MIT-licensen. Alle er velkomne til at bidrage. Vi byder især oversættere velkommen, som hjælper med at gøre vores indhold tilgængeligt for mennesker verden over.",
	"about::about_open_source_header": "Open source",
	"about::about_page_description":
		"bitcoin.rocks er en gratis open source-uddannelseshjemmeside om Bitcoin, grundlagt i 2022. Vores mission er at accelerere Bitcoin-adoption gennem uddannelse.",
	"about::about_stickers_blurb":
		"Vi sender gratis Bitcoin-klistermærker direkte til din dør, så du kan hjælpe med at sprede Bitcoin-bevidsthed i dit lokalsamfund. Hver måned scanner hundredvis af mennesker QR-koderne på disse klistermærker for at lære mere om Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading": "Bitcoin har ingen bankpaniker",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin er et fuldt reservesystem. Du sætter ikke dine penge i en bank. Du er din egen bank. Dine penge udlånes ikke uden din viden, for den eneste, der har adgang til dem, er dig.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Så længe du opbevarer din bitcoin i din egen wallet — ikke på en børs eller pakket ind i en ETF — er bankpaniker umulige.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Med Bitcoin har du ægte kontrol over dine penge.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Fra den 26. marts 2020 skal amerikanske banker ikke længere holde nogen lovpligtige reserver.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Bankens reserveprocent",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Kilde: Federal Reserve →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Fuldt reservesystem — indskydergaranti er ikke nødvendig.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin-dækning",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Kilde: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Hver bitcoin findes på blockchainen — intet udlånes.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Bitcoins reserveprocent",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Kilde: Bitcoin whitepaper →",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 mia. USD forsikringsfond vs. 10,82 billioner USD i forsikrede indlån (dec. 2025).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC-dækning",
	"bank-runs::bank_runs_card_fdic_source":
		"Kilde: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Case-studie",
	"bank-runs::bank_runs_card_svb_source":
		"Kilde: University of Washington School of Law →",
	"bank-runs::bank_runs_card_svb_title":
		"Se hvordan Silicon Valley Banks bankpanik skete",
	"bank-runs::bank_runs_card_wallet_label": "Næste skridt",
	"bank-runs::bank_runs_card_wallet_source": "Start her →",
	"bank-runs::bank_runs_card_wallet_title":
		"Lær hvordan du får din egen Bitcoin-wallet",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC-forsikringen dækker omkring 1 % af indlånene",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC-forsikringen beskytter indlån op til 250.000 USD pr. indskyder. Men forsikringsfonden er lille sammenlignet med de samlede indlån, den skal beskytte.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Ved et bredt banksammenbrud ville regeringen sandsynligvis trykke penge for at dække forskellen — hvilket fører til mere",
	"bank-runs::bank_runs_fdic_p2_link": "inflation.",
	"bank-runs::bank_runs_header":
		"Bitcoin har ingen bankpaniker, men din bank kan få det.",
	"bank-runs::bank_runs_page_description":
		"Banker udlåner dine indlån under fraktionel reservebankvirksomhed. Hvis for mange hæver samtidig, kan banker krakke. Bitcoin er et fuldt reservesystem — bankpaniker er umulige.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: et virkeligt eksempel",
	"bank-runs::bank_runs_svb_p1_a":
		"I marts 2023 krakkede Silicon Valley Bank efter at have investeret kunders indlån i langfristede",
	"bank-runs::bank_runs_svb_p1_b":
		"Da disse obligationer mistede værdi, kunne SVB ikke dække hævninger. Banken blev insolvent.",
	"bank-runs::bank_runs_svb_p1_link": "statsobligationer.",
	"bank-runs::bank_runs_svb_p2":
		"Tusindvis af virksomheder kunne ikke betale deres medarbejdere. FDIC greb ind — men et større spørgsmål dukkede op: er dine penge virkelig sikre?",
	"bank-runs::bank_runs_what_p1":
		"Banker opbevarer ikke dine indlån i et boks. De udlåner dine penge og investerer dem — det kaldes fraktionel reservebankvirksomhed.",
	"bank-runs::bank_runs_what_p2":
		"Hvis for mange forsøger at hæve samtidig, har banken ikke kontanter nok til at udbetale alle. Det er en bankpanik — og den kan få banker til at kollapse fuldstændigt.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">banker</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin kan bruges af enhver med internetforbindelse — det er ",
	"bitcoin-vs-banks::point_1_summary_2": "tilladelsesfrit.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Banker kan afvise, fryse eller lukke konti baseret på deres egne regler eller statslige regulering.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin-netværket kører 24/7/365 uden vedligeholdelsesvinduer eller helligdage. Banker har begrænsede åbningstider, weekendlukninger og driftsforstyrrelser.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Hver Bitcoin-transaktion ligger på en offentlig blockchain, som enhver kan verificere. Banker fører private regnskaber, som kunderne ikke kan tjekke uafhængigt.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Med Bitcoin opbevarer du dine egne private nøgler — se vores enkle guide til ",
	"bitcoin-vs-banks::point_4_summary_2": "Bitcoin-wallets",
	"bitcoin-vs-banks::point_4_summary_3":
		". Banker opbevarer dine penge og kan fryse, begrænse eller blokere dem når som helst.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin-gebyrer er gennemsigtige og forudsigelige. Banker lægger gradvist skjulte gebyrer oveni for kontoer, overtræk, overførsler og hæveautomater.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin lader dig kun bruge det, du faktisk ejer. Banker tillader overtræk og opkræver derefter en kæde af strafgebyrer for det.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Når en Bitcoin-transaktion er sendt, kan den ikke stoppes eller tilbageføres. Banker kan blokere, fryse eller fortryde transaktioner baseret på regler eller statslige ordrer.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">obligationer</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Obligationer er kun „risikofrie“ nominelt — inflation, renteudsving og misligholdelsesrisiko udhuler reelt afkast.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin har gennemsigtig volatilitet, men ingen skjult modpartsrisiko.",
	"bitcoin-vs-bonds::point_2_summary_1": "Når",
	"bitcoin-vs-bonds::point_2_summary_2": "inflation",
	"bitcoin-vs-bonds::point_2_summary_3":
		"overstiger obligationsrenter, mister obligationsejere reel købekraft hvert år. Bitcoins loft på 21 millioner kan ikke udvandes af inflation.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Obligationsmarkeder kan fryse under kriser — Silicon Valley Bank krakkede delvist, fordi den holdt obligationer, der mistede værdi. Se hvordan",
	"bitcoin-vs-bonds::point_3_summary_2": "bankpaniker",
	"bitcoin-vs-bonds::point_3_summary_3":
		" opstår, og hvorfor Bitcoin undgår dem. Bitcoin handles 24/7 globalt uden likviditetskriser.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Statsobligationsauktioner kan slå fejl, når der ikke er nok købere — se den",
	"bitcoin-vs-bonds::point_4_summary_2": "svage auktion fra 2022.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bitcoins pris opdages løbende på åbne markeder uden en central auktion, der kan fejle.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Obligationsafkast er låst fast ved køb. Selv hvis økonomien vokser eller valutaen kollapser, forbliver dit afkast det samme.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin har plads til markant vækst, efterhånden som adoption stiger og efterspørgsel møder et fast udbud.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"De fleste obligationer opbevares via banker eller mæglere, hvilket tilføjer modpartsrisiko. Bitcoin kan opbevares i selvforvaring med en",
	"bitcoin-vs-bonds::point_6_summary_2": "wallet",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — hvilket eliminerer denne risiko helt.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Obligationer afhænger helt af, at regeringer betaler deres gæld tilbage. Hvis en regering misligholder eller udvander gælden med inflation, taber obligationsejerne.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin fungerer uafhængigt af enhver regering eller politisk myndighed.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">kontanter</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin flytter sig overalt i verden via internettet på minutter. Kontanter kræver fysisk tilstedeværelse eller betroede kurerer — du kan ikke sende en tyverseddel via e-mail.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin fungerer på samme måde overalt. Kontanter er begrænset af geografi, vekselkurser og lokal accept.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Regeringer kan gøre kontanter ugyldige fra den ene dag til den anden — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indien</a> gjorde det i 2016. Men selv uden demonetisering taber kontanter værdi på grund af",
	"bitcoin-vs-cash::point_3_summary_2": "inflation.",
	"bitcoin-vs-cash::point_3_summary_3":
		"Bitcoin kan ikke gøres ugyldig af nogen regering eller myndighed.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Kontanter kan forfalskes, nogle gange overbevisende. Bitcoin bruger kryptografi, der gør forfalskning matematisk umulig.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin har ingen central myndighed. Kontanter udstedes af regeringer, som kan trykke mere, ændre design eller trække sedler ud af cirkulation efter forgodtbefindende.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Kontanter er sårbare over for tyveri, brand, tab og konfiskation. Bitcoin kan sikkert ",
	"bitcoin-vs-cash::point_6_summary_2": "opbevares i selvforvaring",
	"bitcoin-vs-cash::point_6_summary_3":
		" på din telefon eller en hardware-enhed.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin kan deles op i 100 millioner satoshi, hvilket muliggør mikrobetalinger i enhver størrelse. Kontanter har mindste pålydende — du kan ikke opdele en krone.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">centralbankers digitale valutaer (CBDC'er)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Ingen kan forhindre dig i at transagere med Bitcoin. CBDC'er er designet til, at regeringer og centralbanker kan kontrollere hver betaling, hvilket begrænser dit privatliv og din frihed.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin udløber aldrig og har ingen månedlige gebyrer. CBDC'er kan programmeres til at udløbe, hvilket afskrækker dig fra at spare op til fremtiden.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin har et fast loft på 21 millioner BTC. CBDC'er har ingen forsyningsgrænse og lader regeringer udvide pengemængden efter forgodtbefindende — hvilket forårsager",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflation.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin-adresser er ikke bundet til din reelle identitet. CBDC'er er direkte knyttet til statsligt udstedt ID, hvilket muliggør masseovervågning og censur af finanser.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoins regler verificeres af titusindvis af uafhængige noder. CBDC'er er centraliseret hos regeringer og centralbanker, som har fuld kontrol over netværket.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Enhver kan køre en Bitcoin-node og verificere netværkets regler. CBDC'er tillader ikke brugere at køre noder — du skal stole på en central myndighed.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin i selvforvaring kan ikke fryses af nogen. CBDC'er er designet, så regeringer og centralbanker kan fryse konti øjeblikkeligt.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin giver dig fuld kontrol over dine penge, når du selv opbevarer det i en",
	"bitcoin-vs-cbdc::point_8_summary_2": "wallet.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC'er kræver tillid til depotholdere som banker eller regeringer, der opbevarer pengene for dig.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoins pengepolitik er låst fast i kode og kan ikke ændres. CBDC'er kan omprogrammeres efter politikeres ønske, hvilket forårsager",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflation",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", når der trykkes for mange penge.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin er det mest sikre computernetværk, der nogensinde er bygget, og er aldrig blevet hacket. CBDC'er er afhængige af banker og regeringer, som er blevet hacket utallige gange.",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">krypto</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoin-protokollen er stort set uændret siden 2009 og giver forudsigelige regler. De fleste kryptoprojekter ændrer konstant protokoller, tokenomics eller splitter sig i nye versioner.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin kører på titusindvis af uafhængige noder verden over. De fleste kryptoprojekter styres af fonde, virksomheder eller små udviklerteams, der kan foretage ensidige ændringer.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin har et fast loft på 21 millioner mønter — det sjældneste digitale aktiv. De fleste kryptoprojekter har ubegrænset forsyning eller mekanismer til at skabe nye tokens vilkårligt, hvilket udvander ejerne.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin har ét formål: peer-to-peer digitale penge. Alle kan forstå og bruge det. De fleste kryptoer involverer komplekse smart contracts eller DeFi, der kræver teknisk viden for at bruges sikkert.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoins Proof of Work har kørt uden et succesfuldt angreb på hovedkæden i over 15 år. De fleste kryptoprojekter bruger eksperimentel konsensus, der ikke er grundigt afprøvet.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin er digitale penge — et værdilager og byttemiddel. De fleste kryptotokens er spekulative utility- eller governance-tokens med uklar virkelighedsværdi.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin bliver stærkere under angreb og har overlevet enhver krise, ethvert forbud og enhver kritik. De fleste kryptoprojekter falder sammen under regulativt, teknisk eller markedsmæssigt pres.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin har ingen CEO, virksomhed eller enkelt failure-punkt. De fleste kryptoprojekter afhænger af VC-investorer, specifik ledelse eller en enkelt virksomheds overlevelse.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">billedkunst</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Hver bitcoin er identisk og ombyttelig. Hvert kunstværk er unikt — forskellig oprindelse, historie, tilstand og proveniens gør direkte sammenligning ekstremt vanskelig.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin handles 24/7 på et globalt marked, der er tilgængeligt for alle. Billedkunst kræver specialiserede auktionshuse, private handlere eller gallerier, og salg kan tage måneder.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"At købe eller sælge Bitcoin koster mindre end 1 % i gebyrer, ofte langt mindre. Kunstsalg stabler 30-40 % op i buyer's premiums, kommissioner, forsikring, transport og autentificeringsgebyrer.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin kan deles op i 100 millioner satoshi, hvilket gør det ideelt til transaktioner af enhver størrelse. Du kan ikke eje en del af et maleri eller et hjørne af en skulptur uden modpartsrisiko.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoin-ejerskab og ægthed kan verificeres kryptografisk af enhver på blockchainen. Autentificering af kunst er dyrt, langsomt og bliver regelmæssigt narret af forfalskere — hvilket ødelægger et værks værdi fra den ene dag til den anden.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Korrekt backuppet Bitcoin overlever oversvømmelser, brande, jordskælv og tyveri. Billedkunst er sårbar over for alle former for fysisk ødelæggelse, og forsikring dækker sjældent alt.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Alle med internetforbindelse og lidt penge kan købe Bitcoin. Kunstinvestering er praktisk talt begrænset til velhavende samlere med adgang til auktioner og specialiseret viden.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">guld</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin kan sendes øjeblikkeligt via internettet til lave gebyrer. Guld skal fysisk sendes for at overføre ejerskab.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin er et digitalt født aktiv, som du kan overføre via internettet. Online guld er en digital IOU — du ejer kun et løfte fra en depotholder, ikke selve metallet.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin har et fast loft på 21 millioner BTC. Guldforsyningen vokser med omkring <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6 % om året</a>, hvilket skrumper din andel — mindre end fiat-",
	"bitcoin-vs-gold::point_3_summary_2": "inflation",
	"bitcoin-vs-gold::point_3_summary_3":
		", men stadig inflation.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Når guldpriserne stiger, bliver der udvundet mere guld, hvilket presser prisen ned igen. Bitcoins forsyning er uelastisk — uanset hvor højt prisen stiger, vil der altid kun være 21 millioner.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Bitcoin-netværket verificeres af titusindvis af uafhængige noder. Det meste fysiske guld sidder i nogle få store depoter.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Enhver kan verificere ægte Bitcoin ved at køre en fuld node — det er bare en app. Verificering af fysisk guld kræver, at det smeltes om; der kunne være wolfram indeni.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin kan deles op i 100 millioner satoshi, hvilket gør det ideelt til køb af enhver størrelse. Guld kan ikke let opdeles til mindre transaktioner.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">fast ejendom</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin flytter sig øjeblikkeligt overalt i verden. Fast ejendom er fastlåst til ét sted og udsat for lokale økonomiske, politiske og miljømæssige risici.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin kan deles op i 100 millioner satoshi. Ejendom kan ikke delvist sælges — du kan ikke sælge et køkken eller købe et halvt soveværelse.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin fungerer i et decentraliseret netværk, som ingen regering kan kontrollere. Fast ejendom er stærkt reguleret — zoning, huslejekontrol, ekspropriation og beslaglæggelse anvendes alle sammen.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin kræver ingen vedligeholdelse. Fast ejendom kræver reparationer, renoveringer, forsikring, ejendomsadministration og håndtering af lejerproblemer.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin er ikke underlagt løbende skatter — du betaler kun kapitalgevinstskat, når du sælger. Fast ejendom betaler årlig ejendomsskat uanset indkomst.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Korrekt backuppet Bitcoin overlever brande, oversvømmelser og jordskælv. Fast ejendom er sårbar over for enhver katastrofe, og forsikring dækker sjældent alt.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Hver bitcoin er identisk og ombyttelig. Hver ejendom er unik, hvilket gør værdiansættelse og sammenligning vanskelig.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin handles globalt 24/7 for alle med internetadgang. Ejendomssalg er begrænset til lokale købere og kan tage måneder at lukke med papirarbejde.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin muliggør direkte individuelt ejerskab for enhver. Køb af fast ejendom som investering ud over primærbolig presser boligpriserne op, reducerer boligtilgængelighed og skaber boligkrise.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">aktier</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin er et direkte aktiv, du ejer fuldstændigt. Aktier er andele i et selskab — deres værdi afhænger af ledelse, præstation og beslutninger, du ikke kontrollerer.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin har et fast loft på 21 millioner BTC. Virksomheder kan udstede nye aktier når som helst og udvande eksisterende aktionærer — ligesom fiat-",
	"bitcoin-vs-stocks::point_2_summary_2": "inflation",
	"bitcoin-vs-stocks::point_2_summary_3":
		" udvander kontanter. Med Bitcoin skrumper din andel aldrig.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin har ingen CEO eller enkelt failure-punkt. Aktier afhænger stærkt af ledelse — én dårlig beslutning eller en nøgleperson, der forlader selskabet, kan trække prisen ned.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoins pris kommer fra åbne globale markeder. Aktievurdering bygger på metrikker som P/E-forhold, der kan skjule overvurderede aktier.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin handles 24/7 verden over. Aktiemarkeder er kun åbne på hverdage i handelstiden.",
	"bitcoin-vs-stocks::point_6_summary_1": "Med Bitcoin kan du gå over til",
	"bitcoin-vs-stocks::point_6_summary_2": "selvforvaring",
	"bitcoin-vs-stocks::point_6_summary_3":
		" med en simpel app — ingen mægler nødvendig. Aktier ligger hos mæglervirksomheder, hvilket udsætter dig for modpartsrisiko, hvis de krakker.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoins faste forsyning gør det til en pålidelig inflationshedge. Nogle aktier slår inflation, andre gør ikke — der er ingen garanti.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Forskellen mellem <span class=\"orange\">Bitcoin</span> og <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin er et åbent netværk, som alle kan tilslutte sig uden tilladelse. Visa er et lukket system kontrolleret af finansielle institutioner, der kan nægte adgang — især for folk uden bankkonto eller med begrænset bankadgang.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin-transaktioner har ingen handelsgebyrer. Visa opkræver typisk handlende omkring 3 % pr. transaktion — din virksomhed kan spare penge ved at acceptere",
	"bitcoin-vs-visa::point_2_summary_2": "Bitcoin-betalinger",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Hver Bitcoin-transaktion ligger på en offentlig, verificerbar blockchain. Visa driver et lukket, proprietært system, hvor kunder ikke kan verificere noget uafhængigt.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoin kan ikke fryses af nogen central myndighed. Visa kan fryse konti, blokere transaktioner eller nægte service når som helst.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin er endelig afregning — du bruger kun det, du ejer. Kreditkort skaber gæld med renter, der ofte overstiger 25 % om året.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin lader dig gå over til",
	"bitcoin-vs-visa::point_6_summary_2": "selvforvaring",
	"bitcoin-vs-visa::point_6_summary_3":
		" uden at have brug for en bank eller betalingsbehandler. Kreditkort kræver altid mellemmænd.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin fungerer 24/7 globalt uden forretningstider. Visa har driftstider, vedligeholdelsesvinduer og geografiske begrænsninger, der kan blokere transaktioner.",
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
		`translate-rest-part1 (da): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
