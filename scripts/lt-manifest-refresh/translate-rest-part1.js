#!/usr/bin/env node
/**
 * Lithuanian (lt) manifest refresh — part 1 of non-inflation namespaces.
 * Covers: 404, about, bank-runs, bitcoin-vs-* (all 10 comparison pages).
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
	"lt.json",
);

const T = {};

/* ─────────────── 404 ─────────────── */
Object.assign(T, {
	"404::404_home": "Grįžti į pradžią",
	"404::404_message":
		"Bitcoin yra puikus, bet šis puslapis neveikia.",
	"404::404_not_found_short": "Nerasta",
});

/* ─────────────── about ─────────────── */
Object.assign(T, {
	"about::about_business_blurb":
		"Mažoms įmonėms suteikiame nemokamus verslo įrankius, kad joms būtų lengviau pradėti priimti Bitcoin mokėjimus. Mūsų puslapis „Bitcoin verslui“ paaiškina, kodėl Bitcoin yra naudingas verslui, kaip pasirinkti piniginę bei mokėjimų procesorių, ir siūlo nemokamus „Bitcoin Accepted Here“ lipdukus.",
	"about::about_card_business_label": "Verslo įrankiai",
	"about::about_card_business_source": "Šaltinis: bitcoin.rocks ←",
	"about::about_card_business_title":
		"Viskas, ko verslui reikia Bitcoin mokėjimams priimti",
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_source": "Šaltinis: GitHub ←",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_contribute_label": "Prisidėkite",
	"about::about_card_contribute_source": "Šaltinis: GitHub ←",
	"about::about_card_contribute_title":
		"Sužinokite, kaip prisidėti prie bitcoin.rocks",
	"about::about_card_email_label": "El. paštas",
	"about::about_card_email_source": "Šaltinis: el. paštas ←",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_flyers_label": "Spausdinami lankstinukai",
	"about::about_card_flyers_source": "Šaltinis: bitcoin.rocks ←",
	"about::about_card_flyers_title":
		"Atsisiųskite ir atspausdinkite Bitcoin lankstinukus savo bendruomenei",
	"about::about_card_github_label": "Saugykla",
	"about::about_card_github_source": "Šaltinis: GitHub ←",
	"about::about_card_github_title": "Peržiūrėkite bitcoin.rocks GitHub'e",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_source": "Šaltinis: Nostr ←",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_card_stickers_label": "Nemokami lipdukai",
	"about::about_card_stickers_source": "Šaltinis: bitcoin.rocks ←",
	"about::about_card_stickers_title":
		"Užsisakykite nemokamus Bitcoin lipdukus tiesiai į savo namus",
	"about::about_editorial_2":
		"Naudojame oficialius šaltinius: Federal Reserve (FRED), JAV Darbo statistikos biuras, FDIC, Jungtinės Tautos, Pasaulio aukso taryba, Forbes, MIT Technology Review, Lyn Alden ir James Lavish. Tikime, kad, kai faktai pateikiami aiškiai, Bitcoin kalba pats už save.",
	"about::about_flyers_blurb":
		"Kuriame spausdinamus lankstinukus, kuriais galite dalintis renginiuose, klijuoti ant skelbimų lentų ar mesti į pašto dėžutes — tai paprastas būdas pažadinti susidomėjimą ir nukreipti žmones į bitcoin.rocks, kad sužinotų daugiau.",
	"about::about_header": "Apie projektą bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_mission_1a": "sukūrė bitcoin.rocks",
	"about::about_mission_1b":
		"vartotojas pradėjo 2022 m. su paprasta misija: pagreitinti Bitcoin priėmimą per švietimą.",
	"about::about_open_source_2":
		"bitcoin.rocks yra nemokamas atvirojo kodo projektas pagal MIT licenciją. Visi yra kviečiami prisidėti. Ypač ieškome vertėjų, kurie galėtų padaryti mūsų turinį prieinamą žmonėms visame pasaulyje.",
	"about::about_open_source_header": "Atvirasis kodas",
	"about::about_page_description":
		"bitcoin.rocks yra nemokama atvirojo kodo Bitcoin švietimo svetainė, sukurta 2022 m. Mūsų misija — pagreitinti Bitcoin priėmimą per švietimą.",
	"about::about_stickers_blurb":
		"Siunčiame nemokamus Bitcoin lipdukus tiesiai į jūsų namus, kad padėtume skleisti žinią apie Bitcoin jūsų bendruomenėje. Šimtai žmonių kas mėnesį skenuoja QR kodus ant šių lipdukų, kad sužinotų daugiau apie Bitcoin.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin negali patirti banko bėgimo",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin yra visiško rezervo sistema. Jūs nelaikote pinigų banke. Jūs esate savo paties bankas. Jūsų pinigai niekam neskolinami be jūsų žinios; tik jūs turite prieigą.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Kol laikote savo Bitcoin savo piniginėje — o ne biržoje ar ETF — banko bėgimas yra neįmanomas.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Su Bitcoin jūs turite tikrą savo pinigų kontrolę.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Nuo 2020 m. kovo 26 d. JAV bankai neprivalo turėti jokių privalomųjų rezervų.",
	"bank-runs::bank_runs_card_bank_reserve_label":
		"Banko rezervo santykis",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Šaltinis: Federal Reserve ←",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Visiško rezervo sistema — indėlių draudimas nereikalingas.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bitcoin draudimas",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Šaltinis: Bitcoin baltoji knyga ←",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Kiekvienas Bitcoin yra blockchain'e — niekas neskolinama.",
	"bank-runs::bank_runs_card_btc_reserve_label":
		"Bitcoin rezervo santykis",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Šaltinis: Bitcoin baltoji knyga ←",
	"bank-runs::bank_runs_card_fdic_detail":
		"153,9 mlrd. USD draudimo fondas, palyginti su 10,82 trln. USD apdraustų indėlių (2025 m. gruodis).",
	"bank-runs::bank_runs_card_fdic_label": "FDIC draudimas",
	"bank-runs::bank_runs_card_fdic_source":
		"Šaltinis: FDIC Statistics at a Glance ←",
	"bank-runs::bank_runs_card_fdic_value": "1,42 %",
	"bank-runs::bank_runs_card_svb_label": "Atvejo studija",
	"bank-runs::bank_runs_card_svb_source":
		"Šaltinis: University of Washington School of Law ←",
	"bank-runs::bank_runs_card_svb_title":
		"Pažiūrėkite, kaip įvyko Silicon Valley Bank bėgimas",
	"bank-runs::bank_runs_card_wallet_label": "Kitas žingsnis",
	"bank-runs::bank_runs_card_wallet_source": "Pradėkite čia ←",
	"bank-runs::bank_runs_card_wallet_title":
		"Sužinokite, kaip įsigyti savo Bitcoin piniginę",
	"bank-runs::bank_runs_fdic_heading":
		"FDIC draudimas padengia tik apie 1 % indėlių",
	"bank-runs::bank_runs_fdic_p1":
		"FDIC draudimas saugo indėlius iki 250 000 USD vienam indėlininkui. Tačiau draudimo fondas yra labai mažas, palyginti su visais indėliais, kuriuos jis turėtų apsaugoti.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Masinio bankų žlugimo atveju vyriausybė tikriausiai atspausdintų daugiau pinigų skirtumui padengti — o tai sukeltų",
	"bank-runs::bank_runs_fdic_p2_link": "infliaciją.",
	"bank-runs::bank_runs_header":
		"Bitcoin negali patirti banko bėgimo, bet jūsų bankas gali.",
	"bank-runs::bank_runs_page_description":
		"Bankai skolina jūsų indėlius pagal dalinio rezervo bankininkystę. Jei daugelis žmonių vienu metu bandys atsiimti savo pinigus, bankai gali žlugti. Bitcoin yra visiško rezervo sistema — banko bėgimas neįmanomas.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: realus pavyzdys",
	"bank-runs::bank_runs_svb_p1_a":
		"2023 m. kovą Silicon Valley Bank žlugo po to, kai",
	"bank-runs::bank_runs_svb_p1_b":
		"Kai šios obligacijos prarado vertę, SVB negalėjo padengti atsiimamų lėšų. Bankas tapo nemokus.",
	"bank-runs::bank_runs_svb_p1_link":
		"klientų indėlius investavo į ilgalaikes vyriausybines obligacijas.",
	"bank-runs::bank_runs_svb_p2":
		"Tūkstančiai įmonių negalėjo išmokėti atlyginimų darbuotojams. FDIC įsikišo — bet liko didelis klausimas: ar jūsų pinigai tikrai saugūs?",
	"bank-runs::bank_runs_what_p1":
		"Bankai jūsų indėlių nesaugo seife. Jie skolina ir investuoja jūsų pinigus — tai vadinama dalinio rezervo bankininkyste.",
	"bank-runs::bank_runs_what_p2":
		"Kai daugelis žmonių vienu metu bando atsiimti savo pinigus, bankas neturi pakankamai grynųjų visiems. Tai yra banko bėgimas — ir jis gali sukelti visišką banko žlugimą.",
});

