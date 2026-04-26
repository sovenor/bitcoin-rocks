#!/usr/bin/env node
/**
 * Turkish manifest refresh — inflation namespace translator.
 *
 * Handles per-currency keys (13 currencies × ~25 suffixes) plus shared
 * non-currency labels / stories / sources / manifest-changed keys.
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
	"tr.json",
);

/* ─────────────── Per-currency labels & terms ───────────────
 *
 * Turkish forms used in the templates:
 *   longLoc  — locative ("içinde"/"içinde tutuyorsanız" form)  → "ABD doları"
 *              used inside "X olarak biriktiriyorsanız" / "X cinsinden"
 *   longNom  — base nominative noun                            → "ABD doları"
 *   pluralAcc— plural noun in accusative-ish/general form      → "dolar"
 *   label    — display label                                   → "ABD Doları"
 *   existenceTitle — "X in circulation"                        → "Dolaşımdaki dolar"
 *   debtTitle — "Total federal debt" / "Public debt of X"      → ...
 */

const CURRENCY = {
	usd: {
		longLoc: "ABD doları",
		longNom: "ABD doları",
		pluralAcc: "dolar",
		label: "ABD Doları",
		existenceTitle: "Dolaşımdaki dolar",
		debtTitle: "Toplam federal borç",
	},
	eur: {
		longLoc: "euro",
		longNom: "euro",
		pluralAcc: "euro",
		label: "Euro",
		existenceTitle: "Dolaşımdaki euro",
		debtTitle: "Euro Bölgesi kamu borcu",
	},
	aud: {
		longLoc: "Avustralya doları",
		longNom: "Avustralya doları",
		pluralAcc: "Avustralya doları",
		label: "Avustralya Doları",
		existenceTitle: "Dolaşımdaki Avustralya doları",
		debtTitle: "Avustralya kamu borcu",
	},
	brl: {
		longLoc: "Brezilya reali",
		longNom: "Brezilya reali",
		pluralAcc: "real",
		label: "Brezilya Reali",
		existenceTitle: "Dolaşımdaki real",
		debtTitle: "Brezilya kamu borcu",
	},
	cad: {
		longLoc: "Kanada doları",
		longNom: "Kanada doları",
		pluralAcc: "Kanada doları",
		label: "Kanada Doları",
		existenceTitle: "Dolaşımdaki Kanada doları",
		debtTitle: "Kanada kamu borcu",
	},
	gbp: {
		longLoc: "İngiliz sterlini",
		longNom: "İngiliz sterlini",
		pluralAcc: "sterlin",
		label: "İngiliz Sterlini",
		existenceTitle: "Dolaşımdaki sterlin",
		debtTitle: "Birleşik Krallık kamu borcu",
	},
	ils: {
		longLoc: "İsrail şekeli",
		longNom: "İsrail şekeli",
		pluralAcc: "şekel",
		label: "İsrail Şekeli",
		existenceTitle: "Dolaşımdaki şekel",
		debtTitle: "İsrail kamu borcu",
	},
	inr: {
		longLoc: "Hindistan rupisi",
		longNom: "Hindistan rupisi",
		pluralAcc: "rupi",
		label: "Hindistan Rupisi",
		existenceTitle: "Dolaşımdaki rupi",
		debtTitle: "Hindistan kamu borcu",
	},
	jpy: {
		longLoc: "Japon yeni",
		longNom: "Japon yeni",
		pluralAcc: "yen",
		label: "Japon Yeni",
		existenceTitle: "Dolaşımdaki yen",
		debtTitle: "Japonya kamu borcu",
	},
	mxn: {
		longLoc: "Meksika pesosu",
		longNom: "Meksika pesosu",
		pluralAcc: "peso",
		label: "Meksika Pesosu",
		existenceTitle: "Dolaşımdaki peso",
		debtTitle: "Meksika kamu borcu",
	},
	nzd: {
		longLoc: "Yeni Zelanda doları",
		longNom: "Yeni Zelanda doları",
		pluralAcc: "Yeni Zelanda doları",
		label: "Yeni Zelanda Doları",
		existenceTitle: "Dolaşımdaki Yeni Zelanda doları",
		debtTitle: "Yeni Zelanda kamu borcu",
	},
	php: {
		longLoc: "Filipin pesosu",
		longNom: "Filipin pesosu",
		pluralAcc: "peso",
		label: "Filipin Pesosu",
		existenceTitle: "Dolaşımdaki peso",
		debtTitle: "Filipinler kamu borcu",
	},
	thb: {
		longLoc: "Tayland bahtı",
		longNom: "Tayland bahtı",
		pluralAcc: "baht",
		label: "Tayland Bahtı",
		existenceTitle: "Dolaşımdaki baht",
		debtTitle: "Tayland kamu borcu",
	},
};

