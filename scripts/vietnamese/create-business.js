/**
 * Creates Vietnamese (vi) translation files for all business/ pages
 */

const fs = require('fs');
const path = require('path');

const i18nDir = path.join(__dirname, '..', '..', 'i18n');
const lang = 'vi';
const today = '2026-04-02';

const meta = {
	"@metadata": {
		"authors": ["Satoshi"],
		"last-updated": today,
		"locale": lang
	}
};

function writeFile(relPath, data) {
	const filePath = path.join(i18nDir, lang, relPath);
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
	fs.writeFileSync(filePath, JSON.stringify({ ...meta, ...data }, null, '\t') + '\n', 'utf8');
	console.log(`CREATED: ${filePath}`);
}

// business/index
writeFile(`business/index_${lang}.json`, {
	"bitcoin_is_good_for_business": "Bitcoin tốt cho doanh nghiệp",
	"biz_header": "BITCOIN TỐT CHO DOANH NGHIỆP",
	"biz_s1": "Phí thấp không có mức tối thiểu",
	"biz_s1_c1": "Bitcoin cho phép bạn nhận thanh toán trực tiếp từ khách hàng, giống như tiền mặt. Mạng Bitcoin hoạt động không cần trung gian như ngân hàng và công ty thẻ tín dụng thu phí cao.",
	"biz_s2": "Thanh toán tức thì",
	"biz_s2_c1": "Giống như tiền mặt, các khoản thanh toán Bitcoin được xử lý tức thì. Bạn không cần chờ công ty thẻ tín dụng hoặc ngân hàng trả tiền cho bạn. Thay vào đó, bạn có quyền truy cập vào tiền của mình ngay lập tức.",
	"biz_s3": "Không hoàn tiền hoặc gian lận",
	"biz_s3_c1": "Vì thanh toán Bitcoin diễn ra trực tiếp giữa bạn và khách hàng, không ai có thể lấy lại tiền của bạn bằng yêu cầu hoàn tiền.",
	"biz_s3_c2": "Bitcoin giả không thể được gửi trên Mạng Bitcoin, nghĩa là bạn không bao giờ phải lo lắng về các giao dịch gian lận có thể gây thiệt hại cho doanh nghiệp.",
	"biz_s4": "Thu hút thêm khách hàng",
	"biz_s4_c1": "Hàng triệu người sở hữu Bitcoin và muốn chi tiêu Bitcoin tại những nơi chấp nhận.",
	"biz_s4_c2": "Chỉ cần chấp nhận Bitcoin, doanh nghiệp của bạn có thể được liệt kê trên bản đồ thương nhân Bitcoin và tiếp cận miễn phí với khách hàng Bitcoin mới.",
	"biz_s4_c3": "Chấp nhận Bitcoin hoàn toàn miễn phí. Không có hợp đồng hay phí ẩn."
});

