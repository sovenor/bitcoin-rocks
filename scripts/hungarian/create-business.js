/**
 * Creates Hungarian (hu) translation files for all business/ pages
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

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "A Bitcoin jó az üzletnek",
	"biz_header": "A BITCOIN JÓ AZ ÜZLETNEK",
	"biz_s1": "Alacsony díjak minimumköltség nélkül",
	"biz_s1_c1": "A Bitcoin lehetővé teszi, hogy közvetlenül fogadj fizetéseket az ügyfelektől, hasonlóan a készpénzhez. A Bitcoin hálózat közvetítők nélkül működik, mint bankok és hitelkártya-társaságok, amelyek magas díjakat számolnak fel.",
	"biz_s2": "Azonnali elszámolás",
	"biz_s2_c1": "A készpénzhez hasonlóan a Bitcoin fizetések azonnal elszámolódnak. Nem kell megvárnod, hogy a hitelkártya-társaság vagy a bankod kifizessen. Ehelyett azonnal hozzáférsz a pénzedhez.",
	"biz_s3": "Nincs visszaterhelés és csalás",
	"biz_s3_c1": "Mivel a Bitcoin fizetések közvetlenül közted és az ügyfeleid között történnek, senki nem vonhatja vissza a pénzt visszaterheléssel.",
	"biz_s3_c2": "Hamis Bitcoint nem lehet küldeni a Bitcoin hálózaton, ami azt jelenti, hogy soha nem kell aggódnod a csalárd tranzakciók miatt, amelyek pénzbe kerülhetnek a vállalkozásodnak.",
	"biz_s4": "Több ügyfél",
	"biz_s4_c1": "Több millió ember rendelkezik Bitcoinnal, és olyan helyeken szeretné elkölteni, amelyek elfogadják azt.",
	"biz_s4_c2": "A Bitcoin elfogadásával vállalkozásod felkerülhet a Bitcoin kereskedők térképére, és ingyenes reklámot kaphatsz új ügyfelek felé.",
	"biz_s4_c3": "A Bitcoin elfogadása 100%-ban ingyenes. Nincsenek szerződések és rejtett díjak."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Tudd meg, miért jó a Bitcoin az üzletnek",
	"why_header": "A BITCOIN JÓ AZ ÜZLETNEK",
	"why_good_for_you": "A BITCOIN NEKED IS JÓ!",
	"why_learn_more_lowercase": "Tudj meg többet.",
	"why_s1": "A Bitcoinnak nincs inflációja",
	"why_s1_c1": "Az infláció akkor következik be, amikor több pénzt nyomtatnak vagy teremtenek a semmiből. Ez idővel csökkenti a pénzed értékét.",
	"why_s1_c2": "A Bitcoinnak fix kínálati határa van, ami azt jelenti, hogy senki sem tud több Bitcoint nyomtatni.",
	"why_s2": "A Bitcoinnak nincsenek bankpánikjai",
	"why_s2_c1": "Több amerikai bank is összeomlott bankpánik miatt az elmúlt években.",
	"why_s2_c2": "Ahelyett, hogy egyszerűen megőriznék a pénzedet, a bankok befektetik és kölcsönadják. Ha ezek a befektetések nem jönnek be, nem lesz elég pénzük, hogy visszaadják a tiedet.",
	"why_s2_c3": "Az FDIC biztosítási alapjában mindössze 1 dollár jut minden biztosított 100 dollárra.",
	"why_s3": "A Bitcoin engedély nélkül használható",
	"why_s3_c1": "A hagyományos pénzügyi hálózatokkal ellentétben a Bitcoin használatához nincs szükség engedélyre.",
	"why_s3_c2": "Ez azt jelenti, hogy senki sem akadályozhatja meg a Bitcoin használatát semmilyen okból. Ez az első pénzügyi hálózat, amelyet cenzúra vagy elkobzás miatti aggodalom nélkül használhatsz.",
	"why_s4": "A Bitcoin egy jobb világot épít",
	"why_s4_c1": "A Bitcoin egy félreértett technológia, amely egy jobb világot épít.",
	"why_s4_c2": "A Bitcoin lehetővé tette az emberi jogi aktivisták számára a szabadságért való küzdelmet, csökkentette a globális metánkibocsátást, megmentett nemzeti parkokat és még sok mást tett."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Fogadj Bitcoin fizetéseket a vállalkozásodban",
	"guide_header": "KÉSZEN ÁLLSZ A BITCOIN ELFOGADÁSÁRA A VÁLLALKOZÁSODBAN?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Gyakran ismételt kérdések a Bitcoin elfogadásáról",
	"faq_description": "Kérdéseid vannak a Bitcoin fizetések elfogadásáról a vállalkozásodban?",
	"faq_header": "KÉRDÉSEID VANNAK A BITCOIN FIZETÉSEK ELFOGADÁSÁRÓL?",
	"faq_s1": "Mi az a Bitcoin?",
	"faq_s1_c1": "A Bitcoin két dolog: digitális pénz és számítógépes hálózat.",
	"faq_s1_c2": "Közvetlenül küldhetsz bitcoint (digitális pénzt) más embereknek a Bitcoin hálózat segítségével.",
	"faq_s1_c3": "A Bitcoin hálózat közvetítők vagy központi hatóságok, mint bankok vagy hitelkártya-társaságok nélkül működik, így elkerülheted a tranzakciós díjaikat.",
	"faq_s1_c4": "A Bitcoin tranzakciók gyorsan (10 perc) érik el a végleges elszámolást, és soha nem fordíthatók vissza, így nyugodtan alhatsz abban a tudatban, hogy a pénzed valóban a tied.",
	"faq_s2": "Hogyan segítheti a Bitcoin a vállalkozásomat?",
	"faq_s2_c1": "A Bitcoin lehetővé teszi, hogy alacsonyabb díjakkal fogadj fizetéseket és több ügyfelet szerezz. A Bitcoin fizetések alacsony díjakkal járnak minimumköltség nélkül, azonnal elszámolódnak, és immunisak a visszaterhelésekre és csalásokra.",
	"faq_s2_c2": "A Bitcoin elfogadása ingyenes, és lehetővé teszi, hogy felkerülj a Bitcoin kereskedők térképére, így a Bitcoin felhasználók könnyen megtalálhatnak.",
	"faq_s2_c3": "Nézd meg, milyen módokon jó a Bitcoin az üzletnek.",
	"faq_s3": "Hogyan fogadhatok Bitcoin fizetéseket?",
	"faq_s3_c1": "A Bitcoin fizetések fogadásához mindössze egy ingyenes Bitcoin tárcára van szükséged.",
	"faq_s3_c2": "Tárca-útmutatónk segít gyorsan és egyszerűen elkezdeni, hogy még ma kihasználhasd a Bitcoin fizetések előnyeit!",
	"faq_s3_c3": "Tárca-útmutató megtekintése",
	"faq_s4": "Átválthatom a kapott Bitcoin fizetéseket a helyi valutámra?",
	"faq_s4_c1": "Igen! Egy hibrid tárcával automatikusan és azonnal átválthatod a kapott Bitcoin fizetéseket a helyi valutádra, amint a fizetés beérkezik.",
	"faq_s4_c2": "Tárca-útmutatónk segít gyorsan és egyszerűen elkezdeni.",
	"faq_s4_c3": "Választhatod azt is, hogy a beérkező fizetések egy részét Bitcoinban tartod. A Bitcoinban való megtakarításnak számos előnye van:",
	"faq_s4_c4": "A Bitcoin egy teljes tartalékú pénzügyi rendszer.",
	"faq_s4_c5": "A Bitcoinnak nincs inflációja.",
	"faq_s4_c6": "Ezek az előnyök kiválóvá teszik a Bitcoint a pénz hosszú távú tárolására.",
	"faq_s4_c7": "Még ha úgy is döntesz, hogy minden Bitcoin fizetést átváltasz helyi valutára, akkor is élvezheted a sokkal alacsonyabb díjakat és a több potenciális ügyfelet.",
	"faq_s5": "Fogadhatok Bitcoin fizetéseket személyesen?",
	"faq_s5_c1": "Igen! A Bitcoin fizetések személyes fogadása egyszerű egy Bitcoin tárcával.",
	"faq_s5_c2": "Tárca-útmutatónk segít kiválasztani a vállalkozásodhoz legmegfelelőbbet.",
	"faq_s5_c3": "Tárca-útmutató megtekintése",
	"faq_s6": "Fogadhatok online Bitcoin fizetéseket?",
	"faq_s6_c1": "Igen! Számos Bitcoin tárca és fizetési feldolgozó támogatja az online Bitcoin fizetéseket.",
	"faq_s6_c2": "Az online Bitcoin fizetések hasonlóan működnek, mint a hitelkártyás fizetések, de alacsonyabb díjakkal, nincs visszaterhelés és azonnali elszámolással.",
	"faq_s6_c3": "Tekintsd meg az üzleti tárca útmutatónkat a lehetőségekért.",
	"faq_s7": "Hogyan tudathatom az ügyfelekkel, hogy elfogadok Bitcoint?",
	"faq_s7_c1": "Számos módon tudathatod ügyfeliddel, hogy elfogadod a Bitcoint:",
	"faq_s7_c2": "Kérj ingyenes \"Bitcoin elfogadóhely\" matricákat.",
	"faq_s7_c3": "Kerülj fel a Bitcoin kereskedők térképére.",
	"faq_s7_c4": "Nyomtass ki egy Bitcoin üzleti csomagot, amelyet megjeleníthetsz a vállalkozásodban.",
	"faq_s8": "Hogyan szerezhetek több ügyfelet a Bitcoinnal?",
	"faq_s8_c1": "A Bitcoin elfogadásával felkerülhetsz a Bitcoin kereskedők térképére, amely segít a Bitcoin felhasználóknak megtalálni a vállalkozásodat.",
	"faq_s8_c2": "Millió Bitcoin felhasználó aktívan keres Bitcoin-barát vállalkozásokat, ahol elkölthetik a bitcoinjukat.",
	"faq_s8_c3": "Kerülj fel a Bitcoin kereskedők térképére.",
	"faq_s9": "Mennyibe kerül a Bitcoin elfogadása?",
	"faq_s9_c1": "A Bitcoin elfogadása teljesen ingyenes. Nincsenek szerződések, havi díjak vagy rejtett költségek.",
	"faq_s9_c2": "A Bitcoin tranzakciós díjak általában sokkal alacsonyabbak, mint a hitelkártya feldolgozási díjak, különösen a Lightning hálózattal, amely szinte nulla díjas fizetéseket tesz lehetővé.",
	"faq_s9_c3": "Mindössze egy ingyenes Bitcoin tárca kell az induláshoz."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"business_bitcoin_wallet_guide": "Üzleti Bitcoin tárca útmutató",
	"biz_wallets_description": "Válaszd ki a vállalkozásodnak megfelelő Bitcoin tárcát.",
	"biz_wallets_header": "ÜZLETI BITCOIN TÁRCA ÚTMUTATÓ",
	"biz_wallets_intro": "A vállalkozásodnak megfelelő Bitcoin tárca kiválasztása néhány kulcsfontosságú kérdéstől függ.",
	"biz_wallets_s1": "SZERETNÉD AUTOMATIKUSAN ÁTVÁLTANI A BITCOINT HELYI VALUTÁRA?",
	"biz_wallets_s1_c1": "Egyes vállalkozások a kapott Bitcoin fizetéseket automatikusan átváltják helyi valutájukra. Ez minimalizálja a Bitcoin árfolyam-ingadozásnak való kitettséget.",
	"biz_wallets_s1_c2": "Más vállalkozások úgy döntenek, hogy a Bitcoint megtartják, mert hosszú távon egy fix kínálatú eszköz, amelyet nem lehet inflálni.",
	"biz_wallets_s2": "SZÜKSÉGED VAN SZEMÉLYES ÉS/VAGY ONLINE FIZETÉSEKRE?",
	"biz_wallets_s2_c1": "Egyes tárcák személyes fizetésekre, mások online fizetésekre, megint mások mindkettőre optimalizáltak.",
	"biz_wallets_category_hybrid": "HIBRID TÁRCÁK",
	"biz_wallets_category_hybrid_c1": "A hibrid tárcák lehetővé teszik a Bitcoin és a helyi valuta közötti azonnali átváltást.",
	"biz_wallets_category_self_custody": "ÖNÁLLÓ MEGŐRZÉSŰ TÁRCÁK",
	"biz_wallets_category_self_custody_c1": "Az önálló megőrzésű tárcák teljes irányítást biztosítanak a Bitcoin fizetéseid felett.",
	"biz_wallets_auto_convert": "Automatikus átváltás helyi valutára",
	"biz_wallets_in_person": "Személyes fizetések",
	"biz_wallets_online": "Online fizetések",
	"biz_wallets_full_control": "Teljes irányítás a pénzed felett",
	"biz_wallets_no_convert": "Nincs automatikus átváltás",
	"biz_wallets_free": "Ingyenesen használható"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"get_listed_on_bitcoin_merchant_maps": "Kerülj fel a Bitcoin kereskedők térképére",
	"maps_description": "Kerülj fel a Bitcoin kereskedők térképére, és juttasd el a Bitcoin felhasználókat a vállalkozásodhoz.",
	"maps_header": "KERÜLJ FEL A BITCOIN KERESKEDŐK TÉRKÉPÉRE",
	"maps_intro_1": "A Bitcoin kereskedők térképére felkerülve a Bitcoin felhasználók megtalálhatják a vállalkozásodat, amikor Bitcoin-barát helyeket keresnek.",
	"maps_intro_2": "A népszerű Bitcoin kereskedők térképén való megjelenés ingyenes, és segít a Bitcoin felhasználóknak megtalálni és támogatni a vállalkozásodat.",
	"maps_add_yourself": "Add hozzá magad ezekhez a térképekhez:",
	"maps_btcmap": "BTC Térkép",
	"maps_btcmap_c1": "A BTC Map egy nyílt forráskódú térkép, amely Bitcoin-barát vállalkozásokat mutat világszerte.",
	"maps_form_header": "SEGÍTSÉGRE VAN SZÜKSÉGED A TÉRKÉPEKRE KERÜLÉSHEZ?",
	"maps_form_intro": "Töltsd ki az alábbi űrlapot, és mi felvesszük a vállalkozásodat a népszerű Bitcoin kereskedők térképeire."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"maps_success_1": "Felvettük a vállalkozásodat a listánkra. Hamarosan felkerülsz a Bitcoin kereskedők térképére!"
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"biz_stickers_title": "Ingyenes \"Bitcoin elfogadóhely\" matricák",
	"biz_stickers_description": "Kérj ingyenes \"Bitcoin elfogadóhely\" matricákat a vállalkozásodnak.",
	"biz_stickers_header": "INGYENES \"BITCOIN ELFOGADÓHELY\" MATRICÁK",
	"biz_stickers_intro": "Tudasd ügyfeleiddel, hogy elfogadod a Bitcoint! Ingyen küldünk neked \"Bitcoin elfogadóhely\" matricákat.",
	"biz_stickers_instructions": "Add meg a levelezési címedet, és ingyenesen küldünk neked \"Bitcoin elfogadóhely\" matricákat!",
	"biz_stickers_share_header": "OSZD MEG A MATRICÁIDAT",
	"biz_stickers_share_c1": "Oszd meg a matricáid fotóját velünk a Nostr-on!"
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"biz_sticker_success_1": "A \"Bitcoin elfogadóhely\" matricáidat 2-4 héten belül megkapod.",
	"biz_sticker_success_2": "Addig is nézd meg a többi ingyenes üzleti erőforrásunkat!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"biz_sticker_language_success_1": "Sikeresen megkaptuk a kérésedet.",
	"biz_sticker_language_success_2": "Az új fájlokat kötegekben tesszük közzé, ezért több hétbe is telhet, mire elérhetők lesznek. Nézz vissza hamarosan!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Nyomtasd ki a saját Bitcoin üzleti csomagodat",
	"kit_description": "Nyomtass ki egy Bitcoin üzleti csomagot, és segíts egy helyi vállalkozásnak elfogadni a Bitcoin fizetéseket.",
	"kit_header": "BITCOIN ÜZLETI CSOMAG NYOMTATÁSA",
	"kit_intro_1": "A Bitcoin üzleti csomag egy egyszerű módja annak, hogy bemutasd a Bitcoint egy helyi vállalkozásnak.",
	"kit_intro_2": "Nyomtasd ki a csomagot, és add oda egy helyi vállalkozás tulajdonosának, hogy megismerje a Bitcoin elfogadásának előnyeit."
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_1": "Köszönjük, hogy segítesz a helyi vállalkozásoknak elfogadni a Bitcoint!",
	"kit_success_2": "Oszd meg a tapasztalataidat velünk a Nostr-on!"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_accounting_guide": "Bitcoin könyvelési útmutató",
	"accounting_description": "Tudd meg, hogyan kezeld a Bitcoin könyvelést a vállalkozásodban.",
	"accounting_header": "BITCOIN KÖNYVELÉSI ÚTMUTATÓ",
	"accounting_intro": "A Bitcoin elfogadása a vállalkozásodban könyvelési szempontokat vet fel. Ez az útmutató segít megérteni az alapokat.",
	"accounting_s1": "BITCOIN KÖNYVELÉS ALAPJAI",
	"accounting_s1_c1": "Sok országban a Bitcoint tulajdonként vagy eszközként kezelik adózási szempontból. Ez azt jelenti, hogy amikor Bitcoint fogadsz fizetésként, rögzítened kell az értékét a beérkezéskor.",
	"accounting_s1_c2": "Fontos, hogy konzultálj egy helyi adószakértővel a Bitcoin fizetések specifikus adókezeléséről az országodban.",
	"accounting_s2": "AUTOMATIKUS ÁTVÁLTÁS",
	"accounting_s2_c1": "Ha hibrid tárcát használsz, amely automatikusan átváltja a Bitcoint helyi valutára, a könyvelés egyszerűbb, mivel minden tranzakciót helyi valutában rögzítesz.",
	"accounting_s3": "BITCOIN MEGTARTÁSA",
	"accounting_s3_c1": "Ha úgy döntesz, hogy megtartod a Bitcoint, nyomon kell követned az értékét a beérkezéskor és az eladáskor is, hogy kiszámolhasd az esetleges nyereséget vagy veszteséget."
});

// business/files/english/index
writeFile(`business/files/english/index_${lang}.json`, {
	"biz_files_title": "Bitcoin üzleti csomag fájlok",
	"biz_files_description": "Töltsd le a Bitcoin üzleti csomag nyomtatási fájlokat.",
	"biz_files_header": "BITCOIN ÜZLETI CSOMAG FÁJLOK LETÖLTÉSE"
});

console.log(`\nDone! Created 15 business files.`);