/* ─────────────── Templated translation functions ─────────────── */

function t(code, suffix) {
	const c = CURRENCY[code];
	if (!c) throw new Error("unknown code " + code);
	switch (suffix) {
		case "intro_1":
			return `Eğer ${c.longLoc} olarak biriktiriyorsanız, muhtemelen her yıl daha az şey satın alabildiğinizi fark etmişsinizdir. Aynı malları almak için daha çok ${c.pluralAcc} gerekiyor. Yaşam standardınızı korumak için daha çok ${c.pluralAcc} gerekiyor.`;
		case "intro_2":
			return `Ama bunun böyle olması zorunlu değil.`;
		case "intro_highlight":
			return `Son dört yıldır Bitcoin'de biriktirenler hayatın daha ucuza geldiğini görüyor.`;
		case "proof_h2":
			return `İşte kanıtı: paranız değer kaybediyor`;
		case "proof_p1":
			return `Banka hesabınızdaki her bir ${c.longNom} her yıl daha az şey satın alıyor. Bunun nedeni, üretilebilecek ${c.pluralAcc} miktarına bir sınır olmamasıdır.`;
		case "proof_p2":
			return `Bu sınırsız arz, enflasyonun başlıca nedenidir. Son birkaç yılda dolaşımdaki ${c.pluralAcc} miktarı dramatik biçimde arttı.`;
		case "proof_p3":
			return `Yoktan daha fazla para üretildikçe her şeyin fiyatı artar. Buna şirketlerin ürün üretmek için aldığı hammaddeler de dahildir — bu da senin için daha yüksek fiyatlara yol açar.`;
		case "proof_p4":
			return `Devletin borcu büyümeye devam ettikçe, hükümete borç vermek isteyen daha az kişi kaldığı için daha çok para basılır.`;
		case "proof_p5_before":
			return `Borç alamıyorsan, harcayamazsın. Ama bir hükümet`;
		case "proof_p5_link":
			return `borç alamadığında`;
		case "proof_p5_after":
			return `, basitçe daha çok para basar.`;
		case "proof_p6":
			return `Daha çok devlet borcu, daha çok para basımı demektir. Daha çok para basımı, daha çok enflasyon demektir. Ve bunun duracağına dair bir işaret yok.`;
		case "btc_h2":
			return `Bitcoin'de enflasyon yoktur`;
		case "btc_p1":
			return `Enflasyon, paranızın zamanla daha az şey alabilmesi demektir. Bitcoin iyi bir paradır çünkü enflasyonu yoktur.`;
		case "btc_p2_before":
			return `${c.longNom} arzı sınırsızdır, bu da istenildiğinde daha çoğunun basılabileceği anlamına gelir.`;
		case "btc_p2_link":
			return `Bitcoin nadirdir`;
		case "btc_p2_after":
			return `, sonsuza dek 21 milyon ile sınırlıdır. Kimse daha fazlasını üretemez.`;
		case "btc_p3":
			return `Tarihsel olarak Bitcoin zamanla alım gücü kazanırken, ${c.longNom} kaybetti. Birçok kişi Bitcoin'i uzun vadeli bir tasarruf hesabı gibi kullanıyor — yıllarca dokunmadan büyümesine izin verdikleri para.`;
		case "btc_p4":
			return `Birikimini zamanla daha az şey alan ${c.longLoc} olarak mı yapmayı tercih edersin, yoksa zamanla daha çok şey alan Bitcoin'de mi?`;
		case "freedom_h2":
			return `Bitcoin aynı zamanda bir özgürlük aracıdır`;
		case "freedom_p1":
			return `Bitcoin ağını kimse kontrol etmez. Hiçbir hükümet ya da şirket onu yönetmez. Özgürlüğünü ve paranı korumak üzere tasarlanmıştır.`;
		case "freedom_p2":
			return `Dünyanın her yerinden insanlar, hükümetleri yardım etmediğinde ya da onları durdurmaya çalıştığında bile, özgürlüklerini korumak için Bitcoin'i kullanıyor.`;
		case "stat_label":
			return c.label;
		case "stat_existence_title":
			return c.existenceTitle;
		case "stat_debt_title":
			return c.debtTitle;
		case "stat_detail_4yr":
			return "4 yılda kaybedilen alım gücü";
		case "stat_source_bpr":
			return "Kaynak: Bitcoin Price Report →";
		default:
			return null;
	}
}

/* ─────────────── Non-currency keys ─────────────── */