// business/why
writeFile(`business/why_${lang}.json`, {
	"learn_why_bitcoin_is_good_for_business": "Tìm hiểu tại sao Bitcoin tốt cho doanh nghiệp",
	"why_header": "BITCOIN TỐT CHO DOANH NGHIỆP",
	"why_good_for_you": "BITCOIN CŨNG TỐT CHO BẠN!",
	"why_learn_more_lowercase": "Tìm hiểu thêm.",
	"why_s1": "Bitcoin không có lạm phát",
	"why_s1_c1": "Lạm phát xảy ra khi nhiều tiền hơn được in hoặc tạo ra từ hư không. Điều này làm tiền của bạn mất giá trị theo thời gian.",
	"why_s1_c2": "Bitcoin có nguồn cung cố định, nghĩa là không ai có thể in thêm Bitcoin.",
	"why_s2": "Bitcoin không có tình trạng rút tiền hàng loạt",
	"why_s2_c1": "Nhiều ngân hàng Mỹ đã sụp đổ trong vài năm qua do tình trạng rút tiền hàng loạt.",
	"why_s2_c2": "Thay vì chỉ giữ tiền cho bạn, ngân hàng đầu tư và cho vay tiền của bạn. Nếu những khoản đầu tư đó không tốt, họ không có đủ để trả lại cho bạn.",
	"why_s2_c3": "Và quỹ bảo hiểm FDIC chỉ có 1 đô la cho mỗi 100 đô la họ bảo hiểm.",
	"why_s3": "Bitcoin không cần xin phép",
	"why_s3_c1": "Không giống như các mạng tài chính truyền thống, Bitcoin không cần xin phép để sử dụng.",
	"why_s3_c2": "Điều đó có nghĩa là không ai có thể ngăn bạn sử dụng Bitcoin vì bất kỳ lý do nào. Đây là mạng tài chính đầu tiên bạn có thể sử dụng mà không lo bị kiểm duyệt hoặc tịch thu.",
	"why_s4": "Bitcoin đang xây dựng một thế giới tốt đẹp hơn",
	"why_s4_c1": "Bitcoin là một công nghệ bị hiểu lầm đang xây dựng một thế giới tốt đẹp hơn.",
	"why_s4_c2": "Bitcoin đã giúp các nhà hoạt động nhân quyền đấu tranh cho tự do, giảm phát thải khí methane toàn cầu, cứu các vườn quốc gia, và còn nhiều hơn nữa."
});

// business/guide
writeFile(`business/guide_${lang}.json`, {
	"accept_bitcoin_payments_at_your_business": "Chấp Nhận Thanh Toán Bitcoin Tại Doanh Nghiệp Của Bạn",
	"guide_header": "SẴN SÀNG CHẤP NHẬN BITCOIN TẠI DOANH NGHIỆP CỦA BẠN?"
});