/* ─────────────── bitcoin-vs-banks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-banks::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">bankų</span>",
	"bitcoin-vs-banks::point_1_summary_1":
		"Bitcoin gali naudotis kiekvienas, turintis interneto ryšį — ",
	"bitcoin-vs-banks::point_1_summary_2": "leidimo prašyti nereikia.",
	"bitcoin-vs-banks::point_1_summary_3":
		"Bankai gali atsisakyti atidaryti sąskaitą, ją įšaldyti arba uždaryti pagal vidaus politiką ar valstybės nurodymus.",
	"bitcoin-vs-banks::point_2_summary_1":
		"Bitcoin tinklas veikia 24/7/365 be techninės priežiūros langų ir švenčių. Bankai turi ribotas darbo valandas, uždaromi savaitgaliais ir patiria veiklos sutrikimų.",
	"bitcoin-vs-banks::point_3_summary_1":
		"Kiekviena Bitcoin transakcija yra viešame blockchain'e, kurį gali patikrinti bet kas. Bankai turi privačias knygas, kurių klientai negali savarankiškai audituoti.",
	"bitcoin-vs-banks::point_4_summary_1":
		"Su Bitcoin jūs patys laikote savo privačius raktus — pažiūrėkite mūsų ",
	"bitcoin-vs-banks::point_4_summary_2": "paprastą Bitcoin piniginių vadovą",
	"bitcoin-vs-banks::point_4_summary_3":
		". Bankai laiko jūsų pinigus ir bet kada gali juos įšaldyti, apriboti ar užrakinti.",
	"bitcoin-vs-banks::point_5_summary_1":
		"Bitcoin transakcijų mokesčiai yra skaidrūs ir neprivalomi. Bankai kaupia paslėptus mokesčius už sąskaitos tvarkymą, perviršį, pavedimus ir bankomatus.",
	"bitcoin-vs-banks::point_6_summary_1":
		"Su Bitcoin galite išleisti tik tai, ką iš tikrųjų turite. Bankai patvirtina perviršius ir tada apmokestina jus mokesčiais.",
	"bitcoin-vs-banks::point_7_summary_1":
		"Bitcoin transakcijų negalima sustabdyti ar atšaukti, kai jos išsiunčiamos. Bankai gali blokuoti, įšaldyti ar atšaukti transakcijas pagal vidaus politiką ar valstybės nurodymus.",
});

/* ─────────────── bitcoin-vs-bonds ─────────────── */
Object.assign(T, {
	"bitcoin-vs-bonds::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">obligacijų</span>",
	"bitcoin-vs-bonds::point_1_summary_1":
		"Obligacijos yra „be rizikos“ tik popieriuje — infliacija, palūkanų normų pokyčiai ir įsipareigojimų nevykdymo rizika ardo realią grąžą.",
	"bitcoin-vs-bonds::point_1_summary_2":
		"Bitcoin svyravimas yra skaidrus, bet nėra paslėptos sandorio šalies rizikos.",
	"bitcoin-vs-bonds::point_2_summary_1": "Kai ",
	"bitcoin-vs-bonds::point_2_summary_2": "infliacija",
	"bitcoin-vs-bonds::point_2_summary_3":
		" yra didesnė už obligacijų pajamingumą, obligacijų savininkai kasmet praranda realią perkamąją galią. 21 milijono Bitcoin riba negali būti sumažinta infliacijos.",
	"bitcoin-vs-bonds::point_3_summary_1":
		"Obligacijų rinkos krizėje gali užšalti — Silicon Valley Bank žlugo iš dalies dėl to, kad turėjo obligacijas, kurios prarado vertę. Pažiūrėkite, kaip vyksta ",
	"bitcoin-vs-bonds::point_3_summary_2": "banko bėgimai",
	"bitcoin-vs-bonds::point_3_summary_3":
		" ir kodėl Bitcoin išvengia jų likimo. Bitcoin veikia 24/7 pasauliniu mastu, be likvidumo krizių.",
	"bitcoin-vs-bonds::point_4_summary_1":
		"Vyriausybės obligacijų aukcionai gali žlugti, jei nepakanka pirkėjų — pažiūrėkite ",
	"bitcoin-vs-bonds::point_4_summary_2": "silpną 2022 m. aukcioną",
	"bitcoin-vs-bonds::point_4_summary_3":
		"Bitcoin kaina nuolat aiškėja pasaulinėse atvirose rinkose, be centrinių aukcionų, kurie galėtų žlugti.",
	"bitcoin-vs-bonds::point_5_summary_1":
		"Obligacijų pajamingumas nustatomas pirkimo metu. Nepaisant to, ar ekonomika auga, ar valiuta žlunga, jūsų grąža išlieka ta pati.",
	"bitcoin-vs-bonds::point_5_summary_2":
		"Bitcoin turi reikšmingą augimo potencialą, nes augant priėmimui paklausa susiduria su fiksuota pasiūla.",
	"bitcoin-vs-bonds::point_6_summary_1":
		"Dauguma obligacijų laikoma per bankus ar brokerius, o tai prideda sandorio šalies rizikos. Bitcoin galima laikyti ",
	"bitcoin-vs-bonds::point_6_summary_2": "savarankiškoje saugykloje",
	"bitcoin-vs-bonds::point_6_summary_3":
		" — tai visiškai pašalina šią riziką.",
	"bitcoin-vs-bonds::point_7_summary_1":
		"Obligacijos visiškai priklauso nuo to, ar vyriausybės grąžins savo skolas. Jei vyriausybė bankrutuoja arba skolą pašalina infliacija, obligacijų savininkai praranda.",
	"bitcoin-vs-bonds::point_7_summary_2":
		"Bitcoin veikia nepriklausomai nuo bet kurios vyriausybės ar politinės jėgos.",
});

