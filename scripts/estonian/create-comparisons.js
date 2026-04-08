/**
 * Creates Estonian (et) translation files for all bitcoin-vs-* comparison pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'et';
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
	"bitcoin_vs_gold": "Bitcoin vs kuld",
	"gold_header": "ERINEVUS", "gold_header_2": "BITCOINI", "gold_header_3": "JA", "gold_header_4": "KULLA VAHEL",
	"gold_intro_1": "Kulda on rahana kasutatud tuhandeid aastaid ja paljud peavad seda rahanduslikuks turvasadamaks.",
	"gold_intro_2": "Bitcoin on 2009. aastal loodud digitaalne raha ja paljud peavad ka seda rahanduslikuks turvasadamaks.",
	"gold_intro_3": "Aga kuidas erineb füüsiline metall nagu kuld digitaalsest rahast nagu Bitcoin? Vaatame kahe rahavormi erinevusi: Bitcoin ja kuld.",
	"gold": "KULD",
	"gold_point_1": "Tuleb füüsiliselt saata", "gold_point_2": "Digitaalsed võlakohustused", "gold_point_3": "Pakkumine kasvab igal aastal", "gold_point_4": "Elastne", "gold_point_5": "Füüsiliselt tsentraliseeritud", "gold_point_6": "Raske kontrollida", "gold_point_7": "Raske jagada",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Saab saata üle interneti", "bitcoin_point_2": "Algusest peale digitaalne", "bitcoin_point_3": "Fikseeritud pakkumine 21M BTC", "bitcoin_point_4": "Mitteelastne", "bitcoin_point_5": "Detsentraliseeritud", "bitcoin_point_6": "Lihtne kontrollida", "bitcoin_point_7": "Lihtne jagada",
	"point_1_summary_1": "Kuna Bitcoin on digitaalne, saab seda saata peaaegu koheselt väga madala tasuga igaüks, kellel on internetiühendus. Kuna kuld on füüsiline, ei saa seda interneti kaudu liigutada ja omandiõiguse üleandmiseks tuleb seda füüsiliselt saata.",
	"point_2_summary_1": "Bitcoin on digitaalselt loodud vara, mis tähendab, et saate interneti kaudu üle anda täieliku omandiõiguse. Mõned ettevõtted pakuvad võimalust osta kulda veebis ilma tegelikku füüsilist kulda saamata, toetudes selle asemel ettevõttele, kes hoiab kulda teie eest. See on pigem nagu digitaalne võlakohustus, kuna omate ainult ettevõtte lubadust, mitte tegelikku vara.",
	"point_3_summary_1": "Bitcoinil on kindel piir 21 miljonit BTC-d, mis kunagi eksisteerib.",
	"point_3_summary_2": "Uut kulda kaevandatakse maapõuest igal aastal, mille tulemuseks on kogu pakkumise inflatsioon. Hinnanguliselt kasvab kulla kogu pakkumine umbes 1,6% aastas, mis tähendab, et teie tükk pirukast kahaneb 1,6% aastas.",
	"point_3_summary_3": "See on vähem kui fiat-inflatsioon, kuid see on siiski inflatsioon.",
	"point_3_summary_4": "Bitcoiniga ei kahane teie tükk pirukast kunagi.",
	"point_4_summary_1": "Kullal on elastne pakkumine, mis tähendab, et kui kullahind tõuseb, on suurem stiimul rohkem kulda kaevandada. See avaldab sageli kullahinnaile langussurvet, kui uued kaevandused avatakse.",
	"point_4_summary_2": "Bitcoiniga, olenemata sellest, kui kõrgele hind läheb, ei saa te luua rohkem kui 21M Bitcoini.",
	"point_4_summary_3": "Bitcoin on esimene vara mitteelastse hinna-pakkumise suhtega.",
	"point_5_summary_1": "Bitcoin-võrk on detsentraliseeritud.", "point_5_summary_2": "Kümned tuhanded sõltumatud sõlmed valideerivad võrgu reegleid.", "point_5_summary_3": "Kasutajad saavad ise oma Bitcoini hoiustada, laadides alla rakenduse.", "point_5_summary_4": "Kuigi füüsilise kulla isehoiustamine on võimalik, hoitakse enamikku füüsilisest kullast hiiglaslike seifides, mis kuuluvad hoidjatele, tehes selle füüsiliselt tsentraliseerituks.",
	"point_6_summary_1": "Bitcoiniga on uskumatult lihtne kontrollida, et teil on ehtne Bitcoin, hoiustades ise oma münte ja käivitades täissõlme.", "point_6_summary_2": "Isehoiustamine on sama lihtne kui rakenduse allalaadimine.", "point_6_summary_3": "Täissõlm on lihtne tarkvara, mis tagab, et võrgu reegleid järgitakse, ja kontrollib, et teil on ehtne Bitcoin.", "point_6_summary_4": "Füüsilise kulla ehtsuse kontrollimine võib olla väga keeruline. Isegi kui kontrollite, et füüsilise kulla väliskiht on ehtne, võib teie füüsilise kullatüki sisemus olla volfram või mõni muu metall, mis ei ole kuld. Ainus viis tõeliselt kontrollida, et omate füüsilist kulda, mida arvate end omavat, on see ümber sulatada.",
	"point_7_summary_1": "Nagu 1 euros on 100 senti, on 1 Bitcoinis 100 000 000 satsi. See teeb Bitcoini kasutatavaks kõigi suurustega ostudeks, sealhulgas mikrotehinguteks, mis on vaid mõne sendi suurused.", "point_7_summary_2": "See teeb Bitcoini ettevõtetele heaks.", "point_7_summary_3": "Kuna füüsilist kulda on raske jagada, ei saa seda hõlpsalt ostudeks kasutada, eriti väikeste ostude puhul."
});

// bitcoin-vs-banks
writeFile(`bitcoin-vs-banks_${lang}.json`, {
	"bitcoin_vs_banks": "Bitcoin vs pangad",
	"banks_header": "ERINEVUS", "banks_header_2": "BITCOINI", "banks_header_3": "JA", "banks_header_4": "PANKADE VAHEL",
	"banks_intro_1": "Pangad on sajandeid raha kontrollinud, toimides rahanduslike vahendajate ja rahasüsteemi väravavahtidena.",
	"banks_intro_2": "Bitcoin on peer-to-peer digitaalne rahasüsteem, mis toimib ilma pankade või keskasutusteta.",
	"banks_intro_3": "Aga kuidas erineb Bitcoin-võrk traditsioonilisest pangasüsteemist? Uurime peamisi erinevusi nende kahe põhimõtteliselt erineva lähenemise vahel rahale.",
	"banks": "PANGAD",
	"banks_point_1": "Nõuab luba", "banks_point_2": "Piiratud tööaeg", "banks_point_3": "Privaatsed, läbipaistmatud operatsioonid", "banks_point_4": "Kontrollib teie raha", "banks_point_5": "Muutuvad tasud", "banks_point_6": "Lubab arvelduskrediiti tasudega", "banks_point_7": "Saab tehinguid blokeerida",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Loata juurdepääs", "bitcoin_point_2": "Alati saadaval 24/7", "bitcoin_point_3": "Läbipaistev ja avatud", "bitcoin_point_4": "Teie kontrollite oma raha", "bitcoin_point_5": "Etteaimatavad, madalad tasud", "bitcoin_point_6": "Ei saa ületada", "bitcoin_point_7": "Tsensuurile vastupidav",
	"point_1_summary_1": "Bitcoin on loata, mis tähendab, et igaüks, kellel on internetiühendus, saab seda kasutada ilma kelleltki luba küsimata.", "point_1_summary_2": "Bitcoin toimib ilma väravavahtideta", "point_1_summary_3": "— keegi ei saa teile juurdepääsu keelata. Pangad seevastu võivad keelduda kontosid avamast, külmutada olemasolevaid kontosid või keelduda teenustest oma poliitikate või ametiasutuste regulatsioonide alusel.",
	"point_2_summary_1": "Bitcoin-võrk töötab 24 tundi päevas, 7 päeva nädalas, 365 päeva aastas ilma hooldusakendeta või pühadeta. Pankadel on piiratud tööaeg, nad on nädalavahetustel ja pühadel suletud ning neil on sageli hooldusperioodid, mil teenused on kättesaamatud.",
	"point_3_summary_1": "Kõik Bitcoin-tehingud salvestatakse avalikku plokiahelasse, mida igaüks saab kontrollida ja auditeerida.", "point_3_summary_2": "Pangad tegutsevad privaatsete pearaamatute ja läbipaistmatute siseprotsessidega, mida kliendid ei saa iseseisvalt kontrollida.",
	"point_4_summary_1": "Bitcoiniga saate hoida oma privaatvõtmeid ja omada täielikku kontrolli oma raha üle.", "point_4_summary_2": "Uurige Bitcoin-rahakotte", "point_4_summary_3": ", et mõista isehoiustamist. Pangad hoiavad teie raha oma kontodel ja võivad igal ajal teie vahendeid külmutada, piirata või sulgeda.",
	"point_5_summary_1": "Bitcoin-tehingutasud on läbipaistvad, etteaimatavad ja tavaliselt väga madalad. Pankadel on sageli varjatud tasud, igakuised kontotasud, arvelduskrediidi tasud, ülekandetasud, sularahaautomaadi tasud ja muud tasud, mis võivad aja jooksul märkimisväärseid summasid moodustada.",
	"point_6_summary_1": "Bitcoin takistab teil kulutamast raha, mida teil ei ole — saate kulutada ainult Bitcoine, mida tegelikult omate. Pangad lubavad arvelduskrediiti (kulutades rohkem kui kontojääk) ja nõuavad seejärel selle "teenuse" eest märkimisväärseid tasusid, mis sageli viivad kaskaadsete trahvitasudeni.",
	"point_7_summary_1": "Bitcoin-tehingud on tsensuurile vastupidavad — kui need on võrku saadetud, ei saa neid ükski keskasutus peatada ega tagasi pöörata. Pangad saavad blokeerida, külmutada, tagasi pöörata või piirata tehinguid oma poliitikate, ametiasutuste korralduste või kahtlase tegevuse algoritmide alusel."
});

// bitcoin-vs-stocks
writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin vs aktsiad",
	"stocks_header": "ERINEVUS", "stocks_header_2": "BITCOINI", "stocks_header_3": "JA", "stocks_header_4": "AKTSIATE VAHEL",
	"stocks_intro_1": "Aktsiad on olnud populaarne investeering aastakümneid, esindades osalust ettevõtetes.",
	"stocks_intro_2": "Bitcoin on 2009. aastal loodud digitaalne raha, mis toimib sõltumatult igast ettevõttest või ametiasutusest.",
	"stocks_intro_3": "Aga kuidas erineb ettevõtte aktsiate omamine digitaalse raha nagu Bitcoini omamisest? Vaatame kahe investeerimisvõimaluse erinevusi: Bitcoin ja aktsiad.",
	"stocks": "AKTSIAD",
	"stocks_point_1": "Osalus ettevõttes", "stocks_point_2": "Lahjendatav pakkumine", "stocks_point_3": "Võtmeisikute risk", "stocks_point_4": "P/E hindamised", "stocks_point_5": "Ainult turu tööajal", "stocks_point_6": "Vastaspoole risk", "stocks_point_7": "Muutuv inflatsioonikaitse",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Otsene omand", "bitcoin_point_2": "Fikseeritud pakkumine 21M BTC", "bitcoin_point_3": "Detsentraliseeritud võrk", "bitcoin_point_4": "Turujuhitud hind", "bitcoin_point_5": "24/7 kauplemine", "bitcoin_point_6": "Isehoiustamine võimalik", "bitcoin_point_7": "Fikseeritud pakkumisega vara",
	"point_1_summary_1": "Bitcoini omades on teil otsene omandiõigus vara enda üle. Aktsiaid omades omate osalust ettevõttes, mis tähendab, et teie investeering sõltub ettevõtte tulemustest, juhtimisotsustest ja äriedust.",
	"point_2_summary_1": "Bitcoinil on kindel piir 21 miljonit BTC-d, mis kunagi eksisteerib.", "point_2_summary_2": "Ettevõtted saavad igal ajal emiteerida uusi aktsiaid, lahjendades olemasolevate aktsionäride osalust. See tähendab, et teie osa ettevõttest muutub väiksemaks, kui uusi aktsiaid luuakse.", "point_2_summary_3": "See on vähem kui fiat-inflatsioon, kuid see on siiski lahjendamine.", "point_2_summary_4": "Bitcoiniga ei kahane teie tükk pirukast kunagi.",
	"point_3_summary_1": "Bitcoin toimib detsentraliseeritud võrgus ilma ühegi üksiku tõrkepunktita. Aktsiainvesteeringud on avatud võtmeisikute riskile — kui tegevjuht või teised olulised juhid lahkuvad, haigestuvad või teevad halbu otsuseid, võib teie investeering märkimisväärselt kannatada. Ettevõtted sõltuvad suuresti oma juhtkonnast.",
	"point_4_summary_1": "Bitcoini hinda määrab ainult turu pakkumine ja nõudlus. Aktsiahindu hinnatakse sageli P/E suhte (hind-kasumi suhte) abil, mis näitab, kui palju investorid maksavad iga ettevõtte kasumi dollari eest. Kõrged P/E suhtarvud võivad viidata ülehinnatud aktsiatele, muutes õige väärtuse määramise raskemaks.",
	"point_5_summary_1": "Bitcoiniga kaubeldakse 24 tundi päevas, 7 päeva nädalas globaalsetel börsidel.", "point_5_summary_2": "Bitcoin on detsentraliseeritud", "point_5_summary_3": "ja ei maga kunagi.", "point_5_summary_4": "Aktsiaturud on avatud ainult tööpäevadel tööajal, piirates seda, millal saate oma investeeringuid osta või müüa.",
	"point_6_summary_1": "Bitcoiniga saate ise oma münte hoiustada, mis tähendab, et omate neid tõeliselt ilma kolmandast osapoolest sõltumata.", "point_6_summary_2": "Isehoiustamine on sama lihtne kui rakenduse allalaadimine.", "point_6_summary_3": "Aktsiad nõuavad maaklerikontot ja te olete avatud vastaspoole riskile — kui ettevõte läheb pankrotti või maakler ebaõnnestub, võite oma investeeringu kaotada.", "point_6_summary_4": "Te ei oma kunagi aktsiate sertifikaate otse.",
	"point_7_summary_1": "Bitcoin on fikseeritud pakkumisega vara kindla piiriga 21 miljonit Bitcoini, mis kunagi eksisteerib. See teeb sellest suurepärase inflatsioonikaitse. Aktsiate tootlus inflatsiooni vastu on muutuv — mõned ettevõtted lähevad inflatsiooniperioodidel hästi, teised kannatavad. Pole garantiid, et ükski konkreetne aktsia kaitseb inflatsiooni eest."
});

// bitcoin-vs-cbdc
writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin vs CBDC-d",
	"cbdc_header": "MILLINE PEAKS", "cbdc_header_2": "DIGITAALNE RAHA", "cbdc_header_3": "VÄLJA NÄGEMA?",
	"cbdc_intro_1": "Meie maailm muutub üha digitaalsemaks ja seda teeb ka meie raha.",
	"cbdc_intro_2": "See tõstatab küsimuse: kuidas me tahame, et meie digitaalne raha välja näeks?",
	"cbdc_intro_3": "Paljud riigid uurivad keskpanga digitaalse valuuta (CBDC) väljastamist, mis on meie olemasoleva riigivaluuta täiesti digitaalne vorm.",
	"cbdc_intro_4": "Vaatame erinevust kahe digitaalse raha vormi vahel: Bitcoin ja keskpanga digitaalsed valuutad (CBDC-d).",
	"cbdc": "CBDC",
	"cbdc_point_1": "Nõuab luba kasutamiseks", "cbdc_point_2": "Teie raha võib aeguda", "cbdc_point_3": "Kogu pakkumisel pole piiri", "cbdc_point_4": "Seotud avaliku ID-ga", "cbdc_point_5": "Tsentraliseeritud", "cbdc_point_6": "Kasutajad ei saa sõlmi käitada", "cbdc_point_7": "Lihtne külmutada", "cbdc_point_8": "Peab usaldama hoidjaid", "cbdc_point_9": "Muudetav rahapoliitika", "cbdc_point_10": "Ebaturvaline",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Kasutamine ilma loata", "bitcoin_point_2": "Teie raha ei aegu kunagi", "bitcoin_point_3": "Fikseeritud pakkumine 21M BTC", "bitcoin_point_4": "Pseudonüümne", "bitcoin_point_5": "Detsentraliseeritud", "bitcoin_point_6": "Kasutajad saavad sõlmi käitada", "bitcoin_point_7": "Ei saa külmutada", "bitcoin_point_8": "Saab ise hoiustada", "bitcoin_point_9": "Etteaimatav rahapoliitika", "bitcoin_point_10": "Turvaline",
	"point_1_summary_1": "Bitcoin on loodud andmaks teile täielikku kontrolli oma raha üle.", "point_1_summary_2": "Keegi ei saa takistada teid Bitcoiniga tehinguid tegemast.", "point_1_summary_3": "CBDC-d on loodud andmaks valitsustele ja keskpankadele täielikku kontrolli teie raha üle.", "point_1_summary_4": "CBDC-d piiravad teie privaatsust ja vabadust.",
	"point_2_summary_1": "Bitcoin ei aegu kunagi ega oma igakuiseid tasusid.", "point_2_summary_2": "CBDC-sid saab programmeerida aeguma.", "point_2_summary_3": "Kui CBDC-d aeguvad, takistavad need teid tuleviku jaoks säästmast.",
	"point_3_summary_1": "Bitcoinil on kindel piir 21 miljonit BTC-d, mis kunagi eksisteerib.", "point_3_summary_2": "CBDC-del, nagu ka meie praegustel riigivaluutadel, ei ole kogu pakkumisel piiri. See piiri puudumine laseb ametiasutustel rahapakkumist laiendada.", "point_3_summary_3": "See tekitab inflatsiooni.",
	"point_4_summary_1": "Bitcoin-aadressid on pseudonüümsed, mis tähendab, et need ei ole seotud teie pärisnime ega identiteediga. CBDC-d on otseselt seotud teie pärisnime ja identiteediga, võimaldades massiivset finantsjärelevalvet ja tsensuuri.",
	"point_5_summary_1": "Bitcoin-võrk on detsentraliseeritud.", "point_5_summary_2": "Kümned tuhanded sõltumatud sõlmed valideerivad võrgu reegleid.", "point_5_summary_3": "CBDC-d on tsentraliseeritud ametiasutuste ja keskpankade kätes, mis annab neile täieliku kontrolli CBDC-võrgu üle.",
	"point_6_summary_1": "Bitcoin laseb igaühel käitada sõlme, mis kontrollib, et võrgu reegleid järgitakse. CBDC-d ei lase kellelgi sõlmi käitada ja toetuvad ametiasutuste ja keskpankade usaldusele.",
	"point_7_summary_1": "Bitcoin on loodud selleks, et teha teistel võimatuks teie raha külmutamine. CBDC-d on loodud selleks, et ametiasutustel ja keskpankadel oleks lihtne teie raha külmutada.",
	"point_8_summary_1": "Bitcoin on loodud andmaks teile täielikku kontrolli oma raha üle.", "point_8_summary_2": "Veenduge lihtsalt, et võtate raha välja isehoiustavasse rahakotti.", "point_8_summary_3": "Kui hoiustate oma bitcoini ise, ei saa keegi takistada teil oma rahale ligi pääsemast.", "point_8_summary_4": "CBDC-d nõuavad, et usaldate hoidjaid, nagu panka või ametiasutust, hoidmaks teie raha teie eest.",
	"point_9_summary_1": "Bitcoinil on etteaimatav rahapoliitika, mis on koodis fikseeritud ja mida ei saa muuta. CBDC-del, nagu meie praegustel valuutadel, on rahapoliitika, mida saab hõlpsalt muuta.", "point_9_summary_2": "See toob kaasa inflatsiooni, kui poliitikud trükivad liiga palju raha.",
	"point_10_summary_1": "Bitcoin on kõige turvalisem arvutivõrk, mis kunagi on eksisteerinud, ja seda pole kunagi häkitud. CBDC-d toetuvad ametiasutustele ja pankadele võrgu turvamiseks, mida on ajaloo jooksul lugematuid kordi häkitud."
});

// bitcoin-vs-cash
writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin vs sularaha",
	"cash_header": "ERINEVUS", "cash_header_2": "BITCOINI", "cash_header_3": "JA", "cash_header_4": "SULARAHA VAHEL",
	"cash_intro_1": "Sularaha on rahana kasutatud sajandeid ja see jääb kõige levinumaks füüsilise raha vormiks kogu maailmas.",
	"cash_intro_2": "Bitcoin on 2009. aastal loodud digitaalne raha, mis toimib sõltumatult igast ametiasutusest või keskvõimust.",
	"cash_intro_3": "Aga kuidas erineb füüsiline sularaha digitaalsest rahast nagu Bitcoin? Uurime peamisi erinevusi nende kahe rahavormi vahel: Bitcoin ja sularaha.",
	"cash": "SULARAHA",
	"cash_point_1": "Peab füüsiliselt kohal olema", "cash_point_2": "Piiratud piiridega", "cash_point_3": "Saab üleöö kehtetuks tunnistada", "cash_point_4": "Saab võltsida", "cash_point_5": "Riigi kontrollitud", "cash_point_6": "Füüsilise hoiustamise riskid", "cash_point_7": "Piiratud jagatavus",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Saab saata üle interneti", "bitcoin_point_2": "Toimib globaalselt", "bitcoin_point_3": "Ei saa kehtetuks tunnistada", "bitcoin_point_4": "Ei saa võltsida", "bitcoin_point_5": "Detsentraliseeritud võrk", "bitcoin_point_6": "Digitaalne isehoiustamine", "bitcoin_point_7": "Hõlpsasti jagatav",
	"point_1_summary_1": "Bitcoini saab saata kuhu tahes maailmas koheselt üle interneti, samas kui sularaha nõuab füüsilist kohalolekut või usaldatud vahendajaid. Te ei saa sularaha e-postiga saata, kuid saate Bitcoini saata igaühele, kellel on internetiühendus, minutitega.",
	"point_2_summary_1": "Bitcoin toimib kõikjal maailmas ühtemoodi — Bitcoin-võrgus pole piire. Sularaha on piiratud geograafiaga, vahetuskurssidega ja kohaliku aktsepteerimisega. Proovige kasutada USA dollareid Tai maapiirkonnas või Jaapani jeene Mehhiko maapiirkonnas.",
	"point_3_summary_1": "Ametiasutused saavad ja tunnistavad sularaha üleöö kehtetuks demonetiseerimispoliitikate kaudu, nagu India tegi 2016. aastal, keelates teatud kupüürid.", "point_3_summary_2": "Isegi ilma teatud kupüüre keelustamata devalveerivad ametiasutused pidevalt sularaha inflatsiooni kaudu.", "point_3_summary_3": "Bitcoini ei saa ükski ametiasutus kehtetuks tunnistada — see eksisteerib globaalsel, detsentraliseeritud võrgul, mida ükski üksus ei kontrolli.",
	"point_4_summary_1": "Sularaha saab võltsida ja võltsitud rahatähti on sageli raske ilma erivarustuseta avastada. Isegi turvafunktsioonide olemasolul jätkab võltsraha ringlemist. Bitcoin kasutab krüptograafilist tõestust, mis teeb võltsimise matemaatiliselt võimatuks.",
	"point_5_summary_1": "Sularaha väljastatakse ja kontrollib ametiasutused, kes saavad soovi korral rohkem trükkida, kujundust muuta või teatud kupüüre kehtetuks tunnistada. Bitcoin toimib detsentraliseeritud võrgus, kus ühelgi üksusel pole kontrolli rahapakkumise ega reeglite üle.",
	"point_6_summary_1": "Sularaha tuleb füüsiliselt hoiustada, muutes selle haavatavaks varguse, kaotsimineku, tulekahju või konfiskeerimise suhtes. Suured summad nõuavad kalleid turvameetmeid.", "point_6_summary_2": "Kuid Bitcoini saab turvaliselt isehoiustada", "point_6_summary_3": "nutitelefoni rakenduse või spetsiaalse rahakoti abil, andes teile täieliku kontrolli oma raha üle ilma füüsiliste hoiustamisriskideta.",
	"point_7_summary_1": "Sularahal on miinimumvääringud — te ei saa senti väiksemateks osadeks jagada. Bitcoini saab jagada 100 miljoniks väiksemaks ühikuks, mida nimetatakse satoshideks, võimaldades mikromakseid ja täpseid tehinguid mis tahes summas."
});

// bitcoin-vs-bonds
writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin vs võlakirjad",
	"bonds_header": "ERINEVUS", "bonds_header_2": "BITCOINI", "bonds_header_3": "JA", "bonds_header_4": "VÕLAKIRJADE VAHEL",
	"bonds_intro_1": "Valitsuse võlakirju nimetatakse sageli "riskivabadeks" investeeringuteks ja neid peetakse traditsioonilises rahanduses kõige turvalisemaks kohaks vara hoiustamiseks.",
	"bonds_intro_2": "Bitcoin on digitaalne raha, mis toimib sõltumatult igast ametiasutusest või keskvõimust.",
	"bonds_intro_3": "Aga kas võlakirjad on tõesti riskivabad? Ja kuidas need võrdlevad Bitcoiniga väärtuse hoidjana? Uurime peamisi erinevusi Bitcoini ja valitsuse võlakirjade vahel.",
	"bonds": "VÕLAKIRJAD",
	"bonds_point_1": "Varjatud riskid", "bonds_point_2": "Kaotab väärtust inflatsioonile", "bonds_point_3": "Võib muutuda mittelikviidseks", "bonds_point_4": "Ebaõnnestunud oksjonid", "bonds_point_5": "Fikseeritud tootlus", "bonds_point_6": "Nõuab vahendajaid", "bonds_point_7": "Sõltuvus ametiasutustest",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Vastaspoolerisk puudub", "bitcoin_point_2": "Fikseeritud pakkumine", "bitcoin_point_3": "Alati likviidne", "bitcoin_point_4": "Oksjonirisk puudub", "bitcoin_point_5": "Väärtuse tõusu potentsiaal", "bitcoin_point_6": "Isehoiustamine võimalik", "bitcoin_point_7": "Sõltumatu ametiasutustest",
	"point_1_summary_1": "Võlakirjad on "riskivabad" ainult nominaalsetes dollaritingimustes, mis tähendab, et saate oma dollarid tagasi, kui hoiate lunastustähtajani. See aga eirab inflatsiooni riski, intressiriski ja võimalust, et need dollarid on tagasi saades palju vähem väärtuslikud.", "point_1_summary_2": "Bitcoinil on selged, läbipaistvad riskid (volatiilsus), kuid puudub varjatud vastaspoolerisk — te kas omate oma Bitcoini või ei oma.",
	"point_2_summary_1": "Kui inflatsioon on kõrgem kui võlakirjatootlus, kaotavad võlakirjaomanikud igal aastal ostujõudu. 2% võlakirjatootlus 4% inflatsiooniga tähendab, et kaotate iga-aastaselt 2% reaalväärtusest.", "point_2_summary_2": "Uurige rohkem inflatsiooni kohta.", "point_2_summary_3": "Bitcoini fikseeritud pakkumine 21 miljonit münti tähendab, et seda ei saa ära inflateerida, kuid võlakirju saab rahatrükkimisega devalveerida.",
	"point_3_summary_1": "Finantskriiside ajal võivad võlakirjaturud külmuda ja muutuda mittelikviidseks. Pangad nagu Silicon Valley Bank jäid kinni võlakirjadega, mis kaotasid intresside tõustes oluliselt väärtust, aidates kaasa nende kokkuvarisemisele.", "point_3_summary_2": "Uurige, kuidas Silicon Valley Bank ebaõnnestus ja miks Bitcoin on erinev.", "point_3_summary_3": "Bitcoiniga kaubeldakse 24/7 globaalselt ja sellel pole kunagi olnud likviidsuskriisi — alati saate leida ostja või müüja.",
	"point_4_summary_1": "Valitsuse võlakirjade oksjonid võivad ebaõnnestuda, kui riigivõlale pole piisavalt ostjaid. See on viimastel aastatel korduvalt juhtunud, sealhulgas nõrk nõudlus 10-aastaste võlakirjade järele 2022. aastal ja 30-aastaste võlakirjade järele 2023. aastal.", "point_4_summary_2": "Uurige rohkem nende ebaõnnestunud valitsuse võlakirjaoksjonite kohta.", "point_4_summary_3": "Bitcoini hind leitakse pidevate globaalsete turgude kaudu ilma ühegi keskoksjonita, mis võiks ebaõnnestuda.",
	"point_5_summary_1": "Võlakirjatootlus on ostu hetkel fikseeritud. Isegi kui majandus kasvab kiiresti või valuuta oluliselt devalveerub, jääb teie tootlus samaks.", "point_5_summary_2": "Bitcoinil on olulise väärtuse tõusu potentsiaal, kuna kasutuselevõtt kasvab ja fikseeritud pakkumine kohtub kasvava nõudlusega.",
	"point_6_summary_1": "Enamik hoiab võlakirju vahendajate kaudu, nagu pangad, maaklerid või fondid, luues vastaspooleriski. Te ei oma võlakirju otse.", "point_6_summary_2": "Bitcoiniga saate võtta otsese omandiõiguse isehoiustamise kaudu ja vastaspooleriski täielikult elimineerida.",
	"point_7_summary_1": "Võlakirjad sõltuvad täielikult ametiasutuse võimest ja tahtest maksta. Kui ametiasutus seisab silmitsi finantskriisiga, läheb maksejõuetuks või otsustab võla ära inflateerida, kannatavad võlakirjaomanikud.", "point_7_summary_2": "Bitcoin toimib sõltumatult igast ametiasutusest ja seda ei saa poliitilised võimud kontrollida, inflateerida ega maksejõuetuks kuulutada."
});

// bitcoin-vs-crypto
writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin vs krüpto",
	"crypto_header": "ERINEVUS", "crypto_header_2": "BITCOINI", "crypto_header_3": "JA", "crypto_header_4": "KRÜPTO VAHEL",
	"crypto_intro_1": "Krüptovaluutaturg on plahvatanud tuhandete erinevate digitaalsete tokenite ja projektidega.",
	"crypto_intro_2": "Kuigi Bitcoin oli esimene ja jääb tuntuimaks krüptovaluutaks, erineb see põhimõtteliselt ülejäänud krüptotööstusest.",
	"crypto_intro_3": "Uurime peamisi erinevusi Bitcoini ja laiema krüptovaluutade ökosüsteemi vahel.",
	"crypto": "KRÜPTO",
	"crypto_point_1": "Sagedased muudatused ja harud", "crypto_point_2": "Tsentraliseeritud kontroll", "crypto_point_3": "Piiramatu või inflatsiooniline pakkumine", "crypto_point_4": "Keerulised protokollid", "crypto_point_5": "Eksperimentaalne konsensus", "crypto_point_6": "Spekulatiivsed utiliit-tokenid", "crypto_point_7": "Volatiilne ja habras", "crypto_point_8": "Ettevõtte toetus",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Muutumatu protokoll", "bitcoin_point_2": "Tõeliselt detsentraliseeritud", "bitcoin_point_3": "Fikseeritud pakkumine 21M BTC", "bitcoin_point_4": "Lihtne ja ligipääsetav", "bitcoin_point_5": "Tõestatud tööjõutõend", "bitcoin_point_6": "Puhas digitaalne raha", "bitcoin_point_7": "Antifragiilne", "bitcoin_point_8": "Ükski üksus ei kontrolli",
	"point_1_summary_1": "Bitcoini protokoll on jäänud alates 2009. aastast põhimõtteliselt muutumatuks, pakkudes etteaimatavaid reegleid, mida ei saa kergesti muuta. Enamik krüptoprojekte uuendab oma protokolle sagedasti, muudab tokenimajandust või hargneb uuteks versioonideks, luues kasutajatele ebakindlust.",
	"point_2_summary_1": "Bitcoin toimib tõeliselt detsentraliseeritud võrgus kümne tuhandete sõltumatute sõlmedega üle kogu maailma. Paljusid krüptoprojekte kontrollivad sihtasutused, ettevõtted või väikesed arendajate rühmad, kes saavad teha ühepoolseid otsuseid protokolli tuleviku kohta.",
	"point_3_summary_1": "Bitcoinil on kindel piir 21 miljonit münti, mis kunagi eksisteerib, muutes selle kõige napimaks digitaalseks varaks. Enamikul krüptoprojektidel on piiramatu pakkumine, inflatsiooniline mehhanism või võimalus uusi tokeneid soovi korral vermida, lahjendades omanike väärtust aja jooksul.",
	"point_4_summary_1": "Bitcoinil on üks eesmärk: peer-to-peer digitaalne raha. Igaüks saab seda põhiteadmistega mõista ja kasutada. Paljud krüptoprojektid hõlmavad keerulisi nutilepinguid, DeFi-protokolle või haldamismehhanisme, mis nõuavad turvaliseks kasutamiseks tehnilist ekspertiisi.",
	"point_5_summary_1": "Bitcoin kasutab tööjõutõendi konsensust, mis on lahingutes karastatud üle 15 aasta ilma ühegi eduka rünnakuta põhivõrgule. Paljud krüptoprojektid kasutavad eksperimentaalseid konsensusmehhanisme nagu panustamistõend või delegeeritud süsteemid, mis pole oma pikaajalist turvalisust tõestanud.",
	"point_6_summary_1": "Bitcoin toimib digitaalse rahana — väärtuse hoidja ja vahetusvahendina. Enamik krüptotokeneid on utiliit-tokenid konkreetsetele platvormidele, haldamistokenid või spekulatiivsed varad ebaselgete reaalsete väärtuspakkumistega.",
	"point_7_summary_1": "Bitcoin muutub rünnakute all tugevamaks ja on üle elanud iga kriisi, keelu ja kriitika, mida selle vastu on esitatud. Enamik krüptoprojekte on habrased ja võivad regulatiivse surve, tehniliste rikete või turunõrkumiste korral kokku kukkuda.",
	"point_8_summary_1": "Bitcoinil ei ole tegevjuhti, selle taga pole ettevõtet ja sellel pole ühtki tõrkepunkti. Paljusid krüptoprojekte toetavad riskikapitaliettevõtted, neil on tuvastatavad juhtimisgrupid või nad sõltuvad konkreetsetest ettevõtetest oma jätkuvaks toimimiseks."
});

// bitcoin-vs-fine-art
writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin vs kaunid kunstid",
	"fine_art_header": "ERINEVUS", "fine_art_header_2": "BITCOINI", "fine_art_header_3": "JA", "fine_art_header_4": "KAUNITE KUNSTIDE VAHEL",
	"fine_art_intro_1": "Kaunid kunstid on olnud luksusinvesteering sajandeid ja neid peetakse sageli rikkate kollektsionääride väärtuse hoidjaks.",
	"fine_art_intro_2": "Bitcoin on digitaalne raha, mida paljud peavad samuti väärtuse hoidjaks ja investeeringuks.",
	"fine_art_intro_3": "Aga kuidas erineb füüsiline kunstiteos digitaalsest rahast nagu Bitcoin? Vaatame kahe investeerimisvõimaluse erinevusi: Bitcoin ja kaunid kunstid.",
	"fine_art": "KAUNID KUNSTID",
	"fine_art_point_1": "Iga teos on unikaalne", "fine_art_point_2": "Nõuab spetsiaalseid oksjoneid", "fine_art_point_3": "Kõrged oksjonitasud", "fine_art_point_4": "Ei saa jagada", "fine_art_point_5": "Nõuab ekspert-autentimist", "fine_art_point_6": "Haavatav kahjustustele", "fine_art_point_7": "Piiratud rikaste kollektsionääridega",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Täiuslikult asendatav", "bitcoin_point_2": "24/7 globaalne turg", "bitcoin_point_3": "Madalad tehingutasud", "bitcoin_point_4": "Hõlpsasti jagatav", "bitcoin_point_5": "Krüptograafiliselt kontrollitav", "bitcoin_point_6": "Raske hävitada", "bitcoin_point_7": "Kõigile kättesaadav",
	"point_1_summary_1": "Bitcoin on täiuslikult asendatav, mis tähendab, et iga bitcoin on identne ja vahetatav — üks bitcoin võrdub ühe bitcoiniga kõikjal maailmas. Kaunid kunstid on oma olemuselt mitteasendatavad, iga teos on ainulaadne oma loomise, ajaloo, seisukorra ja päritolu poolest, muutes otsesed võrdlused ja hindamised äärmiselt keeruliseks.",
	"point_2_summary_1": "Bitcoiniga kaubeldakse globaalsel 24/7 turul, kus igaüks, kellel on internetiühendus, saab koheselt osta või müüa. Kaunid kunstid nõuavad spetsiaalseid oksjonimaju nagu Sotheby's või Christie's, erakaupmehi või eksklusivseid galeriisid. Müük võib korraldamiseks ja teostamiseks kesta kuid, piiratud turuligipääsu ja ebaregulaarsete kauplemisvõimalustega.",
	"point_3_summary_1": "Bitcoini ostmine või müümine maksab tavaliselt alla 1% tasudes, sageli palju vähem. Kunsti müük hõlmab olulisi kulusid, sealhulgas ostja preemiat (10–25%), müüja vahendustasu (10–15%), kindlustust, transporti, hoiustamist ja autentimistasusid. Need kombineeritud kulud võivad hõlpsalt ületada 30–40% kunstiteose väärtusest ühes tehingus.",
	"point_4_summary_1": "Bitcoini saab jagada 100 miljoniks väiksemaks ühikuks, mida nimetatakse satoshideks, muutes selle ideaalseks mis tahes suurusega tehinguteks mikromaksetest suurte ostudeni. Kauneid kunste ei saa jagada — te ei saa omada maali murdosa ega müüa ainult osa skulptuurist. See jagamatus piirab investeerimispaindlikkust ja likviidsusvõimalusi.",
	"point_5_summary_1": "Bitcoini omandiõigust ja ehtsust saab plokiahelas krüptograafiliselt kontrollida igaüks, kellel on põhitehnilised teadmised. Kaunid kunstid nõuavad kallist ekspert-autentimist, päritoluuuringuid ja teaduslikku analüüsi. Isegi ekspertkontrolliga narrivad võltsingud regulaarselt kunstimaailma ja autentimise vaidlused võivad kunstiteose väärtust üleöö hävitada. Bitcoini seevastu ei saa võltsida.",
	"point_6_summary_1": "Bitcoini, mis on korrektselt varundatud, ei saa hävitada üleujutused, tulekahjud, maavärinad, orkaanid, vargused ega muud katastroofid. Kaunid kunstid on haavatavad kõigi füüsilise hävitamise ja lagunemise vormide suhtes. Isegi kuluka kliimakontrollitud hoiustamise ja ulatusliku kindlustuse korral võivad kunstiteosed saada keskkonnatingimustest, õnnetustest või looduskatastroofidest kahjustada ja potentsiaalselt kogu väärtuse kaotada.",
	"point_7_summary_1": "Bitcoini saab osta ja müüa igaüks, kellel on internetiühendus ja väike investeeritav summa. Kunsti investeerimine on suures osas piiratud rikaste kollektsionääridega kõrgete miinimumhindade, eksklusiivse oksjonile ligipääsu, hoiustamisnõuete, kindlustuskulude ja kunstiturul edukaks navigeerimiseks vajaliku spetsiaalse teadmise tõttu."
});

// bitcoin-vs-real-estate
writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin vs kinnisvara",
	"real_estate_header": "ERINEVUS", "real_estate_header_2": "BITCOINI", "real_estate_header_3": "JA", "real_estate_header_4": "KINNISVARA VAHEL",
	"real_estate_intro_1": "Kinnisvara on olnud populaarne investeering aastakümneid ja seda peetakse sageli stabiilseks väärtuse hoidjaks.",
	"real_estate_intro_2": "Bitcoin on 2009. aastal loodud digitaalne raha ja paljud peavad seda samuti väärtuse hoidjaks ja investeeringuks.",
	"real_estate_intro_3": "Aga kuidas erineb füüsiline vara digitaalsest rahast nagu Bitcoin? Vaatame kahe investeerimisvõimaluse erinevusi: Bitcoin ja kinnisvara.",
	"real_estate": "KINNISVARA",
	"real_estate_point_1": "Ei saa liigutada", "real_estate_point_2": "Ei saa lihtsalt jagada", "real_estate_point_3": "Ametiasutuste kontrollile allutatud", "real_estate_point_4": "Nõuab pidevat hooldust", "real_estate_point_5": "Kinnisvaramaksule allutatud", "real_estate_point_6": "Looduskatastroofide suhtes haavatav", "real_estate_point_7": "Iga kinnisvara on unikaalne", "real_estate_point_8": "Piiratud kohalike ostjatega",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Globaalselt portatiivselt kaasaskantav", "bitcoin_point_2": "Hõlpsasti jagatav", "bitcoin_point_3": "Tsensuurile vastupidav", "bitcoin_point_4": "Hooldust pole vaja", "bitcoin_point_5": "Kinnisvaramaksu pole", "bitcoin_point_6": "Raske hävitada", "bitcoin_point_7": "Täiuslikult asendatav", "bitcoin_point_8": "Globaalne 24/7 turg",
	"point_1_summary_1": "Bitcoini saab liigutada kuhu tahes maailmas koheselt üle interneti. Kinnisvara on püsivalt seotud konkreetse asukohaga ja seda ei saa liigutada, muutes selle haavatavaks kohalike majandustingimuste, looduskatastroofide ja poliitilise ebastabiilsuse suhtes.",
	"point_2_summary_1": "Bitcoini saab jagada 100 miljoniks väiksemaks ühikuks, mida nimetatakse satoshideks, muutes selle ideaalseks mis tahes suurusega tehinguteks. Kinnisvara ei saa lihtsalt jagada — te ei saa müüa ainult oma maja kööki ega osta poolt magamistuba.",
	"point_3_summary_1": "Bitcoin toimib detsentraliseeritud võrgus, mida ükski ametiasutus ei saa kontrollida. Kinnisvara allub ulatuslikule ametiasutuste regulatsioonile, sealhulgas üürikontrollile, väljatõstmise moratooriumidele, tsoneerimisseadustele ja sundvõõrandamisele, kus ametiasutused saavad teie vara arestida.",
	"point_4_summary_1": "Bitcoin ei vaja hooldust — see eksisteerib digitaalse koodina võrgus. Kinnisvara nõuab pidevat hooldust, sealhulgas remonti, renoveerimist, vara haldamist, kindlustust ja üürnike haldamist, kui seda välja üüritakse.",
	"point_5_summary_1": "Bitcoinil ei ole jooksvaid makse — maksate kapitalikasumi maksu ainult müümisel. Kinnisvara allub igaaastasele kinnisvaramaksule, mida tuleb maksta olenemata sellest, kas kinnisvara toodab tulu, sundides teid tegelikult oma kinnisvara ametiasutustelt igavesti üürima.",
	"point_6_summary_1": "Bitcoini, mis on korrektselt varundatud, ei saa hävitada üleujutused, tulekahjud, maavärinad, orkaanid ega muud looduskatastroofid. Kinnisvara on haavatav kõigi füüsilise hävitamise vormide suhtes ja nõuab kallist kindlustust, mis ei pruugi kahjusid täielikult katta.",
	"point_7_summary_1": "Iga bitcoin on identne ja vahetatav — üks bitcoin võrdub ühe bitcoiniga kõikjal maailmas. Iga kinnisvara on unikaalne erineva asukoha, seisukorra ja omadustega, muutes kinnisvarade hinnakujunduse ja võrdlemise keeruliseks.",
	"point_8_summary_1": "Bitcoini saab osta ja müüa 24/7 igaüks, kellel on internetiühendus kõikjal maailmas. Kinnisvara müük on piiratud kohalike ostjatega, nõuab pikaajalisi protsesse advokaatide ja kinnisvaramaakleritega ning võib lõpuleviimiseks kesta kuid.",
	"bitcoin_point_9": "Edendab individuaalset omandiõigust",
	"real_estate_point_9": "Aitab kaasa eluaseme finantseeritusele",
	"point_9_summary_1": "Bitcoin võimaldab otsest individuaalset omandiõigust ilma vahendajateta ja edendab rahanduslikku suveräänsust kõigile. Kinnisvara ostmine investeeringuna lisaks oma peamisele eluasemele aitab kaasa eluaseme finantseeritusele, kus eluasemeid käsitletakse kaupadena, mitte peavarjuna. See tõstab hindu, vähendab taskukohasust peredele ja aitab kaasa eluaseme- ja kodutuse kriisile, mis mõjutab tänapäeval paljusid riike."
});

// bitcoin-vs-visa
writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin vs Visa",
	"visa_header": "ERINEVUS", "visa_header_2": "BITCOINI", "visa_header_3": "JA", "visa_header_4": "VISA VAHEL",
	"visa_intro_1": "Krediitkaardid ja Bitcoin on mõlemad maksesüsteemid, kuid nad toimivad väga erinevalt.",
	"visa_intro_2": "Krediitkaardid nagu Visa on suletud võrgud, mida kontrollivad finantsasutused, samas kui Bitcoin on avatud võrk, mida igaüks saab kasutada.",
	"visa_intro_3": "Vaatame nende kahe maksesüsteemi erinevusi: Bitcoin ja Visa.",
	"visa": "VISA",
	"visa_point_1": "Suletud võrk", "visa_point_2": "3% kaupmehetasu", "visa_point_3": "Läbipaistmatu süsteem", "visa_point_4": "Saab kontod külmutada", "visa_point_5": "Loob kõrge intressiga võlga", "visa_point_6": "Nõuab vahendajaid", "visa_point_7": "Piiratud tööaeg ja geograafia",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Avatud võrk", "bitcoin_point_2": "Kaupmehetasu puudub", "bitcoin_point_3": "Läbipaistev süsteem", "bitcoin_point_4": "Ei saa külmutada", "bitcoin_point_5": "Võlga ei looda", "bitcoin_point_6": "Isehoiustamine võimalik", "bitcoin_point_7": "24/7 globaalne juurdepääs",
	"point_1_summary_1": "Bitcoin on avatud võrk, millega igaüks saab liituda ja mida kasutada ilma loata. Krediitkaardivõrgud nagu Visa on suletud süsteemid, mida kontrollivad finantsasutused, kes saavad juurdepääsu keelata, kellele iganes soovivad.", "point_1_summary_2": "See teeb Bitcoini kaasavamaks ja kättesaadavamaks inimestele üle kogu maailma, eriti neile, kellel pole pangakontot või kellel on piiratud pangateenustele juurdepääs.",
	"point_2_summary_1": "Bitcoin-tehingutel pole kaupmeeste jaoks tasusid, samas kui krediitkaardifirmad küsivad kaupmeestelt tavaliselt umbes 3% tehingu kohta.", "point_2_summary_2": "Uurige, kuidas teie ettevõte saab raha säästa", "point_2_summary_3": ", võttes vastu Bitcoin-makseid krediitkaardi töötlustasude maksmise asemel.",
	"point_3_summary_1": "Bitcoin toimib läbipaistval plokiahelal, kus kõiki tehinguid saab igaüks kontrollida. Krediitkaardivõrgud toimivad suletud, omandiõigusega süsteemidena, kus tehingudetailid on avalikkuse eest peidetud.", "point_3_summary_2": "See läbipaistvus teeb Bitcoini usaldusväärsemaks ja võimaldab võrgu terviklikkuse sõltumatut kontrollimist.",
	"point_4_summary_1": "Krediitkaardifirmad saavad kontosid külmutada, tehinguid blokeerida või teenuseid keelata igal ajal. Bitcoini ei saa ükski keskasutus külmutada ega kontrollida.", "point_4_summary_2": "Bitcoiniga säilitate kontrolli oma raha üle ja teid ei saa maksesüsteemist välja lülitada.",
	"point_5_summary_1": "Krediitkaardid loovad võlga, mis võib koguneda kõrgeid intresse, kui seda kiiresti ei tasuta, mõnikord üle 25% aastas.", "point_5_summary_2": "Bitcoin-tehingud on lõplik arveldamine ilma võla loomiseta — saate kulutada ainult Bitcoine, mida tegelikult omate.",
	"point_6_summary_1": "Bitcoin võimaldab isehoiustamist, mis tähendab, et saate hoida ja kontrollida oma raha ilma pankadele ega maksetöötlejatele toetumata.", "point_6_summary_2": "Uurige Bitcoin-rahakotte", "point_6_summary_3": ", et mõista, kuidas saate oma raha üle kontrolli võtta. Krediitkaardid nõuavad alati vahendajaid nagu pangad ja maksetöötlejad.",
	"point_7_summary_1": "Bitcoin toimib 24/7 globaalselt ilma tööaegade ja geograafiliste piiranguteta.", "point_7_summary_2": "Krediitkaardivõrkudel on tööajad, hooldusaknad ja geograafilised piirangud, mis võivad takistada tehingute töötlemist."
});

console.log(`\nDone! Created 10 comparison files.`);