// business/faq
writeFile(`business/faq_${lang}.json`, {
	"frequently_asked_questions_about_accepting_bitcoin": "Câu Hỏi Thường Gặp Về Chấp Nhận Bitcoin",
	"faq_description": "Bạn có câu hỏi về việc chấp nhận thanh toán Bitcoin tại doanh nghiệp?",
	"faq_header": "BẠN CÓ CÂU HỎI VỀ VIỆC CHẤP NHẬN THANH TOÁN BITCOIN?",
	"faq_s1": "Bitcoin là gì?",
	"faq_s1_c1": "Bitcoin là hai thứ: tiền kỹ thuật số và mạng máy tính.",
	"faq_s1_c2": "Bạn có thể gửi bitcoin (tiền kỹ thuật số) trực tiếp cho người khác bằng Mạng Bitcoin.",
	"faq_s1_c3": "Mạng Bitcoin có thể hoạt động mà không cần trung gian hay cơ quan trung ương, như ngân hàng hoặc công ty thẻ tín dụng, vì vậy bạn có thể tránh phí giao dịch của họ.",
	"faq_s1_c4": "Giao dịch Bitcoin đạt thanh toán cuối cùng nhanh chóng (10 phút) và không bao giờ có thể bị hoàn lại, vì vậy bạn có thể yên tâm rằng tiền của bạn là tiền của bạn.",
	"faq_s2": "Bitcoin có thể mang lại lợi ích gì cho doanh nghiệp của tôi?",
	"faq_s2_c1": "Bitcoin cho phép bạn chấp nhận thanh toán với phí thấp hơn và thu hút thêm khách hàng. Thanh toán Bitcoin có phí thấp không có mức tối thiểu, được xử lý tức thì, và miễn nhiễm với hoàn tiền và gian lận.",
	"faq_s2_c2": "Chấp nhận Bitcoin miễn phí và cho phép bạn liệt kê doanh nghiệp trên bản đồ thương nhân Bitcoin để người dùng Bitcoin dễ dàng tìm thấy doanh nghiệp của bạn.",
	"faq_s2_c3": "Xem tất cả các cách Bitcoin tốt cho doanh nghiệp.",
	"faq_s3": "Làm thế nào để chấp nhận thanh toán Bitcoin?",
	"faq_s3_c1": "Tất cả những gì bạn cần để chấp nhận thanh toán Bitcoin là một ví Bitcoin miễn phí.",
	"faq_s3_c2": "Hướng dẫn ví của chúng tôi sẽ giúp bạn thiết lập nhanh chóng và dễ dàng để bạn có thể mở khóa lợi ích của việc chấp nhận Bitcoin ngay hôm nay!",
	"faq_s3_c3": "Xem Hướng Dẫn Ví",
	"faq_s4": "Tôi có thể chuyển đổi các khoản thanh toán Bitcoin nhận được sang tiền tệ địa phương không?",
	"faq_s4_c1": "Có! Bằng cách sử dụng ví hỗn hợp, bạn có thể tự động chuyển đổi các khoản thanh toán Bitcoin nhận được sang tiền tệ địa phương ngay khi nhận được thanh toán.",
	"faq_s4_c2": "Hướng dẫn ví của chúng tôi có thể giúp bạn thiết lập nhanh chóng và dễ dàng.",
	"faq_s4_c3": "Bạn cũng có thể chọn giữ một phần thanh toán nhận được dưới dạng Bitcoin. Tiết kiệm bằng Bitcoin có nhiều lợi ích:",
	"faq_s4_c4": "Bitcoin là hệ thống tài chính dự trữ đầy đủ.",
	"faq_s4_c5": "Bitcoin không có lạm phát.",
	"faq_s4_c6": "Những lợi ích này khiến Bitcoin trở thành cách tuyệt vời để lưu trữ tiền dài hạn.",
	"faq_s4_c7": "Ngay cả khi bạn chọn chuyển đổi tất cả thanh toán Bitcoin sang đô la, bạn vẫn được lợi từ việc chấp nhận thanh toán với phí thấp hơn nhiều trong khi tiếp cận nhiều khách hàng tiềm năng hơn.",
	"faq_s5": "Tôi có thể chấp nhận thanh toán Bitcoin trực tiếp không?",
	"faq_s5_c1": "Có! Rất dễ dàng chấp nhận thanh toán Bitcoin trực tiếp bằng ví Bitcoin.",
	"faq_s5_c2": "Hướng dẫn ví của chúng tôi có thể giúp bạn chọn ví Bitcoin phù hợp nhất cho doanh nghiệp.",
	"faq_s5_c3": "Xem Hướng Dẫn Ví",
	"faq_s6": "Tôi có thể chấp nhận thanh toán Bitcoin trực tuyến không?",
	"faq_s6_c1": "Có! Rất dễ dàng chấp nhận thanh toán Bitcoin trực tuyến với cửa hàng trực tuyến hiện có.",
	"faq_s6_c2": "Xem hướng dẫn ví của chúng tôi để biết thêm thông tin.",
	"faq_s7": "Làm thế nào để khách hàng biết tôi chấp nhận Bitcoin?",
	"faq_s7_c1": "Chúng tôi cung cấp nhãn dán miễn phí 'Chấp Nhận Bitcoin Tại Đây' mà bạn có thể trưng bày trong doanh nghiệp để thông báo cho khách hàng rằng bạn chấp nhận Bitcoin.",
	"faq_s7_c2": "Nhấp vào đây để yêu cầu nhãn dán.",
	"faq_s7_c3": "Bạn cũng có thể liệt kê doanh nghiệp miễn phí trên bản đồ thương nhân Bitcoin và tiếp cận hàng triệu người dùng Bitcoin muốn chi tiêu Bitcoin tại các doanh nghiệp chấp nhận.",
	"faq_s7_c4": "Đăng ký ngay.",
	"faq_s8": "Làm thế nào để có thêm khách hàng bằng cách chấp nhận Bitcoin?",
	"faq_s8_c1": "Có hàng triệu người dùng Bitcoin muốn chi tiêu Bitcoin tại các doanh nghiệp chấp nhận.",
	"faq_s8_c2": "Chỉ cần chấp nhận thanh toán Bitcoin, doanh nghiệp của bạn có thể được liệt kê miễn phí trên bản đồ thương nhân Bitcoin và tiếp cận khách hàng tiềm năng mới.",
	"faq_s8_c3": "Đăng ký ngay.",
	"faq_s9": "Chấp nhận Bitcoin tốn bao nhiêu?",
	"faq_s9_c1": "Chấp nhận Bitcoin tại doanh nghiệp hoàn toàn miễn phí. Không có hợp đồng hay phí ẩn.",
	"faq_s9_c2": "Xem hướng dẫn ví của chúng tôi để bắt đầu chấp nhận thanh toán Bitcoin ngay hôm nay."
});

