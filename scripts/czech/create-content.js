/**
 * Creates Czech (cs) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
 */
const fs = require('fs');
const path = require('path');
const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'cs';
const today = '2026-04-02';
const meta = { "@metadata": { "authors": ["Satoshi"], "last-updated": today, "locale": lang } };

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin nemá bankovní runy",
	"bank_runs_header": "BITCOIN NEMÁ BANKOVNÍ RUNY",
	"bank_runs_header_2": "ALE VAŠE BANKA ANO",
	"bank_runs_what": "CO JE BANKOVNÍ RUN?",
	"bank_runs_what_content_1": "Bankovní run nastane, když se příliš mnoho lidí pokusí vybrat své peníze z banky ve stejnou dobu.",
	"bank_runs_what_content_2": "Pokud banky nemají dostatek peněz na pokrytí výběrů, mohou se při bankovním runu úplně zhroutit.",
	"bank_runs_how": "JAK K BANKOVNÍM RUNŮM DOCHÁZÍ?",
	"bank_runs_how_content_1": "Náš bankovní systém je 'frakční rezervní', což znamená, že banky vaše peníze jen neuchovávají v trezoru a nečekají, až je utratíte nebo vyberete.",
	"bank_runs_how_content_2": "Místo toho banka vezme vaše peníze a půjčí je nebo investuje. To může vaše peníze zablokovat na dlouhou dobu, i když vám banka slibuje možnost kdykoli peníze vybrat.",
	"bank_runs_how_content_3": "Co se stane, když se pokusíte vybrat peníze poté, co je banka už půjčila nebo investovala?",
	"bank_runs_how_content_4": "Pokud jste to jediný, kdo chce vybírat, není problém. Banka prostě vezme peníze někoho jiného a dá je vám. Ale co se stane, když chce vybírat příliš mnoho lidí najednou?",
	"bank_runs_how_content_5": "Mnoho lidí v USA se to dozvědělo, když v březnu 2023 proběhl run na Silicon Valley Bank.",
	"bank_runs_how_content_6": "Banka investovala peníze svých klientů do státních dluhopisů, které byly vázány až na 30 let. Ještě hůře, hodnota těchto dluhopisů nedávno dramaticky klesla, takže Silicon Valley Bank nemohla dluhopisy jednoduše prodat, aby získala peníze svých vkladatelů. Byla insolventní. Neměla dostatek peněz na pokrytí výběrů svých vkladatelů.",
	"bank_runs_how_content_7": "Jak se o tom dozvědělo více lidí, problém se jen zhoršoval. Přicházelo více žádostí o výběr, ale mnoho z nich nebylo zpracováno. Tisíce firem si uvědomily, že nebudou schopny platit své zaměstnance kvůli selhání banky.",
	"bank_runs_how_content_8": "FDIC zasáhla a souhlasila s odškodněním vkladatelů. Problém vyřešen? Ne tak docela...",
	"bank_runs_fdic": "CHRÁNÍ POJIŠTĚNÍ FDIC MÉ PENÍZE?",
	"bank_runs_fdic_content_1": "Pojištění FDIC je navrženo k ochraně bankovních vkladatelů v případě selhání banky. Vklady jsou pojištěny do výše 250 000 $ na vkladatele. Zní to skvěle, že?",
	"bank_runs_fdic_content_2": "Ne tak docela. Pokud banka selže, odkud FDIC vezme peníze? Má pojistný fond se 125 miliardami dolarů.",
	"bank_runs_fdic_content_3": "To zní jako hodně peněz, dokud to nesrovnáte s objemem vkladů, které pojišťují: téměř 10 bilionů neboli 10 000 miliard dolarů.",
	"bank_runs_fdic_content_4": "FDIC dokonce na svých stránkách ukazuje, že ve svém pojistném fondu má dost peněz na pokrytí jen o něco více než 1 % vkladů.",
	"bank_runs_fdic_content_5": "V případě selhání banky, které by překročilo pojistný fond FDIC, je pravděpodobné (ale ne zaručené), že americká vláda by vytiskla peníze na odškodnění vkladatelů.",
	"bank_runs_fdic_content_6": "Ale tisk peněz způsobuje inflaci, takže to není skvělé řešení.",
	"bank_runs_safe": "EXISTUJÍ BANKY, KTERÉ NEPOUŽÍVAJÍ FRAKČNÍ REZERVU?",
	"bank_runs_safe_content_1": "Některé banky se pokusily být 'bezpečnými bankami', které nepůjčují ani neinvestují prostředky vkladatelů.",
	"bank_runs_safe_content_2": "I když by tyto bezpečné banky měly nulové riziko bankovních runů, jejich žádosti byly Federálním rezervním systémem zamítnuty. To znamená, že nemohou legálně fungovat jako banky.",
	"bank_runs_safe_content_3": "Protože jim bylo zablokováno fungování, dnes neexistují žádné banky, které nepoužívají frakční rezervu.",
	"bank_runs_safe_content_4": "Naštěstí existuje způsob, jak se z frakčního rezervního systému odhlásit tím, že budete svou vlastní bankou. Ne, nemluvíme o schování hotovosti pod matraci.",
	"bank_runs_safe_content_5": "Spoření v hotovosti je stále zranitelné vůči inflaci.",
	"bank_runs_safe_content_6": "Mluvíme o Bitcoinu: novém finančním systému, který vám umožňuje být svou vlastní bankou.",
	"bank_runs_protect": "MŮŽE MĚ BITCOIN OCHRÁNIT PŘED BANKOVNÍMI RUNY?",
	"bank_runs_protect_content_1": "Ano, Bitcoin je plně rezervní finanční systém.",
	"bank_runs_protect_content_2": "Bankovní runy jsou v Bitcoinu nemožné, pokud si vyberete svůj Bitcoin do vlastní peněženky. Nenechávejte svůj bitcoin na burze ani v obalu jako bitcoinové ETF.",
	"bank_runs_protect_content_3": "Podívejte se na našeho jednoduchého průvodce bitcoinovými peněženkami a zjistěte, jak vybrat do vlastní peněženky.",
	"bank_runs_protect_content_4": "S Bitcoinem můžete konečně mít kontrolu nad svými penězi."
});

writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Průvodce bitcoinovými peněženkami",
	"wallets_description": "Existuje mnoho různých bitcoinových peněženek, které se liší v důležitých ohledech. Můžete zjistit, zda je pro vás peněženka vhodná, položením těchto jednoduchých otázek.",
	"wallets_header": "JAK BEZPEČNĚ UCHOVÁVAT SVŮJ BITCOIN",
	"wallets_s1_c1": "Bitcoinové peněženky jsou vzájemně kompatibilní, takže můžete posílat Bitcoin komukoli bez ohledu na to, kterou peněženku používá.",
	"wallets_s1_c2": "Existuje mnoho různých bitcoinových peněženek, které se liší v důležitých ohledech. Můžete zjistit, zda je pro vás peněženka vhodná, položením těchto jednoduchých otázek:",
	"wallets_question_1": "JE TO PENĚŽENKA S VLASTNÍ SPRÁVOU?",
	"wallets_s2_c1": "Jednou z inovací Bitcoinu je schopnost uchovávat ho bez závislosti na správci, jako je banka.",
	"wallets_s2_c2": "Pokud držíte bitcoin na burze nebo v ETF, ztrácíte výhody svobody bitcoinu.",
	"wallets_s2_c3": "Peněženky s vlastní správou odemykají plnou sílu Bitcoinu: svobodné peníze.",
	"wallets_s2_c4": "S peněženkou s vlastní správou jste jediný, kdo má schopnost utratit nebo převést vaše peníze. Nikdo vám nemůže zabránit v odesílání nebo přijímání peněz, když používáte peněženku s vlastní správou.",
	"wallets_s2_c5": "Peněženkám s vlastní správou se také říká nekustodní peněženky.",
	"wallets_s3_c1": "Kustodní peněženky jsou peněženky, kde nemáte kontrolu nad svými penězi.",
	"wallets_s3_c2": "Tyto peněženky jsou podobnější bankovnímu systému, kde musíte důvěřovat třetí straně, že vám dá přístup k vašim penězům. Pokud je váš Bitcoin na burze, používáte kustodní peněženku.",
	"wallets_s3_c3": "Pokud jste si koupili bitcoinové ETF, používáte kustodní peněženku, která vám neumožňuje výběr do vlastní správy.",
	"wallets_s3_c4": "Kustodní peněženky mohou působit pohodlně, ale správce má technickou schopnost kdykoli ukrást všechny prostředky uživatelů.",
	"wallets_s3_c5": "Ne vaše klíče, ne vaše mince!",
	"wallets_question_2": "JE HORKÁ NEBO STUDENÁ?",
	"wallets_s4_c1": "Studené peněženky uchovávají klíče k vašemu Bitcoinu způsobem, který je nikdy nevystavuje internetu.",
	"wallets_s4_c2": "To výrazně omezuje vektory útoku, které by mohl zloděj použít k pokusu o krádež vašeho Bitcoinu, a je nejlepší pro velké částky Bitcoinu, které nepotřebujete často převádět.",
	"wallets_s4_c3": "Studenou peněženku si můžete představit jako dlouhodobý spořicí účet, známý také jako studené úložiště.",
	"wallets_s5_c1": "Horké peněženky uchovávají klíče k vašemu Bitcoinu na zařízení připojeném k internetu, jako je váš telefon.",
	"wallets_s5_c2": "Horké peněženky jsou obecně považovány za bezpečné, ale mohou mít více bezpečnostních zranitelností než studené peněženky.",
	"wallets_s5_c3": "Horkou peněženku si můžete představit jako fyzickou peněženku. Neuložili byste v peněžence celé své úspory, ale uložili byste v ní nějaké peníze na utrácení.",
	"wallets_s5_c4": "Horké peněženky usnadňují utrácení Bitcoinu bez nutnosti vytahovat celé úspory ze studeného úložiště.",
	"wallets_question_3": "JAK ZÁLOHOVAT OBNOVOVACÍ FRÁZI?",
	"wallets_s6_c1": "Při nastavení bitcoinové peněženky vaše zařízení vygeneruje obnovovací frázi. Tato obnovovací fráze (také nazývaná seed fráze) obsahuje 12 nebo 24 slov.",
	"wallets_s6_c2": "Pokud ztratíte přístup ke své peněžence nebo vaše zařízení přestane fungovat, můžete tuto obnovovací frázi zadat do nové peněženky a znovu získat přístup ke svému Bitcoinu.",
	"wallets_s6_c3": "Většina peněženek obsahuje list papíru pro zapsání obnovovací fráze, ale mnoho lidí raději tuto frázi zálohuje na ocel. To výrazně snižuje pravděpodobnost ztráty obnovovací fráze v případě přírodní katastrofy jako požár nebo povodeň.",
	"wallets_s6_c4": "Jameson Lopp otestoval 70 ocelových zálohovacích sad, aby vám pomohl vybrat tu správnou.",
	"wallets_s6_c5": "Zobrazit Jamesonův průvodce kovovými bitcoinovými zálohami zde.",
	"wallets_s6_c6": "Nebo pokračujte scrollováním a prozkoumejte možnosti bitcoinových peněženek.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN",
	"wallets_coldcard_mk5": "COLDCARD MK5",
	"wallets_coldcard_q": "COLDCARD Q",
	"wallets_blockstream_jade": "BLOCKSTREAM JADE",
	"wallets_foundation_passport": "FOUNDATION PASSPORT",
	"wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Hledáte našeho průvodce Lightning peněženkami?",
	"wallets_starter_wallet": "Skvělá úvodní peněženka",
	"wallets_mobile_app": "Mobilní aplikace",
	"wallets_2fa_support": "Podpora 2FA",
	"wallets_air_gap_mode": "Režim air-gap",
	"wallets_air_gap_camera": "Režim air-gap + kamera",
	"wallets_bitcoin_only": "Pouze Bitcoin",
	"wallets_security_features": "Mnoho bezpečnostních funkcí",
	"wallets_free": "100% zdarma",
	"wallets_coldcard_mk5_costs": "Stojí $189",
	"wallets_coldcard_q_costs": "Stojí $289",
	"wallets_blockstream_jade_costs": "Stojí $79",
	"wallets_foundation_passport_costs": "Stojí $199",
	"wallets_seedsigner_costs": "Díly stojí $50",
	"wallets_very_affordable": "Velmi dostupná",
	"wallets_pair_with_phone": "Spárujte s telefonem",
	"wallets_battery": "Dobíjecí baterie",
	"wallets_build_your_own": "Sestavte si vlastní",
	"wallets_qwerty_keyboard": "Plná QWERTY klávesnice",
	"wallets_qr_scanner": "Skener QR kódů"
});

writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Jak koupit Bitcoin - Průvodce krok za krokem",
	"buy_header": "JAK KOUPIT BITCOIN",
	"buy_intro_c1": "Nákup Bitcoinu poprvé se může zdát ohromující, ale ve skutečnosti je to docela jednoduché, když si to rozložíte na kroky.",
	"buy_intro_c2": "Tento průvodce vás provede procesem bezpečného nákupu Bitcoinu a jeho uložení do vlastní peněženky.",
	"buy_step_1_header": "KROK 1: VYBERTE SVOU ZEMI",
	"buy_step_1_description": "Různé země mají různé možnosti nákupu Bitcoinu. Vyberte svou zemi pro zobrazení nejlepších možností.",
	"buy_search_countries": "Vyhledejte svou zemi",
	"buy_country_united_states": "Spojené státy", "buy_country_australia": "Austrálie", "buy_country_austria": "Rakousko", "buy_country_belgium": "Belgie", "buy_country_brazil": "Brazílie", "buy_country_canada": "Kanada", "buy_country_france": "Francie", "buy_country_germany": "Německo", "buy_country_ireland": "Irsko", "buy_country_italy": "Itálie", "buy_country_netherlands": "Nizozemsko", "buy_country_new_zealand": "Nový Zéland", "buy_country_spain": "Španělsko", "buy_country_united_kingdom": "Spojené království", "buy_country_argentina": "Argentina", "buy_country_chile": "Chile", "buy_country_colombia": "Kolumbie", "buy_country_costa_rica": "Kostarika", "buy_country_czech_republic": "Česká republika", "buy_country_denmark": "Dánsko", "buy_country_el_salvador": "Salvador", "buy_country_estonia": "Estonsko", "buy_country_finland": "Finsko", "buy_country_greece": "Řecko", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hongkong", "buy_country_hungary": "Maďarsko", "buy_country_iceland": "Island", "buy_country_india": "Indie", "buy_country_israel": "Izrael", "buy_country_japan": "Japonsko", "buy_country_latvia": "Lotyšsko", "buy_country_lithuania": "Litva", "buy_country_luxembourg": "Lucembursko", "buy_country_malta": "Malta", "buy_country_mexico": "Mexiko", "buy_country_norway": "Norsko", "buy_country_panama": "Panama", "buy_country_poland": "Polsko", "buy_country_portugal": "Portugalsko", "buy_country_romania": "Rumunsko", "buy_country_singapore": "Singapur", "buy_country_slovakia": "Slovensko", "buy_country_slovenia": "Slovinsko", "buy_country_south_africa": "Jihoafrická republika", "buy_country_south_korea": "Jižní Korea", "buy_country_sweden": "Švédsko", "buy_country_switzerland": "Švýcarsko", "buy_country_thailand": "Thajsko", "buy_country_turkey": "Turecko", "buy_country_ukraine": "Ukrajina", "buy_country_uruguay": "Uruguay",
	"buy_step_2_header": "KROK 2: VYBERTE ZPŮSOB PLATBY",
	"buy_step_2_description": "Existují dva hlavní způsoby nákupu Bitcoinu: bankovním převodem nebo hotově. Každý má své výhody.",
	"buy_method_bank_transfer": "BANKOVNÍ PŘEVOD", "buy_method_bank_fast": "Rychlý a snadný", "buy_method_bank_less_private": "Méně soukromý",
	"buy_method_bank_description": "Bankovní převody jsou nejběžnějším způsobem nákupu Bitcoinu. Jsou rychlé, pohodlné a obvykle mají nižší poplatky.",
	"buy_method_choose_bank": "Vybrat bankovní převod", "buy_method_cash": "HOTOVOST", "buy_method_cash_private": "Soukromější", "buy_method_cash_limited": "Omezené možnosti",
	"buy_method_cash_description": "Nákupy za hotovost nabízejí více soukromí, ale mají méně možností a mohou vyžadovat osobní setkání nebo použití bitcoinového bankomatu.",
	"buy_method_choose_cash": "Vybrat hotovost",
	"buy_step_3_header": "KROK 3: MOŽNOSTI NÁKUPU",
	"buy_step_3_description": "Zde jsou nejlepší možnosti nákupu Bitcoinu pro vaši zemi a způsob platby:",
	"buy_platform_recommended": "DOPORUČENÉ",
	"buy_platform_strike_description": "Strike je nejrychlejší a nejsnadnější způsob nákupu Bitcoinu s nízkými poplatky a okamžitou podporou Lightning Network.",
	"buy_platform_swan_description": "Swan Bitcoin se specializuje na čistě bitcoinové služby s pravidelným investováním a vzdělávacími zdroji.",
	"buy_platform_river_description": "River nabízí nákup Bitcoinu, těžbu a úschovné služby se zaměřením na vzdělávání a bezpečnost.",
	"buy_platform_coinsquare_description": "Coinsquare je kanadská bitcoinová burza se silnou regulační shodou a zákaznickou podporou.",
	"buy_platform_kraken_description": "Kraken je zavedená bitcoinová burza s pokročilými obchodními funkcemi a silnou bezpečností.",
	"buy_platform_atm_description": "Bitcoinové bankomaty vám umožňují okamžitě koupit Bitcoin za hotovost. Najděte nejbližší pomocí Coin ATM Radar.",
	"buy_platform_bisq_description": "Bisq je decentralizovaná peer-to-peer burza, která umožňuje soukromé obchodování s Bitcoinem bez KYC.",
	"buy_platform_feature_instant": "Okamžité nákupy", "buy_platform_feature_low_fees": "Nízké poplatky", "buy_platform_feature_lightning": "Lightning Network", "buy_platform_feature_dca": "Pravidelné investování", "buy_platform_feature_education": "Vzdělávací zdroje", "buy_platform_feature_withdrawal": "Snadný výběr", "buy_platform_feature_mining": "Těžba Bitcoinu", "buy_platform_feature_custody": "Úschovné služby", "buy_platform_feature_canadian": "Zaměřený na Kanadu", "buy_platform_feature_regulated": "Regulovaná burza", "buy_platform_feature_support": "Zákaznická podpora", "buy_platform_feature_established": "Zavedená platforma", "buy_platform_feature_security": "Silná bezpečnost", "buy_platform_feature_advanced": "Pokročilé funkce", "buy_platform_feature_cash": "Nákupy za hotovost", "buy_platform_feature_anonymous": "Anonymnější", "buy_platform_feature_p2p": "Peer-to-peer", "buy_platform_feature_private": "Soukromé obchodování", "buy_platform_feature_decentralized": "Decentralizovaná",
	"buy_platform_relai_description": "Relai je švýcarská čistě bitcoinová aplikace s peněženkou s vlastní správou, funkcemi automatického investování a nízkými poplatky pro evropské uživatele.",
	"buy_platform_feature_bitcoin_only": "Pouze Bitcoin", "buy_platform_feature_self_custody": "Peněženka s vlastní správou", "buy_platform_feature_auto_invest": "Plány automatického investování", "buy_platform_feature_european": "Zaměřený na Evropu",
	"buy_step_4_header": "KROK 4: BEZPEČNĚ ULOŽTE SVŮJ BITCOIN",
	"buy_step_4_c1": "Po nákupu Bitcoinu je nejdůležitějším krokem přesunout ho do vlastní peněženky, kde kontrolujete soukromé klíče.",
	"buy_step_4_c2": "Ponechání Bitcoinu na burze je riskantní, protože Bitcoin ve skutečnosti nevlastníte - vlastní ho burza.",
	"buy_step_4_c3": "Když kontrolujete své vlastní soukromé klíče, máte skutečné vlastnictví svého Bitcoinu a nikdo vám ho nemůže vzít.",
	"buy_step_4_c4": "Zjistěte, jak vybrat správnou bitcoinovou peněženku pro vaše potřeby:",
	"buy_cta_wallets": "Zobrazit průvodce bitcoinovými peněženkami"
});

writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Průvodce Bitcoin Lightning peněženkami",
	"lightning_description": "Lightning peněženky vám umožňují posílat Bitcoin rychle a levně při zachování vaší osobní suverenity.",
	"lightning_header": "PRŮVODCE LIGHTNING PENĚŽENKAMI",
	"lightning_s1_c1": "Lightning vám umožňuje posílat bitcoinové platby rychle a levně.",
	"lightning_s1_c2": "Je důležité vědět, že používání Lightning přináší kompromisy. Výměnou za rychlejší a levnější bitcoinové platby často obětujete nějakou bezpečnost.",
	"lightning_s1_c3": "Obecně by se Lightning měl používat pouze s malými částkami bitcoinu. Velké částky bitcoinu byste měli vždy uchovávat v hardwarové peněžence.",
	"lightning_s1_c4": "Podívejte se na našeho průvodce hardwarovými peněženkami pro více informací.",
	"lightning_s1_c5": "Ne všechny Lightning peněženky jsou stejné. Která peněženka má správnou rovnováhu kompromisů pro vás, zjistíte zodpovězením jedné jednoduché otázky:",
	"lightning_question_1": "JAKÁ ROVNOVÁHA KOMPROMISŮ JE PRO MĚ SPRÁVNÁ?",
	"lightning_s2_c1": "Jednou z inovací Bitcoinu je schopnost uchovávat ho bez závislosti na správci, jako je banka. Peněženky s vlastní správou odemykají plnou sílu Bitcoinu.",
	"lightning_s2_c2": "S peněženkou s vlastní správou jste jediný, kdo má schopnost utratit nebo převést vaše peníze. Nikdo vás nemůže zastavit, cenzurovat nebo okrást, když používáte peněženku s vlastní správou. Těm se také říká nekustodní peněženky.",
	"lightning_s2_c3": "Nejsvrchnější způsob používání Lightning je provozování vlastního uzlu.",
	"lightning_s2_c4": "Tento průvodce je zaměřen na jednoduché Lightning peněženky, které nevyžadují vlastní uzel.",
	"lightning_s2_c5": "Je důležité vědět, že i při používání nekustodní Lightning peněženky stále důvěřujete tvůrci peněženky, že neprosadí škodlivou aktualizaci aplikace a neukradne vaše prostředky.",
	"lightning_s3_c1": "Kustodní peněženky jsou peněženky, kde nemáte kontrolu nad svými penězi.",
	"lightning_s3_c2": "Tyto peněženky jsou podobnější bankovnímu systému, kde musíte důvěřovat třetí straně, že vám dá přístup k vašim penězům. Pokud je váš Bitcoin na burze, používáte kustodní peněženku.",
	"lightning_s3_c3": "Kustodní peněženky mohou působit pohodlně, ale správce má technickou schopnost kdykoli ukrást všechny prostředky uživatelů.",
	"lightning_s3_c4": "Někteří lidé preferují kustodní Lightning peněženky pro malé částky bitcoinu kvůli jejich snadnému použití. Jen nezapomeňte: ne vaše klíče, ne vaše mince!",
	"lightning_question_2": "VYBERTE SI PENĚŽENKU",
	"lightning_s4_c1": "Se vším tímto na paměti si nyní můžete vybrat lightning peněženku se správnou rovnováhou kompromisů pro vás.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Mnoho funkcí", "lightning_mobile_app": "Mobilní aplikace", "lightning_free": "100% zdarma", "lightning_merchants": "Skvělá pro obchodníky", "lightning_starter": "Skvělá úvodní peněženka", "lightning_browser": "V prohlížeči", "lightning_custodial": "Plně kustodní peněženka",
	"lightning_cta_hardware": "Hledáte našeho průvodce hardwarovými bitcoinovými peněženkami?"
});

writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Bezplatné bitcoinové nálepky od bitcoin.rocks",
	"stickers_description": "Dejte bitcoinovou nálepku na veřejné místo a pomozte přesvědčit lidi kolem vás.",
	"stickers_header": "BEZPLATNÉ BITCOINOVÉ NÁLEPKY",
	"stickers_choose_header": "VYBERTE SI SVŮJ BALÍČEK NÁLEPEK",
	"stickers_choose_c1": "Naším posláním je pomoci vám přesvědčit více lidí tím, že budete dávat bitcoinové nálepky na veřejná místa. Všechny naše nálepky mají QR kódy, které odkazují na vzdělávací stránky o",
	"stickers_choose_c2": "Bitcoinu", "stickers_choose_c3": "inflaci",
	"stickers_choose_c4": "Vyberte si balíček nálepek níže",
	"stickers_text_pack": "TEXTOVÝ BALÍČEK", "stickers_signs_pack": "BALÍČEK ZNAČEK",
	"stickers_instructions_1": "Zadejte svou poštovní adresu a my vám pošleme bezplatný balíček bitcoinových nálepek! Vaše nálepky budou odeslány v obyčejné bílé obálce.",
	"stickers_instructions_2": "Údaje o adrese jsou smazány po odeslání bezplatných nálepek.",
	"stickers_share_header": "SDÍLEJTE SVÁ MÍSTA S NÁLEPKAMI",
	"stickers_share_c1": "Sdílejte svá místa s nálepkami s námi na Nostru a podívejte se, kam ostatní lidé dávají své nálepky.",
	"stickers_btn_share_on_nostr": "SDÍLET NA NOSTRU", "stickers_btn_what_is_nostr": "CO JE NOSTR?",
	"stickers_flyers_link_before": "Mezitím si vytiskněte a vylepte vlastní ", "stickers_flyers_link_text": "bitcoinové letáky", "stickers_flyers_link_after": " a pomozte přesvědčit ještě více lidí.",
	"stickers_country_global_print": "Celosvětově — Vytisknu si vlastní nálepky", "stickers_country_global_order": "Celosvětově — Objednat ve velkém",
	"placeholder_name_optional": "Jméno (nepovinné)", "placeholder_address_line_1": "Adresa řádek 1", "placeholder_address_line_2": "Adresa řádek 2 (nepovinné)", "placeholder_city": "Město", "placeholder_state": "Stát", "placeholder_province": "Kraj", "placeholder_zip_code": "PSČ", "placeholder_postal_code": "Poštovní směrovací číslo", "placeholder_language": "Jazyk", "placeholder_which_stickers": "Které nálepky?", "placeholder_email_optional": "Zadejte e-mail pro upozornění (nepovinné)"
});

writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Bezplatné bitcoinové pohlednice od bitcoin.rocks",
	"postcards_description": "Získejte bezplatný balíček bitcoinových pohlednic a sdílejte Bitcoin s někým, koho znáte.",
	"postcards_header": "PROGRAM POHLEDNIC UKONČEN",
	"postcards_program_closed_message": "Náš bezplatný program bitcoinových pohlednic skončil. Děkujeme všem, kteří se podíleli na šíření vzdělávání o Bitcoinu prostřednictvím pošty!",
	"postcards_sticker_alternative_header": "ZÍSKEJTE MÍSTO TOHO BEZPLATNÉ BITCOINOVÉ NÁLEPKY",
	"postcards_sticker_alternative_message": "Pokračujte v šíření povědomí o Bitcoinu s naším bezplatným programem nálepek! Naše bitcoinové nálepky jsou ideální pro sdílení na veřejných místech a obsahují QR kódy odkazující na vzdělávací obsah.",
	"postcards_sticker_cta": "ZÍSKAT BEZPLATNÉ NÁLEPKY",
	"postcards_step_2": "JAK POHLEDNICE VYPADALY",
	"postcards_instructions_4": "Tyto pohlednice jsme vytvořili, aby bylo snazší představit Bitcoinu někoho, koho znáte! Stačí přidat adresu a známku a vhodit pohlednici do schránky.",
	"postcards_instructions_5": "Naším posláním je urychlit přijetí Bitcoinu. Můžete pomoci získáním bezplatných nálepek a jejich umístěním na veřejná místa!",
	"postcards_instructions_6": "Všichni známe pár lidí, kteří by mohli mít prospěch z toho, kdyby se dozvěděli více o Bitcoinu. Sdílejte s nimi bitcoinové nálepky ještě dnes!"
});

