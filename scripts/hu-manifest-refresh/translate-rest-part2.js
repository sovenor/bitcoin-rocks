#!/usr/bin/env node
/**
 * Hungarian (hu) manifest refresh — part 2 of non-inflation namespaces.
 * Covers: business/*, buy, common, compound-inflation-calculator, flyers,
 *         get-involved, index, lightning, nostr/*, sticker-files/*,
 *         sticker-language-success, sticker-success, stickers, wallets.
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

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli könyvelési szolgáltatások",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 USD",
	"business/accounting::accounting_example_loss_result": "−10 USD",
	"business/accounting::accounting_description":
		"Egyszerű útmutató a Bitcoin-fizetések könyveléséhez — hibrid pénztárcák, beszerzési érték, tőkenyereség, és mikor érdemes a könyvelőddel beszélned.",
	"business/accounting::accounting_s1_c1":
		"A Bitcoin elfogadásának legegyszerűbb módja egy hibrid pénztárca használata: ez automatikusan dollárra (vagy a helyi valutádra) váltja a beérkezett Bitcoin 100 %-át, amint a fizetés megérkezik.",
	"business/accounting::accounting_s1_c2":
		"Ezzel a beállítással a könyvelésed úgy néz ki, mint ma — a végösszeg mindig dollárban van. Nincs beszerzési érték, nincs tőkenyereség, nincs új táblázat.",
	"business/accounting::accounting_s2":
		"Ha tartasz egy kis Bitcoint: kövesd a beszerzési értéket",
	"business/accounting::accounting_s2_c1":
		"Néhány vállalkozás úgy dönt, hogy megtartja a beérkezett Bitcoin egy részét ahelyett, hogy mindent automatikusan átváltana. Ha te is így döntesz, az extra lépés a beszerzési érték nyomon követése — minden egyes Bitcoin-fizetés dolláros értéke azon a napon, amikor megkaptad.",
	"business/accounting::accounting_s2_c2":
		"Még akkor is, ha az üzletedet csak Bitcoinban mered, a legtöbb adóhatóság továbbra is dolláros érték szerinti jelentést kér. A jó hír: minden tranzakcióhoz csak két szám kell — a beérkezett Bitcoin mennyisége és annak dolláros értéke az adott napon.",
	"business/accounting::accounting_s2_c3":
		"Használd az alábbi eszközöket az érték keresésének automatizálására, hogy ne kelljen minden nap kézzel ellenőrizni az árat.",
	"business/accounting::accounting_s3":
		"Tartott Bitcoin elköltése vagy eladása",
	"business/accounting::accounting_s3_c1":
		"Ha minden fizetést automatikusan dollárra váltasz, hagyd ki ezt a részt — nem rád vonatkozik.",
	"business/accounting::accounting_s3_c2":
		"Ha tartottál Bitcoint, és később úgy döntesz, hogy elköltöd vagy eladod, add hozzá az eladási árat a beszerzési érték mellé ugyanabban a táblázatban. A beérkezéskori és az elköltéskori vagy eladáskori Bitcoin-ár közötti különbség a tőkenyereség vagy -veszteség.",
	"business/accounting::accounting_s3_c3": "Két gyors példa:",
	"business/accounting::accounting_s4":
		"Olyan szakértőt keresel, aki ismeri a Bitcoint?",
	"business/accounting::accounting_s4_c1":
		"Ha inkább rábíznád ezt a feladatot valaki másra — vagy a Bitcoin-könyvelésed bonyolultabb, mint amit egy hibrid pénztárca egyedül kezelni tud —, melegen ajánljuk a Satoshi Pacioli Accounting Servicest, amely vállalkozások számára nyújt Bitcoin-könyvelési szolgáltatásokat.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin-könyvelés a vállalkozásodnak",
	"business/accounting::accounting_card_bpr_label": "Bitcoin ár",
	"business/accounting::accounting_card_bpr_title":
		"Nézd meg az aktuális vagy múltbeli Bitcoin árakat dollárban",
	"business/accounting::accounting_card_pacioli_label":
		"Bitcoin könyvelő",
	"business/accounting::accounting_card_spreadsheet_label":
		"Excel-importálás",
	"business/accounting::accounting_card_spreadsheet_title":
		"Automatikusan importálj Bitcoin árakat Excelbe",
	"business/accounting::accounting_card_wallets_label":
		"Hibrid pénztárcák",
	"business/accounting::accounting_card_wallets_title":
		"Nézd meg az ajánlott vállalkozói pénztárcáinkat",
	"business/accounting::accounting_disclaimer":
		"Ez az útmutató kizárólag tájékoztató jellegű, és nem adótanácsadás. Konkrét helyzetre vonatkozó tanácsadásért fordulj képesített könyvelőhöz.",
	"business/accounting::accounting_disclaimer_label":
		"Felelősségkizárás",
	"business/accounting::accounting_example_feb_1": "Február 1.",
	"business/accounting::accounting_example_gain_badge":
		"Tőkenyereség",
	"business/accounting::accounting_example_gain_explain":
		"10 USD tőkenyereséget rögzítesz.",
	"business/accounting::accounting_example_jan_1": "Január 1.",
	"business/accounting::accounting_example_loss_badge":
		"Tőkeveszteség",
	"business/accounting::accounting_example_loss_explain":
		"10 USD tőkeveszteséget rögzítesz.",
	"business/accounting::accounting_example_received_label": "Kapott",
	"business/accounting::accounting_example_sold_label":
		"Eladva vagy elköltve",
	"business/accounting::accounting_hero_subtitle":
		"A Bitcoin elfogadása a vállalkozásban nem kell, hogy megnehezítse a könyvelést. Itt egy gyors áttekintés — és az eszközök és szakértők, akik egyszerűvé teszik.",
	"business/accounting::accounting_intro_c1":
		"Ha már elfogadsz készpénzt vagy kártyát, a Bitcoin hozzáadása a vállalkozási könyveléshez egyszerűbb, mint gondolnád. Két lehetőséged van: minden Bitcoin-fizetést automatikusan dollárra váltani, amint megérkezik (nincs új könyvelés), vagy megtartani néhány Bitcoint (néhány extra számot kell követned).",
	"business/accounting::accounting_intro_c2":
		"Ez az útmutató mindkét megközelítést elmagyarázza — így kiválaszthatod a vállalkozásodnak megfelelőt, és magabiztosan elkezdheted elfogadni a Bitcoint.",
	"business/accounting::accounting_s1":
		"Az egyszerűbb út: automatikus dollárra váltás",
	"business/accounting::accounting_s3_c6":
		"És ennyi. Ugyanaz az alapszámítás, amit bármely más, áremelkedéssel és -csökkenéssel rendelkező vagyontárgy esetén használsz.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — aktuális és múltbeli Bitcoin árak dollárban",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Bitcoin-könyvelés vállalkozásoknak",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — kriptovaluta-árak importálása Excelbe",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Rövid válaszok azokra a kérdésekre, amelyeket a kereskedők leggyakrabban tesznek fel a Bitcoin elfogadása előtt — díjak, elszámolás, pénztárcák, visszaterhelések, költségek és egyebek.",
	"business/faq::faq_intro_c1":
		"Kattints bármelyik kérdésre alább, hogy lásd a választ. Amikor készen állsz a Bitcoin elfogadására, az oldal alján található üzleti eszközök lépésről lépésre vezetnek végig a folyamaton.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "Könyvelés",
	"business/index::biz_label_faq": "Gyakori kérdések",
	"business/index::biz_label_maps": "Kereskedői térképek",
	"business/index::biz_label_rewards": "Jutalmak",
	"business/index::biz_label_stickers": "Matricák",
	"business/index::biz_label_wallets": "Pénztárcák",
	"business/index::biz_meta_description":
		"Fogadj el Bitcoint a vállalkozásodban alacsonyabb díjakkal, azonnali elszámolással, visszaterhelések nélkül, és érd el a több vásárlót.",
	"business/index::business_hero_subtitle":
		"Fogadj el fizetéseket alacsonyabb díjakkal, számold el azonnal, és érj el milliónyi új vásárlót — szerződések és rejtett költségek nélkül.",
	"business/index::business_intro_c1":
		"A Bitcoin gyors, olcsó és magán módot ad a vállalkozásodnak a fizetések fogadására. Közvetítők nélkül. Visszaterhelések nélkül. Meglepetésszerű költségek nélkül. A pénz másodpercek alatt, közvetlenül a vásárlótól hozzád.",
	"business/index::business_intro_c2":
		"Az alábbi összefoglaló elmondja, miért jó a Bitcoin az üzletnek — és lent megtalálsz minden eszközt, ami ahhoz kell, hogy még ma elkezdd.",
	"business/index::business_resources_heading":
		"Minden, ami a Bitcoin elfogadásához kell",
	"business/index::business_resources_intro":
		"Haladj a saját tempódban ezekkel az eszközökkel. Mindegyik rövid, gyakorlati útmutató.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Mondj valamit a vállalkozásodról",
	"business/maps::biz_maps_form_intro":
		"Csak néhány adatra van szükségünk, hogy felvegyünk a térképekre. A címadatokat csak addig őrizzük, ameddig szükséges ahhoz, hogy a vállalkozásodat felküldjük a kereskedői térképekre.",
	"business/maps::biz_maps_hero_subtitle":
		"Add hozzá a vállalkozásodat ingyen a BTC Maphez — a Bitcoint elfogadó kereskedők nyílt globális katalógusához —, hogy a helyi Bitcoin-felhasználók megtaláljanak, és a vállalkozásodban költhessék el a Bitcoinjukat.",
	"business/maps::biz_maps_hero_title":
		"Tedd fel a vállalkozásodat a Bitcoin kereskedői térképekre",
	"business/maps::biz_maps_intro_c1":
		"A Bitcoin-felhasználók aktívan keresnek olyan helyeket, ahol elkölthetik a pénzüket. A térképen való megjelenés a vállalkozásodat minden Bitcoin-felhasználó elé teszi, aki a közelben keres helyet enni, vásárolni vagy megszállni — teljesen ingyen.",
	"business/maps::biz_maps_intro_c2":
		"Töltsd ki az alábbi rövid űrlapot, és felvesszük a vállalkozásodat a BTC Mapre és más Bitcoin kereskedői térképekre.",
	"business/maps::biz_maps_meta_description":
		"Add hozzá a vállalkozásodat ingyen a BTC Maphez és más Bitcoin kereskedői térképekhez, hogy a helyi Bitcoin-felhasználók megtaláljanak.",
	"business/maps::biz_maps_placeholder_address": "Utca, házszám",
	"business/maps::biz_maps_placeholder_category":
		"Kategória (pl. étterem, kávézó, szálloda)",
	"business/maps::biz_maps_placeholder_city": "Város",
	"business/maps::biz_maps_placeholder_country": "Ország",
	"business/maps::biz_maps_placeholder_name": "Vállalkozás neve",
	"business/maps::biz_maps_placeholder_region":
		"Régió / megye / állam",
	"business/maps::biz_maps_placeholder_website":
		"Weboldal (opcionális)",
	"business/maps::biz_maps_view_map_cta": "Nézd meg a BTC Mapet",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map":
		"Nézd meg a BTC Mapet",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Köszönjük, hogy beküldted a vállalkozásodat. Hamarosan felvesszük a Bitcoin kereskedői térképekre.",
	"business/maps-success::biz_maps_success_hero_title":
		"Beküldés megérkezett 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"A vállalkozásodat 1–2 héten belül felvesszük a BTC Mapre és más Bitcoin kereskedői katalógusokba. Minden beküldést kézzel vizsgálunk át, hogy megőrizzük a térkép pontosságát.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Amint a hirdetésed élesedik, a helyi Bitcoin-felhasználók megtalálják a vállalkozásodat, és eljönnek Bitcoint költeni.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Mi következik",
	"business/maps-success::biz_maps_success_view_c1":
		"Amíg vársz, nézd meg a BTC Mapet, és tekintsd meg a Bitcoint elfogadó vállalkozások növekvő globális hálózatát.",
	"business/maps-success::biz_maps_success_view_header":
		"Nézd meg, hová fogsz felkerülni",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Töltsd le az angol „Bitcoin Accepted Here\u201D matricafájlokat saját nyomtatáshoz.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Nyomtass saját angol „Bitcoin Accepted Here\u201D matricákat, hogy a vásárlóid tudják: elfogadod a Bitcoint.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Töltsd le az angol „Bitcoin Accepted Here\u201D matricafájlokat",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Köszönjük, hogy a saját nyelveden kérted a „Bitcoin Accepted Here\u201D matricafájlokat.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Kérés megérkezett 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"A matricafájlokat a következő 3–4 hétben elkészítjük és közzétesszük. Amint elkészülnek, ingyen letöltheted és kinyomtathatod őket a matricafájlok oldalunkról.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"A matricafájlokat csoportosan tesszük közzé, így néhány hétbe telhet, mire a te nyelved élesedik. Köszönjük a türelmedet!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Mi következik",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Rendelj nagy tételben",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Kérj még egy ingyenes csomagot",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Az ingyenes „Bitcoin Accepted Here\u201D matricáid 2–4 héten belül megérkeznek egy egyszerű fehér borítékban 3 matricával.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"A matricáid úton vannak 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Ha 3 matrica nem elég a vállalkozásodhoz, kérhetsz még egy ingyenes csomagot — vagy nagy tételben rendelhetsz attól a nyomdától, amelyet mi is használunk.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Több matricára van szükséged?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"A főbejárat vagy kirakat, hogy a vásárlók már belépés előtt lássák",
	"business/sticker-success::biz_sticker_success_tip_2":
		"A pénztár, fizetési terminál mellett vagy bárhol, ahol a vásárlók fizetnek",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Az étlapon, árlistán vagy borravalóstálcán",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Ne ragaszd a matricákat olyan helyekre, amelyek nem a tieid vagy ahol nem megengedett",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Jó helyek matricák ragasztásához",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Mondd meg a vásárlóidnak, hogy elfogadod a Bitcoint. Kérj egy csomag ingyenes „Bitcoin Accepted Here\u201D matricát az üzletedbe.",
	"business/stickers::biz_stickers_hero_title":
		"Ingyenes „Bitcoin Accepted Here\u201D matricák",
	"business/stickers::biz_stickers_intro_c1":
		"A Bitcoin elfogadása csak a munka fele — a vásárlóknak is tudniuk kell róla. Ezeket a kis „Bitcoin Accepted Here\u201D matricákat úgy tervezték, hogy a főbejáratra, pénztárhoz, étlapra vagy bárhol, ahol a vásárlók fizetnek, fel lehessen ragasztani.",
	"business/stickers::biz_stickers_intro_c2":
		"Ingyen küldünk csomagot bármely amerikai vagy kanadai címre, vagy magad is kinyomtathatod a matricákat bárhol a világon.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — ingyenes postázás",
	"business/stickers::biz_stickers_option_print":
		"🌍 Globális — saját nyomtatás",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 USA — ingyenes postázás",
	"business/stickers::biz_stickers_placeholder_translation1":
		"„Bitcoin Accepted Here\u201D fordítása",
	"business/stickers::biz_stickers_placeholder_translation2":
		"„Scan to learn why Bitcoin is good for business.\u201D fordítása",
	"business/stickers::biz_stickers_print_c1":
		"Bárhol is élsz a világon, magad is kinyomtathatod a „Bitcoin Accepted Here\u201D matricáidat. Kattints a nyelvedre alább, hogy letöltsd a matricafájlokat és a nyomtatási útmutatót.",
	"business/stickers::biz_stickers_print_header":
		"Nyomtasd ki a saját matricafájljaidat",
	"business/stickers::biz_stickers_request_c1":
		"Töltsd ki az alábbi űrlapot, hogy a saját nyelveden kérj „Bitcoin Accepted Here\u201D matricafájlokat. Tudatjuk veled, amint elkészülnek.",
	"business/stickers::biz_stickers_request_header":
		"Nem látod a nyelvedet?",
	"business/stickers::biz_stickers_step_description":
		"Ingyen csomagokat küldünk amerikai és kanadai címekre. A világ többi részén magad is kinyomtathatod a matricákat.",
	"business/stickers::biz_stickers_step_header":
		"Hogyan szeretnéd a matricáidat?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Minden Bitcoin pénztárca együttműködik egymással — válaszd a vállalkozásodnak legjobbat. Ingyenes, azonnali elszámolás, nincs visszaterhelés.",
	"business/wallets::sources_breez_business":
		"Breez — kizárólag Bitcoin Lightning pénztárca",
	"business/wallets::sources_ibex":
		"IBEX — Lightning fizetési infrastruktúra",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin fizetési feldolgozó",
	"business/wallets::sources_square":
		"Square — Bitcoin-fizetések elfogadása",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin-könyvelés vállalkozásoknak",
	"business/wallets::wallets_hero_subtitle":
		"A Bitcoin pénztárcák ingyenesek. Válaszd a vállalkozásodnak legjobbat — személyesen, online vagy számlára —, és percek alatt kezdj el Bitcoint elfogadni.",
	"business/wallets::wallets_section_invoice":
		"Pénztárcák olyan vállalkozásoknak, amelyek számlát küldenek a vásárlóknak",
	"business/wallets::wallets_section_invoice_intro":
		"Ha a vásárlóidnak számlát küldesz (tanácsadás, szabadúszó, B2B szolgáltatások), használj egy számlázási környezetre tervezett pénztárcát. A vásárló néhány kattintással kifizeti a Bitcoin-számlát.",
	"business/wallets::wallets_section_multiple":
		"Pénztárcák több alkalmazottal rendelkező vállalkozásoknak",
	"business/wallets::wallets_section_multiple_intro":
		"Ha a csapatod a pénztárnál fogad fizetéseket, válassz olyan pénztárcát, amely támogatja a több alkalmazottas bejelentkezést — így minden alkalmazottnak saját kódja van, és nyomon követheted, ki melyik fizetést kapta.",
	"business/wallets::wallets_section_online":
		"Pénztárcák online vállalkozásoknak",
	"business/wallets::wallets_section_online_intro":
		"Online értékesítesz? Ezek a pénztárcák összekapcsolódnak az online boltoddal, és Bitcoin-fizetéseket fogadnak el a világ minden tájáról érkező vásárlóktól — visszaterhelések nélkül, és kereskedői számla sem szükséges.",
	"business/wallets::wallets_section_sole":
		"Pénztárcák egyéni vállalkozóknak",
	"business/wallets::wallets_section_sole_intro":
		"Ha egyedül vezetsz boltot, kávézót, stúdiót vagy szolgáltatást, bármelyik pénztárca megfelelő. Eldöntheted, hogy megtartod-e a Bitcoint, vagy minden fizetés egy részét automatikusan a helyi valutára váltod.",
	"business/wallets::wallets_strike_note":
		"A Strike Business lehetővé teszi a Bitcoin- és Lightning-fizetések elfogadását díjmentesen és azonnali elszámolással. Támogatja a személyes, online és számlás fizetéseket, lehetőséggel a helyi valutára való automatikus átváltásra.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Itt elfogadunk Bitcoint",
	"business/why::why_good_for_you":
		"Miért jó a Bitcoin neked is",
	"business/why::why_learn_more_lowercase": "tudj meg többet ←",
	"business/why::why_s1_c1":
		"Az infláció akkor történik, amikor több pénzt nyomtatnak vagy a semmiből hoznak létre. Ez idővel csökkenti a zsebedben lévő pénz értékét — ezért emelkednek az árak évről évre.",
	"business/why::why_s1_c2":
		"A Bitcoinnak fix kínálata van: 21 millió érme. Egyetlen kormány, bank vagy vállalat sem nyomtathat többet. A Bitcoinban tartott megtakarításod megőrzi az értékét idővel ahelyett, hogy csendben elveszítené.",
	"business/why::why_s2_c1":
		"Az utóbbi években sok amerikai bank ment csődbe bankrohamok miatt. Amikor sok ügyfél egyszerre akarja felvenni a pénzét, a banknak nincs elég készpénze mindenkinek.",
	"business/why::why_s2_c2":
		"Azon kívül, hogy őrzik a pénzedet, a bankok nagy részét kihelyezik és befektetik. Ha ezek a befektetések rosszul sikerülnek — vagy a betétesek elveszítik a bizalmat — a bank csődbe mehet, és a betéteid befagyhatnak vagy elveszhetnek.",
	"business/why::why_s2_c3":
		"A Bitcoinnal a pénzedet közvetlenül a saját pénztárcádban tarthatod. Bank nélkül. Közvetítők nélkül. Bankrohamok nélkül.",
	"business/why::why_s3_c1":
		"A hitelkártyákkal, PayPallel vagy hagyományos bankszámlákkal ellentétben a Bitcoin senki engedélyét nem igényli.",
	"business/why::why_s3_c2":
		"Senki sem fagyaszthatja be a számládat, blokkolhat egy fizetést, vagy zárhat ki a hálózatból. Ez a történelem első olyan pénzügyi rendszere, amelyet cenzúra vagy lefoglalás félelme nélkül használhatsz.",
	"business/why::why_s4_c1":
		"A Bitcoint gyakran félreértik, de csendben sok jó dolgot tesz a világban.",
	"business/why::why_s4_c2":
		"Segített emberi jogi aktivistáknak harcolni a szabadságukért, csökkentette a metánkibocsátást a hulladéklerakókból és olajkutakból, stabilizálta az áramhálózatokat, és olyan közszolgáltatásokat finanszírozott, mint a nemzeti parkok.",
	"business/why::why_biz_s1":
		"Alacsonyabb díjak, több a vállalkozásnak",
	"business/why::why_biz_s1_c1":
		"A Bitcoin-fizetések megkerülik a bankokat és a kártyatársaságokat, akik minden eladásból 2–3 %-ot vesznek el. A vállalkozás többet tart meg a fizetésedből — ami gyakran jobb árakat és jobb szolgáltatást jelent neked.",
	"business/why::why_biz_s2":
		"Azonnali elszámolás, nincs visszaterhelés",
	"business/why::why_biz_s2_c1":
		"A Bitcoin-fizetések másodpercek alatt rendeződnek, közvetlenül a pénztárcádból a vállalkozáshoz. Nem kell napokat várni, hogy a bank felszabadítsa a pénzt, és nincsenek költséges visszaterhelési viták — ami azt jelenti, hogy a vállalkozás a kiszolgálásra koncentrálhat ahelyett, hogy a csalások ellen küzdene.",
	"business/why::why_biz_s3":
		"Ingyenes elfogadás, mindenkinek nyitva",
	"business/why::why_biz_s3_c1":
		"A Bitcoin elfogadásához nem kellenek szerződések, havi költségek vagy beállítási díjak. És milliónyi Bitcoin-felhasználó keres aktívan világszerte Bitcoint elfogadó kereskedőket — ami ingyen mutatja be a vállalkozást új vásárlóknak.",
	"business/why::why_business_cta_intro":
		"Vállalkozásod van, és el akarod kezdeni a Bitcoin elfogadását?",
	"business/why::why_business_cta_link":
		"Nézd meg, hogyan működik ←",
	"business/why::why_for_business":
		"Miért jó a Bitcoin ennek a vállalkozásnak",
	"business/why::why_for_business_intro":
		"A Bitcoin elfogadásával ez a vállalkozás többet tart meg minden eladásból, azonnali fizetéseket kap visszaterhelések nélkül, és eléri a Bitcoin-felhasználók globális közönségét — szerződések és havi költségek nélkül.",
	"business/why::why_good_for_you_intro":
		"A Bitcoin nem csak a pénztárnál jó — jobb fajta pénz, amely megvédi a megtakarításodat, a magánéletedet és a tranzakciós szabadságodat. Itt egy gyors összefoglaló.",
	"business/why::why_hero_subtitle":
		"Beolvastad a „Bitcoin Accepted Here\u201D matricát. Itt van, miért jó hír — ennek a vállalkozásnak és neked is.",
	"business/why::why_intro_c1":
		"A vállalkozás, ahol jársz, elfogadja a Bitcoint — egy modern, nyílt fizetési rendszert, amelyet bárki használhat világszerte bankok és közvetítők nélkül, akik megveszik a részüket.",
	"business/why::why_intro_c2":
		"Az alábbiakban összefoglaljuk, miért jó a Bitcoin elfogadása ennek a vállalkozásnak, valamint miért jó neked, mint vásárlónak a Bitcoin használata.",
	"business/why::why_next_business_label": "Fogadj el Bitcoint",
	"business/why::why_next_business_title":
		"Fogadj el Bitcoint a vállalkozásodban",
	"business/why::why_next_buy_label": "Vásárolj Bitcoint",
	"business/why::why_next_buy_title": "Vásárold meg az első Bitcoinodat",
	"business/why::why_next_learn_label": "Tudj meg többet",
	"business/why::why_next_learn_title": "Tudj meg többet a Bitcoinról",
	"business/why::why_next_wallet_label": "Szerezz pénztárcát",
	"business/why::why_next_wallet_title":
		"Szerezd meg a Bitcoin pénztárcádat",
	"business/why::why_whats_next_heading": "Hová tovább?",
	"business/why::why_whats_next_intro":
		"Ha most olvasol be először Bitcoin matricát, ezek a leghasznosabb helyek, ahová ellátogathatsz.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p":
		"Peer-to-peer (felhasználók között közvetlenül)",
	"buy::buy_bitcoin_guide": "Hogyan vásárolj Bitcoint",
	"buy::buy_step_1_header": "Válaszd ki az országodat",
	"buy::buy_step_2_header": "Válaszd ki a fizetési módot",
	"buy::buy_step_3_header": "Vásárlási lehetőségeid",
	"buy::buy_step_4_header": "Tartsd biztonságban a Bitcoinodat",
	"buy::buy_header_subtitle":
		"Egyszerű, lépésről lépésre szóló útmutató az első Bitcoinod megvásárlásához.",
	"buy::buy_howto_name": "Hogyan vásárolj Bitcoint",
	"buy::buy_meta_description":
		"Tanuld meg, hogyan vásárolj biztonságosan Bitcoint a lépésről lépésre szóló útmutatónkkal. Válaszd ki az országodat és a fizetési módot, hogy megkapd a legjobb vásárlási lehetőségeket.",
	"buy::buy_step_1_eyebrow": "1. lépés",
	"buy::buy_step_2_eyebrow": "2. lépés",
	"buy::buy_step_3_eyebrow": "3. lépés",
	"buy::buy_step_4_eyebrow": "4. lépés",
	"buy::buy_storage_cta_label": "Következő lépés",
	"buy::sources_bisq":
		"Bisq — decentralizált peer-to-peer Bitcoin tőzsde",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — Bitcoin bankautomaták globális katalógusa",
	"buy::sources_kraken": "Kraken — népszerű Bitcoin tőzsde",
	"buy::sources_relai":
		"Relai — svájci alkalmazás a Bitcoin saját megőrzésére",
	"buy::sources_river":
		"River — vásárolj, bányássz és tarts kizárólag Bitcoint",
	"buy::sources_strike_lightning":
		"Strike — vásárolj Bitcoint Lightning Network támogatással",
	"buy::sources_swan":
		"Swan Bitcoin — Bitcoin költségátlagolásos befektetés (DCA)",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Nyelv hozzáadása",
	"common::common_next_buy_bitcoin": "Vásárolj Bitcoint",
	"common::common_next_buy_bitcoin_desc":
		"Tanuld meg, hogyan vásárolj biztonságosan Bitcoint",
	"common::common_next_calculate":
		"Számítsd ki a saját inflációdat",
	"common::common_next_calculate_desc":
		"Nézd meg, hogyan hat az infláció idővel a fizetésedre",
	"common::common_next_get_wallet": "Szerezz pénztárcát",
	"common::common_next_get_wallet_desc":
		"Szerezd meg az első Bitcoin pénztárcádat — ingyenes",
	"common::common_next_keep_learning": "Tanulj tovább",
	"common::common_next_keep_learning_desc":
		"Nézd meg, hogyan teszi a Bitcoin jobb hellyé a világot",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — fogyasztói árindex (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — pénzkínálat (kategorikus index)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Csődbe mehet egy államkötvény-aukció?\u201D",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Mi következik?",
	"common::common_sticker_files_mission_5": "Kérj egy csomagot",
	"common::common_site_tagline": "Bitcoin oktatás mindenkinek.",
	"common::common_source_btc_map":
		"BTC Map — Bitcoint elfogadó kereskedők globális katalógusa",
	"common::common_source_btcpayserver":
		"BTCPay Server — ingyenes, nyílt forráskódú, saját szerveren futtatható Bitcoin fizetési feldolgozó",
	"common::common_source_oshi":
		"Oshi — Bitcoin jutalmazási platform kereskedőknek",
	"common::common_source_strike_business":
		"Strike — Bitcoin- és Lightning-fizetések vállalkozásoknak",
	"common::common_sources_group_bitcoin": "Bitcoin adatok",
	"common::common_sources_group_cpi": "Infláció / CPI",
	"common::common_sources_group_debt": "Államadósság",
	"common::common_sources_group_money": "Pénzkínálati adatok",
	"common::common_sources_group_stories": "Valós példák",
	"common::common_sticker_files_mission_6":
		"Ingyenes matricák angolul.",
	"common::common_sticker_files_next_flyers_label": "Szórólapok",
	"common::common_sticker_files_next_flyers_title":
		"Nyomtass Bitcoin szórólapokat",
	"common::common_sticker_files_next_languages_label":
		"Matricafájlok",
	"common::common_sticker_files_next_languages_title":
		"Nézd meg a matricafájlokat más nyelveken",
	"common::common_sticker_files_print_these":
		"Nyomtasd ki ezeket egy kattintással",
	"common::common_sticker_name_bdhi_black":
		"„Bitcoin Doesn\u2019t Have Inflation\u201D matrica (fekete)",
	"common::common_sticker_name_bdhi_orange":
		"„Bitcoin Doesn\u2019t Have Inflation\u201D matrica (narancssárga)",
	"common::common_sticker_name_caution":
		"Bitcoin „Caution! Melting Ice Cube\u201D matrica",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin „Cure Inflation\u201D matrica",
	"common::common_sticker_name_danger":
		"Bitcoin „Danger! Inflation Ahead\u201D matrica",
	"common::common_sticker_name_fix":
		"Bitcoin „Fix The Money, Fix The World\u201D matrica",
	"common::common_sticker_name_got_inflation":
		"Bitcoin „Got Inflation?\u201D matrica",
	"common::common_sticker_name_study":
		"„Study Bitcoin\u201D matrica",
	"common::common_sticker_name_warning":
		"Bitcoin „Warning! Inflation is Stealing Your Savings\u201D matrica",
	"common::common_sticker_name_what_if":
		"Bitcoin „What if your money didn\u2019t have inflation?\u201D matrica",
	"common::common_sticker_tips_heading": "Matrica tippek",
	"common::common_sticker_tips_intro":
		"Miután kinyomtattad a matricákat, tedd őket olyan helyre, ahol az emberek látni fogják! Jó helyek:",
	"common::common_sticker_tips_list_1":
		"Nyilvános helyek, ahol az emberek látni fogják",
	"common::common_sticker_tips_list_2":
		"Helyek, ahol nem távolítják el azonnal (a matricák nem okoznak tartós kárt)",
	"common::common_sticker_tips_list_3":
		"Felületek, amelyekre jól tapadnak (fém, műanyag, üveg)",
	"common::common_sticker_tips_list_4":
		"Ne ragaszd magántulajdonra, közlekedési táblákra, bankautomatákra vagy benzinkutakra",
	"common::common_stickers_printer_prefix": "Mi a",
	"common::common_stickers_printer_suffix":
		"oldalt használjuk, de bármelyik matrica-nyomdát választhatod.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — fogyasztói árindex minden városi fogyasztóra",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — M1 pénzkínálat",
	"compound-inflation-calculator::cic_calculator_heading":
		"Számítsd ki az inflációs különbségedet",
	"compound-inflation-calculator::cic_cta_label": "Következő lépés",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Tudd meg, mennyivel kellene emelkednie a fizetésednek, hogy lépést tartson az inflációval.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Fedezz fel további témákat",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Nézd meg, hogyan kapcsolódik a Bitcoin a pénzhez, szabadsághoz, energiához és sok máshoz.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Tanuld meg, hogyan működik az infláció",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Hogyan nyomtasd és tedd ki ezeket a Bitcoin szórólapokat",
	"flyers::flyers_hero_subtitle":
		"Ingyenes, nyomtatható Bitcoin szórólapok. Tedd ki őket nyilvános helyekre, hogy több ember megismerje a Bitcoint.",
	"flyers::flyers_hero_title":
		"Nyomtass és tegyél ki Bitcoin szórólapokat",
	"flyers::flyers_next_get_stickers":
		"Terjeszd az üzenetet még messzebb",
	"flyers::flyers_next_get_stickers_desc":
		"Kérj egy ingyenes csomag Bitcoin matricát",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Csatlakozz, és segíts terjeszteni a Bitcoint",
	"get-involved::get_involved_business_content_1":
		"Szeretnél hozzájárulni egy körkörös Bitcoin-gazdaság építéséhez? A legegyszerűbb módja az, hogy segítesz a helyi vállalkozásoknak elkezdeni a Bitcoin-fizetések elfogadását.",
	"get-involved::get_involved_business_content_2":
		"Ismersz egy vállalkozást, amelyik elkezdhetné? Küldd a tulajdonost a",
	"get-involved::get_involved_business_content_3":
		"Bitcoin a vállalkozásoknak oldalra.",
	"get-involved::get_involved_description":
		"Ingyenes eszközeink megkönnyítik a Bitcoin elfogadottságának terjesztését. Matricák, szórólapok, „Bitcoin Accepted Here\u201D matricák vállalkozásoknak, és nyílt forráskód, amelyhez bárki hozzájárulhat.",
	"get-involved::get_involved_header":
		"Csatlakozz, és segíts terjeszteni a Bitcoint.",
	"get-involved::get_involved_intro_5":
		"Te is segíthetsz változtatni ezen. Készítettünk néhány ingyenes eszközt, amelyek segítenek a közösségedben terjeszteni a Bitcoinról szóló reményt.",
	"get-involved::get_involved_biz_stickers_note":
		"Már elfogadod a Bitcoint? Mondd el a vásárlóidnak ingyenes „Bitcoin Accepted Here\u201D matricáinkkal. Egy csomagot ingyen küldünk bármely amerikai vagy kanadai címre, vagy magad is kinyomtathatod bárhol a világon.",
	"get-involved::get_involved_card_biz_stickers_label":
		"„Accepted Here\u201D matricák",
	"get-involved::get_involved_card_biz_stickers_source":
		"Forrás: bitcoin.rocks ←",
	"get-involved::get_involved_card_biz_stickers_title":
		"Ingyenes „Bitcoin Accepted Here\u201D matricák a vállalkozásodnak",
	"get-involved::get_involved_card_business_label":
		"Bitcoin a vállalkozásoknak",
	"get-involved::get_involved_card_business_source":
		"Forrás: bitcoin.rocks ←",
	"get-involved::get_involved_card_business_title":
		"Minden, ami egy vállalkozásnak kell a Bitcoin-fizetések elfogadásához",
	"get-involved::get_involved_card_flyers_label":
		"Nyomtatható szórólapok",
	"get-involved::get_involved_card_flyers_source":
		"Forrás: bitcoin.rocks ←",
	"get-involved::get_involved_card_flyers_title":
		"Tölts le és nyomtass ingyenes Bitcoin szórólapokat",
	"get-involved::get_involved_card_github_label": "Nyílt forráskód",
	"get-involved::get_involved_card_github_source":
		"Forrás: GitHub ←",
	"get-involved::get_involved_card_github_title":
		"Járulj hozzá a bitcoin.rocks fejlesztéséhez a GitHubon",
	"get-involved::get_involved_card_stickers_label":
		"Ingyenes matricák",
	"get-involved::get_involved_card_stickers_source":
		"Forrás: bitcoin.rocks ←",
	"get-involved::get_involved_card_stickers_title":
		"Kérj egy ingyenes csomag Bitcoin matricát házhozszállítással",
	"get-involved::get_involved_flyers_content_1":
		"A szórólapok a legegyszerűbb módja annak, hogy a Bitcoint bemutasd a közösségednek. Töltsd le az ingyenes Bitcoin szórólapunkat, nyomtass annyi példányt, amennyit szeretnél, és tedd ki őket hirdetőtáblákra, kávézókba, rendezvényekre, vagy bárhová, ahol az emberek összegyűlnek.",
	"get-involved::get_involved_flyers_content_2":
		"Minden szórólapnak figyelemfelkeltő címe és QR-kódja van, amely a kíváncsi olvasókat a bitcoin.rocks oldalra vezeti, hogy többet tudjanak meg.",
	"get-involved::get_involved_flyers_content_3":
		"A matricákkal ellentétben a szórólapok igény szerint nyomtathatók bárhol a világon — csak egy nyomtatóra és néhány percre van szükséged.",
	"get-involved::get_involved_flyers_header":
		"Nyomtass és tegyél ki szórólapokat",
	"get-involved::get_involved_flyers_image_alt":
		"Az ingyenes nyomtatható Bitcoin szórólap előnézete a bitcoin.rocks oldalon",
	"get-involved::get_involved_github_content_1":
		"A bitcoin.rocks ingyenes, nyílt forráskódú projekt MIT licenc alatt. Küldetésünk a Bitcoin elfogadottságának felgyorsítása az oktatáson keresztül — és ezt nem tudjuk egyedül megcsinálni.",
	"get-involved::get_involved_github_content_2":
		"Ha fejlesztő, tervező, író vagy fordító vagy, van mód arra, hogy segíts. Különösen olyan embereket keresünk, akik le tudják fordítani a tartalmunkat több nyelvre, hogy az emberek világszerte az anyanyelvükön tanulhassanak a Bitcoinról.",
	"get-involved::get_involved_github_content_3":
		"Forkold a repositoryt, nyiss pull requestet, jelents egy issue-t, vagy adj csillagot a projektnek. Minden hozzájárulás segít abban, hogy a Bitcoin több emberhez eljusson.",
	"get-involved::get_involved_github_header":
		"Járulj hozzá a GitHubon",
	"get-involved::get_involved_sticker_image_alt":
		"Egy csomag ingyenes Bitcoin matrica a bitcoin.rocks felirattal",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "MEGTAKARÍTÁS",
	"index::home_card_label_art_1": "Hasonlítsuk össze",
	"index::home_card_label_art_2": "Terjeszd az üzenetet",
	"index::home_card_label_art_3": "Utcai művészet",
	"index::home_card_label_bank_runs": "Teljes tartalékos rendszer",
	"index::home_card_label_bonds": "Hasonlítsuk össze",
	"index::home_card_label_business_1": "Mi a különbség?",
	"index::home_card_label_business_2": "Fogadj el Bitcoin-fizetéseket",
	"index::home_card_label_cash": "Hasonlítsuk össze",
	"index::home_card_label_cbdc": "Nyitott vagy zárt?",
	"index::home_card_label_coding_1": "Interaktív útmutató",
	"index::home_card_label_coding_2": "Építs hardvert",
	"index::home_card_label_coding_3": "Programozási rejtvények",
	"index::home_card_label_crowdfunding_1": "EndSARS tüntetések",
	"index::home_card_label_crowdfunding_2":
		"Megállíthatatlan pénz",
	"index::home_card_label_crowdfunding_3": "Finanszírozd a projektedet",
	"index::home_card_label_crypto": "Mi a különbség?",
	"index::home_card_label_energy_1": "Hálózati stabilizáció",
	"index::home_card_label_energy_4": "Igényre adott válasz",
	"index::home_card_label_energy_5": "Vidéki villamosítás",
	"index::home_card_label_energy_6":
		"Megújuló energia ösztönzése",
	"index::home_card_label_environment_1":
		"Metánkibocsátás csökkentése",
	"index::home_card_label_environment_2":
		"Egy nemzeti park megmentése",
	"index::home_card_label_environment_3":
		"A legzöldebb iparág",
	"index::home_card_label_environment_4": "Kevesebb fáklyázott gáz",
	"index::home_card_label_equality_1": "Remény és lehetőség",
	"index::home_card_label_equality_2": "Játékszabály-változtató",
	"index::home_card_label_food_1": "Élelmiszerárak",
	"index::home_card_label_food_2": "Gazdaságok és talaj",
	"index::home_card_label_freedom_1": "Tirannikus rezsimek",
	"index::home_card_label_freedom_2": "Egyedülálló eszköz",
	"index::home_card_label_get_started_1":
		"Alapok kezdőknek",
	"index::home_card_label_get_started_2": "Az első pénztárcád",
	"index::home_card_label_get_started_3": "Vásárolj Bitcoint",
	"index::home_card_label_gold": "Melyik a jobb?",
	"index::home_card_label_housing_1": "Megfizethető lakhatás",
	"index::home_card_label_human_rights_1":
		"Emberi jogok előmozdítása",
	"index::home_card_label_human_rights_2":
		"Elfogadás a terepen",
	"index::home_card_label_human_rights_3": "Globális hatás",
	"index::home_card_label_inflation": "A Bitcoin jobb pénz",
	"index::home_card_label_networks_1": "Hálózat élő áttekintés",
	"index::home_card_label_networks_2": "Hasonlítsuk össze",
	"index::home_card_label_payments_1": "Mi a különbség?",
	"index::home_card_label_payments_2":
		"Gyors és olcsó fizetések",
	"index::home_card_label_payments_3": "Pénzátutalások",
	"index::home_card_label_payments_4": "Fogadj fizetéseket",
	"index::home_card_label_politics_1": "Politikai paradoxon",
	"index::home_card_label_politics_2": "Cselekedj",
	"index::home_card_label_property_rights_1": "Hasonlítsuk össze",
	"index::home_card_label_property_rights_2": "Valódi tulajdon",
	"index::home_card_label_salary": "Védd meg a fizetésedet",
	"index::home_card_label_self_custody_1":
		"Útmutató Bitcoin pénztárcákhoz",
	"index::home_card_label_self_custody_2": "A legfontosabb lépés",
	"index::home_card_label_self_custody_3": "Szuverén pénz",
	"index::home_card_label_war_1":
		"A végtelen háború vége",
	"index::home_card_label_war_2": "Veteránok segítése",
	"index::home_card_label_war_3": "Menekülés háborús időkben",
	"index::home_h1":
		"A Bitcoin jobb pénz, amely jobb világot épít.",
	"index::home_nav_about": "Rólunk",
	"index::home_nav_get_involved": "Csatlakozz",
	"index::home_nav_learn": "Tanulj",
	"index::home_source_prefix": "Forrás:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon és Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Nézd meg a",
	"lightning::lightning_grid_heading":
		"Népszerű Lightning pénztárcák",
	"lightning::lightning_hardware_cta_label":
		"Hardveres pénztárcák",
	"lightning::lightning_header_subtitle":
		"A Lightning lehetővé teszi, hogy másodpercek alatt Bitcoint küldj kevesebb mint egy centért — válaszd ki a megfelelő pénztárcát ahhoz az összeghez, amelyet el szeretnél költeni.",
	"lightning::lightning_s1_c4_end":
		"hogy többet tudj meg.",
	"lightning::lightning_s1_c4_link":
		"Bitcoin hardveres pénztárcákhoz szóló útmutatónkat",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning pénztárca",
	"lightning::sources_breez_lightning":
		"Breez — saját megőrzésű Lightning pénztárca",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning Network dokumentáció",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — letétkezelői Lightning pénztárca",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android és web",
	"nostr/index::nostr_platform_web": "Webböngésző",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"A Nostr egy új, decentralizált kommunikációs protokoll az interneten — nem tulajdona egyetlen vállalatnak sem, beépített Bitcoin-zapokkal rendelkezik, és a követőid elvesztése nélkül válthatsz klienseket.",
	"nostr/index::nostr_amethyst_f1":
		"Sok funkció és testreszabási lehetőség",
	"nostr/index::nostr_amethyst_f2":
		"Külön Bitcoin pénztárca szükséges",
	"nostr/index::nostr_amethyst_f3": "100 % ingyenes",
	"nostr/index::nostr_damus_f1":
		"Twitter-szerű, ismerős felület",
	"nostr/index::nostr_damus_f2":
		"Külön Bitcoin pénztárca szükséges",
	"nostr/index::nostr_damus_f3": "100 % ingyenes",
	"nostr/index::nostr_download_heading":
		"Tölts le egy ingyenes Nostr klienst",
	"nostr/index::nostr_download_intro":
		"A Nostr kliensek ingyenes alkalmazások, amelyek lehetővé teszik az olvasást és írást a Nostr hálózaton. Mind együtt működnek — bármikor válthatsz klienst, és megtarthatod a követőidet és a tartalmadat.",
	"nostr/index::nostr_hero_subtitle":
		"A Nostr egy új, decentralizált kommunikációs protokoll az interneten — nem tulajdona egyetlen vállalatnak sem, beépített Bitcoin-zapokkal rendelkezik, és a követőid elvesztése nélkül válthatsz alkalmazást.",
	"nostr/index::nostr_hero_title": "Mi az a Nostr?",
	"nostr/index::nostr_intro_c1":
		"A Nostr olyan, mint az e-mail: senki nem tulajdonosa a protokollnak, bárki építhet rá alkalmazásokat, és te választod meg, melyik felel meg neked legjobban. A Twitterrel vagy Facebookkal ellentétben nincs központi vállalat, amely cenzúrázhatná, lezárhatná vagy elhallgathatná a fiókjaidat.",
	"nostr/index::nostr_intro_c2":
		"Az alábbi összefoglaló elmondja, miért fontos a Nostr — és aztán minden ingyenes Nostr klienst, amelyre szükséged van, hogy még ma elkezdd.",
	"nostr/index::nostr_iris_f1":
		"Nagyon könnyű — nem kell telepíteni",
	"nostr/index::nostr_iris_f2":
		"Egyszerű módja a Nostr kipróbálásának próbafiókkal",
	"nostr/index::nostr_iris_f3": "100 % ingyenes",
	"nostr/index::nostr_learn_more_label":
		"Tudj meg többet részletesen",
	"nostr/index::nostr_learn_more_title":
		"Tudj meg többet a Nostrról a nostr.how oldalon",
	"nostr/index::nostr_primal_f1":
		"A mi első számú ajánlott kliensünk",
	"nostr/index::nostr_primal_f2":
		"Beépített pénztárca a Bitcoin-zapokhoz",
	"nostr/index::nostr_primal_f3": "100 % ingyenes",
	"nostr/index::nostr_s1": "Protokoll, nem platform",
	"nostr/index::nostr_s1_c1":
		"A Nostr egy új protokoll, amely lehetővé teszi az interneten való kommunikációt cenzúra, tiltás vagy elhallgatás félelme nélkül.",
	"nostr/index::nostr_s1_c2":
		"Az olyan platformokat, mint a Twitter vagy a Facebook, egy vállalat irányítja, de a Nostr protokollt senki sem irányítja.",
	"nostr/index::nostr_s2": "Mozgásszabadság",
	"nostr/index::nostr_s2_c1":
		"A Nostr olyan, mint az e-mail. Senki nem irányítja az e-mail protokollt, és bárki építhet klienst (mint a Gmail, Hotmail stb.).",
	"nostr/index::nostr_s2_c2":
		"A Nostr protokollt sem irányítja senki, és bárki építhet klienst (mint a Damus, Amethyst stb.).",
	"nostr/index::nostr_s2_c3":
		"Ha nem tetszik, ahogy egy kliens működik, áthelyezheted a Nostr fiókodat egy másik kliensbe a követőid vagy a tartalmad elvesztése nélkül.",
	"nostr/index::nostr_s3": "Beépített Bitcoin",
	"nostr/index::nostr_s3_c1":
		"A Bitcoin be van építve a Nostr protokollba. Ha olyan tartalmat látsz, amely tetszik, küldhetsz egy „Bitcoin zapot\u201D, hogy megköszönd a szerzőnek.",
	"nostr/index::nostr_s3_c2":
		"Az olyan központosított platformokon, mint a Twitter és a Facebook, a központi vállalat keres a tartalmadon. De egy nyílt protokollon, mint a Nostr, te keresel a saját tartalmadon.",
	"nostr/index::sources_damus":
		"Damus — Nostr kliens iPhone-ra",
	"nostr/index::sources_iris":
		"Iris — Nostr kliens webböngészőre",
	"nostr/index::sources_nostr_how": "nostr.how — mi az a Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr protokoll — nyílt forráskódú specifikációk",
	"nostr/index::sources_primal":
		"Primal — Nostr kliens beépített pénztárcával Bitcoin-zapokhoz",
	"nostr/index::what_is_nostr": "Mi az a Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Nyomtasd ki a saját Bitcoin matricáidat ezekkel a fájlokkal.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Kérés megérkezett 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Rendelj nagy tételben",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Oszd meg a Nostron",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Mi az a Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Több matricára van szükséged?",
	"sticker-success::sticker_success_hero_title":
		"A matricáid úton vannak 🎉",
	"sticker-success::sticker_success_share_header":
		"Oszd meg, hová ragasztottad a matricáidat",
	"sticker-success::sticker_success_tips_header":
		"Jó helyek matricák ragasztásához",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"És miután elkezdted, ",
	"stickers::stickers_instructions_1":
		"Add meg a postacímedet, és küldünk egy csomag ingyenes Bitcoin matricát. A matricáid egy egyszerű fehér borítékban érkeznek.",
	"stickers::stickers_btn_choose_pack": "Válaszd ezt a csomagot",
	"stickers::stickers_bulk_c1":
		"Több mint néhány matricára van szükséged?",
	"stickers::stickers_bulk_c2":
		"Rendelj nagy tételben attól a nyomdától, amelyet mi is használunk",
	"stickers::stickers_bulk_c3":
		" — minél többet vásárolsz, annál olcsóbb darabonként.",
	"stickers::stickers_bulk_cta": "Vásárolj matricákat nagy tételben",
	"stickers::stickers_bulk_header":
		"Rendelj matricákat nagy tételben",
	"stickers::stickers_hero_subtitle":
		"Kérj egy ingyenes csomag Bitcoin matricát, és tedd ki őket nyilvános helyekre, hogy több ember tanulhasson a Bitcoinról.",
	"stickers::stickers_hero_title": "Ingyenes Bitcoin matricák",
	"stickers::stickers_intro_c1":
		"Küldetésünk, hogy segítsünk neked „narancssárgára pirítani\u201D több embert matricáink segítségével — Bitcoin matricákat helyezve nyilvános helyekre. Minden matricánkon QR-kódok vannak, amelyek olyan oktatási oldalakra vezetnek, mint az",
	"stickers::stickers_intro_c3": "infláció",
	"stickers::stickers_intro_c4":
		"Válassz ki egy csomag matricát alább, és válaszd ki, hogyan szeretnéd — ingyen küldünk egy csomagot bárkinek az USA-ban vagy Kanadában, vagy magad is kinyomtathatod a matricáidat bárhol a világon.",
	"stickers::stickers_mail_header":
		"Ingyen küldünk matricákat",
	"stickers::stickers_next_print_flyers":
		"Terjeszd az üzenetet még messzebb",
	"stickers::stickers_next_print_flyers_desc":
		"Nyomtass ingyenes Bitcoin szórólapokat, és tedd ki őket nyilvános helyekre",
	"stickers::stickers_option_bulk":
		"📦 Globális — rendelj nagy tételben",
	"stickers::stickers_option_canada":
		"🇨🇦 Kanada — ingyenes postázás",
	"stickers::stickers_option_print":
		"🌍 Globális — saját nyomtatás",
	"stickers::stickers_option_usa":
		"🇺🇸 USA — ingyenes postázás",
	"stickers::stickers_print_c1":
		"Hozzájárulhatsz azzal, hogy magad nyomtatsz matricákat bárhol a világon, ahol élsz. Kattints a nyelvedre alább, hogy letöltsd a matricafájlokat és a nyomtatási útmutatót.",
	"stickers::stickers_print_c2":
		"Nem minden matrica érhető el minden nyelven.",
	"stickers::stickers_print_header":
		"Nyomtasd ki a saját matricafájljaidat",
	"stickers::stickers_request_c1":
		"Töltsd ki az alábbi űrlapot, hogy a saját nyelveden kérj matricafájlokat. Tudatjuk veled, amint elkészülnek.",
	"stickers::stickers_request_header":
		"Nem látod a nyelvedet?",
	"stickers::stickers_share_c2":
		"Kövess minket a Nostron, ha bármelyik Nostr kliensben rákeresel",
	"stickers::stickers_share_c3": ".",
	"stickers::stickers_signs_pack_description":
		"Figyelmeztető, óvó és értesítő matricák Bitcoin üzenetekkel — úgy tervezve, hogy felkeltsék a figyelmet és megállítsák az embereket.",
	"stickers::stickers_step_1_description":
		"Minden csomag különböző Bitcoin matrica-gyűjteményt tartalmaz QR-kódokkal, amelyek a Bitcoinról oktatják az embereket.",
	"stickers::stickers_step_1_eyebrow": "1. lépés",
	"stickers::stickers_step_1_header":
		"Válassz egy csomag matricát",
	"stickers::stickers_step_2_description":
		"Ingyen csomagokat küldünk amerikai és kanadai címekre. A világ többi részén magad is nyomtathatod a matricákat, vagy nagy tételben rendelheted.",
	"stickers::stickers_step_2_eyebrow": "2. lépés",
	"stickers::stickers_step_2_header":
		"Hogyan szeretnéd a matricáidat?",
	"stickers::stickers_text_pack_description":
		"Bitcoin szlogenek és vidám ötletek keveréke, úgy tervezve, hogy kíváncsiságot keltsen a nyilvános helyeken.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — válaszd ki a pénztárcádat",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Bitcoin seed-tárolási fémeszközök tesztjei",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — saját megőrzésű Bitcoin pénztárca",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin hardveres pénztárca",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 hardveres pénztárca",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q hardveres pénztárca",
	"wallets::sources_passport":
		"Foundation Devices — Passport hardveres pénztárca",
	"wallets::sources_seedsigner":
		"SeedSigner — DIY nyílt forráskódú Bitcoin tranzakcióaláíró eszköz",
	"wallets::wallets_grid_heading":
		"Népszerű Bitcoin pénztárcák",
	"wallets::wallets_header_subtitle":
		"Lépésről lépésre szóló útmutató a pénztárca kiválasztásához, a kulcsok biztonsági mentéséhez és a Bitcoinod feletti teljes irányítás megszerzéséhez.",
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
			missing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part2 (hu): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