/* ─────────────── bitcoin-vs-cash ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cash::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">grynųjų</span>",
	"bitcoin-vs-cash::point_1_summary_1":
		"Bitcoin per kelias minutes juda visame pasaulyje per internetą. Grynieji reikalauja fizinio buvimo arba patikimų kurjerių — banknotų el. paštu išsiųsti negalima.",
	"bitcoin-vs-cash::point_2_summary_1":
		"Bitcoin visur veikia vienodai. Grynuosius riboja geografija, valiutų kursai ir vietinis priėmimas.",
	"bitcoin-vs-cash::point_3_summary_1":
		"Vyriausybės gali per naktį demonetizuoti grynuosius — <a class=\"body-link\" href=\"https://en.wikipedia.org/wiki/2016_Indian_banknote_demonetisation\" target=\"_blank\" rel=\"noopener noreferrer\">Indija</a> tai padarė 2016 m. Bet net ir be demonetizavimo grynieji praranda vertę dėl",
	"bitcoin-vs-cash::point_3_summary_2": "infliacijos",
	"bitcoin-vs-cash::point_3_summary_3":
		". Jokia vyriausybė ar jėga negali demonetizuoti Bitcoin.",
	"bitcoin-vs-cash::point_4_summary_1":
		"Grynieji gali būti suklastoti, kartais labai tiksliai. Bitcoin naudoja kriptografiją ir padaro klastojimą matematiškai neįmanomą.",
	"bitcoin-vs-cash::point_5_summary_1":
		"Bitcoin neturi centrinės valdžios. Grynuosius išleidžia vyriausybės, kurios gali atspausdinti daugiau, keisti dizainą ar atšaukti banknotus, kada tik nori.",
	"bitcoin-vs-cash::point_6_summary_1":
		"Grynieji yra pažeidžiami vagystėms, gaisrui, praradimui ir konfiskavimui. Bitcoin galima ",
	"bitcoin-vs-cash::point_6_summary_2": "saugiai laikyti savarankiškoje saugykloje",
	"bitcoin-vs-cash::point_6_summary_3":
		" jūsų telefone arba aparatinėje piniginėje.",
	"bitcoin-vs-cash::point_7_summary_1":
		"Bitcoin gali būti padalintas į 100 milijonų satoshių, kas leidžia atlikti bet kokio dydžio mikromokėjimus. Grynieji turi minimalią valiutą — banknoto perpus padalinti negalima.",
});

/* ─────────────── bitcoin-vs-cbdc ─────────────── */
Object.assign(T, {
	"bitcoin-vs-cbdc::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">centrinių bankų skaitmeninių valiutų (CBDC)</span>",
	"bitcoin-vs-cbdc::point_1_summary_1":
		"Niekas negali sustabdyti jūsų atlikti Bitcoin transakciją. CBDC yra sukurti taip, kad vyriausybės ir centriniai bankai kontroliuotų kiekvieną mokėjimą, ribodami jūsų privatumą ir laisvę.",
	"bitcoin-vs-cbdc::point_2_summary_1":
		"Bitcoin niekada nesibaigia ir neturi mėnesinių mokesčių. CBDC gali būti suprogramuoti taip, kad baigtųsi galiojimo terminas, o tai užkerta kelią taupymui ateičiai.",
	"bitcoin-vs-cbdc::point_3_summary_1":
		"Bitcoin turi fiksuotą 21 milijono BTC ribą. CBDC neturi pasiūlos ribos ir leidžia vyriausybėms didinti pinigų pasiūlą savo nuožiūra — o tai sukelia",
	"bitcoin-vs-cbdc::point_3_summary_2": "infliaciją.",
	"bitcoin-vs-cbdc::point_4_summary_1":
		"Bitcoin adresai nėra susieti su jūsų tikrąja tapatybe. CBDC yra tiesiogiai susieti su vyriausybės identifikuotais asmenimis, o tai įgalina masinį stebėjimą ir finansinę cenzūrą.",
	"bitcoin-vs-cbdc::point_5_summary_1":
		"Bitcoin taisykles valdo tūkstančiai nepriklausomų mazgų. CBDC yra centralizuoti vyriausybėse ir centriniuose bankuose, kurie turi visišką tinklo kontrolę.",
	"bitcoin-vs-cbdc::point_6_summary_1":
		"Kiekvienas gali paleisti Bitcoin mazgą ir patikrinti tinklo taisykles. CBDC neleidžia vartotojams paleisti mazgų — turite pasitikėti centrine valdžia.",
	"bitcoin-vs-cbdc::point_7_summary_1":
		"Bitcoin, laikomas savarankiškoje saugykloje, negali būti įšaldytas. CBDC yra sukurti taip, kad vyriausybės ir centriniai bankai galėtų akimirksniu įšaldyti sąskaitas.",
	"bitcoin-vs-cbdc::point_8_summary_1":
		"Bitcoin suteikia jums visišką pinigų kontrolę, jei laikote juos savo ",
	"bitcoin-vs-cbdc::point_8_summary_2": "piniginėje",
	"bitcoin-vs-cbdc::point_8_summary_3":
		". CBDC reikalauja, kad pasitikėtumėte saugotojais, tokiais kaip bankai ar vyriausybės, kurie laiko pinigus už jus.",
	"bitcoin-vs-cbdc::point_9_summary_1":
		"Bitcoin pinigų politika yra įdiegta į kodą ir negali būti keičiama. CBDC galima perprogramuoti pagal politikų užgaidas, o tai sukelia",
	"bitcoin-vs-cbdc::point_9_summary_2": "infliaciją",
	"bitcoin-vs-cbdc::point_9_summary_3":
		", jei spausdinama per daug pinigų.",
	"bitcoin-vs-cbdc::point_10_summary_1":
		"Bitcoin yra saugiausias kompiuterių tinklas, kada nors sukurtas, ir niekada nebuvo nulaužtas. CBDC priklauso nuo bankų ir vyriausybių, kurie buvo nulaužti nesuskaičiuojamą kartų skaičių.",
	"bitcoin-vs-cbdc::cbdc": "CBDC",
});