writeFile(`signs_${lang}.json`, {
	"signs_description": "Pomozte nám umístit tyto bitcoinové cedule po celé Americe!",
	"signs_title": "Bezplatné bitcoinové cedule od bitcoin.rocks",
	"signs_choose_header": "DĚKUJEME, ŽE NÁM POMÁHÁTE UMÍSŤOVAT TYTO BITCOINOVÉ CEDULE PO CELÉ AMERICE!",
	"signs_choose_c1": "Všechny cedule jsou nyní rozdány! Naším posláním je urychlit přijetí Bitcoinu prostřednictvím vzdělávání.",
	"signs_choose_c2": "Mnoho z vás pomohlo umístěním těchto bezplatných bitcoinových cedulí na veřejná místa. Všechny naše cedule mají QR kódy, které odkazují na vzdělávací stránku o",
	"signs_choose_c3": "inflaci",
	"signs_choose_c4": "Díky naší úžasné komunitě jsme oslovili tisíce lidí a pomohli jim udělat první kroky do bitcoinové králičí nory.",
	"signs_share_header": "SDÍLEJTE SVÁ MÍSTA S CEDULEMI",
	"signs_share_c1": "Sdílejte fotku svého místa s cedulí s námi na Nostru a podívejte se, kam ostatní lidé umisťují své cedule.",
	"signs_btn_share_on_nostr": "SDÍLET NA NOSTRU", "signs_btn_what_is_nostr": "CO JE NOSTR?",
	"signs_instructions_1": "Zadejte svou poštovní adresu a my vám pošleme krabici 10 bitcoinových cedulí!",
	"signs_instructions_2": "Údaje o adrese jsou smazány po odeslání bezplatných cedulí."
});

writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Bezplatné bitcoinové letáky od bitcoin.rocks",
	"flyers_description": "Vytiskněte si doma bitcoinový leták a umístěte ho na veřejné místo, abyste přesvědčili lidi kolem vás.",
	"flyers_header_1": "TISKNĚTE A VYLEPUJTE",
	"flyers_header_2": "BITCOINOVÉ LETÁKY",
	"flyers_intro_header": "JAK TISKNOUT A VYLEPOVAT TYTO BITCOINOVÉ LETÁKY",
	"flyers_intro_c1": "Naším posláním je pomoci vám přesvědčit více lidí tím, že budete dávat bitcoinové letáky na veřejná místa. Tento leták má QR kód, který odkazuje na naši",
	"flyers_intro_c2": "vzdělávací bitcoinovou stránku.",
	"flyers_intro_c3": "inflaci",
	"flyers_intro_c4": "Vytiskněte tento leták doma nebo v tiskárně. Poté ho umístěte na nástěnky, telefonní sloupy ve městě a další veřejná místa, kde ho lidé uvidí a dozvědí se o Bitcoinu.",
	"flyers_intro_c5": "Mezitím si požádejte o balíček našich",
	"flyers_intro_c6": "bezplatných bitcoinových nálepek",
	"flyers_intro_c7": "a pomozte přesvědčit ještě více lidí.",
	"flyers_btn_download": "STÁHNOUT LETÁK", "flyers_btn_print": "TISKNOUT LETÁK",
	"flyers_share_header": "SDÍLEJTE SVÁ MÍSTA S LETÁKY",
	"flyers_share_c1": "Sdílejte svá místa s letáky s námi na Nostru a podívejte se, kam ostatní lidé dávají své letáky.",
	"flyers_btn_share_on_nostr": "SDÍLET NA NOSTRU", "flyers_btn_what_is_nostr": "CO JE NOSTR?"
});

writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Zapojte se a pomozte šířit Bitcoin",
	"get_involved_description": "Naše bezplatné zdroje usnadňují šíření přijetí Bitcoinu.",
	"get_involved_header": "ZAPOJTE SE",
	"get_involved_header_2": "ŠIŘTE BITCOIN",
	"get_involved_intro_1": "Může být deprimující žít v současném stavu našeho světa.",
	"get_involved_intro_2": "Naše peníze jsou rozbité. V důsledku toho jsou rozbité i základní části společnosti.",
	"get_involved_intro_3": "Pokud se už zajímáte o Bitcoin, znáte ten pocit naděje, který Bitcoin může přinést. Naděje na lepší budoucnost umožněnou lepšími penězi.",
	"get_involved_intro_4": "Ale tolik lidí kolem vás o Bitcoinu neví. Žijí ve stejném rozbitém světě jako vy, ale bez majáku naděje, který by jim pomohl skrz temnotu.",
	"get_involved_intro_5": "Ale vy to můžete změnit. Vytvořili jsme několik bezplatných zdrojů, které usnadňují šíření naděje, kterou Bitcoin přináší lidem kolem vás.",
	"get_involved_sticker_header": "Dejte nálepku na veřejné místo",
	"get_involved_sticker_content_1": "Můžete pomoci vzdělávat lidi kolem sebe o Bitcoinu, aniž byste museli s kýmkoli komunikovat. Jednoduše dejte jednu z našich bezplatných bitcoinových nálepek na veřejné místo.",
	"get_involved_sticker_content_2": "Stovky lidí každý měsíc skenují QR kódy na těchto nálepkách. Inflační nálepky odkazují na stránku o",
	"get_involved_sticker_content_3": "Bitcoinu jako řešení inflace.",
	"get_involved_sticker_content_4": "Ostatní nálepky odkazují na naši vzdělávací hlavní stránku, která lidem ukazuje, jak",
	"get_involved_sticker_content_5": "Bitcoin buduje lepší svět.",
	"get_involved_sticker_content_6": "Umístěním těchto nálepek ve vaší komunitě na místa, kde je lidé uvidí, můžete pomoci lidem kolem vás udělat první kroky do bitcoinové králičí nory.",
	"get_involved_request_a": "POŽÁDEJTE O",
	"get_involved_sticker_pack": "BALÍČEK NÁLEPEK",
	"get_involved_postcard_header": "Pošlete pohlednici",
	"get_involved_postcard_content_1": "Můžete pomoci šířit naději Bitcoinu někomu, koho znáte, posláním jedné z našich bezplatných pohlednic.",
	"get_involved_postcard_content_2": "Zadní strana každé pohlednice obsahuje přesvědčivý text o Bitcoinu spolu s QR kódem pro další informace.",
	"get_involved_postcard_content_3": "Posláním bitcoinové pohlednice můžete pomoci někomu vidět Bitcoin v novém světle.",
	"get_involved_postcard_pack": "BALÍČEK POHLEDNIC",
	"get_involved_business_header": "Připojte firmu",
	"get_involved_business_content_1": "Chcete pomoci budovat bitcoinovou cirkulární ekonomiku? Naše bitcoinová podnikatelská sada usnadňuje oslovení firmy ohledně přijímání bitcoinových plateb.",
	"get_involved_business_content_2": "Každá podnikatelská sada obsahuje letáky, které zdůrazňují výhody přijímání bitcoinových plateb. Každý leták odkazuje na různé",
	"get_involved_business_content_3": "bezplatné bitcoinové podnikatelské zdroje.",
	"get_involved_business_kit": "PODNIKATELSKÁ SADA"
});

console.log(`\nDone! Created 9 content files.`);
