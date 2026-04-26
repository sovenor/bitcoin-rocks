#!/usr/bin/env node
/**
 * Hungarian (hu) manifest refresh — part 1 of non-inflation namespaces.
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
	"hu.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Vissza a kezdőlapra",
	"404::404_message":
		"A Bitcoin remek, de ez az oldal nem működik.",
	"404::404_not_found_short": "Nem található",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Ingyenes üzleti eszközöket adunk a kisvállalkozásoknak, hogy könnyebb legyen elfogadni a Bitcoin-fizetéseket. „Bitcoin a vállalkozásoknak\u201D oldalunk elmagyarázza, miért jó a Bitcoin az üzletnek, hogyan válassz pénztárcát és fizetésszolgáltatót, és ingyenes „Bitcoin Accepted Here\u201D matricákat is kínál.",
	"about::about_card_business_label": "Üzleti eszközök",
	"about::about_card_business_source": "Forrás: bitcoin.rocks ←",
	"about::about_card_business_title":
		"Minden, ami egy vállalkozásnak kell a Bitcoin-fizetések elfogadásához",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Forrás: GitHub ←",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Közreműködés",
	"about::about_card_contribute_source": "Forrás: GitHub ←",
	"about::about_card_contribute_title":
		"Tudd meg, hogyan járulhatsz hozzá a bitcoin.rocks fejlesztéséhez",
	"about::about_card_email_label": "E-mail",
	"about::about_card_email_source": "Forrás: e-mail ←",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Nyomtatható szórólapok",
	"about::about_card_flyers_source": "Forrás: bitcoin.rocks ←",
	"about::about_card_flyers_title":
		"Tölts le és nyomtass Bitcoin szórólapokat a közösségednek",
	"about::about_card_github_label": "Repository",
	"about::about_card_github_source": "Forrás: GitHub ←",
	"about::about_card_github_title":
		"Nézd meg a bitcoin.rocks-ot a GitHubon",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Forrás: Nostr ←",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Ingyenes matricák",
	"about::about_card_stickers_source": "Forrás: bitcoin.rocks ←",
	"about::about_card_stickers_title":
		"Rendelj ingyenes Bitcoin matricákat házhozszállítással",
	"about::about_editorial_2":
		"Hivatalos forrásokat használunk: Federal Reserve (FRED), U.S. Bureau of Labor Statistics, FDIC, Egyesült Nemzetek, World Gold Council, Forbes, MIT Technology Review, Lyn Alden és James Lavish. Hisszük, hogy ha a tényeket világosan mutatjuk be, a Bitcoin önmagáért beszél.",
	"about::about_flyers_blurb":
		"Olyan nyomtatható szórólapokat tervezünk, amelyeket szétoszthatsz rendezvényeken, kifüggeszthetsz hirdetőtáblákra vagy postaládákba dobhatsz — egyszerű módja annak, hogy felkeltsd az érdeklődést, és a bitcoin.rocks oldalra irányítsd az embereket, hogy többet tudjanak meg.",
	"about::about_header": "A bitcoin.rocks projektről",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "indította a bitcoin.rocks-ot",
	"about::about_mission_1b":
		"felhasználó 2022-ben indította egy egyszerű küldetéssel: felgyorsítani a Bitcoin elfogadottságát az oktatáson keresztül.",
	"about::about_open_source_2":
		"A bitcoin.rocks egy ingyenes, nyílt forráskódú projekt MIT licenc alatt. Mindenkit szívesen látunk, aki közreműködne. Különösen fordítókat keresünk, akik elérhetővé tehetik tartalmunkat az emberek számára szerte a világon.",
	"about::about_open_source_header": "Nyílt forráskód",
	"about::about_page_description":
		"A bitcoin.rocks egy ingyenes, nyílt forráskódú Bitcoin oktatási weboldal, amely 2022-ben indult. Küldetésünk a Bitcoin elfogadottságának felgyorsítása az oktatáson keresztül.",
	"about::about_stickers_blurb":
		"Ingyenes Bitcoin matricákat küldünk házhozszállítással, hogy segítsünk terjeszteni a Bitcoinról szóló tudást a közösségedben. Havonta százak olvassák be ezeknek a matricáknak a QR-kódját, hogy többet tudjanak meg a Bitcoinról.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"A Bitcoinon nem lehet bankrohamokat indítani",
	"bank-runs::bank_runs_bitcoin_p1":
		"A Bitcoin teljes tartalékos rendszer. Nem bankban tartod a pénzed. Te magad vagy a saját bankod. A pénzedet senki nem adja kölcsön a tudtod nélkül; csak te férsz hozzá.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Amíg saját pénztárcádban tartod a Bitcoint — nem tőzsdén vagy ETF-ben —, addig a bankroham lehetetlen.",
	"bank-runs::bank_runs_bitcoin_p3":
		"A Bitcoinnal valódi irányításod van a pénzed felett.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"2020. március 26. óta az amerikai bankoknak nem kell semmilyen kötelező tartalékot tartaniuk.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Bank tartalékráta",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Forrás: Federal Reserve ←",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Teljes tartalékos rendszer — nincs szükség betétbiztosításra.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin fedezet",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Forrás: Bitcoin whitepaper ←",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Minden Bitcoin a blockchainen van — semmit nem adnak kölcsön belőle.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Bitcoin tartalékráta",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Forrás: Bitcoin whitepaper ←",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 milliárd dolláros biztosítási alap a 10,82 billió dolláros biztosított betétállománnyal szemben (2025. december).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC fedezet",
	"bank-runs::bank_runs_card_fdic_source":
		"Forrás: FDIC Statistics at a Glance ←",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Esettanulmány",
	"bank-runs::bank_runs_card_svb_source":
		"Forrás: University of Washington School of Law ←",
	"bank-runs::bank_runs_card_svb_title":
		"Nézd meg, hogyan történt a Silicon Valley Bank csődje",
	"bank-runs::bank_runs_card_wallet_label": "Következő lépés",
	"bank-runs::bank_runs_card_wallet_source": "Kezdd el itt ←",
	"bank-runs::bank_runs_card_wallet_title":
		"Tudd meg, hogyan szerezhetsz Bitcoin pénztárcát",
	"bank-runs::bank_runs_fdic_heading":
		"Az FDIC biztosítás a betétek mintegy 1 %-át fedezi",
	"bank-runs::bank_runs_fdic_p1":
		"Az FDIC biztosítás betétesenként legfeljebb 250 000 dollárig védi a betéteket. De a biztosítási alap nagyon kicsi a védendő összes betéthez képest.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Tömeges bankcsőd esetén a kormány valószínűleg több pénzt nyomtatna a hiány pótlására — ami",
	"bank-runs::bank_runs_fdic_p2_link": "inflációhoz vezet.",
	"bank-runs::bank_runs_header":
		"A Bitcoinon nem lehet bankrohamokat indítani, de a bankodon igen.",
	"bank-runs::bank_runs_page_description":
		"A bankok a részleges tartalékrendszeren keresztül kihelyezik a betéteket. Ha sokan próbálnak egyszerre pénzt felvenni, a bankok csődbe mehetnek. A Bitcoin teljes tartalékos rendszer — bankroham lehetetlen.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: valós példa",
	"bank-runs::bank_runs_svb_p1_a":
		"2023 márciusában a Silicon Valley Bank csődbe ment, miután",
	"bank-runs::bank_runs_svb_p1_b":
		"Amikor ezek a kötvények veszítettek értékükből, az SVB nem tudta fedezni a kifizetéseket. A bank fizetésképtelenné vált.",
	"bank-runs::bank_runs_svb_p1_link":
		"hosszú lejáratú államkötvényekbe fektette ügyfelei betéteit.",
	"bank-runs::bank_runs_svb_p2":
		"Vállalkozások ezrei nem tudták kifizetni alkalmazottaikat. Az FDIC közbelépett — de felmerült a nagy kérdés: tényleg biztonságban van a pénzed?",
	"bank-runs::bank_runs_what_p1":
		"A bankok nem trezorban őrzik a betéteidet. Kihelyezik és befektetik a pénzedet — ezt nevezik részleges tartalékrendszerű bankolásnak.",
	"bank-runs::bank_runs_what_p2":
		"Amikor sokan próbálnak egyszerre pénzt felvenni, a banknak nincs elég készpénze mindenkinek. Ez a bankroham — és teljes bankcsődhöz vezethet.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és a <span class=\"asset\">bankok</span> között",
	"bitcoin-vs-banks::point_1_summary_1":
		"A Bitcoint bárki használhatja, akinek van internetkapcsolata — ",
	"bitcoin-vs-banks::point_1_summary_2": "nincs szükség engedélyre.",
	"bitcoin-vs-banks::point_1_summary_3":
		"A bankok belső szabályzat vagy kormányzati utasítás alapján megtagadhatják a számlanyitást, befagyaszthatják vagy lezárhatják a számlákat.",
	"bitcoin-vs-banks::point_2_summary_1":
		"A Bitcoin-hálózat a hét minden napján 24/7 működik karbantartási ablakok és ünnepnapok nélkül. A bankok korlátozott nyitvatartással működnek, hétvégén zárva tartanak, és működési zavarok érhetik őket.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Minden Bitcoin-tranzakció egy nyilvános blockchainen van, amelyet bárki ellenőrizhet. A bankoknak privát könyvelésük van, amelyet az ügyfelek nem tudnak önállóan auditálni.",
	"bitcoin-vs-banks::point_4_summary_1":
		"A Bitcoinnal a saját privát kulcsaidat birtoklod — nézd meg ",
	"bitcoin-vs-banks::point_4_summary_2":
		"egyszerű útmutatónkat a Bitcoin pénztárcákról",
	"bitcoin-vs-banks::point_4_summary_3":
		". A bankok kezelik a pénzedet, és bármikor befagyaszthatják, korlátozhatják vagy zárolhatják.",
	"bitcoin-vs-banks::point_5_summary_1":
		"A Bitcoin-tranzakciók díjai átláthatók és opcionálisak. A bankok rejtett díjakat halmoznak: számlavezetés, túlzott kifizetés, átutalás és bankautomata-használat.",
	"bitcoin-vs-banks::point_6_summary_1":
		"A Bitcoinnal csak azt költheted el, ami valóban a tiéd. A bankok engedélyezik a túllépést, és aztán díjakat számítanak fel.",
	"bitcoin-vs-banks::point_7_summary_1":
		"A Bitcoin-tranzakciókat elküldés után nem lehet leállítani vagy visszafordítani. A bankok belső szabályzat vagy kormányzati utasítás alapján blokkolhatják, befagyaszthatják vagy visszafordíthatják a tranzakciókat.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és a <span class=\"asset\">kötvények</span> között",
	"bitcoin-vs-bonds::point_1_summary_1":
		"A kötvények csak papíron „kockázatmentesek\u201D — az infláció, a kamatváltozások és a fizetésképtelenségi kockázat felemészti a valós hozamot.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"A Bitcoin volatilitása átlátható, de nincs rejtett partnerkockázat.",
	"bitcoin-vs-bonds::point_2_summary_1": "Amikor az ",
	"bitcoin-vs-bonds::point_2_summary_2": "infláció",
	"bitcoin-vs-bonds::point_2_summary_3":
		" magasabb a kötvényhozamoknál, a kötvénytulajdonosok minden évben valós vásárlóerőt veszítenek. A Bitcoin 21 milliós felső határát az infláció nem tudja csökkenteni.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"A kötvénypiacok válságban befagyhatnak — a Silicon Valley Bank részben azért ment csődbe, mert kötvényei elveszítették értéküket. Nézd meg, hogyan történnek a ",
	"bitcoin-vs-bonds::point_3_summary_2": "bankrohamok",
	"bitcoin-vs-bonds::point_3_summary_3":
		" és miért kerüli el a Bitcoin a sorsukat. A Bitcoin globálisan 24/7 működik, likviditási válságok nélkül.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Az államkötvény-aukciók kudarcot vallhatnak, ha nincs elég vevő — nézd meg a ",
	"bitcoin-vs-bonds::point_4_summary_2": "2022-es gyenge aukciót",
	"bitcoin-vs-bonds::point_4_summary_3":
		"A Bitcoin árát folyamatosan a globális nyílt piacok határozzák meg, központi aukciók nélkül, amelyek kudarcot vallhatnak.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"A kötvényhozam a vásárlás pillanatában rögzített. Akár a gazdaság növekszik, akár a valuta összeomlik, a hozamod ugyanaz marad.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"A Bitcoinnak jelentős növekedési potenciálja van, mert a növekvő elfogadottság a fix kínálatba ütközik.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"A kötvények nagy részét bankokon vagy brókereken keresztül tartják, ami partnerkockázatot ad hozzá. A Bitcoint ",
	"bitcoin-vs-bonds::point_6_summary_2": "saját megőrzésben",
	"bitcoin-vs-bonds::point_6_summary_3":
		" lehet tartani — ami teljesen kiküszöböli ezt a kockázatot.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"A kötvények teljes mértékben attól függnek, hogy a kormányok visszafizetik-e adósságaikat. Ha egy kormány csődbe megy vagy az adósságot inflációval feloldja, a kötvénytulajdonosok veszítenek.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"A Bitcoin függetlenül működik bármely kormánytól vagy politikai erőtől.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és a <span class=\"asset\">készpénz</span> között",
	"bitcoin-vs-cash::point_1_summary_1":
		"A Bitcoin globálisan, az interneten keresztül percek alatt mozog. A készpénznek fizikai jelenlétre vagy megbízható futárokra van szüksége — bankjegyeket nem küldhetsz e-mailben.",
	"bitcoin-vs-cash::point_2_summary_1":
		"A Bitcoin mindenhol egyformán működik. A készpénzt a földrajz, az árfolyamok és a helyi elfogadottság korlátozza.",
	"bitcoin-vs-cash::point_3_summary_1":
		"A kormányok egyik napról a másikra demonetizálhatják a készpénzt — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">India</a> ezt tette 2016-ban. De még demonetizáció nélkül is veszít értékéből a készpénz",
	"bitcoin-vs-cash::point_3_summary_2": "infláció",
	"bitcoin-vs-cash::point_3_summary_3":
		" miatt. Egyetlen kormány vagy hatalom sem demonetizálhatja a Bitcoint.",
	"bitcoin-vs-cash::point_4_summary_1":
		"A készpénz hamisítható, néha igen pontosan is. A Bitcoin kriptográfiát használ, és a hamisítást matematikailag lehetetlenné teszi.",
	"bitcoin-vs-cash::point_5_summary_1":
		"A Bitcoinnak nincs központi kibocsátója. A készpénzt kormányok bocsátják ki, akik bármikor nyomtathatnak többet, megváltoztathatják a dizájnt vagy kivonhatnak bankjegyeket.",
	"bitcoin-vs-cash::point_6_summary_1":
		"A készpénz sebezhető a lopás, tűz, elvesztés és lefoglalás ellen. A Bitcoint ",
	"bitcoin-vs-cash::point_6_summary_2":
		"biztonságosan saját megőrzésben tarthatod",
	"bitcoin-vs-cash::point_6_summary_3":
		" a telefonodon vagy hardveres pénztárcádban.",
	"bitcoin-vs-cash::point_7_summary_1":
		"A Bitcoin 100 millió satoshira osztható, ami bármilyen méretű mikrotranzakciót lehetővé tesz. A készpénznek van minimális címlete — egy bankjegyet nem tudsz félbevágni.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és a <span class=\"asset\">jegybanki digitális valuták (CBDC)</span> között",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Senki sem akadályozhat meg abban, hogy Bitcoin-tranzakciót hajts végre. A CBDC-ket úgy tervezték, hogy a kormányok és a központi bankok minden fizetést kontrolláljanak, ami korlátozza a magánéletedet és a szabadságodat.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"A Bitcoin soha nem jár le, és nincsenek havi költségei. A CBDC-ket úgy lehet programozni, hogy lejárjanak, megakadályozva ezzel a jövőre való megtakarítást.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"A Bitcoin felső határa 21 millió BTC. A CBDC-knek nincs kínálati felső határa, és lehetővé teszik a kormányok számára, hogy tetszésük szerint növeljék a pénzkínálatot — ami",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflációhoz vezet.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"A Bitcoin-címek nincsenek a valódi személyazonosságodhoz kötve. A CBDC-k közvetlenül a kormány által azonosított személyekhez vannak kötve, ami lehetővé teszi a tömeges megfigyelést és a pénzügyi cenzúrát.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"A Bitcoin szabályait több ezer független csomópont kezeli. A CBDC-k központosítottak a kormányokban és a központi bankokban, amelyek teljes ellenőrzéssel rendelkeznek a hálózat felett.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Bárki futtathat Bitcoin-csomópontot, és ellenőrizheti a hálózat szabályait. A CBDC-k nem teszik lehetővé a felhasználók számára, hogy csomópontokat futtassanak — meg kell bíznod egy központi hatóságban.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"A saját megőrzésben tartott Bitcoint nem lehet befagyasztani. A CBDC-ket úgy tervezték, hogy a kormányok és a központi bankok azonnal befagyaszthassák a számlákat.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"A Bitcoin teljes irányítást ad a pénzed felett, ha saját ",
	"bitcoin-vs-cbdc::point_8_summary_2": "pénztárcádban",
	"bitcoin-vs-cbdc::point_8_summary_3":
		" tartod. A CBDC-k esetén meg kell bíznod letétkezelőkben, például bankokban vagy kormányokban, akik a pénzedet kezelik.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"A Bitcoin monetáris politikája be van építve a kódba, és nem változtatható meg. A CBDC-ket politikusok szeszélyei szerint újraprogramozhatják, ami",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflációt",
	"bitcoin-vs-cbdc::point_9_summary_3":
		" eredményez, ha túl sok pénzt nyomtatnak.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"A Bitcoin a valaha épített legbiztonságosabb számítógépes hálózat, és soha nem törték fel. A CBDC-k a bankoktól és kormányoktól függenek, amelyeket számtalanszor feltörtek már.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és a <span class=\"asset\">kriptovaluták</span> között",
	"bitcoin-vs-crypto::point_1_summary_1":
		"A Bitcoin protokoll alig változott 2009 óta, és kiszámítható szabályokat ad. A legtöbb kriptoprojekt rendszeresen módosítja a protokollt, a tokenomikát, vagy új verziókba forkol.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"A Bitcoin több ezer független csomóponton fut világszerte. A legtöbb kriptoprojektet alapítványok, vállalatok vagy fejlesztői kiscsapatok irányítják, amelyek egyoldalúan hozhatnak változtatásokat.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"A Bitcoin felső határa 21 millió — a legritkább digitális vagyon. A legtöbb kriptoprojekt korlátlan kínálatú, vagy mechanizmusokkal rendelkezik új tokenek tetszés szerinti létrehozásához, ami felhígítja a tulajdonosokat.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"A Bitcoinnak egy célja van: peer-to-peer digitális pénz. Mindenki érti, mindenki használhatja. A legtöbb kriptoprojekt összetett okosszerződéseket vagy DeFi-t tartalmaz, amelyek szakértői technikai tudást igényelnek a biztonságos használathoz.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"A Bitcoin proof-of-work rendszere 15 éve sikeresen működik a fő láncon végrehajtott sikeres támadás nélkül. A legtöbb kriptoprojekt kísérleti konszenzusmódszereket használ, amelyeket nem teszteltek szigorúan.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"A Bitcoin digitális pénz — értékőrző és csereeszköz. A legtöbb kriptotoken spekulatív, használati vagy irányítási token, világos valós értékkel.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"A Bitcoin szilárdan megállta a támadásokat, és túlélt minden válságot, tilalmat és kritikát. A legtöbb kriptoprojekt összeomlik szabályozási, technikai vagy piaci nyomás alatt.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"A Bitcoinnak nincs vezérigazgatója, vállalata vagy egyetlen ponton elbukási lehetősége. A legtöbb kriptoprojekt kockázatitőke-befektetőktől, azonosított vezető csapatoktól vagy egyetlen vállalat létezésétől függ.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és a <span class=\"asset\">képzőművészet</span> között",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Minden Bitcoin egyenértékű és helyettesíthető. Minden műalkotás egyedi — a származás, a történelem, az állapot és a hitelesség eltérő, ami nagyon megnehezíti a közvetlen összehasonlítást.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"A Bitcoint globális piacon, 24/7 lehet eladni, és mindenki számára elérhető. A művészet aukciósházakat, magánkereskedőket vagy szakosított galériákat igényel, és az eladás hónapokig is eltarthat.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"A Bitcoin vétele vagy eladása kevesebb mint 1 % díjba kerül, gyakran sokkal kevesebbe. A művészeti eladások 30-40 %-os díjakat halmoznak fel a vásárlókra aukciós jutalék, biztosítás, szállítás és hitelesítési költségek formájában.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"A Bitcoin 100 millió satoshira osztható, és kiváló bármilyen méretű tranzakcióhoz. Nem birtokolhatod egy festmény részét vagy egy szobor sarkát partnerkockázat nélkül.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"A Bitcoin tulajdonjogát és hitelességét bárki kriptográfiailag ellenőrizheti a blockchainen. A művészet hitelesítése drága és lassú, és a hamisítók rendszeresen becsapják a piacot — egy műalkotás értéke egy éjszaka alatt eltűnhet.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"A jól tárolt Bitcoin túléli az árvizeket, tüzeket, földrengéseket és lopásokat. A művészet sebezhető bármely fizikai katasztrófa ellen, és a biztosítás ritkán fed le mindent.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Bitcoint bárki vásárolhat, akinek van internetkapcsolata és valamennyi pénze. A műgyűjtés a gyakorlatban gazdag gyűjtőkre korlátozódik, akiknek hozzáférésük van aukciókhoz és szakértői tudásuk van.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és az <span class=\"asset\">arany</span> között",
	"bitcoin-vs-gold::point_1_summary_1":
		"A Bitcoint azonnal el lehet küldeni az interneten alacsony díjakkal. Az aranyat fizikailag kell szállítani a tulajdonjogcseréhez.",
	"bitcoin-vs-gold::point_2_summary_1":
		"A Bitcoin lényegéből adódóan digitális vagyon, amelyet az interneten átküldhetsz. Az online arany csak digitális kötelezettség — csak a letétkezelő ígérete van a kezedben, nem a fém.",
	"bitcoin-vs-gold::point_3_summary_1":
		"A Bitcoin felső határa 21 millió BTC. Az aranykínálat <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">évente körülbelül 1,6 %-kal nő</a>, és csökkenti a részesedésedet — kevesebb mint a fiat",
	"bitcoin-vs-gold::point_3_summary_2": "infláció",
	"bitcoin-vs-gold::point_3_summary_3": ", de még mindig infláció.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Amikor az arany ára emelkedik, több aranyat bányásznak ki, és az ár újra esik. A Bitcoin kínálata rugalmatlan — bármennyit is emelkedik az ár, mindig csak 21 millió lesz.",
	"bitcoin-vs-gold::point_5_summary_1":
		"A Bitcoin-hálózatot több ezer független csomópont kezeli. A fizikai arany nagy része néhány nagy páncéltermében van tárolva.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Bárki ellenőrizheti a Bitcoin hitelességét egy teljes csomópont futtatásával — ez csak egy alkalmazás. A fizikai arany ellenőrzéséhez meg kell olvasztani; lehet, hogy volfrám van benne.",
	"bitcoin-vs-gold::point_7_summary_1":
		"A Bitcoin 100 millió satoshira osztható, és kiváló bármilyen méretű vásárláshoz. Az aranyat nem lehet könnyen felosztani kis tranzakciókhoz.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és az <span class=\"asset\">ingatlan</span> között",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"A Bitcoin globálisan, azonnal mozog. Az ingatlan egy adott helyhez kötött, és gazdasági, politikai és környezeti kockázatoknak van kitéve.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"A Bitcoin 100 millió satoshira osztható. Az ingatlant nem lehet részben eladni — nem adhatod el a konyhát vagy nem vásárolhatsz egy fél hálószobát.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"A Bitcoin egy decentralizált hálózaton fut, amelyet egyetlen kormány sem tud irányítani. Az ingatlan szigorúan szabályozott — vonatkoznak rá az övezeti előírások, lakbérszabályozás, kisajátítás és lefoglalás.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"A Bitcoinnak nincs szüksége karbantartásra. Az ingatlan javításokat, felújításokat, biztosítást, ingatlankezelést és bérlőkkel kapcsolatos problémákat igényel.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"A Bitcoinra nincs visszamenőleges adó — a tőkenyereség-adót csak eladáskor kell megfizetni. Az ingatlan éves vagyonadót igényel, függetlenül a jövedelemtől.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"A jól tárolt Bitcoin túléli a tüzet, árvizeket és földrengéseket. Az ingatlan sebezhető bármely katasztrófa ellen, és a biztosítás ritkán fed le mindent.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Minden Bitcoin egyenértékű és helyettesíthető. Minden ingatlan egyedi, ami megnehezíti az árazást és az összehasonlítást.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"A Bitcoint 24/7 globálisan adják mindenkinek, akinek van internetkapcsolata. Az ingatlaneladás helyi vásárlókra korlátozódik, és a lezárás hónapokig is eltarthat.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"A Bitcoin közvetlen tulajdonjogot ad mindenkinek. Ha az ingatlant elsődleges otthon helyett befektetésként vásárolják, az emeli a lakásárakat, csökkenti a megfizethetőséget, és lakhatási válságot teremt.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és a <span class=\"asset\">részvények</span> között",
	"bitcoin-vs-stocks::point_1_summary_1":
		"A Bitcoin közvetlen vagyon, amelyet teljes egészében birtoklasz. A részvény egy vállalat egy darabja — értéke a vezetéstől, jövedelmezőségtől és olyan döntésektől függ, amelyeket nem te irányítasz.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"A Bitcoin felső határa 21 millió BTC. A vállalatok bármikor új részvényeket bocsáthatnak ki, és felhígíthatják a meglévő tulajdonosokat — ahogy a fiat valuta is felhígítja a készpénzt",
	"bitcoin-vs-stocks::point_2_summary_2": "infláción",
	"bitcoin-vs-stocks::point_2_summary_3":
		" keresztül. A Bitcoinnal a részesedésed soha nem csökken.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"A Bitcoinnak nincs vezérigazgatója vagy egyetlen ponton elbukási lehetősége. A részvények erősen függnek a vezetéstől — egy rossz döntés vagy egy kulcsszemély távozása összetörheti az árat.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"A Bitcoin ára globális nyílt piacokról származik. A részvények értékelése olyan mutatókra támaszkodik, mint a P/E, amelyek elrejthetik a túlértékelt részvényeket.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"A Bitcoint 24/7 globálisan adják. A tőzsdék csak munkanapokon és meghatározott órákban vannak nyitva.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"A Bitcoinnal áttérhetsz ",
	"bitcoin-vs-stocks::point_6_summary_2": "saját megőrzésre",
	"bitcoin-vs-stocks::point_6_summary_3":
		" egy egyszerű alkalmazással — közvetítők nélkül. A részvényeket brókerek tartják, és partnerkockázatnak vagy kitéve, ha csődbe mennek.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"A Bitcoin fix kínálata megbízható védelmet nyújt az infláció ellen. Néhány részvény túlszárnyalja az inflációt, mások nem — nincs garancia.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"A különbség a <span class=\"orange\">Bitcoin</span> és a <span class=\"asset\">Visa</span> között",
	"bitcoin-vs-visa::point_1_summary_1":
		"A Bitcoin egy nyílt hálózat, amelyhez bárki engedély nélkül csatlakozhat. A Visa egy zárt rendszer, amelyet pénzügyi intézmények irányítanak, akik megtagadhatják a hozzáférést — különösen azoknak, akiknek nincs bankszámlájuk vagy korlátozott a hozzáférésük a bankokhoz.",
	"bitcoin-vs-visa::point_2_summary_1":
		"A Bitcoin-tranzakcióknak nincsenek kereskedői díjaik. A Visa körülbelül 3 %-ot számít fel a kereskedőknek tranzakciónként — a vállalkozásod pénzt takaríthat meg azzal, hogy",
	"bitcoin-vs-visa::point_2_summary_2": "elfogadja a Bitcoin-fizetéseket",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Minden Bitcoin-tranzakció egy nyilvános blockchainen van, és ellenőrizhető. A Visa zárt, exkluzív rendszert üzemeltet, amelyet az ügyfelek nem auditálhatnak önállóan.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Egyetlen központi hatóság sem fagyaszthatja be a Bitcoint. A Visa bármikor befagyaszthatja a számlákat, blokkolhatja a tranzakciókat vagy megtagadhatja a szolgáltatást.",
	"bitcoin-vs-visa::point_5_summary_1":
		"A Bitcoin végleges teljesítés — csak azt költöd el, amid van. A hitelkártyák adósságot teremtenek, évente 25 % feletti kamattal.",
	"bitcoin-vs-visa::point_6_summary_1": "A Bitcoin lehetővé teszi a ",
	"bitcoin-vs-visa::point_6_summary_2": "saját megőrzést",
	"bitcoin-vs-visa::point_6_summary_3":
		" bankok vagy fizetésszolgáltatók nélkül. A hitelkártyákhoz mindig közvetítők kellenek.",
	"bitcoin-vs-visa::point_7_summary_1":
		"A Bitcoin globálisan 24/7 működik nyitvatartási idő nélkül. A Visának nyitvatartási ideje, karbantartási ablakai és földrajzi határai vannak, amelyek blokkolhatják a tranzakciókat.",
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
		`translate-rest-part1 (hu): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
