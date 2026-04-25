#!/usr/bin/env node
/**
 * Lithuanian (lt) manifest refresh — part 2 of non-inflation namespaces.
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
	"lt.json",
);

const T = {};

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli apskaitos paslaugos",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 USD",
	"business/accounting::accounting_example_loss_result": "−10 USD",
	"business/accounting::accounting_description":
		"Paprastas Bitcoin mokėjimų apskaitos vadovas — hibridinės piniginės, įsigijimo savikaina, kapitalo prieaugis ir kada kalbėti su savo apskaitininku.",
	"business/accounting::accounting_s1_c1":
		"Lengviausias būdas priimti Bitcoin yra naudoti hibridinę piniginę: ji automatiškai konvertuoja 100 % gauto Bitcoin į dolerius (arba jūsų vietinę valiutą), kai tik gaunamas mokėjimas.",
	"business/accounting::accounting_s1_c2":
		"Su tokia sąranka jūsų apskaita atrodo taip pat kaip ir šiandien — galutinis dydis visada doleriais. Be įsigijimo savikainos, be kapitalo prieaugio, be naujos lentelės.",
	"business/accounting::accounting_s2":
		"Jei laikote dalį Bitcoin: sekite savo įsigijimo savikainą",
	"business/accounting::accounting_s2_c1":
		"Kai kurios įmonės nusprendžia laikyti dalį gauto Bitcoin, o ne automatiškai viską konvertuoti. Jei esate viena iš jų, papildomas žingsnis yra įsigijimo savikainos sekimas — kiekvieno Bitcoin mokėjimo vertė doleriais tą dieną, kai jį gavote.",
	"business/accounting::accounting_s2_c2":
		"Net jei savo verslą matuojate tik Bitcoin, dauguma mokesčių institucijų vis dar reikalauja ataskaitas teikti dolerine verte. Geros naujienos: kiekvienai transakcijai yra tik du skaičiai — gauto Bitcoin kiekis ir jo vertė doleriais tą dieną.",
	"business/accounting::accounting_s2_c3":
		"Naudokite toliau pateiktus įrankius, kad automatizuotumėte vertės paiešką ir nereikėtų kasdien tikrinti kainos.",
	"business/accounting::accounting_s3":
		"Laikomo Bitcoin išleidimas ar pardavimas",
	"business/accounting::accounting_s3_c1":
		"Jei kiekvieną mokėjimą automatiškai konvertuojate į dolerius, šią dalį praleiskite — ji jums netaikoma.",
	"business/accounting::accounting_s3_c2":
		"Jei laikėte dalį Bitcoin ir vėliau nusprendžiate jį išleisti ar parduoti, į tą pačią lentelę šalia įsigijimo savikainos pridėkite pardavimo kainą. Skirtumas tarp Bitcoin kainos gavimo metu ir kainos išleidimo ar pardavimo metu yra kapitalo prieaugis arba nuostolis.",
	"business/accounting::accounting_s3_c3": "Du greiti pavyzdžiai:",
	"business/accounting::accounting_s4":
		"Reikia eksperto, kuris suprastų Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Jei verčiau perduotumėte šį darbą kam nors kitam — arba jūsų Bitcoin apskaita yra sudėtingesnė, nei hibridinė piniginė gali pati išspręsti — labai rekomenduojame Satoshi Pacioli Accounting Services, įmonę, kuri specializuojasi Bitcoin apskaitoje verslui.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Bitcoin apskaita jūsų verslui",
	"business/accounting::accounting_card_bpr_label": "Bitcoin kaina",
	"business/accounting::accounting_card_bpr_title":
		"Pažiūrėkite dabartines ar istorines Bitcoin kainas doleriais",
	"business/accounting::accounting_card_pacioli_label":
		"Bitcoin apskaitininkas",
	"business/accounting::accounting_card_spreadsheet_label":
		"Importuokite į Excel",
	"business/accounting::accounting_card_spreadsheet_title":
		"Automatiškai importuokite Bitcoin kainas į Excel",
	"business/accounting::accounting_card_wallets_label":
		"Hibridinės piniginės",
	"business/accounting::accounting_card_wallets_title":
		"Pažiūrėkite mūsų rekomenduojamas piniginės verslui",
	"business/accounting::accounting_disclaimer":
		"Šis vadovas skirtas tik informaciniams tikslams ir nėra mokesčių patarimas. Pasitarkite su kvalifikuotu apskaitininku dėl patarimų jūsų konkrečioje situacijoje.",
	"business/accounting::accounting_disclaimer_label": "Atsakomybės atsisakymas",
	"business/accounting::accounting_example_feb_1": "vasario 1 d.",
	"business/accounting::accounting_example_gain_badge":
		"Kapitalo prieaugis",
	"business/accounting::accounting_example_gain_explain":
		"Užregistruokite 10 USD kapitalo prieaugį.",
	"business/accounting::accounting_example_jan_1": "sausio 1 d.",
	"business/accounting::accounting_example_loss_badge":
		"Kapitalo nuostolis",
	"business/accounting::accounting_example_loss_explain":
		"Užregistruokite 10 USD kapitalo nuostolį.",
	"business/accounting::accounting_example_received_label": "Gauta",
	"business/accounting::accounting_example_sold_label":
		"Parduota arba išleista",
	"business/accounting::accounting_hero_subtitle":
		"Bitcoin priėmimas versle neturi apsunkinti jūsų apskaitos. Štai trumpa apžvalga — ir įrankiai bei ekspertai, kurie tai padaro paprasta.",
	"business/accounting::accounting_intro_c1":
		"Jei jau priimate grynuosius ar korteles, Bitcoin pridėjimas prie verslo apskaitos yra paprastesnis, nei manote. Turite dvi galimybes: automatiškai konvertuoti kiekvieną Bitcoin mokėjimą į dolerius, kai tik jis gaunamas (be naujos apskaitos), arba laikyti dalį Bitcoin (turite sekti kelis papildomus skaičius).",
	"business/accounting::accounting_intro_c2":
		"Šis vadovas paaiškina abu metodus — kad galėtumėte pasirinkti tinkamą savo verslui ir saugiai pradėti priimti Bitcoin.",
	"business/accounting::accounting_s1":
		"Lengvesnis kelias: automatinis konvertavimas į dolerius",
	"business/accounting::accounting_s3_c6":
		"Ir tai viskas. Tai ta pati pagrindinė matematika, kurią naudojate bet kuriam kitam turtui, kurio kaina kyla ir krenta.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — dabartinės ir istorinės Bitcoin kainos doleriais",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Bitcoin apskaita verslui",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — kriptovaliutų kainų importas į Excel",
});

/* ─────────────── business/faq ─────────────── */
Object.assign(T, {
	"business/faq::faq_hero_subtitle":
		"Trumpi atsakymai į klausimus, kuriuos prekybininkai dažniausiai užduoda prieš pradėdami priimti Bitcoin — mokesčiai, atsiskaitymas, piniginės, grąžinimai, išlaidos ir dar daugiau.",
	"business/faq::faq_intro_c1":
		"Spustelėkite bet kurį žemiau esantį klausimą, kad pamatytumėte atsakymą. Kai būsite pasirengę priimti Bitcoin, puslapio apačioje esantys verslo įrankiai jus ves žingsnis po žingsnio.",
});