// business/wallets
writeFile(`business/wallets_${lang}.json`, {
	"how_to_accept_bitcoin_payments": "Cách Chấp Nhận Thanh Toán Bitcoin",
	"wallets_header": "TẢI VÍ BITCOIN MIỄN PHÍ ĐỂ CHẤP NHẬN THANH TOÁN BITCOIN",
	"wallets_intro_1": "Tất cả ví Bitcoin đều tương thích với nhau, vì vậy khách hàng có thể thanh toán cho bạn bằng Bitcoin bất kể họ dùng ví nào.",
	"wallets_intro_2": "Ví chỉ Bitcoin:",
	"wallets_intro_3": "Đây là ví Bitcoin thuần túy mở khóa đầy đủ lợi ích của Bitcoin: không trung gian, phí thấp, và không hoàn tiền hay gian lận.",
	"wallets_intro_4": "Ví hỗn hợp:",
	"wallets_intro_5": "Cho phép bạn đổi bất kỳ phần nào Bitcoin sang đô la ngay khi khách hàng thanh toán. Phí vẫn thấp hơn thanh toán thẻ tín dụng, nhưng cao hơn thanh toán Bitcoin thuần túy.",
	"wallets_intro_6": "Cả hai đều là cách tuyệt vời để chấp nhận Bitcoin. Ví cụ thể bạn sử dụng sẽ phụ thuộc vào quy mô và loại hình doanh nghiệp.",
	"wallets_choice_sole": "ví cho doanh nghiệp cá nhân",
	"wallets_choice_multiple": "ví cho doanh nghiệp có nhiều nhân viên",
	"wallets_choice_online": "ví cho doanh nghiệp trực tuyến",
	"wallets_choice_invoice": "ví cho doanh nghiệp dựa trên hóa đơn",
	"wallets_name_breez": "BREEZ",
	"wallets_name_open_node": "OPEN NODE",
	"wallets_name_ibex_pay": "IBEX PAY",
	"wallets_name_btcpay_server": "BTCPAY SERVER",
	"wallets_name_square": "SQUARE",
	"wallets_name_zaprite": "ZAPRITE",
	"wallets_square_note": "Bạn có thể chấp nhận thanh toán Bitcoin với thiết bị Square PoS hiện có hoặc tích hợp cửa hàng trực tuyến. Chưa bao giờ việc chấp nhận thanh toán Bitcoin dễ dàng đến thế.",
	"wallets_feature_bitcoin_only": "Ví chỉ Bitcoin",
	"wallets_feature_no_info": "Không cần thông tin",
	"wallets_feature_in_person": "Chỉ thanh toán trực tiếp",
	"wallets_feature_settles_bitcoin": "Thanh toán 100% bằng Bitcoin",
	"wallets_feature_hybrid": "Ví hỗn hợp",
	"wallets_feature_info": "Cần thông tin doanh nghiệp",
	"wallets_feature_in_person_online": "Thanh toán trực tiếp & trực tuyến",
	"wallets_feature_settles_both": "Thanh toán bằng Bitcoin & đô la",
	"wallets_feature_multiple_employees": "Hỗ trợ nhiều nhân viên (BPTs)",
	"wallets_feature_self_hosted": "Tự lưu trữ = 0% phí",
	"wallets_feature_online_store": "Tích hợp cửa hàng trực tuyến",
	"wallets_feature_invoicing": "Phần mềm lập hóa đơn miễn phí",
	"wallets_get_wallet": "TẢI VÍ"
});