/* ─────────────── bitcoin-vs-crypto ─────────────── */
Object.assign(T, {
	"bitcoin-vs-crypto::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">kriptovaliutų</span>",
	"bitcoin-vs-crypto::point_1_summary_1":
		"Bitcoin protokolas beveik nepasikeitė nuo 2009 m. ir užtikrina nuspėjamas taisykles. Dauguma kripto projektų reguliariai keičia protokolą, tokenomiką arba šakojasi į naujas versijas.",
	"bitcoin-vs-crypto::point_2_summary_1":
		"Bitcoin veikia tūkstančiuose nepriklausomų mazgų visame pasaulyje. Daugumą kripto projektų kontroliuoja fondai, įmonės ar mažos kūrėjų komandos, kurios gali vienašališkai įgyvendinti pakeitimus.",
	"bitcoin-vs-crypto::point_3_summary_1":
		"Bitcoin turi fiksuotą 21 milijono ribą — tai retiausias skaitmeninis turtas. Dauguma kripto projektų turi neribotą pasiūlą arba mechanizmus, leidžiančius savavališkai kurti naujus tokenus, kurie atskiedžia savininkus.",
	"bitcoin-vs-crypto::point_4_summary_1":
		"Bitcoin turi vieną tikslą: vienas-su-vienu skaitmeninius pinigus. Visi jį supranta, visi gali jį naudoti. Dauguma kripto projektų apima sudėtingas išmaniąsias sutartis arba DeFi, kuriems saugiai naudoti reikia ekspertinių techninių žinių.",
	"bitcoin-vs-crypto::point_5_summary_1":
		"Bitcoin darbo įrodymo sistema sėkmingai veikia jau 15 metų be nė vienos sėkmingos atakos pagrindinėje grandinėje. Dauguma kripto projektų naudoja eksperimentinius konsensuso metodus, kurie nebuvo griežtai išbandyti.",
	"bitcoin-vs-crypto::point_6_summary_1":
		"Bitcoin yra skaitmeniniai pinigai — vertės saugykla ir mainų priemonė. Dauguma kripto tokenų yra spekuliatyvūs, paslaugų ar valdymo tokenai be aiškios realios vertės.",
	"bitcoin-vs-crypto::point_7_summary_1":
		"Bitcoin tvirtai atlaikė atakas ir išgyveno kiekvieną krizę, draudimą ir kritiką. Dauguma kripto projektų žlunga dėl reguliavimo, techninio ar rinkos spaudimo.",
	"bitcoin-vs-crypto::point_8_summary_1":
		"Bitcoin neturi vadovo, įmonės ar vieno gedimo taško. Dauguma kripto projektų priklauso nuo rizikos kapitalo investuotojų, identifikuotų vadovavimo komandų arba nuo vienos įmonės egzistavimo.",
});

