/**
 * Creates Slovak (sk) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin nemá bankové runy",
	"bank_runs_header": "BITCOIN NEMÁ BANKOVÉ RUNY",
	"bank_runs_header_2": "ALE VAŠA BANKA ÁNO",
	"bank_runs_what": "ČO JE BANKOVÝ RUN?",
	"bank_runs_what_content_1": "Bankový run nastane, keď sa príliš veľa ľudí pokúsi vybrať svoje peniaze z banky v rovnakom čase.",
	"bank_runs_what_content_2": "Ak banky nemajú dostatok peňazí na pokrytie výberov, môžu sa pri bankovom rune úplne zrútiť.",
	"bank_runs_how": "AKO K BANKOVÝM RUNOM DOCHÁDZA?",
	"bank_runs_how_content_1": "Náš bankový systém je 'frakčný rezervný', čo znamená, že banky vaše peniaze len neuchovávajú v trezore a nečakajú, kým ich miniete alebo vyberiete.",
	"bank_runs_how_content_2": "Namiesto toho banka vezme vaše peniaze a požičia ich alebo investuje. To môže vaše peniaze zablokovať na dlhú dobu, aj keď vám banka sľubuje možnosť kedykoľvek peniaze vybrať.",
	"bank_runs_how_content_3": "Čo sa stane, keď sa pokúsite vybrať peniaze potom, čo ich banka už požičala alebo investovala?",
	"bank_runs_how_content_4": "Ak ste to jediný, kto chce vyberať, nie je problém. Banka jednoducho vezme peniaze niekoho iného a dá ich vám. Ale čo sa stane, keď chce vyberať príliš veľa ľudí naraz?",
	"bank_runs_how_content_5": "Mnoho ľudí v USA sa to dozvedelo, keď v marci 2023 prebehol run na Silicon Valley Bank.",
	"bank_runs_how_content_6": "Banka investovala peniaze svojich klientov do štátnych dlhopisov, ktoré boli viazané až na 30 rokov. Ešte horšie, hodnota týchto dlhopisov nedávno dramaticky klesla, takže Silicon Valley Bank nemohla dlhopisy jednoducho predať, aby získala peniaze svojich vkladateľov. Bola insolventná. Nemala dostatok peňazí na pokrytie výberov svojich vkladateľov.",
	"bank_runs_how_content_7": "Ako sa o tom dozvedelo viac ľudí, problém sa len zhoršoval. Prichádzalo viac žiadostí o výber, ale mnoho z nich nebolo spracovaných. Tisíce firiem si uvedomili, že nebudú schopné platiť svojich zamestnancov kvôli zlyhaniu banky.",
	"bank_runs_how_content_8": "FDIC zasiahla a súhlasila s odškodnením vkladateľov. Problém vyriešený? Nie tak celkom...",
	"bank_runs_fdic": "CHRÁNI POISTENIE FDIC MOJE PENIAZE?",
	"bank_runs_fdic_content_1": "Poistenie FDIC je navrhnuté na ochranu bankových vkladateľov v prípade zlyhania banky. Vklady sú poistené do výšky 250 000 $ na vkladateľa. Znie to skvele, však?",
	"bank_runs_fdic_content_2": "Nie tak celkom. Ak banka zlyhá, odkiaľ FDIC vezme peniaze? Má poistný fond so 125 miliardami dolárov.",
	"bank_runs_fdic_content_3": "To znie ako veľa peňazí, kým to neporovnáte s objemom vkladov, ktoré poisťujú: takmer 10 biliónov neboli 10 000 miliárd dolárov.",
	"bank_runs_fdic_content_4": "FDIC dokonca na svojich stránkach ukazuje, že vo svojom poistnom fonde má dosť peňazí na pokrytie len o niečo viac ako 1 % vkladov.",
	"bank_runs_fdic_content_5": "V prípade zlyhania banky, ktoré by prekročilo poistný fond FDIC, je pravdepodobné (ale nie zaručené), že americká vláda by vytlačila peniaze na odškodnenie vkladateľov.",
	"bank_runs_fdic_content_6": "Ale tlač peňazí spôsobuje infláciu, takže to nie je skvelé riešenie.",
	"bank_runs_safe": "EXISTUJÚ BANKY, KTORÉ NEPOUŽÍVAJÚ FRAKČNÚ REZERVU?",
	"bank_runs_safe_content_1": "Niektoré banky sa pokúsili byť 'bezpečnými bankami', ktoré nepožičiavajú ani neinvestujú prostriedky vkladateľov.",
	"bank_runs_safe_content_2": "Aj keď by tieto bezpečné banky mali nulové riziko bankových runov, ich žiadosti boli Federálnym rezervným systémom zamietnuté. To znamená, že nemôžu legálne fungovať ako banky.",
	"bank_runs_safe_content_3": "Pretože im bolo zablokované fungovanie, dnes neexistujú žiadne banky, ktoré nepoužívajú frakčnú rezervu.",
	"bank_runs_safe_content_4": "Našťastie existuje spôsob, ako sa z frakčného rezervného systému odhlásiť tým, že budete svojou vlastnou bankou. Nie, nehovoríme o schovaní hotovosti pod matrac.",
	"bank_runs_safe_content_5": "Sporenie v hotovosti je stále zraniteľné voči inflácii.",
	"bank_runs_safe_content_6": "Hovoríme o Bitcoine: novom finančnom systéme, ktorý vám umožňuje byť svojou vlastnou bankou.",
	"bank_runs_protect": "MÔŽE MA BITCOIN OCHRÁNIŤ PRED BANKOVÝMI RUNMI?",
	"bank_runs_protect_content_1": "Áno, Bitcoin je plne rezervný finančný systém.",
	"bank_runs_protect_content_2": "Bankové runy sú v Bitcoine nemožné, ak si vyberiete svoj Bitcoin do vlastnej peňaženky. Nenechávajte svoj bitcoin na burze ani v obale ako bitcoinové ETF.",
	"bank_runs_protect_content_3": "Pozrite si nášho jednoduchého sprievodcu bitcoinovými peňaženkami a zistite, ako vybrať do vlastnej peňaženky.",
	"bank_runs_protect_content_4": "S Bitcoinom môžete konečne mať kontrolu nad svojimi peniazmi."
});

writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Sprievodca bitcoinovými peňaženkami",
	"wallets_description": "Existuje mnoho rôznych bitcoinových peňaženiek, ktoré sa líšia v dôležitých ohľadoch. Môžete zistiť, či je pre vás peňaženka vhodná, položením týchto jednoduchých otázok.",
	"wallets_header": "AKO BEZPEČNE UCHOVÁVAŤ SVOJ BITCOIN",
	"wallets_s1_c1": "Bitcoinové peňaženky sú vzájomne kompatibilné, takže môžete posielať Bitcoin komukoľvek bez ohľadu na to, ktorú peňaženku používa.",
	"wallets_s1_c2": "Existuje mnoho rôznych bitcoinových peňaženiek, ktoré sa líšia v dôležitých ohľadoch. Môžete zistiť, či je pre vás peňaženka vhodná, položením týchto jednoduchých otázok:",
	"wallets_question_1": "JE TO PEŇAŽENKA S VLASTNOU SPRÁVOU?",
	"wallets_s2_c1": "Jednou z inovácií Bitcoinu je schopnosť uchovávať ho bez závislosti od správcu, ako je banka.",
	"wallets_s2_c2": "Ak držíte bitcoin na burze alebo v ETF, strácate výhody slobody bitcoinu.",
	"wallets_s2_c3": "Peňaženky s vlastnou správou odomykajú plnú silu Bitcoinu: slobodné peniaze.",
	"wallets_s2_c4": "S peňaženkou s vlastnou správou ste jediný, kto má schopnosť minúť alebo previesť vaše peniaze. Nikto vám nemôže zabrániť v odosielaní alebo prijímaní peňazí, keď používate peňaženku s vlastnou správou.",
	"wallets_s2_c5": "Peňaženkám s vlastnou správou sa tiež hovorí nekustodné peňaženky.",
	"wallets_s3_c1": "Kustodné peňaženky sú peňaženky, kde nemáte kontrolu nad svojimi peniazmi.",
	"wallets_s3_c2": "Tieto peňaženky sú podobnejšie bankovému systému, kde musíte dôverovať tretej strane, že vám dá prístup k vašim peniazom. Ak je váš Bitcoin na burze, používate kustodnú peňaženku.",
	"wallets_s3_c3": "Ak ste si kúpili bitcoinové ETF, používate kustodnú peňaženku, ktorá vám neumožňuje výber do vlastnej správy.",
	"wallets_s3_c4": "Kustodné peňaženky môžu pôsobiť pohodlne, ale správca má technickú schopnosť kedykoľvek ukradnúť všetky prostriedky používateľov.",
	"wallets_s3_c5": "Nie vaše kľúče, nie vaše mince!",
	"wallets_question_2": "JE HORÚCA ALEBO STUDENÁ?",
	"wallets_s4_c1": "Studené peňaženky uchovávajú kľúče k vášmu Bitcoinu spôsobom, ktorý ich nikdy nevystavuje internetu.",
	"wallets_s4_c2": "To výrazne obmedzuje vektory útoku, ktoré by mohol zlodej použiť na pokus o krádež vášho Bitcoinu, a je najlepšie pre veľké čiastky Bitcoinu, ktoré nepotrebujete často prevádzať.",
	"wallets_s4_c3": "Studenú peňaženku si môžete predstaviť ako dlhodobý sporiaci účet, známy aj ako studené úložisko.",
	"wallets_s5_c1": "Horúce peňaženky uchovávajú kľúče k vášmu Bitcoinu na zariadení pripojenom na internet, ako je váš telefón.",
	"wallets_s5_c2": "Horúce peňaženky sú všeobecne považované za bezpečné, ale môžu mať viac bezpečnostných zraniteľností ako studené peňaženky.",
	"wallets_s5_c3": "Horúcu peňaženku si môžete predstaviť ako fyzickú peňaženku. Neuložili by ste v peňaženke celé svoje úspory, ale uložili by ste v nej nejaké peniaze na míňanie.",
	"wallets_s5_c4": "Horúce peňaženky uľahčujú míňanie Bitcoinu bez nutnosti vyťahovať celé úspory zo studeného úložiska.",
	"wallets_question_3": "AKO ZÁLOHOVAŤ OBNOVOVACIU FRÁZU?",
	"wallets_s6_c1": "Pri nastavení bitcoinovej peňaženky vaše zariadenie vygeneruje obnovovaciu frázu. Táto obnovovacia fráza (tiež nazývaná seed fráza) obsahuje 12 alebo 24 slov.",
	"wallets_s6_c2": "Ak stratíte prístup ku svojej peňaženke alebo vaše zariadenie prestane fungovať, môžete túto obnovovaciu frázu zadať do novej peňaženky a znovu získať prístup k svojmu Bitcoinu.",
	"wallets_s6_c3": "Väčšina peňaženiek obsahuje list papiera na zapísanie obnovovacej frázy, ale mnoho ľudí radšej túto frázu zálohuje na oceľ. To výrazne znižuje pravdepodobnosť straty obnovovacej frázy v prípade prírodnej katastrofy ako požiar alebo povodeň.",
	"wallets_s6_c4": "Jameson Lopp otestoval 70 oceľových zálohovacích sád, aby vám pomohol vybrať tú správnu.",
	"wallets_s6_c5": "Zobraziť Jamesonov sprievodca kovovými bitcoinovými zálohami tu.",
	"wallets_s6_c6": "Alebo pokračujte scrollovaním a preskúmajte možnosti bitcoinových peňaženiek.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN", "wallets_coldcard_mk5": "COLDCARD MK5", "wallets_coldcard_q": "COLDCARD Q", "wallets_blockstream_jade": "BLOCKSTREAM JADE", "wallets_foundation_passport": "FOUNDATION PASSPORT", "wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Hľadáte nášho sprievodcu Lightning peňaženkami?",
	"wallets_starter_wallet": "Skvelá úvodná peňaženka", "wallets_mobile_app": "Mobilná aplikácia", "wallets_2fa_support": "Podpora 2FA", "wallets_air_gap_mode": "Režim air-gap", "wallets_air_gap_camera": "Režim air-gap + kamera", "wallets_bitcoin_only": "Iba Bitcoin", "wallets_security_features": "Mnoho bezpečnostných funkcií", "wallets_free": "100 % zadarmo",
	"wallets_coldcard_mk5_costs": "Stojí $189", "wallets_coldcard_q_costs": "Stojí $289", "wallets_blockstream_jade_costs": "Stojí $79", "wallets_foundation_passport_costs": "Stojí $199", "wallets_seedsigner_costs": "Diely stoja $50",
	"wallets_very_affordable": "Veľmi dostupná", "wallets_pair_with_phone": "Spárujte s telefónom", "wallets_battery": "Dobíjacia batéria", "wallets_build_your_own": "Zostavte si vlastný", "wallets_qwerty_keyboard": "Plná QWERTY klávesnica", "wallets_qr_scanner": "Skener QR kódov"
});

writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Ako kúpiť Bitcoin — Sprievodca krok za krokom",
	"buy_header": "AKO KÚPIŤ BITCOIN",
	"buy_intro_c1": "Nákup Bitcoinu prvýkrát sa môže zdať ohromujúci, ale v skutočnosti je to pomerne jednoduché, keď si to rozložíte na kroky.",
	"buy_intro_c2": "Tento sprievodca vás prevedie procesom bezpečného nákupu Bitcoinu a jeho uloženia do vlastnej peňaženky.",
	"buy_step_1_header": "KROK 1: VYBERTE SVOJU KRAJINU",
	"buy_step_1_description": "Rôzne krajiny majú rôzne možnosti nákupu Bitcoinu. Vyberte svoju krajinu pre zobrazenie najlepších možností.",
	"buy_search_countries": "Vyhľadajte svoju krajinu",
	"buy_country_united_states": "Spojené štáty", "buy_country_australia": "Austrália", "buy_country_austria": "Rakúsko", "buy_country_belgium": "Belgicko", "buy_country_brazil": "Brazília", "buy_country_canada": "Kanada", "buy_country_france": "Francúzsko", "buy_country_germany": "Nemecko", "buy_country_ireland": "Írsko", "buy_country_italy": "Taliansko", "buy_country_netherlands": "Holandsko", "buy_country_new_zealand": "Nový Zéland", "buy_country_spain": "Španielsko", "buy_country_united_kingdom": "Spojené kráľovstvo", "buy_country_argentina": "Argentína", "buy_country_chile": "Chile", "buy_country_colombia": "Kolumbia", "buy_country_costa_rica": "Kostarika", "buy_country_czech_republic": "Česká republika", "buy_country_denmark": "Dánsko", "buy_country_el_salvador": "Salvádor", "buy_country_estonia": "Estónsko", "buy_country_finland": "Fínsko", "buy_country_greece": "Grécko", "buy_country_guatemala": "Guatemala", "buy_country_hong_kong": "Hongkong", "buy_country_hungary": "Maďarsko", "buy_country_iceland": "Island", "buy_country_india": "India", "buy_country_israel": "Izrael", "buy_country_japan": "Japonsko", "buy_country_latvia": "Lotyšsko", "buy_country_lithuania": "Litva", "buy_country_luxembourg": "Luxembursko", "buy_country_malta": "Malta", "buy_country_mexico": "Mexiko", "buy_country_norway": "Nórsko", "buy_country_panama": "Panama", "buy_country_poland": "Poľsko", "buy_country_portugal": "Portugalsko", "buy_country_romania": "Rumunsko", "buy_country_singapore": "Singapur", "buy_country_slovakia": "Slovensko", "buy_country_slovenia": "Slovinsko", "buy_country_south_africa": "Juhoafrická republika", "buy_country_south_korea": "Južná Kórea", "buy_country_sweden": "Švédsko", "buy_country_switzerland": "Švajčiarsko", "buy_country_thailand": "Thajsko", "buy_country_turkey": "Turecko", "buy_country_ukraine": "Ukrajina", "buy_country_uruguay": "Uruguaj",
	"buy_step_2_header": "KROK 2: VYBERTE SPÔSOB PLATBY",
	"buy_step_2_description": "Existujú dva hlavné spôsoby nákupu Bitcoinu: bankovým prevodom alebo hotovosťou. Každý má svoje výhody.",
	"buy_method_bank_transfer": "BANKOVÝ PREVOD", "buy_method_bank_fast": "Rýchly a jednoduchý", "buy_method_bank_less_private": "Menej súkromný",
	"buy_method_bank_description": "Bankové prevody sú najbežnejším spôsobom nákupu Bitcoinu. Sú rýchle, pohodlné a zvyčajne majú nižšie poplatky.",
	"buy_method_choose_bank": "Vybrať bankový prevod", "buy_method_cash": "HOTOVOSŤ", "buy_method_cash_private": "Súkromnejší", "buy_method_cash_limited": "Obmedzené možnosti",
	"buy_method_cash_description": "Nákupy za hotovosť ponúkajú viac súkromia, ale majú menej možností a môžu vyžadovať osobné stretnutie alebo použitie bitcoinového bankomatu.",
	"buy_method_choose_cash": "Vybrať hotovosť",
	"buy_step_3_header": "KROK 3: MOŽNOSTI NÁKUPU",
	"buy_step_3_description": "Tu sú najlepšie možnosti nákupu Bitcoinu pre vašu krajinu a spôsob platby:",
	"buy_platform_recommended": "ODPORÚČANÉ",
	"buy_platform_strike_description": "Strike je najrýchlejší a najjednoduchší spôsob nákupu Bitcoinu s nízkymi poplatkami a okamžitou podporou Lightning Network.",
	"buy_platform_swan_description": "Swan Bitcoin sa špecializuje na čisto bitcoinové služby s pravidelným investovaním a vzdelávacími zdrojmi.",
	"buy_platform_river_description": "River ponúka nákup Bitcoinu, ťažbu a úschovné služby so zameraním na vzdelávanie a bezpečnosť.",
	"buy_platform_coinsquare_description": "Coinsquare je kanadská bitcoinová burza so silnou regulačnou zhodou a zákazníckou podporou.",
	"buy_platform_kraken_description": "Kraken je zavedená bitcoinová burza s pokročilými obchodnými funkciami a silnou bezpečnosťou.",
	"buy_platform_atm_description": "Bitcoinové bankomaty vám umožňujú okamžite kúpiť Bitcoin za hotovosť. Nájdite najbližší pomocou Coin ATM Radar.",
	"buy_platform_bisq_description": "Bisq je decentralizovaná peer-to-peer burza, ktorá umožňuje súkromné obchodovanie s Bitcoinom bez KYC.",
	"buy_platform_feature_instant": "Okamžité nákupy", "buy_platform_feature_low_fees": "Nízke poplatky", "buy_platform_feature_lightning": "Lightning Network", "buy_platform_feature_dca": "Pravidelné investovanie", "buy_platform_feature_education": "Vzdelávacie zdroje", "buy_platform_feature_withdrawal": "Jednoduchý výber", "buy_platform_feature_mining": "Ťažba Bitcoinu", "buy_platform_feature_custody": "Úschovné služby", "buy_platform_feature_canadian": "Zameraný na Kanadu", "buy_platform_feature_regulated": "Regulovaná burza", "buy_platform_feature_support": "Zákaznícka podpora", "buy_platform_feature_established": "Zavedená platforma", "buy_platform_feature_security": "Silná bezpečnosť", "buy_platform_feature_advanced": "Pokročilé funkcie", "buy_platform_feature_cash": "Nákupy za hotovosť", "buy_platform_feature_anonymous": "Anonymnejší", "buy_platform_feature_p2p": "Peer-to-peer", "buy_platform_feature_private": "Súkromné obchodovanie", "buy_platform_feature_decentralized": "Decentralizovaná",
	"buy_platform_relai_description": "Relai je švajčiarska čisto bitcoinová aplikácia s peňaženkou s vlastnou správou, funkciami automatického investovania a nízkymi poplatkami pre európskych používateľov.",
	"buy_platform_feature_bitcoin_only": "Iba Bitcoin", "buy_platform_feature_self_custody": "Peňaženka s vlastnou správou", "buy_platform_feature_auto_invest": "Plány automatického investovania", "buy_platform_feature_european": "Zameraný na Európu",
	"buy_step_4_header": "KROK 4: BEZPEČNE ULOŽTE SVOJ BITCOIN",
	"buy_step_4_c1": "Po nákupe Bitcoinu je najdôležitejším krokom presunúť ho do vlastnej peňaženky, kde kontrolujete súkromné kľúče.",
	"buy_step_4_c2": "Ponechanie Bitcoinu na burze je riskantné, pretože Bitcoin v skutočnosti nevlastníte — vlastní ho burza.",
	"buy_step_4_c3": "Keď kontrolujete svoje vlastné súkromné kľúče, máte skutočné vlastníctvo svojho Bitcoinu a nikto vám ho nemôže vziať.",
	"buy_step_4_c4": "Zistite, ako vybrať správnu bitcoinovú peňaženku pre vaše potreby:",
	"buy_cta_wallets": "Zobraziť sprievodcu bitcoinovými peňaženkami"
});

writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Sprievodca Bitcoin Lightning peňaženkami",
	"lightning_description": "Lightning peňaženky vám umožňujú posielať Bitcoin rýchlo a lacno pri zachovaní vašej osobnej suverenity.",
	"lightning_header": "SPRIEVODCA LIGHTNING PEŇAŽENKAMI",
	"lightning_s1_c1": "Lightning vám umožňuje posielať bitcoinové platby rýchlo a lacno.",
	"lightning_s1_c2": "Je dôležité vedieť, že používanie Lightning prináša kompromisy. Výmenou za rýchlejšie a lacnejšie bitcoinové platby často obetujete nejakú bezpečnosť.",
	"lightning_s1_c3": "Všeobecne by sa Lightning mal používať iba s malými čiastkami bitcoinu. Veľké čiastky bitcoinu by ste mali vždy uchovávať v hardvérovej peňaženke.",
	"lightning_s1_c4": "Pozrite si nášho sprievodcu hardvérovými peňaženkami pre viac informácií.",
	"lightning_s1_c5": "Nie všetky Lightning peňaženky sú rovnaké. Ktorá peňaženka má správnu rovnováhu kompromisov pre vás, zistíte zodpovedaním jednej jednoduchej otázky:",
	"lightning_question_1": "AKÁ ROVNOVÁHA KOMPROMISOV JE PRE MŇA SPRÁVNA?",
	"lightning_s2_c1": "Jednou z inovácií Bitcoinu je schopnosť uchovávať ho bez závislosti od správcu, ako je banka. Peňaženky s vlastnou správou odomykajú plnú silu Bitcoinu.",
	"lightning_s2_c2": "S peňaženkou s vlastnou správou ste jediný, kto má schopnosť minúť alebo previesť vaše peniaze. Nikto vás nemôže zastaviť, cenzurovať alebo okradnúť, keď používate peňaženku s vlastnou správou. Tým sa tiež hovorí nekustodné peňaženky.",
	"lightning_s2_c3": "Najsuverénnejší spôsob používania Lightning je prevádzkovanie vlastného uzla.",
	"lightning_s2_c4": "Tento sprievodca je zameraný na jednoduché Lightning peňaženky, ktoré nevyžadujú vlastný uzol.",
	"lightning_s2_c5": "Je dôležité vedieť, že aj pri používaní nekustodnej Lightning peňaženky stále dôverujete tvorcovi peňaženky, že nepresadí škodlivú aktualizáciu aplikácie a neukradne vaše prostriedky.",
	"lightning_s3_c1": "Kustodné peňaženky sú peňaženky, kde nemáte kontrolu nad svojimi peniazmi.",
	"lightning_s3_c2": "Tieto peňaženky sú podobnejšie bankovému systému, kde musíte dôverovať tretej strane, že vám dá prístup k vašim peniazom. Ak je váš Bitcoin na burze, používate kustodnú peňaženku.",
	"lightning_s3_c3": "Kustodné peňaženky môžu pôsobiť pohodlne, ale správca má technickú schopnosť kedykoľvek ukradnúť všetky prostriedky používateľov.",
	"lightning_s3_c4": "Niektorí ľudia preferujú kustodné Lightning peňaženky pre malé čiastky bitcoinu kvôli ich jednoduchému použitiu. Len nezabudnite: nie vaše kľúče, nie vaše mince!",
	"lightning_question_2": "VYBERTE SI PEŇAŽENKU",
	"lightning_s4_c1": "So všetkým týmto na pamäti si teraz môžete vybrať lightning peňaženku so správnou rovnováhou kompromisov pre vás.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Mnoho funkcií", "lightning_mobile_app": "Mobilná aplikácia", "lightning_free": "100 % zadarmo", "lightning_merchants": "Skvelá pre obchodníkov", "lightning_starter": "Skvelá úvodná peňaženka", "lightning_browser": "V prehliadači", "lightning_custodial": "Plne kustodná peňaženka",
	"lightning_cta_hardware": "Hľadáte nášho sprievodcu hardvérovými bitcoinovými peňaženkami?"
});

writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Bezplatné bitcoinové nálepky od bitcoin.rocks",
	"stickers_description": "Dajte bitcoinovú nálepku na verejné miesto a pomôžte presvedčiť ľudí okolo vás.",
	"stickers_header": "BEZPLATNÉ BITCOINOVÉ NÁLEPKY",
	"stickers_choose_header": "VYBERTE SI SVOJ BALÍČEK NÁLEPIEK",
	"stickers_choose_c1": "Naším poslaním je pomôcť vám presvedčiť viac ľudí tým, že budete dávať bitcoinové nálepky na verejné miesta. Všetky naše nálepky majú QR kódy, ktoré odkazujú na vzdelávacie stránky o",
	"stickers_choose_c2": "Bitcoine", "stickers_choose_c3": "inflácii",
	"stickers_choose_c4": "Vyberte si balíček nálepiek nižšie",
	"stickers_text_pack": "TEXTOVÝ BALÍČEK", "stickers_signs_pack": "BALÍČEK ZNAČIEK",
	"stickers_instructions_1": "Zadajte svoju poštovú adresu a my vám pošleme bezplatný balíček bitcoinových nálepiek! Vaše nálepky budú odoslané v obyčajnej bielej obálke.",
	"stickers_instructions_2": "Údaje o adrese sú vymazané po odoslaní bezplatných nálepiek.",
	"stickers_share_header": "ZDIEĽAJTE SVOJE MIESTA S NÁLEPKAMI",
	"stickers_share_c1": "Zdieľajte svoje miesta s nálepkami s nami na Nostre a pozrite sa, kam ostatní ľudia dávajú svoje nálepky.",
	"stickers_btn_share_on_nostr": "ZDIEĽAŤ NA NOSTRE", "stickers_btn_what_is_nostr": "ČO JE NOSTR?",
	"stickers_flyers_link_before": "Medzitým si vytlačte a vylepte vlastné ", "stickers_flyers_link_text": "bitcoinové letáky", "stickers_flyers_link_after": " a pomôžte presvedčiť ešte viac ľudí.",
	"stickers_country_global_print": "Celosvetovo — Vytlačím si vlastné nálepky", "stickers_country_global_order": "Celosvetovo — Objednať vo veľkom",
	"placeholder_name_optional": "Meno (nepovinné)", "placeholder_address_line_1": "Adresa riadok 1", "placeholder_address_line_2": "Adresa riadok 2 (nepovinné)", "placeholder_city": "Mesto", "placeholder_state": "Štát", "placeholder_province": "Kraj", "placeholder_zip_code": "PSČ", "placeholder_postal_code": "Poštové smerovacie číslo", "placeholder_language": "Jazyk", "placeholder_which_stickers": "Ktoré nálepky?", "placeholder_email_optional": "Zadajte e-mail pre upozornenie (nepovinné)"
});

writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Bezplatné bitcoinové pohľadnice od bitcoin.rocks",
	"postcards_description": "Získajte bezplatný balíček bitcoinových pohľadníc a zdieľajte Bitcoin s niekým, koho poznáte.",
	"postcards_header": "PROGRAM POHĽADNÍC UKONČENÝ",
	"postcards_program_closed_message": "Náš bezplatný program bitcoinových pohľadníc skončil. Ďakujeme všetkým, ktorí sa podieľali na šírení vzdelávania o Bitcoine prostredníctvom pošty!",
	"postcards_sticker_alternative_header": "ZÍSKAJTE NAMIESTO TOHO BEZPLATNÉ BITCOINOVÉ NÁLEPKY",
	"postcards_sticker_alternative_message": "Pokračujte v šírení povedomia o Bitcoine s naším bezplatným programom nálepiek! Naše bitcoinové nálepky sú ideálne pre zdieľanie na verejných miestach a obsahujú QR kódy odkazujúce na vzdelávací obsah.",
	"postcards_sticker_cta": "ZÍSKAŤ BEZPLATNÉ NÁLEPKY",
	"postcards_step_2": "AKO POHĽADNICE VYZERALI",
	"postcards_instructions_4": "Tieto pohľadnice sme vytvorili, aby bolo jednoduchšie predstaviť Bitcoinu niekoho, koho poznáte! Stačí pridať adresu a známku a vhodiť pohľadnicu do schránky.",
	"postcards_instructions_5": "Naším poslaním je urýchliť prijatie Bitcoinu. Môžete pomôcť získaním bezplatných nálepiek a ich umiestnením na verejné miesta!",
	"postcards_instructions_6": "Všetci poznáme pár ľudí, ktorí by mohli mať prospech z toho, keby sa dozvedeli viac o Bitcoine. Zdieľajte s nimi bitcoinové nálepky ešte dnes!"
});

writeFile(`signs_${lang}.json`, {
	"signs_description": "Pomôžte nám umiestniť tieto bitcoinové cedule po celej Amerike!",
	"signs_title": "Bezplatné bitcoinové cedule od bitcoin.rocks",
	"signs_choose_header": "ĎAKUJEME, ŽE NÁM POMÁHATE UMIESTŇOVAŤ TIETO BITCOINOVÉ CEDULE PO CELEJ AMERIKE!",
	"signs_choose_c1": "Všetky cedule sú teraz rozdané! Naším poslaním je urýchliť prijatie Bitcoinu prostredníctvom vzdelávania.",
	"signs_choose_c2": "Mnohí z vás pomohli umiestnením týchto bezplatných bitcoinových cedulí na verejné miesta. Všetky naše cedule majú QR kódy, ktoré odkazujú na vzdelávaciu stránku o",
	"signs_choose_c3": "inflácii",
	"signs_choose_c4": "Vďaka našej úžasnej komunite sme oslovili tisíce ľudí a pomohli im urobiť prvé kroky do bitcoinovej králičej nory.",
	"signs_share_header": "ZDIEĽAJTE SVOJE MIESTA S CEDUĽAMI",
	"signs_share_c1": "Zdieľajte fotku svojho miesta s ceduľou s nami na Nostre a pozrite sa, kam ostatní ľudia umiestňujú svoje cedule.",
	"signs_btn_share_on_nostr": "ZDIEĽAŤ NA NOSTRE", "signs_btn_what_is_nostr": "ČO JE NOSTR?",
	"signs_instructions_1": "Zadajte svoju poštovú adresu a my vám pošleme krabicu 10 bitcoinových cedulí!",
	"signs_instructions_2": "Údaje o adrese sú vymazané po odoslaní bezplatných cedulí."
});

writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Bezplatné bitcoinové letáky od bitcoin.rocks",
	"flyers_description": "Vytlačte si doma bitcoinový leták a umiestnite ho na verejné miesto, aby ste presvedčili ľudí okolo vás.",
	"flyers_header_1": "TLAČTE A VYLEPUJTE",
	"flyers_header_2": "BITCOINOVÉ LETÁKY",
	"flyers_intro_header": "AKO TLAČIŤ A VYLEPOVAŤ TIETO BITCOINOVÉ LETÁKY",
	"flyers_intro_c1": "Naším poslaním je pomôcť vám presvedčiť viac ľudí tým, že budete dávať bitcoinové letáky na verejné miesta. Tento leták má QR kód, ktorý odkazuje na našu",
	"flyers_intro_c2": "vzdelávaciu bitcoinovú stránku.",
	"flyers_intro_c3": "inflácii",
	"flyers_intro_c4": "Vytlačte tento leták doma alebo v tlačiarni. Potom ho umiestnite na nástenky, telefónne stĺpy v meste a ďalšie verejné miesta, kde ho ľudia uvidia a dozvedia sa o Bitcoine.",
	"flyers_intro_c5": "Medzitým si požiadajte o balíček našich",
	"flyers_intro_c6": "bezplatných bitcoinových nálepiek",
	"flyers_intro_c7": "a pomôžte presvedčiť ešte viac ľudí.",
	"flyers_btn_download": "STIAHNUŤ LETÁK", "flyers_btn_print": "TLAČIŤ LETÁK",
	"flyers_share_header": "ZDIEĽAJTE SVOJE MIESTA S LETÁKMI",
	"flyers_share_c1": "Zdieľajte svoje miesta s letákmi s nami na Nostre a pozrite sa, kam ostatní ľudia dávajú svoje letáky.",
	"flyers_btn_share_on_nostr": "ZDIEĽAŤ NA NOSTRE", "flyers_btn_what_is_nostr": "ČO JE NOSTR?"
});

writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Zapojte sa a pomôžte šíriť Bitcoin",
	"get_involved_description": "Naše bezplatné zdroje uľahčujú šírenie prijatia Bitcoinu.",
	"get_involved_header": "ZAPOJTE SA",
	"get_involved_header_2": "ŠÍRTE BITCOIN",
	"get_involved_intro_1": "Môže byť deprimujúce žiť v súčasnom stave nášho sveta.",
	"get_involved_intro_2": "Naše peniaze sú rozbité. V dôsledku toho sú rozbité aj základné časti spoločnosti.",
	"get_involved_intro_3": "Ak sa už zaujímate o Bitcoin, poznáte ten pocit nádeje, ktorý Bitcoin môže priniesť. Nádeje na lepšiu budúcnosť umožnenú lepšími peniazmi.",
	"get_involved_intro_4": "Ale toľko ľudí okolo vás o Bitcoine nevie. Žijú v rovnakom rozbítom svete ako vy, ale bez majáku nádeje, ktorý by im pomohol cez temnotu.",
	"get_involved_intro_5": "Ale vy to môžete zmeniť. Vytvorili sme niekoľko bezplatných zdrojov, ktoré uľahčujú šírenie nádeje, ktorú Bitcoin prináša ľuďom okolo vás.",
	"get_involved_sticker_header": "Dajte nálepku na verejné miesto",
	"get_involved_sticker_content_1": "Môžete pomôcť vzdelávať ľudí okolo seba o Bitcoine, bez toho aby ste museli s kýmkoľvek komunikovať. Jednoducho dajte jednu z našich bezplatných bitcoinových nálepiek na verejné miesto.",
	"get_involved_sticker_content_2": "Stovky ľudí každý mesiac skenujú QR kódy na týchto nálepkách. Inflačné nálepky odkazujú na stránku o",
	"get_involved_sticker_content_3": "Bitcoine ako riešení inflácie.",
	"get_involved_sticker_content_4": "Ostatné nálepky odkazujú na našu vzdelávaciu hlavnú stránku, ktorá ľuďom ukazuje, ako",
	"get_involved_sticker_content_5": "Bitcoin buduje lepší svet.",
	"get_involved_sticker_content_6": "Umiestnením týchto nálepiek vo vašej komunite na miesta, kde ich ľudia uvidia, môžete pomôcť ľuďom okolo vás urobiť prvé kroky do bitcoinovej králičej nory.",
	"get_involved_request_a": "POŽIADAJTE O",
	"get_involved_sticker_pack": "BALÍČEK NÁLEPIEK",
	"get_involved_postcard_header": "Pošlite pohľadnicu",
	"get_involved_postcard_content_1": "Môžete pomôcť šíriť nádej Bitcoinu niekomu, koho poznáte, poslaním jednej z našich bezplatných pohľadníc.",
	"get_involved_postcard_content_2": "Zadná strana každej pohľadnice obsahuje presvedčivý text o Bitcoine spolu s QR kódom pre ďalšie informácie.",
	"get_involved_postcard_content_3": "Poslaním bitcoinovej pohľadnice môžete pomôcť niekomu vidieť Bitcoin v novom svetle.",
	"get_involved_postcard_pack": "BALÍČEK POHĽADNÍC",
	"get_involved_business_header": "Pripojte firmu",
	"get_involved_business_content_1": "Chcete pomôcť budovať bitcoinovú cirkulárnu ekonomiku? Naša bitcoinová podnikateľská sada uľahčuje oslovenie firmy ohľadom prijímania bitcoinových platieb.",
	"get_involved_business_content_2": "Každá podnikateľská sada obsahuje letáky, ktoré zdôrazňujú výhody prijímania bitcoinových platieb. Každý leták odkazuje na rôzne",
	"get_involved_business_content_3": "bezplatné bitcoinové podnikateľské zdroje.",
	"get_involved_business_kit": "PODNIKATEĽSKÁ SADA"
});

console.log(`\nDone! Created 9 content files.`);