/* ─────────────── business/index ─────────────── */
Object.assign(T, {
	"business/index::biz_label_accounting": "Apskaita",
	"business/index::biz_label_faq": "Dažniausiai užduodami klausimai",
	"business/index::biz_label_maps": "Prekybininkų žemėlapiai",
	"business/index::biz_label_rewards": "Atlygiai",
	"business/index::biz_label_stickers": "Lipdukai",
	"business/index::biz_label_wallets": "Piniginės",
	"business/index::biz_meta_description":
		"Priimkite Bitcoin savo versle su mažesniais mokesčiais, momentiniu atsiskaitymu, be grąžinimų ir su prieiga prie daugiau klientų.",
	"business/index::business_hero_subtitle":
		"Priimkite mokėjimus su mažesniais mokesčiais, atsiskaitykite akimirksniu ir pasiekite milijonus naujų klientų — be sutarčių ir paslėptų išlaidų.",
	"business/index::business_intro_c1":
		"Bitcoin suteikia jūsų verslui greitą, pigų ir privatų būdą priimti mokėjimus. Be tarpininkų. Be grąžinimų. Be netikėtų išlaidų. Pinigai per kelias sekundes, tiesiai iš kliento jums.",
	"business/index::business_intro_c2":
		"Žemiau yra santrauka, kodėl Bitcoin yra naudingas verslui — o po ja yra visi įrankiai, kurių reikia, kad pradėtumėte jau šiandien.",
	"business/index::business_resources_heading":
		"Viskas, ko reikia Bitcoin priimti",
	"business/index::business_resources_intro":
		"Dirbkite savo tempu su šiais ištekliais. Kiekvienas yra trumpas, praktiškas vadovas.",
});

/* ─────────────── business/maps ─────────────── */
Object.assign(T, {
	"business/maps::biz_maps_form_header":
		"Papasakokite mums šiek tiek apie savo verslą",
	"business/maps::biz_maps_form_intro":
		"Mums reikia tik kelių detalių, kad jus įtrauktume į žemėlapius. Adreso duomenys saugomi tik tiek laiko, kiek reikia, kad jūsų verslą įtrauktume į prekybininkų žemėlapius.",
	"business/maps::biz_maps_hero_subtitle":
		"Pridėkite savo verslą į BTC Map nemokamai — atvirą pasaulinį Bitcoin priimančių prekybininkų katalogą — kad vietiniai Bitcoin vartotojai galėtų jus rasti ir išleisti Bitcoin jūsų versle.",
	"business/maps::biz_maps_hero_title":
		"Įtraukite savo verslą į Bitcoin prekybininkų žemėlapius",
	"business/maps::biz_maps_intro_c1":
		"Bitcoin vartotojai aktyviai ieško vietų, kur galėtų išleisti savo pinigus. Pasirodymas žemėlapyje pristato jūsų verslą kiekvienam Bitcoin vartotojui, ieškančiam vietos pavalgyti, apsipirkti ar apsistoti netoliese — visiškai nemokamai.",
	"business/maps::biz_maps_intro_c2":
		"Užpildykite trumpą formą žemiau, ir mes jūsų verslą įtrauksime į BTC Map ir kitus Bitcoin prekybininkų žemėlapius.",
	"business/maps::biz_maps_meta_description":
		"Pridėkite savo verslą į BTC Map ir kitus Bitcoin prekybininkų žemėlapius nemokamai, kad vietiniai Bitcoin vartotojai galėtų jus rasti.",
	"business/maps::biz_maps_placeholder_address": "Gatvės adresas",
	"business/maps::biz_maps_placeholder_category":
		"Kategorija (pvz., restoranas, kavinė, viešbutis)",
	"business/maps::biz_maps_placeholder_city": "Miestas",
	"business/maps::biz_maps_placeholder_country": "Šalis",
	"business/maps::biz_maps_placeholder_name": "Verslo pavadinimas",
	"business/maps::biz_maps_placeholder_region":
		"Regionas / provincija / valstija",
	"business/maps::biz_maps_placeholder_website": "Svetainė (neprivaloma)",
	"business/maps::biz_maps_view_map_cta": "Peržiūrėkite BTC Map",
});

/* ─────────────── business/maps-success ─────────────── */
Object.assign(T, {
	"business/maps-success::biz_maps_success_btn_view_map": "Peržiūrėkite BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Ačiū, kad pateikėte savo verslą. Greitai įtrauksime jus į Bitcoin prekybininkų žemėlapius.",
	"business/maps-success::biz_maps_success_hero_title":
		"Užklausa gauta 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Įtrauksime jūsų verslą į BTC Map ir kitus Bitcoin prekybininkų katalogus per 1–2 savaites. Kiekvieną pateikimą peržiūrime rankiniu būdu, kad išlaikytume žemėlapio tikslumą.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Kai jūsų sąrašas pradės veikti, vietiniai Bitcoin vartotojai ras jūsų verslą ir ateis išleisti Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Kas toliau",
	"business/maps-success::biz_maps_success_view_c1":
		"Kol laukiate, peržiūrėkite BTC Map ir pamatykite augantį verslo, priimančio Bitcoin visame pasaulyje, tinklą.",
	"business/maps-success::biz_maps_success_view_header":
		"Pažiūrėkite, kur pasirodysite",
});

/* ─────────────── business/sticker-files/english/index ─────────────── */
Object.assign(T, {
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Atsisiųskite anglų kalbos „Bitcoin Accepted Here“ lipdukų failus, kad patys atsispausdintumėte.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"Atsispausdinkite savo „Bitcoin Accepted Here“ lipdukus anglų kalba, kad jūsų klientai žinotų, kad priimate Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Atsisiųskite anglų kalbos „Bitcoin Accepted Here“ lipdukų failus",
});

/* ─────────────── business/sticker-language-success ─────────────── */
Object.assign(T, {
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Ačiū, kad paprašėte „Bitcoin Accepted Here“ lipdukų failų savo kalba.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Užklausa gauta 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Lipdukų failus paruošime ir paskelbsime per artimiausias 3–4 savaites. Kai jie bus paruošti, galėsite juos nemokamai atsisiųsti ir atsispausdinti iš mūsų lipdukų failų puslapio.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Lipdukų failus skelbiame partijomis, todėl gali užtrukti kelias savaites, kol jūsų kalba pradės veikti. Ačiū už kantrybę!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Kas toliau",
});

/* ─────────────── business/sticker-success ─────────────── */
Object.assign(T, {
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Užsisakykite didmenoje",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Užsisakykite dar vieną nemokamą paketą",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Jūsų nemokami „Bitcoin Accepted Here“ lipdukai atvyks per 2–4 savaites paprastame baltame voke su 3 lipdukais.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Jūsų lipdukai jau pakeliui 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Jei 3 lipdukų jūsų verslui nepakanka, galite paprašyti dar vieno nemokamo paketo arba užsisakyti didmenoje iš to paties spaustuvininko, kurį naudojame mes.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Reikia daugiau lipdukų?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Ant pagrindinių durų ar vitrinos, kad klientai pamatytų prieš įeidami",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Šalia kasos, mokėjimo terminalo ar ten, kur klientai moka",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Ant meniu, kainoraščio ar arbatpinigių indelio",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Neklijuokite lipdukų vietose, kurios jums nepriklauso arba kur tai nėra leidžiama",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Geros vietos lipdukams klijuoti",
});

