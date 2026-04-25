#!/usr/bin/env node
/**
 * Vietnamese (vi) manifest refresh — Part 3
 * index, get-involved, nostr/index
 *
 * Idempotent. Run after part 2.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"../i18n-audit/reports/vi.json",
);

const TRANSLATIONS = {
	// ─── index (homepage) ───
	"index::home_btn_saving": "tiết kiệm",
	"index::home_card_label_art_1": "Hãy so sánh",
	"index::home_card_label_art_2": "Lan truyền thông điệp",
	"index::home_card_label_art_3": "Nghệ thuật đường phố",
	"index::home_card_label_bank_runs": "Hệ thống dự trữ toàn phần",
	"index::home_card_label_bonds": "Hãy so sánh",
	"index::home_card_label_business_1": "Có gì khác biệt?",
	"index::home_card_label_business_2": "Chấp nhận thanh toán Bitcoin",
	"index::home_card_label_cash": "Hãy so sánh",
	"index::home_card_label_cbdc": "Mở hay đóng?",
	"index::home_card_label_coding_1": "Hướng dẫn tương tác",
	"index::home_card_label_coding_2": "Xây dựng phần cứng",
	"index::home_card_label_coding_3": "Câu đố lập trình",
	"index::home_card_label_crowdfunding_1": "Cuộc biểu tình EndSARS",
	"index::home_card_label_crowdfunding_2": "Tiền không thể ngăn chặn",
	"index::home_card_label_crowdfunding_3": "Gọi vốn cho dự án của bạn",
	"index::home_card_label_crypto": "Có gì khác biệt?",
	"index::home_card_label_energy_1": "Ổn định lưới điện",
	"index::home_card_label_energy_4": "Phản hồi nhu cầu",
	"index::home_card_label_energy_5": "Điện khí hóa nông thôn",
	"index::home_card_label_energy_6": "Khuyến khích năng lượng tái tạo",
	"index::home_card_label_environment_1": "Giảm khí mê-tan",
	"index::home_card_label_environment_2": "Cứu một công viên quốc gia",
	"index::home_card_label_environment_3": "Ngành công nghiệp xanh nhất",
	"index::home_card_label_environment_4": "Giảm khí đốt thải bỏ",
	"index::home_card_label_equality_1": "Hy vọng & cơ hội",
	"index::home_card_label_equality_2": "Một bước ngoặt",
	"index::home_card_label_food_1": "Giá lương thực",
	"index::home_card_label_food_2": "Trang trại & đất đai",
	"index::home_card_label_freedom_1": "Các chế độ độc tài",
	"index::home_card_label_freedom_2": "Một công cụ độc đáo",
	"index::home_card_label_get_started_1": "Kiến thức cơ bản cho người mới",
	"index::home_card_label_get_started_2": "Chiếc ví đầu tiên của bạn",
	"index::home_card_label_get_started_3": "Mua Bitcoin",
	"index::home_card_label_gold": "Cái nào tốt hơn?",
	"index::home_card_label_housing_1": "Nhà ở giá phải chăng",
	"index::home_card_label_human_rights_1": "Thực thi quyền con người",
	"index::home_card_label_human_rights_2": "Áp dụng từ cơ sở",
	"index::home_card_label_human_rights_3": "Tác động toàn cầu",
	"index::home_card_label_inflation": "Bitcoin là tiền tốt hơn",
	"index::home_card_label_networks_1": "Xem mạng lưới trực tiếp",
	"index::home_card_label_networks_2": "Hãy so sánh",
	"index::home_card_label_payments_1": "Có gì khác biệt?",
	"index::home_card_label_payments_2": "Thanh toán nhanh & rẻ",
	"index::home_card_label_payments_3": "Kiều hối",
	"index::home_card_label_payments_4": "Nhận thanh toán",
	"index::home_card_label_politics_1": "Nghịch lý chính trị",
	"index::home_card_label_politics_2": "Hãy hành động",
	"index::home_card_label_property_rights_1": "Hãy so sánh",
	"index::home_card_label_property_rights_2": "Sở hữu thực sự",
	"index::home_card_label_salary": "Bảo vệ tiền lương của bạn",
	"index::home_card_label_self_custody_1": "Hướng dẫn ví Bitcoin",
	"index::home_card_label_self_custody_2": "Bước quan trọng nhất",
	"index::home_card_label_self_custody_3": "Tiền có chủ quyền",
	"index::home_card_label_war_1": "Chấm dứt chiến tranh kéo dài",
	"index::home_card_label_war_2": "Giúp đỡ cựu chiến binh",
	"index::home_card_label_war_3": "Lối thoát thời chiến",
	"index::home_h1":
		"Bitcoin là tiền tốt hơn đang xây dựng một thế giới tốt đẹp hơn.",
	"index::home_nav_about": "Giới thiệu",
	"index::home_nav_get_involved": "Tham gia",
	"index::home_nav_learn": "Tìm hiểu",
	"index::home_source_prefix": "Nguồn:",

	// ─── get-involved ───
	"get-involved::get_involved_and_help_spread_bitcoin":
		"Tham gia và lan tỏa Bitcoin",
	"get-involved::get_involved_business_content_1":
		"Bạn muốn giúp xây dựng nền kinh tế tuần hoàn Bitcoin? Cách dễ nhất là giúp các doanh nghiệp địa phương bắt đầu chấp nhận thanh toán Bitcoin.",
	"get-involved::get_involved_business_content_2":
		"Biết một doanh nghiệp có thể quan tâm? Hãy gửi chủ doanh nghiệp đến",
	"get-involved::get_involved_business_content_3":
		"trang Bitcoin doanh nghiệp của chúng tôi.",
	"get-involved::get_involved_description":
		"Các tài nguyên miễn phí của chúng tôi giúp việc lan tỏa Bitcoin dễ dàng hơn. Nhãn dán, tờ rơi, nhãn dán \"Bitcoin Accepted Here\" cho doanh nghiệp và một mã nguồn mở mà bất kỳ ai cũng có thể đóng góp.",
	"get-involved::get_involved_header":
		"Tham gia và lan tỏa Bitcoin.",
	"get-involved::get_involved_intro_5":
		"Bạn có thể giúp thay đổi điều đó. Chúng tôi đã tạo một số tài nguyên miễn phí để giúp bạn lan tỏa hy vọng mà Bitcoin mang lại cho những người xung quanh dễ dàng hơn.",
	"get-involved::get_involved_biz_stickers_note":
		"Đã chấp nhận Bitcoin? Hãy để khách hàng biết với nhãn dán \"Bitcoin Accepted Here\" miễn phí của chúng tôi. Chúng tôi sẽ gửi một gói đến bất kỳ địa chỉ nào tại Hoa Kỳ hoặc Canada, hoặc bạn có thể tự in ở bất kỳ đâu trên thế giới.",
	"get-involved::get_involved_card_biz_stickers_label":
		"Nhãn dán \"Accepted Here\"",
	"get-involved::get_involved_card_biz_stickers_source":
		"Nguồn: bitcoin.rocks →",
	"get-involved::get_involved_card_biz_stickers_title":
		"Nhãn dán \"Bitcoin Accepted Here\" miễn phí cho doanh nghiệp của bạn",
	"get-involved::get_involved_card_business_label": "Bitcoin cho doanh nghiệp",
	"get-involved::get_involved_card_business_source": "Nguồn: bitcoin.rocks →",
	"get-involved::get_involved_card_business_title":
		"Mọi thứ một doanh nghiệp cần để bắt đầu chấp nhận thanh toán Bitcoin",
	"get-involved::get_involved_card_flyers_label": "Tờ rơi có thể in",
	"get-involved::get_involved_card_flyers_source": "Nguồn: bitcoin.rocks →",
	"get-involved::get_involved_card_flyers_title":
		"Tải xuống và in một tờ rơi Bitcoin miễn phí",
	"get-involved::get_involved_card_github_label": "Mã nguồn mở",
	"get-involved::get_involved_card_github_source": "Nguồn: GitHub →",
	"get-involved::get_involved_card_github_title":
		"Đóng góp cho bitcoin.rocks trên GitHub",
	"get-involved::get_involved_card_stickers_label": "Nhãn dán miễn phí",
	"get-involved::get_involved_card_stickers_source": "Nguồn: bitcoin.rocks →",
	"get-involved::get_involved_card_stickers_title":
		"Yêu cầu một gói nhãn dán Bitcoin miễn phí gửi đến tận nhà bạn",
	"get-involved::get_involved_flyers_content_1":
		"Tờ rơi là một trong những cách dễ nhất để giới thiệu Bitcoin với cộng đồng của bạn. Tải xuống một tờ rơi Bitcoin miễn phí có thể in, in bao nhiêu bản tùy thích và dán chúng trên bảng tin cộng đồng, trong các quán cà phê, tại các buổi gặp mặt hoặc bất kỳ nơi nào mọi người tụ tập.",
	"get-involved::get_involved_flyers_content_2":
		"Mỗi tờ rơi đều có một tiêu đề hấp dẫn và mã QR đưa người đọc tò mò đến bitcoin.rocks để tìm hiểu thêm.",
	"get-involved::get_involved_flyers_content_3":
		"Không giống như nhãn dán, tờ rơi có thể được in theo yêu cầu từ bất kỳ đâu trên thế giới — tất cả những gì bạn cần là một máy in và vài phút.",
	"get-involved::get_involved_flyers_header": "In và dán một tờ rơi",
	"get-involved::get_involved_flyers_image_alt":
		"Xem trước tờ rơi Bitcoin miễn phí có thể in từ bitcoin.rocks",
	"get-involved::get_involved_github_content_1":
		"bitcoin.rocks là một dự án miễn phí, mã nguồn mở được cấp phép theo Giấy phép MIT. Sứ mệnh của chúng tôi là thúc đẩy việc áp dụng Bitcoin thông qua giáo dục — và chúng tôi không thể làm điều đó một mình.",
	"get-involved::get_involved_github_content_2":
		"Cho dù bạn là nhà phát triển, nhà thiết kế, người viết hay dịch giả, đều có cách để bạn giúp đỡ. Chúng tôi đặc biệt chào đón những người đóng góp có thể dịch nội dung của chúng tôi sang nhiều ngôn ngữ hơn để nhiều người trên khắp thế giới có thể tìm hiểu về Bitcoin bằng tiếng mẹ đẻ của họ.",
	"get-involved::get_involved_github_content_3":
		"Hãy fork kho mã, mở một pull request, mở một issue hoặc chỉ cần star dự án để thể hiện sự ủng hộ. Mọi đóng góp đều giúp Bitcoin đến với nhiều người hơn.",
	"get-involved::get_involved_github_header":
		"Đóng góp trên GitHub",
	"get-involved::get_involved_sticker_image_alt":
		"Gói nhãn dán văn bản Bitcoin miễn phí từ bitcoin.rocks",

	// ─── nostr/index ───
	"nostr/index::nostr_amethyst_name": "Amethyst",
	"nostr/index::nostr_damus_name": "Damus",
	"nostr/index::nostr_iris_name": "Iris",
	"nostr/index::nostr_platform_android": "Android",
	"nostr/index::nostr_platform_ios": "iPhone",
	"nostr/index::nostr_platform_ios_android_web":
		"iPhone, Android & web",
	"nostr/index::nostr_platform_web": "Trình duyệt web",
	"nostr/index::nostr_primal_name": "Primal",
	"nostr/index::nostr_page_description":
		"Nostr là một giao thức phi tập trung mới cho giao tiếp trực tuyến — không công ty đơn lẻ nào kiểm soát nó, các zap Bitcoin được tích hợp sẵn và bạn có thể chuyển giữa các ứng dụng mà không mất người theo dõi.",
	"nostr/index::nostr_amethyst_f1":
		"Nhiều tính năng và tùy biến",
	"nostr/index::nostr_amethyst_f2":
		"Yêu cầu ví Bitcoin riêng",
	"nostr/index::nostr_amethyst_f3": "100% miễn phí",
	"nostr/index::nostr_damus_f1":
		"Giao diện quen thuộc giống Twitter",
	"nostr/index::nostr_damus_f2":
		"Yêu cầu ví Bitcoin riêng",
	"nostr/index::nostr_damus_f3": "100% miễn phí",
	"nostr/index::nostr_download_heading":
		"Tải xuống một ứng dụng Nostr miễn phí",
	"nostr/index::nostr_download_intro":
		"Các ứng dụng Nostr là những ứng dụng miễn phí cho phép bạn đọc và đăng bài trên mạng Nostr. Tất cả đều có thể tương tác với nhau — bạn có thể chuyển ứng dụng bất cứ lúc nào và giữ nguyên người theo dõi và nội dung.",
	"nostr/index::nostr_hero_subtitle":
		"Nostr là một giao thức phi tập trung mới cho giao tiếp trực tuyến — không công ty đơn lẻ nào kiểm soát nó, các zap Bitcoin được tích hợp sẵn và bạn có thể chuyển giữa các ứng dụng mà không mất người theo dõi.",
	"nostr/index::nostr_hero_title": "Nostr là gì?",
	"nostr/index::nostr_intro_c1":
		"Nostr tương tự như email: không ai sở hữu giao thức, bất kỳ ai cũng có thể xây dựng ứng dụng trên nó và bạn có thể chọn ứng dụng nào bạn thích nhất. Không giống như Twitter hay Facebook, không có công ty trung tâm nào có thể kiểm duyệt, gỡ bỏ hay giảm tương tác của bạn.",
	"nostr/index::nostr_intro_c2":
		"Dưới đây là phiên bản ngắn gọn về lý do tại sao Nostr quan trọng — sau đó là mọi ứng dụng Nostr miễn phí bạn cần để bắt đầu ngay hôm nay.",
	"nostr/index::nostr_iris_f1":
		"Cực kỳ đơn giản — không cần cài đặt",
	"nostr/index::nostr_iris_f2":
		"Cách dễ dàng để thử Nostr với tài khoản dùng thử",
	"nostr/index::nostr_iris_f3": "100% miễn phí",
	"nostr/index::nostr_learn_more_label": "TÌM HIỂU SÂU HƠN",
	"nostr/index::nostr_learn_more_title":
		"Tìm hiểu thêm về Nostr trên nostr.how",
	"nostr/index::nostr_primal_f1":
		"Ứng dụng đầu tiên được khuyến nghị",
	"nostr/index::nostr_primal_f2":
		"Tích hợp sẵn ví zap Bitcoin",
	"nostr/index::nostr_primal_f3": "100% miễn phí",
	"nostr/index::nostr_s1": "Giao thức, không phải nền tảng",
	"nostr/index::nostr_s1_c1":
		"Nostr là một giao thức mới cho phép bạn giao tiếp trực tuyến mà không lo bị kiểm duyệt, gỡ bỏ hay giảm tương tác.",
	"nostr/index::nostr_s1_c2":
		"Các nền tảng như Twitter và Facebook được kiểm soát bởi một công ty duy nhất, nhưng không ai kiểm soát giao thức Nostr.",
	"nostr/index::nostr_s2": "Tự do di chuyển",
	"nostr/index::nostr_s2_c1":
		"Nostr tương tự như email. Không ai kiểm soát giao thức email và bất kỳ ai cũng có thể xây dựng một ứng dụng (như Gmail, Hotmail, v.v.) trên nó.",
	"nostr/index::nostr_s2_c2":
		"Không ai kiểm soát giao thức Nostr cả và bất kỳ ai cũng có thể xây dựng một ứng dụng (như Damus, Amethyst, v.v.) trên nó.",
	"nostr/index::nostr_s2_c3":
		"Nếu bạn không thích cách một ứng dụng nhất định hoạt động, bạn có thể chuyển tài khoản Nostr của mình sang ứng dụng khác một cách liền mạch mà không mất người theo dõi hoặc nội dung.",
	"nostr/index::nostr_s3": "Bitcoin được tích hợp sẵn",
	"nostr/index::nostr_s3_c1":
		"Bitcoin được tích hợp sẵn vào giao thức Nostr một cách tự nhiên. Nếu bạn thấy nội dung mình thích, bạn có thể dễ dàng zap Bitcoin cho ai đó như một lời cảm ơn!",
	"nostr/index::nostr_s3_c2":
		"Trên các nền tảng tập trung như Twitter và Facebook, công ty tập trung kiếm tiền từ nội dung của bạn. Nhưng trên các giao thức mở như Nostr, bạn kiếm tiền từ nội dung của mình.",
	"nostr/index::sources_damus":
		"Damus — Ứng dụng Nostr cho iPhone",
	"nostr/index::sources_iris":
		"Iris — Ứng dụng Nostr trên trình duyệt",
	"nostr/index::sources_nostr_how":
		"nostr.how — Nostr là gì?",
	"nostr/index::sources_nostr_protocol":
		"Giao thức Nostr — Đặc tả mã nguồn mở",
	"nostr/index::sources_primal":
		"Primal — Ứng dụng Nostr với ví zap Bitcoin tích hợp sẵn",
	"nostr/index::what_is_nostr": "Nostr là gì?",
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
		`[part3] filled=${filled} alreadyFilled=${alreadyFilled} unmatched=${unmatched} (in dictionary: ${
			Object.keys(TRANSLATIONS).length
		})`,
	);
}

main();
