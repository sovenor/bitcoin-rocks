/**
 * Creates Slovenian (sl) translation files for all business/ pages
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

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin je dober za podjetja",
	"biz_header": "BITCOIN JE DOBER ZA PODJETJA",
	"biz_s1": "Nizke provizije brez minimalnih omejitev",
	"biz_s1_c1": "Bitcoin vam omogoča sprejemanje plačil neposredno od strank, podobno kot gotovina. Omrežje Bitcoin deluje brez posrednikov, kot so banke in podjetja za kreditne kartice, ki zaračunavajo visoke provizije.",
	"biz_s2": "Takojšnja poravnava",
	"biz_s2_c1": "Tako kot gotovina se bitcoinova plačila poravnajo takoj. Ni vam treba čakati, da vam podjetje za kreditne kartice ali banka nakaže sredstva. Namesto tega dobite dostop do svojega denarja takoj.",
	"biz_s3": "Brez povratnih bremenitev ali goljufij",
	"biz_s3_c1": "Ker bitcoinova plačila potekajo neposredno med vami in vašimi strankami, vam nihče ne more vzeti denarja nazaj s povratno bremenitvijo.",
	"biz_s3_c2": "Lažnega Bitcoina ni mogoče poslati po omrežju Bitcoin, kar pomeni, da se vam ni treba nikoli bati goljufivih transakcij, ki bi vašemu podjetju povzročile stroške.",
	"biz_s4": "Pridobite več strank",
	"biz_s4_c1": "Milijoni ljudi imajo Bitcoin in ga želijo porabiti na mestih, ki ga sprejemajo.",
	"biz_s4_c2": "Samo s sprejemanjem Bitcoina je lahko vaše podjetje uvrščeno na zemljevide trgovcev, ki sprejemajo Bitcoin, in brezplačno pridobi izpostavljenost novim strankam.",
	"biz_s4_c3": "Sprejemanje Bitcoina je 100 % brezplačno. Brez pogodb ali skritih provizij."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Ugotovite, zakaj je Bitcoin dober za podjetja",
	"why_header": "BITCOIN JE DOBER ZA PODJETJA",
	"why_good_for_you": "BITCOIN JE DOBER TUDI ZA VAS!",
	"why_learn_more_lowercase": "Ugotovite več.",
	"why_s1": "Bitcoin nima inflacije",
	"why_s1_c1": "Inflacija nastane, ko se tiska ali ustvarja več denarja iz nič. To povzroča, da vaš denar sčasoma izgublja vrednost.",
	"why_s1_c2": "Bitcoin ima fiksno ponudbo, kar pomeni, da nihče ne more natisniti več Bitcoina.",
	"why_s2": "Bitcoin nima bančnih naletov",
	"why_s2_c1": "Več ameriških bank se je v zadnjih letih sesula zaradi bančnih naletov.",
	"why_s2_c2": "Namesto da banke le hranijo vaš denar, ga investirajo in posojajo. Če te naložbe propadejo, nimajo dovolj denarja, da bi vam ga vrnile.",
	"why_s2_c3": "In zavarovalni sklad FDIC ima le 1 dolar za vsakih 100 dolarjev, ki jih zavaruje.",
	"why_s3": "Bitcoin je brez dovoljenj",
	"why_s3_c1": "Za razliko od tradicionalnih finančnih omrežij Bitcoin ne zahteva dovoljenja za uporabo.",
	"why_s3_c2": "To pomeni, da vam nihče ne more preprečiti uporabe Bitcoina iz kakršnega koli razloga. Je prvo finančno omrežje, ki ga lahko uporabljate brez skrbi glede cenzure ali zasega.",
	"why_s4": "Bitcoin gradi boljši svet",
	"why_s4_c1": "Bitcoin je napačno razumljena tehnologija, ki gradi boljši svet.",
	"why_s4_c2": "Bitcoin je aktivistom za človekove pravice omogočil boj za svobodo, zmanjšal globalne emisije metana, rešil nacionalne parke in še veliko več."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Sprejemajte bitcoinova plačila v vašem podjetju",
	"guide_header": "STE PRIPRAVLJENI SPREJEMATI BITCOIN V SVOJEM PODJETJU?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Pogosta vprašanja o sprejemanju Bitcoina",
	"faq_description": "Imate vprašanja glede sprejemanja bitcoinovih plačil v vašem podjetju?",
	"faq_header": "IMATE VPRAŠANJA GLEDE SPREJEMANJA BITCOINOVIH PLAČIL?",
	"faq_s1": "Kaj je Bitcoin?",
	"faq_s1_c1": "Bitcoin sta dve stvari: digitalni denar in računalniško omrežje.",
	"faq_s1_c2": "Pošiljate lahko bitcoin (digitalni denar) neposredno drugim ljudem prek omrežja Bitcoin.",
	"faq_s1_c3": "Omrežje Bitcoin deluje brez posrednikov ali centralnih organov, kot so banke ali podjetja za kreditne kartice, tako da se lahko izognete njihovim transakcijskim provizijam.",
	"faq_s1_c4": "Bitcoinove transakcije dosežejo končno poravnavo hitro (10 minut) in jih ni mogoče nikoli razveljaviti, tako da lahko mirno spite z vedenjem, da je vaš denar vaš denar.",
	"faq_s2": "Kako lahko Bitcoin koristi mojemu podjetju?",
	"faq_s2_c1": "Bitcoin vam omogoča sprejemanje plačil z nižjimi provizijami in pridobivanje več strank. Bitcoinova plačila imajo nizke provizije brez minimalnih omejitev, se poravnajo takoj in so imuna na povratne bremenitve in goljufije.",
	"faq_s2_c2": "Sprejemanje Bitcoina je brezplačno in vam omogoča uvrstitev vašega podjetja na zemljevide bitcoinovih trgovcev, da vas uporabniki Bitcoina zlahka najdejo.",
	"faq_s2_c3": "Oglejte si vse načine, kako je Bitcoin dober za podjetja.",
	"faq_s3": "Kako sprejmam bitcoinova plačila?",
	"faq_s3_c1": "Za sprejemanje bitcoinovih plačil potrebujete le brezplačno bitcoinovo denarnico.",
	"faq_s3_c2": "Naš vodič po denarnicah vas hitro in enostavno pripravi, da lahko še danes izkoristite prednosti sprejemanja Bitcoina!",
	"faq_s3_c3": "Ogled vodiča po denarnicah",
	"faq_s4": "Ali lahko prejeta bitcoinova plačila pretvorim v lokalno valuto?",
	"faq_s4_c1": "Da! S hibridno denarnico lahko samodejno pretvorite prejeta bitcoinova plačila v lokalno valuto takoj po prejemu plačila.",
	"faq_s4_c2": "Naš vodič po denarnicah vam pomaga pri hitri in enostavni nastavitvi.",
	"faq_s4_c3": "Izberete lahko tudi, da obdržite del prejetih plačil v Bitcoinu. Varčevanje v Bitcoinu ima številne prednosti:",
	"faq_s4_c4": "Bitcoin je polnorezerven finančni sistem.",
	"faq_s4_c5": "Bitcoin nima inflacije.",
	"faq_s4_c6": "Te prednosti naredijo Bitcoin odličen način za dolgoročno hrambo denarja.",
	"faq_s4_c7": "Tudi če se odločite pretvoriti vsa bitcoinova plačila v dolarje, boste še vedno izkoristili prednosti sprejemanja plačil z veliko nižjimi provizijami in dosegli več potencialnih strank.",
	"faq_s5": "Ali lahko sprejmam bitcoinova plačila osebno?",
	"faq_s5_c1": "Da! Sprejemanje bitcoinovih plačil osebno je enostavno z bitcoinovo denarnico.",
	"faq_s5_c2": "Naš vodič po denarnicah vam pomaga izbrati najboljšo za vaše podjetje.",
	"faq_s5_c3": "Ogled vodiča po denarnicah",
	"faq_s6": "Ali lahko sprejmam bitcoinova plačila prek spleta?",
	"faq_s6_c1": "Da! Sprejemanje bitcoinovih plačil prek spleta z vašo obstoječo spletno trgovino je enostavno.",
	"faq_s6_c2": "Oglejte si naš vodič po denarnicah za več informacij.",
	"faq_s7": "Kako lahko strankam sporočim, da sprejmam Bitcoin?",
	"faq_s7_c1": "Ponujamo brezplačne nalepke 'Bitcoin sprejet tukaj', ki jih lahko razstavite v svojem podjetju in strankam sporočite, da sprejmete Bitcoin.",
	"faq_s7_c2": "Kliknite tukaj za naročilo nalepk.",
	"faq_s7_c3": "Svoje podjetje lahko tudi brezplačno uvrstite na zemljevide bitcoinovih trgovcev in pridobite izpostavljenost milijonom uporabnikov Bitcoina, ki želijo porabiti svoj Bitcoin v podjetjih, ki ga sprejemajo.",
	"faq_s7_c4": "Vpišite se zdaj.",
	"faq_s8": "Kako lahko pridobim več strank s sprejemanjem Bitcoina?",
	"faq_s8_c1": "Obstajajo milijoni uporabnikov Bitcoina, ki želijo porabiti svoj Bitcoin v podjetjih, ki ga sprejemajo.",
	"faq_s8_c2": "Samo s sprejemanjem bitcoinovih plačil je lahko vaše podjetje uvrščeno na brezplačne zemljevide bitcoinovih trgovcev in pridobi izpostavljenost novim potencialnim strankam.",
	"faq_s8_c3": "Vpišite se zdaj.",
	"faq_s9": "Koliko stane sprejemanje Bitcoina?",
	"faq_s9_c1": "Sprejemanje Bitcoina v vašem podjetju je 100 % brezplačno. Brez pogodb ali skritih provizij.",
	"faq_s9_c2": "Oglejte si naš vodič po denarnicah in začnite sprejemati bitcoinova plačila še danes."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Vodič po računovodstvu za Bitcoin v podjetjih",
	"accounting_description": "Naučite se pravilno obračunavati bitcoinova plačila v vašem poslovnem računovodstvu.",
	"accounting_header": "VODIČ PO BITCOINOVEM RAČUNOVODSTVU",
	"accounting_s1_c1": "Sprejemanje Bitcoina ima številne prednosti, kot sta sprejemanje plačil z nižjimi provizijami in pridobivanje več strank.",
	"accounting_s1_c2": "Če uporabljate hibridno denarnico iz našega vodiča po denarnicah in samodejno prodajate 100 % prejetega Bitcoina za dolarje, vam v vašem trenutnem računovodstvu ni treba ničesar spreminjati.",
	"accounting_s1_c3": "Ogled vodiča po denarnicah.",
	"accounting_s1_c4": "Če pa del prejetih bitcoinovih plačil obdržite kot Bitcoin, boste morali za svoje računovodstvo slediti nekaterim podatkom. Na prvi pogled se to morda zdi zastrašujoče, v resnici pa je precej preprosto.",
	"accounting_s1_c5": "Opomba: ta vodič je zgolj informativen in ne predstavlja davčnega svetovanja.",
	"accounting_s1_c6": "Če potrebujete davčno svetovanje, toplo priporočamo Satoshi Pacioli Accounting Services, računovodsko podjetje, specializirano za bitcoinovo računovodstvo.",
	"accounting_s2": "SLEDENJE VAŠI NABAVNI VREDNOSTI",
	"accounting_s2_c1": "Sledenje nabavni vrednosti bo največja razlika med obračunavanjem dolarjev in obračunavanjem Bitcoina. Tudi če na svoje podjetje gledate povsem z vidika Bitcoina, morate v svoji davčni napovedi navesti dolarsko vrednost vsake transakcije.",
	"accounting_s2_c2": "Če uporabljate QuickBooks, lahko to storite samodejno z vtičnikom Bitcoin Sync.",
	"accounting_s2_c3": "Če QuickBooks ne uporabljate, priporočamo Satoshi Pacioli Accounting Services, računovodsko podjetje, specializirano za bitcoinovo računovodstvo.",
	"accounting_s2_c4": "Za ročno sledenje preprosto zabeležite količino prejetega Bitcoina in dolarsko vrednost bitcoinove transakcije na ta dan.",
	"accounting_s2_c5": "Trenutno dolarsko ceno Bitcoina si lahko ogledate tukaj.",
	"accounting_s2_c6": "Te informacije sledite v Excelovi preglednici in jih posredujte svojemu računovodji.",
	"accounting_s2_c7": "Te podatke lahko v Excel uvozite tudi samodejno.",
	"accounting_s2_c8": "Ogledate si lahko tudi zgodovinsko dolarsko ceno Bitcoina v prejšnjih dneh, tako da tega ni treba početi vsak dan.",
	"accounting_s3": "PORABA ALI PRODAJA VAŠEGA BITCOINA",
	"accounting_s3_c1": "Če uporabljate hibridno denarnico iz našega vodiča po denarnicah in samodejno prodajate 100 % prejetega Bitcoina za dolarje, vam v vašem trenutnem računovodstvu ni treba ničesar spreminjati.",
	"accounting_s3_c2": "Ogled vodiča po denarnicah.",
	"accounting_s3_c3": "Če se odločite del prejetega Bitcoina po določenem času porabiti ali prodati, preprosto dodajte ceno, po kateri ste ga prodali, v Excelovo preglednico, kjer sledite nabavni vrednosti.",
	"accounting_s3_c4": "Na primer, če ste 1. januarja prejeli Bitcoin v vrednosti 100 dolarjev in se ga odločili prodati ali porabiti 1. februarja pri novi vrednosti 110 dolarjev, morate v svojem računovodstvu zabeležiti kapitalski dobiček 10 dolarjev.",
	"accounting_s3_c5": "To lahko deluje tudi obratno. Na primer, če ste 1. januarja prejeli Bitcoin v vrednosti 100 dolarjev in se ga odločili prodati ali porabiti 1. februarja pri novi vrednosti 90 dolarjev, morate v svojem računovodstvu zabeležiti kapitalsko izgubo 10 dolarjev.",
	"accounting_s4": "POTREBUJEM DODATNO POMOČ",
	"accounting_s4_c1": "Če potrebujete dodatno pomoč pri vključitvi Bitcoina v vaše poslovno računovodstvo, toplo priporočamo Satoshi Pacioli Accounting Services, računovodsko podjetje, specializirano za bitcoinovo računovodstvo.",
	"accounting_s4_c2": "Ugotovite več o Satoshi Pacioli Accounting Services."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Kako sprejemati bitcoinova plačila",
	"wallets_header": "PRIDOBITE BREZPLAČNO BITCOINOVO DENARNICO ZA SPREJEMANJE PLAČIL",
	"wallets_intro_1": "Vse bitcoinove denarnice so medsebojno združljive, tako da vam stranke lahko plačajo v Bitcoinu ne glede na to, katero denarnico uporabljajo.",
	"wallets_intro_2": "Čisto bitcoinove denarnice:",
	"wallets_intro_3": "To so čisto bitcoinove denarnice, ki odklenejo polne prednosti Bitcoina: brez posrednikov, nizke provizije in brez povratnih bremenitev ali goljufij.",
	"wallets_intro_4": "Hibridne denarnice:",
	"wallets_intro_5": "Te vam omogočajo zamenjavo katerega koli deleža Bitcoina za dolarje, takoj ko vam stranka plača. Provizije so še vedno nižje kot pri kreditnih karticah, vendar višje kot pri čistih bitcoinovih plačilih.",
	"wallets_intro_6": "Obe vrsti sta odlična načina za sprejemanje Bitcoina. Konkretna denarnica bo odvisna od velikosti in vrste vašega podjetja.",
	"wallets_choice_sole": "denarnice za podjetja z enim lastnikom",
	"wallets_choice_multiple": "denarnice za podjetja z več zaposlenimi",
	"wallets_choice_online": "denarnice za spletna podjetja",
	"wallets_choice_invoice": "denarnice za podjetja z izdajanjem računov",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Bitcoinova plačila lahko sprejemate s svojim obstoječim terminalom Square PoS ali integracijo spletne trgovine. Sprejemanje bitcoinovih plačil še nikoli ni bilo lažje.",
	"wallets_feature_bitcoin_only": "Čisto bitcoinova denarnica",
	"wallets_feature_no_info": "Ni potrebnih nobenih podatkov",
	"wallets_feature_in_person": "Samo osebna plačila",
	"wallets_feature_settles_bitcoin": "Poravnava 100 % v Bitcoinu",
	"wallets_feature_hybrid": "Hibridna denarnica",
	"wallets_feature_info": "Potrebni poslovni podatki",
	"wallets_feature_in_person_online": "Osebna in spletna plačila",
	"wallets_feature_settles_both": "Poravnava v Bitcoinu in dolarjih",
	"wallets_feature_multiple_employees": "Podpora za več zaposlenih (BPT)",
	"wallets_feature_self_hosted": "Lastno gostovanje = 0 % provizije",
	"wallets_feature_online_store": "Integracija s spletno trgovino",
	"wallets_feature_invoicing": "Brezplačna programska oprema za izdajanje računov",
	"wallets_get_wallet": "PRIDOBI DENARNICO"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Zemljevidi bitcoinovih trgovcev — Brezplačen vpis vašega podjetja",
	"maps_header": "VPIŠITE SE NA ZEMLJEVIDE BITCOINOVIH TRGOVCEV IN PRIDOBITE VEČ STRANK",
	"maps_request_details": "Vnesite podatke o vašem podjetju spodaj in vas bomo brezplačno vpisali na zemljevide bitcoinovih trgovcev. To bo omogočilo bitcoinarjem, da najdejo vaše podjetje in porabijo svoj Bitcoin pri vas!",
	"maps_view": "Oglejte si zemljevid tukaj."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Vaše podjetje bo uvrščeno na zemljevide bitcoinovih trgovcev v 1 do 2 tednih.",
	"kit_success_2": "Oglejte si zemljevid tukaj."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Nalepke Bitcoin sprejet tukaj",
	"stickers_header": "PRIDOBITE BREZPLAČNE NALEPKE 'BITCOIN SPREJET TUKAJ'",
	"stickers_request": "Pridobite brezplačne nalepke",
	"stickers_request_details": "Sporočite svojim strankam, da sprejemate bitcoinova plačila, s temi brezplačnimi nalepkami 'Bitcoin sprejet tukaj'.",
	"stickers_country_global_print": "Po vsem svetu — Natisnil bom lastne nalepke",
	"stickers_request_instructions": "Prejeli boste tri nalepke 'Bitcoin sprejet tukaj' v navadni beli ovojnici. Če potrebujete več kot tri nalepke za svoje podjetje, vas prosimo, da zaprosite večkrat. Podatki o naslovu se izbrišejo po pošiljanju brezplačnih nalepk.",
	"stickers_print_details": "Natisnete lahko lastne nalepke 'Bitcoin sprejet tukaj', ne glede na to, kje živite! Kliknite na svoj jezik spodaj za ogled datotek nalepk in navodil.",
	"stickers_request_language": "Ne vidite svojega jezika? Izpolnite spodnji obrazec in zaprosite za datoteke nalepk 'Bitcoin sprejet tukaj' v vašem jeziku."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Svoje nalepke boste prejeli v 1 do 2 tednih v navadni beli ovojnici. Vsaka ovojnica vsebuje 3 nalepke. Če potrebujete več kot 3 nalepke za svoje podjetje, vas prosimo, da zaprosite za dodaten paket!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Vašo datoteko nalepk bomo ustvarili in objavili v 3 do 4 tednih. Hvala za potrpežljivost!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoinov poslovni komplet",
	"kit_header": "NATISNITE SVOJ BITCOINOV POSLOVNI KOMPLET",
	"kit_request": "ZAPROSITE ZA BREZPLAČEN KOMPLET",
	"kit_request_details": "Vsak bitcoinov poslovni komplet vsebuje dva letaka, ki olajšata prepričevanje lokalnega podjetja, da začne sprejemati Bitcoin.",
	"kit_country_global_print": "Po vsem svetu — Natisnil bom lastne komplete",
	"kit_enter_address": "Vnesite svoj poštni naslov in brezplačno vam bomo poslali bitcoinov poslovni komplet v navadni beli ovojnici. Podatki o naslovu se izbrišejo po pošiljanju kompleta.",
	"kit_print_details": "Sodelujete lahko s tiskanjem lastnih letakov, ne glede na to, kje živite! Podjetja lahko tudi usmerite na naš digitalni poslovni komplet, da se izognete tiskanju.",
	"kit_view_files": "OGLED DATOTEK",
	"kit_digital_kit": "DIGITALNI KOMPLET",
	"kit_resources": "VSAK KOMPLET SE SKLICUJE NA TE BREZPLAČNE VIRE"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Svoj bitcoinov poslovni komplet boste prejeli v 1 do 2 tednih v navadni beli ovojnici."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Natisnite svoj bitcoinov poslovni komplet",
	"english_bbk_files_description": "Prenesite datoteke letakov tukaj.",
	"english_header": "NATISNITE SVOJ ANGLEŠKI BITCOINOV POSLOVNI KOMPLET"
});

console.log(`\nDone! Created 14 business files.`);
