#!/usr/bin/env node
/**
 * Czech manifest refresh — part 2 of non-inflation namespaces.
 *
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
	"cs.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Účetní služby Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source": "The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Průvodce v jednoduché češtině, jak zanést přijímání Bitcoinu do účetnictví — hybridní peněženky, nákladová základna, kapitálové zisky a kdy zavolat účetnímu.",
	"business/accounting::accounting_s1_c1":
		"Nejjednodušší způsob, jak přijímat Bitcoin, je pomocí hybridní peněženky, která automaticky prodá 100 % přijatého Bitcoinu za koruny (nebo vaši místní měnu) ihned po příchodu platby.",
	"business/accounting::accounting_s1_c2":
		"S tímto nastavením vaše účetnictví vypadá přesně tak jako dnes — konečná částka je pokaždé v korunách. Žádná nákladová základna, žádné kapitálové zisky, žádné nové tabulky.",
	"business/accounting::accounting_s2":
		"Pokud si část Bitcoinu ponecháte: sledování nákladové základny",
	"business/accounting::accounting_s2_c1":
		"Některé firmy se rozhodnou si část přijatého Bitcoinu ponechat, místo aby ho celý automaticky konvertovaly. Pokud to je váš případ, hlavním krokem navíc je sledovat nákladovou základnu — hodnotu v korunách u každé Bitcoin platby ke dni, kdy jste ji obdrželi.",
	"business/accounting::accounting_s2_c2":
		"I když své podnikání vnímáte čistě v Bitcoinu, většina daňových úřadů stále chce, abyste hodnotu nahlásili v korunách. Dobrá zpráva: jsou to jen dvě čísla na transakci — množství přijatého Bitcoinu a jeho hodnota v korunách toho dne.",
	"business/accounting::accounting_s2_c3":
		"Použijte níže uvedené nástroje, abyste vyhledávání automatizovali a nemuseli každý den kontrolovat ceny.",
	"business/accounting::accounting_s3":
		"Utrácení nebo prodej Bitcoinu, který jste si ponechali",
	"business/accounting::accounting_s3_c1":
		"Pokud každou platbu automaticky konvertujete do korun, tuto sekci přeskočte — netýká se vás.",
	"business/accounting::accounting_s3_c2":
		"Pokud jste si nějaký Bitcoin ponechali a později se rozhodnete ho utratit nebo prodat, doplňte prodejní cenu do stejné tabulky s nákladovou základnou. Rozdíl mezi tím, kolik Bitcoin stál, když jste ho obdrželi, a tím, kolik stojí, když ho utratíte nebo prodáte, je kapitálový zisk nebo ztráta.",
	"business/accounting::accounting_s3_c3": "Dva rychlé příklady:",
	"business/accounting::accounting_s4":
		"Potřebujete profíka, který rozumí Bitcoinu?",
	"business/accounting::accounting_s4_c1":
		"Pokud to raději přenecháte někomu jinému — nebo je vaše účetnictví Bitcoinu složitější, než co zvládne hybridní peněženka — vřele doporučujeme Účetní služby Satoshi Pacioli, firmu specializovanou na Bitcoin účetnictví pro podniky.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin účetnictví pro vaši firmu",
	"business/accounting::accounting_card_bpr_label": "CENA BITCOINU",
	"business/accounting::accounting_card_bpr_title":
		"Vyhledejte aktuální či historickou cenu Bitcoinu v dolarech",
	"business/accounting::accounting_card_pacioli_label": "BITCOIN ÚČETNÍ",
	"business/accounting::accounting_card_spreadsheet_label": "IMPORT DO EXCELU",
	"business/accounting::accounting_card_spreadsheet_title":
		"Automaticky stahujte ceny Bitcoinu do Excelu",
	"business/accounting::accounting_card_wallets_label": "HYBRIDNÍ PENĚŽENKY",
	"business/accounting::accounting_card_wallets_title":
		"Podívejte se na naše doporučené firemní peněženky",
	"business/accounting::accounting_disclaimer":
		"Tento průvodce slouží pouze pro informační účely a není daňovým poradenstvím. Pro daňové poradenství specifické pro vaši situaci se prosím obraťte na kvalifikovaného účetního.",
	"business/accounting::accounting_disclaimer_label": "Upozornění",
	"business/accounting::accounting_example_feb_1": "1. února",
	"business/accounting::accounting_example_gain_badge": "Kapitálový zisk",
	"business/accounting::accounting_example_gain_explain":
		"Zaznamenáte kapitálový zisk 10 $.",
	"business/accounting::accounting_example_jan_1": "1. ledna",
	"business/accounting::accounting_example_loss_badge": "Kapitálová ztráta",
	"business/accounting::accounting_example_loss_explain":
		"Zaznamenáte kapitálovou ztrátu 10 $.",
	"business/accounting::accounting_example_received_label": "Přijato",
	"business/accounting::accounting_example_sold_label":
		"Prodáno nebo utraceno",
	"business/accounting::accounting_hero_subtitle":
		"Přijímání Bitcoinu ve vaší firmě nemusí komplikovat vaše účetnictví. Zde je krátká verze — plus nástroje a odborníci, díky kterým to bude bezbolestné.",
	"business/accounting::accounting_intro_c1":
		"Pokud již přijímáte hotovost nebo karty, přidat do firemního účetnictví Bitcoin je jednodušší, než to vypadá. Máte dvě cesty: automaticky konvertovat každou Bitcoin platbu do korun hned po jejím příchodu (žádné nové účetnictví) nebo si část ponechat jako Bitcoin (pár čísel navíc ke sledování).",
	"business/accounting::accounting_intro_c2":
		"Tento průvodce vás provede oběma cestami — abyste si mohli vybrat tu, která vyhovuje vašemu podnikání, a začít přijímat Bitcoin s klidem.",
	"business/accounting::accounting_s1": "Snadná cesta: automatická konverze do korun",
	"business/accounting::accounting_s3_c6":
		"A to je vše. Základní matematika je stejná, jakou účtujete jakékoli jiné zhodnocující se nebo znehodnocující se aktivum.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — aktuální a historická cena Bitcoinu v dolarech",
	"business/accounting::sources_satoshi_pacioli":
		"Účetní služby Satoshi Pacioli — Bitcoin účetnictví pro firmy",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — import cen kryptoměn do Excelu",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Stručné odpovědi na otázky, které si obchodníci kladou nejčastěji, než začnou přijímat Bitcoin — poplatky, vypořádání, peněženky, chargebacky, náklady a další.",
	"business/faq::faq_intro_c1":
		"Klepnutím na libovolnou otázku níže se rozbalí odpověď. Až budete připraveni začít přijímat Bitcoin, zdroje pro firmy v dolní části stránky vás provedou každým krokem.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "ÚČETNICTVÍ",
	"business/index::biz_label_faq": "ČASTÉ DOTAZY",
	"business/index::biz_label_maps": "MAPY OBCHODNÍKŮ",
	"business/index::biz_label_rewards": "ODMĚNY",
	"business/index::biz_label_stickers": "SAMOLEPKY",
	"business/index::biz_label_wallets": "PENĚŽENKY",
	"business/index::biz_meta_description":
		"Přijímejte Bitcoin ve své firmě za nižší poplatky, s okamžitým vypořádáním, bez chargebacků a získejte víc zákazníků.",
	"business/index::business_hero_subtitle":
		"Přijímejte platby s nižšími poplatky, dostávejte zaplaceno okamžitě a získejte miliony nových zákazníků — bez smluv a bez skrytých nákladů.",
	"business/index::business_intro_c1":
		"Bitcoin dává vaší firmě rychlejší, levnější a soukromější způsob, jak dostat zaplaceno. Žádní prostředníci. Žádné chargebacky. Žádné smlouvy. Jen peníze, které se vypořádají během sekund, přímo od zákazníka k vám.",
	"business/index::business_intro_c2":
		"Níže je krátká verze toho, proč je Bitcoin dobrý pro podnikání — a pod ní každý zdroj, který potřebujete, abyste ho mohli začít přijímat už dnes.",
	"business/index::business_resources_heading":
		"Vše, co potřebujete k přijímání Bitcoinu",
	"business/index::business_resources_intro":
		"Procházejte tyto zdroje vlastním tempem. Každý je krátký a praktický průvodce.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header": "Řekněte nám o své firmě",
	"business/maps::biz_maps_form_intro":
		"Potřebujeme jen pár údajů, abychom vás zapsali. Údaje o adrese uchováváme jen po dobu nezbytnou k odeslání vaší firmy do map.",
	"business/maps::biz_maps_hero_subtitle":
		"Zapište svou firmu zdarma na BTC Map — otevřený celosvětový adresář obchodníků přijímajících Bitcoin — aby vás Bitcoineři ve vašem okolí našli a mohli u vás utratit Bitcoin.",
	"business/maps::biz_maps_hero_title":
		"Umístěte svou firmu na mapy Bitcoin obchodníků",
	"business/maps::biz_maps_intro_c1":
		"Bitcoineři aktivně hledají místa, kde utratit. Když bude vaše firma na mapě, ukážete se každému Bitcoin uživateli, který v okolí hledá, kde se najíst, nakoupit nebo přespat — zcela zdarma.",
	"business/maps::biz_maps_intro_c2":
		"Stačí vyplnit krátký formulář níže a my vaši firmu odešleme na BTC Map a další mapy Bitcoin obchodníků.",
	"business/maps::biz_maps_meta_description":
		"Zapište svou firmu zdarma na BTC Map a další mapy Bitcoin obchodníků, aby vás Bitcoineři ve vašem okolí našli.",
	"business/maps::biz_maps_placeholder_address": "Ulice a číslo popisné",
	"business/maps::biz_maps_placeholder_category":
		"Kategorie (např. restaurace, kavárna, hotel)",
	"business/maps::biz_maps_placeholder_city": "Město",
	"business/maps::biz_maps_placeholder_country": "Země",
	"business/maps::biz_maps_placeholder_name": "Název firmy",
	"business/maps::biz_maps_placeholder_region": "Kraj / region / oblast",
	"business/maps::biz_maps_placeholder_website": "Webové stránky (nepovinné)",
	"business/maps::biz_maps_view_map_cta": "Zobrazit BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Zobrazit BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Děkujeme za odeslání vaší firmy. Brzy vás zapíšeme na mapy Bitcoin obchodníků.",
	"business/maps-success::biz_maps_success_hero_title": "Žádost přijata 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Vaše firma bude zapsána na BTC Map a další adresáře Bitcoin obchodníků během 1 až 2 týdnů. Každé přihlášení kontrolujeme ručně, abychom udrželi mapy přesné.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Jakmile bude vaše zapsání živé, Bitcoineři ve vašem okolí si vaši firmu najdou a přijdou tam utratit Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header": "Co bude následovat",
	"business/maps-success::biz_maps_success_view_c1":
		"Zatímco čekáte, podívejte se na BTC Map a uvidíte rostoucí síť firem po celém světě, které přijímají Bitcoin.",
	"business/maps-success::biz_maps_success_view_header": "Podívejte se, kde se objevíte",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Stáhněte si anglické soubory se samolepkami, abyste si mohli vytisknout vlastní samolepky „Zde přijímáme Bitcoin“.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Vytiskněte si vlastní samolepky „Zde přijímáme Bitcoin“ v angličtině, abyste dali zákazníkům vědět, že přijímáte Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Stáhněte si anglické soubory samolepek „Zde přijímáme Bitcoin“",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Děkujeme, že jste si vyžádali soubory samolepek „Zde přijímáme Bitcoin“ ve vašem jazyce.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Žádost přijata 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Vaše soubory se samolepkami vytvoříme a zveřejníme během 3 až 4 týdnů. Jakmile budou připraveny, budete si je moci zdarma stáhnout a vytisknout z naší stránky se soubory samolepek.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Soubory samolepek vydáváme po dávkách, takže může trvat několik týdnů, než váš jazyk půjde naživo. Děkujeme za trpělivost!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Co bude následovat",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk": "Objednat hromadně",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Vyžádat další balíček zdarma",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Vaše samolepky „Zde přijímáme Bitcoin“ zdarma obdržíte za 2 až 4 týdny v obyčejné bílé obálce se 3 samolepkami.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Vaše samolepky jsou na cestě 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Pokud 3 samolepky pro vaši firmu nestačí, klidně si vyžádejte další balíček zdarma — nebo si objednejte hromadně u stejného tiskaře, jaký používáme my.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Potřebujete víc samolepek?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Na vchodové dveře nebo do výlohy, aby je zákazníci viděli, než vejdou dovnitř",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Poblíž pokladny, platebního terminálu nebo místa pro placení",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Na jídelní lístky, ceníky nebo kasičky na spropitné",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Neumisťujte je na místa, která nevlastníte nebo nemáte povolení tam samolepky umístit",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Dobrá místa pro vaše samolepky",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Dejte zákazníkům vědět, že přijímáte Bitcoin. Objednejte si balíček samolepek „Zde přijímáme Bitcoin“ zdarma, abyste je vyvěsili ve své provozovně.",
	"business/stickers::biz_stickers_hero_title":
		"Samolepky „Zde přijímáme Bitcoin“ zdarma",
	"business/stickers::biz_stickers_intro_c1":
		"Přijímání Bitcoinu je jen polovina práce — vaši zákazníci také musí vědět, že ho přijímáte. Tyto malé samolepky „Zde přijímáme Bitcoin“ jsou navrženy tak, aby se daly nalepit na vaše vchodové dveře, pokladnu, menu nebo kamkoli, kde je zákazníci uvidí, než zaplatí.",
	"business/stickers::biz_stickers_intro_c2":
		"Pošleme vám balíček zdarma kamkoli v USA nebo Kanadě, nebo si můžete vytisknout vlastní kdekoli na světě.",
	"business/stickers::biz_stickers_option_canada": "🇨🇦 Kanada — zdarma poštou",
	"business/stickers::biz_stickers_option_print":
		"🌍 Celosvětově — vytisknu si vlastní",
	"business/stickers::biz_stickers_option_usa": "🇺🇸 USA — zdarma poštou",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Překlad fráze „Bitcoin Accepted Here“",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Překlad fráze „Scan to learn why Bitcoin is good for business.“",
	"business/stickers::biz_stickers_print_c1":
		"Vlastní samolepky „Zde přijímáme Bitcoin“ si můžete vytisknout bez ohledu na to, kde žijete. Klepnutím na svůj jazyk níže stáhnete soubory samolepek a pokyny k tisku.",
	"business/stickers::biz_stickers_print_header":
		"Vytiskněte si vlastní soubory samolepek",
	"business/stickers::biz_stickers_request_c1":
		"Vyplňte formulář níže a vyžádejte si soubory samolepek „Zde přijímáme Bitcoin“ ve vašem místním jazyce. Dáme vám vědět, jakmile budou připraveny.",
	"business/stickers::biz_stickers_request_header": "Nevidíte svůj jazyk?",
	"business/stickers::biz_stickers_step_description":
		"Balíček zdarma pošleme na adresy v USA a Kanadě. Kdekoli jinde na světě si můžete vytisknout vlastní.",
	"business/stickers::biz_stickers_step_header":
		"Jak si chcete samolepky pořídit?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Všechny Bitcoin peněženky jsou vzájemně kompatibilní — vyberte si tu, která sedí vaší firmě. Zdarma, okamžité vypořádání, bez chargebacků.",
	"business/wallets::sources_breez_business":
		"Breez — Lightning peněženka pouze pro Bitcoin",
	"business/wallets::sources_ibex": "IBEX — infrastruktura pro Lightning platby",
	"business/wallets::sources_opennode":
		"OpenNode — zpracovatel Bitcoin plateb",
	"business/wallets::sources_square": "Square — přijímejte Bitcoin platby",
	"business/wallets::sources_zaprite":
		"Zaprite — fakturace v Bitcoinu pro firmy",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin peněženky jsou zdarma. Vyberte si tu, která vyhovuje vaší firmě — osobní prodej, online nebo faktury — a začněte přijímat Bitcoin během pár minut.",
	"business/wallets::wallets_section_invoice":
		"Peněženky pro firmy fakturující klientům",
	"business/wallets::wallets_section_invoice_intro":
		"Pokud fakturujete klientům (poradenství, freelancing, B2B služby), použijte peněženku postavenou kolem fakturace. Klient zaplatí Bitcoin fakturu několika kliknutími.",
	"business/wallets::wallets_section_multiple":
		"Peněženky pro firmy s více zaměstnanci",
	"business/wallets::wallets_section_multiple_intro":
		"Pokud máte tým, který přijímá platby na pokladně, vyberte peněženku, která podporuje více přihlášení zaměstnanců — takže každý zaměstnanec dostane vlastní PIN a vy si udržíte přehlednou evidenci, kdo jakou platbu přijal.",
	"business/wallets::wallets_section_online": "Peněženky pro online podnikání",
	"business/wallets::wallets_section_online_intro":
		"Prodáváte na webu? Tyto peněženky se napojí na váš online obchod a přijímají Bitcoin od kteréhokoli zákazníka, kdekoli na světě — bez chargebacků a bez nutnosti mít obchodnický účet.",
	"business/wallets::wallets_section_sole":
		"Peněženky pro samostatně vlastněné firmy",
	"business/wallets::wallets_section_sole_intro":
		"Pokud provozujete obchod, kavárnu, studio nebo službu sami, bude vám stačit kterákoli z těchto peněženek. Vyberte si podle toho, zda si chcete platby ponechat v Bitcoinu, nebo část každé platby automaticky konvertovat do místní měny.",
	"business/wallets::wallets_strike_note":
		"Strike Business vám umožňuje přijímat Bitcoin a Lightning platby s nulovými poplatky a okamžitým vypořádáním. Podporuje osobní, online i fakturační platby s volitelnou automatickou konverzí do vaší místní měny.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business": "Zde přijímáme Bitcoin",
	"business/why::why_good_for_you": "Proč je Bitcoin skvělý i pro vás",
	"business/why::why_learn_more_lowercase": "Zjistit víc →",
	"business/why::why_s1_c1":
		"K inflaci dochází, když se tiskne víc peněz nebo když se vytvářejí z ničeho. Peníze ve vaší kapse tak postupem času ztrácejí hodnotu — a právě proto ceny rok co rok rostou.",
	"business/why::why_s1_c2":
		"Bitcoin má pevnou zásobu 21 milionů mincí. Žádná vláda, banka ani firma nemůže vytisknout další. Vaše úspory v Bitcoinu si časem hodnotu udrží, místo aby ji tiše ztrácely.",
	"business/why::why_s2_c1":
		"V posledních letech padlo několik amerických bank kvůli bankovním runům. Když si chtělo vybrat příliš mnoho zákazníků najednou, banky neměly dost hotovosti, aby jim to všem vyplatily.",
	"business/why::why_s2_c2":
		"Místo toho, aby vaše peníze jen držely, banky většinu z nich půjčují a investují. Pokud tyto investice selžou — nebo pokud vkladatelé ztratí důvěru — banka může padnout a vaše vklady mohou být zmrazeny nebo ztraceny.",
	"business/why::why_s2_c3":
		"S Bitcoinem můžete držet své peníze přímo ve vlastní peněžence. Žádná banka. Žádný prostředník. Žádný bankovní run.",
	"business/why::why_s3_c1":
		"Na rozdíl od kreditních karet, PayPalu nebo tradičních bankovních účtů Bitcoin nevyžaduje ničí povolení.",
	"business/why::why_s3_c2":
		"Nikdo vám nemůže zmrazit účet, zablokovat platbu ani vás odpojit od sítě. Je to první finanční systém v historii, který můžete používat svobodně, bez strachu z cenzury nebo zabavení.",
	"business/why::why_s4_c1":
		"Bitcoin je často nepochopený, ale tiše koná ve světě spoustu dobrého.",
	"business/why::why_s4_c2":
		"Pomohl aktivistům za lidská práva bojovat za svobodu, snížil globální emise metanu ze skládek a ropných polí, stabilizoval elektrické sítě a financoval veřejné statky jako národní parky.",
	"business/why::why_biz_s1": "Nižší poplatky, víc pro firmu",
	"business/why::why_biz_s1_c1":
		"Bitcoin platby obcházejí banky a karetní společnosti, které si berou z každého prodeje 2–3 %. Firma si z toho, co zaplatíte, nechá víc — což často znamená lepší ceny a lepší služby pro vás.",
	"business/why::why_biz_s2": "Okamžité vypořádání, bez chargebacků",
	"business/why::why_biz_s2_c1":
		"Bitcoin platby se vypořádají během sekund, přímo z vaší peněženky do firmy. Žádné čekání dny na to, až banka uvolní prostředky, a žádné nákladné spory o chargebacky — firma se tak může soustředit na zákazníky místo boje s podvody.",
	"business/why::why_biz_s3": "Přijímání zdarma, otevřené všem",
	"business/why::why_biz_s3_c1":
		"Pro přijímání Bitcoinu firma neplatí žádné smlouvy, měsíční poplatky ani náklady na zřízení. A miliony Bitcoin uživatelů po celém světě aktivně vyhledávají obchodníky, kteří ho přijímají — čímž této firmě poskytují expozici novým zákazníkům zdarma.",
	"business/why::why_business_cta_intro":
		"Podnikáte a chcete začít přijímat Bitcoin?",
	"business/why::why_business_cta_link": "Podívejte se, jak to funguje →",
	"business/why::why_for_business": "Proč je Bitcoin skvělý pro tuto firmu",
	"business/why::why_for_business_intro":
		"Přijímáním Bitcoinu si firma nechá víc z každého prodeje, dostane zaplaceno okamžitě bez chargebacků a osloví globální publikum Bitcoin uživatelů — to vše bez smluv a měsíčních poplatků.",
	"business/why::why_good_for_you_intro":
		"Bitcoin není užitečný jen u pokladny — je to lepší forma peněz, která chrání vaše úspory, soukromí a svobodu transakcí. Tady je krátký přehled.",
	"business/why::why_hero_subtitle":
		"Právě jste naskenovali samolepku „Zde přijímáme Bitcoin“. Tady je důvod, proč je to skvělá zpráva — pro tuto firmu i pro vás.",
	"business/why::why_intro_c1":
		"Firma, ve které se nacházíte, přijímá Bitcoin — moderní platební síť s otevřeným zdrojovým kódem, kterou může používat kdokoli kdekoli na světě, aniž by si banky a prostředníci brali provizi.",
	"business/why::why_intro_c2":
		"Níže je krátká verze toho, proč je přijímání Bitcoinu dobré pro tuto firmu, plus proč je používání Bitcoinu dobré pro vás jako zákazníka.",
	"business/why::why_next_business_label": "PŘIJÍMAT BITCOIN",
	"business/why::why_next_business_title":
		"Přijímejte Bitcoin ve své firmě",
	"business/why::why_next_buy_label": "KOUPIT BITCOIN",
	"business/why::why_next_buy_title": "Kupte si svůj první Bitcoin",
	"business/why::why_next_learn_label": "ZJISTIT VÍC",
	"business/why::why_next_learn_title": "Zjistěte víc o Bitcoinu",
	"business/why::why_next_wallet_label": "ZÍSKAT PENĚŽENKU",
	"business/why::why_next_wallet_title": "Získejte vlastní Bitcoin peněženku",
	"business/why::why_whats_next_heading": "Kam dál?",
	"business/why::why_whats_next_intro":
		"Pokud je to vaše první naskenování Bitcoin samolepky, zde jsou nejužitečnější místa, kam vyrazit dál.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Peer-to-peer",
	"buy::buy_bitcoin_guide": "Jak koupit Bitcoin",
	"buy::buy_step_1_header": "Vyberte si svou zemi",
	"buy::buy_step_2_header": "Zvolte způsob platby",
	"buy::buy_step_3_header": "Vaše možnosti nákupu",
	"buy::buy_step_4_header": "Bezpečně uložte svůj Bitcoin",
	"buy::buy_header_subtitle":
		"Jednoduchý průvodce krok za krokem nákupem vašeho prvního Bitcoinu.",
	"buy::buy_howto_name": "Jak koupit Bitcoin",
	"buy::buy_meta_description":
		"Naučte se bezpečně koupit Bitcoin s naším průvodcem krok za krokem. Vyberte si svou zemi a způsob platby a najděte nejlepší možnosti nákupu Bitcoinu pro vás.",
	"buy::buy_step_1_eyebrow": "Krok 1",
	"buy::buy_step_2_eyebrow": "Krok 2",
	"buy::buy_step_3_eyebrow": "Krok 3",
	"buy::buy_step_4_eyebrow": "Krok 4",
	"buy::buy_storage_cta_label": "Další krok",
	"buy::sources_bisq":
		"Bisq — decentralizovaná peer-to-peer směnárna Bitcoinu",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — celosvětový adresář Bitcoin bankomatů",
	"buy::sources_kraken": "Kraken — zavedená Bitcoin směnárna",
	"buy::sources_relai":
		"Relai — švýcarská aplikace pro samoúschovu Bitcoinu",
	"buy::sources_river":
		"River — nákup, těžba a úschova pouze Bitcoinu",
	"buy::sources_strike_lightning":
		"Strike — nákup Bitcoinu s podporou Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — dolar-cost averaging pouze pro Bitcoin",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Přidat jazyk",
	"common::common_next_buy_bitcoin": "Kupte Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Naučte se, jak bezpečně koupit Bitcoin",
	"common::common_next_calculate": "Spočítejte si svou inflaci",
	"common::common_next_calculate_desc":
		"Zjistěte, jak inflace postupem času ovlivňuje váš plat",
	"common::common_next_get_wallet": "Získat peněženku",
	"common::common_next_get_wallet_desc":
		"Získejte svou první Bitcoin peněženku — je zdarma",
	"common::common_next_keep_learning": "Učte se dál",
	"common::common_next_keep_learning_desc":
		"Podívejte se, jak Bitcoin zlepšuje svět",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics — index spotřebitelských cen (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — peněžní zásoba (kategorický index)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Může selhat aukce Treasury?“",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Co bude dál?",
	"common::common_sticker_files_mission_5": "vyžádat si balíček",
	"common::common_site_tagline": "Bitcoinové vzdělání pro všechny.",
	"common::common_source_btc_map":
		"BTC Map — celosvětový adresář obchodníků přijímajících Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — bezplatný open-source samohostovaný zpracovatel Bitcoin plateb",
	"common::common_source_oshi":
		"Oshi — platforma Bitcoinových odměn pro obchodníky",
	"common::common_source_strike_business":
		"Strike — Bitcoin a Lightning platby pro firmy",
	"common::common_sources_group_bitcoin": "Data o Bitcoinu",
	"common::common_sources_group_cpi":
		"Inflace / index spotřebitelských cen",
	"common::common_sources_group_debt": "Vládní dluh",
	"common::common_sources_group_money": "Data o peněžní zásobě",
	"common::common_sources_group_stories": "Příklady ze skutečného života",
	"common::common_sticker_files_mission_6": "anglických samolepek zdarma.",
	"common::common_sticker_files_next_flyers_label": "Letáky",
	"common::common_sticker_files_next_flyers_title":
		"Vytiskněte si Bitcoin leták",
	"common::common_sticker_files_next_languages_label": "Soubory samolepek",
	"common::common_sticker_files_next_languages_title":
		"Podívejte se na soubory samolepek v jiných jazycích",
	"common::common_sticker_files_print_these": "VYTISKNĚTE SI NA 1 KLIK",
	"common::common_sticker_name_bdhi_black":
		"Samolepka „Bitcoin Doesn\u2019t Have Inflation“ (černá)",
	"common::common_sticker_name_bdhi_orange":
		"Samolepka „Bitcoin Doesn\u2019t Have Inflation“ (oranžová)",
	"common::common_sticker_name_caution":
		"Bitcoin samolepka „Caution! Melting Ice Cube“",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin samolepka „Cure Inflation“",
	"common::common_sticker_name_danger":
		"Bitcoin samolepka „Danger! Inflation Ahead“",
	"common::common_sticker_name_fix":
		"Bitcoin samolepka „Fix The Money, Fix The World“",
	"common::common_sticker_name_got_inflation":
		"Bitcoin samolepka „Got Inflation?“",
	"common::common_sticker_name_study": "Samolepka „Study Bitcoin“",
	"common::common_sticker_name_warning":
		"Bitcoin samolepka „Warning! Inflation is Stealing Your Savings“",
	"common::common_sticker_name_what_if":
		"Bitcoin samolepka „What if your money didn\u2019t have inflation?“",
	"common::common_sticker_tips_heading": "Tipy na samolepky",
	"common::common_sticker_tips_intro":
		"Jakmile si samolepky vytisknete, umístěte je tam, kde je lidé uvidí! Dobrá místa jsou:",
	"common::common_sticker_tips_list_1":
		"na veřejných místech, kde si jich lidé všimnou",
	"common::common_sticker_tips_list_2":
		"na místech, odkud se pravděpodobně hned neodstraní (samolepky nezpůsobují trvalé poškození)",
	"common::common_sticker_tips_list_3":
		"na povrchy, na nichž dobře drží (kov, plast, sklo)",
	"common::common_sticker_tips_list_4":
		"NE na soukromé majetky, přes dopravní značky, bankomaty nebo benzinové pumpy",
	"common::common_stickers_printer_prefix": "My používáme",
	"common::common_stickers_printer_suffix":
		"ale můžete použít kteroukoli tiskárnu samolepek.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — index spotřebitelských cen pro všechny městské spotřebitele",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — peněžní zásoba M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Spočítejte si svou inflační mezeru",
	"compound-inflation-calculator::cic_cta_label": "Další krok",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Zjistěte, o kolik potřebuje váš plat vzrůst, aby držel krok s inflací.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Prozkoumejte další témata",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Podívejte se, jak Bitcoin souvisí s penězi, svobodou, energií a dalším.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Naučte se, jak funguje inflace",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Jak vytisknout a vyvěsit tyto Bitcoin letáky",
	"flyers::flyers_hero_subtitle":
		"Bezplatné tisknutelné Bitcoin letáky. Vyvěste je na veřejných místech, abyste pomohli více lidem se dozvědět o Bitcoinu.",
	"flyers::flyers_hero_title": "Tiskněte a vyvěšujte Bitcoin letáky",
	"flyers::flyers_next_get_stickers": "Šiřte povědomí",
	"flyers::flyers_next_get_stickers_desc":
		"Objednejte si balíček Bitcoin samolepek zdarma",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Zapojte se a šiřte Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Chcete pomoci budovat bitcoinovou oběhovou ekonomiku? Nejjednodušší způsob je pomoci místním firmám začít přijímat Bitcoin platby.",
	"get-involved::get_involved_business_content_2":
		"Znáte firmu, která by byla otevřena tomuto kroku? Pošlete majitele na naši",
	"get-involved::get_involved_business_content_3":
		"Bitcoin stránku pro podniky.",
	"get-involved::get_involved_description":
		"Naše bezplatné zdroje usnadňují šíření adopce Bitcoinu. Samolepky, letáky, samolepky „Zde přijímáme Bitcoin“ pro firmy a open-source kód, kam může kdokoli přispívat.",
	"get-involved::get_involved_header": "Zapojte se a šiřte Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Můžete to pomoci změnit. Vytvořili jsme několik bezplatných zdrojů, které usnadňují šíření naděje, kterou Bitcoin přináší vašemu okolí.",
	"get-involved::get_involved_biz_stickers_note":
		"Už přijímáte Bitcoin? Dejte zákazníkům vědět našimi samolepkami „Zde přijímáme Bitcoin“ zdarma. Pošleme balíček na jakoukoli adresu v USA nebo Kanadě, nebo si můžete vytisknout vlastní kdekoli na světě.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Samolepky „přijímáme zde“",
	"get-involved::get_involved_card_biz_stickers_source":
		"Zdroj: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Samolepky „Zde přijímáme Bitcoin“ zdarma pro vaši firmu",
	"get-involved::get_involved_card_business_label": "Bitcoin pro firmy",
	"get-involved::get_involved_card_business_source": "Zdroj: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Vše, co firma potřebuje, aby začala přijímat platby v Bitcoinu",
	"get-involved::get_involved_card_flyers_label": "Tisknutelné letáky",
	"get-involved::get_involved_card_flyers_source": "Zdroj: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Stáhněte si a vytiskněte bezplatný Bitcoin leták",
	"get-involved::get_involved_card_github_label": "Otevřený zdrojový kód",
	"get-involved::get_involved_card_github_source": "Zdroj: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Přispějte do bitcoin.rocks na GitHubu",
	"get-involved::get_involved_card_stickers_label": "Samolepky zdarma",
	"get-involved::get_involved_card_stickers_source":
		"Zdroj: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Vyžádejte si balíček Bitcoin samolepek zdarma doručený až k vaším dveřím",
	"get-involved::get_involved_flyers_content_1":
		"Letáky jsou jedním z nejjednodušších způsobů, jak představit Bitcoin své komunitě. Stáhněte si bezplatný tisknutelný Bitcoin leták, vytiskněte si tolik kopií, kolik chcete, a vyvěste je na komunitních nástěnkách, v kavárnách, na setkáních nebo kdekoli jinde, kde se lidé scházejí.",
	"get-involved::get_involved_flyers_content_2":
		"Každý leták obsahuje poutavý titulek a QR kód, který zvědavé čtenáře přivede na bitcoin.rocks, aby se dozvěděli víc.",
	"get-involved::get_involved_flyers_content_3":
		"Na rozdíl od samolepek lze letáky tisknout na vyžádání odkudkoli na světě — stačí vám jen tiskárna a pár minut.",
	"get-involved::get_involved_flyers_header": "Vytiskněte a vyvěste leták",
	"get-involved::get_involved_flyers_image_alt":
		"Náhled bezplatného tisknutelného Bitcoin letáku z bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks je bezplatný open-source projekt pod licencí MIT. Naším posláním je urychlit přijetí Bitcoinu skrze vzdělávání — a sami to nezvládneme.",
	"get-involved::get_involved_github_content_2":
		"Ať jste vývojář, designér, textař nebo překladatel, existuje způsob, jak můžete pomoci. Zvláště vítáme přispěvatele, kteří umí přeložit náš obsah do dalších jazyků, aby se o Bitcoinu mohli dozvědět lidé po celém světě ve svém rodném jazyce.",
	"get-involved::get_involved_github_content_3":
		"Forkujte repozitář, otevřete pull request, založte issue nebo projekt alespoň hvězdičkou podpořte. Každý příspěvek pomáhá Bitcoinu oslovit více lidí.",
	"get-involved::get_involved_github_header": "Přispějte na GitHubu",
	"get-involved::get_involved_sticker_image_alt":
		"Balíček bezplatných textových Bitcoin samolepek z bitcoin.rocks",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "spoření",
	"index::home_card_label_art_1": "Porovnejme",
	"index::home_card_label_art_2": "Šiřte povědomí",
	"index::home_card_label_art_3": "Pouliční umění",
	"index::home_card_label_bank_runs": "Systém plných rezerv",
	"index::home_card_label_bonds": "Porovnejme",
	"index::home_card_label_business_1": "V čem je rozdíl?",
	"index::home_card_label_business_2": "Přijímat Bitcoin platby",
	"index::home_card_label_cash": "Porovnejme",
	"index::home_card_label_cbdc": "Otevřený, nebo uzavřený?",
	"index::home_card_label_coding_1": "Interaktivní tutoriál",
	"index::home_card_label_coding_2": "Stavte hardware",
	"index::home_card_label_coding_3": "Programátorské úlohy",
	"index::home_card_label_crowdfunding_1": "Protesty EndSARS",
	"index::home_card_label_crowdfunding_2": "Nezastavitelné peníze",
	"index::home_card_label_crowdfunding_3": "Financujte svůj projekt",
	"index::home_card_label_crypto": "V čem je rozdíl?",
	"index::home_card_label_energy_1": "Stabilizace sítě",
	"index::home_card_label_energy_4": "Řízení poptávky",
	"index::home_card_label_energy_5": "Elektrifikace venkova",
	"index::home_card_label_energy_6": "Pobídky pro obnovitelné zdroje",
	"index::home_card_label_environment_1": "Snížení metanu",
	"index::home_card_label_environment_2": "Zachránil národní park",
	"index::home_card_label_environment_3": "Nejzelenější odvětví",
	"index::home_card_label_environment_4": "Snižuje spalovaný plyn",
	"index::home_card_label_equality_1": "Naděje a příležitost",
	"index::home_card_label_equality_2": "Velký zlom",
	"index::home_card_label_food_1": "Ceny potravin",
	"index::home_card_label_food_2": "Farmy a půda",
	"index::home_card_label_freedom_1": "Autoritářské režimy",
	"index::home_card_label_freedom_2": "Jedinečný nástroj",
	"index::home_card_label_get_started_1": "Základy pro začátečníky",
	"index::home_card_label_get_started_2": "Vaše první peněženka",
	"index::home_card_label_get_started_3": "Kupte Bitcoin",
	"index::home_card_label_gold": "Co je lepší?",
	"index::home_card_label_housing_1": "Dostupné bydlení",
	"index::home_card_label_human_rights_1": "Prosazování lidských práv",
	"index::home_card_label_human_rights_2": "Adopce zdola",
	"index::home_card_label_human_rights_3": "Globální dopad",
	"index::home_card_label_inflation": "Bitcoin jsou lepší peníze",
	"index::home_card_label_networks_1": "Živý pohled na síť",
	"index::home_card_label_networks_2": "Porovnejme",
	"index::home_card_label_payments_1": "V čem je rozdíl?",
	"index::home_card_label_payments_2": "Rychlé a levné platby",
	"index::home_card_label_payments_3": "Zahraniční převody",
	"index::home_card_label_payments_4": "Přijímat platby",
	"index::home_card_label_politics_1": "Politický paradox",
	"index::home_card_label_politics_2": "Jděte do toho",
	"index::home_card_label_property_rights_1": "Porovnejme",
	"index::home_card_label_property_rights_2": "Skutečné vlastnictví",
	"index::home_card_label_salary": "Chraňte svůj plat",
	"index::home_card_label_self_custody_1": "Průvodce Bitcoin peněženkami",
	"index::home_card_label_self_custody_2": "Nejdůležitější krok",
	"index::home_card_label_self_custody_3": "Svrchované peníze",
	"index::home_card_label_war_1": "Konec nekonečné války",
	"index::home_card_label_war_2": "Pomoc veteránům",
	"index::home_card_label_war_3": "Útěk z války",
	"index::home_h1":
		"Bitcoin jsou lepší peníze, které budují lepší svět.",
	"index::home_nav_about": "O nás",
	"index::home_nav_get_involved": "Zapojit se",
	"index::home_nav_learn": "Vzdělávat se",
	"index::home_source_prefix": "Zdroj:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon a Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Podívejte se na našeho",
	"lightning::lightning_grid_heading": "Oblíbené Lightning peněženky",
	"lightning::lightning_hardware_cta_label": "Hardwarové peněženky",
	"lightning::lightning_header_subtitle":
		"Lightning vám umožňuje posílat Bitcoin během sekund za zlomek haléře — vyberte si peněženku, jejíž kompromisy odpovídají tomu, kolik Bitcoinu plánujete utratit.",
	"lightning::lightning_s1_c4_end": "pro víc informací.",
	"lightning::lightning_s1_c4_link":
		"Průvodce Bitcoin hardwarovými peněženkami",
	"lightning::sources_acinq_phoenix": "ACINQ — Phoenix Lightning peněženka",
	"lightning::sources_breez_lightning":
		"Breez — Lightning peněženka s vlastní úschovou",
	"lightning::sources_lightning_labs":
		"Lightning Labs — dokumentace Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — custodiální Lightning peněženka",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android a web",
	"nostr/index::nostr_platform_web": "Webový prohlížeč",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr je nový decentralizovaný protokol pro online komunikaci — neovládá ho žádná firma, Bitcoin zapy jsou nativně zabudované a mezi klienty můžete přecházet, aniž byste ztratili sledující.",
	"nostr/index::nostr_amethyst_f1": "Množství funkcí a přizpůsobení",
	"nostr/index::nostr_amethyst_f2": "Vyžaduje samostatnou Bitcoin peněženku",
	"nostr/index::nostr_amethyst_f3": "100% zdarma",
	"nostr/index::nostr_damus_f1": "Známé rozhraní ve stylu Twitteru",
	"nostr/index::nostr_damus_f2": "Vyžaduje samostatnou Bitcoin peněženku",
	"nostr/index::nostr_damus_f3": "100% zdarma",
	"nostr/index::nostr_download_heading": "Stáhněte si Nostr klienta zdarma",
	"nostr/index::nostr_download_intro":
		"Nostr klienti jsou bezplatné aplikace, které vám umožňují číst a přispívat na síti Nostr. Všechny jsou vzájemně kompatibilní — klienta můžete kdykoli přepnout a ponechat si své sledující i obsah.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr je nový decentralizovaný protokol pro online komunikaci — neovládá ho žádná firma, Bitcoin zapy jsou zabudované a mezi aplikacemi můžete přecházet, aniž byste ztratili sledující.",
	"nostr/index::nostr_hero_title": "Co je Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr je podobný e-mailu: protokol nikomu nepatří, aplikaci na něm může postavit kdokoli a vy si vyberete tu, která vám nejlíp vyhovuje. Na rozdíl od Twitteru nebo Facebooku zde neexistuje centrální firma, která by vás mohla cenzurovat, vyhodit nebo potlačit.",
	"nostr/index::nostr_intro_c2":
		"Níže je krátká verze toho, proč Nostr záleží — a pak každý bezplatný Nostr klient, kterého potřebujete, abyste mohli začít hned dnes.",
	"nostr/index::nostr_iris_f1":
		"Extrémně jednoduché — není nutná instalace",
	"nostr/index::nostr_iris_f2":
		"Snadný způsob, jak vyzkoušet Nostr s testovacím účtem",
	"nostr/index::nostr_iris_f3": "100% zdarma",
	"nostr/index::nostr_learn_more_label": "JDĚTE HLOUBĚJI",
	"nostr/index::nostr_learn_more_title":
		"Zjistěte víc o Nostru na nostr.how",
	"nostr/index::nostr_primal_f1": "Doporučený první klient",
	"nostr/index::nostr_primal_f2":
		"Vestavěná Bitcoin zap peněženka",
	"nostr/index::nostr_primal_f3": "100% zdarma",
	"nostr/index::nostr_s1": "Protokol, nikoli platforma",
	"nostr/index::nostr_s1_c1":
		"Nostr je nový protokol, který vám umožňuje komunikovat online bez strachu z cenzury, vyhazovu nebo potlačení.",
	"nostr/index::nostr_s1_c2":
		"Platformy jako Twitter a Facebook ovládá jediná firma, ale protokol Nostr neovládá nikdo.",
	"nostr/index::nostr_s2": "Svoboda přesunu",
	"nostr/index::nostr_s2_c1":
		"Nostr je podobný e-mailu. Nikdo neovládá e-mailový protokol a kdokoli na něm může postavit klienta (například Gmail, Hotmail atd.).",
	"nostr/index::nostr_s2_c2":
		"Protokol Nostr také nikdo neovládá a kdokoli na něm může postavit klienta (například Damus, Amethyst atd.).",
	"nostr/index::nostr_s2_c3":
		"Pokud se vám nelíbí, jak určitý klient funguje, můžete svůj Nostr účet plynule přesunout do jiného klienta, aniž byste ztratili sledující nebo obsah.",
	"nostr/index::nostr_s3": "Bitcoin je zabudován",
	"nostr/index::nostr_s3_c1":
		"Bitcoin je nativně zabudovaný do protokolu Nostr. Když uvidíte obsah, který se vám líbí, můžete jeho autorovi snadno poslat „Bitcoin zap“ jako poděkování!",
	"nostr/index::nostr_s3_c2":
		"Na centralizovaných platformách jako Twitter a Facebook vydělává peníze centrální firma z vašeho obsahu. Ale na otevřených protokolech jako Nostr vyděláváte na svém obsahu vy.",
	"nostr/index::sources_damus": "Damus — Nostr klient pro iPhone",
	"nostr/index::sources_iris": "Iris — Nostr klient v prohlížeči",
	"nostr/index::sources_nostr_how": "nostr.how — Co je Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr Protocol — open-source specifikace",
	"nostr/index::sources_primal":
		"Primal — Nostr klient s vestavěnou Bitcoin zap peněženkou",
	"nostr/index::what_is_nostr": "Co je Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Vytiskněte si vlastní Bitcoin samolepky pomocí těchto souborů.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Žádost přijata 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk": "Objednat hromadně",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Sdílet na Nostru",
	"sticker-success::sticker_success_btn_what_is_nostr": "Co je Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Potřebujete víc samolepek?",
	"sticker-success::sticker_success_hero_title":
		"Vaše samolepky jsou na cestě 🎉",
	"sticker-success::sticker_success_share_header":
		"Sdílejte místa, kam jste samolepky dali",
	"sticker-success::sticker_success_tips_header": "Dobrá místa pro samolepky",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"A když už jste u toho, vytiskněte a vyvěste vlastní",
	"stickers::stickers_instructions_1":
		"Zadejte svou poštovní adresu a my vám pošleme bezplatný balíček Bitcoin samolepek poštou. Vaše samolepky dorazí v obyčejné bílé obálce.",
	"stickers::stickers_btn_choose_pack": "Vybrat tento balíček",
	"stickers::stickers_bulk_c1": "Chcete víc než jen pár samolepek?",
	"stickers::stickers_bulk_c2":
		"Objednejte si je hromadně u stejného tiskaře, jaký používáme my",
	"stickers::stickers_bulk_c3":
		"— čím víc jich koupíte, tím levnější jsou za kus.",
	"stickers::stickers_bulk_cta": "Nakupte samolepky hromadně",
	"stickers::stickers_bulk_header": "Objednat samolepky hromadně",
	"stickers::stickers_hero_subtitle":
		"Objednejte si balíček Bitcoin samolepek zdarma a vyvěste je na veřejných místech, abyste pomohli více lidem se dozvědět o Bitcoinu.",
	"stickers::stickers_hero_title": "Bitcoin samolepky zdarma",
	"stickers::stickers_intro_c1":
		"Naším posláním je pomoct vám dát víc lidem „oranžovou pilulku“ tím, že Bitcoin samolepky budete umisťovat na veřejná místa. Všechny naše samolepky mají QR kódy, které odkazují na vzdělávací stránky o",
	"stickers::stickers_intro_c3": "inflaci",
	"stickers::stickers_intro_c4":
		"Vyberte si balíček samolepek níže a zvolte, jak si je chcete pořídit — pošleme balíček zdarma komukoli v USA nebo Kanadě, nebo si můžete vytisknout vlastní kdekoli na světě.",
	"stickers::stickers_mail_header":
		"Pošleme vám vaše samolepky zdarma poštou",
	"stickers::stickers_next_print_flyers": "Šiřte dál",
	"stickers::stickers_next_print_flyers_desc":
		"Vytiskněte si bezplatné Bitcoin letáky a vyvěste je na veřejnosti",
	"stickers::stickers_option_bulk": "📦 Celosvětově — objednat hromadně",
	"stickers::stickers_option_canada": "🇨🇦 Kanada — zdarma poštou",
	"stickers::stickers_option_print":
		"🌍 Celosvětově — vytisknu si vlastní",
	"stickers::stickers_option_usa": "🇺🇸 USA — zdarma poštou",
	"stickers::stickers_print_c1":
		"Můžete se zapojit vytištěním vlastních samolepek bez ohledu na to, kde žijete. Klepnutím na svůj jazyk níže stáhnete soubory samolepek a pokyny k tisku.",
	"stickers::stickers_print_c2":
		"Ne každá samolepka je k dispozici ve všech jazycích.",
	"stickers::stickers_print_header":
		"Vytiskněte si vlastní soubory samolepek",
	"stickers::stickers_request_c1":
		"Vyplňte formulář níže a vyžádejte si soubory samolepek ve vašem místním jazyce. Dáme vám vědět, jakmile budou připraveny.",
	"stickers::stickers_request_header": "Nevidíte svůj jazyk?",
	"stickers::stickers_share_c2":
		"Sledujte nás na Nostru vyhledáním",
	"stickers::stickers_share_c3":
		"v libovolném Nostr klientovi.",
	"stickers::stickers_signs_pack_description":
		"Výstražné, varovné a upozorňovací cedule s Bitcoin poselstvím — navržené tak, aby upoutaly pozornost a donutily lidi zastavit se a přečíst.",
	"stickers::stickers_step_1_description":
		"Každý balíček obsahuje jinou sadu Bitcoin samolepek s QR kódy, které učí lidi o Bitcoinu.",
	"stickers::stickers_step_1_eyebrow": "KROK 1",
	"stickers::stickers_step_1_header": "Vyberte si balíček samolepek",
	"stickers::stickers_step_2_description":
		"Balíček zdarma pošleme na adresy v USA a Kanadě. Kdekoli jinde na světě si můžete vytisknout vlastní nebo si objednat hromadně.",
	"stickers::stickers_step_2_eyebrow": "KROK 2",
	"stickers::stickers_step_2_header": "Jak si chcete samolepky pořídit?",
	"stickers::stickers_text_pack_description":
		"Směs Bitcoin sloganů a jednovětých bonmotů, které mají vzbudit zvědavost na veřejných prostranstvích.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Vyberte si peněženku",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — recenze kovových úložišť pro Bitcoin seed",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin peněženka s vlastní úschovou",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin hardwarová peněženka",
	"wallets::sources_coldcard_mk5":
		"Coinkite — hardwarová peněženka Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — hardwarová peněženka Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — hardwarová peněženka Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — open-source DIY zařízení pro podepisování Bitcoin transakcí",
	"wallets::wallets_grid_heading": "Oblíbené Bitcoin peněženky",
	"wallets::wallets_header_subtitle":
		"Průvodce krok za krokem, jak si vybrat peněženku, chránit své klíče a převzít plnou kontrolu nad svým Bitcoinem.",
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
		`translate-rest-part2 (cs): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50) console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
