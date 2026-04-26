#!/usr/bin/env node
/**
 * Indonesian (id) manifest refresh — inflation namespace translator.
 *
 * Indonesian conventions:
 * - Latin script, no diacritics, simple SVO grammar.
 * - "Bitcoin" stays as "Bitcoin".
 * - Decimal: comma; thousands: dot. Card numerics keep the FRED US-style
 *   formatting because they're rendered raw.
 * - "21 juta Bitcoin", "miliar", "triliun".
 * - Style: friendly second-person ("Anda") for educational copy, which is
 *   the standard register for bitcoin.rocks Indonesian copy.
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
	"id.json",
);

/* ─────────────── Per-currency labels & terms ─────────────── */
//  inIn   = "in <currency>"  (dalam <mata uang>)
//  noun   = singular currency noun
//  nounPl = same in Indonesian (no plural inflection)
//  label  = stat card label
//  existenceTitle = "<currency> in circulation"
//  debtTitle = "Total <country> government debt"

const CURRENCY = {
	usd: {
		inIn: "dalam dolar AS",
		noun: "dolar AS",
		nounPl: "dolar AS",
		label: "Dolar AS",
		existenceTitle: "Dolar AS yang beredar",
		debtTitle: "Total utang pemerintah Amerika Serikat",
	},
	eur: {
		inIn: "dalam euro",
		noun: "euro",
		nounPl: "euro",
		label: "Euro",
		existenceTitle: "Euro yang beredar",
		debtTitle: "Total utang pemerintah zona euro",
	},
	aud: {
		inIn: "dalam dolar Australia",
		noun: "dolar Australia",
		nounPl: "dolar Australia",
		label: "Dolar Australia",
		existenceTitle: "Dolar Australia yang beredar",
		debtTitle: "Total utang pemerintah Australia",
	},
	brl: {
		inIn: "dalam real Brasil",
		noun: "real Brasil",
		nounPl: "real Brasil",
		label: "Real Brasil",
		existenceTitle: "Real Brasil yang beredar",
		debtTitle: "Total utang pemerintah Brasil",
	},
	cad: {
		inIn: "dalam dolar Kanada",
		noun: "dolar Kanada",
		nounPl: "dolar Kanada",
		label: "Dolar Kanada",
		existenceTitle: "Dolar Kanada yang beredar",
		debtTitle: "Total utang pemerintah Kanada",
	},
	gbp: {
		inIn: "dalam pound Inggris",
		noun: "pound",
		nounPl: "pound",
		label: "Pound Inggris",
		existenceTitle: "Pound Inggris yang beredar",
		debtTitle: "Total utang pemerintah Inggris",
	},
	ils: {
		inIn: "dalam shekel Israel",
		noun: "shekel",
		nounPl: "shekel",
		label: "Shekel Israel",
		existenceTitle: "Shekel Israel yang beredar",
		debtTitle: "Total utang pemerintah Israel",
	},
	inr: {
		inIn: "dalam rupee India",
		noun: "rupee",
		nounPl: "rupee",
		label: "Rupee India",
		existenceTitle: "Rupee India yang beredar",
		debtTitle: "Total utang pemerintah India",
	},
	jpy: {
		inIn: "dalam yen Jepang",
		noun: "yen",
		nounPl: "yen",
		label: "Yen Jepang",
		existenceTitle: "Yen Jepang yang beredar",
		debtTitle: "Total utang pemerintah Jepang",
	},
	mxn: {
		inIn: "dalam peso Meksiko",
		noun: "peso Meksiko",
		nounPl: "peso Meksiko",
		label: "Peso Meksiko",
		existenceTitle: "Peso Meksiko yang beredar",
		debtTitle: "Total utang pemerintah Meksiko",
	},
	nzd: {
		inIn: "dalam dolar Selandia Baru",
		noun: "dolar Selandia Baru",
		nounPl: "dolar Selandia Baru",
		label: "Dolar Selandia Baru",
		existenceTitle: "Dolar Selandia Baru yang beredar",
		debtTitle: "Total utang pemerintah Selandia Baru",
	},
	php: {
		inIn: "dalam peso Filipina",
		noun: "peso Filipina",
		nounPl: "peso Filipina",
		label: "Peso Filipina",
		existenceTitle: "Peso Filipina yang beredar",
		debtTitle: "Total utang pemerintah Filipina",
	},
	thb: {
		inIn: "dalam baht Thailand",
		noun: "baht",
		nounPl: "baht",
		label: "Baht Thailand",
		existenceTitle: "Baht Thailand yang beredar",
		debtTitle: "Total utang pemerintah Thailand",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Jika Anda menabung ${c.inIn}, Anda mungkin telah memperhatikan bahwa uang Anda dapat membeli lebih sedikit. Anda membutuhkan lebih banyak ${c.nounPl} untuk membeli barang yang sama. Anda membutuhkan lebih banyak ${c.nounPl} hanya untuk mempertahankan standar hidup yang sama.`;
		case "intro_2":
			return `Tapi tidak harus seperti itu.`;
		case "intro_highlight":
			return `Hidup menjadi lebih murah bagi orang-orang yang menabung dalam Bitcoin selama 4 tahun terakhir.`;
		case "proof_h2":
			return `Inilah buktinya: uang Anda terus kehilangan nilai`;
		case "proof_p1":
			return `Setiap ${c.noun} yang Anda miliki di rekening bank kehilangan nilainya tahun demi tahun. Itu terjadi karena tidak ada batas berapa banyak ${c.nounPl} yang dapat dibuat.`;
		case "proof_p2":
			return `Pasokan tak terbatas inilah penyebab utama inflasi. Beberapa tahun terakhir, jumlah ${c.nounPl} yang beredar telah meningkat secara dramatis.`;
		case "proof_p3":
			return `Ketika lebih banyak uang dicetak dari ketiadaan, segala sesuatu menjadi lebih mahal. Termasuk bahan baku yang dibeli perusahaan untuk membuat produk — yang berarti harga lebih tinggi bagi Anda.`;
		case "proof_p4":
			return `Seiring meningkatnya utang pemerintah, mereka mencetak lebih banyak uang karena semakin sedikit pihak yang bersedia meminjamkan uang kepada pemerintah.`;
		case "proof_p5_before":
			return `Jika Anda tidak bisa meminjam, Anda tidak bisa membelanjakan. Tetapi ketika pemerintah`;
		case "proof_p5_link":
			return `tidak bisa meminjam`;
		case "proof_p5_after":
			return `, mereka cukup mencetak lebih banyak uang.`;
		case "proof_p6":
			return `Lebih banyak utang pemerintah berarti lebih banyak pencetakan uang. Lebih banyak pencetakan uang berarti lebih banyak inflasi. Dan tidak ada akhirnya yang terlihat.`;
		case "btc_h2":
			return `Bitcoin tidak memiliki inflasi`;
		case "btc_p1":
			return `Inflasi berarti uang Anda dapat membeli lebih sedikit dari waktu ke waktu. Bitcoin adalah uang yang lebih baik karena tidak memiliki inflasi.`;
		case "btc_p2_before":
			return `${c.label} memiliki pasokan tak terbatas, yang berarti selalu ada lebih banyak yang bisa dicetak.`;
		case "btc_p2_link":
			return `Bitcoin itu langka`;
		case "btc_p2_after":
			return `, karena pasokan maksimumnya adalah 21 juta Bitcoin. Tidak ada yang bisa mencetak Bitcoin lebih banyak.`;
		case "btc_p3":
			return `Secara historis, Bitcoin telah meningkatkan daya belinya dari waktu ke waktu, sementara ${c.label.toLowerCase()} kehilangan daya belinya. Banyak orang menggunakan Bitcoin sebagai rekening tabungan jangka panjang — uang yang mereka simpan tanpa diutak-atik selama bertahun-tahun sementara nilainya tumbuh.`;
		case "btc_p4":
			return `Mana yang lebih Anda inginkan: menabung ${c.inIn} — ${c.nounPl} yang dapat membeli lebih sedikit dari waktu ke waktu — atau menabung dalam Bitcoin, yang secara historis dapat membeli lebih banyak dari waktu ke waktu?`;
		case "freedom_h2":
			return `Bitcoin juga merupakan alat kebebasan`;
		case "freedom_p1":
			return `Jaringan Bitcoin tidak dimiliki siapa pun. Tidak ada pemerintah atau korporasi yang mengendalikannya. Ia dibangun untuk melindungi kebebasan dan uang Anda.`;
		case "freedom_p2":
			return `Saat ini, orang-orang di seluruh dunia menggunakan Bitcoin untuk melindungi kebebasan mereka — bahkan ketika pemerintah mereka tidak mau membantu atau mencoba menghentikan mereka.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Daya beli yang hilang selama 4 tahun";
		case "stat_source_bpr":
			return "Sumber: Bitcoin Price Report \u2192";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Pelajari lebih lanjut \u2192",
	inflation_freedom_scarce_title: "Langka",
	inflation_freedom_scarce_desc:
		"Tidak akan pernah ada lebih dari 21 juta Bitcoin. Tidak ada yang bisa mencetak lebih banyak.",
	inflation_freedom_decentralized_title: "Terdesentralisasi",
	inflation_freedom_decentralized_desc:
		"Tidak ada satu entitas pun \u2014 tidak ada pemerintah, tidak ada korporasi \u2014 yang mengendalikan Bitcoin.",
	inflation_freedom_permissionless_title: "Tanpa Izin",
	inflation_freedom_permissionless_desc:
		"Siapa pun, di mana pun, dapat bergabung dengan jaringan. Tidak ada yang bisa menghentikan Anda.",
	inflation_freedom_sovereign_title: "Berdaulat",
	inflation_freedom_sovereign_desc:
		"Sistem baru, independen dari politisi dan janji-janji mereka yang dilanggar.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "21 Juta",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Tetap selamanya",
	inflation_stat_bitcoin_source: "Sumber: Whitepaper Bitcoin \u2192",

	// Shared currency stat labels
	inflation_stat_comparison_today: "HARI INI",
	inflation_stat_currency_counting: "Dan terus bertambah...",
	inflation_stat_currency_detail_4yr_lost:
		"Daya beli yang hilang selama 4 tahun",
	inflation_stat_currency_source_cpi: "Sumber: FRED CPI \u2192",
	inflation_stat_currency_source_debt:
		"Sumber: Utang Pemerintah FRED \u2192",
	inflation_stat_currency_source_m1:
		"Sumber: Pasokan Uang Sempit FRED \u2192",
	inflation_stat_currency_source_m1_short: "Sumber: FRED \u2192",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Daya beli yang diperoleh selama 4 tahun",
	inflation_stat_btc_source_bpr: "Sumber: Bitcoin Price Report \u2192",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Para pekerja menggunakan Bitcoin untuk mengakses uang setelah rekening bank mereka dibekukan.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Para pengunjuk rasa menggunakan Bitcoin untuk mendanai gerakan mereka setelah bank memutus akses mereka.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Penambangan Bitcoin membersihkan limbah batu bara yang ditolak ditangani oleh pemerintah.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Penambangan Bitcoin membantu menjaga listrik tetap menyala selama badai besar.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report \u2014 grafik kinerja 4 tahun (semua mata uang)",
	sources_bitcoin_source_code:
		"Kode Sumber Bitcoin \u2014 Batas Pasokan 21 Juta",
	sources_canadian_trucker:
		"Protes sopir truk Kanada \u2014 Bitcoin digunakan untuk menyiasati rekening bank yang dibekukan (YouTube)",
	sources_mempool_space:
		"Mempool.space \u2014 Data Pasokan & Penambangan Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa \u2014 Bagaimana Bitcoin menggerakkan protes EndSARS Nigeria",
	sources_pennsylvania_mining:
		"Penambangan Bitcoin Pennsylvania memanfaatkan kembali limbah metana (YouTube)",
	sources_texas_mining:
		"Penambangan Bitcoin Texas dan jaringan listrik (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin tidak memiliki inflasi, tetapi uang Anda memilikinya.",
	inflation_choose: "Pilih mata uang Anda untuk melihat buktinya",
	inflation_choose_another: "\u2190 Pilih mata uang lain",
	inflation_sticker_learn:
		"Pelajari bagaimana Bitcoin dapat membantu.",
	inflation_sticker_lets_find_out: "Mari kita cari tahu.",
};

/* ─────────────── Apply ─────────────── */

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let skipped = 0;
	const unmatched = [];

	for (const e of report.entries) {
		if (e.namespace !== "inflation") continue;
		if (typeof e.targetTranslation === "string") {
			skipped++;
			continue;
		}

		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		let m = e.key.match(/^inflation_stat_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = "stat_" + m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		m = e.key.match(/^inflation_([a-z]{3})_(.+)$/);
		if (m) {
			const code = m[1];
			const suffix = m[2];
			const value = t(code, suffix);
			if (value !== null) {
				e.targetTranslation = value;
				filled++;
				continue;
			}
		}

		unmatched.push(e.key);
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`translate-inflation (id): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
