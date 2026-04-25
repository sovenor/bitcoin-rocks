#!/usr/bin/env node
/**
 * Hungarian (hu) manifest refresh — fix remaining locale-specific gaps.
 * 67 leftover entries in legacy V1 namespaces / pages where Hungarian
 * never had keys to begin with (missing), plus one untranslated currency
 * label.
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
	"hu.json",
);

const T = {
	// bitcoin-vs-cbdc legacy point summaries
	"bitcoin-vs-cbdc::point_1_summary_2":
		"Senki sem akadályozhat meg abban, hogy Bitcoinnal tranzakciót hajts végre.",
	"bitcoin-vs-cbdc::point_1_summary_3":
		"A CBDC-ket úgy tervezték, hogy a kormányoknak és a központi bankoknak teljes ellenőrzést adjanak a pénzed felett.",
	"bitcoin-vs-cbdc::point_2_summary_2":
		"A CBDC-ket úgy lehet programozni, hogy lejárjanak.",
	"bitcoin-vs-cbdc::point_2_summary_3":
		"Amikor a CBDC-k lejárnak, megakadályozzák, hogy a jövőre megtakaríts.",
	"bitcoin-vs-cbdc::point_3_summary_3": "",
	"bitcoin-vs-cbdc::point_5_summary_2":
		"Több tízezer független csomópont validálja a hálózat szabályait.",

	// bitcoin-vs-fine-art legacy V1 keys
	"bitcoin-vs-fine-art::fine_art_intro_1":
		"A képzőművészet évszázadok óta luxusbefektetés, és a gazdag gyűjtők gyakran értékőrzőként tekintenek rá.",
	"bitcoin-vs-fine-art::fine_art_intro_2":
		"A Bitcoin digitális pénz, amelyet sokan szintén értékőrzőnek és befektetésnek tekintenek.",
	"bitcoin-vs-fine-art::fine_art_intro_3":
		"De miben különbözik a fizikai műalkotás a digitális pénztől, mint amilyen a Bitcoin? Vessünk egy pillantást a két befektetési forma közötti különbségekre: Bitcoin és képzőművészet.",
	"bitcoin-vs-fine-art::fine_art_point_1": "Minden darab egyedi",
	"bitcoin-vs-fine-art::fine_art_point_2":
		"Speciális aukciókat igényel",
	"bitcoin-vs-fine-art::fine_art_point_3": "Magas aukciós díjak",
	"bitcoin-vs-fine-art::fine_art_point_4": "Nem osztható",
	"bitcoin-vs-fine-art::fine_art_point_5":
		"Szakértői hitelesítést igényel",
	"bitcoin-vs-fine-art::fine_art_point_6":
		"Sérülésnek kitéve",
	"bitcoin-vs-fine-art::fine_art_point_7":
		"Csak gazdag gyűjtőknek",

	// bitcoin-vs-real-estate legacy V1 keys
	"bitcoin-vs-real-estate::real_estate_intro_1":
		"Az ingatlan évtizedek óta népszerű befektetés, és gyakran stabil értékőrzőnek tekintik.",
	"bitcoin-vs-real-estate::real_estate_intro_2":
		"A Bitcoin egy 2009-ben létrehozott digitális pénz, amelyet sokan szintén értékőrzőnek és befektetésnek tekintenek.",
	"bitcoin-vs-real-estate::real_estate_intro_3":
		"De miben különbözik a fizikai ingatlan a digitális pénztől, mint amilyen a Bitcoin? Vessünk egy pillantást a két befektetési forma közötti különbségekre: Bitcoin és ingatlan.",
	"bitcoin-vs-real-estate::real_estate_point_1":
		"Nem mozgatható",
	"bitcoin-vs-real-estate::real_estate_point_2":
		"Nem osztható könnyen",
	"bitcoin-vs-real-estate::real_estate_point_3":
		"Kormányzati ellenőrzés alatt",
	"bitcoin-vs-real-estate::real_estate_point_4":
		"Folyamatos karbantartást igényel",
	"bitcoin-vs-real-estate::real_estate_point_5":
		"Vagyonadó hatálya alatt",
	"bitcoin-vs-real-estate::real_estate_point_6":
		"Természeti katasztrófáknak kitéve",
	"bitcoin-vs-real-estate::real_estate_point_7":
		"Minden ingatlan egyedi",
	"bitcoin-vs-real-estate::real_estate_point_8":
		"Csak helyi vásárlóknak",
	"bitcoin-vs-real-estate::real_estate_point_9":
		"Hozzájárul a lakhatás pénzügyiesítéséhez",

	// bitcoin-vs-visa legacy V1 keys
	"bitcoin-vs-visa::point_1_summary_2":
		"Ettől a Bitcoin befogadóbb és hozzáférhetőbb az emberek számára szerte a világon, különösen azoknak, akiknek nincs bankszámlájuk vagy korlátozott hozzáférésük van a bankokhoz.",
	"bitcoin-vs-visa::point_3_summary_2":
		"Ez az átláthatóság megbízhatóbbá teszi a Bitcoint, és lehetővé teszi a hálózat integritásának független ellenőrzését.",
	"bitcoin-vs-visa::point_4_summary_2":
		"A Bitcoinnal megőrződ az irányítást a pénzed felett, és nem zárhatnak ki a fizetési rendszerből.",
	"bitcoin-vs-visa::point_5_summary_2":
		"A Bitcoin-tranzakciók végleges teljesítések adósság létrehozása nélkül — csak olyan Bitcoint költhetsz el, amely valóban a tiéd.",
	"bitcoin-vs-visa::point_7_summary_2":
		"A hitelkártya-hálózatoknak nyitvatartási idejük, karbantartási ablakaik és földrajzi korlátaik vannak, amelyek megakadályozhatják a tranzakciók feldolgozását.",

	// business/maps legacy V1
	"business/maps::bitcoin_merchant_maps_list_your_business_for_free":
		"Bitcoin kereskedői térképek — Add hozzá a vállalkozásodat ingyen",
	"business/maps::maps_view": "Nézd meg a térképet itt.",

	// business/sticker-files/english/index legacy
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"Angol „Bitcoin Accepted Here” matricafájlok",

	// business/stickers legacy V1
	"business/stickers::bitcoin_accepted_here_stickers":
		"„Bitcoin Accepted Here” matricák",
	"business/stickers::stickers_request":
		"Igényeld az ingyenes matricáidat",

	// business/wallets legacy V1
	"business/wallets::how_to_accept_bitcoin_payments":
		"Hogyan fogadj el Bitcoin-fizetéseket",
	"business/wallets::wallets_feature_bitcoin_only":
		"Kizárólag Bitcoin pénztárca",
	"business/wallets::wallets_feature_hybrid": "Hibrid pénztárca",
	"business/wallets::wallets_feature_in_person":
		"Csak személyes fizetések",
	"business/wallets::wallets_feature_in_person_online":
		"Személyes és online fizetések",
	"business/wallets::wallets_feature_info":
		"Vállalkozási információ szükséges",
	"business/wallets::wallets_feature_invoicing":
		"Ingyenes számlázószoftver",
	"business/wallets::wallets_feature_multiple_employees":
		"Több alkalmazott támogatása (BPT-k)",
	"business/wallets::wallets_feature_no_info":
		"Nincs szükség adatokra",
	"business/wallets::wallets_feature_online_store":
		"Online bolt integráció",
	"business/wallets::wallets_feature_self_hosted":
		"Saját szerveren = 0 % díj",
	"business/wallets::wallets_feature_settles_bitcoin":
		"100 %-ban Bitcoinban rendezi",
	"business/wallets::wallets_feature_settles_both":
		"Bitcoinban és dollárban rendezi",
	"business/wallets::wallets_get_wallet":
		"PÉNZTÁRCA LETÖLTÉSE",
	"business/wallets::wallets_header":
		"SZEREZZ INGYENES BITCOIN PÉNZTÁRCÁT BITCOIN-FIZETÉSEK ELFOGADÁSÁRA",
	"business/wallets::wallets_intro_1":
		"Minden Bitcoin pénztárca együttműködik egymással, így az ügyfeleid Bitcoinnal fizethetnek neked, függetlenül attól, melyik pénztárcát használják.",
	"business/wallets::wallets_intro_2": "Kizárólag Bitcoin pénztárcák:",
	"business/wallets::wallets_intro_3":
		"Ezek tiszta Bitcoin pénztárcák, amelyek feltárják a Bitcoin teljes előnyeit: nincsenek közvetítők, alacsony díjak, valamint nincs visszaterhelés és csalás.",
	"business/wallets::wallets_intro_4": "Hibrid pénztárcák:",
	"business/wallets::wallets_intro_5":
		"Ezek lehetővé teszik, hogy a Bitcoin bármely részét dollárra váltsd, amint az ügyfél kifizet. A díjak még mindig alacsonyabbak, mint a hitelkártyás fizetésnél, de magasabbak, mint a tiszta Bitcoin-fizetésnél.",
	"business/wallets::wallets_intro_6":
		"Mindkettő nagyszerű mód a Bitcoin elfogadására. A használt pénztárca attól függ, hogy mekkora és milyen típusú a vállalkozásod.",
	"business/wallets::wallets_name_breez": "BREEZ",
	"business/wallets::wallets_name_btcpay_server": "BTCPAY SERVER",
	"business/wallets::wallets_name_ibex_pay": "IBEX PAY",
	"business/wallets::wallets_name_open_node": "OPEN NODE",
	"business/wallets::wallets_name_square": "SQUARE",
	"business/wallets::wallets_name_zaprite": "ZAPRITE",
	"business/wallets::wallets_square_note":
		"Bitcoin-fizetéseket fogadhatsz el a meglévő Square PoS-termináloddal vagy online bolt integrációddal. Soha nem volt egyszerűbb Bitcoin-fizetéseket elfogadni.",

	// inflation untranslated — translate to Hungarian to avoid identical-to-English match
	"inflation::inflation_thai_baht": "THAIFÖLDI BAHT",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	let stillMissing = 0;
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
			stillMissing++;
			missingKeys.push(lookupKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`fix-remaining (hu): filled ${filled}, already-done ${skipped}, still-missing ${stillMissing}`,
	);
	if (stillMissing > 0) {
		for (const k of missingKeys) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
