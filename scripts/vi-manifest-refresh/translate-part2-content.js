#!/usr/bin/env node
/**
 * Vietnamese (vi) manifest refresh — Part 2
 *
 * Translates entries for: compound-inflation-calculator (gaps),
 * flyers, sticker-success, sticker-language-success, stickers,
 * buy, lightning, wallets, sticker-files/index.
 *
 * Idempotent. Run after part 1.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"../i18n-audit/reports/vi.json",
);

const TRANSLATIONS = {
	// ─── compound-inflation-calculator gaps ───
	"compound-inflation-calculator::cic_next_explore_topics":
		"Khám phá thêm các chủ đề",
	"compound-inflation-calculator::cic_next_explore_topics_desc":
		"Xem Bitcoin kết nối với tiền tệ, tự do, năng lượng và hơn thế nào.",
	"compound-inflation-calculator::cic_next_learn_inflation":
		"Tìm hiểu cách lạm phát vận hành",

	// ─── flyers ───
	"flyers::flyers_intro_header":
		"Cách in và dán những tờ rơi Bitcoin này",
	"flyers::flyers_hero_subtitle":
		"Tờ rơi Bitcoin miễn phí, có thể in. Hãy dán chúng ở nơi công cộng để giúp nhiều người tìm hiểu thêm về Bitcoin.",
	"flyers::flyers_hero_title": "In và dán tờ rơi Bitcoin",
	"flyers::flyers_next_get_stickers": "Lan truyền thông điệp",
	"flyers::flyers_next_get_stickers_desc":
		"Đặt một gói nhãn dán Bitcoin miễn phí",

	// ─── sticker-success ───
	"sticker-success::sticker_success_btn_order_bulk": "Đặt số lượng lớn",
	"sticker-success::sticker_success_btn_share_on_nostr":
		"Chia sẻ trên Nostr",
	"sticker-success::sticker_success_btn_what_is_nostr": "Nostr là gì?",
	"sticker-success::sticker_success_bulk_header": "Muốn thêm nhãn dán?",
	"sticker-success::sticker_success_hero_title":
		"Nhãn dán của bạn đang trên đường tới 🎉",
	"sticker-success::sticker_success_share_header":
		"Chia sẻ những vị trí dán nhãn của bạn",
	"sticker-success::sticker_success_tips_header": "Các vị trí dán nhãn tốt",

	// ─── sticker-language-success ───
	"sticker-language-success::sticker_language_success_hero_title":
		"Đã nhận yêu cầu 🎉",

	// ─── stickers ───
	"stickers::stickers_intro_c2": "Bitcoin",
	"stickers::stickers_flyers_link_before":
		"Khi bạn đã làm rồi, hãy in và dán",
	"stickers::stickers_instructions_1":
		"Nhập địa chỉ gửi thư của bạn và chúng tôi sẽ gửi cho bạn một Gói Nhãn Dán Bitcoin miễn phí trong vài tuần.",
	"stickers::stickers_btn_choose_pack": "Chọn gói này",
	"stickers::stickers_bulk_c1": "Muốn nhiều hơn vài chiếc nhãn dán?",
	"stickers::stickers_bulk_c2":
		"Đặt số lượng lớn từ chính nhà in mà chúng tôi sử dụng",
	"stickers::stickers_bulk_c3":
		"— bạn càng mua nhiều, giá mỗi nhãn dán càng rẻ.",
	"stickers::stickers_bulk_cta": "Mua nhãn dán số lượng lớn",
	"stickers::stickers_bulk_header": "Đặt nhãn dán số lượng lớn",
	"stickers::stickers_hero_subtitle":
		"Đặt một gói nhãn dán Bitcoin miễn phí và dán chúng ở nơi công cộng để giúp nhiều người tìm hiểu thêm về Bitcoin.",
	"stickers::stickers_hero_title": "Nhãn dán Bitcoin miễn phí",
	"stickers::stickers_intro_c1":
		"Sứ mệnh của chúng tôi là giúp bạn “orange pill” thêm nhiều người bằng cách dán nhãn Bitcoin ở nơi công cộng — nơi mọi người có thể quét mã QR để tìm hiểu về",
	"stickers::stickers_intro_c3": "lạm phát",
	"stickers::stickers_intro_c4":
		"Chọn một gói nhãn dán bên dưới và chọn cách bạn muốn nhận chúng — chúng tôi sẽ gửi miễn phí một gói đến địa chỉ của bạn ở Hoa Kỳ hoặc Canada, hoặc bạn có thể tự in ở bất kỳ đâu.",
	"stickers::stickers_mail_header":
		"Chúng tôi sẽ gửi nhãn dán miễn phí cho bạn",
	"stickers::stickers_next_print_flyers": "Tiếp tục lan truyền",
	"stickers::stickers_next_print_flyers_desc":
		"In tờ rơi Bitcoin miễn phí để dán ở nơi công cộng",
	"stickers::stickers_option_bulk": "📦 Toàn cầu — Đặt số lượng lớn",
	"stickers::stickers_option_canada": "🇨🇦 Canada — Miễn phí qua thư",
	"stickers::stickers_option_print": "🌍 Toàn cầu — Tự in",
	"stickers::stickers_option_usa": "🇺🇸 Hoa Kỳ — Miễn phí qua thư",
	"stickers::stickers_print_c1":
		"Bạn có thể tham gia bằng cách tự in nhãn dán, bất kể bạn sống ở đâu. Nhấp vào ngôn ngữ của bạn bên dưới để xem các tệp nhãn dán có sẵn.",
	"stickers::stickers_print_c2":
		"Không phải mọi nhãn dán đều có sẵn ở mọi ngôn ngữ.",
	"stickers::stickers_print_header": "In tệp nhãn dán của riêng bạn",
	"stickers::stickers_request_c1":
		"Điền vào biểu mẫu bên dưới để yêu cầu các tệp nhãn dán bằng ngôn ngữ địa phương của bạn. Chúng tôi sẽ cho bạn biết khi chúng đã sẵn sàng.",
	"stickers::stickers_request_header": "Không thấy ngôn ngữ của bạn?",
	"stickers::stickers_share_c2": "Theo dõi chúng tôi trên Nostr bằng cách tìm",
	"stickers::stickers_share_c3": "trong bất kỳ ứng dụng Nostr nào.",
	"stickers::stickers_signs_pack_description":
		"Các biển báo theo phong cách cảnh báo, nguy hiểm và chú ý với thông điệp Bitcoin — được thiết kế để thu hút sự chú ý và khơi gợi tò mò ở nơi công cộng.",
	"stickers::stickers_step_1_description":
		"Mỗi gói có một bộ nhãn dán Bitcoin khác nhau với mã QR dạy mọi người về Bitcoin.",
	"stickers::stickers_step_1_eyebrow": "BƯỚC 1",
	"stickers::stickers_step_1_header": "Chọn gói nhãn dán của bạn",
	"stickers::stickers_step_2_description":
		"Chúng tôi sẽ gửi miễn phí một gói đến địa chỉ ở Hoa Kỳ và Canada. Ở bất kỳ nơi nào khác trên thế giới, bạn có thể tự in hoặc đặt số lượng lớn.",
	"stickers::stickers_step_2_eyebrow": "BƯỚC 2",
	"stickers::stickers_step_2_header":
		"Bạn muốn nhận nhãn dán bằng cách nào?",
	"stickers::stickers_text_pack_description":
		"Một sự kết hợp giữa các khẩu hiệu Bitcoin và những câu nói ngắn được thiết kế để khơi gợi sự tò mò ở nơi công cộng.",

	// ─── buy ───
	"buy::buy_bitcoin_guide": "Cách mua Bitcoin",
	"buy::buy_step_1_header": "Chọn quốc gia của bạn",
	"buy::buy_step_2_header": "Chọn phương thức thanh toán",
	"buy::buy_step_3_header": "Các tùy chọn mua của bạn",
	"buy::buy_step_4_header": "Lưu trữ Bitcoin của bạn an toàn",
	"buy::buy_header_subtitle":
		"Một hướng dẫn đơn giản, từng bước để mua Bitcoin lần đầu của bạn.",
	"buy::buy_howto_name": "Cách mua Bitcoin",
	"buy::buy_meta_description":
		"Tìm hiểu cách mua Bitcoin một cách an toàn với hướng dẫn từng bước của chúng tôi. Chọn quốc gia, phương thức thanh toán và nền tảng phù hợp với bạn.",
	"buy::buy_step_1_eyebrow": "Bước 1",
	"buy::buy_step_2_eyebrow": "Bước 2",
	"buy::buy_step_3_eyebrow": "Bước 3",
	"buy::buy_step_4_eyebrow": "Bước 4",
	"buy::buy_storage_cta_label": "Bước tiếp theo",
	"buy::sources_bisq":
		"Bisq — Sàn giao dịch Bitcoin phi tập trung ngang hàng",
	"buy::sources_coinatmradar":
		"Coin ATM Radar — Danh bạ ATM Bitcoin trên toàn thế giới",
	"buy::sources_kraken":
		"Kraken — Sàn giao dịch Bitcoin lâu đời",
	"buy::sources_relai":
		"Relai — Ứng dụng tự lưu ký Bitcoin của Thụy Sĩ chỉ Bitcoin",
	"buy::sources_river":
		"River — Mua, đào và lưu ký Bitcoin chỉ dành cho Bitcoin",
	"buy::sources_strike_lightning":
		"Strike — Mua Bitcoin với hỗ trợ Lightning Network",
	"buy::sources_swan":
		"Swan Bitcoin — Trung bình hóa giá theo đô la chỉ dành cho Bitcoin",

	// ─── lightning ───
	"lightning::sources_lightning_paper":
		"Joseph Poon & Thaddeus Dryja — Lightning Network của Bitcoin: Thanh toán tức thì có thể mở rộng ngoài chuỗi",
	"lightning::lightning_s1_c4": "Hãy xem",
	"lightning::lightning_grid_heading": "Các ví Lightning phổ biến",
	"lightning::lightning_hardware_cta_label": "Ví phần cứng",
	"lightning::lightning_header_subtitle":
		"Lightning cho phép bạn gửi Bitcoin trong vài giây với chi phí chỉ một phần nhỏ của một xu — chọn ví phù hợp với bạn.",
	"lightning::lightning_s1_c4_end": "để biết thêm thông tin.",
	"lightning::lightning_s1_c4_link":
		"Hướng dẫn Ví Phần cứng Bitcoin",
	"lightning::sources_acinq_phoenix":
		"ACINQ — Ví Lightning Phoenix",
	"lightning::sources_breez_lightning":
		"Breez — Ví Lightning tự lưu ký",
	"lightning::sources_lightning_labs":
		"Lightning Labs — Tài liệu Lightning Network",
	"lightning::sources_wallet_of_satoshi":
		"Wallet of Satoshi — Ví Lightning được lưu ký",

	// ─── wallets ───
	"wallets::sources_bitcoin_org_choose":
		"Bitcoin.org — Chọn ví của bạn",
	"wallets::sources_jameson_lopp":
		"Jameson Lopp — Đánh giá lưu trữ hạt giống Bitcoin bằng kim loại",
	"wallets::wallets_lightning_cta_label": "Lightning Network",
	"wallets::sources_blockstream_green":
		"Blockstream Green — Ví Bitcoin tự lưu ký",
	"wallets::sources_blockstream_jade":
		"Blockstream Jade — Ví phần cứng Bitcoin",
	"wallets::sources_coldcard_mk5":
		"Coinkite — Ví phần cứng Coldcard MK5",
	"wallets::sources_coldcard_q":
		"Coinkite — Ví phần cứng Coldcard Q",
	"wallets::sources_passport":
		"Foundation Devices — Ví phần cứng Passport",
	"wallets::sources_seedsigner":
		"SeedSigner — Thiết bị ký Bitcoin DIY mã nguồn mở",
	"wallets::wallets_grid_heading": "Các ví Bitcoin phổ biến",
	"wallets::wallets_header_subtitle":
		"Hướng dẫn từng bước để chọn ví, bảo vệ khóa của bạn và toàn quyền kiểm soát Bitcoin của bạn.",

	// ─── sticker-files/index ───
	"sticker-files/index::sticker_files_header":
		"In nhãn dán Bitcoin của riêng bạn với những tệp nhãn dán Bitcoin này.",
};

function main() {
	const report = JSON.parse(fs.readFileSync(REPORT_PATH, "utf8"));
	let filled = 0;
	let alreadyFilled = 0;
	let unmatched = 0;

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
		}
	}

	fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, "\t") + "\n");
	console.log(
		`[part2] filled=${filled} alreadyFilled=${alreadyFilled} unmatched=${unmatched} (in dictionary: ${
			Object.keys(TRANSLATIONS).length
		})`,
	);
}

main();
