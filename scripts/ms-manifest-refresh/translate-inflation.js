#!/usr/bin/env node
/**
 * Malay (ms / Bahasa Malaysia) manifest refresh — inflation namespace translator.
 *
 * Conventions (Malaysian Malay vs Indonesian):
 * - "wang" (not "uang"), "mata wang" (not "mata uang")
 * - "kerajaan" (not "pemerintah")
 * - "akaun" (not "rekening" / "akun")
 * - "syarikat" (not "perusahaan")
 * - "Amerika Syarikat" (not "Amerika Serikat")
 * - "Jepun" (not "Jepang"), "Mexico" (not "Meksiko"), "Brazil" (not "Brasil")
 * - "British" (not "Inggris"), "New Zealand" (not "Selandia Baru")
 * - "Eropah" (not "Eropa")
 * - "bilion / trilion" (not "miliar / triliun")
 * - "perniagaan" (not "bisnis")
 * - "kos / yuran" (not "biaya")
 * - "kad" (not "kartu")
 * - "percuma" (not "gratis")
 * - "perlu" (not "harus")
 * - "simpanan" (not "tabungan")
 * - "bekalan" (not "pasokan")
 * - "pekerja" (not "karyawan")
 * - "mencetak" stays
 * - "boleh" (not "bisa" / sometimes "dapat")
 * - "kerana" (not "karena")
 * - "selepas" (not "setelah")
 * - "anda" / "Anda" used (Malaysia commonly uses lowercase but "Anda" is also fine for educational copy)
 * - "berlaku" (not "terjadi")
 * - "segera / serta-merta" (not "secara instan")
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

/* ─────────────── Per-currency labels & terms ─────────────── */
//  inIn   = "in <currency>"  (dalam <mata wang>)
//  noun   = singular currency noun
//  nounPl = same in Malay (no plural inflection)
//  label  = stat card label
//  existenceTitle = "<currency> in circulation"
//  debtTitle = "Total <country> government debt"

const CURRENCY = {
	usd: {
		inIn: "dalam dolar AS",
		noun: "dolar AS",
		nounPl: "dolar AS",
		label: "Dolar AS",
		existenceTitle: "Dolar AS dalam edaran",
		debtTitle: "Jumlah hutang kerajaan Amerika Syarikat",
	},
	eur: {
		inIn: "dalam euro",
		noun: "euro",
		nounPl: "euro",
		label: "Euro",
		existenceTitle: "Euro dalam edaran",
		debtTitle: "Jumlah hutang kerajaan zon euro",
	},
	aud: {
		inIn: "dalam dolar Australia",
		noun: "dolar Australia",
		nounPl: "dolar Australia",
		label: "Dolar Australia",
		existenceTitle: "Dolar Australia dalam edaran",
		debtTitle: "Jumlah hutang kerajaan Australia",
	},
	brl: {
		inIn: "dalam real Brazil",
		noun: "real Brazil",
		nounPl: "real Brazil",
		label: "Real Brazil",
		existenceTitle: "Real Brazil dalam edaran",
		debtTitle: "Jumlah hutang kerajaan Brazil",
	},
	cad: {
		inIn: "dalam dolar Kanada",
		noun: "dolar Kanada",
		nounPl: "dolar Kanada",
		label: "Dolar Kanada",
		existenceTitle: "Dolar Kanada dalam edaran",
		debtTitle: "Jumlah hutang kerajaan Kanada",
	},
	gbp: {
		inIn: "dalam paun British",
		noun: "paun",
		nounPl: "paun",
		label: "Paun British",
		existenceTitle: "Paun British dalam edaran",
		debtTitle: "Jumlah hutang kerajaan United Kingdom",
	},
	ils: {
		inIn: "dalam shekel Israel",
		noun: "shekel",
		nounPl: "shekel",
		label: "Shekel Israel",
		existenceTitle: "Shekel Israel dalam edaran",
		debtTitle: "Jumlah hutang kerajaan Israel",
	},
	inr: {
		inIn: "dalam rupee India",
		noun: "rupee",
		nounPl: "rupee",
		label: "Rupee India",
		existenceTitle: "Rupee India dalam edaran",
		debtTitle: "Jumlah hutang kerajaan India",
	},
	jpy: {
		inIn: "dalam yen Jepun",
		noun: "yen",
		nounPl: "yen",
		label: "Yen Jepun",
		existenceTitle: "Yen Jepun dalam edaran",
		debtTitle: "Jumlah hutang kerajaan Jepun",
	},
	mxn: {
		inIn: "dalam peso Mexico",
		noun: "peso Mexico",
		nounPl: "peso Mexico",
		label: "Peso Mexico",
		existenceTitle: "Peso Mexico dalam edaran",
		debtTitle: "Jumlah hutang kerajaan Mexico",
	},
	nzd: {
		inIn: "dalam dolar New Zealand",
		noun: "dolar New Zealand",
		nounPl: "dolar New Zealand",
		label: "Dolar New Zealand",
		existenceTitle: "Dolar New Zealand dalam edaran",
		debtTitle: "Jumlah hutang kerajaan New Zealand",
	},
	php: {
		inIn: "dalam peso Filipina",
		noun: "peso Filipina",
		nounPl: "peso Filipina",
		label: "Peso Filipina",
		existenceTitle: "Peso Filipina dalam edaran",
		debtTitle: "Jumlah hutang kerajaan Filipina",
	},
	thb: {
		inIn: "dalam baht Thailand",
		noun: "baht",
		nounPl: "baht",
		label: "Baht Thailand",
		existenceTitle: "Baht Thailand dalam edaran",
		debtTitle: "Jumlah hutang kerajaan Thailand",
	},
};