/* ─────────────── bitcoin-vs-fine-art ─────────────── */
Object.assign(T, {
	"bitcoin-vs-fine-art::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">dailės</span>",
	"bitcoin-vs-fine-art::point_1_summary_1":
		"Kiekvienas Bitcoin yra lygiavertis ir pakeičiamas. Kiekvienas meno kūrinys yra unikalus — kilmė, istorija, būklė ir autentiškumas skiriasi, todėl tiesioginis palyginimas yra labai sunkus.",
	"bitcoin-vs-fine-art::point_2_summary_1":
		"Bitcoin parduodamas pasaulinėje 24/7 rinkoje ir prieinamas visiems. Menas reikalauja aukcionų namų, privačių prekybininkų ar specializuotų galerijų, o pardavimas gali užtrukti mėnesiais.",
	"bitcoin-vs-fine-art::point_3_summary_1":
		"Bitcoin pirkimas ar pardavimas kainuoja mažiau nei 1 % mokesčių, dažnai gerokai mažiau. Meno pardavimas kaupia 30–40 % mokesčių pirkėjams per aukcionų komisinius, draudimą, transportavimą ir autentifikavimo išlaidas.",
	"bitcoin-vs-fine-art::point_4_summary_1":
		"Bitcoin gali būti padalintas į 100 milijonų satoshių ir puikiai tinka bet kokio dydžio sandoriams. Negalite turėti paveikslo dalies ar skulptūros kampo be sandorio šalies rizikos.",
	"bitcoin-vs-fine-art::point_5_summary_1":
		"Bitcoin nuosavybę ir autentiškumą kiekvienas gali kriptografiškai patikrinti blockchain'e. Meno autentifikavimas yra brangus ir lėtas, o klastotojai reguliariai apgaudinėja rinką — meno vertė gali per naktį išnykti.",
	"bitcoin-vs-fine-art::point_6_summary_1":
		"Gerai laikomas Bitcoin išgyvena potvynius, gaisrus, žemės drebėjimus ir vagystes. Menas yra pažeidžiamas bet kokiai fizinei nelaimei, o draudimas retai padengia viską.",
	"bitcoin-vs-fine-art::point_7_summary_1":
		"Bitcoin gali nusipirkti bet kas, turintis interneto ryšį ir šiek tiek pinigų. Investavimas į meną praktiškai apsiriboja turtingais kolekcionieriais, turinčiais prieigą prie aukcionų ir ekspertinių žinių.",
});