const NON_CURRENCY = {
	// Freedom cards
	inflation_freedom_learn_more: "Daha fazla bilgi →",
	inflation_freedom_scarce_title: "Nadir",
	inflation_freedom_scarce_desc:
		"Sonsuza kadar yalnızca 21 milyon Bitcoin var olacak. Kimse daha fazlasını basamaz.",
	inflation_freedom_decentralized_title: "Merkeziyetsiz",
	inflation_freedom_decentralized_desc:
		"Hiçbir kuruluş — ne hükümet ne şirket — Bitcoin'i kontrol edemez.",
	inflation_freedom_permissionless_title: "İzinsiz",
	inflation_freedom_permissionless_desc:
		"Her yerden, herkes ağa katılabilir. Kimse seni durduramaz.",
	inflation_freedom_sovereign_title: "Egemen",
	inflation_freedom_sovereign_desc:
		"Politikacılardan ve onların tutulmamış sözlerinden bağımsız, yeni bir sistem.",

	// Bitcoin stat card
	inflation_stat_bitcoin_label: "BITCOIN",
	inflation_stat_bitcoin_value: "21 Milyon",
	inflation_stat_bitcoin_numeric: "(21.000.000)",
	inflation_stat_bitcoin_detail: "Sonsuza dek sabit",
	inflation_stat_bitcoin_source: "Kaynak: Bitcoin Whitepaper →",

	// Shared currency stat labels
	inflation_stat_comparison_today: "BUGÜN",
	inflation_stat_currency_counting: "Ve artmaya devam ediyor...",
	inflation_stat_currency_detail_4yr_lost:
		"4 yılda kaybedilen alım gücü",
	inflation_stat_currency_source_cpi: "Kaynak: FRED CPI →",
	inflation_stat_currency_source_debt: "Kaynak: FRED Devlet Borcu →",
	inflation_stat_currency_source_m1: "Kaynak: FRED Dar Para Arzı →",
	inflation_stat_currency_source_m1_short: "Kaynak: FRED →",

	// Bitcoin "gained" stat detail
	inflation_stat_btc_detail_4yr: "4 yılda kazanılan alım gücü",
	inflation_stat_btc_source_bpr: "Kaynak: Bitcoin Price Report →",

	// Freedom stories
	inflation_story_canada_title: "Kanada",
	inflation_story_canada_desc:
		"Banka hesapları donduktan sonra işçiler paralarına Bitcoin üzerinden eriştiler.",
	inflation_story_nigeria_title: "Nijerya",
	inflation_story_nigeria_desc:
		"Bankalar hareketlerini kestiğinde protestocular hareketlerini Bitcoin ile finanse ettiler.",
	inflation_story_pennsylvania_title: "Pensilvanya",
	inflation_story_pennsylvania_desc:
		"Bitcoin madenciliği, hükümetin temizlemediği kömür atıklarını temizledi.",
	inflation_story_texas_title: "Teksas",
	inflation_story_texas_desc:
		"Bitcoin madenciliği, büyük bir fırtına sırasında elektriklerin açık kalmasına yardımcı oldu.",

	// Sources
	sources_bitcoin_price_report_4yr:
		"Bitcoin Price Report — 4 yıllık performans grafikleri (tüm para birimleri)",
	sources_bitcoin_source_code:
		"Bitcoin Kaynak Kodu — 21 Milyonluk Arz Tavanı",
	sources_canadian_trucker:
		"Kanadalı kamyoncu protestosu — donmuş banka hesaplarını aşmak için kullanılan Bitcoin (YouTube)",
	sources_mempool_space:
		"Mempool.space — Bitcoin Arz ve Madencilik Verileri",
	sources_nigeria_endsars:
		"Quartz Africa — Bitcoin'in Nijerya'daki EndSARS protestolarına nasıl güç verdiği",
	sources_pennsylvania_mining:
		"Pensilvanya Bitcoin madenciliği atık metanı geri kazanıyor (YouTube)",
	sources_texas_mining:
		"Teksas Bitcoin madenciliği ve elektrik şebekesi (YouTube)",

	// Manifest-changed inflation keys
	inflation_h1_orange: "Bitcoin'in enflasyonu yok, ama senin paranın var.",
	inflation_choose: "Kanıtı görmek için kendi paranı seç",
	inflation_choose_another: "← Başka bir para seç",
	inflation_sticker_learn: "Bitcoin'in nasıl yardımcı olabileceğini öğren.",
	inflation_sticker_lets_find_out: "Hadi öğrenelim.",
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

		// Direct non-currency keys
		if (Object.prototype.hasOwnProperty.call(NON_CURRENCY, e.key)) {
			e.targetTranslation = NON_CURRENCY[e.key];
			filled++;
			continue;
		}

		// Per-currency keys: inflation_stat_<code>_<suffix>
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

		// Per-currency keys: inflation_<code>_<suffix>
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
		`translate-inflation (tr): filled ${filled}, already-done ${skipped}`,
	);
	if (unmatched.length) {
		console.log(`\nUnmatched keys (${unmatched.length}):`);
		for (const k of unmatched) console.log("  -", k);
		process.exitCode = 1;
	}
}

main();
