/**
 * Creates Hungarian (hu) translation files for all bitcoin-vs-* comparison pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'hu';
const today = '2026-04-11';

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
	"bitcoin_vs_gold": "Bitcoin vs arany",
	"gold_header": "A KÜLÖNBSÉG A", "gold_header_2": "BITCOIN", "gold_header_3": "ÉS AZ", "gold_header_4": "ARANY KÖZÖTT",
	"gold_intro_1": "Az aranyat évezredek óta használják pénzként, és sokan pénzügyi menedéknek tekintik.",
	"gold_intro_2": "A Bitcoin egy 2009-ben létrehozott digitális pénz, amelyet szintén sokan pénzügyi menedéknek tekintenek.",
	"gold_intro_3": "De miben különbözik egy fizikai fém, mint az arany, a digitális pénztől, mint a Bitcoin? Nézzük meg a különbségeket két pénzforma között: Bitcoin és arany.",
	"gold": "ARANY",
	"gold_point_1": "Fizikailag kell szállítani", "gold_point_2": "Digitális tartozási jegyzékek", "gold_point_3": "A kínálat évente nő", "gold_point_4": "Rugalmas", "gold_point_5": "Fizikailag centralizált", "gold_point_6": "Nehéz ellenőrizni", "gold_point_7": "Nehéz felosztani",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Az interneten keresztül küldhető", "bitcoin_point_2": "Natívan digitális", "bitcoin_point_3": "Fix kínálat: 21M BTC", "bitcoin_point_4": "Rugalmatlan", "bitcoin_point_5": "Decentralizált", "bitcoin_point_6": "Könnyen ellenőrizhető", "bitcoin_point_7": "Könnyen felosztható",
	"point_1_summary_1": "Mivel a Bitcoin digitális, szinte azonnal, nagyon alacsony díjakkal küldhetik bárki, akinek van internet-hozzáférése. Mivel az arany fizikai, nem mozgatható az interneten keresztül, és fizikailag kell szállítani a tulajdonjog átruházásához.",
	"point_2_summary_1": "A Bitcoin egy natívan digitális eszköz, ami azt jelenti, hogy teljes tulajdonjogot ruházhatsz át az interneten keresztül. Egyes cégek lehetőséget kínálnak arany online vásárlására anélkül, hogy ténylegesen megkapnád a fizikai aranyat, ehelyett a cégre bízod a tárolást. Ez inkább egy digitális tartozási jegyzék, mivel csak a cég ígéretét birtoklod a tényleges eszköz helyett.",
	"point_3_summary_1": "A Bitcoinnak kemény felső határa van: összesen 21 millió BTC létezhet valaha.",
	"point_3_summary_2": "Minden évben új aranykínálatot bányásznak ki a földből, ami az összesített kínálat inflációját eredményezi. Becslések szerint az arany összesített kínálata évente körülbelül 1,6%-kal nő, ami azt jelenti, hogy a tortaszeletied évente 1,6%-kal zsugorodik.",
	"point_3_summary_3": "Ez kevesebb, mint a fiat infláció, de még mindig infláció.",
	"point_3_summary_4": "A Bitcoinnal a tortaszeleted soha nem zsugorodik.",
	"point_4_summary_1": "Az aranynak rugalmas kínálata van, ami azt jelenti, hogy amikor az arany ára emelkedik, nagyobb ösztönzés van több arany bányászására. Ez gyakran lefelé irányuló nyomást gyakorol az arany árára, amikor új bányákat nyitnak.",
	"point_4_summary_2": "A Bitcoinnal, bármennyire is emelkedik az ár, nem lehet 21 milliónál több Bitcoint előállítani.",
	"point_4_summary_3": "A Bitcoin az első olyan eszköz, amelynek rugalmatlan az ár és kínálat közötti viszonya.",
	"point_5_summary_1": "A Bitcoin hálózat decentralizált.", "point_5_summary_2": "Több tízezer független csomópont érvényesíti a hálózat szabályait.", "point_5_summary_3": "A felhasználók önállóan megőrizhetik Bitcoinjukat egy alkalmazás letöltésével.", "point_5_summary_4": "Bár a fizikai arany önálló megőrzése lehetséges, a legtöbb fizikai aranyat hatalmas tárolókban tartják, amelyeket letétkezelők birtokolnak, ami fizikailag centralizálttá teszi.",
	"point_6_summary_1": "A Bitcoinnal hihetetlenül egyszerű ellenőrizni, hogy valódi Bitcoinnal rendelkezel-e, ha önállóan megőrzöd az érméidet és futtatsz egy teljes csomópontot.", "point_6_summary_2": "Az önálló megőrzés olyan egyszerű, mint egy alkalmazás letöltése.", "point_6_summary_3": "A teljes csomópont egy egyszerű szoftver, amely biztosítja a hálózat szabályainak betartását, és ellenőrzi, hogy valódi Bitcoinod van.", "point_6_summary_4": "A fizikai aranyat nagyon nehéz hitelesíteni. Még ha ellenőrzöd is, hogy a fizikai arany külső része valódi, a belső része lehet volfrám vagy más, nem arany fém. Az egyetlen módja annak, hogy valóban ellenőrizd, birtoklod-e a fizikai aranyat, amelyről azt hiszed, az az olvasztás.",
	"point_7_summary_1": "Ahogyan 100 fillér van 1 forintban, úgy 100 000 000 sat van 1 Bitcoinban. Ez lehetővé teszi, hogy a Bitcoint bármilyen méretű vásárlásra használják, beleértve a néhány filléres mikrotranzakciókat is.", "point_7_summary_2": "Ez teszi a Bitcoint alkalmassá az üzleti felhasználásra.", "point_7_summary_3": "Mivel a fizikai aranyat nehéz felosztani, nem használható könnyen vásárlásokra, különösen kis vásárlásokra."
});

// bitcoin-vs-banks
writeFile(`bitcoin-vs-banks_${lang}.json`, {
	"bitcoin_vs_banks": "Bitcoin vs bankok",
	"banks_header": "A KÜLÖNBSÉG A", "banks_header_2": "BITCOIN", "banks_header_3": "ÉS A", "banks_header_4": "BANKOK KÖZÖTT",
	"banks_intro_1": "A bankok évszázadok óta irányítják a pénzt, közvetítőként szolgálva a pénzügyi tranzakciókban és kapuőrként a pénzügyi rendszerben.",
	"banks_intro_2": "A Bitcoin egy peer-to-peer digitális pénzrendszer, amely bankok vagy központi hatóságok nélkül működik.",
	"banks_intro_3": "De miben különbözik a Bitcoin hálózat a hagyományos bankrendszertől? Nézzük meg a legfontosabb különbségeket e két alapvetően eltérő pénzmegközelítés között.",
	"banks": "BANKOK",
	"banks_point_1": "Engedélyköteles", "banks_point_2": "Korlátozott nyitvatartás", "banks_point_3": "Privát, átláthatatlan működés", "banks_point_4": "Ők irányítják a pénzedet", "banks_point_5": "Változó díjak", "banks_point_6": "Túlköltést engedélyez díj ellenében", "banks_point_7": "Blokkolhatja a tranzakciókat",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Engedély nélküli hozzáférés", "bitcoin_point_2": "Mindig elérhető 24/7", "bitcoin_point_3": "Átlátható és nyílt", "bitcoin_point_4": "Te irányítod a pénzedet", "bitcoin_point_5": "Kiszámítható, alacsony díjak", "bitcoin_point_6": "Nem lehet túlkölteni", "bitcoin_point_7": "Cenzúraálló",
	"point_1_summary_1": "A Bitcoin engedély nélküli, ami azt jelenti, hogy bárki használhatja internet-hozzáféréssel anélkül, hogy bármilyen hatóságtól engedélyt kérne.", "point_1_summary_2": "A Bitcoin kapuőrök nélkül működik", "point_1_summary_3": "– senki sem tagadhatja meg a hozzáférésedet. A bankok viszont megtagadhatják számlanyitást, befagyaszthatják a meglévő számlákat, vagy megtagadhatják a szolgáltatásokat irányelveik vagy hatósági szabályozások alapján.",
	"point_2_summary_1": "A Bitcoin hálózat napi 24 órában, heti 7 napban, az év 365 napján működik karbantartási szünet vagy ünnepnap nélkül. A bankoknak korlátozott nyitvatartási idejük van, hétvégén és ünnepnapokon zárva tartanak, és gyakran vannak karbantartási időszakok, amikor a szolgáltatások nem érhetők el.",
	"point_3_summary_1": "Minden Bitcoin tranzakció nyilvános blokkláncra kerül, amelyet bárki ellenőrizhet és auditálhat.", "point_3_summary_2": "A bankok privát főkönyvekkel és átláthatatlan belső folyamatokkal működnek, amelyeket az ügyfelek nem tudnak függetlenül ellenőrizni.",
	"point_4_summary_1": "A Bitcoinnal tarthatod a saját privát kulcsaidat és teljes irányítást gyakorolhatsz a pénzed felett.", "point_4_summary_2": "Ismerd meg a Bitcoin tárcákat", "point_4_summary_3": "az önálló megőrzés megértéséhez. A bankok a pénzedet a saját számláikon tartják, és bármikor befagyaszthatják, korlátozhatják vagy zárolhatják a hozzáférést a pénzedhez.",
	"point_5_summary_1": "A Bitcoin tranzakciós díjak átláthatóak, kiszámíthatóak és jellemzően nagyon alacsonyak. A bankoknak gyakran vannak rejtett díjaik, havi számlavezetési díjaik, túlköltési díjaik, átutalási díjaik, ATM-díjaik és egyéb díjaik, amelyek idővel jelentős összegekké nőhetnek.",
	"point_6_summary_1": "A Bitcoin megakad\u00E1lyozza, hogy olyan p\u00E9nzt k\u00F6lts, amellyel nem rendelkezel \u2013 csak olyan Bitcoint k\u00F6lthetsz, amelyet t\u00E9nylegesen birtokolsz. A bankok enged\u00E9lyezik a t\u00FAlk\u00F6lt\u00E9st (\u00F6bb k\u00F6lt\u00E9se, mint a sz\u00E1mlaegyenleg) \u00E9s jelent\u0151s d\u00EDjakat sz\u00E1molnak fel ez\u00E9rt a szolg\u00E1ltat\u00E1s\u00E9rt, ami gyakran kaszk\u00E1dol\u00F3 b\u00FCntet\u00E9si d\u00EDjakhoz vezet.",
	"point_7_summary_1": "A Bitcoin tranzakciók cenzúraállóak – miután elküldted a hálózatra, semmilyen központi hatóság nem állíthatja le vagy fordíthatja vissza őket. A bankok blokkolhatják, befagyaszthatják, visszafordíthatják vagy korlátozhatják a tranzakciókat irányelveik, hatósági utasítások vagy gyanús tevékenységet jelző algoritmusok alapján."
});

// bitcoin-vs-stocks
writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin vs részvények",
	"stocks_header": "A KÜLÖNBSÉG A", "stocks_header_2": "BITCOIN", "stocks_header_3": "ÉS A", "stocks_header_4": "RÉSZVÉNYEK KÖZÖTT",
	"stocks_intro_1": "A részvények évtizedek óta népszerű befektetések, amelyek tulajdonrészt képviselnek vállalatokban.",
	"stocks_intro_2": "A Bitcoin egy 2009-ben létrehozott digitális pénz, amely bármely vállalattól vagy hatóságtól függetlenül működik.",
	"stocks_intro_3": "De miben különbözik egy vállalat részvényeinek birtoklása a digitális pénz, mint a Bitcoin, birtoklásától? Nézzük meg a különbségeket két befektetési forma között: Bitcoin és részvények.",
	"stocks": "RÉSZVÉNYEK",
	"stocks_point_1": "Részesedés egy vállalatban", "stocks_point_2": "Hígítható kínálat", "stocks_point_3": "Kulcsember-kockázat", "stocks_point_4": "P/E értékelések", "stocks_point_5": "Csak nyitvatartási időben", "stocks_point_6": "Partner-kockázat", "stocks_point_7": "Változó inflációvédelem",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Közvetlen tulajdonjog", "bitcoin_point_2": "Fix kínálat: 21M BTC", "bitcoin_point_3": "Decentralizált hálózat", "bitcoin_point_4": "Piac által vezérelt ár", "bitcoin_point_5": "0-24 kereskedés", "bitcoin_point_6": "Önálló megőrzés lehetséges", "bitcoin_point_7": "Fix kínálatú eszköz",
	"point_1_summary_1": "Amikor Bitcoint birtokolsz, közvetlenül birtoklod magát az eszközt. Amikor részvényeket birtokolsz, egy vállalat részesedését birtoklod, ami azt jelenti, hogy befektetésed a vállalat teljesítményétől, vezetői döntéseitől és üzleti sikerétől függ.",
	"point_2_summary_1": "A Bitcoinnak kemény felső határa van: összesen 21 millió BTC létezhet valaha.", "point_2_summary_2": "A vállalatok bármikor kibocsáthatnak új részvényeket, ami hígítja a meglévő részvényesek tulajdonrészét. Ez azt jelenti, hogy a vállalati részesedésed kisebb lesz, amikor új részvényeket hoznak létre.", "point_2_summary_3": "Ez kevesebb, mint a fiat infláció, de még mindig hígítás.", "point_2_summary_4": "A Bitcoinnal a tortaszeleted soha nem zsugorodik.",
	"point_3_summary_1": "A Bitcoin egy decentralizált hálózaton működik, egyetlen meghibásodási pont nélkül. A részvénybefektetések ki vannak téve a kulcsember-kockázatnak – ha a vezérigazgató vagy más kulcsfontosságú vezetők távoznak, megbetegednek vagy rossz döntéseket hoznak, a befektetésed jelentősen szenvedhet. A vállalatok erősen függenek a vezetői csapatuktól.",
	"point_4_summary_1": "A Bitcoin árát kizárólag a piaci kereslet és kínálat határozza meg. A részvényárakat gyakran P/E mutatóval (ár/nyereség arány) értékelik, amely megmutatja, mennyit fizetnek a befektetők a vállalat nyereségének minden egyes dollárjáért. A magas P/E mutatók túlértékelt részvényekre utalhatnak, ami megnehezíti a valós érték meghatározását.",
	"point_5_summary_1": "A Bitcoinnal a hét minden napján, napi 24 órában kereskednek a globális tőzsdéken.", "point_5_summary_2": "A Bitcoin decentralizált", "point_5_summary_3": "és soha nem alszik.", "point_5_summary_4": "A részvénypiacok csak a hétköznapi munkaidőben vannak nyitva, ami korlátozza, mikor vásárolhatod vagy adhatod el befektetéseidet.",
	"point_6_summary_1": "A Bitcoinnal önállóan megőrizheted az érméidet, ami azt jelenti, hogy valóban birtoklod őket anélkül, hogy bármilyen harmadik félre támaszkodnál.", "point_6_summary_2": "Az önálló megőrzés olyan egyszerű, mint egy alkalmazás letöltése.", "point_6_summary_3": "A részvényekhez brókerszámlára van szükség, és ki vagy téve a partner-kockázatnak – ha a vállalat csődbe megy vagy a bróker megbukik, elveszítheted a befektetésedet.", "point_6_summary_4": "Soha nem birtoklod közvetlenül a részvényeket.",
	"point_7_summary_1": "A Bitcoin egy fix kínálatú eszköz, amelynek kemény felső határa 21 millió Bitcoin. Ez kiváló inflációvédelemmé teszi. A részvények változó teljesítményt mutatnak az inflációval szemben – egyes vállalatok jól teljesítenek inflációs időszakokban, míg mások küzdenek. Nincs garancia arra, hogy bármely részvény megvéd az inflációtól."
});

// bitcoin-vs-cbdc
writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin vs CBDC-k",
	"cbdc_header": "HOGYAN NÉZZEN KI", "cbdc_header_2": "A DIGITÁLIS PÉNZEK", "cbdc_header_3": "?",
	"cbdc_intro_1": "Világunk egyre digitálisabbá válik, és ez igaz a pénzünkre is.",
	"cbdc_intro_2": "Ez felveti a kérdést: hogyan szeretnénk, hogy a digitális pénzünk kinézzen?",
	"cbdc_intro_3": "Sok ország vizsgálja a jegybanki digitális valuta (CBDC) kibocsátását, amely a meglévő állami valutánk teljesen digitális formája.",
	"cbdc_intro_4": "Nézzük meg a különbséget két digitális pénzforma között: Bitcoin és jegybanki digitális valuták (CBDC-k).",
	"cbdc": "CBDC",
	"cbdc_point_1": "Engedélyköteles", "cbdc_point_2": "Lejárati dátummal rendelkezhet", "cbdc_point_3": "Korlátlan kínálat", "cbdc_point_4": "Nincs adatvédelem", "cbdc_point_5": "Centralizált", "cbdc_point_6": "Egyetlen csomópont", "cbdc_point_7": "Befagyasztható", "cbdc_point_8": "Letétkezelő által őrzött", "cbdc_point_9": "Kormányzati monetáris politika", "cbdc_point_10": "Felügyeleti biztonsági modell",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Engedély nélküli", "bitcoin_point_2": "Nem jár le", "bitcoin_point_3": "Fix kínálat: 21M", "bitcoin_point_4": "Privát", "bitcoin_point_5": "Decentralizált", "bitcoin_point_6": "Több tízezer csomópont", "bitcoin_point_7": "Nem fagyasztható be", "bitcoin_point_8": "Önállóan megőrizhető", "bitcoin_point_9": "Kódolt monetáris politika", "bitcoin_point_10": "Kriptográfiai biztonsági modell",
	"point_1_summary_1": "A Bitcoin engedély nélküli. Bárki használhatja a Bitcoint internet-hozzáféréssel anélkül, hogy engedélyt kérne. A CBDC-k engedélyköteles rendszerek, amelyekben a kormány dönti el, ki használhatja őket, és milyen feltételekkel.",
	"point_2_summary_1": "A Bitcoin soha nem jár le. A CBDC-ket úgy lehet tervezni, hogy lejárati dátummal rendelkezzenek, arra kényszerítve a felhasználókat, hogy egy bizonyos időszakon belül elköltsék a pénzüket, különben elvesztik.",
	"point_3_summary_1": "A Bitcoinnak fix kínálata van: 21 millió. A CBDC-knek korlátlan kínálatuk van, pont úgy, mint a mai fiat valutáknak. A kormány bármikor nyomtathat több CBDC-t.",
	"point_4_summary_1": "A Bitcoin tranzakciók privátabbak, mint a CBDC tranzakciók. A CBDC-k a kormánynak teljes rálátást adnak minden tranzakcióra, amelyet végrehajtasz, ami alapvetően egy felügyeleti eszköz.",
	"point_5_summary_1": "A Bitcoin decentralizált, több tízezer független csomóponttal a világ minden tájáról. A CBDC-k centralizáltak, a központi bank irányítja a teljes rendszert.",
	"point_6_summary_1": "A Bitcoin hálózatot több tízezer független csomópont biztosítja világszerte. A CBDC-ket egyetlen csomópont (a központi bank) irányítja.",
	"point_7_summary_1": "Az önállóan megőrzött Bitcoint nem lehet befagyasztani. A CBDC-ket a kormány bármikor befagyaszthatja bármilyen okból.",
	"point_8_summary_1": "A Bitcoin önállóan megőrizhető, ami azt jelenti, hogy valóban birtoklod és irányítod a pénzedet. A CBDC-ket a központi bank őrzi, ami azt jelenti, hogy a kormány irányítja a pénzedet.",
	"point_9_summary_1": "A Bitcoin monetáris politikája kódban van rögzítve, és nem változtatható meg. A CBDC monetáris politikáját a kormány határozza meg, és bármikor megváltoztatható.",
	"point_10_summary_1": "A Bitcoin kriptográfiát használ a tranzakciók biztosítására és a hálózat védelmére. A CBDC-k felügyeleti biztonsági modellre támaszkodnak, ahol a központi hatóságba vetett bizalom szükséges."
});

// bitcoin-vs-cash
writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin vs készpénz",
	"cash_header": "A KÜLÖNBSÉG A", "cash_header_2": "BITCOIN", "cash_header_3": "ÉS A", "cash_header_4": "KÉSZPÉNZ KÖZÖTT",
	"cash_intro_1": "A készpénz évszázadok óta a pénz leggyakrabban használt formája.",
	"cash_intro_2": "A Bitcoin egy 2009-ben létrehozott digitális pénz, amely a hagyományos készpénzhez hasonlóan közvetlenül, közvetítők nélkül használható.",
	"cash_intro_3": "De miben különbözik a fizikai készpénz a digitális pénztől, mint a Bitcoin? Nézzük meg a különbségeket: Bitcoin vs készpénz.",
	"cash": "KÉSZPÉNZ",
	"cash_point_1": "Fizikailag kell szállítani", "cash_point_2": "Korlátozott hatótávolság", "cash_point_3": "Érvénytelenné tehető", "cash_point_4": "Hamisítható", "cash_point_5": "Centralizált", "cash_point_6": "Bank szükséges a tároláshoz", "cash_point_7": "Korlátozott oszthatóság",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Az interneten keresztül küldhető", "bitcoin_point_2": "Globális hatótávolság", "bitcoin_point_3": "Nem tehető érvénytelenné", "bitcoin_point_4": "Nem hamisítható", "bitcoin_point_5": "Decentralizált", "bitcoin_point_6": "Önállóan megőrizhető", "bitcoin_point_7": "Végtelenül osztható",
	"point_1_summary_1": "A Bitcoin az interneten keresztül bárhová a világon elküldhető, szinte azonnal és nagyon alacsony díjakkal. A készpénzt fizikailag kell szállítani, ami lassú, drága és biztonsági kockázatot jelent.",
	"point_2_summary_1": "A Bitcoin bármely internet-hozzáféréssel rendelkező személynek elküldhető a világon. A készpénz csak személyesen használható fizikai közelségben.",
	"point_3_summary_1": "A Bitcoint nem lehet érvényteleníteni. Indiában 2016-ban a kormány egyik napról a másikra érvénytelenítette az 500 és 1000 rúpiás bankjegyeket, ami az ország készpénzállományának 86%-át tette ki. A Bitcoin esetében ilyen nem fordulhat elő.",
	"point_4_summary_1": "A Bitcoin hálózat automatikusan ellenőrzi minden tranzakció valódiságát, lehetetlenné téve a hamis Bitcoin küldését. A készpénzt viszont hamisítani lehet, és jelentős kihívás a hamis bankjegyek felismerése.",
	"point_5_summary_1": "A Bitcoin decentralizált, többtízezer független csomóponttal a világ minden tájáról. A készpénzt központi bankok és kormányok bocsátják ki és irányítják.",
	"point_6_summary_1": "A Bitcoin önállóan megőrizhető egy digitális tárcában, a teljes irányítást biztosítva a pénzed felett. A készpénz nagy összegben történő tárolása nehézkes és biztonsági kockázatot jelent, és a bankba helyezett készpénz partner-kockázatnak van kitéve.",
	"point_7_summary_1": "A Bitcoin 100 000 000 egységre (sat) osztható, lehetővé téve a mikrotranzakciókat. A készpénz a legkisebb érmére korlátozódik, ami lehetetlenné teszi a kis összegű digitális fizetéseket."
});

// bitcoin-vs-bonds
writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin vs kötvények",
	"bonds_header": "A KÜLÖNBSÉG A", "bonds_header_2": "BITCOIN", "bonds_header_3": "ÉS A", "bonds_header_4": "KÖTVÉNYEK KÖZÖTT",
	"bonds_intro_1": "Az államkötvényeket hagyományosan a legbiztonságosabb befektetések egyikének tartják.",
	"bonds_intro_2": "A Bitcoin egy 2009-ben létrehozott digitális pénz fix kínálattal és decentralizált hálózattal.",
	"bonds_intro_3": "De miben különbözik az államkötvények tartása a Bitcoin tartásától? Nézzük meg a különbségeket: Bitcoin vs kötvények.",
	"bonds": "KÖTVÉNYEK",
	"bonds_point_1": "Partner-kockázat", "bonds_point_2": "Inflációnak kitett", "bonds_point_3": "Korlátozott likviditás", "bonds_point_4": "Aukciós rendszer", "bonds_point_5": "Fix hozam", "bonds_point_6": "Letétkezelő által őrzött", "bonds_point_7": "Kormányfüggő",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Nincs partner-kockázat", "bitcoin_point_2": "Fix kínálat", "bitcoin_point_3": "Magas likviditás", "bitcoin_point_4": "Nyílt piac", "bitcoin_point_5": "Növekedési potenciál", "bitcoin_point_6": "Önállóan megőrizhető", "bitcoin_point_7": "Kormányfüggetlen",
	"point_1_summary_1": "Az önállóan megőrzött Bitcoinnak nincs partner-kockázata. A kötvényeknél meg kell bíznod abban, hogy a kibocsátó (általában a kormány) vissza fogja fizetni az adósságát. Az államadósság szintje rekordmagasságban van világszerte.",
	"point_2_summary_1": "A Bitcoinnak fix kínálata van: 21 millió BTC. A kötvényhozamok gyakran nem tudják felülmúlni az inflációt, ami azt jelenti, hogy a kötvénytulajdonosok reálértéken veszítenek.",
	"point_3_summary_1": "A Bitcoinnal a hét minden napján, napi 24 órában kereskednek a globális tőzsdéken, és bármikor eladható. Egyes kötvények lejáratig lekötöttek, és a korai eladás büntetéssel járhat.",
	"point_4_summary_1": "A Bitcoin nyílt piacon kereskedik, ahol bárki vásárolhat és eladhat. A kötvényeket gyakran aukciós rendszerben bocsátják ki, korlátozott hozzáféréssel.",
	"point_5_summary_1": "A Bitcoin értéke jelentősen nőtt fennállása során, míg a kötvényhozamok jellemzően alacsonyak és fixek.",
	"point_6_summary_1": "A Bitcoin önállóan megőrizhető, valódi tulajdonjogot biztosítva. A kötvényeket harmadik fél letétkezelők kezelik.",
	"point_7_summary_1": "A Bitcoin bármely kormánytól függetlenül működik. A kötvények értéke közvetlenül függ a kibocsátó kormány fiskális politikájától és hitelképességétől."
});

// bitcoin-vs-crypto
writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin vs kripto",
	"crypto_header": "A KÜLÖNBSÉG A", "crypto_header_2": "BITCOIN", "crypto_header_3": "ÉS A", "crypto_header_4": "KRIPTO KÖZÖTT",
	"crypto_intro_1": "A legt\u00F6bb ember \u00FAgy gondolja, hogy a Bitcoin ugyanaz, mint a t\u00F6bbi kriptovaluta. Ez nem \u00EDgy van.",
	"crypto_intro_2": "A Bitcoin alapvet\u0151en k\u00FCl\u00F6nb\u00F6zik minden m\u00E1s kriptovalut\u00E1t\u00F3l sz\u00E1mos fontos szempontb\u00F3l.",
	"crypto_intro_3": "N\u00E9zz\u00FCk meg a legfontosabb k\u00FCl\u00F6nbs\u00E9geket a Bitcoin \u00E9s a kripto k\u00F6z\u00F6tt.",
	"crypto": "KRIPTO",
	"crypto_point_1": "Módosítható szabályok", "crypto_point_2": "Centralizált irányítás", "crypto_point_3": "Változtatható kínálat", "crypto_point_4": "Összetett rendszerek", "crypto_point_5": "Különböző konszenzus-mechanizmusok", "crypto_point_6": "Spekuláció", "crypto_point_7": "Törékenység", "crypto_point_8": "Bennfentes irányítás",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Megváltoztathatatlan szabályok", "bitcoin_point_2": "Decentralizált hálózat", "bitcoin_point_3": "Fix kínálat: 21M BTC", "bitcoin_point_4": "Elegáns egyszerűség", "bitcoin_point_5": "Proof of Work konszenzus", "bitcoin_point_6": "Hosszú távú értékmegőrzés", "bitcoin_point_7": "Antifragilitás", "bitcoin_point_8": "Nincs irányítás",
	"point_1_summary_1": "A Bitcoin szabályai gyakorlatilag megváltoztathatatlanok, a decentralizált konszenzus biztosítja. A legtöbb kriptovaluta szabályait egy kis csoport módosíthatja.",
	"point_2_summary_1": "A Bitcoin valóban decentralizált, több tízezer független csomóponttal. A legtöbb kriptovaluta centralizált, egy kis csapat vagy alapítvány irányítja.",
	"point_3_summary_1": "A Bitcoinnak kemény felső határa van: 21 millió BTC. A legtöbb kriptovaluta kínálata változtatható, ami hígítást és inflációt eredményezhet.",
	"point_4_summary_1": "A Bitcoin elegánsan egyszerű: digitális pénz fix kínálattal. A legtöbb kriptovaluta összetett rendszereket épít, amelyek növelik a támadási felületet és a meghibásodási pontokat.",
	"point_5_summary_1": "A Bitcoin Proof of Work konszenzust használ, amely energiát igényel a hálózat biztosítására. Ez a legbiztonságosabb és legbizonyítottabb konszenzus-mechanizmus.",
	"point_6_summary_1": "A Bitcoint egyre inkább hosszú távú értékmegőrzőként használják. A legtöbb kriptovaluta spekulatív, gyors haszonszerzésre épül.",
	"point_7_summary_1": "A Bitcoin antifragilis – az évek során minden támadástól erősebb lett. A legtöbb kriptovaluta törékeny, és a kihívások során meghibásodik vagy eltűnik.",
	"point_8_summary_1": "A Bitcoinnak nincs vezérigazgatója, nincs alapítványa és nincs irányító testülete. A legtöbb kriptovalutát egy azonosítható csapat irányítja, ami irányítási és szabályozási kockázatot jelent."
});

// bitcoin-vs-visa
writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin vs Visa",
	"visa_header": "A KÜLÖNBSÉG A", "visa_header_2": "BITCOIN", "visa_header_3": "ÉS A", "visa_header_4": "VISA KÖZÖTT",
	"visa_intro_1": "A Visa az egyik legnagyobb fizetési hálózat a világon, évente több milliárd tranzakciót dolgoz fel.",
	"visa_intro_2": "A Bitcoin egy decentralizált fizetési hálózat, amely közvetítők nélkül működik.",
	"visa_intro_3": "De miben különbözik a Visa fizetési hálózata a Bitcoin fizetési hálózatától? Nézzük meg a különbségeket.",
	"visa": "VISA",
	"visa_point_1": "Zárt hálózat", "visa_point_2": "Magas díjak", "visa_point_3": "Átláthatatlan", "visa_point_4": "Befagyaszthatja a számlát", "visa_point_5": "Hitelkártya-adósság", "visa_point_6": "Letétkezelői megőrzés", "visa_point_7": "Korlátozott elérhetőség",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Nyílt hálózat", "bitcoin_point_2": "Alacsony díjak", "bitcoin_point_3": "Átlátható", "bitcoin_point_4": "Nem fagyasztható be", "bitcoin_point_5": "Nincs adósság", "bitcoin_point_6": "Önálló megőrzés", "bitcoin_point_7": "Mindig elérhető",
	"point_1_summary_1": "A Bitcoin egy nyílt hálózat, amelyhez bárki internet-hozzáféréssel csatlakozhat engedély nélkül. A Visa egy zárt hálózat, amelyhez a kereskedőknek meg kell felelniük és jelentkezniük kell a hozzáférésért.",
	"point_2_summary_1": "A Bitcoin tranzakciós díjak jellemzően sokkal alacsonyabbak, mint a Visa feldolgozási díjak. A kereskedők általában 2-3% díjat fizetnek a Visa tranzakciók után, míg a Bitcoin Lightning hálózat szinte nulla díjas fizetéseket tesz lehetővé.",
	"point_3_summary_1": "A Bitcoin tranzakciók nyilvános blokkláncra kerülnek, amelyet bárki ellenőrizhet. A Visa privát hálózatot működtet átláthatatlan belső folyamatokkal.",
	"point_4_summary_1": "Az önállóan megőrzött Bitcoint nem lehet befagyasztani. A Visa befagyaszthatja a számládat, visszatarthatja a fizetéseket, és megtagadhatja a szolgáltatást.",
	"point_5_summary_1": "A Bitcoin nem adósságalapú pénz – csak Bitcoint költhetsz, amelyet valóban birtokolsz. A Visa hitelkártyák adósság felhalmozását teszik lehetővé, magas kamatokkal.",
	"point_6_summary_1": "A Bitcoin önállóan megőrizhető, ami valódi tulajdonjogot biztosít. A Visa számlák bankjaidtól és pénzintézetektől függenek.",
	"point_7_summary_1": "A Bitcoin hálózat napi 24 órában, heti 7 napban elérhető. A Visa rendszer időnként leáll karbantartás, technikai problémák vagy ünnepnapok miatt."
});

// bitcoin-vs-real-estate
writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin vs ingatlan",
	"re_header": "A KÜLÖNBSÉG A", "re_header_2": "BITCOIN", "re_header_3": "ÉS AZ", "re_header_4": "INGATLAN KÖZÖTT",
	"re_intro_1": "Az ingatlan évszázadok óta az egyik legnépszerűbb befektetési forma és értékmegőrző eszköz.",
	"re_intro_2": "A Bitcoin egy 2009-ben létrehozott digitális pénz, amely a tulajdon tökéletes formájaként ismert.",
	"re_intro_3": "De miben különbözik az ingatlan birtoklása a Bitcoin birtoklásától? Nézzük meg a különbségeket.",
	"real_estate": "INGATLAN",
	"re_point_1": "Nem hordozható", "re_point_2": "Nehezen osztható", "re_point_3": "Elkobozható", "re_point_4": "Karbantartás szükséges", "re_point_5": "Ingatlanadó", "re_point_6": "Megsemmisíthető", "re_point_7": "Nem helyettesíthető", "re_point_8": "Korlátozott piac", "re_point_9": "Komplex tulajdonjog",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Teljesen hordozható", "bitcoin_point_2": "Végtelenül osztható", "bitcoin_point_3": "Nem elkobozható", "bitcoin_point_4": "Nincs karbantartás", "bitcoin_point_5": "Nincs Bitcoin-adó", "bitcoin_point_6": "Nem megsemmisíthető", "bitcoin_point_7": "Helyettesíthető", "bitcoin_point_8": "Globális piac", "bitcoin_point_9": "Egyszerű tulajdonjog",
	"point_1_summary_1": "A Bitcoin bárhová elvihető a világon egy okostelefonon, USB-n vagy akár az emlékezetedben. Az ingatlant fizikailag nem lehet mozgatni.",
	"point_2_summary_1": "A Bitcoin 100 millió egységre osztható, lehetővé téve bármilyen összeg pontos átutalását. Az ingatlan nehezen és költségesen osztható.",
	"point_3_summary_1": "A megfelelően önállóan megőrzött Bitcoint gyakorlatilag nem lehet elkobozni. Az ingatlant a kormányok jogszabállyal elkobozhatják.",
	"point_4_summary_1": "A Bitcoin nem igényel karbantartást – nincs javítás, biztosítás vagy kezelés. Az ingatlan folyamatos karbantartást és költségeket igényel.",
	"point_5_summary_1": "A Bitcoinra nincs folyamatos tart\u00E1si ad\u00F3. Az ingatlanokra folyamatos ingatlanad\u00F3t kell fizetni, ami azt jelenti, hogy val\u00F3j\u00E1ban soha nem birtoklod teljesen.",
	"point_6_summary_1": "A Bitcoin nem semmisíthető meg természeti katasztrófák, háborúk vagy tűzvész által. Az ingatlan fizikailag megsemmisíthető.",
	"point_7_summary_1": "Minden bitcoin egyforma és kicserélhető bármely más bitcoinra. Minden ingatlan egyedi, ami megnehezíti az összehasonlítást és kereskedést.",
	"point_8_summary_1": "A Bitcoinnal globálisan kereskednek napi 24 órában. Az ingatlanpiac helyi, lassú és bürokratikus.",
	"point_9_summary_1": "A Bitcoin tulajdonjog egy privát kulcs birtoklásán alapul. Az ingatlan tulajdonjog komplex jogi kereteket, ügyvédeket és nyilvántartásokat igényel."
});

// bitcoin-vs-fine-art
writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin vs képzőművészet",
	"art_header": "A KÜLÖNBSÉG A", "art_header_2": "BITCOIN", "art_header_3": "ÉS A", "art_header_4": "KÉPZŐMŰVÉSZET KÖZÖTT",
	"art_intro_1": "A képzőművészetet évszázadok óta értékmegőrző eszközként és befektetésként használják.",
	"art_intro_2": "A Bitcoin egy 2009-ben létrehozott digitális pénz fix kínálattal.",
	"art_intro_3": "De miben különbözik a műtárgyak birtoklása a Bitcoin birtoklásától? Nézzük meg a különbségeket.",
	"fine_art": "KÉPZŐMŰVÉSZET",
	"art_point_1": "Nem helyettesíthető", "art_point_2": "Korlátozott piaci hozzáférés", "art_point_3": "Magas díjak", "art_point_4": "Nem osztható", "art_point_5": "Nehéz hitelesíteni", "art_point_6": "Megsemmisíthető", "art_point_7": "Exkluzív",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Helyettesíthető", "bitcoin_point_2": "Nyílt piaci hozzáférés", "bitcoin_point_3": "Alacsony díjak", "bitcoin_point_4": "Végtelenül osztható", "bitcoin_point_5": "Könnyen hitelesíthető", "bitcoin_point_6": "Nem megsemmisíthető", "bitcoin_point_7": "Mindenki számára elérhető",
	"point_1_summary_1": "Minden bitcoin egyforma és kicserélhető. Minden műalkotás egyedi, ami megnehezíti az összehasonlítást, az árazást és a kereskedést.",
	"point_2_summary_1": "A Bitcoin nyílt piacon kereskedik, amelyhez bárki hozzáférhet az interneten. A képzőművészeti piac exkluzív, aukciósházak és kereskedők dominálják, korlátozott hozzáféréssel.",
	"point_3_summary_1": "A Bitcoin tranzakciós díjak alacsonyak. A képzőművészeti tranzakciók magas díjakkal járnak: aukciós jutalékok, biztosítás, szállítás és tárolási költségek.",
	"point_4_summary_1": "A Bitcoin 100 millió egységre osztható. Egy műalkotás nem osztható kisebb részekre anélkül, hogy megsemmisülne.",
	"point_5_summary_1": "A Bitcoin hitelességét a hálózat automatikusan ellenőrzi. A műalkotások hitelesítése költséges szakértőket és időt igényel, és a hamisítás jelentős probléma.",
	"point_6_summary_1": "A Bitcoin nem semmisíthető meg fizikailag. A műalkotásokat tűz, víz, lopás vagy természeti katasztrófák megsemmisíthetik.",
	"point_7_summary_1": "Bárki vásárolhat Bitcoint, akár néhány forint értékben is. A képzőművészet exkluzív befektetés, amelyhez általában jelentős tőke szükséges."
});

console.log(`\nDone! Created 10 comparison files.`);