// business/accounting
writeFile(`business/accounting_${lang}.json`, {
	"bitcoin_business_accounting_guide": "Hướng Dẫn Kế Toán Bitcoin Cho Doanh Nghiệp",
	"accounting_description": "Tìm hiểu cách hạch toán đúng các khoản thanh toán Bitcoin trong kế toán doanh nghiệp.",
	"accounting_header": "HƯỚNG DẪN KẾ TOÁN BITCOIN",
	"accounting_s1_c1": "Chấp nhận Bitcoin có nhiều lợi ích như chấp nhận thanh toán với phí thấp hơn & thu hút thêm khách hàng.",
	"accounting_s1_c2": "Nếu bạn sử dụng Ví Hỗn Hợp từ Hướng Dẫn Ví của chúng tôi và tự động bán 100% Bitcoin nhận được lấy đô la, bạn không cần thay đổi gì trong kế toán hiện tại.",
	"accounting_s1_c3": "Xem Hướng Dẫn Ví.",
	"accounting_s1_c4": "Tuy nhiên, nếu bạn giữ một số khoản thanh toán Bitcoin dưới dạng Bitcoin, bạn sẽ cần theo dõi một vài chi tiết cho kế toán. Điều này có vẻ đáng sợ lúc đầu, nhưng thực ra khá đơn giản.",
	"accounting_s1_c5": "Xin lưu ý: hướng dẫn này chỉ mang tính thông tin và không được coi là tư vấn thuế.",
	"accounting_s1_c6": "Nếu bạn cần tư vấn thuế, chúng tôi rất khuyến nghị Satoshi Pacioli Accounting Services, một công ty kế toán chuyên về kế toán Bitcoin.",
	"accounting_s2": "THEO DÕI GIÁ GỐC CỦA BẠN",
	"accounting_s2_c1": "Theo dõi giá gốc sẽ là sự khác biệt lớn nhất giữa kế toán đô la và kế toán Bitcoin. Ngay cả khi bạn xem doanh nghiệp hoàn toàn bằng Bitcoin, bạn cần báo cáo giá trị đô la của mỗi giao dịch trong kê khai thuế.",
	"accounting_s2_c2": "Nếu bạn sử dụng QuickBooks, bạn có thể làm điều này tự động bằng plugin Bitcoin Sync.",
	"accounting_s2_c3": "Nếu bạn không sử dụng QuickBooks, chúng tôi khuyến nghị Satoshi Pacioli Accounting Services, một công ty kế toán chuyên về kế toán Bitcoin.",
	"accounting_s2_c4": "Để làm thủ công, bạn chỉ cần theo dõi số lượng Bitcoin nhận được và giá trị đô la của giao dịch Bitcoin vào ngày đó.",
	"accounting_s2_c5": "Bạn có thể xem giá đô la hiện tại của Bitcoin tại đây.",
	"accounting_s2_c6": "Theo dõi thông tin này trong bảng tính Excel và giao cho kế toán của bạn.",
	"accounting_s2_c7": "Bạn cũng có thể nhập dữ liệu này vào Excel tự động.",
	"accounting_s2_c8": "Bạn cũng có thể xem giá đô la lịch sử của Bitcoin vào những ngày trong quá khứ, vì vậy bạn không cần làm điều này mỗi ngày.",
	"accounting_s3": "CHI TIÊU HOẶC BÁN BITCOIN CỦA BẠN",
	"accounting_s3_c1": "Nếu bạn sử dụng Ví Hỗn Hợp từ Hướng Dẫn Ví của chúng tôi và tự động bán 100% Bitcoin nhận được lấy đô la, bạn không cần thay đổi gì trong kế toán hiện tại.",
	"accounting_s3_c2": "Xem Hướng Dẫn Ví.",
	"accounting_s3_c3": "Nếu bạn chọn chi tiêu hoặc bán một số Bitcoin nhận được sau khi giữ một thời gian, bạn chỉ cần thêm giá bán vào bảng tính Excel theo dõi giá gốc.",
	"accounting_s3_c4": "Ví dụ, nếu bạn nhận được $100 Bitcoin vào ngày 1 tháng 1 và quyết định bán hoặc chi tiêu vào ngày 1 tháng 2 với giá trị mới là $110, bạn cần ghi nhận lợi nhuận vốn $10 trong kế toán.",
	"accounting_s3_c5": "Điều này cũng có thể ngược lại. Ví dụ, nếu bạn nhận được $100 Bitcoin vào ngày 1 tháng 1 và quyết định bán hoặc chi tiêu vào ngày 1 tháng 2 với giá trị mới là $90, bạn cần ghi nhận lỗ vốn $10 trong kế toán.",
	"accounting_s4": "TÔI CẦN THÊM TRỢ GIÚP",
	"accounting_s4_c1": "Nếu bạn cần thêm trợ giúp tích hợp Bitcoin vào kế toán doanh nghiệp, chúng tôi rất khuyến nghị Satoshi Pacioli Accounting Services, một công ty kế toán chuyên về kế toán Bitcoin.",
	"accounting_s4_c2": "Tìm hiểu thêm về Satoshi Pacioli Accounting Services."
});