/* ─────────────── business/stickers ─────────────── */
Object.assign(T, {
	"business/stickers::biz_stickers_hero_subtitle":
		"Pasakykite savo klientams, kad priimate Bitcoin. Užsisakykite paketą nemokamų „Bitcoin Accepted Here“ lipdukų savo erdvei.",
	"business/stickers::biz_stickers_hero_title":
		"Nemokami „Bitcoin Accepted Here“ lipdukai",
	"business/stickers::biz_stickers_intro_c1":
		"Bitcoin priėmimas yra tik pusė darbo — jūsų klientai taip pat turi tai žinoti. Šie nedideli „Bitcoin Accepted Here“ lipdukai sukurti, kad juos klijuotumėte ant pagrindinių durų, kasos, meniu ar ten, kur klientai moka.",
	"business/stickers::biz_stickers_intro_c2":
		"Siunčiame nemokamą paketą bet kokiu adresu JAV ar Kanadoje, arba galite patys atsispausdinti lipdukus bet kurioje pasaulio vietoje.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Kanada — nemokamas paštas",
	"business/stickers::biz_stickers_option_print":
		"🌍 Pasauliniu mastu — patys spausdinkite",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 JAV — nemokamas paštas",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Frazės „Bitcoin Accepted Here“ vertimas",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Frazės „Scan to learn why Bitcoin is good for business.“ vertimas",
	"business/stickers::biz_stickers_print_c1":
		"Kad ir kur pasaulyje gyventumėte, galite patys atsispausdinti savo „Bitcoin Accepted Here“ lipdukus. Spustelėkite savo kalbą žemiau, kad atsisiųstumėte lipdukų failus ir spausdinimo instrukcijas.",
	"business/stickers::biz_stickers_print_header":
		"Atsispausdinkite savo lipdukų failus",
	"business/stickers::biz_stickers_request_c1":
		"Užpildykite žemiau esančią formą, kad paprašytumėte „Bitcoin Accepted Here“ lipdukų failų savo vietine kalba. Pranešime, kai jie bus paruošti.",
	"business/stickers::biz_stickers_request_header":
		"Nematote savo kalbos?",
	"business/stickers::biz_stickers_step_description":
		"Siunčiame nemokamus paketus į adresus JAV ir Kanadoje. Likusioje pasaulio dalyje galite patys atsispausdinti lipdukus.",
	"business/stickers::biz_stickers_step_header":
		"Kaip norite gauti lipdukus?",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Visos Bitcoin piniginės veikia kartu — pasirinkite geriausią savo verslui. Nemokama, momentinis atsiskaitymas, be grąžinimų.",
	"business/wallets::sources_breez_business":
		"Breez — Bitcoin Lightning piniginė tik Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — Lightning mokėjimų infrastruktūra",
	"business/wallets::sources_opennode":
		"OpenNode — Bitcoin mokėjimų procesorius",
	"business/wallets::sources_square":
		"Square — priimkite Bitcoin mokėjimus",
	"business/wallets::sources_zaprite":
		"Zaprite — Bitcoin apskaita verslui",
	"business/wallets::wallets_hero_subtitle":
		"Bitcoin piniginės yra nemokamos. Pasirinkite geriausią savo verslui — gyvai, internete arba per sąskaitas faktūras — ir pradėkite priimti Bitcoin per kelias minutes.",
	"business/wallets::wallets_section_invoice":
		"Piniginės verslui, kuris klientams siunčia sąskaitas faktūras",
	"business/wallets::wallets_section_invoice_intro":
		"Jei savo klientams siunčiate sąskaitas faktūras (konsultacijos, laisvai samdomi darbuotojai, B2B paslaugos), naudokite piniginę, sukurtą sąskaitų faktūrų aplinkai. Klientas apmoka Bitcoin sąskaitą faktūrą per kelis paspaudimus.",
	"business/wallets::wallets_section_multiple":
		"Piniginės verslui su keliais darbuotojais",
	"business/wallets::wallets_section_multiple_intro":
		"Jei jūsų komanda priima mokėjimus prie kasos, pasirinkite piniginę, palaikančią kelių darbuotojų prisijungimus — kad kiekvienas darbuotojas turėtų savo kodą ir galėtumėte sekti, kas gavo kokį mokėjimą.",
	"business/wallets::wallets_section_online":
		"Piniginės internetiniam verslui",
	"business/wallets::wallets_section_online_intro":
		"Parduodate internetu? Šios piniginės jungiasi prie jūsų internetinės parduotuvės ir priima Bitcoin mokėjimus iš klientų visame pasaulyje — be grąžinimų ir be prekybos sąskaitos poreikio.",
	"business/wallets::wallets_section_sole":
		"Piniginės individualiems prekybininkams",
	"business/wallets::wallets_section_sole_intro":
		"Jei vienas valdote parduotuvę, kavinę, studiją ar paslaugą, bet kuri iš šių piniginių jums tinka. Pasirinkite, ar laikyti Bitcoin, ar automatiškai konvertuoti dalį kiekvieno mokėjimo į vietinę valiutą.",
	"business/wallets::wallets_strike_note":
		"Strike Business leidžia priimti Bitcoin ir Lightning mokėjimus be mokesčių ir su momentiniu atsiskaitymu. Palaiko mokėjimus gyvai, internete ir per sąskaitas faktūras, su galimybe automatiškai konvertuoti į vietinę valiutą.",
});

