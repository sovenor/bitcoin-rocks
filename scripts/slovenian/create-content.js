/**
 * Creates Slovenian (sl) translation files for content pages:
 * bank-runs, wallets, buy, lightning, stickers, postcards, signs, flyers, get-involved
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

writeFile(`bank-runs_${lang}.json`, {
	"bitcoin_doesnt_have_bank_runs": "Bitcoin nima bančnih naletov",
	"bank_runs_header": "BITCOIN NIMA BANČNIH NALETOV",
	"bank_runs_header_2": "TODA VAŠA BANKA JIH IMA",
	"bank_runs_what": "KAJ JE BANČNI NALET?",
	"bank_runs_what_content_1": "Bančni nalet nastane, ko preveč ljudi hkrati poskuša dvigniti svoj denar iz banke.",
	"bank_runs_what_content_2": "Če banke nimajo dovolj denarja za pokritje dvigov, se lahko ob bančnem naletu popolnoma sesujejo.",
	"bank_runs_how": "KAKO DO BANČNIH NALETOV PRIDE?",
	"bank_runs_how_content_1": "Naš bančni sistem je 'delno rezervni', kar pomeni, da banke vašega denarja ne le hranijo v treznorju in čakajo, da ga porabite ali dvignete.",
	"bank_runs_how_content_2": "Namesto tega banka vzame vaš denar in ga posodi ali investira. To lahko vaš denar zaklene za dolgo časa, čeprav vam banka obljublja možnost dviga kadarkoli.",
	"bank_runs_how_content_3": "Kaj se zgodi, ko poskusite dvigniti denar, potem ko ga je banka že posodila ali investirala?",
	"bank_runs_how_content_4": "Če ste edini, ki dviguje, ni problema. Banka preprosto vzame denar nekoga drugega in ga da vam. Toda kaj se zgodi, ko želi dvigniti preveč ljudi naenkrat?",
	"bank_runs_how_content_5": "Mnogi ljudje v ZDA so to izvedeli, ko je marca 2023 prišlo do naleta na Silicon Valley Bank.",
	"bank_runs_how_content_6": "Banka je investirala denar svojih strank v državne obveznice, ki so bile vezane do 30 let. Še huje, vrednost teh obveznic je nedavno dramatično padla, tako da Silicon Valley Bank ni mogla obveznic preprosto prodati, da bi dobila denar svojih vlagateljev. Bila je insolventna. Ni imela dovolj denarja za pokritje dvigov svojih vlagateljev.",
	"bank_runs_how_content_7": "Ko je o tem izvedelo več ljudi, se je problem le poslabšal. Prihajalo je več zahtevkov za dvig, toda mnogi niso bili obdelani. Tisoče podjetij je ugotovilo, da ne bodo mogla plačati svojih zaposlenih zaradi propada banke.",
	"bank_runs_how_content_8": "FDIC je posredoval in privolil v odškodnino vlagateljev. Problem rešen? Ne ravno...",
	"bank_runs_fdic": "ALI ZAVAROVANJE FDIC ŠČITI MOJ DENAR?",
	"bank_runs_fdic_content_1": "Zavarovanje FDIC je zasnovano za zaščito bančnih vlagateljev v primeru propada banke. Vloge so zavarovane do 250.000 $ na vlagatelja. Zveni odlično, kajne?",
	"bank_runs_fdic_content_2": "Ne ravno. Če banka propade, od kod FDIC vzame denar? Ima zavarovalni sklad s 125 milijardami dolarjev.",
	"bank_runs_fdic_content_3": "To se sliši kot veliko denarja, dokler tega ne primerjate z obsegom vlog, ki jih zavarujejo: skoraj 10 bilijonov oziroma 10.000 milijard dolarjev.",
	"bank_runs_fdic_content_4": "FDIC celo na svoji spletni strani kaže, da ima v svojem zavarovalnem skladu dovolj denarja za pokritje le nekaj več kot 1 % vlog.",
	"bank_runs_fdic_content_5": "V primeru propada banke, ki bi presegel zavarovalni sklad FDIC, je verjetno (toda ne zagotovljeno), da bi ameriška vlada natisnila denar za odškodnino vlagateljev.",
	"bank_runs_fdic_content_6": "Toda tiskanje denarja povzroča inflacijo, tako da to ni odlična rešitev.",
	"bank_runs_safe": "ALI OBSTAJAJO BANKE, KI NE UPORABLJAJO DELNE REZERVE?",
	"bank_runs_safe_content_1": "Nekatere banke so poskušale biti 'varne banke', ki ne posojajo ali investirajo sredstev vlagateljev.",
	"bank_runs_safe_content_2": "Čeprav bi te varne banke imele ničelno tveganje bančnih naletov, je njihove vloge Federalna rezerva zavrnila. To pomeni, da ne morejo zakonito delovati kot banke.",
	"bank_runs_safe_content_3": "Ker jim je bilo delovanje blokirano, danes ne obstajajo nobene banke, ki ne bi uporabljale delne rezerve.",
	"bank_runs_safe_content_4": "Na srečo obstaja način, da izstopite iz sistema delne rezerve tako, da postanete svoja lastna banka. Ne, ne govorimo o skrivanju gotovine pod vzglavnik.",
	"bank_runs_safe_content_5": "Varčevanje v gotovini je še vedno ranljivo za inflacijo.",
	"bank_runs_safe_content_6": "Govorimo o Bitcoinu: novem finančnem sistemu, ki vam omogoča, da postanete svoja lastna banka.",
	"bank_runs_protect": "ALI ME BITCOIN LAHKO ZAŠČITI PRED BANČNIMI NALETI?",
	"bank_runs_protect_content_1": "Da, Bitcoin je polnorezerven finančni sistem.",
	"bank_runs_protect_content_2": "Bančni naleti so pri Bitcoinu nemogoči, če prevzamete svoj Bitcoin v lastno denarnico. Ne puščajte svojega bitcoina na borzi ali v ovoju, kot je bitcoinov ETF.",
	"bank_runs_protect_content_3": "Oglejte si naš preprost vodič po bitcoinovih denarnicah in ugotovite, kako prevzeti v lastno denarnico.",
	"bank_runs_protect_content_4": "Z Bitcoinom lahko končno imate nadzor nad svojim denarjem."
});

writeFile(`wallets_${lang}.json`, {
	"bitcoin_wallet_guide": "Vodič po bitcoinovih denarnicah",
	"wallets_description": "Obstaja veliko različnih bitcoinovih denarnic, ki se razlikujejo na pomembne načine. Ali je denarnica prava za vas, lahko ugotovite z zastavitvijo teh preprostih vprašanj.",
	"wallets_header": "KAKO VARNO SHRANITI SVOJ BITCOIN",
	"wallets_s1_c1": "Bitcoinove denarnice so medsebojno združljive, tako da lahko pošljete Bitcoin komurkoli ne glede na to, katero denarnico uporablja.",
	"wallets_s1_c2": "Obstaja veliko različnih bitcoinovih denarnic, ki se razlikujejo na pomembne načine. Ali je denarnica prava za vas, lahko ugotovite z zastavitvijo teh preprostih vprašanj:",
	"wallets_question_1": "ALI JE TO DENARNICA Z LASTNO HRAMBO?",
	"wallets_s2_c1": "Ena od inovacij Bitcoina je sposobnost shranjevanja brez zanašanja na skrbnika, kot je banka.",
	"wallets_s2_c2": "Če držite bitcoin na borzi ali v ETF, izgubljate prednosti svobode bitcoina.",
	"wallets_s2_c3": "Denarnice z lastno hrambo odklenejo polno moč Bitcoina: svoboden denar.",
	"wallets_s2_c4": "Z denarnico z lastno hrambo ste edini, ki ima sposobnost porabiti ali prenesti vaš denar. Nihče vam ne more preprečiti pošiljanja ali prejemanja denarja, ko uporabljate denarnico z lastno hrambo.",
	"wallets_s2_c5": "Denarnicam z lastno hrambo se reče tudi ne-skrbniške denarnice.",
	"wallets_s3_c1": "Skrbniške denarnice so denarnice, kjer nimate nadzora nad svojim denarjem.",
	"wallets_s3_c2": "Te denarnice so bolj podobne bančnemu sistemu, kjer morate zaupati tretji osebi, da vam da dostop do vašega denarja. Če je vaš Bitcoin na borzi, uporabljate skrbniško denarnico.",
	"wallets_s3_c3": "Če ste kupili bitcoinov ETF, uporabljate skrbniško denarnico, ki vam ne dovoljuje dviga v lastno hrambo.",
	"wallets_s3_c4": "Skrbniške denarnice se morda zdijo priročne, toda skrbnik ima tehnično sposobnost kadarkoli ukrasti vsa sredstva uporabnikov.",
	"wallets_s3_c5": "Ne vaši ključi, ne vaši kovanci!",
	"wallets_question_2": "ALI JE VROČA ALI HLADNA?",
	"wallets_s4_c1": "Hladne denarnice shranjujejo ključe do vašega Bitcoina na način, ki jih nikoli ne izpostavi internetu.",
	"wallets_s4_c2": "To znatno omejuje vektorje napada, ki bi jih tat lahko uporabil za poskus kraje vašega Bitcoina, in je najboljše za velike zneske Bitcoina, ki jih ne potrebujete pogosto prenašati.",
	"wallets_s4_c3": "Hladno denarnico si lahko predstavljate kot dolgoročni varčevalni račun, znan tudi kot hladna hramba.",
	"wallets_s5_c1": "Vroče denarnice shranjujejo ključe do vašega Bitcoina na napravi, povezani z internetom, kot je vaš telefon.",
	"wallets_s5_c2": "Vroče denarnice so na splošno smatrane za varne, toda imajo lahko več varnostnih ranljivosti kot hladne denarnice.",
	"wallets_s5_c3": "Vročo denarnico si lahko predstavljate kot fizično denarnico. Ne bi v nji shranili celotnih prihrankov, toda bi v nji shranili nekaj denarja za porabo.",
	"wallets_s5_c4": "Vroče denarnice olajšajo porabo Bitcoina brez potrebe po vleki celotnih prihrankov iz hladne hrambe.",
	"wallets_question_3": "KAKO VARNOSTNO KOPIRATI OBNOVITVENO FRAZO?",
	"wallets_s6_c1": "Pri nastavitvi bitcoinove denarnice vaša naprava ustvari obnovitveno frazo. Ta obnovitvena fraza (imenovana tudi seed fraza) vsebuje 12 ali 24 besed.",
	"wallets_s6_c2": "Če izgubite dostop do svoje denarnice ali vaša naprava preneha delovati, lahko to obnovitveno frazo vnesete v novo denarnico in znova pridobite dostop do svojega Bitcoina.",
	"wallets_s6_c3": "Večina denarnic vključuje list papirja za zapis obnovitvene fraze, toda mnogi ljudje raje to frazo varnostno kopirajo na jeklo. To znatno zmanjša verjetnost izgube obnovitvene fraze v primeru naravne nesreče, kot je požar ali poplava.",
	"wallets_s6_c4": "Jameson Lopp je preizkusil 70 jeklenih varnostnih kopij, da vam pomaga izbrati pravo.",
	"wallets_s6_c5": "Oglejte si Jamesonov vodič po kovinskih bitcoinovih varnostnih kopijah tukaj.",
	"wallets_s6_c6": "Ali pa nadaljujte z drsenjem in raziščite možnosti bitcoinovih denarnic.",
	"wallets_blockstream_green": "BLOCKSTREAM GREEN", "wallets_coldcard_mk5": "COLDCARD MK5", "wallets_coldcard_q": "COLDCARD Q", "wallets_blockstream_jade": "BLOCKSTREAM JADE", "wallets_foundation_passport": "FOUNDATION PASSPORT", "wallets_seedsigner": "SEEDSIGNER",
	"wallets_cta_lightning": "Iščete naš vodič po Lightning denarnicah?",
	"wallets_starter_wallet": "Odlična začetna denarnica", "wallets_mobile_app": "Mobilna aplikacija", "wallets_2fa_support": "Podpora 2FA", "wallets_air_gap_mode": "Način air-gap", "wallets_air_gap_camera": "Način air-gap + kamera", "wallets_bitcoin_only": "Samo Bitcoin", "wallets_security_features": "Veliko varnostnih funkcij", "wallets_free": "100 % brezplačno",
	"wallets_coldcard_mk5_costs": "Stane $189", "wallets_coldcard_q_costs": "Stane $289", "wallets_blockstream_jade_costs": "Stane $79", "wallets_foundation_passport_costs": "Stane $199", "wallets_seedsigner_costs": "Deli stanejo $50",
	"wallets_very_affordable": "Zelo dostopna", "wallets_pair_with_phone": "Povežite s telefonom", "wallets_battery": "Polnilna baterija", "wallets_build_your_own": "Sestavite sami", "wallets_qwerty_keyboard": "Polna QWERTY tipkovnica", "wallets_qr_scanner": "Čitalec QR kod"
});

writeFile(`buy_${lang}.json`, {
	"buy_bitcoin_guide": "Kako kupiti Bitcoin — Vodič po korakih",
	"buy_header": "KAKO KUPITI BITCOIN",
	"buy_intro_c1": "Nakup Bitcoina prvič se morda zdi zastrašujoč, toda v resnici je precej preprost, ko ga razdelite na korake.",
	"buy_intro_c2": "Ta vodič vas bo popeljal skozi postopek varnega nakupa Bitcoina in shranjevanja v lastno denarnico.",
	"buy_step_1_header": "KORAK 1: IZBERITE SVOJO DRŽAVO",
	"buy_step_1_description": "Različne države imajo različne možnosti za nakup Bitcoina. Izberite svojo državo za ogled najboljših možnosti.",
	"buy_search_countries": "Poiščite svojo državo",
	"buy_country_united_states": "Združene države", "buy_country_australia": "Avstralija", "buy_country_austria": "Avstrija", "buy_country_belgium": "Belgija", "buy_country_brazil": "Brazilija", "buy_country_canada": "Kanada", "buy_country_france": "Francija", "buy_country_germany": "Nemčija", "buy_country_ireland": "Irska", "buy_country_italy": "Italija", "buy_country_netherlands": "Nizozemska", "buy_country_new_zealand": "Nova Zelandija", "buy_country_spain": "Španija", "buy_country_united_kingdom": "Združeno kraljestvo", "buy_country_argentina": "Argentina", "buy_country_chile": "Čile", "buy_country_colombia": "Kolumbija", "buy_country_costa_rica": "Kostarika", "buy_country_czech_republic": "Češka republika", "buy_country_denmark": "Danska", "buy_country_el_salvador": "Salvador", "buy_country_estonia": "Estonija", "buy_country_finland": "Finska", "buy_country_greece": "Grčija", "buy_country_guatemala": "Gvatemala", "buy_country_hong_kong": "Hongkong", "buy_country_hungary": "Madžarska", "buy_country_iceland": "Islandija", "buy_country_india": "Indija", "buy_country_israel": "Izrael", "buy_country_japan": "Japonska", "buy_country_latvia": "Latvija", "buy_country_lithuania": "Litva", "buy_country_luxembourg": "Luksemburg", "buy_country_malta": "Malta", "buy_country_mexico": "Mehika", "buy_country_norway": "Norveška", "buy_country_panama": "Panama", "buy_country_poland": "Poljska", "buy_country_portugal": "Portugalska", "buy_country_romania": "Romunija", "buy_country_singapore": "Singapur", "buy_country_slovakia": "Slovaška", "buy_country_slovenia": "Slovenija", "buy_country_south_africa": "Južna Afrika", "buy_country_south_korea": "Južna Koreja", "buy_country_sweden": "Švedska", "buy_country_switzerland": "Švica", "buy_country_thailand": "Tajska", "buy_country_turkey": "Turčija", "buy_country_ukraine": "Ukrajina", "buy_country_uruguay": "Urugvaj",
	"buy_step_2_header": "KORAK 2: IZBERITE NAČIN PLAČILA",
	"buy_step_2_description": "Obstajata dva glavna načina za nakup Bitcoina: bančno nakazilo ali gotovina. Vsak ima svoje prednosti.",
	"buy_method_bank_transfer": "BANČNO NAKAZILO", "buy_method_bank_fast": "Hitro in enostavno", "buy_method_bank_less_private": "Manj zasebno",
	"buy_method_bank_description": "Bančna nakazila so najpogostejši način za nakup Bitcoina. So hitra, priročna in ponavadi imajo nižje provizije.",
	"buy_method_choose_bank": "Izberi bančno nakazilo", "buy_method_cash": "GOTOVINA", "buy_method_cash_private": "Bolj zasebno", "buy_method_cash_limited": "Omejene možnosti",
	"buy_method_cash_description": "Nakupi z gotovino ponujajo več zasebnosti, toda imajo manj možnosti in lahko zahtevajo osebno srečanje ali uporabo bitcoinovega bankomata.",
	"buy_method_choose_cash": "Izberi gotovino",
	"buy_step_3_header": "KORAK 3: MOŽNOSTI NAKUPA",
	"buy_step_3_description": "Tukaj so najboljše možnosti za nakup Bitcoina za vašo državo in način plačila:",
	"buy_platform_recommended": "PRIPOROČENO",
	"buy_platform_strike_description": "Strike je najhitrejši in najenostavnejši način za nakup Bitcoina z nizkimi provizijami in takojšnjo podporo Lightning Network.",
	"buy_platform_swan_description": "Swan Bitcoin se specializira za čisto bitcoinove storitve s pravilnim investiranjem in izobraževalnimi viri.",
	"buy_platform_river_description": "River ponuja nakup Bitcoina, rudarjenje in skrbniške storitve s poudarkom na izobraževanju in varnosti.",
	"buy_platform_coinsquare_description": "Coinsquare je kanadska bitcoinova borza z močno regulativno skladnostjo in podporo strankam.",
	"buy_platform_kraken_description": "Kraken je uveljavljena bitcoinova borza z naprednimi trgovalnimi funkcijami in močno varnostjo.",
	"buy_platform_atm_description": "Bitcoinovi bankomati vam omogočajo takojšen nakup Bitcoina za gotovino. Najbližjega poiščite s Coin ATM Radar.",
	"buy_platform_bisq_description": "Bisq je decentralizirana enakovrstniška borza, ki omogoča zasebno trgovanje z Bitcoinom brez KYC.",
	"buy_platform_feature_instant": "Takojšnji nakupi", "buy_platform_feature_low_fees": "Nizke provizije", "buy_platform_feature_lightning": "Lightning Network", "buy_platform_feature_dca": "Redno investiranje", "buy_platform_feature_education": "Izobraževalni viri", "buy_platform_feature_withdrawal": "Enostaven dvig", "buy_platform_feature_mining": "Rudarjenje Bitcoina", "buy_platform_feature_custody": "Skrbniške storitve", "buy_platform_feature_canadian": "Osredotočen na Kanado", "buy_platform_feature_regulated": "Regulirana borza", "buy_platform_feature_support": "Podpora strankam", "buy_platform_feature_established": "Uveljavljena platforma", "buy_platform_feature_security": "Močna varnost", "buy_platform_feature_advanced": "Napredne funkcije", "buy_platform_feature_cash": "Nakupi z gotovino", "buy_platform_feature_anonymous": "Bolj anonimno", "buy_platform_feature_p2p": "Enakovrstniško", "buy_platform_feature_private": "Zasebno trgovanje", "buy_platform_feature_decentralized": "Decentralizirano",
	"buy_platform_relai_description": "Relai je švicarska čisto bitcoinova aplikacija z denarnico z lastno hrambo, funkcijami samodejnega investiranja in nizkimi provizijami za evropske uporabnike.",
	"buy_platform_feature_bitcoin_only": "Samo Bitcoin", "buy_platform_feature_self_custody": "Denarnica z lastno hrambo", "buy_platform_feature_auto_invest": "Načrti samodejnega investiranja", "buy_platform_feature_european": "Osredotočen na Evropo",
	"buy_step_4_header": "KORAK 4: VARNO SHRANITE SVOJ BITCOIN",
	"buy_step_4_c1": "Po nakupu Bitcoina je najpomembnejši korak, da ga prestavite v lastno denarnico, kjer nadzirate zasebne ključe.",
	"buy_step_4_c2": "Puščanje Bitcoina na borzi je tvegano, ker Bitcoina dejansko ne posedujete — poseduje ga borza.",
	"buy_step_4_c3": "Ko nadzirate svoje lastne zasebne ključe, imate resnično lastništvo nad svojim Bitcoinom in vam ga nihče ne more vzeti.",
	"buy_step_4_c4": "Ugotovite, kako izbrati pravo bitcoinovo denarnico za vaše potrebe:",
	"buy_cta_wallets": "Ogled vodiča po bitcoinovih denarnicah"
});

writeFile(`lightning_${lang}.json`, {
	"bitcoin_lightning_wallet_guide": "Vodič po Bitcoin Lightning denarnicah",
	"lightning_description": "Lightning denarnice vam omogočajo pošiljanje Bitcoina hitro in poceni ob ohranjanju vaše osebne suverenosti.",
	"lightning_header": "VODIČ PO LIGHTNING DENARNICAH",
	"lightning_s1_c1": "Lightning vam omogoča pošiljanje bitcoinovih plačil hitro in poceni.",
	"lightning_s1_c2": "Pomembno je vedeti, da uporaba Lightninga prinaša kompromise. V zameno za hitrejša in cenejša bitcoinova plačila pogosto žrtvujete nekaj varnosti.",
	"lightning_s1_c3": "Na splošno bi se Lightning moral uporabljati le z majhnimi zneski bitcoina. Velike zneske bitcoina bi morali vedno shranjevati v strojni denarnici.",
	"lightning_s1_c4": "Oglejte si naš vodič po strojnih denarnicah za več informacij.",
	"lightning_s1_c5": "Vse Lightning denarnice niso enake. Katera denarnica ima pravo ravnovesje kompromisov za vas, ugotovite z odgovorom na eno preprosto vprašanje:",
	"lightning_question_1": "KAKŠNO RAVNOVESJE KOMPROMISOV JE PRAVO ZAME?",
	"lightning_s2_c1": "Ena od inovacij Bitcoina je sposobnost shranjevanja brez zanašanja na skrbnika, kot je banka. Denarnice z lastno hrambo odklenejo polno moč Bitcoina.",
	"lightning_s2_c2": "Z denarnico z lastno hrambo ste edini, ki ima sposobnost porabiti ali prenesti vaš denar. Nihče vas ne more ustaviti, cenzurirati ali okrasti, ko uporabljate denarnico z lastno hrambo. Tem se reče tudi ne-skrbniške denarnice.",
	"lightning_s2_c3": "Najbolj suveren način uporabe Lightninga je poganjanje lastnega vozlišča.",
	"lightning_s2_c4": "Ta vodič je osredotočen na preproste Lightning denarnice, ki ne zahtevajo lastnega vozlišča.",
	"lightning_s2_c5": "Pomembno je vedeti, da tudi pri uporabi ne-skrbniške Lightning denarnice še vedno zaupate ustvarjalcu denarnice, da ne bo uveljavil škodljive posodobitve aplikacije in ukradel vaših sredstev.",
	"lightning_s3_c1": "Skrbniške denarnice so denarnice, kjer nimate nadzora nad svojim denarjem.",
	"lightning_s3_c2": "Te denarnice so bolj podobne bančnemu sistemu, kjer morate zaupati tretji osebi, da vam da dostop do vašega denarja. Če je vaš Bitcoin na borzi, uporabljate skrbniško denarnico.",
	"lightning_s3_c3": "Skrbniške denarnice se morda zdijo priročne, toda skrbnik ima tehnično sposobnost kadarkoli ukrasti vsa sredstva uporabnikov.",
	"lightning_s3_c4": "Nekateri ljudje dajejo prednost skrbniškim Lightning denarnicam za majhne zneske bitcoina zaradi njihove enostavne uporabe. Le ne pozabite: ne vaši ključi, ne vaši kovanci!",
	"lightning_question_2": "IZBERITE SI DENARNICO",
	"lightning_s4_c1": "Z vsem tem v mislih si zdaj lahko izberete lightning denarnico s pravim ravnovesjem kompromisov za vas.",
	"phoenix": "PHOENIX", "breez": "BREEZ", "mutiny_wallet": "MUTINY WALLET", "wallet_of_satoshi": "WALLET OF SATOSHI",
	"lightning_features": "Veliko funkcij", "lightning_mobile_app": "Mobilna aplikacija", "lightning_free": "100 % brezplačno", "lightning_merchants": "Odlična za trgovce", "lightning_starter": "Odlična začetna denarnica", "lightning_browser": "V brskalniku", "lightning_custodial": "Polno skrbniška denarnica",
	"lightning_cta_hardware": "Iščete naš vodič po strojnih bitcoinovih denarnicah?"
});

writeFile(`stickers_${lang}.json`, {
	"free_bitcoin_stickers": "Brezplačne bitcoinove nalepke od bitcoin.rocks",
	"stickers_description": "Nalepite bitcoinovo nalepko na javno mesto in pomagajte prepričati ljudi okoli vas.",
	"stickers_header": "BREZPLAČNE BITCOINOVE NALEPKE",
	"stickers_choose_header": "IZBERITE SVOJ PAKET NALEPK",
	"stickers_choose_c1": "Naše poslanstvo je pomagati vam prepričati več ljudi tako, da lepite bitcoinove nalepke na javna mesta. Vse naše nalepke imajo QR kode, ki vodijo na izobraževalne strani o",
	"stickers_choose_c2": "Bitcoinu", "stickers_choose_c3": "inflaciji",
	"stickers_choose_c4": "Izberite paket nalepk spodaj",
	"stickers_text_pack": "BESEDILNI PAKET", "stickers_signs_pack": "PAKET ZNAKOV",
	"stickers_instructions_1": "Vnesite svoj poštni naslov in poslali vam bomo brezplačen paket bitcoinovih nalepk! Vaše nalepke bodo poslane v navadni beli ovojnici.",
	"stickers_instructions_2": "Podatki o naslovu se izbrišejo po pošiljanju brezplačnih nalepk.",
	"stickers_share_header": "DELITE SVOJE LOKACIJE Z NALEPKAMI",
	"stickers_share_c1": "Delite svoje lokacije z nalepkami z nami na Nostru in poglejte, kam drugi ljudje lepijo svoje nalepke.",
	"stickers_btn_share_on_nostr": "DELI NA NOSTRU", "stickers_btn_what_is_nostr": "KAJ JE NOSTR?",
	"stickers_flyers_link_before": "Medtem si natisnite in nalepite lastne ", "stickers_flyers_link_text": "bitcoinove letake", "stickers_flyers_link_after": " in pomagajte prepričati še več ljudi.",
	"stickers_country_global_print": "Po vsem svetu — Natisnil bom lastne nalepke", "stickers_country_global_order": "Po vsem svetu — Naroči v velikih količinah",
	"placeholder_name_optional": "Ime (neobvezno)", "placeholder_address_line_1": "Naslov vrstica 1", "placeholder_address_line_2": "Naslov vrstica 2 (neobvezno)", "placeholder_city": "Mesto", "placeholder_state": "Država", "placeholder_province": "Pokrajina", "placeholder_zip_code": "Poštna številka", "placeholder_postal_code": "Poštna številka", "placeholder_language": "Jezik", "placeholder_which_stickers": "Katere nalepke?", "placeholder_email_optional": "Vnesite e-pošto za obvestilo (neobvezno)"
});

writeFile(`postcards_${lang}.json`, {
	"free_bitcoin_postcards": "Brezplačne bitcoinove razglednice od bitcoin.rocks",
	"postcards_description": "Pridobite brezplačen paket bitcoinovih razglednic in delite Bitcoin z nekom, ki ga poznate.",
	"postcards_header": "PROGRAM RAZGLEDNIC ZAKLJUČEN",
	"postcards_program_closed_message": "Naš brezplačni program bitcoinovih razglednic se je zaključil. Hvala vsem, ki ste pomagali širiti izobraževanje o Bitcoinu prek pošte!",
	"postcards_sticker_alternative_header": "PRIDOBITE NAMESTO TEGA BREZPLAČNE BITCOINOVE NALEPKE",
	"postcards_sticker_alternative_message": "Nadaljujte s širjenjem zavesti o Bitcoinu z našim brezplačnim programom nalepk! Naše bitcoinove nalepke so idealne za deljenje na javnih mestih in vsebujejo QR kode, ki vodijo na izobraževalno vsebino.",
	"postcards_sticker_cta": "PRIDOBI BREZPLAČNE NALEPKE",
	"postcards_step_2": "KAKO SO RAZGLEDNICE IZGLEDALE",
	"postcards_instructions_4": "Te razglednice smo ustvarili, da bi olajšali predstavitev Bitcoina nekomu, ki ga poznate! Preprosto dodajte naslov in znamko ter vrzite razglednico v nabiralnik.",
	"postcards_instructions_5": "Naše poslanstvo je pospešiti sprejetje Bitcoina. Pomagate lahko s pridobitvijo brezplačnih nalepk in njihovim lepljenjem na javna mesta!",
	"postcards_instructions_6": "Vsi poznamo par ljudi, ki bi jim koristilo, da bi izvedeli več o Bitcoinu. Delite z njimi bitcoinove nalepke še danes!"
});

writeFile(`signs_${lang}.json`, {
	"signs_description": "Pomagajte nam postaviti te bitcoinove table po vsej Ameriki!",
	"signs_title": "Brezplačne bitcoinove table od bitcoin.rocks",
	"signs_choose_header": "HVALA, DA NAM POMAGATE POSTAVLJATI TE BITCOINOVE TABLE PO VSEJ AMERIKI!",
	"signs_choose_c1": "Vse table so zdaj razdeljene! Naše poslanstvo je pospešiti sprejetje Bitcoina z izobraževanjem.",
	"signs_choose_c2": "Mnogi izmed vas ste pomagali s postavljanjem teh brezplačnih bitcoinovih tabel na javna mesta. Vse naše table imajo QR kode, ki vodijo na izobraževalno stran o",
	"signs_choose_c3": "inflaciji",
	"signs_choose_c4": "Zahvaljujoč naši neverjetni skupnosti smo dosegli tisoče ljudi in jim pomagali narediti prve korake v bitcoinovo zajčjo luknjo.",
	"signs_share_header": "DELITE SVOJE LOKACIJE S TABLAMI",
	"signs_share_c1": "Delite svoje lokacije s tablami z nami na Nostru in poglejte, kam drugi ljudje postavljajo svoje table.",
	"signs_btn_share_on_nostr": "DELI NA NOSTRU", "signs_btn_what_is_nostr": "KAJ JE NOSTR?",
	"signs_instructions_1": "Vnesite svoj poštni naslov in poslali vam bomo škatlo 10 bitcoinovih tabel!",
	"signs_instructions_2": "Podatki o naslovu se izbrišejo po pošiljanju brezplačnih tabel."
});

writeFile(`flyers_${lang}.json`, {
	"free_bitcoin_flyers": "Brezplačni bitcoinovi letaki od bitcoin.rocks",
	"flyers_description": "Doma si natisnite bitcoinov letak in ga nalepite na javno mesto, da prepričate ljudi okoli vas.",
	"flyers_header_1": "TISKAJTE IN LEPITE",
	"flyers_header_2": "BITCOINOVE LETAKE",
	"flyers_intro_header": "KAKO TISKATI IN LEPITI TE BITCOINOVE LETAKE",
	"flyers_intro_c1": "Naše poslanstvo je pomagati vam prepričati več ljudi tako, da lepite bitcoinove letake na javna mesta. Ta letak ima QR kodo, ki vodi na našo",
	"flyers_intro_c2": "izobraževalno bitcoinovo stran.",
	"flyers_intro_c3": "inflaciji",
	"flyers_intro_c4": "Natisnite ta letak doma ali v tiskarni. Nato ga nalepite na oglasne deske, telefonske drogove v mestu in druga javna mesta, kjer ga bodo ljudje videli in izvedeli o Bitcoinu.",
	"flyers_intro_c5": "Medtem zaprosite za paket naših",
	"flyers_intro_c6": "brezplačnih bitcoinovih nalepk",
	"flyers_intro_c7": "in pomagajte prepričati še več ljudi.",
	"flyers_btn_download": "PRENESI LETAK", "flyers_btn_print": "NATISNI LETAK",
	"flyers_share_header": "DELITE SVOJE LOKACIJE Z LETAKI",
	"flyers_share_c1": "Delite svoje lokacije z letaki z nami na Nostru in poglejte, kam drugi ljudje lepijo svoje letake.",
	"flyers_btn_share_on_nostr": "DELI NA NOSTRU", "flyers_btn_what_is_nostr": "KAJ JE NOSTR?"
});

writeFile(`get-involved_${lang}.json`, {
	"get_involved_and_help_spread_bitcoin": "Vključite se in pomagajte širiti Bitcoin",
	"get_involved_description": "Naši brezplačni viri olajšajo širjenje sprejetja Bitcoina.",
	"get_involved_header": "VKLJUČITE SE",
	"get_involved_header_2": "ŠIRITE BITCOIN",
	"get_involved_intro_1": "Depresivno je lahko živeti v trenutnem stanju našega sveta.",
	"get_involved_intro_2": "Naš denar je pokvarjen. Posledično so pokvarjeni tudi temeljni deli družbe.",
	"get_involved_intro_3": "Če se že zanimite za Bitcoin, poznate tisti občutek upanja, ki ga Bitcoin lahko prinese. Upanje na boljšo prihodnost, ki jo omogoča boljši denar.",
	"get_involved_intro_4": "Toda toliko ljudi okoli vas ne ve za Bitcoin. Živijo v istem pokvarjenem svetu kot vi, toda brez svetilnika upanja, ki bi jim pomagal skozi temo.",
	"get_involved_intro_5": "Toda vi to lahko spremenite. Ustvarili smo več brezplačnih virov, ki olajšajo širjenje upanja, ki ga Bitcoin prinaša ljudem okoli vas.",
	"get_involved_sticker_header": "Nalepite nalepko na javno mesto",
	"get_involved_sticker_content_1": "Pomagate lahko izobraževati ljudi okoli sebe o Bitcoinu, brez da bi morali s komer koli komunicirati. Preprosto nalepite eno od naših brezplačnih bitcoinovih nalepk na javno mesto.",
	"get_involved_sticker_content_2": "Stotine ljudi vsak mesec skenira QR kode na teh nalepkah. Nalepke o inflaciji vodijo na stran o",
	"get_involved_sticker_content_3": "Bitcoinu kot rešitvi za inflacijo.",
	"get_involved_sticker_content_4": "Druge nalepke vodijo na našo izobraževalno domačo stran, ki ljudem kaže, kako",
	"get_involved_sticker_content_5": "Bitcoin gradi boljši svet.",
	"get_involved_sticker_content_6": "Z lepljenjem teh nalepk v vaši skupnosti na mesta, kjer jih bodo ljudje videli, lahko pomagate ljudem okoli vas narediti prve korake v bitcoinovo zajčjo luknjo.",
	"get_involved_request_a": "ZAPROSITE ZA",
	"get_involved_sticker_pack": "PAKET NALEPK",
	"get_involved_postcard_header": "Pošljite razglednico",
	"get_involved_postcard_content_1": "Pomagate lahko širiti upanje Bitcoina nekomu, ki ga poznate, s pošiljanjem ene od naših brezplačnih razglednic.",
	"get_involved_postcard_content_2": "Zadnja stran vsake razglednice vsebuje prepričljivo besedilo o Bitcoinu skupaj s QR kodo za več informacij.",
	"get_involved_postcard_content_3": "S pošiljanjem bitcoinove razglednice lahko pomagate nekomu videti Bitcoin v novi luči.",
	"get_involved_postcard_pack": "PAKET RAZGLEDNIC",
	"get_involved_business_header": "Vključite podjetje",
	"get_involved_business_content_1": "Želite pomagati graditi bitcoinovo krožno gospodarstvo? Naš bitcoinov poslovni komplet olajša pristop k podjetju glede sprejemanja bitcoinovih plačil.",
	"get_involved_business_content_2": "Vsak poslovni komplet vsebuje letake, ki poudarjajo prednosti sprejemanja bitcoinovih plačil. Vsak letak vodi na različne",
	"get_involved_business_content_3": "brezplačne bitcoinove poslovne vire.",
	"get_involved_business_kit": "POSLOVNI KOMPLET"
});

console.log(`\nDone! Created 9 content files.`);