// business/maps
writeFile(`business/maps_${lang}.json`, {
	"bitcoin_merchant_maps_list_your_business_for_free": "Bản Đồ Thương Nhân Bitcoin - Đăng ký doanh nghiệp miễn phí",
	"maps_header": "ĐĂNG KÝ TRÊN BẢN ĐỒ THƯƠNG NHÂN BITCOIN & THU HÚT THÊM KHÁCH HÀNG",
	"maps_request_details": "Nhập thông tin doanh nghiệp bên dưới và chúng tôi sẽ đăng ký bạn miễn phí trên bản đồ thương nhân Bitcoin. Điều này giúp người dùng Bitcoin tìm thấy doanh nghiệp của bạn và chi tiêu Bitcoin tại đó!",
	"maps_view": "Xem bản đồ tại đây."
});

// business/maps-success
writeFile(`business/maps-success_${lang}.json`, {
	"kit_success_1": "Doanh nghiệp của bạn sẽ được liệt kê trên bản đồ thương nhân Bitcoin trong 1 đến 2 tuần.",
	"kit_success_2": "Xem bản đồ tại đây."
});

// business/kit
writeFile(`business/kit_${lang}.json`, {
	"bitcoin_business_kit": "Bộ Tài Liệu Doanh Nghiệp Bitcoin",
	"kit_header": "TỰ IN BỘ TÀI LIỆU DOANH NGHIỆP BITCOIN",
	"kit_request": "YÊU CẦU BỘ TÀI LIỆU MIỄN PHÍ",
	"kit_request_details": "Mỗi Bộ Tài Liệu Doanh Nghiệp Bitcoin bao gồm hai tờ rơi để giúp dễ dàng thuyết phục một doanh nghiệp địa phương chấp nhận Bitcoin.",
	"kit_country_global_print": "Toàn cầu — Tự in bộ tài liệu",
	"kit_enter_address": "Nhập địa chỉ gửi thư và chúng tôi sẽ gửi cho bạn Bộ Tài Liệu Doanh Nghiệp Bitcoin miễn phí trong phong bì trắng. Dữ liệu địa chỉ được xóa sau khi bộ tài liệu được gửi.",
	"kit_print_details": "Bạn có thể tham gia bằng cách tự in tờ rơi, bất kể bạn sống ở đâu! Bạn cũng có thể gửi cho doanh nghiệp bộ tài liệu kỹ thuật số của chúng tôi để tránh phải in.",
	"kit_view_files": "XEM TẬP TIN",
	"kit_digital_kit": "BỘ TÀI LIỆU KỸ THUẬT SỐ",
	"kit_resources": "MỖI BỘ TÀI LIỆU LIÊN KẾT ĐẾN CÁC TÀI NGUYÊN MIỄN PHÍ NÀY"
});