/* ─────────────── business/why ─────────────── */
Object.assign(T, {
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin priimamas čia",
	"business/why::why_good_for_you":
		"Kodėl Bitcoin yra naudingas ir jums",
	"business/why::why_learn_more_lowercase": "sužinokite daugiau ←",
	"business/why::why_s1_c1":
		"Infliacija įvyksta, kai spausdinama daugiau pinigų arba jie kuriami iš nieko. Tai laikui bėgant mažina pinigų vertę jūsų kišenėje — todėl kainos kasmet kyla.",
	"business/why::why_s1_c2":
		"Bitcoin turi fiksuotą pasiūlą: 21 milijoną monetų. Jokia vyriausybė, bankas ar įmonė negali atspausdinti daugiau. Jūsų santaupos Bitcoin laikui bėgant išlaiko vertę, užuot tyliai ją praradusios.",
	"business/why::why_s2_c1":
		"Pastaraisiais metais daug JAV bankų žlugo dėl banko bėgimų. Kai daugelis klientų vienu metu nori atsiimti savo pinigus, bankai neturi pakankamai grynųjų visiems.",
	"business/why::why_s2_c2":
		"Be jūsų pinigų saugojimo, bankai didžiąją dalį skolina ir investuoja. Jei tos investicijos žlunga — ar indėlininkai praranda pasitikėjimą — bankas gali žlugti, o jūsų indėliai gali būti įšaldyti ar prarasti.",
	"business/why::why_s2_c3":
		"Su Bitcoin galite laikyti savo pinigus tiesiogiai savo piniginėje. Be banko. Be tarpininkų. Be banko bėgimų.",
	"business/why::why_s3_c1":
		"Skirtingai nuo kreditinių kortelių, PayPal ar tradicinių banko sąskaitų, Bitcoin nereikia niekieno leidimo.",
	"business/why::why_s3_c2":
		"Niekas negali įšaldyti jūsų sąskaitos, blokuoti mokėjimo ar atjungti jūsų nuo tinklo. Tai pirma istorijoje finansinė sistema, kurią galite naudoti nebijodami cenzūros ar konfiskavimo.",
	"business/why::why_s4_c1":
		"Bitcoin dažnai nesuprantamas, bet tyliai pasaulyje daro daug gerų dalykų.",
	"business/why::why_s4_c2":
		"Jis padėjo žmogaus teisių aktyvistams kovoti už savo laisvę, sumažino metano emisijas iš sąvartynų ir naftos gręžinių, stabilizavo elektros tinklus ir finansavo viešąsias paslaugas, tokias kaip nacionaliniai parkai.",
	"business/why::why_biz_s1":
		"Mažesni mokesčiai, daugiau verslui",
	"business/why::why_biz_s1_c1":
		"Bitcoin mokėjimai apeina bankus ir kortelių įmones, kurios paima 2–3 % nuo kiekvieno pardavimo. Verslas išlaiko daugiau iš jūsų mokėjimo — o tai dažnai reiškia geresnes kainas ir geresnį aptarnavimą jums.",
	"business/why::why_biz_s2":
		"Momentinis atsiskaitymas, be grąžinimų",
	"business/why::why_biz_s2_c1":
		"Bitcoin mokėjimai atsiskaito per kelias sekundes, tiesiai iš jūsų piniginės į verslą. Nereikia laukti dienų, kol bankas atlaisvins pinigus, nei brangių ginčų dėl grąžinimų — o tai reiškia, kad verslas gali sutelkti dėmesį į paslaugą, o ne į kovą su sukčiavimais.",
	"business/why::why_biz_s3":
		"Nemokamas priėmimas, atviras visiems",
	"business/why::why_biz_s3_c1":
		"Bitcoin priėmimui versle nereikia sutarčių, mėnesinių išlaidų ar nustatymo mokesčių. O milijonai Bitcoin vartotojų visame pasaulyje aktyviai ieško prekybininkų, priimančių Bitcoin — o tai nemokamai pristato verslą naujiems klientams.",
	"business/why::why_business_cta_intro":
		"Turite verslą ir norite pradėti priimti Bitcoin?",
	"business/why::why_business_cta_link":
		"Pažiūrėkite, kaip tai veikia ←",
	"business/why::why_for_business":
		"Kodėl Bitcoin yra naudingas šiam verslui",
	"business/why::why_for_business_intro":
		"Priimdamas Bitcoin, šis verslas išlaiko daugiau iš kiekvieno pardavimo, gauna momentinius mokėjimus be grąžinimų ir pasiekia pasaulinę Bitcoin vartotojų auditoriją — be sutarčių ir mėnesinių išlaidų.",
	"business/why::why_good_for_you_intro":
		"Bitcoin yra naudingas ne tik prie kasos — tai geresnės rūšies pinigai, apsaugantys jūsų santaupas, privatumą ir transakcijų laisvę. Štai trumpa santrauka.",
	"business/why::why_hero_subtitle":
		"Nuskenavote „Bitcoin Accepted Here“ lipduką. Štai kodėl tai gera žinia — ir šiam verslui, ir jums.",
	"business/why::why_intro_c1":
		"Verslas, kuriame esate, priima Bitcoin — modernią, atvirą mokėjimų sistemą, kuria gali naudotis kiekvienas visame pasaulyje, be bankų ir tarpininkų, kurie ima savo dalį.",
	"business/why::why_intro_c2":
		"Žemiau yra santrauka, kodėl Bitcoin priėmimas yra naudingas šiam verslui, taip pat kodėl Bitcoin naudojimas yra naudingas jums kaip klientui.",
	"business/why::why_next_business_label": "Priimkite Bitcoin",
	"business/why::why_next_business_title":
		"Priimkite Bitcoin savo versle",
	"business/why::why_next_buy_label": "Pirkite Bitcoin",
	"business/why::why_next_buy_title": "Nusipirkite savo pirmą Bitcoin",
	"business/why::why_next_learn_label": "Sužinokite daugiau",
	"business/why::why_next_learn_title": "Sužinokite daugiau apie Bitcoin",
	"business/why::why_next_wallet_label": "Įsigykite piniginę",
	"business/why::why_next_wallet_title":
		"Įsigykite savo Bitcoin piniginę",
	"business/why::why_whats_next_heading": "Kur toliau?",
	"business/why::why_whats_next_intro":
		"Jei pirmą kartą skenuojate Bitcoin lipduką, tai naudingiausios vietos apsilankyti.",
});

