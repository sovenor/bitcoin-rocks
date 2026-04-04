/**
 * Creates Slovak (sk) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'sk';
const today = '2026-04-04';

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
	"bitcoin_is_good_for_business": "Bitcoin je dobrý pre podnikanie",
	"biz_header": "BITCOIN JE DOBRÝ PRE PODNIKANIE",
	"biz_s1": "Nízke poplatky bez minimálnych limitov",
	"biz_s1_c1": "Bitcoin vám umožňuje prijímať platby priamo od zákazníkov, podobne ako hotovosť. Bitcoinová sieť funguje bez sprostredkovateľov, ako sú banky a kreditné spoločnosti, ktoré si účtujú vysoké poplatky.",
	"biz_s2": "Okamžité vyrovnanie",
	"biz_s2_c1": "Rovnako ako hotovosť sa bitcoinové platby vyrovnávajú okamžite. Nemusíte čakať, kým vám zaplatí vaša kreditná spoločnosť alebo banka. Namiesto toho získate prístup k svojim peniazom hneď.",
	"biz_s3": "Žiadne spätné platby ani podvody",
	"biz_s3_c1": "Pretože bitcoinové platby prebiehajú priamo medzi vami a vašimi zákazníkmi, nikto vám nemôže peniaze vziať späť pomocou spätnej platby.",
	"biz_s3_c2": "Falošný Bitcoin nemožno odoslať po Bitcoinovej sieti, čo znamená, že sa nikdy nemusíte obávať podvodných transakcií, ktoré by mohli stáť vašu firmu peniaze.",
	"biz_s4": "Získajte viac zákazníkov",
	"biz_s4_c1": "Milióny ľudí vlastnia Bitcoin a chcú ho minúť na miestach, ktoré ho prijímajú.",
	"biz_s4_c2": "Samotným prijímaním Bitcoinu môže byť vaša firma uvedená na mapách obchodníkov prijímajúcich Bitcoin a získať zadarmo expozíciu novým zákazníkom.",
	"biz_s4_c3": "Prijímanie Bitcoinu je 100 % zadarmo. Žiadne zmluvy ani skryté poplatky."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Zistite, prečo je Bitcoin dobrý pre podnikanie",
	"why_header": "BITCOIN JE DOBRÝ PRE PODNIKANIE",
	"why_good_for_you": "BITCOIN JE DOBRÝ AJ PRE VÁS!",
	"why_learn_more_lowercase": "Zistite viac.",
	"why_s1": "Bitcoin nemá infláciu",
	"why_s1_c1": "Inflácia nastáva, keď sa tlačí alebo vytvára viac peňazí z ničoho. To spôsobuje, že vaše peniaze strácajú hodnotu v čase.",
	"why_s1_c2": "Bitcoin má pevnú ponuku, čo znamená, že nikto nemôže vytlačiť viac Bitcoinu.",
	"why_s2": "Bitcoin nemá bankové runy",
	"why_s2_c1": "Niekoľko amerických bánk sa v posledných rokoch zrútilo kvôli bankovým runom.",
	"why_s2_c2": "Namiesto toho, aby banky len držali vaše peniaze, investujú ich a požičiavajú. Ak tieto investície nedopadnú dobre, nemajú dosť peňazí na to, aby vám ich vrátili.",
	"why_s2_c3": "A poistný fond FDIC má iba 1 dolár na každých 100 dolárov, ktoré poisťuje.",
	"why_s3": "Bitcoin je bez povolenia",
	"why_s3_c1": "Na rozdiel od tradičných finančných sietí Bitcoin nevyžaduje povolenie na použitie.",
	"why_s3_c2": "To znamená, že vám nikto nemôže zabrániť v používaní Bitcoinu z akéhokoľvek dôvodu. Je to prvá finančná sieť, ktorú môžete používať bez obáv z cenzúry alebo zabavenia.",
	"why_s4": "Bitcoin buduje lepší svet",
	"why_s4_c1": "Bitcoin je nepochopená technológia, ktorá buduje lepší svet.",
	"why_s4_c2": "Bitcoin umožnil aktivistom za ľudské práva bojovať za slobodu, znížil globálne emisie metánu, zachránil národné parky a mnoho ďalšieho."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Prijímajte bitcoinové platby vo vašej firme",
	"guide_header": "STE PRIPRAVENÍ PRIJÍMAŤ BITCOIN VO SVOJEJ FIRME?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Často kladené otázky o prijímaní Bitcoinu",
	"faq_description": "Máte otázky ohľadom prijímania bitcoinových platieb vo vašej firme?",
	"faq_header": "MÁTE OTÁZKY OHĽADOM PRIJÍMANIA BITCOINOVÝCH PLATIEB?",
	"faq_s1": "Čo je Bitcoin?",
	"faq_s1_c1": "Bitcoin sú dve veci: digitálne peniaze a počítačová sieť.",
	"faq_s1_c2": "Môžete posielať bitcoin (digitálne peniaze) priamo ostatným ľuďom pomocou Bitcoinovej siete.",
	"faq_s1_c3": "Bitcoinová sieť funguje bez sprostredkovateľov alebo centrálnych autorít, ako sú banky alebo kreditné spoločnosti, takže sa môžete vyhnúť ich transakčným poplatkom.",
	"faq_s1_c4": "Bitcoinové transakcie dosiahnu konečné vyrovnanie rýchlo (10 minút) a nikdy nemôžu byť vrátené, takže môžete spať pokojne s vedomím, že vaše peniaze sú vaše peniaze.",
	"faq_s2": "Ako môže Bitcoin prospieť môjmu podnikaniu?",
	"faq_s2_c1": "Bitcoin vám umožňuje prijímať platby s nižšími poplatkami a získať viac zákazníkov. Bitcoinové platby majú nízke poplatky bez minimálnych limitov, vyrovnávajú sa okamžite a sú imúnne voči spätným platbám a podvodom.",
	"faq_s2_c2": "Prijímanie Bitcoinu je zadarmo a umožňuje vám uviesť vašu firmu na mapách bitcoinových obchodníkov, aby vás používatelia Bitcoinu ľahko našli.",
	"faq_s2_c3": "Pozrite si všetky spôsoby, ako je Bitcoin dobrý pre podnikanie.",
	"faq_s3": "Ako prijímam bitcoinové platby?",
	"faq_s3_c1": "Na prijímanie bitcoinových platieb potrebujete iba bezplatnú bitcoinovú peňaženku.",
	"faq_s3_c2": "Náš sprievodca peňaženkami vás rýchlo a jednoducho nastaví, aby ste mohli využívať výhody prijímania Bitcoinu ešte dnes!",
	"faq_s3_c3": "Zobraziť sprievodcu peňaženkami",
	"faq_s4": "Môžem previesť prijaté bitcoinové platby na miestnu menu?",
	"faq_s4_c1": "Áno! Pomocou hybridnej peňaženky môžete automaticky previesť prijaté bitcoinové platby na miestnu menu ihneď po prijatí platby.",
	"faq_s4_c2": "Náš sprievodca peňaženkami vám pomôže s rýchlym a jednoduchým nastavením.",
	"faq_s4_c3": "Môžete si tiež zvoliť ponechať si časť prijatých platieb v Bitcoine. Sporenie v Bitcoine má mnoho výhod:",
	"faq_s4_c4": "Bitcoin je plne rezervný finančný systém.",
	"faq_s4_c5": "Bitcoin nemá infláciu.",
	"faq_s4_c6": "Tieto výhody robia z Bitcoinu skvelý spôsob, ako uchovávať peniaze dlhodobo.",
	"faq_s4_c7": "Aj keď sa rozhodnete previesť všetky bitcoinové platby na doláre, stále získate výhody prijímania platieb s oveľa nižšími poplatkami a oslovíte viac potenciálnych zákazníkov.",
	"faq_s5": "Môžem prijímať bitcoinové platby osobne?",
	"faq_s5_c1": "Áno! Prijímanie bitcoinových platieb osobne je jednoduché pomocou bitcoinovej peňaženky.",
	"faq_s5_c2": "Náš sprievodca peňaženkami vám pomôže vybrať tú najlepšiu pre vaše podnikanie.",
	"faq_s5_c3": "Zobraziť sprievodcu peňaženkami",
	"faq_s6": "Môžem prijímať bitcoinové platby online?",
	"faq_s6_c1": "Áno! Prijímanie bitcoinových platieb online s vaším existujúcim e-shopom je jednoduché.",
	"faq_s6_c2": "Pozrite si nášho sprievodcu peňaženkami pre viac informácií.",
	"faq_s7": "Ako môžem dať zákazníkom vedieť, že prijímam Bitcoin?",
	"faq_s7_c1": "Ponúkame bezplatné nálepky 'Bitcoin akceptovaný', ktoré môžete vystaviť vo vašej firme a dať zákazníkom vedieť, že prijímáte Bitcoin.",
	"faq_s7_c2": "Kliknite sem pre objednanie nálepiek.",
	"faq_s7_c3": "Svoju firmu môžete tiež zadarmo uviesť na mapách bitcoinových obchodníkov a získať expozíciu miliónom používateľov Bitcoinu, ktorí chcú minúť svoj Bitcoin vo firmách, ktoré ho prijímajú.",
	"faq_s7_c4": "Zapísať sa teraz.",
	"faq_s8": "Ako môžem získať viac zákazníkov prijímaním Bitcoinu?",
	"faq_s8_c1": "Existujú milióny používateľov Bitcoinu, ktorí chcú minúť svoj Bitcoin vo firmách, ktoré ho prijímajú.",
	"faq_s8_c2": "Samotným prijímaním bitcoinových platieb môže byť vaša firma uvedená na bezplatných mapách bitcoinových obchodníkov a získať expozíciu novým potenciálnym zákazníkom.",
	"faq_s8_c3": "Zapísať sa teraz.",
	"faq_s9": "Koľko stojí prijímanie Bitcoinu?",
	"faq_s9_c1": "Prijímanie Bitcoinu vo vašej firme je 100 % zadarmo. Žiadne zmluvy ani skryté poplatky.",
	"faq_s9_c2": "Pozrite si nášho sprievodcu peňaženkami a začnite prijímať bitcoinové platby ešte dnes."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Sprievodca účtovníctvom pre Bitcoin v podnikaní",
	"accounting_description": "Naučte sa správne účtovať bitcoinové platby vo vašom podnikovom účtovníctve.",
	"accounting_header": "SPRIEVODCA BITCOINOVÝM ÚČTOVNÍCTVOM",
	"accounting_s1_c1": "Prijímanie Bitcoinu má mnoho výhod, ako je prijímanie platieb s nižšími poplatkami a získavanie viac zákazníkov.",
	"accounting_s1_c2": "Ak používate hybridnú peňaženku z nášho sprievodcu peňaženkami a automaticky predávate 100 % prijatého Bitcoinu za doláre, nemusíte vo svojom súčasnom účtovníctve nič meniť.",
	"accounting_s1_c3": "Zobraziť sprievodcu peňaženkami.",
	"accounting_s1_c4": "Ak si však časť prijatých bitcoinových platieb ponecháte ako Bitcoin, budete musieť pre svoje účtovníctvo sledovať niekoľko údajov. Na prvý pohľad to môže pôsobiť zastrašujúco, ale v skutočnosti je to pomerne jednoduché.",
	"accounting_s1_c5": "Poznámka: tento sprievodca je iba informatívny a nepredstavuje daňové poradenstvo.",
	"accounting_s1_c6": "Ak potrebujete daňové poradenstvo, dôrazne odporúčame Satoshi Pacioli Accounting Services, účtovnú firmu špecializujúcu sa na bitcoinové účtovníctvo.",
	"accounting_s2": "SLEDOVANIE VAŠEJ NÁKLADOVEJ ZÁKLADNE",
	"accounting_s2_c1": "Sledovanie nákladovej základne bude najväčší rozdiel medzi účtovaním dolárov a účtovaním Bitcoinu. Aj keď na svoje podnikanie nazeráte čisto z pohľadu Bitcoinu, musíte vo svojom daňovom priznaní uviesť dolárovú hodnotu každej transakcie.",
	"accounting_s2_c2": "Ak používate QuickBooks, môžete to vykonať automaticky pomocou pluginu Bitcoin Sync.",
	"accounting_s2_c3": "Ak QuickBooks nepoužívate, odporúčame Satoshi Pacioli Accounting Services, účtovnú firmu špecializujúcu sa na bitcoinové účtovníctvo.",
	"accounting_s2_c4": "Pre ručné sledovanie stačí zaznamenať množstvo prijatého Bitcoinu a dolárovú hodnotu bitcoinovej transakcie v daný deň.",
	"accounting_s2_c5": "Aktuálnu dolárovú cenu Bitcoinu môžete zobraziť tu.",
	"accounting_s2_c6": "Tieto informácie sledujte v tabuľke Excel a odovzdajte ich svojmu účtovníkovi.",
	"accounting_s2_c7": "Tieto dáta môžete do Excelu importovať aj automaticky.",
	"accounting_s2_c8": "Môžete si tiež zobraziť historickú dolárovú cenu Bitcoinu v predchádzajúcich dňoch, takže to nemusíte robiť každý deň.",
	"accounting_s3": "MÍŇANIE ALEBO PREDAJ VÁŠHO BITCOINU",
	"accounting_s3_c1": "Ak používate hybridnú peňaženku z nášho sprievodcu peňaženkami a automaticky predávate 100 % prijatého Bitcoinu za doláre, nemusíte vo svojom súčasnom účtovníctve nič meniť.",
	"accounting_s3_c2": "Zobraziť sprievodcu peňaženkami.",
	"accounting_s3_c3": "Ak sa rozhodnete časť prijatého Bitcoinu po nejakej dobe minúť alebo predať, stačí do tabuľky Excel, kde sledujete nákladovú základňu, pridať cenu, za ktorú ste ho predali.",
	"accounting_s3_c4": "Napríklad, ak ste 1. januára dostali Bitcoin v hodnote 100 dolárov a rozhodli sa ho predať alebo minúť 1. februára pri novej hodnote 110 dolárov, musíte vo svojom účtovníctve zaznamenať kapitálový zisk 10 dolárov.",
	"accounting_s3_c5": "To môže fungovať aj opačne. Napríklad, ak ste 1. januára dostali Bitcoin v hodnote 100 dolárov a rozhodli sa ho predať alebo minúť 1. februára pri novej hodnote 90 dolárov, musíte vo svojom účtovníctve zaznamenať kapitálovú stratu 10 dolárov.",
	"accounting_s4": "POTREBUJEM ĎALŠIU POMOC",
	"accounting_s4_c1": "Ak potrebujete ďalšiu pomoc s integráciou Bitcoinu do vášho podnikového účtovníctva, dôrazne odporúčame Satoshi Pacioli Accounting Services, účtovnú firmu špecializujúcu sa na bitcoinové účtovníctvo.",
	"accounting_s4_c2": "Zistite viac o Satoshi Pacioli Accounting Services."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Ako prijímať bitcoinové platby",
	"wallets_header": "ZÍSKAJTE BEZPLATNÚ BITCOINOVÚ PEŇAŽENKU PRE PRIJÍMANIE PLATIEB",
	"wallets_intro_1": "Všetky bitcoinové peňaženky sú vzájomne kompatibilné, takže vám zákazníci môžu platiť v Bitcoine bez ohľadu na to, ktorú peňaženku používajú.",
	"wallets_intro_2": "Čisto bitcoinové peňaženky:",
	"wallets_intro_3": "Jedná sa o čisto bitcoinové peňaženky, ktoré odomykajú plné výhody Bitcoinu: žiadni sprostredkovatelia, nízke poplatky a žiadne spätné platby ani podvody.",
	"wallets_intro_4": "Hybridné peňaženky:",
	"wallets_intro_5": "Tie vám umožňujú zmeniť ľubovoľnú časť Bitcoinu za doláre, akonáhle vám zákazník zaplatí. Poplatky sú stále nižšie ako u kreditných kariet, ale vyššie ako u čistých bitcoinových platieb.",
	"wallets_intro_6": "Oba typy sú skvelé spôsoby prijímania Bitcoinu. Konkrétna peňaženka bude závisieť od veľkosti a typu vášho podnikania.",
	"wallets_choice_sole": "peňaženky pre individuálne vlastnené firmy",
	"wallets_choice_multiple": "peňaženky pre firmy s viacerými zamestnancami",
	"wallets_choice_online": "peňaženky pre online firmy",
	"wallets_choice_invoice": "peňaženky pre firmy s fakturáciou",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Bitcoinové platby môžete prijímať so svojím existujúcim terminálom Square PoS alebo integráciou e-shopu. Prijímanie bitcoinových platieb nebolo nikdy jednoduchšie.",
	"wallets_feature_bitcoin_only": "Čisto bitcoinová peňaženka",
	"wallets_feature_no_info": "Nie sú vyžadované žiadne údaje",
	"wallets_feature_in_person": "Iba osobné platby",
	"wallets_feature_settles_bitcoin": "Vyrovnanie 100 % v Bitcoine",
	"wallets_feature_hybrid": "Hybridná peňaženka",
	"wallets_feature_info": "Vyžadované údaje o firme",
	"wallets_feature_in_person_online": "Osobné aj online platby",
	"wallets_feature_settles_both": "Vyrovnanie v Bitcoine aj dolároch",
	"wallets_feature_multiple_employees": "Podpora viacerých zamestnancov (BPT)",
	"wallets_feature_self_hosted": "Vlastný hosting = 0 % poplatky",
	"wallets_feature_online_store": "Integrácia s e-shopom",
	"wallets_feature_invoicing": "Bezplatný fakturačný softvér",
	"wallets_get_wallet": "ZÍSKAŤ PEŇAŽENKU"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Mapy bitcoinových obchodníkov — Zadarmo zápis vašej firmy",
	"maps_header": "ZAPÍŠTE SA NA MAPY BITCOINOVÝCH OBCHODNÍKOV A ZÍSKAJTE VIAC ZÁKAZNÍKOV",
	"maps_request_details": "Zadajte údaje o vašej firme nižšie a my vás zadarmo zapíšeme na mapy bitcoinových obchodníkov. To umožní bitcoinerom nájsť vašu firmu a minúť svoj Bitcoin u vás!",
	"maps_view": "Zobraziť mapu tu."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Vaša firma bude uvedená na mapách bitcoinových obchodníkov za 1 až 2 týždne.",
	"kit_success_2": "Zobraziť mapu tu."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Nálepky Bitcoin akceptovaný",
	"stickers_header": "ZÍSKAJTE BEZPLATNÉ NÁLEPKY 'BITCOIN AKCEPTOVANÝ'",
	"stickers_request": "Získajte bezplatné nálepky",
	"stickers_request_details": "Dajte svojim zákazníkom vedieť, že prijímáte bitcoinové platby, pomocou týchto bezplatných nálepiek 'Bitcoin akceptovaný'.",
	"stickers_country_global_print": "Celosvetovo — Vytlačím si vlastné nálepky",
	"stickers_request_instructions": "Dostanete tri nálepky 'Bitcoin akceptovaný' v obyčajnej bielej obálke. Ak potrebujete viac ako tri nálepky pre svoju firmu, pokojne si požiadajte viackrát. Údaje o adrese sú vymazané po odoslaní bezplatných nálepiek.",
	"stickers_print_details": "Môžete si vytlačiť vlastné nálepky 'Bitcoin akceptovaný', nech žijete kdekoľvek! Kliknite na svoj jazyk nižšie pre zobrazenie súborov nálepiek a pokynov.",
	"stickers_request_language": "Nevidíte svoj jazyk? Vyplňte formulár nižšie a požiadajte o súbory nálepiek 'Bitcoin akceptovaný' vo vašom jazyku."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Svoje nálepky dostanete za 1 až 2 týždne v obyčajnej bielej obálke. Každá obálka obsahuje 3 nálepky. Ak potrebujete viac ako 3 nálepky pre svoju firmu, pokojne si požiadajte o ďalší balíček!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Váš súbor nálepiek vytvoríme a zverejníme do 3 až 4 týždňov. Ďakujeme za trpezlivosť!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoinová podnikateľská sada",
	"kit_header": "VYTLAČTE SI VLASTNÚ BITCOINOVÚ PODNIKATEĽSKÚ SADU",
	"kit_request": "POŽIADAJTE O BEZPLATNÚ SADU",
	"kit_request_details": "Každá bitcoinová podnikateľská sada obsahuje dva letáky, ktoré uľahčujú presvedčiť miestnu firmu, aby prijímala Bitcoin.",
	"kit_country_global_print": "Celosvetovo — Vytlačím si vlastné sady",
	"kit_enter_address": "Zadajte svoju poštovú adresu a my vám zadarmo pošleme bitcoinovú podnikateľskú sadu v obyčajnej bielej obálke. Údaje o adrese sú vymazané po odoslaní sady.",
	"kit_print_details": "Môžete sa zapojiť tlačou vlastných letákov, nech žijete kdekoľvek! Môžete tiež odkázať firmy na našu digitálnu podnikateľskú sadu, aby ste sa vyhli tlači.",
	"kit_view_files": "ZOBRAZIŤ SÚBORY",
	"kit_digital_kit": "DIGITÁLNA SADA",
	"kit_resources": "KAŽDÁ SADA ODKAZUJE NA TIETO BEZPLATNÉ ZDROJE"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Svoju bitcoinovú podnikateľskú sadu dostanete za 1 až 2 týždne v obyčajnej bielej obálke."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Vytlačte si vlastnú bitcoinovú podnikateľskú sadu",
	"english_bbk_files_description": "Stiahnite si súbory letákov tu.",
	"english_header": "VYTLAČTE SI VLASTNÚ ANGLICKÚ BITCOINOVÚ PODNIKATEĽSKÚ SADU"
});

console.log(`\nDone! Created 14 business files.`);