// business/kit-success
writeFile(`business/kit-success_${lang}.json`, {
	"kit_success_header": "Bạn sẽ nhận được Bộ Tài Liệu Doanh Nghiệp Bitcoin trong 1 đến 2 tuần trong phong bì trắng."
});

// business/stickers
writeFile(`business/stickers_${lang}.json`, {
	"bitcoin_accepted_here_stickers": "Nhãn dán Chấp Nhận Bitcoin Tại Đây",
	"stickers_header": "NHẬN NHÃN DÁN MIỄN PHÍ 'CHẤP NHẬN BITCOIN TẠI ĐÂY'",
	"stickers_request": "Nhận nhãn dán miễn phí",
	"stickers_request_details": "Thông báo cho khách hàng rằng bạn chấp nhận thanh toán Bitcoin với những nhãn dán miễn phí 'Chấp Nhận Bitcoin Tại Đây'.",
	"stickers_country_global_print": "Toàn cầu — Tự in nhãn dán",
	"stickers_request_instructions": "Bạn sẽ nhận được ba nhãn dán 'Chấp Nhận Bitcoin Tại Đây' trong phong bì trắng. Nếu bạn cần nhiều hơn ba nhãn dán cho doanh nghiệp, hãy yêu cầu nhiều lần. Dữ liệu địa chỉ được xóa sau khi nhãn dán miễn phí được gửi.",
	"stickers_print_details": "Bạn có thể tự in nhãn dán 'Chấp Nhận Bitcoin Tại Đây', bất kể bạn sống ở đâu! Nhấp vào ngôn ngữ bên dưới để xem tập tin nhãn dán & hướng dẫn.",
	"stickers_request_language": "Không thấy ngôn ngữ của bạn? Điền biểu mẫu bên dưới để yêu cầu tập tin nhãn dán 'Chấp Nhận Bitcoin Tại Đây' bằng ngôn ngữ địa phương."
});

// business/sticker-success
writeFile(`business/sticker-success_${lang}.json`, {
	"sticker_success_details": "Bạn sẽ nhận được nhãn dán trong 1 đến 2 tuần trong phong bì trắng. Mỗi phong bì bao gồm 3 nhãn dán. Nếu bạn cần nhiều hơn 3 nhãn dán cho doanh nghiệp, hãy yêu cầu thêm một gói!"
});

// business/sticker-language-success
writeFile(`business/sticker-language-success_${lang}.json`, {
	"sticker_language_timeline": "Chúng tôi sẽ tạo và xuất bản tập tin nhãn dán của bạn trong 3 đến 4 tuần. Cảm ơn sự kiên nhẫn của bạn!"
});

// business/files/english/
writeFile(`business/files/english/index_${lang}.json`, {
	"print_your_own_bitcoin_business_kit": "Tự In Bộ Tài Liệu Doanh Nghiệp Bitcoin",
	"english_bbk_files_description": "Tải xuống tập tin tờ rơi tại đây.",
	"english_header": "TỰ IN TỜ RƠI BỘ TÀI LIỆU DOANH NGHIỆP BITCOIN TIẾNG ANH"
});

console.log('\nDone! Created all Vietnamese business translation files.');