/* ─────────────── buy ─────────────── */
Object.assign(T, {
	"buy::buy_platform_feature_p2p": "Vienas-su-vienu (tiesiogiai tarp vartotojų)",
	"buy::buy_bitcoin_guide": "Kaip pirkti Bitcoin",
	"buy::buy_step_1_header": "Pasirinkite savo šalį",
	"buy::buy_step_2_header": "Pasirinkite mokėjimo būdą",
	"buy::buy_step_3_header": "Jūsų pirkimo galimybės",
	"buy::buy_step_4_header": "Saugiai laikykite savo Bitcoin",
	"buy::buy_header_subtitle":
		"Paprastas žingsnis po žingsnio vadovas, kaip nusipirkti savo pirmą Bitcoin.",
	"buy::buy_howto_name": "Kaip pirkti Bitcoin",
	"buy::buy_meta_description":
		"Sužinokite, kaip saugiai pirkti Bitcoin pagal mūsų žingsnis po žingsnio vadovą. Pasirinkite savo šalį ir mokėjimo būdą, kad gautumėte geriausias pirkimo galimybes.",
	"buy::buy_step_1_eyebrow": "1 žingsnis",
	"buy::buy_step_2_eyebrow": "2 žingsnis",
	"buy::buy_step_3_eyebrow": "3 žingsnis",
	"buy::buy_step_4_eyebrow": "4 žingsnis",
	"buy::buy_storage_cta_label": "Kitas žingsnis",
	"buy::sources_bisq":
		"Bisq — decentralizuota vienas-su-vienu Bitcoin birža",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — pasaulinis Bitcoin bankomatų katalogas",
	"buy::sources_kraken": "Kraken — populiari Bitcoin birža",
	"buy::sources_relai":
		"Relai — Šveicarijos savarankiškos saugyklos Bitcoin programėlė",
	"buy::sources_river":
		"River — pirkite, kasykite ir laikykite tik Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — pirkite Bitcoin su Lightning Network palaikymu",
	"buy::sources_swan":
		"Swan Bitcoin — vidutinės kainos investavimas į Bitcoin (DCA)",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Pridėti kalbą",
	"common::common_next_buy_bitcoin": "Pirkite Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Sužinokite, kaip saugiai pirkti Bitcoin",
	"common::common_next_calculate": "Apskaičiuokite savo infliaciją",
	"common::common_next_calculate_desc":
		"Pamatykite, kaip infliacija laikui bėgant veikia jūsų atlyginimą",
	"common::common_next_get_wallet": "Įsigykite piniginę",
	"common::common_next_get_wallet_desc":
		"Įsigykite savo pirmą Bitcoin piniginę — ji nemokama",
	"common::common_next_keep_learning": "Mokykitės toliau",
	"common::common_next_keep_learning_desc":
		"Pamatykite, kaip Bitcoin daro pasaulį geresne vieta",
	"common::common_source_bls_cpi":
		"JAV Darbo statistikos biuras — vartotojų kainų indeksas (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) — pinigų pasiūla (kategorinis indeksas)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: A Peer-to-Peer Electronic Cash System (2008 m.)",
	"common::common_sources_treasury_auction":
		"James Lavish — „Ar gali žlugti iždo aukcionas?“",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Kas toliau?",
	"common::common_sticker_files_mission_5": "Užsisakykite paketą",
	"common::common_site_tagline": "Bitcoin švietimas visiems.",
	"common::common_source_btc_map":
		"BTC Map — pasaulinis Bitcoin priimančių prekybininkų katalogas",
	"common::common_source_btcpayserver":
		"BTCPay Server — nemokamas, atvirojo kodo savarankiškai talpinamas Bitcoin mokėjimų procesorius",
	"common::common_source_oshi":
		"Oshi — Bitcoin atlygių platforma prekybininkams",
	"common::common_source_strike_business":
		"Strike — Bitcoin ir Lightning mokėjimai verslui",
	"common::common_sources_group_bitcoin": "Bitcoin duomenys",
	"common::common_sources_group_cpi":
		"Infliacija / CPI",
	"common::common_sources_group_debt": "Valstybės skola",
	"common::common_sources_group_money": "Pinigų pasiūlos duomenys",
	"common::common_sources_group_stories": "Realūs pavyzdžiai",
	"common::common_sticker_files_mission_6":
		"Nemokami lipdukai anglų kalba.",
	"common::common_sticker_files_next_flyers_label": "Lankstinukai",
	"common::common_sticker_files_next_flyers_title":
		"Spausdinkite Bitcoin lankstinukus",
	"common::common_sticker_files_next_languages_label":
		"Lipdukų failai",
	"common::common_sticker_files_next_languages_title":
		"Pažiūrėkite lipdukų failus kitomis kalbomis",
	"common::common_sticker_files_print_these":
		"Atspausdinkite šiuos vienu paspaudimu",
	"common::common_sticker_name_bdhi_black":
		"Lipdukas „Bitcoin Doesn\u2019t Have Inflation“ (juodas)",
	"common::common_sticker_name_bdhi_orange":
		"Lipdukas „Bitcoin Doesn\u2019t Have Inflation“ (oranžinis)",
	"common::common_sticker_name_caution":
		"Bitcoin lipdukas „Caution! Melting Ice Cube“",
	"common::common_sticker_name_cure_inflation":
		"Bitcoin lipdukas „Cure Inflation“",
	"common::common_sticker_name_danger":
		"Bitcoin lipdukas „Danger! Inflation Ahead“",
	"common::common_sticker_name_fix":
		"Bitcoin lipdukas „Fix The Money, Fix The World“",
	"common::common_sticker_name_got_inflation":
		"Bitcoin lipdukas „Got Inflation?“",
	"common::common_sticker_name_study":
		"Lipdukas „Study Bitcoin“",
	"common::common_sticker_name_warning":
		"Bitcoin lipdukas „Warning! Inflation is Stealing Your Savings“",
	"common::common_sticker_name_what_if":
		"Bitcoin lipdukas „What if your money didn\u2019t have inflation?“",
	"common::common_sticker_tips_heading": "Lipdukų patarimai",
	"common::common_sticker_tips_intro":
		"Atsispausdinę lipdukus, dėkite juos ten, kur žmonės juos pamatys! Geros vietos:",
	"common::common_sticker_tips_list_1":
		"Viešos vietos, kur žmonės juos pamatys",
	"common::common_sticker_tips_list_2":
		"Vietos, kur jie nebus iš karto pašalinti (lipdukai nedaro nuolatinės žalos)",
	"common::common_sticker_tips_list_3":
		"Paviršiai, ant kurių jie gerai laikosi (metalas, plastikas, stiklas)",
	"common::common_sticker_tips_list_4":
		"Neklijuokite ant privačios nuosavybės, kelio ženklų, bankomatų ar degalinių",
	"common::common_stickers_printer_prefix": "Mes naudojame",
	"common::common_stickers_printer_suffix":
		"bet galite naudoti bet kurį lipdukų spaustuvininką.",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) — vartotojų kainų indeksas visiems miestų vartotojams",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) — pinigų pasiūla M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Apskaičiuokite savo infliacijos atotrūkį",
	"compound-inflation-calculator::cic_cta_label": "Kitas žingsnis",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Sužinokite, kiek jūsų atlyginimas turėtų augti, kad neatsiliktų nuo infliacijos.",
	"compound-inflation-calculator::cic_next_explore_topics":
		"Tyrinėkite daugiau temų",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Pažiūrėkite, kaip Bitcoin yra susijęs su pinigais, laisve, energija ir dar daugiau.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Sužinokite, kaip veikia infliacija",
});

/* ─────────────── flyers ─────────────── */
Object.assign(T, {
	"flyers::flyers_intro_header":
		"Kaip spausdinti ir kabinti šiuos Bitcoin lankstinukus",
	"flyers::flyers_hero_subtitle":
		"Nemokami spausdinami Bitcoin lankstinukai. Kabinkite juos viešose vietose, kad daugiau žmonių sužinotų apie Bitcoin.",
	"flyers::flyers_hero_title": "Spausdinkite ir kabinkite Bitcoin lankstinukus",
	"flyers::flyers_next_get_stickers": "Skleiskite žinią dar toliau",
	"flyers::flyers_next_get_stickers_desc":
		"Užsisakykite nemokamą Bitcoin lipdukų paketą",
});

