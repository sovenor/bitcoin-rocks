#!/usr/bin/env node
/**
 * Lithuanian (lt) manifest refresh — fill remaining common + index keys.
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

const T = {
	// common
	"common::common_biz_accounting": "Bitcoin apskaitos vadovas",
	"common::common_biz_faq": "Dažniausiai užduodami klausimai",
	"common::common_biz_learn": "Sužinokite, kodėl Bitcoin yra naudingas verslui",
	"common::common_biz_maps": "Įtraukite į Bitcoin prekybininkų žemėlapius",
	"common::common_biz_more": "DAUGIAU VERSLO IŠTEKLIŲ",
	"common::common_biz_rewards": "Bitcoin atlygiai",
	"common::common_biz_stickers": "Nemokami „Bitcoin Accepted Here“ lipdukai",
	"common::common_biz_wallets":
		"Įsigykite Bitcoin piniginę Bitcoin mokėjimams priimti",
	"common::common_calculate_button_text": "APSKAIČIUOTI",
	"common::common_cic_intro_1":
		"Daugelis žmonių žino apie sudėtines palūkanas, bet mažai kas žino apie sudėtinę infliaciją.",
	"common::common_cic_intro_2":
		"Su mūsų sudėtinės infliacijos skaičiuokle galite lengvai apskaičiuoti, kiek turėtų padidėti jūsų atlyginimas, kad išlaikytumėte perkamąją galią laikui bėgant.",
	"common::common_cic_intro_3":
		"Tiesiog įveskite savo dabartinį atlyginimą, infliacijos lygį ir metų skaičių, už kurį norite apskaičiuoti, ir mūsų skaičiuoklė parodys, koks turėtų būti jūsų atlyginimas, kad neatsiliktumėte nuo infliacijos.",
	"common::common_cold_wallet": "ŠALTOJI PINIGINĖ",
	"common::common_current_salary": "dabartinis atlyginimas",
	"common::common_error_message": "Klaida: užpildykite visus 3 formos laukus.",
	"common::common_footer_about": "Apie",
	"common::common_footer_contribute": "Prisidėkite",
	"common::common_footer_follow_first_half": "Sekite mus Nostr ieškodami",
	"common::common_footer_follow_second_half": "bet kuriame Nostr kliente.",
	"common::common_footer_nostr": "Nostr",
	"common::common_footer_tagline":
		"Pagreitiname Bitcoin priėmimą per švietimą.",
	"common::common_hot_wallet": "KARŠTOJI PINIGINĖ",
	"common::common_inflation_rate": "infliacijos lygis",
	"common::common_language_afrikaans": "AFRIKANSŲ",
	"common::common_language_arabic": "ARABŲ",
	"common::common_language_basque": "BASKŲ",
	"common::common_language_bulgarian": "BULGARŲ",
	"common::common_language_catalan": "KATALONŲ",
	"common::common_language_chinese": "KINŲ",
	"common::common_language_croatian": "KROATŲ",
	"common::common_language_czech": "ČEKŲ",
	"common::common_language_danish": "DANŲ",
	"common::common_language_dutch": "OLANDŲ",
	"common::common_language_english": "ANGLŲ",
	"common::common_language_estonian": "ESTŲ",
	"common::common_language_filipino": "FILIPINŲ",
	"common::common_language_finnish": "SUOMIŲ",
	"common::common_language_french": "PRANCŪZŲ",
	"common::common_language_german": "VOKIEČIŲ",
	"common::common_language_greek": "GRAIKŲ",
	"common::common_language_hausa": "HAUSŲ",
	"common::common_language_hebrew": "HEBRAJŲ",
	"common::common_language_hindi": "HINDI",
	"common::common_language_hungarian": "VENGRŲ",
	"common::common_language_indonesian": "INDONEZIEČIŲ",
	"common::common_language_irish": "AIRIŲ",
	"common::common_language_italian": "ITALŲ",
	"common::common_language_japanese": "JAPONŲ",
	"common::common_language_korean": "KORĖJIEČIŲ",
	"common::common_language_malay": "MALAJŲ",
	"common::common_language_norwegian": "NORVEGŲ",
	"common::common_language_persian": "PERSŲ",
	"common::common_language_polish": "LENKŲ",
	"common::common_language_portuguese": "PORTUGALŲ",
	"common::common_language_russian": "RUSŲ",
	"common::common_language_sinhala": "SINHALŲ",
	"common::common_language_slovak": "SLOVAKŲ",
	"common::common_language_slovenian": "SLOVĖNŲ",
	"common::common_language_spanish": "ISPANŲ",
	"common::common_language_swahili": "SUAHILIŲ",
	"common::common_language_swedish": "ŠVEDŲ",
	"common::common_language_thai": "TAJŲ",
	"common::common_language_turkish": "TURKŲ",
	"common::common_language_urdu": "URDU",
	"common::common_language_vietnamese": "VIETNAMIEČIŲ",
	"common::common_language_yoruba": "JORUBŲ",
	"common::common_learn_more": "SUŽINOKITE DAUGIAU",
	"common::common_not_your_keys": "NE JŪSŲ RAKTAI",
	"common::common_published_by": "Paskelbė",
	"common::common_publisher_name": "bitcoin.rocks",
	"common::common_publisher_open_source": "Atvirojo kodo projektas",
	"common::common_publisher_since": "Bitcoin švietimas nuo 2022 m.",
	"common::common_result_message_1": "Esant infliacijos lygiui",
	"common::common_result_message_2": "jūsų",
	"common::common_result_message_3": "atlyginimas turi padidėti iki",
	"common::common_result_message_4": "kad išlaikytumėte savo perkamąją galią.",
	"common::common_result_message_in": "po",
	"common::common_result_starting_message":
		"Užpildykite formą aukščiau ir spustelėkite apskaičiuoti.",
	"common::common_reviewed_accuracy": "✓ Patikrinta dėl tikslumo: 2026 m.",
	"common::common_self_custody": "SAVARANKIŠKA SAUGYKLA",
	"common::common_sources_heading": "Šaltiniai",
	"common::common_sticker_files_mission_1":
		"Mūsų misija — padėti jums „oranžiniu nudažymu“ pažadinti daugiau žmonių, klijuojant Bitcoin lipdukus viešose vietose. Visi mūsų lipdukai turi QR kodus, vedančius į švietimo puslapius apie",
	"common::common_sticker_files_mission_2": "Bitcoin",
	"common::common_sticker_files_mission_3": "infliaciją",
	"common::common_sticker_files_mission_4":
		"Jei gyvenate JAV ar Kanadoje, galite",
	"common::common_stickers_bulk_cheaper":
		"Kuo daugiau lipdukų perkate, tuo pigiau kainuoja kiekvienas.",
	"common::common_stickers_bulk_mess":
		"Nenorite patys vargti su failais?",
	"common::common_stickers_bulk_store":
		"Užsisakykite lipdukus didmenoje iš to paties spaustuvininko, kurį naudojame mes.",
	"common::common_stickers_dimensions": "Matmenys:",
	"common::common_stickers_dimensions_bdhi":
		"21,59 cm x 4,6482 cm (8,5 in x 1,83 in)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20,995 cm x 6,35 cm (8,25 in x 2,5 in)",
	"common::common_stickers_dimensions_caution":
		"12,0142 cm x 7,9502 cm (4,73 in x 3,13 in)",
	"common::common_stickers_dimensions_cure_v2":
		"6,35 cm x 12,7 cm (2,5 in x 5 in)",
	"common::common_stickers_dimensions_danger":
		"11,4544 cm x 8,382 cm (4,51 in x 3,3 in)",
	"common::common_stickers_dimensions_fix":
		"11,3792 cm x 6,8072 cm (4,48 in x 2,68 in)",
	"common::common_stickers_dimensions_got_inflation":
		"7,9248 cm x 14,605 cm (3,12 in x 5,75 in)",
	"common::common_stickers_dimensions_study":
		"14,605 cm x 5,1308 cm (5,75 in x 2,02 in)",
	"common::common_stickers_dimensions_warning":
		"10,414 cm x 9,2202 cm (4,1 in x 3,63 in)",
	"common::common_stickers_dimensions_what_if":
		"21,7932 cm x 7,62 cm (8,58 in x 3 in)",
	"common::common_stickers_material": "Medžiaga:",
	"common::common_stickers_material_vinyl":
		"vinilo lipdukai naudoti lauke",
	"common::common_stickers_print_instructions_1":
		"Galite prisidėti patys atsispausdindami lipdukus, kad ir kur gyventumėte! Spustelėkite savo kalbą žemiau, kad atsisiųstumėte lipdukų failus ir instrukcijas.",
	"common::common_stickers_print_instructions_2":
		"Atminkite: ne visi lipdukai prieinami visomis kalbomis.",
	"common::common_stickers_printer":
		"Mes naudojame StickerMule.com, bet galite naudoti bet kurią lipdukų įmonę.",
	"common::common_stickers_type": "Tipas:",
	"common::common_stickers_type_die_cut": "iškirptas lipdukas",
	"common::common_stickers_where_to_print": "Kur spausdinti:",
	"common::common_submit": "PATEIKTI",
	"common::common_year": "metai",
	"common::common_years": "metai",

	// index — keep brand/author names identical (allowed). Translate captions.
	"index::home_btn_art": "menas",
	"index::home_btn_business": "verslas",
	"index::home_btn_coding": "programavimas",
	"index::home_btn_crowdfunding": "sutelktinis finansavimas",
	"index::home_btn_energy": "energija",
	"index::home_btn_environment": "aplinka",
	"index::home_btn_equality": "lygybė",
	"index::home_btn_food": "maistas",
	"index::home_btn_freedom": "laisvė",
	"index::home_btn_housing": "būstas",
	"index::home_btn_human_rights": "žmogaus teisės",
	"index::home_btn_money": "pinigai",
	"index::home_btn_networks": "tinklai",
	"index::home_btn_payments": "mokėjimai",
	"index::home_btn_politics": "politika",
	"index::home_btn_property_rights": "nuosavybės teisės",
	"index::home_btn_salary": "jūsų atlyginimas",
	"index::home_btn_self_custody": "savarankiška saugykla",
	"index::home_btn_war": "karas",
	"index::home_btn_you": "jūs",
	"index::home_intro":
		"Bakstelėkite kategoriją žemiau ir sužinokite, kaip Bitcoin tai pagerina, arba tiesiog pradėkite slinkti, kad ištyrinėtumėte.",

	// Brand/author names — keep identical to English (allowed)
	"index::home_link_author_anita_posch": "Anita Posch",
	"index::home_link_author_arman_the_parman": "Arman The Parman",
	"index::home_link_author_bitcoin_explorama": "Bitcoin Explorama",
	"index::home_link_author_bitcoin_is_green": "BitcoinIs.Green",
	"index::home_link_author_bitcoin_magazine": "Bitcoin Magazine",
	"index::home_link_author_bitcoin_rocks": "bitcoin.rocks",
	"index::home_link_author_blockworks": "Blockworks",
	"index::home_link_author_cic": "Sudėtinės infliacijos skaičiuoklė",
	"index::home_link_author_coindesk": "CoinDesk",
	"index::home_link_author_daniel_batten": "Daniel Batten",
	"index::home_link_author_forbes": "Forbes",
	"index::home_link_author_fortune": "Fortune",
	"index::home_link_author_geyser": "Geyser",
	"index::home_link_author_lightning_address": "LightningAddress.com",
	"index::home_link_author_lyn_alden": "Lyn Alden",
	"index::home_link_author_makerbits": "MakerBits",
	"index::home_link_author_mempool_space": "Mempool.space",
	"index::home_link_author_misha_guttentag": "Misha Guttentag",
	"index::home_link_author_mit_technology_review": "MIT Technology Review",
	"index::home_link_author_quartz": "Quartz",
	"index::home_link_author_saifedean_ammous": "Saifedean Ammous",
	"index::home_link_author_satsie": "Satsie",
	"index::home_link_author_saving_satoshi": "Saving Satoshi",
	"index::home_link_author_texas_am_university": "Texas A&M universitetas",
	"index::home_link_author_time_magazine": "TIME žurnalas",
	"index::home_link_author_vfbm": "VoteForBetter.Money",
	"index::home_link_author_wes_lippman": "Wes Lippman",
	"index::home_link_author_yahoo_finance": "Yahoo Finance",
	"index::home_link_author_youtube": "YouTube",

	// Card titles
	"index::home_link_title_art_1": "Prisijunkite prie mūsų Bitcoin lipdukų iniciatyvos",
	"index::home_link_title_art_3": "Spausdinkite ir kabinkite Bitcoin lankstinukus",
	"index::home_link_title_bank_runs":
		"Bitcoin neturi banko bėgimų",
	"index::home_link_title_bonds":
		"Bitcoin prieš obligacijas: palyginimas",
	"index::home_link_title_business_1":
		"Sužinokite, kodėl Bitcoin yra naudingas verslui",
	"index::home_link_title_business_3":
		"Bitcoin prieš akcijas: palyginimas",
	"index::home_link_title_cash":
		"Bitcoin prieš grynuosius: palyginimas",
	"index::home_link_title_cbdc":
		"Bitcoin prieš CBDC: palyginimas",
	"index::home_link_title_coding_1":
		"Interaktyvus vadovas apie techninę Bitcoin pusę",
	"index::home_link_title_coding_2":
		"bitcoinSwitch: pritaikykite bet kokį įrenginį priimti Bitcoin",
	"index::home_link_title_coding_3":
		"Programuokite per Bitcoin paslaptis",
	"index::home_link_title_crowdfunding_1":
		"Kaip Bitcoin maitino didžiausius Nigerijos protestus per kartą",
	"index::home_link_title_crowdfunding_2":
		"Kanados sunkvežimių vairuotojų protestas surenka pinigus Bitcoin po to, kai GoFundMe blokuoja aukas",
	"index::home_link_title_crowdfunding_3":
		"Geyser: sutelktinis finansavimas su Bitcoin",
	"index::home_link_title_crypto":
		"Bitcoin prieš kriptovaliutas: palyginimas",
	"index::home_link_title_energy_1":
		"Kaip Bitcoin stabilizuoja Teksaso elektros tinklą",
	"index::home_link_title_energy_4":
		"Bitcoin kasyba stabilizuoja energetikos tinklus per atsaką į paklausą",
	"index::home_link_title_energy_5":
		"Bitcoin kasėjai atneša hidroenergiją kaimo Afrikos bendruomenėms",
	"index::home_link_title_energy_6":
		"Kaip Bitcoin skatina atsinaujinančią energiją",
	"index::home_link_title_environment_1":
		"Kaip Bitcoin kasyba mažina pasaulines metano emisijas",
	"index::home_link_title_environment_2":
		"Kaip Bitcoin kasyba išgelbėjo nacionalinį parką",
	"index::home_link_title_environment_3":
		"Bitcoin yra žaliausia pramonė Žemėje",
	"index::home_link_title_environment_4":
		"Bitcoin kasyba neleidžia deginamoms gamtinėms dujoms teršti atmosferos",
	"index::home_link_title_equality_1":
		"Bitcoin atneša viltį ir galimybes pietų afrikiečiams",
	"index::home_link_title_equality_2":
		"Kaip Bitcoin gali būti žaidimo pakeitėjas juodaodžiams amerikiečiams",
	"index::home_link_title_fine_art":
		"Bitcoin prieš dailę: palyginimas",
	"index::home_link_title_food_1":
		"Kaip infliacija veikia maisto kainas",
	"index::home_link_title_food_2":
		"Kaip fiat pinigai kenkia maistui, ūkiams ir Žemės dirvožemiui",
	"index::home_link_title_freedom_1":
		"Kodėl Bitcoin svarbus laisvei",
	"index::home_link_title_freedom_2":
		"Bitcoin siūlo laisvę nuo politinių represijų",
	"index::home_link_title_get_started_1":
		"Sužinokite Bitcoin pagrindus",
	"index::home_link_title_get_started_2":
		"Įsigykite savo pirmą Bitcoin piniginę",
	"index::home_link_title_get_started_3":
		"Kaip saugiai pirkti Bitcoin",
	"index::home_link_title_gold":
		"Bitcoin prieš auksą: palyginimas",
	"index::home_link_title_housing_1":
		"Kaip Bitcoin vėl padarys būstą įperkamą",
	"index::home_link_title_human_rights_1":
		"Kaip Bitcoin užtikrina žmogaus teises",
	"index::home_link_title_human_rights_2":
		"Tylus Afrikos Bitcoin perversmas",
	"index::home_link_title_human_rights_3":
		"Bitcoin saugo žmogaus teises visame pasaulyje",
	"index::home_link_title_inflation":
		"Bitcoin neturi infliacijos",
	"index::home_link_title_networks_1":
		"Tiesioginis Bitcoin tinklo vaizdas",
	"index::home_link_title_networks_2":
		"Bitcoin prieš bankus: palyginimas",
	"index::home_link_title_payments_1":
		"Bitcoin prieš Visa: palyginimas",
	"index::home_link_title_payments_2":
		"Žvilgsnis į Lightning Network (momentinius Bitcoin mokėjimus)",
	"index::home_link_title_payments_3":
		"Salvadoro Bitcoin piniginė salvadoriečiams galėtų sutaupyti 400 mln. USD pinigų perlaidų mokesčių per metus",
	"index::home_link_title_payments_4":
		"Gaukite savo Lightning adresą, kad gautumėte momentinius Bitcoin mokėjimus",
	"index::home_link_title_politics_1":
		"Bitcoin yra politinis paradoksas",
	"index::home_link_title_politics_2":
		"Galite balsuoti už geresnius pinigus",
	"index::home_link_title_property_rights_1":
		"Bitcoin yra tobula nuosavybės forma",
	"index::home_link_title_property_rights_2":
		"Bitcoin prieš nekilnojamąjį turtą: palyginimas",
	"index::home_link_title_self_custody_1":
		"Kaip saugiai laikyti savo Bitcoin",
	"index::home_link_title_self_custody_2":
		"6 priežastys atsiimti Bitcoin iš biržų",
	"index::home_link_title_self_custody_3":
		"Auksas, Bitcoin ir savarankiška saugykla",
	"index::home_link_title_war_1":
		"Kaip Bitcoin galėtų užbaigti begalinį karą",
	"index::home_link_title_war_2":
		"Bitcoin ir veteranai: natūralus suderinimas",
	"index::home_link_title_war_3":
		"Kaip Bitcoin padeda civiliams pabėgti nuo karo Sudane",
	"index::home_link_title_your_salary_1":
		"Sužinokite, kiek jūsų atlyginimas turėtų augti, kad neatsiliktų nuo infliacijos",
	"index::home_section_bitcoin_and": "Bitcoin ir",
};

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
	console.log(`fix-remaining (lt): filled ${filled}, already-done ${skipped}`);
	if (missing > 0) {
		console.log(`\nStill missing (${missing}):`);
		for (const k of missingKeys.slice(0, 50)) console.log("  -", k);
		if (missingKeys.length > 50)
			console.log(`  ... +${missingKeys.length - 50} more`);
		process.exitCode = 1;
	}
}

main();