/* ─────────────── Templated translation function ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Jika anda menyimpan ${c.inIn}, anda mungkin telah perasan bahawa wang anda boleh membeli kurang. Anda memerlukan lebih banyak ${c.nounPl} untuk membeli barang yang sama. Anda memerlukan lebih banyak ${c.nounPl} hanya untuk mengekalkan taraf hidup yang sama.`;
		case "intro_2":
			return `Tetapi tidak semestinya begitu.`;
		case "intro_highlight":
			return `Hidup menjadi lebih murah bagi mereka yang menyimpan dalam Bitcoin sepanjang 4 tahun yang lalu.`;
		case "proof_h2":
			return `Inilah buktinya: wang anda terus kehilangan nilainya`;
		case "proof_p1":
			return `Setiap ${c.noun} yang anda simpan di akaun bank kehilangan nilainya tahun demi tahun. Itu berlaku kerana tiada had berapa banyak ${c.nounPl} boleh dicipta.`;
		case "proof_p2":
			return `Bekalan tanpa had inilah punca utama inflasi. Beberapa tahun kebelakangan ini, jumlah ${c.nounPl} dalam edaran telah meningkat secara dramatik.`;
		case "proof_p3":
			return `Apabila lebih banyak wang dicetak daripada ketiadaan, segala-galanya menjadi lebih mahal. Termasuk bahan mentah yang dibeli syarikat untuk membuat produk \u2014 yang bermakna harga lebih tinggi untuk anda.`;
		case "proof_p4":
			return `Apabila hutang kerajaan meningkat, mereka mencetak lebih banyak wang kerana semakin sedikit pihak yang sanggup meminjamkan wang kepada kerajaan.`;
		case "proof_p5_before":
			return `Jika anda tidak boleh meminjam, anda tidak boleh berbelanja. Tetapi apabila kerajaan`;
		case "proof_p5_link":
			return `tidak boleh meminjam`;
		case "proof_p5_after":
			return `, mereka hanya mencetak lebih banyak wang.`;
		case "proof_p6":
			return `Lebih banyak hutang kerajaan bermakna lebih banyak percetakan wang. Lebih banyak percetakan wang bermakna lebih banyak inflasi. Dan tiada penghujungnya yang kelihatan.`;
		case "btc_h2":
			return `Bitcoin tiada inflasi`;
		case "btc_p1":
			return `Inflasi bermakna wang anda boleh membeli kurang dari semasa ke semasa. Bitcoin adalah wang yang lebih baik kerana ia tiada inflasi.`;
		case "btc_p2_before":
			return `${c.label} mempunyai bekalan tanpa had, yang bermakna sentiasa ada lebih banyak yang boleh dicetak.`;
		case "btc_p2_link":
			return `Bitcoin itu langka`;
		case "btc_p2_after":
			return `, kerana bekalan maksimumnya ialah 21 juta Bitcoin. Tiada siapa boleh mencetak Bitcoin yang lebih.`;
		case "btc_p3":
			return `Secara sejarahnya, Bitcoin telah meningkatkan kuasa beli dari semasa ke semasa, manakala ${c.label.toLowerCase()} kehilangan kuasa belinya. Ramai orang menggunakan Bitcoin sebagai akaun simpanan jangka panjang \u2014 wang yang mereka simpan tanpa diusik selama bertahun-tahun sementara nilainya bertumbuh.`;
		case "btc_p4":
			return `Mana yang lebih anda inginkan: menyimpan ${c.inIn} \u2014 ${c.nounPl} yang boleh membeli kurang dari semasa ke semasa \u2014 atau menyimpan dalam Bitcoin, yang secara sejarah boleh membeli lebih banyak dari semasa ke semasa?`;
		case "freedom_h2":
			return `Bitcoin juga merupakan alat kebebasan`;
		case "freedom_p1":
			return `Rangkaian Bitcoin tidak dimiliki oleh sesiapa. Tiada kerajaan atau syarikat yang mengawalnya. Ia dibina untuk melindungi kebebasan dan wang anda.`;
		case "freedom_p2":
			return `Pada hari ini, orang ramai di seluruh dunia menggunakan Bitcoin untuk melindungi kebebasan mereka \u2014 walaupun apabila kerajaan mereka tidak mahu membantu atau cuba menghalang mereka.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "Kuasa beli yang hilang dalam 4 tahun";
		case "stat_source_bpr":
			return "Sumber: Bitcoin Price Report \u2192";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Ketahui lebih lanjut \u2192",
	inflation_freedom_scarce_title: "Langka",
	inflation_freedom_scarce_desc:
		"Tidak akan ada lebih daripada 21 juta Bitcoin. Tiada siapa boleh mencetak yang lebih.",
	inflation_freedom_decentralized_title: "Tidak Berpusat",
	inflation_freedom_decentralized_desc:
		"Tiada satu entiti pun \u2014 tiada kerajaan, tiada syarikat \u2014 yang mengawal Bitcoin.",
	inflation_freedom_permissionless_title: "Tanpa Kebenaran",
	inflation_freedom_permissionless_desc:
		"Sesiapa sahaja, di mana sahaja, boleh menyertai rangkaian. Tiada siapa boleh menghalang anda.",
	inflation_freedom_sovereign_title: "Berdaulat",
	inflation_freedom_sovereign_desc:
		"Sistem baharu, bebas daripada ahli politik dan janji-janji mereka yang dimungkiri.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "21 Juta",
	inflation_stat_bitcoin_numeric: "(21,000,000)",
	inflation_stat_bitcoin_detail: "Tetap selama-lamanya",
	inflation_stat_bitcoin_source: "Sumber: Kertas Putih Bitcoin \u2192",

	// Shared currency stat labels
	inflation_stat_comparison_today: "HARI INI",
	inflation_stat_currency_counting: "Dan terus bertambah...",
	inflation_stat_currency_detail_4yr_lost:
		"Kuasa beli yang hilang dalam 4 tahun",
	inflation_stat_currency_source_cpi: "Sumber: FRED CPI \u2192",
	inflation_stat_currency_source_debt:
		"Sumber: Hutang Kerajaan FRED \u2192",
	inflation_stat_currency_source_m1:
		"Sumber: Bekalan Wang Sempit FRED \u2192",
	inflation_stat_currency_source_m1_short: "Sumber: FRED \u2192",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "Kuasa beli yang diperoleh dalam 4 tahun",
	inflation_stat_btc_source_bpr: "Sumber: Bitcoin Price Report \u2192",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Para pekerja menggunakan Bitcoin untuk mengakses wang selepas akaun bank mereka dibekukan.",
	inflation_story_nigeria_title: "Nigeria",
	inflation_story_nigeria_desc:
		"Para penunjuk perasaan menggunakan Bitcoin untuk mendanai gerakan mereka selepas bank memutuskan akses mereka.",
	inflation_story_pennsylvania_title: "Pennsylvania",
	inflation_story_pennsylvania_desc:
		"Perlombongan Bitcoin membersihkan sisa arang batu yang ditolak oleh kerajaan untuk dikendalikan.",
	inflation_story_texas_title: "Texas",
	inflation_story_texas_desc:
		"Perlombongan Bitcoin membantu mengekalkan elektrik semasa ribut besar.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report \u2014 carta prestasi 4 tahun (semua mata wang)",
	sources_bitcoin_source_code:
		"Kod Sumber Bitcoin \u2014 Had Bekalan 21 Juta",
	sources_canadian_trucker:
		"Bantahan pemandu lori Kanada \u2014 Bitcoin digunakan untuk memintas akaun bank yang dibekukan (YouTube)",
	sources_mempool_space:
		"Mempool.space \u2014 Data Bekalan & Perlombongan Bitcoin",
	sources_nigeria_endsars:
		"Quartz Africa \u2014 Bagaimana Bitcoin menggerakkan bantahan EndSARS Nigeria",
	sources_pennsylvania_mining:
		"Perlombongan Bitcoin Pennsylvania mengguna semula sisa metana (YouTube)",
	sources_texas_mining:
		"Perlombongan Bitcoin Texas dan grid elektrik (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange:
		"Bitcoin tiada inflasi, tetapi wang anda ada.",
	inflation_choose: "Pilih mata wang anda untuk melihat buktinya",
	inflation_choose_another: "\u2190 Pilih mata wang lain",
	inflation_sticker_learn:
		"Ketahui bagaimana Bitcoin boleh membantu.",
	inflation_sticker_lets_find_out: "Mari kita ketahui.",
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
		`translate-inflation (ms): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
