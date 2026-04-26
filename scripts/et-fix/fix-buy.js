#!/usr/bin/env node
/**
 * Re-translate Danish-contaminated keys in i18n/et/buy_et.json into Estonian.
 *
 * Background: i18n/et/buy_et.json was originally bootstrapped by copying
 * Danish (da) values, then partially Estonian-translated. This pass replaces
 * every remaining Danish value with proper Estonian.
 *
 * Reads the file, JSON.parse, replaces values, JSON.stringify with TAB
 * indentation, writes back. Sets @metadata.last-updated to 2026-04-26.
 */

"use strict";

const fs = require("node:fs");
const path = require("node:path");

const FILE = path.resolve(__dirname, "..", "..", "i18n", "et", "buy_et.json");

const replacements = {
	// Header / intro
	buy_header: "Kuidas osta bitcoini",
	buy_intro_c1: "Bitcoini esmakordne ostmine võib tunduda hirmutav, kuid tegelikult on see üsna lihtne, kui jagada see sammudeks.",
	buy_intro_c2: "See juhend juhatab sind läbi protsessi, kuidas bitcoini turvaliselt osta ja oma rahakotti hoiule panna.",

	// Step 1
	buy_step_1_description: "Eri riikides on saadaval erinevad bitcoini ostuvõimalused. Vali oma riik, et näha enda jaoks parimaid valikuid.",
	buy_search_countries: "Otsi oma riiki",

	// Country names — translated to Estonian
	buy_country_united_states: "Ameerika Ühendriigid",
	buy_country_australia: "Austraalia",
	buy_country_austria: "Austria",
	buy_country_belgium: "Belgia",
	buy_country_brazil: "Brasiilia",
	buy_country_canada: "Kanada",
	buy_country_france: "Prantsusmaa",
	buy_country_germany: "Saksamaa",
	buy_country_ireland: "Iirimaa",
	buy_country_italy: "Itaalia",
	buy_country_netherlands: "Holland",
	buy_country_new_zealand: "Uus-Meremaa",
	buy_country_spain: "Hispaania",
	buy_country_united_kingdom: "Ühendkuningriik",
	buy_country_argentina: "Argentina",
	buy_country_chile: "Tšiili",
	buy_country_colombia: "Colombia",
	buy_country_costa_rica: "Costa Rica",
	buy_country_czech_republic: "Tšehhi",
	buy_country_denmark: "Taani",
	buy_country_el_salvador: "El Salvador",
	buy_country_estonia: "Eesti",
	buy_country_finland: "Soome",
	buy_country_greece: "Kreeka",
	buy_country_guatemala: "Guatemala",
	buy_country_hong_kong: "Hongkong",
	buy_country_hungary: "Ungari",
	buy_country_iceland: "Island",
	buy_country_india: "India",
	buy_country_israel: "Iisrael",
	buy_country_japan: "Jaapan",
	buy_country_latvia: "Läti",
	buy_country_lithuania: "Leedu",
	buy_country_luxembourg: "Luksemburg",
	buy_country_malta: "Malta",
	buy_country_mexico: "Mehhiko",
	buy_country_norway: "Norra",
	buy_country_panama: "Panama",
	buy_country_poland: "Poola",
	buy_country_portugal: "Portugal",
	buy_country_romania: "Rumeenia",
	buy_country_singapore: "Singapur",
	buy_country_slovakia: "Slovakkia",
	buy_country_slovenia: "Sloveenia",
	buy_country_south_africa: "Lõuna-Aafrika Vabariik",
	buy_country_south_korea: "Lõuna-Korea",
	buy_country_sweden: "Rootsi",
	buy_country_switzerland: "Šveits",
	buy_country_thailand: "Tai",
	buy_country_turkey: "Türgi",
	buy_country_ukraine: "Ukraina",
	buy_country_uruguay: "Uruguay",

	// Step 2 — payment method
	buy_step_2_description: "Bitcoini ostmiseks on kaks peamist viisi: pangaülekandega või sularahas. Mõlemal on omad eelised.",
	buy_method_bank_transfer: "Pangaülekanne",
	buy_method_bank_fast: "Kiire ja lihtne",
	buy_method_bank_less_private: "Vähem privaatne",
	buy_method_bank_description: "Pangaülekanded on kõige levinum viis bitcoini ostmiseks. Need on kiired, mugavad ja tavaliselt madalamate tasudega.",
	buy_method_choose_bank: "Vali pangaülekanne",
	buy_method_cash: "Sularaha",
	buy_method_cash_private: "Privaatsem",
	buy_method_cash_limited: "Piiratud valik",
	buy_method_cash_description: "Sularahaost pakub rohkem privaatsust, kuid valikuid on vähem ja see võib nõuda kellegagi isiklikult kohtumist või bitcoini sularahaautomaadi kasutamist.",
	buy_method_choose_cash: "Vali sularaha",

	// Step 3 — buying options
	buy_step_3_description: "Siin on parimad bitcoini ostuvõimalused sinu riigi ja makseviisi jaoks:",
	buy_platform_recommended: "Soovitatud",
	buy_platform_strike_description: "Strike on kiireim ja lihtsaim viis bitcoini ostmiseks madalate tasude ja koheste Lightning Networki maksetega.",
	buy_platform_swan_description: "Swan Bitcoin on spetsialiseerunud ainult bitcoini teenustele, pakkudes dollari-keskmistatud ostmist (DCA) ja õppematerjale.",
	buy_platform_river_description: "River pakub bitcoini ostmist, kaevandamist ja hoiuteenuseid, keskendudes haridusele ja turvalisusele.",
	buy_platform_coinsquare_description: "Coinsquare on Kanada bitcoini börs, millel on tugev regulatiivne vastavus ja klienditugi.",
	buy_platform_kraken_description: "Kraken on tuntud bitcoini börs, millel on arenenud kauplemisvõimalused ja tugev turvalisus.",
	buy_platform_atm_description: "Bitcoini sularahaautomaadid võimaldavad sul bitcoini sularaha eest koheselt osta. Leia endale lähim Coin ATM Radari abil.",
	buy_platform_bisq_description: "Bisq on detsentraliseeritud kasutajatevaheline (peer-to-peer) börs, mis võimaldab privaatset bitcoini kauplemist ilma KYC-ta.",
	buy_platform_feature_instant: "Koheseid oste",
	buy_platform_feature_low_fees: "Madalad tasud",
	buy_platform_feature_lightning: "Lightning Network",
	buy_platform_feature_dca: "Dollari-keskmistatud ostmine (DCA)",
	buy_platform_feature_education: "Õppematerjalid",
	buy_platform_feature_withdrawal: "Lihtne väljavõtmine",
	buy_platform_feature_mining: "Bitcoini kaevandamine",
	buy_platform_feature_custody: "Hoiuteenused",
	buy_platform_feature_canadian: "Kanada-keskne",
	buy_platform_feature_regulated: "Reguleeritud börs",
	buy_platform_feature_support: "Klienditugi",
	buy_platform_feature_established: "Tuntud platvorm",
	buy_platform_feature_security: "Tugev turvalisus",
	buy_platform_feature_advanced: "Arenenud võimalused",
	buy_platform_feature_cash: "Sularahaostud",
	buy_platform_feature_anonymous: "Anonüümsem",
	buy_platform_feature_p2p: "Võrdõigusvõrk (otse kasutajate vahel)",
	buy_platform_feature_private: "Privaatne kauplemine",
	buy_platform_feature_decentralized: "Detsentraliseeritud",
	buy_platform_relai_description: "Relai on Šveitsi ainult bitcoini rakendus, millel on ise-hoidmise rahakott, automaatse investeerimise võimalused ja madalad tasud Euroopa kasutajatele.",
	buy_platform_feature_bitcoin_only: "Ainult bitcoin",
	buy_platform_feature_self_custody: "Ise-hoidmise rahakott",
	buy_platform_feature_auto_invest: "Automaatse investeerimise plaanid",
	buy_platform_feature_european: "Euroopa-keskne",

	// Step 4 — store safely
	buy_step_4_c1: "Pärast bitcoini ostmist on kõige tähtsam samm see oma rahakotti üle kanda, kus sina ise privaatvõtmeid kontrollid.",
	buy_step_4_c2: "Bitcoini börsil hoidmine on riskantne, sest sa ei oma tegelikult bitcoini — börs omab.",
	buy_step_4_c3: "Kui sa kontrollid oma privaatvõtmeid ise, on bitcoin tõeliselt sinu oma ja keegi ei saa seda sinult ära võtta.",
	buy_step_4_c4: "Õpi, kuidas valida oma vajadustele sobiv bitcoini rahakott:",
	buy_cta_wallets: "Vaata meie bitcoini rahakottide juhendit",
};

const raw = fs.readFileSync(FILE, "utf8");
const data = JSON.parse(raw);

let changed = 0;
for (const [key, value] of Object.entries(replacements)) {
	if (!(key in data)) {
		console.error(`Key missing in target file: ${key}`);
		process.exit(1);
	}
	if (data[key] !== value) {
		data[key] = value;
		changed += 1;
	}
}

// Update last-updated metadata
data["@metadata"] = data["@metadata"] || {};
data["@metadata"]["last-updated"] = "2026-04-26";

fs.writeFileSync(FILE, JSON.stringify(data, null, "\t") + "\n", "utf8");
console.log(`buy_et.json: replaced ${changed} keys; @metadata.last-updated = 2026-04-26`);
