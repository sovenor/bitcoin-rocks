#!/usr/bin/env node
/**
 * Vietnamese (vi) manifest refresh — Part 1
 *
 * Translates entries for: 404, about, bank-runs, common,
 * compound-inflation-calculator, get-involved, lightning, wallets, flyers,
 * sticker-success, sticker-language-success, stickers, buy.
 *
 * Idempotent: only fills targetTranslation when null. Re-running is safe.
 *
 * Run: node scripts/vi-manifest-refresh/translate-part1-common-content.js
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"../i18n-audit/reports/vi.json",
);

// Translations keyed by `<namespace>::<key>`. Vietnamese (NFC composed).
// Polite "bạn" register, idiomatic, Bitcoin and other brand names preserved.
const TRANSLATIONS = {
	// ─── 404 ───
	"404::404_home": "Quay về trang chủ",
	"404::404_message": "Bitcoin tuyệt vời, nhưng trang lỗi này thì không.",
	"404::404_not_found_short": "Không tìm thấy",

	// ─── about ───
	"about::about_card_contact_github_label": "GitHub",
	"about::about_card_contact_github_title": "github.com/sovenor/bitcoin-rocks",
	"about::about_card_email_title": "hi@bitcoin.rocks",
	"about::about_card_nostr_label": "Nostr",
	"about::about_card_nostr_title": "hi@bitcoin.rocks",
	"about::about_mission_1_sovenor": "sovenor",
	"about::about_page_description":
		"bitcoin.rocks là một trang web giáo dục về Bitcoin miễn phí, mã nguồn mở, được thành lập vào năm 2022. Sứ mệnh của chúng tôi là thúc đẩy việc áp dụng Bitcoin thông qua giáo dục.",
	"about::about_editorial_2":
		"Chúng tôi liên kết đến các nguồn đáng tin cậy như Cục Dự trữ Liên bang (FRED), Cục Thống kê Lao động Hoa Kỳ, FDIC, Liên Hợp Quốc, Hội đồng Vàng Thế giới, Forbes, MIT Technology Review, Lyn Alden và James Lavish. Chúng tôi tin rằng Bitcoin tự nói lên tất cả khi các sự thật được trình bày rõ ràng.",
	"about::about_header": "Về bitcoin.rocks",
	"about::about_open_source_2":
		"bitcoin.rocks là một dự án miễn phí, mã nguồn mở được cấp phép theo Giấy phép MIT. Bất kỳ ai cũng có thể đóng góp cho bitcoin.rocks. Chúng tôi đặc biệt chào đón các dịch giả giúp nội dung của chúng tôi tiếp cận được với mọi người trên toàn thế giới.",
	"about::about_business_blurb":
		"Chúng tôi cung cấp các tài nguyên kinh doanh miễn phí giúp dễ dàng đưa các thương nhân địa phương chấp nhận Bitcoin. Trang kinh doanh Bitcoin của chúng tôi đề cập đến lý do Bitcoin tốt cho doanh nghiệp, cách chọn ví và điểm bán hàng, đồng thời cung cấp miễn phí các nhãn dán \"Bitcoin Accepted Here\".",
	"about::about_card_business_label": "Tài nguyên kinh doanh",
	"about::about_card_business_source": "Nguồn: bitcoin.rocks →",
	"about::about_card_business_title":
		"Mọi thứ một doanh nghiệp cần để bắt đầu chấp nhận thanh toán Bitcoin",
	"about::about_card_contact_github_source": "Nguồn: GitHub →",
	"about::about_card_contribute_label": "Đóng góp",
	"about::about_card_contribute_source": "Nguồn: GitHub →",
	"about::about_card_contribute_title":
		"Tìm hiểu cách đóng góp cho bitcoin.rocks",
	"about::about_card_email_label": "Email",
	"about::about_card_email_source": "Nguồn: email →",
	"about::about_card_flyers_label": "Tờ rơi có thể in",
	"about::about_card_flyers_source": "Nguồn: bitcoin.rocks →",
	"about::about_card_flyers_title":
		"Tải xuống và in tờ rơi Bitcoin cho cộng đồng của bạn",
	"about::about_card_github_label": "Kho mã nguồn",
	"about::about_card_github_source": "Nguồn: GitHub →",
	"about::about_card_github_title": "Xem bitcoin.rocks trên GitHub",
	"about::about_card_nostr_source": "Nguồn: Nostr →",
	"about::about_card_stickers_label": "Nhãn dán miễn phí",
	"about::about_card_stickers_source": "Nguồn: bitcoin.rocks →",
	"about::about_card_stickers_title":
		"Nhận nhãn dán Bitcoin miễn phí gửi đến tận nhà bạn",
	"about::about_flyers_blurb":
		"Chúng tôi thiết kế các tờ rơi có thể in mà bạn có thể phát tại các buổi họp mặt, dán trên bảng tin cộng đồng hoặc thả vào hộp thư — một cách đơn giản để khơi gợi sự tò mò và đưa mọi người đến bitcoin.rocks để tìm hiểu thêm.",
	"about::about_mission_1a": "bitcoin.rocks được thành lập bởi",
	"about::about_mission_1b":
		"vào năm 2022 với một sứ mệnh đơn giản: thúc đẩy việc áp dụng Bitcoin thông qua giáo dục.",
	"about::about_stickers_blurb":
		"Chúng tôi gửi nhãn dán Bitcoin miễn phí đến tận nhà bạn để bạn có thể giúp lan tỏa nhận thức về Bitcoin trong cộng đồng của mình. Hàng trăm người quét mã QR trên những nhãn dán này mỗi tháng để tìm hiểu về Bitcoin.",

	// ─── bank-runs ───
	"bank-runs::bank_runs_card_fdic_value": "1,42%",
	"bank-runs::bank_runs_header":
		"Bitcoin không có tình trạng rút tiền hàng loạt, nhưng ngân hàng của bạn có thể có.",
	"bank-runs::bank_runs_bitcoin_heading":
		"Bitcoin không có tình trạng rút tiền hàng loạt",
	"bank-runs::bank_runs_bitcoin_p1":
		"Bitcoin là hệ thống dự trữ toàn phần. Bạn không gửi tiền của mình vào ngân hàng. Bạn chính là ngân hàng của mình. Không có ai cho vay tiền của bạn mà bạn không biết, vì bạn là người duy nhất có thể truy cập tiền của mình.",
	"bank-runs::bank_runs_bitcoin_p2":
		"Miễn là bạn giữ bitcoin trong ví của riêng mình — không phải trên sàn giao dịch hoặc đóng gói trong ETF — thì việc rút tiền hàng loạt là không thể xảy ra.",
	"bank-runs::bank_runs_bitcoin_p3":
		"Với Bitcoin, bạn thực sự kiểm soát được tiền của mình.",
	"bank-runs::bank_runs_card_bank_reserve_detail":
		"Kể từ ngày 26 tháng 3 năm 2020, các ngân hàng Hoa Kỳ được yêu cầu giữ 0% dự trữ.",
	"bank-runs::bank_runs_card_bank_reserve_label": "Tỷ lệ dự trữ ngân hàng",
	"bank-runs::bank_runs_card_bank_reserve_source":
		"Nguồn: Cục Dự trữ Liên bang →",
	"bank-runs::bank_runs_card_btc_fdic_detail":
		"Hệ thống dự trữ toàn phần — không cần bảo hiểm tiền gửi.",
	"bank-runs::bank_runs_card_btc_fdic_label": "Bảo hiểm Bitcoin",
	"bank-runs::bank_runs_card_btc_fdic_source":
		"Nguồn: Sách trắng Bitcoin →",
	"bank-runs::bank_runs_card_btc_reserve_detail":
		"Mỗi bitcoin tồn tại trên chuỗi — không có gì được cho vay ra ngoài.",
	"bank-runs::bank_runs_card_btc_reserve_label": "Tỷ lệ dự trữ Bitcoin",
	"bank-runs::bank_runs_card_btc_reserve_source":
		"Nguồn: Sách trắng Bitcoin →",
	"bank-runs::bank_runs_card_fdic_detail":
		"Quỹ bảo hiểm 153,9 tỷ đô la so với 10,82 nghìn tỷ đô la tiền gửi được bảo hiểm (tháng 12 năm 2025).",
	"bank-runs::bank_runs_card_fdic_label": "Bảo hiểm FDIC",
	"bank-runs::bank_runs_card_fdic_source":
		"Nguồn: Thống kê tổng quan của FDIC →",
	"bank-runs::bank_runs_card_svb_label": "Nghiên cứu điển hình",
	"bank-runs::bank_runs_card_svb_source":
		"Nguồn: Trường Luật Đại học Washington →",
	"bank-runs::bank_runs_card_svb_title":
		"Tìm hiểu cách vụ rút tiền hàng loạt tại Silicon Valley Bank đã xảy ra như thế nào",
	"bank-runs::bank_runs_card_wallet_label": "Bước tiếp theo",
	"bank-runs::bank_runs_card_wallet_source": "Bắt đầu tại đây →",
	"bank-runs::bank_runs_card_wallet_title":
		"Tìm hiểu cách sở hữu ví Bitcoin của riêng bạn",
	"bank-runs::bank_runs_fdic_heading":
		"Bảo hiểm FDIC chỉ bao phủ khoảng 1% tiền gửi",
	"bank-runs::bank_runs_fdic_p1":
		"Bảo hiểm FDIC bảo vệ tiền gửi lên đến 250.000 đô la cho mỗi người gửi. Nhưng quỹ bảo hiểm rất nhỏ so với tổng số tiền gửi mà nó được cho là bảo vệ.",
	"bank-runs::bank_runs_fdic_p2_a":
		"Trong một vụ phá sản ngân hàng quy mô lớn, chính phủ có khả năng sẽ in tiền để bù đắp khoảng trống — dẫn đến nhiều",
	"bank-runs::bank_runs_fdic_p2_link": "lạm phát hơn.",
	"bank-runs::bank_runs_page_description":
		"Các ngân hàng cho vay tiền gửi của bạn theo hệ thống ngân hàng dự trữ một phần. Nếu quá nhiều người rút tiền cùng lúc, ngân hàng có thể sụp đổ. Bitcoin là hệ thống dự trữ toàn phần — việc rút tiền hàng loạt là không thể xảy ra.",
	"bank-runs::bank_runs_svb_heading":
		"Silicon Valley Bank: một ví dụ thực tế",
	"bank-runs::bank_runs_svb_p1_a":
		"Vào tháng 3 năm 2023, Silicon Valley Bank đã sụp đổ sau khi đầu tư tiền gửi của khách hàng vào dài hạn",
	"bank-runs::bank_runs_svb_p1_b":
		"Khi những trái phiếu đó mất giá trị, SVB không thể đáp ứng các yêu cầu rút tiền. Ngân hàng đã mất khả năng thanh toán.",
	"bank-runs::bank_runs_svb_p1_link": "trái phiếu chính phủ.",
	"bank-runs::bank_runs_svb_p2":
		"Hàng nghìn doanh nghiệp không thể trả lương cho nhân viên. FDIC đã can thiệp — nhưng điều đó đặt ra một câu hỏi lớn hơn: tiền của bạn có thực sự an toàn không?",
	"bank-runs::bank_runs_what_p1":
		"Các ngân hàng không giữ tiền gửi của bạn trong két sắt. Họ cho vay tiền của bạn và đầu tư nó — đó được gọi là ngân hàng dự trữ một phần.",
	"bank-runs::bank_runs_what_p2":
		"Nếu quá nhiều người cố rút tiền cùng lúc, ngân hàng không có đủ tiền mặt để trả cho mọi người. Đó là rút tiền hàng loạt — và nó có thể khiến ngân hàng sụp đổ hoàn toàn.",

	// ─── common ───
	"common::common_language_switcher_add_language": "Thêm ngôn ngữ",
	"common::common_next_buy_bitcoin": "Mua Bitcoin",
	"common::common_next_buy_bitcoin_desc": "Tìm hiểu cách mua Bitcoin an toàn",
	"common::common_next_calculate": "Tính lạm phát của bạn",
	"common::common_next_calculate_desc":
		"Xem lạm phát ảnh hưởng đến lương của bạn theo thời gian như thế nào",
	"common::common_next_get_wallet": "Lấy một chiếc ví",
	"common::common_next_get_wallet_desc":
		"Sở hữu ví Bitcoin đầu tiên của bạn — hoàn toàn miễn phí",
	"common::common_next_keep_learning": "Tiếp tục học hỏi",
	"common::common_next_keep_learning_desc":
		"Xem Bitcoin đang cải thiện thế giới như thế nào",
	"common::common_source_bls_cpi":
		"Cục Thống kê Lao động Hoa Kỳ — Chỉ số Giá Tiêu dùng (CPI)",
	"common::common_source_fred_money_supply_index":
		"Dữ liệu Kinh tế Cục Dự trữ Liên bang (FRED) — Cung tiền (Chỉ mục danh mục)",
	"common::common_source_whitepaper":
		"Satoshi Nakamoto — Bitcoin: Hệ thống Tiền điện tử Ngang hàng (2008)",
	"common::common_sources_treasury_auction":
		"James Lavish — \"Liệu một cuộc đấu giá Trái phiếu Kho bạc có thể thất bại?\"",
	"common::common_stickers_printer_name": "StickerMule.com",
	"common::common_whats_next": "Tiếp theo là gì?",
	"common::common_sticker_files_mission_5": "yêu cầu một gói",
	"common::common_site_tagline": "Giáo dục Bitcoin cho mọi người.",
	"common::common_source_btc_map":
		"BTC Map — Danh bạ toàn cầu các thương nhân chấp nhận Bitcoin",
	"common::common_source_btcpayserver":
		"BTCPay Server — Bộ xử lý thanh toán Bitcoin miễn phí, mã nguồn mở, tự lưu trữ",
	"common::common_source_oshi":
		"Oshi — Nền tảng thưởng Bitcoin cho thương nhân",
	"common::common_source_strike_business":
		"Strike — Thanh toán Bitcoin & Lightning cho doanh nghiệp",
	"common::common_sources_group_bitcoin": "Dữ liệu Bitcoin",
	"common::common_sources_group_cpi": "Lạm phát / Chỉ số Giá Tiêu dùng",
	"common::common_sources_group_debt": "Nợ chính phủ",
	"common::common_sources_group_money": "Dữ liệu cung tiền",
	"common::common_sources_group_stories": "Ví dụ thực tế",
	"common::common_sticker_files_mission_6":
		"nhãn dán tiếng Anh miễn phí.",
	"common::common_sticker_files_next_flyers_label": "Tờ rơi",
	"common::common_sticker_files_next_flyers_title": "In một tờ rơi Bitcoin",
	"common::common_sticker_files_next_languages_label": "Tệp nhãn dán",
	"common::common_sticker_files_next_languages_title":
		"Xem tệp nhãn dán bằng các ngôn ngữ khác",
	"common::common_sticker_files_print_these":
		"IN NGAY CHỈ VỚI 1 NHẤP CHUỘT",
	"common::common_sticker_name_bdhi_black":
		"Nhãn dán “Bitcoin Không Có Lạm Phát” (Đen)",
	"common::common_sticker_name_bdhi_orange":
		"Nhãn dán “Bitcoin Không Có Lạm Phát” (Cam)",
	"common::common_sticker_name_caution":
		"Nhãn dán Bitcoin “Cẩn thận! Viên đá đang tan chảy”",
	"common::common_sticker_name_cure_inflation":
		"Nhãn dán Bitcoin “Chữa lạm phát”",
	"common::common_sticker_name_danger":
		"Nhãn dán Bitcoin “Nguy hiểm! Lạm phát phía trước”",
	"common::common_sticker_name_fix":
		"Nhãn dán Bitcoin “Sửa Tiền, Sửa Thế giới”",
	"common::common_sticker_name_got_inflation":
		"Nhãn dán Bitcoin “Bạn có lạm phát?”",
	"common::common_sticker_name_study":
		"Nhãn dán “Học Bitcoin”",
	"common::common_sticker_name_warning":
		"Nhãn dán Bitcoin “Cảnh báo! Lạm phát đang đánh cắp tiền tiết kiệm của bạn”",
	"common::common_sticker_name_what_if":
		"Nhãn dán Bitcoin “Nếu tiền của bạn không có lạm phát thì sao?”",
	"common::common_sticker_tips_heading": "Mẹo dán nhãn",
	"common::common_sticker_tips_intro":
		"Sau khi đã in nhãn dán, hãy đặt chúng ở những nơi mà mọi người có thể nhìn thấy! Những vị trí dán tốt là:",
	"common::common_sticker_tips_list_1":
		"ở nơi công cộng nơi mọi người sẽ nhìn thấy",
	"common::common_sticker_tips_list_2":
		"ở những nơi khó bị gỡ bỏ nhanh chóng (nhãn dán không gây hư hỏng vĩnh viễn)",
	"common::common_sticker_tips_list_3":
		"trên các bề mặt mà chúng dễ dán (kim loại, nhựa, kính)",
	"common::common_sticker_tips_list_4":
		"KHÔNG dán trên tài sản tư nhân, che biển hiệu, ATM hoặc trụ bơm xăng",
	"common::common_stickers_printer_prefix": "Chúng tôi sử dụng",
	"common::common_stickers_printer_suffix":
		"nhưng bạn có thể sử dụng bất kỳ công ty nhãn dán nào.",

	// ─── compound-inflation-calculator ───
	"compound-inflation-calculator::sources_fred_cpi_urban":
		"Dữ liệu Kinh tế Cục Dự trữ Liên bang (FRED) — Chỉ số Giá Tiêu dùng cho Toàn bộ Người tiêu dùng Đô thị",
	"compound-inflation-calculator::sources_fred_m1":
		"Dữ liệu Kinh tế Cục Dự trữ Liên bang (FRED) — Cung tiền M1",
	"compound-inflation-calculator::cic_calculator_heading":
		"Tính khoảng cách lạm phát của bạn",
	"compound-inflation-calculator::cic_cta_label": "Bước tiếp theo",
	"compound-inflation-calculator::cic_hero_subtitle":
		"Xem lương của bạn cần tăng bao nhiêu để bắt kịp với lạm phát.",
	"compound-inflation-calculator::cic_hero_title":
		"Tính máy lạm phát kép",
	"compound-inflation-calculator::cic_next_buy_bitcoin_label": "Mua Bitcoin",
	"compound-inflation-calculator::cic_next_buy_bitcoin_title":
		"Tìm hiểu cách mua Bitcoin an toàn",
	"compound-inflation-calculator::cic_next_inflation_label": "Lạm phát",
	"compound-inflation-calculator::cic_next_inflation_title":
		"Xem bằng chứng cho thấy tiền của bạn đang mất giá",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let alreadyFilled = 0;
	let unmatched = 0;
	const unmatchedKeys = [];

	for (const entry of report.entries) {
		const key = `${entry.namespace}::${entry.key}`;
		if (entry.targetTranslation !== null && entry.targetTranslation !== undefined) {
			alreadyFilled++;
			continue;
		}
		if (TRANSLATIONS[key] !== undefined) {
			entry.targetTranslation = TRANSLATIONS[key];
			filled++;
		} else {
			unmatched++;
			unmatchedKeys.push(key);
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`[part1] filled=${filled} alreadyFilled=${alreadyFilled} unmatched=${unmatched} (in dictionary: ${
			Object.keys(TRANSLATIONS).length
		})`,
	);
	if (process.env.SHOW_UNMATCHED && unmatchedKeys.length) {
		console.log("first 10 unmatched:");
		console.log(unmatchedKeys.slice(0, 10).join("\n"));
	}
}

main();
