#!/usr/bin/env node
/**
 * Estonian manifest refresh — part 1 of non-inflation namespaces.
 *
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
 *
 * Estonian conventions:
 * - Informal 2nd-person singular "sa/sina/sinu" throughout.
 * - Numbers: decimal comma, space thousand separators. Space before %.
 * - Quotation marks: „..."  (Estonian typographic style — matches German shape).
 * - "triljon" = 10^12 (short scale, matches English "trillion").
 * - Brand names (Silicon Valley Bank, FRED, FDIC, etc.) preserved verbatim.
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

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Tagasi avalehele",
	"404::404_message":
		"Bitcoin on vinge, aga see katkine leht mitte.",
	"404::404_not_found_short": "Ei leitud",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Pakume tasuta äritööriistu, mis muudavad kohalikel ettevõtetel bitcoini vastuvõtmise alustamise lihtsaks. Meie leht „Bitcoin ettevõtetele” selgitab, miks on bitcoin ettevõttele kasulik, kuidas valida rahakotti ja maksete vastuvõtjat, ning pakub tasuta „Siin aktsepteerime bitcoini” kleebiseid.",
	"about::about_card_business_label": "Tööriistad ettevõtetele",
	"about::about_card_business_source": "Allikas: bitcoin.rocks →",
	"about::about_card_business_title":
		"Kõik, mida ettevõttel on vaja bitcoini maksete vastuvõtmise alustamiseks",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Allikas: GitHub →",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Panusta",
	"about::about_card_contribute_source": "Allikas: GitHub →",
	"about::about_card_contribute_title":
		"Õpi, kuidas bitcoin.rocks projekti panustada",
	"about::about_card_email_label": "E-post",
	"about::about_card_email_source": "Allikas: e-post →",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Prinditavad flaierid",
	"about::about_card_flyers_source": "Allikas: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Lae alla ja prindi oma kogukonnale bitcoini flaiereid",
	"about::about_card_github_label": "Repositoorium",
	"about::about_card_github_source": "Allikas: GitHub →",
	"about::about_card_github_title": "Vaata bitcoin.rocksi GitHubis",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Allikas: Nostr →",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Tasuta kleebised",
	"about::about_card_stickers_source": "Allikas: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Saa tasuta bitcoini kleebised otse oma ukse taha",
	"about::about_editorial_2":
		"Tsiteerime usaldusväärseid allikaid nagu Föderaalreserv (FRED), USA Tööstatistika Amet, FDIC, ÜRO, Maailma Kullanõukogu, Forbes, MIT Technology Review, Lyn Alden ja James Lavish. Usume, et kui faktid on selgelt esitatud, räägib bitcoin enda eest ise.",
	"about::about_flyers_blurb":
		"Kujundame prinditavaid flaiereid, mida saad jagada kohtumistel, kleepida teadetetahvlitele või panna postkastidesse — lihtne viis huvi äratada ja suunata inimesed aadressile bitcoin.rocks, kus nad saavad rohkem teada.",
	"about::about_header": "bitcoin.rocksist",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "bitcoin.rocksi asutas kasutaja",
	"about::about_mission_1b":
		"aastal 2022 lihtsa missiooniga: kiirendada bitcoini kasutuselevõttu hariduse kaudu.",
	"about::about_open_source_2":
		"bitcoin.rocks on tasuta ja avatud lähtekoodiga projekt MIT litsentsi all. Igaüks on teretulnud panustama. Eriti ootame oma ridadesse tõlkijaid, kes aitavad muuta meie sisu ligipääsetavaks inimestele üle kogu maailma.",
	"about::about_open_source_header": "Avatud lähtekood",
	"about::about_page_description":
		"bitcoin.rocks on tasuta ja avatud lähtekoodiga hariv veebisait bitcoinist, asutatud 2022. Meie missioon on kiirendada bitcoini kasutuselevõttu hariduse kaudu.",
	"about::about_stickers_blurb":
		"Saadame tasuta bitcoini kleebiseid otse sinu ukse taha, et sa saaksid oma kogukonnas bitcoini teadlikkust kasvatada. Iga kuu skaneerivad sajad inimesed nende kleebiste QR-koode, et bitcoinist rohkem teada saada.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoini ei taba pangajooks",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin on täisreservi süsteem. Sa ei pane oma raha panka. Sa oled ise oma pank. Sinu raha ei laenata kellelegi välja sinu teadmata, sest ainus inimene, kellel on sellele ligipääs, oled sina.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Nii kaua kui sa hoiad oma bitcoini oma rahakotis — mitte börsil ega ETF-i sees — on pangajooks võimatu.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Bitcoiniga on sinul oma raha üle tõeline kontroll.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Alates 26. märtsist 2020 ei pea USA pangad enam hoidma ühtegi kohustuslikku reservi.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Panga reservimäär",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Allikas: Föderaalreserv →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Täisreservi süsteem — hoiusekindlustust pole vaja.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoini kate",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Allikas: Bitcoini valge raamat →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Iga bitcoin on olemas plokiahelas — midagi ei laenata välja.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Bitcoini reservimäär",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Allikas: Bitcoini valge raamat →",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 miljardi $ kindlustusfond vs 10,82 triljonit $ kindlustatud hoiuseid (dets 2025).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC-i kate",
	"bank-runs::bank_runs_card_fdic_source":
		"Allikas: FDIC Statistics at a Glance →",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Juhtumiuuring",
	"bank-runs::bank_runs_card_svb_source":
		"Allikas: Washingtoni Ülikooli õigusteaduskond →",
	"bank-runs::bank_runs_card_svb_title":
		"Vaata, kuidas Silicon Valley Banki pangajooks juhtus",
	"bank-runs::bank_runs_card_wallet_label": "Järgmine samm",
	"bank-runs::bank_runs_card_wallet_source": "Alusta siit →",
	"bank-runs::bank_runs_card_wallet_title":
		"Õpi hankima oma enda bitcoini rahakotti",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC-i kindlustus katab umbes 1 % hoiustest",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC-i kindlustus kaitseb hoiuseid kuni 250 000 $ hoiustaja kohta. Kuid kindlustusfond on väike võrreldes hoiuste kogusummaga, mida ta peaks kaitsma.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Laiaulatusliku pangakrahhi korral trükiks valitsus tõenäoliselt raha juurde, et vahe katta — põhjustades rohkem",
	"bank-runs::bank_runs_fdic_p2_link": "inflatsiooni.",
	"bank-runs::bank_runs_header":
		"Bitcoini ei taba pangajooks, aga sinu panka võib.",
	"bank-runs::bank_runs_page_description":
		"Pangad laenavad sinu hoiused välja osareservi pangandusega. Kui liiga paljud inimesed korraga raha välja võtavad, võivad pangad kokku variseda. Bitcoin on täisreservi süsteem — pangajooks on võimatu.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: tõsielulise näide",
	"bank-runs::bank_runs_svb_p1_a":
		"Märtsis 2023 varises Silicon Valley Bank kokku pärast seda, kui oli investeerinud oma klientide hoiused",
	"bank-runs::bank_runs_svb_p1_b":
		"Kui need võlakirjad väärtust kaotasid, ei suutnud SVB väljamakseid katta. Pank muutus maksejõuetuks.",
	"bank-runs::bank_runs_svb_p1_link": "pikaajalistesse valitsuse võlakirjadesse.",
	"bank-runs::bank_runs_svb_p2":
		"Tuhanded ettevõtted ei saanud oma töötajatele palka maksta. FDIC sekkus — aga tekkis suurem küsimus: kas sinu raha on ikka tõesti turvaline?",
	"bank-runs::bank_runs_what_p1":
		"Pangad ei hoia sinu hoiuseid varakambris. Nad laenavad ja investeerivad sinu raha välja — seda nimetatakse osareservi panganduseks.",
	"bank-runs::bank_runs_what_p2":
		"Kui liiga paljud inimesed üritavad korraga raha välja võtta, ei ole pangal piisavalt sularaha, et kõigile maksta. See ongi pangajooks — ja see võib viia panga täieliku kokkuvarisemiseni.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">pankade</span> vahel",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoini saab kasutada igaüks, kellel on internetiühendus — see on ",
	"bitcoin-vs-banks::point_1_summary_2": "loata kasutatav.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Pangad võivad kontosid keelduda avamast, külmutada või sulgeda oma reeglite või valitsuse määruste alusel.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoini võrk töötab 24/7/365 ilma hooldusakende ja pühadeta. Pankadel on piiratud lahtiolekuajad, nädalavahetustel suletud ja esinevad tegevuskatkestused.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Iga bitcoini tehing on avalikus plokiahelas, mida igaüks saab kontrollida. Pangad peavad privaatseid raamatuid, mida kliendid ei saa iseseisvalt auditeerida.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Bitcoiniga hoiad sa ise oma privaatvõtmeid — vaata meie lihtsat juhendit ",
	"bitcoin-vs-banks::point_4_summary_2": "bitcoini rahakottide kohta",
	"bitcoin-vs-banks::point_4_summary_3":
		". Pangad hoiavad sinu raha enda käes ja võivad selle igal ajal külmutada, piirata või blokeerida.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoini tehingutasud on läbipaistvad ja etteaimatavad. Pangad lisavad järk-järgult varjatud tasusid kontode, arvelduskrediidi, ülekannete ja sularahaautomaatide eest.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Bitcoin lubab sul kulutada ainult seda, mis sul tegelikult on. Pangad lubavad arvelduskrediiti ja võtavad seejärel selle eest rea trahvitasusid.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Kui bitcoini tehing on saadetud, ei saa seda peatada ega tagasi pöörata. Pangad võivad tehinguid blokeerida, külmutada või tühistada reeglite või valitsuse korralduste alusel.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">võlakirjade</span> vahel",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Võlakirjad on „riskivabad” ainult nominaalselt — inflatsioon, intressimäärade kõikumised ja makseriski oht söövad reaalset tulu.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoinil on läbipaistev volatiilsus, kuid ei ole varjatud vastaspoole riski.",
	"bitcoin-vs-bonds::point_2_summary_1": "Kui",
	"bitcoin-vs-bonds::point_2_summary_2": "inflatsioon",
	"bitcoin-vs-bonds::point_2_summary_3":
		"ületab võlakirjade tulusust, kaotavad võlakirjaomanikud igal aastal reaalset ostujõudu. Bitcoini 21 miljoni ülempiiri ei saa inflatsiooniga lahjendada.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Võlakirjaturud võivad kriiside ajal külmuda — Silicon Valley Bank kukkus kokku osaliselt seetõttu, et tal olid võlakirjad, mis kaotasid väärtust. Vaata, kuidas",
	"bitcoin-vs-bonds::point_3_summary_2": "pangajooksud",
	"bitcoin-vs-bonds::point_3_summary_3":
		" juhtuvad ja miks bitcoin neid väldib. Bitcoin kaupleb 24/7 globaalselt ilma likviidsuskriisita.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Valitsuse võlakirjade oksjonid võivad läbi kukkuda, kui ei ole piisavalt ostjaid — vaata",
	"bitcoin-vs-bonds::point_4_summary_2": "nõrka 2022. aasta oksjonit.",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bitcoini hind avastatakse pidevalt avatud turgudel ilma keskse oksjonita, mis võiks ebaõnnestuda.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Võlakirjade tulusus fikseeritakse ostuhetkel. Isegi kui majandus kasvab või valuuta kukub kokku, jääb sinu tulu samaks.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoinil on märkimisväärne ruum kasvuks, kui kasutuselevõtt suureneb ja nõudlus kohtub fikseeritud pakkumisega.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Enamikku võlakirju hoitakse pankade või maaklerite kaudu, lisades vastaspoole riski. Bitcoini saab hoida iseenda valduses",
	"bitcoin-vs-bonds::point_6_summary_2": "rahakotis",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — kõrvaldades selle riski täielikult.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Võlakirjad sõltuvad täielikult sellest, et valitsused võla tagasi maksavad. Kui valitsus jätab võla maksmata või vähendab seda inflatsiooniga, kaotavad võlakirjaomanikud.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin toimib sõltumatult igast valitsusest või poliitilisest võimust.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">sularaha</span> vahel",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin liigub kõikjal maailmas interneti kaudu minutitega. Sularaha nõuab füüsilist kohalolekut või usaldatud kullereid — kahekümnerahalist ei saa e-postiga saata.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin töötab kõikjal ühtemoodi. Sularaha piiravad geograafia, vahetuskursid ja kohalik aktsepteeritus.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Valitsused võivad sularaha üleöö kehtetuks kuulutada — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">India</a> tegi seda 2016. aastal. Aga isegi ilma demonetiseerimiseta kaotab sularaha",
	"bitcoin-vs-cash::point_3_summary_2": "inflatsiooni",
	"bitcoin-vs-cash::point_3_summary_3":
		"tõttu väärtust. Bitcoini ei saa ükski valitsus ega võim kehtetuks kuulutada.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Sularaha saab võltsida, mõnikord väga veenvalt. Bitcoin kasutab krüptograafiat, mis teeb võltsimise matemaatiliselt võimatuks.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoinil ei ole keskset võimu. Sularaha annavad välja valitsused, kes saavad oma äranägemise järgi juurde trükkida, kujundusi muuta või rahatähti kasutuselt kõrvaldada.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Sularaha on haavatav varguse, tulekahju, kaotuse ja konfiskeerimise suhtes. Bitcoini saab ",
	"bitcoin-vs-cash::point_6_summary_2": "turvaliselt ise hoida",
	"bitcoin-vs-cash::point_6_summary_3":
		" oma telefonis või riistvararahakotis.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoini saab jagada 100 miljoniks satoshiks, võimaldades mistahes suurusega mikromakseid. Sularahal on minimaalsed nimiväärtused — senti ei saa pooleks lõigata.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">keskpanga digivaluutade (CBDC)</span> vahel",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Keegi ei saa sind bitcoini tehingute tegemisest takistada. CBDC-d on loodud selleks, et valitsused ja keskpangad kontrolliksid iga makset, piirates sinu privaatsust ja vabadust.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin ei aegu kunagi ja sellel ei ole igakuiseid tasusid. CBDC-sid saab programmeerida aeguma, sundides sind loobuma tuleviku jaoks säästmisest.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoinil on fikseeritud ülempiir 21 miljonit BTC. CBDC-del pole pakkumise piiri ja need lubavad valitsustel rahapakkumist oma äranägemise järgi laiendada — põhjustades",
	"bitcoin-vs-cbdc::point_3_summary_2": "inflatsiooni.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoini aadressid ei ole seotud sinu reaalse isikuga. CBDC-d on otseselt seotud valitsuse tuvastatud isikuga, võimaldades massilist järelevalvet ja finantstsensuuri.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoini reegleid kontrollivad kümned tuhanded sõltumatud sõlmed. CBDC-d on tsentraliseeritud valitsuste ja keskpankade kätte, kellel on võrgu üle täielik kontroll.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Igaüks saab käivitada bitcoini sõlme ja kontrollida võrgu reegleid. CBDC-d ei luba kasutajatel sõlmi käitada — pead usaldama keskset võimu.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Ise hoitud bitcoini ei saa keegi külmutada. CBDC-d on loodud nii, et valitsused ja keskpangad saavad kontosid hetkega külmutada.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin annab sulle oma raha üle täieliku kontrolli, kui hoiad seda",
	"bitcoin-vs-cbdc::point_8_summary_2": "rahakotis.",
	"bitcoin-vs-cbdc::point_8_summary_3":
		"CBDC-d nõuavad usaldust hoidjate, näiteks pankade või valitsuste vastu, kes hoiavad raha sinu eest.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoini rahapoliitika on koodi sees fikseeritud ja seda ei saa muuta. CBDC-sid saab poliitikute äranägemise järgi ümber programmeerida, põhjustades",
	"bitcoin-vs-cbdc::point_9_summary_2": "inflatsiooni",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", kui liiga palju raha juurde trükitakse.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin on kõige turvalisem arvutivõrk, mis kunagi ehitatud, ja seda pole kunagi häkitud. CBDC-d tuginevad pankadele ja valitsustele, mida on häkitud lugematul arvul kordi.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">krüptoraha</span> vahel",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoini protokoll on alates 2009. aastast vaevu muutunud ja pakub etteaimatavaid reegleid. Enamik krüptoprojekte muudab pidevalt protokolle, tokenomikat või forgib uuteks versioonideks.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin töötab kümnete tuhandete sõltumatute sõlmede peal üle kogu maailma. Enamikku krüptoprojekte kontrollivad fondid, ettevõtted või väikesed arendajate grupid, kes võivad teha ühepoolseid muudatusi.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoinil on fikseeritud ülempiir 21 miljonit münti — kõige nappim digitaalne vara. Enamikul krüptoprojektidel on piiramatu pakkumine või mehhanismid uute tokenite suvaliseks loomiseks, lahjendades omanikke.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoinil on üks eesmärk: võrdõigusvõrgu digiraha. Igaüks saab sellest aru ja saab seda kasutada. Enamik krüptovaluutasid sisaldab keerulisi nutilepinguid või DeFi-d, mille turvaliseks kasutamiseks on vaja tehnilisi teadmisi.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoini tööpõhimõte „tõestus tööga” on üle 15 aasta töötanud ilma eduka põhiahelarünnakuta. Enamik krüptoprojekte kasutab katselisi konsensusmeetodeid, mida pole põhjalikult testitud.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin on digiraha — väärtuse hoiustus ja vahetusvahend. Enamik krüptotokeneid on spekulatiivsed kasutus- või halduse tokenid, mille tegelik väärtus on ebaselge.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin tugevneb rünnaku all ja on üle elanud iga kriisi, keelu ja kriitika. Enamik krüptoprojekte variseb regulatiivse, tehnilise või turusurve all kokku.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoinil pole tegevjuhti, ettevõtet ega ühtainust rikkepunkti. Enamik krüptoprojekte sõltub riskikapitali investoritest, konkreetsest juhtkonnast või ühe ettevõtte ellujäämisest.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">kunsti</span> vahel",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Iga bitcoin on identne ja vahetatav. Iga kunstiteos on unikaalne — erinev päritolu, ajalugu, seisukord ja sugupuu muudavad otsese võrdlemise äärmiselt keeruliseks.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin kaupleb 24/7 globaalsel turul, mis on kättesaadav kõigile. Kunst nõuab spetsiaalseid oksjonimaju, erakauplejaid või galeriisid ja müügid võivad võtta kuid.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bitcoini ostmine või müümine maksab alla 1 % tasudes, sageli palju vähem. Kunstimüügid kasvatavad 30–40 % ostjatasusid, vahendustasusid, kindlustust, transporti ja autentimise tasusid.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoini saab jagada 100 miljoniks satoshiks, mis teeb selle ideaalseks mistahes suurusega tehinguteks. Maalist ei saa omada osa ega skulptuuri nurka ilma vastaspoole riskita.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoini omandit ja ehtsust saab plokiahelas igaüks krüptograafiliselt kontrollida. Kunsti autentimine on kallis, aeglane ja võltsijate poolt regulaarselt petetud — hävitades teose väärtuse üleöö.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Õigesti varundatud bitcoin elab üle üleujutused, tulekahjud, maavärinad ja vargused. Kunst on haavatav igasugusele füüsilisele katastroofile ja kindlustus katab harva kõike.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Igaüks, kellel on internetiühendus ja natuke raha, saab bitcoini osta. Kunsti investeerimine on praktikas piiratud jõukate kollektsionääridega, kellel on juurdepääs oksjonitele ja spetsiaalsetele teadmistele.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">kulla</span> vahel",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoini saab saata koheselt interneti kaudu madalate tasudega. Kuld tuleb omandi üleandmiseks füüsiliselt saata.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin on natiivselt digitaalne vara, mida saad interneti kaudu üle kanda. Veebipõhine kuld on digitaalne võlakiri — sa omad ainult lubadust hoidjalt, mitte metalli ennast.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoinil on fikseeritud ülempiir 21 miljonit BTC. Kulla pakkumine kasvab umbes <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">1,6 % aastas</a>, vähendades sinu osa — vähem kui fiatraha",
	"bitcoin-vs-gold::point_3_summary_2": "inflatsioon",
	"bitcoin-vs-gold::point_3_summary_3":
		", aga siiski inflatsioon.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Kui kulla hinnad tõusevad, kaevandatakse rohkem kulda, lükates hinna tagasi alla. Bitcoini pakkumine on mitteelastne — ükskõik kui kõrgele hind tõuseb, jääb alati ainult 21 miljonit.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Bitcoini võrku kontrollivad kümned tuhanded sõltumatud sõlmed. Suur osa füüsilisest kullast asub vähestes suurtes varakambrites.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Igaüks saab autentset bitcoini kontrollida, käivitades täissõlme — see on lihtsalt rakendus. Füüsilise kulla kontrollimiseks tuleb see sulatada; sees võib olla volfram.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoini saab jagada 100 miljoniks satoshiks, mis teeb selle ideaalseks mistahes suurusega ostudeks. Kulda ei saa väiksemate tehingute jaoks lihtsalt jagada.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">kinnisvara</span> vahel",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin liigub koheselt kõikjale maailmas. Kinnisvara on seotud asukohaga ja avatud kohalikele majanduslikele, poliitilistele ja keskkonnaohtudele.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoini saab jagada 100 miljoniks satoshiks. Kinnisvara ei saa osaliselt müüa — köögi müümine või pool magamistuba ostmine ei ole võimalik.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin toimib detsentraliseeritud võrgus, mida ükski valitsus ei saa kontrollida. Kinnisvara on rangelt reguleeritud — tsoneerimine, üürikontroll, sundvõõrandamine ja arestimine kõik kehtivad.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin ei vaja hooldust. Kinnisvara nõuab remonti, renoveerimist, kindlustust, kinnisvarahaldust ja üürnike probleemide lahendamist.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoini ei maksustata pidevalt — kapitali kasvutulu maksud tuleb maksta ainult siis, kui sa müüd. Kinnisvaralt tuleb maksta iga-aastaseid kinnisvaramakse, olenemata sissetulekust.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Õigesti varundatud bitcoin elab üle tulekahjud, üleujutused ja maavärinad. Kinnisvara on haavatav kõigi katastroofide suhtes ja kindlustus katab harva kõike.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Iga bitcoin on identne ja vahetatav. Iga kinnisvaraobjekt on unikaalne, mis teeb hindamise ja võrdlemise keeruliseks.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin kaupleb globaalselt 24/7 igaühele, kellel on internetiühendus. Kinnisvaramüük on piiratud kohalike ostjatega ja võib paberitega sulgemiseks kuid võtta.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin võimaldab igaühel otsest individuaalset omandit. Kinnisvara ostmine investeeringuks lisaks põhielukohale tõstab elamispindade hindu, vähendab kättesaadavust ja tekitab eluasemekriisi.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">aktsiate</span> vahel",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin on otsene vara, mille omad täielikult. Aktsiad on osalus ettevõttes — nende väärtus sõltub juhtkonnast, tulemuslikkusest ja otsustest, mida sina ei kontrolli.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoinil on fikseeritud ülempiir 21 miljonit BTC. Ettevõtted võivad igal ajal uusi aktsiaid emiteerida ja olemasolevaid aktsionäre lahjendada — nii nagu fiatraha",
	"bitcoin-vs-stocks::point_2_summary_2": "inflatsioon",
	"bitcoin-vs-stocks::point_2_summary_3":
		" lahjendab sularaha. Bitcoini puhul sinu osa kunagi ei kahane.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoinil pole tegevjuhti ega ühtainust rikkepunkti. Aktsiad sõltuvad tugevalt juhtkonnast — üks halb otsus või võtmeisiku lahkumine võib hinda kokku varistada.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoini hind tuleb avatud globaalsetelt turgudelt. Aktsiate hindamine põhineb mõõdikutel nagu P/E, mis võivad ülehinnatud aktsiaid varjata.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin kaupleb 24/7 üle kogu maailma. Aktsiaturud on avatud ainult tööpäevadel kauplemisaegadel.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Bitcoiniga saad üle minna",
	"bitcoin-vs-stocks::point_6_summary_2": "iseenda hoidmisele",
	"bitcoin-vs-stocks::point_6_summary_3":
		" lihtsa rakendusega — maaklerit pole vaja. Aktsiaid hoitakse maakleritel, mis avab sind vastaspoole riskile, kui nad kokku varisevad.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Bitcoini fikseeritud pakkumine teeb sellest usaldusväärse kaitse inflatsiooni vastu. Mõned aktsiad löövad inflatsiooni, teised mitte — garantiisid ei ole.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Erinevus <span class=\"orange\">bitcoini</span> ja <span class=\"asset\">Visa</span> vahel",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin on avatud võrk, millega igaüks saab ilma loata liituda. Visa on suletud süsteem, mida kontrollivad finantsasutused, kes võivad juurdepääsu keelata — eriti pangakontota või piiratud pangandusliku juurdepääsuga inimestele.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoini tehingutel pole kaupmehe tasusid. Visa küsib kaupmeestelt tüüpiliselt umbes 3 % tehingu kohta — sinu ettevõte võib raha säästa, kui võtab vastu",
	"bitcoin-vs-visa::point_2_summary_2": "bitcoini makseid",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Iga bitcoini tehing on avalikul ja kontrollitaval plokiahelas. Visa haldab suletud ja omandiõigusega süsteemi, kus kliendid ei saa iseseisvalt midagi kontrollida.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Bitcoini ei saa ükski keskvõim külmutada. Visa võib kontosid külmutada, tehinguid blokeerida või teenuse osutamisest igal ajal keelduda.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin on lõplik arveldus — kulutad ainult seda, mis sul on. Krediitkaardid tekitavad võlga intressimääradega, mis sageli ületavad 25 % aastas.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin võimaldab sul üle minna",
	"bitcoin-vs-visa::point_6_summary_2": "iseenda hoidmisele",
	"bitcoin-vs-visa::point_6_summary_3":
		" ilma panga või makseprotsessorita. Krediitkaardid nõuavad alati vahendajaid.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin töötab 24/7 globaalselt ilma lahtiolekuaegadeta. Visa-l on tegevusajad, hooldusaknad ja geograafilised piirangud, mis võivad tehinguid blokeerida.",
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
			const ns = e.namespace;
			if (
				ns === "404" ||
				ns === "about" ||
				ns === "bank-runs" ||
				ns.startsWith("bitcoin-vs-")
			) {
				missing++;
				missingKeys.push(lookupKey);
			}
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-rest-part1 (et): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
