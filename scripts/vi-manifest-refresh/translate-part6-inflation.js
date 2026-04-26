#!/usr/bin/env node
/**
 * Vietnamese (vi) manifest refresh — Part 6 (inflation)
 *
 * Translates the inflation namespace (368 entries):
 *  - 41 non-currency keys (freedom, story, stat shared, plus inflation_h1_orange, etc.)
 *  - 327 dynamic per-currency keys × 13 currencies (usd, aud, brl, cad, eur, gbp,
 *    ils, inr, jpy, mxn, nzd, php, thb)
 *
 * The per-currency text is generated from a Vietnamese template parameterized by
 * the currency-specific noun (đô la, real, euro, bảng, shekel, v.v.).
 *
 * Idempotent. Run after part 5.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"../i18n-audit/reports/vi.json",
);

// Vietnamese names for each currency. The "unit" field is the lowercase plural
// noun that appears mid-sentence ("more dollars" → "thêm đô la"). The "demonym"
// is the country/region name as a Vietnamese adjective.
//
// Note: Vietnamese press uses comma-thousands + period-decimal (American
// convention) widely, BUT government/official copy and educational materials
// commonly use period-thousands + comma-decimal (European convention) — that's
// what existing inflation_vi.json strings already use ("1,42%"). We follow that
// convention here for any numeric values.
const CURRENCIES = {
	usd: {
		unit: "đô la",
		label: "ĐÔ LA MỸ",
		debtTitle: "TỔNG NỢ LIÊN BANG",
		existenceTitle: "ĐÔ LA ĐANG TỒN TẠI",
		intro1Currency: "đô la Mỹ",
	},
	aud: {
		unit: "đô la",
		label: "ĐÔ LA ÚC",
		debtTitle: "NỢ CHÍNH PHỦ ÚC",
		existenceTitle: "ĐÔ LA ÚC ĐANG TỒN TẠI",
		intro1Currency: "đô la Úc",
	},
	brl: {
		unit: "real",
		label: "REAL BRAZIL",
		debtTitle: "NỢ CHÍNH PHỦ BRAZIL",
		existenceTitle: "REAL BRAZIL ĐANG TỒN TẠI",
		intro1Currency: "real Brazil",
	},
	cad: {
		unit: "đô la",
		label: "ĐÔ LA CANADA",
		debtTitle: "NỢ CHÍNH PHỦ CANADA",
		existenceTitle: "ĐÔ LA CANADA ĐANG TỒN TẠI",
		intro1Currency: "đô la Canada",
	},
	eur: {
		unit: "euro",
		label: "EURO",
		debtTitle: "NỢ CHÍNH PHỦ EUROZONE",
		existenceTitle: "EURO ĐANG TỒN TẠI",
		intro1Currency: "euro",
	},
	gbp: {
		unit: "bảng",
		label: "BẢNG ANH",
		debtTitle: "NỢ CHÍNH PHỦ ANH",
		existenceTitle: "BẢNG ANH ĐANG TỒN TẠI",
		intro1Currency: "bảng Anh",
	},
	ils: {
		unit: "shekel",
		label: "SHEKEL ISRAEL",
		debtTitle: "NỢ CHÍNH PHỦ ISRAEL",
		existenceTitle: "SHEKEL ISRAEL ĐANG TỒN TẠI",
		intro1Currency: "shekel Israel",
	},
	inr: {
		unit: "rupee",
		label: "RUPEE ẤN ĐỘ",
		debtTitle: "NỢ CHÍNH PHỦ ẤN ĐỘ",
		existenceTitle: "RUPEE ẤN ĐỘ ĐANG TỒN TẠI",
		intro1Currency: "rupee Ấn Độ",
	},
	jpy: {
		unit: "yên",
		label: "YÊN NHẬT",
		debtTitle: "NỢ CHÍNH PHỦ NHẬT BẢN",
		existenceTitle: "YÊN NHẬT ĐANG TỒN TẠI",
		intro1Currency: "yên Nhật",
	},
	mxn: {
		unit: "peso",
		label: "PESO MEXICO",
		debtTitle: "NỢ CHÍNH PHỦ MEXICO",
		existenceTitle: "PESO MEXICO ĐANG TỒN TẠI",
		intro1Currency: "peso Mexico",
	},
	nzd: {
		unit: "đô la",
		label: "ĐÔ LA NEW ZEALAND",
		debtTitle: "NỢ CHÍNH PHỦ NEW ZEALAND",
		existenceTitle: "ĐÔ LA NEW ZEALAND ĐANG TỒN TẠI",
		intro1Currency: "đô la New Zealand",
	},
	php: {
		unit: "peso",
		label: "PESO PHILIPPINES",
		debtTitle: "NỢ CHÍNH PHỦ PHILIPPINES",
		existenceTitle: "PESO PHILIPPINES ĐANG TỒN TẠI",
		intro1Currency: "peso Philippines",
	},
	thb: {
		unit: "baht",
		label: "BAHT THÁI",
		debtTitle: "NỢ CHÍNH PHỦ THÁI LAN",
		existenceTitle: "BAHT THÁI ĐANG TỒN TẠI",
		intro1Currency: "baht Thái",
	},
};

// Per-currency template generators. Take a CURRENCIES entry and emit Vietnamese.
function tplIntro1(c) {
	return `Nếu bạn tiết kiệm bằng ${c.intro1Currency}, có lẽ bạn đã nhận thấy chúng ngày càng mua được ít hơn mỗi năm. Cần nhiều ${c.unit} hơn để mua cùng một lượng thực phẩm. Bạn cần nhiều ${c.unit} hơn để duy trì chất lượng cuộc sống của mình.`;
}
function tplIntro2() {
	return "Nhưng không nhất thiết phải như vậy.";
}
function tplIntroHighlight() {
	return "Những người tiết kiệm bằng Bitcoin trong 4 năm qua thấy cuộc sống rẻ hơn.";
}
function tplBtcH2() {
	return "Bitcoin không có lạm phát";
}
function tplBtcP1() {
	return "Lạm phát có nghĩa là tiền của bạn ngày càng mua được ít hơn theo thời gian. Bitcoin là tiền tốt hơn vì nó không có lạm phát.";
}
function tplBtcP2Before(c) {
	return `${c.unit.charAt(0).toUpperCase() + c.unit.slice(1)} có nguồn cung không giới hạn, nghĩa là có thể được in thêm bất cứ lúc nào.`;
}
function tplBtcP2After() {
	return "vì nó có nguồn cung tối đa 21 triệu Bitcoin. Không ai có thể in thêm Bitcoin.";
}
function tplBtcP2Link() {
	return "Bitcoin khan hiếm";
}
function tplBtcP3(c) {
	return `Trong lịch sử, Bitcoin đã tăng sức mua theo thời gian trong khi ${c.unit} đã mất sức mua. Nhiều người sử dụng Bitcoin làm`;
}
function tplBtcP4(c) {
	return `Bạn muốn tiết kiệm bằng ${c.unit} ngày càng mua được ít hơn theo thời gian? Hay tiết kiệm bằng Bitcoin trong lịch sử đã mua được nhiều hơn theo thời gian?`;
}
function tplFreedomH2() {
	return "Bitcoin cũng là một công cụ vì tự do";
}
function tplFreedomP1() {
	return "Mạng Bitcoin không thuộc về bất kỳ ai. Nó không bị bất kỳ chính phủ hay tập đoàn nào kiểm soát. Nó được thiết kế để bảo vệ tự do và tiền của bạn.";
}
function tplFreedomP2() {
	return "Mọi người trên khắp thế giới đã đang sử dụng Bitcoin để bảo vệ tự do của họ — ngay cả khi chính phủ của họ từ chối giúp đỡ hoặc cố ngăn chặn họ.";
}
function tplProofH2() {
	return "Đây là bằng chứng: tiền của bạn đang mất giá";
}
function tplProofP1(c) {
	return `Số ${c.unit} trong tài khoản ngân hàng của bạn ngày càng mua được ít hơn mỗi năm. Đó là vì không có giới hạn cố định nào về số lượng ${c.unit} có thể được tạo ra.`;
}
function tplProofP2(c) {
	return `Nguồn cung không giới hạn này là nguyên nhân gốc rễ của lạm phát. Trong những năm gần đây, tổng số ${c.unit} đang tồn tại đã tăng lên đáng kể.`;
}
function tplProofP3() {
	return "Khi nhiều tiền hơn được tạo ra từ hư không, giá của mọi thứ đều tăng lên. Điều này bao gồm cả nguyên liệu thô mà các công ty mua, vì vậy họ phải tăng giá để bù đắp.";
}
function tplProofP4(c) {
	return `Và khi chính phủ tiếp tục tăng nợ, càng nhiều ${c.unit} được in vì ngày càng ít người muốn cho chính phủ vay tiền.`;
}
function tplProofP5Before() {
	return "Nếu bạn không thể vay được, bạn không thể chi tiêu. Nhưng nếu chính phủ";
}
function tplProofP5Link() {
	return "không thể vay được";
}
function tplProofP5After() {
	return ", họ chỉ việc in tiền.";
}
function tplProofP6() {
	return "Nợ chính phủ nhiều hơn có nghĩa là in tiền nhiều hơn. In tiền nhiều hơn có nghĩa là lạm phát nhiều hơn. Và không có dấu hiệu nào cho thấy điều đó sẽ dừng lại.";
}

// Map of report-suffix → template function (after stripping the per-currency code)
const TEMPLATE_FOR_SUFFIX = {
	intro_1: tplIntro1,
	intro_2: tplIntro2,
	intro_highlight: tplIntroHighlight,
	btc_h2: tplBtcH2,
	btc_p1: tplBtcP1,
	btc_p2_before: tplBtcP2Before,
	btc_p2_after: tplBtcP2After,
	btc_p2_link: tplBtcP2Link,
	btc_p3: tplBtcP3,
	btc_p4: tplBtcP4,
	freedom_h2: tplFreedomH2,
	freedom_p1: tplFreedomP1,
	freedom_p2: tplFreedomP2,
	proof_h2: tplProofH2,
	proof_p1: tplProofP1,
	proof_p2: tplProofP2,
	proof_p3: tplProofP3,
	proof_p4: tplProofP4,
	proof_p5_before: tplProofP5Before,
	proof_p5_link: tplProofP5Link,
	proof_p5_after: tplProofP5After,
	proof_p6: tplProofP6,
};

// Stat-section per-currency keys (inflation_stat_<code>_<suffix>).
function statTranslation(c, suffix) {
	switch (suffix) {
		case "label":
			return c.label;
		case "debt_title":
			return c.debtTitle;
		case "existence_title":
			return c.existenceTitle;
		default:
			return null;
	}
}

// Non-currency entries (manually translated).
const NON_CURRENCY = {
	"inflation::inflation_freedom_decentralized_desc":
		"Không một thực thể đơn lẻ nào — không chính phủ, không tập đoàn — kiểm soát Bitcoin.",
	"inflation::inflation_freedom_decentralized_title": "Phi tập trung",
	"inflation::inflation_freedom_learn_more": "Tìm hiểu thêm →",
	"inflation::inflation_freedom_permissionless_desc":
		"Bất kỳ ai, ở bất cứ đâu cũng có thể tham gia mạng. Không ai có thể ngăn cản bạn.",
	"inflation::inflation_freedom_permissionless_title": "Không cần xin phép",
	"inflation::inflation_freedom_scarce_desc":
		"Sẽ chỉ có 21 triệu Bitcoin mà thôi. Không ai có thể in thêm.",
	"inflation::inflation_freedom_scarce_title": "Khan hiếm",
	"inflation::inflation_freedom_sovereign_desc":
		"Một hệ thống mới, độc lập với các chính trị gia và những lời hứa bị phá vỡ của họ.",
	"inflation::inflation_freedom_sovereign_title": "Có chủ quyền",
	"inflation::inflation_stat_bitcoin_detail": "Cố định mãi mãi",
	"inflation::inflation_stat_bitcoin_label": "BITCOIN",
	"inflation::inflation_stat_bitcoin_numeric": "(21.000.000)",
	"inflation::inflation_stat_bitcoin_source": "Nguồn: Sách trắng Bitcoin →",
	"inflation::inflation_stat_bitcoin_value": "21 Triệu",
	"inflation::inflation_stat_comparison_today": "HÔM NAY",
	"inflation::inflation_stat_currency_counting": "Và còn tiếp tục...",
	"inflation::inflation_stat_currency_detail_4yr_lost":
		"Sức mua bị mất trong 4 năm",
	"inflation::inflation_stat_currency_source_cpi": "Nguồn: FRED CPI →",
	"inflation::inflation_stat_currency_source_debt":
		"Nguồn: Nợ Chính phủ FRED →",
	"inflation::inflation_stat_currency_source_m1":
		"Nguồn: Cung tiền hẹp FRED →",
	"inflation::inflation_stat_currency_source_m1_short": "Nguồn: FRED →",
	"inflation::inflation_story_canada_desc":
		"Người lao động sử dụng Bitcoin để tiếp cận tiền sau khi tài khoản ngân hàng của họ bị đóng băng.",
	"inflation::inflation_story_canada_title": "Canada",
	"inflation::inflation_story_nigeria_desc":
		"Những người biểu tình sử dụng Bitcoin để tài trợ cho phong trào của họ sau khi các ngân hàng cắt họ.",
	"inflation::inflation_story_nigeria_title": "Nigeria",
	"inflation::inflation_story_pennsylvania_desc":
		"Việc đào Bitcoin đã dọn sạch chất thải than mà chính phủ từ chối xử lý.",
	"inflation::inflation_story_pennsylvania_title": "Pennsylvania",
	"inflation::inflation_story_texas_desc":
		"Việc đào Bitcoin đã giúp duy trì điện trong một cơn bão lớn.",
	"inflation::inflation_story_texas_title": "Texas",
	"inflation::inflation_choose":
		"Chọn loại tiền của bạn để xem bằng chứng",
	"inflation::inflation_choose_another": "← Chọn loại tiền khác",
	"inflation::inflation_h1_orange":
		"Bitcoin không có lạm phát, nhưng tiền của bạn thì có.",
	"inflation::inflation_sticker_learn":
		"Tìm hiểu Bitcoin có thể giúp gì.",
	"inflation::inflation_sticker_lets_find_out": "Hãy cùng tìm hiểu.",
	"inflation::sources_bitcoin_price_report_4yr":
		"Bitcoin Price Report — Biểu đồ hiệu suất 4 năm (tất cả các loại tiền)",
	"inflation::sources_bitcoin_source_code":
		"Mã nguồn Bitcoin — Giới hạn cung 21 triệu",
	"inflation::sources_canadian_trucker":
		"Cuộc biểu tình của tài xế xe tải Canada — Bitcoin được dùng để vượt qua các tài khoản ngân hàng bị đóng băng (YouTube)",
	"inflation::sources_mempool_space":
		"Mempool.space — Dữ liệu cung Bitcoin & Khai thác",
	"inflation::sources_nigeria_endsars":
		"Quartz Africa — Cách Bitcoin tiếp sức cho các cuộc biểu tình EndSARS ở Nigeria",
	"inflation::sources_pennsylvania_mining":
		"Việc đào Bitcoin tại Pennsylvania thu hồi khí mê-tan thải bỏ (YouTube)",
	"inflation::sources_texas_mining":
		"Việc đào Bitcoin tại Texas và lưới điện (YouTube)",
};

// Per-currency stat 4yr / source_bpr (only present once for one currency in the
// report — they exist in English under multiple currency codes via dynamic
// runtime expansion, but the English snapshot may only include one per source.)
// Verified via report dump above:
//   stat_detail_4yr (x1) — "Purchasing power gained over 4 years"
//   stat_source_bpr (x1) — "Source: Bitcoin Price Report →"
const STAT_GLOBAL_TRANSLATIONS = {
	"stat_detail_4yr": "Sức mua đạt được trong 4 năm",
	"stat_source_bpr": "Nguồn: Bitcoin Price Report →",
};

function translateInflationKey(key) {
	// Stat-with-currency keys: inflation_stat_<code>_<suffix>
	let m = key.match(/^inflation_stat_([a-z]{3})_(.+)$/);
	if (m) {
		const code = m[1];
		const suffix = m[2];
		const c = CURRENCIES[code];
		if (!c) return null;
		const v = statTranslation(c, suffix);
		if (v !== null) return v;
		// stat-shared values (no currency variation in English): e.g. detail_4yr
		if (STAT_GLOBAL_TRANSLATIONS[suffix] !== undefined) {
			return STAT_GLOBAL_TRANSLATIONS[suffix];
		}
		return null;
	}
	// Currency-specific text keys: inflation_<code>_<suffix>
	m = key.match(/^inflation_([a-z]{3})_(.+)$/);
	if (m) {
		const code = m[1];
		const suffix = m[2];
		const c = CURRENCIES[code];
		if (!c) return null;
		const tpl = TEMPLATE_FOR_SUFFIX[suffix];
		if (!tpl) return null;
		return tpl(c);
	}
	return null;
}

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let alreadyFilled = 0;
	let unmatched = 0;
	const unmatchedKeys = [];

	for (const entry of report.entries) {
		if (entry.targetTranslation !== null && entry.targetTranslation !== undefined) {
			alreadyFilled++;
			continue;
		}
		const fullKey = `${entry.namespace}::${entry.key}`;
		// Non-inflation entries handled by other parts.
		if (entry.namespace !== "inflation") {
			unmatched++;
			unmatchedKeys.push(fullKey);
			continue;
		}
		// Non-currency keys (manually translated).
		if (NON_CURRENCY[fullKey] !== undefined) {
			entry.targetTranslation = NON_CURRENCY[fullKey];
			filled++;
			continue;
		}
		// Per-currency keys (programmatic).
		const v = translateInflationKey(entry.key);
		if (v !== null) {
			entry.targetTranslation = v;
			filled++;
		} else {
			unmatched++;
			unmatchedKeys.push(fullKey);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`[part6 inflation] filled=${filled} alreadyFilled=${alreadyFilled} unmatched=${unmatched}`,
	);
	if (process.env.SHOW_UNMATCHED && unmatchedKeys.length) {
		console.log("first 20 unmatched:");
		console.log(unmatchedKeys.slice(0, 20).join("\n"));
	}
}

main();
