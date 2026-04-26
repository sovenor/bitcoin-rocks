#!/usr/bin/env node
/**
 * Malay (ms) manifest refresh — locale-specific gaps.
 * Covers: 62 missing entries in `index` (home_card_label_*, home nav, etc.)
 * + remaining missing/untranslated locale-specific entries across other namespaces
 *   (about, bank-runs, business/*, common, compound-inflation-calculator,
 *   lightning, nostr/index, stickers, wallets).
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
	"ms.json",
);

const T = {};

/* ─────────────── index ─────────────── */
Object.assign(T, {
	"index::home_btn_saving": "menyimpan",
	"index::home_card_label_art_1": "Mari kita bandingkan",
	"index::home_card_label_art_2": "Sebarkan berita",
	"index::home_card_label_art_3": "Seni jalanan",
	"index::home_card_label_bank_runs": "Sistem rizab penuh",
	"index::home_card_label_bonds": "Mari kita bandingkan",
	"index::home_card_label_business_1": "Apa bezanya?",
	"index::home_card_label_business_2": "Terima pembayaran Bitcoin",
	"index::home_card_label_cash": "Mari kita bandingkan",
	"index::home_card_label_cbdc": "Terbuka atau tertutup?",
	"index::home_card_label_coding_1": "Tutorial interaktif",
	"index::home_card_label_coding_2": "Bina perkakasan",
	"index::home_card_label_coding_3": "Teka-teki pengaturcaraan",
	"index::home_card_label_crowdfunding_1": "Bantahan EndSARS",
	"index::home_card_label_crowdfunding_2": "Wang yang tidak dapat dihalang",
	"index::home_card_label_crowdfunding_3": "Danai projek anda",
	"index::home_card_label_crypto": "Apa bezanya?",
	"index::home_card_label_energy_1": "Penstabilan grid",
	"index::home_card_label_energy_4": "Tindak balas permintaan",
	"index::home_card_label_energy_5": "Pengelektrikan luar bandar",
	"index::home_card_label_energy_6": "Insentif boleh diperbaharui",
	"index::home_card_label_environment_1": "Pengurangan metana",
	"index::home_card_label_environment_2": "Menyelamatkan taman negara",
	"index::home_card_label_environment_3": "Industri terhijau",
	"index::home_card_label_environment_4": "Mengurangkan gas suar",
	"index::home_card_label_equality_1": "Harapan & peluang",
	"index::home_card_label_equality_2": "Pengubah permainan",
	"index::home_card_label_food_1": "Harga makanan",
	"index::home_card_label_food_2": "Ladang & tanah",
	"index::home_card_label_freedom_1": "Rejim autoritarian",
	"index::home_card_label_freedom_2": "Alat unik",
	"index::home_card_label_get_started_1": "Asas pemula",
	"index::home_card_label_get_started_2": "Dompet pertama anda",
	"index::home_card_label_get_started_3": "Beli Bitcoin",
	"index::home_card_label_gold": "Mana yang lebih baik?",
	"index::home_card_label_housing_1": "Perumahan mampu milik",
	"index::home_card_label_human_rights_1":
		"Penguatkuasaan hak asasi manusia",
	"index::home_card_label_human_rights_2": "Adopsi akar umbi",
	"index::home_card_label_human_rights_3": "Kesan global",
	"index::home_card_label_inflation": "Bitcoin adalah wang yang lebih baik",
	"index::home_card_label_networks_1": "Pandangan rangkaian langsung",
	"index::home_card_label_networks_2": "Mari kita bandingkan",
	"index::home_card_label_payments_1": "Apa bezanya?",
	"index::home_card_label_payments_2": "Pembayaran cepat & murah",
	"index::home_card_label_payments_3": "Kiriman wang",
	"index::home_card_label_payments_4": "Terima pembayaran",
	"index::home_card_label_politics_1": "Paradoks politik",
	"index::home_card_label_politics_2": "Ambil tindakan",
	"index::home_card_label_property_rights_1": "Mari kita bandingkan",
	"index::home_card_label_property_rights_2": "Pemilikan sebenar",
	"index::home_card_label_salary": "Lindungi gaji anda",
	"index::home_card_label_self_custody_1": "Panduan dompet Bitcoin",
	"index::home_card_label_self_custody_2": "Langkah paling penting",
	"index::home_card_label_self_custody_3": "Wang berdaulat",
	"index::home_card_label_war_1": "Hentikan perang tanpa akhir",
	"index::home_card_label_war_2": "Membantu veteran",
	"index::home_card_label_war_3": "Pelarian zaman perang",
	"index::home_h1":
		"Bitcoin ialah wang yang lebih baik yang sedang membina dunia yang lebih baik.",
	"index::home_nav_about": "Tentang",
	"index::home_nav_get_involved": "Terlibat",
	"index::home_nav_learn": "Pelajari",
	"index::home_source_prefix": "Sumber:",
});

/* ─────────────── about (locale-specific gaps — brand identical) ─────────────── */
Object.assign(T, {
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_page_description":
		"bitcoin.rocks ialah laman pendidikan Bitcoin yang percuma dan sumber terbuka, ditubuhkan pada tahun 2022. Misi kami adalah untuk mempercepatkan adopsi Bitcoin melalui pendidikan.",
});

