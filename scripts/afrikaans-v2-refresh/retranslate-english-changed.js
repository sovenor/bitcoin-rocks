#!/usr/bin/env node
/**
 * retranslate-english-changed.js
 *
 * Fills in `targetTranslation` for every entry in
 * scripts/i18n-audit/reports/af.json whose `reason === "english-changed"`.
 *
 * Background: the V2 redesign pass rewrote many existing English values
 * in place (same keys, new copy). The Afrikaans pass ran before the
 * language-diff tool could detect English-level changes, so those keys
 * still carried V1-era Afrikaans translations. This script provides
 * fresh Afrikaans translations of the new (V2) English copy for every
 * flagged entry.
 *
 * Safe to re-run: writes only `targetTranslation` (leaves other fields
 * alone), preserves tab indentation, and skips entries whose
 * targetTranslation is already a non-null string.
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
	"af.json",
);

// Afrikaans translations keyed by `<namespace>|<key>`.
// Every entry in the af.json report's english-changed category
// is present here.
const TRANSLATIONS = {
	// 404
	"404|404_home": "Terug tuis toe",
	"404|404_message":
		"Bitcoin rock, maar hierdie gebroke bladsy doen beslis nie.",

	// about
	"about|about_editorial_2":
		"Ons skakel na betroubare bronne soos die Federal Reserve (FRED), die U.S. Bureau of Labor Statistics, die FDIC, die Verenigde Nasies, die World Gold Council, Forbes, MIT Technology Review, Lyn Alden en James Lavish. Ons glo Bitcoin spreek vir homself wanneer die feite duidelik aangebied word.",
	"about|about_header": "Aangaande bitcoin.rocks",
	"about|about_open_source_2":
		"bitcoin.rocks is 'n gratis, oopbron-projek onder die MIT-lisensie. Enigiemand kan tot bitcoin.rocks bydra. Ons verwelkom veral vertalers wat help om ons inhoud vir mense regoor die wêreld toeganklik te maak.",

	// bank-runs
	"bank-runs|bank_runs_header":
		"Bitcoin het geen banklopies nie, maar jou bank het dalk.",

	// bitcoin-vs-banks
	"bitcoin-vs-banks|point_1_summary_1":
		"Enigeen met 'n internetverbinding kan Bitcoin gebruik — dis",
	"bitcoin-vs-banks|point_1_summary_2": "toestemmingsvry.",
	"bitcoin-vs-banks|point_1_summary_3":
		"Banke kan rekeninge weier, vries of sluit gebaseer op beleid of regeringsreëls.",
	"bitcoin-vs-banks|point_2_summary_1":
		"Die Bitcoin-netwerk loop 24/7/365 sonder onderhoudsvensters of vakansiedae. Banke het beperkte ure, naweke af en onderbrekingsperiodes.",
	"bitcoin-vs-banks|point_3_summary_1":
		"Elke Bitcoin-transaksie is op 'n openbare blokketting wat enigeen kan oudit. Banke bedryf private grootboeke wat kliënte nie onafhanklik kan verifieer nie.",
	"bitcoin-vs-banks|point_4_summary_1":
		"Met Bitcoin hou jy jou eie privaatsleutels — sien ons eenvoudige",
	"bitcoin-vs-banks|point_4_summary_2": "Bitcoin-beursies",
	"bitcoin-vs-banks|point_4_summary_3":
		"gids. Banke hou jou geld en kan dit te eniger tyd vries, beperk of weerhou.",
	"bitcoin-vs-banks|point_5_summary_1":
		"Bitcoin-fooie is deursigtig en voorspelbaar. Banke stapel mettertyd versteekte rekening-, oortrekkings-, oorplasings- en OTM-fooie op.",
	"bitcoin-vs-banks|point_6_summary_1":
		"Bitcoin laat jou net spandeer wat jy werklik besit. Banke laat oortrekkings toe en hef dan kaskaderende strafboetes vir die voorreg.",
	"bitcoin-vs-banks|point_7_summary_1":
		"Sodra Bitcoin-transaksies uitgesaai is, kan hulle nie gestop of omgekeer word nie. Banke kan transaksies blok, vries of omkeer op grond van beleid of regeringsbevele.",

	// bitcoin-vs-bonds
	"bitcoin-vs-bonds|point_1_summary_1":
		"Effekte is net nominaal 'risikovry' — inflasie, rentekoersbewegings en wanbetalingsrisiko vreet almal aan werklike opbrengste.",
	"bitcoin-vs-bonds|point_1_summary_2":
		"Bitcoin het deursigtige volatiliteit, maar geen verskuilde teenpartyrisiko nie.",
	"bitcoin-vs-bonds|point_2_summary_1": "Wanneer",
	"bitcoin-vs-bonds|point_2_summary_2": "inflasie",
	"bitcoin-vs-bonds|point_2_summary_3":
		"effekteopbrengste verbystreef, verloor effektehouers jaar na jaar werklike koopkrag. Bitcoin se plafon van 21 miljoen kan nie weg-geïnflateer word nie.",
	"bitcoin-vs-bonds|point_3_summary_1":
		"Effektemarkte kan tydens krisisse bevries — Silicon Valley Bank het deels ineengestort omdat hy vasgeval was met effekte wat waarde verloor het. Sien hoe",
	"bitcoin-vs-bonds|point_3_summary_2": "banklopies",
	"bitcoin-vs-bonds|point_3_summary_3":
		"gebeur en hoekom Bitcoin dit vermy. Bitcoin verhandel 24/7 wêreldwyd sonder likiditeitskrisisse.",
	"bitcoin-vs-bonds|point_4_summary_1":
		"Tesourie-veilings kan misluk wanneer daar nie genoeg kopers is nie — sien die",
	"bitcoin-vs-bonds|point_4_summary_2": "swak 2022-veiling.",
	"bitcoin-vs-bonds|point_4_summary_3":
		"Bitcoin se prys word deurlopend op oop markte ontdek sonder 'n sentrale veiling wat kan misluk.",
	"bitcoin-vs-bonds|point_5_summary_1":
		"Effekteopbrengste is by aankoop vasgestel. Selfs as die ekonomie oplewe of die geldeenheid ineenstort, bly jou opbrengs dieselfde.",
	"bitcoin-vs-bonds|point_5_summary_2":
		"Bitcoin het ruimte vir aansienlike waardevermeerdering soos aanneming groei en vraag die vaste aanbod ontmoet.",
	"bitcoin-vs-bonds|point_6_summary_1":
		"Die meeste effekte word deur banke of makelaars gehou, wat teenpartyrisiko byvoeg. Bitcoin kan in selfbewaring gehou word met 'n",
	"bitcoin-vs-bonds|point_6_summary_2": "beursie",
	"bitcoin-vs-bonds|point_7_summary_1":
		"Effekte hang heeltemal af van regerings wat terugbetaal. As 'n regering wanbetaal of sy skuld weg-inflateer, verloor effektehouers.",
	"bitcoin-vs-bonds|point_7_summary_2":
		"Bitcoin funksioneer onafhanklik van enige regering of politieke owerheid.",

	// bitcoin-vs-cash
	"bitcoin-vs-cash|point_1_summary_1":
		"Bitcoin beweeg binne minute oor die internet oral heen. Kontant benodig fisiese teenwoordigheid of vertroude koeriers — jy kan nie 'n $20-noot epos nie.",
	"bitcoin-vs-cash|point_2_summary_1":
		"Bitcoin werk oral dieselfde. Kontant word deur geografie, wisselkoerse en plaaslike aanvaarding beperk.",
	"bitcoin-vs-cash|point_3_summary_1":
		"Regerings kan kontant oornag ongeldig verklaar — Indië het dit in 2016 gedoen. Selfs sonder demonetisering verloor kontant waarde deur",
	"bitcoin-vs-cash|point_3_summary_2": "inflasie.",
	"bitcoin-vs-cash|point_3_summary_3":
		"Bitcoin kan deur geen regering of owerheid ongeldig verklaar word nie.",
	"bitcoin-vs-cash|point_4_summary_1":
		"Kontant kan vervals word, soms baie oortuigend. Bitcoin gebruik kriptografie wat vervalsing wiskundig onmoontlik maak.",
	"bitcoin-vs-cash|point_5_summary_1":
		"Bitcoin het geen sentrale owerheid nie. Kontant word uitgereik deur regerings wat na willekeur meer kan druk, ontwerpe kan verander of note ongeldig kan verklaar.",
	"bitcoin-vs-cash|point_6_summary_1":
		"Kontant is kwesbaar vir diefstal, brand, verlies en konfiskasie. Bitcoin kan veilig in",
	"bitcoin-vs-cash|point_6_summary_2": "selfbewaring",
	"bitcoin-vs-cash|point_6_summary_3":
		"gehou word op 'n foon of hardewaretoestel.",
	"bitcoin-vs-cash|point_7_summary_1":
		"Bitcoin word in 100 miljoen sats verdeel, wat mikrobetalings van enige grootte moontlik maak. Kontant het minimum denominasies — jy kan nie 'n sent opdeel nie.",

	// bitcoin-vs-cbdc
	"bitcoin-vs-cbdc|point_10_summary_1":
		"Bitcoin is die veiligste rekenaarnetwerk ooit gebou en is nog nooit gekraak nie. SBDG's staatmaak op banke en regerings wat al ontelbare kere gekraak is.",
	"bitcoin-vs-cbdc|point_1_summary_1":
		"Niemand kan jou keer om met Bitcoin te transakteer nie. SBDG's is ontwerp sodat regerings en sentrale banke elke betaling kan beheer en sodoende jou privaatheid en vryheid kan beperk.",
	"bitcoin-vs-cbdc|point_2_summary_1":
		"Bitcoin verval nooit nie en het geen maandelikse fooie nie. SBDG's kan geprogrammeer word om te verval, wat jou keer om vir die toekoms te spaar.",
	"bitcoin-vs-cbdc|point_3_summary_1":
		"Bitcoin het 'n harde plafon van 21 miljoen BTC. SBDG's het geen aanbodperk nie, wat regerings toelaat om geld na willekeur uit te brei — wat lei tot",
	"bitcoin-vs-cbdc|point_3_summary_2": "inflasie.",
	"bitcoin-vs-cbdc|point_3_summary_3": "",
	"bitcoin-vs-cbdc|point_4_summary_1":
		"Bitcoin-adresse is nie aan jou werklike identiteit gekoppel nie. SBDG's koppel direk aan regerings-ID's en maak massa-finansiële toesig en sensuur moontlik.",
	"bitcoin-vs-cbdc|point_5_summary_1":
		"Bitcoin se reëls word deur tienduisende onafhanklike nodes gevalideer. SBDG's is gesentraliseer in regerings en sentrale banke se hande, wat volledige beheer oor die netwerk het.",
	"bitcoin-vs-cbdc|point_6_summary_1":
		"Enigeen kan 'n Bitcoin-node laat loop om die reëls van die netwerk te verifieer. SBDG's laat gebruikers nie toe om nodes te laat loop nie — jy moet die sentrale owerheid vertrou.",
	"bitcoin-vs-cbdc|point_7_summary_1":
		"Self-bewaarde Bitcoin kan deur niemand gevries word nie. SBDG's is ontwerp sodat regerings en sentrale banke rekeninge onmiddellik kan vries.",
	"bitcoin-vs-cbdc|point_8_summary_1":
		"Bitcoin gee jou volle beheer oor jou geld wanneer jy dit self bewaar met 'n",
	"bitcoin-vs-cbdc|point_8_summary_2": "beursie.",
	"bitcoin-vs-cbdc|point_8_summary_3":
		"SBDG's vereis dat jy bewaarders soos banke of regerings vertrou om jou geld vir jou te hou.",
	"bitcoin-vs-cbdc|point_9_summary_1":
		"Bitcoin se monetêre beleid is in kode vasgelê en kan nie verander word nie. SBDG's kan na willekeur deur politici herprogrammeer word, wat lei tot",
	"bitcoin-vs-cbdc|point_9_summary_2": "inflasie",

	// bitcoin-vs-crypto
	"bitcoin-vs-crypto|point_1_summary_1":
		"Bitcoin se protokol is sedert 2009 fundamenteel dieselfde, wat voorspelbare reëls verskaf. Die meeste kripto-projekte verander voortdurend protokolle, tokenomika of vurk in nuwe weergawes.",
	"bitcoin-vs-crypto|point_2_summary_1":
		"Bitcoin loop op tienduisende onafhanklike nodes wêreldwyd. Die meeste kripto-projekte word beheer deur stigtings, maatskappye of klein ontwikkelingspanne wat eensydig veranderings kan maak.",
	"bitcoin-vs-crypto|point_3_summary_1":
		"Bitcoin het 'n harde plafon van 21 miljoen munte — die skaarste digitale bate. Die meeste kripto-projekte het onbeperkte aanbod of meganismes om na willekeur nuwe tokens te skep wat houers verdun.",
	"bitcoin-vs-crypto|point_4_summary_1":
		"Bitcoin het een doel: portuur-tot-portuur digitale geld. Enigeen kan dit verstaan en gebruik. Die meeste kripto behels komplekse slim kontrakte of DeFi wat tegniese kundigheid vereis om veilig te gebruik.",
	"bitcoin-vs-crypto|point_5_summary_1":
		"Bitcoin se Proof of Work loop al meer as 15 jaar sonder 'n suksesvolle aanval op die hoofnetwerk. Die meeste kripto-projekte gebruik eksperimentele konsensus wat nog nie in die praktyk getoets is nie.",
	"bitcoin-vs-crypto|point_6_summary_1":
		"Bitcoin is digitale geld — 'n waardebewaarder en ruilmiddel. Die meeste kripto-tokens is spekulatiewe nuts- of bestuurstokens met onduidelike werklike waarde.",
	"bitcoin-vs-crypto|point_7_summary_1":
		"Bitcoin word sterker onder aanval en het elke krisis, verbod en kritiek oorleef. Die meeste kripto-projekte stort ineen onder regulerings-, tegniese of markdruk.",
	"bitcoin-vs-crypto|point_8_summary_1":
		"Bitcoin het geen HUB, geen maatskappy, geen enkele punt van mislukking nie. Die meeste kripto-projekte hang van waagkapitaliste, spesifieke leierskap of een maatskappy se oorlewing af.",

	// bitcoin-vs-fine-art
	"bitcoin-vs-fine-art|point_1_summary_1":
		"Elke bitcoin is identies en uitruilbaar. Elke kunswerk is uniek — verskillende skepping, geskiedenis, toestand en herkoms maak direkte vergelykings uiters moeilik.",
	"bitcoin-vs-fine-art|point_2_summary_1":
		"Bitcoin verhandel 24/7 op 'n wêreldmark wat vir enigeen toeganklik is. Goeie kuns vereis gespesialiseerde veilingshuise, private handelaars of galerye en kan maande neem om te verkoop.",
	"bitcoin-vs-fine-art|point_3_summary_1":
		"Die koop of verkoop van Bitcoin kos minder as 1% in fooie, dikwels veel minder. Kunsverkope stapel 30–40% in koperspremies, kommissies, versekering, vervoer en egtheidsertifisering-fooie op.",
	"bitcoin-vs-fine-art|point_4_summary_1":
		"Bitcoin word in 100 miljoen sats verdeel, wat dit perfek maak vir transaksies van enige grootte. Jy kan nie 'n fraksie van 'n skildery of 'n hoek van 'n beeldhouwerk besit nie.",
	"bitcoin-vs-fine-art|point_5_summary_1":
		"Bitcoin-eienaarskap en egtheid kan kriptografies op die ketting deur enigeen geverifieer word. Kunsegtheid is duur, stadig en word steeds gereeld deur vervalsers mislei — wat 'n kunswerk se waarde oornag kan vernietig.",
	"bitcoin-vs-fine-art|point_6_summary_1":
		"Bitcoin, reg gerugsteun, oorleef vloede, brande, aardbewings en diefstal. Goeie kuns is kwesbaar vir elke vorm van fisieke vernietiging, en versekering dek dit selde alles.",
	"bitcoin-vs-fine-art|point_7_summary_1":
		"Enigeen met 'n internetverbinding en 'n bietjie geld kan Bitcoin koop. Beleggings in goeie kuns is effektief beperk tot welgestelde versamelaars met veilingstoegang en gespesialiseerde kennis.",

	// bitcoin-vs-gold
	"bitcoin-vs-gold|point_1_summary_1":
		"Bitcoin kan onmiddellik oor die internet gestuur word teen lae fooie. Goud moet fisies versend word om eienaarskap oor te dra.",
	"bitcoin-vs-gold|point_2_summary_1":
		"Bitcoin is 'n digitaal-inheemse bate wat jy oor die internet kan oordra. Die meeste aanlyn goud is 'n Digitale Skuldbekentenis — jy besit net 'n belofte van 'n bewaarder, nie die metaal self nie.",
	"bitcoin-vs-gold|point_3_summary_1":
		"Bitcoin het 'n harde plafon van 21 miljoen BTC. Goud se voorraad groei met ongeveer 1,6% per jaar wat jou deel verklein — minder as fiat-",
	"bitcoin-vs-gold|point_3_summary_2": "inflasie",
	"bitcoin-vs-gold|point_3_summary_3": "— maar steeds inflasie.",
	"bitcoin-vs-gold|point_4_summary_1":
		"Wanneer goudpryse styg, word meer goud gemyn, wat die prys weer afdruk. Bitcoin se aanbod is onelasties — maak nie saak hoe hoog die prys styg nie, daar sal ooit slegs 21 miljoen wees.",
	"bitcoin-vs-gold|point_5_summary_1":
		"Tienduisende onafhanklike nodes valideer die Bitcoin-netwerk. Die meeste fisiese goud lê in 'n handvol groot bewaarderskluise.",
	"bitcoin-vs-gold|point_6_summary_1":
		"Enigeen kan regte Bitcoin verifieer deur 'n volle node te laat loop — dis net 'n toepassing. Om fisiese goud te verifieer, vereis dat jy dit afsmelt; die binnekant kan wolfram wees.",
	"bitcoin-vs-gold|point_7_summary_1":
		"Bitcoin word in 100 miljoen sats verdeel, wat dit perfek maak vir aankope van enige grootte. Goud kan nie maklik vir klein transaksies verdeel word nie.",

	// bitcoin-vs-real-estate
	"bitcoin-vs-real-estate|point_1_summary_1":
		"Bitcoin beweeg onmiddellik oral in die wêreld. Vaste eiendom is aan een ligging vasgepen en blootgestel aan plaaslike ekonomiese, politieke en natuurlike risiko's.",
	"bitcoin-vs-real-estate|point_2_summary_1":
		"Bitcoin word in 100 miljoen sats verdeel. Vaste eiendom kan nie gedeeltelik verkoop word nie — jy kan nie net die kombuis afgee of 'n halwe slaapkamer koop nie.",
	"bitcoin-vs-real-estate|point_3_summary_1":
		"Bitcoin funksioneer op 'n gedesentraliseerde netwerk wat geen regering kan beheer nie. Vaste eiendom is swaar gereguleer — soneringsreëls, huurbeheer, dominium eminens en beslaglegging is almal van toepassing.",
	"bitcoin-vs-real-estate|point_4_summary_1":
		"Bitcoin verg geen instandhouding nie. Vaste eiendom vereis herstelwerk, opknappings, versekering, eiendomsbestuur en huurdervraagstukke.",
	"bitcoin-vs-real-estate|point_5_summary_1":
		"Bitcoin het geen deurlopende belasting nie — jy betaal net kapitaalwinsbelasting wanneer jy verkoop. Vaste eiendom verskuldig jaarlikse eiendomsbelasting ongeag inkomste.",
	"bitcoin-vs-real-estate|point_6_summary_1":
		"Bitcoin, reg gerugsteun, oorleef brand, vloed en aardbewing. Vaste eiendom is kwesbaar vir elke ramp, en versekering dek dit selde alles.",
	"bitcoin-vs-real-estate|point_7_summary_1":
		"Elke bitcoin is identies en uitruilbaar. Elke eiendom is uniek, wat pryse en vergelykings moeilik maak.",
	"bitcoin-vs-real-estate|point_8_summary_1":
		"Bitcoin verhandel wêreldwyd 24/7 deur enigeen met internettoegang. Vaste-eiendom-verkope is beperk tot plaaslike kopers en kan maande se papierwerk neem om af te sluit.",
	"bitcoin-vs-real-estate|point_9_summary_1":
		"Bitcoin maak direkte individuele eienaarskap vir enigeen moontlik. Om vaste eiendom as belegging buite jou primêre woning te koop, dryf behuisingspryse op, verminder bekostigbaarheid en dra by tot die behuisingskrisis.",

	// bitcoin-vs-stocks
	"bitcoin-vs-stocks|point_1_summary_1":
		"Bitcoin is 'n direkte bate wat jy heeltemal besit. Aandele is belange in 'n maatskappy — hul waarde hang af van bestuur, prestasie en besluite waaroor jy geen beheer het nie.",
	"bitcoin-vs-stocks|point_2_summary_1":
		"Bitcoin het 'n harde plafon van 21 miljoen BTC. Maatskappye kan te eniger tyd nuwe aandele uitreik, wat bestaande aandeelhouers verdun — soortgelyk aan hoe fiat-",
	"bitcoin-vs-stocks|point_2_summary_2": "inflasie",
	"bitcoin-vs-stocks|point_2_summary_3":
		"kontant verdun. Met Bitcoin krimp jou deel nooit nie.",
	"bitcoin-vs-stocks|point_3_summary_1":
		"Bitcoin het geen HUB en geen enkele punt van mislukking nie. Aandele hang sterk af van leierskap — een slegte besluit of vertrek kan die prys inkelder.",
	"bitcoin-vs-stocks|point_4_summary_1":
		"Bitcoin se prys kom uit oop wêreldmarkte. Aandelewaardasies steun op maatstawwe soos P/E-verhoudings wat oorgeprysde aandele kan verberg.",
	"bitcoin-vs-stocks|point_5_summary_1":
		"Bitcoin verhandel 24/7 regoor die wêreld. Aandelemarkte is net tydens kantoorure op weeksdae oop.",
	"bitcoin-vs-stocks|point_6_summary_1": "Jy kan",
	"bitcoin-vs-stocks|point_6_summary_2": "selfbewaring",
	"bitcoin-vs-stocks|point_6_summary_3":
		"van Bitcoin neem met 'n eenvoudige toepassing — geen makelaar nodig nie. Aandele sit by makelaarshuise, wat jou aan teenpartyrisiko blootstel as hulle ineenstort.",
	"bitcoin-vs-stocks|point_7_summary_1":
		"Bitcoin se vaste aanbod maak dit 'n betroubare skans teen inflasie. Sommige aandele klop inflasie, ander nie — daar is geen waarborg nie.",

	// bitcoin-vs-visa
	"bitcoin-vs-visa|point_1_summary_1":
		"Bitcoin is 'n oop netwerk wat enigeen sonder toestemming kan aansluit en gebruik. Visa is 'n geslote stelsel onder beheer van finansiële instellings wat toegang kan weier — veral aan die wat geen of beperkte banktoegang het.",
	"bitcoin-vs-visa|point_2_summary_1":
		"Bitcoin-transaksies het geen handelaarsfooie nie. Visa vra handelaars gewoonlik ongeveer 3% per transaksie — jou besigheid kan geld bespaar deur",
	"bitcoin-vs-visa|point_2_summary_2": "Bitcoin-betalings",
	"bitcoin-vs-visa|point_2_summary_3": "eerder te aanvaar.",
	"bitcoin-vs-visa|point_3_summary_1":
		"Elke Bitcoin-transaksie is op 'n openbare, ouditeerbare blokketting. Visa loop 'n geslote, bemarkte stelsel waar kliënte niks onafhanklik kan verifieer nie.",
	"bitcoin-vs-visa|point_4_summary_1":
		"Bitcoin kan deur geen sentrale owerheid gevries word nie. Visa kan rekeninge vries, transaksies blok of diens te eniger tyd weier.",
	"bitcoin-vs-visa|point_5_summary_1":
		"Bitcoin is 'n finale vereffening — jy kan net spandeer wat jy besit. Kredietkaarte skep skuld met rentekoerse wat dikwels meer as 25% per jaar is.",
	"bitcoin-vs-visa|point_6_summary_1": "Bitcoin laat jou",
	"bitcoin-vs-visa|point_6_summary_2": "selfbewaring",
	"bitcoin-vs-visa|point_6_summary_3":
		"neem sonder 'n bank of betalingsverwerker. Kredietkaarte vereis altyd tussengangers.",
	"bitcoin-vs-visa|point_7_summary_1":
		"Bitcoin werk 24/7 wêreldwyd sonder besigheidsure. Visa het bedryfsure, onderhoudsvensters en geografiese beperkings wat transaksies kan blok.",

	// business/accounting
	"business/accounting|accounting_description":
		"'n Eenvoudige gids om Bitcoin in jou boeke te aanvaar — hibriede beursies, kosprysbasis, kapitaalwins, en wanneer om 'n rekenmeester te roep.",
	"business/accounting|accounting_s1_c1":
		"Die eenvoudigste manier om Bitcoin te aanvaar is met 'n hibriede beursie wat outomaties 100% van die Bitcoin wat jy ontvang vir dollar (of jou plaaslike geldeenheid) verkoop die oomblik 'n betaling inkom.",
	"business/accounting|accounting_s1_c2":
		"Met hierdie opstelling lyk jou boeke presies soos vandag — die finale syfer is elke keer in dollar. Geen kosprysbasis, geen kapitaalwins, geen nuwe sigblaaie nie.",
	"business/accounting|accounting_s2":
		"As jy 'n deel Bitcoin behou: jou kosprysbasis dop",
	"business/accounting|accounting_s2_c1":
		"Sommige besighede kies om 'n gedeelte van die Bitcoin wat hulle ontvang te hou eerder as om alles outomaties om te skakel. As dit jy is, is die hoof ekstra stap om jou kosprysbasis te dop — die dollarwaarde van elke Bitcoin-betaling op die dag wat jy dit ontvang het.",
	"business/accounting|accounting_s2_c2":
		"Selfs as jy aan jou besigheid heeltemal in Bitcoin dink, wil die meeste belastingowerhede steeds die dollarwaarde gerapporteer hê. Die goeie nuus: dis net twee syfers per transaksie — die bedrag Bitcoin wat ontvang is en die dollarwaarde daarvan op daardie dag.",
	"business/accounting|accounting_s2_c3":
		"Gebruik die gereedskap hieronder om die opsoek te outomatiseer sodat jy nie elke dag pryse hoef na te gaan nie.",
	"business/accounting|accounting_s3":
		"Om die Bitcoin wat jy behou het te spandeer of te verkoop",
	"business/accounting|accounting_s3_c1":
		"As jy elke betaling outomaties na dollar omskakel, slaan hierdie afdeling oor — dit is nie op jou van toepassing nie.",
	"business/accounting|accounting_s3_c2":
		"As jy 'n deel Bitcoin behou het en later besluit om dit te spandeer of te verkoop, voeg die verkoopprys by dieselfde kosprysbasis-sigblad. Die verskil tussen die Bitcoin se waarde toe jy dit ontvang het en sy waarde toe jy dit spandeer of verkoop, is 'n kapitaalwins of -verlies.",
	"business/accounting|accounting_s3_c3": "Twee vinnige voorbeelde:",
	"business/accounting|accounting_s4":
		"Het jy 'n kenner nodig wat Bitcoin ken?",
	"business/accounting|accounting_s4_c1":
		"As jy dit eerder wil oorhandig — of jou Bitcoin-rekeningkunde is meer kompleks as wat 'n hibriede beursie kan hanteer — beveel ons Satoshi Pacioli Accounting Services, 'n firma wat in Bitcoin-rekeningkunde vir besighede spesialiseer, sterk aan.",
	"business/accounting|bitcoin_business_accounting_guide":
		"Bitcoin-rekeningkunde vir jou besigheid",

	// business/sticker-files/english/index
	"business/sticker-files/english/index|english_biz_sticker_files_description":
		"Laai Engelse plakkerlêers af om jou eie 'Bitcoin Accepted Here'-plakkers te druk.",

	// business/why
	"business/why|learn_why_bitcoin_is_good_for_business":
		"Bitcoin word hier aanvaar",
	"business/why|why_good_for_you": "Hoekom Bitcoin ook uitstekend is vir jou",
	"business/why|why_learn_more_lowercase": "Leer meer →",
	"business/why|why_s1_c1":
		"Inflasie vind plaas wanneer meer geld uit die niet gedruk of geskep word. Dit maak dat die geld in jou sak mettertyd minder werd word — en dis hoekom pryse jaar na jaar styg.",
	"business/why|why_s1_c2":
		"Bitcoin het 'n vaste aanbod van 21 miljoen munte. Geen regering, bank of maatskappy kan meer daarvan druk nie. Jou Bitcoin-spaargeld hou mettertyd sy waarde in plaas daarvan om dit stilweg te verloor.",
	"business/why|why_s2_c1":
		"Verskeie Amerikaanse banke het in onlangse jare ineengestort weens banklopies. Toe te veel kliënte op 'n slag wou onttrek, het die banke nie genoeg kontant gehad om almal terug te betaal nie.",
	"business/why|why_s2_c2":
		"In plaas daarvan om jou geld net te hou, leen en belê banke die meeste daarvan. As daardie beleggings sleg verloop — of as deposante hul vertroue verloor — kan die bank faal, en jou deposito's kan gevries of verloor word.",
	"business/why|why_s2_c3":
		"Met Bitcoin kan jy jou eie geld direk in jou eie beursie hou. Geen bank. Geen tussenganger. Geen banklopie nie.",
	"business/why|why_s3_c1":
		"Anders as kredietkaarte, PayPal of tradisionele bankrekeninge, vereis Bitcoin niemand se toestemming om te gebruik nie.",
	"business/why|why_s3_c2":
		"Niemand kan jou rekening vries, 'n betaling blok of jou van die netwerk afsny nie. Dit is die eerste finansiële stelsel in die geskiedenis wat jy vrylik kan gebruik, sonder vrees vir sensuur of beslaglegging.",
	"business/why|why_s4_c1":
		"Bitcoin word dikwels verkeerd verstaan, maar dit doen stilweg baie goed in die wêreld.",
	"business/why|why_s4_c2":
		"Dit het menseregte-aktiviste gehelp om vir vryheid te veg, wêreldwye metaanuitlaatgasse vanaf stortingsterreine en oliebronne verminder, kragnetwerke gestabiliseer, en openbare goedere soos nasionale parke befonds.",

	// buy
	"buy|buy_bitcoin_guide": "Hoe om Bitcoin te koop",
	"buy|buy_step_1_header": "Kies jou land",
	"buy|buy_step_2_header": "Kies jou betaalmetode",
	"buy|buy_step_3_header": "Jou koopopsies",
	"buy|buy_step_4_header": "Bêre jou Bitcoin veilig",

	// common
	"common|common_sticker_files_mission_5": "versoek 'n pak",

	// flyers
	"flyers|flyers_intro_header":
		"Hoe om hierdie Bitcoin-strooibiljette te druk en op te plak",

	// get-involved
	"get-involved|get_involved_and_help_spread_bitcoin":
		"Raak betrokke en versprei Bitcoin",
	"get-involved|get_involved_description":
		"Ons gratis hulpbronne maak dit makliker om Bitcoin-aanneming te versprei. Plakkers, strooibiljette, besigheidspakkette en 'n oopbron-kodebasis waartoe enigeen kan bydra.",
	"get-involved|get_involved_header": "Raak betrokke en versprei Bitcoin.",
	"get-involved|get_involved_intro_5":
		"Jy kan help om dit te verander. Ons het verskeie gratis hulpbronne geskep om dit makliker te maak om die hoop wat Bitcoin bring, aan die mense om jou te versprei.",

	// inflation
	"inflation|inflation_choose": "Kies jou geld om die bewyse te sien",
	"inflation|inflation_choose_another": "← Kies 'n ander geld",
	"inflation|inflation_h1_orange":
		"Bitcoin het geen inflasie nie, maar jou geld wel.",
	"inflation|inflation_sticker_learn": "Leer hoe Bitcoin kan help.",
	"inflation|inflation_sticker_lets_find_out": "Kom ons vind uit.",

	// lightning
	"lightning|lightning_s1_c4": "Gaan kyk na ons",

	// nostr/index
	"nostr/index|nostr_page_description":
		"Nostr is 'n nuwe gedesentraliseerde protokol vir aanlynkommunikasie — geen enkele maatskappy beheer dit nie, Bitcoin-zaps is natuurlik ingebou, en jy kan tussen kliënte beweeg sonder om volgelinge te verloor.",

	// sticker-files/index
	"sticker-files/index|sticker_files_header":
		"Druk jou eie Bitcoin-plakkers met hierdie Bitcoin-plakkerlêers.",

	// stickers
	"stickers|stickers_flyers_link_before":
		"Terwyl jy daarmee besig is, druk en plak jou eie",
	"stickers|stickers_instructions_1":
		"Voer jou posadres in en ons stuur 'n gratis Bitcoin-plakkerpak per pos. Jou plakkers word in 'n gewone wit koevert versend.",
};

function main() {
	const raw = fs.readFileSync(REPORT_PATH, "utf8");
	const report = JSON.parse(raw);

	let applied = 0;
	let skipped = 0;
	let missing = [];

	for (const entry of report.entries) {
		const lookupKey = `${entry.namespace}|${entry.key}`;
		if (typeof entry.targetTranslation === "string") {
			skipped++;
			continue;
		}
		if (!(lookupKey in TRANSLATIONS)) {
			missing.push(lookupKey);
			continue;
		}
		entry.targetTranslation = TRANSLATIONS[lookupKey];
		applied++;
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");

	console.log(
		`Applied ${applied} translations, skipped ${skipped} already-resolved entries.`,
	);
	if (missing.length > 0) {
		console.log(`\nStill unresolved (${missing.length}):`);
		for (const k of missing) console.log(`  - ${k}`);
		process.exitCode = 1;
	}
}

main();