/* ─────────────── get-involved ─────────────── */
Object.assign(T, {
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Įsitraukite ir padėkite skleisti Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Norite padėti kurti žiedinę Bitcoin ekonomiką? Lengviausias būdas yra padėti vietinėms įmonėms pradėti priimti Bitcoin mokėjimus.",
	"get-involved::get_involved_business_content_2":
		"Pažįstate įmonę, kuri galėtų pradėti? Nukreipkite savininką į mūsų puslapį",
	"get-involved::get_involved_business_content_3":
		"Bitcoin verslui.",
	"get-involved::get_involved_description":
		"Mūsų nemokami įrankiai padaro Bitcoin priėmimo skleidimą paprastą. Lipdukai, lankstinukai, „Bitcoin Accepted Here“ lipdukai įmonėms ir atviras kodas, prie kurio gali prisidėti kiekvienas.",
	"get-involved::get_involved_header":
		"Įsitraukite ir padėkite skleisti Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Galite padėti tai pakeisti. Sukūrėme keletą nemokamų įrankių, kurie padės jums skleisti viltį dėl Bitcoin savo bendruomenėje.",
	"get-involved::get_involved_biz_stickers_note":
		"Jau priimate Bitcoin? Pasakykite savo klientams su mūsų nemokamais „Bitcoin Accepted Here“ lipdukais. Siunčiame paketą bet kokiu adresu JAV ar Kanadoje, arba galite patys atsispausdinti bet kurioje pasaulio vietoje.",
	"get-involved::get_involved_card_biz_stickers_label":
		"„Accepted Here“ lipdukai",
	"get-involved::get_involved_card_biz_stickers_source":
		"Šaltinis: bitcoin.rocks ←",
	"get-involved::get_involved_card_biz_stickers_title":
		"Nemokami „Bitcoin Accepted Here“ lipdukai jūsų verslui",
	"get-involved::get_involved_card_business_label":
		"Bitcoin verslui",
	"get-involved::get_involved_card_business_source":
		"Šaltinis: bitcoin.rocks ←",
	"get-involved::get_involved_card_business_title":
		"Viskas, ko verslui reikia Bitcoin mokėjimams priimti",
	"get-involved::get_involved_card_flyers_label": "Spausdinami lankstinukai",
	"get-involved::get_involved_card_flyers_source":
		"Šaltinis: bitcoin.rocks ←",
	"get-involved::get_involved_card_flyers_title":
		"Atsisiųskite ir atspausdinkite nemokamus Bitcoin lankstinukus",
	"get-involved::get_involved_card_github_label": "Atvirasis kodas",
	"get-involved::get_involved_card_github_source": "Šaltinis: GitHub ←",
	"get-involved::get_involved_card_github_title":
		"Prisidėkite prie bitcoin.rocks GitHub'e",
	"get-involved::get_involved_card_stickers_label":
		"Nemokami lipdukai",
	"get-involved::get_involved_card_stickers_source":
		"Šaltinis: bitcoin.rocks ←",
	"get-involved::get_involved_card_stickers_title":
		"Užsisakykite nemokamą Bitcoin lipdukų paketą tiesiai į savo namus",
	"get-involved::get_involved_flyers_content_1":
		"Lankstinukai yra paprasčiausias būdas pristatyti Bitcoin savo bendruomenei. Atsisiųskite mūsų nemokamą Bitcoin lankstinuką, atspausdinkite tiek kopijų, kiek norite, ir pakabinkite juos ant skelbimų lentų, kavinėse, renginiuose ar bet kur, kur renkasi žmonės.",
	"get-involved::get_involved_flyers_content_2":
		"Kiekvienas lankstinukas turi patrauklią antraštę ir QR kodą, vedantį smalsius skaitytojus į bitcoin.rocks, kad sužinotų daugiau.",
	"get-involved::get_involved_flyers_content_3":
		"Skirtingai nuo lipdukų, lankstinukai gali būti spausdinami pagal poreikį bet kurioje pasaulio vietoje — jums tereikia spausdintuvo ir kelių minučių.",
	"get-involved::get_involved_flyers_header":
		"Spausdinkite ir kabinkite lankstinukus",
	"get-involved::get_involved_flyers_image_alt":
		"bitcoin.rocks nemokamo spausdinamo Bitcoin lankstinuko peržiūra",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks yra nemokamas atvirojo kodo projektas pagal MIT licenciją. Mūsų misija — pagreitinti Bitcoin priėmimą per švietimą — o to vieni padaryti negalime.",
	"get-involved::get_involved_github_content_2":
		"Jei esate kūrėjas, dizaineris, rašytojas ar vertėjas, yra būdų padėti. Ypač ieškome žmonių, kurie galėtų išversti mūsų turinį į daugiau kalbų, kad žmonės visame pasaulyje galėtų sužinoti apie Bitcoin savo gimtąja kalba.",
	"get-involved::get_involved_github_content_3":
		"Atskirkite mūsų saugyklą, atidarykite pull request, praneškite apie problemą arba pažymėkite projektą žvaigždute. Kiekvienas indėlis padeda Bitcoin pasiekti daugiau žmonių.",
	"get-involved::get_involved_github_header":
		"Prisidėkite GitHub'e",
	"get-involved::get_involved_sticker_image_alt":
		"Nemokamas Bitcoin lipdukų paketas su bitcoin.rocks tekstu",
});

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "TAUPYMAS",
	"index::home_card_label_art_1": "Palyginkime",
	"index::home_card_label_art_2": "Skleiskite žinią",
	"index::home_card_label_art_3": "Gatvės menas",
	"index::home_card_label_bank_runs": "Visiško rezervo sistema",
	"index::home_card_label_bonds": "Palyginkime",
	"index::home_card_label_business_1": "Koks skirtumas?",
	"index::home_card_label_business_2": "Priimkite Bitcoin mokėjimus",
	"index::home_card_label_cash": "Palyginkime",
	"index::home_card_label_cbdc": "Atviras ar uždaras?",
	"index::home_card_label_coding_1": "Interaktyvus vadovas",
	"index::home_card_label_coding_2": "Pasigaminkite aparatinę įrangą",
	"index::home_card_label_coding_3": "Programavimo galvosūkiai",
	"index::home_card_label_crowdfunding_1": "EndSARS protestai",
	"index::home_card_label_crowdfunding_2": "Pinigai, kurių negalima sustabdyti",
	"index::home_card_label_crowdfunding_3": "Finansuokite savo projektą",
	"index::home_card_label_crypto": "Koks skirtumas?",
	"index::home_card_label_energy_1": "Tinklo stabilizavimas",
	"index::home_card_label_energy_4": "Atsakas į paklausą",
	"index::home_card_label_energy_5": "Kaimo elektrifikacija",
	"index::home_card_label_energy_6": "Atsinaujinančios energijos paskata",
	"index::home_card_label_environment_1": "Metano mažinimas",
	"index::home_card_label_environment_2": "Išgelbėti nacionalinį parką",
	"index::home_card_label_environment_3": "Žaliausia pramonė",
	"index::home_card_label_environment_4": "Mažiau išleidžiamų dujų",
	"index::home_card_label_equality_1": "Viltis ir galimybės",
	"index::home_card_label_equality_2": "Žaidimo pakeitėjas",
	"index::home_card_label_food_1": "Maisto kainos",
	"index::home_card_label_food_2": "Ūkiai ir dirvožemis",
	"index::home_card_label_freedom_1": "Tironiški režimai",
	"index::home_card_label_freedom_2": "Unikalus įrankis",
	"index::home_card_label_get_started_1":
		"Pagrindai pradedantiesiems",
	"index::home_card_label_get_started_2": "Jūsų pirmoji piniginė",
	"index::home_card_label_get_started_3": "Pirkite Bitcoin",
	"index::home_card_label_gold": "Kas geriau?",
	"index::home_card_label_housing_1": "Įperkamas būstas",
	"index::home_card_label_human_rights_1":
		"Žmogaus teisių skatinimas",
	"index::home_card_label_human_rights_2": "Priėmimas vietoje",
	"index::home_card_label_human_rights_3": "Pasaulinis poveikis",
	"index::home_card_label_inflation": "Bitcoin yra geresni pinigai",
	"index::home_card_label_networks_1": "Tinklo apžvalga tiesiogiai",
	"index::home_card_label_networks_2": "Palyginkime",
	"index::home_card_label_payments_1": "Koks skirtumas?",
	"index::home_card_label_payments_2": "Greiti ir pigūs mokėjimai",
	"index::home_card_label_payments_3": "Pinigų perlaidos",
	"index::home_card_label_payments_4": "Priimkite mokėjimus",
	"index::home_card_label_politics_1": "Politinis paradoksas",
	"index::home_card_label_politics_2": "Imkitės veiksmų",
	"index::home_card_label_property_rights_1": "Palyginkime",
	"index::home_card_label_property_rights_2": "Tikra nuosavybė",
	"index::home_card_label_salary": "Apsaugokite savo atlyginimą",
	"index::home_card_label_self_custody_1":
		"Bitcoin piniginių vadovas",
	"index::home_card_label_self_custody_2": "Svarbiausias žingsnis",
	"index::home_card_label_self_custody_3": "Suverenus pinigai",
	"index::home_card_label_war_1": "Begalinio karo pabaiga",
	"index::home_card_label_war_2": "Pagalba veteranams",
	"index::home_card_label_war_3": "Pabėgimas karo metu",
	"index::home_h1":
		"Bitcoin yra geresni pinigai, kuriantys geresnį pasaulį.",
	"index::home_nav_about": "Apie",
	"index::home_nav_get_involved": "Įsitraukite",
	"index::home_nav_learn": "Mokykitės",
	"index::home_source_prefix": "Šaltinis:",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon ir Thaddeus Dryja — The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016 m.)",
	"lightning::lightning_s1_c4": "Pažiūrėkite",
	"lightning::lightning_grid_heading":
		"Populiarios Lightning piniginės",
	"lightning::lightning_hardware_cta_label":
		"Aparatinės piniginės",
	"lightning::lightning_header_subtitle":
		"Lightning leidžia jums siųsti Bitcoin per kelias sekundes už mažiau nei centą — pasirinkite tinkamą piniginę sumai, kurią norite išleisti.",
	"lightning::lightning_s1_c4_end": "kad sužinotumėte daugiau.",
	"lightning::lightning_s1_c4_link":
		"Bitcoin aparatinių piniginių vadovą",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Phoenix Lightning piniginė",
	"lightning::sources_breez_lightning":
		"Breez — Lightning piniginė savarankiškai saugyklai",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Lightning Network dokumentacija",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — saugotojo Lightning piniginė",
});