/* ─────────────── bank-runs ─────────────── */
Object.assign(T, {
	"bank-runs::bank_runs_card_fdic_value": "1.42%",
});

/* ─────────────── business/accounting ─────────────── */
Object.assign(T, {
	"business/accounting::accounting_card_bpr_source": "Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source": "satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Perkhidmatan Perakaunan Satoshi Pacioli",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source": "bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+$10",
	"business/accounting::accounting_example_loss_result": "\u2212$10",
});

/* ─────────────── business/wallets ─────────────── */
Object.assign(T, {
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
});

/* ─────────────── common ─────────────── */
Object.assign(T, {
	"common::common_language_switcher_add_language": "Tambah bahasa",
	"common::common_next_buy_bitcoin": "Beli Bitcoin",
	"common::common_next_buy_bitcoin_desc":
		"Ketahui cara membeli Bitcoin dengan selamat",
	"common::common_next_calculate": "Kira inflasi anda",
	"common::common_next_calculate_desc":
		"Lihat bagaimana inflasi memberi kesan kepada gaji anda dari semasa ke semasa",
	"common::common_next_get_wallet": "Dapatkan dompet",
	"common::common_next_get_wallet_desc":
		"Dapatkan dompet Bitcoin pertama anda \u2014 percuma",
	"common::common_next_keep_learning": "Teruskan belajar",
	"common::common_next_keep_learning_desc":
		"Lihat bagaimana Bitcoin menjadikan dunia lebih baik",
	"common::common_source_bls_cpi":
		"U.S. Bureau of Labor Statistics \u2014 Consumer Price Index (CPI)",
	"common::common_source_fred_money_supply_index":
		"Federal Reserve Economic Data (FRED) \u2014 Money Supply (Indeks Kategori)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto \u2014 Bitcoin: A Peer-to-Peer Electronic Cash System (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish \u2014 \"Can a Treasury Auction Fail?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Apa seterusnya?",
	// Sticker dimensions: keep period as decimal, "inci" as inch translation.
	"common::common_stickers_dimensions_bdhi":
		"21.59 cm x 4.6482 cm (8.5 inci x 1.83 inci)",
	"common::common_stickers_dimensions_bitcoin_accepted_here":
		"20.995 cm x 6.35 cm (8.25 inci x 2.5 inci)",
	"common::common_stickers_dimensions_caution":
		"12.0142 cm x 7.9502 cm (4.73 inci x 3.13 inci)",
	"common::common_stickers_dimensions_cure_v2":
		"6.35 cm x 12.7 cm (2.5 inci x 5 inci)",
	"common::common_stickers_dimensions_danger":
		"11.4544 cm x 8.382 cm (4.51 inci x 3.3 inci)",
	"common::common_stickers_dimensions_fix":
		"11.3792 cm x 6.8072 cm (4.48 inci x 2.68 inci)",
	"common::common_stickers_dimensions_got_inflation":
		"7.9248 cm x 14.605 cm (3.12 inci x 5.75 inci)",
	"common::common_stickers_dimensions_study":
		"14.605 cm x 5.1308 cm (5.75 inci x 2.02 inci)",
	"common::common_stickers_dimensions_warning":
		"10.414 cm x 9.2202 cm (4.1 inci x 3.63 inci)",
	"common::common_stickers_dimensions_what_if":
		"21.7932 cm x 7.62 cm (8.58 inci x 3 inci)",
});

/* ─────────────── compound-inflation-calculator ─────────────── */
Object.assign(T, {
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Federal Reserve Economic Data (FRED) \u2014 Consumer Price Index for All Urban Consumers",
	"compound-inflation-calculator::sources_fred_m1":
		"Federal Reserve Economic Data (FRED) \u2014 M1 Money Supply",
});

/* ─────────────── lightning ─────────────── */
Object.assign(T, {
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja \u2014 The Bitcoin Lightning Network: Scalable Off-Chain Instant Payments (2016)",
});

/* ─────────────── nostr/index (brand names) ─────────────── */
Object.assign(T, {
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web": "iPhone, Android & web",
	"nostr/index::nostr_platform_web": "Pelayar web",
	"nostr/index::nostr_primal_name": "Primal",
});

/* ─────────────── stickers ─────────────── */
Object.assign(T, {
	"stickers::stickers_intro_c2": "Bitcoin",
});

/* ─────────────── wallets ─────────────── */
Object.assign(T, {
	"wallets::sources_bitcoin_org_choose": "Bitcoin.org \u2014 Pilih Dompet Anda",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp \u2014 Tinjauan Penyimpanan Seed Bitcoin Logam",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
});

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;

	for (const e of report.entries) {
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}
		const composite = `${e.namespace}::${e.key}`;
		if (Object.prototype.hasOwnProperty.call(T, composite)) {
			e.targetTranslation = T[composite];
			filled++;
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-locale-specific (ms): filled ${filled}, already-done ${skipped}`,
	);
}

main();