/* ─────────────── bitcoin-vs-gold ─────────────── */
Object.assign(T, {
	"bitcoin-vs-gold::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">aukso</span>",
	"bitcoin-vs-gold::point_1_summary_1":
		"Bitcoin galima akimirksniu išsiųsti per internetą už mažus mokesčius. Auksas turi būti fiziškai gabenamas, kad pakeistų savininką.",
	"bitcoin-vs-gold::point_2_summary_1":
		"Bitcoin yra iš prigimties skaitmeninis turtas, kurį galima perduoti per internetą. Auksas internete yra tik skaitmeninis įsipareigojimas — jūs turite tik saugotojo pažadą, o ne metalą.",
	"bitcoin-vs-gold::point_3_summary_1":
		"Bitcoin turi fiksuotą 21 milijono BTC ribą. Aukso pasiūla <a class=\"body-link\" href=\"https://www.gold.org/goldhub/data/gold-supply-and-demand-statistics\" target=\"_blank\" rel=\"noopener noreferrer\">auga apie 1,6 % per metus</a> ir mažina jūsų pyrago dalį — mažiau nei fiat",
	"bitcoin-vs-gold::point_3_summary_2": "infliacija",
	"bitcoin-vs-gold::point_3_summary_3":
		", bet vis tiek infliacija.",
	"bitcoin-vs-gold::point_4_summary_1":
		"Kai aukso kaina kyla, daugiau aukso išgaunama iš rūdos ir kaina vėl krenta. Bitcoin pasiūla yra neelastinga — nesvarbu, kiek kaina kyla, jų visada bus tik 21 milijonas.",
	"bitcoin-vs-gold::point_5_summary_1":
		"Bitcoin tinklą kontroliuoja tūkstančiai nepriklausomų mazgų. Dauguma fizinio aukso saugomi keliuose dideliuose seifuose.",
	"bitcoin-vs-gold::point_6_summary_1":
		"Kiekvienas gali patikrinti Bitcoin autentiškumą paleisdamas pilną mazgą — tai tiesiog programa. Fizinio aukso patikrinimas reikalauja jį išlydyti; viduje gali būti volframas.",
	"bitcoin-vs-gold::point_7_summary_1":
		"Bitcoin gali būti padalintas į 100 milijonų satoshių ir puikiai tinka bet kokio dydžio pirkimams. Auksas negali būti lengvai padalintas mažoms transakcijoms.",
});

