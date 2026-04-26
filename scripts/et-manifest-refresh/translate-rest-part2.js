#!/usr/bin/env node
/**
 * Estonian manifest refresh — part 2 of non-inflation namespaces.
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
	"et.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli raamatupidamisteenused",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 $",
	"business/accounting::accounting_example_loss_result": "−10 $",
	"business/accounting::accounting_description":
		"Lihtne juhend bitcoini maksete raamatupidamiseks — hübriidrahakotid, soetusmaksumus, kapitali kasvutulu ja millal helistada oma raamatupidajale.",
	"business/accounting::accounting_s1_c1":
		"Lihtsaim viis bitcoini vastuvõtmiseks on kasutada hübriidrahakotti, mis müüb automaatselt 100 % saadud bitcoinist dollariteks (või sinu kohaliku valuuta vastu) niipea, kui makse saabub.",
	"business/accounting::accounting_s1_c2":
		"Selle seadistusega näeb sinu raamatupidamine välja täpselt nagu tänagi — lõppsumma on iga kord dollarites. Pole soetusmaksumust, pole kapitali kasvutulu, pole uusi tabelarvutusi.",
	"business/accounting::accounting_s2":
		"Kui hoiad mingi osa bitcoinist: jälgi oma soetusmaksumust",
	"business/accounting::accounting_s2_c1":
		"Mõned ettevõtted otsustavad osa saadud bitcoinist alles hoida, selle asemel et automaatselt kõik ära konverteerida. Kui see oled sina, on lisasamm soetusmaksumuse jälgimine — iga bitcoini makse dollariväärtus päeval, mil sa selle said.",
	"business/accounting::accounting_s2_c2":
		"Isegi kui mõtled oma ettevõttest ainult bitcoinides, soovib enamik maksuametite siiski, et raporteeriksid dollariväärtust. Hea uudis: see on ainult kaks numbrit tehingu kohta — kui palju bitcoini said ja selle dollariväärtus sel päeval.",
	"business/accounting::accounting_s2_c3":
		"Kasuta alltoodud tööriistu otsingute automatiseerimiseks, et sa ei peaks iga päev hindu kontrollima.",
	"business/accounting::accounting_s3":
		"Säilitatud bitcoini kulutamine või müümine",
	"business/accounting::accounting_s3_c1":
		"Kui konverteerid iga makse automaatselt dollariteks, siis jäta see osa vahele — see ei käi sinu kohta.",
	"business/accounting::accounting_s3_c2":
		"Kui oled mingi osa bitcoinist säilitanud ja otsustad seda hiljem kulutada või müüa, lisa müügihind samasse tabelisse kui soetusmaksumus. Erinevus selle vahel, mida bitcoin maksis siis, kui sa selle said, ja selle vahel, mida see maksab, kui sa selle kulutad või müüd, on kapitali kasvutulu või -kahjum.",
	"business/accounting::accounting_s3_c3": "Kaks kiiret näidet:",
	"business/accounting::accounting_s4":
		"Vajad professionaali, kes mõistab bitcoini?",
	"business/accounting::accounting_s4_c1":
		"Kui eelistad, et keegi teine sellega tegeleks — või kui sinu bitcoini raamatupidamine on keerulisem, kui hübriidrahakott suudab hallata — soovitame soojalt Satoshi Pacioli Accounting Services, firmat, mis on spetsialiseerunud ettevõtete bitcoini raamatupidamisele.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoini raamatupidamine sinu ettevõttele",
	"business/accounting::accounting_card_bpr_label": "BITCOINI HIND",
	"business/accounting::accounting_card_bpr_title":
		"Otsi bitcoini praeguseid või ajaloolisi hindu dollarites",
	"business/accounting::accounting_card_pacioli_label":
		"BITCOINI RAAMATUPIDAJA",
	"business/accounting::accounting_card_spreadsheet_label":
		"IMPORDI EXCELISSE",
	"business/accounting::accounting_card_spreadsheet_title":
		"Impordi bitcoini hinnad automaatselt Excelisse",
	"business/accounting::accounting_card_wallets_label":
		"HÜBRIIDRAHAKOTID",
	"business/accounting::accounting_card_wallets_title":
		"Vaata meie ettevõtetele soovitatud rahakotte",
	"business/accounting::accounting_disclaimer":
		"See juhend on ainult informatiivsel eesmärgil ja see ei ole maksunõustamine. Sinu olukorrale spetsiifilise maksunõuande saamiseks pöördu pädeva raamatupidaja poole.",
	"business/accounting::accounting_disclaimer_label": "Vastutusest loobumine",
	"business/accounting::accounting_example_feb_1": "1. veebruar",
	"business/accounting::accounting_example_gain_badge":
		"Kapitali kasvutulu",
	"business/accounting::accounting_example_gain_explain":
		"Sa kirjendad 10 $ kapitali kasvutulu.",
	"business/accounting::accounting_example_jan_1": "1. jaanuar",
	"business/accounting::accounting_example_loss_badge":
		"Kapitali kahjum",
	"business/accounting::accounting_example_loss_explain":
		"Sa kirjendad 10 $ kapitali kahjumit.",
	"business/accounting::accounting_example_received_label": "Saadud",
	"business/accounting::accounting_example_sold_label":
		"Müüdud või kulutatud",
	"business/accounting::accounting_hero_subtitle":
		"Bitcoini vastuvõtmine oma ettevõttes ei pea sinu raamatupidamist keeruliseks tegema. Siin on lühike versioon — pluss tööriistad ja eksperdid, kes selle valutuks teevad.",
	"business/accounting::accounting_intro_c1":
		"Kui sa juba võtad vastu sularaha või kaarte, on bitcoini lisamine oma ettevõtte raamatupidamisse lihtsam kui arvad. Sul on kaks teed: konverteerida iga bitcoini makse automaatselt dollariteks niipea kui see saabub (uut raamatupidamist pole vaja) või hoida midagi bitcoinides (peate jälgima mõnda lisaarvu).",
	"business/accounting::accounting_intro_c2":
		"See juhend käib läbi mõlemad teed — nii et sa saad valida selle, mis sobib sinu ettevõttele, ja alustada bitcoini vastuvõtmist kindlustundega.",
	"business/accounting::accounting_s1":
		"Lihtne tee: automaatne konverteerimine dollariteks",
	"business/accounting::accounting_s3_c6":
		"Ja kõik ongi. Põhimatemaatika on sama, mida kasutaksid iga muu vara puhul, mille väärtus tõuseb või langeb.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — bitcoini praegune ja ajalooline hind dollarites",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — bitcoini raamatupidamine ettevõtetele",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — krüptohindade importimine Excelisse",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Lühivastused küsimustele, mida kaupmehed tavaliselt enne bitcoini vastuvõtmise alustamist esitavad — tasud, arveldus, rahakotid, tagasinõuded, kulud ja palju muud.",
	"business/faq::faq_intro_c1":
		"Klõpsa allpool mistahes küsimusel, et vastus avaneb. Kui oled valmis bitcoini vastuvõtmist alustama, juhatavad lehe lõpus olevad ärivahendid sind sammhaaval edasi.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "RAAMATUPIDAMINE",
	"business/index::biz_label_faq": "KORDUMA KIPPUVAD KÜSIMUSED",
	"business/index::biz_label_maps": "KAUPMEESTE KAARDID",
	"business/index::biz_label_rewards": "PREEMIAD",
	"business/index::biz_label_stickers": "KLEEBISED",
	"business/index::biz_label_wallets": "RAHAKOTID",
	"business/index::biz_meta_description":
		"Võta oma ettevõttes vastu bitcoini madalamate tasudega, kohese arveldusega, ilma tagasinõueteta ja saa rohkem kliente.",
	"business/index::business_hero_subtitle":
		"Võta makseid vastu madalamate tasudega, arvelda hetkega ja jõua miljonite uute klientideni — ilma lepingute ja varjatud kuludeta.",
	"business/index::business_intro_c1":
		"Bitcoin annab sinu ettevõttele kiirema, odavama ja privaatsema viisi maksete vastuvõtmiseks. Pole vahemehi. Pole tagasinõudeid. Pole lepinguid. Ainult raha, mis arveldub sekunditega, otse kliendilt sinule.",
	"business/index::business_intro_c2":
		"Allpool on lühike versioon sellest, miks on bitcoin ettevõttele kasulik — ja all on kõik vahendid, mida vajad, et juba täna selle vastuvõtmist alustada.",
	"business/index::business_resources_heading":
		"Kõik, mida vajad bitcoini vastuvõtmiseks",
	"business/index::business_resources_intro":
		"Käi need vahendid oma tempos läbi. Igaüks on lühike praktiline juhend.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Räägi meile oma ettevõttest",
	"business/maps::biz_maps_form_intro":
		"Vajame ainult mõned üksikasjad, et saaksime sind kaardile panna. Hoiame aadressi andmeid ainult nii kaua, kui on vaja sinu ettevõtte kaartidele saatmiseks.",
	"business/maps::biz_maps_hero_subtitle":
		"Lisa oma ettevõte tasuta BTC Mapile — avatud globaalne bitcoini vastu võtvate kaupmeeste kataloog — et lähedal olevad bitcoini kasutajad saaksid sind leida ja sinu juures bitcoini kulutada.",
	"business/maps::biz_maps_hero_title":
		"Pane oma ettevõte bitcoini kaupmeeste kaartidele",
	"business/maps::biz_maps_intro_c1":
		"Bitcoini kasutajad otsivad aktiivselt kohti, kus oma raha kulutada. Kaardil olemine paneb sinu ettevõtte iga bitcoini kasutaja silma, kes otsib lähedal kohta söömiseks, ostmiseks või peatumiseks — täiesti tasuta.",
	"business/maps::biz_maps_intro_c2":
		"Täida lihtsalt allolev lühike vorm ja me esitame sinu ettevõtte BTC Mapile ja teistele bitcoini kaupmeeste kaartidele.",
	"business/maps::biz_maps_meta_description":
		"Lisa oma ettevõte tasuta BTC Mapile ja teistele bitcoini kaupmeeste kaartidele, et lähedal olevad bitcoini kasutajad sind leiaksid.",
	"business/maps::biz_maps_placeholder_address": "Tänav ja maja number",
	"business/maps::biz_maps_placeholder_category":
		"Kategooria (nt restoran, kohvik, hotell)",
	"business/maps::biz_maps_placeholder_city": "Linn",
	"business/maps::biz_maps_placeholder_country": "Riik",
	"business/maps::biz_maps_placeholder_name": "Ettevõtte nimi",
	"business/maps::biz_maps_placeholder_region":
		"Piirkond / maakond / osariik",
	"business/maps::biz_maps_placeholder_website": "Veebisait (valikuline)",
	"business/maps::biz_maps_view_map_cta": "Vaata BTC Mapi",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Vaata BTC Mapi",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Aitäh, et saatsid oma ettevõtte. Paneme su peagi bitcoini kaupmeeste kaartidele.",
	"business/maps-success::biz_maps_success_hero_title":
		"Taotlus kätte saadud 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Sinu ettevõte lisatakse BTC Mapile ja teistele bitcoini kaupmeeste kataloogidele 1–2 nädala jooksul. Vaatame iga esildise käsitsi üle, et kaartide täpsust säilitada.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Kui sinu kanne on võrgus, leiavad lähedal olevad bitcoini kasutajad sinu ettevõtte ja tulevad bitcoini kulutama.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Mis juhtub edasi",
	"business/maps-success::biz_maps_success_view_c1":
		"Samal ajal, kui ootad, vaata BTC Mapi, et näha kasvavat ettevõtete võrku üle kogu maailma, kes võtavad vastu bitcoini.",
	"business/maps-success::biz_maps_success_view_header":
		"Vaata, kus sa avaldud",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Lae alla ingliskeelsed kleebisefailid, et printida oma „Siin aktsepteerime bitcoini” kleebised.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Prindi oma „Siin aktsepteerime bitcoini” kleebised inglise keeles, et klientidele teada anda, et võtad bitcoini vastu.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Lae alla ingliskeelsed „Siin aktsepteerime bitcoini” kleebisefailid",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Aitäh, et taotlesid „Siin aktsepteerime bitcoini” kleebisefaile oma keeles.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Taotlus kätte saadud 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Loome ja avaldame sinu kleebisefailid 3–4 nädala jooksul. Kui need valmis saavad, saad need meie kleebisefailide lehelt tasuta alla laadida ja välja printida.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Avaldame kleebisefaile hulgakaupa, seega võib enne sinu keele aktiveerumist mööduda mitu nädalat. Aitäh sinu kannatuse eest!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Mis juhtub edasi",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Telli hulgikaupa",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Taotle veel üks tasuta pakk",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Saad oma tasuta „Siin aktsepteerime bitcoini” kleebised 2–4 nädala jooksul lihtsas valges ümbrikus 3 kleebisega.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Sinu kleebised on teel 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Kui 3 kleebist sinu ettevõttele ei piisa, võid julgelt taotleda veel ühte tasuta pakki — või telli hulgikaupa samast trükikojast, mida meie kasutame.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Vajad rohkem kleebiseid?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Oma peaukse või vaateakna juurde, et kliendid seda enne sisenemist näeksid",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Kassa lähedal, makseterminali juurde või sinna, kus kliendid maksavad",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Menüüdele, hinnakirjadele või jootrahapurki",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Ära pane neid kohtadesse, mis sulle ei kuulu või kus sul pole kleebiste panemiseks luba",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Head kohad kleebiste panemiseks",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Anna klientidele teada, et võtad bitcoini vastu. Telli tasuta pakk „Siin aktsepteerime bitcoini” kleebiseid, et neid oma tegevuskohas kleepida.",
	"business/stickers::biz_stickers_hero_title":
		"Tasuta „Siin aktsepteerime bitcoini” kleebised",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoini vastuvõtmine on vaid pool tööst — sinu kliendid peavad sellest ka teadma. Need väikesed „Siin aktsepteerime bitcoini” kleebised on loodud kleepimiseks peaukse, kassa, menüü või mistahes muusse kohta, kus kliendid neid enne maksmist näevad.",
	"business/stickers::biz_stickers_intro_c2":
		"Saadame tasuta paki igale aadressile USA-s või Kanadas, või võid ka ise oma kleebised trükkida kõikjal maailmas.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — tasuta postiga",
	"business/stickers::biz_stickers_option_print":
		"🌍 Kogu maailm — trüki ise",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 USA — tasuta postiga",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Fraasi „Bitcoin Accepted Here” tõlge",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Fraasi „Scan to learn why Bitcoin is good for business.” tõlge",
	"business/stickers::biz_stickers_print_c1":
		"Sa saad oma „Siin aktsepteerime bitcoini” kleebised trükkida, kus iganes elad. Klõpsa all oma keelel, et laadida alla kleebisefailid ja trükijuhised.",
	"business/stickers::biz_stickers_print_header":
		"Trüki ise oma kleebisefailid",
	"business/stickers::biz_stickers_request_c1":
		"Täida allolev vorm, et taotleda „Siin aktsepteerime bitcoini” kleebisefaile oma kohalikus keeles. Anname teada, kui need on valmis.",
	"business/stickers::biz_stickers_request_header":
		"Ei näe oma keelt?",
	"business/stickers::biz_stickers_step_description":
		"Saadame tasuta pakke aadressidele USA-s ja Kanadas. Mujal maailmas saad oma kleebised ise trükkida.",
	"business/stickers::biz_stickers_step_header":
		"Kuidas sa oma kleebised tahad?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Kõik bitcoini rahakotid töötavad koos — vali see, mis sinu ettevõttele sobib. Tasuta, koheste arvelduste, tagasinõueteta.",
	"business/wallets::sources_breez_business":
		"Breez — ainult bitcoini Lightning rahakott",
	"business/wallets::sources_ibex":
		"IBEX — Lightningu makseinfrastruktuur",
	"business/wallets::sources_opennode":
		"OpenNode — bitcoini makseprotsessor",
	"business/wallets::sources_square":
		"Square — võta vastu bitcoini makseid",
	"business/wallets::sources_zaprite":
		"Zaprite — bitcoini arveldus ettevõtetele",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoini rahakotid on tasuta. Vali see, mis sinu ettevõttele sobib — kohapeal, veebis või arvete järgi — ja alusta bitcoini vastuvõtmist minutitega.",
	"business/wallets::wallets_section_invoice":
		"Rahakotid klientidele arveid esitavatele ettevõtetele",
	"business/wallets::wallets_section_invoice_intro":
		"Kui esitad klientidele arveid (konsultatsioon, vabakutseline töö, B2B-teenused), kasuta arveldamise ümber ehitatud rahakotti. Klient tasub bitcoini arve mõne klõpsuga.",
	"business/wallets::wallets_section_multiple":
		"Rahakotid mitme töötajaga ettevõtetele",
	"business/wallets::wallets_section_multiple_intro":
		"Kui sul on meeskond, kes kassas makseid vastu võtab, vali rahakott, mis toetab mitme töötaja sisselogimist — nii et igal töötajal on oma PIN ja säilitad selged arvestused, kes iga makse kätte sai.",
	"business/wallets::wallets_section_online":
		"Rahakotid veebiettevõtetele",
	"business/wallets::wallets_section_online_intro":
		"Müüd veebis? Need rahakotid ühenduvad sinu veebipoega ja võtavad bitcoini vastu kõigilt klientidelt kõikjal maailmas — tagasinõueteta ja ilma et oleks vaja kaupmehe kontot.",
	"business/wallets::wallets_section_sole":
		"Rahakotid üksikettevõtjatele",
	"business/wallets::wallets_section_sole_intro":
		"Kui juhid poodi, kohvikut, stuudiot või teenust üksinda, sobib sulle ükskõik milline neist rahakottidest. Vali selle järgi, kas tahad bitcoini makseid endale jätta või konverteerida osa igast maksest automaatselt oma kohalikuks valuutaks.",
	"business/wallets::wallets_strike_note":
		"Strike Business lubab sul võtta vastu bitcoini ja Lightningu makseid nulltasudega ja koheste arveldustega. Toetab kohapealseid, veebi- ja arveldusmakseid, valikulise automaatse konverteerimisega kohalikuks valuutaks.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Siin aktsepteerime bitcoini",
	"business/why::why_good_for_you":
		"Miks on bitcoin kasulik ka sinule",
	"business/why::why_learn_more_lowercase": "Loe edasi →",
	"business/why::why_s1_c1":
		"Inflatsioon tekib siis, kui raha juurde trükitakse või tühjast kohast luuakse. See paneb sinu taskus oleva raha aja jooksul väärtust kaotama — ja seepärast tõusevad hinnad aastast aastasse.",
	"business/why::why_s1_c2":
		"Bitcoinil on fikseeritud pakkumine 21 miljonit münti. Ükski valitsus, pank ega ettevõte ei saa juurde trükkida. Sinu säästud bitcoinis säilitavad oma väärtuse aja jooksul, selle asemel et vaikselt kaotada.",
	"business/why::why_s2_c1":
		"Viimastel aastatel on palju USA panku pangajooksude tõttu kokku varisenud. Kui liiga paljud kliendid üritasid korraga raha välja võtta, ei olnud pankadel piisavalt sularaha, et kõigile maksta.",
	"business/why::why_s2_c2":
		"Selle asemel, et lihtsalt sinu raha hoida, laenavad pangad ja investeerivad suurema osa sellest välja. Kui need investeeringud ebaõnnestuvad — või hoiustajad kaotavad usalduse — võib pank kokku variseda ja sinu hoiused võivad külmuda või kaduma minna.",
	"business/why::why_s2_c3":
		"Bitcoiniga saad hoida oma raha otse enda rahakotis. Panka pole. Vahemehi pole. Pangajooksu pole.",
	"business/why::why_s3_c1":
		"Erinevalt krediitkaartidest, PayPalist või traditsioonilistest pangakontodest ei vaja bitcoin mitte kellegi luba.",
	"business/why::why_s3_c2":
		"Keegi ei saa sinu kontot külmutada, makset blokeerida ega sind võrgust eemaldada. See on esimene finantssüsteem ajaloos, mida saad vabalt kasutada, ilma tsensuuri või konfiskeerimise hirmuta.",
	"business/why::why_s4_c1":
		"Bitcoinist saadakse sageli valesti aru, aga see teeb maailmas vaikselt palju head.",
	"business/why::why_s4_c2":
		"See on aidanud inimõiguste aktiviste nende vabadusvõitluses, vähendanud globaalseid metaanilekkeid prügilatest ja naftapuuraukudest, stabiliseerinud elektrivõrke ja rahastanud avalikke hüvesid nagu rahvusparke.",
	"business/why::why_biz_s1":
		"Madalamad tasud, rohkem ettevõttele",
	"business/why::why_biz_s1_c1":
		"Bitcoini maksed väldivad panku ja kaardifirmasid, kes võtavad endale 2–3 % igast müügist. Ettevõte hoiab rohkem alles sellest, mida sa maksad — mis sageli tähendab sulle paremaid hindu ja paremat teenindust.",
	"business/why::why_biz_s2":
		"Kohene arveldus, tagasinõueteta",
	"business/why::why_biz_s2_c1":
		"Bitcoini maksed arveldatakse sekunditega, otse sinu rahakotist ettevõttesse. Pole vaja oodata päevi, kuni pank raha vabastab, ja pole kulukaid tagasinõude vaidlusi — mis tähendab, et ettevõte saab keskenduda klientide teenindamisele, selle asemel et petturitega võidelda.",
	"business/why::why_biz_s3":
		"Tasuta vastuvõtmine, avatud kõigile",
	"business/why::why_biz_s3_c1":
		"Bitcoini vastuvõtmiseks pole ettevõttel lepinguid, kuutasusid ega käivituskulusid. Ja miljonid bitcoini kasutajad üle kogu maailma otsivad aktiivselt seda vastu võtvaid kaupmehi — andes sellele ettevõttele tasuta nähtavuse uutele klientidele.",
	"business/why::why_business_cta_intro":
		"Kas sul on ettevõte ja tahad bitcoini vastuvõtmist alustada?",
	"business/why::why_business_cta_link":
		"Vaata, kuidas see toimib →",
	"business/why::why_for_business":
		"Miks on bitcoin sellele ettevõttele kasulik",
	"business/why::why_for_business_intro":
		"Võttes vastu bitcoini, hoiab see ettevõte rohkem alles igast müügist, saab makseid hetkega tagasinõueteta ja jõuab bitcoini kasutajate globaalse publikuni — ilma lepinguteta või kuutasudeta.",
	"business/why::why_good_for_you_intro":
		"Bitcoin pole kasulik ainult kassas — see on parem rahavorm, mis kaitseb sinu sääste, privaatsust ja vabadust teha tehinguid. Siin on kiire kokkuvõte.",
	"business/why::why_hero_subtitle":
		"Sa skannisid just „Siin aktsepteerime bitcoini” kleebist. Siin on, miks see on hea uudis — nii sellele ettevõttele kui ka sulle.",
	"business/why::why_intro_c1":
		"Ettevõte, kus sa viibid, võtab vastu bitcoini — kaasaegne, avatud lähtekoodiga maksevõrk, mida igaüks kõikjal maailmas saab kasutada, ilma et pangad ja vahemehed endale osa võtaksid.",
	"business/why::why_intro_c2":
		"Allpool on lühike versioon sellest, miks on sellele ettevõttele bitcoini vastuvõtmine kasulik, pluss miks on sulle kliendina bitcoini kasutamine kasulik.",
	"business/why::why_next_business_label": "AKTSEPTEERI BITCOINI",
	"business/why::why_next_business_title":
		"Aktsepteeri bitcoini oma ettevõttes",
	"business/why::why_next_buy_label": "OSTA BITCOINI",
	"business/why::why_next_buy_title": "Osta oma esimene bitcoin",
	"business/why::why_next_learn_label": "ÕPI ROHKEM",
	"business/why::why_next_learn_title": "Õpi bitcoini kohta rohkem",
	"business/why::why_next_wallet_label": "HANKI RAHAKOTT",
	"business/why::why_next_wallet_title":
		"Hangi oma bitcoini rahakott",
	"business/why::why_whats_next_heading": "Kuhu nüüd edasi?",
	"business/why::why_whats_next_intro":
		"Kui see on sinu esimene kord, kui skaneerid bitcoini kleebist, on siin kõige kasulikumad kohad, kuhu edasi minna.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Võrdõigusvõrk (otse kasutajate vahel)",
	"buy::buy_bitcoin_guide": "Kuidas osta bitcoini",
	"buy::buy_step_1_header": "Vali oma riik",
	"buy::buy_step_2_header": "Vali oma maksemeetod",
	"buy::buy_step_3_header": "Sinu ostuvõimalused",
	"buy::buy_step_4_header": "Hoia oma bitcoini turvaliselt",
	"buy::buy_header_subtitle":
		"Lihtne samm-sammuline juhend esimese bitcoini ostmiseks.",
	"buy::buy_howto_name": "Kuidas osta bitcoini",
	"buy::buy_meta_description":
		"Õpi meie samm-sammulise juhendi abil bitcoini turvaliselt ostma. Vali oma riik ja maksemeetod, et leida sulle parimad bitcoini ostuvõimalused.",
	"buy::buy_step_1_eyebrow": "Samm 1",
	"buy::buy_step_2_eyebrow": "Samm 2",
	"buy::buy_step_3_eyebrow": "Samm 3",
	"buy::buy_step_4_eyebrow": "Samm 4",
	"buy::buy_storage_cta_label": "Järgmine samm",
	"buy::sources_bisq":
		"Bisq — detsentraliseeritud võrdõigusvõrgu bitcoini börs",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — globaalne bitcoini sularahaautomaatide kataloog",
	"buy::sources_kraken": "Kraken — tunnustatud bitcoini börs",
	"buy::sources_relai":
		"Relai — Šveitsi ise-hoidmise bitcoini rakendus",
	"buy::sources_river":
		"River — ainult bitcoini ost, kaevandamine ja hoidmine",
	"buy::sources_strike_lightning":
		"Strike — bitcoini ost koos Lightningu võrgu toega",
	"buy::sources_swan":
		"Swan Bitcoin — ainult bitcoini dollari-keskmistatud ost (DCA)",
	"buy::buy_bitcoin": "Osta bitcoini",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Lisa keel",
	"common::common_next_buy_bitcoin": "Osta bitcoini",
	"common::common_next_buy_bitcoin_desc":
		"Õpi, kuidas bitcoini turvaliselt osta",
	"common::common_next_calculate": "Arvuta oma inflatsioon",
	"common::common_next_calculate_desc":
		"Vaata, kuidas inflatsioon sinu palka aja jooksul mõjutab",
	"common::common_next_get_wallet": "Hangi rahakott",
	"common::common_next_get_wallet_desc":
		"Hangi oma esimene bitcoini rahakott — see on tasuta",
	"common::common_next_keep_learning": "Jätka õppimist",
	"common::common_next_keep_learning_desc":
		"Vaata, kuidas bitcoin teeb maailma paremaks",
	"common::common_source_bls_cpi":
		"USA Tööstatistika Amet — tarbijahinnaindeks (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — rahapakkumine (indeks kategooriate kaupa)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Kas riigikassa oksjon võib ebaõnnestuda?”",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Mis järgmiseks?",
	"common::common_sticker_files_mission_5": "taotle pakk",
	"common::common_site_tagline": "Bitcoini haridus kõigile.",
	"common::common_source_btc_map":
		"BTC Map — ülemaailmne bitcoini vastu võtvate kaupmeeste kataloog",
	"common::common_source_btcpayserver":
		"BTCPay Server — tasuta ja avatud lähtekoodiga isehallitav bitcoini makseprotsessor",
	"common::common_source_oshi":
		"Oshi — bitcoini preemiaplatvorm kaupmeestele",
	"common::common_source_strike_business":
		"Strike — bitcoini ja Lightningu maksed ettevõtetele",
	"common::common_sources_group_bitcoin": "Bitcoini andmed",
	"common::common_sources_group_cpi":
		"Inflatsioon / tarbijahinnaindeks",
	"common::common_sources_group_debt": "Riigivõlg",
	"common::common_sources_group_money": "Rahapakkumise andmed",
	"common::common_sources_group_stories": "Näited päriselust",
	"common::common_sticker_files_mission_6":
		"tasuta ingliskeelsed kleebised.",
	"common::common_sticker_files_next_flyers_label": "Flaierid",
	"common::common_sticker_files_next_flyers_title":
		"Prindi bitcoini flaier",
	"common::common_sticker_files_next_languages_label":
		"Kleebisefailid",
	"common::common_sticker_files_next_languages_title":
		"Vaata kleebisefaile teistes keeltes",
	"common::common_sticker_files_print_these":
		"PRINDI NEED ÜHE KLÕPSUGA",
	"common::common_sticker_name_bdhi_black":
		"Kleebis „Bitcoin Doesn\u2019t Have Inflation” (must)",
	"common::common_sticker_name_bdhi_orange":
		"Kleebis „Bitcoin Doesn\u2019t Have Inflation” (oranž)",
	"common::common_sticker_name_caution":
		"Bitcoini kleebis „Caution! Melting Ice Cube”",
	"common::common_sticker_name_cure_inflation":
		"Bitcoini kleebis „Cure Inflation”",
	"common::common_sticker_name_danger":
		"Bitcoini kleebis „Danger! Inflation Ahead”",
	"common::common_sticker_name_fix":
		"Bitcoini kleebis „Fix The Money, Fix The World”",
	"common::common_sticker_name_got_inflation":
		"Bitcoini kleebis „Got Inflation?”",
	"common::common_sticker_name_study":
		"Kleebis „Study Bitcoin”",
	"common::common_sticker_name_warning":
		"Bitcoini kleebis „Warning! Inflation is Stealing Your Savings”",
	"common::common_sticker_name_what_if":
		"Bitcoini kleebis „What if your money didn\u2019t have inflation?”",
	"common::common_sticker_tips_heading": "Kleebiste nõuanded",
	"common::common_sticker_tips_intro":
		"Kui oled oma kleebised välja trükkinud, pane need sinna, kus inimesed neid näevad! Head kohad on:",
	"common::common_sticker_tips_list_1":
		"avalikud kohad, kus inimesed neid märkavad",
	"common::common_sticker_tips_list_2":
		"kohad, kus neid ilmselt kohe ära ei võeta (kleebised ei tekita püsivaid kahjustusi)",
	"common::common_sticker_tips_list_3":
		"pinnad, kuhu need hästi kinnituvad (metall, plastik, klaas)",
	"common::common_sticker_tips_list_4":
		"MITTE eraomandile, liiklusmärkidele, sularahaautomaatidele ega kütusepumpadele",
	"common::common_stickers_printer_prefix": "Meie kasutame",
	"common::common_stickers_printer_suffix":
		"aga sa võid kasutada mistahes kleebiste trükikoda.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — tarbijahinnaindeks kõigile linnatarbijatele",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — rahapakkumine M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Arvuta oma inflatsioonilõhe",
	"compound-inflation-calculator::cic_cta_label": "Järgmine samm",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Uuri välja, kui palju peab sinu palk inflatsiooniga sammu pidamiseks tõusma.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Uuri rohkem teemasid",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Vaata, kuidas bitcoin on seotud raha, vabaduse, energia ja muuga.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Õpi, kuidas inflatsioon toimib",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Kuidas neid bitcoini flaiereid printida ja üles panna",
	"flyers::flyers_hero_subtitle":
		"Tasuta prinditavad bitcoini flaierid. Pane need avalikesse kohtadesse üles, et aidata rohkematel inimestel bitcoini kohta õppida.",
	"flyers::flyers_hero_title": "Prindi ja pane üles bitcoini flaierid",
	"flyers::flyers_next_get_stickers": "Levita sõnumit",
	"flyers::flyers_next_get_stickers_desc":
		"Telli tasuta pakk bitcoini kleebiseid",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Osale ja aita bitcoini levitada",
	"get-involved::get_involved_business_content_1":
		"Kas tahad aidata üles ehitada bitcoini ringmajandust? Lihtsaim viis on aidata kohalikel ettevõtetel bitcoini makseid vastu võtma hakata.",
	"get-involved::get_involved_business_content_2":
		"Tead ettevõtet, mis võiks olla avatud? Suuna omanik meie lehele",
	"get-involved::get_involved_business_content_3":
		"Bitcoin ettevõtetele.",
	"get-involved::get_involved_description":
		"Meie tasuta vahendid muudavad bitcoini kasutuselevõtu levitamise lihtsaks. Kleebised, flaierid, „Siin aktsepteerime bitcoini” kleebised ettevõtetele ja avatud lähtekood, millesse igaüks saab panustada.",
	"get-involved::get_involved_header":
		"Osale ja aita bitcoini levitada.",
	"get-involved::get_involved_intro_5":
		"Sa saad aidata seda muuta. Oleme loonud mõned tasuta vahendid, mis muudavad bitcoini toodud lootuse levitamise sinu kogukonnas lihtsaks.",
	"get-involved::get_involved_biz_stickers_note":
		"Kas võtad juba bitcoini vastu? Anna oma klientidele teada meie tasuta „Siin aktsepteerime bitcoini” kleebistega. Saadame paki igale aadressile USA-s või Kanadas, või võid ka ise trükkida kõikjal maailmas.",
	"get-involved::get_involved_card_biz_stickers_label":
		"„Aktsepteerime siin” kleebised",
	"get-involved::get_involved_card_biz_stickers_source":
		"Allikas: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Tasuta „Siin aktsepteerime bitcoini” kleebised sinu ettevõttele",
	"get-involved::get_involved_card_business_label":
		"Bitcoin ettevõtetele",
	"get-involved::get_involved_card_business_source":
		"Allikas: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Kõik, mida ettevõttel on vaja bitcoini maksete vastuvõtmise alustamiseks",
	"get-involved::get_involved_card_flyers_label": "Prinditavad flaierid",
	"get-involved::get_involved_card_flyers_source":
		"Allikas: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Lae alla ja prindi tasuta bitcoini flaier",
	"get-involved::get_involved_card_github_label": "Avatud lähtekood",
	"get-involved::get_involved_card_github_source": "Allikas: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Panusta bitcoin.rocksi GitHubis",
	"get-involved::get_involved_card_stickers_label":
		"Tasuta kleebised",
	"get-involved::get_involved_card_stickers_source":
		"Allikas: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Telli tasuta pakk bitcoini kleebiseid otse oma ukse taha",
	"get-involved::get_involved_flyers_content_1":
		"Flaierid on üks lihtsamaid viise bitcoini tutvustamiseks oma kogukonnas. Lae alla meie tasuta prinditav bitcoini flaier, prindi nii palju koopiaid, kui tahad, ja pane need üles teadetetahvlitele, kohvikutesse, kohtumistele või kuhu iganes inimesed kogunevad.",
	"get-involved::get_involved_flyers_content_2":
		"Igal flaieril on pilkupüüdev pealkiri ja QR-kood, mis viib uudishimulikud lugejad aadressile bitcoin.rocks, et rohkem teada saada.",
	"get-involved::get_involved_flyers_content_3":
		"Erinevalt kleebistest saab flaiereid tellimisel printida kus iganes maailmas — kõik, mida vajad, on printer ja mõni minut.",
	"get-involved::get_involved_flyers_header":
		"Prindi ja pane flaier üles",
	"get-involved::get_involved_flyers_image_alt":
		"Eelvaade bitcoin.rocksi tasuta prinditavast bitcoini flaierist",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks on tasuta ja avatud lähtekoodiga projekt MIT litsentsi all. Meie missioon on kiirendada bitcoini kasutuselevõttu hariduse kaudu — ja me ei saa seda üksi teha.",
	"get-involved::get_involved_github_content_2":
		"Kas oled arendaja, disainer, kirjutaja või tõlkija, on olemas viis, kuidas aidata. Eriti ootame oma ridadesse kaastöölisi, kes saavad tõlkida meie sisu rohkematesse keeltesse, nii et inimesed üle kogu maailma saaksid bitcoini kohta õppida oma emakeeles.",
	"get-involved::get_involved_github_content_3":
		"Forgi meie repositoorium, ava pull request, loo issue või anna projektile täht. Iga panus aitab bitcoinil jõuda rohkemate inimesteni.",
	"get-involved::get_involved_github_header":
		"Panusta GitHubis",
	"get-involved::get_involved_sticker_image_alt":
		"Pakk bitcoin.rocksi tasuta bitcoini tekstikleebiseid",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "säästmine",
	"index::home_card_label_art_1": "Võrdleme",
	"index::home_card_label_art_2": "Levita sõnumit",
	"index::home_card_label_art_3": "Tänavakunst",
	"index::home_card_label_bank_runs": "Täisreservi süsteem",
	"index::home_card_label_bonds": "Võrdleme",
	"index::home_card_label_business_1": "Mis vahe on?",
	"index::home_card_label_business_2": "Võta makseid vastu bitcoinides",
	"index::home_card_label_cash": "Võrdleme",
	"index::home_card_label_cbdc": "Avatud või suletud?",
	"index::home_card_label_coding_1": "Interaktiivne kursus",
	"index::home_card_label_coding_2": "Ehita riistvara",
	"index::home_card_label_coding_3": "Programmeerimisväljakutsed",
	"index::home_card_label_crowdfunding_1": "EndSARS-i protestid",
	"index::home_card_label_crowdfunding_2": "Raha, mida ei saa peatada",
	"index::home_card_label_crowdfunding_3": "Rahasta oma projekti",
	"index::home_card_label_crypto": "Mis vahe on?",
	"index::home_card_label_energy_1": "Elektrivõrgu stabiliseerimine",
	"index::home_card_label_energy_4": "Nõudluse juhtimine",
	"index::home_card_label_energy_5": "Maaelektrifitseerimine",
	"index::home_card_label_energy_6": "Taastuvenergia stiimulid",
	"index::home_card_label_environment_1": "Metaani vähendamine",
	"index::home_card_label_environment_2": "Päästis rahvuspargi",
	"index::home_card_label_environment_3": "Kõige rohelisem tööstus",
	"index::home_card_label_environment_4": "Vähendab gaasipõletamist",
	"index::home_card_label_equality_1": "Lootust ja võimalusi",
	"index::home_card_label_equality_2": "Suur võrdsustaja",
	"index::home_card_label_food_1": "Toiduhinnad",
	"index::home_card_label_food_2": "Talud ja maa",
	"index::home_card_label_freedom_1": "Autoritaarsed režiimid",
	"index::home_card_label_freedom_2": "Ainulaadne tööriist",
	"index::home_card_label_get_started_1":
		"Algajate põhialused",
	"index::home_card_label_get_started_2": "Sinu esimene rahakott",
	"index::home_card_label_get_started_3": "Osta bitcoini",
	"index::home_card_label_gold": "Kumb on parem?",
	"index::home_card_label_housing_1": "Taskukohane eluase",
	"index::home_card_label_human_rights_1":
		"Edenda inimõigusi",
	"index::home_card_label_human_rights_2": "Rahvalik kasutuselevõtt",
	"index::home_card_label_human_rights_3": "Ülemaailmne jalajälg",
	"index::home_card_label_inflation": "Bitcoin on parem raha",
	"index::home_card_label_networks_1": "Võrgu reaalajavisualiseering",
	"index::home_card_label_networks_2": "Võrdleme",
	"index::home_card_label_payments_1": "Mis vahe on?",
	"index::home_card_label_payments_2": "Kiired ja odavad maksed",
	"index::home_card_label_payments_3": "Välisülekanded",
	"index::home_card_label_payments_4": "Võta makseid vastu",
	"index::home_card_label_politics_1": "Poliitiline paradoks",
	"index::home_card_label_politics_2": "Suur panus",
	"index::home_card_label_property_rights_1": "Võrdleme",
	"index::home_card_label_property_rights_2": "Tegelik omand",
	"index::home_card_label_salary": "Kaitse oma palka",
	"index::home_card_label_self_custody_1":
		"Bitcoini rahakottide juhend",
	"index::home_card_label_self_custody_2": "Kõige tähtsam samm",
	"index::home_card_label_self_custody_3": "Suveräänne raha",
	"index::home_card_label_war_1": "Lõpeta igaveseid sõdu",
	"index::home_card_label_war_2": "Aita veterane",
	"index::home_card_label_war_3": "Põgeneda sõjast",
	"index::home_h1":
		"Bitcoin on parem raha, mis ehitab parema maailma.",
	"index::home_nav_about": "Teave",
	"index::home_nav_get_involved": "Osale",
	"index::home_nav_learn": "Õpi",
	"index::home_source_prefix": "Allikas:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon ja Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
	"lightning::lightning_s1_c4": "Vaata meie",
	"lightning::lightning_grid_heading":
		"Populaarsed Lightningu rahakotid",
	"lightning::lightning_hardware_cta_label":
		"Riistvararahakotid",
	"lightning::lightning_header_subtitle":
		"Lightning lubab sul saata bitcoini sekunditega senti murdosa eest — vali rahakott, mille järeleandmised vastavad sellele, kui palju bitcoini plaanid kulutada.",
	"lightning::lightning_s1_c4_end": "lisateabe saamiseks.",
	"lightning::lightning_s1_c4_link":
		"Bitcoini riistvararahakottide juhend",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightningu rahakott",
	"lightning::sources_breez_lightning":
		"Breez — ise hallatav Lightningu rahakott",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightningu võrgu dokumentatsioon",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — hoitav Lightningu rahakott",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android ja veeb",
	"nostr/index::nostr_platform_web": "Veebibrauser",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr on uus detsentraliseeritud protokoll veebisuhtluseks — ükski ettevõte seda ei oma, bitcoini zapid on sisse ehitatud ja sa saad kliente vahetada ilma jälgijaid kaotamata.",
	"nostr/index::nostr_amethyst_f1":
		"Palju funktsioone ja kohandamisvõimalusi",
	"nostr/index::nostr_amethyst_f2":
		"Nõuab eraldi bitcoini rahakotti",
	"nostr/index::nostr_amethyst_f3": "100 % tasuta",
	"nostr/index::nostr_damus_f1":
		"Tuttav Twitteri sarnane liides",
	"nostr/index::nostr_damus_f2":
		"Nõuab eraldi bitcoini rahakotti",
	"nostr/index::nostr_damus_f3": "100 % tasuta",
	"nostr/index::nostr_download_heading":
		"Lae alla tasuta Nostri klient",
	"nostr/index::nostr_download_intro":
		"Nostri kliendid on tasuta rakendused, mis lubavad sul lugeda ja kirjutada Nostri võrku. Kõik töötavad koos — sa saad kliente igal ajal vahetada ja säilitada oma jälgijad ja sisu.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr on uus detsentraliseeritud protokoll veebisuhtluseks — ükski ettevõte seda ei oma, bitcoini zapid on sisse ehitatud ja sa saad rakenduste vahel vahetada ilma jälgijaid kaotamata.",
	"nostr/index::nostr_hero_title": "Mis on Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr on nagu e-post: protokoll ei kuulu kellelegi, igaüks saab selle peale rakenduse ehitada ja sina valid, milline sulle kõige paremini sobib. Erinevalt Twitterist või Facebookist pole keskset ettevõtet, mis saaks sind tsenseerida, välja visata või alla suruda.",
	"nostr/index::nostr_intro_c2":
		"Allpool on lühike versioon sellest, miks Nostr on oluline — ja siis kõik tasuta Nostri kliendid, mida vajad, et täna alustada.",
	"nostr/index::nostr_iris_f1":
		"Äärmiselt lihtne — ei vaja paigaldamist",
	"nostr/index::nostr_iris_f2":
		"Lihtne viis Nostri proovimiseks testkontoga",
	"nostr/index::nostr_iris_f3": "100 % tasuta",
	"nostr/index::nostr_learn_more_label": "SÜVENE",
	"nostr/index::nostr_learn_more_title":
		"Õpi Nostri kohta rohkem aadressil nostr.how",
	"nostr/index::nostr_primal_f1": "Meie esimene soovitatud klient",
	"nostr/index::nostr_primal_f2":
		"Sisseehitatud bitcoini zap-rahakott",
	"nostr/index::nostr_primal_f3": "100 % tasuta",
	"nostr/index::nostr_s1": "Protokoll, mitte platvorm",
	"nostr/index::nostr_s1_c1":
		"Nostr on uus protokoll, mis lubab sul veebis suhelda ilma tsensuuri, keelustamise või allasurumise hirmuta.",
	"nostr/index::nostr_s1_c2":
		"Platvormid nagu Twitter ja Facebook on ühe ettevõtte kontrolli all, aga Nostri protokoll ei ole kellegi kontrolli all.",
	"nostr/index::nostr_s2": "Vabadus liikuda",
	"nostr/index::nostr_s2_c1":
		"Nostr on nagu e-post. Keegi ei kontrolli e-posti protokolli ja igaüks saab selle peale kliendi ehitada (nagu Gmail, Hotmail jne).",
	"nostr/index::nostr_s2_c2":
		"Nostri protokoll pole samuti kellegi kontrolli all ja igaüks saab selle peale kliendi ehitada (nagu Damus, Amethyst jne).",
	"nostr/index::nostr_s2_c3":
		"Kui sulle ei meeldi, kuidas konkreetne klient töötab, saad oma Nostri konto teise kliendi juurde viia, kaotamata oma jälgijaid ega sisu.",
	"nostr/index::nostr_s3": "Bitcoin on sisse ehitatud",
	"nostr/index::nostr_s3_c1":
		"Bitcoin on Nostri protokolli sisse ehitatud. Kui näed sisu, mis sulle meeldib, saad autorile tänuks lihtsalt saata „bitcoini zapi”.",
	"nostr/index::nostr_s3_c2":
		"Tsentraliseeritud platvormidel nagu Twitter ja Facebook teenib keskne ettevõte sinu sisult raha. Aga avatud protokollidel nagu Nostr teenid sa ise oma sisult raha.",
	"nostr/index::sources_damus": "Damus — Nostri klient iPhone'i jaoks",
	"nostr/index::sources_iris": "Iris — Nostri klient veebibrauseris",
	"nostr/index::sources_nostr_how": "nostr.how — mis on Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostri protokoll — avatud lähtekoodiga spetsifikatsioon",
	"nostr/index::sources_primal":
		"Primal — Nostri klient sisseehitatud bitcoini zap-rahakotiga",
	"nostr/index::what_is_nostr": "Mis on Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Prindi oma bitcoini kleebised neid faile kasutades.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Taotlus kätte saadud 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Telli hulgikaupa",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Jaga Nostris",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Mis on Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Vajad rohkem kleebiseid?",
	"sticker-success::sticker_success_hero_title":
		"Sinu kleebised on teel 🎉",
	"sticker-success::sticker_success_share_header":
		"Jaga, kuhu sa kleebised panid",
	"sticker-success::sticker_success_tips_header":
		"Head kohad kleebiste panemiseks",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Ja kui alustad, prindi ja pane üles ka oma",
	"stickers::stickers_instructions_1":
		"Sisesta oma postiaadress ja saadame sulle tasuta paki bitcoini kleebiseid postiga. Sinu kleebised saabuvad lihtsas valges ümbrikus.",
	"stickers::stickers_btn_choose_pack": "Vali see pakk",
	"stickers::stickers_bulk_c1":
		"Tahad rohkem kui paar kleebist?",
	"stickers::stickers_bulk_c2":
		"Telli hulgikaupa samast trükikojast, mida meie kasutame",
	"stickers::stickers_bulk_c3":
		"— mida rohkem ostad, seda odavamaks tükk tuleb.",
	"stickers::stickers_bulk_cta": "Osta kleebiseid hulgikaupa",
	"stickers::stickers_bulk_header":
		"Telli kleebiseid hulgikaupa",
	"stickers::stickers_hero_subtitle":
		"Telli tasuta pakk bitcoini kleebiseid ja pane need üles avalikesse kohtadesse, et aidata rohkematel inimestel bitcoini kohta õppida.",
	"stickers::stickers_hero_title": "Tasuta bitcoini kleebised",
	"stickers::stickers_intro_c1":
		"Meie missioon on aidata sul „oranžistada” rohkem inimesi, kleepides bitcoini kleebiseid avalikesse kohtadesse. Kõigil meie kleebistel on QR-koodid, mis viivad harivatele lehtedele",
	"stickers::stickers_intro_c3": "inflatsiooni",
	"stickers::stickers_intro_c4":
		"Vali allpool kleebisepakk ja vali, kuidas neid tahad — saadame tasuta paki igaühele USA-s või Kanadas, või võid ka ise oma kleebised trükkida kõikjal maailmas.",
	"stickers::stickers_mail_header":
		"Saadame sulle kleebised postiga tasuta",
	"stickers::stickers_next_print_flyers": "Levita sõnumit veel kaugemale",
	"stickers::stickers_next_print_flyers_desc":
		"Prindi tasuta bitcoini flaierid ja pane need avalikesse kohtadesse üles",
	"stickers::stickers_option_bulk":
		"📦 Kogu maailm — telli hulgikaupa",
	"stickers::stickers_option_canada":
		"🇨🇦 Kanada — tasuta postiga",
	"stickers::stickers_option_print":
		"🌍 Kogu maailm — trüki ise",
	"stickers::stickers_option_usa":
		"🇺🇸 USA — tasuta postiga",
	"stickers::stickers_print_c1":
		"Sa saad osaleda, printides ise oma kleebised, kus iganes elad. Klõpsa all oma keelel, et laadida alla kleebisefailid ja trükijuhised.",
	"stickers::stickers_print_c2":
		"Kõiki kleebiseid pole saadaval igas keeles.",
	"stickers::stickers_print_header":
		"Trüki ise oma kleebisefailid",
	"stickers::stickers_request_c1":
		"Täida allolev vorm, et taotleda kleebisefaile oma kohalikus keeles. Anname teada, kui need on valmis.",
	"stickers::stickers_request_header":
		"Ei näe oma keelt?",
	"stickers::stickers_share_c2":
		"Jälgi meid Nostris, otsides",
	"stickers::stickers_share_c3":
		"mistahes Nostri kliendis.",
	"stickers::stickers_signs_pack_description":
		"Hoiatus-, ettevaatus- ja märgitussilte bitcoini sõnumitega — mõeldud pilku püüdma ja inimesi peatama, et nad loeksid.",
	"stickers::stickers_step_1_description":
		"Iga pakk sisaldab erinevat komplekti bitcoini kleebiseid QR-koodidega, mis õpetavad inimesi bitcoini kohta.",
	"stickers::stickers_step_1_eyebrow": "SAMM 1",
	"stickers::stickers_step_1_header":
		"Vali kleebisepakk",
	"stickers::stickers_step_2_description":
		"Saadame tasuta pakke aadressidele USA-s ja Kanadas. Mujal maailmas saad oma kleebised ise trükkida või tellida hulgikaupa.",
	"stickers::stickers_step_2_eyebrow": "SAMM 2",
	"stickers::stickers_step_2_header":
		"Kuidas sa oma kleebised tahad?",
	"stickers::stickers_text_pack_description":
		"Segu bitcoini loosungitest ja vaimukatest mõtetest, mis on loodud avalikes kohtades uudishimu äratamiseks.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — vali oma rahakott",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — bitcoini seeme-metallhoiustuste arvustused",
	"wallets::wallets_lightning_cta_label": "Lightningu võrk",
	"wallets::sources_blockstream_green":
		"Blockstream Green — ise hallatav bitcoini rahakott",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — bitcoini riistvararahakott",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 riistvararahakott",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q riistvararahakott",
	"wallets::sources_passport":
		"Foundation Devices — Passport riistvararahakott",
	"wallets::sources_seedsigner":
		"SeedSigner — avatud lähtekoodiga isetehtud allkirjastamisseade bitcoini tehingute jaoks",
	"wallets::wallets_grid_heading": "Populaarsed bitcoini rahakotid",
	"wallets::wallets_header_subtitle":
		"Samm-sammuline juhend rahakoti valimiseks, võtmete kaitsmiseks ja oma bitcoini üle täieliku kontrolli võtmiseks.",
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
		`translate-rest-part2 (et): filled ${filled}, already-done ${skipped}`,
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