/* ─────────────── nostr/index ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android ir žiniatinklis",
	"nostr/index::nostr_platform_web": "Žiniatinklio naršyklė",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr yra naujas, decentralizuotas internetinio bendravimo protokolas — jis nepriklauso jokiai įmonei, turi įdiegtus Bitcoin „zaps“, ir jūs galite keisti klientus neprarasdami sekėjų.",
	"nostr/index::nostr_amethyst_f1":
		"Daug funkcijų ir pritaikymo galimybių",
	"nostr/index::nostr_amethyst_f2":
		"Reikia atskiros Bitcoin piniginės",
	"nostr/index::nostr_amethyst_f3": "100 % nemokama",
	"nostr/index::nostr_damus_f1":
		"Pažįstama į Twitter panaši sąsaja",
	"nostr/index::nostr_damus_f2":
		"Reikia atskiros Bitcoin piniginės",
	"nostr/index::nostr_damus_f3": "100 % nemokama",
	"nostr/index::nostr_download_heading":
		"Atsisiųskite nemokamą Nostr klientą",
	"nostr/index::nostr_download_intro":
		"Nostr klientai yra nemokamos programėlės, leidžiančios skaityti ir rašyti Nostr tinkle. Visi jie veikia kartu — bet kada galite pakeisti klientą ir išlaikyti savo sekėjus bei turinį.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr yra naujas, decentralizuotas internetinio bendravimo protokolas — jis nepriklauso jokiai įmonei, turi įdiegtus Bitcoin „zaps“, ir jūs galite keisti programėles neprarasdami sekėjų.",
	"nostr/index::nostr_hero_title": "Kas yra Nostr?",
	"nostr/index::nostr_intro_c1":
		"Nostr yra panašus į el. paštą: niekas nevaldo protokolo, kiekvienas gali jame kurti programėles, ir jūs renkatės, kuri jums geriausiai tinka. Skirtingai nuo Twitter ar Facebook, nėra centrinės įmonės, kuri galėtų cenzūruoti, uždaryti ar nutildyti jūsų paskyras.",
	"nostr/index::nostr_intro_c2":
		"Žemiau yra santrauka, kodėl Nostr yra svarbus — o tada visi nemokami Nostr klientai, kurių reikia pradėti jau šiandien.",
	"nostr/index::nostr_iris_f1":
		"Labai lengvas — nereikia diegti",
	"nostr/index::nostr_iris_f2":
		"Lengvas būdas išbandyti Nostr su bandomąja paskyra",
	"nostr/index::nostr_iris_f3": "100 % nemokama",
	"nostr/index::nostr_learn_more_label": "Sužinokite daugiau detaliai",
	"nostr/index::nostr_learn_more_title":
		"Sužinokite daugiau apie Nostr nostr.how svetainėje",
	"nostr/index::nostr_primal_f1": "Mūsų rekomenduojamas klientas pirmiausia",
	"nostr/index::nostr_primal_f2":
		"Įdiegta piniginė Bitcoin „zaps“",
	"nostr/index::nostr_primal_f3": "100 % nemokama",
	"nostr/index::nostr_s1": "Protokolas, ne platforma",
	"nostr/index::nostr_s1_c1":
		"Nostr yra naujas protokolas, leidžiantis bendrauti internete nebijant cenzūros, draudimų ar nutildymo.",
	"nostr/index::nostr_s1_c2":
		"Platformas, tokias kaip Twitter ar Facebook, kontroliuoja viena įmonė, bet Nostr protokolo niekas nekontroliuoja.",
	"nostr/index::nostr_s2": "Judėjimo laisvė",
	"nostr/index::nostr_s2_c1":
		"Nostr yra panašus į el. paštą. Niekas nekontroliuoja el. pašto protokolo, ir kiekvienas gali sukurti klientą (pvz., Gmail, Hotmail ir kt.).",
	"nostr/index::nostr_s2_c2":
		"Nostr protokolo taip pat niekas nekontroliuoja, ir kiekvienas gali sukurti klientą (pvz., Damus, Amethyst ir kt.).",
	"nostr/index::nostr_s2_c3":
		"Jei jums nepatinka, kaip veikia kuris nors klientas, galite perkelti savo Nostr paskyrą į kitą klientą neprarasdami sekėjų ar turinio.",
	"nostr/index::nostr_s3": "Įdiegtas Bitcoin",
	"nostr/index::nostr_s3_c1":
		"Bitcoin yra įdiegtas Nostr protokole. Kai matote turinį, kuris jums patinka, galite išsiųsti „Bitcoin zap“, kad padėkotumėte autoriui.",
	"nostr/index::nostr_s3_c2":
		"Centralizuotose platformose, tokiose kaip Twitter ir Facebook, centrinė įmonė uždirba iš jūsų turinio. Bet atvirame protokole, tokiame kaip Nostr, jūs uždirbate iš savo turinio.",
	"nostr/index::sources_damus": "Damus — Nostr klientas iPhone",
	"nostr/index::sources_iris": "Iris — Nostr klientas žiniatinklio naršyklei",
	"nostr/index::sources_nostr_how": "nostr.how — kas yra Nostr?",
	"nostr/index::sources_nostr_protocol":
		"Nostr protokolas — atvirojo kodo specifikacijos",
	"nostr/index::sources_primal":
		"Primal — Nostr klientas su įdiegta pinigine Bitcoin „zaps“",
	"nostr/index::what_is_nostr": "Kas yra Nostr?",
});

/* ─────────────── sticker-files/index ─────────────── */
Object.assign(T, {
	"sticker-files/index::sticker_files_header":
		"Atsispausdinkite savo Bitcoin lipdukus su šiais failais.",
});

