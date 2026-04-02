/**
 * Creates Czech (cs) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'cs';
const today = '2026-04-02';

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
	"bitcoin_is_good_for_business": "Bitcoin je dobrý pro podnikání",
	"biz_header": "BITCOIN JE DOBRÝ PRO PODNIKÁNÍ",
	"biz_s1": "Nízké poplatky bez minimálních limitů",
	"biz_s1_c1": "Bitcoin vám umožňuje přijímat platby přímo od zákazníků, podobně jako hotovost. Bitcoinová síť funguje bez prostředníků, jako jsou banky a kreditní společnosti, které si účtují vysoké poplatky.",
	"biz_s2": "Okamžité vypořádání",
	"biz_s2_c1": "Stejně jako hotovost se bitcoinové platby vypořádávají okamžitě. Nemusíte čekat, až vám zaplatí vaše kreditní společnost nebo banka. Místo toho získáte přístup ke svým penězům hned.",
	"biz_s3": "Žádné zpětné platby ani podvody",
	"biz_s3_c1": "Protože bitcoinové platby probíhají přímo mezi vámi a vašimi zákazníky, nikdo vám nemůže peníze vzít zpět pomocí zpětné platby.",
	"biz_s3_c2": "Falešný Bitcoin nelze odeslat po Bitcoinové síti, což znamená, že se nikdy nemusíte obávat podvodných transakcí, které by mohly stát vaši firmu peníze.",
	"biz_s4": "Získejte více zákazníků",
	"biz_s4_c1": "Miliony lidí vlastní Bitcoin a chtějí ho utratit na místech, která ho přijímají.",
	"biz_s4_c2": "Pouhým přijímáním Bitcoinu může být vaše firma uvedena na mapách obchodníků přijímajících Bitcoin a získat zdarma expozici novým zákazníkům.",
	"biz_s4_c3": "Přijímání Bitcoinu je 100% zdarma. Žádné smlouvy ani skryté poplatky."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Zjistěte, proč je Bitcoin dobrý pro podnikání",
	"why_header": "BITCOIN JE DOBRÝ PRO PODNIKÁNÍ",
	"why_good_for_you": "BITCOIN JE DOBRÝ I PRO VÁS!",
	"why_learn_more_lowercase": "Zjistěte více.",
	"why_s1": "Bitcoin nemá inflaci",
	"why_s1_c1": "Inflace nastává, když se tiskne nebo vytváří více peněz z ničeho. To způsobuje, že vaše peníze ztrácejí hodnotu v čase.",
	"why_s1_c2": "Bitcoin má pevnou nabídku, což znamená, že nikdo nemůže vytisknout více Bitcoinu.",
	"why_s2": "Bitcoin nemá bankovní runy",
	"why_s2_c1": "Několik amerických bank se v posledních letech zhroutilo kvůli bankovním runům.",
	"why_s2_c2": "Místo toho, aby banky jen držely vaše peníze, investují je a půjčují. Pokud tyto investice nedopadnou dobře, nemají dost peněz na to, aby vám je vrátily.",
	"why_s2_c3": "A pojistný fond FDIC má pouze 1 dolar na každých 100 dolarů, které pojišťuje.",
	"why_s3": "Bitcoin je bez povolení",
	"why_s3_c1": "Na rozdíl od tradičních finančních sítí Bitcoin nevyžaduje povolení k použití.",
	"why_s3_c2": "To znamená, že vám nikdo nemůže zabránit v používání Bitcoinu z jakéhokoli důvodu. Je to první finanční síť, kterou můžete používat bez obav z cenzury nebo zabavení.",
	"why_s4": "Bitcoin buduje lepší svět",
	"why_s4_c1": "Bitcoin je nepochopená technologie, která buduje lepší svět.",
	"why_s4_c2": "Bitcoin umožnil aktivistům za lidská práva bojovat za svobodu, snížil globální emise metanu, zachránil národní parky a mnoho dalšího."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Přijímejte bitcoinové platby ve vaší firmě",
	"guide_header": "JSTE PŘIPRAVENI PŘIJÍMAT BITCOIN VE SVÉ FIRMĚ?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Časté dotazy k přijímání Bitcoinu",
	"faq_description": "Máte otázky ohledně přijímání bitcoinových plateb ve vaší firmě?",
	"faq_header": "MÁTE OTÁZKY OHLEDNĚ PŘIJÍMÁNÍ BITCOINOVÝCH PLATEB?",
	"faq_s1": "Co je Bitcoin?",
	"faq_s1_c1": "Bitcoin jsou dvě věci: digitální peníze a počítačová síť.",
	"faq_s1_c2": "Můžete posílat bitcoin (digitální peníze) přímo ostatním lidem pomocí Bitcoinové sítě.",
	"faq_s1_c3": "Bitcoinová síť funguje bez prostředníků nebo centrálních autorit, jako jsou banky nebo kreditní společnosti, takže se můžete vyhnout jejich transakčním poplatkům.",
	"faq_s1_c4": "Bitcoinové transakce dosáhnou konečného vypořádání rychle (10 minut) a nikdy nemohou být vráceny, takže můžete spát klidně s vědomím, že vaše peníze jsou vaše peníze.",
	"faq_s2": "Jak může Bitcoin prospět mému podnikání?",
	"faq_s2_c1": "Bitcoin vám umožňuje přijímat platby s nižšími poplatky a získat více zákazníků. Bitcoinové platby mají nízké poplatky bez minimálních limitů, vypořádávají se okamžitě a jsou imunní vůči zpětným platbám a podvodům.",
	"faq_s2_c2": "Přijímání Bitcoinu je zdarma a umožňuje vám uvést vaši firmu na mapách bitcoinových obchodníků, aby vás uživatelé Bitcoinu snadno našli.",
	"faq_s2_c3": "Podívejte se na všechny způsoby, jak je Bitcoin dobrý pro podnikání.",
	"faq_s3": "Jak přijímám bitcoinové platby?",
	"faq_s3_c1": "K přijímání bitcoinových plateb potřebujete pouze bezplatnou bitcoinovou peněženku.",
	"faq_s3_c2": "Náš průvodce peněženkami vás rychle a snadno nastaví, abyste mohli využívat výhody přijímání Bitcoinu ještě dnes!",
	"faq_s3_c3": "Zobrazit průvodce peněženkami",
	"faq_s4": "Mohu převést přijaté bitcoinové platby na místní měnu?",
	"faq_s4_c1": "Ano! Pomocí hybridní peněženky můžete automaticky převést přijaté bitcoinové platby na místní měnu ihned po přijetí platby.",
	"faq_s4_c2": "Náš průvodce peněženkami vám pomůže s rychlým a snadným nastavením.",
	"faq_s4_c3": "Můžete si také zvolit ponechat si část přijatých plateb v Bitcoinu. Spoření v Bitcoinu má mnoho výhod:",
	"faq_s4_c4": "Bitcoin je plně rezervní finanční systém.",
	"faq_s4_c5": "Bitcoin nemá inflaci.",
	"faq_s4_c6": "Tyto výhody dělají z Bitcoinu skvělý způsob, jak uchovávat peníze dlouhodobě.",
	"faq_s4_c7": "I když se rozhodnete převést všechny bitcoinové platby na dolary, stále získáte výhody přijímání plateb s mnohem nižšími poplatky a oslovíte více potenciálních zákazníků.",
	"faq_s5": "Mohu přijímat bitcoinové platby osobně?",
	"faq_s5_c1": "Ano! Přijímání bitcoinových plateb osobně je snadné pomocí bitcoinové peněženky.",
	"faq_s5_c2": "Náš průvodce peněženkami vám pomůže vybrat tu nejlepší pro vaše podnikání.",
	"faq_s5_c3": "Zobrazit průvodce peněženkami",
	"faq_s6": "Mohu přijímat bitcoinové platby online?",
	"faq_s6_c1": "Ano! Přijímání bitcoinových plateb online s vaším stávajícím e-shopem je snadné.",
	"faq_s6_c2": "Podívejte se na našeho průvodce peněženkami pro více informací.",
	"faq_s7": "Jak mohu dát zákazníkům vědět, že přijímám Bitcoin?",
	"faq_s7_c1": "Nabízíme bezplatné nálepky 'Bitcoin přijímán', které můžete vystavit ve vaší firmě a dát zákazníkům vědět, že přijímáte Bitcoin.",
	"faq_s7_c2": "Klikněte zde pro objednání nálepek.",
	"faq_s7_c3": "Svou firmu můžete také zdarma uvést na mapách bitcoinových obchodníků a získat expozici milionům uživatelů Bitcoinu, kteří chtějí utratit svůj Bitcoin ve firmách, které ho přijímají.",
	"faq_s7_c4": "Zapsat se nyní.",
	"faq_s8": "Jak mohu získat více zákazníků přijímáním Bitcoinu?",
	"faq_s8_c1": "Existují miliony uživatelů Bitcoinu, kteří chtějí utratit svůj Bitcoin ve firmách, které ho přijímají.",
	"faq_s8_c2": "Pouhým přijímáním bitcoinových plateb může být vaše firma uvedena na bezplatných mapách bitcoinových obchodníků a získat expozici novým potenciálním zákazníkům.",
	"faq_s8_c3": "Zapsat se nyní.",
	"faq_s9": "Kolik stojí přijímání Bitcoinu?",
	"faq_s9_c1": "Přijímání Bitcoinu ve vaší firmě je 100% zdarma. Žádné smlouvy ani skryté poplatky.",
	"faq_s9_c2": "Podívejte se na našeho průvodce peněženkami a začněte přijímat bitcoinové platby ještě dnes."
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Průvodce účetnictvím pro Bitcoin v podnikání",
	"accounting_description": "Naučte se správně účtovat bitcoinové platby ve vašem podnikovém účetnictví.",
	"accounting_header": "PRŮVODCE BITCOINOVÝM ÚČETNICTVÍM",
	"accounting_s1_c1": "Přijímání Bitcoinu má mnoho výhod, jako je přijímání plateb s nižšími poplatky a získávání více zákazníků.",
	"accounting_s1_c2": "Pokud používáte hybridní peněženku z našeho průvodce peněženkami a automaticky prodáváte 100 % přijatého Bitcoinu za dolary, nemusíte ve svém současném účetnictví nic měnit.",
	"accounting_s1_c3": "Zobrazit průvodce peněženkami.",
	"accounting_s1_c4": "Pokud si však část přijatých bitcoinových plateb ponecháte jako Bitcoin, budete muset pro své účetnictví sledovat několik údajů. Na první pohled to může působit zastrašujícím, ale ve skutečnosti je to docela jednoduché.",
	"accounting_s1_c5": "Poznámka: tento průvodce je pouze informativní a nepředstavuje daňové poradenství.",
	"accounting_s1_c6": "Pokud potřebujete daňové poradenství, důrazně doporučujeme Satoshi Pacioli Accounting Services, účetní firmu specializující se na bitcoinové účetnictví.",
	"accounting_s2": "SLEDOVÁNÍ VAŠÍ NÁKLADOVÉ ZÁKLADNY",
	"accounting_s2_c1": "Sledování nákladové základny bude největší rozdíl mezi účtováním dolarů a účtováním Bitcoinu. I když na své podnikání nahlížíte čistě z pohledu Bitcoinu, musíte ve svém daňovém přiznání uvést dolarovou hodnotu každé transakce.",
	"accounting_s2_c2": "Pokud používáte QuickBooks, můžete to provést automaticky pomocí pluginu Bitcoin Sync.",
	"accounting_s2_c3": "Pokud QuickBooks nepoužíváte, doporučujeme Satoshi Pacioli Accounting Services, účetní firmu specializující se na bitcoinové účetnictví.",
	"accounting_s2_c4": "Pro ruční sledování stačí zaznamenat množství přijatého Bitcoinu a dolarovou hodnotu bitcoinové transakce v daný den.",
	"accounting_s2_c5": "Aktuální dolarovou cenu Bitcoinu můžete zobrazit zde.",
	"accounting_s2_c6": "Tyto informace sledujte v tabulce Excel a předejte je svému účetnímu.",
	"accounting_s2_c7": "Tato data můžete do Excelu importovat také automaticky.",
	"accounting_s2_c8": "Můžete si také zobrazit historickou dolarovou cenu Bitcoinu v předchozích dnech, takže to nemusíte dělat každý den.",
	"accounting_s3": "UTRÁCENÍ NEBO PRODEJ VAŠEHO BITCOINU",
	"accounting_s3_c1": "Pokud používáte hybridní peněženku z našeho průvodce peněženkami a automaticky prodáváte 100 % přijatého Bitcoinu za dolary, nemusíte ve svém současném účetnictví nic měnit.",
	"accounting_s3_c2": "Zobrazit průvodce peněženkami.",
	"accounting_s3_c3": "Pokud se rozhodnete část přijatého Bitcoinu po nějaké době utratit nebo prodat, stačí do tabulky Excel, kde sledujete nákladovou základnu, přidat cenu, za kterou jste ho prodali.",
	"accounting_s3_c4": "Například, pokud jste 1. ledna obdrželi Bitcoin v hodnotě 100 dolarů a rozhodli se ho prodat nebo utratit 1. února při nové hodnotě 110 dolarů, musíte ve svém účetnictví zaznamenat kapitálový zisk 10 dolarů.",
	"accounting_s3_c5": "To může fungovat i opačně. Například, pokud jste 1. ledna obdrželi Bitcoin v hodnotě 100 dolarů a rozhodli se ho prodat nebo utratit 1. února při nové hodnotě 90 dolarů, musíte ve svém účetnictví zaznamenat kapitálovou ztrátu 10 dolarů.",
	"accounting_s4": "POTŘEBUJI DALŠÍ POMOC",
	"accounting_s4_c1": "Pokud potřebujete další pomoc s integrací Bitcoinu do vašeho podnikového účetnictví, důrazně doporučujeme Satoshi Pacioli Accounting Services, účetní firmu specializující se na bitcoinové účetnictví.",
	"accounting_s4_c2": "Zjistěte více o Satoshi Pacioli Accounting Services."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Jak přijímat bitcoinové platby",
	"wallets_header": "ZÍSKEJTE BEZPLATNOU BITCOINOVOU PENĚŽENKU PRO PŘIJÍMÁNÍ PLATEB",
	"wallets_intro_1": "Všechny bitcoinové peněženky jsou vzájemně kompatibilní, takže vám zákazníci mohou platit v Bitcoinu bez ohledu na to, kterou peněženku používají.",
	"wallets_intro_2": "Čistě bitcoinové peněženky:",
	"wallets_intro_3": "Jedná se o čistě bitcoinové peněženky, které odemykají plné výhody Bitcoinu: žádní prostředníci, nízké poplatky a žádné zpětné platby ani podvody.",
	"wallets_intro_4": "Hybridní peněženky:",
	"wallets_intro_5": "Ty vám umožňují směnit libovolnou část Bitcoinu za dolary, jakmile vám zákazník zaplatí. Poplatky jsou stále nižší než u kreditních karet, ale vyšší než u čistých bitcoinových plateb.",
	"wallets_intro_6": "Oba typy jsou skvělé způsoby přijímání Bitcoinu. Konkrétní peněženka bude záviset na velikosti a typu vašeho podnikání.",
	"wallets_choice_sole": "peněženky pro individuálně vlastněné firmy",
	"wallets_choice_multiple": "peněženky pro firmy s více zaměstnanci",
	"wallets_choice_online": "peněženky pro online firmy",
	"wallets_choice_invoice": "peněženky pro firmy s fakturací",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Bitcoinové platby můžete přijímat se svým stávajícím terminálem Square PoS nebo integrací e-shopu. Přijímání bitcoinových plateb nebylo nikdy snazší.",
	"wallets_feature_bitcoin_only": "Čistě bitcoinová peněženka",
	"wallets_feature_no_info": "Nejsou vyžadovány žádné údaje",
	"wallets_feature_in_person": "Pouze osobní platby",
	"wallets_feature_settles_bitcoin": "Vypořádání 100 % v Bitcoinu",
	"wallets_feature_hybrid": "Hybridní peněženka",
	"wallets_feature_info": "Vyžadovány údaje o firmě",
	"wallets_feature_in_person_online": "Osobní i online platby",
	"wallets_feature_settles_both": "Vypořádání v Bitcoinu i dolarech",
	"wallets_feature_multiple_employees": "Podpora více zaměstnanců (BPT)",
	"wallets_feature_self_hosted": "Vlastní hosting = 0% poplatky",
	"wallets_feature_online_store": "Integrace s e-shopem",
	"wallets_feature_invoicing": "Bezplatný fakturační software",
	"wallets_get_wallet": "ZÍSKAT PENĚŽENKU"
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Mapy bitcoinových obchodníků - Zdarma zápis vaší firmy",
	"maps_header": "ZAPIŠTE SE NA MAPY BITCOINOVÝCH OBCHODNÍKŮ A ZÍSKEJTE VÍCE ZÁKAZNÍKŮ",
	"maps_request_details": "Zadejte údaje o vaší firmě níže a my vás zdarma zapíšeme na mapy bitcoinových obchodníků. To umožní bitcoinerům najít vaši firmu a utratit svůj Bitcoin u vás!",
	"maps_view": "Zobrazit mapu zde."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Vaše firma bude uvedena na mapách bitcoinových obchodníků za 1 až 2 týdny.",
	"kit_success_2": "Zobrazit mapu zde."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Nálepky Bitcoin přijímán",
	"stickers_header": "ZÍSKEJTE BEZPLATNÉ NÁLEPKY 'BITCOIN PŘIJÍMÁN'",
	"stickers_request": "Získejte bezplatné nálepky",
	"stickers_request_details": "Dejte svým zákazníkům vědět, že přijímáte bitcoinové platby, pomocí těchto bezplatných nálepek 'Bitcoin přijímán'.",
	"stickers_country_global_print": "Celosvětově — Vytisknu si vlastní nálepky",
	"stickers_request_instructions": "Obdržíte tři nálepky 'Bitcoin přijímán' v obyčejné bílé obálce. Pokud potřebujete více než tři nálepky pro svou firmu, klidně si požádejte vícekrát. Údaje o adrese jsou smazány po odeslání bezplatných nálepek.",
	"stickers_print_details": "Můžete si vytisknout vlastní nálepky 'Bitcoin přijímán', ať žijete kdekoli! Klikněte na svůj jazyk níže pro zobrazení souborů nálepek a pokynů.",
	"stickers_request_language": "Nevidíte svůj jazyk? Vyplňte formulář níže a požádejte o soubory nálepek 'Bitcoin přijímán' ve vašem jazyce."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Své nálepky obdržíte za 1 až 2 týdny v obyčejné bílé obálce. Každá obálka obsahuje 3 nálepky. Pokud potřebujete více než 3 nálepky pro svou firmu, klidně si požádejte o další balíček!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Váš soubor nálepek vytvoříme a zveřejníme do 3 až 4 týdnů. Děkujeme za trpělivost!"
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bitcoinová podnikatelská sada",
	"kit_header": "VYTISKNĚTE SI VLASTNÍ BITCOINOVOU PODNIKATELSKOU SADU",
	"kit_request": "POŽÁDEJTE O BEZPLATNOU SADU",
	"kit_request_details": "Každá bitcoinová podnikatelská sada obsahuje dva letáky, které usnadňují přesvědčit místní firmu, aby přijímala Bitcoin.",
	"kit_country_global_print": "Celosvětově — Vytisknu si vlastní sady",
	"kit_enter_address": "Zadejte svou poštovní adresu a my vám zdarma pošleme bitcoinovou podnikatelskou sadu v obyčejné bílé obálce. Údaje o adrese jsou smazány po odeslání sady.",
	"kit_print_details": "Můžete se zapojit tiskem vlastních letáků, ať žijete kdekoli! Můžete také odkázat firmy na naši digitální podnikatelskou sadu, abyste se vyhnuli tisku.",
	"kit_view_files": "ZOBRAZIT SOUBORY",
	"kit_digital_kit": "DIGITÁLNÍ SADA",
	"kit_resources": "KAŽDÁ SADA ODKAZUJE NA TYTO BEZPLATNÉ ZDROJE"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Svou bitcoinovou podnikatelskou sadu obdržíte za 1 až 2 týdny v obyčejné bílé obálce."
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Vytiskněte si vlastní bitcoinovou podnikatelskou sadu",
	"english_bbk_files_description": "Stáhněte si soubory letáků zde.",
	"english_header": "VYTISKNĚTE SI VLASTNÍ ANGLICKOU BITCOINOVOU PODNIKATELSKOU SADU"
});

console.log(`\nDone! Created 14 business files.`);
