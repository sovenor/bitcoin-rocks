#!/usr/bin/env node
/**
 * Vietnamese (vi) manifest refresh — Part 5
 * business/* namespaces.
 *
 * Idempotent. Run after part 4.
 */

const fs = require("fs");
const path = require("path");

const REPORT_PATH = path.resolve(
	__dirname,
	"../i18n-audit/reports/vi.json",
);

const TRANSLATIONS = {
	// ─── business/index ───
	"business/index::biz_label_accounting": "KẾ TOÁN",
	"business/index::biz_label_faq": "CÂU HỎI THƯỜNG GẶP",
	"business/index::biz_label_maps": "BẢN ĐỒ THƯƠNG NHÂN",
	"business/index::biz_label_rewards": "PHẦN THƯỞNG",
	"business/index::biz_label_stickers": "NHÃN DÁN",
	"business/index::biz_label_wallets": "VÍ",
	"business/index::biz_meta_description":
		"Chấp nhận Bitcoin tại doanh nghiệp của bạn để có phí thấp hơn, thanh toán tức thì, không có chargeback và thêm nhiều khách hàng.",
	"business/index::business_hero_subtitle":
		"Chấp nhận thanh toán với phí thấp hơn, được trả tiền ngay lập tức và tiếp cận hàng triệu khách hàng mới — không hợp đồng và không có chi phí ẩn.",
	"business/index::business_intro_c1":
		"Bitcoin mang đến cho doanh nghiệp của bạn một cách thanh toán nhanh hơn, rẻ hơn và riêng tư hơn. Không trung gian. Không chargeback. Không hợp đồng. Chỉ là tiền được thanh toán trong vài giây, trực tiếp từ khách hàng đến bạn.",
	"business/index::business_intro_c2":
		"Dưới đây là phiên bản ngắn gọn về lý do Bitcoin tốt cho doanh nghiệp — và bên dưới đó là mọi tài nguyên bạn cần để bắt đầu chấp nhận nó ngay hôm nay.",
	"business/index::business_resources_heading":
		"Mọi thứ bạn cần để chấp nhận Bitcoin",
	"business/index::business_resources_intro":
		"Tham khảo các tài nguyên này theo nhịp độ của riêng bạn. Mỗi tài nguyên là một hướng dẫn ngắn, thực tế.",

	// ─── business/why ───
	"business/why::learn_why_bitcoin_is_good_for_business":
		"Bitcoin được chấp nhận tại đây",
	"business/why::why_good_for_you":
		"Vì sao Bitcoin cũng tuyệt vời cho bạn",
	"business/why::why_learn_more_lowercase": "Tìm hiểu thêm →",
	"business/why::why_s1_c1":
		"Lạm phát xảy ra khi nhiều tiền được in hoặc tạo ra từ hư không. Điều đó khiến tiền trong túi bạn mất giá theo thời gian — và đó là lý do giá cả tiếp tục tăng năm này qua năm khác.",
	"business/why::why_s1_c2":
		"Bitcoin có nguồn cung cố định 21 triệu đồng. Không chính phủ, ngân hàng hay công ty nào có thể in thêm. Tiền tiết kiệm Bitcoin của bạn giữ giá trị theo thời gian thay vì âm thầm mất đi.",
	"business/why::why_s2_c1":
		"Nhiều ngân hàng Hoa Kỳ đã sụp đổ trong những năm gần đây vì rút tiền hàng loạt. Khi quá nhiều khách hàng cố rút tiền cùng lúc, các ngân hàng không có đủ tiền mặt để trả lại cho mọi người.",
	"business/why::why_s2_c2":
		"Thay vì chỉ giữ tiền của bạn, các ngân hàng cho vay và đầu tư phần lớn số tiền đó. Nếu các khoản đầu tư đó đi sai hướng — hoặc nếu người gửi mất niềm tin — ngân hàng có thể sụp đổ và tiền gửi của bạn có thể bị đóng băng hoặc mất.",
	"business/why::why_s2_c3":
		"Với Bitcoin, bạn có thể giữ tiền của riêng mình trực tiếp trong ví của riêng mình. Không ngân hàng. Không trung gian. Không có rút tiền hàng loạt.",
	"business/why::why_s3_c1":
		"Không giống như thẻ tín dụng, PayPal hay tài khoản ngân hàng truyền thống, Bitcoin không yêu cầu sự cho phép của bất kỳ ai để sử dụng.",
	"business/why::why_s3_c2":
		"Không ai có thể đóng băng tài khoản của bạn, chặn một thanh toán hay cắt bạn khỏi mạng lưới. Đó là hệ thống tài chính đầu tiên trong lịch sử mà bạn có thể sử dụng tự do, không sợ kiểm duyệt hay tịch thu.",
	"business/why::why_s4_c1":
		"Bitcoin thường bị hiểu lầm, nhưng nó đang âm thầm làm rất nhiều điều tốt trên thế giới.",
	"business/why::why_s4_c2":
		"Nó đã giúp các nhà hoạt động nhân quyền đấu tranh cho tự do, giảm phát thải khí mê-tan toàn cầu từ các bãi rác và mỏ dầu, ổn định lưới điện và tài trợ cho các hàng hóa công cộng như công viên quốc gia.",
	"business/why::why_biz_s1": "Phí thấp hơn, doanh nghiệp được nhiều hơn",
	"business/why::why_biz_s1_c1":
		"Thanh toán Bitcoin bỏ qua các ngân hàng và công ty thẻ tín dụng vốn lấy 2–3% từ mỗi giao dịch. Doanh nghiệp giữ được nhiều hơn từ những gì bạn trả — điều đó thường có nghĩa là giá tốt hơn và dịch vụ tốt hơn cho bạn.",
	"business/why::why_biz_s2": "Thanh toán tức thì, không chargeback",
	"business/why::why_biz_s2_c1":
		"Thanh toán Bitcoin được giải quyết trong vài giây, trực tiếp từ ví của bạn đến doanh nghiệp. Không phải đợi nhiều ngày để ngân hàng giải phóng tiền và không có tranh chấp chargeback tốn kém — vì vậy doanh nghiệp có thể tập trung phục vụ khách hàng thay vì chống gian lận.",
	"business/why::why_biz_s3": "Miễn phí chấp nhận, mở cho mọi người",
	"business/why::why_biz_s3_c1":
		"Không có hợp đồng, phí hàng tháng hay chi phí thiết lập để doanh nghiệp chấp nhận Bitcoin. Và hàng triệu người dùng Bitcoin trên khắp thế giới chủ động tìm kiếm các thương nhân chấp nhận nó — mang đến cho doanh nghiệp này sự tiếp cận miễn phí với các khách hàng mới.",
	"business/why::why_business_cta_intro":
		"Điều hành một doanh nghiệp và muốn bắt đầu chấp nhận Bitcoin?",
	"business/why::why_business_cta_link": "Xem cách thực hiện →",
	"business/why::why_for_business":
		"Vì sao Bitcoin tuyệt vời cho doanh nghiệp này",
	"business/why::why_for_business_intro":
		"Chấp nhận Bitcoin cho phép doanh nghiệp giữ được nhiều hơn từ mỗi giao dịch, được thanh toán ngay lập tức không chargeback và tiếp cận đối tượng người dùng Bitcoin toàn cầu — tất cả không hợp đồng và không phí hàng tháng.",
	"business/why::why_good_for_you_intro":
		"Bitcoin không chỉ hữu ích tại quầy thanh toán — đó là một dạng tiền tốt hơn bảo vệ tiền tiết kiệm, quyền riêng tư và tự do giao dịch của bạn. Đây là một tổng quan nhanh.",
	"business/why::why_hero_subtitle":
		"Bạn vừa quét một nhãn dán \"Bitcoin Accepted Here\". Đây là lý do đó là tin tuyệt vời — cho doanh nghiệp này và cho bạn.",
	"business/why::why_intro_c1":
		"Doanh nghiệp bạn đang ở chấp nhận Bitcoin — một mạng thanh toán mã nguồn mở hiện đại mà bất kỳ ai cũng có thể sử dụng, ở bất cứ đâu trên thế giới, không có ngân hàng hay trung gian nào ăn chia.",
	"business/why::why_intro_c2":
		"Dưới đây là phiên bản ngắn gọn về lý do chấp nhận Bitcoin tốt cho doanh nghiệp này, cộng thêm lý do sử dụng Bitcoin tốt cho bạn với tư cách khách hàng.",
	"business/why::why_next_business_label": "CHẤP NHẬN BITCOIN",
	"business/why::why_next_business_title":
		"Chấp nhận Bitcoin tại doanh nghiệp của bạn",
	"business/why::why_next_buy_label": "MUA BITCOIN",
	"business/why::why_next_buy_title": "Mua Bitcoin đầu tiên của bạn",
	"business/why::why_next_learn_label": "TÌM HIỂU THÊM",
	"business/why::why_next_learn_title": "Tìm hiểu thêm về Bitcoin",
	"business/why::why_next_wallet_label": "LẤY MỘT CHIẾC VÍ",
	"business/why::why_next_wallet_title": "Sở hữu ví Bitcoin của riêng bạn",
	"business/why::why_whats_next_heading": "Tiếp theo đi đâu?",
	"business/why::why_whats_next_intro":
		"Nếu đây là lần quét nhãn dán Bitcoin đầu tiên của bạn, đây là những nơi hữu ích nhất để đi tiếp.",

	// ─── business/faq ───
	"business/faq::faq_hero_subtitle":
		"Câu trả lời ngắn gọn cho những câu hỏi mà các thương nhân thường hỏi nhất trước khi bắt đầu chấp nhận Bitcoin — phí, thanh toán, ví, chargeback, chi phí và hơn thế nữa.",
	"business/faq::faq_intro_c1":
		"Nhấn vào bất kỳ câu hỏi nào bên dưới để mở rộng câu trả lời. Khi bạn đã sẵn sàng bắt đầu chấp nhận Bitcoin, các tài nguyên kinh doanh ở cuối trang sẽ hướng dẫn bạn từng bước.",

	// ─── business/wallets ───
	"business/wallets::wallets_name_strike": "STRIKE BUSINESS",
	"business/wallets::biz_wallets_meta_description":
		"Tất cả các ví Bitcoin đều có thể tương tác với nhau — chọn cái phù hợp với doanh nghiệp của bạn. Miễn phí, thanh toán tức thì, không chargeback.",
	"business/wallets::sources_breez_business":
		"Breez — Ví Lightning chỉ dành cho Bitcoin",
	"business/wallets::sources_ibex":
		"IBEX — Hạ tầng thanh toán Lightning",
	"business/wallets::sources_opennode":
		"OpenNode — Đơn vị xử lý thanh toán Bitcoin",
	"business/wallets::sources_square":
		"Square — Chấp nhận thanh toán Bitcoin",
	"business/wallets::sources_zaprite":
		"Zaprite — Lập hóa đơn Bitcoin cho doanh nghiệp",
	"business/wallets::wallets_hero_subtitle":
		"Ví Bitcoin là miễn phí. Chọn cái phù hợp với doanh nghiệp của bạn — trực tiếp, trực tuyến hoặc dựa trên hóa đơn — và bắt đầu chấp nhận Bitcoin trong vài phút.",
	"business/wallets::wallets_section_invoice":
		"Ví cho doanh nghiệp dựa trên hóa đơn",
	"business/wallets::wallets_section_invoice_intro":
		"Nếu bạn lập hóa đơn cho khách hàng (tư vấn, freelance, dịch vụ B2B), hãy sử dụng một chiếc ví được xây dựng xoay quanh việc lập hóa đơn. Khách hàng của bạn thanh toán hóa đơn Bitcoin chỉ trong vài cú nhấp chuột.",
	"business/wallets::wallets_section_multiple":
		"Ví cho doanh nghiệp có nhiều nhân viên",
	"business/wallets::wallets_section_multiple_intro":
		"Nếu bạn có một đội ngũ nhận thanh toán tại quầy, hãy chọn một chiếc ví hỗ trợ nhiều đăng nhập của nhân viên — để mỗi nhân viên có PIN riêng và bạn duy trì được dấu vết kiểm toán rõ ràng về ai đã nhận thanh toán nào.",
	"business/wallets::wallets_section_online":
		"Ví cho doanh nghiệp trực tuyến",
	"business/wallets::wallets_section_online_intro":
		"Bán hàng trên một trang web? Những chiếc ví này tích hợp vào cửa hàng trực tuyến của bạn và chấp nhận Bitcoin từ bất kỳ khách hàng nào, ở bất cứ đâu trên thế giới — không chargeback, không cần tài khoản thương nhân.",
	"business/wallets::wallets_section_sole":
		"Ví cho doanh nghiệp do cá nhân sở hữu",
	"business/wallets::wallets_section_sole_intro":
		"Nếu bạn điều hành một cửa hàng, quán cà phê, studio hoặc dịch vụ một mình, bất kỳ chiếc ví nào trong số này đều sẽ hoạt động. Hãy chọn dựa trên việc bạn muốn giữ thanh toán bằng Bitcoin hay tự động chuyển một phần mỗi thanh toán sang đồng tiền địa phương của bạn.",
	"business/wallets::wallets_strike_note":
		"Strike Business cho phép bạn chấp nhận thanh toán Bitcoin và Lightning với phí bằng không và thanh toán tức thì. Hỗ trợ thanh toán trực tiếp, trực tuyến và dựa trên hóa đơn với tùy chọn tự động chuyển sang đồng tiền địa phương của bạn.",

	// ─── business/stickers ───
	"business/stickers::biz_stickers_hero_subtitle":
		"Hãy để khách hàng biết bạn chấp nhận Bitcoin. Đặt một gói nhãn dán \"Bitcoin Accepted Here\" miễn phí để dán tại doanh nghiệp của bạn.",
	"business/stickers::biz_stickers_hero_title":
		"Nhãn dán \"Bitcoin Accepted Here\" miễn phí",
	"business/stickers::biz_stickers_intro_c1":
		"Chấp nhận Bitcoin chỉ là một nửa công việc — khách hàng của bạn cũng cần biết rằng bạn chấp nhận. Những nhãn dán nhỏ \"Bitcoin Accepted Here\" này được thiết kế để dán trên cửa trước, quầy thanh toán, thực đơn hay bất cứ nơi nào khách hàng sẽ thấy trước khi họ thanh toán.",
	"business/stickers::biz_stickers_intro_c2":
		"Chúng tôi sẽ gửi cho bạn một gói miễn phí ở bất cứ đâu tại Hoa Kỳ hoặc Canada, hoặc bạn có thể tự in ở bất cứ đâu trên thế giới.",
	"business/stickers::biz_stickers_option_canada":
		"🇨🇦 Canada — Miễn phí qua thư",
	"business/stickers::biz_stickers_option_print":
		"🌍 Toàn cầu — Tự in",
	"business/stickers::biz_stickers_option_usa":
		"🇺🇸 Hoa Kỳ — Miễn phí qua thư",
	"business/stickers::biz_stickers_placeholder_translation1":
		"Bản dịch cho \"Bitcoin Accepted Here\"",
	"business/stickers::biz_stickers_placeholder_translation2":
		"Bản dịch cho \"Quét để biết vì sao Bitcoin tốt cho doanh nghiệp.\"",
	"business/stickers::biz_stickers_print_c1":
		"Bạn có thể tự in nhãn dán \"Bitcoin Accepted Here\" của riêng mình, bất kể bạn sống ở đâu. Nhấp vào ngôn ngữ của bạn bên dưới để tải xuống các tệp nhãn dán và hướng dẫn in.",
	"business/stickers::biz_stickers_print_header":
		"In tệp nhãn dán của riêng bạn",
	"business/stickers::biz_stickers_request_c1":
		"Điền vào biểu mẫu bên dưới để yêu cầu các tệp nhãn dán \"Bitcoin Accepted Here\" bằng ngôn ngữ địa phương của bạn. Chúng tôi sẽ thông báo khi chúng đã sẵn sàng.",
	"business/stickers::biz_stickers_request_header":
		"Không thấy ngôn ngữ của bạn?",
	"business/stickers::biz_stickers_step_description":
		"Chúng tôi sẽ gửi miễn phí một gói đến địa chỉ ở Hoa Kỳ và Canada. Ở bất cứ nơi nào khác trên thế giới, bạn có thể tự in.",
	"business/stickers::biz_stickers_step_header":
		"Bạn muốn nhận nhãn dán bằng cách nào?",

	// ─── business/maps ───
	"business/maps::biz_maps_form_header":
		"Cho chúng tôi biết về doanh nghiệp của bạn",
	"business/maps::biz_maps_form_intro":
		"Chúng tôi chỉ cần một vài thông tin để liệt kê bạn. Dữ liệu địa chỉ chỉ được giữ đủ lâu để gửi doanh nghiệp của bạn đến các bản đồ.",
	"business/maps::biz_maps_hero_subtitle":
		"Liệt kê doanh nghiệp của bạn miễn phí trên BTC Map — danh bạ mở, toàn cầu của các thương nhân chấp nhận Bitcoin — để những người dùng Bitcoin gần đó có thể tìm thấy bạn và chi tiêu Bitcoin tại doanh nghiệp của bạn.",
	"business/maps::biz_maps_hero_title":
		"Đưa doanh nghiệp của bạn lên các bản đồ thương nhân Bitcoin",
	"business/maps::biz_maps_intro_c1":
		"Người dùng Bitcoin chủ động tìm những nơi để chi tiêu. Đưa doanh nghiệp của bạn lên bản đồ giúp bạn xuất hiện trước mọi người dùng Bitcoin đang tìm nơi để ăn, mua sắm hoặc lưu trú gần đó — hoàn toàn miễn phí cho bạn.",
	"business/maps::biz_maps_intro_c2":
		"Chỉ cần điền vào biểu mẫu ngắn bên dưới và chúng tôi sẽ gửi doanh nghiệp của bạn đến BTC Map và các bản đồ thương nhân Bitcoin khác giúp bạn.",
	"business/maps::biz_maps_meta_description":
		"Liệt kê doanh nghiệp của bạn miễn phí trên BTC Map và các bản đồ thương nhân Bitcoin khác để những người dùng Bitcoin gần đó có thể tìm thấy bạn.",
	"business/maps::biz_maps_placeholder_address": "Địa chỉ đường",
	"business/maps::biz_maps_placeholder_category":
		"Danh mục (ví dụ: nhà hàng, quán cà phê, khách sạn)",
	"business/maps::biz_maps_placeholder_city": "Thành phố",
	"business/maps::biz_maps_placeholder_country": "Quốc gia",
	"business/maps::biz_maps_placeholder_name": "Tên doanh nghiệp",
	"business/maps::biz_maps_placeholder_region":
		"Bang / Tỉnh / Vùng",
	"business/maps::biz_maps_placeholder_website":
		"Trang web (tùy chọn)",
	"business/maps::biz_maps_view_map_cta": "Xem BTC Map",

	// ─── business/maps-success ───
	"business/maps-success::biz_maps_success_btn_view_map":
		"Xem BTC Map",
	"business/maps-success::biz_maps_success_hero_subtitle":
		"Cảm ơn bạn đã gửi doanh nghiệp của mình. Chúng tôi sẽ liệt kê bạn trên các bản đồ thương nhân Bitcoin trong thời gian ngắn.",
	"business/maps-success::biz_maps_success_hero_title":
		"Đã nhận yêu cầu 🎉",
	"business/maps-success::biz_maps_success_timeline_c1":
		"Doanh nghiệp của bạn sẽ được liệt kê trên BTC Map và các danh bạ thương nhân Bitcoin khác trong vòng 1 đến 2 tuần. Chúng tôi xem xét từng yêu cầu thủ công để giữ cho các bản đồ chính xác.",
	"business/maps-success::biz_maps_success_timeline_c2":
		"Sau khi danh sách của bạn được kích hoạt, những người dùng Bitcoin gần đó có thể tìm thấy doanh nghiệp của bạn và đến đó chi tiêu Bitcoin.",
	"business/maps-success::biz_maps_success_timeline_header":
		"Điều gì xảy ra tiếp theo",
	"business/maps-success::biz_maps_success_view_c1":
		"Trong khi chờ đợi, hãy xem qua BTC Map để thấy mạng lưới ngày càng phát triển của các doanh nghiệp chấp nhận Bitcoin trên khắp thế giới.",
	"business/maps-success::biz_maps_success_view_header":
		"Xem nơi bạn sẽ xuất hiện",

	// ─── business/sticker-success ───
	"business/sticker-success::biz_sticker_success_btn_order_bulk":
		"Đặt số lượng lớn",
	"business/sticker-success::biz_sticker_success_btn_request_more":
		"Yêu cầu thêm một gói miễn phí",
	"business/sticker-success::biz_sticker_success_hero_subtitle":
		"Bạn sẽ nhận được nhãn dán \"Bitcoin Accepted Here\" miễn phí trong vòng 2 đến 4 tuần, trong một phong bì trắng đơn giản với 3 nhãn dán bên trong.",
	"business/sticker-success::biz_sticker_success_hero_title":
		"Nhãn dán của bạn đang trên đường tới 🎉",
	"business/sticker-success::biz_sticker_success_more_c1":
		"Nếu 3 nhãn dán không đủ cho doanh nghiệp của bạn, đừng ngần ngại yêu cầu thêm một gói miễn phí — hoặc đặt số lượng lớn từ chính nhà in mà chúng tôi sử dụng.",
	"business/sticker-success::biz_sticker_success_more_header":
		"Cần thêm nhãn dán?",
	"business/sticker-success::biz_sticker_success_tip_1":
		"Trên cửa trước hoặc cửa sổ để khách hàng thấy trước khi họ bước vào",
	"business/sticker-success::biz_sticker_success_tip_2":
		"Gần quầy thanh toán, máy POS hoặc khu vực thanh toán",
	"business/sticker-success::biz_sticker_success_tip_3":
		"Trên thực đơn, bảng giá hoặc hộp tiền tip",
	"business/sticker-success::biz_sticker_success_tip_4":
		"Đừng dán ở bất cứ nơi nào bạn không sở hữu hoặc không có sự cho phép",
	"business/sticker-success::biz_sticker_success_tips_header":
		"Những nơi tốt để dán nhãn của bạn",

	// ─── business/sticker-language-success ───
	"business/sticker-language-success::biz_sticker_language_success_hero_subtitle":
		"Cảm ơn bạn đã yêu cầu các tệp nhãn dán \"Bitcoin Accepted Here\" bằng ngôn ngữ của bạn.",
	"business/sticker-language-success::biz_sticker_language_success_hero_title":
		"Đã nhận yêu cầu 🎉",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c1":
		"Chúng tôi sẽ tạo và xuất bản các tệp nhãn dán của bạn trong vòng 3 đến 4 tuần. Sau khi chúng đã sẵn sàng, bạn sẽ có thể tải xuống và in chúng miễn phí từ trang tệp nhãn dán của chúng tôi.",
	"business/sticker-language-success::biz_sticker_language_success_timeline_c2":
		"Các tệp nhãn dán được phát hành theo lô, vì vậy có thể mất vài tuần để ngôn ngữ của bạn được phát hành. Cảm ơn sự kiên nhẫn của bạn!",
	"business/sticker-language-success::biz_sticker_language_success_timeline_header":
		"Điều gì xảy ra tiếp theo",

	// ─── business/accounting ───
	"business/accounting::accounting_card_bpr_source":
		"Bitcoin Price Report",
	"business/accounting::accounting_card_pacioli_source":
		"satoshipacioli.com",
	"business/accounting::accounting_card_pacioli_title":
		"Satoshi Pacioli Accounting Services",
	"business/accounting::accounting_card_spreadsheet_source":
		"The Spreadsheet Guru",
	"business/accounting::accounting_card_wallets_source":
		"bitcoin.rocks",
	"business/accounting::accounting_example_gain_result": "+10 đô la",
	"business/accounting::accounting_example_loss_result": "−10 đô la",
	"business/accounting::accounting_description":
		"Hướng dẫn dễ hiểu về việc chấp nhận Bitcoin trong sổ sách kế toán của bạn — ví hỗn hợp, giá gốc, lãi vốn và khi nào nên gọi kế toán viên.",
	"business/accounting::accounting_s1_c1":
		"Cách đơn giản nhất để chấp nhận Bitcoin là sử dụng một ví hỗn hợp tự động bán 100% Bitcoin bạn nhận được lấy đô la (hoặc đồng tiền địa phương của bạn) ngay lập tức khi một thanh toán đến.",
	"business/accounting::accounting_s1_c2":
		"Với cách thiết lập này, sổ sách của bạn trông giống hệt như hôm nay — con số cuối cùng luôn là đô la, mỗi lần. Không có giá gốc, không có lãi vốn, không có bảng tính mới.",
	"business/accounting::accounting_s2":
		"Nếu bạn giữ một số Bitcoin: theo dõi giá gốc của bạn",
	"business/accounting::accounting_s2_c1":
		"Một số doanh nghiệp chọn giữ một phần Bitcoin họ nhận được thay vì tự động chuyển đổi tất cả. Nếu đó là bạn, bước bổ sung chính là theo dõi giá gốc — giá trị đô la của mỗi thanh toán Bitcoin vào ngày bạn nhận được.",
	"business/accounting::accounting_s2_c2":
		"Ngay cả khi bạn nghĩ về doanh nghiệp của mình hoàn toàn bằng Bitcoin, hầu hết các cơ quan thuế vẫn muốn báo cáo giá trị đô la. Tin tốt là: chỉ cần hai con số cho mỗi giao dịch — số lượng Bitcoin nhận được và giá trị đô la của nó vào ngày đó.",
	"business/accounting::accounting_s2_c3":
		"Sử dụng các công cụ bên dưới để tự động hóa việc tra cứu để bạn không phải kiểm tra giá mỗi ngày.",
	"business/accounting::accounting_s3":
		"Chi tiêu hoặc bán Bitcoin bạn đã giữ",
	"business/accounting::accounting_s3_c1":
		"Nếu bạn tự động chuyển đổi mọi thanh toán sang đô la, hãy bỏ qua phần này — nó không áp dụng cho bạn.",
	"business/accounting::accounting_s3_c2":
		"Nếu bạn đã giữ một số Bitcoin và sau đó quyết định chi tiêu hoặc bán nó, hãy thêm giá bán vào cùng bảng tính giá gốc. Sự khác biệt giữa giá trị Bitcoin khi bạn nhận và khi bạn chi tiêu hoặc bán nó là một khoản lãi hoặc lỗ vốn.",
	"business/accounting::accounting_s3_c3": "Hai ví dụ nhanh:",
	"business/accounting::accounting_s4":
		"Cần một chuyên gia thông thạo Bitcoin?",
	"business/accounting::accounting_s4_c1":
		"Nếu bạn muốn giao việc này cho người khác — hoặc kế toán Bitcoin của bạn phức tạp hơn những gì một ví hỗn hợp có thể xử lý — chúng tôi rất khuyến nghị Satoshi Pacioli Accounting Services, một công ty chuyên về kế toán Bitcoin cho doanh nghiệp.",
	"business/accounting::bitcoin_business_accounting_guide":
		"Kế toán Bitcoin cho doanh nghiệp của bạn",
	"business/accounting::accounting_card_bpr_label": "GIÁ BITCOIN",
	"business/accounting::accounting_card_bpr_title":
		"Tra cứu giá đô la hiện tại hoặc lịch sử của Bitcoin",
	"business/accounting::accounting_card_pacioli_label":
		"KẾ TOÁN VIÊN BITCOIN",
	"business/accounting::accounting_card_spreadsheet_label":
		"NHẬP EXCEL",
	"business/accounting::accounting_card_spreadsheet_title":
		"Đưa giá Bitcoin vào Excel tự động",
	"business/accounting::accounting_card_wallets_label": "VÍ HỖN HỢP",
	"business/accounting::accounting_card_wallets_title":
		"Xem các ví doanh nghiệp được khuyến nghị của chúng tôi",
	"business/accounting::accounting_disclaimer":
		"Hướng dẫn này chỉ nhằm mục đích cung cấp thông tin và không được coi là lời khuyên thuế. Để có lời khuyên thuế cụ thể cho tình huống của bạn, vui lòng tham khảo ý kiến của một kế toán viên có trình độ.",
	"business/accounting::accounting_disclaimer_label": "Vui lòng lưu ý",
	"business/accounting::accounting_example_feb_1": "Ngày 1/2",
	"business/accounting::accounting_example_gain_badge": "Lãi vốn",
	"business/accounting::accounting_example_gain_explain":
		"Bạn ghi nhận khoản lãi vốn 10 đô la.",
	"business/accounting::accounting_example_jan_1": "Ngày 1/1",
	"business/accounting::accounting_example_loss_badge": "Lỗ vốn",
	"business/accounting::accounting_example_loss_explain":
		"Bạn ghi nhận khoản lỗ vốn 10 đô la.",
	"business/accounting::accounting_example_received_label": "Nhận",
	"business/accounting::accounting_example_sold_label":
		"Đã bán hoặc đã chi",
	"business/accounting::accounting_hero_subtitle":
		"Chấp nhận Bitcoin tại doanh nghiệp của bạn không nhất thiết phải làm phức tạp việc kế toán. Đây là phiên bản ngắn gọn — cùng các công cụ và chuyên gia để làm cho việc đó trở nên dễ dàng.",
	"business/accounting::accounting_intro_c1":
		"Nếu bạn đã chấp nhận tiền mặt hoặc thẻ, thêm Bitcoin vào sổ sách kế toán doanh nghiệp đơn giản hơn vẻ ngoài. Bạn có hai con đường: tự động chuyển đổi mỗi thanh toán Bitcoin sang đô la ngay khi nó đến (không cần kế toán mới) hoặc giữ một phần dưới dạng Bitcoin (vài con số bổ sung để theo dõi).",
	"business/accounting::accounting_intro_c2":
		"Hướng dẫn này dẫn dắt bạn qua cả hai — để bạn có thể chọn cái phù hợp với doanh nghiệp của mình và bắt đầu chấp nhận Bitcoin với sự tự tin.",
	"business/accounting::accounting_s1":
		"Con đường dễ dàng: tự động chuyển đổi sang đô la",
	"business/accounting::accounting_s3_c6":
		"Vậy là xong. Phép toán cơ bản giống hệt như cách bất kỳ tài sản tăng giá hoặc giảm giá nào khác được hạch toán.",
	"business/accounting::sources_bitcoin_price_report":
		"Bitcoin Price Report — Giá đô la hiện tại & lịch sử của Bitcoin",
	"business/accounting::sources_satoshi_pacioli":
		"Satoshi Pacioli Accounting Services — Kế toán Bitcoin cho doanh nghiệp",
	"business/accounting::sources_spreadsheet_guru":
		"The Spreadsheet Guru — Nhập giá tiền điện tử vào Excel",

	// ─── business/sticker-files/english/index ───
	"business/sticker-files/english/index::english_bitcoin_accepted_here_sticker_files":
		"Tệp nhãn dán \"Bitcoin Accepted Here\" tiếng Anh",
	"business/sticker-files/english/index::english_biz_sticker_files_description":
		"Tải xuống các tệp nhãn dán tiếng Anh để tự in nhãn dán \"Bitcoin Accepted Here\" của bạn.",
	"business/sticker-files/english/index::biz_stickers_english_hero_subtitle":
		"In nhãn dán \"Bitcoin Accepted Here\" của riêng bạn bằng tiếng Anh để cho khách hàng biết bạn chấp nhận Bitcoin.",
	"business/sticker-files/english/index::biz_stickers_english_hero_title":
		"Tải xuống tệp nhãn dán \"Bitcoin Accepted Here\" tiếng Anh",
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
		`[part5] filled=${filled} alreadyFilled=${alreadyFilled} unmatched=${unmatched} (in dictionary: ${
			Object.keys(TRANSLATIONS).length
		})`,
	);
}

main();