/* ─────────────── bitcoin-vs-real-estate ─────────────── */
Object.assign(T, {
	"bitcoin-vs-real-estate::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">nekilnojamojo turto</span>",
	"bitcoin-vs-real-estate::point_1_summary_1":
		"Bitcoin akimirksniu juda pasauliniu mastu. Nekilnojamasis turtas yra susietas su konkrečia vieta ir patiria ekonomines, politines bei aplinkos rizikas.",
	"bitcoin-vs-real-estate::point_2_summary_1":
		"Bitcoin gali būti padalintas į 100 milijonų satoshių. Nekilnojamasis turtas negali būti parduotas iš dalies — negalite parduoti virtuvės ar nusipirkti pusės miegamojo.",
	"bitcoin-vs-real-estate::point_3_summary_1":
		"Bitcoin veikia decentralizuotame tinkle, kurio negali kontroliuoti jokia vyriausybė. Nekilnojamasis turtas yra griežtai reguliuojamas — taikomas zonavimas, nuomos kontrolė, priverstinis išpirkimas ir konfiskavimas.",
	"bitcoin-vs-real-estate::point_4_summary_1":
		"Bitcoin nereikia priežiūros. Nekilnojamasis turtas reikalauja remontų, atnaujinimų, draudimo, nekilnojamojo turto valdymo ir nuomininkų problemų sprendimo.",
	"bitcoin-vs-real-estate::point_5_summary_1":
		"Bitcoin neturi pasikartojančių mokesčių — kapitalo prieaugio mokestis mokamas tik pardavus. Nekilnojamasis turtas reikalauja metinio nekilnojamojo turto mokesčio, nepriklausomai nuo pajamų.",
	"bitcoin-vs-real-estate::point_6_summary_1":
		"Gerai laikomas Bitcoin išgyvena gaisrus, potvynius ir žemės drebėjimus. Nekilnojamasis turtas yra pažeidžiamas bet kokiai nelaimei, o draudimas retai padengia viską.",
	"bitcoin-vs-real-estate::point_7_summary_1":
		"Kiekvienas Bitcoin yra lygiavertis ir pakeičiamas. Kiekvienas nekilnojamasis turtas yra unikalus, todėl sunku nustatyti kainą ir palyginti.",
	"bitcoin-vs-real-estate::point_8_summary_1":
		"Bitcoin parduodamas 24/7 pasauliniu mastu kiekvienam asmeniui, turinčiam interneto ryšį. Nekilnojamojo turto pardavimas apsiriboja vietiniais pirkėjais, o sandorio užbaigimas gali užtrukti mėnesiais.",
	"bitcoin-vs-real-estate::point_9_summary_1":
		"Bitcoin suteikia kiekvienam asmeniui tiesioginę nuosavybę. Nekilnojamojo turto pirkimas kaip investicija, o ne kaip pagrindiniai namai, kelia būsto kainas, mažina prieinamumą ir sukelia būsto krizę.",
});