/* ─────────────── sticker-language-success ─────────────── */
Object.assign(T, {
	"sticker-language-success::sticker_language_success_hero_title":
		"Užklausa gauta 🎉",
});

/* ─────────────── sticker-success ─────────────── */
Object.assign(T, {
	"sticker-success::sticker_success_btn_order_bulk":
		"Užsisakykite didmenoje",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Pasidalinkite Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr":
		"Kas yra Nostr?",
	"sticker-success::sticker_success_bulk_header":
		"Reikia daugiau lipdukų?",
	"sticker-success::sticker_success_hero_title":
		"Jūsų lipdukai jau pakeliui 🎉",
	"sticker-success::sticker_success_share_header":
		"Pasidalinkite, kur priklijavote savo lipdukus",
	"sticker-success::sticker_success_tips_header":
		"Geros vietos lipdukams klijuoti",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Ir kai pradėsite, ",
	"stickers::stickers_instructions_1":
		"Įveskite savo pašto adresą, ir mes atsiųsime jums paketą nemokamų Bitcoin lipdukų. Jūsų lipdukai atvyks paprastame baltame voke.",
	"stickers::stickers_btn_choose_pack": "Pasirinkite šį paketą",
	"stickers::stickers_bulk_c1":
		"Reikia daugiau nei kelių lipdukų?",
	"stickers::stickers_bulk_c2":
		"Užsisakykite didmenoje iš to paties spaustuvininko, kurį naudojame mes",
	"stickers::stickers_bulk_c3":
		" — kuo daugiau perkate, tuo pigiau kainuoja kiekvienas.",
	"stickers::stickers_bulk_cta": "Pirkite lipdukus didmenoje",
	"stickers::stickers_bulk_header":
		"Užsisakykite lipdukus didmenoje",
	"stickers::stickers_hero_subtitle":
		"Užsisakykite nemokamą Bitcoin lipdukų paketą ir kabinkite juos viešose vietose, kad daugiau žmonių sužinotų apie Bitcoin.",
	"stickers::stickers_hero_title": "Nemokami Bitcoin lipdukai",
	"stickers::stickers_intro_c1":
		"Mūsų misija — padėti jums „oranžiniu nudažymu“ pažadinti daugiau žmonių, klijuojant Bitcoin lipdukus viešose vietose. Visi mūsų lipdukai turi QR kodus, vedančius į švietimo puslapius apie",
	"stickers::stickers_intro_c3": "infliaciją",
	"stickers::stickers_intro_c4":
		"Pasirinkite lipdukų paketą žemiau ir pasirinkite, kaip norite jį gauti — siunčiame nemokamą paketą bet kam JAV ar Kanadoje, arba galite patys atsispausdinti savo lipdukus bet kurioje pasaulio vietoje.",
	"stickers::stickers_mail_header":
		"Siunčiame lipdukus nemokamai",
	"stickers::stickers_next_print_flyers": "Skleiskite žinią dar toliau",
	"stickers::stickers_next_print_flyers_desc":
		"Spausdinkite nemokamus Bitcoin lankstinukus ir kabinkite juos viešose vietose",
	"stickers::stickers_option_bulk":
		"📦 Pasauliniu mastu — užsisakykite didmenoje",
	"stickers::stickers_option_canada":
		"🇨🇦 Kanada — nemokamas paštas",
	"stickers::stickers_option_print":
		"🌍 Pasauliniu mastu — patys spausdinkite",
	"stickers::stickers_option_usa":
		"🇺🇸 JAV — nemokamas paštas",
	"stickers::stickers_print_c1":
		"Galite prisidėti patys atsispausdindami lipdukus, bet kur pasaulyje gyventumėte. Spustelėkite savo kalbą žemiau, kad atsisiųstumėte lipdukų failus ir spausdinimo instrukcijas.",
	"stickers::stickers_print_c2":
		"Ne visi lipdukai prieinami visomis kalbomis.",
	"stickers::stickers_print_header":
		"Atsispausdinkite savo lipdukų failus",
	"stickers::stickers_request_c1":
		"Užpildykite žemiau esančią formą, kad paprašytumėte lipdukų failų savo vietine kalba. Pranešime, kai jie bus paruošti.",
	"stickers::stickers_request_header":
		"Nematote savo kalbos?",
	"stickers::stickers_share_c2":
		"Sekite mus Nostr ieškodami mūsų bet kuriame Nostr kliente",
	"stickers::stickers_share_c3":
		".",
	"stickers::stickers_signs_pack_description":
		"Įspėjamieji, dėmesį patraukiantys ir pranešimų lipdukai su Bitcoin žinutėmis — sukurti, kad patrauktų dėmesį ir sustabdytų žmones.",
	"stickers::stickers_step_1_description":
		"Kiekvienas paketas turi skirtingą Bitcoin lipdukų rinkinį su QR kodais, mokančiais žmones apie Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "1 žingsnis",
	"stickers::stickers_step_1_header":
		"Pasirinkite lipdukų paketą",
	"stickers::stickers_step_2_description":
		"Siunčiame nemokamus paketus į adresus JAV ir Kanadoje. Likusioje pasaulio dalyje galite patys spausdinti lipdukus arba užsisakyti didmenoje.",
	"stickers::stickers_step_2_eyebrow": "2 žingsnis",
	"stickers::stickers_step_2_header":
		"Kaip norite gauti lipdukus?",
	"stickers::stickers_text_pack_description":
		"Bitcoin šūkių ir linksmų idėjų mišinys, sukurtas pažadinti smalsumą viešose vietose.",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — pasirinkite savo piniginę",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Bitcoin sėklų metalinių saugyklų apžvalgos",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Bitcoin piniginė savarankiškai saugyklai",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Bitcoin aparatinė piniginė",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Coldcard MK5 aparatinė piniginė",
	"wallets::sources_coldcard_q":
		"Coinkite — Coldcard Q aparatinė piniginė",
	"wallets::sources_passport":
		"Foundation Devices — Passport aparatinė piniginė",
	"wallets::sources_seedsigner":
		"SeedSigner — savadarbis atvirojo kodo Bitcoin transakcijų pasirašymo įrenginys",
	"wallets::wallets_grid_heading": "Populiarios Bitcoin piniginės",
	"wallets::wallets_header_subtitle":
		"Žingsnis po žingsnio vadovas, kaip pasirinkti piniginę, padaryti raktų atsarginę kopiją ir perimti visišką savo Bitcoin kontrolę.",
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
		`translate-rest-part2 (lt): filled ${filled}, already-done ${skipped}`,
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
