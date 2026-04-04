/**
 * Creates Slovak (sk) translation files for all bitcoin-vs-* comparison pages
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sk';
const today = '2026-04-04';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

writeFile(`bitcoin-vs-gold_${lang}.json`, {
	"bitcoin_vs_gold": "Bitcoin vs Zlato",
	"gold_header": "ROZDIEL MEDZI", "gold_header_2": "BITCOINOM", "gold_header_3": "A", "gold_header_4": "ZLATOM",
	"gold_intro_1": "Zlato sa ako peniaze používa tisíce rokov a mnohí ho považujú za finančný bezpečný prístav.",
	"gold_intro_2": "Bitcoin sú digitálne peniaze vytvorené v roku 2009 a mnohí ho tiež považujú za finančný bezpečný prístav.",
	"gold_intro_3": "Ako sa ale fyzický kov ako zlato líši od digitálnych peňazí ako Bitcoin? Pozrime sa na rozdiely medzi dvoma formami peňazí: Bitcoinom a Zlatom.",
	"gold": "ZLATO",
	"gold_point_1": "Musí byť fyzicky odoslané", "gold_point_2": "Digitálne dlžobné úpisy", "gold_point_3": "Ponuka sa každý rok zvyšuje", "gold_point_4": "Elastická ponuka", "gold_point_5": "Fyzicky centralizované", "gold_point_6": "Ťažko overiteľné", "gold_point_7": "Ťažko deliteľné",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Možno odoslať cez internet", "bitcoin_point_2": "Digitálne natívne", "bitcoin_point_3": "Pevná ponuka 21M BTC", "bitcoin_point_4": "Neelastická ponuka", "bitcoin_point_5": "Decentralizovaný", "bitcoin_point_6": "Ľahko overiteľný", "bitcoin_point_7": "Ľahko deliteľný",
	"point_1_summary_1": "Pretože je Bitcoin digitálny, môže ho ktokoľvek s pripojením na internet odoslať takmer okamžite za veľmi nízke poplatky. Pretože je zlato fyzické, nemožno ho prenášať cez internet a pre prevod vlastníctva musí byť fyzicky odoslané.",
	"point_2_summary_1": "Bitcoin je digitálne natívne aktívum, čo znamená, že cez internet môžete previesť plné vlastníctvo. Niektoré spoločnosti ponúkajú možnosť kúpiť zlato online bez prijatia skutočného fyzického zlata, namiesto toho dôverujete spoločnosti, že zlato drží za vás. To je skôr ako digitálny dlžobný úpis, pretože vlastníte iba prísľub od spoločnosti namiesto skutočného aktíva.",
	"point_3_summary_1": "Bitcoin má pevný strop 21 miliónov BTC, ktoré kedy budú existovať.",
	"point_3_summary_2": "Nová ponuka zlata sa každý rok ťaží zo zeme, čo má za následok infláciu celkovej ponuky. Odhaduje sa, že celková ponuka zlata rastie približne o 1,6 % ročne, čo znamená, že váš podiel koláča sa každý rok zmenší o 1,6 %.",
	"point_3_summary_3": "To je menej ako fiat inflácia, ale stále je to inflácia.",
	"point_3_summary_4": "S Bitcoinom sa váš podiel koláča nikdy nezmenší.",
	"point_4_summary_1": "Zlato má elastickú ponuku, čo znamená, že s rastúcou cenou zlata je väčšia motivácia ťažiť viac zlata. To často vytvára tlak na pokles ceny zlata, keď sa spustia nové bane.",
	"point_4_summary_2": "U Bitcoinu, bez ohľadu na to, ako vysoko cena stúpne, nemôžete vytvoriť viac ako 21M Bitcoinov.",
	"point_4_summary_3": "Bitcoin je prvé aktívum s neelastickým vzťahom medzi cenou a ponukou.",
	"point_5_summary_1": "Bitcoinová sieť je decentralizovaná.", "point_5_summary_2": "Desaťtisíce nezávislých uzlov overujú pravidlá siete.", "point_5_summary_3": "Používatelia si môžu vziať Bitcoin do vlastnej správy stiahnutím aplikácie.",
	"point_5_summary_4": "Aj keď je možné mať fyzické zlato vo vlastnej správe, väčšina fyzického zlata je uložená v obrovských trezoroch vlastnených správcami, čo ho robí fyzicky centralizovaným.",
	"point_6_summary_1": "U Bitcoinu je neuveriteľne jednoduché overiť, že máte skutočný Bitcoin, tým, že si vezmete svoje mince do vlastnej správy a spustíte plný uzol.",
	"point_6_summary_2": "Vlastná správa je tak jednoduchá ako stiahnutie aplikácie.",
	"point_6_summary_3": "Plný uzol je jednoduchý softvér, ktorý zabezpečuje dodržiavanie pravidiel siete a overuje, že máte skutočný Bitcoin.",
	"point_6_summary_4": "Fyzické zlato môže byť veľmi ťažké overiť ako autentické. Aj keď overíte, že vonkajšia časť fyzického zlata je skutočná, vnútro vašej zlatej tehličky môže byť volfrám alebo iný kov. Jediný spôsob, ako skutočne overiť, že vlastníte fyzické zlato, o ktorom si myslíte, že ho vlastníte, je roztaviť ho.",
	"point_7_summary_1": "Rovnako ako je 100 centov v 1 dolári, je 100 000 000 satoshi v 1 Bitcoine. To umožňuje použiť Bitcoin na nákupy všetkých veľkostí, vrátane mikrotransakcií v ráde niekoľkých centov.",
	"point_7_summary_2": "To robí z Bitcoinu dobrý nástroj pre podnikanie.",
	"point_7_summary_3": "Pretože je fyzické zlato ťažko deliteľné, nemožno ho ľahko použiť na nákupy, najmä malé nákupy."
});

writeFile(`bitcoin-vs-banks_${lang}.json`, {
	"bitcoin_vs_banks": "Bitcoin vs Banky",
	"banks_header": "ROZDIEL MEDZI", "banks_header_2": "BITCOINOM", "banks_header_3": "A", "banks_header_4": "BANKAMI",
	"banks_intro_1": "Banky kontrolujú peniaze po stáročia a fungujú ako sprostredkovatelia finančných transakcií a strážcovia menového systému.",
	"banks_intro_2": "Bitcoin je peer-to-peer systém digitálnych peňazí, ktorý funguje bez bánk alebo centrálnych autorít.",
	"banks_intro_3": "Ako sa ale Bitcoinová sieť líši od tradičného bankového systému? Poďme preskúmať kľúčové rozdiely medzi týmito dvoma zásadne odlišnými prístupmi k peniazom.",
	"banks": "BANKY",
	"banks_point_1": "Vyžadujú povolenie", "banks_point_2": "Obmedzené hodiny", "banks_point_3": "Súkromné, nepriehľadné operácie", "banks_point_4": "Kontrolujú vaše peniaze", "banks_point_5": "Premenlivé poplatky a pokuty", "banks_point_6": "Umožňujú prečerpanie s poplatkami", "banks_point_7": "Môžu blokovať transakcie",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Prístup bez povolenia", "bitcoin_point_2": "Vždy dostupný 24/7", "bitcoin_point_3": "Transparentný a otvorený", "bitcoin_point_4": "Vy kontrolujete svoje peniaze", "bitcoin_point_5": "Predvídateľné, nízke poplatky", "bitcoin_point_6": "Nemožno prečerpať", "bitcoin_point_7": "Odolný voči cenzúre",
	"point_1_summary_1": "Bitcoin je bez povolenia, čo znamená, že ho môže používať ktokoľvek s prístupom na internet, bez žiadania o súhlas akejkoľvek autority.",
	"point_1_summary_2": "Bitcoin funguje bez strážcov",
	"point_1_summary_3": "— nikto vám nemôže odmietnuť prístup. Banky však môžu odmietnuť otvoriť účty, zmraziť existujúce účty alebo odmietnuť služby na základe svojich pravidiel alebo vládnych nariadení.",
	"point_2_summary_1": "Bitcoinová sieť funguje 24 hodín denne, 7 dní v týždni, 365 dní v roku bez výpadkov na údržbu alebo sviatkov. Banky majú obmedzené prevádzkové hodiny, cez víkendy a sviatky sú zatvorené a často majú obdobia údržby systému, kedy služby nie sú dostupné.",
	"point_3_summary_1": "Všetky bitcoinové transakcie sú zaznamenané na verejnom blockchaine, ktorý môže ktokoľvek overiť a auditovať.",
	"point_3_summary_2": "Banky fungujú so súkromnými účtovnými knihami a nepriehľadnými internými procesmi, ktoré zákazníci nemôžu nezávisle overiť.",
	"point_4_summary_1": "S Bitcoinom si môžete držať vlastné súkromné kľúče a mať plnú kontrolu nad svojimi peniazmi.",
	"point_4_summary_2": "Zistite viac o bitcoinových peňaženkách",
	"point_4_summary_3": "aby ste porozumeli vlastnej správe. Banky držia vaše peniaze na svojich účtoch a môžu zmraziť, obmedziť alebo zakázať prístup k vašim prostriedkom kedykoľvek.",
	"point_5_summary_1": "Bitcoinové transakčné poplatky sú transparentné, predvídateľné a zvyčajne veľmi nízke. Banky majú často skryté poplatky, mesačné poplatky za účet, poplatky za prečerpanie, poplatky za prevod, poplatky za bankomat a ďalšie pokuty, ktoré sa môžu v priebehu času výrazne sčítať.",
	"point_6_summary_1": "Bitcoin vám bráni míňať peniaze, ktoré nemáte — môžete minúť iba Bitcoin, ktorý skutočne vlastníte. Banky umožňujú prečerpanie (minutie viac, než je zostatok na vašom účte) a potom si účtujú značné poplatky za túto 'službu', čo často vedie ku kaskádovým pokutám.",
	"point_7_summary_1": "Bitcoinové transakcie sú odolné voči cenzúre — akonáhle sú odoslané do siete, nemôžu byť zastavené alebo zvrátené žiadnou centrálnou autoritou. Banky môžu blokovať, zmraziť, zrušiť alebo obmedziť transakcie na základe svojich pravidiel, vládnych príkazov alebo algoritmov podozrivej aktivity."
});

writeFile(`bitcoin-vs-bonds_${lang}.json`, {
	"bitcoin_vs_bonds": "Bitcoin vs Dlhopisy",
	"bonds_header": "ROZDIEL MEDZI", "bonds_header_2": "BITCOINOM", "bonds_header_3": "A", "bonds_header_4": "DLHOPISMI",
	"bonds_intro_1": "Štátne dlhopisy sú často označované ako 'bezrizikové' investície a tradičné financie ich považujú za najbezpečnejšie miesto na uchovávanie bohatstva.",
	"bonds_intro_2": "Bitcoin sú digitálne peniaze, ktoré fungujú nezávisle od akejkoľvek vlády alebo centrálnej autority.",
	"bonds_intro_3": "Sú ale dlhopisy skutočne bezrizikové? A ako sa porovnávajú s Bitcoinom ako uchovávateľom hodnoty? Pozrime sa na kľúčové rozdiely medzi Bitcoinom a štátnymi dlhopismi.",
	"bonds": "DLHOPISY",
	"bonds_point_1": "Skryté riziká", "bonds_point_2": "Strata hodnoty infláciou", "bonds_point_3": "Môžu sa stať nelikvidnými", "bonds_point_4": "Neúspešné aukcie", "bonds_point_5": "Pevný výnos", "bonds_point_6": "Vyžadujú sprostredkovateľov", "bonds_point_7": "Závislosť od vlády",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Žiadne protipartnerské riziko", "bitcoin_point_2": "Pevná ponuka", "bitcoin_point_3": "Vždy likvidný", "bitcoin_point_4": "Žiadne riziko aukcie", "bitcoin_point_5": "Potenciál zhodnotenia", "bitcoin_point_6": "Možnosť vlastnej správy", "bitcoin_point_7": "Žiadna závislosť od vlády",
	"point_1_summary_1": "Dlhopisy sú 'bezrizikové' iba v nominálnych dolárových hodnotách, čo znamená, že dostanete svoje doláre späť, ak držíte do splatnosti. To však ignoruje inflačné riziko, riziko úrokových sadzieb a možnosť, že tieto doláre budú pri vrátení mať oveľa menšiu hodnotu.",
	"point_1_summary_2": "Bitcoin má jasné, transparentné riziká (volatilitu), ale žiadne skryté protipartnerské riziko — buď vlastníte svoj Bitcoin, alebo nie.",
	"point_2_summary_1": "Keď je inflácia vyššia ako výnos dlhopisov, držitelia dlhopisov každý rok strácajú kúpnu silu. 2 % výnos dlhopisu pri 4 % inflácii znamená, že strácate 2 % reálnej hodnoty ročne.",
	"point_2_summary_2": "Zistite viac o inflácii.",
	"point_2_summary_3": "Pevná ponuka Bitcoinu 21 miliónov mincí znamená, že nemôže byť znehodnotený infláciou, ale dlhopisy môžu byť znehodnotené tlačou peňazí.",
	"point_3_summary_1": "Počas finančných kríz môžu trhy s dlhopismi zamrznúť a stať sa nelikvidnými. Banky ako Silicon Valley Bank uviazli s držaním dlhopisov, ktoré výrazne stratili hodnotu pri raste úrokových sadzieb, čo prispelo k ich kolapsu.",
	"point_3_summary_2": "Zistite, ako Silicon Valley Bank skrachovala a prečo je Bitcoin iný.",
	"point_3_summary_3": "Bitcoin sa obchoduje 24/7 globálne a nikdy nezažil krízu likvidity — vždy môžete nájsť kupca alebo predajcu.",
	"point_4_summary_1": "Aukcie štátnych dlhopisov môžu zlyhať, keď nie je dostatok kupcov pre vládny dlh. Stalo sa to niekoľkokrát v posledných rokoch, vrátane slabého dopytu po 10-ročných dlhopisoch v roku 2022 a 30-ročných dlhopisoch v roku 2023.",
	"point_4_summary_2": "Zistite viac o týchto neúspešných aukciách štátnych dlhopisov.",
	"point_4_summary_3": "Cena Bitcoinu sa určuje prostredníctvom nepretržitých globálnych trhov bez centrálnej aukcie, ktorá by mohla zlyhať.",
	"point_5_summary_1": "Výnosy dlhopisov sú fixné v okamihu nákupu. Aj keď ekonomika rýchlo rastie alebo sa mena výrazne znehodnotí, váš výnos zostáva rovnaký.",
	"point_5_summary_2": "Bitcoin má potenciál výrazného zhodnotenia s rastúcim prijatím a pevnou ponukou, ktorá sa stretáva s rastúcim dopytom.",
	"point_6_summary_1": "Väčšina ľudí drží dlhopisy prostredníctvom sprostredkovateľov, ako sú banky, makléri alebo fondy, čím vzniká protipartnerské riziko. Dlhopisy v skutočnosti priamo nevlastníte.",
	"point_6_summary_2": "U Bitcoinu si môžete vziať priame vlastníctvo prostredníctvom vlastnej správy, čím úplne eliminujete protipartnerské riziko.",
	"point_7_summary_1": "Dlhopisy úplne závisia od schopnosti a ochoty vlády platiť. Ak vláda čelí fiškálnej kríze, zlyhaniu alebo sa rozhodne infláciou odmazať dlh, držitelia dlhopisov trpia.",
	"point_7_summary_2": "Bitcoin funguje nezávisle od akejkoľvek vlády a nemôže byť kontrolovaný, nafukovaný ani znehodnotený politickými autoritami."
});

writeFile(`bitcoin-vs-cash_${lang}.json`, {
	"bitcoin_vs_cash": "Bitcoin vs Hotovosť",
	"cash_header": "ROZDIEL MEDZI", "cash_header_2": "BITCOINOM", "cash_header_3": "A", "cash_header_4": "HOTOVOSŤOU",
	"cash_intro_1": "Hotovosť sa ako peniaze používa po stáročia a zostáva najbežnejšou formou fyzických peňazí na celom svete.",
	"cash_intro_2": "Bitcoin sú digitálne peniaze vytvorené v roku 2009, ktoré fungujú nezávisle od akejkoľvek vlády alebo centrálnej autority.",
	"cash_intro_3": "Ako sa ale fyzická hotovosť líši od digitálnych peňazí ako Bitcoin? Pozrime sa na kľúčové rozdiely medzi týmito dvoma formami peňazí: Bitcoinom a Hotovosťou.",
	"cash": "HOTOVOSŤ",
	"cash_point_1": "Vyžaduje fyzickú prítomnosť", "cash_point_2": "Obmedzená hranicami", "cash_point_3": "Môže byť cez noc zneplatnená", "cash_point_4": "Možno padělať", "cash_point_5": "Kontrolovaná vládou", "cash_point_6": "Riziká fyzického uchovávania", "cash_point_7": "Obmedzená deliteľnosť",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Možno odoslať cez internet", "bitcoin_point_2": "Funguje globálne", "bitcoin_point_3": "Nemožno zneplatniť", "bitcoin_point_4": "Nemožno padělať", "bitcoin_point_5": "Decentralizovaná sieť", "bitcoin_point_6": "Digitálna vlastná správa", "bitcoin_point_7": "Ľahko deliteľný",
	"point_1_summary_1": "Bitcoin možno odoslať kamkoľvek na svete okamžite cez internet, zatiaľ čo hotovosť vyžaduje fyzickú prítomnosť alebo dôveryhodných sprostredkovateľov. Hotovosť nemôžete poslať e-mailom, ale Bitcoin môžete poslať komukoľvek s pripojením na internet v priebehu minút.",
	"point_2_summary_1": "Bitcoin funguje všade na svete rovnako — v Bitcoinovej sieti neexistujú žiadne hranice. Hotovosť je obmedzená geografiou, výmennými kurzami a miestnym prijatím. Skúste použiť americké doláre na vidieku v Thajsku alebo japonské jeny na vidieku v Mexiku.",
	"point_3_summary_1": "Vlády môžu a zneplatňujú hotovosť cez noc prostredníctvom politík demonetizácie, ako to India urobila v roku 2016, keď zakázala určité bankovky.",
	"point_3_summary_2": "Aj bez zákazu určitých bankoviek vlády neustále znehodnocujú hotovosť prostredníctvom inflácie.",
	"point_3_summary_3": "Bitcoin nemôže byť zneplatnený žiadnou vládou ani autoritou — existuje na globálnej, decentralizovanej sieti, ktorú žiadny subjekt nekontroluje.",
	"point_4_summary_1": "Hotovosť možno padělať a detekcia falošných bankoviek je bez špeciálneho vybavenia často ťažká. Aj s bezpečnostnými prvkami padělané peniaze stále kolujú. Bitcoin používa kryptografický dôkaz, ktorý robí padělanie matematicky nemožným.",
	"point_5_summary_1": "Hotovosť je vydávaná a kontrolovaná vládami, ktoré môžu tlačiť viac podľa ľubovôle, meniť dizajn alebo vyhlásiť určité bankovky za neplatné. Bitcoin funguje na decentralizovanej sieti, kde žiadna jednotlivá autorita nemá kontrolu nad ponukou peňazí ani pravidlami.",
	"point_6_summary_1": "Hotovosť musí byť uchovávaná fyzicky, čo ju robí zraniteľnou voči krádeži, strate, požiaru alebo zabaveniu. Veľké čiastky vyžadujú nákladné bezpečnostné opatrenia.",
	"point_6_summary_2": "Ale Bitcoin možno bezpečne uchovávať vo vlastnej správe",
	"point_6_summary_3": "pomocou aplikácie na smartfóne alebo špecializovanej peňaženky, čo vám dáva plnú kontrolu nad vašimi peniazmi bez rizík fyzického uchovávania.",
	"point_7_summary_1": "Hotovosť má minimálne nominálne hodnoty — penny nemožno rozdeliť na menšie diely. Bitcoin možno rozdeliť na 100 miliónov menších jednotiek nazývaných satoshi, čo umožňuje mikroplatby a presné transakcie ľubovoľnej čiastky."
});

writeFile(`bitcoin-vs-cbdc_${lang}.json`, {
	"bitcoin_vs_cbdcs": "Bitcoin vs CBDC",
	"cbdc_header": "AKO BY MALI", "cbdc_header_2": "DIGITÁLNE PENIAZE", "cbdc_header_3": "VYZERAŤ?",
	"cbdc_intro_1": "Náš svet je čoraz viac digitálny, a rovnako aj naše peniaze.",
	"cbdc_intro_2": "To vyvoláva otázku: ako chceme, aby naše digitálne peniaze vyzerali?",
	"cbdc_intro_3": "Mnoho krajín skúma vydanie digitálnej meny centrálnej banky (CBDC), čo je plne digitálna forma našej existujúcej štátnej meny.",
	"cbdc_intro_4": "Pozrime sa na rozdiel medzi dvoma formami digitálnych peňazí: Bitcoinom a digitálnymi menami centrálnych bánk (CBDC).",
	"cbdc": "CBDC",
	"cbdc_point_1": "Vyžaduje povolenie na útratu", "cbdc_point_2": "Vaše peniaze môžu expirovať", "cbdc_point_3": "Žiadny limit celkovej ponuky", "cbdc_point_4": "Spojené s vládnym ID", "cbdc_point_5": "Centralizované", "cbdc_point_6": "Používatelia nemôžu prevádzkovať uzly", "cbdc_point_7": "Ľahko zmraziteľné", "cbdc_point_8": "Musíte dôverovať správcom", "cbdc_point_9": "Meniaca sa menová politika", "cbdc_point_10": "Nezabezpečené",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Míňajte bez povolenia", "bitcoin_point_2": "Vaše peniaze nikdy neexpirujú", "bitcoin_point_3": "Pevná ponuka 21M BTC", "bitcoin_point_4": "Pseudonymný", "bitcoin_point_5": "Decentralizovaný", "bitcoin_point_6": "Používatelia môžu prevádzkovať uzly", "bitcoin_point_7": "Nemožno zmraziť", "bitcoin_point_8": "Možnosť vlastnej správy", "bitcoin_point_9": "Predvídateľná menová politika", "bitcoin_point_10": "Zabezpečený",
	"point_1_summary_1": "Bitcoin je navrhnutý tak, aby vám dal plnú kontrolu nad vašimi peniazmi.", "point_1_summary_2": "Nikto vám nemôže zabrániť v transakciách s Bitcoinom.", "point_1_summary_3": "CBDC sú navrhnuté tak, aby dali vládam a centrálnym bankám plnú kontrolu nad vašimi peniazmi.", "point_1_summary_4": "CBDC obmedzujú vaše súkromie a slobodu.",
	"point_2_summary_1": "Bitcoin nikdy neexpiruje a nemá mesačné poplatky.", "point_2_summary_2": "CBDC môžu byť naprogramované tak, aby expirovali.", "point_2_summary_3": "Keď CBDC expirujú, bránia vám sporiť na budúcnosť.",
	"point_3_summary_1": "Bitcoin má pevný strop 21 miliónov BTC, ktoré kedy budú existovať.", "point_3_summary_2": "CBDC, podobne ako štátne meny, ktoré dnes používame, nemajú žiadny strop celkovej ponuky. Tento chýbajúci strop umožňuje vláde rozširovať peňažné zásoby.", "point_3_summary_3": "To spôsobuje infláciu.",
	"point_4_summary_1": "Bitcoinové adresy sú pseudonymné, čo znamená, že nie sú spojené s vaším skutočným menom alebo identitou. CBDC sú priamo spojené s vaším skutočným menom a identitou, čo umožňuje masívny finančný dohľad a cenzúru.",
	"point_5_summary_1": "Bitcoinová sieť je decentralizovaná.", "point_5_summary_2": "Desaťtisíce nezávislých uzlov overujú pravidlá siete.", "point_5_summary_3": "CBDC sú centralizované v rukách vlády a centrálnych bánk, ktoré majú úplnú kontrolu nad sieťou CBDC.",
	"point_6_summary_1": "Bitcoin umožňuje komukoľvek prevádzkovať uzol, ktorý overuje, že pravidlá siete sú dodržiavané. CBDC neumožňujú nikomu prevádzkovať uzly a spoliehajú sa na dôveru vo vládu a centrálne banky.",
	"point_7_summary_1": "Bitcoin je navrhnutý tak, aby znemožnil ostatným zmraziť vaše peniaze. CBDC sú navrhnuté tak, aby vládam a centrálnym bankám uľahčili zmrazenie vašich peňazí.",
	"point_8_summary_1": "Bitcoin je navrhnutý tak, aby vám dal plnú kontrolu nad vašimi peniazmi.", "point_8_summary_2": "Len sa uistite, že si ho vyberiete do peňaženky s vlastnou správou.", "point_8_summary_3": "Keď máte bitcoin vo vlastnej správe, nikto vám nemôže zabrániť v prístupe k vašim peniazom.", "point_8_summary_4": "CBDC vyžadujú, aby ste dôverovali správcom, ako je banka alebo vláda, že za vás drží vaše peniaze.",
	"point_9_summary_1": "Bitcoin má predvídateľnú menovú politiku, ktorá je pevne stanovená v kóde a nemožno ju zmeniť. CBDC, rovnako ako naše dnešné meny, majú menovú politiku, ktorú možno ľahko zmeniť.", "point_9_summary_2": "To má za následok infláciu, keď politici tlačia príliš veľa peňazí.",
	"point_10_summary_1": "Bitcoin je najbezpečnejšia výpočtová sieť, ktorá kedy existovala, a nikdy nebola hacknutá. CBDC spoliehajú na vlády a banky, aby zabezpečili sieť, ktoré boli v histórii hacknuté nespočetnekrát."
});

writeFile(`bitcoin-vs-crypto_${lang}.json`, {
	"bitcoin_vs_crypto": "Bitcoin vs Krypto",
	"crypto_header": "ROZDIEL MEDZI", "crypto_header_2": "BITCOINOM", "crypto_header_3": "A", "crypto_header_4": "KRYPTOM",
	"crypto_intro_1": "Priestor kryptomien explodoval tisícami rôznych digitálnych tokenov a projektov.",
	"crypto_intro_2": "Zatiaľ čo Bitcoin bol prvý a zostáva najznámejšou kryptomenou, je zásadne odlišný od zvyšku kryptopriemyslu.",
	"crypto_intro_3": "Pozrime sa na kľúčové rozdiely medzi Bitcoinom a širším ekosystémom kryptomien.",
	"crypto": "KRYPTO",
	"crypto_point_1": "Časté zmeny a forky", "crypto_point_2": "Centralizovaná kontrola", "crypto_point_3": "Neobmedzená alebo inflačná ponuka", "crypto_point_4": "Zložité protokoly", "crypto_point_5": "Experimentálny konsenzus", "crypto_point_6": "Špekulatívne utility tokeny", "crypto_point_7": "Volatilné a krehké", "crypto_point_8": "Korporátna podpora",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Nemenný protokol", "bitcoin_point_2": "Skutočne decentralizovaný", "bitcoin_point_3": "Pevná ponuka 21M BTC", "bitcoin_point_4": "Jednoduchý a prístupný", "bitcoin_point_5": "Osvedčený Proof of Work", "bitcoin_point_6": "Čisté digitálne peniaze", "bitcoin_point_7": "Antifragilný", "bitcoin_point_8": "Žiadny subjekt ho nekontroluje",
	"point_1_summary_1": "Protokol Bitcoinu zostáva od roku 2009 v podstate nezmenený, čo poskytuje predvídateľné pravidlá, ktoré nemožno ľahko upraviť. Väčšina kryptoprojektov často aktualizuje svoje protokoly, mení tokenomiku alebo sa rozdeľuje na nové verzie, čo vytvára neistotu pre používateľov.",
	"point_2_summary_1": "Bitcoin funguje na skutočne decentralizovanej sieti s desaťtisícami nezávislých uzlov po celom svete. Mnoho kryptoprojektov je kontrolovaných nadáciami, spoločnosťami alebo malými skupinami vývojárov, ktorí môžu jednostranne rozhodovať o budúcnosti protokolu.",
	"point_3_summary_1": "Bitcoin má pevný strop 21 miliónov mincí, ktoré kedy budú existovať, čo z neho robí najvzácnejšie digitálne aktívum. Väčšina kryptoprojektov má neobmedzenú ponuku, inflačné mechanizmy alebo možnosť raziť nové tokeny ľubovoľne, čím postupom času riedia hodnotu držiteľov.",
	"point_4_summary_1": "Bitcoin má jeden jednoduchý účel: peer-to-peer digitálne peniaze. Ktokoľvek ho môže pochopiť a používať so základnými znalosťami. Mnoho kryptoprojektov zahŕňa zložité inteligentné kontrakty, DeFi protokoly alebo mechanizmy správy, ktoré vyžadujú technickú odbornosť pre bezpečné použitie.",
	"point_5_summary_1": "Bitcoin používa konsenzus Proof of Work, ktorý je v boji testovaný viac ako 15 rokov bez jediného úspešného útoku na hlavnú sieť. Mnoho kryptoprojektov používa experimentálne konsenzuálne mechanizmy ako Proof of Stake alebo delegované systémy, ktoré zatiaľ nepreukázali svoju dlhodobú bezpečnosť.",
	"point_6_summary_1": "Bitcoin slúži ako digitálne peniaze — uchovávateľ hodnoty a prostriedok výmeny. Väčšina kryptotokenov sú utility tokeny pre špecifické platformy, governance tokeny alebo špekulatívne aktíva s nejasnou hodnotovou ponukou.",
	"point_7_summary_1": "Bitcoin sa stáva silnejším pod útokom a prežil každú krízu, zákaz a kritiku, ktoré naň boli smerované. Väčšina kryptoprojektov je krehká a môže sa zrútiť pod regulačným tlakom, technickými poruchami alebo trhovými poklesmi.",
	"point_8_summary_1": "Bitcoin nemá žiadneho CEO, žiadnu spoločnosť za sebou a žiadny jediný bod zlyhania. Mnoho kryptoprojektov je podporovaných firmami rizikového kapitálu, má identifikovateľné vedenie alebo závisí od konkrétnych spoločností pre svoj pokračujúci prevádzku."
});

writeFile(`bitcoin-vs-fine-art_${lang}.json`, {
	"bitcoin_vs_fine_art": "Bitcoin vs Umenie",
	"fine_art_header": "ROZDIEL MEDZI", "fine_art_header_2": "BITCOINOM", "fine_art_header_3": "A", "fine_art_header_4": "UMENÍM",
	"fine_art_intro_1": "Umenie je po stáročia luxusnou investíciou a bohatí zberatelia ho často považujú za uchovávateľa hodnoty.",
	"fine_art_intro_2": "Bitcoin sú digitálne peniaze, ktoré mnohí tiež považujú za uchovávateľa hodnoty a investíciu.",
	"fine_art_intro_3": "Ako sa ale fyzické umelecké diela líšia od digitálnych peňazí ako Bitcoin? Pozrime sa na rozdiely medzi dvoma formami investícií: Bitcoinom a Umením.",
	"fine_art": "UMENIE",
	"fine_art_point_1": "Každý kus je unikátny", "fine_art_point_2": "Vyžaduje špecializované aukcie", "fine_art_point_3": "Vysoké aukčné poplatky", "fine_art_point_4": "Nemožno rozdeliť", "fine_art_point_5": "Vyžaduje odbornú autentifikáciu", "fine_art_point_6": "Zraniteľné poškodením", "fine_art_point_7": "Iba pre bohatých zberateľov",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Dokonale zameniteľný", "bitcoin_point_2": "Globálny trh 24/7", "bitcoin_point_3": "Nízke transakčné poplatky", "bitcoin_point_4": "Ľahko deliteľný", "bitcoin_point_5": "Kryptograficky overiteľný", "bitcoin_point_6": "Ťažko zničiteľný", "bitcoin_point_7": "Prístupný každému",
	"point_1_summary_1": "Bitcoin je dokonale zameniteľný, čo znamená, že každý bitcoin je identický a vzájomne zameniteľný — jeden bitcoin sa rovná jednému bitcoinu kdekoľvek na svete. Umenie je zo svojej podstaty nezameniteľné, pričom každé dielo je unikátne svojím vytvorením, históriou, stavom a provenienclou, čo robí priame porovnania a ocenenia extrémne ťažkými.",
	"point_2_summary_1": "Bitcoin sa obchoduje na globálnom trhu 24/7, kde ktokoľvek s prístupom na internet môže okamžite kupovať alebo predávať. Umenie vyžaduje špecializované aukčné domy ako Sotheby's alebo Christie's, súkromných dílerov alebo exkluzívne galérie. Predaj môže trvať mesiace a prístup na trh je obmedzený.",
	"point_3_summary_1": "Nákup alebo predaj bitcoinu stojí zvyčajne menej ako 1 % na poplatkoch, často oveľa menej. Predaj umenia zahŕňa značné náklady vrátane prémie kupujúceho (10–25 %), provízie predávajúceho (10–15 %), poistenia, prepravy, skladovania a poplatkov za autentifikáciu. Tieto kombinované náklady môžu ľahko presiahnuť 30–40 % hodnoty diela v jedinej transakcii.",
	"point_4_summary_1": "Bitcoin možno rozdeliť na 100 miliónov menších jednotiek nazývaných satoshi, čo ho robí ideálnym pre transakcie akejkoľvek veľkosti. Umenie nemožno rozdeliť — nemôžete vlastniť zlomok obrazu alebo predať len časť sochy. Táto nedeliteľnosť obmedzuje investičnú flexibilitu.",
	"point_5_summary_1": "Vlastníctvo a autentickosť Bitcoinu možno kryptograficky overiť na blockchaine kýmkoľvek so základnými technickými znalosťami. Umenie vyžaduje nákladnú odbornú autentifikáciu, výskum proveniencie a vedeckú analýzu. Aj napriek odbornému overeniu falzifikáty pravidelne klamú svet umenia. Bitcoin naopak nemožno padělať.",
	"point_6_summary_1": "Bitcoin, ak je správne zálohovaný, nemôže byť zničený povodňami, požiarmi, zemetraseniami, hurikánmi, krádežou ani inými katastrofami. Umenie je zraniteľné voči všetkým formám fyzického zničenia a degradácie.",
	"point_7_summary_1": "Bitcoin môže kupovať a predávať ktokoľvek s prístupom na internet a malou čiastkou peňazí na investovanie. Investície do umenia sú do značnej miery obmedzené na bohatých zberateľov kvôli vysokým minimálnym cenám, exkluzívnemu prístupu na aukcie, požiadavkám na skladovanie, nákladom na poistenie a špecializovaným znalostiam."
});

writeFile(`bitcoin-vs-real-estate_${lang}.json`, {
	"bitcoin_vs_real_estate": "Bitcoin vs Nehnuteľnosti",
	"real_estate_header": "ROZDIEL MEDZI", "real_estate_header_2": "BITCOINOM", "real_estate_header_3": "A", "real_estate_header_4": "NEHNUTEĽNOSŤAMI",
	"real_estate_intro_1": "Nehnuteľnosti sú po desaťročia populárnou investíciou a často sú považované za stabilných uchovávateľov hodnoty.",
	"real_estate_intro_2": "Bitcoin sú digitálne peniaze vytvorené v roku 2009 a mnohí ho tiež považujú za uchovávateľa hodnoty a investíciu.",
	"real_estate_intro_3": "Ako sa ale fyzická nehnuteľnosť líši od digitálnych peňazí ako Bitcoin? Pozrime sa na rozdiely medzi dvoma formami investícií: Bitcoinom a Nehnuteľnosťami.",
	"real_estate": "NEHNUTEĽNOSTI",
	"real_estate_point_1": "Nemožno premiestniť", "real_estate_point_2": "Nemožno ľahko rozdeliť", "real_estate_point_3": "Podliehajú vládnej kontrole", "real_estate_point_4": "Vyžadujú neustálu údržbu", "real_estate_point_5": "Podliehajú dani z nehnuteľností", "real_estate_point_6": "Zraniteľné prírodnými katastrofami", "real_estate_point_7": "Každá nehnuteľnosť je unikátna", "real_estate_point_8": "Obmedzené na miestnych kupcov",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Globálne prenositeľný", "bitcoin_point_2": "Ľahko deliteľný", "bitcoin_point_3": "Odolný voči cenzúre", "bitcoin_point_4": "Nevyžaduje údržbu", "bitcoin_point_5": "Žiadna daň z nehnuteľností", "bitcoin_point_6": "Ťažko zničiteľný", "bitcoin_point_7": "Dokonale zameniteľný", "bitcoin_point_8": "Globálny trh 24/7",
	"point_1_summary_1": "Bitcoin možno presunúť kamkoľvek na svete okamžite cez internet. Nehnuteľnosti sú trvale fixované na konkrétnom mieste a nemožno ich premiestniť, čo ich robí zraniteľnými voči miestnym ekonomickým podmienkam, prírodným katastrofám a politickej nestabilite.",
	"point_2_summary_1": "Bitcoin možno rozdeliť na 100 miliónov menších jednotiek nazývaných satoshi, čo ho robí ideálnym pre transakcie akejkoľvek veľkosti. Nehnuteľnosti nemožno ľahko rozdeliť — nemôžete predať len kuchyňu svojho domu alebo kúpiť polovicu spálne.",
	"point_3_summary_1": "Bitcoin funguje na decentralizovanej sieti, ktorú žiadna vláda nemôže kontrolovať. Nehnuteľnosti podliehajú rozsiahlej vládnej regulácii vrátane regulácie nájomného, moratória na vysťahovanie, územných zákonov a vyvlastnenia.",
	"point_4_summary_1": "Bitcoin nevyžaduje údržbu — existuje ako digitálny kód na sieti. Nehnuteľnosti vyžadujú neustálu starostlivosť vrátane opráv, renovácií, správy nehnuteľností, poistenia a jednania s nájomníkmi.",
	"point_5_summary_1": "Bitcoin nemá žiadne priebežné dane — platíte iba daň z kapitálového zisku pri predaji. Nehnuteľnosti podliehajú každoročnej dani z nehnuteľností, ktorá sa musí platiť bez ohľadu na to, či nehnuteľnosť generuje príjem.",
	"point_6_summary_1": "Bitcoin, ak je správne zálohovaný, nemôže byť zničený povodňami, požiarmi, zemetraseniami, hurikánmi ani inými prírodnými katastrofami. Nehnuteľnosti sú zraniteľné voči všetkým formám fyzického zničenia.",
	"point_7_summary_1": "Každý bitcoin je identický a vzájomne zameniteľný — jeden bitcoin sa rovná jednému bitcoinu kdekoľvek na svete. Každá nehnuteľnosť je unikátna s rôznymi lokalitami, stavmi a charakteristikami, čo sťažuje oceňovanie a porovnávanie.",
	"point_8_summary_1": "Bitcoin môže ktokoľvek kupovať a predávať 24/7 s prístupom na internet kdekoľvek na svete. Predaj nehnuteľností je obmedzený na miestnych kupcov, vyžaduje zdĺhavé procesy s právnikmi a agentmi a môže trvať mesiace.",
	"bitcoin_point_9": "Podporuje individuálne vlastníctvo",
	"real_estate_point_9": "Prispieva k financializácii bývania",
	"point_9_summary_1": "Bitcoin umožňuje priame individuálne vlastníctvo bez sprostredkovateľov a podporuje finančnú suverenitu pre každého. Nákup nehnuteľností ako investícia nad rámec vášho primárneho bývania prispieva k financializácii bývania, kde sa domy stávajú skôr komoditami ako prístreškom. To zvyšuje ceny, znižuje dostupnosť pre rodiny a prispieva ku kríze bývania a bezdomovectva."
});

writeFile(`bitcoin-vs-stocks_${lang}.json`, {
	"bitcoin_vs_stocks": "Bitcoin vs Akcie",
	"stocks_header": "ROZDIEL MEDZI", "stocks_header_2": "BITCOINOM", "stocks_header_3": "A", "stocks_header_4": "AKCIAMI",
	"stocks_intro_1": "Akcie sú po desaťročia populárnou investíciou a predstavujú vlastnícke podiely v spoločnostiach.",
	"stocks_intro_2": "Bitcoin sú digitálne peniaze vytvorené v roku 2009, ktoré fungujú nezávisle od akejkoľvek spoločnosti alebo vlády.",
	"stocks_intro_3": "Ako sa ale vlastníctvo podielov v spoločnosti líši od vlastníctva digitálnych peňazí ako Bitcoin? Pozrime sa na rozdiely medzi dvoma formami investícií: Bitcoinom a Akciami.",
	"stocks": "AKCIE",
	"stocks_point_1": "Podiely v spoločnosti", "stocks_point_2": "Riediteľná ponuka", "stocks_point_3": "Riziko kľúčových osôb", "stocks_point_4": "Ocenenie P/E pomerom", "stocks_point_5": "Iba počas obchodných hodín", "stocks_point_6": "Protipartnerské riziko", "stocks_point_7": "Premenlivé zaistenie proti inflácii",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Priame vlastníctvo", "bitcoin_point_2": "Pevná ponuka 21M BTC", "bitcoin_point_3": "Decentralizovaná sieť", "bitcoin_point_4": "Trhovo určená cena", "bitcoin_point_5": "Obchodovanie 24/7", "bitcoin_point_6": "Možnosť vlastnej správy", "bitcoin_point_7": "Aktívum s pevnou ponukou",
	"point_1_summary_1": "Keď vlastníte Bitcoin, máte priame vlastníctvo samotného aktíva. Keď vlastníte akcie, vlastníte podiel v spoločnosti, čo znamená, že vaša investícia závisí od výkonu spoločnosti, rozhodnutí manažmentu a obchodného úspechu.",
	"point_2_summary_1": "Bitcoin má pevný strop 21 miliónov BTC, ktoré kedy budú existovať.", "point_2_summary_2": "Spoločnosti môžu kedykoľvek vydať nové akcie, čím riedia percentuálne vlastníctvo existujúcich akcionárov. To znamená, že váš podiel v spoločnosti sa zmenší, keď sú vytvorené nové akcie.", "point_2_summary_3": "To je menej ako fiat inflácia, ale stále je to riedenie.", "point_2_summary_4": "S Bitcoinom sa váš podiel koláča nikdy nezmenší.",
	"point_3_summary_1": "Bitcoin funguje na decentralizovanej sieti bez jediného bodu zlyhania. Akciové investície podliehajú riziku kľúčových osôb — ak CEO alebo iní kľúčoví predstavitelia odídu, ochorejú alebo urobia zlé rozhodnutia, vaša investícia môže výrazne utrpieť.",
	"point_4_summary_1": "Cena Bitcoinu je určená čisto trhovou ponukou a dopytom. Ceny akcií sú často hodnotené pomocou P/E pomeru (cena/zisk), ktorý ukazuje, koľko investori platia za každý dolár zisku spoločnosti.",
	"point_5_summary_1": "Bitcoin sa obchoduje 24 hodín denne, 7 dní v týždni na globálnych burzách.", "point_5_summary_2": "Bitcoin je decentralizovaný", "point_5_summary_3": "a nikdy nespí.", "point_5_summary_4": "Akciové trhy sú otvorené iba počas pracovných hodín vo všedné dni, čo obmedzuje, kedy môžete kúpiť alebo predať svoje investície.",
	"point_6_summary_1": "U Bitcoinu si môžete vziať svoje mince do vlastnej správy, čo znamená, že ich skutočne vlastníte bez závislosti od tretej strany.", "point_6_summary_2": "Vlastná správa je tak jednoduchá ako stiahnutie aplikácie.", "point_6_summary_3": "Akcie vyžadujú makléřsky účet a podliehate protipartnerským rizikám — ak spoločnosť zbankrotuje alebo makléř zlyhá, môžete prísť o svoju investíciu.", "point_6_summary_4": "Akciové certifikáty v skutočnosti priamo nevlastníte.",
	"point_7_summary_1": "Bitcoin je aktívum s pevnou ponukou so stropom 21 miliónov Bitcoinov, ktoré kedy budú existovať. To z neho robí skvelé zaistenie proti inflácii. Akcie majú premenlivý výkon proti inflácii — niektoré spoločnosti si v inflačnom období vedú dobre, iné majú problémy. Neexistuje záruka, že akákoľvek konkrétna akcia ochráni proti inflácii."
});

writeFile(`bitcoin-vs-visa_${lang}.json`, {
	"bitcoin_vs_visa": "Bitcoin vs Visa",
	"visa_header": "ROZDIEL MEDZI", "visa_header_2": "BITCOINOM", "visa_header_3": "A", "visa_header_4": "VISOU",
	"visa_intro_1": "Kreditné karty a Bitcoin sú oba platobné systémy, ale fungujú veľmi odlišne.",
	"visa_intro_2": "Kreditné karty ako Visa sú uzavreté siete kontrolované finančnými inštitúciami, zatiaľ čo Bitcoin je otvorená sieť, ktorú môže používať ktokoľvek.",
	"visa_intro_3": "Pozrime sa na rozdiely medzi týmito dvoma platobnými infraštruktúrami: Bitcoinom a Visou.",
	"visa": "VISA",
	"visa_point_1": "Uzavretá sieť", "visa_point_2": "3 % poplatky obchodníkom", "visa_point_3": "Nepriehľadný systém", "visa_point_4": "Môže zmraziť účty", "visa_point_5": "Vytvára dlh s vysokým úrokom", "visa_point_6": "Vyžaduje sprostredkovateľov", "visa_point_7": "Obmedzené hodiny a geografia",
	"bitcoin": "BITCOIN",
	"bitcoin_point_1": "Otvorená sieť", "bitcoin_point_2": "Žiadne poplatky obchodníkom", "bitcoin_point_3": "Transparentný systém", "bitcoin_point_4": "Nemožno zmraziť", "bitcoin_point_5": "Nevytvára dlh", "bitcoin_point_6": "Možnosť vlastnej správy", "bitcoin_point_7": "Globálny prístup 24/7",
	"point_1_summary_1": "Bitcoin je otvorená sieť, ku ktorej sa ktokoľvek môže pripojiť a používať ju bez povolenia. Siete kreditných kariet ako Visa sú uzavreté systémy kontrolované finančnými inštitúciami, ktoré môžu odmietnuť prístup komukoľvek.",
	"point_1_summary_2": "To robí Bitcoin inkluzívnejším a prístupnejším pre ľudí po celom svete, najmä pre tých, ktorí nemajú prístup k bankovým službám.",
	"point_2_summary_1": "Bitcoinové transakcie nemajú žiadne poplatky pre obchodníkov, zatiaľ čo spoločnosti kreditných kariet zvyčajne účtujú obchodníkom okolo 3 % za transakciu.",
	"point_2_summary_2": "Zistite, ako môže vaša firma ušetriť peniaze",
	"point_2_summary_3": "prijímaním bitcoinových platieb namiesto platenia poplatkov za spracovanie kreditných kariet.",
	"point_3_summary_1": "Bitcoin funguje na transparentnom blockchaine, kde všetky transakcie môže overiť ktokoľvek. Siete kreditných kariet fungujú ako uzavreté, proprietárne systémy, kde sú detaily transakcií skryté pred verejnosťou.",
	"point_3_summary_2": "Táto transparentnosť robí Bitcoin dôveryhodnejším a umožňuje nezávislé overenie integrity siete.",
	"point_4_summary_1": "Spoločnosti kreditných kariet môžu kedykoľvek zmraziť účty, blokovať transakcie alebo odmietnuť službu. Bitcoin nemôže byť zmrazený ani kontrolovaný žiadnou centrálnou autoritou.",
	"point_4_summary_2": "S Bitcoinom si udržiavate kontrolu nad svojimi peniazmi a nemôžete byť odrezaní od platobného systému.",
	"point_5_summary_1": "Kreditné karty vytvárajú dlh, ktorý sa môže rýchlo hromadiť s vysokými úrokovými sadzbami, niekedy presahujúcimi 25 % ročne.",
	"point_5_summary_2": "Bitcoinové transakcie sú konečné vyrovnania bez vytvárania dlhu — môžete minúť iba Bitcoin, ktorý skutočne vlastníte.",
	"point_6_summary_1": "Bitcoin umožňuje vlastnú správu, čo znamená, že môžete držať a kontrolovať svoje vlastné peniaze bez závislosti od bánk alebo platobných spracovateľov.",
	"point_6_summary_2": "Zistite viac o bitcoinových peňaženkách",
	"point_6_summary_3": "aby ste pochopili, ako môžete prevziať kontrolu nad svojimi peniazmi. Kreditné karty vždy vyžadujú sprostredkovateľov ako banky a platobných spracovateľov.",
	"point_7_summary_1": "Bitcoin funguje globálne 24/7 bez obchodných hodín alebo geografických obmedzení.",
	"point_7_summary_2": "Siete kreditných kariet majú obchodné hodiny, obdobia údržby a geografické obmedzenia, ktoré môžu brániť spracovaniu transakcií."
});

console.log(`\nDone! Created 10 comparison files.`);