/* ─────────────── bitcoin-vs-stocks ─────────────── */
Object.assign(T, {
	"bitcoin-vs-stocks::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">akcijų</span>",
	"bitcoin-vs-stocks::point_1_summary_1":
		"Bitcoin yra tiesioginis turtas, kurį visiškai turite. Akcija yra įmonės dalis — jos vertė priklauso nuo vadovybės, pelningumo ir sprendimų, kurių jūs nekontroliuojate.",
	"bitcoin-vs-stocks::point_2_summary_1":
		"Bitcoin turi fiksuotą 21 milijono BTC ribą. Įmonės bet kuriuo metu gali išleisti naujų akcijų ir atskiesti esamus savininkus — kaip fiat valiuta atskiedžia grynuosius per",
	"bitcoin-vs-stocks::point_2_summary_2": "infliaciją",
	"bitcoin-vs-stocks::point_2_summary_3":
		". Su Bitcoin jūsų dalis niekada nemažėja.",
	"bitcoin-vs-stocks::point_3_summary_1":
		"Bitcoin neturi vadovo ar vieno gedimo taško. Akcijos labai priklauso nuo vadovybės — vienas neteisingas sprendimas ar pagrindinio asmens išėjimas gali nuversti kainą.",
	"bitcoin-vs-stocks::point_4_summary_1":
		"Bitcoin kaina formuojasi pasaulinėse atvirose rinkose. Akcijų vertinimas remiasi rodikliais, tokiais kaip P/E, kurie gali nuslėpti pervertintas akcijas.",
	"bitcoin-vs-stocks::point_5_summary_1":
		"Bitcoin parduodamas 24/7 pasauliniu mastu. Akcijų biržos atviros tik darbo dienomis ir tam tikromis valandomis.",
	"bitcoin-vs-stocks::point_6_summary_1":
		"Su Bitcoin galite pereiti į ",
	"bitcoin-vs-stocks::point_6_summary_2": "savarankišką saugyklą",
	"bitcoin-vs-stocks::point_6_summary_3":
		" naudodamiesi paprasta programa — be tarpininkų. Akcijas laiko brokeriai, ir jūs susiduriate su sandorio šalies rizika, jei jie žlunga.",
	"bitcoin-vs-stocks::point_7_summary_1":
		"Fiksuota Bitcoin pasiūla patikimai apsaugo nuo infliacijos. Kai kurios akcijos viršija infliaciją, kitos ne — garantijų nėra.",
});

/* ─────────────── bitcoin-vs-visa ─────────────── */
Object.assign(T, {
	"bitcoin-vs-visa::hero_title":
		"Skirtumas tarp <span class=\"orange\">Bitcoin</span> ir <span class=\"asset\">Visa</span>",
	"bitcoin-vs-visa::point_1_summary_1":
		"Bitcoin yra atviras tinklas, prie kurio kiekvienas gali prisijungti be leidimo. Visa yra uždara sistema, kontroliuojama finansinių institucijų, kurios gali atsisakyti suteikti prieigą — ypač tiems, kurie neturi banko sąskaitos arba turi ribotą prieigą prie bankų.",
	"bitcoin-vs-visa::point_2_summary_1":
		"Bitcoin transakcijos neturi prekybininkų mokesčių. Visa apmokestina prekybininkus apie 3 % už transakciją — jūsų verslas gali sutaupyti pinigų",
	"bitcoin-vs-visa::point_2_summary_2": "priimdamas Bitcoin mokėjimus",
	"bitcoin-vs-visa::point_2_summary_3": ".",
	"bitcoin-vs-visa::point_3_summary_1":
		"Kiekviena Bitcoin transakcija yra viešame blockchain'e ir gali būti patikrinta. Visa valdo uždarą, išskirtinę sistemą, kurios klientai negali savarankiškai audituoti.",
	"bitcoin-vs-visa::point_4_summary_1":
		"Jokia centrinė valdžia negali įšaldyti Bitcoin. Visa bet kada gali įšaldyti sąskaitas, blokuoti transakcijas ar atsisakyti suteikti paslaugą.",
	"bitcoin-vs-visa::point_5_summary_1":
		"Bitcoin yra galutinis atsiskaitymas — išleidžiate tik tai, ką turite. Kreditinės kortelės sukuria skolą, kurios palūkanos viršija 25 % per metus.",
	"bitcoin-vs-visa::point_6_summary_1": "Bitcoin leidžia jums ",
	"bitcoin-vs-visa::point_6_summary_2": "savarankišką saugyklą",
	"bitcoin-vs-visa::point_6_summary_3":
		" be bankų ar mokėjimų procesorių. Kreditinės kortelės visada reikalauja tarpininkų.",
	"bitcoin-vs-visa::point_7_summary_1":
		"Bitcoin veikia 24/7 pasauliniu mastu be darbo valandų. Visa turi darbo valandas, techninės priežiūros langus ir geografines ribas, kurios gali blokuoti transakcijas.",
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
		`translate-rest-part1 (lt): filled ${filled}, already-done ${skipped}`,
	);
	if (missing > 0) {
		console.log(`\nStill missing in part1 namespaces (${missing}):`);
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
