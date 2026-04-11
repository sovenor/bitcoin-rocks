/**
 * Creates Slovenian (sl) translation files for all bitcoin-vs-* comparison pages
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sl';
const today = '2026-04-11';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

writeFile(`bitcoin-vs-gold_${lang}.json`, {
	"bitcoin_vs_gold": "Bitcoin proti zlatu",
	"gold_header": "RAZLIKA MED", "gold_header_2": "BITCOINOM", "gold_header_3": "IN", "gold_header_4": "ZLATOM",
	"gold_intro_1": "Zlato se kot denar uporablja že tisočletja in mnogi ga smatrajo za finančno varno zatočišče.",
	"gold_intro_2": "Bitcoin je digitalni denar, ustvarjen leta 2009, in mnogi ga prav tako smatrajo za finančno varno zatočišče.",
	"gold_intro_3": "Kako pa se fizična kovina, kot je zlato, razlikuje od digitalnega denarja, kot je Bitcoin? Poglejmo razlike med dvema oblikama denarja: Bitcoinom in zlatom.",
	"gold": "ZLATO",
	"gold_point_1": "Mora biti fizično poslano", "gold_point_2": "Digitalna dolžniška razmerja", "gold_point_3": "Ponudba se vsako leto povečuje", "gold_point_4": "Elastična ponudba", "gold_point_5": "Fizično centralizirano", "gold_point_6": "Težko preverljivo", "gold_point_7": "Težko deljivo",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Lahko se pošlje prek interneta", "bitcoin_point_2": "Digitalno izvorno", "bitcoin_point_3": "Fiksna ponudba 21M BTC", "bitcoin_point_4": "Neelastična ponudba", "bitcoin_point_5": "Decentraliziran", "bitcoin_point_6": "Enostavno preverljiv", "bitcoin_point_7": "Enostavno deljiv",
	"point_1_summary_1": "Ker je Bitcoin digitalen, ga lahko kdorkoli z internetno povezavo pošlje skoraj takoj za zelo nizke provizije. Ker je zlato fizično, ga ni mogoče prenašati prek interneta in mora biti za prenos lastništva fizično poslano.",
	"point_2_summary_1": "Bitcoin je digitalno izvorno sredstvo, kar pomeni, da lahko prek interneta prenesete polno lastništvo. Nekatera podjetja ponujajo možnost nakupa zlata prek spleta brez prejema dejanskega fizičnega zlata, namesto tega zaupate podjetju, da zlato hrani za vas. To je bolj podobno digitalnemu dolžniškemu razmerju, ker imate le obljubo podjetja namesto dejanskega sredstva.",
	"point_3_summary_1": "Bitcoin ima fiksno zgornjo mejo 21 milijonov BTC, ki bodo kdaj obstajali.",
	"point_3_summary_2": "Nova ponudba zlata se vsako leto izkoplje iz zemlje, kar povzroča inflacijo skupne ponudbe. Ocenjuje se, da skupna ponudba zlata raste za približno 1,6 % na leto, kar pomeni, da se vaš delež pogače vsako leto zmanjša za 1,6 %.",
	"point_3_summary_3": "To je manj kot fiat inflacija, vendar je še vedno inflacija.",
	"point_3_summary_4": "Pri Bitcoinu se vaš delež pogače nikoli ne zmanjša.",
	"point_4_summary_1": "Zlato ima elastično ponudbo, kar pomeni, da z naraščajočo ceno zlata obstaja večja motivacija za rudarjenje več zlata. To pogosto ustvarja pritisk na znižanje cene zlata, ko se odprejo novi rudniki.",
	"point_4_summary_2": "Pri Bitcoinu, ne glede na to, kako visoko cena naraste, ne morete ustvariti več kot 21M Bitcoinov.",
	"point_4_summary_3": "Bitcoin je prvo sredstvo z neelastičnim razmerjem med ceno in ponudbo.",
	"point_5_summary_1": "Omrežje Bitcoin je decentralizirano.", "point_5_summary_2": "Desettisoče neodvisnih vozlišč preverja pravila omrežja.", "point_5_summary_3": "Uporabniki lahko prevzamejo Bitcoin v lastno hrambo s prenosom aplikacije.",
	"point_5_summary_4": "Čeprav je mogoče imeti fizično zlato v lastni hrambi, je večina fizičnega zlata shranjena v ogromnih trezorjih v lasti skrbnikov, kar ga dela fizično centraliziranega.",
	"point_6_summary_1": "Pri Bitcoinu je neverjetno enostavno preveriti, da imate pravi Bitcoin, tako da vzamete svoje kovance v lastno hrambo in zaženete polno vozlišče.",
	"point_6_summary_2": "Lastna hramba je tako enostavna kot prenos aplikacije.",
	"point_6_summary_3": "Polno vozlišče je preprosta programska oprema, ki zagotavlja spoštovanje pravil omrežja in preverja, da imate pravi Bitcoin.",
	"point_6_summary_4": "Fizično zlato je lahko zelo težko preveriti kot pristno. Tudi če preverite, da je zunanjost fizičnega zlata prava, je notranjost vaše zlate palice lahko volfram ali druga kovina. Edini način, da resnično preverite, da imate fizično zlato, za katero mislite, da ga imate, je, da ga stalite.",
	"point_7_summary_1": "Tako kot je 100 centov v 1 dolarju, je 100.000.000 satošijev v 1 Bitcoinu. To omogoča uporabo Bitcoina za nakupe vseh velikosti, vključno z mikrotransakcijami v vrednosti le nekaj centov.",
	"point_7_summary_2": "To naredi Bitcoin dobro orodje za podjetja.",
	"point_7_summary_3": "Ker je fizično zlato težko deljivo, ga ni mogoče enostavno uporabiti za nakupe, zlasti majhne nakupe."
});

writeFile(`bitcoin-vs-banks_${lang}.json`, {
	"bitcoin_vs_banks": "Bitcoin proti bankam",
	"banks_header": "RAZLIKA MED", "banks_header_2": "BITCOINOM", "banks_header_3": "IN", "banks_header_4": "BANKAMI",
	"banks_intro_1": "Banke nadzorujejo denar že stoletja in delujejo kot posredniki finančnih transakcij ter čuvarji denarnega sistema.",
	"banks_intro_2": "Bitcoin je enakovrstniški sistem digitalnega denarja, ki deluje brez bank ali centralnih organov.",
	"banks_intro_3": "Kako pa se omrežje Bitcoin razlikuje od tradicionalnega bančnega sistema? Poglejmo ključne razlike med tema dvema bistveno različnima pristopoma k denarju.",
	"banks": "BANKE",
	"banks_point_1": "Zahtevajo dovoljenje", "banks_point_2": "Omejene ure delovanja", "banks_point_3": "Zasebno, neprozorno delovanje", "banks_point_4": "Nadzorujejo vaš denar", "banks_point_5": "Spremenljive provizije in kazni", "banks_point_6": "Omogočajo prekoračitve s provizijami", "banks_point_7": "Lahko blokirajo transakcije",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Dostop brez dovoljenja", "bitcoin_point_2": "Vedno na voljo 24/7", "bitcoin_point_3": "Prozorno in odprto", "bitcoin_point_4": "Vi nadzorujete svoj denar", "bitcoin_point_5": "Predvidljive, nizke provizije", "bitcoin_point_6": "Ni mogoče prekoračiti", "bitcoin_point_7": "Odporno na cenzuro",
	"point_1_summary_1": "Bitcoin je brez dovoljenj, kar pomeni, da ga lahko uporablja kdorkoli z dostopom do interneta, brez prošnje za soglasje kakršnega koli organa.",
	"point_1_summary_2": "Bitcoin deluje brez vratarjev",
	"point_1_summary_3": "— nihče vam ne more zavrniti dostopa. Banke pa lahko zavrnejo odprtje računov, zamrznejo obstoječe račune ali zavrnejo storitve na podlagi svojih pravil ali vladnih predpisov.",
	"point_2_summary_1": "Omrežje Bitcoin deluje 24 ur na dan, 7 dni v tednu, 365 dni na leto, brez izpadov za vzdrževanje ali praznikov. Banke imajo omejene delovne ure, so ob koncih tedna in praznikih zaprte ter imajo pogosto obdobja vzdrževanja sistema, ko storitve niso na voljo.",
	"point_3_summary_1": "Vse bitcoinove transakcije so zabeležene na javni verigi blokov, ki jo lahko kdorkoli preveri in revidira.",
	"point_3_summary_2": "Banke delujejo z zasebnimi glavnimi knjigami in neprozornimi notranjimi procesi, ki jih stranke ne morejo neodvisno preveriti.",
	"point_4_summary_1": "Z Bitcoinom si lahko držite lastne zasebne ključe in imate popoln nadzor nad svojim denarjem.",
	"point_4_summary_2": "Ugotovite več o bitcoinovih denarnicah",
	"point_4_summary_3": "da razumete lastno hrambo. Banke hranijo vaš denar na svojih računih in lahko zamrznejo, omejijo ali prepovedo dostop do vaših sredstev kadarkoli.",
	"point_5_summary_1": "Bitcoinove transakcijske provizije so prozorne, predvidljive in ponavadi zelo nizke. Banke imajo pogosto skrite provizije, mesečne provizije za račun, provizije za prekoračitev, provizije za prenos, provizije za bankomat in druge kazni, ki se lahko sčasoma znatno nakopičijo.",
	"point_6_summary_1": "Bitcoin vam preprečuje trošenje denarja, ki ga nimate — porabite lahko le Bitcoin, ki ga dejansko imate. Banke omogočajo prekoračitve (poraba več, kot je stanje na vašem računu) in nato zaračunajo znatne provizije za to 'storitev', kar pogosto vodi do kaskadnih kazni.",
	"point_7_summary_1": "Bitcoinove transakcije so odporne na cenzuro — ko so poslane v omrežje, jih nobena centralna oblast ne more ustaviti ali razveljaviti. Banke lahko blokirajo, zamrznejo, prekličejo ali omejijo transakcije na podlagi svojih pravil, vladnih ukazov ali algoritmov za zaznavanje sumljivih aktivnosti."
});

writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin proti obveznicam",
	"bonds_header": "RAZLIKA MED", "bonds_header_2": "BITCOINOM", "bonds_header_3": "IN", "bonds_header_4": "OBVEZNICAMI",
	"bonds_intro_1": "Državne obveznice so pogosto označene kot 'brez tveganja' in tradicionalne finance jih smatrajo za najvarnejše mesto za hrambo premoženja.",
	"bonds_intro_2": "Bitcoin je digitalni denar, ki deluje neodvisno od katere koli vlade ali centralnega organa.",
	"bonds_intro_3": "Ali so obveznice res brez tveganja? In kako se primerjajo z Bitcoinom kot sredstvom za hrambo vrednosti? Poglejmo ključne razlike med Bitcoinom in državnimi obveznicami.",
	"bonds": "OBVEZNICE",
	"bonds_point_1": "Skrita tveganja", "bonds_point_2": "Izguba vrednosti zaradi inflacije", "bonds_point_3": "Lahko postanejo nelikvidne", "bonds_point_4": "Neuspele dražbe", "bonds_point_5": "Fiksen donos", "bonds_point_6": "Zahtevajo posrednike", "bonds_point_7": "Odvisnost od vlade",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Brez tveganja nasprotne stranke", "bitcoin_point_2": "Fiksna ponudba", "bitcoin_point_3": "Vedno likviden", "bitcoin_point_4": "Brez tveganja dražbe", "bitcoin_point_5": "Potencial za rast vrednosti", "bitcoin_point_6": "Možnost lastne hrambe", "bitcoin_point_7": "Brez odvisnosti od vlade",
	"point_1_summary_1": "Obveznice so 'brez tveganja' le v nominalnih dolarskih vrednostih, kar pomeni, da boste dobili svoje dolarje nazaj, če držite do zapadlosti. To pa zanemarja inflacijsko tveganje, tveganje obrestnih mer in možnost, da bodo ti dolarji ob vrnitvi vredni veliko manj.",
	"point_1_summary_2": "Bitcoin ima jasna, prozorna tveganja (nestanovitnost), vendar nobenih skritih tveganj nasprotne stranke — bodisi imate svoj Bitcoin ali pa ga nimate.",
	"point_2_summary_1": "Ko je inflacija višja od donosa obveznic, imetniki obveznic vsako leto izgubljajo kupno moč. 2 % donos obveznice pri 4 % inflaciji pomeni, da izgubljate 2 % realne vrednosti letno.",
	"point_2_summary_2": "Ugotovite več o inflaciji.",
	"point_2_summary_3": "Fiksna ponudba Bitcoina 21 milijonov kovancev pomeni, da ga inflacija ne more razvrednotiti, obveznice pa so lahko razvrednotene s tiskanjem denarja.",
	"point_3_summary_1": "Med finančnimi krizami lahko trgi obveznic zamrznejo in postanejo nelikvidni. Banke, kot je Silicon Valley Bank, so obtičale z obveznicami, ki so znatno izgubile vrednost ob dvigu obrestnih mer, kar je prispevalo k njihovemu propadu.",
	"point_3_summary_2": "Ugotovite, kako je Silicon Valley Bank propadla in zakaj je Bitcoin drugačen.",
	"point_3_summary_3": "Bitcoin se trguje globalno 24/7 in ni nikoli doživel likvidnostne krize — vedno lahko najdete kupca ali prodajalca.",
	"point_4_summary_1": "Dražbe državnih obveznic lahko propadejo, ko ni dovolj kupcev za vladni dolg. To se je v zadnjih letih zgodilo že večkrat, vključno s šibkim povpraševanjem po 10-letnih obveznicah leta 2022 in 30-letnih obveznicah leta 2023.",
	"point_4_summary_2": "Ugotovite več o teh neuspelih dražbah državnih obveznic.",
	"point_4_summary_3": "Cena Bitcoina se določa prek neprekinjenih globalnih trgov brez centralne dražbe, ki bi lahko propadla.",
	"point_5_summary_1": "Donosi obveznic so fiksirani ob nakupu. Tudi če gospodarstvo hitro raste ali se valuta znatno razvrednoti, vaš donos ostane enak.",
	"point_5_summary_2": "Bitcoin ima potencial za znatno rast vrednosti z naraščajočim sprejetjem in fiksno ponudbo, ki se srečuje z naraščajočim povpraševanjem.",
	"point_6_summary_1": "Večina ljudi drži obveznice prek posrednikov, kot so banke, posredniki ali skladi, kar ustvarja tveganje nasprotne stranke. Obveznic dejansko neposredno ne posedujete.",
	"point_6_summary_2": "Pri Bitcoinu si lahko prevzamete neposredno lastništvo prek lastne hrambe, s čimer popolnoma odpravite tveganje nasprotne stranke.",
	"point_7_summary_1": "Obveznice so v celoti odvisne od sposobnosti in pripravljenosti vlade za plačilo. Če se vlada sooča s fiskalno krizo, neizpolnjevanjem obveznosti ali se odloči za odplačilo dolga z inflacijo, imetniki obveznic trpijo.",
	"point_7_summary_2": "Bitcoin deluje neodvisno od katere koli vlade in ga ne morejo nadzorovati, napihati ali razvrednotiti politične oblasti."
});

writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin proti gotovini",
	"cash_header": "RAZLIKA MED", "cash_header_2": "BITCOINOM", "cash_header_3": "IN", "cash_header_4": "GOTOVINO",
	"cash_intro_1": "Gotovina se kot denar uporablja že stoletja in ostaja najpogostejša oblika fizičnega denarja na svetu.",
	"cash_intro_2": "Bitcoin je digitalni denar, ustvarjen leta 2009, ki deluje neodvisno od katere koli vlade ali centralnega organa.",
	"cash_intro_3": "Kako pa se fizična gotovina razlikuje od digitalnega denarja, kot je Bitcoin? Poglejmo ključne razlike med tema dvema oblikama denarja: Bitcoinom in gotovino.",
	"cash": "GOTOVINA",
	"cash_point_1": "Zahteva fizično prisotnost", "cash_point_2": "Omejena z mejami", "cash_point_3": "Lahko je čez noč razveljavljena", "cash_point_4": "Lahko se ponaredi", "cash_point_5": "Nadzorovana s strani vlade", "cash_point_6": "Tveganja fizičnega shranjevanja", "cash_point_7": "Omejena deljivost",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Lahko se pošlje prek interneta", "bitcoin_point_2": "Deluje globalno", "bitcoin_point_3": "Ni ga mogoče razveljaviti", "bitcoin_point_4": "Ni ga mogoče ponarediti", "bitcoin_point_5": "Decentralizirano omrežje", "bitcoin_point_6": "Digitalna lastna hramba", "bitcoin_point_7": "Enostavno deljiv",
	"point_1_summary_1": "Bitcoin se lahko pošlje kamorkoli na svetu takoj prek interneta, medtem ko gotovina zahteva fizično prisotnost ali zaupanja vredne posrednike. Gotovine ne morete poslati po e-pošti, Bitcoin pa lahko pošljete komurkoli z internetno povezavo v nekaj minutah.",
	"point_2_summary_1": "Bitcoin deluje povsod po svetu enako — v omrežju Bitcoin ni mej. Gotovina je omejena z geografijo, menjalnimi tečaji in lokalnim sprejetjem. Poskusite uporabiti ameriške dolarje na podeželju Tajske ali japonske jene na podeželju Mehike.",
	"point_3_summary_1": "Vlade lahko in res čez noč razveljavijo gotovino s politikami demonetizacije, kot je Indija storila leta 2016, ko je prepovedala določene bankovce.",
	"point_3_summary_2": "Tudi brez prepovedi določenih bankovcev vlade nenehno razvrednotijo gotovino z inflacijo.",
	"point_3_summary_3": "Bitcoina ne more razveljaviti nobena vlada ali oblast — obstaja na globalnem, decentraliziranem omrežju, ki ga noben subjekt ne nadzoruje.",
	"point_4_summary_1": "Gotovino je mogoče ponarediti in odkrivanje ponarejenih bankovcev je brez posebne opreme pogosto težko. Tudi z varnostnimi elementi ponarejen denar še vedno kroži. Bitcoin uporablja kriptografski dokaz, ki naredi ponareditev matematično nemogoče.",
	"point_5_summary_1": "Gotovino izdaja in nadzoruje vlada, ki lahko po želji tiska več, spremeni dizajn ali razglasi določene bankovce za neveljavne. Bitcoin deluje na decentraliziranem omrežju, kjer nobena posamezna oblast nima nadzora nad ponudbo denarja ali pravili.",
	"point_6_summary_1": "Gotovino je treba shranjevati fizično, kar jo dela ranljivo za krajo, izgubo, požar ali zaseg. Veliki zneski zahtevajo drage varnostne ukrepe.",
	"point_6_summary_2": "Bitcoin pa se lahko varno shranjuje v lastni hrambi",
	"point_6_summary_3": "z aplikacijo na pametnem telefonu ali specializirano denarnico, kar vam daje poln nadzor nad vašim denarjem brez tveganj fizičnega shranjevanja.",
	"point_7_summary_1": "Gotovina ima minimalne apoene — centa ni mogoče razdeliti na manjše dele. Bitcoin se lahko razdeli na 100 milijonov manjših enot, imenovanih satoši, kar omogoča mikroplačila in natančne transakcije kateregakoli zneska."
});

writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin proti CBDC",
	"cbdc_header": "KAKŠEN BI MORAL BITI", "cbdc_header_2": "DIGITALNI DENAR", "cbdc_header_3": "?",
	"cbdc_intro_1": "Naš svet je vse bolj digitalen, in prav tako naš denar.",
	"cbdc_intro_2": "To sproža vprašanje: kakšen želimo, da je naš digitalni denar?",
	"cbdc_intro_3": "Mnoge države raziskujejo izdajo digitalne valute centralne banke (CBDC), ki je povsem digitalna oblika naše obstoječe državne valute.",
	"cbdc_intro_4": "Poglejmo razliko med dvema oblikama digitalnega denarja: Bitcoinom in digitalnimi valutami centralnih bank (CBDC).",
	"cbdc": "CBDC",
	"cbdc_point_1": "Zahteva dovoljenje za porabo", "cbdc_point_2": "Vaš denar lahko poteče", "cbdc_point_3": "Brez omejitve skupne ponudbe", "cbdc_point_4": "Povezana z vladnim ID", "cbdc_point_5": "Centralizirana", "cbdc_point_6": "Uporabniki ne morejo poganjati vozlišč", "cbdc_point_7": "Enostavno zamrzljiva", "cbdc_point_8": "Morate zaupati skrbniku", "cbdc_point_9": "Spremenljiva denarna politika", "cbdc_point_10": "Nezavarovana",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Trosíte brez dovoljenja", "bitcoin_point_2": "Vaš denar nikoli ne poteče", "bitcoin_point_3": "Fiksna ponudba 21M BTC", "bitcoin_point_4": "Psevdonimen", "bitcoin_point_5": "Decentraliziran", "bitcoin_point_6": "Uporabniki lahko poganjajo vozlišča", "bitcoin_point_7": "Ni ga mogoče zamrzniti", "bitcoin_point_8": "Možnost lastne hrambe", "bitcoin_point_9": "Predvidljiva denarna politika", "bitcoin_point_10": "Zavarovan",
	"point_1_summary_1": "Bitcoin je zasnovan tako, da vam daje poln nadzor nad vašim denarjem.", "point_1_summary_2": "Nihče vam ne more preprečiti transakcij z Bitcoinom.", "point_1_summary_3": "CBDC so zasnovane tako, da dajejo vladam in centralnim bankam poln nadzor nad vašim denarjem.", "point_1_summary_4": "CBDC omejujejo vašo zasebnost in svobodo.",
	"point_2_summary_1": "Bitcoin nikoli ne poteče in nima mesečnih provizij.", "point_2_summary_2": "CBDC so lahko programirane tako, da potečejo.", "point_2_summary_3": "Ko CBDC potečejo, vam preprečujejo varčevanje za prihodnost.",
	"point_3_summary_1": "Bitcoin ima fiksno zgornjo mejo 21 milijonov BTC, ki bodo kdaj obstajali.", "point_3_summary_2": "CBDC, tako kot državne valute, ki jih danes uporabljamo, nimajo nobene zgornje meje skupne ponudbe. Ta pomanjkljiva meja omogoča vladi razširjanje denarne mase.", "point_3_summary_3": "To povzroča inflacijo.",
	"point_4_summary_1": "Bitcoinovi naslovi so psevdonimni, kar pomeni, da niso povezani z vašim pravim imenom ali identiteto. CBDC so neposredno povezane z vašim pravim imenom in identiteto, kar omogoča množičen finančni nadzor in cenzuro.",
	"point_5_summary_1": "Omrežje Bitcoin je decentralizirano.", "point_5_summary_2": "Desettisoče neodvisnih vozlišč preverja pravila omrežja.", "point_5_summary_3": "CBDC so centralizirane v rokah vlade in centralnih bank, ki imajo popoln nadzor nad omrežjem CBDC.",
	"point_6_summary_1": "Bitcoin omogoča komurkoli poganjanje vozlišča, ki preverja, da se pravila omrežja spoštujejo. CBDC ne dovoljujejo nikomur poganjanja vozlišč in se zanašajo na zaupanje vladi in centralnim bankam.",
	"point_7_summary_1": "Bitcoin je zasnovan tako, da drugim onemogoča zamrznitev vašega denarja. CBDC so zasnovane tako, da vladam in centralnim bankam olajšajo zamrznitev vašega denarja.",
	"point_8_summary_1": "Bitcoin je zasnovan tako, da vam daje poln nadzor nad vašim denarjem.", "point_8_summary_2": "Le poskrbite, da ga prevzamete v denarnico z lastno hrambo.", "point_8_summary_3": "Ko imate bitcoin v lastni hrambi, vam nihče ne more preprečiti dostopa do vašega denarja.", "point_8_summary_4": "CBDC zahtevajo, da zaupate skrbniku, kot je banka ali vlada, da za vas hrani vaš denar.",
	"point_9_summary_1": "Bitcoin ima predvidljivo denarno politiko, ki je trdno določena v kodi in je ni mogoče spremeniti. CBDC, tako kot naše sedanje valute, imajo denarno politiko, ki se jo da enostavno spremeniti.", "point_9_summary_2": "To ima za posledico inflacijo, ko politiki natisnejo preveč denarja.",
	"point_10_summary_1": "Bitcoin je najvarnejše računalniško omrežje, kar je kdaj obstajalo, in ni bilo nikoli vdrto. CBDC se zanašajo na vlade in banke za zavarovanje omrežja, ki so bile v zgodovini neštetokrat vdirene."
});

writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin proti kriptu",
	"crypto_header": "RAZLIKA MED", "crypto_header_2": "BITCOINOM", "crypto_header_3": "IN", "crypto_header_4": "KRIPTOM",
	"crypto_intro_1": "Prostor kriptovalut je eksplodiral s tisočimi različnih digitalnih žetonov in projektov.",
	"crypto_intro_2": "Čeprav je bil Bitcoin prvi in ostaja najznamenejša kriptovaluta, se bistveno razlikuje od preostale kripto industrije.",
	"crypto_intro_3": "Poglejmo ključne razlike med Bitcoinom in širšim ekosistemom kriptovalut.",
	"crypto": "KRIPTO",
	"crypto_point_1": "Pogoste spremembe in razcepljenja", "crypto_point_2": "Centraliziran nadzor", "crypto_point_3": "Neomejena ali inflacijska ponudba", "crypto_point_4": "Zapleteni protokoli", "crypto_point_5": "Eksperimentalno soglasje", "crypto_point_6": "Špekulativni uporabniški žetoni", "crypto_point_7": "Nestanovitni in krhki", "crypto_point_8": "Korporativna podpora",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Nespremenljiv protokol", "bitcoin_point_2": "Resnično decentraliziran", "bitcoin_point_3": "Fiksna ponudba 21M BTC", "bitcoin_point_4": "Preprost in dostopen", "bitcoin_point_5": "Preizkušen dokaz dela", "bitcoin_point_6": "Čist digitalni denar", "bitcoin_point_7": "Antifragilen", "bitcoin_point_8": "Nobeden subjekt ga ne nadzoruje",
	"point_1_summary_1": "Protokol Bitcoina ostaja od leta 2009 v bistvu nespremenjen, kar zagotavlja predvidljiva pravila, ki jih ni mogoče enostavno spremeniti. Večina kripto projektov pogosto posodablja svoje protokole, spreminja ekonomiko žetonov ali se razceplja v nove različice, kar ustvarja negotovost za uporabnike.",
	"point_2_summary_1": "Bitcoin deluje na resnično decentraliziranem omrežju z desttisoči neodvisnih vozlišč po vsem svetu. Mnoge kripto projekte nadzorujejo fundacije, podjetja ali majhne skupine razvijalcev, ki lahko enostransko odločajo o prihodnosti protokola.",
	"point_3_summary_1": "Bitcoin ima fiksno zgornjo mejo 21 milijonov kovancev, ki bodo kdaj obstajali, kar ga dela najredkejše digitalno sredstvo. Večina kripto projektov ima neomejeno ponudbo, inflacijske mehanizme ali možnost kovanja novih žetonov po želji, s čimer sčasoma redčijo vrednost imetnikov.",
	"point_4_summary_1": "Bitcoin ima en preprost namen: enakovrstniški digitalni denar. Kdorkoli ga lahko razume in uporablja z osnovnim znanjem. Mnogi kripto projekti vključujejo zapletene pametne pogodbe, DeFi protokole ali mehanizme upravljanja, ki za varno uporabo zahtevajo tehnično strokovno znanje.",
	"point_5_summary_1": "Bitcoin uporablja soglasje z dokazom dela, ki je bojno preizkušeno več kot 15 let brez enega samega uspešnega napada na glavno omrežje. Mnogi kripto projekti uporabljajo eksperimentalne mehanizme soglasja, kot je dokaz deleža ali delegirani sistemi, ki dolgoročne varnosti še niso dokazali.",
	"point_6_summary_1": "Bitcoin služi kot digitalni denar — sredstvo za hrambo vrednosti in menjalno sredstvo. Večina kripto žetonov so uporabniški žetoni za specifične platforme, žetoni za upravljanje ali špekulativna sredstva z nejasno vrednostno ponudbo.",
	"point_7_summary_1": "Bitcoin postaja pod napadom močnejši in je preživel vsako krizo, prepoved in kritiko, ki so bili usmerjeni nanj. Večina kripto projektov je krhka in se lahko sesuje pod regulativnim pritiskom, tehničnimi napakami ali tržnimi padci.",
	"point_8_summary_1": "Bitcoin nima nobenega direktorja, nobenega podjetja za seboj in nobene posamezne točke odpovedi. Mnoge kripto projekte podpirajo podjetja tveganega kapitala, imajo prepoznavno vodstvo ali so odvisni od specifičnih podjetij za svoje nadaljnje delovanje."
});

writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin proti umetnosti",
	"fine_art_header": "RAZLIKA MED", "fine_art_header_2": "BITCOINOM", "fine_art_header_3": "IN", "fine_art_header_4": "UMETNOSTJO",
	"fine_art_intro_1": "Umetnost je že stoletja luksuzna naložba in premožni zbiratelji jo pogosto smatrajo za sredstvo za hrambo vrednosti.",
	"fine_art_intro_2": "Bitcoin je digitalni denar, ki ga mnogi prav tako smatrajo za sredstvo za hrambo vrednosti in naložbo.",
	"fine_art_intro_3": "Kako pa se fizična umetniška dela razlikujejo od digitalnega denarja, kot je Bitcoin? Poglejmo razlike med dvema oblikama naložb: Bitcoinom in umetnostjo.",
	"fine_art": "UMETNOST",
	"fine_art_point_1": "Vsak kos je edinstven", "fine_art_point_2": "Zahteva specializirane dražbe", "fine_art_point_3": "Visoke dražbene provizije", "fine_art_point_4": "Ni ga mogoče razdeliti", "fine_art_point_5": "Zahteva strokovno avtentikacijo", "fine_art_point_6": "Ranljiva za poškodbe", "fine_art_point_7": "Samo za premožne zbiratelje",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Popolnoma zamenljiv", "bitcoin_point_2": "Globalni trg 24/7", "bitcoin_point_3": "Nizke transakcijske provizije", "bitcoin_point_4": "Enostavno deljiv", "bitcoin_point_5": "Kriptografsko preverljiv", "bitcoin_point_6": "Težko uničljiv", "bitcoin_point_7": "Dostopen vsem",
	"point_1_summary_1": "Bitcoin je popolnoma zamenljiv, kar pomeni, da je vsak bitcoin enak in medsebojno zamenljiv — en bitcoin je enak enemu bitcoinu kjerkoli na svetu. Umetnost je po svoji naravi nezamenljiva, vsako delo je edinstveno po svojem nastanku, zgodovini, stanju in provenienčnosti, kar dela neposredne primerjave in vrednotenja izredno težke.",
	"point_2_summary_1": "Bitcoin se trguje na globalnem trgu 24/7, kjer lahko kdorkoli z dostopom do interneta takoj kupuje ali prodaja. Umetnost zahteva specializirane dražbene hiše, kot sta Sotheby's ali Christie's, zasebne trgovce ali ekskluzivne galerije. Prodaja lahko traja mesece in dostop do trga je omejen.",
	"point_3_summary_1": "Nakup ali prodaja bitcoina ponavadi stane manj kot 1 % v provizijah, pogosto veliko manj. Prodaja umetnosti vključuje znatne stroške, vključno s premijo kupca (10–25 %), provizijo prodajalca (10–15 %), zavarovanjem, pošiljanjem, shranjevanjem in provizijami za avtentikacijo. Ti kombinirani stroški lahko v eni sami transakciji zlahka presežejo 30–40 % vrednosti dela.",
	"point_4_summary_1": "Bitcoin se lahko razdeli na 100 milijonov manjših enot, imenovanih satoši, kar ga dela idealnega za transakcije katere koli velikosti. Umetnosti ni mogoče razdeliti — ne morete imeti delčka slike ali prodati le del skulpture. Ta nedeljivost omejuje naložbeno prilagodljivost.",
	"point_5_summary_1": "Lastništvo in pristnost Bitcoina se lahko kriptografsko preveri na verigi blokov s strani kogar koli z osnovnim tehničnim znanjem. Umetnost zahteva drago strokovno avtentikacijo, raziskavo provenienčnosti in znanstveno analizo. Kljub strokovnemu preverjanju ponaredki redno zavajajo svet umetnosti. Bitcoina pa ni mogoče ponarediti.",
	"point_6_summary_1": "Bitcoin, če je pravilno varnostno kopiran, ne more biti uničen s povodmi, požari, potresi, orkani, krajo ali drugimi katastrofami. Umetnost je ranljiva za vse oblike fizičnega uničenja in degradacije.",
	"point_7_summary_1": "Bitcoin lahko kupuje in prodaja kdorkoli z dostopom do interneta in majhnim zneskom denarja za naložbo. Naložbe v umetnost so v veliki meri omejene na premožne zbiratelje zaradi visokih minimalnih cen, ekskluzivnega dostopa do dražb, zahtev za shranjevanje, stroškov zavarovanja in specializiranega znanja."
});

writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin proti nepremičninam",
	"real_estate_header": "RAZLIKA MED", "real_estate_header_2": "BITCOINOM", "real_estate_header_3": "IN", "real_estate_header_4": "NEPREMIČNINAMI",
	"real_estate_intro_1": "Nepremičnine so že desetletja priljubljena naložba in se pogosto smatrajo za stabilna sredstva za hrambo vrednosti.",
	"real_estate_intro_2": "Bitcoin je digitalni denar, ustvarjen leta 2009, in mnogi ga prav tako smatrajo za sredstvo za hrambo vrednosti in naložbo.",
	"real_estate_intro_3": "Kako pa se fizična nepremičnina razlikuje od digitalnega denarja, kot je Bitcoin? Poglejmo razlike med dvema oblikama naložb: Bitcoinom in nepremičninami.",
	"real_estate": "NEPREMIČNINE",
	"real_estate_point_1": "Ni jih mogoče premakniti", "real_estate_point_2": "Ni jih mogoče enostavno razdeliti", "real_estate_point_3": "Podvržene vladnemu nadzoru", "real_estate_point_4": "Zahtevajo nenehno vzdrževanje", "real_estate_point_5": "Podvržene davku na nepremičnine", "real_estate_point_6": "Ranljive za naravne nesreče", "real_estate_point_7": "Vsaka nepremičnina je edinstvena", "real_estate_point_8": "Omejene na lokalne kupce",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Globalno prenosljiv", "bitcoin_point_2": "Enostavno deljiv", "bitcoin_point_3": "Odporen na cenzuro", "bitcoin_point_4": "Ne zahteva vzdrževanja", "bitcoin_point_5": "Brez davka na nepremičnine", "bitcoin_point_6": "Težko uničljiv", "bitcoin_point_7": "Popolnoma zamenljiv", "bitcoin_point_8": "Globalni trg 24/7",
	"point_1_summary_1": "Bitcoin se lahko premakne kamorkoli na svetu takoj prek interneta. Nepremičnine so trajno fiksirane na določeni lokaciji in jih ni mogoče premakniti, kar jih dela ranljive za lokalne gospodarske razmere, naravne nesreče in politično nestabilnost.",
	"point_2_summary_1": "Bitcoin se lahko razdeli na 100 milijonov manjših enot, imenovanih satoši, kar ga dela idealnega za transakcije katere koli velikosti. Nepremičnin ni mogoče enostavno razdeliti — ne morete prodati le kuhinje svoje hiše ali kupiti polovico spalnice.",
	"point_3_summary_1": "Bitcoin deluje na decentraliziranem omrežju, ki ga nobena vlada ne more nadzorovati. Nepremičnine so podvržene obsežni vladni regulaciji, vključno z regulacijo najemnin, moratoriji na deložacije, prostorskimi zakoni in razlastitvijo.",
	"point_4_summary_1": "Bitcoin ne zahteva vzdrževanja — obstaja kot digitalna koda na omrežju. Nepremičnine zahtevajo nenehno skrb, vključno s popravili, prenovami, upravljanjem nepremičnin, zavarovanjem in delom z najemniki.",
	"point_5_summary_1": "Bitcoin nima nobenih tekočih davkov — davek na kapitalski dobiček plačate le ob prodaji. Nepremičnine so podvržene letnemu davku na nepremičnine, ki ga je treba plačati ne glede na to, ali nepremičnina prinaša dohodek.",
	"point_6_summary_1": "Bitcoin, če je pravilno varnostno kopiran, ne more biti uničen s povodmi, požari, potresi, orkani ali drugimi naravnimi nesrečami. Nepremičnine so ranljive za vse oblike fizičnega uničenja.",
	"point_7_summary_1": "Vsak bitcoin je enak in medsebojno zamenljiv — en bitcoin je enak enemu bitcoinu kjerkoli na svetu. Vsaka nepremičnina je edinstvena z različnimi lokacijami, stanji in značilnostmi, kar otežuje vrednotenje in primerjavo.",
	"point_8_summary_1": "Bitcoin lahko kdorkoli kupuje in prodaja 24/7 z dostopom do interneta kjerkoli na svetu. Prodaja nepremičnin je omejena na lokalne kupce, zahteva dolgotrajne postopke z odvetniki in agenti ter lahko traja mesece.",
	"bitcoin_point_9": "Podpira individualno lastništvo",
	"real_estate_point_9": "Prispeva k financializaciji stanovanj",
	"point_9_summary_1": "Bitcoin omogoča neposredno individualno lastništvo brez posrednikov in podpira finančno suverenost za vsakogar. Nakup nepremičnin kot naložba onkraj vašega primarnega bivališča prispeva k financializaciji stanovanj, kjer domovi postanejo blago namesto zatočišča. To zvišuje cene, zmanjšuje dostopnost za družine in prispeva h krizi stanovanj in brezdomstva."
});

writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin proti delnicam",
	"stocks_header": "RAZLIKA MED", "stocks_header_2": "BITCOINOM", "stocks_header_3": "IN", "stocks_header_4": "DELNICAMI",
	"stocks_intro_1": "Delnice so že desetletja priljubljena naložba in predstavljajo lastniške deleže v podjetjih.",
	"stocks_intro_2": "Bitcoin je digitalni denar, ustvarjen leta 2009, ki deluje neodvisno od katerega koli podjetja ali vlade.",
	"stocks_intro_3": "Kako pa se lastništvo deležev v podjetju razlikuje od lastništva digitalnega denarja, kot je Bitcoin? Poglejmo razlike med dvema oblikama naložb: Bitcoinom in delnicami.",
	"stocks": "DELNICE",
	"stocks_point_1": "Deleži v podjetju", "stocks_point_2": "Razredčljiva ponudba", "stocks_point_3": "Tveganje ključnih oseb", "stocks_point_4": "Vrednotenje z razmerjem P/E", "stocks_point_5": "Samo med trgovalnimi urami", "stocks_point_6": "Tveganje nasprotne stranke", "stocks_point_7": "Spremenljiva zaščita pred inflacijo",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Neposredno lastništvo", "bitcoin_point_2": "Fiksna ponudba 21M BTC", "bitcoin_point_3": "Decentralizirano omrežje", "bitcoin_point_4": "Tržno določena cena", "bitcoin_point_5": "Trgovanje 24/7", "bitcoin_point_6": "Možnost lastne hrambe", "bitcoin_point_7": "Sredstvo s fiksno ponudbo",
	"point_1_summary_1": "Ko imate Bitcoin, imate neposredno lastništvo nad samim sredstvom. Ko imate delnice, imate delež v podjetju, kar pomeni, da je vaša naložba odvisna od uspešnosti podjetja, odločitev vodstva in poslovnega uspeha.",
	"point_2_summary_1": "Bitcoin ima fiksno zgornjo mejo 21 milijonov BTC, ki bodo kdaj obstajali.", "point_2_summary_2": "Podjetja lahko kadarkoli izdajo nove delnice, s čimer razredčijo odstotkovno lastništvo obstoječih delničarjev. To pomeni, da se vaš delež v podjetju zmanjša, ko so ustvarjene nove delnice.", "point_2_summary_3": "To je manj kot fiat inflacija, vendar je še vedno razredčenje.", "point_2_summary_4": "Pri Bitcoinu se vaš delež pogače nikoli ne zmanjša.",
	"point_3_summary_1": "Bitcoin deluje na decentraliziranem omrežju brez ene same točke odpovedi. Naložbe v delnice so podvržene tveganju ključnih oseb — če direktor ali drugi ključni predstavniki odidejo, zbolijo ali sprejmejo slabe odločitve, vaša naložba lahko znatno trpi.",
	"point_4_summary_1": "Cena Bitcoina je določena čisto s tržno ponudbo in povpraševanjem. Cene delnic se pogosto vrednoti z razmerjem P/E (cena/dobiček), ki kaže, koliko investitorji plačajo za vsak dolar dobička podjetja.",
	"point_5_summary_1": "Bitcoin se trguje 24 ur na dan, 7 dni v tednu na globalnih borzah.", "point_5_summary_2": "Bitcoin je decentraliziran", "point_5_summary_3": "in nikoli ne spi.", "point_5_summary_4": "Delniški trgi so odprti le med delovnimi urami v delovnih dneh, kar omejuje, kdaj lahko kupite ali prodate svoje naložbe.",
	"point_6_summary_1": "Pri Bitcoinu si lahko vzamete svoje kovance v lastno hrambo, kar pomeni, da jih resnično posedujete brez odvisnosti od tretje osebe.", "point_6_summary_2": "Lastna hramba je tako enostavna kot prenos aplikacije.", "point_6_summary_3": "Delnice zahtevajo posredniški račun in ste podvrženi tveganjem nasprotne stranke — če podjetje bankrotira ali posrednik propade, lahko izgubite svojo naložbo.", "point_6_summary_4": "Delniških certifikatov dejansko ne posedujete neposredno.",
	"point_7_summary_1": "Bitcoin je sredstvo s fiksno ponudbo z zgornjo mejo 21 milijonov Bitcoinov, ki bodo kdaj obstajali. To ga dela odlično zaščito pred inflacijo. Delnice imajo spremenljivo uspešnost proti inflaciji — nekatera podjetja v inflacijskih obdobjih uspevajo, druga imajo težave. Ni nobenega zagotovila, da bo katera koli posamezna delnica zaščitila pred inflacijo."
});

writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin proti Visi",
	"visa_header": "RAZLIKA MED", "visa_header_2": "BITCOINOM", "visa_header_3": "IN", "visa_header_4": "VISO",
	"visa_intro_1": "Kreditne kartice in Bitcoin sta oba plačilna sistema, vendar delujeta zelo različno.",
	"visa_intro_2": "Kreditne kartice, kot je Visa, so zaprta omrežja, ki jih nadzorujejo finančne institucije, medtem ko je Bitcoin odprto omrežje, ki ga lahko uporablja kdorkoli.",
	"visa_intro_3": "Poglejmo razlike med tema dvema plačilnima infrastrukturama: Bitcoinom in Viso.",
	"visa": "VISA",
	"visa_point_1": "Zaprto omrežje", "visa_point_2": "3 % provizije za trgovce", "visa_point_3": "Neprozoren sistem", "visa_point_4": "Lahko zamrzne račune", "visa_point_5": "Ustvarja dolg z visokimi obrestmi", "visa_point_6": "Zahteva posrednike", "visa_point_7": "Omejene ure in geografija",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Odprto omrežje", "bitcoin_point_2": "Brez provizij za trgovce", "bitcoin_point_3": "Prozoren sistem", "bitcoin_point_4": "Ni ga mogoče zamrzniti", "bitcoin_point_5": "Ne ustvarja dolga", "bitcoin_point_6": "Možnost lastne hrambe", "bitcoin_point_7": "Globalni dostop 24/7",
	"point_1_summary_1": "Bitcoin je odprto omrežje, ki se mu lahko kdorkoli pridruži in ga uporablja brez dovoljenja. Omrežja kreditnih kartic, kot je Visa, so zaprti sistemi, ki jih nadzorujejo finančne institucije, ki lahko komurkoli zavrnejo dostop.",
	"point_1_summary_2": "To naredi Bitcoin bolj vključujočega in dostopnega za ljudi po vsem svetu, zlasti za tiste, ki nimajo dostopa do bančnih storitev.",
	"point_2_summary_1": "Bitcoinove transakcije nimajo nobenih provizij za trgovce, medtem ko podjetja za kreditne kartice ponavadi zaračunavajo trgovcem približno 3 % na transakcijo.",
	"point_2_summary_2": "Ugotovite, kako lahko vaše podjetje prihrani denar",
	"point_2_summary_3": "s sprejemanjem bitcoinovih plačil namesto plačevanja provizij za obdelavo kreditnih kartic.",
	"point_3_summary_1": "Bitcoin deluje na prozorni verigi blokov, kjer lahko kdorkoli preveri vse transakcije. Omrežja kreditnih kartic delujejo kot zaprti, lastniški sistemi, kjer so podrobnosti transakcij skrite pred javnostjo.",
	"point_3_summary_2": "Ta prozornost naredi Bitcoin bolj zaupanja vrednega in omogoča neodvisno preverjanje celovitosti omrežja.",
	"point_4_summary_1": "Podjetja za kreditne kartice lahko kadarkoli zamrznejo račune, blokirajo transakcije ali zavrnejo storitev. Bitcoina ne more zamrzniti ali nadzorovati nobena centralna oblast.",
	"point_4_summary_2": "Z Bitcoinom ohranjate nadzor nad svojim denarjem in vas ni mogoče odrezati od plačilnega sistema.",
	"point_5_summary_1": "Kreditne kartice ustvarjajo dolg, ki se lahko hitro kopiči z visokimi obrestnimi merami, ki včasih presegajo 25 % letno.",
	"point_5_summary_2": "Bitcoinove transakcije so končne poravnave brez ustvarjanja dolga — porabite lahko le Bitcoin, ki ga dejansko imate.",
	"point_6_summary_1": "Bitcoin omogoča lastno hrambo, kar pomeni, da lahko držite in nadzirate svoj denar brez odvisnosti od bank ali plačilnih obdelovalcev.",
	"point_6_summary_2": "Ugotovite več o bitcoinovih denarnicah",
	"point_6_summary_3": "da razumete, kako lahko prevzamete nadzor nad svojim denarjem. Kreditne kartice vedno zahtevajo posrednike, kot so banke in plačilni obdelovalci.",
	"point_7_summary_1": "Bitcoin deluje globalno 24/7 brez trgovalnih ur ali geografskih omejitev.",
	"point_7_summary_2": "Omrežja kreditnih kartic imajo trgovalne ure, obdobja vzdrževanja in geografske omejitve, ki lahko ovirajo obdelavo transakcij."
});

console.log(`\nDone! Created 10 comparison files.`);
